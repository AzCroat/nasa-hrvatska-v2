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
          ['Bok Ana,', 'a colleague you are close to'],
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
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are emailing someone you have never met, at an institution. How do you open?',
        options: ['Bok,', 'Dragi,', 'Poštovani,', 'Hej,'],
        correct: 2,
        explanation:
          '"Poštovani" is the standard formal opener and works without knowing the recipient. "Dragi" is for someone you know and "Bok" is casual.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the usual close for ordinary professional email?',
        options: ['S poštovanjem,', 'Lijep pozdrav,', 'Bok,', 'Zbogom,'],
        correct: 1,
        explanation:
          '"Lijep pozdrav" is what Croatians actually use in day-to-day professional email. "S poštovanjem" is a notch more formal and belongs in a letter to an institution.',
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
