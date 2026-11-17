// ─── A2 lessons in class order — Units 1–2 (lessons 1–10) ────────────────────
// Same shape and rules as the A1 class files (a1class/units18-20.js):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, the A2 lessons before it and the lesson itself have taught. No
// conditional, no comparatives, no aspect teaching. Until the lesson on svoj
// (the last one here) no sentence puts a possessive of the SUBJECT'S own on an
// object, so nothing has to be unlearned when svoj arrives.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. The casual greeting is Bog.

export const CLASS_A2_U01_02 = {
  // ══ UNIT 1 ═════════════════════════════════════════════════════════════════

  // ── Present tense: the three families ──────────────────────────────────────
  present: {
    text: {
      kind: 'dialogue',
      title: 'Subota ujutro',
      lines: [
        { who: 'Maja', hr: 'Bog, Filipe! Što radiš?', en: 'Hi, Filip! What are you doing?' },
        {
          who: 'Filip',
          hr: 'Bog, Majo! Pišem poruku baki, a Ivana kuha kavu.',
          en: 'Hi, Maja! I am writing a message to Grandma, and Ivana is making coffee.',
        },
        {
          who: 'Maja',
          hr: 'A djeca? Što rade djeca?',
          en: 'And the kids? What are the kids doing?',
        },
        {
          who: 'Filip',
          hr: 'Djeca gledaju crtani film. Luka plače jer Ema ne želi gledati njegov film.',
          en: 'The kids are watching a cartoon. Luka is crying because Ema does not want to watch his movie.',
        },
        {
          who: 'Maja',
          hr: 'Ha-ha! Slušaj, Petra i ja idemo na tržnicu. Kupujemo voće za kolač. Hoćete li ići s nama?',
          en: 'Ha-ha! Listen, Petra and I are going to the market. We are buying fruit for a cake. Do you two want to come with us?',
        },
        {
          who: 'Filip',
          hr: 'Ja ne mogu, moram raditi. Ali Ivana može — ona uvijek kaže da nema voća u kući.',
          en: 'I cannot, I have to work. But Ivana can — she always says there is no fruit in the house.',
        },
        {
          who: 'Maja',
          hr: 'Dobro! Čekamo je u deset ispred tržnice.',
          en: 'Good! We will wait for her at ten in front of the market.',
        },
        {
          who: 'Filip',
          hr: 'Dogovoreno. A kolač? Kad jedemo kolač?',
          en: 'Deal. And the cake? When do we eat the cake?',
        },
        { who: 'Maja', hr: 'Sutra kod mene — svi!', en: 'Tomorrow at my place — all of us!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is everybody at Filip’s home doing when Maja calls?',
          options: [
            'Filip is making coffee, Ivana is working, the kids are sleeping',
            'Filip is writing a message, Ivana is making coffee, the kids are watching a cartoon',
            'Filip is watching a movie, Ivana is writing to Grandma, the kids are crying',
            'Filip is working, Ivana is at the market, the kids are eating cake',
          ],
          correct: 1,
          hint: 'Three answers in his first two replies: one for himself, one for Ivana, one for the kids.',
          explanation:
            'Pišem poruku baki (Filip), Ivana kuha kavu, djeca gledaju crtani film. Only Luka is crying — and working is what Filip has to do later.',
        },
        {
          q: 'Filip says "Djeca gledaju crtani film." Djeca ends in -a, like mama or Ema. Why is the verb not "gleda"?',
          options: [
            'Because gledati is an irregular verb',
            'Because the sentence is about the past',
            'Because djeca means "the children" — several people — so the verb takes the oni form',
            'Because a verb before a masculine noun always ends in -ju',
          ],
          correct: 2,
          hint: 'Translate djeca. Is it one person or more than one?',
          explanation:
            'Djeca means "the children", so the verb is in the third person plural: djeca gledaju, djeca rade. One child would be: dijete gleda.',
        },
        {
          type: 'type',
          q: 'Now you. Maja invites you to the market too, but you have no time. Answer: Ne ____, moram raditi.',
          answer: 'mogu',
          hint: 'The ja form of moći is the odd one out: it is not built on mož-, and it looks exactly like the oni form.',
          explanation:
            'Ne mogu, moram raditi. — moći: mogu, možeš, može, možemo, možete, mogu. Only ja and oni keep the g.',
        },
        {
          type: 'type',
          q: 'At the market Maja asks what you are getting. Tell her: ____ kruh i sir. (kupovati)',
          answer: 'Kupujem',
          hint: 'A verb in -ovati never keeps its -ova- in the present: it turns into -uj-, and then come the -em endings.',
          explanation:
            'Kupujem kruh i sir. — kupovati → kupujem, kupuješ, kupuje… Maja used the mi form of the same verb: kupujemo voće.',
        },
        {
          type: 'transform',
          q: 'Filip is speaking only about himself. Now he and Ivana are doing it together — say it for "mi".',
          from: 'Pišem poruku baki.',
          answer: 'Pišemo poruku baki.',
          accept: ['Mi pišemo poruku baki.'],
          hint: 'Only the verb changes. The stem with š stays; the ending is the one for mi.',
          explanation:
            'Pišemo poruku baki. — pisati keeps piš- in every present form: pišem, pišeš, piše, pišemo, pišete, pišu.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Who is doing it? Match each verb form to its subject.',
        pairs: [
          ['idem', 'ja'],
          ['radiš', 'ti'],
          ['zove', 'ona'],
          ['govorimo', 'mi'],
          ['pjevaju', 'oni'],
        ],
        explanation:
          'The ending names the person: -m is ja, -š is ti, no ending is on/ona, -mo is mi, and -ju or -u is oni. That is why the pronoun can be left out.',
      },
      1,
      6,
      {
        type: 'sort',
        q: 'Which family does each verb belong to? Think of its ja form.',
        groups: ['-am (like gledam)', '-im (like govorim)', '-em (like pišem)'],
        items: [
          { hr: 'kuhati', group: 0 },
          { hr: 'raditi', group: 1 },
          { hr: 'kupovati', group: 2 },
          { hr: 'spavati', group: 0 },
          { hr: 'voljeti', group: 1 },
          { hr: 'pisati', group: 2 },
          { hr: 'čitati', group: 0 },
          { hr: 'zvati', group: 2 },
        ],
        explanation:
          'kuham, spavam, čitam — radim, volim — kupujem, pišem, zovem. The infinitive does not always tell you: kuhati, pisati and zvati all end in -ati.',
      },
      12,
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Every morning I buy bread at the bakery."',
        words: ['Svako', 'jutro', 'kupujem', 'kruh', 'u', 'pekari.'],
        accept: [
          'Kupujem kruh svako jutro u pekari.',
          'Kupujem kruh u pekari svako jutro.',
          'Svako jutro u pekari kupujem kruh.',
          'Kruh kupujem svako jutro u pekari.',
          'Svako jutro kruh kupujem u pekari.',
          'U pekari kupujem kruh svako jutro.',
          'U pekari svako jutro kupujem kruh.',
        ],
        explanation:
          'Svako jutro kupujem kruh u pekari. No "ja" is needed — the ending -em already says who.',
      },
      13,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'putova', 'svaki', 'vikend.'],
        wrong: 2,
        answer: 'putuje',
        hint: 'Look at the verb. What happens to -ova- in the present?',
        explanation:
          'Moja sestra putuje svaki vikend. — an -ovati verb swaps -ova- for -uj-: putujem, putuješ, putuje.',
      },
      3,
      {
        type: 'transform',
        q: 'Marko joins Ana. Say the same about both of them.',
        from: 'Ana pije kavu i jede kolač.',
        answer: 'Ana i Marko piju kavu i jedu kolač.',
        accept: ['Oni piju kavu i jedu kolač.', 'Marko i Ana piju kavu i jedu kolač.'],
        hint: 'Two people need the oni form — of both verbs. Both belong to the -em family.',
        explanation:
          'Ana i Marko piju kavu i jedu kolač. — in the -em family the oni form ends in -u: pije → piju, jede → jedu.',
      },
      14,
      {
        type: 'tf',
        q: 'The form "mogu" can mean both "I can" and "they can".',
        answer: true,
        hint: 'Go through moći person by person. Which two forms keep the g?',
        explanation:
          'True: ja mogu and oni mogu. All the other persons have ž: možeš, može, možemo, možete.',
      },
      10,
      {
        type: 'listen',
        audio: 'Kamo putujete ovo ljeto?',
        q: 'Who is the speaker talking to?',
        options: [
          'To one close friend',
          'To several people, or politely to one person',
          'About some other people',
          'About himself and his family',
        ],
        correct: 1,
        explanation:
          'putujete is the vi form — several people, or one person addressed politely. To one friend it would be: Kamo putuješ?',
      },
      {
        type: 'dictate',
        audio: 'Baka kuha ručak, a djed čita novine.',
        answer: 'Baka kuha ručak, a djed čita novine.',
        hint: 'Seven words. Two people, two verbs of the -am family in the on/ona form.',
        explanation:
          'Baka kuha ručak, a djed čita novine. — Grandma is cooking lunch, and Grandpa is reading the newspaper.',
      },
    ],
  },

  // ── Vi and ti ──────────────────────────────────────────────────────────────
  'vi-vs-ti': {
    text: {
      kind: 'dialogue',
      title: 'Možemo li prijeći na ti?',
      lines: [
        {
          who: 'Tom',
          hr: 'Dobar dan, gospođo Marić. Oprostite, imate li malo vremena?',
          en: 'Good afternoon, Mrs. Marić. Excuse me, do you have a little time?',
        },
        {
          who: 'Gospođa Marić',
          hr: 'Dobar dan, Tome! Naravno. Izvolite, sjednite. Hoćete li kavu?',
          en: 'Good afternoon, Tom! Of course. Please, have a seat. Would you like some coffee?',
        },
        {
          who: 'Tom',
          hr: 'Hvala Vam, vrlo rado. A tko si ti? Kako se zoveš?',
          en: 'Thank you, I would love some. And who are you? What is your name?',
        },
        { who: 'Leo', hr: 'Ja sam Leo. Imam šest godina.', en: 'I am Leo. I am six years old.' },
        {
          who: 'Gospođa Marić',
          hr: 'To je moj unuk. Tome, mi smo već dugo susjedi. Možemo li prijeći na ti?',
          en: 'That is my grandson. Tom, we have been neighbors for a long time now. Can we switch to "ti"?',
        },
        { who: 'Tom', hr: 'Naravno, s veseljem!', en: 'Of course, with pleasure!' },
        {
          who: 'Gospođa Marić',
          hr: 'Odlično. Ja sam Vesna. Piješ li kavu s mlijekom?',
          en: 'Excellent. I am Vesna. Do you take your coffee with milk?',
        },
        {
          who: 'Tom',
          hr: 'Da, hvala ti, Vesna. Možeš li mi dati i malo šećera?',
          en: 'Yes, thank you, Vesna. Can you give me a little sugar too?',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: at the START of the visit, how does Tom address Mrs. Marić, and how does he address Leo?',
          options: [
            'Both with ti',
            'Both with Vi',
            'Mrs. Marić with Vi, Leo with ti',
            'Mrs. Marić with ti, Leo with Vi',
          ],
          correct: 2,
          hint: 'One of them is an older neighbor, the other is six years old.',
          explanation:
            'To Mrs. Marić: imate li, Hvala Vam — Vi. To Leo: Tko si ti? Kako se zoveš? — a child is always ti.',
        },
        {
          q: 'Mrs. Marić first asks "Hoćete li kavu?" and later "Piješ li kavu s mlijekom?" What happened between the two questions?',
          options: [
            'She started talking to Leo instead of Tom',
            'She offered to switch to ti, and Tom accepted',
            'Tom made a mistake and she became less polite',
            'Nothing — the first question is about the future and the second about the present',
          ],
          correct: 1,
          hint: 'Look at the verb endings: -te, then -š. Then think of the title of the dialogue.',
          explanation:
            'Hoćete is the Vi form; piješ is the ti form. In between she asked "Možemo li prijeći na ti?" and Tom said "Naravno, s veseljem!" — so now they are on first-name terms.',
        },
        {
          type: 'type',
          q: 'Now you. It is BEFORE the switch, and you want to know where Mrs. Marić works. Ask politely: Gdje ____?',
          answer: 'radite',
          hint: 'Polite address uses the vi form of the verb. Raditi is in the -im family.',
          explanation:
            'Gdje radite? — the polite question. After the switch you would ask: Gdje radiš?',
        },
        {
          type: 'transform',
          q: 'Tom said this before the switch. Say it again the way he would say it to Vesna afterward.',
          from: 'Hvala Vam. Možete li mi dati šećer?',
          answer: 'Hvala ti. Možeš li mi dati šećer?',
          hint: 'Two words change: the "to you" after hvala, and the verb.',
          explanation:
            'Hvala ti. Možeš li mi dati šećer? — Vam becomes ti, and možete becomes možeš. Mixing the two would sound confused.',
        },
        {
          type: 'type',
          q: 'You turn to Leo, who is six, and ask him about school: Leo, ____ li u školu? (ići)',
          answer: 'ideš',
          hint: 'A child is never Vi. Ići builds its present on id-, and you need the ending for ti.',
          explanation:
            'Leo, ideš li u školu? — ti ideš. To his grandmother before the switch: Idete li…?',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'You meet these people. Who gets Vi, and who gets ti?',
        groups: ['Vi (polite)', 'ti (familiar)'],
        items: [
          { hr: 'liječnik u bolnici', group: 0 },
          { hr: 'tvoj mali brat', group: 1 },
          { hr: 'stara gospođa u autobusu', group: 0 },
          { hr: 'djevojčica u parku', group: 1 },
          { hr: 'profesorica na fakultetu', group: 0 },
          { hr: 'dobar prijatelj', group: 1 },
          { hr: 'konobar u restoranu', group: 0 },
        ],
        explanation:
          'Strangers in a service or official setting, and older people you do not know, are Vi. Family, friends and children are ti.',
      },
      4,
      7,
      2,
      {
        type: 'match',
        q: 'Match each polite phrase to what it means.',
        pairs: [
          ['Izvolite.', 'Here you are.'],
          ['Oprostite.', 'Excuse me.'],
          ['S veseljem!', 'With pleasure!'],
          ['Drago mi je.', 'Nice to meet you.'],
          ['Sjednite.', 'Have a seat.'],
        ],
        explanation:
          'Izvolite, oprostite and sjednite all end in -te: they are the polite (Vi) forms. To a friend you say izvoli, oprosti, sjedni.',
      },
      6,
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Gospodine,', 'govoriš', 'li', 'engleski?'],
        wrong: 1,
        answer: 'govorite',
        hint: 'A man you call gospodine is not on ti terms with you. Which verb form goes with polite address?',
        explanation:
          'Gospodine, govorite li engleski? — gospodine belongs with Vi, so the verb takes the -te ending.',
      },
      5,
      {
        type: 'transform',
        q: 'You wrote this to a new friend. Now you are writing to an older man you have just met — make it polite.',
        from: 'Gdje radiš? Mogu li te nešto pitati?',
        answer: 'Gdje radite? Mogu li Vas nešto pitati?',
        hint: 'The verb takes the -te ending, and the object "you" changes to its polite form — with a capital letter.',
        explanation:
          'Gdje radite? Mogu li Vas nešto pitati? — radiš becomes radite, and te becomes Vas. Writing to one person, the polite Vas takes a capital letter.',
      },
      10,
      {
        type: 'tf',
        q: '"Gospođo, sjedni, molim Vas." is a correct polite sentence.',
        answer: false,
        hint: 'Check whether the verb and the "please" speak to the same "you".',
        explanation:
          'Sjedni is the ti form, but molim Vas is polite. Both must match: Gospođo, sjednite, molim Vas.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Thank you for your help, ma’am."',
        words: ['Hvala', 'Vam', 'na', 'pomoći,', 'gospođo.'],
        accept: ['Gospođo, hvala Vam na pomoći.'],
        explanation:
          'Hvala Vam na pomoći, gospođo. — hvala takes the dative (Vam), and what you are thankful for follows na.',
      },
      {
        type: 'listen',
        audio: 'Oprostite, znate li gdje je pošta?',
        q: 'Who is the speaker most likely talking to?',
        options: [
          'Their best friend',
          'A little child',
          'A stranger on the street',
          'Their own brother',
        ],
        correct: 2,
        explanation:
          'Oprostite and znate are Vi forms — the way you stop a stranger. To a friend: Oprosti, znaš li gdje je pošta?',
      },
      {
        type: 'dictate',
        audio: 'Drago mi je što Vas opet vidim.',
        answer: 'Drago mi je što Vas opet vidim.',
        hint: 'Seven words. One of them is the polite "you" as an object.',
        explanation: 'Drago mi je što Vas opet vidim. — I am glad to see you again (polite).',
      },
    ],
  },

  // ── All seven cases, one table ─────────────────────────────────────────────
  'declension-review': {
    text: {
      kind: 'dialogue',
      title: 'Ima li mjesta u autu?',
      lines: [
        {
          who: 'Iva',
          hr: 'Lana, gdje si? Čekam te ispred zgrade već deset minuta.',
          en: 'Lana, where are you? I have been waiting for you in front of the building for ten minutes already.',
        },
        {
          who: 'Lana',
          hr: 'Oprosti! Razgovarala sam s bratom. Sutra putuje autom u Rijeku.',
          en: 'Sorry! I was talking with my brother. Tomorrow he is traveling to Rijeka by car.',
        },
        { who: 'Iva', hr: 'Tvoj brat živi u Rijeci?', en: 'Your brother lives in Rijeka?' },
        {
          who: 'Lana',
          hr: 'Ne, živi u Zagrebu, ali u Rijeci ima puno prijatelja.',
          en: 'No, he lives in Zagreb, but he has a lot of friends in Rijeka.',
        },
        {
          who: 'Iva',
          hr: 'Super! I ja sutra idem u Rijeku, a nemam auta. Pitaj brata ima li mjesta!',
          en: 'Great! I am going to Rijeka tomorrow too, and I have no car. Ask your brother if there is room!',
        },
        {
          who: 'Lana',
          hr: 'Dobro, zovem ga. … Brate, imaš li mjesta u autu za Ivu?',
          en: 'OK, I am calling him. … Brother, do you have room in the car for Iva?',
        },
        {
          who: 'Lana',
          hr: 'Kaže da ima. Ali putuje rano, u šest sati.',
          en: 'He says he does. But he is leaving early, at six o’clock.',
        },
        {
          who: 'Iva',
          hr: 'Nema problema! Hvala tebi i bratu.',
          en: 'No problem! Thanks to you and to your brother.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where does Lana’s brother live, and what does Iva need from him?',
          options: [
            'He lives in Rijeka; Iva needs a place to stay',
            'He lives in Rijeka; Iva needs to borrow his car',
            'He lives in Zagreb; Iva needs his phone number',
            'He lives in Zagreb; Iva needs a seat in his car',
          ],
          correct: 3,
          hint: 'Iva guesses wrong about where he lives, and Lana corrects her. Then think of what Iva does not have.',
          explanation:
            'He lives in Zagreb and only has friends in Rijeka. Iva has no car (nemam auta), so she asks whether there is room in his.',
        },
        {
          q: 'The brother appears as "s bratom", "Pitaj brata", "Brate" and "Hvala … bratu". He is one and the same man — why four different endings?',
          options: [
            'Because Lana and Iva speak different dialects',
            'Because each ending shows his job in that sentence: with him, him as the object, calling him, to him',
            'Because the endings change with the tense of the verb',
            'Because Iva is being polite and Lana is not',
          ],
          correct: 1,
          hint: 'Ask a question about him in each sentence: with whom? whom? to whom? — and once nobody asks anything, he is just being called.',
          explanation:
            'S bratom is the instrumental (with whom?), brata the accusative (whom?), brate the vocative (calling him), bratu the dative (thanks to whom?). The case ending does the work English gives to word order and prepositions.',
        },
        {
          type: 'type',
          q: 'Now you. Lana’s grandmother does not live in a city: Baka živi na ____. (selo)',
          answer: 'selu',
          hint: 'Where? After na you need the locative — for a neuter noun in -o it is the same form as the dative.',
          explanation: 'Baka živi na selu. — selo → selu, like u Zagrebu and u autu.',
        },
        {
          type: 'type',
          q: 'You are going to Rijeka too, but not alone: Idem u Rijeku sa ____. (sestra)',
          answer: 'sestrom',
          hint: 'With whom? The feminine ending for "with" is the same one Lana uses on brat in her first reply.',
          explanation:
            'Idem u Rijeku sa sestrom. — the instrumental ends in -om for both: s bratom, sa sestrom. Before s, the preposition is sa.',
        },
        {
          type: 'transform',
          q: 'The car fills up: there is not ONE student in it any more, but five. Change the sentence.',
          from: 'U autu je jedan student.',
          answer: 'U autu je pet studenata.',
          accept: ['U autu ima pet studenata.'],
          hint: 'From five up, the noun goes into the genitive plural — and this noun gets an extra a before its last consonant.',
          explanation:
            'U autu je pet studenata. — after pet the genitive plural: student → studenata, like puno prijatelja in the dialogue.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'Which question does each form answer?',
        groups: [
          'With whom? By what? (s kim? čim?)',
          'To whom? (komu?)',
          'Whom? What? — the object (koga? što?)',
        ],
        items: [
          { hr: 'sestrom', group: 0 },
          { hr: 'teti', group: 1 },
          { hr: 'knjigu', group: 2 },
          { hr: 'vlakom', group: 0 },
          { hr: 'bratu', group: 1 },
          { hr: 'ženu', group: 2 },
          { hr: 'mužem', group: 0 },
        ],
        explanation:
          'The instrumental ends in -om or -em (sestrom, vlakom, mužem), the dative in -i or -u (teti, bratu), and a feminine object in -u (knjigu, ženu).',
      },
      2,
      {
        type: 'match',
        q: 'Match each case to the job it does.',
        pairs: [
          ['nominative', 'the subject of the sentence'],
          ['genitive', 'of, from, without — and after quantities'],
          ['dative', 'to or for someone'],
          ['locative', 'where — always after a preposition'],
          ['instrumental', 'with whom, or by what means'],
        ],
        explanation:
          'Tko? (nominative), Koga? Čega? (genitive), Komu? (dative), Gdje? O čemu? (locative), S kim? Čim? (instrumental). The accusative is the object, and the vocative calls someone.',
      },
      4,
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Čekam', 'brat', 'ispred', 'škole.'],
        wrong: 1,
        answer: 'brata',
        hint: 'The object here is a living masculine being. Can it stay in its dictionary form?',
        explanation:
          'Čekam brata ispred škole. — a living masculine object takes the genitive-like form. A thing would not change: Čekam autobus.',
      },
      6,
      11,
      {
        type: 'order',
        q: 'Put the words in order: "I am traveling to the seaside by train with friends."',
        words: ['Putujem', 'vlakom', 'na', 'more', 's', 'prijateljima.'],
        accept: [
          'Putujem na more vlakom s prijateljima.',
          'Putujem s prijateljima vlakom na more.',
          'Putujem na more s prijateljima vlakom.',
          'S prijateljima putujem vlakom na more.',
          'Vlakom putujem na more s prijateljima.',
          'Na more putujem vlakom s prijateljima.',
          'S prijateljima putujem na more vlakom.',
        ],
        explanation:
          'Putujem vlakom na more s prijateljima. — vlakom is the instrumental of means (no preposition), s prijateljima the instrumental of company (with s).',
      },
      {
        type: 'transform',
        q: 'Not one sister — several. Put "sestrom" in the plural.',
        from: 'Idem u kino sa sestrom.',
        answer: 'Idem u kino sa sestrama.',
        hint: 'In the plural, feminine nouns have ONE ending for "to", "about" and "with".',
        explanation:
          'Idem u kino sa sestrama. — the dative, locative and instrumental plural of feminine nouns all end in -ama.',
      },
      12,
      {
        type: 'tf',
        q: '"Živim Zagrebu." is a correct sentence.',
        answer: false,
        hint: 'Which case is Zagrebu here — and can that case ever stand alone?',
        explanation: 'The locative never appears without a preposition: Živim u Zagrebu.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Idem', 'u', 'kino', 's', 'prijateljom.'],
        wrong: 4,
        answer: 'prijateljem',
        hint: 'lj is a soft consonant. What does that do to the masculine ending for "with"?',
        explanation:
          'Idem u kino s prijateljem. — after a soft consonant (c, č, ć, đ, j, lj, nj, š, ž) the masculine instrumental is -em, not -om.',
      },
      {
        type: 'listen',
        audio: 'Pišem pismo prijatelju.',
        q: 'What is happening?',
        options: [
          'I am writing a letter with a friend',
          'I am writing a letter about a friend',
          'I am writing a letter to a friend',
          'A friend is writing a letter to me',
        ],
        correct: 2,
        explanation:
          'prijatelju without a preposition is the dative: to a friend. "With a friend" would be s prijateljem, "about a friend" o prijatelju.',
      },
      {
        type: 'dictate',
        audio: 'Sutra putujem autobusom u Split.',
        answer: 'Sutra putujem autobusom u Split.',
        hint: 'Five words. The means of transport is in the "by what" case, and the city is where you are going TO.',
        explanation:
          'Sutra putujem autobusom u Split. — autobusom: instrumental of means; u Split: accusative of direction.',
      },
    ],
  },

  // ── Adjective agreement ────────────────────────────────────────────────────
  'adjective-agreement': {
    text: {
      kind: 'dialogue',
      title: 'Novi stan',
      lines: [
        {
          who: 'Dario',
          hr: 'Nina, ovo je tvoj novi stan? Jako je lijep!',
          en: 'Nina, this is your new apartment? It is really nice!',
        },
        {
          who: 'Nina',
          hr: 'Hvala! Stan je mali, ali ima veliku kuhinju i lijep balkon.',
          en: 'Thanks! The apartment is small, but it has a big kitchen and a nice balcony.',
        },
        { who: 'Dario', hr: 'A ova stara stolica?', en: 'And this old chair?' },
        {
          who: 'Nina',
          hr: 'To je bakina stolica. Volim sjediti na staroj stolici kraj prozora.',
          en: 'That is Grandma’s chair. I love sitting on the old chair by the window.',
        },
        {
          who: 'Dario',
          hr: 'Vidim i crnog psa na balkonu! Je li tvoj?',
          en: 'I see a black dog on the balcony too! Is he yours?',
        },
        {
          who: 'Nina',
          hr: 'Nije, to je susjedov pas. Ali imam bijelu mačku — spava u velikoj sobi.',
          en: 'No, that is the neighbor’s dog. But I have a white cat — she is sleeping in the big room.',
        },
        {
          who: 'Dario',
          hr: 'Lijepo! I živiš u mirnoj ulici.',
          en: 'Nice! And you live on a quiet street.',
        },
        {
          who: 'Nina',
          hr: 'Da, i susjedi su ljubazni. Hoćeš li hladan sok ili vruću kavu?',
          en: 'Yes, and the neighbors are friendly. Do you want a cold juice or a hot coffee?',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which animals are in the apartment, and whose are they?',
          options: [
            'A black cat and a white dog, both Nina’s',
            'A white dog that belongs to Nina’s grandmother',
            'A black dog that belongs to the neighbor, and Nina’s white cat',
            'A black dog that is Nina’s, and the neighbor’s white cat',
          ],
          correct: 2,
          hint: 'Dario sees one animal on the balcony and asks about it. Nina then names another one, in the big room.',
          explanation:
            'Crni pas on the balcony is the neighbor’s (susjedov pas). Nina’s own pet is the bijela mačka asleep in the big room.',
        },
        {
          q: 'Nina says the apartment "ima veliku kuhinju i lijep balkon". Both are things the apartment HAS — why does only the first adjective get a new ending?',
          options: [
            'Because velik is an irregular adjective',
            'Because the kitchen is more important than the balcony',
            'Because only the first adjective after a verb changes',
            'Because kuhinja is feminine and changes as an object, while balkon is a masculine thing and does not',
          ],
          correct: 3,
          hint: 'Look at the two nouns themselves. Which of them changed its ending, and which looks like its dictionary form?',
          explanation:
            'The adjective follows its noun. A feminine object takes -u on both words: veliku kuhinju. A masculine THING as an object keeps its subject form, so its adjective does too: lijep balkon.',
        },
        {
          type: 'type',
          q: 'Now you. Nina lives on a quiet street. You tell Dario where you work: Radim u ____ uredu. (nov)',
          answer: 'novom',
          accept: ['novome'],
          hint: 'Where? Ured is masculine, so the adjective needs the masculine "where" ending — not the -oj Nina uses before sobi and ulici.',
          explanation:
            'Radim u novom uredu. — masculine (and neuter) locative: -om. Feminine: u velikoj sobi, u mirnoj ulici.',
        },
        {
          type: 'type',
          q: 'Dario has a dog too, and his dog is old: Dario ima ____ psa. (star)',
          answer: 'starog',
          accept: ['staroga'],
          hint: 'A dog is alive and masculine. The adjective gets the same ending as crn has before psa in the dialogue.',
          explanation:
            'Dario ima starog psa. — a living masculine object: -og on the adjective, -a on the noun, as in crnog psa.',
        },
        {
          type: 'transform',
          q: 'This phrase is in the subject form. Use it to say where Nina lives: begin with "Nina živi u".',
          from: 'mali stan',
          answer: 'Nina živi u malom stanu.',
          accept: ['Nina živi u malome stanu.'],
          hint: 'After u (where?) both words go into the locative: one ending for the adjective, another for the noun.',
          explanation: 'Nina živi u malom stanu. — mali → malom, stan → stanu.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Which form of "new" does each noun take?',
        groups: ['novi (masculine)', 'nova (feminine)', 'novo (neuter)'],
        items: [
          { hr: 'stan', group: 0 },
          { hr: 'kuhinja', group: 1 },
          { hr: 'selo', group: 2 },
          { hr: 'pas', group: 0 },
          { hr: 'večer', group: 1 },
          { hr: 'more', group: 2 },
          { hr: 'haljina', group: 1 },
          { hr: 'vrijeme', group: 2 },
        ],
        explanation:
          'The noun’s gender decides. Watch two of them: večer has no -a but is feminine (dobra večer), and vrijeme ends in -e and is neuter.',
      },
      4,
      5,
      0,
      {
        type: 'match',
        q: 'Match each sentence to the form of "stari" that fits its gap.',
        pairs: [
          ['To je moj … prijatelj.', 'stari'],
          ['Čekam … prijatelja.', 'starog'],
          ['Pišem … prijatelju.', 'starom'],
          ['Putujem sa … prijateljem.', 'starim'],
        ],
        explanation:
          'The adjective follows the noun through the cases: subject stari, living object starog, dative starom, instrumental starim.',
      },
      6,
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Kupila', 'sam', 'crvena', 'haljinu.'],
        wrong: 2,
        answer: 'crvenu',
        hint: 'The dress is the object and has changed its ending. Has the adjective followed it?',
        explanation:
          'Kupila sam crvenu haljinu. — the adjective goes into every case with its noun: feminine accusative -u on both.',
      },
      9,
      {
        type: 'transform',
        q: 'Swap the noun: you live not in a "grad" but in a "kuća".',
        from: 'Živim u velikom gradu.',
        answer: 'Živim u velikoj kući.',
        hint: 'Kuća is feminine: the noun AND the adjective need the feminine "where" endings.',
        explanation:
          'Živim u velikoj kući. — feminine locative: -oj on the adjective, -i on the noun.',
      },
      7,
      {
        type: 'tf',
        q: '"Sela su lijepa." is a sentence about one beautiful woman.',
        answer: false,
        hint: 'Sela is the plural of a neuter noun. What does a neuter plural adjective end in?',
        explanation:
          'It means "The villages are beautiful." A neuter plural adjective ends in -a, which only looks like the feminine singular. The noun decides.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The new neighbors are very friendly."',
        words: ['Novi', 'susjedi', 'su', 'jako', 'ljubazni.'],
        accept: ['Novi su susjedi jako ljubazni.'],
        explanation:
          'Novi susjedi su jako ljubazni. — masculine plural: both adjectives end in -i, like susjedi.',
      },
      8,
      10,
      {
        type: 'listen',
        audio: 'Upoznala sam zanimljivog čovjeka.',
        q: 'What do you learn from this sentence?',
        options: [
          'A man met an interesting woman',
          'A woman met an interesting man',
          'A woman met some interesting people',
          'A man knows an interesting man',
        ],
        correct: 1,
        explanation:
          'Upoznala — the speaker is a woman. Zanimljivog čovjeka — one man, a living masculine object, so -og and -a.',
      },
      {
        type: 'dictate',
        audio: 'Imam crnog psa i bijelu mačku.',
        answer: 'Imam crnog psa i bijelu mačku.',
        hint: 'Six words. Two animals, two colors: one is a living masculine object, the other a feminine one.',
        explanation: 'Imam crnog psa i bijelu mačku. — I have a black dog and a white cat.',
      },
    ],
  },

  // ── Zagrebački, splitski, riječki ──────────────────────────────────────────
  'relational-adjectives': {
    text: {
      kind: 'text',
      title: 'Razglednica iz Splita',
      lines: [
        { hr: 'Draga Sara, pozdrav iz Hrvatske!', en: 'Dear Sara, greetings from Croatia!' },
        {
          hr: 'Prvo smo bili u Zagrebu. Vozili smo se plavim zagrebačkim tramvajem.',
          en: 'First we were in Zagreb. We rode the blue Zagreb tram.',
        },
        {
          hr: 'Onda smo putovali u Rijeku. Riječka luka je jako velika.',
          en: 'Then we traveled to Rijeka. The port of Rijeka is very big.',
        },
        {
          hr: 'Sada smo u Splitu. Svaki dan šetamo po splitskoj rivi i jedemo dalmatinsku hranu.',
          en: 'Now we are in Split. Every day we walk along the Split waterfront and eat Dalmatian food.',
        },
        {
          hr: 'Tom pije istarsko vino, a ja učim hrvatski jezik.',
          en: 'Tom drinks Istrian wine, and I am learning the Croatian language.',
        },
        {
          hr: 'Sutra idemo u Dubrovnik. Želim vidjeti stare dubrovačke zidine.',
          en: 'Tomorrow we are going to Dubrovnik. I want to see the old Dubrovnik walls.',
        },
        {
          hr: 'Konobar kaže da dobro govorim hrvatski!',
          en: 'The waiter says that I speak Croatian well!',
        },
        { hr: 'Puno pozdrava, Emma', en: 'Best wishes, Emma' },
      ],
      questions: [
        {
          q: 'Without looking back at the postcard: in which order is Emma visiting the cities, and where is she writing from?',
          options: [
            'Split, Rijeka, Zagreb, Dubrovnik — she is writing from Zagreb',
            'Zagreb, Rijeka, Split, Dubrovnik — she is writing from Split',
            'Zagreb, Split, Rijeka, Dubrovnik — she is writing from Rijeka',
            'Rijeka, Zagreb, Dubrovnik, Split — she is writing from Dubrovnik',
          ],
          correct: 1,
          hint: 'Prvo… onda… sada… sutra. Which city goes with "sada"?',
          explanation:
            'First Zagreb (the tram), then Rijeka (the port), now Split (the waterfront), and tomorrow Dubrovnik (the walls).',
        },
        {
          q: 'Emma writes "po splitskoj rivi", "dalmatinsku hranu" and "istarsko vino". All three words come from place names — why do they end in three different ways?',
          options: [
            'Because each place name has its own special ending',
            'Because the first is about a city and the others are about regions',
            'Because each one agrees with its noun: rivi is feminine after po, hranu is a feminine object, vino is neuter',
            'Because they are written with a small letter',
          ],
          correct: 2,
          hint: 'Do not look at the places. Look at the three nouns after them — their gender and their case.',
          explanation:
            'A place adjective is an ordinary adjective. Po splitskoj rivi: feminine locative. Dalmatinsku hranu: feminine accusative. Istarsko vino: neuter, which does not change as an object.',
        },
        {
          type: 'type',
          q: 'Now you. You are in Osijek and you love the food there: Volim ____ hranu. (Osijek)',
          answer: 'osječku',
          hint: 'Two steps. First the k of the city merges with the ending, as Rijeka does in "riječka luka". Then the adjective follows hranu.',
          explanation:
            'Volim osječku hranu. — Osijek → osječki (k + ski gives čki, and the long ije shortens to je), then the feminine accusative -u.',
        },
        {
          type: 'type',
          q: 'The waiter asks which other languages you speak. You speak German: Govorim i ____. (Njemačka)',
          answer: 'njemački',
          hint: 'A language is named by the adjective alone, with a small letter. A country in -čka only swaps its last vowel for the masculine one.',
          explanation:
            'Govorim i njemački. — Njemačka → njemački, like Hrvatska → hrvatski. No capital letter for a language.',
        },
        {
          type: 'transform',
          q: 'Say it with ONE adjective instead of "iz Zagreba".',
          from: 'pivo iz Zagreba',
          answer: 'zagrebačko pivo',
          hint: 'The adjective from Zagreb is in the postcard, in front of tramvajem. Give it the ending that pivo needs.',
          explanation:
            'zagrebačko pivo — Zagreb → zagrebački, and pivo is neuter, so -o. The adjective stands before the noun.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'These nouns keep turning up next to place adjectives. Match each to its meaning.',
        pairs: [
          ['zidine', 'town walls'],
          ['luka', 'port'],
          ['riva', 'waterfront'],
          ['županija', 'county'],
          ['jezik', 'language; tongue'],
        ],
        explanation:
          'You will meet them with place adjectives all the time: pulska luka, šibenska riva. A županija is one of the twenty Croatian counties, and jezik is both the tongue in your mouth and a language.',
      },
      8,
      9,
      {
        type: 'tf',
        q: '"Govorim Njemački i Francuski." is written correctly.',
        answer: false,
        hint: 'Think of how "hrvatski jezik" is written in the middle of a sentence.',
        explanation:
          'Languages and place adjectives take a small letter: Govorim njemački i francuski. A capital comes only when the adjective opens a proper name: Europska unija.',
      },
      10,
      0,
      12,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Šetamo', 'po', 'splitski', 'rivi.'],
        wrong: 2,
        answer: 'splitskoj',
        hint: 'Rivi is feminine and stands after po. The adjective has to follow it there.',
        explanation:
          'Šetamo po splitskoj rivi. — a place adjective agrees like any other: feminine locative -oj.',
      },
      11,
      6,
      1,
      {
        type: 'sort',
        q: 'How does each place make its adjective?',
        groups: ['with -ski (like Split → splitski)', 'with -čki or -ački (like Rijeka → riječki)'],
        items: [
          { hr: 'Zadar', group: 0 },
          { hr: 'Osijek', group: 1 },
          { hr: 'Istra', group: 0 },
          { hr: 'Zagreb', group: 1 },
          { hr: 'Europa', group: 0 },
          { hr: 'Amerika', group: 1 },
          { hr: 'Varaždin', group: 0 },
          { hr: 'Dubrovnik', group: 1 },
        ],
        explanation:
          'zadarski, istarski, europski, varaždinski — but osječki and američki (k + ski gives čki), and the two to learn as words: zagrebački, dubrovački.',
      },
      {
        type: 'transform',
        q: 'Say it with ONE adjective instead of "iz Slavonije".',
        from: 'kulen iz Slavonije',
        answer: 'slavonski kulen',
        hint: 'Drop the ending of Slavonija and add the basic adjective ending. Kulen is masculine.',
        explanation: 'slavonski kulen — Slavonija → slavonski, masculine, with a small letter.',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "My parents love Istrian cooking."',
        words: ['Moji', 'roditelji', 'vole', 'istarsku', 'kuhinju.'],
        accept: ['Istarsku kuhinju vole moji roditelji.'],
        explanation:
          'Moji roditelji vole istarsku kuhinju. — kuhinju is a feminine object, so the adjective is istarsku.',
      },
      {
        type: 'fix',
        q: 'Ivan is showing you his home city, Dubrovnik. One word in his sentence is wrong. Tap it.',
        words: ['Volim', 'stare', 'dubrovački', 'zidine.'],
        wrong: 2,
        answer: 'dubrovačke',
        hint: 'Zidine is a plural noun, and the adjective stare has already followed it.',
        explanation:
          'Volim stare dubrovačke zidine. — the place adjective agrees with zidine just as stare does: -e.',
      },
      {
        type: 'listen',
        audio: 'Navijam za riječki klub.',
        q: 'Which city is the speaker’s club from?',
        options: ['Split', 'Osijek', 'Zagreb', 'Rijeka'],
        correct: 3,
        explanation:
          'riječki is the adjective from Rijeka: the k merges with -ski into -čki. Navijam za… means "I root for…".',
      },
      {
        type: 'dictate',
        audio: 'Ovo je stara varaždinska ulica.',
        answer: 'Ovo je stara varaždinska ulica.',
        hint: 'Five words. The adjective comes from the city of Varaždin — think about its first letter.',
        explanation:
          'Ovo je stara varaždinska ulica. — This is an old Varaždin street. Small letter, feminine -a to agree with ulica.',
      },
    ],
  },

  // ══ UNIT 2 ═════════════════════════════════════════════════════════════════

  // ── Possessive adjectives in the cases ─────────────────────────────────────
  'possessive-adjectives-cases': {
    text: {
      kind: 'dialogue',
      title: 'Bakin rođendan',
      lines: [
        {
          who: 'Josip',
          hr: 'Ivana, u subotu je bakin rođendan. Gdje slavimo?',
          en: 'Ivana, Saturday is Grandma’s birthday. Where are we celebrating?',
        },
        {
          who: 'Ivana',
          hr: 'U tetinoj kući. Teta ima velik vrt.',
          en: 'At our aunt’s house. She has a big garden.',
        },
        {
          who: 'Josip',
          hr: 'Dobro. Ja dolazim s Markovim bratom — on ima auto.',
          en: 'Good. I am coming with Marko’s brother — he has a car.',
        },
        {
          who: 'Ivana',
          hr: 'A tko vozi djedovu sestru? Ona živi daleko.',
          en: 'And who is driving Grandpa’s sister? She lives far away.',
        },
        {
          who: 'Josip',
          hr: 'Nju vozi Anin muž. Već sam razgovarao s Aninim mužem.',
          en: 'Ana’s husband is driving her. I have already talked with Ana’s husband.',
        },
        {
          who: 'Ivana',
          hr: 'Super. Ja sam kupila poklon za bakin rođendan: lijepu knjigu o cvijeću.',
          en: 'Great. I bought a present for Grandma’s birthday: a nice book about flowers.',
        },
        { who: 'Josip', hr: 'A torta?', en: 'And the cake?' },
        {
          who: 'Ivana',
          hr: 'Tortu radimo po maminom receptu. Baka voli mamine kolače!',
          en: 'We are making the cake from Mom’s recipe. Grandma loves Mom’s cakes!',
        },
        {
          who: 'Josip',
          hr: 'Odlično. Vidimo se u subotu u tetinom vrtu!',
          en: 'Excellent. See you on Saturday in our aunt’s garden!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the party, and who is driving Grandpa’s sister there?',
          options: [
            'At Grandma’s house; Marko’s brother is driving her',
            'In a restaurant; Josip is driving her',
            'At the aunt’s house; Ana’s husband is driving her',
            'At the aunt’s house; Marko’s brother is driving her',
          ],
          correct: 2,
          hint: 'Two cars are mentioned. One brings Josip, the other brings the lady who lives far away.',
          explanation:
            'The party is u tetinoj kući. Josip comes with Marko’s brother; djedovu sestru vozi Anin muž.',
        },
        {
          q: 'Josip says "Anin muž" and, in the very next sentence, "s Aninim mužem". Ana has not changed — so why has the word made from her name?',
          options: [
            'Because the second sentence is in the past tense',
            'Because the possessive follows its NOUN: muž is first the subject, then it stands after s, and the possessive goes with it',
            'Because Ana is a woman, and women’s possessives end in -im',
            'Because Josip is speaking more politely the second time',
          ],
          correct: 1,
          hint: 'The owner only decides the form in -in. Ask what decides the ENDING — and look at what happened to muž.',
          explanation:
            'The owner gives the form (Ana → Anin), but the noun gives the ending. Muž is the subject: Anin muž. After s it is the instrumental mužem, and a masculine possessive in the instrumental ends in -im: s Aninim mužem.',
        },
        {
          type: 'type',
          q: 'Now you. You spoke with Marko’s sister, not his brother: Razgovarao sam s ____ sestrom. (Marko)',
          answer: 'Markovom',
          hint: 'The owner gives the form in -ov. The ending must follow sestrom, which is feminine — so it is not the -im that went with bratom.',
          explanation:
            'Razgovarao sam s Markovom sestrom. — feminine instrumental: -om on both words. Masculine: s Markovim bratom.',
        },
        {
          type: 'type',
          q: 'The party is in the aunt’s house. You are sleeping in your brother’s room: Spavam u ____ sobi. (brat)',
          answer: 'bratovoj',
          hint: 'Brat → the possessive in -ov. Soba is feminine and stands after u (where?), like kući in Ivana’s first reply.',
          explanation:
            'Spavam u bratovoj sobi. — feminine locative -oj, exactly as in u tetinoj kući.',
        },
        {
          type: 'transform',
          q: 'The dog is the subject here. Now say that you SEE him: begin with "Vidim".',
          from: 'Ovo je Petrov pas.',
          answer: 'Vidim Petrovog psa.',
          accept: ['Vidim Petrova psa.', 'Vidim Petrovoga psa.'],
          hint: 'A dog is alive and masculine: both words change, and pas loses its a.',
          explanation:
            'Vidim Petrovog psa. — a living masculine object. The short form Petrova psa is correct too, and more formal.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Luka has a brother and a sister. Match each sentence to the form of "Lukin" that fits its gap.',
        pairs: [
          ['To je … brat.', 'Lukin'],
          ['Čekam … brata.', 'Lukinog'],
          ['Idem u kino s … bratom.', 'Lukinim'],
          ['Pišem poruku … sestri.', 'Lukinoj'],
          ['Vidim … sestru.', 'Lukinu'],
        ],
        explanation:
          'The owner stays the same; the noun decides the ending. Luka ends in -a, so his possessive is made with -in, like Anin.',
      },
      8,
      11,
      0,
      {
        type: 'sort',
        q: 'Whose is it? Sort the owners by the way they make their possessive.',
        groups: ['with -ov (like Markov)', 'with -in (like Anin)'],
        items: [
          { hr: 'brat', group: 0 },
          { hr: 'sestra', group: 1 },
          { hr: 'djed', group: 0 },
          { hr: 'tata', group: 1 },
          { hr: 'susjed', group: 0 },
          { hr: 'Luka', group: 1 },
          { hr: 'Josip', group: 0 },
          { hr: 'teta', group: 1 },
        ],
        explanation:
          'bratov, djedov, susjedov, Josipov — sestrin, tetin, and also tatin and Lukin: the form goes by the ending -a of the word, not by whether the owner is a man.',
      },
      9,
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Idemo', 'na', 'večeru', 'kod', 'Lukina', 'bake.'],
        wrong: 4,
        answer: 'Lukine',
        hint: 'Kod takes the genitive, and bake is feminine. Has the possessive followed its noun?',
        explanation: 'Idemo na večeru kod Lukine bake. — feminine genitive: -e on both words.',
      },
      10,
      6,
      12,
      {
        type: 'transform',
        q: 'Not one friend — several. Put the object in the plural.',
        from: 'Zovem Aninog prijatelja.',
        answer: 'Zovem Anine prijatelje.',
        hint: 'In the plural, a masculine object and its possessive both end in the same vowel.',
        explanation:
          'Zovem Anine prijatelje. — masculine plural accusative: -e on both, as in mamine kolače.',
      },
      {
        type: 'tf',
        q: '"S Markovom bratom" is correct, because the instrumental always ends in -om.',
        answer: false,
        hint: 'In the masculine instrumental, do the noun and the adjective share one ending?',
        explanation:
          'The noun ends in -om, but a masculine adjective or possessive ends in -im: s Markovim bratom. Only the feminine has -om on both: s Markovom sestrom.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "We bought a present for Mom’s birthday."',
        words: ['Kupili', 'smo', 'poklon', 'za', 'mamin', 'rođendan.'],
        accept: [
          'Za mamin rođendan kupili smo poklon.',
          'Za mamin rođendan smo kupili poklon.',
          'Za mamin smo rođendan kupili poklon.',
          'Poklon smo kupili za mamin rođendan.',
        ],
        explanation:
          'Kupili smo poklon za mamin rođendan. — rođendan is a masculine thing, so after za neither word changes.',
      },
      7,
      {
        type: 'listen',
        audio: 'Ovo je auto Ivanove sestre.',
        q: 'Whose car is it?',
        options: ['Ivan’s', 'Ivan’s sister’s', 'Ivana’s sister’s', 'Ivana’s'],
        correct: 1,
        explanation:
          'Ivanove sestre — "of Ivan’s sister". Ivanov comes from Ivan; from Ivana it would be Ivanine sestre.',
      },
      {
        type: 'dictate',
        audio: 'Razgovaramo o bakinom vrtu.',
        answer: 'Razgovaramo o bakinom vrtu.',
        accept: ['Razgovaramo o bakinu vrtu.'],
        hint: 'Four words. After o, both the possessive and the noun are in the "about" case.',
        explanation: 'Razgovaramo o bakinom vrtu. — We are talking about Grandma’s garden.',
      },
    ],
  },

  // ── Filling in a form ──────────────────────────────────────────────────────
  'official-forms': {
    text: {
      kind: 'dialogue',
      title: 'Upis na tečaj',
      lines: [
        {
          who: 'Službenica',
          hr: 'Dobar dan. Izvolite?',
          en: 'Good afternoon. How can I help you?',
        },
        {
          who: 'Daniel',
          hr: 'Dobar dan. Želim se upisati na tečaj hrvatskog jezika.',
          en: 'Good afternoon. I want to sign up for a Croatian language course.',
        },
        {
          who: 'Službenica',
          hr: 'Dobro. Kako se zovete i kako se prezivate?',
          en: 'All right. What is your first name, and what is your last name?',
        },
        {
          who: 'Daniel',
          hr: 'Zovem se Daniel, a prezivam se Novak.',
          en: 'My first name is Daniel, and my last name is Novak.',
        },
        {
          who: 'Službenica',
          hr: 'Kada i gdje ste rođeni?',
          en: 'When and where were you born?',
        },
        {
          who: 'Daniel',
          hr: 'Rođen sam osmog lipnja tisuću devetsto devedeset pete u Torontu, u Kanadi.',
          en: 'I was born on June 8, 1995, in Toronto, Canada.',
        },
        {
          who: 'Službenica',
          hr: 'Kojeg ste državljanstva? I čime se bavite?',
          en: 'What is your citizenship? And what do you do for a living?',
        },
        {
          who: 'Daniel',
          hr: 'Imam kanadsko državljanstvo, a po zanimanju sam kuhar.',
          en: 'I have Canadian citizenship, and I am a cook by profession.',
        },
        {
          who: 'Službenica',
          hr: 'Hvala. Molim Vas, potpišite se ovdje.',
          en: 'Thank you. Please sign here.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: when and where was Daniel born, and what is his job?',
          options: [
            'On June 5, 1998, in Toronto; he is a waiter',
            'On July 8, 1995, in Zagreb; he is a cook',
            'On June 8, 1985, in Toronto; he is a teacher',
            'On June 8, 1995, in Toronto; he is a cook',
          ],
          correct: 3,
          hint: 'The day is osmi, the month is lipanj, and the year ends in devedeset pete.',
          explanation:
            'Osmog lipnja tisuću devetsto devedeset pete — June 8, 1995 — u Torontu. Po zanimanju sam kuhar: a cook.',
        },
        {
          q: 'The clerk has gone through the form with Daniel. Which field has she NOT asked about?',
          options: ['zanimanje', 'adresa', 'mjesto rođenja', 'državljanstvo'],
          correct: 1,
          hint: 'Match her questions to the fields: Čime se bavite? Gdje ste rođeni? Kojeg ste državljanstva? One field has no question.',
          explanation:
            'She never asks "Gdje stanujete?" — so the adresa is still empty. Čime se bavite? fills in zanimanje, Gdje ste rođeni? mjesto rođenja.',
        },
        {
          type: 'type',
          q: 'Now you. Daniel’s wife Sara signs up next. She was born in Canada too, and she says: ____ sam u Kanadi.',
          answer: 'Rođena',
          hint: 'Take the word Daniel uses about himself and change it the way a woman changes a past-tense form.',
          explanation: 'Rođena sam u Kanadi. — a man says rođen sam, a woman rođena sam.',
        },
        {
          type: 'type',
          q: 'The clerk asks for your address. Answer: ____ u Ilici 25.',
          answer: 'Stanujem',
          hint: 'The verb is stanovati, and in the present it behaves like kupovati.',
          explanation:
            'Stanujem u Ilici 25. — stanovati → stanujem: -ova- becomes -uj-. The clerk’s question would be: Gdje stanujete?',
        },
        {
          type: 'transform',
          q: 'A clerk would never speak to a customer like this. Make both questions polite.',
          from: 'Kako se zoveš? Gdje si rođen?',
          answer: 'Kako se zovete? Gdje ste rođeni?',
          hint: 'Both verbs take the Vi form — and with Vi, even the word for "born" is in the plural.',
          explanation:
            'Kako se zovete? Gdje ste rođeni? — with the polite Vi everything is plural in form: ste rođeni, even to one person.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each field of the form to what Marija writes in it.',
        pairs: [
          ['ime', 'Marija'],
          ['prezime', 'Horvat'],
          ['datum rođenja', '12. 4. 1988.'],
          ['mjesto rođenja', 'Toronto'],
          ['zanimanje', 'učiteljica'],
        ],
        explanation:
          'Ime is the first name and prezime the last name. Datum rođenja asks WHEN you were born, mjesto rođenja WHERE; zanimanje is your occupation.',
      },
      8,
      10,
      9,
      0,
      {
        type: 'sort',
        q: 'Who is speaking — a man or a woman?',
        groups: ['A man', 'A woman'],
        items: [
          { hr: 'Rođen sam u Puli.', group: 0 },
          { hr: 'Rođena sam u Zadru.', group: 1 },
          { hr: 'Ja sam hrvatski državljanin.', group: 0 },
          { hr: 'Ja sam hrvatska državljanka.', group: 1 },
          { hr: 'Po zanimanju sam učiteljica.', group: 1 },
          { hr: 'Po zanimanju sam kuhar.', group: 0 },
        ],
        explanation:
          'Rođen / rođena, državljanin / državljanka, kuhar / učiteljica: on a form, the speaker’s gender shows in almost every answer.',
      },
      12,
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Rođen', 'sam', 'u', 'Split.'],
        wrong: 3,
        answer: 'Splitu',
        hint: 'Where? After u, the place needs its "where" ending.',
        explanation: 'Rođen sam u Splitu. — the place of birth is in the locative.',
      },
      11,
      5,
      {
        type: 'order',
        q: 'Put the words in order: "I have Croatian and Canadian citizenship."',
        words: ['Imam', 'hrvatsko', 'i', 'kanadsko', 'državljanstvo.'],
        accept: ['Imam kanadsko i hrvatsko državljanstvo.'],
        explanation:
          'Imam hrvatsko i kanadsko državljanstvo. — both adjectives are neuter, to agree with državljanstvo, and both take a small letter.',
      },
      {
        type: 'transform',
        q: 'The clerk said this to your little brother. Now she says it to you, an adult.',
        from: 'Ispuni obrazac i potpiši se ovdje.',
        answer: 'Ispunite obrazac i potpišite se ovdje.',
        hint: 'Both commands need the polite ending.',
        explanation:
          'Ispunite obrazac i potpišite se ovdje. — the polite imperative adds -te: ispuni → ispunite, potpiši se → potpišite se.',
      },
      {
        type: 'tf',
        q: 'Many Croatian forms ask for the last name BEFORE the first name: „Prezime i ime”.',
        answer: true,
        hint: 'Remember the lesson’s warning: read the label before you write.',
        explanation:
          'True — „Prezime i ime” is common on forms, so Marija Horvat writes Horvat first.',
      },
      7,
      {
        type: 'listen',
        audio: 'Rođena sam trećeg svibnja tisuću devetsto devedeset druge.',
        q: 'What is her date of birth?',
        options: ['March 3, 1992', 'May 3, 1992', 'May 13, 1992', 'May 3, 1982'],
        correct: 1,
        explanation:
          'trećeg svibnja — the third of May; tisuću devetsto devedeset druge — 1992. March is ožujak, and thirteenth would be trinaestog.',
      },
      {
        type: 'dictate',
        audio: 'Stanujem u Zagrebu, a rođena sam u Splitu.',
        answer: 'Stanujem u Zagrebu, a rođena sam u Splitu.',
        hint: 'Eight words. A woman is speaking: first where she lives now, then where she was born.',
        explanation:
          'Stanujem u Zagrebu, a rođena sam u Splitu. — I live in Zagreb, and I was born in Split.',
      },
    ],
  },

  // ── Adjectives in the accusative ───────────────────────────────────────────
  'accusative-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'Na zabavi',
      lines: [
        {
          who: 'Sanja',
          hr: 'Gorane, poznaješ li tog visokog čovjeka?',
          en: 'Goran, do you know that tall man?',
        },
        {
          who: 'Goran',
          hr: 'Naravno! To je naš novi susjed. Ima velikog crnog psa.',
          en: 'Of course! That is our new neighbor. He has a big black dog.',
        },
        {
          who: 'Sanja',
          hr: 'A tu ženu u crvenoj haljini?',
          en: 'And that woman in the red dress?',
        },
        {
          who: 'Goran',
          hr: 'Nju ne poznajem. Ali vidim tvoju sestru — ima lijepu plavu haljinu.',
          en: 'Her I do not know. But I see your sister — she has a pretty blue dress on.',
        },
        {
          who: 'Sanja',
          hr: 'Da, kupila je novu haljinu i nove cipele za ovu zabavu.',
          en: 'Yes, she bought a new dress and new shoes for this party.',
        },
        {
          who: 'Goran',
          hr: 'Hoćeš li upoznati našeg susjeda? Traži dobru učiteljicu hrvatskog jezika, a ti si učiteljica!',
          en: 'Do you want to meet our neighbor? He is looking for a good Croatian teacher, and you are a teacher!',
        },
        {
          who: 'Sanja',
          hr: 'Može! Ali prvo želim čašu soka i taj čokoladni kolač.',
          en: 'Sure! But first I want a glass of juice and that chocolate cake.',
        },
        {
          who: 'Goran',
          hr: 'Dobro. Ja zovem susjeda, a ti uzmi kolač.',
          en: 'OK. I will call the neighbor over, and you take the cake.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does the new neighbor have, and what is he looking for?',
          options: [
            'A small white dog; he is looking for a new apartment',
            'A big black dog; he is looking for a good Croatian teacher',
            'A black cat; he is looking for his sister',
            'A big black dog; he is looking for a chocolate cake',
          ],
          correct: 1,
          hint: 'Goran says two things about him: one early on, one when he suggests that Sanja meet him.',
          explanation:
            'Ima velikog crnog psa, and traži dobru učiteljicu hrvatskog jezika — which is why Goran wants Sanja, a teacher, to meet him.',
        },
        {
          q: 'Goran says "velikog crnog psa", but Sanja says "taj čokoladni kolač". Both are masculine objects — why do only the dog’s words change?',
          options: [
            'Because a dog is big and a cake is small',
            'Because only words after ima change',
            'Because kolač ends in a soft consonant',
            'Because a dog is a living being and a cake is a thing',
          ],
          correct: 3,
          hint: 'It is the question Croatian asks about every masculine object.',
          explanation:
            'A living masculine object takes -og on its adjectives and -a on the noun: velikog crnog psa. A masculine thing stays exactly as in the subject form — the noun and every word with it: taj čokoladni kolač.',
        },
        {
          type: 'type',
          q: 'Now you. The neighbor has a big black dog; you have a small white cat: Imam ____ bijelu mačku. (mali)',
          answer: 'malu',
          hint: 'Mačku is a feminine object, and every describing word in front of it takes the same ending as the noun.',
          explanation:
            'Imam malu bijelu mačku. — feminine accusative: -u on each adjective and on the noun.',
        },
        {
          type: 'type',
          q: 'Sanja is going to meet the neighbor. You tell Goran that you want to meet his brother: Želim upoznati ____ brata. (tvoj)',
          answer: 'tvog',
          accept: ['tvojeg', 'tvoga', 'tvojega'],
          hint: 'A brother is alive and masculine. Tvoj behaves exactly like moj here.',
          explanation:
            'Želim upoznati tvog brata. — tvoj → tvog (or tvojeg) before a living masculine object, like mog brata.',
        },
        {
          type: 'transform',
          q: 'Goran has more than one friend. Put the object in the plural.',
          from: 'Poznajem tvog prijatelja.',
          answer: 'Poznajem tvoje prijatelje.',
          hint: 'In the plural the living/thing difference disappears: a masculine object and the words with it all end in the same vowel.',
          explanation:
            'Poznajem tvoje prijatelje. — masculine plural accusative: -e on the possessive and on the noun.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'Each noun becomes the object of "Imam…". Does the word "novi" change before it?',
        groups: ['No change: novi (a thing)', 'It changes: novog (a living being)'],
        items: [
          { hr: 'stol', group: 0 },
          { hr: 'prijatelj', group: 1 },
          { hr: 'auto', group: 0 },
          { hr: 'profesor', group: 1 },
          { hr: 'kaput', group: 0 },
          { hr: 'pas', group: 1 },
          { hr: 'film', group: 0 },
          { hr: 'gost', group: 1 },
        ],
        explanation:
          'All eight nouns are masculine. A thing keeps the subject form: Imam novi stol. A person or an animal takes -og, and the noun takes -a: Imam novog prijatelja.',
      },
      1,
      {
        type: 'match',
        q: 'Match each sentence to the form of "vaš" that fits its gap.',
        pairs: [
          ['Poznajem … sina.', 'vašeg'],
          ['Poznajem … sestru.', 'vašu'],
          ['Poznajem … selo.', 'vaše'],
          ['Poznajem … grad.', 'vaš'],
        ],
        explanation:
          'A living masculine object: vašeg (-eg after the soft š). Feminine: vašu. Neuter and a masculine thing do not change: vaše selo, vaš grad.',
      },
      9,
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Upoznala', 'sam', 'zanimljivi', 'čovjeka.'],
        wrong: 2,
        answer: 'zanimljivog',
        hint: 'The noun has taken the ending of a living object. Has the adjective?',
        explanation:
          'Upoznala sam zanimljivog čovjeka. — with a living masculine object the adjective takes -og.',
      },
      10,
      6,
      {
        type: 'transform',
        q: 'You are not buying a table after all, but a chair (stolica).',
        from: 'Kupujem novi stol.',
        answer: 'Kupujem novu stolicu.',
        hint: 'Stolica is feminine: as an object, the noun and its adjective take the same ending.',
        explanation: 'Kupujem novu stolicu. — feminine accusative: nova stolica → novu stolicu.',
      },
      11,
      {
        type: 'tf',
        q: '"Čitam to pismo." and "To pismo je dugo." use exactly the same form of "to pismo".',
        answer: true,
        hint: 'Pismo is neuter. What happens to a neuter noun, and to the words with it, when it becomes the object?',
        explanation:
          'True. A neuter noun has the same form as subject and as object, and so does every word with it: to pismo, novo pismo.',
      },
      12,
      4,
      {
        type: 'order',
        q: 'Put the words in order: "My mom has a black cat and a white dog."',
        words: ['Moja', 'mama', 'ima', 'crnu', 'mačku', 'i', 'bijelog', 'psa.'],
        accept: ['Moja mama ima bijelog psa i crnu mačku.'],
        explanation:
          'Moja mama ima crnu mačku i bijelog psa. — crnu with the feminine mačku, bijelog with the living masculine psa.',
      },
      {
        type: 'listen',
        audio: 'Ivana ima novog dečka i novu mačku.',
        q: 'What is new in Ivana’s life?',
        options: [
          'A boyfriend and a dog',
          'A boyfriend and a cat',
          'A girlfriend and a cat',
          'A job and a cat',
        ],
        correct: 1,
        explanation:
          'novog dečka — a new boyfriend (alive and masculine, so -og); novu mačku — a new cat (feminine, so -u).',
      },
      {
        type: 'dictate',
        audio: 'Vidim tu ženu svaki dan.',
        answer: 'Vidim tu ženu svaki dan.',
        hint: 'Five words. The woman is the object — and so is the little pointing word in front of her.',
        explanation: 'Vidim tu ženu svaki dan. — ta žena → tu ženu. I see that woman every day.',
      },
    ],
  },

  // ── Accusative: objects, direction, time ───────────────────────────────────
  'accusative-deep': {
    text: {
      kind: 'dialogue',
      title: 'Selidba',
      lines: [
        {
          who: 'Mia',
          hr: 'Karlo, gdje je mačka? Ne vidim mačku!',
          en: 'Karlo, where is the cat? I do not see the cat!',
        },
        {
          who: 'Karlo',
          hr: 'Mačka je u kuhinji. A ja baš nosim stol u kuhinju.',
          en: 'The cat is in the kitchen. And I am just carrying the table into the kitchen.',
        },
        {
          who: 'Mia',
          hr: 'Čekaj! Prvo stavi knjige na policu.',
          en: 'Wait! First put the books on the shelf.',
        },
        {
          who: 'Karlo',
          hr: 'Knjige su već na polici. Gdje je tata? Trebam tatu.',
          en: 'The books are already on the shelf. Where is Dad? I need Dad.',
        },
        {
          who: 'Mia',
          hr: 'Tata je otišao u grad. Kupuje hladnjak.',
          en: 'Dad went downtown. He is buying a fridge.',
        },
        {
          who: 'Karlo',
          hr: 'A kad dolazi? Radimo već cijeli dan!',
          en: 'And when is he coming? We have been working all day already!',
        },
        {
          who: 'Mia',
          hr: 'Dolazi za jedan sat. A u subotu zovemo baku i djeda na ručak u novi stan.',
          en: 'He is coming in an hour. And on Saturday we are inviting Grandma and Grandpa to lunch at the new apartment.',
        },
        {
          who: 'Karlo',
          hr: 'Dobro. Ali sada idem na balkon — trebam kavu i odmor!',
          en: 'OK. But now I am going out on the balcony — I need a coffee and a break!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the cat, and why is Dad not at home?',
          options: [
            'The cat is on the balcony; Dad is at work',
            'The cat is on the shelf; Dad went to get Grandma and Grandpa',
            'The cat is in the kitchen; Dad went downtown to buy a fridge',
            'Nobody knows where the cat is; Dad is buying a table',
          ],
          correct: 2,
          hint: 'Karlo answers Mia’s first question at once. Mia answers Karlo’s question about Dad a little later.',
          explanation:
            'Mačka je u kuhinji. Tata je otišao u grad — kupuje hladnjak, a fridge for the new apartment.',
        },
        {
          q: 'Karlo says "Mačka je u kuhinji" and right afterward "nosim stol u kuhinju". It is the same room — why two endings?',
          options: [
            'Because a cat is alive and a table is not',
            'Because "u kuhinji" says where something IS, and "u kuhinju" says where something is being moved TO',
            'Because the second sentence has two nouns in it',
            'Because kuhinja has two correct object forms',
          ],
          correct: 1,
          hint: 'Compare the verbs: je — and nosim. Which one is movement?',
          explanation:
            'U with the locative is a place (where?): u kuhinji. U with the accusative is a direction (where to?): u kuhinju. The same pair is in the dialogue with na: na policu — na polici.',
        },
        {
          type: 'type',
          q: 'Now you. Karlo needs Dad; you need your brother: Trebam ____. (brat)',
          answer: 'brata',
          hint: 'A brother is a living masculine noun — as an object it does not stay in its dictionary form, the way stol does.',
          explanation:
            'Trebam brata. — a living masculine object adds -a. A thing would not change: Trebam stol.',
        },
        {
          type: 'type',
          q: 'The work is done. Tell Mia and Karlo where you are all going tomorrow: Sutra idemo na ____. (plaža)',
          answer: 'plažu',
          hint: 'Going somewhere is movement, so na takes the object case — and a feminine noun in -a changes its last vowel.',
          explanation:
            'Sutra idemo na plažu. — direction: na + accusative. Being there is the locative: Sutra smo na plaži.',
        },
        {
          type: 'transform',
          q: 'Mia is not there yet — she is on her way. Use "ide" instead of "je".',
          from: 'Mia je u novom stanu.',
          answer: 'Mia ide u novi stan.',
          hint: 'Movement into a place takes the object case — and a masculine THING, with its adjective, looks there just as it does in the subject form.',
          explanation:
            'Mia ide u novi stan. — u + accusative for direction. Stan is a thing, so novi stan does not change; u novom stanu is the locative.',
        },
      ],
    },
    mix: [
      1,
      4,
      {
        type: 'sort',
        q: 'Is it WHERE something is, or WHERE TO something is going?',
        groups: ['Where? (already there)', 'Where to? (movement)'],
        items: [
          { hr: 'u gradu', group: 0 },
          { hr: 'u grad', group: 1 },
          { hr: 'na stolici', group: 0 },
          { hr: 'na stolicu', group: 1 },
          { hr: 'u školi', group: 0 },
          { hr: 'na more', group: 1 },
          { hr: 'u Zagrebu', group: 0 },
          { hr: 'na otok', group: 1 },
        ],
        explanation:
          'The locative says where something is: u gradu, na stolici, u školi, u Zagrebu. The accusative says where it is headed: u grad, na stolicu, na more, na otok.',
      },
      0,
      6,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Idem u Zagreb.', 'I am going to Zagreb.'],
          ['Živim u Zagrebu.', 'I live in Zagreb.'],
          ['Sjeo je na stolicu.', 'He sat down on the chair.'],
          ['Sjedi na stolici.', 'He is sitting on the chair.'],
        ],
        explanation:
          'Movement takes the accusative (u Zagreb, na stolicu); a place where something already is takes the locative (u Zagrebu, na stolici).',
      },
      5,
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Svaki', 'dan', 'vidim', 'prijatelj', 'u', 'školi.'],
        wrong: 3,
        answer: 'prijatelja',
        hint: 'One noun here is alive, and it is the object of the verb.',
        explanation:
          'Svaki dan vidim prijatelja u školi. — a living masculine object takes -a. Svaki dan is also an accusative, but dan is a thing and does not change.',
      },
      7,
      11,
      {
        type: 'transform',
        q: 'You are not in the store yet — you are on your way. Use "idem".',
        from: 'Ja sam u trgovini.',
        answer: 'Idem u trgovinu.',
        accept: ['Ja idem u trgovinu.'],
        hint: 'Movement takes the object case: the "where" ending of the feminine noun gives way to the object ending.',
        explanation:
          'Idem u trgovinu. — u trgovini is where you are; u trgovinu is where you are going.',
      },
      8,
      {
        type: 'tf',
        q: '"Vidim stola." is correct, because stol is a masculine noun.',
        answer: false,
        hint: 'Ask the lesson’s question about the table: is it alive?',
        explanation:
          'Only LIVING masculine nouns add -a as objects. A table is a thing: Vidim stol.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "On Friday we are traveling to Osijek."',
        words: ['U', 'petak', 'putujemo', 'u', 'Osijek.'],
        accept: [
          'Putujemo u Osijek u petak.',
          'U Osijek putujemo u petak.',
          'Putujemo u petak u Osijek.',
        ],
        explanation:
          'U petak putujemo u Osijek. — two accusatives after u: the day (u petak) and the destination (u Osijek).',
      },
      2,
      {
        type: 'transform',
        q: 'Name the guests: replace "ih" with "Filip i Ema".',
        from: 'Pozovi ih na rođendan!',
        answer: 'Pozovi Filipa i Emu na rođendan!',
        accept: ['Pozovi Emu i Filipa na rođendan!'],
        hint: 'Both are objects of the verb: one is a living masculine noun, the other a feminine noun in -a.',
        explanation:
          'Pozovi Filipa i Emu na rođendan! — Filip → Filipa (alive, masculine), Ema → Emu (feminine). Na rođendan is a direction too.',
      },
      {
        type: 'listen',
        audio: 'Stavi mlijeko u hladnjak.',
        q: 'What are you being asked to do?',
        options: [
          'To take the milk out of the fridge',
          'To buy milk and a fridge',
          'To put the milk in the fridge',
          'To check whether there is milk in the fridge',
        ],
        correct: 2,
        explanation:
          'Stavi mlijeko u hladnjak. — stavi is "put", and u hladnjak is movement into the fridge. Hladnjak is a thing, so it does not change.',
      },
      {
        type: 'dictate',
        audio: 'Gledam utakmicu cijelu večer.',
        answer: 'Gledam utakmicu cijelu večer.',
        hint: 'Four words. Both the thing being watched and the length of time are in the object case.',
        explanation:
          'Gledam utakmicu cijelu večer. — utakmicu is the object; cijelu večer says how long, and duration is in the accusative too.',
      },
    ],
  },

  // ── Svoj ───────────────────────────────────────────────────────────────────
  svoj: {
    text: {
      kind: 'dialogue',
      title: 'Čiji je ovo kišobran?',
      lines: [
        {
          who: 'Ema',
          hr: 'Viktore, idemo! Uzmi svoj kišobran.',
          en: 'Viktor, let’s go! Take your umbrella.',
        },
        {
          who: 'Viktor',
          hr: 'Ovo nije moj kišobran. Moj je crn. Ovo je Ivanov.',
          en: 'This is not my umbrella. Mine is black. This one is Ivan’s.',
        },
        {
          who: 'Ema',
          hr: 'Ivan je zaboravio svoj kišobran? Opet?',
          en: 'Ivan forgot his umbrella? Again?',
        },
        {
          who: 'Viktor',
          hr: 'Da. Jučer je zaboravio svoju torbu u tramvaju.',
          en: 'Yes. Yesterday he forgot his bag on the tram.',
        },
        { who: 'Ema', hr: 'A gdje je tvoj?', en: 'And where is yours?' },
        {
          who: 'Viktor',
          hr: 'Ne znam… Mislim da je Ivan uzeo moj kišobran, a ne svoj!',
          en: 'I do not know… I think Ivan took my umbrella, and not his own!',
        },
        {
          who: 'Ema',
          hr: 'Ha-ha! Onda ti sada imaš njegov kišobran, a on tvoj.',
          en: 'Ha-ha! Then you now have his umbrella, and he has yours.',
        },
        {
          who: 'Viktor',
          hr: 'Tako je. A ti, imaš li svoje ključeve i svoj mobitel?',
          en: 'That’s right. And you, do you have your keys and your phone?',
        },
        {
          who: 'Ema',
          hr: 'Imam. Ja uvijek pazim na svoje stvari!',
          en: 'I do. I always look after my things!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: whose umbrella is Viktor holding, and what did Ivan forget yesterday?',
          options: [
            'His own umbrella; Ivan forgot his keys',
            'Ema’s umbrella; Ivan forgot his phone',
            'Ivan’s umbrella; Ivan forgot his bag on the tram',
            'Ivan’s umbrella; Ivan forgot his umbrella on the tram',
          ],
          correct: 2,
          hint: 'Viktor’s own umbrella is black, and this one is not. Yesterday’s story happened on the tram.',
          explanation:
            'Ovo je Ivanov — Viktor is holding Ivan’s umbrella, because Ivan walked off with Viktor’s. Yesterday it was his bag that Ivan left behind, on the tram.',
        },
        {
          q: 'Viktor says: "Ivan je uzeo moj kišobran, a ne svoj!" Whose umbrella does "svoj" mean here — and how do you know?',
          options: [
            'Viktor’s — because Viktor is the one speaking',
            'Ivan’s — because svoj points back at the subject of its sentence, and the subject is Ivan',
            'Ema’s — because Viktor is talking to her',
            'Nobody’s — svoj means "some umbrella or other"',
          ],
          correct: 1,
          hint: 'Find the subject of "je uzeo". Svoj always belongs to that person, whoever happens to be speaking.',
          explanation:
            'Svoj belongs to the subject. The subject of je uzeo is Ivan, so svoj is Ivan’s own. Viktor’s umbrella is moj here — Viktor is not the subject of that sentence.',
        },
        {
          type: 'type',
          q: 'Now you. You are leaving with them. Say that you are taking YOUR bag: Uzimam ____ torbu.',
          answer: 'svoju',
          hint: 'You are the subject and the owner, so use the word that points back at the subject — with the ending moja would take before torbu.',
          explanation:
            'Uzimam svoju torbu. — the owner is the subject (ja), so the possessive is svoj; torbu is a feminine object, so svoju.',
        },
        {
          type: 'type',
          q: 'Ivan comes back, sees the umbrella in Viktor’s hand, and you ask Viktor: Je li to ____ kišobran? (his — Ivan’s)',
          answer: 'njegov',
          hint: 'The subject of this sentence is "to", not Ivan — so the word that points back at the subject cannot be used.',
          explanation:
            'Je li to njegov kišobran? — Ivan is the owner but not the subject, so it is njegov. Svoj is only for the subject’s own things.',
        },
        {
          type: 'transform',
          q: 'Here Petra took another woman’s keys. Change the sentence so that she took her OWN.',
          from: 'Petra je uzela njezine ključeve.',
          answer: 'Petra je uzela svoje ključeve.',
          hint: 'One word changes. Its ending stays — ključeve is still a masculine plural object.',
          explanation:
            'Petra je uzela svoje ključeve. — her own keys: the owner is the subject. Njezine ključeve are the keys of some other woman.',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'sort',
        q: 'Whose is it — the subject’s own, or somebody else’s?',
        groups: ['The subject’s own', 'Somebody else’s'],
        items: [
          { hr: 'Ana voli svoju sestru.', group: 0 },
          { hr: 'Ana voli njezinu sestru.', group: 1 },
          { hr: 'Marko čita njegov e-mail.', group: 1 },
          { hr: 'Marko čita svoj e-mail.', group: 0 },
          { hr: 'Susjedi peru svoj auto.', group: 0 },
          { hr: 'Susjedi peru njihov auto.', group: 1 },
        ],
        explanation:
          'Svoj always points back at the subject. Njegov, njezin and njihov on an object point at somebody else — another man, another woman, other people.',
      },
      0,
      {
        type: 'match',
        q: 'The word "svoj" is in every sentence. Match each sentence to what svoj means in it.',
        pairs: [
          ['Volim svoj posao.', 'my'],
          ['Voliš li svoj posao?', 'your'],
          ['Ana voli svoj posao.', 'her'],
          ['Volimo svoj posao.', 'our'],
          ['Oni vole svoj posao.', 'their'],
        ],
        explanation:
          'One word, many meanings: svoj follows whoever the subject is. The verb ending tells you who that is.',
      },
      6,
      2,
      {
        type: 'fix',
        q: 'Ana is telling you about her own brother. One word in her sentence is wrong. Tap it.',
        words: ['Svoj', 'brat', 'dolazi', 'sutra.'],
        wrong: 0,
        answer: 'Moj',
        hint: 'Svoj points back at the subject — so can it stand inside the subject itself?',
        explanation:
          'Moj brat dolazi sutra. — the brother IS the subject, and svoj can never be part of the subject. It needs a subject to point back at.',
      },
      7,
      {
        type: 'transform',
        q: 'It turns out Ivan is not washing another man’s car — the car is his own. Change one word.',
        from: 'Ivan pere njegov auto.',
        answer: 'Ivan pere svoj auto.',
        hint: 'The owner is now the subject of the sentence.',
        explanation:
          'Ivan pere svoj auto. — his own car. With njegov, the car belongs to some other man.',
      },
      8,
      {
        type: 'tf',
        q: '"Marko traži njegove ključeve." means that Marko is looking for his OWN keys.',
        answer: false,
        hint: 'If the keys were Marko’s own, which word would point back at him?',
        explanation:
          'Njegove ključeve are another man’s keys. Marko’s own would be: Marko traži svoje ključeve.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "I visit my grandmother every Sunday."',
        words: ['Posjećujem', 'svoju', 'baku', 'svake', 'nedjelje.'],
        accept: ['Svake nedjelje posjećujem svoju baku.', 'Svoju baku posjećujem svake nedjelje.'],
        explanation:
          'Posjećujem svoju baku svake nedjelje. — I am the subject and she is my grandmother, so svoju, not moju.',
      },
      10,
      {
        type: 'listen',
        audio: 'Ona pomaže svojoj majci.',
        q: 'Whose mother is she helping?',
        options: ['Another woman’s mother', 'His mother', 'Her own mother', 'My mother'],
        correct: 2,
        explanation:
          'svojoj majci — her own mother: svoj points back at the subject, ona. Another woman’s mother would be njezinoj majci.',
      },
      {
        type: 'dictate',
        audio: 'Zaboravio sam svoj mobitel kod kuće.',
        answer: 'Zaboravio sam svoj mobitel kod kuće.',
        hint: 'Six words. A man is speaking, and the phone is his own.',
        explanation: 'Zaboravio sam svoj mobitel kod kuće. — I left my phone at home.',
      },
    ],
  },
};
