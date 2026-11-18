// ─── C1 lessons in class order — Units 1–2 (lessons 1–10) ────────────────────
// Same shape and rules as the A1, A2, B1 and B2 class files:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// C1 register: educated, idiomatic Croatian in long, well-built sentences.
// Vi / Vas / Vam / Vaš take a capital when ONE person is addressed politely.
// Existing typed items whose answer is a short clitic pair come before anything
// that prints that pair. Where Croatian has two standard placements (the clitic
// after the first stressed word or after the whole first phrase) both are
// accepted and neither is marked wrong; a "wrong" sentence is always a clear
// violation. The other nine lessons of this block are added below as written.

export const CLASS_C1_U01_02 = {
  // ══ UNIT 1 ═════════════════════════════════════════════════════════════════

  // ── Clitic ordering mastery ────────────────────────────────────────────────
  'clitics-advanced': {
    text: {
      kind: 'dialogue',
      title: 'Rukopis na uredničkom stolu',
      lines: [
        {
          who: 'Urednica',
          hr: 'Gospodine Mariću, jeste li mi već poslali treće poglavlje ili ga još uvijek dotjerujete?',
          en: 'Mr. Marić, have you already sent me the third chapter, or are you still polishing it?',
        },
        {
          who: 'Autor',
          hr: 'Poslao sam Vam ga još u ponedjeljak, ali bojim se da Vam se neće svidjeti: što sam ga dulje čitao, to mi se činilo slabijim.',
          en: 'I sent it to you back on Monday, but I am afraid you will not like it: the longer I read it, the weaker it seemed to me.',
        },
        {
          who: 'Urednica',
          hr: 'Naprotiv, pročitala sam ga u jednom dahu. Jedino bih Vas zamolila da mi objasnite zašto ste se odrekli prizora na kolodvoru: taj mi se prizor u sažetku činio ključnim.',
          en: 'On the contrary, I read it in one sitting. I would only ask you to explain to me why you gave up the scene at the train station: in the synopsis that scene seemed crucial to me.',
        },
        {
          who: 'Autor',
          hr: 'Nisam ga se odrekao laka srca. Lektorica mi je, međutim, rekla da ga se čitatelj poslije ne bi ni sjećao, pa sam ga izbacio.',
          en: 'I did not give it up lightly. The copy editor told me, however, that the reader would not even remember it afterward, so I cut it.',
        },
        {
          who: 'Urednica',
          hr: 'Je li Vam to rekla ili Vam je to napisala? Pitam zato što mi se čini da ste je krivo razumjeli.',
          en: 'Did she say that to you, or did she write it to you? I ask because it seems to me that you misunderstood her.',
        },
        {
          who: 'Autor',
          hr: 'Napisala mi je doslovno: „Prizor je predug; skratila bih ga.” Priznajem da sam se uvrijedio i da ga nisam htio kratiti, nego sam ga radije izbrisao.',
          en: 'She wrote to me, word for word: “The scene is too long; I would shorten it.” I admit that I took offense and did not want to shorten it, so I deleted it instead.',
        },
        {
          who: 'Urednica',
          hr: 'Dakle, nije Vam ga savjetovala izbaciti, nego skratiti. Biste li mi ga mogli vratiti u tekst do petka?',
          en: 'So she did not advise you to cut it, but to shorten it. Could you put it back into the text for me by Friday?',
        },
        {
          who: 'Autor',
          hr: 'Vratit ću Vam ga, dakako, ali skraćenog. Bojim se samo da ću ga, kad ga jednom počnem kratiti, napisati iznova.',
          en: 'I will put it back for you, of course, but shortened. I am only afraid that, once I start shortening it, I will write it all over again.',
        },
        {
          who: 'Urednica',
          hr: 'Ni to mi ne bi smetalo. Da ste mi se javili prije nego što ste ga izbrisali, sve bismo to riješili jednim telefonskim razgovorom.',
          en: 'That would not bother me either. If you had gotten in touch with me before you deleted it, we would have settled all of this with a single phone call.',
        },
        {
          who: 'Autor',
          hr: 'Imate pravo. Drugi put ću Vam se javiti prije nego što išta izbrišem — obećavam Vam.',
          en: 'You are right. Next time I will get in touch with you before I delete anything — I promise you.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what had the copy editor actually recommended, and what did the author do?',
          options: [
            'She recommended cutting the scene, and he reluctantly obeyed',
            'She recommended shortening the scene; offended, he deleted it altogether',
            'She recommended moving the scene to the synopsis, and he refused',
            'She recommended rewriting the whole chapter, and he did so by Monday',
          ],
          correct: 1,
          hint: 'Recall her one sentence that the author quotes word for word — and the feeling he admits to.',
          explanation:
            'Her note said only that the scene was too long and that she would shorten it (skratila bih ga). The author took offense (uvrijedio sam se) and, rather than shorten it, deleted it.',
        },
        {
          q: 'The author says "Nisam ga se odrekao laka srca." Why do "ga" and "se" stand right after "Nisam", and in that order?',
          options: [
            'Because nisam is itself a clitic that opens the cluster, exactly like sam',
            'Because after a negated verb the short words may come in any order',
            'Because nisam carries its own stress and can host the cluster, in which a genitive pronoun comes before se',
            'Because ga is a dative here, and the dative always comes first',
          ],
          correct: 2,
          hint: 'Compare sam and nisam: which of the two could you say alone, as a one-word answer?',
          explanation:
            'Clitics lean on the first stressed word of their clause. sam has no stress of its own, but nisam does, so it can open the sentence and carry the cluster. odreći se governs the genitive (ga = prizora), and the genitive/accusative slot comes before se.',
        },
        {
          type: 'type',
          q: 'Now you. The author is worried about the copy editor: Bojim se da ____ zamjerio. (zamjeriti se nekome — to get on somebody’s bad side; you need the auxiliary for "I", "her" in the right case, and the reflexive)',
          answer: 'sam joj se',
          hint: 'The first-person auxiliary opens the cluster and the reflexive closes it; the person stands between them, in the case that answers "komu?".',
          explanation:
            'Bojim se da sam joj se zamjerio. — in a subordinate clause the whole cluster follows the conjunction da at once: auxiliary sam, dative joj, then se.',
        },
        {
          type: 'transform',
          q: 'The editor does not believe him. Embed his sentence in hers: begin with "Ne vjerujem da…" and keep every other word.',
          from: 'Odrekao ga se laka srca.',
          answer: 'Ne vjerujem da ga se odrekao laka srca.',
          accept: [
            'Ne vjerujem da ga se laka srca odrekao.',
            'Ne vjerujem da ga se on odrekao laka srca.',
          ],
          hint: 'In the main clause the short words lean on the participle. Inside the new clause something else is now the first word — and they move to it.',
          explanation:
            'Ne vjerujem da ga se odrekao laka srca. — the clitics always look for the first stressed element of THEIR OWN clause; in a subordinate clause they follow the conjunction directly, so the participle loses them. The third-person je is still left out after se.',
        },
        {
          type: 'transform',
          q: 'Replace "lektoricu" with a short pronoun. Careful: the usual short form would put two identical syllables side by side.',
          from: 'Autor je krivo razumio lektoricu.',
          answer: 'Autor ju je krivo razumio.',
          accept: [
            'Krivo ju je razumio.',
            'Autor ju je razumio krivo.',
            'Krivo ju je autor razumio.',
            'Krivo ju je razumio autor.',
            'On ju je krivo razumio.',
          ],
          hint: 'The feminine accusative clitic has a second form, which the standard language requires when it would land next to the third-person auxiliary. The pronoun still comes before that auxiliary.',
          explanation:
            'Autor ju je krivo razumio. — the short accusative "her" is normally je (da ste je krivo razumjeli), but before the auxiliary je the standard language uses ju, and the auxiliary je closes the cluster as always.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'tf',
        q: '"U našoj se redakciji rukopisi čitaju dvaput." and "U našoj redakciji se rukopisi čitaju dvaput." are both possible sentences; the difference between them is one of style.',
        answer: true,
        hint: 'Ask yourself what may count as the first stressed unit of a clause: only a single word, or a whole phrase as well?',
        explanation:
          'True. The cluster may lean on the first stressed word (U našoj se redakciji — typical of careful, written style) or follow the whole first phrase (U našoj redakciji se — common in everyday speech). Neither breaks the second-position rule.',
      },
      10,
      {
        type: 'sort',
        q: 'Where has the clitic cluster landed?',
        groups: [
          'Inside the opening phrase, splitting it',
          'After the whole opening phrase',
          'After a linking word (da, kad, ako…)',
        ],
        items: [
          { hr: 'Moj mi se stari profesor jučer javio.', group: 0 },
          { hr: 'Moj stari profesor mi se jučer javio.', group: 1 },
          { hr: 'Ne znam kad će mi se javiti.', group: 2 },
          { hr: 'Taj ću rukopis pročitati večeras.', group: 0 },
          { hr: 'Taj rukopis ću pročitati večeras.', group: 1 },
          { hr: 'Ako ga pronađeš, odmah nazovi urednicu.', group: 2 },
        ],
        explanation:
          'Clitics lean on the first stressed element of their clause. That can be the first word of a phrase (Moj mi se stari profesor, Taj ću rukopis), the whole phrase (Moj stari profesor mi se, Taj rukopis ću), or — in a subordinate clause — the word that opens it (kad će mi se, Ako ga).',
      },
      8,
      {
        type: 'match',
        q: 'Who introduced whom to whom? Match each sentence to its meaning.',
        pairs: [
          ['Predstavio sam mu je.', 'I introduced her to him.'],
          ['Predstavio sam joj ga.', 'I introduced him to her.'],
          ['Predstavila mu ih je.', 'She introduced them to him.'],
          ['Predstavio im ga je.', 'He introduced him to them.'],
          ['Predstavila im se.', 'She introduced herself to them.'],
        ],
        explanation:
          'The dative clitic (mu, joj, im) is the person who meets somebody; the accusative (je, ga, ih) is the person introduced. In "sam mu je" the last word is the pronoun "her", not the auxiliary. In "Predstavila im se" the auxiliary je is left out after se.',
      },
      9,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "I am afraid he would not like it."',
        words: ['Bojim', 'se', 'da', 'mu', 'se', 'ne', 'bi', 'svidjelo.'],
        explanation:
          'Bojim se da mu se ne bi svidjelo. — the pronouns mu se follow da at once, but the conditional bi stays behind the negation: ne and the auxiliary form one stressed unit (ne bi, like nisam and neću), so a negated clause legitimately divides the cluster. No other order of these words is standard.',
      },
      {
        type: 'fix',
        q: 'One word is not standard Croatian. Tap it. ("I would gladly show it to you.")',
        words: ['Rado', 'bi', 'Vam', 'ga', 'pokazao.'],
        wrong: 1,
        answer: 'bih',
        hint: 'The conditional auxiliary has its own form for each person. Whose wish is this?',
        explanation:
          'Rado bih Vam ga pokazao. — the conditional clitics are bih (ja), bi (ti), bi (on, ona), bismo, biste, bi (oni). "Ja bi" is very common in everyday speech, but the standard first-person form is bih; it opens the cluster, before the dative and the accusative.',
      },
      7,
      {
        type: 'transform',
        q: 'Put the sentence into the past and replace "tog prizora" with a short pronoun.',
        from: 'Autor se sjeća tog prizora.',
        answer: 'Autor ga se sjećao.',
        accept: [
          'Sjećao ga se.',
          'Sjećao ga se autor.',
          'On ga se sjećao.',
          'Autor ga se sjetio.',
          'Sjetio ga se.',
          'Sjetio ga se autor.',
          'On ga se sjetio.',
        ],
        hint: 'Two things happen at once: the object of this verb is not in the accusative, and the third-person auxiliary has a habit when it would land right behind the reflexive.',
        explanation:
          'Autor ga se sjećao. — sjećati se governs the genitive (ga), which takes the slot before se. The third-person je would come last in the cluster, but straight after se the standard language leaves it out.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Da ste mi ga poslali tjedan dana ranije, stigla bih Vam ga vratiti s primjedbama prije nego što ode u tisak.',
        q: 'What is the speaker saying?',
        options: [
          'She returned it with her comments a week ago',
          'She will send it to the printer a week early',
          'It reached her too late for her to return it with comments before it goes to print',
          'She is asking to have it sent back to her with comments',
        ],
        correct: 2,
        explanation:
          'Da ste mi ga poslali… stigla bih Vam ga vratiti — an unreal condition: if you had sent it to me a week earlier, I would have managed to return it to you with comments (s primjedbama) before it goes to print (u tisak). Each clause has its own cluster: ste mi ga after da, bih Vam ga after stigla.',
      },
      {
        type: 'dictate',
        audio: 'Nisam ga se htio odreći.',
        answer: 'Nisam ga se htio odreći.',
        hint: 'Five words: "I did not want to give it up." (a man speaking)',
        explanation:
          'Nisam ga se htio odreći. — ga and se belong to the infinitive odreći, yet they do not stay next to it: they climb to second position in the sentence, behind the stressed Nisam.',
      },
    ],
  },

  // ── i-nouns, mati and kći ──────────────────────────────────────────────────
  // The dialogue uses kćer freely, so the existing typed item that asks for it
  // (index 10) is left out; the other four typed items are kept and their -ju
  // forms appear nowhere before them.
  'i-nouns-mati-kci': {
    text: {
      kind: 'dialogue',
      title: 'Seminar o staroj noveli',
      lines: [
        {
          who: 'Profesorica',
          hr: 'Kolega Babiću, prije nego što prijeđemo na stil, recite nam ukratko o čemu zapravo govori novela koju ste čitali za danas.',
          en: 'Mr. Babić, before we move on to style, tell us briefly what the novella you read for today is actually about.',
        },
        {
          who: 'Luka',
          hr: 'O udovici koja je cijelo imanje namijenila mlađoj kćeri, premda ju je u starosti njegovala starija. Mati u toj noveli nije zla, nego slijepa: ne vidi koja joj je kći doista odana.',
          en: 'About a widow who intended her entire estate for her younger daughter, although it was the elder one who cared for her in old age. The mother in the novella is not wicked but blind: she does not see which daughter is truly devoted to her.',
        },
        {
          who: 'Profesorica',
          hr: 'Dobro. A jeste li zapazili da pripovjedač nijednom ne kaže „majka”, nego uvijek „mati”, i da tu riječ sklanja onako kako je danas rijetko tko sklanja?',
          en: 'Good. And did you notice that the narrator never once says “majka” but always “mati,” and declines that word in a way hardly anyone declines it today?',
        },
        {
          who: 'Luka',
          hr: 'Jesam. Starija kći, primjerice, ne odlazi „od matere” ni danju ni u gluho doba, a mlađa „materi” piše samo kad joj ponestane novca.',
          en: 'I did. The elder daughter, for example, does not leave “her mother’s side” by day or in the dead of night, while the younger writes “to her mother” only when she runs out of money.',
        },
        {
          who: 'Ema',
          hr: 'Meni je zanimljivije što se događa s riječju „kći”. U naslovu je nominativ, ali već u prvoj rečenici čitamo da udovica „ima dvije kćeri”, a malo dalje da „mlađu kćer nije vidjela tri godine”.',
          en: 'I find what happens to the word “kći” more interesting. In the title it is a nominative, but in the very first sentence we read that the widow “has two daughters,” and a little further on that she “has not seen her younger daughter for three years.”',
        },
        {
          who: 'Profesorica',
          hr: 'Upravo tako: nominativ glasi kći, a svi se ostali padeži tvore od osnove kćer-. Zato je rečenica „Vidio sam njezinu kći”, koju danas često čujemo, s gledišta norme pogrešna.',
          en: 'Exactly: the nominative is kći, and all the other cases are formed from the stem kćer-. That is why the sentence “Vidio sam njezinu kći,” which we often hear today, is wrong from the standpoint of the norm.',
        },
        {
          who: 'Luka',
          hr: 'A obrnuto? Moja baka kaže „to mi je kćer”, i nikomu u obitelji to ne zvuči pogrešno.',
          en: 'And the other way around? My grandmother says “to mi je kćer,” and it does not sound wrong to anyone in the family.',
        },
        {
          who: 'Profesorica',
          hr: 'U razgovoru je to posve obično, ali se u standardnom jeziku akuzativni oblik ne upotrebljava umjesto nominativa. Vaša baka, dakle, govori kao većina ljudi, a pripovjedač piše kao gramatika.',
          en: 'In conversation that is perfectly ordinary, but in the standard language the accusative form is not used in place of the nominative. So your grandmother speaks like most people, and the narrator writes like a grammar book.',
        },
        {
          who: 'Ema',
          hr: 'Na kraju novele ipak pobjeđuje osjećaj, a ne gramatika: udovica na samrti doziva stariju kćer i priznaje joj da ju je cijeli život gledala tuđim očima.',
          en: 'At the end of the novella, though, feeling wins out over grammar: on her deathbed the widow calls for her elder daughter and admits that all her life she looked at her through other people’s eyes.',
        },
        {
          who: 'Profesorica',
          hr: 'Lijepo rečeno. Za idući tjedan napišite kratak osvrt i pripazite da vam se u njemu mati i kći sklanjaju jednako dosljedno kao u noveli.',
          en: 'Nicely put. For next week, write a short review, and take care that in it mati and kći are declined as consistently as in the novella.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who was to get the estate, and who had actually looked after the widow?',
          options: [
            'The elder daughter was to get it, although the younger had looked after her',
            'Both daughters were to share it, although neither had looked after her',
            'The younger daughter was to get it, although the elder had looked after her',
            'Neither daughter was to get it, because both had neglected her',
          ],
          correct: 2,
          hint: 'Recall Luka’s summary — and which daughter the widow calls for at the very end.',
          explanation:
            'The widow intended the whole estate for the younger daughter (mlađoj kćeri), although it was the elder who cared for her in old age. Only on her deathbed does she admit that she had looked at the elder one “through other people’s eyes.”',
        },
        {
          q: 'Luka quotes: the younger daughter "materi piše samo kad joj ponestane novca". Why "materi"?',
          options: [
            'It is the vocative: the daughter addresses her mother in the letter',
            'pisati komu takes the dative, and outside the nominative mati builds its cases on the stem mater-',
            'It is the genitive, required by the negative sense of "samo"',
            'It is the nominative plural: she writes to both parents',
          ],
          correct: 1,
          hint: 'Ask the question the verb asks: piše — komu? Then look at what the word is built on.',
          explanation:
            'pisati komu — the dative. Mati keeps its short form only in the nominative and the vocative; the other cases come from the stem mater-: genitive matere (od matere), dative and locative materi.',
        },
        {
          type: 'type',
          q: 'Now you, in the narrator’s style. Mlađa se kći cijeli život svađala s ____. (mati — in the case that s "with" requires)',
          answer: 'materom',
          hint: 'Not a -ju form: on its longer stem this noun takes the ending that majka itself would take after s.',
          explanation:
            's materom — the instrumental. mati does not take the -ju ending that i-nouns can have: on the stem mater- it takes -om, exactly where majka has majkom.',
        },
        {
          type: 'transform',
          q: 'Rewrite the sentence the way the narrator would: replace "majku" with the right form of "mati".',
          from: 'Starija kći nikad nije ostavila svoju majku.',
          answer: 'Starija kći nikad nije ostavila svoju mater.',
          accept: ['Starija kći nikada nije ostavila svoju mater.'],
          hint: 'ostaviti takes a direct object — and for mati, as for kći, that case does not look like the nominative and has no vowel ending.',
          explanation:
            'svoju mater — the accusative of mati is mater, just as the accusative of kći is kćer. The feminine svoju shows the case; the noun itself ends in a consonant.',
        },
        {
          type: 'type',
          q: 'Na samrti je udovica htjela govoriti pred objema ____. (kći — both daughters were to be in the room)',
          answer: 'kćerima',
          hint: 'pred takes the instrumental; in the plural the dative, locative and instrumental share one ending, added to the longer stem.',
          explanation:
            'pred objema kćerima — the plural is built on kćer- like every case but the nominative singular: kćeri, kćeri, kćerima. The numeral objema already shows the case.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"Putovala je sa svojom kćeri." and "Putovala je sa svojom kćerju." are both standard Croatian; the second is simply much rarer.',
        answer: true,
        hint: 'Think of how other nouns of this type behave after s: do they have one ending in that case, or two?',
        explanation:
          'True. Like other i-nouns, kći has two instrumental endings: kćeri, which is the usual one, and kćerju, which is rare and bookish. Neither is an error.',
      },
      8,
      {
        type: 'sort',
        q: 'Both groups end in a consonant. Which nouns are feminine and which masculine?',
        groups: ['Feminine (moja …), declined like noć', 'Masculine (moj …)'],
        items: [
          { hr: 'obitelj', group: 0 },
          { hr: 'prijatelj', group: 1 },
          { hr: 'sol', group: 0 },
          { hr: 'stol', group: 1 },
          { hr: 'pamet', group: 0 },
          { hr: 'ponos', group: 1 },
          { hr: 'zapovijed', group: 0 },
          { hr: 'odgovor', group: 1 },
        ],
        explanation:
          'The ending alone does not tell you: obitelj and prijatelj, sol and stol look alike. obitelj, sol, pamet and zapovijed are feminine i-nouns (moja obitelj, bez soli, zdrava pamet, stroga zapovijed); prijatelj, stol, ponos and odgovor are masculine (moj prijatelj, bez stola).',
      },
      11,
      {
        type: 'match',
        q: 'Match each sentence to the case of the word for "mother".',
        pairs: [
          ['Mati još spava.', 'nominative — the subject'],
          ['Kuća bez matere pusta je.', 'genitive — after bez'],
          ['Sve je ostavila materi.', 'dative — to whom?'],
          ['Kći je zagrlila mater.', 'accusative — the direct object'],
          ['Oprosti mi, mati!', 'vocative — direct address'],
        ],
        explanation:
          'mati (nominative and vocative), matere, materi, mater, materom. Only the nominative and the vocative keep the short form; every other case stands on the stem mater-.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is not a Croatian form. Tap it. ("They threatened him with death.")',
        words: ['Prijetili', 'su', 'mu', 'smrtju.'],
        wrong: 3,
        answer: 'smrću',
        hint: 'The j of the ending never simply sits beside t: the two sounds merge into one.',
        explanation:
          'Prijetili su mu smrću. — in the -ju instrumental the final consonant of the stem is jotated: t + j gives ć (smrt → smrću, pamet → pameću). A form "smrtju" does not exist.',
      },
      12,
      {
        type: 'order',
        q: 'Put the words in order: "He did not tell me that he has a grown-up daughter."',
        words: ['Nije', 'mi', 'rekao', 'da', 'ima', 'odraslu', 'kćer.'],
        accept: ['Da ima odraslu kćer, nije mi rekao.'],
        explanation:
          'Nije mi rekao da ima odraslu kćer. — ima takes the accusative, so the noun appears as kćer, with the feminine adjective odraslu. The da-clause may also come first: Da ima odraslu kćer, nije mi rekao.',
      },
      {
        type: 'transform',
        q: 'He has more than one daughter. Put the subject into the plural and change everything that must follow it.',
        from: 'Kći mu je pisala svaki tjedan.',
        answer: 'Kćeri su mu pisale svaki tjedan.',
        accept: [
          'Kćeri su mu svaki tjedan pisale.',
          'Svaki tjedan pisale su mu kćeri.',
          'Svaki su mu tjedan pisale kćeri.',
          'Svaki tjedan su mu pisale kćeri.',
          'Svaki su mu tjedan kćeri pisale.',
          'Svaki tjedan su mu kćeri pisale.',
          'Svaki tjedan kćeri su mu pisale.',
        ],
        hint: 'The plural comes from the longer stem. Then the auxiliary and the participle change — and the auxiliary that replaces je does not stand where je stood.',
        explanation:
          'Kćeri su mu pisale svaki tjedan. — the plural nominative is kćeri, the participle is feminine plural (pisale), and the cluster is reordered: je comes last in a cluster (mu je), but su comes first (su mu).',
      },
      {
        type: 'listen',
        audio:
          'Otkako joj se kći odselila u Kanadu, mati s njom razgovara samo nedjeljom, i to jedva desetak minuta.',
        q: 'What is the speaker saying?',
        options: [
          'The mother moved to Canada and now calls her daughter every day',
          'Since the daughter moved to Canada, the two talk only on Sundays, for barely ten minutes',
          'The daughter flies home from Canada every Sunday',
          'Mother and daughter have not spoken for about ten years',
        ],
        correct: 1,
        explanation:
          'Otkako joj se kći odselila — since her daughter moved away (odseliti se; after se the auxiliary je is left out); mati s njom razgovara samo nedjeljom — the mother talks with her only on Sundays; jedva desetak minuta — barely ten minutes or so. Both nouns are subjects, so both are in the nominative: kći, mati.',
      },
      {
        type: 'dictate',
        audio: 'Kći je materi pisala svake nedjelje.',
        answer: 'Kći je materi pisala svake nedjelje.',
        hint: 'Six words: "The daughter wrote to her mother every Sunday." (with the literary word for mother)',
        explanation:
          'Kći je materi pisala svake nedjelje. — kći is the subject, in the nominative; materi is the dative of mati (pisati komu).',
      },
    ],
  },

  // ── The accusative of measure and manner ───────────────────────────────────
  // Existing typed item 11 (kilometra) is not used: the text already asks the
  // learner to produce a form of kilometar.
  'accusative-measure-manner': {
    text: {
      kind: 'dialogue',
      title: 'Razgovor na cilju maratona',
      lines: [
        {
          who: 'Novinarka',
          hr: 'Gospođo Perić, upravo ste istrčali svoj prvi maraton. Koliko ste se dugo pripremali za ova četrdeset i dva kilometra?',
          en: 'Ms. Perić, you have just run your first marathon. How long did you train for these forty-two kilometers?',
        },
        {
          who: 'Trkačica',
          hr: 'Punu godinu dana. Prvih sam mjeseci trčala tek dvadesetak minuta dnevno, a posljednja tri mjeseca svaki drugi dan po sat i pol.',
          en: 'A full year. For the first few months I ran only twenty minutes or so a day, and for the last three months an hour and a half every other day.',
        },
        {
          who: 'Novinarka',
          hr: 'Čula sam da ste čitavu zimu trenirali prije posla, u pet ujutro. Je li Vam ikad došlo da odustanete?',
          en: 'I heard that you trained before work all winter, at five in the morning. Did you ever feel like giving up?',
        },
        {
          who: 'Trkačica',
          hr: 'Bezbroj puta. Jedno sam jutro u siječnju stajala pred vratima deset minuta i naglas se pitala što mi to treba, ali sam na kraju ipak otrčala svojih osam kilometara.',
          en: 'Countless times. One morning in January I stood at the door for ten minutes, asking myself out loud what I needed this for, but in the end I ran my eight kilometers anyway.',
        },
        {
          who: 'Novinarka',
          hr: 'A današnja utrka? Na tridesetom ste kilometru, koliko sam vidjela, hodali nekoliko stotina metara.',
          en: 'And today’s race? At the thirtieth kilometer, from what I saw, you walked several hundred meters.',
        },
        {
          who: 'Trkačica',
          hr: 'Jesam, noge su mi bile teške sto kila. Dvije sam minute hodala, popila na dušak čašu vode i onda nastavila punom parom, kao da se ništa nije dogodilo.',
          en: 'I did; my legs weighed a hundred kilos. I walked for two minutes, drank a glass of water in one gulp, and then carried on at full steam, as if nothing had happened.',
        },
        {
          who: 'Novinarka',
          hr: 'Stazu ste istrčali za četiri sata i dvanaest minuta. Jeste li zadovoljni vremenom?',
          en: 'You ran the course in four hours and twelve minutes. Are you satisfied with your time?',
        },
        {
          who: 'Trkačica',
          hr: 'Više nego zadovoljna. Trener mi je cijelo vrijeme govorio da prvi maraton treba trčati glavom, a ne srcem, i na sreću sam ga poslušala.',
          en: 'More than satisfied. My coach kept telling me the whole time that you should run your first marathon with your head, not your heart, and luckily I listened to him.',
        },
        {
          who: 'Novinarka',
          hr: 'Startnina je, čujem, koštala pedeset eura, a tenisice barem trostruko više. Isplati li se sve to?',
          en: 'The entry fee, I hear, cost fifty euros, and the running shoes at least three times as much. Is it all worth it?',
        },
        {
          who: 'Trkačica',
          hr: 'Isplati se svaki cent. Sutra ću vjerojatno cijeli dan prespavati, ali već za mjesec dana trčim polumaraton u Rijeci — i to, obećavam, bez ijednog koraka hodanja.',
          en: 'It is worth every cent. Tomorrow I will probably sleep the whole day away, but in just a month I am running a half-marathon in Rijeka — and, I promise, without a single step of walking.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the interview: what happened at the thirtieth kilometer?',
          options: [
            'She dropped out of the race for a quarter of an hour',
            'She walked for two minutes, drank a glass of water, and went on running',
            'Her coach made her stop and rest for ten minutes',
            'She ran the fastest stretch of her whole race',
          ],
          correct: 1,
          hint: 'Her legs felt as if they weighed a hundred kilos — what did she do, and for how long?',
          explanation:
            'Dvije sam minute hodala, popila na dušak čašu vode i onda nastavila punom parom — she walked for two minutes, drank a glass of water in one gulp, and carried on at full steam.',
        },
        {
          q: 'The runner says "Punu godinu dana" without a preposition, but "za mjesec dana trčim polumaraton" with one. Why?',
          options: [
            'Because godina is feminine and mjesec is masculine',
            'Because za is obligatory whenever the verb is in the present tense',
            'Because the first phrase is the subject of its sentence and the second is an object',
            'Because the bare accusative measures a stretch of time that was filled, while za counts forward to a point still ahead',
          ],
          correct: 3,
          hint: 'One phrase answers "how long?", the other answers "when?".',
          explanation:
            'Punu godinu dana answers "how long did you train?" — a duration, in the bare accusative. Za mjesec dana answers "when?" — a month from now. With a perfective verb za can also give the time something took: istrčali ste stazu za četiri sata.',
        },
        {
          type: 'type',
          q: 'Now you. Polumaraton u Rijeci dug je dvadeset i jedan ____. (km — write the word out)',
          answer: 'kilometar',
          hint: 'A compound number is followed by the form that its LAST word requires — and here the last word is not a "many".',
          explanation:
            'dvadeset i jedan kilometar — after a compound number ending in jedan the noun is singular and agrees with jedan. The whole measure is in the accusative, which for an inanimate masculine noun looks like the nominative.',
        },
        {
          type: 'transform',
          q: 'Do not say how fast she finished; say how long she was on the road. Use the imperfective "trčati" and make the four hours a pure duration.',
          from: 'Istrčala je maraton za četiri sata.',
          answer: 'Trčala je maraton četiri sata.',
          accept: [
            'Maraton je trčala četiri sata.',
            'Četiri je sata trčala maraton.',
            'Četiri sata je trčala maraton.',
            'Četiri sata trčala je maraton.',
          ],
          hint: 'Two things change: the verb loses its prefix, and one small word, which belongs only with a finished result, disappears.',
          explanation:
            'Trčala je maraton četiri sata. — za + accusative gives the time needed to finish and goes with a perfective verb (istrčala za četiri sata). The imperfective trčala describes the activity itself, and its length stands in the bare accusative.',
        },
        {
          type: 'type',
          q: 'Trener joj je na tridesetom kilometru vikao na ____ glas da ne staje. (at the top of his voice — the idiom uses the word for "all, whole" that is not cijeli)',
          answer: 'sav',
          hint: 'It is the masculine form of the word whose neuter is sve; with an inanimate noun its accusative looks like its nominative.',
          explanation:
            'na sav glas — at the top of one’s voice. Many phrases of manner are built from na or u with the accusative: na sav glas, na dušak, na sreću, u jedan glas.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"Ostali smo u Rijeci za tjedan dana." means the same as "Ostali smo u Rijeci tjedan dana."',
        answer: false,
        hint: 'English "for a week" tempts you to put a preposition in. What does that preposition do to a stretch of time in Croatian?',
        explanation:
          'False. Ostali smo tjedan dana is the length of the stay — the bare accusative. Za tjedan dana means "within a week" or "a week from now", so the first sentence does not say how long the stay lasted.',
      },
      10,
      {
        type: 'sort',
        q: 'What does the accusative phrase measure?',
        groups: ['How long', 'How far', 'How much (price or weight)'],
        items: [
          { hr: 'Čekali smo pola sata.', group: 0 },
          { hr: 'Vozili smo dvjesto kilometara.', group: 1 },
          { hr: 'Karta košta devet eura.', group: 2 },
          { hr: 'Spavao je čitavo poslijepodne.', group: 0 },
          { hr: 'Otplivala je petsto metara.', group: 1 },
          { hr: 'Lubenica teži šest kilograma.', group: 2 },
        ],
        explanation:
          'The bare accusative measures without any preposition: time (pola sata, čitavo poslijepodne), distance (dvjesto kilometara, petsto metara), price and weight (devet eura, šest kilograma). Inside the phrase the usual number rules apply.',
      },
      12,
      {
        type: 'match',
        q: 'Match each fixed phrase of manner to its meaning.',
        pairs: [
          ['na brzinu', 'in a hurry'],
          ['na vrijeme', 'on time'],
          ['u dlaku', 'exactly, to a hair'],
          ['u jedan glas', 'in unison'],
          ['na prvi pogled', 'at first sight'],
        ],
        explanation:
          'Manner is often expressed by na or u with the accusative in fixed phrases: na brzinu, na vrijeme, na prvi pogled, u dlaku, u jedan glas. They are learned whole; the preposition cannot be swapped.',
      },
      13,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("We stayed in Zadar only one night.")',
        words: ['U', 'Zadru', 'smo', 'ostali', 'samo', 'jedna', 'noć.'],
        wrong: 5,
        answer: 'jednu',
        hint: 'The length of a stay is not the subject of the sentence. Which case measures?',
        explanation:
          'U Zadru smo ostali samo jednu noć. — a measure of time stands in the accusative. With noć the noun itself does not show it, so the numeral must: jednu noć, not jedna noć.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "We waited for him for an hour and a half."',
        words: ['Čekali', 'smo', 'ga', 'sat', 'i', 'pol.'],
        accept: ['Sat i pol smo ga čekali.', 'Sat i pol čekali smo ga.'],
        explanation:
          'Čekali smo ga sat i pol. — the measure sat i pol stands in the bare accusative, with no za. If it opens the sentence, the clitics smo ga follow it: Sat i pol smo ga čekali.',
      },
      {
        type: 'transform',
        q: 'There are several tickets and each has the same price. Say so in one sentence that begins with "Karte koštaju…".',
        from: 'Svaka karta košta deset eura.',
        answer: 'Karte koštaju po deset eura.',
        accept: ['Karte koštaju po deset eura svaka.'],
        hint: 'One short word, placed right before the amount, spreads the price over each item; the amount itself stays as it is.',
        explanation:
          'Karte koštaju po deset eura. — po + accusative gives the price of EACH of several things. Without po the sentence could be read as the price of all the tickets together.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Stan su tražili pola godine, a kad su ga, na sreću, napokon našli, uselili su se za tjedan dana; platili su dvjesto tisuća eura.',
        q: 'What is the speaker saying?',
        options: [
          'They looked for an apartment for a week and moved in half a year later',
          'They will find an apartment within a week and pay two thousand euros',
          'They looked for half a year; once they luckily found one, they moved in within a week, and they paid two hundred thousand euros',
          'Unluckily, they have been paying for the apartment for half a year',
        ],
        correct: 2,
        explanation:
          'tražili pola godine — the search lasted half a year (bare accusative of duration); uselili su se za tjedan dana — they moved in within a week (za + accusative, the time a finished result took); platili su dvjesto tisuća eura — the price, again a bare accusative; na sreću — luckily.',
      },
      {
        type: 'dictate',
        audio: 'Hodali smo dva sata uz more.',
        answer: 'Hodali smo dva sata uz more.',
        hint: 'Six words: "We walked for two hours along the sea."',
        explanation:
          'Hodali smo dva sata uz more. — dva sata is the accusative of duration: no preposition before it, and sata in the genitive singular after dva.',
      },
    ],
  },

  // ── Coordinate and conclusive clauses ──────────────────────────────────────
  // Existing typed item 12 shows its own answer in its sentence (ni … ni), so
  // it is left out. The other four come before anything that prints their
  // connector; only the accept list of item 10 (never shown) names stoga
  // before item 8 asks for it.
  'coordinate-conclusive-clauses': {
    text: {
      kind: 'dialogue',
      title: 'Na raspravi',
      lines: [
        {
          who: 'Sutkinja',
          hr: 'Gospodine Juriću, rekli ste da ste te večeri zaključali skladište i otišli kući. Jeste li pritom provjerili alarm?',
          en: 'Mr. Jurić, you said that on that evening you locked the warehouse and went home. Did you check the alarm as you did so?',
        },
        {
          who: 'Svjedok',
          hr: 'Nisam ga provjerio niti sam o njemu razmišljao: alarm se uključuje sam pa na njega nitko od nas ne obraća pozornost.',
          en: 'I did not check it, nor did I give it a thought: the alarm switches on by itself, so none of us pays any attention to it.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Dopustite, sutkinjo. Svjedok je zaključao vrata u osam, a alarm se, prema zapisniku, oglasio tek u ponoć; dakle, četiri sata u skladištu nije bilo nikoga ili je netko ušao s ključem.',
          en: 'If I may, Your Honor. The witness locked the door at eight, and the alarm, according to the record, went off only at midnight; so for four hours either there was no one in the warehouse or someone entered with a key.',
        },
        {
          who: 'Sutkinja',
          hr: 'Ne zaključujte prebrzo, kolegice. Ključ imaju samo tri osobe, prema tome krug mogućih počinitelja nije velik, ali ga još nismo ni počeli sužavati.',
          en: 'Do not jump to conclusions, counselor. Only three people have a key; consequently, the circle of possible perpetrators is not large, but we have not even begun to narrow it down.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Moj branjenik nema ključ niti ga je ikada imao, stoga ne vidim na temelju čega se uopće nalazi na optuženičkoj klupi.',
          en: 'My client does not have a key, nor has he ever had one; therefore I do not see on what grounds he is on trial at all.',
        },
        {
          who: 'Sutkinja',
          hr: 'Na temelju otisaka, kolegice. Pronađeni su na unutarnjoj strani vrata te na ormaru s dokumentima pa sud ne može prijeći preko njih.',
          en: 'On the grounds of fingerprints, counselor. They were found on the inside of the door and on the filing cabinet, so the court cannot overlook them.',
        },
        {
          who: 'Svjedok',
          hr: 'Ako smijem dodati: optuženi je kod nas radio do proljeća, zato njegovih otisaka u skladištu ima posvuda. Ne bih rekao da to išta dokazuje.',
          en: 'If I may add: the defendant worked for us until spring; that is why his fingerprints are all over the warehouse. I would not say that proves anything.',
        },
        {
          who: 'Sutkinja',
          hr: 'O tome što otisci dokazuju odlučit će sud, a ne svjedok. Recite mi radije jeste li nakon provale zatekli razbijen prozor ili obijenu bravu.',
          en: 'What the fingerprints prove will be decided by the court, not by the witness. Tell me instead whether after the break-in you found a broken window or a forced lock.',
        },
        {
          who: 'Svjedok',
          hr: 'Ni jedno ni drugo. Brava je bila netaknuta i prozori su bili zatvoreni iznutra pa smo isprva mislili da se alarm oglasio greškom.',
          en: 'Neither. The lock was untouched and the windows were closed from the inside, so at first we thought the alarm had gone off by mistake.',
        },
        {
          who: 'Sutkinja',
          hr: 'Brava je, dakle, bila netaknuta, a prozori zatvoreni; počinitelj je, prema tome, ušao s ključem. Rasprava se stoga prekida dok se ne utvrdi gdje su te noći bila sva tri ključa.',
          en: 'So the lock was untouched and the windows closed; the perpetrator, consequently, entered with a key. The hearing is therefore adjourned until it is established where all three keys were that night.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the hearing: what does the judge conclude before she adjourns it?',
          options: [
            'That the alarm went off by mistake',
            'That the fingerprints prove the defendant’s guilt',
            'That the perpetrator must have entered with a key',
            'That the witness forgot to lock the warehouse',
          ],
          correct: 2,
          hint: 'Think of the two things the witness found untouched — and of what follows from them.',
          explanation:
            'The lock was untouched and the windows were closed from the inside, so — prema tome — the perpetrator entered with a key. That is why the judge wants to know where all three keys were that night.',
        },
        {
          q: 'The lawyer says: "Moj branjenik nema ključ niti ga je ikada imao." Why is the second verb not negated (nije imao)?',
          options: [
            'Because niti itself carries the negation of the clause it opens, so the verb is normally left without ne',
            'Because ikada can never stand beside a negated verb',
            'Because the second clause is affirmative: he did have a key once',
            'Because je is a clitic, and a clitic cannot be negated',
          ],
          correct: 0,
          hint: 'Compare the pattern with ni … ni, where the verb keeps its ne, and ask which word does the denying here.',
          explanation:
            'niti opens a second negative clause and brings the "not" with it: nema ključ niti ga je imao — "does not have a key, nor has he had one". With ni … ni before parts of one clause, by contrast, the verb stays negated: Nema ni ključa ni kartice.',
        },
        {
          type: 'transform',
          q: 'Make one sentence of the two, joining them with the formal connector that means "therefore".',
          from: 'Dvorana je zauzeta. Rasprava se odgađa.',
          answer: 'Dvorana je zauzeta, stoga se rasprava odgađa.',
          accept: [
            'Dvorana je zauzeta, stoga se odgađa rasprava.',
            'Dvorana je zauzeta, zato se rasprava odgađa.',
            'Dvorana je zauzeta, zato se odgađa rasprava.',
            'Dvorana je zauzeta, dakle rasprava se odgađa.',
            'Dvorana je zauzeta, prema tome rasprava se odgađa.',
            'Dvorana je zauzeta, prema tome se rasprava odgađa.',
            'Dvorana je zauzeta, pa se rasprava odgađa.',
            'Dvorana je zauzeta pa se rasprava odgađa.',
            'Dvorana je zauzeta, pa se stoga rasprava odgađa.',
            'Dvorana je zauzeta pa se stoga rasprava odgađa.',
          ],
          hint: 'A comma closes the first clause. After this connector the short word se may follow at once — which is not true of every conclusive word.',
          explanation:
            'Dvorana je zauzeta, stoga se rasprava odgađa. — a conclusive connector that opens the second clause is preceded by a comma. stoga (like zato) counts as the first stressed word, so se stands right after it; after dakle a clitic cannot stand (dakle rasprava se odgađa).',
        },
        {
          type: 'transform',
          q: 'Make one sentence of the two: say the auxiliary once and deny both actions with the same short word before each.',
          from: 'Svjedok nije vidio počinitelja. Svjedok nije čuo počinitelja.',
          answer: 'Svjedok nije ni vidio ni čuo počinitelja.',
          accept: [
            'Svjedok počinitelja nije ni vidio ni čuo.',
            'Svjedok nije vidio niti je čuo počinitelja.',
            'Svjedok nije počinitelja ni vidio ni čuo.',
            'Svjedok nije vidio ni čuo počinitelja.',
            'Svjedok nije vidio počinitelja niti ga je čuo.',
            'Svjedok počinitelja nije vidio niti ga je čuo.',
          ],
          hint: 'The auxiliary keeps its negation — Croatian denies twice where English says "neither … nor" once.',
          explanation:
            'Svjedok nije ni vidio ni čuo počinitelja. — when ni … ni stands before two parts of one clause, the verb stays negated: nije ni vidio ni čuo. Dropping the ne (je ni vidio ni čuo) is not possible.',
        },
        {
          type: 'type',
          q: 'Optuženikovih otisaka ima posvuda ____ je ondje radio do proljeća. (because — here the reason FOLLOWS; two words)',
          answer: 'zato što',
          accept: ['jer', 'zbog toga što', 'budući da'],
          hint: 'The witness used the first of the two words alone, to point BACK at a reason. A second word turns it around so that it introduces one.',
          explanation:
            'zato što introduces the reason: Otisaka ima posvuda zato što je ondje radio. zato alone looks back at a reason already given: Radio je ondje, zato otisaka ima posvuda.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: '"Pozvali smo goste te pripremili večeru." would be just as correct with a comma before "te".',
        answer: false,
        hint: 'Which everyday conjunction does te stand in for in formal writing — and what do you do before that one?',
        explanation:
          'False. te is the formal twin of i, and like i it joins coordinate clauses with no comma: Pozvali smo goste te pripremili večeru.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("All in all, the trip went well.")',
        words: ['Izlet', 'je', 'sve', 'u', 'svega', 'dobro', 'prošao.'],
        wrong: 4,
        answer: 'svemu',
        hint: 'The phrase is frozen: its little preposition here answers "in what?", not "into what?".',
        explanation:
          'Izlet je sve u svemu dobro prošao. — sve u svemu ("all in all") is a fixed summing-up phrase in which u takes the locative: svemu. Like dakle, it draws a line under what was said.',
      },
      11,
      7,
      {
        type: 'order',
        q: 'Put the words in order: "He moved to Osijek and found a job."',
        words: ['Odselio', 'se', 'u', 'Osijek', 'i', 'našao', 'je', 'posao.'],
        accept: [
          'U Osijek se odselio i našao je posao.',
          'Odselio se u Osijek i posao je našao.',
          'U Osijek se odselio i posao je našao.',
        ],
        explanation:
          'Odselio se u Osijek i našao je posao. — i does not count as a first position, so the clitic je cannot stand straight after it ("i je našao" is impossible); a stressed word must come between them. No comma is written before i.',
      },
      8,
      {
        type: 'sort',
        q: 'What does the connector do in each sentence?',
        groups: ['It simply adds a clause', 'It draws a conclusion'],
        items: [
          { hr: 'Ušao je u sobu i sjeo.', group: 0 },
          { hr: 'Cesta je zatvorena, stoga idemo vlakom.', group: 1 },
          { hr: 'Ministar je otvorio skup te pozdravio goste.', group: 0 },
          { hr: 'Svi su glasali za, dakle prijedlog je prihvaćen.', group: 1 },
          { hr: 'Nije nazvao niti je pisao.', group: 0 },
          { hr: 'Rok je istekao, prema tome prijava ne vrijedi.', group: 1 },
        ],
        explanation:
          'i, te and niti add one clause to another (niti adds a negative one) and take no comma. stoga, dakle and prema tome present the second clause as a consequence of the first, and a comma stands before them.',
      },
      {
        type: 'match',
        q: 'Match each connector to what it does.',
        pairs: [
          ['te', '"and" in reports and formal prose'],
          ['pa', '"and then" — what came next'],
          ['niti', '"nor" — opens a second negative clause'],
          ['zato', '"that is why" — points back at a reason'],
          ['zato što', '"because" — introduces the reason'],
        ],
        explanation:
          'te and pa both add, but te is formal and pa brings in what follows in time or as a result. niti adds a negative clause. zato looks back at a reason already given; zato što brings the reason in.',
      },
      {
        type: 'transform',
        q: 'Make one sentence of the two with the connector that means "nor".',
        from: 'Nije se javio. Nije se ispričao.',
        answer: 'Nije se javio niti se ispričao.',
        accept: [
          'Nije se ni javio ni ispričao.',
          'Niti se javio niti se ispričao.',
          'Nije se javio niti ispričao.',
          'Nije se javio ni ispričao.',
          'Niti se javio niti ispričao.',
        ],
        hint: 'The connector carries the denial into the second clause by itself, so the second verb loses something — and no comma is needed.',
        explanation:
          'Nije se javio niti se ispričao. — niti carries the negation, so the second clause is left without ne. The clitic se can stand right after niti, and the third-person je is left out after se as usual.',
      },
      {
        type: 'listen',
        audio:
          'Rok za žalbu istekao je jučer, prema tome presuda je pravomoćna i više se ne može pobijati.',
        q: 'What is the speaker saying?',
        options: [
          'An appeal was filed yesterday, so the verdict is being reviewed',
          'The deadline for an appeal expires tomorrow, so the verdict can still be challenged',
          'The verdict was overturned because the deadline was missed',
          'The deadline for an appeal expired yesterday; consequently the verdict is final and can no longer be challenged',
        ],
        correct: 3,
        explanation:
          'Rok za žalbu istekao je jučer — the deadline for an appeal expired yesterday; prema tome — consequently; presuda je pravomoćna — the verdict is final; više se ne može pobijati — it can no longer be challenged. prema tome is typical of legal and formal style.',
      },
      {
        type: 'dictate',
        audio: 'Kiša pada, zato ostajemo kod kuće.',
        answer: 'Kiša pada, zato ostajemo kod kuće.',
        accept: ['Kiša pada zato ostajemo kod kuće.'],
        hint: 'Six words: "It is raining; that is why we are staying home."',
        explanation:
          'Kiša pada, zato ostajemo kod kuće. — zato points back at the reason just given, and a comma separates the two clauses.',
      },
    ],
  },

  // ── Abbreviations ──────────────────────────────────────────────────────────
  // The memo uses itd., so the existing typed item that asks for it (index 14)
  // is left out. The four typed items kept (km, HNK-u, EU-a, str.) are printed
  // neither in the memo nor before their own place in the mix.
  abbreviations: {
    text: {
      kind: 'text',
      title: 'Poruka lektorice redakciji',
      lines: [
        {
          hr: 'Drage kolegice i kolege, prošli sam tjedan u našim tekstovima izbrojila toliko pogrešno napisanih kratica da sam odlučila podsjetiti vas na nekoliko pravila.',
          en: 'Dear colleagues, last week I counted so many wrongly written abbreviations in our articles that I decided to remind you of a few rules.',
        },
        {
          hr: 'Obične kratice, tj. skraćene riječi, pišu se s točkom: npr., god., br., i sl. Tko napiše „npr” bez točke, taj nije uštedio vrijeme, nego je meni zadao posao.',
          en: 'Ordinary abbreviations, i.e., shortened words, are written with a period: npr., god., br., i sl. Whoever writes “npr” without a period has not saved time but has made work for me.',
        },
        {
          hr: 'Titule se također krate s točkom i malim slovom, osim na početku rečenice: razgovarali smo s prof. Anom Kralj i s dr. sc. Ivanom Lovrićem, a ne „s Prof.” i „s Dr.”.',
          en: 'Titles are likewise abbreviated with a period and a lowercase letter, except at the beginning of a sentence: we spoke “s prof. Anom Kralj” and “s dr. sc. Ivanom Lovrićem,” not “s Prof.” and “s Dr.”',
        },
        {
          hr: 'Iznimka je kratica gđa: budući da završava istim slovom kao i puna riječ gospođa, piše se bez točke pa pišemo g. Babić, ali gđa Babić.',
          en: 'The exception is the abbreviation gđa: since it ends in the same letter as the full word gospođa, it is written without a period, so we write g. Babić (Mr.) but gđa Babić (Mrs.).',
        },
        {
          hr: 'Pokrate sastavljene od početnih slova pišu se velikim slovima i bez točaka: HAZU, HRT, UN, MUP, a ne „H.A.Z.U.” ili „Hrt”.',
          en: 'Acronyms made up of initial letters are written in capital letters and without periods: HAZU, HRT, UN, MUP, not “H.A.Z.U.” or “Hrt.”',
        },
        {
          hr: 'Kad se takva pokrata sklanja, nastavak se dodaje iza spojnice: sjednica je održana u HAZU-u, gledali smo je na HRT-u, a izvješće smo dobili od MUP-a.',
          en: 'When such an acronym is declined, the ending is added after a hyphen: the session was held at HAZU (u HAZU-u), we watched it on HRT (na HRT-u), and we got the report from the MUP (od MUP-a).',
        },
        {
          hr: 'Pokrate koje završavaju na -a sklanjaju se kao imenice ženskoga roda: dionice INA-e, zaposlenici FINA-e. Oblici „INA-a” i „u INA-u” nisu dobri.',
          en: 'Acronyms ending in -a are declined like feminine nouns: shares of INA (INA-e), employees of FINA (FINA-e). The forms “INA-a” and “u INA-u” are not acceptable.',
        },
        {
          hr: 'Mjerne jedinice i simboli nisu kratice, stoga se pišu bez točke i odvajaju se razmakom od broja: 5 kg, 20 min, 30 °C, a ne „5kg.”.',
          en: 'Units of measurement and symbols are not abbreviations; therefore they are written without a period and are separated from the number by a space: 5 kg, 20 min, 30 °C, not “5kg.”',
        },
        {
          hr: 'Kad kratica s točkom završava rečenicu, piše se samo jedna točka; ispred kratica itd. i i sl. ne piše se zarez.',
          en: 'When an abbreviation with a period ends a sentence, only one period is written; no comma is written before the abbreviations itd. and i sl.',
        },
        {
          hr: 'Tko nije siguran, neka mi se javi prije nego što tekst ode u tisak, a ne poslije. Srdačan pozdrav, Marta Šimić, lektorica',
          en: 'Anyone who is unsure should get in touch with me before the text goes to print, not afterward. Kind regards, Marta Šimić, copy editor',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the memo: which of these does the copy editor say is written WITHOUT a period?',
          options: [
            'The short form of "for example"',
            'The short form of "professor"',
            'The short form of "Mrs."',
            'The short form of "year"',
          ],
          correct: 2,
          hint: 'She calls it an exception, and explains it by the last letter of the shortened word.',
          explanation:
            'gđa keeps the last letter of gospođa, so it is written without a period — unlike g., prof., npr. and god., which are cut off and marked with one. (Units such as kg and min have no period either, but she does not count them as abbreviations at all.)',
        },
        {
          q: 'She writes "dionice INA-e", and rejects "INA-a". Why does this acronym take -e in the genitive?',
          options: [
            'Because the names of companies always take -e in the genitive',
            'Because a hyphen can only be followed by the vowel e',
            'Because INA is a plural noun, like novine',
            'Because it ends in -a and is read as a word, so it declines like a feminine noun such as žena',
          ],
          correct: 3,
          hint: 'Say it aloud: what ordinary nouns does it sound like, and how do they form the genitive?',
          explanation:
            'The ending of a declined acronym follows its pronunciation. INA is read as a word ending in -a, so it goes like žena: INA-e, u INA-i. Other acronyms go like masculine nouns instead: MUP-a, u HAZU-u.',
        },
        {
          type: 'type',
          q: 'Now you. Sjednica je bila zatvorena za javnost, ali smo snimku dobili od ____. (HRT — in the case that od requires, written as the memo demands)',
          answer: 'HRT-a',
          hint: 'An acronym that is read letter by letter declines like a masculine noun — and the ending is kept apart from the capitals.',
          explanation:
            'od HRT-a — od takes the genitive. The acronym is read letter by letter (ha-er-te) and behaves like a masculine noun: HRT-a, na HRT-u. The ending is written in lowercase after a hyphen.',
        },
        {
          type: 'transform',
          q: 'Shorten the title and the word "gospođa" the way the copy editor requires.',
          from: 'Intervju s profesoricom Kralj vodila je gospođa Šimić.',
          answer: 'Intervju s prof. Kralj vodila je gđa Šimić.',
          hint: 'One of the two short forms is cut off and marked for it; the other keeps the last letter of its word and needs no mark.',
          explanation:
            'Intervju s prof. Kralj vodila je gđa Šimić. — prof. stands for profesor and profesorica in any case and takes a period; gđa is a contracted form that keeps the final letter of gospođa and takes none.',
        },
        {
          type: 'transform',
          q: 'A trainee wrote the word "takozvani" in full. Rewrite the sentence with its abbreviation.',
          from: 'To su takozvani stručnjaci.',
          answer: 'To su tzv. stručnjaci.',
          hint: 'Three consonants — the first letter of the word’s first part and the first two of its second — written together, with a single period at the end and none inside.',
          explanation:
            'To su tzv. stručnjaci. — the abbreviation stands for takozvani ("so-called"). It is an ordinary abbreviation: lowercase, one period at the end, none inside. It is read as the full word in whatever case the sentence needs.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: 'A symbol such as € never takes a period of its own: in "Karta košta 15 €." the period belongs to the sentence.',
        answer: true,
        hint: 'Is € a shortened word, or a sign that stands for a unit?',
        explanation:
          'True. Symbols and units (€, %, kg, min) are not shortened words, so they carry no period; they stand after the number with a space. The period in "15 €." simply closes the sentence.',
      },
      11,
      {
        type: 'sort',
        q: 'How is each of these shortened in writing?',
        groups: ['With a period', 'Without a period'],
        items: [
          { hr: 'na primjer', group: 0 },
          { hr: 'gospođa', group: 1 },
          { hr: 'doktor', group: 0 },
          { hr: 'minuta (the unit)', group: 1 },
          { hr: 'broj', group: 0 },
          { hr: 'Hrvatska radiotelevizija', group: 1 },
          { hr: 'i tako dalje', group: 0 },
          { hr: 'gram', group: 1 },
        ],
        explanation:
          'A word that is cut short gets a period: npr., dr., br., itd. No period is written after a contracted form that keeps its last letter (gđa), after a unit (min, g), or in an acronym made of capitals (HRT).',
      },
      12,
      {
        type: 'match',
        q: 'Match each abbreviation to the words it stands for.',
        pairs: [
          ['v. d.', 'vršitelj dužnosti'],
          ['o. g.', 'ove godine'],
          ['pr. Kr.', 'prije Krista'],
          ['dr. sc.', 'doktor znanosti'],
          ['i dr.', 'i drugi'],
        ],
        explanation:
          'When several words are shortened, each keeps its own period and they are separated by a space: v. d. (acting), o. g. (this year), pr. Kr. (B.C.), dr. sc. (PhD), i dr. (and others).',
      },
      13,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("The Republic of Croatia has signed the agreement.")',
        words: ['RH', 'je', 'potpisao', 'sporazum.'],
        wrong: 2,
        answer: 'potpisala',
        hint: 'This acronym is not declined and is read as its full two-word name. What gender is that name?',
        explanation:
          'RH je potpisala sporazum. — RH is read Republika Hrvatska and does not decline, so the predicate agrees with the full name, which is feminine.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "The speaker is Professor Ivan Lovrić, PhD." (begin with the verb)',
        words: ['Govori', 'prof.', 'dr.', 'sc.', 'Ivan', 'Lovrić.'],
        accept: ['Prof. dr. sc. Ivan Lovrić govori.'],
        explanation:
          'Govori prof. dr. sc. Ivan Lovrić. — academic titles stand before the name in a fixed order: the teaching rank first (prof.), then the degree (dr. sc.). Each shortened word has its own period.',
      },
      {
        type: 'transform',
        q: 'Replace the full name of the organization with its acronym, in the same case.',
        from: 'Radio je u Ujedinjenim narodima.',
        answer: 'Radio je u UN-u.',
        accept: ['U UN-u je radio.'],
        hint: 'Two capitals and no periods; the ending comes after a hyphen and is the one a masculine noun would take after u.',
        explanation:
          'Radio je u UN-u. — the acronym is read u-en, ends in a consonant, and declines like a masculine singular noun, although the full name is plural: UN-a, u UN-u.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Predavanje dr. sc. Ane Kralj održat će se 12. svibnja u 18 sati u maloj dvorani HAZU-a, a ulaz je slobodan.',
        q: 'What is being announced?',
        options: [
          'Ana Kralj, PhD, will give a lecture on May 12 at 6 p.m. in the small hall of HAZU; admission is free',
          'Ana Kralj will receive her doctorate at HAZU on May 18 at noon',
          'A lecture about Ana Kralj was held in the great hall, and tickets were sold out',
          'HAZU has canceled the lecture planned for May 12',
        ],
        correct: 0,
        explanation:
          'Abbreviations are read as full words in the right case: dr. sc. Ane Kralj — doktorice znanosti Ane Kralj; 12. svibnja — dvanaestoga svibnja; u dvorani HAZU-a — the genitive of the acronym; ulaz je slobodan — admission is free.',
      },
      {
        type: 'dictate',
        audio: 'Radi u Hini od prošle godine.',
        answer: 'Radi u Hini od prošle godine.',
        hint: 'Six words: "She has worked at Hina since last year." (the news agency, whose name is written like an ordinary name)',
        explanation:
          'Radi u Hini od prošle godine. — Hina (Hrvatska izvještajna novinska agencija) is an acronym built from syllables and read as a word, so it is written like a name and declined without a hyphen: Hina, Hine, u Hini.',
      },
    ],
  },

  // ══ UNIT 2 ═════════════════════════════════════════════════════════════════

  // ── Numbers by the norm ────────────────────────────────────────────────────
  // The minutes of the meeting give a clock time, so the existing typed item
  // that asks for "sati" (index 6) is left out; the other four are kept.
  'brojevi-norma': {
    text: {
      kind: 'dialogue',
      title: 'Sjednica fakultetskog vijeća',
      lines: [
        {
          who: 'Dekanica',
          hr: 'Kolege, na dnevnom su redu danas samo dvije točke, ali se bojim da ćemo se na objema dugo zadržati.',
          en: 'Colleagues, there are only two items on the agenda today, but I am afraid we will spend a long time on both.',
        },
        {
          who: 'Tajnik',
          hr: 'Prva se tiče natječaja za asistente. Javilo se dvadeset i troje kandidata, a povjerenstvo je u uži izbor uvrstilo njih petero: tri kandidatkinje i dvojicu kandidata.',
          en: 'The first concerns the call for applications for assistant positions. Twenty-three candidates applied, and the committee put five of them on the short list: three women and two men.',
        },
        {
          who: 'Dekanica',
          hr: 'A imamo samo dva radna mjesta. Je li povjerenstvo jednoglasno predložilo koga treba primiti?',
          en: 'And we have only two positions. Did the committee unanimously propose who should be hired?',
        },
        {
          who: 'Tajnik',
          hr: 'Nije. O dvjema se kandidatkinjama svi slažu, dok su o trećoj mišljenja podijeljena; dvojica članova povjerenstva izdvojila su stoga svoje mišljenje.',
          en: 'No. Everyone agrees about two of the women candidates, while opinions are divided about the third; two members of the committee have therefore submitted a dissenting opinion.',
        },
        {
          who: 'Profesor Vidović',
          hr: 'Molim da u zapisnik uđe i ovo: s obama izdvojenim mišljenjima upoznat sam tek jutros, a o tako važnoj odluci ne bih htio glasati naslijepo.',
          en: 'I ask that this, too, be entered in the minutes: I was made aware of both dissenting opinions only this morning, and I would not like to vote blindly on such an important decision.',
        },
        {
          who: 'Dekanica',
          hr: 'Prigovor je na mjestu. Glasanje odgađamo za sedam dana, a obje ćete isprave dobiti još danas.',
          en: 'The objection is well taken. We are postponing the vote for seven days, and you will receive both documents today.',
        },
        {
          who: 'Tajnik',
          hr: 'Druga je točka proračun. Troškovi su porasli s 1,2 na 1,5 milijuna eura, dakle za četvrtinu, a prihodi tek za 3 %.',
          en: 'The second item is the budget. Costs have risen from 1.2 to 1.5 million euros, that is, by a quarter, while revenues have risen by only 3%.',
        },
        {
          who: 'Profesor Vidović',
          hr: 'Samo da ne bude zabune: udio plaća u troškovima porastao je sa 60 % na 66 %, a to je šest postotnih bodova, a ne šest posto, kako piše u prijedlogu.',
          en: 'Just so there is no confusion: the share of salaries in the costs rose from 60% to 66%, and that is six percentage points, not six percent, as the proposal says.',
        },
        {
          who: 'Dekanica',
          hr: 'Hvala na ispravku; u službenom dokumentu takva pogreška ne smije ostati. Prijedlog ćemo vratiti na doradu obojici autora.',
          en: 'Thank you for the correction; such a mistake must not remain in an official document. We will return the proposal to both authors for revision.',
        },
        {
          who: 'Tajnik',
          hr: 'Onda bilježim: glasanje o asistentima 14. travnja u 10 sati, a ispravljeni proračun do kraja mjeseca. Sjednica je trajala točno četrdeset i dvije minute.',
          en: 'Then I am noting: the vote on the assistants on April 14 at 10 a.m., and the corrected budget by the end of the month. The meeting lasted exactly forty-two minutes.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the meeting: why was the vote on the assistants postponed?',
          options: [
            'Because Professor Vidović had seen the two dissenting opinions only that morning',
            'Because too few candidates had applied',
            'Because the committee had not put anyone on the short list',
            'Because the budget for the two positions had not been approved',
          ],
          correct: 0,
          hint: 'Recall what Professor Vidović asked to have entered in the minutes.',
          explanation:
            'He had been made aware of both dissenting opinions (s obama izdvojenim mišljenjima) only that morning and did not want to vote blindly, so the dean postponed the vote for seven days.',
        },
        {
          q: 'Professor Vidović insists on "šest postotnih bodova, a ne šest posto". Why is the proposal wrong?',
          options: [
            'Because posto cannot be used with numbers below ten',
            'Because the share rose from 60% to 66%: that is six points on the percentage scale, but a rise of ten percent',
            'Because postotni bod is simply the formal word for posto',
            'Because percentages may not be compared in an official document',
          ],
          correct: 1,
          hint: 'Work out what six is as a fraction of sixty.',
          explanation:
            'When the quantity is itself a percentage, the difference between two values is counted in postotni bodovi: 66 − 60 = 6 points. As a relative change, six on sixty is ten percent. Mixing the two up is an error of substance, not of style.',
        },
        {
          type: 'type',
          q: 'Now you, in the style of the minutes. Povjerenstvo je raspravljalo o svim ____ kandidatkinjama iz užeg izbora. (3 — declined, as official writing requires)',
          answer: 'trima',
          hint: 'o takes the locative, and in official style the numeral itself is put into that case, like the noun beside it.',
          explanation:
            'o trima kandidatkinjama — tri declines: triju (genitive), trima (dative, locative, instrumental). Everyday and journalistic style leaves the numeral unchanged (o tri kandidatkinje); careful administrative writing declines it.',
        },
        {
          type: 'transform',
          q: 'Rewrite the sentence for an official document: decline the numeral.',
          from: 'Odluka se tiče dva radna mjesta.',
          answer: 'Odluka se tiče dvaju radnih mjesta.',
          hint: 'ticati se governs the genitive. Give that case to the numeral — and then the adjective and the noun can no longer stay in the form that follows an undeclined dva.',
          explanation:
            'Odluka se tiče dvaju radnih mjesta. — the genitive of dva is dvaju, and beside a declined numeral the noun phrase stands in the genitive plural (radnih mjesta). The undeclined version is ordinary usage; the declined one is the careful, official form.',
        },
        {
          type: 'type',
          q: 'Zapisnik potpisuju dekanica i tajnik: potpisat će ga njih ____. (two — a woman and a man together)',
          answer: 'dvoje',
          accept: ['oboje'],
          hint: 'Neither the plain numeral nor the form for two men will do: a mixed pair has a collective numeral of its own, the one in the same series as petero.',
          explanation:
            'njih dvoje — the collective numerals dvoje, troje, četvero, petero count mixed groups (and children). dvojica would be two men, dvije two women.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '"Dvadeset i jedan zastupnik glasali su za prijedlog." is correct, because twenty-one people are a plural subject.',
        answer: false,
        hint: 'The noun and the verb take their cue from the LAST word of a compound number.',
        explanation:
          'False. A compound number that ends in jedan behaves like jedan itself: the noun is singular and so is the predicate — Dvadeset i jedan zastupnik glasao je za prijedlog.',
      },
      5,
      {
        type: 'sort',
        q: 'Which numerals can stand directly before this form of the noun?',
        groups: ['dva, tri, četiri (or dvije)', 'pet and above'],
        items: [
          { hr: 'sata', group: 0 },
          { hr: 'sati', group: 1 },
          { hr: 'kandidatkinje', group: 0 },
          { hr: 'kandidatkinja', group: 1 },
          { hr: 'mjeseca', group: 0 },
          { hr: 'mjeseci', group: 1 },
          { hr: 'godine', group: 0 },
          { hr: 'godina', group: 1 },
        ],
        explanation:
          'After dva (dvije), tri and četiri the noun has the form of the genitive singular: tri sata, dvije kandidatkinje, četiri mjeseca, tri godine. From pet upward it stands in the genitive plural: pet sati, šest kandidatkinja, deset mjeseci, sto godina.',
      },
      7,
      {
        type: 'match',
        q: 'Who exactly is meant? Match each phrase to its meaning.',
        pairs: [
          ['dvojica liječnika', 'two male doctors'],
          ['dvije liječnice', 'two female doctors'],
          ['dvoje liječnika', 'two doctors, a man and a woman'],
          ['obojica liječnika', 'both male doctors'],
          ['oboje djece', 'both children'],
        ],
        explanation:
          'dvojica and obojica are used only of men; dvije counts feminine nouns; dvoje and oboje count mixed pairs and children. All but dvije are followed by the genitive plural.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Both women candidates arrived on time."',
        words: ['Obje', 'su', 'kandidatkinje', 'stigle', 'na', 'vrijeme.'],
        accept: [
          'Obje kandidatkinje su stigle na vrijeme.',
          'Obje kandidatkinje stigle su na vrijeme.',
          'Na vrijeme su stigle obje kandidatkinje.',
          'Obje su kandidatkinje na vrijeme stigle.',
          'Na vrijeme su obje kandidatkinje stigle.',
        ],
        explanation:
          'Obje su kandidatkinje stigle na vrijeme. — obje is the feminine of oba, and the noun after it has the same form as after dvije. The clitic su may split the phrase (careful style) or follow it.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("The committee has five members.")',
        words: ['Povjerenstvo', 'ima', 'pet', 'člana.'],
        wrong: 3,
        answer: 'članova',
        hint: 'The form you see would be right after a smaller number. What does this one require?',
        explanation:
          'Povjerenstvo ima pet članova. — from five upward the counted noun stands in the genitive plural. člana is the form used after dva, tri and četiri.',
      },
      {
        type: 'transform',
        q: 'Rewrite the sentence for an official document: decline the word for "both".',
        from: 'Raspravljali smo o oba pravilnika.',
        answer: 'Raspravljali smo o obama pravilnicima.',
        accept: [
          'O obama pravilnicima smo raspravljali.',
          'O obama smo pravilnicima raspravljali.',
        ],
        hint: 'The numeral takes the locative, and then the noun must take the locative PLURAL too — watch the consonant before the ending.',
        explanation:
          'Raspravljali smo o obama pravilnicima. — oba declines like dva: obaju, obama. Beside the declined numeral the noun is in the locative plural, where k becomes c before -ima: pravilnik → pravilnicima.',
      },
      10,
      {
        type: 'listen',
        audio:
          'Od dvadeset i jednog prijavljenog kandidata na razgovor su pozvana samo četvorica, a posao će dobiti dvojica.',
        q: 'What is the speaker saying?',
        options: [
          'Twenty-one candidates were interviewed, and four of them got the job',
          'Of twenty-one applicants, only four were invited to an interview, and two will get the job',
          'Four candidates applied, and twenty-one people interviewed them',
          'Two of the four applicants withdrew before the interview',
        ],
        correct: 1,
        explanation:
          'Od dvadeset i jednog prijavljenog kandidata — after a compound number ending in jedan the noun is singular; četvorica and dvojica are the numeral nouns for groups of men, with a plural verb and a participle in -a: pozvana su četvorica.',
      },
      {
        type: 'dictate',
        audio: 'Sastanak je trajao dva sata.',
        answer: 'Sastanak je trajao dva sata.',
        hint: 'Five words: "The meeting lasted two hours."',
        explanation:
          'Sastanak je trajao dva sata. — after dva the noun has the genitive singular form (sata); the whole phrase measures the duration and needs no preposition.',
      },
    ],
  },

  // ── Collective nouns ───────────────────────────────────────────────────────
  // The article uses braća, so the existing typed item that asks for it
  // (index 9) is left out; the other four are kept.
  'collective-nouns': {
    text: {
      kind: 'text',
      title: 'Nakon oluje',
      lines: [
        {
          hr: 'Olujno nevrijeme koje je u noći na utorak zahvatilo Gorski kotar ostavilo je za sobom pustoš kakvu ni najstariji mještani ne pamte.',
          en: 'The storm that hit Gorski Kotar overnight Monday into Tuesday left behind devastation such as not even the oldest residents can remember.',
        },
        {
          hr: 'Na cesti prema Delnicama ležalo je jutros polomljeno granje, a na nekoliko se mjesta s usjeka odronilo kamenje pa je promet bio prekinut do podneva.',
          en: 'Broken branches lay on the road to Delnice this morning, and in several places rocks had slid down from the road cuts, so traffic was interrupted until noon.',
        },
        {
          hr: 'Stoljetno drveće u gradskom parku izdržalo je vjetar, ali je mlado lišće, tek izraslo, ostalo razbacano po stazama.',
          en: 'The century-old trees in the town park withstood the wind, but the young leaves, only just grown, were left scattered across the paths.',
        },
        {
          hr: 'Najteže je stradalo selo Brod: voda je odnijela dva mosta, a s pašnjaka je spašena sva telad, zahvaljujući mještanima koji su je u zadnji čas potjerali na brijeg.',
          en: 'The village of Brod suffered the worst: the water carried away two bridges, and all the calves were saved from the pasture, thanks to villagers who drove them uphill at the last moment.',
        },
        {
          hr: '„Perad nam je stradala, ali su djeca na sigurnom, i to je jedino važno”, rekla nam je Marija Štimac, koja je s petero unučadi noć provela u školskoj dvorani.',
          en: '“We lost our poultry, but the children are safe, and that is the only thing that matters,” we were told by Marija Štimac, who spent the night in the school gym with her five grandchildren.',
        },
        {
          hr: 'Njezina su braća, koja žive u susjednom zaseoku, do jutra nosila vreće s pijeskom.',
          en: 'Her brothers, who live in the neighboring hamlet, carried sandbags until morning.',
        },
        {
          hr: 'Nogometna momčad mjesnoga kluba otkazala je trening i pridružila se vatrogascima, s kojima je na terenu ostala osamnaest sati.',
          en: 'The local club’s soccer team canceled its practice and joined the firefighters, staying out in the field with them for eighteen hours.',
        },
        {
          hr: 'Šteta u voćnjacima i vinogradima još se zbraja: grožđe je, kažu vinogradari, gotovo posve uništeno, a rano je voće stradalo od tuče.',
          en: 'The damage in the orchards and vineyards is still being tallied: the grapes, winegrowers say, have been almost completely destroyed, and the early fruit was damaged by hail.',
        },
        {
          hr: 'Župan je obišao područje i obećao da će gospoda iz ministarstva, koja su pomoć najavila još lani, ovoga puta doista doći.',
          en: 'The county prefect toured the area and promised that the gentlemen from the ministry, who announced aid back last year, will really come this time.',
        },
        {
          hr: 'Mještani mu, čini se, ne vjeruju previše: dok je on govorio, oni su već skupljali polomljeno granje i slagali ga uz cestu.',
          en: 'The residents, it seems, do not believe him too much: while he was speaking, they were already gathering the broken branches and stacking them along the road.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the article: what does Marija Štimac say is the only thing that matters?',
          options: [
            'That the two bridges will be rebuilt',
            'That her poultry survived the flood',
            'That the children are safe',
            'That the ministry has finally sent help',
          ],
          correct: 2,
          hint: 'She names one loss and one relief in the same sentence.',
          explanation:
            '„Perad nam je stradala, ali su djeca na sigurnom, i to je jedino važno” — the poultry was lost, but the children are safe. Notice the two kinds of agreement: perad je stradala (feminine singular), djeca su (plural verb).',
        },
        {
          q: 'The article says the villagers "su je u zadnji čas potjerali na brijeg". Why "je", when many calves are meant?',
          options: [
            'Because telad is grammatically a feminine singular noun, so the pronoun that refers to it is feminine singular too',
            'Because je is here the auxiliary of potjerali, not a pronoun',
            'Because only one calf was actually on the pasture',
            'Because je is the plural pronoun used for animals',
          ],
          correct: 0,
          hint: 'Look at the words that agree with the noun earlier in the same sentence: spašena, sva.',
          explanation:
            'Collectives in -ad are feminine singular in form: sva telad je spašena. A pronoun follows the grammar, not the count, so the accusative is je ("her"), not ih. The auxiliary of potjerali is su, which stands before it: su je.',
        },
        {
          type: 'type',
          q: 'Now you, as the reporter. Kamenje ____ cestu na tri mjesta. (zatrpati — in the past; two words)',
          answer: 'je zatrpalo',
          hint: 'However many stones there are, the noun is one whole of neuter gender — the auxiliary and the participle both follow it.',
          explanation:
            'Kamenje je zatrpalo cestu. — a collective in -je is neuter singular: the auxiliary is je and the participle ends in -o, exactly as with more or polje.',
        },
        {
          type: 'transform',
          q: 'There were many of them. Replace the subject with the word that serves as the plural of "dijete" and change everything that must agree.',
          from: 'Dijete je spavalo u školskoj dvorani.',
          answer: 'Djeca su spavala u školskoj dvorani.',
          accept: [
            'Djeca su u školskoj dvorani spavala.',
            'U školskoj dvorani spavala su djeca.',
            'U školskoj su dvorani spavala djeca.',
          ],
          hint: 'The verb becomes plural, but the participle ends like the noun itself.',
          explanation:
            'Djeca su spavala. — djeca declines like a feminine singular noun in -a, yet it takes a plural verb (su), and the participle ends in -a like the noun: spavala.',
        },
        {
          type: 'type',
          q: 'Mještani više ne vjeruju ____ iz ministarstva. (gospoda — vjerovati komu?)',
          answer: 'gospodi',
          hint: 'This noun declines like a feminine singular noun in -a, and the verb asks for the dative.',
          explanation:
            'ne vjeruju gospodi — gospoda goes like žena: gospode, gospodi, gospodu, s gospodom. Its agreement is that of braća and djeca: gospoda su najavila.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Lišće" and "listovi" mean exactly the same thing; the collective is just a more formal plural.',
        answer: false,
        hint: 'Which of the two would you use with a number — tri …, pet …?',
        explanation:
          'False. lišće is foliage seen as one mass, grammatically neuter singular (Lišće šušti) and not countable. listovi are separate leaves — or sheets of paper — and can be counted: tri lista, pet listova.',
      },
      10,
      {
        type: 'sort',
        q: 'How does the predicate agree with each noun?',
        groups: [
          'Neuter singular (… je palo)',
          'Feminine singular (… je pala)',
          'Plural verb, participle in -a (… su pala)',
        ],
        items: [
          { hr: 'kamenje', group: 0 },
          { hr: 'momčad', group: 1 },
          { hr: 'braća', group: 2 },
          { hr: 'grožđe', group: 0 },
          { hr: 'janjad', group: 1 },
          { hr: 'djeca', group: 2 },
          { hr: 'perje', group: 0 },
          { hr: 'gospoda', group: 2 },
        ],
        explanation:
          'Collectives in -je are neuter singular (kamenje, grožđe, perje je palo); those in -ad are feminine singular (momčad, janjad je pala); braća, djeca and gospoda take a plural verb with a participle in -a (su pala).',
      },
      11,
      {
        type: 'match',
        q: 'Match each noun to the collective formed from it.',
        pairs: [
          ['grana', 'granje'],
          ['pero', 'perje'],
          ['tele', 'telad'],
          ['unuče', 'unučad'],
          ['momak', 'momčad'],
        ],
        explanation:
          'Things form collectives in -je, often with a softened consonant (grana → granje, pero → perje); the young of animals and people form them in -ad (tele → telad, unuče → unučad); momčad, from momak, now means a team.',
      },
      12,
      {
        type: 'fix',
        q: 'One word is not a Croatian form. Tap it. ("I talked with my brothers for a long time.")',
        words: ['Dugo', 'sam', 'razgovarao', 's', 'braćama.'],
        wrong: 4,
        answer: 'braćom',
        hint: 'The noun means several people, but it is declined like one feminine noun in -a.',
        explanation:
          'Dugo sam razgovarao s braćom. — braća declines like žena in the singular: braće, braći, braću, s braćom. Plural endings such as "braćama" or "braćima" do not exist.',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "My brothers studied in Zagreb."',
        words: ['Moja', 'su', 'braća', 'studirala', 'u', 'Zagrebu.'],
        accept: [
          'Moja braća su studirala u Zagrebu.',
          'Moja braća studirala su u Zagrebu.',
          'U Zagrebu su studirala moja braća.',
          'Moja su braća u Zagrebu studirala.',
          'U Zagrebu su moja braća studirala.',
        ],
        explanation:
          'Moja su braća studirala u Zagrebu. — the attribute is feminine singular in form (moja), the verb is plural (su), and the participle ends in -a (studirala). The clitic su may split the opening phrase or follow it.',
      },
      {
        type: 'transform',
        q: 'Replace the plural subject with the collective noun and change everything that must agree.',
        from: 'Listovi su požutjeli.',
        answer: 'Lišće je požutjelo.',
        accept: ['Požutjelo je lišće.'],
        hint: 'The collective is ONE neuter whole: the auxiliary and the participle both change.',
        explanation:
          'Lišće je požutjelo. — list forms the collective lišće (st softens to šć). It is neuter singular, so the verb is je and the participle ends in -o.',
      },
      3,
      {
        type: 'listen',
        audio: 'Unučad joj dolazi svakog ljeta, a kad ode, kuća je tjednima neobično tiha.',
        q: 'What is the speaker saying?',
        options: [
          'Her grandson comes every summer and stays for weeks',
          'She visits her grandchildren every summer, and their house is very quiet',
          'Her grandchildren no longer come, and the house has been quiet for years',
          'Her grandchildren come every summer, and when they leave, the house is strangely quiet for weeks',
        ],
        correct: 3,
        explanation:
          'Unučad joj dolazi … kad ode — "grandchildren" is a feminine singular collective, so both verbs are singular, although many children are meant; tjednima — for weeks; neobično tiha — strangely quiet.',
      },
      {
        type: 'dictate',
        audio: 'Granje je popadalo po cesti.',
        answer: 'Granje je popadalo po cesti.',
        hint: 'Five words: "Branches have fallen all over the road."',
        explanation:
          'Granje je popadalo po cesti. — granje is a neuter singular collective, so the verb is je and the participle ends in -o.',
      },
    ],
  },

  // ── The accusative of time ─────────────────────────────────────────────────
  // The lesson has exactly four typed items and three of them ask for a
  // preposition (u, Na, za). They open the mix, in an order in which none has
  // been printed before it is asked for.
  'temporal-accusative': {
    text: {
      kind: 'dialogue',
      title: 'Obiteljski dogovor',
      lines: [
        {
          who: 'Ivana',
          hr: 'Tomislave, moramo se napokon dogovoriti. Ja sam kod tate cijelu godinu svaku večer, a ti navratiš svake druge nedjelje i misliš da je to dovoljno.',
          en: 'Tomislav, we finally have to come to an agreement. I have been at Dad’s every evening all year, and you drop by every other Sunday and think that is enough.',
        },
        {
          who: 'Tomislav',
          hr: 'Nije baš tako. Prošlu sam zimu bio kod njega tri tjedna zaredom, dok si ti bila na putu, i nijednom ti to nisam predbacio.',
          en: 'That is not quite so. Last winter I was at his place for three weeks in a row, while you were away, and I never once held it against you.',
        },
        {
          who: 'Ivana',
          hr: 'Tri tjedna u godini dana! Ja mu svako jutro nosim kruh i novine, a pred večer se vraćam da mu skuham večeru.',
          en: 'Three weeks in a whole year! I bring him bread and the newspaper every morning, and toward evening I come back to cook him dinner.',
        },
        {
          who: 'Tomislav',
          hr: 'Znam, i zahvalan sam ti. Ali ja radim u Splitu i ne mogu svaki petak sjesti u auto i voziti četiri sata.',
          en: 'I know, and I am grateful to you. But I work in Split, and I cannot get in the car every Friday and drive for four hours.',
        },
        {
          who: 'Ivana',
          hr: 'Ne tražim to. Tražim da ga ovo ljeto uzmeš k sebi na mjesec dana, da i ja jednom odem na odmor dulji od jednog vikenda.',
          en: 'I am not asking for that. I am asking you to take him in for a month this summer, so that I too can for once go on a vacation longer than one weekend.',
        },
        {
          who: 'Tomislav',
          hr: 'Na mjesec dana? Stan nam je malen, a Marta cijeli srpanj radi od kuće. Mogao bih ga uzeti na dva tjedna, i to tek u kolovozu.',
          en: 'For a month? Our apartment is small, and Marta is working from home all of July. I could take him for two weeks, and only in August at that.',
        },
        {
          who: 'Ivana',
          hr: 'Dva tjedna nisu odmor, nego predah. Uostalom, tata te svaki dan spominje; prošli je tjedan cijelo poslijepodne listao album s tvojim slikama.',
          en: 'Two weeks is not a vacation but a breather. Besides, Dad mentions you every day; last week he spent a whole afternoon leafing through the album with your pictures.',
        },
        {
          who: 'Tomislav',
          hr: 'Dobro, uvjerila si me. Razgovarat ću s Martom još večeras i javit ću ti se za dan-dva.',
          en: 'All right, you have convinced me. I will talk to Marta this very evening and get back to you in a day or two.',
        },
        {
          who: 'Ivana',
          hr: 'Nemoj za dan-dva, nego sutra. U ponedjeljak dolazi liječnik i moram mu reći tko će se ljeti brinuti za tatine lijekove.',
          en: 'Not in a day or two — tomorrow. The doctor is coming on Monday, and I have to tell him who will be taking care of Dad’s medications in the summer.',
        },
        {
          who: 'Tomislav',
          hr: 'Onda sutra. A na Veliku Gospu dolazimo svi k tebi pa ćemo zajedno ostati cijeli dugi vikend — to ti obećavam.',
          en: 'Tomorrow, then. And on the Feast of the Assumption we are all coming to your place, and we will stay together the whole long weekend — I promise you that.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the conversation: what exactly does Ivana ask of her brother?',
          options: [
            'To drive to their father’s every Friday',
            'To take their father in for a month this summer',
            'To move back from Split for a year',
            'To pay for a caregiver for two weeks',
          ],
          correct: 1,
          hint: 'She wants, for once, a vacation longer than a weekend.',
          explanation:
            'Tražim da ga ovo ljeto uzmeš k sebi na mjesec dana — she asks him to take their father in for a month this summer. He first offers two weeks in August.',
        },
        {
          q: 'Tomislav "je bio kod njega tri tjedna zaredom", with no preposition, but Ivana wants him to take their father "na mjesec dana". Why the difference?',
          options: [
            'Because tjedan is masculine and mjesec needs a preposition',
            'Because na is required whenever the word dana follows',
            'Because the first sentence is in the past and every future length takes na',
            'Because the bare accusative gives the time that actually passed, while na with the accusative gives the length a stay is planned to have',
          ],
          correct: 3,
          hint: 'One of the two stays has already happened; the other is only an intention.',
          explanation:
            'tri tjedna — the bare accusative measures a stretch that was really spent. na mjesec dana — na + accusative gives the intended length of a stay or an arrangement, whether or not it turns out that way. The tense is not the point: Otišao je na mjesec dana, a ostao je godinu.',
        },
        {
          type: 'transform',
          q: 'Say the same thing with the other standard construction — the genitive of time.',
          from: 'Ivana dolazi svaku večer.',
          answer: 'Ivana dolazi svake večeri.',
          accept: ['Svake večeri Ivana dolazi.', 'Ivana svake večeri dolazi.'],
          hint: 'Both words change case, and the noun is of the type that ends in a consonant yet is feminine.',
          explanation:
            'svaku večer and svake večeri are both standard; the genitive sounds a little more formal. večer is a feminine i-noun, so its genitive ends in -i: svake večeri.',
        },
        {
          type: 'transform',
          q: 'It was only the plan. Rewrite the sentence with "otišao je k Tomislavu" so that two weeks is the intended length of the stay.',
          from: 'Otac je bio kod Tomislava dva tjedna.',
          answer: 'Otac je otišao k Tomislavu na dva tjedna.',
          accept: [
            'Otac je k Tomislavu otišao na dva tjedna.',
            'Otac je na dva tjedna otišao k Tomislavu.',
            'Otac je otišao Tomislavu na dva tjedna.',
            'Na dva tjedna otac je otišao k Tomislavu.',
          ],
          hint: 'The measure itself does not change; one preposition before it turns time spent into time intended.',
          explanation:
            'Otac je otišao k Tomislavu na dva tjedna. — with a verb of going, na + accusative says how long the stay is meant to last. bio je dva tjedna, by contrast, reports the time that really passed.',
        },
        {
          type: 'type',
          q: 'Liječnik ne dolazi samo ovaj tjedan: dolazi ____ ponedjeljka. (every — the genitive construction)',
          answer: 'svakog',
          accept: ['svakoga'],
          hint: 'The noun is already in the genitive; the word for "every" must match it — masculine singular.',
          explanation:
            'svakog(a) ponedjeljka — the genitive of time, an equally standard and slightly more formal partner of the accusative svaki ponedjeljak. Note that neither takes a preposition.',
        },
      ],
    },
    mix: [
      9,
      11,
      10,
      {
        type: 'tf',
        q: '"Subotom idemo na tržnicu." and "U subotu idemo na tržnicu." say the same thing.',
        answer: false,
        hint: 'One of the two is about a single day, the other about a habit.',
        explanation:
          'False. u subotu (u + accusative) names one particular Saturday. The bare instrumental subotom turns the day into a habit — "on Saturdays" — and so says what svaku subotu and svake subote say.',
      },
      8,
      {
        type: 'sort',
        q: 'What kind of time does the phrase express?',
        groups: [
          'The time that actually passed',
          'The planned length',
          'Counting forward from now',
        ],
        items: [
          { hr: 'Živjela je u Irskoj godinu dana.', group: 0 },
          { hr: 'Otišla je u Irsku na godinu dana.', group: 1 },
          { hr: 'Vraća se za godinu dana.', group: 2 },
          { hr: 'Čekali smo dva sata.', group: 0 },
          { hr: 'Unajmili smo stan na tri mjeseca.', group: 1 },
          { hr: 'Film počinje za deset minuta.', group: 2 },
        ],
        explanation:
          'The bare accusative measures a stretch that really passed (godinu dana, dva sata). na + accusative gives a planned length (na godinu dana, na tri mjeseca). za + accusative counts forward from the present (za godinu dana, za deset minuta).',
      },
      6,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['cijelu srijedu', 'all day Wednesday'],
          ['u srijedu', 'on Wednesday'],
          ['srijedom', 'on Wednesdays'],
          ['do srijede', 'by Wednesday'],
          ['od srijede', 'from Wednesday on'],
        ],
        explanation:
          'The bare accusative fills the whole day (cijelu srijedu); u + accusative names the day as a point (u srijedu); the instrumental makes it a habit (srijedom); do and od, with the genitive, mark the limit and the starting point.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "We have not seen each other all year."',
        words: ['Nismo', 'se', 'vidjeli', 'cijelu', 'godinu.'],
        accept: [
          'Cijelu se godinu nismo vidjeli.',
          'Cijelu godinu se nismo vidjeli.',
          'Cijelu godinu nismo se vidjeli.',
        ],
        explanation:
          'Nismo se vidjeli cijelu godinu. — the length of time stands in the bare accusative, feminine here: cijelu godinu. If it opens the sentence, se follows its first word or the whole phrase.',
      },
      5,
      {
        type: 'transform',
        q: 'Make it a habit: say "every Sunday" instead of "on Sunday", with the bare accusative.',
        from: 'U nedjelju ručamo kod bake.',
        answer: 'Svaku nedjelju ručamo kod bake.',
        accept: [
          'Svake nedjelje ručamo kod bake.',
          'Ručamo kod bake svaku nedjelju.',
          'Kod bake ručamo svaku nedjelju.',
          'Ručamo kod bake svake nedjelje.',
          'Kod bake ručamo svake nedjelje.',
          'Svaku nedjelju kod bake ručamo.',
        ],
        hint: 'The preposition disappears; the word for "every" takes the case and gender of the day.',
        explanation:
          'Svaku nedjelju ručamo kod bake. — one particular day is u + accusative (u nedjelju); repetition needs no preposition at all: svaku nedjelju, or in the genitive svake nedjelje.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("See you on Thursday.")',
        words: ['Vidimo', 'se', 'u', 'četvrtku.'],
        wrong: 3,
        answer: 'četvrtak',
        hint: 'A day is a point in time, not a container: after u it does not take the case that months take.',
        explanation:
          'Vidimo se u četvrtak. — days, hours and seasons take u + accusative (u četvrtak, u osam sati, u proljeće); months and longer periods take u + locative (u svibnju).',
      },
      7,
      {
        type: 'listen',
        audio:
          'Otputovala je na tjedan dana, ali joj se ondje toliko svidjelo da je ostala cijelo ljeto i vraća se tek za mjesec dana.',
        q: 'What is the speaker saying?',
        options: [
          'She left a week ago, will stay all summer, and came back a month ago',
          'She went away for the whole summer but came back after a week',
          'She left intending to stay a week, stayed the whole summer, and will be back only a month from now',
          'She has been traveling for a month and will stay another week',
        ],
        correct: 2,
        explanation:
          'na tjedan dana — the planned length; ostala je cijelo ljeto — the time that actually passed, in the bare accusative; vraća se za mjesec dana — counting forward from now. Three time phrases, three different meanings.',
      },
      {
        type: 'dictate',
        audio: 'Svake godine ljetujemo na Hvaru.',
        answer: 'Svake godine ljetujemo na Hvaru.',
        hint: 'Five words: "Every year we spend the summer on Hvar."',
        explanation:
          'Svake godine ljetujemo na Hvaru. — with godina the genitive of time is the usual form: svake godine, prošle godine, iduće godine.',
      },
    ],
  },

  // ── Adversative clauses ────────────────────────────────────────────────────
  // All four typed items ask for a connector. They are placed so that none is
  // printed before it is asked for.
  'adversative-clauses': {
    text: {
      kind: 'dialogue',
      title: 'Sučeljavanje na radiju',
      lines: [
        {
          who: 'Voditelj',
          hr: 'Večeras razgovaramo o prijedlogu da se središte grada zatvori za automobile. Gospođo Kos, Vi ste prijedlog potpisali, a gospodin Barić mu se od početka protivi.',
          en: 'Tonight we are discussing the proposal to close the city center to cars. Ms. Kos, you signed the proposal, while Mr. Barić has opposed it from the start.',
        },
        {
          who: 'Kos',
          hr: 'Potpisala sam ga ne zato što ne volim automobile, nego zato što volim grad. Središte nije parkiralište, već mjesto na kojem ljudi žive.',
          en: 'I signed it not because I dislike cars but because I love the city. The center is not a parking lot but a place where people live.',
        },
        {
          who: 'Barić',
          hr: 'Lijepo zvuči, ali trgovci u središtu žive od kupaca, a kupci dolaze automobilom. Zatvorite li ulice, zatvorit ćete i trgovine.',
          en: 'It sounds nice, but the store owners in the center live off their customers, and the customers come by car. If you close the streets, you will close the stores as well.',
        },
        {
          who: 'Kos',
          hr: 'Iskustvo drugih gradova govori suprotno. U Ljubljani promet trgovina u središtu nije pao, nego je porastao, premda onamo više nitko ne dolazi automobilom.',
          en: 'The experience of other cities says the opposite. In Ljubljana, sales at the stores in the center did not fall but rose, even though nobody comes there by car anymore.',
        },
        {
          who: 'Barić',
          hr: 'Ljubljana ima uređen javni prijevoz, dok naši autobusi voze svakih pola sata. Vi nudite zabranu, a ne nudite zamjenu.',
          en: 'Ljubljana has well-organized public transit, whereas our buses run every half hour. You are offering a ban, but you are not offering an alternative.',
        },
        {
          who: 'Kos',
          hr: 'To nije točno. Prijedlog predviđa dvije nove tramvajske linije; međutim, o njima gospodin Barić uporno šuti.',
          en: 'That is not true. The proposal provides for two new streetcar lines; Mr. Barić, however, persistently keeps quiet about them.',
        },
        {
          who: 'Barić',
          hr: 'Ne šutim, nego pitam tko će ih platiti. Linije su obećane još prije deset godina, no do danas nije položen ni metar tračnica.',
          en: 'I am not keeping quiet; I am asking who will pay for them. The lines were promised ten years ago, yet to this day not a single meter of track has been laid.',
        },
        {
          who: 'Voditelj',
          hr: 'Dopustite da vas prekinem. Slažete li se barem u tome da je zrak u središtu loš?',
          en: 'Allow me to interrupt you. Do you at least agree that the air in the center is bad?',
        },
        {
          who: 'Barić',
          hr: 'U tome se slažemo, ali ne i u lijeku. Kolegica bi automobile zabranila; ja bih ih pak postupno zamijenio električnima.',
          en: 'On that we agree, but not on the remedy. My colleague would ban cars; I, for my part, would gradually replace them with electric ones.',
        },
        {
          who: 'Kos',
          hr: 'Postupno znači nikada. Ipak, drago mi je što smo se barem u dijagnozi složili — a o lijeku neka odluče građani na referendumu.',
          en: 'Gradually means never. Still, I am glad that we have at least agreed on the diagnosis — and as for the remedy, let the citizens decide in a referendum.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the debate: on what do the two guests agree in the end?',
          options: [
            'That the center should be closed to cars',
            'That the new streetcar lines will be built',
            'That the air in the center is bad',
            'That a referendum would be a waste of money',
          ],
          correct: 2,
          hint: 'Ms. Kos calls it "the diagnosis".',
          explanation:
            'They agree only on the diagnosis — that the air in the center is bad (U tome se slažemo, ali ne i u lijeku). On the remedy they stay opposed: a ban, or a gradual switch to electric cars.',
        },
        {
          q: 'Ms. Kos says: "Središte nije parkiralište, već mjesto na kojem ljudi žive." Why "već" — and could "ali" stand there?',
          options: [
            'već is only a more elegant word for ali; either would do',
            'The first part denies something and the second puts the right thing in its place, which calls for već or nego; ali would not fit',
            'već is required because the second part contains a relative clause',
            'ali is impossible because the two parts have the same subject',
          ],
          correct: 1,
          hint: 'What does the first half of her sentence do to the word "parkiralište"?',
          explanation:
            '"Not X but Y": when a denial is corrected, Croatian uses nego or već (već is a little more formal). ali does something else — it adds a fact that runs against expectation — so "nije parkiralište, ali mjesto…" is not possible.',
        },
        {
          type: 'transform',
          q: 'Make one sentence of the two, so that what is denied is replaced by what is true.',
          from: 'Kos ne želi zabraniti bicikle. Kos želi zabraniti automobile.',
          answer: 'Kos ne želi zabraniti bicikle, nego automobile.',
          accept: [
            'Kos ne želi zabraniti bicikle, već automobile.',
            'Kos ne želi zabraniti bicikle, nego želi zabraniti automobile.',
            'Kos ne želi zabraniti bicikle, već želi zabraniti automobile.',
            'Kos ne želi zabraniti bicikle nego automobile.',
            'Kos ne želi zabraniti bicikle već automobile.',
          ],
          hint: 'After a denial Croatian has two connectors for "but rather"; the words that would be repeated can simply be left out.',
          explanation:
            'Kos ne želi zabraniti bicikle, nego automobile. — a correction after a negation takes nego or već, with a comma before it. Everything the two halves share is said only once.',
        },
        {
          type: 'transform',
          q: 'Make one sentence of the two with the connector that means "whereas".',
          from: 'Autobusi voze rijetko. Tramvaji voze svakih pet minuta.',
          answer: 'Autobusi voze rijetko, dok tramvaji voze svakih pet minuta.',
          accept: [
            'Autobusi voze rijetko, a tramvaji voze svakih pet minuta.',
            'Autobusi voze rijetko, a tramvaji svakih pet minuta.',
            'Autobusi voze rijetko, dok tramvaji svakih pet minuta.',
          ],
          hint: 'It is a word you know as a conjunction of time; here it compares two parallel facts, and a comma stands before it.',
          explanation:
            'Autobusi voze rijetko, dok tramvaji voze svakih pet minuta. — contrastive dok sets two parallel facts against each other, as Mr. Barić does with Ljubljana and his own city. a would do the same more plainly.',
        },
        {
          type: 'type',
          q: 'Kos tvrdi da zabrana neće naškoditi trgovcima. ____, kaže, donijet će im nove kupce. (On the contrary — one word)',
          answer: 'Naprotiv',
          accept: ['Dapače'],
          hint: 'Not međutim, which merely limits what was said: you need the adverb that turns the previous claim into its opposite.',
          explanation:
            'Naprotiv — "on the contrary". It opens a new sentence and corrects the statement just made, where međutim would only set a limit to it. It is set off by a comma.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In "Stariji je nego što izgleda." a comma should be written before "nego", as before every "nego".',
        answer: false,
        hint: 'Is anything being denied and corrected in this sentence?',
        explanation:
          'False. Only the nego that corrects a denial is adversative and takes a comma: Nije star, nego mlad. In a comparison (stariji nego…, više nego…) nego is not adversative, and no comma is written.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Unlike that, it is quieter here.")',
        words: ['Za', 'razliku', 'od', 'tome', 'ovdje', 'je', 'mirnije.'],
        wrong: 3,
        answer: 'toga',
        hint: 'Look at the little word in front of it: which case does that preposition always take?',
        explanation:
          'Za razliku od toga ovdje je mirnije. — the connecting phrase za razliku od toga ("unlike that") is built on od, which takes the genitive: toga. The dative tome belongs to a different phrase, nasuprot tome ("in contrast").',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "I will cook, and you, for your part, wash the dishes."',
        words: ['Ja', 'ću', 'kuhati,', 'a', 'ti', 'pak', 'operi', 'suđe.'],
        accept: ['Ja ću kuhati, a ti pak suđe operi.', 'Ja ću kuhati, a suđe pak operi ti.'],
        explanation:
          'Ja ću kuhati, a ti pak operi suđe. — pak ("for your part, on the other hand") never opens its clause: it stands after the first stressed word, here ti.',
      },
      11,
      {
        type: 'sort',
        q: 'A connector is missing in each sentence (…). What does it do there?',
        groups: [
          'Sets two facts side by side',
          'Adds a fact that goes against expectation',
          'Corrects what was just denied',
        ],
        items: [
          { hr: 'Ivan radi u Zagrebu, … Marija u Splitu.', group: 0 },
          { hr: 'Bio je bolestan, … je došao na posao.', group: 1 },
          { hr: 'Nije riječ o novcu, … o poštenju.', group: 2 },
          { hr: 'Ja čitam, … ti gledaš televiziju.', group: 0 },
          { hr: 'Stan je malen, … je vrlo svijetao.', group: 1 },
          { hr: 'Ne putujemo vlakom, … autobusom.', group: 2 },
        ],
        explanation:
          'Two facts side by side, usually with a change of subject, take a (Ivan…, a Marija; Ja čitam, a ti…). A fact that runs against expectation takes ali (bolestan, ali je došao; malen, ali je svijetao). After a denial the correction takes nego or već (nije o novcu, već o poštenju; ne vlakom, nego autobusom).',
      },
      2,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['međutim', 'however'],
          ['ipak', 'nevertheless, all the same'],
          ['pak', 'for his or her part, on the other hand'],
          ['doduše', 'admittedly, to be sure'],
          ['umjesto toga', 'instead'],
        ],
        explanation:
          'These are not conjunctions but adverbs and particles that color a contrast: međutim limits what was said, ipak holds a result against the odds, pak turns to the other party, doduše concedes a point, umjesto toga names the replacement.',
      },
      {
        type: 'transform',
        q: 'Replace "ali" with "a". Something else must then change, because of the short words.',
        from: 'Ponudili su mu posao, ali ga je odbio.',
        answer: 'Ponudili su mu posao, a on ga je odbio.',
        accept: ['Ponudili su mu posao, a odbio ga je.'],
        hint: 'After this connector the short words have nothing to lean on. Give them a stressed word — a pronoun, or the participle itself.',
        explanation:
          'Ponudili su mu posao, a on ga je odbio. — clitics cannot follow a directly, so a stressed word must come first: the subject pronoun (a on ga je odbio) or the participle (a odbio ga je). The same holds after no; after ali, nego and već no such change is needed.',
      },
      5,
      {
        type: 'listen',
        audio:
          'Obećao je da će doći na vrijeme; međutim, pojavio se tek pred kraj sastanka, i to ne da bi se ispričao, nego da bi otišao prvi.',
        q: 'What is the speaker saying?',
        options: [
          'He came on time, apologized, and stayed until the end',
          'He promised to be on time, yet turned up only near the end — not to apologize, but to be the first to leave',
          'He did not come at all, but sent an apology before the meeting ended',
          'He came late because he wanted to apologize in person',
        ],
        correct: 1,
        explanation:
          'međutim sets the fact against the promise: he showed up only toward the end of the meeting (tek pred kraj sastanka). ne da bi se ispričao, nego da bi otišao prvi — the denied purpose is replaced by the real one, with nego after the negation.',
      },
      {
        type: 'dictate',
        audio: 'Nije umoran, nego gladan.',
        answer: 'Nije umoran, nego gladan.',
        accept: ['Nije umoran nego gladan.'],
        hint: 'Four words: "He is not tired but hungry."',
        explanation:
          'Nije umoran, nego gladan. — what is denied (umoran) is replaced by what is true (gladan); the connector after a negation is nego, with a comma before it.',
      },
    ],
  },

  // ── The comma: the basics ──────────────────────────────────────────────────
  // Typed answers are compared without their SURROUNDING punctuation only, so a
  // comma inside a produced sentence does count. No exercise here asks the
  // learner only to add commas: every produced answer changes words too.
  'comma-basics': {
    text: {
      kind: 'text',
      title: 'Govor na ispraćaju u mirovinu',
      lines: [
        {
          hr: 'Draga Vesna, drage kolegice i kolege, dopustite mi da kažem nekoliko riječi prije nego što podignemo čaše.',
          en: 'Dear Vesna, dear colleagues, allow me to say a few words before we raise our glasses.',
        },
        {
          hr: 'Vesna Marković, naša dugogodišnja knjižničarka, došla je u ovu školu prije trideset i četiri godine, mlada, plaha i, kako sama kaže, uvjerena da će ostati najviše godinu dana.',
          en: 'Vesna Marković, our longtime librarian, came to this school thirty-four years ago, young, shy, and, as she herself says, convinced that she would stay a year at most.',
        },
        {
          hr: 'Nije ostala godinu, nego cijeli radni vijek, a mi smo, na svoju sreću, to vrijeme proveli uz nju.',
          en: 'She stayed not a year but her entire working life, and we, to our good fortune, spent that time alongside her.',
        },
        {
          hr: 'Knjižnica koju je zatekla imala je tri police, jedan stol i katalog pisan rukom; ona koju ostavlja ima čitaonicu, računala i više od dvadeset tisuća knjiga.',
          en: 'The library she found had three shelves, one table, and a handwritten catalog; the one she is leaving has a reading room, computers, and more than twenty thousand books.',
        },
        {
          hr: 'Učenici su je se, priznajmo, pomalo bojali, ali su joj se uvijek vraćali jer je znala koju knjigu treba dati kojemu djetetu.',
          en: 'The students, let us admit, were a little afraid of her, but they always came back to her because she knew which book to give to which child.',
        },
        {
          hr: 'Nije galamila niti je kažnjavala; dovoljno je bilo da podigne obrve i u čitaonici bi zavladala tišina.',
          en: 'She neither shouted nor punished; it was enough for her to raise her eyebrows, and silence would fall in the reading room.',
        },
        {
          hr: 'Kad smo prije nekoliko godina ostali bez grijanja, ona je, dakako, prva donijela pokrivače, čaj i kolače pa su djeca u knjižnici sjedila dulje nego u učionicama.',
          en: 'When we were left without heating a few years ago, she was, of course, the first to bring blankets, tea, and cookies, so the children sat in the library longer than in the classrooms.',
        },
        {
          hr: 'Vesna, znam da ne voliš velike riječi, ali večeras ih moraš otrpjeti.',
          en: 'Vesna, I know you do not like big words, but tonight you have to put up with them.',
        },
        {
          hr: 'Hvala ti na svakoj preporučenoj knjizi, na svakoj opomeni i na svakom osmijehu; hvala ti, ukratko, što si od jedne sobe s knjigama napravila srce škole.',
          en: 'Thank you for every book you recommended, for every reprimand, and for every smile; thank you, in short, for turning a room with books into the heart of the school.',
        },
        {
          hr: 'A sada, dragi prijatelji, čaše u ruke: za Vesnu, za knjige i za sve godine koje su pred njom!',
          en: 'And now, dear friends, glasses in hand: to Vesna, to books, and to all the years that lie ahead of her!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the speech: how long did Vesna expect to stay at the school when she first came?',
          options: [
            'Her entire working life',
            'Thirty-four years',
            'Until the library got a reading room',
            'A year at most',
          ],
          correct: 3,
          hint: 'The speaker reports it in her own words — and then corrects it in the next sentence.',
          explanation:
            'She came uvjerena da će ostati najviše godinu dana — convinced she would stay a year at most. The next sentence corrects that: Nije ostala godinu, nego cijeli radni vijek.',
        },
        {
          q: 'The speaker writes a comma in "Nije ostala godinu, nego cijeli radni vijek" but none in "sjedila dulje nego u učionicama". Why?',
          options: [
            'Because the first nego follows a short word and the second a long one',
            'Because the first nego corrects a denial and is adversative, while the second only compares',
            'Because a comma is written before nego only at the beginning of a text',
            'Because the second sentence already contains too many commas',
          ],
          correct: 1,
          hint: 'In one of the two sentences something is denied first. In the other there is a comparative.',
          explanation:
            'A comma goes before the adversative connectors — a, ali, nego, već, no. nego is adversative when it replaces what was denied (nije godinu, nego vijek). After a comparative (dulje nego…) it merely compares, and no comma is written.',
        },
        {
          type: 'transform',
          q: 'Begin the sentence with the "kad" clause. (In writing, the new order also decides about the comma.)',
          from: 'U čitaonici bi zavladala tišina kad bi podigla obrve.',
          answer: 'Kad bi podigla obrve, u čitaonici bi zavladala tišina.',
          accept: [
            'Kad bi podigla obrve, zavladala bi tišina u čitaonici.',
            'Kad bi podigla obrve, tišina bi zavladala u čitaonici.',
            'Kad bi podigla obrve, u čitaonici bi tišina zavladala.',
            'Kad bi podigla obrve, zavladala bi u čitaonici tišina.',
          ],
          hint: 'Move the whole dependent clause, with its own bi, to the front; the main clause keeps its bi in second place.',
          explanation:
            'Kad bi podigla obrve, u čitaonici bi zavladala tišina. — a dependent clause that follows its main clause is normally not set off, but one that comes first (inversion) is followed by a comma.',
        },
        {
          type: 'type',
          q: 'Hvala ti, draga naša ____, na svakoj knjizi. (knjižničarka — in the form used to address her)',
          answer: 'knjižničarko',
          hint: 'Address has a case of its own, set off by commas; in a feminine noun like this one only the final vowel changes.',
          explanation:
            'draga naša knjižničarko — when a person is addressed, a feminine noun in -a usually ends in -o (knjižničarko, like ženo, sestro). The whole address is set off: a comma before it and a comma after it.',
        },
        {
          type: 'transform',
          q: 'Make one sentence with a list: say the verb once.',
          from: 'Na ispraćaj su došli učenici. Došli su roditelji. Došli su bivši kolege.',
          answer: 'Na ispraćaj su došli učenici, roditelji i bivši kolege.',
          accept: [
            'Na ispraćaj su došli učenici, roditelji te bivši kolege.',
            'Učenici, roditelji i bivši kolege došli su na ispraćaj.',
          ],
          hint: 'The members of a list are separated from one another — except the last two, which a conjunction joins by itself.',
          explanation:
            'Na ispraćaj su došli učenici, roditelji i bivši kolege. — commas separate the items of a list, but none is written before the i that joins the last two: Croatian has no serial comma.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In "Ana je kuhala i Marko je prao suđe." a comma is required before "i", because the two clauses have different subjects.',
        answer: false,
        hint: 'Does this conjunction behave differently between two clauses than between two words of a list?',
        explanation:
          'False. i joins without a comma whether it links two words or two whole clauses, and a change of subject makes no difference: Ana je kuhala i Marko je prao suđe.',
      },
      11,
      {
        type: 'sort',
        q: 'Is a comma written at the marked place ( | )?',
        groups: ['Yes, a comma', 'No comma'],
        items: [
          { hr: 'Skupo je | ali vrijedi.', group: 0 },
          { hr: 'Bolje je kasno | nego nikad.', group: 1 },
          { hr: 'Nije zvao | nego je pisao.', group: 0 },
          { hr: 'Kupili smo kruh | i mlijeko.', group: 1 },
          { hr: 'Hvala | mama.', group: 0 },
          { hr: 'Ostao je kod kuće | jer je bio bolestan.', group: 1 },
          { hr: 'Kad dođeš | nazovi me.', group: 0 },
          { hr: 'Ne znam | hoće li doći.', group: 1 },
        ],
        explanation:
          'A comma stands before adversative ali and nego (but not before nego in a comparison), around a person addressed, and after a dependent clause that comes first (Kad dođeš, nazovi me). None is written before i in simple joining, or before a dependent clause in its normal place after the main clause.',
      },
      9,
      {
        type: 'match',
        q: 'Why is there a comma? Match each sentence to the reason.',
        pairs: [
          ['Ana, požuri!', 'a person is addressed'],
          ['Uh, što je vruće!', 'an interjection'],
          ['Ne, hvala.', 'an answer word'],
          ['To je, dakako, šala.', 'an inserted comment'],
          ['Moj brat, liječnik, živi u Rijeci.', 'an added description of a noun'],
        ],
        explanation:
          'The person addressed, an interjection, and an answering da or ne are each set off from the sentence. An inserted comment and a description added to a noun sit between TWO commas — whatever is opened must be closed.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("Dear Mr. Principal, thank you for your reply.")',
        words: ['Poštovani', 'gospodin', 'ravnatelju,', 'hvala', 'Vam', 'na', 'odgovoru.'],
        wrong: 1,
        answer: 'gospodine',
        hint: 'Everything that addresses the person stands in the same case — the title too.',
        explanation:
          'Poštovani gospodine ravnatelju, hvala Vam na odgovoru. — each noun of the address is in the case of address: gospodine, ravnatelju. The whole address is then set off by a comma.',
      },
      10,
      {
        type: 'transform',
        q: 'Make one sentence: turn the first sentence into a description placed right after the name.',
        from: 'Slavoljub Penkala bio je izumitelj. Slavoljub Penkala živio je u Zagrebu.',
        answer: 'Slavoljub Penkala, izumitelj, živio je u Zagrebu.',
        accept: ['Izumitelj Slavoljub Penkala živio je u Zagrebu.'],
        hint: 'The description loses its verb and follows the name — and what is opened there must also be closed.',
        explanation:
          'Slavoljub Penkala, izumitelj, živio je u Zagrebu. — a description added after a noun that is already identified stands between two commas. Placed before the name (izumitelj Slavoljub Penkala) it is an ordinary attribute and takes none.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "That is, in my opinion, a big mistake."',
        words: ['To', 'je,', 'po', 'mom', 'mišljenju,', 'velika', 'pogreška.'],
        accept: [
          'Po mom mišljenju, to je velika pogreška.',
          'To je velika pogreška, po mom mišljenju.',
          'Po mom mišljenju, velika je to pogreška.',
          'Velika je to pogreška, po mom mišljenju.',
        ],
        explanation:
          'To je, po mom mišljenju, velika pogreška. — an inserted phrase is set off on both sides when it stands inside the sentence. At the very beginning or end one comma is enough.',
      },
      4,
      {
        type: 'listen',
        audio: 'Ne, hvala, ne bih kavu, nego čašu vode, ako nije problem.',
        q: 'What is the speaker saying?',
        options: [
          'The speaker would like a coffee and a glass of water',
          'The speaker declines the coffee and asks for a glass of water instead',
          'The speaker says that coffee is no problem',
          'The speaker thanks the host for the coffee and the water',
        ],
        correct: 1,
        explanation:
          'Ne, hvala — an answering ne, set off by a comma; ne bih kavu, nego čašu vode — the coffee is declined and replaced, with a comma before nego; ako nije problem — if it is no trouble.',
      },
      {
        type: 'dictate',
        audio: 'Umorna sam, ali idem dalje.',
        answer: 'Umorna sam, ali idem dalje.',
        hint: 'Five words: "I am tired, but I am going on." (a woman speaking) Punctuate it as you would in writing.',
        explanation:
          'Umorna sam, ali idem dalje. — the second clause runs against what the first leads you to expect, so the connector is ali, and a comma is written before it.',
      },
    ],
  },
};
