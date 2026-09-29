// functions/api/content/_data/lessonPracticeC1.js
//
// C1 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time — at C1 often a CHOICE reasoned out: which register, which
// construction, which of two grammatical forms) and one guided-practice slide
// (four items, each with a HINT shown after a first wrong try and an explanation
// once resolved).
//
// The academic programme (2026-09-29) added, per lesson: `checkB` — a parallel
// six-item form of the mastery check on the same objectives, served on the retake
// after a fail; eight more practice items (twelve in all), four of them TYPED
// (`type: 'type'`, a ____ blank, an `answer` and any equally correct `accept`
// forms); and `vocab` — the lesson's own target words, [hr, en, example].
//
// Authoring rules, the same ones the checks and drills follow:
//   - distractors are wrong by case, government, agreement, aspect, word order or
//     register — never by being Serbian, and never real Croatian that a native
//     would say in the stated context;
//   - no cue in the form of its answer (a parenthetical names the MEANING or the
//     dictionary form, not the answer);
//   - a hint points at the rule and never contains the answer.
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_C1 = {
  'clitics-advanced': {
    worked: [
      {
        title: 'A Question With Four Clitics',
        problem:
          'Složi pitanje: "Would you show it (m.) to me?" (Vi — pokazati; biste, li, mi, ga)',
        en: 'Build the question: Would you show it to me? (formal)',
        steps: [
          {
            label: 'Sort the words',
            text: 'Four clitics compete for second position: the conditional biste, the question particle li, the dative mi and the accusative ga. The participle pokazali is a stressed word and stays outside the cluster.',
          },
          {
            label: 'Open the question',
            text: 'In a yes/no question the conditional form can open the sentence, and li attaches to it at once: Biste li…',
          },
          { label: 'Order the pronouns', text: 'Dative before accusative, always: mi, then ga.' },
          {
            label: 'Close with the participle',
            text: 'The participle agrees with the Vi-form, so it is plural — pokazali — even when you address one person politely.',
          },
        ],
        answer: 'Biste li mi ga pokazali?',
      },
      {
        title: 'A Whole Phrase as the First Unit',
        problem:
          'Složi: "For her birthday I bought it (m.) for her." (za rođendan; sam, joj, ga; kupio)',
        en: 'Build: For her birthday I bought it for her.',
        steps: [
          {
            label: 'Find the first unit',
            text: 'Za rođendan is a prepositional phrase and counts as one stressed unit. The cluster goes straight after it.',
          },
          {
            label: 'The auxiliary opens',
            text: 'Unlike third-person je, the auxiliary sam opens the cluster.',
          },
          {
            label: 'Dative, then accusative',
            text: 'joj (for her) before ga (it), and then the participle kupio.',
          },
          {
            label: 'Compare the third person',
            text: 'With "he" as the subject the auxiliary moves to the END of the cluster: Za rođendan joj ga je kupio.',
          },
        ],
        answer: 'Za rođendan sam joj ga kupio.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Brat ___ pokazao." (He showed it (m.) to us — nam, ga, je)',
          options: ['je nam ga', 'nam ga je', 'nam je ga', 'ga nam je'],
          correct: 1,
          hint: 'The third-person auxiliary does not open the cluster, and the pronouns go dative first.',
          explanation:
            'Dative nam, accusative ga, and third-person je last: Brat nam ga je pokazao.',
        },
        {
          q: 'Complete: "Već ___ to rekao." (I have already told him that)',
          options: ['mu sam', 'sam mu', 'mu', 'sam ga'],
          correct: 1,
          hint: 'The first-person auxiliary opens the cluster, and reći takes the person told in the dative.',
          explanation:
            'Već sam mu to rekao — sam first, then the dative mu. Without the auxiliary there is no past tense, and ga is the wrong case for the person told.',
        },
        {
          q: 'Complete: "Pitao me kad ___ vratiti." (when I will return it (m.) to him — ću, mu, ga)',
          options: ['ću mu ga', 'mu ga ću', 'ću ga mu', 'mu ću ga'],
          correct: 0,
          hint: 'The order holds inside a subordinate clause too: auxiliary, dative, accusative, right after the conjunction.',
          explanation:
            'kad is the first unit of its clause and the cluster follows it: kad ću mu ga vratiti.',
        },
        {
          q: 'Complete: "Sviđa ___?" (Do you like it? — li, ti, se)',
          options: ['ti se li', 'se ti li', 'li ti se', 'li se ti'],
          correct: 2,
          hint: 'The question particle comes first after the verb; the reflexive is the last pronoun slot.',
          explanation: 'li → dative ti → se: Sviđa li ti se?',
        },
        {
          q: 'Complete: "Kupila ___ je." (She bought it (m.) for us — nam, ga)',
          options: ['ga nam', 'nam ga', 'nam je ga', 'ga je nam'],
          correct: 1,
          hint: 'Dative pronoun before accusative; the third-person je is already at the end.',
          explanation:
            'Kupila nam ga je — for us (dative) comes before it (accusative), and je stays last.',
        },
        {
          q: 'Complete: "Tvoj brat ___ jučer vratio knjigu." (returned the book to me — mi, je)',
          options: ['je mi', 'mi je', 'mi se je', 'je se mi'],
          correct: 1,
          hint: 'Pronoun first, third-person je at the end of the cluster.',
          explanation:
            'Tvoj brat mi je jučer vratio knjigu — the whole phrase Tvoj brat is the first unit.',
        },
        {
          q: 'Which is correct?',
          options: ['Nisam mu ga dao.', 'Nisam ga mu dao.', 'Ga nisam mu dao.', 'Nisam dao mu ga.'],
          correct: 0,
          hint: 'The stressed negative form opens the clause; then dative, then accusative.',
          explanation: 'nisam is a stressed word, so the cluster mu ga follows it directly.',
        },
        {
          q: 'Complete: "Rekao je da ___ sutra javiti." (that he will get in touch with us — će, nam, se)',
          options: ['će se nam', 'nam će se', 'će nam se', 'se će nam'],
          correct: 2,
          hint: 'Auxiliary first, dative next, se last — straight after da.',
          explanation:
            'da će nam se sutra javiti: the future auxiliary, the dative, then the reflexive.',
        },
        {
          type: 'type',
          q: 'Poslao sam ____ jučer. (I sent it (m.) to her — two clitics, in order)',
          answer: 'joj ga',
          hint: 'Dative before accusative; the auxiliary sam is already in slot one.',
          explanation: 'Poslao sam joj ga jučer — joj (to her) then ga (it).',
        },
        {
          type: 'type',
          q: 'Vratili ____ ga. (they returned it (m.) to us — the auxiliary and the dative)',
          answer: 'su nam',
          hint: 'The plural auxiliary opens the cluster; the dative follows it.',
          explanation: 'Vratili su nam ga — su, then nam, then ga.',
        },
        {
          type: 'type',
          q: 'Je ____ rekao istinu? (did he tell you (sg.) the truth — the question particle and the dative)',
          answer: 'li ti',
          hint: 'The question particle comes straight after je; then the dative pronoun.',
          explanation: 'Je li ti rekao istinu? li always takes the first slot after the verb.',
        },
        {
          type: 'type',
          q: 'Obećala ____ da će doći. (she promised me — the dative clitic and the third-person auxiliary)',
          answer: 'mi je',
          hint: 'The pronoun goes first; the third-person auxiliary always closes the cluster.',
          explanation:
            'Obećala mi je — unlike sam, the third-person je never goes ahead of the pronoun.',
        },
      ],
    },
    checkB: [
      {
        q: "Complete: 'Marija ___ poslala.' (she sent them to him — mu, ih, je)",
        options: ['je mu ih', 'mu ih je', 'ih mu je', 'mu je ih'],
        correct: 1,
        explanation:
          'Dative mu, then accusative ih, and the third-person je closes the cluster: Marija mu ih je poslala.',
      },
      {
        q: "Complete: 'Mi ___ pokazali.' (we showed it (m.) to you (pl.) — smo, vam, ga)",
        options: ['vam ga smo', 'smo ga vam', 'smo vam ga', 'ga smo vam'],
        correct: 2,
        explanation:
          'The first-person auxiliary smo opens the cluster, then dative vam, then accusative ga.',
      },
      {
        q: 'Which question is correct?',
        options: [
          'Jesi li mu ga dao?',
          'Li si mu ga dao?',
          'Jesi mu li ga dao?',
          'Jesi li ga mu dao?',
        ],
        correct: 0,
        explanation:
          'li attaches straight to the opening verb form, then dative mu before accusative ga.',
      },
      {
        q: "Spot the error: 'Pitala je hoćeš li se mu javiti.'",
        options: [
          'hoćeš should be želiš',
          'se mu should be mu se — the dative comes before se',
          'javiti should be javljati',
          'nothing is wrong',
        ],
        correct: 1,
        explanation:
          'Inside the clause the order still holds: dative before the reflexive, hoćeš li mu se javiti.',
      },
      {
        q: "In 'Moja stara prijateljica mi je to rekla', where does the cluster sit, and why?",
        options: [
          'after rekla — clitics close the clause',
          'after the whole phrase Moja stara prijateljica — a noun phrase counts as one unit',
          'before Moja — clitics open a statement',
          'anywhere — the order is free',
        ],
        correct: 1,
        explanation: 'The first stressed unit can be a whole noun phrase; the cluster follows it.',
      },
      {
        q: "Complete: 'Bojiš ___?' (are you afraid of it (m.) — li, ga, se)",
        options: ['li se ga', 'ga se li', 'se li ga', 'li ga se'],
        correct: 3,
        explanation:
          'li first, then the pronoun ga, and se in its slot after the pronouns: Bojiš li ga se?',
      },
    ],
    vocab: [
      ['enklitika', 'clitic', 'Enklitika ne može stajati na početku rečenice.'],
      ['isplatiti se', 'to be worth it', 'Ne znam bi li mi se isplatilo čekati.'],
      ['javiti se', 'to get in touch', 'Javit ću ti se čim stignem.'],
      ['zabrinuti se', 'to become worried', 'Zabrinuo sam se kad se nije javila.'],
      ['pokazati', 'to show', 'Pokazao mi ga je tek sutradan.'],
      ['vratiti', 'to give back, return', 'Vratila ti ga je prošli tjedan.'],
      ['na vrijeme', 'in time, on time', 'Da mi je barem rekao na vrijeme!'],
      ['sjećati se', 'to remember', 'Sjećam ga se kao da je bilo jučer.'],
    ],
  },

  'verbal-nouns': {
    worked: [
      {
        title: 'News Register: the Passive Participle',
        problem:
          'Prepiši u stilu vijesti, bez vršitelja radnje: "Ministarstvo je objavilo rezultate."',
        en: 'Rewrite in news style, with no agent: The ministry published the results.',
        steps: [
          {
            label: 'Find the new subject',
            text: 'The object rezultate becomes the subject, so it goes back to the nominative plural: rezultati.',
          },
          {
            label: 'Form the participle',
            text: 'objaviti is perfective, which suits a finished result. Its passive participle softens the v: objavljen.',
          },
          {
            label: 'Make it agree',
            text: 'The participle behaves like an adjective — masculine plural, objavljeni — with su.',
          },
        ],
        answer: 'Rezultati su objavljeni.',
      },
      {
        title: 'Two Sentences, One Subject',
        problem: 'Spoji glagolskim prilogom prošlim: "Ušla je u sobu. Upalila je svjetlo."',
        en: 'Join with a past adverbial participle: She came into the room. She switched on the light.',
        steps: [
          {
            label: 'Check the subject',
            text: 'Both actions are hers, so an adverbial participle is possible — it must share the subject of the main clause.',
          },
          {
            label: 'Choose -vši',
            text: 'The entering was finished before the light went on. A prior completed action takes the past adverbial participle.',
          },
          {
            label: 'Form it',
            text: 'From the perfective ući: ušavši. It never changes for gender or number.',
          },
          {
            label: 'Attach the main clause',
            text: 'The participle phrase comes first, set off by a comma, and the main clause keeps its own verb.',
          },
        ],
        answer: 'Ušavši u sobu, upalila je svjetlo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "U zgradi je zabranjeno ___." (smoking — pušiti)',
          options: ['pušeći', 'popušeno', 'pušenje', 'pušivši'],
          correct: 2,
          hint: 'The subject of je zabranjeno is a neuter noun made from the imperfective verb.',
          explanation:
            'pušenje — the verbal noun in -nje. The other three are participles, which cannot stand as a subject here.',
        },
        {
          q: 'Complete: "Odluka je ___ jučer." (was announced — objaviti)',
          options: ['objavio', 'objavljena', 'objavljivanje', 'objavljujući'],
          correct: 1,
          hint: 'The passive participle agrees with its subject like an adjective, and odluka is feminine.',
          explanation:
            'objavljena — passive participle, feminine singular. objavio is the active participle and would make someone masculine the announcer.',
        },
        {
          q: 'Complete: "___ novine, pio je kavu." (while reading — čitati)',
          options: ['Pročitavši', 'Čitajući', 'Čitanje', 'Čitan'],
          correct: 1,
          hint: 'The two actions happen at the same time, so you need the present adverbial participle of the imperfective.',
          explanation:
            'Čitajući — -ći for simultaneous action. Pročitavši would mean he had finished reading first.',
        },
        {
          q: 'Complete: "Po ___ ugovora slijedi isplata." (the signing — potpisivati)',
          options: ['potpisivanju', 'potpisivanja', 'potpisan', 'potpisujući'],
          correct: 0,
          hint: 'po in the sense "upon" takes the locative, and the noun is built from the imperfective with -nje.',
          explanation:
            'po potpisivanju — the locative of the verbal noun potpisivanje. The genitive belongs to nakon.',
        },
        {
          q: 'Complete: "Zabranjeno je ___ pasa na plažu." (bringing — dovoditi)',
          options: ['dovođenje', 'dovodeći', 'doveden', 'dovevši'],
          correct: 0,
          hint: 'A prohibition names the act, so a neuter noun in -nje.',
          explanation: 'dovođenje — the d softens to đ before -enje.',
        },
        {
          q: 'Complete: "Škola je ___ prije sto godina." (was founded — osnovati)',
          options: ['osnovan', 'osnovana', 'osnovano', 'osnivajući'],
          correct: 1,
          hint: 'The participle agrees with škola like an adjective.',
          explanation: 'škola is feminine, so osnovana.',
        },
        {
          q: 'Which is an adverbial participle of simultaneous action?',
          options: ['otišavši', 'govoreći', 'napisan', 'pjevanje'],
          correct: 1,
          hint: 'Look for the -ći ending.',
          explanation: 'govoreći — while speaking; otišavši is a prior action.',
        },
        {
          q: 'Complete: "___ čovjek pozvao je pomoć." (the injured man — ozlijediti)',
          options: ['Ozljeđujući', 'Ozlijeđeni', 'Ozljeđivanje', 'Ozlijedivši'],
          correct: 1,
          hint: 'A passive participle used as an adjective before its noun.',
          explanation: 'ozlijeđeni čovjek — the injured man.',
        },
        {
          type: 'type',
          q: '____ je u ovom parku zabranjeno. (camping — kampirati)',
          answer: 'Kampiranje',
          hint: 'Verb stem plus -nje gives a neuter noun.',
          explanation: 'Kampiranje — the verbal noun names the prohibited act.',
        },
        {
          type: 'type',
          q: 'Pismo je ____ jučer. (was written — napisati)',
          answer: 'napisano',
          hint: 'The passive participle agrees with pismo, which is neuter.',
          explanation: 'Pismo je napisano — neuter singular participle.',
        },
        {
          type: 'type',
          q: '____ kući, skuhala je večeru. (having come — doći)',
          answer: 'Došavši',
          hint: 'A completed prior action with a shared subject takes -vši; this verb builds on doš-.',
          explanation: 'Došavši kući — she came home first, then cooked.',
        },
        {
          type: 'type',
          q: 'Slušao je predavanje ____ bilješke. (taking — pisati; simultaneous)',
          answer: 'pišući',
          hint: 'Simultaneous action: the present stem plus -ći; the stem softens.',
          explanation: 'pišući bilješke — writing notes while listening.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ stranih jezika otvara vrata." (the learning — učiti)',
        options: ['Učeći', 'Učenje', 'Naučivši', 'Naučen'],
        correct: 1,
        explanation: 'The act of learning is the verbal noun učenje, a neuter subject.',
      },
      {
        q: 'Complete: "___ vrata, ušla je u stan." (Having unlocked — otključati)',
        options: ['Otključavajući', 'Otključavanje', 'Otključan', 'Otključavši'],
        correct: 3,
        explanation: 'A completed prior action with a shared subject takes -vši: otključavši.',
      },
      {
        q: 'Which sentence uses the adverbial participle correctly?',
        options: [
          'Hodajući po plaži, našla je školjku.',
          'Hodajući po plaži, sunce je zalazilo.',
          'Hodajući po plaži, pijesak je bio vruć.',
          'Hodajući po plaži, telefon joj je zazvonio.',
        ],
        correct: 0,
        explanation:
          'The participle must share the subject of the main clause — she walked and she found.',
      },
      {
        q: 'Spot the error: "Pišući pismo, poslala ga je."',
        options: [
          'pismo should be pisma',
          'poslala should be poslao',
          'Pišući should be Napisavši — a completed prior action takes -vši',
          'nothing is wrong',
        ],
        correct: 2,
        explanation:
          'She finished writing before she sent it, so the past adverbial participle: napisavši.',
      },
      {
        q: 'Which form turns "vijest koja je objavljena" into two words?',
        options: [
          'objavljujuća vijest',
          'objavljena vijest',
          'objavljivanje vijesti',
          'objavivši vijest',
        ],
        correct: 1,
        explanation: 'The passive participle works as an adjective: objavljena vijest.',
      },
      {
        q: 'Complete: "Molimo ne ometajte vozača tijekom ___." (the drive — voziti)',
        options: ['vozeći', 'vožnje', 'vožen', 'vozivši'],
        correct: 1,
        explanation: 'tijekom takes the genitive of a noun: vožnje.',
      },
    ],
    vocab: [
      ['glagolska imenica', 'verbal noun', 'Pisanje je glagolska imenica od glagola pisati.'],
      [
        'glagolski pridjev trpni',
        'passive participle',
        'Otvoren je glagolski pridjev trpni od otvoriti.',
      ],
      [
        'glagolski prilog sadašnji',
        'present adverbial participle',
        'Idući je glagolski prilog sadašnji od ići.',
      ],
      ['potpisivanje', 'signing', 'Potpisivanje ugovora zakazano je za ponedjeljak.'],
      ['zabranjen', 'prohibited', 'Parkiranje ispred ulaza je zabranjeno.'],
      ['usvojiti', 'to adopt, pass (a law)', 'Sabor je usvojio novi zakon.'],
      ['nezaposlenost', 'unemployment', 'Rastuća nezaposlenost brine ekonomiste.'],
      ['izgubljen', 'lost', 'Izgubljeni putnik pitao je za put.'],
    ],
  },

  'idioms-register': {
    worked: [
      {
        title: 'A Request to the Landlord',
        problem: 'Zamoli stanodavca, s kojim si na Vi, da pošalje majstora ovaj tjedan.',
        en: 'Ask your landlord, whom you address formally, to send a repairman this week.',
        steps: [
          {
            label: 'Set the register',
            text: 'A landlord is a business relationship: the Vi-form, and in writing the pronoun is capitalised — Vam, Vas.',
          },
          {
            label: 'Choose the softener',
            text: 'ako Vam nije teško (if it is no trouble) asks without demanding. It is the polite frame for a request.',
          },
          {
            label: 'Keep out the colloquial',
            text: 'No ajde, no ma, no fala — each is warm among friends and sounds flippant to a landlord.',
          },
          {
            label: 'Put it together',
            text: 'The softener first, then the request in the Vi imperative: pošaljite.',
          },
        ],
        answer: 'Ako Vam nije teško, pošaljite majstora ovaj tjedan.',
      },
      {
        title: 'Waving Away an Apology',
        problem: 'Prijatelj se ispričava što kasni pet minuta. Odgovori toplo i opušteno.',
        en: 'A friend apologises for being five minutes late. Reply warmly and casually.',
        steps: [
          {
            label: 'Set the register',
            text: 'A friend: the ti-form, and the colloquial layer is welcome.',
          },
          {
            label: 'Pick the particle',
            text: 'ma before an imperative waves something away affectionately: ma pusti — oh, leave it.',
          },
          {
            label: 'Add the reassurance',
            text: 'nema veze — it does not matter. Short, and exactly what a native says.',
          },
        ],
        answer: 'Ma pusti, nema veze.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which closing fits an email to a professor?',
          options: ['S poštovanjem,', 'Ajde, bog!', 'Pozdrav, stari!', 'Vidimo se, ćao!'],
          correct: 0,
          hint: 'A formal letter closes with a fixed phrase of respect, never with a greeting between friends.',
          explanation:
            'S poštovanjem is the standard formal close. The other three belong to friends.',
        },
        {
          q: '"Opozicija je vladi bacila rukavicu." What happened?',
          options: [
            'the opposition apologised to the government',
            'the opposition challenged the government',
            'the opposition lost a vote',
            'the opposition joined the government',
          ],
          correct: 1,
          hint: 'The idiom is the one English uses about a knight and a gauntlet.',
          explanation:
            'baciti rukavicu — to throw down the gauntlet, to challenge. vladi is the dative of the one challenged.',
        },
        {
          q: 'In a meeting with a client you missed a point. What do you say?',
          options: [
            'Ne kapim.',
            'Nisam skužio.',
            'Ne razumijem, možete li ponoviti?',
            'Ma ništa mi nije jasno, stari.',
          ],
          correct: 2,
          hint: 'Use the neutral verb for understanding, and the Vi-form for the request.',
          explanation:
            'Ne razumijem with a Vi request is right for a client. Ne kapim and nisam skužio are colloquial; the last is for friends.',
        },
        {
          q: 'Your manager asks how the report is going. Which reply fits?',
          options: [
            'Izvještaj će biti gotov do petka.',
            'Ma sklepat ću ga nekako.',
            'Nema frke, bit će.',
            'Znači, eto, znači, radim.',
          ],
          correct: 0,
          hint: 'A neutral register states a concrete commitment, without slang or filler.',
          explanation:
            'A plain statement with a deadline. sklepati is slang, nema frke is for friends, and the fillers read as stalling.',
        },
        {
          q: 'What does "igrati se vatrom" mean?',
          options: [
            'to cook outdoors',
            'to take a dangerous risk',
            'to light a fire',
            'to play a game',
          ],
          correct: 1,
          hint: 'Think of the English idiom with the same image.',
          explanation: 'igrati se vatrom — to play with fire.',
        },
        {
          q: 'Which reply is too colloquial for a job interview?',
          options: [
            'Radio sam tri godine u banci.',
            'Ma, bilo je to nešto u banci, znaš.',
            'Imam iskustva u bankarstvu.',
            'Tri godine vodio sam tim.',
          ],
          correct: 1,
          hint: 'Look for a spoken filler and a ti-form.',
          explanation: 'ma … znaš belongs to a café, not an interview.',
        },
        {
          q: 'What does "ostati bez teksta" mean?',
          options: [
            'to lose a document',
            'to be left speechless',
            'to forget lines on stage only',
            'to stop writing',
          ],
          correct: 1,
          hint: 'Imagine being left with no words at all.',
          explanation: 'ostati bez teksta — to be speechless.',
        },
        {
          q: 'Which proverb matches "All that glitters is not gold"?',
          options: [
            'Nije zlato sve što sja.',
            'Tko rano rani, dvije sreće grabi.',
            'Nema ruže bez trnja.',
            'Sitna kap kamen dubi.',
          ],
          correct: 0,
          hint: 'Look for the precious metal and shining.',
          explanation: 'Nije zlato sve što sja.',
        },
        {
          type: 'type',
          q: 'Ovaj put ćemo ____ na jedno oko. (turn a blind eye — the verb of the idiom, infinitive)',
          answer: 'zažmiriti',
          hint: "The verb means to shut one's eyes.",
          explanation: 'zažmiriti na jedno oko.',
        },
        {
          type: 'type',
          q: 'Kad sam vidio račun, ostao sam bez ____. (speechless — the fixed phrase)',
          answer: 'teksta',
          hint: 'The noun is the word for a text, in the genitive.',
          explanation: 'ostati bez teksta.',
        },
        {
          type: 'type',
          q: 'Nemoj se praviti ____. (pretend you know nothing — the idiom names a nationality)',
          answer: 'Englez',
          hint: 'The nationality from across the Channel.',
          explanation: 'praviti se Englez — to play dumb.',
        },
        {
          type: 'type',
          q: 'Tko rano rani, dvije ____ grabi. (fortunes — the proverb)',
          answer: 'sreće',
          hint: 'The noun for luck, in the form that follows dvije.',
          explanation: 'dvije sreće grabi.',
        },
      ],
    },
    checkB: [
      {
        q: 'A colleague is about to give a big presentation. Complete: "___ s prezentacijom!"',
        options: ['Svaka čast', 'Nema frke', 'Slomi nogu', 'Sretno'],
        correct: 3,
        explanation: 'Good luck is Sretno; the English "break a leg" does not translate.',
      },
      {
        q: 'Complete: "Na sastanku je odmah prešao ___ stvar."',
        options: ['u', 'na', 'za', 'o'],
        correct: 1,
        explanation: 'prijeći na stvar — to get to the point.',
      },
      {
        q: 'Which opening fits a phone call to a government office?',
        options: [
          'Ej, šta ima?',
          'Kak ste, šefe?',
          'Dobar dan, zovem u vezi sa svojim zahtjevom.',
          'Bog, jel to ured?',
        ],
        correct: 2,
        explanation: 'A neutral formal opening with Vi-register.',
      },
      {
        q: 'What does "Nije mu sve doma" mean?',
        options: [
          'he is not at home',
          'he is not all there — a bit odd',
          'his house is empty',
          'he is homesick',
        ],
        correct: 1,
        explanation: 'An idiom about someone being a bit odd.',
      },
      {
        q: '"Plaća mu je za plakanje." What is this?',
        options: [
          'a formal complaint',
          'colloquial hyperbole — his salary is pitiful',
          'a proverb about crying',
          'a literal description',
        ],
        correct: 1,
        explanation: 'za plakanje — so bad it makes you cry: colloquial exaggeration.',
      },
      {
        q: 'Which phrase is safe in a formal email?',
        options: [
          'Molim Vas da mi javite do petka.',
          'Nema frke, javi.',
          'Ajde, javi se.',
          'Ma pusti, sitnica.',
        ],
        correct: 0,
        explanation: 'Vi-form and a neutral request suit a formal email.',
      },
    ],
    vocab: [
      ['frazem', 'idiom, set phrase', 'Svaka čast je frazem koji znači pohvalu.'],
      ['stil', 'style, register', 'U službenom pismu treba paziti na stil.'],
      ['okolišati', 'to beat about the bush', 'Prestani okolišati i reci što misliš.'],
      ['zažmiriti', "to shut one's eyes", 'Ovaj put ćemo zažmiriti na jedno oko.'],
      ['poslovica', 'proverb', 'Poslovica kaže: bolje ikad nego nikad.'],
      ['sitnica', 'trifle', 'Ma pusti, to je sitnica.'],
      ['pohvala', 'praise', 'Svaka čast je iskrena pohvala.'],
      ['šaljiv', 'jocular, playful', 'Rekao je to šaljivim tonom.'],
    ],
  },

  'language-identity': {
    worked: [
      {
        title: 'Writing a Travel Notice',
        problem: 'Napiši na standardnom hrvatskom: "The plane to Zadar leaves in a week."',
        en: 'Write in standard Croatian: The plane to Zadar leaves in a week.',
        steps: [
          {
            label: 'The aircraft',
            text: 'Standard Croatian uses the native compound zrakoplov (air + boat) — the word a notice or a newspaper prints.',
          },
          {
            label: 'The week',
            text: 'A seven-day span is tjedan. nedjelja is only Sunday, so it cannot stand in for "week".',
          },
          {
            label: 'The time phrase',
            text: '"In a week" is za tjedan dana — za with the accusative, and dana as a genitive of measure.',
          },
          { label: 'The verb', text: 'For a plane taking off the verb is polijetati: polijeće.' },
        ],
        answer: 'Zrakoplov za Zadar polijeće za tjedan dana.',
      },
      {
        title: 'A Date the Croatian Way',
        problem: 'Napiši datum "on 3 March" riječima i brojkama.',
        en: 'Write the date "on 3 March" in words and in figures.',
        steps: [
          {
            label: 'The month',
            text: 'Croatian keeps Slavic month names: siječanj, veljača, ožujak… March is ožujak.',
          },
          {
            label: 'The case',
            text: 'In a date the month follows in the genitive: ožujak → ožujka, with the fleeting a dropped.',
          },
          {
            label: 'The day',
            text: '"On the third" is the ordinal in the genitive, which answers "when": trećeg (or trećega).',
          },
          {
            label: 'The figures',
            text: 'Written in figures, the ordinal carries a full stop: 3. ožujka.',
          },
        ],
        answer: 'trećeg ožujka — 3. ožujka',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'A heritage speaker writes "Vidimo se sljedeće nedjelje", meaning next week. What will a Croatian reader understand?',
          options: ['next Sunday', 'next week', 'next weekend', 'next month'],
          correct: 0,
          hint: 'In the standard this word names a single day, not a span of seven.',
          explanation:
            'nedjelja is Sunday. "Next week" is sljedeći tjedan: vidimo se sljedeći tjedan.',
        },
        {
          q: 'Complete: "Ljeto službeno počinje u ___." (June)',
          options: ['srpnju', 'lipnju', 'travnju', 'svibnju'],
          correct: 1,
          hint: 'The Croatian name for June comes from the linden tree, which blooms then.',
          explanation:
            'lipanj → u lipnju (locative, fleeting a). srpanj is July, travanj April, svibanj May.',
        },
        {
          q: 'Which spelling is standard Croatian?',
          options: ['mljeko', 'mlieko', 'mlijeko', 'mliko'],
          correct: 2,
          hint: 'The standard is ijekavian, and in this word the old yat stands in a long syllable.',
          explanation:
            'mlijeko — a long yat gives -ije-. mliko is the ikavian dialect form; the other two are misspellings.',
        },
        {
          q: 'What is a "zračna luka"?',
          options: ['a harbour', 'an air vent', 'a lighthouse', 'an airport'],
          correct: 3,
          hint: 'Read it in two parts: an adjective from zrak (air) and the noun for a port.',
          explanation:
            'zračna luka is an "air harbour" — the native term for an airport, the purist tradition at work, like zrakoplov.',
        },
        {
          q: 'What does Croatian "nedjelja" mean?',
          options: ['week', 'Sunday', 'weekend', 'Monday'],
          correct: 1,
          hint: 'The word for a week is tjedan.',
          explanation: 'nedjelja — Sunday.',
        },
        {
          q: 'Which script did Croatia keep in use uniquely long?',
          options: ['Glagolitic', 'Greek', 'Arabic', 'Runic'],
          correct: 0,
          hint: 'It was used for church books on the islands for centuries.',
          explanation: 'glagoljica.',
        },
        {
          q: 'Which word is shared by Croatian and its neighbours?',
          options: ['bolnica', 'vlak', 'tisuća', 'tjedan'],
          correct: 0,
          hint: 'One of these is used identically across the region.',
          explanation: 'bolnica — not every word differs.',
        },
        {
          q: 'In which dialect did Marko Marulić write Judita (1501)?',
          options: ['Kajkavian', 'Čakavian', 'Latin only', 'Štokavian'],
          correct: 1,
          hint: 'The dialect of the coast and of Split at the time.',
          explanation: 'Judita is čakavian.',
        },
        {
          type: 'type',
          q: 'Putovali smo ____ do Splita. (by train — vlak)',
          answer: 'vlakom',
          hint: 'The instrumental of the means of travel.',
          explanation: 'vlakom — by train.',
        },
        {
          type: 'type',
          q: 'Vidimo se sljedeći ____. (week)',
          answer: 'tjedan',
          hint: 'Not the word for Sunday.',
          explanation: 'sljedeći tjedan.',
        },
        {
          type: 'type',
          q: 'Karta košta ____ eura. (a thousand — tisuća)',
          answer: 'tisuću',
          hint: 'košta takes the accusative; -a becomes -u.',
          explanation: 'tisuću eura.',
        },
        {
          type: 'type',
          q: 'Zrakoplov slijeće u zračnu ____. (port — the airport phrase)',
          answer: 'luku',
          hint: 'u of motion + the accusative of luka.',
          explanation: 'u zračnu luku.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is the Croatian word for "train"?',
        options: ['vlak', 'autobus', 'tramvaj', 'brod'],
        correct: 0,
        explanation: 'vlak — the standard Croatian word for generations.',
      },
      {
        q: 'Complete: "Studira na ___ u Zagrebu." (the university)',
        options: ['sveučilište', 'sveučilištu', 'sveučilišta', 'sveučilištem'],
        correct: 1,
        explanation: 'na + locative: na sveučilištu.',
      },
      {
        q: 'Which reflex does standard Croatian use in "mlijeko"?',
        options: ['ikavian', 'ekavian', 'ijekavian', 'none'],
        correct: 2,
        explanation: 'The long jat gives -ije-: the ijekavian standard.',
      },
      {
        q: 'Who coined "brzojav" and many other native words in the 19th century?',
        options: ['Marko Marulić', 'Bogoslav Šulek', 'Ivan Gundulić', 'Ljudevit Gaj'],
        correct: 1,
        explanation: 'Šulek built hundreds of native technical words.',
      },
      {
        q: 'What does "zrakoplov" literally build from?',
        options: [
          'ray + blue',
          'sky + bird',
          'wind + wheel',
          'air + sailing — a craft that sails the air',
        ],
        correct: 3,
        explanation: 'zrak (air) + plov (sailing).',
      },
      {
        q: 'A heritage speaker mixes dialect words at home. What is the sound reaction?',
        options: [
          'correct every word',
          'treat it as living Croatian, and use the standard forms in writing',
          'ask them to stop',
          'assume it is another language',
        ],
        correct: 1,
        explanation: 'Heritage Croatian is not broken Croatian.',
      },
    ],
    vocab: [
      [
        'jezični identitet',
        'linguistic identity',
        'Jezični identitet važan je dio nacionalnog identiteta.',
      ],
      ['vlak', 'train', 'Vlakom od Zagreba do Splita putuje se nekoliko sati.'],
      ['tisuća', 'thousand', 'Na koncertu je bilo tisuću ljudi.'],
      ['tjedan', 'week', 'Sljedeći tjedan idemo na more.'],
      ['zrakoplov', 'aeroplane', 'Zrakoplov slijeće u zračnu luku Zadar.'],
      ['sveučilište', 'university', 'Sveučilište u Zagrebu osnovano je 1669. godine.'],
      ['glagoljica', 'Glagolitic script', 'Glagoljica je naš otisak prsta u povijesti.'],
      ['jezikoslovac', 'linguist', 'Šulek je bio jezikoslovac koji je stvorio mnoge riječi.'],
    ],
  },

  'aorist-imperfekt': {
    worked: [
      {
        title: 'Retelling in Literary Style',
        problem: 'Prepiši aoristom: "Stigao je, pozdravio sve i sjeo."',
        en: 'Rewrite with the aorist: He arrived, greeted everyone and sat down.',
        steps: [
          {
            label: 'Check the aspect',
            text: 'stići, pozdraviti and sjesti are all perfective — single completed beats, exactly what the aorist narrates.',
          },
          {
            label: 'Find the 3rd singular',
            text: 'The third-person singular aorist has no ending: stići → stiže (g softens to ž before e), pozdraviti → pozdravi, sjesti → sjede.',
          },
          { label: 'Drop the auxiliary', text: 'The aorist is one word: no je, no participle.' },
          {
            label: 'Hear the pace',
            text: 'Three short verbs in a row give the camera-cut rhythm the perfekt cannot.',
          },
        ],
        answer: 'Stiže, pozdravi sve i sjede.',
      },
      {
        title: 'Background and Event',
        problem: 'Popuni: "Kiša ___ (padati) cijelu noć, a u zoru ___ (stati)."',
        en: 'Fill in: The rain was falling all night, and at dawn it stopped.',
        steps: [
          {
            label: 'Which is the background?',
            text: 'Falling all night is an ongoing state — the wallpaper. padati is imperfective, so it takes the imperfekt.',
          },
          {
            label: 'Form the imperfekt',
            text: 'padati → padah, padaše: third-person singular padaše.',
          },
          {
            label: 'Which is the event?',
            text: 'Stopping at dawn is one sudden completed act. stati is perfective, so it takes the aorist.',
          },
          { label: 'Form the aorist', text: 'stati → stadoh, stade: third-person singular stade.' },
        ],
        answer: 'Kiša padaše cijelu noć, a u zoru stade.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"Uđoše u crkvu." What form is uđoše?',
          options: [
            'aorist, 3rd plural',
            'imperfekt, 3rd plural',
            'present, 3rd plural',
            'aorist, 3rd singular',
          ],
          correct: 0,
          hint: 'Look at the ending -še, and ask whether ući is perfective.',
          explanation: 'uđoše is the aorist 3rd plural of the perfective ući — they went in.',
        },
        {
          q: 'Complete with an IMPERFEKT: "Starica ___ uz vatru." (was sitting — sjediti)',
          options: ['sjede', 'sjeđaše', 'sjedila je', 'sjedne'],
          correct: 1,
          hint: 'A lasting state from an imperfective verb, and the stem consonant softens before the imperfekt ending.',
          explanation:
            'sjeđaše is the imperfekt of sjediti. sjede is the aorist of sjesti, sjedila je the everyday perfekt, sjedne a present.',
        },
        {
          q: 'Complete with an aorist: "Kad ___ pismo, zaplakah." (when I had read — pročitati)',
          options: ['pročitaše', 'pročitah', 'pročitam', 'pročitavši'],
          correct: 1,
          hint: 'The person is the same as in zaplakah, and the verb is perfective.',
          explanation:
            'pročitah — aorist 1st singular in -h, matching zaplakah. pročitaše is 3rd plural.',
        },
        {
          q: 'Spot the error: "On gledah kroz prozor."',
          options: [
            'prozor should be prozora',
            'nothing is wrong',
            'gledah is 1st person — with on the imperfekt is gledaše',
            'kroz should be u',
          ],
          correct: 2,
          hint: 'Check which person the ending -h belongs to.',
          explanation:
            'The -h ending is first person singular (ja gledah). With on the imperfekt is gledaše.',
        },
        {
          q: '"Zazvoni telefon." In a narrative, what is zazvoni?',
          options: [
            'the aorist, 3rd singular — the phone rang, suddenly',
            'the imperfekt',
            'a command',
            'the perfekt',
          ],
          correct: 0,
          hint: 'A perfective verb in narration, one sudden event.',
          explanation: 'zazvoni — the aorist of the perfective zazvoniti.',
        },
        {
          q: 'Complete with an imperfekt: "Djeca se ___ u dvorištu." (were playing — igrati se)',
          options: ['igraše', 'igrahu', 'igraju', 'poigraše'],
          correct: 1,
          hint: 'An imperfective verb, 3rd plural, with the background ending in -hu.',
          explanation: 'igrahu — the imperfekt 3rd plural; igraše is singular, poigraše an aorist.',
        },
        {
          q: 'Which is an aorist, not an imperfekt?',
          options: ['bijaše', 'gledaše', 'pogleda', 'govoraše'],
          correct: 2,
          hint: 'The aorist is built from a perfective verb — look for the prefix.',
          explanation: 'pogleda — perfective, sudden; the others are imperfekt forms.',
        },
        {
          q: 'In an old text: "Tada bi rat." What does bi mean?',
          options: [
            'would be — a conditional',
            'war broke out — the aorist of biti',
            'was being — the imperfekt',
            'is — the present',
          ],
          correct: 1,
          hint: 'No l-participle follows, so this is not a conditional.',
          explanation: 'bare bi with no participle is the old aorist of biti.',
        },
        {
          type: 'type',
          q: 'Kad ga ____, zaplakah od sreće. (when I saw him — ugledati; aorist, 1st singular)',
          answer: 'ugledah',
          hint: 'Perfective stem plus the 1st-person aorist ending -h.',
          explanation: 'ugledah — the 1st singular aorist of ugledati.',
        },
        {
          type: 'type',
          q: 'Svi ____ kad je ušao. (fell silent — zašutjeti; aorist, 3rd plural)',
          answer: 'zašutješe',
          hint: 'The 3rd plural aorist ends in -še.',
          explanation: 'zašutješe — everyone fell silent at once.',
        },
        {
          type: 'type',
          q: 'Njegova obitelj ____ u Splitu. (was living — živjeti; imperfekt, 3rd singular)',
          answer: 'življaše',
          hint: 'An imperfective verb in the imperfekt; the stem softens before -aše.',
          explanation: 'življaše — the lasting state in the background.',
        },
        {
          type: 'type',
          q: 'Mi ____ u Zadar kasno navečer. (we arrived — stići; aorist, 1st plural)',
          answer: 'stigosmo',
          hint: 'The 1st plural aorist ends in -smo, built on the stem stig-.',
          explanation: 'stigosmo — the aorist of stići, 1st plural.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete with an aorist: "On ___ vrata i izađe." (he opened — otvoriti)',
        options: ['otvaraše', 'otvori', 'otvorio je', 'otvara'],
        correct: 1,
        explanation: 'A perfective verb in the aorist, 3rd singular: otvori, matching izađe.',
      },
      {
        q: 'Complete with an imperfekt: "Kiša ___ cijelu noć." (was falling — padati)',
        options: ['pade', 'pada', 'padala je', 'padaše'],
        correct: 3,
        explanation:
          'An imperfective verb in the imperfekt, 3rd singular: padaše — the lasting background.',
      },
      {
        q: 'Which sentence narrates quick completed events in the aorist?',
        options: [
          'Ustajahu i pozdravljahu se.',
          'Ustadoše, pozdraviše se i otiđoše.',
          'Ustaju, pozdravljaju se i odlaze.',
          'Ustajali su i pozdravljali se.',
        ],
        correct: 1,
        explanation:
          'ustadoše, pozdraviše, otiđoše — perfective verbs in the aorist, one beat after another.',
      },
      {
        q: 'Spot the error: "Ja uđe u sobu i sjedoh."',
        options: [
          'uđe is 3rd person — with ja the aorist is uđoh',
          'sjedoh should be sjede',
          'sobu should be sobi',
          'nothing is wrong',
        ],
        correct: 0,
        explanation: 'The 1st singular aorist ends in -h: uđoh, like sjedoh.',
      },
      {
        q: 'What does the imperfekt "gledaše" convey?',
        options: [
          'a sudden completed look',
          'a future action',
          'an ongoing background action in the past — he was watching',
          'a polite request',
        ],
        correct: 2,
        explanation: 'The imperfekt paints what was going on; the aorist would be pogleda.',
      },
      {
        q: 'What is "rekoše"?',
        options: [
          'the aorist of reći, 3rd plural',
          'the imperfekt of reći',
          'the present of reći',
          'a conditional',
        ],
        correct: 0,
        explanation: 'rekoh, reče, reče, rekosmo, rekoste, rekoše — the aorist of reći.',
      },
    ],
    vocab: [
      ['aorist', 'aorist (past tense)', 'Aorist se danas najčešće čuje u pripovijedanju.'],
      ['imperfekt', 'imperfect tense', 'Imperfekt opisuje pozadinu radnje u prošlosti.'],
      ['pripovijedanje', 'narration', 'U pripovijedanju se aorist smjenjuje s perfektom.'],
      ['zašutjeti', 'to fall silent', 'Svi su zašutjeli kad je progovorio.'],
      ['ugledati', 'to catch sight of', 'Kad ugledah more, srce mi zaigra.'],
      ['progovoriti', 'to begin to speak', 'Nakon duge šutnje napokon je progovorio.'],
      ['zvono', 'bell', 'Zvona su zvonila cijelo jutro.'],
      ['plašiti', 'to frighten', 'Bijasmo mladi i ništa nas ne plašaše.'],
    ],
  },

  'tvorba-rijeci': {
    worked: [
      {
        title: 'Decoding an Unknown Word',
        problem: 'Što znači "potpisnik"?',
        en: 'What does potpisnik mean?',
        steps: [
          {
            label: 'Split it',
            text: 'pot- + pis + -nik: a prefix, the root of pisati, and a suffix.',
          },
          {
            label: 'The prefix',
            text: 'pot- is "under", so pot + pisati is "to write under" — to sign.',
          },
          {
            label: 'The suffix',
            text: '-nik makes a person connected with the action or thing, as in radnik (worker) from rad.',
          },
          {
            label: 'Put it together',
            text: 'A person who signs: the signatory of a contract or a petition.',
          },
        ],
        answer: 'potpisnik — onaj koji potpisuje (signatory)',
      },
      {
        title: 'From Adjective to Abstract Noun',
        problem: 'Popuni: "Cijenim njezinu ___." (patience — strpljiv)',
        en: 'Fill in: I value her patience.',
        steps: [
          {
            label: 'Choose the suffix',
            text: '-ost turns an adjective into an abstract noun: mlad → mladost, hrabar → hrabrost.',
          },
          { label: 'Build it', text: 'strpljiv + -ost → strpljivost.' },
          {
            label: 'Know its gender',
            text: 'Nouns in -ost are feminine and decline like stvar, so the accusative looks like the nominative.',
          },
          {
            label: 'Agree the possessive',
            text: 'The possessive takes the feminine accusative: njezinu.',
          },
        ],
        answer: 'Cijenim njezinu strpljivost.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'You meet "prepisivanje". What is it?',
          options: ['the act of copying', 'a copier', 'a signature', 'a description'],
          correct: 0,
          hint: 'Split it: the prefix of copying, the root of writing, and the ending that makes a verbal noun.',
          explanation:
            'pre- + pis + -ivanje: the act of copying out. A person or device that copies would be prepisivač.',
        },
        {
          q: 'Complete: "___ autobusa zaustavio se na stanici." (the driver — voziti)',
          options: ['Vozitelj', 'Vozač', 'Vozilo', 'Vožnja'],
          correct: 1,
          hint: 'This doer takes the everyday suffix, the one in igrač and nosač.',
          explanation:
            'vozač — voziti + -ač. vozilo is the vehicle and vožnja the ride; the -telj form is not how Croatian names a driver.',
        },
        {
          q: 'What is a "ribar"?',
          options: ['a small fish', 'a fish market', 'a fisherman', 'a big fish'],
          correct: 2,
          hint: 'The suffix -ar names a trade, as in zlatar and pekar.',
          explanation:
            'riba + -ar: the man whose trade is fish. A small fish is ribica; the market is ribarnica.',
        },
        {
          q: 'Which word means "a scrap of paper"?',
          options: ['papirnica', 'papirina', 'papirnat', 'papirić'],
          correct: 3,
          hint: 'You want the masculine diminutive suffix.',
          explanation:
            'papirić — papir + -ić. papirnica is a stationery shop and papirnat the adjective "made of paper".',
        },
        {
          q: 'What is a "zlatar"?',
          options: ['a gold coin', 'a goldsmith', 'the colour gold', 'a gold mine'],
          correct: 1,
          hint: '-ar marks a trade.',
          explanation: 'zlato → zlatar, like knjiga → knjižar.',
        },
        {
          q: 'What does "otpisati" most likely mean, from ot- (away) + pisati?',
          options: ['to write off', 'to sign', 'to note down', 'to describe'],
          correct: 0,
          hint: 'ot- carries the sense of removing something.',
          explanation: 'otpisati dug — to write off a debt.',
        },
        {
          q: 'Which is the diminutive of "knjiga"?',
          options: ['knjigica', 'knjižica', 'knjižnica', 'knjižurina'],
          correct: 1,
          hint: 'The g softens before -ica, and another of these words already means library.',
          explanation: 'knjižica — a booklet; knjižnica is a library.',
        },
        {
          q: 'Which word carries a sneer?',
          options: ['kućica', 'glavurina', 'kamenčić', 'gradić'],
          correct: 1,
          hint: 'Look for the augmentative -urina.',
          explanation: 'glavurina — a big ugly head.',
        },
        {
          type: 'type',
          q: 'On je dobar ____. (reader — čitati; the formal doer suffix)',
          answer: 'čitatelj',
          hint: 'The formal agent suffix -telj added to the verb stem.',
          explanation: 'čitati → čitatelj.',
        },
        {
          type: 'type',
          q: 'Svi ____ bili su oduševljeni koncertom. (the listeners — slušati)',
          answer: 'slušatelji',
          hint: 'The doer noun in -telj, nominative plural.',
          explanation: 'slušatelji — the plural of slušatelj.',
        },
        {
          type: 'type',
          q: '____ je broj telefona na komadić papira. (She noted down — za- + pisati)',
          answer: 'Zapisala',
          hint: 'za- + pisati, feminine past participle.',
          explanation: 'Zapisala je broj — zapisati, to note down.',
        },
        {
          type: 'type',
          q: 'Njegova ____ svima je poznata. (honesty — iskren)',
          answer: 'iskrenost',
          hint: 'The adjective plus the abstract-noun suffix -ost.',
          explanation: 'iskren → iskrenost.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Molim Vas, ___ se na tečaj do petka." (enrol — from pisati)',
        options: ['potpišite', 'upišite', 'opišite', 'prepišite'],
        correct: 1,
        explanation: 'u- (into) + pisati: upisati se, to enrol.',
      },
      {
        q: 'You meet "slušatelj" for the first time. What is it most likely?',
        options: ['a small ear', 'the act of listening', 'someone who listens', 'a device only'],
        correct: 2,
        explanation: '-telj makes a doer from a verb: slušati → slušatelj.',
      },
      {
        q: 'Complete: "Kupili smo ___ na otoku." (a little house — kuća)',
        options: ['kućerinu', 'kućište', 'kućanstvo', 'kućicu'],
        correct: 3,
        explanation: 'The diminutive kućica, in the accusative.',
      },
      {
        q: 'Spot the error: "Moj brat je igratelj nogometa."',
        options: [
          'the doer of igrati is igrač — igratelj does not exist',
          'brat should be brata',
          'nogometa should be nogomet',
          'nothing is wrong',
        ],
        correct: 0,
        explanation: 'The agent suffix is fixed per word: igrati takes -ač.',
      },
      {
        q: 'Which suffix makes an abstract noun from an adjective, as in "hrabrost"?',
        options: ['-ač', '-ost', '-ica', '-telj'],
        correct: 1,
        explanation: 'hrabar → hrabrost, mlad → mladost: -ost.',
      },
      {
        q: 'What does "opisati" mean, from o- + pisati?',
        options: ['to sign', 'to copy', 'to describe', 'to enrol'],
        correct: 2,
        explanation: 'o- (around, about) + pisati: to describe.',
      },
    ],
    vocab: [
      ['tvorba riječi', 'word formation', 'Tvorba riječi pomaže nam razumjeti nepoznate riječi.'],
      ['predmetak', 'prefix', 'Predmetak pre- često znači ponavljanje ili prijenos.'],
      ['dometak', 'suffix', 'Dometak -telj označava vršitelja radnje.'],
      ['potpisati', 'to sign', 'Potpišite ugovor na dnu stranice.'],
      ['upisati se', 'to enrol', 'Upisala se na sveučilište u Splitu.'],
      ['prepisati', 'to copy', 'Prepisao je zadaću od prijatelja.'],
      ['slušatelj', 'listener', 'Slušatelji su pozorno pratili predavanje.'],
      ['hrabrost', 'courage', 'Za takvu odluku treba mnogo hrabrosti.'],
    ],
  },

  'word-order-emphasis': {
    worked: [
      {
        title: 'Answering the Question Asked',
        problem: 'Pitanje: "Što je Ana kupila na tržnici?" Odgovori punom rečenicom: trešnje.',
        en: 'Question: What did Ana buy at the market? Answer in a full sentence: cherries.',
        steps: [
          {
            label: 'Find the new information',
            text: 'The question already knows Ana and the market. Only the thing bought is new: trešnje.',
          },
          {
            label: 'Spotlight at the end',
            text: 'New information goes last, so trešnje closes the sentence.',
          },
          {
            label: 'Known information first',
            text: 'Ana opens as the topic, and na tržnici follows as known background.',
          },
          { label: 'Anchor the clitic', text: 'je sits in second position, right after Ana.' },
        ],
        answer: 'Ana je na tržnici kupila trešnje.',
      },
      {
        title: 'Contrast With a Full Pronoun',
        problem: 'Reci: "I will lend it (m.) to HER, not to him."',
        en: 'Say: I will lend it to her, not to him.',
        steps: [
          {
            label: 'Choose the stressed form',
            text: 'Contrast needs the full pronoun. posuditi takes the dative, so njoj — not the clitic joj.',
          },
          { label: 'Front it', text: 'The contrasted word opens the sentence as the first unit.' },
          {
            label: 'Keep the cluster second',
            text: 'ću (the auxiliary) and then ga (the accusative) follow the fronted njoj.',
          },
          {
            label: 'Close the contrast',
            text: 'The rejected alternative takes the full form too: ne njemu.',
          },
        ],
        answer: 'Njoj ću ga posuditi, ne njemu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Someone asks "Tko je ispekao ovu tortu?" Which answer puts the new information in the spotlight?',
          options: [
            'Baka je ispekla tortu.',
            'Tortu je ispekla baka.',
            'Tortu baka je ispekla.',
            'Je tortu ispekla baka.',
          ],
          correct: 1,
          hint: 'The word that answers "who" belongs at the end, and je still needs second position.',
          explanation:
            'Tortu je ispekla baka — the answer last, je after the first unit. The last two misplace the clitic; the first buries the answer.',
        },
        {
          q: 'Complete for contrast: "___ sam to rekao, ne njoj." (to HIM)',
          options: ['Mu', 'Njemu', 'Njega', 'On'],
          correct: 1,
          hint: 'reći takes the person told in the dative, and a clitic can neither carry contrast nor open a sentence.',
          explanation:
            'Njemu — the full dative. mu is a clitic, njega is accusative, on is nominative.',
        },
        {
          q: 'Which sentence fronts the object for contrast correctly?',
          options: [
            'Juhu sam pojela, ali meso nisam.',
            'Juhu pojela sam, ali meso nisam.',
            'Sam juhu pojela, ali meso nisam.',
            'Juhu ja sam pojela, ali meso nisam.',
          ],
          correct: 0,
          hint: 'The fronted object is the first unit, and the clitic follows it at once.',
          explanation:
            'Juhu sam pojela — sam right after the fronted object. The others push the clitic out of second position.',
        },
        {
          q: 'Someone asks "Kamo Marko ide sutra?" Which answer has the native order?',
          options: [
            'U Split Marko ide sutra.',
            'Marko ide u Split sutra.',
            'Sutra u Split Marko ide.',
            'Marko sutra ide u Split.',
          ],
          correct: 3,
          hint: 'Only the destination is new, so it takes the final position.',
          explanation:
            'Marko sutra ide u Split — the known Marko and sutra first, the answer u Split last.',
        },
        {
          q: 'Someone asks "Gdje radi tvoja sestra?" Which answer puts the new information last?',
          options: [
            'U bolnici radi moja sestra.',
            'Moja sestra radi u bolnici.',
            'Radi u bolnici moja sestra.',
            'Moja sestra u bolnici radi.',
          ],
          correct: 1,
          hint: 'The question is about the place, so the place is the spotlight.',
          explanation: 'Moja sestra radi u bolnici — known information first, the answer last.',
        },
        {
          q: 'Which sentence fronts a word for genuine contrast?',
          options: [
            'Kavu pijem ujutro, a čaj navečer.',
            'Kavu sam kupio jer sam htio kavu.',
            'Kavu pijem.',
            'Pijem ujutro kavu.',
          ],
          correct: 0,
          hint: 'Fronting is justified when a second item is set against the first.',
          explanation: 'Kavu … a čaj — the fronted object is contrasted with another one.',
        },
        {
          q: 'Complete: "Nije pitao ___, nego tebe." (ME)',
          options: ['me', 'mene', 'mi', 'ja'],
          correct: 1,
          hint: 'Contrast needs the full, stressed form of the pronoun.',
          explanation:
            'mene, not the clitic me — the contrast with tebe demands the stressed form.',
        },
        {
          q: 'Which reordering breaks a fixed rule?',
          options: [
            'Sutra ćemo ići u kino.',
            'U kino ćemo ići sutra.',
            'Ići ćemo sutra u kino.',
            'Ćemo sutra ići u kino.',
          ],
          correct: 3,
          hint: 'Word order is free except for one element that can never open a sentence.',
          explanation: 'ćemo is a clitic, and a clitic cannot stand first.',
        },
        {
          type: 'type',
          q: 'Vidio sam ____, a ne tvog brata. (YOU — the stressed form)',
          answer: 'tebe',
          hint: 'Under contrast the clitic te gives way to its full form.',
          explanation: 'Vidio sam tebe — the stressed accusative carries the contrast.',
        },
        {
          type: 'type',
          q: 'Knjigu ____ dala, ne bilježnicu. (I (f.) gave it to him — the auxiliary and the dative)',
          answer: 'sam mu',
          hint: 'The fronted object takes the first slot; the cluster follows it at once, auxiliary before the pronoun.',
          explanation: 'Knjigu sam mu dala — the cluster stays glued to second position.',
        },
        {
          type: 'type',
          q: '____ vjerujem, a njoj ne. (HIM I trust — vjerovati takes the dative)',
          answer: 'Njemu',
          hint: 'The stressed dative of on, placed first for contrast.',
          explanation: 'Njemu vjerujem — the full dative, fronted against njoj.',
        },
        {
          type: 'type',
          q: 'Marko je rekao ____, a ne meni. (to HER — the stressed dative)',
          answer: 'njoj',
          hint: 'Contrast with meni needs the full dative, not the clitic joj.',
          explanation: 'rekao je njoj, a ne meni — both halves of a contrast take full forms.',
        },
      ],
    },
    checkB: [
      {
        q: "Someone asks 'Što je Ana kupila?'. Which answer has the native order?",
        options: [
          'Kruh je kupila Ana.',
          'Ana je kupila kruh.',
          'Kupila je kruh Ana.',
          'Ana kruh je kupila.',
        ],
        correct: 1,
        explanation:
          'The question is about what she bought, so kruh — the new information — goes last.',
      },
      {
        q: "Complete for contrast: '___ se to ne sviđa, a tebi se sviđa.' (HIM it does not please)",
        options: ['On', 'Mu', 'Njemu', 'Njega'],
        correct: 2,
        explanation:
          'sviđati se takes the dative, and contrast needs the full stressed form, not the clitic mu.',
      },
      {
        q: 'Which sentence keeps the clitics in second position after a fronted object?',
        options: [
          'Pismo mu sam poslao, ne paket.',
          'Pismo poslao sam mu, ne paket.',
          'Sam mu pismo poslao, ne paket.',
          'Pismo sam mu poslao, ne paket.',
        ],
        correct: 3,
        explanation:
          'The fronted object takes the first slot and the cluster sam mu follows it directly.',
      },
      {
        q: "Asked 'Tko je dobio nagradu?', a learner answers 'Marko je dobio nagradu.' What would sound more native?",
        options: [
          'Nagradu je dobio Marko — the new information goes last',
          'Dobio je nagradu Markom',
          'Marko nagradu je dobio',
          'nothing — that order is already best',
        ],
        correct: 0,
        explanation: 'The answer to "who" is Marko, so he belongs in the spotlight at the end.',
      },
      {
        q: "What does the stressed pronoun add in 'Ti si to napravio'?",
        options: [
          'nothing — it is the neutral order',
          'emphasis: YOU did it, not someone else',
          'a question',
          'politeness',
        ],
        correct: 1,
        explanation: 'A dropped pronoun is neutral; saying it aloud adds emphasis or contrast.',
      },
      {
        q: "Complete: 'Čekali su ___, a ne nju.' (HIM)",
        options: ['ga', 'njega', 'mu', 'on'],
        correct: 1,
        explanation: 'Under contrast the full accusative njega replaces the clitic ga.',
      },
    ],
    vocab: [
      ['naglasiti', 'to emphasise', 'Želio sam naglasiti da nisam ja kriv.'],
      ['isticati', 'to highlight, stress', 'Hrvatski ističe novu informaciju na kraju rečenice.'],
      ['suprotnost', 'contrast, opposite', 'Stavio je knjigu na početak da naglasi suprotnost.'],
      ['razbiti', 'to break, smash', 'Prozor je razbio Ivan, a ne Marko.'],
      ['posuditi', 'to lend, borrow', 'Knjigu ti mogu posuditi, ali ne bilježnicu.'],
      ['časopis', 'magazine', 'Dao sam ti knjigu, a ne časopis.'],
      ['odmarati se', 'to rest', 'Sutra ćemo o tome, danas se odmaramo.'],
      ['redoslijed', 'order, sequence', 'Redoslijed riječi mijenja smisao rečenice.'],
    ],
  },

  'collective-numbers': {
    worked: [
      {
        title: 'A Mixed Group as Subject',
        problem: 'Reci: "Four students (two men and two women) passed the exam."',
        en: 'Say: Four students (two men and two women) passed the exam.',
        steps: [
          {
            label: 'Mixed or not?',
            text: 'Men and women together are a mixed group, so the collective četvero, not četiri.',
          },
          {
            label: 'The counted noun',
            text: 'A collective governs the genitive plural: četvero studenata.',
          },
          {
            label: 'Verb agreement',
            text: 'With an -oje / -ero collective the standard verb is neuter singular: položilo je.',
          },
        ],
        answer: 'Četvero studenata položilo je ispit.',
      },
      {
        title: 'A Male Group as Object',
        problem: 'Reci: "In town I met three friends (all men)."',
        en: 'Say: In town I met three friends (all men).',
        steps: [
          { label: 'Choose the form', text: 'An all-male group counted as a group is trojica.' },
          {
            label: 'Decline the numeral',
            text: 'trojica declines like a feminine noun in -a. As the object of sresti it takes the accusative: trojicu.',
          },
          { label: 'The counted noun', text: 'After it the noun is genitive plural: prijatelja.' },
          {
            label: 'Place the clitic',
            text: 'sam sits in second position after the fronted U gradu.',
          },
        ],
        answer: 'U gradu sam sreo trojicu prijatelja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Baka ima ___ unučadi." (four grandchildren)',
          options: ['četiri', 'četvero', 'četvorica', 'četvrto'],
          correct: 1,
          hint: 'unučad is a collective noun, and it takes the collective numeral.',
          explanation:
            'četvero unučadi — a collective numeral with the genitive of the collective noun, like četvero djece.',
        },
        {
          q: 'Complete: "___ smo išli u kino." (the two of us — a man and a woman)',
          options: ['Nas dvoje', 'Nas dva', 'Nas dvojica', 'Nas dvije'],
          correct: 0,
          hint: 'A mixed pair takes the form that is neither all-male nor all-female.',
          explanation:
            'nas dvoje for a mixed pair, with a first-person plural verb. dvojica is two men, dvije two women.',
        },
        {
          q: 'A husband and wife both work from home. Complete: "___ rade od kuće."',
          options: ['Oba', 'Obje', 'Obojica', 'Oboje'],
          correct: 3,
          hint: 'You need "both" for a pair that is male and female together.',
          explanation:
            'oboje is the mixed form. obojica is both men, obje both women, oba both (masculine or neuter things).',
        },
        {
          q: 'Complete: "Nagradu smo dali ___ mladića." (to the two young men)',
          options: ['dvojica', 'dvojici', 'dvoje', 'dvama'],
          correct: 1,
          hint: 'The male-group numeral declines like žena, and dati takes the recipient in the dative.',
          explanation: 'dvojici mladića — the dative of dvojica, followed by the genitive plural.',
        },
        {
          q: 'Complete: "___ studenata čekala su ispred." (three male students)',
          options: ['Troje', 'Trojica', 'Tri', 'Troja'],
          correct: 1,
          hint: 'A male group with a plural verb and the genitive plural studenata.',
          explanation: 'Trojica studenata — tri would take studenta.',
        },
        {
          q: 'Which word means "both women"?',
          options: ['oboje', 'obojica', 'obje', 'oba'],
          correct: 2,
          hint: 'The feminine form of "both" is the plain one, not a collective.',
          explanation: 'obje — both women.',
        },
        {
          q: 'Complete: "Šestero nas je ___ na more."',
          options: ['otišlo', 'otišli smo', 'otišla', 'otišao'],
          correct: 0,
          hint: 'With -ero collectives the standard verb is neuter singular.',
          explanation: 'Šestero nas je otišlo.',
        },
        {
          q: 'Which is correct for two sisters?',
          options: ['dvojica sestara', 'dvije sestre', 'dvoje sestre', 'dvojice sestara'],
          correct: 1,
          hint: 'Two women are counted with the ordinary feminine numeral.',
          explanation: 'dvije sestre.',
        },
        {
          type: 'type',
          q: 'Imaju ____ unučadi. (three grandchildren — the collective numeral)',
          answer: 'troje',
          hint: 'A mixed or neutral group takes the -oje collective.',
          explanation: 'troje unučadi — collective + genitive.',
        },
        {
          type: 'type',
          q: 'Na sastanak su došla ____ direktora. (two directors — men, counted as a group)',
          answer: 'dvojica',
          hint: 'The male-group collective ends in -ica.',
          explanation: 'dvojica direktora — genitive plural after it.',
        },
        {
          type: 'type',
          q: 'Troje ____ igralo se u parku. (children — djeca)',
          answer: 'djece',
          hint: 'A collective numeral governs the genitive plural.',
          explanation: 'troje djece.',
        },
        {
          type: 'type',
          q: '____ braće rade u istoj tvrtki. (Both brothers — a male group)',
          answer: 'Obojica',
          hint: 'Both men: the male-group form of "both".',
          explanation: 'Obojica braće.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Marko i Ivana imaju ___." (four children)',
        options: ['četiri djece', 'četvero djece', 'četvorica djece', 'četvero djeca'],
        correct: 1,
        explanation:
          'A mixed or neutral group takes the collective, with the genitive plural: četvero djece.',
      },
      {
        q: 'Complete: "U sobu su ušla ___ policajca." (two policemen)',
        options: ['dvoje', 'dva', 'dvoja', 'dvije'],
        correct: 1,
        explanation:
          'With the form policajca the ordinary numeral dva fits; dvojica would need policajaca.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Nas troje idemo zajedno.',
          'Nas troje idete zajedno.',
          'Nas trojicu idemo zajedno.',
          'Nas troje ide zajedno.',
        ],
        correct: 0,
        explanation: 'nas troje (the three of us) takes a 1st-person plural verb.',
      },
      {
        q: 'Spot the error: "Oboje braće rade u Zagrebu."',
        options: [
          'nothing',
          'two brothers are a male group: obojica braće',
          'braće should be braća',
          'rade should be radi',
        ],
        correct: 1,
        explanation: 'oboje is for a mixed pair; two men are obojica.',
      },
      {
        q: 'What does "obojica" refer to?',
        options: ['two women', 'a man and a woman', 'two men', 'any two things'],
        correct: 2,
        explanation: 'The -ica collectives count male groups.',
      },
      {
        q: 'Complete: "Nas ___ smo braća." (the two of us — two men)',
        options: ['dvoje', 'dva', 'dvije', 'dvojica'],
        correct: 3,
        explanation: 'Two men as a group are dvojica: nas dvojica.',
      },
    ],
    vocab: [
      ['zbirni broj', 'collective number', 'Dvoje i troje su zbirni brojevi.'],
      ['dvoje', 'two (a mixed group)', 'Imaju dvoje djece.'],
      ['dvojica', 'two (men)', 'Dvojica prijatelja otvorila su kafić.'],
      ['oboje', 'both (a mixed pair)', 'Oboje su u pravu.'],
      ['obojica', 'both (men)', 'Obojica braće rade u istoj tvrtki.'],
      ['unučad', 'grandchildren', 'Baka ima četvero unučadi.'],
      ['putnik', 'passenger', 'Petero putnika čekalo je na peronu.'],
      ['peron', 'platform', 'Vlak stiže na drugi peron.'],
    ],
  },

  'verb-government': {
    worked: [
      {
        title: 'One Verb, Two Meanings',
        problem: 'Prevedi: "The new timetable suits me. I will answer the letter tomorrow."',
        en: 'Translate: The new timetable suits me. I will answer the letter tomorrow.',
        steps: [
          {
            label: 'Spot the verb',
            text: 'Both English verbs are odgovarati / odgovoriti in Croatian. The case decides which meaning you get.',
          },
          {
            label: 'Suit: the dative',
            text: 'To suit someone is odgovarati + dative, and the thing that suits is the subject: raspored mi odgovara.',
          },
          {
            label: 'Answer: na + accusative',
            text: 'To answer something is odgovoriti na + accusative: na pismo. The perfective fits a single future act.',
          },
          {
            label: 'Place the clitics',
            text: 'mi goes after the first unit Novi raspored; ću goes after Sutra.',
          },
        ],
        answer: 'Novi raspored mi odgovara. Sutra ću odgovoriti na pismo.',
      },
      {
        title: 'Two Governed Verbs in One Sentence',
        problem: 'Reci: "I got rid of my old car and now I use a bicycle."',
        en: 'Say: I got rid of my old car and now I use a bicycle.',
        steps: [
          {
            label: 'riješiti se',
            text: 'To get rid of takes the genitive: starog auta (auto → auta).',
          },
          { label: 'koristiti se', text: 'To use, with se, takes the instrumental: biciklom.' },
          {
            label: 'Place the clitics',
            text: 'sam and se follow the first stressed word: Riješio sam se…; in the second clause se follows sad.',
          },
        ],
        answer: 'Riješio sam se starog auta i sad se koristim biciklom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "To se ne tiče ___." (your job — tvoj posao)',
          options: ['tvoj posao', 'tvojeg posla', 'tvojem poslu', 'tvojim poslom'],
          correct: 1,
          hint: 'ticati se is one of the reflexive verbs that take the genitive.',
          explanation: 'ticati se + genitive: to se ne tiče tvojeg posla.',
        },
        {
          q: 'Complete: "Uprava je prijetila ___ otkazom." (the workers — radnici)',
          options: ['radnike', 'radnika', 'radnicima', 'radnici'],
          correct: 2,
          hint: 'prijetiti takes the person threatened in the dative and the threat in the instrumental.',
          explanation: 'radnicima — dative plural. otkazom is the instrumental of the threat.',
        },
        {
          q: 'Complete: "Sumnjam ___ njegovu iskrenost."',
          options: ['o', 'u', 'na', 'za'],
          correct: 1,
          hint: 'sumnjati is one of the verbs whose preposition is part of it, and it takes the accusative.',
          explanation: 'sumnjati u + accusative: sumnjam u njegovu iskrenost.',
        },
        {
          q: '"Čime se bavite?" — "Bavim se ___." (translation — prevođenje)',
          options: ['prevođenje', 'prevođenja', 'prevođenju', 'prevođenjem'],
          correct: 3,
          hint: 'The question word čime already tells you which case baviti se demands.',
          explanation:
            'prevođenjem — baviti se governs the instrumental, which is why the question is čime.',
        },
        {
          q: 'Complete: "Odrekla se ___." (her share — svoj dio)',
          options: ['svoj dio', 'svojeg dijela', 'svojem dijelu', 'svojim dijelom'],
          correct: 1,
          hint: 'Most reflexive verbs of this kind take the genitive.',
          explanation: 'odreći se + genitive: odrekla se svojeg dijela.',
        },
        {
          q: 'Complete: "Ne smeta ___ hladnoća." (the cold does not bother us)',
          options: ['nas', 'nam', 'mi', 'nama je'],
          correct: 1,
          hint: 'smetati puts the bothered person in the dative, with the annoyance as subject.',
          explanation: 'Ne smeta nam hladnoća — hladnoća is the subject, we are the dative.',
        },
        {
          q: 'Complete: "Uspjeh ovisi ___ upornosti."',
          options: ['na', 'od', 'o', 'u'],
          correct: 2,
          hint: 'The preposition of ovisiti comes from the verb, not from English "on".',
          explanation: 'ovisiti o + locative: ovisi o upornosti.',
        },
        {
          q: 'Which verb takes the instrumental?',
          options: ['vjerovati', 'koristiti se', 'bojati se', 'radovati se'],
          correct: 1,
          hint: 'Think of the verb for using a tool or a dictionary.',
          explanation: 'koristiti se + instrumental: koristim se rječnikom.',
        },
        {
          type: 'type',
          q: 'Bojim se ____. (heights — visina)',
          answer: 'visine',
          hint: 'bojati se governs the genitive singular.',
          explanation: 'Bojim se visine — the genitive of visina.',
        },
        {
          type: 'type',
          q: 'Ne vjerujem ____. (the politicians — političari)',
          answer: 'političarima',
          hint: 'vjerovati takes the dative, here plural.',
          explanation: 'Ne vjerujem političarima — dative plural.',
        },
        {
          type: 'type',
          q: 'Upravlja ____ već deset godina. (the hotel — hotel)',
          answer: 'hotelom',
          hint: 'upravljati takes the instrumental.',
          explanation: 'Upravlja hotelom — the instrumental of hotel.',
        },
        {
          type: 'type',
          q: 'Riješili smo se ____. (the old car — stari auto)',
          answer: 'starog auta',
          accept: ['staroga auta', 'starog automobila'],
          hint: 'riješiti se governs the genitive; the adjective and the noun both change.',
          explanation: 'Riješili smo se starog auta — genitive after riješiti se.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sjećam se ___." (that summer — to ljeto)',
        options: ['to ljeto', 'tog ljeta', 'tom ljetu', 'tim ljetom'],
        correct: 1,
        explanation: 'sjećati se governs the genitive: tog ljeta.',
      },
      {
        q: 'Complete: "Pomozi ___ s torbama." (help her)',
        options: ['ju', 'nju', 'joj', 'je'],
        correct: 2,
        explanation: 'pomoći takes the dative — pomozi joj, never an accusative.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Sumnjam u njegovu priču.',
          'Sumnjam njegove priče.',
          'Sumnjam njegovu priču.',
          'Sumnjam o njegovoj priči.',
        ],
        correct: 0,
        explanation: 'sumnjati u + accusative is the verb of doubting.',
      },
      {
        q: 'What is wrong with "Bavi se glazba i vjeruje svoj trener"?',
        options: [
          'nothing',
          'both objects need their case: glazbom (instrumental) and svojem treneru (dative)',
          'only glazba is wrong',
          'the two verbs should swap cases',
        ],
        correct: 1,
        explanation: 'baviti se takes the instrumental and vjerovati the dative.',
      },
      {
        q: 'Complete: "Radujem se ___." (your visit — tvoj posjet)',
        options: ['tvoj posjet', 'tvojeg posjeta', 'tvojem posjetu', 'tvojim posjetom'],
        correct: 2,
        explanation: 'radovati se takes the dative: tvojem (tvom) posjetu.',
      },
      {
        q: 'Complete: "Projekt se temelji ___ novim istraživanjima."',
        options: ['u', 'o', 'od', 'na'],
        correct: 3,
        explanation: 'temeljiti se na + locative — the preposition is part of the verb.',
      },
    ],
    vocab: [
      ['rekcija', 'verb government', 'Rekcija glagola određuje padež koji slijedi.'],
      ['bojati se', 'to fear (+ gen.)', 'Mnogi se boje mraka.'],
      ['radovati se', 'to look forward to (+ dat.)', 'Radujem se našem sljedećem susretu.'],
      ['baviti se', 'to be engaged in (+ instr.)', 'Već se godinama bavi fotografijom.'],
      ['ovisiti o', 'to depend on (+ loc.)', 'Sve ovisi o okolnostima.'],
      ['sumnjati u', 'to doubt (+ acc.)', 'Sumnjam u njegovu iskrenost.'],
      ['prijetiti', 'to threaten (+ dat.)', 'Poplava prijeti obalnim selima.'],
      ['odreći se', 'to renounce (+ gen.)', 'Odrekao se nasljedstva u korist sestre.'],
    ],
  },

  'aspect-nuance': {
    worked: [
      {
        title: 'Someone Has Been at My Bike',
        problem:
          'Bicikl je na mjestu, ali sjedalo je pomaknuto. Pitaj: "Who has been borrowing my bike?"',
        en: 'The bike is back in place, but the seat has been moved. Ask who borrowed it.',
        steps: [
          {
            label: 'Is the result standing?',
            text: 'No: the bike was borrowed and brought back. The borrowing has been undone.',
          },
          {
            label: 'Choose the aspect',
            text: 'For a momentary act whose result was undone, Croatian uses the imperfective: posuđivati, not posuditi.',
          },
          {
            label: 'Compare',
            text: 'Tko je posudio moj bicikl? would imply someone still has it — the wrong question when it is standing in front of you.',
          },
        ],
        answer: 'Tko je posuđivao moj bicikl?',
      },
      {
        title: 'Inviting, Not Ordering',
        problem: 'Gosti sjede za stolom, hrana je pred njima. Ponudi ih da se posluže.',
        en: 'The guests are at the table with the food in front of them. Invite them to help themselves.',
        steps: [
          {
            label: 'Command or invitation?',
            text: 'You are not giving one instruction; you are opening a situation that continues. That is the territory of the imperfective imperative.',
          },
          {
            label: 'Choose the verb',
            text: 'uzeti → uzmite is a single brisk act ("take it"). uzimati → uzimajte is the host saying "help yourselves".',
          },
          {
            label: 'Add the offer',
            text: 'izvolite opens it politely, and the imperfective imperative follows.',
          },
        ],
        answer: 'Izvolite, uzimajte!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'The light is off now, but someone switched it on while you were out. "Netko je ___ svjetlo dok me nije bilo."',
          options: ['upalio', 'palio', 'upaljuje', 'paliti'],
          correct: 1,
          hint: 'The result was undone. Which aspect of a momentary verb implies that?',
          explanation:
            'palio — the imperfective of a momentary act implies the light went off again. upalio would mean it is still on.',
        },
        {
          q: 'Complete: "Kad ___ posao, uvijek odem na kavu." (whenever I have finished)',
          options: ['završio', 'završim', 'završiti', 'završih'],
          correct: 1,
          hint: 'In a general statement a perfective PRESENT describes what typically happens.',
          explanation:
            'završim — a perfective present in a general truth: whenever I finish. završih is a literary aorist, and the other two cannot stand after kad here.',
        },
        {
          q: 'Which verb is biaspectual?',
          options: ['analizirati', 'napisati', 'dati', 'doći'],
          correct: 0,
          hint: 'Look for the international suffix that usually leaves aspect to context.',
          explanation:
            'analizirati, like most -irati verbs, is both imperfective and perfective. The other three are perfective only.',
        },
        {
          q: 'Complete: "Jučer sam ___ pismo od bake." (received)',
          options: ['imao', 'dobivati', 'dobio', 'imam'],
          correct: 2,
          hint: 'imati is to have, not to come to have. You need the verb for the act of receiving, in the aspect of a single event.',
          explanation:
            'dobio — dobiti is to receive, a separate act from imati, and one completed receipt is perfective.',
        },
        {
          q: 'The postman came this morning and has gone. "Jutros je ___ poštar."',
          options: ['došao', 'dolazio', 'dolazi', 'će doći'],
          correct: 1,
          hint: 'He came and is gone again — the imperfective of a momentary act says the result is undone.',
          explanation: 'Jutros je dolazio poštar — he came and left.',
        },
        {
          q: 'Complete: "Tek sam jučer ___ da se seliš." (found out)',
          options: ['znao', 'poznavao', 'saznao', 'naučio'],
          correct: 2,
          hint: 'znati is a state; the verb for getting the fact is a separate word.',
          explanation: 'saznao — finding a fact out, not a completed "knowing".',
        },
        {
          q: 'Which is biaspectual?',
          options: ['kupiti', 'ručati', 'napisati', 'doći'],
          correct: 1,
          hint: 'One of these can describe a single meal or a daily habit in the same form.',
          explanation: 'ručati is biaspectual: Ručao sam can be one lunch or a habit.',
        },
        {
          q: '"Ako zakasniš, propustiš početak." What does the perfective present describe?',
          options: [
            'a single past event',
            'what typically happens',
            'a command',
            'something happening right now',
          ],
          correct: 1,
          hint: 'In a general conditional the perfective present is not a prediction.',
          explanation: 'It states what usually follows: if you are late, you miss the start.',
        },
        {
          type: 'type',
          q: 'Cijelu sam noć ____ roman, ali ga nisam dovršila. (was reading — from the pair čitati / pročitati)',
          answer: 'čitala',
          hint: 'The book is unfinished, so the process form; the speaker is a woman.',
          explanation: 'čitala — the imperfective, because the reading did not reach its result.',
        },
        {
          type: 'type',
          q: 'Kad ____ ispit, idemo na more. (when you have passed — položiti)',
          answer: 'položiš',
          hint: 'A completed future condition: the perfective present, second person.',
          explanation:
            'Kad položiš ispit — the perfective present for a completed step before the next.',
        },
        {
          type: 'type',
          q: 'Tek sam danas ____ istinu. (found out — masculine past)',
          answer: 'saznao',
          hint: 'Not the verb of knowing but its prefixed relative that means discovering.',
          explanation: 'saznao istinu — saznati is to find out.',
        },
        {
          type: 'type',
          q: 'Jutros sam ____ prozor, pa je opet zatvoren. (opened — and it was shut again)',
          answer: 'otvarao',
          hint: 'The result was undone, so the imperfective.',
          explanation: 'otvarao sam prozor — I opened it and it has been shut again.',
        },
      ],
    },
    checkB: [
      {
        q: 'Someone borrowed your bike and has brought it back. Which question asks about that?',
        options: [
          'Tko je uzeo moj bicikl?',
          'Tko je uzimao moj bicikl?',
          'Tko uzima moj bicikl?',
          'Tko će uzeti moj bicikl?',
        ],
        correct: 1,
        explanation:
          'The imperfective of a momentary act implies the result was undone — the bike is back.',
      },
      {
        q: 'Complete: "Tri sam ga puta ___, ali ga nisam uvjerio."',
        options: ['uvjerio', 'uvjeriti', 'uvjeravati', 'uvjeravao'],
        correct: 3,
        explanation:
          'The attempt without the result is imperfective: uvjeravao, but did not uvjeriti.',
      },
      {
        q: 'Which verb is biaspectual?',
        options: ['telefonirati', 'nazvati', 'pisati', 'doći'],
        correct: 0,
        explanation: 'Most verbs in -irati serve both aspects; context decides.',
      },
      {
        q: '"Kad se čovjek umori, sve mu smeta." What is the perfective present describing?',
        options: ['one future event', 'a past event', 'what typically happens', 'a command'],
        correct: 2,
        explanation:
          'In a general statement the perfective present describes what usually happens.',
      },
      {
        q: 'Which pair is NOT a pure aspect pair?',
        options: ['imati / dobiti', 'kupovati / kupiti', 'učiti / naučiti', 'pisati / napisati'],
        correct: 0,
        explanation:
          'imati is to have, dobiti to receive — a different act, not a completed having.',
      },
      {
        q: 'A learner writes "Zatvarao sam vrata, pa je sad toplo u sobi." What is wrong?',
        options: [
          'nothing — the imperfective is the neutral past',
          '"zatvarao" should be "zatvarati"',
          '"toplo" should be "topla"',
          '"zatvarao" implies the door was opened again, which contradicts the warm room; it should be "zatvorio"',
        ],
        correct: 3,
        explanation:
          'The door is shut and the room warm, so the result stands: zatvorio sam vrata.',
      },
    ],
    vocab: [
      ['vid', 'aspect (grammar)', 'Glagolski vid pokazuje je li radnja dovršena.'],
      ['svršen', 'perfective', 'Pročitati je svršeni glagol.'],
      ['nesvršen', 'imperfective', 'Čitati je nesvršeni glagol.'],
      ['dvovidan', 'biaspectual', 'Glagol organizirati je dvovidan.'],
      ['saznati', 'to find out', 'Saznao sam to tek jučer.'],
      ['nagovoriti', 'to persuade', 'Napokon sam ga nagovorio da dođe.'],
      ['majstor', 'repairman, craftsman', 'Jučer je dolazio majstor za perilicu.'],
      ['naspavati se', 'to get a good sleep', 'Kad se naspavam, sve mi je lakše.'],
    ],
  },

  condensation: {
    worked: [
      {
        title: 'Clause to Phrase',
        problem: 'Sažmi za izvješće: "Kad je projekt završio, tim je podnio izvješće."',
        en: 'Condense for a report: When the project ended, the team submitted a report.',
        steps: [
          {
            label: 'Find the clause',
            text: 'Kad je projekt završio is a time clause — the part to compress.',
          },
          { label: 'Make the verbal noun', text: 'završiti gives the noun završetak.' },
          {
            label: 'Choose the preposition',
            text: 'nakon + genitive carries "after": nakon završetka (the fleeting a drops).',
          },
          {
            label: 'Attach the owner',
            text: 'projekt follows in the genitive: nakon završetka projekta. The main clause is unchanged.',
          },
        ],
        answer: 'Nakon završetka projekta tim je podnio izvješće.',
      },
      {
        title: 'Unpacking an Administrative Phrase',
        problem:
          'Raspakiraj u rečenicu: "U svrhu zaštite podataka lozinke se mijenjaju svakih 90 dana."',
        en: 'Unpack into a clause: For the purpose of data protection, passwords are changed every 90 days.',
        steps: [
          {
            label: 'Name the relation',
            text: 'u svrhu + genitive states a purpose, so the clause will be a purpose clause.',
          },
          { label: 'Recover the verb', text: 'zaštita comes from zaštititi — to protect.' },
          {
            label: 'Build the clause',
            text: 'Purpose is da bi + participle. With no agent, the se-passive keeps it impersonal: da bi se zaštitili podaci.',
          },
          {
            label: 'Check the agreement',
            text: 'podaci is masculine plural, so the participle is zaštitili.',
          },
        ],
        answer: 'Da bi se zaštitili podaci, lozinke se mijenjaju svakih 90 dana.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Condense: "Zato što je bila bolesna, nije došla."',
          options: [
            'Zbog bolesti nije došla.',
            'Radi bolesti nije došla.',
            'Zbog bolest nije došla.',
            'Unatoč bolesti nije došla.',
          ],
          correct: 0,
          hint: 'This is a cause, and the preposition of cause governs the genitive.',
          explanation:
            'zbog + genitive for a cause: zbog bolesti. radi is purpose, unatoč is concession, and bolest needs its case.',
        },
        {
          q: 'Condense: "Iako su građani prosvjedovali, zakon je donesen." → "___ građana zakon je donesen."',
          options: ['Unatoč prosvjeda', 'Zbog prosvjeda', 'Unatoč prosvjedima', 'Unatoč prosvjede'],
          correct: 2,
          hint: 'A concession, and this preposition takes the dative — not the case zbog takes.',
          explanation:
            'unatoč + dative: unatoč prosvjedima građana. zbog would turn the protests into the cause.',
        },
        {
          q: 'Which sentence would a Croatian style guide accept?',
          options: [
            'Radi provođenja ispitivanja provedbe mjera osnovan je odbor.',
            'Radi provjere mjera osnovan je odbor.',
            'Radi provođenja provjere provedbe mjera osnovan je odbor.',
            'Radi ispitivanja provođenja provedbe mjera osnovan je odbor.',
          ],
          correct: 1,
          hint: 'Count the verbal nouns standing in a row.',
          explanation:
            'One condensed phrase reads well. Three or four stacked verbal nouns are grammatical and unreadable.',
        },
        {
          q: 'Condense with a verbal adverb: "Kad je ugledala majku, potrčala je prema njoj."',
          options: [
            'Ugledajući majku, potrčala je prema njoj.',
            'Ugledavši majku, potrčala je prema njoj.',
            'Nakon ugledavši majku, potrčala je prema njoj.',
            'Ugledanje majke, potrčala je prema njoj.',
          ],
          correct: 1,
          hint: 'The seeing was complete before the running began, and the subject is shared.',
          explanation:
            'Ugledavši — the past adverbial of the perfective ugledati. The two routes never combine with nakon, and a verbal noun cannot stand alone as a clause.',
        },
        {
          q: 'Condense: "Prije nego što je počela utakmica, igrači su se zagrijali."',
          options: [
            'Prije početka utakmice igrači su se zagrijali.',
            'Prije početak utakmice igrači su se zagrijali.',
            'Prije počevši utakmicu igrači su se zagrijali.',
            'Prije početku utakmice igrači su se zagrijali.',
          ],
          correct: 0,
          hint: 'prije takes the genitive of the noun.',
          explanation: 'prije početka utakmice — genitive after prije.',
        },
        {
          q: 'Which phrase replaces "da bi se smanjili troškovi"?',
          options: [
            'zbog smanjenja troškova',
            'radi smanjenja troškova',
            'unatoč smanjenju troškova',
            'nakon smanjenja troškova',
          ],
          correct: 1,
          hint: 'Purpose, not cause.',
          explanation: 'radi + genitive expresses purpose; zbog expresses cause.',
        },
        {
          q: 'What do style guides object to in "provođenje ispitivanja provedbe mjera"?',
          options: [
            'the genitive case',
            'stacking verbal nouns until the phrase is unreadable',
            'using nouns at all',
            'the word mjera',
          ],
          correct: 1,
          hint: 'Count the nouns and the verbs.',
          explanation: 'Three verbal nouns in a row — condense one clause, not three.',
        },
        {
          q: 'Complete: "___ novog zakona promijenila su se pravila." (With the entry into force — stupanje na snagu)',
          options: [
            'Stupanje na snagu',
            'Stupanjem na snagu',
            'Stupanja na snagu',
            'Stupanju na snagu',
          ],
          correct: 1,
          hint: 'An instrumental verbal noun can open a sentence: "with the X of…".',
          explanation:
            'Stupanjem na snagu novog zakona — the instrumental, like Dolaskom novog trenera.',
        },
        {
          type: 'type',
          q: 'Zbog ____ lijekova ljekarna je zatvorena. (the lack — nedostatak)',
          answer: 'nedostatka',
          hint: 'zbog governs the genitive; the fleeting a drops out.',
          explanation: 'zbog nedostatka — nedostatak loses its a in the genitive.',
        },
        {
          type: 'type',
          q: 'Po ____ u Zagreb javili smo se obitelji. (arrival — dolazak)',
          answer: 'dolasku',
          hint: 'po in the sense of "upon" takes the locative.',
          explanation: 'po dolasku — note the z devoicing to s before -ku.',
        },
        {
          type: 'type',
          q: 'Unatoč ____ vremenu izletnici su krenuli. (bad — loš)',
          answer: 'lošem',
          accept: ['lošemu'],
          hint: 'unatoč governs the dative; the adjective agrees with vremenu.',
          explanation: 'unatoč lošem vremenu — dative singular.',
        },
        {
          type: 'type',
          q: '____ studij, zaposlila se u Rijeci. (Having finished — završiti)',
          answer: 'Završivši',
          hint: 'The verbal adverb of a completed prior action, with a shared subject.',
          explanation: 'Završivši studij — the -vši form.',
        },
      ],
    },
    checkB: [
      {
        q: 'Condense: "Nakon što je završio sastanak, otišao je kući."',
        options: [
          'Nakon završetak sastanka otišao je kući.',
          'Nakon završetka sastanka otišao je kući.',
          'Nakon završio sastanak otišao je kući.',
          'Nakon završetku sastanka otišao je kući.',
        ],
        correct: 1,
        explanation: 'nakon governs the genitive: nakon završetka sastanka.',
      },
      {
        q: 'Complete: "___ nedostatka novca projekt je odgođen."',
        options: ['Jer', 'Zato', 'Zbog', 'Iako'],
        correct: 2,
        explanation: 'A cause expressed as a noun phrase takes zbog + genitive.',
      },
      {
        q: 'Which sentence uses the verbal adverb correctly?',
        options: [
          'Ušavši u ured, zazvonio je telefon.',
          'Ušavši u ured, pozdravila je kolege.',
          'Ušavši u ured, svjetla su bila ugašena.',
          'Ušavši u ured, sastanak je počeo.',
        ],
        correct: 1,
        explanation: 'Only there does the subject who entered also do the greeting.',
      },
      {
        q: 'Expand it back: "Po dolasku u Split nazvao je majku." Which clause does the phrase replace?',
        options: [
          'Kad je stigao u Split',
          'Da bi stigao u Split',
          'Iako je stigao u Split',
          'Ako stigne u Split',
        ],
        correct: 0,
        explanation: 'po dolasku — upon arrival — is a time clause condensed.',
      },
      {
        q: 'In a text message to a friend, which is natural?',
        options: [
          'Po završetku posla javi mi se.',
          'Nakon završetka posla javljanje.',
          'Temeljem završetka posla javi se.',
          'Kad završiš posao, javi mi se.',
        ],
        correct: 3,
        explanation: 'Condensation belongs to formal writing; in a message the clause is right.',
      },
      {
        q: 'Complete: "Unatoč ___ uprave radnici su stupili u štrajk." (despite the promises — obećanja)',
        options: ['obećanja', 'obećanjem', 'obećanjima', 'obećanju'],
        correct: 2,
        explanation: 'unatoč takes the dative, here plural: obećanjima.',
      },
    ],
    vocab: [
      ['sažimanje', 'condensation, compression', 'Sažimanje rečenica tipično je za pisani stil.'],
      ['dolazak', 'arrival', 'Nakon dolaska u hotel otišli smo na večeru.'],
      ['odlazak', 'departure', 'Prije odlaska provjerite jeste li ugasili svjetla.'],
      ['kašnjenje', 'delay', 'Zbog kašnjenja vlaka zakasnio sam na sastanak.'],
      ['poboljšanje', 'improvement', 'Radi poboljšanja usluge uvodimo nove mjere.'],
      ['nedostatak', 'lack, shortage', 'Zbog nedostatka dokaza optuženik je oslobođen.'],
      ['istek', 'expiry', 'Nakon isteka roka zahtjev se više ne prima.'],
      ['završetak', 'end, completion', 'Po završetku pregovora potpisan je ugovor.'],
    ],
  },

  'diminutives-augmentatives': {
    worked: [
      {
        title: 'A Friendly Drink',
        problem: 'Ponudi prijatelju rakiju — toplo, kao domaćin.',
        en: 'Offer a friend a rakija — warmly, as a host.',
        steps: [
          { label: 'The base noun', text: 'rakija is feminine in -a.' },
          { label: 'The diminutive', text: 'Feminine nouns take -ica: rakijica.' },
          {
            label: 'What it signals',
            text: 'Not a smaller glass — a friendly, unhurried one. The suffix does social work, not measurement.',
          },
          { label: 'The case', text: 'popiti takes the accusative: jednu rakijicu.' },
        ],
        answer: 'Hajde, popijmo jednu rakijicu!',
      },
      {
        title: 'A Diminutive in the Wrong Room',
        problem: 'Ispravi službeni e-mail banci: "Molim Vas za sastančić u vezi s ugovorčićem."',
        en: 'Correct an official email to the bank: I would ask you for a "little meeting" about the "little contract".',
        steps: [
          {
            label: 'Read the register',
            text: 'A bank, the Vi-form, a document: the formal register.',
          },
          {
            label: 'Spot the suffixes',
            text: 'sastančić and ugovorčić are diminutives. In an official sentence they read as mockery, not modesty.',
          },
          {
            label: 'Restore the base nouns',
            text: 'sastanak and ugovor, each in its case: za + accusative sastanak, s + instrumental ugovorom.',
          },
        ],
        answer: 'Molim Vas za sastanak u vezi s ugovorom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the diminutive of "pismo"?',
          options: ['pisamce', 'pismić', 'pismica', 'pismina'],
          correct: 0,
          hint: 'pismo is neuter, and neuter nouns take -ce — here with an a to break up the consonants.',
          explanation:
            'pismo → pisamce, as selo → selce. -ić is for masculines, -ica for feminines, and -ina is augmentative.',
        },
        {
          q: 'At a farewell dinner you praise a big-hearted colleague: "On je prava ___!"',
          options: ['čovječuljak', 'čovječina', 'čovjekov', 'čovječe'],
          correct: 1,
          hint: 'You want the augmentative that is warm, not the diminutive that belittles.',
          explanation:
            'čovječina — a big, decent man. čovječuljak is a "little man", dismissive; the others are a possessive and a vocative.',
        },
        {
          q: 'Which is the affectionate form of "Petar"?',
          options: ['Petra', 'Petrić', 'Pero', 'Petrović'],
          correct: 2,
          hint: 'You want the hypocoristic used among family, not a surname or a different name.',
          explanation:
            'Pero is the everyday affectionate form of Petar. Petra is a woman’s name, and Petrić and Petrović are surnames.',
        },
        {
          q: 'Complete: "Sjedili smo za ___ u kutu." (a little table — stol)',
          options: ['stolić', 'stoliću', 'stolića', 'stolićem'],
          correct: 3,
          hint: 'Sitting at a place is location, and za expresses location with the instrumental.',
          explanation:
            'za stolićem — the instrumental after za for location. The suffix changes the tone, not the grammar.',
        },
        {
          q: 'Which is the diminutive of "grad"?',
          options: ['gradić', 'gradica', 'gradina', 'gradurina'],
          correct: 0,
          hint: 'Masculine nouns take -ić.',
          explanation: 'grad → gradić, a little town.',
        },
        {
          q: '"Kakva kišurina!" What does the speaker mean?',
          options: ['a light drizzle', 'a real downpour', 'a pleasant rain', 'rain in the city'],
          correct: 1,
          hint: '-urina makes things big and unpleasant.',
          explanation: 'kišurina — a heavy, unwelcome downpour.',
        },
        {
          q: 'Which request sounds softest?',
          options: [
            'Daj mi olovku.',
            'Možeš li mi dati olovčicu?',
            'Olovka!',
            'Dat ćeš mi olovku.',
          ],
          correct: 1,
          hint: 'A question plus a diminutive lowers the imposition.',
          explanation: 'The diminutive olovčica does social work, not measurement.',
        },
        {
          q: 'Which form would sound mocking in a courtroom?',
          options: ['presuda', 'sudac', 'presudica', 'sud'],
          correct: 2,
          hint: 'A diminutive in a serious register is the giveaway.',
          explanation: 'presudica — a "little judgment" is a jibe.',
        },
        {
          type: 'type',
          q: 'Pojedi još malo ____, sine. (soup — juha; the warm diminutive)',
          answer: 'juhice',
          hint: 'The feminine diminutive in -ica, in the genitive after malo.',
          explanation: 'malo juhice — genitive of juhica.',
        },
        {
          type: 'type',
          q: 'Uđi u ____ na kraju vrta. (the little house — kuća)',
          answer: 'kućicu',
          hint: 'The feminine diminutive in -ica; u of motion takes the accusative.',
          explanation: 'u kućicu — accusative of kućica.',
        },
        {
          type: 'type',
          q: 'Pričekaj ____, samo da nađem ključeve. (a moment — trenutak; the diminutive)',
          answer: 'trenutačak',
          hint: 'The diminutive of trenutak adds -čak.',
          explanation: 'trenutačak — a tiny moment, softening the request.',
        },
        {
          type: 'type',
          q: 'Moj ____ ima tek dvije godine. (dear little son — sin)',
          answer: 'sinčić',
          hint: 'This masculine diminutive needs -čić.',
          explanation: 'sin → sinčić, affectionate.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Hoćemo na ___?" (a relaxed little beer — pivo)',
        options: ['pivce', 'pivca', 'pivcu', 'pivcem'],
        correct: 0,
        explanation:
          'na of going somewhere takes the accusative; the neuter diminutive pivce is unchanged.',
      },
      {
        q: 'Which is the diminutive of "kuća"?',
        options: ['kućić', 'kućica', 'kućerina', 'kućište'],
        correct: 1,
        explanation: 'A feminine noun takes -ica: kućica. kućerina is the augmentative.',
      },
      {
        q: 'What tone does "knjižurina" carry?',
        options: ['affectionate', 'a small booklet', 'formal', 'a hefty, wearying tome'],
        correct: 3,
        explanation: '-urina makes things big and usually adds a sigh or a sneer.',
      },
      {
        q: 'A lawyer writes "ugovorčić" in an official letter. What is off?',
        options: [
          'nothing',
          'a diminutive in a formal register reads as mockery — write ugovor',
          'ugovorčić needs the genitive',
          'it should be ugovorica',
        ],
        correct: 1,
        explanation: 'In a serious register a diminutive sounds mocking, not modest.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Imaš minuticu?', 'Imaš minutica?', 'Imaš minutice?', 'Imaš minuticom?'],
        correct: 0,
        explanation: 'The object of imati is accusative: minuticu.',
      },
      {
        q: 'Which is the affectionate form of "Ana"?',
        options: ['Anić', 'Anina', 'Anica', 'Anov'],
        correct: 2,
        explanation: 'Ana → Anica, as Marija → Marica.',
      },
    ],
    vocab: [
      ['umanjenica', 'diminutive', 'Kavica je umanjenica od kava.'],
      ['uvećanica', 'augmentative', 'Kućerina je uvećanica od kuća.'],
      ['kavica', 'a (friendly) coffee', 'Idemo na kavicu poslije posla?'],
      ['kućica', 'little house', 'Kupili su kućicu na moru.'],
      ['psina', 'big dog; rascal', 'Kakva psina, pojeo je cijeli kolač!'],
      ['čovječina', 'a great guy', 'Tvoj otac je prava čovječina.'],
      ['od milja', 'affectionately', 'Svi ga od milja zovu Ivica.'],
      ['podrugljiv', 'mocking', 'U sudnici bi umanjenica zvučala podrugljivo.'],
    ],
  },

  'clause-types': {
    worked: [
      {
        title: 'Purpose or Result?',
        problem:
          'Izrazi dvaput: "He studied all night (a) in order to pass the exam, (b) so hard that he passed it."',
        en: 'Say it twice: (a) he studied in order to pass; (b) he studied so hard that he passed.',
        steps: [
          {
            label: 'Purpose looks forward',
            text: 'An aim, stated before anyone knows the outcome: kako bi + participle (kako bi položio) or da + present (da položi).',
          },
          {
            label: 'Result looks back',
            text: 'What actually followed: toliko … da + an ordinary past (da je položio).',
          },
          {
            label: 'Mind the verb form',
            text: 'A purpose never takes a bare past. "Učio je da je položio" would state a fact, not an aim.',
          },
        ],
        answer:
          '(a) Učio je cijelu noć kako bi položio ispit. (b) Toliko je učio da je položio ispit.',
      },
      {
        title: 'However Much',
        problem: 'Reci: "However much it costs, we are going."',
        en: 'Say: However much it costs, we are going.',
        steps: [
          {
            label: 'Name the relation',
            text: 'A concession: the obstacle does not change the outcome. ma koliko is the "however much" member of the ma-family.',
          },
          {
            label: 'The verb',
            text: 'ma koliko pairs naturally with the l-participle, as in ma koliko bilo teško: ma koliko koštalo.',
          },
          {
            label: 'The main clause',
            text: 'The main clause follows after a comma, unchanged: idemo.',
          },
        ],
        answer: 'Ma koliko koštalo, idemo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Govori ___ ga netko tjera." (as if someone were chasing him)',
          options: ['kao što', 'kao da', 'tako da', 'kako bi'],
          correct: 1,
          hint: 'You need the manner conjunction for an appearance that is not a fact.',
          explanation:
            'kao da + present: govori kao da ga netko tjera. kao što compares with a fact, tako da gives a result, kako bi a purpose.',
        },
        {
          q: 'Which sentence contains a PURPOSE clause?',
          options: [
            'Bilo je tako hladno da smo ostali kod kuće.',
            'Ostali smo kod kuće da se odmorimo.',
            'Ostali smo kod kuće iako je bilo lijepo.',
            'Ostali smo kod kuće jer je bilo hladno.',
          ],
          correct: 1,
          hint: 'A purpose names an aim, with a present-tense verb after da.',
          explanation: 'da se odmorimo — the aim. The others are result, concession and cause.',
        },
        {
          q: 'Complete in the register of a contract: "___ najmoprimac ne plati najamninu u roku, ugovor se raskida."',
          options: ['Premda', 'Ukoliko', 'Iako', 'Kako bi'],
          correct: 1,
          hint: 'A condition, expressed with the conjunction that belongs to legal and administrative prose.',
          explanation:
            'ukoliko — a formal condition; in conversation it would be ako. premda and iako concede, kako bi states a purpose.',
        },
        {
          q: 'Complete: "___ nazvao, reci da nisam kod kuće." (whoever calls)',
          options: ['Ma tko', 'Ma što', 'Kao da', 'Tako da'],
          correct: 0,
          hint: 'The concessive family with ma, in its member for a person.',
          explanation: 'Ma tko nazvao — no matter who calls. ma što would be "whatever".',
        },
        {
          q: 'Which introduces a PURPOSE clause?',
          options: ['toliko da', 'kako bi', 'premda', 'kao da'],
          correct: 1,
          hint: 'Purpose looks forward to an intention.',
          explanation: 'kako bi — in order to.',
        },
        {
          q: 'Complete: "___ bilo hladno, idemo van." (However cold it is)',
          options: ['Iako koliko', 'Ma koliko', 'Kao da', 'Tako da'],
          correct: 1,
          hint: 'The concessive family built on the particle ma.',
          explanation: 'Ma koliko bilo hladno — however cold.',
        },
        {
          q: 'Complete: "Skuplje je ___ smo mislili."',
          options: ['od', 'kao što', 'nego što', 'kako'],
          correct: 2,
          hint: 'A comparison with a whole clause.',
          explanation: 'nego što + a clause; od takes a noun.',
        },
        {
          q: 'Which sentence has a CONCESSIVE clause?',
          options: [
            'Premda je umoran, nastavlja raditi.',
            'Radi da bi zaradio.',
            'Radi toliko da je iscrpljen.',
            'Radi kao da mu je dvadeset.',
          ],
          correct: 0,
          hint: 'Concession answers "despite what?".',
          explanation: 'premda — although.',
        },
        {
          type: 'type',
          q: 'Ponaša se ____ ništa nije čuo. (as if — two words)',
          answer: 'kao da',
          hint: 'The manner conjunction that describes an appearance.',
          explanation: 'kao da — as if.',
        },
        {
          type: 'type',
          q: 'Bilo je ____ vruće da nismo mogli spavati. (so — the result intensifier)',
          answer: 'toliko',
          accept: ['tako'],
          hint: 'The word before the adjective that sets up the result clause.',
          explanation: 'toliko (or tako) vruće da… — result.',
        },
        {
          type: 'type',
          q: '____ se trudio, nije uspio. (However much — two words)',
          answer: 'Ma koliko',
          accept: ['Koliko god'],
          hint: 'The concessive built on the particle ma.',
          explanation: 'Ma koliko se trudio — however much he tried.',
        },
        {
          type: 'type',
          q: 'Ostavio sam poruku ____ znaš gdje sam. (so that — with the present tense)',
          answer: 'da',
          accept: ['tako da'],
          hint: 'Purpose with a present verb takes the simplest conjunction.',
          explanation: 'da znaš — purpose with the present.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ustao je rano ___ stigao na vlak." (in order to catch the train)',
        options: ['tako da je', 'kako bi', 'iako je', 'kao da je'],
        correct: 1,
        explanation: 'Purpose: kako bi + the participle.',
      },
      {
        q: 'Which sentence expresses a RESULT?',
        options: [
          'Učio je da bi položio.',
          'Učio je kako bi položio.',
          'Učio je premda je bio umoran.',
          'Toliko je učio da je položio s odličnim.',
        ],
        correct: 3,
        explanation: 'toliko … da looks back from the outcome.',
      },
      {
        q: 'Complete: "Govorio je kao da ___ sve." (as if he knew everything)',
        options: ['je znao', 'zna', 'će znati', 'bi znao'],
        correct: 1,
        explanation: 'kao da keeps the present whatever the main clause does.',
      },
      {
        q: 'A colleague texts you about lunch. Which is the natural register?',
        options: [
          'Ako budeš slobodan, idemo na ručak.',
          'Ukoliko budeš slobodan, idemo na ručak.',
          'Da budeš slobodan, idemo na ručak.',
          'Kad bi budeš slobodan, idemo na ručak.',
        ],
        correct: 0,
        explanation: 'ukoliko is formal; in a message use ako.',
      },
      {
        q: 'What is wrong with "Toliko je puhalo kako smo ostali doma"?',
        options: [
          'nothing',
          'a result clause after toliko needs "da": toliko je puhalo da smo ostali doma',
          '"puhalo" should be "puhao"',
          '"doma" should be "kući"',
        ],
        correct: 1,
        explanation: 'The result clause is introduced by da.',
      },
      {
        q: 'Which family does "ma što" belong to?',
        options: ['purpose', 'result', 'concession — whatever, no matter what', 'comparison'],
        correct: 2,
        explanation: 'ma koliko, ma što, ma tko, ma gdje — the concessive family.',
      },
    ],
    vocab: [
      [
        'namjerna rečenica',
        'purpose clause',
        'Namjerna rečenica odgovara na pitanje: s kojom svrhom?',
      ],
      ['posljedična rečenica', 'result clause', 'Posljedična rečenica često počinje s tako da.'],
      ['dopusna rečenica', 'concessive clause', 'Veznik iako uvodi dopusnu rečenicu.'],
      ['pogodbena rečenica', 'conditional clause', 'Ako i ukoliko uvode pogodbenu rečenicu.'],
      ['premda', 'although', 'Premda su cijene porasle, kafići su puni.'],
      ['ukoliko', 'if (formal)', 'Ukoliko ne dostavite dokumente, zahtjev se odbacuje.'],
      ['otirač', 'doormat', 'Ostavio sam ključ pod otiračem.'],
      ['veznik', 'conjunction', 'Veznik određuje odnos među rečenicama.'],
    ],
  },

  'comparison-advanced': {
    worked: [
      {
        title: 'Od or Nego?',
        problem:
          'Reci: "The train is faster than the bus, and it is cheaper to go by train than to drive."',
        en: 'Say: The train is faster than the bus, and it is cheaper to go by train than to drive.',
        steps: [
          {
            label: 'Two nouns',
            text: 'Comparing two nouns directly: od + genitive — brži od autobusa.',
          },
          {
            label: 'Two actions',
            text: 'Comparing two infinitives needs nego: jeftinije je ići vlakom nego voziti.',
          },
          {
            label: 'The comparatives',
            text: 'brz → brži (the adjective, agreeing with vlak); jeftin → jeftinije (the neuter form after je, with no subject noun).',
          },
        ],
        answer: 'Vlak je brži od autobusa, a jeftinije je ići vlakom nego voziti.',
      },
      {
        title: 'The Longer…, the More…',
        problem: 'Reci: "The longer you wait, the more expensive the tickets are."',
        en: 'Say: The longer you wait, the more expensive the tickets are.',
        steps: [
          { label: 'The frame', text: 'Proportion is što + comparative … to + comparative.' },
          {
            label: 'The first comparative',
            text: 'dugo has the irregular comparative dulje: što dulje čekaš.',
          },
          {
            label: 'The second comparative',
            text: 'skup → skuplji, agreeing with karte in the feminine plural: skuplje.',
          },
        ],
        answer: 'Što dulje čekaš, to su karte skuplje.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ svoje sestre, ona ne voli more." (Unlike her sister)',
          options: ['Poput', 'Za razliku od', 'Kao', 'Nalik na'],
          correct: 1,
          hint: 'You need the fixed phrase for contrast — the one that ends in a preposition taking the genitive.',
          explanation:
            'za razliku od + genitive. poput would mean "like her sister", which says the opposite.',
        },
        {
          q: 'Complete: "Dubrovnik je jedan od najljepših ___ na svijetu." (cities)',
          options: ['grad', 'grada', 'gradova', 'gradovima'],
          correct: 2,
          hint: 'jedan od takes the genitive plural.',
          explanation:
            'jedan od najljepših gradova — the genitive plural after od, with the superlative agreeing.',
        },
        {
          q: 'Complete: "Nalik je ___." (She looks like her mother — majka)',
          options: ['na majku', 'majka', 'na majci', 'majkom'],
          correct: 0,
          hint: 'In the construction this lesson teaches, nalik is followed by a preposition with the accusative.',
          explanation:
            'nalik na + accusative: nalik je na majku. The locative na majci would mean "on the mother".',
        },
        {
          q: 'Complete: "Cijene goriva ___." (are getting higher and higher)',
          options: ['su najviše', 'su sve više', 'su više nego', 'su više od svih'],
          correct: 1,
          hint: 'Gradual change takes a single word in front of the comparative.',
          explanation:
            'sve + comparative = more and more: cijene su sve više. najviše is a superlative and the other two need something to compare with.',
        },
        {
          q: 'Complete: "___ oca, i on je postao liječnik." (Like his father)',
          options: ['Kao otac', 'Poput oca', 'Nalik oca', 'Kao oca'],
          correct: 1,
          hint: 'The preposition meaning "like" takes the genitive.',
          explanation: 'poput + genitive: poput oca.',
        },
        {
          q: 'Complete: "To je ___ najbolji restoran u gradu." (by far)',
          options: ['mnogo', 'daleko', 'puno', 'dalje'],
          correct: 1,
          hint: 'An adverb of distance intensifies a superlative.',
          explanation: 'daleko najbolji — by far the best.',
        },
        {
          q: 'Which phrase means "less and less"?',
          options: ['manje od manje', 'sve manje', 'najmanje', 'što manje'],
          correct: 1,
          hint: 'The same small word that builds "more and more" with više.',
          explanation: 'sve manje — gradual decrease.',
        },
        {
          q: 'Complete: "Ova kuća nije ___ tako velika kao naša." (not nearly)',
          options: ['ni izdaleka', 'ni daleko', 'izdaleka', 'daleko ni'],
          correct: 0,
          hint: 'The fixed phrase is built on "from afar" with a negative particle.',
          explanation: 'ni izdaleka — not nearly.',
        },
        {
          type: 'type',
          q: 'Za razliku od ____, Rijeka ima more. (Zagreb)',
          answer: 'Zagreba',
          hint: 'za razliku od governs the genitive.',
          explanation: 'Za razliku od Zagreba.',
        },
        {
          type: 'type',
          q: 'Moj je brat ____ od mene. (taller — visok)',
          answer: 'viši',
          hint: 'An irregular comparative: the regular ending would be wrong.',
          explanation: 'visok → viši.',
        },
        {
          type: 'type',
          q: 'Poput ____, i ona svira klavir. (her mother — njezina majka)',
          answer: 'njezine majke',
          accept: ['svoje majke'],
          hint: 'poput governs the genitive; the possessive agrees too.',
          explanation: 'Poput njezine (svoje) majke.',
        },
        {
          type: 'type',
          q: 'Ovo je jedan od ____ romana koje sam pročitao. (the best — dobar)',
          answer: 'najboljih',
          hint: 'jedan od takes the genitive plural of the superlative.',
          explanation: 'jedan od najboljih romana.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Toranj je ___ od zgrade." (taller)',
        options: ['visokiji', 'viši', 'više visok', 'najviši'],
        correct: 1,
        explanation: 'visok has the irregular comparative viši.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Bolje je šutjeti nego pričati gluposti.',
          'Bolje je šutjeti od pričati gluposti.',
          'Bolje je šutjeti kao pričati gluposti.',
          'Bolje je šutjeti nego pričanje gluposti.',
        ],
        correct: 0,
        explanation: 'Two infinitives are compared with nego; od takes a noun.',
      },
      {
        q: 'Complete: "U usporedbi ___ prošlom godinom, prodaja je porasla."',
        options: ['od', 'sa', 's', 'na'],
        correct: 2,
        explanation: 'u usporedbi s + instrumental; sa only before s, š, z, ž.',
      },
      {
        q: 'Complete: "___ dulje čekaš, ___ si nervozniji."',
        options: ['Kako … tako', 'Sve … sve', 'Koliko … više', 'Što … to'],
        correct: 3,
        explanation: 'Proportion: što … to — the longer, the more.',
      },
      {
        q: 'What is wrong with "Radi kao konobara u hotelu"?',
        options: [
          'nothing',
          'kao does not change the case: radi kao konobar',
          '"u hotelu" should be "u hotel"',
          '"radi" should be "radio"',
        ],
        correct: 1,
        explanation:
          'kao is a conjunction; the noun keeps the case it would have — nominative here.',
      },
      {
        q: 'How do you say "one of the best films"?',
        options: [
          'jedan od najboljih filmova',
          'jedan najboljih filmova',
          'jedan od najbolji filmovi',
          'jedan od najboljeg filma',
        ],
        correct: 0,
        explanation: 'jedan od + genitive plural.',
      },
    ],
    vocab: [
      ['usporedba', 'comparison', 'U usporedbi s prošlom sezonom momčad igra bolje.'],
      ['poput', 'like (+ gen.)', 'Poput svog oca, i on je izabrao medicinu.'],
      ['za razliku od', 'unlike (+ gen.)', 'Za razliku od Zagreba, Split ima blagu zimu.'],
      ['nalik', 'similar, alike', 'Nalik je na majku.'],
      ['blag', 'mild', 'Zime su u Slavoniji sve blaže.'],
      ['kolona', 'line of traffic', 'Satima smo stajali u koloni na autocesti.'],
      ['dvostruko', 'twice as, double', 'Stan u centru stoji dvostruko više.'],
      ['usporediti', 'to compare', 'Usporedite cijene prije kupnje.'],
    ],
  },

  'passive-choices': {
    worked: [
      {
        title: 'Wording a Notice',
        problem: 'Napiši obavijest: "Applications are submitted electronically." (podnositi)',
        en: 'Write a notice: Applications are submitted electronically.',
        steps: [
          {
            label: 'What kind of statement?',
            text: 'An ongoing procedure where the agent does not matter — the default is the se-passive.',
          },
          {
            label: 'The aspect',
            text: 'An ongoing practice takes the imperfective: podnositi, not podnijeti.',
          },
          {
            label: 'Agreement',
            text: 'prijave is plural, so the verb is third-person plural: se podnose.',
          },
          {
            label: 'The manner',
            text: 'Croatian notices say elektroničkim putem (by electronic means).',
          },
        ],
        answer: 'Prijave se podnose elektroničkim putem.',
      },
      {
        title: 'When the Agent Matters',
        problem: 'Popravi prijevod: "Novi most je otvoren od strane gradonačelnika."',
        en: 'Fix the translation: The new bridge was opened by the mayor.',
        steps: [
          {
            label: 'Spot the calque',
            text: 'od strane forces an agent into a passive — the English-shaped sentence a Croatian editor strikes out.',
          },
          {
            label: 'Make the agent the subject',
            text: 'The mayor did the opening, so gradonačelnik becomes the subject of an active verb.',
          },
          {
            label: 'The object',
            text: 'novi most becomes the object; an inanimate masculine accusative looks like the nominative.',
          },
        ],
        answer: 'Gradonačelnik je otvorio novi most.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'The museum is finished and standing. Which sentence says so?',
          options: ['Muzej se gradi.', 'Muzej je izgrađen.', 'Grade muzej.', 'Muzej se izgradi.'],
          correct: 1,
          hint: 'A resulting state takes biti with the passive participle of a perfective verb.',
          explanation:
            'Muzej je izgrađen — the state now. se gradi and grade describe work in progress, and se izgradi does not state a result.',
        },
        {
          q: 'Complete: "Ta je knjiga ___ na dvadeset jezika." (translated — prevesti)',
          options: ['preveden', 'prevedena', 'prevedeno', 'prevedeni'],
          correct: 1,
          hint: 'The participle agrees with the subject like any adjective.',
          explanation: 'knjiga is feminine singular, so the participle is prevedena.',
        },
        {
          q: 'Which is the natural spoken way to say "They say the ferry is late"?',
          options: [
            'Kaže da trajekt kasni.',
            'Kažu da trajekt kasni.',
            'Rečeno je od strane ljudi da trajekt kasni.',
            'Trajekt je rečen da kasni.',
          ],
          correct: 1,
          hint: 'A bare verb with no subject leaves the agent vague — in the plural.',
          explanation:
            'Kažu da… is the third-person plural of spoken Croatian. Kaže points to one particular person; the other two are calques.',
        },
        {
          q: 'Complete the house rule: "U ovom restoranu ___ gotovinom." (payment is in cash only — plaćati)',
          options: ['se plaća samo', 'je plaćeno samo', 'plaća samo', 'su plaćeni samo'],
          correct: 0,
          hint: 'A standing practice with no agent, in the default passive.',
          explanation:
            'se plaća samo gotovinom — the impersonal se-passive. A bare plaća would make the restaurant the one paying.',
        },
        {
          q: 'Which is the ordinary way to say "Wine is made on this island"?',
          options: [
            'Na ovom otoku se proizvodi vino.',
            'Vino se proizvodi od strane otočana.',
            'Na ovom otoku vino je proizvedeno od strane ljudi.',
            'Vino proizvodi se na otoku.',
          ],
          correct: 0,
          hint: 'The neutral default uses se with an imperfective verb.',
          explanation: 'Na ovom otoku se proizvodi vino.',
        },
        {
          q: 'Complete: "Vrata su ___." (are locked — zaključati)',
          options: ['zaključan', 'zaključana', 'zaključani', 'zaključano'],
          correct: 1,
          hint: 'vrata is a neuter plural, so the participle takes the neuter plural ending.',
          explanation: 'Vrata su zaključana.',
        },
        {
          q: "The minister's role matters. Which sentence does Croatian prefer?",
          options: [
            'Odluka je donesena od strane ministra.',
            'Ministar je donio odluku.',
            'Odluka se donijela od ministra.',
            'Donesena je odluka ministrom.',
          ],
          correct: 1,
          hint: 'When the agent matters, make it the subject.',
          explanation: 'Ministar je donio odluku — the plain active.',
        },
        {
          q: 'Which sentence would a Croatian writer NOT use?',
          options: [
            'Kažu da će padati kiša.',
            'Ovdje se ne puši.',
            'Pismo je bilo napisano od strane mene.',
            'Most je otvoren u srpnju.',
          ],
          correct: 2,
          hint: 'Look for an agent squeezed into a passive.',
          explanation: 'An agent phrase in a passive is translationese.',
        },
        {
          type: 'type',
          q: 'Kuća je ____ 1900. godine. (built — izgraditi)',
          answer: 'izgrađena',
          hint: 'A resulting state: the passive participle, agreeing with kuća.',
          explanation: 'Kuća je izgrađena.',
        },
        {
          type: 'type',
          q: 'Ugovori se ____ u uredu na prvom katu. (are signed — potpisivati)',
          answer: 'potpisuju',
          hint: 'The se-passive with the present tense, 3rd plural.',
          explanation: 'Ugovori se potpisuju.',
        },
        {
          type: 'type',
          q: 'Projekti su ____ na vrijeme. (completed — završiti)',
          answer: 'završeni',
          hint: 'A masculine plural participle for a resulting state.',
          explanation: 'Projekti su završeni.',
        },
        {
          type: 'type',
          q: '____ da će cijene opet rasti. (They say — the vague third-person plural)',
          answer: 'Kažu',
          hint: 'The 3rd plural present of kazati, with no subject.',
          explanation: 'Kažu da… — the spoken, agentless option.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is the natural Croatian for "Books are sold here"?',
        options: [
          'Knjige su prodane ovdje.',
          'Ovdje se prodaju knjige.',
          'Ovdje prodaju se knjige.',
          'Knjige se prodaju od strane prodavača.',
        ],
        correct: 1,
        explanation: 'The se-passive is the neutral default for an ongoing process.',
      },
      {
        q: 'Complete: "Most je ___ prošle godine." (renovated — obnoviti)',
        options: ['obnovljena', 'obnovljeno', 'obnovljen', 'obnovljeni'],
        correct: 2,
        explanation: 'most is masculine singular, so obnovljen.',
      },
      {
        q: 'The road is finished and open. Which sentence says that?',
        options: ['Cesta se gradi.', 'Grade cestu.', 'Cestu se gradi.', 'Cesta je izgrađena.'],
        correct: 3,
        explanation: 'A resulting state: biti + the perfective participle.',
      },
      {
        q: 'What is wrong with "Zakon je izglasan od strane Sabora"?',
        options: [
          'nothing',
          'the agent is forced into a passive; write "Sabor je izglasao zakon"',
          '"izglasan" should be "izglasana"',
          '"od strane" should be "od stranu"',
        ],
        correct: 1,
        explanation: 'If the agent matters, make it the subject.',
      },
      {
        q: '"Zovu te na telefon." Which construction is this?',
        options: [
          'a third-person plural with a vague agent',
          'a se-passive',
          'biti + participle',
          'an active with a named agent',
        ],
        correct: 0,
        explanation: 'A bare 3rd plural leaves the agent vague — the spoken option.',
      },
      {
        q: 'Complete the sign: "Ulaznice ___ na blagajni."',
        options: ['su prodane od blagajnice', 'se prodaju', 'prodaju se od strane', 'prodane se'],
        correct: 1,
        explanation: 'A notice uses the se-passive: ulaznice se prodaju.',
      },
    ],
    vocab: [
      ['trpno stanje', 'passive voice', 'Trpno stanje u hrvatskom rijetko navodi vršitelja.'],
      ['vršitelj radnje', 'agent (of an action)', 'U se-pasivu vršitelj radnje ostaje neimenovan.'],
      ['obnoviti', 'to renovate', 'Zgrada je obnovljena prošle godine.'],
      ['izgraditi', 'to build', 'Most je izgrađen 2022. godine.'],
      ['proračun', 'budget', 'Gradsko vijeće usvojilo je proračun.'],
      ['šalter', 'service counter', 'Dokumenti se predaju na šalteru broj tri.'],
      ['blagajna', 'box office, till', 'Karte se prodaju na blagajni.'],
      ['rasprodan', 'sold out', 'Ulaznice su već rasprodane.'],
    ],
  },

  collocations: {
    worked: [
      {
        title: 'Make and Take, Croatian-Style',
        problem: 'Prevedi: "At the meeting we made a decision and took measures."',
        en: 'Translate: At the meeting we made a decision and took measures.',
        steps: [
          {
            label: 'The meeting',
            text: 'The meeting is the setting: na sastanku (na + locative).',
          },
          {
            label: 'The decision',
            text: 'A decision is "brought": donijeti odluku — never napraviti.',
          },
          {
            label: 'The measures',
            text: 'Measures are "undertaken": poduzeti mjere — never uzeti.',
          },
          {
            label: 'Assemble',
            text: 'smo sits second, after the first unit Na sastanku, and both participles agree with mi.',
          },
        ],
        answer: 'Na sastanku smo donijeli odluku i poduzeli mjere.',
      },
      {
        title: 'A Fixed Phrase and Its Case',
        problem: 'Reci: "Given the weather, we will hold the celebration indoors."',
        en: 'Say: Given the weather, we will hold the celebration indoors.',
        steps: [
          {
            label: 'Given',
            text: 's obzirom na is a fixed phrase ending in na + accusative: s obzirom na vrijeme.',
          },
          { label: 'Hold', text: 'A celebration is held the way a meeting is: održati proslavu.' },
          { label: 'Indoors', text: 'u zatvorenom (prostoru) is the usual phrase for indoors.' },
        ],
        answer: 'S obzirom na vrijeme, proslavu ćemo održati u zatvorenom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Crveni križ ___ je pomoć poplavljenim selima." (provided)',
          options: ['dao', 'pružio', 'napravio', 'uzeo'],
          correct: 1,
          hint: 'Help is not simply given in this collocation; it is "extended", like a hand.',
          explanation:
            'pružiti pomoć + dative. dati, napraviti and uzeti are English light verbs carried across.',
        },
        {
          q: 'Which adjective does Croatian pair with "kritika" for "sharp criticism"?',
          options: ['oštra', 'šiljasta', 'zašiljena', 'bodljikava'],
          correct: 0,
          hint: 'The same adjective describes a knife that cuts well.',
          explanation:
            'oštra kritika. The other three describe a pointed or prickly object and do not pair with kritika.',
        },
        {
          q: 'Complete: "Njezin je talent tek u finalu došao do ___." (came to the fore)',
          options: ['izražaj', 'izražaja', 'izražaju', 'izražajem'],
          correct: 1,
          hint: 'The phrase is fixed with do, and do governs the genitive.',
          explanation: 'doći do izražaja — a fixed phrase, genitive after do.',
        },
        {
          q: 'What does "U pravilu stižemo prije osam." mean?',
          options: [
            'As a rule, we arrive before eight.',
            'According to the regulations, we arrive before eight.',
            'We always arrive exactly at eight.',
            'We rarely arrive before eight.',
          ],
          correct: 0,
          hint: 'u pravilu is a fixed phrase whose parts do not predict its meaning — it is about habit, not rules.',
          explanation: 'u pravilu = as a rule, usually. It says nothing about regulations.',
        },
        {
          q: 'Which verb goes with "iskustvo" for "to gain experience"?',
          options: ['dobiti', 'steći', 'uzeti', 'napraviti'],
          correct: 1,
          hint: 'Experience is acquired, not received.',
          explanation: 'steći iskustvo.',
        },
        {
          q: 'Complete: "Vlada mora ___ hitne mjere." (take)',
          options: ['uzeti', 'poduzeti', 'napraviti', 'dati'],
          correct: 1,
          hint: 'Croatian undertakes measures.',
          explanation: 'poduzeti mjere.',
        },
        {
          q: 'Which phrase means "bear in mind"?',
          options: ['imati na umu', 'imati u umu', 'staviti na um', 'imati na glavi'],
          correct: 0,
          hint: 'The fixed phrase uses na with the locative of um.',
          explanation: 'imati na umu.',
        },
        {
          q: 'Complete: "Poplava je ___ veliku štetu." (caused)',
          options: ['nanijela', 'uzela', 'dala', 'postavila'],
          correct: 0,
          hint: 'Damage is inflicted — the verb built on -nijeti.',
          explanation: 'nanijeti štetu.',
        },
        {
          type: 'type',
          q: 'Odbor je ____ odluku jednoglasno. (made — the verb Croatian uses for decisions)',
          answer: 'donio',
          hint: 'Decisions are "brought", not "made"; masculine past.',
          explanation: 'Odbor je donio odluku.',
        },
        {
          type: 'type',
          q: 'Smijem li ____ jedno pitanje? (ask — the collocating verb, infinitive)',
          answer: 'postaviti',
          hint: 'A question is "placed" in Croatian.',
          explanation: 'postaviti pitanje.',
        },
        {
          type: 'type',
          q: 'Liječnici su ____ prvu pomoć ozlijeđenima. (gave — the collocating verb, plural past)',
          answer: 'pružili',
          accept: ['ukazali'],
          hint: 'Help is offered or extended, never simply given.',
          explanation: 'pružiti (ukazati) prvu pomoć.',
        },
        {
          type: 'type',
          q: 'Imala je ____ ulogu u projektu. (key — ključan)',
          answer: 'ključnu',
          hint: 'The adjective agrees with ulogu, feminine accusative.',
          explanation: 'ključna uloga → ključnu ulogu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Tvrtka je ___ odluku o zatvaranju pogona."',
        options: ['napravila', 'donijela', 'uzela', 'dala'],
        correct: 1,
        explanation: 'Decisions are brought: donijeti odluku.',
      },
      {
        q: 'Complete: "Direktor je ___ sastanak s upravom." (held)',
        options: ['napravio', 'dao', 'održao', 'uzeo'],
        correct: 2,
        explanation: 'A meeting is held: održati sastanak.',
      },
      {
        q: 'Complete: "Na konferenciji je ___ zanimljivo pitanje." (asked)',
        options: ['napravio', 'dao', 'uzeo', 'postavio'],
        correct: 3,
        explanation: 'A question is placed: postaviti pitanje.',
      },
      {
        q: 'What is wrong with "S obzirom na okolnostima, to je razumno"?',
        options: [
          'nothing',
          's obzirom na takes the accusative: s obzirom na okolnosti',
          '"razumno" should be "razuman"',
          '"to" should be "ta"',
        ],
        correct: 1,
        explanation: 'The fixed phrase governs the accusative.',
      },
      {
        q: 'Which adjective pairs with "razlika" for "a fundamental difference"?',
        options: ['temeljna', 'oštra', 'stroga', 'tvrda'],
        correct: 0,
        explanation: 'temeljna razlika — the expected pair.',
      },
      {
        q: 'What does "voditi računa o" mean?',
        options: [
          'to keep the accounts',
          'to take care over, pay attention to',
          'to lead a count',
          'to bill someone',
        ],
        correct: 1,
        explanation: 'A fixed phrase: take something into account.',
      },
    ],
    vocab: [
      ['kolokacija', 'collocation', 'Donijeti odluku tipična je kolokacija.'],
      ['donijeti odluku', 'to make a decision', 'Vlada je donijela odluku o novim mjerama.'],
      ['postaviti pitanje', 'to ask a question', 'Želio bih postaviti jedno pitanje.'],
      ['održati sastanak', 'to hold a meeting', 'Uprava je održala sastanak bez radnika.'],
      ['poduzeti mjere', 'to take measures', 'Sindikat je odmah poduzeo mjere.'],
      ['steći iskustvo', 'to gain experience', 'Tijekom studija stekla je vrijedno iskustvo.'],
      ['imati na umu', 'to bear in mind', 'Imajte na umu da rok istječe sutra.'],
      ['s obzirom na', 'given, in view of (+ acc.)', 'S obzirom na okolnosti, to je razumno.'],
    ],
  },

  'discourse-particles': {
    worked: [
      {
        title: 'Explaining What You Just Said',
        problem: 'Spoji: "Nisam došao na sastanak." + objašnjenje: pokvario mi se auto.',
        en: 'Join: I did not come to the meeting. + the explanation: my car broke down.',
        steps: [
          {
            label: 'What does the second sentence do?',
            text: 'It explains the first. That is the job of naime.',
          },
          { label: 'Place it', text: 'naime opens the explaining sentence, set off by a comma.' },
          {
            label: 'The clitics',
            text: 'After the parenthetical naime the clause starts afresh: auto is its first unit, and mi se follow it.',
          },
        ],
        answer: 'Nisam došao na sastanak. Naime, auto mi se pokvario.',
      },
      {
        title: 'A Guess, Not an Estimate',
        problem: 'Prijatelj pita zašto Ivan kasni. Ne znaš, ali nagađaš: promet.',
        en: 'A friend asks why Ivan is late. You do not know, but you guess: traffic.',
        steps: [
          {
            label: 'How sure are you?',
            text: 'You have no real basis — it is a shrug, not an assessment.',
          },
          {
            label: 'Choose the particle',
            text: 'vjerojatno would sound like an estimate you could defend. valjda is the shrug.',
          },
          {
            label: 'Build it',
            text: 'Admit you do not know, then guess with valjda: valjda je zapeo u prometu.',
          },
        ],
        answer: 'Ne znam, valjda je zapeo u prometu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ ti misliš da je to pošteno?" (Surely you do not think that is fair?)',
          options: ['Zar', 'Valjda', 'Naime', 'Baš'],
          correct: 0,
          hint: 'You need the particle that opens a question expecting the answer no.',
          explanation:
            'Zar before a positive question expresses disbelief: surely not? naime explains, baš intensifies.',
        },
        {
          q: 'A colleague says "Pa to je očito!" What does pa add?',
          options: [
            'hesitation — well, maybe',
            'mild objection: surely you can see that',
            'the meaning "and then"',
            'politeness',
          ],
          correct: 1,
          hint: 'Look at where pa stands: at the front of a statement.',
          explanation:
            'At the front of a statement pa registers objection or impatience: but that is obvious!',
        },
        {
          q: 'Complete: "___, ja sam iz Rijeke, a ne iz Splita." (a correction of what they assumed)',
          options: ['Naime', 'Valjda', 'Zapravo', 'Baš'],
          correct: 2,
          hint: 'You are correcting a wrong assumption, not explaining or guessing.',
          explanation:
            'Zapravo — actually. naime would explain something already said, and valjda would turn it into a guess.',
        },
        {
          q: 'In "Baš mi je drago što si došao", what does baš do?',
          options: [
            'makes it sarcastic',
            'intensifies: I am really glad',
            'introduces an explanation',
            'expresses doubt',
          ],
          correct: 1,
          hint: 'The statement is sincere and warm, with no flat or negative tone.',
          explanation:
            'baš intensifies — really, truly. It turns sardonic only with a flat tone, as in baš ti hvala.',
        },
        {
          q: 'Complete: "Kasnim. ___, autobus se pokvario." (an explanation follows)',
          options: ['Uostalom', 'Naime', 'Baš', 'Eto'],
          correct: 1,
          hint: 'The particle that means "namely".',
          explanation: 'naime introduces the explanation.',
        },
        {
          q: '"Ma pusti, nije važno." What does ma signal?',
          options: [
            'strong agreement',
            'dismissal — never mind',
            'a question',
            'formal politeness',
          ],
          correct: 1,
          hint: 'The speaker is waving the matter away.',
          explanation: 'ma — dismissal, affectionate scepticism.',
        },
        {
          q: 'Complete: "___ tako, sad znaš sve." (There you go)',
          options: ['Eto', 'Valjda', 'Zar', 'Naime'],
          correct: 0,
          hint: 'The particle of presenting or resignation.',
          explanation: 'eto — there you have it.',
        },
        {
          q: 'Which is an estimate of likelihood rather than a shrug?',
          options: ['valjda', 'vjerojatno', 'ma', 'eto'],
          correct: 1,
          hint: 'One of these rests on evidence.',
          explanation: 'vjerojatno — probably, a real estimate.',
        },
        {
          type: 'type',
          q: '____ si stvarno zaboravio? (Surely you did not really forget? — the particle of disbelief)',
          answer: 'Zar',
          hint: 'The question particle that expects "no".',
          explanation: 'Zar si stvarno zaboravio?',
        },
        {
          type: 'type',
          q: 'Nije mogao doći. ____, bio je bolestan. (namely — an explanation follows)',
          answer: 'Naime',
          hint: 'The particle that introduces the reason for what was just said.',
          explanation: 'Naime, bio je bolestan.',
        },
        {
          type: 'type',
          q: '____ mi je drago što si došao. (really — the intensifier)',
          answer: 'Baš',
          hint: 'A short particle meaning exactly or really.',
          explanation: 'Baš mi je drago.',
        },
        {
          type: 'type',
          q: 'Ne znam je li stigao. ____ je. (Presumably he has — a shrug)',
          answer: 'Valjda',
          hint: 'The particle of an unfounded guess.',
          explanation: 'Valjda je — I suppose so.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ će se sve riješiti." (presumably — you have no real basis)',
        options: ['Sigurno', 'Valjda', 'Naime', 'Zapravo'],
        correct: 1,
        explanation: 'valjda is the shrug; sigurno claims certainty.',
      },
      {
        q: 'Which particle adds a final, clinching point?',
        options: ['naime', 'eto', 'zar', 'uostalom'],
        correct: 3,
        explanation: 'uostalom — besides, after all.',
      },
      {
        q: '"Pa zašto mi to nisi rekao?" — what is pa doing?',
        options: [
          'buying a moment',
          'meaning "and then"',
          'registering objection or reproach',
          'softening a request',
        ],
        correct: 2,
        explanation: 'At the front of a complaint pa registers objection.',
      },
      {
        q: 'Which question expects the answer "no"?',
        options: [
          'Zar ćeš otići bez pozdrava?',
          'Hoćeš li otići?',
          'Ideš li?',
          'Otići ćeš, zar ne?',
        ],
        correct: 0,
        explanation: 'zar opening a question signals disbelief — surely not?',
      },
      {
        q: 'In a job application a learner writes "Ma, imam iskustva." What is wrong?',
        options: [
          'nothing',
          'ma is a spoken, dismissive particle and does not belong in formal writing',
          'ma should be naime',
          'iskustva should be iskustvo',
        ],
        correct: 1,
        explanation: 'ma waves things away in speech; a formal text leaves it out.',
      },
      {
        q: '"Baš lijepo od tebe", said with a sigh after being let down, means?',
        options: [
          'sincere thanks',
          'how kind — sarcastic',
          'you are beautiful',
          'that is precisely right',
        ],
        correct: 1,
        explanation: 'With the wrong tone baš turns sardonic.',
      },
    ],
    vocab: [
      ['čestica', 'particle', 'Čestica valjda izražava nesigurnost.'],
      ['valjda', 'presumably, I suppose', 'Valjda će doći na vrijeme.'],
      ['naime', 'namely, you see', 'Nije došao. Naime, bio je bolestan.'],
      ['uostalom', 'besides, after all', 'Uostalom, to i nije bilo važno.'],
      ['zapravo', 'actually', 'Zapravo, nikad nisam bio u Osijeku.'],
      ['eto', 'there you go', 'Eto, to je sve što znam.'],
      ['zar', 'surely not? (question particle)', 'Zar stvarno misliš da će vlak stići na vrijeme?'],
      ['baš', 'really, exactly', 'Baš sam to htio reći.'],
    ],
  },

  'accent-prosody': {
    worked: [
      {
        title: 'Where the Accent Can Go',
        problem: 'Gdje nosi naglasak riječ "planina", i kakav je to naglasak?',
        en: 'Where does "planina" carry its accent, and of what kind?',
        steps: [
          {
            label: 'Count the syllables',
            text: 'pla-ni-na: three syllables, so the word is polysyllabic.',
          },
          {
            label: 'Rule out the end',
            text: 'A polysyllabic word is never accented on its final syllable, so not on -na.',
          },
          {
            label: 'Rule out falling',
            text: 'The accent sits on the second syllable, and a falling accent can stand only on the first. So it must be rising.',
          },
          {
            label: 'Read the dictionary',
            text: 'The dictionary writes planína: the acute marks a long rising accent.',
          },
        ],
        answer: 'planína — dugouzlazni naglasak na drugom slogu',
      },
      {
        title: 'Reading a Minimal Pair',
        problem: 'U rječniku stoji "pȁs" i "pȃs". Koji znači pojas?',
        en: 'The dictionary lists pȁs and pȃs. Which one means belt or waist?',
        steps: [
          {
            label: 'Decode the marks',
            text: 'The double grave (ȁ) is short falling; the inverted breve (ȃ) is long falling.',
          },
          {
            label: 'Match the meaning',
            text: 'The short one is the dog; the long one is the waist or belt.',
          },
          {
            label: 'Use the grammar too',
            text: 'Case forms often settle it anyway: the dog loses its a (psa), while the belt keeps it (pasa).',
          },
        ],
        answer: 'pȃs — pojas (waist, belt)',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which dictionary mark shows a LONG RISING accent?',
          options: ['ȕ', 'ȗ', 'ù', 'ú'],
          correct: 3,
          hint: 'The two rising accents are the single slanting strokes; decide which of those two also marks length.',
          explanation:
            'ú (acute) is long rising and ù (grave) short rising. ȕ and ȗ are the two falling accents.',
        },
        {
          q: 'A word carries its accent on its THIRD syllable. What kind of accent must it be?',
          options: ['falling', 'rising', 'either', 'none — a third syllable cannot be accented'],
          correct: 1,
          hint: 'Falling accents are restricted to one position in the word.',
          explanation:
            'A falling accent stands only on the first syllable, so any accent further in is rising.',
        },
        {
          q: 'What is the difference between "sam" in "Ja sam doma" and "sam" in "Živim sam"?',
          options: [
            'none',
            'the first is a clitic with no accent; the second is a full word with a long falling accent',
            'the first is long and the second short',
            'they are spelled differently in careful writing',
          ],
          correct: 1,
          hint: 'One of them is an auxiliary that leans on the word before it.',
          explanation:
            'sam (am) is a clitic with no accent of its own; sȃm (alone) is a stressed word with a long falling accent.',
        },
        {
          q: 'What does the macron in "žénā" mark?',
          options: [
            'a long syllable after the accent',
            'a second accent',
            'a stressed final syllable',
            'a silent vowel',
          ],
          correct: 0,
          hint: 'It sits on a syllable that follows the accented one.',
          explanation:
            'Post-accentual length: the genitive plural žénā has a long final syllable, which the nominative singular lacks.',
        },
        {
          q: 'Which mark shows a LONG FALLING accent?',
          options: ['ȕ', 'ȗ', 'ù', 'ú'],
          correct: 1,
          hint: 'The inverted breve marks the long falling accent.',
          explanation: 'ȗ — long and falling.',
        },
        {
          q: 'How is "grȁd" different in meaning from "grȃd"?',
          options: [
            'grȁd is hail, grȃd is a city',
            'both mean city',
            'grȁd is a castle',
            'grȃd is hail',
          ],
          correct: 0,
          hint: 'The short one falls from the sky.',
          explanation: 'grȁd = hail, grȃd = city.',
        },
        {
          q: 'A learner stresses "restoRAN". Which rule is broken?',
          options: [
            'none',
            'a polysyllabic word is not accented on its last syllable',
            'falling accents must be final',
            'every syllable must be long',
          ],
          correct: 1,
          hint: 'Look at where the stress landed.',
          explanation: 'The stress moves back off the final syllable.',
        },
        {
          q: 'What kind of accent can stand on the SECOND syllable?',
          options: ['only a falling one', 'only a rising one', 'any accent', 'no accent at all'],
          correct: 1,
          hint: 'Falling accents are limited to one syllable.',
          explanation: 'Only rising accents stand after the first syllable.',
        },
        {
          type: 'type',
          q: 'Sinoć je ____ potukao vinograde. (hail)',
          answer: 'grad',
          hint: 'The same spelling as the word for a city, with a short falling accent.',
          explanation: 'grȁd — hail.',
        },
        {
          type: 'type',
          q: 'Kupi mladi ____ za salatu. (onion)',
          answer: 'luk',
          hint: 'The same spelling as the word for an arch or bow.',
          explanation: 'lȕk — onion.',
        },
        {
          type: 'type',
          q: 'Živim ____ u malom stanu. (alone — the full word, not the clitic)',
          answer: 'sam',
          hint: 'The same spelling as the 1st-person form of biti.',
          explanation: 'sȃm — alone, with a long falling accent.',
        },
        {
          type: 'type',
          q: 'Naglasak je na prvom ____. (syllable)',
          answer: 'slogu',
          hint: 'The word for syllable, in the locative.',
          explanation: 'na prvom slogu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which pair differs ONLY in accent?',
        options: [
          'lȕk / lȗk — onion / bow',
          'luk / lukovi — onion / onions',
          'luk / lak — onion / varnish',
          'luk / lukav — onion / sly',
        ],
        correct: 0,
        explanation:
          'Same letters, different accent: short falling onion, long falling bow or arch.',
      },
      {
        q: 'Which mark shows a SHORT FALLING accent?',
        options: ['ú', 'ȗ', 'ȕ', 'ù'],
        correct: 2,
        explanation: 'The double grave marks the short falling accent.',
      },
      {
        q: 'In standard Croatian, which syllable of a polysyllabic word never carries the accent?',
        options: ['the first', 'the second', 'a middle one', 'the last'],
        correct: 3,
        explanation: 'A polysyllabic word is never accented on its final syllable.',
      },
      {
        q: 'The falling accent of "Hrvatska" tells you what about its position?',
        options: [
          'it is on the last syllable',
          'it can only be on the first syllable',
          'it moves freely',
          'it is on the penultimate syllable',
        ],
        correct: 1,
        explanation: 'A falling accent can only fall on the first syllable.',
      },
      {
        q: 'What distinguishes "pȁs" (dog) from "pȃs" (waist)?',
        options: [
          'a different vowel',
          'vowel length — short against long falling',
          'a different consonant',
          'nothing at all',
        ],
        correct: 1,
        explanation: 'Both fall; one is short and one is long.',
      },
      {
        q: 'What does the lesson advise about the four accents?',
        options: [
          'memorise the notation first',
          'acquire them by ear, and read the marks when a dictionary gives them',
          'ignore them in speech and writing',
          'stress the final syllable for emphasis',
        ],
        correct: 1,
        explanation: 'Listen first, produce later.',
      },
    ],
    vocab: [
      ['naglasak', 'accent, stress', 'Naglasak je na prvom slogu.'],
      ['slog', 'syllable', 'Riječ razgovarati ima pet slogova.'],
      ['silazni', 'falling (accent)', 'Silazni naglasak stoji samo na prvom slogu.'],
      ['uzlazni', 'rising (accent)', 'Uzlazni naglasak može stajati i u sredini riječi.'],
      [
        'zanaglasna dužina',
        'post-accentual length',
        'Zanaglasna dužina označava se crticom iznad samoglasnika.',
      ],
      ['tuča', 'hail', 'Sinoć je tuča potukla vinograde.'],
      ['samoglasnik', 'vowel', 'Naglasni znak piše se iznad samoglasnika.'],
      ['izgovor', 'pronunciation', 'Njegov je izgovor gotovo besprijekoran.'],
    ],
  },

  'summarising-paraphrase': {
    worked: [
      {
        title: 'One Sentence, Attributed',
        problem:
          'Sažmi u jednu rečenicu: članak tvrdi da se mladi sele iz malih gradova jer je stanovanje skupo.',
        en: 'Summarise in one sentence: the article claims young people are leaving small towns because housing is expensive.',
        steps: [
          {
            label: 'Attribute',
            text: 'The claim is the article’s, not yours: prema + dative — prema članku.',
          },
          {
            label: 'Condense the cause',
            text: 'jer je stanovanje skupo → zbog skupog stanovanja (zbog + genitive).',
          },
          {
            label: 'Change the structure',
            text: 'seliti se iz malih gradova becomes napuštati male gradove — a different verb and construction, not a swapped synonym.',
          },
        ],
        answer: 'Prema članku, mladi napuštaju male gradove zbog skupog stanovanja.',
      },
      {
        title: 'Paraphrase by Structure',
        problem: 'Parafraziraj strukturom, ne sinonimom: "Grad je odlučio zatvoriti knjižnicu."',
        en: 'Paraphrase by structure, not synonym: The city decided to close the library.',
        steps: [
          {
            label: 'Turn the verb into a noun',
            text: 'odlučiti → odluka, and Croatian "brings" a decision: donijeti odluku.',
          },
          {
            label: 'Condense the infinitive',
            text: 'zatvoriti knjižnicu → o zatvaranju knjižnice: o + the locative of the verbal noun, with its object in the genitive.',
          },
          {
            label: 'Check the result',
            text: 'The same content in a genuinely different sentence — not one word replaced by another.',
          },
        ],
        answer: 'Grad je donio odluku o zatvaranju knjižnice.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Autorica ___ da je problem u cijenama, ali to ne dokazuje." (claims)',
          options: ['tvrdi', 'dokazuje', 'jamči', 'potvrđuje'],
          correct: 0,
          hint: 'The source asserts without proving. Choose the verb that matches that strength.',
          explanation:
            'tvrdi — asserts. dokazuje and jamči claim proof, which the sentence itself says is missing.',
        },
        {
          q: 'Complete: "Prema ___, broj turista je porastao." (the report — izvješće)',
          options: ['izvješće', 'izvješća', 'izvješću', 'izvješćem'],
          correct: 2,
          hint: 'prema governs the dative.',
          explanation: 'prema izvješću — dative, like prema članku, prema autoru.',
        },
        {
          q: 'Best one-line summary of: "Grad je lani uveo besplatan javni prijevoz. Gužve su se smanjile za trećinu, a zrak je čišći. Ipak, prihodi prijevoznika pali su."',
          options: [
            'Grad je lani uveo besplatan javni prijevoz.',
            'Prema tekstu, besplatan prijevoz smanjio je gužve i onečišćenje, ali i prihode prijevoznika.',
            'Zrak je čišći.',
            'Besplatan prijevoz najbolja je odluka ikad.',
          ],
          correct: 1,
          hint: 'Keep the claim and its main consequences, attribute them, and add nothing of your own.',
          explanation:
            'The second keeps the claim and both sides of the result, attributed. The first and third keep fragments; the last adds a judgement the text never made.',
        },
        {
          q: 'Which opener signals that what follows compresses everything before it?',
          options: ['Naime,', 'Ukratko,', 'Na primjer,', 'Međutim,'],
          correct: 1,
          hint: 'You want the word that means "in short".',
          explanation:
            'Ukratko — in short. naime explains, na primjer gives an example, međutim contrasts.',
        },
        {
          q: 'Complete: "___, rezultati potvrđuju hipotezu." (In short)',
          options: ['Ukratko', 'Naime', 'Na primjer', 'Međutim'],
          correct: 0,
          hint: 'An adverb built on the word for "short".',
          explanation: 'Ukratko — in short.',
        },
        {
          q: "Which phrase keeps the author's claim separate from yours?",
          options: ['Jasno je da…', 'Po autorovu mišljenju…', 'Svi znaju da…', 'Očito je da…'],
          correct: 1,
          hint: 'Attribution names whose opinion it is.',
          explanation: 'Po autorovu mišljenju — attributed.',
        },
        {
          q: 'Paraphrase "donošenje odluke" by turning the noun into a verb.',
          options: ['odluka je donesena', 'odlučiti', 'odlučan', 'odluke'],
          correct: 1,
          hint: 'The verbal noun becomes the plain verb.',
          explanation: 'donošenje odluke → odlučiti.',
        },
        {
          q: 'Which reporting verb OVERSTATES a source that only suggests?',
          options: ['sugerira', 'upućuje na', 'dokazuje', 'navodi'],
          correct: 2,
          hint: 'One of these claims proof.',
          explanation: 'dokazuje — proves; too strong for a hint.',
        },
        {
          type: 'type',
          q: 'Riječ je o novoj ____. (regulation — uredba)',
          answer: 'uredbi',
          hint: 'The opener takes the locative; feminine -a becomes -i.',
          explanation: 'o novoj uredbi.',
        },
        {
          type: 'type',
          q: 'Prema ____, broj stanovnika pada. (the census — popis)',
          answer: 'popisu',
          hint: 'prema takes the dative.',
          explanation: 'Prema popisu…',
        },
        {
          type: 'type',
          q: 'Članak ____ tri razloga za pad prodaje. (lists — navoditi)',
          answer: 'navodi',
          hint: 'The reporting verb for listing, present 3rd singular.',
          explanation: 'Članak navodi tri razloga.',
        },
        {
          type: 'type',
          q: 'Glavna je ____ da rješenje nije u novim cestama. (the point)',
          answer: 'poanta',
          hint: 'A loanword from French meaning the main point.',
          explanation: 'Glavna je poanta da…',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Riječ je ___." (It is about a new study.)',
        options: [
          'o novom istraživanju',
          'o novo istraživanje',
          'za novo istraživanje',
          'na novom istraživanju',
        ],
        correct: 0,
        explanation: 'Riječ je o + locative.',
      },
      {
        q: 'Which is a paraphrase by STRUCTURE of "Ministarstvo je smanjilo porez"?',
        options: [
          'Ministarstvo je snizilo porez.',
          'Ministarstvo je smanjilo pristojbu.',
          'Smanjenjem poreza ministarstvo je…',
          'Ministarstvo je umanjilo porez.',
        ],
        correct: 2,
        explanation: 'The verb becomes a noun — a structural change, not a synonym swap.',
      },
      {
        q: 'Which reporting verb fits a source that states something firmly without proving it?',
        options: ['dokazuje', 'jamči', 'potvrđuje', 'tvrdi'],
        correct: 3,
        explanation: 'tvrdi — claims; dokazuje would overstate.',
      },
      {
        q: 'What is wrong with "Prema članak, cijene rastu"?',
        options: [
          'nothing',
          '"prema" takes the dative: prema članku',
          '"rastu" should be "raste"',
          '"prema" should be "od"',
        ],
        correct: 1,
        explanation: 'prema + dative.',
      },
      {
        q: 'When shortening a text, what goes FIRST?',
        options: ['the main claim', 'the examples', 'the conclusion', 'the main reason'],
        correct: 1,
        explanation: 'Examples go first; the claim and its reason stay to the last.',
      },
      {
        q: 'Which opener marks what follows as a compressed restatement?',
        options: ['Drugim riječima,', 'Naime,', 'Na primjer,', 'Uostalom,'],
        correct: 0,
        explanation: 'drugim riječima — in other words.',
      },
    ],
    vocab: [
      ['sažetak', 'summary', 'Napiši sažetak teksta u pet rečenica.'],
      ['sažeti', 'to summarise', 'Pokušaj sažeti članak u dvije rečenice.'],
      ['parafraza', 'paraphrase', 'Dobra parafraza mijenja strukturu, a ne samo riječi.'],
      ['tvrditi', 'to claim', 'Autor tvrdi da je motivacija važnija od dobi.'],
      ['navoditi', 'to state, list', 'Članak navodi tri razloga.'],
      ['pretpostavljati', 'to assume', 'Autor samo pretpostavlja da će se trend nastaviti.'],
      ['poanta', 'the point', 'Glavna je poanta da treba bolji red vožnje.'],
      ['izvješće', 'report', 'Prema izvješću, broj turista je porastao.'],
    ],
  },

  'academic-writing': {
    worked: [
      {
        title: 'From "I" to the Impersonal',
        problem:
          'Prepiši u akademskom registru: "U ovom radu ja analiziram utjecaj dobi na učenje."',
        en: 'Rewrite in academic register: In this paper I analyse the influence of age on learning.',
        steps: [
          {
            label: 'Remove the first person',
            text: 'Croatian papers avoid ja; the impersonal se-construction takes its place.',
          },
          {
            label: 'Place se',
            text: 'se takes second position inside the opening phrase, the way the genre prefers: U ovom se radu…',
          },
          {
            label: 'Keep the government',
            text: 'utjecaj takes na + accusative: utjecaj dobi na učenje.',
          },
        ],
        answer: 'U ovom se radu analizira utjecaj dobi na učenje.',
      },
      {
        title: 'Hedging a Result',
        problem:
          'Ublaži tvrdnju za istraživanje s malim uzorkom: "Rezultati dokazuju da motivacija utječe na uspjeh."',
        en: 'Hedge the claim for a small-sample study: The results prove that motivation affects success.',
        steps: [
          { label: 'Weigh the evidence', text: 'A small sample suggests; it does not prove.' },
          {
            label: 'Choose the verb',
            text: 'sugerirati (or upućivati na) matches that strength: rezultati sugeriraju da…',
          },
          {
            label: 'Keep the government',
            text: 'utjecati na + accusative stays exactly as it was: utječe na uspjeh.',
          },
        ],
        answer: 'Rezultati sugeriraju da motivacija utječe na uspjeh.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which section of a paper is the "sažetak"?',
          options: ['the abstract', 'the discussion', 'the references', 'a footnote'],
          correct: 0,
          hint: 'It comes first and compresses the whole paper.',
          explanation:
            'sažetak is the abstract. rasprava is the discussion, literatura the references, fusnota a footnote.',
        },
        {
          q: 'Complete: "Kako ___ Babić (2015), pojam nije jasno definiran." (points out)',
          options: ['ističe', 'ističući', 'istaknut', 'isticanje'],
          correct: 0,
          hint: 'The citation frame is kako + a finite verb in the present, third person.',
          explanation:
            'Kako ističe Babić (2015) — a finite reporting verb. The others are an adverbial participle, a passive participle and a noun.',
        },
        {
          q: 'Complete: "Na ___ dobivenih podataka može se zaključiti da…" (on the basis of)',
          options: ['temelj', 'temelju', 'temelja', 'temeljem'],
          correct: 1,
          hint: 'na here places the claim "on" a basis, so it takes the locative.',
          explanation: 'na temelju + genitive: na temelju dobivenih podataka.',
        },
        {
          q: 'Which sentence belongs in the introduction of a Croatian paper?',
          options: [
            'Ja ću pokazati da sam u pravu.',
            'U drugom se poglavlju opisuje metodologija istraživanja.',
            'Pa, ovdje ima svega pomalo.',
            'Rezultati su sigurno točni.',
          ],
          correct: 1,
          hint: 'Look for explicit signposting in the impersonal.',
          explanation:
            'Signposting with the impersonal se is expected. The others are first-person bravado, conversation and an unhedged claim.',
        },
        {
          q: 'Which section lists the works cited?',
          options: ['uvod', 'literatura', 'sažetak', 'rasprava'],
          correct: 1,
          hint: 'The same word that means "literature".',
          explanation: 'literatura / popis literature — the references.',
        },
        {
          q: 'Complete: "___ napomenuti da je uzorak malen." (It should be noted)',
          options: ['Valja', 'Mora', 'Ima', 'Hoće'],
          correct: 0,
          hint: 'An old-fashioned modal meaning "it is fitting".',
          explanation: 'Valja napomenuti da…',
        },
        {
          q: 'Which verb suits a cautious claim?',
          options: ['dokazuju', 'upućuju na', 'jamče', 'potvrđuju bez sumnje'],
          correct: 1,
          hint: 'Pick the verb that points rather than proves.',
          explanation: 'Rezultati upućuju na…',
        },
        {
          q: 'Which is the Croatian signpost for "From the above it follows"?',
          options: [
            'Iz navedenog proizlazi',
            'Od gore slijedi',
            'Iz gore dolazi',
            'Na navedeno ide',
          ],
          correct: 0,
          hint: 'The verb means "to arise from".',
          explanation: 'Iz navedenog proizlazi da…',
        },
        {
          type: 'type',
          q: 'U ovom se radu ____ utjecaj dobi na usvajanje jezika. (is analysed — analizirati)',
          answer: 'analizira',
          hint: 'The impersonal se construction with the present, 3rd singular.',
          explanation: 'U ovom se radu analizira…',
        },
        {
          type: 'type',
          q: 'Prema ____ (2020), pojam nije jasno definiran. (Kovač — the cited author)',
          answer: 'Kovaču',
          hint: 'prema takes the dative of the surname.',
          explanation: 'Prema Kovaču (2020)…',
        },
        {
          type: 'type',
          q: 'Rezultati ____ da postoji povezanost. (suggest — sugerirati)',
          answer: 'sugeriraju',
          hint: 'The cautious reporting verb, 3rd plural present.',
          explanation: 'Rezultati sugeriraju da…',
        },
        {
          type: 'type',
          q: '____ se da dob utječe na rezultate. (It appears — činiti)',
          answer: 'Čini',
          hint: 'The impersonal hedge, 3rd singular present.',
          explanation: 'Čini se da…',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "U ovom ___ radu opisuju rezultati istraživanja."',
        options: ['je', 'su', 'se', 'smo'],
        correct: 2,
        explanation: 'The reflexive se makes the construction impersonal: u ovom se radu opisuju…',
      },
      {
        q: 'Which sentence is in the expected academic register?',
        options: [
          'Ja mislim da rezultati nisu jasni.',
          'Rezultati su nejasni, to svi vide.',
          'Čini se da rezultati nisu posve jasni.',
          'Pa, rezultati baš nisu jasni.',
        ],
        correct: 2,
        explanation: 'An impersonal hedge: čini se da…',
      },
      {
        q: 'Which citation form is correct?',
        options: [
          'Kako navodi Horvatu (2019)…',
          'Kako navodi Horvat (2019)…',
          'Kako navodi Horvata (2019)…',
          'Kako navodi Horvatom (2019)…',
        ],
        correct: 1,
        explanation: 'The cited author is the subject of navodi, so the nominative.',
      },
      {
        q: 'What is wrong with "Istraživanje dokazuje da je metoda uspješna, premda je provedeno na dvadeset ispitanika"?',
        options: [
          'nothing',
          'the verb overstates the evidence: sugerira or upućuje na',
          '"premda" should be "ukoliko"',
          '"ispitanika" should be "ispitanici"',
        ],
        correct: 1,
        explanation: 'Twenty participants suggest; they do not prove.',
      },
      {
        q: 'What is the "sažetak" of a paper?',
        options: ['the references', 'the discussion', 'the footnotes', 'the abstract'],
        correct: 3,
        explanation: 'sažetak — the abstract.',
      },
      {
        q: 'Complete: "Cilj je ovoga rada ___ utjecaj dobi na učenje." (to analyse)',
        options: ['analizirati', 'analizira', 'analiziran', 'analiza'],
        correct: 0,
        explanation: 'Cilj je … + infinitive.',
      },
    ],
    vocab: [
      ['sažetak', 'abstract', 'Sažetak rada ne smije biti dulji od dvjesto riječi.'],
      ['uvod', 'introduction', 'U uvodu se predstavlja cilj rada.'],
      ['rasprava', 'discussion', 'U raspravi se rezultati uspoređuju s prethodnim istraživanjima.'],
      ['zaključak', 'conclusion', 'Zaključak mora slijediti iz rezultata.'],
      ['fusnota', 'footnote', 'Izvor je naveden u fusnoti.'],
      [
        'ispitanik',
        'participant (in a study)',
        'U istraživanju je sudjelovalo stotinu ispitanika.',
      ],
      ['uzorak', 'sample', 'Valja napomenuti da je uzorak bio malen.'],
      [
        'pretpostavka',
        'assumption, hypothesis',
        'Rad polazi od pretpostavke da dob utječe na učenje.',
      ],
    ],
  },

  'debate-persuasion': {
    worked: [
      {
        title: 'Concede, Then Rebut',
        problem:
          'Sugovornik kaže: "Turizam donosi novac." Priznaj istinu, a zatim dodaj što izostavlja.',
        en: 'Someone says: Tourism brings money. Grant the truth, then add what the claim leaves out.',
        steps: [
          {
            label: 'Concede first',
            text: 'To stoji grants the part of the claim that is correct.',
          },
          { label: 'Isolate the rest', text: 'ali introduces what the claim leaves out.' },
          {
            label: 'Keep the concession',
            text: 'i (also) adds the cost without denying the benefit: donosi i gužve.',
          },
        ],
        answer: 'To stoji, ali turizam donosi i gužve i skuplje stanovanje.',
      },
      {
        title: 'Reframing the Question',
        problem: 'Reci: "It is not about the price, it is about the quality."',
        en: 'Say: It is not about the price, it is about the quality.',
        steps: [
          {
            label: 'Choose the frame',
            text: 'Ne radi se o X, nego o Y rejects the framing rather than the claim.',
          },
          {
            label: 'The case',
            text: 'Both nouns follow o in the locative: o cijeni, o kvaliteti.',
          },
          {
            label: 'The contrast word',
            text: 'After a negative, Croatian needs nego (or već), not ali.',
          },
        ],
        answer: 'Ne radi se o cijeni, nego o kvaliteti.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Ne bih ___ da je to tako." (I would not say — a man speaking)',
          options: ['rekao', 'reći', 'rekoh', 'rekavši'],
          correct: 0,
          hint: 'The conditional is bih + the active participle, agreeing with the speaker.',
          explanation:
            'Ne bih rekao — the conditional softens the disagreement. reći is an infinitive, rekoh an aorist, rekavši an adverbial participle.',
        },
        {
          q: 'Which question asks for evidence without raising the temperature?',
          options: ['Lažete!', 'Na temelju čega to tvrdite?', 'To su gluposti.', 'Ne pričajte!'],
          correct: 1,
          hint: 'Ask for the basis of the claim instead of attacking the speaker.',
          explanation:
            'Na temelju čega to tvrdite? puts the burden back calmly. The others attack rather than ask.',
        },
        {
          q: 'Your opponent says: "Broj turista raste, dakle svi su zadovoljni." Which reply names the logical gap?',
          options: [
            'Iz toga ne slijedi da su svi zadovoljni.',
            'Slažem se u potpunosti.',
            'Turizam je dobar.',
            'Vratimo se na početak.',
          ],
          correct: 0,
          hint: 'You want the phrase that says the conclusion does not follow from the premise.',
          explanation:
            'Iz toga ne slijedi da… names the specific gap: rising numbers do not prove universal satisfaction.',
        },
        {
          q: 'Complete: "Tu se ne bih ___." (There I would not agree — a woman speaking)',
          options: ['složio', 'složila', 'složiti', 'složilo'],
          correct: 1,
          hint: 'The participle of the conditional agrees with the speaker.',
          explanation:
            'A woman says tu se ne bih složila. složio is masculine, složilo neuter, složiti an infinitive.',
        },
        {
          q: 'Which phrase returns the discussion to the main point?',
          options: [
            'Vratimo se na ono što je bitno.',
            'Upravo suprotno.',
            'Prihvaćam argument.',
            'To stoji.',
          ],
          correct: 0,
          hint: 'The verb means "let us return".',
          explanation: 'Vratimo se na…',
        },
        {
          q: 'Complete: "Slažem se do određene ___." (to a certain extent)',
          options: ['mjera', 'mjeri', 'mjere', 'mjerom'],
          correct: 2,
          hint: 'do takes the genitive.',
          explanation: 'do određene mjere.',
        },
        {
          q: 'Which phrase admits that you were wrong?',
          options: [
            'Na temelju čega?',
            'Ne bih rekao.',
            'U pravu ste, povlačim to.',
            'Upravo je u tome stvar.',
          ],
          correct: 2,
          hint: 'Look for a verb meaning "withdraw".',
          explanation: 'U pravu ste, povlačim to.',
        },
        {
          q: 'Which phrase presses a point the other side dodged?',
          options: [
            'To ne odgovara na pitanje.',
            'Slažem se u potpunosti.',
            'Imate pravo.',
            'Svaka čast.',
          ],
          correct: 0,
          hint: 'The other side answered something else.',
          explanation: 'To ne odgovara na pitanje.',
        },
        {
          type: 'type',
          q: 'Ne radi se o troškovima, ____ o prioritetima. (but rather — after a negative)',
          answer: 'nego',
          hint: 'After a negated clause, the reframing conjunction is not ali.',
          explanation: '…nego o prioritetima.',
        },
        {
          type: 'type',
          q: 'To ____, ali ne vrijedi u svim slučajevima. (holds — the conceding verb)',
          answer: 'stoji',
          hint: 'The verb meaning "to stand", 3rd singular.',
          explanation: 'To stoji, ali…',
        },
        {
          type: 'type',
          q: 'Možete li to ____ brojkama? (back up — infinitive)',
          answer: 'potkrijepiti',
          hint: 'The verb for supporting a claim with evidence; watch the -ije-.',
          explanation: 'potkrijepiti brojkama.',
        },
        {
          type: 'type',
          q: 'Iz toga ne ____ da je rješenje pogrešno. (follows)',
          answer: 'slijedi',
          hint: 'The verb meaning "to follow", 3rd singular, with a long jat.',
          explanation: 'Iz toga ne slijedi da…',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ne radi se o vremenu, ___ o novcu."',
        options: ['ali', 'nego', 'a', 'već ne'],
        correct: 1,
        explanation: 'After a negative the reframing conjunction is nego.',
      },
      {
        q: 'Which is the most polite way to disagree strongly?',
        options: ['Nemate pravo.', 'Ne slažem se.', 'To je glupost.', 'Tu bih se usprotivila.'],
        correct: 3,
        explanation: 'The conditional keeps a strong disagreement polite.',
      },
      {
        q: 'Which phrase grants part of the opposing claim first?',
        options: ['To stoji, ali…', 'Upravo suprotno.', 'Na temelju čega?', 'Iz toga ne slijedi…'],
        correct: 0,
        explanation: 'to stoji, ali — that holds, but.',
      },
      {
        q: 'Complete: "Možete li to ___ podacima?" (support)',
        options: ['potkrijepiti', 'potkrijepio', 'potkrijepljen', 'potkrijepljivati'],
        correct: 0,
        explanation: 'možete li + the perfective infinitive.',
      },
      {
        q: 'What is wrong with "To nije pitanje novca, ali principa"?',
        options: [
          'nothing',
          'after the negated clause the contrast is "nego": nego principa',
          '"principa" should be "princip"',
          '"pitanje" should be "pitanja"',
        ],
        correct: 1,
        explanation: 'Negative, then nego.',
      },
      {
        q: 'What does "Iz toga ne slijedi da…" do in an argument?',
        options: [
          'concedes the point',
          'changes the subject',
          'names a logical gap between evidence and conclusion',
          'asks for a break',
        ],
        correct: 2,
        explanation: 'It says the conclusion does not follow from the evidence.',
      },
    ],
    vocab: [
      ['rasprava', 'debate', 'Rasprava je trajala do ponoći.'],
      ['protuargument', 'counter-argument', 'Iznio je snažan protuargument.'],
      ['potkrijepiti', 'to back up, substantiate', 'Možete li to potkrijepiti brojkama?'],
      ['tvrdnja', 'claim, assertion', 'Povlačim tu tvrdnju.'],
      ['povući', 'to withdraw', 'U pravu ste, povlačim to što sam rekao.'],
      ['uvjeriti', 'to convince', 'Nije me uspio uvjeriti.'],
      ['stajalište', 'standpoint', 'Poštujem vaše stajalište, ali se ne slažem.'],
      ['prigovor', 'objection', 'Imam jedan prigovor na vaš prijedlog.'],
    ],
  },

  'formal-speech': {
    worked: [
      {
        title: 'A Three-Sentence Toast',
        problem:
          'Nazdravi domaćinima, Marku i Ivani, na obiteljskom ručku: obraćanje, razlog, želja.',
        en: 'Toast your hosts, Marko and Ivana, at a family lunch: address, reason, wish.',
        steps: [
          {
            label: 'The address',
            text: 'Open with the people, in the vocative: Dragi Marko i Ivana, …',
          },
          {
            label: 'The reason',
            text: 'hvala vam što ste nas ugostili — thanks with the dative vam, and što + a clause for the reason.',
          },
          { label: 'The wish', text: 'želim vam puno zdravlja i sreće — puno takes the genitive.' },
          {
            label: 'The toast',
            text: 'nazdraviti takes the dative with no preposition: Nazdravimo domaćinima. Then glasses up: Živjeli!',
          },
        ],
        answer:
          'Dragi Marko i Ivana, hvala vam što ste nas ugostili. Želim vam puno zdravlja i sreće. Nazdravimo domaćinima — živjeli!',
      },
      {
        title: 'The Guest From Abroad',
        problem:
          'Na krštenju te zamole da nešto kažeš. Počni skromno i čestitaj roditeljima male Lucije.',
        en: 'At a christening you are asked to say something. Start modestly and congratulate little Lucija’s parents.',
        steps: [
          {
            label: 'Disarm first',
            text: 'oprostiti na + locative, like hvala na: Oprostite na mom hrvatskom.',
          },
          {
            label: 'Congratulate',
            text: 'čestitati takes the dative of the person: čestitam roditeljima.',
          },
          {
            label: 'The wish',
            text: 'neka + present gives "may…": neka mala Lucija raste zdrava i sretna — the adjectives agree with her.',
          },
        ],
        answer:
          'Oprostite na mom hrvatskom, ali htio sam reći: čestitam roditeljima, i neka mala Lucija raste zdrava i sretna!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Zahvaljujem ___ na pomoći." (the organisers — organizatori)',
          options: ['organizatorima', 'organizatore', 'organizatora', 'za organizatore'],
          correct: 0,
          hint: 'zahvaljivati takes the person thanked in the dative, and the reason with na + locative.',
          explanation:
            'Zahvaljujem organizatorima na pomoći — dative plural. The English "thank for" does not bring za; the reason takes na.',
        },
        {
          q: 'At a retirement party, which wish fits?',
          options: [
            'Moja iskrena sućut.',
            'Uživajte u zasluženom odmoru!',
            'Sretno mladencima!',
            'Čestitam na krštenju!',
          ],
          correct: 1,
          hint: 'Think about what the person is starting now that work is over.',
          explanation:
            'Uživajte u zasluženom odmoru — enjoy your well-earned rest. The others belong to a funeral, a wedding and a christening.',
        },
        {
          q: 'Complete: "Izražavam ___ sućut obitelji." (my sincere — said by the speaker about themselves)',
          options: ['svoju iskrenu', 'svoja iskrena', 'svojom iskrenom', 'svoj iskreni'],
          correct: 0,
          hint: 'sućut is feminine, izražavati takes the accusative, and the owner is the subject.',
          explanation:
            'svoju iskrenu sućut — feminine accusative, with the reflexive possessive because the speaker is the subject.',
        },
        {
          q: 'Complete: "Nazdravimo ___!" (the young couple — mladi par)',
          options: ['mladi par', 'mladom paru', 'mladog para', 'za mladi par'],
          correct: 1,
          hint: 'nazdraviti takes the dative, with no preposition.',
          explanation: 'Nazdravimo mladom paru — dative. za is the English "to" carried across.',
        },
        {
          q: 'What does "Živjeli!" do in a toast?',
          options: [
            'opens the speech',
            'marks the moment the glasses go up',
            'closes a funeral speech',
            'thanks the cook',
          ],
          correct: 1,
          hint: 'It is the last word of the toast.',
          explanation: 'The glass goes up on Živjeli!',
        },
        {
          q: 'Complete: "U ime ___, hvala vam." (the whole team — cijeli kolektiv)',
          options: [
            'cijeli kolektiv',
            'cijelog kolektiva',
            'cijelom kolektivu',
            'cijelim kolektivom',
          ],
          correct: 1,
          hint: 'u ime takes the genitive.',
          explanation: 'U ime cijelog kolektiva.',
        },
        {
          q: 'Which opener disarms an audience when your Croatian is imperfect?',
          options: [
            'Oprostite na mom hrvatskom, ali htio sam vam reći…',
            'Ne znam hrvatski.',
            'Govorit ću engleski.',
            'Ovo će biti dugo.',
          ],
          correct: 0,
          hint: 'An apology that leads straight into speaking.',
          explanation: 'Oprostite na mom hrvatskom, ali…',
        },
        {
          q: 'Which is said at an anniversary?',
          options: [
            'Moja iskrena sućut.',
            'Uživajte u zasluženom odmoru.',
            'Još mnogo godina!',
            'Sretan put!',
          ],
          correct: 2,
          hint: 'Wish them more years together.',
          explanation: 'Još mnogo godina!',
        },
        {
          type: 'type',
          q: 'Nazdravimo ____! (our grandmother — naša baka)',
          answer: 'našoj baki',
          hint: 'nazdraviti takes the dative; baka ends in -i.',
          explanation: 'Nazdravimo našoj baki!',
        },
        {
          type: 'type',
          q: 'Primite moju iskrenu ____. (condolences)',
          answer: 'sućut',
          hint: 'The one word for condolences — and no other.',
          explanation: 'Primite moju iskrenu sućut.',
        },
        {
          type: 'type',
          q: 'Uživajte u ____ odmoru. (well-earned — zaslužen)',
          answer: 'zasluženom',
          accept: ['zasluženome'],
          hint: 'u + locative; the adjective agrees with odmoru.',
          explanation: 'u zasluženom odmoru.',
        },
        {
          type: 'type',
          q: 'Zahvaljujem svima koji su ____ da ova večer uspije. (helped — pomoći; plural past)',
          answer: 'pomogli',
          hint: 'The l-participle of pomoći, plural.',
          explanation: 'koji su pomogli.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Nazdravimo ___." (our hosts — naši domaćini)',
        options: ['naše domaćine', 'našim domaćinima', 'naših domaćina', 'za naše domaćine'],
        correct: 1,
        explanation: 'nazdraviti takes the dative, with no preposition.',
      },
      {
        q: 'Which is the correct condolence to a grieving family?',
        options: [
          'Žao mi je za vaš gubitak.',
          'Moje sažaljenje.',
          'Primite moju iskrenu sućut.',
          'Moje žaljenje za vas.',
        ],
        correct: 2,
        explanation: 'Condolences are sućut, and only sućut.',
      },
      {
        q: 'Which opening is Croatian rather than translated?',
        options: [
          'Hej svima, ja sam Marko.',
          'Hvala što ste ovdje danas.',
          'Dobro jutro, ovo je moj govor.',
          'Poštovani uzvanici, dopustite mi nekoliko riječi.',
        ],
        correct: 3,
        explanation: 'A Croatian occasion opens with the address.',
      },
      {
        q: 'What is said at a retirement?',
        options: [
          'Uživajte u zasluženom odmoru!',
          'Moja iskrena sućut.',
          'Sretno mladencima!',
          'Čestitam na krštenju!',
        ],
        correct: 0,
        explanation: 'A well-earned rest is the retirement wish.',
      },
      {
        q: 'What is wrong with "Želim nazdraviti za mladence"?',
        options: [
          'nothing',
          'nazdraviti takes the dative with no preposition: nazdraviti mladencima',
          '"mladence" should be "mladenci"',
          '"želim" should be "želio"',
        ],
        correct: 1,
        explanation: 'No za: nazdraviti + dative.',
      },
      {
        q: 'Complete: "Želim vam puno ___." (happiness — sreća)',
        options: ['sreća', 'sreću', 'sreće', 'srećom'],
        correct: 2,
        explanation: 'puno + genitive: puno sreće.',
      },
    ],
    vocab: [
      ['zdravica', 'toast (speech)', 'Kum je održao kratku i duhovitu zdravicu.'],
      ['nazdraviti', 'to toast (+ dat.)', 'Nazdravimo mladencima!'],
      ['uzvanik', 'invited guest', 'Poštovani uzvanici, dobro došli.'],
      ['mladenci', 'the newlyweds', 'Mladenci su plesali prvi ples.'],
      ['sućut', 'condolences', 'Primite moju iskrenu sućut.'],
      ['umirovljenje', 'retirement', 'Povodom umirovljenja kolege su mu priredili večeru.'],
      ['obljetnica', 'anniversary', 'Proslavili su dvadesetu obljetnicu braka.'],
      ['domaćin', 'host', 'Posebno zahvaljujem domaćinima.'],
    ],
  },

  'translation-pitfalls': {
    worked: [
      {
        title: 'Eventually Is Not Eventualno',
        problem: 'Prevedi obećanje klijentu: "We will eventually deliver all the documents."',
        en: 'Translate a promise to a client: We will eventually deliver all the documents.',
        steps: [
          {
            label: 'Spot the false friend',
            text: 'eventualno means possibly. It would quietly turn a promise into a maybe.',
          },
          {
            label: 'Choose the real word',
            text: 'na kraju (in the end) or s vremenom (in time) carries "eventually".',
          },
          {
            label: 'The verb',
            text: 'dostaviti is perfective, right for one completed delivery; the future is ćemo + infinitive.',
          },
          {
            label: 'Place the clitic',
            text: 'Na kraju is the first unit, so ćemo follows it directly.',
          },
        ],
        answer: 'Na kraju ćemo dostaviti sve dokumente.',
      },
      {
        title: 'Three Calques in One Sentence',
        problem: 'Popravi: "Po pitanju plaćanja, izvršit ćemo provjeru na dnevnoj bazi."',
        en: 'Fix: As regards payment, we will carry out a check on a daily basis.',
        steps: [
          {
            label: 'po pitanju',
            text: 'A bureaucratic calque. The Croatian phrase is što se tiče + genitive: što se tiče plaćanja.',
          },
          {
            label: 'izvršiti provjeru',
            text: 'An empty light verb plus a noun. The plain verb is provjeravati — imperfective, because it is a daily routine.',
          },
          { label: 'na dnevnoj bazi', text: 'A calque from English. Croatian says svakodnevno.' },
          {
            label: 'Reassemble',
            text: 'ćemo and ga (the payment) follow the first unit svakodnevno: auxiliary, then accusative.',
          },
        ],
        answer: 'Što se tiče plaćanja, svakodnevno ćemo ga provjeravati.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"Novi kolega je vrlo simpatičan." What is being said?',
          options: [
            'he is likeable',
            'he is sympathetic to our problems',
            'he is pathetic',
            'he is very emotional',
          ],
          correct: 0,
          hint: 'This is one of the false friends: it describes how pleasant someone is, not their compassion.',
          explanation: 'simpatičan = likeable, nice. "Sympathetic" would be suosjećajan.',
        },
        {
          q: 'How do you say "My knees hurt"?',
          options: [
            'Moja koljena bole.',
            'Bole me koljena.',
            'Boli me koljena.',
            'Bole moja koljena mene.',
          ],
          correct: 1,
          hint: 'The body part is the subject and the person is the accusative object — and the verb agrees with a plural subject.',
          explanation:
            'Bole me koljena. The possessive is the English structure, and boli would be singular.',
        },
        {
          q: 'A critic writes "Govor je bio patetičan." What does the critic mean?',
          options: [
            'the speech was pompous and overblown',
            'the speech was pitifully weak',
            'the speech was moving',
            'the speech was short',
          ],
          correct: 0,
          hint: 'Another false friend: it criticises excess, not weakness.',
          explanation: 'patetičan = pompous, overblown. "Pathetic" in the English sense is jadan.',
        },
        {
          q: 'Which is better Croatian for "We analysed the samples"?',
          options: [
            'Izvršili smo analizu uzoraka.',
            'Analizirali smo uzorke.',
            'Analiza uzoraka izvršena je od strane nas.',
            'Vršili smo analizu na uzorcima.',
          ],
          correct: 1,
          hint: 'Look for the plain verb rather than an empty light verb plus a noun.',
          explanation:
            'Analizirali smo uzorke. The others use izvršiti/vršiti analizu, and one adds the od strane calque.',
        },
        {
          q: 'Which is the Croatian for "I am writing a letter" (right now)?',
          options: [
            'Ja sam pišem pismo.',
            'Pišem pismo.',
            'Ja sam pišući pismo.',
            'Jesam pisati pismo.',
          ],
          correct: 1,
          hint: 'Croatian has no compound present.',
          explanation: 'Pišem pismo — the present is the whole of it.',
        },
        {
          q: 'Which replaces the calque "na dnevnoj bazi"?',
          options: ['svaki dan bazično', 'svakodnevno', 'na dan bazu', 'dnevnom bazom'],
          correct: 1,
          hint: 'A single adverb built on "every day".',
          explanation: 'svakodnevno.',
        },
        {
          q: 'Which replaces "vršiti kontrolu"?',
          options: ['kontrolirati', 'kontrolirano', 'vršenje', 'kontrolni'],
          correct: 0,
          hint: 'The plain verb, not a noun with a light verb.',
          explanation: 'kontrolirati.',
        },
        {
          q: 'Which is the natural replacement for "po pitanju rokova"?',
          options: [
            'što se tiče rokova',
            'u pitanju rokovima',
            'po rokovima pitanja',
            'pitajući rokove',
          ],
          correct: 0,
          hint: 'The idiomatic phrase is built on ticati se.',
          explanation: 'što se tiče rokova.',
        },
        {
          type: 'type',
          q: '____ me glava. (hurts — boljeti)',
          answer: 'Boli',
          hint: 'The body part is the subject; the verb agrees with it.',
          explanation: 'Boli me glava.',
        },
        {
          type: 'type',
          q: 'U hladnjaku ____ ni jaja. (there is not — the existential verb)',
          answer: 'nema',
          hint: 'The negative of ima.',
          explanation: 'nema ni jaja.',
        },
        {
          type: 'type',
          q: 'Tim je ____ podatke. (analysed — instead of "izvršio analizu")',
          answer: 'analizirao',
          hint: 'Replace the light-verb phrase with the plain verb, masculine past.',
          explanation: 'Tim je analizirao podatke.',
        },
        {
          type: 'type',
          q: '____ ćemo se dogovoriti. (Eventually — not eventualno; two words)',
          answer: 'Na kraju',
          accept: ['S vremenom'],
          hint: 'The phrase literally means "at the end".',
          explanation: 'Na kraju ćemo se dogovoriti.',
        },
      ],
    },
    checkB: [
      {
        q: 'How do you say "My back hurts"?',
        options: ['Moja leđa bole.', 'Bole me leđa.', 'Boli moja leđa.', 'Leđa me boli.'],
        correct: 1,
        explanation: 'The body part is the subject and the person the object: bole me leđa.',
      },
      {
        q: 'Complete: "U selu ___ ni trgovine." (there is not even a shop)',
        options: ['nije', 'nema', 'ne ima', 'nisu'],
        correct: 1,
        explanation: 'Existential "there is not" is nema, with the genitive.',
      },
      {
        q: 'What does "simpatičan" mean?',
        options: ['sympathetic, compassionate', 'pitiful', 'nervous', 'likeable, nice'],
        correct: 3,
        explanation: 'A false friend: simpatičan is likeable.',
      },
      {
        q: 'Which is better Croatian?',
        options: [
          'Kupac je platio.',
          'Plaćanje je izvršeno od strane kupca.',
          'Izvršeno je plaćanje kupcem.',
          'Kupac je izvršio plaćanje od strane.',
        ],
        correct: 0,
        explanation: 'The plain active verb, not a light verb with od strane.',
      },
      {
        q: 'What is wrong with "Eventualno ćemo sigurno završiti do petka"?',
        options: [
          'nothing',
          '"eventualno" means possibly, which clashes with "sigurno"; for "eventually" say na kraju',
          '"završiti" should be "završavati"',
          '"do petka" should be "u petak"',
        ],
        correct: 1,
        explanation: 'eventualno is a maybe, not an eventually.',
      },
      {
        q: 'What does "aktualna tema" mean?',
        options: [
          'an actual topic',
          'an accurate topic',
          'a current, topical issue',
          'an active topic',
        ],
        correct: 2,
        explanation: 'aktualan — current, topical.',
      },
    ],
    vocab: [
      ['lažni prijatelj', 'false friend', 'Eventualno je lažni prijatelj za govornike engleskoga.'],
      ['eventualno', 'possibly, if need be', 'Eventualno možemo odgoditi sastanak.'],
      ['aktualan', 'current, topical', 'To je vrlo aktualna tema.'],
      ['simpatičan', 'likeable', 'Novi susjed je vrlo simpatičan.'],
      ['patetičan', 'pompous, overblown', 'Govor mu je bio patetičan i predug.'],
      ['doslovan', 'literal', 'Doslovan prijevod često zvuči neprirodno.'],
      ['svakodnevno', 'daily', 'Svakodnevno provjeravam poštu.'],
      ['prijevod', 'translation', 'Prijevod ugovora mora biti točan.'],
    ],
  },

  'proofreading-editing': {
    worked: [
      {
        title: 'Three Passes Over One Sentence',
        problem: 'Lektoriraj: "Rekla je, da je nova knjižnica lijep i da će doći sa bratom."',
        en: 'Proofread: She said that the new library is beautiful and that she will come with her brother.',
        steps: [
          {
            label: 'Pass 1: agreement',
            text: 'knjižnica is feminine, so the adjective is lijepa, not lijep.',
          },
          {
            label: 'Pass 2: forms',
            text: 'Before b the preposition is s: s bratom. sa belongs only before s, š, z, ž.',
          },
          {
            label: 'Pass 3: punctuation',
            text: 'No comma before da in an object clause: Rekla je da…',
          },
        ],
        answer: 'Rekla je da je nova knjižnica lijepa i da će doći s bratom.',
      },
      {
        title: 'The ije / je Check',
        problem: 'Ispravi pravopis: "Nemam vrijemena, a dijeca čekaju mlijeko."',
        en: 'Correct the spelling: I have no time, and the children are waiting for the milk.',
        steps: [
          {
            label: 'Find the yat words',
            text: 'vrijeme, dijete and mlijeko all carry the old yat.',
          },
          {
            label: 'Long or short?',
            text: 'In vremena and djeca the syllable is short, so -ije- shrinks to -e- and -je-. mlijeko keeps its long -ije-.',
          },
          {
            label: 'Check the comma',
            text: 'a joins two clauses that could each stand alone, so the comma before it stays.',
          },
        ],
        answer: 'Nemam vremena, a djeca čekaju mlijeko.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which sentence is correctly punctuated?',
          options: [
            'Znam da si umoran, ali moramo krenuti.',
            'Znam, da si umoran ali moramo krenuti.',
            'Znam da si umoran ali, moramo krenuti.',
            'Znam, da si umoran, ali moramo krenuti.',
          ],
          correct: 0,
          hint: 'No comma before da in an object clause; a comma before ali.',
          explanation:
            'Znam da si umoran, ali moramo krenuti — the object clause takes no comma, the contrast does.',
        },
        {
          q: 'Complete: "Došao je ___ ženom."',
          options: ['s', 'sa', 'so', 'se'],
          correct: 1,
          hint: 'Look at the first letter of the next word, and remember which letters take the longer form.',
          explanation:
            'Before ž the preposition is sa: sa ženom. Before most other consonants it is s: s bratom.',
        },
        {
          q: 'Which spelling is right?',
          options: ['ljepota', 'lijepota', 'ljipota', 'liepota'],
          correct: 0,
          hint: 'The adjective has a long yat, but in the derived noun the syllable is short.',
          explanation: 'lijep but ljepota — the yat shortens, and -ije- becomes -je-.',
        },
        {
          q: 'Complete: "Rekla mi je da ___ vratiti sutra." (she will return it (m.) to me — će, mi, ga)',
          options: ['ga mi će', 'će ga mi', 'mi ga će', 'će mi ga'],
          correct: 3,
          hint: 'The order holds in every clause: auxiliary, then dative, then accusative.',
          explanation: 'da će mi ga vratiti — auxiliary, dative, accusative, right after da.',
        },
        {
          q: 'Which sentence is missing a comma?',
          options: [
            'Znam da si umoran.',
            'Umoran si ali moraš ići.',
            'Mislim da je tako.',
            'Rekla je da dolazi.',
          ],
          correct: 1,
          hint: 'A comma goes before the contrastive conjunction.',
          explanation: 'Umoran si, ali moraš ići.',
        },
        {
          q: 'Which spelling is right?',
          options: ['rječnik', 'riječnik', 'rijećnik', 'rječnjik'],
          correct: 0,
          hint: 'The syllable shortened, so the long jat shortened too.',
          explanation: 'riječ → rječnik.',
        },
        {
          q: 'Complete: "Došla je ___ bratom."',
          options: ['sa', 's', 'so', 'se'],
          correct: 1,
          hint: 'The long form is only for s, š, z, ž.',
          explanation: 's bratom.',
        },
        {
          q: 'Which is written correctly?',
          options: ['nemogu', 'ne mogu', 'ne-mogu', 'nemožem'],
          correct: 1,
          hint: 'The negative particle is written apart, except with a few verbs such as imati.',
          explanation: 'ne mogu — two words.',
        },
        {
          type: 'type',
          q: 'Nemam ____ za kavu. (time — vrijeme; genitive)',
          answer: 'vremena',
          hint: 'In the oblique cases the long jat shortens.',
          explanation: 'vrijeme → vremena.',
        },
        {
          type: 'type',
          q: 'Našao sam tri ____ u tekstu. (mistakes — greška)',
          answer: 'greške',
          hint: 'After tri, the feminine noun ends in -e.',
          explanation: 'tri greške.',
        },
        {
          type: 'type',
          q: 'Javio sam ____ jučer. (to him — the dative clitic and the reflexive, in order)',
          answer: 'mu se',
          hint: 'The dative pronoun comes before se.',
          explanation: 'Javio sam mu se.',
        },
        {
          type: 'type',
          q: 'Unatoč ____ nismo odustali. (the cold — hladnoća)',
          answer: 'hladnoći',
          hint: 'unatoč governs the dative.',
          explanation: 'unatoč hladnoći.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is correctly punctuated?',
        options: [
          'Rekao je, da će doći.',
          'Rekao je da će doći.',
          'Rekao je da, će doći.',
          'Rekao je da će, doći.',
        ],
        correct: 1,
        explanation: 'No comma before da in an object clause.',
      },
      {
        q: 'Complete: "Otišla je na more ___ zetom."',
        options: ['s', 'so', 'sa', 'su'],
        correct: 2,
        explanation: 'sa before s, š, z, ž — sa zetom.',
      },
      {
        q: 'Which clitic order is right?',
        options: [
          'Nisam se mu javio.',
          'Mu se nisam javio.',
          'Nisam javio mu se.',
          'Nisam mu se javio.',
        ],
        correct: 3,
        explanation: 'After nisam: dative mu, then se.',
      },
      {
        q: 'What is wrong with "Unatoč upozorenja, krenuli su na put"?',
        options: [
          'unatoč takes the dative: unatoč upozorenju',
          'the comma must go',
          'krenuli should be krenuo',
          'put should be puta',
        ],
        correct: 0,
        explanation: 'unatoč + dative.',
      },
      {
        q: 'Which spelling is right?',
        options: ['dijeca', 'djeca', 'dieca', 'djeća'],
        correct: 1,
        explanation: 'The short jat gives -je-: djeca.',
      },
      {
        q: 'Which sentence would a lektor sign?',
        options: [
          'Kad dođeš javi se.',
          'Kad dođeš, javi se.',
          'Kad, dođeš javi se.',
          'Kad dođeš javi, se.',
        ],
        correct: 1,
        explanation: 'A kad clause that comes first is set off by a comma.',
      },
    ],
    vocab: [
      ['lektor', 'language editor', 'Lektor je pregledao cijeli rukopis.'],
      ['lektorirati', 'to copy-edit', 'Tekst treba lektorirati prije objave.'],
      [
        'pravopis',
        'orthography, spelling rules',
        'Pravopis propisuje kada se piše ije, a kada je.',
      ],
      ['zarez', 'comma', 'Ispred veznika da ne stavljamo zarez.'],
      ['slaganje', 'agreement (grammatical)', 'Prvo provjeravam slaganje pridjeva i imenice.'],
      ['rukopis', 'manuscript', 'Rukopis je predan izdavaču u ožujku.'],
      ['pogreška', 'error', 'Pročitao sam tekst naglas i našao tri pogreške.'],
      ['naglas', 'aloud', 'Čitanje naglas otkriva greške u slaganju.'],
    ],
  },

  'media-analysis': {
    worked: [
      {
        title: 'Who Is Missing?',
        problem:
          'Naslov glasi: "Zatvorena su dva rodilišta." Prepiši ga tako da se vidi tko je to učinio (ministarstvo).',
        en: 'The headline reads: Two maternity wards have been closed. Rewrite it so the agent (the ministry) is visible.',
        steps: [
          {
            label: 'Read the construction',
            text: 'biti + participle is agentless by design: the wards "were closed" by nobody named.',
          },
          {
            label: 'Supply the agent',
            text: 'The ministry did it, so ministarstvo becomes the subject.',
          },
          {
            label: 'Rebuild in the active',
            text: 'zatvoriti is perfective; dva rodilišta becomes the object, still dva + genitive singular.',
          },
          { label: 'Agreement', text: 'ministarstvo is neuter, so the participle is zatvorilo.' },
        ],
        answer: 'Ministarstvo je zatvorilo dva rodilišta.',
      },
      {
        title: 'Navodno or Tobože?',
        problem:
          'Izvijesti neutralno, bez vlastitog stava: "The mayor allegedly knew about the problem."',
        en: 'Report neutrally, taking no position: The mayor allegedly knew about the problem.',
        steps: [
          {
            label: 'Neutral or sceptical?',
            text: 'The report must not take a side, so the neutral distancer navodno — not tobože, which says the writer disbelieves it.',
          },
          {
            label: 'Place it',
            text: 'navodno sits before the participle: Gradonačelnik je navodno znao…',
          },
          {
            label: 'The government',
            text: 'To know about something is znati za + accusative: za problem.',
          },
        ],
        answer: 'Gradonačelnik je navodno znao za problem.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which headline hides who acted?',
          options: [
            'Vlada je podigla cijene struje.',
            'Podignute su cijene struje.',
            'Ministar je najavio poskupljenje.',
            'Distributer je podigao cijene.',
          ],
          correct: 1,
          hint: 'Look for the construction that is agentless by design.',
          explanation:
            'Podignute su cijene — the participle passive: prices "were raised", by nobody named. The others name the actor.',
        },
        {
          q: 'Complete — the writer believes the claim is false: "___ besplatan program građane stoji milijune."',
          options: ['Navodno', 'Tobože', 'Naime', 'Sigurno'],
          correct: 1,
          hint: 'You need the word that carries the writer’s scepticism, not neutral distance.',
          explanation:
            'Tobože besplatan — "supposedly free", and the writer thinks it is not. navodno would stay neutral.',
        },
        {
          q: '"Došlo je do povećanja poreza." Which version names the agent (the government)?',
          options: [
            'Vlada je povećala poreze.',
            'Povećani su porezi.',
            'Došlo je do vladinog povećanja.',
            'Porezi su se povećali.',
          ],
          correct: 0,
          hint: 'Put the actor in the subject position of an active verb.',
          explanation:
            'Vlada je povećala poreze — the agent as subject. The others keep the actor hidden or only hint at it.',
        },
        {
          q: 'One paper writes "mjere štednje", another "rezovi", about the same policy. What does the second choice do?',
          options: [
            'frames the same policy as cuts, more negatively',
            'names a different policy',
            'is more neutral',
            'is only a spelling variant',
          ],
          correct: 0,
          hint: 'Near-synonyms frame; ask which word sounds like something taken away.',
          explanation:
            'rezovi (cuts) frames the policy as loss; mjere štednje (austerity measures) is the more neutral label.',
        },
        {
          q: 'Which phrase marks an unverified source?',
          options: [
            'prema neslužbenim informacijama',
            'prema službenom priopćenju',
            'kako je izjavio ministar',
            'stoji u proračunu',
          ],
          correct: 0,
          hint: 'Look for the word meaning "unofficial".',
          explanation: 'prema neslužbenim informacijama.',
        },
        {
          q: 'Complete: "Ministar je odbio ___." (to comment)',
          options: ['komentar', 'komentirati', 'komentirao', 'komentiranje'],
          correct: 1,
          hint: 'odbiti takes an infinitive.',
          explanation: 'odbio je komentirati.',
        },
        {
          q: 'What does "takozvani" signal?',
          options: [
            'a neutral label',
            'the writer rejects the label',
            'a quotation from an official',
            'a new word',
          ],
          correct: 1,
          hint: 'Think of the English "so-called" and its tone.',
          explanation: 'takozvani — the writer distances himself.',
        },
        {
          q: '"Prosvjednici" or "izgrednici" for the same crowd: which frames them as troublemakers?',
          options: ['prosvjednici', 'izgrednici', 'both equally', 'neither'],
          correct: 1,
          hint: 'One word is built on izgred, a disturbance.',
          explanation: 'izgrednici — rioters.',
        },
        {
          type: 'type',
          q: '____ su pregovori propali. (Allegedly — neutral distance)',
          answer: 'Navodno',
          hint: 'The paper reports without vouching; the adverb comes from navoditi.',
          explanation: 'Navodno su pregovori propali.',
        },
        {
          type: 'type',
          q: 'Došlo je do ____ sredstava za kulturu. (a reduction — smanjiti; verbal noun)',
          answer: 'smanjenja',
          hint: 'do takes the genitive of the verbal noun.',
          explanation: 'do smanjenja sredstava.',
        },
        {
          type: 'type',
          q: '____ neovisna komisija opet je zakazala. (Supposedly — the writer thinks it false)',
          answer: 'Tobože',
          hint: 'The sceptical adverb, not the neutral one.',
          explanation: 'Tobože neovisna komisija…',
        },
        {
          type: 'type',
          q: 'Vlada je ____ sredstva za deset posto. (cut — smanjiti)',
          answer: 'smanjila',
          hint: 'Name the agent: vlada is feminine, past tense.',
          explanation: 'Vlada je smanjila sredstva.',
        },
      ],
    },
    checkB: [
      {
        q: '"Došlo je do povećanja cijena." What is missing?',
        options: ['what rose', 'who raised them', 'by how much', 'when'],
        correct: 1,
        explanation: 'The nominalisation removes the actor.',
      },
      {
        q: "Which word signals the writer's scepticism?",
        options: ['navodno', 'kako doznajemo', 'bez komentara', 'tobože'],
        correct: 3,
        explanation: 'tobože — supposedly, and the writer does not believe it.',
      },
      {
        q: 'Complete: "___ je ministar podnio ostavku." (reportedly — the paper does not vouch for it)',
        options: ['Navodno', 'Tobože', 'Sigurno', 'Naime'],
        correct: 0,
        explanation: 'navodno is neutral distance.',
      },
      {
        q: 'Which sentence is reporting rather than commentary?',
        options: [
          'Takozvana reforma opet je propala.',
          'Tobože neovisni stručnjaci šute.',
          'Sabor je izglasao zakon.',
          'Naravno da je to pogreška.',
        ],
        correct: 2,
        explanation: 'A plain statement of who did what.',
      },
      {
        q: '"Mjere" and "rezovi" for the same policy: what is the difference?',
        options: [
          'none',
          'mjere is neutral; rezovi frames the policy as cuts',
          'rezovi is neutral; mjere is negative',
          'mjere is only for health',
        ],
        correct: 1,
        explanation: 'Near-synonyms frame: the second takes a side.',
      },
      {
        q: 'Which construction names the agent?',
        options: [
          'Uvedene su nove naknade.',
          'Grad je uveo nove naknade.',
          'Došlo je do uvođenja naknada.',
          'Naknade se uvode.',
        ],
        correct: 1,
        explanation: 'Only the active names who acted.',
      },
    ],
    vocab: [
      ['navodno', 'allegedly, reportedly', 'Navodno su pregovori propali.'],
      ['tobože', 'supposedly (sceptical)', 'Tobože neovisno tijelo donijelo je zaključak.'],
      ['takozvani', 'so-called', 'Takozvana reforma svela se na ukidanje škola.'],
      ['izvor', 'source', 'Informaciju smo dobili iz neslužbenih izvora.'],
      ['prosvjed', 'protest', 'Prosvjed je protekao mirno.'],
      ['nemiri', 'unrest, riots', 'Neki su mediji prosvjed nazvali nemirima.'],
      ['priopćenje', 'press release', 'Ministarstvo je izdalo priopćenje.'],
      ['naslov', 'headline', 'Naslov je prešutio tko je donio odluku.'],
    ],
  },

  'law-administration': {
    worked: [
      {
        title: 'Reading a Deadline Sentence',
        problem: 'Raspakiraj: "Žalba se podnosi u roku od 8 dana od dana primitka rješenja."',
        en: 'Unpack: An appeal is lodged within 8 days of the date of receipt of the decision.',
        steps: [
          {
            label: 'Find the rok',
            text: 'u roku od 8 dana — within 8 days. This is the sentence to read twice.',
          },
          {
            label: 'Find the start',
            text: 'od dana primitka rješenja — counted from the day the decision was received: od + genitive, then a chain of genitives.',
          },
          {
            label: 'Unpack the passive',
            text: 'žalba se podnosi — "an appeal is lodged" means you lodge it.',
          },
          {
            label: 'Say it plainly',
            text: 'Turn the nouns back into a clause: od dana kad ste primili rješenje.',
          },
        ],
        answer: 'Žalbu možete podnijeti u roku od 8 dana od dana kad ste primili rješenje.',
      },
      {
        title: 'Writing a Citation',
        problem:
          'Napiši "pursuant to article 7, paragraph 3 of the Act" punim riječima i skraćeno.',
        en: 'Write "pursuant to article 7, paragraph 3 of the Act" in full and abbreviated.',
        steps: [
          { label: 'The formula', text: 'temeljem takes the genitive: temeljem članka.' },
          {
            label: 'The chain',
            text: 'The paragraph and the Act follow in the genitive too: članka 7. stavka 3. Zakona.',
          },
          {
            label: 'The numbers',
            text: 'Article and paragraph numbers are ordinals, so each carries a full stop.',
          },
          { label: 'Abbreviate', text: 'članak → čl., stavak → st.: čl. 7. st. 3.' },
        ],
        answer: 'temeljem članka 7. stavka 3. Zakona — temeljem čl. 7. st. 3. Zakona',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ odredbama ovog ugovora…" (in accordance with)',
          options: ['Temeljem', 'Sukladno', 'Zbog', 'Radi'],
          correct: 1,
          hint: 'odredbama is dative, and only one of these formulas takes the dative.',
          explanation:
            'sukladno + dative: sukladno odredbama. temeljem, zbog and radi all take the genitive.',
        },
        {
          q: 'Complete: "Temeljem ___ suda…" (the judgment — presuda)',
          options: ['presude', 'presudi', 'presudu', 'presudom'],
          correct: 0,
          hint: 'temeljem governs the genitive.',
          explanation: 'temeljem presude suda — genitive, and suda follows in the genitive too.',
        },
        {
          q: 'What is a "stavak"?',
          options: [
            'an article of a law',
            'a paragraph within an article',
            'an appeal',
            'a decree',
          ],
          correct: 1,
          hint: 'It is the smaller unit, numbered inside a članak.',
          explanation:
            'stavak is a numbered paragraph within an article (članak). An appeal is žalba, a decree uredba.',
        },
        {
          q: 'Complete: "Ugovor se sklapa na ___ vrijeme." (for an indefinite period)',
          options: ['neodređeno', 'neodređenom', 'neodređenog', 'neodređena'],
          correct: 0,
          hint: 'na here marks a duration and takes the accusative; vrijeme is neuter.',
          explanation: 'na neodređeno vrijeme — neuter accusative, identical to the nominative.',
        },
        {
          q: 'What is a "žalba"?',
          options: ['an appeal', 'a regulation', 'a paragraph', 'a decree'],
          correct: 0,
          hint: 'What you lodge when you disagree with a decision.',
          explanation: 'žalba — an appeal.',
        },
        {
          q: 'Complete: "___ je dužan priložiti presliku osobne iskaznice." (The applicant)',
          options: [
            'Podnositelj zahtjeva',
            'Podnošenje zahtjeva',
            'Podnesen zahtjev',
            'Podnijevši zahtjev',
          ],
          correct: 0,
          hint: 'A person is needed — the doer noun in -telj.',
          explanation: 'Podnositelj zahtjeva je dužan…',
        },
        {
          q: 'Which case does "sukladno" take?',
          options: ['genitive', 'dative', 'accusative', 'instrumental'],
          correct: 1,
          hint: 'It differs from temeljem in exactly this.',
          explanation: 'sukladno + dative.',
        },
        {
          q: 'What is an "uredba"?',
          options: ['a court judgment', 'a decree', 'an appeal', 'an article'],
          correct: 1,
          hint: 'The government issues it, not a court.',
          explanation: 'uredba — a decree, an ordinance.',
        },
        {
          type: 'type',
          q: 'Ugovor ____ na snagu 1. siječnja. (comes into force — present, 3rd singular)',
          answer: 'stupa',
          hint: 'The fixed phrase uses the present of stupati.',
          explanation: 'Ugovor stupa na snagu.',
        },
        {
          type: 'type',
          q: 'Žalba se podnosi u ____ od 15 dana. (the time limit — rok)',
          answer: 'roku',
          hint: 'u + locative of the word for a deadline.',
          explanation: 'u roku od 15 dana.',
        },
        {
          type: 'type',
          q: 'Podnositelj je dužan priložiti ____ osobne iskaznice. (a copy — preslika)',
          answer: 'presliku',
          hint: 'The accusative of a feminine noun in -a.',
          explanation: 'priložiti presliku.',
        },
        {
          type: 'type',
          q: 'Ugovor se sklapa na ____ vrijeme. (for a fixed period — određen)',
          answer: 'određeno',
          hint: 'The neuter adjective agreeing with vrijeme — the opposite of the indefinite term.',
          explanation: 'na određeno vrijeme.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sukladno ___ o najmu…" (the contract — ugovor)',
        options: ['ugovora', 'ugovoru', 'ugovor', 'ugovorom'],
        correct: 1,
        explanation: 'sukladno takes the dative.',
      },
      {
        q: 'Which citation is written correctly?',
        options: ['čl. 12. st. 3.', 'čl. 12 st. 3', 'čl 12, st 3', 'članak 12, st. 3'],
        correct: 0,
        explanation: 'The full stops mark the numbers as ordinals.',
      },
      {
        q: 'What is a "presuda"?',
        options: ['an administrative decision', 'a law', 'a court judgment', 'an appeal'],
        correct: 2,
        explanation: 'presuda comes from a court; rješenje from an office.',
      },
      {
        q: 'What is wrong with "Žalba se podnosi u roku od osam dan"?',
        options: [
          'nothing',
          'after a number above four the noun is genitive plural: osam dana',
          '"podnosi" should be "podnijeti"',
          '"roku" should be "rok"',
        ],
        correct: 1,
        explanation: 'osam dana.',
      },
      {
        q: 'Decode: "Ugovor stupa na snagu danom potpisa."',
        options: [
          'The contract ends when signed.',
          'The contract must be signed daily.',
          'The contract is signed by force.',
          'The contract comes into force on the day of signing.',
        ],
        correct: 3,
        explanation: 'stupiti na snagu — to come into force.',
      },
      {
        q: 'What does "u roku od 15 dana" state?',
        options: ['a fee', 'a deadline — within 15 days', 'a place', 'a penalty'],
        correct: 1,
        explanation: 'rok — the deadline, the sentence worth reading twice.',
      },
    ],
    vocab: [
      ['zakon', 'law, act', 'Novi zakon stupa na snagu u siječnju.'],
      ['propis', 'regulation', 'Svi se propisi objavljuju u Narodnim novinama.'],
      ['članak', 'article (of a law)', 'Pogledajte članak 5. stavak 2.'],
      ['stavak', 'paragraph', 'Članak ima tri stavka.'],
      ['rješenje', 'administrative decision', 'Protiv ovog rješenja može se izjaviti žalba.'],
      ['žalba', 'appeal', 'Žalba se podnosi u roku od 15 dana.'],
      ['rok', 'deadline, time limit', 'Rok za predaju dokumenata istječe u petak.'],
      ['najmoprimac', 'tenant', 'Najmoprimac je dužan plaćati režije.'],
    ],
  },

  'science-technology': {
    worked: [
      {
        title: 'Decoding a Coined Term',
        problem: 'Što je "brzinomjer"?',
        en: 'What is a brzinomjer?',
        steps: [
          {
            label: 'Split it',
            text: 'brzin(a) + -o- + -mjer: speed, a linking vowel, and a building block.',
          },
          {
            label: 'Read the block',
            text: '-mjer is the measurer, as in toplomjer and tlakomjer.',
          },
          { label: 'Put it together', text: 'An instrument that measures speed: a speedometer.' },
        ],
        answer: 'brzinomjer — speedometer',
      },
      {
        title: 'Reporting a Measurement',
        problem: 'Napiši impersonalno: "We measured the temperature; it was 18.5 °C."',
        en: 'Write impersonally: We measured the temperature; it was 18.5 °C.',
        steps: [
          {
            label: 'Remove the first person',
            text: 'No mi: the passive participle does the work — izmjerena temperatura.',
          },
          {
            label: 'The verb for a quantity',
            text: 'A value "amounts to": iznositi — temperatura je iznosila…',
          },
          {
            label: 'The number',
            text: 'The decimal separator is a comma, and the unit follows after a space: 18,5 °C.',
          },
        ],
        answer: 'Izmjerena temperatura iznosila je 18,5 °C.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What is a "naftovod"?',
          options: ['an oil pipeline', 'an oil gauge', 'an oil field', 'an oil tanker'],
          correct: 0,
          hint: 'The second part is the same block as in vodovod and plinovod.',
          explanation: 'nafta + -vod (conduit): an oil pipeline. A gauge would need -mjer.',
        },
        {
          q: 'How is "two and a half kilograms" written in a Croatian report?',
          options: ['2.5kg', '2,5 kg', '2,5kg', '2.5 kg'],
          correct: 1,
          hint: 'Check two things: the decimal separator, and the space before the unit.',
          explanation: '2,5 kg — a decimal comma and a space before the unit.',
        },
        {
          q: 'Which word does a Croatian school textbook use for "geography"?',
          options: ['geografija', 'zemljopis', 'zemljomjer', 'zemljovid'],
          correct: 1,
          hint: 'You want the native compound with the "writing, description" block.',
          explanation:
            'zemljopis (earth-writing) is the school word; geografija is the international one. zemljomjer is a surveyor and zemljovid a map.',
        },
        {
          q: 'Complete: "Utvrđeno ___ da uzorak nije onečišćen." (It was established)',
          options: ['je', 'su', 'se', 'bi'],
          correct: 0,
          hint: 'The impersonal participle is neuter singular, so the auxiliary is third-person singular.',
          explanation: 'Utvrđeno je da… — the impersonal passive of scientific prose.',
        },
        {
          q: 'What is a "vodovod"?',
          options: ['a water meter', 'the water mains', 'a well', 'a water bottle'],
          correct: 1,
          hint: '-vod means a conduit.',
          explanation: 'vodovod — water-conduit, the mains.',
        },
        {
          q: 'How is "twenty-five degrees Celsius" written?',
          options: ['25°C', '25 °C', '25° C', '°C 25'],
          correct: 1,
          hint: 'The unit follows the number after a space.',
          explanation: '25 °C.',
        },
        {
          q: 'Which is the scientific register?',
          options: [
            'Izmjerio sam temperaturu.',
            'Temperatura je izmjerena u tri navrata.',
            'Pa, izmjerili smo to.',
            'Izmjeri temperaturu!',
          ],
          correct: 1,
          hint: 'Impersonal and precise.',
          explanation: 'Temperatura je izmjerena…',
        },
        {
          q: 'What is "kisik"?',
          options: ['nitrogen', 'hydrogen', 'oxygen', 'carbon'],
          correct: 2,
          hint: 'The name comes from kiseo, sour.',
          explanation: 'kisik — oxygen.',
        },
        {
          type: 'type',
          q: 'Uzorak se sastojao od 200 ____. (participants — ispitanik)',
          answer: 'ispitanika',
          hint: 'After a number above four, the genitive plural.',
          explanation: 'od 200 ispitanika.',
        },
        {
          type: 'type',
          q: '____ je da postoji značajna razlika. (It was established — utvrditi)',
          answer: 'Utvrđeno',
          hint: 'The impersonal passive participle, neuter.',
          explanation: 'Utvrđeno je da…',
        },
        {
          type: 'type',
          q: 'Udio ____ u zraku iznosi oko 21 posto. (oxygen — kisik)',
          answer: 'kisika',
          hint: 'The native word, in the genitive after udio.',
          explanation: 'udio kisika.',
        },
        {
          type: 'type',
          q: 'Novi ____ spaja terminal na Krku s Mađarskom. (gas pipeline — plin + -vod)',
          answer: 'plinovod',
          hint: 'Join the word for gas to -vod with a linking o.',
          explanation: 'plinovod.',
        },
      ],
    },
    checkB: [
      {
        q: 'Split "toplomjer": what does it measure?',
        options: ['pressure', 'heat', 'weight', 'speed'],
        correct: 1,
        explanation: 'toplo (heat) + -mjer (measurer).',
      },
      {
        q: 'Complete: "Postupak se sastoji ___ tri koraka."',
        options: ['za', 's', 'od', 'u'],
        correct: 2,
        explanation: 'sastojati se od + genitive.',
      },
      {
        q: 'Which pair names the SAME thing, native / international?',
        options: [
          'zemljopis / geografija',
          'zemljopis / povijest',
          'kisik / dušik',
          'toplomjer / vodomjer',
        ],
        correct: 0,
        explanation: 'zemljopis is earth-writing, geography.',
      },
      {
        q: 'What is wrong with "Pogreška iznosi 1.5 posto"?',
        options: [
          'nothing',
          'the decimal separator is a comma: 1,5 posto',
          '"posto" should be "postotak"',
          '"iznosi" should be "iznose"',
        ],
        correct: 1,
        explanation: 'Croatian writes decimals with a comma.',
      },
      {
        q: 'Complete: "Iz podataka ___ da je hipoteza potvrđena."',
        options: ['izlazi', 'proizlaze', 'dolazi', 'proizlazi'],
        correct: 3,
        explanation: 'proizlaziti iz, 3rd singular with a da-clause subject.',
      },
      {
        q: 'What does "-pis" mean in "životopis"?',
        options: ['a measurer', 'a conduit', 'writing, description', 'life'],
        correct: 2,
        explanation: 'život + pis: a life described — a CV.',
      },
    ],
    vocab: [
      ['istraživanje', 'research', 'Istraživanje je trajalo dvije godine.'],
      ['uzorak', 'sample', 'Uzorak se sastojao od 120 ispitanika.'],
      ['mjerenje', 'measurement', 'Mjerenja su provedena u laboratoriju.'],
      ['pokus', 'experiment', 'Pokus je ponovljen tri puta.'],
      ['omjer', 'ratio', 'Omjer muških i ženskih ispitanika bio je jednak.'],
      ['toplomjer', 'thermometer', 'Toplomjer je pokazivao 25 °C.'],
      ['kisik', 'oxygen', 'Udio kisika u zraku iznosi oko 21 posto.'],
      ['utvrditi', 'to establish, determine', 'Utvrđeno je da uzorak nije onečišćen.'],
    ],
  },

  'arts-culture': {
    worked: [
      {
        title: 'A Verdict With a Reason',
        problem: 'Reci što misliš o filmu: svidio ti se jer glumci nikad ne pretjeruju.',
        en: 'Say what you thought of the film: you liked it because the actors never overdo it.',
        steps: [
          {
            label: 'Avoid the bare verdict',
            text: 'Film je bio dobar gives nobody anything to reply to.',
          },
          {
            label: 'The verb',
            text: 'svidjeti se makes the film the subject and you the dative: film mi se svidio.',
          },
          {
            label: 'Give the because',
            text: 'jer + something concrete: glumci nikad ne pretjeruju.',
          },
        ],
        answer: 'Film mi se svidio jer glumci nikad ne pretjeruju.',
      },
      {
        title: 'Praise, Then Qualify',
        problem: 'Opiši koncert: zbor je pjevao nadahnuto, ali akustika dvorane bila je loša.',
        en: 'Describe a concert: the choir sang with inspiration, but the hall’s acoustics were poor.',
        steps: [
          { label: 'The praise', text: 'How they sang takes the adverb: nadahnut → nadahnuto.' },
          { label: 'The turn', text: 'ali introduces the reservation after the praise.' },
          {
            label: 'The criticism',
            text: 'akustika is feminine, so the adjective is loša; dvorana follows in the genitive.',
          },
        ],
        answer: 'Zbor je pjevao nadahnuto, ali akustika dvorane bila je loša.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which adjective criticises a plot you could see coming?',
          options: ['duhovit', 'predvidljiv', 'nadahnut', 'dojmljiv'],
          correct: 1,
          hint: 'The word is built from the verb for "foresee".',
          explanation:
            'predvidljiv — predictable. duhovit (witty), nadahnut (inspired) and dojmljiv (impressive) are all praise.',
        },
        {
          q: 'Complete: "Završna scena me duboko ___." (moved — a single effect)',
          options: ['dirnuti', 'dirnula', 'dirnut', 'dirnuo'],
          correct: 1,
          hint: 'A single completed effect, in the past, agreeing with a feminine subject.',
          explanation:
            'dirnula — perfective dirnuti, feminine to agree with scena. dirnuo is masculine.',
        },
        {
          q: 'Complete: "Tko je ___ ove opere?" (the composer)',
          options: ['skladatelj', 'redatelj', 'glumac', 'scenarij'],
          correct: 0,
          hint: 'The one who writes the music, with the formal agent suffix.',
          explanation:
            'skladatelj — the composer. redatelj directs, glumac acts, and scenarij is a screenplay.',
        },
        {
          q: 'Complete: "Klapa je otpjevala pjesmu bez ___." (unaccompanied — pratnja)',
          options: ['pratnja', 'pratnje', 'pratnji', 'pratnjom'],
          correct: 1,
          hint: 'bez governs the genitive.',
          explanation: 'bez pratnje — a cappella, the way klapa traditionally sings.',
        },
        {
          q: 'What is "gluma"?',
          options: ['the screenplay', 'acting', 'the stage', 'the audience'],
          correct: 1,
          hint: 'What an actor does.',
          explanation: 'gluma — acting.',
        },
        {
          q: 'Which festival is held in Dubrovnik?',
          options: [
            'Dubrovačke ljetne igre',
            'INmusic',
            'the Motovun film festival',
            'Sinjska alka',
          ],
          correct: 0,
          hint: 'Its name contains the city.',
          explanation: 'Dubrovačke ljetne igre, since 1950.',
        },
        {
          q: 'Complete: "Film je duhovit, ali ___." (predictable)',
          options: ['predvidljiv', 'predviđen', 'predviđajući', 'predvidjeti'],
          correct: 0,
          hint: 'The adjective in -ljiv.',
          explanation: 'predvidljiv — you could see it coming.',
        },
        {
          q: 'Which word means "screenplay"?',
          options: ['scena', 'scenarij', 'scenografija', 'scenski'],
          correct: 1,
          hint: 'The written text a film is shot from.',
          explanation: 'scenarij.',
        },
        {
          type: 'type',
          q: 'Na ____ je nastupila klapa iz Omiša. (the festival — festival)',
          answer: 'festivalu',
          hint: 'na + locative.',
          explanation: 'na festivalu.',
        },
        {
          type: 'type',
          q: 'Predstava je bila ____, ali predugačka. (moving — potresan)',
          answer: 'potresna',
          hint: 'The adjective agrees with predstava.',
          explanation: 'potresna predstava.',
        },
        {
          type: 'type',
          q: 'Roman mi se svidio ____ je završetak otvoren. (because)',
          answer: 'zato što',
          accept: ['jer'],
          hint: 'Give the reason — the two-word conjunction or its one-word synonym.',
          explanation: 'svidio mi se zato što (jer)…',
        },
        {
          type: 'type',
          q: 'Tko je ____ ovog filma? (the director — from režirati)',
          answer: 'redatelj',
          hint: "The doer suffix -telj on the verb's stem.",
          explanation: 'redatelj filma.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which adjective is high praise for a documentary?',
        options: ['predvidljiv', 'potresan', 'dosadan', 'prenapuhan'],
        correct: 1,
        explanation: 'potresan — deeply moving, a compliment.',
      },
      {
        q: 'What is a "redatelj"?',
        options: ['an actor', 'a composer', 'a director', 'a critic'],
        correct: 2,
        explanation: 'redatelj — the director of a film or play.',
      },
      {
        q: 'Complete: "Izložba ___ do kraja mjeseca." (runs)',
        options: ['traje', 'trajati', 'trajala', 'traju'],
        correct: 0,
        explanation: 'trajati, present 3rd singular.',
      },
      {
        q: 'Which sentence gives a reason, not just a verdict?',
        options: [
          'Knjiga je bila dobra.',
          'Knjiga mi se svidjela.',
          'Knjiga je bila u redu.',
          'Knjiga me dirnula jer ne nudi lake odgovore.',
        ],
        correct: 3,
        explanation: 'The because is what a Croatian can respond to.',
      },
      {
        q: 'What is wrong with "Predstava je trajala do ponoć"?',
        options: [
          'nothing',
          '"do" takes the genitive: do ponoći',
          '"trajala" should be "trajao"',
          '"predstava" should be "predstave"',
        ],
        correct: 1,
        explanation: 'do + genitive: do ponoći.',
      },
      {
        q: 'Which adjective is NEGATIVE?',
        options: ['duhovit', 'nadahnut', 'dosadan', 'dojmljiv'],
        correct: 2,
        explanation: 'dosadan — dull.',
      },
    ],
    vocab: [
      ['kazalište', 'theatre', 'Idemo u kazalište u subotu.'],
      ['predstava', 'play, performance', 'Predstava je bila potresna.'],
      ['redatelj', 'director', 'Redatelj se odlučio za sveden pristup.'],
      ['izložba', 'exhibition', 'Izložba traje do kraja mjeseca.'],
      ['skladatelj', 'composer', 'Skladatelj je napisao djelo za zbor.'],
      ['gluma', 'acting', 'Gluma je bila izvrsna.'],
      ['dojmljiv', 'impressive', 'Izložba je bila dojmljiva.'],
      ['prenapuhan', 'overblown', 'Film je na kraju postao prenapuhan.'],
    ],
  },

  'regional-varieties': {
    worked: [
      {
        title: 'Decoding a Coastal Question',
        problem: 'Teta u Splitu pita: "Di si stavila pjat?" Prevedi na standard.',
        en: 'Your aunt in Split asks where you put the plate. Put it into the standard.',
        steps: [
          { label: 'di', text: 'di is the Dalmatian form of gdje.' },
          { label: 'pjat', text: 'pjat is a Venetian loan; the standard word is tanjur.' },
          {
            label: 'Keep the grammar',
            text: 'The rest is already standard: si stavila, with the clitic in second position.',
          },
        ],
        answer: 'Gdje si stavila tanjur?',
      },
      {
        title: 'Ikavian to Standard',
        problem: 'Djed kaže: "Lipo je vidit dicu u selu." Napiši standardnim oblicima.',
        en: 'Grandad says it is lovely to see children in the village. Write it in standard forms.',
        steps: [
          {
            label: 'Find the ikavian',
            text: 'lipo and dicu have -i- where the standard has the yat reflex.',
          },
          {
            label: 'Restore the yat',
            text: 'In the long syllable it becomes -ije-: lijepo. In the short one, -je-: djecu.',
          },
          {
            label: 'The infinitive',
            text: 'vidit is the ikavian infinitive with its final i dropped in speech; the standard writes vidjeti.',
          },
        ],
        answer: 'Lijepo je vidjeti djecu u selu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which word is the coastal Venetian loan for "kitchen"?',
          options: ['kuhinja', 'kužina', 'špajza', 'kupaonica'],
          correct: 1,
          hint: 'Look for the word that sounds closest to the Italian.',
          explanation:
            'kužina is the coastal loan; kuhinja is the standard. špajza is a pantry and kupaonica a bathroom.',
        },
        {
          q: 'Your grandfather says "cili dan". What is the standard form?',
          options: ['cijeli dan', 'cjeli dan', 'cieli dan', 'cijel dan'],
          correct: 0,
          hint: 'Ikavian -i- stands for the yat, and here the syllable is long.',
          explanation: 'cijeli dan — a long yat gives -ije-.',
        },
        {
          q: 'In Zagreb someone asks you, in the local speech, what you are going to do. How should a learner answer?',
          options: [
            'imitate the local forms back',
            'answer in the standard: Radit ću…',
            'ask them to speak Croatian',
            'switch to English',
          ],
          correct: 1,
          hint: 'The lesson’s advice: understand the variety, but do not perform it.',
          explanation:
            'Answer in the standard. Imitating a variety you did not grow up with reads as mimicry, and the local speech IS Croatian.',
        },
        {
          q: 'Which text should use the standard word, not the regional one?',
          options: [
            'a text message to your cousin in Split',
            'a chat with your grandmother',
            'a job application',
            'a song lyric',
          ],
          correct: 2,
          hint: 'Which of these is a formal written text?',
          explanation:
            'A job application expects the standard. Regional words belong to speech, to family and to song.',
        },
        {
          q: 'Which is the Zagreb colloquial future "you will"?',
          options: ['buš', 'češ', 'bum', 'ćemo'],
          correct: 0,
          hint: 'The Zagreb form is built on the kajkavian future of biti, 2nd singular.',
          explanation: 'buš — you will; bum is I will.',
        },
        {
          q: 'What is "gušt" on the coast?',
          options: ['a gust of wind', 'pleasure, enjoyment', 'a guest', 'a garlic dish'],
          correct: 1,
          hint: 'From Italian gusto.',
          explanation: 'gušt — pleasure.',
        },
        {
          q: 'Which is the standard word for "pjat"?',
          options: ['tanjur', 'tava', 'zdjela', 'čaša'],
          correct: 0,
          hint: 'What you eat your dinner from.',
          explanation: 'pjat → tanjur.',
        },
        {
          q: 'In a formal letter, which form belongs?',
          options: ['dite', 'dijete', 'either, freely', 'neither'],
          correct: 1,
          hint: 'Formal writing uses the standard reflex.',
          explanation: 'dijete.',
        },
        {
          type: 'type',
          q: 'Moj djed kaže "misto", a u standardu je ____. (place)',
          answer: 'mjesto',
          hint: 'The short jat gives -je- in the standard.',
          explanation: 'mjesto.',
        },
        {
          type: 'type',
          q: 'Na otoku kažu "kužina", a u standardu ____. (kitchen)',
          answer: 'kuhinja',
          hint: 'The standard word keeps an h.',
          explanation: 'kuhinja.',
        },
        {
          type: 'type',
          q: 'U Zagrebu pitaju "kaj", u Istri "ča", a u standardu ____. (what)',
          answer: 'što',
          hint: 'The marker that names the standard dialect group.',
          explanation: 'što — štokavski.',
        },
        {
          type: 'type',
          q: 'Baka kaže "dite", a ja u školi pišem ____. (child)',
          answer: 'dijete',
          hint: 'The long jat gives -ije- in the standard.',
          explanation: 'dijete.',
        },
      ],
    },
    checkB: [
      {
        q: 'You hear "Kaj delaš?" Where are you, most likely?',
        options: ['Split', 'Zagreb or Zagorje', 'Dubrovnik', 'an island'],
        correct: 1,
        explanation: 'kaj marks the kajkavian north-west.',
      },
      {
        q: 'Your grandmother says "lipo". What is the standard form?',
        options: ['ljepo', 'lijepo', 'lipo', 'liepo'],
        correct: 1,
        explanation: 'The long jat gives -ije- in the standard: lijepo.',
      },
      {
        q: 'Which word is a Venetian loan used on the coast?',
        options: ['kutija', 'kuhinja', 'tanjur', 'škatula'],
        correct: 3,
        explanation: 'škatula — the coastal word for a box.',
      },
      {
        q: 'Which marker means "what" in Istria and on the islands?',
        options: ['što', 'kaj', 'ča', 'ki'],
        correct: 2,
        explanation: 'ča gives čakavski its name.',
      },
      {
        q: 'Your grandfather says "vrime". What should you do?',
        options: [
          'correct him',
          'understand it, and use "vrijeme" in the standard yourself',
          'use "vrime" in formal writing',
          'stop using either word',
        ],
        correct: 1,
        explanation: 'Understand it; answer in the standard.',
      },
      {
        q: 'Which describes the ikavian reflex?',
        options: [
          '-ije- / -je- become -i-: dite, misto',
          'the accent moves to the last syllable',
          'kaj replaces što',
          'every vowel is long',
        ],
        correct: 0,
        explanation: 'Ikavian speech has -i- where the standard has -ije- or -je-.',
      },
    ],
    vocab: [
      ['narječje', 'dialect group', 'Hrvatski ima tri narječja.'],
      ['kajkavski', 'Kajkavian', 'U Zagorju se govori kajkavski.'],
      ['čakavski', 'Čakavian', 'Na otocima se čuje čakavski.'],
      ['štokavski', 'Štokavian', 'Standard se temelji na štokavskom.'],
      ['ikavica', 'ikavian speech', 'U Dalmaciji se često čuje ikavica.'],
      ['posuđenica', 'loanword', 'Pjat je posuđenica iz talijanskoga.'],
      ['zavičajni', 'local, of the home region', 'Baka govori zavičajnim govorom.'],
      ['riva', 'waterfront promenade', 'Navečer se u Splitu ide na rivu.'],
    ],
  },

  'diaspora-identity': {
    worked: [
      {
        title: 'Answering "Odakle si?"',
        problem:
          'Rođen si u Chicagu, a obitelj ti je s Brača. Odgovori na "Odakle si?" onako kako je pitanje zamišljeno.',
        en: 'You were born in Chicago and your family is from Brač. Answer "Where are you from?" the way it is meant.',
        steps: [
          {
            label: 'Hear the question',
            text: 'It asks about zavičaj — where your people belong — as well as your passport.',
          },
          { label: 'The birthplace', text: 'rođen sam u Chicagu — u + locative for a city.' },
          {
            label: 'The family place',
            text: 'Islands take na and s, not u and iz: obitelj mi je s Brača (s + genitive).',
          },
          { label: 'Join the halves', text: 'ali sets the two answers against each other.' },
        ],
        answer: 'Rođen sam u Chicagu, ali obitelj mi je s Brača.',
      },
      {
        title: 'Describing Your Own Croatian',
        problem:
          'Opiši svoje znanje: razumiješ više nego što govoriš, naučio si od bake i trudiš se održati jezik.',
        en: 'Describe your Croatian: you understand more than you speak, learned from your grandmother, and try to keep it up.',
        steps: [
          {
            label: 'Compare two verbs',
            text: 'Two clauses are compared with nego što: razumijem više nego što govorim.',
          },
          { label: 'Say where it came from', text: 'naučiti od + genitive: naučio sam od bake.' },
          { label: 'The effort', text: 'truditi se + infinitive: trudim se održati jezik.' },
        ],
        answer: 'Razumijem više nego što govorim. Naučio sam od bake i trudim se održati jezik.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What is an "iseljenik"?',
          options: ['an emigrant', 'an immigrant', 'a returnee', 'a tourist'],
          correct: 0,
          hint: 'The prefix iz- means "out of".',
          explanation:
            'iseljenik — someone who moved out, an emigrant. doseljenik is an immigrant, povratnik a returnee.',
        },
        {
          q: 'Complete: "Djed i baka otišli su ___." (in the seventies)',
          options: [
            'sedamdesete godine',
            'sedamdesetih godina',
            'sedamdesetima godinama',
            'sedamdeset godina',
          ],
          correct: 1,
          hint: 'A decade used as a time phrase stands in the genitive plural.',
          explanation:
            'sedamdesetih godina — genitive plural of time. sedamdeset godina would mean seventy years.',
        },
        {
          q: 'Complete: "Došao sam u Hrvatsku ___ znanje jezika." (to revive)',
          options: ['obnoviti', 'obnovio', 'obnova', 'obnavljajući'],
          correct: 0,
          hint: 'After a verb of motion, the purpose can be a bare infinitive.',
          explanation: 'Došao sam obnoviti znanje jezika — an infinitive of purpose after doći.',
        },
        {
          q: 'Someone says: "Imam pasivno znanje hrvatskog." What do they mean?',
          options: [
            'they speak fluently but cannot read',
            'they learned it from television only',
            'they understand it but struggle to speak it',
            'they have forgotten it completely',
          ],
          correct: 2,
          hint: 'Passive knowledge is receiving without producing.',
          explanation:
            'pasivno znanje — understanding without speaking, the usual heritage profile.',
        },
        {
          q: 'Complete: "Razumijem više ___ što govorim."',
          options: ['od', 'nego', 'kao', 'kako'],
          correct: 1,
          hint: 'Comparing with a clause needs the other word for "than".',
          explanation: 'više nego što govorim.',
        },
        {
          q: 'Which sentence is the disarming opener?',
          options: [
            'Govorim s greškama, ali govorim.',
            'Ne mogu govoriti hrvatski.',
            'Oprostite, idemo na engleski.',
            'Moj hrvatski je nula.',
          ],
          correct: 0,
          hint: 'It admits the mistakes and carries on.',
          explanation: 'Govorim s greškama, ali govorim.',
        },
        {
          q: 'How can "gastarbajter" sound from an outsider?',
          options: ['warm', 'dismissive', 'formal', 'always neutral'],
          correct: 1,
          hint: 'The lesson calls it historical and loaded.',
          explanation: 'From an outsider it can sound dismissive.',
        },
        {
          q: 'Complete: "Kod kuće smo ___ hrvatski." (spoke)',
          options: ['govorili', 'govorio', 'govoriti', 'govore'],
          correct: 0,
          hint: 'Plural past to match mi.',
          explanation: 'Kod kuće smo govorili hrvatski.',
        },
        {
          type: 'type',
          q: 'Moj ____ je Dalmacija. (native region — the word English lacks)',
          answer: 'zavičaj',
          hint: 'The place your family comes from, with all the belonging.',
          explanation: 'Moj zavičaj je Dalmacija.',
        },
        {
          type: 'type',
          q: 'Želim jezik prenijeti na ____ djecu. (my own — the reflexive possessive)',
          answer: 'svoju',
          hint: 'When the owner is the subject, use the reflexive; djeca declines like a feminine singular.',
          explanation: 'na svoju djecu.',
        },
        {
          type: 'type',
          q: 'Djed je otišao u Njemačku ____ godina. (in the sixties — šezdeset)',
          answer: 'šezdesetih',
          hint: 'Decades are said in the genitive plural, before godina.',
          explanation: 'šezdesetih godina.',
        },
        {
          type: 'type',
          q: 'Rođen sam u Kanadi, ali korijeni su mi u ____. (Croatia — Hrvatska)',
          answer: 'Hrvatskoj',
          hint: 'u + locative; the country name declines like an adjective.',
          explanation: 'u Hrvatskoj.',
        },
      ],
    },
    checkB: [
      {
        q: 'Someone asks "Odakle ste?" Which answer meets the question as it is meant?',
        options: [
          'Iz Njemačke.',
          'Iz Njemačke, ali obitelj mi je iz Imotskog.',
          'Ne znam.',
          'Iz grada.',
        ],
        correct: 1,
        explanation: 'The question is about zavičaj — where the family is from.',
      },
      {
        q: 'What is a "doseljenik"?',
        options: ['an emigrant', 'a returnee', 'a tourist', 'an immigrant'],
        correct: 3,
        explanation: 'do- (arriving) + seliti: someone who has moved in.',
      },
      {
        q: 'Which sentence uses the reflexive possessive correctly?',
        options: [
          'Pričam o svojoj obitelji.',
          'Pričam o svoja obitelj.',
          'Pričam o svojom obitelji.',
          'Pričam o svoju obitelj.',
        ],
        correct: 0,
        explanation: 'o + locative: o svojoj obitelji.',
      },
      {
        q: 'Complete: "Korijeni su mi u ___." (the Imotski region — Imotska krajina)',
        options: ['Imotska krajina', 'Imotske krajine', 'Imotskoj krajini', 'Imotsku krajinu'],
        correct: 2,
        explanation: 'u of location + locative.',
      },
      {
        q: 'What is wrong with "Teško me je pričati hrvatski"?',
        options: [
          'nothing',
          'the person is in the dative: teško mi je',
          '"pričati" should be "pričam"',
          '"je" should be "su"',
        ],
        correct: 1,
        explanation: 'teško mi je — the dative.',
      },
      {
        q: 'What is "pasivno znanje"?',
        options: [
          'speaking without understanding',
          'understanding without speaking',
          'forgotten knowledge',
          'book knowledge',
        ],
        correct: 1,
        explanation: 'Receiving without producing — the usual heritage profile.',
      },
    ],
    vocab: [
      ['iseljeništvo', 'the diaspora', 'Hrvatsko iseljeništvo živi na svim kontinentima.'],
      ['iseljenik', 'emigrant', 'Moj pradjed bio je iseljenik u Argentini.'],
      ['povratnik', 'returnee', 'Kao povratnica otvorila je konobu u zavičaju.'],
      ['zavičaj', 'native region, home place', 'Moj zavičaj je Dalmacija.'],
      ['korijeni', 'roots', 'Korijeni su mi u Imotskoj krajini.'],
      ['materinski jezik', 'mother tongue', 'Hrvatski mi nije materinski jezik, ali ga volim.'],
      ['rodbina', 'relatives', 'Učim da bih mogao razgovarati s rodbinom.'],
      ['prenijeti', 'to pass on', 'Želim jezik prenijeti na svoju djecu.'],
    ],
  },
};
