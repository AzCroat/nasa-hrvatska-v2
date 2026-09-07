// ═══════════════════════════════════════════════════════════
// B2 CURRICULUM — the expansion to 30 (Wave 4, 2026-08-28)
// ═══════════════════════════════════════════════════════════
//
// WHAT B2 WAS MISSING
// -------------------
// B2 had SIX lessons — the thinnest level in the app after C2, and the one
// where a learner spends longest. CEFR defines it as understanding complex text
// on abstract topics, interacting with fluency and spontaneity, and producing
// clear detailed argument with the advantages and disadvantages of options.
// The six covered clitics, the conditional, aspect in negation, complex
// sentences, the passive and written register. Everything else was absent:
//
//   * no UNREAL conditions — the level had the conditional MOOD but no way to
//     say "if I had known", which is most of what the mood is for;
//   * no verbal adverbs and no participial adjectives, so two of the three
//     constructions that make written Croatian look written were missing;
//   * no secondary imperfectives (-avati / -ivati), so the aspect system was
//     taught in one direction only: prefixes make perfectives, and nothing
//     explained how Croatian makes them imperfective again;
//   * no i-DECLENSION. A whole noun class — stvar, noć, ljubav, riječ, misao —
//     had never been taught at any level, and it is not rare: those are five of
//     the most common nouns in the language;
//   * and nothing for argument. The level whose descriptor is "explain a
//     viewpoint giving the advantages and disadvantages" had no concession, no
//     hedging, and no lesson on structuring a case.
//
// AUTHORING RULES — see CLAUDE.md → Croatian Content Authoring.

