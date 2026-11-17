// ─── B1 lessons in class order — Units 7–8 (lessons 31–40) ───────────────────
// Same shape and rules as the A1 and A2 class files (a1class/, a2class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, the B1 lessons before each lesson, and the lesson itself have
// taught. No koji-clauses before relative-koji; no čiji / ono što before
// relative-deep; the declined ni- words (nikoga, nikome, ničega) only from
// indefinites on; the -jem / -nem presents (prodajem, ostanem) only in the last lesson.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.
// The existing typed items stand BEFORE anything that prints their answer.

export const CLASS_B1_U07_08 = {
  // ══ UNIT 7 ═════════════════════════════════════════════════════════════════

  // ── Neuter nouns that grow: ime, imena; dijete, djeteta ────────────────────
  'nouns-en-et': {
    text: {
      kind: 'dialogue',
      title: 'Kod bake na selu',
      lines: [
        {
          who: 'Baka',
          hr: 'Tine, napokon! Ti nikad nemaš vremena za svoju baku.',
          en: 'Tin, at last! You never have time for your grandma.',
        },
        {
          who: 'Tin',
          hr: 'Imam, bako, ali u zadnje vrijeme puno radim. Doveo sam ti i djecu: Lana nosi kolače, a mali Jakov spava na mom ramenu.',
          en: 'I do, Grandma, but lately I have been working a lot. I brought you the children too: Lana is carrying the cakes, and little Jakov is asleep on my shoulder.',
        },
        {
          who: 'Baka',
          hr: 'Daj mi to dijete! S djetetom na ramenu ne možeš ni kavu popiti.',
          en: 'Give me that child! With a child on your shoulder you cannot even drink a coffee.',
        },
        {
          who: 'Lana',
          hr: 'Bako, je li istina da imaš novo tele? Kako mu je ime?',
          en: 'Grandma, is it true that you have a new calf? What is its name?',
        },
        {
          who: 'Baka',
          hr: 'Još nema imena. Rodilo se prije tri dana, a ja nemam vremena razmišljati o imenima.',
          en: 'It has no name yet. It was born three days ago, and I have no time to think about names.',
        },
        {
          who: 'Lana',
          hr: 'Onda ću mu ja dati ime! Zvat će se Šarko.',
          en: 'Then I will give it a name! It will be called Šarko.',
        },
        {
          who: 'Baka',
          hr: 'Lijepo ime. Dođi, pokazat ću ti i janjad. Po ovako lijepom vremenu janjad je cijeli dan na livadi.',
          en: 'A nice name. Come, I will show you the lambs too. In weather this nice the lambs are out in the meadow all day.',
        },
        {
          who: 'Tin',
          hr: 'Samo oprezno, Lana. Teletu moraš prići polako, jer se boji djece.',
          en: 'Just be careful, Lana. You have to approach the calf slowly, because it is afraid of children.',
        },
        {
          who: 'Baka',
          hr: 'Ma kakvi! To je tele hrabrije od svakog djeteta.',
          en: 'Nonsense! That calf is braver than any child.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does the calf still not have, and who decides to give it one?',
          options: [
            'It has no stable yet; Tin will build one',
            'It has no name yet; Lana will give it one',
            'It has no name yet; Grandma will choose one on Sunday',
            'It has no milk yet; Lana will bring some',
          ],
          correct: 1,
          hint: 'Think of Lana’s first question about the calf, and of what she announces right after Grandma’s answer.',
          explanation:
            'The calf was born three days ago and still has no name (Još nema imena). Lana says: Onda ću mu ja dati ime!',
        },
        {
          q: 'Grandma has many lambs, yet she says "janjad je cijeli dan na livadi" — with je, not su. Why?',
          options: [
            'Because only one lamb is in the meadow today',
            'Because livada is a singular noun',
            'Because janjad is a collective: grammatically one feminine noun, so the verb is singular',
            'Because je is always used when speaking about animals',
          ],
          correct: 2,
          hint: 'Janjad means many lambs, but look at the word itself: is it built like a plural?',
          explanation:
            'The young animals have a collective in -ad — janjad, telad, pilad — which behaves as ONE feminine noun and takes a singular verb: Janjad je na livadi. Janjad pase.',
        },
        {
          type: 'type',
          q: 'Now you. Grandma also has a kitten — malo mače. Lana gives it some milk: Lana daje mlijeko ____.',
          answer: 'mačetu',
          hint: 'To whom does she give it? You need the dative — and the young add -et- before the ending.',
          explanation:
            'Lana daje mlijeko mačetu. — mače grows by -et- as soon as it takes an ending, exactly like tele → teletu.',
        },
        {
          type: 'type',
          q: 'Tin has two children, Lana and Jakov. Finish Grandma’s sentence: Imaš dvoje ____.',
          answer: 'djece',
          hint: 'After dvoje comes the genitive of the plural word for children — a word declined like the singular of žena.',
          explanation:
            'Imaš dvoje djece. — the plural of dijete is djeca, and its genitive is djece, like žene.',
        },
        {
          type: 'transform',
          q: 'Tin plays with both children. Say it about ONE child only.',
          from: 'Tin se igra s djecom.',
          answer: 'Tin se igra s djetetom.',
          hint: 'Go back to the singular, dijete. After s it needs the instrumental — and the long ije shortens before the extension.',
          explanation:
            'Tin se igra s djetetom. — dijete shortens ije to je and adds -et- before the ending: djeteta, djetetu, djetetom.',
        },
      ],
    },
    mix: [
      9,
      12,
      {
        type: 'match',
        q: 'Whose young one is it? Match each young one to its parent.',
        pairs: [
          ['tele', 'krava'],
          ['janje', 'ovca'],
          ['pile', 'kokoš'],
          ['štene', 'pas'],
          ['unuče', 'baka i djed'],
        ],
        explanation:
          'A calf belongs to a cow, a lamb to a sheep (ovca), a chick to a hen, a puppy to a dog — and a grandchild to Grandma and Grandpa. All five young ones add -et- before an ending.',
      },
      10,
      3,
      {
        type: 'sort',
        q: 'Is the sentence about ONE young one, or about SEVERAL? Mind the collective nouns.',
        groups: ['One young one', 'Several young ones'],
        items: [
          { hr: 'Tele pije mlijeko.', group: 0 },
          { hr: 'Telad pije mlijeko.', group: 1 },
          { hr: 'Dijete se igra.', group: 0 },
          { hr: 'Djeca se igraju.', group: 1 },
          { hr: 'Janjad spava.', group: 1 },
          { hr: 'Janje spava.', group: 0 },
        ],
        explanation:
          'Telad and janjad mean several animals, but each is one feminine collective noun, so the verb stays singular: Telad pije, Janjad spava. Djeca takes a plural verb: Djeca se igraju.',
      },
      13,
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Lately I have no time for friends."',
        words: ['U', 'zadnje', 'vrijeme', 'nemam', 'vremena', 'za', 'prijatelje.'],
        accept: [
          'Nemam vremena za prijatelje u zadnje vrijeme.',
          'U zadnje vrijeme za prijatelje nemam vremena.',
          'Za prijatelje u zadnje vrijeme nemam vremena.',
          'Nemam u zadnje vrijeme vremena za prijatelje.',
          'U zadnje vrijeme vremena za prijatelje nemam.',
          'Za prijatelje nemam vremena u zadnje vrijeme.',
          'U zadnje vrijeme nemam za prijatelje vremena.',
        ],
        explanation:
          'U zadnje vrijeme nemam vremena za prijatelje. The same word twice: the bare accusative in the phrase u zadnje vrijeme, and the genitive with -en- after nemam.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Potpišite', 'se', 'imenom', 'i', 'prezimom.'],
        wrong: 4,
        answer: 'prezimenom',
        hint: 'Both nouns end in -me, so both need the same extension before the ending.',
        explanation:
          'Potpišite se imenom i prezimenom. — prezime is a -me noun like ime: the -en- comes before every ending.',
      },
      4,
      {
        type: 'tf',
        q: '„Igračke moje djece” means the toys of ONE child.',
        answer: false,
        hint: 'Is djece a form of dijete, or of djeca?',
        explanation:
          'False. Djece is the genitive of djeca, so these are the toys of several children. For one child it would be igračke mog djeteta.',
      },
      5,
      {
        type: 'transform',
        q: 'She bought ice cream for one child. Say that she bought it for several children.',
        from: 'Kupila sam djetetu sladoled.',
        answer: 'Kupila sam djeci sladoled.',
        accept: ['Djeci sam kupila sladoled.', 'Kupila sam sladoled djeci.'],
        hint: 'The plural of dijete is a different word, and it is declined like the singular of žena.',
        explanation:
          'Kupila sam djeci sladoled. — djeca in the dative, like ženi. There is no plural built from dijete itself.',
      },
      7,
      0,
      2,
      {
        type: 'listen',
        audio: 'Nemam vremena, moram dijete odvesti liječniku.',
        q: 'Why does the speaker have no time?',
        options: [
          'She has to take the child to the doctor',
          'She has to pick the children up from school',
          'She is waiting for the doctor at home',
          'The weather is too bad to go out',
        ],
        correct: 0,
        explanation:
          'Moram dijete odvesti liječniku — I have to take the child to the doctor. Dijete is the bare accusative: one child, no extension.',
      },
      {
        type: 'dictate',
        audio: 'Kako je ime tvom djetetu?',
        answer: 'Kako je ime tvom djetetu?',
        accept: ['Kako je ime tvojem djetetu?', 'Kako je ime tvome djetetu?'],
        hint: 'Five words: "What is your child’s name?"',
        explanation:
          'Kako je ime tvom djetetu? — ime is the bare nominative; djetetu is the dative of dijete, with -et-.',
      },
    ],
  },

  // ── Verbs with a hidden consonant: peći, pečem; krasti, kradem ─────────────
  'verbs-peci-sti': {
    text: {
      kind: 'dialogue',
      title: 'Tko je pojeo kolače?',
      lines: [
        {
          who: 'Mama',
          hr: 'Filipe, reci mi istinu: tko je pojeo kolače? Jučer sam ih pekla cijelo poslijepodne.',
          en: 'Filip, tell me the truth: who ate the cakes? I spent the whole afternoon baking them yesterday.',
        },
        {
          who: 'Filip',
          hr: 'Nisam ja, mama! Ja ne kradem kolače. Možda ih je ukrao pas.',
          en: 'It wasn’t me, Mom! I don’t steal cakes. Maybe the dog stole them.',
        },
        {
          who: 'Mama',
          hr: 'Pas ne može otvoriti ormar. A zašto onda vučeš tu torbu u svoju sobu?',
          en: 'A dog cannot open the cupboard. And why are you dragging that bag to your room, then?',
        },
        {
          who: 'Filip',
          hr: 'Dobro, reći ću ti. Pojeo sam dva, ali samo zato što baka kaže da djeca rastu od kolača.',
          en: 'All right, I will tell you. I ate two, but only because Grandma says that children grow from cakes.',
        },
        {
          who: 'Baka',
          hr: 'To sam rekla, istina je. Ali nisam rekla da ih smiješ krasti!',
          en: 'I did say that, it is true. But I did not say you may steal them!',
        },
        {
          who: 'Mama',
          hr: 'Vas dvoje ste isti! Ti, mama, pleteš i šutiš, a on jede moje kolače.',
          en: 'You two are just the same! You, Mom, knit and keep quiet, and he eats my cakes.',
        },
        {
          who: 'Baka',
          hr: 'Ne ljuti se. Sutra pečemo Filip i ja. Ako može jesti kolače, može ih i peći.',
          en: 'Don’t be angry. Tomorrow Filip and I are baking. If he can eat cakes, he can bake them too.',
        },
        {
          who: 'Filip',
          hr: 'Mogu, bako! Ali reci mami da onda ja jedem prvi.',
          en: 'I can, Grandma! But tell Mom that I get to eat first, then.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how many cakes did Filip eat, and what is his excuse?',
          options: [
            'One, because the dog ate the rest',
            'Two, because Grandma says children grow from cakes',
            'Three, because he was hungry after school',
            'None — the dog stole them all',
          ],
          correct: 1,
          hint: 'He first blames the dog, then admits a number — and blames something a third person said.',
          explanation:
            'Pojeo sam dva, ali samo zato što baka kaže da djeca rastu od kolača. — two, and it is Grandma’s fault.',
        },
        {
          q: 'Filip says "reći ću ti", but "baka kaže" — he does not say "baka reče". Why?',
          options: [
            'Because reći is used only in commands',
            'Because reći means one finished act of saying; for what someone says in general, Croatian uses kazati',
            'Because kazati is the polite verb for older people',
            'Because reći has no present tense at all',
          ],
          correct: 1,
          hint: 'Is Grandma saying it once, right now and finished — or is it something she says as a rule?',
          explanation:
            'Reći is perfective: one completed act (reći ću ti, rekla sam, reci!). Its present rečem appears only after kad, ako or da. For what someone says as a rule, Croatian uses kazati instead: baka kaže.',
        },
        {
          type: 'type',
          q: 'Now you. Tomorrow Grandma and Filip bake together. Mama tells a neighbor: Sutra oni ____ kolače. (peći)',
          answer: 'peku',
          hint: 'The oni ending is -u — and before u the hidden consonant stays as it is.',
          explanation:
            'Sutra oni peku kolače. — the hidden k turns into č only before e (pečem, peče); before -u it stays.',
        },
        {
          type: 'type',
          q: 'Grandma spent the whole winter knitting: Baka je cijelu zimu ____ šal. (plesti)',
          answer: 'plela',
          hint: 'Past tense, feminine. The consonant that plesti hides shows in the present — and disappears in the past.',
          explanation:
            'Baka je cijelu zimu plela šal. — plesti hides a t (pletem), and a hidden d or t drops out in the past: pleo, plela.',
        },
        {
          type: 'transform',
          q: 'Mama said this to Filip alone. Now she says it to Filip and Grandma together.',
          from: 'Reci mi tko je pojeo kolače!',
          answer: 'Recite mi tko je pojeo kolače!',
          hint: 'The command keeps its c; it only needs the ending for more than one person.',
          explanation:
            'Recite mi tko je pojeo kolače! — before the -i of the command the hidden k is c: reci, recite.',
        },
      ],
    },
    mix: [
      7,
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['teći', 'to flow'],
          ['vući', 'to pull'],
          ['krasti', 'to steal'],
          ['plesti', 'to knit'],
          ['gristi', 'to bite'],
        ],
        explanation:
          'Five verbs whose infinitive hides a consonant: a k in teći and vući, a d in krasti, a t in plesti, a z in gristi. The present brings it back.',
      },
      8,
      0,
      9,
      13,
      {
        type: 'sort',
        q: 'Who is doing it, and when? Sort by the form of the verb.',
        groups: ['Now — one person', 'Now — several people', 'In the past'],
        items: [
          { hr: 'Jede juhu.', group: 0 },
          { hr: 'Jedu juhu.', group: 1 },
          { hr: 'Jeo je juhu.', group: 2 },
          { hr: 'Plete šal.', group: 0 },
          { hr: 'Pletu šal.', group: 1 },
          { hr: 'Pleo je šal.', group: 2 },
        ],
        explanation:
          'The present shows the hidden consonant: jede, jedu (d); plete, pletu (t). In the past a hidden d or t disappears: jeo, pleo.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "I have to tell you something important."',
        words: ['Moram', 'ti', 'nešto', 'važno', 'reći.'],
        accept: [
          'Moram ti reći nešto važno.',
          'Nešto važno ti moram reći.',
          'Nešto ti važno moram reći.',
          'Nešto važno moram ti reći.',
        ],
        explanation:
          'Moram ti nešto važno reći. After moram comes the infinitive reći — one act of telling — and the short word ti takes second place.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Konji', 'vuču', 'kola', 'kroz', 'selo.'],
        wrong: 1,
        answer: 'vuku',
        hint: 'Several horses: the oni form. Before its ending the hidden consonant does not change.',
        explanation:
          'Konji vuku kola kroz selo. — k turns into č only before e: vučem, vuče. Before the oni ending -u it stays.',
      },
      12,
      {
        type: 'tf',
        q: 'To ask a friend "What are you saying?", you can say „Što rečeš?”',
        answer: false,
        hint: 'Reći is perfective. Can a perfective present describe something happening right now?',
        explanation:
          'False. For what is being said right now Croatian uses kazati: Što kažeš? The present of reći appears only after kad, ako or da: Kad mu rečem istinu…',
      },
      5,
      {
        type: 'transform',
        q: 'Put it in the past. A man is speaking.',
        from: 'Ne mogu doći.',
        answer: 'Nisam mogao doći.',
        accept: ['Ja nisam mogao doći.'],
        hint: 'The past brings back the consonant that moći hides — the same one you see in the ja form.',
        explanation:
          'Nisam mogao doći. — moći hides a g: mogu, možeš… and in the past mogao, mogla, mogli.',
      },
      6,
      11,
      2,
      {
        type: 'listen',
        audio: 'Mačka je ukrala ribu i pojela je ispod stola.',
        q: 'What did the cat do?',
        options: [
          'It caught a mouse under the table',
          'It stole a fish and ate it under the table',
          'It slept under the table all day',
          'It ate the fish that Grandma gave it',
        ],
        correct: 1,
        explanation:
          'Ukrala ribu — it stole a fish; pojela je — it ate it. Both pasts have lost the hidden d: krasti → krala, jesti → jela.',
      },
      {
        type: 'dictate',
        audio: 'Reci mi što pečeš.',
        answer: 'Reci mi što pečeš.',
        hint: 'Four words: "Tell me what you are baking."',
        explanation:
          'Reci mi što pečeš. — the same hidden k twice: c before the -i of the command, č before the e of the present.',
      },
    ],
  },

  // ── Names and what they mean ───────────────────────────────────────────────
  'names-and-meanings': {
    text: {
      kind: 'dialogue',
      title: 'Imendan u uredu',
      lines: [
        {
          who: 'Zora',
          hr: 'Hrvoje, jesi li već upoznao Luku, novog kolegu? Jako je simpatičan.',
          en: 'Hrvoje, have you met Luka yet, the new colleague? He is very likeable.',
        },
        {
          who: 'Hrvoje',
          hr: 'Jesam, jučer sam s Lukom bio na ručku. Kaže da je dobio ime po djedu.',
          en: 'I have, I had lunch with Luka yesterday. He says he was named after his grandfather.',
        },
        {
          who: 'Zora',
          hr: 'I ja sam dobila ime po baki. Zora — znaš li što znači moje ime?',
          en: 'I was named after my grandmother too. Zora — do you know what my name means?',
        },
        {
          who: 'Hrvoje',
          hr: 'Naravno, zora je početak dana. Zato ti uvijek prva dolaziš na posao!',
          en: 'Of course, zora is the start of the day. That is why you are always the first to get to work!',
        },
        {
          who: 'Zora',
          hr: 'A ti si Hrvoje, pravi Hrvat. Usput, danas je 19. ožujka. Moramo čestitati imendan gospodinu Horvatu.',
          en: 'And you are Hrvoje, a real Croat. By the way, today is March 19. We have to wish Mr. Horvat a happy name day.',
        },
        {
          who: 'Hrvoje',
          hr: 'Josipu? Imaš pravo! A gospođa Horvat slavi u kolovozu, na Veliku Gospu.',
          en: 'Josip? You are right! And Mrs. Horvat celebrates in August, on the Feast of the Assumption.',
        },
        {
          who: 'Zora',
          hr: 'Tako je, ona je Marija. Kupila sam Josipu kravatu, a ti mu reci „Sretan imendan!”',
          en: 'That’s right, she is a Marija. I bought Josip a necktie, and you tell him "Happy name day!"',
        },
        {
          who: 'Hrvoje',
          hr: 'Kravatu? Odlično — poklon s hrvatskim imenom za čovjeka s najčešćim hrvatskim prezimenom!',
          en: 'A necktie? Excellent — a present with a Croatian name for the man with the most common Croatian surname!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: whose name day is it today, and what present did Zora buy?',
          options: [
            'Luka’s — a book about names',
            'Mrs. Horvat’s — flowers',
            'Mr. Horvat’s, whose first name is Josip — a necktie',
            'Hrvoje’s — a bottle of wine',
          ],
          correct: 2,
          hint: 'The date is March 19. Think of whose saint that is — and of the present with a "Croatian name".',
          explanation:
            'March 19 is the feast of sveti Josip, so it is Josip Horvat’s name day. Zora bought him a kravata — a word that comes from the Croats.',
        },
        {
          q: 'Zora says "upoznao Luku, novog kolegu". The name ends like the accusative of žena. What does "novog kolegu" tell you?',
          options: [
            'Luka is a woman: the ending -u is feminine',
            'Luka is a man: the name takes the endings of žena, but the adjective stays masculine',
            'Luka is a nickname, and nicknames do not decline',
            'Zora means two people: Luka and a new colleague',
          ],
          correct: 1,
          hint: 'Look at the adjective, not at the name. Would novog stand before a feminine noun?',
          explanation:
            'A masculine name in -a (Luka, Nikola) declines like žena — Luke, Luki, Luku, Lukom — but everything that agrees with it is masculine: novog kolegu, s mojim Lukom.',
        },
        {
          type: 'type',
          q: 'Now you. Zora saw Ivan — the man — in town yesterday: Jučer sam u gradu vidjela ____.',
          answer: 'Ivana',
          hint: 'A man is an animate masculine noun, so his accusative looks like the genitive.',
          explanation:
            'Jučer sam u gradu vidjela Ivana. — the accusative of the man Ivan. For the woman called Ivana it would end in -u instead.',
        },
        {
          type: 'type',
          q: 'Hrvoje’s daughter is called Marta, like her aunt (teta): Dobila je ime po ____.',
          answer: 'teti',
          hint: 'In the sense "named after", po takes the locative; teta declines like žena.',
          explanation: 'Dobila je ime po teti. — po + the locative: po djedu, po baki, po teti.',
        },
        {
          type: 'transform',
          q: 'Hrvoje had lunch with Mr. Horvat. Now say that he had lunch with Mrs. Horvat.',
          from: 'Hrvoje je ručao s gospodinom Horvatom.',
          answer: 'Hrvoje je ručao s gospođom Horvat.',
          hint: 'Two words change. A man’s surname declines; what happens to a woman’s surname that ends in a consonant?',
          explanation:
            'Hrvoje je ručao s gospođom Horvat. — gospođa goes into the instrumental, but a woman’s surname ending in a consonant never changes.',
        },
      ],
    },
    mix: [
      12,
      {
        type: 'match',
        q: 'These first names are ordinary words. Match each name to what the word means.',
        pairs: [
          ['Zora', 'dawn'],
          ['Ruža', 'rose'],
          ['Biserka', 'pearl'],
          ['Snježana', 'snow'],
          ['Ognjen', 'fire'],
        ],
        explanation:
          'Zora is the dawn, ruža a rose; Biserka comes from biser (pearl), Snježana from snijeg (snow) and Ognjen from oganj (fire).',
      },
      11,
      2,
      13,
      {
        type: 'sort',
        q: 'Who is the speaker waiting for, calling or greeting — a man or a woman?',
        groups: ['A man', 'A woman'],
        items: [
          { hr: 'Čekam Ivana.', group: 0 },
          { hr: 'Čekam Ivanu.', group: 1 },
          { hr: 'Zovem Nikolu.', group: 0 },
          { hr: 'Zovem Nikolinu.', group: 1 },
          { hr: 'Pozdravljam Marka.', group: 0 },
          { hr: 'Pozdravljam Martu.', group: 1 },
        ],
        explanation:
          'Ivana is the accusative of the man Ivan; Ivanu is the accusative of the woman Ivana. Nikola is a man whose name declines like žena (Nikolu); the woman is Nikolina (Nikolinu).',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order: "Our daughter was named after my mother."',
        words: ['Naša', 'kći', 'dobila', 'je', 'ime', 'po', 'mojoj', 'majci.'],
        accept: [
          'Naša je kći dobila ime po mojoj majci.',
          'Naša kći je dobila ime po mojoj majci.',
          'Po mojoj majci naša je kći dobila ime.',
          'Ime je naša kći dobila po mojoj majci.',
        ],
        explanation:
          'Naša kći dobila je ime po mojoj majci. — dobiti ime po + the locative: po majci.',
      },
      15,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'ide', 'u', 'kino', 's', 'našom', 'Lukom.'],
        wrong: 5,
        answer: 'našim',
        hint: 'The name has the endings of žena — but who is Luka? The word before the name must agree with the person.',
        explanation:
          'Ana ide u kino s našim Lukom. — Luka is a man, so every word that agrees with him is masculine, whatever his own endings look like.',
      },
      1,
      {
        type: 'tf',
        q: '„Dobio je ime po ocu” znači da se zove isto kao njegov otac.',
        answer: true,
        hint: 'dobiti ime po — to be named after someone.',
        explanation:
          'True. Dobio je ime po ocu — he was named after his father, so the two have the same name. Ocu is the locative of otac.',
      },
      6,
      {
        type: 'transform',
        q: 'He congratulated Ana. Now say that he congratulated Nikola — a man — instead.',
        from: 'Čestitao sam Ani imendan.',
        answer: 'Čestitao sam Nikoli imendan.',
        accept: ['Nikoli sam čestitao imendan.', 'Čestitao sam imendan Nikoli.'],
        hint: 'Nikola is a man, but his name takes exactly the endings that Ana takes.',
        explanation:
          'Čestitao sam Nikoli imendan. — čestitati takes the dative, and a masculine name in -a declines like žena: Nikoli.',
      },
      8,
      0,
      7,
      {
        type: 'listen',
        audio: 'Moj djed se zvao Stjepan, pa su i mene nazvali po njemu.',
        q: 'What do you learn about the speaker?',
        options: [
          'He never met his grandfather',
          'He was named after his grandfather Stjepan',
          'He named his son Stjepan',
          'His name day is on the same day as his birthday',
        ],
        correct: 1,
        explanation:
          'Nazvali su me po njemu — they named me after him. Nazvati po takes the locative, here of the pronoun on: po njemu.',
      },
      {
        type: 'dictate',
        audio: 'Sretan imendan, gospođo Horvat!',
        answer: 'Sretan imendan, gospođo Horvat!',
        hint: 'Four words: you wish Mrs. Horvat a happy name day.',
        explanation:
          'Sretan imendan, gospođo Horvat! — gospođo is the vocative, and her surname, ending in a consonant, stays as it is.',
      },
    ],
  },

  // ── Love and marriage ──────────────────────────────────────────────────────
  'love-and-marriage': {
    text: {
      kind: 'dialogue',
      title: 'Bakina ljubavna priča',
      lines: [
        {
          who: 'Iva',
          hr: 'Bako, kako si upoznala djeda? Je li to bila ljubav na prvi pogled?',
          en: 'Grandma, how did you meet Grandpa? Was it love at first sight?',
        },
        {
          who: 'Baka',
          hr: 'Za njega jest! Upoznali smo se na svadbi moje sestre. On se odmah zaljubio u mene, a meni se uopće nije svidio.',
          en: 'For him it was! We met at my sister’s wedding. He fell in love with me at once, and I did not like him at all.',
        },
        {
          who: 'Iva',
          hr: 'Stvarno? A zašto ti se nije svidio?',
          en: 'Really? And why didn’t you like him?',
        },
        {
          who: 'Baka',
          hr: 'Previše je pričao i loše je plesao. Osim toga, ja sam tada hodala s jednim studentom iz Splita.',
          en: 'He talked too much and danced badly. Besides, I was going out with a student from Split at the time.',
        },
        {
          who: 'Iva',
          hr: 'I što se onda dogodilo?',
          en: 'And what happened then?',
        },
        {
          who: 'Baka',
          hr: 'Djed mi je cijelu godinu pisao pisma. Na kraju sam prekinula sa studentom i zaljubila se do ušiju.',
          en: 'Grandpa wrote me letters for a whole year. In the end I broke up with the student and fell head over heels in love.',
        },
        {
          who: 'Iva',
          hr: 'Kako romantično! A kada ste se vjenčali?',
          en: 'How romantic! And when did you get married?',
        },
        {
          who: 'Baka',
          hr: 'Dvije godine poslije. Udala sam se za njega u lipnju, a on i danas kaže da se oženio najljepšom djevojkom u selu.',
          en: 'Two years later. I married him in June, and to this day he says he married the prettiest girl in the village.',
        },
        {
          who: 'Iva',
          hr: 'I još ste zajedno, u dobru i zlu. Ja ću se udati tek kad nađem takvog muža!',
          en: 'And you are still together, in good times and bad. I will only get married when I find a husband like that!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where did Grandma and Grandpa meet, and who fell in love first?',
          options: [
            'At a dance in Split; she fell in love first',
            'At her sister’s wedding; he fell in love first',
            'At the university; it was love at first sight for both',
            'At her own engagement party; neither liked the other',
          ],
          correct: 1,
          hint: 'It was a family celebration. And remember her answer to "love at first sight?": Za njega jest!',
          explanation:
            'They met na svadbi moje sestre. He fell in love at once (On se odmah zaljubio u mene); she did not even like him at first.',
        },
        {
          q: 'Grandma says "Udala sam se za njega", but Grandpa "se oženio najljepšom djevojkom". Why two different verbs for the same wedding?',
          options: [
            'Udati se is the older word and oženiti se the modern one',
            'A woman marries with udati se za + accusative; a man with oženiti se + instrumental',
            'Udati se is used for church weddings only',
            'Oženiti se can be used only in the past tense',
          ],
          correct: 1,
          hint: 'Look at who is the subject of each verb.',
          explanation:
            'Croatian marks who is marrying. She: udati se za + the accusative (za njega). He: oženiti se + the instrumental with no preposition (najljepšom djevojkom). For the couple together: vjenčati se.',
        },
        {
          type: 'type',
          q: 'Now you. Iva’s brother Marko has fallen for a girl called Petra: Marko se zaljubio u ____.',
          answer: 'Petru',
          hint: 'Falling in love goes INTO someone — movement, so u takes the accusative.',
          explanation: 'Marko se zaljubio u Petru. — zaljubiti se u + the accusative.',
        },
        {
          type: 'type',
          q: 'At first Grandma did not like Grandpa — but he liked her at once. Say it: Baka se odmah svidjela ____. (djed)',
          answer: 'djedu',
          hint: 'With svidjeti se, the person who is liked is the subject; the one who likes stands in the dative.',
          explanation:
            'Baka se odmah svidjela djedu. — Grandpa liked Grandma at once: she is the subject, he is in the dative.',
        },
        {
          type: 'transform',
          q: 'Tell the same wedding from HIS side: make Marko the subject.',
          from: 'Ana se udala za Marka.',
          answer: 'Marko se oženio Anom.',
          hint: 'A man needs a different verb — and the woman he marries stands in the instrumental, with no preposition.',
          explanation:
            'Marko se oženio Anom. — she: udati se za + accusative; he: oženiti se + instrumental.',
        },
      ],
    },
    mix: [
      8,
      9,
      {
        type: 'match',
        q: 'Who is who at the wedding? Match each word to its meaning.',
        pairs: [
          ['mladenka', 'the bride'],
          ['kum', 'the best man'],
          ['svekrva', 'the husband’s mother'],
          ['punica', 'the wife’s mother'],
          ['mladenci', 'the newlyweds'],
        ],
        explanation:
          'Mladenka is the bride, kum the best man, mladenci the two newlyweds. Croatian has two words for a mother-in-law: svekrva is his mother, punica is hers.',
      },
      10,
      0,
      {
        type: 'sort',
        q: 'Who is speaking — a man or a woman? The verb or the adjective tells you.',
        groups: ['A man is speaking', 'A woman is speaking'],
        items: [
          { hr: 'Oženit ću se u svibnju.', group: 0 },
          { hr: 'Udat ću se u svibnju.', group: 1 },
          { hr: 'Ne želim se još udati.', group: 1 },
          { hr: 'Ne želim se još oženiti.', group: 0 },
          { hr: 'Već sam pet godina oženjen.', group: 0 },
          { hr: 'Već sam pet godina udana.', group: 1 },
        ],
        explanation:
          'Oženiti se and oženjen belong to a man; udati se and udana belong to a woman. Neutral for both: vjenčati se, biti u braku.',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Luka has been going out with my sister for two years already."',
        words: ['Luka', 'već', 'dvije', 'godine', 'hoda', 's', 'mojom', 'sestrom.'],
        accept: [
          'Luka hoda s mojom sestrom već dvije godine.',
          'Već dvije godine Luka hoda s mojom sestrom.',
          'Luka s mojom sestrom hoda već dvije godine.',
          'Luka već dvije godine s mojom sestrom hoda.',
          'S mojom sestrom Luka hoda već dvije godine.',
        ],
        explanation:
          'Luka već dvije godine hoda s mojom sestrom. — hodati s + the instrumental; for something still going on, Croatian uses the present with već.',
      },
      13,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ivana', 'se', 'zaljubila', 'u', 'Igoru.'],
        wrong: 4,
        answer: 'Igora',
        hint: 'Falling in love is movement INTO someone. Which case follows u then — and what does it look like for a man?',
        explanation:
          'Ivana se zaljubila u Igora. — zaljubiti se u + the accusative, and for a man the accusative looks like the genitive. Igoru is the dative or locative.',
      },
      7,
      {
        type: 'tf',
        q: 'A woman can say: „Oženila sam se prošle godine.”',
        answer: false,
        hint: 'Which of the two marrying verbs belongs to a woman?',
        explanation:
          'False. Oženiti se is the man’s verb. A woman says Udala sam se prošle godine — or, neutrally, Vjenčala sam se.',
      },
      6,
      {
        type: 'transform',
        q: 'Marko liked Ana. Turn it round: say that Ana liked Marko.',
        from: 'Ana se svidjela Marku.',
        answer: 'Marko se svidio Ani.',
        accept: ['Ani se svidio Marko.'],
        hint: 'The one who is liked becomes the subject, so the verb agrees with him; the one who likes goes into the dative.',
        explanation:
          'Marko se svidio Ani. — now Marko is the subject (svidio), and Ana, the one who likes, is in the dative.',
      },
      12,
      {
        type: 'listen',
        audio: 'Moj brat se zaručio, a svadba će biti na jesen.',
        q: 'What is the news?',
        options: [
          'Her brother got divorced in the fall',
          'Her brother got married last fall',
          'Her brother got engaged, and the wedding will be in the fall',
          'Her brother is the best man at a wedding this fall',
        ],
        correct: 2,
        explanation:
          'Zaručio se — he got engaged; svadba će biti na jesen — the wedding celebration will be in the fall.',
      },
      {
        type: 'dictate',
        audio: 'Zaljubila sam se u njega.',
        answer: 'Zaljubila sam se u njega.',
        hint: 'Five words. A woman says she fell in love with him.',
        explanation:
          'Zaljubila sam se u njega. — u + the accusative of on: njega. The short words sam se follow the first word.',
      },
    ],
  },

  // ── The word "koji" ────────────────────────────────────────────────────────
  'relative-koji': {
    text: {
      kind: 'dialogue',
      title: 'Stare fotografije',
      lines: [
        {
          who: 'Dora',
          hr: 'Pogledaj, ovo su fotografije koje sam našla u bakinom ormaru.',
          en: 'Look, these are the photos that I found in Grandma’s closet.',
        },
        {
          who: 'Matej',
          hr: 'Tko je čovjek koji stoji pokraj tvog djeda?',
          en: 'Who is the man standing next to your grandpa?',
        },
        {
          who: 'Dora',
          hr: 'To je Stipe, prijatelj s kojim je djed radio u tvornici.',
          en: 'That is Stipe, the friend Grandpa worked with at the factory.',
        },
        {
          who: 'Matej',
          hr: 'A žena koju djed drži za ruku? Je li to tvoja baka?',
          en: 'And the woman whose hand Grandpa is holding? Is that your grandma?',
        },
        {
          who: 'Dora',
          hr: 'Nije! To je djevojka s kojom je hodao prije bake. Baka ne voli fotografije na kojima je ta djevojka.',
          en: 'No! That is the girl he went out with before Grandma. Grandma does not like the photos that girl is in.',
        },
        {
          who: 'Matej',
          hr: 'Ha-ha! A kuća koja se vidi iza njih?',
          en: 'Ha-ha! And the house you can see behind them?',
        },
        {
          who: 'Dora',
          hr: 'To je kuća u kojoj je djed odrastao. Selo u kojem se nalazi danas je gotovo prazno.',
          en: 'That is the house Grandpa grew up in. The village it stands in is almost empty today.',
        },
        {
          who: 'Matej',
          hr: 'Šteta. A dijete koje sjedi na zidu?',
          en: 'A pity. And the child sitting on the wall?',
        },
        {
          who: 'Dora',
          hr: 'To je moj tata — jedini kojeg na ovoj slici stvarno poznaješ!',
          en: 'That is my dad — the only one in this picture that you actually know!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is the woman whose hand Grandpa is holding in the photo?',
          options: [
            'Dora’s grandmother',
            'Grandpa’s sister',
            'A girl he went out with before Grandma',
            'A colleague from the factory',
          ],
          correct: 2,
          hint: 'Matej guesses wrong. And there is a reason Grandma does not like these photos.',
          explanation:
            'To je djevojka s kojom je hodao prije bake — the girl he went out with before Grandma. That is why Grandma does not like the photos.',
        },
        {
          q: 'Matej says "čovjek koji stoji", but "žena koju djed drži za ruku". Why koju, and not koja?',
          options: [
            'Because žena is feminine, and koju is the only feminine form',
            'Because inside its clause the woman is the object — Grandpa is holding HER',
            'Because drži is in the present tense',
            'Because the woman is mentioned after the man',
          ],
          correct: 1,
          hint: 'Two questions, in order: what does the word refer back to — and what job does it do inside its own clause?',
          explanation:
            'Gender and number come from žena (feminine singular); the case comes from the job inside the clause. Grandpa holds her — the object — so the accusative: koju. As a subject it would be koja: žena koja stoji.',
        },
        {
          type: 'type',
          q: 'Now you. Dora shows one more photo: Ovo je pas ____ sam dobila za rođendan.',
          answer: 'kojeg',
          accept: ['kojega'],
          hint: 'Pas is masculine and alive — and inside the clause he is what she got: the object.',
          explanation:
            'Ovo je pas kojeg sam dobila za rođendan. — for a living masculine being the accusative looks like the genitive: kojeg (or kojega). For a thing it stays like the nominative: poklon koji sam dobila.',
        },
        {
          type: 'type',
          q: 'And another one: To su prijatelji s ____ svako ljeto idem na more.',
          answer: 'kojima',
          hint: 'Prijatelji is plural, and s takes the instrumental. The preposition already stands in front.',
          explanation:
            'To su prijatelji s kojima svako ljeto idem na more. — plural instrumental, with the preposition in front of it, never at the end.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one.',
          from: 'Ovo je kuća. U toj kući živi moja baka.',
          answer: 'Ovo je kuća u kojoj živi moja baka.',
          accept: ['Ovo je kuća u kojoj moja baka živi.'],
          hint: 'The second sentence becomes a clause. Its preposition stays, and "toj kući" is replaced by the joining word in the same case.',
          explanation:
            'Ovo je kuća u kojoj živi moja baka. — feminine like kuća, locative after u, and the preposition comes first.',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'tf',
        q: 'As in English "the book I am reading", Croatian can leave the joining word out: „Knjiga čitam je dobra.”',
        answer: false,
        hint: 'English drops "that" or "which" half the time. Does Croatian ever?',
        explanation:
          'False. The joining word is never dropped: Knjiga koju čitam je dobra. Wherever English has nothing between the two halves, Croatian needs a form of koji.',
      },
      6,
      {
        type: 'sort',
        q: 'Inside its clause, is the person, animal or thing DOING the action, or is the action done TO it?',
        groups: ['It does the action (subject)', 'The action is done to it (object)'],
        items: [
          { hr: 'žena koja me zove', group: 0 },
          { hr: 'žena koju zovem', group: 1 },
          { hr: 'pas koji me gleda', group: 0 },
          { hr: 'pas kojeg gledam', group: 1 },
          { hr: 'pismo koje je stiglo', group: 0 },
          { hr: 'pismo koje pišem', group: 1 },
        ],
        explanation:
          'The case shows the job: koja / koju, koji / kojeg. A neuter noun has the same form for both, koje, so only the rest of the clause tells you: the letter arrived (subject), I am writing the letter (object).',
      },
      7,
      8,
      {
        type: 'match',
        q: 'Who helped me? Match each beginning to the only ending that fits it.',
        pairs: [
          ['To je žena', 'koja mi je pomogla.'],
          ['To je čovjek', 'koji mi je pomogao.'],
          ['To je dijete', 'koje mi je pomoglo.'],
          ['To su ljudi', 'koji su mi pomogli.'],
          ['To su žene', 'koje su mi pomogle.'],
        ],
        explanation:
          'Koji takes its gender and number from the noun it refers back to — and the participle agrees too: koja … pomogla, koje … pomoglo, koji su … pomogli, koje su … pomogle.',
      },
      0,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['To', 'su', 'ljudi', 's', 'kojim', 'radim.'],
        wrong: 4,
        answer: 'kojima',
        hint: 'What does the word refer back to — one person or several?',
        explanation:
          'To su ljudi s kojima radim. — ljudi is plural, so the instrumental after s must be plural as well. Kojim would refer to one man: čovjek s kojim radim.',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "The movie that we watched last night was boring."',
        words: ['Film', 'koji', 'smo', 'sinoć', 'gledali', 'bio', 'je', 'dosadan.'],
        accept: [
          'Film koji smo gledali sinoć bio je dosadan.',
          'Film koji smo sinoć gledali je bio dosadan.',
          'Film koji smo gledali sinoć je bio dosadan.',
          'Film koji smo sinoć gledali dosadan je bio.',
        ],
        explanation:
          'Film koji smo sinoć gledali bio je dosadan. — the short word smo comes right after koji, the first word of its clause.',
      },
      2,
      {
        type: 'transform',
        q: 'Join the two sentences into one.',
        from: 'Imam prijateljicu. Ona živi u Zadru.',
        answer: 'Imam prijateljicu koja živi u Zadru.',
        hint: 'Replace "Ona" with the joining word. Inside the clause the friend is the one who lives there.',
        explanation:
          'Imam prijateljicu koja živi u Zadru. — prijateljicu is an object in the main clause, but inside the relative clause she is the subject of živi: koja.',
      },
      11,
      10,
      3,
      {
        type: 'listen',
        audio: 'Djevojka s kojom sam jučer razgovarao zove se Maja.',
        q: 'Who is Maja?',
        options: [
          'The girl he works with',
          'The girl who called him yesterday',
          'The girl he talked to yesterday',
          'The girl he is meeting tomorrow',
        ],
        correct: 2,
        explanation:
          'Djevojka s kojom sam jučer razgovarao — the girl I talked to yesterday. Razgovarati s takes the instrumental, and the preposition stands before kojom.',
      },
      {
        type: 'dictate',
        audio: 'To je film koji volim.',
        answer: 'To je film koji volim.',
        hint: 'Five words: "That is a movie that I love."',
        explanation:
          'To je film koji volim. — film is masculine and not alive, so as an object it keeps the form of the nominative.',
      },
    ],
  },

  // ══ UNIT 8 ═════════════════════════════════════════════════════════════════

  // ── Relative clauses, deeper: čiji, gdje, ono što, što ─────────────────────
  'relative-deep': {
    text: {
      kind: 'dialogue',
      title: 'Selo odakle je moja obitelj',
      lines: [
        {
          who: 'Nikolina',
          hr: 'Evo nas! Ovo je selo odakle je moja obitelj i gdje sam provodila svako ljeto.',
          en: 'Here we are! This is the village my family is from, and where I used to spend every summer.',
        },
        {
          who: 'Dario',
          hr: 'Prekrasno je. A čija je ona kamena kuća na brdu?',
          en: 'It is beautiful. And whose is that stone house on the hill?',
        },
        {
          who: 'Nikolina',
          hr: 'To je kuća susjeda čiji sin sada živi u Njemačkoj. Kuća je prazna, što je velika šteta.',
          en: 'That is the house of a neighbor whose son now lives in Germany. The house is empty, which is a great pity.',
        },
        {
          who: 'Dario',
          hr: 'A mjesto kamo idemo na ručak — je li daleko?',
          en: 'And the place we are going to for lunch — is it far?',
        },
        {
          who: 'Nikolina',
          hr: 'Nije. To je konoba čiji vlasnik peče najbolju janjetinu u cijelom kraju.',
          en: 'No. It is a tavern whose owner roasts the best lamb in the whole area.',
        },
        {
          who: 'Dario',
          hr: 'Ono što mi se ovdje najviše sviđa jest tišina. U gradu je nikad nema.',
          en: 'What I like most here is the silence. In the city there is never any.',
        },
        {
          who: 'Nikolina',
          hr: 'Meni je najdraže ono što se ne vidi: ovdje se svi poznaju i pomažu jedni drugima.',
          en: 'What I love most is what you cannot see: here everybody knows each other and they help one another.',
        },
        {
          who: 'Dario',
          hr: 'Mogao bih ovdje živjeti. Nema ni signala za mobitel, što mi uopće ne smeta!',
          en: 'I could live here. There is not even a cell phone signal, which does not bother me at all!',
        },
        {
          who: 'Nikolina',
          hr: 'Pazi što govoriš! Baka će ti odmah naći kuću čiji krov treba popraviti.',
          en: 'Watch what you say! Grandma will immediately find you a house whose roof needs fixing.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do you learn about the stone house on the hill?',
          options: [
            'It belongs to the tavern owner, who roasts lamb there',
            'It belongs to a neighbor whose son lives in Germany, and it stands empty',
            'It belongs to Nikolina’s grandma, and its roof needs fixing',
            'It belongs to Dario’s family, who spend every summer there',
          ],
          correct: 1,
          hint: 'Nikolina explains whose house it is, where a member of that family lives now — and what she finds a pity.',
          explanation:
            'It is a neighbor’s house, and the son of that family sada živi u Njemačkoj — now lives in Germany. Kuća je prazna: it stands empty.',
        },
        {
          q: 'Nikolina says: "Kuća je prazna, što je velika šteta." Why što, and not koja?',
          options: [
            'Because kuća is feminine, and što is the feminine form',
            'Because the word refers to the whole fact that the house is empty, not to the noun kuća',
            'Because šteta is a neuter noun',
            'Because što must always follow a comma',
          ],
          correct: 1,
          hint: 'What exactly is the pity — the house, or something about the house?',
          explanation:
            'Koja would attach to the noun kuća. Here the pity is the whole situation — that the house is empty — and for a whole preceding clause Croatian uses što.',
        },
        {
          type: 'type',
          q: 'Now you. Dario points at a woman in the village: To je žena ____ pas uvijek laje. (whose)',
          answer: 'čiji',
          hint: 'The word agrees with the thing owned, not with the owner. What gender is pas?',
          explanation:
            'To je žena čiji pas uvijek laje. — masculine, agreeing with pas, although the owner is a woman.',
        },
        {
          type: 'type',
          q: 'Dario is tired after the trip: ____ mi sada treba jest dobra kava. (What — the thing that)',
          answer: 'Ono što',
          hint: 'Two words: a pronoun, then the relative that is used for ideas.',
          explanation:
            'Ono što mi sada treba jest dobra kava. — English "what" in the sense of "the thing that" keeps its ono in an ordinary sentence.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one: replace "To" with the right joining word.',
          from: 'Dario je zaboravio ključeve. To me nije iznenadilo.',
          answer: 'Dario je zaboravio ključeve, što me nije iznenadilo.',
          hint: '"To" points back at the whole first sentence, not at a noun. Which relative does that job?',
          explanation:
            'Dario je zaboravio ključeve, što me nije iznenadilo. — the relative refers to the whole fact, so it cannot be a form of koji.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'tf',
        q: 'In „Zakasnio je na vlak, što ga je jako naljutilo”, the word što refers to the train.',
        answer: false,
        hint: 'What made him angry — the train, or what happened?',
        explanation:
          'False. Što refers to the whole fact that he missed the train. A relative pointing at the noun vlak would have to be a form of koji.',
      },
      4,
      8,
      {
        type: 'order',
        q: 'Put the words in order: "What you need now is a rest."',
        words: ['Ono', 'što', 'ti', 'sada', 'treba', 'je', 'odmor.'],
        accept: [
          'Odmor je ono što ti sada treba.',
          'Ono što ti treba sada je odmor.',
          'Odmor je ono što ti treba sada.',
        ],
        explanation:
          'Ono što ti sada treba je odmor. — ono što is "the thing that", and the short word ti follows što, the first word of its clause.',
      },
      6,
      7,
      {
        type: 'sort',
        q: 'Is it the place where someone IS, the place someone goes TO, or the place someone comes FROM?',
        groups: ['Where (in a place)', 'Where to', 'Where from'],
        items: [
          { hr: 'grad gdje živim', group: 0 },
          { hr: 'grad kamo putujem', group: 1 },
          { hr: 'grad odakle dolazim', group: 2 },
          { hr: 'ured gdje radim', group: 0 },
          { hr: 'otok kamo idemo na ljeto', group: 1 },
          { hr: 'zemlja odakle je moj djed', group: 2 },
        ],
        explanation:
          'For places the question words double as relatives: gdje for position, kamo for a destination, odakle for an origin.',
      },
      9,
      {
        type: 'match',
        q: 'Whose…? Match each beginning to the only ending that fits it.',
        pairs: [
          ['To je čovjek čiji', 'brat radi u banci.'],
          ['To je čovjek čija', 'sestra radi u banci.'],
          ['To je čovjek čije', 'dijete ide u vrtić.'],
          ['To je čovjek čiju', 'sestru dobro poznajem.'],
        ],
        explanation:
          'The owner is the same man every time. The relative agrees with the thing owned: masculine brat, feminine sestra, neuter dijete — and the accusative sestru when she is the object.',
      },
      0,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['To', 'je', 'susjed', 'čiji', 'psa', 'svaki', 'dan', 'šetam.'],
        wrong: 3,
        answer: 'čijeg',
        hint: 'The dog is what I walk — the object — and a dog is alive. The relative has to be in the same case as psa.',
        explanation:
          'To je susjed čijeg psa svaki dan šetam. — the relative agrees with psa in gender, number AND case: the animate masculine accusative, like mojeg psa.',
      },
      1,
      {
        type: 'transform',
        q: 'Join the two sentences into one.',
        from: 'To je moja prijateljica. Njezin brat živi u Kanadi.',
        answer: 'To je moja prijateljica čiji brat živi u Kanadi.',
        hint: 'Replace "Njezin" with the relative for a possessor. It agrees with the brother, not with the friend.',
        explanation:
          'To je moja prijateljica čiji brat živi u Kanadi. — masculine, because brat is masculine; the owner’s gender does not matter.',
      },
      3,
      11,
      {
        type: 'listen',
        audio: 'Nije položio ispit, što njegove roditelje nije iznenadilo.',
        q: 'What did not surprise his parents?',
        options: [
          'The exam itself',
          'That he passed the exam',
          'That he did not pass the exam',
          'That he did not come to the exam',
        ],
        correct: 2,
        explanation:
          'Nije položio ispit — he did not pass the exam. The relative after the comma refers to that whole fact: it did not surprise his parents.',
      },
      {
        type: 'dictate',
        audio: 'Ne razumijem ono što govoriš.',
        answer: 'Ne razumijem ono što govoriš.',
        hint: 'Five words: "I do not understand what you are saying."',
        explanation:
          'Ne razumijem ono što govoriš. — ono što: "the thing that", here the object of razumijem.',
      },
    ],
  },

  // ── Someone, no one, everyone ──────────────────────────────────────────────
  indefinites: {
    text: {
      kind: 'dialogue',
      title: 'Tko je bio u stanu?',
      lines: [
        {
          who: 'Karla',
          hr: 'Borna, je li netko bio u stanu dok smo bili na poslu? Vrata su bila otvorena.',
          en: 'Borna, was someone in the apartment while we were at work? The door was open.',
        },
        {
          who: 'Borna',
          hr: 'Ne znam. Ja nisam nikoga vidio i nikome nisam dao ključ.',
          en: 'I don’t know. I did not see anyone, and I did not give the key to anyone.',
        },
        {
          who: 'Karla',
          hr: 'Čudno. Nešto ovdje nije u redu. Nedostaje li ti nešto?',
          en: 'Strange. Something is not right here. Are you missing anything?',
        },
        {
          who: 'Borna',
          hr: 'Ne, ništa mi ne nedostaje. Laptop je na stolu, novac je u ladici… A tebi?',
          en: 'No, I am not missing anything. The laptop is on the table, the money is in the drawer… And you?',
        },
        {
          who: 'Karla',
          hr: 'Tražila sam svugdje, ali nigdje ne mogu naći svoje čokolade. Svaki dan kupim jednu, a navečer nema nijedne!',
          en: 'I have looked everywhere, but I cannot find my chocolates anywhere. Every day I buy one, and in the evening there is not a single one!',
        },
        {
          who: 'Borna',
          hr: 'Aha… Možda ih je pojeo neki gladan lopov.',
          en: 'Aha… Maybe some hungry thief ate them.',
        },
        {
          who: 'Karla',
          hr: 'Lopov? Nitko ne krade samo čokoladu!',
          en: 'A thief? Nobody steals only chocolate!',
        },
        {
          who: 'Borna',
          hr: 'Dobro, reći ću ti istinu. Svatko ponekad pojede nešto slatko… A vrata sam jutros zaboravio zatvoriti.',
          en: 'All right, I will tell you the truth. Everyone eats something sweet now and then… And I forgot to close the door this morning.',
        },
        {
          who: 'Karla',
          hr: 'Znala sam! Sutra ti kupuješ čokoladu — bilo koju, samo da je velika.',
          en: 'I knew it! Tomorrow you are buying the chocolate — any kind at all, as long as it is big.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is missing from the apartment, and what really happened to it?',
          options: [
            'Karla’s laptop; a thief took it',
            'Karla’s chocolates; Borna ate them',
            'Borna’s keys; he left them at work',
            'The money from the drawer; nobody knows who took it',
          ],
          correct: 1,
          hint: 'The laptop and the money are where they should be. Think of what Karla buys every day — and of Borna’s confession.',
          explanation:
            'Karla cannot find her chocolates anywhere. Borna first blames "some hungry thief", then tells the truth: he ate them, and he forgot to close the door.',
        },
        {
          q: 'Karla says "Nitko ne krade samo čokoladu!" Nitko is already negative — so why is ne there too?',
          options: [
            'For emphasis: it could be left out',
            'Because the sentence is an exclamation',
            'Because a ni- word always needs a negated verb; without ne the sentence is not Croatian',
            'Because krasti is always used with ne',
          ],
          correct: 2,
          hint: 'English says "nobody steals" with one negative. Does Croatian allow that?',
          explanation:
            'Every word of the ni- family demands a negated verb as well: Nitko ne krade. Ništa mi ne nedostaje. Nigdje ne mogu naći. It is not optional emphasis.',
        },
        {
          type: 'type',
          q: 'Now you. Karla opens the fridge, and it is completely empty: U hladnjaku nema ____.',
          answer: 'ničega',
          accept: ['ništa'],
          hint: 'The verb is already negative, so you need the ni- word for a thing — and nema takes the genitive.',
          explanation:
            'U hladnjaku nema ničega. — the genitive of ništa after nema. In everyday speech you will also hear nema ništa.',
        },
        {
          type: 'type',
          q: 'Borna promises that the chocolate story stays a secret — he did not tell a single person: ____ nisam rekao.',
          answer: 'Nikome',
          accept: ['Nikomu'],
          hint: 'Telling TO someone takes the dative — and with a negated verb, the ni- word for a person.',
          explanation:
            'Nikome nisam rekao. — the dative of nitko. The prefix ni- stays, and the ending does the work, as in kome.',
        },
        {
          type: 'transform',
          q: 'Say the opposite: not everyone, but nobody.',
          from: 'Svatko zna odgovor.',
          answer: 'Nitko ne zna odgovor.',
          accept: ['Odgovor ne zna nitko.', 'Odgovor nitko ne zna.'],
          hint: 'Swapping the first word is not enough: the ni- family needs something from the verb too.',
          explanation: 'Nitko ne zna odgovor. — sv- becomes ni-, and the verb is negated as well.',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'tf',
        q: '„Nitko zna odgovor” is a correct Croatian sentence, just like English "Nobody knows the answer".',
        answer: false,
        hint: 'English allows only one negative. What does Croatian require after a ni- word?',
        explanation:
          'False. The ni- family always takes a negated verb: Nitko ne zna odgovor. Without ne the sentence is ungrammatical.',
      },
      6,
      7,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['netko', 'someone'],
          ['nitko', 'no one'],
          ['svatko', 'everyone'],
          ['negdje', 'somewhere'],
          ['svašta', 'all sorts of things'],
        ],
        explanation:
          'Three prefixes on the question words: ne- is "some", ni- is "no", sv- is "every". Svašta is sv- + što: all sorts of things.',
      },
      8,
      {
        type: 'sort',
        q: 'Is the first word of each sentence about a person, a thing or a place?',
        groups: ['A person', 'A thing', 'A place'],
        items: [
          { hr: 'Netko te traži.', group: 0 },
          { hr: 'Ništa ne razumijem.', group: 1 },
          { hr: 'Svugdje ima kafića.', group: 2 },
          { hr: 'Nikome nisam rekla.', group: 0 },
          { hr: 'Nešto ti moram reći.', group: 1 },
          { hr: 'Negdje sam izgubio kišobran.', group: 2 },
        ],
        explanation:
          'The words built on tko are about people (netko, nikome), those on što about things (ništa, nešto), those on gdje about places (svugdje, negdje).',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order. A woman says: "I did not tell anyone anything."',
        words: ['Nikome', 'nisam', 'ništa', 'rekla.'],
        accept: [
          'Nisam nikome ništa rekla.',
          'Ništa nikome nisam rekla.',
          'Nikome ništa nisam rekla.',
          'Nisam ništa nikome rekla.',
          'Ništa nisam nikome rekla.',
          'Nisam nikome rekla ništa.',
          'Nikome nisam rekla ništa.',
          'Nisam rekla nikome ništa.',
          'Nisam rekla ništa nikome.',
        ],
        explanation:
          'Nikome nisam ništa rekla. — three negatives in one sentence, and all three are required: to nobody, nothing, and the negated verb.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Svaki', 'jutro', 'pijem', 'kavu', 'na', 'balkonu.'],
        wrong: 0,
        answer: 'Svako',
        hint: 'This word is an adjective and must agree with the noun right after it. What gender is jutro?',
        explanation:
          'Svako jutro pijem kavu na balkonu. — svaki dan, svaka godina, svako jutro: it agrees like any adjective.',
      },
      3,
      {
        type: 'transform',
        q: 'She saw someone in the garden. Say the opposite: she saw NO ONE.',
        from: 'Vidjela sam nekoga u vrtu.',
        answer: 'Nisam vidjela nikoga u vrtu.',
        accept: [
          'Nikoga nisam vidjela u vrtu.',
          'U vrtu nisam vidjela nikoga.',
          'Nisam nikoga vidjela u vrtu.',
          'U vrtu nisam nikoga vidjela.',
          'U vrtu nikoga nisam vidjela.',
        ],
        hint: 'Two things change: the ne- word becomes a ni- word in the same case, and the verb is negated.',
        explanation:
          'Nisam vidjela nikoga u vrtu. — nekoga → nikoga (both accusative), and sam → nisam.',
      },
      9,
      11,
      10,
      {
        type: 'listen',
        audio: 'Možeš me nazvati bilo kada, uvijek sam kod kuće.',
        q: 'When can you call the speaker?',
        options: [
          'Never — she is not at home',
          'Only sometimes, in the evening',
          'At any time at all',
          'Only when someone else is at home',
        ],
        correct: 2,
        explanation:
          'Bilo kada — at any time at all. Bilo in front of a question word gives the open meaning: bilo tko, bilo što, bilo gdje, bilo kada.',
      },
      {
        type: 'dictate',
        audio: 'Nitko ništa ne zna.',
        answer: 'Nitko ništa ne zna.',
        hint: 'Four words: "Nobody knows anything."',
        explanation:
          'Nitko ništa ne zna. — two ni- words and a negated verb, where English has a single negative.',
      },
    ],
  },

  // ── Opinions and agreeing ──────────────────────────────────────────────────
  'opinions-agreeing': {
    text: {
      kind: 'dialogue',
      title: 'Ured ili kuća?',
      lines: [
        {
          who: 'Sanja',
          hr: 'Dalibore, što misliš o radu od kuće? Po mom mišljenju, to je najbolja stvar na svijetu.',
          en: 'Dalibor, what do you think about working from home? In my opinion, it is the best thing in the world.',
        },
        {
          who: 'Dalibor',
          hr: 'Djelomično se slažem. Čini mi se da je dobro dan ili dva, ali ne cijeli tjedan.',
          en: 'I partly agree. It seems to me that it is good for a day or two, but not for the whole week.',
        },
        {
          who: 'Sanja',
          hr: 'Zašto? Ja sam sigurna da kod kuće radim više nego u uredu.',
          en: 'Why? I am sure that I get more done at home than in the office.',
        },
        {
          who: 'Dalibor',
          hr: 'Možda, ali ja volim vidjeti kolege. Mislim da se najbolje ideje rađaju uz kavu.',
          en: 'Maybe, but I like to see my colleagues. I think the best ideas are born over coffee.',
        },
        {
          who: 'Sanja',
          hr: 'Tu imaš pravo. S druge strane, kod kuće ne gubim dva sata dnevno u tramvaju.',
          en: 'You are right about that. On the other hand, at home I do not lose two hours a day on the streetcar.',
        },
        {
          who: 'Dalibor',
          hr: 'To je točno. Rekao bih da je najbolje rješenje nešto između: tri dana u uredu, dva kod kuće.',
          en: 'That is true. I would say that the best solution is something in between: three days in the office, two at home.',
        },
        {
          who: 'Sanja',
          hr: 'Slažem se. Samo nisam sigurna da će se šef složiti s nama.',
          en: 'I agree. I am just not sure that the boss will agree with us.',
        },
        {
          who: 'Dalibor',
          hr: 'Razumijem, ali možemo ga barem pitati. Što možemo izgubiti?',
          en: 'I understand, but we can at least ask him. What can we lose?',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what solution do Sanja and Dalibor agree on in the end?',
          options: [
            'Everyone works from home all week',
            'Three days in the office, two at home',
            'Two days in the office, three at home',
            'Everyone goes back to the office',
          ],
          correct: 1,
          hint: 'Dalibor calls it "something in between". Which place gets more days?',
          explanation:
            'Rekao bih da je najbolje rješenje nešto između: tri dana u uredu, dva kod kuće. — and Sanja answers: Slažem se.',
        },
        {
          q: 'Dalibor does not share Sanja’s enthusiasm, yet he opens with "Djelomično se slažem" and later "Možda, ali…". Why not simply "Ne slažem se"?',
          options: [
            'Because he actually agrees with everything she says',
            'Because a bare "Ne slažem se" lands as a flat contradiction, so he concedes something first',
            'Because djelomično is the formal word for "no"',
            'Because he has not understood what she said',
          ],
          correct: 1,
          hint: 'Think of how the conversation would feel if his first words were a flat "no".',
          explanation:
            'In Croatian a bare Ne slažem se is stronger than English "I disagree". In a friendly discussion you concede first — Djelomično se slažem, Možda, ali…, Razumijem, ali… — and then say your own view.',
        },
        {
          type: 'type',
          q: 'Now you. You are a woman, and you give a cautious opinion about a movie: ____ bih da je film predug. (I would say)',
          answer: 'Rekla',
          hint: 'The cautious opener is a conditional: bih with the participle of reći, in the form for a woman.',
          explanation:
            'Rekla bih da je film predug. — rekao bih for a man, rekla bih for a woman: the most careful way to give an opinion.',
        },
        {
          type: 'type',
          q: 'You are a man, and this time you have no doubt at all: ____ sam da je to dobra ideja.',
          answer: 'Siguran',
          hint: 'The adjective for "sure", agreeing with a male speaker.',
          explanation:
            'Siguran sam da je to dobra ideja. — the strongest opener; a woman says Sigurna sam da…',
        },
        {
          type: 'transform',
          q: 'Too blunt! Soften it: begin with "It seems to me that…".',
          from: 'Nisi u pravu.',
          answer: 'Čini mi se da nisi u pravu.',
          hint: 'The softer opener, three words — and then the clause needs its conjunction.',
          explanation:
            'Čini mi se da nisi u pravu. — every opinion opener is followed by a full clause with da, and da is never dropped.',
        },
      ],
    },
    mix: [
      9,
      4,
      {
        type: 'match',
        q: 'What does each phrase do in a discussion? Match it to its job.',
        pairs: [
          ['Mislim da…', 'gives a neutral opinion'],
          ['Čini mi se da…', 'gives a softer opinion'],
          ['Po mom mišljenju…', 'gives a more formal opinion'],
          ['Slažem se.', 'agrees'],
          ['Možda, ali…', 'disagrees gently'],
        ],
        explanation:
          'Three ways to open an opinion — the neutral Mislim da, the softer Čini mi se da, the more formal Po mom mišljenju — then plain agreement, and the gentle way into disagreement: concede first.',
      },
      5,
      {
        type: 'sort',
        q: 'Is the speaker agreeing or disagreeing with you?',
        groups: ['Agreeing', 'Disagreeing'],
        items: [
          { hr: 'Imaš pravo.', group: 0 },
          { hr: 'Potpuno se slažem.', group: 0 },
          { hr: 'To je točno.', group: 0 },
          { hr: 'Ne slažem se.', group: 1 },
          { hr: 'Mislim da nisi u pravu.', group: 1 },
          { hr: 'Nemaš pravo.', group: 1 },
        ],
        explanation:
          'Being right is something you HAVE: Imaš pravo / Nemaš pravo. Biti u pravu is also correct: Mislim da nisi u pravu.',
      },
      7,
      {
        type: 'tf',
        q: '„Ti si pravo” is a correct way to say "You are right."',
        answer: false,
        hint: 'In Croatian, is being right something you ARE or something you HAVE?',
        explanation:
          'False. Croatian treats being right as something you have: Imaš pravo. — or, with a preposition, U pravu si.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "In my opinion, the city needs more parks."',
        words: ['Po', 'mom', 'mišljenju,', 'grad', 'treba', 'više', 'parkova.'],
        accept: [
          'Grad po mom mišljenju treba više parkova.',
          'Grad treba više parkova, po mom mišljenju.',
          'Grad treba, po mom mišljenju, više parkova.',
        ],
        explanation:
          'Po mom mišljenju, grad treba više parkova. — the more formal opener: po + the locative, "according to my opinion".',
      },
      0,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Roditelji', 'nisu', 'siguran', 'da', 'je', 'to', 'dobra', 'škola.'],
        wrong: 2,
        answer: 'sigurni',
        hint: 'The adjective has to agree with the people who are not sure — and they are more than one.',
        explanation:
          'Roditelji nisu sigurni da je to dobra škola. — the adjective agrees with its subject: siguran, sigurna, sigurni.',
      },
      3,
      {
        type: 'transform',
        q: 'Turn the plain statement into your opinion: begin with "Mislim da".',
        from: 'To je dobra ideja.',
        answer: 'Mislim da je to dobra ideja.',
        accept: ['Ja mislim da je to dobra ideja.'],
        hint: 'After the conjunction, the short word je moves: it wants to stand in second place in its clause.',
        explanation:
          'Mislim da je to dobra ideja. — da opens the clause, so the clitic je comes right after it, before to.',
      },
      1,
      11,
      10,
      2,
      {
        type: 'listen',
        audio: 'Razumijem te, ali s druge strane, stan u centru je preskup.',
        q: 'What is the speaker doing?',
        options: [
          'Agreeing completely',
          'Asking for an opinion',
          'Disagreeing gently, after conceding a point',
          'Saying that she is not sure',
        ],
        correct: 2,
        explanation:
          'Razumijem te, ali… — first she concedes, then comes her own view: s druge strane, "on the other hand", the apartment downtown is too expensive.',
      },
      {
        type: 'dictate',
        audio: 'Čini mi se da imaš pravo.',
        answer: 'Čini mi se da imaš pravo.',
        hint: 'Six words: "It seems to me that you are right."',
        explanation:
          'Čini mi se da imaš pravo. — the softer opener, its da, and being right as something you have.',
      },
    ],
  },

  // ── Foreign names and words in the cases ───────────────────────────────────
  'foreign-nouns-declension': {
    text: {
      kind: 'dialogue',
      title: 'Večera za prijatelje iz svijeta',
      lines: [
        {
          who: 'Ema',
          hr: 'Roko, jesi li zvao Tonyja i Huga? Večera je u subotu.',
          en: 'Roko, have you called Tony and Hugo? The dinner is on Saturday.',
        },
        {
          who: 'Roko',
          hr: 'S Tonyjem sam razgovarao jutros. Dolazi taksijem ravno iz studija, jer do osam snima intervju.',
          en: 'I talked to Tony this morning. He is coming by taxi straight from the studio, because he is recording an interview until eight.',
        },
        {
          who: 'Ema',
          hr: 'A Hugo? Od Huga nisam ništa čula već tjedan dana.',
          en: 'And Hugo? I have not heard anything from Hugo for a week.',
        },
        {
          who: 'Roko',
          hr: 'Hugo je kod Marija u Tokiju, vraća se tek u petak. Poslao sam mu poruku.',
          en: 'Hugo is at Mario’s in Tokyo; he is not coming back until Friday. I sent him a message.',
        },
        {
          who: 'Ema',
          hr: 'Dobro. A Ingrid? Bez Ingrid večera nije večera.',
          en: 'Good. And Ingrid? Without Ingrid a dinner is not a dinner.',
        },
        {
          who: 'Roko',
          hr: 'Dolazi i ona, s Harryjem. Kaže da je čula tvoj intervju na radiju i da je bio odličan.',
          en: 'She is coming too, with Harry. She says she heard your interview on the radio and that it was excellent.',
        },
        {
          who: 'Ema',
          hr: 'Stvarno? U prvom dijelu bila sam jako nervozna… Nema veze. Što ćemo kuhati?',
          en: 'Really? In the first part I was very nervous… Never mind. What are we going to cook?',
        },
        {
          who: 'Roko',
          hr: 'Tonyju sam obećao sarmu, a Hugu je svejedno — on jede sve.',
          en: 'I promised Tony sarma, and Hugo does not mind — he eats everything.',
        },
        {
          who: 'Ema',
          hr: 'Onda sarma. I nemoj opet cijelu večer pričati o svom novom hobiju!',
          en: 'Sarma it is, then. And don’t talk about your new hobby all evening again!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is Hugo right now, and when is he coming back?',
          options: [
            'In Sydney; he is back on Saturday',
            'In Tokyo, at Mario’s; he is back on Friday',
            'In Melbourne, at Tony’s; he is back on Sunday',
            'At the radio studio; he is back at eight',
          ],
          correct: 1,
          hint: 'It is a city in Asia, and he returns the day before the dinner.',
          explanation:
            'Hugo je kod Marija u Tokiju, vraća se tek u petak. — he is staying at Mario’s in Tokyo and returns only on Friday.',
        },
        {
          q: 'Roko says: "Hugo je kod Marija u Tokiju." Who is Hugo staying with?',
          options: [
            'A woman called Marija',
            'A man called Mario',
            'A man called Marij',
            'Two people, Mario and Marija',
          ],
          correct: 1,
          hint: 'Kod takes the genitive. What would the genitive of the woman’s name Marija be — and is that what Roko says?',
          explanation:
            'Marija here is the genitive of Mario: a name in -io turns its o into j before an ending. It only LOOKS like the woman’s name — at her place it would be kod Marije.',
        },
        {
          type: 'type',
          q: 'Now you. Roko has promised Harry a beer: ____ sam obećao pivo. (Harry)',
          answer: 'Harryju',
          hint: 'Promising TO someone takes the dative. The name ends in an i sound, so something comes between it and the ending.',
          explanation:
            'Harryju sam obećao pivo. — the spelling stays, y included, and a j separates the i sound from the ending.',
        },
        {
          type: 'type',
          q: 'After the dinner Ema says: Bilo je lijepo s Tonyjem, Harryjem i ____. (Hugo)',
          answer: 'Hugom',
          hint: 'S takes the instrumental. A man’s name in -o behaves like Marko.',
          explanation:
            'S Tonyjem, Harryjem i Hugom. — Hugo drops its -o like Marko: Huga, Hugu, Hugom.',
        },
        {
          type: 'transform',
          q: 'Hugo is visiting Mario. Now say that Mario is visiting Hugo.',
          from: 'Hugo je kod Marija.',
          answer: 'Mario je kod Huga.',
          hint: 'The names change places and cases. Kod takes the genitive — and this name simply drops its final vowel.',
          explanation:
            'Mario je kod Huga. — the nominative Mario comes back, and Hugo goes into the genitive: Huga, like Marka.',
        },
      ],
    },
    mix: [
      10,
      2,
      11,
      0,
      {
        type: 'sort',
        q: 'What happens to the word when it takes a case ending?',
        groups: [
          'Adds j before the ending (like taksi)',
          'Drops its final -o (like Marko)',
          'Does not change at all',
        ],
        items: [
          { hr: 'Tony', group: 0 },
          { hr: 'hobi', group: 0 },
          { hr: 'Bruno', group: 1 },
          { hr: 'Otto', group: 1 },
          { hr: 'Ruth', group: 2 },
          { hr: 'Carmen', group: 2 },
        ],
        explanation:
          'An i sound takes j: Tonyja, hobija. A man’s name in -o drops the -o before the ending: Bruno → Bruna. A woman’s name that does not end in -a stays as it is: s Ruth, za Carmen.',
      },
      12,
      3,
      {
        type: 'order',
        q: 'Put the words in order. A woman says: "I heard that song on the radio."',
        words: ['Tu', 'sam', 'pjesmu', 'čula', 'na', 'radiju.'],
        accept: [
          'Tu pjesmu sam čula na radiju.',
          'Na radiju sam čula tu pjesmu.',
          'Čula sam tu pjesmu na radiju.',
          'Tu pjesmu čula sam na radiju.',
          'Tu sam pjesmu na radiju čula.',
        ],
        explanation:
          'Tu sam pjesmu čula na radiju. — radio turns its o into j before an ending: na radiju.',
      },
      13,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sutra', 'putujem', 'u', 'Pariz', 's', 'Ingridom.'],
        wrong: 5,
        answer: 'Ingrid',
        hint: 'Look at the name: a woman’s name that does not end in -a behaves differently from a man’s.',
        explanation:
          'Sutra putujem u Pariz s Ingrid. — a feminine name that does not end in -a does not decline at all, like a woman’s surname: s gospođom Horvat.',
      },
      {
        type: 'tf',
        q: 'The word dio (part) declines like radio: „u prvom diju”.',
        answer: false,
        hint: 'Radio is a loanword. Is dio?',
        explanation:
          'False. Dio is a native word with the stem dijel-: dijela, u prvom dijelu, dijelovi. Only loanwords and names in -io turn the o into j.',
      },
      {
        type: 'match',
        q: 'Mario or Marija? Match each sentence to its meaning.',
        pairs: [
          ['Vidim Marija.', 'I see Mario.'],
          ['Vidim Mariju.', 'I see Marija.'],
          ['Marija me vidi.', 'Marija sees me.'],
          ['Mario me vidi.', 'Mario sees me.'],
        ],
        explanation:
          'Marija as an object is the accusative of the man Mario (the o becomes j). The woman Marija as an object is Mariju; as a subject she is Marija.',
      },
      {
        type: 'transform',
        q: 'The same sentence, but about Mario instead of Marko.',
        from: 'Razgovarala sam s Markom.',
        answer: 'Razgovarala sam s Marijem.',
        accept: ['S Marijem sam razgovarala.'],
        hint: 'The o of this name turns into j before the ending — and after j the instrumental ending is -em, not -om.',
        explanation:
          'Razgovarala sam s Marijem. — Mario → Marija, Mariju, Marijem, like radio → radijem.',
      },
      7,
      8,
      1,
      {
        type: 'listen',
        audio: 'Dante je iz Italije, a Harry iz Australije. Upoznali su se u Sydneyju.',
        q: 'Where did Dante and Harry meet?',
        options: ['In Italy', 'In Sydney', 'In Tokyo', 'In Melbourne'],
        correct: 1,
        explanation:
          'Upoznali su se u Sydneyju — they met in Sydney. The name ends in an i sound, so the locative adds j: u Sydneyju.',
      },
      {
        type: 'dictate',
        audio: 'Idem taksijem do studija.',
        answer: 'Idem taksijem do studija.',
        hint: 'Four words: "I am going by taxi to the studio."',
        explanation:
          'Idem taksijem do studija. — taksi adds j (taksijem); studio turns its o into j (do studija, the genitive).',
      },
    ],
  },

  // ── davati → dajem, stati → stanem ─────────────────────────────────────────
  'verbs-vati-jem': {
    text: {
      kind: 'dialogue',
      title: 'Prodajem bicikl',
      lines: [
        {
          who: 'Lucija',
          hr: 'Dobar dan, zovem zbog oglasa. Prodajete li još onaj bicikl?',
          en: 'Good afternoon, I am calling about the ad. Are you still selling that bicycle?',
        },
        {
          who: 'Davor',
          hr: 'Prodajem. Star je pet godina, ali je kao nov. Uz njega dajem i kacigu.',
          en: 'I am. It is five years old, but it is like new. I am giving a helmet with it too.',
        },
        {
          who: 'Lucija',
          hr: 'Zašto ga prodajete, ako smijem pitati?',
          en: 'Why are you selling it, if I may ask?',
        },
        {
          who: 'Davor',
          hr: 'Selim se u Njemačku. Ako ostanem ondje, bicikl mi više neće trebati.',
          en: 'I am moving to Germany. If I stay there, I will not need the bicycle any more.',
        },
        {
          who: 'Lucija',
          hr: 'Razumijem. Poznajem Vašeg susjeda Igora — kaže da ste pošten čovjek. Može li za sto eura?',
          en: 'I understand. I know your neighbor Igor — he says you are an honest man. Would a hundred euros do?',
        },
        {
          who: 'Davor',
          hr: 'Moja je cijena sto dvadeset. Ali ako pristanete na sto deset, bicikl je Vaš.',
          en: 'My price is one hundred twenty. But if you agree to one hundred ten, the bicycle is yours.',
        },
        {
          who: 'Lucija',
          hr: 'Pristajem! Svaki dan ustajem u šest i vozim se na posao, pa mi treba dobar bicikl.',
          en: 'I agree! Every day I get up at six and ride to work, so I need a good bicycle.',
        },
        {
          who: 'Davor',
          hr: 'Onda je ovaj pravi. Kad stanete pred mojom kućom, nazovite me — zvono ne radi.',
          en: 'Then this is the right one. When you stop in front of my house, call me — the doorbell does not work.',
        },
        {
          who: 'Lucija',
          hr: 'Hoću. I sretno u Njemačkoj — možda tamo postanete poznati biciklist!',
          en: 'I will. And good luck in Germany — maybe you will become a famous cyclist there!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why is Davor selling the bicycle, and what price do they agree on?',
          options: [
            'He needs the money; 100 euros',
            'He is moving to Germany; 110 euros',
            'He has bought a new one; 120 euros',
            'He no longer rides; 110 euros',
          ],
          correct: 1,
          hint: 'Lucija offers one price, Davor names another — and they meet in the middle.',
          explanation:
            'Selim se u Njemačku. Lucija offers 100, his price is 120, and they agree on 110: ako pristanete na sto deset, bicikl je Vaš.',
        },
        {
          q: 'Davor says: "Ako ostanem ondje, bicikl mi više neće trebati." Is he staying in Germany already?',
          options: [
            'Yes — ostanem is the ordinary present: "I am staying"',
            'No — ostati is perfective, and after ako its present speaks of something that may happen later',
            'Yes — ostanem is a form of the past',
            'No — ostanem is a command addressed to Lucija',
          ],
          correct: 1,
          hint: 'He has not even moved yet. What kind of verb is ostati, and what does its present do after ako or kad?',
          explanation:
            'Ostati is perfective. The present of a perfective verb cannot describe "right now"; after ako, kad or da it refers to a possible or future event: if I end up staying there.',
        },
        {
          type: 'type',
          q: 'Now you. Lucija and her husband have both known Igor for years: Mi ____ Igora već godinama. (poznavati)',
          answer: 'poznajemo',
          hint: 'The -va- disappears in the present and a j takes its place; then the ordinary mi ending.',
          explanation:
            'Mi poznajemo Igora već godinama. — poznavati → poznajem, poznaješ, poznaje, poznajemo.',
        },
        {
          type: 'type',
          q: 'Davor’s wife gets up at seven every single day: Ona svaki dan ____ u sedam. (ustajati)',
          answer: 'ustaje',
          hint: 'A habit, so the imperfective verb; third person, on the stem that ends in j.',
          explanation:
            'Ona svaki dan ustaje u sedam. — ustajati → ustajem, ustaješ, ustaje. The perfective partner is ustati → ustanem.',
        },
        {
          type: 'transform',
          q: 'This was Grandma’s habit in the past. Say that she still does it — in the present.',
          from: 'Baka je djeci davala bombone.',
          answer: 'Baka djeci daje bombone.',
          accept: [
            'Baka daje djeci bombone.',
            'Djeci baka daje bombone.',
            'Baka daje bombone djeci.',
          ],
          hint: 'The past keeps -va-; the present drops it and takes a j. And the auxiliary is no longer needed.',
          explanation:
            'Baka djeci daje bombone. — davala is built on the infinitive (da-va-la); the present loses the -va-: dajem, daješ, daje.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'A small family built on stati. Match each verb to its meaning.',
        pairs: [
          ['postati', 'to become'],
          ['ostati', 'to stay'],
          ['ustati', 'to get up'],
          ['nestati', 'to disappear'],
          ['pristati', 'to agree to something'],
        ],
        explanation:
          'All five are perfective, and all five take -nem in the present, as stati does: stanem, staneš, stane.',
      },
      9,
      0,
      {
        type: 'sort',
        q: 'Is the sentence about a habit or something in progress — or about one completed act?',
        groups: ['A habit or something in progress', 'One completed act'],
        items: [
          { hr: 'Svako jutro ustajem u šest.', group: 0 },
          { hr: 'Sutra moram ustati u pet.', group: 1 },
          { hr: 'Na tržnici prodajem jagode.', group: 0 },
          { hr: 'Moram prodati auto.', group: 1 },
          { hr: 'Često priznaje svoje pogreške.', group: 0 },
          { hr: 'Mora priznati istinu.', group: 1 },
        ],
        explanation:
          'The imperfective verbs (ustajati, prodavati, priznavati) show habits and things in progress, with the present in -jem. Their perfective partners (ustati, prodati, priznati) name one completed act.',
      },
      11,
      2,
      4,
      {
        type: 'order',
        q: 'Put the words in order: "When I become a cook, I will open a restaurant."',
        words: ['Kad', 'postanem', 'kuharica,', 'otvorit', 'ću', 'restoran.'],
        accept: ['Otvorit ću restoran kad postanem kuharica.'],
        explanation:
          'Kad postanem kuharica, otvorit ću restoran. — after kad, the present of the perfective postati points to the future.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moj', 'djed', 'poznava', 'sve', 'ljude', 'u', 'selu.'],
        wrong: 2,
        answer: 'poznaje',
        hint: 'In the present of this verb the -va- does not survive.',
        explanation:
          'Moj djed poznaje sve ljude u selu. — poznavati drops -va- and takes j in the present; the -va- returns only in the past: poznavao.',
      },
      13,
      {
        type: 'tf',
        q: 'In „Ako ostanem u Zagrebu, javit ću ti se”, the speaker has already decided to stay in Zagreb.',
        answer: false,
        hint: 'What does ako do to the sentence?',
        explanation:
          'False. It is only a condition: IF I stay. The present of the perfective ostati after ako speaks of something that may or may not happen.',
      },
      {
        type: 'transform',
        q: 'Put it in the past. A man is speaking.',
        from: 'Prodajem voće na tržnici.',
        answer: 'Prodavao sam voće na tržnici.',
        accept: ['Na tržnici sam prodavao voće.', 'Voće sam prodavao na tržnici.'],
        hint: 'The past is built on the infinitive, so the syllable that the present dropped comes back.',
        explanation:
          'Prodavao sam voće na tržnici. — present prodajem, but past prodavao: the past keeps the infinitive stem with -va-.',
      },
      14,
      6,
      3,
      12,
      {
        type: 'listen',
        audio: 'Moja sestra prodaje stan jer se udaje i seli u Zadar.',
        q: 'Why is the sister selling her apartment?',
        options: [
          'Because it is too small for her children',
          'Because she is getting married and moving to Zadar',
          'Because she has found a job abroad',
          'Because she wants to buy a house in Zagreb',
        ],
        correct: 1,
        explanation:
          'Jer se udaje i seli u Zadar — because she is getting married and moving to Zadar. Two -vati verbs without their -va-: prodavati → prodaje, udavati se → udaje se.',
      },
      {
        type: 'dictate',
        audio: 'Ne poznajem tog čovjeka.',
        answer: 'Ne poznajem tog čovjeka.',
        accept: ['Ne poznajem toga čovjeka.'],
        hint: 'Four words: "I do not know that man."',
        explanation:
          'Ne poznajem tog čovjeka. — poznavati → poznajem; the -va- is gone in the present.',
      },
    ],
  },
};
