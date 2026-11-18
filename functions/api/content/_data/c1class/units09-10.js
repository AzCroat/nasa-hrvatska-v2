// ─── C1 lessons in class order — Units 9–10 (lessons 41–50) ──────────────────
// Same shape and rules as c1class/units01-02.js:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Existing typed items come BEFORE anything that prints their answer, and the
// texts avoid the exact forms those items ask for (which is why the particles
// zar, naime, baš and valjda are absent from the discourse-particles dialogue,
// and why the accent dialogue has no "grad", "luk" or "sam").
// Where Croatian has two standard variants (nov / novoga, bar / barem, navesci,
// free word order) every one is accepted and none is marked wrong.
// accent-prosody: stress cannot be typed, so it is tested by tf, sort, match and
// listen and described in words; capitals in a word (restoRAN) show where a
// speaker put the stress.

export const CLASS_C1_U09_10 = {
  // ══ UNIT 9 ═════════════════════════════════════════════════════════════════

  // ── Nov or novi? Indefinite and definite adjectives ────────────────────────
  'indefinite-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'Iskaz svjedoka',
      lines: [
        {
          who: 'Istražiteljica',
          hr: 'Gospodine Perkoviću, molim Vas da mi što točnije opišete čovjeka kojega ste sinoć vidjeli pred draguljarnicom: kakav je bio?',
          en: 'Mr. Perković, please describe to me as precisely as you can the man you saw outside the jewelry store last night: what was he like?',
        },
        {
          who: 'Svjedok',
          hr: 'Bio je visok i mršav, rekao bih i pogrbljen, a kaput mu je bio taman, vjerojatno tamnoplav — premda pod onakvom rasvjetom ne bih smio jamčiti za boju.',
          en: 'He was tall and thin, I would even say stooped, and his coat was dark, probably dark blue — although under lighting like that I would not dare vouch for the color.',
        },
        {
          who: 'Istražiteljica',
          hr: 'Na snimci nadzorne kamere vide se dvojica. Koji je od njih razbio izlog: visoki ili niski?',
          en: 'On the security camera footage two men can be seen. Which of them smashed the display window: the tall one or the short one?',
        },
        {
          who: 'Svjedok',
          hr: 'Visoki. Niski, krupan čovjek u kožnoj jakni, cijelo je vrijeme stajao kraj automobila i pušio; činio mi se uznemiren, jer se neprestano osvrtao.',
          en: 'The tall one. The short one, a heavyset man in a leather jacket, stood by the car the whole time, smoking; he seemed agitated to me, because he kept looking around.',
        },
        {
          who: 'Istražiteljica',
          hr: 'A automobil? Je li Vam se činio nov ili je to bilo kakvo rabljeno vozilo?',
          en: 'And the car? Did it seem new to you, or was it some kind of used vehicle?',
        },
        {
          who: 'Svjedok',
          hr: 'Nov nije bio, to je sigurno. Bio je to kombi, bijel, s ulupljenim prednjim blatobranom, kakvih u našoj ulici inače nema; zapamtio sam ga upravo po tom blatobranu.',
          en: 'It was not new, that much is certain. It was a van, white, with a dented front fender, of a kind you do not otherwise see on our street; I remembered it precisely because of that fender.',
        },
        {
          who: 'Istražiteljica',
          hr: 'Dopustite da pročitam što sam zapisala: „Počinitelj je muškarac visoka rasta i mršave građe, odjeven u taman kaput; suučesnik je niži i krupan.” Slažete li se?',
          en: 'Allow me to read what I have written down: “The perpetrator is a man of tall stature and thin build, dressed in a dark coat; the accomplice is shorter and heavyset.” Do you agree?',
        },
        {
          who: 'Svjedok',
          hr: 'Slažem se, samo bih dodao da je visoki šepao na lijevu nogu. Ne znam je li bio ozlijeđen ili je inače hrom, ali hod mu je bio neobičan.',
          en: 'I agree; I would only add that the tall one was limping on his left leg. I do not know whether he was injured or is lame anyway, but his gait was unusual.',
        },
        {
          who: 'Istražiteljica',
          hr: 'To je dragocjen podatak: u evidenciji, naime, imamo jednoga provalnika koji šepa. Biste li ga prepoznali na fotografiji?',
          en: 'That is a valuable detail: we do, you see, have one burglar on file who limps. Would you recognize him in a photograph?',
        },
        {
          who: 'Svjedok',
          hr: 'Mislim da bih. Lice mu je bilo duguljasto i blijedo, a pogled — kako da kažem — hladan.',
          en: 'I think I would. His face was long and pale, and his gaze — how shall I put it — cold.',
        },
        {
          who: 'Istražiteljica',
          hr: 'Hvala Vam. Rijetko je koji svjedok ovako pouzdan: većina ljudi zapamti samo da je netko bio „onaj visoki” ili „onaj debeli”.',
          en: 'Thank you. Rarely is a witness this reliable: most people remember only that somebody was “that tall one” or “that fat one.”',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which detail did the witness add at the end that made the investigator think of a man already on file?',
          options: [
            'The tall man had a scar across his pale face',
            'The tall man was limping on his left leg',
            'The short man was wearing a leather jacket',
            'The van had a dented front fender',
          ],
          correct: 1,
          hint: 'It was something about the way the taller man moved.',
          explanation:
            'He added that the tall one limped on his left leg (šepao je na lijevu nogu) — and the police have a burglar on file who limps. The jacket and the fender are real details too, but they did not point to a known person.',
        },
        {
          q: 'Asked "kakav je bio?", the witness says "Bio je visok i mršav." Asked "Koji je od njih razbio izlog?", he says "Visoki." Why does the form change?',
          options: [
            'Because "visoki" is a plural: by then two men are being discussed',
            'Because the short form is used only in the past tense, with "bio"',
            'Because "kakav?" asks for a description (indefinite form), while "koji?" asks him to pick one of two known men (definite form)',
            'Because the long form is more polite when one speaks to an official',
          ],
          correct: 2,
          hint: 'In the first answer the man is still unknown and is being described. What has changed by the second question?',
          explanation:
            'The indefinite form describes: what kind of man — visok, mršav. Once two particular men are on the table, the adjective no longer describes but identifies — which one: visoki, the tall one. That is also why the definite form can stand alone, like a noun.',
        },
        {
          type: 'type',
          q: 'The investigator asks about the second man: Kakav je bio suučesnik? — ____ i krupan. (short in height)',
          answer: 'Nizak',
          hint: 'A description, so the describing form — and in that form this adjective has a fleeting a.',
          explanation:
            'Nizak i krupan. — "kakav?" asks for a description, so the indefinite form: nizak, with the fleeting a that disappears in niski, niska, nisko.',
        },
        {
          type: 'transform',
          q: 'Turn the identifying phrase into a full sentence that describes the man. Begin with "Taj je čovjek…".',
          from: 'taj nervozni čovjek',
          answer: 'Taj je čovjek nervozan.',
          accept: ['Taj čovjek je nervozan.'],
          hint: 'In the predicate after "biti" the adjective describes: it loses its final -i, and then it needs a vowel between its last two consonants.',
          explanation:
            'Taj je čovjek nervozan. — before the noun, with "taj", the adjective identifies a known man and is definite (nervozni); as a predicate it describes him and is indefinite (nervozan).',
        },
        {
          type: 'type',
          q: 'Write it as the investigator would in her formal record, with the short, noun-like genitive: muškarac visoka rasta i ____ lica. (pale — blijed)',
          answer: 'blijeda',
          hint: 'In this bookish genitive the adjective takes the very ending that the neuter noun beside it has.',
          explanation:
            'muškarac visoka rasta i blijeda lica — the genitive of quality. The short forms (visoka, blijeda) follow the noun declension and belong to high written style; visokoga rasta i blijedoga lica is equally standard and is what one says in everyday speech.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Čovjek dobra srca" and "čovjek dobroga srca" are both correct Croatian; the first simply sounds more literary.',
        answer: true,
        hint: 'Each phrase follows one of the two adjective declensions. Has the standard language abolished either of them?',
        explanation:
          'True. dobra is the short, noun-like genitive of the indefinite declension; dobroga is the long genitive of the definite one. Both are standard. The short oblique forms survive mainly in fixed phrases and in elevated writing, which is why the first sounds bookish.',
      },
      9,
      {
        type: 'sort',
        q: 'Does the adjective describe, or does it pick out one particular thing?',
        groups: ['Describes — what kind?', 'Identifies — which one?'],
        items: [
          { hr: 'Kupio sam nov rječnik.', group: 0 },
          { hr: 'Novi rječnik stoji na polici, a stari sam darovao.', group: 1 },
          { hr: 'Dan je bio vedar i topao.', group: 0 },
          { hr: 'Uzmi crveni kišobran, ne plavi.', group: 1 },
          { hr: 'Susjed je vrlo ljubazan čovjek.', group: 0 },
          { hr: 'Koji je vlak tvoj? — Brzi.', group: 1 },
        ],
        explanation:
          'nov rječnik, vedar i topao, ljubazan čovjek say what something is like — the indefinite form. Novi… a stari, crveni… ne plavi, Brzi choose one out of a known set — the definite form, which can also stand without its noun.',
      },
      10,
      {
        type: 'match',
        q: 'Fixed phrases keep the short genitive. Match each phrase to its meaning.',
        pairs: [
          ['učiniti što laka srca', 'to do something without a second thought'],
          ['biti na dobru glasu', 'to have a good reputation'],
          ['biti kratka daha', 'to run out of steam quickly'],
          ['čovjek široka srca', 'a generous person'],
          ['usred bijela dana', 'in broad daylight'],
        ],
        explanation:
          'laka, dobru, kratka, široka, bijela are short (indefinite) case forms: genitives in -a and a locative in -u, exactly like nouns. In free combinations today one mostly says lakoga, dobrome, bijeloga; in these set phrases the short form is the normal one.',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "The new neighbor is quiet and polite."',
        words: ['Novi', 'susjed', 'je', 'tih', 'i', 'pristojan.'],
        accept: [
          'Novi je susjed tih i pristojan.',
          'Novi susjed tih je i pristojan.',
          'Tih je i pristojan novi susjed.',
          'Tih i pristojan je novi susjed.',
        ],
        explanation:
          'Novi susjed je tih i pristojan. — Novi identifies which neighbor (the one who has just moved in): definite. tih and pristojan describe him in the predicate: indefinite. The clitic je may also split the opening phrase: Novi je susjed…',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("Marko’s brother has lived in Zadar for years.")',
        words: ['Markovi', 'brat', 'već', 'godinama', 'živi', 'u', 'Zadru.'],
        wrong: 0,
        answer: 'Markov',
        hint: 'Adjectives that say whose something is, made from a name, do not have both nominative forms.',
        explanation:
          'Markov brat… — possessive adjectives in -ov, -ev and -in have only the indefinite nominative singular: Markov, Matejev, majčin. Markovi exists only as a plural (Markovi prijatelji), so it cannot stand with brat.',
      },
      12,
      {
        type: 'transform',
        q: 'Rewrite the bookish short genitive in the everyday long form. Change nothing else.',
        from: 'Bio je to čovjek blaga pogleda.',
        answer: 'Bio je to čovjek blagog pogleda.',
        accept: ['Bio je to čovjek blagoga pogleda.'],
        hint: 'Only the adjective changes: give it the pronoun-like genitive ending, with or without its optional final vowel.',
        explanation:
          'čovjek blagog(a) pogleda — the definite declension has the pronoun-like endings -og(a), -om(e/u). The meaning is the same; only the register drops from literary to neutral.',
      },
      5,
      {
        type: 'listen',
        audio: 'Kakav je novi ravnatelj? — Strog, ali pravedan; stari je bio popustljiviji.',
        q: 'What do you learn about the two principals?',
        options: [
          'Both of them are equally strict',
          'The old one was strict, and the new one is more lenient',
          'The new one is strict but fair; the previous one was more lenient',
          'The new one is old, strict and unfair',
        ],
        correct: 2,
        explanation:
          'Kakav je? asks for a description, and the answer uses indefinite forms: strog, pravedan. novi ravnatelj and stari (ravnatelj) identify which of the two men is meant — definite forms; popustljiviji is a comparative, which has only the definite form.',
      },
      {
        type: 'dictate',
        audio: 'Otišao je u bijeli svijet teška srca.',
        answer: 'Otišao je u bijeli svijet teška srca.',
        hint: 'Seven words: "He went off into the wide world with a heavy heart."',
        explanation:
          'u bijeli svijet is a fixed phrase with the definite accusative; teška srca is the short genitive of the indefinite declension, used as an adverbial of manner (compare laka srca).',
      },
    ],
  },

  // ── Blago tebi! The exclamatory and emphatic dative ────────────────────────
  'exclamatory-dative': {
    text: {
      kind: 'dialogue',
      title: 'Djedova kuća',
      lines: [
        {
          who: 'Teta Ruža',
          hr: 'Blago vama mladima, koji u svemu vidite samo kvadrate i cijenu! Ja sam u toj kući odrasla, a ti bi je, Davore, prodao prvomu tko pokuca.',
          en: 'Lucky you young people, who see nothing in anything but square meters and a price! I grew up in that house, and you, Davor, would sell it to the first person who knocks.',
        },
        {
          who: 'Davor',
          hr: 'Teta, majke mi, nisam ja nikomu ništa obećao. Agent je samo došao procijeniti kuću, jer krov prokišnjava, a nitko od nas nema novca za popravak.',
          en: 'Aunt Ruža, I swear on my mother, I have not promised anything to anyone. The agent only came to appraise the house, because the roof leaks and none of us has the money for repairs.',
        },
        {
          who: 'Teta Ruža',
          hr: 'Jao nama ako smo dotle došli da nam djedovinu procjenjuju stranci! Tvoj je djed, pokoj mu duši, tu kuću zidao deset godina, kamen po kamen.',
          en: 'Woe to us if we have come to the point where strangers appraise our family home! Your grandfather, may his soul rest in peace, spent ten years building that house, stone by stone.',
        },
        {
          who: 'Davor',
          hr: 'Znam, i čast mu i slava na tome. Ali djedu je bilo lako: imao je dva brata zidara i zdrava leđa, a ja imam kredit i dvoje male djece.',
          en: 'I know, and all honor and glory to him for it. But it was easy for Grandpa: he had two bricklayer brothers and a strong back, and I have a loan and two small children.',
        },
        {
          who: 'Teta Ruža',
          hr: 'Teško onomu tko se odrekne ognjišta, govorila je moja pokojna majka. Tako mi svega, radije ću sama plaćati krovopokrivača nego gledati kako se kuća prodaje.',
          en: 'Woe to him who renounces his hearth, my late mother used to say. I swear by all that is dear to me, I would rather pay the roofer myself than watch the house being sold.',
        },
        {
          who: 'Davor',
          hr: 'Zdravlja ti, teta, ne govori tako: od svoje mirovine ne bi platila ni skelu. Nitko tu kuću ne želi prodati iz obijesti, nego iz nužde.',
          en: 'For goodness’ sake, Aunt Ruža, do not talk like that: out of your pension you could not even pay for the scaffolding. Nobody wants to sell that house on a whim, but out of necessity.',
        },
        {
          who: 'Teta Ruža',
          hr: 'A tvoja sestra? Lako je njoj iz Beča dijeliti savjete — blago onomu tko je daleko pa ne mora gledati kako žbuka otpada.',
          en: 'And your sister? It is easy for her to hand out advice from Vienna — lucky is the one who is far away and does not have to watch the plaster falling off.',
        },
        {
          who: 'Davor',
          hr: 'Upravo me ona nagovara da kuću zadržimo. Kaže da bi svaki mjesec slala koliko može, samo da se krov popravi prije zime.',
          en: 'She is the very one urging me to keep the house. She says she would send as much as she can every month, just so the roof gets repaired before winter.',
        },
        {
          who: 'Teta Ruža',
          hr: 'Onda joj svaka čast! Eto, vidiš da se može kad se hoće.',
          en: 'Then all credit to her! There, you see that it can be done when there is a will.',
        },
        {
          who: 'Davor',
          hr: 'Može se, ali ne preko noći. Života mi, do proljeća će krov biti nov — a ti mi zauzvrat obećaj da agentu više nećeš zalupiti vrata pred nosom.',
          en: 'It can, but not overnight. I swear on my life, by spring the roof will be new — and you promise me in return that you will not slam the door in the agent’s face again.',
        },
        {
          who: 'Teta Ruža',
          hr: 'Obećavam, ako dođe po kavu, a ne po ključeve. Živjela kuća, i laka zemlja onomu tko ju je sagradio!',
          en: 'I promise, if he comes for coffee and not for the keys. Long live the house, and may the earth lie lightly on the one who built it!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Davor’s sister in Vienna actually want?',
          options: [
            'To sell the house quickly and divide the money',
            'To keep the house, and to send money every month so the roof can be repaired',
            'To move back from Vienna and live in the house herself',
            'To leave the whole decision to the real estate agent',
          ],
          correct: 1,
          hint: 'Aunt Ruža assumed the sister was only handing out advice from afar. Davor corrected her.',
          explanation:
            'The sister is urging Davor to keep the house (nagovara me da kuću zadržimo) and would send what she can every month — which is why Aunt Ruža’s mockery turns into praise: "Onda joj svaka čast!".',
        },
        {
          q: 'Davor swears "Majke mi…", but Aunt Ruža laments "Jao nama…". Why a short pronoun in the first and a full one in the second?',
          options: [
            'Because short pronouns belong to younger speakers and full ones to older speakers',
            'Because "nama" is an instrumental, which "jao" requires',
            'Because "mi" here is the nominative "we", the subject of the oath',
            'Because an oath is built on a genitive plus an unstressed dative naming who swears, while after jao, blago, teško or lako the dative carries the stress of the whole exclamation',
          ],
          correct: 3,
          hint: 'Say both aloud. In which of them does the pronoun bear the main stress of the exclamation?',
          explanation:
            'In the oath the weight lies on what is sworn by (majke, života — genitive), and the dative clitic mi merely leans on it. In Jao nama! the person is the whole point, so the full, stressed dative is needed; a clitic could not carry the exclamation.',
        },
        {
          type: 'type',
          q: 'Aunt Ruža thinks of her brother, who has moved to the coast: Blago ____, on sad svaki dan gleda more! (him — the full form)',
          answer: 'njemu',
          hint: 'After "blago" the person stands in the case that answers "komu?", and in the stressed form, because the exclamation rests on it.',
          explanation:
            'Blago njemu! — the exclamatory dative. The short form mu would be impossible here: with no verb in the exclamation, the pronoun is the stressed word.',
        },
        {
          type: 'type',
          q: 'Aunt Ruža pleads with her nephew: Tako ____ Boga, nemoj prodati kuću! (the appeal is addressed to him, one person, informally)',
          answer: 'ti',
          hint: 'In an appeal the unstressed dative names the person who is being implored, not the speaker.',
          explanation:
            'Tako ti Boga! — when the speaker swears, the clitic is mi (Tako mi svega); when the listener is implored by what is sacred to him, it becomes the clitic of the second person. It is always the unstressed form.',
        },
        {
          type: 'transform',
          q: 'Turn the statement into an exclamation with no verb of its own: build it on "teško" and a dative, and keep the relative clause.',
          from: 'Loše će proći oni koji prodaju djedovinu.',
          answer: 'Teško onima koji prodaju djedovinu!',
          accept: [
            'Teško onima koji prodaju djedovinu.',
            'Teško onima što prodaju djedovinu!',
            'Teško onima što prodaju djedovinu.',
          ],
          hint: 'The people who will fare badly become the receivers of the feeling: keep the plural and ask "komu?".',
          explanation:
            'Teško onima koji prodaju djedovinu! — the subject oni turns into the dative plural, and the verb "će proći" disappears: the exclamatory dative needs no verb in the main clause.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In the toast "Živio mladi par!" the words "mladi par" are in the dative, because the couple receives the good wishes.',
        answer: false,
        hint: 'Replace the couple with a pronoun: which form of "on" would you put after "Živio"?',
        explanation:
          'False. mladi par is a nominative — the subject of a wish expressed by the participle (may the young couple live long), which is why the participle agrees with it: Živio par! Živjela kuća! Živjeli mladenci! A dative appears only where glory, thanks or a feeling is directed at someone.',
      },
      9,
      {
        type: 'sort',
        q: 'What is each exclamation built on?',
        groups: [
          'A feeling about someone: word + full dative',
          'An oath: genitive + short dative',
          'A wish with a nominative subject',
        ],
        items: [
          { hr: 'Lako njima!', group: 0 },
          { hr: 'Života mi!', group: 1 },
          { hr: 'Živio slavljenik!', group: 2 },
          { hr: 'Teško nama!', group: 0 },
          { hr: 'Tako ti svega!', group: 1 },
          { hr: 'Živjele mladenke!', group: 2 },
          { hr: 'Blago njoj!', group: 0 },
        ],
        explanation:
          'After lako, teško and blago comes the stressed dative of the person concerned. An oath names what is sworn by in the genitive (života, svega) and adds a dative clitic. Živio / Živjele agree with a nominative subject and contain no dative at all.',
      },
      10,
      {
        type: 'match',
        q: 'Match each exclamation to the situation in which it is said.',
        pairs: [
          ['Laka mu zemlja!', 'speaking of a man who has died'],
          ['Svaka ti čast!', 'praising someone for what they have done'],
          ['Blago njoj!', 'envying a woman her good fortune'],
          ['Teško njima!', 'pitying people who are in for trouble'],
          ['Zdravlja ti!', 'pressing a friend to do what you ask'],
        ],
        explanation:
          'All five turn on a dative: the dead man the earth should lie lightly on (mu), the person honor goes to (ti), the woman who is lucky (njoj), the people who will suffer (njima), and the friend implored by his own health (ti).',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "I swear on my life, I did not know that."',
        words: ['Života', 'mi,', 'nisam', 'to', 'znao.'],
        accept: ['Života mi, to nisam znao.', 'Života mi, nisam znao to.'],
        explanation:
          'Života mi, nisam to znao. — the oath is a block of its own: the genitive života with the clitic mi leaning on it. The clitic cannot leave that block, and nothing can come between the two words.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Lucky the parents who have children like that!")',
        words: ['Blago', 'roditelje', 'koji', 'imaju', 'takvu', 'djecu!'],
        wrong: 1,
        answer: 'roditeljima',
        hint: 'The lucky ones receive the feeling: ask "komu?" and mind the plural.',
        explanation:
          'Blago roditeljima koji imaju takvu djecu! — blago, like lako, teško and jao, takes the dative of the person the feeling is about. The relative clause that follows is unaffected.',
      },
      4,
      {
        type: 'transform',
        q: 'Turn the statement into an exclamation of envy with no verb in its main part: begin with "Blago" and keep the reason.',
        from: 'Vi ste sretni jer imate vrt.',
        answer: 'Blago vama jer imate vrt!',
        accept: [
          'Blago vama jer imate vrt.',
          'Blago vama što imate vrt!',
          'Blago vama što imate vrt.',
          'Blago vama koji imate vrt!',
          'Blago vama koji imate vrt.',
          'Blago vama, imate vrt!',
        ],
        hint: 'The subject becomes the receiver of the feeling, in the same number; "ste sretni" disappears altogether.',
        explanation:
          'Blago vama jer (što) imate vrt! — vi becomes the dative, and the predicate "ste sretni" is absorbed by blago. The reason may be given with jer, što or a relative clause.',
      },
      {
        type: 'listen',
        audio: 'Lako je vama govoriti; teško onomu tko mora sve platiti iz svojega džepa.',
        q: 'What is the speaker’s point?',
        options: [
          'It is hard for you to talk, and easy for whoever pays',
          'Talking is easy for you; the one who has to pay for everything out of his own pocket has it hard',
          'You speak easily, so you should pay for everything',
          'Whoever talks a lot has to pay for it in the end',
        ],
        correct: 1,
        explanation:
          'Lako je vama… teško onomu tko… — two datives of the person concerned: vama (for you it is easy) and onomu (for the one who must pay it is hard). iz svojega džepa — out of his own pocket.',
      },
      {
        type: 'dictate',
        audio: 'Blago onomu tko rano nađe svoj put.',
        answer: 'Blago onomu tko rano nađe svoj put.',
        hint: 'Seven words: "Lucky is the one who finds his way early."',
        explanation:
          'Blago onomu tko… — the dative of the demonstrative (onomu, also onome) followed by a relative clause with tko: the usual way to make such an exclamation general.',
      },
    ],
  },

  // ── Comparison, advanced ───────────────────────────────────────────────────
  'comparison-advanced': {
    text: {
      kind: 'dialogue',
      title: 'Gost u studiju: kad mladi odlaze od kuće',
      lines: [
        {
          who: 'Voditeljica',
          hr: 'Gospodine Vlahoviću, u Vašoj novoj studiji stoji da se mladi u Hrvatskoj osamostaljuju kasnije nego gotovo igdje drugdje u Europi. Je li stanje doista toliko lošije nego prije deset godina?',
          en: 'Mr. Vlahović, your new study states that young people in Croatia become independent later than almost anywhere else in Europe. Is the situation really that much worse than ten years ago?',
        },
        {
          who: 'Sociolog',
          hr: 'Kudikamo je lošije nego što se obično misli. Što su stanarine više, to mladi dulje ostaju kod roditelja, a stanarine su posljednjih godina rasle neusporedivo brže od plaća.',
          en: 'It is far worse than is usually thought. The higher the rents, the longer young people stay with their parents, and in recent years rents have grown incomparably faster than wages.',
        },
        {
          who: 'Voditeljica',
          hr: 'Slušatelji nam, međutim, pišu da je njihovim roditeljima bilo još teže, a ipak su se selili već s dvadeset godina.',
          en: 'Our listeners, however, write to us that it was even harder for their parents, and yet they moved out as early as age twenty.',
        },
        {
          who: 'Sociolog',
          hr: 'Usporedba je privlačna, ali ne stoji. Za razliku od današnjih dvadesetogodišnjaka, njihovi su roditelji dobivali stalan posao ubrzo nakon škole, a stan je stajao daleko manje godišnjih plaća nego danas.',
          en: 'The comparison is appealing, but it does not hold. Unlike today’s twenty-year-olds, their parents got a permanent job soon after school, and an apartment cost far fewer annual salaries than it does today.',
        },
        {
          who: 'Voditeljica',
          hr: 'Znači li to da je u velikim gradovima teže nego u manjim sredinama?',
          en: 'Does that mean it is harder in the big cities than in smaller communities?',
        },
        {
          who: 'Sociolog',
          hr: 'U pravilu da: što je grad veći, to je jaz između plaće i stanarine dublji. U našem je uzorku najam u obalnim gradovima, mjeren prema primanjima, bio najmanje dvostruko skuplji nego u unutrašnjosti.',
          en: 'As a rule, yes: the bigger the city, the deeper the gap between salary and rent. In our sample, rent in the coastal cities, measured against income, was at least twice as expensive as in the interior.',
        },
        {
          who: 'Voditeljica',
          hr: 'Ima li zemalja koje su, poput nas, kasno počele graditi stanove za najam, pa su ipak sustigle ostale?',
          en: 'Are there countries that, like us, started building rental housing late and nevertheless caught up with the rest?',
        },
        {
          who: 'Sociolog',
          hr: 'Ima, i njihovo je iskustvo poučnije od svake teorije. Ondje gdje općine same grade stanove, najamnine rastu sve sporije, a mladi odlaze od kuće sve ranije.',
          en: 'There are, and their experience is more instructive than any theory. Where municipalities build apartments themselves, rents rise more and more slowly, and young people leave home earlier and earlier.',
        },
        {
          who: 'Voditeljica',
          hr: 'To zvuči jednostavnije nego što jest. Odakle novac?',
          en: 'That sounds simpler than it is. Where does the money come from?',
        },
        {
          who: 'Sociolog',
          hr: 'Novca ima više nego volje. Radije bih, uostalom, vidio jedan dovršen blok općinskih stanova nego još deset strategija — jer je najskuplje od svega ne činiti ništa.',
          en: 'There is more money than will. Besides, I would rather see one finished block of municipal apartments than ten more strategies — because the most expensive thing of all is to do nothing.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why, according to the sociologist, does the comparison with the parents’ generation not hold?',
          options: [
            'Because the parents were more hardworking and less demanding',
            'Because most parents inherited an apartment from their own parents',
            'Because the parents got permanent jobs soon after school, and an apartment cost far fewer annual salaries',
            'Because the parents moved out only after they married',
          ],
          correct: 2,
          hint: 'He named two things the parents had and today’s twenty-year-olds do not: one about work, one about prices.',
          explanation:
            'Za razliku od današnjih dvadesetogodišnjaka, the parents got a stalan posao soon after school, and an apartment cost daleko manje godišnjih plaća nego danas. He does not say they had it easy — only that the two situations are not comparable.',
        },
        {
          q: 'The sociologist says "Kudikamo je lošije nego što se obično misli." Why "nego što", and not "od"?',
          options: [
            'Because "od" can be used only after a superlative',
            'Because "od" needs a noun or pronoun in the genitive after it, and here the second term of the comparison is a whole clause',
            'Because "kudikamo" must always be followed by "nego što"',
            'Because "lošije" is an adverb here, and adverbs are never compared with "od"',
          ],
          correct: 1,
          hint: 'Look at what comes after the word for "than": is it a thing, or a statement with its own verb?',
          explanation:
            'od + genitive compares with a noun or pronoun (brže od plaća). When the comparison is with a clause — se obično misli — only nego is possible, usually as nego što. Adverbs can be compared with od perfectly well (brže od plaća is one), and kudikamo is simply an intensifier.',
        },
        {
          type: 'type',
          q: 'Apply his rule to small towns: Što je grad manji, to su stanarine ____. (lower — nizak)',
          answer: 'niže',
          hint: 'An irregular comparative: the stem drops -ak and its last consonant softens. Make it agree with a feminine plural noun.',
          explanation:
            'Što je grad manji, to su stanarine niže. — nizak → niži (z + j gives ž), here in the feminine plural. Both halves of the što… to… pair contain a comparative.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one with "Što… to…": the more the first happens, the later the second.',
          from: 'Stanarine rastu. Mladi kasnije odlaze od roditelja.',
          answer: 'Što stanarine više rastu, to mladi kasnije odlaze od roditelja.',
          accept: [
            'Što više stanarine rastu, to mladi kasnije odlaze od roditelja.',
            'Što više rastu stanarine, to mladi kasnije odlaze od roditelja.',
            'Što stanarine više rastu, to kasnije mladi odlaze od roditelja.',
            'Što više stanarine rastu, to kasnije mladi odlaze od roditelja.',
            'Što više rastu stanarine, to kasnije mladi odlaze od roditelja.',
            'Što stanarine brže rastu, to mladi kasnije odlaze od roditelja.',
            'Što brže stanarine rastu, to mladi kasnije odlaze od roditelja.',
            'Što brže rastu stanarine, to mladi kasnije odlaze od roditelja.',
            'Što stanarine više rastu, mladi to kasnije odlaze od roditelja.',
            'Što više rastu stanarine, mladi to kasnije odlaze od roditelja.',
            'Što stanarine više rastu, to mladi odlaze od roditelja kasnije.',
          ],
          hint: 'The second half already has its comparative. The first half has none yet: give its verb a comparative of degree.',
          explanation:
            'Što stanarine više rastu, to mladi kasnije odlaze od roditelja. — each half needs a comparative: više (or brže) is added to rastu, while kasnije is already there. Što opens the first clause and to the second.',
        },
        {
          type: 'type',
          q: 'U usporedbi ____ roditeljima, današnji mladi imaju manje sigurnosti. (with their own — mind the form of the preposition)',
          answer: 'sa svojim',
          accept: ['s vlastitim'],
          hint: '"U usporedbi" continues with the preposition for "with" and the instrumental; the possessive refers back to the subject; and that preposition grows longer before certain consonants.',
          explanation:
            'U usporedbi sa svojim roditeljima… — u usporedbi s + instrumental. The possessive is svoj because the parents belong to the subject (mladi), and s becomes sa before s, š, z and ž.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Bolje je šutjeti od lagati." is a correct alternative to "Bolje je šutjeti nego lagati."',
        answer: false,
        hint: 'What kind of word must stand right after "od"?',
        explanation:
          'False. od is a preposition and needs a noun or pronoun in the genitive. Two infinitives, two clauses or two prepositional phrases can be compared only with nego: Bolje je šutjeti nego lagati.',
      },
      9,
      {
        type: 'sort',
        q: 'What kind of comparison is it?',
        groups: [
          'Gradual change: more and more',
          'Two things changing together: the… the…',
          'One thing far ahead of another',
        ],
        items: [
          { hr: 'Dani su sve kraći.', group: 0 },
          { hr: 'Što dulje čekamo, to je skuplje.', group: 1 },
          { hr: 'Ovaj je prijevod kudikamo točniji.', group: 2 },
          { hr: 'Sve se teže odlučujem.', group: 0 },
          { hr: 'Što je više čitala, to je manje vjerovala novinama.', group: 1 },
          { hr: 'Njegov je drugi roman neusporedivo zreliji od prvoga.', group: 2 },
        ],
        explanation:
          'sve + comparative marks a steady change (sve kraći, sve teže). što… to… ties two changes together. kudikamo and neusporedivo, like daleko and mnogo, measure the distance between the two things compared.',
      },
      7,
      {
        type: 'match',
        q: 'Match each expression to its meaning.',
        pairs: [
          ['kudikamo bolji', 'far better'],
          ['sve bolji', 'better and better'],
          ['što bolji', 'as good as possible'],
          ['ni približno tako dobar', 'nowhere near as good'],
          ['jednako dobar', 'just as good'],
        ],
        explanation:
          'One small word in front changes the kind of comparison: kudikamo measures a large difference, sve marks gradual change, and što + comparative means "as… as possible" (što prije — as soon as possible). ni približno, like ni izdaleka, denies that the two are even close.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The more I work, the less I earn."',
        words: ['Što', 'više', 'radim,', 'to', 'manje', 'zarađujem.'],
        accept: [
          'Što radim više, to manje zarađujem.',
          'Što više radim, to zarađujem manje.',
          'Što radim više, to zarađujem manje.',
        ],
        explanation:
          'Što više radim, to manje zarađujem. — Što opens the first half and to the second; each half has its own comparative (više, manje), which usually follows što and to directly.',
      },
      {
        type: 'fix',
        q: 'One word is not a real Croatian form. Tap it. ("The lake is deeper here than near the shore.")',
        words: ['Jezero', 'je', 'ovdje', 'dubokije', 'nego', 'uz', 'obalu.'],
        wrong: 3,
        answer: 'dublje',
        hint: 'Adjectives in -ok lose that syllable in the comparative, and the consonant left at the end of the stem gets company before the ending.',
        explanation:
          'Jezero je ovdje dublje nego uz obalu. — dubok → dublji: the syllable -ok drops, and b + j gives blj (like skup → skuplji). The regular ending -iji is not added to these stems; other adjectives in -ok, -ek and -ak (visok, širok, dalek, nizak) lose that syllable in the same way.',
      },
      11,
      {
        type: 'transform',
        q: 'Say the same with "od" instead of "nego". The case after it will change.',
        from: 'Marta je strpljivija nego njezin brat.',
        answer: 'Marta je strpljivija od svojeg brata.',
        accept: [
          'Marta je strpljivija od svog brata.',
          'Marta je strpljivija od svoga brata.',
          'Marta je strpljivija od svojega brata.',
          'Marta je strpljivija od njezina brata.',
          'Marta je strpljivija od njezinog brata.',
          'Marta je strpljivija od njezinoga brata.',
          'Marta je strpljivija od njenog brata.',
          'Marta je strpljivija od njenoga brata.',
          'Marta je strpljivija od brata.',
        ],
        hint: 'After "nego" the second noun keeps the case of the first. "Od" is a preposition with a case of its own — for the noun and for its possessive.',
        explanation:
          'Marta je strpljivija od svojeg(a) brata. — nego is a conjunction, so brat stays in the nominative like Marta; od governs the genitive. Since the brother is the subject’s own, svoj is the most natural possessive, though njezina / njezinog is equally correct.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Što sam dulje živio u inozemstvu, to mi je domaći kruh bio sve draži, a povratak sve teži.',
        q: 'What does the speaker say about his years abroad?',
        options: [
          'The longer he lived abroad, the dearer home-baked bread became to him — and the harder it became to return',
          'The longer he lived abroad, the less he missed the bread from home',
          'He returned quickly, because he missed the bread from home',
          'Bread abroad was more expensive, so returning was easy',
        ],
        correct: 0,
        explanation:
          'Što… dulje, to… sve draži… sve teži — the two halves change together, and inside the second half sve + comparative adds the idea of a steady increase: dearer and dearer, harder and harder. draži is the comparative of drag.',
      },
      {
        type: 'dictate',
        audio: 'Lakše je obećati nego održati riječ.',
        answer: 'Lakše je obećati nego održati riječ.',
        hint: 'Six words: "It is easier to promise than to keep one’s word."',
        explanation:
          'Two infinitives are compared, so only nego is possible. lakše is the comparative of lako (lak → lakši).',
      },
    ],
  },

  // ── Discourse particles ────────────────────────────────────────────────────
  'discourse-particles': {
    text: {
      kind: 'dialogue',
      title: 'U uredskoj kuhinji',
      lines: [
        {
          who: 'Iva',
          hr: 'Pa gdje si ti jutros bio? Sastanak je počeo u devet, a šef je triput pitao za tebe.',
          en: 'Well, where were you this morning? The meeting started at nine, and the boss asked about you three times.',
        },
        {
          who: 'Tin',
          hr: 'Ma pusti, ne pitaj. Tek sam na pola puta shvatio da mi je prezentacija ostala na kuhinjskom stolu, pa sam se morao vraćati.',
          en: 'Oh, forget it, do not ask. Only halfway here did I realize that my presentation had been left on the kitchen table, so I had to go back.',
        },
        {
          who: 'Iva',
          hr: 'Dakle, nisi je ni poslao sebi e-poštom? Moja baka danas sve drži „u oblaku”, a ti nosiš papire.',
          en: 'So you did not even email it to yourself? My grandmother keeps everything “in the cloud” these days, and you carry papers around.',
        },
        {
          who: 'Tin',
          hr: 'Eto vidiš, a ja sam mislio da sam oprezan jer je imam na papiru. Sva sreća da sam stigao prije nego što je došao red na naš odjel.',
          en: 'There you go, and I thought I was being careful because I have it on paper. Thank goodness I got here before our department’s turn came.',
        },
        {
          who: 'Iva',
          hr: 'Stigao si, ali šef je već bio, ono, na rubu živaca. Rekao je — citiram — „Pa ne mogu ja svaki put čekati gospodina Tina.”',
          en: 'You made it, but the boss was already, like, at the end of his rope. He said — I quote — “I really cannot wait for Mr. Tin every single time.”',
        },
        {
          who: 'Tin',
          hr: 'Svaki put? Pa ovo mi je prvo kašnjenje otkako radim ovdje! A on sam kasni na svaki drugi sastanak.',
          en: 'Every time? But this is the first time I have been late since I started working here! And he himself is late to every other meeting.',
        },
        {
          who: 'Iva',
          hr: 'Ma znam ja to, ali danas nije dan za pravdanje. Evo, uzmi kavu, smiri se i idi mu se ispričati prije nego što sam dođe po tebe.',
          en: 'Oh, I know that, but today is not a day for making excuses. Here, take a coffee, calm down, and go apologize to him before he comes for you himself.',
        },
        {
          who: 'Tin',
          hr: 'A što da mu kažem? Da sam zaboravio prezentaciju? Zvučat će kao da mi do posla nije ni stalo.',
          en: 'And what should I tell him? That I forgot the presentation? It will sound as if I do not even care about the job.',
        },
        {
          who: 'Iva',
          hr: 'Reci mu istinu, i to kratko. Zapravo, reci mu samo da se neće ponoviti — objašnjenja ga ionako ne zanimaju.',
          en: 'Tell him the truth, and briefly. Actually, just tell him that it will not happen again — he is not interested in explanations anyway.',
        },
        {
          who: 'Tin',
          hr: 'Dobro, idem. Ako se ne vratim za deset minuta, eto ti moje kave, pa je popij u moje ime.',
          en: 'Fine, I am going. If I am not back in ten minutes, my coffee is all yours, so drink it in my name.',
        },
        {
          who: 'Iva',
          hr: 'Ma vratit ćeš se. Tek kad te vidi s tim papirima u ruci, shvatit će da si se jutros stvarno potrudio.',
          en: 'Oh, you will be back. Only when he sees you with those papers in your hand will he realize that you really made an effort this morning.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how does the boss talk about Tin’s lateness, and how does Tin see it?',
          options: [
            'The boss speaks as if Tin were late all the time; Tin says it is his first time since he started there',
            'The boss did not notice; Tin is the one who feels guilty',
            'The boss finds it amusing; Tin is offended by his jokes',
            'The boss blames Iva; Tin defends her',
          ],
          correct: 0,
          hint: 'Recall the two words of the boss’s sentence that Tin repeats back in disbelief.',
          explanation:
            'The boss says he cannot wait for Tin "svaki put" — as though it were a habit. Tin protests: "Pa ovo mi je prvo kašnjenje otkako radim ovdje!"',
        },
        {
          q: 'Tin says: "Pa ovo mi je prvo kašnjenje otkako radim ovdje!" What does "pa" do at the front of that statement?',
          options: [
            'It buys him a moment to think, like "well…"',
            'It links two actions: "and then"',
            'It softens the statement into a polite request',
            'It turns the statement into a protest: "but this is…!"',
          ],
          correct: 3,
          hint: 'He is not hesitating, and nothing is being joined to anything. Listen to his tone after "Svaki put?".',
          explanation:
            'At the front of a statement, said with protest in the voice, pa marks objection: the speaker presents a fact the other person ought to have known. As a conjunction it would stand between two clauses (pa sam se morao vraćati), and as a filler it opens an answer (Pa, ovisi).',
        },
        {
          type: 'type',
          q: 'Iva is amazed that Tin has no backup copy: ____ i moja baka sve drži „u oblaku”! (even — the particle that marks something as beyond what one would expect)',
          answer: 'Čak',
          hint: 'A one-syllable particle; here it leans on the "i" that follows it.',
          explanation:
            'Čak i moja baka… — čak pushes the statement past the expected limit: if even Grandma does it, Tin has no excuse.',
        },
        {
          type: 'type',
          q: 'Tin consoles himself: Kasnio sam, ali sam ____ donio prezentaciju. (at least — the particle that settles for a minimum)',
          answer: 'barem',
          accept: ['bar'],
          hint: 'The particle has a longer and a shorter variant; both are standard and mean the same.',
          explanation:
            'ali sam barem (bar) donio prezentaciju — barem / bar concedes that things are not good and points to the minimum that was saved.',
        },
        {
          type: 'type',
          q: 'Tin adds a point that, to his mind, closes the argument: Šef nema pravo prigovarati. ____, on sam kasni na svaki drugi sastanak. (besides, after all)',
          answer: 'Uostalom',
          hint: 'One word. It does not explain what was just said: it adds a final point that settles the matter.',
          explanation:
            'Uostalom, on sam kasni… — uostalom introduces a last argument after which, the speaker implies, nothing more need be said. It belongs to writing as much as to speech.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In "Došao je kući pa je odmah zaspao." the word "pa" expresses the speaker’s protest.',
        answer: false,
        hint: 'Look at what "pa" stands between in this sentence.',
        explanation:
          'False. Here pa is a plain conjunction between two actions in sequence: he came home and (then) fell asleep at once. It carries protest only when it opens a statement, with the matching intonation: Pa rekao sam ti!',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "But I told you that yesterday!" (a protest)',
        words: ['Pa', 'rekao', 'sam', 'ti', 'to', 'jučer!'],
        accept: [
          'Pa jučer sam ti to rekao!',
          'Pa to sam ti jučer rekao!',
          'Pa to sam ti rekao jučer!',
          'Pa rekao sam ti jučer to!',
        ],
        explanation:
          'Pa rekao sam ti to jučer! — the particle pa stands outside the clause and does not count as its first word: the clitics sam ti lean on the first stressed word after it (rekao, jučer or to).',
      },
      10,
      {
        type: 'fix',
        q: 'One word does not fit the negation. Tap it. ("He did not even answer me.")',
        words: ['Nije', 'mi', 'čak', 'i', 'odgovorio.'],
        wrong: 3,
        answer: 'ni',
        hint: 'Under a negated verb, the little word that follows "čak" must itself be negative.',
        explanation:
          'Nije mi čak ni odgovorio. — čak i (even) becomes čak ni (not even) when the verb is negated, just as i ja becomes ni ja: Ni ja nisam odgovorio.',
      },
      11,
      2,
      {
        type: 'sort',
        q: 'What is the speaker doing?',
        groups: [
          'Guessing without firm grounds',
          'Protesting or expressing disbelief',
          'Explaining or correcting',
        ],
        items: [
          { hr: 'Valjda će nazvati.', group: 0 },
          { hr: 'Pa to nije pošteno!', group: 1 },
          { hr: 'Naime, vlak je kasnio.', group: 2 },
          { hr: 'Zar opet kasniš?', group: 1 },
          { hr: 'Zapravo, rođen sam u Osijeku.', group: 2 },
          { hr: 'Valjda znaju što rade.', group: 0 },
        ],
        explanation:
          'valjda marks a guess the speaker will not vouch for. Pa at the front of a statement and zar at the front of a question both show that the speaker finds something hard to accept. naime explains what was just said, and zapravo corrects a wrong assumption.',
      },
      {
        type: 'match',
        q: 'Match what is said to what is meant.',
        pairs: [
          ['Ma daj!', 'Oh, come on — I do not believe you.'],
          ['Eto ti ga na!', 'Well, that is just what we needed.'],
          ['Evo me!', 'Here I am!'],
          ['Baš ti hvala. (said flatly)', 'Thanks for nothing.'],
          ['Tek je sedam sati.', 'It is only seven o’clock.'],
        ],
        explanation:
          'Ma daj! waves a claim away. Eto ti ga na! greets an unwelcome surprise. evo presents something near the speaker — here, the speaker. baš intensifies, but said flatly it turns ironic. tek with a time or quantity means "only, no more than".',
      },
      {
        type: 'transform',
        q: 'Turn the neutral question into one of disbelief: begin with the particle that expects the answer "no".',
        from: 'Jesi li mu stvarno sve rekao?',
        answer: 'Zar si mu stvarno sve rekao?',
        accept: [
          'Zar si mu sve stvarno rekao?',
          'Zar si mu ti stvarno sve rekao?',
          'Zar si mu doista sve rekao?',
        ],
        hint: 'The particle takes over the job of "li", so the full verb form at the front is no longer needed: its short form joins the other short words.',
        explanation:
          'Zar si mu stvarno sve rekao? — zar opens the question, li disappears, and the stressed jesi gives way to the clitic si, which stands in second position together with mu.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Ma nije on loš čovjek, samo je, eto, malo nespretan s ljudima; valjda će s godinama naučiti.',
        q: 'What is the speaker’s attitude toward the man?',
        options: [
          'He is sure the man will never change',
          'He thinks the man is a bad person who pretends to be clumsy',
          'He is formally recommending the man for a job',
          'He brushes the criticism aside: the man is only a little awkward with people, and will presumably learn in time',
        ],
        correct: 3,
        explanation:
          'Ma dismisses what someone else has said about him; eto presents the mild verdict with a shrug (well, there it is); valjda adds a hope the speaker would not swear to. Take the particles away and only the bare facts remain — the indulgent tone is gone.',
      },
      {
        type: 'dictate',
        audio: 'Pa nisam ja to tako mislio!',
        answer: 'Pa nisam ja to tako mislio!',
        hint: 'Six words — a protest: "But I did not mean it like that!" (a man speaking)',
        explanation:
          'Pa at the front makes it a protest, and the stressed ja after nisam adds contrast: whatever others may have meant, I did not.',
      },
    ],
  },

  // ── Idiomatic Croatian and register ────────────────────────────────────────
  'idioms-register': {
    text: {
      kind: 'dialogue',
      title: 'Vijest nije kolumna',
      lines: [
        {
          who: 'Urednik',
          hr: 'Lea, pročitao sam Vaš tekst o sjednici Gradskoga vijeća. Zapažanja su Vam točna, ali rečenica „Gradonačelnik opet prodaje maglu, a oporba mlati praznu slamu” ne može u vijest.',
          en: 'Lea, I have read your piece on the City Council session. Your observations are accurate, but the sentence “The mayor is peddling empty promises again, and the opposition is just spouting hot air” cannot go into a news report.',
        },
        {
          who: 'Lea',
          hr: 'Zašto ne? Oba su frazema posve hrvatska, a čitatelj odmah shvati što mislim.',
          en: 'Why not? Both idioms are perfectly good Croatian, and the reader understands at once what I mean.',
        },
        {
          who: 'Urednik',
          hr: 'Shvati, ali shvati i da ste se svrstali. U vijesti izvještavamo, a ne presuđujemo: napišite da je gradonačelnik „iznio obećanja bez rokova i iznosa”, pa neka čitatelj zaključi sam.',
          en: 'He does, but he also understands that you have taken sides. In a news report we report, we do not pass judgment: write that the mayor “made promises without deadlines or amounts,” and let the reader draw his own conclusion.',
        },
        {
          who: 'Lea',
          hr: 'A smijem li barem napisati da je oporba vladajućima bacila rukavicu? To mi ne zvuči razgovorno.',
          en: 'And may I at least write that the opposition threw down the gauntlet to the ruling party? That does not sound colloquial to me.',
        },
        {
          who: 'Urednik',
          hr: 'Smijete, i to mirne duše: taj je frazem stilski neutralan, pa ga podnosi i najstroža rubrika. Isto vrijedi za „staviti točku na i” ili „uhvatiti se ukoštac s problemom”.',
          en: 'You may, and with an easy mind: that idiom is stylistically neutral, so even the strictest section tolerates it. The same goes for “to put the finishing touch on something” or “to come to grips with a problem.”',
        },
        {
          who: 'Lea',
          hr: 'Znači, nije stvar u tome je li izraz slikovit, nego u tome komu se i gdje obraćam.',
          en: 'So it is not a matter of whether an expression is vivid, but of whom I am addressing and where.',
        },
        {
          who: 'Urednik',
          hr: 'Upravo tako. „Vijećnik je gradonačelniku skresao u brk što misli” sjajno je u kolumni, podnošljivo u reportaži, a u vijesti nedopustivo.',
          en: 'Exactly. “The councilman told the mayor straight to his face what he thinks” is splendid in a column, tolerable in a feature story, and inadmissible in a news report.',
        },
        {
          who: 'Lea',
          hr: 'A knjiški izrazi? Napisala sam da je obnova tržnice „Sizifov posao”, a za pobjedu na glasovanju da je „Pirova”.',
          en: 'And bookish expressions? I wrote that renovating the market is “a Sisyphean task,” and of the victory in the vote that it is “Pyrrhic.”',
        },
        {
          who: 'Urednik',
          hr: 'Oni su druga krajnost: zvuče učeno, ali će polovica čitatelja morati posegnuti za rječnikom. Ostavite jedan, i to ondje gdje ga sam kontekst objašnjava.',
          en: 'They are the other extreme: they sound learned, but half the readers will have to reach for a dictionary. Keep one, and in a place where the context itself explains it.',
        },
        {
          who: 'Lea',
          hr: 'Dobro. Onda ću „mlatiti praznu slamu” sačuvati za kavu s kolegama, a u tekst staviti da je rasprava „trajala tri sata bez ijednoga zaključka”.',
          en: 'All right. Then I will save “spouting hot air” for coffee with my colleagues, and put in the text that the debate “lasted three hours without a single conclusion.”',
        },
        {
          who: 'Urednik',
          hr: 'Tako valja. I ne brinite se: tko nauči birati registar, taj je prešao pola novinarskoga puta — ostalo je mačji kašalj.',
          en: 'That is the way. And do not worry: whoever learns to choose a register has covered half of a journalist’s road — the rest is a piece of cake.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does the editor reject "prodaje maglu" in a news report?',
          options: [
            'Because it is not a genuine Croatian idiom',
            'Because readers would not understand it',
            'Because it shows that the reporter has taken sides, and a news report informs rather than judges',
            'Because it is too old-fashioned for a modern newspaper',
          ],
          correct: 2,
          hint: 'He granted that the reader understands the idiom. What ELSE does the reader then understand?',
          explanation:
            'Shvati i da ste se svrstali — the idiom is clear, but it carries a verdict. U vijesti izvještavamo, a ne presuđujemo: the objection is to its register and its bias, not to its being an idiom.',
        },
        {
          q: 'The editor ends with "ostalo je mačji kašalj" — a colloquial idiom, from the very man who has just crossed two of them out. Why is that not a contradiction?',
          options: [
            'Because he is chatting with a colleague, not writing a news report: an idiom is not good or bad in itself, only in or out of place',
            'Because "mačji kašalj" is a bookish expression, unlike the two he crossed out',
            'Because editors are allowed to break the rules they set for reporters',
            'Because the idiom is neutral and would be acceptable in a news report as well',
          ],
          correct: 0,
          hint: 'Lea put the whole lesson into one sentence of her own: it depends on whom you are addressing — and where.',
          explanation:
            'mačji kašalj (a trifle) is colloquial, and a friendly talk in the newsroom is exactly where colloquial idioms belong. The same words in a news item would be as out of place as "mlatiti praznu slamu".',
        },
        {
          type: 'type',
          q: 'Lea reports neutrally that the opposition lost again: Oporba je i ovaj put izvukla ____ kraj. (came off worse — the adjective of the idiom)',
          answer: 'deblji',
          accept: ['kraći'],
          hint: 'Literally, one pulls out the less pleasant end of a stick: an irregular comparative of an adjective of size.',
          explanation:
            'izvući deblji kraj — to come off worse, literally "to pull the thicker end". debeo → deblji. The idiom is stylistically neutral; its only established variant is izvući kraći kraj, with the same meaning. No other adjective will do.',
        },
        {
          type: 'type',
          q: 'The council does not want to discuss the debt: Vijećnici su problem jednostavno pomeli pod ____. (the idiom for hiding something unpleasant)',
          answer: 'tepih',
          accept: ['sag'],
          hint: 'The same household object as in the English idiom, in the accusative after "pod" with motion.',
          explanation:
            'pomesti (gurnuti) pod tepih — to sweep under the rug. pod takes the accusative here because the problem is moved there.',
        },
        {
          type: 'transform',
          q: 'Too colloquial for a news report. Rewrite it in neutral register: replace the slang verb with the standard verb "razumjeti" and change nothing else.',
          from: 'Vijećnici nisu skužili prijedlog.',
          answer: 'Vijećnici nisu razumjeli prijedlog.',
          accept: [
            'Vijećnici nisu shvatili prijedlog.',
            'Vijećnici prijedlog nisu razumjeli.',
            'Vijećnici prijedlog nisu shvatili.',
          ],
          hint: 'Keep the past tense and the plural: only the participle changes.',
          explanation:
            'Vijećnici nisu razumjeli prijedlog. — skužiti is urban slang; razumjeti and shvatiti are neutral and fit any text. The grammar of the sentence stays exactly the same; only the register changes.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Pirova pobjeda" is a colloquial idiom, at home in café talk rather than in an essay.',
        answer: false,
        hint: 'Where does the name in it come from: the street, or the history books?',
        explanation:
          'False. Pirova pobjeda — a victory won at too high a price — comes from ancient history (King Pyrrhus) and belongs to learned, bookish style, like Sizifov posao or Ahilova peta. In casual talk it sounds deliberately elevated.',
      },
      9,
      {
        type: 'sort',
        q: 'Which register does each expression belong to?',
        groups: [
          'Colloquial — among friends',
          'Neutral — fits any text',
          'Bookish — learned style',
        ],
        items: [
          { hr: 'nema frke', group: 0 },
          { hr: 'staviti točku na i', group: 1 },
          { hr: 'Ahilova peta', group: 2 },
          { hr: 'prodavati maglu', group: 0 },
          { hr: 'uhvatiti se ukoštac', group: 1 },
          { hr: 'presjeći gordijski čvor', group: 2 },
        ],
        explanation:
          'nema frke (no problem) and prodavati maglu are spoken, informal Croatian. staviti točku na i and uhvatiti se ukoštac are neutral and can stand in a news report. Ahilova peta and gordijski čvor come from ancient myth and history and mark a learned style.',
      },
      10,
      {
        type: 'match',
        q: 'Match each idiom to its meaning.',
        pairs: [
          ['obećavati brda i doline', 'to promise far more than one can deliver'],
          ['nositi glavu u torbi', 'to risk one’s life'],
          ['biti komu trn u oku', 'to be a constant irritation to someone'],
          ['prati ruke od čega', 'to disclaim all responsibility for something'],
          ['raditi iz petnih žila', 'to work with all one’s might'],
        ],
        explanation:
          'Each idiom is fixed: brda i doline (never "planine i doline"), glavu u torbi, trn u oku, iz petnih žila. Swap in a word of your own and the idiom is gone — what remains is a literal sentence.',
      },
      11,
      5,
      {
        type: 'order',
        q: 'Put the words in order: "The opposition threw down the gauntlet to the government."',
        words: ['Oporba', 'je', 'vladi', 'bacila', 'rukavicu.'],
        accept: [
          'Oporba je bacila rukavicu vladi.',
          'Oporba je bacila vladi rukavicu.',
          'Vladi je oporba bacila rukavicu.',
          'Oporba je vladi rukavicu bacila.',
        ],
        explanation:
          'Oporba je vladi bacila rukavicu. — baciti komu rukavicu: the one challenged stands in the dative (vladi). The words of the idiom keep their form, but the word order of the sentence around them stays free.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Do not play with fire!")',
        words: ['Ne', 'igraj', 'se', 'vatru!'],
        wrong: 3,
        answer: 'vatrom',
        hint: 'Ask "čime?": the verb of playing does not take a direct object for the thing played with.',
        explanation:
          'Ne igraj se vatrom! — igrati se takes the instrumental (igrati se loptom, lutkama, vatrom). The idiom igrati se vatrom, to take a dangerous risk, is neutral in register.',
      },
      7,
      {
        type: 'transform',
        q: 'Rewrite it for a formal letter to ONE person: the standard word of thanks and polite address.',
        from: 'Fala ti što si došao.',
        answer: 'Hvala Vam što ste došli.',
        accept: [
          'Zahvaljujem Vam što ste došli.',
          'Hvala Vam na dolasku.',
          'Zahvaljujem Vam na dolasku.',
        ],
        hint: 'Three things change: the clipped first word, the pronoun (capitalized in a letter), and the number of the verb with its participle.',
        explanation:
          'Hvala Vam što ste došli. — fala is a clipped colloquial form of hvala. In polite address to one person the verb is plural (ste došli — the participle is masculine plural whoever is addressed), and in a letter Vam is written with a capital.',
      },
      {
        type: 'listen',
        audio:
          'Ministar je obećavao brda i doline, a kad je trebalo platiti, oprao je ruke od svega.',
        q: 'What did the minister do?',
        options: [
          'He promised a great deal, and when it was time to pay, he disclaimed all responsibility',
          'He promised to build roads through the hills, and paid for all of them',
          'He washed his hands before signing the payment order',
          'He promised little, but in the end paid for everything himself',
        ],
        correct: 0,
        explanation:
          'obećavati brda i doline — to promise the moon; oprati ruke od čega — to wash one’s hands of something. Both idioms pass judgment on him, so the sentence suits a commentary, not a news item.',
      },
      {
        type: 'dictate',
        audio: 'Bolje vrabac u ruci nego golub na grani.',
        answer: 'Bolje vrabac u ruci nego golub na grani.',
        hint: 'Eight words — the proverb that matches "A bird in the hand is worth two in the bush."',
        explanation:
          'Literally: better a sparrow in the hand than a pigeon on the branch. Like most proverbs it has no verb and a fixed wording.',
      },
    ],
  },

  // ══ UNIT 10 ════════════════════════════════════════════════════════════════

  // ── Saying it without a subject ────────────────────────────────────────────
  depersonalization: {
    text: {
      kind: 'text',
      title: 'Što se zbiva s tvornicom stakla?',
      lines: [
        {
          hr: 'O sudbini stare tvornice stakla u gradu se govori već mjesecima, ali se pouzdano ne može reći gotovo ništa.',
          en: 'The fate of the old glass factory has been talked about in town for months, but almost nothing can be said for certain.',
        },
        {
          hr: 'Šuška se da je pogon prodan stranom ulagaču, no ugovor nitko nije vidio.',
          en: 'It is whispered that the plant has been sold to a foreign investor, but nobody has seen the contract.',
        },
        {
          hr: 'Radnicima je prošloga tjedna priopćeno da se proizvodnja „privremeno obustavlja”, a na pitanje do kada, odgovoreno im je da se odluka očekuje „uskoro”.',
          en: 'Last week the workers were informed that production “is being temporarily suspended,” and when they asked until when, they were told that a decision is expected “soon.”',
        },
        {
          hr: 'U gradskoj se upravi tvrdi da o prodaji nema službenih podataka, dok se u sindikatu vjeruje da je sve odavno dogovoreno.',
          en: 'At city hall it is claimed that there is no official information about a sale, while in the union it is believed that everything was agreed long ago.',
        },
        {
          hr: 'Kažu, doduše, da su se prošle zime u tvornicu noću dovozili novi strojevi, što se s pričom o zatvaranju teško može pomiriti.',
          en: 'They do say, though, that last winter new machines were being brought into the factory at night, which is hard to reconcile with the story about closing.',
        },
        {
          hr: 'Nekad se ovdje radilo u tri smjene i staklo se izvozilo u dvadeset zemalja; danas se u pogonima čuje samo zujanje rasvjete.',
          en: 'Once people worked here in three shifts and glass was exported to twenty countries; today only the hum of the lights can be heard in the halls.',
        },
        {
          hr: 'Ljudima se, razumljivo, ne čeka: nekima se odlazi u inozemstvo, drugima se naprosto ne da sjediti kod kuće i nagađati.',
          en: 'People, understandably, do not feel like waiting: some feel like leaving for abroad, others simply cannot bring themselves to sit at home and guess.',
        },
        {
          hr: 'Iz ministarstva je jučer odgovoreno da je „postupak u tijeku” i da će javnost biti obaviještena „kada se za to steknu uvjeti”.',
          en: 'The ministry replied yesterday that “the procedure is underway” and that the public will be informed “when the conditions for that have been met.”',
        },
        {
          hr: 'Takvim se rečenicama ne kaže ništa, ali se njima nitko i ne obvezuje: nije rečeno ni tko odlučuje ni tko će za odluku odgovarati.',
          en: 'Sentences like these say nothing, but neither do they commit anyone: it has not been said who decides or who will answer for the decision.',
        },
        {
          hr: 'Dok se ne objavi ugovor, ostaje samo ono što se priča na tržnici — a ondje se, kao i uvijek, priča svašta.',
          en: 'Until the contract is published, all that remains is what is being said at the market — and there, as always, all sorts of things are said.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: which detail does NOT fit the story that the factory is closing?',
          options: [
            'The union believes everything was agreed long ago',
            'New machines were reportedly brought into the factory at night last winter',
            'The workers were told that production is being suspended',
            'The ministry says the procedure is underway',
          ],
          correct: 1,
          hint: 'It is the one thing that somebody about to shut a factory down would hardly pay for.',
          explanation:
            'Kažu… da su se… u tvornicu noću dovozili novi strojevi, što se s pričom o zatvaranju teško može pomiriti — nobody installs new machines in a plant that is about to close. Note that even this is given without a source: Kažu…',
        },
        {
          q: 'The text has "su se… dovozili novi strojevi" but "Nekad se ovdje radilo u tri smjene". Why a masculine plural in the first and a neuter singular in the second?',
          options: [
            'Because the first sentence is in the passive and the second is active',
            'Because "radilo" agrees with the neuter noun "staklo" later in the sentence',
            'Because verbs of motion always agree with the place, and verbs of work never agree',
            'Because "strojevi" is a nominative noun and the verb agrees with it, while "radilo se" has no nominative at all, so the participle falls back on the neuter singular',
          ],
          correct: 3,
          hint: 'Ask of each sentence: is there a noun in the nominative that the participle could answer to?',
          explanation:
            'A se-sentence that names what is brought, bought or made keeps that noun in the nominative, and the verb agrees with it: dovozili su se strojevi. With no such noun the sentence is truly subjectless, and the participle takes the default form — neuter singular: radilo se.',
        },
        {
          type: 'type',
          q: 'It was not only machines: Prošle su se zime u tvornicu ____ i nove peći. (were being brought in — dovoziti)',
          answer: 'dovozile',
          hint: 'Is there a nominative noun here? The participle answers to it in gender and number.',
          explanation:
            'Dovozile su se nove peći. — peći is feminine plural (jedna peć, dvije peći) and stands in the nominative, so the participle agrees with it: dovozile.',
        },
        {
          type: 'transform',
          q: 'Remove the doer: turn the sentence into an impersonal one with "se". Keep "u gradu".',
          from: 'Ljudi u gradu vjeruju da je ugovor potpisan.',
          answer: 'U gradu se vjeruje da je ugovor potpisan.',
          accept: ['Vjeruje se u gradu da je ugovor potpisan.'],
          hint: 'The subject disappears, the verb goes into the form that agrees with nobody, and the short word takes second position.',
          explanation:
            'U gradu se vjeruje da je ugovor potpisan. — ljudi drops out, the verb goes into the third person singular, and se stands in second position. Nobody in particular believes it; it is simply believed.',
        },
        {
          type: 'transform',
          q: 'Make it a sentence for an official report, with the neuter passive participle: "It has been decided that…".',
          from: 'Uprava je odlučila da se proizvodnja obustavlja.',
          answer: 'Odlučeno je da se proizvodnja obustavlja.',
          accept: ['Odlučeno je da se obustavlja proizvodnja.'],
          hint: 'The doer vanishes; the participle of the same verb takes the form that agrees with nothing, and the auxiliary follows it.',
          explanation:
            'Odlučeno je da se proizvodnja obustavlja. — the neuter passive participle with je and a da-clause is the formal way to report a decision without naming who made it. The text does the same with priopćeno je and odgovoreno je.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"Kažu da će zima biti duga." names no source at all, and yet it suggests that some unnamed people stand behind the claim.',
        answer: true,
        hint: 'The verb has a person and a number. Whose?',
        explanation:
          'True. A bare third person plural with no subject — kažu, pišu, govore — points at an unnamed "they": people in general, the media, the authorities. It is the everyday spoken way of passing on something heard, and it keeps the speaker at a distance from the claim.',
      },
      10,
      {
        type: 'sort',
        q: 'How is the doer left out of the main clause?',
        groups: [
          '"se" + verb, with no subject',
          'A bare "they" (third person plural)',
          'Neuter participle + "je"',
        ],
        items: [
          { hr: 'Ovdje se ne parkira.', group: 0 },
          { hr: 'Pišu da struja poskupljuje.', group: 1 },
          { hr: 'Zaključeno je da nema krivnje.', group: 2 },
          { hr: 'Očekuje se da će cijene pasti.', group: 0 },
          { hr: 'Govore da je bolnica puna.', group: 1 },
          { hr: 'Odlučeno je da škola ostaje otvorena.', group: 2 },
        ],
        explanation:
          'Three tools, three registers: se with the third person singular is neutral and works everywhere; the bare third person plural is spoken and points at "them"; the neuter participle with je belongs to reports and official decisions.',
      },
      11,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Pleše mi se.', 'I feel like dancing.'],
          ['Ne da mi se plesati.', 'I cannot be bothered to dance.'],
          ['Plesalo se do zore.', 'There was dancing until dawn.'],
          ['Kažu da pleše.', 'They say she dances.'],
          ['Ovdje se ne pleše.', 'There is no dancing here.'],
        ],
        explanation:
          'With a dative (mi) the se-construction names an urge that comes over a person: Pleše mi se. Without a dative it is a plain impersonal: Plesalo se, Ovdje se ne pleše. Kažu da… passes on what unnamed people say.',
      },
      12,
      6,
      {
        type: 'order',
        q: 'Put the words in order: "For years nothing was known about it."',
        words: ['O', 'tome', 'se', 'godinama', 'ništa', 'nije', 'znalo.'],
        accept: [
          'O tome se godinama nije ništa znalo.',
          'O tome se godinama nije znalo ništa.',
          'O tome se ništa nije znalo godinama.',
          'O tome se ništa godinama nije znalo.',
          'Godinama se o tome ništa nije znalo.',
          'Godinama se o tome nije ništa znalo.',
          'Godinama se o tome nije znalo ništa.',
          'Godinama se ništa o tome nije znalo.',
        ],
        explanation:
          'O tome se godinama ništa nije znalo. — se takes second position, after the first phrase (O tome or Godinama); ne fuses with the auxiliary into nije; and the participle is neuter singular, because the sentence has no noun to agree with.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("People used to live better here.")',
        words: ['Nekad', 'se', 'ovdje', 'živio', 'bolje.'],
        wrong: 3,
        answer: 'živjelo',
        hint: 'Nobody in particular is doing the living — so what can the participle agree with?',
        explanation:
          'Nekad se ovdje živjelo bolje. — with no subject the past participle is neuter singular: živjelo se, radilo se, putovalo se. A masculine form would need a masculine subject, and there is none.',
      },
      13,
      {
        type: 'transform',
        q: 'Say it as an urge that comes over the person: use the dative and "se" instead of "želim".',
        from: 'Želim putovati.',
        answer: 'Putuje mi se.',
        accept: ['Meni se putuje.'],
        hint: 'The person stops being the subject and becomes a short dative; the verb of the infinitive goes into the form that agrees with nobody.',
        explanation:
          'Putuje mi se. — I feel like traveling. The person is no longer the one who acts but the one the urge happens to: dative mi, then se, with the verb in the third person singular.',
      },
      {
        type: 'listen',
        audio:
          'Priča se da će se stara knjižnica rušiti, ali u gradskoj upravi kažu da o tome još ništa nije odlučeno.',
        q: 'What do we learn about the old library?',
        options: [
          'The city has decided to tear it down',
          'It was torn down long ago, and nobody talks about it anymore',
          'Rumor has it that it will be torn down, but city hall says nothing has been decided yet',
          'City hall has decided to renovate it',
        ],
        correct: 2,
        explanation:
          'Three ways of leaving the doer out in one sentence: Priča se (rumor), kažu (the unnamed people at city hall) and nije odlučeno (the formal neuter participle). Nobody is on record as having said or decided anything.',
      },
      {
        type: 'dictate',
        audio: 'O tome se u našoj kući nije govorilo.',
        answer: 'O tome se u našoj kući nije govorilo.',
        hint: 'Eight words: "That was not talked about in our house."',
        explanation:
          'se in second position after O tome, ne fused with the auxiliary (nije), and the neuter singular participle of a sentence with no subject.',
      },
    ],
  },

  // ── Prefixed verbs ─────────────────────────────────────────────────────────
  'prefixed-verbs': {
    text: {
      kind: 'dialogue',
      title: 'Prije potpisa',
      lines: [
        {
          who: 'Odvjetnica',
          hr: 'Gospođo Barić, prije nego što na išta stavite svoj potpis, želim da zajedno prođemo ugovor, jer sam u njemu našla nekoliko odredaba koje bih na Vašem mjestu dala izmijeniti.',
          en: 'Mrs. Barić, before you put your signature on anything, I want us to go through the contract together, because I found several provisions in it that, in your place, I would have changed.',
        },
        {
          who: 'Klijentica',
          hr: 'Mislila sam da je sve već dogovoreno: kupac uplati predujam, ja mu predam ključeve, a ostatak isplati kad se stan prepiše na njega.',
          en: 'I thought everything had already been agreed: the buyer pays the deposit, I hand over the keys to him, and he pays the rest when the apartment is transferred to his name.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Upravo je u tome zamka. Kupac je u posljednji čas dopisao rečenicu prema kojoj se useljava odmah, a ostatak cijene plaća u ratama, bez ikakva jamstva.',
          en: 'That is exactly where the trap lies. At the last minute the buyer added a sentence according to which he moves in immediately and pays the rest of the price in installments, with no guarantee whatsoever.',
        },
        {
          who: 'Klijentica',
          hr: 'To nisam ni primijetila! Ugovor sam samo preletjela, jer mi je agent rekao da je riječ o uobičajenom obrascu koji samo treba ispuniti.',
          en: 'I did not even notice that! I only skimmed the contract, because the agent told me it was a standard form that only needed to be filled in.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Obrazac jest uobičajen, ali je netko iz njega izbrisao odredbu o zakašnjeloj uplati. Predlažem da je vratimo i da uz nju pripišemo iznos kamata.',
          en: 'The form is indeed standard, but somebody deleted the provision on late payment from it. I suggest that we put it back and write in the amount of interest next to it.',
        },
        {
          who: 'Klijentica',
          hr: 'A što ako kupac to odbije? Ne bih htjela da se posao razvrgne, jer sam već uplatila kaparu za kuću u koju se selim.',
          en: 'And what if the buyer refuses? I would not want the deal to fall through, because I have already paid the deposit on the house I am moving into.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Ozbiljan kupac neće odbiti ono što zakon ionako propisuje. Ako pak odustane, bolje je da odustane sada nego nakon što se useli.',
          en: 'A serious buyer will not refuse what the law prescribes anyway. And if he backs out, it is better that he backs out now than after he has moved in.',
        },
        {
          who: 'Klijentica',
          hr: 'Imate pravo. Hoćete li Vi prepraviti ugovor ili ga moram odnijeti natrag agentu?',
          en: 'You are right. Will you revise the contract, or do I have to take it back to the agent?',
        },
        {
          who: 'Odvjetnica',
          hr: 'Prepravit ću ga sama, a agentu ćemo ga samo proslijediti. Kad ga obje strane potpišu, predat ćemo zahtjev da se vlasništvo upiše u zemljišne knjige.',
          en: 'I will revise it myself, and we will simply forward it to the agent. Once both parties sign it, we will file the request for the ownership to be entered in the land register.',
        },
        {
          who: 'Klijentica',
          hr: 'Laknulo mi je. Da sam došla tjedan dana kasnije, vjerojatno bih bila potpisala nešto zbog čega bih se poslije gorko pokajala.',
          en: 'What a relief. If I had come a week later, I would probably have signed something that I would have bitterly regretted afterward.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Zato se ugovori i čitaju prije potpisivanja, a ne poslije. Pričekajte me trenutak: ispisat ću Vam novu verziju pa je možete ponijeti kući i u miru pročitati.',
          en: 'That is exactly why contracts are read before signing, not after. Wait a moment for me: I will print out the new version for you, so you can take it home and read it in peace.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what had the buyer added to the contract at the last minute?',
          options: [
            'A sentence lowering the agreed price of the apartment',
            'A provision on interest for late payment',
            'A sentence letting him move in at once and pay the rest in installments, with no guarantee',
            'A request that the seller leave the furniture in the apartment',
          ],
          correct: 2,
          hint: 'The lawyer called it a trap: it concerns WHEN he gets the apartment and HOW he pays the remainder.',
          explanation:
            'Kupac je… dopisao rečenicu prema kojoj se useljava odmah, a ostatak cijene plaća u ratama, bez ikakva jamstva. The provision on late payment is what somebody deleted — and what the lawyer wants put back.',
        },
        {
          q: 'The client "je ugovor samo preletjela", the lawyer will "prepraviti ugovor", and the apartment "se prepiše na kupca". What does pre- contribute?',
          options: [
            'In all three it means "too much", as in "preplatiti"',
            'The idea of "across" or "over": across the surface of a text, over again into a new shape, and across from one owner to another',
            'Nothing: it only makes the verbs perfective',
            'The idea of "before", like the English pre-',
          ],
          correct: 1,
          hint: 'Picture a movement in each case: a glance over the pages, a text carried over into a new version, a property passing over to someone else.',
          explanation:
            'pre- basically means across, over: preletjeti (fly over — skim), prepraviti (do over — revise), prepisati (write across — copy, or transfer to another name). The meaning "too much" (preplatiti, presoliti) grows from the same idea: over the measure. Added to a simple imperfective verb, a prefix as a rule makes it perfective, but here it changes the meaning as well.',
        },
        {
          type: 'type',
          q: 'A happy ending: the buyer paid too much by mistake. Kupac je posljednju ratu ____, pa mu vraćamo razliku. (overpaid — pre- + platiti, past, masculine)',
          answer: 'preplatio',
          hint: 'The same prefix as in the question above, now in its sense "over the measure"; the participle is regular.',
          explanation:
            'preplatiti — to pay more than was due. Compare the whole family: uplatiti (pay in), isplatiti (pay out), otplatiti (pay off), doplatiti (pay the difference), preplatiti (overpay).',
        },
        {
          type: 'type',
          q: 'The lawyer has good news about an old debt: Banka Vam je taj dug ____. (wrote off — od- + pisati, past, feminine)',
          answer: 'otpisala',
          hint: 'Write the prefix the way it is pronounced before a voiceless consonant.',
          explanation:
            'od + pisati → otpisati: d is devoiced before p, and Croatian spelling records the change (as in od + kazati → otkazati). The prefix od- adds the meaning "away, off".',
        },
        {
          type: 'transform',
          q: 'She is at it right now: replace the perfective future with the PRESENT of the imperfective partner.',
          from: 'Odvjetnica će prepraviti ugovor.',
          answer: 'Odvjetnica prepravlja ugovor.',
          accept: ['Odvjetnica ugovor prepravlja.', 'Odvjetnica upravo prepravlja ugovor.'],
          hint: 'This partner ends in -ati, and the consonant before the ending softens the way b, p, m and v do.',
          explanation:
            'prepraviti → prepravljati (v + j gives vlj): prepravljam, prepravlja. A prefixed verb is perfective and cannot describe what is going on at this moment, so the language builds a new imperfective from it.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: '"Napisati" differs from "pisati" only in aspect, but "potpisati" differs from "pisati" in meaning as well.',
        answer: true,
        hint: 'Translate all three. For which pair do you need two different English verbs?',
        explanation:
          'True. na- merely completes the action (to write → to write to the end), so pisati – napisati form an aspect pair. pod- adds a meaning of its own (to write underneath → to sign), so potpisati is a new verb, and it needs a new imperfective of its own: potpisivati.',
      },
      10,
      {
        type: 'sort',
        q: 'Perfective or imperfective?',
        groups: ['Perfective — one completed act', 'Imperfective — ongoing or repeated'],
        items: [
          { hr: 'prepisati', group: 0 },
          { hr: 'prepisivati', group: 1 },
          { hr: 'obići', group: 0 },
          { hr: 'dolaziti', group: 1 },
          { hr: 'nadmašiti', group: 0 },
          { hr: 'dočekivati', group: 1 },
          { hr: 'nagomilati', group: 0 },
          { hr: 'odlaziti', group: 1 },
        ],
        explanation:
          'A prefix on a simple imperfective verb as a rule gives a perfective: prepisati, obići, nadmašiti, nagomilati. The new imperfective is built with a suffix (-ivati, -avati) or, in the ići family, with -laziti: prepisivati, dočekivati, dolaziti, odlaziti.',
      },
      11,
      {
        type: 'match',
        q: 'One root, five prefixes. Match each verb to its meaning.',
        pairs: [
          ['dopisati', 'to add in writing'],
          ['prepisati', 'to copy out'],
          ['opisati', 'to describe'],
          ['zapisati', 'to jot down'],
          ['popisati', 'to make a list of'],
        ],
        explanation:
          'do- adds up to a point, pre- carries across, o- goes around a thing (and so describes it), za- fixes something so that it is not lost, po- covers items one after another. The prefix keeps its basic spatial idea even when the verb as a whole has moved far from it.',
      },
      12,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "The sun had set before we arrived."',
        words: ['Sunce', 'je', 'zašlo', 'prije', 'nego', 'što', 'smo', 'stigli.'],
        accept: ['Zašlo je sunce prije nego što smo stigli.'],
        explanation:
          'Sunce je zašlo prije nego što smo stigli. — zaći (za- + ići: to go behind) is perfective: zašlo je names the completed event. Its imperfective partner, from the -laziti series, describes the process.',
      },
      {
        type: 'fix',
        q: 'One word is misspelled. Tap it. ("The competition was announced yesterday.")',
        words: ['Natječaj', 'je', 'razpisan', 'jučer.'],
        wrong: 2,
        answer: 'raspisan',
        hint: 'Say the word aloud: what happens to z in front of p — and does Croatian spelling show it?',
        explanation:
          'raz + pisati → raspisati: z is devoiced before the voiceless p, and the change is written. The same happens in iz + pisati → ispisati and uz + peti se → uspeti se.',
      },
      14,
      {
        type: 'transform',
        q: 'Make it something the judge does regularly: the imperfective partner, in the present tense.',
        from: 'Sudac je odbio žalbu.',
        answer: 'Sudac odbija žalbu.',
        accept: ['Sudac žalbu odbija.', 'Sudac odbija žalbe.', 'Sudac žalbe odbija.'],
        hint: 'The root gains a -j- before the ending -ati, and the present then goes like that of "čitati".',
        explanation:
          'odbiti → odbijati: odbijam, odbija. od- (away) + biti (to strike) gives "to turn away, to refuse"; the prefixed verb is perfective, and the repeated action needs the imperfective odbijati.',
      },
      13,
      {
        type: 'listen',
        audio:
          'Kad sam otplatio kredit, učinilo mi se da sam preplivao more; a onda je sin upisao fakultet, pa sam se opet zadužio.',
        q: 'What happened to the speaker?',
        options: [
          'He took out a loan to swim across the sea with his son',
          'He paid off his loan and felt enormous relief — and then went into debt again when his son started college',
          'His son paid off the loan after finishing college',
          'He never managed to pay off the loan, because his son was in college',
        ],
        correct: 1,
        explanation:
          'Four prefixed perfectives, four completed events: otplatiti (pay off), preplivati (swim across — here: to get through something enormous), upisati (enroll in), zadužiti se (go into debt).',
      },
      {
        type: 'dictate',
        audio: 'Preselili smo se prije nego što je došla zima.',
        answer: 'Preselili smo se prije nego što je došla zima.',
        hint: 'Nine words: "We moved before winter came."',
        explanation:
          'preseliti se — pre- (across) + seliti se: to move from one home to another, perfective. došla is from doći (do- + ići), also perfective: two completed events in sequence.',
      },
    ],
  },

  // ── Accent and prosody ─────────────────────────────────────────────────────
  'accent-prosody': {
    text: {
      kind: 'dialogue',
      title: 'Proba s lektoricom',
      lines: [
        {
          who: 'Lektorica',
          hr: 'Tomislave, stanimo na trenutak. U trećem ste prizoru rekli „restoRAN” i „asisTENT”, s naglaskom na kraju riječi, a to na pozornici ne smije proći.',
          en: 'Tomislav, let us stop for a moment. In the third scene you said “restoRAN” and “asisTENT,” with the stress at the end of the word, and on stage that must not pass.',
        },
        {
          who: 'Glumac',
          hr: 'Tako se u mojem kraju govori oduvijek. Čuje li publika uopće tu razliku?',
          en: 'That is how people have always spoken where I come from. Does the audience even hear that difference?',
        },
        {
          who: 'Lektorica',
          hr: 'Čuje, makar je ne znala imenovati. U standardnom jeziku posljednji slog višesložne riječi ne nosi naglasak, pa se on povlači prema početku: kaže se „resTOran” i „aSIStent”.',
          en: 'It does, even if it could not name it. In the standard language the last syllable of a polysyllabic word does not carry the accent, so the accent retreats toward the beginning: one says “resTOran” and “aSIStent.”',
        },
        {
          who: 'Glumac',
          hr: 'Dobro, to mogu zapamtiti. Ali jučer ste mi zamjerili i rečenicu „Djeca kupe jabuke”, a u njoj nema nijedne strane riječi.',
          en: 'Fine, I can remember that. But yesterday you also faulted my sentence “Djeca kupe jabuke,” and there is not a single foreign word in it.',
        },
        {
          who: 'Lektorica',
          hr: 'Zato što ste je izgovorili s dugim prvim slogom, pa je ispalo da djeca jabuke kupuju na tržnici, a ne da ih skupljaju pod stablom. Kratki silazni naglasak znači „skupljaju”, dugi silazni „kupuju”.',
          en: 'Because you pronounced it with a long first syllable, so it came out that the children are buying apples at the market, not gathering them under the tree. A short falling accent means “they gather,” a long falling one “they buy.”',
        },
        {
          who: 'Glumac',
          hr: 'Znači, dvije se riječi mogu pisati posve jednako, a razlikovati se samo trajanjem i tonom?',
          en: 'So two words can be spelled exactly alike and differ only in length and pitch?',
        },
        {
          who: 'Lektorica',
          hr: 'Upravo tako. Četiri su naglaska: dva silazna, koja može nositi samo prvi slog riječi, i dva uzlazna, koja mogu doći na svaki slog osim posljednjega; i silazni i uzlazni može biti kratak ili dug.',
          en: 'Exactly. There are four accents: two falling ones, which only the first syllable of a word can carry, and two rising ones, which can come on any syllable except the last; both the falling and the rising one can be short or long.',
        },
        {
          who: 'Glumac',
          hr: 'A što ne valja u mojem „u KUĆU” i „ne ZNAM”? Ondje je naglasak na početku riječi, baš kako tražite.',
          en: 'And what is wrong with my “u KUĆU” and “ne ZNAM”? There the accent is at the beginning of the word, just as you ask.',
        },
        {
          who: 'Lektorica',
          hr: 'Ondje je naglasak silazni, a silazni se u standardnom izgovoru seli na prednaglasnicu: kaže se „U kuću” i „NE znam”, kao da su prijedlog i imenica jedna riječ. Tako govori i Vaš lik, seljak iz Like, pa bi mu „u KUĆU” zvučalo tuđe.',
          en: 'There the accent is a falling one, and in standard pronunciation a falling accent moves onto the proclitic: one says “U kuću” and “NE znam,” as if the preposition and the noun were one word. That is how your character speaks too, a farmer from Lika, so “u KUĆU” would sound foreign in his mouth.',
        },
        {
          who: 'Glumac',
          hr: 'Priznajem da o tome nikad nismo učili ni riječi. Postoji li kakvo pravilo i za duljinu izvan naglaska, ili se to mora slušati?',
          en: 'I admit we were never taught a word about that. Is there some rule for length outside the accent as well, or does that have to be picked up by listening?',
        },
        {
          who: 'Lektorica',
          hr: 'Ponešto se može naučiti: u genitivu množine zadnji je slog uvijek dug, pa „iz naših sela” zvuči drukčije nego „do sela” u jednini. Ostalo se, vjerujte, stječe uhom — zato Vas i molim da slušate snimke starih radijskih spikera.',
          en: 'Some of it can be learned: in the genitive plural the last syllable is always long, so “iz naših sela” sounds different from “do sela” in the singular. The rest, believe me, is acquired by ear — which is why I keep asking you to listen to recordings of the old radio announcers.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what went wrong when the actor said "Djeca kupe jabuke" with a long first syllable?',
          options: [
            'The sentence became ungrammatical',
            'It came out that the children are buying apples, not gathering them',
            'It sounded as if the children were selling apples',
            'Nothing changed in meaning; it only sounded old-fashioned',
          ],
          correct: 1,
          hint: 'Two different verbs share the spelling "kupe". The coach placed one at the market and the other under a tree.',
          explanation:
            'With a long falling accent kupe is the present of kupiti in the sense "to buy"; with a short falling accent it belongs to kupiti "to gather" (as in skupljati). The spelling is the same — only length tells the two apart.',
        },
        {
          q: 'Why does the coach want "U kuću" — stress on the preposition — and not "u KUĆU"?',
          options: [
            'Because prepositions are always stressed in Croatian',
            'Because "kuću" has a rising accent, and a rising accent cannot stand on a first syllable',
            'Because "kuću" has a falling accent, and in standard pronunciation a falling accent moves onto a proclitic, which then sounds like the first syllable of the same word',
            'Because a word of two syllables cannot be stressed at all',
          ],
          correct: 2,
          hint: 'She named the kind of accent that "kuću" has, and the kind of word that "u" is.',
          explanation:
            'A proclitic (a preposition, the negation ne) has no accent of its own and forms one accentual unit with the next word. A falling accent can stand only at the very beginning of such a unit — so it moves forward onto the proclitic. A rising accent stays where it is, which is why the shift does not happen with every noun; in everyday urban speech it is often not made at all.',
        },
        {
          type: 'type',
          q: 'Complete the coach’s definition: Riječ bez vlastitoga naglaska koja se izgovara zajedno s riječju iza sebe zove se ____. (the Croatian term, in the nominative)',
          answer: 'prednaglasnica',
          accept: ['proklitika'],
          hint: 'The coach used this term, in another case, when she explained where a falling accent moves.',
          explanation:
            'prednaglasnica (proklitika) — a word that leans forward on the word after it: prepositions, the conjunctions i and a, the negation ne. Its mirror image, a word leaning back on the word before it (se, mi, je), is a zanaglasnica or enklitika.',
        },
        {
          type: 'type',
          q: 'Complete the rule: Naglasak koji ne stoji na početku riječi može biti samo ____. (the kind of accent — adjective, masculine)',
          answer: 'uzlazan',
          accept: ['uzlazni'],
          hint: 'The opposite of "silazan". The coach said there are two accents of this kind.',
          explanation:
            'Falling accents are restricted to the first syllable, so an accent on any later syllable must be rising (uzlazan): the second syllable of "restoran", the third of "matematika".',
        },
        {
          type: 'type',
          q: 'Length alone can change the word. Said short, "pas" is the animal; said long, it is the middle of the body: Hlače su mu preširoke u ____. (the same word, in the locative)',
          answer: 'pasu',
          hint: 'A masculine noun after "u" for a place: the usual locative ending.',
          explanation:
            'u pasu — at the waist. pas with a long falling accent is the waist (also a belt); with a short falling accent it is the dog (whose locative is psu, with a fleeting a). In writing only the context tells them apart.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'A one-syllable word such as "grad" can carry a rising accent.',
        answer: false,
        hint: 'A rising accent needs something after it to rise toward.',
        explanation:
          'False. In the standard accent system a one-syllable word can only have a falling accent, short or long. A rising accent always has at least one more syllable after it — which is the same fact as the rule that a polysyllabic word is not accented on its last syllable.',
      },
      9,
      {
        type: 'sort',
        q: 'Capitals show the stressed syllable. Is this stress possible in the standard language?',
        groups: ['Possible in the standard language', 'Not standard: stress on the last syllable'],
        items: [
          { hr: 'restoRAN', group: 1 },
          { hr: 'STUdent', group: 0 },
          { hr: 'asisTENT', group: 1 },
          { hr: 'teLEfon', group: 0 },
          { hr: 'dokuMENT', group: 1 },
          { hr: 'gimNAzija', group: 0 },
          { hr: 'prograMER', group: 1 },
        ],
        explanation:
          'A polysyllabic word is not accented on its last syllable in the standard language, so the stress of such loanwords moves one syllable back: resTOran, aSIStent, doKUment, proGRAmer. STUdent, teLEfon and gimNAzija already obey the rule.',
      },
      10,
      {
        type: 'match',
        q: 'Match each Croatian term to its description.',
        pairs: [
          ['kratkosilazni naglasak', 'short, with falling pitch'],
          ['dugosilazni naglasak', 'long, with falling pitch'],
          ['kratkouzlazni naglasak', 'short, with rising pitch'],
          ['dugouzlazni naglasak', 'long, with rising pitch'],
          ['zanaglasna duljina', 'a long syllable after the accented one'],
        ],
        explanation:
          'The names are built from the two dimensions: kratko- / dugo- (length) and -silazni / -uzlazni (pitch). zanaglasna duljina is not an accent at all but an unaccented long syllable that follows the accent, as in the last syllable of a genitive plural.',
      },
      11,
      0,
      {
        type: 'order',
        q: 'Put the words in order: "Falling accents stand only at the beginning of a word."',
        words: ['Silazni', 'naglasci', 'stoje', 'samo', 'na', 'početku', 'riječi.'],
        accept: [
          'Silazni naglasci samo na početku riječi stoje.',
          'Samo na početku riječi stoje silazni naglasci.',
          'Silazni naglasci stoje na početku riječi samo.',
        ],
        explanation:
          'Silazni naglasci stoje samo na početku riječi. — this one rule explains two things at once: why an accent inside a word is always rising, and why a falling accent jumps onto a proclitic that comes to stand before the word.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Length is marked with a small line above the vowel.")',
        words: ['Duljina', 'se', 'bilježi', 'crticom', 'iznad', 'samoglasnik.'],
        wrong: 5,
        answer: 'samoglasnika',
        hint: 'Ask "iznad čega?": this preposition has one case only.',
        explanation:
          'iznad samoglasnika — iznad takes the genitive. The small line (the macron) marks an unaccented long vowel in dictionaries and grammars; ordinary texts leave it out, as they leave out the accent marks.',
      },
      3,
      {
        type: 'transform',
        q: 'Put the phrase into the plural. (In speech the last syllable of the noun will now be long.)',
        from: 'kraj stare kuće',
        answer: 'kraj starih kuća',
        hint: 'The preposition keeps governing the same case; for this feminine noun that plural form ends in -a.',
        explanation:
          'kraj starih kuća — the genitive plural. In writing kuća looks like the nominative singular; in speech the genitive plural is told apart by its long final syllable (and here by a long accent as well).',
      },
      {
        type: 'listen',
        audio: 'Grad je sinoć potukao sav mladi luk u vrtu.',
        q: 'What happened last night?',
        options: [
          'The town tore down the young man’s arch in the garden',
          'The town was hit by a storm, and the garden arch collapsed',
          'Someone stole all the onions from the town garden',
          'Hail flattened all the spring onions in the garden',
        ],
        correct: 3,
        explanation:
          'Said with a short falling accent, grad is hail and luk is onion; with a long falling accent they would be a city and an arch. Here the verb potukao (battered) and the garden settle the meaning — and a native speaker also hears it in the length of the vowels.',
      },
      {
        type: 'dictate',
        audio: 'Naglasak se povlači prema početku riječi.',
        answer: 'Naglasak se povlači prema početku riječi.',
        hint: 'Six words: "The accent retreats toward the beginning of the word."',
        explanation:
          'povlačiti se prema + dative: the accent cannot stay on the last syllable of a polysyllabic word, so it moves back toward the beginning.',
      },
    ],
  },

  // ── Summarizing and paraphrase ─────────────────────────────────────────────
  'summarising-paraphrase': {
    text: {
      kind: 'text',
      title: 'Sat kasnije u školu',
      lines: [
        {
          who: 'Članak',
          hr: 'Sve više istraživanja pokazuje da adolescenti koji nastavu počinju u osam sati kronično ne spavaju dovoljno, jer se njihov biološki ritam u pubertetu pomiče prema kasnijim satima.',
          en: 'More and more research shows that adolescents who start classes at eight o’clock chronically do not get enough sleep, because in puberty their biological rhythm shifts toward later hours.',
        },
        {
          who: 'Članak',
          hr: 'U jednoj je riječkoj gimnaziji početak nastave prošle jeseni pokusno pomaknut na devet sati; nakon godinu dana izostanci s prvoga sata prepolovili su se, a prosječna je ocjena blago porasla.',
          en: 'At one high school in Rijeka the start of classes was moved to nine o’clock on a trial basis last fall; after a year, absences from first period had been cut in half, and the average grade had risen slightly.',
        },
        {
          who: 'Članak',
          hr: 'Ravnateljica, primjerice, rado spominje učenika koji je prije redovito spavao na matematici, a danas vodi školsku debatnu skupinu.',
          en: 'The principal, for example, likes to mention a student who used to sleep through math class regularly and today leads the school debate team.',
        },
        {
          who: 'Članak',
          hr: 'Protivnici promjene upozoravaju, međutim, da se kasnijim početkom nastava produljuje u poslijepodne, što otežava treninge, glazbenu školu i prijevoz učenika putnika.',
          en: 'Opponents of the change warn, however, that a later start extends classes into the afternoon, which makes sports practice, music school and transportation for commuting students more difficult.',
        },
        {
          who: 'Članak',
          hr: 'Kasniji bi početak stoga valjalo uvesti ondje gdje to dopušta organizacija prijevoza; jedan pokus, međutim, nije dovoljan za odluku na razini cijele zemlje.',
          en: 'A later start should therefore be introduced where the organization of transportation allows it; one trial, however, is not enough for a decision at the national level.',
        },
        {
          who: 'Mentorica',
          hr: 'Dorijane, sažmite mi taj članak u jednoj rečenici, i to tako da se vidi čije su tvrdnje.',
          en: 'Dorijan, summarize that article for me in one sentence, and in such a way that it is clear whose claims they are.',
        },
        {
          who: 'Student',
          hr: 'Kasniji početak nastave odličan je i treba ga odmah uvesti u sve škole, jer je jedan učenik prestao spavati na matematici.',
          en: 'A later start to classes is excellent and should be introduced in all schools immediately, because one student stopped sleeping in math class.',
        },
        {
          who: 'Mentorica',
          hr: 'U toj su rečenici tri pogreške: zadržali ste primjer, a ispustili tezu; autoričinu ste opreznu preporuku pretvorili u vlastiti sud; a prigovore protivnika niste ni spomenuli.',
          en: 'There are three mistakes in that sentence: you kept the example and dropped the thesis; you turned the author’s cautious recommendation into your own judgment; and you did not even mention the opponents’ objections.',
        },
        {
          who: 'Student',
          hr: 'Onda ovako: autorica smatra da pokus u jednoj gimnaziji upućuje na to da kasniji početak nastave smanjuje izostanke, ali da zbog prijevoza i poslijepodnevnih obveza nije svugdje provediv.',
          en: 'Then like this: the author believes that a trial at one high school suggests that a later start to classes reduces absences, but that because of transportation and afternoon commitments it is not feasible everywhere.',
        },
        {
          who: 'Mentorica',
          hr: 'To je već sažetak. Primijetite i da ste umjesto „izostanci su se prepolovili” napisali „smanjuje izostanke”: dobra parafraza ne mijenja samo riječi, nego i ustroj rečenice.',
          en: 'Now that is a summary. Notice, too, that instead of “absences were cut in half” you wrote “reduces absences”: a good paraphrase changes not only the words but the structure of the sentence as well.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what did the student’s first summary keep that a summary should be the first to drop?',
          options: [
            'The article’s thesis',
            'The example of the one student who used to fall asleep in math class',
            'The objections of the opponents',
            'The attribution to the author',
          ],
          correct: 1,
          hint: 'The mentor named three mistakes. One of them was about what he kept; the other two were about what he lost or changed.',
          explanation:
            'Zadržali ste primjer, a ispustili tezu. When shortening, examples go first, then qualifications, then supporting arguments; the claim and its main reason are kept to the last. He did the reverse — and also lost the attribution and the counter-arguments.',
        },
        {
          q: 'In his second attempt the student writes that the trial "upućuje na to da…", not that it "dokazuje da…". Why is that the right verb?',
          options: [
            'Because "dokazivati" is too colloquial for a summary',
            'Because "upućivati na" is the only verb that can be followed by a da-clause',
            'Because a summary must never contain a verb of proof',
            'Because one trial in one school is suggestive evidence at most, and the article itself says it is not enough for a general decision',
          ],
          correct: 3,
          hint: 'How strongly does the article itself state its conclusion? A summary may not be more certain than its source.',
          explanation:
            'A reporting verb has to match the strength of the source. The article says jedan pokus nije dovoljan — so the trial points to a conclusion (upućuje na) but does not prove it (dokazuje). Overstating the source is as much an error as misquoting it.',
        },
        {
          type: 'type',
          q: 'Paraphrase by turning the verb into a noun: „Izostanci su se smanjili.” → Došlo je do ____ izostanaka. (the verbal noun of smanjiti)',
          answer: 'smanjenja',
          hint: 'A noun in -nje made from the verb; after "do" it stands in the genitive.',
          explanation:
            'Došlo je do smanjenja izostanaka. — verb → noun is one of the basic paraphrasing moves: smanjiti → smanjenje. The old subject (izostanci) becomes a genitive that depends on the new noun.',
        },
        {
          type: 'transform',
          q: 'Condense the time clause into a phrase with a noun: "Nakon što…" becomes "Nakon" + genitive.',
          from: 'Nakon što je pokus završio, izostanci su se prepolovili.',
          answer: 'Nakon završetka pokusa izostanci su se prepolovili.',
          accept: [
            'Nakon završetka pokusa, izostanci su se prepolovili.',
            'Nakon završetka pokusa prepolovili su se izostanci.',
            'Izostanci su se nakon završetka pokusa prepolovili.',
            'Izostanci su se prepolovili nakon završetka pokusa.',
            'Nakon pokusa izostanci su se prepolovili.',
            'Nakon pokusa prepolovili su se izostanci.',
            'Izostanci su se prepolovili nakon pokusa.',
          ],
          hint: 'The noun that belongs to "završiti" is not made with -nje. The old subject of the clause follows it in the genitive.',
          explanation:
            'Nakon završetka pokusa… — clause → phrase: the verb je završio becomes the noun završetak (genitive završetka after nakon), and its subject pokus becomes the genitive pokusa. The sentence loses a clause and gains density.',
        },
        {
          type: 'transform',
          q: 'Paraphrase by switching to the passive, so that the principal disappears. Begin with "Pokus…".',
          from: 'Ravnateljica je produljila pokus za još jednu godinu.',
          answer: 'Pokus je produljen za još jednu godinu.',
          accept: [
            'Pokus je produžen za još jednu godinu.',
            'Pokus je bio produljen za još jednu godinu.',
            'Pokus se produljio za još jednu godinu.',
          ],
          hint: 'The object becomes the subject, and the participle changes from active to passive, agreeing with a masculine noun.',
          explanation:
            'Pokus je produljen za još jednu godinu. — active → passive: the object pokus becomes the subject, and the active participle produljila gives way to the passive participle produljen, which agrees with it.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Replacing a few words of the source sentence with synonyms, while keeping its structure, is enough to make a good paraphrase.',
        answer: false,
        hint: 'Recall what the mentor praised in the student’s second attempt, besides the new words.',
        explanation:
          'False. A sentence with a few synonyms swapped in is still the source’s sentence. A real paraphrase also rebuilds the structure: a verb becomes a noun, a clause becomes a phrase, an active sentence becomes passive — and the claim stays attributed.',
      },
      9,
      {
        type: 'sort',
        q: 'Whose voice is it?',
        groups: ['Attributed to a source', 'Presented as the writer’s own claim'],
        items: [
          { hr: 'Autor tvrdi da cijene rastu.', group: 0 },
          { hr: 'Jasno je da cijene rastu.', group: 1 },
          { hr: 'Prema izvješću, cijene rastu.', group: 0 },
          { hr: 'Cijene, dakako, rastu.', group: 1 },
          { hr: 'Kako ističe autorica, cijene rastu.', group: 0 },
          { hr: 'Svi znamo da cijene rastu.', group: 1 },
          { hr: 'Po mišljenju stručnjaka, cijene rastu.', group: 0 },
        ],
        explanation:
          'Autor tvrdi da…, Prema…, Kako ističe…, Po mišljenju… all mark the claim as somebody else’s. Jasno je, dakako and Svi znamo make the writer vouch for it personally — in a summary, that turns the source’s claim into your own.',
      },
      10,
      {
        type: 'match',
        q: 'Clause into phrase: match each clause to the phrase that condenses it.',
        pairs: [
          ['prije nego što je otišao', 'prije odlaska'],
          ['kad se vratio', 'po povratku'],
          ['zato što je bio bolestan', 'zbog bolesti'],
          ['iako je padala kiša', 'unatoč kiši'],
          ['ako zakasnite', 'u slučaju kašnjenja'],
        ],
        explanation:
          'Each conjunction has a matching preposition: prije nego što → prije, kad → po (+ locative), zato što → zbog, iako → unatoč (+ dative), ako → u slučaju. The verb of the clause becomes a noun, and the sentence becomes shorter and denser.',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "The article is about a new traffic law."',
        words: ['U', 'članku', 'je', 'riječ', 'o', 'novom', 'zakonu', 'o', 'prometu.'],
        accept: [
          'Riječ je u članku o novom zakonu o prometu.',
          'U članku riječ je o novom zakonu o prometu.',
        ],
        explanation:
          'U članku je riječ o novom zakonu o prometu. — riječ je o + locative is the neutral opener for saying what a text is about; the clitic je stands in second position, after the first phrase.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("The article points to the conclusion that the measure works.")',
        words: ['Članak', 'upućuje', 'na', 'zaključku', 'da', 'mjera', 'djeluje.'],
        wrong: 3,
        answer: 'zaključak',
        hint: 'This verb points TOWARD something. Which case does "na" take when it shows direction?',
        explanation:
          'upućivati na + accusative: Članak upućuje na zaključak da… The locative (na zaključku) would answer "where?", but the verb expresses direction — pointing the reader to a conclusion without claiming to have proved it.',
      },
      0,
      {
        type: 'transform',
        q: 'Paraphrase with a verbal noun in place of the clause. Keep "Autor predlaže".',
        from: 'Autor predlaže da se uvedu nove mjere.',
        answer: 'Autor predlaže uvođenje novih mjera.',
        hint: 'The verb of the clause becomes a noun in -nje, and what used to be its subject follows it in the genitive.',
        explanation:
          'Autor predlaže uvođenje novih mjera. — clause → noun phrase: uvesti → uvođenje (built on the imperfective uvoditi), and nove mjere becomes the genitive novih mjera. This is how summaries and academic prose condense.',
      },
      {
        type: 'listen',
        audio:
          'Ukratko, autor smatra da će gradovi bez automobila biti zdraviji, ali priznaje da za to još nema dovoljno dokaza.',
        q: 'How does the speaker sum up the author’s position?',
        options: [
          'The author has proved that cities without cars are healthier',
          'The author thinks cities without cars will be healthier, but admits there is not yet enough evidence',
          'The author thinks cars make cities healthier',
          'The speaker himself believes there is enough evidence',
        ],
        correct: 1,
        explanation:
          'Ukratko announces a summary; autor smatra and priznaje keep both the claim and its limitation attributed to the author. The summary is no more certain than its source.',
      },
      {
        type: 'dictate',
        audio: 'Riječ je o tome da nitko ne želi platiti.',
        answer: 'Riječ je o tome da nitko ne želi platiti.',
        hint: 'Nine words: "The point is that nobody wants to pay."',
        explanation:
          'riječ je o tome da… — when what the matter is about is a whole clause, o takes the pronoun tome (locative) and the clause follows with da.',
      },
    ],
  },

  // ── Academic writing ───────────────────────────────────────────────────────
  'academic-writing': {
    text: {
      kind: 'dialogue',
      title: 'Konzultacije uoči predaje seminarskoga rada',
      lines: [
        {
          who: 'Nika',
          hr: 'Evo kako počinje moj nacrt: „U ovom ću radu dokazati da djeca koja odrastaju s dva jezika uvijek uče brže od jednojezične djece.”',
          en: 'Here is how my draft begins: “In this paper I will prove that children who grow up with two languages always learn faster than monolingual children.”',
        },
        {
          who: 'Profesorica',
          hr: 'Nika, u toj su jednoj rečenici tri navike koje u hrvatskom znanstvenom stilu valja napustiti: prvo lice jednine, glagol „dokazati” i prilog „uvijek”.',
          en: 'Nika, in that one sentence there are three habits that should be given up in Croatian academic style: the first person singular, the verb “to prove,” and the adverb “always.”',
        },
        {
          who: 'Nika',
          hr: 'Ali ja doista mislim da je tako, a na engleskom su nas učili da pišemo „I argue”.',
          en: 'But I really do think that is so, and in English we were taught to write “I argue.”',
        },
        {
          who: 'Profesorica',
          hr: 'Hrvatski rad radije govori bezlično ili u množini skromnosti: „u radu se razmatra”, „pretpostavljamo”. A tvrdnju ne smijete iznijeti jačom nego što to podaci dopuštaju.',
          en: 'A Croatian paper prefers to speak impersonally or in the plural of modesty: “the paper examines,” “we assume.” And you must not state a claim more strongly than the data allow.',
        },
        {
          who: 'Nika',
          hr: 'Onda ovako: „U radu se razmatra pretpostavka da dvojezična djeca u nekim zadacima postižu bolje rezultate od jednojezičnih vršnjaka.”',
          en: 'Then like this: “The paper examines the assumption that bilingual children achieve better results than their monolingual peers on some tasks.”',
        },
        {
          who: 'Profesorica',
          hr: 'To je već znanstvena rečenica. Sada mi recite odakle Vam ta pretpostavka: je li Vaša ili ste je negdje pročitali?',
          en: 'Now that is an academic sentence. Now tell me where you got that assumption: is it yours, or did you read it somewhere?',
        },
        {
          who: 'Nika',
          hr: 'Pročitala sam je u Horvatovoj studiji iz 2019., ali je nisam navela, jer sam je prepričala svojim riječima.',
          en: 'I read it in Horvat’s 2019 study, but I did not cite it, because I retold it in my own words.',
        },
        {
          who: 'Profesorica',
          hr: 'I prepričana se misao mora pripisati autoru. Napišite: „Kako ističe Horvat (2019), prednost se očituje ponajprije u zadacima pozornosti”, pa tek onda dodajte vlastito zapažanje.',
          en: 'A retold idea, too, must be attributed to its author. Write: “As Horvat (2019) points out, the advantage shows itself primarily in attention tasks,” and only then add your own observation.',
        },
        {
          who: 'Nika',
          hr: 'A zaključak? Moj uzorak ima samo dvadeset ispitanika, pa ne znam smijem li išta tvrditi.',
          en: 'And the conclusion? My sample has only twenty participants, so I do not know whether I may claim anything at all.',
        },
        {
          who: 'Profesorica',
          hr: 'Smijete, ali s ogradom: „Dobiveni rezultati upućuju na moguću prednost dvojezične djece; s obzirom na malen uzorak, valja ih, međutim, tumačiti oprezno.”',
          en: 'You may, but with a hedge: “The results obtained point to a possible advantage for bilingual children; given the small sample, however, they should be interpreted with caution.”',
        },
        {
          who: 'Nika',
          hr: 'Dakle: manje „ja”, manje „uvijek”, a više „prema”, „valja” i „moguće”. Zvuči skromnije, ali, priznajem, i uvjerljivije.',
          en: 'So: less “I,” less “always,” and more “according to,” “one should” and “possibly.” It sounds more modest but, I admit, more convincing too.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which three things in Nika’s opening sentence did the professor tell her to give up?',
          options: [
            'The passive, the long sentence and the foreign words',
            'The citation, the hedge and the impersonal "se"',
            'The first person singular, the verb "dokazati" and the adverb "uvijek"',
            'The future tense, the word "djeca" and the comparison',
          ],
          correct: 2,
          hint: 'One concerned who is speaking, one the strength of the claim, and one its scope.',
          explanation:
            'Prvo lice jednine (ću), dokazati (a claim of proof) and uvijek (a claim without exceptions). Croatian academic style prefers the impersonal or the modest plural, verbs that do not overstate the evidence, and claims limited to what the data cover.',
        },
        {
          q: 'Nika retold Horvat’s idea in her own words. Why must she cite him all the same?',
          options: [
            'Because attribution concerns where an idea comes from, not whose wording it is: an unattributed borrowed claim reads as her own',
            'Because a paraphrase is allowed only inside quotation marks',
            'Because every sentence of a seminar paper has to end with a source in parentheses',
            'Because the professor personally knows Horvat',
          ],
          correct: 0,
          hint: 'The professor’s answer was a single sentence about a "prepričana misao".',
          explanation:
            'I prepričana se misao mora pripisati autoru. Changing the wording changes nothing about whose idea it is; without "Kako ističe Horvat (2019)" the reader cannot tell where the source ends and Nika begins.',
        },
        {
          type: 'type',
          q: 'State the conclusion in the plural of modesty: Iz dobivenih rezultata ____ zaključiti da prednost postoji u nekim zadacima. (we can — moći)',
          answer: 'možemo',
          hint: 'Not "I" but the modest "we": the first person plural of the modal verb.',
          explanation:
            'Iz dobivenih rezultata možemo zaključiti… — the author’s "we" (množina skromnosti) is the usual way for a single author to speak in a Croatian paper. The impersonal može se zaključiti would do the same job.',
        },
        {
          type: 'transform',
          q: 'Remove the first person: say the same impersonally with "se", keeping the verb and the tense.',
          from: 'U drugom poglavlju opisujem metodologiju.',
          answer: 'U drugom se poglavlju opisuje metodologija.',
          accept: [
            'U drugom poglavlju opisuje se metodologija.',
            'U drugom poglavlju se opisuje metodologija.',
            'Metodologija se opisuje u drugom poglavlju.',
          ],
          hint: 'Two things change besides the added short word: the person of the verb, and the case of what used to be its object.',
          explanation:
            'U drugom se poglavlju opisuje metodologija. — in the se-passive the former object becomes the subject, in the nominative (metodologija), and the verb agrees with it in the third person. Leaving it in the accusative (metodologiju) is not standard.',
        },
        {
          type: 'type',
          q: 'Attribute the claim with a neutral reporting verb: Kako ____ Horvat (2019), prednost nije stalna. (claims — tvrditi)',
          answer: 'tvrdi',
          hint: 'A finite verb in the present, third person singular; in this frame it comes before the author’s name.',
          explanation:
            'Kako tvrdi Horvat (2019)… — the citation frame is kako + a reporting verb + the author. The choice of verb is itself a comment: tvrdi (asserts) keeps the writer at a distance, ističe (points out) signals agreement, pokazuje (shows) accepts the evidence.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In a Croatian research paper, explicit signposting such as "U prvom dijelu rada… U drugom dijelu…" is considered clumsy and is best avoided.',
        answer: false,
        hint: 'Compare the convention with what you may have been taught about English papers.',
        explanation:
          'False. Croatian academic prose signposts more heavily than English: announcing what each part of the paper does is expected and reads as orderly, not as over-explaining.',
      },
      9,
      {
        type: 'sort',
        q: 'Cautious or overstated?',
        groups: ['Hedged — claims no more than the data allow', 'Overstated — claims certainty'],
        items: [
          { hr: 'Rezultati upućuju na povezanost.', group: 0 },
          { hr: 'Rezultati nedvojbeno dokazuju povezanost.', group: 1 },
          { hr: 'Može se pretpostaviti da dob ima ulogu.', group: 0 },
          { hr: 'Dob je, naravno, jedini uzrok.', group: 1 },
          { hr: 'Po svemu sudeći, uzorak je premalen.', group: 0 },
          { hr: 'Svi stručnjaci znaju da je tako.', group: 1 },
        ],
        explanation:
          'upućuju na, može se pretpostaviti and po svemu sudeći leave room for doubt. nedvojbeno dokazuju, naravno, jedini and svi… znaju claim a certainty that a single study can hardly justify — a reviewer would mark them.',
      },
      10,
      {
        type: 'match',
        q: 'Match each signpost to the job it does in a paper.',
        pairs: [
          ['Cilj je rada…', 'states what the paper sets out to do'],
          ['Valja napomenuti da…', 'adds a caveat or a side remark'],
          ['Iz navedenog proizlazi da…', 'draws a conclusion from what has been said'],
          ['Za razliku od prethodnih istraživanja…', 'contrasts the paper with earlier work'],
          ['Kako ističe Horvat (2019)…', 'attributes a claim to a source'],
        ],
        explanation:
          'These formulas are the skeleton of a Croatian paper: aim, caveat, inference, contrast, attribution. They are impersonal by design — none of them contains "ja".',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "It should be noted that the sample is small."',
        words: ['Valja', 'napomenuti', 'da', 'je', 'uzorak', 'malen.'],
        accept: ['Valja napomenuti da je malen uzorak.'],
        explanation:
          'Valja napomenuti da je uzorak malen. — valja + infinitive is an impersonal "one should"; it has no subject and never changes for person. malen is an indefinite adjective in the predicate.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Given the size of the sample, the conclusion is premature.")',
        words: ['S', 'obzirom', 'na', 'veličini', 'uzorka,', 'zaključak', 'je', 'preuranjen.'],
        wrong: 3,
        answer: 'veličinu',
        hint: 'In this fixed expression "na" does not answer the question "gdje?".',
        explanation:
          's obzirom na + accusative: s obzirom na veličinu uzorka. Compare na temelju + genitive, where na takes the locative of temelj and the noun that follows depends on temelju — two academic formulas with na, and two different cases.',
      },
      0,
      {
        type: 'transform',
        q: 'Rebuild the attribution with "Prema…": the reporting verb disappears, and the author changes case.',
        from: 'Horvat ističe da je uzorak premalen.',
        answer: 'Prema Horvatu, uzorak je premalen.',
        accept: [
          'Prema Horvatu uzorak je premalen.',
          'Prema Horvatu, premalen je uzorak.',
          'Uzorak je, prema Horvatu, premalen.',
          'Uzorak je prema Horvatu premalen.',
          'Prema Horvatu je uzorak premalen.',
        ],
        hint: 'The surname declines like any masculine noun; the da-clause becomes the main clause.',
        explanation:
          'Prema Horvatu, uzorak je premalen. — prema + dative attributes a claim without a reporting verb, so it is the most neutral frame: it says whose claim it is and nothing about what the writer thinks of it.',
      },
      {
        type: 'listen',
        audio:
          'Iz navedenog proizlazi da se dobiveni rezultati ne mogu poopćiti, jer je istraživanje provedeno na malom i neslučajnom uzorku.',
        q: 'What does the author conclude?',
        options: [
          'The results apply to the whole population',
          'The research should be repeated on the same sample',
          'The results cannot be generalized, because the sample was small and not random',
          'The results were obtained by chance and are worthless',
        ],
        correct: 2,
        explanation:
          'Iz navedenog proizlazi da… draws the inference; ne mogu se poopćiti — cannot be generalized; je provedeno — a passive (agreeing with istraživanje) that leaves the researcher out. A limitation stated this plainly strengthens a paper.',
      },
      {
        type: 'dictate',
        audio: 'Rezultate valja tumačiti oprezno.',
        answer: 'Rezultate valja tumačiti oprezno.',
        hint: 'Four words: "The results should be interpreted with caution."',
        explanation:
          'valja + infinitive, with no subject: rezultate is the object of tumačiti, in the accusative. One short impersonal sentence, and the whole claim is hedged.',
      },
    ],
  },
};