/** @type {ReadonlyArray<object>} */
export const LESSONS_B2 = [
  // ─────────────────────────────────────────────────────────
  // The i-Declension
  // ─────────────────────────────────────────────────────────
  {
    id: 'i-declension',
    title: 'The i-Declension',
    subtitle: 'Feminine nouns that end in a consonant — a whole class never taught',
    icon: '🗝️',
    level: 'B2',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Nouns That Broke Your Rule',
        body: 'A1 told you that a noun ending in a consonant is masculine. That rule is right most of the time and wrong about a class of words you use constantly: stvar, noć, ljubav, riječ, misao, radost. They are feminine, they end in a consonant, and they decline unlike anything you have met.',
        icon: '🗝️',
      },
      {
        type: 'rule',
        title: 'How to Spot Them',
        body: 'There is no reliable ending to look for, but there is a strong tendency: abstract nouns built from adjectives end in -ost and are all in this class — radost, mladost, ljubaznost, mogućnost, sposobnost. Beyond those, the common ones simply have to be learned as vocabulary, the way you learn any gender.',
        highlight: '-ost is always in this class',
      },
      {
        type: 'table',
        title: 'The Common Ones',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['stvar', 'thing', 'radost', 'joy'],
          ['noć', 'night', 'mladost', 'youth'],
          ['ljubav', 'love', 'mogućnost', 'possibility'],
          ['riječ', 'word', 'pomoć', 'help'],
          ['misao', 'thought', 'sol', 'salt'],
          ['večer', 'evening', 'krv', 'blood'],
        ],
      },
      {
        type: 'rule',
        title: 'The Two Endings That Catch People',
        body: 'Two forms differ from every feminine noun you know. The GENITIVE singular ends in -i, not -e: nemam soli, bez riječi, puno stvari. And the ACCUSATIVE is identical to the subject form — nothing changes at all: Volim noć. Vidim stvar. If you find yourself producing "noću" as an object, that is the -a pattern leaking in.',
        highlight: 'genitive -i · accusative unchanged',
      },
      {
        type: 'table',
        title: 'stvar, Declined',
        headers: ['Case', 'Singular', 'Plural'],
        rows: [
          ['nominative', 'stvar', 'stvari'],
          ['genitive', 'stvari', 'stvari'],
          ['dative', 'stvari', 'stvarima'],
          ['accusative', 'stvar', 'stvari'],
          ['locative', 'stvari', 'stvarima'],
          ['instrumental', 'stvari / stvarju', 'stvarima'],
        ],
      },
      {
        type: 'rule',
        title: 'Almost Everything Is -i',
        body: 'Look at that table again: in the singular, five of the six forms are either "stvar" or "stvari". That is the real news — this class is EASIER than the -a nouns, not harder. Learn "genitive, dative and locative are all -i, and the accusative equals the nominative", and you have the whole singular.',
        highlight: 'five forms, two shapes',
      },
      {
        type: 'rule',
        title: 'Adjectives Still Agree as Feminine',
        body: 'Because the noun is feminine, everything around it behaves the way it does with "žena", regardless of what the noun itself looks like. velika stvar, duga noć, prava ljubav, moja pomoć. In the plural: velike stvari, duge noći. Getting this right is what makes the class visible to a listener.',
        highlight: 'velika stvar · duga noć',
      },
      {
        type: 'rule',
        title: 'One Irregular Worth Knowing',
        body: '"Misao" (thought) has an o where you expect an l, and it comes back in every other form: misao, misli, misli, misao, mislima. The same alternation runs through the language — you have seen it in "posao / posla" — and it is a sound rule rather than an exception to memorise separately.',
        highlight: 'misao → misli',
      },
      {
        type: 'example',
        title: 'The Class in Use',
        items: [
          {
            hr: 'Nemam soli, možeš li donijeti?',
            en: 'I have no salt, could you bring some?',
            note: 'genitive after nemati → soli, not "sole"',
          },
          {
            hr: 'To je duga priča i duga noć.',
            en: 'That is a long story and a long night.',
            note: 'priča is an -a noun, noć is an i-noun; both feminine',
          },
          {
            hr: 'Volim noć više od dana.',
            en: 'I love the night more than the day.',
            note: 'accusative "noć" is unchanged',
          },
          {
            hr: 'Hvala na pomoći.',
            en: 'Thank you for the help.',
            note: 'locative after na → pomoći',
          },
          {
            hr: 'Ne razumijem ni riječi.',
            en: 'I do not understand a word.',
            note: 'genitive after a negative → riječi',
          },
          {
            hr: 'Postoji mogućnost da dođem.',
            en: 'There is a possibility that I will come.',
            note: '-ost nouns are all in this class',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Prošli smo cijelu noć bez riječi, ali s puno misli.',
            en: 'We spent the whole night without a word, but with many thoughts.',
            note: 'accusative noć unchanged; genitive riječi and misli',
          },
          {
            hr: 'U toj radosti zaboravio je na sve stvari koje ga muče.',
            en: 'In that joy he forgot all the things that trouble him.',
            note: 'locative radosti; accusative plural stvari',
          },
          {
            hr: 'Zbog ljubavi prema gradu ostala je u Rijeci nakon studija.',
            en: 'Out of love for the city she stayed in Rijeka after her studies.',
            note: 'zbog + genitive → ljubavi',
          },
          {
            hr: 'Nakon duge noći na poslu jedva je našao pravu riječ.',
            en: 'After a long night at work he could barely find the right word.',
            note: 'duge noći — feminine agreement in the genitive',
          },
          {
            hr: 'Imamo mogućnost da vlakom stignemo prije večeri.',
            en: 'We have the possibility of arriving by train before the evening.',
            note: 'accusative mogućnost unchanged; genitive večeri',
          },
          {
            hr: 'Hvala vam na pomoći i na lijepim riječima.',
            en: 'Thank you for the help and for the kind words.',
            note: 'locative plural riječima with feminine lijepim',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the genitive of "noć"?',
        options: ['noće', 'noći', 'noću', 'noća'],
        correct: 1,
        explanation:
          'The i-declension takes -i in the genitive singular, not the -e of the -a nouns: noći. "Noću" exists but is an adverb meaning "at night".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "I love the night"? (accusative)',
        options: ['Volim noć.', 'Volim noću.', 'Volim noći.', 'Volim noća.'],
        correct: 0,
        explanation:
          'In this class the accusative is identical to the subject form, so nothing changes: Volim noć. Producing "noću" here is the -a pattern from A1 leaking across.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors dominate. First, the -a pattern leaks into the accusative: learners say "Volim noću" or "Vidim stvaru" where the form does not change at all — Volim noć, Vidim stvar. Second, the genitive gets the -e of žena: "bez riječe", "nemam sole" — the class takes -i: bez riječi, nemam soli. Third, the adjective is left masculine because the noun looks masculine: "velik stvar", "dobar pomoć" — it is feminine throughout: velika stvar, dobra pomoć.',
        highlight: 'bez riječi, nemam soli',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Zbog ___ je ostao u Zagrebu." (Because of love, he stayed in Zagreb.)',
            options: ['ljubav', 'ljubave', 'ljubavi', 'ljubavu'],
            correct: 2,
            explanation:
              '"Zbog" takes the genitive, and an i-noun forms it in -i: ljubavi. "Ljubave" is the -a pattern and "ljubavu" is not a form of this class at all.',
          },
          {
            q: 'Complete: "Vidim jednu ___ na stolu." (I see one thing on the table.)',
            options: ['stvaru', 'stvari', 'stvar', 'stvare'],
            correct: 2,
            explanation:
              'The accusative of an i-noun is identical to the nominative: stvar. "Stvaru" is the -a pattern leaking in; "stvari" is the genitive or the plural.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'To je bila velika radost za sve nas.',
              'To je bio velik radost za sve nas.',
              'To je bila velika radosta za sve nas.',
              'To je bio veliki radost za sve nas.',
            ],
            correct: 0,
            explanation:
              '"Radost" is an -ost noun, so it is feminine: bila velika radost. The nominative does not add -a, and the adjective and the verb must agree as feminine.',
          },
          {
            q: 'What is wrong with "Hvala na pomoć"?',
            options: [
              'Nothing is wrong',
              '"na" should be "za"',
              '"pomoć" must be in the locative after "na": pomoći',
              '"hvala" needs the instrumental: pomoću',
            ],
            correct: 2,
            explanation:
              '"Hvala na" takes the locative, and in this class the locative singular is -i: hvala na pomoći. The accusative form "pomoć" is only right when nothing governs it.',
          },
          {
            q: 'Which of these nouns does NOT belong to the i-declension?',
            options: ['mladost', 'riječ', 'priča', 'noć'],
            correct: 2,
            explanation:
              '"Priča" ends in -a and declines like žena. The other three end in a consonant and are feminine — mladost by the -ost rule, riječ and noć as vocabulary.',
          },
          {
            q: 'Complete: "Razgovarali smo o mnogim ___." (We talked about many things.)',
            options: ['stvarima', 'stvarama', 'stvari', 'stvarih'],
            correct: 0,
            explanation:
              'The locative plural of the i-declension is -ima: o stvarima. "Stvarama" borrows the -a plural, and "stvari" is the nominative or genitive plural, not the locative.',
          },
          {
            q: 'Which form is the dative singular of "misao" (thought)?',
            options: ['misaou', 'misli', 'misao', 'mislu'],
            correct: 1,
            explanation:
              'The o of "misao" reverts to l in every other form, and the dative singular is -i: misli. The same sound rule gives posao → posla.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The i-Declension — Key Takeaways',
        points: [
          'Feminine nouns ending in a consonant: stvar, noć, ljubav, riječ, misao',
          'Every -ost noun belongs to this class',
          'Genitive, dative and locative singular are all -i',
          'The accusative is identical to the nominative — nothing changes',
          'Adjectives still agree as feminine: velika stvar, duga noć',
          'It is a SHORTER paradigm than the -a nouns, not a harder one',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Making Verbs Imperfective Again
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-suffixes',
    title: 'Making Verbs Imperfective Again',
    subtitle: 'The -avati and -ivati suffixes that run aspect in reverse',
    icon: '🔄',
    level: 'B2',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Other Half of the Aspect System',
        body: 'B1 showed you that a prefix makes a verb perfective: pisati → napisati. That is one direction. Croatian also runs the machine backwards — it takes a perfective verb and makes a NEW imperfective from it with a suffix. Without this half, aspect looks like a one-way street, and half the verbs you meet look irregular.',
        icon: '🔄',
      },
      {
        type: 'rule',
        title: 'Why Croatian Needs It',
        body: '"Zapisati" (to note down) is perfective. But you often need to say you note things down repeatedly, or are doing it right now — and there is no plain imperfective to fall back on, because "pisati" has lost the "down" meaning the prefix added. So Croatian builds one: zapisivati. This is called a SECONDARY imperfective, and it is everywhere.',
        highlight: 'zapisati → zapisivati',
      },
      {
        type: 'table',
        title: 'The Pattern',
        headers: ['Perfective', 'Secondary imperfective', 'Meaning'],
        rows: [
          ['zapisati', 'zapisivati', 'to note down'],
          ['pokazati', 'pokazivati', 'to show'],
          ['dokazati', 'dokazivati', 'to prove'],
          ['kupiti', 'kupovati', 'to buy'],
          ['dati', 'davati', 'to give'],
          ['otvoriti', 'otvarati', 'to open'],
          ['odgovoriti', 'odgovarati', 'to answer'],
          ['objasniti', 'objašnjavati', 'to explain'],
        ],
      },
      {
        type: 'rule',
        title: 'The Suffixes',
        body: 'Three do most of the work: -ivati, -avati and -vati. Which one a verb takes is lexical — you learn it with the pair — but they are easy to hear once you are listening for them, and a verb ending in one of them is almost always imperfective. That is a genuinely useful shortcut when reading.',
        highlight: '-ivati · -avati · -vati',
      },
      {
        type: 'rule',
        title: 'The Stem Often Shifts',
        body: 'Two things commonly change along with the suffix. The vowel may lengthen or alternate: otvoriti → otvarati, odgovoriti → odgovarati. And a consonant may soften: objasniti → objašnjavati, platiti → plaćati. Both are the same regular sound rules you have met since A1 — they are not new irregularities, just the familiar ones in a new place.',
        highlight: 'platiti → plaćati',
      },
      {
        type: 'rule',
        title: 'Three Verbs, One Root',
        body: 'This is where the whole system becomes visible. From "pisati" you get: pisati (imperfective, to write), zapisati (perfective, to note down), zapisivati (imperfective again, to note down repeatedly). Three verbs, one root, three different jobs. Reading a Croatian text is largely a matter of recognising which of the three you are looking at.',
        highlight: 'pisati → zapisati → zapisivati',
      },
      {
        type: 'example',
        title: 'Choosing Between Them',
        items: [
          {
            hr: 'Zapisao sam njegov broj.',
            en: 'I noted down his number.',
            note: 'perfective — one completed act',
          },
          {
            hr: 'Uvijek zapisujem što moram kupiti.',
            en: 'I always note down what I have to buy.',
            note: 'secondary imperfective — a habit',
          },
          {
            hr: 'Kupujem kruh svaki dan.',
            en: 'I buy bread every day.',
            note: 'kupovati — repeated',
          },
          {
            hr: 'Kupio sam kruh.',
            en: 'I bought the bread.',
            note: 'kupiti — one act, finished',
          },
          {
            hr: 'Upravo mi objašnjava kako to radi.',
            en: 'He is explaining to me right now how it works.',
            note: 'objašnjavati — in progress',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Svakog jutra otvaram prozor, a danas ga nisam otvorio.',
            en: 'Every morning I open the window, but today I did not open it.',
            note: 'otvarati for the habit, otvoriti for the one act',
          },
          {
            hr: 'Profesorica nam godinama dokazuje da se gramatika može voljeti.',
            en: 'For years the teacher has been proving to us that grammar can be loved.',
            note: 'dokazivati — ongoing over years',
          },
          {
            hr: 'Kad si mu pokazao fotografije, on ih je poslije pokazivao svima u uredu.',
            en: 'When you showed him the photos, he later kept showing them to everyone in the office.',
            note: 'pokazati once, pokazivati repeatedly',
          },
          {
            hr: 'Račune plaćam odmah, ali ovaj još nisam platio.',
            en: 'I pay bills straight away, but this one I have not paid yet.',
            note: 'plaćati with the softened ć; platiti for the single act',
          },
          {
            hr: 'Djed nam je davao savjete koje nitko nije tražio.',
            en: 'Grandad used to give us advice nobody asked for.',
            note: 'davati — the imperfective of dati',
          },
          {
            hr: 'Na sastanku uvijek odgovaram na pitanja, a jučer sam odgovorio na sve.',
            en: 'At meetings I always answer questions, and yesterday I answered all of them.',
            note: 'odgovarati (habit) beside odgovoriti (done)',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the imperfective of "kupiti"?',
        options: ['kupiti se', 'kupovati', 'nakupiti', 'kupljen'],
        correct: 1,
        explanation:
          '"Kupovati" is the secondary imperfective, built with the -ovati suffix. "Nakupiti" adds another prefix and "kupljen" is the passive participle.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You note things down every day. Which verb?',
        options: ['zapisati', 'zapisivati', 'napisati', 'pisati'],
        correct: 1,
        explanation:
          'A repeated action needs the imperfective, and the one that keeps the "down" meaning of the prefix is the secondary imperfective "zapisivati". Plain "pisati" would lose that sense.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is reaching for the plain base verb when the prefix carried meaning: "Uvijek pišem tvoj broj" loses the "down" of zapisati — the habit form is zapisujem. The second is guessing the suffix by analogy: "kupavati" and "otvorivati" do not exist; the pair is kupiti → kupovati, otvoriti → otvarati, and it is learned with the verb. The third is a perfective for an action in progress: "Sad zapišem što govoriš" cannot mean right now — an ongoing act needs the imperfective, Sad zapisujem što govoriš.',
        highlight: 'kupiti → kupovati, otvoriti → otvarati',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Upravo ___ što profesor govori." (I am noting down right now what the professor is saying.)',
            options: ['zapišem', 'zapisujem', 'zapisao', 'zapisati'],
            correct: 1,
            explanation:
              'An action in progress needs the imperfective, and the one that keeps the "down" meaning of the prefix is the secondary imperfective: zapisujem. A perfective present cannot describe what is happening right now.',
          },
          {
            q: 'Complete: "Konačno sam ___ vrata i ušao." (I finally opened the door and went in.)',
            options: ['otvarao', 'otvoren', 'otvorio', 'otvaram'],
            correct: 2,
            explanation:
              'One completed act in the past takes the perfective: otvorio. "Otvarao" would describe repeated or unfinished opening, and "otvoren" is the participle — the door was opened.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Trenutno ti objasnim kako to radi.',
              'Trenutno ti objašnjavam kako to radi.',
              'Trenutno ti objašnjam kako to radi.',
              'Trenutno ti objasnivam kako to radi.',
            ],
            correct: 1,
            explanation:
              '"Trenutno" marks an action in progress, so the verb is the secondary imperfective objašnjavati, with the regular softening sn → šnj. The other two suffixes are invented.',
          },
          {
            q: 'What is wrong with "Otvorivao je prozor svaki dan"?',
            options: [
              'Nothing — otvorivati is the imperfective',
              'The imperfective of otvoriti is otvarati, not otvorivati',
              'It should be the perfective otvorio because of svaki dan',
              'prozor should be in the genitive',
            ],
            correct: 1,
            explanation:
              'Which suffix a verb takes is lexical, and otvoriti takes -ati with a vowel shift: otvarati. A daily habit is right to be imperfective — it is the form that was guessed wrong.',
          },
          {
            q: 'You see the verb "dokazivati" in a text. What can you tell about it?',
            options: [
              'It is perfective — one completed proof',
              'It is a passive participle',
              'It is the imperative',
              'It is imperfective — the -ivati suffix marks ongoing or repeated action',
            ],
            correct: 3,
            explanation:
              'A verb ending in -ivati is almost always a secondary imperfective, built from the perfective dokazati. Reading it as imperfective is the shortcut this lesson gives you.',
          },
          {
            q: 'Which set correctly shows one root yielding three verbs: base imperfective → perfective → secondary imperfective?',
            options: [
              'pisati → zapisati → zapisivati',
              'pisati → napisati → napisivati',
              'pisati → pisivati → zapisati',
              'pisati → zapisivati → zapisati',
            ],
            correct: 0,
            explanation:
              '"Pisati" (write) takes a prefix to become perfective "zapisati" (note down), and then the -ivati suffix to become imperfective again: zapisivati. "Napisivati" does not exist, and the last two reverse the order.',
          },
          {
            q: 'What is the difference between "Kupio sam kruh" and "Kupovao sam kruh"?',
            options: [
              '"Kupovao sam" describes one finished purchase',
              '"Kupio sam" describes a habit',
              '"Kupovao sam" is repeated or ongoing buying; "kupio sam" is a single completed purchase',
              'They mean exactly the same',
            ],
            correct: 2,
            explanation:
              'Kupiti is the perfective (one act, done), and kupovati is its imperfective — used for the habit of buying or for buying that was in progress.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Secondary Imperfectives — Key Takeaways',
        points: [
          'Prefixes make perfectives; suffixes make them imperfective again',
          '-ivati, -avati and -vati are the three that do the work',
          'The stem often shifts too: otvoriti → otvarati, platiti → plaćati',
          'One root can yield three verbs: pisati, zapisati, zapisivati',
          'A verb ending in -ivati or -avati is almost certainly imperfective',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Aspect After Another Verb
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-with-verbs',
    title: 'Aspect After Another Verb',
    subtitle: 'Which aspect a modal, a phase verb or a negative command demands',
    icon: '⚖️',
    level: 'B2',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'When the Choice Is Not Yours',
        body: 'Most of the time aspect expresses what you mean. But in a few very common frames the preceding verb DECIDES it for you, and getting it wrong is one of the most audible advanced errors. Three frames cover almost all of it.',
        icon: '⚖️',
      },
      {
        type: 'rule',
        title: 'Frame One: Phase Verbs Demand Imperfective',
        body: '"Početi" (begin), "nastaviti" (continue) and "prestati" (stop) can only take an IMPERFECTIVE infinitive. Počeo sam čitati. Nastavio je govoriti. Prestani vikati. You cannot begin a completed action — the logic is the same in English, where "I began to have read it" is nonsense — but in Croatian it is a hard grammatical rule rather than a stylistic one.',
        highlight: 'Počeo sam čitati.',
      },
      {
        type: 'rule',
        title: 'Frame Two: A Negative Command Takes Imperfective',
        body: 'A positive imperative can be either — Napiši to! (get it written) or Piši! (write). But after "nemoj" the infinitive is normally imperfective: Nemoj pisati. Nemoj se brinuti. Nemoj to raditi. The perfective appears there only for a sharp warning about one specific act: Nemoj pasti!',
        highlight: 'Nemoj se brinuti.',
      },
      {
        type: 'rule',
        title: 'Frame Three: Modals Take Either, and It Matters',
        body: 'Here the choice is yours and it changes the meaning. "Moram pisati izvještaj" — I have to do some report-writing, an activity. "Moram napisati izvještaj" — I have to get the report written, a result. English needs extra words for that difference; Croatian carries it in one letter, which is why B2 speakers who ignore it sound vague.',
        highlight: 'Moram pisati / Moram napisati',
      },
      {
        type: 'table',
        title: 'What Each Frame Wants',
        headers: ['Frame', 'Aspect', 'Example'],
        rows: [
          ['početi / nastaviti / prestati', 'imperfective only', 'Počeo sam učiti.'],
          ['nemoj + infinitive', 'imperfective normally', 'Nemoj brinuti.'],
          ['modal + infinitive', 'either, and it matters', 'Moram napisati.'],
          ['uspjeti (manage to)', 'perfective', 'Uspio sam završiti.'],
          ['voljeti (like doing)', 'imperfective', 'Volim čitati.'],
          ['zaboraviti (forget to)', 'perfective', 'Zaboravio sam nazvati.'],
        ],
      },
      {
        type: 'rule',
        title: 'Uspjeti Is Always Perfective',
        body: '"Uspjeti" means to manage to, to succeed in — and succeeding is a result, so it takes a perfective. Uspio sam završiti na vrijeme. Nisam uspio doći. The same logic runs through "zaboraviti" (forget to do something specific) and "stići" (get round to): all of them are about outcomes.',
        highlight: 'Uspio sam završiti.',
      },
      {
        type: 'rule',
        title: 'Habit Overrides Everything',
        body: 'One rule cuts across all three frames: if the sentence describes something REPEATED, the verb goes imperfective regardless. Svaki dan moram pisati izvještaje. Uvijek zaboravljam nazvati. A repeated event cannot be a single completed one, so the perfective is unavailable no matter which frame you are in.',
        highlight: 'Svaki dan moram pisati…',
      },
      {
        type: 'example',
        title: 'The Frames at Work',
        items: [
          {
            hr: 'Počela je učiti hrvatski prošle godine.',
            en: 'She started learning Croatian last year.',
            note: 'phase verb → imperfective učiti',
          },
          {
            hr: 'Nemoj se brinuti, sve je u redu.',
            en: 'Do not worry, everything is fine.',
            note: 'negative command → imperfective',
          },
          {
            hr: 'Moram napisati zamolbu do petka.',
            en: 'I have to get the application written by Friday.',
            note: 'perfective — a result with a deadline',
          },
          {
            hr: 'Volim pisati pisma rukom.',
            en: 'I like writing letters by hand.',
            note: 'an activity you enjoy → imperfective',
          },
          {
            hr: 'Nisam uspio riješiti problem.',
            en: 'I did not manage to solve the problem.',
            note: 'uspjeti → perfective riješiti',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Prestani se igrati mobitelom i nastavi jesti.',
            en: 'Stop playing with your phone and carry on eating.',
            note: 'two phase verbs, two imperfectives',
          },
          {
            hr: 'Nemoj zaboraviti ključeve kad izlaziš iz stana.',
            en: 'Do not forget the keys when you leave the flat.',
            note: 'nemoj + perfective — a warning about one specific act',
          },
          {
            hr: 'Svake nedjelje moram zvati baku u Zadru.',
            en: 'Every Sunday I have to call my grandmother in Zadar.',
            note: 'repeated → imperfective zvati, whatever the modal',
          },
          {
            hr: 'Uspjeli smo kupiti karte za utakmicu prije nego što su rasprodane.',
            en: 'We managed to buy tickets for the match before they sold out.',
            note: 'uspjeti → perfective kupiti',
          },
          {
            hr: 'Želim samo mirno čitati na plaži, a ne sve pročitati do večeri.',
            en: 'I just want to read quietly on the beach, not read everything by evening.',
            note: 'the modal choice: activity against result',
          },
          {
            hr: 'Zaboravio sam poslati poruku, pa se počela brinuti.',
            en: 'I forgot to send the message, so she started to worry.',
            note: 'zaboraviti → perfective; početi → imperfective',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Počeo sam ___ knjigu." (I started reading a book.)',
        options: ['pročitati', 'čitati', 'pročitavši', 'čitan'],
        correct: 1,
        explanation:
          'A phase verb takes only the imperfective, because you cannot begin a completed action: počeo sam čitati. This is a hard rule in Croatian rather than a stylistic preference.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You must get the report finished by Friday. Which reads better?',
        options: [
          'Moram pisati izvještaj do petka.',
          'Moram napisati izvještaj do petka.',
          'Moram početi napisati izvještaj.',
        ],
        correct: 1,
        explanation:
          'A deadline is about a RESULT, so the perfective "napisati" is right. "Moram pisati" would describe the activity without committing to finishing it — which is exactly the vagueness a deadline rules out.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The commonest error is a perfective after a phase verb — "počeo sam pročitati", "prestani napisati" — because English "started to read" gives no aspect signal; Croatian allows only počeo sam čitati, prestani pisati. The second is an imperfective after uspjeti: "Uspio sam završavati posao" — succeeding is an outcome, Uspio sam završiti posao. The third is a perfective for something spread over a span: "Cijelo popodne moram odgovoriti na pozive" — an action lasting all afternoon is imperfective, Cijelo popodne moram odgovarati na pozive.',
        highlight: 'počeo sam čitati, prestani pisati',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Nastavila je ___ i nakon ponoći." (She continued working even after midnight.)',
            options: ['uraditi', 'raditi', 'napraviti', 'odraditi'],
            correct: 1,
            explanation:
              'A phase verb — početi, nastaviti, prestati — takes only the imperfective: nastavila je raditi. The other three are all perfectives.',
          },
          {
            q: 'Complete: "Nisam uspio ___ karte." (I did not manage to buy the tickets.)',
            options: ['kupovati', 'kupujem', 'kupiti', 'kupujući'],
            correct: 2,
            explanation:
              '"Uspjeti" is about an outcome, so it takes a perfective infinitive: uspio kupiti. "Kupovati" is imperfective, and the other two are not infinitives at all.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Prestani pisati, vrijeme je isteklo.',
              'Prestani napisati, vrijeme je isteklo.',
              'Prestani napiši, vrijeme je isteklo.',
              'Prestani napisao, vrijeme je isteklo.',
            ],
            correct: 0,
            explanation:
              '"Prestati" demands an imperfective infinitive: prestani pisati. You cannot stop a completed action, and the last two are not infinitives.',
          },
          {
            q: 'What is wrong with "Počeo sam napisati pismo"?',
            options: [
              'Nothing is wrong',
              'A phase verb takes only the imperfective: počeo sam pisati',
              'It should be "počeo sam napisao"',
              '"pismo" should be in the genitive',
            ],
            correct: 1,
            explanation:
              'Beginning a completed action is impossible, so početi allows only the imperfective: počeo sam pisati pismo. The object stays accusative.',
          },
          {
            q: '"Moram čitati izvještaj" against "Moram pročitati izvještaj" — which is true?',
            options: [
              '"Moram čitati" — the imperfective marks a result',
              'Both mean exactly the same',
              '"Moram pročitati" — the perfective commits to getting it read',
              'Neither; you need "morati da"',
            ],
            correct: 2,
            explanation:
              'After a modal the choice is yours and it changes the meaning: the perfective names the result (the report read through), the imperfective the activity of reading.',
          },
          {
            q: 'Complete: "Cijelo popodne moram ___ na telefon." (All afternoon I have to answer the phone.)',
            options: ['odgovoriti', 'odgovaram', 'odgovarati', 'odgovorio'],
            correct: 2,
            explanation:
              'Something repeated across a whole afternoon cannot be a single completed act, so the infinitive is imperfective whatever the frame: moram odgovarati.',
          },
          {
            q: 'In which sentence is "nemoj" plus a PERFECTIVE the right choice — a sharp warning about one specific act?',
            options: [
              'Nemoj pasti, stepenice su mokre!',
              'Nemoj raditi, odmori se.',
              'Nemoj se brinuti.',
              'Nemoj pušiti ovdje.',
            ],
            correct: 0,
            explanation:
              '"Nemoj pasti" warns against one specific fall, which is the case where the perfective appears after nemoj. The other three are ordinary instructions and take the imperfective.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Aspect After Another Verb — Key Takeaways',
        points: [
          'početi, nastaviti and prestati take the imperfective, always',
          'nemoj + infinitive is normally imperfective',
          'Modals take either, and the choice changes activity into result',
          'uspjeti, zaboraviti and stići are about outcomes → perfective',
          'Anything repeated goes imperfective, whatever the frame',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Participial Adjectives
  // ─────────────────────────────────────────────────────────
  {
    id: 'participial-adjectives',
    title: 'Participial Adjectives',
    subtitle: 'napisan, otvoren, poznat — verbs doing an adjective’s job',
    icon: '📝',
    level: 'B2',
    duration: '~5 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Written, Opened, Known',
        body: 'English turns verbs into adjectives constantly — a written letter, an open door, a known problem — and so does Croatian, with a form called the passive participle. It is what the passive is built from, it is everywhere in written Croatian, and it declines like any ordinary adjective.',
        icon: '📝',
      },
      {
        type: 'rule',
        title: 'Three Endings',
        body: 'Verbs in -ati take -n: čitati → čitan, pisati → pisan. Verbs in -iti take -jen, usually with the consonant softening: govoriti → govoren, nositi → nošen, platiti → plaćen. Verbs in -nuti take -nut: dirnuti → dirnut. There is a fourth small group in -t: uzeti → uzet, početi → počet.',
        highlight: '-n · -jen · -nut',
      },
      {
        type: 'table',
        title: 'Forming the Participle',
        headers: ['Verb', 'Participle', 'Meaning'],
        rows: [
          ['napisati', 'napisan', 'written'],
          ['pročitati', 'pročitan', 'read'],
          ['otvoriti', 'otvoren', 'open, opened'],
          ['zatvoriti', 'zatvoren', 'closed'],
          ['platiti', 'plaćen', 'paid'],
          ['izgubiti', 'izgubljen', 'lost'],
          ['poznati', 'poznat', 'known, famous'],
        ],
      },
      {
        type: 'rule',
        title: 'It Agrees Like Any Adjective',
        body: 'Once formed, it behaves entirely as an adjective: napisan tekst, napisana poruka, napisano pismo; plural napisani, napisane, napisana. It takes cases too — u zatvorenoj sobi, s izgubljenim ključem. There is nothing new to learn about its shape, only about how to build it.',
        highlight: 'otvorena vrata · zatvoreni dućan',
      },
      {
        type: 'rule',
        title: 'The Softening Is Regular',
        body: 'The consonant change in the -jen group is the same iotation that runs through the whole language: t → ć (platiti → plaćen), d → đ (roditi → rođen), s → š (nositi → nošen), b → blj (izgubiti → izgubljen). If you have met "brat → braća" or "list → lišće", you have met this already.',
        highlight: 'nositi → nošen · roditi → rođen',
      },
      {
        type: 'rule',
        title: 'This Is What the Passive Is Made Of',
        body: 'Add "biti" and you have the passive: Pismo je napisano. Vrata su otvorena. Račun je plaćen. That is why this lesson sits beside the passive one — the participle is the ingredient, and knowing how to build it is most of knowing how to build a passive sentence.',
        highlight: 'Pismo je napisano.',
      },
      {
        type: 'example',
        title: 'In Use',
        items: [
          {
            hr: 'Dućan je zatvoren nedjeljom.',
            en: 'The shop is closed on Sundays.',
            note: 'nedjeljom — the instrumental of time',
          },
          {
            hr: 'Ovo je poznat problem.',
            en: 'This is a known problem.',
            note: 'poznat also means famous',
          },
          {
            hr: 'Račun je već plaćen.',
            en: 'The bill has already been paid.',
            note: 'platiti → plaćen, with t → ć',
          },
          {
            hr: 'Sjedili smo za otvorenim prozorom.',
            en: 'We sat by the open window.',
            note: 'instrumental — otvorenim',
          },
          {
            hr: 'Rođen sam u Splitu.',
            en: 'I was born in Split.',
            note: 'roditi → rođen; a passive everyone uses',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Pročitane knjige vraćamo u knjižnicu svakog ponedjeljka.',
            en: 'We return the books we have read to the library every Monday.',
            note: 'pročitane — accusative plural, agreeing with knjige',
          },
          {
            hr: 'Izgubljeni ključ pronađen je ispod napisanog pisma na stolu.',
            en: 'The lost key was found under the written letter on the table.',
            note: 'izgubljen, pronađen, napisan — three participles',
          },
          {
            hr: 'Na zatvorenoj cesti prema Rijeci čekali smo dva sata.',
            en: 'On the closed road towards Rijeka we waited two hours.',
            note: 'locative feminine: zatvorenoj cesti',
          },
          {
            hr: 'Poznata glumica rođena je u malom gradu kraj Osijeka.',
            en: 'The famous actress was born in a small town near Osijek.',
            note: 'poznata, rođena — feminine agreement',
          },
          {
            hr: 'Kuća je prodana, a novac je već uplaćen na račun.',
            en: 'The house has been sold, and the money has already been paid into the account.',
            note: 'prodati → prodana; uplatiti → uplaćen',
          },
          {
            hr: 'Objašnjena pravila lakše se pamte nego pročitana.',
            en: 'Rules that have been explained are easier to remember than ones merely read.',
            note: 'objasniti → objašnjen, with sn → šnj',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the participle of "platiti" (to pay)?',
        options: ['platjen', 'plaćen', 'platan', 'platnut'],
        correct: 1,
        explanation:
          'Verbs in -iti take -jen, and the t softens to ć: plaćen. That softening is the same iotation you have met in braća and lišće.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Vrata su ___." (The door is open. "Vrata" is neuter plural.)',
        options: ['otvoren', 'otvorena', 'otvoreno', 'otvoreni'],
        correct: 1,
        explanation:
          'The participle agrees like any adjective, and "vrata" is a neuter plural, which takes -a: otvorena. The word has no singular at all.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Learners most often skip the softening in the -jen group: "platjen", "nositjen" — the consonant changes, giving plaćen, nošen, rođen. Next, the participle is left uninflected as if it were a verb: "u zatvoren sobi", "s otvoren prozor" — it is an adjective and takes the case and gender of its noun: u zatvorenoj sobi, s otvorenim prozorom. Third, English "born" is produced with the active past: "Rodio sam u Splitu" — the Croatian is passive, Rođen sam u Splitu, and a woman says Rođena sam.',
        highlight: 'plaćen, nošen, rođen',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ova poruka je ___ jučer." (This message was written yesterday. "Poruka" is feminine.)',
            options: ['napisan', 'napisano', 'napisana', 'napisani'],
            correct: 2,
            explanation:
              'The participle agrees like an adjective, and poruka is feminine singular: napisana. "Napisano" would be neuter and "napisani" masculine plural.',
          },
          {
            q: 'Complete: "Pismo je ___ u ladici." (The letter was found in the drawer.)',
            options: ['pronađen', 'pronađeno', 'pronađena', 'pronašlo'],
            correct: 1,
            explanation:
              '"Pismo" is neuter, so the participle takes -o: pronađeno. "Pronašlo" is the active past tense, which would make the letter do the finding.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Rodio sam u Zagrebu.',
              'Rođen sam u Zagrebu.',
              'Rođeni sam u Zagrebu.',
              'Rođeno sam u Zagrebu.',
            ],
            correct: 1,
            explanation:
              '"I was born" is a passive: the participle rođen plus biti. "Rodio sam" is active and would mean I gave birth; the plural and neuter forms do not agree with a single male speaker.',
          },
          {
            q: 'What is wrong with "Sjedimo u zatvoren sobi"?',
            options: [
              'Nothing is wrong',
              '"u" should take the accusative: zatvorenu sobu',
              'The participle must agree in the locative: u zatvorenoj sobi',
              '"sobi" should be "sobu"',
            ],
            correct: 2,
            explanation:
              'Sitting is position, so u takes the locative, and the participle must agree with the feminine noun: u zatvorenoj sobi. The noun form was already right.',
          },
          {
            q: 'What is the participle of "izgubiti" (to lose)?',
            options: ['izgubit', 'izguben', 'izgubnut', 'izgubljen'],
            correct: 3,
            explanation:
              'Verbs in -iti take -jen, and b softens to blj: izgubljen. The -t ending belongs to a small group like uzeti → uzet, and -nut to the -nuti verbs.',
          },
          {
            q: '"Vrata su otvorena." What is this sentence built from?',
            options: [
              'the passive participle otvoren plus biti — a passive',
              'the present adverb otvarajući plus biti',
              'the past tense of otvoriti',
              'the infinitive plus je',
            ],
            correct: 0,
            explanation:
              'The participle is the ingredient of the passive: add a form of biti and "the door is open / has been opened" is complete. Vrata is neuter plural, hence otvorena.',
          },
          {
            q: 'Complete: "Kupili smo ___ kuću." (We bought a renovated house.)',
            options: ['obnovljen', 'obnovljena', 'obnovljenu', 'obnovljenom'],
            correct: 2,
            explanation:
              '"Kuću" is a feminine accusative, so the participle agrees: obnovljenu kuću. It declines exactly like any adjective in front of that noun.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Participial Adjectives — Key Takeaways',
        points: [
          '-ati verbs take -n; -iti verbs take -jen; -nuti verbs take -nut',
          'The -jen group softens: platiti → plaćen, nositi → nošen',
          'Once formed it declines exactly like an adjective',
          'Add biti and you have the passive: Pismo je napisano.',
          'Rođen sam… is the passive every Croatian uses about themselves',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Verbal Adverbs
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbal-adverbs',
    title: 'Verbal Adverbs',
    subtitle: 'Doing two things at once, in one clause',
    icon: '🎭',
    level: 'B2',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'The Form That Makes Croatian Look Written',
        body: 'English says "reading the book, I fell asleep" and it sounds slightly literary. Croatian has a dedicated form for exactly that, and it is one of the clearest markers of the written register: čitajući knjigu, zaspao sam. Recognising it is essential for reading; producing it is what makes your own writing look grown-up.',
        icon: '🎭',
      },
      {
        type: 'rule',
        title: 'The Present Adverb: -ći',
        body: 'Take the third-person plural of an IMPERFECTIVE verb, drop nothing, and add -ći. čitaju → čitajući. rade → radeći. govore → govoreći. It describes an action happening at the same time as the main verb. Radeći, slušam glazbu. (While working, I listen to music.)',
        highlight: 'rade → radeći',
      },
      {
        type: 'rule',
        title: 'The Past Adverb: -vši',
        body: 'From a PERFECTIVE verb, take the infinitive stem and add -vši. napisati → napisavši. doći → došavši. It describes an action completed BEFORE the main verb. Došavši kući, odmah je legao. (Having come home, he went straight to bed.) This one is markedly literary and you will read it far more often than you say it.',
        highlight: 'doći → došavši',
      },
      {
        type: 'table',
        title: 'The Two Forms',
        headers: ['', 'Present (-ći)', 'Past (-vši)'],
        rows: [
          ['built from', 'imperfective', 'perfective'],
          ['timing', 'at the same time', 'before the main verb'],
          ['example', 'čitajući', 'pročitavši'],
          ['register', 'ordinary written', 'markedly literary'],
          ['in speech', 'occasionally', 'almost never'],
        ],
      },
      {
        type: 'rule',
        title: 'THE RULE: One Subject Only',
        body: 'This is the constraint that governs both forms, and breaking it is the classic error. The verbal adverb and the main verb must share a subject. "Čitajući knjigu, zaspao sam" works because I am doing both. "Čitajući knjigu, telefon je zazvonio" does not — the phone was not reading. When the subjects differ, you need a full clause: Dok sam čitao knjigu, telefon je zazvonio.',
        highlight: 'same subject, or use dok',
      },
      {
        type: 'rule',
        title: 'Aspect Decides Which Form',
        body: 'The pairing is fixed and worth stating plainly: imperfective verbs give -ći, perfective verbs give -vši. There is no "pročitajući" and no "dolazivši". If you know a verb\'s aspect you already know which adverb it can form, which makes this much smaller than it first looks.',
        highlight: 'imperfective → -ći · perfective → -vši',
      },
      {
        type: 'example',
        title: 'Reading Them',
        items: [
          {
            hr: 'Šetajući gradom, sreo sam staru prijateljicu.',
            en: 'Walking through town, I met an old friend.',
            note: 'same subject throughout',
          },
          {
            hr: 'Ne znajući što reći, samo sam šutio.',
            en: 'Not knowing what to say, I just stayed silent.',
            note: 'the negative simply prefixes ne',
          },
          {
            hr: 'Završivši posao, otišli su kući.',
            en: 'Having finished work, they went home.',
            note: 'perfective → -vši, and it happened first',
          },
          {
            hr: 'Govoreći tiho, objasnio je situaciju.',
            en: 'Speaking quietly, he explained the situation.',
            note: 'manner, running alongside the main verb',
          },
          {
            hr: 'Dok sam čitao, telefon je zazvonio.',
            en: 'While I was reading, the phone rang.',
            note: 'two subjects, so a full clause is required',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Putujući vlakom prema Osijeku, gledala sam ravnicu kroz prozor.',
            en: 'Travelling by train towards Osijek, I watched the plain through the window.',
            note: 'putovati → putujući, same subject',
          },
          {
            hr: 'Pročitavši ugovor do kraja, potpisao ga je bez pitanja.',
            en: 'Having read the contract to the end, he signed it without a question.',
            note: 'perfective → -vši, and it happened first',
          },
          {
            hr: 'Kuhajući ručak, slušam vijesti o vremenu na obali.',
            en: 'While cooking lunch, I listen to the weather news for the coast.',
            note: 'present -ći alongside a present main verb',
          },
          {
            hr: 'Došavši na stadion, navijači su odmah zapjevali.',
            en: 'Having arrived at the stadium, the fans immediately began to sing.',
            note: 'doći → došavši; the fans do both',
          },
          {
            hr: 'Dok je Marko kuhao, djeca su se igrala u dvorištu.',
            en: 'While Marko was cooking, the children were playing in the yard.',
            note: 'two subjects, so dok and a full clause',
          },
          {
            hr: 'Ne želeći nikoga uvrijediti, šutjela je cijelu večer.',
            en: 'Not wanting to offend anyone, she kept quiet the whole evening.',
            note: 'ne + željeti → ne želeći',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the present verbal adverb of "raditi"?',
        options: ['radivši', 'radeći', 'radivši se', 'raden'],
        correct: 1,
        explanation:
          '"Raditi" is imperfective, so it forms the present adverb in -ći: radeći. The -vši ending belongs to perfective verbs only.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence is CORRECT?',
        options: [
          'Čitajući knjigu, telefon je zazvonio.',
          'Čitajući knjigu, zaspao sam.',
          'Čitajući knjigu, kiša je počela padati.',
        ],
        correct: 1,
        explanation:
          'The verbal adverb must share its subject with the main verb. In the other two the phone and the rain are not the ones reading — those need a full clause with "dok".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The classic error is a dangling adverb with a second subject: "Čitajući knjigu, telefon je zazvonio" makes the phone the reader — with two subjects Croatian needs a clause: Dok sam čitao knjigu, telefon je zazvonio. The second is the wrong pairing: "pročitajući" or "dolazivši" — imperfective gives čitajući and dolazeći, perfective gives pročitavši and došavši. The third is building -ći from the infinitive instead of the third-person plural: "raditći", "govoritći" — start from rade and govore: radeći, govoreći.',
        highlight: 'Dok sam čitao knjigu, telefon je zazvonio',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ kući, odmah je legao." (Having come home, he went straight to bed.)',
            options: ['Dolazeći', 'Došavši', 'Dođući', 'Došao'],
            correct: 1,
            explanation:
              'The action was completed BEFORE the main verb, so the perfective doći gives the past adverb došavši. "Dođući" is not a form, and "došao" is the ordinary past tense.',
          },
          {
            q: 'Complete: "___ po kiši, promočili smo do kože." (Walking in the rain, we got soaked.)',
            options: ['Hodavši', 'Hodajući', 'Hodaći', 'Hodati'],
            correct: 1,
            explanation:
              'Hodati is imperfective and the walking runs alongside the soaking, so the present adverb in -ći from hodaju: hodajući. Imperfective verbs do not form -vši.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Slušajući glazbu, vrijeme brzo prolazi.',
              'Slušajući glazbu, zaboravio sam na posao.',
              'Slušajući glazbu, kava se ohladila.',
              'Slušajući glazbu, autobus je otišao.',
            ],
            correct: 1,
            explanation:
              'The verbal adverb must share its subject with the main verb, and only in the second sentence is the listener also the one who forgot. Time, coffee and buses do not listen to music.',
          },
          {
            q: 'What is wrong with "Pročitajući pismo, rasplakala se"?',
            options: [
              'Nothing is wrong',
              '"rasplakala se" should be "se rasplakala"',
              'pročitati is perfective, so the form is pročitavši',
              '"pismo" needs the genitive',
            ],
            correct: 2,
            explanation:
              'Perfective verbs form only the past adverb in -vši: pročitavši pismo. "Pročitajući" pairs a perfective stem with the imperfective ending, which does not exist.',
          },
          {
            q: 'Which form is markedly literary and almost never heard in speech?',
            options: ['čitajući', 'radeći', 'napisavši', 'govoreći'],
            correct: 2,
            explanation:
              'The past adverb in -vši belongs to written, literary Croatian; the present adverb in -ći is ordinary written register and turns up in speech occasionally.',
          },
          {
            q: 'Which is the present verbal adverb of "govoriti"?',
            options: ['govoreći', 'govorivši', 'govorajući', 'govoriti'],
            correct: 0,
            explanation:
              'Start from the third-person plural govore and add -ći: govoreći. "Govorajući" is built from the wrong stem, and govoriti is imperfective so it has no -vši form.',
          },
          {
            q: 'You want to say "While she was cooking, I set the table." Which is right?',
            options: [
              'Kuhajući, postavio sam stol.',
              'Kuhajući ona, postavio sam stol.',
              'Skuhavši, postavio sam stol.',
              'Dok je ona kuhala, postavio sam stol.',
            ],
            correct: 3,
            explanation:
              'She cooks and I set the table — two subjects — so the verbal adverb is unavailable and a full clause with dok is required. The first three all make me the cook.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Verbal Adverbs — Key Takeaways',
        points: [
          'Present -ći from imperfective: čitajući, radeći, govoreći',
          'Past -vši from perfective: napisavši, došavši — markedly literary',
          'The adverb and the main verb MUST share a subject',
          'Different subjects? Use dok and a full clause instead',
          'Recognising these is essential for reading written Croatian',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Unreal Conditions
  // ─────────────────────────────────────────────────────────
  {
    id: 'unreal-conditions',
    title: 'If Things Were Different',
    subtitle: 'Da + conditional — the sentences about what did not happen',
    icon: '🌗',
    level: 'B2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Half of the Conditional You Have Not Used',
        body: 'B1 gave you real conditions — ako imaš vremena, if you have time, which you might. This is the other kind: if I were rich, if I had known, if we had left earlier. The condition is false, and Croatian marks that with a completely different word.',
        icon: '🌗',
      },
      {
        type: 'rule',
        title: 'AKO for Real, DA for Unreal',
        body: 'This is the whole distinction, and Croatian is stricter about it than English. "Ako" introduces something that may happen. "Da" introduces something contrary to fact. Ako imam vremena, doći ću. (I may have time.) Da imam vremena, došao bih. (I do not have time.) English uses "if" for both and leaves the tense to signal it; Croatian changes the word.',
        highlight: 'ako = may happen · da = did not',
      },
      {
        type: 'rule',
        title: 'The Shape: da + past, then the conditional',
        body: 'The unreal condition goes into the perfect, and the main clause into the conditional — bih, bi, bi, bismo, biste, bi plus the participle. Da sam znao, rekao bih ti. (If I had known, I would have told you.) Da imamo više vremena, ostali bismo. Note that Croatian uses the same shape whether English would say "if I were" or "if I had been".',
        highlight: 'Da sam znao, rekao bih ti.',
      },
      {
        type: 'table',
        title: 'Real Against Unreal',
        headers: ['Croatian', 'English', 'True?'],
        rows: [
          ['Ako imam vremena, doći ću.', 'If I have time, I will come.', 'maybe'],
          ['Da imam vremena, došao bih.', 'If I had time, I would come.', 'I do not'],
          ['Ako si znao, zašto nisi rekao?', 'If you knew, why did you not say?', 'maybe'],
          ['Da si znao, rekao bi.', 'If you had known, you would have said.', 'you did not'],
          ['Ako bude kiše, ostajemo.', 'If it rains, we are staying.', 'it might'],
          ['Da nije kiše, izašli bismo.', 'If it were not raining, we would go out.', 'it is'],
        ],
      },
      {
        type: 'rule',
        title: 'Kad Bih Is the Same Thing',
        body: '"Kad bih imao vremena, došao bih" means exactly what "Da imam vremena, došao bih" means. Both are standard; "da" is more common in speech and "kad bih" reads a shade more formal. What you cannot do is mix them — "ako bih" is not the construction, and it is a reliable marker of a learner.',
        highlight: 'Kad bih imao…, došao bih.',
      },
      {
        type: 'rule',
        title: 'The Conditional Alone Is a Softener',
        body: 'Outside conditions entirely, the same forms make any request or opinion gentler — which is why you met "htio bih" at A1 long before this lesson. Mogli biste li mi pomoći? Rekao bih da je to točno. Ja bih to drugačije riješio. At B2 this is less a grammar point than a register control: the conditional is how you avoid sounding blunt.',
        highlight: 'Rekao bih da…',
      },
      {
        type: 'example',
        title: 'Unreal Sentences',
        items: [
          {
            hr: 'Da sam znao, ne bih došao.',
            en: 'If I had known, I would not have come.',
            note: 'the negative goes on the conditional',
          },
          {
            hr: 'Da nisi zakasnio, stigli bismo na vrijeme.',
            en: 'If you had not been late, we would have arrived on time.',
            note: 'both halves negated independently',
          },
          {
            hr: 'Kad bih bio bogat, kupio bih kuću na moru.',
            en: 'If I were rich, I would buy a house by the sea.',
            note: 'kad bih — the formal alternative',
          },
          {
            hr: 'Da barem imam više vremena!',
            en: 'If only I had more time!',
            note: 'da barem — a wish, no main clause needed',
          },
          {
            hr: 'Na tvom mjestu, ja bih pričekao.',
            en: 'In your position, I would wait.',
            note: 'advice built on the conditional',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Da smo krenuli ranije, ne bismo zapeli u gužvi na autocesti.',
            en: 'If we had set off earlier, we would not have got stuck in the traffic on the motorway.',
            note: 'da + perfect, then ne bismo + participle',
          },
          {
            hr: 'Da nije bilo tako hladno, otišli bismo na Sljeme pješice.',
            en: 'If it had not been so cold, we would have gone up Sljeme on foot.',
            note: 'an impersonal unreal condition',
          },
          {
            hr: 'Ako sutra bude sunčano, idemo na Krk.',
            en: 'If it is sunny tomorrow, we are going to Krk.',
            note: 'ako — a real condition, for contrast',
          },
          {
            hr: 'Kad bih znala kuhati kao baka, otvorila bih restoran.',
            en: 'If I could cook like grandma, I would open a restaurant.',
            note: 'kad bih — the more formal shape, woman speaking',
          },
          {
            hr: 'Da si me nazvao, rekla bih ti gdje je ključ.',
            en: 'If you had called me, I would have told you where the key is.',
            note: 'the clitics me and bih sit second in their clauses',
          },
          {
            hr: 'Da nema turista, mnoga bi mjesta na otocima ostala bez posla.',
            en: 'If there were no tourists, many places on the islands would be left without work.',
            note: 'bi in second position, splitting mnoga … mjesta',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You do NOT have time. Which is right?',
        options: [
          'Ako imam vremena, došao bih.',
          'Da imam vremena, došao bih.',
          'Ako bih imao vremena, došao bih.',
        ],
        correct: 1,
        explanation:
          'A condition contrary to fact takes "da", not "ako". "Ako bih" is not a Croatian construction at all and is one of the clearest learner markers.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Da sam znao, ___ ti." (If I had known, I would have told you.)',
        options: ['rekao sam', 'reći ću', 'rekao bih', 'rekao bi'],
        correct: 2,
        explanation:
          'The main clause takes the conditional agreeing with "I": rekao bih. "Rekao bi" would be the third person or the second, which is a different speaker.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The most audible error is "ako bih": "Ako bih imao vremena, došao bih" — the unreal condition is Da imam vremena, došao bih, or Kad bih imao vremena, došao bih; "ako" never takes the conditional. The second is English tense logic: "Da sam imao vremena, došao sam" — the main clause must be conditional, došao bih. The third is losing the second-position clitic: "Da nisi zakasnio, bismo stigli" — the auxiliary sits second in its clause, stigli bismo.',
        highlight: 'Da imam vremena, došao bih',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Da sam ___ , kupio bih ti dar." (If I had known, I would have bought you a present.)',
            options: ['znam', 'znao', 'bih znao', 'znajući'],
            correct: 1,
            explanation:
              'The unreal condition goes into the perfect after da: da sam znao. The conditional belongs in the main clause only, and "znajući" is a verbal adverb.',
          },
          {
            q: 'Complete: "___ imali auto, otišli bismo na more." (If we had had a car, we would have gone to the sea.)',
            options: ['Ako bismo', 'Da smo', 'Ako smo', 'Da bismo'],
            correct: 1,
            explanation:
              'A condition contrary to fact takes da plus the perfect: Da smo imali. "Ako bismo" is not a construction, "ako smo" marks a real condition, and "da bismo" means in order to.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Da sam znao, rekao bih ti.',
              'Ako bih znao, rekao bih ti.',
              'Da sam znao, rekao sam ti.',
              'Da bih znao, rekao bih ti.',
            ],
            correct: 0,
            explanation:
              'Da plus the perfect in the condition, the conditional in the main clause. "Ako bih" marks a learner instantly, and "rekao sam" turns the result into a plain past fact.',
          },
          {
            q: 'What is wrong with "Kad bih imao vremena, došao sam"?',
            options: [
              'Nothing is wrong',
              '"kad bih" should be "ako bih"',
              'The main clause needs the conditional: došao bih',
              '"vremena" should be "vrijeme"',
            ],
            correct: 2,
            explanation:
              'The condition is unreal, so the result must be conditional too: došao bih. "Kad bih" itself is fine, and nemati vremena takes the genitive.',
          },
          {
            q: '"Ako imam vremena, doći ću." against "Da imam vremena, došao bih." Which is true?',
            options: [
              'Both say the speaker has no time',
              'The first says the speaker has no time; the second leaves it open',
              'They mean the same',
              'The first leaves it open; the second says the speaker does NOT have time',
            ],
            correct: 3,
            explanation:
              '"Ako" introduces a condition that may still be met; "da" plus the conditional states that it is not. Croatian changes the word where English changes the tense.',
          },
          {
            q: 'Complete: "Da nisi zakasnio, ___ na vrijeme." (…we would have arrived on time.)',
            options: ['bismo stigli', 'stigli bismo', 'stigli smo', 'stignemo'],
            correct: 1,
            explanation:
              'The auxiliary bismo is a clitic and cannot open its clause; the participle comes first: stigli bismo. "Stigli smo" is a plain past fact.',
          },
          {
            q: 'Which is the more formal alternative to "Da imam vremena, došao bih"?',
            options: [
              'Ako bih imao vremena, došao bih.',
              'Kad imam vremena, došao bih.',
              'Kad bih imao vremena, došao bih.',
              'Da bih imao vremena, došao bih.',
            ],
            correct: 2,
            explanation:
              '"Kad bih" plus the participle means the same as "da" plus the present and reads a shade more formal. Only "ako" is excluded from the conditional, and "da bih" means in order to.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Unreal Conditions — Key Takeaways',
        points: [
          'ako = it may happen · da = it did not',
          'da + perfect, then bih / bi / bismo / biste plus the participle',
          '"Ako bih" is not a construction — it marks a learner immediately',
          'Kad bih… means the same as Da… and reads slightly more formal',
          'The conditional alone softens any request or opinion',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Wishes and Regrets
  // ─────────────────────────────────────────────────────────
  {
    id: 'wishes-regrets',
    title: 'Wishes and Regrets',
    subtitle: 'If only, I should have, what a shame',
    icon: '🌠',
    level: 'B2',
    duration: '~5 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Talking About What Did Not Happen',
        body: 'Once you can build an unreal condition you are one step from the whole family of wishing and regretting — which is a surprising amount of ordinary conversation. Croatian does these with a small set of fixed openers, most of them built on the conditional you already have.',
        icon: '🌠',
      },
      {
        type: 'table',
        title: 'The Openers',
        headers: ['Croatian', 'English'],
        rows: [
          ['Da barem…', 'If only…'],
          ['Kamo sreće da…', 'If only, would that…'],
          ['Volio bih da…', 'I wish that…'],
          ['Šteta što…', 'It is a shame that…'],
          ['Žao mi je što…', 'I am sorry that…'],
          ['Trebao sam…', 'I should have…'],
        ],
      },
      {
        type: 'rule',
        title: 'Da Barem — the Everyday Wish',
        body: '"Da barem" plus a verb is how most wishes get said. Da barem imam više vremena! Da barem nisam to rekao! It needs no main clause — the sentence is complete as it stands, and the "barem" (at least) is what carries the wistfulness. "Kamo sreće da…" is the warmer, more emphatic version.',
        highlight: 'Da barem imam više vremena!',
      },
      {
        type: 'rule',
        title: 'Trebao Sam — "I Should Have"',
        body: 'This one is worth real attention because English speakers reach for the conditional and get it wrong. Regret about the past is the plain PAST of trebati plus an infinitive: Trebao sam učiti. (I should have studied.) Trebala si mi reći. (You should have told me.) "Trebao bih učiti" is different — that is present advice, I ought to study.',
        highlight: 'Trebao sam učiti.',
      },
      {
        type: 'table',
        title: 'Should, and Should Have',
        headers: ['Croatian', 'English', 'When'],
        rows: [
          ['Trebao bih učiti.', 'I ought to study.', 'now, advice'],
          ['Trebao sam učiti.', 'I should have studied.', 'past, regret'],
          ['Mogao bih doći.', 'I could come.', 'now, a possibility'],
          ['Mogao sam doći.', 'I could have come.', 'past, a missed one'],
          ['Morao bih ići.', 'I ought to go.', 'now'],
          ['Morao sam ići.', 'I had to go.', 'past, an actual obligation'],
        ],
      },
      {
        type: 'rule',
        title: 'Volio Bih Da Takes a Clause',
        body: '"Volio bih" plus "da" expresses a wish about somebody else, and the verb inside stays in the present: Volio bih da dođeš. (I wish you would come.) Volio bih da je drugačije. With the same subject, drop the clause and use an infinitive: Volio bih doći. This is the infinitive-or-da rule from B1, doing exactly what it said it would.',
        highlight: 'Volio bih da dođeš.',
      },
      {
        type: 'rule',
        title: 'Šteta and Žao',
        body: 'Two ways to express regret about a fact. "Šteta što…" is impersonal — it is a shame that: Šteta što nisi mogao doći. "Žao mi je što…" puts you in the dative and is more personal: Žao mi je što se to dogodilo. Both take "što" rather than "da", because the thing being regretted actually happened.',
        highlight: 'Šteta što… · Žao mi je što…',
      },
      {
        type: 'example',
        title: 'Wishing and Regretting',
        items: [
          {
            hr: 'Da barem nisam to rekao.',
            en: 'If only I had not said that.',
            note: 'a man speaking; a woman: rekla',
          },
          {
            hr: 'Trebali smo krenuti ranije.',
            en: 'We should have set off earlier.',
            note: 'past of trebati + infinitive',
          },
          {
            hr: 'Volio bih da si bila tamo.',
            en: 'I wish you had been there.',
            note: 'volio bih da + a clause',
          },
          {
            hr: 'Šteta što nisi mogao doći.',
            en: 'It is a shame you could not come.',
            note: 'šteta što + a fact',
          },
          {
            hr: 'Mogao sam mu pomoći, ali nisam.',
            en: 'I could have helped him, but I did not.',
            note: 'past of moći — a missed possibility',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Da barem imamo veći stan u centru grada!',
            en: 'If only we had a bigger flat in the city centre!',
            note: 'da barem + present, no main clause',
          },
          {
            hr: 'Trebala sam ponijeti kišobran, sad sam mokra do kože.',
            en: 'I should have brought an umbrella, now I am soaked to the skin.',
            note: 'trebala sam — past regret, woman speaking',
          },
          {
            hr: 'Volio bih da nam se sin javlja češće iz Njemačke.',
            en: 'I wish our son would get in touch more often from Germany.',
            note: 'volio bih da + clause: a different subject',
          },
          {
            hr: 'Žao mi je što nismo stigli na utakmicu na vrijeme.',
            en: 'I am sorry we did not make it to the match on time.',
            note: 'žao mi je što — the thing really happened',
          },
          {
            hr: 'Mogli smo prodati kuću prošle godine, kad su cijene bile visoke.',
            en: 'We could have sold the house last year, when prices were high.',
            note: 'mogli smo — a missed possibility',
          },
          {
            hr: 'Kamo sreće da je baka doživjela ovo ljeto na otoku.',
            en: 'If only grandma had lived to see this summer on the island.',
            note: 'kamo sreće da — the warmer wish',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I should have studied"?',
        options: ['Trebao bih učiti.', 'Trebao sam učiti.', 'Trebam učiti.', 'Trebat ću učiti.'],
        correct: 1,
        explanation:
          'Regret about the past uses the plain PAST of trebati: trebao sam učiti. "Trebao bih" is present advice — I ought to study — which is a different statement.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Volio bih ___ dođeš." (I wish you would come.)',
        options: ['što', 'da', 'ako', 'kad'],
        correct: 1,
        explanation:
          'The subject changes — I wish, you come — so the second half needs a clause introduced by "da". "Što" would be used for something that actually happened, as in "šteta što".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'English speakers turn "should have" into a conditional: "Trebao bih učiti" for I should have studied — that is present advice; the regret is the plain past, Trebao sam učiti. The second is an infinitive after volio bih when the subject changes: "Volio bih ti doći" for I wish you would come — a different subject needs a clause, Volio bih da dođeš. The third is the same slip with moći: "Mogao bih ti pomoći" is an offer for now; the missed chance in the past is Mogao sam ti pomoći.',
        highlight: 'Trebao sam učiti',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ ti reći ranije, oprosti." (I should have told you earlier, sorry.)',
            options: ['Trebao bih', 'Trebao sam', 'Trebam', 'Trebat ću'],
            correct: 1,
            explanation:
              'Regret about the past is the plain past of trebati plus an infinitive: trebao sam. "Trebao bih" is present advice, and the other two are present and future obligation.',
          },
          {
            q: 'Complete: "Volio bih ___ dulje." (I wish they would stay longer.)',
            options: ['ostati', 'da ostanu', 'ostanu', 'da ostati'],
            correct: 1,
            explanation:
              'The subject changes — I wish, they stay — so a da-clause with a present-tense verb is required: da ostanu. The bare infinitive would mean I would like to stay.',
          },
          {
            q: 'Which sentence correctly says "I could have helped, but I did not"?',
            options: [
              'Mogao sam pomoći, ali nisam.',
              'Mogao bih pomoći, ali nisam.',
              'Mogu pomoći, ali nisam.',
              'Mogao bih pomogao, ali nisam.',
            ],
            correct: 0,
            explanation:
              'A missed possibility in the past is the past of moći plus an infinitive: mogao sam pomoći. "Mogao bih" is a present possibility, and the last option stacks two verb forms.',
          },
          {
            q: 'What is wrong with "Trebao bih doći jučer, ali sam zaboravio"?',
            options: [
              'Nothing is wrong',
              '"jučer" needs "prije"',
              'Regret about yesterday takes the past: Trebao sam doći',
              '"sam" should come after "zaboravio"',
            ],
            correct: 2,
            explanation:
              '"Jučer" places it in the past, so the regret is trebao sam doći. The conditional would be advice about something still possible.',
          },
          {
            q: 'What does "Da barem nisam to rekla!" express?',
            options: [
              'a real condition',
              'a wish about the past — if only I had not said that',
              'an order',
              'a question',
            ],
            correct: 1,
            explanation:
              '"Da barem" plus a verb is a complete wish, no main clause needed; with the past tense it regrets something that did happen. The speaker is a woman (rekla).',
          },
          {
            q: 'Which opener is warmer and more emphatic than "Da barem…"?',
            options: ['Šteta što…', 'Žao mi je što…', 'Trebao sam…', 'Kamo sreće da…'],
            correct: 3,
            explanation:
              '"Kamo sreće da…" is the emphatic version of the everyday da barem wish. The other three regret a fact rather than wish for a different one.',
          },
          {
            q: '"Trebao bih ići" against "Trebao sam ići" — which is true?',
            options: [
              'Both are regrets',
              'Both are present advice',
              'The first is present advice; the second is past regret',
              'The first is past regret; the second is present advice',
            ],
            correct: 2,
            explanation:
              'The conditional gives ought to (now), the plain past gives should have (a regret). Keeping them apart is the whole point of the lesson.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Wishes and Regrets — Key Takeaways',
        points: [
          'Da barem… is the everyday wish, and needs no main clause',
          'Trebao sam = I should have · Trebao bih = I ought to',
          'Mogao sam = I could have · Mogao bih = I could',
          'Volio bih da + clause for someone else; Volio bih + infinitive for yourself',
          'Šteta što… and Žao mi je što… take što, because it really happened',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Shades of Modality
  // ─────────────────────────────────────────────────────────
  {
    id: 'modal-nuance',
    title: 'Shades of Modality',
    subtitle: 'Advice, obligation, probability — and how strong each one sounds',
    icon: '🎚️',
    level: 'B2',
    duration: '~5 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Same Verb, Turned Down',
        body: 'A1 gave you moći, morati and trebati. B2 is about their volume control: the difference between "you must", "you should" and "you might want to", which in Croatian is mostly the difference between the plain form and the conditional. Getting it wrong is not a grammar error — it is a tone error, which is worse.',
        icon: '🎚️',
      },
      {
        type: 'table',
        title: 'The Volume Scale',
        headers: ['Croatian', 'English', 'Strength'],
        rows: [
          ['Moraš ići.', 'You must go.', 'strongest'],
          ['Trebaš ići.', 'You need to go.', 'strong'],
          ['Morao bi ići.', 'You really ought to go.', 'firm advice'],
          ['Trebao bi ići.', 'You should go.', 'ordinary advice'],
          ['Mogao bi ići.', 'You could go.', 'a suggestion'],
          ['Možda bi mogao ići.', 'Maybe you could go.', 'gentlest'],
        ],
      },
      {
        type: 'rule',
        title: 'The Conditional Is the Volume Knob',
        body: 'Notice what changes down that table: the verbs are the same three, and it is the CONDITIONAL that softens them. "Moraš" is an instruction; "morao bi" is a strong recommendation you could still decline. As a rule of thumb, use the plain form for facts and rules, and the conditional the moment you are advising a person.',
        highlight: 'moraš → morao bi',
      },
      {
        type: 'rule',
        title: 'Probability, Not Just Obligation',
        body: 'The same verbs also express how likely something is. Mora da je kod kuće. (He must be at home — a deduction.) Moglo bi padati. (It might rain.) Trebalo bi biti gotovo. (It ought to be finished.) English uses exactly the same overlap — "he must be home" is not an order — so the instinct transfers cleanly.',
        highlight: 'Mora da je kod kuće.',
      },
      {
        type: 'rule',
        title: 'Smjeti Is Permission, Not Ability',
        body: 'The fourth modal, and the one most often missed. "Smjeti" means to be allowed to. Smijem li ući? (May I come in?) Ne smiješ to raditi. (You must not do that.) Note that the NEGATIVE is a prohibition, not an inability — "ne smiješ" is you are not allowed, while "ne možeš" is you are unable. Mixing them up turns a rule into an insult.',
        highlight: 'ne smiješ ≠ ne možeš',
      },
      {
        type: 'rule',
        title: 'The Impersonal Softens Further Still',
        body: 'To advise without pointing at anybody, drop the subject entirely: Trebalo bi to riješiti. (That ought to be sorted out.) Ne bi se smjelo tako raditi. Moglo bi se reći da… This is how criticism gets delivered in a Croatian meeting, and recognising it is often the difference between hearing a suggestion and hearing nothing at all.',
        highlight: 'Trebalo bi to riješiti.',
      },
      {
        type: 'example',
        title: 'Calibrating the Tone',
        items: [
          {
            hr: 'Moraš predati obrazac do petka.',
            en: 'You must submit the form by Friday.',
            note: 'a rule, so the plain form',
          },
          {
            hr: 'Trebao bi se malo odmoriti.',
            en: 'You should get some rest.',
            note: 'advice to a person → conditional',
          },
          {
            hr: 'Mogli biste probati ovaj pristup.',
            en: 'You could try this approach.',
            note: 'a suggestion, V-form',
          },
          {
            hr: 'Ne smijete parkirati ovdje.',
            en: 'You are not allowed to park here.',
            note: 'prohibition, not inability',
          },
          {
            hr: 'Trebalo bi provjeriti te brojeve.',
            en: 'Those numbers ought to be checked.',
            note: 'impersonal — nobody is blamed',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Mora da je vlak već otišao, peron je prazan.',
            en: 'The train must have left already, the platform is empty.',
            note: 'mora da — a deduction, not an obligation',
          },
          {
            hr: 'Trebali bismo rezervirati stol prije nego što stignu gosti.',
            en: 'We should book a table before the guests arrive.',
            note: 'trebali bismo — advice to ourselves',
          },
          {
            hr: 'Djeca ne smiju sama na plažu bez odraslih.',
            en: 'Children are not allowed to go to the beach alone without adults.',
            note: 'ne smiju — a prohibition',
          },
          {
            hr: 'Moglo bi zahladiti navečer, ponesi jaknu.',
            en: 'It might get cold in the evening, take a jacket.',
            note: 'moglo bi — probability, impersonal',
          },
          {
            hr: 'Ne mogu doći jer radim, a i ne smijem ostaviti kolege same.',
            en: 'I cannot come because I am working, and I am not allowed to leave my colleagues alone either.',
            note: 'ne mogu (unable) beside ne smijem (not allowed)',
          },
          {
            hr: 'Trebalo bi malo više soli u ovoj juhi.',
            en: 'This soup could do with a little more salt.',
            note: 'impersonal trebalo bi — nobody is blamed',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You want to advise a friend gently to rest. Which fits?',
        options: [
          'Moraš se odmoriti.',
          'Trebao bi se odmoriti.',
          'Ne smiješ se odmoriti.',
          'Odmori se!',
        ],
        correct: 1,
        explanation:
          'The conditional turns the modal into advice rather than an instruction: trebao bi. "Moraš" is an order and "ne smiješ" forbids the rest entirely.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A sign says "Ne smijete pušiti." What does it mean?',
        options: [
          'You are unable to smoke.',
          'You are not allowed to smoke.',
          'You do not have to smoke.',
          'You should not smoke.',
        ],
        correct: 1,
        explanation:
          '"Smjeti" is permission, so its negative is a prohibition. Inability would be "ne možete", and "ne morate" would mean you do not have to.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is a tone error: "Moraš se odmoriti" as friendly advice, where a Croatian would say Trebao bi se odmoriti — the plain form is an instruction. The second is confusing prohibition with inability: "Ne možeš pušiti ovdje" says you are unable to, while the sign means Ne smiješ pušiti ovdje. The third is an English-shaped deduction: "Mora biti kod kuće" reads as an obligation — he is required to be at home — while the probability reading uses the fixed shape Mora da je kod kuće.',
        highlight: 'Trebao bi se odmoriti',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ pomoći susjedi s vrećicama." (You should help the neighbour with her bags — gentle advice.)',
            options: ['Moraš', 'Trebao bi', 'Ne smiješ', 'Smiješ'],
            correct: 1,
            explanation:
              'Advice to a person takes the conditional: trebao bi. "Moraš" is an order, "ne smiješ" forbids it, and "smiješ" merely permits it.',
          },
          {
            q: 'Complete: "Ovdje se ne ___ parkirati." (Parking here is forbidden — permission, not ability.)',
            options: ['može', 'smije', 'mora', 'treba'],
            correct: 1,
            explanation:
              '"Smjeti" is permission, so a ban is ne smije se. "Ne može se" would say parking is physically impossible, which is a different statement.',
          },
          {
            q: 'Which sentence expresses a deduction — he is probably at home?',
            options: [
              'Mora da je kod kuće.',
              'Mora ići kući.',
              'Treba biti kod kuće.',
              'Smije biti kod kuće.',
            ],
            correct: 0,
            explanation:
              '"Mora da" plus a clause is how Croatian says "he must be" as a guess. The other three are an obligation to go, an expectation, and a permission.',
          },
          {
            q: 'A friend is exhausted and you say "Moraš spavati." What is wrong with it as advice?',
            options: [
              'Nothing — it is the normal advice form',
              'It should be "Ne smiješ spavati"',
              'It is an order; advice to a person takes the conditional: Trebao bi spavati',
              '"spavati" should be perfective',
            ],
            correct: 2,
            explanation:
              'The plain modal is an instruction, which is why it lands as bossy. The conditional turns it into advice the friend can still decline.',
          },
          {
            q: '"Ne možeš voziti" against "Ne smiješ voziti" — which is true?',
            options: [
              'Both mean you are forbidden',
              'Both mean you are unable',
              '"ne možeš" = unable; "ne smiješ" = not allowed',
              '"ne možeš" = not allowed; "ne smiješ" = unable',
            ],
            correct: 2,
            explanation:
              "Moći is ability and smjeti is permission, so their negatives are inability and prohibition. Swapping them turns a rule into a comment on someone's competence.",
          },
          {
            q: 'Which is the gentlest suggestion?',
            options: ['Moraš ići.', 'Trebaš ići.', 'Morao bi ići.', 'Možda bi mogao ići.'],
            correct: 3,
            explanation:
              'Down the scale the conditional softens each modal, and "možda bi mogao" adds a maybe on top of the softest verb. "Moraš" is the strongest.',
          },
          {
            q: 'You want to say "that ought to be checked" without blaming anyone. Which fits?',
            options: [
              'Moraš to provjeriti.',
              'Trebalo bi to provjeriti.',
              'Trebao si to provjeriti.',
              'Smiješ to provjeriti.',
            ],
            correct: 1,
            explanation:
              'The impersonal conditional "trebalo bi" drops the subject entirely, which is how criticism is delivered without pointing at a person. The others address someone directly.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Modality — Key Takeaways',
        points: [
          'The conditional is the volume knob: moraš → morao bi → mogao bi',
          'Plain forms for rules and facts; the conditional for advising a person',
          'The same verbs express probability: Mora da je kod kuće. Moglo bi padati.',
          'smjeti is permission — ne smiješ forbids, ne možeš means unable',
          'Impersonal advice avoids pointing at anyone: Trebalo bi to riješiti.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Prepositions With More Than One Case
  // ─────────────────────────────────────────────────────────
  {
    id: 'prepositions-advanced',
    title: 'Prepositions With Two Cases',
    subtitle: 'When za, po, s and o change meaning with the case that follows',
    icon: '🔀',
    level: 'B2',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'One Word, Several Meanings',
        body: 'A1 taught that each preposition rules one case. That is true of most of them — and false of exactly the ones you use constantly. "Za", "po", "s" and "o" each take two or three cases, and the case is what tells you which meaning is intended. This is where reading Croatian stops being a matter of vocabulary.',
        icon: '🔀',
      },
      {
        type: 'table',
        title: 'ZA',
        headers: ['Case', 'Meaning', 'Example'],
        rows: [
          ['accusative', 'for, intended for', 'Ovo je za tebe.'],
          ['accusative', 'in (time from now)', 'Vraćam se za sat.'],
          ['instrumental', 'at, behind', 'Sjedimo za stolom.'],
          ['genitive', 'during', 'za vrijeme rata'],
        ],
      },
      {
        type: 'rule',
        title: 'Za Stolom Is Not Behind the Table',
        body: 'The instrumental "za" is worth a moment: "za stolom" means at the table, seated at it, and "sjedimo za stolom" is what a Croatian says about dinner. Literally it is "behind the table", from the point of view of someone coming in — the meaning drifted, and the case is the only thing distinguishing it from "za stol", meaning towards it.',
        highlight: 'Sjedimo za stolom.',
      },
      {
        type: 'table',
        title: 'PO, S and O',
        headers: ['Preposition', 'Case', 'Meaning'],
        rows: [
          ['po', 'locative', 'around, over — po gradu'],
          ['po', 'locative', 'according to — po mom mišljenju'],
          ['po', 'accusative', 'to fetch — idem po kruh'],
          ['s / sa', 'instrumental', 'with — s bratom'],
          ['s / sa', 'genitive', 'down from — s krova'],
          ['o', 'locative', 'about — o filmu'],
          ['o', 'accusative', 'against — udario o zid'],
        ],
      },
      {
        type: 'rule',
        title: 'Idem Po Kruh',
        body: 'The accusative "po" means going to FETCH something, and it is extremely common in everyday speech. Idem po kruh. Došao je po tebe. (He came to pick you up.) Compare "po gradu" with the locative — around town. Same word, two everyday meanings, told apart only by the case.',
        highlight: 'Idem po kruh.',
      },
      {
        type: 'rule',
        title: 'The Motion Group',
        body: 'Four prepositions of place follow one clean rule: pred, nad, pod and među take the ACCUSATIVE for motion and the INSTRUMENTAL for position. Stavi to pod stol. (motion) To je pod stolom. (position) Sjeli smo pred kuću / Sjedimo pred kućom. It is the same accusative-versus-locative logic you learned at A1, with the instrumental doing the static job instead.',
        highlight: 'pod stol / pod stolom',
      },
      {
        type: 'rule',
        title: 'Why This Matters at B2',
        body: 'Up to now you could survive by learning a preposition together with one case, as A1 advised. From here, that strategy silently mistranslates: "govorim o poslu" is I am talking about work, and "udario o zid" is hit against the wall. When a preposition seems not to fit, the first thing to check is the case, not the dictionary.',
        highlight: 'check the case, not the dictionary',
      },
      {
        type: 'example',
        title: 'The Same Word Twice',
        items: [
          {
            hr: 'Idem po mlijeko. / Šetam po gradu.',
            en: 'I am going to get milk. / I am walking around town.',
            note: 'accusative fetching, locative wandering',
          },
          {
            hr: 'Ovo je za tebe. / Sjedimo za stolom.',
            en: 'This is for you. / We are sitting at the table.',
            note: 'accusative purpose, instrumental position',
          },
          {
            hr: 'Pričamo o filmu. / Udario je glavom o zid.',
            en: 'We are talking about the film. / He hit his head against the wall.',
            note: 'locative topic, accusative impact',
          },
          {
            hr: 'Idem s bratom. / Sišao je s krova.',
            en: 'I am going with my brother. / He came down off the roof.',
            note: 'instrumental company, genitive descent',
          },
          {
            hr: 'Mačka je skočila pod stol i sad spava pod stolom.',
            en: 'The cat jumped under the table and now sleeps under it.',
            note: 'motion then position, in one sentence',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Za vrijeme ručka svi sjedimo za stolom, a poslije idem po kavu.',
            en: 'During lunch we all sit at the table, and afterwards I go to get coffee.',
            note: 'za + genitive (during), za + instrumental (at), po + accusative (fetch)',
          },
          {
            hr: 'Djeca trče po parku dok otac ide po kruh u pekarnicu.',
            en: 'The children run around the park while their father goes to get bread at the bakery.',
            note: 'po parku (locative, around) against po kruh (accusative, fetch)',
          },
          {
            hr: 'Govorili smo o ljetu na Hvaru dok je kiša udarala o prozor.',
            en: 'We talked about the summer on Hvar while the rain beat against the window.',
            note: 'o ljetu (locative, about) against o prozor (accusative, against)',
          },
          {
            hr: 'Stavio je torbu pod stol, a jakna je ostala na stolici.',
            en: 'He put the bag under the table, and the jacket stayed on the chair.',
            note: 'pod stol — motion, accusative',
          },
          {
            hr: 'Sišla je s bicikla i krenula s prijateljima prema Trsatu.',
            en: 'She got off the bike and set off with her friends towards Trsat.',
            note: 's bicikla (genitive, off) against s prijateljima (instrumental, with)',
          },
          {
            hr: 'Vraćam se za dva sata, čekaj me pred kućom.',
            en: 'I am coming back in two hours, wait for me in front of the house.',
            note: 'za dva sata (time from now); pred kućom — position, instrumental',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What does "Idem po kruh" mean?',
        options: [
          'I am walking around the bread.',
          'I am going to get bread.',
          'I am going with bread.',
          'I am going for the bread’s sake.',
        ],
        correct: 1,
        explanation:
          '"Po" with the ACCUSATIVE means going to fetch something. With the locative — po gradu — it would mean moving around, which is the other everyday meaning of the same word.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Mačka spava pod ___." (The cat is sleeping under the table.)',
        options: ['stol', 'stola', 'stolu', 'stolom'],
        correct: 3,
        explanation:
          'Nothing is moving, so "pod" takes the instrumental: pod stolom. The accusative "pod stol" would describe the cat going under there.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is one case per preposition: "sjedimo za stol" for at the table — position takes the instrumental, sjedimo za stolom, and "za stol" means towards it. The second is the locative after po when fetching: "idem po kruhu" — fetching takes the accusative, idem po kruh; "po gradu" is around town. The third is the accusative for a static position after pod or pred: "auto je pred kuću" — nothing is moving, so it is pred kućom.',
        highlight: 'sjedimo za stolom',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Idem ___ za ručak." (I am going to get bread for lunch.)',
            options: ['po kruhu', 'po kruh', 'za kruh', 's kruhom'],
            correct: 1,
            explanation:
              'Going to FETCH something is po plus the accusative: po kruh. "Po kruhu" would be the locative, moving around on the bread, and "s kruhom" is with bread.',
          },
          {
            q: 'Complete: "Cijela obitelj sjedi za ___." (The whole family is sitting at the table.)',
            options: ['stol', 'stola', 'stolu', 'stolom'],
            correct: 3,
            explanation:
              'Seated position takes za plus the instrumental: za stolom. "Za stol" would be motion towards the table.',
          },
          {
            q: 'Which sentence describes the cat JUMPING under the table (motion)?',
            options: [
              'Mačka je skočila pod stolom.',
              'Mačka je skočila pod stol.',
              'Mačka je skočila pod stola.',
              'Mačka je skočila pod stolu.',
            ],
            correct: 1,
            explanation:
              'Motion with pod takes the accusative: pod stol. The instrumental "pod stolom" is where it now lies; the genitive and locative do not follow pod at all.',
          },
          {
            q: 'What is wrong with "Vraćam se za sat vremena i čekam te pred kuću"?',
            options: [
              'Nothing is wrong',
              '"za sat" should be "po sat"',
              'Waiting is position, so it is pred kućom',
              '"vremena" should be "vrijeme"',
            ],
            correct: 2,
            explanation:
              'Nobody is moving towards the house, so pred takes the instrumental: pred kućom. "Za sat vremena" is the correct accusative for time from now.',
          },
          {
            q: '"za vrijeme rata" — which case, and which meaning?',
            options: [
              'accusative — for the war',
              'genitive — during the war',
              'instrumental — behind the war',
              'locative — about the war',
            ],
            correct: 1,
            explanation:
              '"Za" plus the genitive means during: za vrijeme rata. The accusative would be for, and the instrumental at or behind.',
          },
          {
            q: 'What is the difference between "s krova" and "s bratom"?',
            options: [
              '"s krova" is genitive (down from); "s bratom" is instrumental (with)',
              'None — both are instrumental',
              '"s krova" is locative; "s bratom" is genitive',
              'Both mean "with"',
            ],
            correct: 0,
            explanation:
              'The same preposition takes the genitive for coming down off something and the instrumental for company. The case is the only thing that tells the two apart.',
          },
          {
            q: 'In which sentence does "po" mean "according to"?',
            options: [
              'Idem po kruh.',
              'Šetam po gradu.',
              'Po mom mišljenju, to je točno.',
              'Došao je po tebe.',
            ],
            correct: 2,
            explanation:
              '"Po mom mišljenju" is po plus the locative meaning according to. The first and last are the fetching accusative, and "po gradu" is the locative meaning around.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Two-Case Prepositions — Key Takeaways',
        points: [
          'za: accusative for/in, instrumental at (za stolom), genitive during',
          'po: locative around or according to, accusative to fetch',
          's: instrumental with, genitive down from',
          'o: locative about, accusative against',
          'pred, nad, pod, među: accusative for motion, instrumental for position',
          'When a preposition seems wrong, check the case before the dictionary',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Concession and Contrast
  // ─────────────────────────────────────────────────────────
  {
    id: 'concession-contrast',
    title: 'Concession and Contrast',
    subtitle: 'Although, however, on the other hand — conceding a point',
    icon: '⚖️',
    level: 'B2',
    duration: '~5 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Admitting the Other Side',
        body: 'B2 is the level at which a learner is expected to weigh options and give the advantages and disadvantages of each. That is impossible without concession — the move where you grant your opponent something before disagreeing. These are the words that do it, and they separate an argument from a list of assertions.',
        icon: '⚖️',
      },
      {
        type: 'table',
        title: 'Conceding',
        headers: ['Croatian', 'English', 'Takes'],
        rows: [
          ['iako', 'although', 'a clause'],
          ['premda', 'although (more formal)', 'a clause'],
          ['unatoč', 'despite', 'a dative noun'],
          ['usprkos', 'in spite of', 'a dative noun'],
          ['bez obzira na', 'regardless of', 'an accusative noun'],
          ['doduše', 'admittedly, mind you', 'stands alone'],
        ],
      },
      {
        type: 'rule',
        title: 'Unatoč Takes the Dative',
        body: 'Worth flagging because almost every other preposition of this kind takes the genitive. "Unatoč" and "usprkos" take the DATIVE: unatoč kiši, usprkos svemu, unatoč problemima. Saying "unatoč kiše" is a very common learner error precisely because the genitive feels right after everything else.',
        highlight: 'unatoč kiši',
      },
      {
        type: 'table',
        title: 'Contrasting',
        headers: ['Croatian', 'English', 'Register'],
        rows: [
          ['ali', 'but', 'everyday'],
          ['međutim', 'however', 'written, formal'],
          ['ipak', 'nevertheless, still', 'everyday'],
          ['s druge strane', 'on the other hand', 'neutral'],
          ['naprotiv', 'on the contrary', 'formal'],
          ['dok', 'whereas', 'neutral'],
        ],
      },
      {
        type: 'rule',
        title: 'Ipak Is the One to Learn First',
        body: '"Ipak" means nevertheless, all the same, and it is what closes a concession. Iako je skupo, ipak ću kupiti. (Although it is expensive, I will buy it all the same.) The pairing — iako at the front, ipak in the second half — is the standard Croatian concessive shape, and using it makes an argument sound assembled rather than accumulated.',
        highlight: 'Iako… , ipak…',
      },
      {
        type: 'rule',
        title: 'Doduše Concedes in Advance',
        body: 'A small word doing sophisticated work. "Doduše" grants a point before you make yours: Doduše, malo je skuplje, ali kvaliteta je bolja. (Admittedly it is a bit more expensive, but the quality is better.) English "mind you" or "granted" does the same job. It signals fairness, which is exactly what makes an argument persuasive.',
        highlight: 'Doduše, …, ali…',
      },
      {
        type: 'rule',
        title: 'Dok Contrasts as Well as Times',
        body: 'You met "dok" at B1 meaning while and until. It has a third job: whereas. Sjever je kontinentalan, dok je obala mediteranska. There is no ambiguity in practice — a time reading needs the two clauses to be simultaneous, and a contrast reading compares two different things.',
        highlight: 'Sjever je…, dok je obala…',
      },
      {
        type: 'example',
        title: 'Building an Argument',
        items: [
          {
            hr: 'Iako je skupo, ipak se isplati.',
            en: 'Although it is expensive, it is still worth it.',
            note: 'the standard concessive pair',
          },
          {
            hr: 'Unatoč lošem vremenu, izlet je bio odličan.',
            en: 'Despite the bad weather, the trip was excellent.',
            note: 'unatoč + dative: lošem vremenu',
          },
          {
            hr: 'Doduše, nemam puno iskustva, ali brzo učim.',
            en: 'Admittedly I do not have much experience, but I learn fast.',
            note: 'conceding before asserting',
          },
          {
            hr: 'S druge strane, postoje i prednosti.',
            en: 'On the other hand, there are advantages too.',
            note: 'the phrase that turns a list into a comparison',
          },
          {
            hr: 'Zagreb je kontinentalan, dok je Split mediteranski.',
            en: 'Zagreb is continental, whereas Split is Mediterranean.',
            note: 'dok as contrast',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Iako je vlak kasnio sat vremena, ipak smo stigli na svadbu.',
            en: 'Although the train was an hour late, we still made it to the wedding.',
            note: 'iako… ipak — the standard pair',
          },
          {
            hr: 'Usprkos visokim cijenama, turisti i dalje dolaze na obalu.',
            en: 'In spite of high prices, tourists keep coming to the coast.',
            note: 'usprkos + dative plural: visokim cijenama',
          },
          {
            hr: 'Premda nikad nije igrao nogomet, o utakmici govori kao trener.',
            en: 'Although he has never played football, he talks about the match like a coach.',
            note: 'premda — the more formal although',
          },
          {
            hr: 'Doduše, stan je malen, ali je pogled na more nevjerojatan.',
            en: 'Admittedly the flat is small, but the sea view is incredible.',
            note: 'doduše concedes before the ali',
          },
          {
            hr: 'Bez obzira na vrijeme, uvijek pijemo kavu na terasi.',
            en: 'Regardless of the weather, we always drink coffee on the terrace.',
            note: 'bez obzira na + accusative',
          },
          {
            hr: 'Međutim, sjever zemlje ima posve drugačiju klimu od juga.',
            en: 'However, the north of the country has an entirely different climate from the south.',
            note: 'međutim — written contrast',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Unatoč ___ , izašli smo." (Despite the rain, we went out.)',
        options: ['kiše', 'kiši', 'kišu', 'kišom'],
        correct: 1,
        explanation:
          '"Unatoč" takes the DATIVE, unlike most prepositions of its kind: unatoč kiši. The genitive "kiše" feels right because so many others take it, which is exactly why this is a common error.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which word closes a concession — "…, ipak…" style?',
        options: ['iako', 'ipak', 'jer', 'zato'],
        correct: 1,
        explanation:
          '"Iako" opens the concession and "ipak" closes it: Iako je skupo, ipak ću kupiti. "Jer" and "zato" belong to cause and consequence, not concession.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The genitive after unatoč is the signature error: "unatoč kiše", "usprkos problema" — both prepositions take the dative, unatoč kiši, usprkos problemima. The second is the accusative slipping too: "bez obzira na lošem vremenu" — bez obzira na takes the accusative, bez obzira na loše vrijeme. The third is a bare "Ne slažem se" where a Croatian argument grants the point first — Doduše, …, ali… — and closes the concession with ipak: Iako je skupo, ipak ću kupiti.',
        highlight: 'unatoč kiši, usprkos problemima',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Usprkos ___ , utakmica je odigrana." (Despite the snow, the match was played.)',
            options: ['snijega', 'snijegu', 'snijeg', 'snijegom'],
            correct: 1,
            explanation:
              '"Usprkos", like "unatoč", takes the dative: usprkos snijegu. The genitive feels right because most prepositions of this kind take it, which is exactly the trap.',
          },
          {
            q: 'Complete: "Iako je bio umoran, ___ je došao na trening."',
            options: ['ipak', 'jer', 'zato', 'ako'],
            correct: 0,
            explanation:
              '"Ipak" closes the concession that "iako" opened: although tired, he still came. "Jer" and "zato" express cause and consequence.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Unatoč kiše, otišli smo na izlet.',
              'Unatoč kišu, otišli smo na izlet.',
              'Unatoč kiši, otišli smo na izlet.',
              'Unatoč kišom, otišli smo na izlet.',
            ],
            correct: 2,
            explanation:
              '"Unatoč" takes the dative: unatoč kiši. Genitive, accusative and instrumental are all wrong after it.',
          },
          {
            q: 'What is wrong with "Bez obzira na lošem vremenu, krenuli smo"?',
            options: [
              'Nothing is wrong',
              '"bez obzira na" takes the accusative: na loše vrijeme',
              '"bez obzira" takes the dative',
              '"krenuli smo" should be "smo krenuli"',
            ],
            correct: 1,
            explanation:
              '"Bez obzira na" is followed by the accusative: bez obzira na loše vrijeme. The dative belongs to unatoč and usprkos, not here.',
          },
          {
            q: 'What does "doduše" do in "Doduše, skuplje je, ali traje duže"?',
            options: [
              'It contradicts the previous speaker',
              'It concedes a point before the speaker makes their own',
              'It gives a reason',
              'It introduces a condition',
            ],
            correct: 1,
            explanation:
              '"Doduše" grants something — admittedly, mind you — so the "ali" that follows sounds fair rather than stubborn. It is the concession move in one word.',
          },
          {
            q: 'In a formal written text, which contrast word replaces everyday "ali"?',
            options: ['ipak', 'dok', 'međutim', 'jer'],
            correct: 2,
            explanation:
              '"Međutim" is the written, formal however. "Ipak" closes a concession, "dok" is whereas, and "jer" is because.',
          },
          {
            q: '"Otac je iz Slavonije, dok je majka s otoka." What does "dok" mean here?',
            options: ['while (at the same time)', 'until', 'whereas (contrast)', 'because'],
            correct: 2,
            explanation:
              'Two different people are being compared, so this is the contrast reading: whereas. A time reading would need the two clauses to be simultaneous events.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Concession — Key Takeaways',
        points: [
          'iako and premda take a clause; unatoč and usprkos take a DATIVE noun',
          'The standard shape is Iako…, ipak…',
          'doduše concedes a point in advance and makes you sound fair',
          'međutim and naprotiv are the written contrasts; ali is everyday',
          'dok also means whereas, not only while',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Degrees and Intensity
  // ─────────────────────────────────────────────────────────
  {
    id: 'degrees-intensity',
    title: 'Degrees and Intensity',
    subtitle: 'More and more, the sooner the better, far too, barely',
    icon: '📈',
    level: 'B2',
    duration: '~5 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'Saying How Much, Precisely',
        body: 'A2 gave you comparatives. B2 is about calibration — the difference between quite good, very good, remarkably good and barely good enough. Croatian has a rich set of intensifiers and two comparative constructions English has to build out of several words.',
        icon: '📈',
      },
      {
        type: 'rule',
        title: 'Sve + Comparative: More and More',
        body: 'To say something is increasing, put "sve" in front of the comparative. Sve bolje. (Better and better.) Sve više ljudi dolazi. (More and more people are coming.) Postaje sve teže. English needs a doubled word for this; Croatian needs one short one, and it appears constantly in writing about trends.',
        highlight: 'sve više · sve bolje',
      },
      {
        type: 'rule',
        title: 'Što + Comparative, To + Comparative',
        body: 'The other construction: the more X, the more Y. Što prije, to bolje. (The sooner the better.) Što više učiš, to bolje govoriš. Both halves take comparatives, and the "to" half can be dropped in a short phrase — "što prije" on its own simply means as soon as possible.',
        highlight: 'Što prije, to bolje.',
      },
      {
        type: 'table',
        title: 'The Intensifiers, Weakest to Strongest',
        headers: ['Croatian', 'English'],
        rows: [
          ['jedva', 'barely'],
          ['pomalo', 'somewhat, a little'],
          ['prilično', 'fairly, quite'],
          ['vrlo / jako', 'very'],
          ['izuzetno', 'exceptionally'],
          ['krajnje', 'extremely'],
          ['previše', 'too much'],
        ],
      },
      {
        type: 'rule',
        title: 'Vrlo and Jako Are Not Interchangeable in Register',
        body: 'Both mean very. "Jako" is the everyday spoken one — jako dobro, jako mi je drago. "Vrlo" is the neutral written one and sounds slightly formal in speech. In an essay, "vrlo" is the safer choice; in conversation, "jako" is what people actually say. "Veoma" is a third option, more literary still.',
        highlight: 'jako (spoken) · vrlo (written)',
      },
      {
        type: 'rule',
        title: 'The Pre- Prefix Means Too',
        body: 'Attaching "pre-" to an adjective means excessively: preskup (too expensive), prevelik (too big), premalen (too small), prekasno (too late). It is compact and very common, and it is a different thing from "previše" plus a noun — preskupo je says the thing is too expensive, previše je skupo says much the same with more emphasis on the amount.',
        highlight: 'preskup · prevelik · prekasno',
      },
      {
        type: 'example',
        title: 'Calibrating',
        items: [
          {
            hr: 'Sve više ljudi uči hrvatski.',
            en: 'More and more people are learning Croatian.',
            note: 'sve + comparative',
          },
          {
            hr: 'Što prije počneš, to bolje.',
            en: 'The sooner you start, the better.',
            note: 'što… to… , both comparatives',
          },
          {
            hr: 'Jedva sam stigao na vrijeme.',
            en: 'I barely made it on time.',
            note: 'jedva — the weakest intensifier',
          },
          {
            hr: 'To je prilično zanimljivo.',
            en: 'That is fairly interesting.',
            note: 'prilično — measured, not enthusiastic',
          },
          {
            hr: 'Stan je prelijep, ali preskup.',
            en: 'The flat is beautiful but too expensive.',
            note: 'pre- twice, doing two different jobs',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Dani postaju sve kraći, a večeri sve hladnije.',
            en: 'The days are getting shorter and shorter, and the evenings colder and colder.',
            note: 'sve + comparative, twice',
          },
          {
            hr: 'Što više vježbaš izgovor, to te ljudi lakše razumiju.',
            en: 'The more you practise pronunciation, the more easily people understand you.',
            note: 'što… to… with two comparatives',
          },
          {
            hr: 'Juha je izuzetno dobra, ali malo preslana za mene.',
            en: 'The soup is exceptionally good, but a little too salty for me.',
            note: 'izuzetno; pre- meaning too',
          },
          {
            hr: 'Stigli smo prekasno, koncert je već počeo.',
            en: 'We arrived too late, the concert had already started.',
            note: 'prekasno — one word',
          },
          {
            hr: 'Cijene stanova u Zagrebu rastu sve brže iz godine u godinu.',
            en: 'Flat prices in Zagreb are rising faster and faster from year to year.',
            note: 'sve brže — a trend',
          },
          {
            hr: 'Bio je krajnje nepristojan prema konobaru, što je pomalo neugodno.',
            en: 'He was extremely rude to the waiter, which is somewhat embarrassing.',
            note: 'krajnje (strongest) beside pomalo (mild)',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "more and more people"?',
        options: ['više više ljudi', 'sve više ljudi', 'što više ljudi', 'previše ljudi'],
        correct: 1,
        explanation:
          '"Sve" plus a comparative expresses an increasing quantity: sve više ljudi. "Previše ljudi" would mean too many people, which is a judgement rather than a trend.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "preskup" mean?',
        options: ['very cheap', 'too expensive', 'quite expensive', 'the most expensive'],
        correct: 1,
        explanation:
          'The prefix "pre-" on an adjective means excessively, so preskup is too expensive. The superlative would be "najskuplji".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is doubling the comparative on the English pattern: "više i više ljudi" — Croatian says sve više ljudi. The second is dropping "to" or using "tako" in the correlative: "Što prije, tako bolje" — the pair is Što prije, to bolje. The third is the prefix written as a separate word: "pre skup", "pre kasno" — pre- is glued to the adjective, preskup, prekasno.',
        highlight: 'sve više ljudi',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Zimi su dani ___ kraći." (In winter the days get shorter and shorter.)',
            options: ['više', 'sve', 'što', 'jako'],
            correct: 1,
            explanation:
              '"Sve" plus a comparative expresses an increasing degree: sve kraći. "Jako kraći" would be an odd very shorter, and "što" needs its "to" partner.',
          },
          {
            q: 'Complete: "Što više čitaš, ___ bolje pišeš."',
            options: ['tako', 'to', 'ono', 'sve'],
            correct: 1,
            explanation:
              'The correlative is što… to…: što više, to bolje. "Sve" belongs to the other construction and "tako" is a learner calque.',
          },
          {
            q: 'Which sentence correctly says the coffee is TOO hot?',
            options: [
              'Kava je prevruća, pričekaj malo.',
              'Kava je pre vruća, pričekaj malo.',
              'Kava je previše vruć, pričekaj malo.',
              'Kava je vrlo vruća, pričekaj malo.',
            ],
            correct: 0,
            explanation:
              'The pre- prefix means excessively and is written as one word: prevruća. "Vrlo vruća" says very hot, not too hot, and "vruć" fails to agree with kava.',
          },
          {
            q: 'What is wrong with "Stigli smo pre kasno na vlak"?',
            options: [
              'Nothing is wrong',
              'pre- is a prefix and is written as one word: prekasno',
              '"na vlak" should be "u vlak"',
              '"stigli" should be "stignuli"',
            ],
            correct: 1,
            explanation:
              'The intensifying pre- attaches directly to the adverb: prekasno. Written apart it looks like a preposition, which it is not here.',
          },
          {
            q: 'Order these from WEAKEST to STRONGEST: jedva, prilično, krajnje.',
            options: [
              'krajnje, prilično, jedva',
              'jedva, prilično, krajnje',
              'prilično, jedva, krajnje',
              'jedva, krajnje, prilično',
            ],
            correct: 1,
            explanation:
              '"Jedva" is barely, "prilično" is fairly, and "krajnje" is extremely — the bottom, the middle and the top of the scale.',
          },
          {
            q: 'In a written essay, which "very" is the safer choice?',
            options: ['jako', 'baš', 'skroz', 'vrlo'],
            correct: 3,
            explanation:
              '"Vrlo" is the neutral written intensifier; "jako" is what people say in conversation, and "baš" and "skroz" are colloquial.',
          },
          {
            q: 'What does "premalen" mean?',
            options: ['very small', 'the smallest', 'too small', 'quite small'],
            correct: 2,
            explanation:
              'Pre- on an adjective means excessively: premalen is too small. The superlative would be najmanji, and quite small is prilično malen.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Degrees — Key Takeaways',
        points: [
          'sve + comparative = more and more: sve bolje, sve više',
          'Što… to… = the more… the more: Što prije, to bolje.',
          'jedva, pomalo, prilično, vrlo, izuzetno, krajnje',
          'jako is spoken, vrlo is written, veoma is literary',
          'pre- on an adjective means too: preskup, prevelik, prekasno',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Negation, Advanced
  // ─────────────────────────────────────────────────────────
  {
    id: 'negation-advanced',
    title: 'Negation, Advanced',
    subtitle: 'Neither…nor, no kind of, not only — and what exactly is denied',
    icon: '🚧',
    level: 'B2',
    duration: '~5 min',
    color: '#78716c',
    bg: '#fafaf9',
    slides: [
      {
        type: 'intro',
        title: 'Beyond Ne and Ni',
        body: 'A1 gave you "ne" plus the verb and the ni- family with its obligatory double negation. That covers denial. What it does not cover is precision — denying one part of a sentence rather than all of it, listing what is absent, or denying something in order to assert something stronger. That is this lesson.',
        icon: '🚧',
      },
      {
        type: 'rule',
        title: 'Ni… Ni — Neither, Nor',
        body: 'To list several absent things, repeat "ni" before each, and negate the verb as usual. Ni Ana ni Marko nisu došli. Nemam ni vremena ni novca. "Niti… niti" is the more formal variant and works identically. Note that the verb is still negated — the doubling rule from A1 applies here as much as anywhere.',
        highlight: 'Ni Ana ni Marko nisu došli.',
      },
      {
        type: 'rule',
        title: 'Nikakav — No Kind of At All',
        body: 'Where "nijedan" denies a countable one, "nikakav" denies the whole category, and it is much stronger. Nemam nikakav problem s tim. (I have no problem at all with that.) Nema nikakve šanse. (There is no chance whatsoever.) It declines like an adjective, and it is the word to reach for when "nijedan" is not emphatic enough.',
        highlight: 'Nema nikakve šanse.',
      },
      {
        type: 'rule',
        title: 'What Exactly Is Being Denied',
        body: 'Placement matters. "Nisam ja to rekao" denies that it was ME — somebody said it. "Nisam to rekao" denies that I said THAT. "Nisam rekao" denies the saying. Croatian marks the focus by what sits next to the negated verb, and at B2 this is how you argue precisely instead of merely disagreeing.',
        highlight: 'Nisam JA to rekao.',
      },
      {
        type: 'table',
        title: 'The Constructions',
        headers: ['Croatian', 'English'],
        rows: [
          ['ni… ni…', 'neither… nor…'],
          ['nikakav', 'no… at all, no kind of'],
          ['nipošto', 'by no means, absolutely not'],
          ['nikako', 'in no way'],
          ['ne samo… nego i…', 'not only… but also…'],
          ['a da ne…', 'without …ing'],
        ],
      },
      {
        type: 'rule',
        title: 'Ne Samo… Nego I — Denying to Assert',
        body: 'The most useful item here, because it is an argument move rather than a denial. Ne samo da je jeftinije, nego je i brže. (Not only is it cheaper, it is also faster.) The first half concedes the obvious point and the second half adds the one you actually want made. Note "nego" rather than "ali" — this is the after-a-negative rule from A2 doing its job.',
        highlight: 'Ne samo… nego i…',
      },
      {
        type: 'rule',
        title: 'A Da Ne — Without Doing',
        body: 'Croatian has no clean equivalent of "without doing something", and uses a small clause instead: Otišao je a da nije ništa rekao. (He left without saying anything.) Ne mogu to učiniti a da ne pitam. It looks odd the first time and is entirely standard, and it is one of the constructions that will simply not occur to you unless someone points at it.',
        highlight: 'a da nije ništa rekao',
      },
      {
        type: 'example',
        title: 'Precise Denial',
        items: [
          {
            hr: 'Nemam ni vremena ni volje.',
            en: 'I have neither the time nor the inclination.',
            note: 'ni… ni… + a negated verb',
          },
          {
            hr: 'Nema nikakvog razloga za brigu.',
            en: 'There is no reason at all to worry.',
            note: 'nikakav declines: nikakvog',
          },
          {
            hr: 'Nipošto se ne slažem.',
            en: 'I absolutely do not agree.',
            note: 'nipošto intensifies the denial',
          },
          {
            hr: 'Ne samo da govori hrvatski, nego i piše.',
            en: 'Not only does he speak Croatian, he writes it too.',
            note: 'nego, not ali, after a negative',
          },
          {
            hr: 'Izašao je a da se nije pozdravio.',
            en: 'He left without saying goodbye.',
            note: 'a da ne — the "without doing" construction',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ni u Splitu ni u Zadru nismo našli slobodan stan.',
            en: 'Neither in Split nor in Zadar did we find a free flat.',
            note: 'ni… ni… and the verb still negated',
          },
          {
            hr: 'Nije bilo nikakve gužve na granici, prošli smo za pet minuta.',
            en: 'There was no queue at all at the border, we got through in five minutes.',
            note: 'nikakve gužve — genitive after nije bilo',
          },
          {
            hr: 'Ne samo da je jelo bilo ukusno, nego je i porcija bila velika.',
            en: 'Not only was the food tasty, but the portion was big too.',
            note: 'ne samo da… nego i…',
          },
          {
            hr: 'Otišli su s posla a da nisu nikome ništa rekli.',
            en: 'They left work without telling anyone anything.',
            note: 'a da ne — without doing; ni- words pile up',
          },
          {
            hr: 'Nisam ja zaboravio karte, ti si ih ostavio kod kuće.',
            en: 'It was not ME who forgot the tickets, you left them at home.',
            note: 'the focus of the denial sits by the negated verb',
          },
          {
            hr: 'Nikako ne mogu shvatiti zašto vlak opet kasni.',
            en: 'I simply cannot understand why the train is late again.',
            note: 'nikako intensifies the denial',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Ne samo da je jeftinije, ___ je i brže."',
        options: ['ali', 'nego', 'jer', 'iako'],
        correct: 1,
        explanation:
          'After a negative, Croatian replaces with "nego" rather than contrasting with "ali" — the same rule you met at A2 in "nije crno nego bijelo".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the strongest denial of a problem?',
        options: ['Nemam problem.', 'Nemam nijedan problem.', 'Nemam nikakav problem.'],
        correct: 2,
        explanation:
          '"Nikakav" denies the entire category rather than a countable instance, so it is the most emphatic. "Nijedan" denies one specific problem and the plain form is neutral.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is dropping the negation on the verb after ni… ni: "Ni Ana ni Marko su došli" — Croatian keeps the double negative, Ni Ana ni Marko nisu došli. The second is "ali" after ne samo: "ne samo jeftinije, ali i brže" — after a negative the contrast is nego, ne samo jeftinije nego i brže. The third is a literal "bez" plus a verb for "without doing": "bez reći ništa" — Croatian builds a clause, a da nije ništa rekao.',
        highlight: 'Ni Ana ni Marko nisu došli',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ni ja ni moj brat ___ bili u Dubrovniku."',
            options: ['smo', 'nismo', 'jesmo', 'bismo'],
            correct: 1,
            explanation:
              'After ni… ni the verb is still negated: nismo bili. Dropping the negation on the verb is the English pattern, and Croatian never does it.',
          },
          {
            q: 'Complete: "Nema ___ smisla čekati dalje." (There is no sense at all in waiting any longer.)',
            options: ['nikakav', 'nikakvog', 'nikakvom', 'nikakvu'],
            correct: 1,
            explanation:
              '"Nema" takes the genitive, and nikakav declines like an adjective: nikakvog smisla. The nominative "nikakav" cannot follow nema.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ne samo da pjeva, ali i svira gitaru.',
              'Ne samo da pjeva, iako i svira gitaru.',
              'Ne samo da pjeva, nego i svira gitaru.',
              'Ne samo da pjeva, jer i svira gitaru.',
            ],
            correct: 2,
            explanation:
              'After a negative the contrast is "nego", giving ne samo… nego i…. "Ali" is the English-shaped error, and iako and jer belong to concession and cause.',
          },
          {
            q: 'What is wrong with "Izašao je bez reći zbogom"?',
            options: [
              'Nothing is wrong',
              '"bez" cannot take an infinitive; Croatian uses a clause: a da nije rekao zbogom',
              '"zbogom" needs the accusative',
              '"izašao" should be "izlazio"',
            ],
            correct: 1,
            explanation:
              'There is no "without" plus infinitive in Croatian. "Without doing something" is a small clause: izašao je a da nije rekao zbogom.',
          },
          {
            q: '"Nisam JA to rekao." What exactly is being denied?',
            options: [
              'that anything was said',
              'that it was said today',
              'that it was said at all, by anyone',
              'that the speaker was the one who said it',
            ],
            correct: 3,
            explanation:
              'What sits beside the negated verb is what is denied: here the pronoun, so somebody said it, but not me. "Nisam to rekao" would deny saying that particular thing.',
          },
          {
            q: 'What does "nipošto" mean?',
            options: ['maybe', 'not yet', 'by no means', 'nowhere'],
            correct: 2,
            explanation:
              '"Nipošto" is an emphatic by no means, absolutely not: Nipošto se ne slažem. "Nowhere" is nigdje and "not yet" is još ne.',
          },
          {
            q: 'You want to say "I can neither cook nor bake." Which is right?',
            options: [
              'Ne znam ni kuhati ni peći.',
              'Znam ni kuhati ni peći.',
              'Ne znam ili kuhati ili peći.',
              'Ne znam i kuhati i peći.',
            ],
            correct: 0,
            explanation:
              'Neither… nor is ni… ni with the verb negated: ne znam ni kuhati ni peći. "Ili" is either/or and "i… i" is both… and, and the verb must carry ne.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Advanced Negation — Key Takeaways',
        points: [
          'ni… ni… lists absences, and the verb is still negated',
          'nikakav denies the whole category — stronger than nijedan',
          'What sits beside the negated verb is what is being denied',
          'ne samo… nego i… is an argument move, not just a denial',
          'a da ne… is how Croatian says "without doing something"',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Building an Argument
  // ─────────────────────────────────────────────────────────
  {
    id: 'argument-structure',
    title: 'Building an Argument',
    subtitle: 'Advantages, disadvantages, and reaching a conclusion',
    icon: '🏗️',
    level: 'B2',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Skill the Level Is Named For',
        body: 'The CEFR descriptor for B2 says a learner can "explain a viewpoint on a topical issue giving the advantages and disadvantages of various options". That is a structure, not a vocabulary list — and it has a recognisable Croatian shape you can learn in one sitting.',
        icon: '🏗️',
      },
      {
        type: 'table',
        title: 'The Four Moves',
        headers: ['Move', 'Croatian'],
        rows: [
          ['Open', 'Što se tiče… / Kad je riječ o…'],
          ['For', 'Prednost je u tome što… / Glavni argument za…'],
          ['Against', 'S druge strane… / Nedostatak je…'],
          ['Conclude', 'Zaključno… / Sve u svemu…'],
        ],
      },
      {
        type: 'rule',
        title: 'Opening on a Topic',
        body: '"Što se tiče" plus the genitive is the standard way to raise a subject: Što se tiče cijene, mislim da je previsoka. "Kad je riječ o" plus the locative does the same job: Kad je riječ o obrazovanju… Both signal that you are addressing one aspect deliberately rather than talking generally, which is what makes an argument sound organised.',
        highlight: 'Što se tiče cijene…',
      },
      {
        type: 'table',
        title: 'For and Against',
        headers: ['Croatian', 'English'],
        rows: [
          ['prednost', 'advantage'],
          ['nedostatak', 'disadvantage, drawback'],
          ['Prednost je u tome što…', 'The advantage is that…'],
          ['Glavni je problem…', 'The main problem is…'],
          ['To ovisi o…', 'That depends on…'],
          ['S jedne strane… s druge strane…', 'On one hand… on the other…'],
        ],
      },
      {
        type: 'rule',
        title: 'U Tome Što — the Workhorse',
        body: '"Prednost je u tome što…" is the phrase to memorise exactly, because the shape is not guessable. Literally "the advantage is in that, that" — a locative pronoun followed by a "što" clause. Problem je u tome što nemamo vremena. Stvar je u tome što… Once you have it, you can attach any noun to any clause.',
        highlight: 'Problem je u tome što…',
      },
      {
        type: 'rule',
        title: 'Concluding Without Repeating',
        body: 'Croatian closers do more than restate: "Zaključno" (in conclusion) is formal and written; "Sve u svemu" (all in all) weighs what came before; "Ukratko" (in short) compresses; "Na kraju krajeva" (at the end of the day) concedes that the argument has limits. Choosing the right one tells a reader what kind of conclusion they are getting.',
        highlight: 'Sve u svemu… · Zaključno…',
      },
      {
        type: 'rule',
        title: 'The Structure Carries More Than the Vocabulary',
        body: 'A B2 argument that names one advantage, one drawback, and then decides is more convincing than one that lists five points in favour — because it shows you considered the other side. The concession lesson supplies the joins; this one supplies the frame. Together they are the difference between arguing and asserting.',
        highlight: 'one for, one against, then decide',
      },
      {
        type: 'example',
        title: 'A Short Argument',
        items: [
          {
            hr: 'Što se tiče rada od kuće, ima i prednosti i nedostataka.',
            en: 'As for working from home, there are both advantages and drawbacks.',
            note: 'opening on the topic',
          },
          {
            hr: 'Prednost je u tome što se štedi vrijeme.',
            en: 'The advantage is that it saves time.',
            note: 'u tome što + an impersonal se',
          },
          {
            hr: 'S druge strane, teže je odvojiti posao od privatnog života.',
            en: 'On the other hand, it is harder to separate work from private life.',
            note: 'odvojiti od + genitive',
          },
          {
            hr: 'Doduše, to ovisi o osobi.',
            en: 'Admittedly, that depends on the person.',
            note: 'conceding, then qualifying',
          },
          {
            hr: 'Sve u svemu, mislim da prednosti prevladavaju.',
            en: 'All in all, I think the advantages outweigh it.',
            note: 'weighing, then deciding',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kad je riječ o životu na otoku, zima je najveći nedostatak.',
            en: 'When it comes to life on an island, winter is the biggest drawback.',
            note: 'kad je riječ o + locative',
          },
          {
            hr: 'Prednost je u tome što u vlaku možeš raditi tijekom puta.',
            en: 'The advantage is that on a train you can work during the journey.',
            note: 'the fixed u tome što',
          },
          {
            hr: 'S jedne strane, gradski život nudi više posla, a s druge strane, više stresa.',
            en: 'On one hand, city life offers more work, and on the other, more stress.',
            note: 's jedne strane… s druge strane',
          },
          {
            hr: 'Nedostatak je u tome što su stanovi u centru preskupi.',
            en: 'The drawback is that flats in the centre are too expensive.',
            note: 'the same shape with nedostatak',
          },
          {
            hr: 'Ukratko, prednosti nadmašuju nedostatke, pa bih se odlučio za selidbu.',
            en: 'In short, the advantages outweigh the drawbacks, so I would decide in favour of moving.',
            note: 'ukratko compresses; odlučiti se za + accusative',
          },
          {
            hr: 'Na kraju krajeva, svatko mora sam odlučiti gdje želi živjeti.',
            en: 'At the end of the day, everyone has to decide for themselves where they want to live.',
            note: 'na kraju krajeva — a conclusion that concedes limits',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Prednost je u tome ___ se štedi vrijeme."',
        options: ['da', 'što', 'koji', 'ako'],
        correct: 1,
        explanation:
          'The fixed shape is "u tome što" — a locative pronoun followed by a "što" clause. It is not guessable from the parts, which is why it is worth memorising whole.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which opens an argument on a specific topic?',
        options: ['Sve u svemu…', 'Što se tiče…', 'Zaključno…', 'Naprotiv…'],
        correct: 1,
        explanation:
          '"Što se tiče" plus the genitive raises a subject deliberately. The other three close an argument, close it formally, or contradict — none of them opens one.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is the wrong case after the opener: "Što se tiče cijenu" or "Kad je riječ o cijenu" — što se tiče takes the genitive (što se tiče cijene) and kad je riječ o the locative (kad je riječ o cijeni). The second is the nominative after "ima": "ima prednosti i nedostatci" — existence with ima takes the genitive, ima prednosti i nedostataka. The third is rebuilding the workhorse from its parts and losing it: the fixed shape is Prednost je u tome što…, and a B2 argument names one nedostatak before it decides.',
        highlight: 'Prednost je u tome što…',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Što se tiče ___ , slažem se s vama." (As for the price, I agree with you.)',
            options: ['cijena', 'cijenu', 'cijene', 'cijeni'],
            correct: 2,
            explanation:
              '"Što se tiče" takes the genitive: što se tiče cijene. The locative "cijeni" belongs after kad je riječ o.',
          },
          {
            q: 'Complete: "Kad je riječ o ___ , Hrvatska ima puno toga za ponuditi." (When it comes to tourism…)',
            options: ['turizam', 'turizmu', 'turizma', 'turizmom'],
            correct: 1,
            explanation:
              '"Kad je riječ o" is o plus the locative: o turizmu. The genitive "turizma" would follow što se tiče instead.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Nedostatak je u tome što je skupo.',
              'Nedostatak je u tomu koji je skupo.',
              'Nedostatak je u to što je skupo.',
              'Nedostatak je za to što je skupo.',
            ],
            correct: 0,
            explanation:
              'The fixed shape is u tome što: a locative pronoun followed by a što-clause. "U to" is the wrong case, "koji" the wrong word, and "za to" the wrong preposition.',
          },
          {
            q: 'What is wrong with "Rad od kuće ima prednosti i nedostatci"?',
            options: [
              'Nothing is wrong',
              'After "ima" the noun goes genitive: prednosti i nedostataka',
              '"ima" should be "je"',
              '"rad od kuće" needs the locative',
            ],
            correct: 1,
            explanation:
              'Existence with ima takes the genitive plural: ima prednosti i nedostataka. "Prednosti" happened to look right only because its genitive plural is identical to the nominative.',
          },
          {
            q: 'Which closer weighs everything that came before?',
            options: ['Što se tiče…', 'S druge strane…', 'Doduše…', 'Sve u svemu…'],
            correct: 3,
            explanation:
              '"Sve u svemu" — all in all — is the weighing conclusion. The first opens a topic, the second introduces the other side, and the third concedes.',
          },
          {
            q: 'You have named an advantage. Which phrase introduces the drawback?',
            options: [
              'Prednost je u tome što…',
              'Zaključno…',
              'S druge strane…',
              'Kad je riječ o…',
            ],
            correct: 2,
            explanation:
              '"S druge strane" turns a list into a comparison by bringing in the other side. "Zaključno" closes and "kad je riječ o" opens.',
          },
          {
            q: '"Na kraju krajeva" signals what kind of conclusion?',
            options: [
              'a formal written one',
              'one that compresses the argument',
              'one that concedes the argument has limits — at the end of the day',
              'an opening on a new topic',
            ],
            correct: 2,
            explanation:
              'Each closer tells the reader what they are getting: zaključno is formal, ukratko compresses, and na kraju krajeva admits that the argument only goes so far.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Argument — Key Takeaways',
        points: [
          'Open: Što se tiče… / Kad je riječ o…',
          'prednost and nedostatak are the two nouns the whole structure hangs on',
          'Memorise "u tome što" whole — the shape is not guessable',
          'Close deliberately: Sve u svemu, Zaključno, Ukratko, Na kraju krajeva',
          'One point for, one against, then decide — it beats five points for',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Hedging and Precision
  // ─────────────────────────────────────────────────────────
  {
    id: 'hedging-precision',
    title: 'Hedging and Precision',
    subtitle: 'Saying how sure you are, and how much you are claiming',
    icon: '🎯',
    level: 'B2',
    duration: '~5 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'The Difference Between Confident and Careless',
        body: 'A learner who states everything with equal certainty sounds either arrogant or naive. Croatian has a rich set of qualifiers, and using them is what makes a B2 speaker sound like someone whose judgement you would trust — which is a large part of what "fluency" actually means at this level.',
        icon: '🎯',
      },
      {
        type: 'table',
        title: 'How Sure Are You',
        headers: ['Croatian', 'English', 'Confidence'],
        rows: [
          ['Sigurno je…', 'It is certainly…', 'certain'],
          ['Vjerojatno…', 'Probably…', 'likely'],
          ['Čini se da…', 'It seems that…', 'cautious'],
          ['Rekao bih da…', 'I would say that…', 'cautious'],
          ['Možda…', 'Maybe…', 'open'],
          ['Nisam siguran, ali…', 'I am not sure, but…', 'explicitly unsure'],
        ],
      },
      {
        type: 'rule',
        title: 'The Conditional Hedges Without a Hedge Word',
        body: '"Rekao bih da je to točno" claims less than "To je točno" while adding no extra vocabulary at all. The same move works with almost any verb of opinion: Ja bih to riješio drugačije. Moglo bi se reći da… This is the most economical hedging in the language, and it is why the conditional keeps reappearing at this level.',
        highlight: 'Rekao bih da…',
      },
      {
        type: 'table',
        title: 'How Much Are You Claiming',
        headers: ['Croatian', 'English'],
        rows: [
          ['uglavnom', 'mostly, generally'],
          ['u pravilu', 'as a rule'],
          ['donekle', 'to some extent'],
          ['u načelu', 'in principle'],
          ['barem djelomično', 'at least partly'],
          ['u većini slučajeva', 'in most cases'],
        ],
      },
      {
        type: 'rule',
        title: 'Uglavnom Is the One You Will Use Most',
        body: '"Uglavnom" means mostly or generally, and it rescues almost any over-broad statement. Uglavnom se slažem. (I mostly agree.) Uglavnom je tako. It concedes exceptions without naming them, which is exactly what a careful claim needs — and it is far more common in speech than the more formal "u pravilu" or "u načelu".',
        highlight: 'Uglavnom se slažem.',
      },
      {
        type: 'rule',
        title: 'Attributing a Claim',
        body: 'Distancing yourself from a claim is its own skill. "Navodno" marks it as second-hand, as you saw at B1. "Prema nekim istraživanjima…" attributes it. "Kažu da…" attributes it vaguely. "Koliko ja znam…" limits it to your own knowledge. Each of these says something different about where the claim comes from and how far you will defend it.',
        highlight: 'Koliko ja znam…',
      },
      {
        type: 'example',
        title: 'Qualifying',
        items: [
          {
            hr: 'Rekao bih da je to uglavnom točno.',
            en: 'I would say that is mostly correct.',
            note: 'two hedges, one sentence',
          },
          {
            hr: 'Čini mi se da bi to moglo biti problem.',
            en: 'It seems to me that could be a problem.',
            note: 'čini mi se + a conditional modal',
          },
          {
            hr: 'Koliko ja znam, još nije odlučeno.',
            en: 'As far as I know, it has not been decided yet.',
            note: 'odlučeno — a passive participle',
          },
          {
            hr: 'U pravilu je tako, ali ima iznimaka.',
            en: 'As a rule it is so, but there are exceptions.',
            note: 'iznimaka — genitive plural',
          },
          {
            hr: 'Donekle se slažem s tobom.',
            en: 'I agree with you to some extent.',
            note: 'slagati se s + instrumental',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Vjerojatno ćemo ljetovati na Braču, ali još ništa nije sigurno.',
            en: 'We will probably spend the summer on Brač, but nothing is certain yet.',
            note: 'vjerojatno — likely, not certain',
          },
          {
            hr: 'Navodno će nova cesta prema Splitu biti gotova do ljeta.',
            en: 'Allegedly the new road to Split will be finished by summer.',
            note: 'navodno marks the claim as second-hand',
          },
          {
            hr: 'Ja bih to riješio drugačije, ali u načelu se slažem s planom.',
            en: 'I would handle that differently, but in principle I agree with the plan.',
            note: 'the conditional hedges; u načelu limits the claim',
          },
          {
            hr: 'U većini slučajeva vlakovi kasne tek nekoliko minuta.',
            en: 'In most cases the trains are only a few minutes late.',
            note: 'u većini slučajeva — how much is claimed',
          },
          {
            hr: 'Kažu da je zima u Lici puno oštrija nego na obali.',
            en: 'They say winter in Lika is much harsher than on the coast.',
            note: 'kažu da — vague attribution',
          },
          {
            hr: 'Nisam siguran, ali mislim da je muzej nedjeljom zatvoren.',
            en: 'I am not sure, but I think the museum is closed on Sundays.',
            note: 'explicitly unsure',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which hedges a claim WITHOUT adding a hedge word?',
        options: ['Sigurno je točno.', 'Rekao bih da je točno.', 'To je točno.'],
        correct: 1,
        explanation:
          'The conditional itself does the hedging: "rekao bih" claims noticeably less than "to je". No extra vocabulary is needed, which is why it is the most economical hedge in the language.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "uglavnom" mean?',
        options: ['certainly', 'mostly', 'never', 'exactly'],
        correct: 1,
        explanation:
          '"Uglavnom" means mostly or generally, and it concedes exceptions without naming them — which is what makes an over-broad claim defensible.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is stating everything flat: "To je točno" where a Croatian would say Rekao bih da je to točno — the conditional alone claims less. The second is "možda" where the claim is actually likely: "Možda dolazi sutra" reads as a coin toss, while Vjerojatno dolazi sutra is the honest probability. The third is owning a second-hand claim: "Nova cesta bit će gotova do ljeta" asserts it yourself — mark the source with navodno or kažu da.',
        highlight: 'Rekao bih da je to točno',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ da je to najbolje rješenje." (I would say that is the best solution.)',
            options: ['Rekao sam', 'Rekao bih', 'Kažem', 'Reći ću'],
            correct: 1,
            explanation:
              'The conditional "rekao bih" hedges the opinion without any extra word. "Rekao sam" reports a past statement and "kažem" states it flat.',
          },
          {
            q: 'Complete: "___ je vlak kasnio zbog snijega." (Allegedly the train was late because of the snow — a second-hand claim.)',
            options: ['Navodno', 'Sigurno', 'Uglavnom', 'Donekle'],
            correct: 0,
            explanation:
              '"Navodno" marks the claim as something you were told. "Sigurno" owns it fully, and the other two limit how much is claimed rather than where it came from.',
          },
          {
            q: 'Which sentence hedges MOST cautiously?',
            options: [
              'To je sigurno problem.',
              'To je vjerojatno problem.',
              'Čini mi se da bi to mogao biti problem.',
              'To je problem.',
            ],
            correct: 2,
            explanation:
              '"Čini mi se" plus a conditional modal stacks two hedges. "Vjerojatno" is one step down from certain, and the last two assert.',
          },
          {
            q: '"Koliko ja znam, sigurno je tako." What is the mismatch?',
            options: [
              'Nothing — the sentence is fine',
              '"koliko ja znam" limits the claim while "sigurno" asserts certainty — the two pull apart',
              '"znam" should be "znao"',
              '"tako" needs the genitive',
            ],
            correct: 1,
            explanation:
              'You cannot both limit a claim to your own knowledge and call it certain. Pick one: Koliko ja znam, tako je — or Sigurno je tako.',
          },
          {
            q: '"uglavnom" against "u pravilu" — which is true?',
            options: [
              'Both are formal written phrases',
              '"uglavnom" is everyday speech; "u pravilu" is more formal',
              '"uglavnom" means always',
              '"u pravilu" means rarely',
            ],
            correct: 1,
            explanation:
              'Both mean mostly or as a rule; "uglavnom" is what people say, and "u pravilu" belongs to a more formal register.',
          },
          {
            q: 'Which word limits a claim to some extent?',
            options: ['nipošto', 'sigurno', 'navodno', 'donekle'],
            correct: 3,
            explanation:
              '"Donekle" means to some extent: Donekle se slažem. "Nipošto" denies, "sigurno" asserts, and "navodno" attributes.',
          },
          {
            q: 'Which phrase attributes a claim vaguely to other people?',
            options: ['Koliko ja znam…', 'Rekao bih da…', 'Kažu da…', 'Sigurno je…'],
            correct: 2,
            explanation:
              '"Kažu da" — they say that — hands the claim to an unnamed source. "Koliko ja znam" limits it to your own knowledge, and "rekao bih" keeps it yours but softened.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Hedging — Key Takeaways',
        points: [
          'Sigurno, vjerojatno, čini se, možda — a scale of confidence',
          'The conditional hedges by itself: Rekao bih da…',
          'uglavnom, u pravilu, donekle, u načelu limit the CLAIM',
          'navodno, kažu da, koliko ja znam attribute it elsewhere',
          'Stating everything with equal certainty is what makes a speaker sound naive',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Formal Correspondence
  // ─────────────────────────────────────────────────────────
  {
    id: 'formal-email',
    title: 'Formal Correspondence',
    subtitle: 'The conventions of a Croatian formal email or letter',
    icon: '✉️',
    level: 'B2',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'A Genre With Fixed Furniture',
        body: 'Croatian formal correspondence is more conventionalised than English. The opening, the closing and several connecting phrases are near-fixed, which is good news: learn six phrases and the frame of any formal email is done, leaving you to write only the part that is actually yours.',
        icon: '✉️',
      },
      {
        type: 'table',
        title: 'Opening',
        headers: ['Croatian', 'When'],
        rows: [
          ['Poštovani,', 'to a man, or unknown / general'],
          ['Poštovana,', 'to a woman'],
          ['Poštovani gospodine Horvat,', 'named, formal'],
          ['Poštovani svi,', 'to a group'],
          ['Dragi Ivane,', 'someone you know, semi-formal'],
          ['Bog Ana,', 'a colleague you are close to'],
        ],
      },
      {
        type: 'rule',
        title: 'Poštovani Is the Default',
        body: '"Poštovani" — respected — is the standard opener and works when you do not know the recipient or their gender. It takes a comma, and the next line starts with a capital. Using "Dragi" to a stranger reads as over-familiar, and going straight into the message with no greeting reads as rude in a way it often does not in English.',
        highlight: 'Poštovani,',
      },
      {
        type: 'table',
        title: 'The Body',
        headers: ['Croatian', 'English'],
        rows: [
          ['Obraćam vam se u vezi…', 'I am contacting you regarding…'],
          ['Molim vas za informaciju o…', 'I would like information about…'],
          ['U prilogu šaljem…', 'Please find attached…'],
          ['Bio bih vam zahvalan ako…', 'I would be grateful if…'],
          ['Unaprijed hvala.', 'Thank you in advance.'],
          ['Stojim vam na raspolaganju.', 'I remain at your disposal.'],
        ],
      },
      {
        type: 'rule',
        title: 'The V-Form Throughout, and Capitalised',
        body: 'Formal correspondence uses the V-form from the first word to the last. In writing, the polite pronoun is traditionally CAPITALISED as a mark of respect: Molim Vas, Vaš dopis, Obraćam Vam se. Lowercase is increasingly accepted in email, but the capital is never wrong and in a letter to an institution it is still expected.',
        highlight: 'Molim Vas · Vaš dopis',
      },
      {
        type: 'table',
        title: 'Closing',
        headers: ['Croatian', 'Register'],
        rows: [
          ['S poštovanjem,', 'standard formal'],
          ['S poštovanjem i lijepim pozdravom,', 'formal, warmer'],
          ['Lijep pozdrav,', 'semi-formal — very common in email'],
          ['Srdačan pozdrav,', 'warm, still professional'],
          ['Pozdrav,', 'casual, colleagues'],
        ],
      },
      {
        type: 'rule',
        title: 'Lijep Pozdrav Is the Email Default',
        body: '"S poštovanjem" is the equivalent of "Yours sincerely" and belongs in a letter to an institution. In ordinary professional email, Croatians overwhelmingly close with "Lijep pozdrav" — courteous without being stiff. If you are unsure which register you are in, "Lijep pozdrav" is almost never wrong.',
        highlight: 'Lijep pozdrav,',
      },
      {
        type: 'example',
        title: 'A Complete Email',
        items: [
          {
            hr: 'Poštovani,',
            en: 'Dear Sir/Madam,',
            note: 'comma, then a new line',
          },
          {
            hr: 'Obraćam vam se u vezi natječaja objavljenog 15. rujna.',
            en: 'I am contacting you regarding the vacancy advertised on 15 September.',
            note: 'u vezi + genitive; objavljenog is a participle',
          },
          {
            hr: 'U prilogu šaljem životopis i zamolbu.',
            en: 'Please find my CV and covering letter attached.',
            note: 'u prilogu — the standard phrase',
          },
          {
            hr: 'Bio bih vam zahvalan na povratnoj informaciji.',
            en: 'I would be grateful for your response.',
            note: 'conditional + zahvalan na + locative',
          },
          {
            hr: 'S poštovanjem,',
            en: 'Yours sincerely,',
            note: 'formal close, comma, then your name',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poštovana gospođo Kovač, zahvaljujem Vam na brzom odgovoru.',
            en: 'Dear Mrs Kovač, thank you for your prompt reply.',
            note: 'Poštovana + vocative gospođo; capital Vam',
          },
          {
            hr: 'Molim Vas da mi pošaljete ponudu za smještaj u kolovozu.',
            en: 'Please send me an offer for accommodation in August.',
            note: 'molim Vas da + V-form present',
          },
          {
            hr: 'Bio bih Vam zahvalan ako biste mi mogli potvrditi termin sastanka.',
            en: 'I would be grateful if you could confirm the meeting time.',
            note: 'conditional in both halves, V-form biste',
          },
          {
            hr: 'Stojim Vam na raspolaganju za sva dodatna pitanja.',
            en: 'I remain at your disposal for any further questions.',
            note: 'the fixed closing sentence',
          },
          {
            hr: 'Unaprijed hvala na razumijevanju i lijep pozdrav iz Zagreba.',
            en: 'Thank you in advance for your understanding and kind regards from Zagreb.',
            note: 'hvala na + locative; lijep pozdrav',
          },
          {
            hr: 'Ljubazno Vas molim da uzmete u obzir moju prijavu za radno mjesto.',
            en: 'I kindly ask you to consider my application for the position.',
            note: 'uzeti u obzir — a formal collocation',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are emailing someone you have never met, at an institution. How do you open?',
        options: ['Bog,', 'Dragi,', 'Poštovani,', 'Hej,'],
        correct: 2,
        explanation:
          '"Poštovani" is the standard formal opener and works without knowing the recipient. "Dragi" is for someone you know and "Bog" is casual.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the usual close for ordinary professional email?',
        options: ['S poštovanjem,', 'Lijep pozdrav,', 'Bog,', 'Zbogom,'],
        correct: 1,
        explanation:
          '"Lijep pozdrav" is what Croatians actually use in day-to-day professional email. "S poštovanjem" is a notch more formal and belongs in a letter to an institution.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is register drift into "ti": "Molim te, pošalji mi" in a letter to an institution — the V-form runs from the first word to the last, Molim Vas, pošaljite mi. The second is the wrong noun form after "u vezi": "u vezi natječaj" — it takes the genitive, u vezi natječaja, or s plus the instrumental, u vezi s natječajem. The third is the closer: "S poštovanjem" under a two-line note to a colleague reads stiff, and "Pozdrav" under a job application reads careless — Lijep pozdrav covers ordinary professional email.',
        highlight: 'Molim Vas, pošaljite mi',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Obraćam ___ se u vezi Vašeg oglasa." (I am contacting you regarding your advertisement — formal.)',
            options: ['ti', 'Vam', 'Vas', 'tebi'],
            correct: 1,
            explanation:
              '"Obraćati se" takes the dative, and in formal writing the V-form is capitalised: Obraćam Vam se. "Vas" is the accusative and "ti" the wrong register.',
          },
          {
            q: 'Complete: "U ___ šaljem životopis." (Please find my CV attached.)',
            options: ['prilog', 'priloga', 'prilogu', 'prilogom'],
            correct: 2,
            explanation:
              'The fixed phrase is "u prilogu" — u plus the locative. It is the standard way to say attached.',
          },
          {
            q: 'Which opening is right for an unknown recipient at an institution?',
            options: ['Dragi svi,', 'Hej,', 'Bog,', 'Poštovani,'],
            correct: 3,
            explanation:
              '"Poštovani" is the default formal opener and works without knowing the recipient. "Dragi" is for someone you know, and the other two are casual greetings.',
          },
          {
            q: 'What is wrong with "Poštovani, molim te da mi pošalješ ponudu. S poštovanjem, Ivan"?',
            options: [
              'Nothing is wrong',
              'The V-form is required throughout: molim Vas da mi pošaljete',
              '"Poštovani" should be "Dragi"',
              '"S poštovanjem" should be "Pozdrav"',
            ],
            correct: 1,
            explanation:
              'The opener and closer are formal but the middle slips into "ti". Formal correspondence keeps the V-form from the first word to the last.',
          },
          {
            q: 'Which closer belongs in a letter to a ministry?',
            options: ['Pozdrav,', 'Lijep pozdrav,', 'S poštovanjem,', 'Vidimo se,'],
            correct: 2,
            explanation:
              '"S poštovanjem" is Yours sincerely and suits an institution. "Lijep pozdrav" is for ordinary professional email, and the other two are casual.',
          },
          {
            q: 'Which closer is the default in ordinary professional email?',
            options: ['S poštovanjem,', 'Lijep pozdrav,', 'Zbogom,', 'Poštovani,'],
            correct: 1,
            explanation:
              '"Lijep pozdrav" is what Croatians overwhelmingly use in day-to-day professional email. "Poštovani" is an opener, not a closer.',
          },
          {
            q: 'What does "Stojim Vam na raspolaganju" mean?',
            options: [
              'I remain at your disposal',
              'I am waiting for your reply',
              'I am standing in your office',
              'I am returning your call',
            ],
            correct: 0,
            explanation:
              'It is the fixed phrase for I am available to you — offering further help before the close.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Formal Correspondence — Key Takeaways',
        points: [
          'Poštovani / Poštovana opens; the comma and a new line follow',
          'Obraćam vam se u vezi… / U prilogu šaljem… / Unaprijed hvala.',
          'V-form throughout, and traditionally capitalised: Molim Vas',
          'S poštovanjem for institutions; Lijep pozdrav for ordinary email',
          'Going straight in with no greeting reads as rude in Croatian',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Giving a Presentation
  // ─────────────────────────────────────────────────────────
  {
    id: 'presentations',
    title: 'Giving a Presentation',
    subtitle: 'Structuring a talk and handling the questions after it',
    icon: '🎤',
    level: 'B2',
    duration: '~5 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Speaking to a Room',
        body: 'A presentation is the most predictable kind of extended speech there is: the audience knows the shape in advance, so signposting matters more than vocabulary. Get the frame right and a modest command of the language sounds organised and competent.',
        icon: '🎤',
      },
      {
        type: 'table',
        title: 'Opening',
        headers: ['Croatian', 'English'],
        rows: [
          ['Dobar dan svima.', 'Good afternoon everyone.'],
          ['Hvala što ste došli.', 'Thank you for coming.'],
          ['Danas bih vam želio predstaviti…', 'Today I would like to present…'],
          ['Tema mog izlaganja je…', 'The topic of my talk is…'],
          ['Podijelio sam izlaganje u tri dijela.', 'I have divided the talk into three parts.'],
        ],
      },
      {
        type: 'rule',
        title: 'Signpost Before Every Turn',
        body: 'Croatian audiences expect explicit navigation: Prvo ću govoriti o… Zatim ću objasniti… Na kraju ću… Prelazim na sljedeću točku. Vratimo se na trenutak… Each of these tells the room where they are, and they cost nothing to learn because they are all built on verbs you already have.',
        highlight: 'Prelazim na sljedeću točku.',
      },
      {
        type: 'table',
        title: 'Referring to What Is on Screen',
        headers: ['Croatian', 'English'],
        rows: [
          ['Kao što vidite na slajdu…', 'As you can see on the slide…'],
          ['Ovaj grafikon pokazuje…', 'This chart shows…'],
          ['Obratite pozornost na…', 'Note in particular…'],
          ['Brojke govore same za sebe.', 'The figures speak for themselves.'],
          ['Ukratko, …', 'In short, …'],
        ],
      },
      {
        type: 'rule',
        title: 'Closing and Inviting Questions',
        body: 'The close is near-formulaic: Time zaključujem izlaganje. Hvala na pažnji. Ako imate pitanja, rado ću odgovoriti. "Hvala na pažnji" — thank you for your attention — is the fixed phrase, and leaving it out is noticeable in a way it would not be in English.',
        highlight: 'Hvala na pažnji.',
      },
      {
        type: 'rule',
        title: 'Handling a Question You Cannot Answer',
        body: 'Worth rehearsing, because it is where composure shows. To je dobro pitanje. (Buys a moment.) Nisam siguran, ali mogu provjeriti. Vratit ću vam se s odgovorom. Ako sam dobro razumio, pitate… — that last one both checks and buys time, and it is the single most useful sentence in the room.',
        highlight: 'Ako sam dobro razumio, pitate…',
      },
      {
        type: 'example',
        title: 'A Talk in Miniature',
        items: [
          {
            hr: 'Danas bih vam želio predstaviti rezultate istraživanja.',
            en: 'Today I would like to present the results of the research.',
            note: 'conditional — the polite opener',
          },
          {
            hr: 'Prvo ću objasniti metodu, a zatim rezultate.',
            en: 'First I will explain the method, and then the results.',
            note: 'a for side-by-side sequencing',
          },
          {
            hr: 'Kao što vidite, brojke su porasle.',
            en: 'As you can see, the figures have risen.',
            note: 'porasti — perfective',
          },
          {
            hr: 'Time zaključujem. Hvala na pažnji.',
            en: 'That concludes my talk. Thank you for your attention.',
            note: 'the fixed close',
          },
          {
            hr: 'Ako sam dobro razumio, pitate o troškovima?',
            en: 'If I understood correctly, you are asking about the costs?',
            note: 'checks understanding and buys a moment',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Podijelila sam izlaganje u tri dijela: prošlost, sadašnjost i planove.',
            en: 'I have divided the talk into three parts: the past, the present and the plans.',
            note: 'the structure announced up front',
          },
          {
            hr: 'Prelazim na sljedeću točku, a to su troškovi prijevoza.',
            en: 'I am moving on to the next point, which is transport costs.',
            note: 'the signpost, then the topic',
          },
          {
            hr: 'Obratite pozornost na ovaj grafikon: prodaja ljeti raste, a zimi pada.',
            en: 'Note this chart in particular: sales rise in summer and fall in winter.',
            note: 'pointing the room at the screen',
          },
          {
            hr: 'Vratimo se na trenutak na brojke iz prošle godine.',
            en: "Let us return for a moment to last year's figures.",
            note: 'vratimo se — a first-person plural imperative',
          },
          {
            hr: 'To je dobro pitanje; nisam siguran, ali provjerit ću i javiti Vam se.',
            en: 'That is a good question; I am not sure, but I will check and get back to you.',
            note: 'buying a moment, then promising a follow-up',
          },
          {
            hr: 'Ako imate pitanja, rado ću odgovoriti nakon izlaganja.',
            en: 'If you have questions, I will gladly answer them after the talk.',
            note: 'inviting questions',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How does a Croatian presentation conventionally end?',
        options: ['Doviđenja.', 'Hvala na pažnji.', 'To je sve.', 'Zbogom.'],
        correct: 1,
        explanation:
          '"Hvala na pažnji" is the fixed closing phrase, and omitting it is noticeable. The others are goodbyes rather than a conclusion to a talk.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You need a moment to think about a question. Which helps most?',
        options: [
          'Ne znam.',
          'Ako sam dobro razumio, pitate…',
          'Sljedeće pitanje.',
          'To nije važno.',
        ],
        correct: 1,
        explanation:
          'Rephrasing the question checks that you understood it AND buys thinking time, which is why it is the most useful sentence in the room.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is the missing signpost: jumping from one section to the next with nothing but a pause, where a Croatian audience expects Prelazim na sljedeću točku. The second is a bare English-shaped close, "To je sve", which sounds like running out of things to say — the fixed close is Hvala na pažnji, with the locative after na, not "hvala na pažnja". The third is answering a hard question with "Ne znam" and stopping — rephrase it first: Ako sam dobro razumio, pitate…, then Vratit ću vam se s odgovorom.',
        highlight: 'Prelazim na sljedeću točku',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Hvala na ___." (Thank you for your attention.)',
            options: ['pažnja', 'pažnju', 'pažnji', 'pažnjom'],
            correct: 2,
            explanation:
              '"Hvala na" takes the locative: hvala na pažnji. It is the fixed close, and the case is part of the fixed phrase.',
          },
          {
            q: 'Complete: "Danas bih vam ___ predstaviti naš novi projekt." (Today I would like to present our new project to you.)',
            options: ['želim', 'želio', 'htio bih', 'želiti'],
            correct: 1,
            explanation:
              'The conditional is bih plus the participle: bih želio. "Htio bih" would double the auxiliary, and the present and infinitive do not fit after bih.',
          },
          {
            q: 'Which sentence signposts a transition?',
            options: [
              'Hvala što ste došli.',
              'Prelazim na sljedeću točku.',
              'Brojke govore same za sebe.',
              'To je dobro pitanje.',
            ],
            correct: 1,
            explanation:
              '"Prelazim na sljedeću točku" tells the room you are moving on. The others open, comment on data, and handle a question.',
          },
          {
            q: 'What is wrong with "Kao što vidite na slajd, prodaja raste"?',
            options: [
              'Nothing is wrong',
              '"na" takes the locative here: na slajdu',
              '"vidite" should be "vidiš"',
              '"prodaja" should be "prodaju"',
            ],
            correct: 1,
            explanation:
              'Position on the slide is na plus the locative: na slajdu. The V-form "vidite" is right for an audience, and "prodaja" is the subject.',
          },
          {
            q: 'A listener asks something you cannot answer. What is the best first move?',
            options: [
              'Sljedeće pitanje.',
              'To nije moja tema.',
              'Ako sam dobro razumio, pitate o…',
              'Ne znam, žao mi je.',
            ],
            correct: 2,
            explanation:
              'Rephrasing the question checks you understood it and buys thinking time, and it keeps your composure. Then you can promise to follow up.',
          },
          {
            q: 'What does "Podijelio sam izlaganje u tri dijela" mean?',
            options: [
              'I shared the talk with three people',
              'I have divided the talk into three parts',
              'I have three slides',
              'I will speak for three minutes',
            ],
            correct: 1,
            explanation:
              '"Podijeliti u" plus the accusative is to divide into. It is the standard sentence for announcing a talk\'s structure.',
          },
          {
            q: 'Which phrase points the audience at a figure on screen?',
            options: [
              'Obratite pozornost na…',
              'Tema mog izlaganja je…',
              'Ukratko…',
              'Vratit ću vam se s odgovorom.',
            ],
            correct: 0,
            explanation:
              '"Obratite pozornost na" plus the accusative directs attention. The others announce the topic, compress, and promise an answer.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Presentations — Key Takeaways',
        points: [
          'Danas bih vam želio predstaviti… — the conditional opener',
          'Signpost every turn: Prvo… Zatim… Na kraju… Prelazim na…',
          'Kao što vidite… / Ovaj grafikon pokazuje…',
          'Hvala na pažnji is the fixed close and is expected',
          'Ako sam dobro razumio, pitate… checks and buys time at once',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Meetings and Negotiation
  // ─────────────────────────────────────────────────────────
  {
    id: 'meetings-negotiation',
    title: 'Meetings and Negotiation',
    subtitle: 'Taking a turn, pushing back, and reaching agreement',
    icon: '🤝',
    level: 'B2',
    duration: '~5 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Getting a Word In',
        body: 'A meeting is harder than a presentation because you cannot plan your turns. What you can plan is the machinery: how to interrupt without being rude, how to disagree without a row, and how to make a proposal that leaves room to move. All three are phrase-level, and all three are learnable in advance.',
        icon: '🤝',
      },
      {
        type: 'table',
        title: 'Taking a Turn',
        headers: ['Croatian', 'English'],
        rows: [
          ['Mogu li nešto dodati?', 'May I add something?'],
          ['Samo kratko…', 'Just briefly…'],
          ['Oprostite što prekidam, ali…', 'Sorry to interrupt, but…'],
          ['Htio bih se nadovezati na to.', 'I would like to build on that.'],
          ['Ako smijem…', 'If I may…'],
        ],
      },
      {
        type: 'rule',
        title: 'Nadovezati Se — Building On',
        body: '"Nadovezati se na" plus the accusative means to pick up on what someone just said and continue it. Htio bih se nadovezati na Aninu točku. It is the polite way into a conversation because it credits the previous speaker before adding your own view — and it is what a Croatian colleague will use rather than simply starting to talk.',
        highlight: 'nadovezati se na…',
      },
      {
        type: 'table',
        title: 'Proposing and Responding',
        headers: ['Croatian', 'English'],
        rows: [
          ['Predlažem da…', 'I propose that…'],
          ['Što mislite o tome da…?', 'What do you think about…?'],
          ['Mogli bismo…', 'We could…'],
          ['Slažem se u načelu, ali…', 'I agree in principle, but…'],
          ['Nisam siguran da je to najbolje rješenje.', 'I am not sure that is the best solution.'],
          ['Možemo li naći kompromis?', 'Can we find a compromise?'],
        ],
      },
      {
        type: 'rule',
        title: 'Predlažem Da Takes the Present',
        body: '"Predlažem da" is followed by a clause in the present, not a conditional: Predlažem da odgodimo odluku. Predlažem da razgovaramo sutra. The subject changes — I propose, we postpone — so this is the compulsory "da" from B1, and the verb stays present even though the action is future.',
        highlight: 'Predlažem da odgodimo odluku.',
      },
      {
        type: 'rule',
        title: 'Disagreeing Without a Row',
        body: 'Concede first, then qualify — the concession lesson applied to a room. Slažem se u načelu, ali… Razumijem, međutim… To je dobra ideja, no pitanje je… A bare "Ne slažem se" is heard as much sharper in a Croatian meeting than "I disagree" is in an English one, and the softened forms are not politeness theatre — they keep the discussion open.',
        highlight: 'Slažem se u načelu, ali…',
      },
      {
        type: 'rule',
        title: 'Closing the Loop',
        body: 'Meetings end on agreements, and Croatian marks them explicitly: Dogovoreno. (Agreed.) Znači, ostajemo pri tome. (So, we are sticking with that.) Tko preuzima to? (Who is taking that on?) Vraćamo se na to sljedeći put. Saying one of these aloud is what turns a discussion into a decision.',
        highlight: 'Dogovoreno.',
      },
      {
        type: 'example',
        title: 'In the Room',
        items: [
          {
            hr: 'Oprostite što prekidam, ali imam pitanje.',
            en: 'Sorry to interrupt, but I have a question.',
            note: 'the standard interruption',
          },
          {
            hr: 'Predlažem da o tome odlučimo sljedeći tjedan.',
            en: 'I propose we decide on that next week.',
            note: 'predlažem da + present',
          },
          {
            hr: 'Slažem se u načelu, ali brine me rok.',
            en: 'I agree in principle, but the deadline worries me.',
            note: 'brinuti — the thing is the subject',
          },
          {
            hr: 'Mogli bismo probati drugi pristup.',
            en: 'We could try a different approach.',
            note: 'conditional — a proposal, not a demand',
          },
          {
            hr: 'Dogovoreno. Tko preuzima to?',
            en: 'Agreed. Who is taking that on?',
            note: 'closing the loop explicitly',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ako smijem, htio bih se nadovezati na ono što je Marko rekao.',
            en: 'If I may, I would like to build on what Marko said.',
            note: 'ako smijem, then nadovezati se na + accusative',
          },
          {
            hr: 'Predlažem da sastanak pomaknemo na četvrtak ujutro.',
            en: 'I propose we move the meeting to Thursday morning.',
            note: 'predlažem da + present',
          },
          {
            hr: 'Razumijem vaš stav, međutim troškovi su previsoki za ovaj proračun.',
            en: 'I understand your position, however the costs are too high for this budget.',
            note: 'concede, then međutim',
          },
          {
            hr: 'Što mislite o tome da prvo razgovaramo s dobavljačem iz Rijeke?',
            en: 'What do you think about talking to the supplier from Rijeka first?',
            note: 'što mislite o tome da + present',
          },
          {
            hr: 'Nisam siguran da je to najbolje rješenje, ali možemo naći kompromis.',
            en: 'I am not sure that is the best solution, but we can find a compromise.',
            note: 'soft disagreement, then an opening',
          },
          {
            hr: 'Znači, ostajemo pri dogovoru i vraćamo se na to sljedeći mjesec.',
            en: 'So, we are sticking with the agreement and coming back to it next month.',
            note: 'closing the loop: ostati pri + locative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Predlažem da ___ sutra." (I propose we talk tomorrow.)',
        options: ['razgovarati', 'razgovaramo', 'bismo razgovarali', 'razgovarali'],
        correct: 1,
        explanation:
          'The subject changes — I propose, we talk — so a clause with "da" and a present-tense verb is required: predlažem da razgovaramo.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the polite way to add to what someone just said?',
        options: [
          'Ne slažem se.',
          'Htio bih se nadovezati na to.',
          'To nije točno.',
          'Sljedeća točka.',
        ],
        correct: 1,
        explanation:
          '"Nadovezati se na" credits the previous speaker before adding your own view, which is the expected way into a Croatian discussion.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is a conditional or a future after predlažem: "Predlažem da bismo odgodili odluku", "Predlažem da ćemo odgoditi" — the clause takes the present, Predlažem da odgodimo odluku. The second is a bare "Ne slažem se", which lands far harder in a Croatian meeting than "I disagree" does in English — concede first: Slažem se u načelu, ali…. The third is the case after nadovezati se: "nadovezati se na tome" — it takes the accusative, nadovezati se na to.',
        highlight: 'Predlažem da odgodimo odluku',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Predlažem da ___ pauzu." (I propose we take a break.)',
            options: ['napraviti', 'napravimo', 'bismo napravili', 'ćemo napraviti'],
            correct: 1,
            explanation:
              '"Predlažem da" is followed by a present-tense verb: da napravimo. The conditional and the future do not belong inside this clause, and an infinitive cannot follow da.',
          },
          {
            q: 'Complete: "Htio bih se nadovezati na ___." (I would like to build on that.)',
            options: ['tome', 'to', 'toga', 'tim'],
            correct: 1,
            explanation:
              '"Nadovezati se na" takes the accusative: na to. "Tome" is the locative or dative and "toga" the genitive.',
          },
          {
            q: 'Which is the softest way to disagree?',
            options: [
              'Ne slažem se.',
              'To nije točno.',
              'Slažem se u načelu, ali imam jednu primjedbu.',
              'Griješite.',
            ],
            correct: 2,
            explanation:
              'Conceding first — slažem se u načelu — keeps the discussion open. The other three are heard as sharp in a Croatian meeting.',
          },
          {
            q: 'What is wrong with "Oprostite što prekidam, ali predlažem da ćemo odgoditi sastanak"?',
            options: [
              'Nothing is wrong',
              '"da" plus the future is wrong; predlažem da takes the present: da odgodimo',
              '"prekidam" should be "prekinem"',
              '"sastanak" should be "sastanka"',
            ],
            correct: 1,
            explanation:
              'The verb inside the da-clause stays present even though the action is future: predlažem da odgodimo sastanak. The interruption phrase itself is correct.',
          },
          {
            q: 'Which phrase closes the loop on a decision?',
            options: [
              'Mogu li nešto dodati?',
              'Što mislite o tome da…?',
              'Dogovoreno. Tko preuzima to?',
              'Samo kratko…',
            ],
            correct: 2,
            explanation:
              '"Dogovoreno" marks the agreement and "tko preuzima to" assigns it — that is what turns a discussion into a decision. The others take a turn or propose.',
          },
          {
            q: 'What does "Ostajemo pri tome" mean?',
            options: [
              'We are leaving now',
              'We are against that',
              'We are starting over',
              'We are sticking with that',
            ],
            correct: 3,
            explanation:
              '"Ostati pri" plus the locative is to stick with a position or decision. It is one of the explicit closing phrases.',
          },
          {
            q: 'You want to interrupt politely. Which fits?',
            options: ['Oprostite što prekidam, ali…', 'Čekaj!', 'Tiho, molim.', 'Nije važno.'],
            correct: 0,
            explanation:
              '"Oprostite što prekidam, ali…" apologises for the interruption before making it. The other three are abrupt or dismissive.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Meetings — Key Takeaways',
        points: [
          'Mogu li nešto dodati? / Oprostite što prekidam, ali…',
          'nadovezati se na + accusative — building on what was said',
          'Predlažem da + present, because the subject changes',
          'Concede before disagreeing: Slažem se u načelu, ali…',
          'Close explicitly: Dogovoreno. Tko preuzima to?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Conversational Fluency
  // ─────────────────────────────────────────────────────────
  {
    id: 'small-talk-fluency',
    title: 'Conversational Fluency',
    subtitle: 'Fillers, turn-taking, and buying yourself a second',
    icon: '💬',
    level: 'B2',
    duration: '~5 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'What Fluency Actually Sounds Like',
        body: 'Fluent speakers are not faster or more accurate — they hesitate in the target language rather than in silence, and they signal what they are about to do before doing it. Croatian has its own set of these noises and phrases, and swapping English "um" for Croatian "pa" changes how you sound more than any amount of extra vocabulary.',
        icon: '💬',
      },
      {
        type: 'table',
        title: 'The Fillers',
        headers: ['Croatian', 'What it does'],
        rows: [
          ['pa…', 'well… — the default opener'],
          ['ovaj…', 'um… — pure hesitation'],
          ['znaš…', 'you know…'],
          ['zapravo', 'actually'],
          ['u biti', 'basically, in essence'],
          ['kako da kažem…', 'how shall I put it…'],
        ],
      },
      {
        type: 'rule',
        title: 'Pa Is the Most Useful Word Here',
        body: '"Pa" opens an answer that needs a moment: Pa, ovisi. Pa, ne bih rekao. It is roughly English "well", it carries no meaning of its own, and it is entirely unmarked — Croatians use it constantly. Starting an answer with it instead of a pause is the single quickest way to sound more fluent than you are.',
        highlight: 'Pa, ovisi…',
      },
      {
        type: 'table',
        title: 'Buying Time Honestly',
        headers: ['Croatian', 'English'],
        rows: [
          ['Kako se ono kaže…', 'What is the word for it…'],
          ['Ne mogu se sjetiti riječi.', 'I cannot remember the word.'],
          ['Kako bih to rekao…', 'How would I put this…'],
          ['Da razmislim.', 'Let me think.'],
          ['Nešto kao…', 'Something like…'],
          ['Ne znam kako se to kaže na hrvatskom.', 'I do not know how to say it in Croatian.'],
        ],
      },
      {
        type: 'rule',
        title: 'Repair Out Loud',
        body: 'When a word will not come, saying so in Croatian keeps you inside the conversation; switching to English or falling silent ends it. Kako se ono kaže… ono za rezanje kruha? A native speaker will supply the word and the exchange continues — which is exactly what a B2 conversation is supposed to look like.',
        highlight: 'Kako se ono kaže…',
      },
      {
        type: 'table',
        title: 'Keeping the Other Person In',
        headers: ['Croatian', 'English'],
        rows: [
          ['Stvarno?', 'Really?'],
          ['Ma nemoj!', 'You do not say!'],
          ['Kako to misliš?', 'What do you mean?'],
          ['I onda?', 'And then?'],
          ['Slažem se.', 'I agree.'],
          ['Jasno.', 'Right, I see.'],
        ],
      },
      {
        type: 'rule',
        title: 'Silence Reads as Disagreement',
        body: 'In Croatian conversation the listener is expected to make noise — short reactions every few sentences. An English speaker\'s attentive silence can read as scepticism or boredom rather than politeness. "Aha", "jasno", "stvarno" and "da, da" cost nothing and do a great deal of work.',
        highlight: 'aha · jasno · da, da',
      },
      {
        type: 'example',
        title: 'A Fluent-Sounding Exchange',
        items: [
          {
            hr: 'Pa, kako da kažem… nije baš jednostavno.',
            en: 'Well, how shall I put it… it is not exactly simple.',
            note: 'two fillers, no silence',
          },
          {
            hr: 'Zapravo, u biti se slažem s tobom.',
            en: 'Actually, basically I agree with you.',
            note: 'zapravo signals a correction to yourself',
          },
          {
            hr: 'Kako se ono kaže… ono za otvaranje boca?',
            en: 'What is the word… the thing for opening bottles?',
            note: 'describing round a missing word',
          },
          {
            hr: 'Ma nemoj! I što je onda rekao?',
            en: 'You do not say! And what did he say then?',
            note: 'reacting and pushing the story on',
          },
          {
            hr: 'Da razmislim na trenutak.',
            en: 'Let me think for a moment.',
            note: 'buying time openly',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Pa, ovisi o vremenu; ako bude sunčano, idemo na Jarun.',
            en: 'Well, it depends on the weather; if it is sunny, we are going to Jarun.',
            note: 'pa opens an answer that needs a moment',
          },
          {
            hr: 'Ovaj… kako bih to rekao… posao je u redu, ali plaća nije.',
            en: 'Um… how would I put it… the job is fine, but the pay is not.',
            note: 'two hesitations, in Croatian',
          },
          {
            hr: 'Ne mogu se sjetiti riječi, nešto kao mala trgovina na uglu.',
            en: 'I cannot remember the word, something like a little shop on the corner.',
            note: 'describing round a missing word',
          },
          {
            hr: 'Stvarno? Pa kako to misliš, nisi znao da se sele u Osijek?',
            en: 'Really? What do you mean, you did not know they are moving to Osijek?',
            note: 'reacting and asking for more',
          },
          {
            hr: 'Jasno, jasno… i onda, što je konobar rekao?',
            en: 'Right, right… and then, what did the waiter say?',
            note: 'listener noise, then pushing the story on',
          },
          {
            hr: 'Znaš, u biti mi se sviđa život u malom mjestu.',
            en: 'You know, basically I like life in a small town.',
            note: 'znaš and u biti as softeners',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which Croatian word does the job of English "well…" at the start of an answer?',
        options: ['pa', 'ali', 'ipak', 'jer'],
        correct: 0,
        explanation:
          '"Pa" is the unmarked opener that buys a moment without meaning anything. The others are all connectors with real meanings — but, nevertheless and because.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You cannot remember a word. What keeps the conversation going?',
        options: [
          'Falling silent.',
          'Switching to English.',
          'Kako se ono kaže…',
          'Changing the subject.',
        ],
        correct: 2,
        explanation:
          'Saying so in Croatian keeps you inside the conversation, and a native speaker will usually supply the word. Silence and switching languages both end the exchange.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is hesitating in English — an "um" or "like" in the middle of a Croatian sentence pulls the listener out of it; the sounds are pa and ovaj. The second is answering a question with dead silence while you search for a word; say Kako se ono kaže… and describe around it, and the word will be supplied. The third is listening in silence: without aha, jasno or da, da every few sentences a Croatian speaker starts to think you disagree, and a Stvarno? or Ma nemoj! in the right place does more for how fluent you sound than any grammar point.',
        highlight: 'Kako se ono kaže…',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ , ovisi o tome kad završim posao." (Well, it depends on when I finish work.)',
            options: ['Ali', 'Pa', 'Jer', 'Ipak'],
            correct: 1,
            explanation:
              '"Pa" is the unmarked opener that buys a moment. The other three are connectors with real meanings and would make the answer sound like a contradiction or a reason.',
          },
          {
            q: 'Complete: "Kako se ono ___ … ono za rezanje kruha?" (What is the word… the thing for cutting bread?)',
            options: ['kaže', 'kažem', 'reći', 'kažeš'],
            correct: 0,
            explanation:
              'The fixed phrase is impersonal: kako se ono kaže — how is it said. "Kažem" and "kažeš" put a person into a phrase that has none.',
          },
          {
            q: 'You have forgotten a word. Which reply keeps the conversation going?',
            options: [
              'Ne znam.',
              'Kako se ono kaže… ono crveno voće, malo?',
              'Sorry, what is the word?',
              'Nema veze.',
            ],
            correct: 1,
            explanation:
              'Saying so in Croatian and describing around the word keeps you inside the exchange; a native speaker will supply it. Silence, English and dropping the topic all end it.',
          },
          {
            q: 'Your friend tells a long story and you listen in complete, attentive silence. What went wrong?',
            options: [
              'Nothing — silence is polite',
              'You should interrupt with "Ne slažem se"',
              'Silence reads as scepticism; react with aha, jasno, stvarno',
              'You should switch to English',
            ],
            correct: 2,
            explanation:
              'A Croatian listener is expected to make noise every few sentences. Attentive silence, polite in English, reads as doubt or boredom.',
          },
          {
            q: 'What does "zapravo" signal?',
            options: [
              'a correction or refinement — actually',
              'strong agreement',
              'a question',
              'a farewell',
            ],
            correct: 0,
            explanation:
              '"Zapravo" — actually — marks that you are adjusting what was just said, often your own words: Zapravo, u biti se slažem.',
          },
          {
            q: '"Ma nemoj!" as a reaction means:',
            options: [
              'Do not do that!',
              'You do not say! (surprise)',
              'Stop talking',
              'I do not agree',
            ],
            correct: 1,
            explanation:
              'Literally "do not", but as a listener reaction it is surprise and encouragement to go on. It keeps the speaker talking.',
          },
          {
            q: 'Which asks the speaker to explain what they meant?',
            options: ['I onda?', 'Slažem se.', 'Jasno.', 'Kako to misliš?'],
            correct: 3,
            explanation:
              '"Kako to misliš?" is what do you mean. "I onda?" pushes the story forward, and the other two signal agreement and understanding.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Fluency — Key Takeaways',
        points: [
          'pa, ovaj, zapravo, u biti — hesitate in Croatian, not in silence',
          'Pa is the default answer-opener and is entirely unmarked',
          'Kako se ono kaže… keeps you in the conversation when a word will not come',
          'React constantly: stvarno, jasno, aha, ma nemoj',
          'Attentive silence reads as scepticism, not politeness',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Humour, Irony and Tone
  // ─────────────────────────────────────────────────────────
  {
    id: 'humour-irony',
    title: 'Humour, Irony and Tone',
    subtitle: 'Hearing when a Croatian does not mean it literally',
    icon: '🙃',
    level: 'B2',
    duration: '~5 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'The Last Thing to Arrive',
        body: 'Irony is usually the final thing a learner hears, and missing it is worse than missing vocabulary — you can look up a word, but you cannot look up the fact that somebody meant the opposite. Croatian irony has specific markers, and knowing them turns a confusing conversation into a funny one.',
        icon: '🙃',
      },
      {
        type: 'rule',
        title: 'Ma — the Dismissal Particle',
        body: '"Ma" at the front of a sentence dismisses what came before. Ma daj! (Oh come on!) Ma nije valjda. (Surely not.) Ma kakvi! (No way, nothing of the sort.) Ma pusti. (Forget it.) It has no dictionary meaning worth speaking of and it changes the temperature of everything after it — usually towards affectionate scepticism.',
        highlight: 'Ma daj! · Ma kakvi!',
      },
      {
        type: 'table',
        title: 'Said, and Meant',
        headers: ['Croatian', 'Literally', 'Actually'],
        rows: [
          ['Baš ti hvala.', 'Thanks a lot.', 'often sarcastic'],
          ['Super, samo to mi je trebalo.', 'Great, just what I needed.', 'the opposite'],
          ['Ma kakvi!', 'What kind!', 'no way, nonsense'],
          ['Nema veze.', 'No connection.', 'never mind, it does not matter'],
          ['Ma pusti.', 'Let it go.', 'forget about it'],
          ['Dobro, dobro.', 'Fine, fine.', 'all right, enough'],
        ],
      },
      {
        type: 'rule',
        title: 'Understatement Is the House Style',
        body: 'Croatian, especially on the coast, favours understatement in both directions. "Nije loše" (not bad) about something excellent is high praise. "Moglo bi biti gore" (could be worse) is a genuinely positive report. Taking these literally will make you think people are unimpressed when they are not.',
        highlight: 'Nije loše. = it is very good',
      },
      {
        type: 'rule',
        title: 'Fjaka Is Not Laziness',
        body: 'A Dalmatian word with no English equivalent: "fjaka" is the pleasant, sun-induced state of wanting to do absolutely nothing, and it is regarded as a legitimate condition rather than a failing. Uhvatila me fjaka. Claiming it is a joke and half a defence, and understanding it tells a Croatian you have spent real time on the coast.',
        highlight: 'Uhvatila me fjaka.',
      },
      {
        type: 'rule',
        title: 'Self-Deprecation Invites Contradiction',
        body: 'When someone dismisses their own cooking, house or Croatian, the expected move is to disagree warmly rather than to accept the assessment. "Nije to ništa posebno" about a large dinner is not a request for agreement. Answering "da, u redu je" where a Croatian would say "ma odlično je!" reads as cold.',
        highlight: 'Ma odlično je!',
      },
      {
        type: 'example',
        title: 'Reading the Tone',
        items: [
          {
            hr: 'Ma daj, ne mogu vjerovati!',
            en: 'Oh come on, I cannot believe it!',
            note: 'ma sets the temperature',
          },
          {
            hr: 'Nije loše. Zapravo, jako dobro.',
            en: 'Not bad. Actually, very good.',
            note: 'understatement, then the correction',
          },
          {
            hr: 'Super, baš mi je to trebalo.',
            en: 'Great, just what I needed.',
            note: 'tone decides whether this is sarcasm',
          },
          {
            hr: 'Ma kakvi, nema šanse.',
            en: 'No way, not a chance.',
            note: 'two dismissals stacked',
          },
          {
            hr: 'Nema veze, riješit ćemo.',
            en: 'Never mind, we will sort it out.',
            note: 'nema veze — reassurance, not indifference',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ma pusti, nije to ništa, samo mi je auto ostao bez goriva na autocesti.',
            en: 'Oh forget it, it is nothing, my car just ran out of fuel on the motorway.',
            note: 'ma pusti plus understatement of a real problem',
          },
          {
            hr: 'Baš ti hvala što si mi rekao da pada kiša tek kad sam pokisnuo.',
            en: 'Thanks a lot for telling me it was raining only once I got soaked.',
            note: 'baš ti hvala — sarcastic',
          },
          {
            hr: 'Moglo bi biti gore: prodali smo sve karte, a stadion je bio pun.',
            en: 'Could be worse: we sold all the tickets and the stadium was full.',
            note: 'a genuinely positive report, understated',
          },
          {
            hr: 'Ma nije valjda da ste opet zaboravili ključeve u Rijeci?',
            en: 'Surely you have not forgotten the keys in Rijeka again?',
            note: 'ma nije valjda — affectionate disbelief',
          },
          {
            hr: 'Nije to ništa posebno, samo sam ispekla tri kolača za goste.',
            en: 'It is nothing special, I only baked three cakes for the guests.',
            note: 'self-deprecation inviting contradiction',
          },
          {
            hr: 'Ma odlično je! Baka bi bila ponosna na ovu juhu.',
            en: 'It is excellent! Grandma would be proud of this soup.',
            note: 'the expected warm contradiction',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A Croatian tastes your cooking and says "Nije loše." What does that mean?',
        options: [
          'It is mediocre.',
          'It is genuinely very good.',
          'It is inedible.',
          'They did not taste it.',
        ],
        correct: 1,
        explanation:
          'Understatement is the house style, and "nije loše" about food is warm praise. Reading it as lukewarm is one of the commonest misreadings a learner makes.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "Ma kakvi!" express?',
        options: ['a genuine question', 'strong dismissal', 'agreement', 'an apology'],
        correct: 1,
        explanation:
          '"Ma kakvi" dismisses what was just said — nothing of the sort, no way. The "ma" particle is doing the work, as it does in "ma daj" and "ma pusti".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is taking understatement literally: hearing "Nije loše" as lukewarm and looking disappointed, when it means Ma odlično je! and was meant warmly. The second is agreeing with self-deprecation — answering "Nije to ništa posebno" with "Da, u redu je" reads as cold; the expected reply contradicts it warmly. The third is reading "ma" as a word to translate: "Ma daj" is not "but give" — the particle sets the tone, and Ma kakvi! is a flat no.',
        highlight: 'Ma odlično je!',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ daj, ne vjerujem ti!" (Oh come on, I do not believe you!)',
            options: ['Pa', 'Ma', 'Ali', 'Ipak'],
            correct: 1,
            explanation:
              '"Ma" is the dismissal particle that sets the tone of "ma daj". "Pa" would open an answer, and the other two are connectors.',
          },
          {
            q: 'A host says "Nije to ništa posebno." You reply: "___ odlično je!"',
            options: ['Ma', 'Ne', 'Jer', 'Dok'],
            correct: 0,
            explanation:
              '"Ma odlično je!" is the warm contradiction self-deprecation expects. "Ne" would agree that it is not good, which is exactly the cold reading.',
          },
          {
            q: 'Which sentence is understatement meaning something is very good?',
            options: ['Nije loše.', 'Nije dobro.', 'Nema veze.', 'Ma pusti.'],
            correct: 0,
            explanation:
              '"Nije loše" — not bad — is high praise in the house style. "Nije dobro" is genuinely negative, and the other two mean never mind and forget it.',
          },
          {
            q: 'Your friend says "Nije to ništa posebno" about a big dinner and you answer "Da, u redu je." What went wrong?',
            options: [
              'Nothing — you agreed politely',
              'Self-deprecation expects warm contradiction: Ma odlično je!',
              'You should have said "Nema veze"',
              'You should have said "Ma kakvi"',
            ],
            correct: 1,
            explanation:
              'Dismissing your own cooking is a cue to be contradicted. Agreeing that it is merely all right reads as cold, not modest.',
          },
          {
            q: '"Super, samo to mi je trebalo." said after a flat tyre means:',
            options: [
              'genuine delight',
              'a question',
              'the opposite — sarcasm',
              'a request for help',
            ],
            correct: 2,
            explanation:
              'Great, just what I needed — said about a flat tyre — is sarcasm. Tone decides it, and the situation makes the tone obvious.',
          },
          {
            q: 'What does "Uhvatila me fjaka" mean?',
            options: [
              'I caught a cold',
              'I am very busy',
              'I missed the ferry',
              'I am in the pleasant sun-induced state of wanting to do nothing',
            ],
            correct: 3,
            explanation:
              '"Fjaka" is the Dalmatian condition of pleasant idleness, regarded as legitimate rather than lazy. Claiming it is half a joke and half a defence.',
          },
          {
            q: '"Nema veze." in reply to an apology means:',
            options: [
              'It does not matter — never mind',
              'There is no signal',
              'I am not related to you',
              'I disagree',
            ],
            correct: 0,
            explanation:
              'Literally "no connection", it means never mind, and it is reassurance rather than indifference.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Tone — Key Takeaways',
        points: [
          'Ma at the front of a sentence dismisses what came before',
          'Understatement is the house style: nije loše is high praise',
          'Nema veze is reassurance, not indifference',
          'fjaka is a legitimate coastal condition, not laziness',
          'Self-deprecation invites warm contradiction, not agreement',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Abstract Topics
  // ─────────────────────────────────────────────────────────
  {
    id: 'abstract-topics',
    title: 'Abstract Topics',
    subtitle: 'The vocabulary of ideas, society and values',
    icon: '🧠',
    level: 'B2',
    duration: '~5 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Talking About Things You Cannot Point At',
        body: 'B2 is where conversation stops being about what happened and starts being about what it means. That needs abstract nouns — and Croatian builds most of them from adjectives with a handful of suffixes, so this is far less memorisation than it first appears.',
        icon: '🧠',
      },
      {
        type: 'rule',
        title: 'The -ost Suffix Builds Most of Them',
        body: 'Take an adjective, add -ost, and you have the quality it names: siguran → sigurnost, odgovoran → odgovornost, sposoban → sposobnost, jednak → jednakost, moguć → mogućnost. All of them are feminine, and all of them belong to the i-declension you met earlier — which is why that lesson came first in this level.',
        highlight: 'siguran → sigurnost',
      },
      {
        type: 'table',
        title: 'Abstract Nouns You Will Need',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['sloboda', 'freedom', 'jednakost', 'equality'],
          ['pravda', 'justice', 'odgovornost', 'responsibility'],
          ['istina', 'truth', 'sigurnost', 'safety, security'],
          ['moć', 'power', 'mogućnost', 'possibility'],
          ['društvo', 'society', 'razvoj', 'development'],
          ['iskustvo', 'experience', 'promjena', 'change'],
        ],
      },
      {
        type: 'table',
        title: 'Verbs for Discussing',
        headers: ['Croatian', 'English'],
        rows: [
          ['smatrati', 'to consider, regard'],
          ['tvrditi', 'to claim, assert'],
          ['pretpostaviti', 'to assume'],
          ['zaključiti', 'to conclude'],
          ['razlikovati', 'to distinguish'],
          ['ovisiti o', 'to depend on'],
          ['odnositi se na', 'to relate to'],
        ],
      },
      {
        type: 'rule',
        title: 'Smatrati Takes Two Shapes',
        body: '"Smatram da je to važno" — I consider that this is important, with a da-clause. Or "Smatram to važnim" — I consider it important, with the thing in the accusative and the quality in the INSTRUMENTAL. The second is more compact and distinctly more formal, and it is worth recognising even before you produce it.',
        highlight: 'Smatram to važnim.',
      },
      {
        type: 'rule',
        title: 'Ovisiti O and Odnositi Se Na',
        body: 'Two verbs that carry a fixed preposition and case, and both come up constantly in abstract discussion. "Ovisiti o" plus the locative: To ovisi o okolnostima. "Odnositi se na" plus the accusative: To se odnosi na sve. Learning the verb without its preposition leaves you unable to use it, so they go together.',
        highlight: 'ovisiti o + locative · odnositi se na + accusative',
      },
      {
        type: 'example',
        title: 'Discussing Ideas',
        items: [
          {
            hr: 'Smatram da je sloboda govora temeljno pravo.',
            en: 'I consider freedom of speech a fundamental right.',
            note: 'sloboda govora — genitive after the noun',
          },
          {
            hr: 'To uvelike ovisi o okolnostima.',
            en: 'That depends greatly on the circumstances.',
            note: 'ovisiti o + locative',
          },
          {
            hr: 'Treba razlikovati uzrok od posljedice.',
            en: 'One should distinguish cause from consequence.',
            note: 'razlikovati … od + genitive',
          },
          {
            hr: 'Iz toga možemo zaključiti da je problem širi.',
            en: 'From that we can conclude the problem is broader.',
            note: 'iz + genitive; širi is a comparative',
          },
          {
            hr: 'Odgovornost je na svima nama.',
            en: 'The responsibility is on all of us.',
            note: 'na + locative: svima nama',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sigurnost na cestama ovisi o odgovornosti svakog vozača.',
            en: 'Road safety depends on the responsibility of every driver.',
            note: 'two -ost nouns; ovisiti o + locative',
          },
          {
            hr: 'Ovo se pravilo odnosi na sve zaposlenike, bez iznimke.',
            en: 'This rule applies to all employees, without exception.',
            note: 'odnositi se na + accusative',
          },
          {
            hr: 'Mnogi smatraju pravdu važnijom od slobode, a ja mislim suprotno.',
            en: 'Many consider justice more important than freedom, and I think the opposite.',
            note: 'smatrati + accusative + instrumental',
          },
          {
            hr: 'Tvrdi da promjene u društvu ne dolaze preko noći.',
            en: 'He claims that changes in society do not happen overnight.',
            note: 'tvrditi da + a clause',
          },
          {
            hr: 'Pretpostavljam da mogućnost dogovora još postoji.',
            en: 'I assume the possibility of an agreement still exists.',
            note: 'mogućnost — an i-declension feminine',
          },
          {
            hr: 'Iskustvo nas uči da jednakost pred zakonom nije samo riječ.',
            en: 'Experience teaches us that equality before the law is not just a word.',
            note: 'jednakost, from jednak',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which suffix builds an abstract noun from an adjective?',
        options: ['-ica', '-ost', '-nik', '-anje'],
        correct: 1,
        explanation:
          '"-ost" turns an adjective into the quality it names: siguran → sigurnost, odgovoran → odgovornost. All such nouns are feminine and belong to the i-declension.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "To ovisi ___ okolnostima."',
        options: ['na', 'o', 'za', 'iz'],
        correct: 1,
        explanation:
          '"Ovisiti" carries the preposition "o" plus the locative. The verb and its preposition have to be learned as one item, or the verb cannot be used at all.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is the wrong preposition or case on a fixed verb: "ovisi na tome", "ovisi u tome" — the verb is ovisiti o plus the locative, ovisi o tome; and "odnosi se o" — odnositi se na plus the accusative, odnosi se na sve. The second is treating an -ost noun as masculine because it ends in a consonant: "važan odgovornost", "velik mogućnost" — every -ost noun is feminine and declines like stvar: velika odgovornost, bez mogućnosti. The third is the accusative for the quality after smatrati: "Smatram to važno" — the compact shape puts the quality in the instrumental, Smatram to važnim.',
        highlight: 'ovisi o tome',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "To se pravilo odnosi ___ sve studente." (That rule applies to all students.)',
            options: ['o', 'na', 'za', 'prema'],
            correct: 1,
            explanation:
              '"Odnositi se" carries the preposition "na" plus the accusative: odnosi se na sve studente. "O" belongs to ovisiti.',
          },
          {
            q: 'Complete: "Smatram tu odluku ___." (I consider that decision wrong.)',
            options: ['pogrešna', 'pogrešnu', 'pogrešnom', 'pogrešne'],
            correct: 2,
            explanation:
              'In the compact shape the thing is accusative and the quality is INSTRUMENTAL: smatram tu odluku pogrešnom. The accusative "pogrešnu" is the common learner slip.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Uspjeh ovisi na mogućnostima.',
              'Uspjeh ovisi u mogućnostima.',
              'Uspjeh ovisi o mogućnostima.',
              'Uspjeh ovisi za mogućnosti.',
            ],
            correct: 2,
            explanation:
              '"Ovisiti" takes o plus the locative: ovisi o mogućnostima. The verb and its preposition are one item — learned together or not usable at all.',
          },
          {
            q: 'What is wrong with "To je velik odgovornost za mladog čovjeka"?',
            options: [
              'Nothing is wrong',
              '"odgovornost" is feminine: velika odgovornost',
              '"za" should take the genitive',
              '"mladog" should be "mladi"',
            ],
            correct: 1,
            explanation:
              'Every -ost noun is feminine, so the adjective agrees: velika odgovornost. "Za" plus the accusative "mladog čovjeka" is right as it stands.',
          },
          {
            q: 'Which suffix builds "sigurnost" from "siguran", and what is the result?',
            options: [
              '-ost, a feminine i-declension noun',
              '-ost, a masculine noun',
              '-ica, a feminine noun',
              '-nik, a masculine noun',
            ],
            correct: 0,
            explanation:
              '"-ost" turns an adjective into the quality it names, and every such noun is feminine and belongs to the i-declension — which is why that lesson came first.',
          },
          {
            q: 'Complete: "Nema ___ da se to promijeni." (There is no possibility that will change.)',
            options: ['mogućnost', 'mogućnosti', 'mogućnosta', 'mogućnostu'],
            correct: 1,
            explanation:
              '"Nema" takes the genitive, and an -ost noun forms it in -i: nema mogućnosti. The other two endings borrow from the wrong declensions.',
          },
          {
            q: '"tvrditi" against "pretpostaviti" — which is true?',
            options: [
              'Both mean to conclude',
              '"tvrditi" = to assume; "pretpostaviti" = to claim',
              'Both mean to distinguish',
              '"tvrditi" = to claim firmly; "pretpostaviti" = to assume',
            ],
            correct: 3,
            explanation:
              '"Tvrditi" asserts something as true; "pretpostaviti" takes it as a working assumption. Concluding is zaključiti and distinguishing razlikovati.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Abstract Topics — Key Takeaways',
        points: [
          '-ost builds most abstract nouns, and they are all i-declension feminines',
          'sloboda, pravda, istina, moć, društvo, odgovornost, mogućnost',
          'smatrati, tvrditi, pretpostaviti, zaključiti, razlikovati',
          'Smatram da je… or the more formal Smatram to važnim',
          'ovisiti O + locative · odnositi se NA + accusative',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Work and the Economy
  // ─────────────────────────────────────────────────────────
  {
    id: 'business-economy',
    title: 'Work and the Economy',
    subtitle: 'The vocabulary of business, money and the Croatian economy',
    icon: '📊',
    level: 'B2',
    duration: '~5 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Reading the Business Pages',
        body: 'A2 gave you the office; this is the economy around it. The vocabulary is heavily Latin-derived and therefore unusually easy for an English speaker — the work is in the collocations and in a few Croatian words that have no international twin.',
        icon: '📊',
      },
      {
        type: 'table',
        title: 'Business',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['tvrtka / poduzeće', 'company', 'ugovor', 'contract'],
          ['poduzetnik', 'entrepreneur', 'ponuda', 'offer, tender'],
          ['ulaganje', 'investment', 'potražnja', 'demand'],
          ['dobit', 'profit', 'ponuda i potražnja', 'supply and demand'],
          ['gubitak', 'loss', 'tržište', 'market'],
          ['porez', 'tax', 'plaća', 'salary'],
        ],
      },
      {
        type: 'rule',
        title: 'Dobit, Not Profit',
        body: '"Dobit" is profit and comes from "dobiti" — to get. Its opposite is "gubitak", from "gubiti" — to lose. Both are native formations rather than borrowings, and they are what a Croatian annual report uses. "Profit" is understood but reads as business jargon, in the way "revenue uplift" does in English.',
        highlight: 'dobit · gubitak',
      },
      {
        type: 'table',
        title: 'The Economy',
        headers: ['Croatian', 'English'],
        rows: [
          ['gospodarstvo', 'the economy'],
          ['gospodarski rast', 'economic growth'],
          ['nezaposlenost', 'unemployment'],
          ['inflacija', 'inflation'],
          ['turizam', 'tourism'],
          ['izvoz / uvoz', 'exports / imports'],
          ['proračun', 'budget'],
        ],
      },
      {
        type: 'rule',
        title: 'Gospodarstvo Is the Croatian Word',
        body: '"Gospodarstvo" is the economy, and it is what you will read in a newspaper or hear from a minister. "Ekonomija" exists but tends to mean economics as a discipline. This is the same native-versus-international split you saw with računalo and kompjuter, and the same rule applies: the native word belongs in writing.',
        highlight: 'gospodarstvo (the economy)',
      },
      {
        type: 'rule',
        title: 'Tourism Is Not a Sector, It Is the Sector',
        body: 'Worth knowing for any conversation about the Croatian economy: tourism accounts for around a fifth of national output, far more than in most European countries, and it is concentrated into a few summer weeks on the coast. "Sezona" without further qualification means the tourist season, and "kako je bila sezona?" is a question with real economic weight behind it.',
        highlight: 'Kako je bila sezona?',
      },
      {
        type: 'example',
        title: 'Reading and Discussing',
        items: [
          {
            hr: 'Gospodarstvo je poraslo za tri posto.',
            en: 'The economy grew by three percent.',
            note: 'za + accusative for the amount of change',
          },
          {
            hr: 'Nezaposlenost je pala na najnižu razinu.',
            en: 'Unemployment fell to its lowest level.',
            note: 'pasti na + accusative',
          },
          {
            hr: 'Tvrtka je ostvarila dobit od milijun eura.',
            en: 'The company made a profit of a million euros.',
            note: 'dobit od + genitive',
          },
          {
            hr: 'Turizam čini velik dio gospodarstva.',
            en: 'Tourism makes up a large part of the economy.',
            note: 'dio + genitive',
          },
          {
            hr: 'Potpisali smo ugovor na dvije godine.',
            en: 'We signed a two-year contract.',
            note: 'potpisati — pot- + pisati, from B1',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poduzetnici iz Istre ove godine očekuju veću potražnju za maslinovim uljem.',
            en: 'Entrepreneurs from Istria expect greater demand for olive oil this year.',
            note: 'potražnja za + instrumental',
          },
          {
            hr: 'Nakon dvije godine gubitka, poduzeće je konačno ostvarilo dobit.',
            en: 'After two years of loss, the company finally made a profit.',
            note: 'gubitak and dobit — the native pair',
          },
          {
            hr: 'Vlada je najavila niži porez na plaće od siječnja.',
            en: 'The Government announced a lower tax on salaries from January.',
            note: 'porez na + accusative',
          },
          {
            hr: 'Sezona je bila odlična, hoteli na Hvaru bili su puni do listopada.',
            en: 'The season was excellent, the hotels on Hvar were full until October.',
            note: 'sezona — the tourist season',
          },
          {
            hr: 'Izvoz u Njemačku raste, dok uvoz iz Kine pada.',
            en: 'Exports to Germany are rising, whereas imports from China are falling.',
            note: 'izvoz / uvoz with dok as contrast',
          },
          {
            hr: 'Inflacija je usporila gospodarski rast u cijeloj eurozoni.',
            en: 'Inflation has slowed economic growth across the whole eurozone.',
            note: 'gospodarski rast — the native adjective',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which word means "the economy" in a Croatian newspaper?',
        options: ['ekonomija', 'gospodarstvo', 'trgovina', 'proračun'],
        correct: 1,
        explanation:
          '"Gospodarstvo" is the native word and the one used in journalism and politics. "Ekonomija" tends to mean economics as a discipline, and "proračun" is the budget.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What is "dobit"?',
        options: ['a loss', 'a profit', 'a tax', 'a contract'],
        correct: 1,
        explanation:
          '"Dobit" is profit, from "dobiti" — to get. Its opposite is "gubitak", from "gubiti" — to lose. Both are native formations rather than borrowings.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is the international word where the newspaper uses the native one: "ekonomija je porasla" — the economy is gospodarstvo, gospodarstvo je poraslo, and ekonomija is the discipline. The second is the borrowed pair for the native one: "profit i gubici" reads as jargon — an annual report says dobit i gubitak. The third is the wrong preposition on a change: "porasla na tri posto" means rose TO three percent; a rise BY that amount is za tri posto.',
        highlight: 'gospodarstvo je poraslo',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Hrvatsko ___ raste sporije nego lani." (The Croatian economy is growing more slowly than last year.)',
            options: ['ekonomija', 'gospodarstvo', 'tržište', 'proračun'],
            correct: 1,
            explanation:
              '"Gospodarstvo" is the economy in journalism and politics, and the neuter "Hrvatsko" agrees with it. "Tržište" is the market and "proračun" the budget.',
          },
          {
            q: 'Complete: "Nezaposlenost je pala ___ pet posto." (Unemployment fell BY five percent.)',
            options: ['na', 'za', 'od', 'o'],
            correct: 1,
            explanation:
              'The amount of a change takes za plus the accusative: pala za pet posto. "Na pet posto" would mean it fell TO five percent.',
          },
          {
            q: 'Which is the native word for profit that an annual report uses?',
            options: ['profit', 'zarada', 'dobit', 'prihod'],
            correct: 2,
            explanation:
              '"Dobit", from dobiti, is the report word. "Zarada" is earnings, "prihod" is revenue, and "profit" is understood but reads as jargon.',
          },
          {
            q: 'What is wrong with "Tvrtka je imala veliku gubitak"?',
            options: [
              'Nothing is wrong',
              '"gubitak" is masculine: velik gubitak',
              '"imala" should be "imao"',
              '"tvrtka" needs the genitive',
            ],
            correct: 1,
            explanation:
              '"Gubitak" is a masculine noun, so the adjective agrees masculine in the accusative: velik gubitak. "Tvrtka" is feminine, so "imala" is right.',
          },
          {
            q: '"Kako je bila sezona?" asked on the coast is asking about:',
            options: [
              'the weather in summer',
              'the football season',
              'the fishing season',
              'the tourist season — a question with real economic weight',
            ],
            correct: 3,
            explanation:
              '"Sezona" without qualification means the tourist season, and since tourism is around a fifth of output the question is about livelihoods.',
          },
          {
            q: 'What does "ponuda i potražnja" mean?',
            options: [
              'supply and demand',
              'profit and loss',
              'imports and exports',
              'tax and salary',
            ],
            correct: 0,
            explanation:
              '"Ponuda" is offer or supply and "potražnja" is demand — the fixed economic pair.',
          },
          {
            q: 'Which pair is imports / exports, in that order?',
            options: ['izvoz / uvoz', 'uvoz / izvoz', 'ulaz / izlaz', 'dobit / gubitak'],
            correct: 1,
            explanation:
              '"Uvoz" is imports (u- = in) and "izvoz" is exports (iz- = out). "Ulaz / izlaz" are entrance and exit.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Business — Key Takeaways',
        points: [
          'tvrtka, ugovor, ponuda, tržište, porez, plaća',
          'dobit and gubitak are the native words for profit and loss',
          'gospodarstvo is the economy; ekonomija is the discipline',
          'gospodarski rast, nezaposlenost, izvoz, uvoz, proračun',
          'Tourism is around a fifth of output — "sezona" means the tourist season',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Politics and Society
  // ─────────────────────────────────────────────────────────
  {
    id: 'politics-society',
    title: 'Politics and Society',
    subtitle: 'Institutions, elections, and how Croatia is governed',
    icon: '🏛️',
    level: 'B2',
    duration: '~5 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Following the News Properly',
        body: 'B1 taught you to read a headline. This is the vocabulary behind it — the institutions, the offices and the processes that Croatian political reporting assumes you know. It is a small, closed set, and learning it makes the news suddenly legible.',
        icon: '🏛️',
      },
      {
        type: 'table',
        title: 'The Institutions',
        headers: ['Croatian', 'English'],
        rows: [
          ['Sabor', 'the Croatian Parliament'],
          ['Vlada', 'the Government'],
          ['predsjednik', 'President'],
          ['premijer / predsjednik Vlade', 'Prime Minister'],
          ['ministar', 'minister'],
          ['Ustavni sud', 'Constitutional Court'],
          ['župan / gradonačelnik', 'county prefect / mayor'],
        ],
      },
      {
        type: 'rule',
        title: 'Sabor Is Not "Parlament"',
        body: 'The Croatian parliament has its own name — Sabor — and it is always used. The word is old, from "sabrati" (to gather), and it predates the modern state by centuries. A newspaper will write "Sabor je izglasao…" and never "parlament", so this is one to know rather than infer.',
        highlight: 'Sabor je izglasao…',
      },
      {
        type: 'table',
        title: 'Elections and Process',
        headers: ['Croatian', 'English'],
        rows: [
          ['izbori', 'elections'],
          ['glasati / glasovati', 'to vote'],
          ['birač', 'voter'],
          ['stranka', 'political party'],
          ['zastupnik', 'MP, representative'],
          ['zakon', 'law, act'],
          ['izglasati', 'to pass (a law)'],
        ],
      },
      {
        type: 'rule',
        title: 'Izbori Is Always Plural',
        body: '"Izbori" — elections — has no singular in this sense, like English "elections" when it refers to the event. Parlamentarni izbori, lokalni izbori, predsjednički izbori. And the verb agrees plural: Izbori su održani u nedjelju. A singular "izbor" exists but means a choice or a selection.',
        highlight: 'Izbori su održani…',
      },
      {
        type: 'rule',
        title: 'Croatia and the EU',
        body: 'Croatia joined the European Union in 2013, the Schengen area and the euro in 2023. "Europska unija" (EU), "članica" (member state), "pristupanje" (accession), "eurozona". These come up constantly in reporting, and the accession process is recent enough that most adults remember it — which makes it a genuine conversation topic rather than a dry one.',
        highlight: 'članica Europske unije',
      },
      {
        type: 'example',
        title: 'In the News',
        items: [
          {
            hr: 'Sabor je izglasao novi zakon.',
            en: 'Parliament passed a new law.',
            note: 'izglasati — iz- + glasati',
          },
          {
            hr: 'Izbori će se održati u nedjelju.',
            en: 'The elections will be held on Sunday.',
            note: 'održati se — reflexive, and plural agreement',
          },
          {
            hr: 'Vlada je predložila izmjene proračuna.',
            en: 'The Government proposed budget amendments.',
            note: 'izmjene + genitive',
          },
          {
            hr: 'Hrvatska je članica Europske unije od 2013.',
            en: 'Croatia has been an EU member since 2013.',
            note: 'od + genitive; present for an ongoing state',
          },
          {
            hr: 'Gradonačelnik je najavio nove mjere.',
            en: 'The mayor announced new measures.',
            note: 'najaviti — na- + javiti',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Lokalni su izbori bili mirni, a odaziv birača bio je nizak.',
            en: 'The local elections were calm, and voter turnout was low.',
            note: 'izbori — plural agreement throughout',
          },
          {
            hr: 'Zastupnici u Saboru raspravljali su o novom zakonu do kasno u noć.',
            en: 'MPs in the Sabor debated the new law until late at night.',
            note: 'u Saboru — locative; o + locative',
          },
          {
            hr: 'Premijer je najavio da će Vlada predložiti novi proračun u studenom.',
            en: 'The Prime Minister announced that the Government will propose a new budget in November.',
            note: 'Vlada proposes; the Sabor passes',
          },
          {
            hr: 'Stranke već pripremaju kandidate za predsjedničke izbore.',
            en: 'The parties are already preparing candidates for the presidential elections.',
            note: 'za + accusative plural izbore',
          },
          {
            hr: 'Ustavni sud odlučio je da zakon nije u skladu s Ustavom.',
            en: 'The Constitutional Court ruled that the law is not in line with the Constitution.',
            note: 'u skladu s + instrumental',
          },
          {
            hr: 'Župan je otvorio novu školu u Varaždinu, a građani su ga pozdravili.',
            en: 'The county prefect opened a new school in Varaždin, and the citizens greeted him.',
            note: 'župan — the county office',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the "Sabor"?',
        options: [
          'the Government',
          'the Croatian Parliament',
          'the Constitutional Court',
          'a political party',
        ],
        correct: 1,
        explanation:
          'The Sabor is the Croatian parliament, and the word — from "sabrati", to gather — is always used in place of "parlament". The Government is "Vlada".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Izbori ___ održani u nedjelju."',
        options: ['je', 'su', 'bio', 'bila'],
        correct: 1,
        explanation:
          '"Izbori" has no singular in this sense and always takes plural agreement: izbori SU održani. A singular "izbor" exists but means a choice.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is the borrowed name: "parlament je izglasao" — the Croatian parliament is the Sabor, Sabor je izglasao, and the word is always used. The second is singular agreement with izbori: "izbori je održan", "izbor su održani" — the noun has no singular in this sense and the verb agrees plural, izbori su održani. The third is giving the Government the parliament\'s job: "Vlada je izglasala zakon" — the Vlada proposes, predložila je zakon, and the Sabor passes it, izglasao ga je.',
        highlight: 'izbori su održani',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ izbori održani su u nedjelju." (The local elections were held on Sunday.)',
            options: ['Lokalni', 'Lokalan', 'Lokalna', 'Lokalno'],
            correct: 0,
            explanation:
              '"Izbori" is plural, so the adjective is plural too: lokalni izbori. The singular forms cannot agree with it.',
          },
          {
            q: 'Complete: "___ je izglasao novi zakon o porezu." (Parliament passed the new tax law.)',
            options: ['Parlament', 'Sabor', 'Vlada', 'Predsjednik'],
            correct: 1,
            explanation:
              'The Croatian parliament is the Sabor and only it passes laws. The Vlada proposes them, and "parlament" is not what a newspaper writes.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Izbor su održani u nedjelju.',
              'Izbori su održani u nedjelju.',
              'Izbori je održan u nedjelju.',
              'Izbori su održana u nedjelju.',
            ],
            correct: 1,
            explanation:
              '"Izbori" is plural and masculine, so the verb and participle agree: su održani. "Izbor" in the singular means a choice, not an election.',
          },
          {
            q: 'What is wrong with "Zastupnici raspravljaju o novi zakon"?',
            options: [
              'Nothing is wrong',
              '"o" takes the locative: o novom zakonu',
              '"zastupnici" should be "zastupnik"',
              '"raspravljaju" should be "rasprave"',
            ],
            correct: 1,
            explanation:
              'Debating ABOUT something is o plus the locative: o novom zakonu. The plural subject and verb are fine.',
          },
          {
            q: 'What is the "Ustavni sud"?',
            options: ['the Government', 'the Parliament', 'the Constitutional Court', 'a county'],
            correct: 2,
            explanation:
              '"Ustav" is the constitution and "sud" is a court, so Ustavni sud is the Constitutional Court. The Government is Vlada and the Parliament the Sabor.',
          },
          {
            q: 'What does "izbor" in the SINGULAR mean?',
            options: ['an election', 'a voter', 'a law', 'a choice or selection'],
            correct: 3,
            explanation:
              'The singular "izbor" is a choice or a selection. Elections in the sense of the event are always the plural izbori.',
          },
          {
            q: 'Which pair is county prefect / mayor?',
            options: [
              'premijer / ministar',
              'župan / gradonačelnik',
              'zastupnik / birač',
              'predsjednik / stranka',
            ],
            correct: 1,
            explanation:
              'A "župan" heads a županija (county) and a "gradonačelnik" heads a city. The others are national offices, MP and voter, and president and party.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Politics — Key Takeaways',
        points: [
          'Sabor is the parliament — the word is always used, never "parlament"',
          'Vlada, predsjednik, premijer, ministar, Ustavni sud',
          'izbori is always plural and takes plural agreement',
          'stranka, zastupnik, birač, zakon, izglasati',
          'Croatia joined the EU in 2013 and the euro and Schengen in 2023',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The History of the Language
  // ─────────────────────────────────────────────────────────
  {
    id: 'language-history',
    title: 'The History of the Language',
    subtitle: 'Glagolitic, the three dialects, and why standard Croatian looks like this',
    icon: '📜',
    level: 'B2',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Why the Language Is Shaped the Way It Is',
        body: 'Several things you have learned as arbitrary — why it is ije in some words and e in others, why the coast sounds different, why there is a word for everything rather than a borrowing — stop being arbitrary once you know where the standard came from. This is that story, and it is short.',
        icon: '📜',
      },
      {
        type: 'rule',
        title: 'Glagoljica — Croatia’s Own Alphabet',
        body: 'Before the Latin alphabet took hold, Croatian was written in "glagoljica" — Glagolitic, a script devised in the ninth century and used on the Adriatic coast and islands for around a thousand years, longer than anywhere else in the Slavic world. The Baška tablet (Bašćanska ploča, around 1100) is its most famous monument and one of the earliest records of the Croatian name.',
        highlight: 'glagoljica · Bašćanska ploča',
      },
      {
        type: 'table',
        title: 'The Three Dialect Groups',
        headers: ['Group', 'Word for "what"', 'Where'],
        rows: [
          ['štokavski', 'što', 'most of the country — the standard'],
          ['čakavski', 'ča', 'the coast, Istria and the islands'],
          ['kajkavski', 'kaj', 'Zagreb and the north-west'],
        ],
      },
      {
        type: 'rule',
        title: 'Named After One Word Each',
        body: 'The three groups are named for how they say "what": što, ča, kaj. The standard language is built on štokavski, but the other two are very much alive — a Zagreb speaker will say "kaj" in relaxed speech and Dalmatian songs are full of čakavski. Hearing which one someone is using tells you roughly where they are from before they say so.',
        highlight: 'što · ča · kaj',
      },
      {
        type: 'rule',
        title: 'Ije, Je, E — the Yat Reflex',
        body: 'An old Slavic vowel called "jat" developed differently in different regions, which is why you learned "mlijeko" but also "mliječni", and "vrijeme" but "vremena". Standard Croatian is IJEKAVIAN: the long reflex is -ije- and the short one is -je-. The alternation you have been treating as an irregularity is a thousand-year-old sound change, applied consistently.',
        highlight: 'mlijeko → mliječni',
      },
      {
        type: 'rule',
        title: 'The Illyrian Movement and Standardisation',
        body: 'In the 1830s and 40s a group around Ljudevit Gaj set out to unify Croatian writing — Gaj gave the alphabet its diacritics, which is why it is called "gajica", and the movement settled on štokavski as the basis for a shared standard. Almost every spelling convention you have learned dates from that period rather than from anything older.',
        highlight: 'gajica — Gaj’s alphabet',
      },
      {
        type: 'rule',
        title: 'The Habit of Building Rather Than Borrowing',
        body: 'You have met this repeatedly: računalo, zrakoplov, sveučilište, gospodarstvo, poveznica. Croatian has a long and deliberate tradition of coining native words for new things rather than importing them, going back to the nineteenth-century revival. It is why so much technical vocabulary is transparent once you can read the parts — and why the international word usually also exists alongside it.',
        highlight: 'zrakoplov = air-boat',
      },
      {
        type: 'example',
        title: 'Hearing the History',
        items: [
          {
            hr: 'Bašćanska ploča najstariji je hrvatski spomenik.',
            en: 'The Baška tablet is the oldest Croatian monument of its kind.',
            note: 'the participle-free "je" in second position',
          },
          {
            hr: 'U Zagrebu ćeš čuti kaj, a u Splitu ča.',
            en: 'In Zagreb you will hear kaj, and in Split ča.',
            note: 'a for side-by-side contrast',
          },
          {
            hr: 'Standardni jezik temelji se na štokavskom narječju.',
            en: 'The standard language is based on the štokavian dialect.',
            note: 'temeljiti se na + locative',
          },
          {
            hr: 'Gaj je uveo dijakritičke znakove.',
            en: 'Gaj introduced the diacritics.',
            note: 'uvesti — u- + voditi',
          },
          {
            hr: 'Glagoljica se koristila stoljećima na obali.',
            en: 'Glagolitic was used for centuries on the coast.',
            note: 'stoljećima — instrumental of duration',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Riječ "lijep" ima kratki oblik u komparativu: ljepši, najljepši.',
            en: 'The word "lijep" has the short form in the comparative: ljepši, najljepši.',
            note: 'long ije in the base, short je in the comparative',
          },
          {
            hr: 'Moja baka iz Zagorja govori kajkavski, a djed s Brača čakavski.',
            en: 'My grandmother from Zagorje speaks kajkavian, and my grandfather from Brač čakavian.',
            note: 'north-west against the islands',
          },
          {
            hr: 'Ljudevit Gaj i ilirci odabrali su štokavsko narječje kao temelj standarda.',
            en: 'Ljudevit Gaj and the Illyrians chose the štokavian dialect as the basis of the standard.',
            note: 'odabrati — perfective; the 1830s',
          },
          {
            hr: 'Na otoku Krku glagoljica se čuvala dulje nego bilo gdje drugdje.',
            en: 'On the island of Krk, Glagolitic was preserved longer than anywhere else.',
            note: 'čuvati se — a se-passive',
          },
          {
            hr: 'Dijete pije mlijeko, a djeca vole mliječne proizvode: to je isti jat.',
            en: 'A child drinks milk, and children love dairy products: that is the same jat.',
            note: 'dijete → djeca, mlijeko → mliječni',
          },
          {
            hr: 'Umjesto stranih riječi Hrvati često grade svoje: zrakoplov, računalo, sveučilište.',
            en: 'Instead of foreign words, Croats often build their own: aeroplane, computer, university.',
            note: 'umjesto + genitive; the building tradition',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'The three Croatian dialect groups are named after…',
        options: ['three cities', 'their word for "what"', 'three writers', 'their word for "yes"'],
        correct: 1,
        explanation:
          'Štokavski, čakavski and kajkavski are named for što, ča and kaj — three ways of saying "what". The standard is built on štokavski.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What was "glagoljica"?',
        options: [
          'an old dialect',
          'a Croatian alphabet used for around a thousand years',
          'a grammar book',
          'a nineteenth-century movement',
        ],
        correct: 1,
        explanation:
          'Glagolitic was a script devised in the ninth century and used on the Croatian coast and islands longer than anywhere else in the Slavic world. The nineteenth-century movement was the Illyrian one.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is treating the ije/je alternation as random and writing the long reflex everywhere: "mlijekni", "vrijemena", "lijepši" — the short reflex belongs in the derived and oblique forms, mliječni, vremena, ljepši. The second is placing the dialects by the wrong cue: kajkavski is Zagreb and the north-west, čakavski the coast and islands — a speaker saying kaj is not from Dalmatia. The third is assuming the international word is the only one: "kompjuter" is understood, but written Croatian prefers the built word, računalo.',
        highlight: 'mliječni, vremena, ljepši',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Volim ___ proizvode." (I like dairy products — from mlijeko.)',
            options: ['mlijekne', 'mliječne', 'mlječne', 'mlijeko'],
            correct: 1,
            explanation:
              'In the derived adjective the jat is short: mliječni. "Mlijekne" keeps the long reflex where it does not belong, and "mlječne" drops the vowel entirely.',
          },
          {
            q: 'Complete: "Nemam ___ za kavu." (I have no time for coffee.)',
            options: ['vrijemena', 'vremena', 'vrijeme', 'vremenu'],
            correct: 1,
            explanation:
              '"Nemati" takes the genitive, and the oblique forms of vrijeme have the short reflex: vremena. "Vrijemena" is the long reflex in the wrong place.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ova je kuća ljepša od one.',
              'Ova je kuća lijepša od one.',
              'Ova je kuća najlijepša od svih.',
              'Ova je kuća ljepa od one.',
            ],
            correct: 0,
            explanation:
              'The comparative and superlative shorten the jat: ljepša, najljepša. "Lijepša" and "najlijepša" keep the long form, and "ljepa" shortens it where the base word is long.',
          },
          {
            q: 'What is wrong with "U Splitu ćeš na ulici čuti kaj"?',
            options: [
              'Nothing is wrong',
              'Split is čakavian territory — you would hear ča; kaj belongs to Zagreb and the north-west',
              '"na ulici" should be "na ulicu"',
              '"čuti" should be "slušati"',
            ],
            correct: 1,
            explanation:
              'The three groups are named for their word for what, and "kaj" places a speaker in the north-west. On the Dalmatian coast the marker is "ča".',
          },
          {
            q: 'What is "gajica"?',
            options: [
              'a dialect of Istria',
              'a medieval stone tablet',
              'a Glagolitic letter',
              "the Latin alphabet with Gaj's diacritics — the modern Croatian script",
            ],
            correct: 3,
            explanation:
              'Ljudevit Gaj gave the Latin alphabet its č, ć, đ, š, ž in the 1830s, and the resulting script carries his name. The tablet is the Bašćanska ploča.',
          },
          {
            q: 'Why does Croatian have "zrakoplov" beside "avion"?',
            options: [
              'zrakoplov is a dialect word',
              'a deliberate tradition of building native words rather than borrowing',
              'avion is not a Croatian word',
              'zrakoplov is the older Glagolitic form',
            ],
            correct: 1,
            explanation:
              'Since the nineteenth-century revival Croatian has coined native words for new things, so the built word and the international one usually coexist.',
          },
          {
            q: 'The standard language is based on which dialect group?',
            options: ['kajkavski', 'čakavski', 'štokavski', 'ikavski'],
            correct: 2,
            explanation:
              'The Illyrian movement settled on štokavski as the basis of the shared standard. Kajkavski and čakavski remain living dialects, and "ikavski" names a jat reflex, not a group.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Language History — Key Takeaways',
        points: [
          'glagoljica was used on the coast for around a thousand years',
          'štokavski, čakavski, kajkavski — named for što, ča and kaj',
          'The standard is štokavski and ijekavian: mlijeko, vrijeme',
          'The ije/je alternation is the jat reflex, not an irregularity',
          'Gaj gave the alphabet its diacritics in the 1830s — hence gajica',
          'Building native words rather than borrowing is a deliberate tradition',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Reading Croatian Literature
  // ─────────────────────────────────────────────────────────
  {
    id: 'literature-canon',
    title: 'Reading Croatian Literature',
    subtitle: 'Where to start, and what to expect from each',
    icon: '📚',
    level: 'B2',
    duration: '~5 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'The Point at Which You Can Read',
        body: 'B2 is where authentic literature becomes possible rather than punishing. The trick is choosing well: some of the canon is written in dialect or in nineteenth-century language and will stop you dead, while other work is entirely approachable. This is a map of where to start.',
        icon: '📚',
      },
      {
        type: 'table',
        title: 'Where to Begin',
        headers: ['Author', 'Try', 'Why'],
        rows: [
          ['Ivana Brlić-Mažuranić', 'Priče iz davnine', 'fairy tales, clear prose'],
          ['Vladimir Nazor', 'short stories', 'accessible, vivid'],
          ['Slavenka Drakulić', 'essays', 'modern, plain style'],
          ['Miro Gavran', 'novels and plays', 'deliberately readable'],
          ['Dubravka Ugrešić', 'essays', 'modern, wry'],
          ['Miroslav Krleža', 'later, not first', 'dense, long sentences'],
        ],
      },
      {
        type: 'rule',
        title: 'Start With Brlić-Mažuranić',
        body: '"Priče iz davnine" (Tales of Long Ago, 1916) is the usual first real book: Croatian fairy tales drawing on Slavic mythology, written in prose that is rich but clear, and short enough per story to finish one in a sitting. It is also genuinely well known, so having read it gives you something to talk about.',
        highlight: 'Priče iz davnine',
      },
      {
        type: 'rule',
        title: 'Krleža Is the Mountain, Not the Foothill',
        body: 'Miroslav Krleža is the towering figure of twentieth-century Croatian letters, and "Povratak Filipa Latinovicza" and "Gospoda Glembajevi" are the works everyone names. They are also written in long, subordinated sentences with a large abstract vocabulary. Read him — but read him after something else, or the experience will be discouraging rather than rewarding.',
        highlight: 'Krleža — later',
      },
      {
        type: 'table',
        title: 'Talking About Books',
        headers: ['Croatian', 'English'],
        rows: [
          ['roman', 'novel'],
          ['pripovijetka', 'short story'],
          ['pjesma', 'poem'],
          ['drama', 'play'],
          ['radnja', 'plot'],
          ['lik', 'character'],
          ['prijevod', 'translation'],
        ],
      },
      {
        type: 'rule',
        title: 'Marulić and the First European Novel in Croatian',
        body: 'Marko Marulić of Split, writing around 1500, is called the father of Croatian literature — and he coined the word "psychology" in its modern sense in Latin. His "Judita" (1501) is the first substantial literary work printed in Croatian. You will not read it at B2, but every Croatian knows the name, and knowing why is worth more than the reading would be.',
        highlight: 'Marulić — Judita, 1501',
      },
      {
        type: 'rule',
        title: 'Read With a Purpose, Not a Dictionary',
        body: 'The practical advice: read a page without stopping, then go back for three or four words that mattered. Looking up everything turns reading into decoding and kills the pace that makes comprehension possible. A translated book you already know is the easiest possible start, because the plot carries you through the sentences you only half-catch.',
        highlight: 'read the page, then look up three words',
      },
      {
        type: 'example',
        title: 'Discussing What You Read',
        items: [
          {
            hr: 'Čitam roman koji mi je preporučila prijateljica.',
            en: 'I am reading a novel a friend recommended to me.',
            note: 'koji + a dative pronoun inside the clause',
          },
          {
            hr: 'Radnja se događa u Zagrebu tridesetih godina.',
            en: 'The story takes place in Zagreb in the thirties.',
            note: 'događati se — reflexive',
          },
          {
            hr: 'Glavni lik mi je jako zanimljiv.',
            en: 'I find the main character very interesting.',
            note: 'the character is the subject; you are the dative',
          },
          {
            hr: 'Jezik je pomalo zahtjevan, ali vrijedi.',
            en: 'The language is somewhat demanding, but it is worth it.',
            note: 'pomalo — a hedge from earlier in this level',
          },
          {
            hr: 'Više volim original nego prijevod.',
            en: 'I prefer the original to the translation.',
            note: 'više volim … nego',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Za početak preporučujem Priče iz davnine, jer su priče kratke i jasne.',
            en: 'To begin with I recommend Priče iz davnine, because the stories are short and clear.',
            note: 'the usual first book',
          },
          {
            hr: 'Krležine su rečenice duge, pa ga čitam tek nakon nekoliko lakših knjiga.',
            en: "Krleža's sentences are long, so I am only reading him after a few easier books.",
            note: 'Krležine — possessive adjective from the name',
          },
          {
            hr: 'Radnja pripovijetke prati mladog ribara s otoka Visa.',
            en: 'The plot of the short story follows a young fisherman from the island of Vis.',
            note: 'radnja + genitive; pratiti + accusative',
          },
          {
            hr: 'Pročitala sam cijelu stranicu bez rječnika, a onda potražila tri riječi.',
            en: 'I read the whole page without a dictionary, and then looked up three words.',
            note: 'the reading method in one sentence',
          },
          {
            hr: 'Prijevod je dobar, ali u originalu likovi zvuče prirodnije.',
            en: 'The translation is good, but in the original the characters sound more natural.',
            note: 'prijevod, original, likovi',
          },
          {
            hr: 'Marulićevu Juditu znaju svi, iako ju je malo tko pročitao.',
            en: "Everyone knows Marulić's Judita, although hardly anyone has read it.",
            note: 'ju — the feminine accusative clitic',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is usually recommended as a first real book in Croatian?',
        options: [
          'Krleža, Povratak Filipa Latinovicza',
          'Brlić-Mažuranić, Priče iz davnine',
          'Marulić, Judita',
          'Ugrešić, essays',
        ],
        correct: 1,
        explanation:
          '"Priče iz davnine" is clear, short per story and widely known. Krleža is dense and long-sentenced, and Judita is from 1501 — both are for later.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "radnja" mean when discussing a novel?',
        options: ['the character', 'the plot', 'the translation', 'the chapter'],
        correct: 1,
        explanation:
          '"Radnja" is the plot or action. The character is "lik", the translation "prijevod" and a chapter "poglavlje".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first error is starting at the summit: opening Krleža or Judita as a first book and concluding that Croatian literature is beyond you — start with Priče iz davnine. The second is the dictionary reflex: stopping at every unknown word, which kills the pace comprehension needs; read the page, then look up three words. The third is "karakter" for a character in a novel — a novel has likovi, and a karakter is a personality.',
        highlight: 'read the page, then look up three words',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Glavni ___ romana je mladi liječnik iz Rijeke." (The main character of the novel is a young doctor from Rijeka.)',
            options: ['karakter', 'lik', 'osoba', 'radnja'],
            correct: 1,
            explanation:
              'A character in a book is a "lik". "Karakter" is a personality, and "radnja" is the plot.',
          },
          {
            q: 'Complete: "___ se događa na otoku za vrijeme rata." (The plot takes place on an island during the war.)',
            options: ['Radnja', 'Lik', 'Prijevod', 'Pjesma'],
            correct: 0,
            explanation:
              '"Radnja" is the plot or action, and "radnja se događa" is the standard way to say where a story is set.',
          },
          {
            q: 'Which sentence correctly says "I prefer the original to the translation"?',
            options: [
              'Više volim original od prijevod.',
              'Više volim original nego prijevod.',
              'Volim više original kao prijevod.',
              'Više volim original nego prijevoda.',
            ],
            correct: 1,
            explanation:
              '"Više volim X nego Y" keeps both in the accusative. "Od" would need the genitive prijevoda, and "nego" does not take the genitive.',
          },
          {
            q: 'A learner opens "Povratak Filipa Latinovicza" as their first Croatian book and gives up on page three. What went wrong?',
            options: [
              'Nothing — Krleža is the right start',
              'They chose the mountain first; Priče iz davnine is the usual first book',
              'They should have read Judita first',
              'They should have used a bigger dictionary',
            ],
            correct: 1,
            explanation:
              'Krleža writes long, subordinated sentences with a large abstract vocabulary. He rewards a reader who arrives after something easier.',
          },
          {
            q: 'What is the advice for reading a page?',
            options: [
              'Look up every unknown word before moving on',
              'Read the page without stopping, then go back for three or four words',
              'Read only the translation',
              'Skip pages with unknown words',
            ],
            correct: 1,
            explanation:
              'Looking up everything turns reading into decoding and kills the pace. Read first, then return for the few words that mattered.',
          },
          {
            q: 'What is a "pripovijetka"?',
            options: ['a novel', 'a poem', 'a play', 'a short story'],
            correct: 3,
            explanation:
              'A "pripovijetka" is a short story. A novel is roman, a poem pjesma and a play drama.',
          },
          {
            q: 'Who is called the father of Croatian literature, and for which work?',
            options: [
              'Krleža, Gospoda Glembajevi',
              'Gaj, gajica',
              'Marulić, Judita',
              'Nazor, short stories',
            ],
            correct: 2,
            explanation:
              'Marko Marulić of Split wrote Judita in 1501, the first substantial literary work printed in Croatian. Gaj reformed the alphabet; Krleža and Nazor are twentieth-century writers.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Literature — Key Takeaways',
        points: [
          'Start with Brlić-Mažuranić — clear, short, and widely known',
          'Krleža is the great figure but the harder read; come to him later',
          'Marulić wrote Judita in 1501 — the name every Croatian knows',
          'roman, pripovijetka, pjesma, drama, radnja, lik, prijevod',
          'Read a page, then look up three words — not the other way round',
        ],
      },
    ],
  },
];
