// functions/api/content/_data/a1new/batch06.js
//
// New A1 lessons, batch 06 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// Six lessons: phone-call (55), past-irregular (57), past-story (59), future-plans (62),
// dative-prepositions (64), giving-and-sending (66). Each uses only grammar taught at or
// before its own masterOrder: the phone call has no past, no future, no dative and no
// instrumental; past-irregular has no questions or negation (they come at 58); the dative
// prepositions take nouns only (the dative pronouns come at 65).

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'phone-call',
    masterOrder: 55,
    prerequisites: ['modals-basic', 'locative-intro', 'accusative-intro'],
    objectives: [
      'Answer the phone and say who is speaking: Halo? Ovdje Ana.',
      'Ask for someone and understand where they are: Tražim Marka. Na poslu je.',
      'Offer and leave a message, and give your number',
    ],
  },
  {
    id: 'past-irregular',
    masterOrder: 57,
    prerequisites: ['past-tense'],
    objectives: [
      'Say where you went and who came: išao sam, došla je',
      'Use the irregular past of reći, moći, htjeti, jesti and piti',
      'Make every irregular past form agree with who did it',
    ],
  },
  {
    id: 'past-story',
    masterOrder: 59,
    prerequisites: ['past-questions-negation', 'past-irregular'],
    objectives: [
      'Tell what happened in order: prvo, onda, poslije toga, na kraju',
      'Keep sam / je / smo in second place in every sentence of a story',
      'Tell a short story about your day and answer questions about it',
    ],
  },
  {
    id: 'future-plans',
    masterOrder: 62,
    prerequisites: ['future-tense'],
    objectives: [
      'Ask and answer about plans: Što ćeš raditi sutra?',
      'Choose the short form or the long form by where ću stands: Radit ću / Sutra ću raditi',
      'Use the present for a plan that is already fixed: Sutra idem na more.',
    ],
  },
  {
    id: 'dative-prepositions',
    masterOrder: 64,
    prerequisites: ['dative-intro'],
    objectives: [
      'Go to a person with k / ka: Idem k liječniku.',
      'Say which way something goes with prema: Hodamo prema moru.',
      'Recognise nasuprot (opposite) and unatoč (despite) with the dative',
    ],
  },
  {
    id: 'giving-and-sending',
    masterOrder: 66,
    prerequisites: ['object-pronouns', 'dative-intro'],
    objectives: [
      'Say who you give, send, show and tell things to: Dajem mami cvijeće.',
      'Replace the receiver with a short pronoun: Šaljem mu poruku.',
      'Put two short pronouns in the right order: Dao sam mu ga.',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // On the Phone
  // ─────────────────────────────────────────────────────────
  {
    id: 'phone-call',
    title: 'On the Phone',
    subtitle: 'Answering, asking for someone, leaving a message',
    icon: '📞',
    level: 'A1',
    duration: '~7 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'A Conversation With No Faces',
        body: 'A phone call is harder than talking face to face: you cannot point, you cannot see a smile, and the line may be bad. The good news is that a phone call is built almost entirely from things you already know — the present tense, the accusative for the person you are looking for, the locative for where they are, and "mogu li" for polite requests. This lesson puts them together into the handful of sentences every call needs.',
        icon: '📞',
      },
      {
        type: 'rule',
        title: 'Answering: Halo and Ovdje',
        body: 'Croatians answer the phone with "Halo?" or simply "Molim?" (literally "please?", here meaning "yes, I am listening"). To say who you are, use "Ovdje" (here) and your name: Ovdje Ana. — "This is Ana." In a work call, add a greeting and your surname: Dobar dan, ovdje Ana Kovač. You can also say Zovem se Ana Kovač, which you already know.',
        highlight: 'Halo? — Ovdje Ana.',
      },
      {
        type: 'rule',
        title: 'Asking Who Is Calling',
        body: 'If the caller does not say who they are, ask: Tko je na telefonu? (Who is on the phone?) or, more briefly, Tko zove? (Who is calling?). "Na telefonu" is the locative you know from "na poslu" — on the phone is a place, in Croatian as in English.',
        highlight: 'Tko je na telefonu?',
      },
      {
        type: 'rule',
        title: 'Asking for Someone: Tražim + Accusative',
        body: 'To ask for a person, say Tražim … (I am looking for …). The person is the object of "tražiti", so the name takes the accusative: Ivana → Tražim Ivanu. Marko → Tražim Marka (a man is alive, so -a). The simplest alternative is a yes/no question with "je li": Je li Ivana tu? (Is Ivana there?) or Je li Marko doma? (Is Marko at home?).',
        highlight: 'Tražim Marka.',
      },
      {
        type: 'rule',
        title: 'When They Are Not There',
        body: 'The answer usually says where the person is, and that is the locative: Ivana je na poslu. (at work) Marko je u uredu. (in the office) Gospodin Horvat je na sastanku. (in a meeting — sastanak loses its a: na sastanku.) To ask the caller to wait: Trenutak, molim. or Samo trenutak. (Just a moment.) "Nažalost" (unfortunately) softens bad news: Nažalost, Ivana nije tu.',
        highlight: 'Nažalost, Ivana nije tu.',
      },
      {
        type: 'rule',
        title: 'Leaving a Message',
        body: 'Learn "ostaviti poruku" (to leave a message) as one block. The person answering offers: Želite li ostaviti poruku? (Would you like to leave a message?) The caller asks: Mogu li ostaviti poruku? Poruka is feminine, so as the object it is "poruku". Then give your name and number: Moj broj je nula devet osam, dva tri četiri, pet šest sedam. Numbers are said one or two at a time, the way you read them.',
        highlight: 'Mogu li ostaviti poruku?',
      },
      {
        type: 'rule',
        title: 'Ending the Call: Hvala na …',
        body: 'To thank someone FOR something, Croatian says hvala na and puts the thing in the locative — the same ending you use after u and na for a place. Hvala na pozivu. (Thank you for calling — poziv → pozivu.) Hvala na poruci. (Thanks for the message — poruka → poruci, with k → c before -i, as in na slici.) Hvala na informaciji. (Thanks for the information.) Then say goodbye: Doviđenja! or, between friends, Bog!',
        highlight: 'Hvala na pozivu.',
      },
      {
        type: 'rule',
        title: 'When the Line Is Bad',
        body: 'Three sentences rescue almost any call. Ne čujem vas dobro. (I cannot hear you well — "vas" is the polite you, as an object.) Možete li ponoviti, molim? (Can you repeat, please?) Veza je loša. (The connection is bad.) And if someone has dialled you by mistake, say simply: Pogrešan broj. (Wrong number.)',
        highlight: 'Možete li ponoviti, molim?',
      },
      {
        type: 'table',
        title: 'The Phone Call at a Glance',
        headers: ['What you want to do', 'Croatian', 'Grammar inside it'],
        rows: [
          ['Answer', 'Halo? / Molim?', 'a fixed word'],
          ['Say who you are', 'Ovdje Ana.', 'name as it is'],
          ['Ask who is calling', 'Tko je na telefonu?', 'na + locative'],
          ['Ask for someone', 'Tražim Ivanu.', 'accusative: Ivana → Ivanu'],
          ['Ask if they are there', 'Je li Marko tu?', 'je li question'],
          ['Say where they are', 'Na sastanku je.', 'na + locative'],
          ['Offer a message', 'Želite li ostaviti poruku?', 'modal + infinitive'],
          ['Ask for a repeat', 'Možete li ponoviti?', 'modal + infinitive'],
        ],
      },
      {
        type: 'example',
        title: 'A Call Between Friends',
        items: [
          { hr: 'Halo?', en: 'Hello?', note: 'how almost every call starts' },
          {
            hr: 'Bog, ovdje Petra. Je li Ivana doma?',
            en: 'Hi, this is Petra. Is Ivana at home?',
            note: 'ovdje + your name',
          },
          {
            hr: 'Nažalost, nije. Ona je na poslu.',
            en: 'Unfortunately not. She is at work.',
            note: 'posao → na poslu: the a drops out',
          },
          {
            hr: 'Želiš li ostaviti poruku?',
            en: 'Do you want to leave a message?',
            note: 'želiš — the ti form, between friends',
          },
          {
            hr: 'Da, molim. Ivana ima moj broj. Mogu li opet nazvati popodne?',
            en: 'Yes, please. Ivana has my number. Can I call again in the afternoon?',
            note: 'mogu li + infinitive',
          },
          {
            hr: 'Naravno. Ona je obično doma u pet.',
            en: 'Of course. She is usually home at five.',
            note: 'obično (usually) — a habit, so the present',
          },
        ],
      },
      {
        type: 'example',
        title: 'A Call to an Office',
        items: [
          {
            hr: 'Dobar dan, ovdje Marko Babić.',
            en: 'Good afternoon, this is Marko Babić.',
            note: 'formal: greeting + full name',
          },
          {
            hr: 'Tražim gospodina Horvata, molim.',
            en: 'I am looking for Mr Horvat, please.',
            note: 'both words are alive and masculine: gospodina Horvata',
          },
          {
            hr: 'Trenutak, molim. Gospodin Horvat je na sastanku.',
            en: 'One moment, please. Mr Horvat is in a meeting.',
            note: 'sastanak → na sastanku',
          },
          {
            hr: 'Mogu li ostaviti poruku?',
            en: 'Can I leave a message?',
            note: 'poruka → poruku',
          },
          {
            hr: 'Naravno. Koji je vaš broj?',
            en: 'Of course. What is your number?',
            note: 'vaš — the polite your',
          },
          {
            hr: 'Moj broj je nula jedan, četiri pet šest, sedam osam devet.',
            en: 'My number is zero one, four five six, seven eight nine.',
            note: 'said in small groups, as written',
          },
          {
            hr: 'Oprostite, ne čujem vas dobro. Možete li ponoviti?',
            en: 'Sorry, I cannot hear you well. Can you repeat it?',
            note: 'vas — polite you as an object',
          },
          {
            hr: 'Hvala na pozivu. Doviđenja!',
            en: 'Thank you for calling. Goodbye!',
            note: 'hvala na + locative: poziv → pozivu',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You call and want to speak to Ana. What do you say?',
        options: ['Tražim Ana.', 'Tražim Anu.', 'Tražim Ani.', 'Tražim Anom.'],
        correct: 1,
        explanation:
          'Ana is the object of "tražim", so she takes the accusative: -a becomes -u, Anu. "Ana" is the subject form; the other two belong to cases you have not used here.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'The person you want is in the office. How does the other side say it?',
        options: ['On je u ured.', 'On je u uredu.', 'On je na ured.', 'On je u ureda.'],
        correct: 1,
        explanation:
          'Being somewhere is the locative: u uredu. "U ured" would mean going into the office.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, leaving the person you ask for in the dictionary form: "Tražim Marko" — Marko is the object, and a man is alive, so it is Tražim Marka. Second, using the accusative for where someone IS: "Ona je na posao" says she is heading to work; being there is the locative: Ona je na poslu. Third, "Mogu li ostaviti poruka?" — the message is the object too: poruku. And do not start a call with "Ja sam na telefonu"; just say who you are: Ovdje Ana.',
        highlight: 'Tražim Marka',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you say "This is Petar" when you answer the phone?',
            options: ['Ovdje Petar.', 'Tu je Petra.', 'To Petar je.', 'Petar ovdje je.'],
            correct: 0,
            explanation:
              'On the phone "Ovdje" plus your name is the standard way to say who you are: Ovdje Petar.',
          },
          {
            q: 'Complete: "Tražim ___." (I am looking for Ivana.)',
            options: ['Ivana', 'Ivani', 'Ivanu', 'Ivanom'],
            correct: 2,
            explanation:
              'Ivana is the object of "tražim": feminine -a becomes -u, Ivanu. "Ivana" is the subject form, and "Ivani" and "Ivanom" belong to other cases.',
          },
          {
            q: 'Which sentence asks who is calling?',
            options: [
              'Gdje je telefon?',
              'Koji je tvoj broj?',
              'Je li to telefon?',
              'Tko je na telefonu?',
            ],
            correct: 3,
            explanation:
              '"Tko je na telefonu?" asks who is on the line. The others ask where the phone is, what your number is, and whether something is a phone.',
          },
          {
            q: 'Complete: "Gospođa Kovač je na ___." (Mrs Kovač is in a meeting.)',
            options: ['sastanak', 'sastanku', 'sastanka', 'sastanaku'],
            correct: 1,
            explanation:
              'Being somewhere is the locative, and sastanak loses its a when an ending is added: na sastanku. "Sastanaku" keeps a vowel that must drop.',
          },
          {
            q: 'What does "Želite li ostaviti poruku?" mean?',
            options: [
              'Do you want to send a letter?',
              'Would you like to leave a message?',
              'Can you repeat the number?',
              'Is the line bad?',
            ],
            correct: 1,
            explanation:
              'Ostaviti poruku is "to leave a message", and želite li is the polite "would you like".',
          },
          {
            q: 'The line is bad. What do you say?',
            options: [
              'Pogrešan broj.',
              'Hvala na pozivu.',
              'Ne čujem vas dobro.',
              'Trenutak, molim.',
            ],
            correct: 2,
            explanation:
              '"Ne čujem vas dobro" — I cannot hear you well. The others mean "wrong number", "thanks for calling" and "one moment".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'On the Phone — Key Takeaways',
        points: [
          'Answer with Halo? or Molim?, and say who you are with Ovdje + name',
          'Ask who is calling: Tko je na telefonu? / Tko zove?',
          'Ask for someone with Tražim + accusative: Tražim Ivanu, Tražim Marka',
          'Where they are is the locative: na poslu, u uredu, na sastanku',
          'Leave a message as one block: Mogu li ostaviti poruku?',
          'Thank someone for something with hvala na + locative: Hvala na pozivu.',
          'Rescue a bad line: Ne čujem vas dobro. Možete li ponoviti?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Irregular Past
  // ─────────────────────────────────────────────────────────
  {
    id: 'past-irregular',
    title: 'The Irregular Past',
    subtitle: 'išao, došla, rekao, mogla, htio, jeo, pio',
    icon: '🧭',
    level: 'A1',
    duration: '~8 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Verbs That Break the Pattern',
        body: 'You know how to make the past: take the infinitive, swap -ti for -o or -la, and add sam / si / je: raditi → radio sam, radila sam. That rule covers thousands of verbs. A small group does not follow it — and they are some of the commonest verbs in the language: to go, to come, to say, to be able, to want, to eat. This lesson teaches them in four small families, so you learn four patterns instead of ten exceptions.',
        icon: '🧭',
      },
      {
        type: 'rule',
        title: 'Why They Are Different',
        body: 'The regular rule needs an infinitive ending in -ti. Most of these verbs end in -ći instead (ići, doći, reći, moći), and -ći has no -ti to swap. So the past is built on a different, older form of the verb. You do not need to know the history — just the families below. The auxiliary (sam, si, je, smo, ste, su) works exactly as before.',
        highlight: 'ići, doći, reći, moći → no -ti to swap',
      },
      {
        type: 'rule',
        title: 'Family 1: Going and Coming — -šao / -šla',
        body: 'ići (to go) → išao (a man), išla (a woman), išli (a group), išle (a group of only women). doći (to come) → došao, došla, došli. otići (to leave) → otišao, otišla, otišli. naći (to find) → našao, našla, našli. Notice the a in "išao" disappears in "išla" — the same fleeting a you met in "pas → psa". Jučer sam išao u grad. Ana je došla u Zagreb.',
        highlight: 'išao · išla · išli',
      },
      {
        type: 'rule',
        title: 'Family 2: Saying and Being Able — k and g Come Back',
        body: 'reći (to say) → rekao, rekla, rekli. moći (to be able, can) → mogao, mogla, mogli. These verbs hide a k or a g inside the -ći, and in the past it comes back: re-K-ao, mo-G-ao. Marko je rekao "dobar dan". Mogla sam doći rano. (I was able to come early.)',
        highlight: 'rekao · mogao',
      },
      {
        type: 'rule',
        title: 'Family 3: Wanting and Seeing — -io / -jela',
        body: 'htjeti (to want) → htio for a man, htjela for a woman, htjeli for a group. The masculine is short (htio), and the feminine and plural keep the "je" of the infinitive (htjela). Many -jeti verbs do the same: vidjeti → vidio, vidjela; živjeti → živio, živjela. Htio sam kavu, a Ana je htjela čaj.',
        highlight: 'htio · htjela',
      },
      {
        type: 'rule',
        title: 'Family 4: Eating and Drinking — Short Stems',
        body: 'jesti (to eat) → jeo, jela, jeli. piti (to drink) → pio, pila, pili. biti (to be) → bio, bila, bili. The stem is tiny (je-, pi-, bi-), so the masculine is just stem + o, and the others are stem + la, li. Jeli smo ribu. Pila sam vodu. Bio sam na moru.',
        highlight: 'jeo · pio · bio',
      },
      {
        type: 'table',
        title: 'The Irregular Past at a Glance',
        headers: ['Infinitive', 'A man (on)', 'A woman (ona)', 'A group (oni)', 'Only women (one)'],
        rows: [
          ['ići — to go', 'išao', 'išla', 'išli', 'išle'],
          ['doći — to come', 'došao', 'došla', 'došli', 'došle'],
          ['otići — to leave', 'otišao', 'otišla', 'otišli', 'otišle'],
          ['reći — to say', 'rekao', 'rekla', 'rekli', 'rekle'],
          ['moći — can', 'mogao', 'mogla', 'mogli', 'mogle'],
          ['htjeti — to want', 'htio', 'htjela', 'htjeli', 'htjele'],
          ['jesti — to eat', 'jeo', 'jela', 'jeli', 'jele'],
          ['piti — to drink', 'pio', 'pila', 'pili', 'pile'],
          ['biti — to be', 'bio', 'bila', 'bili', 'bile'],
        ],
      },
      {
        type: 'example',
        title: 'Going, Coming, Leaving',
        items: [
          {
            hr: 'Jučer sam išao u grad.',
            en: 'Yesterday I went to town. (a man speaking)',
            note: 'ići → išao',
          },
          {
            hr: 'Ana je došla u Zagreb u srpnju.',
            en: 'Ana came to Zagreb in July.',
            note: 'doći → došla',
          },
          {
            hr: 'Moji prijatelji su išli na koncert.',
            en: 'My friends went to a concert.',
            note: 'a group: išli',
          },
          {
            hr: 'Otišla je na posao u osam.',
            en: 'She left for work at eight.',
            note: 'otići → otišla',
          },
          {
            hr: 'Našao sam ključ u kuhinji.',
            en: 'I found the key in the kitchen.',
            note: 'naći → našao',
          },
          {
            hr: 'Mama i tata su došli u subotu.',
            en: 'Mum and dad came on Saturday.',
            note: 'a mixed group: došli',
          },
        ],
      },
      {
        type: 'example',
        title: 'Saying, Wanting, Eating, Drinking',
        items: [
          {
            hr: 'Konobar je rekao: "Kuhinja je zatvorena."',
            en: 'The waiter said: "The kitchen is closed."',
            note: 'reći → rekao',
          },
          {
            hr: 'Mogla sam doći rano.',
            en: 'I was able to come early. (a woman speaking)',
            note: 'moći → mogla',
          },
          {
            hr: 'Htio sam kavu, a Ana je htjela čaj.',
            en: 'I wanted coffee, and Ana wanted tea.',
            note: 'htio for him, htjela for her',
          },
          {
            hr: 'Jeli smo ribu na moru.',
            en: 'We ate fish at the seaside.',
            note: 'jesti → jeli',
          },
          {
            hr: 'Pila sam vodu i sok.',
            en: 'I drank water and juice. (a woman speaking)',
            note: 'piti → pila',
          },
          {
            hr: 'Bili smo u Splitu u kolovozu.',
            en: 'We were in Split in August.',
            note: 'biti → bili',
          },
          {
            hr: 'Vidio sam more prvi put.',
            en: 'I saw the sea for the first time.',
            note: 'vidjeti → vidio, like htio',
          },
          {
            hr: 'Moja sestra je živjela u Zadru.',
            en: 'My sister lived in Zadar.',
            note: 'živjeti → živjela, like htjela',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Marko speaking: "Jučer sam ___ u kino." (ići)',
        options: ['ićio', 'išao', 'išla', 'idio'],
        correct: 1,
        explanation:
          'ići belongs to the -šao family, and Marko is a man: išao. "Išla" is the woman\'s form; "ićio" and "idio" do not exist.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Ana speaking: "___ sam čaj." (htjeti — I wanted tea.)',
        options: ['Htio', 'Htjela', 'Htjeo', 'Htila'],
        correct: 1,
        explanation:
          'A woman says htjela — the feminine keeps the "je". The man says htio. "Htjeo" and "htila" mix the two patterns.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, forcing the regular rule onto a -ći verb: "ićio", "doćio", "moćio" do not exist — the forms are išao, došao, mogao. Second, mixing the two halves of htjeti: the man says Htio sam, never "htjeo"; the woman says Htjela sam, never "htila". Third, building jesti like a regular verb: the past is jeo, jela, not "jestio". And keep the auxiliary second: Išao sam kući, not "Sam išao kući".',
        highlight: 'Htio sam',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Ivana speaking: "Jučer sam ___ na more." (I went to the seaside.)',
            options: ['išao', 'išla', 'išle', 'ićila'],
            correct: 1,
            explanation:
              'Ivana is a woman: išla. "Išao" is a man, "išle" a group of women, and "ićila" does not exist.',
          },
          {
            q: 'What is the past of "reći" for a man?',
            options: ['rečio', 'rekla', 'rekao', 'reko'],
            correct: 2,
            explanation:
              'The hidden k comes back: rekao. "Rekla" is the feminine, "rečio" forces the regular rule, and "reko" is colloquial speech, not the standard form.',
          },
          {
            q: 'Complete: "Gosti su ___ u sedam." (The guests came at seven.)',
            options: ['došli', 'došao', 'došla', 'doćili'],
            correct: 0,
            explanation:
              'A group (gosti) takes -li: došli. "Došao" and "došla" are one man and one woman.',
          },
          {
            q: 'Which sentence is correct? (We ate pizza.)',
            options: [
              'Jestili smo pizzu.',
              'Jedli smo pizzu.',
              'Jeli smo pizza.',
              'Jeli smo pizzu.',
            ],
            correct: 3,
            explanation:
              'jesti → jeli for a group, and the pizza is the object: pizzu. "Jestili" and "jedli" are invented forms.',
          },
          {
            q: 'Petar speaking: how does he say "I was able"?',
            options: ['Moćio sam.', 'Mogla sam.', 'Mogao sam.', 'Mogo sam.'],
            correct: 2,
            explanation:
              'Petar is a man, and the hidden g comes back: Mogao sam. "Mogla" is the woman\'s form; "mogo" is colloquial speech.',
          },
          {
            q: 'Which form fits a woman who drank coffee?',
            options: ['pio', 'pila', 'pijela', 'pili'],
            correct: 1,
            explanation:
              'piti → pila for a woman, pio for a man, pili for a group. "Pijela" does not exist.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Irregular Past — Key Takeaways',
        points: [
          'Going and coming: išao / išla, došao / došla, otišao, našao',
          'Hidden k and g come back: rekao / rekla, mogao / mogla',
          'htjeti: htio for a man, htjela for a woman; vidio / vidjela the same way',
          'Short stems: jeo / jela, pio / pila, bio / bila',
          'The auxiliary sam / si / je / smo / ste / su works exactly as before',
          'Every form agrees with who did it: -o or -ao for a man, -la for a woman, -li for a group (or a mixed group), -le for a group of only women',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Telling a Story in the Past
  // ─────────────────────────────────────────────────────────
  {
    id: 'past-story',
    title: 'Telling a Story',
    subtitle: 'prvo, onda, poslije toga, na kraju',
    icon: '📖',
    level: 'A1',
    duration: '~8 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'From One Sentence to a Story',
        body: 'You can now say what happened: Išao sam u grad. A story is several of those in a row, joined by little words that say WHAT CAME NEXT. English uses "first", "then", "after that", "in the end". Croatian has the same set, and once you have them you can tell someone about your weekend, your trip or your day.',
        icon: '📖',
      },
      {
        type: 'rule',
        title: 'The Sequence Words',
        body: 'prvo — first. onda — then. zatim — then, next (a little more formal than onda). poslije toga — after that (learn it as one block). kasnije — later. na kraju — in the end, finally. These are the joints of a story: Prvo sam doručkovao. Onda sam išao na posao. Na kraju sam bio umoran.',
        highlight: 'prvo · onda · poslije toga · na kraju',
      },
      {
        type: 'rule',
        title: 'The Time Words',
        body: 'Stories also need WHEN. jučer — yesterday. ujutro — in the morning. popodne — in the afternoon. navečer — in the evening. u subotu — on Saturday (u + the day in the accusative, which you know). prošli tjedan — last week. Jučer ujutro sam pila kavu. U subotu navečer smo išli u kino.',
        highlight: 'jučer · ujutro · popodne · navečer',
      },
      {
        type: 'rule',
        title: 'The Second-Place Rule Does Not Change',
        body: 'Sam / si / je / smo / ste / su always stand in SECOND place. In a story the first place is often taken by a sequence word, so the auxiliary moves up to sit right after it, and the participle follows: Prvo SAM doručkovao. Onda SMO išli u park. A block of two words counts as one place: Poslije toga SAM gledao film. Na kraju SMO bili umorni.',
        highlight: 'Prvo sam doručkovao.',
      },
      {
        type: 'rule',
        title: 'Joining Two Actions With i',
        body: 'When two actions have the same person, Croatian can join them with "i" and say the auxiliary only once: Ustao sam i doručkovao. (I got up and had breakfast.) Kupila je kruh i otišla kući. This keeps a story moving without repeating "sam" in every clause.',
        highlight: 'Ustao sam i doručkovao.',
      },
      {
        type: 'rule',
        title: 'Keep the Teller the Same',
        body: 'In a story the participle must agree with the same person every time. A woman telling her day says ustala, pila, išla, kuhala — all with -la. A man says ustao, pio, išao, kuhao. A couple or a family says ustali, pili, išli. Switching halfway through is the commonest slip in a spoken story.',
        highlight: 'ustala, pila, išla, kuhala',
      },
      {
        type: 'table',
        title: 'Story Words at a Glance',
        headers: ['Word', 'Meaning', 'In a sentence'],
        rows: [
          ['prvo', 'first', 'Prvo sam pila kavu.'],
          ['onda', 'then', 'Onda sam išla na tržnicu.'],
          ['zatim', 'next, then', 'Zatim smo jeli ručak.'],
          ['poslije toga', 'after that', 'Poslije toga sam čitala.'],
          ['kasnije', 'later', 'Kasnije je došao Marko.'],
          ['na kraju', 'in the end', 'Na kraju smo bili umorni.'],
          ['jučer', 'yesterday', 'Jučer sam radio.'],
          ['navečer', 'in the evening', 'Navečer smo gledali film.'],
        ],
      },
      {
        type: 'example',
        title: 'Moja subota — Ana Tells Her Saturday',
        items: [
          {
            hr: 'U subotu sam ustala rano.',
            en: 'On Saturday I got up early.',
            note: 'ustati → ustala',
          },
          {
            hr: 'Prvo sam pila kavu na balkonu.',
            en: 'First I drank coffee on the balcony.',
            note: 'sam after prvo',
          },
          {
            hr: 'Onda sam išla na tržnicu i kupila kruh i sir.',
            en: 'Then I went to the market and bought bread and cheese.',
            note: 'one sam for both actions',
          },
          {
            hr: 'Poslije toga sam kuhala ručak.',
            en: 'After that I cooked lunch.',
            note: 'poslije toga counts as one place',
          },
          {
            hr: 'Popodne je došla moja sestra.',
            en: 'In the afternoon my sister came.',
            note: 'doći → došla',
          },
          {
            hr: 'Zatim smo išle u park.',
            en: 'Then we went to the park.',
            note: 'two women: išle',
          },
          {
            hr: 'Navečer smo gledale film.',
            en: 'In the evening we watched a film.',
            note: 'gledati → gledale',
          },
          {
            hr: 'Na kraju sam bila jako umorna.',
            en: 'In the end I was very tired.',
            note: 'umorna agrees with Ana',
          },
        ],
      },
      {
        type: 'example',
        title: 'Questions and Answers About a Day',
        items: [
          {
            hr: 'Što si radio jučer?',
            en: 'What did you do yesterday? (to a man)',
            note: 'a question word first, then si',
          },
          {
            hr: 'Prvo sam radio, a onda sam igrao nogomet.',
            en: 'First I worked, and then I played football.',
            note: 'a onda — and then',
          },
          {
            hr: 'Jesi li bio na moru?',
            en: 'Were you at the seaside?',
            note: 'the yes/no question you know',
          },
          {
            hr: 'Nisam, bio sam u Zagrebu.',
            en: 'No, I was in Zagreb.',
            note: 'nisam — the negative auxiliary',
          },
          {
            hr: 'Kasnije smo jeli pizzu u restoranu.',
            en: 'Later we ate pizza in a restaurant.',
            note: 'jesti → jeli',
          },
          {
            hr: 'Nismo išli kući rano.',
            en: 'We did not go home early.',
            note: 'nismo + participle',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Put it in order: "Onda / išao / sam / u grad."',
        options: [
          'Onda išao sam u grad.',
          'Onda sam išao u grad.',
          'Sam onda išao u grad.',
          'Onda išao u grad sam.',
        ],
        correct: 1,
        explanation:
          'The auxiliary sits in second place, straight after "onda": Onda sam išao u grad.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which word means "in the end"?',
        options: ['prvo', 'onda', 'na kraju', 'jučer'],
        correct: 2,
        explanation: 'Na kraju — in the end. Prvo is first, onda is then, jučer is yesterday.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the English word order: "Prvo doručkovao sam" — the auxiliary must come right after the first unit: Prvo sam doručkovao. Second, splitting "poslije toga": "Poslije sam toga gledao film" — the two words are one block, and the auxiliary comes after both: Poslije toga sam gledao film. Third, changing the teller halfway: a woman who started with "ustala sam" cannot finish with "bio sam umoran" — it is bila sam umorna.',
        highlight: 'Prvo sam doručkovao.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which sentence is correct?',
            options: [
              'Prvo sam pio kavu.',
              'Prvo pio sam kavu.',
              'Sam prvo pio kavu.',
              'Prvo pio kavu sam.',
            ],
            correct: 0,
            explanation:
              'The auxiliary sits in second place, right after "prvo": Prvo sam pio kavu.',
          },
          {
            q: 'What does "poslije toga" mean?',
            options: ['before that', 'yesterday', 'after that', 'first of all'],
            correct: 2,
            explanation: 'Poslije toga — after that. Learn it as one block.',
          },
          {
            q: 'Complete: "Poslije toga ___ gledali film." (After that we watched a film.)',
            options: ['su', 'smo', 'ste', 'sam'],
            correct: 1,
            explanation: 'We → smo. "Su" is they, "ste" is you all, "sam" is I.',
          },
          {
            q: 'Marija is telling her day. Which line fits her story?',
            options: [
              'Navečer sam bio umoran.',
              'Navečer sam bili umorni.',
              'Navečer bila sam umorna.',
              'Navečer sam bila umorna.',
            ],
            correct: 3,
            explanation:
              'Marija is a woman, so bila and umorna, and the auxiliary stays second: Navečer sam bila umorna.',
          },
          {
            q: 'Which word means "in the evening"?',
            options: ['ujutro', 'popodne', 'kasnije', 'navečer'],
            correct: 3,
            explanation:
              'Navečer — in the evening. Ujutro is morning, popodne afternoon, kasnije later.',
          },
          {
            q: 'Which sentence joins two actions with one auxiliary?',
            options: [
              'Ustao sam i doručkovao.',
              'Ustao i sam doručkovao.',
              'Sam ustao i doručkovao.',
              'Ustao i doručkovao sam sam.',
            ],
            correct: 0,
            explanation:
              'With "i" and the same person, the auxiliary is said once, in second place: Ustao sam i doručkovao.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Telling a Story — Key Takeaways',
        points: [
          'Sequence words: prvo, onda, zatim, poslije toga, kasnije, na kraju',
          'Time words: jučer, ujutro, popodne, navečer, u subotu',
          'The auxiliary stays in second place: Prvo sam…, Onda smo…',
          'Poslije toga and na kraju count as one place each',
          'Two actions, one person: Ustao sam i doručkovao.',
          'Keep the teller the same: a woman says -la all the way through',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Making Plans
  // ─────────────────────────────────────────────────────────
  {
    id: 'future-plans',
    title: 'Making Plans',
    subtitle: 'Što ćeš raditi sutra? — radit ću, ići ću, sutra ću…',
    icon: '🗓️',
    level: 'A1',
    duration: '~8 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'Talking About Tomorrow',
        body: 'You have met the future: ću, ćeš, će plus an infinitive. Now you will use it the way people actually do — to ask a friend what they are doing at the weekend, to say what you plan for the summer, to turn an invitation down politely. The one new thing to master is WHERE ću goes, because that decides whether the verb is written long (raditi) or short (radit).',
        icon: '🗓️',
      },
      {
        type: 'rule',
        title: 'The Question Everyone Asks',
        body: 'Što ćeš raditi sutra? — What will you do tomorrow? Što ćeš raditi za vikend? — What will you do at the weekend? (za + accusative, which you know.) To a stranger or more than one person: Što ćete raditi? The answer uses the same ću: Radit ću. / Ići ću na more. / Učit ću hrvatski.',
        highlight: 'Što ćeš raditi sutra?',
      },
      {
        type: 'rule',
        title: 'Ću Wants Second Place',
        body: 'Ću, ćeš, će, ćemo, ćete, će are small words that must stand in SECOND place in the sentence, just like sam and je. So the question is always: what comes first? If something else is first — a time word, a question word, a pronoun — ću sits after it and the verb follows in full: Sutra ću raditi. Što ćeš raditi? Ja ću raditi.',
        highlight: 'Sutra ću raditi.',
      },
      {
        type: 'rule',
        title: 'Verb First: the Short Form',
        body: 'If you start with the verb, ću comes straight after it, and a verb in -ti drops its final -i: raditi → Radit ću. gledati → Gledat ćemo film. putovati → Putovat ću u Split. It is still written as two words. Both "Sutra ću raditi" and "Radit ću sutra" are correct — they just put a different word first.',
        highlight: 'Radit ću sutra.',
      },
      {
        type: 'rule',
        title: 'Verbs in -ći Never Shorten',
        body: 'Only -ti verbs shorten. A verb in -ći keeps its whole infinitive, whatever stands before ću: ići → Ići ću na more. doći → Doći ćemo u subotu. moći → Moći ću doći. There is no form "ić ću".',
        highlight: 'Ići ću na more.',
      },
      {
        type: 'rule',
        title: 'Saying No, and Plans That Are Fixed',
        body: 'The negative is one full word, neću (I will not), and it CAN stand first: Neću raditi sutra. Nećemo ići na more. For a plan that is already arranged, Croatian often uses the present, like English "I am going": Sutra idem na more. U subotu igramo tenis. Both are natural; the future says "I will", the present says "it is fixed".',
        highlight: 'Neću raditi sutra.',
      },
      {
        type: 'table',
        title: 'Where Ću Goes',
        headers: ['First word', 'Then', 'Example'],
        rows: [
          ['a -ti verb', 'short verb + ću', 'Radit ću sutra.'],
          ['a -ći verb', 'full verb + ću', 'Ići ću u grad.'],
          ['a time word', 'ću + full verb', 'Sutra ću raditi.'],
          ['a question word', 'ćeš + full verb', 'Što ćeš raditi?'],
          ['a pronoun', 'ću + full verb', 'Ja ću kuhati.'],
          ['neću', 'full verb', 'Neću raditi.'],
        ],
      },
      {
        type: 'example',
        title: 'Plans for the Weekend',
        items: [
          {
            hr: 'Što ćeš raditi za vikend?',
            en: 'What will you do at the weekend?',
            note: 'question word first, then ćeš',
          },
          {
            hr: 'U subotu ću čistiti stan.',
            en: 'On Saturday I will clean the flat.',
            note: 'time first → full čistiti',
          },
          {
            hr: 'Gledat ćemo utakmicu na televiziji.',
            en: 'We will watch the match on television.',
            note: 'verb first → short gledat',
          },
          {
            hr: 'U nedjelju idem na more.',
            en: 'On Sunday I am going to the seaside.',
            note: 'a fixed plan: the present',
          },
          {
            hr: 'Hoćeš li i ti ići na more?',
            en: 'Will you go to the seaside too?',
            note: 'a yes/no question: hoćeš li + full verb',
          },
          {
            hr: 'Neću, moram učiti.',
            en: 'No, I have to study.',
            note: 'neću can stand first',
          },
        ],
      },
      {
        type: 'example',
        title: 'Plans for the Summer',
        items: [
          {
            hr: 'Ovo ljeto ćemo putovati u Dalmaciju.',
            en: 'This summer we will travel to Dalmatia.',
            note: 'ovo ljeto first → full putovati',
          },
          {
            hr: 'Putovat ćemo cijelo ljeto.',
            en: 'We will travel all summer.',
            note: 'verb first → short putovat',
          },
          {
            hr: 'Prvo ćemo biti u Splitu.',
            en: 'First we will be in Split.',
            note: 'prvo first → ćemo second',
          },
          {
            hr: 'Onda ćemo ići na Hvar.',
            en: 'Then we will go to Hvar.',
            note: 'ići keeps its full form',
          },
          {
            hr: 'Moja sestra će doći u kolovozu.',
            en: 'My sister will come in August.',
            note: 'the subject first, then će',
          },
          {
            hr: 'Svaki dan ćemo plivati u moru.',
            en: 'Every day we will swim in the sea.',
            note: 'svaki dan first → full plivati',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is correct?',
        options: ['Raditi ću sutra.', 'Radit ću sutra.', 'Ću raditi sutra.', 'Sutra radit ću.'],
        correct: 1,
        explanation:
          'With the verb first, ću follows it and the -i drops: Radit ću sutra. Ću can never stand first, and after "sutra" the verb is written in full: Sutra ću raditi.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "I will go to the cinema" starting with the verb?',
        options: ['Ić ću u kino.', 'Ići ću u kino.', 'Ićit ću u kino.', 'Ću ići u kino.'],
        correct: 1,
        explanation: 'ići is a -ći verb and never shortens: Ići ću u kino.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, writing the full infinitive when ću follows it: "Raditi ću" — with the verb first, standard Croatian drops the -i: Radit ću sutra. Second, shortening a -ći verb: "Ić ću" does not exist — it is Ići ću. Third, starting a sentence with ću: "Ću raditi" is impossible, because ću needs something before it. Fourth, writing the short form as one word: "radiću" is not standard; it is two words, radit ću.',
        highlight: 'Radit ću sutra.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Sutra ___ raditi." (Tomorrow I will work.)',
            options: ['ću', 'ćeš', 'će', 'ćemo'],
            correct: 0,
            explanation: 'I → ću, standing second after "sutra": Sutra ću raditi.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Gledati ćemo film.',
              'Ćemo gledati film.',
              'Gledat ćemo film.',
              'Gledatćemo film.',
            ],
            correct: 2,
            explanation:
              'Verb first, so the -i drops and ćemo follows as a separate word: Gledat ćemo film.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ić ćemo na more.',
              'Ići ćemo na more.',
              'Ićit ćemo na more.',
              'Ćemo ići na more.',
            ],
            correct: 1,
            explanation: 'A -ći verb never shortens: Ići ćemo na more.',
          },
          {
            q: 'How do you ask a friend "What will you do at the weekend?"',
            options: [
              'Što radiš jučer?',
              'Što ćeš raditi za vikend?',
              'Što si radio za vikend?',
              'Što ću raditi za vikend?',
            ],
            correct: 1,
            explanation:
              'You (ti) → ćeš, and za vikend is "at the weekend". "Što si radio" asks about the past, "Što ću" asks about yourself.',
          },
          {
            q: 'Which sentence says "I will not work tomorrow"?',
            options: [
              'Ne ću raditi sutra.',
              'Neću raditi sutra.',
              'Ću ne raditi sutra.',
              'Nisam radio sutra.',
            ],
            correct: 1,
            explanation:
              'The negative is one word, neću, and it may stand first. "Nisam radio" is the past.',
          },
          {
            q: 'A fixed plan, said with the present: "Tomorrow I am going to Zagreb."',
            options: [
              'Sutra idem u Zagreb.',
              'Sutra išao sam u Zagreb.',
              'Sutra ić ću u Zagreb.',
              'Jučer idem u Zagreb.',
            ],
            correct: 0,
            explanation:
              'For an arranged plan the present works like English "I am going": Sutra idem u Zagreb.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Making Plans — Key Takeaways',
        points: [
          'Ask: Što ćeš raditi sutra? / za vikend?',
          'Ću stands second: Sutra ću raditi. Što ćeš raditi?',
          'Verb first, -ti drops: Radit ću. Gledat ćemo. (two words)',
          '-ći verbs never shorten: Ići ću. Doći ćemo.',
          'Neću is one full word and may stand first',
          'A fixed plan can use the present: Sutra idem na more.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Dative After Prepositions
  // ─────────────────────────────────────────────────────────
  {
    id: 'dative-prepositions',
    title: 'Dative After Prepositions',
    subtitle: 'k / ka, prema, nasuprot, unatoč',
    icon: '🧭',
    level: 'A1',
    duration: '~7 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Four Small Exceptions',
        body: 'In the last lesson the dative had no preposition: Dajem knjigu Ani. That is true almost all the time. A handful of prepositions, however, are followed by the dative, and two of them are everyday words: k (to a person) and prema (towards). The endings are the ones you already know — -u for masculine and neuter, -i for feminine — so the only new thing is which words call for them.',
        icon: '🧭',
      },
      {
        type: 'rule',
        title: 'The Endings You Know',
        body: 'Masculine and neuter nouns take -u: liječnik → liječniku, more → moru. Feminine nouns in -a take -i: baka → baki, rijeka → rijeci. Remember the sound change you learned for k, g and h before -i: rijeka → rijeci, knjiga → knjizi. (Family words like baka keep their k: baki, not baci. Mama has no k at all: mami.)',
        highlight: '-u (m., n.) · -i (f.)',
      },
      {
        type: 'rule',
        title: 'k / ka: Going to a Person',
        body: '"k" means "to" when you go to SOMEONE: Idem k liječniku. (I am going to the doctor.) Idemo k baki. (We are going to grandma\'s.) Before a word that starts with k or g it becomes "ka", so it can be said: Idem ka kolegi. Compare a PLACE, which takes u or na plus the accusative: Idem u bolnicu. but Idem k liječniku.',
        highlight: 'Idem k liječniku.',
      },
      {
        type: 'rule',
        title: 'prema: Towards',
        body: '"prema" means towards, in the direction of: Hodamo prema moru. (We are walking towards the sea.) Autobus ide prema Zagrebu. (The bus is going towards Zagreb.) It does not say you arrive — only which way you are heading. It also means "according to": prema planu (according to the plan), prema prognozi (according to the forecast).',
        highlight: 'Hodamo prema moru.',
      },
      {
        type: 'rule',
        title: 'nasuprot and unatoč',
        body: 'Two more you will meet in signs and stories. "nasuprot" — opposite: Banka je nasuprot pošti. (The bank is opposite the post office.) "unatoč" — despite, in spite of: Idemo na plažu unatoč kiši. (We are going to the beach despite the rain.) Both take the same dative endings.',
        highlight: 'nasuprot pošti · unatoč kiši',
      },
      {
        type: 'table',
        title: 'The Four Dative Prepositions',
        headers: ['Preposition', 'Meaning', 'Example'],
        rows: [
          ['k / ka', 'to (a person)', 'Idem k frizeru.'],
          ['prema', 'towards; according to', 'Idemo prema centru.'],
          ['nasuprot', 'opposite', 'Kafić je nasuprot crkvi.'],
          ['unatoč', 'despite', 'Radimo unatoč vrućini.'],
        ],
      },
      {
        type: 'example',
        title: 'k / ka in Use',
        items: [
          {
            hr: 'Sutra idem k liječniku.',
            en: 'Tomorrow I am going to the doctor.',
            note: 'liječnik → liječniku',
          },
          {
            hr: 'U nedjelju idemo k baki.',
            en: "On Sunday we are going to grandma's.",
            note: 'baka → baki',
          },
          {
            hr: 'Ana ide k frizeru u subotu.',
            en: 'Ana is going to the hairdresser on Saturday.',
            note: 'frizer → frizeru',
          },
          {
            hr: 'Sutra idem ka kolegi.',
            en: "Tomorrow I am going to my colleague's.",
            note: 'ka before k-',
          },
          { hr: 'Djeca trče k mami.', en: 'The children are running to mum.', note: 'mama → mami' },
        ],
      },
      {
        type: 'example',
        title: 'prema, nasuprot, unatoč',
        items: [
          { hr: 'Hodamo prema moru.', en: 'We are walking towards the sea.', note: 'more → moru' },
          {
            hr: 'Ovaj vlak ide prema Splitu.',
            en: 'This train is going towards Split.',
            note: 'Split → Splitu',
          },
          {
            hr: 'Prema prognozi, sutra će biti sunčano.',
            en: 'According to the forecast, it will be sunny tomorrow.',
            note: 'prognoza → prognozi',
          },
          {
            hr: 'Naš stan je nasuprot parku.',
            en: 'Our flat is opposite the park.',
            note: 'park → parku',
          },
          {
            hr: 'Banka je nasuprot pošti.',
            en: 'The bank is opposite the post office.',
            note: 'pošta → pošti',
          },
          {
            hr: 'Idemo na plažu unatoč kiši.',
            en: 'We are going to the beach despite the rain.',
            note: 'kiša → kiši',
          },
          {
            hr: 'Turisti šeću prema rijeci.',
            en: 'The tourists are walking towards the river.',
            note: 'rijeka → rijeci',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Idem k ___." (I am going to the doctor.)',
        options: ['liječnik', 'liječnika', 'liječniku', 'liječnikom'],
        correct: 2,
        explanation: 'k takes the dative, and a masculine noun takes -u: k liječniku.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which preposition fits "I am going ___ my colleague\'s" (kolega)?',
        options: ['k', 'ka', 'u', 'na'],
        correct: 1,
        explanation:
          'Going to a person is k, and before a word starting with k it becomes ka: ka kolegi. U and na are for places.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, sending a person through "u": "Idem u liječnika" — a person is not a place you go into; it is Idem k liječniku. Second, leaving the noun in its dictionary form: "prema more" — prema takes the dative: prema moru. Third, forgetting the extra a: "k kolegi" is hard to say, so it is ka kolegi. And remember: this dative does not mean "to whom something is given" — after these four words it simply follows the preposition.',
        highlight: 'Idem k liječniku.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "U subotu idemo k ___." (On Saturday we are going to grandma\'s.)',
            options: ['baka', 'baki', 'baku', 'bake'],
            correct: 1,
            explanation:
              'k takes the dative; feminine -a becomes -i: k baki. "Baku" is the accusative.',
          },
          {
            q: 'Complete: "Hodamo prema ___." (We are walking towards the sea.)',
            options: ['more', 'mora', 'moru', 'morem'],
            correct: 2,
            explanation: 'prema takes the dative; neuter more → moru.',
          },
          {
            q: 'Which sentence is correct? (I am going to the hairdresser.)',
            options: ['Idem u frizera.', 'Idem k frizer.', 'Idem na frizeru.', 'Idem k frizeru.'],
            correct: 3,
            explanation: 'Going to a person is k plus the dative: Idem k frizeru.',
          },
          {
            q: 'What does "nasuprot" mean?',
            options: ['despite', 'opposite', 'towards', 'behind'],
            correct: 1,
            explanation: 'nasuprot — opposite: Banka je nasuprot pošti.',
          },
          {
            q: 'Complete: "Idemo van unatoč ___." (We are going out despite the rain.)',
            options: ['kiši', 'kišu', 'kiša', 'kiše'],
            correct: 0,
            explanation: 'unatoč takes the dative; kiša → kiši.',
          },
          {
            q: 'Complete: "Turisti idu prema ___." (towards the river — rijeka)',
            options: ['rijeki', 'rijeku', 'rijeci', 'rijeka'],
            correct: 2,
            explanation:
              'prema takes the dative, -i for a feminine noun, and k before -i becomes c: rijeci. "Rijeki" skips the sound change.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Dative After Prepositions — Key Takeaways',
        points: [
          'Most datives have no preposition — these four are the exceptions',
          'k / ka — to a person: Idem k liječniku. ka before k- and g-: ka kolegi',
          'Places take u / na + accusative; people take k + dative',
          'prema — towards, or according to: prema moru, prema prognozi',
          'nasuprot — opposite; unatoč — despite',
          'Endings: -u for masculine and neuter, -i for feminine (rijeka → rijeci)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Giving and Sending
  // ─────────────────────────────────────────────────────────
  {
    id: 'giving-and-sending',
    title: 'Giving, Sending, Telling',
    subtitle: 'Dajem mami cvijeće. Šaljem mu poruku. Dao sam mu ga.',
    icon: '🎁',
    level: 'A1',
    duration: '~8 min',
    color: '#c2410c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Two Objects in One Sentence',
        body: 'Some verbs naturally have two objects: WHAT you give and WHO gets it. "I give mum flowers." "I send my brother a message." "I show my friend the town." In Croatian the WHAT is the accusative and the WHO is the dative — and with both cases now in your hands, you can build these sentences in the present, the past and the future.',
        icon: '🎁',
      },
      {
        type: 'rule',
        title: 'Who Gets It: the Dative',
        body: 'The person who receives is the dative: -u for masculine (bratu, prijatelju), -i for feminine (mami, sestri, Ani). The thing is the accusative: poruka → poruku, knjiga → knjigu, cvijeće stays cvijeće. So: Dajem mami cvijeće. (I give mum flowers.) Šaljem bratu poruku. (I send my brother a message.) The question for the receiver is "Komu?" — Komu šalješ poruku? (Who are you sending a message to?)',
        highlight: 'Dajem mami cvijeće.',
      },
      {
        type: 'rule',
        title: 'The Giving Verbs',
        body: 'Each of these actions comes as a PAIR of verbs in Croatian. One is for doing it now, again or as a habit, and it gives the present: davati → dajem (I give), slati → šaljem (I send), kazati → kažem (I tell), pokazivati → pokazujem (I show), kupovati → kupujem (I buy). The other is for getting it done once, and it is the one you usually hear in the past and the future: dati → dao / dala, dat ću; poslati → poslao / poslala, poslat ću; reći → rekao / rekla, reći ću; pokazati → pokazao / pokazala, pokazat ću; kupiti → kupio / kupila, kupit ću. For now, learn each pair together: davati / dati, slati / poslati, kazati / reći, pokazivati / pokazati, kupovati / kupiti.',
        highlight: 'dajem · šaljem · kažem · pokazujem',
      },
      {
        type: 'rule',
        title: 'The Receiver as a Short Pronoun',
        body: 'Usually you already know who the receiver is, so you use a short dative pronoun: mi (to me), ti (to you), mu (to him), joj (to her), nam (to us), vam (to you all), im (to them). Like all short words, it stands in second place: Šaljem mu poruku. Dajem joj knjigu. Kažem ti istinu.',
        highlight: 'Šaljem mu poruku.',
      },
      {
        type: 'rule',
        title: 'The Order of Short Words',
        body: 'When several short words meet, they line up in a fixed order: first sam / si / smo / ste / su or ću / ćeš, then the dative (mi, mu, joj), then the accusative (me, ga, je), and "je" (he/she has) always LAST. Dao sam mu ga. (I gave it to him.) Poslala sam joj ga. Dat ću ti ga. But: Dao mu ga je. (He gave it to him.)',
        highlight: 'Dao sam mu ga.',
      },
      {
        type: 'table',
        title: 'One Verb, Three Times',
        headers: ['Verb', 'Present', 'Past', 'Future'],
        rows: [
          [
            'davati / dati — give',
            'Dajem mami knjigu.',
            'Dao sam mami knjigu.',
            'Dat ću mami knjigu.',
          ],
          [
            'slati / poslati — send',
            'Šaljem mu poruku.',
            'Poslala sam mu poruku.',
            'Poslat ću mu poruku.',
          ],
          [
            'kazati / reći — tell',
            'Kažem joj istinu.',
            'Rekao sam joj istinu.',
            'Reći ću joj istinu.',
          ],
          [
            'pokazivati / pokazati — show',
            'Pokazujem vam grad.',
            'Pokazao sam vam grad.',
            'Pokazat ću vam grad.',
          ],
        ],
      },
      {
        type: 'example',
        title: 'Giving and Sending',
        items: [
          {
            hr: 'Za rođendan dajem mami cvijeće.',
            en: 'For her birthday I give mum flowers.',
            note: 'mama → mami',
          },
          {
            hr: 'Šaljem bratu poruku.',
            en: 'I am sending my brother a message.',
            note: 'brat → bratu, poruka → poruku',
          },
          {
            hr: 'Pokazujem prijatelju Zagreb.',
            en: 'I am showing my friend Zagreb.',
            note: 'prijatelj → prijatelju',
          },
          {
            hr: 'Kupila sam sestri novu torbu.',
            en: 'I bought my sister a new bag.',
            note: 'sestra → sestri; nova torba → novu torbu',
          },
          {
            hr: 'Poslao sam baki razglednicu.',
            en: 'I sent grandma a postcard.',
            note: 'baka → baki',
          },
          {
            hr: 'Komu pišeš pismo?',
            en: 'Who are you writing a letter to?',
            note: 'komu asks for the receiver',
          },
        ],
      },
      {
        type: 'example',
        title: 'With Short Pronouns',
        items: [
          {
            hr: 'Mama mi daje novac za kino.',
            en: 'Mum gives me money for the cinema.',
            note: 'mi = to me, in second place',
          },
          { hr: 'Dat ću ti moj broj.', en: 'I will give you my number.', note: 'ću before ti' },
          { hr: 'Rekla sam mu istinu.', en: 'I told him the truth.', note: 'sam before mu' },
          {
            hr: 'Šaljemo vam lijepu razglednicu.',
            en: 'We are sending you a nice postcard.',
            note: 'vam = to you all',
          },
          {
            hr: 'Imam knjigu za Anu. Dat ću joj je sutra.',
            en: 'I have a book for Ana. I will give it to her tomorrow.',
            note: 'ću, then joj, then je (it)',
          },
          {
            hr: 'Marko ima novi auto. Pokazao mi ga je.',
            en: 'Marko has a new car. He showed it to me.',
            note: 'mi, ga — and je last',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Šaljem ___ poruku." (I am sending my sister a message.)',
        options: ['sestra', 'sestru', 'sestri', 'sestrom'],
        correct: 2,
        explanation:
          'The sister receives the message, so she is the dative: sestri. "Sestru" would make her the thing being sent.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which order is correct? (I gave it to him.)',
        options: ['Dao sam ga mu.', 'Dao mu sam ga.', 'Dao sam mu ga.', 'Sam mu ga dao.'],
        correct: 2,
        explanation: 'sam first, then the dative mu, then the accusative ga: Dao sam mu ga.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, putting the receiver in the accusative: "Dajem mamu cvijeće" makes mum the thing being given; the receiver is the dative: Dajem mami cvijeće. Second, swapping the two pronouns: "Dao sam ga mu" — the dative always comes before the accusative: Dao sam mu ga. Third, starting with a short word: "Mu šaljem poruku" — short words never stand first: Šaljem mu poruku.',
        highlight: 'Dao sam mu ga.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Dajem ___ knjigu." (I give my brother a book.)',
            options: ['brata', 'bratu', 'brat', 'bratom'],
            correct: 1,
            explanation:
              'The brother receives, so he is the dative: bratu. "Brata" is the accusative and would make him the thing given.',
          },
          {
            q: 'Which sentence means "I am sending her a message"?',
            options: [
              'Šaljem joj poruku.',
              'Joj šaljem poruku.',
              'Šaljem je poruku.',
              'Šaljem joj poruka.',
            ],
            correct: 0,
            explanation:
              'joj (to her) stands second, and the message is the accusative: Šaljem joj poruku. "Je" would mean "her" as the thing sent.',
          },
          {
            q: 'Which order is correct? (I will give it to you.)',
            options: ['Dat ću ga ti.', 'Ću ti ga dati.', 'Dat ti ću ga.', 'Dat ću ti ga.'],
            correct: 3,
            explanation: 'ću first, then the dative ti, then the accusative ga: Dat ću ti ga.',
          },
          {
            q: 'What does "Komu šalješ razglednicu?" ask?',
            options: [
              'Where are you sending the postcard?',
              'Who are you sending the postcard to?',
              'What are you sending?',
              'When are you sending it?',
            ],
            correct: 1,
            explanation: 'Komu asks for the receiver: who to.',
          },
          {
            q: 'Complete: "Petar ima nove slike. Pokazao mi ___ ___." (He showed them to me.)',
            options: ['je ih', 'ih je', 'su ih', 'ih su'],
            correct: 1,
            explanation:
              'The accusative ih comes before the auxiliary je, because je always goes last: Pokazao mi ih je.',
          },
          {
            q: 'Which is the past of "kažem joj istinu" for a woman?',
            options: [
              'Rekla sam joj istinu.',
              'Rekao sam joj istinu.',
              'Rekla joj sam istinu.',
              'Kazala joj istinu.',
            ],
            correct: 0,
            explanation: 'A woman → rekla, and sam comes before joj: Rekla sam joj istinu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Giving, Sending, Telling — Key Takeaways',
        points: [
          'The receiver is the dative, the thing is the accusative: Dajem mami cvijeće.',
          'Ask for the receiver with Komu?',
          'Learn the pairs: davati / dati (dajem, dao, dat ću) · slati / poslati (šaljem, poslao, poslat ću) · kazati / reći (kažem, rekao, reći ću)',
          'Short receiver: mi, ti, mu, joj, nam, vam, im — in second place',
          'Order of short words: sam / ću → dative → accusative → je last',
          'Dao sam mu ga. Dat ću ti ga. Pokazao mi ga je.',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'phone-call': {
    worked: [
      {
        title: 'Asking for Someone',
        problem: 'On the phone, say: "I am looking for Marko."',
        en: 'I am looking for Marko.',
        steps: [
          { label: 'The verb', text: 'tražiti — to look for. I → tražim.' },
          { label: 'The case', text: 'Marko is the object of tražim, so he takes the accusative.' },
          { label: 'The ending', text: 'Masculine and alive → add -a: Marka.' },
        ],
        answer: 'Tražim Marka.',
      },
      {
        title: 'Saying Where Someone Is',
        problem: 'Answer: Ivana is at work. (posao)',
        en: 'Ivana is at work.',
        steps: [
          {
            label: 'Position or motion?',
            text: 'She is already there — position, so the locative.',
          },
          { label: 'The preposition', text: 'Work takes na: na + locative.' },
          { label: 'The ending', text: 'posao drops its a and adds -u: poslu.' },
        ],
        answer: 'Ivana je na poslu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'The phone rings. You pick it up and say:',
          options: ['Halo?', 'Doviđenja!', 'Laku noć!', 'Hvala!'],
          correct: 0,
          hint: 'It sounds almost like its English twin.',
          explanation: 'Halo? — or Molim? Both are how Croatians answer.',
        },
        {
          q: 'Tražim ___. (Marko)',
          options: ['Marko', 'Marka', 'Marku', 'Markom'],
          correct: 1,
          hint: 'He is the object, and a man is alive.',
          explanation: 'Tražim Marka. — masculine, alive: -a.',
        },
        {
          q: 'Ivana je na ___. (at work — posao)',
          options: ['posao', 'posla', 'poslu', 'posaou'],
          correct: 2,
          hint: 'Being somewhere: the locative, and the a drops out.',
          explanation: 'na poslu.',
        },
        {
          q: 'Mogu li ostaviti ___? (a message)',
          options: ['poruka', 'poruku', 'poruke', 'porukom'],
          correct: 1,
          hint: 'The message is the object of ostaviti.',
          explanation: 'Mogu li ostaviti poruku? — feminine -a becomes -u.',
        },
        {
          q: 'Who is calling? → Tko ___ na telefonu?',
          options: ['si', 'je', 'sam', 'su'],
          correct: 1,
          hint: 'You are asking about one other person.',
          explanation: 'Tko je na telefonu?',
        },
        {
          q: 'Ne čujem ___ dobro. (the polite you)',
          options: ['vi', 'vas', 'vama', 'vaš'],
          correct: 1,
          hint: 'You are the object of "čujem", in the polite form.',
          explanation: 'Ne čujem vas dobro.',
        },
        {
          q: 'Gospodin Horvat je u ___. (the office — ured)',
          options: ['ured', 'ureda', 'uredom', 'uredu'],
          correct: 3,
          hint: 'He is in there now: the locative.',
          explanation: 'u uredu.',
        },
        {
          q: 'Someone has dialled you by mistake. You say:',
          options: ['Pogrešan broj.', 'Hvala na pozivu.', 'Trenutak, molim.', 'Ovdje Ana.'],
          correct: 0,
          hint: 'Pogrešan means wrong.',
          explanation: 'Pogrešan broj. — Wrong number.',
        },
        {
          type: 'type',
          q: 'Tražim ____. (Ana)',
          answer: 'Anu',
          hint: 'She is the object: feminine -a becomes -u.',
          explanation: 'Tražim Anu.',
        },
        {
          type: 'type',
          q: '____ Petar. (This is Petar — answering the phone)',
          answer: 'Ovdje',
          hint: 'The Croatian word for "here".',
          explanation: 'Ovdje Petar.',
        },
        {
          type: 'type',
          q: 'Marko je na ____. (sastanak)',
          answer: 'sastanku',
          hint: 'The locative, and the a of the last syllable drops.',
          explanation: 'Marko je na sastanku.',
        },
        {
          type: 'type',
          q: 'Možete li ____, molim? (to repeat)',
          answer: 'ponoviti',
          hint: 'An infinitive in -iti meaning "say again".',
          explanation: 'Možete li ponoviti, molim?',
        },
        {
          type: 'type',
          q: 'Hvala na ____. (poziv — the call)',
          answer: 'pozivu',
          hint: 'hvala na takes the locative: masculine -u.',
          explanation: 'Hvala na pozivu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Tražim ___." (I am looking for Mr Babić — "gospodin Babić".)',
        options: ['gospodin Babić', 'gospodina Babića', 'gospodinu Babiću', 'gospodinom Babićem'],
        correct: 1,
        explanation: 'Both words are masculine and alive, so both take -a: gospodina Babića.',
      },
      {
        q: 'Which sentence offers to take a message?',
        options: [
          'Želite li ostaviti poruku?',
          'Možete li ponoviti?',
          'Tko zove?',
          'Je li Ana tu?',
        ],
        correct: 0,
        explanation: 'Želite li ostaviti poruku? — Would you like to leave a message?',
      },
      {
        q: 'Complete: "Petar je u ___." (Petar is in the office.)',
        options: ['ured', 'ureda', 'uredu', 'uredi'],
        correct: 2,
        explanation: 'Being somewhere is the locative: u uredu.',
      },
      {
        q: 'How do you ask "Is Marko at home?"',
        options: ['Tko je Marko?', 'Gdje Marko je?', 'Marko je doma li?', 'Je li Marko doma?'],
        correct: 3,
        explanation: 'A yes/no question starts with je li: Je li Marko doma?',
      },
      {
        q: 'What does "Trenutak, molim." mean?',
        options: ['Thank you for calling.', 'Wrong number.', 'Goodbye.', 'One moment, please.'],
        correct: 3,
        explanation: 'Trenutak — a moment. Trenutak, molim. — One moment, please.',
      },
      {
        q: 'Complete: "Ne čujem ___ dobro. Možete li ponoviti?"',
        options: ['vi', 'vas', 'vaš', 'vama'],
        correct: 1,
        explanation: 'The polite you as an object is vas: Ne čujem vas dobro.',
      },
    ],
    vocab: [
      ['telefon', 'telephone', 'Tko je na telefonu?'],
      ['mobitel', 'mobile phone', 'Moj mobitel je u torbi.'],
      ['poruka', 'message', 'Mogu li ostaviti poruku?'],
      ['broj', 'number', 'Koji je vaš broj?'],
      ['ured', 'office', 'Ona je u uredu.'],
      ['sastanak', 'meeting', 'Gospodin Horvat je na sastanku.'],
      ['tražiti', 'to look for', 'Tražim Ivanu.'],
      ['ponoviti', 'to repeat', 'Možete li ponoviti?'],
      ['nažalost', 'unfortunately', 'Nažalost, Marko nije tu.'],
      ['pogrešan', 'wrong', 'Oprostite, pogrešan broj.'],
      ['poziv', 'call', 'Hvala na pozivu.'],
    ],
  },

  'past-irregular': {
    worked: [
      {
        title: 'A -ći Verb of Coming',
        problem: 'Complete: Ana ___ u Zagreb. (doći — Ana came to Zagreb.)',
        en: 'Ana came to Zagreb.',
        steps: [
          {
            label: 'Can the regular rule work?',
            text: 'No: doći ends in -ći, so there is no -ti to swap.',
          },
          {
            label: 'Find the family',
            text: 'Going and coming: došao for a man, došla for a woman.',
          },
          { label: 'Agree and place', text: 'Ana is a woman → došla, and je sits second.' },
        ],
        answer: 'Ana je došla u Zagreb.',
      },
      {
        title: 'Two People, Two Forms',
        problem: 'Complete: Htio sam kavu, a Ana ___ čaj. (htjeti)',
        en: 'I wanted coffee, and Ana wanted tea.',
        steps: [
          { label: 'Find the family', text: 'htjeti: htio for a man, htjela for a woman.' },
          { label: 'Who wanted?', text: 'Ana — a woman, so the form with "je": htjela.' },
          { label: 'The auxiliary', text: 'For Ana (she) the auxiliary is je, in second place.' },
        ],
        answer: 'Htio sam kavu, a Ana je htjela čaj.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Marko: "Jučer sam ___ u grad." (ići)',
          options: ['išla', 'išao', 'ićio', 'išli'],
          correct: 1,
          hint: 'A man speaking, and a -ći verb of going.',
          explanation: 'Jučer sam išao u grad.',
        },
        {
          q: 'Ana: "___ sam čaj." (piti)',
          options: ['Pila', 'Pio', 'Pijela', 'Pili'],
          correct: 0,
          hint: 'A short stem, and a woman is speaking.',
          explanation: 'Pila sam čaj.',
        },
        {
          q: 'Petar je ___ "dobar dan". (reći)',
          options: ['rečio', 'rekla', 'rekao', 'reko'],
          correct: 2,
          hint: 'The hidden k comes back, and Petar is a man.',
          explanation: 'Petar je rekao "dobar dan".',
        },
        {
          q: 'Marko i ja smo ___ ribu. (jesti)',
          options: ['jestili', 'jedli', 'jele', 'jeli'],
          correct: 3,
          hint: 'A mixed group, and jesti has a tiny stem.',
          explanation: 'Marko i ja smo jeli ribu.',
        },
        {
          q: 'Ivana je ___ doći rano. (moći — she was able)',
          options: ['mogao', 'mogla', 'moćila', 'mogli'],
          correct: 1,
          hint: 'The hidden g comes back, and Ivana is a woman.',
          explanation: 'Ivana je mogla doći rano.',
        },
        {
          q: 'Gosti su ___ u osam. (otići — the guests left)',
          options: ['otišli', 'otišao', 'otišla', 'otićili'],
          correct: 0,
          hint: 'A group takes -li.',
          explanation: 'Gosti su otišli u osam.',
        },
        {
          q: 'Josip: "___ sam more prvi put." (vidjeti)',
          options: ['Vidjeo', 'Vidio', 'Vidila', 'Vidili'],
          correct: 1,
          hint: 'Like htio: the masculine is short.',
          explanation: 'Vidio sam more prvi put.',
        },
        {
          q: 'Moja baka je ___ u Zadru. (živjeti)',
          options: ['živila', 'živio', 'živjela', 'živjeo'],
          correct: 2,
          hint: 'Like htjela: the feminine keeps the je.',
          explanation: 'Moja baka je živjela u Zadru.',
        },
        {
          type: 'type',
          q: 'Marija: "Jučer sam ____ na more." (ići)',
          answer: 'išla',
          hint: 'A woman, and the a of the masculine form drops out.',
          explanation: 'Jučer sam išla na more.',
        },
        {
          type: 'type',
          q: 'Tomislav: "____ sam kavu." (htjeti)',
          answer: 'Htio',
          hint: 'The masculine of htjeti is the short one.',
          explanation: 'Htio sam kavu.',
        },
        {
          type: 'type',
          q: 'Mama i tata su ____ u subotu. (doći)',
          answer: 'došli',
          hint: 'A mixed group takes -li.',
          explanation: 'Mama i tata su došli u subotu.',
        },
        {
          type: 'type',
          q: 'Ana je ____ "hvala". (reći)',
          answer: 'rekla',
          hint: 'The hidden k comes back, and Ana is a woman.',
          explanation: 'Ana je rekla "hvala".',
        },
        {
          type: 'type',
          q: 'Marko je ____ ključ. (naći — he found the key)',
          answer: 'našao',
          hint: 'Same family as išao and došao.',
          explanation: 'Marko je našao ključ.',
        },
      ],
    },
    checkB: [
      {
        q: 'Marko: "Jučer sam ___ u kino."',
        options: ['išla', 'ićio', 'išao', 'išli'],
        correct: 2,
        explanation: 'Marko is a man, and ići gives išao.',
      },
      {
        q: 'What is the past of "moći" for a woman?',
        options: ['mogla', 'mogao', 'moćila', 'mogle'],
        correct: 0,
        explanation: 'mogla. "Mogao" is a man, and "mogle" a group of women.',
      },
      {
        q: 'Complete: "Ana i Ivana su ___ u Split." (Ana and Ivana came to Split.)',
        options: ['došli', 'došla', 'došao', 'došle'],
        correct: 3,
        explanation:
          'A group of only women takes -le: došle. "Došli" is for a mixed or male group.',
      },
      {
        q: 'Which sentence is correct? (I wanted water — a man speaking.)',
        options: ['Htjeo sam vodu.', 'Htio sam vodu.', 'Htjela sam vodu.', 'Htio sam voda.'],
        correct: 1,
        explanation: 'A man says htio, and the water is the object: vodu.',
      },
      {
        q: 'Complete: "Petar je ___ juhu." (Petar ate soup.)',
        options: ['jestio', 'jeo', 'jela', 'jedio'],
        correct: 1,
        explanation: 'jesti → jeo for a man. "Jela" is the woman\'s form.',
      },
      {
        q: 'Which form fits a group of friends who were at the seaside?',
        options: ['bio', 'bila', 'bili', 'bilo'],
        correct: 2,
        explanation: 'A group → bili: Bili smo na moru.',
      },
    ],
    vocab: [
      ['ići', 'to go', 'Jučer sam išao u grad.'],
      ['doći', 'to come', 'Ana je došla u Zagreb.'],
      ['otići', 'to leave', 'Otišla je na posao u osam.'],
      ['naći', 'to find', 'Našao sam ključ.'],
      ['reći', 'to say', 'Marko je rekao "dobar dan".'],
      ['moći', 'to be able, can', 'Mogla sam doći rano.'],
      ['htjeti', 'to want', 'Htio sam kavu.'],
      ['jesti', 'to eat', 'Jeli smo ribu.'],
      ['piti', 'to drink', 'Pila sam vodu.'],
      ['ključ', 'key', 'Našao sam ključ u kuhinji.'],
    ],
  },

  'past-story': {
    worked: [
      {
        title: 'Putting the Auxiliary in Its Place',
        problem: 'Put in order: onda / sam / išao / na posao',
        en: 'Then I went to work.',
        steps: [
          { label: 'The first unit', text: 'The story word onda opens the sentence.' },
          { label: 'Second place', text: 'The auxiliary sam comes straight after it.' },
          { label: 'The rest', text: 'The participle išao and the destination follow.' },
        ],
        answer: 'Onda sam išao na posao.',
      },
      {
        title: 'A Block in First Place',
        problem: 'Ana tells her day: "After that I cooked lunch."',
        en: 'After that I cooked lunch.',
        steps: [
          { label: 'The first unit', text: 'Poslije toga is one block, and it takes first place.' },
          { label: 'Second place', text: 'Sam comes after the whole block.' },
          { label: 'Agreement', text: 'Ana is a woman: kuhala.' },
        ],
        answer: 'Poslije toga sam kuhala ručak.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which word means "first"?',
          options: ['onda', 'prvo', 'kasnije', 'jučer'],
          correct: 1,
          hint: 'It is related to prvi, the first one.',
          explanation: 'prvo — first.',
        },
        {
          q: 'Put it in order: "Onda / smo / išli / u park."',
          options: [
            'Onda išli smo u park.',
            'Smo onda išli u park.',
            'Onda smo išli u park.',
            'Onda išli u park smo.',
          ],
          correct: 2,
          hint: 'The short word goes second.',
          explanation: 'Onda smo išli u park.',
        },
        {
          q: 'Ana, about herself: "Poslije toga ___ gledala film."',
          options: ['sam', 'smo', 'su', 'ste'],
          correct: 0,
          hint: 'Ana is saying "I".',
          explanation: 'Poslije toga sam gledala film.',
        },
        {
          q: 'Marko tells his day. Which line fits?',
          options: [
            'Na kraju sam bila umorna.',
            'Na kraju sam bio umoran.',
            'Na kraju bio sam umoran.',
            'Na kraju smo bio umoran.',
          ],
          correct: 1,
          hint: 'A man, and the auxiliary second.',
          explanation: 'Na kraju sam bio umoran.',
        },
        {
          q: 'Which word means "in the evening"?',
          options: ['ujutro', 'navečer', 'popodne', 'prvo'],
          correct: 1,
          hint: 'It shares a root with večera, dinner.',
          explanation: 'navečer — in the evening.',
        },
        {
          q: 'Complete: "Ustala sam i ___ kavu." (and drank coffee)',
          options: ['pila', 'pio', 'pili', 'pije'],
          correct: 0,
          hint: 'The same woman, so the same ending; the auxiliary is said once.',
          explanation: 'Ustala sam i pila kavu.',
        },
        {
          q: 'Što si radio jučer? — the best answer:',
          options: [
            'Radim u uredu.',
            'Radili smo u uredu.',
            'Radio sam u uredu.',
            'Radila si u uredu.',
          ],
          correct: 2,
          hint: 'The question is about yesterday, and about you.',
          explanation: 'Radio sam u uredu.',
        },
        {
          q: 'What does "kasnije" mean?',
          options: ['earlier', 'later', 'first', 'yesterday'],
          correct: 1,
          hint: 'It comes after something else in the story.',
          explanation: 'kasnije — later.',
        },
        {
          type: 'type',
          q: '____ sam doručkovao, onda sam išao na posao. (first)',
          answer: 'Prvo',
          hint: 'The word that opens a sequence.',
          explanation: 'Prvo sam doručkovao, onda sam išao na posao.',
        },
        {
          type: 'type',
          q: 'Na ____ smo bili umorni. (in the end)',
          answer: 'kraju',
          hint: 'The locative of kraj, the end.',
          explanation: 'Na kraju smo bili umorni.',
        },
        {
          type: 'type',
          q: 'Onda ____ išla na tržnicu. (Ana, about herself)',
          answer: 'sam',
          hint: 'The auxiliary for "I".',
          explanation: 'Onda sam išla na tržnicu.',
        },
        {
          type: 'type',
          q: 'Jučer ____ gledali film. (we)',
          answer: 'smo',
          hint: 'The auxiliary for "we".',
          explanation: 'Jučer smo gledali film.',
        },
        {
          type: 'type',
          q: 'Poslije ____ smo jeli pizzu. (after that)',
          answer: 'toga',
          hint: 'The second word of the block meaning "after that".',
          explanation: 'Poslije toga smo jeli pizzu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which sentence is correct?',
        options: [
          'Onda pila sam čaj.',
          'Sam onda pila čaj.',
          'Onda sam pila čaj.',
          'Onda pila čaj sam.',
        ],
        correct: 2,
        explanation: 'The auxiliary sits in second place, after onda: Onda sam pila čaj.',
      },
      {
        q: 'What does "na kraju" mean?',
        options: ['in the end', 'at first', 'in the morning', 'after that'],
        correct: 0,
        explanation: 'Na kraju — in the end.',
      },
      {
        q: 'Complete: "Navečer ___ gledali film." (In the evening they watched a film.)',
        options: ['smo', 'su', 'ste', 'je'],
        correct: 1,
        explanation: 'They → su.',
      },
      {
        q: 'Ivan tells his day. Which line fits?',
        options: [
          'Prvo sam ustala rano.',
          'Prvo sam ustao rano.',
          'Prvo ustao sam rano.',
          'Prvo smo ustao rano.',
        ],
        correct: 1,
        explanation: 'Ivan is a man (ustao), and sam stays second: Prvo sam ustao rano.',
      },
      {
        q: 'Which word means "yesterday"?',
        options: ['sutra', 'danas', 'kasnije', 'jučer'],
        correct: 3,
        explanation: 'jučer — yesterday. Sutra is tomorrow, danas today.',
      },
      {
        q: 'Which sentence keeps "poslije toga" together correctly?',
        options: [
          'Poslije sam toga čitao.',
          'Poslije toga sam čitao.',
          'Sam poslije toga čitao.',
          'Poslije toga čitao sam sam.',
        ],
        correct: 1,
        explanation: 'The block stays whole and sam comes after it: Poslije toga sam čitao.',
      },
    ],
    vocab: [
      ['prvo', 'first', 'Prvo sam pila kavu.'],
      ['onda', 'then', 'Onda sam išla na tržnicu.'],
      ['zatim', 'next, then', 'Zatim smo jeli ručak.'],
      ['poslije toga', 'after that', 'Poslije toga sam čitala.'],
      ['kasnije', 'later', 'Kasnije je došao Marko.'],
      ['na kraju', 'in the end', 'Na kraju smo bili umorni.'],
      ['jučer', 'yesterday', 'Jučer sam radio.'],
      ['ujutro', 'in the morning', 'Ujutro sam pio kavu.'],
      ['navečer', 'in the evening', 'Navečer smo gledali film.'],
      ['ustati', 'to get up', 'U subotu sam ustala rano.'],
      ['umoran', 'tired', 'Na kraju sam bio umoran.'],
    ],
  },

  'future-plans': {
    worked: [
      {
        title: 'Starting With the Verb',
        problem: 'Say it, starting with the verb: "I will work tomorrow." (raditi)',
        en: 'I will work tomorrow.',
        steps: [
          { label: 'What is first?', text: 'The verb, so ću comes straight after it.' },
          { label: 'Shorten it', text: 'raditi ends in -ti, so the final -i drops: radit.' },
          { label: 'Write it', text: 'Two separate words: radit ću.' },
        ],
        answer: 'Radit ću sutra.',
      },
      {
        title: 'Starting With a Time Word',
        problem: 'Say it, starting with "sutra": "Tomorrow we will go to the seaside." (ići)',
        en: 'Tomorrow we will go to the seaside.',
        steps: [
          { label: 'What is first?', text: 'Sutra — so ćemo takes second place.' },
          { label: 'The verb', text: 'After ćemo the infinitive is written in full.' },
          { label: 'A -ći verb', text: 'ići never shortens anyway: ići.' },
        ],
        answer: 'Sutra ćemo ići na more.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which sentence is correct?',
          options: ['Gledati ću film.', 'Gledat ću film.', 'Ću gledati film.', 'Gledam ću film.'],
          correct: 1,
          hint: 'The verb is first, and it ends in -ti.',
          explanation: 'Gledat ću film. — two words, the -i dropped.',
        },
        {
          q: 'Complete: "Sutra ___ učiti." (we)',
          options: ['ćemo', 'ćete', 'će', 'ću'],
          correct: 0,
          hint: 'The form for "we".',
          explanation: 'Sutra ćemo učiti.',
        },
        {
          q: 'Which sentence is correct? (I will come on Saturday.)',
          options: [
            'Doć ću u subotu.',
            'Doći ću u subotu.',
            'Doćit ću u subotu.',
            'Ću doći u subotu.',
          ],
          correct: 1,
          hint: 'A verb in -ći never shortens.',
          explanation: 'Doći ću u subotu.',
        },
        {
          q: 'Što ___ raditi za vikend? (you, to a friend)',
          options: ['ću', 'će', 'ćeš', 'ćete'],
          correct: 2,
          hint: 'The ti form.',
          explanation: 'Što ćeš raditi za vikend?',
        },
        {
          q: 'Which sentence says "I will not travel"?',
          options: ['Ne ću putovati.', 'Neću putovati.', 'Ću ne putovati.', 'Nisam putovao.'],
          correct: 1,
          hint: 'The negative is a single word.',
          explanation: 'Neću putovati.',
        },
        {
          q: 'A fixed plan, in the present: "On Saturday we are playing tennis."',
          options: [
            'U subotu igramo tenis.',
            'U subotu igrali smo tenis.',
            'U subotu igrat ćemo tenis.',
            'Igramo u subotu tenis smo.',
          ],
          correct: 0,
          hint: 'The present, like English "we are playing".',
          explanation: 'U subotu igramo tenis.',
        },
        {
          q: 'Ja ___ kuhati večeru. (I will cook dinner.)',
          options: ['ću', 'ćeš', 'sam', 'će'],
          correct: 0,
          hint: 'The future word for "I".',
          explanation: 'Ja ću kuhati večeru. — after ja, the verb stays full.',
        },
        {
          q: 'Putovat ___ u Split. (they)',
          options: ['ćemo', 'će', 'ćeš', 'ćete'],
          correct: 1,
          hint: 'The form for "they" — the same as for he and she.',
          explanation: 'Putovat će u Split.',
        },
        {
          type: 'type',
          q: '____ ću sutra. (raditi — start with the verb)',
          answer: 'Radit',
          hint: 'A -ti verb drops its last letter when ću follows.',
          explanation: 'Radit ću sutra.',
        },
        {
          type: 'type',
          q: '____ ću na more. (to go — start with the verb)',
          answer: 'Ići',
          hint: 'A -ći verb keeps its whole form.',
          explanation: 'Ići ću na more.',
        },
        {
          type: 'type',
          q: 'Sutra ____ gledati film. (I)',
          answer: 'ću',
          hint: 'The future word for "I", in second place.',
          explanation: 'Sutra ću gledati film.',
        },
        {
          type: 'type',
          q: 'Što ____ raditi za vikend? (you, to a friend)',
          answer: 'ćeš',
          hint: 'The ti form of the future word.',
          explanation: 'Što ćeš raditi za vikend?',
        },
        {
          type: 'type',
          q: '____ raditi sutra. (I will not)',
          answer: 'Neću',
          hint: 'One word: the negative of the future.',
          explanation: 'Neću raditi sutra.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sutra ___ putovati." (They will travel tomorrow.)',
        options: ['ću', 'ćeš', 'će', 'ćemo'],
        correct: 2,
        explanation: 'They → će, in second place after sutra.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Učiti ću hrvatski.',
          'Učit ću hrvatski.',
          'Ću učiti hrvatski.',
          'Učim ću hrvatski.',
        ],
        correct: 1,
        explanation: 'Verb first, -i dropped, two words: Učit ću hrvatski.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Doći ćemo u nedjelju.',
          'Doć ćemo u nedjelju.',
          'Ćemo doći u nedjelju.',
          'Doćit ćemo u nedjelju.',
        ],
        correct: 0,
        explanation: 'doći is a -ći verb and keeps its whole form: Doći ćemo u nedjelju.',
      },
      {
        q: 'How do you ask several people "What will you do tomorrow?"',
        options: [
          'Što ćeš raditi sutra?',
          'Što ćemo raditi sutra?',
          'Što ćete raditi sutra?',
          'Što će raditi sutra?',
        ],
        correct: 2,
        explanation: 'You (more than one) → ćete.',
      },
      {
        q: 'Which sentence means "We will not go to the cinema"?',
        options: [
          'Ne ćemo ići u kino.',
          'Ćemo ne ići u kino.',
          'Nismo išli u kino.',
          'Nećemo ići u kino.',
        ],
        correct: 3,
        explanation: 'The negative is one word: Nećemo ići u kino.',
      },
      {
        q: 'Which word can NEVER stand first in a sentence?',
        options: ['ću', 'neću', 'sutra', 'radit'],
        correct: 0,
        explanation:
          'ću is a short word that needs second place. Neću is a full word and may start a sentence.',
      },
    ],
    vocab: [
      ['sutra', 'tomorrow', 'Sutra ću raditi.'],
      ['prekosutra', 'the day after tomorrow', 'Prekosutra idemo na more.'],
      ['vikend', 'weekend', 'Što ćeš raditi za vikend?'],
      ['plan', 'plan', 'Imam plan za ljeto.'],
      ['planirati', 'to plan', 'Planiram putovati u Dalmaciju.'],
      ['putovati', 'to travel', 'Putovat ćemo cijelo ljeto.'],
      ['sljedeći', 'next', 'Sljedeći tjedan ću učiti.'],
      ['neću', 'I will not', 'Neću raditi sutra.'],
      ['odmor', 'holiday, rest', 'Ljeti idem na odmor.'],
    ],
  },

  'dative-prepositions': {
    worked: [
      {
        title: 'Going to a Person',
        problem: 'Say: "I am going to the doctor." (liječnik)',
        en: 'I am going to the doctor.',
        steps: [
          { label: 'Place or person?', text: 'A doctor is a person, so the preposition is k.' },
          { label: 'The case', text: 'k is followed by the dative.' },
          { label: 'The ending', text: 'Masculine → -u: liječniku.' },
        ],
        answer: 'Idem k liječniku.',
      },
      {
        title: 'Heading Somewhere',
        problem: 'Say: "The bus is going towards the river." (rijeka)',
        en: 'The bus is going towards the river.',
        steps: [
          { label: 'Which word?', text: 'Towards, without saying you arrive → prema.' },
          { label: 'The ending', text: 'prema takes the dative: feminine -a becomes -i.' },
          { label: 'The sound change', text: 'k before -i becomes c: rijeka → rijeci.' },
        ],
        answer: 'Autobus ide prema rijeci.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Idem k ___. (the hairdresser — frizer)',
          options: ['frizer', 'frizera', 'frizeru', 'frizerom'],
          correct: 2,
          hint: 'k takes the dative, and frizer is masculine.',
          explanation: 'Idem k frizeru.',
        },
        {
          q: 'U nedjelju idemo k ___. (grandma — baka)',
          options: ['baki', 'baku', 'baka', 'bake'],
          correct: 0,
          hint: 'Feminine, and family words keep their k.',
          explanation: 'Idemo k baki.',
        },
        {
          q: "___ kolegi. (I am going to my colleague's.)",
          options: ['Idem k', 'Idem ka', 'Idem u', 'Idem na'],
          correct: 1,
          hint: 'The next word starts with k, which is hard to say twice.',
          explanation: 'Idem ka kolegi.',
        },
        {
          q: 'Hodamo prema ___. (the sea)',
          options: ['more', 'mora', 'morem', 'moru'],
          correct: 3,
          hint: 'prema takes the dative; neuter takes -u.',
          explanation: 'Hodamo prema moru.',
        },
        {
          q: 'Banka je nasuprot ___. (the post office — pošta)',
          options: ['pošti', 'poštu', 'pošta', 'pošte'],
          correct: 0,
          hint: 'nasuprot takes the dative; feminine.',
          explanation: 'Banka je nasuprot pošti.',
        },
        {
          q: 'What does "unatoč" mean?',
          options: ['towards', 'despite', 'opposite', 'to (a person)'],
          correct: 1,
          hint: 'You do something even though something is in the way.',
          explanation: 'unatoč — despite: unatoč kiši.',
        },
        {
          q: 'Which sentence is correct? (I am going to the hospital.)',
          options: ['Idem na bolnicu.', 'Idem u bolnicu.', 'Idem u bolnici.', 'Idem k bolnicu.'],
          correct: 1,
          hint: 'A building is a place you go into.',
          explanation: 'Idem u bolnicu. — a place takes u + accusative.',
        },
        {
          q: 'Prema ___, sutra će biti sunčano. (the forecast — prognoza)',
          options: ['prognoza', 'prognozu', 'prognozi', 'prognoze'],
          correct: 2,
          hint: 'prema means "according to" here, and still takes the dative.',
          explanation: 'Prema prognozi, sutra će biti sunčano.',
        },
        {
          type: 'type',
          q: 'Idem k ____. (liječnik)',
          answer: 'liječniku',
          hint: 'k takes the dative: masculine -u.',
          explanation: 'Idem k liječniku.',
        },
        {
          type: 'type',
          q: 'Djeca trče k ____. (mama)',
          answer: 'mami',
          hint: 'Feminine -a becomes -i.',
          explanation: 'Djeca trče k mami.',
        },
        {
          type: 'type',
          q: 'Ovaj vlak ide prema ____. (Zagreb)',
          answer: 'Zagrebu',
          hint: 'prema takes the dative; masculine -u.',
          explanation: 'Ovaj vlak ide prema Zagrebu.',
        },
        {
          type: 'type',
          q: 'Idemo na plažu unatoč ____. (kiša)',
          answer: 'kiši',
          hint: 'Feminine -a becomes -i.',
          explanation: 'Idemo na plažu unatoč kiši.',
        },
        {
          type: 'type',
          q: 'Turisti šeću prema ____. (rijeka)',
          answer: 'rijeci',
          hint: 'Feminine -i, and the k in front of it changes.',
          explanation: 'Turisti šeću prema rijeci.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sutra idem k ___." (the dentist — zubar)',
        options: ['zubar', 'zubara', 'zubaru', 'zubarom'],
        correct: 2,
        explanation: 'k takes the dative; masculine → zubaru.',
      },
      {
        q: 'Complete: "Hodamo prema ___." (towards the park)',
        options: ['park', 'parku', 'parka', 'parkom'],
        correct: 1,
        explanation: 'prema takes the dative; park → parku.',
      },
      {
        q: "Which sentence is correct? (We are going to grandma's.)",
        options: ['Idemo u baku.', 'Idemo k baka.', 'Idemo na baki.', 'Idemo k baki.'],
        correct: 3,
        explanation: 'A person takes k plus the dative: Idemo k baki.',
      },
      {
        q: 'What does "prema" mean in "prema planu"?',
        options: ['despite', 'opposite', 'according to', 'to a person'],
        correct: 2,
        explanation: 'prema planu — according to the plan.',
      },
      {
        q: 'Complete: "Kafić je nasuprot ___." (the church — crkva)',
        options: ['crkvi', 'crkvu', 'crkva', 'crkve'],
        correct: 0,
        explanation: 'nasuprot takes the dative: crkvi.',
      },
      {
        q: 'Which form of "to" goes before "kolegi"?',
        options: ['k', 'ka', 'ko', 'u'],
        correct: 1,
        explanation: 'Before a word starting with k or g, k becomes ka: ka kolegi.',
      },
    ],
    vocab: [
      ['liječnik', 'doctor', 'Sutra idem k liječniku.'],
      ['frizer', 'hairdresser', 'Ana ide k frizeru.'],
      ['kolega', 'colleague', 'Idem ka kolegi.'],
      ['prema', 'towards; according to', 'Hodamo prema moru.'],
      ['nasuprot', 'opposite', 'Banka je nasuprot pošti.'],
      ['unatoč', 'despite', 'Idemo van unatoč kiši.'],
      ['kiša', 'rain', 'Idemo na plažu unatoč kiši.'],
      ['pošta', 'post office', 'Pošta je nasuprot parku.'],
      ['rijeka', 'river', 'Turisti šeću prema rijeci.'],
      ['prognoza', 'forecast', 'Prema prognozi, sutra će biti sunčano.'],
    ],
  },

  'giving-and-sending': {
    worked: [
      {
        title: 'Two Objects, Two Cases',
        problem: 'Say: "I am sending my brother a message."',
        en: 'I am sending my brother a message.',
        steps: [
          { label: 'What is sent?', text: 'The message — the accusative: poruka → poruku.' },
          { label: 'Who receives it?', text: 'The brother — the dative: brat → bratu.' },
          { label: 'The verb', text: 'Sending now is slati, the partner of poslati: ja šaljem.' },
        ],
        answer: 'Šaljem bratu poruku.',
      },
      {
        title: 'Two Short Pronouns',
        problem: 'Replace both with short pronouns: "Dao sam Marku ključ." (to him, it)',
        en: 'I gave it to him.',
        steps: [
          { label: 'The receiver', text: 'Marku → mu, the short dative for "to him".' },
          { label: 'The thing', text: 'ključ is masculine → ga, the short accusative.' },
          { label: 'The order', text: 'sam first, then the dative mu, then the accusative ga.' },
        ],
        answer: 'Dao sam mu ga.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dajem ___ cvijeće. (to mum)',
          options: ['mamu', 'mami', 'mama', 'mamom'],
          correct: 1,
          hint: 'Mum receives the flowers.',
          explanation: 'Dajem mami cvijeće. — the receiver is the dative.',
        },
        {
          q: 'Šaljem bratu ___. (a message)',
          options: ['poruka', 'poruke', 'poruku', 'poruci'],
          correct: 2,
          hint: 'The thing sent is the accusative.',
          explanation: 'Šaljem bratu poruku.',
        },
        {
          q: 'Which word asks for the receiver?',
          options: ['Komu?', 'Što?', 'Gdje?', 'Kada?'],
          correct: 0,
          hint: 'It asks "to whom".',
          explanation: 'Komu šalješ poruku? — Who are you sending a message to?',
        },
        {
          q: 'Šaljem ___ poruku. (to him)',
          options: ['ga', 'mu', 'joj', 'ih'],
          correct: 1,
          hint: 'The short dative for a man.',
          explanation: 'Šaljem mu poruku.',
        },
        {
          q: 'Which order is correct? (I gave it to her — a masculine thing.)',
          options: ['Dala sam ga joj.', 'Dala sam joj ga.', 'Dala joj sam ga.', 'Sam joj ga dala.'],
          correct: 1,
          hint: 'sam first, then the receiver, then the thing.',
          explanation: 'Dala sam joj ga.',
        },
        {
          q: 'Which order is correct? (He showed it to me.)',
          options: [
            'Pokazao mi ga je.',
            'Pokazao je mi ga.',
            'Pokazao ga mi je.',
            'Je mi ga pokazao.',
          ],
          correct: 0,
          hint: 'The auxiliary je always goes last.',
          explanation: 'Pokazao mi ga je.',
        },
        {
          q: 'Rekao sam ___ istinu. (to them)',
          options: ['ih', 'im', 'njih', 'ga'],
          correct: 1,
          hint: 'The short dative for "to them".',
          explanation: 'Rekao sam im istinu. — ih would be "them" as the thing.',
        },
        {
          q: 'Which is the future? (I will send you the photo.)',
          options: [
            'Šaljem ti sliku.',
            'Poslao sam ti sliku.',
            'Poslat ću ti sliku.',
            'Poslati ću ti sliku.',
          ],
          correct: 2,
          hint: 'Verb first, so the -i drops.',
          explanation: 'Poslat ću ti sliku.',
        },
        {
          type: 'type',
          q: 'Pokazujem ____ grad. (prijatelj — to my friend)',
          answer: 'prijatelju',
          hint: 'The receiver: masculine -u.',
          explanation: 'Pokazujem prijatelju grad.',
        },
        {
          type: 'type',
          q: 'Kupila sam ____ torbu. (sestra — for my sister)',
          answer: 'sestri',
          hint: 'The receiver: feminine -a becomes -i.',
          explanation: 'Kupila sam sestri torbu.',
        },
        {
          type: 'type',
          q: 'Šaljem ____ razglednicu. (to her)',
          answer: 'joj',
          hint: 'The short dative for a woman.',
          explanation: 'Šaljem joj razglednicu.',
        },
        {
          type: 'type',
          q: 'Dat ću ____ moj broj. (to you, a friend)',
          answer: 'ti',
          hint: 'The short dative for the ti form.',
          explanation: 'Dat ću ti moj broj.',
        },
        {
          type: 'type',
          q: 'Dao sam mu ____. (the key — "it")',
          answer: 'ga',
          hint: 'The short accusative for a masculine thing.',
          explanation: 'Dao sam mu ga.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Šaljem ___ razglednicu." (I am sending grandma a postcard.)',
        options: ['baku', 'baki', 'baka', 'bakom'],
        correct: 1,
        explanation: 'Grandma receives: the dative, baki. "Baku" would make her the thing sent.',
      },
      {
        q: 'Which sentence means "I am telling him the truth"?',
        options: ['Kažem ga istinu.', 'Mu kažem istinu.', 'Kažem mu istinu.', 'Kažem mu istina.'],
        correct: 2,
        explanation:
          'mu (to him) in second place, and the truth as the accusative: Kažem mu istinu.',
      },
      {
        q: 'Which order is correct? (We gave it to them.)',
        options: ['Dali smo im ga.', 'Dali smo ga im.', 'Dali im smo ga.', 'Smo im ga dali.'],
        correct: 0,
        explanation: 'smo first, then the dative im, then the accusative ga.',
      },
      {
        q: 'Complete: "Komu ___ poruku?" (Who are you sending a message to?)',
        options: ['šaljem', 'šalješ', 'šalje', 'šaljemo'],
        correct: 1,
        explanation: 'You (ti) → šalješ.',
      },
      {
        q: 'A man, in the past: "I showed my friend the town."',
        options: [
          'Pokazujem prijatelju grad.',
          'Pokazat ću prijatelju grad.',
          'Pokazala sam prijatelju grad.',
          'Pokazao sam prijatelju grad.',
        ],
        correct: 3,
        explanation: 'Past, a man: Pokazao sam prijatelju grad.',
      },
      {
        q: 'Which order is correct? (She gave it to me.)',
        options: ['Dala je mi ga.', 'Dala mi ga je.', 'Dala ga mi je.', 'Je mi ga dala.'],
        correct: 1,
        explanation: 'Dative, then accusative, and je last: Dala mi ga je.',
      },
    ],
    vocab: [
      ['dati', 'to give', 'Dajem mami cvijeće.'],
      ['poslati', 'to send', 'Poslao sam baki razglednicu.'],
      ['reći', 'to tell, to say', 'Rekla sam mu istinu.'],
      ['pokazati', 'to show', 'Pokazujem prijatelju grad.'],
      ['kupiti', 'to buy', 'Kupila sam sestri torbu.'],
      ['razglednica', 'postcard', 'Šaljem baki razglednicu.'],
      ['cvijeće', 'flowers', 'Za rođendan dajem mami cvijeće.'],
      ['istina', 'truth', 'Kažem ti istinu.'],
      ['komu', 'to whom', 'Komu šalješ poruku?'],
      ['slika', 'picture, photo', 'Poslat ću ti sliku.'],
    ],
  },
};
