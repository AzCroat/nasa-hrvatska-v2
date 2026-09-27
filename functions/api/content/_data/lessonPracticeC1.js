// functions/api/content/_data/lessonPracticeC1.js
//
// C1 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time — at C1 often a CHOICE reasoned out: which register, which
// construction, which of two grammatical forms) and one guided-practice slide
// (four items, each with a HINT shown after a first wrong try and an explanation
// once resolved).
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
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
      ],
    },
  },
};
