// ─── C1 lessons in class order — Unit 15 (lessons 71–75) ─────────────────────
// Same shape and rules as the other C1 class files (see units13-15.js):
//   text — the dialogue the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// C1 register: educated, idiomatic Croatian. Vi / Vas / Vam / Vaš take a capital
// when ONE person is addressed politely. Every Croatian quotation closes with ”.
// A typed answer is never printed by an earlier item of the same sequence, and a
// "wrong" form is always a clear violation of the standard.
//
// stari-tekstovi: every older form is labelled as older where it appears, and
// every older-style line is original text written for this lesson — none is a
// quotation from a real author. jezik-i-drustvo: message-register lines without
// diacritics are deliberate and are named as such by the item that shows them.

export const CLASS_C1_U15 = {
  // ── Synthesizing several sources ───────────────────────────────────────────
  'sinteza-izvora': {
    text: {
      kind: 'dialogue',
      title: 'Tri izvora, jedno izlaganje',
      lines: [
        {
          who: 'Iva',
          hr: 'Domagoj, pročitala sam tvoj nacrt izlaganja o radu od kuće. Imaš tri odlomka: u prvom prepričavaš anketu, u drugom članak profesorice Babić, a u trećem izvješće sindikata. To su tri sažetka, a ne sinteza.',
          en: 'Domagoj, I have read your draft of the presentation on working from home. You have three paragraphs: in the first you retell the survey, in the second Professor Babić’s article, and in the third the union’s report. Those are three summaries, not a synthesis.',
        },
        {
          who: 'Domagoj',
          hr: 'A kako bih drukčije? Tri su izvora, pa su i tri odlomka. Tako mi se činilo najpreglednijim.',
          en: 'How else would I do it? There are three sources, so there are three paragraphs. That seemed the clearest way to me.',
        },
        {
          who: 'Iva',
          hr: 'Složi ih po pitanjima, a ne po izvorima. Prvo pitanje: je li rad od kuće uopće učinkovit? Tu se sva tri izvora slažu da produktivnost nije pala.',
          en: 'Arrange them by question, not by source. The first question: is working from home effective at all? There all three sources agree that productivity has not fallen.',
        },
        {
          who: 'Domagoj',
          hr: 'Istina. Dakle, počinjem od onoga što im je zajedničko, a tek onda prelazim na ono oko čega se razilaze.',
          en: 'True. So I start from what they have in common, and only then move on to what they diverge on.',
        },
        {
          who: 'Iva',
          hr: 'Upravo tako. A razilaze se oko cijene. Dok anketa naglašava zadovoljstvo zaposlenika, sindikat upozorava na to da se radni dan neprimjetno produljuje.',
          en: 'Exactly. And they diverge on the price. While the survey emphasizes employee satisfaction, the union warns that the working day is quietly getting longer.',
        },
        {
          who: 'Domagoj',
          hr: 'A profesorica Babić? Za razliku od sindikata, ona u duljem radnom danu ne vidi problem, nego stvar dogovora. Napisao sam da mu proturječi.',
          en: 'And Professor Babić? Unlike the union, she does not see the longer working day as a problem, but as a matter of agreement. I wrote that she contradicts it.',
        },
        {
          who: 'Iva',
          hr: 'Pazi, to je prejaka riječ. I ona i sindikat polaze od istih podataka o prekovremenim satima. Razlika je prije u naglasku nego u sadržaju.',
          en: 'Careful, that is too strong a word. Both she and the union proceed from the same data on overtime hours. The difference is one of emphasis rather than substance.',
        },
        {
          who: 'Domagoj',
          hr: 'Dobro, onda ću „proturječi” izbrisati. Napisat ću da isti podatak tumači blaže.',
          en: 'All right, then I will delete “proturječi”. I will write that she interprets the same figure more mildly.',
        },
        {
          who: 'Iva',
          hr: 'To je pošteno. I još nešto: jesi li primijetio da nijedan izvor ne spominje zaposlenike koji kod kuće nemaju uvjete za rad?',
          en: 'That is fair. And one more thing: did you notice that no source mentions employees who do not have the conditions for working at home?',
        },
        {
          who: 'Domagoj',
          hr: 'Jesam, ali sam to prešutio. Bojao sam se da će izgledati kao da nismo našli dovoljno literature.',
          en: 'I did, but I kept quiet about it. I was afraid it would look as if we had not found enough literature.',
        },
        {
          who: 'Iva',
          hr: 'Naprotiv. Tu prazninu može uočiti samo onaj tko je pročitao sve. Stavi je na kraj kao nalaz: to je možda najkorisnija rečenica cijelog izlaganja.',
          en: 'On the contrary. Only someone who has read everything can spot that gap. Put it at the end as a finding: it may be the most useful sentence of the whole presentation.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is Iva’s main objection to Domagoj’s draft?',
          options: [
            'It uses too few sources to support its conclusion',
            'It gives each source its own paragraph instead of arranging the material by question',
            'It leaves out Professor Babić’s article altogether',
            'It opens with the point on which the sources agree',
          ],
          correct: 1,
          hint: 'Recall what she calls his three paragraphs — and what she tells him to arrange them by.',
          explanation:
            'Three paragraphs, one per source, are three summaries (tri sažetka). Iva’s instruction is „Složi ih po pitanjima, a ne po izvorima”: a synthesis takes one question at a time and reports what every source says about it.',
        },
        {
          q: 'Why does Iva make Domagoj take out the verb „proturječi”?',
          options: [
            'Because the verb is too informal for a presentation',
            'Because the union’s report never mentions overtime',
            'Because a synthesis should not report any disagreement between sources',
            'Because both sources start from the same data, so the difference is one of emphasis, not of substance',
          ],
          correct: 3,
          hint: 'Think of what the professor and the union share before they part ways.',
          explanation:
            'Both proceed from the same overtime figures (polaze od istih podataka); they only weigh them differently. „Razlika je prije u naglasku nego u sadržaju” deflates a dispute that is not really there, and a verb that overstates it would misreport the source.',
        },
        {
          type: 'type',
          q: 'Now you. Domagoj turns the contrast around: Za razliku od ____ Babić, sindikat u duljem radnom danu vidi problem. (profesorica)',
          answer: 'profesorice',
          hint: 'The frame „za razliku od” governs the genitive. Her surname stays as it is.',
          explanation:
            'Za razliku od profesorice Babić… — za razliku od + genitive. A woman’s surname that ends in a consonant does not decline, so the title carries the case.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one balanced contrast. Begin with „Dok”.',
          from: 'Anketa naglašava zadovoljstvo. Sindikat upozorava na umor.',
          answer: 'Dok anketa naglašava zadovoljstvo, sindikat upozorava na umor.',
          accept: ['Dok sindikat upozorava na umor, anketa naglašava zadovoljstvo.'],
          hint: 'The first sentence becomes a dependent clause, the second the main clause; a comma separates them, and each source keeps its own verb.',
          explanation:
            'Dok anketa naglašava zadovoljstvo, sindikat upozorava na umor. — Dok X…, Y… holds two sources in one sentence without ranking them, and each attribution verb still says what its source is doing.',
        },
        {
          type: 'transform',
          q: 'Report the gap as a finding about every single source. Begin with the negative word that means "not one", and make the verb agree with it.',
          from: 'Izvori ne spominju troškove grijanja.',
          answer: 'Nijedan izvor ne spominje troškove grijanja.',
          accept: [
            'Ni jedan izvor ne spominje troškove grijanja.',
            'Nijedan od izvora ne spominje troškove grijanja.',
            'Troškove grijanja ne spominje nijedan izvor.',
          ],
          hint: 'The subject becomes singular, so the verb does too. Croatian keeps the negation on the verb as well.',
          explanation:
            'Nijedan izvor ne spominje troškove grijanja. — the negative pronoun and the negated verb go together (double negation is the rule in Croatian), and the sentence now states a result that only a reader of all the sources can supply.',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'tf',
        q: 'A good synthesis gives each source a paragraph of its own, so that the reader can see who said what.',
        answer: false,
        hint: 'Ask what the paragraphs of a synthesis are organized by.',
        explanation:
          'False. One paragraph per source is a list of summaries. A synthesis is organized by idea: each paragraph takes one point and reports what all the sources say about it, with every claim still attributed.',
      },
      6,
      {
        type: 'sort',
        q: 'What is the sentence doing?',
        groups: ['Stating common ground', 'Marking a divergence', 'Reporting a gap'],
        items: [
          { hr: 'Svi se autori slažu da je promet porastao.', group: 0 },
          { hr: 'Za razliku od prve studije, druga ne nalazi nikakvu vezu.', group: 1 },
          { hr: 'Nijedan autor ne objašnjava zašto su cijene pale.', group: 2 },
          { hr: 'Sva tri izvješća polaze od istog popisa stanovništva.', group: 0 },
          { hr: 'Autori se razilaze oko toga je li pad privremen.', group: 1 },
          { hr: 'O troškovima održavanja ne govori nijedna studija.', group: 2 },
        ],
        explanation:
          'slažu se and polaze od istog… establish what the sources share. Za razliku od… and razilaze se oko… mark where they split. Nijedan autor ne… and ne govori nijedna studija name what nobody addressed — which is itself a finding.',
      },
      8,
      7,
      1,
      {
        type: 'match',
        q: 'Match each attribution verb to what the source is actually doing.',
        pairs: [
          ['navodi', 'states a fact or a figure, neutrally'],
          ['ističe', 'gives one point special weight'],
          ['upozorava', 'sounds an alarm about a danger'],
          ['zaključuje', 'draws a result from what came before'],
          ['poriče', 'says that something is not true'],
        ],
        explanation:
          'The verbs are not interchangeable. If a source merely states a figure and you write upozorava, you have added an alarm it never sounded. Vary the verb for meaning, never just to avoid repetition.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("The sources diverge on the cause of the decline.")',
        words: ['Izvori', 'se', 'razilaze', 'oko', 'uzrok', 'pada.'],
        wrong: 4,
        answer: 'uzroka',
        hint: 'The preposition after razilaziti se (and after slagati se) governs the genitive.',
        explanation:
          'Izvori se razilaze oko uzroka pada. — slagati se oko and razilaziti se oko both take the genitive: oko uzroka, oko dijagnoze, oko lijeka.',
      },
      3,
      {
        type: 'transform',
        q: 'Make one sentence out of the two. Begin with „Za razliku od…” and do not repeat the noun.',
        from: 'Prvi izvještaj spominje troškove. Drugi ih ne spominje.',
        answer: 'Za razliku od prvog izvještaja, drugi ne spominje troškove.',
        accept: [
          'Za razliku od prvoga izvještaja, drugi ne spominje troškove.',
          'Za razliku od prvog izvještaja, drugi troškove ne spominje.',
          'Za razliku od prvoga izvještaja, drugi troškove ne spominje.',
          'Za razliku od prvog izvještaja, drugi izvještaj ne spominje troškove.',
          'Za razliku od prvoga izvještaja, drugi izvještaj ne spominje troškove.',
        ],
        hint: 'After the frame, the adjective and the noun both change case. The pronoun ih turns back into the noun it stood for.',
        explanation:
          'Za razliku od prvog izvještaja, drugi ne spominje troškove. — the genitive after za razliku od is the slip the lesson warns about; „od prvi izvještaj” is not Croatian.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The difference is one of emphasis rather than substance."',
        words: ['Razlika', 'je', 'prije', 'u', 'naglasku', 'nego', 'u', 'sadržaju.'],
        accept: ['Razlika je u naglasku prije nego u sadržaju.'],
        explanation:
          'Razlika je prije u naglasku nego u sadržaju. — prije… nego ("rather… than") frames the two locatives, and the clitic je stands after the first word. It is the honest sentence when two sources share the substance.',
      },
      11,
      {
        type: 'listen',
        audio:
          'Oba se izvješća slažu da je broj noćenja porastao, ali se razilaze oko toga hoće li se rast nastaviti i sljedeće godine.',
        q: 'What do the two reports disagree about?',
        options: [
          'Whether the number of overnight stays rose at all',
          'Whether the growth will continue next year',
          'How the overnight stays were counted',
          'Which of the two reports was published first',
        ],
        correct: 1,
        explanation:
          'Oba se izvješća slažu da je broj noćenja porastao — common ground first: the rise itself is not disputed. …ali se razilaze oko toga hoće li se rast nastaviti — they split on whether it will continue.',
      },
      {
        type: 'dictate',
        audio: 'Nijedan izvor ne navodi kako je uzorak odabran.',
        answer: 'Nijedan izvor ne navodi kako je uzorak odabran.',
        hint: 'Eight words: "No source states how the sample was selected."',
        explanation:
          'Nijedan izvor ne navodi kako je uzorak odabran. — Nijedan is written as one word here; navodi is the neutral attribution verb; uzorak is masculine, so odabran.',
      },
    ],
  },

  // ── Reconstructing someone else's argument ─────────────────────────────────
  'rekonstrukcija-argumenta': {
    text: {
      kind: 'dialogue',
      title: 'Rasprava u gradskoj četvrti',
      lines: [
        {
          who: 'Vijećnica',
          hr: 'Gospodine Juriću, prije nego što Vam odgovorim, htjela bih provjeriti jesam li Vas dobro razumjela. Smijem li Vaš argument ponoviti svojim riječima?',
          en: 'Mr. Jurić, before I answer you, I would like to check whether I have understood you correctly. May I repeat your argument in my own words?',
        },
        {
          who: 'Jurić',
          hr: 'Izvolite. Rijetko mi se događa da me netko najprije sasluša, a tek onda napadne.',
          en: 'Go ahead. It rarely happens to me that someone first hears me out and only then attacks.',
        },
        {
          who: 'Vijećnica',
          hr: 'Ako sam Vas dobro razumjela, polazite od pretpostavke da većina Vaših kupaca dolazi automobilom. Iz toga zaključujete da bi zatvaranje ulice za automobile prepolovilo prihod trgovina. Je li tako?',
          en: 'If I have understood you correctly, you proceed from the assumption that most of your customers come by car. From this you conclude that closing the street to cars would cut the stores’ revenue in half. Is that right?',
        },
        {
          who: 'Jurić',
          hr: 'Tako je, samo biste trebali dodati i dostavu. Bez dostavnih vozila ne mogu ni napuniti police.',
          en: 'That is right, only you should add deliveries as well. Without delivery vehicles I cannot even fill the shelves.',
        },
        {
          who: 'Vijećnica',
          hr: 'Hvala, to je važna dopuna. Najjača verzija Vašeg argumenta glasila bi, dakle, ovako: čak i kad bi svi kupci došli pješice, trgovina bez dostave ne bi mogla raditi.',
          en: 'Thank you, that is an important addition. The strongest version of your argument would therefore run like this: even if all the customers came on foot, a store without deliveries could not operate.',
        },
        {
          who: 'Jurić',
          hr: 'Ni sam to ne bih bolje rekao. I što sad — slažete li se sa mnom?',
          en: 'I could not have put it better myself. And now what — do you agree with me?',
        },
        {
          who: 'Vijećnica',
          hr: 'Toliko o Vašem stajalištu; ono što slijedi moj je prigovor. Ne osporavam Vaš zaključak u cjelini, nego samo prvi korak: pretpostavku o kupcima.',
          en: 'So much for your position; what follows is my objection. I do not contest your conclusion as a whole, only the first step: the assumption about the customers.',
        },
        {
          who: 'Jurić',
          hr: 'A na temelju čega je osporavate? Ja te ljude gledam svaki dan.',
          en: 'And on what basis do you contest it? I look at those people every day.',
        },
        {
          who: 'Vijećnica',
          hr: 'Na temelju brojenja koje je grad proveo u svibnju: tri četvrtine prolaznika u Vašoj ulici došle su pješice ili tramvajem. Ako ta pretpostavka ne stoji, ne stoji ni zaključak o prihodu.',
          en: 'On the basis of the count the city carried out in May: three quarters of the passersby on your street came on foot or by tram. If that assumption does not hold, neither does the conclusion about revenue.',
        },
        {
          who: 'Jurić',
          hr: 'A dostava? Taj dio mojeg argumenta niste ni dotaknuli.',
          en: 'And the deliveries? You have not even touched that part of my argument.',
        },
        {
          who: 'Vijećnica',
          hr: 'Nisam, jer mu nemam što prigovoriti. Zato i predlažem da ulica do deset sati ujutro ostane otvorena za dostavna vozila.',
          en: 'I have not, because I have nothing to object to in it. That is exactly why I propose that the street stay open to delivery vehicles until ten in the morning.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does the councilwoman do before she raises any objection?',
          options: [
            'She restates Mr. Jurić’s argument in her own words and asks him to confirm it',
            'She presents the city’s count of passersby',
            'She asks him to repeat his argument more briefly',
            'She tells him which part of his argument she agrees with',
          ],
          correct: 0,
          hint: 'Recall the question with which she ends her restatement.',
          explanation:
            'She names his premise and his conclusion and then asks „Je li tako?”. Checking the reconstruction with its owner first protects her from refuting something he never said — and he even improves it by adding the deliveries.',
        },
        {
          q: 'Where exactly does the councilwoman place her objection?',
          options: [
            'At his conclusion as a whole',
            'At his point about delivery vehicles',
            'At the first step: his assumption about how the customers arrive',
            'At his tone toward the council',
          ],
          correct: 2,
          hint: 'She says what she does NOT contest, and then names one step.',
          explanation:
            '„Ne osporavam Vaš zaključak u cjelini, nego samo prvi korak.” Once premise and conclusion are laid out separately, the objection can go to the one step that fails; the delivery point she leaves standing and builds into her proposal.',
        },
        {
          type: 'type',
          q: 'Now you. The councilwoman names his second premise: Polazite od ____ da trgovina bez dostave ne može raditi. (pretpostavka)',
          answer: 'pretpostavke',
          hint: 'The preposition od governs the genitive; this noun is feminine.',
          explanation:
            'Polazite od pretpostavke da… — polaziti od + genitive is the fixed opening of a reconstruction: it names what is assumed, as an assumption.',
        },
        {
          type: 'transform',
          q: 'The councilwoman reports his premise to the rest of the council. Begin with „Gospodin Jurić” and change the verb to match.',
          from: 'Polazite od pretpostavke da kupci dolaze automobilom.',
          answer: 'Gospodin Jurić polazi od pretpostavke da kupci dolaze automobilom.',
          accept: ['Gospodin Jurić polazi od pretpostavke da kupci dolaze autom.'],
          hint: 'She is no longer speaking TO him but ABOUT him: the polite second person becomes the third person singular.',
          explanation:
            'Gospodin Jurić polazi od pretpostavke da kupci dolaze automobilom. — polazite (Vi) becomes polazi (on). The premise itself is restated unchanged; that is what makes it a reconstruction.',
        },
        {
          type: 'transform',
          q: 'Name his conclusion as a conclusion. Begin with „Iz toga zaključujete da…” and keep all his words.',
          from: 'Zatvaranje ulice smanjilo bi prihod.',
          answer: 'Iz toga zaključujete da bi zatvaranje ulice smanjilo prihod.',
          accept: ['Iz toga zaključujete da bi zatvaranje ulice prihod smanjilo.'],
          hint: 'Inside the new clause the short conditional word can no longer lean on the participle: it moves up, right behind the conjunction.',
          explanation:
            'Iz toga zaključujete da bi zatvaranje ulice smanjilo prihod. — Iz toga zaključujete da… marks the step from premise to conclusion, and in the da-clause the clitic bi takes second position, directly after da.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Restating an opponent’s argument in its strongest form is mere politeness, and it weakens your own reply.',
        answer: false,
        hint: 'Think about what a reader concludes on seeing you strengthen a position before you reject it.',
        explanation:
          'False. It is a credibility move. A reader who has watched you make the position as strong as it can be will trust your rejection of it; refuting a weak, convenient form of it is visible and cheap.',
      },
      4,
      5,
      {
        type: 'sort',
        q: 'Which part of a reconstruction is it?',
        groups: ['Naming a premise', 'Naming a conclusion', 'Checking or closing the restatement'],
        items: [
          { hr: 'Autorica polazi od pretpostavke da su cijene stabilne.', group: 0 },
          { hr: 'Iz toga zaključuje da štednja nije potrebna.', group: 1 },
          { hr: 'Do ovdje autorica; ono što slijedi moj je prigovor.', group: 2 },
          { hr: 'Pretpostavlja da svi kupci imaju iste informacije.', group: 0 },
          { hr: 'Stoga tvrdi da je zakon suvišan.', group: 1 },
          { hr: 'Ako sam je dobro shvatio, upravo to tvrdi.', group: 2 },
        ],
        explanation:
          'polazi od pretpostavke and pretpostavlja name what is assumed; Iz toga zaključuje and Stoga tvrdi name what is said to follow. Do ovdje autorica marks where the restatement ends, and Ako sam je dobro shvatio checks it before any objection.',
      },
      6,
      7,
      3,
      0,
      {
        type: 'match',
        q: 'Match each formula to the job it does.',
        pairs: [
          ['Autor polazi od pretpostavke da…', 'names what is assumed'],
          ['Iz toga zaključuje da…', 'names what is said to follow'],
          [
            'Najjača verzija toga argumenta bila bi…',
            'strengthens the position before rejecting it',
          ],
          ['Toliko o njegovu stajalištu.', 'ends the restatement; the writer’s own voice begins'],
          ['Ako sam dobro razumio, tvrdnja glasi…', 'checks the restatement with its owner'],
        ],
        explanation:
          'Together these are the whole machinery: premise, conclusion, the strongest version, the check, and the boundary marker. Without the boundary marker a long, faithful restatement reads as the writer’s own opinion.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("The author proceeds from the claim that prices are stable.")',
        words: ['Autorica', 'polazi', 'od', 'tvrdnja', 'da', 'su', 'cijene', 'stabilne.'],
        wrong: 3,
        answer: 'tvrdnje',
        hint: 'Look at the preposition right before it, and at the case that preposition always takes.',
        explanation:
          'Autorica polazi od tvrdnje da su cijene stabilne. — od governs the genitive: od tvrdnje, od pretpostavke. The nominative after od is the slip the lesson warns about.',
      },
      2,
      {
        type: 'transform',
        q: 'Present the sentence as the author’s conclusion, not as your own view. Begin with „Iz toga zaključuje da…”.',
        from: 'Nalaz se može poopćiti.',
        answer: 'Iz toga zaključuje da se nalaz može poopćiti.',
        accept: ['Iz toga zaključuje da se može poopćiti nalaz.'],
        hint: 'In the new clause the short word se can no longer stay behind the noun: it moves to second position, right after the conjunction.',
        explanation:
          'Iz toga zaključuje da se nalaz može poopćiti. — the frame attributes the claim to the author, and the clitic se follows da directly.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "My objection concerns only the first step."',
        words: ['Moj', 'se', 'prigovor', 'odnosi', 'samo', 'na', 'prvi', 'korak.'],
        accept: [
          'Moj prigovor se odnosi samo na prvi korak.',
          'Samo se na prvi korak odnosi moj prigovor.',
        ],
        explanation:
          'Moj se prigovor odnosi samo na prvi korak. — careful style puts the clitic se after the first stressed word (Moj se prigovor); Moj prigovor se is equally standard. The sentence locates the objection at one step, not at the conclusion in general.',
      },
      {
        type: 'listen',
        audio:
          'Autor polazi od pretpostavke da su svi ispitanici odgovarali iskreno, pa iz toga zaključuje da rezultati vrijede za cijelu zemlju; upravo tu pretpostavku smatram spornom.',
        q: 'What does the speaker contest?',
        options: [
          'The conclusion that the results hold for the whole country',
          'The number of respondents in the survey',
          'The author’s honesty',
          'The assumption that all the respondents answered honestly',
        ],
        correct: 3,
        explanation:
          'The speaker first lays out the premise (polazi od pretpostavke da su svi ispitanici odgovarali iskreno) and the conclusion (iz toga zaključuje da…), and then objects to the premise: upravo tu pretpostavku smatram spornom — "it is precisely that assumption that I consider questionable".',
      },
      {
        type: 'dictate',
        audio: 'Ako sam Vas dobro razumjela, tvrdite upravo suprotno.',
        answer: 'Ako sam Vas dobro razumjela, tvrdite upravo suprotno.',
        hint: 'Seven words, a woman speaking politely to one person: "If I have understood you correctly, you are claiming exactly the opposite."',
        explanation:
          'Ako sam Vas dobro razumjela, tvrdite upravo suprotno. — the participle agrees with the speaker (razumjela for a woman), and Vas takes a capital when one person is addressed politely in writing.',
      },
    ],
  },

  // ── Speaking at length without preparation ─────────────────────────────────
  'spontani-govor': {
    text: {
      kind: 'dialogue',
      title: 'Pitanje slušatelja',
      lines: [
        {
          who: 'Voditelj',
          hr: 'Gospođo Vuković, dogovorili smo se da ćemo razgovarati o obnovi tržnice, ali jedan nas slušatelj upravo pita nešto drugo: zašto u središtu grada živi sve manje ljudi?',
          en: 'Ms. Vuković, we agreed to talk about the renovation of the market hall, but a listener is asking us something else right now: why do fewer and fewer people live in the city center?',
        },
        {
          who: 'Gošća',
          hr: 'Pa… to je dobro pitanje, i priznajem da ga nisam očekivala. Ako sam dobro razumjela, zanima ga zašto se ljudi iseljavaju iz samog središta, a ne iz grada općenito?',
          en: 'Well… that is a good question, and I admit I did not expect it. If I have understood correctly, he wants to know why people are moving out of the center itself, not out of the city in general?',
        },
        {
          who: 'Voditelj',
          hr: 'Tako je, misli na staru gradsku jezgru.',
          en: 'That is right, he means the old town core.',
        },
        {
          who: 'Gošća',
          hr: 'Dobro. Rekla bih dvije stvari. Prvo, stanovi su ondje skupi — odnosno, točnije rečeno, nisu toliko skupi koliko su neprikladni: bez dizala, bez parkirališta, s vlagom u zidovima.',
          en: 'All right. I would say two things. First, the apartments there are expensive — or rather, more precisely, they are not so much expensive as unsuitable: no elevator, no parking, damp in the walls.',
        },
        {
          who: 'Voditelj',
          hr: 'A drugo?',
          en: 'And second?',
        },
        {
          who: 'Gošća',
          hr: 'Drugo je, ovaj… kako da kažem… htjela sam reći da su dućani, koji su nekad, dok je u središtu još bilo… Reći ću to jednostavnije. Nestali su mali dućani. Tko nema automobil, ondje više nema gdje kupiti kruh.',
          en: 'The second is, er… how shall I put it… I wanted to say that the stores, which once, while there were still… I will put it more simply. The small stores have disappeared. If you do not have a car, there is no longer anywhere there to buy bread.',
        },
        {
          who: 'Voditelj',
          hr: 'Mislite li da će obnova tržnice tu nešto promijeniti?',
          en: 'Do you think the renovation of the market hall will change anything there?',
        },
        {
          who: 'Gošća',
          hr: 'Da budem iskrena, sama tržnica neće. Ali vratit ću se na to kad budemo govorili o projektu, jer je odgovor povezan s onim što planiramo u prizemlju.',
          en: 'To be honest, the market hall alone will not. But I will come back to that when we talk about the project, because the answer is connected with what we are planning on the ground floor.',
        },
        {
          who: 'Voditelj',
          hr: 'Može. Koliko će, usput, radovi trajati?',
          en: 'Fine. How long, by the way, will the work take?',
        },
        {
          who: 'Gošća',
          hr: 'Godinu dana, odnosno, ako ispod poda ne bude iznenađenja, četrnaest mjeseci. Mislim, kod starih su zgrada iznenađenja pravilo, a ne iznimka.',
          en: 'A year, or rather, if there are no surprises under the floor, fourteen months. I mean, with old buildings surprises are the rule, not the exception.',
        },
        {
          who: 'Voditelj',
          hr: 'Hvala Vam. Za odgovor bez pripreme bio je vrlo pregledan: najavili ste dvije stvari i obje ste dovršili.',
          en: 'Thank you. For an unprepared answer it was very clear: you announced two things and you finished both.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how does the guest give shape to an answer she had no time to prepare?',
          options: [
            'She asks the host to put the question to someone else',
            'She lists every cause she can think of, one after another',
            'She gives one long, carefully built sentence',
            'She announces two points and then delivers both of them',
          ],
          correct: 3,
          hint: 'Recall her short sentence right after „Dobro.” — and what the host praises at the end.',
          explanation:
            '„Rekla bih dvije stvari. Prvo… Drugo…” Announcing the shape commits her to finishing and tells the listener when she is done; the host says exactly that: she announced two things and finished both.',
        },
        {
          q: 'The guest says: „stanovi su ondje skupi — odnosno, točnije rečeno, nisu toliko skupi koliko su neprikladni”. What is she doing?',
          options: [
            'Starting her sentence again from the beginning',
            'Correcting herself inside the sentence, so that it sounds like precision rather than a stumble',
            'Contradicting what the host has just said',
            'Using two fillers because she has lost her thread',
          ],
          correct: 1,
          hint: 'Notice that the sentence never stops: two small words carry it from the first wording to the better one.',
          explanation:
            'odnosno and točnije rečeno are the repair words. She changes her mind about "expensive" without going back to the start, and the correction sounds like care. Restarting would have signaled that she lost control of the sentence.',
        },
        {
          type: 'type',
          q: 'Now you. The host asks you something you did not expect. Buy yourself a second: Da ____ iskren, o tome još nisam razmišljao. (biti)',
          answer: 'budem',
          hint: 'In this fixed phrase the verb "to be" takes its other present tense, the one used after da and kad — first person singular.',
          explanation:
            'Da budem iskren… — "to be honest". The phrase frames the answer while you are still finding it; a woman says Da budem iskrena, as the guest does.',
        },
        {
          type: 'transform',
          q: 'The speaker restarted. Repair in place instead: one sentence, with „odnosno” between the two durations.',
          from: 'Radovi će trajati godinu dana. Ne, čekajte, ispočetka: radovi će trajati četrnaest mjeseci.',
          answer: 'Radovi će trajati godinu dana, odnosno četrnaest mjeseci.',
          accept: [
            'Radovi će trajati godinu dana, odnosno, četrnaest mjeseci.',
            'Radovi će trajati godinu dana, odnosno, točnije rečeno, četrnaest mjeseci.',
            'Radovi će trajati godinu dana, odnosno točnije rečeno četrnaest mjeseci.',
          ],
          hint: 'Keep the first half exactly as it was said. The repair word goes where the speaker stopped, and only the new duration follows it.',
          explanation:
            'Radovi će trajati godinu dana, odnosno četrnaest mjeseci. — the sentence is corrected without being abandoned. „Ne, čekajte, ispočetka” is the audible restart that a fluent speaker avoids.',
        },
        {
          type: 'transform',
          q: 'Defer the question cleanly. Begin the sentence with the verb — and mind how the infinitive is written when the future word follows it.',
          from: 'Na to ću Vam odgovoriti poslije emisije.',
          answer: 'Odgovorit ću Vam na to poslije emisije.',
          accept: ['Odgovorit ću Vam poslije emisije na to.'],
          hint: 'When the infinitive comes first, it loses its final vowel in writing, and the short words follow it at once.',
          explanation:
            'Odgovorit ću Vam na to poslije emisije. — before ću the infinitive in -ti is written without its final i (odgovorit ću, vratit ću se); after ću it is written in full (ću odgovoriti).',
        },
      ],
    },
    mix: [
      8,
      5,
      {
        type: 'tf',
        q: 'When a sentence goes wrong halfway, the most fluent thing to do is to stop and begin it again from the first word.',
        answer: false,
        hint: 'Think about which of the two the listener actually hears: a small correction inside the sentence, or a sentence abandoned.',
        explanation:
          'False. Restarting is the audible loss of control. A fluent speaker repairs in place with odnosno or točnije rečeno, or quietly turns a stalled clause into two short sentences — and the listener notices neither.',
      },
      7,
      4,
      {
        type: 'sort',
        q: 'What is the speaker doing?',
        groups: ['Buying time', 'Repairing in place', 'Giving the answer a visible shape'],
        items: [
          { hr: 'To je dobro pitanje.', group: 0 },
          { hr: 'Ovisi o tome kako gledate.', group: 0 },
          { hr: '…u ožujku, odnosno početkom travnja.', group: 1 },
          { hr: '…skupo, točnije rečeno, preskupo.', group: 1 },
          { hr: 'Prvo, cijene rastu.', group: 2 },
          { hr: 'I drugo, čime završavam: plaće ih ne prate.', group: 2 },
        ],
        explanation:
          'To je dobro pitanje and Ovisi o tome kako gledate buy a second without sounding lost. odnosno and točnije rečeno correct the sentence without restarting it. Prvo… and I drugo, čime završavam… show the listener where the answer is and when it ends.',
      },
      6,
      1,
      {
        type: 'match',
        q: 'Match the Croatian move to its closest English counterpart.',
        pairs: [
          ['ovaj…', 'er…'],
          ['znači…', 'so… (literally "it means")'],
          ['mislim…', 'I mean…'],
          ['odnosno', 'or rather'],
          ['Vratit ću se na to.', 'I will come back to that.'],
        ],
        explanation:
          'Croatian has its own fillers — pa, ovaj, znači, mislim — and translating "um" or "you know" gives nothing usable. odnosno is not a filler but a repair word, and Vratit ću se na to defers a point without dropping it.',
      },
      0,
      {
        type: 'fix',
        q: 'One word is misspelled by the rules of the standard. Tap it. ("I will explain that at the end.")',
        words: ['Objasniti', 'ću', 'to', 'na', 'kraju.'],
        wrong: 0,
        answer: 'Objasnit',
        hint: 'Say it aloud: the infinitive and the short future word fuse in speech, and standard spelling shows it.',
        explanation:
          'Objasnit ću to na kraju. — when the infinitive in -ti stands directly before ću, ćeš, će…, it is written without its final i. In the other order it stays whole: To ću objasniti na kraju.',
      },
      10,
      {
        type: 'transform',
        q: 'The same unprepared answer, now spoken by a woman. Change every form that shows the speaker’s gender.',
        from: 'Rekao bih dvije stvari. Da budem iskren, nisam to očekivao.',
        answer: 'Rekla bih dvije stvari. Da budem iskrena, nisam to očekivala.',
        hint: 'Two participles and one adjective describe the speaker. The numeral belongs to „stvari” and stays as it is.',
        explanation:
          'Rekla bih dvije stvari. Da budem iskrena, nisam to očekivala. — the l-participles (rekla, očekivala) and the adjective (iskrena) agree with the speaker; bih and budem do not change.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order (a woman speaking politely to one person): "If I have understood the question correctly, you are interested in the price."',
        words: ['Ako', 'sam', 'dobro', 'razumjela', 'pitanje,', 'zanima', 'Vas', 'cijena.'],
        accept: [
          'Ako sam pitanje dobro razumjela, zanima Vas cijena.',
          'Ako sam dobro razumjela pitanje, cijena Vas zanima.',
        ],
        explanation:
          'Ako sam dobro razumjela pitanje, zanima Vas cijena. — the clitic sam follows Ako at once, and Vas follows the first word of the main clause. The sentence buys time and checks comprehension in one move.',
      },
      {
        type: 'listen',
        audio:
          'Pa, da budem iskren, na to pitanje nemam gotov odgovor, ali rekao bih da sve ovisi o tome hoće li grad ispuniti ono što je obećao.',
        q: 'What is the speaker’s position?',
        options: [
          'He refuses to answer the question',
          'He has no ready answer, but thinks everything depends on whether the city keeps its promise',
          'He is certain that the city will keep its promise',
          'He promises to answer once the city has decided',
        ],
        correct: 1,
        explanation:
          'Pa, da budem iskren — a filler and a framing phrase buy him time; nemam gotov odgovor — he admits he has no ready answer; rekao bih da sve ovisi o tome hoće li grad ispuniti ono što je obećao — and then he commits to one clear point.',
      },
      {
        type: 'dictate',
        audio: 'Pa, kako da kažem, to je složeno pitanje.',
        answer: 'Pa, kako da kažem, to je složeno pitanje.',
        hint: 'Eight words: "Well, how shall I put it, that is a complicated question."',
        explanation:
          'Pa, kako da kažem, to je složeno pitanje. — Pa and kako da kažem are set off by commas; together they buy a full second before the real answer begins.',
      },
    ],
  },

  // ── Reading older Croatian ─────────────────────────────────────────────────
  'stari-tekstovi': {
    text: {
      kind: 'dialogue',
      title: 'Pismo iz 1828. godine',
      lines: [
        {
          who: 'Posjetiteljica',
          hr: 'Oprostite, među bakinim sam papirima našla ovo pismo iz 1828. godine, ali ne razumijem ni prvi redak. Piše: „Szine moj dragi, knjigu tvoju primih.” Je li to uopće hrvatski?',
          en: 'Excuse me, among my grandmother’s papers I found this letter from 1828, but I do not understand even the first line. It says: “Szine moj dragi, knjigu tvoju primih.” Is that Croatian at all?',
        },
        {
          who: 'Arhivist',
          hr: 'Jest, i to sasvim običan. Pročitajte naglas: ono „sz” na početku samo je stari način pisanja glasa s, preuzet iz mađarskoga pravopisa. Dakle: „Sine moj dragi”.',
          en: 'It is, and quite ordinary Croatian at that. Read it aloud: that “sz” at the beginning is just an old way of writing the sound s, taken over from Hungarian spelling. So: “Sine moj dragi”.',
        },
        {
          who: 'Posjetiteljica',
          hr: 'A zašto otac spominje knjigu? Dalje u pismu nema ni riječi o knjigama.',
          en: 'And why does the father mention a book? Further on in the letter there is not a word about books.',
        },
        {
          who: 'Arhivist',
          hr: 'Zato što u starijim tekstovima „knjiga” često znači pismo. A „primih” je aorist, prošlo vrijeme koje danas rijetko čujemo u govoru: mi bismo rekli „primio sam”.',
          en: 'Because in older texts “knjiga” often means a letter. And “primih” is an aorist, a past tense we rarely hear in speech today: we would say “primio sam”.',
        },
        {
          who: 'Posjetiteljica',
          hr: 'Znači, otac piše: „Sine moj dragi, primio sam tvoje pismo.” A ovo u drugom retku? „Bijaše zima ljuta i vazda mišljah na te.”',
          en: 'So the father writes: “My dear son, I have received your letter.” And this in the second line? “Bijaše zima ljuta i vazda mišljah na te.”',
        },
        {
          who: 'Arhivist',
          hr: '„Bijaše” je imperfekt glagola biti, dakle „bila je”. I „mišljah” je imperfekt: „mislio sam”. Starinsko „vazda” znači isto što i naše „uvijek”, a „na te” danas glasi „na tebe”.',
          en: '“Bijaše” is the imperfect of the verb biti, that is, “bila je”. “Mišljah” is an imperfect too: “mislio sam”. The old-fashioned “vazda” means the same as our “uvijek”, and “na te” is today “na tebe”.',
        },
        {
          who: 'Posjetiteljica',
          hr: '„Bila je ljuta zima i uvijek sam mislio na tebe.” Pa to je lijepo! A ja sam mislila da je pismo puno pogrešaka.',
          en: '“It was a bitter winter and I always thought of you.” Why, that is lovely! And I thought the letter was full of mistakes.',
        },
        {
          who: 'Arhivist',
          hr: 'To je najčešća zabluda. Prije Gajeve reforme, tridesetih godina devetnaestoga stoljeća, nije bilo jedinstvenoga pravopisa, pa je svatko pisao onako kako je naučio. Jezik je naš; samo je pravopis tuđi.',
          en: 'That is the most common misconception. Before Gaj’s reform, in the 1830s, there was no single orthography, so everyone wrote the way they had learned. The language is ours; only the spelling is foreign.',
        },
        {
          who: 'Posjetiteljica',
          hr: 'Kojim bih redom onda trebala čitati ostatak?',
          en: 'In what order should I read the rest, then?',
        },
        {
          who: 'Arhivist',
          hr: 'Najprije potražite glagole, jer oni nose radnju. Zatim naglas pročitajte ono što Vam izgleda čudno. U rječnik zavirite tek kad Vas neka riječ doista zaustavi.',
          en: 'First look for the verbs, because they carry the action. Then read aloud whatever looks strange to you. Look in the dictionary only when a word really stops you.',
        },
        {
          who: 'Posjetiteljica',
          hr: 'Onda idem dalje. Evo: „I tada dođoše ljudi iz grada.” To je, pretpostavljam, opet aorist: „došli su”.',
          en: 'Then I will go on. Here: “I tada dođoše ljudi iz grada.” That, I assume, is an aorist again: “došli su”.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: the visitor thought the letter was full of mistakes. What does the archivist tell her?',
          options: [
            'That the father was poorly educated and wrote as he spoke',
            'That the letter is written in another language',
            'That it is ordinary Croatian written before there was one agreed spelling',
            'That the letter was damaged, and some letters were added later',
          ],
          correct: 2,
          hint: 'Recall his short verdict about the language and the spelling.',
          explanation:
            '„Jezik je naš; samo je pravopis tuđi.” Before Gaj’s reform in the 1830s there was no single orthography, and writers borrowed foreign conventions — here sz for the sound s. Read aloud, the line is plain Croatian.',
        },
        {
          q: 'In the old line „knjigu tvoju primih”, what did the father receive?',
          options: ['A letter', 'A book', 'A prayer book', 'A parcel'],
          correct: 0,
          hint: 'The visitor is puzzled that nothing else in the letter is about books.',
          explanation:
            'In older texts knjiga often means a letter. primih is the aorist of primiti, first person singular, so the line says: "I have received your letter" — primio sam tvoje pismo.',
        },
        {
          type: 'type',
          q: 'Now you. The next line of the letter has another older past tense (an aorist, first person): „I vidjeh brata tvoga.” Say it as we would today: I ____ sam tvoga brata. (vidjeti — a man is writing)',
          answer: 'vidio',
          hint: 'You need the l-participle, masculine singular: the je of the stem turns into i before the final o.',
          explanation:
            'I vidio sam tvoga brata. — the older aorist vidjeh corresponds to the modern perfect: participle + sam. vidjeti gives vidio, vidjela.',
        },
        {
          type: 'transform',
          q: 'A line written for this lesson in the older manner: an imperfect of „biti” and an old word for "always". Retell it in modern Croatian.',
          from: 'Bijaše vazda vesela.',
          answer: 'Uvijek je bila vesela.',
          accept: [
            'Bila je uvijek vesela.',
            'Ona je uvijek bila vesela.',
            'Uvijek je ona bila vesela.',
          ],
          hint: 'The old verb form is a past tense of "to be" — the adjective tells you whose. The old adverb has an everyday modern counterpart, which the archivist names.',
          explanation:
            'Uvijek je bila vesela. — bijaše is the imperfect of biti (here "she was", as vesela shows), and the old-fashioned vazda is today’s uvijek.',
        },
        {
          type: 'transform',
          q: 'Older narrative, written for this lesson: two aorists in the third person plural. Retell it in modern Croatian.',
          from: 'Dođoše ljudi iz grada i sjedoše za stol.',
          answer: 'Došli su ljudi iz grada i sjeli za stol.',
          accept: [
            'Došli su ljudi iz grada i sjeli su za stol.',
            'Ljudi iz grada došli su i sjeli za stol.',
            'Ljudi iz grada došli su i sjeli su za stol.',
            'Ljudi su iz grada došli i sjeli za stol.',
            'Ljudi iz grada su došli i sjeli za stol.',
          ],
          hint: 'The ending -oše marks "they" in the aorist. Each form becomes a participle with the auxiliary; the second auxiliary may be left out.',
          explanation:
            'Došli su ljudi iz grada i sjeli za stol. — dođoše → došli su, sjedoše → sjeli su. The aorist is the ordinary narrative tense of older prose; the modern perfect replaces it.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: 'A text printed in 1790 that writes „sz” where we write „s” is simply full of spelling mistakes.',
        answer: false,
        hint: 'Ask whether there was one agreed spelling to make mistakes against at that time.',
        explanation:
          'False. Until Gaj’s reform in the 1830s Croatian had no single orthography, and writers used Italian, Hungarian or German conventions for the sounds Latin has no letters for. The spelling is borrowed; the language is Croatian.',
      },
      5,
      6,
      3,
      11,
      {
        type: 'sort',
        q: 'Which older narrative tense is it?',
        groups: ['Imperfect — a lasting state or repeated action', 'Aorist — one completed act'],
        items: [
          { hr: 'bijaše', group: 0 },
          { hr: 'dođe', group: 1 },
          { hr: 'gledahu', group: 0 },
          { hr: 'rekoše', group: 1 },
          { hr: 'pisaše', group: 0 },
          { hr: 'ugledah', group: 1 },
        ],
        explanation:
          'bijaše (was), gledahu (they were watching) and pisaše (was writing) are imperfects: something that lasted. dođe (came), rekoše (they said) and ugledah (I caught sight of) are aorists: one completed act. Recognizing the two is most of the work of reading older prose.',
      },
      7,
      0,
      {
        type: 'match',
        q: 'Match what an older text has to what we would say today.',
        pairs: [
          ['vazda', 'uvijek'],
          ['jur', 'već'],
          ['bijaše', 'bio je / bila je'],
          ['rekoše', 'rekli su'],
          ['knjiga (koju netko šalje po glasniku)', 'pismo'],
        ],
        explanation:
          'vazda and jur are older words for uvijek and već. bijaše is the imperfect of biti and rekoše the aorist of reći; today we use the perfect for both. knjiga in older texts can be a letter — the sense survives only in such contexts.',
      },
      {
        type: 'fix',
        q: 'A sentence in the older narrative style. One verb form does not agree with its subject. Tap it. ("The travelers were tired from the long journey.")',
        words: ['Putnici', 'bijaše', 'umorni', 'od', 'duga', 'puta.'],
        wrong: 1,
        answer: 'bijahu',
        hint: 'The subject is "they". The imperfect of „biti” has a different ending for the third person plural.',
        explanation:
          'Putnici bijahu umorni od duga puta. — the imperfect of biti: bijah, bijaše, bijaše, bijasmo, bijaste, bijahu. bijaše serves for "you" (singular) and for "he, she, it"; "they" need bijahu.',
      },
      {
        type: 'transform',
        q: 'A line written for this lesson in pre-Gaj spelling. Write it as we would today: modern spelling and a modern past tense.',
        from: 'Szestra moja bijaše mlada.',
        answer: 'Moja je sestra bila mlada.',
        accept: [
          'Moja sestra je bila mlada.',
          'Moja sestra bila je mlada.',
          'Sestra moja bila je mlada.',
          'Sestra je moja bila mlada.',
          'Sestra moja je bila mlada.',
        ],
        hint: 'Sound out the first word: the digraph stands for one plain sound. The verb is an older past form of "to be"; make its modern replacement agree with a feminine subject.',
        explanation:
          'Moja je sestra bila mlada. — sz is the older, Hungarian-style spelling of s; bijaše becomes je bila, in agreement with sestra. Today the possessive usually comes first, and the clitic je stands after the first stressed word.',
      },
      9,
      {
        type: 'order',
        q: 'An older text has „Kad dođoše na vrh, ugledaše more.” Put the modern version in order: "When they came to the top, they caught sight of the sea."',
        words: ['Kad', 'su', 'došli', 'na', 'vrh,', 'ugledali', 'su', 'more.'],
        accept: [
          'Kad su na vrh došli, ugledali su more.',
          'Kad su došli na vrh, more su ugledali.',
        ],
        explanation:
          'Kad su došli na vrh, ugledali su more. — each aorist becomes a participle with su, and in each clause su takes second position: after Kad in the first, after the participle in the second.',
      },
      10,
      {
        type: 'listen',
        audio: 'Kad dođoše do rijeke, bijaše već mrak, pa prenoćiše u mlinu.',
        q: 'A sentence in the older narrative tenses. What happened?',
        options: [
          'They set out for the river before dark and passed the mill',
          'They waited at the mill until it grew dark and then went to the river',
          'They reached the river when it was already dark, so they spent the night in the mill',
          'They could not find the river in the dark and went back',
        ],
        correct: 2,
        explanation:
          'dođoše (they came) and prenoćiše (they spent the night) are aorists — the completed acts of the story; bijaše (it was) is an imperfect — the state in the background. Today: Kad su došli do rijeke, bio je već mrak, pa su prenoćili u mlinu.',
      },
      {
        type: 'dictate',
        audio: 'Kad pročitah pismo, sve mi postade jasno.',
        answer: 'Kad pročitah pismo, sve mi postade jasno.',
        hint: 'Seven words in the older narrative style, with two aorists (first person, then third): "When I read the letter, everything became clear to me."',
        explanation:
          'Kad pročitah pismo, sve mi postade jasno. — pročitah is the first-person aorist of pročitati, and postade the third-person aorist of postati. Today: Kad sam pročitao pismo, sve mi je postalo jasno.',
      },
    ],
  },

  // ── What a language choice says about you ──────────────────────────────────
  'jezik-i-drustvo': {
    text: {
      kind: 'dialogue',
      title: 'Prvi dopis novom ravnatelju',
      lines: [
        {
          who: 'Ante',
          hr: 'Majo, prije nego što ovo pošaljem novom ravnatelju, baci oko. Napisao sam: „Hej, saljem ti fajl s dokumentima, javi jel sve ok.”',
          en: 'Maja, before I send this to the new director, take a look. I wrote: “Hej, saljem ti fajl s dokumentima, javi jel sve ok.”',
        },
        {
          who: 'Maja',
          hr: 'Ante, tako možeš pisati meni. Tog čovjeka nikad nisi vidio, stariji je od tebe i bit će ti šef. Njemu se obraćaš s „Vi”, i to velikim slovom, jer pišeš jednoj osobi.',
          en: 'Ante, you can write to me like that. You have never seen this man, he is older than you, and he is going to be your boss. You address him as “Vi”, and with a capital letter, because you are writing to one person.',
        },
        {
          who: 'Ante',
          hr: 'Ali netko mi je iz ureda rekao da su ondje svi na ti.',
          en: 'But someone from the office told me that everyone there is on ti terms.',
        },
        {
          who: 'Maja',
          hr: 'Možda i jesu, ali to će ti ponuditi on. Kad stariji ili nadređeni kaže „Možemo na ti?”, prihvatiš i više se ne vraćaš na „Vi”. Dotad čekaš.',
          en: 'Maybe they are, but he is the one who will offer it to you. When the older or more senior person says “Možemo na ti?”, you accept and do not go back to “Vi”. Until then you wait.',
        },
        {
          who: 'Ante',
          hr: 'Dobro. A kvačice? Na mobitelu ih nikad ne pišem.',
          en: 'All right. And the diacritics? I never type them on my phone.',
        },
        {
          who: 'Maja',
          hr: 'U poruci meni i ne moraš. Ali u službenom e-mailu „saljem” bez kvačice ne izgleda kao žurba, nego kao nemar. I umjesto „fajl” napiši „datoteka” ili jednostavno „u privitku”.',
          en: 'In a message to me you do not have to. But in an official email “saljem” without its diacritic does not look like haste; it looks like carelessness. And instead of “fajl” write “datoteka”, or simply “u privitku”.',
        },
        {
          who: 'Ante',
          hr: 'Nije li to previše ukočeno? Nitko mojih godina ne govori „datoteka”.',
          en: 'Isn’t that too stiff? Nobody my age says “datoteka”.',
        },
        {
          who: 'Maja',
          hr: 'U razgovoru ne, i nitko ti na kavi neće zamjeriti „fajl”. Nije stvar u tome što je točno, nego tko čita i gdje. Ravnatelj u prvom dopisu očekuje standard.',
          en: 'Not in conversation, and nobody will hold “fajl” against you over coffee. It is not a question of what is correct, but of who is reading and where. In a first letter the director expects the standard.',
        },
        {
          who: 'Ante',
          hr: 'Znači: „Poštovani gospodine ravnatelju, u privitku Vam dostavljam tražene dokumente. S poštovanjem, Ante Radić.”',
          en: 'So: “Dear Director, please find the requested documents attached. Sincerely, Ante Radić.”',
        },
        {
          who: 'Maja',
          hr: 'Savršeno. Meni i dalje piši bez kvačica, a s bakom govori onako kako te je ona naučila. Ni jedno ni drugo nije pogreška.',
          en: 'Perfect. Keep writing to me without diacritics, and with Grandma speak the way she taught you. Neither of those is a mistake.',
        },
        {
          who: 'Ante',
          hr: 'Dakle, nemam jedan hrvatski, nego tri: jedan za ravnatelja, jedan za tebe i jedan za baku.',
          en: 'So I do not have one Croatian but three: one for the director, one for you, and one for Grandma.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: every word of Ante’s draft is understandable. Why does Maja stop him from sending it?',
          options: [
            'Because it contains a grammar mistake that the director would notice',
            'Because it is written the way you write to a friend, and it is going to an older stranger who will be his boss',
            'Because it is too long for an email',
            'Because the director does not understand anglicisms',
          ],
          correct: 1,
          hint: 'Recall whom she says he CAN write to like that.',
          explanation:
            '„Tako možeš pisati meni.” The draft is a message to a friend: ti, no diacritics, an anglicism, no greeting formula. Nothing in it is wrong in itself; it is simply addressed to the wrong reader.',
        },
        {
          q: 'According to Maja, how does the switch from Vi to ti happen?',
          options: [
            'Ante should propose it in his first email, to seem friendly',
            'It happens automatically after the first meeting',
            'Colleagues from the office decide it for the newcomer',
            'The older or more senior person offers it; Ante accepts and then stays with ti',
          ],
          correct: 3,
          hint: 'She tells him whose move it is — and what he does until then.',
          explanation:
            '„To će ti ponuditi on.” The offer belongs to the older or more senior person; coming from the junior side it reads as presumption. Once it is accepted, drifting back to the polite form reads as uncertainty.',
        },
        {
          type: 'type',
          q: 'Now you. Ante adds one more sentence to his email to the director: Zahvaljujem ____ na povjerenju. (the polite "you" — one person, in a letter)',
          answer: 'Vam',
          hint: 'zahvaljivati takes the dative of the person. In a letter to one person the polite pronoun is written with a capital.',
          explanation:
            'Zahvaljujem Vam na povjerenju. — zahvaljivati + dative of the person + na + locative. The capital shows that one person is being addressed politely.',
        },
        {
          type: 'transform',
          q: 'Move Ante’s message into the register of an official email: polite address, diacritics, and the native word in place of the anglicism.',
          from: 'saljem ti fajl',
          answer: 'Šaljem Vam datoteku.',
          accept: [
            'Šaljem Vam datoteku u privitku.',
            'U privitku Vam šaljem datoteku.',
            'Dostavljam Vam datoteku.',
            'U privitku Vam dostavljam datoteku.',
          ],
          hint: 'Three things change: the first letter of the verb gets its diacritic, the pronoun changes person and gets a capital, and the object becomes the feminine noun Maja suggests — in the accusative.',
          explanation:
            'Šaljem Vam datoteku. — š is obligatory in anything professional, Vam replaces ti, and datoteka (accusative datoteku) replaces fajl. The message version stays perfectly fine between friends.',
        },
        {
          type: 'transform',
          q: 'A month later the director says „Možemo na ti?” and Ante accepts. Rewrite Ante’s question accordingly.',
          from: 'Hoćete li mi poslati raspored?',
          answer: 'Hoćeš li mi poslati raspored?',
          accept: ['Hoćeš mi poslati raspored?'],
          hint: 'Only the verb shows the form of address here: second person plural becomes second person singular.',
          explanation:
            'Hoćeš li mi poslati raspored? — after the offer is accepted, the switch is clean: ti forms only, from that moment on.',
        },
      ],
    },
    mix: [
      5,
      8,
      {
        type: 'tf',
        q: 'Leaving out č, ć, š, ž and đ in an official email is read the same way as in a text message: as ordinary quick typing.',
        answer: false,
        hint: 'The same habit sends a different signal in a different medium.',
        explanation:
          'False. In a quick message to a friend, missing diacritics are normal for that register. In anything professional they are obligatory, and their absence is read as carelessness, not as speed.',
      },
      4,
      6,
      3,
      {
        type: 'sort',
        q: 'Where does the line belong?',
        groups: ['In an official email or letter', 'In a message to a friend'],
        items: [
          { hr: 'Zahvaljujem na brzom odgovoru i srdačno Vas pozdravljam.', group: 0 },
          { hr: 'di si, ides veceras?', group: 1 },
          { hr: 'U privitku dostavljam traženu potvrdu.', group: 0 },
          { hr: 'lajkala sam ti sliku, bas je kul', group: 1 },
          { hr: 'Molim Vas da mi potvrdite termin sastanka.', group: 0 },
          { hr: 'evo me za 5 min, cekaj', group: 1 },
        ],
        explanation:
          'The official lines have full diacritics, capitals, the polite Vas and the vocabulary of administration (u privitku, dostavljam, potvrdite). The messages drop diacritics and capitals and use spoken forms and anglicisms — legitimate there, and only there.',
      },
      7,
      {
        type: 'match',
        q: 'Match the word you hear over coffee to the one an official text uses.',
        pairs: [
          ['fajl', 'datoteka'],
          ['atačment', 'privitak'],
          ['mejl', 'elektronička pošta'],
          ['printati', 'ispisati'],
          ['skinuti s interneta', 'preuzeti s interneta'],
        ],
        explanation:
          'Both columns are Croatian that people really use. The left one signals age and a relaxed setting; the right one signals a careful, institutional text. The axis is who is reading and where — not right and wrong.',
      },
      1,
      {
        type: 'fix',
        q: 'One word breaks the register that the letter itself has set. Tap it. ("Dear Mrs. Kovač, I am sending you the requested document.")',
        words: ['Poštovana', 'gospođo', 'Kovač,', 'šaljem', 'ti', 'traženi', 'dokument.'],
        wrong: 4,
        answer: 'Vam',
        hint: 'The greeting has already chosen the form of address; the pronoun has to follow it — and in a letter to one person it takes a capital.',
        explanation:
          'Poštovana gospođo Kovač, šaljem Vam traženi dokument. — a letter that opens with Poštovana gospođo stays with the polite form throughout. Mixing the two forms of address in one text is a slip every reader notices.',
      },
      0,
      {
        type: 'transform',
        q: 'This line was typed on a phone and is about to go into an official email. Restore every diacritic.',
        from: 'Postovani, saljem trazeno izvjesce.',
        answer: 'Poštovani, šaljem traženo izvješće.',
        accept: ['Poštovani, šaljem Vam traženo izvješće.'],
        hint: 'Four words, five missing marks. Say each word aloud and listen for the sounds that plain s, z and c cannot spell.',
        explanation:
          'Poštovani, šaljem traženo izvješće. — š, š, ž, š and ć. Without them the line belongs in a message to a friend; with them it can go to a client.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "I am sending you the requested certificate as an attachment."',
        words: ['U', 'privitku', 'Vam', 'dostavljam', 'traženu', 'potvrdu.'],
        accept: [
          'Dostavljam Vam traženu potvrdu u privitku.',
          'Dostavljam Vam u privitku traženu potvrdu.',
          'Traženu Vam potvrdu dostavljam u privitku.',
          'Traženu potvrdu dostavljam Vam u privitku.',
          'U privitku Vam traženu potvrdu dostavljam.',
        ],
        explanation:
          'U privitku Vam dostavljam traženu potvrdu. — the conventional opening of an official email. The clitic Vam stands after the opening phrase U privitku and keeps its capital.',
      },
      {
        type: 'listen',
        audio:
          'Na prvom sam se sastanku svima obraćala s Vi, a kad mi je ravnateljica sama predložila da prijeđemo na ti, rado sam pristala.',
        q: 'How did the speaker come to be on ti terms with the director?',
        options: [
          'She proposed it herself at the first meeting',
          'She used ti with everyone from the start',
          'The director proposed it, and she gladly accepted',
          'She refused the offer and stayed with Vi',
        ],
        correct: 2,
        explanation:
          'svima sam se obraćala s Vi — she began with the polite form for everyone; ravnateljica mi je sama predložila da prijeđemo na ti — the director herself proposed the switch; rado sam pristala — and she gladly agreed. That is the order the lesson recommends.',
      },
      {
        type: 'dictate',
        audio: 'U poruci pišem bez kvačica, a u dopisu nikad.',
        answer: 'U poruci pišem bez kvačica, a u dopisu nikad.',
        hint: 'Nine words: "In a message I write without diacritics, and in an official letter never."',
        explanation:
          'U poruci pišem bez kvačica, a u dopisu nikad. — kvačica is the everyday word for the hook on č, š and ž; bez takes the genitive plural (kvačica). The sentence is the rule of the two registers in one line.',
      },
    ],
  },
};
