// ─── B2 lessons in class order — Units 7–8 (lessons 31–40) ───────────────────
// Same shape and rules as the A1, A2 and B1 class files (a1class/, a2class/, b1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1, the B2 lessons before each lesson, and the lesson itself
// have taught. Existing typed items open their mix (or sit before anything that
// prints their answer), because most answers here are short forms — sebi, bismo,
// budem — that any later exercise on the same point has to print.
// "ako bih / ako biste" + conditional is standard and is never marked wrong; "bi"
// for every person is colloquial and is never the single error of a fix item.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely.

export const CLASS_B2_U07_08 = {
  // ══ UNIT 7 ═════════════════════════════════════════════════════════════════

  // ── sebe, sebi, sobom ──────────────────────────────────────────────────────
  'reflexive-sebe': {
    text: {
      kind: 'dialogue',
      title: 'Malo vremena za sebe',
      lines: [
        {
          who: 'Iva',
          hr: 'Petra, izgledaš umorno. Kad si zadnji put učinila nešto samo za sebe?',
          en: 'Petra, you look tired. When did you last do something just for yourself?',
        },
        {
          who: 'Petra',
          hr: 'Iskreno, ne sjećam se. Cijeli se dan brinem o drugima, a navečer nemam snage ni pogledati se u ogledalo.',
          en: 'Honestly, I don’t remember. All day I take care of other people, and in the evening I don’t even have the strength to look at myself in the mirror.',
        },
        {
          who: 'Iva',
          hr: 'To nije dobro. Tko ne misli na sebe, na kraju nema što dati ni drugima.',
          en: 'That is not good. Anyone who doesn’t think of themselves ends up with nothing to give to others either.',
        },
        {
          who: 'Petra',
          hr: 'Lako je tebi govoriti. Ti si sebi prošli mjesec priuštila vikend u toplicama, a ja sam si jedva kupila novu torbu.',
          en: 'That’s easy for you to say. Last month you treated yourself to a weekend at a spa, and I barely managed to buy myself a new bag.',
        },
        {
          who: 'Iva',
          hr: 'I nije mi žao! Ponijela sam sa sobom samo knjigu i dva dana bila sama sa sobom.',
          en: 'And I’m not sorry! I took only a book with me and spent two days alone with myself.',
        },
        {
          who: 'Petra',
          hr: 'A djeca? Jesu li se snašla bez tebe?',
          en: 'And the kids? Did they manage without you?',
        },
        {
          who: 'Iva',
          hr: 'Naravno. Dogovorila su se među sobom tko će kuhati, a tko prati suđe.',
          en: 'Of course. They agreed among themselves who would cook and who would wash the dishes.',
        },
        {
          who: 'Petra',
          hr: 'Moj bi šef bio izvan sebe kad mu ne bih odgovorila na poruku u subotu.',
          en: 'My boss would be beside himself if I didn’t answer a message of his on a Saturday.',
        },
        {
          who: 'Iva',
          hr: 'Onda je vrijeme da se zapitaš radiš li za njega ili za sebe. Ovaj vikend ostavi mobitel kod kuće.',
          en: 'Then it is time to ask yourself whether you work for him or for yourself. This weekend, leave your phone at home.',
        },
        {
          who: 'Petra',
          hr: 'Imaš pravo. Dugo sam samoj sebi govorila da nemam vremena — a zapravo ga nisam htjela naći.',
          en: 'You’re right. For a long time I kept telling myself that I had no time — when in fact I didn’t want to find it.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Iva do for herself last month, and how did her children cope?',
          options: [
            'She bought a new bag; the children stayed with their grandmother',
            'She spent a weekend at a spa; the children divided the housework among themselves',
            'She went to the coast with her boss; the children cooked for her',
            'She took the children to a spa; they read books for two days',
          ],
          correct: 1,
          hint: 'Iva took one thing along and was away for two days. At home, somebody cooked and somebody did the dishes.',
          explanation:
            'Iva treated herself to a weekend at a spa with nothing but a book. The children agreed among themselves who would cook and who would wash the dishes. The new bag is Petra’s.',
        },
        {
          q: 'Iva asks whether Petra works "za njega ili za sebe". Both pronouns come after the same preposition. Who does each one point to?',
          options: [
            'Both point to the boss — the second one only adds emphasis',
            'The first points to Petra’s husband, the second to Iva',
            'The first points to another person (the boss); the second points back to the subject of "radiš" — Petra',
            'The first is masculine and the second feminine, so they are the boss and Iva',
          ],
          correct: 2,
          hint: 'One of the two pronouns can only ever look back at the subject of its own clause. The subject here is hidden in the verb ending.',
          explanation:
            'njega is an ordinary personal pronoun: somebody else, here the boss. The reflexive pronoun always points back to the subject of its clause — radiš, so "you", Petra. It has no gender and no person of its own.',
        },
        {
          type: 'type',
          q: 'Now you. Petra’s boss never finds fault with his own work: On je uvijek zadovoljan ____.',
          answer: 'sobom',
          accept: ['samim sobom'],
          hint: 'The person he is pleased with is the subject himself. zadovoljan takes the instrumental, with no preposition.',
          explanation:
            'On je uvijek zadovoljan sobom. — the one who is pleased and the one he is pleased with are the same person, so the pronoun is reflexive; zadovoljan takes the instrumental.',
        },
        {
          type: 'transform',
          q: 'Iva bought HIM a book. Now say that she bought the book for HERSELF.',
          from: 'Iva je njemu kupila knjigu.',
          answer: 'Iva je sebi kupila knjigu.',
          accept: [
            'Iva je kupila sebi knjigu.',
            'Iva je kupila knjigu sebi.',
            'Iva si je kupila knjigu.',
            'Sebi je Iva kupila knjigu.',
            'Iva je knjigu kupila sebi.',
            'Iva je sebi knjigu kupila.',
            'Iva je knjigu sebi kupila.',
            'Sebi je kupila knjigu.',
            'Kupila je sebi knjigu.',
            'Kupila si je knjigu.',
          ],
          hint: 'The person who receives is now the same as the subject, so the personal pronoun gives way to the reflexive one — in the same case, the dative.',
          explanation:
            'Iva je sebi kupila knjigu. — njemu is somebody else; when the receiver is the subject herself, Croatian uses the reflexive dative (long sebi, or short si before je).',
        },
        {
          type: 'transform',
          q: 'Petra takes care of other people. Now say that she takes care of HERSELF.',
          from: 'Petra se brine o drugima.',
          answer: 'Petra se brine o sebi.',
          accept: ['Petra se o sebi brine.', 'Ona se brine o sebi.', 'Petra brine o sebi.'],
          hint: 'The se of this verb stays where it is — it is part of the verb. Only the word after the preposition changes.',
          explanation:
            'Petra se brine o sebi. — two different jobs in one sentence: the first se belongs to the verb brinuti se, and the long form after o really means "herself".',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: 'In "Bojim se pasa", the word se means "myself", so it can be swapped for its long form to add emphasis.',
        answer: false,
        hint: 'Ask whether the verb exists without this little word. Can you "bojati" somebody else?',
        explanation:
          'False. In bojati se the little word is simply part of the verb and means nothing on its own, so there is nothing to emphasize. Only where it truly means "oneself" (umivati se, gledati se) can a long form take its place.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "He bought himself a new car."',
        words: ['Kupio', 'si', 'je', 'novi', 'auto.'],
        accept: ['Novi si je auto kupio.', 'Novi auto si je kupio.'],
        explanation:
          'Kupio si je novi auto. The two short words stand together in second place, and the pronoun comes before je.',
      },
      10,
      3,
      11,
      {
        type: 'sort',
        q: 'Who is it for or about — the subject of the sentence, or somebody else?',
        groups: ['The subject himself or herself', 'Another person'],
        items: [
          { hr: 'Ana je sebi skuhala čaj.', group: 0 },
          { hr: 'Ana joj je skuhala čaj.', group: 1 },
          { hr: 'Marko govori o sebi.', group: 0 },
          { hr: 'Marko govori o njemu.', group: 1 },
          { hr: 'Ponesi knjigu sa sobom.', group: 0 },
          { hr: 'Idi u kino s njima.', group: 1 },
        ],
        explanation:
          'sebi and sobom always point back to the subject (Ana, Marko, ti). joj, njemu and njima are personal pronouns: they name somebody other than the subject.',
      },
      6,
      {
        type: 'fix',
        q: 'The sentence should mean: "Ivan bought HER flowers." One word is wrong. Tap it and write the right pronoun.',
        words: ['Ivan', 'je', 'sebi', 'kupio', 'cvijeće.'],
        wrong: 2,
        answer: 'njoj',
        hint: 'The flowers go to another person, a woman — so the reflexive pronoun is the wrong choice. You need a long dative form, because it stands in a stressed position.',
        explanation:
          'Ivan je njoj kupio cvijeće. — the reflexive would mean that he bought the flowers for himself. For another person Croatian uses the personal pronoun.',
      },
      5,
      {
        type: 'match',
        q: 'Fixed phrases with the reflexive pronoun. Match each to its meaning.',
        pairs: [
          ['biti izvan sebe', 'to be beside oneself with anger or joy'],
          ['doći k sebi', 'to come to, to recover'],
          ['među sobom', 'among themselves'],
          ['samo po sebi', 'in itself'],
          ['misliti samo na sebe', 'to be selfish'],
        ],
        explanation:
          'In each phrase the preposition decides the case: izvan + genitive, k + dative, među + instrumental, po + locative, na + accusative.',
      },
      {
        type: 'transform',
        q: 'Mia made HIM a sandwich. Now say that she made one for herself — use the SHORT form.',
        from: 'Mia mu je napravila sendvič.',
        answer: 'Mia si je napravila sendvič.',
        accept: [
          'Mia je sebi napravila sendvič.',
          'Mia je napravila sebi sendvič.',
          'Mia je napravila sendvič sebi.',
        ],
        hint: 'The short reflexive dative takes exactly the slot the other short pronoun had: second place, before je.',
        explanation:
          'Mia si je napravila sendvič. — si is the short dative of the reflexive pronoun. Like mu, it stands in the cluster of short words, before je.',
      },
      7,
      {
        type: 'listen',
        audio: 'Luka je bratu za rođendan kupio sat, a sebi nije kupio ništa.',
        q: 'Who got what?',
        options: [
          'Luka got a watch from his brother',
          'The brother got a watch; Luka bought nothing for himself',
          'Luka bought a watch for himself and nothing for his brother',
          'Both brothers got a watch',
        ],
        correct: 1,
        explanation:
          'bratu … kupio sat — the watch is for the brother. sebi nije kupio ništa — for himself (the subject, Luka) he bought nothing.',
      },
      {
        type: 'dictate',
        audio: 'Napravi si čaj i odmori se.',
        answer: 'Napravi si čaj i odmori se.',
        hint: 'Six words: "Make yourself some tea and rest."',
        explanation:
          'Napravi si čaj i odmori se. — both short forms in one sentence: si is the dative (tea for yourself), and se belongs to the verb odmoriti se.',
      },
    ],
  },

  // ── Passive participles as adjectives ──────────────────────────────────────
  'participial-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'Obnovljen stan u staroj zgradi',
      lines: [
        {
          who: 'Agentica',
          hr: 'Dobar dan, gospodine Bariću. Izvolite, vrata su otključana.',
          en: 'Hello, Mr. Barić. Come in, the door is unlocked.',
        },
        {
          who: 'Dino',
          hr: 'Hvala. U oglasu piše da je stan potpuno obnovljen. Je li to točno?',
          en: 'Thank you. The ad says the apartment is completely renovated. Is that right?',
        },
        {
          who: 'Agentica',
          hr: 'Jest. Kupaonica je obnovljena prošle godine, a prozori su zamijenjeni prije dva mjeseca.',
          en: 'It is. The bathroom was renovated last year, and the windows were replaced two months ago.',
        },
        {
          who: 'Dino',
          hr: 'Kuhinja mi se sviđa, ali vidim da je ovaj ormarić oštećen.',
          en: 'I like the kitchen, but I see that this cabinet is damaged.',
        },
        {
          who: 'Agentica',
          hr: 'Imate pravo. Bit će popravljen prije nego što se uselite — to je već dogovoreno s vlasnikom.',
          en: 'You’re right. It will be repaired before you move in — that has already been agreed with the owner.',
        },
        {
          who: 'Dino',
          hr: 'A zgrada? Izgleda prilično staro.',
          en: 'And the building? It looks rather old.',
        },
        {
          who: 'Agentica',
          hr: 'Sagrađena je 1930., ali je krov nedavno promijenjen, a i fasada je svježe obojena.',
          en: 'It was built in 1930, but the roof was changed recently, and the facade is freshly painted too.',
        },
        {
          who: 'Dino',
          hr: 'Jesu li režije uključene u cijenu?',
          en: 'Are the utilities included in the price?',
        },
        {
          who: 'Agentica',
          hr: 'Nisu, ali svi su dosadašnji računi plaćeni, a namještaj koji vidite ostaje u stanu.',
          en: 'They are not, but all the bills so far have been paid, and the furniture you see stays in the apartment.',
        },
        {
          who: 'Dino',
          hr: 'Dobro. Za lijepo uređen stan u poznatoj četvrti cijena nije loša. Javit ću Vam se sutra.',
          en: 'All right. For a nicely decorated apartment in a well-known neighborhood, the price is not bad. I will get back to you tomorrow.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is wrong in the kitchen, and what will be done about it?',
          options: [
            'A window is broken; Dino has to replace it himself',
            'A cabinet is damaged; it will be repaired before Dino moves in',
            'The furniture is old; the owner is taking it away',
            'The bills are unpaid; they will be added to the price',
          ],
          correct: 1,
          hint: 'Dino likes the kitchen but notices one piece of furniture. The agent has already spoken to the owner.',
          explanation:
            'Ormarić je oštećen, and he will be popravljen before Dino moves in — that is agreed with the owner. The windows are new and the bills are paid.',
        },
        {
          q: 'Dino reads that the apartment is "obnovljen"; the agent says the bathroom is "obnovljena". It is the same word. Why two endings?',
          options: [
            'Because the bathroom was renovated earlier than the apartment',
            'Because the agent is a woman and Dino is a man',
            'Because the participle is an adjective: it takes the gender of the noun it describes',
            'Because the first is in a written ad and the second is spoken',
          ],
          correct: 2,
          hint: 'Look at the two nouns: stan and kupaonica. What differs between them?',
          explanation:
            'A passive participle behaves like any adjective. stan is masculine, so the participle has no ending; kupaonica is feminine, so it takes -a. The speaker’s own gender plays no part.',
        },
        {
          type: 'type',
          q: 'Now you. The agent shows the bedroom: I zidovi su svježe ____. (obojiti)',
          answer: 'obojeni',
          hint: 'Build the participle the way the agent did for the facade, then make it agree with zidovi — masculine plural.',
          explanation:
            'Zidovi su svježe obojeni. — obojiti gives obojen, and with a masculine plural noun the ending is -i.',
        },
        {
          type: 'transform',
          q: 'You do not know who did it. Say only what happened to the bike: begin with "Bicikl…"',
          from: 'Netko je ukrao bicikl.',
          answer: 'Bicikl je ukraden.',
          accept: ['Bicikl je bio ukraden.', 'Bicikl mi je ukraden.'],
          hint: 'ukrasti forms its participle in -en on the stem you hear in the present (ukradem), and bicikl is masculine.',
          explanation:
            'Bicikl je ukraden. — the thing affected becomes the subject, and the participle with biti says what was done to it: ukrasti → ukraden.',
        },
        {
          type: 'type',
          q: 'Dino tells a friend about his new home: Živim u potpuno ____ stanu. (obnoviti)',
          answer: 'obnovljenom',
          hint: 'The participle is already in the dialogue; here it stands after u for a place, so it needs the masculine locative ending of an adjective.',
          explanation:
            'Živim u potpuno obnovljenom stanu. — the participle declines like an adjective: u + the locative, masculine singular -om.',
        },
      ],
    },
    mix: [
      4,
      0,
      {
        type: 'sort',
        q: 'Which ending does the participle of each verb take?',
        groups: ['-n, like napisan', '-en or -jen, like otvoren', '-t, like uzet'],
        items: [
          { hr: 'pročitati', group: 0 },
          { hr: 'kupiti', group: 1 },
          { hr: 'početi', group: 2 },
          { hr: 'poslati', group: 0 },
          { hr: 'sagraditi', group: 1 },
          { hr: 'zauzeti', group: 2 },
          { hr: 'zaključati', group: 0 },
          { hr: 'izgubiti', group: 1 },
        ],
        explanation:
          'Verbs in -ati take -n: pročitan, poslan, zaključan. Verbs in -iti take -en or -jen, with softening: kupljen, sagrađen, izgubljen. A small group takes -t: počet, zauzet.',
      },
      6,
      {
        type: 'tf',
        q: 'A man who says "Rodio sam u Splitu" has said, correctly, that he was born in Split.',
        answer: false,
        hint: 'Who does the giving birth — the speaker, or his mother? Croatian needs the form that says something was done TO him.',
        explanation:
          'False. English "born" is a passive, and so is the Croatian: Rođen sam u Splitu. (With se it also works: Rodio sam se u Splitu.) The bare active past of roditi would mean that he himself gave birth.',
      },
      7,
      {
        type: 'match',
        q: 'Finish each sentence. Only one ending agrees with each subject.',
        pairs: [
          ['Ključevi su', 'izgubljeni.'],
          ['Juha je', 'skuhana.'],
          ['Pismo je', 'poslano.'],
          ['Bicikl je', 'popravljen.'],
          ['Karte su', 'kupljene.'],
        ],
        explanation:
          'The participle agrees like an adjective: masculine plural -i (ključevi), feminine singular -a (juha), neuter singular -o (pismo), masculine singular with no ending (bicikl), feminine plural -e (karte).',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "The lost keys were found in the car."',
        words: ['Izgubljeni', 'ključevi', 'pronađeni', 'su', 'u', 'autu.'],
        accept: [
          'Izgubljeni su ključevi pronađeni u autu.',
          'Izgubljeni ključevi su pronađeni u autu.',
          'U autu su pronađeni izgubljeni ključevi.',
          'Izgubljeni ključevi u autu su pronađeni.',
        ],
        explanation:
          'Izgubljeni ključevi pronađeni su u autu. Two participles: one works as an adjective before its noun, the other builds the sentence with su.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Večerali', 'smo', 'u', 'lijepo', 'uređen', 'restoranu.'],
        wrong: 4,
        answer: 'uređenom',
        hint: 'A participle before a noun is an adjective — it cannot stay in its dictionary form when the noun is in the locative.',
        explanation:
          'Večerali smo u lijepo uređenom restoranu. — u + the locative for a place, and the participle takes the same case as restoranu: -om.',
      },
      8,
      {
        type: 'transform',
        q: 'Say it in two words, with a participle before the noun: "… prozor".',
        from: 'prozor koji je netko razbio',
        answer: 'razbijen prozor',
        accept: ['razbijeni prozor'],
        hint: 'razbiti builds its participle in -jen; put it in front of the noun, in the masculine.',
        explanation:
          'razbijen prozor — a whole clause shrinks into one adjective. The long form razbijeni prozor is used when it is a particular window already spoken about.',
      },
      11,
      {
        type: 'listen',
        audio:
          'Muzej je zbog radova zatvoren do kraja svibnja, ali je kafić u prizemlju otvoren svaki dan.',
        q: 'What can you do there this month?',
        options: [
          'Visit the museum every day except Monday',
          'Have a coffee on the ground floor, but not visit the museum',
          'Nothing — the whole building is closed until the end of May',
          'Visit the museum, but the café is closed for construction',
        ],
        correct: 1,
        explanation:
          'Muzej je zatvoren do kraja svibnja — the museum is closed because of construction work. Kafić je otvoren svaki dan — the café on the ground floor is open every day.',
      },
      {
        type: 'dictate',
        audio: 'Vrata su bila zaključana.',
        answer: 'Vrata su bila zaključana.',
        hint: 'Four words: "The door was locked."',
        explanation:
          'Vrata su bila zaključana. — vrata is a neuter plural, so both bila and the participle end in -a.',
      },
    ],
  },

  // ── The passive ────────────────────────────────────────────────────────────
  'passive-voice': {
    text: {
      kind: 'text',
      title: 'Otvorena nova gradska knjižnica',
      lines: [
        {
          hr: 'Jučer je u središtu Rijeke svečano otvorena nova gradska knjižnica.',
          en: 'Yesterday the new city library was ceremonially opened in the center of Rijeka.',
        },
        {
          hr: 'Zgrada je sagrađena prije više od sto godina, a posljednje tri godine temeljito se obnavljala.',
          en: 'The building was built more than a hundred years ago, and for the last three years it was being thoroughly renovated.',
        },
        {
          hr: 'Radovi su plaćeni gradskim i europskim novcem.',
          en: 'The work was paid for with city and European money.',
        },
        {
          hr: 'U knjižnici se čuva više od tristo tisuća knjiga, a najstarije su tiskane u šesnaestom stoljeću.',
          en: 'More than three hundred thousand books are kept in the library, and the oldest were printed in the sixteenth century.',
        },
        {
          hr: 'Pod krovom je uređena velika čitaonica, u kojoj se organiziraju i predavanja i koncerti.',
          en: 'A large reading room has been set up under the roof, where both lectures and concerts are organized.',
        },
        {
          hr: 'Knjige se posuđuju besplatno, a članska iskaznica izdaje se odmah na ulazu.',
          en: 'Books are lent free of charge, and a membership card is issued right at the entrance.',
        },
        {
          hr: '„Ova je knjižnica građena za sve naše sugrađane, a ne samo za studente”, rekla je ravnateljica Marta Perić.',
          en: '“This library was built for all our fellow citizens, and not only for students,” said the director, Marta Perić.',
        },
        {
          hr: 'Knjižnica će biti otvorena svaki dan osim nedjelje, od osam do dvadeset sati.',
          en: 'The library will be open every day except Sunday, from 8 a.m. to 8 p.m.',
        },
        {
          hr: 'U zgradi se ne smije jesti, a mobiteli moraju biti utišani.',
          en: 'Eating is not allowed in the building, and cell phones must be silenced.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: when will the library be open, and what does it cost to borrow a book?',
          options: [
            'Every day including Sunday; a small fee for each book',
            'Only on weekdays; nothing for students',
            'Every day except Sunday; nothing',
            'Every day except Monday; the price of a membership card',
          ],
          correct: 2,
          hint: 'One day of the week is the exception, and one word in the text means "free of charge".',
          explanation:
            'Knjižnica će biti otvorena svaki dan osim nedjelje, and knjige se posuđuju besplatno — books are lent for free.',
        },
        {
          q: 'One sentence has "Knjige se posuđuju" and, right after it, "iskaznica izdaje se". Nobody is named as doing either. Why is the first verb plural and the second singular?',
          options: [
            'Because many librarians lend books, but only one issues cards',
            'Because the thing lent or issued is the subject, and the verb agrees with it',
            'Because the first action is repeated and the second happens once',
            'Because se always takes the plural at the start of a clause',
          ],
          correct: 1,
          hint: 'Find the nouns in the nominative: how many books, how many cards?',
          explanation:
            'In the se-passive the thing affected becomes the subject. knjige is plural, so the verb is plural; iskaznica is singular, so the verb is singular. The people who do the work are simply not mentioned.',
        },
        {
          type: 'type',
          q: 'Now you. The report goes on: Na svečanost su ____ svi građani. (pozvati)',
          answer: 'pozvani',
          hint: 'A verb in -ati builds its participle in -n; then it has to agree with građani.',
          explanation:
            'Na svečanost su pozvani svi građani. — pozvati → pozvan, and with a masculine plural subject: pozvani.',
        },
        {
          type: 'transform',
          q: 'A general truth — nobody in particular. Say it with the se-passive: begin with "U Hrvatskoj…"',
          from: 'U Hrvatskoj ljudi piju puno kave.',
          answer: 'U Hrvatskoj se pije puno kave.',
          accept: [
            'U Hrvatskoj pije se puno kave.',
            'Puno se kave pije u Hrvatskoj.',
            'Puno kave pije se u Hrvatskoj.',
            'Puno kave se pije u Hrvatskoj.',
          ],
          hint: 'The people disappear, the little reflexive word takes second place, and the verb is singular — it now goes with "a lot of coffee", not with "people".',
          explanation:
            'U Hrvatskoj se pije puno kave. — once ljudi is gone, the verb no longer agrees with it. With a quantity (puno kave) it stands in the singular.',
        },
        {
          type: 'transform',
          q: 'Say it without naming who did it, with biti + the participle: begin with "Zgrada…"',
          from: 'Grad je obnovio zgradu.',
          answer: 'Zgrada je obnovljena.',
          accept: ['Zgrada je bila obnovljena.'],
          hint: 'The object becomes the subject, so it moves into the nominative, and the participle agrees with it. Before -jen, a lip consonant such as v gains an l.',
          explanation:
            'Zgrada je obnovljena. — obnoviti → obnovljen, feminine singular to agree with zgrada. The city is left out: that is the point of the passive.',
        },
      ],
    },
    mix: [
      4,
      0,
      {
        type: 'sort',
        q: 'Does the subject DO the action, or is the action done TO it?',
        groups: ['Active — the subject does it', 'Passive — it is done to the subject'],
        items: [
          { hr: 'Ana je napisala pismo.', group: 0 },
          { hr: 'Pismo je napisano.', group: 1 },
          { hr: 'Susjed gradi kuću.', group: 0 },
          { hr: 'Kuća se gradi.', group: 1 },
          { hr: 'Policija je kaznila vozača.', group: 0 },
          { hr: 'Vozač je kažnjen.', group: 1 },
        ],
        explanation:
          'Ana, the neighbor and the police act — active. The letter, the house and the driver receive the action: biti + participle (napisano, kažnjen) or se + verb (se gradi).',
      },
      6,
      {
        type: 'tf',
        q: 'In the notice "Traže se konobari", the word konobari is the object of the verb.',
        answer: false,
        hint: 'Look at the ending of the noun and at the number of the verb. An object of tražiti would look different.',
        explanation:
          'False. In the se-passive the people wanted are the subject: konobari is nominative, and the verb is plural to agree with it. As an object it would be konobare.',
      },
      5,
      {
        type: 'match',
        q: 'Notices and ads. Match each one to its English meaning.',
        pairs: [
          ['Traži se kuhar.', 'Cook wanted.'],
          ['Iznajmljuju se sobe.', 'Rooms for rent.'],
          ['Ovdje se ne puši.', 'No smoking here.'],
          ['Govori se njemački.', 'German spoken.'],
          ['Zatvoreno zbog bolesti.', 'Closed due to illness.'],
        ],
        explanation:
          'Croatian notices love the se-passive, because nobody has to be named: se + a verb agreeing with the thing wanted, rented or spoken. Zatvoreno is a bare participle.',
      },
      3,
      {
        type: 'fix',
        q: 'The sign should mean: "Tickets for the concert are sold here." One word is wrong. Tap it.',
        words: ['Ovdje', 'se', 'prodaje', 'karte', 'za', 'koncert.'],
        wrong: 2,
        answer: 'prodaju',
        hint: 'What is sold is the subject of this sentence — and there is more than one of it.',
        explanation:
          'Ovdje se prodaju karte za koncert. — in the se-passive the thing sold is the subject, so the verb agrees with karte: plural.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "This church was built in the twelfth century."',
        words: ['Ova', 'crkva', 'sagrađena', 'je', 'u', 'dvanaestom', 'stoljeću.'],
        accept: [
          'Ova je crkva sagrađena u dvanaestom stoljeću.',
          'Ova crkva je sagrađena u dvanaestom stoljeću.',
          'U dvanaestom stoljeću sagrađena je ova crkva.',
          'U dvanaestom je stoljeću sagrađena ova crkva.',
          'Ova je crkva u dvanaestom stoljeću sagrađena.',
        ],
        explanation:
          'Ova crkva sagrađena je u dvanaestom stoljeću. biti + the participle, which agrees with crkva; the builders are not named.',
      },
      1,
      {
        type: 'transform',
        q: 'A notice on a workshop. Say it with the se-passive, so that nobody is named.',
        from: 'Ovdje popravljamo bicikle.',
        answer: 'Ovdje se popravljaju bicikli.',
        accept: [
          'Ovdje se bicikli popravljaju.',
          'Bicikli se popravljaju ovdje.',
          'Bicikli se ovdje popravljaju.',
        ],
        hint: 'Three things change: the reflexive word goes into second place, the thing repaired becomes the subject, and the verb agrees with it.',
        explanation:
          'Ovdje se popravljaju bicikli. — the object bicikle turns into the subject bicikli (nominative), and the verb follows it into the third person plural.',
      },
      10,
      {
        type: 'listen',
        audio: 'Utakmica je odgođena zbog kiše i igrat će se u srijedu.',
        q: 'What has happened to the game?',
        options: [
          'It was played in the rain on Wednesday',
          'It has been canceled for good because of the rain',
          'It has been postponed because of the rain and will be played on Wednesday',
          'It has been moved to another stadium',
        ],
        correct: 2,
        explanation:
          'je odgođena — it has been postponed (biti + participle). igrat će se u srijedu — it will be played on Wednesday (the se-passive in the future).',
      },
      {
        type: 'dictate',
        audio: 'Kuća je prodana prošli tjedan.',
        answer: 'Kuća je prodana prošli tjedan.',
        hint: 'Five words: "The house was sold last week."',
        explanation:
          'Kuća je prodana prošli tjedan. — prodati → prodan, feminine to agree with kuća. Who sold it is not said.',
      },
    ],
  },

  // ── Verbal nouns: čitanje, učenje, otkriće ─────────────────────────────────
  'verbal-nouns-intro': {
    text: {
      kind: 'text',
      title: 'Moja večer bez mobitela',
      lines: [
        {
          hr: 'Do prošle godine svaka je moja večer završavala isto: gledanjem u mobitel do ponoći.',
          en: 'Until last year every evening of mine ended the same way: with staring at my phone until midnight.',
        },
        {
          hr: 'Liječnica mi je rekla da je gledanje u ekran prije spavanja jedan od glavnih razloga lošeg sna.',
          en: 'My doctor told me that looking at a screen before going to sleep is one of the main reasons for poor sleep.',
        },
        {
          hr: 'Savjetovala mi je čitanje knjiga, slušanje tihe glazbe ili kratko pisanje dnevnika.',
          en: 'She recommended reading books, listening to quiet music or a little diary writing.',
        },
        {
          hr: 'Iskreno, mislio sam da je pisanje dnevnika gubljenje vremena.',
          en: 'Honestly, I thought that writing a diary was a waste of time.',
        },
        {
          hr: 'Ipak sam pokušao, i već nakon tjedan dana razmišljanje o poslu više me nije držalo budnim.',
          en: 'I tried anyway, and after just one week thinking about work no longer kept me awake.',
        },
        {
          hr: 'Danas ne mogu zamisliti večer bez čitanja: uz dobru knjigu zaspim za dvadeset minuta.',
          en: 'Today I cannot imagine an evening without reading: with a good book I fall asleep in twenty minutes.',
        },
        {
          hr: 'Promijenio sam i jutra: umjesto provjeravanja poruka u krevetu, odmah ustanem i odem na trčanje.',
          en: 'I have changed my mornings too: instead of checking messages in bed, I get up right away and go for a run.',
        },
        {
          hr: 'Redovito kretanje i manje sjedenja pred ekranom učinili su za moje zdravlje više nego bilo koji lijek.',
          en: 'Regular exercise and less sitting in front of a screen have done more for my health than any medicine.',
        },
        {
          hr: 'Moje je mišljenje jednostavno: mobitel nije problem, problem je naše pretjerano korištenje mobitela.',
          en: 'My opinion is simple: the phone is not the problem; the problem is our excessive use of the phone.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: which three things did the doctor recommend for the evening?',
          options: [
            'Running, cooking and going to bed before ten',
            'Reading books, listening to quiet music and writing a diary',
            'Watching a movie, drinking tea and a short walk',
            'Checking messages, reading the news and thinking about work',
          ],
          correct: 1,
          hint: 'All three are quiet activities, and none of them needs a screen. Running belongs to the mornings.',
          explanation:
            'Savjetovala mi je čitanje knjiga, slušanje tihe glazbe ili kratko pisanje dnevnika. Running came later, as the writer’s own change to his mornings.',
        },
        {
          q: 'The doctor recommends "čitanje knjiga". With the verb it would be "čitati knjige". Why does the noun change its ending?',
          options: [
            'Because after a verbal noun the direct object goes into the genitive — here the genitive plural',
            'Because the doctor is talking about one book only',
            'Because knjiga is the subject of the sentence',
            'Because every noun after savjetovati takes the nominative',
          ],
          correct: 0,
          hint: 'English does the same thing with a little word: "the reading OF books".',
          explanation:
            'The object of a verb is in the accusative (čitati knjige); once the verb becomes a noun, that object moves into the genitive: čitanje knjiga, pisanje dnevnika, korištenje mobitela.',
        },
        {
          type: 'type',
          q: 'Now you. The writer adds one more new habit: Počeo sam se baviti ____. (plivati)',
          answer: 'plivanjem',
          hint: 'First build the noun from the -ati verb, then put it into the case that baviti se asks for.',
          explanation:
            'Počeo sam se baviti plivanjem. — plivati → plivanje, and baviti se takes the instrumental: a neuter noun in -e adds -m.',
        },
        {
          type: 'transform',
          q: 'Make the activity the subject of the sentence. Begin with the word that says how it is done.',
          from: 'Zdravo je redovito vježbati.',
          answer: 'Redovito vježbanje je zdravo.',
          accept: [
            'Redovito je vježbanje zdravo.',
            'Redovito vježbanje zdravo je.',
            'Zdravo je redovito vježbanje.',
          ],
          hint: 'The infinitive becomes a neuter noun in -nje. The word before it then describes a noun — its form happens to stay the same.',
          explanation:
            'Redovito vježbanje je zdravo. — vježbati → vježbanje. redovito was an adverb with the verb; with the noun it is a neuter adjective, and so is zdravo.',
        },
        {
          type: 'transform',
          q: 'Name the activity and say how long it lasts: "… traje sat vremena." Mind the case of what is cooked.',
          from: 'Kuham večeru.',
          answer: 'Kuhanje večere traje sat vremena.',
          accept: ['Kuhanje večere traje sat.'],
          hint: 'The verb becomes a noun in -nje, and its object can no longer stay in the accusative.',
          explanation:
            'Kuhanje večere traje sat vremena. — kuhati → kuhanje, and the object večeru moves into the genitive: večere.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'Which ending does the verbal noun of each verb take?',
        groups: ['-anje', '-enje', '-će'],
        items: [
          { hr: 'trčati', group: 0 },
          { hr: 'govoriti', group: 1 },
          { hr: 'otkriti', group: 2 },
          { hr: 'gledati', group: 0 },
          { hr: 'pušiti', group: 1 },
          { hr: 'pokriti', group: 2 },
          { hr: 'crtati', group: 0 },
          { hr: 'graditi', group: 1 },
        ],
        explanation:
          'Verbs in -ati keep their a: trčanje, gledanje, crtanje. Verbs in -iti take -enje, some with softening: govorenje, pušenje, građenje. A few short verbs take -će: otkriće, pokriće.',
      },
      9,
      5,
      {
        type: 'tf',
        q: 'In "pomaganje starijima", the word starijima is in the genitive — like every object of a verbal noun.',
        answer: false,
        hint: 'Which case does pomagati take with the verb itself? Only one kind of object changes when the verb becomes a noun.',
        explanation:
          'False. Only a DIRECT object (accusative) moves into the genitive. pomagati takes the dative, and the dative stays: pomagati starijima → pomaganje starijima.',
      },
      10,
      {
        type: 'match',
        q: 'A preposition + a verbal noun. Match each phrase to its meaning.',
        pairs: [
          ['bez razmišljanja', 'without thinking'],
          ['za vrijeme putovanja', 'during the trip'],
          ['zbog pušenja', 'because of smoking'],
          ['umjesto čekanja', 'instead of waiting'],
          ['nakon dugog traženja', 'after a long search'],
        ],
        explanation:
          'Where English uses a preposition + "-ing", Croatian uses a preposition + the verbal noun in its case — here always the genitive in -a.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "My grandfather enjoys reading the newspaper in the garden."',
        words: ['Moj', 'djed', 'uživa', 'u', 'čitanju', 'novina', 'u', 'vrtu.'],
        accept: [
          'Moj djed u vrtu uživa u čitanju novina.',
          'U vrtu moj djed uživa u čitanju novina.',
          'Moj djed uživa u vrtu u čitanju novina.',
        ],
        explanation:
          'Moj djed uživa u čitanju novina u vrtu. uživati u takes the locative of the verbal noun, and what is read stands in the genitive: novina.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Nakon', 'trčati', 'uvijek', 'popijem', 'čašu', 'vode.'],
        wrong: 1,
        answer: 'trčanja',
        hint: 'After a preposition Croatian cannot use an infinitive. It needs a noun, in the case the preposition asks for.',
        explanation:
          'Nakon trčanja uvijek popijem čašu vode. — nakon takes the genitive, so the infinitive gives way to the verbal noun trčanje in the genitive.',
      },
      7,
      {
        type: 'transform',
        q: 'Make it a sign for a wall: begin with the verbal noun.',
        from: 'Zabranjeno je parkirati.',
        answer: 'Parkiranje je zabranjeno.',
        accept: ['Zabranjeno je parkiranje.', 'Parkiranje zabranjeno.'],
        hint: 'An -ati verb keeps its a and adds -nje; the new noun is neuter, so the participle keeps its -o.',
        explanation:
          'Parkiranje je zabranjeno. — parkirati → parkiranje. Verbal nouns are neuter, which is why the participle ends in -o.',
      },
      4,
      {
        type: 'listen',
        audio: 'Nakon dugog razmišljanja odlučila sam prestati s pušenjem.',
        q: 'What has the speaker decided?',
        options: [
          'To think about it a little longer',
          'To start smoking again after a long break',
          'To stop smoking, after thinking about it for a long time',
          'To stop thinking about cigarettes',
        ],
        correct: 2,
        explanation:
          'nakon dugog razmišljanja — after long thinking (the genitive). prestati s pušenjem — to stop smoking: s + the instrumental of the verbal noun.',
      },
      {
        type: 'dictate',
        audio: 'Učenje jezika traži puno strpljenja.',
        answer: 'Učenje jezika traži puno strpljenja.',
        hint: 'Five words: "Learning a language takes a lot of patience."',
        explanation:
          'Učenje jezika traži puno strpljenja. — the verbal noun is the subject, and what is learned stands in the genitive: jezika.',
      },
    ],
  },

  // ── Studying in Croatia ────────────────────────────────────────────────────
  'higher-education': {
    text: {
      kind: 'dialogue',
      title: 'Kamo nakon mature?',
      lines: [
        {
          who: 'Josip',
          hr: 'Nika, čujem da si položila maturu. Čestitam! Znaš li već što ćeš upisati?',
          en: 'Nika, I hear you passed the matura. Congratulations! Do you already know what you are going to enroll in?',
        },
        {
          who: 'Nika',
          hr: 'Hvala! Željela bih studirati psihologiju u Zagrebu, ali ne znam hoće li mi rezultati biti dovoljno dobri za upis.',
          en: 'Thanks! I would like to study psychology in Zagreb, but I don’t know whether my results will be good enough for admission.',
        },
        {
          who: 'Josip',
          hr: 'Fakulteti ne gledaju samo maturu, nego i ocjene iz srednje škole, a tvoje su odlične.',
          en: 'The schools don’t look only at the matura but also at your high school grades, and yours are excellent.',
        },
        {
          who: 'Nika',
          hr: 'Više me brine novac. Stan u Zagrebu je skup, a moji roditelji ne mogu sve platiti.',
          en: 'I am more worried about money. An apartment in Zagreb is expensive, and my parents cannot pay for everything.',
        },
        {
          who: 'Josip',
          hr: 'Zato se prijavi za studentski dom i za stipendiju. Ja u domu plaćam četiri puta manje nego što bih plaćao za sobu u gradu.',
          en: 'That is why you should apply for a dorm and for a scholarship. In the dorm I pay four times less than I would pay for a room in town.',
        },
        {
          who: 'Nika',
          hr: 'A kako izgleda studij? Je li istina da cijelu godinu nemaš obveza, a onda u lipnju polažeš deset ispita?',
          en: 'And what is studying like? Is it true that you have no obligations all year and then take ten exams in June?',
        },
        {
          who: 'Josip',
          hr: 'To je bilo u vrijeme naših roditelja. Danas imaš predavanja i kolokvije cijeli semestar, i za svaki položeni ispit dobivaš ECTS bodove.',
          en: 'That was in our parents’ day. Today you have lectures and tests all semester, and for every exam you pass you get ECTS credits.',
        },
        {
          who: 'Nika',
          hr: 'Znači, moram učiti od prvog dana.',
          en: 'So I have to study from day one.',
        },
        {
          who: 'Josip',
          hr: 'Moraš. Ali nakon tri godine prijediplomskog studija već imaš diplomu, a onda sama odlučuješ hoćeš li upisati diplomski.',
          en: 'You do. But after three years of undergraduate study you already have a degree, and then you decide for yourself whether to enroll in the master’s program.',
        },
        {
          who: 'Nika',
          hr: 'Moja baka kaže da se uči cijeli život — ona je sa sedamdeset godina upisala tečaj engleskog!',
          en: 'My grandma says that you learn your whole life — at seventy she signed up for an English course!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what worries Nika most, and what does Josip tell her to do about it?',
          options: [
            'Her matura results; he tells her to take the exam again',
            'Money; he tells her to apply for a dorm and a scholarship',
            'The number of exams; he tells her to choose an easier program',
            'Living far from her parents; he tells her to study in her home town',
          ],
          correct: 1,
          hint: 'She says "Više me brine…". Josip’s answer is about where to live and who might pay.',
          explanation:
            'Više me brine novac — an apartment in Zagreb is expensive. Josip’s advice: prijavi se za studentski dom i za stipendiju.',
        },
        {
          q: 'Josip says Nika "je položila maturu", but Nika asks whether in June "polažeš deset ispita". Two verbs for one exam word in English. What is the difference?',
          options: [
            'položiti is for school exams, polagati for exams in college',
            'položiti is the formal verb, polagati the everyday one',
            'položiti means the exam is passed — a result; polagati means sitting it, with the result still open',
            'položiti is used about women, polagati about men',
          ],
          correct: 2,
          hint: 'It is an aspect pair. Which of the two can you congratulate somebody on?',
          explanation:
            'položiti is perfective: the exam is done and passed, which is why Josip says "Čestitam!". polagati is imperfective: you are taking exams, and nobody knows yet how they will go.',
        },
        {
          type: 'type',
          q: 'Now you. Three years, at sixty credits a year. Write the missing number as a word: Prijediplomski studij nosi sto ____ ECTS bodova.',
          answer: 'osamdeset',
          hint: 'Multiply the credits of one year by the number of years; the hundred is already written.',
          explanation:
            'Prijediplomski studij nosi sto osamdeset ECTS bodova. — three years of sixty credits each.',
        },
        {
          type: 'transform',
          q: 'Josip sat the exam yesterday — we do not know how it went. Now say that he PASSED it.',
          from: 'Josip je jučer polagao ispit.',
          answer: 'Josip je jučer položio ispit.',
          accept: [
            'Josip je položio ispit.',
            'Jučer je Josip položio ispit.',
            'Josip je ispit položio jučer.',
            'Josip je jučer ispit položio.',
          ],
          hint: 'Swap the verb for its perfective partner — the one Josip used when he congratulated Nika — in the masculine.',
          explanation:
            'Josip je jučer položio ispit. — the perfective verb reports the result: the exam is passed.',
        },
        {
          type: 'transform',
          q: 'Josip LIVES in the dorm. Nika is only moving there in the fall. Say it: begin with "Nika se u jesen seli…"',
          from: 'Josip živi u studentskom domu.',
          answer: 'Nika se u jesen seli u studentski dom.',
          accept: ['Nika se u jesen seli u dom.'],
          hint: 'Living is a place; moving is a direction — and a direction changes the case after u.',
          explanation:
            'Nika se u jesen seli u studentski dom. — a place takes u + the locative (u domu), a direction takes u + the accusative (u dom).',
        },
      ],
    },
    mix: [
      10,
      5,
      {
        type: 'sort',
        q: 'Is the exam only being taken, or is it already passed?',
        groups: ['Taking it — the result is open', 'Passed — there is a result'],
        items: [
          { hr: 'Sutra polažeš statistiku.', group: 0 },
          { hr: 'Položila sam sve ispite.', group: 1 },
          { hr: 'Polagao je vozački ispit tri puta.', group: 0 },
          { hr: 'Napokon je položio vozački ispit.', group: 1 },
          { hr: 'U lipnju polažemo maturu.', group: 0 },
          { hr: 'Jesi li položila kolokvij?', group: 1 },
        ],
        explanation:
          'polagati (polažeš, polagao, polažemo) is imperfective: sitting the exam. položiti (položila, položio) is perfective: the exam is passed.',
      },
      12,
      {
        type: 'tf',
        q: '"Studiram za ispit iz matematike" is the natural way to say that you are preparing for a math exam.',
        answer: false,
        hint: 'One of the two "study" verbs names your field at the university; the other is what you do at your desk the night before.',
        explanation:
          'False. studirati means to be a university student of a field: Studiram matematiku. Preparing for an exam is učiti: Učim za ispit iz matematike.',
      },
      9,
      {
        type: 'match',
        q: 'Student life. Match each word to its description.',
        pairs: [
          ['kolokvij', 'a test in the middle of the semester'],
          ['menza', 'the place where students eat cheaply'],
          ['stipendija', 'money a good student receives to help pay for studying'],
          ['državna matura', 'the national exam at the end of high school'],
          ['ispitni rok', 'the weeks in which exams are held'],
        ],
        explanation:
          'A kolokvij comes during the semester and the exams in an ispitni rok. The matura closes high school; a stipendija and the menza make student life affordable.',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "Lectures begin in October, and exams in February."',
        words: ['Predavanja', 'počinju', 'u', 'listopadu,', 'a', 'ispiti', 'u', 'veljači.'],
        accept: [
          'U listopadu počinju predavanja, a u veljači ispiti.',
          'U listopadu počinju predavanja, a ispiti u veljači.',
          'Predavanja počinju u listopadu, a u veljači ispiti.',
          'Predavanja u listopadu počinju, a ispiti u veljači.',
        ],
        explanation:
          'Predavanja počinju u listopadu, a ispiti u veljači. The second half does not repeat the verb; a sets the two halves against each other.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sutra', 'u', 'osam', 'položim', 'ispit', 'iz', 'povijesti.'],
        wrong: 3,
        answer: 'polažem',
        hint: 'Tomorrow at eight you will be sitting in the exam room; nobody knows the result yet. Which verb of the pair says that?',
        explanation:
          'Sutra u osam polažem ispit iz povijesti. — an arranged exam tomorrow is the present of the imperfective verb. The perfective present cannot stand alone in a main clause like this.',
      },
      3,
      {
        type: 'transform',
        q: 'Say the same with the verb for being a student of a field: begin with "Marko…"',
        from: 'Marko je student prava.',
        answer: 'Marko studira pravo.',
        accept: ['On studira pravo.'],
        hint: 'The verb comes from the same root as student, and the field becomes its direct object.',
        explanation:
          'Marko studira pravo. — studirati + the accusative names your field. With the noun student, the field stood in the genitive: student prava.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Moj brat studira medicinu u Rijeci, živi u studentskom domu i svaki dan ruča u menzi.',
        q: 'What do you learn about the brother?',
        options: [
          'He works as a doctor in Rijeka and eats at home',
          'He studies medicine in Rijeka, lives in a dorm and eats in the student cafeteria',
          'He is preparing for a medical exam in the dorm',
          'He studies in Rijeka but lives with his parents',
        ],
        correct: 1,
        explanation:
          'studira medicinu — medicine is his field. živi u studentskom domu — he lives in a dorm. ruča u menzi — he has lunch in the student cafeteria.',
      },
      {
        type: 'dictate',
        audio: 'Sutra imam važno predavanje.',
        answer: 'Sutra imam važno predavanje.',
        hint: 'Four words: "Tomorrow I have an important lecture."',
        explanation:
          'Sutra imam važno predavanje. — predavanje is a verbal noun from predavati, so it is neuter: važno.',
      },
    ],
  },

  // ══ UNIT 8 ═════════════════════════════════════════════════════════════════

  // ── The conditional, present and past ──────────────────────────────────────
  conditional: {
    text: {
      kind: 'dialogue',
      title: 'Što biste Vi učinili?',
      lines: [
        {
          who: 'Lucija',
          hr: 'Dobar dan, gospodine Matiću. Biste li imali minutu? Htjela bih Vas nešto pitati.',
          en: 'Hello, Mr. Matić. Would you have a minute? I would like to ask you something.',
        },
        {
          who: 'G. Matić',
          hr: 'Naravno, Lucija. Kako Vam mogu pomoći?',
          en: 'Of course, Lucija. How can I help you?',
        },
        {
          who: 'Lucija',
          hr: 'Ponuđen mi je posao u Beču. Kad biste Vi bili na mojem mjestu, biste li ga prihvatili?',
          en: 'I have been offered a job in Vienna. If you were in my place, would you accept it?',
        },
        {
          who: 'G. Matić',
          hr: 'Teško pitanje. U Vašim godinama ja bih otišao bez razmišljanja.',
          en: 'A hard question. At your age I would go without thinking twice.',
        },
        {
          who: 'Lucija',
          hr: 'Otišla bih i ja kad ne bih morala ostaviti roditelje same.',
          en: 'I would go too if I did not have to leave my parents on their own.',
        },
        {
          who: 'G. Matić',
          hr: 'Razumijem. Znate, meni su prije dvadeset godina nudili posao u Münchenu. Bio bih ga prihvatio, ali nam se upravo tada rodila kći.',
          en: 'I understand. You know, twenty years ago I was offered a job in Munich. I would have accepted it, but just then our daughter was born.',
        },
        {
          who: 'Lucija',
          hr: 'Je li Vam danas žao?',
          en: 'Are you sorry today?',
        },
        {
          who: 'G. Matić',
          hr: 'Ponekad se pitam kako bi mi izgledao život. Ali ne bih mijenjao ništa — ovdje sam bio sretan.',
          en: 'Sometimes I wonder what my life would look like. But I would not change anything — I have been happy here.',
        },
        {
          who: 'Lucija',
          hr: 'Hvala Vam na iskrenosti. Mogla bih pokušati na godinu dana, pa ako mi se ne svidi, vratit ću se.',
          en: 'Thank you for your honesty. I could try it for a year, and if I don’t like it, I will come back.',
        },
        {
          who: 'G. Matić',
          hr: 'To bi bilo najpametnije. A mi bismo Vas, naravno, rado primili natrag.',
          en: 'That would be the smartest thing. And we would, of course, gladly take you back.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why did Mr. Matić not take the job abroad twenty years ago?',
          options: [
            'The pay was too low',
            'He did not speak German',
            'His daughter was born just then',
            'His parents were ill',
          ],
          correct: 2,
          hint: 'Something happened in his family at exactly that time. The parents are Lucija’s worry, not his.',
          explanation:
            'Bio bih ga prihvatio, ali nam se upravo tada rodila kći. — he would have accepted, but his daughter was born.',
        },
        {
          q: 'About Vienna Mr. Matić says "ja bih otišao"; about Munich he says "Bio bih ga prihvatio". What does the extra "Bio" add?',
          options: [
            'It makes the sentence more polite',
            'It moves the unreal event into the past: it would have happened, but it did not',
            'It shows that he really did accept the job in the end',
            'Nothing — the two forms are always interchangeable',
          ],
          correct: 1,
          hint: 'One sentence imagines something now; the other looks back twenty years at a chance that is gone.',
          explanation:
            'The past conditional — the participle of biti + the conditional — is for something that would have happened in the past and did not. The plain conditional imagines something now or in general.',
        },
        {
          type: 'type',
          q: 'Now you. Lucija’s father, when she asks him the same question: Na tvojem mjestu ____ bih isto. (učiniti)',
          answer: 'učinio',
          accept: ['napravio'],
          hint: 'The conditional needs the l-participle of the verb, here agreeing with a man. The auxiliary is already in the sentence.',
          explanation:
            'Na tvojem mjestu učinio bih isto. — the conditional is the l-participle + bih, and the participle agrees with the speaker.',
        },
        {
          type: 'transform',
          q: 'Lucija WOULD GO — now. Say that she WOULD HAVE GONE back then, but did not: the past conditional.',
          from: 'Otišla bih u Beč.',
          answer: 'Bila bih otišla u Beč.',
          accept: ['Ja bih bila otišla u Beč.', 'U Beč bih bila otišla.', 'Bila bih u Beč otišla.'],
          hint: 'Add the participle of biti in first place, agreeing with a woman; the auxiliary keeps its second position.',
          explanation:
            'Bila bih otišla u Beč. — the past conditional adds the participle of biti, which agrees with the speaker just as the main participle does.',
        },
        {
          type: 'transform',
          q: 'Mr. Matić does not give orders. Turn this into polite advice to Lucija with the conditional of trebati — he says Vi to her.',
          from: 'Morate razgovarati s roditeljima.',
          answer: 'Trebali biste razgovarati s roditeljima.',
          accept: [
            'Vi biste trebali razgovarati s roditeljima.',
            'Trebali biste s roditeljima razgovarati.',
            'S roditeljima biste trebali razgovarati.',
          ],
          hint: 'With Vi the participle is plural even for one person, and the auxiliary takes its form for vi — in second place.',
          explanation:
            'Trebali biste razgovarati s roditeljima. — the conditional of trebati turns an order into advice. Polite Vi takes the plural participle and biste.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'tf',
        q: 'Somebody who says "Bio bih došao, ali nisam mogao" did come in the end.',
        answer: false,
        hint: 'The second half of the sentence tells you what really happened.',
        explanation:
          'False. The past conditional names something that would have happened and did not — he could not come, so he stayed away.',
      },
      4,
      {
        type: 'sort',
        q: 'Is it "would" — now or in general — or "would have", about a chance in the past that is gone?',
        groups: ['Would — now or in general', 'Would have — in the past, but it did not happen'],
        items: [
          { hr: 'Došao bih sutra.', group: 0 },
          { hr: 'Bio bih došao jučer.', group: 1 },
          { hr: 'Kupila bih taj stan.', group: 0 },
          { hr: 'Bila bih kupila taj stan.', group: 1 },
          { hr: 'Pomogli bi ti.', group: 0 },
          { hr: 'Bili bismo pobijedili.', group: 1 },
        ],
        explanation:
          'The plain conditional (participle + auxiliary) imagines something now or later. With an added bio / bila / bili it becomes the past conditional: it would have happened, and it did not.',
      },
      5,
      1,
      {
        type: 'order',
        q: 'Put the words in order: "I would never sell this house."',
        words: ['Nikad', 'ne', 'bih', 'prodao', 'ovu', 'kuću.'],
        accept: [
          'Ovu kuću nikad ne bih prodao.',
          'Nikad ovu kuću ne bih prodao.',
          'Ne bih nikad prodao ovu kuću.',
          'Ovu kuću ne bih nikad prodao.',
          'Ne bih ovu kuću nikad prodao.',
          'Ne bih prodao ovu kuću nikad.',
          'Nikad ne bih ovu kuću prodao.',
          'Ovu kuću ne bih prodao nikad.',
        ],
        explanation:
          'Nikad ne bih prodao ovu kuću. In a negative conditional ne stands right before the auxiliary, and the two can open a clause together.',
      },
      7,
      {
        type: 'match',
        q: 'Who would do what, and when? Match each sentence to its meaning.',
        pairs: [
          ['Stigla bih.', 'I would arrive.'],
          ['Bila bih stigla.', 'I would have arrived.'],
          ['Stigla bi.', 'She would arrive.'],
          ['Bile bismo stigle.', 'We would have arrived.'],
          ['Stigle biste.', 'You (several women) would arrive.'],
        ],
        explanation:
          'The auxiliary shows the person (bih — I, bi — she, bismo — we, biste — you), the participle shows gender and number, and an added bila / bile moves everything into the past.',
      },
      2,
      {
        type: 'fix',
        q: 'A woman is explaining why she did not phone. One word is wrong. Tap it.',
        words: ['Bila', 'bih', 'nazvao,', 'ali', 'sam', 'bila', 'zauzeta.'],
        wrong: 2,
        answer: 'nazvala',
        hint: 'In the past conditional there are two participles, and both agree with the speaker.',
        explanation:
          'Bila bih nazvala, ali sam bila zauzeta. — the speaker is a woman, so both participles are feminine: bila and nazvala.',
      },
      3,
      {
        type: 'transform',
        q: 'Imagine the opposite of the facts. Begin with "Kad bih…" (a man is speaking).',
        from: 'Nemam auto, zato ne putujem.',
        answer: 'Kad bih imao auto, putovao bih.',
        accept: [
          'Kad bih imao auto, ja bih putovao.',
          'Kad bih ja imao auto, putovao bih.',
          'Putovao bih kad bih imao auto.',
          'Kad bih imao auto, putovao bih više.',
        ],
        hint: 'Both halves take the conditional and both lose their negation. In the second half the participle comes first, so that the auxiliary does not open the clause.',
        explanation:
          'Kad bih imao auto, putovao bih. — an unreal condition: kad + conditional, and the conditional again in the main clause.',
      },
      11,
      {
        type: 'listen',
        audio: 'Bila bih došla na tvoj rođendan, ali sam morala raditi.',
        q: 'Did the speaker come to the birthday party?',
        options: [
          'Yes, right after work',
          'No — she wanted to, but she had to work',
          'She does not know yet; it depends on work',
          'No — she was not invited',
        ],
        correct: 1,
        explanation:
          'Bila bih došla — she would have come (the past conditional), but she had to work, so she did not.',
      },
      {
        type: 'dictate',
        audio: 'Volio bih živjeti na moru.',
        answer: 'Volio bih živjeti na moru.',
        hint: 'Five words: "I would love to live by the sea."',
        explanation:
          'Volio bih živjeti na moru. — a wish: the participle first, then the auxiliary in second place, then the infinitive.',
      },
    ],
  },

  // ── The conditional of past habits ─────────────────────────────────────────
  'iterative-conditional': {
    text: {
      kind: 'text',
      title: 'Ljeta kod djeda na Korčuli',
      lines: [
        {
          hr: 'Kad sam bila dijete, svako bismo ljeto provodili kod djeda i bake na Korčuli.',
          en: 'When I was a child, we would spend every summer at my grandparents’ on Korčula.',
        },
        {
          hr: 'Djed bi ustao prije sunca i otišao u ribolov, dok bismo mi još spavali.',
          en: 'Grandpa would get up before the sun and go fishing while we were still asleep.',
        },
        {
          hr: 'Kad bi se vratio, baka bi već čekala na vratima i pitala koliko je riba ulovio.',
          en: 'Whenever he came back, Grandma would already be waiting at the door and would ask how many fish he had caught.',
        },
        {
          hr: 'Ako ne bi ulovio ništa, rekao bi da je more toga dana bilo „lijeno”.',
          en: 'If he had caught nothing, he would say that the sea had been “lazy” that day.',
        },
        {
          hr: 'Poslije ručka svi bi odrasli spavali, a mi bismo tiho otišli na plažu.',
          en: 'After lunch all the grown-ups would sleep, and we would quietly go off to the beach.',
        },
        {
          hr: 'Navečer bi djed sjeo pod smokvu i govorio nam o svojim putovanjima brodom.',
          en: 'In the evening Grandpa would sit down under the fig tree and tell us about his voyages by ship.',
        },
        {
          hr: 'Kad god bi netko od nas zaspao prije kraja, on bi ga na rukama odnio u krevet.',
          en: 'Whenever one of us fell asleep before the end, he would carry that child to bed in his arms.',
        },
        {
          hr: 'Danas je kuća prodana, ali miris mora još me uvijek vraća u te večeri.',
          en: 'Today the house is sold, but the smell of the sea still takes me back to those evenings.',
        },
        {
          hr: 'Dala bih sve kad bih još jednom mogla čuti djedov glas.',
          en: 'I would give anything if I could hear Grandpa’s voice once more.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what did Grandpa say on the days when he came home without fish?',
          options: [
            'That the boat was too old',
            'That the sea had been "lazy" that day',
            'That Grandma had brought him bad luck',
            'That he had fallen asleep under the fig tree',
          ],
          correct: 1,
          hint: 'He blamed something that cannot answer back — and gave it a human quality.',
          explanation:
            'Ako ne bi ulovio ništa, rekao bi da je more toga dana bilo „lijeno”. — the sea was to blame, never the fisherman.',
        },
        {
          q: 'The last sentence — "Dala bih sve kad bih još jednom mogla čuti…" — has the same verb forms as the rest of the text. Is it one more childhood habit?',
          options: [
            'Yes — she used to give everything away as a child',
            'Yes — "kad" with these forms always means "whenever"',
            'No — it is a wish about now, something only imagined; nothing in it points to the past or to repetition',
            'No — it is a polite request to the reader',
          ],
          correct: 2,
          hint: 'Look for time words. The earlier sentences have "svako ljeto", "navečer", "kad god". What does this one have instead?',
          explanation:
            'The forms are the same, and the context decides. A story about the past with time words gives a habit. Here the writer is speaking about today, and "još jednom" means one single time that cannot come — a hypothesis.',
        },
        {
          type: 'type',
          q: 'Now you. One more memory from the same summers: Subotom bi nam baka ____ kolač. (ispeći)',
          answer: 'ispekla',
          hint: 'After the auxiliary comes the l-participle, agreeing with Grandma. The verb is of the peći type.',
          explanation:
            'Subotom bi nam baka ispekla kolač. — ispeći → ispekla. A perfective participle, because each Saturday’s cake is one complete event.',
        },
        {
          type: 'transform',
          q: 'The plain past states a habit. Now tell it the way a storyteller would — with the conditional.',
          from: 'Baka je nedjeljom pekla kruh.',
          answer: 'Baka bi nedjeljom pekla kruh.',
          accept: [
            'Nedjeljom bi baka pekla kruh.',
            'Baka bi pekla kruh nedjeljom.',
            'Nedjeljom bi baka kruh pekla.',
            'Baka bi kruh pekla nedjeljom.',
          ],
          hint: 'Only one small word changes: the auxiliary of the past gives way to the auxiliary of the conditional, in the same place.',
          explanation:
            'Baka bi nedjeljom pekla kruh. — the same habit, told with more warmth. The participle stays; je becomes the conditional auxiliary.',
        },
        {
          type: 'transform',
          q: 'It happened every time. Make one sentence with "Kad god…" and the conditional in both halves.',
          from: 'Djed je došao. Donio je čokoladu.',
          answer: 'Kad god bi djed došao, donio bi čokoladu.',
          accept: [
            'Kad god bi došao, djed bi donio čokoladu.',
            'Djed bi donio čokoladu kad god bi došao.',
            'Kad god bi djed došao, on bi donio čokoladu.',
            'Kad god bi djed došao, donio bi nam čokoladu.',
          ],
          hint: 'The auxiliary follows the two-word conjunction in the first half. In the second half the participle goes first, because the auxiliary cannot open a clause.',
          explanation:
            'Kad god bi djed došao, donio bi čokoladu. — kad god + conditional, and the conditional again in the main clause: a habit, unmistakably.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"Ljeti smo išli na more" and "Ljeti bismo išli na more" can describe the very same childhood summers.',
        answer: true,
        hint: 'One is the plain past of an imperfective verb. What is the other doing in a story about childhood?',
        explanation:
          'True. Both tell a past habit. The plain past simply states it; the conditional sounds like storytelling, often warm and nostalgic.',
      },
      10,
      {
        type: 'sort',
        q: 'Did it really happen, again and again — or is it only imagined?',
        groups: ['A habit — it happened many times', 'A hypothesis — it is only imagined'],
        items: [
          { hr: 'Kad sam bio mali, subotom bismo išli na tržnicu.', group: 0 },
          { hr: 'Kad bih sutra imao vremena, došao bih.', group: 1 },
          { hr: 'Svaki put kad bi zazvonio telefon, pas bi zalajao.', group: 0 },
          { hr: 'Kad bih imao novca, kupio bih brod.', group: 1 },
          { hr: 'Nekad bi cijelo selo dolazilo na svadbu.', group: 0 },
          { hr: 'Na tvom mjestu ne bih ništa rekao.', group: 1 },
        ],
        explanation:
          'Time words about the past — kad sam bio mali, svaki put, nekad — mark a habit. sutra, a condition that is not true (if I had money) and advice (in your place) mark a hypothesis.',
      },
      11,
      3,
      {
        type: 'order',
        q: 'Put the words in order: "Whenever Grandma called me, I would run home."',
        words: ['Kad', 'god', 'bi', 'me', 'baka', 'pozvala,', 'otrčao', 'bih', 'kući.'],
        accept: [
          'Kad god bi me pozvala baka, otrčao bih kući.',
          'Otrčao bih kući kad god bi me baka pozvala.',
          'Otrčao bih kući kad god bi me pozvala baka.',
          'Kad god bi me baka pozvala, kući bih otrčao.',
        ],
        explanation:
          'Kad god bi me baka pozvala, otrčao bih kući. The short words bi me follow kad god; in the main clause the participle opens and bih comes second.',
      },
      12,
      {
        type: 'match',
        q: 'Words that turn a sentence into a habit. Match each to its meaning.',
        pairs: [
          ['kad god', 'whenever'],
          ['nekad', 'in the old days'],
          ['svaki put', 'every time'],
          ['nedjeljom', 'on Sundays'],
          ['navečer', 'in the evening'],
        ],
        explanation:
          'With time words like these, the conditional is read as a repeated event in the past, not as "if".',
      },
      4,
      {
        type: 'transform',
        q: 'Say the same habit with the conditional instead of znati + the infinitive.',
        from: 'Djed je znao satima sjediti u vrtu.',
        answer: 'Djed bi satima sjedio u vrtu.',
        accept: [
          'Djed bi sjedio u vrtu satima.',
          'Djed bi u vrtu satima sjedio.',
          'Djed bi u vrtu sjedio satima.',
          'Satima bi djed sjedio u vrtu.',
          'Djed bi satima u vrtu sjedio.',
        ],
        hint: 'Both the past auxiliary and the participle of znati disappear; the infinitive turns into an l-participle after the conditional auxiliary.',
        explanation:
          'Djed bi satima sjedio u vrtu. — two ways to tell a habit: znao je + the infinitive in speech, or the conditional + the participle.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Kad', 'smo', 'bili', 'mali,', 'zimi', 'bismo', 'skijamo', 'svaki', 'vikend.'],
        wrong: 6,
        answer: 'skijali',
        hint: 'After the conditional auxiliary comes one particular verb form — and it is never a present-tense form.',
        explanation:
          'Kad smo bili mali, zimi bismo skijali svaki vikend. — the conditional is the auxiliary + the l-participle, here in the plural for mi.',
      },
      6,
      {
        type: 'listen',
        audio: 'Kad god bismo posjetili tetu u Osijeku, ona bi ispekla štrudlu od jabuka.',
        q: 'How often did the aunt bake the apple strudel?',
        options: [
          'Only once, on their first visit',
          'Every time they visited her',
          'Never — she would have baked it if they had come',
          'Only on Sundays',
        ],
        correct: 1,
        explanation:
          'Kad god + the conditional in both clauses is a habit: each visit to the aunt in Osijek meant one more strudel.',
      },
      {
        type: 'dictate',
        audio: 'Nedjeljom bismo ručali kod bake.',
        answer: 'Nedjeljom bismo ručali kod bake.',
        hint: 'Five words: "On Sundays we would have lunch at Grandma’s."',
        explanation:
          'Nedjeljom bismo ručali kod bake. — bismo is one word and takes second place; nedjeljom marks the habit.',
      },
    ],
  },

  // ── Building nouns: people, qualities, small and big ───────────────────────
  'word-formation-agents': {
    text: {
      kind: 'dialogue',
      title: 'Stara razredna fotografija',
      lines: [
        {
          who: 'Sanja',
          hr: 'Pogledaj ovu fotografiju! Ovo je naš razred, a ova stroga žena je naša učiteljica.',
          en: 'Look at this photo! This is our class, and this stern woman is our teacher.',
        },
        {
          who: 'Denis',
          hr: 'A tko je ovaj dečkić s velikim naočalama?',
          en: 'And who is this little boy with the big glasses?',
        },
        {
          who: 'Sanja',
          hr: 'To je Robert. Danas je poznat pisac, a tada je bio najtiši učenik u razredu.',
          en: 'That is Robert. Today he is a well-known writer, and back then he was the quietest student in the class.',
        },
        {
          who: 'Denis',
          hr: 'A ova djevojčica pokraj njega?',
          en: 'And this little girl next to him?',
        },
        {
          who: 'Sanja',
          hr: 'Vesna. Postala je vozačica tramvaja, a njezina sestra je pjevačica u kazalištu.',
          en: 'Vesna. She became a tram driver, and her sister is a singer at the theater.',
        },
        {
          who: 'Denis',
          hr: 'Zanimljivo. A ti si, vidim, i tada bila najviša — kakva visina za dijete od deset godina!',
          en: 'Interesting. And you, I see, were the tallest even then — what a height for a ten-year-old!',
        },
        {
          who: 'Sanja',
          hr: 'Nemoj me podsjećati. U djetinjstvu sam mrzila svoju visinu, a danas mi je draga.',
          en: 'Don’t remind me. In my childhood I hated my height, and today I am fond of it.',
        },
        {
          who: 'Denis',
          hr: 'Gdje je bila ta škola?',
          en: 'Where was that school?',
        },
        {
          who: 'Sanja',
          hr: 'U jednom gradiću kraj Karlovca. Imali smo kućicu s vrtom, a preko puta stajala je prava kućerina našeg ravnatelja.',
          en: 'In a little town near Karlovac. We had a little house with a garden, and across the street stood our principal’s place — a real monster of a house.',
        },
        {
          who: 'Denis',
          hr: 'Lijepe uspomene. Mladost brzo prođe, ali takva prijateljstva ostaju.',
          en: 'Nice memories. Youth passes quickly, but friendships like that remain.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what have Robert and Vesna become?',
          options: [
            'Robert is a teacher and Vesna is a singer',
            'Robert is a principal and Vesna is a writer',
            'Robert is a writer and Vesna is a tram driver',
            'Robert is a tram driver and Vesna is an actress',
          ],
          correct: 2,
          hint: 'The quietest boy now works with words; the girl next to him works in city traffic. The singer is somebody’s sister.',
          explanation:
            'Robert je poznat pisac; Vesna je postala vozačica tramvaja. It is Vesna’s sister who sings at the theater.',
        },
        {
          q: 'Sanja calls her family’s home a "kućica" and the principal’s home a "kućerina". She could have said "mala kuća" and "velika kuća". What do her words add?',
          options: [
            'Nothing — they are simply shorter',
            'They show that both houses were very old',
            'Feeling: the first is small and dear to her; the second is huge, said with amazement or a little mockery',
            'They show that the first house was rented and the second one owned',
          ],
          correct: 2,
          hint: 'One suffix makes things small and lovable. The other makes them big — and is never neutral.',
          explanation:
            'A diminutive (-ica) means small and usually dear. An augmentative (-erina) means big with an attitude: impressed, amused or mocking. For a plain description you would use an adjective.',
        },
        {
          type: 'type',
          q: 'Now you. Robert’s colleague Ana does the same job as he does — and the female form is irregular: Ana je poznata ____.',
          answer: 'spisateljica',
          accept: ['književnica', 'autorica'],
          hint: 'It is not built on the short masculine word in -ac, but on a longer one in -telj, plus the commonest female suffix.',
          explanation:
            'Ana je poznata spisateljica. — pisac has no regular female form; Croatian uses spisateljica (or književnica).',
        },
        {
          type: 'type',
          q: 'The teacher was strict, but what the children remember is her kindness: Pamtimo njezinu ____. (the noun from dobar)',
          answer: 'dobrotu',
          hint: 'The suffix is -ota, and the fleeting a of the adjective drops. The noun is feminine, and here it is an object.',
          explanation:
            'Pamtimo njezinu dobrotu. — dobar → dobrota, a feminine noun; as the object of pamtiti it takes the accusative -u.',
        },
        {
          type: 'transform',
          q: 'Vesna’s sister is a singer. Now say the same about Vesna’s BROTHER.',
          from: 'Njezina sestra je pjevačica.',
          answer: 'Njezin brat je pjevač.',
          accept: ['Njezin je brat pjevač.', 'Njezin brat pjevač je.'],
          hint: 'Take the female suffix off the noun, and remember that the possessive has to agree with a masculine noun now.',
          explanation:
            'Njezin brat je pjevač. — pjevačica is pjevač + -ica. Take the suffix away and the man who sings remains.',
        },
      ],
    },
    mix: [
      9,
      0,
      {
        type: 'sort',
        q: 'What does each noun name — a person, a quality or state, or something small?',
        groups: ['A person', 'A quality or a state', 'Something small'],
        items: [
          { hr: 'gledatelj', group: 0 },
          { hr: 'mladost', group: 1 },
          { hr: 'gradić', group: 2 },
          { hr: 'kupac', group: 0 },
          { hr: 'siromaštvo', group: 1 },
          { hr: 'brodić', group: 2 },
          { hr: 'plivačica', group: 0 },
          { hr: 'toplina', group: 1 },
        ],
        explanation:
          '-telj, -ac and -ica name people: gledatelj, kupac, plivačica. -ost, -stvo and -ina name qualities and states: mladost, siromaštvo, toplina. -ić makes a masculine noun small: gradić, brodić.',
      },
      8,
      {
        type: 'tf',
        q: 'The word bratić is the diminutive of brat and means "little brother".',
        answer: false,
        hint: 'Some old diminutives have become separate words with a meaning of their own. This one names another relative.',
        explanation:
          'False. bratić looks like a diminutive, but it means a male cousin. A little brother is simply mlađi brat or mali brat.',
      },
      6,
      11,
      {
        type: 'match',
        q: 'Who or what is it? Match each word to its description.',
        pairs: [
          ['kućerina', 'a huge house — said with amazement or mockery'],
          ['pače', 'a young duck'],
          ['nositeljica', 'a woman who holds a title or leads a project'],
          ['lovac', 'a man who hunts'],
          ['nezaposlenost', 'the state of being without a job'],
        ],
        explanation:
          '-erina makes things big and never neutral; -e names a young animal; -telj + -ica gives a woman who does something; -ac a man who does it; -ost a state.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "In his youth my grandfather was a good swimmer."',
        words: ['U', 'mladosti', 'je', 'moj', 'djed', 'bio', 'dobar', 'plivač.'],
        accept: [
          'Moj djed je u mladosti bio dobar plivač.',
          'Moj je djed u mladosti bio dobar plivač.',
          'Moj djed bio je u mladosti dobar plivač.',
          'Moj je djed bio dobar plivač u mladosti.',
          'Moj djed je bio dobar plivač u mladosti.',
          'U mladosti je moj djed dobar plivač bio.',
        ],
        explanation:
          'U mladosti je moj djed bio dobar plivač. Two built nouns: mladost from mlad (a quality, feminine) and plivač from plivati (a person).',
      },
      10,
      {
        type: 'transform',
        q: 'Say the same about a woman: the subject becomes "Moja sestra", and the rest follows.',
        from: 'Moj brat je dobar učenik.',
        answer: 'Moja sestra je dobra učenica.',
        accept: ['Moja je sestra dobra učenica.', 'Moja sestra dobra je učenica.'],
        hint: 'In a noun in -ik the female suffix takes the place of the male one, and the adjective has to agree as well.',
        explanation:
          'Moja sestra je dobra učenica. — učenik → učenica: -ica takes the place of -ik. The adjective follows the noun into the feminine.',
      },
      4,
      {
        type: 'fix',
        q: 'The sentence should mean: "This is the new book by that writer." One word is wrong. Tap it.',
        words: ['Ovo', 'je', 'nova', 'knjiga', 'tog', 'pisaca.'],
        wrong: 5,
        answer: 'pisca',
        hint: 'One writer, in the genitive. In nouns of this type, the a before the last consonant appears in only a few forms.',
        explanation:
          'Ovo je nova knjiga tog pisca. — the a of -ac is fleeting: pisac, pisca, piscu. The form with the a back in is the genitive plural, "of the writers".',
      },
      3,
      {
        type: 'listen',
        audio: 'Moja sestrična je novinarka, a njezin muž je vozač autobusa.',
        q: 'What do the two of them do for a living?',
        options: [
          'She sells newspapers; he repairs buses',
          'She is a journalist; her husband is a bus driver',
          'She is a bus driver; her husband is a journalist',
          'They are both journalists',
        ],
        correct: 1,
        explanation:
          'novinarka — novinar + -ka, a woman journalist. vozač autobusa — voziti + -ač, the man who drives the bus.',
      },
      {
        type: 'dictate',
        audio: 'Pravo prijateljstvo traje cijeli život.',
        answer: 'Pravo prijateljstvo traje cijeli život.',
        hint: 'Five words: "True friendship lasts a lifetime."',
        explanation:
          'Pravo prijateljstvo traje cijeli život. — prijatelj + -stvo names the relationship; nouns in -stvo are neuter, so the adjective is pravo.',
      },
    ],
  },

  // ── The perfective present after kad, ako, čim, dok ne ─────────────────────
  'perfective-present': {
    text: {
      kind: 'dialogue',
      title: 'Kad dobijemo kredit',
      lines: [
        {
          who: 'Tomo',
          hr: 'Mirna, zvali su iz banke. Čim potpišemo ugovor, odobrit će nam kredit.',
          en: 'Mirna, the bank called. As soon as we sign the contract, they will approve our loan.',
        },
        {
          who: 'Mirna',
          hr: 'Napokon! A kad dobijemo novac, hoćemo li odmah kupiti stan?',
          en: 'Finally! And when we get the money, are we going to buy the apartment right away?',
        },
        {
          who: 'Tomo',
          hr: 'Nećemo dok ga još jednom ne pogledamo. Ako majstor nađe neki veći problem, tražit ćemo nižu cijenu.',
          en: 'Not until we have looked at it once more. If the contractor finds any bigger problem, we will ask for a lower price.',
        },
        {
          who: 'Mirna',
          hr: 'Slažem se. A što ako cijene stanova u međuvremenu porastu?',
          en: 'I agree. And what if apartment prices go up in the meantime?',
        },
        {
          who: 'Tomo',
          hr: 'Onda ćemo se morati brzo odlučiti. Ali kad jednom počnemo vraćati kredit, više nećemo plaćati najam.',
          en: 'Then we will have to decide quickly. But once we start repaying the loan, we will not be paying rent anymore.',
        },
        {
          who: 'Mirna',
          hr: 'Istina. Kad se preselimo, uštedjet ćemo barem dvjesto eura mjesečno.',
          en: 'True. When we move, we will save at least two hundred euros a month.',
        },
        {
          who: 'Tomo',
          hr: 'Samo nemoj ništa kupovati dok ne platimo prvu ratu!',
          en: 'Just don’t buy anything until we have paid the first installment!',
        },
        {
          who: 'Mirna',
          hr: 'Dobro, dobro. Ali čim je platimo, kupujem novi kauč.',
          en: 'Fine, fine. But as soon as we pay it, I am buying a new couch.',
        },
        {
          who: 'Tomo',
          hr: 'Dogovoreno. Kad budem imao slobodan dan, otići ću s tobom u trgovinu.',
          en: 'Deal. When I have a day off, I will go to the store with you.',
        },
        {
          who: 'Mirna',
          hr: 'Nazovi banku još danas — i javi mi čim nešto saznaš.',
          en: 'Call the bank today — and let me know as soon as you find out anything.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Tomo and Mirna want to do before they buy the apartment, and what happens if a problem turns up?',
          options: [
            'Sell their car; they will give up the loan',
            'Look at the apartment once more; they will ask for a lower price',
            'Buy a couch; they will look for another bank',
            'Pay the first installment; they will go on renting',
          ],
          correct: 1,
          hint: 'A contractor is coming along. What he finds may change one number.',
          explanation:
            'Nećemo dok ga još jednom ne pogledamo. Ako majstor nađe neki veći problem, tražit ćemo nižu cijenu.',
        },
        {
          q: 'Everywhere else the couple put a simple present after kad and čim. But Tomo says "Kad budem imao slobodan dan" — not "Kad imam". Why future II here?',
          options: [
            'Because he is speaking politely to his wife',
            'Because a day off is something uncertain',
            'Because imati is imperfective: for ONE future occasion it has no perfective present to use, so future II makes the meaning clear',
            'Because kad always takes future II, and the other sentences are colloquial',
          ],
          correct: 2,
          hint: 'Compare the verbs: potpisati, dobiti, platiti — and imati. What kind of verb is the odd one out?',
          explanation:
            'The simple present after kad points forward only when the verb is perfective. imati is imperfective — "kad imam" would sound like "whenever I have" — so one future occasion is marked with future II: kad budem imao.',
        },
        {
          type: 'type',
          q: 'Now you. Mirna promises her friends: Čim se ____, pozvat ćemo vas na večeru. (useliti se — mi)',
          answer: 'uselimo',
          hint: 'After čim, one future event takes the present tense of the perfective verb — here in the form for mi.',
          explanation:
            'Čim se uselimo, pozvat ćemo vas na večeru. — useliti se is perfective, so its present after čim points to the future; the main clause has future I.',
        },
        {
          type: 'transform',
          q: 'Future II is correct but a little formal. Say the same the everyday way.',
          from: 'Kad budeš prodao auto, kupi bicikl.',
          answer: 'Kad prodaš auto, kupi bicikl.',
          accept: ['Kupi bicikl kad prodaš auto.', 'Kad auto prodaš, kupi bicikl.'],
          hint: 'Two words shrink into one: drop the special form of biti and put the perfective verb itself into the present.',
          explanation:
            'Kad prodaš auto, kupi bicikl. — with a perfective verb, the present after kad means exactly what future II means, and it is the usual choice in speech.',
        },
        {
          type: 'transform',
          q: 'A parent is speaking. Make one sentence with "dok ne": begin with "Nećeš dobiti kolač…"',
          from: 'Prvo ćeš pojesti juhu. Tek onda dobivaš kolač.',
          answer: 'Nećeš dobiti kolač dok ne pojedeš juhu.',
          accept: ['Nećeš dobiti kolač dok juhu ne pojedeš.'],
          hint: 'After the conjunction for "until" comes the present of the perfective verb. Its ne is part of the conjunction, not a real negation.',
          explanation:
            'Nećeš dobiti kolač dok ne pojedeš juhu. — dok ne + the perfective present: "until you have eaten". pojesti → pojedeš.',
        },
      ],
    },
    mix: [
      8,
      9,
      {
        type: 'sort',
        q: 'Can this form say what somebody is doing RIGHT NOW?',
        groups: [
          'Yes — an imperfective present',
          'No — a perfective present, at home after kad, ako, čim…',
        ],
        items: [
          { hr: 'dolazim', group: 0 },
          { hr: 'dođem', group: 1 },
          { hr: 'plaćam', group: 0 },
          { hr: 'platim', group: 1 },
          { hr: 'čitam', group: 0 },
          { hr: 'pročitam', group: 1 },
          { hr: 'pišem', group: 0 },
          { hr: 'napišem', group: 1 },
        ],
        explanation:
          'A perfective verb sees the action as one finished whole, so its present cannot mean "in progress now". It lives mostly in clauses that point forward — kad dođem, ako platim, čim pročitam — and in habits and stories.',
      },
      {
        type: 'tf',
        q: 'Somebody who says "Neću otići dok ne stigneš" hopes that the other person will NOT arrive.',
        answer: false,
        hint: 'Read the two-word conjunction as one unit. What does it mean as a whole?',
        explanation:
          'False. dok ne means "until": I will not leave until you arrive. The ne belongs to the conjunction, and the clause is not negative in meaning.',
      },
      10,
      0,
      {
        type: 'match',
        q: 'One verb, five time frames. Match each sentence to its meaning.',
        pairs: [
          ['Kad stignem, javit ću se.', 'When I arrive, I will get in touch.'],
          ['Kad stižem kasno, uvijek se javim.', 'Whenever I arrive late, I always get in touch.'],
          ['Kad sam stigao, javio sam se.', 'When I arrived, I got in touch.'],
          ['Čim stignem, javit ću se.', 'As soon as I arrive, I will get in touch.'],
          ['Ne javljaj se dok ne stignem.', 'Do not get in touch until I arrive.'],
        ],
        explanation:
          'The perfective present after kad or čim points to one future event; the imperfective present after kad is a repeated one; the past tells what happened. dok ne is "until".',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "If it rains tomorrow, we will stay home."',
        words: ['Ako', 'sutra', 'padne', 'kiša,', 'ostat', 'ćemo', 'kod', 'kuće.'],
        accept: [
          'Ako padne kiša sutra, ostat ćemo kod kuće.',
          'Ako sutra kiša padne, ostat ćemo kod kuće.',
          'Ako kiša sutra padne, ostat ćemo kod kuće.',
          'Ostat ćemo kod kuće ako sutra padne kiša.',
          'Ostat ćemo kod kuće ako padne kiša sutra.',
          'Ostat ćemo kod kuće ako sutra kiša padne.',
        ],
        explanation:
          'Ako sutra padne kiša, ostat ćemo kod kuće. The condition takes the perfective present (padne), the main clause takes future I — written ostat ćemo, without the final i.',
      },
      2,
      {
        type: 'transform',
        q: 'Say the same with future II — a woman is speaking.',
        from: 'Kad naučim voziti, kupit ću auto.',
        answer: 'Kad budem naučila voziti, kupit ću auto.',
        accept: ['Kupit ću auto kad budem naučila voziti.'],
        hint: 'Future II is the special present of biti + the l-participle, which agrees with the speaker. The main clause does not change.',
        explanation:
          'Kad budem naučila voziti, kupit ću auto. — both versions are standard and mean the same; future II is a shade more formal.',
      },
      4,
      {
        type: 'fix',
        q: 'The sentence should mean: "When I buy the ticket, I will text you." One word is wrong. Tap it.',
        words: ['Kad', 'kupujem', 'kartu,', 'poslat', 'ću', 'ti', 'poruku.'],
        wrong: 1,
        answer: 'kupim',
        hint: 'It is one future purchase, finished before the message goes out — so the clause needs the perfective partner of this verb.',
        explanation:
          'Kad kupim kartu, poslat ću ti poruku. — one completed future event after kad takes the perfective present. The imperfective would mean "whenever I am buying".',
      },
      6,
      {
        type: 'listen',
        audio: 'Ne mogu ti sada pomoći, ali čim završim sastanak, doći ću do tebe.',
        q: 'When will the speaker come over?',
        options: [
          'Right now',
          'As soon as the meeting is over',
          'Before the meeting begins',
          'Not at all — there is no time today',
        ],
        correct: 1,
        explanation:
          'čim završim sastanak — as soon as I finish the meeting (the perfective present, pointing forward). doći ću — then I will come: future I in the main clause.',
      },
      {
        type: 'dictate',
        audio: 'Javi mi kad stigneš kući.',
        answer: 'Javi mi kad stigneš kući.',
        hint: 'Five words: "Let me know when you get home."',
        explanation:
          'Javi mi kad stigneš kući. — an imperative in the main clause, and the perfective present after kad for the future arrival.',
      },
    ],
  },

  // ── Business and the economy ───────────────────────────────────────────────
  'business-economy': {
    text: {
      kind: 'text',
      title: 'Dobra sezona, ali skupi stanovi',
      lines: [
        {
          hr: 'Hrvatsko gospodarstvo ove je godine poraslo za tri posto, objavio je jučer Državni zavod za statistiku.',
          en: 'The Croatian economy grew by three percent this year, the Croatian Bureau of Statistics announced yesterday.',
        },
        {
          hr: 'Glavni razlog rasta ponovno je turizam: sezona je bila najbolja u posljednjih deset godina.',
          en: 'The main reason for the growth is once again tourism: the season was the best in the last ten years.',
        },
        {
          hr: 'Hoteli i restorani na obali ostvarili su rekordnu dobit, a nezaposlenost je pala na pet posto.',
          en: 'Hotels and restaurants on the coast posted record profits, and unemployment fell to five percent.',
        },
        {
          hr: 'Ipak, ekonomisti upozoravaju da gospodarstvo previše ovisi o nekoliko ljetnih mjeseci.',
          en: 'Still, economists warn that the economy depends too much on a few summer months.',
        },
        {
          hr: '„Kad bi sezona jedne godine bila loša, cijeli bi državni proračun bio u problemima”, kaže ekonomistica Ivana Babić.',
          en: '“If the season were bad one year, the whole state budget would be in trouble,” says the economist Ivana Babić.',
        },
        {
          hr: 'Drugi je problem inflacija: cijene hrane porasle su za osam posto, pa su mnoge male tvrtke završile godinu s gubitkom.',
          en: 'The other problem is inflation: food prices rose by eight percent, so many small companies ended the year with a loss.',
        },
        {
          hr: 'Poduzetnici se žale i na visoke poreze i traže da vlada smanji porez na plaće.',
          en: 'Entrepreneurs are also complaining about high taxes and are asking the government to cut the tax on salaries.',
        },
        {
          hr: 'Na tržištu stanova potražnja je i dalje veća od ponude, zbog čega stanovi u Zagrebu i Splitu stalno poskupljuju.',
          en: 'On the housing market demand is still greater than supply, which is why apartments in Zagreb and Split keep getting more expensive.',
        },
        {
          hr: 'Dobra je vijest da izvoz raste brže od uvoza, osobito izvoz hrane i lijekova.',
          en: 'The good news is that exports are growing faster than imports, especially exports of food and medicines.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: by how much did the economy grow, and what happened to unemployment?',
          options: [
            'It grew by five percent; unemployment rose to three percent',
            'It grew by three percent; unemployment fell to five percent',
            'It grew by eight percent; unemployment stayed the same',
            'It grew by ten percent; unemployment fell by five percent',
          ],
          correct: 1,
          hint: 'Three numbers appear in the report: three, five and eight. The eight belongs to food prices.',
          explanation:
            'Gospodarstvo je poraslo za tri posto, a nezaposlenost je pala na pet posto. Eight percent is how much food prices went up.',
        },
        {
          q: 'It was a record year. Why does the economist Ivana Babić still sound worried?',
          options: [
            'Because tourists spent less money than last year',
            'Because exports are falling faster than imports',
            'Because so much depends on a few summer months that a single bad season would hit the whole state budget',
            'Because hotels on the coast ended the year with a loss',
          ],
          correct: 2,
          hint: 'Her sentence begins with "Kad bi…" — she is imagining a year that has not happened yet.',
          explanation:
            'The economy depends too much on tourism. Her unreal condition — if the season were bad one year — shows the risk: the whole budget would be in trouble.',
        },
        {
          type: 'type',
          q: 'Now you. A hotel and a bakery agree on bread deliveries for two years and put it in writing: Potpisali su ____ na dvije godine.',
          answer: 'ugovor',
          hint: 'The document that two sides sign. The noun comes from the same root as dogovoriti se.',
          explanation:
            'Potpisali su ugovor na dvije godine. — a contract. potpisati ugovor is the fixed phrase for signing one.',
        },
        {
          type: 'transform',
          q: 'The economy GREW by three percent. Now report that unemployment FELL by two percent.',
          from: 'Gospodarstvo je poraslo za tri posto.',
          answer: 'Nezaposlenost je pala za dva posto.',
          accept: ['Nezaposlenost je za dva posto pala.'],
          hint: 'The new subject is a feminine noun in -ost, so the participle changes its ending too. The preposition for the size of a change stays.',
          explanation:
            'Nezaposlenost je pala za dva posto. — nouns in -ost are feminine: pala. za + a number gives the size of a change.',
        },
        {
          type: 'transform',
          q: 'Demand is greater than supply. Turn the comparison around: start with supply.',
          from: 'Potražnja je veća od ponude.',
          answer: 'Ponuda je manja od potražnje.',
          accept: ['Ponuda je manja nego potražnja.'],
          hint: 'The two nouns swap places and cases — nominative for the new subject, genitive after od — and the adjective becomes its opposite.',
          explanation:
            'Ponuda je manja od potražnje. — after od the noun stands in the genitive: potražnja → potražnje.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'sort',
        q: 'A headline from the business pages: is it good news or bad news for a country?',
        groups: ['Good news', 'Bad news'],
        items: [
          { hr: 'Nezaposlenost pada.', group: 0 },
          { hr: 'Inflacija raste.', group: 1 },
          { hr: 'Izvoz raste.', group: 0 },
          { hr: 'Tvrtke posluju s gubitkom.', group: 1 },
          { hr: 'Plaće rastu brže od cijena.', group: 0 },
          { hr: 'Potražnja za našim proizvodima pada.', group: 1 },
        ],
        explanation:
          'Fewer people without work, more goods sold abroad and salaries that beat prices are good news. Rising prices, companies losing money and falling demand are not.',
      },
      4,
      1,
      {
        type: 'tf',
        q: 'An "ekonomičan automobil" is a car that matters a great deal to the national economy.',
        answer: false,
        hint: 'Two adjectives look alike here. One means "to do with the economy"; the other describes something that uses little.',
        explanation:
          'False. ekonomičan means economical, thrifty — a car that uses little fuel. "To do with the economy" is ekonomski: ekonomska kriza.',
      },
      6,
      {
        type: 'match',
        q: 'Words from the business pages. Match each to its description.',
        pairs: [
          ['gubitak', 'what a company has when it spends more than it earns'],
          ['uvoz', 'buying goods from other countries'],
          ['izvoz', 'selling goods to other countries'],
          ['poduzetnik', 'a person who starts and runs a business'],
          ['plaća', 'the money a worker receives every month'],
        ],
        explanation:
          'gubitak comes from gubiti, to lose. uvoz brings goods in (u-) and izvoz takes them out (iz-). A poduzetnik runs a business and pays each worker a plaća.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dobit', 'naše', 'tvrtke', 'lani', 'je', 'porastao', 'za', 'pet', 'posto.'],
        wrong: 5,
        answer: 'porasla',
        hint: 'Find the subject and check its gender. It ends in a consonant — but it is not masculine.',
        explanation:
          'Dobit naše tvrtke lani je porasla za pet posto. — dobit is a feminine noun that ends in a consonant, like noć or stvar, so the participle is feminine.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "We signed a contract with a large German company."',
        words: ['Potpisali', 'smo', 'ugovor', 's', 'velikom', 'njemačkom', 'tvrtkom.'],
        accept: [
          'S velikom njemačkom tvrtkom potpisali smo ugovor.',
          'S velikom smo njemačkom tvrtkom potpisali ugovor.',
          'Ugovor smo potpisali s velikom njemačkom tvrtkom.',
          'Potpisali smo s velikom njemačkom tvrtkom ugovor.',
        ],
        explanation:
          'Potpisali smo ugovor s velikom njemačkom tvrtkom. s + the instrumental for the partner: both adjectives and the noun end in -om.',
      },
      3,
      {
        type: 'transform',
        q: 'Last year inflation was four percent; now it is six. The sentence gives the CHANGE. Rewrite it so that it gives the LEVEL reached.',
        from: 'Inflacija je porasla za dva posto.',
        answer: 'Inflacija je porasla na šest posto.',
        accept: ['Inflacija je na šest posto porasla.', 'Inflacija je narasla na šest posto.'],
        hint: 'Two things change: the preposition, and the number — add the rise to where inflation started.',
        explanation:
          'Inflacija je porasla na šest posto. — za gives the size of a change (by two), na gives the level reached (to six).',
      },
      9,
      {
        type: 'listen',
        audio:
          'Tvrtka je prošle godine imala gubitak od dva milijuna eura, ali ove godine očekuje dobit.',
        q: 'How is the company doing?',
        options: [
          'It made two million euros last year and expects more this year',
          'It lost two million euros last year but expects to make money this year',
          'It has lost money two years in a row',
          'It made money last year but expects a loss this year',
        ],
        correct: 1,
        explanation:
          'imala je gubitak od dva milijuna — it had a loss of two million. ove godine očekuje dobit — this year it expects a profit.',
      },
      {
        type: 'dictate',
        audio: 'Izvoz raste brže od uvoza.',
        answer: 'Izvoz raste brže od uvoza.',
        hint: 'Five words: "Exports are growing faster than imports."',
        explanation:
          'Izvoz raste brže od uvoza. — a comparison with od + the genitive: uvoz → uvoza.',
      },
    ],
  },
};
