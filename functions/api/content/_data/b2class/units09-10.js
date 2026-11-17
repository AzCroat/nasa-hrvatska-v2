// ─── B2 lessons in class order — Units 9–10 (lessons 41–50) ──────────────────
// Same shape and rules as the A1, A2 and B1 class files (a1class/, a2class/, b1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1, the B2 lessons before each lesson, and the lesson itself
// have taught. Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed
// politely; the plural vi is written small. Typed answers ignore capitals.
// Existing typed items whose answer is a small connector or auxiliary (a, da, što,
// sam, ako) open their mix, so that nothing printed earlier gives the answer away.
// Where connectors are interchangeable (nego / već, iako / premda, da / kad bih)
// every fitting one is accepted.

export const CLASS_B2_U09_10 = {
  // ══ UNIT 9 ═════════════════════════════════════════════════════════════════

  // ── And, but, or, so: compound sentences ───────────────────────────────────
  'coordinate-clauses': {
    text: {
      kind: 'dialogue',
      title: 'Jakna ili kava?',
      lines: [
        {
          who: 'Iva',
          hr: 'Petra, pogledaj ovu jaknu! Lijepa je i topla, ali je preskupa.',
          en: 'Petra, look at this jacket! It’s nice and warm, but it’s far too expensive.',
        },
        {
          who: 'Petra',
          hr: 'Ne gledaj cijenu, nego kvalitetu. Ja sam prošle zime kupila jeftinu jaknu pa sam je nosila samo mjesec dana.',
          en: 'Don’t look at the price, but at the quality. Last winter I bought a cheap jacket and then wore it for just a month.',
        },
        {
          who: 'Iva',
          hr: 'Znam. Ti kupuješ rijetko, a ja stalno tražim popuste i na kraju potrošim više.',
          en: 'I know. You shop rarely, while I am always hunting for discounts and end up spending more.',
        },
        {
          who: 'Petra',
          hr: 'Onda je probaj pa ćeš vidjeti kako ti stoji.',
          en: 'Then try it on and you’ll see how it fits you.',
        },
        {
          who: 'Iva',
          hr: 'Dobro mi stoji, samo su rukavi malo dugi.',
          en: 'It fits me well, only the sleeves are a bit long.',
        },
        {
          who: 'Petra',
          hr: 'To se može popraviti. Pitala sam prodavačicu, a ona mi je rekla da popust traje do subote.',
          en: 'That can be fixed. I asked the saleswoman, and she told me the discount lasts until Saturday.',
        },
        {
          who: 'Iva',
          hr: 'Plaća mi stiže tek u ponedjeljak, stoga je ovaj tjedan ne mogu kupiti.',
          en: 'My pay doesn’t arrive until Monday, so I can’t buy it this week.',
        },
        {
          who: 'Petra',
          hr: 'Možeš je platiti na rate ili ti ja mogu posuditi novac.',
          en: 'You can pay for it in installments, or I can lend you the money.',
        },
        {
          who: 'Iva',
          hr: 'Hvala ti, ali ne volim ni rate ni dugove.',
          en: 'Thank you, but I like neither installments nor debts.',
        },
        {
          who: 'Petra',
          hr: 'Dobro. Onda danas nećemo kupiti jaknu, već ćemo otići na kavu!',
          en: 'All right. Then today we won’t buy a jacket — we’ll go for coffee instead!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does Iva not buy the jacket this week, and why does she turn down both of Petra’s solutions?',
          options: [
            'The sleeves are too long, and the saleswoman cannot fix them',
            'The discount ended on Saturday, and Petra has no money to lend',
            'Her pay arrives only on Monday, and she likes neither installments nor debts',
            'She already bought a cheap jacket last winter, and it is still good',
          ],
          correct: 2,
          hint: 'One reason is about a date. The other is about two things she dislikes equally.',
          explanation:
            'Plaća joj stiže tek u ponedjeljak, a ne voli ni rate ni dugove. The sleeves can be fixed, and the cheap jacket was Petra’s.',
        },
        {
          q: 'Petra says "a ona mi je rekla", not "a mi je ona rekla". Why do the short words "mi je" have to wait for "ona"?',
          options: [
            'Because a pronoun in the nominative always opens its clause',
            'Because "a" is too light to carry them, so they lean on the next full word',
            'Because "mi je" can never stand before a verb',
            'Because after a comma the short words always come third',
          ],
          correct: 1,
          hint: 'Compare "pa sam je nosila" in Petra’s earlier line: there the short words follow the conjunction at once.',
          explanation:
            'The short words must sit second in their clause, but i and a do not count as a first word. After pa, ali, nego and već they may follow directly: pa sam je nosila.',
        },
        {
          type: 'transform',
          q: 'Now you. That is not true: she is buying a scarf (šal). Deny the jacket and correct it in the same sentence.',
          from: 'Iva kupuje jaknu.',
          answer: 'Iva ne kupuje jaknu, nego šal.',
          accept: [
            'Iva ne kupuje jaknu, već šal.',
            'Iva ne kupuje jaknu nego šal.',
            'Iva ne kupuje jaknu već šal.',
            'Ne kupuje jaknu, nego šal.',
            'Ne kupuje jaknu, već šal.',
            'Iva ne kupuje jaknu, nego kupuje šal.',
          ],
          hint: 'After a negation, the correction is not introduced by the everyday word for "but". The scarf is still the object of the verb.',
          explanation:
            'Iva ne kupuje jaknu, nego šal. — nego (or već) corrects what was just denied. ali cannot do this job: it sets a second statement against the first; it does not replace what was denied.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one with the conjunction that means "and then" — it is strong enough to carry the short words.',
          from: 'Probala sam jaknu. Onda sam je platila.',
          answer: 'Probala sam jaknu pa sam je platila.',
          accept: [
            'Probala sam jaknu, pa sam je platila.',
            'Probala sam jaknu pa sam ju platila.',
            'Probala sam jaknu te sam je platila.',
          ],
          hint: 'A two-letter word. "Onda" is no longer needed, and the short words follow the conjunction directly.',
          explanation:
            'Probala sam jaknu pa sam je platila. — pa adds what came next, takes no comma here, and carries sam je right behind it.',
        },
        {
          type: 'transform',
          q: 'Deny both things in ONE sentence: "Petra wears neither hats nor caps."',
          from: 'Petra ne nosi šešire. Petra ne nosi kape.',
          answer: 'Petra ne nosi ni šešire ni kape.',
          accept: ['Petra ne nosi ni kape ni šešire.', 'Petra ne nosi niti šešire niti kape.'],
          hint: 'Repeat the same small negative word before each noun — and the verb keeps its own ne.',
          explanation:
            'Petra ne nosi ni šešire ni kape. — unlike English "neither … nor", Croatian negates the verb as well: ne nosi ni … ni.',
        },
      ],
    },
    mix: [
      11,
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("We called him, but he did not answer.")',
        words: ['Zvali', 'smo', 'ga,', 'a', 'se', 'nije', 'javio.'],
        wrong: 3,
        answer: 'ali',
        hint: 'Look at the short word se. Which conjunction is too light to have it right behind it?',
        explanation:
          'Zvali smo ga, ali se nije javio. — a short word cannot lean on a, but it can follow the heavier conjunction directly. And the meaning is a broken expectation, not two things side by side.',
      },
      10,
      {
        type: 'tf',
        q: 'In "Nismo išli autom, već vlakom", the speakers traveled by car.',
        answer: false,
        hint: 'What does the word after the comma do to the thing that was just denied?',
        explanation: 'False. već, like nego, corrects what was denied: not by car — by train.',
      },
      9,
      1,
      {
        type: 'sort',
        q: 'What does the conjunction do in each sentence?',
        groups: ['Adds', 'Contrasts or corrects', 'Draws a conclusion'],
        items: [
          { hr: 'Skuhala je ručak i pozvala goste.', group: 0 },
          { hr: 'Kasnimo, stoga uzmimo taksi.', group: 2 },
          { hr: 'Htio je doći, ali nije imao vremena.', group: 1 },
          { hr: 'Nije to rekao on, nego ona.', group: 1 },
          { hr: 'Potpisali su ugovor te počeli raditi.', group: 0 },
          { hr: 'Trgovina je zatvorena, dakle idemo kući.', group: 2 },
        ],
        explanation:
          'i and te add (no comma before them). ali breaks an expectation and nego corrects a denial. stoga and dakle draw a conclusion from the first clause.',
      },
      4,
      {
        type: 'match',
        q: 'Match each conjunction to the job it does.',
        pairs: [
          ['pa', 'adds what happened next'],
          ['nego', 'corrects something just denied'],
          ['ili', 'offers a choice'],
          ['jedino', 'names the one exception'],
          ['stoga', 'draws a conclusion'],
        ],
        explanation:
          'pa — and then; nego — but rather, only after a negation; ili — or; jedino (like samo) — except that; stoga — therefore.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I wanted to call you, but I forgot."',
        words: ['Htjela', 'sam', 'te', 'nazvati,', 'ali', 'sam', 'zaboravila.'],
        accept: ['Htjela sam te nazvati, ali zaboravila sam.'],
        explanation:
          'Htjela sam te nazvati, ali sam zaboravila. In the first clause the short words sam te sit second; after ali the auxiliary may follow at once.',
      },
      6,
      {
        type: 'transform',
        q: 'He does neither. Link the two denials with niti … niti — and watch what happens to "ne".',
        from: 'Ne puši. Ne pije.',
        answer: 'Niti puši, niti pije.',
        accept: [
          'Niti puši niti pije.',
          'On niti puši, niti pije.',
          'On niti puši niti pije.',
          'Ne puši niti pije.',
          'Ne puši, niti pije.',
        ],
        hint: 'This linking word is already negative. What does that mean for the negation each verb had?',
        explanation:
          'Niti puši, niti pije. — niti carries the negation itself, so the verbs stand without ne. Before a noun it is different: Ne pije ni kavu ni čaj.',
      },
      {
        type: 'listen',
        audio: 'Nismo kupili ni televizor ni računalo, nego smo novac ostavili za ljetovanje.',
        q: 'What did they do with the money?',
        options: [
          'They bought a television',
          'They bought a computer instead of a television',
          'They bought neither and kept the money for their summer vacation',
          'They bought both in installments',
        ],
        correct: 2,
        explanation:
          'ni televizor ni računalo — neither of the two; nego corrects the denial: they kept the money for the vacation instead.',
      },
      {
        type: 'dictate',
        audio: 'Ne kupujem često, ali kupujem pametno.',
        answer: 'Ne kupujem često, ali kupujem pametno.',
        hint: 'Six words: "I don’t shop often, but I shop wisely."',
        explanation:
          'Ne kupujem često, ali kupujem pametno. — a comma before the contrasting conjunction, and a full second statement after it.',
      },
    ],
  },

  // ── Complex sentences ──────────────────────────────────────────────────────
  'complex-sentences': {
    text: {
      kind: 'text',
      title: 'Novi stan',
      lines: [
        {
          hr: 'Draga Maja, napokon ti pišem iz stana u koji smo se uselili prošli tjedan.',
          en: 'Dear Maja, I am finally writing to you from the apartment we moved into last week.',
        },
        {
          hr: 'Čim smo otvorili vrata, znala sam da je to stan koji tražimo već godinu dana.',
          en: 'As soon as we opened the door, I knew it was the apartment we had been looking for for a year.',
        },
        {
          hr: 'Iako je manji od staroga, puno je svjetliji jer su prozori okrenuti prema jugu.',
          en: 'Although it is smaller than the old one, it is much brighter because the windows face south.',
        },
        {
          hr: 'Susjeda koja živi iznad nas donijela nam je kolač prije nego što smo unijeli sve kutije.',
          en: 'The neighbor who lives above us brought us a cake before we had carried in all the boxes.',
        },
        {
          hr: 'Rekla je da u zgradi stanuje već trideset godina i da poznaje sve stanare.',
          en: 'She said she had lived in the building for thirty years and knew all the tenants.',
        },
        {
          hr: 'Dok je Ivan sastavljao ormar, ja sam tražila trgovinu o kojoj nam je pričala.',
          en: 'While Ivan was putting the cabinet together, I looked for the store she had told us about.',
        },
        {
          hr: 'Pitala sam jednog gospodina zna li gdje je, a on je odgovorio da je odmah iza ugla.',
          en: 'I asked a gentleman whether he knew where it was, and he answered that it was right around the corner.',
        },
        {
          hr: 'Budući da još nemamo internet, pišem ti s mobitela.',
          en: 'Since we don’t have internet yet, I am writing to you from my phone.',
        },
        {
          hr: 'Kad sve uredimo, pozvat ćemo te na večeru.',
          en: 'When we have put everything in order, we will invite you to dinner.',
        },
        {
          hr: 'Javi mi kad budeš imala slobodan vikend. Grli te Ana',
          en: 'Let me know when you have a free weekend. Hugs, Ana',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the e-mail: what did the neighbor from upstairs do, and when?',
          options: [
            'She helped Ivan put the cabinet together on the first evening',
            'She brought a cake before they had even carried in all the boxes',
            'She showed Ana the store after everything was unpacked',
            'She invited them to dinner as soon as they opened the door',
          ],
          correct: 1,
          hint: 'It was something sweet, and it arrived very early in the move.',
          explanation:
            'Donijela im je kolač prije nego što su unijeli sve kutije. Ana found the store herself, and the dinner invitation is Ana’s plan for Maja.',
        },
        {
          q: 'The neighbor still lives in the building. Ana reports: "Rekla je da u zgradi stanuje već trideset godina." Why is "stanuje" in the present, although "rekla je" is in the past?',
          options: [
            'Because "već" can only be used with the present tense',
            'Because Ana is not sure that it is true',
            'Because Croatian reported speech keeps the tense of the original words',
            'Because "stanovati" has no past tense after "da"',
          ],
          correct: 2,
          hint: 'Think of what the neighbor actually said, word for word.',
          explanation:
            'She said: "Stanujem ovdje već trideset godina." Croatian keeps that present in the report; only the person changes. English shifts the tense ("had lived"), Croatian does not.',
        },
        {
          type: 'type',
          q: 'Now you. Ana has coffee with the neighbor every morning: To je susjeda s ____ pijem kavu svako jutro.',
          answer: 'kojom',
          hint: 'The pronoun agrees with susjeda, and "with" asks for the instrumental.',
          explanation:
            'To je susjeda s kojom pijem kavu. — feminine like susjeda, and instrumental because of s: the pronoun takes the case of its role in its own clause.',
        },
        {
          type: 'transform',
          q: 'Ivan says: "Ormar je gotov." Report his words, beginning with "Ivan je rekao…"',
          from: 'Ormar je gotov.',
          answer: 'Ivan je rekao da je ormar gotov.',
          accept: ['Ivan je rekao da je gotov ormar.'],
          hint: 'The linking word is compulsory, the tense stays exactly as Ivan said it, and the short word moves to second place in the new clause.',
          explanation:
            'Ivan je rekao da je ormar gotov. — da introduces what was said, the present is kept, and je comes right after da.',
        },
        {
          type: 'transform',
          q: 'Concede the first fact and keep the second: make one sentence that begins with the word for "although".',
          from: 'Stan je malen. Sviđa nam se.',
          answer: 'Iako je stan malen, sviđa nam se.',
          accept: [
            'Premda je stan malen, sviđa nam se.',
            'Iako je stan malen, ipak nam se sviđa.',
            'Premda je stan malen, ipak nam se sviđa.',
            'Iako je malen, stan nam se sviđa.',
            'Premda je malen, stan nam se sviđa.',
            'Iako je stan malen, nama se sviđa.',
          ],
          hint: 'Open with the conjunction of concession; the short word je comes right after it, and a comma closes the clause.',
          explanation:
            'Iako je stan malen, sviđa nam se. — the dependent clause comes first, so a comma follows it; je moves to second place behind iako.',
        },
      ],
    },
    mix: [
      4,
      7,
      {
        type: 'tf',
        q: 'In "Ovo je prijatelj kojem pišem", the pronoun "kojem" is in the dative because "prijatelj" is in the dative.',
        answer: false,
        hint: 'Find the case of prijatelj in its own clause. Then ask what pisati does to the person you write to.',
        explanation:
          'False. prijatelj is in the nominative. kojem takes its gender and number from prijatelj, but its case from its own clause: pisati nekome — the dative.',
      },
      6,
      5,
      {
        type: 'sort',
        q: 'What does the dependent clause tell you?',
        groups: ['When', 'Why', 'Which one — it describes a noun'],
        items: [
          { hr: 'Nazovi me čim stigneš.', group: 0 },
          { hr: 'Ostali smo doma jer je padao snijeg.', group: 1 },
          { hr: 'To je film koji sam ti preporučila.', group: 2 },
          { hr: 'Dok sam kuhala, djeca su spavala.', group: 0 },
          { hr: 'Budući da nema vlaka, idemo autobusom.', group: 1 },
          { hr: 'Gdje je ključ koji je bio na stolu?', group: 2 },
        ],
        explanation:
          'čim and dok give the time; jer and budući da give the reason; koji opens a relative clause, which says which film or which key is meant.',
      },
      9,
      {
        type: 'match',
        q: 'One small word changes the whole story. Match each sentence to what happened.',
        pairs: [
          ['Otišao je prije nego što sam stigla.', 'He was already gone when I got there.'],
          ['Otišao je nakon što sam stigla.', 'I got there first; then he left.'],
          ['Otišao je čim sam stigla.', 'He left the very moment I got there.'],
          ['Otišao je iako sam stigla.', 'My arriving did not stop him from leaving.'],
          ['Otišao je jer sam stigla.', 'My arriving was the reason he left.'],
        ],
        explanation:
          'prije nego što — before; nakon što — after; čim — as soon as; iako — although; jer — because. The main clause is the same every time.',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "The town I live in is small."',
        words: ['Grad', 'u', 'kojem', 'živim', 'je', 'malen.'],
        accept: ['Grad u kojem živim malen je.', 'Malen je grad u kojem živim.'],
        explanation:
          'Grad u kojem živim je malen. The preposition stands before the relative pronoun, and kojem is in the locative because of u — its role in its own clause.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("That is the colleague I helped yesterday.")',
        words: ['To', 'je', 'kolegica', 'koju', 'sam', 'jučer', 'pomogao.'],
        wrong: 3,
        answer: 'kojoj',
        hint: 'Which case does the verb at the end ask for? The pronoun has to supply it.',
        explanation:
          'To je kolegica kojoj sam jučer pomogao. — pomoći takes the dative (pomoći nekome), and the relative pronoun takes the case of its role inside its own clause.',
      },
      10,
      {
        type: 'transform',
        q: 'Make one sentence that begins with "Kad…": "When I get home, I will get in touch with you."',
        from: 'Doći ću kući. Onda ću ti se javiti.',
        answer: 'Kad dođem kući, javit ću ti se.',
        accept: [
          'Kada dođem kući, javit ću ti se.',
          'Kad dođem kući, javit ću se.',
          'Kad dođem kući, ja ću ti se javiti.',
        ],
        hint: 'After kad, a future event is in the perfective PRESENT; the future tense stays only in the main clause.',
        explanation:
          'Kad dođem kući, javit ću ti se. — not "kad ću doći": the time clause takes the perfective present, and a comma follows it because it comes first.',
      },
      {
        type: 'listen',
        audio: 'Rekla je da će nazvati čim stigne u hotel, ali se još nije javila.',
        q: 'What is the situation?',
        options: [
          'She called as soon as she got to the hotel',
          'She promised to call as soon as she got to the hotel, but has not been in touch yet',
          'She said she would not call from the hotel',
          'She got to the hotel, but the speaker forgot to call her',
        ],
        correct: 1,
        explanation:
          'da će nazvati — she said she would call (the future is kept in the report); čim stigne — as soon as she arrives; još se nije javila — no word from her yet.',
      },
      {
        type: 'dictate',
        audio: 'Ne znam kad će doći.',
        answer: 'Ne znam kad će doći.',
        hint: 'Five words: "I don’t know when he will come."',
        explanation:
          'Ne znam kad će doći. — here kad opens a reported question, not a time clause, so the future tense is right.',
      },
    ],
  },

  // ── Concession and contrast ────────────────────────────────────────────────
  'concession-contrast': {
    text: {
      kind: 'dialogue',
      title: 'Selidba na selo',
      lines: [
        {
          who: 'Jelena',
          hr: 'Čujem da se selite na selo. Iako volim prirodu, ja to ne bih mogla.',
          en: 'I hear you are moving to the country. Although I love nature, I couldn’t do that.',
        },
        {
          who: 'Tomislav',
          hr: 'Doduše, do posla ću putovati sat vremena, ali djeca će napokon imati dvorište.',
          en: 'Admittedly, I will be commuting for an hour, but the children will finally have a yard.',
        },
        {
          who: 'Jelena',
          hr: 'A škola? U gradu im je sve blizu, dok će na selu ovisiti o autobusu.',
          en: 'And school? In town everything is close for them, whereas in the country they will depend on the bus.',
        },
        {
          who: 'Tomislav',
          hr: 'Istina. Međutim, u seoskoj su školi razredi mali pa učiteljica ima vremena za svako dijete.',
          en: 'True. However, the classes in the village school are small, so the teacher has time for every child.',
        },
        {
          who: 'Jelena',
          hr: 'Unatoč tome, mislim da će vam zimi biti teško.',
          en: 'Even so, I think it will be hard for you in winter.',
        },
        {
          who: 'Tomislav',
          hr: 'Ljudi ondje žive sasvim normalno usprkos snijegu i lošim cestama.',
          en: 'People there live perfectly normally in spite of the snow and the bad roads.',
        },
        {
          who: 'Jelena',
          hr: 'S druge strane, kuća na selu sigurno je jeftinija od stana u gradu.',
          en: 'On the other hand, a house in the country is surely cheaper than an apartment in town.',
        },
        {
          who: 'Tomislav',
          hr: 'Nije jeftinija; naprotiv, obnova nas je stajala više nego što smo planirali.',
          en: 'It isn’t cheaper; on the contrary, the renovation cost us more than we had planned.',
        },
        {
          who: 'Jelena',
          hr: 'Pa zašto se onda ipak selite?',
          en: 'So why are you moving all the same?',
        },
        {
          who: 'Tomislav',
          hr: 'Zato što, bez obzira na troškove, želimo mirniji život. Premda… pitaj me opet u veljači!',
          en: 'Because, regardless of the costs, we want a quieter life. Although… ask me again in February!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which drawback of the move does Tomislav admit himself, and what does he set against it?',
          options: [
            'The house was expensive, but the school is better',
            'He will commute for an hour, but the children will finally have a yard',
            'The winters are hard, but the roads are good',
            'The village has no school, but the bus is free',
          ],
          correct: 1,
          hint: 'He grants the point in his very first answer, before the "but".',
          explanation:
            'Doduše, do posla će putovati sat vremena, ali djeca će imati dvorište. He concedes first and then makes his own point — that is what doduše is for.',
        },
        {
          q: 'Jelena has argued against the move all along. What is she doing when she says "S druge strane, kuća na selu sigurno je jeftinija"?',
          options: [
            'Changing the subject to avoid a quarrel',
            'Repeating something Tomislav has just said',
            'Granting what she takes to be one point in favor of the move',
            'Asking how much the house cost',
          ],
          correct: 2,
          hint: 'The phrase she opens with announces the second side of a comparison.',
          explanation:
            'S druge strane turns to the other side: after her objections she offers an advantage, as a fair arguer does. Tomislav then rejects it with naprotiv — the house cost more than planned.',
        },
        {
          type: 'type',
          q: 'Now you. Tomislav sums up: Unatoč dugom ____, selidba se isplati. (putovanje)',
          answer: 'putovanju',
          hint: 'This preposition does not take the genitive. The adjective in front of the blank already shows the case.',
          explanation:
            'Unatoč dugom putovanju — unatoč takes the dative, and the neuter dative ends in -u.',
        },
        {
          type: 'transform',
          q: 'Set the two people against each other in one sentence. Use the conjunction you first learned as "while" — here it means "whereas".',
          from: 'Jelena voli grad. Tomislav voli selo.',
          answer: 'Jelena voli grad, dok Tomislav voli selo.',
          accept: [
            'Jelena voli grad dok Tomislav voli selo.',
            'Dok Jelena voli grad, Tomislav voli selo.',
            'Jelena voli grad, dok Tomislav selo.',
          ],
          hint: 'Three letters; it stands at the head of the second clause, after a comma.',
          explanation:
            'Jelena voli grad, dok Tomislav voli selo. — nothing here happens "at the same time": two different people are compared, so dok reads as "whereas".',
        },
        {
          type: 'type',
          q: 'And the cold months? Selimo se bez obzira na ____. (zima)',
          answer: 'zimu',
          hint: 'After this three-word expression the noun is not in the dative: its last word decides the case.',
          explanation:
            'bez obzira na zimu — bez obzira na takes the accusative, so zima becomes zimu. Compare unatoč zimi, with the dative.',
        },
      ],
    },
    mix: [
      7,
      5,
      {
        type: 'tf',
        q: 'Tko kaže "Doduše, skupo je, ali vrijedi", misli da to ne treba kupiti.',
        answer: false,
        hint: 'Which half carries the speaker’s own opinion — the part before ali, or the part after it?',
        explanation:
          'False. Doduše only grants the point about the price; the speaker’s opinion comes after ali — it is worth the money.',
      },
      6,
      4,
      {
        type: 'sort',
        q: 'What follows the opening word or phrase — a whole CLAUSE with a verb, or just a NOUN?',
        groups: ['A clause with a verb', 'A noun (with its adjective)'],
        items: [
          { hr: 'iako je bilo kasno', group: 0 },
          { hr: 'unatoč kasnom satu', group: 1 },
          { hr: 'premda nemam iskustva', group: 0 },
          { hr: 'usprkos umoru', group: 1 },
          { hr: 'bez obzira na cijenu', group: 1 },
          { hr: 'iako nisu imali novca', group: 0 },
        ],
        explanation:
          'iako and premda are conjunctions: a verb follows. unatoč and usprkos are prepositions with the dative (satu, umoru); bez obzira na takes the accusative (cijenu).',
      },
      3,
      {
        type: 'match',
        q: 'Match each word or phrase to what it does in an argument.',
        pairs: [
          ['doduše', 'grants a point before the objection comes'],
          ['naprotiv', 'asserts the opposite of what was just denied'],
          ['ipak', 'says the result holds in spite of the obstacle'],
          ['s druge strane', 'turns to the second side of a comparison'],
          ['bez obzira na', 'says that something makes no difference'],
        ],
        explanation:
          'doduše — admittedly; naprotiv — on the contrary; ipak — nevertheless; s druge strane — on the other hand; bez obzira na — regardless of.',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "Although he is young, he has a lot of experience."',
        words: ['Iako', 'je', 'mlad,', 'ima', 'puno', 'iskustva.'],
        accept: ['Ima puno iskustva iako je mlad.'],
        explanation:
          'Iako je mlad, ima puno iskustva. The short word je comes right after iako, and a comma separates the clause that comes first.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Despite the traffic, we arrived on time.")',
        words: ['Unatoč', 'gužve,', 'stigli', 'smo', 'na', 'vrijeme.'],
        wrong: 1,
        answer: 'gužvi',
        hint: 'The genitive feels right after a word like this — and that is exactly the trap.',
        explanation:
          'Unatoč gužvi, stigli smo na vrijeme. — unatoč takes the dative. The genitive belongs to zbog: zbog gužve.',
      },
      10,
      {
        type: 'transform',
        q: 'Say the same with "unatoč" and the noun "bolest" instead of the whole clause.',
        from: 'Iako je bio bolestan, došao je na posao.',
        answer: 'Unatoč bolesti, došao je na posao.',
        accept: [
          'Unatoč bolesti došao je na posao.',
          'Došao je na posao unatoč bolesti.',
          'Unatoč svojoj bolesti, došao je na posao.',
          'Unatoč bolesti, na posao je došao.',
        ],
        hint: 'The clause shrinks to one noun, and the preposition wants its usual case. This feminine noun ends in a consonant.',
        explanation:
          'Unatoč bolesti, došao je na posao. — a preposition takes a noun, not a clause, and unatoč puts it in the dative: bolest → bolesti.',
      },
      8,
      {
        type: 'listen',
        audio: 'Premda nam je hotel bio daleko od plaže, ljetovanje je ipak bilo odlično.',
        q: 'What does the speaker think of the vacation?',
        options: [
          'It was ruined because the hotel was far from the beach',
          'The hotel was excellent, but the beach was not',
          'It was excellent, even though the hotel was far from the beach',
          'They never found the hotel',
        ],
        correct: 2,
        explanation:
          'Premda … ipak — the concessive shape: the hotel was far from the beach, and the vacation was excellent all the same.',
      },
      {
        type: 'dictate',
        audio: 'Unatoč svemu, ostajemo prijatelji.',
        answer: 'Unatoč svemu, ostajemo prijatelji.',
        hint: 'Four words: "In spite of everything, we remain friends."',
        explanation:
          'Unatoč svemu, ostajemo prijatelji. — svemu is the dative of sve, as unatoč requires.',
      },
    ],
  },

  // ── Consumers and ads ──────────────────────────────────────────────────────
  'consumerism-advertising': {
    text: {
      kind: 'text',
      title: 'Crni petak, prazan novčanik',
      lines: [
        {
          hr: 'Svake godine krajem studenoga zahvati nas potrošačka groznica.',
          en: 'Every year at the end of November, consumer fever takes hold of us.',
        },
        {
          hr: 'Izlozi viču: „Samo danas!“, „Ne propustite!“, „Sve je sniženo!“',
          en: 'The store windows shout: "Today only!", "Don’t miss it!", "Everything is reduced!"',
        },
        {
          hr: 'Prošle sam godine i ja satima stajala u redu pred trgovačkim centrom, iako mi zapravo ništa nije trebalo.',
          en: 'Last year I too stood in line for hours in front of the shopping center, although I didn’t actually need anything.',
        },
        {
          hr: 'Kupila sam televizor na rate, dva kaputa i aparat za kavu koji do danas nisam izvadila iz kutije.',
          en: 'I bought a television in installments, two coats and a coffee machine that I have not taken out of its box to this day.',
        },
        {
          hr: 'Reklame su mi obećavale da ću uštedjeti, a zapravo sam potrošila cijelu plaću.',
          en: 'The ads promised me that I would save money, and in fact I spent my whole paycheck.',
        },
        {
          hr: 'Stručnjaci kažu da oglasi ne utječu toliko na ono što mislimo koliko na ono što osjećamo.',
          en: 'Experts say that ads influence not so much what we think as what we feel.',
        },
        {
          hr: 'Zato sretna obitelj u reklami prodaje automobile bolje nego bilo koji popust.',
          en: 'That is why a happy family in a commercial sells cars better than any discount.',
        },
        {
          hr: 'Ove ću godine pokušati nešto drugo: na Dan bez kupnje ostavit ću karticu kod kuće.',
          en: 'This year I will try something different: on Buy Nothing Day I will leave my card at home.',
        },
        {
          hr: 'Ako mi nešto doista treba, trebat će mi i sljedeći tjedan — možda čak i po nižoj cijeni.',
          en: 'If I really need something, I will still need it next week — maybe even at a lower price.',
        },
        {
          hr: 'A ako opet ostanem bez novca, barem ću znati da nisam jedina.',
          en: 'And if I end up without money again, at least I will know that I am not the only one.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what did the author bring home last year, and what did it cost her?',
          options: [
            'A car and two coats; she is still paying for them',
            'A television, two coats and a coffee machine; her whole paycheck',
            'Only a coffee machine; half of her savings',
            'Nothing — she stood in line for hours and went home',
          ],
          correct: 1,
          hint: 'Three kinds of things, one of them still in its box.',
          explanation:
            'Televizor na rate, dva kaputa i aparat za kavu — and instead of saving, potrošila je cijelu plaću.',
        },
        {
          q: 'Why, according to the author, does "a happy family in a commercial" sell cars better than any discount?',
          options: [
            'Because families buy more cars than single people',
            'Because discounts on cars are forbidden in November',
            'Because ads work on what we feel rather than on what we think',
            'Because the actors in commercials are famous',
          ],
          correct: 2,
          hint: 'Look at the sentence just before it: what do the experts say ads influence?',
          explanation:
            'Oglasi ne utječu toliko na ono što mislimo koliko na ono što osjećamo. A discount is a fact; a happy family is a feeling — and the feeling sells.',
        },
        {
          type: 'type',
          q: 'Now you. Reklame utječu i na moju mlađu ____. (sestra)',
          answer: 'sestru',
          hint: 'With this verb, na is not about a place. The two words in front of the blank already show the case.',
          explanation: 'utjecati na + the accusative: Reklame utječu na moju mlađu sestru.',
        },
        {
          type: 'transform',
          q: 'Buy Nothing Day turns the slogans upside down. Tell the customers NOT to do it — and remember what a prohibition does to the aspect of the verb.',
          from: 'Kupite odmah!',
          answer: 'Ne kupujte odmah!',
          accept: [
            'Nemojte kupovati odmah!',
            'Nemojte odmah kupovati!',
            'Nemojte kupiti odmah!',
            'Nemojte odmah kupiti!',
            'Ne kupujte to odmah!',
            'Odmah ne kupujte!',
          ],
          hint: 'A prohibition is about the activity, so the verb goes over to its imperfective partner — or use the negative helper for Vi with an infinitive.',
          explanation:
            'Ne kupujte odmah! — a prohibition takes the imperfective: kupiti → kupovati, kupujte. Nemojte kupovati says the same. "Ne propustite!" in the text keeps the perfective because it warns against a slip, not against an activity.',
        },
        {
          type: 'transform',
          q: 'This slogan talks to a friend. Ads address the customer politely — put it into the Vi form.',
          from: 'Iskoristi popust i uštedi!',
          answer: 'Iskoristite popust i uštedite!',
          accept: ['Iskoristite popust i uštedite.'],
          hint: 'Both imperatives need the ending for Vi.',
          explanation:
            'Iskoristite popust i uštedite! — the polite imperative in -ite is the voice of nearly every Croatian ad: Kupite, Probajte, Ne propustite.',
        },
      ],
    },
    mix: [
      8,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "I bought the phone in installments because I had no cash."',
        words: ['Mobitel', 'sam', 'kupio', 'na', 'rate', 'jer', 'nisam', 'imao', 'gotovine.'],
        accept: [
          'Kupio sam mobitel na rate jer nisam imao gotovine.',
          'Na rate sam kupio mobitel jer nisam imao gotovine.',
          'Mobitel sam na rate kupio jer nisam imao gotovine.',
          'Kupio sam na rate mobitel jer nisam imao gotovine.',
          'Na rate sam mobitel kupio jer nisam imao gotovine.',
        ],
        explanation:
          'Mobitel sam kupio na rate jer nisam imao gotovine. The short word sam sits second, and after nisam imao the thing that is missing is in the genitive: gotovine.',
      },
      9,
      {
        type: 'tf',
        q: 'Na Dan bez kupnje ljudi kupuju samo ono što je na popustu.',
        answer: false,
        hint: 'Read the name of the day literally.',
        explanation:
          'False. The idea is to buy nothing at all for one whole day — and to notice how much of what we buy we never needed.',
      },
      11,
      3,
      {
        type: 'match',
        q: 'How does each slogan work on you? Match it to its trick.',
        pairs: [
          ['Samo danas!', 'time pressure — tomorrow will be too late'],
          ['Ograničena ponuda', 'scarcity — not everyone will get one'],
          ['Najbolji izbor za vas', 'a superlative — nothing else compares'],
          ['Dva za cijenu jednog', 'a bargain — more goods for the same money'],
          ['Probajte besplatno!', 'no risk — it costs you nothing to start'],
        ],
        explanation:
          'Urgency, scarcity, the superlative, the bargain and the free trial: five ways an ad pushes a feeling instead of giving a fact.',
      },
      4,
      {
        type: 'sort',
        q: 'Would you write it in a formal complaint, or only say it to a friend?',
        groups: ['Standard — fine in writing', 'Colloquial — among friends'],
        items: [
          { hr: 'gotovina', group: 0 },
          { hr: 'keš', group: 1 },
          { hr: 'vrlo skupo', group: 0 },
          { hr: 'papreno', group: 1 },
          { hr: 'kupovina', group: 0 },
          { hr: 'šoping', group: 1 },
          { hr: 'potrošiti', group: 0 },
          { hr: 'spiskati', group: 1 },
        ],
        explanation:
          'keš, papreno, šoping and spiskati are natural among friends and in movies; in an essay or a complaint write gotovina, vrlo skupo, kupovina and potrošiti.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("High prices influence consumption.")',
        words: ['Visoke', 'cijene', 'utječu', 'na', 'potrošnji.'],
        wrong: 4,
        answer: 'potrošnju',
        hint: 'Nothing is located anywhere here. Which case does na take with this verb?',
        explanation:
          'Visoke cijene utječu na potrošnju. — utjecati na takes the accusative, not the locative.',
      },
      6,
      {
        type: 'transform',
        q: 'Turn the plain statement into an ad: promise the MOST with two superlatives.',
        from: 'Naš je kruh dobar i jeftin.',
        answer: 'Naš je kruh najbolji i najjeftiniji.',
        accept: [
          'Naš kruh je najbolji i najjeftiniji.',
          'Naš je kruh najbolji i najjeftiniji!',
          'Naš kruh je najbolji i najjeftiniji!',
        ],
        hint: 'Both adjectives take naj- in front of the comparative; one of the two comparatives is irregular.',
        explanation:
          'Naš je kruh najbolji i najjeftiniji. — dobar → bolji → najbolji (irregular), jeftin → jeftiniji → najjeftiniji. The superlative is the favorite promise of advertising.',
      },
      5,
      {
        type: 'listen',
        audio:
          'Htjela sam samo pogledati izloge, ali sam se vratila kući s tri vrećice i praznim novčanikom.',
        q: 'What happened?',
        options: [
          'She only looked at the store windows and bought nothing',
          'She meant just to look, but came home with three bags and an empty wallet',
          'She lost her wallet in the shopping center',
          'She returned three bags to the store',
        ],
        correct: 1,
        explanation:
          'Htjela sam samo pogledati — that was the plan; ali breaks it: three bags and an empty wallet. A small case of impulzivna kupnja.',
      },
      {
        type: 'dictate',
        audio: 'Ne propustite veliku rasprodaju!',
        answer: 'Ne propustite veliku rasprodaju!',
        hint: 'Four words, in the voice of an ad: "Do not miss the big sale!"',
        explanation:
          'Ne propustite veliku rasprodaju! — the polite imperative, negated, with its object in the accusative.',
      },
    ],
  },

  // ── Prepositions with two cases ────────────────────────────────────────────
  'prepositions-advanced': {
    text: {
      kind: 'dialogue',
      title: 'Gdje su ključevi?',
      lines: [
        {
          who: 'Mama',
          hr: 'Luka, idem po baku na kolodvor, a ne mogu naći ključeve od auta. Jesi li ih vidio?',
          en: 'Luka, I’m going to pick up Grandma at the station, and I can’t find the car keys. Have you seen them?',
        },
        {
          who: 'Luka',
          hr: 'Sinoć su bili na ormariću u hodniku. Možda su pali pod ormarić?',
          en: 'Last night they were on the cabinet in the hall. Maybe they fell under the cabinet?',
        },
        {
          who: 'Mama',
          hr: 'Gledala sam pod ormarićem, nema ih. Po mom mišljenju, opet ih je uzeo tvoj otac.',
          en: 'I looked under the cabinet; they are not there. In my opinion, your father has taken them again.',
        },
        {
          who: 'Luka',
          hr: 'Tata je otišao sa psom u šetnju po parku, a ključeve nije ponio. Pogledat ću među jastucima na kauču.',
          en: 'Dad went for a walk around the park with the dog, and he didn’t take the keys. I’ll look among the cushions on the couch.',
        },
        {
          who: 'Mama',
          hr: 'Požuri, vlak stiže za dvadeset minuta, a ja još stojim pred ogledalom u papučama!',
          en: 'Hurry up, the train arrives in twenty minutes, and I’m still standing in front of the mirror in my slippers!',
        },
        {
          who: 'Luka',
          hr: 'Nema ih ni među jastucima. O čemu si razmišljala kad si sinoć došla kući?',
          en: 'They are not among the cushions either. What were you thinking about when you came home last night?',
        },
        {
          who: 'Mama',
          hr: 'O večeri… Čekaj! Skinula sam torbu s ramena i stavila je za vrata.',
          en: 'About dinner… Wait! I took the bag off my shoulder and put it behind the door.',
        },
        {
          who: 'Luka',
          hr: 'Evo torbe za vratima — i ključevi su u njoj!',
          en: 'Here’s the bag behind the door — and the keys are in it!',
        },
        {
          who: 'Mama',
          hr: 'Hvala ti! Vraćamo se za sat vremena, a ti dotad stavi juhu na stol.',
          en: 'Thank you! We’ll be back in an hour, and in the meantime you put the soup on the table.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where did the keys turn up, and where had Mom and Luka already looked?',
          options: [
            'In Dad’s coat; they had looked in the car and in the park',
            'Under the hall cabinet; they had looked in the bag and on the table',
            'In the bag behind the door; they had looked under the hall cabinet and among the couch cushions',
            'Among the couch cushions; they had looked behind the door and in front of the mirror',
          ],
          correct: 2,
          hint: 'Mom remembered what she did with something she was carrying on her shoulder.',
          explanation:
            'Torba je bila za vratima, a ključevi u njoj. Before that Mom had looked pod ormarićem and Luka među jastucima.',
        },
        {
          q: 'Luka asks "Možda su pali pod ormarić?" and Mom answers "Gledala sam pod ormarićem". The same preposition, two different endings. Why?',
          options: [
            'Because the first sentence is a question and the second is a statement',
            'Because "pod" takes the accusative in the past and the instrumental in the present',
            'Because "ormarić" is masculine, so both endings are always possible',
            'Because falling is movement toward a place (accusative), while looking there is about a position (instrumental)',
          ],
          correct: 3,
          hint: 'Ask of each sentence: is something traveling to that spot, or is the action simply located there?',
          explanation:
            'pod, pred, nad and među take the accusative for motion to a place (pali pod ormarić) and the instrumental for position (gledala pod ormarićem).',
        },
        {
          type: 'type',
          q: 'Now you. Luka je sjeo pred televizor. Sada sjedi pred ____.',
          answer: 'televizorom',
          hint: 'He is no longer moving — he is in position. Which case does this preposition take then?',
          explanation:
            'Sjeo je pred televizor (motion, accusative); sjedi pred televizorom (position, instrumental).',
        },
        {
          type: 'transform',
          q: 'Say it shorter: you are going to FETCH the medicine. One preposition does the whole job of "u ljekarnu kupiti".',
          from: 'Idem u ljekarnu kupiti lijek.',
          answer: 'Idem po lijek.',
          accept: ['Idem u ljekarnu po lijek.', 'Ja idem po lijek.', 'Idem po lijek u ljekarnu.'],
          hint: 'Mom uses this two-letter preposition in her very first sentence. For fetching it takes the accusative, not the locative.',
          explanation:
            'Idem po lijek. — po + the accusative means going to fetch something or somebody. With the locative (po gradu, po parku) it means "around".',
        },
        {
          type: 'type',
          q: 'And off a surface: Luka je uzeo knjigu s ____. (polica — down from the shelf)',
          answer: 'police',
          hint: 'This is not the s that means "with". Movement down from something takes a different case.',
          explanation:
            's police — s + the genitive for movement off or down from something. With the instrumental (sa psom — sa is its fuller form, used before ps-, s-, š-, z-, ž-) the same word means "with".',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'sort',
        q: 'Is something MOVING to the place, or already THERE? Look at the ending after the preposition.',
        groups: ['Motion — to the place', 'Position — at the place'],
        items: [
          { hr: 'Stavi cipele pod krevet.', group: 0 },
          { hr: 'Cipele su pod krevetom.', group: 1 },
          { hr: 'Izašli smo pred kuću.', group: 0 },
          { hr: 'Auto je pred kućom.', group: 1 },
          { hr: 'Sjeli smo za stol.', group: 0 },
          { hr: 'Večeramo za stolom.', group: 1 },
        ],
        explanation:
          'Motion takes the accusative (pod krevet, pred kuću, za stol); position takes the instrumental (pod krevetom, pred kućom, za stolom).',
      },
      6,
      7,
      {
        type: 'tf',
        q: 'In "Došao je po sestru", the sister arrived together with him.',
        answer: false,
        hint: 'Look at the case after po. What does po mean with the accusative?',
        explanation:
          'False. po + the accusative means to fetch: he came to pick his sister up. "Together with" would be sa sestrom.',
      },
      1,
      2,
      {
        type: 'match',
        q: 'The same preposition, a different case, a different meaning. Match each sentence to what it says.',
        pairs: [
          ['Govori o zidu.', 'The wall is his topic.'],
          ['Udario je o zid.', 'The wall is what he ran into.'],
          ['Ide s bratom.', 'His brother is coming along.'],
          ['Ide s posla.', 'Work is where he is coming from.'],
          ['Radi za brata.', 'His brother is the one he works for.'],
        ],
        explanation:
          'o + locative = about, o + accusative = against. s + instrumental = with, s + genitive = from, off. za + accusative = for.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order: "In my opinion, we need to set off in an hour."',
        words: ['Po', 'mom', 'mišljenju,', 'trebamo', 'krenuti', 'za', 'sat', 'vremena.'],
        accept: [
          'Po mom mišljenju, za sat vremena trebamo krenuti.',
          'Trebamo krenuti za sat vremena, po mom mišljenju.',
          'Za sat vremena trebamo krenuti, po mom mišljenju.',
        ],
        explanation:
          'Po mom mišljenju, trebamo krenuti za sat vremena. po + the locative = according to; za + the accusative = in (so much time from now).',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("I sat among friends all evening.")',
        words: ['Sjedio', 'sam', 'među', 'prijatelje', 'cijelu', 'večer.'],
        wrong: 3,
        answer: 'prijateljima',
        hint: 'Sitting all evening is not a movement. Which case does this preposition take for a position?',
        explanation:
          'Sjedio sam među prijateljima cijelu večer. — position, so the instrumental. Sjeo sam među prijatelje would be the movement of taking a seat.',
      },
      11,
      {
        type: 'transform',
        q: 'The book IS under the pillow. Now say that you are PUTTING it there: "Stavljam knjigu…"',
        from: 'Knjiga je pod jastukom.',
        answer: 'Stavljam knjigu pod jastuk.',
        accept: ['Ja stavljam knjigu pod jastuk.', 'Knjigu stavljam pod jastuk.'],
        hint: 'Putting is motion toward the place, so the instrumental has to go.',
        explanation:
          'Stavljam knjigu pod jastuk. — motion, so pod takes the accusative; for an inanimate masculine noun that looks like the nominative.',
      },
      {
        type: 'listen',
        audio: 'Sišla sam s tramvaja pred kazalištem i još deset minuta hodala po kiši.',
        q: 'What did she do?',
        options: [
          'She got on the tram in front of the theater to get out of the rain',
          'She went to the theater by tram with a friend',
          'She got off the tram in front of the theater and then walked ten more minutes in the rain',
          'She waited ten minutes for the tram in the rain',
        ],
        correct: 2,
        explanation:
          's tramvaja — s + the genitive, off the tram; pred kazalištem — position, the instrumental; po kiši — po + the locative, in the rain.',
      },
      {
        type: 'dictate',
        audio: 'Vraćam se za pet minuta.',
        answer: 'Vraćam se za pet minuta.',
        hint: 'Five words: "I’ll be back in five minutes."',
        explanation:
          'Vraćam se za pet minuta. — za + a stretch of time means "in", counted from now.',
      },
    ],
  },

  // ══ UNIT 10 ════════════════════════════════════════════════════════════════

  // ── Because, so that, as, if: dependent clauses ────────────────────────────
  'dependent-clauses-b2': {
    text: {
      kind: 'dialogue',
      title: 'Razgovor s redateljem',
      lines: [
        {
          who: 'Novinarka',
          hr: 'Gospodine Babiću, zašto ste film snimali na otoku, a ne u studiju?',
          en: 'Mr. Babić, why did you shoot the movie on an island and not in a studio?',
        },
        {
          who: 'Redatelj',
          hr: 'Snimali smo na Visu zato što sam htio pravo svjetlo i pravo more.',
          en: 'We shot on Vis because I wanted real light and a real sea.',
        },
        {
          who: 'Novinarka',
          hr: 'Budući da na otoku nema kina, gdje su stanovnici vidjeli film?',
          en: 'Since there is no movie theater on the island, where did the locals see the movie?',
        },
        {
          who: 'Redatelj',
          hr: 'Postavili smo platno na rivi kako bi ga svi mogli pogledati besplatno.',
          en: 'We put up a screen on the waterfront so that everyone could watch it for free.',
        },
        {
          who: 'Novinarka',
          hr: 'Glumci govore dijalektom. Jeste li to tražili od njih?',
          en: 'The actors speak in dialect. Did you ask that of them?',
        },
        {
          who: 'Redatelj',
          hr: 'Jesam. Htio sam da govore onako kao što govore njihove bake.',
          en: 'I did. I wanted them to speak just the way their grandmothers speak.',
        },
        {
          who: 'Novinarka',
          hr: 'Neki kritičari kažu da je film spor.',
          en: 'Some critics say that the movie is slow.',
        },
        {
          who: 'Redatelj',
          hr: 'Spor je jer je i život na otoku spor. Namjerno sam ga tako snimio da publika osjeti taj ritam.',
          en: 'It is slow because life on the island is slow too. I shot it that way on purpose, so that the audience feels that rhythm.',
        },
        {
          who: 'Novinarka',
          hr: 'Ako film dobije nagradu u Puli, hoćete li snimiti nastavak?',
          en: 'If the movie wins an award in Pula, will you make a sequel?',
        },
        {
          who: 'Redatelj',
          hr: 'Kad bih imao novca, snimio bih ga već sutra. Ali ako dođete na premijeru, kupit ću Vam kokice!',
          en: 'If I had the money, I would shoot it tomorrow. But if you come to the premiere, I will buy you popcorn!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the interview: why did the director shoot on the island, and why did he put a screen up on the waterfront?',
          options: [
            'A studio was too expensive; the island’s movie theater was being repaired',
            'He wanted real light and a real sea; that way everyone could watch the movie for free',
            'The actors live on the island; the waterfront was the only quiet place',
            'The critics asked for it; the premiere had to be held outdoors',
          ],
          correct: 1,
          hint: 'The first answer is a reason (zato što…), the second a purpose (kako bi…).',
          explanation:
            'Snimao je na Visu zato što je htio pravo svjetlo i pravo more, a platno je postavio na rivi kako bi film svi mogli pogledati besplatno.',
        },
        {
          q: 'The journalist asks "Ako film dobije nagradu…", but the director begins his answer with "Kad bih imao novca…". Why do they not use the same word for "if"?',
          options: [
            'The award may really come, but the director does not have the money — one condition is open, the other is not true',
            '"Ako" is used in questions and "kad" in answers',
            '"Ako" is for the future and "kad" for the past',
            'The director is correcting the journalist’s grammar',
          ],
          correct: 0,
          hint: 'For each condition, ask: could it still turn out to be true?',
          explanation:
            'ako sets a real condition — the movie may win. kad bih (like da + present) sets one that is not true now, and the main clause goes into the conditional: snimio bih.',
        },
        {
          type: 'type',
          q: 'Now you. The journalist advises her readers: Kupite karte unaprijed kako ____ izbjegli red. (vi)',
          answer: 'biste',
          hint: 'The small conditional word after kako changes with the person. Here several readers are addressed.',
          explanation:
            'kako biste izbjegli red — bih, bi, bi, bismo, biste, bi. Using bi for every person is the commonest slip.',
        },
        {
          type: 'transform',
          q: 'Put the reason FIRST. A written sentence does not open with "jer" — use the connector that can.',
          from: 'Ostali smo do kraja jer nam se film svidio.',
          answer: 'Budući da nam se film svidio, ostali smo do kraja.',
          accept: [
            'Budući da nam se svidio film, ostali smo do kraja.',
            'Budući da nam se film svidio, do kraja smo ostali.',
            'Kako nam se film svidio, ostali smo do kraja.',
            'Zato što nam se film svidio, ostali smo do kraja.',
            'S obzirom na to da nam se film svidio, ostali smo do kraja.',
          ],
          hint: 'Two words open the sentence, the short words nam se follow them at once, and a comma closes the clause.',
          explanation:
            'Budući da nam se film svidio, ostali smo do kraja. — budući da can open a sentence; the dependent clause comes first, so a comma follows it.',
        },
        {
          type: 'transform',
          q: 'Join the two with a purpose clause: "…so that we would not wait in line."',
          from: 'Kupili smo karte unaprijed. Nismo htjeli čekati u redu.',
          answer: 'Kupili smo karte unaprijed kako ne bismo čekali u redu.',
          accept: [
            'Kupili smo karte unaprijed da ne čekamo u redu.',
            'Kupili smo karte unaprijed da ne bismo čekali u redu.',
            'Karte smo kupili unaprijed kako ne bismo čekali u redu.',
            'Karte smo kupili unaprijed da ne čekamo u redu.',
            'Kupili smo karte unaprijed kako ne bismo morali čekati u redu.',
          ],
          hint: 'After kako the conditional word must match mi, with ne in front of it — or use the short purpose word with the present.',
          explanation:
            'Kupili smo karte unaprijed kako ne bismo čekali u redu. — purpose: kako + the conditional in the right person, or simply da ne čekamo.',
        },
      ],
    },
    mix: [
      8,
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("We were late because it was raining.")',
        words: ['Zakasnili', 'smo', 'zbog', 'je', 'padala', 'kiša.'],
        wrong: 2,
        answer: 'jer',
        hint: 'This word needs a noun after it. What stands before a whole clause with a verb?',
        explanation:
          'Zakasnili smo jer je padala kiša. — zbog is a preposition and takes a noun (zbog kiše); a clause with its own verb needs a conjunction.',
      },
      10,
      9,
      {
        type: 'tf',
        q: 'In careful standard Croatian, "Došli smo kako bi vam pomogli" is the right way to write "We came in order to help you".',
        answer: false,
        hint: 'Who came? The small conditional word has to match that person.',
        explanation:
          'False. The subject is mi, so the conditional word is bismo: Došli smo kako bismo vam pomogli. A plain bi for every person is common in speech, but the standard keeps bih, bismo and biste.',
      },
      1,
      {
        type: 'sort',
        q: 'What does each clause give — a REASON, a PURPOSE, or a CONDITION?',
        groups: ['Reason — why?', 'Purpose — what for?', 'Condition — in what case?'],
        items: [
          { hr: 'jer nemam vremena', group: 0 },
          { hr: 'kako bismo stigli na vrijeme', group: 1 },
          { hr: 'ako budeš imao vremena', group: 2 },
          { hr: 'zato što je kasno', group: 0 },
          { hr: 'da ne zakasnimo', group: 1 },
          { hr: 'ukoliko imate pitanja', group: 2 },
        ],
        explanation:
          'jer and zato što give a reason; kako bismo and da + present give a purpose; ako and its formal twin ukoliko set a condition.',
      },
      6,
      {
        type: 'match',
        q: 'Match each connector to its meaning.',
        pairs: [
          ['kao što', 'just as'],
          ['ukoliko', 'if — in formal writing'],
          ['kako bi', 'so that, in order to'],
          ['budući da', 'since, given that'],
          ['ne bi li', 'in the hope that'],
        ],
        explanation:
          'kao što compares the manner; ukoliko is formal ako; kako bi gives a purpose; budući da gives a reason and may open the sentence; ne bi li adds a hopeful purpose.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "She spoke quietly so that the children would not wake up."',
        words: ['Govorila', 'je', 'tiho', 'kako', 'se', 'djeca', 'ne', 'bi', 'probudila.'],
        accept: [
          'Tiho je govorila kako se djeca ne bi probudila.',
          'Govorila je tiho kako se ne bi probudila djeca.',
          'Govorila je tiho kako se ne bi djeca probudila.',
          'Tiho je govorila kako se ne bi probudila djeca.',
        ],
        explanation:
          'Govorila je tiho kako se djeca ne bi probudila. — se follows kako at once; ne stands directly before bi; and djeca takes the participle in -a.',
      },
      7,
      {
        type: 'transform',
        q: 'Make the purpose a shade more formal: replace da + present with kako + the conditional. (A woman is speaking.)',
        from: 'Došla sam da ti pomognem.',
        answer: 'Došla sam kako bih ti pomogla.',
        accept: ['Došla sam kako bih pomogla tebi.', 'Došla sam kako bih ti ja pomogla.'],
        hint: 'The subject is ja and she is a woman: the conditional word and the participle must both show it.',
        explanation:
          'Došla sam kako bih ti pomogla. — kako + bih for ja, then the short word ti, then the feminine participle.',
      },
      {
        type: 'listen',
        audio: 'Karte smo kupili unaprijed zato što smo se bojali da će sve biti rasprodano.',
        q: 'Why did they buy the tickets early?',
        options: [
          'Because tickets were cheaper in advance',
          'Because the premiere had been moved to an earlier date',
          'Because they wanted seats in the front row',
          'Because they were afraid everything would be sold out',
        ],
        correct: 3,
        explanation:
          'zato što smo se bojali — the reason, stressed; da će sve biti rasprodano — what they were afraid of.',
      },
      {
        type: 'dictate',
        audio: 'Budući da kasnimo, uzmimo taksi.',
        answer: 'Budući da kasnimo, uzmimo taksi.',
        hint: 'Five words: "Since we are late, let’s take a taxi."',
        explanation:
          'Budući da kasnimo, uzmimo taksi. — the reason opens the sentence, so a comma follows the clause.',
      },
    ],
  },

  // ── If things were different ───────────────────────────────────────────────
  'unreal-conditions': {
    text: {
      kind: 'dialogue',
      title: 'Trajekt je otišao',
      lines: [
        {
          who: 'Nina',
          hr: 'Trajekt je otišao prije pet minuta. Da smo krenuli ranije, sad bismo bili na brodu.',
          en: 'The ferry left five minutes ago. If we had set off earlier, we would be on the boat now.',
        },
        {
          who: 'Dario',
          hr: 'Da ti nisi pola sata tražila sunčane naočale, stigli bismo na vrijeme.',
          en: 'If you hadn’t spent half an hour looking for your sunglasses, we would have arrived on time.',
        },
        {
          who: 'Nina',
          hr: 'A da si ti jučer kupio benzin, ne bismo stajali na benzinskoj postaji!',
          en: 'And if you had bought gas yesterday, we wouldn’t have been standing at the gas station!',
        },
        {
          who: 'Dario',
          hr: 'Dobro, dobro. Da imamo krila, ne bi nam trebao ni trajekt.',
          en: 'All right, all right. If we had wings, we wouldn’t even need a ferry.',
        },
        {
          who: 'Nina',
          hr: 'Da sam znala da će biti ovako, ostala bih kod kuće.',
          en: 'If I had known it would be like this, I would have stayed home.',
        },
        {
          who: 'Dario',
          hr: 'Ne bi. Da si ostala kod kuće, cijeli bi dan mislila na more.',
          en: 'No, you wouldn’t. If you had stayed home, you would have thought about the sea all day.',
        },
        {
          who: 'Nina',
          hr: 'Istina. Kad ide sljedeći trajekt?',
          en: 'True. When is the next ferry?',
        },
        {
          who: 'Dario',
          hr: 'U osam. Ako ga uhvatimo, bit ćemo kod tvoje sestre prije ponoći.',
          en: 'At eight. If we catch it, we will be at your sister’s before midnight.',
        },
        {
          who: 'Nina',
          hr: 'Kad bismo živjeli na otoku, ne bismo morali nikamo putovati.',
          en: 'If we lived on the island, we wouldn’t have to travel anywhere.',
        },
        {
          who: 'Dario',
          hr: 'Da živimo na otoku, ti bi svaki vikend htjela u Zagreb!',
          en: 'If we lived on the island, you would want to go to Zagreb every weekend!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why did they miss the ferry — according to Dario, and according to Nina?',
          options: [
            'Dario overslept; Nina forgot the tickets',
            'Nina spent half an hour looking for her sunglasses; Dario had not bought gas the day before',
            'Nina wanted to stay home; Dario took the wrong road',
            'The ferry left early; the gas station was closed',
          ],
          correct: 1,
          hint: 'Each blames the other for one thing that cost them time.',
          explanation:
            'Da Nina nije tražila naočale… — Dario’s version. Da je Dario jučer kupio benzin… — Nina’s. Both things really happened; the da-clauses only imagine them otherwise.',
        },
        {
          q: 'Dario says "Ako ga uhvatimo, bit ćemo kod tvoje sestre", but "Da živimo na otoku, ti bi … htjela u Zagreb". Why "ako" in one sentence and "da" in the other?',
          options: [
            '"Ako" always goes with the future tense and "da" with the present',
            '"Da" is the more polite of the two',
            'Catching the eight o’clock ferry is still possible; living on the island is not their reality',
            '"Ako" needs the short word "ga" after it',
          ],
          correct: 2,
          hint: 'Which of the two things might still come true this evening?',
          explanation:
            'ako opens a real condition — they may catch the ferry, so the result is in the future tense. da opens one contrary to fact — they do not live on the island — and the result is in the conditional.',
        },
        {
          type: 'type',
          q: 'Now you. Nina goes on: Da nas sestra ne čeka, ____ bismo se kući. (vratiti — mi)',
          answer: 'vratili',
          hint: 'The conditional is the small word bismo plus the participle — plural here, for Nina and Dario together.',
          explanation:
            'Da nas sestra ne čeka, vratili bismo se kući. — the participle opens the clause, bismo se follow in second place.',
        },
        {
          type: 'transform',
          q: 'This is a real plan. Now make it a daydream: they do NOT have the money.',
          from: 'Ako imamo novca, kupit ćemo čamac.',
          answer: 'Da imamo novca, kupili bismo čamac.',
          accept: [
            'Kad bismo imali novca, kupili bismo čamac.',
            'Kada bismo imali novca, kupili bismo čamac.',
            'Da imamo novca, mi bismo kupili čamac.',
            'Da imamo novca, čamac bismo kupili.',
          ],
          hint: 'Two changes: the word for "if", and the tense of the result — the future gives way to the conditional.',
          explanation:
            'Da imamo novca, kupili bismo čamac. — da + the present for what is untrue now; the main clause in the conditional. Kad bismo imali novca… says the same.',
        },
        {
          type: 'transform',
          q: 'These are the facts. Turn them around: "If it had not rained, we would have gone to the beach."',
          from: 'Padala je kiša. Nismo išli na plažu.',
          answer: 'Da nije padala kiša, išli bismo na plažu.',
          accept: [
            'Da nije padala kiša, otišli bismo na plažu.',
            'Da nije padala kiša, bili bismo išli na plažu.',
            'Da nije padala kiša, bili bismo otišli na plažu.',
            'Da nije padala kiša, mi bismo išli na plažu.',
            'Da kiša nije padala, išli bismo na plažu.',
            'Da kiša nije padala, otišli bismo na plažu.',
            'Da nije padala kiša, na plažu bismo išli.',
          ],
          hint: 'An unreal condition about the past: the perfect after da, and the conditional — not the perfect — in the result. Each half flips between yes and no.',
          explanation:
            'Da nije padala kiša, išli bismo na plažu. — da + the perfect for the past that did not happen; the result takes the same conditional that English renders as "would have gone".',
        },
      ],
    },
    mix: [
      4,
      6,
      {
        type: 'tf',
        q: '"Da imam auto, vozio bih te" tells you that the speaker has a car.',
        answer: false,
        hint: 'What does this conjunction say about the condition it introduces?',
        explanation:
          'False. da introduces a condition contrary to fact: he has no car. If he might have one, he would say Ako budem imao auto, vozit ću te.',
      },
      7,
      5,
      {
        type: 'sort',
        q: 'Could it still happen, or is it contrary to fact?',
        groups: ['Open — it may happen', 'Contrary to fact'],
        items: [
          { hr: 'Ako nađem ključ, javit ću ti.', group: 0 },
          { hr: 'Da sam našao ključ, javio bih ti.', group: 1 },
          { hr: 'Ako bude snijega, idemo na skijanje.', group: 0 },
          { hr: 'Da ima snijega, išli bismo na skijanje.', group: 1 },
          { hr: 'Kad bih znao odgovor, rekao bih ti.', group: 1 },
          { hr: 'Ako znaš odgovor, reci mi.', group: 0 },
        ],
        explanation:
          'ako leaves the matter open. da (+ present or perfect) and kad bih say the condition is not or was not true — and the result is in the conditional.',
      },
      {
        type: 'match',
        q: 'What is the fact behind each sentence?',
        pairs: [
          ['Da imam vremena, pomogao bih ti.', 'I am busy now.'],
          ['Da sam imao vremena, pomogao bih ti.', 'I was busy then.'],
          ['Ako budem imao vremena, pomoći ću ti.', 'I may be free later.'],
          ['Da si me pitao, pomogao bih ti.', 'You never asked.'],
          ['Pomogao bih ti, ali ne znam kako.', 'I lack the skill.'],
        ],
        explanation:
          'da + present — untrue now; da + perfect — untrue in the past; ako — still open. The result clause is pomogao bih in both unreal cases.',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "If you had listened to me, we would not have gotten lost."',
        words: ['Da', 'si', 'me', 'slušao,', 'ne', 'bismo', 'se', 'izgubili.'],
        accept: ['Ne bismo se izgubili da si me slušao.'],
        explanation:
          'Da si me slušao, ne bismo se izgubili. In each clause the short words sit second: si me after da, and bismo se after ne.',
      },
      {
        type: 'transform',
        q: 'Say the same with the slightly more formal opener "Kad…" — and mind what happens to the verb after it.',
        from: 'Da imam psa, šetao bih svaki dan.',
        answer: 'Kad bih imao psa, šetao bih svaki dan.',
        accept: [
          'Kada bih imao psa, šetao bih svaki dan.',
          'Kad bih imao psa, svaki dan bih šetao.',
        ],
        hint: 'After kad, the unreal condition is itself in the conditional: the auxiliary for ja plus the participle of imati.',
        explanation:
          'Kad bih imao psa, šetao bih svaki dan. — da takes the plain present (imam); kad takes the conditional (bih imao). The meaning is the same.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("If you had told me, I would have helped you." — a woman speaking)',
        words: ['Da', 'si', 'mi', 'rekao,', 'pomogla', 'sam', 'ti.'],
        wrong: 5,
        answer: 'bih',
        hint: 'English tense logic has slipped in. What must the result clause be when the condition never happened?',
        explanation:
          'Da si mi rekao, pomogla bih ti. — the helping did not happen either, so the main clause is conditional, not perfect.',
      },
      9,
      {
        type: 'listen',
        audio: 'Da nisam izgubio putovnicu, sada bih bio u Parizu, a ne u policijskoj postaji.',
        q: 'Where is the speaker, and why?',
        options: [
          'In Paris, with a new passport',
          'At the police station, because he lost his passport',
          'At the airport, waiting for a later flight',
          'At home, because the trip was canceled',
        ],
        correct: 1,
        explanation:
          'Da nisam izgubio — he did lose it. sada bih bio u Parizu — so he is not there; a ne u policijskoj postaji — that is where he actually is.',
      },
      {
        type: 'dictate',
        audio: 'Da imam vremena, putovala bih više.',
        answer: 'Da imam vremena, putovala bih više.',
        hint: 'Six words, a woman speaking: "If I had time, I would travel more."',
        explanation:
          'Da imam vremena, putovala bih više. — da + the present for what is untrue now, then the participle and bih in the result.',
      },
    ],
  },

  // ── Wishes and regrets ─────────────────────────────────────────────────────
  'wishes-regrets': {
    text: {
      kind: 'dialogue',
      title: 'Dvadeset godina poslije',
      lines: [
        {
          who: 'Sanja',
          hr: 'Gorane! Šteta što nisi došao na proslavu prije pet godina, svi su pitali za tebe.',
          en: 'Goran! It’s a shame you didn’t come to the celebration five years ago; everyone asked about you.',
        },
        {
          who: 'Goran',
          hr: 'Žao mi je što nisam mogao. Tada sam radio u Kanadi i nisam dobio slobodne dane.',
          en: 'I’m sorry that I couldn’t. I was working in Canada then and didn’t get the days off.',
        },
        {
          who: 'Sanja',
          hr: 'A profesorica Kovač? Voljela bih da je večeras s nama.',
          en: 'And Professor Kovač? I wish she were with us tonight.',
        },
        {
          who: 'Goran',
          hr: 'I ja. Trebao sam joj reći koliko mi je značila njezina nastava.',
          en: 'Me too. I should have told her how much her classes meant to me.',
        },
        {
          who: 'Sanja',
          hr: 'Sjećaš li se da si htio studirati glazbu?',
          en: 'Do you remember that you wanted to study music?',
        },
        {
          who: 'Goran',
          hr: 'Kako ne! Mogao sam upisati akademiju, ali sam poslušao oca i otišao na ekonomiju. Da barem nisam!',
          en: 'Of course! I could have enrolled in the academy, but I listened to my father and went into economics. If only I hadn’t!',
        },
        {
          who: 'Sanja',
          hr: 'Nikad nije kasno. Ja sam trebala naučiti voziti s osamnaest, a položila sam tek prošle godine.',
          en: 'It’s never too late. I should have learned to drive at eighteen, and I only passed the test last year.',
        },
        {
          who: 'Goran',
          hr: 'Kamo sreće da sam hrabar kao ti! Volio bih da me netko nauči svirati klavir prije pedesete.',
          en: 'If only I were as brave as you! I wish someone would teach me to play the piano before I turn fifty.',
        },
        {
          who: 'Sanja',
          hr: 'Moja kći daje satove klavira. Šteta što živiš tako daleko.',
          en: 'My daughter gives piano lessons. It’s a shame you live so far away.',
        },
        {
          who: 'Goran',
          hr: 'Na jesen se vraćam u Zagreb. Volio bih da mi daš njezin broj.',
          en: 'I’m moving back to Zagreb in the fall. I’d like you to give me her number.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Goran regret about his studies?',
          options: [
            'He enrolled in the music academy but never finished it',
            'He wanted to study economics, but his father sent him to Canada',
            'He could have enrolled in the music academy, but listened to his father and studied economics',
            'He studied music and could not find a job',
          ],
          correct: 2,
          hint: 'He had a chance, and someone’s advice turned him another way.',
          explanation:
            'Mogao je upisati akademiju, ali je poslušao oca i otišao na ekonomiju. "Da barem nisam!" — if only he hadn’t.',
        },
        {
          q: 'About his old teacher Goran says "Trebao sam joj reći", not "Trebao bih joj reći". What does his choice tell you?',
          options: [
            'He is planning to tell her soon',
            'He did not tell her, and he regrets it — the chance lies in the past',
            'He told her, but she did not listen',
            'He is not sure whether he ought to tell her',
          ],
          correct: 1,
          hint: 'One form is the plain past of the modal, the other its conditional. Which one looks back?',
          explanation:
            'Trebao sam + infinitive is "I should have" — a regret about the past. Trebao bih would be advice to himself for now: "I ought to tell her."',
        },
        {
          type: 'type',
          q: 'Now you. Sanja about her daughter: ____ je postati liječnica, ali je izabrala glazbu. (she could have — moći)',
          answer: 'Mogla',
          hint: 'A missed chance in the past is the plain past of the modal, not its conditional — and the subject is a woman.',
          explanation:
            'Mogla je postati liječnica. — "she could have become": the past of moći plus an infinitive. Mogla bi postati would be a possibility that is still open.',
        },
        {
          type: 'transform',
          q: 'Sanja states her regret as a fact. Turn it into a WISH that begins with "Da barem…" — the wish says the opposite of the fact.',
          from: 'Šteta što živiš tako daleko.',
          answer: 'Da barem ne živiš tako daleko!',
          accept: [
            'Da barem ne živiš tako daleko.',
            'Da barem živiš bliže!',
            'Da barem živiš bliže.',
            'Da barem ne živiš daleko!',
            'Da barem ne živiš daleko.',
          ],
          hint: 'The fact is that he lives far away; the wish must deny it. The verb stays in the present, because the wish is about now.',
          explanation:
            'Da barem ne živiš tako daleko! — šteta što states what is so; da barem wishes it were otherwise, with the present for a wish about now.',
        },
        {
          type: 'transform',
          q: 'Goran wishes he could play himself. Now his wish is about someone else: his son (moj sin) should play.',
          from: 'Volio bih svirati klavir.',
          answer: 'Volio bih da moj sin svira klavir.',
          accept: [
            'Volio bih da sin svira klavir.',
            'Volio bih da mi sin svira klavir.',
            'Volio bih da klavir svira moj sin.',
          ],
          hint: 'A new subject for the second verb: the infinitive has to become a clause, with the verb in the present.',
          explanation:
            'Volio bih da moj sin svira klavir. — the same subject takes the infinitive (volio bih svirati); a different subject needs da + the present.',
        },
      ],
    },
    mix: [
      6,
      4,
      {
        type: 'tf',
        q: '"Da barem imam psa!" — the speaker has a dog.',
        answer: false,
        hint: 'A wish is made about something that is not so.',
        explanation:
          'False. Da barem + the present wishes for what is not true now: he has no dog, and wishes he had one.',
      },
      5,
      7,
      {
        type: 'sort',
        q: 'Is the speaker talking about NOW, or looking back at the PAST?',
        groups: ['Now — advice or a possibility', 'The past — a regret or a missed chance'],
        items: [
          { hr: 'Trebao bi više spavati.', group: 0 },
          { hr: 'Trebao si više spavati.', group: 1 },
          { hr: 'Mogla bih ti pomoći.', group: 0 },
          { hr: 'Mogla sam ti pomoći.', group: 1 },
          { hr: 'Trebali bismo krenuti.', group: 0 },
          { hr: 'Trebali smo krenuti.', group: 1 },
        ],
        explanation:
          'With the conditional (bi, bih, bismo) the modal speaks about now: you should, I could, we ought to. With the plain past (si, sam, smo) it looks back: you should have, I could have, we should have.',
      },
      0,
      {
        type: 'match',
        q: 'What is the situation behind each sentence?',
        pairs: [
          ['Da barem imam auto!', 'Right now I have no car.'],
          ['Šteta što si prodao auto.', 'You got rid of your car, and I think that is a pity.'],
          ['Trebala sam kupiti auto.', 'Back then I decided not to buy one.'],
          [
            'Mogla sam voziti, ali nisam htjela.',
            'Driving was possible for me, but I chose not to.',
          ],
          ['Voljela bih da ti voziš.', 'My wish is about you: you at the wheel.'],
        ],
        explanation:
          'da barem — a wish against a present fact; šteta što — regret about a real fact; trebala sam — I should have; mogla sam — I could have; voljela bih da — a wish about someone else.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "If only we had set off earlier!"',
        words: ['Da', 'smo', 'barem', 'krenuli', 'ranije!'],
        accept: ['Da smo barem ranije krenuli!'],
        explanation:
          'Da smo barem krenuli ranije! The short word smo keeps its second place, right after da, so barem follows it.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("You should have called me yesterday." — said to a man)',
        words: ['Jučer', 'bi', 'me', 'trebao', 'nazvati.'],
        wrong: 1,
        answer: 'si',
        hint: 'The conditional gives advice for now. What does a reproach about the past need instead?',
        explanation:
          'Jučer si me trebao nazvati. — "should have" is the plain past of trebati. With bi the sentence would be advice for the present, which cannot go with jučer.',
      },
      11,
      {
        type: 'transform',
        q: 'This is her advice to herself for now. The exam is over and she failed: turn the advice into a regret about the past.',
        from: 'Trebala bih više učiti.',
        answer: 'Trebala sam više učiti.',
        accept: ['Trebala sam učiti više.', 'Trebala sam više učiti!'],
        hint: 'One small word changes: the conditional auxiliary gives way to the auxiliary of the perfect.',
        explanation:
          'Trebala sam više učiti. — "I should have studied more." English speakers reach for the conditional here; Croatian uses the plain past of trebati.',
      },
      {
        type: 'listen',
        audio: 'Mogli smo kupiti stan na moru dok su cijene bile niske, ali smo čekali predugo.',
        q: 'What happened?',
        options: [
          'They bought an apartment by the sea while prices were low',
          'They could not afford an apartment by the sea',
          'They had the chance to buy an apartment by the sea, but waited too long',
          'They sold their apartment by the sea too early',
        ],
        correct: 2,
        explanation:
          'Mogli smo kupiti — "we could have bought": a missed chance. ali smo čekali predugo — they waited too long.',
      },
      {
        type: 'dictate',
        audio: 'Žao mi je što kasnim.',
        answer: 'Žao mi je što kasnim.',
        hint: 'Five words: "I’m sorry that I am late."',
        explanation:
          'Žao mi je što kasnim. — the thing regretted is a fact, so the clause is introduced by što.',
      },
    ],
  },

  // ── Film and music ─────────────────────────────────────────────────────────
  'film-and-music': {
    text: {
      kind: 'text',
      title: 'Večer u Areni',
      lines: [
        {
          hr: 'Sinoć sam prvi put gledala film u pulskoj Areni, pod vedrim nebom.',
          en: 'Last night I watched a movie in the Pula Arena for the first time, under the open sky.',
        },
        {
          hr: 'Budući da festival traje samo tjedan dana, karte smo kupili još u lipnju.',
          en: 'Since the festival lasts only a week, we had bought the tickets back in June.',
        },
        {
          hr: 'Prije glavnog filma prikazali su kratki crtani film iz Zagrebačke škole, koji je publiku nasmijao do suza.',
          en: 'Before the main movie they showed a short cartoon from the Zagreb School, which made the audience laugh to tears.',
        },
        {
          hr: 'Nisam znala da je upravo jedan takav film, Surogat, prije više od šezdeset godina dobio Oscara.',
          en: 'I did not know that just such a film, Surogat, won an Oscar more than sixty years ago.',
        },
        {
          hr: 'Glavni film priča je o ribaru s Visa koji cijeli život sanja o tome da zapjeva u klapi.',
          en: 'The main movie is the story of a fisherman from Vis who has dreamed all his life of singing in a klapa.',
        },
        {
          hr: 'Likovi govore dalmatinski pa sam prvih deset minuta jedva razumjela što je „ćakula“ i zašto svi idu „na đir“.',
          en: 'The characters speak Dalmatian, so for the first ten minutes I barely understood what a "ćakula" is and why everyone goes "na đir".',
        },
        {
          hr: 'Glumac koji igra ribara zaslužio je nagradu: u jednoj sceni ne kaže ni riječ, a sve razumijemo.',
          en: 'The actor who plays the fisherman deserved an award: in one scene he does not say a word, and we understand everything.',
        },
        {
          hr: 'Kad je na kraju zapjevala prava klapa, s njom je pjevalo pola Arene.',
          en: 'When a real klapa started to sing at the end, half the Arena sang along with it.',
        },
        {
          hr: 'Da festival traje cijelo ljeto, išla bih svaku večer.',
          en: 'If the festival lasted all summer, I would go every evening.',
        },
        {
          hr: 'Ovako mi ostaju samo fjaka na plaži i pjesma koja mi ne izlazi iz glave.',
          en: 'As it is, all I am left with is fjaka on the beach and a song I can’t get out of my head.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what was shown before the main movie, and how did the audience take it?',
          options: [
            'A long documentary about Vis; half the audience left',
            'A commercial for the festival; nobody paid attention',
            'A short cartoon from the Zagreb School; the audience laughed to tears',
            'A klapa concert; everyone sang along',
          ],
          correct: 2,
          hint: 'It was short, it was drawn, and it came from a famous Zagreb tradition.',
          explanation:
            'Prikazali su kratki crtani film iz Zagrebačke škole, koji je publiku nasmijao do suza. The klapa sang at the very end.',
        },
        {
          q: 'Why did the author barely understand the first ten minutes of the main movie?',
          options: [
            'The sound in the Arena was bad',
            'The characters speak Dalmatian dialect, with words that are not standard Croatian',
            'The movie was in Italian with small subtitles',
            'She arrived late and missed the beginning',
          ],
          correct: 1,
          hint: 'She quotes two of the words that puzzled her.',
          explanation:
            'Likovi govore dalmatinski: ćakula and đir are dialect words. Croatian movies often let characters speak their own dialect — it tells you at once where they are from.',
        },
        {
          type: 'type',
          q: 'Now you, in standard Croatian. Dvije susjede sjede pred kućom i vole dobru ćakulu, to jest dobar ____.',
          answer: 'razgovor',
          hint: 'The standard noun for what two people have when they sit and talk — masculine, as dobar shows.',
          explanation:
            'ćakula is Dalmatian for razgovor or čavrljanje — a chat. Understand it on screen; write the standard word.',
        },
        {
          type: 'transform',
          q: 'Say it from the other side: make the audience (publika) the subject — the one who laughed.',
          from: 'Crtani film nasmijao je publiku do suza.',
          answer: 'Publika se nasmijala do suza.',
          accept: [
            'Publika se do suza nasmijala.',
            'Publika se smijala do suza.',
            'Publika se do suza smijala.',
            'Publika se nasmijala do suza crtanom filmu.',
            'Publika se nasmijala crtanom filmu do suza.',
          ],
          hint: 'Now nobody is making anyone laugh — the audience laughs by itself, so the verb needs its reflexive word. And publika is one feminine noun, however many people it holds.',
          explanation:
            'Publika se nasmijala do suza. — nasmijati nekoga is to make somebody laugh; nasmijati se is to laugh. publika is feminine singular, so the participle is nasmijala, and se sits in second place.',
        },
        {
          type: 'transform',
          q: 'Join the two into one sentence about the movie: "The movie that the director made won an award."',
          from: 'Redateljica je snimila film. Film je dobio nagradu.',
          answer: 'Film koji je redateljica snimila dobio je nagradu.',
          accept: [
            'Film koji je snimila redateljica dobio je nagradu.',
            'Film koji je redateljica snimila je dobio nagradu.',
            'Film koji je snimila redateljica je dobio nagradu.',
            'Film što ga je snimila redateljica dobio je nagradu.',
          ],
          hint: 'The relative pronoun is the OBJECT of snimila — but for a masculine thing that form looks just like the nominative. The short word je follows it.',
          explanation:
            'Film koji je redateljica snimila dobio je nagradu. — koji is the accusative here (she made it); for an inanimate masculine noun it equals the nominative.',
        },
      ],
    },
    mix: [
      8,
      10,
      {
        type: 'tf',
        q: 'Zagrebačka škola crtanog filma poznata je po bogatim, realističnim crtežima i brzim pokretima.',
        answer: false,
        hint: 'Recall how the style was described: the drawings, and how much moves on the screen.',
        explanation:
          'False. Just the opposite: simple, stylized drawings and few movements, with stories for adults as much as for children — that economy made the Zagreb School famous.',
      },
      9,
      11,
      6,
      {
        type: 'match',
        q: 'Characters on screen speak dialect. Match each word to its standard partner or its meaning.',
        pairs: [
          ['đir', 'šetnja'],
          ['fjaka', 'a sleepy, idle mood in the heat'],
          ['šjor', 'gospodin'],
          ['kaj', 'što — as said in Zagreb and the north'],
          ['ča', 'što — as said in Istria and on the islands'],
        ],
        explanation:
          'đir, fjaka and šjor are Dalmatian; kaj is kajkavian and ča is čakavian — both dialects are named after their word for "what".',
      },
      1,
      {
        type: 'sort',
        q: 'Where are you this evening? Some of these take "u", others "na".',
        groups: ['u — inside a building', 'na — at an event'],
        items: [
          { hr: 'kino', group: 0 },
          { hr: 'koncert', group: 1 },
          { hr: 'kazalište', group: 0 },
          { hr: 'festival', group: 1 },
          { hr: 'muzej', group: 0 },
          { hr: 'premijera', group: 1 },
          { hr: 'izložba', group: 1 },
        ],
        explanation:
          'A building takes u: u kinu, u kazalištu, u muzeju. An event takes na: na koncertu, na festivalu, na premijeri, na izložbi.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order: "The festival has been held in the Arena since 1954."',
        words: ['Festival', 'se', 'u', 'Areni', 'održava', 'od', '1954.', 'godine.'],
        accept: [
          'Festival se održava u Areni od 1954. godine.',
          'Festival se od 1954. godine održava u Areni.',
          'Od 1954. godine festival se održava u Areni.',
          'Od 1954. godine festival se u Areni održava.',
          'U Areni se festival održava od 1954. godine.',
          'U Areni se od 1954. godine održava festival.',
          'Od 1954. godine u Areni se održava festival.',
          'Festival se u Areni od 1954. godine održava.',
          'U Areni se festival od 1954. godine održava.',
        ],
        explanation:
          'Festival se u Areni održava od 1954. godine. Croatian uses the present for something that began in the past and still goes on; se sits in second place.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Music therapy helps children with difficulties.")',
        words: ['Glazbena', 'terapija', 'pomaže', 'djecu', 's', 'teškoćama.'],
        wrong: 3,
        answer: 'djeci',
        hint: 'Which case does this verb take for the person who is helped?',
        explanation:
          'Glazbena terapija pomaže djeci s teškoćama. — pomagati takes the dative: pomaže djeci, pomaže starijim ljudima.',
      },
      0,
      {
        type: 'transform',
        q: 'Make the festival the subject of the sentence — use the passive participle.',
        from: 'Festival u Puli osnovali su 1954. godine.',
        answer: 'Festival u Puli osnovan je 1954. godine.',
        accept: [
          'Festival u Puli je osnovan 1954. godine.',
          'Festival u Puli bio je osnovan 1954. godine.',
          'Festival je u Puli osnovan 1954. godine.',
        ],
        hint: 'The participle in -n agrees with a masculine singular subject, and the auxiliary changes from "they" to "it".',
        explanation:
          'Festival u Puli osnovan je 1954. godine. — osnovati → osnovan; the festival is now the subject, so the auxiliary is je.',
      },
      5,
      {
        type: 'listen',
        audio:
          'Na Animafestu smo gledali deset kratkih filmova, a najviše nam se svidio onaj u kojem nitko ne govori.',
        q: 'Which film did they like best?',
        options: [
          'The longest of the ten',
          'The one in which nobody speaks',
          'The one with the best music',
          'None of them',
        ],
        correct: 1,
        explanation:
          'najviše nam se svidio onaj u kojem nitko ne govori — the one in which nobody speaks. A good animated film needs no words.',
      },
      {
        type: 'dictate',
        audio: 'Večeras idemo na koncert klape.',
        answer: 'Večeras idemo na koncert klape.',
        hint: 'Five words: "Tonight we are going to a klapa concert."',
        explanation:
          'Večeras idemo na koncert klape. — na + the accusative for going to an event; klape is the genitive: a concert of a klapa.',
      },
    ],
  },

  // ── Shades of modality ─────────────────────────────────────────────────────
  'modal-nuance': {
    text: {
      kind: 'dialogue',
      title: 'Kod liječnice',
      lines: [
        {
          who: 'Liječnica',
          hr: 'Gospodine Horvat, nalazi nisu loši, ali trebali biste malo promijeniti navike.',
          en: 'Mr. Horvat, your test results are not bad, but you should change your habits a little.',
        },
        {
          who: 'Pacijent',
          hr: 'Moram li prestati piti kavu? Bez nje ne mogu raditi.',
          en: 'Do I have to stop drinking coffee? I can’t work without it.',
        },
        {
          who: 'Liječnica',
          hr: 'Ne morate, ali ne biste smjeli piti više od dvije šalice na dan.',
          en: 'You don’t have to, but you shouldn’t be drinking more than two cups a day.',
        },
        {
          who: 'Pacijent',
          hr: 'A kobasice? Supruga kaže da ih ne smijem ni pogledati.',
          en: 'And sausages? My wife says I am not allowed even to look at them.',
        },
        {
          who: 'Liječnica',
          hr: 'Supruga malo pretjeruje. Smijete ih jesti, samo ne svaki dan.',
          en: 'Your wife is exaggerating a little. You may eat them, just not every day.',
        },
        {
          who: 'Pacijent',
          hr: 'Mogao bih opet početi plivati. A tlak? Mora da je visok, stalno me boli glava.',
          en: 'I could start swimming again. And my blood pressure? It must be high; I have a headache all the time.',
        },
        {
          who: 'Liječnica',
          hr: 'Plivanje bi sigurno pomoglo — možda biste mogli početi s dva puta tjedno. Tlak Vam je vjerojatno malo povišen zbog stresa; trebalo bi ga mjeriti svako jutro.',
          en: 'Swimming would certainly help — maybe you could start with twice a week. Your blood pressure is probably a little elevated because of stress; it ought to be measured every morning.',
        },
        {
          who: 'Pacijent',
          hr: 'Dobro. Znači, manje kave i manje kobasica. Moram li reći supruzi da je imala pravo?',
          en: 'All right. So, less coffee and fewer sausages. Do I have to tell my wife that she was right?',
        },
        {
          who: 'Liječnica',
          hr: 'To ne morate. Ali mogli biste!',
          en: 'That you don’t have to do. But you could!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does the doctor say about coffee?',
          options: [
            'He must give it up completely',
            'He may drink as much as he likes',
            'He does not have to give it up, but he should not drink more than two cups a day',
            'He may drink it only in the morning',
          ],
          correct: 2,
          hint: 'She denies an obligation first, and then sets a limit.',
          explanation:
            'Ne morate — there is no need to stop. Ali ne biste smjeli piti više od dvije šalice — a softened limit: "you shouldn’t".',
        },
        {
          q: 'The doctor opens with "trebali biste malo promijeniti navike", not "morate promijeniti navike". Why?',
          options: [
            'She is not sure the test results are his',
            'She is advising, not ordering — the conditional turns the volume down',
            'She is talking about something he failed to do in the past',
            'The plain form cannot be used with Vi',
          ],
          correct: 1,
          hint: 'Imagine both sentences said aloud to a patient. Which one could he still politely decline?',
          explanation:
            'morate is an instruction; trebali biste is ordinary advice. The conditional is the volume knob of Croatian modals — and the tactful choice with a person in front of you.',
        },
        {
          type: 'type',
          q: 'Now you. At home his wife is kinder than he expected: Ne ____ baš sve promijeniti odjednom. (ti — you don’t have to)',
          answer: 'moraš',
          accept: ['trebaš'],
          hint: '"No need" is the negated verb of obligation — not the verb of permission, whose negative forbids.',
          explanation:
            'Ne moraš sve promijeniti. — "you don’t have to": no obligation. Ne smiješ would mean the opposite kind of thing: you are not allowed to.',
        },
        {
          type: 'transform',
          q: 'This sounds like an order. Turn it into ordinary friendly advice to a male friend: "You should sleep more."',
          from: 'Moraš više spavati.',
          answer: 'Trebao bi više spavati.',
          accept: [
            'Trebao bi spavati više.',
            'Ti bi trebao više spavati.',
            'Trebao bi više spavati!',
          ],
          hint: 'Change the modal to the one for "should", and put it into the conditional for ti.',
          explanation:
            'Trebao bi više spavati. — the participle of trebati plus bi: advice he is free to ignore. Moraš leaves him no choice.',
        },
        {
          type: 'transform',
          q: 'A guard says this to a driver, but he is talking about a RULE, not about what the driver is able to do. Say it with the right modal (Vi).',
          from: 'Ne možete ovdje parkirati.',
          answer: 'Ne smijete ovdje parkirati.',
          accept: ['Ne smijete parkirati ovdje.', 'Ovdje ne smijete parkirati.'],
          hint: 'The modal of permission. The doctor uses it, without ne, when she talks about sausages.',
          explanation:
            'Ne smijete ovdje parkirati. — ne smjeti forbids; ne moći says you are unable. A rule is about permission.',
        },
      ],
    },
    mix: [
      4,
      6,
      {
        type: 'tf',
        q: 'Someone who says "Mora da su već stigli" has seen them arrive.',
        answer: false,
        hint: 'Mora da + a clause is not about duty. What is the speaker doing with the evidence he has?',
        explanation:
          'False. Mora da + a clause is a guess from evidence — "they must have arrived by now". The speaker has not seen it, and nobody is obliged to do anything.',
      },
      5,
      7,
      {
        type: 'sort',
        q: 'How strong is it?',
        groups: ['An order or a rule', 'Advice', 'A gentle suggestion'],
        items: [
          { hr: 'Moraš platiti kaznu.', group: 0 },
          { hr: 'Trebao bi nazvati majku.', group: 1 },
          { hr: 'Mogao bi probati jogu.', group: 2 },
          { hr: 'Ne smiješ kasniti.', group: 0 },
          { hr: 'Trebala bi manje raditi.', group: 1 },
          { hr: 'Možda bismo mogli izaći.', group: 2 },
        ],
        explanation:
          'The plain forms moraš and ne smiješ state rules. trebao bi / trebala bi is ordinary advice. mogao bi — and even more možda bismo mogli — only suggests.',
      },
      1,
      {
        type: 'match',
        q: 'Obligation, deduction, permission? Match each sentence to its meaning.',
        pairs: [
          ['Mora ići kući.', 'He is obliged to go home.'],
          ['Mora biti kod kuće.', 'I conclude that he is at home.'],
          ['Ne mora ići kući.', 'There is no need for him to go home.'],
          ['Ne smije ići kući.', 'Going home is forbidden to him.'],
          ['Mogao bi ići kući.', 'Going home is one possibility for him.'],
        ],
        explanation:
          'morati + an action is an obligation; mora biti is a deduction, like English "he must be". ne morati removes the obligation; ne smjeti forbids; mogao bi only suggests.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Children are not allowed on the beach alone.")',
        words: ['Djeca', 'ne', 'smije', 'sama', 'na', 'plažu.'],
        wrong: 2,
        answer: 'smiju',
        hint: 'The modal is the right one. Look at how it agrees with its subject.',
        explanation:
          'Djeca ne smiju sama na plažu. — djeca is a collective noun that takes a plural verb: djeca smiju, djeca su.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "It could be said that the movie is too long."',
        words: ['Moglo', 'bi', 'se', 'reći', 'da', 'je', 'film', 'predug.'],
        explanation:
          'Moglo bi se reći da je film predug. The impersonal conditional names nobody — this is how criticism is delivered politely.',
      },
      2,
      {
        type: 'transform',
        q: 'Take this order to a male friend all the way down the volume scale: a gentle "maybe you could…".',
        from: 'Moraš razgovarati s njim.',
        answer: 'Možda bi mogao razgovarati s njim.',
        accept: [
          'Možda bi mogao s njim razgovarati.',
          'Mogao bi možda razgovarati s njim.',
          'Možda bi ti mogao razgovarati s njim.',
          'Možda bi s njim mogao razgovarati.',
        ],
        hint: 'Three steps: the modal of possibility instead of obligation, the conditional, and one more softening adverb in front.',
        explanation:
          'Možda bi mogao razgovarati s njim. — moći in the conditional is a suggestion; možda on top makes it the gentlest form on the scale.',
      },
      9,
      {
        type: 'listen',
        audio: 'Ne morate doći na sastanak, ali ne smijete zaboraviti poslati izvještaj do petka.',
        q: 'What is expected of the listener?',
        options: [
          'To come to the meeting and to send the report',
          'Not to come to the meeting under any circumstances',
          'Nothing — neither the meeting nor the report is needed',
          'The meeting is optional, but the report must not be forgotten',
        ],
        correct: 3,
        explanation:
          'Ne morate doći — no obligation to come. Ne smijete zaboraviti — you must not forget: the report is due by Friday.',
      },
      {
        type: 'dictate',
        audio: 'Smijem li otvoriti prozor?',
        answer: 'Smijem li otvoriti prozor?',
        hint: 'Four words: "May I open the window?"',
        explanation:
          'Smijem li otvoriti prozor? — smjeti asks for permission; li follows the verb in a yes/no question.',
      },
    ],
  },
};
