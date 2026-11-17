// ─── B2 lessons in class order — Units 5–6 (lessons 21–30) ───────────────────
// Same shape and rules as the A1, A2 and B1 class files:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1, the B2 lessons before each lesson, and the lesson itself
// have taught. Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed
// politely; the plural vi for several people is written small. Colloquial words are
// always labeled as colloquial, never offered as the standard form. Existing typed
// items whose answer is a short or very common word (kim, je, Pa, biste, prije,
// žive, stvar) open their mix, so that nothing printed earlier gives it away.

export const CLASS_B2_U05_06 = {
  // ══ UNIT 5 ═════════════════════════════════════════════════════════════════

  // ── Someone, no one, anyone — in every case ────────────────────────────────
  'indefinite-pronouns-cases': {
    text: {
      kind: 'dialogue',
      title: 'Tko je to rekao?',
      lines: [
        {
          who: 'Petra',
          hr: 'Jesi li ikomu rekao da se tvrtka seli u Rijeku? Šef je bijesan jer netko to već priča po cijeloj zgradi.',
          en: 'Have you told anyone that the company is moving to Rijeka? The boss is furious because someone is already spreading it around the whole building.',
        },
        {
          who: 'Davor',
          hr: 'Nisam nikomu ništa rekao. Ni s kim o tome nisam razgovarao, čak ni sa ženom.',
          en: 'I have not told anyone anything. I have not talked about it with anyone, not even with my wife.',
        },
        {
          who: 'Petra',
          hr: 'Čudno. Svatko tvrdi da ništa ne zna, a ipak svi znaju sve.',
          en: 'Strange. Everyone claims to know nothing, and yet everybody knows everything.',
        },
        {
          who: 'Davor',
          hr: 'Možda je netko nešto čuo na hodniku. Jučer sam vidio nekoga iz računovodstva pred šefovim vratima.',
          en: 'Maybe someone heard something in the hallway. Yesterday I saw someone from accounting in front of the boss’s door.',
        },
        { who: 'Petra', hr: 'Nekoga? Zar ne znaš koga?', en: 'Someone? Don’t you know who?' },
        {
          who: 'Davor',
          hr: 'Nisam mu vidio lice. Uostalom, ne želim nikoga optuživati bez ikakvih dokaza.',
          en: 'I did not see his face. Besides, I do not want to accuse anyone without any proof at all.',
        },
        {
          who: 'Petra',
          hr: 'Imaš pravo. Ali šef sada sumnja u svakoga i ni od koga ne prima savjete.',
          en: 'You are right. But the boss now suspects everyone and takes advice from no one.',
        },
        {
          who: 'Davor',
          hr: 'Onda mu nemojmo ništa govoriti dok se ne smiri. Je li itko uopće vidio službenu obavijest?',
          en: 'Then let’s not tell him anything until he calms down. Has anyone at all actually seen an official notice?',
        },
        {
          who: 'Petra',
          hr: 'Nitko. Zato se i priča svašta — kad nema informacija, ljudi ih izmišljaju.',
          en: 'No one. That is why all sorts of things are being said — when there is no information, people make it up.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Davor see yesterday, and why will he not name anybody?',
          options: [
            'He saw the boss reading the official notice, and he promised to keep quiet',
            'He saw someone from accounting at the boss’s door, but he did not see the face and has no proof',
            'He saw his wife talking to the boss, and he does not want to accuse her',
            'He saw nobody at all, because he was not in the building',
          ],
          correct: 1,
          hint: 'Think of the hallway, a department, and what Davor could not see.',
          explanation:
            'Vidio je nekoga iz računovodstva pred šefovim vratima, but he did not see the face — and he will not accuse anyone bez ikakvih dokaza.',
        },
        {
          q: 'Davor says "Ni s kim o tome nisam razgovarao." Why is "ni" separated from "kim"?',
          options: [
            'Because the sentence is in the past tense',
            'Because "ni" here means "neither… nor" and a second "ni" is missing',
            'Because a preposition stands with the pronoun, and standard Croatian puts it between ni and the rest of the word',
            'Because Davor is speaking informally and shortening the word',
          ],
          correct: 2,
          hint: 'Look at the small word standing between the two parts. Petra does the same later with "od".',
          explanation:
            'With a preposition, nitko and ništa split in two and the preposition goes in the middle: ni s kim, ni od koga. The verb is negated as usual: nisam razgovarao.',
        },
        {
          type: 'type',
          q: 'Now you. Davor has forgotten the whole conversation: Davor se ne sjeća ____. (nothing — sjećati se takes the genitive)',
          answer: 'ničega',
          accept: ['ničeg'],
          hint: 'The "thing" word with the no-prefix, declined like što in the genitive.',
          explanation:
            'Davor se ne sjeća ničega. — ništa follows što through the cases (čega → ničega), and the verb is negated too.',
        },
        {
          type: 'transform',
          q: 'Petra thinks Davor talked about something. Say the opposite: he talked about NOTHING.',
          from: 'Razgovarao je o nečemu.',
          answer: 'Ni o čemu nije razgovarao.',
          accept: [
            'Nije razgovarao ni o čemu.',
            'Nije ni o čemu razgovarao.',
            'On nije razgovarao ni o čemu.',
            'On ni o čemu nije razgovarao.',
          ],
          hint: 'Two things change: the pronoun takes the no-prefix and lets the preposition into the middle, and the verb becomes negative.',
          explanation:
            'Ni o čemu nije razgovarao. — the preposition o stands between ni and čemu, and Croatian negates the verb as well.',
        },
        {
          type: 'transform',
          q: 'Turn the statement into a question that means "Did anyone at all call?"',
          from: 'Netko je zvao.',
          answer: 'Je li itko zvao?',
          accept: ['Je li tko zvao?', 'Je li itko zvao'],
          hint: 'The question opens with the verb and li, and the "some" prefix gives way to the prefix for "any at all".',
          explanation:
            'Je li itko zvao? — in a question, "anyone at all" is itko (i- + tko), just as "anything at all" is išta.',
        },
      ],
    },
    mix: [
      10,
      8,
      {
        type: 'sort',
        q: 'Which question does the pronoun answer in each sentence?',
        groups: ['Whom? What? — accusative', 'To whom? — dative', 'With what? — instrumental'],
        items: [
          { hr: 'Ne vidim ništa.', group: 0 },
          { hr: 'Pomaže svakomu.', group: 1 },
          { hr: 'Bavi se nečim.', group: 2 },
          { hr: 'Svakoga pozdravlja.', group: 0 },
          { hr: 'Ne javlja se nikomu.', group: 1 },
          { hr: 'Ničim nije zadovoljan.', group: 2 },
        ],
        explanation:
          'The endings are those of tko and što: ništa and svakoga are objects; svakomu and nikomu answer "to whom?"; nečim and ničim are instrumentals after baviti se and zadovoljan.',
      },
      9,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['itko', 'anyone at all'],
          ['svatko', 'everyone'],
          ['nitko', 'no one'],
          ['ničiji', 'nobody’s'],
          ['nekakav', 'some kind of'],
        ],
        explanation:
          'Four prefixes do all the work: ne- some, ni- no, sva- every, i- any at all. They attach to tko and što, and also to čiji (whose) and kakav (what kind of).',
      },
      12,
      {
        type: 'tf',
        q: 'The sentence "Nikoga nisam vidio" contains two negative words, and standard Croatian needs both of them.',
        answer: true,
        hint: 'Think of how English says it — and of what Croatian does differently with the verb.',
        explanation:
          'True. Croatian negates twice: the ni- word and the verb. English "I saw nobody" has one negative; "Nikoga sam vidio" is not possible in Croatian.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "We did not talk about anything important."',
        words: ['Ni', 'o', 'čemu', 'važnom', 'nismo', 'razgovarali.'],
        accept: ['Nismo razgovarali ni o čemu važnom.', 'Nismo ni o čemu važnom razgovarali.'],
        explanation:
          'Ni o čemu važnom nismo razgovarali. The preposition o sits between ni and čemu, and the adjective follows in the same case (locative).',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Jučer', 'smo', 'u', 'gradu', 'sreli', 'netko', 'iz', 'tvoje', 'škole.'],
        wrong: 5,
        answer: 'nekoga',
        hint: 'Is this person doing the meeting, or being met?',
        explanation:
          'Jučer smo u gradu sreli nekoga iz tvoje škole. — the person we met is the object, so the pronoun goes into the accusative, like koga.',
      },
      4,
      {
        type: 'transform',
        q: 'Say the opposite: NOBODY brought ANYTHING.',
        from: 'Svatko je nešto donio.',
        answer: 'Nitko nije ništa donio.',
        accept: ['Nitko ništa nije donio.'],
        hint: 'Three words change: both pronouns take the no-prefix, and the verb is negated as well.',
        explanation:
          'Nitko nije ništa donio. — every indefinite word in a negative sentence takes ni-, and the verb is still negated.',
      },
      {
        type: 'listen',
        audio: 'Ni od koga nisam tražio pomoć, a ipak mi je netko ostavio novac na stolu.',
        q: 'What happened?',
        options: [
          'The speaker asked everyone for help, but nobody gave him money',
          'The speaker asked no one for help, yet someone left money on the table',
          'Someone asked the speaker for help and took money from the table',
          'The speaker left money on the table for someone who had helped him',
        ],
        correct: 1,
        explanation:
          'Ni od koga nisam tražio — I asked no one (ni + od + koga). a ipak mi je netko ostavio novac — and yet someone left me money.',
      },
      {
        type: 'dictate',
        audio: 'Nitko mi ništa nije rekao.',
        answer: 'Nitko mi ništa nije rekao.',
        hint: 'Five words: "Nobody told me anything."',
        explanation:
          'Nitko mi ništa nije rekao. — three negatives in one sentence, and all three are required: nitko, ništa, nije.',
      },
    ],
  },

  // ── Eyes, ears, hands, legs ────────────────────────────────────────────────
  'body-part-nouns': {
    text: {
      kind: 'dialogue',
      title: 'Kod liječnice',
      lines: [
        {
          who: 'Liječnica',
          hr: 'Dobar dan, gospođo Kovač. Recite, što Vas muči?',
          en: 'Good afternoon, Mrs. Kovač. Tell me, what is troubling you?',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Već tjedan dana imam problema s očima, doktorice. Navečer su mi suhe i umorne, a ujutro ih jedva otvorim.',
          en: 'I have been having trouble with my eyes for a week, doctor. In the evening they are dry and tired, and in the morning I can barely open them.',
        },
        {
          who: 'Liječnica',
          hr: 'Radite li puno za računalom?',
          en: 'Do you work at a computer a lot?',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Ruku na srce, po deset sati dnevno. Kad dođem kući, padam s nogu.',
          en: 'To be honest, ten hours a day. When I get home, I am dead on my feet.',
        },
        {
          who: 'Liječnica',
          hr: 'Onda se ne čudim. Boli li Vas i glava?',
          en: 'Then I am not surprised. Does your head hurt too?',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Jučer me boljela, a danas me boli samo lijevo oko.',
          en: 'It hurt yesterday, and today only my left eye hurts.',
        },
        {
          who: 'Liječnica',
          hr: 'Pogledat ću Vam oba oka… Oči su Vam suhe, ali nije ništa ozbiljno. Prepisat ću Vam kapi.',
          en: 'I will look at both of your eyes… Your eyes are dry, but it is nothing serious. I will prescribe you some drops.',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Ne mogu vjerovati svojim ušima! Bila sam sigurna da ću morati nositi naočale.',
          en: 'I can’t believe my ears! I was sure I would have to wear glasses.',
        },
        {
          who: 'Liječnica',
          hr: 'Zasad ne. Ali svakih sat vremena odmorite oči i ne dirajte ih prljavim rukama.',
          en: 'Not for now. But rest your eyes every hour, and do not touch them with dirty hands.',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Hvala Vam. Sin mi stalno govori da pretjerujem, ali drago mi je što sam došla.',
          en: 'Thank you. My son keeps telling me I am overreacting, but I am glad I came.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does the doctor find, and what does she do about it?',
          options: [
            'Mrs. Kovač needs glasses, and the doctor sends her to buy them',
            'Her eyes are dry but it is nothing serious; the doctor prescribes drops',
            'She has an ear infection, and the doctor prescribes an antibiotic',
            'Nothing is wrong at all; the doctor tells her she is overreacting',
          ],
          correct: 1,
          hint: 'Mrs. Kovač was afraid of one thing and is relieved to hear another.',
          explanation:
            'Oči su Vam suhe, ali nije ništa ozbiljno. Prepisat ću Vam kapi. Glasses were only what Mrs. Kovač had feared.',
        },
        {
          q: 'The doctor says "oba oka" and, a moment later, "Oči su Vam suhe". Why two different forms of the same noun?',
          options: [
            'oka is the polite form and oči the everyday one',
            'After oba (as after dva, tri, četiri) the eye takes its counting form; otherwise the plural is oči',
            'oka is used for healthy eyes and oči for eyes that hurt',
            'oka is said of a man’s eyes and oči of a woman’s',
          ],
          correct: 1,
          hint: 'Look at the word standing right in front of "oka".',
          explanation:
            'After dva, oba, tri and četiri the form is oka (and uha). Everywhere else the plural is oči — and it behaves as a feminine noun, which is why the adjective is suhe.',
        },
        {
          type: 'type',
          q: 'Now you. Yesterday it was her head; say the same about her legs: Jučer su me ____ noge. (boljeti)',
          answer: 'boljele',
          hint: 'The participle agrees with what hurts — a feminine plural noun — not with the person in pain.',
          explanation:
            'Jučer su me boljele noge. — the body part is the subject, so the participle is feminine plural, like noge. The person stays in the accusative: me.',
        },
        {
          type: 'transform',
          q: 'One ear hurts. Now say that your EARS hurt — the ordinary plural.',
          from: 'Boli me uho.',
          answer: 'Bole me uši.',
          accept: ['Uši me bole.', 'Bole me oba uha.', 'Mene bole uši.'],
          hint: 'Two words change: the noun takes its irregular plural, and the verb must agree with several things.',
          explanation:
            'Bole me uši. — the plural of uho is uši, and several things that hurt take the plural verb bole.',
        },
        {
          type: 'type',
          q: 'Now describe her. Gospođa Kovač ima ____ oči. (zelen)',
          answer: 'zelene',
          hint: 'In the singular the eye is neuter, but its plural behaves like a feminine noun.',
          explanation:
            'Ima zelene oči. — oči is feminine in the plural, so the adjective takes the feminine plural ending -e, as in suhe and umorne.',
        },
      ],
    },
    mix: [
      9,
      8,
      {
        type: 'sort',
        q: 'What hurts? Decide which verb form each body part needs.',
        groups: ['Boli me…', 'Bole me…'],
        items: [
          { hr: 'lijevo oko', group: 0 },
          { hr: 'zubi', group: 1 },
          { hr: 'glava', group: 0 },
          { hr: 'leđa', group: 1 },
          { hr: 'trbuh', group: 0 },
          { hr: 'uši', group: 1 },
        ],
        explanation:
          'The body part is the subject. One thing hurts: boli (oko, glava, trbuh). Several: bole (zubi, uši) — and leđa is a plural noun, so it takes bole too.',
      },
      11,
      {
        type: 'match',
        q: 'Match each expression to what it means.',
        pairs: [
          ['u četiri oka', 'in private'],
          ['padati s nogu', 'to be dead tired'],
          ['zaljubljen do ušiju', 'head over heels in love'],
          ['imati zlatne ruke', 'to be very good at making and fixing things'],
          ['ruku na srce', 'to be honest'],
        ],
        explanation:
          'Four eyes are two people alone; you fall off your legs from tiredness; love reaches up to the ears; golden hands can fix anything; and a hand on the heart means you are telling the truth.',
      },
      10,
      {
        type: 'tf',
        q: 'In "Padam s nogu", the form "nogu" is the accusative singular, just as in "Slomio je nogu".',
        answer: false,
        hint: 'Which case follows s when it means "off, from" — and how many legs do you fall off?',
        explanation:
          'False. The two forms only look alike. s meaning "off" takes the genitive, and you fall off both legs: here nogu is the genitive plural (like ruku), with no extra -a. In Slomio je nogu it is the accusative of one leg.',
      },
      12,
      {
        type: 'order',
        q: 'Put the words in order: "After the long walk my legs hurt."',
        words: ['Poslije', 'duge', 'šetnje', 'boljele', 'su', 'me', 'noge.'],
        accept: [
          'Noge su me boljele poslije duge šetnje.',
          'Poslije duge šetnje noge su me boljele.',
          'Boljele su me noge poslije duge šetnje.',
          'Poslije duge šetnje su me boljele noge.',
        ],
        explanation:
          'Poslije duge šetnje boljele su me noge. The short words su me stay together and lean on the first word after the opening phrase: boljele su me.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("He has long legs and big ears.")',
        words: ['Ima', 'duge', 'noge', 'i', 'veliki', 'uši.'],
        wrong: 4,
        answer: 'velike',
        hint: 'The singular of this noun is neuter — but what gender does its plural behave as?',
        explanation:
          'Ima duge noge i velike uši. — like oči, the plural uši is feminine, so its adjective ends in -e.',
      },
      0,
      {
        type: 'transform',
        q: 'Now only ONE ear is cold. Say it in the singular.',
        from: 'Uši su mi hladne.',
        answer: 'Uho mi je hladno.',
        accept: ['Hladno mi je uho.', 'Jedno uho mi je hladno.', 'Jedno mi je uho hladno.'],
        hint: 'Three words change: the noun goes back to its singular, the verb with it, and the adjective takes the gender the singular has.',
        explanation:
          'Uho mi je hladno. — the plural uši is feminine (hladne), but one ear is neuter again, so the adjective ends in -o and the verb is singular.',
      },
      {
        type: 'listen',
        audio:
          'Cijeli dan sam nosila kutije, pa me sada bole ruke i leđa, ali glava me, srećom, ne boli.',
        q: 'What hurts, and what does not?',
        options: [
          'Her head and back hurt, but her arms do not',
          'Her arms and back hurt, but her head does not',
          'Her legs and back hurt, and so does her head',
          'Nothing hurts, because she rested all day',
        ],
        correct: 1,
        explanation:
          'bole me ruke i leđa — her arms and back hurt (plural verb); glava me ne boli — her head does not (singular verb).',
      },
      {
        type: 'dictate',
        audio: 'Razgovarat ćemo u četiri oka.',
        answer: 'Razgovarat ćemo u četiri oka.',
        hint: 'Five words: "We will talk in private."',
        explanation:
          'Razgovarat ćemo u četiri oka. — after četiri the eye takes its counting form oka, and the infinitive drops its final -i before ćemo.',
      },
    ],
  },

  // ── Degrees and intensity ──────────────────────────────────────────────────
  'degrees-intensity': {
    text: {
      kind: 'dialogue',
      title: 'Stan na petom katu',
      lines: [
        {
          who: 'Iva',
          hr: 'Onda, kako ti se sviđa stan? Meni je prilično simpatičan.',
          en: 'So, how do you like the apartment? I find it fairly charming.',
        },
        {
          who: 'Luka',
          hr: 'Lijep je, čak ljepši nego na slikama. Ali kuhinja je premalena, a stanarina previsoka.',
          en: 'It is nice, even nicer than in the pictures. But the kitchen is too small and the rent too high.',
        },
        {
          who: 'Iva',
          hr: 'Pa što si očekivao u centru? Stanovi su sve skuplji, a dobrih je sve manje.',
          en: 'Well, what did you expect downtown? Apartments are getting more and more expensive, and there are fewer and fewer good ones.',
        },
        {
          who: 'Luka',
          hr: 'Znam. Što duže tražimo, to manje možemo birati.',
          en: 'I know. The longer we look, the less we can choose.',
        },
        {
          who: 'Iva',
          hr: 'Baš tako. Zato mislim da se moramo odlučiti što prije — vlasnica kaže da stan želi vidjeti još nekoliko ljudi.',
          en: 'Exactly. That is why I think we have to decide as soon as possible — the owner says several more people want to see the apartment.',
        },
        {
          who: 'Luka',
          hr: 'Meni je ipak pomalo čudno da zgrada nema dizala. Peti kat bez dizala vrlo je naporan.',
          en: 'I still find it a little odd that the building has no elevator. A fifth floor without an elevator is very tiring.',
        },
        {
          who: 'Iva',
          hr: 'Barem ćemo biti u formi! A pogled je izuzetno lijep, priznaj.',
          en: 'At least we will be in shape! And the view is exceptionally beautiful, admit it.',
        },
        {
          who: 'Luka',
          hr: 'Jest, jedva sam se odvojio od prozora. Dobro, nazovi je, ali pitaj može li makar malo spustiti cijenu.',
          en: 'It is; I could barely tear myself away from the window. All right, call her, but ask whether she can lower the price at least a little.',
        },
        {
          who: 'Iva',
          hr: 'Hoću. Što se manje nadamo, to ćemo se više veseliti ako pristane.',
          en: 'I will. The less we hope, the happier we will be if she agrees.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which three things bother Luka about the apartment?',
          options: [
            'The view, the neighbors and the owner',
            'The kitchen is too small, the rent is too high, and there is no elevator',
            'It is too far from downtown, too dark and too loud',
            'The pictures were better, the price went up, and it is on the first floor',
          ],
          correct: 1,
          hint: 'Two of his complaints come in one sentence, both built with the same prefix; the third is about the fifth floor.',
          explanation:
            'Kuhinja je premalena, a stanarina previsoka — and the building has no elevator. The view is the one thing he cannot resist.',
        },
        {
          q: 'Iva calls the apartment "prilično simpatičan" but the view "izuzetno lijep". What does her choice of words tell you?',
          options: [
            'She likes the apartment and the view equally',
            'She is being ironic about both',
            'Her praise for the apartment is measured, while the view really impresses her',
            'She dislikes the apartment and is only polite about the view',
          ],
          correct: 2,
          hint: 'Place the two intensifiers on the scale from weakest to strongest.',
          explanation:
            'prilično is the middle of the scale — fairly, quite. izuzetno sits near the top — exceptionally. So the apartment is good enough; the view is the real argument.',
        },
        {
          type: 'type',
          q: 'Now you. It goes up every year: Stanarina je svake godine sve ____. (visok)',
          answer: 'viša',
          hint: 'A trend is sve plus a comparative — here in the feminine, to agree with the subject.',
          explanation:
            'Stanarina je sve viša. — sve + the comparative says "higher and higher". The comparative of visok is irregular: viši, viša, više.',
        },
        {
          type: 'transform',
          q: 'Luka packs "too small" and "too high" into one word each. Do the same here.',
          from: 'Stan je previše skup.',
          answer: 'Stan je preskup.',
          accept: ['Preskup je stan.', 'Taj stan je preskup.'],
          hint: 'The prefix that means "too" is glued straight onto the adjective.',
          explanation:
            'Stan je preskup. — pre- attaches directly to the adjective and is written as one word with it, like premalena and previsoka.',
        },
        {
          type: 'transform',
          q: 'Join the two ideas with the pattern Luka and Iva both use: "The more I read, the more I know."',
          from: 'Puno čitam. Puno znam.',
          answer: 'Što više čitam, to više znam.',
          accept: ['Što više čitam, više znam.', 'Što više čitam, to znam više.'],
          hint: 'Each half needs a comparative instead of puno; the first half opens with što, and the second with the small word that answers it.',
          explanation:
            'Što više čitam, to više znam. — što + comparative, to + comparative. Both halves take a comparative, never a plain adverb.',
        },
      ],
    },
    mix: [
      6,
      5,
      {
        type: 'match',
        q: 'Small words that turn the force up or down. Match each to its meaning.',
        pairs: [
          ['baš', 'really, exactly'],
          ['čak', 'even'],
          ['barem', 'at least'],
          ['samo', 'only, just'],
          ['ni', 'not even'],
        ],
        explanation:
          'Baš to sam htio reći. Čak je i djed došao. Dođi barem na kavu. Samo malo. Nije rekao ni hvala. — none of them changes what is said, only how strongly.',
      },
      7,
      {
        type: 'sort',
        q: 'How strong is it? Put each phrase where it belongs on the scale.',
        groups: ['Only a little', 'Fairly to exceptionally', 'Too much'],
        items: [
          { hr: 'pomalo dosadan', group: 0 },
          { hr: 'izuzetno važan', group: 1 },
          { hr: 'preslan', group: 2 },
          { hr: 'jedva topao', group: 0 },
          { hr: 'prilično dobar', group: 1 },
          { hr: 'previše glasan', group: 2 },
          { hr: 'vrlo zanimljiv', group: 1 },
        ],
        explanation:
          'jedva (barely) and pomalo (somewhat) are the weak end; prilično, vrlo and izuzetno climb from fairly to exceptionally; pre- and previše mean more than is good.',
      },
      8,
      {
        type: 'tf',
        q: '"Preskupo je" and "Vrlo je skupo" say exactly the same thing.',
        answer: false,
        hint: 'One of them only measures the price. The other also passes judgment on it.',
        explanation:
          'False. vrlo skupo is very expensive — a high degree, perhaps still worth it. preskupo is too expensive — more than is acceptable.',
      },
      12,
      {
        type: 'order',
        q: 'Put the words in order: "The closer the exam is, the more nervous I am."',
        words: ['Što', 'je', 'ispit', 'bliže,', 'to', 'sam', 'nervozniji.'],
        accept: ['Što je bliže ispit, to sam nervozniji.'],
        explanation:
          'Što je ispit bliže, to sam nervozniji. Two comparatives, one in each half; the short words je and sam come right after što and to.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("In winter the days get shorter and shorter.")',
        words: ['Zimi', 'dani', 'postaju', 'sve', 'kratki.'],
        wrong: 4,
        answer: 'kraći',
        hint: 'After sve, a trend needs a different degree of the adjective.',
        explanation:
          'Zimi dani postaju sve kraći. — "shorter and shorter" is sve + the comparative. The comparative of kratak is kraći.',
      },
      3,
      {
        type: 'transform',
        q: 'Make it a trend: people read less and less.',
        from: 'Ljudi čitaju malo.',
        answer: 'Ljudi čitaju sve manje.',
        accept: ['Ljudi sve manje čitaju.'],
        hint: 'One short word in front of the comparative of malo — no doubling, as English does.',
        explanation:
          'Ljudi čitaju sve manje. — English doubles the word (less and less); Croatian puts sve before a single comparative.',
      },
      {
        type: 'listen',
        audio:
          'Karte su bile preskupe, ali koncert je bio izuzetno dobar, čak bolji nego prošle godine.',
        q: 'What does the speaker think?',
        options: [
          'The tickets were cheap, but the concert was barely good',
          'The tickets cost too much, but the concert was exceptionally good — even better than last year',
          'The tickets were very expensive, and the concert was worse than last year',
          'The concert was fairly good, about the same as last year',
        ],
        correct: 1,
        explanation:
          'preskupe — too expensive (pre-). izuzetno dobar — exceptionally good. čak bolji — even better: čak adds the surprise.',
      },
      {
        type: 'dictate',
        audio: 'Sve više ljudi radi od kuće.',
        answer: 'Sve više ljudi radi od kuće.',
        hint: 'Six words: "More and more people work from home."',
        explanation:
          'Sve više ljudi radi od kuće. — sve + the comparative više for a growing trend, with the genitive plural ljudi after it.',
      },
    ],
  },

  // ── Colloquial Croatian ────────────────────────────────────────────────────
  colloquialisms: {
    text: {
      kind: 'dialogue',
      title: 'Poruka vlasniku stana',
      lines: [
        {
          who: 'Tin',
          hr: 'Nina, pomozi! Pisao sam vlasniku stana, a on mi ne odgovara već tjedan dana. Ne kužim zašto.',
          en: 'Nina, help! I wrote to my landlord, and he has not answered me for a week. I don’t get why.',
        },
        {
          who: 'Nina',
          hr: 'Daj da vidim… „Bog, ovaj mjesec nemam love za stanarinu, javim se kad je bude.” Tine, ti se zezaš?',
          en: 'Let me see… "Hi, I have no cash for the rent this month, I’ll be in touch when I have some." Tin, are you kidding?',
        },
        {
          who: 'Tin',
          hr: 'Zašto? Kratko je i jasno. A čovjek je velika faca, sigurno ima smisla za foru.',
          en: 'Why? It is short and clear. And the man is a big shot; he surely has a sense of humor.',
        },
        {
          who: 'Nina',
          hr: 'Možda jest faca, ali nije ti prijatelj. Njemu pišeš na Vi i bez kolokvijalizama.',
          en: 'He may be a big shot, but he is not your friend. You write to him with Vi and without colloquialisms.',
        },
        {
          who: 'Tin',
          hr: 'Dobro, a kako bi ti to napisala?',
          en: 'All right, and how would you write it?',
        },
        {
          who: 'Nina',
          hr: '„Poštovani gospodine Babiću, ovaj mjesec nemam dovoljno novca za stanarinu. Mogu li Vam platiti tjedan dana kasnije?”',
          en: '"Dear Mr. Babić, this month I do not have enough money for the rent. May I pay you a week later?"',
        },
        {
          who: 'Tin',
          hr: 'Zvuči kao da piše moja baka. Ali brijem da imaš pravo.',
          en: 'It sounds as if my grandma were writing. But I reckon you are right.',
        },
        {
          who: 'Nina',
          hr: 'Naravno da imam. S prijateljima pričaj kako hoćeš, ali u službenoj poruci takve riječi zvuče nepristojno.',
          en: 'Of course I am. With friends, talk however you like, but in an official message words like that sound rude.',
        },
        {
          who: 'Tin',
          hr: 'Kužim. Šaljem tvoju verziju — a ako mi odgovori, vodim te na klopu.',
          en: 'Got it. I am sending your version — and if he answers, I am taking you out for some grub.',
        },
        {
          who: 'Nina',
          hr: 'Dogovoreno. Samo da ne bude frke kad dođe račun!',
          en: 'Deal. As long as there is no fuss when the check comes!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what, according to Nina, was wrong with Tin’s first message?',
          options: [
            'It was too long and full of grammar mistakes',
            'It was written to the wrong person',
            'It used colloquial words and an informal tone with someone who has to be addressed formally',
            'It promised to pay the rent too early',
          ],
          correct: 2,
          hint: 'Nina does not criticize what Tin said, but the words he chose and the person he chose them for.',
          explanation:
            'Njemu pišeš na Vi i bez kolokvijalizama. Lova and "javim se" are fine among friends; to a landlord they sound careless.',
        },
        {
          q: 'Tin says Nina’s version sounds "kao da piše moja baka" — and then agrees to send it. What is his attitude?',
          options: [
            'He thinks her version is wrong and sends his own anyway',
            'He finds it stiff and old-fashioned, but accepts that it is the right register for the landlord',
            'He thinks his grandmother should write the message instead',
            'He is offended and decides not to write at all',
          ],
          correct: 1,
          hint: 'To a young speaker, how does fully standard, polite Croatian feel — and what does he do next?',
          explanation:
            'To Tin the formal register sounds like an older generation speaking. Still, he admits Nina is right: colloquial does not mean wrong, it means "for informal situations" — and this is not one.',
        },
        {
          type: 'type',
          q: 'Now you. Among friends a colloquial noun is fine — but it still declines: Tin ide u kino sa svojom ____. (cura)',
          answer: 'curom',
          hint: 'After s comes the instrumental; this noun declines exactly like žena.',
          explanation:
            'sa svojom curom — a colloquial noun is an ordinary noun with a gender and cases: cura, cure, curi, curu, curom.',
        },
        {
          type: 'transform',
          q: 'Say it the way Tin would say it to a friend: replace the verb with its colloquial twin — the one that normally means "to shave".',
          from: 'Mislim da je trgovina zatvorena.',
          answer: 'Brijem da je trgovina zatvorena.',
          accept: ['Brijem da je dućan zatvoren.'],
          hint: 'Only the first word changes. Keep the same person — ja — and do not add se.',
          explanation:
            'Brijem da je trgovina zatvorena. — colloquially, brijati + da means "to reckon". With se it is still the standard verb: Brijem se svako jutro.',
        },
        {
          type: 'transform',
          q: 'Now the other direction. Tin mentions a friend’s girlfriend in an e-mail to his professor — make the sentence standard.',
          from: 'Njegova cura radi u Zagrebu.',
          answer: 'Njegova djevojka radi u Zagrebu.',
          accept: ['Njegova djevojka radi u Zagrebu'],
          hint: 'One word changes: the neutral word for a young woman or girlfriend.',
          explanation:
            'Njegova djevojka radi u Zagrebu. — every colloquialism has a standard counterpart that is safe everywhere: cura – djevojka.',
        },
      ],
    },
    mix: [
      10,
      8,
      {
        type: 'sort',
        q: 'Where does each sentence belong?',
        groups: ['Among friends', 'In a formal situation'],
        items: [
          { hr: 'Klopa je bila odlična!', group: 0 },
          { hr: 'Poštovani, šaljem Vam svoj životopis.', group: 1 },
          { hr: 'Ma to je samo fora.', group: 0 },
          { hr: 'Možete li mi, molim Vas, objasniti zadatak?', group: 1 },
          { hr: 'Kakva frka jutros!', group: 0 },
          { hr: 'Zahvaljujem Vam na pomoći.', group: 1 },
        ],
        explanation:
          'klopa, fora and frka are colloquial — natural with friends, careless in an office. Poštovani, the Vi-form and zahvaljujem belong to the formal register.',
      },
      9,
      {
        type: 'tf',
        q: '"On je veliki faca" is correct, because here faca describes a man.',
        answer: false,
        hint: 'What decides the adjective’s ending: the person described, or the gender of the noun itself?',
        explanation:
          'False. faca is a feminine noun whoever it describes, so the adjective is feminine: On je velika faca.',
      },
      11,
      {
        type: 'match',
        q: 'Match each colloquial word to its standard counterpart.',
        pairs: [
          ['frajer', 'momak'],
          ['cura', 'djevojka'],
          ['klinac', 'dijete'],
          ['fora', 'šala'],
          ['gušt', 'užitak'],
        ],
        explanation:
          'Each colloquial word (left) has a standard one that is safe in any situation (right): a guy, a girl, a kid, a joke, a pleasure.',
      },
      {
        type: 'order',
        q: 'Put the words in order — colloquial: "I reckon the kid is only kidding."',
        words: ['Brijem', 'da', 'se', 'klinac', 'samo', 'zeza.'],
        explanation:
          'Brijem da se klinac samo zeza. Colloquial verbs obey the same word order as any others: se comes right after da.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. (A colloquial sentence — but the grammar still has to be right.)',
        words: ['Sinoć', 'smo', 'bili', 'na', 'dobroj', 'klopa.'],
        wrong: 5,
        answer: 'klopi',
        hint: 'Being at a meal is a place, not a direction — and a colloquial noun in -a declines like any other.',
        explanation:
          'Sinoć smo bili na dobroj klopi. — na + the locative, and klopa declines like žena: na dobroj klopi, as the adjective already shows.',
      },
      {
        type: 'transform',
        q: 'Rewrite it in the standard language — two words are colloquial.',
        from: 'Taj frajer se samo zeza.',
        answer: 'Taj momak se samo šali.',
        accept: ['Taj se momak samo šali.', 'Taj mladić se samo šali.', 'Taj se mladić samo šali.'],
        hint: 'Replace the noun for a young man and the verb for joking; nothing else moves.',
        explanation:
          'Taj momak se samo šali. — frajer becomes momak (or mladić), zezati se becomes šaliti se. The grammar of the sentence stays the same.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Sinoć smo bili u novoj konobi: klopa je bila pravi gušt, ali na kraju je bila frka jer nitko nije imao dovoljno love.',
        q: 'What happened at the tavern last night?',
        options: [
          'The food was bad, and everyone left early',
          'The food was a real pleasure, but there was trouble at the end because nobody had enough money',
          'The food was expensive, but a friend paid for everybody',
          'They joked all evening and forgot to eat',
        ],
        correct: 1,
        explanation:
          'klopa je bila pravi gušt — the food was a real treat. na kraju je bila frka — trouble at the end. nitko nije imao dovoljno love — nobody had enough cash.',
      },
      {
        type: 'dictate',
        audio: 'Ne kužim ovu foru.',
        answer: 'Ne kužim ovu foru.',
        hint: 'Four words, colloquial: "I don’t get this joke."',
        explanation:
          'Ne kužim ovu foru. — fora is feminine, so its accusative is foru; in the standard language this would be Ne razumijem ovu šalu.',
      },
    ],
  },

  // ── Health and prevention ──────────────────────────────────────────────────
  'health-prevention': {
    text: {
      kind: 'dialogue',
      title: 'Radio: savjeti za toplinski val',
      lines: [
        {
          who: 'Voditelj',
          hr: 'Doktorice Jurić, toplinski val traje već tjedan dana. Što biste savjetovali našim slušateljima?',
          en: 'Dr. Jurić, the heat wave has lasted a week already. What would you advise our listeners?',
        },
        {
          who: 'Dr. Jurić',
          hr: 'Prije svega, pijte puno vode, i kad niste žedni. Nemojte čekati da vas zaboli glava.',
          en: 'First of all, drink plenty of water, even when you are not thirsty. Do not wait until your head starts to hurt.',
        },
        {
          who: 'Voditelj',
          hr: 'A što je s onima koji moraju raditi vani?',
          en: 'And what about those who have to work outdoors?',
        },
        {
          who: 'Dr. Jurić',
          hr: 'Njima bih preporučila da između jedanaest i sedamnaest sati izbjegavaju sunce koliko god mogu. Šešir i lagana odjeća nisu moda, nego zaštita.',
          en: 'I would recommend that they avoid the sun as much as they can between 11 a.m. and 5 p.m. A hat and light clothing are not fashion but protection.',
        },
        {
          who: 'Voditelj',
          hr: 'Mnogi stariji ljudi žive sami. Kako im možemo pomoći?',
          en: 'Many older people live alone. How can we help them?',
        },
        {
          who: 'Dr. Jurić',
          hr: 'Posjetite susjede i pitajte treba li im što. Bilo bi dobro da im donesete vode i lijekove iz ljekarne.',
          en: 'Visit your neighbors and ask whether they need anything. It would be good if you brought them water and their medicine from the pharmacy.',
        },
        {
          who: 'Voditelj',
          hr: 'Mnogi se ljeti hlade pivom. Je li to pametno?',
          en: 'Many people cool off with beer in the summer. Is that wise?',
        },
        {
          who: 'Dr. Jurić',
          hr: 'Nije. Alkohol tijelu oduzima vodu. Na Vašem mjestu ja bih pivo zamijenila vodom ili čajem.',
          en: 'It is not. Alcohol takes water away from the body. In your place, I would replace the beer with water or tea.',
        },
        {
          who: 'Voditelj',
          hr: 'I za kraj: što ako se netko ipak razboli?',
          en: 'And finally: what if someone falls ill all the same?',
        },
        {
          who: 'Dr. Jurić',
          hr: 'Ako imate visoku temperaturu ili vas jako boli glava, odmah idite liječniku. Bolje spriječiti nego liječiti — a sunčanica nije šala.',
          en: 'If you have a high fever or a bad headache, go to the doctor at once. Prevention is better than cure — and sunstroke is no joke.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the interview: what does the doctor tell the listeners to do for older neighbors who live alone?',
          options: [
            'Call an ambulance for them every day',
            'Visit them, ask whether they need anything, and bring them water and medicine',
            'Take them to the beach in the morning',
            'Tell them to stop drinking beer',
          ],
          correct: 1,
          hint: 'She uses two imperatives and then a softer sentence that begins "Bilo bi dobro…".',
          explanation:
            'Posjetite susjede i pitajte treba li im što. Bilo bi dobro da im donesete vode i lijekove iz ljekarne.',
        },
        {
          q: 'To all listeners the doctor says "pijte" and "nemojte čekati". About people who work outdoors she says "Njima bih preporučila da…". Why the change of form?',
          options: [
            'The imperative is a direct instruction; the conditional makes the advice softer, because those people cannot simply stay indoors',
            'The imperative is for the present and the conditional for the past',
            'The imperative is formal and the conditional is colloquial',
            'She is not sure her advice is correct',
          ],
          correct: 0,
          hint: 'One form tells you what to do. The other says what the speaker would suggest.',
          explanation:
            'Public advice uses the imperative: Pijte! A recommendation in the conditional (bih preporučila) is gentler — fitting for people who have no easy choice.',
        },
        {
          type: 'type',
          q: 'Now you. One more rule for all the listeners: Nikad ne ____ djecu u autu. (ostavljati)',
          answer: 'ostavljajte',
          hint: 'The imperative for several people: the same ending you hear in pijte and pitajte.',
          explanation:
            'Nikad ne ostavljajte djecu u autu. — the imperative for vi ends in -te: ostavljaj → ostavljajte. With nikad, the plain negative imperative (ne + imperative) is the natural choice.',
        },
        {
          type: 'transform',
          q: 'Soften the advice for a friend. Begin with "Bilo bi dobro da…"',
          from: 'Spavaj više.',
          answer: 'Bilo bi dobro da više spavaš.',
          accept: ['Bilo bi dobro da spavaš više.'],
          hint: 'After da comes a clause in the present, in the same person as the imperative you started from.',
          explanation:
            'Bilo bi dobro da više spavaš. — "it would be good if you slept more": the conditional of biti, then da + the present for ti.',
        },
        {
          type: 'transform',
          q: 'Give the same advice by saying what YOU would do. Begin with "Na tvom mjestu…"',
          from: 'Idi liječniku.',
          answer: 'Na tvom mjestu ja bih otišao liječniku.',
          accept: [
            'Na tvom mjestu ja bih otišla liječniku.',
            'Na tvom mjestu otišao bih liječniku.',
            'Na tvom mjestu otišla bih liječniku.',
            'Na tvom mjestu ja bih išao liječniku.',
            'Na tvom mjestu ja bih išla liječniku.',
            'Na tvom mjestu išao bih liječniku.',
            'Na tvom mjestu išla bih liječniku.',
            'Na tvom bih mjestu otišao liječniku.',
            'Na tvom bih mjestu otišla liječniku.',
            'Na tvom bih mjestu išao liječniku.',
            'Na tvom bih mjestu išla liječniku.',
            'Na tvome mjestu ja bih otišao liječniku.',
            'Na tvome mjestu ja bih otišla liječniku.',
            'Na tvome mjestu otišao bih liječniku.',
            'Na tvome mjestu otišla bih liječniku.',
            'Ja bih na tvom mjestu otišao liječniku.',
            'Ja bih na tvom mjestu otišla liječniku.',
          ],
          hint: 'The conditional for ja: its auxiliary plus the participle, masculine or feminine to match yourself.',
          explanation:
            'Na tvom mjestu ja bih otišao (otišla) liječniku. — personal advice in the conditional; the doctor does the same with "ja bih pivo zamijenila vodom".',
        },
      ],
    },
    mix: [
      10,
      9,
      {
        type: 'match',
        q: 'At the doctor’s. Match each word to its meaning.',
        pairs: [
          ['prehlada', 'a cold'],
          ['recept', 'a prescription'],
          ['cijepljenje', 'vaccination'],
          ['sunčanica', 'sunstroke'],
          ['ovisnost', 'addiction'],
        ],
        explanation:
          'A prehlada you treat at home; with a recept you go to the pharmacy; cijepljenje prevents illness; sunčanica comes from too much sun; ovisnost is the hardest to cure.',
      },
      8,
      {
        type: 'sort',
        q: 'Which preposition does each word take: o (with the locative) or od (with the genitive)?',
        groups: ['o + locative', 'od + genitive'],
        items: [
          { hr: 'ovisnost', group: 0 },
          { hr: 'odviknuti se', group: 1 },
          { hr: 'ovisan', group: 0 },
          { hr: 'oboljeti', group: 1 },
          { hr: 'ovisiti', group: 0 },
        ],
        explanation:
          'ovisnost o šećeru, ovisan o kocki, ovisi o vremenu — all three with o. But odviknuti se od cigareta and oboljeti od gripe take od.',
      },
      11,
      {
        type: 'tf',
        q: '"Meni boli glava" is the standard way to say "I have a headache".',
        answer: false,
        hint: 'Which case does the person in pain take with boljeti — the one for "to me", or the one for a direct object?',
        explanation:
          'False. With boljeti the person is in the accusative: Boli me glava, or with emphasis Mene boli glava. The dative meni is a common slip.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "It would be good if you (Vi) went to the doctor."',
        words: ['Bilo', 'bi', 'dobro', 'da', 'odete', 'liječniku.'],
        accept: ['Dobro bi bilo da odete liječniku.'],
        explanation:
          'Bilo bi dobro da odete liječniku. Soft, personal advice: the conditional of biti, then da + the present.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("My sister has stopped drinking coffee.")',
        words: ['Moja', 'sestra', 'je', 'prestala', 'pije', 'kavu.'],
        wrong: 4,
        answer: 'piti',
        hint: 'What form of a verb follows prestati?',
        explanation:
          'Moja sestra je prestala piti kavu. — prestati is followed by the infinitive, never by a second verb in the present.',
      },
      {
        type: 'transform',
        q: 'Say the same with the adjective that means "addicted".',
        from: 'Ne može bez cigareta.',
        answer: 'Ovisan je o cigaretama.',
        accept: [
          'On je ovisan o cigaretama.',
          'Ovisna je o cigaretama.',
          'Ona je ovisna o cigaretama.',
        ],
        hint: 'The adjective takes the same preposition as the noun for addiction, and after it the noun stands in the locative plural.',
        explanation:
          'Ovisan je o cigaretama. — ovisan (ovisna) o + the locative; the preposition od after it is not standard.',
      },
      {
        type: 'listen',
        audio: 'Djed je prestao pušiti prije dvadeset godina, a sada kaže da je zdrav kao dren.',
        q: 'What do you learn about the grandfather?',
        options: [
          'He started smoking twenty years ago and is now ill',
          'He quit smoking twenty years ago and says he is as fit as a fiddle',
          'He has been trying to quit smoking for twenty years',
          'He planted a tree twenty years ago',
        ],
        correct: 1,
        explanation:
          'prestao je pušiti — he quit smoking (prestati + infinitive). zdrav kao dren — literally "healthy as a cornel tree": in perfect health.',
      },
      {
        type: 'dictate',
        audio: 'Boli me grlo i imam kašalj.',
        answer: 'Boli me grlo i imam kašalj.',
        hint: 'Six words: "My throat hurts and I have a cough."',
        explanation:
          'Boli me grlo i imam kašalj. — the throat is the subject of boli, and the person in pain is the accusative me.',
      },
    ],
  },

  // ══ UNIT 6 ═════════════════════════════════════════════════════════════════

  // ── Tata, varalica, braća ──────────────────────────────────────────────────
  'agreement-special-nouns': {
    text: {
      kind: 'dialogue',
      title: 'Novi kolega',
      lines: [
        {
          who: 'Ema',
          hr: 'Jesi li upoznala novog kolegu? Zove se Nikola i došao je iz Osijeka.',
          en: 'Have you met the new colleague? His name is Nikola and he has come from Osijek.',
        },
        {
          who: 'Sara',
          hr: 'Jesam. Pristojan je, ali malo čudan — stalno priča o svojoj braći.',
          en: 'I have. He is polite, but a bit odd — he keeps talking about his brothers.',
        },
        {
          who: 'Ema',
          hr: 'Zašto je to čudno? Moja su braća u Kanadi i ja ih spominjem svaki dan.',
          en: 'Why is that odd? My brothers are in Canada and I mention them every day.',
        },
        {
          who: 'Sara',
          hr: 'Ma ne smeta mi. Kaže da njegova braća imaju restoran na moru, a da im je tata godinama vodio hotel.',
          en: 'Oh, it does not bother me. He says his brothers have a restaurant by the sea, and that their dad ran a hotel for years.',
        },
        {
          who: 'Ema',
          hr: 'Zvuči kao zanimljiva obitelj. A što kaže gazda? On nikad nije zadovoljan novim ljudima.',
          en: 'Sounds like an interesting family. And what does the boss say? He is never happy with new people.',
        },
        {
          who: 'Sara',
          hr: 'Ovaj put jest. Rekao je da je Nikola vrijedan i da nije neznalica kao onaj prošli kolega.',
          en: 'This time he is. He said that Nikola is hardworking and not an ignoramus like that last colleague.',
        },
        {
          who: 'Ema',
          hr: 'Onaj koji je lagao da zna njemački? Taj varalica je otišao nakon mjesec dana!',
          en: 'The one who lied that he knew German? That cheat left after a month!',
        },
        {
          who: 'Sara',
          hr: 'Upravo taj. Šteta, jer su njegova djeca bila jako draga.',
          en: 'That very one. A pity, because his children were very sweet.',
        },
        {
          who: 'Ema',
          hr: 'Djeca nisu kriva. Uglavnom, drago mi je da je novi kolega drukčiji.',
          en: 'The children are not to blame. Anyway, I am glad the new colleague is different.',
        },
        {
          who: 'Sara',
          hr: 'I meni. Sutra ga vodim na ručak s kolegama iz računovodstva.',
          en: 'Me too. Tomorrow I am taking him to lunch with the colleagues from accounting.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do we learn about Nikola’s family?',
          options: [
            'His brothers live in Canada and his dad is a teacher',
            'His brothers have a restaurant by the sea, and their dad ran a hotel for years',
            'He has no brothers, and his dad works in accounting',
            'His children are sweet, and his wife speaks German',
          ],
          correct: 1,
          hint: 'It is Ema whose brothers are far away. Nikola’s family works with guests.',
          explanation:
            'Njegova braća imaju restoran na moru, a tata im je godinama vodio hotel. The brothers in Canada are Ema’s.',
        },
        {
          q: 'Ema says "Djeca nisu kriva." The verb is plural — so why does the adjective end in -a, not in a plural ending like -i or -e?',
          options: [
            'Because djeca is a collective noun: its verb is plural, but its adjective takes the form in -a, as in "moja braća"',
            'Because Ema is talking about only one child',
            'Because kriva is an adverb here and never changes',
            'Because the sentence is negative',
          ],
          correct: 0,
          hint: 'Compare what Sara says a line earlier about the same children: "njegova djeca bila…".',
          explanation:
            'djeca, braća and gospoda have a feminine-singular shape, so everything that agrees like an adjective ends in -a (njegova djeca, bila, kriva) — while the verb itself is plural (su, nisu).',
        },
        {
          type: 'type',
          q: 'Now you. Ema asks about the boss: Jesi li danas vidjela ____ gazdu? (naš)',
          answer: 'našeg',
          accept: ['našega'],
          hint: 'The noun declines like žena, but it names a man — and a living one, which matters in this case.',
          explanation:
            'Jesi li vidjela našeg gazdu? — gazdu is an accusative like ženu, but the word that agrees is masculine and animate: našeg, as in našeg tatu.',
        },
        {
          type: 'transform',
          q: 'Suppose the cheat had been a woman. Change everything that shows it.',
          from: 'Taj varalica je lagao.',
          answer: 'Ta varalica je lagala.',
          accept: ['Ta je varalica lagala.'],
          hint: 'The noun itself stays as it is. The pointing word and the participle follow the person.',
          explanation:
            'Ta varalica je lagala. — varalica is a common-gender noun: for a woman the demonstrative and the participle are feminine, for a man masculine.',
        },
        {
          type: 'transform',
          q: 'Now say the same about your dad.',
          from: 'Naša mama je došla s posla.',
          answer: 'Naš tata je došao s posla.',
          accept: ['Naš je tata došao s posla.'],
          hint: 'The noun ends in -a like mama, but it is masculine — and two other words have to show that.',
          explanation:
            'Naš tata je došao s posla. — tata declines like žena, but everything that agrees with it is masculine: naš, došao.',
        },
      ],
    },
    mix: [
      9,
      8,
      {
        type: 'sort',
        q: 'Which form of "our" goes with each noun in the nominative?',
        groups: ['naš …', 'naša …'],
        items: [
          { hr: 'tata', group: 0 },
          { hr: 'braća', group: 1 },
          { hr: 'kolega', group: 0 },
          { hr: 'djeca', group: 1 },
          { hr: 'vođa', group: 0 },
          { hr: 'gospoda', group: 1 },
        ],
        explanation:
          'tata, kolega and vođa are men, so the possessive is masculine: naš tata. braća, djeca and gospoda are collectives with a feminine-singular shape: naša braća, naša djeca.',
      },
      10,
      {
        type: 'match',
        q: 'Who arrived? Match each subject with the verb form that agrees with it.',
        pairs: [
          ['Moja braća', 'su stigla.'],
          ['Moj brat', 'je stigao.'],
          ['Moja sestra', 'je stigla.'],
          ['Moje sestre', 'su stigle.'],
          ['Moji prijatelji', 'su stigli.'],
        ],
        explanation:
          'braća takes a plural auxiliary but a participle in -a: Moja braća su stigla. Compare the singular sestra je stigla — same participle, different auxiliary.',
      },
      11,
      {
        type: 'tf',
        q: 'Nikola is a man’s name, so you say "Nikola je došao", even though the name ends in -a.',
        answer: true,
        hint: 'What decides the participle: the last letter of the name, or the person who bears it?',
        explanation:
          'True. Luka, Nikola and Ivica decline like žena (s Nikolom, kod Nikole), but agreement is masculine: Nikola je došao.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order: "I talked with our new colleague." (a woman speaking, about a man)',
        words: ['Razgovarala', 'sam', 's', 'našim', 'novim', 'kolegom.'],
        accept: [
          'S našim novim kolegom sam razgovarala.',
          'S našim sam novim kolegom razgovarala.',
          'Razgovarala sam s novim našim kolegom.',
        ],
        explanation:
          'Razgovarala sam s našim novim kolegom. The noun has the instrumental of žena (kolegom), but both words before it are masculine.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Dad got back late from work yesterday.")',
        words: ['Tata', 'se', 'jučer', 'kasno', 'vratila', 's', 'posla.'],
        wrong: 4,
        answer: 'vratio',
        hint: 'The ending of the noun is misleading. Who is the subject?',
        explanation:
          'Tata se jučer kasno vratio s posla. — tata is masculine in spite of its -a, so the participle is masculine.',
      },
      1,
      {
        type: 'transform',
        q: 'Now ALL your brothers bought it together — use the collective noun.',
        from: 'Moj brat je kupio auto.',
        answer: 'Moja braća su kupila auto.',
        accept: ['Moja su braća kupila auto.'],
        hint: 'Three words change: the possessive, the auxiliary and the participle — and the participle does not take the ending you would expect for several men.',
        explanation:
          'Moja braća su kupila auto. — the possessive and the participle take -a, as with a feminine singular noun, but the auxiliary is plural.',
      },
      {
        type: 'listen',
        audio: 'Gospoda su sjela za stol, a djeca su otrčala u vrt.',
        q: 'What happened?',
        options: [
          'The lady sat down at the table, and the child ran into the garden',
          'The gentlemen sat down at the table, and the children ran off into the garden',
          'The gentlemen went into the garden, and the children sat down at the table',
          'The ladies sat in the garden with the children',
        ],
        correct: 1,
        explanation:
          'gospoda su sjela, djeca su otrčala — two collectives: plural auxiliary su, participle in -a. gospoda means gentlemen, not a lady (gospođa).',
      },
      {
        type: 'dictate',
        audio: 'Naš tata je dobar vođa.',
        answer: 'Naš tata je dobar vođa.',
        hint: 'Five words: "Our dad is a good leader."',
        explanation:
          'Naš tata je dobar vođa. — two masculine nouns in -a in one sentence, and both words that agree with them are masculine: naš, dobar.',
      },
    ],
  },

  // ── Agreement after numbers and quantity words ─────────────────────────────
  'quantity-agreement': {
    text: {
      kind: 'text',
      title: 'Vijesti: sudar kod Karlovca',
      lines: [
        {
          hr: 'Jutros su se na autocesti kod Karlovca sudarila dva automobila.',
          en: 'This morning two cars collided on the highway near Karlovac.',
        },
        {
          hr: 'U nesreći je ozlijeđeno pet osoba, među njima i dvoje djece.',
          en: 'Five people were injured in the accident, among them two children.',
        },
        {
          hr: 'Hitna pomoć odvezla je dvije teže ozlijeđene žene u karlovačku bolnicu.',
          en: 'An ambulance took two more seriously injured women to the Karlovac hospital.',
        },
        {
          hr: 'Nekoliko vozača odmah je stalo i pomoglo ozlijeđenima.',
          en: 'Several drivers stopped at once and helped the injured.',
        },
        {
          hr: 'Na mjesto nesreće stigla su četiri vozila hitne pomoći, a ubrzo je došlo i dvadesetak vatrogasaca.',
          en: 'Four ambulances arrived at the scene, and soon about twenty firefighters came as well.',
        },
        {
          hr: 'Oba vozača kažu da je cesta bila mokra i da je magla bila vrlo gusta.',
          en: 'Both drivers say that the road was wet and that the fog was very thick.',
        },
        {
          hr: 'Zbog nesreće je stotinjak putnika čekalo u koloni više od dva sata.',
          en: 'Because of the accident, about a hundred travelers waited in a line of traffic for more than two hours.',
        },
        {
          hr: 'Policija je razgovarala s trojicom svjedoka, a jedan od njih sve je snimio mobitelom.',
          en: 'The police talked to three witnesses, and one of them recorded everything on his cell phone.',
        },
        {
          hr: 'Promet je ponovno krenuo oko podne, ali mnogo je ljudi zakasnilo na posao.',
          en: 'Traffic started moving again around noon, but many people were late for work.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the report: how many people were injured, and who was taken to the hospital?',
          options: [
            'Two people were injured; both drivers were taken to the hospital',
            'Five people were injured, two of them children; two more seriously injured women were taken to the hospital',
            'Twenty people were injured; four ambulances took them all',
            'Nobody was injured, but a hundred travelers had to wait',
          ],
          correct: 1,
          hint: 'One number is for everyone who was hurt, a collective number is for the children, and a third is for the women.',
          explanation:
            'Ozlijeđeno je pet osoba, među njima i dvoje djece; hitna pomoć odvezla je dvije teže ozlijeđene žene u bolnicu. Twenty is the number of firefighters.',
        },
        {
          q: 'The report says "sudarila su se dva automobila" but "ozlijeđeno je pet osoba". Why is the first verb plural and the second singular?',
          options: [
            'Because cars are things and people are living beings',
            'Because after two, three and four the verb is plural, while from five up it is singular — and neuter in the past',
            'Because the first sentence is active and the second is negative',
            'Because automobil is masculine and osoba is feminine',
          ],
          correct: 1,
          hint: 'Ignore the nouns. Look only at the two numbers.',
          explanation:
            'dva, tri, četiri: plural verb (su se sudarila). pet and up, and words like nekoliko and mnogo: third person singular, with a neuter participle (je ozlijeđeno).',
        },
        {
          type: 'type',
          q: 'Now you. There were witnesses: Nesreću je ____ nekoliko ljudi. (vidjeti)',
          answer: 'vidjelo',
          hint: 'After nekoliko the participle does not agree with ljudi; it takes the neutral "it" form.',
          explanation:
            'Nesreću je vidjelo nekoliko ljudi. — after a quantity word the verb is singular and the participle neuter singular.',
        },
        {
          type: 'transform',
          q: 'Now there were TWO drivers who stopped.',
          from: 'Jedan vozač je stao.',
          answer: 'Dva vozača su stala.',
          accept: [
            'Dva su vozača stala.',
            'Stala su dva vozača.',
            'Dva vozača su stali.',
            'Dva su vozača stali.',
          ],
          hint: 'The noun takes the form used after 2–4, the auxiliary becomes plural, and in careful writing the participle ends the same way as the noun.',
          explanation:
            'Dva vozača su stala. — after dva a masculine noun and its participle end in -a, with a plural auxiliary. (su stali is also heard and accepted.)',
        },
        {
          type: 'transform',
          q: 'Now it was SIX women.',
          from: 'Dvije žene su otišle u bolnicu.',
          answer: 'Šest žena je otišlo u bolnicu.',
          accept: [
            'Šest je žena otišlo u bolnicu.',
            'U bolnicu je otišlo šest žena.',
            'Šest žena otišlo je u bolnicu.',
          ],
          hint: 'From five up three things change: the case of the noun, the number of the auxiliary, and the gender of the participle.',
          explanation:
            'Šest žena je otišlo u bolnicu. — genitive plural (žena), singular auxiliary (je), neuter participle (otišlo).',
        },
      ],
    },
    mix: [
      9,
      8,
      {
        type: 'sort',
        q: 'Which verb form follows each subject in careful written Croatian?',
        groups: ['… dolaze', '… dolazi'],
        items: [
          { hr: 'Tri sestre', group: 0 },
          { hr: 'Pet sestara', group: 1 },
          { hr: 'Oba brata', group: 0 },
          { hr: 'Nekoliko gostiju', group: 1 },
          { hr: 'Četiri kolegice', group: 0 },
          { hr: 'Dvoje djece', group: 1 },
        ],
        explanation:
          'After dva / dvije, oba / obje, tri and četiri the verb is plural. From pet up, after quantity words and after collective numbers like dvoje, the written norm is the singular.',
      },
      10,
      {
        type: 'match',
        q: 'Match each number with the phrase that can follow it.',
        pairs: [
          ['jedan', 'dobar prijatelj'],
          ['dva', 'dobra prijatelja'],
          ['dvije', 'dobre prijateljice'],
          ['pet', 'dobrih prijatelja'],
          ['jedna', 'dobra prijateljica'],
        ],
        explanation:
          'One agrees fully. After dva the masculine adjective and noun end in -a; after dvije the feminine ones end in -e; from pet up both are in the genitive plural.',
      },
      11,
      {
        type: 'tf',
        q: '"Dvadeset i jedan student je došao" is correct: a number that ends in one agrees just as "jedan" does.',
        answer: true,
        hint: 'What decides the agreement: the size of the number, or its last word?',
        explanation:
          'True. The last word of the number rules: dvadeset i jedan student je došao, but dvadeset i dva studenta, and dvadeset i pet studenata.',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "About ten people were waiting in front of the pharmacy."',
        words: ['Pred', 'ljekarnom', 'je', 'čekalo', 'desetak', 'ljudi.'],
        accept: [
          'Desetak ljudi čekalo je pred ljekarnom.',
          'Desetak ljudi je čekalo pred ljekarnom.',
          'Desetak je ljudi čekalo pred ljekarnom.',
          'Pred ljekarnom je desetak ljudi čekalo.',
          'Čekalo je desetak ljudi pred ljekarnom.',
        ],
        explanation:
          'Pred ljekarnom je čekalo desetak ljudi. desetak (about ten) behaves like pet: genitive plural after it, and a neuter singular verb.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Eight students came on the trip.")',
        words: ['Na', 'izlet', 'je', 'došao', 'osam', 'učenika.'],
        wrong: 3,
        answer: 'došlo',
        hint: 'The participle does not agree with the students. What does it take after a number like this one?',
        explanation:
          'Na izlet je došlo osam učenika. — from five up the participle is neuter singular, whatever the gender of the people counted.',
      },
      5,
      {
        type: 'transform',
        q: 'Now FIVE neighbors (women) helped.',
        from: 'Dvije susjede su mi pomogle.',
        answer: 'Pet susjeda mi je pomoglo.',
        accept: [
          'Pet mi je susjeda pomoglo.',
          'Pomoglo mi je pet susjeda.',
          'Pet susjeda pomoglo mi je.',
        ],
        hint: 'Check three things: the case of the noun, the auxiliary, and the ending of the participle.',
        explanation:
          'Pet susjeda mi je pomoglo. — genitive plural susjeda, singular je, neuter pomoglo. The short words mi je stay together.',
      },
      {
        type: 'listen',
        audio: 'Na rođendan je došlo dvoje djece iz susjedstva i tri moje prijateljice s posla.',
        q: 'Who came to the birthday party?',
        options: [
          'Two children from the neighborhood and three of the speaker’s friends from work',
          'Two friends from work and three children from the neighborhood',
          'Three children and their two mothers',
          'Two neighbors and three children from school',
        ],
        correct: 0,
        explanation:
          'dvoje djece — the collective number for two children. tri moje prijateljice — after tri, the feminine forms end in -e.',
      },
      {
        type: 'dictate',
        audio: 'Oba brata rade u banci.',
        answer: 'Oba brata rade u banci.',
        hint: 'Five words: "Both brothers work in a bank."',
        explanation:
          'Oba brata rade u banci. — oba behaves like dva: the noun in -a after it, and a plural verb.',
      },
    ],
  },

  // ── The i-declension ───────────────────────────────────────────────────────
  'i-declension': {
    text: {
      kind: 'text',
      title: 'Pismo prijateljici',
      lines: [
        {
          hr: 'Draga Ivana, pišem ti u kasnu večer jer me jedna misao ne pušta već danima.',
          en: 'Dear Ivana, I am writing to you late in the evening because one thought has not let go of me for days.',
        },
        {
          hr: 'Dobila sam mogućnost da godinu dana radim u Beču, ali još nemam hrabrosti reći to roditeljima.',
          en: 'I have been given the opportunity to work in Vienna for a year, but I still do not have the courage to tell my parents.',
        },
        {
          hr: 'Znaš koliko volim Rijeku: ovdje sam provela cijelu mladost.',
          en: 'You know how much I love Rijeka: I spent my whole youth here.',
        },
        {
          hr: 'S druge strane, takva se stvar ne nudi dvaput, a plaća je puno veća.',
          en: 'On the other hand, a thing like this is not offered twice, and the pay is much higher.',
        },
        {
          hr: 'Mama će reći da je to ludost, a tata neće reći ni riječi — što je još gore.',
          en: 'Mom will say it is madness, and Dad will not say a word — which is even worse.',
        },
        {
          hr: 'Najviše se bojim samoće: dugih zimskih noći u tuđem gradu, bez tvoje pomoći i bez naših večeri uz čaj.',
          en: 'Most of all I am afraid of loneliness: of long winter nights in a strange city, without your help and without our evenings over tea.',
        },
        {
          hr: 'Ipak, kad pomislim na novi posao, osjećam radost kakvu dugo nisam osjetila.',
          en: 'Still, when I think of the new job, I feel a joy I have not felt for a long time.',
        },
        {
          hr: 'Ti si mi uvijek govorila istinu, bez praznih riječi. Što bi ti učinila na mom mjestu?',
          en: 'You have always told me the truth, without empty words. What would you do in my place?',
        },
        {
          hr: 'Javi mi se što prije. S ljubavlju, Marta',
          en: 'Write back as soon as you can. With love, Marta',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the letter: what is Marta’s dilemma?',
          options: [
            'She has lost her job in Rijeka and does not know where to look for a new one',
            'She has been offered a year of work in Vienna, but she loves Rijeka and has not dared to tell her parents',
            'Her parents want her to move to Vienna, and she refuses',
            'She wants Ivana to move to Vienna with her',
          ],
          correct: 1,
          hint: 'One city holds her youth; the other offers better pay. And there is a conversation she keeps putting off.',
          explanation:
            'Dobila je mogućnost da godinu dana radi u Beču, ali nema hrabrosti reći to roditeljima — and she is afraid of being lonely there.',
        },
        {
          q: 'Marta writes "osjećam radost" but "nemam hrabrosti". Both nouns end in -ost. Why does only the second one end in -i here?',
          options: [
            'Because hrabrost is plural and radost is singular',
            'Because radost is a direct object, and in this class the accusative looks like the dictionary form; hrabrosti is a genitive after nemam',
            'Because radost is masculine and hrabrost is feminine',
            'Because a negative sentence turns every noun into the dative',
          ],
          correct: 1,
          hint: 'Ask which case each verb calls for — and remember what is special about the accusative of these nouns.',
          explanation:
            'In the i-declension the accusative equals the nominative: osjećam radost. The genitive ends in -i, and a negated nemam takes the genitive: nemam hrabrosti.',
        },
        {
          type: 'type',
          q: 'Now you. Marta signs "S ljubavlju". Put the same case on another noun: Prihvatila je posao s velikom ____. (radost)',
          answer: 'radošću',
          accept: ['radosti'],
          hint: 'Two instrumentals are standard. In the longer one, the last two consonants of the stem melt together with the j of the ending.',
          explanation:
            's velikom radošću (or s velikom radosti) — st + j gives šć, just as v + j gives vlj in ljubavlju.',
        },
        {
          type: 'transform',
          q: 'Now say that you REMEMBER it. Begin with "Sjećam se…"',
          from: 'To je bila duga noć.',
          answer: 'Sjećam se te duge noći.',
          accept: [
            'Sjećam se duge noći.',
            'Ja se sjećam te duge noći.',
            'Sjećam se one duge noći.',
          ],
          hint: 'sjećati se takes the genitive. The words around the noun take ordinary feminine endings; the noun takes the ending of its own class.',
          explanation:
            'Sjećam se te duge noći. — the noun is feminine, so te and duge are ordinary feminine genitives, while noć itself takes -i.',
        },
        {
          type: 'transform',
          q: 'Now there are several of them.',
          from: 'To je važna stvar.',
          answer: 'To su važne stvari.',
          accept: ['To su važne stvari'],
          hint: 'The adjective takes the usual feminine plural ending; the noun takes the one ending this class uses almost everywhere.',
          explanation:
            'To su važne stvari. — the adjective agrees as with any feminine noun (važne), and the nominative plural of the class ends in -i.',
        },
      ],
    },
    mix: [
      6,
      7,
      {
        type: 'sort',
        q: 'All of these end in a consonant. Which are feminine, and which masculine?',
        groups: ['Feminine — like stvar', 'Masculine — like grad'],
        items: [
          { hr: 'noć', group: 0 },
          { hr: 'most', group: 1 },
          { hr: 'radost', group: 0 },
          { hr: 'gost', group: 1 },
          { hr: 'sol', group: 0 },
          { hr: 'stol', group: 1 },
          { hr: 'riječ', group: 0 },
          { hr: 'ključ', group: 1 },
        ],
        explanation:
          'The ending does not tell you. radost is built with the suffix -ost and is feminine; most and gost only look similar. sol is feminine, stol masculine — the common ones simply have to be learned.',
      },
      5,
      {
        type: 'match',
        q: 'More nouns of this class. Match each to its meaning.',
        pairs: [
          ['krv', 'blood'],
          ['kost', 'a bone'],
          ['glad', 'hunger'],
          ['vlast', 'power, the authorities'],
          ['smrt', 'death'],
        ],
        explanation:
          'All five are feminine i-nouns: gusta krv, slomljena kost, velika glad, nova vlast, brza smrt — and all have the genitive in -i.',
      },
      8,
      {
        type: 'tf',
        q: '"Volim noću" is the correct way to say "I love the night".',
        answer: false,
        hint: 'What does the direct object of an i-noun look like? And what does the form in the sentence really mean?',
        explanation:
          'False. The accusative is the same as the dictionary form: Volim noć. The form noću is an instrumental, used as the adverb "at night".',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "She stayed in the city out of love for her job."',
        words: ['Ostala', 'je', 'u', 'gradu', 'iz', 'ljubavi', 'prema', 'poslu.'],
        accept: [
          'Iz ljubavi prema poslu ostala je u gradu.',
          'Iz ljubavi prema poslu je ostala u gradu.',
          'U gradu je ostala iz ljubavi prema poslu.',
        ],
        explanation:
          'Ostala je u gradu iz ljubavi prema poslu. iz takes the genitive, and the genitive of ljubav ends in -i.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Juha', 'je', 'bez', 'okusa', 'jer', 'nemamo', 'sole.'],
        wrong: 6,
        answer: 'soli',
        hint: 'This noun is feminine, but it does not decline like žena.',
        explanation:
          'Juha je bez okusa jer nemamo soli. — sol is an i-noun, so its genitive ends in -i; the -e of žene does not belong to this class.',
      },
      3,
      {
        type: 'transform',
        q: 'Use the OTHER standard instrumental of the noun — the one that ends in -ju.',
        from: 'Već se danima bavi tom misli.',
        answer: 'Već se danima bavi tom mišlju.',
        accept: ['Već se danima bavi tom mišlju'],
        hint: 'The j of this ending changes the two consonants that stand before it — recall the row for misao in the lesson’s table.',
        explanation:
          'Već se danima bavi tom mišlju. — sl + j gives šlj, as v + j gives vlj in ljubavlju. Both tom misli and tom mišlju are standard.',
      },
      {
        type: 'listen',
        audio: 'Cijelu noć nije rekao ni riječi, a ujutro je od radosti zagrlio sve u kući.',
        q: 'What do you learn about him?',
        options: [
          'He talked all night and left the house in the morning',
          'He said not a word all night, and in the morning he hugged everyone in the house for joy',
          'He could not sleep because of the noise in the house',
          'He was sad in the morning and spoke to no one',
        ],
        correct: 1,
        explanation:
          'cijelu noć — the accusative, unchanged. ni riječi — not a word, genitive in -i. od radosti — for joy, genitive in -i again.',
      },
      {
        type: 'dictate',
        audio: 'Hvala ti na lijepim riječima.',
        answer: 'Hvala ti na lijepim riječima.',
        hint: 'Five words: "Thank you for the kind words."',
        explanation:
          'Hvala ti na lijepim riječima. — hvala na takes the locative; in the plural this class ends in -ima, like stvarima.',
      },
    ],
  },

  // ── The changing family ────────────────────────────────────────────────────
  'family-changes': {
    text: {
      kind: 'dialogue',
      title: 'Bako, kako je bilo nekad?',
      lines: [
        {
          who: 'Lucija',
          hr: 'Bako, je li istina da si se udala s devetnaest godina?',
          en: 'Grandma, is it true that you got married at nineteen?',
        },
        {
          who: 'Baka',
          hr: 'Jest, i nitko nije mislio da je to rano. Danas se mladi sve rjeđe odlučuju na brak.',
          en: 'It is, and nobody thought that was early. Today young people decide to marry less and less often.',
        },
        {
          who: 'Lucija',
          hr: 'Ne slažem se da je to loše. S jedne strane, ljudi se bolje upoznaju prije vjenčanja, a s druge strane, prvo žele završiti fakultet i naći posao.',
          en: 'I do not agree that this is bad. On the one hand, people get to know each other better before the wedding, and on the other hand, they want to finish college and find a job first.',
        },
        {
          who: 'Baka',
          hr: 'Možda. Ali u našoj su kući živjele tri generacije i nitko nikad nije bio sam.',
          en: 'Maybe. But three generations lived in our house and nobody was ever alone.',
        },
        {
          who: 'Lucija',
          hr: 'A danas je sve više ljudi koji žive sami, znam. Ipak, ovisi o tome što čovjeka čini sretnim.',
          en: 'And today there are more and more people who live alone, I know. Still, it depends on what makes a person happy.',
        },
        {
          who: 'Baka',
          hr: 'Mene su činila sretnom djeca — a sada unuci. Samo što obitelji imaju sve manje djece, pa će bake uskoro ostati bez posla!',
          en: 'What made me happy was my children — and now my grandchildren. Only, families have fewer and fewer children, so grandmas will soon be out of work!',
        },
        {
          who: 'Lucija',
          hr: 'Ti nećeš. Bez „baka-servisa” mama ne bi mogla raditi otkako je sama s nama.',
          en: 'You will not. Without the "grandma service" Mom could not work, now that she is on her own with us.',
        },
        {
          who: 'Baka',
          hr: 'Samohrani roditelji imaju teži život nego što ljudi misle. Zato šira obitelj mora pomagati.',
          en: 'Single parents have a harder life than people think. That is why the extended family has to help.',
        },
        {
          who: 'Lucija',
          hr: 'Po mom mišljenju, baš je to najvažnija stvar koja se nije promijenila.',
          en: 'In my opinion, that is exactly the most important thing that has not changed.',
        },
        {
          who: 'Baka',
          hr: 'Slažem se. Obitelj je nekad bila veća, ali nije bila ništa važnija nego danas.',
          en: 'I agree. The family used to be bigger, but it was no more important than it is today.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what was Grandma’s family life like when she was young?',
          options: [
            'She married at thirty and lived alone with her husband',
            'She married at nineteen, and three generations lived in one house',
            'She never married and raised her children alone',
            'She moved abroad for work and came back as a grandmother',
          ],
          correct: 1,
          hint: 'One number is her age at the wedding; another counts the generations under one roof.',
          explanation:
            'Udala se s devetnaest godina, and u njihovoj su kući živjele tri generacije — nobody was ever alone.',
        },
        {
          q: 'Grandma regrets that young people marry less and less often. How does Lucija respond?',
          options: [
            'She agrees completely and blames young people',
            'She changes the subject to her mother’s job',
            'She disagrees politely and backs her view by weighing two sides',
            'She laughs and says that marriage is old-fashioned',
          ],
          correct: 2,
          hint: 'Look at her first three words in that reply, and at the frame she builds next.',
          explanation:
            'Ne slažem se da je to loše — a clear but polite disagreement — followed by S jedne strane…, a s druge strane… That is how an opinion is argued, not just stated.',
        },
        {
          type: 'type',
          q: 'Now you. Another trend: Stanovi su skupi, pa mladi ostaju kod roditelja sve ____. (dugo)',
          answer: 'dulje',
          accept: ['duže'],
          hint: 'A change over time: after sve comes the comparative of the adverb.',
          explanation:
            'Mladi ostaju kod roditelja sve dulje (or duže). — sve + a comparative describes a trend: longer and longer.',
        },
        {
          type: 'transform',
          q: 'Make it a trend: FEWER AND FEWER people live in the countryside.',
          from: 'Malo ljudi živi na selu.',
          answer: 'Sve manje ljudi živi na selu.',
          accept: ['Na selu živi sve manje ljudi.', 'Sve je manje ljudi koji žive na selu.'],
          hint: 'One short word and a comparative take the place of malo; in writing the verb stays as it is.',
          explanation:
            'Sve manje ljudi živi na selu. — sve + the comparative manje; after a quantity expression the written norm keeps the verb in the singular.',
        },
        {
          type: 'transform',
          q: 'Are young people happy? Answer "It depends on whether they have a job" — join the two parts into one sentence.',
          from: 'Ovisi. Imaju li posao?',
          answer: 'Ovisi o tome imaju li posao.',
          accept: ['To ovisi o tome imaju li posao.'],
          hint: 'The verb needs its preposition and a pointing word in the locative before the question can follow.',
          explanation:
            'Ovisi o tome imaju li posao. — ovisiti takes o + the locative; tome holds that place, and the question follows unchanged.',
        },
      ],
    },
    mix: [
      8,
      9,
      {
        type: 'match',
        q: 'Family words. Match each to its meaning.',
        pairs: [
          ['kućanstvo', 'a household'],
          ['brak', 'marriage'],
          ['vjenčanje', 'a wedding'],
          ['praunuk', 'a great-grandson'],
          ['izvanbračna zajednica', 'living together as a couple without being married'],
        ],
        explanation:
          'brak is the state, vjenčanje the day it begins; a couple that lives together without it forms an izvanbračna zajednica. A kućanstvo is everyone under one roof.',
      },
      10,
      {
        type: 'sort',
        q: 'Does ne- really make the opposite here?',
        groups: ['A true opposite', 'Not an opposite — a different meaning'],
        items: [
          { hr: 'sretan – nesretan', group: 0 },
          { hr: 'volja – nevolja', group: 1 },
          { hr: 'prijatelj – neprijatelj', group: 0 },
          { hr: 'vrijeme – nevrijeme', group: 1 },
          { hr: 'poznat – nepoznat', group: 0 },
          { hr: 'zadovoljan – nezadovoljan', group: 0 },
        ],
        explanation:
          'nesretan, neprijatelj, nepoznat and nezadovoljan are real opposites. But nevolja is trouble, not the absence of will, and nevrijeme is a storm, not a lack of time.',
      },
      11,
      {
        type: 'tf',
        q: 'Young adults in Croatia usually leave their parents’ home earlier than young people in most EU countries.',
        answer: false,
        hint: 'Think of what the lesson said about the price of housing.',
        explanation:
          'False. They leave later than in most EU countries — often around thirty — mainly because housing is expensive.',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "More and more young couples live with their parents."',
        words: ['Sve', 'više', 'mladih', 'parova', 'živi', 'kod', 'roditelja.'],
        accept: ['Kod roditelja živi sve više mladih parova.'],
        explanation:
          'Sve više mladih parova živi kod roditelja. After sve više comes the genitive plural, and in writing the verb is singular.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Young people find it harder and harder to get an apartment.")',
        words: ['Mladi', 'sve', 'teško', 'dolaze', 'do', 'stana.'],
        wrong: 2,
        answer: 'teže',
        hint: 'A trend needs a different degree of the adverb after sve.',
        explanation:
          'Mladi sve teže dolaze do stana. — "harder and harder" is sve + the comparative of teško.',
      },
      5,
      {
        type: 'transform',
        q: 'Say the same with the verb instead of the noun: "They got married last year."',
        from: 'Njihovo vjenčanje bilo je prošle godine.',
        answer: 'Vjenčali su se prošle godine.',
        accept: [
          'Prošle godine su se vjenčali.',
          'Prošle su se godine vjenčali.',
          'Oni su se vjenčali prošle godine.',
        ],
        hint: 'The verb is reflexive: do not lose its small word, and keep it next to the auxiliary.',
        explanation:
          'Vjenčali su se prošle godine. — vjenčati se is reflexive; without se, vjenčati means to marry a couple, as a registrar does.',
      },
      {
        type: 'listen',
        audio: 'Moja sestra sama odgaja dvoje djece, ali joj svaki dan pomažu naši roditelji.',
        q: 'What is the sister’s situation?',
        options: [
          'She and her husband are raising two children without any help',
          'She is raising two children on her own, with daily help from her parents',
          'She helps her parents every day and has no children',
          'Her parents are raising her two children because she lives abroad',
        ],
        correct: 1,
        explanation:
          'sama odgaja dvoje djece — she is raising two children on her own. svaki dan joj pomažu roditelji — the wider family steps in.',
      },
      {
        type: 'dictate',
        audio: 'Obitelj mi je najvažnija u životu.',
        answer: 'Obitelj mi je najvažnija u životu.',
        hint: 'Six words: "Family is the most important thing in my life."',
        explanation:
          'Obitelj mi je najvažnija u životu. — obitelj is a feminine noun ending in a consonant, so the adjective is feminine: najvažnija.',
      },
    ],
  },

  // ── Conversational fluency ─────────────────────────────────────────────────
  'small-talk-fluency': {
    text: {
      kind: 'dialogue',
      title: 'Kako se ono kaže?',
      lines: [
        {
          who: 'Jakov',
          hr: 'Emma, kako ti je na novom poslu?',
          en: 'Emma, how are things at the new job?',
        },
        {
          who: 'Emma',
          hr: 'Pa… kako da kažem… posao je zanimljiv, ali šefica je, ovaj, malo teška.',
          en: 'Well… how shall I put it… the job is interesting, but my boss is, um, a bit difficult.',
        },
        {
          who: 'Jakov',
          hr: 'Stvarno? Kako to misliš, teška?',
          en: 'Really? What do you mean, difficult?',
        },
        {
          who: 'Emma',
          hr: 'Znaš, sve mora biti po njezinom. Jučer mi je vratila izvještaj zbog jednog… kako se ono kaže… onog znaka na kraju rečenice?',
          en: 'You know, everything has to be her way. Yesterday she gave me back a report because of one… what is the word… that mark at the end of a sentence?',
        },
        { who: 'Jakov', hr: 'Zbog točke?', en: 'Because of a period?' },
        {
          who: 'Emma',
          hr: 'Da, zbog točke! Zapravo, zbog zareza. Uvijek ih pomiješam.',
          en: 'Yes, because of a period! Actually, because of a comma. I always mix them up.',
        },
        {
          who: 'Jakov',
          hr: 'Ma nemoj! Vratila ti je cijeli izvještaj zbog jednog zareza? I onda?',
          en: 'You don’t say! She gave you back the whole report because of one comma? And then?',
        },
        {
          who: 'Emma',
          hr: 'Onda sam ga ispravila. U biti, ona ima pravo — samo ne znam kako se to kaže na hrvatskom… kad netko previše pazi na sitnice.',
          en: 'Then I corrected it. Basically, she is right — I just do not know how to say it in Croatian… when somebody pays too much attention to little things.',
        },
        { who: 'Jakov', hr: 'Kažemo da je cjepidlaka.', en: 'We say she is a nitpicker.' },
        {
          who: 'Emma',
          hr: 'Cjepidlaka! Jasno. Da razmislim… ne, tu riječ sigurno neću zaboraviti.',
          en: 'A nitpicker! Right. Let me think… no, I will certainly not forget that word.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why did Emma’s boss give the report back?',
          options: [
            'Because it was a day late',
            'Because of a single comma — Emma first says "period" and then corrects herself',
            'Because it was written in English',
            'Because a whole page was missing',
          ],
          correct: 1,
          hint: 'Emma names one punctuation mark, and then takes it back with one small word.',
          explanation:
            'Zbog točke! Zapravo, zbog zareza. — she corrects herself out loud, and the conversation simply goes on.',
        },
        {
          q: 'Twice Emma cannot find a Croatian word. What does she do instead of falling silent or switching to English?',
          options: [
            'She changes the subject each time',
            'She asks Jakov to speak more slowly',
            'She says in Croatian that the word is missing and describes the thing, so that Jakov can supply it',
            'She looks the word up on her phone',
          ],
          correct: 2,
          hint: 'Look at what follows "kako se ono kaže…" and "ne znam kako se to kaže…".',
          explanation:
            'She repairs out loud: a time-buying phrase, then a description (the mark at the end of a sentence; someone who minds every little thing). Jakov supplies točka and cjepidlaka — and she never leaves Croatian.',
        },
        {
          type: 'type',
          q: 'Now you. A word will not come to you. Say so: Ne mogu se ____ riječi. (to recall)',
          answer: 'sjetiti',
          hint: 'A perfective, reflexive verb for remembering — its se is already in the sentence, and it takes the genitive.',
          explanation:
            'Ne mogu se sjetiti riječi. — sjetiti se + the genitive. Saying this aloud keeps you in the conversation while you search.',
        },
        {
          type: 'transform',
          q: 'You have forgotten the word for "scissors". Describe around it: "Something like a knife for paper." Begin with "Nešto…"',
          from: 'nož za papir',
          answer: 'Nešto kao nož za papir.',
          accept: ['Nešto kao nož za papir…', 'Nešto poput noža za papir.'],
          hint: 'After nešto comes the short word of comparison, then the thing it resembles.',
          explanation:
            'Nešto kao nož za papir. — describe around the gap and a native speaker will hand you the word: škare.',
        },
        {
          type: 'transform',
          q: 'A flat "I disagree" is too blunt for small talk. Soften it: open with the Croatian "well" and say "I wouldn’t say so."',
          from: 'Ne slažem se.',
          answer: 'Pa, ne bih rekao.',
          accept: [
            'Pa, ne bih rekla.',
            'Pa, ne bih to rekao.',
            'Pa, ne bih to rekla.',
            'Pa, ne bih baš rekao.',
            'Pa, ne bih baš rekla.',
          ],
          hint: 'After the opener comes the negative conditional of reći, for ja.',
          explanation:
            'Pa, ne bih rekao (rekla). — the opener buys a moment, and the conditional turns a flat "no" into a polite doubt.',
        },
      ],
    },
    mix: [
      4,
      7,
      {
        type: 'sort',
        q: 'What is the speaker doing with each phrase?',
        groups: ['Buying time for themselves', 'Reacting to the other person'],
        items: [
          { hr: 'Kako bih to rekao…', group: 0 },
          { hr: 'Stvarno?', group: 1 },
          { hr: 'Ovaj…', group: 0 },
          { hr: 'Aha, jasno.', group: 1 },
          { hr: 'Kako se ono kaže…', group: 0 },
          { hr: 'Ma nemoj!', group: 1 },
        ],
        explanation:
          'Fillers and time-buyers keep YOUR turn alive while you think. Short reactions show the OTHER person that you are listening and want to hear more.',
      },
      6,
      0,
      {
        type: 'match',
        q: 'Match each phrase to what it says.',
        pairs: [
          ['Ma nemoj!', 'You don’t say!'],
          ['I onda?', 'And then?'],
          ['Jasno.', 'Right, I see.'],
          ['Slažem se.', 'I agree.'],
          ['Da razmislim.', 'Let me think.'],
        ],
        explanation:
          'Four of them keep the other person talking — surprise, curiosity, understanding, agreement. The fifth buys you a second for your own answer.',
      },
      5,
      {
        type: 'tf',
        q: 'In a Croatian conversation, listening in complete silence is the surest way to show that you are interested.',
        answer: false,
        hint: 'What is a listener expected to do every few sentences?',
        explanation:
          'False. The listener is expected to react — aha, jasno, stvarno, da, da. Attentive silence can be read as doubt or boredom.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("I can’t recall the name of that street.")',
        words: ['Ne', 'mogu', 'se', 'sjetiti', 'ime', 'te', 'ulice.'],
        wrong: 4,
        answer: 'imena',
        hint: 'Which case does this reflexive verb of remembering take?',
        explanation:
          'Ne mogu se sjetiti imena te ulice. — sjetiti se takes the genitive, whatever it is you cannot recall: riječi, imena, naslova.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Basically, I don’t know how to explain it."',
        words: ['U', 'biti,', 'ne', 'znam', 'kako', 'to', 'objasniti.'],
        accept: [
          'Ne znam, u biti, kako to objasniti.',
          'Ne znam u biti kako to objasniti.',
          'U biti, ne znam kako objasniti to.',
        ],
        explanation:
          'U biti, ne znam kako to objasniti. The two-word filler opens the sentence and softens what follows.',
      },
      {
        type: 'transform',
        q: 'You asked a friend this. Now ask your professor the same thing — politely.',
        from: 'Kako to misliš?',
        answer: 'Kako to mislite?',
        accept: ['Kako to mislite', 'Kako Vi to mislite?'],
        hint: 'Only the verb ending changes — to the polite plural.',
        explanation:
          'Kako to mislite? — the same phrase in the Vi-form. It asks for an explanation without sounding like a challenge.',
      },
      {
        type: 'listen',
        audio: 'Ovaj… kako bih to rekla… stan je lijep, ali, znaš, susjedi su prilično glasni.',
        q: 'Behind the hesitation, what is the speaker really saying?',
        options: [
          'The apartment is ugly, but the neighbors are nice',
          'The apartment is nice, but the neighbors are fairly loud',
          'She does not know whether the apartment has neighbors',
          'She cannot remember where the apartment is',
        ],
        correct: 1,
        explanation:
          'Ovaj…, kako bih to rekla… and znaš carry no information — they buy time. The message is: stan je lijep, ali susjedi su prilično glasni.',
      },
      {
        type: 'dictate',
        audio: 'Pa, zapravo se slažem s tobom.',
        answer: 'Pa, zapravo se slažem s tobom.',
        hint: 'Six words: "Well, actually I agree with you."',
        explanation:
          'Pa, zapravo se slažem s tobom. — an opener, then a word that refines what was said before, then the agreement itself.',
      },
    ],
  },
};
