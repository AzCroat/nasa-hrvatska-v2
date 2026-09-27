// functions/api/content/_data/lessonPracticeB1.js
//
// B1 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time) and one guided-practice slide (four items, each with a HINT shown
// after a first wrong try and an explanation once resolved).
//
// Authoring rules, the same ones the checks and drills follow:
//   - distractors are wrong by case, gender, agreement, aspect, word order or
//     register — never by being Serbian, and never real Croatian that a native
//     would say in that slot;
//   - no cue in the form of its answer (a parenthetical names the MEANING or the
//     dictionary form, not the answer);
//   - a hint points at the rule and never contains the answer;
//   - the greeting is bog (owner decision, 2026-07).
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_B1 = {
  aspect: {
    worked: [
      {
        title: 'Is the Result There?',
        problem: 'Dopuni: Jučer sam ___ cijelo pismo i poslao ga. (pisati / napisati)',
        en: 'Fill in: Yesterday I wrote the whole letter and sent it.',
        steps: [
          {
            label: 'Look for the result',
            text: '"cijelo pismo" (the whole letter) and "poslao ga" (sent it) — the letter exists and has gone. The writing was finished.',
          },
          {
            label: 'Pick the aspect',
            text: 'A finished action with a result is perfective, so the verb is napisati, not pisati.',
          },
          {
            label: 'Build the past',
            text: 'Past participle of napisati for a man: napisao. Sam is already in second position.',
          },
        ],
        answer: 'Jučer sam napisao cijelo pismo i poslao ga.',
      },
      {
        title: 'A Habit Wants the Process Verb',
        problem: 'Dopuni: Svaki dan ___ pismo baki. (pisati / napisati)',
        en: 'Fill in: Every day I write a letter to grandma.',
        steps: [
          {
            label: 'Find the trigger',
            text: '"Svaki dan" (every day) marks a habit — the action repeats, it is not one completed event.',
          },
          {
            label: 'Pick the aspect',
            text: 'Habits are imperfective, so the verb is pisati.',
          },
          {
            label: 'Conjugate',
            text: 'pisati in the present, first person: the s softens to š — pišem.',
          },
        ],
        answer: 'Svaki dan pišem pismo baki.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Prošle godine ___ hrvatski svaki utorak. (studied — every Tuesday)',
          options: ['sam učio', 'sam naučio', 'ću učiti', 'učim'],
          correct: 0,
          hint: 'It happened in the past, and it happened again and again.',
          explanation:
            'sam učio — a repeated past action is imperfective. Naučio would mean you mastered it once.',
        },
        {
          q: 'Konačno sam ___ tu knjigu — sada je mogu vratiti. (read it through)',
          options: ['čitao', 'pročitao', 'čitam', 'pročitam'],
          correct: 1,
          hint: 'The book is finished — that is why it can go back. And sam needs a past participle.',
          explanation: 'pročitao — perfective past: the reading is complete, with a result.',
        },
        {
          q: 'Which line shows each pair in the order imperfective → perfective?',
          options: ['učiti → naučiti', 'naučiti → učiti', 'pročitati → čitati', 'doći → dolaziti'],
          correct: 0,
          hint: 'The perfective member is usually the one with the prefix, or the shorter irregular one.',
          explanation: 'učiti → naučiti. The other three put the perfective first.',
        },
        {
          q: 'Dok je ___ ručak, gledao je vijesti. (was eating)',
          options: ['pojeo', 'jeo', 'pojede', 'jede'],
          correct: 1,
          hint: 'Two things running at the same time — neither is a finished step.',
          explanation: 'jeo — an ongoing background action after dok is imperfective.',
        },
      ],
    },
  },

  'future-tense': {
    worked: [
      {
        title: 'The Short Future of a -ti Verb',
        problem: 'Reci kratkim oblikom: I will work tomorrow. (raditi)',
        en: 'Say it with the short form: I will work tomorrow.',
        steps: [
          { label: 'The auxiliary', text: 'For ja the future auxiliary is ću.' },
          {
            label: 'Clip the infinitive',
            text: 'raditi ends in -ti, so it drops its final -i when it comes before the auxiliary: radit.',
          },
          {
            label: 'Order',
            text: 'ću is a clitic and sits second, straight after the clipped verb. If you opened with sutra instead, the infinitive would stay whole: Sutra ću raditi.',
          },
        ],
        answer: 'Radit ću sutra.',
      },
      {
        title: 'A Negative Future With a -ći Verb',
        problem: 'Reci: We will not come to the wedding.',
        en: 'We will not come to the wedding.',
        steps: [
          {
            label: 'The negative auxiliary',
            text: 'For mi it is nećemo — one word, never ne ćemo.',
          },
          {
            label: 'Choose the verb',
            text: 'A single, bounded event: the perfective doći. It ends in -ći, so it is never clipped.',
          },
          {
            label: 'Order',
            text: 'nećemo is a full, stressed word, so it may open the sentence. The destination takes the accusative: na vjenčanje.',
          },
        ],
        answer: 'Nećemo doći na vjenčanje.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ti ___ kupiti karte, a ja ću rezervirati hotel.',
          options: ['ću', 'ćeš', 'će', 'ćete'],
          correct: 1,
          hint: 'Match the auxiliary to the subject: ti, one person, informal.',
          explanation: 'ti ćeš — second person singular.',
        },
        {
          q: 'Which is the written short future of pisati with oni?',
          options: ['Pisati će.', 'Pisat ćeš.', 'Pisat će.', 'Pisao će.'],
          correct: 2,
          hint: 'A -ti infinitive loses its last vowel before the auxiliary, and oni takes the same auxiliary as on.',
          explanation: 'Pisat će — clipped infinitive plus će (third person plural).',
        },
        {
          q: '"Hoće li Ana doći?" — answer "No, she won\'t."',
          options: ['Ne, neće.', 'Ne, ne će.', 'Ne, nije.', 'Ne, neću.'],
          correct: 0,
          hint: 'The negative future auxiliary is written as one word, and it must be third person.',
          explanation: 'Ne, neće. Nije is the present of biti; neću is "I won\'t".',
        },
        {
          q: '"I will give you the book back." (vratiti)',
          options: [
            'Vratit ti ću knjigu.',
            'Ću ti vratiti knjigu.',
            'Ti ću vratiti knjigu.',
            'Vratit ću ti knjigu.',
          ],
          correct: 3,
          hint: 'Clitics cannot open a sentence, and in a cluster the future auxiliary comes before a pronoun clitic.',
          explanation: 'Vratit ću ti knjigu — verb, then ću, then the dative clitic ti.',
        },
      ],
    },
  },

  'aspect-imperfective': {
    worked: [
      {
        title: 'A Habit in the Past',
        problem: 'Dopuni: Svako jutro sam ___ u šest. (ustajati / ustati) — as a student',
        en: 'Fill in: Every morning I got up at six (when I was a student).',
        steps: [
          {
            label: 'Find the trigger',
            text: '"Svako jutro" — every morning. The action repeated; it is a habit.',
          },
          {
            label: 'Pick the aspect',
            text: 'Habits take the imperfective: ustajati, not ustati.',
          },
          {
            label: 'Build the past',
            text: 'Participle for a man: ustajao. Sam stays in second position, right after svako jutro.',
          },
        ],
        answer: 'Svako jutro sam ustajao u šest.',
      },
      {
        title: 'Setting the Scene',
        problem: 'Dopuni: Dok je Ivana ___ (kuhati) večeru, djeca su se igrala u vrtu.',
        en: 'While Ivana was cooking dinner, the children were playing in the garden.',
        steps: [
          {
            label: 'What kind of action?',
            text: 'dok (while) + an action in progress — it is background, not a plot event.',
          },
          {
            label: 'Keep the imperfective',
            text: 'kuhati is already imperfective, which is exactly what a background needs.',
          },
          {
            label: 'Agree with the subject',
            text: 'Ivana is feminine: kuhala. Je is already there.',
          },
        ],
        answer: 'Dok je Ivana kuhala večeru, djeca su se igrala u vrtu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kao djeca često smo ___ baku na selu. (visited — often)',
          options: ['posjećivali', 'posjetili', 'posjećujemo', 'posjetimo'],
          correct: 0,
          hint: 'Često marks repetition, and smo needs a past participle.',
          explanation: 'posjećivali — the imperfective past for a repeated visit.',
        },
        {
          q: 'Hrvati ___ Božić s obitelji. (as a rule — every year)',
          options: ['su proslavili', 'proslavit će', 'slave', 'slavili'],
          correct: 2,
          hint: 'A general truth about how things are, in the present, with no single event in view.',
          explanation: 'slave — general truths and customs take the imperfective present.',
        },
        {
          q: 'Cijelo popodne ___ zadaću, ali je nisam završio.',
          options: ['sam napisao', 'sam pisao', 'ću pisati', 'pišem'],
          correct: 1,
          hint: 'The second half tells you the work was NOT finished.',
          explanation:
            'sam pisao — the imperfective describes the activity without claiming a result.',
        },
        {
          q: 'Telefon je zazvonio dok sam se ___. (was showering)',
          options: ['tuširao', 'istuširao', 'tuširam', 'istuširam'],
          correct: 0,
          hint: 'The phone ringing is the event; your action is the background it interrupted.',
          explanation: 'tuširao — the ongoing background after dok is imperfective.',
        },
      ],
    },
  },

  'aspect-perfective': {
    worked: [
      {
        title: 'A Chain of Events',
        problem: 'Ispričaj: He came home, took off his shoes and sat down.',
        en: 'He came home, took off his shoes and sat down.',
        steps: [
          {
            label: 'Plot or scene?',
            text: 'Three steps, each one finished before the next starts — plot events, so all three are perfective.',
          },
          {
            label: 'Find the perfectives',
            text: 'doći → došao, izuti → izuo, sjesti → sjeo.',
          },
          {
            label: 'One auxiliary',
            text: 'je is said once, in second position, and serves the whole chain.',
          },
        ],
        answer: 'Došao je kući, izuo cipele i sjeo.',
      },
      {
        title: 'A Bounded Future Event',
        problem: 'Reci: I will buy the tickets tomorrow. (one purchase, done)',
        en: 'I will buy the tickets tomorrow.',
        steps: [
          {
            label: 'One event with an end',
            text: 'A single purchase that will be completed — perfective: kupiti, not kupovati.',
          },
          {
            label: 'The future',
            text: 'ću + the infinitive. Opening with sutra keeps the infinitive whole.',
          },
          { label: 'The object', text: 'karte — accusative plural of karta.' },
        ],
        answer: 'Sutra ću kupiti karte.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Pojela je sendvič, ___ ruke i vratila se poslu. (washed)',
          options: ['prala', 'oprala', 'pere', 'opere'],
          correct: 1,
          hint: 'Each verb in the chain is a completed step, and the chain is in the past.',
          explanation: 'oprala — a plot event in a narrative chain is perfective.',
        },
        {
          q: 'Beba je ___ u osam i sad mirno spava. (fell asleep)',
          options: ['spavala', 'zaspala', 'spava', 'zaspati'],
          correct: 1,
          hint: 'You need the moment of change that created the new state — and je needs a participle.',
          explanation: 'zaspala — the perfective marks the moment she fell asleep.',
        },
        {
          q: 'Tu knjigu ___ za tri dana. (I read it through in three days — a man speaking)',
          options: ['sam pročitao', 'sam čitao', 'čitam', 'ću čitati'],
          correct: 0,
          hint: '"za + time" here means "within that time" — the job got done.',
          explanation: 'sam pročitao — completion within a period is perfective.',
        },
        {
          q: 'Ne brini, ___ ti novac do petka. (I will pay back — once)',
          options: ['vratit ću', 'vratio sam', 'vraćao sam', 'vratiti'],
          correct: 0,
          hint: 'A single, bounded promise about the future.',
          explanation: 'vratit ću — perfective future for one completed action.',
        },
      ],
    },
  },

  'genitive-deep': {
    worked: [
      {
        title: 'Possession With an Adjective',
        problem: 'Reci: the colour of my new car',
        en: 'the colour of my new car',
        steps: [
          {
            label: 'Who owns what?',
            text: 'The colour belongs to the car, so the car — the owner — goes into the genitive.',
          },
          {
            label: 'The noun',
            text: 'auto is masculine: genitive auta.',
          },
          {
            label: 'Make the words agree',
            text: 'moj → mog, novi → novog. The possessed thing comes first.',
          },
        ],
        answer: 'boja mog novog auta',
      },
      {
        title: 'Nema With a Plural',
        problem: 'Reci: There are no tickets left.',
        en: 'There are no tickets left.',
        steps: [
          {
            label: 'Absence',
            text: '"There are no" is nema, and nema always takes the genitive. It never changes to a plural verb.',
          },
          {
            label: 'Plural',
            text: 'Tickets — more than one — so the genitive plural.',
          },
          {
            label: 'The form',
            text: 'karta → karata: an a slips in to break up the -rt- cluster. Više adds "any more".',
          },
        ],
        answer: 'Nema više karata.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Nema ___ u hladnjaku. (milk — mlijeko)',
          options: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
          correct: 1,
          hint: 'Absence after nema, and mlijeko is neuter.',
          explanation: 'Nema mlijeka — nema + genitive; neuter -o becomes -a.',
        },
        {
          q: "Ovo je kuća moje ___. (my aunt's — teta)",
          options: ['teta', 'tetu', 'tete', 'teti'],
          correct: 2,
          hint: 'The owner goes in the genitive, and teta is feminine.',
          explanation: 'moje tete — feminine -a becomes -e in the genitive.',
        },
        {
          q: 'Popio sam čašu ___. (a glass of water — voda)',
          options: ['vode', 'voda', 'vodu', 'vodom'],
          correct: 0,
          hint: 'A measure comes first; what is measured follows in the case of "of".',
          explanation: 'čašu vode — the container is accusative, its contents genitive.',
        },
        {
          q: 'Pijem čaj bez ___. (sugar — šećer)',
          options: ['šećer', 'šećeru', 'šećerom', 'šećera'],
          correct: 3,
          hint: 'bez (without) is one of the prepositions that always take the genitive.',
          explanation: 'bez šećera — masculine genitive -a.',
        },
      ],
    },
  },

  'dative-locative': {
    worked: [
      {
        title: 'Who Receives It?',
        problem: 'Reci: I sent the photos to grandma.',
        en: 'I sent the photos to grandma.',
        steps: [
          {
            label: 'Find the receiver',
            text: 'Grandma gets the photos — she is the indirect object, so she goes in the dative (komu?).',
          },
          {
            label: 'The ending',
            text: 'Feminine -a becomes -i. Family words like baka keep their k — baki, not baci — unlike knjiga → knjizi.',
          },
          {
            label: 'Build it',
            text: 'Poslao sam (a man speaking) + the photos in the accusative + baki.',
          },
        ],
        answer: 'Poslao sam fotografije baki.',
      },
      {
        title: 'Where, and About What',
        problem: 'Dopuni: Sestra radi u ___ i piše knjigu o ___. (bolnica / more)',
        en: 'My sister works in a hospital and is writing a book about the sea.',
        steps: [
          {
            label: 'u — being somewhere',
            text: 'She works IN the hospital — a location with no movement, so the locative.',
          },
          {
            label: 'Feminine locative',
            text: 'bolnica → bolnici (-a becomes -i).',
          },
          {
            label: 'o — about',
            text: 'o always takes the locative. more is neuter: -e becomes -u, moru.',
          },
        ],
        answer: 'Sestra radi u bolnici i piše knjigu o moru.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Pokaži ___ kako se to radi. (show him)',
          options: ['mu', 'ga', 'njega', 'on'],
          correct: 0,
          hint: 'He is the one being shown — the receiver — so you need the dative clitic.',
          explanation: 'mu — the dative clitic of on. Ga and njega are accusative.',
        },
        {
          q: 'Vjerujem ___. (my friend — prijatelj)',
          options: ['prijatelja', 'prijatelju', 'prijatelj', 'prijateljem'],
          correct: 1,
          hint: 'vjerovati is one of the verbs that take the dative, not the accusative.',
          explanation: 'Vjerujem prijatelju — masculine dative -u.',
        },
        {
          q: 'Ključevi su na ___. (on the table — stol)',
          options: ['stol', 'stola', 'stolu', 'stolom'],
          correct: 2,
          hint: 'The keys are lying there — nothing is moving.',
          explanation: 'na stolu — locative for a static location.',
        },
        {
          q: 'Zahvalio sam ___ na pomoći. (the neighbour — susjed)',
          options: ['susjeda', 'susjedu', 'susjed', 'susjedom'],
          correct: 1,
          hint: 'You thank TO someone in Croatian: the person thanked is the receiver.',
          explanation: 'zahvaliti susjedu — zahvaliti takes the dative.',
        },
      ],
    },
  },

  instrumental: {
    worked: [
      {
        title: 'A Tool Needs No Preposition',
        problem: 'Reci: She sliced the bread with a knife.',
        en: 'She sliced the bread with a knife.',
        steps: [
          {
            label: 'Tool or company?',
            text: 'The knife is a tool, so it takes the bare instrumental — no s.',
          },
          {
            label: 'The ending',
            text: 'nož ends in the soft consonant ž, so the masculine ending is -em, not -om: nožem.',
          },
          {
            label: 'The verb',
            text: 'One completed action, a woman: narezala je.',
          },
        ],
        answer: 'Narezala je kruh nožem.',
      },
      {
        title: 'With Someone: s or sa?',
        problem: 'Reci: I went to the cinema with Željko.',
        en: 'I went to the cinema with Željko.',
        steps: [
          {
            label: 'Company',
            text: 'Going WITH a person: s/sa + the instrumental.',
          },
          {
            label: 'The name',
            text: 'Željko is a masculine name in -o: instrumental Željkom.',
          },
          {
            label: 's or sa?',
            text: 'The next word starts with ž, so the preposition is sa.',
          },
        ],
        answer: 'Išao sam u kino sa Željkom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Platit ću ___. (in cash — gotovina)',
          options: ['gotovinu', 'gotovinom', 's gotovinom', 'gotovine'],
          correct: 1,
          hint: 'Cash is the means of paying, like a card — and a means takes no preposition.',
          explanation: 'gotovinom — bare instrumental of means.',
        },
        {
          q: 'Sutra idem na izlet ___. (with friends — prijatelji)',
          options: ['s prijateljima', 'prijateljima', 's prijateljem', 's prijatelja'],
          correct: 0,
          hint: 'Company needs the preposition, and the friends are plural.',
          explanation: 's prijateljima — s + instrumental plural (-ima).',
        },
        {
          q: 'Mačka spava pod ___. (under the bed — krevet)',
          options: ['krevet', 'krevetu', 'krevetom', 'kreveta'],
          correct: 2,
          hint: 'pod with no movement takes the same case as s/sa.',
          explanation: 'pod krevetom — pod + instrumental for position.',
        },
        {
          q: 'Razgovarala sam ___. (with my sister — sestra)',
          options: ['s sestrom', 'sa sestrom', 'sa sestru', 'sestrom'],
          correct: 1,
          hint: 'Look at the first sound of the noun before choosing the short or long form of "with".',
          explanation: 'sa sestrom — sa before s, š, z, ž.',
        },
      ],
    },
  },

  'motion-verbs': {
    worked: [
      {
        title: 'Is He Still Here?',
        problem: 'Reci: Marko left for work an hour ago. (he is gone)',
        en: 'Marko left for work an hour ago.',
        steps: [
          {
            label: 'What matters?',
            text: 'The departure is complete — he is gone. That is the perfective otići.',
          },
          {
            label: 'The past',
            text: 'otići → otišao, with je in second position.',
          },
          {
            label: 'Destination and time',
            text: 'na posao is a destination (accusative); an hour ago is prije sat vremena.',
          },
        ],
        answer: 'Marko je otišao na posao prije sat vremena.',
      },
      {
        title: 'A Habit of Coming',
        problem: 'Reci: My parents come to visit every summer.',
        en: 'My parents come to visit every summer.',
        steps: [
          {
            label: 'Habit or single arrival?',
            text: 'Every summer — a repeated arrival, so the imperfective dolaziti.',
          },
          {
            label: 'Conjugate',
            text: 'oni: dolaze.',
          },
          {
            label: 'Purpose',
            text: 'u posjet — "for a visit", accusative after u because it is where the motion leads.',
          },
        ],
        answer: 'Moji roditelji dolaze u posjet svako ljeto.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Svaki dan ___ u školu pješice. (I go)',
          options: ['idem', 'otići', 'otišao sam', 'ideš'],
          correct: 0,
          hint: 'A daily habit, in the present, first person.',
          explanation: 'idem — the imperfective present of ići for a routine.',
        },
        {
          q: 'Zakasnili smo: vlak je već ___. (had already left)',
          options: ['otišao', 'otišla', 'ide', 'odlaziti'],
          correct: 0,
          hint: 'The train is gone — the departure is complete — and vlak is masculine.',
          explanation: 'otišao — perfective: the leaving is finished and its result stands.',
        },
        {
          q: 'Molim vas, ___ u sobu. (come in — polite)',
          options: ['izađite', 'ući', 'uđite', 'uđi'],
          correct: 2,
          hint: 'Into the room — find the prefix that matches the preposition u — and molim vas needs the Vi-form.',
          explanation: 'uđite — u- (into) + ići, polite imperative. Uđi is the ti-form.',
        },
        {
          q: 'Sutra putujemo na ___. (to the coast — obala)',
          options: ['obali', 'obalu', 'obale', 'obalom'],
          correct: 1,
          hint: 'A destination after a verb of motion.',
          explanation: 'na obalu — accusative for where the motion leads.',
        },
      ],
    },
  },

  'numbers-nouns': {
    worked: [
      {
        title: 'The Last Digit Decides',
        problem: 'Reci: Our class has twenty-two pupils.',
        en: 'Our class has twenty-two pupils.',
        steps: [
          {
            label: 'Look at the last digit',
            text: 'Twenty-two ends in 2, so it follows the 2–4 rule.',
          },
          {
            label: 'Apply the rule',
            text: '2, 3, 4 take the genitive singular: učenik → učenika.',
          },
          {
            label: 'The number word',
            text: 'učenik is masculine, so two is dva (dvije is for feminine nouns).',
          },
        ],
        answer: 'Naš razred ima dvadeset dva učenika.',
      },
      {
        title: 'Five and Up — and the Verb',
        problem: 'Reci: Seven friends came to the party.',
        en: 'Seven friends came to the party.',
        steps: [
          {
            label: 'The noun',
            text: '7 is 5 or more, so the genitive plural: prijatelja.',
          },
          {
            label: 'The verb',
            text: 'After 5 and above the verb is neuter singular — je došlo, not su došli.',
          },
          {
            label: 'Order',
            text: 'Start with the destination and je sits second: Na zabavu je došlo…',
          },
        ],
        answer: 'Na zabavu je došlo sedam prijatelja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Čekam već ___. (twenty minutes — minuta)',
          options: ['dvadeset minuta', 'dvadeset minute', 'dvadeset minutu', 'dvadeset minutama'],
          correct: 0,
          hint: 'The last digit of twenty is 0 — treat it like 5 and above.',
          explanation: 'dvadeset minuta — genitive plural.',
        },
        {
          q: 'Soba ima ___. (two windows — prozor)',
          options: ['dva prozori', 'dva prozora', 'dvije prozora', 'dva prozor'],
          correct: 1,
          hint: 'Two takes the genitive singular, and prozor is masculine.',
          explanation: 'dva prozora — masculine dva + genitive singular.',
        },
        {
          q: 'Karta vrijedi ___. (thirteen days — dan)',
          options: ['trinaest dan', 'trinaest dani', 'trinaest dane', 'trinaest dana'],
          correct: 3,
          hint: 'The teens do not follow their last digit.',
          explanation: 'trinaest dana — 11 to 19 always take the genitive plural.',
        },
        {
          q: 'Na izlet je došlo ___. (three children)',
          options: ['troje djece', 'tri djece', 'troje djeca', 'troje dijete'],
          correct: 0,
          hint: 'Children are counted with a collective number, and what follows is genitive.',
          explanation: 'troje djece — collective number + genitive of djeca.',
        },
      ],
    },
  },

  'feelings-inner-life': {
    worked: [
      {
        title: 'A Feeling That Happens To You',
        problem: 'Reci: She is bored.',
        en: 'She is bored.',
        steps: [
          {
            label: 'Who feels it?',
            text: 'Boredom is a state that happens TO her, so she goes in the dative, not the nominative.',
          },
          {
            label: 'The pronoun',
            text: 'ona → the dative clitic joj.',
          },
          {
            label: 'Build it',
            text: 'Neuter adverb dosadno first, then the clitics — the pronoun before je.',
          },
        ],
        answer: 'Dosadno joj je.',
      },
      {
        title: 'Each Verb Chooses Its Case',
        problem: 'Reci: I am afraid of the exam and I hope for a good grade.',
        en: 'I am afraid of the exam and I hope for a good grade.',
        steps: [
          {
            label: 'bojati se',
            text: 'Fear takes the genitive: ispit → ispita.',
          },
          {
            label: 'nadati se',
            text: 'Hope takes the dative: dobra ocjena → dobroj ocjeni.',
          },
          {
            label: 'Keep the se',
            text: 'Both verbs are reflexive, so each clause carries its own se.',
          },
        ],
        answer: 'Bojim se ispita i nadam se dobroj ocjeni.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Nedostaje mi ___. (I miss my mum — mama)',
          options: ['mama', 'mamu', 'mami', 'mame'],
          correct: 0,
          hint: 'Croatian turns it round: the person missed is the SUBJECT, and you are already in the dative.',
          explanation: 'Nedostaje mi mama — she is the subject, in the nominative.',
        },
        {
          q: 'Sramim se ___. (of my mistake — svoja pogreška)',
          options: ['svojoj pogrešci', 'svoju pogrešku', 'svoje pogreške', 'svojom pogreškom'],
          correct: 2,
          hint: 'Shame works like fear: it takes the case of "of".',
          explanation: 'svoje pogreške — sramiti se takes the genitive.',
        },
        {
          q: 'Veselimo se ___. (your visit — tvoj posjet)',
          options: ['tvog posjeta', 'tvom posjetu', 'tvoj posjet', 'tvojim posjetom'],
          correct: 1,
          hint: 'Looking forward to something takes the same case as hoping for it.',
          explanation: 'tvom posjetu — veseliti se takes the dative.',
        },
        {
          q: 'On ___ uvijek snađe, bez obzira na probleme. (he always manages)',
          options: ['se', 'ga', 'si', 'mu'],
          correct: 0,
          hint: 'snaći se / snalaziti se is reflexive, and the subject is on.',
          explanation: 'On se uvijek snađe — the reflexive se, in second position.',
        },
      ],
    },
  },

  'time-duration': {
    worked: [
      {
        title: 'Ago and In',
        problem: 'Reci: I arrived three days ago, and I leave in a week.',
        en: 'I arrived three days ago, and I leave in a week.',
        steps: [
          {
            label: 'Ago',
            text: 'prije + the genitive: prije tri dana.',
          },
          {
            label: 'In',
            text: 'za + the accusative, looking forward: za tjedan dana.',
          },
          {
            label: 'Tenses',
            text: 'The arrival is done — perfective past stigao sam. A planned departure can sit in the present: odlazim.',
          },
        ],
        answer: 'Stigao sam prije tri dana, a odlazim za tjedan dana.',
      },
      {
        title: 'Still Going On',
        problem: 'Reci: I have been working in Zagreb for two years. (and still do)',
        en: 'I have been working in Zagreb for two years.',
        steps: [
          {
            label: 'Still true?',
            text: 'Yes — you still work there, so Croatian uses the PRESENT, not the past.',
          },
          {
            label: 'Duration',
            text: 'How long is the bare accusative with no preposition: dvije godine.',
          },
          {
            label: 'Add već',
            text: 'već + a duration is the everyday way to say "for … now".',
          },
        ],
        answer: 'Radim u Zagrebu već dvije godine.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ostao sam u Rijeci ___. (for a month)',
          options: ['mjesec dana', 'za mjesec dana', 'mjesecu dana', 'od mjesec dana'],
          correct: 0,
          hint: 'How long something lasted needs no preposition at all.',
          explanation: 'mjesec dana — duration is the bare accusative. Za would mean "in a month".',
        },
        {
          q: '"I don\'t live there any more."',
          options: [
            'Još živim tamo.',
            'Više ne živim tamo.',
            'Još ne živim tamo.',
            'Tek živim tamo.',
          ],
          correct: 1,
          hint: 'You did live there once, and that has stopped.',
          explanation: 'Više ne živim tamo. Još ne is "not yet".',
        },
        {
          q: 'Trgovina je zatvorena ___ ponedjeljka. (until Monday)',
          options: ['od', 'za', 'u', 'do'],
          correct: 3,
          hint: 'The preposition that marks an end point, taking the genitive.',
          explanation: 'do ponedjeljka — do + genitive = until. Od would be "since".',
        },
        {
          q: 'Tek sam ___. (I have only just arrived — a man speaking)',
          options: ['stigao', 'stigli', 'stići', 'stigne'],
          correct: 0,
          hint: 'tek + a completed arrival in the past, after sam.',
          explanation: 'Tek sam stigao — perfective past participle.',
        },
      ],
    },
  },

  'verb-prefixes': {
    worked: [
      {
        title: 'Choosing the Prefix',
        problem: 'Dopuni: Zaboravio sam nešto, moram to ___ na kraj pisma. (add in writing)',
        en: 'I forgot something, I have to add it at the end of the letter.',
        steps: [
          {
            label: 'Find the root',
            text: 'The action is writing: pisati.',
          },
          {
            label: 'Find the prefix',
            text: 'You are adding to what is already there — do-, the prefix that matches do (up to, as far as).',
          },
          {
            label: 'Aspect',
            text: 'The prefix makes it perfective, which suits one completed addition after moram.',
          },
        ],
        answer: 'Zaboravio sam nešto, moram to dopisati na kraj pisma.',
      },
      {
        title: 'In and Out',
        problem: 'Reci: He went into the shop and came out after five minutes.',
        en: 'He went into the shop and came out after five minutes.',
        steps: [
          {
            label: 'Into',
            text: 'u (into) → the prefix u-: ući, past ušao.',
          },
          {
            label: 'Out of',
            text: 'iz (out of) → the prefix iz-: izaći, past izašao.',
          },
          {
            label: 'Case',
            text: 'Motion into the shop takes the accusative: u trgovinu. After five minutes is nakon pet minuta.',
          },
        ],
        answer: 'Ušao je u trgovinu i izašao nakon pet minuta.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kći se ove godine ___ na fakultet. (enrolled)',
          options: ['upisala', 'ispisala', 'opisala', 'potpisala'],
          correct: 0,
          hint: 'Your name is written INTO the register — the prefix that matches the preposition "into".',
          explanation: 'upisala se — u- + pisati: to enrol. Ispisati se is to withdraw.',
        },
        {
          q: 'Možeš li mi ___ čašu vode? (bring — to me)',
          options: ['odnijeti', 'donijeti', 'podnijeti', 'nanijeti'],
          correct: 1,
          hint: 'Carrying something up to where the speaker is.',
          explanation: 'donijeti — do- (up to) on the root of carrying. Odnijeti is to take away.',
        },
        {
          q: 'Samo ću ___ tko je na vratima. (take a quick look)',
          options: ['pogledati', 'razgledati', 'ugledati', 'izgledati'],
          correct: 0,
          hint: 'The prefix that means "a little, briefly".',
          explanation: 'pogledati — po- adds "briefly". Razgledati is to look around a place.',
        },
        {
          q: 'Čaša je pala i ___ se. (smashed to pieces)',
          options: ['zabila', 'dobila', 'razbila', 'pobila'],
          correct: 2,
          hint: 'The prefix that means "apart".',
          explanation: 'razbila se — raz- (apart) + biti in its sense "to strike".',
        },
      ],
    },
  },

  'position-placement': {
    worked: [
      {
        title: 'Sitting Down, Then Waiting',
        problem: 'Reci: She sat down on the bench and waited for the bus.',
        en: 'She sat down on the bench and waited for the bus.',
        steps: [
          {
            label: 'Change or state?',
            text: 'Sitting down is a change of position — the perfective sjesti: sjela.',
          },
          {
            label: 'The case',
            text: 'A change lands somewhere, so the accusative: klupa → na klupu.',
          },
          {
            label: 'The waiting',
            text: 'Waiting is ongoing — imperfective čekala. One je serves both.',
          },
        ],
        answer: 'Sjela je na klupu i čekala autobus.',
      },
      {
        title: 'Put It, Then It Stands',
        problem: 'Reci: I put the vase on the shelf, and now it stands on the shelf.',
        en: 'I put the vase on the shelf, and now it stands on the shelf.',
        steps: [
          {
            label: 'Put what?',
            text: 'There is an object — the vase — so the verb is staviti, and the destination is accusative: na policu.',
          },
          {
            label: 'Now it stands',
            text: 'No object, just a position: stajati, present stoji.',
          },
          {
            label: 'The state takes the locative',
            text: 'Nothing is moving any more: na polici.',
          },
        ],
        answer: 'Stavio sam vazu na policu i sada stoji na polici.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Mačka ___ na kauču cijelo popodne. (was lying)',
          options: ['je ležala', 'je legla', 'je stavila', 'je sjela'],
          correct: 0,
          hint: 'All afternoon, and the case is locative — a state, not a change.',
          explanation: 'je ležala — ležati is the ongoing state of lying.',
        },
        {
          q: 'Objesi jaknu na ___. (on the hook — vješalica)',
          options: ['vješalici', 'vješalicu', 'vješalice', 'vješalicom'],
          correct: 1,
          hint: 'Hanging it up is a change — the jacket arrives somewhere.',
          explanation: 'na vješalicu — accusative after a verb of change.',
        },
        {
          q: 'Tanjuri ___ u ormariću. (are in the cupboard)',
          options: ['stavljaju', 'stave', 'stanu', 'stoje'],
          correct: 3,
          hint: 'The plates are just there — no one is putting anything, and there is no object.',
          explanation: 'stoje — stajati for where something is placed.',
        },
        {
          q: 'Djeca ___ za stolom i jedu. (are sitting)',
          options: ['sjednu', 'sjede', 'sjeli', 'sjedaju'],
          correct: 1,
          hint: 'An ongoing state — and za stolom is where they already are.',
          explanation: 'sjede — sjediti, the state of being seated.',
        },
      ],
    },
  },

  'infinitive-vs-da': {
    worked: [
      {
        title: 'Same Subject: the Infinitive',
        problem: 'Reci: We want to visit Plitvice.',
        en: 'We want to visit Plitvice.',
        steps: [
          {
            label: 'Who wants, who visits?',
            text: 'mi want, and mi visit — the same subject throughout.',
          },
          {
            label: 'Apply the test',
            text: 'Same subject → a plain infinitive, no da.',
          },
          {
            label: 'Aspect',
            text: 'One visit — the perfective posjetiti.',
          },
        ],
        answer: 'Želimo posjetiti Plitvice.',
      },
      {
        title: 'Different Subject: a da-Clause',
        problem: 'Reci: Mum wants us to call her more often.',
        en: 'Mum wants us to call her more often.',
        steps: [
          {
            label: 'Who wants, who calls?',
            text: 'Mum wants; we call. Two different subjects.',
          },
          {
            label: 'Apply the test',
            text: 'Different subject → da + a full clause with its own verb: da … zovemo.',
          },
          {
            label: 'Pronoun and aspect',
            text: 'her = the clitic je, straight after da. Calling repeatedly is imperfective: zvati → zovemo.',
          },
        ],
        answer: 'Mama želi da je češće zovemo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Počela je ___ klavir. (to learn — učiti)',
          options: ['učiti', 'uči', 'učila', 'učim'],
          correct: 0,
          hint: 'A verb of starting, and the same person starts and learns.',
          explanation: 'Počela je učiti — the plain infinitive after početi.',
        },
        {
          q: 'Znam ___ si umoran.',
          options: ['ako', 'da', 'koji', 'li'],
          correct: 1,
          hint: 'After a verb of knowing, the "that" English can drop is compulsory here.',
          explanation: 'Znam da si umoran — da (that) introduces the clause.',
        },
        {
          q: '"I want you to wait for me."',
          options: [
            'Želim te pričekati.',
            'Želim ti pričekati me.',
            'Želim da me pričekaš.',
            'Želim pričekaš me.',
          ],
          correct: 2,
          hint: 'I want, but YOU wait — two subjects, so a full clause.',
          explanation: 'Želim da me pričekaš. Želim te pričekati means "I want to wait for you".',
        },
        {
          q: 'Idemo ___ baku. (to visit)',
          options: ['posjetiti', 'posjetimo', 'posjećujemo', 'posjetili'],
          correct: 0,
          hint: 'Purpose after a verb of motion, same subject.',
          explanation: 'Idemo posjetiti baku — an infinitive of purpose.',
        },
      ],
    },
  },

  impersonal: {
    worked: [
      {
        title: 'Writing a Sign',
        problem: 'Napiši natpis: Photography is not allowed here.',
        en: 'Photography is not allowed here.',
        steps: [
          {
            label: 'No doer',
            text: 'A rule for everyone — so the impersonal modal + se.',
          },
          {
            label: 'The modal',
            text: '"not allowed" is ne smije.',
          },
          {
            label: 'Order',
            text: 'se is a clitic: second position, straight after ovdje, then ne smije and the infinitive.',
          },
        ],
        answer: 'Ovdje se ne smije fotografirati.',
      },
      {
        title: 'Adding a Person',
        problem: 'Reci bezlično: My brother needs a new computer.',
        en: 'My brother needs a new computer. (impersonally)',
        steps: [
          {
            label: 'The fixed verb',
            text: 'Impersonal treba never changes for person.',
          },
          {
            label: 'The person',
            text: 'The one who needs goes in the dative: brat → bratu.',
          },
          {
            label: 'The thing needed',
            text: 'It stays in the nominative, and the adjective agrees with neuter računalo: novo.',
          },
        ],
        answer: 'Bratu treba novo računalo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ se platiti i gotovinom. (You can also pay in cash.)',
          options: ['Može', 'Mogu', 'Možeš', 'Moguće'],
          correct: 0,
          hint: 'Modal + se for a notice: the modal goes into the third person singular.',
          explanation: 'Može se platiti — the impersonal modal + se.',
        },
        {
          q: 'Treba ___ pomoć. (She needs help.)',
          options: ['ju', 'joj', 'ona', 'nju'],
          correct: 1,
          hint: 'With impersonal treba the person goes in the dative.',
          explanation: 'Treba joj pomoć — dative clitic of ona.',
        },
        {
          q: 'U Hrvatskoj ___ da je jugo kriv za glavobolje. (it is said)',
          options: ['kaže', 'kažem se', 'se kaže', 'kažu se'],
          correct: 2,
          hint: 'The impersonal se sits in second position, and the verb is third person singular.',
          explanation: 'U Hrvatskoj se kaže — impersonal se + kaže.',
        },
        {
          q: 'Djeci je ___. (The children are cold.)',
          options: ['hladno', 'hladna', 'hladni', 'hladan'],
          correct: 0,
          hint: 'A sensation with the person in the dative: the adjective has no subject to agree with.',
          explanation: 'Djeci je hladno — neuter, subjectless.',
        },
      ],
    },
  },

  'time-clauses': {
    worked: [
      {
        title: 'A "When" That Points Forward',
        problem: 'Reci: When I finish the report, I will send it to you.',
        en: 'When I finish the report, I will send it to you.',
        steps: [
          {
            label: 'The time clause',
            text: 'It points at the future, so it goes in the PRESENT — never ću inside kad.',
          },
          {
            label: 'Aspect',
            text: 'Finishing is a completed event: the perfective završiti, present završim.',
          },
          {
            label: 'The main clause',
            text: 'Future poslat ću, then the clitics in order: ću, the dative ti, the accusative ga.',
          },
        ],
        answer: 'Kad završim izvještaj, poslat ću ti ga.',
      },
      {
        title: 'Until',
        problem: 'Reci: Stay here until the rain stops.',
        en: 'Stay here until the rain stops.',
        steps: [
          {
            label: 'The connector',
            text: '"until" is dok ne — the ne is part of the construction, not a negation to translate.',
          },
          {
            label: 'Aspect',
            text: 'Stopping is a single event: the perfective prestati, present prestane.',
          },
          {
            label: 'Order',
            text: 'ne sits directly before the verb: dok kiša ne prestane.',
          },
        ],
        answer: 'Ostani ovdje dok kiša ne prestane.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ stignem u hotel, javit ću ti se. (As soon as)',
          options: ['Čim', 'Dok', 'Otkako', 'Nakon'],
          correct: 0,
          hint: 'The connector for "the moment that…". The one that means "after" needs a second word.',
          explanation: 'Čim stignem — as soon as I arrive.',
        },
        {
          q: 'Operi ruke prije nego što ___ jesti. (you start)',
          options: ['ćeš početi', 'počneš', 'si počeo', 'počni'],
          correct: 1,
          hint: 'A time clause about the future stays in the present, and starting is one event.',
          explanation: 'prije nego što počneš — present of the perfective početi.',
        },
        {
          q: 'Dok ___ na autobus, čitala sam knjigu. (was waiting)',
          options: ['sam pričekala', 'čekam', 'sam čekala', 'ću čekati'],
          correct: 2,
          hint: 'dok meaning "while" wants an ongoing background, in the same tense as the main clause.',
          explanation: 'Dok sam čekala — imperfective past: the background.',
        },
        {
          q: 'Nakon ___ smo ručali, otišli smo na plažu.',
          options: ['što', 'da', 'kad', 'ako'],
          correct: 0,
          hint: 'The connector for "after" is two words when a whole clause follows.',
          explanation: 'Nakon što smo ručali — after we had lunch.',
        },
      ],
    },
  },

  'real-conditions': {
    worked: [
      {
        title: 'Ako + the Present',
        problem: 'Reci: If you miss the bus, call me.',
        en: 'If you miss the bus, call me.',
        steps: [
          {
            label: 'A real condition',
            text: 'It may genuinely happen, so ako + the present — not the future.',
          },
          {
            label: 'The verb',
            text: 'Missing the bus is one event: the perfective propustiti, ti-form propustiš.',
          },
          {
            label: 'The main clause',
            text: 'An instruction: the imperative nazovi, with the clitic me after it.',
          },
        ],
        answer: 'Ako propustiš autobus, nazovi me.',
      },
      {
        title: 'The budem Form',
        problem: 'Reci: If we have money next year, we will travel to Japan.',
        en: 'If we have money next year, we will travel to Japan.',
        steps: [
          {
            label: 'A future condition',
            text: 'Next year — genuinely future, so Croatian can use the budem form.',
          },
          {
            label: 'Build it',
            text: 'mi → budemo, plus the participle agreeing with mi: imali. Imati novca takes the genitive (some money).',
          },
          {
            label: 'The main clause',
            text: 'An ordinary future: putovat ćemo u Japan.',
          },
        ],
        answer: 'Ako budemo imali novca sljedeće godine, putovat ćemo u Japan.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ako ___ vruće, idemo na kupanje. (if it is hot — later today)',
          options: ['bude', 'će biti', 'bi bilo', 'budem'],
          correct: 0,
          hint: 'A future condition after ako: the special form of biti, and weather is third person.',
          explanation: 'Ako bude vruće — the budem form, third person.',
        },
        {
          q: 'You are sure the train will arrive. "___ vlak stigne, izađi."',
          options: ['Ako', 'Kad', 'Osim ako', 'U slučaju'],
          correct: 1,
          hint: 'One connector leaves it open; the one you need treats it as certain.',
          explanation: 'Kad vlak stigne — kad = when (it will happen).',
        },
        {
          q: 'Doći ćemo, ___ ne bude problema. (unless)',
          options: ['osim što', 'osim ako', 'jer', 'zato'],
          correct: 1,
          hint: '"Except if" — the first word means "except".',
          explanation: 'osim ako ne bude problema — unless there are problems.',
        },
        {
          q: '"If you don\'t find the key, call the landlord."',
          options: [
            'Ako nađeš ne ključ, nazovi stanodavca.',
            'Ne ako nađeš ključ, nazovi stanodavca.',
            'Ako ćeš ne naći ključ, nazovi stanodavca.',
            'Ako ne nađeš ključ, nazovi stanodavca.',
          ],
          correct: 3,
          hint: 'Negate the verb itself: ne goes directly in front of it, and the tense stays present.',
          explanation: 'Ako ne nađeš ključ — ako + negated present.',
        },
      ],
    },
  },

  'cause-purpose': {
    worked: [
      {
        title: 'A Noun After It, or a Clause?',
        problem: 'Reci: The ferry is not running because of the bura.',
        en: 'The ferry is not running because of the bura.',
        steps: [
          {
            label: 'What follows?',
            text: 'Just a noun — the wind — with no verb of its own. So zbog, not jer.',
          },
          {
            label: 'The case',
            text: 'zbog takes the genitive: bura → bure.',
          },
          {
            label: 'With a verb instead',
            text: 'If you wanted a verb, it would be a clause with jer: …jer puše bura.',
          },
        ],
        answer: 'Trajekt ne vozi zbog bure.',
      },
      {
        title: 'Stating a Purpose',
        problem: 'Reci: I am saving money so that I can buy a flat.',
        en: 'I am saving money so that I can buy a flat.',
        steps: [
          {
            label: 'Cause or aim?',
            text: 'Buying a flat is what you are aiming at — a purpose, looking forward.',
          },
          {
            label: 'The connector',
            text: 'kako bi (or da bi) + the conditional form for ja: bih.',
          },
          {
            label: 'The participle',
            text: 'bih + mogao (a man speaking) + the infinitive kupiti.',
          },
        ],
        answer: 'Štedim novac kako bih mogao kupiti stan.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ostali smo doma ___ je bilo hladno.',
          options: ['jer', 'zbog', 'radi', 'da bi'],
          correct: 0,
          hint: 'A whole clause with its own verb follows.',
          explanation: 'jer je bilo hladno — jer takes a clause; zbog would need a noun.',
        },
        {
          q: 'Zakasnili smo ___ prometne nesreće. (because of an accident)',
          options: ['radi', 'zbog', 'jer', 'zato što'],
          correct: 1,
          hint: 'A noun in the genitive follows, and it is a CAUSE — something that already happened.',
          explanation: 'zbog prometne nesreće — zbog for a cause.',
        },
        {
          q: 'Pada kiša, ___ nosim kišobran. (that is why)',
          options: ['zato što', 'zato', 'jer', 'zbog'],
          correct: 1,
          hint: 'What follows is the CONSEQUENCE, not the cause.',
          explanation: 'zato = that is why. Zato što would introduce the cause.',
        },
        {
          q: 'Učim hrvatski ___ bih razumio baku. (so that)',
          options: ['jer', 'zbog', 'da', 'ako'],
          correct: 2,
          hint: 'A purpose built with the conditional bih needs a short linking word in front.',
          explanation: 'da bih razumio — da bi + conditional for a purpose.',
        },
      ],
    },
  },

  'reported-speech': {
    worked: [
      {
        title: 'Keep the Tense, Move the Person',
        problem: 'Ana je rekla: "Umorna sam i idem spavati." Prepričaj.',
        en: 'Ana said: "I am tired and I am going to bed." Report it.',
        steps: [
          {
            label: 'The tense',
            text: 'She used the present, so the report keeps the present — no backshifting.',
          },
          {
            label: 'The person',
            text: 'ja → ona: sam becomes je, idem becomes ide.',
          },
          {
            label: 'The linking word',
            text: 'Each reported clause is introduced by da.',
          },
        ],
        answer: 'Ana je rekla da je umorna i da ide spavati.',
      },
      {
        title: 'A Yes/No Question',
        problem: 'Konobar nas je pitao: "Želite li još nešto?" Prepričaj.',
        en: 'The waiter asked us: "Would you like anything else?" Report it.',
        steps: [
          {
            label: 'Keep li',
            text: 'A yes/no question keeps its li straight after the verb — no da.',
          },
          {
            label: 'The person',
            text: 'He said Vi to us, so from our side it becomes mi: želimo.',
          },
          {
            label: 'The tense',
            text: 'The present stays present.',
          },
        ],
        answer: 'Konobar nas je pitao želimo li još nešto.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ivan said today: "Sutra putujem u Split." Report it today.',
          options: [
            'Ivan je rekao da je sutra putovao u Split.',
            'Ivan je rekao da sutra putuje u Split.',
            'Ivan je rekao da sutra putujem u Split.',
            'Ivan je rekao sutra putuje u Split.',
          ],
          correct: 1,
          hint: 'Keep his tense, move the person to him, and keep the linking word.',
          explanation: 'da sutra putuje — present kept, first person moved to third.',
        },
        {
          q: 'Sestra: "Pričekaj me!" → Rekla mi je da je ___.',
          options: ['pričekam', 'pričekaj', 'pričekati', 'pričekala'],
          correct: 0,
          hint: 'A reported request becomes da + the present — and I am the one who has to wait.',
          explanation: 'da je pričekam — the imperative becomes the present, first person.',
        },
        {
          q: '"Koliko košta karta?" → Pitao sam ___ karta.',
          options: ['da koliko košta', 'koliko je koštala', 'koliko košta', 'koliko da košta'],
          correct: 2,
          hint: 'A question word stays where it is, followed by an ordinary clause, in the tense that was used.',
          explanation: 'Pitao sam koliko košta karta — no da, no li, no backshift.',
        },
        {
          q: 'Marija: "Moj brat radi u Njemačkoj." → Marija je rekla da ___ brat radi u Njemačkoj.',
          options: ['njezin', 'moj', 'njegov', 'tvoj'],
          correct: 0,
          hint: 'Her "my" becomes a possessive that points back to a woman.',
          explanation: 'njezin brat — moj shifts to her point of view.',
        },
      ],
    },
  },

  'relative-deep': {
    worked: [
      {
        title: 'Whose',
        problem: 'Spoji: To je susjed. Njegov pas stalno laje.',
        en: 'Join: That is the neighbour. His dog barks all the time.',
        steps: [
          {
            label: 'A possessor',
            text: 'The dog belongs to the neighbour, so the relative is čiji (whose).',
          },
          {
            label: 'Agreement',
            text: 'čiji agrees with the thing OWNED — pas, masculine nominative — so it stays čiji.',
          },
          {
            label: 'Join',
            text: 'čiji replaces njegov at the start of the clause.',
          },
        ],
        answer: 'To je susjed čiji pas stalno laje.',
      },
      {
        title: 'Which, for a Whole Event',
        problem: 'Spoji: Vlak je kasnio dva sata. To nas je razljutilo.',
        en: 'Join: The train was two hours late. That made us angry.',
        steps: [
          {
            label: 'What does "that" point to?',
            text: 'Not the train, but the whole fact that it was late.',
          },
          {
            label: 'Pick the word',
            text: 'A relative that refers to a whole clause is što — koji must attach to a noun.',
          },
          {
            label: 'Clitics',
            text: 'After što the clitics follow: nas je. A comma separates the clauses.',
          },
        ],
        answer: 'Vlak je kasnio dva sata, što nas je razljutilo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Poznaješ li ženu ___ kći pjeva u zboru? (whose daughter)',
          options: ['čiji', 'čija', 'čije', 'koja'],
          correct: 1,
          hint: 'The relative agrees with the thing owned: kći is feminine.',
          explanation: 'čija kći — čiji agrees with kći, not with žena.',
        },
        {
          q: 'Ovo je grad ___ sam studirao. (where)',
          options: ['gdje', 'kamo', 'odakle', 'kojem'],
          correct: 0,
          hint: 'You studied IN the town — a place you were, not a place you went to or came from.',
          explanation: 'gdje sam studirao. Kojem would need its preposition: u kojem.',
        },
        {
          q: '___ kažeš nije istina. (What you are saying)',
          options: ['Onaj koji', 'Koje', 'Ono koji', 'Ono što'],
          correct: 3,
          hint: '"The thing that" at the head of a sentence needs a pronoun plus the relative for ideas.',
          explanation: 'Ono što kažeš — ono što = what, the thing that.',
        },
        {
          q: 'Selo ___ dolaze moji djed i baka nalazi se na Hvaru. (where … from)',
          options: ['gdje', 'odakle', 'kamo', 'koje'],
          correct: 1,
          hint: 'They come FROM the village — origin.',
          explanation: 'odakle — where from.',
        },
      ],
    },
  },

  'telling-a-story': {
    worked: [
      {
        title: 'Scene, Then Event',
        problem:
          'Ispričaj: It was dark and the wind was blowing. Suddenly a light came on in the window.',
        en: 'It was dark and the wind was blowing. Suddenly a light came on in the window.',
        steps: [
          {
            label: 'The background',
            text: 'Darkness and wind are the scene — imperfective: bio je mrak, puhao je vjetar.',
          },
          {
            label: 'The turn',
            text: 'odjednom (suddenly) signals the event that moves the story.',
          },
          {
            label: 'The event',
            text: 'The light coming on is one completed event — perfective upaliti se: upalilo se, with se straight after odjednom.',
          },
        ],
        answer: 'Bio je mrak i puhao je vjetar. Odjednom se u prozoru upalilo svjetlo.',
      },
      {
        title: 'A Sequence to the End',
        problem:
          'Ispričaj: First we packed, then we drove to the coast, and in the end we missed the ferry.',
        en: 'First we packed, then we drove to the coast, and in the end we missed the ferry.',
        steps: [
          {
            label: 'The connectors',
            text: 'prvo… onda… na kraju mark the order and the close.',
          },
          {
            label: 'Aspect',
            text: 'Each step is a finished plot event: spakirali, odvezli se, propustili — all perfective.',
          },
          {
            label: 'Clitics',
            text: 'smo sits second in each clause; with a reflexive verb it comes first in the cluster: smo se.',
          },
        ],
        answer:
          'Prvo smo spakirali stvari, onda smo se odvezli na obalu, a na kraju smo propustili trajekt.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dok sam ___ ulicom, netko je viknuo moje ime. (was walking)',
          options: ['hodao', 'prohodao', 'hodam', 'hoda'],
          correct: 0,
          hint: 'The scene the event interrupts — ongoing, and in the past after sam.',
          explanation: 'hodao — the imperfective background.',
        },
        {
          q: 'Odjednom je ___ struja. (the power went off)',
          options: ['nestajala', 'nestala', 'nestaje', 'nestati'],
          correct: 1,
          hint: 'odjednom introduces a single event that turns the story.',
          explanation: 'nestala — perfective: one sudden event.',
        },
        {
          q: 'Which word introduces a contrast ("however")?',
          options: ['odjednom', 'prvo', 'međutim', 'na kraju'],
          correct: 2,
          hint: 'Not a turn in time, not an order — a "but".',
          explanation: 'međutim = however.',
        },
        {
          q: 'Kad smo stigli na stanicu, autobus je već ___. (had left)',
          options: ['otišao', 'ići', 'ide', 'otići'],
          correct: 0,
          hint: 'A completed departure, and je needs a past participle.',
          explanation: 'autobus je već otišao — perfective past.',
        },
      ],
    },
  },

  'opinions-agreeing': {
    worked: [
      {
        title: 'An Opinion With a Reason',
        problem: 'Reci: I think the city needs more parks, because there is too much traffic.',
        en: 'I think the city needs more parks, because there is too much traffic.',
        steps: [
          {
            label: 'The opener',
            text: 'Mislim da… — the da is never dropped.',
          },
          {
            label: 'Needs',
            text: 'Impersonal treba with the one who needs in the dative: gradu treba. Više takes the genitive plural: parkova.',
          },
          {
            label: 'The reason',
            text: 'jer + a clause: ima previše prometa (previše + genitive).',
          },
        ],
        answer: 'Mislim da gradu treba više parkova jer ima previše prometa.',
      },
      {
        title: 'Disagreeing Gently',
        problem: 'Prijatelj kaže: "Ljeto je najljepše godišnje doba." Ne slažeš se — pristojno.',
        en: 'A friend says summer is the loveliest season. Disagree politely.',
        steps: [
          {
            label: 'Concede first',
            text: 'A bare ne slažem se lands hard. Open with Razumijem, ali…',
          },
          {
            label: 'Your view',
            text: 'Put yourself in the dative, stressed: meni je… — "to me, …".',
          },
          {
            label: 'Agreement',
            text: 'The comparative agrees with jesen, a feminine noun: ljepša.',
          },
        ],
        answer: 'Razumijem, ali meni je jesen ljepša.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: "Ne ___ se s tobom. (I don't agree)",
          options: ['slažem', 'slažeš', 'složim', 'slaže'],
          correct: 0,
          hint: 'First person, present, and the ongoing verb of agreeing.',
          explanation: 'Ne slažem se s tobom.',
        },
        {
          q: '"I am not sure about that." (a man speaking)',
          options: [
            'Nisam siguran o to.',
            'Nisam sigurno u to.',
            'Nisam siguran u to.',
            'Nisam siguran na to.',
          ],
          correct: 2,
          hint: 'Being sure takes the preposition "in", and the adjective agrees with the speaker.',
          explanation: 'Nisam siguran u to.',
        },
        {
          q: 'Potpuno ___ slažem. (I completely agree)',
          options: ['si', 'se', 'me', 'sam'],
          correct: 1,
          hint: 'The verb of agreeing is reflexive.',
          explanation: 'Potpuno se slažem — slagati se.',
        },
        {
          q: '___ bih da je to preskupo. (I would say — a man speaking)',
          options: ['Reći', 'Kažem', 'Rekao sam', 'Rekao'],
          correct: 3,
          hint: 'The cautious conditional: bih + a past participle agreeing with the speaker.',
          explanation: 'Rekao bih da… — the most cautious opener.',
        },
      ],
    },
  },

  'complaints-problems': {
    worked: [
      {
        title: 'Report the Fault, Not the Person',
        problem: 'Reci na recepciji: The shower in my room is not working.',
        en: 'The shower in my room is not working.',
        steps: [
          {
            label: 'Open politely',
            text: 'Oprostite, … — and the V-form throughout.',
          },
          {
            label: 'Where',
            text: 'u + locative for the room: u mojoj sobi.',
          },
          {
            label: 'The fault',
            text: 'Name the thing that is broken and blame no one: ne radi tuš.',
          },
        ],
        answer: 'Oprostite, u mojoj sobi ne radi tuš.',
      },
      {
        title: 'Firm but Polite',
        problem:
          'Reci konobaru (a woman speaking): I would like to check the bill — I think there has been a mistake.',
        en: 'I would like to check the bill — I think there has been a mistake.',
        steps: [
          {
            label: 'Soften it',
            text: 'The conditional turns a demand into a request: htjela bih (a woman).',
          },
          {
            label: 'Clitic',
            text: 'bih sits second, straight after htjela.',
          },
          {
            label: 'The mistake',
            text: 'došlo je do greške — do takes the genitive.',
          },
        ],
        answer: 'Htjela bih provjeriti račun, mislim da je došlo do greške.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ se perilica. (The washing machine has broken.)',
          options: ['Pokvarila', 'Pokvario', 'Pokvarilo', 'Pokvarile'],
          correct: 0,
          hint: 'The participle agrees with the machine, and perilica is feminine singular.',
          explanation: 'Pokvarila se perilica — reporting the fault, no culprit.',
        },
        {
          q: 'Hvala vam na ___. (for your help — pomoć)',
          options: ['pomoć', 'pomoćom', 'pomoći', 'pomoću'],
          correct: 2,
          hint: 'hvala na takes the locative, and pomoć is a feminine noun ending in a consonant.',
          explanation: 'na pomoći — locative of pomoć.',
        },
        {
          q: '___ li mi mogli dati drugu sobu? (Could you — polite)',
          options: ['Bih', 'Biste', 'Bismo', 'Ste'],
          correct: 1,
          hint: 'The conditional auxiliary for the polite Vi.',
          explanation: 'Biste li mi mogli… — the softest way to ask.',
        },
        {
          q: 'U kupaonici nema ___. (toilet paper — toaletni papir)',
          options: ['toaletnog papira', 'toaletni papir', 'toaletnom papiru', 'toaletnim papirom'],
          correct: 0,
          hint: 'nema always takes the genitive — adjective included.',
          explanation: 'nema toaletnog papira.',
        },
      ],
    },
  },

  bureaucracy: {
    worked: [
      {
        title: 'At the Counter',
        problem:
          'Reci na šalteru (a woman speaking): I would like to collect my passport. Where is this form handed in?',
        en: 'I would like to collect my passport. Where is this form handed in?',
        steps: [
          {
            label: 'The request',
            text: 'The polite conditional: htjela bih + the infinitive podići (to collect).',
          },
          {
            label: 'The object',
            text: 'putovnica → putovnicu, accusative.',
          },
          {
            label: 'The impersonal question',
            text: 'Official wording names no one: Gdje se predaje…? — se straight after gdje.',
          },
        ],
        answer: 'Htjela bih podići putovnicu. Gdje se predaje ovaj obrazac?',
      },
      {
        title: 'Writing Like a Notice',
        problem: 'Napiši kao službenu uputu: The form is filled in in block capitals.',
        en: 'The form is to be filled in in block capitals.',
        steps: [
          {
            label: 'No person',
            text: 'An instruction for everyone: the impersonal se + third person.',
          },
          {
            label: 'Aspect',
            text: 'A general rule, not one act — the imperfective ispunjavati: ispunjava.',
          },
          {
            label: 'The means',
            text: 'Block capitals are the means — the bare instrumental: tiskanim slovima.',
          },
        ],
        answer: 'Obrazac se ispunjava tiskanim slovima.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Molimo ___ obrazac čitko. (fill in — polite)',
          options: ['ispunite', 'napunite', 'ispunjava', 'napunjava'],
          correct: 0,
          hint: 'A form is completed with iz-, not filled like a container — and molimo wants the Vi imperative.',
          explanation: 'Molimo ispunite obrazac.',
        },
        {
          q: 'Zahtjev ___ predaje na šalteru broj četiri.',
          options: ['je', 'se', 'si', 'ga'],
          correct: 1,
          hint: 'Official wording: nobody named, so the impersonal particle.',
          explanation: 'Zahtjev se predaje — "is handed in".',
        },
        {
          q: 'Imate li ___? (your ID card)',
          options: [
            'osobna iskaznica',
            'osobnom iskaznicom',
            'osobnu iskaznicu',
            'osobnoj iskaznici',
          ],
          correct: 2,
          hint: 'The object of imati, feminine singular.',
          explanation: 'Imate li osobnu iskaznicu? — accusative.',
        },
        {
          q: 'Koliko ___ to traje? (How long)',
          options: ['dugo', 'dug', 'duga', 'dugi'],
          correct: 0,
          hint: 'You need the adverb, not an adjective agreeing with a noun.',
          explanation: 'Koliko dugo to traje?',
        },
      ],
    },
  },

  'renting-flat': {
    worked: [
      {
        title: 'Reading an Advert',
        problem:
          'Oglas: "Iznajmljuje se namješten jednosoban stan, 40 m², 450 € + režije." Što se nudi?',
        en: 'Advert: furnished one-room flat, 40 m², €450 + utilities. What is on offer?',
        steps: [
          {
            label: 'Count the rooms',
            text: 'jednosoban = one room, NOT counting the kitchen and bathroom.',
          },
          {
            label: 'Furnished?',
            text: 'namješten = furnished.',
          },
          {
            label: 'The price',
            text: '+ režije: the utilities are paid on top of the 450.',
          },
        ],
        answer: 'Namješten stan s jednom sobom; režije se plaćaju posebno.',
      },
      {
        title: 'Asking the Landlord',
        problem:
          'Pitaj: Does the building have a lift, and can I move in on the first of the month?',
        en: 'Does the building have a lift, and can I move in on the first of the month?',
        steps: [
          {
            label: 'Yes/no questions',
            text: 'Verb first, then li: Ima li…? Mogu li…?',
          },
          {
            label: 'Reflexive',
            text: 'To move in is useliti se; after li comes se: mogu li se useliti.',
          },
          {
            label: 'The date',
            text: 'A date takes the genitive: prvog u mjesecu.',
          },
        ],
        answer: 'Ima li zgrada lift i mogu li se useliti prvog u mjesecu?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Stan je bez ___. (no balcony — balkon)',
          options: ['balkon', 'balkona', 'balkonu', 'balkonom'],
          correct: 1,
          hint: 'bez takes the genitive.',
          explanation: 'bez balkona — masculine genitive -a.',
        },
        {
          q: 'Stan ima ___. (70 square metres — kvadrat)',
          options: [
            'sedamdeset kvadrati',
            'sedamdeset kvadrat',
            'sedamdeset kvadratima',
            'sedamdeset kvadrata',
          ],
          correct: 3,
          hint: 'A number ending in 0 behaves like 5 and above.',
          explanation: 'sedamdeset kvadrata — genitive plural.',
        },
        {
          q: 'Što je garsonijera?',
          options: ['a studio flat', 'a two-room flat', 'a garage', 'an unfurnished flat'],
          correct: 0,
          hint: 'One single living space with a kitchen corner.',
          explanation: 'garsonijera = a studio flat.',
        },
        {
          q: 'Je li dopušteno držati ___? (pets — kućni ljubimci)',
          options: ['kućni ljubimci', 'kućnih ljubimaca', 'kućne ljubimce', 'kućnim ljubimcima'],
          correct: 2,
          hint: 'The object of držati, masculine plural.',
          explanation: 'držati kućne ljubimce — accusative plural.',
        },
      ],
    },
  },

  'job-interview': {
    worked: [
      {
        title: 'Experience, Agreeing With You',
        problem: 'Napiši (a woman): I worked as a nurse in Osijek for three years.',
        en: 'I worked as a nurse in Osijek for three years.',
        steps: [
          {
            label: 'The participle',
            text: 'A woman writing: radila, never radio.',
          },
          {
            label: 'Duration',
            text: 'How long is the bare accusative: tri godine, then sam in second position.',
          },
          {
            label: 'Role and place',
            text: 'kao + the nominative for the role: medicinska sestra. Place: u Osijeku (locative).',
          },
        ],
        answer: 'Tri godine sam radila kao medicinska sestra u Osijeku.',
      },
      {
        title: 'An Answer With a Reason',
        problem:
          'Odgovori na "Zašto se javljate na ovo mjesto?" — because your company works with foreign clients.',
        en: 'Why are you applying? — Because your company works with foreign clients.',
        steps: [
          {
            label: 'A reason clause',
            text: 'A whole clause with a verb follows, so jer, not zbog.',
          },
          {
            label: 'Register',
            text: 'An interview is formal: vaša tvrtka.',
          },
          {
            label: 's or sa?',
            text: 'The next word starts with s, so sa + the instrumental plural: sa stranim klijentima.',
          },
        ],
        answer: 'Javljam se jer vaša tvrtka radi sa stranim klijentima.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Tečno ___ engleski i njemački. (I speak)',
          options: ['govorim', 'govoriti', 'govoreći', 'govori'],
          correct: 0,
          hint: 'The present, first person, about yourself.',
          explanation: 'Tečno govorim — I speak fluently.',
        },
        {
          q: 'Bio sam ___ za prodaju. (responsible — a man)',
          options: ['zadužena', 'zadužen', 'zaduženi', 'zaduženo'],
          correct: 1,
          hint: 'The form agrees with the speaker: one man.',
          explanation: 'Bio sam zadužen — masculine singular.',
        },
        {
          q: 'Diplomirala je na ___ fakultetu. (the Faculty of Law — Pravni)',
          options: ['Pravni', 'Pravnog', 'Pravnom', 'Pravnim'],
          correct: 2,
          hint: 'na + where she studied — a location — and fakultet is masculine.',
          explanation: 'na Pravnom fakultetu — locative.',
        },
        {
          q: 'Gdje se ___ za pet godina? (see yourself — interview)',
          options: ['vidite', 'vidiš', 'vidimo', 'vide'],
          correct: 0,
          hint: 'An interviewer uses the formal register.',
          explanation: 'Gdje se vidite — the polite Vi-form.',
        },
      ],
    },
  },

  'media-news': {
    worked: [
      {
        title: 'Filling In a Headline',
        problem: 'Naslov: "Otvoren novi most u Omišu." Pretvori u rečenicu.',
        en: 'Headline: "New bridge opened in Omiš." Turn it into a sentence.',
        steps: [
          {
            label: 'What is missing?',
            text: 'The verb biti — headlines drop it.',
          },
          {
            label: 'Supply it',
            text: 'otvoren is a passive participle, so it needs je: the bridge has been opened.',
          },
          {
            label: 'Order',
            text: 'je is a clitic and goes second, straight after otvoren.',
          },
        ],
        answer: 'Otvoren je novi most u Omišu.',
      },
      {
        title: 'Reporting a Statement',
        problem: 'Gradonačelnik je rekao: "Tramvaji će voziti cijelu noć." Prepričaj.',
        en: 'The mayor said: "The trams will run all night." Report it.',
        steps: [
          {
            label: 'Keep his tense',
            text: 'He used the future, so the report keeps the future — no backshifting.',
          },
          {
            label: 'Link it',
            text: 'da introduces the reported clause.',
          },
          {
            label: 'Clitic',
            text: 'će sits second in the clause, straight after da.',
          },
        ],
        answer: 'Gradonačelnik je rekao da će tramvaji voziti cijelu noć.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ je ministar podnio ostavku. (Apparently)',
          options: ['Naravno', 'Navodno', 'Nažalost', 'Napokon'],
          correct: 1,
          hint: 'The word that marks a claim as second-hand and unverified.',
          explanation: 'Navodno = apparently, reportedly.',
        },
        {
          q: 'Pisalo je u ___ da će poskupjeti gorivo. (in the paper — novine)',
          options: ['novinama', 'novinima', 'novine', 'novina'],
          correct: 0,
          hint: 'novine is a plural-only feminine noun, here in the locative.',
          explanation: 'u novinama — locative plural.',
        },
        {
          q: 'Prema ___, u nesreći nema ozlijeđenih. (According to the police — policija)',
          options: ['policija', 'policije', 'policiji', 'policiju'],
          correct: 2,
          hint: 'prema (according to, towards) takes the dative.',
          explanation: 'prema policiji — dative.',
        },
        {
          q: 'Novinar je pitao ministra ___ li nova pravila na snazi.',
          options: ['jesu', 'su', 'je', 'bi'],
          correct: 0,
          hint: 'A reported yes/no question with biti: the long form, plural to agree with pravila.',
          explanation: 'jesu li nova pravila na snazi.',
        },
      ],
    },
  },

  'technology-internet': {
    worked: [
      {
        title: 'Log In, Then Save',
        problem: 'Reci (ti): First log in, then save the document.',
        en: 'First log in, then save the document.',
        steps: [
          {
            label: 'Reflexive',
            text: 'To log in is prijaviti se; the imperative is prijavi se.',
          },
          {
            label: 'Clitic',
            text: 'se goes second: after prvo, before the verb — Prvo se prijavi.',
          },
          {
            label: 'Save',
            text: 'spremiti → spremi, with the object in the accusative: dokument.',
          },
        ],
        answer: 'Prvo se prijavi, a onda spremi dokument.',
      },
      {
        title: 'The Written Word',
        problem: 'Napiši u službenom e-mailu: The computer does not recognise the keyboard.',
        en: 'The computer does not recognise the keyboard.',
        steps: [
          {
            label: 'Which word?',
            text: 'In writing, the native word: računalo, not kompjuter.',
          },
          {
            label: 'The verb',
            text: 'prepoznavati, present negated: ne prepoznaje.',
          },
          {
            label: 'The object',
            text: 'tipkovnica → tipkovnicu, accusative.',
          },
        ],
        answer: 'Računalo ne prepoznaje tipkovnicu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Obrisao sam ___ greškom. (the photo — fotografija)',
          options: ['fotografiju', 'fotografija', 'fotografijom', 'fotografiji'],
          correct: 0,
          hint: 'The direct object of obrisati.',
          explanation: 'Obrisao sam fotografiju — accusative.',
        },
        {
          q: 'Moram se ___. (log out)',
          options: ['prijaviti', 'odjaviti', 'preuzeti', 'spremiti'],
          correct: 1,
          hint: 'The prefix that means "away from".',
          explanation: 'odjaviti se — od- (away) = log out.',
        },
        {
          q: '___ aplikaciju s interneta. (Download — ti)',
          options: ['Pošalji', 'Obriši', 'Preuzmi', 'Podijeli'],
          correct: 2,
          hint: 'Literally "take over" — bringing something from the internet to you.',
          explanation: 'Preuzmi — preuzeti = to download.',
        },
        {
          q: 'Zaboravila sam ___. (my password — lozinka)',
          options: ['lozinku', 'lozinka', 'lozinki', 'lozinkom'],
          correct: 0,
          hint: 'The direct object of zaboraviti, feminine singular.',
          explanation: 'Zaboravila sam lozinku — accusative.',
        },
      ],
    },
  },

  'environment-nature': {
    worked: [
      {
        title: 'Which Wind?',
        problem: 'Reci: A cold wind from the north-east is blowing, so the bridge is closed.',
        en: 'A cold north-easterly is blowing, so the bridge is closed.',
        steps: [
          {
            label: 'Name the wind',
            text: 'Cold, dry, from the north-east: bura.',
          },
          {
            label: 'Word order',
            text: 'Winds are usually announced verb first: Puše bura.',
          },
          {
            label: 'The consequence',
            text: 'pa (so) + the result; zatvoren agrees with most, masculine.',
          },
        ],
        answer: 'Puše bura, pa je most zatvoren.',
      },
      {
        title: 'Protecting the Environment',
        problem: 'Reci: We must protect the sea from pollution.',
        en: 'We must protect the sea from pollution.',
        steps: [
          {
            label: 'Modal + infinitive',
            text: 'Moramo + zaštititi (one outcome to achieve — perfective).',
          },
          {
            label: 'The object',
            text: 'zaštititi takes the accusative; more is neuter, so it looks the same: more.',
          },
          {
            label: 'From what',
            text: 'od + the genitive: onečišćenje → onečišćenja.',
          },
        ],
        answer: 'Moramo zaštititi more od onečišćenja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Krka i Plitvice su ___. (national parks)',
          options: [
            'nacionalni parkovi',
            'nacionalnih parkova',
            'nacionalne parkove',
            'nacionalnim parkovima',
          ],
          correct: 0,
          hint: 'After su, the predicate stays in the nominative plural.',
          explanation: 'nacionalni parkovi — nominative plural.',
        },
        {
          q: 'Idemo na izlet na ___. (to the island — otok)',
          options: ['otoku', 'otok', 'otoka', 'otokom'],
          correct: 1,
          hint: 'A destination after a verb of motion.',
          explanation: 'na otok — accusative for where you are going.',
        },
        {
          q: 'Ljeti na Jadranu često puše ugodan ___. (a pleasant summer sea breeze)',
          options: ['bura', 'jugo', 'maestral', 'oluja'],
          correct: 2,
          hint: 'The pleasant summer wind — and ugodan is a masculine form.',
          explanation: 'ugodan maestral — the summer breeze, masculine.',
        },
        {
          q: 'U našem gradu se ___ otpad. (waste is recycled)',
          options: ['reciklira', 'recikliraju', 'reciklirati', 'reciklirao'],
          correct: 0,
          hint: 'Impersonal se with a singular noun: third person singular.',
          explanation: 'se reciklira otpad — the verb agrees with otpad.',
        },
      ],
    },
  },

  'food-cooking': {
    worked: [
      {
        title: 'An Ingredient List',
        problem: 'Napiši: half a kilo of potatoes, two onions and a little salt',
        en: 'half a kilo of potatoes, two onions and a little salt',
        steps: [
          {
            label: 'Measures take the genitive',
            text: 'pola + kilograma, and what is measured follows in the genitive too: krumpira.',
          },
          {
            label: 'Counting onions',
            text: 'Croatians count onions by the head: dvije glavice (2 + genitive singular), then luka.',
          },
          {
            label: 'A little',
            text: 'malo + genitive: sol → soli.',
          },
        ],
        answer: 'pola kilograma krumpira, dvije glavice luka i malo soli',
      },
      {
        title: 'A Recipe Instruction',
        problem: 'Napiši kao u receptu: Fry the onion for five minutes, then add the meat.',
        en: 'Fry the onion for five minutes, then add the meat.',
        steps: [
          {
            label: 'The imperative',
            text: 'Recipes use the polite -ite form: pržiti → pržite, dodati → dodajte.',
          },
          {
            label: 'How long',
            text: 'Duration is the bare accusative — pet minuta, with no za.',
          },
          {
            label: 'The sequence',
            text: 'a zatim links the next step; meso is the accusative object.',
          },
        ],
        answer: 'Pržite luk pet minuta, a zatim dodajte meso.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Trebamo litru ___. (olive oil — maslinovo ulje)',
          options: ['maslinovog ulja', 'maslinovo ulje', 'maslinovom ulju', 'maslinovim uljem'],
          correct: 0,
          hint: 'What follows a measure is in the genitive — adjective included.',
          explanation: 'litru maslinovog ulja.',
        },
        {
          q: '___ pećnicu na 180 stupnjeva. (Preheat — as a recipe says it)',
          options: ['Zagrijem', 'Zagrijte', 'Zagrijao', 'Zagrijana'],
          correct: 1,
          hint: 'A recipe addresses the reader with the polite imperative.',
          explanation: 'Zagrijte pećnicu — the -ite imperative.',
        },
        {
          q: 'Baka ___ kruh u krušnoj peći. (bakes)',
          options: ['kuha', 'prži', 'peče', 'reže'],
          correct: 2,
          hint: 'Bread goes in an oven, not in a pot or a frying pan.',
          explanation: 'peče — peći = to bake.',
        },
        {
          q: 'Stavite žlicu ___ u tijesto. (butter — maslac)',
          options: ['maslac', 'maslacu', 'maslacem', 'maslaca'],
          correct: 3,
          hint: 'A spoonful OF something — the measured thing is genitive.',
          explanation: 'žlicu maslaca — genitive.',
        },
      ],
    },
  },
};
