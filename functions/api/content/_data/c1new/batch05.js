// functions/api/content/_data/c1new/batch05.js
//
// New C1 lessons, batch 05 (Croaticum restructure, stage 6, 2026-11-12). See c1new/index.js.
//
// Razgovarajte s nama! (B2-C1), lessons 7 and 8:
//   31 hypocoristics-dvojica — masculine names in -o / -e / -ko / -a; dvojica, trojica …
//   33 ethical-dative        — etički dativ; the dative of direction with and without k(a)
//   34 capitals-institutions — capitals in names of streets, squares, institutions, events
//   36 indefinite-adjectives — neodređeni and određeni vid of the adjective
//   37 exclamatory-dative    — usklični dativ and emfatični dativ (dativ zakletve)
//
// Deliberately NOT tested as wrong, because each is real Croatian somewhere:
//   - Idem liječniku / Idem k liječniku (both standard);
//   - Dvojica su došli (agreement by meaning, heard) — the lessons teach the grammar's
//     došla and never offer došli as a distractor;
//   - Iva, Ivu as forms of the name Ivo (regional) and čovjek dobrog srca beside dobra srca;
//   - a definite adjective in a predicate where it could IDENTIFY (Auto je novi = the new
//     one), and the clitic after blago.

/** Spine entries for this batch. `masterOrder` is the lesson's final C1 position. */
export const SPINE = [
  {
    id: 'hypocoristics-dvojica',
    masterOrder: 31,
    prerequisites: ['vocative-intro', 'numbers-nouns'],
    objectives: [
      'Decline masculine names in -o, -e, -ko and -a: Ivo, Ante, Marko, Luka',
      'Make every adjective and verb agree with them as masculine',
      'Count groups of men with dvojica, trojica, četvorica and their agreement',
    ],
  },
  {
    id: 'ethical-dative',
    masterOrder: 33,
    prerequisites: ['dative-locative', 'clitics-advanced'],
    objectives: [
      'Recognise and use the ethical dative: Pazi mi se!, Kako ti je mama?',
      'Place it correctly in the clitic cluster',
      'Express going to a person with the dative, with or without k (ka)',
    ],
  },
  {
    id: 'capitals-institutions',
    masterOrder: 34,
    prerequisites: ['adjective-agreement'],
    objectives: [
      'Capitalise names of streets and squares: Ulica kralja Zvonimira, Trg bana Josipa Jelačića',
      'Capitalise names of buildings, institutions and organisations: Hrvatsko narodno kazalište',
      'Capitalise names of historical events: Domovinski rat, Drugi svjetski rat',
    ],
  },
  {
    id: 'indefinite-adjectives',
    masterOrder: 36,
    prerequisites: ['adjective-agreement', 'participial-adjectives'],
    objectives: [
      'Choose between the indefinite (nov) and definite (novi) adjective form',
      'Answer Kakav? with a description and Koji? with an identification',
      'Recognise the short oblique forms and the adjectives that have only one form',
    ],
  },
  {
    id: 'exclamatory-dative',
    masterOrder: 37,
    prerequisites: ['ethical-dative'],
    objectives: [
      'Use the exclamatory dative: Blago tebi!, Jao meni!, Slava junacima!',
      'Swear with the emphatic dative (dativ zakletve): Tako mi svega!',
      'Tell a dative exclamation from one that is not: Živjela Hrvatska!',
    ],
  },
];

