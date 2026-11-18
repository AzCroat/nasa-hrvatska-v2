// ─── C1 lessons in class order — Units 3–4 (lessons 11–20) ───────────────────
// Same shape and rules as units01-02.js:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Each text avoids the exact forms that the typed items kept by index ask for
// (the text slide comes before the practice), and each typed item stands before
// anything on the practice slide that prints its answer. Where Croatian has more
// than one standard form or order, every one is accepted; a "wrong" sentence is
// always a clear violation, never a marked-but-correct variant.

export const CLASS_C1_U03_04 = {
  // ══ UNIT 3 ═════════════════════════════════════════════════════════════════

  // ── Word order and emphasis ────────────────────────────────────────────────
  'word-order-emphasis': {
    text: {
      kind: 'dialogue',
      title: 'Najava za večernje vijesti',
      lines: [
        {
          who: 'Urednik',
          hr: 'Dora, u najavi piše: „Ostavku je jučer podnio ministar financija.” Zašto ste rečenicu okrenuli naopako?',
          en: 'Dora, the lead-in says: “The resignation was submitted yesterday by the finance minister.” Why did you turn the sentence upside down?',
        },
        {
          who: 'Novinarka',
          hr: 'Nisam je okrenula naopako, nego prema slušatelju: da će netko iz vlade otići, šuška se već danima, a nitko nije znao tko. Novo je ime, pa ime dolazi na kraj.',
          en: 'I did not turn it upside down, but toward the listener: for days there have been rumors that someone in the government would go, and nobody knew who. The name is what is new, so the name comes at the end.',
        },
        {
          who: 'Urednik',
          hr: 'A da smo već bili javili kako ministar odlazi, pa da se čekalo samo kada?',
          en: 'And if we had already reported that the minister was leaving, and people were only waiting to hear when?',
        },
        {
          who: 'Novinarka',
          hr: 'Tada bih napisala: „Ministar financija podnio je ostavku jučer.” Iste riječi, ali odgovor na drugo pitanje.',
          en: 'Then I would have written: “The finance minister submitted his resignation yesterday.” The same words, but the answer to a different question.',
        },
        {
          who: 'Urednik',
          hr: 'Dobro. No u drugoj rečenici stoji: „Premijeru je odluku priopćio telefonom.” Premijer je ondje na početku, premda ga dotad nitko ne spominje.',
          en: 'All right. But the second sentence reads: “To the prime minister he announced the decision by phone.” The prime minister stands at the beginning there, although nobody has mentioned him up to that point.',
        },
        {
          who: 'Novinarka',
          hr: 'Zato što je to opreka: predsjedniku Republike poslao je pismo, a premijeru se samo javio telefonom. Ono što suprotstavljam izvlačim na početak rečenice, pa slušatelj odmah čuje koga s kim uspoređujem.',
          en: 'Because it is a contrast: to the president of the Republic he sent a letter, while the prime minister only got a phone call. What I am contrasting I pull to the front of the sentence, so the listener hears at once whom I am comparing with whom.',
        },
        {
          who: 'Urednik',
          hr: 'Više me brine treća rečenica: „Ostavku nije ponudio on, nego ju je zatražio premijer.” Treba li nam taj „on”?',
          en: 'The third sentence worries me more: “It was not he who offered his resignation; the prime minister asked for it.” Do we need that “on”?',
        },
        {
          who: 'Novinarka',
          hr: 'Treba, i to baš zato što zamjenicu inače izostavljamo. „Nije ponudio ostavku” bila bi obična obavijest; s izgovorenim „on” na kraju rečenica kaže da je odluka došla s druge strane.',
          en: 'We do, precisely because we normally leave the pronoun out. “Nije ponudio ostavku” would be a plain statement; with a spoken “on” at the end, the sentence says that the decision came from the other side.',
        },
        {
          who: 'Urednik',
          hr: 'Uvjerili ste me. Samo mi još recite komu ste tekst dali na čitanje — lektoru ili uredništvu?',
          en: 'You have convinced me. Just tell me one more thing: whom did you give the text to for reading — the copy editor or the editorial desk?',
        },
        {
          who: 'Novinarka',
          hr: 'Vama sam ga poslala još u podne, a lektoru tek maloprije; Vas sam, uostalom, i htjela pitati prije nego što ga itko drugi vidi.',
          en: 'I sent it to you back at noon, and to the copy editor only a moment ago; you, after all, were the one I wanted to ask before anyone else saw it.',
        },
        {
          who: 'Urednik',
          hr: 'Onda ga puštamo ovako. Jedino ćemo najavu skratiti: neka glasi „Odlazi ministar financija.”',
          en: 'Then we will run it as it is. We will only shorten the lead-in: let it read “The finance minister is leaving.”',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why did the journalist put "ministar financija" at the very end of her first sentence?',
          options: [
            'Because a subject may never open a sentence in a news bulletin',
            'Because the editor had asked for a shorter lead-in',
            'Because a resignation had been rumored for days, so only the name was news',
            'Because "jučer" always has to stand before the verb',
          ],
          correct: 2,
          hint: 'Think about what the listeners already knew and what they were still waiting to hear.',
          explanation:
            'Everybody expected someone to go; nobody knew who. In neutral order the known information comes first and the new information last, so the name closes the sentence: Ostavku je jučer podnio ministar financija.',
        },
        {
          q: 'The journalist says "Vama sam ga poslala još u podne, a lektoru tek maloprije." Why "Vama" and not the short form "Vam"?',
          options: [
            'Because "Vama" is an instrumental here: "with you"',
            'Because the word is contrasted with "lektoru" and opens the sentence, and a clitic can do neither',
            'Because polite address has no short forms',
            'Because the auxiliary "sam" must always be preceded by a full pronoun',
          ],
          correct: 1,
          hint: 'Two things are true of this word: it is set against another person, and nothing stands in front of it.',
          explanation:
            'Vam is a clitic: it has no stress, so it can neither carry a contrast nor stand first. The full dative Vama does both, and the cluster sam ga follows it at once, in second position.',
        },
        {
          type: 'type',
          q: 'Now you. The editor asked Dora, not the copy editor. Say it with pronouns: Nije pitao ____, nego nju. (HIM)',
          answer: 'njega',
          hint: 'A contrast needs the stressed accusative of "on"; the short form ga cannot stand against nju.',
          explanation:
            'Nije pitao njega, nego nju. — both halves of a contrast take the full forms. The clitic ga would have to sit in second position (Nije ga pitao) and could not be stressed.',
        },
        {
          type: 'transform',
          q: 'The newsroom is asking: „Tko je lektoru poslao tekst?” Reorder the sentence so that the answer stands where a reader expects it.',
          from: 'Dora je lektoru poslala tekst.',
          answer: 'Tekst je lektoru poslala Dora.',
          accept: [
            'Lektoru je tekst poslala Dora.',
            'Lektoru je poslala tekst Dora.',
            'Tekst mu je poslala Dora.',
            'Lektoru ga je poslala Dora.',
            'Poslala mu ga je Dora.',
          ],
          hint: 'What the question already contains goes first; the one new piece of information closes the sentence. The auxiliary stays in second position.',
          explanation:
            'Tekst je lektoru poslala Dora. — the text and the copy editor are known, so they open the sentence; Dora is the answer and takes the final position. Whatever is moved, je stays right after the first stressed unit.',
        },
        {
          type: 'transform',
          q: 'Dora corrects a misunderstanding: she sent it to the editor, NOT to the copy editor (lektor). Front the contrasted word and add the rejected alternative.',
          from: 'Poslala sam tekst uredniku.',
          answer: 'Uredniku sam poslala tekst, a ne lektoru.',
          accept: [
            'Uredniku sam poslala tekst a ne lektoru.',
            'Uredniku sam ga poslala a ne lektoru.',
            'Uredniku sam poslala tekst, ne lektoru.',
            'Uredniku sam tekst poslala, a ne lektoru.',
            'Uredniku sam tekst poslala, ne lektoru.',
            'Uredniku sam ga poslala, a ne lektoru.',
            'Uredniku sam ga poslala, ne lektoru.',
          ],
          hint: 'The contrasted person opens the sentence, the auxiliary follows it immediately, and the rejected person stands in the same case after a comma.',
          explanation:
            'Uredniku sam poslala tekst, a ne lektoru. — fronting marks the contrast, the clitic sam keeps second position, and the rejected alternative (lektoru) is in the dative too, because it plays the same role in the sentence.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'tf',
        q: '"Kruh sam kupio." is the neutral way to mention, out of the blue, that you bought bread.',
        answer: false,
        hint: 'Ask yourself what a listener expects to hear next after an object that has been pulled to the front.',
        explanation:
          'False. A fronted object announces a contrast or picks up a topic already under discussion: Kruh sam kupio, a mlijeko nisam. Said out of the blue, the neutral order is Kupio sam kruh — the new information last.',
      },
      10,
      {
        type: 'sort',
        q: 'In neutral intonation the last word is the new information. Which question does each sentence answer?',
        groups: ['It answers "Who?"', 'It answers "When?"', 'It answers "What?"'],
        items: [
          { hr: 'Račun je platila Marta.', group: 0 },
          { hr: 'Marta je račun platila sinoć.', group: 1 },
          { hr: 'Marta je sinoć platila račun.', group: 2 },
          { hr: 'Vijest je objavio portal.', group: 0 },
          { hr: 'Portal je vijest objavio u ponoć.', group: 1 },
          { hr: 'Portal je u ponoć objavio ispravak.', group: 2 },
        ],
        explanation:
          'The same words can answer different questions. What the question already contains comes first; the answer takes the final position: platila Marta (who?), platila sinoć (when?), platila račun (what?).',
      },
      8,
      {
        type: 'match',
        q: 'Match each sentence to what it tells the listener.',
        pairs: [
          ['Nisam to rekao.', 'I did not say that. (a plain statement)'],
          ['Ja to nisam rekao.', 'I did not say that — someone else did.'],
          ['To nisam rekao.', 'THAT I did not say — I said something else.'],
          ['Nisam to rekao, nego napisao.', 'I did not SAY it — I put it in writing.'],
          ['Nikomu to nisam rekao.', 'I did not say that to anyone.'],
        ],
        explanation:
          'A dropped subject pronoun is neutral; a spoken ja is emphatic. A fronted to makes the object the point of contrast, and nego names what replaces the rejected word.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "I returned it to THEM yesterday (not to anyone else)."',
        words: ['Njima', 'sam', 'ga', 'jučer', 'vratila.'],
        accept: [
          'Njima sam ga vratila jučer.',
          'Jučer sam ga vratila njima.',
          'Jučer sam ga njima vratila.',
          'Vratila sam ga njima jučer.',
          'Vratila sam ga jučer njima.',
        ],
        explanation:
          'Njima sam ga jučer vratila. — the stressed words may be arranged in several ways, and each arrangement shifts the emphasis: fronted Njima marks the contrast most clearly, while a final njima makes it the new information. What never moves is the cluster sam ga, right after the first stressed word.',
      },
      2,
      {
        type: 'fix',
        q: 'One word cannot stand where it is. Tap it. ("YOU I trust, them I do not.")',
        words: ['Ti', 'vjerujem,', 'a', 'njima', 'ne.'],
        wrong: 0,
        answer: 'Tebi',
        hint: 'A short pronoun form can never open a sentence, and it can never carry a contrast.',
        explanation:
          'Tebi vjerujem, a njima ne. — vjerovati takes the dative, and the short dative ti is a clitic: it cannot stand first or be set against njima. The contrast needs the full form.',
      },
      {
        type: 'transform',
        q: 'Somebody asks: „Tko je pozvao hitnu pomoć?” Reorder the sentence so that the new information comes last.',
        from: 'Susjed je pozvao hitnu pomoć.',
        answer: 'Hitnu pomoć pozvao je susjed.',
        accept: [
          'Hitnu je pomoć pozvao susjed.',
          'Hitnu pomoć je pozvao susjed.',
          'Pozvao ju je susjed.',
        ],
        hint: 'The ambulance is already in the question, so it opens the answer; the person the question asks about closes it.',
        explanation:
          'Hitnu pomoć pozvao je susjed. — known information first, the answer last. The clitic je may follow the whole opening phrase and the verb (pozvao je) or split the phrase (Hitnu je pomoć); both keep to the second-position rule.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Njega sam pozvala na večeru, a ne njegova brata, pa ne znam zašto su došla obojica.',
        q: 'What is the speaker saying?',
        options: [
          'She invited both brothers, and neither of them came',
          'She invited his brother, and he came instead',
          'She invited him, not his brother, and yet both of them turned up',
          'She does not know which of the two brothers she invited',
        ],
        correct: 2,
        explanation:
          'Njega sam pozvala… a ne njegova brata — the fronted full form Njega carries the contrast: HIM, not his brother. The second clause adds her surprise: pa ne znam zašto su došla obojica (so I do not know why both came).',
      },
      {
        type: 'dictate',
        audio: 'Tu odluku nisam donijela ja.',
        answer: 'Tu odluku nisam donijela ja.',
        hint: 'Five words: "That decision was not made by ME." (a woman speaking)',
        explanation:
          'Tu odluku nisam donijela ja. — the decision is the known topic and opens the sentence; the spoken pronoun ja, in the final position, is the new and contrasted information: somebody else made it.',
      },
    ],
  },

  // ── The collective in -ad ──────────────────────────────────────────────────
  'collective-plural': {
    text: {
      kind: 'text',
      title: 'Bakino pismo iz Slavonije',
      lines: [
        {
          hr: 'Draga moja Ivana, pišem ti s trijema jer je u kući napokon tišina: unučad je još sinoć doputovala, a jutros je već prije sedam bila na nogama.',
          en: 'My dear Ivana, I am writing to you from the porch because the house is quiet at last: the grandchildren arrived last night, and this morning they were up before seven.',
        },
        {
          hr: 'Najprije je sva ta gradska unučad otrčala u staju, gdje ju je dočekala telad koju je djed proljetos kupio na sajmu u Đakovu.',
          en: 'First all those city grandchildren ran off to the barn, where they were met by the calves that Grandpa bought this spring at the fair in Đakovo.',
        },
        {
          hr: 'Telad je, moram priznati, bila mirnija od djece: stajala je uza zid i samo gledala tko joj to tako rano dolazi u goste.',
          en: 'The calves, I must admit, were calmer than the children: they stood against the wall and just watched to see who was coming to visit them so early.',
        },
        {
          hr: 'Potom je došao red na pilad: ta se žuta pilad razbježala po dvorištu čim je Luka otvorio vratašca, pa smo je do podneva skupljali po koprivama.',
          en: 'Then it was the chicks’ turn: those yellow chicks scattered across the yard the moment Luka opened the little gate, so we spent until noon gathering them from the nettles.',
        },
        {
          hr: 'S mačadi je bilo lakše: mala se mačad sama popela Marti u krilo i ondje zaspala, kao da je cijeli život čekala upravo nju.',
          en: 'With the kittens it was easier: the little kittens climbed into Marta’s lap by themselves and fell asleep there, as if they had been waiting for her all their lives.',
        },
        {
          hr: 'Jedino mi je žao naše štenadi, koja se od tolike graje zavukla pod sijeno i nije izlazila do večeri.',
          en: 'I only feel sorry for our puppies, who crawled under the hay because of all the racket and did not come out until evening.',
        },
        {
          hr: 'Djed kaže da ovakvu unučad treba zaposliti, pa joj je povjerio perad: svako jutro mora nahraniti i kokoši i patke prije nego što sama sjedne za stol.',
          en: 'Grandpa says grandchildren like these need to be put to work, so he has entrusted them with the poultry: every morning they have to feed both the hens and the ducks before they sit down at the table themselves.',
        },
        {
          hr: 'Sutra nam dolazi i susjeda Kata, koja radi u domu za nezbrinutu djecu; kaže da je tamošnja siročad vrlo željna sela i životinja, pa razmišljamo da i tu djecu pozovemo na dan-dva.',
          en: 'Tomorrow our neighbor Kata is coming too; she works in a children’s home, and she says the orphans there are longing for the countryside and animals, so we are thinking of inviting those children for a day or two as well.',
        },
        {
          hr: 'Ne brini se, dakle, ni za što: unučad je sita, umorna i sretna, a ja sam, premda neispavana, sretnija od svih njih zajedno.',
          en: 'So do not worry about anything: the grandchildren are fed, tired and happy, and I, although short of sleep, am happier than all of them put together.',
        },
        {
          hr: 'Javi se kad uhvatiš vremena, i reci Davoru da njegova mlađa kći već razlikuje tele od ždrebeta. Voli te tvoja mama.',
          en: 'Get in touch when you find the time, and tell Davor that his younger daughter can already tell a calf from a foal. With love, your mom.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the letter: which young animals hid from the noise, and where?',
          options: [
            'The kittens, in Marta’s lap',
            'The calves, against the barn wall',
            'The puppies, under the hay',
            'The chicks, in the nettles',
          ],
          correct: 2,
          hint: 'One group of animals is the only one Grandma says she feels sorry for.',
          explanation:
            'Jedino mi je žao naše štenadi, koja se od tolike graje zavukla pod sijeno — the puppies crawled under the hay and stayed there until evening. The chicks ran into the nettles, but they were fleeing through an open gate, not hiding from noise.',
        },
        {
          q: 'Grandma writes "…pa smo je do podneva skupljali po koprivama." There were many chicks — so why "je" and not "ih"?',
          options: [
            'Because "je" is the auxiliary of "skupljali"',
            'Because "ih" can refer only to people',
            'Because a pronoun after "pa" is always singular',
            'Because "pilad" is grammatically one feminine singular noun, and the pronoun that stands for it is feminine singular too',
          ],
          correct: 3,
          hint: 'The auxiliary of this clause is already there, in another word. Look at what the little word replaces.',
          explanation:
            'The auxiliary is smo; je is the accusative clitic "her/it", standing for pilad. A collective in -ad is one feminine noun of the stvar type, however many animals it names, so everything that refers to it — participle, adjective, pronoun — is feminine singular.',
        },
        {
          type: 'type',
          q: 'Now you. Grandpa is busy in the barn: Djed se cijelo jutro bavi ____. (the calves — the collective; baviti se takes the instrumental)',
          answer: 'teladi',
          accept: ['telađu'],
          hint: 'An -ad noun declines like stvar, so its instrumental does not end in -om; the commoner of its two endings is the one the genitive and dative have as well.',
          explanation:
            'Djed se cijelo jutro bavi teladi. — the instrumental of an -ad noun ends in -i (a form in -ju, telađu, also exists). Never "teladom": the noun does not decline like žena.',
        },
        {
          type: 'transform',
          q: 'Replace "unuci" with the collective noun and make everything agree with it.',
          from: 'Naši su unuci jutros nahranili kokoši.',
          answer: 'Naša je unučad jutros nahranila kokoši.',
          accept: [
            'Naša unučad je jutros nahranila kokoši.',
            'Naša je unučad nahranila kokoši jutros.',
            'Jutros je naša unučad nahranila kokoši.',
            'Naša su unučad jutros nahranila kokoši.',
            'Naša unučad su jutros nahranila kokoši.',
          ],
          hint: 'Three words have to change with the noun: the possessive, the auxiliary and the participle. Think of one feminine noun.',
          explanation:
            'Naša je unučad jutros nahranila kokoši. — the possessive and the participle are feminine singular (naša, nahranila), and the verb is singular, exactly as in the letter (unučad je doputovala). Grammars also record a plural auxiliary with these nouns (unučad su nahranila), but the participle is never the masculine plural "nahranili".',
        },
        {
          type: 'transform',
          q: 'Put the sentence into the past tense.',
          from: 'Siročad se raduje selu i životinjama.',
          answer: 'Siročad se radovala selu i životinjama.',
          accept: [
            'Siročad su se radovala selu i životinjama.',
            'Siročad se veselila selu i životinjama.',
          ],
          hint: 'Two decisions: the gender and number of the participle, and what the standard language does with the third-person auxiliary right after se.',
          explanation:
            'Siročad se radovala selu i životinjama. — the participle is feminine singular, and the auxiliary je, which would land straight after se, is left out in the standard language.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Because "tele" is a neuter noun, its collective keeps neuter agreement: "Telad je paslo na livadi."',
        answer: false,
        hint: 'The collective is a new noun with its own gender; it does not inherit the gender of the single young animal.',
        explanation:
          'False. tele is neuter, but telad is a feminine noun of the stvar type: Telad je pasla na livadi. The same holds for pile → pilad and unuče → unučad.',
      },
      11,
      {
        type: 'sort',
        q: 'Which form of the -ad noun is this? Look at what the sentence needs.',
        groups: [
          'Subject (nominative)',
          'Direct object (accusative, same form)',
          'A case in -i (genitive, dative, locative, instrumental)',
        ],
        items: [
          { hr: 'Štenad se igrala pod stolom.', group: 0 },
          { hr: 'Na sajmu su prodavali telad.', group: 1 },
          { hr: 'Brinemo se o siročadi.', group: 2 },
          { hr: 'Novorođenčad je mirno spavala.', group: 0 },
          { hr: 'Djeca su hranila pilad.', group: 1 },
          { hr: 'Bez teladi staja je pusta.', group: 2 },
        ],
        explanation:
          'Like stvar, an -ad noun has one form for the nominative and the accusative (telad, pilad) and the ending -i everywhere else: o siročadi, bez teladi. Only the sentence shows whether the bare form is a subject or an object.',
      },
      10,
      {
        type: 'match',
        q: 'Match each subject to the predicate that agrees with it.',
        pairs: [
          ['Mlada telad', 'je pasla uz potok.'],
          ['Mladi telići', 'su pasli uz potok.'],
          ['Mlado tele', 'je paslo uz potok.'],
          ['Mlade krave', 'su pasle uz potok.'],
          ['Mladi bik', 'je pasao uz potok.'],
        ],
        explanation:
          'Five subjects, five agreements. telad is one feminine singular noun (je pasla), although it names many animals; telići is an ordinary masculine plural (su pasli); tele is neuter singular (je paslo).',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Our grandchildren came back from the seaside yesterday."',
        words: ['Naša', 'se', 'unučad', 'jučer', 'vratila', 's', 'mora.'],
        accept: [
          'Naša unučad se jučer vratila s mora.',
          'Naša se unučad vratila s mora jučer.',
          'Naša unučad se vratila s mora jučer.',
          'Naša se unučad jučer s mora vratila.',
          'Naša se unučad s mora vratila jučer.',
          'Jučer se naša unučad vratila s mora.',
          'Jučer se s mora vratila naša unučad.',
          'S mora se jučer vratila naša unučad.',
          'S mora se naša unučad vratila jučer.',
        ],
        explanation:
          'Naša se unučad jučer vratila s mora. — se leans on the first stressed word (Naša se unučad) or follows the whole first phrase (Naša unučad se). The participle is feminine singular, and no je follows se in the third person.',
      },
      3,
      {
        type: 'fix',
        q: 'One word does not agree. Tap it. ("Our chicks ate all the corn.")',
        words: ['Naša', 'je', 'pilad', 'pojelo', 'sav', 'kukuruz.'],
        wrong: 3,
        answer: 'pojela',
        hint: 'The ending of the participle has been copied from the single young bird, not from the collective.',
        explanation:
          'Naša je pilad pojela sav kukuruz. — pile is neuter (Naše je pile pojelo), but pilad is feminine singular, as naša already shows, so the participle ends in -a.',
      },
      2,
      {
        type: 'transform',
        q: 'Make the sentence passive, keeping the past tense. Begin with the animals and leave the vet out.',
        from: 'Veterinar je jučer cijepio telad.',
        answer: 'Telad je jučer cijepljena.',
        accept: [
          'Telad je cijepljena jučer.',
          'Jučer je telad cijepljena.',
          'Telad je jučer bila cijepljena.',
          'Jučer je cijepljena telad.',
          'Telad su jučer cijepljena.',
        ],
        hint: 'The passive participle agrees with its new subject — and that subject is one feminine noun, however many animals it names.',
        explanation:
          'Telad je jučer cijepljena. — the object telad becomes the subject without changing its form (nominative = accusative), and the passive participle takes the feminine singular: cijepljena.',
      },
      4,
      {
        type: 'listen',
        audio: 'Dok je starija unučad pomagala djedu oko teladi, mlađa je s bakom hranila pilad.',
        q: 'What were the younger grandchildren doing?',
        options: [
          'Helping Grandpa with the calves',
          'Feeding the chicks with Grandma',
          'Playing with the kittens in the yard',
          'Sleeping late in the house',
        ],
        correct: 1,
        explanation:
          'mlađa je s bakom hranila pilad — the younger ones were feeding the chicks with Grandma. mlađa stands for mlađa unučad, so it is feminine singular, like the participle hranila; the older ones (starija unučad) were helping Grandpa oko teladi.',
      },
      {
        type: 'dictate',
        audio: 'Mačad je popila sve mlijeko.',
        answer: 'Mačad je popila sve mlijeko.',
        hint: 'Five words: "The kittens drank all the milk."',
        explanation:
          'Mačad je popila sve mlijeko. — mačad is one feminine noun, so the verb is singular and the participle ends in -a.',
      },
    ],
  },

  // ── Time and fixed phrases in the locative ─────────────────────────────────
  'temporal-locative-idioms': {
    text: {
      kind: 'dialogue',
      title: 'Kapetan u radijskom studiju',
      lines: [
        {
          who: 'Voditeljica',
          hr: 'Kapetane Lukiću, u mladosti ste, kažu, obišli pola svijeta, a u starosti se ne mičete s Visa. Kako to?',
          en: 'Captain Lukić, they say that in your youth you sailed halfway around the world, and in old age you never leave Vis. How come?',
        },
        {
          who: 'Kapetan',
          hr: 'U djetinjstvu sam s rive gledao brodove i mislio da je sreća negdje preko mora; tek sam po povratku shvatio da sam je ostavio kod kuće.',
          en: 'In my childhood I watched the ships from the waterfront and thought happiness was somewhere across the sea; only on my return did I realize that I had left it at home.',
        },
        {
          who: 'Voditeljica',
          hr: 'Sjećate li se dana kad ste se prvi put ukrcali?',
          en: 'Do you remember the day you first went aboard?',
        },
        {
          who: 'Kapetan',
          hr: 'U lipnju pedeset i osme, u subotu, točno u podne — takvo se što ne zaboravlja. Na početku sam bio pomoćnik u brodskoj kuhinji, a na kraju zapovjednik, ali između jednoga i drugoga prošlo je trideset godina.',
          en: 'In June of fifty-eight, on a Saturday, at noon sharp — you do not forget a thing like that. At the beginning I was a galley hand and at the end a master, but thirty years went by between the one and the other.',
        },
        {
          who: 'Voditeljica',
          hr: 'Na glasu ste kao čovjek koji nikad nije zakasnio ni u jednu luku. Je li to istina ili legenda?',
          en: 'You have a reputation as a man who was never late into any port. Is that the truth or a legend?',
        },
        {
          who: 'Kapetan',
          hr: 'Legenda, i to, na sreću, lijepa. U stvari sam jednom iz Trsta isplovio s pola dana zakašnjenja: stroj je bio u kvaru, popravljali smo ga na brzinu, po noći, i krenuli tek pred zoru.',
          en: 'A legend — and, luckily, a nice one. Actually, I once sailed from Trieste half a day late: the engine was out of order, we repaired it in haste, at night, and set off only just before dawn.',
        },
        {
          who: 'Voditeljica',
          hr: 'U prošlosti su se, čujem, na brodovima poštovali zakoni kojih danas više nema.',
          en: 'In the past, I hear, people on board ship respected laws that no longer exist today.',
        },
        {
          who: 'Kapetan',
          hr: 'Neki su i danas na snazi, samo ih se malo tko drži. U svakom slučaju, dok je na kopnu rasprava o novim propisima još u tijeku, more ne čeka nikoga.',
          en: 'Some are still in force today; it is just that hardly anyone keeps to them. In any case, while the debate about new regulations is still under way on land, the sea waits for no one.',
        },
        {
          who: 'Voditeljica',
          hr: 'I sada ste, napokon, na odmoru?',
          en: 'And now you are, at long last, on vacation?',
        },
        {
          who: 'Kapetan',
          hr: 'Po danu jesam: sjedim pod smokvom i čitam. Po noći još uvijek plovim, a potkraj svakog sna ugledam svjetionik i znam da je sve u redu.',
          en: 'By day I am: I sit under the fig tree and read. At night I am still sailing, and toward the end of every dream I catch sight of a lighthouse and know that everything is all right.',
        },
        {
          who: 'Voditeljica',
          hr: 'Hvala Vam, kapetane. Naš je razgovor, nažalost, pri kraju, ali nadam se da ćemo ga nastaviti u proljeće, kad opet dođem na Vis.',
          en: 'Thank you, Captain. Our conversation is, unfortunately, nearly over, but I hope we will continue it in the spring, when I come to Vis again.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the interview: what does the captain admit about his reputation for never being late?',
          options: [
            'It is true: in thirty years he was never late once',
            'It is a legend: he once left Trieste half a day late because the engine was out of order',
            'It is a legend: he was late into port every single winter',
            'It is true, but only because other captains repaired his engine for him',
          ],
          correct: 1,
          hint: 'Recall the port he names and what was wrong with the ship there.',
          explanation:
            'Legenda, i to, na sreću, lijepa. — he sailed from Trieste s pola dana zakašnjenja, because stroj je bio u kvaru and had to be repaired na brzinu, po noći.',
        },
        {
          q: 'The captain says "U lipnju pedeset i osme, u subotu, točno u podne." All three phrases begin with "u". Why is the first noun in the locative and the other two in the accusative?',
          options: [
            'Because a month is a period you are inside, while a day and an hour are points in time',
            'Because "lipanj" is masculine, and masculine nouns always take the locative after "u"',
            'Because only the first time phrase of a sentence takes the locative',
            'Because the year that follows forces the locative on the word before it',
          ],
          correct: 0,
          hint: 'Compare the size of the three stretches of time: which of them can you be "in the middle of"?',
          explanation:
            'After u, the locative places an event inside a period — months, centuries, stretches of life: u lipnju. The accusative marks a point — a day, an hour, a season: u subotu, u podne (podne is neuter, so its accusative looks like the nominative).',
        },
        {
          type: 'type',
          q: 'Now you. His first ship was already old: Brod je izgrađen još u devetnaestom ____. (century)',
          answer: 'stoljeću',
          hint: 'A century is a period you are inside, so the neuter noun takes the same case as the ordinal in front of it.',
          explanation:
            'u devetnaestom stoljeću — centuries, like months and stretches of life, take u + the locative.',
        },
        {
          type: 'type',
          q: 'In formal style: Kapetan se obitelji javio odmah po ____ u luku. (arrival — dolazak)',
          answer: 'dolasku',
          hint: 'po in its formal sense "upon" takes the locative; the noun loses its fleeting a, and the consonant in front of the k adapts to it.',
          explanation:
            'po dolasku — upon arrival. This po + locative is formal; everyday Croatian says nakon dolaska or čim je stigao. dolazak → dolasku: the a drops out and z is devoiced before k.',
        },
        {
          type: 'transform',
          q: 'Say the same more formally: replace the kad clause with po + a verbal noun.',
          from: 'Kad je završio školu, ukrcao se na brod.',
          answer: 'Po završetku škole ukrcao se na brod.',
          accept: [
            'Po završetku škole, ukrcao se na brod.',
            'Ukrcao se na brod po završetku škole.',
            'Po završetku škole on se ukrcao na brod.',
            'Po završetku škole kapetan se ukrcao na brod.',
            'Po završetku škole se ukrcao na brod.',
            'Po završetku školovanja ukrcao se na brod.',
          ],
          hint: 'The noun you need is built on the same root as the verb of the kad clause; after po it stands in the locative, and what was the object of the verb follows it in the genitive.',
          explanation:
            'Po završetku škole ukrcao se na brod. — po + locative (završetak → završetku) means "upon", and škola follows in the genitive. It is the formal equivalent of nakon završetka škole.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"U proljeće" and "u prosincu" both say when something happens, but the two nouns are in different cases.',
        answer: true,
        hint: 'One of them names a season, the other a month. Which of the two is treated as a period you are inside?',
        explanation:
          'True. A season after u is treated as a point and stands in the accusative (u proljeće, u jesen); a month is a period and stands in the locative (u prosincu, from prosinac).',
      },
      8,
      {
        type: 'sort',
        q: 'Locative or accusative? Look at the ending of the noun.',
        groups: [
          'Locative: a period, or a fixed locative phrase',
          'Accusative: a point in time, or a look-alike',
        ],
        items: [
          { hr: 'u mladosti', group: 0 },
          { hr: 'u srijedu', group: 1 },
          { hr: 'na početku', group: 0 },
          { hr: 'na sreću', group: 1 },
          { hr: 'u podne', group: 1 },
          { hr: 'u srednjem vijeku', group: 0 },
          { hr: 'na brzinu', group: 1 },
          { hr: 'u kvaru', group: 0 },
        ],
        explanation:
          'The noun shows the case: mladosti, početku, vijeku and kvaru are locatives; srijedu, sreću and brzinu are accusatives (their locatives would be srijedi, sreći, brzini), and the neuter podne looks the same in both the nominative and the accusative.',
      },
      11,
      {
        type: 'match',
        q: 'Match each fixed phrase to its meaning.',
        pairs: [
          ['biti na glasu', 'to have a reputation'],
          ['biti na snazi', 'to be in force'],
          ['biti u tijeku', 'to be under way'],
          ['biti u kvaru', 'to be out of order'],
          ['biti pri kraju', 'to be nearly over'],
        ],
        explanation:
          'All five are fixed locative phrases learned as wholes: glas → na glasu, snaga → na snazi (g becomes z before -i), tijek → u tijeku, kvar → u kvaru, kraj → pri kraju.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "By day she works, and at night she writes."',
        words: ['Po', 'danu', 'radi,', 'a', 'po', 'noći', 'piše.'],
        accept: [
          'Radi po danu, a piše po noći.',
          'Po danu radi, a piše po noći.',
          'Radi po danu, a po noći piše.',
        ],
        explanation:
          'Po danu radi, a po noći piše. — po + locative gives "by day" and "at night". Putting the two time phrases first in their clauses sets them against each other; the other orders are possible too and only shift the emphasis.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("They got married in September.")',
        words: ['Vjenčali', 'su', 'se', 'u', 'rujan.'],
        wrong: 4,
        answer: 'rujnu.',
        hint: 'A month is a period you are inside, not a point in time — and this noun loses a vowel when it takes an ending.',
        explanation:
          'Vjenčali su se u rujnu. — months take u + the locative, and the fleeting a of rujan drops out: u rujnu. The accusative after u is for points in time: u subotu, u podne.',
      },
      {
        type: 'transform',
        q: 'The season becomes a month: replace "proljeće" with "travanj" (April).',
        from: 'Na Vis putujemo u proljeće.',
        answer: 'Na Vis putujemo u travnju.',
        accept: ['U travnju putujemo na Vis.', 'Putujemo na Vis u travnju.'],
        hint: 'A season after u is a point; a month is a period — so the case changes, and this noun also loses its fleeting a.',
        explanation:
          'Na Vis putujemo u travnju. — u proljeće is an accusative, but months take the locative: travanj → u travnju, like lipanj → u lipnju.',
      },
      6,
      {
        type: 'listen',
        audio:
          'U stvari je cijeli život bio na glasu kao šutljiv čovjek, a tek je u starosti, na kraju karijere, progovorio o svemu.',
        q: 'What do we learn about the man?',
        options: [
          'All his life he was known as a great talker',
          'He lost his voice in old age and ended his career',
          'He was known as a man of few words and spoke out only in old age, at the end of his career',
          'He refused to say anything about his career, even in old age',
        ],
        correct: 2,
        explanation:
          'bio na glasu kao šutljiv čovjek — he had a reputation as a taciturn man; tek je u starosti, na kraju karijere, progovorio o svemu — only in old age, at the end of his career, did he speak out about everything. Four locative phrases in one sentence: u stvari, na glasu, u starosti, na kraju.',
      },
      {
        type: 'dictate',
        audio: 'U budućnosti će sve biti u redu.',
        answer: 'U budućnosti će sve biti u redu.',
        hint: 'Seven words: "In the future everything will be all right."',
        explanation:
          'U budućnosti će sve biti u redu. — two locatives: u budućnosti (a period) and the fixed phrase u redu. The clitic će follows the whole opening phrase.',
      },
    ],
  },

  // ── Disjunctive, exclusive and gradational clauses ─────────────────────────
  'disjunctive-gradational-clauses': {
    text: {
      kind: 'dialogue',
      title: 'Djedova kuća',
      lines: [
        {
          who: 'Jasna',
          hr: 'Tomislave, ovako više ne ide: ili ćemo kuću prodati ili ćemo je napokon obnoviti, a treće mogućnosti ja ne vidim.',
          en: 'Tomislav, it cannot go on like this: either we sell the house or we finally renovate it, and I do not see a third option.',
        },
        {
          who: 'Tomislav',
          hr: 'Lako je tebi reći. Obnova stoji novca, a još više živaca, a ja ni jednoga ni drugoga nemam napretek.',
          en: 'That is easy for you to say. A renovation costs money, and nerves even more, and I have neither to spare.',
        },
        {
          who: 'Jasna',
          hr: 'Bilo da je prodamo, bilo da je zadržimo, krov se mora popraviti prije zime; kupac će gledati u strop jednako kao i mi.',
          en: 'Whether we sell it or keep it, the roof has to be repaired before winter; a buyer will look at the ceiling just as we do.',
        },
        {
          who: 'Tomislav',
          hr: 'U tome se slažemo. Sve bih ti drugo prepustio, jedino što ne pristajem na to da se djedova radionica ruši.',
          en: 'On that we agree. I would leave everything else to you, except that I will not agree to Grandpa’s workshop being torn down.',
        },
        {
          who: 'Jasna',
          hr: 'Nitko je i ne misli rušiti. Arhitektica kaže da je radionica najzdraviji dio kuće, osim što joj treba nova stolarija.',
          en: 'Nobody is even thinking of tearing it down. The architect says the workshop is the soundest part of the house, except that it needs new doors and windows.',
        },
        {
          who: 'Tomislav',
          hr: 'A tko će to platiti? Ove godine nisam bio na moru, pa ni na izletu u Gorskom kotaru.',
          en: 'And who is going to pay for that? This year I have not been to the seaside — not even on a day trip to Gorski Kotar.',
        },
        {
          who: 'Jasna',
          hr: 'Znam, i zato predlažem dogovor. Ne tražim od tebe novac; tražim vrijeme: ti ćeš nadgledati radove, a ja ću platiti materijal ili ću, ne bude li ušteđevine dovoljno, podići kredit.',
          en: 'I know, and that is why I am proposing a deal. I am not asking you for money; I am asking for time: you will supervise the work, and I will pay for the materials or, if my savings are not enough, take out a loan.',
        },
        {
          who: 'Tomislav',
          hr: 'Nadgledat ću radove, pa ću i sam uzeti alat u ruke — pod uvjetom da radionica ostane kakva jest.',
          en: 'I will supervise the work, and even pick up the tools myself — on condition that the workshop stays as it is.',
        },
        {
          who: 'Jasna',
          hr: 'Ostat će. Bilo ljeti bilo zimi, u njoj ćeš moći raditi kad god poželiš; ključ će biti samo tvoj.',
          en: 'It will. Summer or winter, you will be able to work in it whenever you like; the key will be yours alone.',
        },
        {
          who: 'Tomislav',
          hr: 'Onda smo se, čini se, prvi put ove godine dogovorili bez svađe. Mama nam ne bi vjerovala.',
          en: 'Then it seems that, for the first time this year, we have reached an agreement without a fight. Mom would not believe us.',
        },
        {
          who: 'Jasna',
          hr: 'Vjerovala bi, samo bi pitala zašto nam je za to trebalo punih pet godina.',
          en: 'She would, only she would ask why it took us a full five years.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is the one thing Tomislav refuses to accept?',
          options: [
            'That the roof should be repaired before winter',
            'That Jasna should take out a loan',
            'That their grandfather’s workshop should be torn down',
            'That the house should be shown to a buyer',
          ],
          correct: 2,
          hint: 'He is ready to leave everything else to his sister — and names a single exception.',
          explanation:
            'Sve bih ti drugo prepustio, jedino što ne pristajem na to da se djedova radionica ruši. — an exclusive clause: he accepts everything and then takes one exception out of it.',
        },
        {
          q: 'Jasna opens with "ili ćemo kuću prodati ili ćemo je napokon obnoviti". What does the doubled "ili" do that a single one would not — and is a comma written before the second "ili"?',
          options: [
            'It says the choice makes no difference; a comma is required',
            'It turns an open choice into an ultimatum — one of the two and nothing else; no comma is written',
            'It makes the sentence more polite; the comma is optional',
            'It marks the second possibility as the likelier one; no comma is written',
          ],
          correct: 1,
          hint: 'Listen to what she adds straight afterward about a third possibility.',
          explanation:
            'A single ili leaves the choice open; ili… ili demands one of exactly two things — which is why she adds a treće mogućnosti ja ne vidim. Like i, ili takes no comma, whether single or repeated. "It makes no difference" would be bilo… bilo.',
        },
        {
          type: 'transform',
          q: 'Jasna loses patience. Join the two sentences into one ultimatum with the doubled connector.',
          from: 'Platit ćeš svoj dio. Odreći ćeš se kuće.',
          answer: 'Ili ćeš platiti svoj dio ili ćeš se odreći kuće.',
          accept: [
            'Ili ćeš platiti svoj dio ili ćeš se kuće odreći.',
            'Ili ćeš svoj dio platiti ili ćeš se odreći kuće.',
            'Ili ćeš platiti svoj dio ili se odreći kuće.',
          ],
          hint: 'The same small word opens both halves, the future auxiliary comes right behind it each time (so the infinitive gets its full form back), and nothing separates the halves.',
          explanation:
            'Ili ćeš platiti svoj dio ili ćeš se odreći kuće. — after ili the clitic ćeš takes second position, so platit ćeš becomes ćeš platiti. No comma before the second ili.',
        },
        {
          type: 'transform',
          q: 'The architect is pleased with the house, with one reservation. Join the two sentences so that the second takes one exception out of the first, the way Tomislav does when he speaks about the workshop.',
          from: 'Kuća je u dobrom stanju. Krov prokišnjava.',
          answer: 'Kuća je u dobrom stanju, jedino što krov prokišnjava.',
          accept: [
            'Kuća je u dobrom stanju, samo što krov prokišnjava.',
            'Kuća je u dobrom stanju, osim što krov prokišnjava.',
            'Kuća je u dobrom stanju, samo krov prokišnjava.',
            'Kuća je u dobrom stanju, jedino krov prokišnjava.',
          ],
          hint: 'A comma closes the positive picture; then comes a connector of exception that can introduce a whole clause — a word meaning "only" followed by što.',
          explanation:
            'Kuća je u dobrom stanju, jedino što krov prokišnjava. — an exclusive clause accepts what was said and removes one exception from it. jedino što, samo što and osim što introduce a whole clause, and a comma always stands before them.',
        },
        {
          type: 'transform',
          q: 'Say that the day makes no difference: replace "Svejedno je hoće li… ili…" with the frame Jasna uses for the roof.',
          from: 'Svejedno je hoće li kupac doći danas ili sutra: kuću mu moramo pokazati.',
          answer: 'Bilo da kupac dođe danas, bilo da dođe sutra, kuću mu moramo pokazati.',
          accept: [
            'Bilo da kupac dođe danas bilo da dođe sutra, kuću mu moramo pokazati.',
            'Bilo da kupac dođe danas, bilo sutra, kuću mu moramo pokazati.',
            'Bilo da kupac dođe danas bilo sutra, kuću mu moramo pokazati.',
            'Bilo da kupac dođe danas ili sutra, kuću mu moramo pokazati.',
            'Bilo da dođe danas, bilo da dođe sutra, kuću mu moramo pokazati.',
            'Bilo da dođe danas, bilo sutra, kuću mu moramo pokazati.',
          ],
          hint: 'One unchanging word + da, said twice; inside the frame the future becomes a perfective present.',
          explanation:
            'Bilo da kupac dođe danas, bilo da dođe sutra, kuću mu moramo pokazati. — bilo (da)… bilo (da) says that the outcome is the same either way. This bilo never changes its form, and the verb after da is a perfective present (dođe), not a future.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Bilo danas bilo sutra, posao mora biti gotov." tells the listener that one of the two days is clearly preferred.',
        answer: false,
        hint: 'Compare it with an ultimatum built on a doubled ili: which of the two frames is indifferent to the choice?',
        explanation:
          'False. bilo… bilo says that the choice does not matter — today or tomorrow, the outcome is the same: the job must be done.',
      },
      9,
      {
        type: 'sort',
        q: 'What does the second part of the sentence do?',
        groups: [
          'It offers a choice',
          'It takes out one exception',
          'It climbs to something stronger',
        ],
        items: [
          { hr: 'Dođi osobno ili pošalji poruku.', group: 0 },
          { hr: 'Bilo vlakom bilo autobusom, stižemo do podneva.', group: 0 },
          { hr: 'Stan je lijep, samo je malo daleko.', group: 1 },
          { hr: 'Sve smo riješili, jedino što još čekamo potvrdu.', group: 1 },
          { hr: 'Film je dobar, osim što predugo traje.', group: 1 },
          { hr: 'Ne samo da je položio ispit, nego je dobio i najbolju ocjenu.', group: 2 },
          { hr: 'Ne zna skuhati ni jaje, a kamoli ručak za šestero.', group: 2 },
        ],
        explanation:
          'Disjunctive sentences (ili, bilo… bilo) offer a choice; exclusive ones (samo, jedino što, osim što) accept the first clause and remove one exception; gradational ones (ne samo… nego i, a kamoli) go a step further than the first clause — up after a positive, down after a negative.',
      },
      12,
      {
        type: 'match',
        q: 'Match the beginning of each sentence to its ending.',
        pairs: [
          ['Ne samo da je došao,', 'nego je i pomogao.'],
          ['Jedva hoda,', 'a kamoli trči.'],
          ['Zna kuhati,', 'pa čak i peći kruh.'],
          ['Sve je spremno,', 'samo još nema gostiju.'],
          ['Ili ćeš mi pomoći', 'ili ću sve napraviti sam.'],
        ],
        explanation:
          'Each connector needs its own kind of first clause: nego i answers ne samo; a kamoli needs a negative or near-negative (jedva); pa čak i climbs up from a positive statement; samo takes one exception out of a positive picture; and the second ili answers the first.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Not only did she apologize, she also paid for the damage."',
        words: ['Ne', 'samo', 'da', 'se', 'ispričala,', 'nego', 'je', 'i', 'platila', 'štetu.'],
        accept: ['Ne samo da se ispričala, nego je platila i štetu.'],
        explanation:
          'Ne samo da se ispričala, nego je i platila štetu. — the clitics follow the first word of their own clause (da se; nego je), and i stands in front of what is added: i platila (the whole action) or i štetu (the damage as well).',
      },
      2,
      {
        type: 'fix',
        q: 'One word does not fit this sentence. Tap it. ("She had no time for lunch — not even for coffee.")',
        words: ['Nije', 'imala', 'vremena', 'za', 'ručak,', 'pa', 'čak', 'i', 'za', 'kavu.'],
        wrong: 7,
        answer: 'ni',
        hint: 'The first clause is negative, and Croatian carries a negation through to the end of the scale.',
        explanation:
          'Nije imala vremena za ručak, pa čak ni za kavu. — after a positive clause the scale climbs with pa čak i; after a negative one the negation has to be repeated: pa čak ni.',
      },
      6,
      {
        type: 'transform',
        q: 'Climb DOWN the scale: join the two sentences with "a kamoli", so that the harder thing comes second.',
        from: 'Ne može platiti najam. Ne može kupiti stan.',
        answer: 'Ne može platiti ni najam, a kamoli kupiti stan.',
        accept: [
          'Ne može ni platiti najam, a kamoli kupiti stan.',
          'Ne može platiti najam, a kamoli kupiti stan.',
          'Ne može ni najam platiti, a kamoli kupiti stan.',
          'Ne može platiti ni najam, a kamoli stan kupiti.',
          'Ne može platiti ni najam, a kamoli da kupi stan.',
        ],
        hint: 'The negation is said only once, in the first half; the second half follows a comma and keeps just the infinitive and its object.',
        explanation:
          'Ne može platiti ni najam, a kamoli kupiti stan. — a kamoli needs a negative first clause and is preceded by a comma; ni ("not even") in the first half sharpens the scale. The verb of ability is not repeated.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Ne samo da nam nije vratio dug, nego se, štoviše, uvrijedio kad smo ga na to podsjetili.',
        q: 'What happened?',
        options: [
          'He repaid the debt and thanked us for reminding him',
          'He did not repay the debt and, what is more, took offense when we reminded him of it',
          'He forgot about the debt but apologized when we reminded him',
          'He took offense because we refused to lend him more',
        ],
        correct: 1,
        explanation:
          'Ne samo da nam nije vratio dug — not only did he not repay us; nego se, štoviše, uvrijedio — but, what is more, he took offense. štoviše (one word, set off by commas) pushes the second clause a step further still.',
      },
      {
        type: 'dictate',
        audio: 'Ili reci istinu ili šuti.',
        answer: 'Ili reci istinu ili šuti.',
        hint: 'Five words: "Either tell the truth or keep quiet."',
        explanation:
          'Ili reci istinu ili šuti. — the doubled ili makes an ultimatum of two imperatives, and no comma is written before the second ili.',
      },
    ],
  },

  // ── Verb government ────────────────────────────────────────────────────────
  'verb-government': {
    text: {
      kind: 'dialogue',
      title: 'Sastanak stanara',
      lines: [
        {
          who: 'Predstavnica',
          hr: 'Gospodine Babiću, zahvaljujem Vam na strpljenju; znam da Vam buka iz lokala u prizemlju smeta već mjesecima.',
          en: 'Mr. Babić, thank you for your patience; I know the noise from the bar on the ground floor has been bothering you for months.',
        },
        {
          who: 'Babić',
          hr: 'Ne smeta ona samo meni, gospođo Horvat, nego i djeci iz stana iznad lokala, koja se više i ne sjećaju mirne večeri.',
          en: 'It does not bother only me, Mrs. Horvat, but also the children in the apartment above the bar, who no longer even remember a quiet evening.',
        },
        {
          who: 'Predstavnica',
          hr: 'Vlasnik tvrdi da se glazbom bavi samo vikendom i da se strogo pridržava kućnog reda.',
          en: 'The owner claims that he puts on music only on weekends and that he keeps strictly to the house rules.',
        },
        {
          who: 'Babić',
          hr: 'Njemu ja odavno ne vjerujem. Prošle nam je zime prijetio tužbom, a sada se odjednom raduje „dobrosusjedskim odnosima”.',
          en: 'I stopped believing him long ago. Last winter he was threatening us with a lawsuit, and now he is suddenly looking forward to “good neighborly relations.”',
        },
        {
          who: 'Predstavnica',
          hr: 'Razumijem Vas, ali nije dovoljno sumnjati u njegove namjere: sve ovisi o tome hoće li inspekcija izmjeriti buku dok lokal radi.',
          en: 'I understand you, but doubting his intentions is not enough: everything depends on whether the inspectors measure the noise while the bar is open.',
        },
        {
          who: 'Babić',
          hr: 'A na inspekciju, kao što znamo, nitko od nas ne može utjecati. Čemu se onda uopće možemo nadati?',
          en: 'And none of us, as we know, can influence the inspectors. So what can we hope for at all?',
        },
        {
          who: 'Predstavnica',
          hr: 'Dogovoru. Predložila sam vlasniku da se odrekne terase poslije deset navečer, a mi bismo se zauzvrat odrekli prijave.',
          en: 'An agreement. I have proposed to the owner that he give up the terrace after ten in the evening, and in return we would drop our complaint.',
        },
        {
          who: 'Babić',
          hr: 'Bojim se takvih dogovora: čim se riješi inspekcije, zaboravit će što je obećao.',
          en: 'I am wary of agreements like that: the moment he gets rid of the inspectors, he will forget what he promised.',
        },
        {
          who: 'Predstavnica',
          hr: 'Zato će se sporazum temeljiti na pisanom zapisniku, o kojemu ću se brinuti ja osobno. Mogu li računati na Vaš potpis?',
          en: 'That is why the settlement will be based on written minutes, which I will look after personally. Can I count on your signature?',
        },
        {
          who: 'Babić',
          hr: 'Možete, pod uvjetom da mi pomognete oko jedne stvari: netko se neovlašteno koristi mojim parkirnim mjestom, a upravitelj mi na pritužbe ne odgovara.',
          en: 'You can, on condition that you help me with one thing: somebody is using my parking space without permission, and the building manager does not answer my complaints.',
        },
        {
          who: 'Predstavnica',
          hr: 'Tomu ćemo se posvetiti već sutra. Hvala Vam na povjerenju — iskreno se radujem danu kad ćemo se na ovim sastancima baviti samo cvijećem u dvorištu.',
          en: 'We will turn to that tomorrow. Thank you for your trust — I sincerely look forward to the day when all we deal with at these meetings is the flowers in the courtyard.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what bargain has the tenants’ representative proposed to the owner of the bar?',
          options: [
            'He pays the tenants compensation, and they move the meeting',
            'He soundproofs the bar, and the tenants pay half the cost',
            'He closes the bar on weekends, and the tenants give up their parking spaces',
            'He gives up the terrace after ten in the evening, and the tenants drop their complaint',
          ],
          correct: 3,
          hint: 'Both sides are asked to renounce something; the same verb is used for both.',
          explanation:
            'Predložila sam vlasniku da se odrekne terase poslije deset navečer, a mi bismo se zauzvrat odrekli prijave. — odreći se governs the genitive both times: terase, prijave.',
        },
        {
          q: 'Mr. Babić asks: "Čemu se onda uopće možemo nadati?" Why "čemu", and not "što" or "čega"?',
          options: [
            'Because "uopće" requires the dative of the word that precedes it',
            'Because "nadati se" governs the dative, and the question word has to stand in the case the verb demands',
            'Because it is a locative: the preposition "o" has been left out',
            'Because every reflexive verb takes the dative',
          ],
          correct: 1,
          hint: 'Look at the one-word reply he gets: its ending shows the same case.',
          explanation:
            'nadati se governs the dative, so one asks čemu? and answers with a dative: Dogovoru. The reflexive se decides nothing by itself — bojati se and odreći se take the genitive, baviti se the instrumental.',
        },
        {
          type: 'type',
          q: 'Now you. The representative closes the meeting: Zahvaljujem svim ____ na dolasku. (the tenants — stanari)',
          answer: 'stanarima',
          hint: 'The people thanked answer the question "komu?", and the word svim has already shown you the case and number; what one is thankful for follows na.',
          explanation:
            'Zahvaljujem svim stanarima na dolasku. — zahvaliti / zahvaljivati takes the person in the dative and the reason with na + the locative.',
        },
        {
          type: 'transform',
          q: 'Replace "plaši" with the verb "bojati se" and let the lawsuit obey its new master.',
          from: 'Gospodina Babića plaši tužba.',
          answer: 'Gospodin Babić boji se tužbe.',
          accept: [
            'Gospodin Babić se boji tužbe.',
            'Gospodin se Babić boji tužbe.',
            'Boji se tužbe.',
            'Tužbe se boji gospodin Babić.',
            'On se boji tužbe.',
          ],
          hint: 'Two changes: the frightened person becomes the subject, and the thing feared goes into the case this reflexive verb governs.',
          explanation:
            'Gospodin Babić boji se tužbe. — with plašiti the lawsuit is the subject and the man the accusative object; with bojati se the man is the subject and the lawsuit stands in the genitive.',
        },
        {
          type: 'transform',
          q: 'Say the same with the verb "ovisiti": start with "Ishod".',
          from: 'O ishodu odlučuje inspekcija.',
          answer: 'Ishod ovisi o inspekciji.',
          accept: ['Ishod o inspekciji ovisi.'],
          hint: 'The preposition is part of this verb — and it is not the one English "depend ON" suggests. Its noun stands in the locative.',
          explanation:
            'Ishod ovisi o inspekciji. — ovisiti o + locative. English "on" tempts learners to say "ovisi na", which is not Croatian.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Odgovaram na pismo." and "Odgovara mi taj termin." use the same verb with two different governments — and two different meanings.',
        answer: true,
        hint: 'Translate both: is the verb doing the same job in each?',
        explanation:
          'True. odgovarati na + accusative means to answer (a letter, a question); odgovarati + dative means to suit (somebody). The government, not the verb form, tells you which meaning you have.',
      },
      9,
      {
        type: 'sort',
        q: 'Which case does the verb govern?',
        groups: ['Genitive', 'Dative', 'Instrumental'],
        items: [
          { hr: 'sjećati se', group: 0 },
          { hr: 'odreći se', group: 0 },
          { hr: 'čuvati se', group: 0 },
          { hr: 'vjerovati', group: 1 },
          { hr: 'radovati se', group: 1 },
          { hr: 'smetati', group: 1 },
          { hr: 'baviti se', group: 2 },
          { hr: 'upravljati', group: 2 },
        ],
        explanation:
          'Government is learned verb by verb: sjećati se, odreći se and čuvati se take the genitive; vjerovati, radovati se and smetati the dative; baviti se and upravljati the instrumental. Notice that se appears in all three groups — it predicts nothing.',
      },
      10,
      {
        type: 'match',
        q: 'Match each verb to its preposition and case.',
        pairs: [
          ['ovisiti', 'o + locative'],
          ['sumnjati', 'u + accusative'],
          ['sastojati se', 'od + genitive'],
          ['temeljiti se', 'na + locative'],
          ['utjecati', 'na + accusative'],
        ],
        explanation:
          'For these verbs the preposition is part of the lexical item: ovisiti o okolnostima, sumnjati u uspjeh, sastojati se od triju dijelova, temeljiti se na podacima, utjecati na odluku. The same na takes the locative with one verb and the accusative with another.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "He thanked us for the help."',
        words: ['Zahvalio', 'nam', 'je', 'na', 'pomoći.'],
        accept: ['Na pomoći nam je zahvalio.'],
        explanation:
          'Zahvalio nam je na pomoći. — zahvaliti takes the person in the dative (nam) and the reason with na + locative (na pomoći). In the cluster the dative pronoun stands before the third-person je.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("The children are looking forward to their school vacation.")',
        words: ['Djeca', 'se', 'raduju', 'praznike.'],
        wrong: 3,
        answer: 'praznicima.',
        hint: 'English "look forward to" gives no clue; this verb takes the case that answers "čemu?".',
        explanation:
          'Djeca se raduju praznicima. — radovati se governs the dative. The accusative is impossible here: the verb is reflexive and cannot take a direct object.',
      },
      0,
      {
        type: 'transform',
        q: 'Replace "koristi" with the reflexive "koristi se" and change the object to suit it.',
        from: 'Studentica koristi stari rječnik.',
        answer: 'Studentica se koristi starim rječnikom.',
        accept: ['Studentica koristi se starim rječnikom.', 'Koristi se starim rječnikom.'],
        hint: 'A reflexive verb cannot keep a direct object; this one takes the case of the tool.',
        explanation:
          'Studentica se koristi starim rječnikom. — koristiti takes the accusative, but koristiti se governs the instrumental, and both the adjective and the noun change: starim rječnikom.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Otkad se odrekao slatkiša i počeo se baviti trčanjem, više se ne boji ni liječnika ni vage.',
        q: 'What has changed for him?',
        options: [
          'Since he gave up running, he has been afraid of the doctor',
          'Since he started baking sweets, he no longer weighs himself',
          'His doctor has told him to give up sweets and take up running',
          'Since he gave up sweets and took up running, he fears neither the doctor nor the scale',
        ],
        correct: 3,
        explanation:
          'Three governments in one sentence: odreći se + genitive (slatkiša), baviti se + instrumental (trčanjem), bojati se + genitive (ni liječnika ni vage).',
      },
      {
        type: 'dictate',
        audio: 'Radujem se Vašem dolasku.',
        answer: 'Radujem se Vašem dolasku.',
        hint: 'Four words: "I am looking forward to your arrival." (said politely to one person)',
        explanation:
          'Radujem se Vašem dolasku. — radovati se + dative: Vašem dolasku. Vaš takes a capital when one person is addressed politely.',
      },
    ],
  },

  // ══ UNIT 4 ═════════════════════════════════════════════════════════════════

  // ── Aspect, fine distinctions ──────────────────────────────────────────────
  'aspect-nuance': {
    text: {
      kind: 'dialogue',
      title: 'Tko je noćas bio u arhivu?',
      lines: [
        {
          who: 'Inspektor',
          hr: 'Gospođo Lončar, jutros ste arhiv zatekli zaključan, kao i uvijek. Po čemu ste onda zaključili da je netko noću ulazio?',
          en: 'Mrs. Lončar, this morning you found the archive locked, as always. So what made you conclude that somebody had been in during the night?',
        },
        {
          who: 'Arhivistica',
          hr: 'Po sitnicama, inspektore. Netko je palio svjetlo u čitaonici: žarulja je bila još topla, premda je svjetlo bilo ugašeno. A kutiju s oporukama netko je uzimao s police: vraćena je, ali naopako.',
          en: 'From little things, Inspector. Somebody had the light on in the reading room: the bulb was still warm, although the light was off. And somebody took the box of wills down from the shelf: it has been put back, but upside down.',
        },
        {
          who: 'Inspektor',
          hr: 'Je li što nestalo? Je li taj netko išta uzeo?',
          en: 'Is anything missing? Did this somebody take anything?',
        },
        {
          who: 'Arhivistica',
          hr: 'Nije uzeo ništa, i upravo me to zbunjuje. Uzimao je, pregledavao i vraćao — a to je nešto posve drugo.',
          en: 'He took nothing, and that is exactly what puzzles me. He took things out, looked through them and put them back — and that is something else entirely.',
        },
        {
          who: 'Inspektor',
          hr: 'Tko osim Vas ima ključ?',
          en: 'Who has a key besides you?',
        },
        {
          who: 'Arhivistica',
          hr: 'Ravnatelj i domar. Domar je, doduše, dolazio jučer popodne, ali je otišao prije mene; ravnatelj je došao tek jutros i još je u zgradi.',
          en: 'The director and the janitor. The janitor did, admittedly, come by yesterday afternoon, but he left before I did; the director arrived only this morning and is still in the building.',
        },
        {
          who: 'Inspektor',
          hr: 'Jeste li ravnatelju rekli što ste primijetili?',
          en: 'Have you told the director what you noticed?',
        },
        {
          who: 'Arhivistica',
          hr: 'Jesam. Nagovarala sam ga još u osam da pozove policiju, ali ga nisam nagovorila: rekao je da ću, kad prebrojim spise, i sama vidjeti da je sve na mjestu.',
          en: 'I have. I was urging him as early as eight to call the police, but I did not talk him into it: he said that once I had counted the files, I would see for myself that everything was in place.',
        },
        {
          who: 'Inspektor',
          hr: 'I, jeste li ih prebrojili?',
          en: 'And did you count them all?',
        },
        {
          who: 'Arhivistica',
          hr: 'Brojila sam ih cijelo jutro i prebrojila tek pred podne: svi su na broju. Ali ja svake večeri zaključam ormar, provjerim prozore i tek onda odem kući — zato i znam da kutiju nisam naopako vratila ja.',
          en: 'I was counting them all morning and finished only just before noon: they are all there. But every evening I lock the cabinet, check the windows and only then go home — which is how I know that it was not I who put the box back upside down.',
        },
        {
          who: 'Inspektor',
          hr: 'Onda ćemo ovako: dok ne doznamo tko je noćas ulazio, ormar s oporukama neka nitko ne otvara, pa ni Vi.',
          en: 'Then here is what we will do: until we find out who came in last night, nobody is to open the cabinet with the wills — not even you.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what puzzles the archivist most?',
          options: [
            'That the archive was unlocked when she arrived',
            'That nothing was taken: things were handled, examined and put back',
            'That the director refused to count the files',
            'That the janitor has lost his key',
          ],
          correct: 1,
          hint: 'She answers the inspector’s question with one verb in the perfective — and then with three in the imperfective.',
          explanation:
            'Nije uzeo ništa… Uzimao je, pregledavao i vraćao. — the perfective uzeo would mean that something is gone; the imperfectives describe handling whose result was undone each time: everything is back on the shelf.',
        },
        {
          q: '"Domar je, doduše, dolazio jučer popodne… ravnatelj je došao tek jutros i još je u zgradi." Why "dolazio" for the janitor but "došao" for the director?',
          options: [
            'Because "jučer" requires the imperfective and "jutros" the perfective',
            'Because the archivist is not sure whether the janitor came at all',
            'Because the imperfective of a single arrival says that the visit is over — he came and went — while the perfective reports an arrival whose result still holds',
            'Because "dolaziti" is used for employees and "doći" for their superiors',
          ],
          correct: 2,
          hint: 'Look at what she adds about each man straight afterward: where is each of them now?',
          explanation:
            'The imperfective of a one-time movement annuls its result: dolazio je = he was here and is gone (ali je otišao prije mene). došao je simply reports the arrival, and here its result still holds: još je u zgradi.',
        },
        {
          type: 'type',
          q: 'Now you. The inspector points at a box that is back in its place: Tko je ____ ovu kutiju s police? (took it down — and somebody has put it back since; from the pair skidati / skinuti, masculine)',
          answer: 'skidao',
          hint: 'The result has been undone, so choose the member of the pair that does not vouch for a lasting result.',
          explanation:
            'Tko je skidao ovu kutiju s police? — the box is on the shelf again, so the imperfective fits: it was taken down and put back. Tko je skinuo kutiju? would be asked while looking at an empty space on the shelf.',
        },
        {
          type: 'transform',
          q: 'She tried, and failed. Say it in one sentence with the pair "uvjeravati / uvjeriti", the way she speaks about the director and the police.',
          from: 'Pokušala sam uvjeriti ravnatelja. Nisam uspjela.',
          answer: 'Uvjeravala sam ravnatelja, ali ga nisam uvjerila.',
          accept: [
            'Uvjeravala sam ravnatelja ali ga nisam uvjerila.',
            'Uvjeravala sam ga, ali ga nisam uvjerila.',
            'Ravnatelja sam uvjeravala, ali ga nisam uvjerila.',
            'Uvjeravala sam ravnatelja, ali ga nisam uspjela uvjeriti.',
            'Uvjeravala sam ravnatelja, no nisam ga uvjerila.',
            'Uvjeravala sam ravnatelja, ali nisam ga uvjerila.',
          ],
          hint: 'The attempt and the result are the two aspects of one verb: first the form for the process, then — negated — the form for the achieved result.',
          explanation:
            'Uvjeravala sam ravnatelja, ali ga nisam uvjerila. — the imperfective names the effort, the perfective the result that was not reached. English needs "tried to convince"; Croatian needs only the aspect.',
        },
        {
          type: 'transform',
          q: 'Turn this one morning into her routine: begin with "Svakog jutra" and, as she does when she describes her evenings, keep the verbs perfective.',
          from: 'Jutros sam otključala arhiv i prozračila čitaonicu.',
          answer: 'Svakog jutra otključam arhiv i prozračim čitaonicu.',
          accept: [
            'Svakoga jutra otključam arhiv i prozračim čitaonicu.',
            'Svako jutro otključam arhiv i prozračim čitaonicu.',
            'Svakog jutra otključavam arhiv i prozračujem čitaonicu.',
            'Svakoga jutra otključavam arhiv i prozračujem čitaonicu.',
            'Svako jutro otključavam arhiv i prozračujem čitaonicu.',
          ],
          hint: 'A perfective verb has a present tense too; in a description of a routine it presents each step as a completed link in a chain.',
          explanation:
            'Svakog jutra otključam arhiv i prozračim čitaonicu. — a perfective present can describe what typically happens, one completed step after another. The imperfective (otključavam, prozračujem) is equally correct and more neutral; the perfective makes the sequence vivid.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'tf',
        q: '"Kad dođeš kući, odmah se opustiš." can only be a prediction about one particular evening in the future.',
        answer: false,
        hint: 'Look at the verb of the main clause: is it a future tense?',
        explanation:
          'False. A prediction about one evening would have a future in the main clause: Kad dođeš kući, odmah ćeš se opustiti. With two perfective presents the sentence states what typically happens — whenever you get home, you relax at once.',
      },
      8,
      {
        type: 'sort',
        q: 'What does the aspect of the verb tell you about the result?',
        groups: [
          'Perfective: the result is in place',
          'Imperfective: the result was undone, or never reached',
        ],
        items: [
          { hr: 'Netko je uzeo moj kišobran.', group: 0 },
          { hr: 'Netko je uzimao moj kišobran.', group: 1 },
          { hr: 'Posudio sam bratov bicikl.', group: 0 },
          { hr: 'Posuđivao sam bratov bicikl.', group: 1 },
          { hr: 'Nagovorio sam ga.', group: 0 },
          { hr: 'Nagovarao sam ga cijelu večer.', group: 1 },
          { hr: 'Stigla je teta iz Splita.', group: 0 },
          { hr: 'Popodne je dolazio majstor.', group: 1 },
        ],
        explanation:
          'The perfective vouches for the result: the umbrella is gone, I have the bicycle, he is persuaded, my aunt is here. The imperfective does not: the umbrella is back (but wet), the bicycle has been returned, the persuading may have failed, the repairman has left.',
      },
      10,
      {
        type: 'match',
        q: 'Match each sentence to what it implies.',
        pairs: [
          ['Tko je otvorio pismo?', 'It is open now.'],
          ['Tko je otvarao moju poštu?', 'It has been tampered with and closed again.'],
          ['Kad pročitam knjigu, vratit ću je.', 'One completed act in the future.'],
          ['Kad pročitam knjigu, uvijek je vratim.', 'What I typically do.'],
          ['Čitao sam tu knjigu.', 'I may never have reached the end.'],
        ],
        explanation:
          'A perfective past reports a result that holds; the imperfective of the same act suggests it was undone, or leaves the result open. A perfective present after kad points to a completed future step when the main clause is future, and to a habit when the main clause is a perfective present too.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "When you find out the truth, let me know."',
        words: ['Kad', 'saznaš', 'istinu,', 'javi', 'mi.'],
        accept: ['Javi mi kad saznaš istinu.'],
        explanation:
          'Kad saznaš istinu, javi mi. — a perfective present after kad names a step that must be completed first. saznati is not "znati, completed" but a separate act: to find out.',
      },
      1,
      {
        type: 'fix',
        q: 'One verb has an aspect that is impossible here. Tap it. ("I cannot talk; I am writing a report right now.")',
        words: ['Ne', 'mogu', 'razgovarati,', 'upravo', 'napišem', 'izvješće.'],
        wrong: 4,
        answer: 'pišem',
        hint: 'A perfective present cannot describe what is going on at the moment of speaking.',
        explanation:
          'Ne mogu razgovarati, upravo pišem izvješće. — an action in progress right now can only be imperfective. A perfective present (napišem) is at home after kad, ako or da, or in statements of what typically happens.',
      },
      2,
      {
        type: 'transform',
        q: 'Turn the single plan into a general habit: replace "Sutra, kad" with "Uvijek kad" and adjust the main clause.',
        from: 'Sutra, kad stignem kući, nazvat ću mamu.',
        answer: 'Uvijek kad stignem kući, nazovem mamu.',
        accept: [
          'Uvijek kad stignem kući nazovem mamu.',
          'Uvijek, kad stignem kući, nazovem mamu.',
          'Uvijek kad stignem kući, zovem mamu.',
          'Uvijek kad stignem kući, nazivam mamu.',
          'Kad stignem kući, uvijek nazovem mamu.',
        ],
        hint: 'The time clause can stay exactly as it is; only the future tense of the main clause has to become a present.',
        explanation:
          'Uvijek kad stignem kući, nazovem mamu. — with a future in the main clause the perfective present stignem means one completed step; with a present in the main clause the same form describes what happens every time.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Cijelo sam ga ljeto nagovarala da proda kuću, a nagovorila sam ga tek kad je vidio račun za krov.',
        q: 'What happened?',
        options: [
          'She never managed to persuade him to sell the house',
          'He sold the house at the beginning of the summer',
          'She persuaded him not to sell the house after he saw the bill',
          'She kept urging him all summer and succeeded only when he saw the bill for the roof',
        ],
        correct: 3,
        explanation:
          'nagovarala sam ga — the imperfective: the urging went on all summer without a result. nagovorila sam ga tek kad… — the perfective: the result was finally achieved, only when he saw the bill for the roof.',
      },
      {
        type: 'dictate',
        audio: 'Zvala sam te, ali te nisam dobila.',
        answer: 'Zvala sam te, ali te nisam dobila.',
        accept: ['Zvala sam te ali te nisam dobila.'],
        hint: 'Seven words: "I called you, but I did not reach you." (a woman speaking)',
        explanation:
          'Zvala sam te, ali te nisam dobila. — zvala (imperfective) is the attempt; nisam dobila (perfective, negated) is the result that was not achieved. A comma stands before ali.',
      },
    ],
  },

  // ── Posao, dio, anđeo, kotao; doba and dob ─────────────────────────────────
  'irregular-nouns-doba-dio': {
    text: {
      kind: 'dialogue',
      title: 'U muzejskoj radionici',
      lines: [
        {
          who: 'Kustosica',
          hr: 'Vinko, izložba se otvara za tri tjedna, a ja još ne znam hoće li bakreni kotao iz Baranje biti gotov. Dokle ste stigli s tim poslom?',
          en: 'Vinko, the exhibition opens in three weeks, and I still do not know whether the copper cauldron from Baranja will be ready. How far have you gotten with that job?',
        },
        {
          who: 'Restaurator',
          hr: 'Do najgoreg dijela. Dno mu je izjela hrđa, pa ga moram zamijeniti; takav je kotao u ono doba svake jeseni služio za kuhanje pekmeza, i to se na njemu vidi.',
          en: 'To the worst part. Rust has eaten through its bottom, so I have to replace it; in those days a cauldron like this was used for making jam every fall, and it shows.',
        },
        {
          who: 'Kustosica',
          hr: 'A drveni anđeli s oltara? Katalog ih smješta u barokno doba, ali meni se čine mlađima.',
          en: 'And the wooden angels from the altar? The catalog places them in the Baroque period, but to me they look younger.',
        },
        {
          who: 'Restaurator',
          hr: 'Imate oko. Lijevi je anđeo izvoran, a desni je većim dijelom djelo nekoga seoskog majstora iz devetnaestog stoljeća.',
          en: 'You have a good eye. The left angel is original, while the right one is for the most part the work of some village craftsman from the nineteenth century.',
        },
        {
          who: 'Kustosica',
          hr: 'Dakle, od dvaju anđela samo je jedan onoliko star koliko piše u katalogu. Što ćemo s tim?',
          en: 'So of the two angels only one is as old as the catalog says. What are we going to do about that?',
        },
        {
          who: 'Restaurator',
          hr: 'Napisat ćemo istinu. Posjetitelji vole znati koji su dijelovi izvorni, a koji nisu; uostalom, i popravak je svjedok svojega doba.',
          en: 'We will write the truth. Visitors like to know which parts are original and which are not; after all, a repair is a witness of its own time too.',
        },
        {
          who: 'Kustosica',
          hr: 'Slažem se. Nego, čula sam da ste u podrumu našli još nešto.',
          en: 'I agree. By the way, I heard that you found something else in the basement.',
        },
        {
          who: 'Restaurator',
          hr: 'Škrinju punu pepela, a u njoj, zamotano u platno, nekoliko dijelova starog tkalačkog stana.',
          en: 'A chest full of ash and in it, wrapped in linen, several parts of an old loom.',
        },
        {
          who: 'Kustosica',
          hr: 'Pepeo u škrinji? Tko bi to čuvao?',
          en: 'Ash in a chest? Who would keep that?',
        },
        {
          who: 'Restaurator',
          hr: 'Netko tko je znao svoj posao: u pepelu drvo ne trune i moljci mu ne mogu ništa. Naše bake nisu imale škole, ali su o takvim poslovima znale više od nas.',
          en: 'Somebody who knew their job: in ash, wood does not rot and moths cannot harm it. Our grandmothers had no schooling, but they knew more about jobs like these than we do.',
        },
        {
          who: 'Kustosica',
          hr: 'Onda i to ide na izložbu. Samo Vas molim jedno: ja sam u dobi kad se iznenađenja teško podnose, pa mi sljedeće najavite prije nego što ga donesete u ured.',
          en: 'Then that goes into the exhibition too. I ask only one thing of you: I am at an age when surprises are hard to take, so announce the next one before you bring it into the office.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did the restorer find in the basement?',
          options: [
            'A second copper cauldron, eaten through by rust',
            'A third wooden angel, wrapped in linen',
            'A chest full of ash with parts of an old loom inside',
            'A Baroque catalog hidden in a chest',
          ],
          correct: 2,
          hint: 'The curator is astonished by what the chest was filled with.',
          explanation:
            'Škrinju punu pepela, a u njoj… nekoliko dijelova starog tkalačkog stana. — pepela is the genitive of pepeo (the l returns, the e stays), and dijelova the genitive plural of the noun for "part".',
        },
        {
          q: 'The restorer says the right-hand angel "je većim dijelom djelo nekoga seoskog majstora". "dijelom" and "djelo" look alike — what is the difference?',
          options: [
            '"dijelom" is a form of the noun for "part" (stem dijel-, with the long ije); "djelo" is a different noun, "a work"',
            'Both are forms of the same noun; the spelling varies freely',
            '"dijelom" is the plural of "djelo"',
            '"djelo" is the older nominative of the noun for "part"',
          ],
          correct: 0,
          hint: 'Translate the phrase word for word: "for the greater … the … of a village craftsman".',
          explanation:
            'većim dijelom = for the most part: the instrumental of the noun whose stem is dijel-, with the long ije in every form but the nominative. djelo (a work, a deed) is another noun, with a short je: djela, djelu, djelom.',
        },
        {
          type: 'type',
          q: 'Now you. The restorer is not finished yet: Još radi na donjem ____ škrinje. (part — a location after na)',
          answer: 'dijelu',
          hint: 'Restore the full stem — the long ije and the l — and add the locative ending.',
          explanation:
            'na donjem dijelu škrinje — every form except the nominative and accusative singular shows the stem dijel-: dijela, dijelu, dijelom.',
        },
        {
          type: 'transform',
          q: 'Put the whole sentence into the plural.',
          from: 'Ovaj je anđeo izvoran, a onaj kotao nije.',
          answer: 'Ovi su anđeli izvorni, a oni kotlovi nisu.',
          accept: [
            'Ovi anđeli su izvorni, a oni kotlovi nisu.',
            'Ovi su anđeli izvorni a oni kotlovi nisu.',
          ],
          hint: 'Undo the final o of both nouns first. One of the stems then has two syllables and takes the short plural; the other has one and takes the long plural.',
          explanation:
            'Ovi su anđeli izvorni, a oni kotlovi nisu. — anđel- has two syllables and takes plain -i (never "anđelovi"); kotl- is a one-syllable stem once the fleeting a is gone, so it takes -ovi, like posao → poslovi.',
        },
        {
          type: 'transform',
          q: 'Replace "epoha" with the neuter noun the restorer uses for a period of history, and make the words around it agree.',
          from: 'U toj dalekoj epohi nije bilo struje.',
          answer: 'U to daleko doba nije bilo struje.',
          accept: ['U tom dalekom dobu nije bilo struje.', 'U tome dalekom dobu nije bilo struje.'],
          hint: 'The new noun is neuter and likes to keep its one form; careful writers use it after u in the accusative.',
          explanation:
            'U to daleko doba nije bilo struje. — doba is neuter (to, daleko) and usually keeps its form; the commonest phrase is the accusative u to doba. A locative u tom dobu is also met.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Proljeće je moja omiljena godišnja doba." is correct, because "doba" ends in -a like "žena".',
        answer: false,
        hint: 'The ending is misleading. Which gender does the phrase "u to doba" show?',
        explanation:
          'False. doba is a neuter noun in spite of its -a, so everything around it is neuter: Proljeće je moje omiljeno godišnje doba.',
      },
      12,
      {
        type: 'sort',
        q: 'A part or a work? Sort the forms.',
        groups: ['Forms of dio (a part)', 'Forms of djelo (a work, a deed)'],
        items: [
          { hr: 'dijela', group: 0 },
          { hr: 'djela', group: 1 },
          { hr: 'dijelom', group: 0 },
          { hr: 'djelom', group: 1 },
          { hr: 'dijelovi', group: 0 },
          { hr: 'djelima', group: 1 },
          { hr: 'dijelu', group: 0 },
          { hr: 'djelu', group: 1 },
        ],
        explanation:
          'The stem of the noun for "part" is dijel-, with the long ije: dijela, dijelu, dijelom, dijelovi. djelo has a short je: djela, djelu, djelom, djelima. One letter separates veći dio grada from sabrana djela.',
      },
      9,
      {
        type: 'match',
        q: 'Match each nominative to its genitive singular.',
        pairs: [
          ['posao', 'posla'],
          ['anđeo', 'anđela'],
          ['pepeo', 'pepela'],
          ['orao', 'orla'],
          ['ugao', 'ugla'],
        ],
        explanation:
          'In all five the final o goes back to l before an ending. In posao, orao and ugao the a is a fleeting one and disappears (posla, orla, ugla); in anđeo and pepeo the e belongs to the stem and stays (anđela, pepela).',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "We spend most of the summer in the southern part of the island."',
        words: ['Veći', 'dio', 'ljeta', 'provodimo', 'u', 'južnom', 'dijelu', 'otoka.'],
        accept: [
          'Provodimo veći dio ljeta u južnom dijelu otoka.',
          'U južnom dijelu otoka provodimo veći dio ljeta.',
        ],
        explanation:
          'Veći dio ljeta provodimo u južnom dijelu otoka. — the same noun twice: dio as the object (accusative = nominative for a masculine thing) and dijelu in the locative, with the full stem.',
      },
      4,
      {
        type: 'fix',
        q: 'One word has kept a letter it should have lost. Tap it. ("The smell of beans was spreading from the cauldron.")',
        words: ['Iz', 'kotala', 'se', 'širio', 'miris', 'graha.'],
        wrong: 1,
        answer: 'kotla',
        hint: 'The vowel before the final consonant of the stem is there only when no ending follows.',
        explanation:
          'Iz kotla se širio miris graha. — kotao has the stem kotl-: the a is a fleeting one, needed only in the nominative, so the genitive is kotla, like posao → posla.',
      },
      6,
      {
        type: 'transform',
        q: 'Put the sentence into the singular.',
        from: 'Poslovi su obavljeni, a kotlovi oprani.',
        answer: 'Posao je obavljen, a kotao opran.',
        accept: [
          'Posao je obavljen, a kotao je opran.',
          'Posao je obavljen a kotao opran.',
          'Posao je obavljen a kotao je opran.',
        ],
        hint: 'In the form you need, both nouns hide their l: at the very end of a word it once turned into another sound, and a fleeting vowel returns before it.',
        explanation:
          'Posao je obavljen, a kotao opran. — poslovi and kotlovi show the stems posl- and kotl-. With no ending the final l becomes o and the fleeting a comes back: posao, kotao.',
      },
      0,
      {
        type: 'listen',
        audio:
          'U ono doba, kad je moj djed bio u najboljoj dobi, svaki se posao na selu obavljao zajednički.',
        q: 'What is the speaker saying?',
        options: [
          'In my grandfather’s village every job was paid according to age',
          'My grandfather did every job in the village by himself',
          'In those days, when my grandfather was in his prime, every job in the village was done together',
          'At my age my grandfather no longer worked in the village',
        ],
        correct: 2,
        explanation:
          'Two nouns that must not be mixed: u ono doba (neuter doba — an era, a time) and u najboljoj dobi (feminine dob — a person’s age; "in his prime"). svaki se posao obavljao zajednički — every job was done jointly.',
      },
      {
        type: 'dictate',
        audio: 'Najveći dio posla obavili smo jučer.',
        answer: 'Najveći dio posla obavili smo jučer.',
        hint: 'Six words: "We did most of the work yesterday."',
        explanation:
          'Najveći dio posla obavili smo jučer. — dio in the accusative (the same as the nominative) and posla in the genitive: the l is back and the fleeting a is gone.',
      },
    ],
  },

  // ── Less frequent genitive prepositions ────────────────────────────────────
  'rare-genitive-prepositions': {
    text: {
      kind: 'text',
      title: 'Govor na otvorenju knjižnice',
      lines: [
        {
          hr: 'Poštovani sugrađani, dragi gosti, okupili smo se uoči Dana grada, prigodom otvorenja obnovljene Gradske knjižnice, i čast mi je što vas mogu pozdraviti upravo ovdje, usred stare jezgre.',
          en: 'Fellow citizens, dear guests, we have gathered on the eve of City Day, to mark the opening of the renovated City Library, and I am honored to be able to greet you right here, in the middle of the old town.',
        },
        {
          hr: 'Tijekom triju godina obnove mnogi su me pitali zašto knjižnicu nismo jednostavno preselili u novu zgradu nadomak obilaznice.',
          en: 'During the three years of renovation, many people asked me why we did not simply move the library to a new building close to the bypass.',
        },
        {
          hr: 'Odgovor je jednostavan: knjižnica poput ove ne pripada rubu grada, nego njegovu središtu.',
          en: 'The answer is simple: a library like this one does not belong on the edge of the city, but at its center.',
        },
        {
          hr: 'Unatoč svim poteškoćama, a bilo ih je mnogo, radovi su završeni mimo svih očekivanja — dva mjeseca prije roka.',
          en: 'Despite all the difficulties, and there were many, the work was finished contrary to all expectations — two months ahead of schedule.',
        },
        {
          hr: 'Zbog poplave koja nas je zadesila preklani morali smo zamijeniti cijeli pod; radi sigurnosti najstarijih knjiga ugradili smo i novi sustav zaštite od vlage.',
          en: 'Because of the flood that struck us the year before last, we had to replace the entire floor; for the safety of the oldest books we also installed a new moisture-protection system.',
        },
        {
          hr: 'Umjesto jedne čitaonice sada imamo tri, a duž cijeloga južnog zida, ondje gdje su nekoć stajali ormari, proteže se dječji odjel.',
          en: 'Instead of one reading room we now have three, and along the whole south wall, where the cabinets once stood, stretches the children’s section.',
        },
        {
          hr: 'Prilikom upisa više nećete čekati u redu: iskaznicu možete zatražiti putem interneta i podići je već sutradan.',
          en: 'When you enroll, you will no longer wait in line: you can request your card online and pick it up the very next day.',
        },
        {
          hr: 'Posebno zahvaljujem knjižničarkama, koje su usred zime, u negrijanom skladištu, prenijele i popisale više od šezdeset tisuća svezaka.',
          en: 'I especially thank the librarians, who in the middle of winter, in an unheated storeroom, moved and cataloged more than sixty thousand volumes.',
        },
        {
          hr: 'Glede budućnosti mogu obećati samo jedno: vrata ove kuće ostat će otvorena svima, kao što su to diljem Hrvatske vrata svake dobre knjižnice.',
          en: 'Regarding the future I can promise only one thing: the doors of this house will stay open to everyone, as the doors of every good library are throughout Croatia.',
        },
        {
          hr: 'I zato vas molim da ne zastajete nasred trga, nego da uđete — knjige vas čekaju.',
          en: 'And so I ask you not to linger in the middle of the square, but to come in — the books are waiting for you.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the speech: why did the entire floor have to be replaced?',
          options: [
            'Because of a fire in the storeroom',
            'Because of the flood two years earlier',
            'Because the children’s section needed a softer floor',
            'Because the new moisture-protection system required it',
          ],
          correct: 1,
          hint: 'The speaker names one event as the cause and, in the same sentence, one aim for a second measure.',
          explanation:
            'Zbog poplave koja nas je zadesila preklani morali smo zamijeniti cijeli pod. — the flood (preklani = the year before last) was the cause. The moisture-protection system was a second, separate measure.',
        },
        {
          q: 'The speaker says "Zbog poplave… morali smo zamijeniti cijeli pod; radi sigurnosti najstarijih knjiga ugradili smo i novi sustav…". Why "zbog" in the first half and "radi" in the second?',
          options: [
            'Because "zbog" is used with events and "radi" with objects',
            'Because "radi" is the more formal word and suits the end of a sentence',
            'Because the flood is a cause — what made something happen — while the safety of the books is a purpose — what something was done for',
            'Because "zbog" takes the genitive and "radi" the dative',
          ],
          correct: 2,
          hint: 'Ask two different questions: "Why did it happen?" and "What was it done for?"',
          explanation:
            'Careful Croatian keeps the two apart: zbog names the cause (zbog poplave), radi the purpose (radi sigurnosti). Both take the genitive. In everyday speech they are often blurred, but in a formal speech the distinction is expected.',
        },
        {
          type: 'type',
          q: 'Now you. Describe the City Day parade: Povorka je prošla mimo gradske ____ i zaustavila se pred knjižnicom. (the town hall — vijećnica)',
          answer: 'vijećnice',
          hint: 'In its spatial sense "past", this preposition governs the same case as most of the others in the speech — the adjective before the blank already shows it.',
          explanation:
            'mimo gradske vijećnice — mimo + genitive. Here it has its spatial meaning (past, by); in the speech it had the figurative one: mimo svih očekivanja, contrary to all expectations.',
        },
        {
          type: 'transform',
          q: 'Raise the style: replace "za vrijeme" with the one-word preposition the speaker uses for the three years of work.',
          from: 'Za vrijeme obnove knjižnica je bila zatvorena.',
          answer: 'Tijekom obnove knjižnica je bila zatvorena.',
          accept: [
            'Tijekom obnove, knjižnica je bila zatvorena.',
            'Knjižnica je tijekom obnove bila zatvorena.',
            'Knjižnica je bila zatvorena tijekom obnove.',
            'Tijekom obnove knjižnica bila je zatvorena.',
          ],
          hint: 'It stretches over a whole period, belongs to higher style and — like the phrase it replaces — is followed by the genitive.',
          explanation:
            'Tijekom obnove knjižnica je bila zatvorena. — tijekom + genitive says the same as za vrijeme, in a higher register.',
        },
        {
          type: 'transform',
          q: 'Replace the "iako" clause with a phrase built on "unatoč".',
          from: 'Iako je padala kiša, otvorenje je održano na trgu.',
          answer: 'Unatoč kiši otvorenje je održano na trgu.',
          accept: [
            'Unatoč kiši, otvorenje je održano na trgu.',
            'Otvorenje je unatoč kiši održano na trgu.',
            'Otvorenje je, unatoč kiši, održano na trgu.',
            'Otvorenje je održano na trgu unatoč kiši.',
            'Unatoč kiši otvorenje je na trgu održano.',
          ],
          hint: 'This preposition is the odd one out in its family: look again at the form of the two words that follow it at the start of the fourth sentence of the speech.',
          explanation:
            'Unatoč kiši otvorenje je održano na trgu. — unatoč (like usprkos) governs the DATIVE, not the genitive: unatoč kiši, unatoč svim poteškoćama. "Unatoč kiše" is one of the most frequent errors in written Croatian.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"Prošli su jedan mimo drugoga." means that the two of them walked side by side.',
        answer: false,
        hint: 'Think of the basic spatial meaning of the preposition: what happens when you go mimo a house?',
        explanation:
          'False. mimo means past: Prošli su jedan mimo drugoga — they passed each other, going in opposite directions (and perhaps without a greeting). Side by side would be jedan uz drugoga.',
      },
      11,
      {
        type: 'sort',
        q: 'What does the phrase express?',
        groups: ['A place', 'A time or an occasion', 'A means or a channel'],
        items: [
          { hr: 'duž obale', group: 0 },
          { hr: 'nasred trga', group: 0 },
          { hr: 'nadomak mora', group: 0 },
          { hr: 'uoči Božića', group: 1 },
          { hr: 'tijekom pregovora', group: 1 },
          { hr: 'prilikom prijave', group: 1 },
          { hr: 'putem natječaja', group: 2 },
          { hr: 'pomoću dizalice', group: 2 },
        ],
        explanation:
          'duž (along), nasred (in the middle of a surface) and nadomak (very close to) place something; uoči (on the eve of), tijekom (during) and prilikom (at the time of, on the occasion of) set it in time; putem (via) and pomoću (with the help of) name the channel or the tool. All of them take the genitive.',
      },
      12,
      {
        type: 'match',
        q: 'Match each phrase from formal style to its everyday equivalent.',
        pairs: [
          ['tijekom ljeta', 'za vrijeme ljeta'],
          ['putem interneta', 'preko interneta'],
          ['glede Vašeg upita', 'u vezi s Vašim upitom'],
          ['diljem zemlje', 'po cijeloj zemlji'],
          ['uoči praznika', 'dan-dva prije praznika'],
        ],
        explanation:
          'The higher-style prepositions all take the genitive; their everyday equivalents do not always: u vezi s takes the instrumental (s Vašim upitom), po the locative (po cijeloj zemlji), preko the genitive.',
      },
      13,
      {
        type: 'order',
        q: 'Put the words in order: "Instead of the minister, his deputy came."',
        words: ['Umjesto', 'ministra', 'došao', 'je', 'njegov', 'zamjenik.'],
        accept: [
          'Umjesto ministra je došao njegov zamjenik.',
          'Došao je njegov zamjenik umjesto ministra.',
          'Njegov je zamjenik došao umjesto ministra.',
          'Njegov zamjenik došao je umjesto ministra.',
          'Njegov zamjenik je došao umjesto ministra.',
          'Umjesto ministra njegov je zamjenik došao.',
        ],
        explanation:
          'Umjesto ministra došao je njegov zamjenik. — umjesto + genitive replaces one person or thing with another. The phrase opens the sentence as known information, and the deputy, the news, comes last; je leans on the verb or follows the whole opening phrase.',
      },
      0,
      {
        type: 'fix',
        q: 'One word is in a case this preposition does not take in standard Croatian. Tap it. ("Despite the warnings, they set off on the trip.")',
        words: ['Unatoč', 'upozorenja,', 'krenuli', 'su', 'na', 'put.'],
        wrong: 1,
        answer: 'upozorenjima,',
        hint: 'This preposition is the exception in a family of genitive prepositions.',
        explanation:
          'Unatoč upozorenjima, krenuli su na put. — unatoč governs the dative, here in the plural. The genitive after it is very common in careless writing, but it is not standard.',
      },
      8,
      {
        type: 'transform',
        q: 'Raise the style: replace the bare instrumental with the preposition that names a channel.',
        from: 'Prijavu sam poslala e-poštom.',
        answer: 'Prijavu sam poslala putem e-pošte.',
        accept: ['Putem e-pošte poslala sam prijavu.', 'Prijavu sam putem e-pošte poslala.'],
        hint: 'The preposition you need looks like a case form of the word for "way, road"; the noun after it stands in the genitive.',
        explanation:
          'Prijavu sam poslala putem e-pošte. — putem + genitive names the channel and is typical of official Croatian; the plain instrumental (e-poštom) and preko e-pošte are the everyday choices.',
      },
      1,
      {
        type: 'listen',
        audio:
          'Uoči blagdana, kad su trgovine pune, najradije kupujem putem interneta umjesto da satima stojim u redu.',
        q: 'What does the speaker prefer to do before the holidays?',
        options: [
          'To shop online instead of standing in line for hours',
          'To go to the stores early, before the lines form',
          'To stand in line, because online stores are full',
          'To postpone all shopping until after the holidays',
        ],
        correct: 0,
        explanation:
          'Uoči blagdana — just before the holidays; najradije kupujem putem interneta — I prefer to buy online; umjesto da satima stojim u redu — instead of standing in line for hours. umjesto takes the genitive of a noun, and umjesto da introduces a whole clause.',
      },
      {
        type: 'dictate',
        audio: 'Usred noći zazvonio je telefon.',
        answer: 'Usred noći zazvonio je telefon.',
        accept: ['Usred noći je zazvonio telefon.'],
        hint: 'Five words: "In the middle of the night the phone rang."',
        explanation:
          'Usred noći zazvonio je telefon. — usred + genitive for the middle of a period of time (noć → noći). nasred would be wrong here: a night is not a surface.',
      },
    ],
  },

  // ── The comma with dependent clauses ───────────────────────────────────────
  'comma-dependent-clauses': {
    text: {
      kind: 'text',
      title: 'Pismo iz Dubrovnika',
      lines: [
        {
          hr: 'Dragi Luka, javljam ti da je soba spremna i da te čekamo već od ponedjeljka.',
          en: 'Dear Luka, I am writing to let you know that the room is ready and that we have been expecting you since Monday.',
        },
        {
          hr: 'Kad stigneš na kolodvor, nemoj uzimati taksi jer je autobus broj šest i brži i triput jeftiniji.',
          en: 'When you get to the station, do not take a taxi, because the number six bus is both faster and three times cheaper.',
        },
        {
          hr: 'Tvoj stric, kojemu sam sto puta rekla da te dočeka, tvrdi da ćeš se snaći i sam.',
          en: 'Your uncle, whom I have told a hundred times to meet you, claims that you will manage by yourself.',
        },
        {
          hr: 'Ja mu, premda znam da si odrastao čovjek, baš i ne vjerujem.',
          en: 'I, although I know you are a grown man, do not quite believe him.',
        },
        {
          hr: 'Ključ je kod susjede koja stanuje u prizemlju; druga susjeda, koja je vječito na putu, ne bi ti ni otvorila.',
          en: 'The key is with the neighbor who lives on the ground floor; the other neighbor, who is forever traveling, would not even open the door for you.',
        },
        {
          hr: 'Čim uđeš u stan, otvori prozore jer smo jučer ličili hodnik.',
          en: 'As soon as you come into the apartment, open the windows, because we painted the hallway yesterday.',
        },
        {
          hr: 'Ne znam hoćeš li stići na večeru, ali ću ti za svaki slučaj ostaviti brudet u pećnici.',
          en: 'I do not know whether you will make it for dinner, but just in case I will leave some fish stew in the oven for you.',
        },
        {
          hr: 'Stigavši prvi put u Dubrovnik, tvoja se majka prije trideset godina s kovčegom popela uza sve one stube, pa nemoj ponoviti njezinu pogrešku.',
          en: 'Arriving in Dubrovnik for the first time thirty years ago, your mother climbed all those steps with her suitcase, so do not repeat her mistake.',
        },
        {
          hr: 'Knjige koje si poslao poštom već su na polici, a bicikl, o kojemu si toliko pisao, čeka te u podrumu.',
          en: 'The books you sent by mail are already on the shelf, and the bicycle, about which you wrote so much, is waiting for you in the basement.',
        },
        {
          hr: 'Javi mi se čim kreneš, a ja ću, dok ti budeš u autobusu, pristaviti vodu za tjesteninu.',
          en: 'Get in touch as soon as you set off, and I will, while you are on the bus, put the water on for the pasta.',
        },
        {
          hr: 'Dok te ne vidim na vratima, neću biti mirna. Voli te tvoja teta Nike.',
          en: 'Until I see you at the door, I will not rest easy. With love, your Aunt Nike.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the letter: where will Luka find the key?',
          options: [
            'With his uncle, who will meet him at the station',
            'In the basement, next to the bicycle',
            'With the neighbor who is always traveling',
            'With the neighbor who lives on the ground floor',
          ],
          correct: 3,
          hint: 'Aunt Nike mentions two neighbors and warns him about one of them.',
          explanation:
            'Ključ je kod susjede koja stanuje u prizemlju. — the other neighbor, koja je vječito na putu, would not even open the door.',
        },
        {
          q: '"Ključ je kod susjede koja stanuje u prizemlju; druga susjeda, koja je vječito na putu, ne bi ti ni otvorila." Why is there no comma before the first "koja", while the second clause has a comma on each side?',
          options: [
            'Because a comma is never written after a noun in the genitive',
            'Because the first clause picks out which neighbor is meant, while the second only adds information about a neighbor already identified by "druga"',
            'Because the first clause is short and the second is long',
            'Because a semicolon in a sentence cancels the comma before the first relative clause',
          ],
          correct: 1,
          hint: 'Try leaving each clause out. In which case would Luka no longer know whose door to knock on?',
          explanation:
            'The first clause is restrictive: without it Luka would not know which neighbor has the key, so no comma separates it from its noun. The second is non-restrictive: druga susjeda is already identified, and the clause merely adds a remark, so it is enclosed in commas.',
        },
        {
          type: 'transform',
          q: 'Luka replies. Turn his sentence round so that the dependent clause comes first — and punctuate it.',
          from: 'Javit ću ti se čim sletim u Dubrovnik.',
          answer: 'Čim sletim u Dubrovnik, javit ću ti se.',
          hint: 'In normal order nothing separates the clauses; in the inverted order one mark closes the clause that now comes first.',
          explanation:
            'Čim sletim u Dubrovnik, javit ću ti se. — a dependent clause placed before its main clause is closed by a comma, however short it is. In the original order (main clause first) no comma is written.',
        },
        {
          type: 'transform',
          q: 'Luka has only one aunt. Build the second sentence into the first as a clause that merely adds information about her.',
          from: 'Moja teta čeka me na vratima. Ona živi u Dubrovniku.',
          answer: 'Moja teta, koja živi u Dubrovniku, čeka me na vratima.',
          accept: [
            'Moja me teta, koja živi u Dubrovniku, čeka na vratima.',
            'Na vratima me čeka moja teta, koja živi u Dubrovniku.',
            'Moja teta, koja živi u Dubrovniku, na vratima me čeka.',
          ],
          hint: 'A feminine relative pronoun in the nominative replaces "Ona". Since the clause does not pick her out from other aunts, it needs a mark on each side.',
          explanation:
            'Moja teta, koja živi u Dubrovniku, čeka me na vratima. — a non-restrictive relative clause is enclosed in commas. Without them the sentence would suggest that he has several aunts and means the one in Dubrovnik.',
        },
        {
          type: 'transform',
          q: 'Replace the "kad" clause with a past verbal adverb, as Aunt Nike does when she writes about Luka’s mother.',
          from: 'Kad je ušao u stan, Luka je otvorio prozore.',
          answer: 'Ušavši u stan, Luka je otvorio prozore.',
          accept: [
            'Ušavši u stan, otvorio je prozore.',
            'Luka je, ušavši u stan, otvorio prozore.',
          ],
          hint: 'The past verbal adverb is built on the stem of the masculine participle with the ending -vši; placed first, the phrase is closed like a fronted clause.',
          explanation:
            'Ušavši u stan, Luka je otvorio prozore. — a verbal adverb with its words works like a dependent clause that comes first, so a comma closes it. Placed after the verb it is usually not set off.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In "Mislim, da je u pravu." the comma is required, because "da" opens a new clause.',
        answer: false,
        hint: 'What decides is not the conjunction but the order of the two clauses.',
        explanation:
          'False. When the main clause comes first and a dependent clause that completes it follows, no comma is written, whatever the conjunction: Mislim da je u pravu. (A comma in that position is kept for a clause that merely adds a remark, such as a non-restrictive relative clause.) Writing a comma before every da is a habit carried over from other languages.',
      },
      11,
      {
        type: 'sort',
        q: 'The commas have been removed. How many does each sentence need?',
        groups: ['None', 'One', 'Two'],
        items: [
          { hr: 'Nazovi me kad dođeš kući', group: 0 },
          { hr: 'Kad dođeš kući nazovi me', group: 1 },
          { hr: 'Direktor je kad je vidio rezultate sazvao sastanak', group: 2 },
          { hr: 'Pitala me gdje sam naučio hrvatski', group: 0 },
          { hr: 'Premda je bio umoran nastavio je raditi', group: 1 },
          { hr: 'Naša majka koja je učiteljica voli čitati', group: 2 },
          { hr: 'Otišavši na more dobro smo se odmorili', group: 1 },
        ],
        explanation:
          'Main clause first, with the dependent clause completing it: no comma. Dependent clause (or a fronted verbal adverb) first: one comma closes it. A clause inserted into the main clause, or a non-restrictive relative clause (naša majka is already identified), takes a comma on each side.',
      },
      9,
      {
        type: 'match',
        q: 'With commas or without? Match each sentence to what it says.',
        pairs: [
          ['Djeca koja su ručala mogu van.', 'Only some of the children may go out.'],
          ['Djeca, koja su ručala, mogu van.', 'All the children have eaten and may go out.'],
          ['Učenici koji su zakasnili čekaju pred vratima.', 'Only the latecomers are waiting.'],
          [
            'Učenici, koji su zakasnili, čekaju pred vratima.',
            'All the students were late and are waiting.',
          ],
        ],
        explanation:
          'Without commas the relative clause is restrictive: it picks out a part of the group. With commas it is non-restrictive: it adds a remark about the whole group. The commas carry meaning, so they cannot be scattered or dropped at will.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order. The main clause is interrupted: "Marta, as soon as she passed the exam, left for the seaside."',
        words: ['Marta', 'je,', 'čim', 'je', 'položila', 'ispit,', 'otputovala', 'na', 'more.'],
        accept: [
          'Čim je položila ispit, Marta je otputovala na more.',
          'Marta je otputovala na more čim je položila ispit.',
        ],
        explanation:
          'Marta je, čim je položila ispit, otputovala na more. — a clause inserted into the main clause is enclosed in commas on both sides. Read without it, the main clause must still stand: Marta je otputovala na more.',
      },
      2,
      {
        type: 'fix',
        q: 'One word carries a comma that does not belong there. Tap it. ("Nobody let us know that the meeting had been canceled.")',
        words: ['Nitko', 'nam', 'nije', 'javio,', 'da', 'je', 'sastanak', 'otkazan.'],
        wrong: 3,
        answer: 'javio',
        hint: 'Look at the order of the clauses: which of them comes first?',
        explanation:
          'Nitko nam nije javio da je sastanak otkazan. — the main clause comes first and the da clause follows, so nothing separates them.',
      },
      4,
      {
        type: 'transform',
        q: 'Move the dependent clause to the end — and decide what happens to the comma.',
        from: 'Dok smo čekali vlak, počela je kiša.',
        answer: 'Kiša je počela dok smo čekali vlak.',
        accept: ['Počela je kiša dok smo čekali vlak.'],
        hint: 'The mark was there only to close a clause that came first. Mind the auxiliary as well: it still needs a stressed word to lean on.',
        explanation:
          'Kiša je počela dok smo čekali vlak. — in normal order (main clause first) no comma is written. The clitic je must follow the first stressed word of its clause: Kiša je počela or Počela je kiša.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Profesorica, koja inače nikad ne kasni, jutros je, čim je ušla u predavaonicu, zamolila studente da je ispričaju.',
        q: 'What happened this morning?',
        options: [
          'The professor, who is late every day, did not come to the lecture at all',
          'The students apologized to the professor for being late',
          'The professor, who is normally never late, asked the students to excuse her as soon as she walked in',
          'The professor asked the students to leave the lecture hall',
        ],
        correct: 2,
        explanation:
          'Two inserted clauses, each between two commas: koja inače nikad ne kasni (a non-restrictive relative clause — who is normally never late) and čim je ušla u predavaonicu (as soon as she walked into the lecture hall). The main clause is Profesorica je jutros zamolila studente da je ispričaju.',
      },
      {
        type: 'dictate',
        audio: 'Čim završiš, dođi kući.',
        answer: 'Čim završiš, dođi kući.',
        hint: 'Four words and one comma: "As soon as you finish, come home."',
        explanation:
          'Čim završiš, dođi kući. — the dependent clause comes first, so a comma closes it, short as it is.',
      },
    ],
  },

  // ── Text connectors ────────────────────────────────────────────────────────
  'text-connectors': {
    text: {
      kind: 'text',
      title: 'Iz gradske kronike: Tržnica seli iz središta',
      lines: [
        {
          hr: 'Gradsko je vijeće sinoć odlučilo da se stara tržnica nakon stotinu i dvadeset godina seli iz središta grada.',
          en: 'Last night the city council decided that, after a hundred and twenty years, the old market is to move out of the city center.',
        },
        {
          hr: 'Naime, zgrada u kojoj se tržnica nalazi već je desetljećima u lošem stanju, a obnova bi stajala više od izgradnje nove.',
          en: 'The reason is that the building that houses the market has been in poor condition for decades, and renovating it would cost more than building a new one.',
        },
        {
          hr: 'Stoga će prodavači od jeseni raditi u novoj hali pokraj kolodvora.',
          en: 'Therefore, from the fall on, the vendors will work in a new hall next to the station.',
        },
        {
          hr: 'Ondje će, tvrde u gradskoj upravi, imati grijane prostore, hladnjače i parkiralište za dostavu. Uz to, najam će prve dvije godine biti upola niži.',
          en: 'There, the city administration claims, they will have heated premises, cold storage and a parking lot for deliveries. In addition, the rent will be half as high for the first two years.',
        },
        {
          hr: 'Prodavači, međutim, nisu oduševljeni. „Kupci su navikli na trg. Odande je do svake ulice pet minuta hoda”, kaže Ankica Barić, koja sir prodaje na istom mjestu već trideset godina.',
          en: 'The vendors, however, are not thrilled. “The shoppers are used to the square. From there it is a five-minute walk to any street,” says Ankica Barić, who has been selling cheese in the same spot for thirty years.',
        },
        {
          hr: 'Drugim riječima, boje se da će izgubiti upravo one mušterije zahvaljujući kojima su opstali.',
          en: 'In other words, they are afraid of losing the very customers thanks to whom they have survived.',
        },
        {
          hr: 'Grad je zato najavio besplatnu autobusnu liniju od trga do nove hale. U tu će svrhu nabaviti dva električna minibusa.',
          en: 'That is why the city has announced a free bus line from the square to the new hall. For that purpose it will acquire two electric minibuses.',
        },
        {
          hr: 'Linija mora proraditi istoga dana kad i hala. Inače će, upozoravaju prodavači, prvi mjeseci biti izgubljeni.',
          en: 'The line has to start running on the same day as the hall. Otherwise, the vendors warn, the first months will be lost.',
        },
        {
          hr: 'Što će biti sa starom zgradom, još se ne zna. Zasad je sigurno samo da se neće rušiti; zapravo, konzervatori traže da se u njoj uredi muzej grada.',
          en: 'What will become of the old building is not yet known. For now the only certain thing is that it will not be torn down; in fact, the conservators are asking for a city museum to be set up in it.',
        },
        {
          hr: 'Rasprava se, dakle, nastavlja. Najprije slijedi javni natječaj za uređenje hale. Zatim bi se, potkraj rujna, mogle preseliti prve tezge.',
          en: 'So the debate continues. First comes a public tender for fitting out the hall. Then, toward the end of September, the first stalls could move.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the article: what are the vendors afraid of?',
          options: [
            'That the rent in the new hall will double after two years',
            'That the old building will be torn down',
            'That they will lose the regular customers who have kept them in business',
            'That the new hall will have no parking lot for deliveries',
          ],
          correct: 2,
          hint: 'The article restates the cheese seller’s words in a sentence that opens with a connector of restatement.',
          explanation:
            'Drugim riječima, boje se da će izgubiti upravo one mušterije zahvaljujući kojima su opstali. — the connector drugim riječima announces that the sentence says the same thing again, more plainly.',
        },
        {
          q: 'The cheese seller says "Odande je do svake ulice pet minuta hoda." Why "odande" and not "ondje"?',
          options: [
            'Because "ondje" may be used only for places the speaker has never seen',
            'Because "odande" is the form required at the beginning of a sentence',
            'Because the two words are interchangeable, and "odande" simply sounds more formal',
            'Because the distance is measured FROM the square: "odande" names a starting point, while "ondje" would only say where something is',
          ],
          correct: 3,
          hint: 'Translate the sentence and look for the English preposition that goes with "there".',
          explanation:
            'The place connectors come in sets: ondje says where something is (Ondje će imati grijane prostore), odande where something comes or is measured from, and a third set names the direction of movement. A walk is measured from a starting point, so: Odande je do svake ulice pet minuta hoda.',
        },
        {
          type: 'type',
          q: 'Now you. The bus may not run on Sundays: Autobus možda neće voziti nedjeljom. U tome ____ kupci će morati pješice. (case — slučaj)',
          answer: 'slučaju',
          hint: 'The connector of condition is u + the locative, and the demonstrative before the blank has already shown you the case.',
          explanation:
            'U tome slučaju kupci će morati pješice. — u tome (or u tom, u takvom) slučaju refers back to the whole previous sentence as a condition: if that happens.',
        },
        {
          type: 'transform',
          q: 'Split the sentence into two and link them with the explanatory connector the article uses in its second sentence.',
          from: 'Tržnica se seli jer je zgrada u lošem stanju.',
          answer: 'Tržnica se seli. Naime, zgrada je u lošem stanju.',
          accept: [
            'Tržnica se seli. Naime zgrada je u lošem stanju.',
            'Tržnica se seli. Zgrada je, naime, u lošem stanju.',
            'Tržnica se seli. Zgrada je naime u lošem stanju.',
          ],
          hint: 'The conjunction of cause disappears; the explaining word opens the second sentence (or follows its first stressed unit), and the auxiliary has to find a new place.',
          explanation:
            'Tržnica se seli. Naime, zgrada je u lošem stanju. — naime explains the sentence before it. Inside one sentence the conjunction jer does that job; between two sentences a text connector takes over. After Naime the clitic je can no longer follow jer, so it leans on zgrada.',
        },
        {
          type: 'transform',
          q: 'The city wants to attract shoppers. Rewrite the next sentence with the purpose connector built on "svrha", and let the clitic split it as it does in the article.',
          from: 'Da bi to postigao, uveo je besplatnu liniju.',
          answer: 'U tu je svrhu uveo besplatnu liniju.',
          accept: ['U tu svrhu uveo je besplatnu liniju.', 'U tu svrhu je uveo besplatnu liniju.'],
          hint: 'Three words — a preposition, a demonstrative and the noun, all in the accusative; the auxiliary may slip in after the second of them.',
          explanation:
            'U tu je svrhu uveo besplatnu liniju. — u tu svrhu (for that purpose) points back to the aim just named. The clitic may follow the first stressed word of the phrase (U tu je svrhu) or the whole phrase (U tu svrhu je / U tu svrhu uveo je); all are standard.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'tf',
        q: '"Bolestan je. Radi toga ne dolazi." is the careful way to give the reason for his absence.',
        answer: false,
        hint: 'Is the illness what he is aiming at, or what keeps him away?',
        explanation:
          'False. The illness is a cause, so careful Croatian says Zbog toga ne dolazi (or Zato ne dolazi). radi toga states a purpose: Želi položiti ispit. Radi toga uči svaki dan.',
      },
      9,
      {
        type: 'sort',
        q: 'What does the connector announce about the new sentence?',
        groups: [
          'It explains or restates the previous sentence',
          'It gives a consequence',
          'It adds a further point',
        ],
        items: [
          { hr: 'naime', group: 0 },
          { hr: 'drugim riječima', group: 0 },
          { hr: 'točnije rečeno', group: 0 },
          { hr: 'zbog toga', group: 1 },
          { hr: 'stoga', group: 1 },
          { hr: 'zato', group: 1 },
          { hr: 'uz to', group: 2 },
          { hr: 'osim toga', group: 2 },
        ],
        explanation:
          'naime, drugim riječima and točnije rečeno explain or reformulate; zbog toga, stoga and zato draw a consequence; uz to and osim toga add one more point. Most of them contain a demonstrative that stands for the whole previous sentence.',
      },
      12,
      {
        type: 'match',
        q: 'Match each sentence to the one that follows it.',
        pairs: [
          ['Pao je visok snijeg.', 'Zbog toga su škole zatvorene.'],
          ['Lijek uzimajte redovito.', 'U tome slučaju temperatura će brzo pasti.'],
          ['Ponesite kišobran.', 'Inače ćete pokisnuti.'],
          ['Želi upisati medicinu.', 'U tu svrhu svaki dan uči kemiju.'],
          ['Prvo smo razgledali grad.', 'Zatim smo sjeli na kavu.'],
        ],
        explanation:
          'The connector shows how the second sentence relates to the first: zbog toga — a consequence, u tome slučaju — a condition, inače — what happens if you do not, u tu svrhu — a purpose, zatim — the next step in time.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "That is why he no longer gets in touch."',
        words: ['Zbog', 'toga', 'se', 'više', 'ne', 'javlja.'],
        accept: ['Zbog toga se ne javlja više.', 'Više se zbog toga ne javlja.'],
        explanation:
          'Zbog toga se više ne javlja. — the connector phrase is the first unit of its sentence, so the clitic se follows it directly.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Given that, we are staying home.")',
        words: ['S', 'obzirom', 'na', 'toga', 'ostajemo', 'kod', 'kuće.'],
        wrong: 3,
        answer: 'to',
        hint: 'Every connector keeps the case of its own preposition; here the preposition is the third word, not the first.',
        explanation:
          'S obzirom na to ostajemo kod kuće. — in s obzirom na the demonstrative depends on na, which takes the accusative here: na to. The genitive toga belongs after zbog, osim, nakon.',
      },
      7,
      {
        type: 'transform',
        q: 'Make two sentences out of one: state the fact first, then open the second sentence with a connector of consequence built on "zbog".',
        from: 'Budući da je most zatvoren, vozimo obilaznim putem.',
        answer: 'Most je zatvoren. Zbog toga vozimo obilaznim putem.',
        accept: [
          'Most je zatvoren. Zato vozimo obilaznim putem.',
          'Most je zatvoren. Stoga vozimo obilaznim putem.',
          'Most je zatvoren. Zbog toga, vozimo obilaznim putem.',
        ],
        hint: 'The conjunction of cause disappears; in the second sentence a demonstrative in the genitive stands for the whole first sentence.',
        explanation:
          'Most je zatvoren. Zbog toga vozimo obilaznim putem. — inside one sentence the cause is marked by a conjunction (budući da, jer); between two sentences a text connector points back: toga = the fact that the bridge is closed.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Najprije su nam rekli da je let otkazan. Zatim su nas, doduše, prebacili na drugi, ali smo zbog toga stigli dan kasnije.',
        q: 'What happened to the travelers?',
        options: [
          'Their flight was canceled, they were rebooked on another one, and they arrived a day late',
          'Their flight was canceled, and they never left',
          'They were moved to an earlier flight and arrived a day early',
          'They missed their flight because they arrived at the airport a day late',
        ],
        correct: 0,
        explanation:
          'Najprije… Zatim… order the events in time; doduše concedes a point (they were, admittedly, moved to another flight); zbog toga draws the consequence: they arrived a day later.',
      },
      {
        type: 'dictate',
        audio: 'Odande se vidi cijeli grad.',
        answer: 'Odande se vidi cijeli grad.',
        hint: 'Five words: "From there you can see the whole town."',
        explanation:
          'Odande se vidi cijeli grad. — odande names the place something is seen FROM; ondje would say where something is, and onamo where somebody is going.',
      },
    ],
  },
};
