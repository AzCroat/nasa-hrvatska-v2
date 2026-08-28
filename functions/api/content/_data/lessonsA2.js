// ═══════════════════════════════════════════════════════════
// A2 CURRICULUM — the expansion to 30 (Wave 2, 2026-08-28)
// ═══════════════════════════════════════════════════════════
//
// Same split as lessonsA1.js, for the same reason: one file per level keeps a
// ~180-lesson catalog navigable. LESSONS spreads this array in, so every
// consumer still sees one flat catalog.
//
// WHAT A2 WAS MISSING
// -------------------
// A2 had eight lessons and they were all about the same two things: verbs and
// adjectives. The level that is supposed to let a learner describe a past
// event, make a plan and give an opinion had:
//
//   * no DATIVE — no way to say who you gave something to, wrote to, helped,
//     or explained something to, and no way to build "sviđa mi se" from
//     anything but memory;
//   * no INSTRUMENTAL — no "with my brother", no "by train";
//   * no OBJECT PRONOUNS, so every sentence had to repeat the full noun: a
//     learner could say "Vidim Anu" but not "Vidim je";
//   * no plural beyond the subject form, so nothing could be counted or
//     possessed in the plural;
//   * no conjunctions past "i", so no sentence could be joined to another —
//     which is precisely what A2 is defined by;
//   * and nothing functional at all. Eight grammar lessons, no house, no body,
//     no work, no travel, no plans.
//
// The 22 below close that: twelve structural, ten functional, sequenced so
// each is usable with only what came before it.
//
// AUTHORING RULES — see CLAUDE.md → Croatian Content Authoring. Standard
// štokavski, full diacritics, correct case government. Every technical term
// glossed in plain English on first use and anchored to something the learner
// already says in English. Distractors are wrong the way learners are actually
// wrong — a case error, a gender mismatch, an English word order — never a
// Serbian form, and never real Croatian marked incorrect.