/** Lesson bodies (same shape as lessonsC1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Masculine names; dvojica, trojica
  // ─────────────────────────────────────────────────────────
  {
    id: 'hypocoristics-dvojica',
    title: 'Ivo, Ante, Luka — and Dvojica',
    subtitle: 'Masculine names that end like feminine nouns, and groups of men',
    icon: '👥',
    level: 'C1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Men Called Ivo, Ante and Luka',
        body: 'Croatian men are called Ivo, Ante, Luka, Jure and Franjo — names, many of them pet forms, that end in a vowel which on a common noun would suggest a feminine or neuter word. They decline by their ending, but they are men, so everything agrees with them as masculine: Ante je došao, naš dragi Luka. The second half of the lesson teaches dvojica, trojica and četvorica, the nouns Croatian uses to count a group of men.',
        icon: '👥',
      },
      {
        type: 'table',
        title: 'Four Patterns',
        headers: ['Case', '-ko', '-o', '-e', '-a'],
        rows: [
          ['N', 'Marko', 'Ivo', 'Ante', 'Luka'],
          ['G', 'Marka', 'Ive', 'Ante', 'Luke'],
          ['D', 'Marku', 'Ivi', 'Anti', 'Luki'],
          ['A', 'Marka', 'Ivu', 'Antu', 'Luku'],
          ['V', 'Marko', 'Ivo', 'Ante', 'Luka'],
          ['L', 'Marku', 'Ivi', 'Anti', 'Luki'],
          ['I', 'Markom', 'Ivom', 'Antom', 'Lukom'],
        ],
      },
      {
        type: 'rule',
        title: 'Names in -ko: Like Any Masculine Noun',
        body: 'Marko, Mirko, Zvonko, Darko and Slavko decline like a masculine noun such as brat: genitive and accusative -a (they are people, so the accusative is the genitive form), dative and locative -u, instrumental -om. The vocative is the same as the nominative: Marko!, Mirko!',
        highlight: 'Marko → Marka',
      },
      {
        type: 'rule',
        title: 'Ivo and Ante: Like Žena, Except the Instrumental',
        body: 'Two-syllable names in -o (Ivo, Pero, Đuro, Franjo) and the names in -e (Ante, Jure, Mate, Stipe) take the singular endings of žena — genitive -e, dative and locative -i, accusative -u — but the instrumental is the masculine -om: s Ivom, s Antom. For the -e names the nominative, genitive and vocative look alike, which is why street names read Trg Ante Starčevića. Do not confuse Ivo with Ivan: Ivan is Ivana in the genitive, Ivo is Ive. In some regions you will also hear Ivo declined like Marko; the paradigm taught here is the standard one.',
        highlight: 's Ivom, s Antom',
      },
      {
        type: 'rule',
        title: 'Luka and Nikola: Like Žena',
        body: 'Masculine names in -a decline exactly like žena in the singular, with the instrumental -om: Luke, Luki, Luku, s Lukom; Nikole, Nikoli, Nikolu, s Nikolom. The personal name keeps its k in the dative: Luki — the common noun luka (harbour) is the one that becomes u luci.',
        highlight: 'Luki',
      },
      {
        type: 'rule',
        title: 'They Are Men: Masculine Agreement',
        body: 'Whatever the ending, adjectives, pronouns and past participles agree with these names as masculine singular: Ante je došao, Luka je bio umoran, naš Ivo, s dragim Franjom. Only the noun endings follow the vowel; the agreement follows the man.',
        highlight: 'Ante je došao',
      },
      {
        type: 'table',
        title: 'Counting a Group of Men',
        headers: ['Number', 'Group of men', 'Example'],
        rows: [
          ['2', 'dvojica', 'Dvojica studenata čekala su ispred.'],
          ['3', 'trojica', 'Trojica braće rade zajedno.'],
          ['4', 'četvorica', 'Četvorica igrača ostala su na klupi.'],
          ['5', 'petorica', 'Petorica znanstvenika dobila su nagradu.'],
          ['6–10', 'šestorica … desetorica', 'Desetorica radnika gradila su most.'],
        ],
      },
      {
        type: 'rule',
        title: 'Dvojica Declines Like Žena',
        body: 'dvojica, trojica, četvorica and the rest are nouns: dvojica, dvojice, dvojici, dvojicu, dvojicom. The noun counted follows in the genitive plural: dvojica studenata, s trojicom kolega, pomogli smo četvorici turista. They count MALE PERSONS only: two women are dvije žene, two cars dva automobila, and a mixed group takes dvoje, troje — the collective numbers of the next lesson.',
        highlight: 'MALE PERSONS only',
      },
      {
        type: 'rule',
        title: 'Agreement: Plural Verb, -la Participle',
        body: 'With dvojica as subject the verb is plural, and the grammar gives the past participle the -la form: Dvojica su došla, Došla su dvojica, Trojica igrača sjede na klupi. A demonstrative before it agrees with its form: ta dvojica, ova trojica. You will also hear došli, agreement by meaning; the grammar form to write is došla.',
        highlight: 'Dvojica su došla',
      },
      {
        type: 'example',
        title: 'The Names in Use',
        items: [
          {
            hr: 'Sutra idem kod Ive na ručak.',
            en: "Tomorrow I'm going to Ivo's for lunch.",
            note: 'Ive — genitive of Ivo after kod',
          },
          {
            hr: 'Jesi li vidio Antu na utakmici?',
            en: 'Did you see Ante at the match?',
            note: 'Antu — accusative of Ante',
          },
          {
            hr: 'Poruku sam poslao Luki, ali još nije odgovorio.',
            en: "I sent Luka a message, but he hasn't answered yet.",
            note: 'Luki — dative; odgovorio is masculine',
          },
          {
            hr: 'S Markom i Mirkom igram tenis svake subote.',
            en: 'I play tennis with Marko and Mirko every Saturday.',
            note: 'Markom, Mirkom — instrumental of the -ko names',
          },
          {
            hr: 'Franjo je stigao, a Đure još nema.',
            en: "Franjo has arrived, but Đuro isn't here yet.",
            note: 'Đure — genitive of Đuro after nema',
          },
          {
            hr: 'Jure, dođi ovamo!',
            en: 'Jure, come here!',
            note: 'Jure — the vocative looks like the nominative',
          },
        ],
      },
      {
        type: 'example',
        title: 'Groups of Men',
        items: [
          {
            hr: 'Dvojica mladića sjedila su na klupi ispred zgrade.',
            en: 'Two young men were sitting on the bench in front of the building.',
            note: 'dvojica + genitive plural mladića; sjedila su — the participle',
          },
          {
            hr: 'Na sastanak su došla četvorica direktora iz Splita.',
            en: 'Four directors from Split came to the meeting.',
            note: 'četvorica — four men counted as a group',
          },
          {
            hr: 'Razgovarao sam s trojicom kolega o novom projektu.',
            en: 'I talked about the new project with three colleagues.',
            note: 'trojicom — instrumental of trojica',
          },
          {
            hr: 'Ta su dvojica cijelu večer pričala o nogometu.',
            en: 'Those two talked about football all evening.',
            note: 'ta dvojica — the demonstrative agrees with the noun form',
          },
          {
            hr: 'Ivo i Ante su braća; obojica rade u Zadru.',
            en: 'Ivo and Ante are brothers; both work in Zadar.',
            note: 'obojica — both men',
          },
          {
            hr: 'Pomogli smo četvorici turista koji su se izgubili u starom gradu.',
            en: 'We helped four tourists who had got lost in the old town.',
            note: 'četvorici — dative of četvorica',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the genitive of the name Ivo?',
        options: ['Ivoa', 'Ive', 'Ivu', 'Ivi'],
        correct: 1,
        explanation:
          'Ivo takes the genitive of žena: kod Ive. Ivu is the accusative, Ivi the dative and locative.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence counts a group of three men correctly?',
        options: [
          'Trojica studenata čekala su ispred.',
          'Trojica studentica čekala su ispred.',
          'Trojica studenata čekao je ispred.',
          'Trojica studenta čekala su ispred.',
        ],
        correct: 0,
        explanation:
          'trojica counts men, takes the genitive plural studenata and a plural verb with the -la participle.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips recur. The first is agreeing with the ending instead of the man: "Ante je došla", "naša Luka" — these are men, so Ante je došao, naš Luka. The second is mixing up Ivo and Ivan: the genitive Ivana belongs to Ivan; Ivo is Ive (kod Ive, s Ivom). The third is using dvojica for women or things, or with a singular verb: two women are dvije žene, and dvojica counts men only, with a plural verb — Dvojica su došla.',
        highlight: 'dvojica counts men only',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Večeras večeramo kod ___." (Franjo)',
            options: ['Franjo', 'Franje', 'Franji', 'Franjom'],
            correct: 1,
            explanation: 'kod takes the genitive, and Franjo follows žena there: kod Franje.',
          },
          {
            q: 'Complete: "Knjigu sam vratio ___." (to Ante)',
            options: ['Ante', 'Antu', 'Anti', 'Antom'],
            correct: 2,
            explanation: 'vratiti takes the person in the dative; the -e names take -i: Anti.',
          },
          {
            q: 'Complete: "Sinoć sam razgovarao s ___." (Marko)',
            options: ['Marko', 'Markom', 'Marka', 'Marke'],
            correct: 1,
            explanation: 's + instrumental; names in -ko decline like brat: s Markom.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Luka je bio umoran.',
              'Luka je bila umorna.',
              'Luka je bilo umorno.',
              'Luka su bili umorni.',
            ],
            correct: 0,
            explanation: 'Luka is a man: masculine singular agreement, bio umoran.',
          },
          {
            q: 'Complete: "___ asistenata pomagala su na ispitu." (four men)',
            options: ['Četiri', 'Četvero', 'Četvorica', 'Četvrti'],
            correct: 2,
            explanation:
              'Četvorica + genitive plural asistenata, with a plural verb. četiri would need asistenta; četvero would need pomagalo je.',
          },
          {
            q: 'Complete: "Dvojica kolega ___ na vrijeme."',
            options: ['je stiglo', 'je stigao', 'su stigle', 'su stigla'],
            correct: 3,
            explanation: 'dvojica takes a plural verb with the -la participle: su stigla.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Names and Groups of Men — Key Takeaways',
        points: [
          'Names in -ko decline like brat: Marko, Marka, Markom',
          'Ivo, Franjo, Ante, Jure: like žena, but the instrumental is -om',
          'Luka, Nikola: like žena; the name keeps k in the dative (Luki)',
          'All of them agree as masculine: Ante je došao',
          'dvojica, trojica, četvorica count men, decline like žena, take the genitive plural',
          'Agreement: plural verb, -la participle — Dvojica su došla',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The ethical dative; dative with and without k
  // ─────────────────────────────────────────────────────────
  {
    id: 'ethical-dative',
    title: 'The Ethical Dative',
    subtitle: 'Pazi mi se! — and going k liječniku or liječniku',
    icon: '💛',
    level: 'C1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'A Dative That Gives Nothing',
        body: 'In "Daj mi knjigu" the dative mi names who receives the book. In "Pazi mi se!" nobody receives anything: the speaker is telling the listener to take care, and mi says the speaker cares how it turns out. Croatian grammar calls this the etički dativ, the ethical dative. The second half of the lesson teaches the dative of direction towards a person — Idem liječniku and Idem k liječniku, both standard.',
        icon: '💛',
      },
      {
        type: 'table',
        title: 'The Ethical Dative in Use',
        headers: ['Sentence', 'What the dative adds'],
        rows: [
          ['Kako ti je mama?', 'How is your mum? — personal concern'],
          ['Pazi mi se!', 'Take care of yourself — for my sake'],
          ['Nemoj mi plakati!', "Don't cry — I can't bear to see it"],
          ['Ti ćeš mi sutra ranije ustati!', "You'll get up earlier tomorrow — I'm telling you"],
          ['Da mi više nisi zakasnio!', "Don't you dare be late again!"],
          ['Gle ti njega!', 'Just look at him!'],
        ],
      },
      {
        type: 'rule',
        title: 'Always a Clitic',
        body: 'The ethical dative is always an unstressed clitic — mi, ti, nam, vam — and it sits in second position inside the clitic cluster, in the usual order: after li and ćeš, before je and se. Ti ćeš mi…, Kako ti je…, Pazi mi se. A stressed form changes the meaning: "Nemoj meni plakati" means "don\'t come crying to me".',
        highlight: 'mi, ti, nam, vam',
      },
      {
        type: 'rule',
        title: 'The Test: Drop It',
        body: 'Leave the clitic out and the sentence still stands, with the same facts: Pazi se!, Nemoj plakati!, Kako je mama? Only the warmth, the insistence or the closeness goes. If dropping the dative removes a participant — Daj mi knjigu → Daj knjigu (to whom?) — it was not an ethical dative but an ordinary indirect object.',
        highlight: 'drop the clitic',
      },
      {
        type: 'rule',
        title: 'Where It Belongs',
        body: 'The ethical dative is spoken, familiar Croatian: parents to children, friends, family. It does not belong in formal writing. With vam it can be polite and warm at once — Kako vam je suprug? — a neighbour asking after your husband.',
        highlight: 'spoken, familiar Croatian',
      },
      {
        type: 'table',
        title: 'Going to Someone: With or Without k',
        headers: ['Without k', 'With k', 'Meaning'],
        rows: [
          ['Idem liječniku.', 'Idem k liječniku.', "I'm going to the doctor."],
          ['Idemo baki.', 'Idemo k baki.', "We're going to grandma's."],
          ['Otišla je sestri.', 'Otišla je k sestri.', "She went to her sister's."],
          ['Pošli su kumu.', 'Pošli su ka kumu.', 'They set off to their kum.'],
        ],
      },
      {
        type: 'rule',
        title: 'Both Are Standard',
        body: 'When the destination is a person, the bare dative and k + dative are both standard Croatian — neither is a mistake, and speakers differ in which they prefer. k becomes ka before a word beginning with k or g: ka kumu, ka gradu. After k a pronoun takes its stressed form: k meni, k njemu, k nama.',
        highlight: 'ka kumu, ka gradu',
      },
      {
        type: 'example',
        title: 'The Ethical Dative',
        items: [
          {
            hr: 'Kako ti je mama? Je li joj bolje?',
            en: "How's your mum? Is she feeling better?",
            note: 'ti — concern, not a recipient',
          },
          {
            hr: 'Pazi mi se na tom putu!',
            en: 'Take good care of yourself on that trip!',
            note: 'mi — the speaker cares; mi before se',
          },
          {
            hr: 'Nemoj mi plakati, sve će biti dobro.',
            en: "Don't cry, everything will be fine.",
            note: 'mi — comfort',
          },
          {
            hr: 'Ti ćeš mi sutra ranije ustati i pospremiti sobu!',
            en: "You're getting up earlier tomorrow and tidying your room!",
            note: 'mi — a parent insisting; ćeš before mi',
          },
          {
            hr: 'Da mi više nisi zakasnio na večeru!',
            en: "Don't you dare be late for dinner again!",
            note: 'mi — a warning with feeling in it',
          },
          {
            hr: 'Gle ti njega, opet je zaspao na kauču!',
            en: 'Just look at him, asleep on the sofa again!',
            note: 'ti — draws the listener in',
          },
          {
            hr: 'Kako vam je suprug nakon operacije?',
            en: 'How is your husband after the operation?',
            note: 'vam — polite and warm',
          },
        ],
      },
      {
        type: 'example',
        title: 'Going to a Person',
        items: [
          {
            hr: 'Sutra moram k zubaru, a onda idem baki.',
            en: "Tomorrow I have to go to the dentist, and then I'm going to grandma's.",
            note: 'k zubaru and baki — with and without k, both standard',
          },
          {
            hr: 'Pošli su ka kumu na krštenje.',
            en: 'They set off to their kum for the christening.',
            note: 'ka — before a word beginning with k',
          },
          {
            hr: 'Kad ti je teško, dođi k meni.',
            en: "When you're having a hard time, come to me.",
            note: 'k meni — the stressed pronoun after k',
          },
          {
            hr: 'Otišla je liječniku jer je boli grlo.',
            en: 'She went to the doctor because her throat hurts.',
            note: 'liječniku — direction with the bare dative',
          },
          {
            hr: 'Svake nedjelje idemo k roditeljima na ručak.',
            en: "Every Sunday we go to my parents' for lunch.",
            note: 'k roditeljima — dative plural after k',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'In "Pazi mi se!", what does mi do?',
        options: [
          'names who receives something',
          "shows the speaker's concern",
          'is the object of pazi',
          'marks the future',
        ],
        correct: 1,
        explanation:
          "Nobody receives anything: mi is the ethical dative, the speaker's involvement. Pazi se! says the same facts without it.",
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Before which word does k become ka?',
        options: ['liječniku', 'baki', 'kumu', 'sestri'],
        correct: 2,
        explanation: 'k becomes ka before a word beginning with k or g: ka kumu.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips. The first is the stressed form, "Pazi meni se" — the ethical dative is always a clitic, in second position: Pazi mi se. The second is the wrong place in the cluster, "Kako je ti mama?" — the dative clitic comes before je: Kako ti je mama? The third is "correcting" a good sentence: Idem liječniku and Idem k liječniku are both standard Croatian, and neither is an error.',
        highlight: 'always a clitic',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which sentence contains an ethical dative?',
            options: [
              'Nemoj mi plakati.',
              'Daj mi tu knjigu.',
              'Pokazao mi je put.',
              'Sestra mi je poslala pismo.',
            ],
            correct: 0,
            explanation:
              'In Nemoj mi plakati nobody receives anything; drop mi and the facts are unchanged. In the others mi is the recipient.',
          },
          {
            q: 'Put the clitics in order: "Kako ___ mama?"',
            options: ['je ti', 'ti je', 'te je', 'je te'],
            correct: 1,
            explanation: 'The dative clitic comes before je: Kako ti je mama?',
          },
          {
            q: 'Complete (a parent insisting): "Ti ___ sutra ranije ustati!"',
            options: ['mi ćeš', 'ćeš meni', 'ćeš mi', 'mi se'],
            correct: 2,
            explanation: 'ćeš comes first in the cluster, then the ethical dative clitic: ćeš mi.',
          },
          {
            q: 'What happens if you drop mi from "Nemoj mi plakati"?',
            options: [
              'the sentence becomes ungrammatical',
              "the facts stay the same; only the speaker's involvement goes",
              'plakati must change its form',
              'the sentence changes its subject',
            ],
            correct: 1,
            explanation:
              'That is the test for an ethical dative: it adds feeling, not a participant.',
          },
          {
            q: 'Which pair is BOTH standard Croatian?',
            options: [
              'Idem k liječnik. / Idem liječnik.',
              'Idem liječniku. / Idem k liječniku.',
              'Idem k liječnika. / Idem liječnika.',
              'Idem ka liječniku. / Idem k liječnika.',
            ],
            correct: 1,
            explanation:
              'A person as destination takes the dative, with or without k; both are standard.',
          },
          {
            q: 'Complete: "Dođi ___ kad stigneš u grad."',
            options: ['k mi', 'ka mi', 'k mene', 'k meni'],
            correct: 3,
            explanation: 'After a preposition the pronoun takes its stressed dative form: k meni.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Ethical Dative — Key Takeaways',
        points: [
          "The ethical dative adds the speaker's involvement, not a participant",
          'It is always a clitic — mi, ti, nam, vam — in the cluster before je and se',
          'Test: drop it and the facts stay the same',
          'It belongs to spoken, familiar Croatian',
          'Going to a person: Idem liječniku and Idem k liječniku are both standard',
          'k becomes ka before k and g; after k, pronouns are stressed: k meni',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Capitals in names of streets, institutions and events
  // ─────────────────────────────────────────────────────────
  {
    id: 'capitals-institutions',
    title: 'Capitals in Names of Places and Institutions',
    subtitle: 'Ulica kralja Zvonimira, Hrvatsko narodno kazalište, Domovinski rat',
    icon: '🏛️',
    level: 'C1',
    duration: '~6 min',
    color: '#1d4ed8',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The First Word, Then Only Names',
        body: 'English capitalises every major word of a name: the Croatian National Theatre, the Second World War. Croatian capitalises the FIRST word, and after that only the words that are names in their own right: Hrvatsko narodno kazalište, Drugi svjetski rat, Trg bana Josipa Jelačića. This lesson follows the current Hrvatski pravopis of the Institut za hrvatski jezik i jezikoslovlje.',
        icon: '🏛️',
      },
      {
        type: 'table',
        title: 'Streets and Squares',
        headers: ['Name', 'Why'],
        rows: [
          ['Ulica Ivana Gundulića', 'first word, then a personal name'],
          ['Ulica kralja Zvonimira', 'kralja is a title: lower case'],
          ['Trg bana Josipa Jelačića', 'bana is a title: lower case'],
          ['Ulica grada Vukovara', 'grada is a common noun; Vukovara a name'],
          ['Trg kralja Tomislava', 'title lower case, name capital'],
          ['Gundulićeva ulica, Markov trg', 'ulica and trg are not the first word'],
        ],
      },
      {
        type: 'rule',
        title: 'The Rule of the First Word',
        body: 'In a name of several words — a street, a square, a building, an institution, an organisation, a historical event — only the first word takes a capital. The others are lower case unless they are names in their own right. Titles (kralj, ban, sveti) and common nouns (grad, ulica, rat) inside the name are lower case.',
        highlight: 'only the first word',
      },
      {
        type: 'rule',
        title: 'Names Inside Names',
        body: 'A personal or geographical name inside a longer name keeps its capital: Sveučilište u Zagrebu, Ulica Ivana Gundulića, Vlada Republike Hrvatske. So does a whole name nested inside another: Filozofski fakultet Sveučilišta u Zagrebu, where Sveučilišta begins the name of the university.',
        highlight: 'Sveučilište u Zagrebu',
      },
      {
        type: 'table',
        title: 'Institutions, Organisations, Events',
        headers: ['Name', 'Note'],
        rows: [
          ['Hrvatsko narodno kazalište', 'only the first word'],
          ['Hrvatski sabor', 'the parliament'],
          ['Vlada Republike Hrvatske', 'Republika Hrvatska is itself a name'],
          ['Hrvatska akademija znanosti i umjetnosti', 'HAZU'],
          ['Matica hrvatska', 'hrvatska is the second word: lower case'],
          ['Domovinski rat', 'a named historical event'],
          ['Drugi svjetski rat', 'only the first word'],
          ['Hrvatsko proljeće', 'the events of 1971'],
        ],
      },
      {
        type: 'rule',
        title: 'Historical Events',
        body: 'Names of historical events follow the same rule: Domovinski rat, Prvi svjetski rat, Drugi svjetski rat, Hrvatsko proljeće, Francuska revolucija. The noun rat is lower case because it is not the first word; the event is named by the whole phrase, and the phrase starts with a capital.',
        highlight: 'Drugi svjetski rat',
      },
      {
        type: 'rule',
        title: 'When Nothing Is Being Named',
        body: 'The same words in their ordinary meaning are lower case: Sutra idem u kazalište. Studira na sveučilištu. Sabor je čudna riječ. The capital marks a NAME, so a common noun used for any theatre or any university stays small. Inflection does not change anything: the name keeps its capital in every case — u Ulici kralja Zvonimira, na Trgu bana Josipa Jelačića.',
        highlight: 'the name keeps its capital in every case',
      },
      {
        type: 'example',
        title: 'Places',
        items: [
          {
            hr: 'Stanujem u Ulici kralja Zvonimira, blizu tržnice.',
            en: 'I live in King Zvonimir Street, near the market.',
            note: 'kralja — a title, lower case',
          },
          {
            hr: 'Nađimo se na Trgu bana Josipa Jelačića u podne.',
            en: "Let's meet on Ban Josip Jelačić Square at noon.",
            note: 'Trgu — the name inflects, the capital stays',
          },
          {
            hr: 'Sjedište Vlade Republike Hrvatske nalazi se na Markovu trgu.',
            en: "The seat of the Croatian Government is on St Mark's Square.",
            note: 'Markovu trgu — the possessive adjective first, trg lower case',
          },
          {
            hr: 'Sinoć smo bili na premijeri u Hrvatskome narodnom kazalištu.',
            en: 'Last night we were at a premiere in the Croatian National Theatre.',
            note: 'only Hrvatskome takes a capital',
          },
          {
            hr: 'Moja sestra studira na Sveučilištu u Zagrebu.',
            en: 'My sister studies at the University of Zagreb.',
            note: 'Zagrebu — a name inside the name',
          },
          {
            hr: 'Sutra idem u kazalište, a ne na sveučilište.',
            en: "Tomorrow I'm going to the theatre, not to the university.",
            note: 'nothing named here: lower case',
          },
        ],
      },
      {
        type: 'example',
        title: 'Institutions and Events',
        items: [
          {
            hr: 'Hrvatski sabor izglasao je novi zakon.',
            en: 'The Croatian Parliament has passed a new law.',
            note: 'sabor — lower case after the first word',
          },
          {
            hr: 'Knjigu je objavila Matica hrvatska.',
            en: 'The book was published by Matica hrvatska.',
            note: 'hrvatska — lower case: not the first word',
          },
          {
            hr: 'Hrvatska akademija znanosti i umjetnosti osnovana je u Zagrebu.',
            en: 'The Croatian Academy of Sciences and Arts was founded in Zagreb.',
            note: 'akademija, znanosti, umjetnosti — all lower case',
          },
          {
            hr: 'Djed je sudjelovao u Domovinskom ratu.',
            en: 'Grandfather took part in the Homeland War.',
            note: 'Domovinskom — the first word of the event',
          },
          {
            hr: 'Zgrada je sagrađena prije Drugoga svjetskog rata.',
            en: 'The building was built before the Second World War.',
            note: 'svjetskog — lower case',
          },
          {
            hr: 'Na Filozofskom fakultetu predaje povijest Hrvatskoga proljeća.',
            en: 'At the Faculty of Humanities she teaches the history of the Croatian Spring.',
            note: 'proljeća — lower case inside the name',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is spelled correctly?',
        options: [
          'Hrvatsko Narodno Kazalište',
          'Hrvatsko narodno kazalište',
          'hrvatsko narodno kazalište',
          'Hrvatsko Narodno kazalište',
        ],
        correct: 1,
        explanation: 'Only the first word of the name takes a capital: Hrvatsko narodno kazalište.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which word in "Trg bana Josipa Jelačića" is lower case, and why?',
        options: [
          'Trg — it is a common noun',
          'bana — it is a title',
          'Josipa — it is a first name',
          'Jelačića — it is a surname',
        ],
        correct: 1,
        explanation:
          'Trg is the first word, Josipa Jelačića a personal name; bana is a title and is lower case.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'English habits cause most of the errors. The first is capitalising every word: "Sveučilište U Zagrebu", "Drugi Svjetski Rat" — only the first word and real names take capitals. The second is capitalising a title: "Ulica Kralja Zvonimira" — kralja is lower case. The third is a capital where nothing is named: "Sutra idem u Kazalište" — any theatre is kazalište, with a small k.',
        highlight: 'only the first word and real names',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is spelled correctly?',
            options: [
              'Sveučilište u Zagrebu',
              'Sveučilište U Zagrebu',
              'sveučilište u Zagrebu',
              'Sveučilište u zagrebu',
            ],
            correct: 0,
            explanation: 'First word capital, u lower case, Zagrebu a name: Sveučilište u Zagrebu.',
          },
          {
            q: 'Which street name is spelled correctly?',
            options: [
              'Ulica Kralja Zvonimira',
              'ulica kralja zvonimira',
              'Ulica kralja Zvonimira',
              'Ulica Kralja zvonimira',
            ],
            correct: 2,
            explanation: 'Ulica is the first word, kralja a title, Zvonimira a name.',
          },
          {
            q: 'Which is spelled correctly?',
            options: [
              'Drugi Svjetski Rat',
              'Drugi Svjetski rat',
              'Drugi svjetski Rat',
              'Drugi svjetski rat',
            ],
            correct: 3,
            explanation: 'Only the first word of the event: Drugi svjetski rat.',
          },
          {
            q: 'Which is spelled correctly?',
            options: ['Matica Hrvatska', 'Matica hrvatska', 'matica hrvatska', 'MATICA hrvatska'],
            correct: 1,
            explanation: 'Matica is the first word; hrvatska is lower case.',
          },
          {
            q: 'Which sentence is spelled correctly?',
            options: [
              'Večeras idemo u Kazalište.',
              'Večeras idemo u kazalište.',
              'Večeras idemo u KAZALIŠTE.',
              'večeras idemo u Kazalište.',
            ],
            correct: 1,
            explanation: 'No particular theatre is named, so kazalište is lower case.',
          },
          {
            q: 'In "Vlada Republike Hrvatske", why is Republike capitalised?',
            options: [
              'every word of an institution is capitalised',
              'it is the first word',
              'Republika Hrvatska is itself a name',
              'titles are capitalised',
            ],
            correct: 2,
            explanation: 'A name inside a name keeps its capitals.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Capitals in Names — Key Takeaways',
        points: [
          'In a name of several words only the first word takes a capital',
          'Names inside the name keep theirs: Sveučilište u Zagrebu',
          'Titles and common nouns are lower case: Ulica kralja Zvonimira',
          'Events too: Domovinski rat, Drugi svjetski rat',
          'The capital stays in every case: na Trgu bana Josipa Jelačića',
          'Nothing named, no capital: idem u kazalište',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Indefinite and definite adjectives
  // ─────────────────────────────────────────────────────────
  {
    id: 'indefinite-adjectives',
    title: 'Nov or Novi? Indefinite and Definite Adjectives',
    subtitle: 'Kakav? describes, Koji? identifies',
    icon: '🎨',
    level: 'C1',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Two Forms of One Adjective',
        body: 'Many masculine adjectives have two nominative forms: nov and novi, star and stari, dobar and dobri. The first is the indefinite form (neodređeni vid), the second the definite (određeni vid). The indefinite describes — what kind of thing; the definite identifies — which one. You have used both since A1; this lesson makes the choice deliberate.',
        icon: '🎨',
      },
      {
        type: 'table',
        title: 'Two Forms',
        headers: ['Indefinite (Kakav?)', 'Definite (Koji?)', 'English'],
        rows: [
          ['nov', 'novi', 'new'],
          ['star', 'stari', 'old'],
          ['dobar', 'dobri', 'good'],
          ['velik', 'veliki', 'big'],
          ['malen', 'mali', 'small'],
          ['crn', 'crni', 'black'],
          ['bolestan', 'bolesni', 'ill'],
          ['svijetao', 'svijetli', 'bright'],
        ],
      },
      {
        type: 'rule',
        title: 'Kakav? Describes, Koji? Identifies',
        body: 'Kakav je auto? — Nov. The question asks what kind, and the answer describes, so it takes the indefinite form. Koji auto? — Novi, ne stari. The question asks which one, and the answer identifies, so it takes the definite form. A predicate after biti usually describes: Grad je star. Film je bio dobar. Stan je malen.',
        highlight: 'Grad je star.',
      },
      {
        type: 'rule',
        title: 'Where You See the Difference',
        body: 'The two forms differ visibly only in the masculine nominative singular, and in the accusative of an inanimate masculine noun: nov kaput / novi kaput, kupio sam nov kaput. In the feminine, the neuter and the plural they look the same: nova kuća, novo selo, novi ljudi. So the choice you actually make is mostly the masculine one.',
        highlight: 'the masculine nominative singular',
      },
      {
        type: 'table',
        title: 'The Short Oblique Forms',
        headers: ['Case', 'Indefinite', 'Definite'],
        rows: [
          ['N', 'nov', 'novi'],
          ['G', 'nova', 'novoga, novog'],
          ['D', 'novu', 'novomu, novome, novom'],
          ['A (inanimate)', 'nov', 'novi'],
          ['L', 'novu', 'novome, novom'],
          ['I', 'novim', 'novim'],
        ],
      },
      {
        type: 'rule',
        title: 'Short Forms Today',
        body: 'The short indefinite forms in the oblique cases — genitive nova, dative and locative novu — are marked: literary, older, or kept in fixed descriptive phrases. You meet them in čovjek dobra srca, mladić visoka rasta, žena vedra duha. Everyday speech says čovjek dobrog srca, and both are standard; recognise the short forms, and use them where the phrase is fixed.',
        highlight: 'čovjek dobra srca',
      },
      {
        type: 'rule',
        title: 'Adjectives With Only One Form',
        body: 'Some adjectives have only the definite form: those in -ski, -čki, -ški (hrvatski, gradski), many in -nji and -ji (gornji, donji, jutarnji, božji), and comparatives and superlatives (bolji, najveći). Possessive adjectives in -ov, -ev, -in have only the indefinite: Markov, majčin. With these there is no choice to make.',
        highlight: 'hrvatski, bolji, najveći',
      },
      {
        type: 'example',
        title: 'Describing',
        items: [
          {
            hr: 'Kakav je tvoj novi stan? Malen, ali svijetao.',
            en: "What's your new flat like? Small, but bright.",
            note: 'malen, svijetao — indefinite: they describe',
          },
          {
            hr: 'Ovaj je grad star, ali dobro očuvan.',
            en: 'This town is old, but well preserved.',
            note: 'star — indefinite in the predicate',
          },
          {
            hr: 'Film je bio dobar, ali predug.',
            en: 'The film was good, but too long.',
            note: 'dobar — the predicate describes',
          },
          {
            hr: 'Moj je brat bolestan, pa danas neće doći.',
            en: "My brother is ill, so he won't come today.",
            note: 'bolestan — indefinite predicate',
          },
          {
            hr: 'U knjižnici sam našao jedan zanimljiv roman.',
            en: 'I found an interesting novel in the library.',
            note: 'zanimljiv — a novel, not the one',
          },
          {
            hr: 'Bio je to čovjek dobra srca i vedra duha.',
            en: 'He was a man with a good heart and a cheerful spirit.',
            note: 'dobra, vedra — short genitive in a fixed description',
          },
        ],
      },
      {
        type: 'example',
        title: 'Identifying, and the One-Form Adjectives',
        items: [
          {
            hr: 'Koji kaput želiš, crni ili smeđi?',
            en: 'Which coat do you want, the black one or the brown one?',
            note: 'crni, smeđi — definite: choosing one',
          },
          {
            hr: 'Daj mi onaj zanimljivi roman o kojem si pričao.',
            en: 'Give me that interesting novel you were talking about.',
            note: 'zanimljivi — definite: the one already mentioned',
          },
          {
            hr: 'Gornji kat je slobodan, a donji je zauzet.',
            en: 'The upper floor is free, and the lower one is taken.',
            note: 'gornji, donji — only definite; slobodan, zauzet — indefinite',
          },
          {
            hr: 'Kakav je Markov auto? Star, ali pouzdan.',
            en: "What's Marko's car like? Old, but reliable.",
            note: 'Markov — possessive: indefinite only',
          },
          {
            hr: 'Najbolji prijatelj kupio mi je nov bicikl.',
            en: 'My best friend bought me a new bicycle.',
            note: 'najbolji — superlatives are definite only; nov — indefinite',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which question does the indefinite form (nov, star) answer?',
        options: ['Koji?', 'Kakav?', 'Čiji?', 'Koliko?'],
        correct: 1,
        explanation: 'Kakav? asks for a description; the indefinite form describes.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which adjective has NO indefinite form?',
        options: ['nov', 'dobar', 'hrvatski', 'star'],
        correct: 2,
        explanation: 'Adjectives in -ski have only the definite form.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips. The first is the definite form in a plain description: "Film je bio dobri" — a predicate that describes takes the indefinite: Film je bio dobar. The second is inventing an indefinite for an adjective that has none: "Taj je običaj hrvatsk" — -ski adjectives have one form: hrvatski. The third is reading čovjek dobra srca as a mistake for dobrog: the short genitive is correct, only more literary.',
        highlight: 'Film je bio dobar',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which question does the definite form (novi, stari) answer?',
            options: ['Kakav?', 'Koji?', 'Čiji?', 'Gdje?'],
            correct: 1,
            explanation: 'Koji? asks which one; the definite form identifies.',
          },
          {
            q: 'Complete: "Kakav je zrak u planinama? — ___."',
            options: ['Čist', 'Čista', 'Čistog', 'Čistu'],
            correct: 0,
            explanation: 'Kakav asks for a description of a masculine noun: the indefinite čist.',
          },
          {
            q: 'Which adjective has only the definite form?',
            options: ['mlad', 'lijep', 'gradski', 'star'],
            correct: 2,
            explanation: '-ski adjectives have only the definite form.',
          },
          {
            q: 'What is the short genitive of the indefinite "nov"?',
            options: ['novi', 'nova', 'novu', 'novim'],
            correct: 1,
            explanation: 'Genitive nova (definite novoga, novog); novu is the dative and locative.',
          },
          {
            q: 'Which phrase is correct, if literary?',
            options: [
              'čovjek dobar srca',
              'čovjek dobri srca',
              'čovjek dobro srca',
              'čovjek dobra srca',
            ],
            correct: 3,
            explanation:
              'The adjective agrees with srca in the genitive, here in the short indefinite form: dobra srca.',
          },
          {
            q: 'What is the indefinite form of "mali"?',
            options: ['mal', 'malen', 'maleni', 'malo'],
            correct: 1,
            explanation: 'mali has a longer indefinite form: malen (Stan je malen).',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Indefinite and Definite — Key Takeaways',
        points: [
          'Indefinite (nov) describes and answers Kakav?; definite (novi) identifies and answers Koji?',
          'A describing predicate takes the indefinite: Grad je star',
          'The difference shows in the masculine nominative singular (and inanimate accusative)',
          'Short oblique forms (nova, novu) are literary or fixed: čovjek dobra srca',
          '-ski, -nji, comparatives and superlatives are definite only',
          'Possessives in -ov, -in are indefinite only: Markov, majčin',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The exclamatory and the emphatic dative
  // ─────────────────────────────────────────────────────────
  {
    id: 'exclamatory-dative',
    title: 'Blago tebi! The Exclamatory and Emphatic Dative',
    subtitle: 'Slava junacima, Jao meni, Tako mi svega',
    icon: '❗',
    level: 'C1',
    duration: '~6 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Datives With No Verb',
        body: 'Some of the strongest things said in Croatian are datives with no verb at all: Blago tebi! Jao meni! Slava junacima! Others swear an oath with a dative clitic: Tako mi svega! The Croaticum grammar calls the first the usklični dativ (exclamatory dative) and the second the emfatični dativ, also called the dativ zakletve (dative of the oath).',
        icon: '❗',
      },
      {
        type: 'table',
        title: 'The Exclamatory Dative',
        headers: ['Exclamation', 'Meaning'],
        rows: [
          ['Blago tebi!', 'Lucky you!'],
          ['Jao meni!', 'Woe is me! / Oh no!'],
          ['Teško onome tko…', 'Woe to anyone who…'],
          ['Hvala Bogu!', 'Thank God!'],
          ['Slava junacima!', 'Glory to the heroes!'],
          ['Čast i slava palim braniteljima!', 'Honour and glory to the fallen defenders!'],
          ['Pokoj mu duši!', 'May his soul rest in peace!'],
          ['Laka mu zemlja!', 'May the earth rest lightly on him!'],
        ],
      },
      {
        type: 'rule',
        title: 'No Verb, Just a Dative',
        body: 'After blago, jao and teško the dative names the person the feeling is about, and there is no verb: Blago tebi (lucky you), Jao meni (woe is me), Teško onome tko laže (woe to whoever lies). The pronoun is in its full, stressed form — tebi, meni, njima — because the whole exclamation rests on it.',
        highlight: 'Blago tebi!',
      },
      {
        type: 'rule',
        title: 'Slava, Čast, Hvala',
        body: 'The nouns slava (glory), čast (honour) and hvala (thanks) take the dative of whoever receives them: Slava junacima!, Čast i slava palim braniteljima!, Hvala Bogu! (also Bogu hvala!). The fixed wishes for the dead are built the same way: Pokoj mu duši!, Laka mu zemlja!',
        highlight: 'Hvala Bogu',
      },
      {
        type: 'table',
        title: 'The Emphatic Dative (Dative of the Oath)',
        headers: ['Oath', 'Meaning'],
        rows: [
          ['Tako mi svega!', 'I swear on everything (I hold dear)!'],
          ['Tako mi Boga!', 'So help me God!'],
          ['Majke mi!', 'I swear on my mother!'],
          ['Tako ti Boga, reci istinu!', "For God's sake, tell the truth!"],
        ],
      },
      {
        type: 'rule',
        title: 'The Oath: Clitic Plus Genitive',
        body: 'An oath is built from tako, an unstressed dative clitic and the genitive of what is sworn by: Tako mi svega, Tako mi Boga. The clitic names who swears — mi when the speaker does, ti when the listener is asked to: Tako ti Boga, reci istinu! The short colloquial form drops tako: Majke mi! Notice the contrast with blago tebi: the oath uses the clitic.',
        highlight: 'Tako mi svega',
      },
      {
        type: 'rule',
        title: 'Not Every Exclamation Is a Dative',
        body: 'Živjela Hrvatska! and Živio Ante! look like the exclamations above, but the name there is in the nominative: it is the subject of a wish (long live Croatia). Živjeli!, the toast, is a verb form with no dative at all. Ask who the exclamation is TO or ABOUT: if a person receives glory, thanks or pity, it is a dative.',
        highlight: 'Živjela Hrvatska!',
      },
      {
        type: 'example',
        title: 'Exclamations',
        items: [
          {
            hr: 'Blago tebi, sutra ideš na more!',
            en: "Lucky you, you're off to the seaside tomorrow!",
            note: 'tebi — stressed dative after blago',
          },
          {
            hr: 'Jao meni, opet sam zaboravio ključeve!',
            en: "Oh no, I've forgotten my keys again!",
            note: "meni — the speaker's own misfortune",
          },
          {
            hr: 'Hvala Bogu što nitko nije ozlijeđen.',
            en: 'Thank God nobody was hurt.',
            note: 'Bogu — dative of Bog',
          },
          {
            hr: 'Slava junacima koji su branili grad!',
            en: 'Glory to the heroes who defended the city!',
            note: 'junacima — dative plural of junak',
          },
          {
            hr: 'Čast i slava svim palim braniteljima.',
            en: 'Honour and glory to all the fallen defenders.',
            note: 'braniteljima — dative plural',
          },
          {
            hr: 'Pokoj mu duši, bio je dobar čovjek.',
            en: 'May his soul rest in peace, he was a good man.',
            note: 'mu and duši — both dative',
          },
          {
            hr: 'Blago djeci koja odrastaju uz baku i djeda.',
            en: 'Lucky are the children who grow up with a grandma and grandpa.',
            note: 'djeci — dative of djeca',
          },
          {
            hr: 'Teško onome tko ne zna plivati!',
            en: "Woe to anyone who can't swim!",
            note: 'onome — dative of onaj',
          },
        ],
      },
      {
        type: 'example',
        title: 'Oaths',
        items: [
          {
            hr: 'Tako mi svega, nisam ja to napravio!',
            en: "I swear on everything, I didn't do it!",
            note: 'mi — the dative of the oath; svega — genitive',
          },
          {
            hr: 'Majke mi, sad ću ti sve ispričati.',
            en: "I swear on my mother, I'll tell you everything now.",
            note: 'majke — genitive; mi — the oath',
          },
          {
            hr: 'Tako ti Boga, reci mi istinu.',
            en: "For God's sake, tell me the truth.",
            note: 'ti — the oath is put to the listener',
          },
          {
            hr: 'Laka mu zemlja, neka počiva u miru.',
            en: 'May the earth rest lightly on him, may he rest in peace.',
            note: 'mu — a fixed wish for the dead',
          },
          {
            hr: 'Tako ti svega, nemoj nikome reći što si vidio!',
            en: "For heaven's sake, don't tell anyone what you saw!",
            note: 'ti — the listener is asked to swear',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which form completes "Blago ___!" (lucky you)?',
        options: ['tebe', 'tebi', 'tvoj', 'ti si'],
        correct: 1,
        explanation: 'blago takes the dative; with a pronoun, its stressed form: Blago tebi!',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which exclamation contains NO dative?',
        options: ['Jao meni!', 'Slava junacima!', 'Živjela Hrvatska!', 'Hvala Bogu!'],
        correct: 2,
        explanation: 'In Živjela Hrvatska! the name is a nominative subject of the wish.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips. The first is the wrong case after slava: glory goes TO someone, so the dative — Slava junacima, not "Slava junake". The second is the stressed pronoun in an oath: "Tako meni svega" — the oath takes the clitic: Tako mi svega. The third is calling every exclamation a dative: in Živjela Hrvatska! the name is nominative, the subject of the wish.',
        highlight: 'Slava junacima',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ tebi, imaš tako dobru obitelj!"',
            options: ['Blago', 'Jao', 'Tako', 'Teško'],
            correct: 0,
            explanation: 'Envy and good wishes: Blago tebi! — lucky you.',
          },
          {
            q: 'Complete: "Jao ___, izgubio sam novčanik!" (woe is me)',
            options: ['meni', 'moj', 'ja', 'mojem'],
            correct: 0,
            explanation: 'jao takes the dative: Jao meni!',
          },
          {
            q: 'Complete: "Slava ___!" (to the heroes)',
            options: ['junaci', 'junake', 'junacima', 'junakom'],
            correct: 2,
            explanation: 'Glory goes to someone: dative plural junacima.',
          },
          {
            q: 'In "Tako mi svega!", what case is "mi"?',
            options: ['accusative', 'genitive', 'dative', 'nominative'],
            correct: 2,
            explanation: 'mi is the dative clitic of the oath; svega is the genitive.',
          },
          {
            q: 'What does the workbook call the dative in "Tako mi Boga!"?',
            options: [
              'usklični dativ',
              'emfatični dativ (dativ zakletve)',
              'etički dativ',
              'posvojni dativ',
            ],
            correct: 1,
            explanation: 'An oath uses the emfatični dativ, also called the dativ zakletve.',
          },
          {
            q: 'Which exclamation contains NO dative?',
            options: ['Hvala Bogu!', 'Blago tebi!', 'Teško onome!', 'Živio Ante!'],
            correct: 3,
            explanation: 'In Živio Ante! the name is the nominative subject of the wish.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Exclamatory and Emphatic Dative — Key Takeaways',
        points: [
          'Usklični dativ: Blago tebi!, Jao meni!, Teško onome tko…',
          'slava, čast, hvala + dative: Slava junacima!, Hvala Bogu!',
          'Fixed wishes: Pokoj mu duši!, Laka mu zemlja!',
          'Emfatični dativ (dativ zakletve): Tako mi svega!, Majke mi!',
          'Exclamations take the stressed pronoun; the oath takes the clitic',
          'Živjela Hrvatska! is a nominative, not a dative',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'hypocoristics-dvojica': {
    worked: [
      {
        title: 'Two Names, Two Cases',
        problem: 'Reci: "Ante isn\'t here, so give the letter to Jure."',
        en: "Say: Ante isn't here, so give the letter to Jure.",
        steps: [
          {
            label: 'Absence: nema + genitive',
            text: 'nema takes the genitive. The -e names look the same in the nominative and genitive: Ante nema.',
          },
          {
            label: 'Giving: the dative',
            text: 'dati takes the person in the dative, and the -e names take -i there: Juri.',
          },
          {
            label: 'The imperative',
            text: 'daj pismo — the thing given in the accusative.',
          },
        ],
        answer: 'Ante nema, pa daj pismo Juri.',
      },
      {
        title: 'Three Men, One Verb',
        problem: 'Reci: "Three colleagues (all men) came to the meeting."',
        en: 'Say: Three colleagues (all men) came to the meeting.',
        steps: [
          { label: 'Choose the noun', text: 'A group of three men is trojica.' },
          {
            label: 'The counted noun',
            text: 'trojica takes the genitive plural: kolega (kolega → kolega).',
          },
          {
            label: 'Agreement',
            text: 'Plural verb with the -la participle: su došla.',
          },
          {
            label: 'Word order',
            text: 'Put the place first and the clitic su second: Na sastanak su došla…',
          },
        ],
        answer: 'Na sastanak su došla trojica kolega.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Ovo je auto mojega brata ___." (Mirko)',
          options: ['Mirko', 'Mirka', 'Mirke', 'Mirki'],
          correct: 1,
          hint: 'Names in -ko decline like brat.',
          explanation: 'Mirka — the genitive of a -ko name ends in -a.',
        },
        {
          q: 'Complete: "Idemo u kino s ___." (Đuro)',
          options: ['Đurom', 'Đuru', 'Đure', 'Đuri'],
          correct: 0,
          hint: 'In the instrumental these names take the masculine ending.',
          explanation: 's Đurom — like žena elsewhere, but -om in the instrumental.',
        },
        {
          q: 'Complete: "Čestitao sam ___ rođendan." (Mate)',
          options: ['Mate', 'Matu', 'Mati', 'Matom'],
          correct: 2,
          hint: 'čestitati takes the person in the dative.',
          explanation: 'Mati — the dative of the -e names ends like ženi.',
        },
        {
          q: 'Complete: "Jučer sam vidio ___ u gradu." (Luka)',
          options: ['Luka', 'Luke', 'Luku', 'Lukom'],
          correct: 2,
          hint: 'The object of vidjeti; -a names follow žena.',
          explanation: 'Luku — the accusative, like ženu.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Naša Ante je dobila posao.',
            'Naš Ante je dobio posao.',
            'Naše Ante je dobilo posao.',
            'Naš Ante je dobila posao.',
          ],
          correct: 1,
          hint: 'Agreement follows the man, not the final vowel.',
          explanation: 'Masculine throughout: naš, dobio.',
        },
        {
          q: 'Complete: "___ sinova pomažu ocu na brodu." (two sons)',
          options: ['Dvije', 'Dvoje', 'Dvojica', 'Dva'],
          correct: 2,
          hint: 'A group of men, with the genitive plural sinova.',
          explanation: 'Dvojica sinova; dva would take sina.',
        },
        {
          q: 'Complete: "Pomogao sam ___ prijatelja." (to three friends, all men)',
          options: ['trojica', 'trojicu', 'trojici', 'trojicom'],
          correct: 2,
          hint: 'pomoći takes the dative, and the group noun declines like žena.',
          explanation: 'trojici prijatelja — dative.',
        },
        {
          q: 'Which group can NOT be counted with dvojica?',
          options: ['two brothers', 'two policemen', 'two sisters', 'two male doctors'],
          correct: 2,
          hint: 'The -ica group nouns count only one kind of person.',
          explanation: 'Two women are dvije sestre; dvojica counts men only.',
        },
        {
          type: 'type',
          q: 'Sutra idem kod ____ na kavu. (Ivo)',
          answer: 'Ive',
          hint: 'Two-syllable names in -o take the genitive of žena.',
          explanation: 'kod Ive — genitive.',
        },
        {
          type: 'type',
          q: 'Poklon sam dao ____. (Ante — to him)',
          answer: 'Anti',
          hint: 'The dative of the -e names ends like ženi.',
          explanation: 'dao sam Anti — dative.',
        },
        {
          type: 'type',
          q: 'U kafiću sjede ____ mladića. (four men as a group)',
          answer: 'četvorica',
          hint: 'The group noun for four men ends in -orica.',
          explanation: 'četvorica mladića — with a plural verb.',
        },
        {
          type: 'type',
          q: 'Razgovarao sam s ____ kolega. (two men — instrumental)',
          answer: 'dvojicom',
          hint: 'The group noun for two men declines like žena.',
          explanation: 's dvojicom kolega — instrumental.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ovo je stan ___." (Luka\'s)',
        options: ['Luka', 'Luke', 'Luki', 'Lukom'],
        correct: 1,
        explanation: 'The genitive of Luka is Luke, as for žena.',
      },
      {
        q: 'Complete: "Dao sam ključ ___." (Franjo)',
        options: ['Franjo', 'Franju', 'Franje', 'Franji'],
        correct: 3,
        explanation: 'dati + dative: Franji.',
      },
      {
        q: 'Complete: "Večeras idemo na koncert sa ___." (Zvonko)',
        options: ['Zvonkom', 'Zvonku', 'Zvonka', 'Zvonke'],
        correct: 0,
        explanation: 'sa (before z) + instrumental: sa Zvonkom.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Jure je bila sretna.',
          'Jure je bilo sretno.',
          'Jure je bio sretan.',
          'Jure su bili sretni.',
        ],
        correct: 2,
        explanation: 'Jure is a man: masculine singular agreement.',
      },
      {
        q: 'Complete: "___ studenata položila su ispit." (three men)',
        options: ['Tri', 'Troje', 'Trojica', 'Treći'],
        correct: 2,
        explanation:
          'Trojica + genitive plural studenata, with a plural verb. tri would take studenta; troje would take položilo je.',
      },
      {
        q: 'Complete: "Ta dvojica ___ svaki dan zajedno."',
        options: ['trči', 'trče', 'trčimo', 'trčiš'],
        correct: 1,
        explanation: 'dvojica takes a third-person plural verb: trče.',
      },
    ],
    vocab: [
      ['nadimak', 'nickname', 'Ante je nadimak za Antuna.'],
      ['hipokoristik', 'pet form of a name', 'Jure je hipokoristik imena Juraj.'],
      ['osobno ime', 'first name', 'Osobno ime piše se velikim slovom.'],
      ['prezime', 'surname', 'Kako se piše vaše prezime?'],
      ['trojica', 'three (men, as a group)', 'Trojica braće rade u istoj tvrtki.'],
      ['četvorica', 'four (men, as a group)', 'Četvorica igrača ostala su na klupi.'],
      ['petorica', 'five (men, as a group)', 'Petorica znanstvenika dobila su nagradu.'],
      ['kolega', 'colleague (male)', 'Razgovarao sam s kolegom Lukom.'],
      ['sklanjati', 'to decline (a noun)', 'Kako se sklanja ime Ante?'],
    ],
  },

  'ethical-dative': {
    worked: [
      {
        title: 'Adding Warmth to an Order',
        problem: 'Reci kao roditelj: "Don\'t you go out without a coat!" (ti — izaći, kaput)',
        en: "Say, as a parent: Don't you go out without a coat!",
        steps: [
          {
            label: 'The plain order',
            text: 'A negative order with nemoj + infinitive: Nemoj izaći bez kaputa.',
          },
          {
            label: 'Add the ethical dative',
            text: 'The speaker cares, so add the clitic mi in second position, right after nemoj.',
          },
          {
            label: 'Test it',
            text: 'Drop mi and the order is the same; only the feeling goes. So it is an ethical dative.',
          },
        ],
        answer: 'Nemoj mi izaći bez kaputa!',
      },
      {
        title: 'Going to a Person',
        problem: 'Reci na dva načina: "On Saturday we are going to our kum."',
        en: 'Say it two ways: On Saturday we are going to our kum.',
        steps: [
          {
            label: 'The case',
            text: 'Direction towards a person takes the dative: kum → kumu.',
          },
          {
            label: 'Without the preposition',
            text: 'The bare dative is standard: U subotu idemo kumu.',
          },
          {
            label: 'With the preposition',
            text: 'k is also standard, and before a word beginning with k it becomes ka.',
          },
        ],
        answer: 'U subotu idemo kumu. / U subotu idemo ka kumu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which dative is an ethical dative?',
          options: [
            'Kupio mi je kavu.',
            'Rekla mi je istinu.',
            'Kako ti je baka?',
            'Poslao mi je poruku.',
          ],
          correct: 2,
          hint: 'Look for the dative you could drop without losing a participant.',
          explanation: 'Kako ti je baka? — ti adds concern; nobody receives anything.',
        },
        {
          q: 'Complete: "Pazi ___!" (ethical dative + reflexive)',
          options: ['se mi', 'mi se', 'meni se', 'se meni'],
          correct: 1,
          hint: 'Dative clitics come before the reflexive.',
          explanation: 'Pazi mi se! — dative before se.',
        },
        {
          q: 'Complete: "Nemoj ___ se ljutiti, molim te."',
          options: ['mi', 'meni', 'me', 'moj'],
          correct: 0,
          hint: 'The ethical dative is always unstressed.',
          explanation: 'Nemoj mi se ljutiti — the clitic mi.',
        },
        {
          q: 'Complete: "Ti ___ sad lijepo pojesti ručak!"',
          options: ['mi ćeš', 'ćeš mi', 'ćeš meni', 'će mi'],
          correct: 1,
          hint: 'The auxiliary of the future opens the cluster.',
          explanation: 'Ti ćeš mi… — auxiliary, then dative.',
        },
        {
          q: 'Complete: "Idemo ___ Goranu na rođendan."',
          options: ['k', 'ka', 'kod', 'kao'],
          correct: 1,
          hint: 'Look at the first letter of the name.',
          explanation: 'Before g the preposition becomes ka: ka Goranu.',
        },
        {
          q: 'Complete: "Kad te boli zub, idi ___."',
          options: ['zubar', 'zubaru', 'zubara', 'zubarom'],
          correct: 1,
          hint: 'Direction towards a person, without a preposition.',
          explanation: 'idi zubaru — the dative of direction.',
        },
        {
          q: 'Is "Idem k liječniku" correct?',
          options: [
            'No — k is never used with persons',
            'Yes — and so is "Idem liječniku"',
            'No — it must be "ka liječniku"',
            'Only in poetry',
          ],
          correct: 1,
          hint: 'Both forms of direction to a person are standard.',
          explanation: 'Both are standard Croatian; ka is only for words beginning with k or g.',
        },
        {
          q: 'Complete: "Dođite ___ na kavu!"',
          options: ['k nama', 'k nam', 'ka nam', 'k nas'],
          correct: 0,
          hint: 'After a preposition, the pronoun takes its stressed form.',
          explanation: 'k + stressed dative plural: k nama.',
        },
        {
          type: 'type',
          q: 'Pazi ____ se na cesti! (ethical dative — I care about you)',
          answer: 'mi',
          hint: 'The first-person dative clitic.',
          explanation: 'Pazi mi se — mi before se.',
        },
        {
          type: 'type',
          q: 'Kako ____ je tata? (asking a friend)',
          answer: 'ti',
          hint: 'The second-person dative clitic, before je.',
          explanation: 'Kako ti je tata?',
        },
        {
          type: 'type',
          q: 'Sutra idemo ____ na ručak. (to grandma — baka)',
          answer: 'baki',
          hint: 'Direction to a person: the dative.',
          explanation: 'idemo baki — the bare dative of direction.',
        },
        {
          type: 'type',
          q: 'Svratili smo ____ kumu. (the preposition)',
          answer: 'ka',
          hint: 'k gains a vowel before a word beginning with k or g.',
          explanation: 'ka kumu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which sentence contains an ethical dative?',
        options: [
          'Napisao mi je pismo.',
          'Odgovorila mi je odmah.',
          'Da mi više nisi zakasnio!',
          'Posudio mi je novac.',
        ],
        correct: 2,
        explanation:
          'Drop mi from the warning and the facts are unchanged; in the others mi receives or is answered.',
      },
      {
        q: 'Complete (to a neighbour, politely): "Kako ___ je suprug?"',
        options: ['vam', 'vas', 'vama', 'vi'],
        correct: 0,
        explanation: 'The polite dative clitic vam: Kako vam je suprug?',
      },
      {
        q: 'What does the ethical dative add?',
        options: [
          'a new participant',
          "the speaker's emotional involvement",
          'a past-tense meaning',
          'politeness only in writing',
        ],
        correct: 1,
        explanation: 'It adds feeling, not a participant.',
      },
      {
        q: 'Which form can an ethical dative take?',
        options: ['meni', 'mi', 'mene', 'moj'],
        correct: 1,
        explanation: 'Always the clitic: mi, ti, nam, vam.',
      },
      {
        q: 'Complete: "Večeras idemo ___ Krešimiru."',
        options: ['k', 'ka', 'kod', 's'],
        correct: 1,
        explanation: 'Before a word beginning with k: ka Krešimiru.',
      },
      {
        q: 'Which statement is true?',
        options: [
          'Only "k liječniku" is standard.',
          'Only "liječniku" is standard.',
          '"Idem liječniku" and "Idem k liječniku" are both standard.',
          'Neither is standard; use "kod".',
        ],
        correct: 2,
        explanation: 'Direction to a person: the dative, with or without k.',
      },
    ],
    vocab: [
      ['etički dativ', 'ethical dative', 'U rečenici "Pazi mi se!" mi je etički dativ.'],
      ['nenaglasnica', 'clitic', 'Etički dativ uvijek je nenaglasnica.'],
      ['liječnik', 'doctor', 'Sutra idem k liječniku.'],
      ['zubar', 'dentist', 'Otišla je zubaru jer je boli zub.'],
      ['kum', 'godfather; best man', 'Kum nam je došao na krštenje.'],
      ['svratiti', 'to drop in', 'Svratit ću k vama poslije posla.'],
      ['pospremiti', 'to tidy up', 'Ti ćeš mi pospremiti sobu!'],
      ['zakasniti', 'to be late', 'Da mi više nisi zakasnio!'],
      ['krštenje', 'christening', 'Krštenje je u nedjelju u deset.'],
    ],
  },

  'capitals-institutions': {
    worked: [
      {
        title: 'Spelling a Square',
        problem: 'Napiši pravilno: "trg kralja tomislava"',
        en: 'Write correctly: King Tomislav Square',
        steps: [
          {
            label: 'The first word',
            text: 'The name starts with trg, so it takes a capital: Trg.',
          },
          { label: 'The title', text: 'kralja is a title, not a name: lower case.' },
          { label: 'The name', text: 'Tomislava is a personal name: capital.' },
        ],
        answer: 'Trg kralja Tomislava',
      },
      {
        title: 'An Institution With a Name Inside It',
        problem: 'Napiši pravilno: "filozofski fakultet sveučilišta u zagrebu"',
        en: 'Write correctly: the Faculty of Humanities of the University of Zagreb',
        steps: [
          { label: 'The first word', text: 'Filozofski opens the name: capital.' },
          { label: 'Common nouns', text: 'fakultet is not the first word: lower case.' },
          {
            label: 'A nested name',
            text: 'Sveučilište u Zagrebu is a name in its own right, so its first word keeps its capital: Sveučilišta; u stays lower case.',
          },
          { label: 'The place', text: 'Zagrebu is a geographical name: capital.' },
        ],
        answer: 'Filozofski fakultet Sveučilišta u Zagrebu',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is spelled correctly?',
          options: ['Hrvatski Sabor', 'hrvatski sabor', 'Hrvatski sabor', 'HRVATSKI sabor'],
          correct: 2,
          hint: 'Only the first word of the name.',
          explanation: 'Hrvatski sabor.',
        },
        {
          q: 'Which is spelled correctly?',
          options: [
            'Ulica Grada Vukovara',
            'Ulica grada Vukovara',
            'Ulica grada vukovara',
            'ulica Grada Vukovara',
          ],
          correct: 1,
          hint: 'A common noun inside the name is lower case; a place name is not.',
          explanation: 'Ulica grada Vukovara.',
        },
        {
          q: 'Which is spelled correctly?',
          options: [
            'Hrvatska akademija znanosti i umjetnosti',
            'Hrvatska Akademija Znanosti i Umjetnosti',
            'Hrvatska akademija Znanosti i umjetnosti',
            'hrvatska akademija znanosti i umjetnosti',
          ],
          correct: 0,
          hint: 'Nothing after the first word is a name.',
          explanation: 'Hrvatska akademija znanosti i umjetnosti.',
        },
        {
          q: 'Which is spelled correctly?',
          options: ['Domovinski Rat', 'domovinski Rat', 'Domovinski rat', 'DOMOVINSKI rat'],
          correct: 2,
          hint: 'An event follows the rule of the first word.',
          explanation: 'Domovinski rat.',
        },
        {
          q: 'Which is spelled correctly?',
          options: [
            'Gundulićeva Ulica',
            'Gundulićeva ulica',
            'gundulićeva ulica',
            'Gundulićeva ULICA',
          ],
          correct: 1,
          hint: 'Here the street noun is not the first word.',
          explanation: 'Gundulićeva ulica.',
        },
        {
          q: 'Which is spelled correctly?',
          options: ['Europska Unija', 'europska unija', 'Europska unija', 'Europska UNIJA'],
          correct: 2,
          hint: 'An organisation follows the same rule as an institution.',
          explanation: 'Europska unija.',
        },
        {
          q: 'Which sentence is spelled correctly?',
          options: [
            'Upisala je fakultet prošle godine.',
            'Upisala je Fakultet prošle godine.',
            'upisala je fakultet prošle godine.',
            'Upisala je FAKULTET prošle godine.',
          ],
          correct: 0,
          hint: 'No particular faculty is named.',
          explanation: 'fakultet is a common noun here.',
        },
        {
          q: 'Which is spelled correctly?',
          options: [
            'Trg Bana Josipa Jelačića',
            'Trg bana Josipa Jelačića',
            'trg bana Josipa Jelačića',
            'Trg bana josipa jelačića',
          ],
          correct: 1,
          hint: 'A title is lower case; a personal name is not.',
          explanation: 'Trg bana Josipa Jelačića.',
        },
        {
          type: 'type',
          q: 'Stanujem u ____ Ivana Gundulića. (ulica)',
          answer: 'Ulici',
          hint: 'Locative after u; the first word of the name keeps its capital.',
          explanation: 'u Ulici Ivana Gundulića.',
        },
        {
          type: 'type',
          q: 'Nađimo se na ____ kralja Tomislava. (trg)',
          answer: 'Trgu',
          hint: 'Locative after na.',
          explanation: 'na Trgu kralja Tomislava.',
        },
        {
          type: 'type',
          q: 'Djed je govorio o ____ ratu. (the Homeland War)',
          answer: 'Domovinskom',
          accept: ['Domovinskome'],
          hint: 'The locative of the adjective after o; it is the first word of the name.',
          explanation: 'o Domovinskom ratu.',
        },
        {
          type: 'type',
          q: 'Predstava je u Hrvatskome ____ kazalištu. (national)',
          answer: 'narodnom',
          accept: ['narodnome'],
          hint: 'Locative, agreeing with kazalištu; not the first word.',
          explanation: 'u Hrvatskome narodnom kazalištu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is spelled correctly?',
        options: [
          'Prvi Svjetski Rat',
          'Prvi svjetski rat',
          'Prvi Svjetski rat',
          'prvi Svjetski rat',
        ],
        correct: 1,
        explanation: 'Only the first word: Prvi svjetski rat.',
      },
      {
        q: 'Which is spelled correctly?',
        options: [
          'Nacionalna i sveučilišna knjižnica u Zagrebu',
          'Nacionalna i Sveučilišna Knjižnica u Zagrebu',
          'Nacionalna i sveučilišna knjižnica u zagrebu',
          'nacionalna i sveučilišna knjižnica u Zagrebu',
        ],
        correct: 0,
        explanation: 'First word and the place name: Nacionalna … u Zagrebu.',
      },
      {
        q: 'Which is spelled correctly?',
        options: [
          'Trg Kralja Tomislava',
          'Trg kralja tomislava',
          'trg Kralja Tomislava',
          'Trg kralja Tomislava',
        ],
        correct: 3,
        explanation: 'First word, a lower-case title, then the name.',
      },
      {
        q: 'Which sentence is spelled correctly?',
        options: [
          'Studira na Sveučilištu u Zagrebu.',
          'Studira na Sveučilištu U Zagrebu.',
          'Studira na Sveučilištu u zagrebu.',
          'Studira Na Sveučilištu U Zagrebu.',
        ],
        correct: 0,
        explanation: 'The name keeps its capitals in the locative: na Sveučilištu u Zagrebu.',
      },
      {
        q: 'Why is "hrvatska" lower case in "Matica hrvatska"?',
        options: [
          'it is a title',
          'it is not the first word and not a name',
          'it is a foreign word',
          'it is in the genitive',
        ],
        correct: 1,
        explanation: 'Only the first word and real names take capitals.',
      },
      {
        q: 'Which is spelled correctly?',
        options: [
          'Hrvatsko Proljeće',
          'Hrvatsko proljeće',
          'hrvatsko Proljeće',
          'HRVATSKO proljeće',
        ],
        correct: 1,
        explanation: 'An event: only the first word.',
      },
    ],
    vocab: [
      ['ulica', 'street', 'Stanujem u Ulici Ivana Gundulića.'],
      ['trg', 'square', 'Nađimo se na Trgu bana Josipa Jelačića.'],
      ['ustanova', 'institution', 'Svaka ustanova ima svoje službeno ime.'],
      ['sveučilište', 'university', 'Studira na Sveučilištu u Splitu.'],
      ['kazalište', 'theatre', 'Hrvatsko narodno kazalište u Zagrebu otvoreno je 1895.'],
      ['sabor', 'parliament', 'Hrvatski sabor zasjeda na Markovu trgu.'],
      ['pravopis', 'orthography; spelling rules', 'Pravopis propisuje veliko početno slovo.'],
      ['veliko slovo', 'capital letter', 'Ime ustanove počinje velikim slovom.'],
      ['povijesni događaj', 'historical event', 'Domovinski rat važan je povijesni događaj.'],
    ],
  },

  'indefinite-adjectives': {
    worked: [
      {
        title: 'Describe or Identify?',
        problem: 'Odgovori: "Kakav ti je posao?" (interesting, but hard)',
        en: 'Answer: What is your job like? (interesting, but hard)',
        steps: [
          {
            label: 'Read the question',
            text: 'Kakav asks what kind: the answer describes, so it takes the indefinite form.',
          },
          {
            label: 'The forms',
            text: 'posao is masculine: zanimljiv, težak (with the fleeting a).',
          },
          {
            label: 'Build the answer',
            text: 'Add je after the first word and join with ali.',
          },
        ],
        answer: 'Zanimljiv je, ali težak.',
      },
      {
        title: 'Choosing One',
        problem: 'Reci: "Which coat will you wear — the black one or the grey one?"',
        en: 'Say: Which coat will you wear — the black one or the grey one?',
        steps: [
          {
            label: 'Read the question',
            text: 'Koji asks which one: the answer identifies, so it takes the definite form.',
          },
          { label: 'The forms', text: 'kaput is masculine: crni, sivi.' },
          {
            label: 'Word order',
            text: 'The clitic ćeš comes second, right after koji: Koji ćeš kaput obući…',
          },
        ],
        answer: 'Koji ćeš kaput obući, crni ili sivi?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Kakav je novi kolega? — Vrlo ___."',
          options: ['ljubazan', 'ljubazna', 'ljubaznog', 'ljubaznom'],
          correct: 0,
          hint: 'Kakav asks for a description of a man.',
          explanation: 'ljubazan — the indefinite form describes.',
        },
        {
          q: 'Complete: "Koji kaput? — ___." (the black one)',
          options: ['Crni.', 'Crn.', 'Crna.', 'Crnog.'],
          correct: 0,
          hint: 'Koji asks you to pick one.',
          explanation: 'Crni — the definite form identifies.',
        },
        {
          q: 'Which adjective has only the definite form?',
          options: ['zimski', 'topao', 'hladan', 'mokar'],
          correct: 0,
          hint: 'Look at the suffix.',
          explanation: 'Adjectives in -ski have only the definite form.',
        },
        {
          q: 'Which adjective has only the indefinite form?',
          options: ['plavi', 'majčin', 'gornji', 'najstariji'],
          correct: 1,
          hint: 'Possessive adjectives in -in and -ov.',
          explanation: 'majčin — possessive adjectives are indefinite only.',
        },
        {
          q: 'Complete: "Ovaj je kruh ___." (fresh)',
          options: ['svježa', 'svježeg', 'svjež', 'svježe'],
          correct: 2,
          hint: 'A masculine predicate that describes.',
          explanation: 'svjež — indefinite, masculine.',
        },
        {
          q: 'What is the indefinite form of "teški"?',
          options: ['teška', 'težak', 'teško', 'teškog'],
          correct: 1,
          hint: 'It has a fleeting a, and k changes before it.',
          explanation: 'težak — teški in its indefinite form.',
        },
        {
          q: 'Complete (literary): "Ušao je mladić visoka ___."',
          options: ['rast', 'rasta', 'rastu', 'rastom'],
          correct: 1,
          hint: 'The noun is in the same case as the short adjective.',
          explanation: 'visoka rasta — both genitive.',
        },
        {
          q: 'Where does the indefinite/definite difference show?',
          options: [
            'in every case and gender',
            'in the masculine nominative singular (and inanimate accusative)',
            'only in the plural',
            'only in the feminine',
          ],
          correct: 1,
          hint: 'Feminine and neuter forms look the same either way.',
          explanation: 'nov / novi — the masculine nominative singular.',
        },
        {
          type: 'type',
          q: 'Kakav je tvoj grad? — ____ i lijep. (old)',
          answer: 'Star',
          hint: 'A description: the short masculine form.',
          explanation: 'Star i lijep — indefinite.',
        },
        {
          type: 'type',
          q: 'Film je bio ____. (good)',
          answer: 'dobar',
          hint: 'The indefinite form, with the fleeting a.',
          explanation: 'Film je bio dobar.',
        },
        {
          type: 'type',
          q: 'Koji ti se kaput sviđa? — ____. (the grey one)',
          answer: 'Sivi',
          hint: 'Koji asks you to pick one: the definite form.',
          explanation: 'Sivi — definite.',
        },
        {
          type: 'type',
          q: 'Ovaj je stan ____. (small — the indefinite form)',
          answer: 'malen',
          hint: 'mali has a separate, longer indefinite form.',
          explanation: 'Stan je malen.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which question does the indefinite form (nov, star) answer?',
        options: ['Koji?', 'Čiji?', 'Kakav?', 'Kamo?'],
        correct: 2,
        explanation: 'Kakav? asks for a description.',
      },
      {
        q: 'Complete: "Kakav je bio ispit? — ___."',
        options: ['Lagana', 'Lagan', 'Laganu', 'Laganog'],
        correct: 1,
        explanation: 'A description of a masculine noun: lagan.',
      },
      {
        q: 'Which adjective has no indefinite form?',
        options: ['bijel', 'svjež', 'najbolji', 'topao'],
        correct: 2,
        explanation: 'Superlatives are definite only.',
      },
      {
        q: 'What is the short dative and locative of the indefinite "nov"?',
        options: ['novu', 'nova', 'novi', 'novo'],
        correct: 0,
        explanation: 'novu (definite novome, novom).',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Moj je otac zdrava.',
          'Moj je otac zdravo.',
          'Moj je otac zdravu.',
          'Moj je otac zdrav.',
        ],
        correct: 3,
        explanation: 'A masculine predicate that describes: zdrav.',
      },
      {
        q: 'Which phrase uses the short genitive?',
        options: ['žena vedra duha', 'žena vedrog duha', 'žena vedrim duhom', 'žena vedar duh'],
        correct: 0,
        explanation: 'vedra duha — short indefinite genitive; vedrog duha is the everyday form.',
      },
    ],
    vocab: [
      ['neodređeni vid', 'indefinite form (of an adjective)', 'Nov je neodređeni vid pridjeva.'],
      ['određeni vid', 'definite form (of an adjective)', 'Novi je određeni vid pridjeva.'],
      ['opisivati', 'to describe', 'Pridjev u predikatu opisuje imenicu.'],
      ['malen', 'small', 'Stan je malen, ali udoban.'],
      ['svijetao', 'bright', 'Ured je svijetao i prostran.'],
      ['pouzdan', 'reliable', 'Auto je star, ali pouzdan.'],
      ['rast', 'height, stature', 'Bio je visoka rasta.'],
      ['duh', 'spirit', 'Baka je žena vedra duha.'],
      ['zanimljiv', 'interesting', 'Posao mi je zanimljiv.'],
    ],
  },

  'exclamatory-dative': {
    worked: [
      {
        title: 'An Exclamation of Envy',
        problem: 'Reci prijateljici: "Lucky you, you have two weeks off!"',
        en: 'Say to a friend: Lucky you, you have two weeks off!',
        steps: [
          { label: 'The exclamation', text: 'Lucky you is blago + the dative of the person.' },
          { label: 'The pronoun', text: 'The stressed dative of ti: tebi.' },
          {
            label: 'The rest',
            text: 'imaš dva tjedna godišnjeg — two weeks of annual leave.',
          },
        ],
        answer: 'Blago tebi, imaš dva tjedna godišnjeg!',
      },
      {
        title: 'Swearing It Is True',
        problem: 'Reci: "I swear on everything, I didn\'t know!"',
        en: "Say: I swear on everything, I didn't know!",
        steps: [
          { label: 'The oath', text: 'tako + the dative clitic of the speaker: Tako mi…' },
          { label: 'What you swear by', text: 'The genitive of sve: svega.' },
          { label: 'The statement', text: 'After a comma: nisam znao.' },
        ],
        answer: 'Tako mi svega, nisam znao!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Hvala ___ što je kiša prestala."',
          options: ['Bog', 'Boga', 'Bogu', 'Bogom'],
          correct: 2,
          hint: 'Thanks go TO someone.',
          explanation: 'Hvala Bogu — dative.',
        },
        {
          q: 'Complete: "___ meni, izgubio sam novčanik!"',
          options: ['Jao', 'Blago', 'Slava', 'Hvala'],
          correct: 0,
          hint: 'A misfortune, not glory or luck.',
          explanation: 'Jao meni! — woe is me.',
        },
        {
          q: 'Complete: "Slava ___ braniteljima!"',
          options: ['pali', 'palim', 'palih', 'pale'],
          correct: 1,
          hint: 'The adjective agrees with a dative plural.',
          explanation: 'palim braniteljima — dative plural.',
        },
        {
          q: 'Complete: "Tako ___ svega, govorim istinu!"',
          options: ['mi', 'meni', 'me', 'moj'],
          correct: 0,
          hint: 'The oath takes the unstressed dative.',
          explanation: 'Tako mi svega.',
        },
        {
          q: 'Which uses the dative of the oath?',
          options: ['Blago tebi!', 'Jao meni!', 'Tako mi Boga!', 'Hvala Bogu!'],
          correct: 2,
          hint: 'An oath is sworn by something, in the genitive.',
          explanation: 'Tako mi Boga — the emfatični dativ.',
        },
        {
          q: 'Complete: "Pokoj mu ___."',
          options: ['duša', 'dušu', 'duši', 'dušom'],
          correct: 2,
          hint: 'Peace is wished TO the soul.',
          explanation: 'Pokoj mu duši — dative.',
        },
        {
          q: 'Complete: "Blago ___ koji znaju jezike!"',
          options: ['oni', 'onima', 'onih', 'one'],
          correct: 1,
          hint: 'blago takes the dative, here plural.',
          explanation: 'Blago onima — dative plural of oni.',
        },
        {
          q: 'Which is an exclamatory dative (usklični dativ)?',
          options: ['Daj mi kruha.', 'Teško onome tko laže!', 'Pomogao sam mu.', 'Tako mi svega!'],
          correct: 1,
          hint: 'No verb, and the dative is the person the feeling is about.',
          explanation: 'Teško onome… — an exclamation built on the dative.',
        },
        {
          type: 'type',
          q: 'Blago ____, sutra si slobodan! (you)',
          answer: 'tebi',
          hint: 'The stressed dative of ti.',
          explanation: 'Blago tebi!',
        },
        {
          type: 'type',
          q: 'Jao ____, zakasnit ću na vlak! (me)',
          answer: 'meni',
          hint: 'The stressed dative of ja.',
          explanation: 'Jao meni!',
        },
        {
          type: 'type',
          q: 'Slava ____! (heroes — junaci)',
          answer: 'junacima',
          hint: 'Dative plural.',
          explanation: 'Slava junacima!',
        },
        {
          type: 'type',
          q: 'Hvala ____ što si došao! (God — Bog)',
          answer: 'Bogu',
          hint: 'Thanks go to someone: the dative.',
          explanation: 'Hvala Bogu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ tebi, položio si sve ispite!"',
        options: ['Jao', 'Blago', 'Tako', 'Teško'],
        correct: 1,
        explanation: 'Good fortune: Blago tebi!',
      },
      {
        q: 'Complete: "Hvala ___!" (God)',
        options: ['Bog', 'Boga', 'Bogom', 'Bogu'],
        correct: 3,
        explanation: 'Thanks go to someone: Hvala Bogu.',
      },
      {
        q: 'Complete: "Čast i slava ___!" (to the fallen defenders)',
        options: ['palim braniteljima', 'pale branitelje', 'palim braniteljem', 'pali branitelji'],
        correct: 0,
        explanation: 'Dative plural: palim braniteljima.',
      },
      {
        q: 'In "Majke mi!", what is the oath sworn on?',
        options: ['the speaker', 'the mother', 'the listener', 'God'],
        correct: 1,
        explanation: 'majke is the genitive of what is sworn by; mi is the dative of the speaker.',
      },
      {
        q: 'Which pronoun completes the oath "Tako ___ Boga!" when the SPEAKER swears?',
        options: ['meni', 'mi', 'ti', 'tebi'],
        correct: 1,
        explanation: 'The oath takes the clitic of the one who swears: Tako mi Boga.',
      },
      {
        q: 'What case is "Hrvatska" in "Živjela Hrvatska!"?',
        options: ['dative', 'genitive', 'nominative', 'accusative'],
        correct: 2,
        explanation: 'It is the subject of the wish: nominative.',
      },
    ],
    vocab: [
      ['blago', 'lucky (+ dative)', 'Blago tebi, ideš na more!'],
      ['jao', 'alas, oh no', 'Jao meni, zaboravio sam!'],
      ['slava', 'glory', 'Slava junacima!'],
      ['čast', 'honour', 'Čast i slava palim braniteljima.'],
      ['zakletva', 'oath', 'Dao je zakletvu pred sucem.'],
      ['pokoj', 'rest, peace (of the dead)', 'Pokoj mu duši.'],
      ['branitelj', 'defender', 'Branitelji su obranili grad.'],
      ['junak', 'hero', 'Junaci se ne boje.'],
      ['uzvik', 'exclamation', 'Iz dvorane se čuo uzvik.'],
    ],
  },
};
