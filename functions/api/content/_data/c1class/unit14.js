// ─── C1 lessons in class order — Unit 14 (style, irony and humor) ────────────
// Five of the lessons that came into C1 when C2 was folded into it (2026-11-18):
// stilske-figure, knjizevni-stil, publicisticki-stil, ironija-podtekst,
// humor-jezicni. Same shape and rules as the other C1 class files:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Every Croatian quotation closes with ” („…”). A typed answer is never printed
// by an earlier item of the same sequence — in stilske-figure that is why the new
// exercises name the figures in English until the learner has typed each Croatian
// name. A "wrong" form is always a clear violation of the standard. The literary
// passage in knjizevni-stil is original text written for this course.

export const CLASS_C1_U14 = {
  // ── Rhetorical figures ─────────────────────────────────────────────────────
  'stilske-figure': {
    text: {
      kind: 'dialogue',
      title: 'Zdravica za bratovo vjenčanje',
      lines: [
        {
          who: 'Ivan',
          hr: 'Lucija, spasi me. U subotu sam kum na bratovu vjenčanju, a moja zdravica zvuči kao zapisnik sa sastanka suvlasnika zgrade.',
          en: 'Lucija, save me. On Saturday I am the best man at my brother’s wedding, and my toast sounds like the minutes of a building co-owners’ meeting.',
        },
        {
          who: 'Lucija',
          hr: 'Daj da vidim. „Marko je dobar čovjek, a Ana je dobra žena.” Točno je, ali je mrtvo. Zdravici ne treba više podataka, nego više slika.',
          en: 'Let me see. “Marko je dobar čovjek, a Ana je dobra žena.” It is true, but it is dead. A toast does not need more facts; it needs more images.',
        },
        {
          who: 'Ivan',
          hr: 'Slika? Pa nisam pjesnik. Sto sam puta sjeo za stol i svaki put ustao bez ijedne rečenice.',
          en: 'Images? I am no poet. I have sat down at the desk a hundred times and got up every time without a single sentence.',
        },
        {
          who: 'Lucija',
          hr: 'Eto, upravo si upotrijebio hiperbolu, a da nisi ni trepnuo. Nisi sjeo sto puta, ali svi razumijemo koliko si se namučio. Figure nisu ukras za pjesnike; njima govorimo svaki dan.',
          en: 'There, you have just used a hyperbole without even blinking. You did not sit down a hundred times, but we all understand how hard it was for you. Figures are not decoration for poets; we speak in them every day.',
        },
        {
          who: 'Ivan',
          hr: 'Dobro. Htio sam reći da je Marko uvijek bio uz mene, da je bio kao stijena, ali to zvuči kao čestitka s kioska.',
          en: 'All right. I wanted to say that Marko was always by my side, that he was like a rock, but that sounds like a greeting card from a newsstand.',
        },
        {
          who: 'Lucija',
          hr: 'Onda nemoj reći da je bio kao stijena, nego da je bio stijena. Kad izbaciš „kao”, usporedba postaje metafora, a rečenica dobije težinu.',
          en: 'Then do not say that he was like a rock, but that he was a rock. When you drop “kao”, the simile becomes a metaphor, and the sentence gains weight.',
        },
        {
          who: 'Ivan',
          hr: '„Marko je bio moja stijena.” Nije loše. A kako da kažem koliko je strpljiv s Anom? I kako da završim, a da se ljudi i nasmiju i ganu?',
          en: '“Marko je bio moja stijena.” Not bad. And how do I say how patient he is with Ana? And how do I finish so that people both laugh and are moved?',
        },
        {
          who: 'Lucija',
          hr: 'Strpljenje opiši gradacijom, od najslabijega prema najjačemu: „Čekao ju je sat, čekao ju je dan, čekao bi je i cijeli život.” Okreneš li redoslijed, rečenica se ispuše. A za kraj uzmi antitezu: „Marko kasni na svaki sastanak, ali je na ovaj došao pola sata ranije.”',
          en: 'Describe the patience with a gradation, from the weakest step to the strongest: “Čekao ju je sat, čekao ju je dan, čekao bi je i cijeli život.” If you reverse the order, the sentence goes flat. And for the ending, take an antithesis: “Marko kasni na svaki sastanak, ali je na ovaj došao pola sata ranije.”',
        },
        {
          who: 'Ivan',
          hr: 'Tko bi rekao da ću zbog jedne zdravice ponavljati gradivo iz hrvatskoga?',
          en: 'Who would have thought that one toast would have me reviewing my Croatian class material?',
        },
        {
          who: 'Lucija',
          hr: 'Vidiš, i retoričko pitanje već imaš u malom prstu. Još samo jedno zapamti: u subotu će te slušati cijela dvorana, zato govori polako.',
          en: 'You see, you already know the rhetorical question inside out too. Just remember one more thing: on Saturday the whole hall will be listening to you, so speak slowly.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Lucija find wrong with Ivan’s first draft?',
          options: [
            'It contains grammar mistakes that the guests would notice',
            'It is too long for a wedding toast',
            'It uses too many figures and sounds like poetry',
            'Everything in it is true, but it is lifeless — it gives facts where a toast needs images',
          ],
          correct: 3,
          hint: 'Recall her verdict on the sentence about Marko and Ana, and what she says a toast needs more of.',
          explanation:
            '„Točno je, ali je mrtvo. Zdravici ne treba više podataka, nego više slika.” The draft is correct and flat; the rest of the conversation supplies the images: a hyperbole, a metaphor, a gradation and an antithesis.',
        },
        {
          q: 'Lucija’s last piece of advice is „u subotu će te slušati cijela dvorana”. She does not name the figure she has just used herself. Which is it?',
          options: [
            'metonimija — the hall stands for the people sitting in it',
            'metafora — the hall is likened to an audience',
            'hiperbola — she exaggerates the number of guests',
            'antiteza — the hall is set against the speaker',
          ],
          correct: 0,
          hint: 'Walls do not listen. Ask whether the hall resembles the guests or simply contains them.',
          explanation:
            'cijela dvorana is a metonymy: the place stands for the people in it, a transfer by real connection, not by likeness — the same move as „Cijeli je grad izašao na ulice”.',
        },
        {
          type: 'type',
          q: 'Now you. Ivan builds one more gradation for the toast. Supply the last and strongest step: Voli je danas, voljet će je sutra, voljet će je ____. (forever)',
          answer: 'zauvijek',
          accept: ['uvijek'],
          hint: 'Today, tomorrow — and then the one adverb of time that has no end.',
          explanation:
            'Voli je danas, voljet će je sutra, voljet će je zauvijek. — a gradation climbs: danas → sutra → zauvijek. Put the strongest step anywhere but last and the sentence goes flat.',
        },
        {
          type: 'transform',
          q: 'Do to this sentence what Lucija did to the rock: turn the simile into a metaphor.',
          from: 'Ana je kao sunce u našoj obitelji.',
          answer: 'Ana je sunce u našoj obitelji.',
          accept: ['Ana je sunce naše obitelji.'],
          hint: 'One small comparing word stands between a simile and a metaphor. Take it out.',
          explanation:
            'Ana je sunce u našoj obitelji. — without kao the sentence no longer compares; it states the identity outright, and that is a metaphor.',
        },
        {
          type: 'transform',
          q: 'Turn the statement into a rhetorical question, the way Ivan’s „Tko bi rekao…?” does. Begin with Tko.',
          from: 'Svatko bi poželio takvog brata.',
          answer: 'Tko ne bi poželio takvog brata?',
          accept: [
            'Tko ne bi poželio takvoga brata?',
            'Tko takvog brata ne bi poželio?',
            'Tko si ne bi poželio takvog brata?',
          ],
          hint: '"Everybody would" becomes "who would not?" — the verb is negated, and nobody is expected to answer.',
          explanation:
            'Tko ne bi poželio takvog brata? — the question asserts that everybody would. A rhetorical question often turns svatko into tko ne…?: the form asks, the meaning states.',
        },
      ],
    },
    mix: [
      9,
      4,
      {
        type: 'tf',
        q: 'The sentence „Hladan je kao led.” is a metaphor.',
        answer: false,
        hint: 'Look for the small word that announces a comparison.',
        explanation:
          'False. With kao the sentence is a simile (usporedba): it compares. A metaphor drops the comparing word and states the identity outright: „On je led.”',
      },
      6,
      1,
      {
        type: 'order',
        q: 'Build the antithesis: "The young are in a hurry, and the old have time."',
        words: ['Mladi', 'se', 'žure,', 'a', 'stari', 'imaju', 'vremena.'],
        explanation:
          'Mladi se žure, a stari imaju vremena. — two opposites (mladi / stari, hurry / time) in two parallel halves joined by a. The clitic se stands right after the first word.',
      },
      7,
      {
        type: 'transform',
        q: 'This gradation runs downhill. Rebuild it so that it climbs, weakest step first.',
        from: 'Potrčao je, ubrzao, krenuo.',
        answer: 'Krenuo je, ubrzao, potrčao.',
        accept: [
          'Krenuo je, ubrzao i potrčao.',
          'Krenuo je, ubrzao pa potrčao.',
          'Krenuo je, ubrzao, a onda potrčao.',
          'Krenuo je, ubrzao, a zatim potrčao.',
        ],
        hint: 'Which of the three movements is the slowest? Start there — and keep je in second position, after whichever verb now comes first.',
        explanation:
          'Krenuo je, ubrzao, potrčao. — he set off, sped up, broke into a run: each step is stronger than the one before. The clitic je does not travel with its old verb; it stays second in the sentence.',
      },
      8,
      5,
      {
        type: 'sort',
        q: 'Which figure is it?',
        groups: ['metafora', 'metonimija', 'hiperbola'],
        items: [
          { hr: 'Ima zlatne ruke.', group: 0 },
          { hr: 'Pročitao sam cijelog Krležu.', group: 1 },
          { hr: 'Rekao sam ti to tisuću puta.', group: 2 },
          { hr: 'Stigla je lavina kritika.', group: 0 },
          { hr: 'Cijela se škola smijala.', group: 1 },
          { hr: 'Nisam spavao sto godina.', group: 2 },
        ],
        explanation:
          'zlatne ruke and lavina kritika transfer by likeness (hands as precious as gold, criticism falling like an avalanche): metaphor. Krleža for his books and škola for the people in it transfer by real connection: metonymy. tisuću puta and sto godina are deliberate exaggerations: hyperbole.',
      },
      {
        type: 'match',
        q: 'Match each sentence to its figure.',
        pairs: [
          ['Sela se prazne, gradovi se pune.', 'antiteza'],
          ['Dvorana je ustala i zapljeskala.', 'metonimija'],
          ['Tko bi to mogao zaboraviti?', 'retoričko pitanje'],
          ['Pogledao ju je, nasmiješio se, zaljubio se.', 'gradacija'],
          ['Život je putovanje.', 'metafora'],
        ],
        explanation:
          'Emptying against filling in parallel halves is an antithesis; the hall stands for the audience (metonymy); the question states that nobody could forget; looking, smiling and falling in love climb step by step; and life is called a journey outright, with no kao.',
      },
      10,
      {
        type: 'fix',
        q: 'One word has the wrong case. Tap it. ("A mountain of papers is waiting for me on the desk.")',
        words: ['Brdo', 'papiri', 'čeka', 'me', 'na', 'stolu.'],
        wrong: 1,
        answer: 'papira',
        hint: 'A quantity metaphor — brdo, more, lavina — behaves like any word of quantity: what there is so much of stands in the genitive plural.',
        explanation:
          'Brdo papira čeka me na stolu. — brdo is a metaphor for "a great many", and like more problema or lavina kritika it governs the genitive plural.',
      },
      11,
      {
        type: 'listen',
        audio: 'Nismo došli moliti, nego raditi; ne tražimo sažaljenje, nego priliku.',
        q: 'Which figure carries this sentence?',
        options: [
          'A gradation: three steps, each stronger than the last',
          'A hyperbole: a deliberate exaggeration of how hard they work',
          'An antithesis, used twice: what is refused is set against what is wanted',
          'A rhetorical question that expects no answer',
        ],
        correct: 2,
        explanation:
          'moliti against raditi, sažaljenje against priliku: twice the frame ne… nego… collides two opposites in parallel syntax. It is the shape of a speech — antiteza with repetition.',
      },
      {
        type: 'dictate',
        audio: 'Obećanja su bila zlatna, a djela olovna.',
        answer: 'Obećanja su bila zlatna, a djela olovna.',
        hint: 'Seven words: "The promises were golden, and the deeds leaden."',
        explanation:
          'Obećanja su bila zlatna, a djela olovna. — two metaphors (gold, lead) set against each other in an antithesis; the second half leaves out su bila, which is what makes it land.',
      },
    ],
  },

  // ── How literary Croatian works ────────────────────────────────────────────
  'knjizevni-stil': {
    text: {
      kind: 'text',
      title: 'Povratak',
      lines: [
        {
          hr: 'Bijaše kasna jesen kad se Mate, nakon trideset godina, vrati na otok.',
          en: 'It was late fall when Mate, after thirty years, returned to the island.',
        },
        {
          hr: 'Brod pristade uz mul, mornar baci konop, a on siđe posljednji, s jednim kovčegom u ruci.',
          en: 'The boat came alongside the pier, a sailor threw the rope, and he stepped off last, with a single suitcase in his hand.',
        },
        {
          hr: 'Na rivi ne bijaše nikoga. Puhaše bura i more udaraše o kamen.',
          en: 'There was no one on the waterfront. The bura was blowing and the sea was beating against the stone.',
        },
        {
          hr: 'Krenu uskom ulicom prema staroj kući, a koraci mu odzvanjahu među zidovima.',
          en: 'He set off down the narrow street toward the old house, and his footsteps echoed between the walls.',
        },
        {
          hr: 'Pred kućom zastade. Škure bijahu zatvorene, a vrt zarastao u draču. Zar je doista mislio da će ga itko čekati?',
          en: 'In front of the house he stopped. The shutters were closed and the garden overgrown with thorns. Had he really thought that anyone would be waiting for him?',
        },
        {
          hr: 'Iz susjednoga dvora izađe starica u crnini i dugo ga gledaše, zaklanjajući oči rukom.',
          en: 'Out of the neighboring yard came an old woman in black, and for a long time she looked at him, shading her eyes with her hand.',
        },
        {
          hr: '— Ča si to ti, Mate? — reče napokon. — Uvik san govorila da ćeš se vratit.',
          en: '“Is that you, Mate?” she said at last. “I always said you would come back.”',
        },
        {
          hr: 'On ne odgovori odmah. Što da joj kaže? Da je trideset godina bježao od ovoga kamena i da mu je svake noći dolazio u san?',
          en: 'He did not answer at once. What was he to tell her? That for thirty years he had been running from this stone, and that every night it had come to him in his sleep?',
        },
        {
          hr: '— Ja sam, teta Luce — reče tiho i spusti kovčeg na prag.',
          en: '“It is me, Aunt Luce,” he said quietly, and set the suitcase down on the threshold.',
        },
        {
          hr: 'Pade mrak, a u prozoru stare kuće, prvi put nakon toliko zima, zasja svjetlo.',
          en: 'Darkness fell, and in the window of the old house, for the first time after so many winters, a light shone.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: after Mate stops in front of the house we read „Zar je doista mislio da će ga itko čekati?” Whose question is it?',
          options: [
            'The old woman’s — she says it aloud when she sees him',
            'The narrator’s — a question put directly to the reader',
            'Mate’s own thought, given in the narrator’s third person without quotation marks',
            'Nobody’s — it is a line of dialogue whose dash was left out',
          ],
          correct: 2,
          hint: 'No reporting verb, no dash, and it comes straight after something Mate does. Who would be asking himself this at that moment?',
          explanation:
            'It is free indirect style: Mate’s thought in the narrator’s grammar (je mislio, not sam mislio), with no „pomisli” and no quotation marks. „Što da joj kaže?” a few lines later works the same way.',
        },
        {
          q: 'The old woman says „Ča si to ti, Mate? … Uvik san govorila da ćeš se vratit.” What do those forms do in the story?',
          options: [
            'They place her in a single line: an islander, of the older generation, speaking čakavian',
            'They show that she never went to school',
            'They are misprints for „Što”, „sam” and „vratiti”',
            'They show that the narrator is from the island too',
          ],
          correct: 0,
          hint: 'The narrator writes the standard throughout; only one voice in the text does not. Ask what the author gains by that.',
          explanation:
            'Ča, uvik (for uvijek), san (for sam) and the clipped infinitive vratit are čakavian island speech. Dialect in dialogue is characterization: one line gives her origin and generation. It says nothing about her education, and it is not an error.',
        },
        {
          type: 'type',
          q: 'Now you. Continue the story in the same register: Mate ____ u kuću i zatvori vrata za sobom. (ući — aorist, he)',
          answer: 'uđe',
          hint: 'The third person singular aorist of ući is built like those of its relatives in the text — the forms for "came out" and "stepped off".',
          explanation:
            'Mate uđe u kuću i zatvori vrata za sobom. — uđe is the aorist of ući, like izađe and siđe; zatvori is an aorist too. No auxiliary: the aorist is a single word.',
        },
        {
          type: 'transform',
          q: 'A report would say it like this. Rewrite it as the novel would: both verbs in the aorist.',
          from: 'Starica je rekla nekoliko riječi i otišla.',
          answer: 'Starica reče nekoliko riječi i ode.',
          accept: [
            'Starica reče nekoliko riječi i otiđe.',
            'Starica reče nekoliko riječi pa ode.',
            'Reče starica nekoliko riječi i ode.',
          ],
          hint: 'The auxiliary disappears, and each participle gives way to one short form. One of the two forms frames both lines of dialogue in the text.',
          explanation:
            'Starica reče nekoliko riječi i ode. — reče (reći) and ode (otići; otiđe is equally correct) are aorists. The same events in the perfect read as a report; in the aorist they read as narration.',
        },
        {
          type: 'transform',
          q: 'Turn the quoted thought into free indirect style: no reporting verb, no quotation marks, and the narrator’s third person. Write only the thought.',
          from: 'Pomislio je: „Nikad više neću otići.”',
          answer: 'Nikad više neće otići.',
          accept: ['Nikada više neće otići.', 'Više nikad neće otići.', 'Više nikada neće otići.'],
          hint: 'Keep the character’s certainty and his word order; change only the person of the verb, from "I" to "he".',
          explanation:
            'Nikad više neće otići. — the thought stays his, but the grammar is the narrator’s: neću becomes neće. A reader who takes this for the narrator’s own prediction has missed the shift.',
        },
      ],
    },
    mix: [
      11,
      4,
      {
        type: 'sort',
        q: 'Which tense is the verb in?',
        groups: ['Aorist', 'Imperfekt', 'Perfekt'],
        items: [
          { hr: 'Zastade na pragu.', group: 0 },
          { hr: 'Mjesec sjaše nad selom.', group: 1 },
          { hr: 'Zastao je na pragu.', group: 2 },
          { hr: 'Vrata se zatvoriše.', group: 0 },
          { hr: 'Djeca trčahu niz ulicu.', group: 1 },
          { hr: 'Djeca su trčala niz ulicu.', group: 2 },
        ],
        explanation:
          'zastade and zatvoriše are aorists: single, completed acts. sjaše and trčahu are imperfects: a state or action that lasted. zastao je and su trčala are the everyday perfect, with an auxiliary — the same events, told as a report.',
      },
      6,
      1,
      {
        type: 'tf',
        q: 'In „Pogledala je na sat. Zašto on uvijek mora kasniti?” the second sentence is a question the narrator puts to the reader.',
        answer: false,
        hint: 'Ask who is looking at the watch, and who would be irritated at that moment.',
        explanation:
          'False. It is her thought, in free indirect style: no „pomislila je”, no quotation marks, but the irritation is the character’s. Reading it as the narrator’s question gives the author an opinion that belongs to her.',
      },
      8,
      {
        type: 'transform',
        q: 'Rewrite the sentence as a novel would: both verbs in the aorist.',
        from: 'Sunce je zašlo i selo je utihnulo.',
        answer: 'Sunce zađe i selo utihnu.',
        accept: [
          'Zađe sunce i selo utihnu.',
          'Zađe sunce i utihnu selo.',
          'Sunce zađe i utihnu selo.',
          'Sunce zađe, i selo utihnu.',
          'Sunce zađe, a selo utihnu.',
        ],
        hint: 'Both auxiliaries disappear. zaći goes like doći (dođe); a verb in -nuti simply loses its -ti in the third person singular.',
        explanation:
          'Sunce zađe i selo utihnu. — zađe (zaći) and utihnu (utihnuti) are third person singular aorists. With the verb first — Zađe sunce — the event is foregrounded even more strongly.',
      },
      5,
      3,
      {
        type: 'order',
        q: 'Put the words in the literary order, event first: "Summer passed, and with it the guests too."',
        words: ['Prođe', 'ljeto,', 'a', 's', 'njim', 'i', 'gosti.'],
        explanation:
          'Prođe ljeto, a s njim i gosti. — the aorist prođe opens the sentence and the subject follows it: inversion, which puts the event before the thing it happened to.',
      },
      7,
      {
        type: 'match',
        q: 'Match the literary form to what you would say in conversation.',
        pairs: [
          ['dođoše', 'došli su'],
          ['vidjeh', 'vidio sam'],
          ['pade', 'pao je'],
          ['rekosmo', 'rekli smo'],
          ['bijahu', 'bili su'],
        ],
        explanation:
          'The endings carry the person: -h is "I" (vidjeh), -smo "we" (rekosmo), -še "they" in the aorist (dođoše), -hu "they" in the imperfect (bijahu). Speech uses the perfect with an auxiliary for all of them.',
      },
      9,
      {
        type: 'fix',
        q: 'One verb has the ending of the wrong person. Tap it. ("I looked at him and said nothing.")',
        words: ['Ja', 'ga', 'pogledaše', 'i', 'ne', 'rekoh', 'ništa.'],
        wrong: 2,
        answer: 'pogledah',
        hint: 'The narrator is "I", and the second verb in the sentence already shows the ending that goes with it.',
        explanation:
          'Ja ga pogledah i ne rekoh ništa. — the first person singular aorist ends in -h (pogledah, rekoh); pogledaše is "they looked".',
      },
      {
        type: 'listen',
        audio: 'Pade prvi snijeg, i selo, koje je cijelu jesen čekalo kišu, osvanu bijelo i tiho.',
        q: 'What happened, and how does the sentence tell it?',
        options: [
          'Rain finally fell after a dry fall, reported as plain news',
          'The villagers waited all winter for snow that never came',
          'Snow is falling right now, described in the present tense',
          'The first snow fell and the village woke up white and quiet — told in the aorist, with the event placed first',
        ],
        correct: 3,
        explanation:
          'Pade prvi snijeg — the aorist pade stands before its subject (inversion), and osvanu, "dawned, woke up", is an aorist too. The main clause is selo osvanu bijelo i tiho; the koje-clause between the commas only tells us what the village had been waiting for.',
      },
      {
        type: 'dictate',
        audio: 'Uđe u sobu i sjede kraj prozora.',
        answer: 'Uđe u sobu i sjede kraj prozora.',
        hint: 'Seven words, two aorists: "He came into the room and sat down by the window."',
        explanation:
          'Uđe u sobu i sjede kraj prozora. — uđe (ući) and sjede (sjesti) are aorists; no auxiliary is written, because none is spoken.',
      },
    ],
  },

  // ── Journalistic style ─────────────────────────────────────────────────────
  'publicisticki-stil': {
    text: {
      kind: 'dialogue',
      title: 'Djed čita vijesti između redaka',
      lines: [
        {
          who: 'Nika',
          hr: 'Djede, slušaj ovaj naslov: „Grad zatvorio tržnicu, prodavači ogorčeni”. Zar se ne kaže „Grad je zatvorio”?',
          en: 'Grandpa, listen to this headline: “Grad zatvorio tržnicu, prodavači ogorčeni”. Shouldn’t it be “Grad je zatvorio”?',
        },
        {
          who: 'Djed',
          hr: 'U rečenici se kaže, u naslovu ne. Naslov štedi mjesto pa ispušta pomoćni glagol. Četrdeset sam godina pisao takve naslove. A nađeš li u samom članku rečenicu bez „je”, znaj da je netko prepisao naslov i zaboravio ga dovršiti.',
          en: 'In a sentence, yes; in a headline, no. A headline saves space, so it drops the auxiliary verb. I wrote headlines like that for forty years. And if you find a sentence without “je” in the article itself, you can be sure somebody copied the headline and forgot to finish it.',
        },
        {
          who: 'Nika',
          hr: 'Dobro. Dalje piše: „Kako se neslužbeno doznaje, tržnica bi mogla ostati zatvorena do proljeća.” Tko to doznaje, i od koga?',
          en: 'All right. It goes on: “Kako se neslužbeno doznaje, tržnica bi mogla ostati zatvorena do proljeća.” Who is learning this, and from whom?',
        },
        {
          who: 'Djed',
          hr: 'To ti novine neće reći. „Doznaje se” znači da izvor postoji, ali da mu se ime ne smije objaviti. A ono „neslužbeno” znači da nitko iz Grada to nije htio potvrditi.',
          en: 'That the paper will not tell you. “Doznaje se” means that a source exists but that his name must not be published. And that “neslužbeno” means that nobody from the city administration was willing to confirm it.',
        },
        {
          who: 'Nika',
          hr: 'A zašto pročelnik „tvrdi” da je zgrada opasna, dok prodavači samo „kažu” da s njima nitko nije razgovarao?',
          en: 'And why does the department head “tvrdi” that the building is dangerous, while the vendors merely “kažu” that nobody talked to them?',
        },
        {
          who: 'Djed',
          hr: 'Dobro si to uočila. „Kaže” je neutralno. „Tvrdi” čitatelju poručuje da redakcija za tu izjavu ne jamči: možda je istina, možda nije. Tim ti jednim glagolom novinar govori komu vjeruje više.',
          en: 'Well spotted. “Kaže” is neutral. “Tvrdi” tells the reader that the newsroom does not vouch for that statement: maybe it is true, maybe it is not. With that single verb the journalist is telling you whom he believes more.',
        },
        {
          who: 'Nika',
          hr: 'Lukavo. A ova rečenica? „Donesena je odluka o privremenom zatvaranju.” Zvuči službeno, ali ne piše tko ju je donio.',
          en: 'Clever. And this sentence? “Donesena je odluka o privremenom zatvaranju.” It sounds official, but it does not say who made it.',
        },
        {
          who: 'Djed',
          hr: 'E, tu budi na oprezu. Kad iz vijesti nestane onaj tko nešto čini, katkad je to zbog sažetosti, a katkad zato što netko ne želi da mu se ime nađe uz odluku. Dobar bi novinar napisao tko ju je donio.',
          en: 'Ah, be on your guard there. When the one who does something disappears from a news item, sometimes it is for the sake of brevity, and sometimes because somebody does not want his name to appear next to the decision. A good journalist would have written who made it.',
        },
        {
          who: 'Nika',
          hr: 'Na kraju piše da se Grad „oglasio priopćenjem” i da je inspekcija „navodno” pronašla pukotine u krovu.',
          en: 'At the end it says that the city administration “oglasio se priopćenjem” and that the inspectors “navodno” found cracks in the roof.',
        },
        {
          who: 'Djed',
          hr: '„Navodno” — dakle, to nitko iz redakcije nije vidio vlastitim očima, pa se list ograđuje. Vidiš, najvažnije si saznala iz prve rečenice, a sve ostalo iz glagola. Zadnji odlomak možeš mirne duše preskočiti.',
          en: '“Navodno” — so nobody from the newsroom saw it with their own eyes, and the paper is distancing itself. You see, you learned the most important thing from the first sentence and everything else from the verbs. The last paragraph you can skip with a clear conscience.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: the article says „Kako se neslužbeno doznaje…”. According to Grandpa, what do those words tell the reader?',
          options: [
            'That the information is certainly false',
            'That a source exists but cannot be named, and that nobody official has confirmed it',
            'That the paper made the information up',
            'That the city administration sent it in a press release',
          ],
          correct: 1,
          hint: 'He explains the two words separately: one is about the source’s name, the other about the city administration.',
          explanation:
            '„Doznaje se” is agentless: the source exists, but his name must not be published. „Neslužbeno” adds that nobody from the city administration would confirm it. The paper reports the claim and protects the person behind it.',
        },
        {
          q: 'In the article the department head „tvrdi” and the vendors „kažu”. What has the journalist done by choosing two different verbs?',
          options: [
            'Nothing — the verbs were varied only to avoid repetition',
            'Shown that the department head spoke in writing and the vendors orally',
            'Shown that the vendors are lying',
            'Signaled that the paper does not vouch for the official’s claim, while it reports the vendors neutrally',
          ],
          correct: 3,
          hint: 'Recall which of the two verbs Grandpa calls neutral, and what he says the other one tells the reader.',
          explanation:
            'kaže is neutral; tvrdi marks a claim as contested — the newsroom does not stand behind it. Attribution in Croatian news is editorial work done through the choice of verb.',
        },
        {
          type: 'type',
          q: 'Now you. The mayor has opened the market again. Write the headline: Gradonačelnik ____ tržnicu. (otvoriti)',
          answer: 'otvorio',
          accept: ['ponovno otvorio', 'opet otvorio', 'ponovo otvorio'],
          hint: 'Headline register: the participle alone, agreeing with a masculine subject — and nothing in front of it.',
          explanation:
            'Gradonačelnik otvorio tržnicu — a headline drops the auxiliary je. Inside the article the same sentence needs it: Gradonačelnik je otvorio tržnicu.',
        },
        {
          type: 'transform',
          q: 'Give the decision back its author — the mayor (gradonačelnik) — and make the sentence active.',
          from: 'Donesena je odluka o zatvaranju tržnice.',
          answer: 'Gradonačelnik je donio odluku o zatvaranju tržnice.',
          accept: [
            'Odluku o zatvaranju tržnice donio je gradonačelnik.',
            'Gradonačelnik je odluku o zatvaranju tržnice donio.',
            'Gradonačelnik donio je odluku o zatvaranju tržnice.',
          ],
          hint: 'The mayor becomes the subject, the passive participle becomes an active one that agrees with him, and the decision moves into the accusative.',
          explanation:
            'Gradonačelnik je donio odluku o zatvaranju tržnice. — the passive „donesena je odluka” says that a decision was made without saying by whom; the active sentence names the person responsible.',
        },
        {
          type: 'transform',
          q: 'This headline has to become the first sentence of the article. Make it a complete sentence.',
          from: 'Prodavači prosvjedovali pred gradskom upravom',
          answer: 'Prodavači su prosvjedovali pred gradskom upravom.',
          accept: [
            'Prodavači su pred gradskom upravom prosvjedovali.',
            'Pred gradskom upravom prosvjedovali su prodavači.',
            'Pred gradskom upravom su prosvjedovali prodavači.',
          ],
          hint: 'What a headline leaves out, running text must restore — in the plural this time, and in second position.',
          explanation:
            'Prodavači su prosvjedovali pred gradskom upravom. — running text restores the auxiliary: su for the plural subject, right after the first word.',
        },
      ],
    },
    mix: [
      3,
      5,
      0,
      {
        type: 'sort',
        q: 'Headline, or a sentence inside the article?',
        groups: ['Naslov', 'Rečenica u članku'],
        items: [
          { hr: 'Sabor izglasao proračun', group: 0 },
          { hr: 'Sabor je izglasao proračun.', group: 1 },
          { hr: 'Sud odbio žalbu', group: 0 },
          { hr: 'Sud je odbio žalbu.', group: 1 },
          { hr: 'Liječnici najavili štrajk', group: 0 },
          { hr: 'Liječnici su najavili štrajk.', group: 1 },
        ],
        explanation:
          'A headline drops the auxiliary (je, su) and usually the final period; running text keeps both. The participle alone — izglasao, odbio, najavili — is the mark of the headline register.',
      },
      6,
      {
        type: 'transform',
        q: 'Compress the cause into the nominal style of a news text: replace the jer-clause with zbog and a noun.',
        from: 'Karte su poskupjele jer je gorivo poskupjelo.',
        answer: 'Karte su poskupjele zbog poskupljenja goriva.',
        accept: [
          'Zbog poskupljenja goriva karte su poskupjele.',
          'Karte su zbog poskupljenja goriva poskupjele.',
          'Zbog poskupljenja goriva poskupjele su karte.',
          'Karte su poskupjele zbog rasta cijene goriva.',
          'Karte su poskupjele zbog rasta cijena goriva.',
          'Karte su poskupjele zbog povećanja cijene goriva.',
          'Karte su poskupjele zbog povećanja cijena goriva.',
        ],
        hint: 'The verb of the jer-clause turns into a verbal noun in -nje, and zbog puts that noun in the genitive; the fuel follows in the genitive as well.',
        explanation:
          'Karte su poskupjele zbog poskupljenja goriva. — a whole clause shrinks to zbog + a noun in the genitive. News texts borrow this compression from the administrative style, because a noun takes less room than a clause.',
      },
      4,
      1,
      {
        type: 'tf',
        q: 'In a news article, „Ministar tvrdi da…” and „Ministar ističe da…” tell the reader the same thing about the paper’s attitude to the statement.',
        answer: false,
        hint: 'One of the two verbs adds doubt; the other adds weight.',
        explanation:
          'False. tvrdi marks the claim as contested: the paper does not vouch for it. ističe presents the point as important, which suggests the paper agrees that it matters.',
      },
      7,
      8,
      {
        type: 'match',
        q: 'Match the newsroom phrase to what it tells the reader.',
        pairs: [
          ['kako doznajemo', 'the paper speaks as "we" and does not name its source'],
          ['navodno', 'the paper does not vouch for the claim'],
          ['oglasio se priopćenjem', 'an official response, issued in writing'],
          ['izvor blizak istrazi', 'an unnamed person who knows the investigation'],
          ['prema neslužbenim informacijama', 'nobody has confirmed it officially'],
        ],
        explanation:
          'These are set phrases of the journalistic style. Each one tells you how the paper came by a piece of information and how far it stands behind it — reading them is part of reading the news.',
      },
      {
        type: 'fix',
        q: 'One word has the wrong case. Tap it. ("According to a source close to the investigation, the minister is leaving.")',
        words: ['Prema', 'izvoru', 'bliskog', 'istrazi,', 'ministar', 'odlazi.'],
        wrong: 2,
        answer: 'bliskom',
        hint: 'prema puts its noun in the dative, and the adjective that describes that noun has to follow it into the same case.',
        explanation:
          'Prema izvoru bliskom istrazi, ministar odlazi. — prema governs the dative: izvoru, and with it bliskom. The word istrazi is a dative too, governed by blizak ("close to").',
      },
      9,
      {
        type: 'order',
        q: 'Put the lead in order: "A storm flooded basements in the center of Rijeka last night."',
        words: ['Nevrijeme', 'je', 'sinoć', 'poplavilo', 'podrume', 'u', 'središtu', 'Rijeke.'],
        accept: [
          'Nevrijeme je sinoć u središtu Rijeke poplavilo podrume.',
          'Nevrijeme je u središtu Rijeke sinoć poplavilo podrume.',
          'Nevrijeme je poplavilo sinoć podrume u središtu Rijeke.',
        ],
        explanation:
          'Nevrijeme je sinoć poplavilo podrume u središtu Rijeke. — a lead answers who or what, when, what happened and where in a single sentence; the auxiliary je stands in second position.',
      },
      {
        type: 'listen',
        audio:
          'Kako doznajemo iz izvora bliskih upravi, direktor će sutra podnijeti ostavku, no iz tvrtke to zasad nitko nije htio potvrditi.',
        q: 'How firm is this piece of news?',
        options: [
          'It is official: the company has confirmed the resignation',
          'It comes from unnamed sources close to the management, and the company has not confirmed it',
          'The director himself announced it at a press conference',
          'The paper says that the rumor is false',
        ],
        correct: 1,
        explanation:
          'Kako doznajemo iz izvora bliskih upravi — "as we learn from sources close to the management": the sources are not named. no iz tvrtke to zasad nitko nije htio potvrditi — so far nobody at the company has been willing to confirm it.',
      },
      {
        type: 'dictate',
        audio: 'Oporba tvrdi da vlada skriva podatke.',
        answer: 'Oporba tvrdi da vlada skriva podatke.',
        hint: 'Six words: "The opposition claims that the government is hiding data."',
        explanation:
          'Oporba tvrdi da vlada skriva podatke. — with tvrdi the paper reports the accusation without standing behind it; kaže would have been neutral.',
      },
    ],
  },

  // ── Irony and subtext ──────────────────────────────────────────────────────
  'ironija-podtekst': {
    text: {
      kind: 'dialogue',
      title: 'Mali problemčić u kuhinji',
      lines: [
        {
          who: 'Tena',
          hr: 'Frane, zašto je u hodniku lokva? I zašto cijeli stan miriše na zagoreno?',
          en: 'Fran, why is there a puddle in the hallway? And why does the whole apartment smell of something burnt?',
        },
        {
          who: 'Fran',
          hr: 'Imamo jedan mali problemčić. Htio sam ti skuhati večeru, ali je perilica posuđa malo procurila, a rižoto je, recimo, dobio koricu.',
          en: 'We have one tiny little problem. I wanted to cook you dinner, but the dishwasher leaked a bit, and the risotto has, let us say, acquired a crust.',
        },
        {
          who: 'Tena',
          hr: 'Problemčić? Voda je došla do praga moje sobe! Baš si se potrudio.',
          en: 'A tiny problem? The water has reached the threshold of my room! You really went to a lot of trouble.',
        },
        {
          who: 'Fran',
          hr: 'Znam da to nije pohvala. Nije bilo tableta za perilicu pa sam ulio deterdžent za ručno pranje.',
          en: 'I know that is not a compliment. There were no dishwasher tablets, so I poured in dishwashing liquid.',
        },
        {
          who: 'Tena',
          hr: 'Ma daj. A tko ti je, molim te, rekao da se to smije? I što si očekivao — da će pjena sama nestati?',
          en: 'Oh, come on. And who, pray tell, told you that was allowed? And what did you expect — that the foam would disappear by itself?',
        },
        {
          who: 'Fran',
          hr: 'E pa, hvala lijepa na razumijevanju. Barem kušaj rižoto, onaj dio koji nije zagorio.',
          en: 'Well, thanks a lot for the understanding. At least taste the risotto — the part that did not burn.',
        },
        {
          who: 'Tena',
          hr: 'Svaka čast, stvarno: pjena do stropa, a ti meni nudiš večeru. Dobro, daj žlicu. Hm. Nije loše. Ozbiljno ti kažem, nije loše.',
          en: 'Well done, really: foam up to the ceiling, and you are offering me dinner. Fine, give me a spoon. Hm. Not bad. I mean it, not bad.',
        },
        {
          who: 'Fran',
          hr: 'Od tebe je to velika pohvala. Hoćeš li onda ti obrisati hodnik dok ja dovršim salatu?',
          en: 'Coming from you, that is high praise. So will you mop the hallway while I finish the salad?',
        },
        {
          who: 'Tena',
          hr: 'Taman posla! Tko je poplavio, taj i briše. Ali rižoto ću pojesti do kraja.',
          en: 'Absolutely not! Whoever did the flooding does the mopping. But I will finish the risotto.',
        },
        {
          who: 'Fran',
          hr: 'Može. A da sutra opet ja kuham?',
          en: 'Deal. And how about I cook again tomorrow?',
        },
        {
          who: 'Tena',
          hr: 'Nego što! Samo perilicu više ne diraš.',
          en: 'Of course! Only you are not touching the dishwasher again.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: Tena says „Baš si se potrudio.” What does she mean, and what tells you?',
          options: [
            'Sincere praise — she appreciates that Fran cooked for her',
            'A question — she is asking how much effort it took',
            'Sarcasm — the "praise" comes right after she has named the damage, and Fran himself says it is no compliment',
            'An apology — she regrets having raised her voice',
          ],
          correct: 2,
          hint: 'Recall what she says just before those words, and how Fran answers.',
          explanation:
            'The words are those of praise, the situation is water at her door: baš + praise where none is deserved is sarcasm. Fran hears it correctly: „Znam da to nije pohvala.”',
        },
        {
          q: 'After tasting the risotto Tena says „Nije loše.” Fran replies that from her this is high praise. Is he reading her correctly?',
          options: [
            'No — she is politely hiding that she does not like it',
            'Yes — in Croatian, declining to complain is real approval, and she even repeats it',
            'No — she is being sarcastic again, as with the dishwasher',
            'Yes — but only because she is too hungry to care',
          ],
          correct: 1,
          hint: 'Notice what she adds the second time, and what she decides to do with the rest of the risotto.',
          explanation:
            '„Nije loše” is understated praise, the Croatian default: „Ozbiljno ti kažem, nije loše” — and she finishes the plate. Hearing it as lukewarm would be the misreading.',
        },
        {
          type: 'type',
          q: 'Now you. Fran suggests: „Hoćemo li u subotu naručiti pizzu?” Tena accepts — plainly, with no word of enthusiasm, in one word: „____.”',
          answer: 'Može',
          hint: 'The one-word acceptance Fran himself gives near the end of the dialogue. It sounds lukewarm and is not.',
          explanation:
            'Može. — plain acceptance, not reluctance. Croatian agrees without enthusiasm words; „Odlično!” to every proposal sounds naive.',
        },
        {
          type: 'transform',
          q: 'Praise the risotto the understated Croatian way: do not say how good it is — just decline to complain.',
          from: 'Rižoto je odličan!',
          answer: 'Rižoto nije loš.',
          accept: [
            'Nije loš rižoto.',
            'Rižoto uopće nije loš.',
            'Nije loš ovaj rižoto.',
            'Ovaj rižoto nije loš.',
            'Rižoto ti nije loš.',
            'Nije ti loš rižoto.',
            'Rižoto nije loš!',
          ],
          hint: 'Negate the opposite quality. The adjective now describes a masculine noun, so it cannot keep the neuter form Tena used.',
          explanation:
            'Rižoto nije loš. — understatement: by declining to complain, the speaker approves. Tena’s „Nije loše” is the neuter, said of the whole thing; with rižoto as the subject the adjective is masculine, loš.',
        },
        {
          type: 'transform',
          q: 'Fran’s friend promised to help him mop and never came. Turn the plain reproach into ironic "praise" with baš.',
          from: 'Nisi mi pomogao.',
          answer: 'Baš si mi pomogao.',
          accept: ['Baš si mi pomogao!', 'Baš si mi ti pomogao.', 'E baš si mi pomogao.'],
          hint: 'Drop the negation and put the intensifying particle first; the two clitics follow it in their usual order.',
          explanation:
            'Baš si mi pomogao. — "thanks for nothing." The sentence is built exactly like sincere thanks; only the situation makes it sarcasm. The clitics si mi stand right after baš.',
        },
      ],
    },
    mix: [
      0,
      6,
      5,
      1,
      {
        type: 'tf',
        q: 'A friend looks around your new apartment and says „Nije loše.” She is politely hiding that she does not like it.',
        answer: false,
        hint: 'Ask what Croatian does instead of praising loudly.',
        explanation:
          'False. „Nije loše” is genuine approval: Croatian praises by declining to complain. The right answer is a simple „Hvala”, not a worried question about what is wrong.',
      },
      4,
      {
        type: 'sort',
        q: 'Sincere or ironic? Let the situation decide.',
        groups: ['Iskreno', 'Ironično'],
        items: [
          { hr: 'Položio si vozački ispit iz prve? Svaka čast!', group: 0 },
          { hr: 'Opet si zaboravio ključeve? Svaka čast.', group: 1 },
          { hr: 'Baš ti hvala, bez tebe ne bih stigla na vlak.', group: 0 },
          { hr: 'Baš ti hvala što si otišao bez mene.', group: 1 },
          { hr: 'Juha je odlična, moram dobiti recept.', group: 0 },
          { hr: 'Kasniš samo sat vremena. Baš si točan.', group: 1 },
        ],
        explanation:
          'svaka čast and baš are the same words in both columns. After a success they are praise; after forgotten keys, a friend who left without you or an hour’s delay, the gap between the wording and the situation makes them irony.',
      },
      7,
      2,
      {
        type: 'transform',
        q: 'Say it as a rhetorical question — a jab that leaves no room for an answer. Begin with A što.',
        from: 'Nisi trebao očekivati ništa drugo.',
        answer: 'A što si drugo očekivao?',
        accept: [
          'A što si ti drugo očekivao?',
          'A što si očekivao?',
          'A što si ti očekivao?',
          'A što si drugo i očekivao?',
          'A što si drugo mogao očekivati?',
        ],
        hint: 'The negation disappears and "nothing else" turns into "what else"; the clitic comes right after the question word.',
        explanation:
          'A što si drugo očekivao? — nobody is being asked anything: the question states that the outcome was predictable. In speech the intonation falls where a real question would rise.',
      },
      8,
      {
        type: 'match',
        q: 'Match each short reply to what it does.',
        pairs: [
          ['Ma daj.', 'disbelief: "oh, come on"'],
          ['Nego što!', 'an emphatic yes'],
          ['Taman posla!', 'an indignant no'],
          ['Može.', 'plain acceptance'],
          ['Ide nekako.', 'modesty about something that is going well'],
        ],
        explanation:
          'None of these means what a dictionary would suggest word by word. Nego što agrees, taman posla refuses, može accepts without reluctance, and ide nekako is how a Croatian reports good news.',
      },
      9,
      {
        type: 'fix',
        q: 'Understated praise still has to agree with its noun. Tap the word in the wrong form. ("This soup of yours is not bad.")',
        words: ['Nije', 'ti', 'loš', 'ova', 'juha.'],
        wrong: 2,
        answer: 'loša',
        hint: 'The adjective describes the soup, and juha is feminine.',
        explanation:
          'Nije ti loša ova juha. — loša agrees with juha. The neuter „Nije loše” is used only when nothing is named; once the noun is in the sentence, the adjective follows its gender.',
      },
      {
        type: 'order',
        q: 'Put the sarcastic thanks in order: "Well, thanks a lot for the help."',
        words: ['E', 'pa,', 'baš', 'ti', 'hvala', 'na', 'pomoći.'],
        explanation:
          'E pa, baš ti hvala na pomoći. — e pa opens with resignation, baš intensifies the thanks, and the clitic ti follows it. After someone has NOT helped, intensified thanks can only be sarcasm. hvala takes na + locative.',
      },
      {
        type: 'listen',
        audio:
          'Nakon tri sjednice i dviju stručnih studija nadležno je povjerenstvo donijelo povijesnu odluku: u čekaonici će se zamijeniti žarulja.',
        q: 'What is the writer doing?',
        options: [
          'Mocking the committee: grand official language is applied to something trivial',
          'Praising the committee for a thorough, historic decision',
          'Reporting neutrally on an important reform',
          'Complaining that the waiting room has too many light bulbs',
        ],
        correct: 0,
        explanation:
          'tri sjednice, dvije stručne studije, nadležno povjerenstvo, povijesna odluka — and all of it for one light bulb in a waiting room (žarulja u čekaonici). Administrative vocabulary applied to a trifle is the commonest way of marking irony in writing.',
      },
      {
        type: 'dictate',
        audio: 'Svaka čast, opet kasniš samo pola sata.',
        answer: 'Svaka čast, opet kasniš samo pola sata.',
        hint: 'Seven words: "Well done, you are only half an hour late again."',
        explanation:
          'Svaka čast, opet kasniš samo pola sata. — praise followed by a failure, with opet making it a repeated one: the words congratulate, the situation reproaches.',
      },
    ],
  },

  // ── The humor that needs the grammar ───────────────────────────────────────
  'humor-jezicni': {
    text: {
      kind: 'dialogue',
      title: 'Nakon večeri komedije',
      lines: [
        {
          who: 'David',
          hr: 'Svi su se oko mene smijali, a ja sam razumio svaku riječ i nijednu šalu. Počnimo od prve: zašto je smiješno kad komičar kaže „Sam sam, ali nisam sam kriv”?',
          en: 'Everybody around me was laughing, and I understood every word and not a single joke. Let us start with the first one: why is it funny when the comedian says “Sam sam, ali nisam sam kriv”?',
        },
        {
          who: 'Maja',
          hr: 'Zato što „sam” radi dva posla: jednom je glagol, a jednom znači da uz tebe nema nikoga. Triput ista riječ, a dva značenja — uho se spotakne i ti se nasmiješ.',
          en: 'Because “sam” does two jobs: once it is a verb, and once it means that there is nobody with you. The same word three times, and two meanings — the ear trips, and you laugh.',
        },
        {
          who: 'David',
          hr: 'A ono s vremenskom prognozom? Rekao je: „Javili su da je pao grad. Nazvao sam mamu u Zagreb, kaže da još stoji.”',
          en: 'And the one about the weather forecast? He said: “Javili su da je pao grad. Nazvao sam mamu u Zagreb, kaže da još stoji.”',
        },
        {
          who: 'Maja',
          hr: '„Grad” je i naselje i tuča, ona ledena zrna što padaju ljeti. U govoru ih razlikuje naglasak, ali na papiru su jednaki, pa se komičar pravio da je čuo pogrešnu riječ.',
          en: '“Grad” is both a city and hail, those grains of ice that fall in summer. In speech the accent tells them apart, but on paper they are identical, so the comedian pretended to have heard the wrong word.',
        },
        {
          who: 'David',
          hr: 'Dobro, to bih možda i sam shvatio da sam znao za tuču. Ali zašto se dvorana valjala od smijeha kad je spomenuo „računčić”?',
          en: 'All right, I might have gotten that one by myself if I had known about the hail. But why was the hall rolling with laughter when he mentioned a “računčić”?',
        },
        {
          who: 'Maja',
          hr: 'Jer je taj računčić bio račun za struju od tristo eura. Kad nečemu golemom prišiješ umanjenicu, nesrazmjer obavi sav posao. Isto vrijedi i obrnuto: vikendicu od dvadeset kvadrata nazvao je „kućerinom”.',
          en: 'Because that “little bill” was an electricity bill for three hundred euros. When you pin a diminutive on something huge, the mismatch does all the work. The same holds in reverse: he called a weekend cabin of twenty square meters a “kućerina”.',
        },
        {
          who: 'David',
          hr: 'A pred kraj je odjednom počeo govoriti nekako drukčije, „kaj” i „bum”, i ljudi su plakali od smijeha. Je li pogriješio?',
          en: 'And toward the end he suddenly started speaking differently somehow, “kaj” and “bum”, and people were crying with laughter. Did he make a mistake?',
        },
        {
          who: 'Maja',
          hr: 'Ma kakvi! Namjerno se prebacio na kajkavski. Školovan čovjek koji na pozornici na trenutak progovori kao njegova baka iz Zagorja ne griješi, nego mijenja registar — u tome i jest šala.',
          en: 'Not at all! He switched into Kajkavian on purpose. An educated man who, on stage, speaks for a moment like his grandmother from Zagorje is not making a mistake; he is changing register — that is exactly the joke.',
        },
        {
          who: 'David',
          hr: 'Znači, ništa od toga ne mogu naći u rječniku.',
          en: 'So I cannot find any of this in a dictionary.',
        },
        {
          who: 'Maja',
          hr: 'Ne možeš. Šala živi u naglasku, u padežu i u nastavku od tri slova. Ali čim prepoznaš trik, pola si posla obavio.',
          en: 'You cannot. A joke lives in the accent, in the case and in an ending of three letters. But as soon as you recognize the trick, you have done half the work.',
        },
        {
          who: 'David',
          hr: 'Onda, gospođo profesorice, hoćete li mi za trud platiti još jedno pivce?',
          en: 'In that case, Madam Professor, will you buy me one more little beer for my trouble?',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why did the audience laugh at the word „računčić”?',
          options: [
            'Because a diminutive was put on something large — an electricity bill for three hundred euros',
            'Because it is a regional word for a calculator',
            'Because the comedian pronounced it with the wrong accent',
            'Because the bill really was very small',
          ],
          correct: 0,
          hint: 'Recall what the "little bill" was for, and how much it came to.',
          explanation:
            'računčić is a "little bill" — for tristo eura. A diminutive on something that is anything but small is the most reliable comic move in Croatian: the mismatch does the work.',
        },
        {
          q: 'Toward the end the comedian said „kaj” and „bum”. How does Maja explain it?',
          options: [
            'He forgot the standard words for a moment',
            'He comes from Zagorje and cannot speak the standard',
            'He switched into Kajkavian on purpose — a change of register that is itself the joke',
            'He was imitating a foreigner who is learning Croatian',
          ],
          correct: 2,
          hint: 'She says who he sounded like for a moment, and that this was no mistake.',
          explanation:
            'An educated speaker who drops into dialect for a line or two is doing a comic register, not slipping: „ne griješi, nego mijenja registar”. Recognizing the switch is what lets you hear the joke rather than the dialect.',
        },
        {
          type: 'type',
          q: 'Now you. David tries the trick on a traffic jam: „Na obilaznici je bila mala ____ od deset kilometara.” (gužva)',
          answer: 'gužvica',
          hint: 'The feminine diminutive suffix -ica, on a jam that is anything but small.',
          explanation:
            'mala gužvica od deset kilometara — a "tiny little jam" ten kilometers long. The diminutive does not describe the size; it laughs at it.',
        },
        {
          type: 'type',
          q: 'Maja answers in kind and hands David the check with mock ceremony: „Izvolite račun, gospodine ____.” (doktor)',
          answer: 'doktore',
          hint: 'Both words of an address stand in the vocative, and the first one already does.',
          explanation:
            'gospodine doktore — a mock-formal vocative between friends is a joke in itself, exactly like David’s „gospođo profesorice”.',
        },
        {
          type: 'type',
          q: 'David shows Maja a photo of his tiny hotel room: „Pogledaj ovu ____ — krevet jedva stane!” (soba — augmentative in -etina, accusative)',
          answer: 'sobetinu',
          hint: 'Add the augmentative suffix to the stem sob-, then the accusative ending that matches ovu.',
          explanation:
            'ovu sobetinu — the reverse mismatch: an augmentative ("a huge great room") for a room in which the bed barely fits, like the comedian’s kućerina for a cabin.',
        },
      ],
    },
    mix: [
      0,
      4,
      1,
      {
        type: 'sort',
        q: 'What is the joke built on?',
        groups: [
          'Two words, one spelling',
          'A diminutive on something big',
          'An augmentative on something small',
        ],
        items: [
          { hr: 'Pao je grad, a kuće još stoje.', group: 0 },
          { hr: 'Dobili smo kaznicu od petsto eura.', group: 1 },
          { hr: 'Ulovio je ribetinu od deset centimetara.', group: 2 },
          { hr: 'Kosa mu je oštra, ali na glavi je nema.', group: 0 },
          { hr: 'Kupio je autić dug šest metara.', group: 1 },
          { hr: 'Ta njegova brodina jedva nosi dvoje ljudi.', group: 2 },
        ],
        explanation:
          'grad (city / hail) and kosa (scythe / hair) are pairs that only the accent separates. kaznica and autić shrink a five-hundred-euro fine and a six-meter car; ribetina and brodina inflate a tiny fish and a tiny boat. In each case the mismatch is the joke.',
      },
      5,
      8,
      6,
      {
        type: 'tf',
        q: 'Written down, the sentence „Pao je grad.” shows clearly whether a city fell or hail fell.',
        answer: false,
        hint: 'Think of what separates the two words in speech — and whether ordinary spelling shows it.',
        explanation:
          'False. The two words are spelled identically and differ only in pitch accent, which ordinary writing does not mark. On paper only the context decides — and a joke is made by supplying the wrong context.',
      },
      7,
      3,
      {
        type: 'match',
        q: 'One spelling, two words. Match each form to its pair of meanings.',
        pairs: [
          ['grad', 'city / hail'],
          ['luk', 'onion / bow, arch'],
          ['kosa', 'hair / scythe'],
          ['vila', 'fairy / villa'],
          ['pas', 'dog / belt'],
        ],
        explanation:
          'Each of these spellings hides two different words. Speech often separates them by accent; writing does not, and a pun lives exactly in that gap.',
      },
      {
        type: 'fix',
        q: 'A mock-formal address to your little sister — but one word is not in the vocative. Tap it. ("Madam Professor, do sit down.")',
        words: ['Gospođa', 'profesorice,', 'izvolite', 'sjesti.'],
        wrong: 0,
        answer: 'Gospođo',
        hint: 'Both words of an address stand in the vocative — and the second one already does.',
        explanation:
          'Gospođo profesorice, izvolite sjesti. — the vocative of gospođa ends in -o. The joke needs flawless formality: the form is perfectly correct and only the addressee is wrong for it.',
      },
      11,
      {
        type: 'transform',
        q: 'As it stands, the sentence can mean that the tourist was holding the phone. Make it say only that YOU used the phone to take the picture.',
        from: 'Slikao sam turista s mobitelom.',
        answer: 'Slikao sam turista mobitelom.',
        accept: ['Turista sam slikao mobitelom.', 'Mobitelom sam slikao turista.'],
        hint: 'The means of an action stands in the bare instrumental; it is the preposition that lets the phone belong to the tourist.',
        explanation:
          'Slikao sam turista mobitelom. — the bare instrumental can only be the means. With s the phrase may also describe the tourist, and a comedian will always choose the reading you did not intend.',
      },
      {
        type: 'order',
        q: 'Put the joke in order: "A little breeze blew, and we were left without a roof."',
        words: ['Puhnuo', 'je', 'vjetrić', 'pa', 'smo', 'ostali', 'bez', 'krova.'],
        accept: ['Puhnuo je vjetrić pa smo bez krova ostali.'],
        explanation:
          'Puhnuo je vjetrić pa smo ostali bez krova. — vjetrić, a "little breeze", for a wind that took the roof off: the diminutive is the punchline. The clitics je and smo each stand second in their own clause.',
      },
      {
        type: 'listen',
        audio:
          'Majstor je rekao da je to sitnica, a onda nam je za tu sitnicu ispostavio računčić od šest stotina eura.',
        q: 'What does the speaker think of the bill?',
        options: [
          'That it was pleasantly small, just as the repairman had promised',
          'That it was outrageously large — the diminutive is the joke',
          'That the repairman forgot to send it',
          'That six hundred euros is a fair price for a small job',
        ],
        correct: 1,
        explanation:
          'sitnica is "a trifle", and računčić od šest stotina eura a "little bill" for six hundred euros. Both small words are aimed at something large; the speaker is laughing bitterly at the price.',
      },
      {
        type: 'dictate',
        audio: 'Nitko mi nije pomogao, sam sam sve popravio.',
        answer: 'Nitko mi nije pomogao, sam sam sve popravio.',
        hint: 'Eight words: "Nobody helped me; I fixed everything by myself."',
        explanation:
          'Nitko mi nije pomogao, sam sam sve popravio. — the first sam means "alone, by myself", the second is the auxiliary "I am": one spelling, two words, side by side.',
      },
    ],
  },
};
