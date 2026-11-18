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

  // ── The contested spellings ────────────────────────────────────────────────
  'pravopis-dvojbe': {
    text: {
      kind: 'dialogue',
      title: 'Obavijest stanarima',
      lines: [
        {
          who: 'Marta',
          hr: 'Davore, imaš li pet minuta? Napisala sam obavijest stanarima o sastanku, ali ne bih je htjela ubaciti u sandučiće prije nego što je pogleda netko tko se u pravopis razumije bolje od mene.',
          en: 'Davor, do you have five minutes? I have written a notice to the tenants about the meeting, but I would not want to put it in the mailboxes before someone who knows spelling better than I do has looked at it.',
        },
        {
          who: 'Davor',
          hr: 'Daj da vidim. Evo, već u prvom retku piše „u Četvrtak, 10. Lipnja 2027”. Dani i mjeseci pišu se malim slovom, a iza godine dolazi točka, jer je i to redni broj: „u četvrtak, 10. lipnja 2027.”',
          en: 'Let me see. Here, right in the first line it says “u Četvrtak, 10. Lipnja 2027”. Days and months are written with a small letter, and a period comes after the year, because that is an ordinal number too: “u četvrtak, 10. lipnja 2027.”',
        },
        {
          who: 'Marta',
          hr: 'To mi je ostalo od engleskoga. A ova rečenica? „Neznamo koliko će radovi trajati, ali bi smo voljeli da svi dođete.”',
          en: 'That is a leftover from English. And this sentence? “Neznamo koliko će radovi trajati, ali bi smo voljeli da svi dođete.”',
        },
        {
          who: 'Davor',
          hr: 'Tu su dvije pogreške, i to prave, a ne stvar ukusa. Niječnica se od glagola piše odvojeno, dakle „ne znamo”; zajedno se piše samo u četiri slučaja: nisam, neću, nemam i nemoj. A pomoćni je glagol u kondicionalu jedna riječ: „bismo”.',
          en: 'There are two mistakes there, and real ones, not a matter of taste. The negative particle is written separately from the verb, so “ne znamo”; it is written together in only four cases: nisam, neću, nemam and nemoj. And the auxiliary verb in the conditional is one word: “bismo”.',
        },
        {
          who: 'Marta',
          hr: 'Onda mi još nešto objasni. U trećem sam odlomku napisala „pogreška u obračunu”, a pri kraju „zbog te pogrješke”. Što je od toga dvoga pogrešno?',
          en: 'Then explain one more thing to me. In the third paragraph I wrote “pogreška u obračunu”, and near the end “zbog te pogrješke”. Which of the two is wrong?',
        },
        {
          who: 'Davor',
          hr: 'Ni jedno ni drugo. O tome se ni pravopisi ne slažu, pa ti ni za jedan oblik nitko ne može reći da je pogrešan. Može ti samo reći da si nedosljedna. Odaberi jedan i drži ga se do posljednjeg retka.',
          en: 'Neither. Not even the orthography manuals agree on that, so nobody can tell you that either form is wrong. They can only tell you that you are inconsistent. Choose one and stick to it to the last line.',
        },
        {
          who: 'Marta',
          hr: 'Uzet ću „pogreška”, tako piše većina. A „Vas” i „Vam”? Pisala sam ih velikim slovom, iz poštovanja.',
          en: 'I will take “pogreška”; that is how most people write it. And “Vas” and “Vam”? I wrote them with a capital letter, out of respect.',
        },
        {
          who: 'Davor',
          hr: 'Veliko slovo ide kad se u pismu obraćaš jednoj osobi. Ti pišeš cijeloj zgradi, pa je to obična množina: „pozivamo vas”, „javit ćemo vam”. U dopisu upravitelju pisala bi „Vas” i „Vam”.',
          en: 'The capital letter is for when you address one person in a letter. You are writing to the whole building, so it is an ordinary plural: “pozivamo vas”, “javit ćemo vam”. In a letter to the building manager you would write “Vas” and “Vam”.',
        },
        {
          who: 'Marta',
          hr: 'I zadnje: navela sam upraviteljeve riječi. „Radovi neće početi prije jeseni,” rekao je. Je li zarez na pravom mjestu?',
          en: 'And the last thing: I quoted the manager’s words. „Radovi neće početi prije jeseni,” rekao je. Is the comma in the right place?',
        },
        {
          who: 'Davor',
          hr: 'Nije, i to je engleski običaj. Kod nas zarez dolazi iza navodnika: „Radovi neće početi prije jeseni”, rekao je. Sve je ostalo u redu. Da sam na tvojem mjestu, ne bih više ništa dirao.',
          en: 'It is not, and that is an English habit. In Croatian the comma comes after the quotation mark: „Radovi neće početi prije jeseni”, rekao je. Everything else is fine. If I were you, I would not touch anything else.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which of Marta’s doubts turns out NOT to be a mistake at all?',
          options: [
            'The capital letters on the day and the month',
            '„Neznamo” written as one word',
            'One spelling of the word for "mistake" in the third paragraph and another near the end',
            'The comma placed before the closing quotation mark',
          ],
          correct: 2,
          hint: 'Recall the one point on which Davor says that not even the orthography manuals agree.',
          explanation:
            'pogreška and pogrješka have both been prescribed, so neither can be called wrong. What Davor objects to is the alternation: Marta is nedosljedna (inconsistent). The other three are plain errors that no manual allows.',
        },
        {
          q: 'Marta wrote „Vas” and „Vam” with capitals, out of respect. Why does Davor make them lower case?',
          options: [
            'Because she is writing to the whole building, and the courtesy capital belongs to a letter addressed to one person',
            'Because capital letters on pronouns are an English habit',
            'Because a notice to tenants is too informal for capitals',
            'Because the capital is kept only at the beginning of a sentence',
          ],
          correct: 0,
          hint: 'Think about how many people will read the notice, and what Davor says she would write to the building manager.',
          explanation:
            'Ti pišeš cijeloj zgradi — she is writing to the whole building, so vas and vam are an ordinary plural. In a letter to one person, such as the manager (upravitelj), the same pronouns take the capital: Vas, Vam.',
        },
        {
          type: 'type',
          q: 'Now you. Marta adds a line for neighbors who are busy that evening: Ako ____ doći, javite se predstavnici stanara. (moći, negated, vi)',
          answer: 'ne možete',
          hint: 'Only four verbs are written together with the negative particle, and this verb is not one of them.',
          explanation:
            'Ako ne možete doći… — two words. ne is fused only in nisam, neću, nemam and nemoj; before every other verb it stands on its own.',
        },
        {
          type: 'transform',
          q: 'A sentence from Marta’s first draft. Correct the two spelling mistakes and change nothing else.',
          from: 'Nemožemo čekati jesen, pa bi smo sastanak održali odmah.',
          answer: 'Ne možemo čekati jesen, pa bismo sastanak održali odmah.',
          hint: 'One word has to be split in two, and two words have to be joined into one.',
          explanation:
            'Ne možemo čekati jesen, pa bismo sastanak održali odmah. — ne is a separate word before the verb, and the conditional auxiliary for "we" is a single word.',
        },
        {
          type: 'transform',
          q: 'Marta dates a letter to the building manager. Rewrite the date line the Croatian way.',
          from: 'Zagreb, 3 Rujan 2027',
          answer: 'Zagreb, 3. rujna 2027.',
          hint: 'The day is an ordinal number, the month answers the question "of which month?", and the year is an ordinal too.',
          explanation:
            'Zagreb, 3. rujna 2027. — an ordinal dot after the day and after the year, and the month in the genitive with a small letter.',
        },
      ],
    },
    mix: [
      7,
      5,
      {
        type: 'tf',
        q: '„Neznam” is a recognized variant of „ne znam”, in the same way that „pogrješka” is a variant of „pogreška”.',
        answer: false,
        hint: 'Ask whether any orthography manual has ever prescribed the one-word spelling.',
        explanation:
          'False. pogreška / pogrješka is a genuinely contested point: both have been prescribed. „Neznam” has never been: ne is written together only in nisam, neću, nemam and nemoj, so the one-word spelling is simply an error.',
      },
      4,
      {
        type: 'sort',
        q: 'Sort the sentences by how they are spelled.',
        groups: [
          'Standard, and nobody disputes it',
          'Contested: both spellings have been prescribed',
          'Simply an error',
        ],
        items: [
          { hr: 'Ne razumijem pitanje.', group: 0 },
          { hr: 'To je bila pogrješka.', group: 1 },
          { hr: 'Vi bi ste trebali ostati.', group: 2 },
          { hr: 'Mi bismo rado ostali.', group: 0 },
          { hr: 'Zadatci su bili teški.', group: 1 },
          { hr: 'Neželim kavu.', group: 2 },
        ],
        explanation:
          'ne razumijem and bismo follow rules that nobody questions. pogrješka (beside pogreška) and zadatci (beside zadaci) are points on which the manuals have differed, so neither spelling is wrong. „bi ste” and „neželim” are errors in every manual: biste is one word, and ne stands apart from the verb.',
      },
      6,
      1,
      {
        type: 'fix',
        q: 'One word carries an English habit into Croatian. Tap it. ("The meeting is on Thursday at six.")',
        words: ['Sastanak', 'je', 'u', 'Četvrtak', 'u', 'šest.'],
        wrong: 3,
        answer: 'četvrtak',
        hint: 'Think about which words Croatian treats as proper names, and which it does not.',
        explanation:
          'Sastanak je u četvrtak u šest. — the days of the week are common nouns in Croatian and take a small letter, as do the months and the names of languages.',
      },
      8,
      {
        type: 'transform',
        q: 'A neighbor’s note on the bulletin board. Correct the conditional and change nothing else.',
        from: 'Mi nebismo ništa mijenjali.',
        answer: 'Mi ne bismo ništa mijenjali.',
        hint: 'The negative particle and the conditional auxiliary are two separate words; the auxiliary itself stays in one piece.',
        explanation:
          'Mi ne bismo ništa mijenjali. — ne is written apart from the auxiliary, exactly as it is from any other verb, while the auxiliary for "we" remains a single word.',
      },
      3,
      10,
      {
        type: 'match',
        q: 'Match the English way of writing it to the Croatian way.',
        pairs: [
          ['Monday, May 5', 'ponedjeljak, 5. svibnja'],
          ['1,500.75', '1.500,75'],
          ['"Good day," he said.', '„Dobar dan”, rekao je.'],
          ['the Croatian language', 'hrvatski jezik'],
          ['June 2027', 'lipanj 2027.'],
        ],
        explanation:
          'Days, months and languages take a small letter. The day and the year are ordinal numbers, so each takes a dot. In numbers the dot separates thousands and the comma decimals, and after a quotation the comma follows the closing mark.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The meeting is on Thursday, June 10, 2027."',
        words: ['Sastanak', 'je', 'u', 'četvrtak,', '10.', 'lipnja', '2027.'],
        explanation:
          'Sastanak je u četvrtak, 10. lipnja 2027. — Croatian goes day, month, year: the day with its ordinal dot, the month in the genitive and in lower case, the year with a dot of its own.',
      },
      {
        type: 'listen',
        audio:
          'Oba su oblika dopuštena, ali u istom dopisu ne bismo smjeli pisati čas jedan, čas drugi.',
        q: 'What is the speaker’s objection?',
        options: [
          'That both forms are mistakes and neither should be used',
          'That only one of the two forms is allowed in a letter',
          'That two permitted forms are being alternated within one letter',
          'That the letter is too long',
        ],
        correct: 2,
        explanation:
          'Oba su oblika dopuštena — both forms are permitted — ali u istom dopisu ne bismo smjeli pisati čas jedan, čas drugi: in the same letter we should not write now one, now the other. On a contested point the only real rule is consistency.',
      },
      {
        type: 'dictate',
        audio: 'Ne znam bih li u subotu došla.',
        answer: 'Ne znam bih li u subotu došla.',
        hint: 'Seven words: "I do not know whether I would come on Saturday." A woman is speaking.',
        explanation:
          'Ne znam bih li u subotu došla. — ne znam is two words, the conditional for "I" is bih, and subota takes a small letter.',
      },
    ],
  },

  // ── The second conditional ─────────────────────────────────────────────────
  'kondicional-drugi': {
    text: {
      kind: 'dialogue',
      title: 'Pod samim vrhom',
      lines: [
        {
          who: 'Jelena',
          hr: 'Još mi je žao što smo se jučer okrenuli pod samim vrhom. Da smo krenuli sat ranije, bili bismo stigli gore prije nevremena.',
          en: 'I am still sorry that we turned back yesterday just below the summit. If we had set off an hour earlier, we would have gotten up there before the storm.',
        },
        {
          who: 'Tomo',
          hr: 'Možda bismo i stigli. Ali silazili bismo po grmljavini, a toga se na grebenu najviše bojim.',
          en: 'Maybe we would have. But we would have been coming down in thunder, and on a ridge that is what I fear most.',
        },
        {
          who: 'Jelena',
          hr: 'Znam. Samo, dok smo sišli do doma, oblaci su se već bili razišli, pa mi se učinilo da smo odustali uzalud.',
          en: 'I know. It is just that by the time we got down to the hut the clouds had already cleared, so it seemed to me that we had given up for nothing.',
        },
        {
          who: 'Tomo',
          hr: 'Razišli su se, ali tek dva sata poslije. Da smo nastavili, nevrijeme bi nas bilo uhvatilo na najizloženijem dijelu puta.',
          en: 'They did clear, but only two hours later. If we had gone on, the storm would have caught us on the most exposed part of the route.',
        },
        {
          who: 'Jelena',
          hr: 'A da si bio sam, bez grupe? Bi li bio nastavio?',
          en: 'And if you had been alone, without the group? Would you have gone on?',
        },
        {
          who: 'Tomo',
          hr: 'Ne bih. Jedanput sam, davno, u takvoj prilici nastavio i samo sam imao sreće. Da tada nisam naišao na sklonište, ne bih ti danas ovo pričao.',
          en: 'I would not. Once, long ago, I did go on in a situation like that, and I was simply lucky. If I had not come across a shelter then, I would not be telling you this today.',
        },
        {
          who: 'Jelena',
          hr: 'Maja kaže da bi bila ostala kod kuće da je vidjela prognozu. Ja ne bih; i ovako je bilo lijepo.',
          en: 'Maja says she would have stayed at home if she had seen the forecast. I would not have; it was beautiful even so.',
        },
        {
          who: 'Tomo',
          hr: 'Prognozu sam bio pogledao još u četvrtak, i tada je bila dobra. Promijenila se preko noći. Da su je ispravili do jutra, bio bih vam odmah javio.',
          en: 'I had looked at the forecast back on Thursday, and it was good then. It changed overnight. If they had corrected it by morning, I would have let you all know at once.',
        },
        {
          who: 'Jelena',
          hr: 'Nitko ti ništa ne predbacuje. Ja samo naglas žalim za vrhom.',
          en: 'Nobody is blaming you for anything. I am just mourning the summit out loud.',
        },
        {
          who: 'Tomo',
          hr: 'Vrh nam neće pobjeći. Da smo jučer pošto-poto išli do kraja, danas možda ne bismo planirali novi pokušaj.',
          en: 'The summit will not run away from us. If we had pushed on to the end at any cost yesterday, today we might not be planning another attempt.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which of these actually happened?',
          options: [
            'The group reached the summit before the storm',
            'The storm caught the group on the most exposed part of the route',
            'Tomo checked the forecast on Thursday',
            'Maja stayed at home',
          ],
          correct: 2,
          hint: 'Three of these were told with a conditional auxiliary. One was told with an indicative one.',
          explanation:
            'Prognozu sam bio pogledao još u četvrtak — sam makes it a pluperfect, a real earlier event. The other three are second conditionals (bili bismo stigli, bi nas bilo uhvatilo, bi bila ostala): none of them happened.',
        },
        {
          q: 'Jelena asks: „Bi li bio nastavio?” What exactly is she asking?',
          options: [
            'Whether Tomo would have gone on, in a situation that never arose',
            'Whether Tomo had in fact gone on that day',
            'Whether Tomo will go on next time',
            'Whether Tomo would like to go on now',
          ],
          correct: 0,
          hint: 'Look at the condition she sets just before the question: was Tomo alone yesterday?',
          explanation:
            'Da si bio sam… bi li bio nastavio? — he was not alone, so the question is about something that did not happen. The second conditional (bi + bio + nastavio) says exactly that: would you have gone on?',
        },
        {
          type: 'type',
          q: 'Now you. Jelena, about herself: Da sam znala za nevrijeme, ____ ponijela kabanicu. (I would have — two words)',
          answer: 'bila bih',
          hint: 'The participle of biti comes first and agrees with a woman; the conditional auxiliary for "I" follows it, because a clitic cannot open the clause.',
          explanation:
            'Da sam znala za nevrijeme, bila bih ponijela kabanicu. — second conditional, feminine: both participles (bila, ponijela) agree with the speaker, and bih stands second in its clause.',
        },
        {
          type: 'transform',
          q: 'Make the unreality explicit: put the main clause into the second conditional.',
          from: 'Da smo nastavili, pokisli bismo.',
          answer: 'Da smo nastavili, bili bismo pokisli.',
          hint: 'Add the participle of biti in front of the auxiliary, agreeing with "we". The main participle stays as it is.',
          explanation:
            'Da smo nastavili, bili bismo pokisli. — "we would have gotten soaked". The first conditional was already standard; the second one states outright that it did not happen.',
        },
        {
          type: 'transform',
          q: 'Tomo said this to the group. Now Jelena and Maja say the same thing to Tomo: "We would have let you know."',
          from: 'Bio bih vam javio.',
          answer: 'Bile bismo ti javile.',
          accept: ['Mi bismo ti bile javile.'],
          hint: 'Two women are speaking, so both participles take the feminine plural. The auxiliary changes to "we", and the dative clitic for Tomo follows it.',
          explanation:
            'Bile bismo ti javile. — both participles agree with the two women, and inside the cluster the conditional auxiliary comes before the dative: bismo ti.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'The sentence „Oni bi došli” tells us that they did not come.',
        answer: false,
        hint: 'Count the participles. How many does the form that closes the matter need?',
        explanation:
          'False. Oni bi došli is the first conditional: the coming is still open. It is the second conditional, with a participle of biti added in front (bili bi došli), that reports something that did not happen.',
      },
      4,
      5,
      {
        type: 'fix',
        q: 'The speaker did NOT come, but one word says that he did. Tap it. ("I would have come, but I had no time.")',
        words: ['Bio', 'sam', 'došao,', 'ali', 'nisam', 'imao', 'vremena.'],
        wrong: 1,
        answer: 'bih',
        hint: 'Compare the two possible auxiliaries: one reports a fact, the other a non-event.',
        explanation:
          'Bio bih došao, ali nisam imao vremena. — bio sam došao is the pluperfect and reports a real arrival, which the second half of the sentence contradicts. One word changes the whole factual status.',
      },
      1,
      6,
      {
        type: 'sort',
        q: 'Did it happen?',
        groups: ['It happened', 'It did not happen', 'Still open'],
        items: [
          { hr: 'Bio sam otišao prije kiše.', group: 0 },
          { hr: 'Bio bih otišao prije kiše.', group: 1 },
          { hr: 'Otišao bih prije kiše.', group: 2 },
          { hr: 'Bili smo već večerali.', group: 0 },
          { hr: 'Bile bismo vam javile.', group: 1 },
          { hr: 'Javili bismo vam.', group: 2 },
        ],
        explanation:
          'bio sam otišao and bili smo večerali are pluperfects: real events before another past event. bio bih otišao and bile bismo javile are second conditionals: non-events. otišao bih and javili bismo are first conditionals, which leave the matter open.',
      },
      7,
      0,
      {
        type: 'transform',
        q: 'A company is writing an apology. Make the unreality explicit: second conditional in the main clause.',
        from: 'Da smo znali za kvar, postupili bismo drukčije.',
        answer: 'Da smo znali za kvar, bili bismo postupili drukčije.',
        accept: ['Da smo znali za kvar, bili bismo drukčije postupili.'],
        hint: 'The da-clause stays as it is. In the main clause a participle of biti, agreeing with "we", moves in front of the auxiliary.',
        explanation:
          'Da smo znali za kvar, bili bismo postupili drukčije. — both versions are standard. The second conditional states outright that it did not happen, which is why a formal apology prefers it.',
      },
      3,
      {
        type: 'match',
        q: 'Match each sentence to what it says. A woman is speaking.',
        pairs: [
          ['Došla bih.', 'I would come.'],
          ['Bila bih došla.', 'I would have come.'],
          ['Bila sam došla.', 'I had come.'],
          ['Došla sam.', 'I came.'],
          ['Da sam došla…', 'If I had come…'],
        ],
        explanation:
          'bih makes a sentence conditional, sam makes it a fact. One participle with bih leaves the matter open (došla bih); two participles with bih close it (bila bih došla). And a counterfactual da-clause takes the plain perfect: da sam došla.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I would have gotten in touch with you, but I had no signal."',
        words: ['Bio', 'bih', 'ti', 'se', 'javio,', 'ali', 'nisam', 'imao', 'signala.'],
        accept: ['Bio bih ti se javio, ali signala nisam imao.'],
        explanation:
          'Bio bih ti se javio, ali nisam imao signala. — the participle bio opens the sentence and the cluster follows in its fixed order: the conditional auxiliary, then the dative, then se.',
      },
      11,
      {
        type: 'listen',
        audio: 'Da nas je itko upozorio na odron, bili bismo krenuli drugim putem.',
        q: 'What do we learn about the trip?',
        options: [
          'They were warned about the rockslide and took another route',
          'Nobody warned them, and they did not take the other route',
          'They will take another route next time',
          'They had taken another route before the rockslide',
        ],
        correct: 1,
        explanation:
          'Da nas je itko upozorio — if anyone had warned us — bili bismo krenuli drugim putem: we would have set off by another route. The second conditional tells us that neither the warning nor the other route happened.',
      },
      {
        type: 'dictate',
        audio: 'Bila bih ti se javila da sam imala tvoj broj.',
        answer: 'Bila bih ti se javila da sam imala tvoj broj.',
        hint: 'Ten words: "I would have gotten in touch with you if I had had your number." A woman is speaking.',
        explanation:
          'Bila bih ti se javila da sam imala tvoj broj. — both participles are feminine, the cluster runs bih ti se, and the da-clause takes the perfect (da sam imala).',
      },
    ],
  },

  // ── Finer shades of meaning ────────────────────────────────────────────────
  'precizno-nijansiranje': {
    text: {
      kind: 'dialogue',
      title: 'Riječ koja ide uz riječ',
      lines: [
        {
          who: 'Daniel',
          hr: 'Teta, napravio sam odluku: na jesen ostajem u Zagrebu i upisujem tečaj hrvatskoga.',
          en: 'Auntie, I have "made" a decision: this fall I am staying in Zagreb and enrolling in a Croatian course.',
        },
        {
          who: 'Ljerka',
          hr: 'To mi je drago čuti! Samo, odluka se kod nas ne pravi, nego donosi. Donio si odluku — i to dobru.',
          en: 'I am glad to hear that! Only, in Croatian a decision is not "made" but "brought". You have made a decision — and a good one.',
        },
        {
          who: 'Daniel',
          hr: 'Donio sam odluku. Vidiš, takve mi stvari stalno izmiču. Riječi znam, ali ne znam koja ide uz koju.',
          en: 'I have made a decision. You see, things like that keep slipping away from me. I know the words, but I do not know which one goes with which.',
        },
        {
          who: 'Ljerka',
          hr: 'Zato ih i ne valja učiti jednu po jednu, nego u parovima: pitanje se postavlja, govor se drži, a o troškovima se vodi računa.',
          en: 'That is exactly why you should not learn them one by one, but in pairs: a question is "posed", a speech is "held", and costs are something you "keep account of".',
        },
        {
          who: 'Daniel',
          hr: 'Evo još jedne nedoumice. Jučer sam u dućanu rekao: „Znam Ivana, zajedno igramo košarku.” Je li to pogrešno?',
          en: 'Here is another thing I am unsure about. Yesterday in the store I said: “Znam Ivana, zajedno igramo košarku.” Is that wrong?',
        },
        {
          who: 'Ljerka',
          hr: 'Nije, tako se u razgovoru govori. Ali precizan je glagol za ljude „poznavati”: poznaješ Ivana, a znaš gdje stanuje. Za činjenicu se i ne može reći drukčije nego „znati”.',
          en: 'No, that is how people talk in conversation. But the precise verb for people is “poznavati”: you know Ivan (poznaješ), and you know where he lives (znaš). For a fact there is no other way to say it than “znati”.',
        },
        {
          who: 'Daniel',
          hr: 'Dakle, poznajem Ivana i znam da studira medicinu. On, uostalom, kaže da hrvatski pravopis uči cijeli život, a da ga još nije naučio.',
          en: 'So I know Ivan, and I know that he is studying medicine. He says, by the way, that he has been studying Croatian spelling all his life and still has not learned it.',
        },
        {
          who: 'Ljerka',
          hr: 'Pametan dečko. Bit će dobar liječnik — premda će ga u ambulanti svi zvati „doktore”.',
          en: 'Smart boy. He will be a good physician — although at the clinic everyone will call him “doktore”.',
        },
        {
          who: 'Daniel',
          hr: 'Sutra idemo na bazen. On zna plivati od malih nogu, a ja sam naučio tek lani. Mogu li posuditi tvoj ručnik?',
          en: 'Tomorrow we are going to the pool. He has known how to swim since he was little, and I learned only last year. Can I borrow your towel?',
        },
        {
          who: 'Ljerka',
          hr: 'Možeš. I vidiš kako si to lijepo razdvojio: znaš plivati jer si naučio, a možeš na bazen jer imaš vremena i moj ručnik.',
          en: 'You can. And see how nicely you kept those apart: you know how to swim because you learned, and you can go to the pool because you have the time and my towel.',
        },
        {
          who: 'Daniel',
          hr: 'Godinama sam gledao te parove u rječniku i nisam vidio razliku. Sad je napokon vidim.',
          en: 'For years I looked at those pairs in the dictionary and did not see the difference. Now I finally see it.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Ljerka say about Daniel’s sentence „Znam Ivana”?',
          options: [
            'It is a mistake that gives him away as a foreigner',
            'It is fine in conversation, but another verb is the precise one for people',
            'It means that he has only heard of Ivan',
            'It is the more formal of the two ways to say it',
          ],
          correct: 1,
          hint: 'Recall her first word in reply to „Je li to pogrešno?”, and then her „Ali…”.',
          explanation:
            'Nije, tako se u razgovoru govori — it is not wrong; that is how people talk. But the precise verb for acquaintance with a person is poznavati, while a fact (gdje stanuje, da studira) can only be znati.',
        },
        {
          q: 'Ljerka praises Daniel for keeping two verbs apart when he talks about the pool. Which two ideas did he separate?',
          options: [
            'Wanting to swim and having to swim',
            'Swimming once and swimming regularly',
            'Watching swimmers and noticing them',
            'A skill that was learned and what the circumstances allow',
          ],
          correct: 3,
          hint: 'One verb went with „naučio”, the other with the towel.',
          explanation:
            'zna plivati — he knows how, an acquired skill; mogu li posuditi, možeš na bazen — what the circumstances permit. English uses "can" for both; Croatian keeps znati and moći apart.',
        },
        {
          type: 'type',
          q: 'Now you. Daniel, about his aunt: ____ je cijeli život, a ipak ne znam koliko joj je godina. (know — a person, ja)',
          answer: 'Poznajem',
          hint: 'Acquaintance with a person takes the precise verb, not the verb for facts that appears later in the same sentence.',
          explanation:
            'Poznajem je cijeli život, a ipak ne znam koliko joj je godina. — poznavati for the person, znati for the fact: both verbs in one sentence, each in its own sense.',
        },
        {
          type: 'transform',
          q: 'A sentence translated word for word from English. Replace the one verb that does not go with its noun.',
          from: 'Smijem li Vam dati jedno pitanje?',
          answer: 'Smijem li Vam postaviti jedno pitanje?',
          hint: 'In Croatian a question is not "given". Recall the verb Ljerka pairs with pitanje, and put it in the infinitive.',
          explanation:
            'Smijem li Vam postaviti jedno pitanje? — postaviti pitanje is the fixed pairing. dati pitanje is English "give" carried over word for word.',
        },
        {
          type: 'type',
          q: 'Complete: Sat vremena smo ____ utakmicu, a pogodak nismo vidjeli jer smo baš tada otišli po piće. (watch — mi)',
          answer: 'gledali',
          accept: ['gledale'],
          hint: 'Directed attention over a period of time, as against simply perceiving something.',
          explanation:
            'Sat vremena smo gledali utakmicu, a pogodak nismo vidjeli. — gledati is to watch, vidjeti is to perceive: you can watch for an hour and still not see the goal.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '„Mogu plivati” and „Znam plivati” say the same thing.',
        answer: false,
        hint: 'One of them is about a skill, the other about today.',
        explanation:
          'False. Znam plivati says that the skill was learned. Mogu plivati says that the circumstances allow it — there is water, there is time, the doctor has no objection. A person can know how and still not be able to today.',
      },
      6,
      0,
      5,
      {
        type: 'fix',
        q: 'One verb is translated from English and does not go with its noun. Tap it. ("The mayor gave a speech in the square.")',
        words: ['Gradonačelnik', 'je', 'na', 'trgu', 'dao', 'govor.'],
        wrong: 4,
        answer: 'održao',
        hint: 'A speech takes the same verb as a lecture or a meeting.',
        explanation:
          'Gradonačelnik je na trgu održao govor. — održati govor, like održati predavanje and održati sastanak. dati govor is a word-for-word copy of the English.',
      },
      7,
      {
        type: 'sort',
        q: 'What completes the sentence? Choose the precise verb.',
        groups: ['Znam …', 'Poznajem …'],
        items: [
          { hr: '… da vlak kasni.', group: 0 },
          { hr: '… ovaj kraj kao svoj džep.', group: 1 },
          { hr: '… gdje je kolodvor.', group: 0 },
          { hr: '… tu obitelj samo iz viđenja.', group: 1 },
          { hr: '… koliko je sati.', group: 0 },
          { hr: '… gospođu Horvat već dvadeset godina.', group: 1 },
        ],
        explanation:
          'A fact — a clause with da, gdje, koliko — can only be znati. Acquaintance with a place or a person is poznavati. In conversation znati is also heard for people, but poznavati is the precise verb and the one careful writing uses.',
      },
      3,
      8,
      {
        type: 'transform',
        q: 'The first half of the sentence is about a skill, the second about today. Replace the one verb that says the wrong thing.',
        from: 'Znam plivati, ali danas ne znam jer sam prehlađen.',
        answer: 'Znam plivati, ali danas ne mogu jer sam prehlađen.',
        hint: 'A cold does not make anyone forget a skill; it only changes what is possible today.',
        explanation:
          'Znam plivati, ali danas ne mogu jer sam prehlađen. — znati for the acquired skill, moći for what today’s circumstances allow.',
      },
      2,
      {
        type: 'match',
        q: 'Match each noun to the verb that goes with it.',
        pairs: [
          ['odluku', 'donijeti'],
          ['pitanje', 'postaviti'],
          ['govor', 'održati'],
          ['računa', 'voditi'],
          ['pozornost', 'obratiti'],
        ],
        explanation:
          'donijeti odluku, postaviti pitanje, održati govor, voditi računa, obratiti pozornost. None of these can be worked out from the English verb (make, ask, give, take, pay); they have to be learned as pairs.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I have known him for years, but I do not know where he works."',
        words: ['Poznajem', 'ga', 'godinama,', 'ali', 'ne', 'znam', 'gdje', 'radi.'],
        accept: ['Godinama ga poznajem, ali ne znam gdje radi.'],
        explanation:
          'Poznajem ga godinama, ali ne znam gdje radi. — poznavati for the person, znati for the fact; the clitic ga stands right after the first word.',
      },
      11,
      {
        type: 'listen',
        audio: 'Odbor još nije donio odluku, ali je upravi postavio nekoliko pitanja o troškovima.',
        q: 'What has the committee done so far?',
        options: [
          'Made its decision and informed the management',
          'Asked the management several questions about costs, without deciding yet',
          'Answered the management’s questions about costs',
          'Put the questions off until after the decision',
        ],
        correct: 1,
        explanation:
          'još nije donio odluku — it has not made a decision yet — ali je upravi postavio nekoliko pitanja: but it has put several questions to the management. Two fixed pairings in one sentence: donijeti odluku, postaviti pitanje.',
      },
      {
        type: 'dictate',
        audio: 'Poznajem ga dugo, ali ne znam čime se bavi.',
        answer: 'Poznajem ga dugo, ali ne znam čime se bavi.',
        hint: 'Nine words: "I have known him a long time, but I do not know what he does for a living."',
        explanation:
          'Poznajem ga dugo, ali ne znam čime se bavi. — poznavati for the person, znati for the fact; baviti se takes the instrumental, so čime.',
      },
    ],
  },

  // ── The rhythm of the sentence ─────────────────────────────────────────────
  'ritam-recenice': {
    text: {
      kind: 'dialogue',
      title: 'Zdravica za subotu',
      lines: [
        {
          who: 'Filip',
          hr: 'Petra, u subotu držim zdravicu na Markovoj svadbi. Napisao sam je, sve je gramatički točno, a kad je čitam naglas, zvuči kao zapisnik. Hoćeš li poslušati početak?',
          en: 'Petra, on Saturday I am giving the toast at Marko’s wedding. I have written it, everything is grammatically correct, and when I read it aloud it sounds like the minutes of a meeting. Will you listen to the beginning?',
        },
        {
          who: 'Petra',
          hr: 'Čitaj.',
          en: 'Go ahead.',
        },
        {
          who: 'Filip',
          hr: '„Marka sam upoznao prije dvadeset godina. Marko je tada bio student. Marko je već tada svuda kasnio.”',
          en: '“I met Marko twenty years ago. Marko was a student then. Marko was already late for everything then.”',
        },
        {
          who: 'Petra',
          hr: 'Čuješ li? Tri rečenice iste duljine, sve tri počinju jednako i nijedna se ne ističe. Spoji prve dvije, a treću ostavi kratku: „Kad sam ga prije dvadeset godina upoznao, Marko je bio student koji je svuda kasnio. Kasni i danas.”',
          en: 'Do you hear it? Three sentences of the same length, all three begin the same way, and none stands out. Join the first two and keep the third short: “When I met him twenty years ago, Marko was a student who was late for everything. He still is.”',
        },
        {
          who: 'Filip',
          hr: 'To je već bolje. A ovo? „Ana je u njegov život ušla prošloga proljeća.”',
          en: 'That is better already. And this? “Ana came into his life last spring.”',
        },
        {
          who: 'Petra',
          hr: 'Što je tu novost: kada je ušla ili tko je ušao? Gosti znaju da se Marko ženi; žele čuti njezino ime. Novost stavi na kraj: „Prošloga je proljeća u njegov život ušla Ana.”',
          en: 'What is the news there: when she came in, or who came in? The guests know that Marko is getting married; they want to hear her name. Put the news at the end: “Last spring, into his life came Ana.”',
        },
        {
          who: 'Filip',
          hr: 'Sad mi je jasno zašto je rečenica bila mlaka. A ova mi je najdraža: „Ana je žena koja je pristala na čovjeka koji je zaboravio prsten koji sam mu ja čuvao.”',
          en: 'Now I see why the sentence was lukewarm. And this one is my favorite: “Ana is the woman who said yes to a man who forgot the ring that I was keeping for him.”',
        },
        {
          who: 'Petra',
          hr: 'Tri puta „koji” u jednom dahu: dok stigneš do prstena, gosti su već zaboravili Anu. Jednu surečenicu sažmi, a ostatak odvoji točkom: „Ana je pristala na čovjeka sklonog zaboravljanju. Prsten sam mu, za svaki slučaj, čuvao ja.”',
          en: 'Three times “koji” in one breath: by the time you get to the ring, the guests have already forgotten Ana. Condense one clause and set the rest off with a period: “Ana said yes to a man inclined to forget things. The ring, just in case, was kept for him by me.”',
        },
        {
          who: 'Filip',
          hr: 'A kraj? Mislio sam završiti dugom rečenicom o ljubavi, strpljenju i zajedničkom životu.',
          en: 'And the ending? I was thinking of finishing with a long sentence about love, patience and life together.',
        },
        {
          who: 'Petra',
          hr: 'Dugu rečenicu slobodno ostavi, ali neka zadnja riječ ne bude njezina. Nakon nje zastani, podigni čašu i reci samo: „Živjeli!”',
          en: 'By all means keep the long sentence, but do not let it have the last word. After it, pause, raise your glass and say only: “Živjeli!”',
        },
        {
          who: 'Filip',
          hr: 'Dugo, dugo, pa kratko. Zapamtit ću.',
          en: 'Long, long, then short. I will remember.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what was wrong with Filip’s first three sentences about Marko?',
          options: [
            'One of them contained a grammar mistake',
            'They were too long for the guests to follow',
            'They were all the same length and began the same way, so none stood out',
            'Their clitics were in the wrong place',
          ],
          correct: 2,
          hint: 'Filip himself says that everything is grammatically correct. Recall what Petra asks him to hear.',
          explanation:
            'Tri rečenice iste duljine, sve tri počinju jednako i nijedna se ne ističe. Nothing was incorrect; the fault was rhythm. Her remedy is to join two of them into one longer sentence and let a short one land the point: „Kasni i danas.”',
        },
        {
          q: 'Why does Petra move „Ana” to the end of the sentence?',
          options: [
            'Because a name may not open a Croatian sentence',
            'Because the guests already know there is a wedding; her name is the news, and the news goes last',
            'Because an expression of time always has to come first',
            'Because the verb has to stand next to the clitic',
          ],
          correct: 1,
          hint: 'She asks Filip a question first: what is the news here?',
          explanation:
            'Novost stavi na kraj. The end of a Croatian sentence is its emphatic position: what the listeners already know opens the sentence (prošloga proljeća, njegov život), and what they are waiting to hear — Ana — closes it.',
        },
        {
          type: 'type',
          q: 'Now you. Filip reorders another line of the toast and fronts the object: Čašu ____ podigao tek na kraju. (biti, 1st sg. + oni, dative clitic)',
          answer: 'sam im',
          hint: 'Whatever is fronted, the cluster follows it at once: the auxiliary first, then the pronoun.',
          explanation:
            'Čašu sam im podigao tek na kraju. — the fronted object takes first place and the clitics follow it immediately, the auxiliary before the dative.',
        },
        {
          type: 'transform',
          q: 'Condense the first clause into a phrase with po and a noun.',
          from: 'Kad je završila zdravica, gosti su ustali.',
          answer: 'Po završetku zdravice gosti su ustali.',
          accept: [
            'Po završetku zdravice, gosti su ustali.',
            'Gosti su po završetku zdravice ustali.',
            'Gosti su ustali po završetku zdravice.',
          ],
          hint: 'po in the sense of "after" takes the locative. The noun comes from završiti, and what ended follows it in the genitive.',
          explanation:
            'Po završetku zdravice gosti su ustali. — a whole clause becomes a phrase: po + locative (završetku), with zdravice in the genitive.',
        },
        {
          type: 'transform',
          q: 'The guests ask: Tko je čuvao prsten? Reorder the sentence so that the answer lands in the emphatic position.',
          from: 'Filip je čuvao prsten.',
          answer: 'Prsten je čuvao Filip.',
          hint: 'What the question already mentions goes first, and the new information goes last. The clitic stays in second place.',
          explanation:
            'Prsten je čuvao Filip. — the ring is known from the question, so it opens the sentence; Filip is the news and takes the final position. The clitic je still follows the first word.',
        },
      ],
    },
    mix: [
      0,
      4,
      {
        type: 'tf',
        q: 'In the sentence „Auto je Ivan kupio jučer” the news is the car.',
        answer: false,
        hint: 'Look at what stands in the final position.',
        explanation:
          'False. The fronted auto is what the speakers already know; the news is jučer, in the emphatic final position. The sentence answers "when?", not "what?".',
      },
      {
        type: 'order',
        q: 'Put the words in order so that the sentence answers the question: Kada je otvoren novi most?',
        words: ['Novi', 'je', 'most', 'otvoren', 'jučer.'],
        accept: ['Novi most je otvoren jučer.', 'Novi most otvoren je jučer.'],
        explanation:
          'Novi je most otvoren jučer. — the bridge is known from the question, so it comes first; the answer, jučer, comes last. „Jučer je otvoren novi most” has the same words and answers a different question: what was opened?',
      },
      6,
      {
        type: 'transform',
        q: 'Condense the first clause with a past verbal adverb.',
        from: 'Kad je stigla kući, nazvala je majku.',
        answer: 'Stigavši kući, nazvala je majku.',
        accept: ['Stigavši kući nazvala je majku.'],
        hint: 'Both actions have the same subject, so the clause can shrink to a phrase. The adverb of a perfective verb ends in -vši.',
        explanation:
          'Stigavši kući, nazvala je majku. — stići gives stigavši. One clause becomes a phrase, and a single main clause is left.',
      },
      1,
      5,
      {
        type: 'fix',
        q: 'The first clause was meant to be condensed into a phrase, but one word is still a finite form. Tap it. ("Having considered the proposal, the committee made a decision.")',
        words: ['Razmotrio', 'prijedlog,', 'odbor', 'je', 'donio', 'odluku.'],
        wrong: 0,
        answer: 'Razmotrivši',
        hint: 'A phrase of this kind is headed by a verbal adverb, not by a participle.',
        explanation:
          'Razmotrivši prijedlog, odbor je donio odluku. — the past verbal adverb in -vši turns the clause into a phrase. A bare participle cannot head it.',
      },
      7,
      {
        type: 'sort',
        q: 'Which question does the sentence answer? Look at what comes last.',
        groups: ['Tko?', 'Kada?', 'Što?'],
        items: [
          { hr: 'Pismo je poslala Ana.', group: 0 },
          { hr: 'Ana je pismo poslala jutros.', group: 1 },
          { hr: 'Ana je jutros poslala pismo.', group: 2 },
          { hr: 'Most je otvorio ministar.', group: 0 },
          { hr: 'Ministar je most otvorio u petak.', group: 1 },
          { hr: 'U petak je ministar otvorio most.', group: 2 },
        ],
        explanation:
          'The words are the same within each set of three; only the order changes. Whatever stands last is the news: Ana and ministar answer "who?", jutros and u petak "when?", pismo and most "what?".',
      },
      2,
      8,
      {
        type: 'match',
        q: 'Match each clause to the phrase that condenses it.',
        pairs: [
          ['kad je sastanak završio', 'po završetku sastanka'],
          ['kad je stigao u Split', 'po dolasku u Split'],
          ['kad je pregledao dokumente', 'pregledavši dokumente'],
          ['dok je čekao vlak', 'čekajući vlak'],
          ['kad se vratio iz Beča', 'po povratku iz Beča'],
        ],
        explanation:
          'There are two ways to turn a clause into a phrase: po + a noun in the locative (po završetku, po dolasku, po povratku), or a verbal adverb — -vši for an action that was completed first (pregledavši), -ći for one going on at the same time (čekajući).',
      },
      10,
      {
        type: 'listen',
        audio:
          'Tri sata smo se penjali, dva sata tražili put i još sat čekali da se magla digne. Vrh nismo vidjeli.',
        q: 'What is the point of what the speaker says, and where does it land?',
        options: [
          'That the climb took three hours — in the opening words',
          'That they never saw the summit — in the short sentence after the long one',
          'That the fog lifted in the end — in the middle of the long sentence',
          'That they lost their way — in the short last sentence',
        ],
        correct: 1,
        explanation:
          'The long sentence piles up the effort: tri sata smo se penjali, dva sata tražili put, još sat čekali. Then come three words: Vrh nismo vidjeli — we did not see the summit. The short sentence after a long one carries the weight.',
      },
      {
        type: 'dictate',
        audio: 'Jučer je u Osijeku otvorena nova knjižnica.',
        answer: 'Jučer je u Osijeku otvorena nova knjižnica.',
        hint: 'Seven words: "A new library was opened in Osijek yesterday."',
        explanation:
          'Jučer je u Osijeku otvorena nova knjižnica. — the time and the place are the known frame, the clitic je follows the first word, and the news, nova knjižnica, comes last.',
      },
    ],
  },
};
