// functions/api/content/_data/a2new/batch04.js
//
// New A2 lessons, batch 04 (Croaticum restructure, stage 3, 2026-11-12). See a2new/index.js.
//
// conditional-if (34) · imperative-review (35) · vocative-review (36) ·
// volunteering (38) · agreeing-disagreeing (39) · dative-adjectives (40).
//
// Razgovarajte s nama! A2-B1, lessons 4 and 5. Each lesson uses only grammar taught at
// or before its own masterOrder: the conditional forms (32) and wishes (33) come first,
// clitic order (11) and locative adjectives (18) are known, and nothing here uses a
// comparative, a koji-clause, a conjunction clause (da, jer, ako) or an indefinite
// pronoun — those are B1. The one exception is stated in the lesson that uses it:
// conditional-if teaches da + present explicitly as the unreal-condition frame.

/** Spine entries for this batch. `masterOrder` is the lesson's final A2 position. */
export const SPINE = [
  {
    id: 'conditional-if',
    masterOrder: 34,
    prerequisites: ['aspect', 'past-tense'],
    objectives: [
      'Build an imagined condition with kad bih … and its result with … bih',
      'Make both participles agree with the speaker: imao … putovao, imala … putovala',
      'Put bih, bi, bismo, biste in second place in both halves',
      'Use da + the present for a condition that is not true now: Da imam novca, …',
    ],
  },
  {
    id: 'imperative-review',
    masterOrder: 35,
    prerequisites: ['imperative-negative', 'aspect'],
    objectives: [
      'Build the imperative of every verb class from the oni form',
      'Know the commands that hide their stem: reci, pomozi, budi, uzmi, dođi',
      'Put short pronouns straight after the command: Daj mi ga! Nemojte ga zvati.',
      'Choose a perfective command for one action and an imperfective one for a habit',
      'Give a command about someone else with neka + the present: Neka uđe. Neka bude dobar.',
    ],
  },
  {
    id: 'vocative-review',
    masterOrder: 36,
    prerequisites: ['vocative-intro', 'formal-address', 'vi-vs-ti'],
    objectives: [
      'Call a man with -e or -u: Ivane, Petre, prijatelju, konobaru',
      'Call a woman with -o or -e, and know which first names usually stay unchanged',
      'Call a group: prijatelji, dečki, djeco, dame i gospodo',
      'Use titles and describing words when addressing someone: Dragi Ivane, gospodine doktore',
    ],
  },
  {
    id: 'volunteering',
    masterOrder: 38,
    prerequisites: ['conditional-if', 'aspect', 'hobbies-free-time'],
    objectives: [
      'Talk about volunteering: volontirati, udruga, humanitarna akcija',
      'Say whom you help with pomagati + the dative',
      'Tell a regular habit from a finished job with the two aspects',
      'Say what you would like to do with the conditional',
    ],
  },
  {
    id: 'agreeing-disagreeing',
    masterOrder: 39,
    prerequisites: ['vi-vs-ti', 'conditional-if'],
    objectives: [
      'Agree: Slažem se s tobom. Tako je. U pravu si.',
      'Disagree politely and soften it: Razumijem, ali ne bih rekao.',
      'Say you are not sure, or that you partly agree',
      'Give an opinion and weigh two sides: Po mom mišljenju… S jedne strane…',
    ],
  },
  {
    id: 'dative-adjectives',
    masterOrder: 40,
    prerequisites: ['dative-locative', 'svoj', 'verbs-with-dative'],
    objectives: [
      'Put an adjective in the dative: starom prijatelju, staroj ženi, starim ljudima',
      'Use moj, svoj, naš and taj in the dative: mojem / mom, svojoj, našim, toj',
      'Know that the dative and locative singular endings look the same',
      'Use dative adjectives after verbs such as dati, pomagati, pisati and after prema and k',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA2.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Conditions: kad bih … bih
  // ─────────────────────────────────────────────────────────
  {
    id: 'conditional-if',
    title: 'If I Had the Time: Kad bih… bih',
    subtitle: 'Imagined conditions and what would follow from them',
    icon: '💭',
    level: 'A2',
    duration: '~8 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Adding the "If"',
        body: 'You can already say what you would do: Išao bih na more. (I would go to the seaside.) Now you will add the condition — "if I had time", "if I knew", "if I were you". English changes the verb into a past form ("if I HAD"). Croatian simply uses the conditional twice: once for the condition and once for the result.',
        icon: '💭',
      },
      {
        type: 'rule',
        title: 'Kad bih …, … bih',
        body: 'The condition starts with kad and the conditional: kad bih imao (if I had), kad bismo znali (if we knew). The result is a second conditional: putovao bih (I would travel). Kad bih imao vremena, putovao bih. (If I had time, I would travel.) Both halves are imagined, so both carry bih, bi, bismo or biste, and the participle in both agrees with the person: a man says imao … putovao, a woman says imala … putovala.',
        highlight: 'Kad bih imao vremena, putovao bih.',
      },
      {
        type: 'table',
        title: 'The Two Halves',
        headers: ['Person', 'Condition (if…)', 'Result (…would)'],
        rows: [
          ['ja', 'kad bih imao / imala', 'putovao / putovala bih'],
          ['ti', 'kad bi imao / imala', 'putovao / putovala bi'],
          ['on / ona', 'kad bi imao / imala', 'putovao / putovala bi'],
          ['mi', 'kad bismo imali', 'putovali bismo'],
          ['vi / Vi', 'kad biste imali', 'putovali biste'],
          ['oni / one', 'kad bi imali / imale', 'putovali / putovale bi'],
        ],
      },
      {
        type: 'rule',
        title: 'Where bih Goes',
        body: 'bih, bi, bismo and biste are short words that sit in second place, like sam and ću. In the condition kad is first, so the auxiliary comes straight after it: kad bih imao, never "kad imao bih". In the result, start with the participle and put the auxiliary after it — putovao bih — or start with another word: ja bih putovao, sutra bih putovao. Other short words line up behind the auxiliary: kad bi mi pomogao (if you helped me), kad bih se odmorio (if I rested).',
        highlight: 'kad bi mi pomogao',
      },
      {
        type: 'rule',
        title: 'Either Half Can Come First',
        body: 'You can also start with the result: Putovao bih kad bih imao vremena. The meaning does not change. When the condition comes first, put a comma after it; when it comes second, Croatian writes no comma before kad.',
        highlight: 'Putovao bih kad bih imao vremena.',
      },
      {
        type: 'rule',
        title: 'Da + Present: Things That Are Not True',
        body: 'For a condition that is plainly not true right now — I do not have the money, I am not you — Croatian has a second frame: da + the PRESENT tense, then the conditional result. Da imam novca, kupio bih stan. (If I had money — but I do not — I would buy a flat.) Da znam, rekao bih ti. (If I knew, I would tell you.) Da sam na tvom mjestu, ne bih išao. (If I were you, I would not go.) After da the verb is the ordinary present: da imam, da znam, da sam, da nisam. Kad bih imao novca says almost the same thing; da + present makes it clearer that the condition is not real.',
        highlight: 'Da imam novca, kupio bih stan.',
      },
      {
        type: 'rule',
        title: 'Asking "What Would You Do If…?"',
        body: 'The question uses the same two halves. To a friend: Što bi radio kad bi imao milijun eura? Politely or to a group: Gdje biste živjeli kad biste mogli birati? Answer with the same frame, in your own person: Kad bih mogla birati, živjela bih na Hvaru.',
        highlight: 'Što bi radio kad bi imao milijun eura?',
      },
      {
        type: 'example',
        title: 'Imagined Conditions',
        items: [
          {
            hr: 'Kad bih imao vremena, učio bih talijanski.',
            en: 'If I had time, I would learn Italian.',
            note: 'a man speaking: imao and učio',
          },
          {
            hr: 'Kad bi Ana imala auto, išla bi autom na posao.',
            en: 'If Ana had a car, she would go to work by car.',
            note: 'bi for she; imala and išla for a woman',
          },
          {
            hr: 'Kad bismo živjeli na moru, plivali bismo svaki dan.',
            en: 'If we lived by the sea, we would swim every day.',
            note: 'bismo in both halves',
          },
          {
            hr: 'Kad bi mi pomogao, brzo bismo završili.',
            en: 'If you helped me, we would finish quickly.',
            note: 'bi first, then mi',
          },
          {
            hr: 'Što biste radili kad biste dobili na lotu?',
            en: 'What would you do if you won the lottery?',
            note: 'biste for Vi or for a group',
          },
          {
            hr: 'Putovala bih po cijelom svijetu kad bih mogla.',
            en: 'I would travel all over the world if I could.',
            note: 'the result first, so no comma before kad',
          },
        ],
      },
      {
        type: 'example',
        title: 'Da + Present',
        items: [
          {
            hr: 'Da imam novca, kupio bih stan u Zagrebu.',
            en: 'If I had money, I would buy a flat in Zagreb.',
            note: 'da imam: the present, not the conditional',
          },
          {
            hr: 'Da znam njezin broj, nazvao bih je.',
            en: 'If I knew her number, I would call her.',
            note: 'bih before je',
          },
          {
            hr: 'Da nisam umorna, išla bih s vama u kino.',
            en: 'If I were not tired, I would go to the cinema with you.',
            note: 'da nisam: the present of biti, negated',
          },
          {
            hr: 'Da sam na tvom mjestu, ne bih to kupio.',
            en: 'If I were you, I would not buy it.',
            note: 'literally "if I am in your place"',
          },
          {
            hr: 'Da ne pada kiša, išli bismo na izlet.',
            en: 'If it were not raining, we would go on a trip.',
            note: 'da ne pada: the present of padati',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A woman says: "If I had time, I would read every day." Which is correct?',
        options: [
          'Kad bih imala vremena, čitala bih svaki dan.',
          'Kad bih imam vremena, čitam bih svaki dan.',
          'Kad imala bih vremena, čitala bih svaki dan.',
          'Kad bih imao vremena, čitala bih svaki dan.',
        ],
        correct: 0,
        explanation:
          "Both halves are conditional, bih comes straight after kad, and both participles agree with the woman: imala, čitala. The present cannot follow bih, and a man's imao does not fit a woman speaking.",
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ novca, kupio bih novi bicikl." (If I had money — but I do not.)',
        options: ['Da bih imam', 'Da imam', 'Da imao', 'Da imati'],
        correct: 1,
        explanation:
          'In the frame for something that is not true, da takes the ordinary present: Da imam novca. A participle or an infinitive cannot follow da here.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, the present after bih: "Kad bih imam vremena". After bih comes the participle: Kad bih imao vremena. Second, the conditional after da: "Da bih imao novca, kupio bih stan". In this frame da takes the present: Da imam novca. Third, the wrong person of the auxiliary: "Kad bi ja imao". For ja the form is bih; bi belongs to ti, on, ona and oni.',
        highlight: 'Kad bih imao vremena',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Kad ___ imali vremena, išli bismo na more." (we)',
            options: ['bih', 'bi', 'biste', 'bismo'],
            correct: 3,
            explanation:
              'For mi the auxiliary is bismo, in both halves. bih is ja, bi is ti/on/ona/oni, biste is vi.',
          },
          {
            q: 'A man says: "If I knew the answer, I would tell you." Which sentence is correct?',
            options: [
              'Da znam odgovor, rekao bih ti.',
              'Da znao bih odgovor, rekao bih ti.',
              'Da znati odgovor, rekao bih ti.',
              'Da znam odgovor, rekao ću ti.',
            ],
            correct: 0,
            explanation:
              'da + the present (znam), then the conditional result (rekao bih). A conditional or an infinitive cannot follow da here, and ću does not go with a participle.',
          },
          {
            q: 'Complete: "Kad bih ___ vremena, učila bih španjolski." (a woman speaking)',
            options: ['imao', 'imala', 'imam', 'imati'],
            correct: 1,
            explanation:
              'After bih comes the participle, and it agrees with the woman speaking: imala, to match učila.',
          },
          {
            q: 'Which word order is correct?',
            options: [
              'Kad mi bi pomogao, završili bismo.',
              'Kad bi pomogao mi, završili bismo.',
              'Kad bi mi pomogao, završili bismo.',
              'Kad pomogao bi mi, završili bismo.',
            ],
            correct: 2,
            explanation:
              'The auxiliary comes straight after kad, and the other short words line up behind it: kad bi mi pomogao.',
          },
          {
            q: 'What does "Da sam na tvom mjestu, ne bih išao." mean?',
            options: [
              'When I was at your place, I did not go.',
              'If you go, I will not go.',
              'I am not going to your place.',
              'If I were you, I would not go.',
            ],
            correct: 3,
            explanation:
              'Da sam na tvom mjestu is the fixed way to say "if I were you", and ne bih išao is "I would not go".',
          },
          {
            q: 'Complete: "Što ___ radili kad biste dobili na lotu?" (you, polite)',
            options: ['biste', 'bismo', 'bi', 'bih'],
            correct: 0,
            explanation:
              'For Vi the auxiliary is biste in both halves, with the plural participle.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Conditions — Key Takeaways',
        points: [
          'Kad bih imao vremena, putovao bih: the conditional in both halves',
          'The participle agrees with the person: imao / imala / imali',
          'bih, bi, bismo, biste sit in second place: kad bi mi pomogao',
          'Result first, no comma: Putovao bih kad bih imao vremena.',
          'Not true now: da + present — Da imam novca, kupio bih stan.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The imperative, revisited
  // ─────────────────────────────────────────────────────────
  {
    id: 'imperative-review',
    title: 'Commands Revisited: Daj mi ga!',
    subtitle: 'Every verb class, the short words after it, and which aspect to use',
    icon: '📣',
    level: 'A2',
    duration: '~8 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'The Whole System',
        body: 'You learned to build the imperative from the oni form and to forbid something with nemoj. This lesson puts the whole system together: the imperative of every kind of verb, the short pronouns that follow it — Daj mi ga! — and the choice between a perfective and an imperfective command, which changes what you are asking for.',
        icon: '📣',
      },
      {
        type: 'rule',
        title: 'Building It From the Oni Form',
        body: 'Take the oni form of the present and drop its last vowel. If what is left ends in j, the imperative ends there: čitaju → čitaj, kupuju → kupuj, piju → pij. Otherwise add -i: pišu → piši, govore → govori, vide → vidi, zovu → zovi. Then add -mo for "let us" and -te for a group or for Vi: čitajmo, čitajte; pišimo, pišite.',
        highlight: 'čitaju → čitaj, pišu → piši',
      },
      {
        type: 'rule',
        title: 'Start From the Present, Not the Infinitive',
        body: 'Many common verbs hide their stem in the infinitive, so always go through the oni form: ići → idu → idi, doći → dođu → dođi, jesti → jedu → jedi, uzeti → uzmu → uzmi, sjesti → sjednu → sjedni, dati → daju → daj, poslati → pošalju → pošalji. Three are best learned by heart: reći → reci, pomoći → pomozi, biti → budi. Budi dobar! (Be good!) Budite strpljivi. (Be patient.)',
        highlight: 'reci · pomozi · budi',
      },
      {
        type: 'table',
        title: 'From Present to Command',
        headers: ['Infinitive', 'oni form', 'ti', 'vi / Vi'],
        rows: [
          ['čitati', 'čitaju', 'čitaj', 'čitajte'],
          ['pisati', 'pišu', 'piši', 'pišite'],
          ['govoriti', 'govore', 'govori', 'govorite'],
          ['piti', 'piju', 'pij', 'pijte'],
          ['kupovati', 'kupuju', 'kupuj', 'kupujte'],
          ['doći', 'dođu', 'dođi', 'dođite'],
          ['uzeti', 'uzmu', 'uzmi', 'uzmite'],
          ['reći', '(by heart)', 'reci', 'recite'],
          ['pomoći', 'pomognu', 'pomozi', 'pomozite'],
          ['biti', 'budu', 'budi', 'budite'],
        ],
      },
      {
        type: 'rule',
        title: 'Short Words Come Right After',
        body: 'A command normally opens the sentence, so the short pronouns follow it at once, in the fixed order you know: the "to whom" word (dative) before the "what" word (accusative), and se last. Daj mi ga! (Give it to me!) Pošalji mi poruku. (Send me a message.) Recite mi svoje ime. (Tell me your name.) Javi mi se! (Get in touch with me!) With nemoj the short words follow nemoj, because nemoj is now first: Nemojte ga zvati. Nemoj mi to reći.',
        highlight: 'Daj mi ga!',
      },
      {
        type: 'rule',
        title: 'Perfective or Imperfective?',
        body: 'The imperative has both aspects, and the choice matters. A perfective command asks for one action, done and finished: Zatvori prozor. (Close the window.) Napiši mi poruku. (Write me a message.) Pričekajte trenutak. (Wait a moment.) An imperfective command asks for a habit, an ongoing activity or general advice: Piši mi često. (Write to me often.) Govori polako. (Speak slowly.) Uči svaki dan. (Study every day.) In a ban the imperfective is the usual choice: Nemoj kasniti. Nemojte pušiti ovdje. To prevent an accident, the perfective is normal: Nemoj zaboraviti! Ne padni!',
        highlight: 'Zatvori prozor. · Piši mi često.',
      },
      {
        type: 'rule',
        title: 'Ti, Vi and "Let Us"',
        body: 'The -i form goes to one person you call ti; the -te form goes to a group or to anyone you call Vi, so it is also the polite form: Sjedni! to a friend, Sjednite! to a stranger. The -mo form means "let us": Pišimo! In speech "let us go" is usually just the present: Idemo! Soften any command with molim te or molim Vas.',
        highlight: 'Sjedni! → Sjednite!',
      },
      {
        type: 'rule',
        title: 'Neka + the Present: "Let Him, Let Them"',
        body: 'For a command about someone who is not in the conversation — he, she, they — Croatian has no special form. It uses neka and the ordinary present: Neka uđe. (Let him come in.) Neka pričekaju. (Let them wait.) Neka se smije! (Let her laugh!) The negative puts ne before the verb: Neka ne trči. (He shouldn’t run.) Biti uses bude: Neka bude dobar. (May he be good.) Neka bude tako. (So be it.) Neka can also go with ja and mi for a polite "let me": Neka ja platim.',
        highlight: 'Neka uđe.',
      },
      {
        type: 'example',
        title: 'Neka in Use',
        items: [
          {
            hr: 'Gospodin Horvat je ovdje. — Neka uđe.',
            en: 'Mr Horvat is here. — Let him come in.',
            note: 'neka + uđe, the present of ući',
          },
          {
            hr: 'Djeca su gladna? Neka jedu.',
            en: 'The children are hungry? Let them eat.',
            note: 'neka + jedu, the oni form',
          },
          {
            hr: 'Neka mi Ana pošalje poruku.',
            en: 'Ana should send me a message.',
            note: 'the short word mi follows neka',
          },
          {
            hr: 'Neka sutra bude lijepo vrijeme!',
            en: 'May the weather be nice tomorrow!',
            note: 'biti → bude after neka',
          },
        ],
      },
      {
        type: 'example',
        title: 'Commands in Everyday Life',
        items: [
          {
            hr: 'Daj mi ga, molim te.',
            en: 'Give it to me, please.',
            note: 'mi (to me) before ga (it)',
          },
          {
            hr: 'Recite mi svoje ime i prezime, molim Vas.',
            en: 'Tell me your name and surname, please.',
            note: 'recite: the Vi form of reći',
          },
          {
            hr: 'Pošalji mi tu fotografiju!',
            en: 'Send me that photo!',
            note: 'poslati → pošalju → pošalji',
          },
          {
            hr: 'Javi mi se sutra ujutro.',
            en: 'Get in touch with me tomorrow morning.',
            note: 'mi before se',
          },
          {
            hr: 'Pomozite mi, molim Vas!',
            en: 'Help me, please!',
            note: 'pomoći → pomozite',
          },
          {
            hr: 'Uzmi kišobran, pada kiša.',
            en: 'Take an umbrella, it is raining.',
            note: 'uzeti → uzmu → uzmi',
          },
          {
            hr: 'Budite strpljivi, vlak kasni.',
            en: 'Be patient, the train is late.',
            note: 'biti → budite',
          },
        ],
      },
      {
        type: 'example',
        title: 'Aspect and Bans',
        items: [
          {
            hr: 'Zatvori prozor, hladno je.',
            en: 'Close the window, it is cold.',
            note: 'one action: perfective zatvori',
          },
          {
            hr: 'Piši mi često!',
            en: 'Write to me often!',
            note: 'a habit: imperfective piši',
          },
          {
            hr: 'Govorite polako, molim Vas.',
            en: 'Please speak slowly.',
            note: 'ongoing: imperfective govorite',
          },
          {
            hr: 'Nemojte ga zvati, spava.',
            en: 'Do not call him, he is sleeping.',
            note: 'ga follows nemojte',
          },
          {
            hr: 'Nemoj zaboraviti ključ!',
            en: 'Do not forget the key!',
            note: 'an accident to prevent: perfective zaboraviti',
          },
          {
            hr: 'Idemo, kasnimo!',
            en: 'Let us go, we are late!',
            note: 'the present idemo used as "let us"',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence means "Give it to me!"?',
        options: ['Daj ga mi!', 'Daj mi ga!', 'Mi ga daj!', 'Ga mi daj!'],
        correct: 1,
        explanation:
          'The command comes first, then the short words in their fixed order: the "to whom" word mi before the "what" word ga.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Ask a friend to send you a message. Which is correct?',
        options: [
          'Pošalji mi poruku!',
          'Pošalješ mi poruku!',
          'Poslati mi poruku!',
          'Pošalji poruku mi!',
        ],
        correct: 0,
        explanation:
          'pošalju → pošalji, and mi follows the command at once. Pošalješ is a statement, poslati the infinitive, and mi cannot wait at the end.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, building the imperative from the infinitive: "Uzi!" Start from the oni form: uzmu → Uzmi! Second, putting the short words in the wrong order: "Daj ga mi!" The "to whom" word comes first: Daj mi ga! Third, changing the verb after nemoj: "Nemoj ga zoveš!" After nemoj the verb stays in the infinitive: Nemoj ga zvati.',
        highlight: 'Daj mi ga!',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ mi svoje ime, molim Vas." (reći, polite)',
            options: ['Recite', 'Rečite', 'Reći', 'Rekite'],
            correct: 0,
            explanation:
              'reći → reci, and the polite form adds -te: recite. Reći is the infinitive.',
          },
          {
            q: 'Which word order is correct?',
            options: [
              'Nemojte zvati ga.',
              'Ga nemojte zvati.',
              'Nemojte ga zvati.',
              'Nemojte ga zovete.',
            ],
            correct: 2,
            explanation:
              'ga follows nemojte, which is first, and the verb stays in the infinitive: Nemojte ga zvati.',
          },
          {
            q: 'Complete: "___ kišobran, pada kiša!" (uzeti, to a friend)',
            options: ['Uzi', 'Uzmi', 'Uzmeš', 'Uzeti'],
            correct: 1,
            explanation: 'The oni form is uzmu, so the command is uzmi.',
          },
          {
            q: 'Which command asks for ONE action, done now?',
            options: ['Piši mi često.', 'Govori polako.', 'Uči svaki dan.', 'Zatvori vrata.'],
            correct: 3,
            explanation:
              'zatvori is perfective: one finished action. The others are imperfective habits or ongoing activities.',
          },
          {
            q: 'Complete: "___ mi, molim te! Ne mogu sam." (pomoći)',
            options: ['Pomoći', 'Pomozi', 'Pomogneš', 'Pomogao'],
            correct: 1,
            explanation:
              'The command of pomoći is pomozi. Pomoći is the infinitive, pomogneš a present form and pomogao the past participle.',
          },
          {
            q: 'Complete: "Gdje je moja knjiga? Daj ___!" (Give it to me.)',
            options: ['mi je', 'je mi', 'ja je', 'mi ona'],
            correct: 0,
            explanation:
              'knjiga is feminine, so "it" is je; the "to whom" word mi comes first: Daj mi je!',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Commands — Key Takeaways',
        points: [
          'Drop the last vowel of the oni form; add -i unless the stem ends in j',
          'Learn by heart: reci, pomozi, budi',
          'Short words follow the command: Daj mi ga! Javi mi se!',
          'After nemoj, the infinitive: Nemojte ga zvati.',
          'Perfective for one action, imperfective for habits and most bans',
          'About someone else: neka + the present — Neka uđe. Neka bude dobar.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The vocative, revisited
  // ─────────────────────────────────────────────────────────
  {
    id: 'vocative-review',
    title: 'Calling People: The Vocative Revisited',
    subtitle: 'Men, women, groups and titles',
    icon: '📢',
    level: 'A2',
    duration: '~7 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Speaking To Someone',
        body: 'You met the vocative — the form for the person you are speaking TO — in A1: Ivane! gospođo! This lesson completes the picture: the masculine endings, which feminine words change and which first names usually do not, how to call a whole group, and how titles and describing words behave when you address someone directly.',
        icon: '📢',
      },
      {
        type: 'rule',
        title: 'Masculine: -e or -u',
        body: 'Most masculine nouns and names add -e: Ivan → Ivane, Josip → Josipe, gospodin → gospodine, profesor → profesore, doktor → doktore. A fleeting a drops, just as in the other cases: Petar → Petre. After a soft consonant (j, lj, nj, č, ć, š, ž, đ) the ending is -u: prijatelj → prijatelju, Juraj → Juraju, muž → mužu, učitelj → učitelju. Words for a person doing a job that end in -ar also take -u: konobar → konobaru, novinar → novinaru.',
        highlight: 'Ivane · prijatelju · konobaru',
      },
      {
        type: 'rule',
        title: 'k, g, h and c Change Before -e',
        body: 'Before -e, k becomes č, g becomes ž, h becomes š, and c becomes č: čovjek → čovječe, Bog → Bože, vojnik → vojniče, stric → striče, otac → oče. A masculine name that already ends in a vowel stays as it is: Marko!, Ivo!, Hrvoje!, Mate!',
        highlight: 'čovjek → čovječe',
      },
      {
        type: 'rule',
        title: 'Feminine: -o, -e, or Unchanged',
        body: 'A feminine noun in -a takes -o: žena → ženo, majka → majko, sestra → sestro, baka → bako, teta → teto, gospođa → gospođo. Nouns in -ica take -e: učiteljica → učiteljice, gospođica → gospođice, kolegica → kolegice, and so do names in -ica: Anica → Anice. First names in -a are where usage varies: in everyday speech many are called out unchanged — Ana!, Marija!, Petra! — while the -o form (Ano!, Marijo!) is the traditional one and is still heard. Both are correct, so never "correct" anyone for either.',
        highlight: 'Marija! or Marijo!',
      },
      {
        type: 'rule',
        title: 'Calling a Group',
        body: 'In the plural the vocative looks exactly like the ordinary plural: Prijatelji! Dečki! Cure! Ljudi! Studenti! Kolege! Three group words end in -a and behave like a feminine noun in -a, so they take -o: djeca → djeco, braća → braćo, gospoda → gospodo. That is why a speech opens with Dame i gospodo!',
        highlight: 'Dame i gospodo!',
      },
      {
        type: 'rule',
        title: 'Titles and Describing Words',
        body: "A title takes the vocative too: Gospodine doktore! Gospođo profesorice! An adjective or possessive in front of the name keeps its ordinary form: Dragi Ivane, draga Ana, draga majko, dragi prijatelji. A woman's surname does not change: gospođo Kovač. In a letter the greeting is followed by a comma: Dragi Marko, …",
        highlight: 'Dragi Ivane',
      },
      {
        type: 'table',
        title: 'Called Out',
        headers: ['Who', 'Nominative', 'Vocative'],
        rows: [
          ['a man (hard consonant)', 'Ivan', 'Ivane!'],
          ['a man (soft consonant)', 'prijatelj', 'prijatelju!'],
          ['a man (-k, -g, -h, -c)', 'čovjek', 'čovječe!'],
          ['a man (vowel)', 'Marko', 'Marko!'],
          ['a woman (-a)', 'sestra', 'sestro!'],
          ['a woman (-ica)', 'učiteljica', 'učiteljice!'],
          ['a group', 'prijatelji', 'prijatelji!'],
          ['a group word in -a', 'djeca', 'djeco!'],
        ],
      },
      {
        type: 'example',
        title: 'Calling Out to People',
        items: [
          {
            hr: 'Ivane, dođi ovamo!',
            en: 'Ivan, come here!',
            note: 'Ivan → Ivane',
          },
          {
            hr: 'Dobar dan, gospodine profesore.',
            en: 'Good afternoon, Professor.',
            note: 'gospodin and profesor both take -e',
          },
          {
            hr: 'Prijatelju, pomozi mi!',
            en: 'My friend, help me!',
            note: 'prijatelj → prijatelju: a soft consonant',
          },
          {
            hr: 'Konobaru, račun, molim!',
            en: 'Waiter, the bill, please!',
            note: 'konobar → konobaru',
          },
          {
            hr: 'Petre, gdje si?',
            en: 'Petar, where are you?',
            note: 'the a in Petar drops: Petre',
          },
          {
            hr: 'Bako, hvala na ručku!',
            en: 'Grandma, thank you for lunch!',
            note: 'baka → bako',
          },
          {
            hr: 'Oprostite, gospođo Kovač!',
            en: 'Excuse me, Mrs Kovač!',
            note: 'gospođa → gospođo; the surname Kovač stays',
          },
        ],
      },
      {
        type: 'example',
        title: 'Groups and Greetings',
        items: [
          {
            hr: 'Djeco, vrijeme je za spavanje!',
            en: 'Children, it is time for bed!',
            note: 'djeca → djeco',
          },
          {
            hr: 'Dame i gospodo, dobro došli!',
            en: 'Ladies and gentlemen, welcome!',
            note: 'gospoda → gospodo; dame stays as it is',
          },
          {
            hr: 'Dečki, idemo!',
            en: 'Guys, let us go!',
            note: 'the plural dečki is called as it is',
          },
          {
            hr: 'Dragi Marko, hvala na pismu.',
            en: 'Dear Marko, thank you for the letter.',
            note: 'Marko and dragi keep their form',
          },
          {
            hr: 'Čovječe, što radiš?',
            en: 'Man, what are you doing?',
            note: 'čovjek → čovječe',
          },
          {
            hr: 'Anice, dođi na kavu!',
            en: 'Anica, come for a coffee!',
            note: 'Anica → Anice',
          },
          {
            hr: 'Dobro jutro, gospođo profesorice, izvolite sjesti.',
            en: 'Good morning, Professor, please sit down.',
            note: 'gospođa → gospođo, profesorica → profesorice',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You call out to your friend Josip. What do you say?',
        options: ['Josip!', 'Josipu!', 'Josipe!', 'Josipo!'],
        correct: 2,
        explanation:
          'Josip ends in a hard consonant, so it takes -e: Josipe! -u is for soft consonants.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How does a speech to an audience begin?',
        options: ['Dame i gospoda!', 'Dame i gospodo!', 'Damo i gospodo!', 'Dame i gospodine!'],
        correct: 1,
        explanation:
          'dame is plural and stays as it is; gospoda is a group word in -a and takes -o: gospodo. gospodine calls one man.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, -e after a soft consonant: "Prijatelje!" After j, lj, nj and the hooked letters the ending is -u: Prijatelju! Second, forgetting the group words in -a: "Djeca, dođite!" To call them, use djeco: Djeco, dođite! Third, changing a masculine name that ends in a vowel: "Marke!" Marko, Ivo and Hrvoje are called as they are: Marko!',
        highlight: 'Prijatelju!',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'You call out to Ivan. What do you say?',
            options: ['Ivan!', 'Ivane!', 'Ivanu!', 'Ivano!'],
            correct: 1,
            explanation: 'Ivan ends in a hard consonant, so it takes -e: Ivane!',
          },
          {
            q: 'Complete: "___, donesite nam jelovnik, molim!" (to the waiter)',
            options: ['Konobaru', 'Konobarom', 'Konobaro', 'Konobara'],
            correct: 0,
            explanation:
              'Job words in -ar take -u: konobaru. Konobara is the genitive or accusative.',
          },
          {
            q: 'Which form do you use to call your sister?',
            options: ['sestra', 'sestre', 'sestri', 'sestro'],
            correct: 3,
            explanation: 'A feminine noun in -a takes -o: sestro!',
          },
          {
            q: 'Complete: "___, vrijeme je za spavanje!" (to the children)',
            options: ['Djeca', 'Djeco', 'Djece', 'Djeci'],
            correct: 1,
            explanation:
              'djeca is a group word that behaves like a feminine noun in -a, so you call djeco.',
          },
          {
            q: 'You greet your teacher, a woman. Which is correct?',
            options: [
              'Dobar dan, učiteljica!',
              'Dobar dan, učiteljico!',
              'Dobar dan, učiteljice!',
              'Dobar dan, učiteljicu!',
            ],
            correct: 2,
            explanation: 'Nouns in -ica take -e in the vocative: učiteljice.',
          },
          {
            q: 'Your friend is called Marko. How do you call him?',
            options: ['Marko!', 'Marke!', 'Marku!', 'Marka!'],
            correct: 0,
            explanation:
              'A masculine name that already ends in a vowel stays as it is: Marko! Marka is the genitive.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Vocative — Key Takeaways',
        points: [
          'Masculine: -e (Ivane, Petre), -u after a soft consonant and on -ar job words (prijatelju, konobaru)',
          'k, g, h, c change before -e: čovječe, Bože, oče',
          'Feminine: -o (sestro, gospođo), -ica → -ice (učiteljice)',
          'Many first names in -a are called as they are: Ana! (Ano! is also correct)',
          'Groups: the ordinary plural, but djeco, braćo, gospodo',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Volunteering
  // ─────────────────────────────────────────────────────────
  {
    id: 'volunteering',
    title: 'Helping Out: Volunteering',
    subtitle: 'What you do, what you did, and what you would like to do',
    icon: '🤝',
    level: 'A2',
    duration: '~7 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'Volontiranje',
        body: 'Volunteering — volontiranje — is part of everyday Croatian life: blood drives, beach clean-ups, animal shelters, food collections before Christmas. This lesson gives you the words to talk about it, and uses the two aspects and the conditional you know to say what you do, what you did and what you would like to do.',
        icon: '🤝',
      },
      {
        type: 'rule',
        title: 'The Key Words',
        body: 'volontirati (to volunteer) is an -irati verb: volontiram, volontiraš, volontiraju. The person is a volonter (a man) or a volonterka (a woman), and the work is volontiranje. Most volunteering is organised by an udruga (an association, a non-profit) or as a humanitarna akcija (a charity drive). Volontiram u udruzi za zaštitu životinja. (I volunteer at an animal-protection association.) Notice u udruzi: g becomes z before the -i of the locative.',
        highlight: 'volontiram u udruzi',
      },
      {
        type: 'rule',
        title: 'Helping: pomagati + Dative',
        body: 'To help someone is pomagati (imperfective) or pomoći (perfective), and the person you help goes in the dative, the "to whom" case: Pomažem djeci. (I help children.) Pomažemo ljudima u potrebi. (We help people in need.) Pomogla sam susjedi. (I helped my neighbour.) Pomagati drugima — to help others — is the phrase you will hear most.',
        highlight: 'Pomažemo ljudima u potrebi.',
      },
      {
        type: 'rule',
        title: 'What Volunteers Do',
        body: 'skupljati — to collect: skupljamo hranu, odjeću i igračke. darivati krv — to give blood: darujem krv dvaput godišnje. čistiti — to clean: čistimo plažu. šetati pse — to walk dogs: šetam pse u skloništu za životinje. posjećivati — to visit regularly: posjećujemo dom za starije osobe. raditi u pučkoj kuhinji — to work in a soup kitchen.',
        highlight: 'darivati krv',
      },
      {
        type: 'table',
        title: 'Volunteer Vocabulary',
        headers: ['Croatian', 'English'],
        rows: [
          ['volonter / volonterka', 'volunteer (man / woman)'],
          ['volontiranje', 'volunteering'],
          ['udruga', 'association, non-profit'],
          ['humanitarna akcija', 'charity drive'],
          ['sklonište za životinje', 'animal shelter'],
          ['pučka kuhinja', 'soup kitchen'],
          ['darivanje krvi', 'blood donation'],
          ['potvrda o volontiranju', 'certificate of volunteering'],
        ],
      },
      {
        type: 'rule',
        title: 'Habits, Finished Jobs, Wishes',
        body: 'Use the imperfective for what you do regularly: Svake subote pomažem u skloništu. Use the perfective for a job that is done and counted: Prošle subote smo skupili dvjesto kilograma hrane. Use the conditional for what you would like to do: Volio bih volontirati. Kad bih imala vremena, volontirala bih svaki tjedan.',
        highlight: 'Volio bih volontirati.',
      },
      {
        type: 'rule',
        title: 'Signing Up',
        body: 'To sign up is prijaviti se, with se: Prijavio sam se kao volonter. Prijavila sam se na akciju čišćenja plaže. Many associations give a potvrda o volontiranju, a certificate of your hours that you can show a school or an employer. The International Volunteer Day, Međunarodni dan volontera, is on 5 December.',
        highlight: 'Prijavio sam se kao volonter.',
      },
      {
        type: 'example',
        title: 'Volunteering Now and Before',
        items: [
          {
            hr: 'Volontiram u skloništu za životinje svake subote.',
            en: 'I volunteer at the animal shelter every Saturday.',
            note: 'volontiram: an -irati verb',
          },
          {
            hr: 'Moja sestra je volonterka u Crvenom križu.',
            en: 'My sister is a volunteer with the Red Cross.',
            note: 'volonterka: a woman volunteer',
          },
          {
            hr: 'Pomažemo ljudima u potrebi.',
            en: 'We help people in need.',
            note: 'pomagati takes the dative: ljudima',
          },
          {
            hr: 'Prošle godine smo skupili tonu hrane za pučku kuhinju.',
            en: 'Last year we collected a tonne of food for the soup kitchen.',
            note: 'skupili: one finished job, perfective',
          },
          {
            hr: 'Darujem krv dvaput godišnje.',
            en: 'I give blood twice a year.',
            note: 'darujem: a habit, imperfective',
          },
        ],
      },
      {
        type: 'example',
        title: 'Wishes and Invitations',
        items: [
          {
            hr: 'Volio bih volontirati u inozemstvu.',
            en: 'I would like to volunteer abroad.',
            note: 'volio bih: the conditional of a wish',
          },
          {
            hr: 'Kad bih imala vremena, volontirala bih svaki tjedan.',
            en: 'If I had time, I would volunteer every week.',
            note: 'a woman: imala and volontirala',
          },
          {
            hr: 'Prijavio sam se na akciju čišćenja plaže.',
            en: 'I signed up for a beach clean-up.',
            note: 'prijaviti se na + accusative',
          },
          {
            hr: 'U subotu čistimo park, hoćeš li doći?',
            en: 'On Saturday we are cleaning the park, will you come?',
            note: 'hoćeš li: an invitation',
          },
          {
            hr: 'Volontiranje mi daje puno zadovoljstva.',
            en: 'Volunteering gives me a lot of satisfaction.',
            note: 'mi: to me',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Volontiram ___." (at an association)',
        options: ['u udruzi', 'u udrugu', 'na udruga', 'u udrugi'],
        correct: 0,
        explanation:
          'Being somewhere takes u + locative, and g becomes z before -i: u udruzi. u udrugu is movement into it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence describes a HABIT?',
        options: [
          'Prošle subote smo skupili hranu.',
          'Svake subote pomažem u skloništu.',
          'Jučer sam se prijavio.',
          'Pomogla sam susjedi.',
        ],
        correct: 1,
        explanation:
          'svake subote and the imperfective pomažem describe something done regularly. The others are single finished events.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, the wrong case after pomagati: "Pomažem ljude". The person helped is in the dative: Pomažem ljudima. Second, the present after volio bih: "Volio bih volontiram". After a wish comes the infinitive: Volio bih volontirati. Third, leaving out se: "Prijavio sam na akciju". To sign up is prijaviti se: Prijavio sam se na akciju.',
        highlight: 'Pomažem ljudima.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Svake subote ___ u pučkoj kuhinji." (I volunteer)',
            options: ['volontiram', 'volontiraj', 'volontirati', 'volontiran'],
            correct: 0,
            explanation: 'volontirati in the ja form: volontiram.',
          },
          {
            q: 'Complete: "Pomažemo ___ u potrebi."',
            options: ['ljudi', 'ljude', 'ljudima', 'ljudma'],
            correct: 2,
            explanation:
              'pomagati takes the dative, and the dative plural of ljudi is ljudima. ljude is the accusative.',
          },
          {
            q: 'Which word means a woman volunteer?',
            options: ['volontiranje', 'volonterka', 'volonterica', 'volontirka'],
            correct: 1,
            explanation: 'volonter → volonterka. volontiranje is the activity itself.',
          },
          {
            q: 'A man says: "I would like to volunteer abroad." Which is correct?',
            options: [
              'Volim volontirati u inozemstvu.',
              'Volio sam volontirati u inozemstvu.',
              'Volio bih volontiram u inozemstvu.',
              'Volio bih volontirati u inozemstvu.',
            ],
            correct: 3,
            explanation:
              'A wish is volio bih + the infinitive. Volim is "I like", volio sam "I liked", and the present cannot follow volio bih.',
          },
          {
            q: 'Complete: "Prošle godine ___ dvjesto kilograma hrane." (we collected)',
            options: ['smo skupio', 'smo skupili', 'skupili sam', 'smo skupiti'],
            correct: 1,
            explanation:
              'For mi: smo + the plural participle, skupili. skupio is singular, sam is ja, and skupiti is the infinitive.',
          },
          {
            q: 'Complete: "Prijavila sam ___ na akciju čišćenja plaže."',
            options: ['se', 'si', 'je', 'sebe'],
            correct: 0,
            explanation: 'To sign up is prijaviti se, so se follows sam.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Volunteering — Key Takeaways',
        points: [
          'volontirati → volontiram; volonter, volonterka, volontiranje',
          'udruga (u udruzi), humanitarna akcija, pučka kuhinja, sklonište za životinje',
          'pomagati + dative: Pomažemo ljudima u potrebi.',
          'Imperfective for habits, perfective for finished jobs',
          'Wishes: Volio bih volontirati. Sign up: prijaviti se.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Agreeing and disagreeing
  // ─────────────────────────────────────────────────────────
  {
    id: 'agreeing-disagreeing',
    title: 'I Agree, I Disagree',
    subtitle: 'Agreeing, disagreeing politely and weighing both sides',
    icon: '⚖️',
    level: 'A2',
    duration: '~7 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Taking a Side',
        body: 'A conversation is not only questions and answers. Sooner or later someone says something you agree with — or do not. This lesson gives you the phrases Croatians use to agree, to disagree politely, to say you are not sure, and to weigh both sides of an argument.',
        icon: '⚖️',
      },
      {
        type: 'rule',
        title: 'Agreeing',
        body: 'The key verb is slagati se (to agree), and it always carries se: Slažem se. (I agree.) Slažem se s tobom. (I agree with you.) Slažem se s Vama. Slažem se s tim. (I agree with that.) se sits in second place, so it never opens the sentence: Slažem se, never "Se slažem". Shorter ways to agree: Tako je. (That is right.) Točno. (Exactly.) Upravo tako. (Just so.) Svakako. (Definitely.)',
        highlight: 'Slažem se s tobom.',
      },
      {
        type: 'rule',
        title: 'Being Right',
        body: 'To tell someone they are right, Croatian has two phrases, and both are common: U pravu si / U pravu ste — and Imaš pravo / Imate pravo. Do not mix them: "Ti si pravo" and "Imaš u pravu" are not Croatian. For "you are wrong" say Nisi u pravu; Nemaš pravo can also mean "you have no right".',
        highlight: 'U pravu si.',
      },
      {
        type: 'rule',
        title: 'Disagreeing Politely',
        body: 'Ne slažem se. (I disagree.) Ne slažem se s tobom. To soften it, grant a point first: Razumijem, ali… (I understand, but…) Imaš pravo, ali… Možda, ali… The conditional softens even more: Ne bih rekao. / Ne bih rekla. (I would not say so.) Ne bih se složio. / Ne bih se složila. (I would not agree.) For a fact that is wrong: To nije točno.',
        highlight: 'Ne bih rekla.',
      },
      {
        type: 'rule',
        title: 'Not Sure',
        body: 'Nisam siguran. / Nisam sigurna. (I am not sure — the word agrees with you.) Ne znam baš. (I do not really know.) Djelomično se slažem. (I partly agree.) Ovisi. (It depends.) Ovisi o cijeni. (It depends on the price.)',
        highlight: 'Nisam sigurna.',
      },
      {
        type: 'rule',
        title: 'Giving an Opinion and Weighing It Up',
        body: 'Po mom mišljenju… (In my opinion…) or simply Po meni… (As I see it…) introduce your view. To weigh two sides, use two sentences: S jedne strane, … S druge strane, … (On the one hand… on the other hand…) To add a point: Osim toga, … (Besides that…). To ask for an opinion: Što misliš? / Što mislite? Slažeš li se? / Slažete li se? — li comes right after the verb, and se after li.',
        highlight: 'S jedne strane… S druge strane…',
      },
      {
        type: 'table',
        title: 'Phrases at a Glance',
        headers: ['Agree', 'Disagree', 'Not sure'],
        rows: [
          ['Slažem se.', 'Ne slažem se.', 'Nisam siguran / sigurna.'],
          ['Tako je.', 'To nije točno.', 'Ne znam baš.'],
          ['U pravu si.', 'Nisi u pravu.', 'Ovisi.'],
          ['Imaš pravo.', 'Ne bih rekao / rekla.', 'Djelomično se slažem.'],
          ['Upravo tako.', 'Ne bih se složio / složila.', 'Možda.'],
        ],
      },
      {
        type: 'example',
        title: 'Agreeing and Disagreeing',
        items: [
          {
            hr: 'Slažem se s tobom, to je odlična ideja.',
            en: 'I agree with you, that is an excellent idea.',
            note: 's tobom: with you',
          },
          {
            hr: 'Imate pravo, cijene su previsoke.',
            en: 'You are right, the prices are too high.',
            note: 'imate pravo: the polite form',
          },
          {
            hr: 'Ne slažem se. Po mom mišljenju, to je preskupo.',
            en: 'I disagree. In my opinion, that is too expensive.',
            note: 'po mom mišljenju opens an opinion',
          },
          {
            hr: 'Razumijem, ali ne bih rekla.',
            en: 'I understand, but I would not say so.',
            note: 'ne bih rekla: a woman softening her answer',
          },
          {
            hr: 'Nisam siguran. Ovisi o cijeni.',
            en: 'I am not sure. It depends on the price.',
            note: 'ovisi o + locative',
          },
        ],
      },
      {
        type: 'example',
        title: 'Weighing It Up',
        items: [
          {
            hr: 'S jedne strane, auto je praktičan. S druge strane, skup je.',
            en: 'On the one hand, a car is practical. On the other hand, it is expensive.',
            note: 'two sides, two sentences',
          },
          {
            hr: 'Osim toga, u gradu nema parkinga.',
            en: 'Besides that, there is no parking in town.',
            note: 'osim toga adds a point',
          },
          {
            hr: 'Slažete li se s tim?',
            en: 'Do you agree with that?',
            note: 'li after the verb, se after li',
          },
          {
            hr: 'Tako je! Upravo to sam htio reći.',
            en: 'That is right! That is exactly what I wanted to say.',
            note: 'tako je: quick agreement',
          },
          {
            hr: 'Djelomično se slažem s Vama.',
            en: 'I partly agree with you.',
            note: 's Vama: the polite form',
          },
        ],
      },
      {
        type: 'example',
        title: 'Explaining and Answering an Argument',
        items: [
          {
            hr: 'Na primjer, autobus vozi samo dvaput na dan.',
            en: 'For example, the bus runs only twice a day.',
            note: 'na primjer — giving an example',
          },
          {
            hr: 'Možete li dati primjer?',
            en: 'Can you give an example?',
            note: 'asking the other side to explain',
          },
          {
            hr: 'Zapravo, problem nije novac nego vrijeme.',
            en: 'Actually, the problem is not money but time.',
            note: 'zapravo — actually, in fact',
          },
          {
            hr: 'Riječ je o našem zdravlju.',
            en: 'It’s about our health.',
            note: 'riječ je o / radi se o + locative — what it is about',
          },
          {
            hr: 'To znači da moramo krenuti rano ujutro.',
            en: 'That means we have to set off early in the morning.',
            note: 'to znači da — drawing a conclusion',
          },
          {
            hr: 'Da, ali auto je ipak praktičan.',
            en: 'Yes, but a car is practical all the same.',
            note: 'da, ali — granting a point, then answering it',
          },
          {
            hr: 'Baš naprotiv, javni prijevoz je jeftin i brz.',
            en: 'Quite the opposite, public transport is cheap and fast.',
            note: 'baš naprotiv — a strong counter',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence means "I agree with you"?',
        options: [
          'Se slažem s tobom.',
          'Slažem se s tobom.',
          'Slažem s tobom.',
          'Ja sam slažem s tobom.',
        ],
        correct: 1,
        explanation:
          'The verb is slagati se, and se sits in second place: Slažem se s tobom. It cannot open the sentence, cannot be dropped, and biti has no place here.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which phrase means "You are right" (to a friend)?',
        options: ['Ti si pravo.', 'U pravu si.', 'Imaš u pravu.', 'Si u pravu.'],
        correct: 1,
        explanation:
          'U pravu si (or Imaš pravo). The other three mix the two phrases or start with the short si.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, leaving out se: "Slažem s tobom". The verb is slagati se: Slažem se s tobom. Second, mixing the two "right" phrases: "Ti si pravo" or "Imaš u pravu". Choose one: U pravu si or Imaš pravo. Third, putting se in the wrong place in a question: "Slažeš se li?" li comes straight after the verb, then se: Slažeš li se?',
        highlight: 'Slažem se s tobom.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Slažem ___ s tobom."',
            options: ['si', 'sam', 'se', 'me'],
            correct: 2,
            explanation: 'To agree is slagati se: Slažem se s tobom.',
          },
          {
            q: 'Which is a polite way to disagree?',
            options: ['To je glupo.', 'Šuti!', 'Nemaš pojma.', 'Razumijem, ali ne bih se složio.'],
            correct: 3,
            explanation:
              'Granting a point and using the conditional softens a disagreement. The others are rude.',
          },
          {
            q: 'Which question is correct?',
            options: ['Slažeš li se?', 'Slažeš se li?', 'Se slažeš li?', 'Li se slažeš?'],
            correct: 0,
            explanation: 'li comes straight after the verb, then se: Slažeš li se?',
          },
          {
            q: 'A woman is not sure. What does she say?',
            options: ['Nisam siguran.', 'Nisam sigurna.', 'Nisam sigurno.', 'Nije sigurna.'],
            correct: 1,
            explanation:
              'The word agrees with the speaker: sigurna for a woman. Nije sigurna means "she is not sure".',
          },
          {
            q: 'Which phrase means "on the other hand"?',
            options: ['osim toga', 'po mom mišljenju', 's druge strane', 's jedne strane'],
            correct: 2,
            explanation:
              's druge strane is "on the other hand"; s jedne strane is "on the one hand".',
          },
          {
            q: 'Complete: "___ pravo, ali cijena je previsoka." (You are right — polite)',
            options: ['Imate', 'Ste', 'Imaš', 'Jeste'],
            correct: 0,
            explanation:
              'The polite form of imaš pravo is imate pravo. imaš is for a friend, and biti does not go with pravo.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Agreeing and Disagreeing — Key Takeaways',
        points: [
          'Slažem se (s tobom / s Vama); Ne slažem se',
          'You are right: U pravu si or Imaš pravo — never a mix',
          'Soften with Razumijem, ali… and Ne bih rekao / rekla',
          'Not sure: Nisam siguran / sigurna. Ovisi.',
          'Weigh it up: S jedne strane… S druge strane… Osim toga…',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Adjectives in the dative
  // ─────────────────────────────────────────────────────────
  {
    id: 'dative-adjectives',
    title: 'To My Old Friend: Adjectives in the Dative',
    subtitle: 'mojem starom prijatelju, toj ljubaznoj ženi, svojoj sestri',
    icon: '🎁',
    level: 'A2',
    duration: '~8 min',
    color: '#0d9488',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'The Words in Front Come Along',
        body: 'You can put a noun in the dative — the case for "to whom" or "for whom": Dajem knjigu bratu. Now the words in front of the noun come along: Dajem knjigu svom malom bratu. The good news: you already know these endings, because they are the locative endings you learned for u mom starom stanu.',
        icon: '🎁',
      },
      {
        type: 'rule',
        title: 'Masculine and Neuter: -om',
        body: 'An adjective in the masculine or neuter dative singular ends in -om: novom, starom, malom. Pišem starom prijatelju. (I am writing to an old friend.) The longer forms -ome and -omu are also correct and appear more in writing and in songs: starome prijatelju. After a soft consonant (č, ć, đ, š, ž, j, lj, nj) the ending is -em: lošem, vrućem, svježem. Ne vjerujem lošem mehaničaru.',
        highlight: 'starom prijatelju',
      },
      {
        type: 'rule',
        title: 'Possessives and Demonstratives',
        body: 'moj, tvoj and svoj have a full form and a short form, and both are standard: mojem or mom (also mome), tvojem or tvom, svojem or svom. naš and vaš: našem, vašem. The demonstratives: tom (also tome, tomu), ovom, onom. njegov and njezin take the adjective ending: njegovom, njezinom (in writing you will also meet njegovu). Dajem poklon svom bratu. Reci to tom čovjeku.',
        highlight: 'mojem / mom / mome',
      },
      {
        type: 'rule',
        title: 'Feminine: -oj',
        body: 'Every feminine adjective, possessive and demonstrative in the dative ends in -oj: novoj, mojoj, svojoj, toj, našoj, njezinoj. Kupio sam cvijeće svojoj majci. (I bought flowers for my mother.) Zahvalila sam toj ljubaznoj ženi. (I thanked that kind woman.) A fleeting a drops, as in every case but the masculine nominative: ljubazan → ljubaznoj.',
        highlight: 'toj ljubaznoj ženi',
      },
      {
        type: 'rule',
        title: 'Plural: -im',
        body: 'In the plural all three genders share one ending, -im: mojim prijateljima, tim ljudima, našim gostima, starim susjedama. It is the same ending as in the instrumental and locative plural, so you have met it already. The longer -ima is used mostly when the noun is left out: Pišem svojima. (I am writing to my family.)',
        highlight: 'mojim prijateljima',
      },
      {
        type: 'table',
        title: 'Dative Endings',
        headers: ['', 'Masculine / Neuter', 'Feminine', 'Plural'],
        rows: [
          ['adjective', 'starom (-ome, -omu)', 'staroj', 'starim'],
          ['soft adjective', 'vrućem', 'vrućoj', 'vrućim'],
          ['moj / svoj', 'mojem, mom / svojem, svom', 'mojoj / svojoj', 'mojim / svojim'],
          ['naš', 'našem', 'našoj', 'našim'],
          ['taj', 'tom (tome, tomu)', 'toj', 'tim'],
        ],
      },
      {
        type: 'rule',
        title: 'Same Ending, Different Job',
        body: 'The dative and locative singular of adjectives look the same: u mom starom stanu (locative) and mom starom prijatelju (dative). The difference is the job. The locative follows u, na, o, po and pri; the dative answers "to whom?" or "for whom?", follows verbs such as dati, pomagati, pisati, vjerovati and zahvaliti, and follows the prepositions k and prema.',
        highlight: 'u mom starom stanu',
      },
      {
        type: 'example',
        title: 'One Person',
        items: [
          {
            hr: 'Pišem pismo svom starom prijatelju.',
            en: 'I am writing a letter to my old friend.',
            note: 'svom and starom: masculine dative',
          },
          {
            hr: 'Kupio sam cvijeće svojoj majci.',
            en: 'I bought flowers for my mother.',
            note: 'svojoj: feminine dative, -oj',
          },
          {
            hr: 'Zahvalila sam toj ljubaznoj ženi.',
            en: 'I thanked that kind woman.',
            note: 'toj and ljubaznoj: both -oj',
          },
          {
            hr: 'Dajem poklon našem malom susjedu.',
            en: 'I am giving a present to our little neighbour.',
            note: 'našem and malom: masculine dative',
          },
          {
            hr: 'Vjerujem svojem liječniku.',
            en: 'I trust my doctor.',
            note: 'svojem: the full form of svom',
          },
          {
            hr: 'Odgovorio sam tom novom kolegi.',
            en: 'I answered that new colleague.',
            note: 'kolega is masculine, so tom and novom',
          },
        ],
      },
      {
        type: 'example',
        title: 'Groups and Directions',
        items: [
          {
            hr: 'Pokazali smo grad našim gostima.',
            en: 'We showed the town to our guests.',
            note: 'našim: the plural ending -im',
          },
          {
            hr: 'Pomažem tim starim ljudima.',
            en: 'I help those old people.',
            note: 'tim and starim: plural',
          },
          {
            hr: 'Idem prema glavnom trgu.',
            en: 'I am walking towards the main square.',
            note: 'prema takes the dative: glavnom',
          },
          {
            hr: 'Sutra idem k svojoj baki.',
            en: "Tomorrow I am going to my grandmother's.",
            note: 'k takes the dative: svojoj',
          },
          {
            hr: 'Kupili smo poklone našim dragim roditeljima i svojoj maloj sestri.',
            en: 'We bought presents for our dear parents and our little sister.',
            note: 'našim dragim: plural; svojoj maloj: feminine',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Kupio sam cvijeće ___ majci."',
        options: ['svoju', 'svoja', 'svojoj', 'svojom'],
        correct: 2,
        explanation:
          'majci is feminine dative, so svoj takes -oj: svojoj. svoju is the accusative and svojom the instrumental.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Pišem ___ prijatelju."',
        options: ['starog', 'starom', 'stari', 'starim'],
        correct: 1,
        explanation:
          'prijatelju is masculine dative singular: starom. starog is the genitive or accusative, and starim is plural.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, the genitive or accusative ending in the dative: "Pišem starog prijatelju". The dative is -om: starom prijatelju. Second, -om on a feminine word: "toj ljubaznom ženi". Feminine is always -oj: toj ljubaznoj ženi. Third, the plural ending with a singular noun: "mojim prijatelju". -im is plural: mojem prijatelju, but mojim prijateljima.',
        highlight: 'starom prijatelju',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Zahvalila sam ___ ženi."',
            options: ['ljubaznu', 'ljubazna', 'ljubaznoj', 'ljubaznom'],
            correct: 2,
            explanation:
              'ženi is feminine dative, so the adjective takes -oj: ljubaznoj. ljubaznom would be the instrumental.',
          },
          {
            q: 'Complete: "Dajem poklon ___ bratu." (my own)',
            options: ['svoj', 'svojem', 'svojeg', 'svojim'],
            correct: 1,
            explanation:
              'bratu is masculine dative: svojem (or svom). svojeg is the genitive or accusative, svojim the plural.',
          },
          {
            q: 'Complete: "Pokazao sam grad ___ gostima."',
            options: ['našem', 'naše', 'našoj', 'našim'],
            correct: 3,
            explanation: 'gostima is plural, so the possessive takes -im: našim.',
          },
          {
            q: 'Complete: "Reci to ___ čovjeku."',
            options: ['tom', 'taj', 'toga', 'tim'],
            correct: 0,
            explanation:
              'čovjeku is masculine dative singular: tom. toga is the genitive and tim the plural.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ana pomaže svojim susjedu.',
              'Ana pomaže svojeg susjedu.',
              'Ana pomaže svoj susjedu.',
              'Ana pomaže svojem susjedu.',
            ],
            correct: 3,
            explanation:
              'susjedu is masculine dative singular, so svojem (or svom). svojim is plural, svojeg genitive or accusative, svoj nominative.',
          },
          {
            q: 'Complete: "Idem prema ___ kolodvoru."',
            options: ['glavni', 'glavnom', 'glavnog', 'glavnim'],
            correct: 1,
            explanation: 'prema takes the dative, and kolodvoru is masculine: glavnom.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Dative Adjectives — Key Takeaways',
        points: [
          'Masculine / neuter: -om (starom), -em after a soft consonant (lošem)',
          'mojem / mom / mome are all correct; tom, našem, svojem',
          'Feminine: always -oj — toj ljubaznoj ženi',
          'Plural: -im — mojim prijateljima, tim ljudima',
          'Same endings as the locative; the job is "to whom" or "for whom"',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'conditional-if': {
    worked: [
      {
        title: 'Building the Two Halves',
        problem: 'Reci: "If I had a car, I would go to Istria." (a man speaking)',
        en: 'If I had a car, I would go to Istria.',
        steps: [
          {
            label: 'The condition',
            text: 'kad + bih + the participle of imati for a man: kad bih imao auto.',
          },
          {
            label: 'The result',
            text: 'ići gives the participle išao; the auxiliary bih follows it: išao bih.',
          },
          {
            label: 'The place',
            text: 'Going somewhere takes u + accusative: u Istru. The condition comes first, so a comma.',
          },
        ],
        answer: 'Kad bih imao auto, išao bih u Istru.',
      },
      {
        title: 'Something That Is Not True',
        problem: 'Reci: "If I were not working, I would come." (a woman speaking)',
        en: 'If I were not working, I would come.',
        steps: [
          {
            label: 'Is it true?',
            text: 'No — she is working. For a condition that is not true now, use da + the present.',
          },
          {
            label: 'The condition',
            text: 'The present of raditi, negated: ne radim → da ne radim.',
          },
          {
            label: 'The result',
            text: 'doći gives došla for a woman, then bih: došla bih.',
          },
        ],
        answer: 'Da ne radim, došla bih.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kad ___ ja imao novca, kupio bih kuću.',
          options: ['bi', 'bih', 'bismo', 'biste'],
          correct: 1,
          hint: 'The person is ja. Which form of the auxiliary goes with ja?',
          explanation: 'kad bih — ja takes bih; bi belongs to ti, on, ona and oni.',
        },
        {
          q: 'Kad bi Marko imao vremena, ___ bi nam.',
          options: ['pomogao', 'pomoći', 'pomaže', 'pomogla'],
          correct: 0,
          hint: 'After bi comes the participle, and Marko is a man.',
          explanation: 'pomogao bi nam — the masculine participle of pomoći.',
        },
        {
          q: '___ novca, putovali bismo. (but we do not have it)',
          options: ['Da bismo imali', 'Da imamo', 'Da imali', 'Da imati'],
          correct: 1,
          hint: 'The condition is not true, so da takes an ordinary present tense, mi form.',
          explanation: 'Da imamo novca — da + the present for something that is not true.',
        },
        {
          type: 'type',
          q: 'Kad bih ____ vremena, čitala bih svaki dan. (imati — a woman speaking)',
          answer: 'imala',
          hint: 'A woman speaking: the participle ends the way čitala does.',
          explanation: 'kad bih imala — the participle agrees with the woman speaking.',
        },
        {
          type: 'type',
          q: 'Kad bismo imali auto, ____ bismo na izlet. (ići)',
          answer: 'išli',
          hint: 'The participle of ići is irregular: for a man it is išao. What is it for a group?',
          explanation: 'išli bismo — the plural participle of ići.',
        },
        {
          type: 'type',
          q: 'Da ____ novca, kupila bih stan. (imati — but I do not have it)',
          answer: 'imam',
          hint: 'After da in this frame the verb is in the present tense, ja form.',
          explanation: 'Da imam novca — the ordinary present after da.',
        },
        {
          type: 'type',
          q: 'Da ____ umoran, išao bih s vama. (biti, negated — but I am tired)',
          answer: 'nisam',
          hint: 'The present of biti, negated, ja form.',
          explanation: 'Da nisam umoran — "if I were not tired".',
        },
        {
          q: 'Which is correct?',
          options: [
            'Kad mi bi rekao, znao bih.',
            'Kad bi mi rekao, znao bih.',
            'Kad bi rekao mi, znao bih.',
            'Kad rekao bi mi, znao bih.',
          ],
          correct: 1,
          hint: 'The auxiliary comes straight after kad, and the other short words line up behind it.',
          explanation: 'Kad bi mi rekao — bi in second place, mi behind it.',
        },
        {
          q: 'Putovao bih ___ vremena. (if I had)',
          options: ['kad bih imao', 'kad imao bih', 'kad bih imam', 'kad imam bih'],
          correct: 0,
          hint: 'kad first, then the auxiliary, then the participle.',
          explanation:
            'Putovao bih kad bih imao vremena — and no comma, because the result comes first.',
        },
        {
          q: 'Da ___ na tvom mjestu, ne bih to rekla.',
          options: ['bih bila', 'sam', 'si', 'bila'],
          correct: 1,
          hint: 'After da the present of biti, ja form — the short one.',
          explanation: 'Da sam na tvom mjestu — "if I were you".',
        },
        {
          q: 'Kad ___ mogli birati, gdje biste živjeli? (you, polite)',
          options: ['bi ste', 'biste', 'biti ste', 'ste bi'],
          correct: 1,
          hint: 'The Vi form of the auxiliary is one word.',
          explanation: 'kad biste mogli — biste for Vi, in both halves.',
        },
        {
          q: 'A woman: "If I lived in Split, I would swim every day."',
          options: [
            'Kad bih živjela u Splitu, plivala bih svaki dan.',
            'Kad bih živjela u Splitu, plivam svaki dan.',
            'Kad živjela bih u Splitu, plivala bih svaki dan.',
            'Kad bih živim u Splitu, plivala bih svaki dan.',
          ],
          correct: 0,
          hint: 'Both halves are imagined, and the auxiliary sits in second place.',
          explanation: 'Two conditionals, both with the feminine participle: živjela, plivala.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kad ___ imala novca, kupila bih auto." (I)',
        options: ['bi', 'bih', 'bismo', 'bila'],
        correct: 1,
        explanation: 'For ja the auxiliary is bih: kad bih imala.',
      },
      {
        q: 'Which sentence says "If it were not raining, we would go out"?',
        options: [
          'Da ne pada kiša, izašli bismo.',
          'Da ne pada kiša, izašli smo.',
          'Da kiša ne padati, izašli bismo.',
          'Da ne pada kiša, izlazimo bismo.',
        ],
        correct: 0,
        explanation:
          'da + the present (ne pada), then the conditional result (izašli bismo). The past or the present cannot be the result here.',
      },
      {
        q: 'Complete: "Kad bi Ivan imao vremena, ___ bi nam." (help)',
        options: ['pomoći', 'pomaže', 'pomogao', 'pomogla'],
        correct: 2,
        explanation: 'After bi comes the participle, masculine for Ivan: pomogao.',
      },
      {
        q: 'Which word order is correct?',
        options: [
          'Kad bih se odmorio, radio bih cijeli dan.',
          'Kad se bih odmorio, radio bih cijeli dan.',
          'Kad bih odmorio se, radio bih cijeli dan.',
          'Kad odmorio bih se, radio bih cijeli dan.',
        ],
        correct: 0,
        explanation:
          'The auxiliary comes straight after kad, and se lines up behind it: kad bih se odmorio.',
      },
      {
        q: 'What does "Kad bismo imali auto, išli bismo na more" mean?',
        options: [
          'When we had a car, we went to the seaside.',
          'If we had a car, we would go to the seaside.',
          'We have a car and we are going to the seaside.',
          'If you had a car, you would go to the seaside.',
        ],
        correct: 1,
        explanation: 'bismo in both halves: an imagined condition and its result, for mi.',
      },
      {
        q: 'Complete: "___ na tvom mjestu, ne bih čekao." (If I were you)',
        options: ['Da sam', 'Da bih', 'Kad sam', 'Da bio'],
        correct: 0,
        explanation:
          'Da sam na tvom mjestu is the fixed way to say "if I were you": da + the present of biti.',
      },
    ],
    vocab: [
      ['putovati', 'to travel', 'Kad bih imao vremena, putovao bih.'],
      ['novac', 'money', 'Da imam novca, kupio bih auto.'],
      ['vrijeme', 'time', 'Nemam vremena za kino.'],
      ['mjesto', 'place', 'Da sam na tvom mjestu, ne bih išla.'],
      ['dobiti na lotu', 'to win the lottery', 'Što bi radio kad bi dobio na lotu?'],
      ['birati', 'to choose', 'Kad bih mogla birati, živjela bih na moru.'],
      ['odmoriti se', 'to rest', 'Kad bih se odmorio, radio bih cijeli dan.'],
      ['umoran', 'tired', 'Da nisam umoran, išao bih s vama.'],
      ['izlet', 'trip, outing', 'Da ne pada kiša, išli bismo na izlet.'],
    ],
  },

  'imperative-review': {
    worked: [
      {
        title: 'From Infinitive to Command',
        problem: 'Reci prijatelju: "Take the key!" (uzeti)',
        en: 'Take the key!',
        steps: [
          {
            label: 'Find the oni form',
            text: 'uzeti → uzmu. The infinitive hides the m.',
          },
          {
            label: 'Drop the last vowel',
            text: 'uzm- does not end in j, so add -i.',
          },
          {
            label: 'Add the object',
            text: 'ključ is masculine and inanimate, so it stays as it is.',
          },
        ],
        answer: 'Uzmi ključ!',
      },
      {
        title: 'Two Short Words',
        problem: 'Reci gospođi: "Please give it to me." (the book — knjigu)',
        en: 'Please give it to me.',
        steps: [
          {
            label: 'Which form?',
            text: 'A lady you do not know gets the Vi form: dajte.',
          },
          {
            label: 'Two pronouns',
            text: 'mi (to me) and je (it — knjiga is feminine).',
          },
          {
            label: 'The order',
            text: 'The "to whom" word before the "what" word, both right after the command. Then molim Vas.',
          },
        ],
        answer: 'Dajte mi je, molim Vas.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ ovu knjigu, odlična je!" (čitati, to a friend)',
          options: ['Čitaš', 'Čitaj', 'Čitaji', 'Čitati'],
          correct: 1,
          hint: 'The oni form ends in -aju. When the stem ends in j, nothing is added.',
          explanation: 'čitaju → čitaj.',
        },
        {
          q: 'Complete: "___ mi, molim te!" (pomoći)',
          options: ['Pomoći', 'Pomogao', 'Pomozi', 'Pomogneš'],
          correct: 2,
          hint: 'This one does not follow the oni-form rule — it is learned by heart.',
          explanation: 'pomoći → pomozi.',
        },
        {
          q: 'Which word order is correct?',
          options: ['Daj ga mi!', 'Daj mi ga!', 'Mi ga daj!', 'Ga mi daj!'],
          correct: 1,
          hint: 'The "to whom" word comes before the "what" word.',
          explanation: 'Daj mi ga — mi before ga, both after the command.',
        },
        {
          q: 'Which is correct to a stranger?',
          options: [
            'Sjedni, molim te.',
            'Sjednite, molim Vas.',
            'Sjednete, molim Vas.',
            'Sjedni, molim Vas.',
          ],
          correct: 1,
          hint: 'A stranger gets Vi — and both words must match.',
          explanation: 'Sjednite, molim Vas — the polite command and the polite please.',
        },
        {
          type: 'type',
          q: 'Prijatelju: "____ ključ!" (uzeti)',
          answer: 'Uzmi',
          hint: 'Start from the oni form, uzmu.',
          explanation: 'uzmu → uzm- → uzmi.',
        },
        {
          type: 'type',
          q: 'Grupi: "____ strpljivi!" (biti)',
          answer: 'Budite',
          hint: 'biti has its own command, built on bud-.',
          explanation: 'biti → budi → budite.',
        },
        {
          type: 'type',
          q: 'Prijatelju: "____ mi tu fotografiju!" (poslati)',
          answer: 'Pošalji',
          hint: 'The oni form is pošalju.',
          explanation: 'pošalju → pošalj- → pošalji.',
        },
        {
          type: 'type',
          q: 'Gospodinu: "____ mi svoje ime, molim Vas." (reći)',
          answer: 'Recite',
          hint: 'The ti form is reci; add the polite ending.',
          explanation: 'reci → recite.',
        },
        {
          type: 'type',
          q: 'Nemojte ga ____! Spava. (Do not call him.)',
          answer: 'zvati',
          hint: 'After nemojte the verb stays in its dictionary form.',
          explanation: 'Nemojte ga zvati — nemojte + the infinitive.',
        },
        {
          q: 'Which command is about ONE action, now?',
          options: [
            'Pričekajte trenutak.',
            'Govorite polako.',
            'Pišite mi često.',
            'Učite svaki dan.',
          ],
          correct: 0,
          hint: 'Look for the perfective verb — a single finished action.',
          explanation: 'pričekati is perfective: wait this one moment.',
        },
        {
          q: 'Complete: "Nemoj ___ ključ!" (an accident you want to prevent)',
          options: ['zaboravi', 'zaboraviti', 'zaboraviš', 'zaboravio'],
          correct: 1,
          hint: 'After nemoj, the dictionary form.',
          explanation: 'Nemoj zaboraviti — and the perfective is normal for an accident.',
        },
        {
          q: 'Which word order is correct?',
          options: ['Pokaži ga mi!', 'Mi ga pokaži!', 'Pokaži mi ga!', 'Pokažeš mi ga!'],
          correct: 2,
          hint: 'Command first, then the to-whom word, then the what word.',
          explanation: 'Pokaži mi ga — the same order as Daj mi ga.',
        },
        {
          q: 'Doktor je ovdje. — ___ uđe! (Let him come in.)',
          options: ['Neka', 'Nemoj', 'Uđi', 'Hajde'],
          correct: 0,
          hint: 'A command about someone who is not in the conversation: a little word + the present.',
          explanation: 'Neka uđe — neka + the present of ući.',
        },
        {
          type: 'type',
          q: 'Djeca su umorna? Neka ____. (spavati — they)',
          answer: 'spavaju',
          hint: 'After neka comes the ordinary present, here the oni form.',
          explanation: 'Neka spavaju — let them sleep.',
        },
        {
          type: 'type',
          q: 'Neka ____ dobar! (biti — he)',
          answer: 'bude',
          hint: 'After neka, biti does not use je; it has its own form, the one the command budi comes from.',
          explanation: 'Neka bude dobar — may he be good.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ mi tu fotografiju!" (poslati, to a friend)',
        options: ['Pošalji', 'Pošlji', 'Poslati', 'Pošalješ'],
        correct: 0,
        explanation: 'pošalju → pošalji. Poslati is the infinitive and pošalješ a statement.',
      },
      {
        q: 'Which word order is correct?',
        options: [
          'Javi se mi sutra.',
          'Javi mi se sutra.',
          'Se mi javi sutra.',
          'Mi se javi sutra.',
        ],
        correct: 1,
        explanation: 'The command first, then mi, then se: Javi mi se.',
      },
      {
        q: 'Complete: "___ strpljivi, vlak kasni." (biti, to a group)',
        options: ['Bite', 'Budete', 'Budite', 'Biti'],
        correct: 2,
        explanation: 'biti → budi → budite. Budete is the present, not a command.',
      },
      {
        q: 'Which command gives advice about a HABIT?',
        options: ['Zatvori prozor.', 'Uzmi kišobran.', 'Pošalji mi poruku.', 'Uči svaki dan.'],
        correct: 3,
        explanation:
          'uči is imperfective and svaki dan marks a habit. The others ask for one finished action.',
      },
      {
        q: 'Complete: "Nemoj mi to ___!" (Do not tell me that!)',
        options: ['rečeš', 'reci', 'reći', 'rekao'],
        correct: 2,
        explanation: 'After nemoj the verb stays in the infinitive: Nemoj mi to reći!',
      },
      {
        q: 'Complete: "___ polako, molim Vas." (speak — keep it up)',
        options: ['Govorite', 'Govorete', 'Govoriti', 'Govorate'],
        correct: 0,
        explanation: 'govore → govor- → govori → govorite, the polite form.',
      },
    ],
    vocab: [
      ['poslati', 'to send', 'Pošalji mi poruku!'],
      ['javiti se', 'to get in touch', 'Javi mi se sutra.'],
      ['pričekati', 'to wait (a while)', 'Pričekajte trenutak, molim Vas.'],
      ['zaboraviti', 'to forget', 'Nemoj zaboraviti ključ!'],
      ['strpljiv', 'patient', 'Budite strpljivi.'],
      ['zatvoriti', 'to close', 'Zatvori prozor.'],
      ['uzeti', 'to take', 'Uzmi kišobran!'],
      ['pomoći', 'to help', 'Pomozite mi, molim Vas!'],
      ['ključ', 'key', 'Daj mi ključ.'],
    ],
  },

  'vocative-review': {
    worked: [
      {
        title: "A Man's Name",
        problem: 'Pozovi Josipa: "Josip, wait for me!"',
        en: 'Josip, wait for me!',
        steps: [
          {
            label: 'The ending of the name',
            text: 'Josip ends in a hard consonant, p.',
          },
          {
            label: 'The vocative',
            text: 'A hard consonant takes -e: Josipe.',
          },
          {
            label: 'The command',
            text: 'Wait for me, to a friend: pričekaj me.',
          },
        ],
        answer: 'Josipe, pričekaj me!',
      },
      {
        title: 'A Polite Greeting',
        problem: 'Pozdravi učiteljicu: "Good morning, teacher."',
        en: 'Good morning, teacher.',
        steps: [
          {
            label: 'The word',
            text: 'učiteljica ends in -ica.',
          },
          {
            label: 'The vocative',
            text: 'Nouns in -ica take -e: učiteljice.',
          },
          {
            label: 'The greeting',
            text: 'Good morning is Dobro jutro, followed by a comma.',
          },
        ],
        answer: 'Dobro jutro, učiteljice.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Call your friend Tomislav:',
          options: ['Tomislav!', 'Tomislave!', 'Tomislavu!', 'Tomislava!'],
          correct: 1,
          hint: 'The name ends in a hard consonant.',
          explanation: 'A hard consonant takes -e.',
        },
        {
          q: 'Call your husband (muž):',
          options: ['Muže!', 'Mužu!', 'Muž!', 'Muža!'],
          correct: 1,
          hint: 'ž is a soft consonant.',
          explanation: 'After a soft consonant the ending is -u.',
        },
        {
          q: 'Call your grandmother (baka):',
          options: ['Bako!', 'Baka!', 'Bake!', 'Baki!'],
          correct: 0,
          hint: 'A feminine noun in -a.',
          explanation: 'Feminine -a becomes -o.',
        },
        {
          q: 'Call the children:',
          options: ['Djeca!', 'Djece!', 'Djeco!', 'Djeci!'],
          correct: 2,
          hint: 'This group word behaves like a feminine noun in -a.',
          explanation: 'djeca takes -o, like sestra → sestro.',
        },
        {
          q: 'Call your cousin Ivo:',
          options: ['Ive!', 'Ivu!', 'Ivo!', 'Ivom!'],
          correct: 2,
          hint: 'The name already ends in a vowel.',
          explanation: 'Masculine names in -o stay as they are.',
        },
        {
          type: 'type',
          q: '____, gdje si? (Ivan)',
          answer: 'Ivane',
          hint: 'A hard consonant at the end: add the usual masculine ending.',
          explanation: 'Ivan → Ivane.',
        },
        {
          type: 'type',
          q: 'Dobar dan, ____! (gospodin)',
          answer: 'gospodine',
          hint: 'Like Ivan: a hard consonant takes -e.',
          explanation: 'gospodin → gospodine.',
        },
        {
          type: 'type',
          q: 'Hvala, ____! (prijatelj)',
          answer: 'prijatelju',
          hint: 'lj is soft, so the ending is not -e.',
          explanation: 'prijatelj → prijatelju.',
        },
        {
          type: 'type',
          q: 'Oprostite, ____ Kovač! (gospođa)',
          answer: 'gospođo',
          hint: 'A feminine noun in -a; the surname stays as it is.',
          explanation: 'gospođa → gospođo; Kovač does not change.',
        },
        {
          type: 'type',
          q: '____, račun, molim! (konobar)',
          answer: 'konobaru',
          hint: 'Job words in -ar do not take -e.',
          explanation: 'konobar → konobaru.',
        },
        {
          q: 'Start a talk to your students:',
          options: ['Dragi studenti,', 'Dragi studente,', 'Draga studentima,', 'Dragi studentu,'],
          correct: 0,
          hint: 'In the plural the vocative looks like the ordinary plural.',
          explanation: 'Dragi studenti — the plural, with dragi in its ordinary form.',
        },
        {
          q: 'Which greeting is correct for a woman teacher?',
          options: [
            'Dobar dan, profesorica!',
            'Dobar dan, profesorico!',
            'Dobar dan, profesoricu!',
            'Dobar dan, profesorice!',
          ],
          correct: 3,
          hint: 'Nouns in -ica have their own vocative ending.',
          explanation: 'profesorica → profesorice.',
        },
      ],
    },
    checkB: [
      {
        q: 'You call out to Petar. What do you say?',
        options: ['Petar!', 'Petare!', 'Petre!', 'Petru!'],
        correct: 2,
        explanation: 'The fleeting a in Petar drops, as in Petra, and -e is added: Petre!',
      },
      {
        q: 'Complete: "___, pomozi mi!" (to your friend, a man)',
        options: ['Prijatelje', 'Prijatelj', 'Prijatelja', 'Prijatelju'],
        correct: 3,
        explanation: 'lj is soft, so the ending is -u: prijatelju.',
      },
      {
        q: 'How do you greet a woman you do not know?',
        options: [
          'Dobar dan, gospođa!',
          'Dobar dan, gospođo!',
          'Dobar dan, gospođe!',
          'Dobar dan, gospođu!',
        ],
        correct: 1,
        explanation: 'gospođa → gospođo.',
      },
      {
        q: 'Complete: "___ i gospodo, dobro došli!"',
        options: ['Dame', 'Damo', 'Dama', 'Dami'],
        correct: 0,
        explanation: 'In the plural the vocative is the ordinary plural: dame.',
      },
      {
        q: 'Which is the vocative of čovjek?',
        options: ['čovjeku', 'čovjeke', 'čovječe', 'čovjeka'],
        correct: 2,
        explanation: 'k becomes č before -e: čovječe.',
      },
      {
        q: 'You start a letter to your friend Ivan. Which greeting is correct?',
        options: ['Dragi Ivane,', 'Drago Ivane,', 'Dragi Ivan,', 'Draga Ivane,'],
        correct: 0,
        explanation:
          'dragi keeps its ordinary masculine form, and the name is in the vocative: Dragi Ivane,',
      },
    ],
    vocab: [
      ['gospodin', 'sir; Mr', 'Dobar dan, gospodine!'],
      ['gospođa', 'madam; Mrs', 'Izvolite, gospođo!'],
      ['prijatelj', 'friend', 'Hvala, prijatelju!'],
      ['konobar', 'waiter', 'Konobaru, račun, molim!'],
      ['čovjek', 'man; person', 'Čovječe, što radiš?'],
      ['djeca', 'children', 'Djeco, dođite!'],
      ['dečki', 'guys; boys', 'Dečki, idemo!'],
      ['učiteljica', 'teacher (woman)', 'Dobro jutro, učiteljice!'],
      ['dame i gospodo', 'ladies and gentlemen', 'Dame i gospodo, dobro došli!'],
    ],
  },

  volunteering: {
    worked: [
      {
        title: 'A Regular Job',
        problem: 'Reci: "I volunteer at the soup kitchen every Saturday."',
        en: 'I volunteer at the soup kitchen every Saturday.',
        steps: [
          {
            label: 'The verb',
            text: 'volontirati is an -irati verb: volontiram.',
          },
          {
            label: 'When',
            text: 'Every Saturday: svake subote. A habit, so the imperfective fits.',
          },
          {
            label: 'Where',
            text: 'Being somewhere: u + locative — u pučkoj kuhinji.',
          },
        ],
        answer: 'Svake subote volontiram u pučkoj kuhinji.',
      },
      {
        title: 'A Wish',
        problem: 'Reci (a woman): "I would like to help children."',
        en: 'I would like to help children.',
        steps: [
          {
            label: 'A wish',
            text: 'The conditional of voljeti for a woman: voljela bih.',
          },
          {
            label: 'Then the infinitive',
            text: 'After a wish comes the dictionary form: pomagati.',
          },
          {
            label: 'Whom?',
            text: 'pomagati takes the dative: djeca → djeci.',
          },
        ],
        answer: 'Voljela bih pomagati djeci.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Ja ___ u udruzi za zaštitu životinja."',
          options: ['volontiram', 'volontiraju', 'volontirati', 'volonter'],
          correct: 0,
          hint: 'An -irati verb in the ja form.',
          explanation: 'volontirati → volontiram.',
        },
        {
          q: 'Complete: "Pomažemo ___."',
          options: ['djeca', 'djecu', 'djeci', 'djecom'],
          correct: 2,
          hint: 'pomagati takes the case for "to whom".',
          explanation: 'The dative of djeca is djeci.',
        },
        {
          q: 'Which word is the work itself, "volunteering"?',
          options: ['volonter', 'volontiranje', 'volontirati', 'volonterka'],
          correct: 1,
          hint: 'Nouns for an activity often end in -nje.',
          explanation: 'volontiranje — like čitanje, pisanje.',
        },
        {
          q: 'A woman: "I signed up for the clean-up."',
          options: [
            'Prijavila sam se na akciju čišćenja.',
            'Prijavila sam na akciju čišćenja.',
            'Prijavio sam se na akciju čišćenja.',
            'Prijavila se sam na akciju čišćenja.',
          ],
          correct: 0,
          hint: 'prijaviti se needs se, and the participle agrees with the speaker.',
          explanation: 'Prijavila sam se — sam before se, and the feminine participle.',
        },
        {
          type: 'type',
          q: 'Svake subote ____ u skloništu. (volontirati — ja)',
          answer: 'volontiram',
          hint: 'An -irati verb: drop -ti and add the ja ending.',
          explanation: 'volontiram — a habit, in the present.',
        },
        {
          type: 'type',
          q: 'Pomažem ____ u potrebi. (ljudi)',
          answer: 'ljudima',
          hint: 'pomagati takes the dative, plural.',
          explanation: 'ljudi → ljudima.',
        },
        {
          type: 'type',
          q: 'Moja sestra je ____ u Crvenom križu. (a volunteer)',
          answer: 'volonterka',
          hint: "The woman's form of volonter.",
          explanation: 'volonter → volonterka.',
        },
        {
          type: 'type',
          q: 'Volio bih ____ u inozemstvu. (to volunteer)',
          answer: 'volontirati',
          hint: 'After volio bih comes the dictionary form of the verb.',
          explanation: 'Volio bih volontirati — a wish + the infinitive.',
        },
        {
          q: 'Which sentence describes a habit?',
          options: [
            'Jučer sam darovao krv.',
            'Darujem krv dvaput godišnje.',
            'Prošli tjedan smo skupili odjeću.',
            'Prijavio sam se.',
          ],
          correct: 1,
          hint: 'Look for the imperfective present and a word for how often.',
          explanation: 'darujem + dvaput godišnje: something done regularly.',
        },
        {
          q: 'Complete: "Kad bih imala vremena, ___ u skloništu."',
          options: ['pomagala sam', 'pomažem bih', 'pomagala bih', 'pomagati bih'],
          correct: 2,
          hint: 'Both halves of an imagined condition carry the conditional.',
          explanation: 'pomagala bih — the participle, then bih.',
        },
        {
          q: 'What is "darivanje krvi"?',
          options: ['a blood test', 'blood donation', 'a hospital visit', 'a first-aid course'],
          correct: 1,
          hint: 'darivati means to give as a gift.',
          explanation: 'darivanje krvi is blood donation.',
        },
        {
          q: 'Complete: "Hoćeš li ___ u subotu? Čistimo plažu."',
          options: ['doći', 'dođeš', 'došao', 'dođi'],
          correct: 0,
          hint: 'After hoćeš li comes the dictionary form.',
          explanation: 'Hoćeš li doći? — an invitation.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moj brat ___ u skloništu za životinje." (volunteers)',
        options: ['volontira', 'volontiram', 'volontiraju', 'volontirati'],
        correct: 0,
        explanation: 'brat is on, so volontira.',
      },
      {
        q: 'Complete: "Ana pomaže ___." (her neighbour — susjeda)',
        options: ['susjeda', 'susjedu', 'susjedi', 'susjedom'],
        correct: 2,
        explanation: 'pomagati takes the dative: susjeda → susjedi.',
      },
      {
        q: 'What is a "pučka kuhinja"?',
        options: [
          'a cookery school',
          'a soup kitchen',
          'a restaurant for tourists',
          'a home kitchen',
        ],
        correct: 1,
        explanation: 'A pučka kuhinja serves free meals to people in need: a soup kitchen.',
      },
      {
        q: 'Complete: "Kad bih imao vremena, ___ svaki tjedan."',
        options: ['volontirao bih', 'volontiram', 'volontirao sam', 'volontirat ću'],
        correct: 0,
        explanation: 'An imagined condition takes a conditional result: volontirao bih.',
      },
      {
        q: 'Which sentence describes a finished, counted job?',
        options: [
          'Svaki tjedan skupljamo odjeću.',
          'Volontiram u udruzi.',
          'Darujem krv dvaput godišnje.',
          'Jučer smo skupili sto kilograma hrane.',
        ],
        correct: 3,
        explanation: 'skupili is perfective and the amount is counted: a finished job.',
      },
      {
        q: 'Complete: "Volontiranje ___ daje puno zadovoljstva." (to me)',
        options: ['me', 'mi', 'ja', 'moj'],
        correct: 1,
        explanation: '"To me" is the short dative mi.',
      },
    ],
    vocab: [
      ['volontirati', 'to volunteer', 'Volontiram u udruzi.'],
      ['volonter', 'volunteer (man)', 'On je volonter u skloništu.'],
      ['volonterka', 'volunteer (woman)', 'Ana je volonterka.'],
      ['udruga', 'association, non-profit', 'Radim u udruzi za zaštitu životinja.'],
      ['humanitarna akcija', 'charity drive', 'Skupljamo hranu za humanitarnu akciju.'],
      ['pomagati', 'to help', 'Pomažemo ljudima u potrebi.'],
      ['skupljati', 'to collect', 'Skupljamo odjeću i igračke.'],
      ['darivati krv', 'to give blood', 'Darujem krv dvaput godišnje.'],
      ['sklonište za životinje', 'animal shelter', 'Šetam pse u skloništu za životinje.'],
      ['prijaviti se', 'to sign up', 'Prijavio sam se kao volonter.'],
    ],
  },

  'agreeing-disagreeing': {
    worked: [
      {
        title: 'Agreeing Politely',
        problem: 'Reci gospodinu: "I agree with you, that is a good idea."',
        en: 'I agree with you, that is a good idea.',
        steps: [
          {
            label: 'The verb',
            text: 'To agree is slagati se: slažem se, with se in second place.',
          },
          {
            label: 'With whom?',
            text: 'A gentleman you do not know: the polite s Vama.',
          },
          {
            label: 'The reason',
            text: 'That is a good idea: to je dobra ideja.',
          },
        ],
        answer: 'Slažem se s Vama, to je dobra ideja.',
      },
      {
        title: 'Disagreeing Softly',
        problem: 'Reci prijateljici (a woman speaking): "I understand, but I would not say so."',
        en: 'I understand, but I would not say so.',
        steps: [
          {
            label: 'Grant a point first',
            text: 'Razumijem, ali…',
          },
          {
            label: 'Soften with the conditional',
            text: 'ne + bih + the participle of reći.',
          },
          {
            label: 'Agreement',
            text: 'A woman speaking: rekla.',
          },
        ],
        answer: 'Razumijem, ali ne bih rekla.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ se s tobom."',
          options: ['Slažem', 'Slažu', 'Slagati', 'Složim'],
          correct: 0,
          hint: 'The ja form of slagati se.',
          explanation: 'Slažem se s tobom.',
        },
        {
          q: 'Which phrase is quick agreement?',
          options: ['Ne znam baš.', 'Tako je.', 'Ovisi.', 'Ne bih rekao.'],
          correct: 1,
          hint: 'It literally means "so it is".',
          explanation: 'Tako je — that is right.',
        },
        {
          q: 'Which one means "I am not sure" (a man)?',
          options: ['Nisam sigurna.', 'Nisam siguran.', 'Nije siguran.', 'Nisi siguran.'],
          correct: 1,
          hint: 'The word agrees with the speaker, and he is a man.',
          explanation: 'Nisam siguran — the masculine form.',
        },
        {
          q: 'Complete: "S jedne strane, more je lijepo. ___, skupo je."',
          options: ['S drugom stranom', 'S druge strane', 'S drugu stranu', 'Sa druga strana'],
          correct: 1,
          hint: 'The same case as s jedne strane.',
          explanation: 's druge strane — on the other hand.',
        },
        {
          type: 'type',
          q: 'Ne ____ se s tobom. (slagati se — ja)',
          answer: 'slažem',
          hint: 'In the present of slagati, g changes to ž.',
          explanation: 'Ne slažem se — I disagree.',
        },
        {
          type: 'type',
          q: 'U ____ si, to je točno. (you are right)',
          answer: 'pravu',
          hint: 'The phrase is u + the locative of pravo.',
          explanation: 'U pravu si — you are right.',
        },
        {
          type: 'type',
          q: 'Po mom ____, to je preskupo. (opinion)',
          answer: 'mišljenju',
          hint: 'po takes the locative; the word is mišljenje.',
          explanation: 'Po mom mišljenju — in my opinion.',
        },
        {
          type: 'type',
          q: 'Što ____ o tome? (you, polite)',
          answer: 'mislite',
          hint: 'misliti in the Vi form.',
          explanation: 'Što mislite o tome?',
        },
        {
          q: 'Which question is correct?',
          options: [
            'Slažete se li s tim?',
            'Slažete li se s tim?',
            'Se slažete li s tim?',
            'Li se slažete s tim?',
          ],
          correct: 1,
          hint: 'li comes straight after the verb.',
          explanation: 'Slažete li se s tim? — verb, li, se.',
        },
        {
          q: 'A woman softens her disagreement:',
          options: [
            'Ne bih se složila.',
            'Ne bih se složio.',
            'Ne bi se složila.',
            'Ne bih složila se.',
          ],
          correct: 0,
          hint: 'The ja form of the auxiliary, the feminine participle, and se straight after the auxiliary.',
          explanation: 'ne bih se složila — bih, then se, then the participle.',
        },
        {
          q: 'What does "Ovisi" mean?',
          options: ['It is obvious.', 'It depends.', 'It is over.', 'I disagree.'],
          correct: 1,
          hint: 'You say it when the answer changes with the situation.',
          explanation: 'Ovisi — it depends.',
        },
        {
          q: 'Which phrase adds another point?',
          options: ['Osim toga', 'S jedne strane', 'Ne bih rekao', 'Tako je'],
          correct: 0,
          hint: 'It means "besides that".',
          explanation: 'Osim toga, … — besides that, …',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ne slažem ___ s Vama."',
        options: ['sam', 'se', 'si', 'ste'],
        correct: 1,
        explanation: 'slagati se keeps its se: Ne slažem se s Vama.',
      },
      {
        q: 'Which means "That is not true"?',
        options: ['Tako je.', 'Upravo tako.', 'To nije točno.', 'Točno.'],
        correct: 2,
        explanation: 'To nije točno. The others all agree.',
      },
      {
        q: 'Which sentence means "You are right" (to a friend)?',
        options: ['Imaš pravo.', 'Ti si pravo.', 'Imaš u pravu.', 'Si u pravu.'],
        correct: 0,
        explanation: 'Imaš pravo (or U pravu si). The others mix the two phrases.',
      },
      {
        q: 'A man softens his answer: "I would not say so."',
        options: ['Ne bih rekla.', 'Ne bi rekao.', 'Ne bih rekao.', 'Nisam rekao.'],
        correct: 2,
        explanation:
          'For ja: bih, and a man says rekao. Ne bi rekao is about someone else, and nisam rekao means "I did not say".',
      },
      {
        q: 'What does "Djelomično se slažem" mean?',
        options: [
          'I completely disagree.',
          'I partly agree.',
          'I agree completely.',
          'I do not know.',
        ],
        correct: 1,
        explanation: 'djelomično — partly.',
      },
      {
        q: 'Which question asks a group for its opinion?',
        options: ['Što misliš?', 'Što mislim?', 'Što misle?', 'Što mislite?'],
        correct: 3,
        explanation: 'Što mislite? is the vi form. Što misle? asks what THEY think.',
      },
    ],
    vocab: [
      ['slagati se', 'to agree', 'Slažem se s tobom.'],
      ['točno', 'exactly; correct', 'To je točno.'],
      ['mišljenje', 'opinion', 'Po mom mišljenju, to je dobro.'],
      ['siguran', 'sure', 'Nisam siguran.'],
      ['ovisiti', 'to depend', 'Ovisi o cijeni.'],
      ['strana', 'side', 'S jedne strane, to je praktično.'],
      ['ideja', 'idea', 'To je dobra ideja.'],
      ['pravo', 'right', 'Imaš pravo.'],
      ['razumjeti', 'to understand', 'Razumijem te, ali imam drugo mišljenje.'],
    ],
  },

  'dative-adjectives': {
    worked: [
      {
        title: 'Three Words, One Case',
        problem: 'Reci: "I am writing to my old friend." (pisati, svoj, star, prijatelj)',
        en: 'I am writing to my old friend.',
        steps: [
          {
            label: 'The case',
            text: 'Writing TO someone: the person goes in the dative, prijatelju.',
          },
          {
            label: 'The adjective',
            text: 'Masculine dative singular: star → starom.',
          },
          {
            label: 'The possessive',
            text: 'The owner is the subject, so svoj, in the dative: svojem (or svom).',
          },
        ],
        answer: 'Pišem svojem starom prijatelju.',
      },
      {
        title: 'A Feminine Noun',
        problem: 'Reci (a woman): "I thanked that kind lady." (zahvaliti, taj, ljubazan, gospođa)',
        en: 'I thanked that kind lady.',
        steps: [
          {
            label: 'The case',
            text: 'zahvaliti takes the dative: gospođa → gospođi.',
          },
          {
            label: 'The words in front',
            text: 'Feminine dative: -oj on each of them — toj ljubaznoj (the fleeting a drops).',
          },
          {
            label: 'The verb',
            text: 'A woman speaking, in the past: zahvalila sam.',
          },
        ],
        answer: 'Zahvalila sam toj ljubaznoj gospođi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Dajem knjigu ___ sestri."',
          options: ['mlada', 'mladu', 'mladoj', 'mladom'],
          correct: 2,
          hint: 'sestri is feminine dative.',
          explanation: 'Feminine dative: -oj.',
        },
        {
          q: 'Complete: "Pomažem ___ susjedu."',
          options: ['starom', 'starog', 'stari', 'starim'],
          correct: 0,
          hint: 'susjedu is masculine dative singular.',
          explanation: 'Masculine dative: -om.',
        },
        {
          q: 'Complete: "Pišem ___ prijateljima."',
          options: ['svom', 'svojoj', 'svojim', 'svoje'],
          correct: 2,
          hint: 'prijateljima is plural.',
          explanation: 'Plural dative: -im.',
        },
        {
          q: 'Complete: "Ne vjerujem ___ čovjeku."',
          options: ['taj', 'tog', 'tim', 'tom'],
          correct: 3,
          hint: 'čovjeku is singular, masculine, dative.',
          explanation: 'taj → tom in the masculine dative.',
        },
        {
          type: 'type',
          q: 'Kupio sam cvijeće ____ majci. (svoj)',
          answer: 'svojoj',
          hint: 'Feminine dative: -oj.',
          explanation: 'svojoj majci — my own mother.',
        },
        {
          type: 'type',
          q: 'Pišem pismo ____ prijatelju. (moj)',
          answer: 'mojem',
          accept: ['mom', 'mome'],
          hint: 'Masculine dative; the full or the short form.',
          explanation: 'mojem (or mom, mome) prijatelju — all three are standard.',
        },
        {
          type: 'type',
          q: 'Zahvalila sam ____ ženi. (ljubazan)',
          answer: 'ljubaznoj',
          hint: 'Drop the fleeting a and add the feminine dative ending.',
          explanation: 'ljubazan → ljubazn- → ljubaznoj.',
        },
        {
          type: 'type',
          q: 'Pokazali smo grad ____ gostima. (naš)',
          answer: 'našim',
          hint: 'Plural dative: -im.',
          explanation: 'našim gostima.',
        },
        {
          type: 'type',
          q: 'Idem prema ____ trgu. (glavni)',
          answer: 'glavnom',
          hint: 'prema takes the dative, and trg is masculine.',
          explanation: 'prema glavnom trgu.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Dao sam ključ tom novom kolegi.',
            'Dao sam ključ toj novoj kolegi.',
            'Dao sam ključ tim novim kolegi.',
            'Dao sam ključ taj novi kolegi.',
          ],
          correct: 0,
          hint: 'kolega ends in -a but is a man.',
          explanation: 'kolega is masculine, so the words in front take -om: tom novom kolegi.',
        },
        {
          q: 'Complete: "Ne vjerujem ___ mehaničaru."',
          options: ['lošom', 'lošem', 'loši', 'lošeg'],
          correct: 1,
          hint: 'š is a soft consonant.',
          explanation: 'After a soft consonant the masculine dative is -em: lošem.',
        },
        {
          q: 'How do "u mom stanu" and "mom prijatelju" differ?',
          options: [
            'They do not — both are dative',
            'mom has two different endings',
            'u mom stanu is locative, mom prijatelju is dative',
            'Both are locative',
          ],
          correct: 2,
          hint: 'The ending is the same; the job is not.',
          explanation: 'u + locative is a place; the dative is "to whom".',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kupila sam igračku ___ djetetu."',
        options: ['malo', 'malog', 'malom', 'malim'],
        correct: 2,
        explanation: 'djetetu is neuter dative singular: malom.',
      },
      {
        q: 'Complete: "Pišem ___ baki." (my own)',
        options: ['svojoj', 'svoju', 'svoja', 'svojom'],
        correct: 0,
        explanation: 'baki is feminine dative: svojoj. svoju is accusative, svojom instrumental.',
      },
      {
        q: 'Complete: "Vjerujem ___ liječniku."',
        options: ['dobrog', 'dobri', 'dobrim', 'dobrom'],
        correct: 3,
        explanation: 'liječniku is masculine dative singular: dobrom.',
      },
      {
        q: 'Complete: "Zahvalio sam ___ ljudima."',
        options: ['tom', 'tim', 'toj', 'te'],
        correct: 1,
        explanation: 'ljudima is plural: tim.',
      },
      {
        q: 'Which ending do feminine adjectives take in the dative?',
        options: ['-om', '-oj', '-im', '-u'],
        correct: 1,
        explanation: 'Always -oj: toj ljubaznoj ženi.',
      },
      {
        q: 'Complete: "Dao sam ključ ___ susjedu."',
        options: ['našem', 'našeg', 'našim', 'naš'],
        correct: 0,
        explanation: 'susjedu is masculine dative singular: našem.',
      },
    ],
    vocab: [
      ['zahvaliti', 'to thank', 'Zahvalila sam toj ženi.'],
      ['vjerovati', 'to trust, to believe', 'Vjerujem svom liječniku.'],
      ['poklon', 'present, gift', 'Dajem poklon bratu.'],
      ['gost', 'guest', 'Pokazali smo grad našim gostima.'],
      ['susjed', 'neighbour', 'Pomažem starom susjedu.'],
      ['ljubazan', 'kind', 'Ona je ljubazna žena.'],
      ['prema', 'towards', 'Idem prema glavnom trgu.'],
      ['cvijeće', 'flowers', 'Kupio sam cvijeće majci.'],
      ['kolega', 'colleague', 'Odgovorio sam novom kolegi.'],
    ],
  },
};
