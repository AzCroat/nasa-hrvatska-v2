// ─── C1 lessons in class order — Units 13–15 (lessons 61–75) ─────────────────
// The fifteen lessons that came into C1 when C2 was folded into it (2026-11-18).
// Same shape and rules as the other C1 class files:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// C1 register: educated, idiomatic Croatian in long, well-built sentences.
// Vi / Vas / Vam / Vaš take a capital when ONE person is addressed politely.
// Every Croatian quotation closes with ” („…”). A typed answer is never printed
// by an earlier item of the same sequence. A "wrong" form is always a clear
// violation of the standard, never a merely less formal variant — and in these
// units that distinction is often the lesson itself.
//
// The first entry, norma-i-uzus, is the sample for the owner's review before the
// other fourteen are written.

export const CLASS_C1_U13_15 = {
  // ══ UNIT 13 ════════════════════════════════════════════════════════════════

  // ── The norm and the usage ─────────────────────────────────────────────────
  'norma-i-uzus': {
    text: {
      kind: 'dialogue',
      title: 'Priopćenje prije slanja',
      lines: [
        {
          who: 'Voditeljica',
          hr: 'Luka, pročitala sam tvoj nacrt priopćenja. Sadržaj je u redu, ali prije nego što ga pošaljemo novinarima, moramo proći kroz nekoliko mjesta.',
          en: 'Luka, I have read your draft of the press release. The content is fine, but before we send it to the journalists we need to go through a few places.',
        },
        {
          who: 'Luka',
          hr: 'Trudio sam se da sve bude po pravopisu. Čak sam ispravio i ravnateljevu izjavu: umjesto „sa mnom” stavio sam „s mnom”, jer su nas u školi učili da se dulji oblik piše samo iznimno.',
          en: 'I tried to make everything follow the spelling rules. I even corrected the director’s statement: instead of “sa mnom” I put “s mnom”, because at school they taught us that the longer form is written only as an exception.',
        },
        {
          who: 'Voditeljica',
          hr: 'Upravo je to ta iznimka. Kraći se oblik pred riječju „mnom” ne može ni izgovoriti, pa norma ondje traži dulji. Ispravio si ono što je bilo dobro. To se zove hiperkorekcija, a ona upada u oči više nego obična pogreška.',
          en: 'That is exactly the exception. The shorter form cannot even be pronounced before the word “mnom”, so there the norm requires the longer one. You corrected something that was right. That is called hypercorrection, and it stands out more than an ordinary mistake.',
        },
        {
          who: 'Luka',
          hr: 'Razumijem. A što ne valja s rečenicom „Na radionicu su se prijavila dvojica djece”? Htio sam da zvuči službeno.',
          en: 'I see. And what is wrong with the sentence “Na radionicu su se prijavila dvojica djece”? I wanted it to sound official.',
        },
        {
          who: 'Voditeljica',
          hr: 'Ta se riječ odnosi samo na muškarce. Za djecu norma ima zbirni broj: dvoje djece. Tu nema biranja po ukusu; to je naprosto pravilo.',
          en: 'That word refers only to men. For children the norm has a collective number: dvoje djece. There is no choosing by taste here; it is simply a rule.',
        },
        {
          who: 'Luka',
          hr: 'A u trećem odlomku? Napisao sam: „Odbili su nam zahtjev jer nismo sve predali.” To je točno, zar ne?',
          en: 'And in the third paragraph? I wrote: “Odbili su nam zahtjev jer nismo sve predali.” That is correct, isn’t it?',
        },
        {
          who: 'Voditeljica',
          hr: 'Točno je, ali nije iz ovoga teksta. Tako bih to rekla kolegici na hodniku. U priopćenju u kojem sve ostalo zvuči službeno čitatelj takvu rečenicu doživi kao propust. Napiši: „Zahtjev je odbijen zbog nepotpune dokumentacije.”',
          en: 'It is correct, but it does not belong to this text. That is how I would say it to a colleague in the hallway. In a press release in which everything else sounds official, the reader takes a sentence like that for a slip. Write: “Zahtjev je odbijen zbog nepotpune dokumentacije.”',
        },
        {
          who: 'Luka',
          hr: 'Znači, nije dovoljno da svaka rečenica za sebe bude ispravna; sve zajedno moraju zvučati kao da ih je napisala ista osoba.',
          en: 'So it is not enough for each sentence to be correct on its own; all together they have to sound as if the same person wrote them.',
        },
        {
          who: 'Voditeljica',
          hr: 'Tako je. Norma ti kaže što je propisano, a uzus što obrazovani ljudi doista govore i pišu. Kad se ne slažu, pitaj se tko će tekst čitati — i onda budi dosljedan do posljednjeg retka.',
          en: 'Exactly. The norm tells you what is prescribed, and usage tells you what educated people actually say and write. When they disagree, ask yourself who is going to read the text — and then be consistent to the last line.',
        },
        {
          who: 'Luka',
          hr: 'Onda ću prijatelju u poruci i dalje pisati „di si”, a u priopćenju ću paziti na svaki oblik.',
          en: 'Then I will go on writing “di si” in a message to a friend, and in a press release I will watch every form.',
        },
        {
          who: 'Voditeljica',
          hr: 'Naravno. Ni jedno ni drugo nije pogrešno; pogrešno je samo pomiješati ih u istom tekstu.',
          en: 'Of course. Neither is wrong; the only thing that is wrong is mixing them in the same text.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Luka do to the director’s statement, and how does his supervisor judge it?',
          options: [
            'He shortened it, and she thinks it now reads better',
            'He left a spelling mistake in it, and she asks him to correct it',
            'He "corrected" a form that was already right, and she calls that worse than an ordinary mistake',
            'He rewrote it in an official style, and she finds it too stiff',
          ],
          correct: 2,
          hint: 'Recall the name she gives to what he did — a correction that goes one step too far.',
          explanation:
            'Luka changed „sa mnom” to „s mnom”. The longer form is exactly what the norm requires before mnom, so he corrected something that was right: a hypercorrection (hiperkorekcija), which, she says, stands out more than an ordinary mistake.',
        },
        {
          q: 'The supervisor admits that „Odbili su nam zahtjev jer nismo sve predali” is correct Croatian. Why does she still take it out?',
          options: [
            'Because the orthography forbids the past tense in a press release',
            'Because it is a regional form that journalists would not understand',
            'Because the sentence is too long for a press release',
            'Because it belongs to everyday speech, and inside an otherwise official text it reads as a slip',
          ],
          correct: 3,
          hint: 'Think of where she says she would use that sentence herself.',
          explanation:
            'She would say it to a colleague in the hallway (na hodniku). Every word is correct, but the rest of the release is official, and a text has to stay inside one register: „Zahtjev je odbijen zbog nepotpune dokumentacije.”',
        },
        {
          type: 'type',
          q: 'Now you. Luka corrects his sentence about the workshop, and a third child has signed up in the meantime: Na radionicu se prijavilo ____ djece. (3)',
          answer: 'troje',
          hint: 'Children are counted with the collective number — the same family as the form the supervisor gives for two.',
          explanation:
            'Na radionicu se prijavilo troje djece. — dvoje, troje, četvero: the collective numbers go with djeca, and the verb stands in the neuter singular (prijavilo se).',
        },
        {
          type: 'transform',
          q: 'Undo the hypercorrection. Change only what has to be changed.',
          from: 'Ravnatelj je razgovarao s mnom i s sestrom.',
          answer: 'Ravnatelj je razgovarao sa mnom i sa sestrom.',
          accept: [
            'Ravnatelj je razgovarao sa mnom i sestrom.',
            'Ravnatelj je sa mnom i sa sestrom razgovarao.',
          ],
          hint: 'Try to say each pair of words aloud. Where the short preposition cannot be pronounced before the next word, the norm itself asks for the longer one.',
          explanation:
            'Ravnatelj je razgovarao sa mnom i sa sestrom. — sa stands before s, š, z, ž and before mnom. Writing s there is not "more correct"; it is the overshoot the supervisor warns about.',
        },
        {
          type: 'transform',
          q: 'Make the sentence fit the press release: no "they", no "us" — the request itself becomes the subject.',
          from: 'Odbili su nam molbu.',
          answer: 'Molba je odbijena.',
          accept: ['Molba nam je odbijena.', 'Naša je molba odbijena.', 'Naša molba je odbijena.'],
          hint: 'The people who refused disappear from the sentence. The thing refused moves to the front, and the participle agrees with it in gender.',
          explanation:
            'Molba je odbijena. — the official register prefers the impersonal passive: molba is feminine, so odbijena. It is the same move as the supervisor’s „Zahtjev je odbijen”.',
        },
      ],
    },
    mix: [
      4,
      8,
      {
        type: 'fix',
        q: 'One word is everyday speech, not the written standard. Tap it. ("I would gladly sign that.")',
        words: ['Ja', 'bi', 'to', 'rado', 'potpisao.'],
        wrong: 1,
        answer: 'bih',
        hint: 'The conditional has a form of its own for each person. Whose wish is this?',
        explanation:
          'Ja bih to rado potpisao. — in speech bi serves for every person, and nobody misunderstands it; the written standard keeps bih for "I", bismo for "we" and biste for "you".',
      },
      0,
      {
        type: 'tf',
        q: 'In standard Croatian the word "dućan" is a mistake, and "trgovina" must be used instead.',
        answer: false,
        hint: 'Ask what the lesson says about a form the standard merely does not prefer.',
        explanation:
          'False. dućan is not wrong; it is simply less neutral. In a conversation it is entirely natural, while an advertisement, a report or a law chooses trgovina. Less formal is not the same as incorrect.',
      },
      7,
      {
        type: 'sort',
        q: 'What kind of form is it?',
        groups: [
          'What the norm prescribes',
          'Usual in speech, out of place in formal writing',
          'Hypercorrection',
        ],
        items: [
          { hr: 'Idem na more sa sestrom.', group: 0 },
          { hr: 'Di si bio jučer?', group: 1 },
          { hr: 'Hoćeš li poći s mnom?', group: 2 },
          { hr: 'U čekaonici je sjedilo dvoje djece.', group: 0 },
          { hr: 'Moram to predat do petka.', group: 1 },
          { hr: 'Razgovarao sam s šefom.', group: 2 },
        ],
        explanation:
          'sa sestrom and dvoje djece are simply the standard. Di and the clipped infinitive predat are normal in speech and in a message to a friend, but a report does not use them. "s mnom" and "s šefom" are overshoots: the short preposition was "corrected" in exactly the places where the norm asks for sa.',
      },
      {
        type: 'transform',
        q: 'A colleague’s spoken draft goes into an official letter. Change only the one word that is not standard.',
        from: 'Ne znamo di se dokument nalazi.',
        answer: 'Ne znamo gdje se dokument nalazi.',
        hint: 'The spoken, regional word for "where" gives way to the standard one.',
        explanation:
          'Ne znamo gdje se dokument nalazi. — di is spoken and regional; a letter keeps the standard form. In a message to a friend the draft would have been fine as it was.',
      },
      9,
      {
        type: 'match',
        q: 'Match what you would say in the hallway to what the official letter says.',
        pairs: [
          ['Odbili su mi zahtjev.', 'Zahtjev je odbijen.'],
          ['Niste sve donijeli.', 'Dokumentacija je nepotpuna.'],
          ['Riješili smo stvar.', 'Predmet je riješen.'],
          ['Javit ćemo se poštom.', 'Podnositelj će biti obaviješten pisanim putem.'],
          ['Odlučit ćemo za mjesec dana.', 'Odluka će biti donesena u roku od 30 dana.'],
        ],
        explanation:
          'Both columns are correct Croatian. The left one names people and what they did; the right one is impersonal and passive, with the nouns of administration (predmet, podnositelj, dokumentacija). Choosing between them is a question of the reader, not of right and wrong.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Two children came to the workshop."',
        words: ['Na', 'radionicu', 'je', 'došlo', 'dvoje', 'djece.'],
        accept: ['Na radionicu je dvoje djece došlo.'],
        explanation:
          'Na radionicu je došlo dvoje djece. — after a collective number the verb is neuter singular (došlo), and the clitic je stands after the opening phrase Na radionicu.',
      },
      3,
      {
        type: 'transform',
        q: 'Make the sentence fit an official letter: impersonal, without "we".',
        from: 'Zaprimili smo Vašu prijavu.',
        answer: 'Vaša je prijava zaprimljena.',
        accept: [
          'Vaša prijava je zaprimljena.',
          'Prijava je zaprimljena.',
          'Zaprimljena je Vaša prijava.',
          'Vaša prijava zaprimljena je.',
        ],
        hint: 'The application becomes the subject, and the participle takes its gender. The polite possessive keeps its capital.',
        explanation:
          'Vaša je prijava zaprimljena. — prijava is feminine, so zaprimljena. Careful written style puts the clitic je after the first stressed word (Vaša je prijava); Vaša prijava je is equally standard.',
      },
      11,
      {
        type: 'listen',
        audio:
          'Pravopis dopušta oba oblika, ali se u jednom tekstu valja držati samo jednoga, od prve do posljednje stranice.',
        q: 'What is the speaker advising?',
        options: [
          'To avoid both forms, because neither is standard',
          'To alternate the two forms so that the text does not sound monotonous',
          'To choose one of the two permitted forms and keep to it throughout the text',
          'To use one form on the first page and the other on the last',
        ],
        correct: 2,
        explanation:
          'Pravopis dopušta oba oblika — the orthography allows both forms — ali se u jednom tekstu valja držati samo jednoga: within one text you should keep to just one. Where the norm leaves a choice, consistency is what the reader notices.',
      },
      {
        type: 'dictate',
        audio: 'Ravnatelj će sa mnom doći na sastanak.',
        answer: 'Ravnatelj će sa mnom doći na sastanak.',
        hint: 'Seven words: "The director will come to the meeting with me."',
        explanation:
          'Ravnatelj će sa mnom doći na sastanak. — sa mnom is written as two words, with the longer preposition; the clitic će stands right after the first word.',
      },
    ],
  },
};
