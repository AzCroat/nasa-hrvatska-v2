// ─── B1 lessons in class order — Units 9–10 (lessons 41–50) ──────────────────
// Same shape and rules as the A1 and A2 class files (a1class/, a2class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, the B1 lessons before each lesson, and the lesson itself have
// taught. Nothing from B2. The infinitive is the model after a modal or a verb of
// wanting when the subject stays the same; da + present only when it changes.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.
// Existing typed items whose answer is a small connector (da, jer, zato, li) open
// their mix, so that nothing printed earlier gives the answer away.

export const CLASS_B1_U09_10 = {
  // ══ UNIT 9 ═════════════════════════════════════════════════════════════════

  // ── Croats in the world ────────────────────────────────────────────────────
  'croats-abroad': {
    text: {
      kind: 'dialogue',
      title: 'Sestra u Irskoj',
      lines: [
        {
          who: 'Dora',
          hr: 'Marko, čula sam da se tvoja sestra iselila u Irsku. Je li to istina?',
          en: 'Marko, I heard that your sister has emigrated to Ireland. Is that true?',
        },
        {
          who: 'Marko',
          hr: 'Jest. Preselila se u Dublin prije dvije godine i radi u bolnici.',
          en: 'It is. She moved to Dublin two years ago and works in a hospital.',
        },
        { who: 'Dora', hr: 'I kako joj je u inozemstvu?', en: 'And how does she like it abroad?' },
        {
          who: 'Marko',
          hr: 'S jedne strane, plaća je puno veća nego ovdje, a s druge strane, nedostaju joj obitelj i prijatelji.',
          en: 'On the one hand, the pay is much higher than here, and on the other hand, she misses her family and friends.',
        },
        {
          who: 'Dora',
          hr: 'Razumijem je. Moj djed iselio se iz Dalmacije u Čile i cijeli je život pričao o svom zavičaju.',
          en: 'I understand her. My grandfather emigrated from Dalmatia to Chile and talked about his home region all his life.',
        },
        {
          who: 'Marko',
          hr: 'Je li se ikad vratio u domovinu?',
          en: 'Did he ever return to the homeland?',
        },
        {
          who: 'Dora',
          hr: 'Nije, ostao je u Čileu. Ali moja sestrična, koja je rođena ondje, sada živi u Splitu — prava povratnica!',
          en: 'No, he stayed in Chile. But my cousin, who was born there, now lives in Split — a real returnee!',
        },
        {
          who: 'Marko',
          hr: 'I moja sestra kaže da će se vratiti. Najveći nedostatak života u Dublinu je, kaže, kiša.',
          en: 'My sister says she will come back too. The biggest disadvantage of life in Dublin, she says, is the rain.',
        },
        { who: 'Dora', hr: 'A najveća prednost?', en: 'And the biggest advantage?' },
        {
          who: 'Marko',
          hr: 'To što je nitko ne pita kada će se udati!',
          en: 'That nobody asks her when she is going to get married!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is good and what is hard about the sister’s life in Ireland?',
          options: [
            'The weather is better, but the pay is lower',
            'The pay is much higher, but she misses her family and friends',
            'The hospital is modern, but she cannot find an apartment',
            'She has many friends there, but she misses the sea',
          ],
          correct: 1,
          hint: 'Marko weighs two sides against each other. One side is about money, the other about people.',
          explanation:
            'S jedne strane, plaća je puno veća, a s druge strane, nedostaju joj obitelj i prijatelji. The rain is only her biggest complaint about Dublin itself.',
        },
        {
          q: 'Marko says the sister moved "u Irsku", and Dora says her grandfather stayed "u Čileu". The same preposition, two different cases. Why?',
          options: [
            'Because Irska is feminine and Čile is not',
            'Because one sentence is in the past and the other in the present',
            'Because moving is a direction (accusative) and staying is a place (locative)',
            'Because Čile is a foreign word and never changes',
          ],
          correct: 2,
          hint: 'Ask of each verb: is somebody going somewhere, or simply being there?',
          explanation:
            'iseliti se and preseliti se are movement, so u takes the accusative: u Irsku. ostati is being in a place, so u takes the locative: u Čileu.',
        },
        {
          type: 'type',
          q: 'Now you. Dora’s grandfather left Dalmatia — but that is also where his life began: Rođen je u ____. (Dalmacija)',
          answer: 'Dalmaciji',
          hint: 'Being born somewhere is a place, not a direction — so the feminine noun takes its locative ending.',
          explanation:
            'Rođen je u Dalmaciji. — a place, so u + the locative. Leaving it was iz + the genitive (iz Dalmacije); going back would be u + the accusative.',
        },
        {
          type: 'transform',
          q: 'The sister misses her friends. Now say that YOU miss one thing: your city (grad).',
          from: 'Nedostaju joj prijatelji.',
          answer: 'Nedostaje mi grad.',
          accept: [
            'Nedostaje mi moj grad.',
            'Grad mi nedostaje.',
            'Moj grad mi nedostaje.',
            'Meni nedostaje grad.',
            'Meni nedostaje moj grad.',
          ],
          hint: 'Two things change: the person who misses stays in the dative but is now you, and the verb must agree with ONE city.',
          explanation:
            'Nedostaje mi grad. — what you miss is the subject, so the verb is singular for one city; the person who misses is in the dative (mi).',
        },
        {
          type: 'transform',
          q: 'Marko’s sister MOVED to Ireland. Now say where she LIVES — the same country.',
          from: 'Preselila se u Irsku.',
          answer: 'Živi u Irskoj.',
          accept: ['Ona živi u Irskoj.', 'Sada živi u Irskoj.', 'Ona sada živi u Irskoj.'],
          hint: 'Living is a place, not a direction — and this country name declines like an adjective, as Hrvatska does.',
          explanation:
            'Živi u Irskoj. — u + the locative for a place. Irska is an adjective in form, so its locative ends in -oj, like u Hrvatskoj.',
        },
      ],
    },
    mix: [
      13,
      0,
      {
        type: 'match',
        q: 'Who or what is it? Match each word to its description.',
        pairs: [
          ['iseljenik', 'a man who has left his country to live elsewhere'],
          ['povratnik', 'a man who has come back to live in his homeland'],
          ['stranac', 'a man from another country'],
          ['predak', 'your great-great-grandfather is one'],
          ['zavičaj', 'the region where you grew up'],
        ],
        explanation:
          'iseljenik leaves (iseliti se), povratnik comes back (vratiti se). A stranac is a foreigner, a predak an ancestor, and zavičaj is the home region you carry with you.',
      },
      14,
      2,
      {
        type: 'sort',
        q: 'Is somebody GOING there, or simply THERE? Look at the ending after "u".',
        groups: ['Direction — going there', 'Place — being there'],
        items: [
          { hr: 'Selimo se u Kanadu.', group: 0 },
          { hr: 'Rođena je u Australiji.', group: 1 },
          { hr: 'Putuju u Prag.', group: 0 },
          { hr: 'Radi u Pragu.', group: 1 },
          { hr: 'Odlazim u Njemačku.', group: 0 },
          { hr: 'Imam rodbinu u Americi.', group: 1 },
        ],
        explanation:
          'A direction takes u + the accusative (u Kanadu, u Prag, u Njemačku); a place takes u + the locative (u Australiji, u Pragu, u Americi).',
      },
      15,
      7,
      {
        type: 'order',
        q: 'Put the words in order: "My grandfather emigrated from Croatia to Canada."',
        words: ['Moj', 'djed', 'iselio', 'se', 'iz', 'Hrvatske', 'u', 'Kanadu.'],
        accept: [
          'Moj se djed iselio iz Hrvatske u Kanadu.',
          'Moj djed se iselio iz Hrvatske u Kanadu.',
          'Iz Hrvatske se moj djed iselio u Kanadu.',
          'Moj djed iselio se u Kanadu iz Hrvatske.',
          'Moj se djed iselio u Kanadu iz Hrvatske.',
          'Moj djed se iselio u Kanadu iz Hrvatske.',
          'Moj se djed iz Hrvatske iselio u Kanadu.',
          'Moj djed se iz Hrvatske iselio u Kanadu.',
        ],
        explanation:
          'Moj djed iselio se iz Hrvatske u Kanadu. Out of a country is iz + the genitive, into a country is u + the accusative.',
      },
      16,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Mojoj', 'baki', 'jako', 'nedostaje', 'svi', 'unuci.'],
        wrong: 3,
        answer: 'nedostaju',
        hint: 'Who is the subject of this verb — Grandma, or the people she misses?',
        explanation:
          'Mojoj baki jako nedostaju svi unuci. — what is missed is the subject, and it is plural here, so the verb is plural. Grandma is in the dative.',
      },
      5,
      {
        type: 'tf',
        q: 'Tko živi u tuzemstvu, živi daleko od svoje domovine.',
        answer: false,
        hint: 'There are two opposite nouns in this lesson: one means your own country, the other means foreign countries.',
        explanation:
          'False. tuzemstvo is the home country itself. The noun for foreign countries is the other one of the pair — the one Marko’s sister lives in.',
      },
      11,
      {
        type: 'transform',
        q: 'Weigh the two sides. Join the two sentences with the frame "on the one hand…, and on the other hand…".',
        from: 'Plaća je dobra. Stanovi su skupi.',
        answer: 'S jedne strane, plaća je dobra, a s druge strane, stanovi su skupi.',
        accept: [
          'S jedne je strane plaća dobra, a s druge su strane stanovi skupi.',
          'S jedne strane, plaća je dobra, ali s druge strane, stanovi su skupi.',
          'S jedne strane plaća je dobra, s druge strane stanovi su skupi.',
          'S jedne strane, plaća je dobra, a s druge su strane stanovi skupi.',
          'S jedne je strane plaća dobra, a s druge strane, stanovi su skupi.',
          'S jedne strane, plaća je dobra, no s druge strane, stanovi su skupi.',
        ],
        hint: 'Each half opens with s + the genitive of "one side" and "the other side"; the small word a turns from the first half to the second.',
        explanation:
          'S jedne strane, plaća je dobra, a s druge strane, stanovi su skupi. — the frame for weighing an advantage against a disadvantage.',
      },
      9,
      {
        type: 'listen',
        audio: 'Moja teta živi u Beču već trideset godina, ali svako ljeto dolazi u Hrvatsku.',
        q: 'What do you learn about the aunt?',
        options: [
          'She moved to Vienna thirty years ago and has never come back',
          'She has lived in Vienna for thirty years and comes to Croatia every summer',
          'She lived in Vienna for thirty years and now lives in Croatia',
          'She goes to Vienna every summer',
        ],
        correct: 1,
        explanation:
          'živi u Beču već trideset godina — she still lives there (the present with već). svako ljeto dolazi u Hrvatsku — every summer she comes to Croatia.',
      },
      {
        type: 'dictate',
        audio: 'Nedostaje mi moj zavičaj.',
        answer: 'Nedostaje mi moj zavičaj.',
        hint: 'Four words: "I miss my home region."',
        explanation:
          'Nedostaje mi moj zavičaj. — zavičaj is the subject, so the verb is singular, and the person who misses is in the dative: mi.',
      },
    ],
  },

  // ── Infinitive or da ───────────────────────────────────────────────────────
  'infinitive-vs-da': {
    text: {
      kind: 'dialogue',
      title: 'Subota kod bake',
      lines: [
        {
          who: 'Mama',
          hr: 'Filipe, u subotu idemo pomoći baki u vrtu. Želim da i ti ideš s nama.',
          en: 'Filip, on Saturday we are going to help Grandma in the garden. I want you to come with us too.',
        },
        {
          who: 'Filip',
          hr: 'Mama, ne mogu! Moram učiti za ispit, a navečer želim ići na koncert.',
          en: 'Mom, I can’t! I have to study for an exam, and in the evening I want to go to a concert.',
        },
        {
          who: 'Mama',
          hr: 'Znam da imaš ispit, ali baka kaže da te nije vidjela dva mjeseca.',
          en: 'I know you have an exam, but Grandma says she has not seen you for two months.',
        },
        {
          who: 'Filip',
          hr: 'Mislim da nije tako. Bio sam kod nje prije tri tjedna.',
          en: 'I don’t think that is so. I was at her place three weeks ago.',
        },
        {
          who: 'Mama',
          hr: 'Osim toga, želi da joj popraviš računalo. Kaže da ne može otvoriti e-poštu.',
          en: 'Besides, she wants you to fix her computer. She says she cannot open her email.',
        },
        {
          who: 'Filip',
          hr: 'Dobro, to mogu učiniti. Ali želim da me do šest vratite kući.',
          en: 'All right, I can do that. But I want you to bring me home by six.',
        },
        {
          who: 'Mama',
          hr: 'Dogovoreno. Onda počni učiti već danas.',
          en: 'Agreed. Then start studying today already.',
        },
        {
          who: 'Filip',
          hr: 'Već danas?! Nadam se da će baka barem ispeći kolač.',
          en: 'Today already?! I hope Grandma will at least bake a cake.',
        },
        {
          who: 'Mama',
          hr: 'Sigurna sam da hoće — već me pitala što najviše voliš.',
          en: 'I am sure she will — she has already asked me what you like best.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Grandma want from Filip, and on what condition does he agree to come?',
          options: [
            'She wants him to bake a cake; he agrees if he can study there',
            'She wants him to work in the garden; he agrees if they go on Sunday',
            'She wants him to fix her computer; he agrees if he is brought home by six',
            'She wants him to take her to the concert; he agrees if Mom drives',
          ],
          correct: 2,
          hint: 'Grandma has trouble with her email. Filip has plans for the evening.',
          explanation:
            'Baka želi da joj popravi računalo. Filip agrees, but he wants to be home by six — he has a concert in the evening.',
        },
        {
          q: 'Mama says "Želim da i ti ideš s nama", but Filip says "želim ići na koncert". Why does only Mama’s sentence have "da"?',
          options: [
            'Because Mama is speaking politely',
            'Because in Mama’s sentence one person wants and ANOTHER goes; in Filip’s the same person wants and goes',
            'Because Mama is talking about Saturday and Filip about the evening',
            'Because "ići" cannot follow "želim" in the first person',
          ],
          correct: 1,
          hint: 'For each sentence ask: who wants, and who goes?',
          explanation:
            'Mama wants, Filip goes — a new subject needs a full clause: da + the present. Filip wants and Filip goes — the same subject, so the infinitive is enough.',
        },
        {
          type: 'type',
          q: 'Now you. Filip tells a friend about Saturday: Baka želi da joj ____ računalo. (popraviti — ja)',
          answer: 'popravim',
          hint: 'Grandma wants, but Filip does the fixing: da + the present, in the form for ja.',
          explanation:
            'Baka želi da joj popravim računalo. — the subject changes from baka to ja, so Croatian uses da + the present, never the infinitive.',
        },
        {
          type: 'transform',
          q: 'Mama wants to rest. Now she wants FILIP to rest — she is speaking to him (ti).',
          from: 'Želim se odmoriti.',
          answer: 'Želim da se odmoriš.',
          accept: [
            'Želim da se ti odmoriš.',
            'Ja želim da se odmoriš.',
            'Želim da se i ti odmoriš.',
          ],
          hint: 'A new subject for the second verb: the infinitive has to become a clause with its own verb form.',
          explanation:
            'Želim da se odmoriš. — I want, you rest: two subjects, so da + the present. se keeps its second place inside the clause, right after da.',
        },
        {
          type: 'transform',
          q: 'English can drop "that"; Croatian cannot. Begin with "Mislim…" and say: "I think Grandma is right."',
          from: 'Baka ima pravo.',
          answer: 'Mislim da baka ima pravo.',
          accept: ['Ja mislim da baka ima pravo.'],
          hint: 'After a verb of thinking, the clause needs its small linking word — always.',
          explanation:
            'Mislim da baka ima pravo. — after misliti, znati, reći and nadati se the conjunction is compulsory, even where English leaves "that" out.',
        },
      ],
    },
    mix: [
      5,
      1,
      {
        type: 'sort',
        q: 'Who does the second action — the SAME person, or somebody else?',
        groups: ['The same person does both', 'A different person does it'],
        items: [
          { hr: 'Želim spavati.', group: 0 },
          { hr: 'Želim da spavaš.', group: 1 },
          { hr: 'Moramo krenuti.', group: 0 },
          { hr: 'Tata želi da krenemo.', group: 1 },
          { hr: 'Idem platiti račun.', group: 0 },
          { hr: 'Mama želi da platim račun.', group: 1 },
        ],
        explanation:
          'The same subject throughout: a plain infinitive (spavati, krenuti, platiti). A new subject: da + the present, with its own ending (spavaš, krenemo, platim).',
      },
      4,
      {
        type: 'match',
        q: 'Who wants what? Match each sentence to its meaning.',
        pairs: [
          ['Želim doći.', 'I want to come.'],
          ['Želim da dođeš.', 'I want you to come.'],
          ['Želi da dođem.', 'He wants me to come.'],
          ['Želi doći.', 'He wants to come.'],
          ['Žele da dođemo.', 'They want us to come.'],
        ],
        explanation:
          'With the infinitive, the one who wants is the one who comes. With da, the ending of the second verb tells you who is to come: dođeš (you), dođem (I), dođemo (we).',
      },
      6,
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Trener', 'želi', 'da', 'igrači', 'više', 'trčati.'],
        wrong: 5,
        answer: 'trče',
        hint: 'After da comes a clause with its own subject — so its verb needs a personal ending.',
        explanation:
          'Trener želi da igrači više trče. — the coach wants, the players run: after da the verb is in the present and agrees with igrači.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I hope that you will come tomorrow."',
        words: ['Nadam', 'se', 'da', 'ćeš', 'sutra', 'doći.'],
        accept: ['Nadam se da ćeš doći sutra.'],
        explanation:
          'Nadam se da ćeš sutra doći. Inside the clause, the short word ćeš comes right after da.',
      },
      10,
      {
        type: 'tf',
        q: '"Želim te vidjeti" and "Želim da me vidiš" mean the same thing.',
        answer: false,
        hint: 'In each sentence, work out who is doing the seeing.',
        explanation:
          'False. Želim te vidjeti — I want to see you (I want, I see). Želim da me vidiš — I want you to see me (I want, you see).',
      },
      9,
      {
        type: 'transform',
        q: 'You want to pay for dinner yourself. Now say that you want YOUR BROTHER to pay: "Želim da moj brat…"',
        from: 'Želim platiti večeru.',
        answer: 'Želim da moj brat plati večeru.',
        accept: [
          'Želim da večeru plati moj brat.',
          'Želim da brat plati večeru.',
          'Ja želim da moj brat plati večeru.',
        ],
        hint: 'The second verb gets a new subject, so it leaves the infinitive and agrees with him.',
        explanation:
          'Želim da moj brat plati večeru. — I want, my brother pays: da + the present in the third person.',
      },
      8,
      11,
      {
        type: 'listen',
        audio: 'Roditelji žele da studiram u Zagrebu, a ja želim ostati u Splitu.',
        q: 'Who wants what?',
        options: [
          'The parents want to study in Zagreb',
          'The speaker wants to study in Zagreb, but the parents prefer Split',
          'The parents want the speaker to study in Zagreb; the speaker wants to stay in Split',
          'Both the parents and the speaker want Split',
        ],
        correct: 2,
        explanation:
          'žele da studiram — they want ME to study (a new subject, da + the present). ja želim ostati — I want to stay (the same subject, the infinitive).',
      },
      {
        type: 'dictate',
        audio: 'Znam da moraš učiti.',
        answer: 'Znam da moraš učiti.',
        hint: 'Four words: "I know that you have to study."',
        explanation:
          'Znam da moraš učiti. — both jobs in one sentence: da meaning "that" after znati, and a plain infinitive after the modal moraš.',
      },
    ],
  },

  // ── Because and in order to ────────────────────────────────────────────────
  'cause-purpose': {
    text: {
      kind: 'dialogue',
      title: 'Zašto opet kasniš?',
      lines: [
        {
          who: 'Lana',
          hr: 'Tine, opet kasniš! Čekam te već pola sata.',
          en: 'Tin, you are late again! I have been waiting for you for half an hour.',
        },
        {
          who: 'Tin',
          hr: 'Oprosti! Zakasnio sam zbog gužve — tramvaji ne voze jer je na Savskoj bila nesreća.',
          en: 'Sorry! I was late because of the traffic — the trams are not running because there was an accident on Savska.',
        },
        {
          who: 'Lana',
          hr: 'Dobro, opraštam ti. A zašto nosiš tolike knjige?',
          en: 'All right, I forgive you. And why are you carrying so many books?',
        },
        {
          who: 'Tin',
          hr: 'Zato što navečer idem na tečaj njemačkog. Učim njemački kako bih našao bolji posao.',
          en: 'Because I am going to a German class this evening. I am learning German in order to find a better job.',
        },
        {
          who: 'Lana',
          hr: 'Ozbiljno? Budući da već dobro govoriš engleski, mislila sam da ti to ne treba.',
          en: 'Seriously? Since you already speak English well, I thought you did not need that.',
        },
        {
          who: 'Tin',
          hr: 'Naša tvrtka puno posluje s Austrijom, zato šef traži ljude koji govore njemački.',
          en: 'Our company does a lot of business with Austria; that is why the boss is looking for people who speak German.',
        },
        {
          who: 'Lana',
          hr: 'Pametno. Ja štedim da bih na ljeto otišla u Beč — radi koncerta, ne radi posla!',
          en: 'Smart. I am saving up so that I can go to Vienna in the summer — for a concert, not for work!',
        },
        {
          who: 'Tin',
          hr: 'Onda mi se javi prije puta, da te naučim barem naručiti kavu.',
          en: 'Then get in touch before the trip, so that I can teach you at least to order a coffee.',
        },
        {
          who: 'Lana',
          hr: 'Dogovoreno. Ali sljedeći put kreni ranije da ne zakasniš!',
          en: 'Deal. But next time leave earlier so that you are not late!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why was Tin late, and what is he learning German for?',
          options: [
            'He overslept; he wants to move to Austria',
            'There was an accident and the trams stopped; he wants to find a better job',
            'He was at a German class; his boss is Austrian',
            'He missed the tram; he wants to go to a concert in Vienna',
          ],
          correct: 1,
          hint: 'The reason is something that happened on Savska. The aim has to do with his career.',
          explanation:
            'Zakasnio je zbog gužve — the trams stopped after an accident. And he is learning German kako bi našao bolji posao. The concert in Vienna is Lana’s plan.',
        },
        {
          q: 'In one breath Tin says "zbog gužve" and "jer je … bila nesreća". Both give a reason. Why does he need two different words?',
          options: [
            'zbog is formal and jer is informal',
            'zbog is for the past and jer is for the present',
            'zbog is followed by a noun in the genitive; jer is followed by a whole clause with a verb',
            'zbog is used for people and jer for things',
          ],
          correct: 2,
          hint: 'Look at what comes right after each word: is there a verb?',
          explanation:
            'zbog + a noun in the genitive (gužve), no verb. jer + a clause with its own verb (je bila nesreća). The meaning is the same; the structure is not.',
        },
        {
          type: 'type',
          q: 'Now you. Lana explains her trip — a purpose, something she is aiming at: Idem u Beč ____ koncerta. (for the sake of)',
          answer: 'radi',
          hint: 'Not the word for a cause. Lana uses this preposition twice in one sentence when she talks about her summer.',
          explanation:
            'Idem u Beč radi koncerta. — a purpose looks forward, and standard Croatian marks it with this preposition and the genitive. zbog looks back, at a cause.',
        },
        {
          type: 'transform',
          q: 'Tin was late because of the traffic. Say it with "jer" and a whole clause: "…because there was traffic."',
          from: 'Zakasnio sam zbog gužve.',
          answer: 'Zakasnio sam jer je bila gužva.',
          accept: [
            'Zakasnio sam zato što je bila gužva.',
            'Zakasnio sam jer je bila velika gužva.',
            'Zakasnio sam jer je gužva bila.',
          ],
          hint: 'A clause needs a verb in the past and its subject in the nominative.',
          explanation:
            'Zakasnio sam jer je bila gužva. — after jer comes a full clause: the noun returns to the nominative and gets a verb.',
        },
        {
          type: 'transform',
          q: 'Turn it around: say the reason first as a plain sentence, then the result, linked by the one word for "that is why".',
          from: 'Učim njemački jer tražim bolji posao.',
          answer: 'Tražim bolji posao, zato učim njemački.',
          accept: [
            'Tražim bolji posao i zato učim njemački.',
            'Tražim bolji posao pa zato učim njemački.',
            'Tražim bolji posao, stoga učim njemački.',
          ],
          hint: 'The linking word here is a single word and it introduces the consequence — not the two-word connector that introduces a cause.',
          explanation:
            'Tražim bolji posao, zato učim njemački. — zato introduces the result. With što added it would introduce the cause instead.',
        },
      ],
    },
    mix: [
      7,
      4,
      {
        type: 'tf',
        q: 'In "Pada kiša, zato ostajem doma", the rain is the cause and staying at home is the result.',
        answer: true,
        hint: 'Which half follows the linking word — the reason, or what comes of it?',
        explanation:
          'True. zato alone introduces the consequence: it is raining, and that is why I am staying in.',
      },
      8,
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Since I do not have a car, I go by tram."',
        words: ['Budući', 'da', 'nemam', 'auto,', 'idem', 'tramvajem.'],
        accept: ['Idem tramvajem budući da nemam auto.'],
        explanation:
          'Budući da nemam auto, idem tramvajem. Unlike jer, this connector can open the sentence.',
      },
      6,
      5,
      {
        type: 'sort',
        q: 'Does it give a CAUSE (looking back) or a PURPOSE (looking forward)?',
        groups: ['Cause — why it happened', 'Purpose — what it is for'],
        items: [
          { hr: 'zbog snijega', group: 0 },
          { hr: 'radi zdravlja', group: 1 },
          { hr: 'jer sam bio bolestan', group: 0 },
          { hr: 'da bih bolje spavao', group: 1 },
          { hr: 'zato što nema struje', group: 0 },
          { hr: 'kako bismo stigli na vrijeme', group: 1 },
        ],
        explanation:
          'Cause: zbog + genitive, jer and zato što + a clause. Purpose: radi + genitive, da bih and kako bismo + a participle.',
      },
      1,
      {
        type: 'match',
        q: 'Match the two halves. Look at what each ending is: a noun, or a clause — a reason, a result, or an aim?',
        pairs: [
          ['Ostali smo doma zbog', 'jakog vjetra.'],
          ['Ostali smo doma jer', 'je puhao jak vjetar.'],
          ['Puhao je jak vjetar, zato', 'smo ostali doma.'],
          ['Uzeli smo taksi kako', 'bismo stigli na vrijeme.'],
        ],
        explanation:
          'zbog + a noun in the genitive; jer + a clause that gives the reason; zato + the result; kako + the conditional for an aim.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Vratili', 'smo', 'se', 'u', 'Hrvatsku', 'radi', 'djeca.'],
        wrong: 6,
        answer: 'djece',
        hint: 'Both the cause preposition and the purpose preposition take the same case.',
        explanation:
          'Vratili smo se u Hrvatsku radi djece. — radi, like zbog, takes the genitive: djeca → djece. The children are the aim, so it is radi.',
      },
      {
        type: 'transform',
        q: 'Say the same with a noun instead of a clause: use "zbog".',
        from: 'Ne idemo na izlet jer pada kiša.',
        answer: 'Ne idemo na izlet zbog kiše.',
        accept: ['Zbog kiše ne idemo na izlet.'],
        hint: 'The verb disappears, and the noun goes into the case this preposition takes.',
        explanation:
          'Ne idemo na izlet zbog kiše. — zbog takes a noun in the genitive and no verb: kiša → kiše.',
      },
      10,
      11,
      {
        type: 'listen',
        audio: 'Ustala sam u pet da stignem na prvi vlak.',
        q: 'Why did she get up at five?',
        options: [
          'Because she had missed the first train',
          'In order to catch the first train',
          'Because the train was late',
          'In order to meet someone at the station',
        ],
        correct: 1,
        explanation:
          'da stignem na prvi vlak — an aim: da + the present, with the same subject. She got up early so as to be in time for the first train.',
      },
      {
        type: 'dictate',
        audio: 'Ne idem van jer pada kiša.',
        answer: 'Ne idem van jer pada kiša.',
        hint: 'Six words: "I am not going out because it is raining."',
        explanation: 'Ne idem van jer pada kiša. — jer is followed by a whole clause: pada kiša.',
      },
    ],
  },

  // ── Reported speech ────────────────────────────────────────────────────────
  'reported-speech': {
    text: {
      kind: 'dialogue',
      title: 'Tko je zvao?',
      lines: [
        { who: 'Jakov', hr: 'Tko je zvao?', en: 'Who called?' },
        {
          who: 'Nika',
          hr: 'Ivana. Rekla je da kasni jer je propustila autobus.',
          en: 'Ivana. She said she is running late because she missed the bus.',
        },
        {
          who: 'Jakov',
          hr: 'Opet? Je li rekla kada će doći?',
          en: 'Again? Did she say when she would come?',
        },
        {
          who: 'Nika',
          hr: 'Rekla je da će doći oko osam. Pitala je i jesmo li već naručili pizzu.',
          en: 'She said she would come around eight. She also asked whether we had already ordered the pizza.',
        },
        { who: 'Jakov', hr: 'Nismo. Što ona želi?', en: 'We haven’t. What does she want?' },
        {
          who: 'Nika',
          hr: 'Rekla je da ne jede meso, pa me zamolila da joj naručim pizzu s gljivama.',
          en: 'She said she does not eat meat, so she asked me to order her a pizza with mushrooms.',
        },
        {
          who: 'Jakov',
          hr: 'Dobro. A je li pitala tko još dolazi?',
          en: 'Fine. And did she ask who else is coming?',
        },
        {
          who: 'Nika',
          hr: 'Jest. Pitala je dolazi li Bruno, i rekla mi je da mu ništa ne govorim o daru.',
          en: 'She did. She asked whether Bruno is coming, and she told me not to say anything to him about the present.',
        },
        { who: 'Jakov', hr: 'O kakvom daru?', en: 'About what present?' },
        {
          who: 'Nika',
          hr: 'Ne znam — rekla je samo da je to iznenađenje!',
          en: 'I don’t know — she only said that it is a surprise!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why is Ivana late, when will she arrive, and which pizza does she want?',
          options: [
            'Her car broke down; around nine; a pizza with ham',
            'She missed the bus; around eight; a pizza with mushrooms',
            'She is still at work; around eight; a pizza without cheese',
            'She missed the bus; around seven; any pizza',
          ],
          correct: 1,
          hint: 'Think of public transportation, an evening hour, and the fact that she does not eat meat.',
          explanation:
            'Propustila je autobus, she is coming around eight, and because she does not eat meat she asked for a pizza s gljivama.',
        },
        {
          q: 'Nika reports: "Rekla je da kasni." What were Ivana’s own words on the phone?',
          options: ['„Kasnila sam.”', '„Kasnim.”', '„Kasni.”', '„Kasnit ću.”'],
          correct: 1,
          hint: 'Croatian keeps the tense the speaker used. Only one thing moves when you report.',
          explanation:
            'Ivana said „Kasnim.” The report keeps her present tense — there is no backshift as in English — and only the person moves, from ja to ona.',
        },
        {
          type: 'type',
          q: 'Now you. Bruno says on the phone: „Donijet ću vino.” Report it: Bruno je rekao da ____ donijeti vino.',
          answer: 'će',
          hint: 'Keep his future tense. Only the person moves, from ja to on.',
          explanation:
            'Bruno je rekao da će donijeti vino. — the future stays the future; ću (ja) becomes the third-person form.',
        },
        {
          type: 'transform',
          q: 'Ivana asked Nika this question. Nika reports it: begin with "Pitala me…"',
          from: 'Imaš li auto?',
          answer: 'Pitala me imam li auto.',
          accept: [
            'Pitala me je imam li auto.',
            'Pitala je imam li auto.',
            'Pitala me imam li ja auto.',
          ],
          hint: 'A yes/no question keeps its li. The verb moves to the person who is now speaking.',
          explanation:
            'Pitala me imam li auto. — li stays, the tense stays, and imaš (you) becomes the form for ja, because Nika is now talking about herself.',
        },
        {
          type: 'transform',
          q: 'Mom said this to Jakov. He reports it: begin with "Mama mi je rekla…"',
          from: 'Zatvori prozor!',
          answer: 'Mama mi je rekla da zatvorim prozor.',
          accept: ['Mama mi je rekla da prozor zatvorim.'],
          hint: 'An order cannot stay an imperative in a report: it becomes a clause with the present, for the person who has to do it.',
          explanation:
            'Mama mi je rekla da zatvorim prozor. — a reported request is da + the present, and Jakov is the one who must close the window.',
        },
      ],
    },
    mix: [
      4,
      0,
      {
        type: 'match',
        q: 'Match what he said to the way it is reported.',
        pairs: [
          ['„Umoran sam.”', 'Rekao je da je umoran.'],
          ['„Bio sam umoran.”', 'Rekao je da je bio umoran.'],
          ['„Bit ću umoran.”', 'Rekao je da će biti umoran.'],
          ['„Jesi li umoran?”', 'Pitao je jesam li umoran.'],
          ['„Odmori se!”', 'Rekao mi je da se odmorim.'],
        ],
        explanation:
          'The tense he used is the tense you keep: present, past, future. A yes/no question keeps li, and an order becomes da + the present.',
      },
      6,
      2,
      {
        type: 'sort',
        q: 'What did the person originally say — a statement, a question, or a request?',
        groups: ['A statement', 'A question', 'A request or an order'],
        items: [
          { hr: 'Rekla je da nema vremena.', group: 0 },
          { hr: 'Pitao je koliko je sati.', group: 1 },
          { hr: 'Zamolili su nas da budemo tiho.', group: 2 },
          { hr: 'Rekao mi je da ne vičem.', group: 2 },
          { hr: 'Pitala je imamo li djece.', group: 1 },
          { hr: 'Rekli su da je hotel pun.', group: 0 },
        ],
        explanation:
          'A question shows its question word or li. A request is da + the present for the person who has to do it (da budemo, da ne vičem). A statement is da + what was said.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "He asked whether we have the tickets."',
        words: ['Pitao', 'je', 'imamo', 'li', 'karte.'],
        explanation:
          'Pitao je imamo li karte. A reported yes/no question keeps the order verb + li, with no da.',
      },
      7,
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Liječnik', 'mi', 'je', 'rekao', 'da', 'više', 'spavaj.'],
        wrong: 6,
        answer: 'spavam',
        hint: 'A reported piece of advice cannot keep the imperative. Who has to sleep more?',
        explanation:
          'Liječnik mi je rekao da više spavam. — the imperative becomes da + the present, in the form for the person who is to do it.',
      },
      9,
      3,
      {
        type: 'tf',
        q: 'Marko said: „Bolestan sam.” The correct report is: Marko je rekao da je bio bolestan.',
        answer: false,
        hint: 'English would shift the tense here. Does Croatian?',
        explanation:
          'False. That sentence reports „Bio sam bolestan.” His present tense is kept: Marko je rekao da je bolestan.',
      },
      8,
      {
        type: 'transform',
        q: 'Your friend Luka asked you this. Report it: begin with "Luka me pitao…"',
        from: 'Dolaziš li na večeru?',
        answer: 'Luka me pitao dolazim li na večeru.',
        accept: [
          'Luka me je pitao dolazim li na večeru.',
          'Luka me pitao dolazim li ja na večeru.',
        ],
        hint: 'Keep li and the tense; move the verb from the person he spoke to, to the person now speaking.',
        explanation:
          'Luka me pitao dolazim li na večeru. — no da in a reported question; dolaziš becomes the form for ja.',
      },
      10,
      {
        type: 'listen',
        audio: 'Susjed je rekao da će nam sutra vratiti ključeve.',
        q: 'What were the neighbor’s own words?',
        options: [
          '„Vratio sam vam ključeve.”',
          '„Sutra ću vam vratiti ključeve.”',
          '„Vratite mi sutra ključeve.”',
          '„Vraćam vam ključeve.”',
        ],
        correct: 1,
        explanation:
          'da će … vratiti keeps his future tense, so he said „Sutra ću vam vratiti ključeve.” Only the persons moved: ću → će, vam → nam.',
      },
      {
        type: 'dictate',
        audio: 'Pitala je gdje živim.',
        answer: 'Pitala je gdje živim.',
        hint: 'Four words: "She asked where I live."',
        explanation:
          'Pitala je gdje živim. — the question word stays, followed by an ordinary clause in the tense that was used.',
      },
    ],
  },

  // ── When something goes wrong ──────────────────────────────────────────────
  'complaints-problems': {
    text: {
      kind: 'dialogue',
      title: 'Na recepciji',
      lines: [
        {
          who: 'Gošća',
          hr: 'Oprostite, imam problem u sobi 204.',
          en: 'Excuse me, I have a problem in room 204.',
        },
        {
          who: 'Recepcionar',
          hr: 'Žao mi je, gospođo Kovač. Što nije u redu?',
          en: 'I am sorry, Mrs. Kovač. What is wrong?',
        },
        {
          who: 'Gošća',
          hr: 'Ne radi klima, a u kupaonici nema tople vode. Osim toga, pokvario se i televizor.',
          en: 'The air conditioning is not working, and there is no hot water in the bathroom. Besides, the TV has broken too.',
        },
        {
          who: 'Recepcionar',
          hr: 'Ispričavam se. Odmah ću poslati majstora da to pogleda.',
          en: 'I apologize. I will send a repairman right away to look at it.',
        },
        {
          who: 'Gošća',
          hr: 'Hvala. I još nešto: mislim da je došlo do greške u računu. Naručila sam jedan doručak, a na računu su dva.',
          en: 'Thank you. And one more thing: I think there has been a mistake in the bill. I ordered one breakfast, and there are two on the bill.',
        },
        {
          who: 'Recepcionar',
          hr: 'Imate pravo, račun nije točan. Odmah ću ga ispraviti.',
          en: 'You are right, the bill is not correct. I will correct it right away.',
        },
        {
          who: 'Gošća',
          hr: 'Biste li mi mogli dati drugu sobu ako majstor ne popravi klimu do večeri?',
          en: 'Could you give me a different room if the repairman does not fix the air conditioning by the evening?',
        },
        {
          who: 'Recepcionar',
          hr: 'Naravno. Ako želite, možete se odmah preseliti u sobu 310.',
          en: 'Of course. If you like, you can move to room 310 right away.',
        },
        {
          who: 'Gošća',
          hr: 'To bi bilo odlično. Hvala Vam na razumijevanju.',
          en: 'That would be excellent. Thank you for your understanding.',
        },
        {
          who: 'Recepcionar',
          hr: 'Hvala Vama, i još jednom oprostite.',
          en: 'Thank YOU, and once again, I am sorry.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which three things are wrong in room 204, and what is wrong with the bill?',
          options: [
            'The heating, the shower and the phone; the bill shows the wrong room',
            'The air conditioning, the hot water and the TV; the bill shows two breakfasts instead of one',
            'The air conditioning, the lamp and the window; the bill shows two nights instead of one',
            'The hot water, the internet and the TV; the bill is missing',
          ],
          correct: 1,
          hint: 'One thing cools the room, one comes out of the faucet, one you watch. The mistake is about a meal.',
          explanation:
            'Ne radi klima, nema tople vode, pokvario se televizor — and she ordered one breakfast but was billed for two.',
        },
        {
          q: 'Mrs. Kovač says "Ne radi klima" and "pokvario se televizor". She never says "you" or "your hotel". Why is this the natural way to complain in Croatian?',
          options: [
            'Because she does not know who is responsible',
            'Because the faulty thing is made the subject, so the sentence reports a fault and blames nobody',
            'Because "you" is impolite in any Croatian sentence',
            'Because verbs about machines have no forms for persons',
          ],
          correct: 1,
          hint: 'Ask what the subject of each sentence is — a person, or the thing itself?',
          explanation:
            'The object that failed is the subject: klima ne radi, televizor se pokvario. No person is named, so it does not sound like an accusation.',
        },
        {
          type: 'type',
          q: 'Now you. In your room the lamp has broken. Report the fault: ____ se lampa.',
          answer: 'Pokvarila',
          hint: 'The same verb Mrs. Kovač uses about the TV — but it has to agree with a feminine noun.',
          explanation:
            'Pokvarila se lampa. — the participle agrees with the thing that broke: pokvario se televizor, pokvarila se lampa.',
        },
        {
          type: 'transform',
          q: 'Too blunt for a reception desk! You are a woman: turn the demand into a polite request.',
          from: 'Hoću drugu sobu.',
          answer: 'Htjela bih drugu sobu.',
          accept: [
            'Ja bih htjela drugu sobu.',
            'Htjela bih drugu sobu, molim.',
            'Htjela bih drugu sobu, molim Vas.',
            'Htjela bih dobiti drugu sobu.',
            'Željela bih drugu sobu.',
            'Voljela bih drugu sobu.',
            'Molim Vas, htjela bih drugu sobu.',
          ],
          hint: 'Use the same verb in the conditional. The short auxiliary cannot come first.',
          explanation:
            'Htjela bih drugu sobu. — the conditional keeps you firm without being rude. Hoću is a demand.',
        },
        {
          type: 'type',
          q: 'The guest in room 310 also has a complaint about the bill: Nešto nije u redu s ____. (račun)',
          answer: 'računom',
          hint: 's takes the instrumental.',
          explanation:
            'Nešto nije u redu s računom. — "something is wrong with…" is s + the instrumental, and again nobody is blamed.',
        },
      ],
    },
    mix: [
      7,
      0,
      {
        type: 'match',
        q: 'What would you say? Match each situation to the sentence.',
        pairs: [
          ['The radiators are cold.', 'Ne radi grijanje.'],
          ['The waiter brought the wrong dish.', 'Ovo nije ono što sam naručio.'],
          ['The total looks too high.', 'Mislim da račun nije točan.'],
          ['Nobody at the desk can help you.', 'Htio bih razgovarati s voditeljem.'],
          ['The problem has been solved.', 'Hvala Vam na razumijevanju.'],
        ],
        explanation:
          'Report the fault (ne radi…, nije točan), say what you want with the conditional (htio bih…), and close with hvala na + the locative.',
      },
      5,
      3,
      {
        type: 'sort',
        q: 'Does the sentence calmly report a fault, or does it blame a person?',
        groups: ['Reports the fault — polite', 'Blames a person — rude'],
        items: [
          { hr: 'Pokvario se bojler.', group: 0 },
          { hr: 'Vi ste pokvarili bojler!', group: 1 },
          { hr: 'Nema struje.', group: 0 },
          { hr: 'Niste očistili sobu!', group: 1 },
          { hr: 'Došlo je do greške.', group: 0 },
          { hr: 'Pogriješili ste!', group: 1 },
        ],
        explanation:
          'A report has the thing as its subject, or no subject at all (nema…, došlo je do…). An accusation has "you" as the subject: Vi ste…, niste…',
      },
      4,
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Could you check that?" (polite, to a stranger)',
        words: ['Biste', 'li', 'to', 'mogli', 'provjeriti?'],
        accept: ['Biste li mogli to provjeriti?'],
        explanation:
          'Biste li to mogli provjeriti? The auxiliary opens the question, li follows it, and the participle is plural for polite Vi.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'sobi', 'nema', 'topla', 'vode.'],
        wrong: 3,
        answer: 'tople',
        hint: 'nema puts the noun in the genitive — and its adjective has to follow it there.',
        explanation: 'U sobi nema tople vode. — nema takes the genitive, adjective included.',
      },
      1,
      {
        type: 'tf',
        q: '"Hoću razgovarati s voditeljem" is more polite than "Htio bih razgovarati s voditeljem".',
        answer: false,
        hint: 'One of the two is a demand; the other uses the conditional.',
        explanation:
          'False. Hoću is a demand. The conditional, htio bih, turns it into a request that is still firm.',
      },
      9,
      {
        type: 'transform',
        q: 'Make the request softer still: use the conditional of moći.',
        from: 'Možete li mi pomoći?',
        answer: 'Biste li mi mogli pomoći?',
        accept: [
          'Biste li mi pomogli?',
          'Biste li mi Vi mogli pomoći?',
          'Biste li mi mogli pomoći, molim Vas?',
          'Biste li mi, molim Vas, mogli pomoći?',
        ],
        hint: 'The conditional auxiliary for Vi opens the question, and moći becomes a plural participle.',
        explanation:
          'Biste li mi mogli pomoći? — biste + the participle mogli is softer than možete, and the short words li and mi follow the auxiliary.',
      },
      10,
      {
        type: 'listen',
        audio: 'Naručio sam juhu, a dobio sam salatu.',
        q: 'What is the guest’s problem?',
        options: [
          'He ordered a salad but got soup',
          'He ordered soup but got a salad',
          'His soup was cold',
          'He never got his salad',
        ],
        correct: 1,
        explanation:
          'Naručio sam juhu — he ordered soup; a dobio sam salatu — and he was given a salad.',
      },
      {
        type: 'dictate',
        audio: 'Internet ne radi od jutra.',
        answer: 'Internet ne radi od jutra.',
        hint: 'Five words: "The internet has not been working since the morning."',
        explanation:
          'Internet ne radi od jutra. — Croatian uses the present for something that started earlier and is still going on.',
      },
    ],
  },

  // ══ UNIT 10 ════════════════════════════════════════════════════════════════

  // ── Offices and paperwork ──────────────────────────────────────────────────
  bureaucracy: {
    text: {
      kind: 'dialogue',
      title: 'Na šalteru',
      lines: [
        {
          who: 'Emma',
          hr: 'Dobar dan. Htjela bih podnijeti zahtjev za boravišnu dozvolu.',
          en: 'Good day. I would like to submit an application for a residence permit.',
        },
        {
          who: 'Službenica',
          hr: 'Dobar dan. Jeste li uzeli broj?',
          en: 'Good day. Have you taken a number?',
        },
        {
          who: 'Emma',
          hr: 'Jesam, imam broj četrdeset dva. Koje dokumente trebam?',
          en: 'I have, I have number forty-two. Which documents do I need?',
        },
        {
          who: 'Službenica',
          hr: 'Potrebno je ispuniti ovaj obrazac i priložiti presliku putovnice i dvije fotografije.',
          en: 'It is necessary to fill out this form and attach a copy of your passport and two photos.',
        },
        {
          who: 'Emma',
          hr: 'Obrazac sam već ispunila. Trebam li i OIB?',
          en: 'I have already filled out the form. Do I need an OIB as well?',
        },
        {
          who: 'Službenica',
          hr: 'Naravno, bez OIB-a se ništa ne može. Pristojba se plaća u pošti, a potvrda se predaje ovdje.',
          en: 'Of course, nothing can be done without an OIB. The fee is paid at the post office, and the receipt is handed in here.',
        },
        { who: 'Emma', hr: 'Koliko dugo to traje?', en: 'How long does it take?' },
        {
          who: 'Službenica',
          hr: 'Otprilike tri tjedna. Kad dozvola bude gotova, poslat ćemo Vam poruku.',
          en: 'About three weeks. When the permit is ready, we will send you a message.',
        },
        {
          who: 'Emma',
          hr: 'Hvala Vam. A gdje je pošta?',
          en: 'Thank you. And where is the post office?',
        },
        {
          who: 'Službenica',
          hr: 'Odmah iza ugla — ali požurite, zatvara se u tri!',
          en: 'Just around the corner — but hurry, it closes at three!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what must Emma attach to the form, and where does she pay the fee?',
          options: [
            'Her birth certificate and one photo; at the same counter',
            'A copy of her passport and two photos; at the post office',
            'Her ID card and her rental contract; at the bank',
            'A copy of her passport and her OIB; online',
          ],
          correct: 1,
          hint: 'One thing is a copy of a travel document; the other comes in a pair. The fee is paid in a different building.',
          explanation:
            'She has to attach presliku putovnice i dvije fotografije. And: Pristojba se plaća u pošti — the receipt then comes back to this counter.',
        },
        {
          q: 'The clerk says "Pristojba se plaća u pošti" and "potvrda se predaje ovdje". She never says who pays or who hands it in. Why?',
          options: [
            'Because she has forgotten Emma’s name',
            'Because official language is impersonal: se + the third person states the rule for everybody',
            'Because the verbs plaćati and predavati are always reflexive',
            'Because se is the polite form of Vi',
          ],
          correct: 1,
          hint: 'The rule is the same for every person who comes to the counter.',
          explanation:
            'se + a verb in the third person names no doer: "the fee is paid", "the receipt is handed in". That is how forms, notices and clerks speak.',
        },
        {
          type: 'type',
          q: 'Now you. A notice says that the fee must be paid first — "It is necessary to pay the fee": ____ je platiti pristojbu.',
          answer: 'Potrebno',
          accept: ['Nužno'],
          hint: 'The commonest opening of an official instruction: a neuter form meaning "necessary", followed by je and an infinitive.',
          explanation:
            'Potrebno je platiti pristojbu. — potrebno je + an infinitive is the most common shape of an official instruction.',
        },
        {
          type: 'transform',
          q: 'Make it official: say the same thing impersonally, without addressing anybody.',
          from: 'Obrazac predajete na šalteru.',
          answer: 'Obrazac se predaje na šalteru.',
          accept: ['Na šalteru se predaje obrazac.', 'Obrazac se na šalteru predaje.'],
          hint: 'Add the small impersonal word in second place, and let the verb agree with the form instead of with "you".',
          explanation:
            'Obrazac se predaje na šalteru. — se + the third person singular: the form "is handed in", and nobody is named.',
        },
        {
          type: 'type',
          q: 'Emma also needs a certificate of residence: Trebam potvrdu o ____. (prebivalište)',
          answer: 'prebivalištu',
          hint: 'o takes the locative.',
          explanation:
            'Trebam potvrdu o prebivalištu. — o + the locative; a neuter noun in -e takes -u.',
        },
      ],
    },
    mix: [
      4,
      1,
      {
        type: 'match',
        q: 'Which document is it? Match each one to what it does.',
        pairs: [
          ['putovnica', 'You show it when you cross a border.'],
          ['vozačka dozvola', 'It allows you to drive a car.'],
          ['rodni list', 'It states when and where you were born.'],
          ['boravišna dozvola', 'It allows a foreigner to live in Croatia.'],
          ['osobna iskaznica', 'The photo card every adult citizen carries.'],
        ],
        explanation:
          'Five documents a counter may ask for. dozvola is a permit: one for driving (vozačka), one for staying in the country (boravišna).',
      },
      7,
      3,
      {
        type: 'sort',
        q: 'Does the sentence say WHO does it, or is it impersonal, in the official style?',
        groups: ['Somebody is named', 'Impersonal — nobody is named'],
        items: [
          { hr: 'Službenica traži putovnicu.', group: 0 },
          { hr: 'Traži se putovnica.', group: 1 },
          { hr: 'Ovdje se plaća gotovinom.', group: 1 },
          { hr: 'Plaćam karticom.', group: 0 },
          { hr: 'Treba čekati.', group: 1 },
          { hr: 'Čekamo već sat vremena.', group: 0 },
        ],
        explanation:
          'With se + the third person, or with treba + an infinitive, no doer is named. A personal verb form (traži, plaćam, čekamo) tells you who.',
      },
      6,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The application is submitted in person at the counter."',
        words: ['Zahtjev', 'se', 'podnosi', 'osobno', 'na', 'šalteru.'],
        accept: [
          'Zahtjev se osobno podnosi na šalteru.',
          'Zahtjev se podnosi na šalteru osobno.',
          'Zahtjev se na šalteru podnosi osobno.',
          'Na šalteru se zahtjev podnosi osobno.',
          'Osobno se zahtjev podnosi na šalteru.',
        ],
        explanation:
          'Zahtjev se podnosi osobno na šalteru. The small word se takes second place, right after the first word or phrase.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Potrebna', 'je', 'priložiti', 'dvije', 'fotografije.'],
        wrong: 0,
        answer: 'Potrebno',
        hint: 'Before je + an infinitive this word does not agree with any noun.',
        explanation:
          'Potrebno je priložiti dvije fotografije. — with an infinitive the form is always neuter; it does not agree with fotografije.',
      },
      0,
      5,
      {
        type: 'tf',
        q: 'In Croatia you can open a bank account and buy an apartment without an OIB.',
        answer: false,
        hint: 'Remember what the clerk told Emma about this number.',
        explanation:
          'False. The OIB, the eleven-digit personal identification number, is asked for in almost every official matter — a bank account and property included.',
      },
      8,
      {
        type: 'transform',
        q: 'Turn the personal instruction into the impersonal, official style with "se".',
        from: 'Putovnicu pokazujete na granici.',
        answer: 'Putovnica se pokazuje na granici.',
        accept: ['Na granici se pokazuje putovnica.', 'Putovnica se na granici pokazuje.'],
        hint: 'What was the object becomes the subject, so its case changes — and the verb now agrees with it.',
        explanation:
          'Putovnica se pokazuje na granici. — the passport is now the subject (nominative), and the verb is third person singular with se.',
      },
      2,
      {
        type: 'listen',
        audio: 'Uzmite broj i pričekajte, molim Vas. Danas je red jako dug.',
        q: 'What are you asked to do, and why?',
        options: [
          'Fill out a form, because the office is closing',
          'Take a number and wait, because the line is very long',
          'Come back tomorrow, because the clerk is away',
          'Go to another counter, because this one is closed',
        ],
        correct: 1,
        explanation:
          'Uzmite broj i pričekajte — take a number and wait. red je jako dug — the line is very long.',
      },
      {
        type: 'dictate',
        audio: 'Trebam li ispuniti obrazac?',
        answer: 'Trebam li ispuniti obrazac?',
        hint: 'Four words: "Do I need to fill out a form?"',
        explanation:
          'Trebam li ispuniti obrazac? — a form is ispuniti (or popuniti); napuniti is for filling a container.',
      },
    ],
  },

  // ── Renting an apartment ───────────────────────────────────────────────────
  'renting-flat': {
    text: {
      kind: 'dialogue',
      title: 'Oglas za stan',
      lines: [
        {
          who: 'Petar',
          hr: 'Dobar dan, gospođo Marić. Vidio sam Vaš oglas za dvosoban stan. Iznajmljuje li se još?',
          en: 'Good day, Mrs. Marić. I saw your ad for a two-room apartment. Is it still for rent?',
        },
        {
          who: 'Gđa Marić',
          hr: 'Dobar dan. Da, stan je još slobodan. Namješten je i ima pedeset kvadrata.',
          en: 'Good day. Yes, the apartment is still available. It is furnished and has fifty square meters.',
        },
        { who: 'Petar', hr: 'Odlično. Na kojem je katu?', en: 'Excellent. Which floor is it on?' },
        {
          who: 'Gđa Marić',
          hr: 'Na četvrtom, ali morate ići pješice. Zato je najamnina samo četiristo pedeset eura.',
          en: 'On the fourth, but you have to walk up. That is why the rent is only four hundred and fifty euros.',
        },
        {
          who: 'Petar',
          hr: 'A što je s režijama? Plaćaju li se posebno?',
          en: 'And what about the utilities? Are they paid separately?',
        },
        {
          who: 'Gđa Marić',
          hr: 'Da. Režije iznose oko osamdeset eura mjesečno, a zimi malo više zbog grijanja.',
          en: 'Yes. The utilities come to about eighty euros a month, and a little more in winter because of the heating.',
        },
        {
          who: 'Petar',
          hr: 'Razumijem. Koliki je polog i na koliko dugo je ugovor?',
          en: 'I see. How much is the deposit, and how long is the contract for?',
        },
        {
          who: 'Gđa Marić',
          hr: 'Polog je jedna najamnina, a ugovor o najmu potpisuje se na godinu dana.',
          en: 'The deposit is one month’s rent, and the rental contract is signed for one year.',
        },
        {
          who: 'Petar',
          hr: 'Imam mačku. Dopuštate li kućne ljubimce?',
          en: 'I have a cat. Do you allow pets?',
        },
        {
          who: 'Gđa Marić',
          hr: 'Mačke da, pse ne — susjedi ne vole buku. Dođite sutra u pet pogledati stan!',
          en: 'Cats yes, dogs no — the neighbors do not like noise. Come tomorrow at five to see the apartment!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which floor is the apartment on, how big is it, and which pets does Mrs. Marić allow?',
          options: [
            'Third floor, forty square meters; no pets at all',
            'Fourth floor, fifty square meters; cats but not dogs',
            'Fourth floor, forty-five square meters; dogs but not cats',
            'Fifth floor, fifty square meters; all pets',
          ],
          correct: 1,
          hint: 'You have to walk up quite a few stairs. Petar’s own pet is welcome.',
          explanation:
            'Stan je na četvrtom katu i ima pedeset kvadrata. Mačke da, pse ne — because the neighbors do not like noise.',
        },
        {
          q: 'Roughly how much will Petar pay to Mrs. Marić and for the bills in an ordinary summer month?',
          options: ['About 450 euros', 'About 370 euros', 'About 530 euros', 'About 900 euros'],
          correct: 2,
          hint: 'The price she names first is only the rent. Something else is paid separately, every month.',
          explanation:
            'The najamnina is 450 euros and the režije are paid separately, about 80 euros a month — so roughly 530. In winter the heating adds more.',
        },
        {
          type: 'type',
          q: 'Now you. Describe the apartment to a friend — the building has no elevator: Stan je na četvrtom katu, bez ____. (lift)',
          answer: 'lifta',
          hint: 'bez takes the genitive.',
          explanation: 'Stan je na četvrtom katu, bez lifta. — bez + the genitive: lift → lifta.',
        },
        {
          type: 'transform',
          q: 'You are the tenant. Turn the statement into the question you would ask the landlord.',
          from: 'Stan je blizu centra.',
          answer: 'Je li stan blizu centra?',
          accept: ['Je li stan blizu centra?', 'Je li blizu centra stan?'],
          hint: 'A yes/no question with biti opens with the verb, followed by li.',
          explanation:
            'Je li stan blizu centra? — a yes/no question with biti opens with the verb and li; the rest of the sentence stays as it was.',
        },
        {
          type: 'type',
          q: 'Mrs. Marić signs for one year. Another landlord wants two: Ugovor se potpisuje na dvije ____. (godina)',
          answer: 'godine',
          hint: 'After dvije the noun does not take the form it has after pet.',
          explanation:
            'Ugovor se potpisuje na dvije godine. — after 2, 3 and 4 the noun is in the genitive singular: dvije godine, but pet godina.',
        },
      ],
    },
    mix: [
      5,
      0,
      {
        type: 'match',
        q: 'What is it? Match each word to its description.',
        pairs: [
          ['najamnina', 'the money the owner gets every month'],
          ['režije', 'water, electricity and heating'],
          ['polog', 'money you get back when you move out'],
          ['garsonijera', 'a single room with a kitchenette'],
          ['vlasnik', 'the person the apartment belongs to'],
        ],
        explanation:
          'najamnina is the rent itself; režije — always plural — are the running costs; the polog comes back to you at the end if all is well.',
      },
      6,
      8,
      3,
      {
        type: 'sort',
        q: 'Who is speaking — the tenant, or the landlord?',
        groups: ['The tenant', 'The landlord'],
        items: [
          { hr: 'Tražim namješten stan blizu centra.', group: 0 },
          { hr: 'Stan iznajmljujem samo studentima.', group: 1 },
          { hr: 'Kada se mogu useliti?', group: 0 },
          { hr: 'Polog Vam vraćam kad se iselite.', group: 1 },
          { hr: 'Mogu li doći pogledati stan?', group: 0 },
          { hr: 'Ne dopuštam kućne ljubimce.', group: 1 },
        ],
        explanation:
          'The tenant looks for a place, asks to see it and moves in (useliti se). The landlord rents it out, sets the rules and returns the deposit when the tenant moves out (iseliti se).',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "The rent is paid by the fifth of the month."',
        words: ['Stanarina', 'se', 'plaća', 'do', 'petog', 'u', 'mjesecu.'],
        accept: [
          'Stanarina se do petog u mjesecu plaća.',
          'Do petog u mjesecu plaća se stanarina.',
          'Do petog u mjesecu stanarina se plaća.',
        ],
        explanation:
          'Stanarina se plaća do petog u mjesecu. Impersonal se in second place; do takes the genitive: do petog.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Stan', 'je', 'na', 'četvrti', 'katu.'],
        wrong: 3,
        answer: 'četvrtom',
        hint: 'After na, saying where something is takes the locative, and the ordinal agrees with katu.',
        explanation:
          'Stan je na četvrtom katu. — na + the locative, and the ordinal agrees with it: četvrtom katu.',
      },
      1,
      {
        type: 'tf',
        q: 'If an ad says "500 eura + režije", you will pay more than 500 euros a month.',
        answer: true,
        hint: 'What does the plus sign add to the rent?',
        explanation:
          'True. 500 euros is only the rent; water, electricity and heating come on top of it, and in winter they can add a lot.',
      },
      {
        type: 'transform',
        q: 'You are the landlord. Say the same thing the way it stands in an ad — impersonally, with "se".',
        from: 'Iznajmljujem stan.',
        answer: 'Iznajmljuje se stan.',
        accept: ['Stan se iznajmljuje.'],
        hint: 'The verb leaves the first person, and the apartment becomes its subject.',
        explanation:
          'Iznajmljuje se stan. — "an apartment is for rent": se + the third person singular, the standard opening of an ad.',
      },
      10,
      11,
      {
        type: 'listen',
        audio: 'Stan je na drugom katu, ima balkon, ali nema lifta.',
        q: 'What do you learn about the apartment?',
        options: [
          'Second floor, a balcony, no elevator',
          'Third floor, no balcony, an elevator',
          'Second floor, no balcony, no elevator',
          'Second floor, a balcony and an elevator',
        ],
        correct: 0,
        explanation:
          'na drugom katu — on the second floor; ima balkon — it has a balcony; nema lifta — there is no elevator (the genitive after nema).',
      },
      {
        type: 'dictate',
        audio: 'Koliko je najamnina?',
        answer: 'Koliko je najamnina?',
        hint: 'Three words: "How much is the rent?"',
        explanation: 'Koliko je najamnina? — the first question to ask at a viewing.',
      },
    ],
  },

  // ── Technology and the internet ────────────────────────────────────────────
  'technology-internet': {
    text: {
      kind: 'dialogue',
      title: 'Bakin novi mobitel',
      lines: [
        {
          who: 'Baka',
          hr: 'Jakove, kupila sam novi mobitel, ali ništa ne razumijem. Možeš li mi pomoći?',
          en: 'Jakov, I bought a new cell phone, but I do not understand a thing. Can you help me?',
        },
        {
          who: 'Jakov',
          hr: 'Naravno, bako. Prvo preuzmi aplikaciju za poruke.',
          en: 'Of course, Grandma. First download the messaging app.',
        },
        {
          who: 'Baka',
          hr: 'Preuzela sam je. Sada traži korisničko ime i lozinku.',
          en: 'I have downloaded it. Now it is asking for a username and a password.',
        },
        {
          who: 'Jakov',
          hr: 'Upiši svoje ime, a lozinku izaberi sama — ali je nemoj zaboraviti!',
          en: 'Type in your name, and choose the password yourself — but do not forget it!',
        },
        {
          who: 'Baka',
          hr: 'Dobro, prijavila sam se. A kako ću ti poslati fotografije s mora?',
          en: 'All right, I have logged in. And how will I send you the photos from the coast?',
        },
        {
          who: 'Jakov',
          hr: 'Otvori fotografiju i pritisni „podijeli”. Ako je internet spor, pričekaj malo.',
          en: 'Open a photo and press "share". If the internet is slow, wait a little.',
        },
        {
          who: 'Baka',
          hr: 'Evo, poslala sam ih. Jesi li ih dobio?',
          en: 'There, I have sent them. Did you get them?',
        },
        {
          who: 'Jakov',
          hr: 'Jesam, stigle su! Samo ne zaboravi punjač, baterija ti je sigurno pri kraju.',
          en: 'I did, they have arrived! Just do not forget the charger; your battery must be nearly dead.',
        },
        {
          who: 'Baka',
          hr: 'Ma kakvi, puna je. Nego, kako se mogu odjaviti? Ne želim da mi susjeda čita poruke!',
          en: 'Not at all, it is full. Anyway, how can I log out? I do not want my neighbor reading my messages!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did the app ask Grandma for, and what does she want to send Jakov?',
          options: [
            'Her phone number and address; a link to a website',
            'A username and a password; photos from the coast',
            'Her email and a photo of herself; a message for the neighbor',
            'A password only; a document',
          ],
          correct: 1,
          hint: 'Two things you type in to get into an account — and something she took pictures of on vacation.',
          explanation:
            'The app asks for korisničko ime i lozinku, and Grandma wants to send fotografije s mora.',
        },
        {
          q: 'Jakov says "preuzmi aplikaciju" and Grandma answers "Preuzela sam je." What is "je" in her sentence?',
          options: [
            'The verb "is"',
            'The short word for "her/it": it stands for aplikaciju, a feminine noun in the accusative',
            'The question particle',
            'The short word for "to him", meaning Jakov',
          ],
          correct: 1,
          hint: 'She already has her verb: sam. So this small word must be doing another job — replacing something Jakov has just named.',
          explanation:
            'je is the short accusative pronoun for a feminine noun: preuzela sam je = I have downloaded it (the app). The same je returns in "ali je nemoj zaboraviti" — the password.',
        },
        {
          type: 'type',
          q: 'Now you. Grandma has finished and leaves her account. She says: ____ sam se. (odjaviti se)',
          answer: 'Odjavila',
          hint: 'The past participle of the logging-out verb, agreeing with a woman.',
          explanation:
            'Odjavila sam se. — od- is the prefix "away from"; the participle is feminine because Grandma is speaking.',
        },
        {
          type: 'transform',
          q: 'Jakov speaks to Grandma as "ti". Give the same instruction to a customer you do not know — politely.',
          from: 'Preuzmi aplikaciju i prijavi se.',
          answer: 'Preuzmite aplikaciju i prijavite se.',
          accept: ['Preuzmite aplikaciju i prijavite se, molim Vas.'],
          hint: 'Both imperatives take the ending for Vi.',
          explanation:
            'Preuzmite aplikaciju i prijavite se. — the polite imperative adds -te: preuzmi → preuzmite, prijavi → prijavite.',
        },
        {
          type: 'type',
          q: 'Grandma wants to see a web page, so she asks Jakov: Možeš li mi poslati ____? (poveznica)',
          answer: 'poveznicu',
          hint: 'What you send is the direct object.',
          explanation:
            'Možeš li mi poslati poveznicu? — the thing sent is in the accusative: poveznica → poveznicu.',
        },
      ],
    },
    mix: [
      5,
      8,
      1,
      {
        type: 'match',
        q: 'Croatian’s own words. Match each to what it is.',
        pairs: [
          ['zaslon', 'the part of a phone you look at and touch'],
          ['tipkovnica', 'it has a key for every letter'],
          ['tražilica', 'it finds pages on the internet for you'],
          ['poveznica', 'you click it to open a page'],
          ['lozinka', 'a secret word only you should know'],
        ],
        explanation:
          'Each word is built from a Croatian root: tipka (a key), tražiti (to search), povezati (to connect). zaslon is literally a shield.',
      },
      0,
      {
        type: 'sort',
        q: 'Is it a device or object you can touch, or does it exist only on the screen?',
        groups: ['An object you can touch', 'Something on the screen'],
        items: [
          { hr: 'punjač', group: 0 },
          { hr: 'aplikacija', group: 1 },
          { hr: 'miš', group: 0 },
          { hr: 'datoteka', group: 1 },
          { hr: 'mobitel', group: 0 },
          { hr: 'preglednik', group: 1 },
          { hr: 'računalo', group: 0 },
          { hr: 'korisničko ime', group: 1 },
        ],
        explanation:
          'Hardware: punjač (charger), miš (mouse), mobitel, računalo. On the screen: aplikacija, datoteka (file), preglednik (browser), korisničko ime (username).',
      },
      4,
      {
        type: 'transform',
        q: 'You have done it. Now tell your friend to do the same (ti).',
        from: 'Obrisala sam stare poruke.',
        answer: 'Obriši stare poruke!',
        accept: ['Obriši i ti stare poruke!', 'I ti obriši stare poruke!'],
        hint: 'The imperative of this verb is built on its present stem — the one with š.',
        explanation:
          'Obriši stare poruke! — obrisati has the present obrišem, and the imperative follows the present stem: obriši.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Log out when you use someone else’s computer."',
        words: ['Odjavi', 'se', 'kad', 'koristiš', 'tuđe', 'računalo.'],
        accept: ['Kad koristiš tuđe računalo, odjavi se.'],
        explanation:
          'Odjavi se kad koristiš tuđe računalo. The verb is reflexive, and se follows the imperative.',
      },
      9,
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'baterija', 'je', 'prazan', 'već', 'od', 'jutra.'],
        wrong: 3,
        answer: 'prazna',
        hint: 'The word describes the battery, so it has to agree with it.',
        explanation:
          'Moja baterija je prazna već od jutra. — baterija is feminine, so the adjective is too, just like moja.',
      },
      6,
      {
        type: 'tf',
        q: '"Računalo" and "kompjuter" mean the same thing, but only one of them belongs in a formal email.',
        answer: true,
        hint: 'One is the native word, the other the international one.',
        explanation:
          'True. Both mean "computer". kompjuter is heard in speech; in anything written or official the word is računalo.',
      },
      3,
      7,
      {
        type: 'listen',
        audio: 'Nema signala, nazvat ću te kasnije.',
        q: 'Why will the speaker call later?',
        options: [
          'The battery is empty',
          'There is no signal',
          'He has forgotten the password',
          'The internet is slow',
        ],
        correct: 1,
        explanation:
          'Nema signala — there is no signal (the genitive after nema). nazvat ću te kasnije — I will call you later.',
      },
      {
        type: 'dictate',
        audio: 'Zaboravio sam lozinku.',
        answer: 'Zaboravio sam lozinku.',
        hint: 'Three words. A man says he has forgotten his password.',
        explanation:
          'Zaboravio sam lozinku. — the thing forgotten is the direct object, in the accusative.',
      },
    ],
  },

  // ── Nature and the environment ─────────────────────────────────────────────
  'environment-nature': {
    text: {
      kind: 'text',
      title: 'Razglednica s Mljeta',
      lines: [
        {
          hr: 'Draga Maro, pišem ti s Mljeta, najzelenijeg otoka na Jadranu.',
          en: 'Dear Mara, I am writing to you from Mljet, the greenest island in the Adriatic.',
        },
        {
          hr: 'Jučer smo kroz šumu pješačili do Velikog jezera u nacionalnom parku.',
          en: 'Yesterday we hiked through the forest to Veliko jezero, the Big Lake, in the national park.',
        },
        {
          hr: 'More je ovdje tako čisto da se s obale vide ribe.',
          en: 'The sea here is so clean that you can see the fish from the shore.',
        },
        {
          hr: 'Prva tri dana puhalo je jugo, pa je bilo toplo i vlažno, a mene je cijelo vrijeme boljela glava.',
          en: 'For the first three days the jugo was blowing, so it was warm and damp, and I had a headache the whole time.',
        },
        {
          hr: 'Sinoć je počela puhati bura i sve se promijenilo: nebo je vedro, ali trajekti ne voze.',
          en: 'Last night the bura started blowing and everything changed: the sky is clear, but the ferries are not running.',
        },
        {
          hr: 'Zato ostajemo dan duže — što mi uopće nije žao!',
          en: 'That is why we are staying a day longer — which I am not sorry about at all!',
        },
        {
          hr: 'Domaćin nam je rekao da je ovog ljeta bila velika suša i da moramo štedjeti vodu.',
          en: 'Our host told us that there was a severe drought this summer and that we have to save water.',
        },
        {
          hr: 'Ovdje svi paze na okoliš: plastične se boce skupljaju i brodom odvoze u Dubrovnik.',
          en: 'Everybody here takes care of the environment: plastic bottles are collected and taken to Dubrovnik by boat.',
        },
        {
          hr: 'Sutra idemo brodom u jednu skrivenu uvalu, a onda u špilju. Pozdrav s mora, Tena',
          en: 'Tomorrow we are going by boat to a hidden cove, and then to a cave. Greetings from the coast, Tena',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the postcard: which wind blew first and what did it do to Tena — and what did the second wind change?',
          options: [
            'First the bura, which made her cold; then the jugo brought rain',
            'First the jugo, which gave her a headache; then the bura cleared the sky and stopped the ferries',
            'First the maestral, which was pleasant; then the bura closed the national park',
            'First the jugo, which stopped the ferries; then the bura gave her a headache',
          ],
          correct: 1,
          hint: 'One wind is warm and damp and gets blamed for sore heads. The other is cold, clears the sky — and has consequences for travel.',
          explanation:
            'The jugo blew for three days — toplo i vlažno, and her head ached. Then the bura came: nebo je vedro, ali trajekti ne voze.',
        },
        {
          q: 'Tena writes "puhalo je jugo" but "počela je puhati bura". Why does one verb end in -lo and the other in -la?',
          options: [
            'Because the jugo blew longer than the bura',
            'Because the past participle agrees with its subject: jugo is neuter, bura is feminine',
            'Because puhati is irregular in the past tense',
            'Because the first sentence is impersonal and has no subject',
          ],
          correct: 1,
          hint: 'Each wind is the subject of its verb. Look at the last letter of each wind’s name.',
          explanation:
            'jugo is a neuter noun (puhalo je), bura a feminine one (počela je, puhala je). The participle agrees with the wind.',
        },
        {
          type: 'type',
          q: 'Now you. Give the reason with a noun: Trajekti ne voze zbog ____. (bura)',
          answer: 'bure',
          hint: 'zbog takes the genitive.',
          explanation: 'Trajekti ne voze zbog bure. — zbog + the genitive: bura → bure.',
        },
        {
          type: 'transform',
          q: 'One lake → all of them. Put the whole sentence into the plural.',
          from: 'Jezero je čisto i hladno.',
          answer: 'Jezera su čista i hladna.',
          hint: 'A neuter noun takes -a in the plural — and the verb and both adjectives follow it.',
          explanation:
            'Jezera su čista i hladna. — neuter plural: the noun and its adjectives end in -a, and the verb is su, not je.',
        },
        {
          type: 'transform',
          q: 'Say it impersonally, the way a sign would: drop "we" and use "se".',
          from: 'Na otoku odvajamo otpad.',
          answer: 'Na otoku se odvaja otpad.',
          accept: [
            'Otpad se odvaja na otoku.',
            'Na otoku se otpad odvaja.',
            'Otpad se na otoku odvaja.',
          ],
          hint: 'The small word takes second place, and the verb now agrees with the waste — one thing.',
          explanation:
            'Na otoku se odvaja otpad. — se + the third person singular, because otpad is singular: the waste "is separated".',
        },
      ],
    },
    mix: [
      4,
      1,
      {
        type: 'match',
        q: 'Land and weather. Match each word to its description.',
        pairs: [
          ['uvala', 'a small, sheltered piece of sea between two points of land'],
          ['špilja', 'a dark space inside a rock or under the ground'],
          ['slap', 'water falling from a height'],
          ['suša', 'a long time without any rain'],
          ['poplava', 'far too much water — in fields, streets and houses'],
        ],
        explanation:
          'uvala — a cove; špilja — a cave; slap — a waterfall; suša and poplava are opposites: a drought and a flood.',
      },
      5,
      2,
      {
        type: 'sort',
        q: 'Two winds with a reputation. Which one does each sentence describe?',
        groups: ['Bura', 'Jugo'],
        items: [
          { hr: 'Hladan je i suh vjetar.', group: 0 },
          { hr: 'Topao je i vlažan vjetar.', group: 1 },
          { hr: 'Puše s juga.', group: 1 },
          { hr: 'Ljudi kažu da ih zbog njega boli glava.', group: 1 },
          { hr: 'Zbog njega se zatvaraju ceste i mostovi.', group: 0 },
          { hr: 'Poslije njega nebo je vedro.', group: 0 },
        ],
        explanation:
          'The bura is cold, dry and violent: it closes roads and bridges and leaves a clear sky. The jugo is warm and damp, blows from the south, and is blamed for headaches.',
      },
      6,
      0,
      {
        type: 'order',
        q: 'Put the words in order: "When a strong bura blows, the ferries do not run."',
        words: ['Kad', 'puše', 'jaka', 'bura,', 'trajekti', 'ne', 'voze.'],
        accept: ['Trajekti ne voze kad puše jaka bura.', 'Kad jaka bura puše, trajekti ne voze.'],
        explanation:
          'Kad puše jaka bura, trajekti ne voze. The adjective agrees with the feminine noun: jaka bura.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Trajekt', 'vozi', 'iz', 'Splita', 'na', 'Braču.'],
        wrong: 5,
        answer: 'Brač',
        hint: 'From one place to another is a journey: the island is where the ferry is heading, not where it already is.',
        explanation:
          'Trajekt vozi iz Splita na Brač. — a destination takes na + the accusative. na Braču would mean something is already there.',
      },
      3,
      8,
      {
        type: 'tf',
        q: 'Nacionalni park je mjesto gdje se priroda štiti, pa se ondje smije bacati otpad.',
        answer: false,
        hint: 'The first half is right. Does the second half follow from it?',
        explanation:
          'False. In a national park nature is protected — which is exactly why you must not throw waste away there.',
      },
      9,
      {
        type: 'transform',
        q: 'Give the reason with "zbog" and a noun instead of the clause.',
        from: 'Katamaran ne vozi jer puše jak vjetar.',
        answer: 'Katamaran ne vozi zbog jakog vjetra.',
        accept: [
          'Zbog jakog vjetra katamaran ne vozi.',
          'Katamaran ne vozi zbog vjetra.',
          'Katamaran ne vozi zbog jakoga vjetra.',
          'Zbog jakoga vjetra katamaran ne vozi.',
          'Katamaran zbog jakog vjetra ne vozi.',
        ],
        hint: 'The verb disappears; the noun and its adjective go into the genitive.',
        explanation:
          'Katamaran ne vozi zbog jakog vjetra. — zbog + the genitive: jak vjetar → jakog vjetra.',
      },
      11,
      {
        type: 'listen',
        audio: 'Ove godine nije bilo kiše od svibnja do rujna, pa su rijeke gotovo suhe.',
        q: 'What is the speaker describing?',
        options: ['A flood', 'A storm', 'A drought', 'Pollution of the rivers'],
        correct: 2,
        explanation:
          'nije bilo kiše od svibnja do rujna — no rain from May to September; rijeke su gotovo suhe — the rivers are almost dry. That is a suša.',
      },
      {
        type: 'dictate',
        audio: 'More je ovdje čisto.',
        answer: 'More je ovdje čisto.',
        hint: 'Four words: "The sea is clean here."',
        explanation: 'More je ovdje čisto. — more is neuter, so the adjective ends in -o.',
      },
    ],
  },

  // ── Food and cooking ───────────────────────────────────────────────────────
  'food-cooking': {
    text: {
      kind: 'text',
      title: 'Bakine palačinke',
      lines: [
        {
          hr: 'Ovo je recept moje bake Kate za palačinke — najbolje na svijetu, kaže cijela obitelj.',
          en: 'This is my grandma Kata’s recipe for crêpes — the best in the world, the whole family says.',
        },
        {
          hr: 'Za dvanaest palačinki trebate: dva jaja, dvjesto pedeset grama brašna, pola litre mlijeka i malo soli.',
          en: 'For twelve crêpes you need: two eggs, two hundred and fifty grams of flour, half a liter of milk and a little salt.',
        },
        {
          hr: 'U velikoj zdjeli pomiješajte jaja i mlijeko.',
          en: 'In a large bowl, mix the eggs and the milk.',
        },
        {
          hr: 'Polako dodajte brašno i miješajte dok tijesto ne postane glatko.',
          en: 'Slowly add the flour and stir until the batter becomes smooth.',
        },
        {
          hr: 'Ostavite tijesto da odmara pola sata — baka kaže da je to najvažnije.',
          en: 'Leave the batter to rest for half an hour — Grandma says that this is the most important thing.',
        },
        {
          hr: 'Zagrijte tavu, stavite žličicu ulja i ulijte malo tijesta.',
          en: 'Heat the frying pan, put in a teaspoon of oil and pour in a little batter.',
        },
        {
          hr: 'Pecite palačinku minutu s jedne strane, a zatim je okrenite.',
          en: 'Cook the crêpe for a minute on one side, and then turn it over.',
        },
        {
          hr: 'Na gotove palačinke stavite pekmez od šljiva ili čokoladu.',
          en: 'Put plum jam or chocolate on the finished crêpes.',
        },
        {
          hr: 'Dobar tek! I ne zaboravite: prva palačinka nikad ne uspije.',
          en: 'Enjoy your meal! And do not forget: the first crêpe never turns out right.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the recipe: which four things go into the batter?',
          options: [
            'Eggs, flour, milk and a little salt',
            'Eggs, flour, water and sugar',
            'Flour, milk, butter and salt',
            'Eggs, milk, oil and sugar',
          ],
          correct: 0,
          hint: 'Two of them are mixed first in the bowl; one is added slowly; of the last there is only a little.',
          explanation:
            'dva jaja, dvjesto pedeset grama brašna, pola litre mlijeka i malo soli. The oil goes into the pan, not into the batter.',
        },
        {
          q: 'The list says "dvjesto pedeset grama brašna" and "pola litre mlijeka" — not "brašno" and "mlijeko". Why?',
          options: [
            'Because both nouns are in the plural',
            'Because they are the direct objects of "trebate"',
            'Because after a measure, the thing measured stands in the genitive',
            'Because neuter nouns always end in -a in a recipe',
          ],
          correct: 2,
          hint: 'Think of "a glass OF water", "a kilogram OF apples".',
          explanation:
            'A quantity is followed by the genitive: grama brašna, litre mlijeka, malo soli — the same rule as čaša vode.',
        },
        {
          type: 'type',
          q: 'Now you. You read the first step to a friend (ti): U zdjeli ____ jaja i mlijeko. (pomiješati)',
          answer: 'pomiješaj',
          hint: 'The recipe speaks to several readers, or politely to one. A friend gets the ti imperative of the same verb.',
          explanation:
            'U zdjeli pomiješaj jaja i mlijeko. — pomiješajte is the polite form; without -te it is the imperative for ti.',
        },
        {
          type: 'transform',
          q: 'A bigger batch: you need TWO liters, not one. Say it.',
          from: 'Trebamo litru mlijeka.',
          answer: 'Trebamo dvije litre mlijeka.',
          accept: ['Trebamo dvije litre mlijeka!', 'Mi trebamo dvije litre mlijeka.'],
          hint: 'The number has to be feminine, and after 2 the measure takes the genitive singular. What is measured does not change.',
          explanation:
            'Trebamo dvije litre mlijeka. — dvije for a feminine noun, then the genitive singular litre; mlijeka stays in the genitive after the measure.',
        },
        {
          type: 'transform',
          q: 'Grandma dictates the recipe to her grandson — as "ti". Change the polite forms.',
          from: 'Zagrijte tavu i ulijte malo tijesta.',
          answer: 'Zagrij tavu i ulij malo tijesta.',
          hint: 'Both verbs lose the ending that marks Vi.',
          explanation:
            'Zagrij tavu i ulij malo tijesta. — zagrijte → zagrij, ulijte → ulij: the ti imperative is the Vi form without -te.',
        },
      ],
    },
    mix: [
      6,
      1,
      {
        type: 'match',
        q: 'How is it done? Match each verb to where or with what you do it.',
        pairs: [
          ['pržiti', 'u dubokom, vrućem ulju'],
          ['peći', 'u pećnici, na dvjesto stupnjeva'],
          ['kuhati', 'u loncu, u vodi'],
          ['rezati', 'nožem'],
          ['miješati', 'žlicom, u zdjeli'],
        ],
        explanation:
          'pržiti — to fry in hot oil; peći — to bake or roast in the oven (and palačinke in a pan are also peći); kuhati — to boil in a pot; rezati — to cut with a knife; miješati — to stir with a spoon.',
      },
      7,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Every Sunday Grandma bakes štrukli for the whole family."',
        words: ['Baka', 'svake', 'nedjelje', 'peče', 'štrukle', 'za', 'cijelu', 'obitelj.'],
        accept: [
          'Svake nedjelje baka peče štrukle za cijelu obitelj.',
          'Baka peče štrukle za cijelu obitelj svake nedjelje.',
          'Baka peče štrukle svake nedjelje za cijelu obitelj.',
          'Baka svake nedjelje za cijelu obitelj peče štrukle.',
          'Svake nedjelje baka za cijelu obitelj peče štrukle.',
        ],
        explanation:
          'Baka svake nedjelje peče štrukle za cijelu obitelj. Štrukli that come out of the oven are baked: peći. (Boiled ones would be kuhati.)',
      },
      4,
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'zdjelu', 'stavite', 'dvjesto', 'grama', 'brašno', 'i', 'jedno', 'jaje.'],
        wrong: 5,
        answer: 'brašna',
        hint: 'It follows a measure.',
        explanation:
          'U zdjelu stavite dvjesto grama brašna i jedno jaje. — what is measured stands in the genitive: grama brašna.',
      },
      5,
      11,
      {
        type: 'sort',
        q: 'The country splits in two at the table. Where does each belong?',
        groups: ['The coast — Mediterranean', 'Inland — continental'],
        items: [
          { hr: 'crni rižot', group: 0 },
          { hr: 'kulen', group: 1 },
          { hr: 'pašticada', group: 0 },
          { hr: 'štrukli', group: 1 },
          { hr: 'riba i maslinovo ulje', group: 0 },
          { hr: 'svinjetina i paprika', group: 1 },
        ],
        explanation:
          'The coast cooks with olive oil and fish: crni rižot, pašticada. Inland it is pork, paprika and pastry: kulen from Slavonia, štrukli from Zagorje.',
      },
      8,
      {
        type: 'tf',
        q: 'In a recipe, "Kuhajte dvadeset minuta" and "Kuhajte za dvadeset minuta" mean the same thing.',
        answer: false,
        hint: 'One tells you how long; the other tells you when to start.',
        explanation:
          'False. Kuhajte dvadeset minuta — cook it for twenty minutes (a bare accusative for duration). With za it would mean "start cooking twenty minutes from now".',
      },
      9,
      {
        type: 'transform',
        q: 'You are telling a friend what you do. Now rewrite the step as a recipe prints it — addressed to "Vi".',
        from: 'Narežem luk i pržim ga na ulju.',
        answer: 'Narežite luk i pržite ga na ulju.',
        accept: ['Narežite luk i na ulju ga pržite.'],
        hint: 'Both verbs become imperatives with the polite ending. The first one keeps the ž of its present stem.',
        explanation:
          'Narežite luk i pržite ga na ulju. — a recipe is written in polite imperatives: narežem → narežite, pržim → pržite.',
      },
      {
        type: 'listen',
        audio: 'Uzmite još malo, molim Vas! — Ne mogu više, hvala, sve je bilo odlično.',
        q: 'What is happening at the table?',
        options: [
          'The guest is asking for more',
          'The host offers more, and the guest politely declines',
          'The guest says the food was too salty',
          'The host says there is nothing left',
        ],
        correct: 1,
        explanation:
          'Uzmite još malo — "have a little more", says the host. Ne mogu više, hvala — "I can’t manage any more, thank you": a polite no, with praise.',
      },
      {
        type: 'dictate',
        audio: 'Ovo je recept moje bake.',
        answer: 'Ovo je recept moje bake.',
        hint: 'Five words: "This is my grandmother’s recipe."',
        explanation:
          'Ovo je recept moje bake. — whose recipe? The owner stands in the genitive: moje bake.',
      },
    ],
  },
};
