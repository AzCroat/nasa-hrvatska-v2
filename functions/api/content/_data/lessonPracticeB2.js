// functions/api/content/_data/lessonPracticeB2.js
//
// B2 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time) and one guided-practice slide (four items, each with a HINT shown
// after a first wrong try and an explanation once resolved).
//
// Authoring rules, the same ones the checks and drills follow:
//   - distractors are wrong by case, gender, agreement, aspect, word order or
//     register — never by being Serbian, and never real Croatian that a native
//     would say in the situation the item describes;
//   - no cue in the form of its answer (a parenthetical names the MEANING or the
//     dictionary form, not the answer);
//   - a hint points at the rule and never contains the answer.
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_B2 = {
  clitics: {
    worked: [
      {
        title: 'Building a Clitic Cluster',
        problem: 'Reci: "I sent them (the photos) to her yesterday." Počni s "Jučer".',
        en: 'Say: I sent them (the photos) to her yesterday. Start with "Jučer".',
        steps: [
          {
            label: 'Find the first phrase',
            text: 'Jučer is the first stressed phrase, so every clitic in the clause lines up straight after it.',
          },
          {
            label: 'Collect the clitics',
            text: 'You need three: the auxiliary sam (I have), the dative joj (to her) and the accusative ih (them).',
          },
          {
            label: 'Put them in the fixed order',
            text: 'Auxiliary, then dative, then accusative: sam joj ih. Never ih joj sam, never joj sam ih.',
          },
          {
            label: 'Add the verb',
            text: 'The participle poslao follows the cluster. The clitics lean on Jučer; the verb carries its own stress.',
          },
        ],
        answer: 'Jučer sam joj ih poslao.',
      },
      {
        title: 'Where Does Je Go After Se?',
        problem: 'Složi: Marko / je / joj / se / ispričao (Marko apologised to her)',
        en: 'Put in order: Marko apologised to her.',
        steps: [
          {
            label: 'Sort the clitics',
            text: 'joj is a dative pronoun, se is the reflexive, je is the third-person auxiliary.',
          },
          {
            label: 'Dative before se',
            text: 'The dative sits in slot 3 and se in slot 5, so the order is joj se.',
          },
          {
            label: 'The third-person rule',
            text: 'In the third person singular the auxiliary je disappears after se. "Marko joj se je ispričao" is the error the lesson warns about.',
          },
        ],
        answer: 'Marko joj se ispričao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Večeras ___ pokazati." (I will show it to you tonight — ću, ti, ga)',
          options: ['ti ga ću', 'ću ti ga', 'ga ti ću', 'ću ga ti'],
          correct: 1,
          hint: 'The future auxiliary takes the same slot as sam: it opens the cluster, and dative comes before accusative.',
          explanation: 'Večeras ću ti ga pokazati — auxiliary, dative, accusative.',
        },
        {
          q: 'Which question is correct? (Did she give it to you?)',
          options: [
            'Je li ga ti dala?',
            'Li ti ga je dala?',
            'Je li ti ga dala?',
            'Ti je li ga dala?',
          ],
          correct: 2,
          hint: 'In a yes/no question with li, the auxiliary stays at the front with li straight after it; then the pronouns in their usual order.',
          explanation: 'Je li ti ga dala? — je li, then dative ti, then accusative ga.',
        },
        {
          q: 'Dopuni: "Djeca ___ dobro zabavila na moru." (zabaviti se — the children had a good time)',
          options: ['se su', 'se', 'je se', 'su se'],
          correct: 3,
          hint: 'Only the third-person SINGULAR auxiliary vanishes after se. A plural auxiliary stays, and it comes before se.',
          explanation:
            'Djeca su se dobro zabavila — su (auxiliary) precedes se, and it is not dropped.',
        },
        {
          q: 'Which sentence places the clitics correctly? (My friend told me that yesterday.)',
          options: [
            'Moj prijatelj mi je to jučer rekao.',
            'Moj prijatelj je mi to jučer rekao.',
            'Mi je moj prijatelj to jučer rekao.',
            'Moj mi prijatelj to je jučer rekao.',
          ],
          correct: 0,
          hint: 'With the third-person je, the dative pronoun comes first and je follows it — and the cluster cannot open the sentence or be split apart.',
          explanation:
            'Moj prijatelj mi je to jučer rekao. (Moj mi je prijatelj… is also possible; the cluster stays together.)',
        },
      ],
    },
  },

  conditional: {
    worked: [
      {
        title: 'A Polite Request to a Stranger',
        problem: 'Zamoli recepcionara (Vi) da ti pozove taksi.',
        en: 'Ask the receptionist (formal) to call you a taxi.',
        steps: [
          {
            label: 'Choose the register',
            text: 'A receptionist is a stranger: the Vi-form, so the conditional auxiliary is biste.',
          },
          {
            label: 'Make it a question',
            text: 'A yes/no question puts the auxiliary first with li after it: Biste li…',
          },
          {
            label: 'Fill the cluster and the verb',
            text: 'mi (to me) follows li. The modal participle is plural with Vi — mogli — then the infinitive pozvati.',
          },
        ],
        answer: 'Biste li mi mogli pozvati taksi?',
      },
      {
        title: 'A Hypothetical in Two Halves',
        problem: 'Dopuni za "mi": Kad ___ (imati) više novca, ___ (putovati) po svijetu.',
        en: 'Fill in for "we": If we had more money, we would travel the world.',
        steps: [
          {
            label: 'Find the person',
            text: 'mi — first person plural — takes bismo in careful Croatian, not the flat bi.',
          },
          {
            label: 'The participles',
            text: 'Both verbs go into the plural participle: imali, putovali.',
          },
          {
            label: 'Place bismo',
            text: 'In the first clause bismo sits right after kad. In the second it cannot open the clause, so it follows the participle.',
          },
        ],
        answer: 'Kad bismo imali više novca, putovali bismo po svijetu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'U službenom pismu dopuni: "Oni ___ rado pomogli." (They would gladly help.)',
          options: ['bismo', 'bi', 'biste', 'bih'],
          correct: 1,
          hint: 'Third person plural: only "we" and "you (plural)" have their own longer forms.',
          explanation: 'oni bi — the third person, singular or plural, uses the short form.',
        },
        {
          q: 'You are asking a stranger in the street: "Could you tell me where the station is?"',
          options: [
            'Bi li mi mogao reći gdje je kolodvor?',
            'Biste li mi mogao reći gdje je kolodvor?',
            'Li biste mi mogli reći gdje je kolodvor?',
            'Biste li mi mogli reći gdje je kolodvor?',
          ],
          correct: 3,
          hint: 'A stranger gets the Vi-form, and with Vi the participle goes into the plural. Then check what can open the question.',
          explanation:
            'Biste li mi mogli reći… — Vi-form, plural participle, auxiliary + li first.',
        },
        {
          q: 'Dopuni: "___ došla, ali sam bila bolesna." (I would have come — a woman speaking)',
          options: ['Bila bih', 'Bio bih', 'Bih bila', 'Bila sam'],
          correct: 0,
          hint: 'The past conditional adds the past of biti, agreeing with the speaker, and the auxiliary still cannot come first.',
          explanation: 'Bila bih došla — feminine bila, then bih, then the main participle.',
        },
        {
          q: 'Spot the error in careful Croatian: "Kad bi ja imao vremena, pomogao bih ti."',
          options: [
            'bi should be bih — the first person takes bih',
            'bih in the second clause should be bi',
            'kad should be ako',
            'pomogao should be pomogla',
          ],
          correct: 0,
          hint: 'Look at the subject of the first clause and at the table of auxiliary forms.',
          explanation: 'Kad bih ja imao vremena — ja takes bih in both clauses.',
        },
      ],
    },
  },

  'complex-sentences': {
    worked: [
      {
        title: 'A Relative Pronoun With a Preposition',
        problem: 'Spoji u jednu rečenicu: To je kolega. S njim radim.',
        en: 'Join into one sentence: That is the colleague I work with.',
        steps: [
          {
            label: 'Find the antecedent',
            text: 'kolega is masculine singular, so the relative pronoun is a form of koji.',
          },
          {
            label: 'Find its role in its own clause',
            text: 'In "s njim radim" it is the partner you work with: s + instrumental. The instrumental of koji is kojim.',
          },
          {
            label: 'Keep the preposition with it',
            text: 'The preposition travels to the front of the clause together with the pronoun: s kojim radim.',
          },
        ],
        answer: 'To je kolega s kojim radim.',
      },
      {
        title: 'A Future Time Clause',
        problem: 'Dopuni: Nazvat ću te ___ (as soon as) ___ (stići) kući.',
        en: 'Fill in: I will call you as soon as I get home.',
        steps: [
          { label: 'Pick the conjunction', text: '"As soon as" is čim.' },
          {
            label: 'No future in the time clause',
            text: 'The main clause is future, but a time clause about a future event takes the PRESENT, not ću.',
          },
          {
            label: 'Choose the aspect',
            text: 'Arriving is a single completed event, so the perfective stići, present stignem.',
          },
        ],
        answer: 'Nazvat ću te čim stignem kući.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Prijateljica ___ sam poslao poruku nije odgovorila." (the friend to whom I sent a message)',
          options: ['koju', 'koja', 'kojoj', 'kojom'],
          correct: 2,
          hint: 'Ask what the pronoun does inside its own clause: you send a message TO someone.',
          explanation: 'kojoj — the dative feminine, because poslati nekome takes the dative.',
        },
        {
          q: 'Marko said: "Doći ću sutra." Report it.',
          options: [
            'Marko je rekao da ću doći sutra.',
            'Marko je rekao da će doći sutra.',
            'Marko je rekao što će doći sutra.',
            'Marko je rekao da doći će sutra.',
          ],
          correct: 1,
          hint: 'Reported speech uses da, keeps the original tense, shifts the person to the one being reported, and keeps the auxiliary second in its clause.',
          explanation: 'Marko je rekao da će doći sutra — da, third person će, clitic after da.',
        },
        {
          q: 'Dopuni: "Otišao je na posao, ___ je imao temperaturu." (although)',
          options: ['jer', 'čim', 'prije nego što', 'premda'],
          correct: 3,
          hint: 'You need the concessive conjunction — the more formal sibling of iako.',
          explanation: 'premda = although. jer gives a reason, čim is "as soon as".',
        },
        {
          q: 'Dopuni: "Ovo je čovjek bez ___ ne bismo uspjeli." (without whom)',
          options: ['kojeg', 'koji', 'kojem', 'kojim'],
          correct: 0,
          hint: 'The preposition bez governs one case only, and the relative pronoun must take it.',
          explanation: 'bez kojeg — bez + genitive.',
        },
      ],
    },
  },

  'aspect-negation': {
    worked: [
      {
        title: 'A Standing Prohibition',
        problem: 'Reci djetetu (kao opće pravilo): "Don\'t touch the stove!" (dirati / dirnuti)',
        en: "Tell a child, as a general rule: Don't touch the stove!",
        steps: [
          {
            label: 'Rule or one-off?',
            text: 'It is a standing ban — never, at any time — not a warning about one slip.',
          },
          {
            label: 'Choose the aspect',
            text: 'A prohibition takes the imperfective: dirati, not dirnuti.',
          },
          {
            label: 'Form the command',
            text: 'Imperative of dirati for ti is diraj; put ne in front. (Nemoj dirati says the same.)',
          },
        ],
        answer: 'Ne diraj štednjak!',
      },
      {
        title: 'Never, With the Genitive',
        problem: 'Reci: "I have never had any problems with him."',
        en: 'Say: I have never had any problems with him.',
        steps: [
          {
            label: 'Double negation',
            text: 'nikad does not negate the sentence by itself; the verb must be negated too: nikad nisam…',
          },
          {
            label: 'Aspect',
            text: 'The action never happened, so completeness is irrelevant: the imperfective imati.',
          },
          {
            label: 'Case after a negated "have"',
            text: 'An absent quantity goes into the genitive: problema, the genitive plural.',
          },
        ],
        answer: 'Nikad nisam imao problema s njim.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'You started the novel but stopped halfway. Which sentence says so?',
          options: [
            'Nisam čitao taj roman.',
            'Nisam pročitati taj roman.',
            'Ne čitam taj roman.',
            'Nisam pročitao taj roman.',
          ],
          correct: 3,
          hint: 'The ordinary negation says it never happened. You need the one that says it was not COMPLETED.',
          explanation: 'Nisam pročitao — the perfective negative: I did not finish it.',
        },
        {
          q: 'A friend is anxious about being late. "Don\'t worry, we will make it on time."',
          options: [
            'Ne zabrini se, stići ćemo na vrijeme.',
            'Ne brini se, stići ćemo na vrijeme.',
            'Ne brineš se, stići ćemo na vrijeme.',
            'Se ne brini, stići ćemo na vrijeme.',
          ],
          correct: 1,
          hint: 'A negative command is normally imperfective, and se can never open a sentence.',
          explanation: 'Ne brini se — imperfective brinuti se, imperative, se after the verb.',
        },
        {
          q: 'Dopuni: "U hladnjaku nema ___." (There is no milk in the fridge.)',
          options: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
          correct: 0,
          hint: 'nema expresses absence, and absence takes one case in Croatian.',
          explanation: 'nema mlijeka — the genitive of negation.',
        },
        {
          q: 'Your flatmate keeps leaving the windows open. Make it a standing rule.',
          options: [
            'Ne ostavi prozore otvorene!',
            'Nemoj ostavljaš prozore otvorene!',
            'Nemoj ostavljati prozore otvorene!',
            'Nemoj ostaviti prozore otvorene!',
          ],
          correct: 2,
          hint: 'nemoj takes an infinitive, and a general ban wants the imperfective one.',
          explanation:
            'Nemoj ostavljati — imperfective infinitive after nemoj for a standing rule.',
        },
      ],
    },
  },

  'passive-voice': {
    worked: [
      {
        title: 'Active to Biti-Passive',
        problem: 'Pretvori u pasiv (bez vršitelja): Općina je obnovila crkvu.',
        en: 'Make it passive (no agent): The municipality restored the church.',
        steps: [
          {
            label: 'The object becomes the subject',
            text: 'crkvu (accusative) becomes crkva, the nominative subject — feminine singular.',
          },
          {
            label: 'Build the participle',
            text: 'obnoviti is an -iti verb: -jen, with v + j → vlj, giving obnovljen.',
          },
          {
            label: 'Agree and add biti',
            text: 'Feminine subject → obnovljena. The finished past event takes je: Crkva je obnovljena.',
          },
        ],
        answer: 'Crkva je obnovljena.',
      },
      {
        title: 'A Se-Passive Notice',
        problem: 'Napiši natpis: "Used books are sold here."',
        en: 'Write a sign: Used books are sold here.',
        steps: [
          {
            label: 'Choose the construction',
            text: 'A notice with no agent, in the present: the se-passive is what a native writes.',
          },
          {
            label: 'The thing sold is the subject',
            text: 'knjige becomes the nominative subject, so the verb agrees with it: prodaju (third person plural).',
          },
          {
            label: 'Place se',
            text: 'Ovdje opens the sentence, so se sits second, straight after it.',
          },
        ],
        answer: 'Ovdje se prodaju rabljene knjige.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Ceste su ___ zbog snijega." (The roads have been closed — zatvoriti)',
          options: ['zatvoreni', 'zatvorene', 'zatvoreno', 'zatvorena'],
          correct: 1,
          hint: 'The participle agrees with the subject: ceste is a feminine plural noun.',
          explanation: 'Ceste su zatvorene — feminine plural -e.',
        },
        {
          q: 'Dopuni natpis: "Ovdje ___ kartice." (Cards are accepted here.)',
          options: ['se prima', 'je primljen', 'se primaju', 'su primljena'],
          correct: 2,
          hint: 'In the se-passive the thing accepted is the subject, and the verb agrees with it in number.',
          explanation: 'Ovdje se primaju kartice — plural kartice, plural verb.',
        },
        {
          q: 'Dopuni: "Pjesma je napisana ___ mladog pjesnika iz Splita." (by a young poet)',
          options: ['od', 'za', 'kod', 'iz'],
          correct: 0,
          hint: 'The person who performs the action in a biti-passive is introduced by a preposition taking the genitive.',
          explanation: 'od + genitive names the agent: od mladog pjesnika.',
        },
        {
          q: 'Dopuni: "Rezultati ___ objavljeni sutra." (The results will be published tomorrow.)',
          options: ['su bili', 'će biti', 'bit će se', 'će se'],
          correct: 1,
          hint: 'The future passive is the future of biti plus the participle, with no se.',
          explanation: 'Rezultati će biti objavljeni — future auxiliary + biti + participle.',
        },
      ],
    },
  },

  'writing-registers': {
    worked: [
      {
        title: 'From Chat to Official Notice',
        problem: 'Pretvori u službeni stil: "Zbog kiše su otkazali koncert."',
        en: 'Rewrite formally: "They cancelled the concert because of the rain."',
        steps: [
          {
            label: 'Remove the vague "they"',
            text: 'An official notice does not name an agent, so the concert becomes the subject.',
          },
          {
            label: 'Use the biti-passive',
            text: 'otkazati → otkazan, masculine to agree with koncert: Koncert je otkazan.',
          },
          {
            label: 'Nominalise the cause',
            text: 'zbog kiše is fine in speech; formal writing prefers the fuller noun phrase: zbog loših vremenskih uvjeta.',
          },
        ],
        answer: 'Koncert je otkazan zbog loših vremenskih uvjeta.',
      },
      {
        title: 'Linking With a Discourse Marker',
        problem:
          'Poveži formalno (druga rečenica objašnjava prvu): Projekt kasni. Dobavljač nije isporučio opremu.',
        en: 'Link them formally (the second explains the first): The project is late. The supplier did not deliver the equipment.',
        steps: [
          {
            label: 'Name the relation',
            text: 'The second sentence gives the reason behind the first — an explanation, not a contrast or a result.',
          },
          {
            label: 'Pick the marker',
            text: 'naime introduces an explanation ("you see, namely"). stoga would run the logic backwards; međutim would contrast.',
          },
          {
            label: 'Place it',
            text: 'naime opens the second sentence, followed by a comma.',
          },
        ],
        answer: 'Projekt kasni. Naime, dobavljač nije isporučio opremu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni službeno: "Za ___ projekta zadužena je gradska uprava." (carrying out — provoditi)',
          options: ['provoditi', 'provođenje', 'provodi', 'provođen'],
          correct: 1,
          hint: 'Formal writing turns the verb into a verbal noun, with the -enje suffix and the usual softening of d.',
          explanation: 'provođenje — the nominalisation of provoditi, the object of za.',
        },
        {
          q: 'The library is posting a notice about its closure. Which line would it print?',
          options: [
            'Ekipa, knjižnica ne radi do ponedjeljka!',
            'Knjižnica ti je zatvorena do ponedjeljka.',
            'Znači, ono, knjižnica je zatvorena do ponedjeljka.',
            'Obavještavamo korisnike da je knjižnica zatvorena do ponedjeljka.',
          ],
          correct: 3,
          hint: 'Look for the impersonal written formula — no fillers, no ti, no chatty address.',
          explanation:
            'Obavještavamo korisnike da… is the notice formula; the rest belong to speech.',
        },
        {
          q: 'Dopuni: "Nema dovoljno sredstava; ___ se natječaj odgađa." (therefore)',
          options: ['stoga', 'naime', 'međutim', 'štoviše'],
          correct: 0,
          hint: 'The second half is the RESULT of the first.',
          explanation: 'stoga = therefore. naime explains, međutim contrasts, štoviše adds.',
        },
        {
          q: 'Keep the register consistent: "Poštovani gospodine Babiću, molim Vas da mi ___ popis literature."',
          options: ['pošalješ', 'pošalje', 'pošaljete', 'poslati'],
          correct: 2,
          hint: 'Once Vas is chosen, every verb stays in the same polite person, and molim Vas da needs a finite verb.',
          explanation: 'molim Vas da mi pošaljete — the Vi-form present throughout.',
        },
      ],
    },
  },

  'i-declension': {
    worked: [
      {
        title: 'The Genitive in -i',
        problem: 'Dopuni: Ostao je bez ___. (riječ)',
        en: 'Fill in: He was left speechless (without a word).',
        steps: [
          { label: 'The preposition', text: 'bez always takes the genitive.' },
          {
            label: 'The class',
            text: 'riječ ends in a consonant but is feminine — an i-declension noun.',
          },
          {
            label: 'The ending',
            text: 'The i-class genitive singular is -i, not the -e of žena.',
          },
        ],
        answer: 'Ostao je bez riječi.',
      },
      {
        title: 'Noun Unchanged, Adjective Not',
        problem: 'Dopuni: Dobili smo ___. (a new possibility)',
        en: 'Fill in: We got a new possibility.',
        steps: [
          {
            label: 'Identify the noun',
            text: 'mogućnost ends in -ost, so it is a feminine i-declension noun.',
          },
          {
            label: 'The accusative of the noun',
            text: 'dobiti takes the accusative, and for this class the accusative equals the nominative: mogućnost.',
          },
          {
            label: 'The adjective still agrees',
            text: 'The adjective is feminine accusative like any žena-type adjective: novu.',
          },
        ],
        answer: 'Dobili smo novu mogućnost.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Konačno joj je priznao ___." (He finally confessed his love to her.)',
          options: ['ljubavi', 'ljubavu', 'ljubav', 'ljubave'],
          correct: 2,
          hint: 'This is the direct object of an i-declension noun — and that case looks exactly like the dictionary form.',
          explanation: 'priznati ljubav — the accusative is unchanged in this class.',
        },
        {
          q: 'Dopuni: "Razgovarali smo o toj ___ cijelu večer." (that thought — misao)',
          options: ['misli', 'misao', 'mislu', 'misle'],
          correct: 0,
          hint: 'o + locative, and remember that misao gets its l back in every other form.',
          explanation: 'o toj misli — the locative is -i, and misao → misl-.',
        },
        {
          q: 'Dopuni: "Sjeća se svoje ___ u Slavoniji." (his youth — mladost)',
          options: ['mladost', 'mladosti', 'mladosta', 'mladošću'],
          correct: 1,
          hint: 'sjećati se takes the genitive, and an -ost noun has one genitive ending.',
          explanation: 'svoje mladosti — genitive -i after sjećati se.',
        },
        {
          q: 'Dopuni: "To mi je bila ___ pomoć." (a great help)',
          options: ['velik', 'veliki', 'velika', 'veliko'],
          correct: 2,
          hint: 'The noun looks masculine but is not — and the verb bila has already told you its gender.',
          explanation: 'velika pomoć — pomoć is feminine.',
        },
      ],
    },
  },

  'aspect-suffixes': {
    worked: [
      {
        title: 'A Habit Needs the Secondary Imperfective',
        problem: 'Dopuni: Svaki put kad dođem, konobar mi ___ najbolji stol. (pokazati)',
        en: 'Fill in: Every time I come, the waiter shows me the best table.',
        steps: [
          {
            label: 'Read the time frame',
            text: 'Svaki put — every time — describes a repeated action, which needs an imperfective.',
          },
          {
            label: 'Check the verb given',
            text: 'pokazati is perfective (one act), so it cannot express the habit.',
          },
          {
            label: 'Build the secondary imperfective',
            text: 'pokazati → pokazivati, with -ivati. Its present runs -ujem, -uješ, -uje: pokazuje.',
          },
        ],
        answer: 'Svaki put kad dođem, konobar mi pokazuje najbolji stol.',
      },
      {
        title: 'Picking the Suffix',
        problem: 'Dopuni: Uvijek ___ vrata kad izlazim. (zaključati — to lock)',
        en: 'Fill in: I always lock the door when I go out.',
        steps: [
          {
            label: 'Why not zaključati?',
            text: 'uvijek marks a habit; zaključati is perfective, one completed locking.',
          },
          {
            label: 'Which suffix?',
            text: 'This pair takes -avati: zaključati → zaključavati. The suffix is learned with the pair.',
          },
          {
            label: 'Conjugate',
            text: '-avati verbs keep -a- in the present: zaključavam, zaključavaš…',
          },
        ],
        answer: 'Uvijek zaključavam vrata kad izlazim.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the imperfective of "prodati" (to sell)?',
          options: ['prodivati', 'prodavati', 'prodajivati', 'proditi'],
          correct: 1,
          hint: 'It follows the same pattern as dati and its imperfective partner.',
          explanation: 'prodati → prodavati (prodajem), just as dati → davati.',
        },
        {
          q: 'Dopuni: "Učenik je stalno ___ zadaće od prijatelja." (kept copying — prepisati)',
          options: ['prepisao', 'prepisivao', 'prepisavao', 'prepisan'],
          correct: 1,
          hint: 'stalno needs an ongoing, repeated action; build it with the -ivati suffix.',
          explanation: 'prepisivao — prepisati → prepisivati, like zapisati → zapisivati.',
        },
        {
          q: 'Dopuni: "Jučer sam konačno ___ sve račune." (paid — one completed act)',
          options: ['plaćao', 'platjivao', 'platio', 'plaćivao'],
          correct: 2,
          hint: 'konačno and one finished act point to the perfective, not the secondary imperfective.',
          explanation: 'platio — perfective platiti. plaćati would be the habit.',
        },
        {
          q: 'Which pair is correct (perfective → secondary imperfective)?',
          options: [
            'skupiti → skupivati',
            'skupiti → skupovati',
            'skupiti → skupljati',
            'skupiti → skupiti se',
          ],
          correct: 2,
          hint: 'The stem often softens with the suffix, the way platiti gives plaćati: here p + j becomes plj.',
          explanation: 'skupiti → skupljati (to collect), with p → plj.',
        },
      ],
    },
  },

  'aspect-with-verbs': {
    worked: [
      {
        title: 'After a Phase Verb',
        problem: 'Dopuni: Kiša je počela ___ oko podneva. (padati / pasti)',
        en: 'Fill in: It started to rain around noon.',
        steps: [
          { label: 'Find the frame', text: 'počela is a phase verb — begin, continue, stop.' },
          {
            label: 'Apply the rule',
            text: 'A phase verb takes only an imperfective infinitive; you cannot begin a completed act.',
          },
          { label: 'Choose', text: 'padati is imperfective; pasti is perfective.' },
        ],
        answer: 'Kiša je počela padati oko podneva.',
      },
      {
        title: 'A Modal With a Deadline',
        problem: 'Dopuni: Moram ___ na sve poruke prije sastanka. (odgovarati / odgovoriti)',
        en: 'Fill in: I have to answer all the messages before the meeting.',
        steps: [
          {
            label: 'Find the frame',
            text: 'After a modal, either aspect is possible — and the choice changes the meaning.',
          },
          {
            label: 'Activity or result?',
            text: 'prije sastanka sets a deadline: the job must be DONE, a result.',
          },
          {
            label: 'Choose the perfective',
            text: 'A result takes the perfective: odgovoriti, with na + accusative.',
          },
        ],
        answer: 'Moram odgovoriti na sve poruke prije sastanka.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Prestala je ___ prije pet godina." (She stopped smoking.)',
          options: ['popušiti', 'pušiti', 'pušeći', 'pušila'],
          correct: 1,
          hint: 'prestati is a phase verb, and it is followed by an infinitive of one aspect only.',
          explanation: 'prestala je pušiti — phase verb + imperfective infinitive.',
        },
        {
          q: 'Dopuni: "Konačno sam uspio ___ dobar stan." (managed to find)',
          options: ['nalaziti', 'tražiti', 'naći', 'nađen'],
          correct: 2,
          hint: 'uspjeti is about an outcome, so it takes the aspect of results.',
          explanation: 'uspio sam naći — uspjeti + perfective.',
        },
        {
          q: 'Dopuni: "Nemoj me ___, doći ću kasnije." (Don\'t wait for me.)',
          options: ['čekati', 'pričekati', 'čekaj', 'čekajući'],
          correct: 0,
          hint: 'After nemoj comes an infinitive, normally imperfective unless it warns against one accidental act.',
          explanation: 'Nemoj me čekati — nemoj + imperfective infinitive.',
        },
        {
          q: 'Dopuni: "Volim ___ uz more." (I like running by the sea.)',
          options: ['otrčati', 'trčim', 'trčeći', 'trčati'],
          correct: 3,
          hint: 'voljeti describes an activity you enjoy, not a finished result, and it takes an infinitive.',
          explanation: 'Volim trčati — voljeti + imperfective infinitive.',
        },
      ],
    },
  },

  'participial-adjectives': {
    worked: [
      {
        title: 'Building an -iti Participle',
        problem: 'Dopuni: Predao je ___ zadaću. (ispraviti — to correct)',
        en: 'Fill in: He handed in the corrected homework.',
        steps: [
          {
            label: 'Which ending?',
            text: 'ispraviti is an -iti verb, so the participle takes -jen.',
          },
          {
            label: 'Apply the softening',
            text: 'v + j becomes vlj, the same iotation as in izgubiti → izgubljen: ispravljen.',
          },
          {
            label: 'Decline it',
            text: 'zadaća is feminine, the object of predati, so feminine accusative: ispravljenu.',
          },
        ],
        answer: 'Predao je ispravljenu zadaću.',
      },
      {
        title: 'A Participle in the Locative',
        problem: 'Dopuni: U ___ kući nitko ne živi. (napustiti — to abandon)',
        en: 'Fill in: Nobody lives in the abandoned house.',
        steps: [
          { label: 'Which ending?', text: 'napustiti is an -iti verb: -jen.' },
          {
            label: 'The softening',
            text: 'st + j becomes št, giving napušten.',
          },
          {
            label: 'Case and gender',
            text: 'u + a static location takes the locative; kuća is feminine, so -oj: napuštenoj.',
          },
        ],
        answer: 'U napuštenoj kući nitko ne živi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What is the participle of "vratiti" (to return, give back)?',
          options: ['vratjen', 'vratan', 'vraćen', 'vratnut'],
          correct: 2,
          hint: 'An -iti verb, and t followed by j softens the same way as in platiti.',
          explanation: 'vraćen — t → ć, as in plaćen.',
        },
        {
          q: 'Dopuni: "Prozori su ___." (The windows are closed — prozor is masculine.)',
          options: ['zatvoreni', 'zatvorena', 'zatvoreno', 'zatvorene'],
          correct: 0,
          hint: 'The participle agrees like an adjective: masculine plural.',
          explanation: 'Prozori su zatvoreni — masculine plural -i.',
        },
        {
          q: 'Dopuni: "Došao je sa ___ nogom." (with a broken leg — slomiti)',
          options: ['slomljena', 'slomljen', 'slomitom', 'slomljenom'],
          correct: 3,
          hint: 'Two things to get right: m + j softens to mlj, and s(a) takes the instrumental of a feminine noun.',
          explanation: 'sa slomljenom nogom — slomljen, feminine instrumental -om.',
        },
        {
          q: 'Dopuni: "Na stolu su bile ___ čaše." (washed — oprati)',
          options: ['oprani', 'oprane', 'oprana', 'opranje'],
          correct: 1,
          hint: 'An -ati verb takes -n, and the ending agrees with čaše, a feminine plural.',
          explanation: 'oprane čaše — opran, feminine plural -e.',
        },
      ],
    },
  },

  'verbal-adverbs': {
    worked: [
      {
        title: 'Two Actions, One Subject',
        problem: 'Reci kraće, s glagolskim prilogom: Kuhala je ručak. Dok je kuhala, pjevala je.',
        en: 'Say it more compactly with a verbal adverb: She cooked lunch, singing as she did.',
        steps: [
          {
            label: 'Check the subject',
            text: 'She cooks and she sings — one subject, so a verbal adverb is allowed.',
          },
          {
            label: 'Which form?',
            text: 'The singing runs at the same time as the cooking, and pjevati is imperfective: the present adverb in -ći.',
          },
          {
            label: 'Build it',
            text: 'Start from the third person plural, pjevaju, and add -ći: pjevajući.',
          },
        ],
        answer: 'Kuhala je ručak pjevajući.',
      },
      {
        title: 'Completed First: -vši',
        problem: 'Spoji: Ana je zatvorila vrata. Zatim je ugasila svjetlo.',
        en: 'Join: Ana closed the door. Then she switched off the light.',
        steps: [
          {
            label: 'Check the subject',
            text: 'Ana does both, so the first action can become a verbal adverb.',
          },
          {
            label: 'Which form?',
            text: 'Closing the door is finished BEFORE the main action, and zatvoriti is perfective: the past adverb in -vši.',
          },
          {
            label: 'Build and place it',
            text: 'Infinitive stem zatvori- + vši = zatvorivši. It opens the sentence, followed by a comma.',
          },
        ],
        answer: 'Zatvorivši vrata, Ana je ugasila svjetlo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the present verbal adverb of "pisati"?',
          options: ['pisajući', 'pišući', 'pisavši', 'pisući'],
          correct: 1,
          hint: 'Start from the third person plural of the verb, not from the infinitive.',
          explanation: 'pišu → pišući.',
        },
        {
          q: 'Dopuni: "___ policiju, lopov je pobjegao." (Having caught sight of the police — ugledati)',
          options: ['Ugledajući', 'Ugledati', 'Ugledavši', 'Ugledan'],
          correct: 2,
          hint: 'ugledati is perfective, and the sighting came first.',
          explanation: 'Ugledavši — perfective → -vši, an action completed before the main verb.',
        },
        {
          q: 'Which sentence is correct? (While we were waiting for the bus, it started to snow.)',
          options: [
            'Dok smo čekali autobus, počeo je padati snijeg.',
            'Čekajući autobus, počeo je padati snijeg.',
            'Čekavši autobus, počeo je padati snijeg.',
            'Čekajući autobus, snijeg je počeo padati.',
          ],
          correct: 0,
          hint: 'Who is waiting, and what starts falling? If those are different subjects, a verbal adverb is out.',
          explanation: 'Two subjects (we, the snow), so Croatian needs a full dok-clause.',
        },
        {
          q: 'Dopuni: "___ put, vozili smo se u krug sat vremena." (Not knowing the way)',
          options: ['Ne znao', 'Znajući ne', 'Ne znati', 'Ne znajući'],
          correct: 3,
          hint: 'znati is imperfective and the not-knowing runs alongside the driving; the negative simply goes in front.',
          explanation: 'Ne znajući — ne + the present adverb of znati (znaju → znajući).',
        },
      ],
    },
  },

  'unreal-conditions': {
    worked: [
      {
        title: 'Contrary to Fact, Now',
        problem: 'Nije sunčano. Reci: "If it were sunny, we would go to the beach."',
        en: 'It is not sunny. Say: If it were sunny, we would go to the beach.',
        steps: [
          {
            label: 'Real or unreal?',
            text: 'It is NOT sunny, so the condition is contrary to fact: da, not ako.',
          },
          {
            label: 'The condition',
            text: 'A present state after da stays in the present: da je sunčano.',
          },
          {
            label: 'The main clause',
            text: 'The conditional: bismo for "we", with the plural participle išli. bismo cannot open the clause, so it follows the participle.',
          },
        ],
        answer: 'Da je sunčano, išli bismo na plažu.',
      },
      {
        title: 'Contrary to Fact, in the Past',
        problem: 'Reci: "If she had taken an umbrella, she would not have got wet."',
        en: 'Say: If she had taken an umbrella, she would not have got wet.',
        steps: [
          {
            label: 'Unreal past',
            text: 'She did not take one: da + the perfect, da je ponijela.',
          },
          {
            label: 'Negate the conditional',
            text: 'The negation goes on the conditional auxiliary: ne bi.',
          },
          {
            label: 'Agree the participle',
            text: 'The subject is a woman, so pokisnula. Both halves agree with her.',
          },
        ],
        answer: 'Da je ponijela kišobran, ne bi pokisnula.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'You are NOT at the seaside. Say: "If we were at the seaside, we would swim."',
          options: [
            'Ako smo na moru, kupali bismo se.',
            'Da smo na moru, kupali bismo se.',
            'Da smo na moru, kupat ćemo se.',
            'Ako budemo na moru, kupali smo se.',
          ],
          correct: 1,
          hint: 'A condition contrary to fact changes the conjunction, and the main clause must be conditional.',
          explanation:
            'Da smo na moru, kupali bismo se — da for the unreal, bismo + participle, then se.',
        },
        {
          q: 'Dopuni: "Da ___ ranije, uhvatio bih vlak." (If I had got up earlier)',
          options: ['bih ustao', 'ću ustati', 'sam ustao', 'ustao'],
          correct: 2,
          hint: 'The unreal condition goes into the perfect; the conditional belongs to the other half.',
          explanation: 'Da sam ustao ranije — da + perfect; uhvatio bih carries the conditional.',
        },
        {
          q: 'It might rain tomorrow — nobody knows. Which sentence is right?',
          options: [
            'Da sutra bude kiše, ostat ćemo kod kuće.',
            'Ako sutra bude kiše, ostat ćemo kod kuće.',
            'Ako sutra bude kiše, ostali smo kod kuće.',
            'Da sutra bude kiše, ostali bismo kod kuće.',
          ],
          correct: 1,
          hint: 'The condition is open — it may well happen — so it is a real condition with a future outcome.',
          explanation: 'Ako sutra bude kiše, ostat ćemo kod kuće — ako for what may happen.',
        },
        {
          q: 'Dopuni (a woman speaking): "Kad ___ znala talijanski, radila bih u Trstu."',
          options: ['bih', 'bi', 'sam', 'budem'],
          correct: 0,
          hint: "The formal alternative to da puts the conditional into BOTH clauses, in the speaker's person.",
          explanation:
            'Kad bih znala… radila bih — kad bih + participle, then the conditional again.',
        },
      ],
    },
  },

  'wishes-regrets': {
    worked: [
      {
        title: 'Should Have',
        problem: 'Reci: "I should have booked the hotel earlier." (a man speaking)',
        en: 'Say: I should have booked the hotel earlier.',
        steps: [
          {
            label: 'Advice or regret?',
            text: 'It is about the past and it did not happen: regret, not advice.',
          },
          {
            label: 'Use the past of trebati',
            text: 'Regret is the plain PAST: trebao sam. The conditional trebao bih would be present advice.',
          },
          {
            label: 'Add the infinitive',
            text: 'sam sits second, straight after trebao; then ranije and the infinitive rezervirati.',
          },
        ],
        answer: 'Trebao sam ranije rezervirati hotel.',
      },
      {
        title: 'A Wish About Somebody Else',
        problem: 'Reci: "I wish my parents lived closer." (a man speaking)',
        en: 'Say: I wish my parents lived closer.',
        steps: [
          { label: 'The opener', text: 'volio bih — I would like / I wish.' },
          {
            label: 'Same subject or different?',
            text: 'The wish is about the parents, not the speaker, so the infinitive is out: volio bih DA + a clause.',
          },
          {
            label: 'The verb inside',
            text: 'It stays in the present and agrees with roditelji: žive.',
          },
        ],
        answer: 'Volio bih da moji roditelji žive bliže.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "___ nisam pojela cijelu tortu!" (If only I hadn\'t eaten the whole cake!)',
          options: ['Šteta što', 'Da barem', 'Trebala sam', 'Volio bih'],
          correct: 1,
          hint: 'You need the everyday "if only" opener, which needs no main clause after it.',
          explanation: 'Da barem nisam pojela… — a wish about the past.',
        },
        {
          q: 'A friend has had a cough for weeks. Advise him: "You should see a doctor."',
          options: [
            'Trebao si otići liječniku.',
            'Trebaš bi otići liječniku.',
            'Trebao bih otići liječniku.',
            'Trebao bi otići liječniku.',
          ],
          correct: 3,
          hint: 'Present advice to ti is the conditional of trebati — not its past, which is regret.',
          explanation:
            'Trebao bi otići liječniku — advice now. Trebao si… would scold him for the past.',
        },
        {
          q: 'Dopuni: "Žao mi je ___ sam zaboravio tvoj rođendan."',
          options: ['ako', 'koji', 'što', 'čim'],
          correct: 2,
          hint: 'The thing regretted really happened; žao mi je introduces it the same way šteta does.',
          explanation: 'Žao mi je što… — što for a fact that is regretted.',
        },
        {
          q: 'Dopuni: "Volio bih ___ u Istru s nama." (I wish you would come to Istria with us.)',
          options: ['da dođeš', 'doći', 'dođeš', 'da ćeš doći'],
          correct: 0,
          hint: 'The person who comes is not the speaker, so it takes a clause — and the verb in it stays present.',
          explanation: 'Volio bih da dođeš — a different subject needs da + present.',
        },
      ],
    },
  },

  'modal-nuance': {
    worked: [
      {
        title: 'Turning an Order Into Advice',
        problem: 'Kolega radi do ponoći svaki dan. Savjetuj ga blago da manje radi.',
        en: 'A colleague works till midnight every day. Advise him gently to work less.',
        steps: [
          {
            label: 'Rule or advice?',
            text: 'You are advising a person, so the plain moraš would sound like an order.',
          },
          {
            label: 'Pick the strength',
            text: 'Ordinary, friendly advice is trebati in the conditional: trebao bi.',
          },
          {
            label: 'Complete it',
            text: 'trebao (he, masculine) + bi + the infinitive: manje raditi.',
          },
        ],
        answer: 'Trebao bi manje raditi.',
      },
      {
        title: 'Must as a Deduction',
        problem: 'U stanu gore svjetla. Zaključi: "They must be at home."',
        en: 'The lights are on in the flat. Conclude: They must be at home.',
        steps: [
          {
            label: 'Obligation or probability?',
            text: 'Nobody is ordering them home — you are drawing a conclusion.',
          },
          {
            label: 'The fixed shape',
            text: 'A deduction uses mora da + a clause, not mora + infinitive (which reads as an obligation).',
          },
          {
            label: 'Agree the clause',
            text: 'The clause has its own subject, oni: su kod kuće.',
          },
        ],
        answer: 'Mora da su kod kuće.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'A notice in a lift: "Djeca mlađa od 12 godina ne ___ sama ulaziti u dizalo." (are not allowed to)',
          options: ['mogu', 'smiju', 'trebaju', 'moraju'],
          correct: 1,
          hint: 'A notice forbids; it is about permission, not ability or necessity.',
          explanation: 'ne smiju — a prohibition. ne mogu would mean they are unable to.',
        },
        {
          q: 'Dopuni: "Ponesi kišobran, ___ padati popodne." (it might rain)',
          options: ['mora', 'smije', 'moglo bi', 'trebao bi'],
          correct: 2,
          hint: 'Weather has no subject, so the modal goes impersonal (neuter), and the conditional turns it into a possibility.',
          explanation: 'moglo bi padati — impersonal conditional of moći: it might rain.',
        },
        {
          q: 'In a meeting, say "The report ought to be finished by Friday" without pointing at anyone.',
          options: [
            'Moraš završiti izvještaj do petka.',
            'Trebao bi završiti izvještaj do petka.',
            'Trebala bi završiti izvještaj do petka.',
            'Trebalo bi završiti izvještaj do petka.',
          ],
          correct: 3,
          hint: 'Drop the person entirely: the impersonal neuter form of the conditional blames nobody.',
          explanation:
            'Trebalo bi završiti… — impersonal. The others address a specific colleague.',
        },
        {
          q: 'Which is FIRM advice, but still short of an order?',
          options: [
            'Moraš ići liječniku.',
            'Morao bi ići liječniku.',
            'Mogao bi ići liječniku.',
            'Možda bi mogao ići liječniku.',
          ],
          correct: 1,
          hint: 'Take the strongest modal and turn its volume down one notch with the conditional.',
          explanation:
            'Morao bi — "you really ought to". Moraš is an order; mogao bi is only a suggestion.',
        },
      ],
    },
  },

  'prepositions-advanced': {
    worked: [
      {
        title: 'Motion, Then Position',
        problem: 'Dopuni obje praznine: Kofer sam gurnuo pod ___ i sad stoji pod ___. (bed)',
        en: 'Fill both gaps: I pushed the suitcase under the bed, and now it stands under the bed.',
        steps: [
          {
            label: 'The motion group',
            text: 'pod belongs with pred, nad and među: accusative for motion, instrumental for position.',
          },
          {
            label: 'First gap',
            text: 'gurnuo — pushed, movement towards: accusative, krevet.',
          },
          {
            label: 'Second gap',
            text: 'stoji — it is resting there: instrumental, krevetom.',
          },
        ],
        answer: 'Kofer sam gurnuo pod krevet i sad stoji pod krevetom.',
      },
      {
        title: 'Po for Fetching',
        problem: 'Reci: "I am going to pick up the children from school."',
        en: 'Say: I am going to pick up the children from school.',
        steps: [
          {
            label: 'What does po mean here?',
            text: 'Going to fetch someone — the accusative po, as in idem po kruh.',
          },
          {
            label: 'Put djeca in the accusative',
            text: 'djeca behaves like a feminine singular noun in form: the accusative is djecu.',
          },
          {
            label: 'Contrast',
            text: 'po školi, with the locative, would mean around the school — a different sentence.',
          },
        ],
        answer: 'Idem po djecu u školu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Slika visi nad ___." (above the fireplace — kamin)',
          options: ['kamin', 'kaminu', 'kaminom', 'kamina'],
          correct: 2,
          hint: 'The picture is not moving — it hangs there. nad follows the motion-group rule.',
          explanation: 'nad kaminom — static position → instrumental.',
        },
        {
          q: 'Dopuni: "Udario sam koljenom o ___." (I banged my knee against the table.)',
          options: ['stol', 'stolu', 'stolom', 'stola'],
          correct: 0,
          hint: 'o has two meanings: "about" takes one case, impact "against" takes another.',
          explanation: 'o stol — o + accusative for striking against something.',
        },
        {
          q: 'Dopuni: "Jahač je pao s ___." (The rider fell off the horse.)',
          options: ['konjem', 'konju', 'konj', 'konja'],
          correct: 3,
          hint: 's meaning "down from, off" is not the s meaning "with", and the two take different cases.',
          explanation: 's konja — s + genitive for movement down from.',
        },
        {
          q: 'Dopuni: "Sjela je među ___." (She sat down among her friends — prijateljice.)',
          options: ['prijateljice', 'prijateljicama', 'prijateljica', 'prijateljicu'],
          correct: 0,
          hint: 'sjela je describes moving into place, and među is in the motion group.',
          explanation:
            'među prijateljice — motion → accusative plural. Sjedi među prijateljicama is position.',
        },
      ],
    },
  },

  'concession-contrast': {
    worked: [
      {
        title: 'Unatoč and the Dative',
        problem: 'Reci: "Despite the high price, the concert was sold out."',
        en: 'Say: Despite the high price, the concert was sold out.',
        steps: [
          {
            label: 'The case',
            text: 'unatoč takes the DATIVE, not the genitive most prepositions like it take.',
          },
          {
            label: 'Decline the phrase',
            text: 'visoka cijena → dative visokoj cijeni: adjective and noun both -oj / -i.',
          },
          {
            label: 'The main clause',
            text: 'A comma, then the result: koncert je bio rasprodan.',
          },
        ],
        answer: 'Unatoč visokoj cijeni, koncert je bio rasprodan.',
      },
      {
        title: 'The Iako…, Ipak… Shape',
        problem: 'Poveži: Hotel je bio skup. Vratili bismo se.',
        en: 'Link them: The hotel was expensive. We would come back.',
        steps: [
          {
            label: 'Concede first',
            text: 'iako introduces the point you grant: Iako je hotel bio skup — je sits second in that clause.',
          },
          {
            label: 'Close the concession',
            text: 'ipak opens the second half and says "all the same".',
          },
          {
            label: 'Place the clitics',
            text: 'ipak is the first phrase, so bismo se follow it straight away, auxiliary before se.',
          },
        ],
        answer: 'Iako je hotel bio skup, ipak bismo se vratili.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Unatoč ___ prognozi, krenuli su na planinu." (despite the bad forecast)',
          options: ['loše', 'lošoj', 'lošu', 'lošom'],
          correct: 1,
          hint: 'Check the case unatoč governs — it is not the one most learners reach for.',
          explanation: 'unatoč lošoj prognozi — dative, feminine -oj.',
        },
        {
          q: 'Dopuni: "Bez obzira na ___, sastanak se održava." (regardless of the strike)',
          options: ['štrajka', 'štrajku', 'štrajk', 'štrajkom'],
          correct: 2,
          hint: 'bez obzira na takes the accusative, and for an inanimate masculine noun that looks like the nominative.',
          explanation: 'bez obzira na štrajk — accusative.',
        },
        {
          q: 'Dopuni: "___, nisam stručnjak, ali ovo mi ne zvuči logično."',
          options: ['Naprotiv', 'Stoga', 'Doduše', 'Međutim'],
          correct: 2,
          hint: 'You want the word that grants a point in advance, before the ali.',
          explanation: 'Doduše — "admittedly, granted", conceding before disagreeing.',
        },
        {
          q: 'Dopuni: "Cijene nisu pale; ___, porasle su." (on the contrary)',
          options: ['naprotiv', 'doduše', 'usprkos', 'dok'],
          correct: 0,
          hint: 'After a denial, the formal word that asserts the opposite.',
          explanation: 'naprotiv = on the contrary.',
        },
      ],
    },
  },

  'degrees-intensity': {
    worked: [
      {
        title: 'The More…, the More…',
        problem: 'Reci: "The later you come, the worse the seats."',
        en: 'Say: The later you come, the worse the seats.',
        steps: [
          {
            label: 'The frame',
            text: 'Što + comparative, to + comparative.',
          },
          {
            label: 'First half',
            text: 'kasno → kasnije: Što kasnije dođeš.',
          },
          {
            label: 'Second half',
            text: 'loš → lošiji, agreeing with mjesta (neuter plural): to su lošija mjesta.',
          },
        ],
        answer: 'Što kasnije dođeš, to su lošija mjesta.',
      },
      {
        title: 'Too Much in One Word',
        problem: 'Reci: "This suitcase is too heavy for me."',
        en: 'Say: This suitcase is too heavy for me.',
        steps: [
          {
            label: '"Too" + adjective',
            text: 'Croatian glues pre- onto the adjective: težak → pretežak.',
          },
          {
            label: 'Agree it',
            text: 'kofer is masculine, so the short masculine form stays: pretežak.',
          },
          {
            label: 'Place the clitics',
            text: '"for me" is the dative mi; with je it sits after Ovaj kofer: mi je.',
          },
        ],
        answer: 'Ovaj kofer mi je pretežak.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'How do you say "Fewer and fewer young people stay on the islands"?',
          options: [
            'Manje i manje mladih ostaje na otocima.',
            'Što manje mladih ostaje na otocima.',
            'Sve manje mladih ostaje na otocima.',
            'Sve malo mladih ostaje na otocima.',
          ],
          correct: 2,
          hint: 'A trend is one short word + a comparative, not a doubled English "less and less".',
          explanation: 'Sve manje mladih — sve + comparative.',
        },
        {
          q: 'Dopuni: "Što ___ vježbaš, to ćeš brže napredovati." (the more you practise)',
          options: ['puno', 'više', 'najviše', 'previše'],
          correct: 1,
          hint: 'Both halves of the correlative take a comparative, not a plain adverb or a superlative.',
          explanation: 'Što više… to brže — two comparatives.',
        },
        {
          q: 'Dopuni: "Ove su mi cipele ___." (These shoes are too narrow for me.)',
          options: ['pre uske', 'preuska', 'preuske', 'najuže'],
          correct: 2,
          hint: 'The prefix is written as one word with the adjective, and the adjective agrees with cipele.',
          explanation: 'preuske — pre- glued on, feminine plural -e.',
        },
        {
          q: 'You found the film fine — not great, not bad. Which fits?',
          options: [
            'Film je bio krajnje zanimljiv.',
            'Film je bio prilično zanimljiv.',
            'Film je bio izuzetno zanimljiv.',
            'Film je bio najzanimljiviji.',
          ],
          correct: 1,
          hint: 'Choose the measured intensifier from the middle of the scale, not the top.',
          explanation: 'prilično = fairly. krajnje and izuzetno sit at the strong end.',
        },
      ],
    },
  },

  'negation-advanced': {
    worked: [
      {
        title: 'Neither…, Nor…',
        problem: 'Reci: "Neither the post office nor the bank is open today."',
        en: 'Say: Neither the post office nor the bank is open today.',
        steps: [
          {
            label: 'List the absences',
            text: 'Put ni before each item: ni pošta ni banka.',
          },
          {
            label: 'Keep the verb negated',
            text: 'The double-negative rule still applies: ne rade, not rade.',
          },
          {
            label: 'Agreement',
            text: 'Two subjects together take the plural verb: rade.',
          },
        ],
        answer: 'Danas ne rade ni pošta ni banka.',
      },
      {
        title: '"Without Doing" as a Clause',
        problem: 'Reci: "She left without paying."',
        en: 'Say: She left without paying.',
        steps: [
          {
            label: 'No bez + verb',
            text: 'bez takes a noun, never a verb, so "without paying" cannot be built with it.',
          },
          {
            label: 'Use a da ne',
            text: 'Croatian makes a small clause: a da + the negated verb.',
          },
          {
            label: 'Tense and aspect',
            text: 'Match the main clause — past — and use perfective platiti for the one act: a da nije platila.',
          },
        ],
        answer: 'Otišla je a da nije platila.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Nemam ___ želje ići van večeras." (no desire at all)',
          options: ['nikakvu', 'nikakve', 'nikakav', 'nikakva'],
          correct: 1,
          hint: 'After nemam the noun goes into the genitive, and the adjective-like word agrees with feminine želja.',
          explanation: 'nikakve želje — genitive feminine.',
        },
        {
          q: 'Dopuni: "Ona govori ne samo hrvatski ___ i talijanski."',
          options: ['ali', 'ni', 'nego', 'a da'],
          correct: 2,
          hint: 'After a negative, the contrast word is not the one you would use after a positive.',
          explanation: 'ne samo… nego i… — nego after a negative.',
        },
        {
          q: 'Which sentence says "It was not HER who broke the vase — it was her brother"?',
          options: [
            'Ona nije razbila vazu, nego lonac.',
            'Ona je razbila vazu, nego brat.',
            'Nije razbila ona vazu, a brat.',
            'Nije ona razbila vazu, nego brat.',
          ],
          correct: 3,
          hint: 'The denied element sits right next to the negated verb.',
          explanation: 'Nije ona razbila vazu, nego brat — ona is the focus of the denial.',
        },
        {
          q: 'Dopuni: "Potpisao je ugovor ___." (without reading it)',
          options: [
            'a da ga nije pročitao',
            'a da nije ga pročitao',
            'bez čitati ga',
            'a da ga je pročitao',
          ],
          correct: 0,
          hint: 'The construction is a clause with a negated verb — and in that clause the pronoun clitic sits second, right after da.',
          explanation: 'a da ga nije pročitao — ga after da; nije is a full word and follows.',
        },
      ],
    },
  },

  'argument-structure': {
    worked: [
      {
        title: 'Opening on a Topic',
        problem: 'Otvori temu javnog prijevoza i reci da je preskup.',
        en: 'Open on the topic of public transport and say it is too expensive.',
        steps: [
          {
            label: 'The opener',
            text: 'Što se tiče… raises one aspect deliberately.',
          },
          {
            label: 'The case',
            text: 'Što se tiče takes the genitive: javni prijevoz → javnog prijevoza.',
          },
          {
            label: 'Make the point',
            text: 'A comma, then your view: mislim da je preskup.',
          },
        ],
        answer: 'Što se tiče javnog prijevoza, mislim da je preskup.',
      },
      {
        title: 'The U Tome Što Workhorse',
        problem: 'Reci: "The main problem is that there are not enough doctors."',
        en: 'Say: The main problem is that there are not enough doctors.',
        steps: [
          {
            label: 'The fixed frame',
            text: '[noun] je u tome što + a clause. It is not guessable from its parts — learn it whole.',
          },
          {
            label: 'Place je',
            text: 'je may split the phrase after the first stressed word: Glavni je problem.',
          },
          {
            label: 'The clause',
            text: 'Absence with nema takes the genitive plural: nema dovoljno liječnika.',
          },
        ],
        answer: 'Glavni je problem u tome što nema dovoljno liječnika.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Kad je riječ o ___, Zagreb nudi puno." (culture)',
          options: ['kulturu', 'kulturi', 'kulture', 'kultura'],
          correct: 1,
          hint: 'kad je riječ o works like o on its own: "about" takes one case.',
          explanation: 'o kulturi — locative.',
        },
        {
          q: 'Dopuni: "S jedne strane, život na selu je miran; s ___ strane, nema posla."',
          options: ['drugoj', 'drugu', 'druge', 'drugom'],
          correct: 2,
          hint: 'The second half mirrors the first exactly: same preposition, same case.',
          explanation: 's jedne strane… s druge strane — s + genitive both times.',
        },
        {
          q: 'Which closer fits a formal written essay?',
          options: ['Znači,', 'Zaključno,', 'Ono,', 'E pa,'],
          correct: 1,
          hint: 'Choose the formal, written "in conclusion", not a spoken filler.',
          explanation: 'Zaključno — the written closer. The others belong to speech.',
        },
        {
          q: 'Dopuni: "Taj plan ima više nedostataka nego ___." (advantages)',
          options: ['prednosti', 'prednostima', 'prednost', 'prednostiju'],
          correct: 0,
          hint: 'The noun mirrors nedostataka — the same case after više… nego — and it is an i-declension feminine.',
          explanation: 'nego prednosti — genitive plural, parallel to nedostataka.',
        },
      ],
    },
  },

  'hedging-precision': {
    worked: [
      {
        title: 'Hedging Without a Hedge Word',
        problem: 'Ublaži tvrdnju: "Ovaj plan je loš."',
        en: 'Soften the claim: "This plan is bad."',
        steps: [
          {
            label: 'Why soften?',
            text: 'A flat statement claims certainty; in a discussion that sounds arrogant.',
          },
          {
            label: 'Use the conditional',
            text: 'rekao bih da… claims less without adding any new vocabulary.',
          },
          {
            label: 'Rebuild the clause',
            text: 'After da, je takes second position: da je ovaj plan loš.',
          },
        ],
        answer: 'Rekao bih da je ovaj plan loš.',
      },
      {
        title: 'Passing On What You Heard',
        problem: 'Prenesi, ali ne tvrdi sam: "The museum will be closed in winter."',
        en: 'Pass it on without asserting it yourself: The museum will be closed in winter.',
        steps: [
          {
            label: 'Mark the source',
            text: 'It is second-hand, so open with navodno — allegedly.',
          },
          {
            label: 'The future passive',
            text: 'će biti zatvoren: future of biti + participle.',
          },
          {
            label: 'Place će',
            text: 'navodno is the first phrase, so će follows it directly.',
          },
        ],
        answer: 'Navodno će muzej zimi biti zatvoren.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "___ se slažem, ali imam jednu primjedbu." (I mostly agree)',
          options: ['Sigurno', 'Nikad', 'Uglavnom', 'Točno'],
          correct: 2,
          hint: 'You want the everyday word that concedes exceptions without naming them.',
          explanation: 'Uglavnom = mostly, generally.',
        },
        {
          q: 'You think the shop is probably closed, but you are not certain. Which fits?',
          options: [
            'Vjerojatno je trgovina zatvorena.',
            'Sigurno je trgovina zatvorena.',
            'Trgovina je zatvorena, to je sigurno.',
            'Trgovina je bila zatvorena.',
          ],
          correct: 0,
          hint: 'Match the word to your real confidence: likely, not certain.',
          explanation: 'Vjerojatno — likely. Sigurno claims certainty you do not have.',
        },
        {
          q: 'Dopuni: "___ ja znam, sastanak je u deset." (As far as I know)',
          options: ['Kako', 'Kad', 'Što', 'Koliko'],
          correct: 3,
          hint: 'The phrase limits the claim to the EXTENT of your knowledge — a word of quantity.',
          explanation: 'Koliko ja znam… — as far as I know.',
        },
        {
          q: 'Dopuni: "Pacijenti se u ___ slučajeva oporave za tjedan dana." (in most cases)',
          options: ['većina', 'većini', 'većinu', 'većinom'],
          correct: 1,
          hint: 'u meaning "in" a situation takes the locative.',
          explanation: 'u većini slučajeva — locative većini.',
        },
      ],
    },
  },

  'abstract-topics': {
    worked: [
      {
        title: 'Smatrati in Its Compact Shape',
        problem: 'Reci formalno i kratko: "I consider this law unfair." (nepravedan)',
        en: 'Say it formally and compactly: I consider this law unfair.',
        steps: [
          {
            label: 'Two shapes',
            text: 'smatram da je… takes a clause; the compact, more formal shape puts the thing and its quality straight after the verb.',
          },
          {
            label: 'The thing',
            text: 'The law is the object: accusative, and for inanimate zakon that is taj zakon.',
          },
          {
            label: 'The quality',
            text: 'The quality goes into the INSTRUMENTAL, masculine -im: nepravednim.',
          },
        ],
        answer: 'Smatram taj zakon nepravednim.',
      },
      {
        title: 'An -ost Noun After Ovisiti O',
        problem: 'Reci: "Everything depends on the readiness of the citizens." (spreman — ready)',
        en: 'Say: Everything depends on the readiness of the citizens.',
        steps: [
          {
            label: 'Build the abstract noun',
            text: 'spreman + -ost → spremnost, a feminine i-declension noun.',
          },
          {
            label: 'The fixed preposition',
            text: 'ovisiti o takes the locative, and the i-class locative is -i: o spremnosti.',
          },
          {
            label: 'Whose readiness?',
            text: 'The possessor follows in the genitive plural: građana.',
          },
        ],
        answer: 'Sve ovisi o spremnosti građana.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Cijena ovisi o ___." (the quality — kvaliteta)',
          options: ['kvalitetu', 'kvalitete', 'kvaliteti', 'kvalitetom'],
          correct: 2,
          hint: 'ovisiti carries a fixed preposition, and that preposition means "about/on" here.',
          explanation: 'ovisi o kvaliteti — o + locative.',
        },
        {
          q: 'Which noun names the quality of being "hrabar" (brave)?',
          options: ['hrabrota', 'hrabrost', 'hrabrstvo', 'hrabrenje'],
          correct: 1,
          hint: 'The suffix that builds most abstract nouns from adjectives — and the fleeting a drops.',
          explanation: 'hrabar → hrabrost (courage), a feminine i-declension noun.',
        },
        {
          q: 'Dopuni: "To pitanje ima ___ važnost." (great importance)',
          options: ['veliku', 'velik', 'veliki', 'veliko'],
          correct: 0,
          hint: 'Every -ost noun is feminine, and here it is the object of ima.',
          explanation: 'veliku važnost — feminine accusative; the noun itself does not change.',
        },
        {
          q: 'Dopuni: "Treba razlikovati istinu ___ mišljenja." (distinguish truth from opinion)',
          options: ['o', 'na', 's', 'od'],
          correct: 3,
          hint: 'razlikovati pairs with the preposition of separation, followed by the genitive.',
          explanation: 'razlikovati… od + genitive: od mišljenja.',
        },
      ],
    },
  },

  'formal-email': {
    worked: [
      {
        title: 'Opening to a Named Woman',
        problem: 'Započni službenu e-poruku gospođi Marić, koju ne poznaješ.',
        en: 'Open a formal email to Mrs Marić, whom you do not know.',
        steps: [
          {
            label: 'Register and gender',
            text: 'Formal and to a woman: Poštovana, not Poštovani and not Draga.',
          },
          {
            label: 'Address her in the vocative',
            text: "gospođa → gospođo. A woman's surname in -ić does not decline: Marić stays Marić.",
          },
          {
            label: 'Punctuation',
            text: 'A comma after the greeting; the message continues on a new line with a lower-case letter, since the comma does not end a sentence.',
          },
        ],
        answer: 'Poštovana gospođo Marić,',
      },
      {
        title: 'A Formal Request',
        problem: 'Službeno zamoli da ti pošalju račun do petka.',
        en: 'Formally ask them to send you the invoice by Friday.',
        steps: [
          {
            label: 'The frame',
            text: 'molim Vas da + a present-tense clause — with Vas capitalised as a mark of respect.',
          },
          {
            label: 'The verb',
            text: 'Stay in the Vi-form: pošaljete, the perfective present for one act.',
          },
          {
            label: 'The clitic',
            text: 'mi (to me) takes second position in the da-clause, straight after da.',
          },
        ],
        answer: 'Molim Vas da mi pošaljete račun do petka.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Obraćam Vam se u vezi ___." (regarding the invoice — račun)',
          options: ['račun', 'računa', 'računu', 'računom'],
          correct: 1,
          hint: 'u vezi on its own (without s) takes the genitive.',
          explanation: 'u vezi računa — or u vezi s računom, with s + instrumental.',
        },
        {
          q: 'Thank an institution for its reply. Which line is correct in a formal letter?',
          options: [
            'Zahvaljujem vam na odgovor.',
            'Zahvaljujem Vam na odgovoru.',
            'Zahvaljujem te na odgovoru.',
            'Zahvaljujem Vas na odgovoru.',
          ],
          correct: 1,
          hint: 'zahvaljivati takes the person in the dative and the thing after na in the locative; a formal letter capitalises the polite pronoun.',
          explanation:
            'Zahvaljujem Vam na odgovoru — dative Vam (capitalised), na + locative odgovoru.',
        },
        {
          q: 'Dopuni: "Unaprijed zahvaljujem na ___ odgovoru." (for your prompt reply)',
          options: ['Vaš brzi', 'Vašeg brzog', 'Vašem brzom', 'Vašim brzim'],
          correct: 2,
          hint: 'zahvaljivati na takes the locative, the same case as hvala na.',
          explanation: 'na Vašem brzom odgovoru — locative, with the polite Vaš capitalised.',
        },
        {
          q: 'After "Poštovani gospodine Horvat," which first line keeps the register?',
          options: [
            'Javljam Vam se s pitanjem o terminu sastanka.',
            'Javljam ti se s pitanjem o terminu sastanka.',
            'Bog, imam pitanje o terminu sastanka.',
            'Javljam se ti s pitanjem o terminu sastanka.',
          ],
          correct: 0,
          hint: 'The V-form runs from the first word to the last, and the clitics keep their order.',
          explanation: 'Javljam Vam se… — V-form, capital Vam, dative before se.',
        },
      ],
    },
  },

  presentations: {
    worked: [
      {
        title: 'Opening and Announcing the Plan',
        problem: 'Otvori izlaganje o turizmu na Hvaru i najavi da ima dva dijela. (a man speaking)',
        en: 'Open a talk on tourism on Hvar and announce that it has two parts.',
        steps: [
          {
            label: 'A polite opener',
            text: 'The conditional softens it: Danas bih vam želio predstaviti…',
          },
          {
            label: 'Name the topic',
            text: 'predstaviti takes the accusative: turizam na Hvaru.',
          },
          {
            label: 'Signpost the structure',
            text: 'Podijelio sam izlaganje u dva dijela — the audience now knows the shape.',
          },
        ],
        answer:
          'Danas bih vam želio predstaviti turizam na Hvaru. Podijelio sam izlaganje u dva dijela.',
      },
      {
        title: 'A Question You Cannot Answer',
        problem: 'Netko pita o proračunu za sljedeću godinu, a ti ne znaš odgovor.',
        en: "Someone asks about next year's budget, and you do not know the answer.",
        steps: [
          {
            label: 'Check and buy time',
            text: 'Rephrase first: Ako sam dobro razumio, pitate o… — o + locative, proračunu.',
          },
          {
            label: 'Admit it calmly',
            text: 'Nisam siguran — honest, and far better than a bare Ne znam.',
          },
          {
            label: 'Promise a follow-up',
            text: 'ali provjerit ću i javiti vam se — the future, then the infinitive of the second verb.',
          },
        ],
        answer:
          'Ako sam dobro razumio, pitate o proračunu za sljedeću godinu. Nisam siguran, ali provjerit ću i javiti vam se.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Sada ___ na drugi dio izlaganja." (I am moving on)',
          options: ['prijeđem', 'prelazim', 'prelazio', 'prijeći'],
          correct: 1,
          hint: 'An action happening right now needs the imperfective present.',
          explanation: 'Sada prelazim na… — the standard signpost.',
        },
        {
          q: 'Dopuni: "Obratite ___ na ovaj grafikon." (Note in particular)',
          options: ['pozornosti', 'pozornošću', 'pozornost', 'pažnji'],
          correct: 2,
          hint: 'obratiti takes a direct object — the accusative of an i-declension noun, which does not change.',
          explanation: 'Obratite pozornost na… — accusative pozornost.',
        },
        {
          q: 'Dopuni: "___ zaključujem svoje izlaganje." (With that I conclude my talk.)',
          options: ['Ovo', 'To', 'Taj', 'Time'],
          correct: 3,
          hint: '"With that" is the instrumental of the demonstrative to.',
          explanation: 'Time zaključujem — the fixed closing sentence.',
        },
        {
          q: 'Dopuni: "Na ___ ću predstaviti naše planove." (At the end)',
          options: ['kraju', 'kraj', 'kraja', 'krajem'],
          correct: 0,
          hint: 'na for a point in the sequence, not a direction — the static case.',
          explanation: 'Na kraju — na + locative.',
        },
      ],
    },
  },

  'meetings-negotiation': {
    worked: [
      {
        title: 'Making a Proposal',
        problem: 'Predloži (mi) da se glasovanje odgodi do ponedjeljka.',
        en: 'Propose that we postpone the vote until Monday.',
        steps: [
          {
            label: 'The frame',
            text: 'Predlažem da + a clause. The subject changes (I propose, WE postpone), so da is compulsory.',
          },
          {
            label: 'The tense',
            text: 'The clause takes the present, even though the action lies ahead: not bismo, not ćemo.',
          },
          {
            label: 'The verb',
            text: 'One act, so perfective odgoditi, first person plural: odgodimo; do + genitive ponedjeljka.',
          },
        ],
        answer: 'Predlažem da odgodimo glasovanje do ponedjeljka.',
      },
      {
        title: 'Disagreeing Without a Row',
        problem: 'Kolega predlaže veliko povećanje proračuna. Ne slažeš se — reci to uljudno.',
        en: 'A colleague proposes a big budget increase. Disagree politely.',
        steps: [
          {
            label: 'Avoid the bare no',
            text: 'Ne slažem se on its own lands far harder in a Croatian meeting than "I disagree".',
          },
          {
            label: 'Concede first',
            text: 'Slažem se u načelu — grant the principle before the objection.',
          },
          {
            label: 'Then qualify',
            text: 'ali + your reason, hedged: mislim da je povećanje previsoko.',
          },
        ],
        answer: 'Slažem se u načelu, ali mislim da je povećanje previsoko.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Predlažem da ___ drugog dobavljača." (we find)',
          options: ['naći', 'bismo našli', 'nađemo', 'ćemo naći'],
          correct: 2,
          hint: 'After predlažem da, the verb goes into the present — no conditional, no future.',
          explanation: 'da nađemo — present of the perfective naći.',
        },
        {
          q: 'Dopuni: "Htio bih se nadovezati na ___ što je rekla Ivana." (what Ivana said)',
          options: ['ono', 'onome', 'onim', 'onoga'],
          correct: 0,
          hint: 'nadovezati se na takes the accusative, and the neuter demonstrative does not change there.',
          explanation: 'na ono što… — accusative.',
        },
        {
          q: 'Which is the politest way to come in after a colleague has finished speaking?',
          options: [
            'Čekaj, sad ja.',
            'Ako smijem, htio bih nešto dodati.',
            'To nije točno.',
            'Ne slažem se.',
          ],
          correct: 1,
          hint: 'Ask for the turn, and soften it with the conditional.',
          explanation: 'Ako smijem, htio bih nešto dodati — permission, then a conditional wish.',
        },
        {
          q: 'Dopuni: "Znači, ostajemo pri ___." (the original plan)',
          options: ['prvotni plan', 'prvotnog plana', 'prvotnim planom', 'prvotnom planu'],
          correct: 3,
          hint: 'ostati pri — the preposition pri takes the locative.',
          explanation: 'ostajemo pri prvotnom planu — pri + locative.',
        },
      ],
    },
  },

  'small-talk-fluency': {
    worked: [
      {
        title: 'When the Word Will Not Come',
        problem: 'Ne sjećaš se riječi "ljestve". Nastavi razgovor na hrvatskom.',
        en: 'You cannot remember the word for "ladder". Keep the conversation going in Croatian.',
        steps: [
          {
            label: 'Signal the search',
            text: 'Say it in Croatian — Kako se ono kaže… — rather than falling silent or switching to English.',
          },
          {
            label: 'Describe by function',
            text: 'ono na što se penješ… — "the thing you climb on".',
          },
          {
            label: 'Give a situation',
            text: '…kad mijenjaš žarulju. The listener supplies the word and the exchange carries on.',
          },
        ],
        answer: 'Kako se ono kaže… ono na što se penješ kad mijenjaš žarulju?',
      },
      {
        title: 'An Answer That Needs a Moment',
        problem: 'Prijatelj pita: "Hoćeš li se preseliti u Zagreb?" Trebaš trenutak.',
        en: 'A friend asks: "Are you going to move to Zagreb?" You need a moment.',
        steps: [
          {
            label: 'Open with pa',
            text: 'pa is the Croatian "well…" — it fills the pause without meaning anything.',
          },
          {
            label: 'Refine with zapravo',
            text: 'zapravo signals that you are adjusting what you first said.',
          },
          {
            label: 'Give the real answer',
            text: 'ovisi o + locative: ovisi o poslu.',
          },
        ],
        answer: 'Pa, ne znam… zapravo, ovisi o poslu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Your friend says: "Dobio sam posao u Londonu!" Which reaction fits?',
          options: ['Slažem se.', 'Kako se ono kaže?', 'Ma nemoj! Kad počinješ?', 'Ovaj…'],
          correct: 2,
          hint: 'React to surprising news, then push the conversation on with a question.',
          explanation: 'Ma nemoj! — surprise — plus a follow-up question keeps him talking.',
        },
        {
          q: 'Correct yourself: "Bilo je u utorak… ___, u srijedu."',
          options: ['zapravo', 'pa', 'znaš', 'jasno'],
          correct: 0,
          hint: 'You need the filler that signals a correction or refinement, "actually".',
          explanation: 'zapravo = actually — the self-correction marker.',
        },
        {
          q: 'Dopuni: "Film je dug, ali ___ je to jednostavna ljubavna priča." (basically)',
          options: ['u bitu', 'na biti', 'bitno', 'u biti'],
          correct: 3,
          hint: 'A fixed two-word phrase: u + the locative of bit (essence), an i-declension noun.',
          explanation: 'u biti = basically, in essence.',
        },
        {
          q: 'Dopuni: "Da ___ na trenutak…" (Let me think for a moment)',
          options: ['razmisliti', 'razmislim', 'razmišljam', 'razmislio'],
          correct: 1,
          hint: 'da + the present of the perfective verb makes "let me…".',
          explanation: 'Da razmislim — the fixed time-buying phrase.',
        },
      ],
    },
  },

  'humour-irony': {
    worked: [
      {
        title: 'Hearing Understatement',
        problem: 'Prijatelj proba tvoju juhu i kaže: "Nije loše." Što je time rekao?',
        en: 'A friend tastes your soup and says "Nije loše." What did he mean?',
        steps: [
          {
            label: 'The literal meaning',
            text: 'Word for word it is "not bad", which in English sounds lukewarm.',
          },
          {
            label: 'The house style',
            text: 'Croatian — especially on the coast — favours understatement, so "not bad" is praise.',
          },
          {
            label: 'Read it correctly',
            text: 'He liked it a lot. Looking disappointed would be misreading him.',
          },
        ],
        answer: 'Nije loše = jako je dobra!',
      },
      {
        title: 'Answering Self-Deprecation',
        problem:
          'Domaćica kaže: "Nije to ništa posebno, samo malo sarme." Odgovori kako se očekuje.',
        en: 'The host says: "It is nothing special, just a bit of sarma." Answer as expected.',
        steps: [
          {
            label: 'Recognise the move',
            text: 'Self-deprecation is not a request for agreement — it invites warm contradiction.',
          },
          {
            label: 'Dismiss the modesty',
            text: 'ma kakvi brushes her "nothing special" aside.',
          },
          {
            label: 'Praise warmly',
            text: 'Then say what you really think: sarma je odlična.',
          },
        ],
        answer: 'Ma kakvi, sarma je odlična!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'You tell a friend you have won a prize. He says "Ma daj!" He means:',
          options: [
            'Give it to me.',
            'Go away.',
            'Oh come on, really?! — surprised disbelief',
            'Hurry up.',
          ],
          correct: 2,
          hint: 'Do not translate ma word for word; it sets the tone of what follows.',
          explanation: 'Ma daj! = "Oh come on!" — disbelief, usually affectionate.',
        },
        {
          q: 'The ferry has just been cancelled. Which remark is sarcastic?',
          options: [
            'Baš lijepo, sad čekamo do sutra.',
            'Nema veze, riješit ćemo.',
            'Kad ide sljedeći trajekt?',
            'Moglo bi biti gore.',
          ],
          correct: 0,
          hint: 'Look for praise attached to an obviously bad situation.',
          explanation: '"Baš lijepo" about a cancelled ferry means the opposite.',
        },
        {
          q: 'Dopuni: "Ma ___, nema šanse!" (No way, not a chance!)',
          options: ['kakvim', 'kakvih', 'kakvu', 'kakvi'],
          correct: 3,
          hint: 'The fixed dismissal uses the plural nominative form of kakav.',
          explanation: 'Ma kakvi! — a flat, emphatic no.',
        },
        {
          q: 'A fisherman back from a huge catch says: "Moglo bi biti gore." He means:',
          options: [
            'It went badly.',
            'It went very well.',
            'He is worried about tomorrow.',
            'He caught nothing.',
          ],
          correct: 1,
          hint: 'Understatement runs in both directions: a modest phrase can hide a good result.',
          explanation: '"Could be worse" is a genuinely positive report, understated.',
        },
      ],
    },
  },

  'business-economy': {
    worked: [
      {
        title: 'Rising TO a Level',
        problem: 'Reci: "Prices rose to two euros per litre."',
        en: 'Say: Prices rose to two euros per litre.',
        steps: [
          {
            label: 'Agree the verb',
            text: 'cijene is feminine plural, so the participle is porasle.',
          },
          {
            label: 'To or by?',
            text: 'A level reached takes na + accusative; the size of a change would take za.',
          },
          {
            label: 'The numbers',
            text: 'dva takes the genitive singular: dva eura. "Per" is po + locative: po litri.',
          },
        ],
        answer: 'Cijene su porasle na dva eura po litri.',
      },
      {
        title: 'Profit and Loss, the Native Words',
        problem:
          'Za godišnje izvješće: "The company made a loss in the first half-year, but a profit in the second."',
        en: 'For the annual report: The company made a loss in the first half-year, but a profit in the second.',
        steps: [
          {
            label: 'Choose the native pair',
            text: 'An annual report writes gubitak and dobit, not the borrowed profit.',
          },
          {
            label: 'The collocation',
            text: 'ostvariti gubitak / ostvariti dobit — "to make" a loss or profit.',
          },
          {
            label: 'Contrast and ellipsis',
            text: 'a links the two halves side by side; the verb is not repeated: a u drugom dobit.',
          },
        ],
        answer: 'Tvrtka je u prvom polugodištu ostvarila gubitak, a u drugom dobit.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Vlada planira smanjiti ___ na dohodak." (income tax)',
          options: ['poreza', 'porezu', 'porezom', 'porez'],
          correct: 3,
          hint: 'It is the direct object of smanjiti, and an inanimate masculine noun.',
          explanation: 'smanjiti porez — accusative, identical to the nominative.',
        },
        {
          q: 'Dopuni: "U Zagrebu raste ___ za stanovima." (demand for flats)',
          options: ['potražnja', 'ponuda', 'dobit', 'izvoz'],
          correct: 0,
          hint: 'Of supply and demand, you need the half that wants to buy.',
          explanation: 'potražnja za + instrumental — demand for.',
        },
        {
          q: 'The newspaper sentence for "The economy grew by two percent last year":',
          options: [
            'Gospodarstvo je lani porastao za dva posto.',
            'Gospodarstvo je lani poraslo za dva posto.',
            'Gospodarstvo je lani poraslo na dva posto.',
            'Gospodarstvo je lani poraslo od dva posto.',
          ],
          correct: 1,
          hint: 'Two checks: gospodarstvo is neuter, and the size of a change takes a different preposition from the level reached.',
          explanation: 'poraslo za dva posto — neuter agreement, za for "by".',
        },
        {
          q: 'Dopuni: "Hoteli na Jadranu najveći dio prihoda ostvaruju tijekom ___." (the season)',
          options: ['sezona', 'sezone', 'sezoni', 'sezonu'],
          correct: 1,
          hint: 'tijekom is a preposition that governs the genitive.',
          explanation: 'tijekom sezone — genitive.',
        },
      ],
    },
  },

  'politics-society': {
    worked: [
      {
        title: 'Izbori Agrees Plural',
        problem: 'Reci: "The presidential elections were held in December."',
        en: 'Say: The presidential elections were held in December.',
        steps: [
          {
            label: 'The noun',
            text: 'izbori has no singular in this sense; izbor alone means a choice.',
          },
          {
            label: 'Agree everything',
            text: 'The adjective is plural — predsjednički — and so is the passive: su održani.',
          },
          {
            label: 'Place the auxiliary',
            text: 'su follows the first phrase, predsjednički izbori.',
          },
        ],
        answer: 'Predsjednički izbori su održani u prosincu.',
      },
      {
        title: 'Who Does What',
        problem: 'Reci: "The Government proposed the law, and Parliament passed it."',
        en: 'Say: The Government proposed the law, and Parliament passed it.',
        steps: [
          {
            label: 'Get the institutions right',
            text: 'The Vlada proposes; the Sabor passes — never the other way round.',
          },
          {
            label: 'Agree the participles',
            text: 'Vlada is feminine (predložila); Sabor is masculine (izglasao).',
          },
          {
            label: 'Pronoun and clitic order',
            text: 'zakon becomes ga, and with third-person je the pronoun comes first: ga je.',
          },
        ],
        answer: 'Vlada je predložila zakon, a Sabor ga je izglasao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Zastupnici su glasovali ___." (for the law)',
          options: ['za zakona', 'za zakonu', 'za zakon', 'o zakon'],
          correct: 2,
          hint: 'za meaning "in favour of" takes the accusative.',
          explanation: 'glasovati za zakon — za + accusative.',
        },
        {
          q: 'Dopuni: "Na lokalnim ___ pobijedila je nova stranka." (in the local elections)',
          options: ['izboru', 'izborima', 'izbore', 'izbora'],
          correct: 1,
          hint: 'The noun has no singular in this sense, and na + a static event takes the locative.',
          explanation: 'na lokalnim izborima — locative plural.',
        },
        {
          q: 'Report the debate: "Parliament debated the budget."',
          options: [
            'Sabor je raspravljao o proračun.',
            'Sabor su raspravljali o proračunu.',
            'Sabor je raspravljala o proračunu.',
            'Sabor je raspravljao o proračunu.',
          ],
          correct: 3,
          hint: 'Sabor is one masculine noun, and o meaning "about" takes the locative.',
          explanation: 'Sabor je raspravljao o proračunu — masculine singular, locative.',
        },
        {
          q: 'Tko u Hrvatskoj izglasava zakone?',
          options: ['Vlada', 'Ustavni sud', 'župan', 'Sabor'],
          correct: 3,
          hint: 'The Government proposes; the body that votes is the parliament, with its own old name.',
          explanation: 'The Sabor passes laws; the Vlada proposes them.',
        },
      ],
    },
  },

  'language-history': {
    worked: [
      {
        title: 'Long Ije, Short Je',
        problem: 'Dopuni: Pastrva je ___ riba. (rijeka — a river fish)',
        en: 'Fill in: The trout is a river fish.',
        steps: [
          {
            label: 'Find the jat',
            text: 'rijeka has the LONG reflex, ije.',
          },
          {
            label: 'The derived form shortens it',
            text: 'In the adjective the syllable is short, so ije becomes je — and k softens to č before -n-: rječn-.',
          },
          {
            label: 'Agree it',
            text: 'riba is feminine: rječna.',
          },
        ],
        answer: 'Pastrva je rječna riba.',
      },
      {
        title: 'Placing a Speaker',
        problem: 'Čuješ nekoga kako kaže: "Ča je to?" Odakle je vjerojatno?',
        en: 'You hear someone say "Ča je to?" Where are they probably from?',
        steps: [
          {
            label: 'Find the word for "what"',
            text: 'The three groups are named after it: što, ča, kaj.',
          },
          {
            label: 'Identify the group',
            text: 'ča is čakavski.',
          },
          {
            label: 'Place it on the map',
            text: 'čakavski is spoken on the coast, in Istria and on the islands — not in Zagreb, which says kaj.',
          },
        ],
        answer: 'To je čakavski — vjerojatno je s obale, iz Istre ili s otoka.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "U parku se igraju ___." (the children — plural of dijete)',
          options: ['dijeca', 'djeca', 'djetca', 'dijete'],
          correct: 1,
          hint: 'The singular has the long reflex; the plural syllable is short, so the reflex shortens.',
          explanation: 'dijete → djeca: long ije, short je.',
        },
        {
          q: 'Who gave the Croatian Latin alphabet its diacritics (č, ž, š)?',
          options: ['Marko Marulić', 'Ljudevit Gaj', 'Miroslav Krleža', 'Ivana Brlić-Mažuranić'],
          correct: 1,
          hint: 'The leader of the Illyrian movement in the 1830s — the script is named after him.',
          explanation: 'Ljudevit Gaj — hence gajica.',
        },
        {
          q: 'What is the Bašćanska ploča?',
          options: [
            'a nineteenth-century grammar book',
            'a kajkavian poem',
            'a stone tablet in Glagolitic from around 1100',
            'a map of the dialects',
          ],
          correct: 2,
          hint: "It is the most famous monument of Croatia's own older script, found on the island of Krk.",
          explanation:
            'The Baška tablet, c. 1100, in glagoljica — one of the earliest records of the Croatian name.',
        },
        {
          q: 'Why is it "vrijeme" but "vremena"?',
          options: [
            'The jat is short in the oblique form, and after r its short reflex is written e.',
            'The genitive always drops the j of a noun.',
            'It is a spelling mistake that became standard.',
            'vremena comes from a different root.',
          ],
          correct: 0,
          hint: 'Think of the ije/je alternation, plus what happens to je after r.',
          explanation: 'Long ije in vrijeme, short in vremena — and after r the short reflex is e.',
        },
      ],
    },
  },

  'literature-canon': {
    worked: [
      {
        title: 'Summing Up a Plot',
        problem: 'Reci: "The novel\'s plot follows a family from Slavonia during the war."',
        en: "Say: The novel's plot follows a family from Slavonia during the war.",
        steps: [
          {
            label: 'The subject',
            text: 'radnja (plot) is the subject; "of the novel" is the genitive romana.',
          },
          {
            label: 'The object',
            text: 'pratiti takes the accusative — and obitelj is an i-declension noun, so it does not change.',
          },
          {
            label: 'Time',
            text: 'tijekom + genitive: tijekom rata.',
          },
        ],
        answer: 'Radnja romana prati obitelj iz Slavonije tijekom rata.',
      },
      {
        title: 'Advising Someone to Wait',
        problem: 'Savjetuj prijatelju da Krležu ostavi za kasnije i reci zašto. (a man speaking)',
        en: 'Advise a friend to leave Krleža for later, and say why.',
        steps: [
          {
            label: 'Soften the advice',
            text: 'The conditional turns it into a recommendation: bih ostavio — what I would do.',
          },
          {
            label: 'Decline the name',
            text: 'Krleža declines like žena: accusative Krležu, placed first with bih straight after it.',
          },
          {
            label: 'Give the reason',
            text: 'jer su mu rečenice duge i zahtjevne — su before mu, since only je comes after the pronouns.',
          },
        ],
        answer: 'Krležu bih ostavio za kasnije jer su mu rečenice duge i zahtjevne.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: "Taj sam roman čitao u ___." (in translation)',
          options: ['prijevod', 'prijevodu', 'prijevoda', 'prijevodom'],
          correct: 1,
          hint: 'u meaning "in" a state or form takes the locative.',
          explanation: 'u prijevodu — locative.',
        },
        {
          q: 'Dopuni: "Radnja se ___ u Dubrovniku u 16. stoljeću." (takes place)',
          options: ['događaju', 'dogodi se', 'događala', 'događa'],
          correct: 3,
          hint: 'The subject is one plot, the verb is in the present, and se is already in place.',
          explanation: 'Radnja se događa — third person singular present of događati se.',
        },
        {
          q: 'Dopuni: "Tu sam ___ pročitao u jednom dahu." (that short story — pripovijetka)',
          options: ['pripovijetku', 'pripovijetka', 'pripovijetki', 'pripovijetkom'],
          correct: 0,
          hint: 'It is the object of pročitati, and the noun declines like žena.',
          explanation: 'tu pripovijetku — accusative -u.',
        },
        {
          q: 'Dopuni: "Više volim ___ nego film." (the book)',
          options: ['knjiga', 'knjizi', 'knjigom', 'knjigu'],
          correct: 3,
          hint: 'voljeti takes a direct object, and nego simply repeats that case for the second item.',
          explanation: 'Više volim knjigu nego film — accusative.',
        },
      ],
    },
  },
};
