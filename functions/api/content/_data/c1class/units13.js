// ─── C1 lessons in class order — Unit 13 (lessons 61–65) ─────────────────────
// Same shape and rules as units01-02.js:
//   text — the dialogue the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Dialect forms appear ONLY where the item itself labels them: a line spoken by
// a named regional speaker, a sort into regions, a match of regional word →
// standard word, a sentence introduced as "Baka says…". No bare ekavian form is
// printed anywhere, and language-identity prints no Serbian form at all.
// The dialogues avoid the exact forms the existing typed items ask for, and each
// typed item stands before anything in the mix that prints its answer.

export const CLASS_C1_U13 = {
  // ── Scientific and technical Croatian ──────────────────────────────────────
  'science-technology': {
    text: {
      kind: 'dialogue',
      title: 'Nacrt članka na mentoričinu stolu',
      lines: [
        {
          who: 'Mentorica',
          hr: 'Luka, pročitala sam nacrt članka. Mjerenja su besprijekorna, ali stil nije: u poglavlju o metodama pišeš „izmjerili smo tlak”, a časopis kojemu rad šaljemo traži bezličan izričaj — „tlak je izmjeren”.',
          en: 'Luka, I have read the draft of the article. The measurements are flawless, but the style is not: in the methods section you write “we measured the pressure,” whereas the journal we are sending the paper to requires an impersonal style — “the pressure was measured.”',
        },
        {
          who: 'Luka',
          hr: 'Imate pravo, to mi je ostalo iz laboratorijskog dnevnika. Prepravit ću: „Tlak je izmjeren tlakomjerom u tri navrata, a temperatura je tijekom cijelog pokusa iznosila 21,5 °C.”',
          en: 'You are right, that carried over from my lab notebook. I will rewrite it: “The pressure was measured with a pressure gauge on three occasions, and the temperature throughout the experiment was 21.5 °C.”',
        },
        {
          who: 'Mentorica',
          hr: 'Tako već zvuči kao znanost. I pazi na decimalni zarez: u tablici 2 na tri mjesta stoji točka, a to će recenzent odmah primijetiti. U hrvatskom se tekstu piše 0,5 posto, a ne onako kako ti je program sam ispisao.',
          en: 'Now that sounds like science. And watch the decimal comma: in Table 2 there is a point in three places, and a reviewer will notice that at once. In a Croatian text you write 0,5 posto, not what the software printed out for you by itself.',
        },
        {
          who: 'Luka',
          hr: 'Ispravit ću i to. Mučilo me, doduše, nešto drugo: smijem li pisati „hidrogen” i „nitrogen”, kako stoji u engleskim izvorima, ili moram upotrijebiti naše nazive?',
          en: 'I will correct that too. Something else was bothering me, though: may I write “hidrogen” and “nitrogen,” as the English sources have it, or do I have to use our own terms?',
        },
        {
          who: 'Mentorica',
          hr: 'U hrvatskoj se kemiji piše isključivo vodik i dušik; tuđi bi nazivi djelovali kao loš prijevod. Ti su se nazivi ustalili još u devetnaestom stoljeću i odavno su jedini stručni. Drukčije je s parovima poput „pokus” i „eksperiment”: ondje su oba naziva dobra, samo budi dosljedan.',
          en: 'In Croatian chemistry one writes only vodik and dušik; the foreign terms would read like a bad translation. Those terms became established back in the nineteenth century and have long been the only technical ones. It is different with pairs like “pokus” and “eksperiment”: there both terms are fine, just be consistent.',
        },
        {
          who: 'Luka',
          hr: 'A opis uzorkovanja? Napisao sam: „Uzeli smo uzorke mora na dvanaest postaja između Raba i Paga.”',
          en: 'And the description of the sampling? I wrote: “We took samples of seawater at twelve stations between Rab and Pag.”',
        },
        {
          who: 'Mentorica',
          hr: 'Okreni rečenicu tako da uzorci budu subjekt: „Uzorci su prikupljeni na dvanaest postaja.” Zatim navedi od čega se postupak sastojao — od uzorkovanja, analize i obrade podataka — jer čitatelj mora moći ponoviti svaki korak.',
          en: 'Turn the sentence around so that the samples are the subject: “The samples were collected at twelve stations.” Then state what the procedure consisted of — sampling, analysis and data processing — because the reader must be able to repeat every step.',
        },
        {
          who: 'Luka',
          hr: 'Razumijem. Najviše se ipak bojim zaključka. Smijem li napisati „dokazali smo da se more zagrijava”?',
          en: 'I understand. What I am most afraid of, though, is the conclusion. May I write “we have proved that the sea is warming”?',
        },
        {
          who: 'Mentorica',
          hr: 'Nipošto. Jedna sezona mjerenja ništa ne dokazuje. Napiši: „Iz rezultata proizlazi da je površinska temperatura u promatranom razdoblju bila viša od višegodišnjeg prosjeka.” Znanstvenik tvrdi točno onoliko koliko mu podaci dopuštaju, ni riječi više.',
          en: 'Absolutely not. One season of measurements proves nothing. Write: “It follows from the results that the surface temperature in the period observed was higher than the multi-year average.” A scientist claims exactly as much as the data allow, and not a word more.',
        },
        {
          who: 'Luka',
          hr: 'Onda ću i naslov ublažiti. Usput, je li „dubinomjer” prava riječ ili smo je sami izmislili? Tako u laboratoriju zovemo uređaj kojim mjerimo dubinu.',
          en: 'Then I will tone down the title as well. By the way, is “dubinomjer” a real word, or did we make it up ourselves? That is what we call the device we measure depth with in the lab.',
        },
        {
          who: 'Mentorica',
          hr: 'Riječ postoji, a i da ne postoji, svatko bi je razumio: dubina i -mjer, kao toplomjer ili brzinomjer. U tome i jest prednost naših složenica — čitaju se same.',
          en: 'The word exists, and even if it did not, everybody would understand it: depth plus -mjer, like toplomjer or brzinomjer. That is precisely the advantage of our compounds — they read themselves.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is the mentor’s objection to the conclusion Luka proposes?',
          options: [
            'It uses a borrowed term where a native one exists',
            'It claims more than one season of measurements can support',
            'Its numbers are written with a decimal point',
            'It names the measuring instrument incorrectly',
          ],
          correct: 1,
          hint: 'Recall her sentence about what a scientist is allowed to claim.',
          explanation:
            'Jedna sezona mjerenja ništa ne dokazuje — one season proves nothing. She replaces “dokazali smo” (we have proved) with the cautious “iz rezultata proizlazi” (it follows from the results) and limits the claim to the period observed.',
        },
        {
          q: 'In the mentor’s model sentence, “Iz rezultata proizlazi da je površinska temperatura … bila viša …”, why is the verb singular although “rezultata” is plural?',
          options: [
            'Because “rezultata” is a genitive singular here',
            'Because scientific style avoids plural verbs altogether',
            'Because the subject is the whole da-clause; “iz rezultata” is only the prepositional phrase the verb governs',
            'Because the verb has no plural forms',
          ],
          correct: 2,
          hint: 'Ask “što proizlazi?” — and see what answers that question.',
          explanation:
            'proizlaziti iz + genitive: “iz rezultata” (genitive plural) says where the conclusion comes from, but it is not the subject. What “follows” is the entire clause da je temperatura bila viša — and a clause as subject takes the third person singular. With a plural noun as subject the verb would be plural: Iz rezultata proizlaze dva zaključka.',
        },
        {
          type: 'type',
          q: 'Luka rewrites another notebook entry for the paper: Udio soli ____ 3,8 posto. (“was”, said with the verb scientific prose uses for a quantity — past tense)',
          answer: 'je iznosio',
          accept: ['iznosio je'],
          hint: 'Luka uses this verb for the temperature in his rewritten sentence, with a feminine subject. Here the subject is masculine.',
          explanation:
            'Udio soli je iznosio 3,8 posto. — iznositi is the verb for “to amount to”; the participle agrees with udio (masculine), just as iznosila agreed with temperatura. In careful writing you will also meet the order Udio soli iznosio je…',
        },
        {
          type: 'transform',
          q: 'Rewrite the sentence in the impersonal style the journal requires: make the samples the subject and use the passive participle.',
          from: 'Uzorke smo analizirali u laboratoriju.',
          answer: 'Uzorci su analizirani u laboratoriju.',
          accept: [
            'Uzorci su u laboratoriju analizirani.',
            'U laboratoriju su analizirani uzorci.',
            'U laboratoriju su uzorci analizirani.',
            'Analizirani su uzorci u laboratoriju.',
          ],
          hint: 'The object becomes the subject, so its case changes; the auxiliary and the participle then agree with it in number and gender.',
          explanation:
            'Uzorci su analizirani u laboratoriju. — the accusative uzorke becomes the nominative uzorci, and smo analizirali becomes su analizirani (masculine plural). The researchers disappear from the sentence; what was done stays.',
        },
        {
          type: 'type',
          q: 'The lab also has a device that measures humidity (vlaga). By the same pattern as the depth gauge, it is called a ____.',
          answer: 'vlagomjer',
          hint: 'Look at how the dialogue’s last line takes the word for the depth gauge apart, and build this one the same way.',
          explanation:
            'vlagomjer — vlag(a) + the linking vowel -o- + -mjer, “humidity-measurer”, a hygrometer. The pattern is fully productive: toplomjer, tlakomjer, brzinomjer, dubinomjer.',
        },
      ],
    },
    mix: [
      {
        type: 'fix',
        q: 'One word is not standard Croatian. Tap it. (“Air consists of nitrogen and other gases.”)',
        words: ['Zrak', 'se', 'sastoji', 'iz', 'dušika', 'i', 'drugih', 'plinova.'],
        wrong: 3,
        answer: 'od',
        hint: 'The verb is right and the case is right. Which small word does this verb take when it lists the parts of a whole?',
        explanation:
          'Zrak se sastoji od dušika i drugih plinova. — sastojati se takes od + genitive. “Sastojati se iz” is heard, but the standard does not accept it; iz + genitive belongs to a different verb of this register, proizlaziti.',
      },
      8,
      {
        type: 'tf',
        q: 'A “zemljomjer” is a person, not an instrument, even though the word ends in -mjer.',
        answer: true,
        hint: 'Split the word. Could one handy device “measure the land” — or is that somebody’s profession?',
        explanation:
          'True. -mjer usually names an instrument (toplomjer, tlakomjer), but zemljomjer is the older native word for a land surveyor (today mostly geodet). Decomposing a compound gets you close — “something or someone that measures land” — and the context or a dictionary settles the rest.',
      },
      9,
      {
        type: 'match',
        q: 'Read each compound by its parts and match it to its meaning.',
        pairs: [
          ['tlakomjer', 'pressure gauge'],
          ['brzinomjer', 'speedometer'],
          ['životopis', 'résumé'],
          ['vodovod', 'water mains'],
          ['dalekovod', 'power line'],
        ],
        explanation:
          '-mjer measures (tlak — pressure, brzina — speed), -pis describes in writing (život — a life), and -vod leads or conducts: vodovod conducts water, dalekovod conducts electricity far (daleko).',
      },
      10,
      1,
      {
        type: 'sort',
        q: 'Where does each sentence belong?',
        groups: ['A scientific article', 'A lab notebook or a conversation'],
        items: [
          { hr: 'Mjerenja su provedena u svibnju.', group: 0 },
          { hr: 'Izmjerili smo to jučer popodne.', group: 1 },
          { hr: 'Razlika između skupina nije statistički značajna.', group: 0 },
          { hr: 'Mislim da smo negdje pogriješili.', group: 1 },
          { hr: 'Uzorci su pohranjeni pri 4 °C.', group: 0 },
          { hr: 'Pa, pokus nam opet nije uspio.', group: 1 },
        ],
        explanation:
          'The article reports what was done and found without naming who did it: passive participles (su provedena, su pohranjeni) and flat statements of fact. The first person (izmjerili smo, mislim), the particle pa and the dative of the person affected (nam) belong to the notebook and to talk.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: “It turned out that the temperature does not depend on depth.”',
        words: ['Pokazalo', 'se', 'da', 'temperatura', 'ne', 'ovisi', 'o', 'dubini.'],
        accept: ['Pokazalo se da temperatura o dubini ne ovisi.'],
        explanation:
          'Pokazalo se da temperatura ne ovisi o dubini. — an impersonal opening (neuter pokazalo, with se in second position), then the finding in a da-clause. ovisiti takes o + locative: o dubini.',
      },
      0,
      {
        type: 'transform',
        q: 'Say the same with the verb “proizlaziti”, as a paper would. Begin with “Iz…”.',
        from: 'Podaci pokazuju da je hipoteza točna.',
        answer: 'Iz podataka proizlazi da je hipoteza točna.',
        accept: [
          'Iz podataka proizlazi da je točna hipoteza.',
          'Iz podataka proizlazi kako je hipoteza točna.',
        ],
        hint: 'Two things change: the case of the noun after the preposition (a vowel reappears in this plural form), and the number of the verb — the data are no longer its subject.',
        explanation:
          'Iz podataka proizlazi da je hipoteza točna. — iz takes the genitive, and the genitive plural of podatak is podataka. The subject of proizlazi is now the da-clause, so the verb is singular.',
      },
      {
        type: 'listen',
        audio:
          'Budući da su odstupanja unutar dopuštene pogreške, iz mjerenja proizlazi da se sastav uzorka tijekom skladištenja nije promijenio.',
        q: 'What does the speaker conclude?',
        options: [
          'The sample changed in storage because of a measurement error',
          'The deviations are within the permitted error, so the composition of the sample did not change in storage',
          'The measurements must be repeated because the deviations are too large',
          'Samples of this kind may not be stored at all',
        ],
        correct: 1,
        explanation:
          'odstupanja unutar dopuštene pogreške — deviations within the permitted error; sastav uzorka — the composition of the sample; tijekom skladištenja — during storage. The conclusion is introduced with iz mjerenja proizlazi da…, the cautious formula of scientific prose.',
      },
      {
        type: 'dictate',
        audio: 'Pokus je ponovljen u jednakim uvjetima.',
        answer: 'Pokus je ponovljen u jednakim uvjetima.',
        hint: 'Six words: “The experiment was repeated under identical conditions.”',
        explanation:
          'Pokus je ponovljen u jednakim uvjetima. — the passive participle ponovljen (from ponoviti, with v → vlj) agrees with pokus; u + locative plural: u jednakim uvjetima.',
      },
    ],
  },

  // ── Arts and culture ───────────────────────────────────────────────────────
  'arts-culture': {
    text: {
      kind: 'dialogue',
      title: 'U foajeu nakon premijere',
      lines: [
        {
          who: 'Tin',
          hr: 'Onda, Dora, kako ti se svidjela premijera? Ja još uvijek ne znam bih li pljeskao ili šutio.',
          en: 'So, Dora, how did you like the premiere? I still do not know whether I would rather applaud or keep quiet.',
        },
        {
          who: 'Dora',
          hr: 'Meni je ovo jedna od najdojmljivijih predstava sezone, i to ne zbog raskošne scenografije, nego zbog toga što se redateljica usudila ostaviti glumce same s Krležinim tekstom.',
          en: 'For me this is one of the most impressive productions of the season, and not because of the lavish set, but because the director dared to leave the actors alone with Krleža’s text.',
        },
        {
          who: 'Tin',
          hr: 'Slažem se da je gluma izvrsna, osobito u drugom činu. Ipak, ne bih rekao da je sve uspjelo: završetak mi se učinio prenapuhanim, kao da publici treba triput objasniti ono što je odavno shvatila.',
          en: 'I agree that the acting is excellent, especially in the second act. Still, I would not say that everything worked: the ending struck me as overblown, as if the audience needed to be told three times what it had understood long before.',
        },
        {
          who: 'Dora',
          hr: 'Tu si u pravu, zadnjih je deset minuta suvišno. Ali prizor svađe oca i sina bio je toliko potresan da je cijelo gledalište zanijemjelo — a to se u kazalištu ne događa često.',
          en: 'You are right about that, the last ten minutes are superfluous. But the scene of the quarrel between father and son was so moving that the whole house fell silent — and that does not happen often in the theater.',
        },
        {
          who: 'Tin',
          hr: 'Zanimljivo, mene je više dirnula glazba nego riječi. Skladatelj je napisao svega nekoliko taktova za violončelo, ali upravo se u tim stankama čulo ono što likovi jedni drugima ne mogu reći.',
          en: 'Interesting — I was moved more by the music than by the words. The composer wrote only a few bars for the cello, but it was precisely in those pauses that you heard what the characters cannot say to one another.',
        },
        {
          who: 'Dora',
          hr: 'Lijepo si to rekao; to bih rado ukrala za svoj osvrt. Smeta mi jedino što je prvi čin mjestimice predvidljiv: tko je čitao dramu, zna svaku repliku unaprijed.',
          en: 'You put that beautifully; I would gladly steal it for my review. The only thing that bothers me is that the first act is predictable in places: anyone who has read the play knows every line in advance.',
        },
        {
          who: 'Tin',
          hr: 'Meni to nije smetalo, budući da dramu nisam čitao od gimnazije. Nego, reci mi iskreno: je li predstava duhovita? Ja sam se nekoliko puta nasmijao, a nisam siguran da sam smio.',
          en: 'That did not bother me, since I have not read the play since high school. But tell me honestly: is the production witty? I laughed several times, and I am not sure I was allowed to.',
        },
        {
          who: 'Dora',
          hr: 'Smio si, dakako. Krleža je mnogo duhovitiji nego što se u školi misli, a ova ga postava napokon ne igra kao spomenik. Zato mi i jest draga: ozbiljna je, a nije ukočena.',
          en: 'Of course you were. Krleža is much wittier than people think in school, and this cast finally does not play him like a monument. That is exactly why I am fond of it: it is serious without being stiff.',
        },
        {
          who: 'Tin',
          hr: 'Dakle, da sažmem tvoju kritiku: nadahnuta režija, izvrsna gluma, dojmljiva glazba — i deset minuta viška.',
          en: 'So, to sum up your review: inspired direction, excellent acting, impressive music — and ten minutes too many.',
        },
        {
          who: 'Dora',
          hr: 'Točno tako. A da mi je netko jutros rekao da će me tri sata Krleže ovako dirnuti, ne bih mu vjerovala. Idemo li ovih dana i na izložbu u Klovićevim dvorima? Kažu da traje samo do kraja mjeseca.',
          en: 'Exactly. And if somebody had told me this morning that three hours of Krleža would move me like this, I would not have believed him. Should we also go to the exhibition at the Klović Palace one of these days? They say it runs only until the end of the month.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do the two friends agree on, and where do they differ?',
          options: [
            'Both dislike the music; they differ about the acting',
            'Both find the play humorless; they differ about the ending',
            'Both admire the acting and find the ending too much; they differ on whether a predictable first act is a flaw',
            'Both think the set was too lavish; they differ about the director',
          ],
          correct: 2,
          hint: 'Recall who had not read the play since high school — and what that spared him.',
          explanation:
            'Tin praises the acting (gluma je izvrsna) and Dora agrees; she in turn concedes that the last ten minutes are superfluous. Only Dora minds that the first act is predictable for anyone who knows the text — Tin has not read it since high school, so it did not bother him.',
        },
        {
          q: 'Dora says the father–son scene was “toliko potresan da je cijelo gledalište zanijemjelo”. What is she telling Tin about that scene?',
          options: [
            'It upset the audience so much that people wanted to leave',
            'It was so moving that the whole house fell silent — her highest praise',
            'It was so confusing that nobody knew how to react',
            'It was so loud that nobody could hear the lines',
          ],
          correct: 1,
          hint: 'Look at what follows the dash: is a silent house something that often happens in a theater?',
          explanation:
            'Said of a play, a film or a scene, this adjective (from potresti, to shake) means deeply moving, and it is high praise. A house that falls silent (zanijemjeti — to go mute) is the proof she offers; “a to se u kazalištu ne događa često” makes it a compliment.',
        },
        {
          type: 'type',
          q: 'Tin’s sister saw it too. Complete: Predstava ____ jako svidjela. (“She liked the play very much.” — two short words)',
          answer: 'joj se',
          hint: 'The play is the subject; the person who likes it stands in the dative, and the reflexive follows. Think about what the third-person auxiliary does right behind the reflexive.',
          explanation:
            'Predstava joj se jako svidjela. — svidjeti se makes the work the subject and the person a dative (joj). The cluster would end in the auxiliary je, but straight after se the standard leaves it out.',
        },
        {
          type: 'transform',
          q: 'Soften the blunt verdict the way Tin softens his: begin with “Ne bih rekao da…” (or “Ne bih rekla da…”).',
          from: 'Završetak je loš.',
          answer: 'Ne bih rekao da je završetak loš.',
          accept: [
            'Ne bih rekla da je završetak loš.',
            'Ne bih rekao da je loš završetak.',
            'Ne bih rekla da je loš završetak.',
          ],
          hint: 'In the new clause a different word comes first, and the short verb form moves up to stand right behind it.',
          explanation:
            'Ne bih rekao da je završetak loš. — the conditional turns a verdict into an opinion one can discuss. Inside the da-clause the clitic je must follow da at once: da je završetak loš, not “da završetak je loš”.',
        },
        {
          type: 'transform',
          q: 'Turn the fact into a personal impression, as Tin does with the ending: use “učiniti se” and “mi”.',
          from: 'Prvi čin bio je predvidljiv.',
          answer: 'Prvi čin učinio mi se predvidljivim.',
          accept: [
            'Prvi mi se čin učinio predvidljivim.',
            'Prvi čin mi se učinio predvidljivim.',
            'Učinio mi se predvidljivim prvi čin.',
            'Učinio mi se prvi čin predvidljivim.',
            'Prvi čin učinio mi se predvidljiv.',
            'Prvi mi se čin učinio predvidljiv.',
            'Prvi čin mi se učinio predvidljiv.',
          ],
          hint: 'The adjective after this verb may take the case you know from “postati” — or stay as it is. The two short words travel together to second position.',
          explanation:
            'Prvi čin učinio mi se predvidljivim. — učiniti se (to seem, to strike somebody as) puts the person in the dative and the impression typically in the instrumental (predvidljivim); the nominative (predvidljiv) is also standard. The clitics mi se stand in second position, and je is left out after se.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: '“Glazba” and “muzika” name the same thing, but on a concert poster or in a newspaper review you would expect “glazba”.',
        answer: true,
        hint: 'One of the two is the native word of the written standard; the other is at home in casual talk.',
        explanation:
          'True. Both words are Croatian and everybody understands both. Glazba is the word of posters, programs and reviews (glazbena škola, klasična glazba); muzika is common in relaxed speech. You choose a style, not a meaning.',
      },
      9,
      {
        type: 'sort',
        q: 'Praise or criticism?',
        groups: ['Praise', 'Criticism'],
        items: [
          { hr: 'Gluma je bila nadahnuta.', group: 0 },
          { hr: 'Scenarij je prenapuhan.', group: 1 },
          { hr: 'Dokumentarac je potresan.', group: 0 },
          { hr: 'Drugi čin je razvučen i dosadan.', group: 1 },
          { hr: 'Postav izložbe je dojmljiv.', group: 0 },
          { hr: 'Rasplet je posve predvidljiv.', group: 1 },
        ],
        explanation:
          'nadahnut (inspired), potresan (deeply moving) and dojmljiv (impressive) are praise — potresan included, however harrowing its literal sense. prenapuhan (overblown), razvučen (dragged out), dosadan (dull) and predvidljiv (predictable) are the critic’s negatives.',
      },
      8,
      1,
      {
        type: 'match',
        q: 'What does the critic mean? Match each adjective to its meaning.',
        pairs: [
          ['prenapuhan', 'it tries to impress and overdoes it'],
          ['predvidljiv', 'you can see every turn coming'],
          ['nadahnut', 'made with real inspiration'],
          ['duhovit', 'it wins you over with its wit'],
          ['sveden', 'pared back to the essentials'],
        ],
        explanation:
          'prenapuhan is literally “over-inflated”; predvidljiv comes from predvidjeti, to foresee; nadahnut from nadahnuti, to inspire; duhovit from duh, spirit or wit; sveden from svesti, to reduce — a sveden pristup is a pared-back approach.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: “I did not expect the film to move me so much.”',
        words: ['Nisam', 'očekivao', 'da', 'će', 'me', 'film', 'toliko', 'dirnuti.'],
        accept: [
          'Nisam očekivao da će me toliko dirnuti film.',
          'Nisam očekivao da će me film dirnuti toliko.',
        ],
        explanation:
          'Nisam očekivao da će me film toliko dirnuti. — in the da-clause both clitics follow da at once, the future auxiliary first and the accusative pronoun after it: da će me. dirnuti is perfective: one single effect.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. (“The music moved us more than the words.”)',
        words: ['Glazba', 'nam', 'je', 'dirnula', 'više', 'nego', 'riječi.'],
        wrong: 1,
        answer: 'nas',
        hint: 'Compare two verbs of the lesson: with “svidjeti se” the person answers “komu?”, but this verb takes a direct object.',
        explanation:
          'Glazba nas je dirnula više nego riječi. — dirnuti takes the accusative of the person moved (dirnula me, te, ga, nas). The dative belongs to svidjeti se: Glazba nam se svidjela.',
      },
      3,
      {
        type: 'transform',
        q: 'Praise first, then the reservation: join the two sentences into one with “iako”, keeping the praise in the main clause.',
        from: 'Izložba je dojmljiva. Postav je pretrpan.',
        answer: 'Izložba je dojmljiva, iako je postav pretrpan.',
        accept: [
          'Iako je postav pretrpan, izložba je dojmljiva.',
          'Izložba je dojmljiva, iako je pretrpan postav.',
        ],
        hint: 'The linking word opens its own clause, and the short verb form of that clause cannot stay where it was.',
        explanation:
          'Izložba je dojmljiva, iako je postav pretrpan. — iako (although) introduces the concession, and the clitic je moves to stand directly behind it: iako je postav…, not “iako postav je”. The postav is the way an exhibition is hung and arranged.',
      },
      {
        type: 'listen',
        audio:
          'Ne bih rekla da je film loš, nego da se redatelj previše uzdao u glazbu, a premalo u vlastite glumce.',
        q: 'What is the speaker’s criticism?',
        options: [
          'The film is simply bad',
          'The director relied too much on the music and too little on his own actors',
          'The actors ignored the director',
          'The music was too quiet to carry the film',
        ],
        correct: 1,
        explanation:
          'Ne bih rekla da… nego da… — not a verdict but a reason. uzdati se u + accusative is to rely on, to trust in: previše u glazbu (too much in the music), premalo u vlastite glumce (too little in his own actors).',
      },
      {
        type: 'dictate',
        audio: 'Publika je pljeskala punih deset minuta.',
        answer: 'Publika je pljeskala punih deset minuta.',
        hint: 'Six words: “The audience applauded for a full ten minutes.”',
        explanation:
          'Publika je pljeskala punih deset minuta. — publika is a feminine singular, so pljeskala; deset requires the genitive plural minuta, and punih agrees with it: “a full ten minutes”.',
      },
    ],
  },

  // ── Regional varieties ─────────────────────────────────────────────────────
  'regional-varieties': {
    text: {
      kind: 'dialogue',
      title: 'Tri kraja za jednim stolom',
      lines: [
        {
          who: 'Baka Mare (Brač)',
          hr: 'Niko, sinko, di si dosad? Sidi za stol, pjat ti je već pun, a juha se ladi.',
          en: 'Niko, my boy, where have you been all this time? Sit down at the table, your plate is already full, and the soup is getting cold. (island speech)',
        },
        {
          who: 'Niko',
          hr: 'Evo me, bako. Oprosti, zadržao sam se u smočnici s djedom — pokazivao mi je zimnicu.',
          en: 'Here I am, Grandma. Sorry, I got held up in the pantry with Grandpa — he was showing me his winter preserves.',
        },
        {
          who: 'Djed Štef (Zagorje)',
          hr: 'Kaj smočnica, dečko — to ti je špajza! Navečer bum ti skuhal zagorski cušpajz, pa buš prste lizal.',
          en: 'Never mind “smočnica”, my boy — that is a “špajza”! Tonight I will cook you a Zagorje vegetable stew, and you will be licking your fingers. (Zagorje speech)',
        },
        {
          who: 'Mama Ana',
          hr: 'Eto ti, Niko, pola Hrvatske za jednim stolom. Baka govori bračkom čakavicom, djed zagorskom kajkavicom, a ti ih oboje razumiješ bolje nego ja kad sam se udala u ovu kuću.',
          en: 'There you have it, Niko, half of Croatia at one table. Grandma speaks the Čakavian of Brač, Grandpa the Kajkavian of Zagorje, and you understand them both better than I did when I married into this house.',
        },
        {
          who: 'Niko',
          hr: 'Razumijem, ali ne usuđujem se tako govoriti. Kad bih ja rekao „kaj” ili „ča”, zvučalo bi kao da nekoga oponašam, pa radije odgovaram onako kako sam učio.',
          en: 'I understand, but I do not dare to speak that way. If I said “kaj” or “ča”, it would sound as if I were imitating somebody, so I prefer to answer the way I was taught.',
        },
        {
          who: 'Baka Mare (Brač)',
          hr: 'I pravo činiš, sinko. Ali kad ti ja rečen „ponistra” ili „šugaman”, ti znaj da su to prozor i ručnik, pa me ne moraš ispravljat.',
          en: 'And you are right to, my boy. But when I say “ponistra” or “šugaman” to you, just know that they are a window and a towel, so you do not have to correct me. (island speech)',
        },
        {
          who: 'Niko',
          hr: 'Ne bih te ispravljao ni da znam bolje! Moj je pradjed u Chicagu do kraja života govorio „lipo” i „vrime”, i te su mi riječi drage: po njima ga pamtim.',
          en: 'I would not correct you even if I knew better! My great-grandfather in Chicago said “lipo” and “vrime” to the end of his life, and those words are dear to me: I remember him by them.',
        },
        {
          who: 'Djed Štef (Zagorje)',
          hr: 'Tak je. Nek dečko govori kak su ga v školi vučili; glavno da nas razme.',
          en: 'That is right. Let the boy speak the way they taught him in school; the main thing is that he understands us. (Zagorje speech)',
        },
        {
          who: 'Mama Ana',
          hr: 'Samo zapamti, Niko: u molbi za stipendiju napisat ćeš „prozor”, „ručnik” i „lijepo vrijeme”. Zavičajne riječi čuvaj za ovaj stol — ovdje im je i dom.',
          en: 'Just remember, Niko: in a scholarship application you will write “prozor”, “ručnik” and “lijepo vrijeme”. Keep the home words for this table — this is where they are at home.',
        },
        {
          who: 'Niko',
          hr: 'Dogovoreno. Standardni jezik za ured, a „špajza” i „pjat” za obitelj. Samo mi još recite: čija je riječ ljepša — bakin „pomidor” ili naša „rajčica”?',
          en: 'Agreed. The standard language for the office, and “špajza” and “pjat” for the family. Just tell me one more thing: whose word is nicer — Grandma’s “pomidor” or our “rajčica”?',
        },
        {
          who: 'Baka Mare (Brač)',
          hr: 'Oboje, sinko, oboje. Glavno da je na pjatu!',
          en: 'Both, my boy, both. The main thing is that it is on the plate! (island speech)',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does Niko not answer his grandparents in their own dialects?',
          options: [
            'He does not understand them well enough',
            'Coming from him it would sound like imitation, so he answers the way he was taught',
            'His mother has forbidden it',
            'He considers the dialects incorrect Croatian',
          ],
          correct: 1,
          hint: 'Recall his sentence about “kaj” and “ča” — and the verb he uses for what he would be doing.',
          explanation:
            'zvučalo bi kao da nekoga oponašam — it would sound as if I were imitating somebody. He understands both grandparents perfectly and loves the words; he simply does not perform a variety he did not grow up speaking, and both grandparents approve.',
        },
        {
          q: 'Ana tells Niko that in a scholarship application he will write “prozor”, “ručnik” and “lijepo vrijeme”. What is her point?',
          options: [
            'The family should stop using the home words, because they are mistakes',
            'People in offices would not understand island or Zagorje words',
            'A formal written text calls for the standard, while the home words belong at home — neither replaces the other',
            'Niko’s standard Croatian is weaker than his dialect',
          ],
          correct: 2,
          hint: 'Read her second sentence: what does she tell him to DO with the home words?',
          explanation:
            'She does not correct the grandparents; she assigns each variety its place. Zavičajne riječi čuvaj za ovaj stol — keep them for this table, where they are at home; a molba (application) is a formal text and takes the standard forms.',
        },
        {
          type: 'type',
          q: 'Baka says: „Cilo lito smo bili na moru.” Write the first two words the way the standard does: ____ smo bili na moru.',
          answer: 'Cijelo ljeto',
          hint: 'Each of the two ikavian i’s stands for the old yat: in the long syllable of the first word the standard has three letters in its place, in the short syllable of the second word two.',
          explanation:
            'Cijelo ljeto smo bili na moru. — ikavian i corresponds to standard ije in a long syllable (cilo → cijelo) and to je in a short one (lito → ljeto, where l + j is written lj). Baka’s sentence is dialect, not an error.',
        },
        {
          type: 'transform',
          q: 'Put Djed Štef’s promise into the standard: both his future tense and his German loanword change.',
          from: 'Bum ti skuhal cušpajz.',
          answer: 'Skuhat ću ti varivo.',
          accept: [
            'Ja ću ti skuhati varivo.',
            'Skuhat ću ti ja varivo.',
            'Varivo ću ti skuhati.',
            'Ja ću ti varivo skuhati.',
          ],
          hint: 'The standard future is built with the short forms of “htjeti” and the infinitive — and when the infinitive comes first, it loses a letter in writing.',
          explanation:
            'Skuhat ću ti varivo. — the kajkavian future is bum + participle (bum skuhal); the standard uses the infinitive with ću. Before the clitic the infinitive is written without its final -i (skuhat ću); after it the full form returns (ja ću ti skuhati). cušpajz is a Germanism; the standard word is varivo.',
        },
        {
          type: 'transform',
          q: 'Baka Mare asks in her island speech. Write her question in the standard.',
          from: 'Di si stavila šugaman?',
          answer: 'Gdje si stavila ručnik?',
          accept: ['Kamo si stavila ručnik?'],
          hint: 'Two words change. One of them baka herself explains in the dialogue; the other opens the very first question she asks Niko.',
          explanation:
            'Gdje si stavila ručnik? — di is the Dalmatian form of gdje, and šugaman is a loan from Venetian for ručnik. The rest of her sentence is already standard, with the clitic si in second position.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: 'Everyday speech in the city of Zagreb is pure Kajkavian, the same as in a Zagorje village.',
        answer: false,
        hint: 'Think of which dialect group the city’s everyday speech is built on — and what it has merely borrowed.',
        explanation:
          'False. Rural Zagorje is genuinely Kajkavian. Zagreb’s urban speech is a Štokavian-based colloquial with Kajkavian features (kaj, the bum / buš future) and many German loanwords such as špajza and cušpajz.',
      },
      8,
      4,
      {
        type: 'match',
        q: 'These are regional words. Match each to its standard equivalent.',
        pairs: [
          ['ponistra (coast)', 'prozor'],
          ['šugaman (coast)', 'ručnik'],
          ['škatula (coast)', 'kutija'],
          ['pomidor (coast)', 'rajčica'],
          ['špajza (Zagreb)', 'smočnica'],
        ],
        explanation:
          'The coastal words came from Venetian and Italian during centuries of shared history on the Adriatic; špajza came into Zagreb speech from German. Every one of them has a standard counterpart, and both will be understood — but only the standard word belongs in formal writing.',
      },
      9,
      {
        type: 'sort',
        q: 'Where would you hear or read it?',
        groups: [
          'Zagreb and the north-west (local speech)',
          'The coast and the islands (local speech)',
          'Standard Croatian (anywhere, and in writing)',
        ],
        items: [
          { hr: 'Kaj buš kuhal?', group: 0 },
          { hr: 'Ča ćeš kuhat?', group: 1 },
          { hr: 'Što ćeš kuhati?', group: 2 },
          { hr: 'Di je pjat?', group: 1 },
          { hr: 'Gdje je tanjur?', group: 2 },
          { hr: 'Idem v špajzu.', group: 0 },
        ],
        explanation:
          'kaj, the buš future and v for u mark the north-west; ča and pjat mark the coast and the islands. The standard has što, ćeš + infinitive, gdje and tanjur. All three columns are Croatian; only the third is what you write in a formal text.',
      },
      5,
      11,
      {
        type: 'order',
        q: 'Put the words in order: “I understand Grandma’s speech, but I answer her in the standard language.”',
        words: [
          'Razumijem',
          'bakin',
          'govor,',
          'ali',
          'joj',
          'odgovaram',
          'standardnim',
          'jezikom.',
        ],
        accept: [
          'Razumijem bakin govor, ali odgovaram joj standardnim jezikom.',
          'Razumijem bakin govor, ali joj standardnim jezikom odgovaram.',
          'Bakin govor razumijem, ali joj odgovaram standardnim jezikom.',
          'Bakin govor razumijem, ali odgovaram joj standardnim jezikom.',
        ],
        explanation:
          'Razumijem bakin govor, ali joj odgovaram standardnim jezikom. — after ali the clitic joj may lean on the conjunction (ali joj odgovaram) or on the verb (ali odgovaram joj). The instrumental standardnim jezikom says by what means he answers.',
      },
      {
        type: 'transform',
        q: 'Baka’s sentence is ikavian. Write it in the standard (ijekavian) forms.',
        from: 'Dica su cilu večer pivala stare pisme.',
        answer: 'Djeca su cijelu večer pjevala stare pjesme.',
        hint: 'Four words carry an ikavian i. Decide for each whether the syllable is long or short — only one of the four is long.',
        explanation:
          'Djeca su cijelu večer pjevala stare pjesme. — short yat gives je (dica → djeca, pivala → pjevala, pisme → pjesme), long yat gives ije (cilu → cijelu). Nothing else in the sentence changes: the grammar of baka’s speech and of the standard is the same here.',
      },
      {
        type: 'fix',
        q: 'This is the last line of a formal letter. One word belongs at the family table, not here. Tap it. (“Thank you for your understanding, and kind regards.”)',
        words: ['Zahvaljujem', 'na', 'razumijevanju', 'i', 'lipo', 'Vas', 'pozdravljam.'],
        wrong: 4,
        answer: 'lijepo',
        hint: 'One word shows the ikavian reflex. The syllable is long — restore what the standard writes there.',
        explanation:
          'Zahvaljujem na razumijevanju i lijepo Vas pozdravljam. — the ikavian form is perfectly good Croatian in Dalmatian speech and in song, but a formal letter takes the standard ijekavian form, with ije for the long yat.',
      },
      0,
      {
        type: 'listen',
        audio:
          'Riječi koje je baka donijela s otoka nisu pogreške koje treba ispravljati, nego najstariji sloj našega obiteljskog jezika; u službenom dopisu, međutim, nema im mjesta.',
        q: 'What is the speaker saying about Grandma’s island words?',
        options: [
          'They are errors and should be corrected at home too',
          'They are not errors but the oldest layer of the family’s language — yet they have no place in an official letter',
          'Official letters should use them so that they are preserved',
          'The family has forgotten the words she brought from the island',
        ],
        correct: 1,
        explanation:
          'nisu pogreške… nego najstariji sloj — not mistakes, but the oldest layer of the family’s language. The second half adds the limit: u službenom dopisu nema im mjesta — in an official letter there is no place for them.',
      },
      {
        type: 'dictate',
        audio: 'Baka govori čakavski, a djed kajkavski.',
        answer: 'Baka govori čakavski, a djed kajkavski.',
        hint: 'Six words: “Grandma speaks Čakavian, and Grandpa Kajkavian.”',
        explanation:
          'Baka govori čakavski, a djed kajkavski. — the names of the dialect groups are adverbs here (govoriti kako? — čakavski, kajkavski) and are written with a small letter; the verb is not repeated in the second half.',
      },
    ],
  },

  // ── Croatian language identity ─────────────────────────────────────────────
  'language-identity': {
    text: {
      kind: 'dialogue',
      title: 'Seminar iz povijesti hrvatskoga jezika',
      lines: [
        {
          who: 'Profesorica',
          hr: 'Kolegice i kolege, prošli smo put stali kod Šuleka. Tko će nas podsjetiti zašto se njegove riječi, skovane prije stoljeća i pol, i danas nalaze u svakom udžbeniku kemije?',
          en: 'Colleagues, last time we stopped at Šulek. Who will remind us why his words, coined a century and a half ago, are still found in every chemistry textbook today?',
        },
        {
          who: 'Lana',
          hr: 'Zato što su prozirne, profesorice. Tko zna pridjev „kiseo”, lako će zapamtiti kisik, a „vodik” se objašnjava sam od sebe. Šulek nije riječi samo izmišljao; mnoge je oživio iz starijih rječnika ili prilagodio iz drugih slavenskih jezika.',
          en: 'Because they are transparent, Professor. Anyone who knows the adjective “kiseo” (sour) will easily remember kisik, and “vodik” explains itself. Šulek did not only invent words; many he revived from older dictionaries or adapted from other Slavic languages.',
        },
        {
          who: 'Matej',
          hr: 'Ipak, nije svaka njegova tvorenica preživjela. Mislim da o tome prečesto šutimo: jezik je neke prijedloge prihvatio, a druge jednostavno zaboravio, ma koliko ih jezikoslovci preporučivali.',
          en: 'Still, not every one of his coinages survived. I think we keep quiet about that too often: the language accepted some proposals and simply forgot others, however much linguists recommended them.',
        },
        {
          who: 'Profesorica',
          hr: 'Točno, kolega, i to je važna pouka: purizam može ponuditi riječ, ali je ne može nametnuti. Zato danas mirno žive jedno uz drugo „zrakoplov” i „avion”, „glazba” i „muzika”, „računalo” i „kompjutor” — samo u različitim stilovima.',
          en: 'Exactly, and that is an important lesson: purism can offer a word, but it cannot impose it. That is why “zrakoplov” and “avion”, “glazba” and “muzika”, “računalo” and “kompjutor” live peacefully side by side today — only in different styles.',
        },
        {
          who: 'Lana',
          hr: 'Znači li to da je pogrešno reći „avion”?',
          en: 'Does that mean it is wrong to say “avion”?',
        },
        {
          who: 'Profesorica',
          hr: 'Nipošto. Pogrešno je samo misliti da jedna od tih riječi nije hrvatska. U razgovoru ćete reći „avion”, a u zakonu i na službenoj obavijesti pisat će „zrakoplov”. Birate stil, a ne pravilnost.',
          en: 'Not at all. The only mistake is to think that one of those words is not Croatian. In conversation you will say “avion”, while a law or an official notice will say “zrakoplov”. You are choosing a style, not correctness.',
        },
        {
          who: 'Matej',
          hr: 'A kakvu je ulogu u svemu tome imala Deklaracija iz 1967.? U gimnaziji smo je spomenuli u jednoj rečenici.',
          en: 'And what role did the Declaration of 1967 play in all this? In high school we mentioned it in a single sentence.',
        },
        {
          who: 'Profesorica',
          hr: 'Golemu. Deklaracijom o nazivu i položaju hrvatskoga književnog jezika ugledne su kulturne i znanstvene ustanove zatražile da se jezik smije zvati svojim imenom i da bude ravnopravan u javnoj uporabi. Potpisnici su zbog toga trpjeli posljedice, ali se zahtjev više nije dao ušutkati.',
          en: 'An enormous one. With the Declaration on the Name and Status of the Croatian Literary Language, respected cultural and scholarly institutions demanded that the language be allowed to carry its own name and have equal standing in public use. The signatories suffered consequences for it, but the demand could no longer be silenced.',
        },
        {
          who: 'Lana',
          hr: 'Dakle, povijest našega standarda nije počela 1991., kako se katkad čuje, nego je mnogo starija: od glagoljice i Bašćanske ploče, preko prvih rječnika i gramatika, do preporoda i Šuleka.',
          en: 'So the history of our standard did not begin in 1991, as one sometimes hears, but is much older: from the Glagolitic script and the Baška Tablet, through the first dictionaries and grammars, to the National Revival and Šulek.',
        },
        {
          who: 'Profesorica',
          hr: 'Upravo tako. „Tisuća” i „vlak” nisu izumi devedesetih, nego riječi koje su se u nas pisale naraštajima; devedesete su im samo vratile samopouzdanje. Za sljedeći sat pročitajte tekst Deklaracije — kratak je, a svaka mu je rečenica odvagnuta.',
          en: 'Precisely. “Tisuća” and “vlak” are not inventions of the nineties but words that had been written here for generations; the nineties merely gave them back their self-confidence. For the next class, read the text of the Declaration — it is short, and every sentence in it is carefully weighed.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: according to the professor, what is the only mistake one can make about “avion” and “zrakoplov”?',
          options: [
            'Saying “avion” in a conversation',
            'Writing “zrakoplov” in a law',
            'Believing that one of the two is not Croatian',
            'Using both words in the same text',
          ],
          correct: 2,
          hint: 'Recall her answer to Lana’s question — and her closing formula about style and correctness.',
          explanation:
            'Pogrešno je samo misliti da jedna od tih riječi nije hrvatska. Both words are Croatian; avion belongs to conversation, zrakoplov to laws and official notices. Birate stil, a ne pravilnost — you choose a style, not correctness.',
        },
        {
          q: 'The professor says: “purizam može ponuditi riječ, ali je ne može nametnuti.” Which fact mentioned in the seminar supports her claim?',
          options: [
            'Some of Šulek’s coinages survived, while others were simply forgotten whatever linguists recommended',
            'The Declaration was signed by cultural and scholarly institutions',
            'The Glagolitic script is older than the first dictionaries',
            'The word “vodik” explains itself',
          ],
          correct: 0,
          hint: 'She is agreeing with what a student has just said. Which student — and about what?',
          explanation:
            'She is confirming Matej’s point: jezik je neke prijedloge prihvatio, a druge jednostavno zaboravio. A proposed word lives only if speakers take it up — which is also why native and international words can coexist in different styles.',
        },
        {
          type: 'type',
          q: 'Complete with the verb a blacksmith also uses: Naziv „kisik” pripisuje se Šuleku: drži se da ga je ____ u devetnaestom stoljeću. (coined — perfective past, about a man)',
          answer: 'skovao',
          hint: 'The professor’s first line calls his words by the passive participle of this verb. You need the active past, masculine singular.',
          explanation:
            'Drži se da ga je skovao u devetnaestom stoljeću. — the term is credited to Šulek (pripisuje se Šuleku). kovati is to forge (metal, coins), and skovati riječ is to coin a word. The participle changes the stem: skovati → skovao, passive skovan.',
        },
        {
          type: 'transform',
          q: 'This is how you would say it to a friend. Rewrite it the way an official notice would print it: replace the two international words with their native counterparts.',
          from: 'Avion kasni zbog kompjutorske greške.',
          answer: 'Zrakoplov kasni zbog računalne pogreške.',
          accept: [
            'Zrakoplov kasni zbog računalne greške.',
            'Zrakoplov kasni zbog pogreške računala.',
            'Zrakoplov kasni zbog greške računala.',
          ],
          hint: 'The professor names both native nouns. From the second one you must make an adjective yourself — in the genitive, to agree with the noun after “zbog”.',
          explanation:
            'Zrakoplov kasni zbog računalne pogreške. — avion → zrakoplov; kompjutor → računalo, whose adjective is računalni (računalna pogreška, genitive računalne pogreške). Both versions are Croatian; the second is the official register. greška and pogreška are both standard.',
        },
        {
          type: 'type',
          q: 'The Declaration was published on March 17, 1967. Complete the date with the Croatian name of the month: Deklaracija je objavljena 17. ____ 1967.',
          answer: 'ožujka',
          hint: 'Croatian keeps its own Slavic names for the months; the third one follows siječanj and veljača. In a date the month stands in the genitive, and this one drops a vowel.',
          explanation:
            '17. ožujka 1967. — the third month is ožujak; in a date it stands in the genitive, and the fleeting a drops out: ožujak → ožujka. The month names (siječanj, veljača, ožujak…) are among the most recognizable features of the Croatian standard.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'The Declaration of 1967 demanded that the Croatian language be allowed to carry its own name and to have equal standing in public use.',
        answer: true,
        hint: 'Its full title names the two things it was about: the “naziv” and the “položaj” of the language.',
        explanation:
          'True. The Deklaracija o nazivu i položaju hrvatskoga književnog jezika, signed by leading Croatian cultural and scholarly institutions, asked for exactly these two things: the language’s own name (naziv) and its equal status (položaj) in public life.',
      },
      9,
      {
        type: 'match',
        q: 'Both words in each pair are Croatian. Match the native word to its international twin.',
        pairs: [
          ['glazba', 'muzika'],
          ['zrakoplov', 'avion'],
          ['računalo', 'kompjutor'],
          ['jezikoslovlje', 'lingvistika'],
          ['zemljopis', 'geografija'],
        ],
        explanation:
          'Croatian often has a native word and an international one for the same thing. They differ in style and field, not in correctness: zrakoplov in a law, avion in conversation; jezikoslovlje and lingvistika side by side in scholarship; Geografija as the name of the school subject, zemljopis in older and more traditional use.',
      },
      10,
      {
        type: 'sort',
        q: 'When does it belong in the history of Croatian?',
        groups: ['The Middle Ages', 'The 19th century', 'The 20th and 21st centuries'],
        items: [
          { hr: 'Bašćanska ploča', group: 0 },
          { hr: 'Šulekovo znanstveno nazivlje', group: 1 },
          { hr: 'Deklaracija o nazivu i položaju hrvatskoga književnog jezika', group: 2 },
          { hr: 'Najstariji glagoljski natpisi u kamenu', group: 0 },
          { hr: 'Hrvatski narodni preporod', group: 1 },
          { hr: 'Hrvatski postaje službeni jezik Europske unije', group: 2 },
        ],
        explanation:
          'The oldest Glagolitic inscriptions in stone and the Baška Tablet (around 1100) are medieval. The National Revival and Šulek’s terminology belong to the 19th century. The Declaration dates from 1967, and Croatian became an official language of the European Union in 2013.',
      },
      1,
      11,
      {
        type: 'order',
        q: 'Put the words in order: “Both words are Croatian; they just do not belong to the same style.”',
        words: ['Obje', 'su', 'riječi', 'hrvatske,', 'samo', 'ne', 'pripadaju', 'istom', 'stilu.'],
        accept: [
          'Obje riječi su hrvatske, samo ne pripadaju istom stilu.',
          'Obje su riječi hrvatske, samo istom stilu ne pripadaju.',
          'Obje riječi su hrvatske, samo istom stilu ne pripadaju.',
        ],
        explanation:
          'Obje su riječi hrvatske, samo ne pripadaju istom stilu. — in careful style the clitic su leans on the first stressed word and splits the phrase (Obje su riječi); after the whole phrase (Obje riječi su) it is equally possible. pripadati takes the dative: istom stilu.',
      },
      0,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. (“The standard is based on the Štokavian dialect group.”)',
        words: ['Standard', 'se', 'temelji', 'na', 'štokavskom', 'narječje.'],
        wrong: 5,
        answer: 'narječju',
        hint: 'The adjective before it already shows the case this verb requires after “na”. The noun has to agree with it.',
        explanation:
          'Standard se temelji na štokavskom narječju. — temeljiti se na takes the locative (it is a basis, not a destination), so both words stand in the locative: na štokavskom narječju. narječje is the term for one of the three dialect groups.',
      },
      7,
      {
        type: 'transform',
        q: 'Write the date the way a Croatian text would, with the Croatian name of the month.',
        from: '8. 10. 1991.',
        answer: '8. listopada 1991.',
        accept: [
          '8. listopada 1991. godine',
          'osmoga listopada 1991.',
          'osmog listopada 1991.',
          'osmoga listopada 1991. godine',
          'osmog listopada 1991. godine',
        ],
        hint: 'The tenth month is named after the falling of leaves. In a date it stands in the genitive.',
        explanation:
          '8. listopada 1991. — the tenth month is listopad (list + padati, “leaf-fall”), and in a date the month is in the genitive: listopada. On that day in 1991 the Croatian Parliament severed the last constitutional ties with Yugoslavia.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Da nije bilo popova glagoljaša, koji su stoljećima uporno pisali glagoljicom i služili misu na slavenskom jeziku umjesto na latinskom, hrvatska bi pismenost danas bila kudikamo siromašnija.',
        q: 'What is the speaker’s point?',
        options: [
          'The Glagolitic priests held Croatian literacy back for centuries',
          'Without the Glagolitic priests, who for centuries stubbornly wrote in Glagolitic and said Mass in a Slavic language instead of Latin, Croatian written culture would be far poorer',
          'The Glagolitic priests wrote only in Latin',
          'Croatian written culture began in the nineteenth century',
        ],
        correct: 1,
        explanation:
          'Da nije bilo… bila bi — an unreal condition: had it not been for the popovi glagoljaši (priests who used the Glagolitic script and a Church Slavonic liturgy instead of the Latin one), pismenost (literacy, written culture) would be kudikamo siromašnija — far poorer.',
      },
      {
        type: 'dictate',
        audio: 'Jezik se zove svojim imenom.',
        answer: 'Jezik se zove svojim imenom.',
        hint: 'Five words: “The language is called by its own name.”',
        explanation:
          'Jezik se zove svojim imenom. — se makes the verb passive here (“is called”), and the name stands in the instrumental, as in zvati nekoga imenom: svojim imenom, “by its own name”; the reflexive possessive svoj refers back to the subject, jezik.',
      },
    ],
  },

  // ── Diaspora and heritage ──────────────────────────────────────────────────
  'diaspora-identity': {
    text: {
      kind: 'dialogue',
      title: 'Večer hrvatske zajednice u Pittsburghu',
      lines: [
        {
          who: 'Jelena',
          hr: 'Dobra večer! Ja sam Jelena, ove godine gostujem na ovdašnjem sveučilištu. Oprostite na znatiželji, ali odakle ste Vi? Govorite kao da ste jučer stigli iz Dalmacije.',
          en: 'Good evening! I am Jelena, a visiting scholar at the university here this year. Forgive my curiosity, but where are you from? You speak as if you had arrived from Dalmatia yesterday.',
        },
        {
          who: 'Marko',
          hr: 'Hvala Vam, to mi je najljepši kompliment. Rođen sam ovdje, u Pittsburghu, ali korijeni su mi u Imotskoj krajini: pradjed je otišao trbuhom za kruhom još prije Prvoga svjetskog rata.',
          en: 'Thank you, that is the nicest compliment I could get. I was born here, in Pittsburgh, but my roots are in the Imotski region: my great-grandfather left to earn his bread even before the First World War.',
        },
        {
          who: 'Jelena',
          hr: 'Četvrti naraštaj, a tako govorite! Od koga ste naučili?',
          en: 'The fourth generation, and you speak like that! Who did you learn from?',
        },
        {
          who: 'Marko',
          hr: 'Od bake. Kod kuće se govorilo engleski, ali baka je sa mnom uporno govorila samo hrvatski. Dugo sam imao tek pasivno znanje — sve sam razumio, a odgovarao na engleskom — dok prije tri godine nisam odlučio obnoviti ono što mi je ostavila.',
          en: 'From my grandmother. English was spoken at home, but Grandma stubbornly spoke only Croatian with me. For a long time I had only passive knowledge — I understood everything and answered in English — until three years ago I decided to revive what she had left me.',
        },
        {
          who: 'Gospođa Kata',
          hr: 'A ja sam, draga moja, iseljenica prvoga naraštaja. Došla sam 1971. s jednim kovčegom i s riječima iz svoga sela, i te riječi govorim i danas. Kad odem u posjet, nećaci mi se smiju da zvučim kao njihova prabaka.',
          en: 'And I, my dear, am a first-generation emigrant. I came in 1971 with one suitcase and with the words of my village, and I still speak those words today. When I go to visit, my nephews laugh at me and say I sound like their great-grandmother.',
        },
        {
          who: 'Jelena',
          hr: 'Ne smiju Vam se, gospođo Kato, nego Vam se dive. Riječi koje ste Vi sačuvali mi smo u domovini odavno izgubili. Vaš hrvatski nije pokvaren, nego stariji od našega.',
          en: 'They are not laughing at you, Mrs. Kata, they admire you. The words that you have kept, we in the homeland lost long ago. Your Croatian is not broken; it is older than ours.',
        },
        {
          who: 'Gospođa Kata',
          hr: 'Lijepo je to čuti. Mene je uvijek bilo strah da će djeca jezik zaboraviti, pa sam ih svake subote vodila u hrvatsku školu pri župi, makar su se bunila.',
          en: 'That is lovely to hear. I was always afraid the children would forget the language, so every Saturday I took them to the Croatian school at the parish, even though they protested.',
        },
        {
          who: 'Marko',
          hr: 'I ja sam se bunio, priznajem. Danas mi je žao svakog sata koji sam propustio. Govorim s greškama, ali govorim — i sada i sam učim kćer, da jednoga dana može razgovarati s rodbinom bez prevoditelja.',
          en: 'I protested too, I admit. Today I regret every class I missed. I speak with mistakes, but I speak — and now I am teaching my daughter myself, so that one day she can talk with our relatives without an interpreter.',
        },
        {
          who: 'Jelena',
          hr: 'To je najvažnije što možete učiniti: prenijeti jezik dalje. A jeste li ikada pomišljali na povratak?',
          en: 'That is the most important thing you can do: to pass the language on. And have you ever thought about returning?',
        },
        {
          who: 'Marko',
          hr: 'Jesam, i to ozbiljno. Poznajem nekoliko povratnika koji su otvorili obrt u zavičaju svojih djedova. Zasad ipak odlazimo svakoga ljeta, da kći zna da ondje nije turistkinja, nego unuka.',
          en: 'I have, and seriously. I know several returnees who have opened a small business in the home region of their grandfathers. For now, though, we go every summer, so that my daughter knows that over there she is not a tourist but a granddaughter.',
        },
        {
          who: 'Gospođa Kata',
          hr: 'Tako treba, sinko. Tko zna odakle je, lakše zna i kamo ide.',
          en: 'That is how it should be, my boy. Whoever knows where he is from knows more easily where he is going.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Mrs. Kata’s nephews say about her Croatian — and how does Jelena see it?',
          options: [
            'That she has forgotten it; Jelena offers to give her lessons',
            'That she sounds like their great-grandmother; Jelena says her Croatian is not broken but older, with words the homeland has lost',
            'That she mixes in too much English; Jelena says everybody does',
            'That she has an American accent; Jelena finds it charming',
          ],
          correct: 1,
          hint: 'Recall the pair of adjectives Jelena sets against each other in her last sentence to Mrs. Kata.',
          explanation:
            'nećaci mi se smiju da zvučim kao njihova prabaka — and Jelena turns the teasing into a tribute: Vaš hrvatski nije pokvaren, nego stariji od našega. Inherited Croatian often preserves words that have since disappeared in Croatia itself.',
        },
        {
          q: 'Asked “odakle ste Vi?”, Marko names both Pittsburgh and the Imotski region. Why is that the kind of answer the question is looking for?',
          options: [
            'Because Croatian grammar requires two places after “odakle”',
            'Because Jelena has never heard of Pittsburgh',
            'Because the question is about where one’s people belong, not only about a birthplace — and naming both opens the conversation',
            'Because he wants to hide the fact that he is American',
          ],
          correct: 2,
          hint: 'Notice the word he uses for his tie to the Imotski region, and how Jelena’s next question follows from it.',
          explanation:
            'In Croatia “Odakle ste?” asks about roots as much as about a passport. Rođen sam ovdje… ali korijeni su mi u Imotskoj krajini answers both halves, and it is the second half that Jelena takes up at once.',
        },
        {
          type: 'type',
          q: 'Marko’s honest description of his Croatian a few years ago: Razumijem više ____ govorim. (“than” — two words, because a whole clause follows)',
          answer: 'nego što',
          hint: 'After a comparative, a noun can follow “od”. A verb cannot: it needs the other word for “than”, and one more small word to open the clause.',
          explanation:
            'Razumijem više nego što govorim. — two verbs are being compared, so the comparison needs a clause: nego što + verb. od would require a noun in the genitive (više od brata).',
        },
        {
          type: 'transform',
          q: 'Report what Marko said. Begin with “Marko kaže da…” and change whatever must change.',
          from: 'Korijeni su mi u Imotskoj krajini.',
          answer: 'Marko kaže da su mu korijeni u Imotskoj krajini.',
          accept: ['Marko kaže da su mu u Imotskoj krajini korijeni.'],
          hint: 'The dative of the person no longer refers to the speaker. And inside the new clause both short words must find a new place — together.',
          explanation:
            'Marko kaže da su mu korijeni u Imotskoj krajini. — mi becomes mu, because we are now speaking about him; and in the da-clause the whole cluster follows da directly, auxiliary first: da su mu. The dative here expresses the possessor: “his roots”.',
        },
        {
          type: 'transform',
          q: 'Marko explains why he is learning. Join the two sentences into one sentence of purpose with “da bih”.',
          from: 'Učim hrvatski. Želim razgovarati s rodbinom.',
          answer: 'Učim hrvatski da bih mogao razgovarati s rodbinom.',
          accept: [
            'Učim hrvatski da bih razgovarao s rodbinom.',
            'Učim hrvatski kako bih mogao razgovarati s rodbinom.',
            'Učim hrvatski kako bih razgovarao s rodbinom.',
            'Učim hrvatski da bih s rodbinom mogao razgovarati.',
            'Učim hrvatski da bih mogao s rodbinom razgovarati.',
          ],
          hint: 'After these two words comes the participle, not the infinitive and not the present. “Želim” disappears: the purpose clause itself carries the wish.',
          explanation:
            'Učim hrvatski da bih mogao razgovarati s rodbinom. — da + the conditional (bih + participle) expresses purpose when the subject stays the same. bih is the first-person form; mogao adds “to be able to”, and the plain da bih razgovarao is equally correct.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Someone who “je otišao trbuhom za kruhom” left home in order to earn a living.',
        answer: true,
        hint: 'Read the picture literally: what is the belly following?',
        explanation:
          'True. Literally “with the belly after bread”: to leave home in search of work and a livelihood. It is the classic phrase for the economic emigration of earlier generations, and it is normally said with sympathy, not with scorn.',
      },
      9,
      5,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['iseljenik', 'someone who has moved out of the homeland'],
          ['doseljenik', 'someone who has moved into a country'],
          ['povratnik', 'someone who has come back'],
          ['potomak', 'a descendant'],
          ['rodbina', 'relatives'],
        ],
        explanation:
          'The prefixes carry the direction: iz- (out of) gives iseljenik, do- (arriving at) gives doseljenik, and povratnik comes from povratak, return. The same person can be all three in one lifetime. potomak is a descendant; rodbina is the wider family.',
      },
      10,
      {
        type: 'sort',
        q: 'Which pair of prepositions does the home place take?',
        groups: ['u … / iz … (in, from)', 'na … / s … (on, from)'],
        items: [
          { hr: 'Brač', group: 1 },
          { hr: 'Sinj', group: 0 },
          { hr: 'Šolta', group: 1 },
          { hr: 'Lika', group: 0 },
          { hr: 'Pelješac', group: 1 },
          { hr: 'Imotska krajina', group: 0 },
          { hr: 'Slavonija', group: 0 },
        ],
        explanation:
          'Towns and most regions take u and iz: u Sinju, iz Sinja; u Lici, iz Like; u Imotskoj krajini; u Slavoniji. Islands take na and s (sa): na Braču, s Brača; na Šolti, sa Šolte — and so does the Pelješac peninsula: na Pelješcu, s Pelješca (Istria, by contrast, takes u: u Istri, iz Istre). The pair always goes together: where you say na, you come back s.',
      },
      1,
      11,
      {
        type: 'order',
        q: 'Put the words in order: “I was born in Chicago, but my family is from Brač.”',
        words: ['Rođen', 'sam', 'u', 'Chicagu,', 'ali', 'obitelj', 'mi', 'je', 's', 'Brača.'],
        accept: [
          'Rođen sam u Chicagu, ali mi je obitelj s Brača.',
          'U Chicagu sam rođen, ali obitelj mi je s Brača.',
          'U Chicagu sam rođen, ali mi je obitelj s Brača.',
        ],
        explanation:
          'Rođen sam u Chicagu, ali obitelj mi je s Brača. — two answers set against each other with ali: the birthplace and the family’s place. The clitics mi je go together, after obitelj or directly after ali; mi is the dative of the possessor — “my family”.',
      },
      {
        type: 'fix',
        q: 'One word is not what the standard uses here. Tap it. (“I am proud of my roots.”)',
        words: ['Ponosim', 'se', 'mojim', 'korijenima.'],
        wrong: 2,
        answer: 'svojim',
        hint: 'Who is proud, and whose roots are they? When the two are the same person, Croatian has a special possessive.',
        explanation:
          'Ponosim se svojim korijenima. — when the possessor is the subject of the sentence, the standard uses the reflexive possessive svoj in every person. ponositi se takes the instrumental: svojim korijenima.',
      },
      2,
      {
        type: 'transform',
        q: 'Say that speaking is HARDER for you than understanding: use the comparative, and add “nego” with the second verb.',
        from: 'Teško mi je govoriti.',
        answer: 'Teže mi je govoriti nego razumjeti.',
        accept: [
          'Govoriti mi je teže nego razumjeti.',
          'Meni je teže govoriti nego razumjeti.',
          'Teže mi je govoriti nego razumijevati.',
        ],
        hint: 'The comparative of this adverb changes its consonant. The second verb stays in the same form as the first.',
        explanation:
          'Teže mi je govoriti nego razumjeti. — teško → teže; the person who finds it hard stays in the dative (mi). Two infinitives are compared directly with nego; only a full clause with a conjugated verb would need one more word after it.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Premda sam odrasla u Clevelandu i hrvatski naučila tek od bake, u Zagrebu mi svi kažu da govorim starinski, a ne pogrešno.',
        q: 'What do people in Zagreb say about her Croatian?',
        options: [
          'That it is wrong and she should take lessons',
          'That it sounds old-fashioned rather than incorrect',
          'That she has no accent at all',
          'That she learned it at a school in Cleveland',
        ],
        correct: 1,
        explanation:
          'da govorim starinski, a ne pogrešno — old-fashioned, not wrong. premda (although) introduces the concession: she grew up in Cleveland and learned Croatian only from her grandmother (tek od bake), and what people hear is an older Croatian, not a faulty one.',
      },
      {
        type: 'dictate',
        audio: 'Jezik želim prenijeti na djecu.',
        answer: 'Jezik želim prenijeti na djecu.',
        hint: 'Five words: “I want to pass the language on to the children.”',
        explanation:
          'Jezik želim prenijeti na djecu. — prenijeti na + accusative is to pass on to; djeca declines like a feminine singular noun, so the accusative is djecu.',
      },
    ],
  },
};
