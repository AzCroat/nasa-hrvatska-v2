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
};