/** @type {ReadonlyArray<object>} */
export const LESSONS_A2 = [
  // ─────────────────────────────────────────────────────────
  // Object Pronouns
  // ─────────────────────────────────────────────────────────
  {
    id: 'object-pronouns',
    title: 'Object Pronouns',
    subtitle: 'Saying "I see her" instead of repeating the name every time',
    icon: '👥',
    level: 'A2',
    duration: '~7 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Words That Stop You Repeating Yourself',
        body: 'At A1 you could say "Vidim Anu". You could not yet say "Vidim je" — I see her. These little words are what turn a list of statements into a conversation, and Croatian has two sets of them: short ones you will use constantly, and long ones for emphasis.',
        icon: '👥',
      },
      {
        type: 'rule',
        title: 'The English Bridge: I see HER',
        body: 'English does exactly this and nobody thinks about it. "I see Ana" becomes "I see her" — not "I see she". You already know that an object pronoun has its own shape. Croatian has more of them, but the instinct is identical, and it is the same instinct the accusative rests on.',
        highlight: 'I see HER → Vidim je',
      },
      {
        type: 'table',
        title: 'The Short Forms — Accusative',
        headers: ['Person', 'Short form', 'Example'],
        rows: [
          ['me', 'me', 'Vidiš me. (You see me.)'],
          ['you', 'te', 'Vidim te. (I see you.)'],
          ['him / it', 'ga', 'Vidim ga. (I see him.)'],
          ['her', 'je / ju', 'Vidim je. (I see her.)'],
          ['us', 'nas', 'Vide nas. (They see us.)'],
          ['you (plural)', 'vas', 'Vidim vas. (I see you all.)'],
          ['them', 'ih', 'Vidim ih. (I see them.)'],
        ],
      },
      {
        type: 'rule',
        title: 'Second Position, Like "Se"',
        body: 'These are clitics — words too small to stand alone — so they sit in SECOND position, exactly where "se" goes. Vidim te. (Vidim is first.) Ja te vidim. (Ja is first.) Sutra te vidim. (Sutra is first.) They can never open a sentence, and they never carry stress.',
        highlight: 'Ja te vidim.',
      },
      {
        type: 'table',
        title: 'The Short Forms — Dative',
        headers: ['Person', 'Short form', 'Example'],
        rows: [
          ['to me', 'mi', 'Daj mi to. (Give me that.)'],
          ['to you', 'ti', 'Kažem ti. (I am telling you.)'],
          ['to him', 'mu', 'Reci mu. (Tell him.)'],
          ['to her', 'joj', 'Piši joj. (Write to her.)'],
          ['to us', 'nam', 'Pomozi nam. (Help us.)'],
          ['to you (plural)', 'vam', 'Hvala vam. (Thank you.)'],
          ['to them', 'im', 'Javi im. (Let them know.)'],
        ],
      },
      {
        type: 'rule',
        title: 'When Two Meet: Dative First',
        body: 'If a sentence has both, the dative comes before the accusative — the opposite of the English order in "give it to me". Dao mi ga je. (He gave it to me: to-me + it + he-did.) Reci mi to. (Tell me that.) The rule is short enough to memorise: to-whom before what.',
        highlight: 'Dao mi ga je.',
      },
      {
        type: 'rule',
        title: 'Ju Instead of Je, and Why',
        body: 'The accusative "her" is normally "je". But when the auxiliary "je" (he/she is) is in the same sentence, two identical words would collide, so the pronoun becomes "ju". Vidio ju je. (He saw her.) Compare Vidim je. (I see her) — no auxiliary, so "je" is fine. This is purely about avoiding a stutter, and native speakers do it without thinking.',
        highlight: 'Vidio ju je.',
      },
      {
        type: 'rule',
        title: 'The Long Forms Are for Emphasis',
        body: 'Each pronoun also has a long form: mene, tebe, njega, nju, nas, vas, njih. You use them when the pronoun is stressed, stands alone, or follows a preposition. Mene ne pitaj! (Do not ask ME.) Koga vidiš? — Njega. (Whom do you see? — Him.) Idem s njim. (I am going with him.) Otherwise, always use the short form.',
        highlight: 'Mene ne pitaj!',
      },
      {
        type: 'example',
        title: 'Short and Long Side by Side',
        items: [
          {
            hr: 'Vidim je svaki dan.',
            en: 'I see her every day.',
            note: 'neutral — short form',
          },
          {
            hr: 'Nju vidim svaki dan, a njega rijetko.',
            en: 'HER I see every day, but him rarely.',
            note: 'contrast — long form, and it opens the sentence',
          },
          {
            hr: 'Možeš li mi pomoći?',
            en: 'Can you help me?',
            note: 'pomoći takes the dative: mi',
          },
          {
            hr: 'Rekao sam im sve.',
            en: 'I told them everything.',
            note: 'im — to them',
          },
          {
            hr: 'Ovo je za tebe.',
            en: 'This is for you.',
            note: 'after a preposition, always the long form',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I see him"?',
        options: ['Ga vidim.', 'Vidim ga.', 'Vidim njega ga.', 'Vidim on.'],
        correct: 1,
        explanation:
          'The short pronoun takes second position, and here the verb is the first element, so it follows: Vidim ga. It can never open a sentence, which rules out "Ga vidim" outright.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "Give me that"?',
        options: ['Daj to mi.', 'Daj mi to.', 'Mi daj to.', 'Daj me to.'],
        correct: 1,
        explanation:
          'The dative comes before the accusative — to-whom before what — so "Daj mi to". "Me" is the accusative form and would mean giving the person away rather than giving something to them.',
      },
      {
        type: 'summary',
        title: 'Object Pronouns — Key Takeaways',
        points: [
          'Accusative short: me, te, ga, je/ju, nas, vas, ih',
          'Dative short: mi, ti, mu, joj, nam, vam, im',
          'Short forms are clitics — second position, never first, never stressed',
          'Dative before accusative: Dao mi ga je.',
          'ju replaces je when the auxiliary je is in the same sentence',
          'Long forms (mene, njega, nju…) for emphasis and after prepositions',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Dative
  // ─────────────────────────────────────────────────────────
  {
    id: 'dative-intro',
    title: 'The Dative',
    subtitle: 'Who you give to, write to, help and explain things to',
    icon: '🎁',
    level: 'A2',
    duration: '~7 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'The Receiver',
        body: 'The accusative marks WHAT you act on. The dative marks WHO receives it — the person you give the book to, write the letter to, tell the news to. Without it, a whole class of everyday sentence is out of reach, which is why this is the case A2 most needs.',
        icon: '🎁',
      },
      {
        type: 'rule',
        title: 'The English Bridge: give HIM the book',
        body: 'English marks this too, just invisibly. "I gave him the book" — "him", not "he", and it sits before the thing given. Older English even had the preposition: "I gave the book TO him". That "to" is the dative, and Croatian puts it in the ending instead of in a separate word.',
        highlight: 'give HIM the book',
      },
      {
        type: 'rule',
        title: 'The Endings Are Ones You Already Know',
        body: 'Masculine and neuter take -u; feminine takes -i. brat → bratu. prijatelj → prijatelju. more → moru. sestra → sestri. Ana → Ani. If those look familiar, they should — they are exactly the locative endings from A1. The two cases are identical in the singular.',
        highlight: 'masculine & neuter -u · feminine -i',
      },
      {
        type: 'rule',
        title: 'So How Do You Tell Them Apart?',
        body: 'By the job, and by one reliable signal: the LOCATIVE never appears without a preposition, and the DATIVE almost always appears without one. U školi sam — preposition, so locative, and it means "at school". Dajem knjigu Ani — no preposition, so dative, and it means "to Ana". Same endings, opposite contexts; you will never actually be confused in a real sentence.',
        highlight: 'no preposition = dative',
      },
      {
        type: 'table',
        title: 'Dative Endings',
        headers: ['Gender', 'Subject form', 'Dative', 'In use'],
        rows: [
          ['Masculine', 'brat', 'bratu', 'Dajem bratu knjigu.'],
          ['Masculine (soft)', 'prijatelj', 'prijatelju', 'Pišem prijatelju.'],
          ['Feminine', 'sestra', 'sestri', 'Rekao sam sestri.'],
          ['Feminine (name)', 'Ana', 'Ani', 'Javi Ani!'],
          ['Neuter', 'dijete', 'djetetu', 'Pomažem djetetu.'],
        ],
      },
      {
        type: 'rule',
        title: 'The Verbs That Demand It',
        body: 'A group of very common verbs takes a dative object rather than an accusative one, and they have to be learned as a set: dati (give), reći (say), pisati (write to), javiti (let know), pomoći (help), vjerovati (believe), zahvaliti (thank), objasniti (explain), smetati (bother), trebati (be needed by). Note that "pomoći" and "vjerovati" take the dative where English uses a plain object — Pomažem mu, not "pomažem ga".',
        highlight: 'Pomažem mu.',
      },
      {
        type: 'rule',
        title: 'And the One You Already Use',
        body: '"Sviđa mi se" is a dative sentence, and now you can see why: the thing does the pleasing and the person receives it. Sviđa mi se Zagreb. Sviđa mu se glazba. Same for "Treba mi odmor" (I need a rest) and "Hladno mi je" (I am cold — literally, it is cold to me). A whole family of Croatian sentences puts the person in the dative and something else in the subject.',
        highlight: 'Hladno mi je.',
      },
      {
        type: 'example',
        title: 'The Dative at Work',
        items: [
          {
            hr: 'Dao sam knjigu bratu.',
            en: 'I gave the book to my brother.',
            note: 'knjigu = accusative, bratu = dative',
          },
          {
            hr: 'Pišem baki svaki tjedan.',
            en: 'I write to my grandmother every week.',
            note: 'baka → baki',
          },
          {
            hr: 'Možeš li pomoći Ani?',
            en: 'Can you help Ana?',
            note: 'pomoći takes the dative, unlike English',
          },
          {
            hr: 'Objasnio je studentima pravilo.',
            en: 'He explained the rule to the students.',
            note: 'plural dative ends in -ima',
          },
          {
            hr: 'Hvala vam na pomoći.',
            en: 'Thank you for your help.',
            note: 'hvala + dative, then na + locative',
          },
        ],
      },
      {
        type: 'rule',
        title: 'A Few Prepositions Take It Too',
        body: 'The dative is mostly preposition-free, but three take it: "k / ka" (towards a person or place — Idem k liječniku), "prema" (towards, or in the sense of "attitude to"), and "unatoč / usprkos" (despite — Unatoč kiši, idemo). Of these, "prema" is the one you will meet most.',
        highlight: 'k · prema · unatoč',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am writing to my sister"? ("sestra" is feminine.)',
        options: ['Pišem sestra.', 'Pišem sestru.', 'Pišem sestri.', 'Pišem sestre.'],
        correct: 2,
        explanation:
          'The person receiving takes the dative, and a feminine noun ends in -i: sestri. "Sestru" is the accusative — right for seeing your sister, wrong for writing to her.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "I am helping him"?',
        options: ['Pomažem ga.', 'Pomažem mu.', 'Pomažem njega.', 'Pomažem se.'],
        correct: 1,
        explanation:
          '"Pomoći" takes a dative object in Croatian even though English uses a plain one, so it is "mu" and not "ga". This is the single most common error with this verb.',
      },
      {
        type: 'summary',
        title: 'Dative — Key Takeaways',
        points: [
          'The dative marks who RECEIVES — the same idea as English "to him"',
          'Masculine and neuter -u, feminine -i — identical to the locative',
          'Tell them apart by the preposition: locative always has one, dative almost never',
          'dati, reći, pisati, pomoći, vjerovati, javiti, objasniti all take it',
          'Sviđa mi se, treba mi, hladno mi je — the person is in the dative',
          'k / ka, prema, unatoč are the prepositions that take it',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Instrumental
  // ─────────────────────────────────────────────────────────
  {
    id: 'instrumental-intro',
    title: 'The Instrumental',
    subtitle: 'Who you are with, and what you are doing it with',
    icon: '🚋',
    level: 'A2',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'With Whom, and By What',
        body: 'The last of the everyday cases, and one of the easiest: one ending for masculine and neuter, one for feminine, and two clear jobs. It answers "with whom?" and "by what means?" — s bratom, vlakom, olovkom.',
        icon: '🚋',
      },
      {
        type: 'rule',
        title: 'Job One: the Means — No Preposition',
        body: 'When something is the tool or the method, the instrumental stands alone with no preposition at all. Idem vlakom. (I am going by train.) Pišem olovkom. (I am writing with a pencil.) Plaćam karticom. (I am paying by card.) English needs "by" or "with" here; Croatian just changes the ending.',
        highlight: 'Idem vlakom.',
      },
      {
        type: 'rule',
        title: 'Job Two: Company — With "S"',
        body: 'When it is a person or thing you are WITH, add "s" (or "sa"). Idem s bratom. (I am going with my brother.) Kava s mlijekom. (Coffee with milk.) The difference matters: "Idem autom" is by car; "Idem s autom" would mean the car is your companion. Means takes no preposition, company takes "s".',
        highlight: 'autom vs. s bratom',
      },
      {
        type: 'rule',
        title: 'The Endings',
        body: 'Masculine and neuter take -om, or -em after a soft consonant (č, ć, đ, š, ž, j, lj, nj, c). brat → bratom. vlak → vlakom. prijatelj → prijateljem. more → morem. Feminine takes -om too: sestra → sestrom. olovka → olovkom. One ending covers almost everything.',
        highlight: '-om, or -em after a soft consonant',
      },
      {
        type: 'table',
        title: 'Instrumental Endings',
        headers: ['Noun', 'Instrumental', 'Meaning'],
        rows: [
          ['vlak', 'vlakom', 'by train'],
          ['auto', 'autom', 'by car'],
          ['brat', 's bratom', 'with my brother'],
          ['prijatelj', 's prijateljem', 'with a friend'],
          ['sestra', 'sa sestrom', 'with my sister'],
          ['more', 'morem', 'by sea'],
        ],
      },
      {
        type: 'rule',
        title: 'S or Sa?',
        body: 'Use "sa" before a word beginning with s, š, z or ž, and before the pronoun "mnom". sa sestrom, sa Šimom, sa mnom. Everywhere else it is plain "s". This is purely about being easy to say, and it is the same rule you met with prepositions of place at A1.',
        highlight: 'sa sestrom · sa mnom',
      },
      {
        type: 'rule',
        title: 'Two Verbs That Take It',
        body: '"Baviti se" (to do as an activity or occupation) takes the instrumental with no preposition: Bavim se sportom. (I do sport.) Bavim se glazbom. So does "postati" (to become): Postao je liječnikom. And "biti" with a profession sometimes does too, though the plain subject form is more common in speech: On je liječnik.',
        highlight: 'Bavim se sportom.',
      },
      {
        type: 'example',
        title: 'Getting Around and Getting Together',
        items: [
          {
            hr: 'Putujem vlakom do Splita.',
            en: 'I am travelling to Split by train.',
            note: 'means — no preposition',
          },
          {
            hr: 'Idem u kino s prijateljima.',
            en: 'I am going to the cinema with friends.',
            note: 'plural instrumental ends in -ima',
          },
          {
            hr: 'Razgovarala je s bakom telefonom.',
            en: 'She spoke with her grandmother by phone.',
            note: 'both jobs in one sentence',
          },
          {
            hr: 'Čime se baviš?',
            en: 'What do you do?',
            note: 'čime = the instrumental of "što"',
          },
          {
            hr: 'Bavim se glazbom već deset godina.',
            en: 'I have been doing music for ten years.',
            note: 'baviti se + instrumental',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am going by bus"? ("autobus" is masculine.)',
        options: ['Idem s autobusom.', 'Idem autobusom.', 'Idem autobusu.', 'Idem autobus.'],
        correct: 1,
        explanation:
          'A means of transport is the instrumental with NO preposition: Idem autobusom. Adding "s" would make the bus your travelling companion rather than your transport.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Idem u grad ___ sestrom."',
        options: ['s', 'sa', 'k', 'od'],
        correct: 1,
        explanation:
          '"Sestrom" begins with s, so the preposition takes its longer form "sa" — purely so the two are easy to say together. Before most other words it would be plain "s".',
      },
      {
        type: 'summary',
        title: 'Instrumental — Key Takeaways',
        points: [
          'Means takes NO preposition: vlakom, olovkom, karticom',
          'Company takes s / sa: s bratom, sa sestrom',
          'Masculine and neuter -om, or -em after a soft consonant',
          'Feminine -om: sestrom, olovkom',
          'sa before s, š, z, ž and before mnom',
          'baviti se + instrumental: Bavim se sportom.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Svoj — Your Own
  // ─────────────────────────────────────────────────────────
  {
    id: 'svoj',
    title: 'Svoj — One’s Own',
    subtitle: 'The possessive English does not have, and cannot do without',
    icon: '🪞',
    level: 'A2',
    duration: '~5 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'The Sentence English Cannot Say Clearly',
        body: '"Ivan loves his wife." Whose wife? English genuinely cannot tell you — it could be Ivan\'s, or another man\'s, and only context decides. Croatian settles it with one word, and using the wrong one changes who you are talking about.',
        icon: '🪞',
      },
      {
        type: 'rule',
        title: 'Svoj Points Back at the Subject',
        body: 'If the owner IS the subject of the sentence, use "svoj". If the owner is somebody else, use njegov, njezin, njihov. Ivan voli svoju ženu = Ivan loves his OWN wife. Ivan voli njegovu ženu = Ivan loves ANOTHER man\'s wife. The grammar is doing work that English leaves to guesswork.',
        highlight: 'svoju = his own',
      },
      {
        type: 'rule',
        title: 'It Works for Every Person',
        body: '"Svoj" is not tied to "he" — it follows whoever the subject happens to be. Uzimam svoju knjigu. (I am taking MY book.) Uzmi svoju knjigu. (Take YOUR book.) Uzeli su svoje knjige. (They took THEIR books.) One word, six meanings, always pointing at the subject.',
        highlight: 'one word, whoever the subject is',
      },
      {
        type: 'rule',
        title: 'The Endings Are Ordinary',
        body: '"Svoj" declines exactly like "moj" — svoj, svoja, svoje in the singular; svoji, svoje, svoja in the plural; svoju in the feminine accusative, and so on. There is nothing new to learn about its shape, only about when to reach for it.',
        highlight: 'svoj · svoja · svoje',
      },
      {
        type: 'table',
        title: 'Same Sentence, Two Meanings',
        headers: ['Croatian', 'English', 'Whose?'],
        rows: [
          ['Ivan pere svoj auto.', 'Ivan is washing his car.', 'his own'],
          ['Ivan pere njegov auto.', 'Ivan is washing his car.', 'someone else’s'],
          ['Ana voli svoju sestru.', 'Ana loves her sister.', 'her own'],
          ['Ana voli njezinu sestru.', 'Ana loves her sister.', 'another woman’s'],
          ['Uzeli su svoje stvari.', 'They took their things.', 'their own'],
          ['Uzeli su njihove stvari.', 'They took their things.', 'other people’s'],
        ],
      },
      {
        type: 'rule',
        title: 'With "I", It Is Simply More Natural',
        body: 'For the first and second person there is no ambiguity to resolve — "moju knjigu" can only mean mine — so both are grammatical. But "Uzimam svoju knjigu" is what a Croatian says, and "Uzimam moju knjigu" sounds slightly foreign in exactly the way that is hard to explain. When the owner is the subject, reach for svoj.',
        highlight: 'Uzimam svoju knjigu.',
      },
      {
        type: 'example',
        title: 'Svoj in Everyday Sentences',
        items: [
          {
            hr: 'Volim svoj posao.',
            en: 'I love my job.',
            note: 'I am the subject, so svoj',
          },
          {
            hr: 'Zaboravio sam svoj mobitel kod kuće.',
            en: 'I left my phone at home.',
            note: 'a man speaking; a woman says zaboravila',
          },
          {
            hr: 'Ona pomaže svojoj majci.',
            en: 'She helps her (own) mother.',
            note: 'dative — svojoj, matching majci',
          },
          {
            hr: 'Vozi svojim autom, ne mojim.',
            en: 'He drives his own car, not mine.',
            note: 'instrumental — svojim',
          },
          {
            hr: 'Djeca su donijela svoje knjige.',
            en: 'The children brought their books.',
            note: 'their own — the subject is the children',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Ivan is washing his OWN car. Which is correct?',
        options: ['Ivan pere njegov auto.', 'Ivan pere svoj auto.', 'Ivan pere moj auto.'],
        correct: 1,
        explanation:
          'The owner is the subject of the sentence, so it must be "svoj". "Njegov auto" would say Ivan is washing some other man\'s car — a perfectly good sentence, just a different one.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Ana je uzela ___ torbu." (Ana took her own bag.)',
        options: ['njezinu', 'svoju', 'njenu', 'moju'],
        correct: 1,
        explanation:
          'Ana is the subject and the bag is hers, so "svoju". "Njezinu" and "njenu" both mean another woman\'s bag — they are correct Croatian, but they change who the bag belongs to.',
      },
      {
        type: 'summary',
        title: 'Svoj — Key Takeaways',
        points: [
          'svoj means the owner IS the subject of the sentence',
          'njegov / njezin / njihov mean the owner is somebody else',
          'It works for every person: my own, your own, their own',
          'It declines exactly like moj — svoj, svoja, svoje',
          'With I and you it is not required but is far more natural',
          'Getting it wrong does not sound wrong — it says something else',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Plural Cases
  // ─────────────────────────────────────────────────────────
  {
    id: 'plural-cases',
    title: 'Plural Cases',
    subtitle: 'Objects and possession in the plural — and the famous long -a',
    icon: '📦',
    level: 'A2',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Plural Grows Up',
        body: 'A1 gave you the plural as a SUBJECT: knjige, studenti, sela. That is one form out of seven. Here are the two you need next — the plural object and the plural possessive — plus the one shared ending that covers the other three at a stroke.',
        icon: '📦',
      },
      {
        type: 'rule',
        title: 'Accusative Plural: -e, -e, -a',
        body: 'Masculine takes -e, feminine takes -e, neuter takes -a. Vidim studente. (I see the students.) Čitam knjige. (I am reading books.) Vidim sela. (I see the villages.) Note that the animacy rule from the singular disappears here: in the plural, a living masculine noun and a non-living one take the same -e.',
        highlight: 'studente · knjige · sela',
      },
      {
        type: 'table',
        title: 'Subject and Object in the Plural',
        headers: ['Gender', 'Subject', 'Object', 'Example'],
        rows: [
          ['Masculine', 'studenti', 'studente', 'Vidim studente.'],
          ['Masculine', 'gradovi', 'gradove', 'Volim gradove.'],
          ['Feminine', 'knjige', 'knjige', 'Čitam knjige.'],
          ['Neuter', 'sela', 'sela', 'Vidim sela.'],
        ],
      },
      {
        type: 'rule',
        title: 'Feminine and Neuter Do Not Change',
        body: 'A useful shortcut: in the plural, feminine and neuter look identical whether they are the subject or the object. knjige is knjige either way; sela is sela either way. Only masculine nouns change shape, from -i to -e. That halves the work.',
        highlight: 'only masculine changes',
      },
      {
        type: 'rule',
        title: 'Genitive Plural: the Long -a',
        body: 'The genitive plural is the one everybody notices, because it is a long, stressed -a on almost everything. student → studenata. grad → gradova. knjiga → knjiga. selo → sela. It is what you hear after numbers from five upwards (pet studenata), after quantity words (puno knjiga), and wherever the genitive would be used in the singular.',
        highlight: 'pet studenata · puno knjiga',
      },
      {
        type: 'rule',
        title: 'Why Masculine Sometimes Gains a Syllable',
        body: 'Croatian dislikes ending a word on a consonant cluster, so a helping "a" slides in before the ending. student → studenata (not "studentta"). sestra → sestara. pismo → pisama. This is the same fleeting "a" you met in "dobar → dobra", running the other way. Not every noun needs it — grad → gradova has no cluster to break up.',
        highlight: 'student → studenata',
      },
      {
        type: 'table',
        title: 'Genitive Plural',
        headers: ['Noun', 'Genitive plural', 'In use'],
        rows: [
          ['student', 'studenata', 'pet studenata'],
          ['grad', 'gradova', 'mnogo gradova'],
          ['knjiga', 'knjiga', 'deset knjiga'],
          ['sestra', 'sestara', 'nemam sestara'],
          ['selo', 'sela', 'puno sela'],
          ['pismo', 'pisama', 'nekoliko pisama'],
        ],
      },
      {
        type: 'rule',
        title: 'The Other Three Share One Ending',
        body: 'Here is the reward for getting this far. In the plural, the dative, locative and instrumental collapse into a single ending: -ima for masculine and neuter, -ama for feminine. studentima, gradovima, morima; knjigama, sestrama. Three cases, one form — so "s prijateljima", "u gradovima" and "dajem studentima" all use the same shape.',
        highlight: '-ima (m/n) · -ama (f)',
      },
      {
        type: 'example',
        title: 'The Plural in Whole Sentences',
        items: [
          {
            hr: 'Poznajem te studente.',
            en: 'I know those students.',
            note: 'accusative plural — studente',
          },
          {
            hr: 'U razredu ima dvadeset učenika.',
            en: 'There are twenty pupils in the class.',
            note: 'genitive plural after a number above four',
          },
          {
            hr: 'Idem na more s prijateljima.',
            en: 'I am going to the seaside with friends.',
            note: 'instrumental plural — prijateljima',
          },
          {
            hr: 'Živim u Zagrebu već pet godina.',
            en: 'I have lived in Zagreb for five years.',
            note: 'godina → godina, genitive plural after pet',
          },
          {
            hr: 'Pišem pisma prijateljima u Hrvatskoj.',
            en: 'I write letters to friends in Croatia.',
            note: 'accusative object, dative receiver, both plural',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I see the students"? (subject form: studenti)',
        options: ['Vidim studenti.', 'Vidim studente.', 'Vidim studenata.', 'Vidim studentima.'],
        correct: 1,
        explanation:
          'The accusative plural of a masculine noun ends in -e: studente. "Studenata" is the genitive plural — right after a number or a quantity word — and "studentima" covers the dative, locative and instrumental.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "U razredu ima deset ___." (There are ten pupils in the class — učenik.)',
        options: ['učenici', 'učenike', 'učenika', 'učenicima'],
        correct: 2,
        explanation:
          'From five upwards a counted noun takes the genitive plural, which for "učenik" is "učenika". The same ending appears after quantity words: puno učenika.',
      },
      {
        type: 'summary',
        title: 'Plural Cases — Key Takeaways',
        points: [
          'Accusative plural: masculine -e, feminine -e, neuter -a',
          'Feminine and neuter look the same as subject and object',
          'Genitive plural is the long -a: studenata, knjiga, gradova',
          'A helping "a" breaks up consonant clusters: sestra → sestara',
          'Dative, locative and instrumental plural share one ending: -ima / -ama',
          'The genitive plural is what follows numbers from five up',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // How Much, How Many
  // ─────────────────────────────────────────────────────────
  {
    id: 'quantity',
    title: 'How Much, How Many',
    subtitle: 'Quantity words, and the case they all demand',
    icon: '⚖️',
    level: 'A2',
    duration: '~5 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'One Rule Covers Them All',
        body: 'Croatian has a dozen ways to say "a lot", "a little", "several", "too much" — and every single one of them takes the genitive. Learn the rule once and the whole family comes with it.',
        icon: '⚖️',
      },
      {
        type: 'rule',
        title: 'Quantity + Genitive, Always',
        body: 'puno / mnogo (a lot), malo (a little), nekoliko (several), dosta (enough, quite a lot), previše (too much), koliko (how much), više (more), manje (less). Every one of them is followed by the genitive. puno vremena. malo vode. nekoliko knjiga. previše posla.',
        highlight: 'puno · malo · nekoliko · dosta · previše',
      },
      {
        type: 'rule',
        title: 'Countable or Not Decides Singular or Plural',
        body: 'The case is always genitive; only the number changes. If you can count it, use the genitive PLURAL: puno ljudi, malo knjiga, nekoliko studenata. If you cannot, use the genitive SINGULAR: puno vremena, malo vode, previše posla. English makes the same distinction with "many" and "much" — you already have the instinct.',
        highlight: 'puno ljudi vs. puno vremena',
      },
      {
        type: 'table',
        title: 'Countable and Uncountable',
        headers: ['Quantity', 'Countable (plural)', 'Uncountable (singular)'],
        rows: [
          ['puno / mnogo', 'puno ljudi', 'puno vremena'],
          ['malo', 'malo prijatelja', 'malo vode'],
          ['nekoliko', 'nekoliko knjiga', '—'],
          ['dosta', 'dosta gostiju', 'dosta kruha'],
          ['previše', 'previše turista', 'previše posla'],
          ['koliko', 'koliko godina', 'koliko novca'],
        ],
      },
      {
        type: 'rule',
        title: 'The Verb Stays Singular',
        body: 'A quantity phrase looks plural but behaves as a single unit, so the verb stays in the third person singular. Puno ljudi DOLAZI. (A lot of people are coming.) Nekoliko studenata JE došlo. This catches English speakers out constantly, because English agrees with the noun instead.',
        highlight: 'Puno ljudi dolazi.',
      },
      {
        type: 'rule',
        title: 'Measures Work the Same Way',
        body: 'Anything that measures takes the genitive too, which is why a shopping list sounds the way it does. kilogram jabuka, litra mlijeka, čaša vode, šalica kave, komad kruha, boca vina. You met this at A1 in a café; it is the same rule, and now you can see it is one rule rather than a set of phrases.',
        highlight: 'kilogram jabuka',
      },
      {
        type: 'example',
        title: 'Quantities in Use',
        items: [
          {
            hr: 'Imam puno posla danas.',
            en: 'I have a lot of work today.',
            note: 'uncountable → genitive singular',
          },
          {
            hr: 'Ovdje ima puno turista ljeti.',
            en: 'There are a lot of tourists here in summer.',
            note: 'countable → genitive plural, verb stays singular',
          },
          {
            hr: 'Molim vas malo vode.',
            en: 'A little water, please.',
            note: 'voda → vode',
          },
          {
            hr: 'Imam nekoliko pitanja.',
            en: 'I have a few questions.',
            note: 'pitanje → pitanja',
          },
          {
            hr: 'Koliko imaš braće i sestara?',
            en: 'How many brothers and sisters do you have?',
            note: 'koliko + genitive plural, twice',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "a lot of people"? (subject form: ljudi)',
        options: ['puno ljudi', 'puno ljude', 'puno ljudima', 'puno ljud'],
        correct: 0,
        explanation:
          'Quantity words take the genitive, and the genitive plural of "ljudi" happens to look the same as the subject form. That coincidence is why this one is worth checking rather than guessing.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is correct?',
        options: ['Puno ljudi dolaze.', 'Puno ljudi dolazi.', 'Puno ljudi dolazimo.'],
        correct: 1,
        explanation:
          'A quantity phrase counts as one unit, so the verb stays in the third person singular: dolazi. English agrees with the noun and says "are coming", which is exactly why this trips learners up.',
      },
      {
        type: 'summary',
        title: 'Quantity — Key Takeaways',
        points: [
          'Every quantity word takes the genitive — no exceptions',
          'puno, mnogo, malo, nekoliko, dosta, previše, koliko, više, manje',
          'Countable → genitive plural; uncountable → genitive singular',
          'The verb stays singular: Puno ljudi dolazi.',
          'Measures follow the same rule: kilogram jabuka, litra mlijeka',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Ordinals and Dates
  // ─────────────────────────────────────────────────────────
  {
    id: 'ordinals-dates',
    title: 'Ordinals and Dates',
    subtitle: 'First, second, third — and how to give a date',
    icon: '📅',
    level: 'A2',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Numbers That Behave Like Adjectives',
        body: 'Counting numbers are mostly fixed. Ordinals — first, second, third — are adjectives, so they agree in gender, number and case like any other describing word. That makes them easier than they look: you already know the endings.',
        icon: '📅',
      },
      {
        type: 'table',
        title: 'The Ordinals',
        headers: ['Number', 'Ordinal', 'Number', 'Ordinal'],
        rows: [
          ['1', 'prvi', '7', 'sedmi'],
          ['2', 'drugi', '8', 'osmi'],
          ['3', 'treći', '9', 'deveti'],
          ['4', 'četvrti', '10', 'deseti'],
          ['5', 'peti', '11', 'jedanaesti'],
          ['6', 'šesti', '20', 'dvadeseti'],
        ],
      },
      {
        type: 'rule',
        title: 'They Agree Like Adjectives',
        body: 'prvi dan (first day, masculine), prva godina (first year, feminine), prvo mjesto (first place, neuter). Plural: prvi dani, prve godine, prva mjesta. Nothing new — the same -i / -a / -o pattern you have been using since A1.',
        highlight: 'prvi · prva · prvo',
      },
      {
        type: 'rule',
        title: 'Compound Ordinals Change Only the Last Word',
        body: 'For numbers past twenty, only the final element becomes an ordinal. dvadeset prvi (twenty-first). trideset drugi (thirty-second). sto pedeset treći (one hundred and fifty-third). The rest of the number stays as it is, which is the same shortcut English uses.',
        highlight: 'dvadeset prvi',
      },
      {
        type: 'table',
        title: 'The Months',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['siječanj', 'January', 'srpanj', 'July'],
          ['veljača', 'February', 'kolovoz', 'August'],
          ['ožujak', 'March', 'rujan', 'September'],
          ['travanj', 'April', 'listopad', 'October'],
          ['svibanj', 'May', 'studeni', 'November'],
          ['lipanj', 'June', 'prosinac', 'December'],
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Month Names Are Its Own',
        body: 'Unlike most European languages, Croatian did not borrow the Latin month names — it kept the old Slavic ones, and they describe the year. "Listopad" is leaf-fall, October. "Travanj" is the grass month, April. "Srpanj" comes from the sickle, July. They are worth learning as words rather than as translations, because there is nothing to hook them onto in English.',
        highlight: 'listopad = leaf-fall',
      },
      {
        type: 'rule',
        title: 'Giving a Date',
        body: 'To say what the date IS, use the plain ordinal: Danas je petnaesti lipnja. (Today is the fifteenth of June.) The month goes into the genitive — lipanj becomes lipnja. To say something happens ON a date, put the ordinal into the genitive too: Rođen sam petnaestog lipnja. (I was born on the fifteenth of June.)',
        highlight: 'petnaesti lipnja / petnaestog lipnja',
      },
      {
        type: 'example',
        title: 'Dates and Order',
        items: [
          {
            hr: 'Koji je danas datum?',
            en: 'What is the date today?',
            note: 'the standard question',
          },
          {
            hr: 'Danas je prvi svibnja.',
            en: 'Today is the first of May.',
            note: 'svibanj → svibnja',
          },
          {
            hr: 'Rođendan mi je dvadeset trećeg ožujka.',
            en: 'My birthday is on the twenty-third of March.',
            note: 'on a date → genitive: trećeg',
          },
          {
            hr: 'Ovo mi je prvi put u Hrvatskoj.',
            en: 'This is my first time in Croatia.',
            note: 'prvi agreeing with put',
          },
          {
            hr: 'Stanujem na trećem katu.',
            en: 'I live on the third floor.',
            note: 'locative — trećem',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "the first year"? ("godina" is feminine.)',
        options: ['prvi godina', 'prva godina', 'prvo godina', 'jedan godina'],
        correct: 1,
        explanation:
          'An ordinal agrees like an adjective, and "godina" is feminine, so it takes -a: prva godina. "Jedan" is the counting number one, not the ordinal first.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "I was born on the fifth of June"?',
        options: [
          'Rođen sam peti lipanj.',
          'Rođen sam peti lipnja.',
          'Rođen sam petog lipnja.',
          'Rođen sam petom lipnju.',
        ],
        correct: 2,
        explanation:
          'Something happening ON a date puts both the ordinal and the month into the genitive: petog lipnja. "Peti lipnja" is how you state what the date IS, not when something happened.',
      },
      {
        type: 'summary',
        title: 'Ordinals and Dates — Key Takeaways',
        points: [
          'Ordinals are adjectives and agree in gender, number and case',
          'prvi, drugi, treći, četvrti, peti… — only the last word changes in compounds',
          'Croatian kept the old Slavic month names: siječanj, veljača, ožujak…',
          'What the date is: Danas je petnaesti lipnja.',
          'When something happened: petnaestog lipnja — both words genitive',
          'The month is always genitive after a date',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Asking and Denying in the Past
  // ─────────────────────────────────────────────────────────
  {
    id: 'past-questions-negation',
    title: 'Questions and Negation in the Past',
    subtitle: 'Did you? I did not — and where the little words go',
    icon: '🕰️',
    level: 'A2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'You Can Tell a Story — Now Discuss One',
        body: 'The past tense lesson gave you the statement: Radio sam. What it did not give you is how to ask about it or deny it, and those need the auxiliary to move. This is a short lesson about word order, and word order is where the past tense actually trips people.',
        icon: '🕰️',
      },
      {
        type: 'rule',
        title: 'A Reminder of the Shape',
        body: 'The past is built from two pieces: a short form of "biti" (sam, si, je, smo, ste, su) plus the participle ending in -o for a man, -la for a woman, -lo for a neuter subject, and -li / -le in the plural. Radio sam. (a man worked) Radila sam. (a woman worked) Radili smo. (we worked)',
        highlight: 'sam + radio / radila',
      },
      {
        type: 'rule',
        title: 'The Auxiliary Is a Clitic',
        body: 'That little "sam" is a clitic, like "se" and "me" — so it takes second position and never opens a sentence. Radio sam. (participle first) Ja sam radio. (pronoun first) Jučer sam radio. (time word first) You can say the same thing three ways; what never changes is that "sam" comes second.',
        highlight: 'Jučer sam radio.',
      },
      {
        type: 'rule',
        title: 'Negation: nisam + participle',
        body: 'To deny it, swap the auxiliary for its fused negative: nisam, nisi, nije, nismo, niste, nisu — the same forms you learned at A1. Nisam radio. (I did not work.) Nije došla. (She did not come.) Nismo znali. (We did not know.) And unlike the positive auxiliary, the negative one CAN open a sentence, because it is a full word rather than a clitic.',
        highlight: 'Nisam radio.',
      },
      {
        type: 'table',
        title: 'Statement, Denial, Question',
        headers: ['', 'Croatian', 'English'],
        rows: [
          ['Statement', 'Radio sam.', 'I worked.'],
          ['Denial', 'Nisam radio.', 'I did not work.'],
          ['Question', 'Jesam li radio?', 'Did I work?'],
          ['Statement', 'Došla je.', 'She came.'],
          ['Denial', 'Nije došla.', 'She did not come.'],
          ['Question', 'Je li došla?', 'Did she come?'],
        ],
      },
      {
        type: 'rule',
        title: 'Questions Use the Long Auxiliary',
        body: 'To ask, use the full form — jesam, jesi, je, jesmo, jeste, jesu — put it first, and follow it with "li". Jesi li radio? (Did you work?) Jeste li bili u Zagrebu? (Have you been to Zagreb?) The third person is the one to memorise, because it is simply "Je li…?": Je li došla? Je li to točno?',
        highlight: 'Jesi li radio?',
      },
      {
        type: 'rule',
        title: 'With a Question Word, Drop the Li',
        body: 'If the sentence already opens with a question word, "li" is not needed and the clitic goes straight after it. Gdje si bio? (Where were you?) Što si rekao? (What did you say?) Kada su došli? (When did they arrive?) Zašto nisi javio? (Why did you not let me know?) One rule: "li" only appears in yes/no questions.',
        highlight: 'Gdje si bio?',
      },
      {
        type: 'example',
        title: 'Talking About Yesterday',
        items: [
          {
            hr: 'Jesi li jučer bio na poslu?',
            en: 'Were you at work yesterday?',
            note: 'to a man; to a woman: bila',
          },
          {
            hr: 'Nisam, bio sam bolestan.',
            en: 'No, I was ill.',
            note: 'nisam answers on its own',
          },
          {
            hr: 'Što ste radili vikendom?',
            en: 'What did you do at the weekend?',
            note: 'question word, so no li',
          },
          {
            hr: 'Nismo ništa posebno radili.',
            en: 'We did not do anything special.',
            note: 'ništa + a negated verb, as always',
          },
          {
            hr: 'Je li Ana već stigla?',
            en: 'Has Ana arrived yet?',
            note: 'Je li — the form you will use most',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How does a woman say "I did not work"?',
        options: ['Ne sam radila.', 'Nisam radila.', 'Nisam radio.', 'Ne radila sam.'],
        correct: 1,
        explanation:
          '"Biti" fuses with the negation into "nisam", and a female subject takes the participle "radila". "Radio" is the form a man uses.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly asks "Where were you?" (to a man)',
        options: ['Gdje li si bio?', 'Gdje si bio?', 'Si gdje bio?', 'Jesi li gdje bio?'],
        correct: 1,
        explanation:
          'A question word already makes it a question, so "li" is not used and the clitic follows straight after: Gdje si bio? "Li" belongs only in yes/no questions.',
      },
      {
        type: 'summary',
        title: 'Past Questions and Negation — Key Takeaways',
        points: [
          'The auxiliary is a clitic: second position, never first',
          'Negation uses the fused forms: nisam, nisi, nije, nismo, niste, nisu',
          'A negated auxiliary CAN open a sentence: Nisam radio.',
          'Yes/no questions use the long form plus li: Jesi li radio?',
          'Je li…? is the third-person form you will use constantly',
          'With a question word there is no li: Gdje si bio?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Adverbs
  // ─────────────────────────────────────────────────────────
  {
    id: 'adverbs',
    title: 'Adverbs',
    subtitle: 'How, how often, when — describing the verb instead of the noun',
    icon: '🏃',
    level: 'A2',
    duration: '~6 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Easiest Word Class in Croatian',
        body: 'Adjectives agree with their noun in gender, number and case — three things to get right. Adverbs describe the verb instead, and they never change at all. If you can form one, you can use it anywhere.',
        icon: '🏃',
      },
      {
        type: 'rule',
        title: 'Take the Neuter Form of the Adjective',
        body: 'That is the whole formation rule. brz (fast) → brzo. spor (slow) → sporo. lijep → lijepo. tih (quiet) → tiho. glasan → glasno. English adds -ly; Croatian just uses the neuter adjective and stops changing it. Govori brzo. Pjeva lijepo. Vozi sporo.',
        highlight: 'brz → brzo',
      },
      {
        type: 'rule',
        title: 'Same Word, Two Jobs',
        body: 'Because the adverb IS the neuter form, one word does both jobs and the sentence tells you which. Vino je dobro. (The wine is good — adjective, agreeing with the neuter "vino".) Govoriš dobro. (You speak well — adverb, describing how.) There is nothing to distinguish; context does it, and it always works.',
        highlight: 'dobro = good and well',
      },
      {
        type: 'table',
        title: 'From Adjective to Adverb',
        headers: ['Adjective', 'Adverb', 'Example'],
        rows: [
          ['dobar (good)', 'dobro', 'Govoriš dobro.'],
          ['loš (bad)', 'loše', 'Spavao sam loše.'],
          ['brz (fast)', 'brzo', 'Hodaš brzo.'],
          ['spor (slow)', 'sporo', 'Vozi sporo.'],
          ['tih (quiet)', 'tiho', 'Govori tiho.'],
          ['lak (easy)', 'lako', 'To je lako.'],
        ],
      },
      {
        type: 'rule',
        title: 'Comparing Adverbs',
        body: 'Adverbs compare like adjectives — brže (faster), sporije (more slowly), ljepše (more beautifully). Four are irregular and very common: dobro → bolje (better), loše → gore (worse), mnogo → više (more), malo → manje (less). Govorim bolje nego prošle godine.',
        highlight: 'dobro → bolje',
      },
      {
        type: 'table',
        title: 'How Often',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['uvijek', 'always', 'rijetko', 'rarely'],
          ['često', 'often', 'nikad(a)', 'never'],
          ['obično', 'usually', 'ponekad', 'sometimes'],
          ['svaki dan', 'every day', 'katkad', 'now and then'],
        ],
      },
      {
        type: 'rule',
        title: 'Nikad Still Needs a Negative Verb',
        body: 'Frequency adverbs go before the verb: Uvijek pijem kavu ujutro. Često idemo na more. But "nikad" is a negative word, so — as at A1 — the verb has to be negated too. Nikad NE pijem kavu navečer. Leaving the verb positive is not a milder statement; it is simply not Croatian.',
        highlight: 'Nikad ne pijem kavu.',
      },
      {
        type: 'example',
        title: 'Adverbs at Work',
        items: [
          {
            hr: 'Govorite li sporije, molim vas?',
            en: 'Could you speak more slowly, please?',
            note: 'the most useful sentence in this lesson',
          },
          {
            hr: 'Obično ustajem u sedam.',
            en: 'I usually get up at seven.',
            note: 'frequency adverb before the verb',
          },
          {
            hr: 'Danas se osjećam puno bolje.',
            en: 'I feel much better today.',
            note: 'bolje — irregular comparative',
          },
          {
            hr: 'Rijetko idem u kino.',
            en: 'I rarely go to the cinema.',
            note: 'rijetko is not negative, so no extra ne',
          },
          {
            hr: 'Nikad nisam bio u Dubrovniku.',
            en: 'I have never been to Dubrovnik.',
            note: 'nikad + nisam — both negative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "You speak well"?',
        options: ['Govoriš dobar.', 'Govoriš dobro.', 'Govoriš dobra.', 'Govoriš dobri.'],
        correct: 1,
        explanation:
          'An adverb is the neuter form of the adjective and never changes: dobro. "Dobar" and "dobra" are adjective forms and would have to agree with a noun, but there is no noun here to agree with.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "I never drink coffee in the evening"?',
        options: [
          'Nikad pijem kavu navečer.',
          'Nikad ne pijem kavu navečer.',
          'Ne nikad pijem kavu navečer.',
        ],
        correct: 1,
        explanation:
          '"Nikad" is a negative word, so the verb must be negated as well: nikad ne pijem. This is the same double-negation rule you met at A1 with nitko and ništa.',
      },
      {
        type: 'summary',
        title: 'Adverbs — Key Takeaways',
        points: [
          'An adverb is the neuter form of the adjective, and never changes',
          'brz → brzo, lijep → lijepo, glasan → glasno',
          'The same word serves as adjective and adverb: Vino je dobro / Govoriš dobro',
          'Irregular comparatives: dobro → bolje, loše → gore, mnogo → više, malo → manje',
          'uvijek, često, obično, ponekad, rijetko, nikad',
          'nikad demands a negated verb: Nikad ne pijem kavu.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Joining Sentences
  // ─────────────────────────────────────────────────────────
  {
    id: 'conjunctions',
    title: 'Joining Sentences',
    subtitle: 'and, but, because, although — and the a/ali distinction',
    icon: '🔗',
    level: 'A2',
    duration: '~6 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'This Is What A2 Actually Is',
        body: 'The difference between A1 and A2 is not vocabulary — it is whether your sentences connect. "I live in Zagreb. I work in a bank. I like it." becomes "I live in Zagreb, where I work in a bank, because I like the city." These are the words that do that, and there are only about a dozen worth learning.',
        icon: '🔗',
      },
      {
        type: 'table',
        title: 'The Essential Connectors',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['i', 'and', 'Kava i kolač.'],
          ['pa', 'and then, so', 'Došao je pa smo jeli.'],
          ['ili', 'or', 'Čaj ili kava?'],
          ['a', 'and, whereas', 'Ja radim, a on spava.'],
          ['ali', 'but', 'Volio bih, ali ne mogu.'],
          ['jer', 'because', 'Ne mogu jer radim.'],
          ['iako', 'although', 'Iako pada kiša, idemo.'],
          ['ako', 'if', 'Ako možeš, dođi.'],
        ],
      },
      {
        type: 'rule',
        title: 'The One Worth Real Attention: a vs. ali',
        body: 'Both come out as "but" in English, and they are not interchangeable. "A" sets two things side by side — whereas, while, and-for-its-part. Ja pijem kavu, a on pije čaj. (I drink coffee, and he drinks tea.) "Ali" marks a genuine obstacle or contradiction. Htio bih doći, ali ne mogu. (I would like to come, but I cannot.) If nothing is being contradicted, use "a".',
        highlight: 'a = whereas · ali = but',
      },
      {
        type: 'rule',
        title: 'After a Negative, Use Nego',
        body: 'When you deny one thing and replace it with another, Croatian uses "nego" (or "već"), not "ali". Nije crno nego bijelo. (It is not black but white.) Ne živim u Splitu nego u Zagrebu. Using "ali" there is a very recognisable learner error — English uses "but" for both, Croatian splits them.',
        highlight: 'Nije crno nego bijelo.',
      },
      {
        type: 'rule',
        title: 'Because: jer and zato što',
        body: 'Both mean "because" and both are correct. "Jer" is the everyday one and cannot start a sentence: Ne idem jer sam umoran. "Zato što" is slightly heavier and can open one: Zato što sam umoran, ne idem. To ask why, use "zašto"; to answer, "zato" on its own means "that is why" — Zašto? — Zato.',
        highlight: 'jer · zato što',
      },
      {
        type: 'rule',
        title: 'Commas Are Not Optional',
        body: 'Croatian puts a comma before ali, a, nego, jer, iako and before a clause that follows the main one. Radim, ali nisam umoran. Ne idem, jer pada kiša. Iako je kasno, idemo. The rule that covers most cases: if the second half could stand as its own sentence, it gets a comma.',
        highlight: 'Radim, ali nisam umoran.',
      },
      {
        type: 'example',
        title: 'Connected Sentences',
        items: [
          {
            hr: 'Živim u Zagrebu i radim u banci.',
            en: 'I live in Zagreb and work in a bank.',
            note: 'i joins two equal things — no comma',
          },
          {
            hr: 'Ja volim more, a sestra voli planine.',
            en: 'I love the sea, and my sister loves the mountains.',
            note: 'a — side by side, not a contradiction',
          },
          {
            hr: 'Htio bih doći, ali nemam vremena.',
            en: 'I would like to come, but I have no time.',
            note: 'ali — a genuine obstacle',
          },
          {
            hr: 'Ne idem van jer pada kiša.',
            en: 'I am not going out because it is raining.',
            note: 'jer never opens a sentence',
          },
          {
            hr: 'Iako je hladno, idemo u šetnju.',
            en: 'Although it is cold, we are going for a walk.',
            note: 'iako can open one',
          },
          {
            hr: 'Ako budeš slobodan, javi mi.',
            en: 'If you are free, let me know.',
            note: 'ako + a future condition',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Ja pijem kavu, ___ on pije čaj." (I drink coffee, and he drinks tea.)',
        options: ['ali', 'a', 'nego', 'jer'],
        correct: 1,
        explanation:
          'Nothing is being contradicted — the two facts simply sit side by side — so "a" is the right connector. "Ali" would suggest the second half is an obstacle to the first.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Ne živim u Splitu ___ u Zagrebu."',
        options: ['ali', 'a', 'nego', 'i'],
        correct: 2,
        explanation:
          'After a negative, the replacement is introduced with "nego" (or "već"). English uses "but" for this too, which is exactly why "ali" feels right here and is not.',
      },
      {
        type: 'summary',
        title: 'Conjunctions — Key Takeaways',
        points: [
          'i, pa, ili, a, ali, jer, zato što, iako, ako, dok, kad',
          'a sets two things side by side; ali marks a real obstacle',
          'After a negative, use nego or već — not ali',
          'jer cannot open a sentence; zato što can',
          'Commas go before ali, a, nego, jer, iako',
          'Connecting sentences is what separates A2 from A1',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Relative Clauses with Koji
  // ─────────────────────────────────────────────────────────
  {
    id: 'relative-koji',
    title: 'The Word "Koji"',
    subtitle: 'The man who…, the book which…, the town where I live',
    icon: '🧵',
    level: 'A2',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'One Word for Who, Which and That',
        body: 'English has three — who, which, that — and drops them half the time. Croatian has one word, "koji", it is never dropped, and it changes shape. That sounds harder until you see the rule, which is genuinely just two questions asked in order.',
        icon: '🧵',
      },
      {
        type: 'rule',
        title: 'Two Questions, In This Order',
        body: 'First: what is it referring back to? That fixes its GENDER and NUMBER. Second: what job does it do inside its own clause? That fixes its CASE. Čovjek koji govori — čovjek is masculine singular, and it is the subject of "govori", so: koji. Knjiga koju čitam — knjiga is feminine singular, and it is the object of "čitam", so: koju.',
        highlight: 'gender from outside, case from inside',
      },
      {
        type: 'table',
        title: 'Same Noun, Different Jobs',
        headers: ['Croatian', 'English', 'Why that form'],
        rows: [
          ['Žena koja radi ovdje', 'The woman who works here', 'feminine, subject'],
          ['Žena koju poznajem', 'The woman I know', 'feminine, object'],
          ['Žena kojoj sam pisao', 'The woman I wrote to', 'feminine, dative'],
          ['Grad koji volim', 'The city I love', 'masculine, object'],
          ['Grad u kojem živim', 'The city I live in', 'masculine, locative'],
          ['Ljudi koji govore hrvatski', 'People who speak Croatian', 'plural, subject'],
        ],
      },
      {
        type: 'rule',
        title: 'It Is Never Left Out',
        body: 'English happily says "the book I am reading" with nothing joining the halves. Croatian cannot: knjiga KOJU čitam. Likewise "the woman I know" is žena KOJU poznajem. If you find yourself translating an English sentence and there is no joining word, that is exactly where "koji" belongs.',
        highlight: 'the book I read → knjiga koju čitam',
      },
      {
        type: 'rule',
        title: 'The Preposition Comes First',
        body: 'When the clause needs a preposition, it goes in front of "koji" and decides its case — never at the end, the way English allows. Grad u kojem živim. (The city I live in.) Žena s kojom radim. (The woman I work with.) Prijatelj kojem sam pisao. (The friend I wrote to.) English can strand a preposition at the end of a clause; Croatian never does.',
        highlight: 'Grad u kojem živim.',
      },
      {
        type: 'rule',
        title: 'The Comma Rule',
        body: 'If the clause is essential to identifying which one you mean, no comma: Čovjek koji stoji ondje je moj brat. If it is extra information you could remove, use commas: Moj brat, koji živi u Splitu, dolazi sutra. This is the same distinction English makes with "that" and ", which" — you already have the instinct.',
        highlight: 'essential = no comma',
      },
      {
        type: 'example',
        title: 'Koji in Real Sentences',
        items: [
          {
            hr: 'Ovo je knjiga koju sam ti spominjao.',
            en: 'This is the book I mentioned to you.',
            note: 'feminine object → koju',
          },
          {
            hr: 'Poznaješ li ženu koja radi ovdje?',
            en: 'Do you know the woman who works here?',
            note: 'feminine subject → koja',
          },
          {
            hr: 'Zagreb je grad u kojem sam odrastao.',
            en: 'Zagreb is the city I grew up in.',
            note: 'preposition first, then the locative',
          },
          {
            hr: 'Imam prijatelje koji govore hrvatski.',
            en: 'I have friends who speak Croatian.',
            note: 'plural subject → koji',
          },
          {
            hr: 'To je auto kojim se vozim na posao.',
            en: 'That is the car I drive to work.',
            note: 'instrumental → kojim',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Ovo je knjiga ___ čitam." (This is the book I am reading.)',
        options: ['koji', 'koja', 'koju', 'kojoj'],
        correct: 2,
        explanation:
          '"Knjiga" is feminine, and inside its own clause it is the OBJECT of "čitam", so it takes the feminine accusative: koju. "Koja" would be right only if the book were doing something itself.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "the city I live in"?',
        options: [
          'grad koji živim u',
          'grad u kojem živim',
          'grad kojem živim u',
          'grad koji u živim',
        ],
        correct: 1,
        explanation:
          'The preposition goes in FRONT of "koji" and sets its case — here the locative, because "u" plus position takes the locative. Croatian never leaves a preposition stranded at the end the way English does.',
      },
      {
        type: 'summary',
        title: 'Koji — Key Takeaways',
        points: [
          'Gender and number come from the noun it refers back to',
          'Case comes from its job inside its own clause',
          'It is never omitted, even where English drops it',
          'The preposition goes first and fixes the case: u kojem, s kojom',
          'No comma when the clause identifies which one; commas when it is extra',
          'One word covers who, which and that',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Someone, Anyone, Everyone
  // ─────────────────────────────────────────────────────────
  {
    id: 'indefinites',
    title: 'Someone, No One, Everyone',
    subtitle: 'Three families built from three prefixes',
    icon: '🔎',
    level: 'A2',
    duration: '~5 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'A Pattern, Not a Word List',
        body: 'This looks like twenty words to memorise. It is really three prefixes attached to five question words, and once you see the grid you can build any of them yourself. It is the tidiest corner of Croatian grammar.',
        icon: '🔎',
      },
      {
        type: 'rule',
        title: 'The Three Prefixes',
        body: 'ne- means SOME. ni- means NO. sv- means EVERY. Attach them to tko (who), što (what), gdje (where), kad (when) and you have the whole system: netko, nitko, svatko; nešto, ništa, svašta; negdje, nigdje, svugdje; nekad, nikad, uvijek.',
        highlight: 'ne- = some · ni- = no · sv- = every',
      },
      {
        type: 'table',
        title: 'The Grid',
        headers: ['Question', 'some (ne-)', 'no (ni-)', 'every (sv-)'],
        rows: [
          ['tko — who', 'netko', 'nitko', 'svatko'],
          ['što — what', 'nešto', 'ništa', 'svašta / sve'],
          ['gdje — where', 'negdje', 'nigdje', 'svugdje'],
          ['kad — when', 'nekad', 'nikad', 'uvijek'],
          ['koji — which', 'neki', 'nijedan', 'svaki'],
          ['kako — how', 'nekako', 'nikako', '—'],
        ],
      },
      {
        type: 'rule',
        title: 'The ni- Family Demands a Negative Verb',
        body: 'Every word in the ni- column needs the verb negated as well — the double negation you have met since A1. Nitko NE zna. Ništa NE vidim. Nigdje NE idem. Nikad NE kasnim. This is not optional emphasis; without the second negative the sentence is simply ungrammatical.',
        highlight: 'Nitko ne zna.',
      },
      {
        type: 'rule',
        title: 'They Decline',
        body: 'The tko and što words change case like the question words they are built from. netko → nekoga, nekome. nitko → nikoga, nikome. Ne vidim nikoga. (I see nobody — accusative.) Nikome nisam rekao. (I told nobody — dative.) The prefix stays put and the ending does the work.',
        highlight: 'Ne vidim nikoga.',
      },
      {
        type: 'rule',
        title: 'Neki and Svaki Are Adjectives',
        body: '"Neki" (some, a certain) and "svaki" (every, each) agree with their noun like any adjective. neki čovjek, neka žena, neko dijete; svaki dan, svaka godina, svako jutro. "Svaki dan" is one of the most useful phrases at this level, and "nijedan" — not a single one — takes a negated verb like the rest of its family.',
        highlight: 'svaki dan · neka žena',
      },
      {
        type: 'rule',
        title: 'And for "Any at All": bilo',
        body: 'Put "bilo" in front and you get the open version: bilo tko (anyone at all), bilo što (anything at all), bilo gdje (anywhere), bilo kada (any time). Pitaj bilo koga. (Ask anyone.) Idemo bilo gdje. It is a small addition that covers a meaning the three columns do not.',
        highlight: 'bilo tko · bilo što · bilo gdje',
      },
      {
        type: 'example',
        title: 'The Families in Use',
        items: [
          {
            hr: 'Netko te traži.',
            en: 'Someone is looking for you.',
            note: 'ne- — a positive sentence',
          },
          {
            hr: 'Nitko me ne razumije.',
            en: 'Nobody understands me.',
            note: 'ni- — and the verb is negated',
          },
          {
            hr: 'Trebam nešto pojesti.',
            en: 'I need to eat something.',
            note: 'nešto with an infinitive',
          },
          {
            hr: 'Nemam ništa protiv.',
            en: 'I have nothing against it.',
            note: 'nemam is already negative',
          },
          {
            hr: 'Svaki dan učim hrvatski.',
            en: 'I study Croatian every day.',
            note: 'svaki agreeing with dan',
          },
          {
            hr: 'Jesi li bio negdje ljeti?',
            en: 'Did you go anywhere in the summer?',
            note: 'in a question, ne- covers English "anywhere"',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which correctly says "Nobody understands me"?',
        options: [
          'Nitko me razumije.',
          'Nitko me ne razumije.',
          'Netko me ne razumije.',
          'Ne nitko me razumije.',
        ],
        correct: 1,
        explanation:
          'The ni- family requires the verb to be negated too: nitko me NE razumije. "Netko me ne razumije" is correct Croatian but means somebody does not understand me — a different claim.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ dan učim hrvatski." (I study Croatian every day.)',
        options: ['Neki', 'Nijedan', 'Svaki', 'Nikakav'],
        correct: 2,
        explanation:
          '"Svaki" is the sv- word for "every" and agrees with the masculine "dan". "Neki dan" means "the other day" and "nijedan" means not a single one.',
      },
      {
        type: 'summary',
        title: 'Indefinites — Key Takeaways',
        points: [
          'Three prefixes on the question words: ne- some, ni- no, sv- every',
          'netko / nitko / svatko · nešto / ništa / svašta · negdje / nigdje / svugdje',
          'The ni- family always needs a negated verb',
          'They decline: nikoga, nikome, nečega',
          'neki and svaki are adjectives and agree with their noun',
          'bilo tko, bilo što, bilo gdje = anyone, anything, anywhere at all',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // House and Home
  // ─────────────────────────────────────────────────────────
  {
    id: 'house-home',
    title: 'House and Home',
    subtitle: 'Rooms, furniture, and describing where you live',
    icon: '🏠',
    level: 'A2',
    duration: '~6 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'Where Do You Live?',
        body: '"Gdje živiš?" gets asked within minutes of meeting anyone, and the answer is rarely just a city. This lesson gives you the rooms, the furniture, and the sentence patterns to describe a place — and it puts the locative and the prepositions of place straight to work.',
        icon: '🏠',
      },
      {
        type: 'table',
        title: 'Rooms',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['kuća', 'house', 'kupaonica', 'bathroom'],
          ['stan', 'flat, apartment', 'spavaća soba', 'bedroom'],
          ['soba', 'room', 'dnevni boravak', 'living room'],
          ['kuhinja', 'kitchen', 'blagovaonica', 'dining room'],
          ['hodnik', 'hallway', 'balkon', 'balcony'],
          ['vrt', 'garden', 'garaža', 'garage'],
        ],
      },
      {
        type: 'rule',
        title: 'Kuća or Stan?',
        body: 'A "kuća" is a house — a building of your own, usually with a "vrt". A "stan" is a flat in a block, which is how most people in Zagreb and Split live. Both take "u" and the locative: Živim u kući. Živim u stanu. "Dom" is the third word and means home in the emotional sense, not the building.',
        highlight: 'kuća · stan · dom',
      },
      {
        type: 'table',
        title: 'Furniture and Things',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['stol', 'table', 'ormar', 'wardrobe'],
          ['stolica', 'chair', 'polica', 'shelf'],
          ['krevet', 'bed', 'tepih', 'carpet, rug'],
          ['kauč', 'sofa', 'prozor', 'window'],
          ['hladnjak', 'fridge', 'vrata', 'door'],
          ['perilica', 'washing machine', 'zid', 'wall'],
        ],
      },
      {
        type: 'rule',
        title: 'Floors Take an Ordinal',
        body: 'A Croatian flat is described by its floor, and that is an ordinal in the locative: Stanujem na trećem katu. (I live on the third floor.) The ground floor is "prizemlje" — Stan je u prizemlju. "Kat" counts up from there, so the first floor is one flight up, as in British English rather than American.',
        highlight: 'na trećem katu',
      },
      {
        type: 'example',
        title: 'Describing Your Place',
        items: [
          {
            hr: 'Živim u malom stanu u centru grada.',
            en: 'I live in a small flat in the city centre.',
            note: 'two locatives — malom stanu, centru',
          },
          {
            hr: 'Stan ima dvije sobe i veliku kuhinju.',
            en: 'The flat has two rooms and a big kitchen.',
            note: 'imati + accusative',
          },
          {
            hr: 'Iz dnevnog boravka se vidi more.',
            en: 'You can see the sea from the living room.',
            note: 'iz + genitive, and an impersonal se',
          },
          {
            hr: 'Kuhinja je mala, ali svijetla.',
            en: 'The kitchen is small but bright.',
            note: 'ali — a genuine contrast',
          },
          {
            hr: 'Naša kuća ima vrt i garažu.',
            en: 'Our house has a garden and a garage.',
            note: 'garaža → garažu in the accusative',
          },
          {
            hr: 'Selim se u novi stan sljedeći mjesec.',
            en: 'I am moving to a new flat next month.',
            note: 'seliti se — a reflexive verb',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Placing Things in a Room',
        body: 'This is where the A1 prepositions earn their keep. Stol je u kuhinji. (locative) Slika je na zidu. (locative) Kauč je pored prozora. (genitive) Tepih je ispod stola. (genitive) The pattern to remember: u and na take the locative for position, and the rest of the place words take the genitive.',
        highlight: 'na zidu · pored prozora',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I live in a flat"? ("stan" is masculine.)',
        options: ['Živim u stan.', 'Živim u stanu.', 'Živim u stana.', 'Živim na stanu.'],
        correct: 1,
        explanation:
          'Position takes the locative, and a masculine noun ends in -u: u stanu. "U stan" is the accusative and would mean you are moving into it right now.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "on the third floor"?',
        options: ['na treći kat', 'na trećem katu', 'u treći kat', 'na trećeg kata'],
        correct: 1,
        explanation:
          'The ordinal and the noun both go into the locative after "na" for a position: na trećem katu. The accusative "na treći kat" would describe going up to it.',
      },
      {
        type: 'summary',
        title: 'House and Home — Key Takeaways',
        points: [
          'kuća = house, stan = flat, dom = home in the emotional sense',
          'Rooms: soba, kuhinja, kupaonica, spavaća soba, dnevni boravak',
          'Živim u kući / u stanu — u plus the locative',
          'Floors are ordinals in the locative: na trećem katu, u prizemlju',
          'Placing things: u and na take the locative, other place words the genitive',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Body and Feeling Unwell
  // ─────────────────────────────────────────────────────────
  {
    id: 'body-health',
    title: 'The Body and Feeling Unwell',
    subtitle: 'Saying what hurts — and the sentence that turns around',
    icon: '🩺',
    level: 'A2',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'The Vocabulary You Hope Not to Need',
        body: "Every traveller eventually has to explain what hurts, and this is one of the few situations where getting the words out matters more than getting them right. It also contains one of Croatian's most characteristic sentence patterns — the one where the pain is the subject and you are the object.",
        icon: '🩺',
      },
      {
        type: 'table',
        title: 'The Body',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['glava', 'head', 'ruka', 'arm, hand'],
          ['oko / oči', 'eye / eyes', 'noga', 'leg, foot'],
          ['uho / uši', 'ear / ears', 'leđa', 'back'],
          ['nos', 'nose', 'trbuh', 'stomach'],
          ['usta', 'mouth', 'grlo', 'throat'],
          ['zub / zubi', 'tooth / teeth', 'srce', 'heart'],
        ],
      },
      {
        type: 'rule',
        title: 'The Pain Does the Hurting',
        body: 'English says "my head hurts" or "I have a headache". Croatian says the head hurts ME: Boli me glava. The body part is the SUBJECT, and you are the object in the accusative — me, te, ga, je, nas, vas, ih. Boli me grlo. Boli ga zub. Bole me leđa. It is the same shape as "sviđa mi se", turned around from the English.',
        highlight: 'Boli me glava.',
      },
      {
        type: 'rule',
        title: 'One Thing or Several',
        body: 'Because the body part is the subject, the verb counts IT and not you. One thing hurts: BOLI me glava. Several hurt: BOLE me leđa, BOLE me oči, BOLE me zubi. "Leđa" is always plural in Croatian, so it always takes "bole" — a small detail that immediately sounds right when you get it.',
        highlight: 'Boli / Bole',
      },
      {
        type: 'table',
        title: 'Feeling Unwell',
        headers: ['Croatian', 'English'],
        rows: [
          ['Ne osjećam se dobro.', 'I do not feel well.'],
          ['Imam temperaturu.', 'I have a temperature.'],
          ['Prehlađen sam. / Prehlađena sam.', 'I have a cold. (man / woman)'],
          ['Kašljem.', 'I have a cough.'],
          ['Muka mi je.', 'I feel sick.'],
          ['Umoran sam. / Umorna sam.', 'I am tired. (man / woman)'],
        ],
      },
      {
        type: 'rule',
        title: 'At the Doctor and the Pharmacy',
        body: '"Liječnik" is the standard word for doctor; "doktor" is just as common in speech. You go "kod liječnika" — the genitive after kod. A "ljekarna" is a pharmacy, a "recept" is a prescription, and "lijek" is medicine. Trebam liječnika. Idem u ljekarnu. Imate li nešto za glavobolju?',
        highlight: 'kod liječnika · u ljekarnu',
      },
      {
        type: 'example',
        title: 'Explaining the Problem',
        items: [
          {
            hr: 'Boli me glava već dva dana.',
            en: 'I have had a headache for two days.',
            note: 'the present covers English "have had"',
          },
          {
            hr: 'Bole me leđa kad dugo sjedim.',
            en: 'My back hurts when I sit for a long time.',
            note: 'leđa is plural → bole',
          },
          {
            hr: 'Mislim da imam temperaturu.',
            en: 'I think I have a temperature.',
            note: 'da introduces what you think',
          },
          {
            hr: 'Trebam ići kod liječnika.',
            en: 'I need to go to the doctor.',
            note: 'kod + genitive',
          },
          {
            hr: 'Imate li nešto protiv kašlja?',
            en: 'Do you have anything for a cough?',
            note: 'protiv + genitive — literally "against"',
          },
          {
            hr: 'Brzo ozdravi!',
            en: 'Get well soon!',
            note: 'to a friend; to a stranger, ozdravite',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I have a headache"?',
        options: ['Imam glavu bol.', 'Boli me glava.', 'Boli mi glava.', 'Ja bolim glavu.'],
        correct: 1,
        explanation:
          'The body part is the subject and you are the object in the accusative: Boli ME glava. "Mi" is the dative form and belongs in sentences like "sviđa mi se", not this one.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ me leđa." (My back hurts. "Leđa" is plural.)',
        options: ['Boli', 'Bole', 'Bolim', 'Bolio'],
        correct: 1,
        explanation:
          'The verb agrees with the body part, and "leđa" is grammatically plural in Croatian, so it takes "bole". "Boli" would be right for a single thing, such as glava or grlo.',
      },
      {
        type: 'summary',
        title: 'Health — Key Takeaways',
        points: [
          'Boli me glava — the body part is the subject, you are the accusative object',
          'The verb counts the body part: boli glava, but bole leđa and bole oči',
          'leđa, usta, oči, uši and zubi are plural',
          'Ne osjećam se dobro / Imam temperaturu / Prehlađen sam',
          'kod liječnika (genitive), u ljekarnu (accusative — you are going there)',
          'Brzo ozdravi! — get well soon',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Clothes and Shopping for Them
  // ─────────────────────────────────────────────────────────
  {
    id: 'clothes-appearance',
    title: 'Clothes',
    subtitle: 'What you wear, and buying it in a Croatian shop',
    icon: '👕',
    level: 'A2',
    duration: '~5 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Wearing and Buying',
        body: 'Clothes vocabulary earns its place twice over: you need it to describe someone, and you need it the first time you walk into a shop. Both uses lean on the accusative, so this lesson is mostly practice with something you already know.',
        icon: '👕',
      },
      {
        type: 'table',
        title: 'Clothes',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['majica', 'T-shirt', 'jakna', 'jacket'],
          ['košulja', 'shirt', 'kaput', 'coat'],
          ['hlače', 'trousers', 'cipele', 'shoes'],
          ['traperice', 'jeans', 'tenisice', 'trainers'],
          ['suknja', 'skirt', 'čarape', 'socks'],
          ['haljina', 'dress', 'šal', 'scarf'],
          ['džemper', 'jumper', 'kapa', 'hat, cap'],
        ],
      },
      {
        type: 'rule',
        title: 'Two of Them Are Always Plural',
        body: '"Hlače" (trousers), "traperice" (jeans), "cipele" (shoes), "tenisice" and "čarape" are plural in Croatian just as they are in English — one pair, plural word. Hlače su nove. Cipele su mi male. Because they are feminine plural, adjectives take -e: nove hlače, crne cipele.',
        highlight: 'nove hlače · crne cipele',
      },
      {
        type: 'rule',
        title: 'Nositi, Not Imati',
        body: 'The verb for wearing is "nositi" — nosim, nosiš, nosi, nosimo, nosite, nose — and what you wear takes the accusative. Nosim crvenu majicu. Nosi naočale. It also means "to carry", so context decides: Nosim torbu can be either wearing or carrying a bag, and nobody minds.',
        highlight: 'Nosim crvenu majicu.',
      },
      {
        type: 'table',
        title: 'In the Shop',
        headers: ['Croatian', 'English'],
        rows: [
          ['Mogu li ovo probati?', 'Can I try this on?'],
          ['Gdje je kabina?', 'Where is the fitting room?'],
          ['Imate li veći broj?', 'Do you have a bigger size?'],
          ['Koja je vaša veličina?', 'What size are you?'],
          ['Malo mi je. / Veliko mi je.', 'It is too small / too big for me.'],
          ['Uzet ću ovo.', 'I will take this.'],
        ],
      },
      {
        type: 'rule',
        title: 'Colours Agree Like Adjectives',
        body: 'crven, plav, zelen, žut, crn, bijel, smeđ, siv, narančast, ružičast. They agree with what they describe, so the same colour changes shape: crveni šešir, crvena majica, crveno vino, crvene cipele. Nothing new to learn — but colours are where adjective agreement gets its most frequent workout.',
        highlight: 'crven · crvena · crveno · crvene',
      },
      {
        type: 'example',
        title: 'Wearing and Buying',
        items: [
          {
            hr: 'Danas nosim plavu košulju.',
            en: 'Today I am wearing a blue shirt.',
            note: 'košulja → košulju, plava → plavu',
          },
          {
            hr: 'Tražim crne hlače, broj četrdeset.',
            en: 'I am looking for black trousers, size forty.',
            note: 'hlače is plural → crne',
          },
          {
            hr: 'Mogu li probati ovu haljinu?',
            en: 'Can I try this dress on?',
            note: 'ovu haljinu — both accusative',
          },
          {
            hr: 'Ove cipele su mi malo tijesne.',
            en: 'These shoes are a bit tight for me.',
            note: 'mi — the dative of the person affected',
          },
          {
            hr: 'Imate li ovo u drugoj boji?',
            en: 'Do you have this in another colour?',
            note: 'u + locative: drugoj boji',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am wearing a blue shirt"? ("košulja" is feminine.)',
        options: [
          'Nosim plava košulja.',
          'Nosim plavu košulju.',
          'Imam plavu košulju.',
          'Nosim plavoj košulji.',
        ],
        correct: 1,
        explanation:
          'What you wear is an object, so both the adjective and the noun take the feminine accusative: plavu košulju. "Imam" would say you own it rather than that you have it on.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Tražim ___ hlače." (I am looking for black trousers.)',
        options: ['crn', 'crna', 'crno', 'crne'],
        correct: 3,
        explanation:
          '"Hlače" is feminine plural in Croatian, so the adjective takes the feminine plural ending: crne hlače. The singular forms cannot agree with a word that has no singular.',
      },
      {
        type: 'summary',
        title: 'Clothes — Key Takeaways',
        points: [
          'majica, košulja, hlače, haljina, jakna, cipele, čarape',
          'hlače, traperice, cipele, tenisice and čarape are always plural',
          'The verb is nositi, and what you wear takes the accusative',
          'Colours agree like any adjective: crvena majica, crne cipele',
          'Mogu li ovo probati? / Imate li veći broj? / Uzet ću ovo.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Describing People
  // ─────────────────────────────────────────────────────────
  {
    id: 'describing-people',
    title: 'Describing People',
    subtitle: 'What someone looks like, and what they are like',
    icon: '🧑',
    level: 'A2',
    duration: '~6 min',
    color: '#d97706',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Two Kinds of Description',
        body: 'Croatian keeps appearance and character in separate grammatical patterns, and both are worth having: one lets you point somebody out in a crowd, the other lets you say what you think of them. This is also the lesson where adjective agreement finally becomes automatic.',
        icon: '🧑',
      },
      {
        type: 'table',
        title: 'Appearance',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['visok', 'tall', 'nizak', 'short'],
          ['mlad', 'young', 'star', 'old'],
          ['mršav', 'slim', 'krupan', 'well-built'],
          ['lijep', 'good-looking', 'zgodan', 'attractive'],
          ['kosa', 'hair', 'brada', 'beard'],
          ['naočale', 'glasses', 'oči', 'eyes'],
        ],
      },
      {
        type: 'rule',
        title: 'Hair and Eyes Belong to Their Owner',
        body: 'Croatian describes these with a possessive dative rather than a possessive adjective. Kosa mu je smeđa. (His hair is brown — literally, the hair to-him is brown.) Oči su joj plave. (Her eyes are blue.) You can also say "Ima smeđu kosu" and "Ima plave oči", which is simpler and just as natural. Both are worth recognising.',
        highlight: 'Oči su joj plave.',
      },
      {
        type: 'table',
        title: 'Hair and Eye Colours',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['plava kosa', 'blond hair', 'plav means blue AND blond'],
          ['smeđa kosa', 'brown hair', ''],
          ['crna kosa', 'black hair', ''],
          ['sijeda kosa', 'grey hair', 'a separate word, not siva'],
          ['duga / kratka', 'long / short', 'duga kosa'],
          ['kovrčava / ravna', 'curly / straight', 'kovrčava kosa'],
        ],
      },
      {
        type: 'rule',
        title: 'Plav Means Two Things',
        body: '"Plav" is blue, and it is also the word for blond hair. Plave oči are blue eyes; plava kosa is blond hair. There is no confusion in practice, because the noun decides, but it surprises everyone the first time. Grey hair has its own word — "sijeda", never "siva", which is for objects.',
        highlight: 'plave oči · plava kosa',
      },
      {
        type: 'table',
        title: 'Character',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['drag', 'lovely, kind', 'ljubazan', 'polite, friendly'],
          ['vrijedan', 'hard-working', 'lijen', 'lazy'],
          ['strpljiv', 'patient', 'nestrpljiv', 'impatient'],
          ['veseo', 'cheerful', 'ozbiljan', 'serious'],
          ['pametan', 'clever', 'sramežljiv', 'shy'],
          ['otvoren', 'open, outgoing', 'tvrdoglav', 'stubborn'],
        ],
      },
      {
        type: 'example',
        title: 'Describing Someone',
        items: [
          {
            hr: 'Moja sestra je visoka i mršava.',
            en: 'My sister is tall and slim.',
            note: 'feminine subject → visoka, mršava',
          },
          {
            hr: 'Ima dugu smeđu kosu.',
            en: 'She has long brown hair.',
            note: 'imati + accusative: dugu smeđu kosu',
          },
          {
            hr: 'Oči su mu zelene.',
            en: 'His eyes are green.',
            note: 'possessive dative — mu',
          },
          {
            hr: 'On je jako drag i strpljiv.',
            en: 'He is very kind and patient.',
            note: 'jako = very',
          },
          {
            hr: 'Nosi naočale i ima bradu.',
            en: 'He wears glasses and has a beard.',
            note: 'naočale is plural',
          },
          {
            hr: 'Kakva je ona?',
            en: 'What is she like?',
            note: 'kakav asks about character or quality',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Kakav or Koji?',
        body: 'Both come out as "which" or "what" in English, and they ask different things. "Kakav?" asks what kind — Kakav je on? (What is he like?) "Koji?" asks which one out of a set — Koji je tvoj brat? (Which one is your brother?) Both agree with the noun: kakav, kakva, kakvo; koji, koja, koje.',
        highlight: 'Kakav je on? / Koji je tvoj brat?',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "My sister is tall"? ("sestra" is feminine.)',
        options: [
          'Moja sestra je visok.',
          'Moja sestra je visoka.',
          'Moja sestra je visoko.',
          'Moj sestra je visoka.',
        ],
        correct: 1,
        explanation:
          'The adjective agrees with the noun it describes, and "sestra" is feminine, so it takes -a: visoka. The possessive "moja" agrees the same way.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which asks "What is he like?" (his character)',
        options: ['Koji je on?', 'Kakav je on?', 'Tko je on?', 'Čiji je on?'],
        correct: 1,
        explanation:
          '"Kakav" asks what KIND of person, which is a question about character. "Koji" would ask which one out of several, and "tko" would ask his identity.',
      },
      {
        type: 'summary',
        title: 'Describing People — Key Takeaways',
        points: [
          'visok, nizak, mlad, star, mršav, krupan, zgodan',
          'Hair and eyes: Ima smeđu kosu / Oči su joj plave',
          'plav means both blue and blond; grey hair is sijeda, never siva',
          'Character: drag, ljubazan, vrijedan, strpljiv, veseo, sramežljiv',
          'Kakav? asks what kind; Koji? asks which one',
          'Every adjective agrees with the person described',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Work and Jobs
  // ─────────────────────────────────────────────────────────
  {
    id: 'work-jobs',
    title: 'Work and Jobs',
    subtitle: 'What you do, where you do it, and asking others',
    icon: '💼',
    level: 'A2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Second Question After Your Name',
        body: '"Čime se baviš?" comes up early in almost every conversation, and the answer has a shape worth learning properly: Croatian names most jobs twice, once for a man and once for a woman, and the female form is the normal one to use — not an afterthought.',
        icon: '💼',
      },
      {
        type: 'rule',
        title: 'Three Ways to Ask',
        body: '"Čime se baviš?" is the most idiomatic — literally, what do you occupy yourself with, using the instrumental you met earlier. "Što radiš?" is simpler and just as common, though it can also mean what are you doing right now. "Koje je tvoje zanimanje?" is the formal one you meet on a form.',
        highlight: 'Čime se baviš?',
      },
      {
        type: 'rule',
        title: 'Answering: Ja sam… or Radim kao…',
        body: 'The plain answer takes the subject form: Ja sam učitelj. Ja sam liječnica. To say you work AS something, use "radim kao" plus the subject form: Radim kao konobar. Both are natural; the second is useful when the job is not quite your profession.',
        highlight: 'Ja sam učiteljica.',
      },
      {
        type: 'table',
        title: 'Jobs — Male and Female Forms',
        headers: ['Man', 'Woman', 'English'],
        rows: [
          ['učitelj', 'učiteljica', 'teacher (school)'],
          ['profesor', 'profesorica', 'teacher (secondary), professor'],
          ['liječnik', 'liječnica', 'doctor'],
          ['konobar', 'konobarica', 'waiter'],
          ['kuhar', 'kuharica', 'cook'],
          ['vozač', 'vozačica', 'driver'],
          ['odvjetnik', 'odvjetnica', 'lawyer'],
          ['prodavač', 'prodavačica', 'shop assistant'],
        ],
      },
      {
        type: 'rule',
        title: 'The Female Form Is Standard, Not Optional',
        body: 'Croatian forms almost every job title for both, usually with -ica or -ka, and a woman doctor is a "liječnica" rather than a "liječnik". Using the male form for a woman is not neutral in Croatian the way it can be in English — it reads as an error. A few jobs have no separate form and stay as they are, mostly recent borrowings.',
        highlight: 'liječnik → liječnica',
      },
      {
        type: 'table',
        title: 'At Work',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['posao', 'job, work', 'plaća', 'salary'],
          ['ured', 'office', 'šef', 'boss'],
          ['tvrtka', 'company', 'kolega / kolegica', 'colleague'],
          ['sastanak', 'meeting', 'radno vrijeme', 'working hours'],
          ['godišnji odmor', 'annual leave', 'zaposlen', 'employed'],
        ],
      },
      {
        type: 'example',
        title: 'Talking About Work',
        items: [
          {
            hr: 'Čime se baviš? — Ja sam programerka.',
            en: 'What do you do? — I am a programmer. (a woman)',
            note: 'baviti se + instrumental in the question',
          },
          {
            hr: 'Radim u banci već pet godina.',
            en: 'I have worked at a bank for five years.',
            note: 'u banci — locative; pet godina — genitive plural',
          },
          {
            hr: 'Moja majka je liječnica u bolnici.',
            en: 'My mother is a doctor at a hospital.',
            note: 'the female form is the normal one',
          },
          {
            hr: 'Radno vrijeme mi je od osam do četiri.',
            en: 'My working hours are from eight to four.',
            note: 'od … do + genitive',
          },
          {
            hr: 'Sutra imam sastanak sa šefom.',
            en: 'I have a meeting with my boss tomorrow.',
            note: 'sa + instrumental: šefom',
          },
          {
            hr: 'Idem na godišnji u kolovozu.',
            en: 'I am going on holiday in August.',
            note: 'u kolovozu — locative for a month',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A woman is a doctor. How does she say "I am a doctor"?',
        options: [
          'Ja sam liječnik.',
          'Ja sam liječnica.',
          'Ja sam liječnicu.',
          'Ja sam liječnika.',
        ],
        correct: 1,
        explanation:
          'Croatian forms job titles for both, and the female form is the standard one for a woman: liječnica. After "ja sam" the word stays in its subject form, so no case ending is added.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Radim ___ banci." (I work at a bank.)',
        options: ['u', 'na', 'kod', 'do'],
        correct: 0,
        explanation:
          '"Banka" takes "u" plus the locative — u banci. Which preposition a place uses is partly idiomatic, which is why some workplaces take "na": na fakultetu, na poslu.',
      },
      {
        type: 'summary',
        title: 'Work — Key Takeaways',
        points: [
          'Čime se baviš? / Što radiš? / Koje je tvoje zanimanje?',
          'Ja sam učiteljica. or Radim kao konobar.',
          'Most jobs have male and female forms, usually in -ica or -ka',
          'The female form is standard for a woman, not an option',
          'posao, ured, tvrtka, plaća, šef, kolegica, sastanak',
          'Radim u banci — u plus the locative for where',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // School and Studying
  // ─────────────────────────────────────────────────────────
  {
    id: 'school-studies',
    title: 'School and Studying',
    subtitle: 'The Croatian education system, and talking about learning',
    icon: '🎓',
    level: 'A2',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'Words You Need About Yourself',
        body: 'You are learning a language, so this vocabulary comes up about you constantly — what you study, where, for how long, how it is going. It also clears up a distinction English blurs: Croatian has different words for a school pupil and a university student, and different verbs for each.',
        icon: '🎓',
      },
      {
        type: 'rule',
        title: 'Učiti, Studirati, Predavati',
        body: 'Three verbs, three jobs. "Učiti" is to learn or to study in general: Učim hrvatski. "Studirati" is specifically to study at university, and takes the subject: Studiram povijest. "Predavati" is to teach or lecture: Predaje na fakultetu. Saying "studiram hrvatski" implies a degree course, so for self-study use "učim".',
        highlight: 'Učim hrvatski.',
      },
      {
        type: 'table',
        title: 'The System',
        headers: ['Croatian', 'English', 'Who goes'],
        rows: [
          ['vrtić', 'nursery', 'dijete'],
          ['osnovna škola', 'primary school', 'učenik / učenica'],
          ['srednja škola', 'secondary school', 'učenik / učenica'],
          ['gimnazija', 'grammar school', 'učenik / učenica'],
          ['fakultet', 'university faculty', 'student / studentica'],
          ['sveučilište', 'university', 'student / studentica'],
        ],
      },
      {
        type: 'rule',
        title: 'Učenik or Student?',
        body: 'A school pupil is an "učenik" (or "učenica"); a university student is a "student" (or "studentica"). English uses "student" for both, which makes this an easy mistake to carry over. Likewise a school teacher is an "učitelj" in primary school and a "profesor" in secondary — and "profesor" at university too.',
        highlight: 'učenik = school · student = university',
      },
      {
        type: 'table',
        title: 'Around Studying',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['predmet', 'subject', 'ispit', 'exam'],
          ['predavanje', 'lecture', 'ocjena', 'mark, grade'],
          ['zadaća', 'homework', 'knjižnica', 'library'],
          ['razred', 'class, year', 'diplomirati', 'to graduate'],
        ],
      },
      {
        type: 'rule',
        title: 'U or Na?',
        body: 'A small idiom worth memorising: it is "u školi" but "na fakultetu". Same case, different preposition, and no rule explains it — Croatian simply pairs each institution with one. Idem u školu. Idem na fakultet. Studiram na Filozofskom fakultetu.',
        highlight: 'u školi · na fakultetu',
      },
      {
        type: 'example',
        title: 'Talking About Studying',
        items: [
          {
            hr: 'Studiram povijest na fakultetu u Zagrebu.',
            en: 'I study history at university in Zagreb.',
            note: 'na fakultetu, u Zagrebu — both locative',
          },
          {
            hr: 'Učim hrvatski već dvije godine.',
            en: 'I have been learning Croatian for two years.',
            note: 'dvije godine — the 2–4 form',
          },
          {
            hr: 'Sutra imam ispit iz matematike.',
            en: 'I have a maths exam tomorrow.',
            note: 'ispit iz + genitive — an exam in a subject',
          },
          {
            hr: 'Moj sin ide u treći razred.',
            en: 'My son is in the third year.',
            note: 'ide u + accusative for the year he attends',
          },
          {
            hr: 'Moram napisati zadaću.',
            en: 'I have to do my homework.',
            note: 'moram + infinitive',
          },
          {
            hr: 'Koji ti je najdraži predmet?',
            en: 'What is your favourite subject?',
            note: 'najdraži — superlative of drag',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A ten-year-old at primary school is a…',
        options: ['student', 'učenik', 'profesor', 'kolega'],
        correct: 1,
        explanation:
          'Croatian reserves "student" for university and uses "učenik" for a school pupil. English uses one word for both, which is why this is worth noticing early.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Studiram ___ fakultetu."',
        options: ['u', 'na', 'kod', 'do'],
        correct: 1,
        explanation:
          '"Fakultet" pairs with "na", while "škola" pairs with "u" — u školi, na fakultetu. There is no rule behind it; each institution simply takes one, and they are learned as phrases.',
      },
      {
        type: 'summary',
        title: 'School — Key Takeaways',
        points: [
          'učiti = learn/study generally, studirati = study at university',
          'učenik is a school pupil; student is at university',
          'osnovna škola, srednja škola, gimnazija, fakultet, sveučilište',
          'u školi but na fakultetu — learned as phrases',
          'ispit iz matematike — an exam in a subject takes iz plus the genitive',
          'predmet, predavanje, zadaća, ocjena, knjižnica',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Free Time and Hobbies
  // ─────────────────────────────────────────────────────────
  {
    id: 'hobbies-free-time',
    title: 'Free Time and Hobbies',
    subtitle: 'What you do for fun — and the three verbs for "play"',
    icon: '🎸',
    level: 'A2',
    duration: '~5 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'The Conversation That Actually Continues',
        body: 'Work and family run out after a few sentences. Hobbies are where a conversation keeps going, and they are also where Croatian makes a distinction English does not: three different verbs where English says "play".',
        icon: '🎸',
      },
      {
        type: 'rule',
        title: 'Igrati, Svirati, Igrati Se',
        body: 'You IGRATI a sport or a game: igram nogomet, igram šah, igram karte. You SVIRATI an instrument: sviram gitaru, sviram klavir. And children IGRAJU SE — play in the general sense: Djeca se igraju u parku. Saying "igram gitaru" is one of the most recognisable learner errors, and it is easy to avoid once you have seen it.',
        highlight: 'igram nogomet · sviram gitaru',
      },
      {
        type: 'table',
        title: 'Things to Do',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['čitati', 'to read', 'plivati', 'to swim'],
          ['trčati', 'to run', 'planinariti', 'to go hiking'],
          ['kuhati', 'to cook', 'putovati', 'to travel'],
          ['pjevati', 'to sing', 'slikati', 'to paint'],
          ['voziti bicikl', 'to cycle', 'fotografirati', 'to take photos'],
          ['gledati filmove', 'to watch films', 'šetati', 'to walk, stroll'],
        ],
      },
      {
        type: 'rule',
        title: 'Baviti Se for an Ongoing Activity',
        body: 'For something you do regularly — a sport, a discipline, a serious hobby — Croatian uses "baviti se" plus the instrumental. Bavim se sportom. Bavim se glazbom. Bavim se planinarenjem. It is the verb behind "Čime se baviš?", and answering with it sounds more established than just naming the activity.',
        highlight: 'Bavim se sportom.',
      },
      {
        type: 'rule',
        title: 'In My Free Time',
        body: '"U slobodno vrijeme" is the phrase that opens this whole topic — note the accusative, which is what "u" takes for a period. U slobodno vrijeme čitam i šetam. Two more worth having: "volim" for what you enjoy (Volim kuhati) and "najviše volim" for your favourite (Najviše volim planinariti).',
        highlight: 'U slobodno vrijeme…',
      },
      {
        type: 'example',
        title: 'Talking About Free Time',
        items: [
          {
            hr: 'U slobodno vrijeme volim čitati.',
            en: 'In my free time I like reading.',
            note: 'voljeti + infinitive',
          },
          {
            hr: 'Sviram gitaru od djetinjstva.',
            en: 'I have played guitar since childhood.',
            note: 'od + genitive; the present covers English "have played"',
          },
          {
            hr: 'Subotom igram nogomet s prijateljima.',
            en: 'On Saturdays I play football with friends.',
            note: 'subotom = on Saturdays, an instrumental of time',
          },
          {
            hr: 'Bavim se planinarenjem već deset godina.',
            en: 'I have been hiking for ten years.',
            note: 'baviti se + instrumental',
          },
          {
            hr: 'Ljeti plivamo svaki dan.',
            en: 'In summer we swim every day.',
            note: 'ljeti — one word for "in summer"',
          },
          {
            hr: 'Što voliš raditi vikendom?',
            en: 'What do you like doing at the weekend?',
            note: 'vikendom — another instrumental of time',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The Instrumental of Time',
        body: 'You just met it three times. Putting a day or period into the instrumental means "on those days, regularly": subotom (on Saturdays), nedjeljom (on Sundays), vikendom (at weekends), ljeti and zimi. It is a compact pattern with no English equivalent — English needs a whole phrase where Croatian changes an ending.',
        highlight: 'subotom · vikendom',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I play the guitar"?',
        options: ['Igram gitaru.', 'Sviram gitaru.', 'Igram se gitarom.', 'Radim gitaru.'],
        correct: 1,
        explanation:
          'Instruments take "svirati": sviram gitaru. "Igrati" is for sports and games, and "igrati se" is what children do — neither works with an instrument.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Bavim se ___." (I do sport. — sport)',
        options: ['sport', 'sporta', 'sportu', 'sportom'],
        correct: 3,
        explanation:
          '"Baviti se" takes the instrumental, and a masculine noun ends in -om: sportom. This is the same case you use for a means of transport.',
      },
      {
        type: 'summary',
        title: 'Free Time — Key Takeaways',
        points: [
          'igrati a sport or game, svirati an instrument, igrati se for children',
          'baviti se + instrumental for a regular activity: Bavim se sportom.',
          'U slobodno vrijeme… opens the whole topic',
          'voljeti + infinitive: Volim kuhati.',
          'The instrumental of time: subotom, vikendom, ljeti, zimi',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Travel and Transport
  // ─────────────────────────────────────────────────────────
  {
    id: 'travel-transport',
    title: 'Travel and Transport',
    subtitle: 'Buying tickets, catching things, and checking in',
    icon: '🚆',
    level: 'A2',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Getting Around a Long Country',
        body: 'Croatia is narrow and long, the coast is a chain of islands, and getting anywhere involves a ticket. This lesson gives you the vocabulary and the two or three sentences that actually do the work at a counter.',
        icon: '🚆',
      },
      {
        type: 'table',
        title: 'Ways to Travel',
        headers: ['Croatian', 'English', 'By…'],
        rows: [
          ['vlak', 'train', 'vlakom'],
          ['autobus', 'bus, coach', 'autobusom'],
          ['avion', 'plane', 'avionom'],
          ['trajekt', 'car ferry', 'trajektom'],
          ['brod', 'boat, ship', 'brodom'],
          ['auto', 'car', 'autom'],
          ['bicikl', 'bicycle', 'biciklom'],
        ],
      },
      {
        type: 'rule',
        title: 'The Means Is the Instrumental',
        body: 'Every one of those takes the instrumental with no preposition — Idem vlakom, Putujemo trajektom, Došli su avionom. You met the rule earlier; a timetable is where you use it every day. The only common exception is on foot, which is its own word: pješice.',
        highlight: 'Idem vlakom.',
      },
      {
        type: 'table',
        title: 'At the Station',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['kolodvor', 'station', 'peron', 'platform'],
          ['zračna luka', 'airport', 'vozni red', 'timetable'],
          ['karta', 'ticket', 'prtljaga', 'luggage'],
          ['povratna karta', 'return ticket', 'kofer', 'suitcase'],
          ['jednosmjerna karta', 'one-way ticket', 'kašnjenje', 'delay'],
          ['rezervacija', 'reservation', 'polazak', 'departure'],
        ],
      },
      {
        type: 'rule',
        title: 'Polaziti and Dolaziti',
        body: 'A timetable runs on two verbs. "Polaziti" is to depart: Vlak polazi u osam. "Dolaziti" is to arrive: Dolazimo u pet. To ask, use them as they stand: Kad polazi vlak za Split? Kad dolazi autobus iz Rijeke? Note "za" plus the accusative for the destination and "iz" plus the genitive for the origin.',
        highlight: 'vlak za Split · autobus iz Rijeke',
      },
      {
        type: 'example',
        title: 'At the Counter',
        items: [
          {
            hr: 'Jednu povratnu kartu za Split, molim.',
            en: 'One return ticket to Split, please.',
            note: 'accusative: jednu povratnu kartu',
          },
          {
            hr: 'Kad polazi sljedeći vlak?',
            en: 'When does the next train leave?',
            note: 'sljedeći agreeing with vlak',
          },
          {
            hr: 'Koliko traje put do Zadra?',
            en: 'How long does the journey to Zadar take?',
            note: 'do + genitive: Zadra',
          },
          {
            hr: 'S kojeg perona polazi?',
            en: 'Which platform does it leave from?',
            note: 's + genitive: kojeg perona',
          },
          {
            hr: 'Trajekt za Hvar polazi u podne.',
            en: 'The ferry to Hvar leaves at midday.',
            note: 'za + accusative for the destination',
          },
          {
            hr: 'Imam rezervaciju na ime Horvat.',
            en: 'I have a reservation in the name of Horvat.',
            note: 'na ime — a set phrase',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Somewhere to Stay',
        body: '"Smještaj" is accommodation in general. A "hotel" is a hotel; an "apartman" is a self-catering flat, and it is what most people rent on the coast. "Soba" on a sign by the road means a room to let. To check in: Imam rezervaciju. Htio bih se prijaviti. And to ask about breakfast: Je li doručak uključen?',
        highlight: 'apartman · smještaj · Je li doručak uključen?',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am travelling by ferry"? ("trajekt" is masculine.)',
        options: [
          'Putujem s trajektom.',
          'Putujem trajektom.',
          'Putujem trajektu.',
          'Putujem u trajekt.',
        ],
        correct: 1,
        explanation:
          'A means of transport is the instrumental with no preposition: trajektom. Adding "s" would make the ferry your travelling companion rather than your transport.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Jednu kartu ___ Split, molim."',
        options: ['za', 'u', 'do', 'na'],
        correct: 0,
        explanation:
          'A ticket TO a destination takes "za" plus the accusative: kartu za Split. "Do Splita" is also correct Croatian but describes the journey as far as Split rather than the ticket itself.',
      },
      {
        type: 'summary',
        title: 'Travel — Key Takeaways',
        points: [
          'The means of transport is the instrumental: vlakom, autobusom, trajektom',
          'On foot is its own word: pješice',
          'kolodvor, zračna luka, karta, povratna karta, peron, vozni red',
          'polaziti = depart, dolaziti = arrive',
          'vlak za Split (accusative) · autobus iz Rijeke (genitive)',
          'smještaj, hotel, apartman — and Imam rezervaciju.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Making Plans
  // ─────────────────────────────────────────────────────────
  {
    id: 'plans-invitations',
    title: 'Making Plans',
    subtitle: 'Inviting, accepting, and turning something down politely',
    icon: '📆',
    level: 'A2',
    duration: '~5 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Whole Exchange, Start to Finish',
        body: 'An invitation in Croatian is short: ask if they are free, suggest something, agree a time and place. Four or five sentences cover it, and the hardest part is saying no gracefully — which has its own set phrases, because a bare "ne mogu" sounds abrupt.',
        icon: '📆',
      },
      {
        type: 'table',
        title: 'Asking',
        headers: ['Croatian', 'English'],
        rows: [
          ['Što radiš u subotu?', 'What are you doing on Saturday?'],
          ['Jesi li slobodan? / slobodna?', 'Are you free? (man / woman)'],
          ['Imaš li planove za vikend?', 'Do you have plans for the weekend?'],
          ['Hoćeš li ići na kavu?', 'Do you want to go for a coffee?'],
          ['Idemo u kino?', 'Shall we go to the cinema?'],
          ['Što kažeš na večeru?', 'How about dinner?'],
        ],
      },
      {
        type: 'rule',
        title: 'The Present Tense Does the Future',
        body: 'For an arranged plan, Croatian uses the plain present exactly as English uses "I am going". Sutra idem u Zagreb. U subotu igramo nogomet. Večeras se nalazimo u osam. There is a proper future tense, but for something already arranged the present is what a Croatian actually says.',
        highlight: 'Sutra idem u Zagreb.',
      },
      {
        type: 'table',
        title: 'Saying Yes and No',
        headers: ['Croatian', 'English', 'Tone'],
        rows: [
          ['Može!', 'Sure!', 'the standard yes'],
          ['Rado!', 'Gladly!', 'warm'],
          ['Naravno!', 'Of course!', 'enthusiastic'],
          ['Nažalost, ne mogu.', 'Unfortunately I cannot.', 'the polite no'],
          ['Možda drugi put.', 'Maybe another time.', 'softens a refusal'],
          ['Javit ću ti.', 'I will let you know.', 'buys time'],
        ],
      },
      {
        type: 'rule',
        title: '"Može" Is the Most Useful Word Here',
        body: 'Literally "it can", "Može" works as yes, fine, sure, go ahead, agreed — to an invitation, a suggestion, an offer of coffee. "Može!" on its own is a complete and friendly answer, and you will hear it dozens of times a day. Its natural partner is "Dogovoreno!" — agreed, it is settled.',
        highlight: 'Može! · Dogovoreno!',
      },
      {
        type: 'rule',
        title: 'Fixing Time and Place',
        body: '"Nalazimo se" (we meet) is the verb for arranging to meet somewhere: Nalazimo se u osam ispred kina. Time takes "u" plus the accusative — u osam, u pola devet. Place takes the usual prepositions: ispred kina (genitive), u kavani (locative), na trgu (locative). Then close with "Vidimo se!" — see you.',
        highlight: 'Nalazimo se u osam ispred kina.',
      },
      {
        type: 'example',
        title: 'A Whole Invitation',
        items: [
          {
            hr: 'Jesi li slobodna u subotu navečer?',
            en: 'Are you free on Saturday evening?',
            note: 'to a woman; to a man, slobodan',
          },
          {
            hr: 'Idemo na večeru? — Može, rado!',
            en: 'Shall we go for dinner? — Sure, gladly!',
            note: 'the standard accept',
          },
          {
            hr: 'Nalazimo se u osam ispred restorana.',
            en: 'We will meet at eight in front of the restaurant.',
            note: 'ispred + genitive',
          },
          {
            hr: 'Dogovoreno, vidimo se!',
            en: 'Agreed, see you!',
            note: 'how the exchange closes',
          },
          {
            hr: 'Nažalost, ne mogu, imam posla.',
            en: 'Unfortunately I cannot, I have work on.',
            note: 'imam posla — genitive after a negative-ish quantity',
          },
          {
            hr: 'Možda drugi put? Javit ću ti.',
            en: 'Maybe another time? I will let you know.',
            note: 'softening the refusal',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Someone invites you for coffee and you want to accept. What do you say?',
        options: ['Molim!', 'Može!', 'Izvoli!', 'Nažalost.'],
        correct: 1,
        explanation:
          '"Može!" is the everyday yes to a suggestion. "Molim" is please or you are welcome, "izvoli" is here you are, and "nažalost" opens a refusal.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "Tomorrow I am going to Zagreb"?',
        options: ['Sutra idem u Zagreb.', 'Sutra idem u Zagrebu.', 'Sutra sam u Zagreb.'],
        correct: 0,
        explanation:
          'Motion takes the accusative, and "Zagreb" is masculine and not alive so it does not change: u Zagreb. The present tense covers an arranged future plan, exactly as English "I am going" does.',
      },
      {
        type: 'summary',
        title: 'Plans — Key Takeaways',
        points: [
          'Jesi li slobodan? / Imaš li planove? / Idemo u kino?',
          'The present tense covers an arranged future: Sutra idem u Zagreb.',
          'Može! is the everyday yes; Dogovoreno! settles it',
          'Nažalost, ne mogu / Možda drugi put — refusing politely',
          'Nalazimo se u osam ispred kina — time with u, place as usual',
          'Vidimo se! closes almost every arrangement',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Celebrations and Holidays
  // ─────────────────────────────────────────────────────────
  {
    id: 'celebrations-holidays',
    title: 'Celebrations and Holidays',
    subtitle: 'The Croatian calendar, and what to say at each one',
    icon: '🎉',
    level: 'A2',
    duration: '~6 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Knowing What to Say',
        body: 'Every celebration has its own greeting, and using the right one matters more than any grammar in this lesson. For anyone with family in Croatia these are also the days when the phone rings — so this is vocabulary with a use by a fixed date.',
        icon: '🎉',
      },
      {
        type: 'table',
        title: 'The Year',
        headers: ['Croatian', 'English', 'When'],
        rows: [
          ['Nova godina', 'New Year', '1 January'],
          ['Uskrs', 'Easter', 'spring'],
          ['Dan državnosti', 'Statehood Day', '30 May'],
          ['Velika Gospa', 'Assumption', '15 August'],
          ['Svi sveti', 'All Saints', '1 November'],
          ['Badnjak', 'Christmas Eve', '24 December'],
          ['Božić', 'Christmas', '25 December'],
        ],
      },
      {
        type: 'rule',
        title: 'The Greetings',
        body: '"Sretan" (happy) agrees with what follows, so the ending changes: Sretan Božić! Sretan rođendan! Sretna Nova godina! Sretan Uskrs! For a group or in general, "Sretni blagdani!" — happy holidays. And "Čestitam!" is the all-purpose congratulations, for a birthday, an exam, a wedding or a new job.',
        highlight: 'Sretan Božić! · Sretna Nova godina!',
      },
      {
        type: 'rule',
        title: 'The Name Day Is Real',
        body: 'Croatians celebrate an "imendan" — the feast day of the saint they are named after — alongside their birthday, and for older generations it can matter more. If you know an Ivan, his day is 24 June; every Ana has 26 July. "Sretan imendan!" on the right day is the kind of thing that lands very well and costs nothing.',
        highlight: 'Sretan imendan!',
      },
      {
        type: 'table',
        title: 'Personal Occasions',
        headers: ['Croatian', 'English', 'What to say'],
        rows: [
          ['rođendan', 'birthday', 'Sretan rođendan!'],
          ['imendan', 'name day', 'Sretan imendan!'],
          ['vjenčanje', 'wedding', 'Čestitam!'],
          ['krštenje', 'christening', 'Čestitam!'],
          ['godišnjica', 'anniversary', 'Sve najbolje!'],
          ['zdravica', 'a toast', 'Živjeli!'],
        ],
      },
      {
        type: 'rule',
        title: 'Živjeli!',
        body: 'Literally "may we live", this is what you say when glasses are raised — the Croatian equivalent of cheers. You will hear it constantly, often with eye contact, which is expected. "U zdravlje!" (to health) is the other common one. Neither is optional at a table: raising a glass silently reads as odd.',
        highlight: 'Živjeli!',
      },
      {
        type: 'example',
        title: 'Celebrating',
        items: [
          {
            hr: 'Sretan rođendan! Sve najbolje!',
            en: 'Happy birthday! All the best!',
            note: 'the two go together',
          },
          {
            hr: 'Za Božić idemo kod bake.',
            en: "For Christmas we go to my grandmother's.",
            note: 'kod + genitive',
          },
          {
            hr: 'Na Uskrs bojimo pisanice.',
            en: 'At Easter we paint eggs.',
            note: 'pisanice — decorated Easter eggs',
          },
          {
            hr: 'Čestitam na diplomi!',
            en: 'Congratulations on your degree!',
            note: 'čestitati na + locative',
          },
          {
            hr: 'Živjeli! U zdravlje!',
            en: 'Cheers! To your health!',
            note: 'said with eye contact',
          },
          {
            hr: 'Slavimo imendan svake godine.',
            en: 'We celebrate the name day every year.',
            note: 'svake godine — genitive for "every year"',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Turning Up Empty-Handed',
        body: "A small practical note that grammar will not give you: if you are invited to someone's home for a celebration, you bring something — wine, cake, flowers, or something for the children. It is not formality, it is simply what is done, and arriving with nothing is noticed.",
        highlight: 'bring something',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you wish someone a happy Christmas?',
        options: ['Sretna Božić!', 'Sretan Božić!', 'Sretno Božić!', 'Čestitam Božić!'],
        correct: 1,
        explanation:
          '"Božić" is masculine, so "sretan" takes the masculine form: Sretan Božić! It is "Sretna Nova godina" because "godina" is feminine — the greeting agrees like any adjective.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Glasses are raised at dinner. What do you say?',
        options: ['Dobar tek!', 'Živjeli!', 'Izvolite!', 'Sretno!'],
        correct: 1,
        explanation:
          '"Živjeli!" is the toast. "Dobar tek" is enjoy your meal, said before eating rather than when raising a glass, and "izvolite" means here you are.',
      },
      {
        type: 'summary',
        title: 'Celebrations — Key Takeaways',
        points: [
          'Božić, Uskrs, Nova godina, Svi sveti, Velika Gospa, Dan državnosti',
          'Sretan agrees: Sretan Božić, Sretna Nova godina',
          'Čestitam! covers congratulations of every kind',
          'The imendan is celebrated alongside the birthday',
          'Živjeli! and U zdravlje! for a toast — with eye contact',
          "Invited to someone's home? Bring something.",
        ],
      },
    ],
  },
];
