// ─── B2 lessons in class order — Units 3–4 (lessons 11–20) ───────────────────
// Same shape and rules as the A1, A2 and B1 class files:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1, the B2 lessons before each lesson, and the lesson itself
// have taught. Vi / Vas / Vam / Vaš take a capital when ONE person is addressed
// politely. Existing typed items whose answer is a short or common word open their
// mix, so that nothing printed earlier gives the answer away. Where Croatian has
// two standard forms (postati + nominative or instrumental, kojem / kojemu, the
// clitic after a heavy first phrase) both are accepted and neither is marked wrong.

export const CLASS_B2_U03_04 = {
  // ══ UNIT 3 ═════════════════════════════════════════════════════════════════

  // ── International words ────────────────────────────────────────────────────
  internationalisms: {
    text: {
      kind: 'dialogue',
      title: 'Festival u malom gradu',
      lines: [
        {
          who: 'Nika',
          hr: 'Dario, jesi li čuo? Naša organizacija ove godine organizira festival dokumentarnog filma.',
          en: 'Dario, have you heard? Our organization is organizing a documentary film festival this year.',
        },
        {
          who: 'Dario',
          hr: 'Čuo sam, ali bez optimizma. Prošle je godine situacija bila kaotična: nitko nije imao točne informacije o programu.',
          en: 'I have, but without any optimism. Last year the situation was chaotic: nobody had accurate information about the program.',
        },
        {
          who: 'Nika',
          hr: 'Zato ovaj put sve radimo drukčije. Jedna aktivistica iz Rijeke vodi komunikaciju s medijima, a ja analiziram što je prošle godine pošlo po zlu.',
          en: 'That is why we are doing everything differently this time. An activist from Rijeka is handling communication with the media, and I am analyzing what went wrong last year.',
        },
        {
          who: 'Dario',
          hr: 'A tko će sve to platiti? Od turizma se ovdje živi samo ljeti.',
          en: 'And who is going to pay for all that? People here live off tourism only in the summer.',
        },
        {
          who: 'Nika',
          hr: 'Grad nam daje dvoranu u kazalištu, a jedna tvrtka koja proizvodi računala bit će sponzor.',
          en: 'The town is giving us a hall in the theater, and a company that makes computers will be the sponsor.',
        },
        {
          who: 'Dario',
          hr: 'Zanimljivo. U novinama pišeš „tvrtka” i „računalo”, a na kavi uvijek kažeš „firma” i „kompjuter”.',
          en: 'Interesting. In the newspaper you write "tvrtka" and "računalo", but over coffee you always say "firma" and "kompjuter".',
        },
        {
          who: 'Nika',
          hr: 'Naravno. U razgovoru su obje riječi dobre, ali u službenom tekstu biram hrvatsku. Za „festival” i „demokraciju”, srećom, ne moram tražiti zamjenu.',
          en: 'Of course. In conversation both words are fine, but in an official text I choose the Croatian one. For "festival" and "demokracija", luckily, I do not have to look for a replacement.',
        },
        {
          who: 'Dario',
          hr: 'Dobro, uvjerila si me. Govorim tri jezika, pa mogu biti vodič stranim turistima.',
          en: 'All right, you have convinced me. I speak three languages, so I can be a guide for the foreign tourists.',
        },
        {
          who: 'Nika',
          hr: 'Odlično! Ti onda organiziraš doček gostiju, a ja ću i dalje kritizirati tvoj pesimizam.',
          en: 'Excellent! Then you organize the welcome for the guests, and I will go on criticizing your pessimism.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is going to support the festival, and how?',
          options: [
            'The media pay for the hall, and tourists buy the tickets',
            'The town gives a hall in the theater, and a computer company is the sponsor',
            'An activist from Rijeka pays for everything herself',
            'A film company gives the money, and the town gives the computers',
          ],
          correct: 1,
          hint: 'Dario asks who will pay. Nika names two helpers: one gives a place, the other gives money.',
          explanation:
            'Grad daje dvoranu u kazalištu, a tvrtka koja proizvodi računala bit će sponzor. The activist from Rijeka only handles the media.',
        },
        {
          q: 'Dario notices that Nika writes "tvrtka" and "računalo" but says "firma" and "kompjuter". What does her answer tell you about these pairs?',
          options: [
            'The international words are mistakes that she is trying to stop making',
            'The native words are old-fashioned and used only by journalists',
            'Both are correct; careful, official writing prefers the native word',
            'The native words are used in Rijeka and the international ones elsewhere',
          ],
          correct: 2,
          hint: 'She says where "both words are fine" — and where she makes a choice.',
          explanation:
            'U razgovoru su obje riječi dobre, ali u službenom tekstu bira hrvatsku. Neither word is wrong; the difference is one of register.',
        },
        {
          type: 'type',
          q: 'Now you. Dario speaks "bez optimizma"; Nika is his opposite: Nika na sve gleda s ____. (optimizam)',
          answer: 'optimizmom',
          hint: 's + the instrumental of a masculine noun — and outside the dictionary form the a before m is gone, just as in Dario’s genitive.',
          explanation:
            'Nika na sve gleda s optimizmom. — optimizam loses its a when an ending is added: optimizma, optimizmu, optimizmom.',
        },
        {
          type: 'transform',
          q: 'One activist is not enough. Say that TWO women do the job (dvije…).',
          from: 'Jedna aktivistica vodi komunikaciju s medijima.',
          answer: 'Dvije aktivistice vode komunikaciju s medijima.',
          accept: ['Dvije aktivistice komunikaciju vode s medijima.'],
          hint: 'After dvije the feminine noun takes the form in -e, and the verb moves into the plural.',
          explanation:
            'Dvije aktivistice vode komunikaciju s medijima. — the woman’s word is aktivistica, and after dvije it is aktivistice; the verb agrees: vode.',
        },
        {
          type: 'transform',
          q: 'Nika speaks about herself. Report the same about Nika and her colleague together (they).',
          from: 'Analiziram situaciju i informiram medije.',
          answer: 'Analiziraju situaciju i informiraju medije.',
          accept: [
            'Oni analiziraju situaciju i informiraju medije.',
            'One analiziraju situaciju i informiraju medije.',
          ],
          hint: 'Verbs in -irati are perfectly regular: swap the ending for the one that goes with oni, as in čitam — čitaju.',
          explanation:
            'Analiziraju situaciju i informiraju medije. — every -irati verb goes -iram, -iraš, -ira, -iramo, -irate, -iraju.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'The ending tells you the gender. Which words are feminine and which are masculine?',
        groups: ['Feminine (like žena)', 'Masculine (like grad)'],
        items: [
          { hr: 'situacija', group: 0 },
          { hr: 'optimizam', group: 1 },
          { hr: 'kultura', group: 0 },
          { hr: 'fakultet', group: 1 },
          { hr: 'politika', group: 0 },
          { hr: 'argument', group: 1 },
          { hr: 'tradicija', group: 0 },
          { hr: 'parlament', group: 1 },
        ],
        explanation:
          '-cija, -ura and -ika are feminine endings (situacija, tradicija, kultura, politika). -izam, -tet, -ent and -ment are masculine (optimizam, fakultet, argument, parlament).',
      },
      9,
      6,
      {
        type: 'match',
        q: 'Match each native Croatian word to the international word that means the same.',
        pairs: [
          ['zrakoplov', 'avion'],
          ['glazba', 'muzika'],
          ['kazalište', 'teatar'],
          ['tvrtka', 'firma'],
          ['računalo', 'kompjuter'],
        ],
        explanation:
          'Both words of each pair are correct. The native one (zrakoplov, glazba, kazalište, tvrtka, računalo) is preferred in careful writing; the international one is common in speech.',
      },
      10,
      {
        type: 'tf',
        q: '"Ana je poznata biciklist." — this sentence is correct.',
        answer: false,
        hint: 'Words in -ist name a man. What happens when the person is a woman?',
        explanation:
          'False. A woman takes the longer ending: Ana je poznata biciklistica. The adjective poznata is already feminine, and the noun has to match it.',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "There is too much information on the internet."',
        words: ['Na', 'internetu', 'ima', 'previše', 'informacija.'],
        accept: [
          'Ima previše informacija na internetu.',
          'Ima na internetu previše informacija.',
          'Previše informacija ima na internetu.',
          'Na internetu previše informacija ima.',
        ],
        explanation:
          'Na internetu ima previše informacija. After previše comes the genitive plural, which for these feminine nouns ends in -a: informacija.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Taj', 'informacija', 'nije', 'bila', 'točna.'],
        wrong: 0,
        answer: 'Ta',
        hint: 'Look at the ending of the noun: which gender does it announce?',
        explanation:
          'Ta informacija nije bila točna. — nouns in -cija are feminine, so everything around them is feminine too: the pointing word, bila, točna.',
      },
      7,
      {
        type: 'transform',
        q: 'This is fine in conversation. Rewrite it for an official text: replace both international words with their native partners.',
        from: 'Naša firma kupuje nove kompjutere.',
        answer: 'Naša tvrtka kupuje nova računala.',
        hint: 'One of the two native words is neuter, so its adjective and its plural ending change as well.',
        explanation:
          'Naša tvrtka kupuje nova računala. — tvrtka is feminine like firma, but računalo is neuter: the accusative plural is nova računala.',
      },
      {
        type: 'listen',
        audio: 'Moja sestra studira biologiju, a brat je pijanist i često svira u kazalištu.',
        q: 'What do you learn about the brother and sister?',
        options: [
          'The sister plays the piano, and the brother studies biology',
          'Both of them study music',
          'The sister studies biology, and the brother is a pianist who often plays in the theater',
          'The brother works in a theater, and the sister is a biology teacher',
        ],
        correct: 2,
        explanation:
          'sestra studira biologiju — an -irati verb and a science in -ija. brat je pijanist — the man’s form in -ist; he often plays u kazalištu, in the theater.',
      },
      {
        type: 'dictate',
        audio: 'Organiziramo koncert klasične glazbe.',
        answer: 'Organiziramo koncert klasične glazbe.',
        hint: 'Four words: "We are organizing a concert of classical music."',
        explanation:
          'Organiziramo koncert klasične glazbe. — the mi form of an -irati verb, and glazba, the native word that careful Croatian prefers to muzika.',
      },
    ],
  },

  // ── Aspect in negation and commands ────────────────────────────────────────
  'aspect-negation': {
    text: {
      kind: 'dialogue',
      title: 'Ne otvaraj prozor!',
      lines: [
        {
          who: 'Tena',
          hr: 'Lovro, molim te, ne otvaraj prozor — prehlađena sam i hladno mi je.',
          en: 'Lovro, please don’t open the window — I have a cold and I am cold.',
        },
        {
          who: 'Lovro',
          hr: 'Oprosti, nisam znao. Mogu li barem otvoriti balkonska vrata na pet minuta? Ovdje nema zraka.',
          en: 'Sorry, I didn’t know. May I at least open the balcony door for five minutes? There is no air in here.',
        },
        {
          who: 'Tena',
          hr: 'Dobro, ali samo nakratko. I reci mi, jesi li pročitao onaj članak za seminar?',
          en: 'All right, but only briefly. And tell me, have you read that article for the seminar?',
        },
        {
          who: 'Lovro',
          hr: 'Nisam ga pročitao — stigao sam do pola i zaspao. A ti?',
          en: 'I haven’t finished it — I got halfway and fell asleep. And you?',
        },
        {
          who: 'Tena',
          hr: 'Ja ga nisam ni čitala. Cijeli vikend nisam imala snage ni za što.',
          en: 'I haven’t even started reading it. All weekend I had no strength for anything.',
        },
        {
          who: 'Lovro',
          hr: 'Onda nemoj sada učiti. Popij čaj, lezi i ne brini se: profesor u prvom tjednu nikad nikoga ne pita.',
          en: 'Then don’t study now. Drink some tea, lie down and don’t worry: in the first week the professor never asks anyone.',
        },
        {
          who: 'Tena',
          hr: 'Lako je tebi reći. Smijemo li uopće izostajati s predavanja? Ja još nijednom nisam izostala.',
          en: 'That is easy for you to say. Are we allowed to miss lectures at all? I have not missed a single one yet.',
        },
        {
          who: 'Lovro',
          hr: 'Jednom smiješ. Samo mu nemoj zaboraviti poslati poruku — to bi bilo nepristojno.',
          en: 'Once you may. Just don’t forget to send him a message — that would be rude.',
        },
        {
          who: 'Tena',
          hr: 'Neću. A ti pij manje kave i spavaj više, pa nećeš zaspati nad svakim člankom!',
          en: 'I won’t. And you drink less coffee and sleep more, then you won’t fall asleep over every article!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how far did each of them get with the article for the seminar?',
          options: [
            'Both of them read it to the end',
            'Tena read half of it; Lovro did not open it',
            'Neither of them has even looked at it',
            'Lovro got halfway and fell asleep; Tena has not read any of it',
          ],
          correct: 3,
          hint: 'Each of them says "no" in a different way — one of them at least began.',
          explanation:
            'Lovro: Nisam ga pročitao — he did not finish (he got halfway). Tena: Nisam ga ni čitala — no reading happened at all.',
        },
        {
          q: 'Tena says "ne otvaraj prozor", but Lovro asks "Mogu li … otvoriti balkonska vrata?". The same action, two aspects. Why?',
          options: [
            'A window takes one verb and a door takes the other',
            'A prohibition normally takes the imperfective; asking permission for one single act takes the perfective',
            'Tena is speaking informally and Lovro politely',
            'The imperfective is used by women and the perfective by men',
          ],
          correct: 1,
          hint: 'One of them is banning something; the other wants to do one thing, once, for five minutes.',
          explanation:
            'Ne otvaraj! — a ban is about the activity itself, so it is imperfective. Mogu li otvoriti…? — permission for one bounded act, so the perfective infinitive.',
        },
        {
          type: 'type',
          q: 'Now you. It is winter, and Lovro gives Tena advice for every day until spring: ____ se toplo! (oblačiti se or obući se? — ti)',
          answer: 'Oblači',
          hint: 'Advice for every day is not one act. Choose the verb of the pair that names the habit, and give it the short command form for ti.',
          explanation:
            'Oblači se toplo! — standing advice takes the imperfective imperative. Obuci se toplo! would be an order for one occasion: now, before you go out.',
        },
        {
          type: 'transform',
          q: 'Lovro needs fresh air and does not want anyone to shut the door at any time. Turn the order into a prohibition.',
          from: 'Zatvori vrata!',
          answer: 'Ne zatvaraj vrata!',
          accept: ['Nemoj zatvarati vrata!', 'Nemoj zatvarati vrata.', 'Ne zatvaraj vrata.'],
          hint: 'A ban is about the activity, so the verb changes its aspect as well as gaining a negative.',
          explanation:
            'Ne zatvaraj vrata! or Nemoj zatvarati vrata! — a prohibition normally takes the imperfective partner (zatvarati), not the perfective zatvoriti of the one-time order.',
        },
        {
          type: 'transform',
          q: 'This sentence says that no writing happened at all. But you DID start the homework — you just did not get to the end. Change one word so that it says exactly that.',
          from: 'Nisam pisao zadaću.',
          answer: 'Nisam napisao zadaću.',
          accept: ['Nisam napisala zadaću.', 'Zadaću nisam napisao.', 'Zadaću nisam napisala.'],
          hint: 'Deny the result, not the activity: the verb needs its perfective partner.',
          explanation:
            'Nisam napisao zadaću. — a negated perfective denies only the result: the homework is not finished, though some writing may have been done.',
        },
      ],
    },
    mix: [
      6,
      5,
      {
        type: 'sort',
        q: 'Is the speaker giving advice for EVERY time, or asking for ONE act now?',
        groups: ['General advice — every time', 'One act — now, once'],
        items: [
          { hr: 'Jedi više voća!', group: 0 },
          { hr: 'Pojedi ovu jabuku!', group: 1 },
          { hr: 'Javljaj mi se češće!', group: 0 },
          { hr: 'Javi mi se večeras!', group: 1 },
          { hr: 'Čitaj svaki dan!', group: 0 },
          { hr: 'Pročitaj ovu poruku!', group: 1 },
        ],
        explanation:
          'A habit takes the imperfective imperative (jedi, javljaj se, čitaj); one specific act takes the perfective (pojedi, javi se, pročitaj).',
      },
      7,
      8,
      {
        type: 'tf',
        q: '"Nije pojela sve" means that she ate nothing.',
        answer: false,
        hint: 'The verb is perfective. What does a negated perfective deny — the activity, or only its completion?',
        explanation:
          'False. Nije pojela sve — she did not eat everything, so she ate some of it. No eating at all is the imperfective: Nije jela ništa.',
      },
      4,
      {
        type: 'match',
        q: 'What is the speaker really saying? Match each sentence to its message.',
        pairs: [
          ['Nisam gledao tu seriju.', 'I have seen none of it.'],
          ['Nisam pogledao tu seriju do kraja.', 'I began, but I did not get to the end.'],
          ['Ne parkiraj ovdje!', 'This is not to be done — a ban.'],
          ['Nemoj pasti!', 'Careful — a warning against an accident.'],
          ['Smije li se ovdje parkirati?', 'Is this allowed in general?'],
        ],
        explanation:
          'The imperfective denies or bans the activity as such (nisam gledao, ne parkiraj) and asks about it in general (smije li se parkirati). The perfective is about one result: not reached (nisam pogledao) or to be avoided (nemoj pasti).',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Nobody told me anything."',
        words: ['Nitko', 'mi', 'ništa', 'nije', 'rekao.'],
        accept: [
          'Nitko mi nije ništa rekao.',
          'Nitko mi nije rekao ništa.',
          'Ništa mi nitko nije rekao.',
          'Nije mi nitko ništa rekao.',
        ],
        explanation:
          'Nitko mi ništa nije rekao. Croatian stacks its negatives: nitko, ništa and a negated verb all in one sentence.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Don’t be late for the meeting!")',
        words: ['Nemoj', 'kasniš', 'na', 'sastanak!'],
        wrong: 1,
        answer: 'kasniti',
        hint: 'The first word is itself a command form. What form of the verb does it need after it?',
        explanation:
          'Nemoj kasniti na sastanak! — nemoj is followed by the infinitive, never by a present-tense form. The imperfective kasniti makes it a general rule; Nemoj zakasniti! would be a warning about one particular meeting.',
      },
      {
        type: 'transform',
        q: 'The doctor does not mean one glass. Turn the one-time order into standing advice: "more water" (više vode).',
        from: 'Popij čašu vode!',
        answer: 'Pij više vode!',
        accept: ['Pijte više vode!', 'Pij više vode.', 'Pijte više vode.'],
        hint: 'A habit needs the other verb of the aspect pair — the one without the prefix.',
        explanation:
          'Pij više vode! — popiti is one act, finished; piti is the activity, so its imperative gives advice for every day.',
      },
      11,
      {
        type: 'listen',
        audio: 'Nemoj mi ništa kupovati za rođendan, samo dođi na večeru.',
        q: 'What does the speaker want?',
        options: [
          'A present, and dinner as well',
          'No presents — only that you come to dinner',
          'That you do not come to the birthday dinner',
          'That you buy something for the dinner',
        ],
        correct: 1,
        explanation:
          'Nemoj mi ništa kupovati — a prohibition, so nemoj + the imperfective infinitive, with ništa as a second negative. Samo dođi — one act, so the perfective imperative.',
      },
      {
        type: 'dictate',
        audio: 'Ne brini se, nisam ništa zaboravio.',
        answer: 'Ne brini se, nisam ništa zaboravio.',
        hint: 'Six words: "Don’t worry, I haven’t forgotten anything."',
        explanation:
          'Ne brini se, nisam ništa zaboravio. — a negative command in the imperfective, then a negated perfective for one result that did not happen, with ništa stacked on nisam.',
      },
    ],
  },

  // ── Human rights ───────────────────────────────────────────────────────────
  'human-rights': {
    text: {
      kind: 'dialogue',
      title: 'Okrugli stol o globalizaciji',
      lines: [
        {
          who: 'Voditeljica',
          hr: 'Gospodine Babiću, je li globalizacija dobra za ljudska prava ili im šteti?',
          en: 'Mr. Babić, is globalization good for human rights, or does it harm them?',
        },
        {
          who: 'Gospodin Babić',
          hr: 'Smatram da im više pomaže nego šteti. Danas se o kršenju prava u jednoj zemlji za nekoliko sati zna u cijelom svijetu.',
          en: 'I believe it helps them more than it harms them. Today a violation of rights in one country is known all over the world within a few hours.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Djelomično se slažem s Vama, ali treba naglasiti da informacija nije isto što i zaštita. Radnici u siromašnim zemljama i dalje nemaju pravo na pristojnu plaću.',
          en: 'I partly agree with you, but it must be stressed that information is not the same thing as protection. Workers in poor countries still have no right to a decent wage.',
        },
        {
          who: 'Gospodin Babić',
          hr: 'Ne bih se složio s tim da je za to kriva globalizacija. Za bolje uvjete rada ljudi su se borili i prije nje.',
          en: 'I would not agree that globalization is to blame for that. People fought for better working conditions before it, too.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Istina, ali danas se bore protiv tvrtki koje su jače od njihovih država. S druge strane, ne smijemo zaboraviti ni manjine: njihov jezik i kultura lako se gube.',
          en: 'True, but today they are fighting against companies that are stronger than their states. On the other hand, we must not forget the minorities either: their language and culture are easily lost.',
        },
        {
          who: 'Voditeljica',
          hr: 'Kako je s tim u Hrvatskoj?',
          en: 'How do things stand with that in Croatia?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Ustav nacionalnim manjinama jamči pravo na vlastiti jezik i pismo. U mnogim istarskim gradovima talijanski je u službenoj uporabi uz hrvatski.',
          en: 'The Constitution guarantees the national minorities the right to their own language and script. In many Istrian towns Italian is in official use alongside Croatian.',
        },
        {
          who: 'Gospodin Babić',
          hr: 'U tome se potpuno slažem s gospođom Kovač. Zalažem se za to da se zakon jednako primjenjuje na sve — i na većinu i na manjinu.',
          en: 'On that I agree completely with Mrs. Kovač. I stand for the law being applied equally to everyone — to the majority and to the minority.',
        },
        {
          who: 'Voditeljica',
          hr: 'Dakle, u jednome ste se ipak složili: dostojanstvo nema cijenu.',
          en: 'So you have agreed on one thing after all: dignity has no price.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: on which point do the two guests agree completely?',
          options: [
            'That globalization is to blame for low wages',
            'That information protects workers well enough',
            'That minorities have rights and the law must apply equally to everyone',
            'That companies should be stronger than states',
          ],
          correct: 2,
          hint: 'It is the one moment when Mr. Babić uses the word "potpuno".',
          explanation:
            'U tome se potpuno slažem s gospođom Kovač — on the rights of minorities, and on the law being applied equally to all. On globalization itself they keep disagreeing.',
        },
        {
          q: 'Mrs. Kovač begins with "Djelomično se slažem s Vama, ali…". What is she doing?',
          options: [
            'Accepting part of his point politely before she objects to the rest',
            'Agreeing with everything he has said',
            'Refusing to discuss the topic',
            'Asking him to repeat his argument',
          ],
          correct: 0,
          hint: 'Look at the first word, and at the small word that follows the comma.',
          explanation:
            'Djelomično means partly: she grants him something, and ali brings her objection. It is the standard polite move in a formal discussion.',
        },
        {
          type: 'type',
          q: 'Now you. Mr. Babić says "Zalažem se". Report it about both guests together: Oboje se ____ za prava manjina. (zalagati se — oni)',
          answer: 'zalažu',
          hint: 'Keep the consonant change that Mr. Babić’s own form shows, and add the ending that goes with oni.',
          explanation:
            'Oboje se zalažu za prava manjina. — zalagati se changes g to ž throughout the present: zalažem se … zalažu se. What you stand up for follows za in the accusative.',
        },
        {
          type: 'transform',
          q: 'Mrs. Kovač says this TO Mr. Babić. Now say it ABOUT him to the audience: replace "Vama" with his title and surname.',
          from: 'Slažem se s Vama.',
          answer: 'Slažem se s gospodinom Babićem.',
          accept: ['Slažem se s g. Babićem.', 'S gospodinom Babićem se slažem.'],
          hint: 'slagati se keeps its preposition, and both the title and the surname take the case that follows it.',
          explanation:
            'Slažem se s gospodinom Babićem. — slagati se s + the instrumental; a man’s title and surname both decline: gospodinom Babićem.',
        },
        {
          type: 'transform',
          q: 'Too blunt for a round table. Soften it with the conditional, as Mr. Babić does — but you are a woman.',
          from: 'Ne slažem se s tim.',
          answer: 'Ne bih se složila s tim.',
          accept: [
            'Ja se ne bih složila s tim.',
            'S tim se ne bih složila.',
            'Ne bih se s tim složila.',
          ],
          hint: 'The conditional is built from the short word bih and the participle of the perfective verb — and the participle agrees with the speaker.',
          explanation:
            'Ne bih se složila s tim. — the conditional makes the disagreement polite. A man says složio, a woman složila; bih comes before se.',
        },
      ],
    },
    mix: [
      11,
      8,
      {
        type: 'sort',
        q: 'What is the speaker doing in the discussion?',
        groups: ['Giving a view', 'Agreeing', 'Disagreeing politely'],
        items: [
          { hr: 'Smatram da je obrazovanje najvažnije.', group: 0 },
          { hr: 'Prema mojem mišljenju, zakon je dobar.', group: 0 },
          { hr: 'Slažem se s Vama.', group: 1 },
          { hr: 'U tome ste potpuno u pravu.', group: 1 },
          { hr: 'Ne bih se složio s tim.', group: 2 },
          { hr: 'Bojim se da niste u pravu.', group: 2 },
        ],
        explanation:
          'Smatram da… and Prema mojem mišljenju… open your own view. Slažem se s Vama and Potpuno ste u pravu agree. Ne bih se složio and Bojim se da niste u pravu disagree without being rude.',
      },
      9,
      0,
      {
        type: 'match',
        q: 'Match each word to what it means.',
        pairs: [
          ['manjina', 'a group that is smaller than the rest of the population'],
          ['jednakost', 'the state in which nobody has more rights than anybody else'],
          ['dostojanstvo', 'the worth that every human being has'],
          ['Ustav', 'the highest law of a country'],
          ['sloboda govora', 'the right to say in public what you think'],
        ],
        explanation:
          'manjina is the opposite of većina. jednakost is equality, dostojanstvo is dignity, the Ustav is the Constitution, and sloboda govora is freedom of speech.',
      },
      10,
      1,
      {
        type: 'tf',
        q: 'U Hrvatskoj nacionalne manjine nemaju svojih zastupnika u Saboru.',
        answer: false,
        hint: 'The lesson gives two numbers: how many minorities the Constitution names, and how many seats they fill.',
        explanation:
          'False. The Constitution names 22 national minorities, and they elect eight members of the Sabor, the Croatian Parliament.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Women fought for the right to vote for centuries."',
        words: ['Žene', 'su', 'se', 'stoljećima', 'borile', 'za', 'pravo', 'glasa.'],
        accept: [
          'Žene su se borile za pravo glasa stoljećima.',
          'Stoljećima su se žene borile za pravo glasa.',
          'Žene su se za pravo glasa borile stoljećima.',
          'Žene su se za pravo glasa stoljećima borile.',
          'Za pravo glasa žene su se borile stoljećima.',
          'Za pravo glasa žene su se stoljećima borile.',
          'Za pravo glasa su se žene borile stoljećima.',
          'Za pravo glasa su se žene stoljećima borile.',
          'Stoljećima su se žene za pravo glasa borile.',
          'Žene su se stoljećima za pravo glasa borile.',
        ],
        explanation:
          'Žene su se stoljećima borile za pravo glasa. You fight za + the accusative; the short words su se stay together in second place.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is misspelled. Tap it.',
        words: ['Ta', 'je', 'promijena', 'zakona', 'bila', 'nužna.'],
        wrong: 2,
        answer: 'promjena',
        hint: 'In this word family the perfective verbs keep the long ije. What do the nouns do?',
        explanation:
          'Ta je promjena zakona bila nužna. — the verb is promijeniti with ije, but the nouns have the short je: promjena, zamjena, razmjena, primjena.',
      },
      {
        type: 'transform',
        q: 'Say it as a right: instead of "may work", say that everyone HAS THE RIGHT TO work — with the noun for work.',
        from: 'Svatko smije raditi.',
        answer: 'Svatko ima pravo na rad.',
        accept: ['Svatko ima pravo raditi.', 'Svi imaju pravo na rad.'],
        hint: 'A right is a right TO something: one fixed preposition, then the accusative of the short masculine noun made from raditi.',
        explanation:
          'Svatko ima pravo na rad. — pravo na + the accusative. With a verb the infinitive is possible too: Svatko ima pravo raditi.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Djelomično se slažem s Vama, ali ne smijemo zaboraviti da male lokalne tvrtke propadaju.',
        q: 'What is the speaker’s position?',
        options: [
          'She agrees completely and has nothing to add',
          'She disagrees completely, because small companies are doing well',
          'She has forgotten what the small companies said',
          'She agrees in part, but points out that small local companies are going under',
        ],
        correct: 3,
        explanation:
          'Djelomično se slažem — in part. ali ne smijemo zaboraviti da… — but we must not forget that small local companies are going under (propadaju).',
      },
      {
        type: 'dictate',
        audio: 'Zalažemo se za jednaka prava.',
        answer: 'Zalažemo se za jednaka prava.',
        hint: 'Five words: "We stand up for equal rights."',
        explanation:
          'Zalažemo se za jednaka prava. — zalagati se za + the accusative; pravo is neuter, so its plural is prava and the adjective is jednaka.',
      },
    ],
  },

  // ── Clitics ────────────────────────────────────────────────────────────────
  clitics: {
    text: {
      kind: 'dialogue',
      title: 'Gdje je moj punjač?',
      lines: [
        {
          who: 'Ema',
          hr: 'Luka, jesi li mi vratio punjač? Jučer sam ti ga posudila, a danas ga nigdje nema.',
          en: 'Luka, did you give me back my charger? I lent it to you yesterday, and today it is nowhere to be found.',
        },
        {
          who: 'Luka',
          hr: 'Vratio sam ti ga još sinoć. Stavio sam ga na tvoj stol.',
          en: 'I gave it back to you last night. I put it on your desk.',
        },
        {
          who: 'Ema',
          hr: 'Na stolu ga nema. Sjećaš li se točno kamo si ga stavio?',
          en: 'It is not on the desk. Do you remember exactly where you put it?',
        },
        {
          who: 'Luka',
          hr: 'Čekaj… Možda sam ga ipak dao Ivi. Tražila mi ga je prije večere.',
          en: 'Wait… Maybe I gave it to Iva after all. She asked me for it before dinner.',
        },
        {
          who: 'Ema',
          hr: 'Dakle, moj si punjač dao Ivi, a meni se nisi ni ispričao!',
          en: 'So you gave my charger to Iva, and you did not even apologize to me!',
        },
        {
          who: 'Luka',
          hr: 'Oprosti, ispričavam ti se. Odmah ću joj se javiti i reći joj da ti ga vrati.',
          en: 'Sorry, I apologize. I will get in touch with her right away and tell her to give it back to you.',
        },
        {
          who: 'Ema',
          hr: 'Ne moraš, upravo mi se javila: kaže da će mi ga donijeti sutra u školu.',
          en: 'You don’t have to, she has just contacted me: she says she will bring it to me at school tomorrow.',
        },
        {
          who: 'Luka',
          hr: 'Eto vidiš. A da ti kupim novi? Kupio bih ti ga već danas, ali nemam novca.',
          en: 'There you go. What if I buy you a new one? I would buy it for you today, but I have no money.',
        },
        {
          who: 'Ema',
          hr: 'Ne sviđa mi se ta ideja — kupio bi mi ga mojim novcem!',
          en: 'I don’t like that idea — you would buy it for me with my money!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the charger really, and when will Ema get it back?',
          options: [
            'On Ema’s desk; she finds it at once',
            'In the store; Luka is buying a new one today',
            'With Iva; she will bring it to school tomorrow',
            'With Luka; he will return it after dinner',
          ],
          correct: 2,
          hint: 'Luka remembers that somebody asked him for it before dinner.',
          explanation:
            'Luka gave it to Iva — Tražila mi ga je prije večere — and Iva has promised: donijet će ga sutra u školu.',
        },
        {
          q: 'Compare "Vratio sam ti ga" and "Tražila mi ga je". Why does the auxiliary stand first in one cluster and last in the other?',
          options: [
            'Because the first sentence is about a man and the second about a woman',
            'Because sam, si, smo, ste, su open the cluster, while the third-person je is the one form that closes it',
            'Because je is stressed and may stand anywhere',
            'Because the second sentence is a question',
          ],
          correct: 1,
          hint: 'Only the auxiliary differs between the two clusters; the pronouns keep the same order.',
          explanation:
            'The order is: auxiliary (sam, si, smo, ste, su) — dative — accusative — se — and only then je. So sam ti ga, but mi ga je.',
        },
        {
          type: 'type',
          q: 'Now you. Luka makes a promise to Ema about a new charger: Sutra ____ kupiti. (ga, ću, ti — in the right order)',
          answer: 'ću ti ga',
          hint: 'The future auxiliary behaves like sam: it opens the cluster. Then the person who receives, then the thing.',
          explanation:
            'Sutra ću ti ga kupiti. — auxiliary, dative, accusative: the same order as in Luka’s Vratio sam ti ga.',
        },
        {
          type: 'transform',
          q: 'Everybody knows what and whom the sentence is about. Replace both the charger and Iva with short pronouns.',
          from: 'Luka je dao punjač Ivi.',
          answer: 'Luka joj ga je dao.',
          accept: ['Dao joj ga je Luka.', 'Dao joj ga je.', 'On joj ga je dao.'],
          hint: 'Three short words end up side by side. The receiver comes before the thing, and this particular auxiliary goes to the very end of the cluster.',
          explanation:
            'Luka joj ga je dao. — dative joj (to Iva), accusative ga (the charger), and the third-person je last.',
        },
        {
          type: 'transform',
          q: 'In the end Ema liked the idea. Put her sentence — without the "ne" — into the past.',
          from: 'Sviđa mi se ta ideja.',
          answer: 'Svidjela mi se ta ideja.',
          accept: [
            'Ta mi se ideja svidjela.',
            'Ta ideja mi se svidjela.',
            'Sviđala mi se ta ideja.',
            'Ta mi se ideja sviđala.',
            'Ta ideja mi se sviđala.',
            'Svidjela mi se je ta ideja.',
          ],
          hint: 'The participle agrees with the idea, not with Ema. And remember what usually happens to the third-person auxiliary right after se.',
          explanation:
            'Svidjela mi se ta ideja. — dative mi before se; after se the auxiliary je is normally left out (Svidjela mi se je is regional, not the written standard).',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'sort',
        q: 'Are the short words in an order Croatian allows?',
        groups: ['Correct', 'Not possible'],
        items: [
          { hr: 'Dao sam mu ga.', group: 0 },
          { hr: 'Dao ga sam mu.', group: 1 },
          { hr: 'Vratila ti ih je.', group: 0 },
          { hr: 'Vratila je ti ih.', group: 1 },
          { hr: 'Javila mu se jučer.', group: 0 },
          { hr: 'Se javila jučer.', group: 1 },
        ],
        explanation:
          'Inside the cluster: sam first, then the dative, then the accusative (sam mu ga); je and se come after the pronouns (ti ih je, mu se). And a clitic can never open the sentence.',
      },
      6,
      {
        type: 'tf',
        q: '"Nasmijala se." is a mistake, because the auxiliary je is missing.',
        answer: false,
        hint: 'Think of what everyday Croatian does with the third-person auxiliary when it would follow se.',
        explanation:
          'False. After se the third-person je is usually dropped: Nasmijala se is the standard form. Nasmijala se je is heard in some regions, but it is not the written standard.',
      },
      7,
      2,
      {
        type: 'match',
        q: 'Who gave what to whom? Match each sentence to its meaning.',
        pairs: [
          ['Dala mi ga je.', 'She gave it to me.'],
          ['Dao sam joj ga.', 'I gave it to her.'],
          ['Dali su nam ih.', 'They gave them to us.'],
          ['Dao si mi ih.', 'You gave them to me.'],
          ['Dale smo vam ga.', 'We gave it to you.'],
        ],
        explanation:
          'The auxiliary and the participle tell you who gave (je + dala — she; sam — I; su — they; si — you; smo — we). The dative pronoun is the receiver, the accusative the thing.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "I would return it to you tomorrow." (a man speaking)',
        words: ['Sutra', 'bih', 'ti', 'ga', 'vratio.'],
        accept: ['Vratio bih ti ga sutra.'],
        explanation:
          'Sutra bih ti ga vratio. The conditional bih opens the cluster, then the dative ti, then the accusative ga — all of it straight after the first word.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Grandma told them a story.")',
        words: ['Baka', 'ih', 'je', 'ispričala', 'priču.'],
        wrong: 1,
        answer: 'im',
        hint: 'The story is what she told. The listeners are the people TO whom she told it — which case is that?',
        explanation:
          'Baka im je ispričala priču. — the listeners are in the dative, and the short dative for "them" is im. ih is the accusative (or genitive).',
      },
      10,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Rekao mi je.',
        answer: 'Nije mi rekao.',
        accept: ['On mi nije rekao.', 'Nije mi rekao!'],
        hint: 'The negated auxiliary is a full, stressed word: it can open the sentence, and the remaining clitic leans on it.',
        explanation:
          'Nije mi rekao. — je becomes nije, which is not a clitic and can stand first; mi follows it at once.',
      },
      {
        type: 'listen',
        audio: 'Obećao mi je da će mi ga vratiti do petka, ali još mi se nije javio.',
        q: 'What has happened?',
        options: [
          'He returned it on Friday and called afterward',
          'He promised to return it by Friday, but has not been in touch yet',
          'I promised to return it to him by Friday',
          'He called to say that he will not return it',
        ],
        correct: 1,
        explanation:
          'Obećao mi je — he promised me. da će mi ga vratiti — that he will return it to me (će, dative, accusative). još mi se nije javio — he has not gotten in touch with me yet.',
      },
      {
        type: 'dictate',
        audio: 'Jesi li joj ga pokazao?',
        answer: 'Jesi li joj ga pokazao?',
        hint: 'Five short words: "Did you show it to her?"',
        explanation:
          'Jesi li joj ga pokazao? — in a yes/no question the long form jesi opens the sentence with li after it; then the dative joj and the accusative ga.',
      },
    ],
  },

  // ── Politics and society ───────────────────────────────────────────────────
  'politics-society': {
    text: {
      kind: 'dialogue',
      title: 'Nakon izbora',
      lines: [
        {
          who: 'Mia',
          hr: 'Djede, jesi li gledao vijesti? Na lokalnim izborima pobijedila je stranka za koju nitko nije mislio da može pobijediti.',
          en: 'Grandpa, did you watch the news? The local elections were won by a party that nobody thought could win.',
        },
        {
          who: 'Djed',
          hr: 'Jesam. Odaziv je bio nizak, pa je svaki glas vrijedio dvostruko. Jesi li ti glasovala?',
          en: 'I did. Turnout was low, so every vote counted double. Did you vote?',
        },
        {
          who: 'Mia',
          hr: 'Naravno, prvi put! Glasovala sam upravo za tu stranku jer obećava bolji javni prijevoz.',
          en: 'Of course, for the first time! I voted for that very party because it promises better public transportation.',
        },
        {
          who: 'Djed',
          hr: 'Obećanja su jeftina. Novi gradonačelnik sada mora predložiti gradski proračun, a novca nema ni za ceste.',
          en: 'Promises are cheap. The new mayor now has to propose a city budget, and there is no money even for the roads.',
        },
        {
          who: 'Mia',
          hr: 'Barem je nešto novo. A što se događa u Saboru? Čula sam da su zastupnici raspravljali do ponoći.',
          en: 'At least it is something new. And what is going on in the Sabor? I heard that the representatives debated until midnight.',
        },
        {
          who: 'Djed',
          hr: 'Vlada je predložila novi zakon o stanovanju, a Sabor ga je sinoć izglasao malom većinom.',
          en: 'The Government proposed a new housing law, and last night the Sabor passed it by a small majority.',
        },
        {
          who: 'Mia',
          hr: 'Znači li to da zakon već vrijedi?',
          en: 'Does that mean the law is already in force?',
        },
        {
          who: 'Djed',
          hr: 'Još ne. Jedna stranka tvrdi da nije u skladu s Ustavom, pa će o njemu odlučivati Ustavni sud.',
          en: 'Not yet. One party claims that it is not in line with the Constitution, so the Constitutional Court will rule on it.',
        },
        {
          who: 'Mia',
          hr: 'Vidiš da nije svejedno tko sjedi u Saboru. Na parlamentarne izbore idemo zajedno — ja vozim!',
          en: 'You see, it does matter who sits in the Sabor. We are going to the parliamentary elections together — I am driving!',
        },
        {
          who: 'Djed',
          hr: 'Dogovoreno. Ali prije toga pročitaj programe svih stranaka, a ne samo plakate.',
          en: 'Agreed. But before that, read the programs of all the parties, not just the posters.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what has happened to the new housing law so far?',
          options: [
            'The Sabor proposed it, and the Government rejected it',
            'The Government proposed it, the Sabor passed it narrowly, and the Constitutional Court still has to rule on it',
            'The mayor proposed it, and the voters passed it in the local elections',
            'The Constitutional Court wrote it, and the Sabor is still debating it',
          ],
          correct: 1,
          hint: 'Three institutions appear, in this order: one proposes, one votes, one checks.',
          explanation:
            'Vlada je predložila zakon, Sabor ga je izglasao malom većinom, and because one party says it is not in line with the Constitution, the Ustavni sud will decide.',
        },
        {
          q: 'Grandpa says "Vlada je predložila … a Sabor ga je izglasao". Could he just as well have said "Vlada je izglasala zakon"?',
          options: [
            'Yes — Vlada and Sabor are two names for the same body',
            'Yes, but only in informal speech',
            'No — the Government proposes laws; passing them by vote is the job of the Sabor',
            'No — because Vlada is feminine and cannot take that verb',
          ],
          correct: 2,
          hint: 'Each of the two verbs belongs to one institution. Who sits and votes?',
          explanation:
            'The Vlada proposes (predložiti); the representatives in the Sabor vote, so only the Sabor can izglasati a law. Mixing the two is a mistake of fact, not of grammar.',
        },
        {
          type: 'type',
          q: 'Now you. Mia looks back at the last time: Prošli predsjednički izbori ____ u prosincu. (biti — past tense, two words)',
          answer: 'bili su',
          accept: ['su bili'],
          hint: 'In this sense the noun exists only in the plural, so both the auxiliary and the participle must be plural, masculine.',
          explanation:
            'Prošli predsjednički izbori bili su u prosincu. — izbori is always plural when it means an election, and the verb agrees with it.',
        },
        {
          type: 'transform',
          q: 'The town has elected a woman. Say the same about her.',
          from: 'Gradonačelnik je najavio nove mjere.',
          answer: 'Gradonačelnica je najavila nove mjere.',
          accept: ['Gradonačelnica je nove mjere najavila.'],
          hint: 'The woman’s title is built with the same ending as učiteljica, and the participle has to agree with her.',
          explanation:
            'Gradonačelnica je najavila nove mjere. — gradonačelnik → gradonačelnica, and the participle becomes feminine: najavila.',
        },
        {
          type: 'transform',
          q: 'Grandpa voted as well. Add WHERE he voted: "in the presidential elections".',
          from: 'Djed je glasovao.',
          answer: 'Djed je glasovao na predsjedničkim izborima.',
          accept: [
            'Djed je glasao na predsjedničkim izborima.',
            'Djed je na predsjedničkim izborima glasovao.',
            'Djed je na predsjedničkim izborima glasao.',
          ],
          hint: 'An event you take part in follows na and the locative — here the locative plural, for the adjective and for the noun.',
          explanation:
            'Djed je glasovao na predsjedničkim izborima. — na + the locative plural; the participle is masculine for Grandpa. glasovati and glasati are both in use.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'sort',
        q: 'National or local? Sort each office or event.',
        groups: ['The whole country', 'A town or a county'],
        items: [
          { hr: 'predsjednik', group: 0 },
          { hr: 'župan', group: 1 },
          { hr: 'zastupnik u Saboru', group: 0 },
          { hr: 'gradonačelnik', group: 1 },
          { hr: 'parlamentarni izbori', group: 0 },
          { hr: 'lokalni izbori', group: 1 },
        ],
        explanation:
          'The predsjednik, the members of the Sabor and parliamentary elections belong to the whole country. A župan leads a county, a gradonačelnik a town, and both are chosen in local elections.',
      },
      6,
      7,
      {
        type: 'match',
        q: 'Match each word to its description.',
        pairs: [
          ['birač', 'a person who has the right to vote'],
          ['zastupnik', 'a person elected to sit in the parliament'],
          ['stranka', 'an organized group that puts up candidates'],
          ['proračun', 'the plan of what will be earned and spent in a year'],
          ['članica', 'a country that belongs to a union'],
        ],
        explanation:
          'A birač votes, a zastupnik is elected, a stranka is a political party, the proračun is the budget, and a članica is a member state — Hrvatska je članica Europske unije.',
      },
      4,
      2,
      {
        type: 'tf',
        q: 'Hrvatska je članica Europske unije od 2013., a euro je uvela 2023.',
        answer: true,
        hint: 'Two dates from the lesson, ten years apart.',
        explanation:
          'True. Croatia joined the European Union in 2013 and adopted the euro (and joined the Schengen area) in 2023.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The elections will be held on Sunday."',
        words: ['Izbori', 'će', 'se', 'održati', 'u', 'nedjelju.'],
        accept: [
          'U nedjelju će se održati izbori.',
          'U nedjelju će se izbori održati.',
          'Izbori će se u nedjelju održati.',
          'Održat će se izbori u nedjelju.',
          'Izbori u nedjelju će se održati.',
        ],
        explanation:
          'Izbori će se održati u nedjelju. The short words će se keep together in second place, će before se.',
      },
      0,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sljedeći', 'izbori', 'bit', 'će', 'održan', 'u', 'lipnju.'],
        wrong: 4,
        answer: 'održani',
        hint: 'The subject of this sentence has no singular. Everything that agrees with it must show that.',
        explanation:
          'Sljedeći izbori bit će održani u lipnju. — izbori is plural, so the participle is plural as well: održani, like the adjective sljedeći.',
      },
      {
        type: 'transform',
        q: 'Not one mayor but the mayors of all the towns. Put the sentence into the plural.',
        from: 'Gradonačelnik je bio protiv novog zakona.',
        answer: 'Gradonačelnici su bili protiv novog zakona.',
        accept: [
          'Gradonačelnici su bili protiv novoga zakona.',
          'Gradonačelnici su protiv novog zakona bili.',
        ],
        hint: 'The k of the noun does not survive in front of the plural ending; the auxiliary and the participle change too.',
        explanation:
          'Gradonačelnici su bili protiv novog zakona. — k becomes c before -i (gradonačelnik → gradonačelnici), as in radnik → radnici.',
      },
      11,
      {
        type: 'listen',
        audio: 'Premijer je najavio da će Vlada sljedeći tjedan predložiti novi proračun.',
        q: 'What was announced?',
        options: [
          'The Sabor passed the new budget last week',
          'The Prime Minister will resign next week',
          'The Government will propose a new budget next week',
          'The mayor rejected the Government’s budget',
        ],
        correct: 2,
        explanation:
          'Premijer je najavio — the Prime Minister announced. da će Vlada … predložiti novi proračun — that the Government will propose a new budget; passing it will then be up to the Sabor.',
      },
      {
        type: 'dictate',
        audio: 'Birači su izabrali novu gradonačelnicu.',
        answer: 'Birači su izabrali novu gradonačelnicu.',
        hint: 'Five words: "The voters have elected a new mayor" — and the mayor is a woman.',
        explanation:
          'Birači su izabrali novu gradonačelnicu. — birači is the plural of birač, so su izabrali; the woman’s title gradonačelnica is the object, so it and its adjective take the accusative in -u.',
      },
    ],
  },

  // ══ UNIT 4 ═════════════════════════════════════════════════════════════════

  // ── Koji in every case ─────────────────────────────────────────────────────
  'relative-pronouns-cases': {
    text: {
      kind: 'dialogue',
      title: 'Zgrada u kojoj smo stanovali',
      lines: [
        {
          who: 'Vesna',
          hr: 'Gorane, pogledaj ovu fotografiju! To je zgrada u kojoj smo stanovali kao studenti.',
          en: 'Goran, look at this photo! That is the building we lived in as students.',
        },
        {
          who: 'Goran',
          hr: 'Naravno! A ovo je gazdarica kojoj smo uvijek kasno plaćali stanarinu.',
          en: 'Of course! And this is the landlady we always paid the rent to late.',
        },
        {
          who: 'Vesna',
          hr: 'I susjed čija je mačka svaku noć spavala na našem balkonu. Kako se ono zvao?',
          en: 'And the neighbor whose cat slept on our balcony every night. What was his name again?',
        },
        {
          who: 'Goran',
          hr: 'Gospodin Rudolf. To je čovjek kojeg nikad neću zaboraviti: sve što smo znali o kuhanju naučili smo od njega.',
          en: 'Mr. Rudolf. He is a man I will never forget: everything we knew about cooking we learned from him.',
        },
        {
          who: 'Vesna',
          hr: 'Sjećaš li se prijatelja s kojima smo svake subote igrali karte?',
          en: 'Do you remember the friends we played cards with every Saturday?',
        },
        {
          who: 'Goran',
          hr: 'Kako ne! Oni kojima još uvijek pišem danas žive u Kanadi.',
          en: 'How could I not! The ones I still write to live in Canada today.',
        },
        {
          who: 'Vesna',
          hr: 'Znaš li čega se ja najradije sjećam? Večeri koje nismo planirali, a trajale su do jutra.',
          en: 'Do you know what I like remembering most? The evenings that we did not plan, and that lasted until morning.',
        },
        {
          who: 'Goran',
          hr: 'Onaj tko to nije doživio ne zna što je studentski život.',
          en: 'Anyone who has not lived through that does not know what student life is.',
        },
        {
          who: 'Vesna',
          hr: 'Šteta što je kafić u kojem smo se upoznali danas banka.',
          en: 'It is a pity that the café where we met is a bank today.',
        },
        {
          who: 'Goran',
          hr: 'Banka? Onda je to prva banka o kojoj mislim sve najbolje!',
          en: 'A bank? Then it is the first bank I think the very best of!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who was Mr. Rudolf?',
          options: [
            'The landlord, who was always paid late',
            'The neighbor whose cat slept on their balcony, and who taught them to cook',
            'A friend who moved to Canada',
            'The owner of the café where they met',
          ],
          correct: 1,
          hint: 'Vesna remembers an animal; Goran remembers what the man taught them.',
          explanation:
            'susjed čija je mačka spavala na našem balkonu — and Goran adds that everything they knew about cooking they learned from him.',
        },
        {
          q: '"zgrada u kojoj smo stanovali" and "gazdarica kojoj smo plaćali stanarinu": the same form twice. Is it doing the same job?',
          options: [
            'Yes — both times it is the subject of its clause',
            'Yes — both times it shows where something happened',
            'No — the first is an accusative, the second a genitive',
            'No — after u it is the locative (a place); without a preposition it is the dative (the person who is paid)',
          ],
          correct: 3,
          hint: 'Ask of each clause: we lived WHERE? we paid the rent TO WHOM?',
          explanation:
            'The feminine dative and locative look alike. u kojoj — locative, the place where they lived. kojoj — dative, the person to whom they paid.',
        },
        {
          type: 'type',
          q: 'Now you. Say more about the neighbor: Gospodin Rudolf imao je mačku ____ smo svi voljeli. (koji)',
          answer: 'koju',
          hint: 'The noun in front decides gender and number. Inside its own clause the cat is the one being loved — the object.',
          explanation:
            'mačku koju smo svi voljeli — feminine singular because of mačka, accusative because inside the clause she is the object of voljeli.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one with the right form of "koji".',
          from: 'Ovo je susjeda. Kod te susjede često pijem kavu.',
          answer: 'Ovo je susjeda kod koje često pijem kavu.',
          accept: [
            'Ovo je susjeda kod koje pijem kavu često.',
            'Ovo je susjeda kod koje kavu često pijem.',
            'Ovo je susjeda kod koje često kavu pijem.',
          ],
          hint: 'The preposition travels with the pronoun to the front of the clause, and the pronoun keeps the case the preposition asks for.',
          explanation:
            'Ovo je susjeda kod koje često pijem kavu. — kod + the genitive, feminine: kod koje. The preposition always comes before the pronoun, never at the end.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences with the word for "whose".',
          from: 'To je studentica. Njezin brat živi u Kanadi.',
          answer: 'To je studentica čiji brat živi u Kanadi.',
          accept: ['To je studentica čiji brat u Kanadi živi.'],
          hint: 'This word does not agree with the owner. Look at what — or who — is "owned".',
          explanation:
            'To je studentica čiji brat živi u Kanadi. — čiji agrees with brat (masculine), not with the student, although she is a woman.',
        },
      ],
    },
    mix: [
      11,
      8,
      {
        type: 'sort',
        q: 'What is the relative pronoun doing inside its own clause?',
        groups: ['It is the subject', 'It is the object', 'It follows a preposition'],
        items: [
          { hr: 'žena koja pjeva', group: 0 },
          { hr: 'pjesma koju volim', group: 1 },
          { hr: 'grad u kojem živim', group: 2 },
          { hr: 'film koji počinje u osam', group: 0 },
          { hr: 'pismo koje pišem', group: 1 },
          { hr: 'kuća ispred koje čekam', group: 2 },
        ],
        explanation:
          'The woman sings and the movie begins — subjects, nominative. I love the song and write the letter — objects, accusative. u kojem and ispred koje take the case their preposition asks for.',
      },
      9,
      0,
      {
        type: 'match',
        q: 'Match each beginning to the clause that agrees with it.',
        pairs: [
          ['To je žena', 'koja radi u banci.'],
          ['To je dijete', 'koje ide u vrtić.'],
          ['To su ljudi', 'koji stanuju iznad nas.'],
          ['To je čovjek', 'koji popravlja bicikle.'],
          ['To su žene', 'koje pjevaju u zboru.'],
        ],
        explanation:
          'The noun decides the gender and number of the pronoun, and the verb of the clause agrees too: koja radi, koje ide, koji stanuju (plural), koji popravlja (singular), koje pjevaju (plural).',
      },
      10,
      5,
      {
        type: 'tf',
        q: 'In "ono čega se bojim", the word čega is a form of što.',
        answer: true,
        hint: 'After ono, sve, nešto and ništa the relative is not koji. And bojati se asks for one particular case.',
        explanation:
          'True. After ono the relative is što, and it declines: bojati se takes the genitive, so ono čega se bojim.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The book that I lent you is lying on the table."',
        words: ['Knjiga', 'koju', 'sam', 'ti', 'posudio', 'leži', 'na', 'stolu.'],
        accept: [
          'Na stolu leži knjiga koju sam ti posudio.',
          'Knjiga koju sam ti posudio na stolu leži.',
        ],
        explanation:
          'Knjiga koju sam ti posudio leži na stolu. The clitics come straight after the relative pronoun: sam first, then the dative ti.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Marko,', 'čiji', 'sestra', 'živi', 'u', 'Beču,', 'dolazi', 'sutra.'],
        wrong: 1,
        answer: 'čija',
        hint: 'This word agrees with the person who is "owned", not with the owner.',
        explanation:
          'Marko, čija sestra živi u Beču, dolazi sutra. — sestra is feminine, so the word for "whose" is feminine, although Marko is a man.',
      },
      {
        type: 'transform',
        q: 'Join the two sentences into one with the right form of "koji".',
        from: 'To je profesor. Njemu sam poslala esej.',
        answer: 'To je profesor kojem sam poslala esej.',
        accept: [
          'To je profesor kojemu sam poslala esej.',
          'To je profesor kojem sam esej poslala.',
          'To je profesor kojemu sam esej poslala.',
        ],
        hint: 'The pronoun takes over the case of the word it replaces — the person TO whom the essay went — and the short auxiliary follows it at once.',
        explanation:
          'To je profesor kojem (or kojemu) sam poslala esej. — dative, masculine singular; the clitic sam stands right after the relative pronoun.',
      },
      3,
      {
        type: 'listen',
        audio: 'Žena čiji je muž liječnik radi u školi u koju idu moja djeca.',
        q: 'Who works at the school?',
        options: [
          'The doctor',
          'The woman whose husband is a doctor',
          'The speaker’s wife',
          'The doctor’s daughter',
        ],
        correct: 1,
        explanation:
          'Žena … radi u školi — the woman works at the school. čiji je muž liječnik — whose husband is a doctor. u koju idu moja djeca — the school my children go to (direction, so the accusative).',
      },
      {
        type: 'dictate',
        audio: 'To je sve o čemu razmišljam.',
        answer: 'To je sve o čemu razmišljam.',
        hint: 'Six words: "That is all I think about."',
        explanation:
          'To je sve o čemu razmišljam. — after sve the relative is što; razmišljati o takes the locative, so o čemu, with the preposition in front.',
      },
    ],
  },

  // ── Predicate instrumental ─────────────────────────────────────────────────
  'predicate-instrumental': {
    text: {
      kind: 'text',
      title: 'Od konobarice do ravnateljice',
      lines: [
        {
          hr: 'Marta Perić odrasla je u malom mjestu na Braču. Njezin otac bio je ribar, a majka učiteljica.',
          en: 'Marta Perić grew up in a small village on the island of Brač. Her father was a fisherman, and her mother a teacher.',
        },
        {
          hr: 'Kao studentica svako je ljeto radila kao konobarica u obiteljskom restoranu.',
          en: 'As a student she worked every summer as a waitress in the family restaurant.',
        },
        {
          hr: 'Poslije studija postala je profesorica glazbe, a s trideset pet godina imenovana je ravnateljicom glazbene škole u Splitu.',
          en: 'After college she became a music teacher, and at thirty-five she was appointed principal of the music school in Split.',
        },
        {
          hr: 'Kolege je smatraju strogom, ali pravednom šeficom.',
          en: 'Her colleagues consider her a strict but fair boss.',
        },
        {
          hr: '„Učenici me u početku nisu smatrali prijateljicom”, kaže ona kroz smijeh, „ali danas mi dolaze i po savjet.”',
          en: '"At first the students did not consider me a friend," she says with a laugh, "but today they even come to me for advice."',
        },
        {
          hr: 'Prošle je godine proglašena najboljom ravnateljicom u županiji.',
          en: 'Last year she was declared the best principal in the county.',
        },
        {
          hr: 'Nagradu, kaže, ne smatra svojim uspjehom, nego uspjehom cijele škole.',
          en: 'She says she does not consider the award her own success, but the success of the whole school.',
        },
        {
          hr: 'Njezin bivši učenik, danas poznat pijanist, o njoj govori s poštovanjem: „Bila mi je i učiteljica i prijateljica.”',
          en: 'A former student of hers, today a well-known pianist, speaks of her with respect: "She was both a teacher and a friend to me."',
        },
        {
          hr: 'A Marta? „Ja sam i dalje samo kći jednog ribara”, odgovara.',
          en: 'And Marta? "I am still just a fisherman’s daughter," she answers.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: which jobs has Marta had, in the right order?',
          options: [
            'Teacher, then waitress, then pianist',
            'Fisherman, then music teacher, then boss of a restaurant',
            'Waitress in the summers, then music teacher, then principal of the music school',
            'Principal, then music teacher, then waitress',
          ],
          correct: 2,
          hint: 'The first job was a summer job in the family restaurant; the last one came at thirty-five.',
          explanation:
            'Radila je kao konobarica, postala je profesorica glazbe, and then imenovana je ravnateljicom glazbene škole.',
        },
        {
          q: 'The text says "otac bio je ribar" but "imenovana je ravnateljicom". Why is one noun in the nominative and the other in the instrumental?',
          options: [
            'Because ribar is masculine and ravnateljica is feminine',
            'Because the first sentence is about the past and the second is not',
            'Because a principal is more important than a fisherman',
            'Because after biti the nominative is the everyday form, while imenovati puts the role into the instrumental',
          ],
          correct: 3,
          hint: 'Do not look at the nouns — look at the verb in front of each.',
          explanation:
            'After biti the predicate noun normally stays in the nominative: bio je ribar. Verbs of appointing, declaring and considering move it into the instrumental: imenovana je ravnateljicom.',
        },
        {
          type: 'type',
          q: 'Now you. The pianist says what he thinks of her as a teacher: Smatram je odličnom ____. (učiteljica)',
          answer: 'učiteljicom',
          hint: 'The adjective in front already shows the case that smatrati asks for; the noun has to follow it.',
          explanation:
            'Smatram je odličnom učiteljicom. — smatrati + the instrumental, for the adjective and the noun together.',
        },
        {
          type: 'transform',
          q: 'He was not always one. Say that her student BECAME a pianist.',
          from: 'Njezin učenik je pijanist.',
          answer: 'Njezin učenik postao je pijanistom.',
          accept: [
            'Njezin učenik je postao pijanistom.',
            'Njezin je učenik postao pijanistom.',
            'Njezin učenik postao je pijanist.',
            'Njezin učenik je postao pijanist.',
            'Njezin je učenik postao pijanist.',
          ],
          hint: 'With the verb of becoming, formal writing moves the noun into the instrumental — though the nominative is standard here too.',
          explanation:
            'Njezin učenik postao je pijanistom. — after postati the instrumental is the formal choice; postao je pijanist is equally correct.',
        },
        {
          type: 'transform',
          q: 'This is a plain statement. Turn it into what everybody thinks of her: begin with "Svi je smatraju…".',
          from: 'Ona je dobra pjevačica.',
          answer: 'Svi je smatraju dobrom pjevačicom.',
          accept: ['Svi ju smatraju dobrom pjevačicom.'],
          hint: 'Two words have to move into the instrumental together, not just the noun.',
          explanation:
            'Svi je smatraju dobrom pjevačicom. — after smatrati both the adjective and the noun are in the instrumental: dobrom pjevačicom.',
        },
      ],
    },
    mix: [
      12,
      11,
      {
        type: 'sort',
        q: 'Which case does the noun for the role take after each of these?',
        groups: ['The nominative stays', 'The instrumental'],
        items: [
          { hr: 'zvati se', group: 0 },
          { hr: 'smatrati', group: 1 },
          { hr: 'raditi kao', group: 0 },
          { hr: 'proglasiti', group: 1 },
          { hr: 'imenovati', group: 1 },
        ],
        explanation:
          'After zvati se and after kao the noun keeps its dictionary form. smatrati, proglasiti and imenovati put what someone is taken to be, declared or appointed into the instrumental.',
      },
      8,
      0,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Proglašen je pobjednikom.', 'He was declared the winner.'],
          ['Imenovan je veleposlanikom.', 'He was appointed ambassador.'],
          ['Smatraju ga junakom.', 'They consider him a hero.'],
          ['Radi kao glasnogovornik.', 'He works as a spokesperson.'],
          ['Postao je ravnateljem.', 'He became principal.'],
        ],
        explanation:
          'proglasiti — to declare, imenovati — to appoint, smatrati — to consider, postati — to become: all with the instrumental here. After kao the noun stays in the nominative: glasnogovornik.',
      },
      9,
      {
        type: 'tf',
        q: '"Postao je liječnik" is a mistake: after postati only the instrumental is correct.',
        answer: false,
        hint: 'The lesson names one verb of this group with which you have a choice.',
        explanation:
          'False. With postati both are standard: Postao je liječnikom is more formal, Postao je liječnik is equally correct.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "The Government appointed her ambassador to Canada."',
        words: ['Vlada', 'ju', 'je', 'imenovala', 'veleposlanicom', 'u', 'Kanadi.'],
        accept: [
          'Imenovala ju je Vlada veleposlanicom u Kanadi.',
          'Veleposlanicom u Kanadi imenovala ju je Vlada.',
          'Vlada ju je veleposlanicom u Kanadi imenovala.',
        ],
        explanation:
          'Vlada ju je imenovala veleposlanicom u Kanadi. The role is in the instrumental after imenovati; before the auxiliary je the pronoun "her" takes the form ju.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Svi', 'ga', 'smatraju', 'dobar', 'čovjekom.'],
        wrong: 3,
        answer: 'dobrim',
        hint: 'The noun has already moved into the case this verb asks for. Something was left behind.',
        explanation:
          'Svi ga smatraju dobrim čovjekom. — the adjective goes into the instrumental together with its noun.',
      },
      {
        type: 'transform',
        q: 'This time the winner is a woman, Ivana. Replace "ga" and change the noun to match her.',
        from: 'Proglasili su ga pobjednikom.',
        answer: 'Proglasili su je pobjednicom.',
        accept: [
          'Proglasili su ju pobjednicom.',
          'Proglasili su Ivanu pobjednicom.',
          'Ivanu su proglasili pobjednicom.',
        ],
        hint: 'A woman who wins has her own noun, built like učiteljica — and the k of the man’s word changes before that ending.',
        explanation:
          'Proglasili su je pobjednicom. — pobjednik → pobjednica, and after proglasiti it stands in the instrumental: pobjednicom.',
      },
      7,
      {
        type: 'listen',
        audio: 'Ljeti radi kao vodič, a ove je godine proglašen najboljim vodičem u Dalmaciji.',
        q: 'What do you learn about him?',
        options: [
          'He used to be a guide, and now he works in Dalmatia as a waiter',
          'He works as a guide in the summer, and this year he was declared the best guide in Dalmatia',
          'He considers himself the best guide in Dalmatia',
          'He became a guide this year',
        ],
        correct: 1,
        explanation:
          'radi kao vodič — after kao the noun stays in the nominative. proglašen najboljim vodičem — after proglasiti both the adjective and the noun are in the instrumental.',
      },
      {
        type: 'dictate',
        audio: 'Smatram je dobrom prijateljicom.',
        answer: 'Smatram je dobrom prijateljicom.',
        accept: ['Smatram ju dobrom prijateljicom.'],
        hint: 'Four words: "I consider her a good friend."',
        explanation:
          'Smatram je dobrom prijateljicom. — smatrati + the accusative of the person (je) + the instrumental of what she is taken to be.',
      },
    ],
  },

  // ── Comparative idioms ─────────────────────────────────────────────────────
  'comparative-idioms': {
    text: {
      kind: 'dialogue',
      title: 'Kiša na Velebitu',
      lines: [
        {
          who: 'Katarina',
          hr: 'Jure, kako je bilo na Velebitu? Izgledaš umorno, ali vidim da si zdrav kao dren.',
          en: 'Jure, how was it on Velebit? You look tired, but I can see you are as fit as a fiddle.',
        },
        {
          who: 'Jure',
          hr: 'Bilo je sjajno, samo što nas je na vrhu uhvatila kiša. U planinarski dom stigao sam mokar kao miš.',
          en: 'It was great, except that the rain caught us at the top. I reached the mountain hut soaked to the skin.',
        },
        {
          who: 'Katarina',
          hr: 'A Bruno? Čula sam da je i on išao s vama.',
          en: 'And Bruno? I heard that he went with you too.',
        },
        {
          who: 'Jure',
          hr: 'Bruno je uzbrdo bio spor kao puž, ali kad je čuo grmljavinu, potrčao je brz kao munja!',
          en: 'Uphill Bruno was as slow as a snail, but when he heard the thunder, he took off as fast as lightning!',
        },
        {
          who: 'Katarina',
          hr: 'Tipično. I onda vam je sigurno rekao da uopće nije trebalo ići.',
          en: 'Typical. And then he surely told you that you should not have gone at all.',
        },
        {
          who: 'Jure',
          hr: 'Nije rekao ništa. Šutio je kao riba, a kad smo stigli u dom, bio je blijed kao krpa.',
          en: 'He said nothing. He was as silent as the grave, and when we reached the hut, he was as white as a sheet.',
        },
        {
          who: 'Katarina',
          hr: 'Jadan Bruno! Jeste li barem nešto pojeli?',
          en: 'Poor Bruno! Did you at least have something to eat?',
        },
        {
          who: 'Jure',
          hr: 'Jesmo. Bio sam gladan kao vuk, pa sam pojeo dva puna tanjura graha.',
          en: 'We did. I was as hungry as a wolf, so I ate two full plates of beans.',
        },
        {
          who: 'Katarina',
          hr: 'I onda si, pretpostavljam, spavao kao top.',
          en: 'And then, I suppose, you slept like a log.',
        },
        {
          who: 'Jure',
          hr: 'Deset sati! Ali Bruno je tvrdoglav kao mazga: kaže da s nama više nikad ne ide — a već pita kamo idemo sljedeći vikend.',
          en: 'Ten hours! But Bruno is as stubborn as a mule: he says he is never coming with us again — and he is already asking where we are going next weekend.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how did Bruno move on the way up, and what changed when he heard the thunder?',
          options: [
            'He was fast on the way up and stopped when the thunder came',
            'He was very slow on the way up, and then ran very fast',
            'He was silent on the way up, and then began to shout',
            'He was hungry on the way up, and then fell asleep',
          ],
          correct: 1,
          hint: 'Jure uses two images for him in one sentence: a small animal first, then something from a storm.',
          explanation:
            'Uzbrdo je bio spor kao puž — as slow as a snail — but at the sound of thunder potrčao je brz kao munja, as fast as lightning.',
        },
        {
          q: 'Jure calls Bruno "tvrdoglav kao mazga" — and at once adds that Bruno is already asking about next weekend. What is Jure really telling Katarina?',
          options: [
            'That Bruno’s "never again" is not to be taken seriously',
            'That Bruno is angry and has ended the friendship',
            'That Bruno is ill and has to stay at home',
            'That Bruno wants to go alone next time',
          ],
          correct: 0,
          hint: 'Set what Bruno SAYS beside what Bruno DOES.',
          explanation:
            'Bruno stubbornly repeats that he is never going again, yet he already wants to know the next destination. Jure is smiling at him: the "never" will not last.',
        },
        {
          type: 'type',
          q: 'Now you. Katarina was caught in the same rain last week: Stigla sam kući ____ kao miš. (mokar)',
          answer: 'mokra',
          hint: 'The animal in the image never changes — but the adjective describes the woman who is speaking.',
          explanation:
            'Stigla sam kući mokra kao miš. — the adjective agrees with the person (Katarina, feminine); the noun after kao stays as it is.',
        },
        {
          type: 'transform',
          q: 'Katarina had a fright too. Say the same about her.',
          from: 'Bruno je bio blijed kao krpa.',
          answer: 'Katarina je bila blijeda kao krpa.',
          accept: ['Katarina je blijeda kao krpa bila.'],
          hint: 'Two words agree with the person; the image itself is fixed.',
          explanation:
            'Katarina je bila blijeda kao krpa. — the participle and the adjective become feminine; kao krpa does not change.',
        },
        {
          type: 'transform',
          q: 'Katarina promises to keep the story of Bruno’s run a secret. Put the sentence into the future and make it about her.',
          from: 'Šutio je kao riba.',
          answer: 'Šutjet će kao riba.',
          accept: [
            'Ona će šutjeti kao riba.',
            'Katarina će šutjeti kao riba.',
            'Šutjet će kao riba!',
          ],
          hint: 'An idiom built on a verb changes like any verb. In the future the infinitive loses its final -i when the short auxiliary follows it.',
          explanation:
            'Šutjet će kao riba. — only the verb changes (šutio je → šutjet će); the image kao riba stays exactly as it is.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Spavati kao top" means to sleep badly, because a cannon is loud.',
        answer: false,
        hint: 'Do not reason from the image — these idioms are fixed. Think of how a baby sleeps in the lesson’s example.',
        explanation:
          'False. Spavati kao top means to sleep very deeply — where English sleeps like a log.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "After the hike I was as hungry as a wolf." (a man speaking)',
        words: ['Nakon', 'planinarenja', 'bio', 'sam', 'gladan', 'kao', 'vuk.'],
        accept: [
          'Bio sam gladan kao vuk nakon planinarenja.',
          'Nakon planinarenja sam bio gladan kao vuk.',
        ],
        explanation:
          'Nakon planinarenja bio sam gladan kao vuk. The three words of the idiom stay together and in this order.',
      },
      10,
      {
        type: 'transform',
        q: 'Say it with a comparative idiom instead of "vrlo" — think of the animal that carries its house on its back.',
        from: 'Vrlo je spora.',
        answer: 'Spora je kao puž.',
        accept: ['Ona je spora kao puž.', 'Spora je kao puž!'],
        hint: 'Adjective + kao + the animal in its dictionary form; the adjective keeps its feminine ending.',
        explanation:
          'Spora je kao puž. — slow as a snail. The adjective stays feminine, like spora in the original; the image is fixed.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'baka', 'je', 'zdrav', 'kao', 'dren.'],
        wrong: 3,
        answer: 'zdrava',
        hint: 'The tree in the image never changes. What has to agree with the person?',
        explanation:
          'Moja baka je zdrava kao dren. — the adjective agrees with baka (feminine); the noun after kao stays in its fixed form.',
      },
      12,
      7,
      {
        type: 'sort',
        q: 'Would you be glad to hear it said about you?',
        groups: ['Yes — it is a compliment', 'No — not really'],
        items: [
          { hr: 'zdrav kao dren', group: 0 },
          { hr: 'spor kao puž', group: 1 },
          { hr: 'brz kao munja', group: 0 },
          { hr: 'tvrdoglav kao mazga', group: 1 },
          { hr: 'hladan kao led', group: 1 },
        ],
        explanation:
          'Being in excellent health (zdrav kao dren) or very fast (brz kao munja) is good news. Very slow (spor kao puž), very stubborn (tvrdoglav kao mazga) or cold and unfriendly (hladan kao led) is not.',
      },
      1,
      {
        type: 'match',
        q: 'Which idiom fits the situation?',
        pairs: [
          ['He has not eaten since the morning.', 'gladan kao vuk'],
          ['She forgot her umbrella in a storm.', 'mokra kao miš'],
          ['He lay in the sun all day without sunscreen.', 'crven kao rak'],
          ['She has just heard terrible news.', 'blijeda kao krpa'],
          ['He has no family and no friends nearby.', 'sam kao prst'],
        ],
        explanation:
          'Each adjective has its own fixed image: hunger — the wolf, wet — the mouse, red — the crab, pale — the rag, alone — the finger.',
      },
      4,
      {
        type: 'listen',
        audio: 'Djed ima osamdeset godina, zdrav je kao dren, ali tvrdoglav kao mazga.',
        q: 'What is the grandfather like?',
        options: [
          'Old, ill and lonely',
          'Very slow, but very clever',
          'Young for his age, and very quiet',
          'In excellent health for his eighty years, but very stubborn',
        ],
        correct: 3,
        explanation:
          'zdrav kao dren — in excellent health; tvrdoglav kao mazga — very stubborn. Ima osamdeset godina — he is eighty.',
      },
      {
        type: 'dictate',
        audio: 'Nova susjeda je hladna kao led.',
        answer: 'Nova susjeda je hladna kao led.',
        hint: 'Six words: "The new neighbor is as cold as ice."',
        explanation:
          'Nova susjeda je hladna kao led. — said of a person, the idiom means unfriendly; hladna agrees with susjeda.',
      },
    ],
  },

  // ── Reading culture ────────────────────────────────────────────────────────
  'reading-culture': {
    text: {
      kind: 'dialogue',
      title: 'Papir ili ekran?',
      lines: [
        {
          who: 'Viktor',
          hr: 'Helena, opet nosiš punu torbu! Što si sve kupila na Interliberu?',
          en: 'Helena, you are carrying a full bag again! What did you buy at Interliber?',
        },
        {
          who: 'Helena',
          hr: 'Dva romana i zbirku pjesama. Jednu sam knjigu čak dobila s potpisom — upoznala sam spisateljicu.',
          en: 'Two novels and a collection of poems. I even got one book signed — I met the author.',
        },
        {
          who: 'Viktor',
          hr: 'Ja sam kupio samo čitač. Po mom mišljenju, tiskana knjiga polako odlazi u povijest.',
          en: 'I bought only an e-reader. In my opinion, the printed book is slowly becoming history.',
        },
        {
          who: 'Helena',
          hr: 'Ne slažem se s tim. S jedne strane, e-knjige su jeftinije i lakše, ali s druge strane, papir ne treba punjač.',
          en: 'I don’t agree with that. On the one hand, e-books are cheaper and lighter, but on the other hand, paper does not need a charger.',
        },
        {
          who: 'Viktor',
          hr: 'Priznajem, ali u moj čitač stane cijela knjižnica. Na more više ne nosim pola kovčega knjiga.',
          en: 'I admit that, but a whole library fits into my e-reader. I no longer carry half a suitcase of books to the coast.',
        },
        {
          who: 'Helena',
          hr: 'A ja smatram da knjiga koju držiš u ruci ostaje dulje u glavi. Osim toga, čitač ne možeš posuditi prijateljici.',
          en: 'And I believe that a book you hold in your hand stays in your head longer. Besides, you cannot lend an e-reader to a friend.',
        },
        {
          who: 'Viktor',
          hr: 'Zato postoji gradska knjižnica — ondje posuđujem i tiskane knjige, i to besplatno.',
          en: 'That is what the city library is for — I borrow printed books there too, and for free.',
        },
        {
          who: 'Helena',
          hr: 'Vidiš, ipak ih čitaš! Meni je draža knjižara: volim da knjiga ostane kod mene.',
          en: 'You see, you do read them after all! I prefer the bookstore: I like a book to stay with me.',
        },
        {
          who: 'Viktor',
          hr: 'Onda smo se složili barem u jednom: nije važno na čemu čitaš, nego da čitaš.',
          en: 'Then we have agreed on one thing at least: it does not matter what you read on, but that you read.',
        },
        {
          who: 'Helena',
          hr: 'Tako je. A sad idemo na kavu — pokazat ću ti što sam sve kupila.',
          en: 'That’s right. And now let’s go for coffee — I will show you everything I bought.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did each of them buy at the fair?',
          options: [
            'Helena an e-reader; Viktor two novels',
            'Helena two novels and a collection of poems; Viktor only an e-reader',
            'Both bought the same signed novel',
            'Helena a collection of poems; Viktor a suitcase',
          ],
          correct: 1,
          hint: 'One of them carries a full bag; the other bought a single device.',
          explanation:
            'Helena: dva romana i zbirku pjesama (one of the books signed by its author). Viktor: samo čitač.',
        },
        {
          q: 'Viktor mentions that he borrows printed books from the library. Why does Helena answer "Vidiš, ipak ih čitaš!"?',
          options: [
            'She is surprised that the library is free',
            'She is angry that he does not buy books',
            'She has caught him out: he said print was becoming history, yet he still reads it',
            'She thinks he should return the books sooner',
          ],
          correct: 2,
          hint: 'The little word "ipak" means "after all". After all of what?',
          explanation:
            'Viktor claimed that the printed book odlazi u povijest — and then admitted that he borrows printed books himself. ipak marks the contradiction.',
        },
        {
          type: 'type',
          q: 'Now you. One of them borrows, the other buys: Viktor knjige posuđuje u ____, a Helena ih kupuje u knjižari.',
          answer: 'knjižnici',
          hint: 'The place for borrowing — not the store. After u for a place, the feminine noun takes its locative ending.',
          explanation:
            'Viktor knjige posuđuje u knjižnici. — knjižnica is the library; knjižara is the bookstore. Two words that are easy to mix up.',
        },
        {
          type: 'transform',
          q: 'Stated like this, it sounds like a fact. Present it as your own view: begin with "Smatram da…".',
          from: 'E-knjiga će zamijeniti tiskanu.',
          answer: 'Smatram da će e-knjiga zamijeniti tiskanu.',
          accept: [
            'Smatram da će e-knjiga zamijeniti tiskanu knjigu.',
            'Ja smatram da će e-knjiga zamijeniti tiskanu.',
          ],
          hint: 'Inside the new clause the short word for the future can no longer follow the subject: it moves up to second place.',
          explanation:
            'Smatram da će e-knjiga zamijeniti tiskanu. — after da the clitic će comes at once, before the subject.',
        },
        {
          type: 'transform',
          q: 'Say the same with "draža" — literally "a printed book is dearer to me" — beginning with "Meni…".',
          from: 'Više volim tiskanu knjigu.',
          answer: 'Meni je draža tiskana knjiga.',
          accept: [
            'Meni je tiskana knjiga draža.',
            'Draža mi je tiskana knjiga.',
            'Tiskana knjiga mi je draža.',
            'Tiskana mi je knjiga draža.',
          ],
          hint: 'In this pattern the book is no longer the object: it becomes the subject, and the person who prefers it stands in the dative.',
          explanation:
            'Meni je draža tiskana knjiga. — the thing you prefer is the subject in the nominative, and draža agrees with it; the person is in the dative (meni).',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'Where do you do it — in the library or in the bookstore?',
        groups: ['Knjižnica', 'Knjižara'],
        items: [
          { hr: 'posuditi roman na tri tjedna', group: 0 },
          { hr: 'kupiti novi roman', group: 1 },
          { hr: 'vratiti knjigu na vrijeme', group: 0 },
          { hr: 'platiti knjigu karticom', group: 1 },
          { hr: 'tiho učiti u čitaonici', group: 0 },
          { hr: 'dobiti račun za knjigu', group: 1 },
        ],
        explanation:
          'In a knjižnica you borrow, return and study in the reading room. In a knjižara you buy, pay and get a receipt.',
      },
      9,
      {
        type: 'match',
        q: 'Who or what is it? Match each word to its description.',
        pairs: [
          ['čitatelj', 'a person who reads books'],
          ['knjižničar', 'a man who works among books that are lent out'],
          ['nakladnik', 'a company that publishes books'],
          ['pisac', 'a man who writes books'],
          ['čitač', 'a device for reading e-books'],
        ],
        explanation:
          'čitatelj is the person, čitač the device. A knjižničar works in a library, a nakladnik publishes books and a pisac writes them.',
      },
      10,
      {
        type: 'tf',
        q: 'In Croatian, "roman" means a love story.',
        answer: false,
        hint: 'It is a false friend. What kind of book is Helena carrying two of?',
        explanation: 'False. A roman is a novel — any long work of fiction, whatever it is about.',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "In my opinion, a printed book has a soul."',
        words: ['Po', 'mom', 'mišljenju,', 'tiskana', 'knjiga', 'ima', 'dušu.'],
        accept: [
          'Tiskana knjiga, po mom mišljenju, ima dušu.',
          'Tiskana knjiga ima dušu, po mom mišljenju.',
          'Tiskana knjiga po mom mišljenju ima dušu.',
        ],
        explanation:
          'Po mom mišljenju, tiskana knjiga ima dušu. The phrase for your own view usually opens the sentence, but it may also follow the subject or come last.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Na', 'putovanju', 'e-knjige', 'čitam', 'na', 'čitatelju.'],
        wrong: 5,
        answer: 'čitaču',
        hint: 'One of the two similar words is a person, the other a device. You cannot read books ON a person.',
        explanation:
          'Na putovanju e-knjige čitam na čitaču. — the device is a čitač; a čitatelj is the person who reads.',
      },
      {
        type: 'transform',
        q: 'You did not buy it — you only have it for three weeks. Change the verb and the place.',
        from: 'Kupio sam ovu knjigu u knjižari.',
        answer: 'Posudio sam ovu knjigu u knjižnici.',
        accept: [
          'Ovu sam knjigu posudio u knjižnici.',
          'Ovu knjigu sam posudio u knjižnici.',
          'Posudio sam ovu knjigu iz knjižnice.',
          'Ovu sam knjigu posudio iz knjižnice.',
          'Ovu knjigu sam posudio iz knjižnice.',
        ],
        hint: 'A book you have to give back comes from the other of the two places, and from another verb.',
        explanation:
          'Posudio sam ovu knjigu u knjižnici. — you borrow (posuditi) in a knjižnica; you buy in a knjižara.',
      },
      5,
      {
        type: 'listen',
        audio:
          'Sajam knjige u Puli održava se svake godine, a ove sam godine ondje upoznao svoju omiljenu spisateljicu.',
        q: 'What happened at the fair this year?',
        options: [
          'The speaker bought his favorite novel there',
          'The fair was not held this year',
          'The speaker met his favorite author there',
          'The speaker’s favorite author opened a bookstore in Pula',
        ],
        correct: 2,
        explanation:
          'održava se svake godine — it is held every year. ove sam godine ondje upoznao svoju omiljenu spisateljicu — this year I met my favorite (woman) writer there.',
      },
      {
        type: 'dictate',
        audio: 'Čitaonica je otvorena do osam navečer.',
        answer: 'Čitaonica je otvorena do osam navečer.',
        hint: 'Six words: "The reading room is open until eight in the evening."',
        explanation:
          'Čitaonica je otvorena do osam navečer. — čitaonica, the reading room, is feminine, so otvorena; like čitač and čitatelj it is built on čitati.',
      },
    ],
  },

  // ── Reading Croatian literature ────────────────────────────────────────────
  'literature-canon': {
    text: {
      kind: 'dialogue',
      title: 'Prva prava knjiga',
      lines: [
        {
          who: 'Tom',
          hr: 'Dobar dan. Učim hrvatski i htio bih napokon pročitati pravu knjigu. Mislio sam početi s Krležom.',
          en: 'Good afternoon. I am learning Croatian and I would finally like to read a real book. I was thinking of starting with Krleža.',
        },
        {
          who: 'Knjižničarka',
          hr: 'Krleža je velik pisac, ali ne bih Vam ga preporučila za početak: rečenice su mu duge, a jezik zahtjevan. Počnite radije s Pričama iz davnine Ivane Brlić-Mažuranić.',
          en: 'Krleža is a great writer, but I would not recommend him to you for a start: his sentences are long and his language is demanding. Start instead with Tales of Long Ago by Ivana Brlić-Mažuranić.',
        },
        {
          who: 'Tom',
          hr: 'Bajke? Nisu li to knjige za djecu?',
          en: 'Fairy tales? Aren’t those books for children?',
        },
        {
          who: 'Knjižničarka',
          hr: 'Čitaju ih i djeca i odrasli. Svaka je priča kratka, a jezik je bogat, ali jasan.',
          en: 'Both children and adults read them. Every story is short, and the language is rich but clear.',
        },
        {
          who: 'Tom',
          hr: 'A o čemu govore?',
          en: 'And what are they about?',
        },
        {
          who: 'Knjižničarka',
          hr: 'Radnja je uvijek jednostavna, ali likovi su sve samo ne jednostavni. Zato se o tim pričama može razgovarati sa svakim Hrvatom.',
          en: 'The plot is always simple, but the characters are anything but simple. That is why you can talk about these stories with any Croat.',
        },
        {
          who: 'Tom',
          hr: 'A nešto suvremeno? Volio bih čitati i o današnjem životu.',
          en: 'And something contemporary? I would like to read about life today as well.',
        },
        {
          who: 'Knjižničarka',
          hr: 'Onda uzmite i roman koji je napisao Miro Gavran. Piše tako da ga razumije svaki čitatelj, a radnja Vas vuče od prve stranice.',
          en: 'Then take a novel written by Miro Gavran as well. He writes in such a way that every reader understands him, and the plot pulls you along from the first page.',
        },
        {
          who: 'Tom',
          hr: 'Moram li pritom stalno gledati u rječnik?',
          en: 'Do I have to keep looking in the dictionary while I read?',
        },
        {
          who: 'Knjižničarka',
          hr: 'Radije ne. Pročitajte stranicu bez zaustavljanja, a onda potražite tri-četiri riječi koje su Vam doista trebale. A Krleža neka Vas pričeka na vrhu planine.',
          en: 'Better not. Read a page without stopping, and then look up the three or four words that you really needed. And let Krleža wait for you at the top of the mountain.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which book does the librarian recommend first, and why?',
          options: [
            'A novel by Krleža, because everyone names him',
            'A dictionary, because Tom will need it on every page',
            'Tales of Long Ago, because each story is short and the language is clear',
            'A children’s picture book, because it has almost no text',
          ],
          correct: 2,
          hint: 'Tom is surprised by her choice: he thinks such books are only for children.',
          explanation:
            'Priče iz davnine: svaka je priča kratka, a jezik je bogat, ali jasan — and adults read them too.',
        },
        {
          q: 'The librarian says of Krleža: "velik pisac, ali ne bih Vam ga preporučila za početak". What is her view of him?',
          options: [
            'He is overrated and not worth reading',
            'He is a great writer, but too demanding for a first book — he should come later',
            'He writes only for children',
            'He is easy, but boring',
          ],
          correct: 1,
          hint: 'Think of her last sentence: where is Krleža supposed to wait for Tom?',
          explanation:
            'She respects him (velik pisac), but his long sentences and demanding language make him the top of the mountain, not the first step.',
        },
        {
          type: 'type',
          q: 'Now you. A month later Tom reports on the novel — and avoids the false friend "karakter": Najviše mi se svidio glavni ____. (the main person in the story)',
          answer: 'lik',
          hint: 'The librarian uses this short masculine noun in the plural when she says who is "anything but simple".',
          explanation:
            'Najviše mi se svidio glavni lik. — a person in a story is a lik (plural likovi). karakter means someone’s personality.',
        },
        {
          type: 'transform',
          q: 'The librarian is polite with Tom. Give the same advice to a close friend (ti).',
          from: 'Počnite s Pričama iz davnine.',
          answer: 'Počni s Pričama iz davnine.',
          accept: ['Ti počni s Pričama iz davnine.'],
          hint: 'The polite command is the plural one. Take away what makes it plural.',
          explanation:
            'Počni s Pričama iz davnine. — the ti imperative is the Vi form without -te: počnite → počni. It is perfective, because the advice is about one single start.',
        },
        {
          type: 'transform',
          q: 'You like both, but not equally. Say that you like the original MORE THAN the translation.',
          from: 'Volim original i prijevod.',
          answer: 'Više volim original nego prijevod.',
          accept: [
            'Original volim više nego prijevod.',
            'Više volim original od prijevoda.',
            'Volim original više nego prijevod.',
          ],
          hint: 'The comparative of "puno" goes with the verb, and the word for "than" simply repeats the case of the first thing.',
          explanation:
            'Više volim original nego prijevod. — više + voljeti, and after nego the second noun stays in the same case as the first (the accusative).',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'sort',
        q: 'A good first book in Croatian, or one to keep for later?',
        groups: ['Start here', 'Keep for later'],
        items: [
          { hr: 'Priče iz davnine', group: 0 },
          { hr: 'Povratak Filipa Latinovicza', group: 1 },
          { hr: 'Miro Gavran: romani', group: 0 },
          { hr: 'Gospoda Glembajevi', group: 1 },
          { hr: 'Slavenka Drakulić: eseji', group: 0 },
          { hr: 'Judita', group: 1 },
        ],
        explanation:
          'Brlić-Mažuranić, Gavran and Drakulić write clearly and are good places to start. Krleža’s two famous works and Marulić’s epic of 1501 are the summit — better after some easier reading.',
      },
      5,
      1,
      {
        type: 'match',
        q: 'Match each word to its description.',
        pairs: [
          ['radnja', 'what happens in a story'],
          ['pisac', 'the person who wrote the book'],
          ['prijevod', 'the same book in another language'],
          ['drama', 'a text written for the theater'],
          ['pjesma', 'a short text in verse — or something you sing'],
        ],
        explanation:
          'radnja is the plot, pisac the writer, prijevod a translation, drama a play, and pjesma both a poem and a song.',
      },
      6,
      {
        type: 'tf',
        q: 'Judita, the first great epic poem in Croatian, was written by Miroslav Krleža.',
        answer: false,
        hint: 'The epic is from the year 1501. Krleža is a writer of the twentieth century.',
        explanation:
          'False. Judita is the work of Marko Marulić of Split, the "father of Croatian literature"; it was finished in 1501 and printed in 1521.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The plot takes place in Zagreb in the thirties."',
        words: ['Radnja', 'se', 'događa', 'u', 'Zagrebu', 'tridesetih', 'godina.'],
        accept: [
          'Radnja se tridesetih godina događa u Zagrebu.',
          'Radnja se događa tridesetih godina u Zagrebu.',
          'Tridesetih godina radnja se događa u Zagrebu.',
          'Tridesetih se godina radnja događa u Zagrebu.',
          'U Zagrebu se radnja događa tridesetih godina.',
          'Radnja se u Zagrebu događa tridesetih godina.',
        ],
        explanation:
          'Radnja se događa u Zagrebu tridesetih godina. The time — "in the thirties" — is a bare genitive, with no preposition.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ova', 'je', 'drama', 'napisan', 'prije', 'sto', 'godina.'],
        wrong: 3,
        answer: 'napisana',
        hint: 'This noun ends in -a and behaves like žena. Which word in the sentence does not yet agree with it?',
        explanation:
          'Ova je drama napisana prije sto godina. — drama is feminine, so the participle is feminine too, like ova.',
      },
      2,
      {
        type: 'transform',
        q: 'Join the two sentences into one with the right form of "koji".',
        from: 'Čitam roman. Preporučila mi ga je prijateljica.',
        answer: 'Čitam roman koji mi je preporučila prijateljica.',
        accept: ['Čitam roman koji mi je prijateljica preporučila.'],
        hint: 'The relative pronoun takes over the job of the short pronoun for "it", so that one disappears; the remaining clitics follow the relative at once.',
        explanation:
          'Čitam roman koji mi je preporučila prijateljica. — koji replaces ga (accusative, a thing, masculine), and mi je come straight after it.',
      },
      0,
      {
        type: 'listen',
        audio: 'Prijevod je dobar, ali u originalu likovi zvuče prirodnije.',
        q: 'What does the speaker think?',
        options: [
          'The translation is bad and should not be read',
          'The translation is better than the original',
          'The translation is good, but the characters sound more natural in the original',
          'The original is too difficult to understand',
        ],
        correct: 2,
        explanation:
          'Prijevod je dobar — the translation is good. ali u originalu likovi zvuče prirodnije — but in the original the characters sound more natural.',
      },
      {
        type: 'dictate',
        audio: 'Glavni lik mi je jako zanimljiv.',
        answer: 'Glavni lik mi je jako zanimljiv.',
        accept: ['Glavni mi je lik jako zanimljiv.'],
        hint: 'Six words: "I find the main character very interesting."',
        explanation:
          'Glavni lik mi je jako zanimljiv. — lik is the word for a character in a story; the short words mi je follow the first phrase.',
      },
    ],
  },
};
