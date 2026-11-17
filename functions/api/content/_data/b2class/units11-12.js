// ─── B2 lessons in class order — Units 11–12 (lessons 51–60) ─────────────────
// Same shape and rules as the A1, A2 and B1 class files (a1class/, a2class/, b1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1, the B2 lessons before each lesson, and the lesson itself
// have taught. The genitive is obligatory after nema / nije bilo / neće biti; after
// an ordinary negated verb the accusative is standard too and is never marked wrong.
// A verbal adverb shares its subject with the main verb. Reported speech keeps the
// tense of the original words. Vi / Vas / Vam take a capital for ONE person
// addressed politely. Existing typed items whose answer is a small word (ni, nije,
// nego, je, što) or one of the lesson's own key words open their mix, so that
// nothing printed earlier gives the answer away.

export const CLASS_B2_U11_12 = {
  // ══ UNIT 11 ════════════════════════════════════════════════════════════════

  // ── The genitive of negation ───────────────────────────────────────────────
  'genitive-of-negation': {
    text: {
      kind: 'dialogue',
      title: 'Vikend bez struje',
      lines: [
        {
          who: 'Petra',
          hr: 'Kako je bilo na Visu? Čula sam da je nakon oluje cijeli otok ostao bez struje.',
          en: 'How was Vis? I heard that after the storm the whole island was left without electricity.',
        },
        {
          who: 'Luka',
          hr: 'Ne pitaj. Dva dana nije bilo ni struje ni vode, a u jedinoj trgovini kruha nije bilo već u subotu ujutro.',
          en: 'Don’t ask. For two days there was neither electricity nor water, and in the only store there was no bread as early as Saturday morning.',
        },
        {
          who: 'Petra',
          hr: 'Zar se niste mogli jednostavno vratiti ranijim trajektom?',
          en: 'Couldn’t you simply have come back on an earlier ferry?',
        },
        {
          who: 'Luka',
          hr: 'Trajekta nije bilo do ponedjeljka — zbog vjetra nije isplovio nijedan brod. A signala ondje nema ni kad je vrijeme lijepo.',
          en: 'There was no ferry until Monday — because of the wind not a single boat sailed. And there is no signal there even when the weather is nice.',
        },
        {
          who: 'Petra',
          hr: 'Znači, zato nisam dobila nikakvog odgovora na poruke! Već sam mislila da se ljutiš.',
          en: 'So that is why I got no answer at all to my messages! I was beginning to think you were angry.',
        },
        {
          who: 'Luka',
          hr: 'Nisam imao pojma da si pisala. Mobitel sam upalio tek sinoć, na trajektu.',
          en: 'I had no idea you had written. I only turned my phone on last night, on the ferry.',
        },
        {
          who: 'Petra',
          hr: 'I što ste radili dva dana bez ičega?',
          en: 'And what did you do for two days without anything?',
        },
        {
          who: 'Luka',
          hr: 'Iskreno, nije bilo loše. Navečer na rivi nije bilo ni žive duše, pa smo sjedili uz svijeće i razgovarali — nitko nije gledao u mobitel.',
          en: 'Honestly, it wasn’t bad. In the evening there was not a living soul on the waterfront, so we sat by candlelight and talked — nobody was looking at a phone.',
        },
        {
          who: 'Petra',
          hr: 'Zvuči gotovo romantično. Znači da ti nestašica i nije tako teško pala?',
          en: 'That sounds almost romantic. So the shortage wasn’t that hard on you after all?',
        },
        {
          who: 'Luka',
          hr: 'Nije. Ali sljedeći put nosim punu torbu hrane: strpljenja imam, ali gladan nemam smisla za romantiku.',
          en: 'It wasn’t. But next time I am bringing a full bag of food: I have patience, but when I am hungry I have no feel for romance.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what exactly was missing on the island?',
          options: [
            'Water and bread, but the electricity came back after an hour',
            'Electricity and water for two days, bread in the store, and a ferry until Monday',
            'Only the phone signal — everything else worked',
            'Candles and food, because the store was closed all weekend',
          ],
          correct: 1,
          hint: 'Luka lists two things for the house, one for the table and one for the way home.',
          explanation:
            'Dva dana nije bilo ni struje ni vode, kruha nije bilo već u subotu, a trajekta nije bilo do ponedjeljka. The signal is missing there even in good weather.',
        },
        {
          q: 'Luka says "Trajekta nije bilo do ponedjeljka", not "Trajekt nije bio". Why this form?',
          options: [
            'Because every object of a negated verb must go into the genitive',
            'Because in a "there was no…" sentence the missing thing is not the subject: it stands in the genitive and the verb freezes in the neuter singular',
            'Because Luka is talking about several ferries',
            'Because the preposition do puts the whole sentence into the genitive',
          ],
          correct: 1,
          hint: 'Ask what the verb agrees with. Is anything in the sentence in the nominative?',
          explanation:
            'The past of nema is nije bilo: nothing is the subject, so the verb stays neuter singular and the missing thing is in the genitive. Do governs only ponedjeljka.',
        },
        {
          type: 'type',
          q: 'Now you. On Sunday the store shelves were just as empty: U trgovini nije bilo ____. (mlijeko)',
          answer: 'mlijeka',
          hint: 'The missing thing takes the same case after nije bilo as after nema — here a neuter noun in -o.',
          explanation:
            'U trgovini nije bilo mlijeka. — whatever is not there stands in the genitive, and the verb does not agree with it.',
        },
        {
          type: 'transform',
          q: 'Luka describes today. Say the same thing about TOMORROW.',
          from: 'Danas nema signala.',
          answer: 'Sutra neće biti signala.',
          accept: [
            'Neće biti signala sutra.',
            'Sutra signala neće biti.',
            'Signala sutra neće biti.',
          ],
          hint: 'The future of nema is two words. The missing thing keeps its case.',
          explanation:
            'Sutra neće biti signala. — nema, nije bilo and neće biti are one verb in three tenses, and all three take the genitive.',
        },
        {
          type: 'transform',
          q: 'In summer the waterfront is full. Say the opposite: there were NO tourists there.',
          from: 'Na rivi su bili turisti.',
          answer: 'Na rivi nije bilo turista.',
          accept: [
            'Nije bilo turista na rivi.',
            'Turista na rivi nije bilo.',
            'Na rivi turista nije bilo.',
          ],
          hint: 'Two things change: the verb stops agreeing with the tourists, and the tourists leave the nominative plural.',
          explanation:
            'Na rivi nije bilo turista. — su bili agreed with a subject; once they are missing there is no subject: neuter singular verb, genitive plural noun.',
        },
      ],
    },
    mix: [
      9,
      8,
      {
        type: 'sort',
        q: 'In which sentences is the genitive the ONLY possible case, and in which could the accusative stand just as well?',
        groups: ['Only the genitive is possible', 'The accusative is standard here too'],
        items: [
          { hr: 'Nema kruha.', group: 0 },
          { hr: 'Ne vidim razloga.', group: 1 },
          { hr: 'Nije bilo vremena.', group: 0 },
          { hr: 'Nisu našli izlaza.', group: 1 },
          { hr: 'Neće biti koncerta.', group: 0 },
          { hr: 'Ne pamtim takve zime.', group: 1 },
        ],
        explanation:
          'After nema, nije bilo and neće biti there is no choice. After an ordinary negated verb the genitive is the more emphatic, more written option: Ne vidim razlog, Nisu našli izlaz and Ne pamtim takvu zimu are equally standard.',
      },
      10,
      {
        type: 'match',
        q: 'Fixed phrases of "not being there". Match each to what the speaker means.',
        pairs: [
          ['Nemam pojma.', 'I don’t know at all.'],
          ['Nema veze.', 'It doesn’t matter.'],
          ['Nema šanse.', 'That is impossible.'],
          ['Od njega nema ni traga ni glasa.', 'He has vanished and nobody has heard from him.'],
          ['Nije bilo ni žive duše.', 'The place was completely empty.'],
        ],
        explanation:
          'All five are frozen in the genitive: pojma, veze, šanse, traga, glasa, duše. They are learned whole — nobody builds them from a rule while speaking.',
      },
      11,
      {
        type: 'tf',
        q: '"Nisam pročitao tu knjigu" is a mistake: after a negated verb the object must be in the genitive.',
        answer: false,
        hint: 'Is anything "not there" in this sentence — or is somebody simply not doing something to a particular book?',
        explanation:
          'False. With a definite, concrete object the accusative is the normal standard choice. The genitive is compulsory only in the "there is no" pattern: nema, nije bilo, neće biti.',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "There was not a single free seat on the train."',
        words: ['U', 'vlaku', 'nije', 'bilo', 'nijednog', 'slobodnog', 'mjesta.'],
        accept: [
          'Nije bilo nijednog slobodnog mjesta u vlaku.',
          'U vlaku nijednog slobodnog mjesta nije bilo.',
          'Nijednog slobodnog mjesta nije bilo u vlaku.',
          'Nijednog slobodnog mjesta u vlaku nije bilo.',
        ],
        explanation:
          'U vlaku nije bilo nijednog slobodnog mjesta. — nijednog and slobodnog agree with mjesta in the genitive singular, and the verb stays nije bilo.',
      },
      12,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("According to the forecast, there will be no snow tomorrow.")',
        words: ['Prema', 'prognozi,', 'sutra', 'neće', 'biti', 'snijeg.'],
        wrong: 5,
        answer: 'snijega',
        hint: 'The future of nema treats the missing thing exactly as nema does.',
        explanation:
          'Prema prognozi, sutra neće biti snijega. — after neće biti the thing that will be missing is in the genitive, never the nominative.',
      },
      5,
      {
        type: 'transform',
        q: 'Say it the "he is not there" way: use nema, and replace Marko with a short pronoun.',
        from: 'Marko nije na poslu.',
        answer: 'Nema ga na poslu.',
        accept: ['Na poslu ga nema.', 'Njega nema na poslu.', 'Njega na poslu nema.'],
        hint: 'The absent person goes into the genitive. A short pronoun cannot open the sentence, so the verb does.',
        explanation:
          'Nema ga na poslu. — a person who is absent is treated like anything else that is missing: the genitive. The short form follows the verb; at the start it would have to be the long one.',
      },
      4,
      {
        type: 'listen',
        audio: 'U cijelom kvartu od jutra nema vode, a majstora neće biti do sutra.',
        q: 'What is the situation?',
        options: [
          'The water came back this morning, and the repairman has left',
          'There has been no water since the morning, and the repairman will not come until tomorrow',
          'There will be no water tomorrow because the repairman is coming',
          'The repairman has been in the neighborhood since the morning',
        ],
        correct: 1,
        explanation:
          'od jutra nema vode — no water since the morning; majstora neće biti do sutra — the repairman "will not be there" until tomorrow. A person, too, goes into the genitive.',
      },
      {
        type: 'dictate',
        audio: 'Na otoku cijeli dan nije bilo vode.',
        answer: 'Na otoku cijeli dan nije bilo vode.',
        hint: 'Seven words: "There was no water on the island all day."',
        explanation:
          'Na otoku cijeli dan nije bilo vode. — the past of nema: a frozen nije bilo and the missing thing in the genitive.',
      },
    ],
  },

  // ── Negation, advanced ─────────────────────────────────────────────────────
  'negation-advanced': {
    text: {
      kind: 'dialogue',
      title: 'Tko nije platio internet?',
      lines: [
        {
          who: 'Nika',
          hr: 'Vedrane, jutros su nam isključili internet. Nisi li ti trebao platiti račun?',
          en: 'Vedran, they cut off our internet this morning. Weren’t you supposed to pay the bill?',
        },
        {
          who: 'Vedran',
          hr: 'Nisam ja trebao platiti račun, nego Borna. Ja sam platio struju i vodu.',
          en: 'It wasn’t me who was supposed to pay the bill, it was Borna. I paid the electricity and the water.',
        },
        {
          who: 'Nika',
          hr: 'Borna tvrdi da mu nitko ništa nije rekao. Ni ti ni ja nismo ga podsjetili, a on sam nipošto ne bi provjerio.',
          en: 'Borna claims that nobody told him anything. Neither you nor I reminded him, and he would by no means have checked on his own.',
        },
        {
          who: 'Vedran',
          hr: 'Zar mu stvarno treba podsjetnik za jedan jedini račun? Za to nema nikakvog opravdanja.',
          en: 'Does he really need a reminder for one single bill? There is no excuse whatsoever for that.',
        },
        {
          who: 'Nika',
          hr: 'Slažem se. Ne samo da je zaboravio, nego je i otišao na put a da nam nije ostavio novac.',
          en: 'I agree. Not only did he forget, he also went off on a trip without leaving us the money.',
        },
        {
          who: 'Vedran',
          hr: 'Tipično. Prošli mjesec nije na vrijeme platio ni stanarinu ni režije.',
          en: 'Typical. Last month he paid neither the rent nor the utilities on time.',
        },
        {
          who: 'Nika',
          hr: 'Ne kažem da je to učinio namjerno, niti mislim da je loš cimer — samo je neorganiziran.',
          en: 'I am not saying he did it on purpose, nor do I think he is a bad roommate — he is just disorganized.',
        },
        {
          who: 'Vedran',
          hr: 'Dobro, ali ovako više nikako ne ide. Predlažem da odsad ništa ne plaćamo a da to ne zapišemo u zajedničku tablicu.',
          en: 'Fine, but it really can’t go on like this. I suggest that from now on we pay nothing without writing it down in a shared spreadsheet.',
        },
        {
          who: 'Nika',
          hr: 'Može. I da ne bude zabune: ovaj mjesec internet ne plaćam ja!',
          en: 'Deal. And so that there is no confusion: this month it is not me who pays for the internet!',
        },
        {
          who: 'Vedran',
          hr: 'Ni ja. Zvat ću Bornu čim sleti.',
          en: 'Me neither. I will call Borna as soon as he lands.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who was supposed to pay for the internet, and what did he do instead?',
          options: [
            'Vedran — he paid the electricity and the water instead',
            'Nika — she forgot because nobody reminded her',
            'Borna — he forgot, and left on a trip without leaving the money',
            'Borna — he paid the rent instead of the internet',
          ],
          correct: 2,
          hint: 'The culprit is not in the room. He is, in fact, on a plane.',
          explanation:
            'Vedran paid the electricity and the water; the internet bill was Borna’s. Ne samo da je zaboravio, nego je i otišao na put a da nam nije ostavio novac.',
        },
        {
          q: 'Vedran answers "Nisam ja trebao platiti račun", not simply "Nisam trebao platiti račun". What does the word ja, placed right after the negated verb, do?',
          options: [
            'Nothing — it is only there for politeness',
            'It denies that the bill had to be paid at all',
            'It narrows the denial to the person: somebody had to pay, but not he',
            'It turns the sentence into a question',
          ],
          correct: 2,
          hint: 'What comes after the comma in his sentence? That tells you which part he is correcting.',
          explanation:
            'A stressed word placed right after the negated verb becomes the thing denied. With ja there, the paying is not in doubt — only who owed it: … nego Borna.',
        },
        {
          type: 'type',
          q: 'Now you. Say that neither roommate was at home when the bill arrived: Ni Vedran ni Nika ____ bili kod kuće.',
          answer: 'nisu',
          hint: 'After ni… ni the verb still carries its own negation — and two people need the plural.',
          explanation:
            'Ni Vedran ni Nika nisu bili kod kuće. — Croatian keeps the double negative: ni before each person, and the verb negated as well.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one: he left the apartment WITHOUT locking the door.',
          from: 'Izašao je iz stana. Nije zaključao vrata.',
          answer: 'Izašao je iz stana a da nije zaključao vrata.',
          accept: [
            'Iz stana je izašao a da nije zaključao vrata.',
            'Izašao je iz stana a da vrata nije zaključao.',
          ],
          hint: 'Croatian has no "without doing": it uses a small clause that opens with two short words and keeps its verb negated.',
          explanation:
            'Izašao je iz stana a da nije zaključao vrata. — a da + a negated verb is the standard way to say "without doing something".',
        },
        {
          type: 'transform',
          q: 'Make the second fault the stronger point: join the sentences with "not only… but also". Begin: Ne samo da…',
          from: 'Borna kasni s računima. Zaboravlja i ključeve.',
          answer: 'Ne samo da kasni s računima, nego i zaboravlja ključeve.',
          accept: [
            'Ne samo da Borna kasni s računima, nego i zaboravlja ključeve.',
            'Ne samo da kasni s računima, nego zaboravlja i ključeve.',
            'Ne samo da Borna kasni s računima, nego zaboravlja i ključeve.',
            'Ne samo da kasni s računima, nego i ključeve zaboravlja.',
          ],
          hint: 'After a negative opening the turn is not made with ali — and i marks what is added.',
          explanation:
            'Ne samo da kasni s računima, nego i zaboravlja ključeve. — the first half grants the known point, the second adds the one you want heard. After a negation the contrast word is nego.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'match',
        q: 'Match each word or pattern to what it does.',
        pairs: [
          ['nipošto', 'the strongest refusal: "absolutely not"'],
          ['nijedan', 'counts down to zero: "not a single one"'],
          ['niti', 'adds one more denial, in a more formal style: "nor"'],
          ['a da ne…', 'builds "without doing something"'],
          ['zar ne?', 'a tag that asks the listener to agree'],
        ],
        explanation:
          'nipošto refuses flatly, nijedan denies each countable one, niti joins a further denial, a da ne… gives Croatian its "without doing", and zar ne? invites a yes.',
      },
      7,
      {
        type: 'tf',
        q: '"Zar ne znaš da je Borna otputovao?" — the speaker is surprised: she assumed you knew.',
        answer: true,
        hint: 'Compare it with the plain question "Znaš li da je Borna otputovao?" What does the first word add?',
        explanation:
          'True. zar colors a question with surprise or doubt: the speaker expected the opposite of what she now suspects.',
      },
      8,
      6,
      {
        type: 'sort',
        q: 'What exactly is denied? Look at the word right after the negated verb.',
        groups: ['Somebody did it — but not this person', 'The action itself did not happen'],
        items: [
          { hr: 'Nisam ja zvao.', group: 0 },
          { hr: 'Nisam zvao.', group: 1 },
          { hr: 'Nije ona kasnila.', group: 0 },
          { hr: 'Nije kasnila.', group: 1 },
          { hr: 'Nismo mi naručili pizzu.', group: 0 },
          { hr: 'Nismo naručili pizzu.', group: 1 },
        ],
        explanation:
          'A pronoun placed straight after the negated verb becomes the target of the denial: Nisam ja zvao — somebody called, but it was not me. Without it, the calling itself is denied.',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "He left without saying goodbye."',
        words: ['Otišao', 'je', 'a', 'da', 'se', 'nije', 'pozdravio.'],
        explanation:
          'Otišao je a da se nije pozdravio. — inside the a da clause the short word se takes second place, right after da; nije is a full word and follows it.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Unfortunately, there is no chance at all that we will catch the train.")',
        words: ['Nažalost,', 'nema', 'nikakav', 'šanse', 'da', 'stignemo', 'na', 'vlak.'],
        wrong: 2,
        answer: 'nikakve',
        hint: 'This word behaves like an adjective: it must match the gender and the case of the noun after it.',
        explanation:
          'Nažalost, nema nikakve šanse da stignemo na vlak. — šansa is feminine and stands in the genitive after nema, so the word before it does too.',
      },
      9,
      {
        type: 'transform',
        q: 'You did not break the window — your brother did. Shift the denial onto yourself and name the culprit: "…, nego brat."',
        from: 'Nisam razbio prozor.',
        answer: 'Nisam ja razbio prozor, nego brat.',
        accept: [
          'Nisam ja razbio prozor, nego moj brat.',
          'Prozor nisam razbio ja, nego brat.',
          'Prozor nisam razbio ja, nego moj brat.',
          'Nisam prozor razbio ja, nego brat.',
        ],
        hint: 'Put the word for yourself where the denial lands: next to the negated verb.',
        explanation:
          'Nisam ja razbio prozor, nego brat. — the window is broken, no doubt about it; only the person is corrected. After the negation the correction comes with nego.',
      },
      12,
      {
        type: 'listen',
        audio: 'Ne samo da nismo zakasnili, nego smo stigli pola sata ranije.',
        q: 'What happened?',
        options: [
          'They were half an hour late',
          'They arrived half an hour early',
          'They did not arrive at all',
          'They arrived exactly on time',
        ],
        correct: 1,
        explanation:
          'Ne samo da nismo zakasnili — not only were we not late; nego smo stigli pola sata ranije — we even got there half an hour early.',
      },
      {
        type: 'dictate',
        audio: 'Nikako ne mogu shvatiti zašto kasni.',
        answer: 'Nikako ne mogu shvatiti zašto kasni.',
        hint: 'Six words: "I just cannot understand why he is late."',
        explanation:
          'Nikako ne mogu shvatiti zašto kasni. — nikako strengthens the denial, and the verb still keeps its own ne.',
      },
    ],
  },

  // ── Verbal adverbs ─────────────────────────────────────────────────────────
  'verbal-adverbs': {
    text: {
      kind: 'text',
      title: 'Posljednji vlak za Rijeku',
      lines: [
        {
          hr: 'Izlazeći iz ureda, Maja je pogledala na sat i shvatila da posljednji vlak za Rijeku polazi za dvadeset minuta.',
          en: 'Leaving the office, Maja looked at her watch and realized that the last train to Rijeka was leaving in twenty minutes.',
        },
        {
          hr: 'Ne razmišljajući dugo, zaustavila je prvi taksi i zamolila vozača da požuri.',
          en: 'Without thinking for long, she stopped the first taxi and asked the driver to hurry.',
        },
        {
          hr: 'Vozeći se kroz grad, pokušavala je kupiti kartu na mobitelu, ali aplikacija se stalno gasila.',
          en: 'Riding through the city, she kept trying to buy a ticket on her phone, but the app kept shutting down.',
        },
        {
          hr: 'Stigavši na kolodvor, potrčala je prema blagajni i ugledala dugačak red.',
          en: 'Having arrived at the station, she ran toward the ticket office and caught sight of a long line.',
        },
        {
          hr: 'Dok je čekala, vlak je već stajao na prvom peronu.',
          en: 'While she was waiting, the train was already standing at platform one.',
        },
        {
          hr: 'Kupivši napokon kartu, protrčala je kroz čekaonicu ne obazirući se na ljude koji su je začuđeno gledali.',
          en: 'Having finally bought a ticket, she ran through the waiting room, paying no attention to the people who were staring at her in surprise.',
        },
        {
          hr: 'Kondukter ju je, smiješeći se, pustio u vagon trenutak prije nego što su se vrata zatvorila.',
          en: 'The conductor, smiling, let her into the car a moment before the doors closed.',
        },
        {
          hr: 'Sjevši uz prozor, duboko je udahnula i tek tada primijetila da je torbu s laptopom ostavila u taksiju.',
          en: 'Having sat down by the window, she took a deep breath and only then noticed that she had left the bag with her laptop in the taxi.',
        },
        {
          hr: 'Kad je vlak krenuo, zazvonio joj je mobitel: vozač je, našavši torbu na stražnjem sjedalu, nazvao broj s njezine posjetnice.',
          en: 'When the train set off, her phone rang: the driver, having found the bag on the back seat, had called the number on her business card.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what did Maja notice only once she was sitting on the train?',
          options: [
            'That she had bought a ticket for the wrong train',
            'That she had left the bag with her laptop in the taxi',
            'That the conductor had kept her ticket',
            'That her phone was still in the office',
          ],
          correct: 1,
          hint: 'The taxi driver has a reason to call her at the end.',
          explanation:
            'Sjevši uz prozor, primijetila je da je torbu s laptopom ostavila u taksiju. The driver found it on the back seat and called the number on her business card.',
        },
        {
          q: 'Almost every sentence opens with a verbal adverb, but one says "Dok je čekala, vlak je već stajao…". Why could the writer not put "Čekajući, vlak je već stajao…"?',
          options: [
            'Because čekati is perfective and has no -ći form',
            'Because a verbal adverb cannot stand at the beginning of a sentence',
            'Because the adverb would take the train as its subject — and it was Maja who was waiting',
            'Because dok is required whenever the main verb is in the past',
          ],
          correct: 2,
          hint: 'Who is waiting, and what is standing at the platform? Count the subjects.',
          explanation:
            'A verbal adverb borrows the subject of the main verb. Here the main verb belongs to the train, so the waiting needs a clause of its own, with its own subject: Dok je čekala…',
        },
        {
          type: 'type',
          q: 'Now you. First she read the schedule, THEN she ran: ____ vozni red, potrčala je na peron. (pročitati)',
          answer: 'Pročitavši',
          hint: 'The reading is over before the running starts, and the verb is perfective: its infinitive stem takes the ending for "having done".',
          explanation:
            'Pročitavši vozni red, potrčala je na peron. — a perfective verb gives the past adverb in -vši: an action completed before the main one.',
        },
        {
          type: 'transform',
          q: 'One person does both things, so the dok-clause can shrink. Replace it with a verbal adverb.',
          from: 'Dok je trčala prema vlaku, držala je kartu u ruci.',
          answer: 'Trčeći prema vlaku, držala je kartu u ruci.',
          accept: [
            'Držala je kartu u ruci trčeći prema vlaku.',
            'Trčeći prema vlaku, kartu je držala u ruci.',
            'Trčeći prema vlaku, u ruci je držala kartu.',
          ],
          hint: 'Start from "they run" in the present, not from the infinitive, and add the two letters for an action in progress.',
          explanation:
            'Trčeći prema vlaku, držala je kartu u ruci. — trče + ći. The same subject and the same moment: exactly the job of the present verbal adverb.',
        },
        {
          type: 'transform',
          q: 'As written, the phone is the one sitting on the train. Repair the sentence with a dok-clause about Maja (ona).',
          from: 'Sjedeći u vlaku, mobitel je zazvonio.',
          answer: 'Dok je sjedila u vlaku, mobitel je zazvonio.',
          accept: [
            'Dok je sjedila u vlaku, zazvonio je mobitel.',
            'Dok je sjedila u vlaku, zazvonio joj je mobitel.',
            'Dok je sjedila u vlaku, mobitel joj je zazvonio.',
            'Dok je Maja sjedila u vlaku, mobitel je zazvonio.',
            'Dok je Maja sjedila u vlaku, zazvonio je mobitel.',
            'Dok je ona sjedila u vlaku, mobitel je zazvonio.',
            'Dok je ona sjedila u vlaku, zazvonio je mobitel.',
            'Mobitel je zazvonio dok je sjedila u vlaku.',
            'Mobitel je zazvonio dok je Maja sjedila u vlaku.',
            'Mobitel joj je zazvonio dok je sjedila u vlaku.',
          ],
          hint: 'Two subjects need two full clauses: a conjunction for "while" and a past-tense verb that agrees with her.',
          explanation:
            'Dok je sjedila u vlaku, mobitel je zazvonio. — she sat, the phone rang: two subjects, so the adverb must give way to a clause.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'sort',
        q: 'Do the two actions overlap, or is one finished before the other begins?',
        groups: ['Both happen at the same time', 'One is finished before the other begins'],
        items: [
          { hr: 'Slušajući radio, kuham.', group: 0 },
          { hr: 'Stigavši kući, legla je.', group: 1 },
          { hr: 'Smijući se, izašla je iz sobe.', group: 0 },
          { hr: 'Zatvorivši prozor, sjeo je.', group: 1 },
          { hr: 'Gledajući kroz prozor, pio je čaj.', group: 0 },
          { hr: 'Rekavši to, otišao je.', group: 1 },
        ],
        explanation:
          'The -ći form comes from an imperfective verb and runs alongside the main action. The -vši form comes from a perfective verb and is over before the main action starts.',
      },
      5,
      0,
      {
        type: 'match',
        q: 'Who eats, who reads, and in what order? Match each sentence to its meaning.',
        pairs: [
          ['Jedući, čitam novine.', 'I read the paper while I eat.'],
          ['Pojevši, čitam novine.', 'I read the paper once I have eaten.'],
          ['Dok on jede, čitam novine.', 'I read the paper while he eats.'],
          ['Pročitavši novine, jedem.', 'I eat once I have read the paper.'],
        ],
        explanation:
          'jedući — at the same time; pojevši and pročitavši — already done. With a second person in the picture (on) an adverb is impossible, and dok takes over.',
      },
      6,
      {
        type: 'tf',
        q: 'A verbal adverb agrees with its subject: one man walks "pjevajući", but several women walk "pjevajuće".',
        answer: false,
        hint: 'Think about what kind of word it is. Does brzo change when a woman runs?',
        explanation:
          'False. A verbal adverb is an adverb, so it has one form for everybody: Pjevajući, hodao je. Pjevajući, hodale su.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "Not wanting to wake the children, he closed the door quietly."',
        words: ['Ne', 'želeći', 'probuditi', 'djecu,', 'tiho', 'je', 'zatvorio', 'vrata.'],
        accept: [
          'Ne želeći probuditi djecu, zatvorio je tiho vrata.',
          'Ne želeći probuditi djecu, zatvorio je vrata tiho.',
          'Ne želeći probuditi djecu, vrata je zatvorio tiho.',
          'Ne želeći probuditi djecu, vrata je tiho zatvorio.',
          'Tiho je zatvorio vrata ne želeći probuditi djecu.',
          'Zatvorio je tiho vrata ne želeći probuditi djecu.',
          'Zatvorio je vrata tiho ne želeći probuditi djecu.',
          'Vrata je tiho zatvorio ne želeći probuditi djecu.',
        ],
        explanation:
          'Ne želeći probuditi djecu, tiho je zatvorio vrata. — ne stands before the adverb just as it stands before a verb, and one man does both the not-wanting and the closing.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Having come home, she fell asleep at once.")',
        words: ['Dolazivši', 'kući,', 'odmah', 'je', 'zaspala.'],
        wrong: 0,
        answer: 'Došavši',
        hint: '"Having done" needs the perfective partner of this verb — and that partner has an irregular stem, the one you know from its past tense.',
        explanation:
          'Došavši kući, odmah je zaspala. — the -vši adverb is built from a perfective verb: doći, not dolaziti. Its stem is the one in došao, došla.',
      },
      8,
      {
        type: 'transform',
        q: 'Shrink the kad-clause into a verbal adverb. The writing is finished before the phone goes off.',
        from: 'Kad je napisala poruku, ugasila je mobitel.',
        answer: 'Napisavši poruku, ugasila je mobitel.',
        accept: ['Ugasila je mobitel napisavši poruku.', 'Napisavši poruku, mobitel je ugasila.'],
        hint: 'The verb is perfective, so take its infinitive stem and add the ending for a completed action.',
        explanation:
          'Napisavši poruku, ugasila je mobitel. — napisa-ti → napisavši. She wrote and she switched it off: one subject, two actions in sequence.',
      },
      10,
      {
        type: 'listen',
        audio: 'Ne znajući da je trgovina nedjeljom zatvorena, uzalud smo se vozili do centra.',
        q: 'Why was the drive downtown pointless?',
        options: [
          'They could not find a parking space',
          'The store is closed on Sundays, and they had not known that',
          'They knew the store was closed, but went anyway',
          'The store had moved out of the center',
        ],
        correct: 1,
        explanation:
          'Ne znajući da je trgovina nedjeljom zatvorena — not knowing that the store is closed on Sundays; uzalud smo se vozili — we drove for nothing.',
      },
      {
        type: 'dictate',
        audio: 'Gledajući film, zaspala sam na kauču.',
        answer: 'Gledajući film, zaspala sam na kauču.',
        hint: 'Six words: "Watching a movie, I fell asleep on the couch." A woman is speaking.',
        explanation:
          'Gledajući film, zaspala sam na kauču. — gledaju + ći; I was watching and I fell asleep, so the adverb and the main verb share their subject.',
      },
    ],
  },

  // ── Climate and the environment ────────────────────────────────────────────
  'climate-environment': {
    text: {
      kind: 'dialogue',
      title: 'Novi spremnici',
      lines: [
        {
          who: 'Jakov',
          hr: 'Dobar dan, gospođo Kovač. Zar opet sve bacate u istu kantu? Pa dobili smo nove spremnike!',
          en: 'Good afternoon, Mrs. Kovač. Are you throwing everything into the same bin again? But we have been given new containers!',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Ne ljutite se, Jakove, ali ja se u tim bojama ne snalazim. Plavi, žuti, zeleni — tko bi to zapamtio?',
          en: 'Don’t be angry, Jakov, but I can’t find my way around those colors. Blue, yellow, green — who could remember that?',
        },
        {
          who: 'Jakov',
          hr: 'Nije teško: papir ide u plavi, plastika u žuti, a staklo u zeleni. Boce, uostalom, ne bacamo, nego ih vraćamo u trgovinu.',
          en: 'It isn’t hard: paper goes into the blue one, plastic into the yellow one, and glass into the green one. Bottles, by the way, we don’t throw away — we take them back to the store.',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Iskreno, ne vjerujem da to išta mijenja. Zar se na kraju sve ne istrese u isti kamion?',
          en: 'Honestly, I don’t believe it changes anything. Doesn’t it all get dumped into the same truck in the end?',
        },
        {
          who: 'Jakov',
          hr: 'Ne istrese se, vidio sam svojim očima. A niste li i sami rekli da ovakvih suša i požara prije nije bilo?',
          en: 'It doesn’t, I have seen it with my own eyes. And didn’t you say yourself that there never used to be droughts and fires like these?',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Jesam. Ljeta su sve toplija, a lani je poplava odnijela pola vrta moje sestre u Slavoniji.',
          en: 'I did. The summers are getting hotter and hotter, and last year a flood carried away half of my sister’s garden in Slavonia.',
        },
        {
          who: 'Jakov',
          hr: 'Eto vidite. Klimatske promjene ne možemo zaustaviti sami, ali ne moramo ni pomagati zagađenju.',
          en: 'There you are. We cannot stop climate change on our own, but we don’t have to help pollution along either.',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Dobro, uvjerili ste me. Samo mi recite kamo s ovim: stare novine, staklenka od meda, plastične čaše…',
          en: 'All right, you have convinced me. Just tell me where all this goes: old newspapers, a honey jar, plastic cups…',
        },
        {
          who: 'Jakov',
          hr: 'Čega sve nema u toj vrećici! Dajte, pokazat ću Vam — za pet minuta sve će biti na svom mjestu.',
          en: 'The things you have in that bag! Give it here, I will show you — in five minutes everything will be in its place.',
        },
        {
          who: 'Gđa Kovač',
          hr: 'Hvala Vam. A ja sam mislila da se mladi ne brinu ni za što!',
          en: 'Thank you. And there I was thinking that young people don’t care about anything!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which color is for what?',
          options: [
            'Paper — yellow, plastic — blue, glass — green',
            'Paper — blue, plastic — yellow, glass — green',
            'Paper — green, plastic — yellow, glass — blue',
            'Paper — blue, plastic — green, glass — yellow',
          ],
          correct: 1,
          hint: 'Jakov names them in the same order in which Mrs. Kovač listed the colors.',
          explanation:
            'Papir ide u plavi, plastika u žuti, a staklo u zeleni. Bottles are not thrown away at all: they go back to the store.',
        },
        {
          q: 'Looking into the bag, Jakov exclaims: "Čega sve nema u toj vrećici!" What does he mean?',
          options: [
            'The bag is nearly empty',
            'Something important is missing from the bag',
            'The bag is full of all sorts of things',
            'He cannot find the newspapers in the bag',
          ],
          correct: 2,
          hint: 'Mrs. Kovač has just listed three quite different things, and trailed off. Is that a small collection?',
          explanation:
            'In this exclamation the negation is not a denial: listing "what is NOT there" is a way of marveling at how much is. It works only as an exclamation, with sve.',
        },
        {
          type: 'type',
          q: 'Now you. Mrs. Kovač opens her sentence with ja. Open it with the negation instead: Ne ____ u tim bojama. (snalaziti se — ja)',
          answer: 'snalazim se',
          hint: 'Ne and its verb form one block. The short word can no longer stand in front of them, so it follows.',
          explanation:
            'Ne snalazim se u tim bojama. — with ja in first place the short word came second: Ja se … ne snalazim. With nothing before the verb, it has to come after the ne + verb unit.',
        },
        {
          type: 'transform',
          q: 'Say that you are NOT afraid — and begin the sentence with Ja.',
          from: 'Bojim se poplave.',
          answer: 'Ja se ne bojim poplave.',
          accept: ['Ja se poplave ne bojim.'],
          hint: 'With another word in first place, the short word takes second place, and ne stays glued to the verb.',
          explanation:
            'Ja se ne bojim poplave. — se goes second, after Ja; ne never leaves its verb.',
        },
        {
          type: 'transform',
          q: 'Your roommate walks past the overflowing container. You are surprised he does not see it: ask him with zar and a negation.',
          from: 'Vidiš da je spremnik pun.',
          answer: 'Zar ne vidiš da je spremnik pun?',
          accept: ['Zar ti ne vidiš da je spremnik pun?'],
          hint: 'The surprise word opens the question; the verb is negated in the ordinary way.',
          explanation:
            'Zar ne vidiš da je spremnik pun? — a negative question with zar shows surprise and expects the answer "yes, of course I do".',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'Which natural disaster is it? Match each word to what happens.',
        pairs: [
          ['potres', 'the ground shakes and walls crack'],
          ['poplava', 'a river leaves its bed and covers the fields'],
          ['suša', 'for months not a drop falls from the sky'],
          ['požar', 'flames spread through a dry forest'],
          ['tuča', 'balls of ice destroy the vineyards'],
        ],
        explanation:
          'potres — an earthquake, poplava — a flood, suša — a drought, požar — a fire, tuča — hail. Together they are prirodne nepogode.',
      },
      9,
      {
        type: 'sort',
        q: 'Sorting the waste: which container does each thing go into?',
        groups: ['Spremnik za papir', 'Spremnik za staklo', 'Spremnik za plastiku'],
        items: [
          { hr: 'kartonska kutija', group: 0 },
          { hr: 'staklenka od džema', group: 1 },
          { hr: 'čašica od jogurta', group: 2 },
          { hr: 'stari časopisi', group: 0 },
          { hr: 'staklenka od kiselih krastavaca', group: 1 },
          { hr: 'prazna boca od šampona', group: 2 },
        ],
        explanation:
          'Cardboard and magazines are paper; jars are glass; a yogurt cup and a shampoo bottle are plastic. Odvajanje otpada starts at home.',
      },
      10,
      1,
      {
        type: 'tf',
        q: '"Vruće je, zar ne?" — the speaker asks this because he does not know whether it is hot.',
        answer: false,
        hint: 'He has already said what he thinks. What is the little tag at the end for?',
        explanation:
          'False. The tag zar ne does not ask for information: the speaker states his view and invites the listener to agree.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Don’t you know that bottles are returned to the store?"',
        words: ['Zar', 'ne', 'znaš', 'da', 'se', 'boce', 'vraćaju', 'u', 'trgovinu?'],
        accept: [
          'Zar ne znaš da se boce u trgovinu vraćaju?',
          'Zar ne znaš da se u trgovinu vraćaju boce?',
        ],
        explanation:
          'Zar ne znaš da se boce vraćaju u trgovinu? — zar opens the question, ne stays before its verb, and inside the da-clause se takes second place.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("The council rejected the proposal about the incinerator.")',
        words: ['Vijeće', 'je', 'podbacilo', 'prijedlog', 'o', 'spalionici.'],
        wrong: 2,
        answer: 'odbacilo',
        hint: 'The verb belongs to the right family — the family of baciti — but it carries the wrong prefix. This one means "fell short".',
        explanation:
          'Vijeće je odbacilo prijedlog o spalionici. — odbaciti is to throw away or to reject; podbaciti is to fall short of what was expected.',
      },
      12,
      2,
      {
        type: 'transform',
        q: 'Make the sentence negative. Mind where the short verb form goes.',
        from: 'Bacio bih to u more.',
        answer: 'Ne bih to bacio u more.',
        accept: [
          'To ne bih bacio u more.',
          'Ne bih to u more bacio.',
          'Ja to ne bih bacio u more.',
        ],
        hint: 'With the conditional, ne is written as a separate word, and it stands right before the short form, not before the participle.',
        explanation:
          'Ne bih to bacio u more. — ne fuses with biti, htjeti and imati (nisam, neću, nemam) but stays apart from the conditional: ne bih, ne bismo.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Kanaderi su cijelu noć gasili požar iznad Splita, ali zbog jakog vjetra još nije pod kontrolom.',
        q: 'What do you learn about the fire?',
        options: [
          'It was put out during the night',
          'It is still not under control, because of the strong wind',
          'The planes could not fly because of the wind',
          'It started because of the strong wind',
        ],
        correct: 1,
        explanation:
          'Kanaderi su cijelu noć gasili požar — the firefighting planes fought it all night (an unfinished effort); još nije pod kontrolom — it is still not under control.',
      },
      {
        type: 'dictate',
        audio: 'Staklo ne bacamo u smeće.',
        answer: 'Staklo ne bacamo u smeće.',
        hint: 'Five words: "We don’t throw glass in the trash."',
        explanation:
          'Staklo ne bacamo u smeće. — another word may come first, but ne stays directly before its verb.',
      },
    ],
  },

  // ── Hedging and precision ──────────────────────────────────────────────────
  'hedging-precision': {
    text: {
      kind: 'dialogue',
      title: 'Selimo li se ili ne?',
      lines: [
        {
          who: 'Iva',
          hr: 'Jesi li čuo? Navodno se cijela tvrtka na jesen seli u novu zgradu kod kolodvora.',
          en: 'Have you heard? Supposedly the whole company is moving to a new building by the train station in the fall.',
        },
        {
          who: 'Dario',
          hr: 'Čuo sam, ali koliko ja znam, još ništa nije potpisano. Tko ti je to rekao?',
          en: 'I have, but as far as I know, nothing has been signed yet. Who told you that?',
        },
        {
          who: 'Iva',
          hr: 'Kažu u računovodstvu. Čini se da je direktor prošli tjedan dvaput bio na sastanku s vlasnikom zgrade.',
          en: 'That’s what they say in accounting. It seems the director met with the owner of the building twice last week.',
        },
        {
          who: 'Dario',
          hr: 'To još ništa ne dokazuje. Rekao bih da se vjerojatno tek pregovara o cijeni.',
          en: 'That doesn’t prove anything yet. I would say they are probably only negotiating the price.',
        },
        {
          who: 'Iva',
          hr: 'Moguće. Ipak, meni bi selidba donekle odgovarala — do kolodvora imam deset minuta pješice.',
          en: 'Possibly. Still, the move would suit me to some extent — the station is a ten-minute walk for me.',
        },
        {
          who: 'Dario',
          hr: 'Meni baš i ne bi. U načelu nemam ništa protiv nove zgrade, ali parkiranje je ondje, koliko čujem, prava noćna mora.',
          en: 'It wouldn’t really suit me. In principle I have nothing against a new building, but parking there is, from what I hear, a real nightmare.',
        },
        {
          who: 'Iva',
          hr: 'Uglavnom dolaziš biciklom, zar ne? Onda ti parkiralište i ne treba.',
          en: 'You mostly come by bike, don’t you? Then you don’t even need a parking lot.',
        },
        {
          who: 'Dario',
          hr: 'U pravilu da, ali zimi baš i ne. Osim toga, moglo bi se dogoditi da nam smanje urede.',
          en: 'As a rule, yes, but in winter not really. Besides, it could happen that they make our offices smaller.',
        },
        {
          who: 'Iva',
          hr: 'Nisam sigurna da je tako, ali kažu da ćemo svi sjediti u jednom velikom prostoru.',
          en: 'I am not sure that’s so, but they say we will all be sitting in one big space.',
        },
        {
          who: 'Dario',
          hr: 'E, to bi mi već smetalo. Ali dok ne vidim službenu obavijest, ne vjerujem ničemu.',
          en: 'Now, that would bother me. But until I see an official notice, I don’t believe any of it.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where does Iva’s news come from, and how solid is it?',
          options: [
            'From an official notice — the move is certain',
            'From talk in the accounting department — and as far as Dario knows, nothing has been signed',
            'From the owner of the building, who told her in person',
            'From the director, at a meeting last week',
          ],
          correct: 1,
          hint: 'Iva never says "I know". Listen for who "they" are.',
          explanation:
            'Kažu u računovodstvu — it is office talk. The director’s two meetings are a fact, but what they mean is a guess, and Dario wants to see an official notice.',
        },
        {
          q: 'Dario says: "Rekao bih da se vjerojatno tek pregovara o cijeni." How much is he claiming?',
          options: [
            'He states it as a fact he has checked',
            'He is passing on what somebody else told him',
            'He offers his own guess, softened twice: by the conditional and by the word for "probably"',
            'He says it is impossible that they are negotiating',
          ],
          correct: 2,
          hint: 'Take both softeners out and read what is left. How does the sentence sound then?',
          explanation:
            'Without them it would be a flat claim: Pregovara se o cijeni. Rekao bih turns it into an opinion, and vjerojatno marks it as likely, not certain.',
        },
        {
          type: 'type',
          q: 'Now you. Iva says "Nisam sigurna da je tako." Dario, a man, says the same about himself: Nisam ____ da je tako.',
          answer: 'siguran',
          hint: 'The adjective has to agree with a male speaker.',
          explanation:
            'Nisam siguran da je tako. — the most open hedge of all: it says outright that the speaker does not vouch for the claim.',
        },
        {
          type: 'transform',
          q: 'Too flat. Claim less, the way Dario does, with the conditional of reći — you are a woman.',
          from: 'To je dobra ideja.',
          answer: 'Rekla bih da je to dobra ideja.',
          accept: [
            'Ja bih rekla da je to dobra ideja.',
            'Rekla bih da je dobra ideja.',
            'Ja bih rekla da je dobra ideja.',
          ],
          hint: 'The opinion becomes a da-clause, and the participle in front of it agrees with the speaker.',
          explanation:
            'Rekla bih da je to dobra ideja. — the conditional alone turns a statement into a careful opinion, with no extra hedge word.',
        },
        {
          type: 'transform',
          q: 'You only heard this in the hallway. Pass it on as what "they say": begin with Kažu…',
          from: 'Tvrtka se seli na jesen.',
          answer: 'Kažu da se tvrtka seli na jesen.',
          accept: ['Kažu da se tvrtka na jesen seli.', 'Kažu da se na jesen tvrtka seli.'],
          hint: 'After the linking word, the short word se moves up to second place in its clause.',
          explanation:
            'Kažu da se tvrtka seli na jesen. — kažu da attributes the claim to unnamed others; inside the clause se comes right after da.',
        },
      ],
    },
    mix: [
      6,
      1,
      5,
      {
        type: 'tf',
        q: '"Možda dolazi sutra" and "Vjerojatno dolazi sutra" express the same degree of certainty.',
        answer: false,
        hint: 'One of them leaves the question completely open; the other leans to one side.',
        explanation:
          'False. možda says only that it is possible — it may or may not happen. vjerojatno says it is likely. Choosing between them is choosing how much you claim.',
      },
      7,
      10,
      4,
      {
        type: 'sort',
        q: 'How does the speaker stand behind the claim that somebody will be late?',
        groups: ['Sure of it', 'Own judgment, but cautious', 'Only passing on what others say'],
        items: [
          { hr: 'Sigurno će kasniti.', group: 0 },
          { hr: 'Vjerojatno će kasniti.', group: 1 },
          { hr: 'Navodno će kasniti.', group: 2 },
          { hr: 'Znam da će kasniti.', group: 0 },
          { hr: 'Čini mi se da će kasniti.', group: 1 },
          { hr: 'Kažu da će kasniti.', group: 2 },
        ],
        explanation:
          'sigurno and znam claim certainty; vjerojatno and čini mi se give the speaker’s own careful judgment; navodno and kažu da put the responsibility on somebody else.',
      },
      {
        type: 'match',
        q: 'What does each opener do to the claim that follows it?',
        pairs: [
          ['Koliko ja znam…', 'limits the claim to what the speaker knows'],
          ['Navodno…', 'marks the claim as second-hand'],
          ['Rekao bih da…', 'presents it as the speaker’s own careful opinion'],
          ['Donekle…', 'says it holds only partly'],
          ['Sigurno…', 'claims full certainty'],
        ],
        explanation:
          'Each one tells the listener something different: where the claim comes from, how far it reaches, and how firmly the speaker will defend it.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "It seems to me that this could be a problem."',
        words: ['Čini', 'mi', 'se', 'da', 'bi', 'to', 'moglo', 'biti', 'problem.'],
        explanation:
          'Čini mi se da bi to moglo biti problem. — two softeners at once: čini mi se, and the conditional bi moglo. The short words mi se follow the verb; bi follows da.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("As a rule, the trains run on time.")',
        words: ['U', 'pravilo', 'vlakovi', 'voze', 'na', 'vrijeme.'],
        wrong: 1,
        answer: 'pravilu',
        hint: 'This u does not mean "into": it names a frame within which something holds, like u načelu.',
        explanation:
          'U pravilu vlakovi voze na vrijeme. — the phrase is u + the locative. It admits that there are exceptions without naming them.',
      },
      9,
      8,
      {
        type: 'transform',
        q: 'Make the claim as cautious as you can: begin with the impersonal "Moglo bi se reći da…".',
        from: 'Cijene su previsoke.',
        answer: 'Moglo bi se reći da su cijene previsoke.',
        accept: ['Moglo bi se reći da su previsoke cijene.'],
        hint: 'Inside the da-clause the short verb form moves up to second place.',
        explanation:
          'Moglo bi se reći da su cijene previsoke. — nobody in particular says it, and only in the conditional: the speaker stands as far from the claim as the language allows.',
      },
      {
        type: 'listen',
        audio: 'Koliko ja znam, muzej je ponedjeljkom zatvoren, ali nisam sasvim sigurna.',
        q: 'How reliable is this information?',
        options: [
          'The speaker has checked: the museum is closed on Mondays',
          'The speaker believes the museum is closed on Mondays, but is not completely sure',
          'The speaker heard from someone else that the museum is closed',
          'The museum is certainly open on Mondays',
        ],
        correct: 1,
        explanation:
          'Koliko ja znam limits the claim to her own knowledge, and nisam sasvim sigurna adds that even that may be wrong. She is not quoting anybody.',
      },
      {
        type: 'dictate',
        audio: 'Vjerojatno ćemo stići na vrijeme.',
        answer: 'Vjerojatno ćemo stići na vrijeme.',
        hint: 'Five words: "We will probably arrive on time."',
        explanation:
          'Vjerojatno ćemo stići na vrijeme. — the short word ćemo takes second place, right after the hedge.',
      },
    ],
  },

  // ══ UNIT 12 ════════════════════════════════════════════════════════════════

  // ── Reported speech ────────────────────────────────────────────────────────
  'reported-speech-b2': {
    text: {
      kind: 'dialogue',
      title: 'Što je rekao stanodavac?',
      lines: [
        {
          who: 'Karlo',
          hr: 'Je li zvao stanodavac? Što je rekao za bojler?',
          en: 'Did the landlord call? What did he say about the water heater?',
        },
        {
          who: 'Ema',
          hr: 'Zvao je. Rekao je da će majstor doći u četvrtak i da netko mora biti kod kuće.',
          en: 'He did. He said the repairman would come on Thursday and that somebody has to be at home.',
        },
        {
          who: 'Karlo',
          hr: 'A je li spomenuo stanarinu?',
          en: 'And did he mention the rent?',
        },
        {
          who: 'Ema',
          hr: 'Jest. Pitao me jesmo li dobili novi ugovor i kada ćemo ga potpisati.',
          en: 'He did. He asked me whether we had received the new lease and when we would sign it.',
        },
        {
          who: 'Karlo',
          hr: 'Ugovor? Ja ga nisam ni vidio. Što si mu odgovorila?',
          en: 'The lease? I haven’t even seen it. What did you answer?',
        },
        {
          who: 'Ema',
          hr: 'Rekla sam mu da nam ga još nije poslao. Onda je tvrdio da ga je poslao poštom još prošli tjedan.',
          en: 'I told him he had not sent it to us yet. Then he claimed he had mailed it as early as last week.',
        },
        { who: 'Karlo', hr: 'Tipično. I što sad?', en: 'Typical. So what now?' },
        {
          who: 'Ema',
          hr: 'Zamolila sam ga da nam ga pošalje e-poštom. Rekao je neka provjerimo sandučić i da će ga, ako ga ne nađemo, poslati ponovno.',
          en: 'I asked him to email it to us. He said we should check the mailbox and that, if we don’t find it, he will send it again.',
        },
        {
          who: 'Karlo',
          hr: 'Je li barem priznao da je bojler star dvadeset godina?',
          en: 'Did he at least admit that the water heater is twenty years old?',
        },
        {
          who: 'Ema',
          hr: 'Nije, ali je dodao da razmišlja o novom. Pitao me i zašto mu to nismo rekli ranije — a rekla sam mu već triput!',
          en: 'No, but he added that he is thinking about a new one. He also asked me why we hadn’t told him earlier — and I have told him three times already!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: when is the repairman coming, and what do the roommates have to do?',
          options: [
            'On Tuesday — they have to call him first',
            'On Thursday — somebody has to be at home',
            'On Thursday — they have to buy a new water heater',
            'Next week — they have to sign the lease first',
          ],
          correct: 1,
          hint: 'It is the first thing Ema passes on, in one sentence with two da-clauses.',
          explanation:
            'Rekao je da će majstor doći u četvrtak i da netko mora biti kod kuće. Each reported statement gets its own da.',
        },
        {
          q: 'Ema reports: "Pitao me jesmo li dobili novi ugovor." What were the landlord’s exact words on the phone?',
          options: [
            '„Jesmo li dobili novi ugovor?”',
            '„Jeste li dobili novi ugovor?”',
            '„Da ste dobili novi ugovor?”',
            '„Jesu li bili dobili novi ugovor?”',
          ],
          correct: 1,
          hint: 'The tense stays as it was. What changes is the person: he was speaking TO the roommates, and Ema now speaks AS one of them.',
          explanation:
            'He asked "you" (vi): Jeste li dobili…? Ema is one of those people, so in her mouth it becomes "we": jesmo li dobili. No da is added, and the tense does not move.',
        },
        {
          type: 'type',
          q: 'Now you. The landlord also said: „Platite do petka!” Ema passes it on: Rekao je da ____ do petka. (platiti)',
          answer: 'platimo',
          hint: 'A command becomes da + the present — and the people who must pay are now "we".',
          explanation:
            'Rekao je da platimo do petka. — the imperative disappears; da + the present carries the order, in the person of whoever has to carry it out.',
        },
        {
          type: 'transform',
          q: 'The repairman looks at the water heater and says this. Report his words: Majstor je rekao…',
          from: 'Bojler je prestar.',
          answer: 'Majstor je rekao da je bojler prestar.',
          accept: ['Majstor je rekao da je prestar bojler.'],
          hint: 'English would say "was". Croatian leaves the tense of the original words alone.',
          explanation:
            'Majstor je rekao da je bojler prestar. — he said "je", so the report says je. A past tense here would mean the heater had been too old before he spoke.',
        },
        {
          type: 'transform',
          q: 'Karlo asks Ema this. Report his question as Ema would: Karlo me pitao…',
          from: 'Gdje si ostavila ključeve?',
          answer: 'Karlo me pitao gdje sam ostavila ključeve.',
          accept: [
            'Karlo me je pitao gdje sam ostavila ključeve.',
            'Karlo me pitao gdje sam ključeve ostavila.',
            'Karlo me je pitao gdje sam ključeve ostavila.',
          ],
          hint: 'The question word stays and nothing is added. Only the person of the short verb form changes: Ema is now talking about herself.',
          explanation:
            'Karlo me pitao gdje sam ostavila ključeve. — a reported wh-question keeps its question word, takes neither da nor li, and si becomes sam.',
        },
      ],
    },
    mix: [
      8,
      0,
      9,
      {
        type: 'sort',
        q: 'What did the person originally say — a statement, a question, or a command?',
        groups: ['A statement', 'A question', 'A command or request'],
        items: [
          { hr: 'Rekla je da kasni.', group: 0 },
          { hr: 'Pitao je kasnimo li.', group: 1 },
          { hr: 'Rekao je neka pričekamo.', group: 2 },
          { hr: 'Tvrdi da je sve platio.', group: 0 },
          { hr: 'Zanima ga tko je platio.', group: 1 },
          { hr: 'Zamolio me da platim.', group: 2 },
        ],
        explanation:
          'A statement: da + the original tense. A question: li after the verb, or the question word. A command: da + the present or neka + the present, in the person of whoever must act — neka pričekamo, da platim.',
      },
      10,
      {
        type: 'match',
        q: 'Reporting verbs say HOW something was said. Match each verb to its meaning.',
        pairs: [
          ['tvrditi', 'to insist that something is true, though others may doubt it'],
          ['priznati', 'to say, unwillingly, that something is true'],
          ['dodati', 'to say one more thing'],
          ['zamoliti', 'to ask politely for a favor'],
          ['upozoriti', 'to tell somebody about a danger'],
        ],
        explanation:
          'tvrditi — to claim, priznati — to admit, dodati — to add, zamoliti — to ask a favor, upozoriti — to warn. Choosing one of them instead of reći already tells the listener what you think of the words you are passing on.',
      },
      12,
      {
        type: 'tf',
        q: 'She said: „Umorna sam.” The correct report is: Rekla je da je bila umorna.',
        answer: false,
        hint: 'Which tense did she use herself?',
        explanation:
          'False. Croatian keeps the tense of the original words: Rekla je da je umorna. With bila, the report would mean that she had been tired at some earlier time.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "She said that she would send it to me by mail."',
        words: ['Rekla', 'je', 'da', 'će', 'mi', 'ga', 'poslati', 'poštom.'],
        accept: ['Rekla je da će mi ga poštom poslati.'],
        explanation:
          'Rekla je da će mi ga poslati poštom. — the short words line up right after da: the auxiliary će, then the dative mi, then the accusative ga.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("He said that he loves me.")',
        words: ['Rekao', 'je', 'da', 'me', 'volim.'],
        wrong: 4,
        answer: 'voli',
        hint: 'His words were „Volim te.” In the report, who is doing the loving?',
        explanation:
          'Rekao je da me voli. — both persons shift: his te becomes me, and his first-person verb becomes third person, because he is no longer the one speaking.',
      },
      4,
      {
        type: 'transform',
        q: 'Your sister says this to you. Report it: Sestra mi je rekla…',
        from: 'Nazovi me večeras!',
        answer: 'Sestra mi je rekla da je nazovem večeras.',
        accept: [
          'Sestra mi je rekla da je večeras nazovem.',
          'Sestra mi je rekla da ju nazovem večeras.',
          'Sestra mi je rekla da ju večeras nazovem.',
          'Sestra mi je rekla neka je nazovem večeras.',
          'Sestra mi je rekla neka je večeras nazovem.',
          'Sestra mi je rekla neka ju nazovem večeras.',
          'Sestra mi je rekla neka ju večeras nazovem.',
        ],
        hint: 'The command turns into da + the present for "I" — and her "me" is now a "her", placed right after da.',
        explanation:
          'Sestra mi je rekla da je nazovem večeras. — I am the one who has to call, so the verb is nazovem; the person to be called is she, so me becomes je.',
      },
      6,
      {
        type: 'listen',
        audio: 'Liječnik me pitao pušim li i rekao mi da se više krećem.',
        q: 'What did the doctor do?',
        options: [
          'He asked whether I smoke and told me to move more',
          'He said that he smokes and moves a lot',
          'He asked me to stop smoking',
          'He told me that I smoke too much',
        ],
        correct: 0,
        explanation:
          'pitao me pušim li — a reported yes/no question, with li after the verb; rekao mi da se više krećem — a reported command, da + the present.',
      },
      {
        type: 'dictate',
        audio: 'Pitali su nas gdje je kolodvor.',
        answer: 'Pitali su nas gdje je kolodvor.',
        hint: 'Six words: "They asked us where the train station is."',
        explanation:
          'Pitali su nas gdje je kolodvor. — a reported wh-question: the question word, and then the clause in its original tense.',
      },
    ],
  },

  // ── Interjections ──────────────────────────────────────────────────────────
  interjections: {
    text: {
      kind: 'dialogue',
      title: 'Nedjeljna utakmica',
      lines: [
        {
          who: 'Baka',
          hr: 'Pst, djeco, malo tiše! Djed spava u sobi.',
          en: 'Shh, children, a little quieter! Grandpa is asleep in the bedroom.',
        },
        {
          who: 'Marta',
          hr: 'Joj, bako, oprosti! Gledamo utakmicu, a Hrvatska upravo napada.',
          en: 'Oh, Grandma, sorry! We are watching the game, and Croatia is attacking right now.',
        },
        {
          who: 'Filip',
          hr: 'Hej, Marta, makni se, ništa ne vidim! Ajme, promašio je prazan gol!',
          en: 'Hey, Marta, move, I can’t see a thing! Oh no, he missed an open goal!',
        },
        {
          who: 'Baka',
          hr: 'Uf, i ja sam se uplašila. Mislila sam da se nešto razbilo.',
          en: 'Phew, that scared me too. I thought something had broken.',
        },
        {
          who: 'Marta',
          hr: 'Ups… zapravo i jest. Srušila sam čašu kad sam skočila.',
          en: 'Oops… actually, something has. I knocked over a glass when I jumped up.',
        },
        {
          who: 'Baka',
          hr: 'Jao meni, to je čaša iz servisa koji sam dobila za vjenčanje! Dobro, nema veze, glavno da se nisi porezala.',
          en: 'Oh dear me, that is a glass from the set I got for my wedding! Well, never mind, the main thing is that you didn’t cut yourself.',
        },
        {
          who: 'Filip',
          hr: 'Oho, pogledajte ovo — gol! Bravo, Luka, majstore!',
          en: 'Whoa, look at this — a goal! Bravo, Luka, you master!',
        },
        { who: 'Djed', hr: 'Što je to bilo? Tko je zabio?', en: 'What was that? Who scored?' },
        {
          who: 'Baka',
          hr: 'Aha, sad si se probudio! Čim netko vikne „gol”, ti si na nogama.',
          en: 'Aha, so now you are awake! The moment somebody shouts "goal", you are on your feet.',
        },
        {
          who: 'Djed',
          hr: 'Jao vama ako sam propustio i drugi!',
          en: 'Woe to you all if I have missed the second one too!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what got broken, and how?',
          options: [
            'The TV — Filip threw a pillow at it when the player missed',
            'A glass from Grandma’s wedding set — Marta knocked it over when she jumped up',
            'A window — the children were playing soccer in the room',
            'Grandpa’s glasses — he sat on them when he woke up',
          ],
          correct: 1,
          hint: 'Marta admits it with a one-syllable interjection for a small accident — and then explains.',
          explanation:
            'Ups… Srušila sam čašu kad sam skočila. — and it was a glass from the set Grandma got for her wedding. Hence her Jao meni.',
        },
        {
          q: 'Filip calls out "Hej, Marta", and Marta says "Joj, bako". One word changes its ending and the other does not. Why?',
          options: [
            'Only family words have a calling form; names never change',
            'After hej the ordinary form is used, and after joj the calling form',
            'Both are in the calling case: baka becomes bako, while many women’s names in -a keep their usual form',
            'Marta is speaking politely, and Filip is not',
          ],
          correct: 2,
          hint: 'Later Filip shouts "Bravo, Luka, majstore!" — two words addressed to one person. Which of the two changed?',
          explanation:
            'Whoever an interjection is aimed at stands in the vocative. Common nouns show it clearly (bako, majstore); many names in -a, like Marta, Ana and Luka, look the same as in the nominative.',
        },
        {
          type: 'type',
          q: 'Now you. Grandma calls her husband to the table: Hej, ____, ručak je gotov! (djed)',
          answer: 'djede',
          hint: 'A masculine noun ending in a consonant takes the usual masculine calling ending — the one in majstore.',
          explanation:
            'Hej, djede, ručak je gotov! — the vocative of djed; and because the word stands in the middle of the sentence, it has a comma on each side.',
        },
        {
          type: 'transform',
          q: 'Marta cries this out. Report it without the interjection — the feeling moves into the verb: Marta je uzviknula…',
          from: 'Joj, srušila sam čašu!',
          answer: 'Marta je uzviknula da je srušila čašu.',
          accept: ['Marta je uzviknula da je čašu srušila.'],
          hint: 'An interjection cannot be reported; a da-clause in the third person can.',
          explanation:
            'Marta je uzviknula da je srušila čašu. — joj drops out, and the verb uzviknuti (to exclaim) tells the listener how it was said.',
        },
        {
          type: 'transform',
          q: 'Grandma says this about herself. Turn it into a warning about Filip: "woe to HIM".',
          from: 'Jao meni ako zakasnim!',
          answer: 'Jao njemu ako zakasni!',
          hint: 'The person stays in the "to whom" case, and the verb has to follow the new person.',
          explanation:
            'Jao njemu ako zakasni! — jao takes the dative. With "me" it is a lament; with anybody else it becomes a warning.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'What would a Croatian say? Match each interjection to the moment.',
        pairs: [
          ['uf', 'you finally sit down after a long, hot day'],
          ['ajme', 'you realize your wallet is still in the taxi'],
          ['pst', 'the baby has just fallen asleep'],
          ['oho', 'your little nephew has grown four inches'],
          ['fuj', 'the milk in the fridge has gone sour'],
        ],
        explanation:
          'uf — relief or tiredness; ajme — dismay; pst — silence, please; oho — pleasant surprise; fuj — disgust.',
      },
      9,
      5,
      {
        type: 'sort',
        q: 'Fine in a meeting with people you hardly know — or only among friends and family?',
        groups: ['Fine almost anywhere', 'Only with friends and family'],
        items: [
          { hr: 'Bravo, odlično!', group: 0 },
          { hr: 'Ajme, zaboravio sam!', group: 1 },
          { hr: 'Aha, razumijem.', group: 0 },
          { hr: 'Ups, pardon!', group: 1 },
          { hr: 'Hej, čekaj!', group: 1 },
          { hr: 'Joj, kako je kasno!', group: 0 },
        ],
        explanation:
          'bravo, aha and joj pass in almost any company. ajme, ups and hej are everyday speech: natural at home, too casual in front of officials.',
      },
      10,
      {
        type: 'tf',
        q: 'When something crashes to the floor, a Croatian comic strip writes "cmok".',
        answer: false,
        hint: 'One of these two sound-words is loud and one is tender.',
        explanation:
          'False. A crash is tras. Cmok is the sound of a kiss — Croatian imitates sounds with its own words, not with the English ones.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Phew, the exam is finally over!"',
        words: ['Uf,', 'ispit', 'je', 'napokon', 'gotov!'],
        accept: [
          'Uf, napokon je ispit gotov!',
          'Uf, napokon je gotov ispit!',
          'Uf, ispit je gotov napokon!',
        ],
        explanation:
          'Uf, ispit je napokon gotov! — the interjection comes first and is cut off by a comma; the rest is an ordinary sentence with je in second place.',
      },
      12,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Woe to the thief when they catch him!")',
        words: ['Jao', 'lopov', 'kad', 'ga', 'uhvate!'],
        wrong: 1,
        answer: 'lopovu',
        hint: 'This interjection is followed by the "to whom" case — and that holds for a noun just as it does for a pronoun.',
        explanation:
          'Jao lopovu kad ga uhvate! — jao takes the dative, whether the trouble comes "to" a pronoun (meni, tebi) or to a noun.',
      },
      3,
      {
        type: 'transform',
        q: 'You praised one friend. Now praise several friends at once.',
        from: 'Bravo, prijatelju!',
        answer: 'Bravo, prijatelji!',
        hint: 'In the plural the calling form needs no ending of its own: it is the form you would use for a subject.',
        explanation:
          'Bravo, prijatelji! — only the singular has special vocative endings (prijatelju, Ivane, bako); in the plural the vocative equals the nominative.',
      },
      {
        type: 'listen',
        audio: 'Ajme, zaboravila sam ugasiti pećnicu, a već smo na autocesti!',
        q: 'What is going on?',
        options: [
          'She is relieved that they are finally on the highway',
          'She is dismayed: she forgot to turn off the oven, and they are already on the highway',
          'She is praising the driver for remembering the oven',
          'She has burned her hand on the oven',
        ],
        correct: 1,
        explanation:
          'ajme signals dismay — "oh no". zaboravila sam ugasiti pećnicu — she forgot to turn off the oven; a već smo na autocesti — and they are already on the highway.',
      },
      {
        type: 'dictate',
        audio: 'Oho, pa ti si narastao!',
        answer: 'Oho, pa ti si narastao!',
        hint: 'Five words, said to a boy you have not seen for a year: "Wow, you have grown!"',
        explanation:
          'Oho, pa ti si narastao! — oho shows pleasant surprise; a comma separates it from the sentence, which ends with an exclamation mark.',
      },
    ],
  },

  // ── Free time, sport and travel ────────────────────────────────────────────
  'travel-and-sport': {
    text: {
      kind: 'text',
      title: 'Pozdrav s Korčule',
      lines: [
        {
          hr: 'Draga Saro, napokon ti pišem s Korčule, gdje smo se Ivan i ja prvi put ovog ljeta pošteno naspavali.',
          en: 'Dear Sara, I am finally writing to you from Korčula, where Ivan and I have got a good night’s sleep for the first time this summer.',
        },
        {
          hr: 'Krenuli smo u petak u pet ujutro; dok smo se vozili prema Splitu, sunce je tek izlazilo, a ceste su bile prazne.',
          en: 'We set off on Friday at five in the morning; while we were driving toward Split, the sun was only just rising and the roads were empty.',
        },
        {
          hr: 'Najprije smo u Splitu popili kavu na rivi, a zatim smo se ukrcali na trajekt.',
          en: 'First we had a coffee on the waterfront in Split, and then we boarded the ferry.',
        },
        {
          hr: 'Ivan se, naravno, odmah počeo dosađivati, pa je cijelim putem fotografirao galebove — otkad se bavi fotografijom, ne ispušta aparat iz ruku.',
          en: 'Ivan, of course, immediately started getting bored, so he photographed seagulls the whole way — ever since he took up photography, he hasn’t let the camera out of his hands.',
        },
        {
          hr: 'Ja sam za to vrijeme čitala Rostuharov putopis i sanjala o dalekim zemljama.',
          en: 'Meanwhile I was reading Rostuhar’s travel book and dreaming of faraway countries.',
        },
        {
          hr: 'Ovdje svako jutro plivamo, popodne igramo odbojku na plaži, a navečer idemo u dugu šetnju uz more.',
          en: 'Here we swim every morning, play volleyball on the beach in the afternoon, and in the evening go for a long walk by the sea.',
        },
        {
          hr: 'Sinoć smo u konobi gledali utakmicu: cijeli otok navija za Hajduk, pa se nisam usudila priznati da ja navijam za Dinamo!',
          en: 'Last night we watched the game in a tavern: the whole island roots for Hajduk, so I didn’t dare admit that I root for Dinamo!',
        },
        {
          hr: 'Nakon toga smo se najeli svježe ribe i domaćih smokava.',
          en: 'After that we ate our fill of fresh fish and homegrown figs.',
        },
        {
          hr: 'Moram priznati: prva dva dana bilo mi je malo dosadno bez interneta, ali sada mi uopće ne nedostaje.',
          en: 'I have to admit: for the first two days I was a little bored without the internet, but now I don’t miss it at all.',
        },
        {
          hr: 'Vraćamo se u nedjelju. Javi se i napiši čime se ti baviš ovih dana! Pusa, Nina',
          en: 'We are coming back on Sunday. Get in touch and tell me what you are up to these days! Kisses, Nina',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the email: how do Nina and Ivan spend a day on the island?',
          options: [
            'A walk in the morning, swimming in the afternoon, volleyball in the evening',
            'Swimming in the morning, beach volleyball in the afternoon, a long walk in the evening',
            'Tennis in the morning, swimming in the afternoon, the tavern in the evening',
            'Sleeping until noon, then photography and a long swim',
          ],
          correct: 1,
          hint: 'Nina gives the three parts of the day in order: svako jutro, popodne, navečer.',
          explanation:
            'Svako jutro plivamo, popodne igramo odbojku na plaži, a navečer idemo u dugu šetnju uz more.',
        },
        {
          q: 'Why did Nina keep quiet in the tavern during the game?',
          options: [
            'She does not like soccer and was bored',
            'She roots for the rival club, and everybody around her was for Hajduk',
            'She did not understand the local dialect',
            'Ivan had asked her not to talk during the game',
          ],
          correct: 1,
          hint: 'She names two clubs. Which one is hers — and where is she sitting?',
          explanation:
            'Cijeli otok navija za Hajduk, and Nina navija za Dinamo — the great rival. In a Dalmatian tavern that is something you admit only afterward, in an email.',
        },
        {
          type: 'type',
          q: 'Now you. Nina asks what Sara is doing these days. Sara answers: Bavim se ____. (odbojka)',
          answer: 'odbojkom',
          hint: 'This verb never takes a plain object: it needs the "with" case of a feminine noun in -a.',
          explanation:
            'Bavim se odbojkom. — baviti se + the instrumental. Playing it is different: igram odbojku, with the accusative and no preposition.',
        },
        {
          type: 'transform',
          q: 'They swam — and swam until they had truly had enough. Say it with the prefix that means "to your heart’s content".',
          from: 'Plivali smo.',
          answer: 'Naplivali smo se.',
          accept: ['Mi smo se naplivali.', 'Baš smo se naplivali.'],
          hint: 'Two additions: a prefix on the verb and a short reflexive word, which goes after the auxiliary.',
          explanation:
            'Naplivali smo se. — na- + se means doing something until you have had your fill, like naspavati se and najesti se.',
        },
        {
          type: 'transform',
          q: 'As written, Nina is calling herself a boring person. Repair it so that it says she WAS BORED on the ferry.',
          from: 'Bila sam dosadna na trajektu.',
          answer: 'Bilo mi je dosadno na trajektu.',
          accept: [
            'Na trajektu mi je bilo dosadno.',
            'Meni je bilo dosadno na trajektu.',
            'Na trajektu je meni bilo dosadno.',
            'Dosađivala sam se na trajektu.',
            'Na trajektu sam se dosađivala.',
          ],
          hint: 'Boredom is something that happens "to me": the person goes into the dative, and the rest of the sentence turns neuter.',
          explanation:
            'Bilo mi je dosadno na trajektu. — the bored person is in the dative and the sentence has no subject, so the verb and dosadno are neuter. Dosadna sam describes what I am like.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'A travel story: which sentences move the plot forward, and which paint the background?',
        groups: ['One finished event — the story moves on', 'Background — it was going on'],
        items: [
          { hr: 'Stigli smo u Zadar.', group: 0 },
          { hr: 'Sunce je zalazilo.', group: 1 },
          { hr: 'Kupili smo karte.', group: 0 },
          { hr: 'Ljudi su šetali rivom.', group: 1 },
          { hr: 'Ukrcali smo se na brod.', group: 0 },
          { hr: 'Puhao je lagan vjetar.', group: 1 },
        ],
        explanation:
          'Perfective verbs (stigli, kupili, ukrcali se) are single completed steps: each one takes the story further. Imperfective verbs (zalazilo, šetali, puhao) describe what was in progress around those steps.',
      },
      10,
      {
        type: 'match',
        q: 'What is the speaker telling you? Match each sentence to its meaning.',
        pairs: [
          ['Dosadno mi je.', 'I have nothing to do and time is dragging.'],
          ['Dosadan sam.', 'Other people find me uninteresting.'],
          ['Naspavala sam se.', 'I have had all the sleep I needed.'],
          ['Najeo sam se.', 'I cannot eat another bite.'],
          ['Naputovala sam se.', 'I have had my fill of trips.'],
        ],
        explanation:
          'Dosadno mi je is a state that happens to me (the dative); dosadan sam is a description of my character. Na- + se always means "as much as I wanted".',
      },
      0,
      11,
      {
        type: 'tf',
        q: '"Navijam Dinamo" is correct: navijati takes a direct object, just like igrati.',
        answer: false,
        hint: 'You play a game, but you cheer FOR a team.',
        explanation:
          'False. navijati needs za + the accusative: Navijam za Dinamo. It is igrati that takes a bare accusative — and only the game, not the club.',
      },
      12,
      {
        type: 'order',
        q: 'Put the words in order: "My brother has been doing photography for two years already."',
        words: ['Moj', 'brat', 'se', 'već', 'dvije', 'godine', 'bavi', 'fotografijom.'],
        accept: [
          'Moj se brat već dvije godine bavi fotografijom.',
          'Moj brat se bavi fotografijom već dvije godine.',
          'Moj se brat bavi fotografijom već dvije godine.',
          'Već dvije godine moj se brat bavi fotografijom.',
          'Već se dvije godine moj brat bavi fotografijom.',
          'Već dvije godine moj brat se bavi fotografijom.',
          'Već dvije godine se moj brat bavi fotografijom.',
        ],
        explanation:
          'Moj brat se već dvije godine bavi fotografijom. — something that began in the past and still goes on takes the present with već; baviti se takes the instrumental.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("On weekends we play soccer in the park.")',
        words: ['Vikendom', 'igramo', 'nogometom', 'u', 'parku.'],
        wrong: 2,
        answer: 'nogomet',
        hint: 'The game you play is a plain direct object. The "with" case belongs to a different verb.',
        explanation:
          'Vikendom igramo nogomet u parku. — igrati + the accusative, with no preposition. The instrumental goes with baviti se: Bavimo se nogometom.',
      },
      {
        type: 'transform',
        q: 'Say the same thing with the reflexive verb instead of the dative.',
        from: 'Djeci je dosadno.',
        answer: 'Djeca se dosađuju.',
        hint: 'The children become the subject. The verb has to agree with them in the present, and it cannot do without its short reflexive word.',
        explanation:
          'Djeca se dosađuju. — dosađivati se: the bored person is now the subject. Djeca takes a plural verb.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Najprije smo obišli stari grad, zatim smo ručali u konobi, a na kraju smo se okupali.',
        q: 'In what order did they do things?',
        options: [
          'Lunch, the old town, a swim',
          'The old town, a swim, lunch',
          'The old town, lunch, a swim',
          'A swim, the old town, lunch',
        ],
        correct: 2,
        explanation:
          'najprije — first; zatim — then; na kraju — in the end. Three perfective verbs, three completed steps: obišli, ručali, okupali se.',
      },
      {
        type: 'dictate',
        audio: 'Čime se baviš u slobodno vrijeme?',
        answer: 'Čime se baviš u slobodno vrijeme?',
        hint: 'Six words: "What do you do in your free time?"',
        explanation:
          'Čime se baviš u slobodno vrijeme? — the question word is in the instrumental too, because baviti se asks "with what?".',
      },
    ],
  },

  // ── Humor, irony and tone ──────────────────────────────────────────────────
  'humour-irony': {
    text: {
      kind: 'dialogue',
      title: 'Savršen dan',
      lines: [
        {
          who: 'Roko',
          hr: 'Oho, pa ti si sva mokra! Što se dogodilo?',
          en: 'Whoa, you are soaking wet! What happened?',
        },
        {
          who: 'Tena',
          hr: 'Ništa posebno. Samo mi je pobjegao autobus, pa sam pola sata stajala na kiši. Bez kišobrana, naravno.',
          en: 'Nothing special. I just missed the bus, so I stood in the rain for half an hour. Without an umbrella, of course.',
        },
        {
          who: 'Roko',
          hr: 'Ma daj! Pa jutros sam ti rekao da uzmeš kišobran.',
          en: 'Oh come on! I told you this morning to take an umbrella.',
        },
        {
          who: 'Tena',
          hr: 'Jesi, baš ti hvala. Rekao si to kad sam već bila na stubištu.',
          en: 'You did, thanks a lot. You said it when I was already on the stairs.',
        },
        {
          who: 'Roko',
          hr: 'Dobro, dobro. A kako je prošao razgovor za posao?',
          en: 'All right, all right. And how did the job interview go?',
        },
        {
          who: 'Tena',
          hr: 'Sjajno. Zakasnila sam dvadeset minuta, a onda mi je još i zazvonio mobitel. Super, samo mi je to trebalo.',
          en: 'Brilliantly. I was twenty minutes late, and then on top of that my phone rang. Great, just what I needed.',
        },
        {
          who: 'Roko',
          hr: 'Ma nije valjda! I što su rekli?',
          en: 'You’re kidding! And what did they say?',
        },
        {
          who: 'Tena',
          hr: 'Da će mi se javiti. A na izlasku je direktorica rekla da moj životopis „nije loš”.',
          en: 'That they will get back to me. And on my way out the director said that my résumé "isn’t bad".',
        },
        {
          who: 'Roko',
          hr: 'Čekaj, pa to je kod nje velika pohvala! Meni se čini da si prošla puno bolje nego što misliš.',
          en: 'Wait, coming from her that is high praise! It seems to me you did much better than you think.',
        },
        {
          who: 'Tena',
          hr: 'Ma kakvi. Ali dobro — moglo je biti i gore: mogla sam još i pasti u lokvu pred cijelim povjerenstvom.',
          en: 'No way. But all right — it could have been worse: I could also have fallen into a puddle in front of the whole committee.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what went wrong for Tena today?',
          options: [
            'She lost her umbrella, missed the interview and broke her phone',
            'She missed the bus, stood in the rain, arrived late for the interview, and her phone rang during it',
            'She fell into a puddle in front of the committee',
            'She forgot her résumé and the director sent her home',
          ],
          correct: 1,
          hint: 'The puddle is the one thing that did NOT happen.',
          explanation:
            'Pobjegao joj je autobus, pola sata stajala je na kiši, zakasnila je dvadeset minuta i zazvonio joj je mobitel. Falling into a puddle is only what could still have happened.',
        },
        {
          q: 'Asked about the interview, Tena answers "Sjajno." How does Roko know she does not mean it?',
          options: [
            'Because sjajno is a word Croatians use only as an insult',
            'Because the word of praise is followed at once by facts that contradict it — being late, the ringing phone',
            'Because she says it very quietly',
            'Because a job interview can never go well',
          ],
          correct: 1,
          hint: 'Read on to her very next sentence. Does it fit the word she opened with?',
          explanation:
            'That is how irony works: the speaker says the opposite of what the situation shows and trusts the listener to notice the clash. Nothing in the word itself is ironic — the facts beside it are.',
        },
        {
          type: 'type',
          q: 'Now you. The director’s "nije loš" was praise. Tena’s mother tastes the excellent soup Tena has made and says, in the same style: Juha nije ____. (bad)',
          answer: 'loša',
          hint: 'The same modest adjective the director used — but it must now agree with juha.',
          explanation:
            'Juha nije loša. — understatement: saying less than you mean. About something excellent, "not bad" is warm praise, and taking it literally would be a mistake.',
        },
        {
          type: 'transform',
          q: 'Tena speaks for herself. Now a whole team has just lost its luggage — say the same sarcastic line for "us".',
          from: 'Super, samo mi je to trebalo.',
          answer: 'Super, samo nam je to trebalo.',
          accept: [
            'Super, samo to nam je trebalo.',
            'Super, samo nam je još to trebalo.',
            'Super, samo je nama to trebalo.',
          ],
          hint: 'Only the short dative pronoun changes; it stays in the same place in the sentence.',
          explanation:
            'Super, samo nam je to trebalo. — "great, just what we needed", said about something nobody needed. The praise word plus an obviously bad situation is what makes it sarcasm.',
        },
        {
          type: 'transform',
          q: 'Your host says this about the huge dinner she cooked. Agreeing would sound cold: contradict her warmly — open with the dismissal particle Ma and say that it is excellent (odlično).',
          from: 'Nije to ništa posebno.',
          answer: 'Ma odlično je!',
          accept: [
            'Ma odlično je.',
            'Ma kakvi, odlično je!',
            'Ma daj, odlično je!',
            'Ma izvrsno je!',
            'Ma savršeno je!',
            'Ma odlično je, stvarno!',
            'Ma kakvi, izvrsno je!',
            'Ma daj, izvrsno je!',
            'Ma to je odlično!',
            'Ma kakvi, to je odlično!',
          ],
          hint: 'The particle brushes aside what was just said; your verdict follows, with the short verb form in second place after the adjective.',
          explanation:
            'Ma odlično je! — self-deprecation is an invitation to disagree. The particle ma waves her modest remark away, and the praise follows.',
        },
      ],
    },
    mix: [
      7,
      {
        type: 'tf',
        q: '"Fjaka" is what Dalmatians call a lazy person when they want to criticize him.',
        answer: false,
        hint: 'It is not a person at all, and nobody on the coast is ashamed of it.',
        explanation:
          'False. Fjaka is a state: the pleasant, sun-induced wish to do absolutely nothing. It is treated as a legitimate condition — which is exactly why claiming it is half a joke.',
      },
      10,
      4,
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Great, that was all I needed.")',
        words: ['Super,', 'samo', 'mi', 'je', 'to', 'trebala.'],
        wrong: 5,
        answer: 'trebalo',
        hint: 'What was "needed" here? The verb has to agree with that small neuter word.',
        explanation:
          'Super, samo mi je to trebalo. — to is the subject, so the participle is neuter. The person who "needed" it is in the dative: mi.',
      },
      6,
      {
        type: 'sort',
        q: 'The same words, two situations. Is the speaker sincere, or does he mean the opposite?',
        groups: ['Meant sincerely', 'Meant ironically'],
        items: [
          { hr: 'Auto ne pali: „Super, samo mi je to trebalo!”', group: 1 },
          { hr: 'Prijateljica ti donosi kavu: „Super, baš mi je to trebalo!”', group: 0 },
          { hr: 'Već si pokisnuo, a on tek sad spominje kišu: „Baš ti hvala!”', group: 1 },
          { hr: 'Odvezla te na aerodrom u pet ujutro: „Baš ti hvala!”', group: 0 },
          { hr: 'Kiša pada već tjedan dana: „Divno vrijeme!”', group: 1 },
          { hr: 'Sunčan dan na plaži: „Divno vrijeme!”', group: 0 },
        ],
        explanation:
          'The words do not change — the situation does. Praise for something that plainly deserves none is irony; the listener hears the clash between the words and the facts.',
      },
      {
        type: 'match',
        q: 'Said — and meant. Match each remark to what the speaker really means.',
        pairs: [
          ['Ma kakvi!', 'Not at all — that is nonsense.'],
          ['Dobro, dobro.', 'All right, that is enough now.'],
          ['Nije loše.', 'It is actually very good.'],
          ['Ma nije valjda!', 'Surely that can’t be true!'],
          ['Uhvatila me fjaka.', 'I feel like doing absolutely nothing.'],
        ],
        explanation:
          'None of these can be translated word for word. Ma sets a dismissive tone, a doubled dobro closes a subject, and nije loše is praise by understatement.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Oh come on, surely you haven’t forgotten the tickets again?"',
        words: ['Ma', 'nije', 'valjda', 'da', 'si', 'opet', 'zaboravio', 'karte?'],
        accept: [
          'Ma nije valjda da si karte opet zaboravio?',
          'Ma nije valjda da si opet karte zaboravio?',
        ],
        explanation:
          'Ma nije valjda da si opet zaboravio karte? — ma nije valjda expresses disbelief ("surely not"); what the speaker cannot believe follows in a da-clause, with si right after da.',
      },
      3,
      {
        type: 'transform',
        q: 'Too stiff. Say "forget it" the everyday Croatian way: the dismissal particle + the ti-command of pustiti.',
        from: 'Zaboravi to.',
        answer: 'Ma pusti.',
        accept: ['Ma pusti to.', 'Ma pusti!', 'Ma pusti to!'],
        hint: 'Two short words. The first has no meaning of its own; the second literally tells the listener to "let it be".',
        explanation:
          'Ma pusti. — the particle waves the subject away, and pusti says "leave it". Together: forget it, it is not worth the trouble.',
      },
      {
        type: 'listen',
        audio: 'Baš lijepo: čekali smo trajekt tri sata, a onda su ga otkazali.',
        q: 'How does the speaker feel?',
        options: [
          'Delighted with the trip',
          'Annoyed — the opening words are meant ironically',
          'Indifferent: the ferry does not matter to him',
          'Worried about tomorrow’s weather',
        ],
        correct: 1,
        explanation:
          'Three hours of waiting and a canceled ferry are nothing "lovely". Baš lijepo is praise attached to an obviously bad situation — the mark of sarcasm.',
      },
      {
        type: 'dictate',
        audio: 'Nije to ništa posebno.',
        answer: 'Nije to ništa posebno.',
        hint: 'Four words: what a modest host says about the dinner she spent all day cooking.',
        explanation:
          'Nije to ništa posebno. — "it is nothing special": self-deprecation that expects to be contradicted, not agreed with.',
      },
    ],
  },

  // ── Building an argument ───────────────────────────────────────────────────
  'argument-structure': {
    text: {
      kind: 'text',
      title: 'Isplati li se studirati u inozemstvu?',
      lines: [
        {
          hr: 'Što se tiče studiranja u inozemstvu, mišljenja su podijeljena, pa ću pokušati odvagnuti obje strane.',
          en: 'As for studying abroad, opinions are divided, so I will try to weigh both sides.',
        },
        {
          hr: 'Glavni je argument za odlazak to što student upoznaje drugačiji sustav i uči jezik u svakodnevnom životu.',
          en: 'The main argument for going is that a student gets to know a different system and learns the language in everyday life.',
        },
        {
          hr: 'Prednost je i u tome što se čovjek u stranoj sredini brže osamostali: nema roditelja koji bi rješavali probleme umjesto njega.',
          en: 'Another advantage is that in a foreign environment a person becomes independent faster: there are no parents to solve problems for him.',
        },
        {
          hr: 'S druge strane, ne smijemo zaboraviti troškove — stanarine u velikim europskim gradovima daleko su više nego u Zagrebu ili Splitu.',
          en: 'On the other hand, we must not forget the costs — rents in big European cities are far higher than in Zagreb or Split.',
        },
        {
          hr: 'Nedostatak je i u tome što se neki ispiti položeni u inozemstvu kod kuće ne priznaju, pa se studij može produžiti.',
          en: 'A further drawback is that some exams passed abroad are not recognized at home, so one’s studies may take longer.',
        },
        {
          hr: 'Kad je riječ o zapošljavanju, poslodavci, doduše, cijene međunarodno iskustvo, ali to uvelike ovisi o struci.',
          en: 'When it comes to employment, employers do, admittedly, value international experience, but that depends greatly on the field.',
        },
        {
          hr: 'Neki će reći da se jezik danas može naučiti i preko interneta; ipak, nijedan tečaj ne može zamijeniti život u zemlji.',
          en: 'Some will say that a language can be learned online nowadays; still, no course can replace living in the country.',
        },
        {
          hr: 'Sve u svemu, smatram da prednosti nadmašuju nedostatke, pod uvjetom da student unaprijed provjeri koji će mu se ispiti priznati.',
          en: 'All in all, I believe the advantages outweigh the drawbacks, provided that the student checks in advance which exams will be recognized.',
        },
        {
          hr: 'Na kraju krajeva, godina u inozemstvu rijetko je izgubljena godina — čak i kad ne ide sve po planu.',
          en: 'At the end of the day, a year abroad is rarely a lost year — even when not everything goes according to plan.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: which drawbacks of studying abroad does the speaker name?',
          options: [
            'Loneliness and the difficulty of the language',
            'High costs, and exams that may not be recognized at home',
            'Bad weather and unfriendly professors',
            'The distance from home and the lack of jobs afterward',
          ],
          correct: 1,
          hint: 'One drawback is about money, the other about paperwork back home.',
          explanation:
            'S druge strane… troškove: rents are far higher. Nedostatak je i u tome što se neki ispiti … ne priznaju, pa se studij može produžiti.',
        },
        {
          q: 'The speaker closes with "Sve u svemu, smatram da prednosti nadmašuju nedostatke, pod uvjetom da…". What kind of conclusion is this?',
          options: [
            'Unreserved enthusiasm: everybody should go',
            'A refusal to decide between the two sides',
            'A weighed judgment in favor — with a condition attached',
            'A conclusion against studying abroad',
          ],
          correct: 2,
          hint: 'Sve u svemu looks back over both sides. Then look at what follows the comma after nedostatke.',
          explanation:
            'Sve u svemu signals that both sides have been weighed; the verdict is positive, but pod uvjetom da limits it. A conclusion with a condition is more convincing than a flat "yes".',
        },
        {
          type: 'type',
          q: 'Now you. The speaker says the value of experience "ovisi o struci". Whether a student copes abroad depends on the person: To ovisi o ____. (osoba)',
          answer: 'osobi',
          hint: 'ovisiti o takes the same case as razgovarati o.',
          explanation:
            'To ovisi o osobi. — ovisiti o + the locative. A useful move in any argument: it grants that the answer is not the same for everybody.',
        },
        {
          type: 'transform',
          q: 'Open the same sentence with the other topic-opener: "When it comes to…". Mind the case — it is not the same one.',
          from: 'Što se tiče cijena, Zagreb je skup.',
          answer: 'Kad je riječ o cijenama, Zagreb je skup.',
          accept: ['Kada je riječ o cijenama, Zagreb je skup.'],
          hint: 'The first opener takes the genitive. This one ends in the preposition o — and o takes its usual case, here in the plural.',
          explanation:
            'Kad je riječ o cijenama, Zagreb je skup. — što se tiče + the genitive (cijena), kad je riječ o + the locative (cijenama). Both announce that you are addressing one aspect on purpose.',
        },
        {
          type: 'transform',
          q: 'Weigh the two facts against each other in one sentence: "On the one hand…, and on the other hand…".',
          from: 'Grad nudi više posla. Na selu je život jeftiniji.',
          answer:
            'S jedne strane, grad nudi više posla, a s druge strane, na selu je život jeftiniji.',
          accept: [
            'S jedne strane, grad nudi više posla, s druge strane, na selu je život jeftiniji.',
            'S jedne strane, grad nudi više posla, ali s druge strane, na selu je život jeftiniji.',
            'S jedne strane, grad nudi više posla, a s druge, na selu je život jeftiniji.',
            'S jedne strane, grad nudi više posla, a s druge strane, život je na selu jeftiniji.',
            'S jedne strane, grad nudi više posla, a s druge strane, život na selu je jeftiniji.',
            'S jedne strane, grad nudi više posla, a s druge je strane život na selu jeftiniji.',
            'S jedne strane, grad nudi više posla, a s druge je strane na selu život jeftiniji.',
            'S jedne strane grad nudi više posla, a s druge strane je na selu život jeftiniji.',
          ],
          hint: 'Each half opens with s + the genitive of "one side" and "the other side"; the small word a turns from the first half to the second.',
          explanation:
            'S jedne strane, grad nudi više posla, a s druge strane, na selu je život jeftiniji. — naming a point on each side is what turns an assertion into an argument.',
        },
      ],
    },
    mix: [
      4,
      7,
      8,
      {
        type: 'match',
        q: 'Each closer tells the reader what kind of ending is coming. Match them.',
        pairs: [
          ['Zaključno', 'a formal, written "in conclusion"'],
          ['Sve u svemu', 'weighs up everything that was said before'],
          ['Ukratko', 'squeezes the point into a few words'],
          ['Na kraju krajeva', 'gives the bottom line: "when all is said and done"'],
          ['Doduše', 'not a closer at all: it grants a point before moving on'],
        ],
        explanation:
          'Zaključno belongs to essays; sve u svemu weighs; ukratko compresses; na kraju krajeva gives the bottom line. Doduše concedes — it belongs in the middle, not at the end.',
      },
      5,
      {
        type: 'sort',
        q: 'Which move in the argument does each opening make?',
        groups: ['Opens a topic', 'Gives a point for or against', 'Draws the conclusion'],
        items: [
          { hr: 'Što se tiče prijevoza…', group: 0 },
          { hr: 'Prednost je u tome što…', group: 1 },
          { hr: 'Ukratko…', group: 2 },
          { hr: 'Kad je riječ o cijenama…', group: 0 },
          { hr: 'S druge strane…', group: 1 },
          { hr: 'Na kraju krajeva…', group: 2 },
        ],
        explanation:
          'An argument has a shape: raise the topic, give a point for and a point against, then conclude. The openers tell the listener which step he is hearing.',
      },
      6,
      {
        type: 'tf',
        q: '"Što se tiče" and "kad je riječ o" do the same job in an argument, and they take the same case.',
        answer: false,
        hint: 'Only the first half of the statement is right. Look at what each phrase ends in.',
        explanation:
          'False. Both raise a topic, but što se tiče takes the genitive, while kad je riječ o ends in the preposition o and so takes the locative.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The problem is that we don’t have enough time."',
        words: ['Problem', 'je', 'u', 'tome', 'što', 'nemamo', 'dovoljno', 'vremena.'],
        accept: ['U tome je problem što nemamo dovoljno vremena.'],
        explanation:
          'Problem je u tome što nemamo dovoljno vremena. — the fixed frame: a noun, je u tome što, and then a whole clause. Any noun fits: prednost, nedostatak, stvar.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("When it comes to the food in the cafeteria, students often complain.")',
        words: [
          'Kad',
          'je',
          'riječ',
          'o',
          'hranu',
          'u',
          'menzi,',
          'studenti',
          'se',
          'često',
          'žale.',
        ],
        wrong: 4,
        answer: 'hrani',
        hint: 'The opener ends in a preposition meaning "about" — and that preposition always takes the same case.',
        explanation:
          'Kad je riječ o hrani u menzi, studenti se često žale. — o + the locative, as in razgovarati o hrani.',
      },
      9,
      {
        type: 'transform',
        q: 'Now name the other side. The DRAWBACK is that the apartment is far from the center (daleko od).',
        from: 'Prednost je u tome što je stan blizu centra.',
        answer: 'Nedostatak je u tome što je stan daleko od centra.',
        accept: ['Nedostatak je u tome što je stan daleko od centra grada.'],
        hint: 'The frame stays exactly as it is; swap the noun for its opposite and the place for its opposite.',
        explanation:
          'Nedostatak je u tome što je stan daleko od centra. — the same workhorse frame carries a point against as easily as a point for.',
      },
      {
        type: 'listen',
        audio: 'Što se tiče plaće, ponuda je odlična, ali radno vrijeme mi nikako ne odgovara.',
        q: 'What does the speaker think of the job offer?',
        options: [
          'Both the pay and the hours are excellent',
          'The pay is excellent, but the working hours do not suit her at all',
          'The pay is too low, though the hours are good',
          'She has not seen the offer yet',
        ],
        correct: 1,
        explanation:
          'Što se tiče plaće raises one aspect — the pay — and praises it; ali turns to the drawback: radno vrijeme mi nikako ne odgovara.',
      },
      {
        type: 'dictate',
        audio: 'Sve u svemu, bila je to dobra odluka.',
        answer: 'Sve u svemu, bila je to dobra odluka.',
        hint: 'Eight words: "All in all, it was a good decision."',
        explanation:
          'Sve u svemu, bila je to dobra odluka. — the closer that weighs everything up, followed by the verdict.',
      },
    ],
  },
};
