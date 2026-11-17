// ─── B2 lessons in class order — Units 1–2 (lessons 1–10) ────────────────────
// Same shape and rules as the A1, A2 and B1 class files (a1class/, a2class/, b1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1, the B2 lessons before each lesson, and the lesson itself
// have taught. Vi / Vas / Vam take a capital when ONE person is addressed politely.
// Every existing typed item is kept, and it is placed BEFORE any new exercise that
// prints its answer or its stem; multiple choice comes only from existing items.
// The text comes BEFORE the rule slides, so a text line must not hand over the
// sentence an existing typed item asks for (reviewed 2026-11-17).

export const CLASS_B2_U01_02 = {
  // ══ UNIT 1 ═════════════════════════════════════════════════════════════════

  // ── Masculine and neuter nouns up close ────────────────────────────────────
  'noun-peculiarities-a': {
    text: {
      kind: 'dialogue',
      title: 'Vjenčanje u Zadru',
      lines: [
        {
          who: 'Iva',
          hr: 'Luka, kako je bilo na vjenčanju u Zadru? Čula sam da je bilo više od dvjesto gostiju.',
          en: 'Luka, how was the wedding in Zadar? I heard there were more than two hundred guests.',
        },
        {
          who: 'Luka',
          hr: 'Čovječe, nikad nisam vidio toliko ljudi na jednom mjestu! A od svih njih poznavao sam samo dva čovjeka: mladoženju i njegova oca.',
          en: 'Man, I have never seen so many people in one place! And out of all of them I knew only two men: the groom and his father.',
        },
        {
          who: 'Iva',
          hr: 'Onda ti je sigurno bilo dosadno.',
          en: 'Then you must have been bored.',
        },
        {
          who: 'Luka',
          hr: 'Nimalo. Za našim stolom sjedili su neki momci iz Zadra, mladoženjini prijatelji, i odmah smo počeli razgovarati.',
          en: 'Not at all. Some young men from Zadar, friends of the groom, were sitting at our table, and we started talking right away.',
        },
        {
          who: 'Iva',
          hr: 'A kakva je mladenka? Vidjela sam je samo na fotografiji.',
          en: 'And what is the bride like? I have only seen her in a photo.',
        },
        {
          who: 'Luka',
          hr: 'Vrlo simpatična. Ima crnu kosu i velike zelene oči. Njezini sinovi iz prvog braka cijelu su večer plesali s drugom djecom.',
          en: 'Very likeable. She has black hair and big green eyes. Her sons from her first marriage danced with the other children all evening.',
        },
        {
          who: 'Iva',
          hr: 'A vrijeme? Kod nas je cijeli vikend padala kiša.',
          en: 'And the weather? Here it rained all weekend.',
        },
        {
          who: 'Luka',
          hr: 'Kiše nije bilo, ali je s mora puhao jak vjetar. Zbog vjetra su konobari večeru morali poslužiti unutra, pa smo je čekali sat vremena.',
          en: 'There was no rain, but a strong wind was blowing from the sea. Because of the wind the waiters had to serve dinner inside, so we waited an hour for it.',
        },
        { who: 'Iva', hr: 'Sat vremena? Jadni gosti!', en: 'An hour? The poor guests!' },
        {
          who: 'Luka',
          hr: 'Nitko se nije ljutio. Dok smo čekali, momci su svirali, a djeca su trčala oko stolova.',
          en: 'Nobody was angry. While we waited, the young men played music and the children ran around the tables.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why was dinner an hour late, and how did the guests take it?',
          options: [
            'It rained all evening, and many guests went home',
            'A strong wind meant dinner had to be served inside, but nobody minded',
            'The waiters came late from Zadar, and the groom was angry',
            'The musicians played too long, and the children fell asleep',
          ],
          correct: 1,
          hint: 'Luka says there was no rain. Something else was coming from the sea.',
          explanation:
            'S mora je puhao jak vjetar, so the waiters served dinner inside and it took an hour. Nitko se nije ljutio — there was music, and the children were running around the tables.',
        },
        {
          q: 'In one breath Luka says "toliko ljudi" and "samo dva čovjeka". It is the same noun. Why two different words?',
          options: [
            'ljudi is used for strangers and čovjek for people you know',
            'ljudi is the plural, but after dva, tri, četiri the noun keeps the singular word, in the genitive singular',
            'čovjeka is the accusative and ljudi is the nominative',
            'ljudi can only be said of a crowd of more than a hundred',
          ],
          correct: 1,
          hint: 'Look at the word in front of each form: a general quantity in one case, a small number in the other.',
          explanation:
            'The plural of čovjek is a different word, ljudi, and that is also its genitive plural after toliko, mnogo, pet. After dva, tri and četiri Croatian uses the genitive singular, so the singular word stays: dva čovjeka.',
        },
        {
          type: 'type',
          q: 'Now you. Luka made new friends at his table: Upoznao sam tri ____ iz Zadra. (momak)',
          answer: 'momka',
          hint: 'After tri the noun takes its genitive singular form — and the a of the last syllable does not survive an ending.',
          explanation:
            'tri momka — after dva, tri, četiri comes the genitive singular, and momak loses its fleeting a as soon as an ending is added. From five up it would be the genitive plural, where the a returns: pet momaka.',
        },
        {
          type: 'type',
          q: 'Luka’s uncle is at the wedding too, and Luka calls across the room: ____, dođi za naš stol! (stric)',
          answer: 'Striče',
          hint: 'Calling someone needs the vocative in -e, and the final c cannot stay as it is before that ending.',
          explanation:
            'Striče! — before the vocative ending -e, c becomes č, just as in otac → oče. The same ending turns k into č (čovječe) and g into ž.',
        },
        {
          type: 'transform',
          q: 'There was one man from Split at the wedding. Now say there were MANY (mnogo) — the noun and the verb both change.',
          from: 'Na vjenčanju je bio jedan čovjek iz Splita.',
          answer: 'Na vjenčanju je bilo mnogo ljudi iz Splita.',
          accept: [
            'Na vjenčanju je bilo puno ljudi iz Splita.',
            'Mnogo je ljudi iz Splita bilo na vjenčanju.',
            'Na vjenčanju bilo je mnogo ljudi iz Splita.',
            'Bilo je mnogo ljudi iz Splita na vjenčanju.',
            'Iz Splita je na vjenčanju bilo mnogo ljudi.',
            'Na vjenčanju je iz Splita bilo mnogo ljudi.',
          ],
          hint: 'After a quantity word the noun goes into the genitive plural — for this noun a different word altogether — and the verb becomes neuter singular.',
          explanation:
            'Na vjenčanju je bilo mnogo ljudi iz Splita. — mnogo takes the genitive plural, which for čovjek is ljudi, and with a quantity as the subject the verb is neuter singular: je bilo.',
        },
      ],
    },
    mix: [
      8,
      0,
      {
        type: 'sort',
        q: 'What does each noun do in the plural: does it take the long form, or the plain one?',
        groups: ['Long plural: -ovi or -evi', 'Plain plural: just -i'],
        items: [
          { hr: 'vlak', group: 0 },
          { hr: 'konj', group: 1 },
          { hr: 'nož', group: 0 },
          { hr: 'mrav', group: 1 },
          { hr: 'broj', group: 0 },
          { hr: 'gost', group: 1 },
          { hr: 'zid', group: 0 },
        ],
        explanation:
          'vlakovi and zidovi take -ov-; noževi and brojevi take -ev- after a soft consonant. konj, mrav and gost are among the short nouns that refuse the insert: konji, mravi, gosti.',
      },
      9,
      {
        type: 'match',
        q: 'One noun, five forms. Match each sentence to the form that completes it.',
        pairs: [
          ['Tko su ovi ___?', 'momci'],
          ['Poznajem tog ___.', 'momka'],
          ['Došlo je deset ___.', 'momaka'],
          ['Pozvali smo sve ___.', 'momke'],
          ['Razgovaram s tim ___.', 'momkom'],
        ],
        explanation:
          'The fleeting a is gone wherever there is an ending (momka, momkom, momke), k becomes c only before -i (momci), and the a comes back in the genitive plural after a number like deset: momaka.',
      },
      1,
      {
        type: 'tf',
        q: '"Imam pet satova" means "I have five hours."',
        answer: false,
        hint: 'This noun has two plurals, and they do not mean the same thing.',
        explanation:
          'False. satovi are clocks and watches. Hours are sati: Imam pet sati means "I have five hours."',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The children are playing with the dogs in the park."',
        words: ['Djeca', 'se', 'igraju', 'sa', 'psima', 'u', 'parku.'],
        accept: [
          'Djeca se u parku igraju sa psima.',
          'U parku se djeca igraju sa psima.',
          'Djeca se igraju u parku sa psima.',
          'Djeca se sa psima igraju u parku.',
          'U parku se sa psima igraju djeca.',
          'Sa psima se djeca igraju u parku.',
        ],
        explanation:
          'Djeca se igraju sa psima u parku. — djeca takes a plural verb, and pas loses its a before the ending: psima.',
      },
      11,
      {
        type: 'transform',
        q: 'One king, one town. Now make it several kings in several towns — every word that can go into the plural does.',
        from: 'Ovaj kralj je živio u starom gradu.',
        answer: 'Ovi kraljevi su živjeli u starim gradovima.',
        accept: ['Ovi su kraljevi živjeli u starim gradovima.'],
        hint: 'Both nouns are short masculines with the long plural, but only one of them ends in a soft consonant. The insert stays in every plural case.',
        explanation:
          'Ovi kraljevi su živjeli u starim gradovima. — kralj ends in the soft lj, so the insert is -ev-; grad ends in a hard d, so it is -ov-, and it stays in the locative plural.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Njegova', 'sestra', 'ima', 'lijepi', 'zelene', 'oči.'],
        wrong: 3,
        answer: 'lijepe',
        hint: 'The plural of oko is not masculine and not neuter. Both adjectives have to agree with it.',
        explanation:
          'Njegova sestra ima lijepe zelene oči. — oči is a feminine plural, so every adjective with it takes the feminine ending -e.',
      },
      12,
      {
        type: 'listen',
        audio: 'Iz Zadra su došla dva momka, a iz Splita pet ljudi.',
        q: 'Who came?',
        options: [
          'Two young men from Split and five people from Zadar',
          'Two young men from Zadar and five people from Split',
          'Five young men from Zadar and two people from Split',
          'Two people from Zadar and nobody from Split',
        ],
        correct: 1,
        explanation:
          'iz Zadra … dva momka — two young men from Zadar; iz Splita pet ljudi — five people from Split. After dva the genitive singular, after pet the genitive plural.',
      },
      {
        type: 'dictate',
        audio: 'Naši sinovi imaju plave oči.',
        answer: 'Naši sinovi imaju plave oči.',
        hint: 'Five words: "Our sons have blue eyes."',
        explanation:
          'Naši sinovi imaju plave oči. — sin takes the long plural, and oči is feminine, so the adjective is plave.',
      },
    ],
  },

  // ── -ati verbs with a hidden present ───────────────────────────────────────
  'present-ati-tricky': {
    text: {
      kind: 'dialogue',
      title: 'Berba kod bake',
      lines: [
        {
          who: 'Petra',
          hr: 'Bako, zašto mi ne odgovaraš na poruke? Šaljem ti ih već tri dana!',
          en: 'Grandma, why don’t you answer my messages? I have been sending them to you for three days!',
        },
        {
          who: 'Baka',
          hr: 'Dušo, ja poruke ne čitam, a još ih manje pišem. Ako me trebaš, nazovi me, kao što me zove i tvoj otac.',
          en: 'Sweetheart, I don’t read messages, and I write them even less. If you need me, call me, the way your father calls me too.',
        },
        {
          who: 'Petra',
          hr: 'Dobro, evo zovem. Tata kaže da ovaj vikend berete grožđe.',
          en: 'All right, here I am, calling. Dad says you are picking grapes this weekend.',
        },
        {
          who: 'Baka',
          hr: 'Beremo, ako ne padne kiša. Djed svako jutro gleda nebo i kaže da će biti lijepo, ali on to kaže svake godine.',
          en: 'We are, if it doesn’t rain. Every morning Grandpa looks at the sky and says it will be nice, but he says that every year.',
        },
        {
          who: 'Petra',
          hr: 'A tko vam pomaže? Sami ne možete obrati cijeli vinograd.',
          en: 'And who is helping you? You can’t pick the whole vineyard by yourselves.',
        },
        {
          who: 'Baka',
          hr: 'Susjedi, kao i uvijek. Oni beru s nama u subotu, a mi njima pomažemo tjedan dana poslije.',
          en: 'The neighbors, as always. They pick with us on Saturday, and we help them a week later.',
        },
        {
          who: 'Petra',
          hr: 'Mogu li i ja doći? Obećavam da se neću žaliti kao prošle godine.',
          en: 'Can I come too? I promise I won’t complain like last year.',
        },
        {
          who: 'Baka',
          hr: 'Prošle si godine plakala zbog jedne ose! Ali dođi — samo ovaj put ne plači.',
          en: 'Last year you cried because of one wasp! But come — just don’t cry this time.',
        },
        {
          who: 'Petra',
          hr: 'Neću, časna riječ. Odmah pišem u kalendar: subota, berba kod bake.',
          en: 'I won’t, word of honor. I am writing it in my calendar right now: Saturday, grape picking at Grandma’s.',
        },
        {
          who: 'Baka',
          hr: 'I ponesi stare cipele. A ako ti djed kaže da će biti suho, ti svejedno uzmi čizme.',
          en: 'And bring old shoes. And if Grandpa tells you it will be dry, take your boots anyway.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how do Grandma and Grandpa get the whole vineyard picked?',
          options: [
            'They pay workers from the village',
            'Petra’s father comes every weekend',
            'The neighbors pick with them, and a week later they help the neighbors',
            'They pick a little every morning, when the sky is clear',
          ],
          correct: 2,
          hint: 'It is an exchange: one Saturday here, and a week later somewhere else.',
          explanation:
            'Susjedi: oni beru s nama u subotu, a mi njima pomažemo tjedan dana poslije. Help is paid back with help.',
        },
        {
          q: 'Grandma says "plakala" about last year and "ne plači" about this Saturday. One form has k, the other č. Why?',
          options: [
            'Because the first is about a child and the second about an adult',
            'Because the past is built on the infinitive (plakati), and the command on the stem of the present tense, which is not the same',
            'Because a negative command always softens the consonant',
            'Because plakala is feminine and plači is masculine',
          ],
          correct: 1,
          hint: 'Ask which form each one is built from: the infinitive, or the ja form of the present.',
          explanation:
            'The past tense comes from the infinitive, so the k of plakati stays: plakala. The command comes from the stem of the present tense, and in the present of this verb the k has become č — which is why Grandma says ne plači.',
        },
        {
          type: 'type',
          q: 'Now you. Petra tells her friend about Grandma: Baka poruke ne čita, a još ih manje ____. (pisati)',
          answer: 'piše',
          hint: 'The ona form of the present — and in this verb the s does not stay s in any person of the present.',
          explanation:
            'piše — pisati softens s to š in the whole present: pišem, pišeš, piše. Only the past keeps the s: pisala je.',
        },
        {
          type: 'transform',
          q: 'Last year Petra cried. This year she is standing among the vines, proud of herself. Say it in the present, and negative: "This year I am not crying."',
          from: 'Prošle godine sam plakala.',
          answer: 'Ove godine ne plačem.',
          accept: ['Ove godine ja ne plačem.', 'Ja ove godine ne plačem.'],
          hint: 'The present is not built on the infinitive: the consonant before the ending changes, and the ending is not -am.',
          explanation:
            'Ove godine ne plačem. — in the present k becomes č and the endings are -em, -eš, -e: plačem. The k comes back only in forms built on the infinitive.',
        },
        {
          type: 'transform',
          q: 'Grandpa says it will be nice. Now Grandma agrees with him — say it about BOTH of them: "Baka i djed…"',
          from: 'Djed kaže da će biti lijepo.',
          answer: 'Baka i djed kažu da će biti lijepo.',
          accept: ['Djed i baka kažu da će biti lijepo.'],
          hint: 'The oni form of these verbs keeps the softened consonant and takes a one-letter ending.',
          explanation:
            'Baka i djed kažu da će biti lijepo. — kazati has ž in every person of the present, and the oni ending of this group is -u: kažu.',
        },
      ],
    },
    mix: [
      8,
      1,
      {
        type: 'sort',
        q: 'Every one of these infinitives ends in -ati. Which ones have a regular present like čitam, and which change their stem and take -em?',
        groups: ['Regular: ja …-am', 'The stem changes: ja …-em'],
        items: [
          { hr: 'gledati', group: 0 },
          { hr: 'pisati', group: 1 },
          { hr: 'kuhati', group: 0 },
          { hr: 'kazati', group: 1 },
          { hr: 'pjevati', group: 0 },
          { hr: 'plakati', group: 1 },
          { hr: 'čekati', group: 0 },
          { hr: 'vezati', group: 1 },
        ],
        explanation:
          'gledam, kuham, pjevam, čekam are regular. pišem, kažem, plačem, vežem soften the last consonant of the stem and take -em. Nothing in the infinitive shows the difference, so each of these verbs is learned with its ja form.',
      },
      9,
      10,
      {
        type: 'match',
        q: 'A prefix changes the meaning, not the pattern. Match each form to what it means.',
        pairs: [
          ['potpišem', 'I sign'],
          ['pokažem', 'I show'],
          ['dokažem', 'I prove'],
          ['obrišem', 'I wipe it clean'],
          ['pozovem', 'I invite'],
        ],
        explanation:
          'potpisati, pokazati, dokazati, obrisati and pozvati keep the present of the bare verb: -pišem, -kažem, -brišem, -zovem. If you know the bare verb, you know its whole family.',
      },
      4,
      {
        type: 'tf',
        q: '"Prošle godine slali smo čestitke svim prijateljima" is correct: the past of slati does not take the stem of the present.',
        answer: true,
        hint: 'Which form is the past tense built on — the infinitive, or the ja form?',
        explanation:
          'True. The past comes from the infinitive: slati → slao, slali. The changed stem belongs to the present and to the forms built on it, such as the command.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Why are you sending me so many messages?"',
        words: ['Zašto', 'mi', 'šalješ', 'toliko', 'poruka?'],
        accept: ['Zašto mi toliko poruka šalješ?'],
        explanation:
          'Zašto mi šalješ toliko poruka? — slati has š and lj in every person of the present, and the short word mi comes right after the question word.',
      },
      11,
      {
        type: 'transform',
        q: 'You jump into the sea from the pier. Now say the same thing about the children (djeca).',
        from: 'Skačem u more s mola.',
        answer: 'Djeca skaču u more s mola.',
        accept: ['Djeca s mola skaču u more.'],
        hint: 'The softened consonant stays in every person; only the ending changes, and for oni it is a single vowel.',
        explanation:
          'Djeca skaču u more s mola. — skakati has č throughout the present, and the oni form ends in -u. djeca takes a plural verb.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moji', 'prijatelji', 'me', 'zovaju', 'Pepa.'],
        wrong: 3,
        answer: 'zovu',
        hint: 'This verb is not conjugated like čitati, so its oni form does not end in -aju.',
        explanation:
          'Moji prijatelji me zovu Pepa. — zvati gains an o in the present and takes the -em endings; the oni form of that group ends in -u.',
      },
      12,
      {
        type: 'listen',
        audio: 'Sestra me zove svake večeri, a ja joj pišem samo vikendom.',
        q: 'Who does what, and how often?',
        options: [
          'The speaker calls the sister every evening; the sister writes on weekends',
          'The sister calls every evening; the speaker writes to her only on weekends',
          'The sister writes every evening; the speaker calls only on weekends',
          'They call each other only on weekends',
        ],
        correct: 1,
        explanation:
          'Sestra me zove — the sister calls me, svake večeri. ja joj pišem — I write to her, samo vikendom.',
      },
      {
        type: 'dictate',
        audio: 'Kako se piše tvoje prezime?',
        answer: 'Kako se piše tvoje prezime?',
        hint: 'Five words: "How do you spell your last name?"',
        explanation:
          'Kako se piše tvoje prezime? — literally "how is your last name written": the ono form of pisati, with š, and se.',
      },
    ],
  },

  // ── Secondary imperfectives ────────────────────────────────────────────────
  'aspect-suffixes': {
    text: {
      kind: 'dialogue',
      title: 'Prvi tjedan na novom poslu',
      lines: [
        {
          who: 'Ivana',
          hr: 'Marta, kako ti je na novom poslu? Prošao je već cijeli tjedan.',
          en: 'Marta, how is the new job? A whole week has already gone by.',
        },
        {
          who: 'Marta',
          hr: 'Dobro, ali naporno. Šefica mi svaki dan objašnjava nešto novo, a ja sve zapisujem u bilježnicu jer se bojim da ću zaboraviti.',
          en: 'Good, but tiring. Every day my boss explains something new to me, and I write everything down in a notebook because I am afraid I will forget.',
        },
        { who: 'Ivana', hr: 'I, pomaže li?', en: 'And does it help?' },
        {
          who: 'Marta',
          hr: 'Uglavnom. Jučer mi je pokazala kako se otvara novi račun za kupca. Pokazala mi je jedanput, a danas sam to već radila sama.',
          en: 'Mostly. Yesterday she showed me how to open a new account for a customer. She showed me once, and today I was already doing it on my own.',
        },
        {
          who: 'Ivana',
          hr: 'Meni je moj prvi šef godinama pokazivao iste stvari jer nikad ništa nisam zapisala.',
          en: 'My first boss kept showing me the same things for years because I never wrote anything down.',
        },
        {
          who: 'Marta',
          hr: 'Ja zato zapisujem sve, čak i tko kada zaključava ured. Obično ga zaključava Davor, ali sinoć ga nije zaključao nitko.',
          en: 'That is why I write down everything, even who locks the office when. Usually Davor locks it, but last night nobody locked it.',
        },
        {
          who: 'Ivana',
          hr: 'Ajme! I što je rekla šefica?',
          en: 'Oh no! And what did the boss say?',
        },
        {
          who: 'Marta',
          hr: 'Ništa strašno. Samo je mirno objasnila da od danas ured zaključavam ja.',
          en: 'Nothing terrible. She just calmly explained that from today I am the one who locks the office.',
        },
        {
          who: 'Ivana',
          hr: 'Znači, nakon tjedan dana već imaš ključ. Kod nas se ključ dobiva tek nakon godinu dana!',
          en: 'So after one week you already have a key. At our place you only get a key after a year!',
        },
        {
          who: 'Marta',
          hr: 'Ključ da, ali plaću još ne. Račune i dalje plaćam sama, a tvrtka mi je dosad platila samo kavu.',
          en: 'A key, yes, but no paycheck yet. I still pay the bills myself, and so far the company has paid only for my coffee.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what went wrong last night, and what came of it?',
          options: [
            'Marta lost her notebook, and the boss gave her a new one',
            'Davor forgot to pay the bills, and Marta now pays them',
            'Nobody locked the office, and from today locking it is Marta’s job',
            'Marta opened the wrong account, and the boss explained it again',
          ],
          correct: 2,
          hint: 'It has to do with a key — and with a job that used to be Davor’s.',
          explanation:
            'Sinoć ured nije zaključao nitko, and the boss calmly explained that from today Marta locks it — which is why she already has a key after one week.',
        },
        {
          q: 'Marta says the boss "pokazala mi je jedanput"; Ivana says her boss "godinama pokazivao iste stvari". Why two different verbs for "showed"?',
          options: [
            'pokazati is used by women and pokazivati by men',
            'pokazati is one finished act; pokazivati is the same act repeated over a stretch of time',
            'pokazivati is more polite than pokazati',
            'pokazati is for the recent past and pokazivati for the distant past',
          ],
          correct: 1,
          hint: 'Look at the time words beside each verb: "once" in one sentence, "for years" in the other.',
          explanation:
            'jedanput — one completed showing, so the perfective pokazati. godinama — again and again, so the imperfective built from it with -ivati: pokazivati.',
        },
        {
          type: 'type',
          q: 'Now you. Marta’s lunch is a habit: Marta svaki dan ____ sendvič u pekari. (kupiti → its imperfective partner)',
          answer: 'kupuje',
          hint: 'A habit needs the imperfective partner, which this verb makes with a suffix, not a prefix — and its present does not keep the vowels of its infinitive.',
          explanation:
            'kupuje — kupiti is one finished purchase; the everyday habit needs kupovati, whose present is kupujem, kupuješ, kupuje.',
        },
        {
          type: 'transform',
          q: 'The boss showed Marta the new program once, yesterday. Now say that she is doing it at this very moment — in the present, with "upravo".',
          from: 'Šefica mi je pokazala novi program.',
          answer: 'Šefica mi upravo pokazuje novi program.',
          accept: [
            'Upravo mi šefica pokazuje novi program.',
            'Šefica mi novi program pokazuje upravo sada.',
            'Šefica mi upravo sada pokazuje novi program.',
            'Šefica mi upravo sad pokazuje novi program.',
            'Šefica mi sada upravo pokazuje novi program.',
          ],
          hint: 'Something in progress cannot be a finished whole, so you need the partner verb in -ivati — and its present does not keep -iva-.',
          explanation:
            'Šefica mi upravo pokazuje novi program. — an action in progress needs the imperfective pokazivati, and -ivati verbs form the present in -ujem: pokazujem, pokazuje.',
        },
        {
          type: 'transform',
          q: 'This sentence is about a habit. Now report ONE finished act: last night (sinoć) Davor locked the office.',
          from: 'Davor svaku večer zaključava ured.',
          answer: 'Davor je sinoć zaključao ured.',
          accept: [
            'Sinoć je Davor zaključao ured.',
            'Davor je zaključao ured sinoć.',
            'Davor je ured zaključao sinoć.',
            'Davor je sinoć ured zaključao.',
          ],
          hint: 'One completed act takes the perfective partner — the verb without the suffix -ava- — in the past tense.',
          explanation:
            'Davor je sinoć zaključao ured. — the habit is zaključavati; one whole, finished locking is the perfective zaključati.',
        },
      ],
    },
    mix: [
      4,
      3,
      {
        type: 'sort',
        q: 'Read each infinitive. Is it one whole, finished act — or the verb for a habit and for something in progress?',
        groups: ['Perfective — one whole, finished act', 'Imperfective — repeated or in progress'],
        items: [
          { hr: 'zapisati', group: 0 },
          { hr: 'zapisivati', group: 1 },
          { hr: 'dokazati', group: 0 },
          { hr: 'dokazivati', group: 1 },
          { hr: 'zaključati', group: 0 },
          { hr: 'zaključavati', group: 1 },
          { hr: 'potpisati', group: 0 },
          { hr: 'potpisivati', group: 1 },
        ],
        explanation:
          'The prefixed verbs zapisati, dokazati, zaključati and potpisati are perfective. Add -ivati or -avati and each one becomes imperfective again without losing the meaning of its prefix.',
      },
      7,
      {
        type: 'tf',
        q: '"Sad zapišem što govoriš" is a normal way to say "I am noting down what you are saying right now."',
        answer: false,
        hint: 'Can a perfective present describe something that is still going on at this moment?',
        explanation:
          'False. zapisati is perfective, and a perfective present cannot describe an action in progress. Right now needs the imperfective: Sad zapisujem što govoriš.',
      },
      6,
      {
        type: 'match',
        q: 'One verb pair, four sentences. Match each sentence to its meaning.',
        pairs: [
          ['Plaćao sam račune.', 'I used to pay the bills.'],
          ['Platio sam račune.', 'I have paid the bills — that is done.'],
          ['Plaćam račune.', 'I am paying the bills.'],
          ['Platit ću račune.', 'I will get the bills paid.'],
        ],
        explanation:
          'plaćati is the imperfective: a past habit (plaćao sam) or something going on now (plaćam). platiti is the perfective: a finished act (platio sam) or a result still to come (platit ću).',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "Grandma used to show us old photographs."',
        words: ['Baka', 'nam', 'je', 'pokazivala', 'stare', 'fotografije.'],
        accept: [
          'Baka nam je stare fotografije pokazivala.',
          'Stare fotografije nam je pokazivala baka.',
          'Stare nam je fotografije pokazivala baka.',
          'Pokazivala nam je baka stare fotografije.',
        ],
        explanation:
          'Baka nam je pokazivala stare fotografije. — "used to show" is repeated, so the imperfective pokazivati; the short words nam je come together in second place.',
      },
      5,
      {
        type: 'transform',
        q: 'One sale, finished. Now say what the neighbor does for a living — in the present, with "aute" (cars).',
        from: 'Susjed je prodao auto.',
        answer: 'Susjed prodaje aute.',
        accept: ['Moj susjed prodaje aute.', 'Susjed svaki dan prodaje aute.'],
        hint: 'A job is a habit, so you need the imperfective partner. It belongs to the family of the verb "to give", and its present loses the -va-.',
        explanation:
          'Susjed prodaje aute. — prodati is one sale; selling as an occupation is prodavati, which conjugates like davati: prodajem, prodaješ, prodaje.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Čekaj', 'me,', 'upravo', 'zaključam', 'vrata.'],
        wrong: 3,
        answer: 'zaključavam',
        hint: 'The speaker is in the middle of doing it. A finished whole cannot be "right now".',
        explanation:
          'Čekaj me, upravo zaključavam vrata. — upravo puts the action in progress, and that needs the imperfective zaključavati, not the perfective zaključati.',
      },
      {
        type: 'listen',
        audio: 'Obično ja otvaram trgovinu, ali jutros ju je otvorio moj brat.',
        q: 'Who opened the store this morning?',
        options: [
          'The speaker, as usual',
          'The speaker’s brother, although the speaker usually does it',
          'Nobody — the store stayed closed',
          'The brother, as he does every morning',
        ],
        correct: 1,
        explanation:
          'Obično ja otvaram — the habit is the speaker’s (imperfective). jutros ju je otvorio moj brat — this morning’s single act was the brother’s (perfective).',
      },
      {
        type: 'dictate',
        audio: 'Uvijek zapisujem nove riječi.',
        answer: 'Uvijek zapisujem nove riječi.',
        hint: 'Four words: "I always write down new words."',
        explanation:
          'Uvijek zapisujem nove riječi. — uvijek marks a habit, so the imperfective zapisivati, with its present in -ujem.',
      },
    ],
  },

  // ── False friends ──────────────────────────────────────────────────────────
  'false-friends': {
    text: {
      kind: 'dialogue',
      title: 'Što si zapravo htio reći?',
      lines: [
        { who: 'Ana', hr: 'Tome, jesi li našao stan?', en: 'Tom, have you found an apartment?' },
        {
          who: 'Tom',
          hr: 'Jesam! Vlasnica je jako simpatična, a stan je blizu gimnazije, pa ću svako jutro moći vježbati.',
          en: 'I have! The landlady is very likeable, and the apartment is near the "gimnazija", so I will be able to work out every morning.',
        },
        {
          who: 'Ana',
          hr: 'Vježbati u gimnaziji? To je škola, Tome. Ti misliš na teretanu.',
          en: 'Work out in a "gimnazija"? That is a school, Tom. You mean a gym.',
        },
        {
          who: 'Tom',
          hr: 'Uf, opet! A jučer sam vlasnici rekao da ću joj kauciju eventualno platiti.',
          en: 'Ugh, again! And yesterday I told the landlady that I would "eventualno" pay her the deposit.',
        },
        {
          who: 'Ana',
          hr: 'Onda ona sada misli da ćeš je možda platiti, a možda i nećeš.',
          en: 'Then she now thinks that maybe you will pay it, and maybe you won’t.',
        },
        {
          who: 'Tom',
          hr: 'A ja sam htio reći da ću je sigurno platiti, samo malo kasnije! Zato me onako čudno gledala.',
          en: 'And I wanted to say that I would definitely pay it, just a little later! That is why she looked at me so strangely.',
        },
        {
          who: 'Ana',
          hr: 'Ne brini se, objasni joj. Koji je pravi razlog što kasniš s novcem?',
          en: 'Don’t worry, explain it to her. What is the actual reason you are late with the money?',
        },
        {
          who: 'Tom',
          hr: 'Banka. Račun sam otvorio prije tjedan dana, a kartica još nije stigla.',
          en: 'The bank. I opened an account a week ago, and the card still has not arrived.',
        },
        {
          who: 'Ana',
          hr: 'Onda joj reci upravo to. I još nešto: ako ti kaže da si joj simpatičan, to ne znači da te žali.',
          en: 'Then tell her exactly that. And one more thing: if she tells you that you are "simpatičan" to her, it does not mean she feels sorry for you.',
        },
        {
          who: 'Tom',
          hr: 'Znam, znam — to znači da sam joj drag. To je jedina riječ koju sam dobro naučio!',
          en: 'I know, I know — it means she likes me. That is the one word I have learned properly!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Tom want to tell the landlady about the deposit, and what did she understand?',
          options: [
            'He wanted to say he had already paid; she understood he never would',
            'He wanted to say he would certainly pay, only later; she understood that he might or might not pay',
            'He wanted to ask for a lower deposit; she understood he was leaving',
            'He wanted to pay by card; she understood he had no bank account',
          ],
          correct: 1,
          hint: 'One Croatian word looks like "eventually" and means something much less certain.',
          explanation:
            'Tom said eventualno, thinking of "eventually". In Croatian it means "possibly, if need be" — so the landlady heard that he might pay, and might not.',
        },
        {
          q: 'Ana asks for the "pravi razlog". Why would "aktualni razlog" not say what she means?',
          options: [
            'Because aktualan can only describe news, never a reason',
            'Because aktualan means current or topical — it says nothing about whether a reason is the real one',
            'Because aktualan is a rude word in Croatian',
            'Because razlog is masculine and aktualan has no masculine form',
          ],
          correct: 1,
          hint: 'Think of what an "aktualna tema" is: a subject everybody is talking about now.',
          explanation:
            'aktualan means current, topical. The English "actual" — the true, real one — is pravi or stvaran, so the actual reason is pravi razlog.',
        },
        {
          type: 'type',
          q: 'Now you. A month later Tom reports — he did pay in the end: ____ sam ipak sve platio. (eventually — two words)',
          answer: 'Na kraju',
          accept: ['Konačno', 'Napokon'],
          hint: 'Not the look-alike. Think of the place where every story finishes: a preposition and that noun.',
          explanation:
            'Na kraju sam ipak sve platio. — "eventually" is na kraju (or konačno). eventualno would make the payment only a possibility.',
        },
        {
          type: 'transform',
          q: 'The landlady is likeable. Now say that she is SYMPATHETIC — that she feels for Tom and understands his trouble with the bank.',
          from: 'Vlasnica je simpatična.',
          answer: 'Vlasnica je suosjećajna.',
          accept: ['Vlasnica je puna razumijevanja.', 'Vlasnica je vrlo suosjećajna.'],
          hint: 'The adjective you need is built from the verb "to feel" and a prefix meaning "with" — or you can say she is "full of understanding".',
          explanation:
            'Vlasnica je suosjećajna. — simpatičan only means likeable, pleasant. Someone who shares your feelings is suosjećajan, or pun razumijevanja.',
        },
        {
          type: 'type',
          q: 'Tom paid in cash and forgot to ask for a receipt: Platio sam, ali nemam nikakvog ____! (proof, evidence)',
          answer: 'dokaza',
          hint: 'Not the look-alike of "evidence", which means records. You need the noun for something that proves a thing is true; after nemam it goes into the genitive.',
          explanation:
            'nemam nikakvog dokaza — evidence or proof is dokaz, in the genitive after nemam. The look-alike word means a register, records that somebody keeps.',
        },
      ],
    },
    mix: [
      8,
      0,
      {
        type: 'match',
        q: 'None of these means what it looks like. Match each Croatian word to what it really is.',
        pairs: [
          ['lektira', 'the books a student has to read for school'],
          ['novela', 'a short story'],
          ['ambulanta', 'a small local clinic, not a vehicle'],
          ['ordinacija', 'a doctor’s or dentist’s office'],
          ['gimnazija', 'a high school that prepares students for college'],
        ],
        explanation:
          'lektira is not a lecture, novela is not a full-length novel, an ambulanta is not an ambulance, ordinacija is not an ordination, and gimnazija is not a gym.',
      },
      9,
      {
        type: 'tf',
        q: '"Kompozicija" is the usual Croatian word for an essay that a student writes at school.',
        answer: false,
        hint: 'The Croatian word belongs to musicians. A school essay has a name of its own.',
        explanation:
          'False. A kompozicija is a musical composition (or the cars of a train). What a student writes at school is a sastavak.',
      },
      10,
      {
        type: 'sort',
        q: 'Which of these words mean what their English look-alike means, and which are false friends?',
        groups: ['Means what it looks like', 'A false friend — it means something else'],
        items: [
          { hr: 'hotel', group: 0 },
          { hr: 'aktualan', group: 1 },
          { hr: 'telefon', group: 0 },
          { hr: 'eventualno', group: 1 },
          { hr: 'problem', group: 0 },
          { hr: 'simpatičan', group: 1 },
          { hr: 'restoran', group: 0 },
        ],
        explanation:
          'hotel, telefon, problem and restoran are what they seem. aktualan is "current", eventualno is "possibly", and simpatičan is "likeable", not "sympathetic".',
      },
      {
        type: 'order',
        q: 'Put the words in order: "In the end we went to the coast after all."',
        words: ['Na', 'kraju', 'smo', 'ipak', 'otišli', 'na', 'more.'],
        accept: [
          'Ipak smo na kraju otišli na more.',
          'Na more smo na kraju ipak otišli.',
          'Na kraju smo ipak na more otišli.',
          'Na kraju smo na more ipak otišli.',
        ],
        explanation:
          'Na kraju smo ipak otišli na more. — na kraju is how Croatian says "in the end, eventually"; the short word smo takes second place, right after it.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("He drove fast and without caution on the wet road.")',
        words: ['Vozio', 'je', 'brzo', 'i', 'bez', 'kaucije', 'po', 'mokroj', 'cesti.'],
        wrong: 5,
        answer: 'opreza',
        hint: 'The word in the sentence is money you leave with a landlord. Care on the road is a different noun, and after bez it needs the genitive.',
        explanation:
          'Vozio je brzo i bez opreza po mokroj cesti. — caution is oprez (genitive opreza after bez). kaucija is a deposit, or bail.',
      },
      6,
      {
        type: 'transform',
        q: 'That is where the brother studies. After school he lifts weights — say where he goes then: "Poslije škole moj brat ide u…"',
        from: 'Moj brat ide u gimnaziju.',
        answer: 'Poslije škole moj brat ide u teretanu.',
        accept: [
          'Poslije škole moj brat ide u dvoranu.',
          'Moj brat poslije škole ide u teretanu.',
          'Moj brat ide u teretanu poslije škole.',
          'Poslije škole brat ide u teretanu.',
        ],
        hint: 'The place with the weights is not the word that looks like "gym". It is a feminine noun, and going there is a direction.',
        explanation:
          'Poslije škole moj brat ide u teretanu. — a gym with weights is a teretana; going there is a direction, so u + the accusative. gimnazija is the school.',
      },
      12,
      {
        type: 'listen',
        audio: 'Moja kći ide u gimnaziju, a poslije nastave trenira u sportskoj dvorani.',
        q: 'What do you learn about the daughter?',
        options: [
          'She works out at a gym before her classes',
          'She goes to an academic high school and trains in a sports hall after class',
          'She teaches at a high school and coaches in the afternoon',
          'She goes to a sports school and has no other classes',
        ],
        correct: 1,
        explanation:
          'ide u gimnaziju — she attends an academic high school. poslije nastave trenira u sportskoj dvorani — after class she trains in a sports hall.',
      },
      {
        type: 'dictate',
        audio: 'Naš je novi susjed vrlo simpatičan.',
        answer: 'Naš je novi susjed vrlo simpatičan.',
        accept: ['Naš novi susjed je vrlo simpatičan.'],
        hint: 'Six words: "Our new neighbor is very likeable."',
        explanation:
          'Naš je novi susjed vrlo simpatičan. — simpatičan describes someone pleasant and likeable; it says nothing about sympathy.',
      },
    ],
  },

  // ── Literacy, months, anniversaries, the govoriti family ───────────────────
  'literacy-and-language': {
    text: {
      kind: 'text',
      title: 'Sto godina gradske knjižnice',
      lines: [
        {
          hr: 'Gradska knjižnica u listopadu slavi stotu obljetnicu osnutka, a proslava će trajati cijeli mjesec.',
          en: 'In October the city library celebrates the hundredth anniversary of its founding, and the celebration will last the whole month.',
        },
        {
          hr: 'Ravnateljica Vesna Marić kaže da knjižnica danas nije samo mjesto gdje se posuđuju knjige.',
          en: 'The director, Vesna Marić, says that today a library is not just a place where books are borrowed.',
        },
        {
          hr: '„Sve više ljudi zna čitati, ali ne razumije ugovor koji potpisuje. Takvi su ljudi funkcionalno nepismeni, iako su završili školu”, objašnjava ona.',
          en: '"More and more people can read but do not understand the contract they are signing. Such people are functionally illiterate, even though they finished school," she explains.',
        },
        {
          hr: 'Zato knjižnica od petnaestog listopada organizira besplatne tečajeve digitalne i medijske pismenosti za sve generacije.',
          en: 'That is why, starting October 15, the library is organizing free courses in digital and media literacy for all generations.',
        },
        {
          hr: 'Voditelji tečajeva dogovorili su se sa školama da učenici dolaze utorkom, a umirovljenici četvrtkom.',
          en: 'The course leaders have arranged with the schools that students come on Tuesdays and retirees on Thursdays.',
        },
        {
          hr: '„Najteže je bilo nagovoriti starije ljude da dođu”, priznaje ravnateljica. „Mnogi odgovaraju da su za računalo prestari.”',
          en: '"The hardest part was persuading older people to come," the director admits. "Many answer that they are too old for a computer."',
        },
        {
          hr: 'Neki su prigovarali i zbog toga što je tečaj počinjao u devet ujutro, pa sada počinje u deset.',
          en: 'Some also complained that the course started at nine in the morning, so now it starts at ten.',
        },
        {
          hr: 'Proslava završava prvog studenoga, kada će najstariji član knjižnice dobiti nagradu.',
          en: 'The celebration ends on November 1, when the library’s oldest member will receive an award.',
        },
        {
          hr: 'Prošle ju je godine dobila gospođa od devedeset dvije godine, koja i danas svaki tjedan pročita jednu knjigu.',
          en: 'Last year it went to a ninety-two-year-old lady who still reads one book every week.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what is the library celebrating, and what is it offering people for free?',
          options: [
            'Its fiftieth anniversary; free books for students',
            'Its hundredth anniversary; free courses in digital and media literacy',
            'The director’s birthday; free computers for retirees',
            'The opening of a new building; free reading lessons for children',
          ],
          correct: 1,
          hint: 'The number is a round one with two zeros. The offer has to do with reading the modern world, not novels.',
          explanation:
            'Knjižnica slavi stotu obljetnicu osnutka — the hundredth anniversary of its founding — and from October 15 it is organizing free courses (besplatni tečajevi) in digital and media literacy for all generations.',
        },
        {
          q: 'The director calls some people "funkcionalno nepismeni, iako su završili školu". What does she mean?',
          options: [
            'They never learned the alphabet',
            'They can read the words but cannot make sense of an everyday document such as a contract',
            'They read only on a screen and never on paper',
            'They speak a dialect and not the standard language',
          ],
          correct: 1,
          hint: 'She gives an example just before: something these people sign.',
          explanation:
            'They know how to read (zna čitati) but do not understand the contract they are signing. Reading the letters is not yet understanding the text — that gap is functional illiteracy.',
        },
        {
          type: 'type',
          q: 'Now you. October is only the beginning — the last day of the celebration falls in the next month: Proslava završava u ____. (November)',
          answer: 'studenome',
          accept: ['studenom'],
          hint: 'This month name is an adjective in form, so after u it takes an adjective’s locative ending, not a noun’s.',
          explanation:
            'u studenome (or u studenom) — this month name declines like an adjective: studenoga in a date, studenome after u. It is never "u studeniju".',
        },
        {
          type: 'transform',
          q: 'The oldest reader says only the month of her birthday. Give the exact date instead — the twelfth.',
          from: 'Rođendan mi je u svibnju.',
          answer: 'Rođendan mi je dvanaestog svibnja.',
          accept: [
            'Rođendan mi je dvanaestoga svibnja.',
            'Dvanaestog svibnja mi je rođendan.',
            'Dvanaestoga svibnja mi je rođendan.',
            'Rođendan mi je 12. svibnja.',
          ],
          hint: 'A date has no preposition: both the ordinal number and the month go into the genitive.',
          explanation:
            'Rođendan mi je dvanaestog svibnja. — "on" a date is the bare genitive of the ordinal and of the month. svibanj loses its a: svibnja.',
        },
        {
          type: 'transform',
          q: 'The arrangement with the schools is finished. Say instead that the leaders are STILL working it out right now — in the present, with "još".',
          from: 'Voditelji su se dogovorili sa školama.',
          answer: 'Voditelji se još dogovaraju sa školama.',
          accept: [
            'Voditelji se još uvijek dogovaraju sa školama.',
            'Voditelji se sa školama još dogovaraju.',
            'Voditelji se još sa školama dogovaraju.',
          ],
          hint: 'Something still going on needs the imperfective partner. In this verb family the second o of -govor- changes, and the present is a regular one in -am.',
          explanation:
            'Voditelji se još dogovaraju sa školama. — dogovoriti se is the finished agreement; the process is dogovarati se, like odgovoriti / odgovarati.',
        },
      ],
    },
    mix: [
      8,
      1,
      {
        type: 'match',
        q: 'The Croatian months are named after nature and farm work. Match each month to what gave it its name.',
        pairs: [
          ['travanj', 'grass'],
          ['lipanj', 'the linden tree in flower'],
          ['listopad', 'leaves falling'],
          ['kolovoz', 'carts carrying the harvest'],
          ['siječanj', 'cutting wood'],
        ],
        explanation:
          'travanj from trava, lipanj from lipa, listopad from list and pasti, kolovoz from kolo and voziti, and siječanj is usually linked to sjeći, to cut.',
      },
      9,
      {
        type: 'sort',
        q: 'Each form fits only one frame: "u ___" (in that month) or "prvog ___" (on the first of that month). Which is which?',
        groups: ['In that month: u …', 'On that date: prvog …'],
        items: [
          { hr: 'ožujku', group: 0 },
          { hr: 'ožujka', group: 1 },
          { hr: 'travnju', group: 0 },
          { hr: 'travnja', group: 1 },
          { hr: 'kolovozu', group: 0 },
          { hr: 'kolovoza', group: 1 },
          { hr: 'veljači', group: 0 },
          { hr: 'veljače', group: 1 },
        ],
        explanation:
          '"In" a month is u + the locative: u ožujku, u travnju, u kolovozu, u veljači. A date takes the genitive of the month: prvog ožujka, travnja, kolovoza, veljače.',
      },
      10,
      {
        type: 'tf',
        q: 'Croatian writes the names of the months with a capital letter, as English does.',
        answer: false,
        hint: 'Look at how the months are written in any sentence of this lesson.',
        explanation:
          'False. Months are written with a small letter: u siječnju, prvog svibnja. A capital appears only at the start of a sentence.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "My friend persuaded me to sign up for a course."',
        words: ['Prijateljica', 'me', 'je', 'nagovorila', 'da', 'upišem', 'tečaj.'],
        accept: ['Nagovorila me je prijateljica da upišem tečaj.'],
        explanation:
          'Prijateljica me je nagovorila da upišem tečaj. — nagovoriti takes the person in the accusative (me) and then da + the present for what they are persuaded to do.',
      },
      11,
      {
        type: 'transform',
        q: 'Say the same thing with ONE adjective instead of the whole phrase.',
        from: 'Moj djed ne zna čitati ni pisati.',
        answer: 'Moj djed je nepismen.',
        accept: ['Moj je djed nepismen.', 'Djed je nepismen.'],
        hint: 'Take the adjective for someone who can read and write, and put the negative prefix in front of it.',
        explanation:
          'Moj djed je nepismen. — pismen is literate; ne- makes the opposite, written as one word.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Nitko', 'nije', 'dogovorio', 'na', 'moje', 'pitanje.'],
        wrong: 2,
        answer: 'odgovorio',
        hint: 'The prefix is wrong. Which verb of this family goes with "na pitanje"?',
        explanation:
          'Nitko nije odgovorio na moje pitanje. — answering is odgovoriti na + the accusative. dogovoriti se, with se, means to come to an agreement.',
      },
      12,
      {
        type: 'listen',
        audio:
          'Moji roditelji vjenčali su se dvadesetog lipnja, pa svake godine u lipnju slavimo njihovu godišnjicu.',
        q: 'What happens every year, and when?',
        options: [
          'The parents get married again every July',
          'The family celebrates the parents’ wedding anniversary in June',
          'The parents celebrate the speaker’s birthday on June 20',
          'The family goes to a wedding every June',
        ],
        correct: 1,
        explanation:
          'vjenčali su se dvadesetog lipnja — they got married on June 20. svake godine u lipnju slavimo njihovu godišnjicu — every June the family celebrates their anniversary.',
      },
      {
        type: 'dictate',
        audio: 'Kako se izgovara ova riječ?',
        answer: 'Kako se izgovara ova riječ?',
        hint: 'Five words: "How is this word pronounced?"',
        explanation:
          'Kako se izgovara ova riječ? — the imperfective izgovarati with se: how one pronounces it in general, not on one occasion.',
      },
    ],
  },

  // ══ UNIT 2 ═════════════════════════════════════════════════════════════════

  // ── Feminine nouns in -a up close ──────────────────────────────────────────
  'noun-peculiarities-e': {
    text: {
      kind: 'dialogue',
      title: 'Paket za baku',
      lines: [
        {
          who: 'Lucija',
          hr: 'Mama, kome pišeš tako dugu poruku?',
          en: 'Mom, who are you writing such a long message to?',
        },
        {
          who: 'Mama',
          hr: 'Tvojoj teti u Americi. Javila mi je da je baki bolje i da opet hoda po kući bez pomoći.',
          en: 'To your aunt in America. She let me know that Grandma is better and is walking around the house without help again.',
        },
        {
          who: 'Lucija',
          hr: 'Baš mi je drago! A što je bilo s njezinom nogom?',
          en: 'I am so glad! And what was wrong with her leg?',
        },
        {
          who: 'Mama',
          hr: 'Pala je i slomila nogu, ali liječnica kaže da je sve dobro prošlo.',
          en: 'She fell and broke her leg, but the doctor says everything turned out fine.',
        },
        {
          who: 'Lucija',
          hr: 'Hoćemo li baki nešto poslati? Ona voli dobiti pravi paket, ne samo poruku.',
          en: 'Should we send Grandma something? She likes getting a real package, not just a message.',
        },
        {
          who: 'Mama',
          hr: 'Već sam sve pripremila: pet knjiga, deset razglednica iz Dalmacije i nekoliko pjesama koje si napisala u školi.',
          en: 'I have already prepared everything: five books, ten postcards from Dalmatia and a few poems that you wrote at school.',
        },
        {
          who: 'Lucija',
          hr: 'Mojih pjesama?! Mama, njih sam pisala u petom razredu! „Moja baka miriše na kolače” — to ne može u Ameriku.',
          en: 'My poems?! Mom, I wrote those in fifth grade! "My grandma smells like cake" — that can’t go to America.',
        },
        {
          who: 'Mama',
          hr: 'Upravo tu baka najviše voli. Drži je u ladici pokraj kreveta i čita je svim svojim prijateljicama.',
          en: 'That is exactly the one Grandma loves most. She keeps it in the drawer by her bed and reads it to all her friends.',
        },
        {
          who: 'Lucija',
          hr: 'Dobro, ali onda i ja nešto dodajem: fotografiju naše mačke. Baka uvijek pita za nju.',
          en: 'All right, but then I am adding something too: a photo of our cat. Grandma always asks about her.',
        },
        {
          who: 'Mama',
          hr: 'Dogovoreno. A sad mi dodaj olovku — moram još napisati adresu, a u desnoj ruci već držim mobitel.',
          en: 'Deal. Now pass me a pencil — I still have to write the address, and I am already holding my phone in my right hand.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is going into the package, and what does Lucija add?',
          options: [
            'Cookies, a book and a letter; Lucija adds a pencil',
            'Books, postcards and Lucija’s old poems; Lucija adds a photo of the cat',
            'Photos of the family and a phone; Lucija adds a postcard',
            'Medicine for the leg and a book; Lucija adds a new poem',
          ],
          correct: 1,
          hint: 'Three kinds of paper things from Mom — and then something with whiskers.',
          explanation:
            'Mama has prepared pet knjiga, deset razglednica i nekoliko pjesama. Lucija adds fotografiju naše mačke, because Grandma always asks about the cat.',
        },
        {
          q: 'Mama says "u Americi" and "u desnoj ruci" — the k of Amerika and ruka has changed before -i. But she also says "baki je bolje", with the k untouched. Why?',
          options: [
            'Because baki is the dative and the change happens only in the locative',
            'Because family words and pet names keep their consonant before -i',
            'Because the change happens only in words of three or more syllables',
            'Because baka is a borrowed word',
          ],
          correct: 1,
          hint: 'The dative and locative have the same ending, so the case is not the reason. Think of what kind of word baka is.',
          explanation:
            'k, g, h normally become c, z, s before the -i of the dative and locative: Amerika → Americi, ruka → ruci. Family words and pet names such as baka and seka are a set of exceptions: baki, seki.',
        },
        {
          type: 'type',
          q: 'Now you. Lucija writes the card that goes on top of the package: Draga ____, ovo je za tebe! (baka)',
          answer: 'bako',
          hint: 'She is speaking directly to her, so the noun needs the form for calling someone — most feminine nouns in -a change their last vowel.',
          explanation:
            'Draga bako! — the vocative of most feminine nouns in -a ends in -o: baka → bako, mama → mamo, teta → teto. The adjective stays as it is.',
        },
        {
          type: 'transform',
          q: 'Mama asked for one pencil. Now say there are TEN on the table.',
          from: 'Na stolu je jedna olovka.',
          answer: 'Na stolu je deset olovaka.',
          accept: ['Na stolu ima deset olovaka.', 'Deset olovaka je na stolu.'],
          hint: 'After ten comes the genitive plural. The stem ends in two consonants, and Croatian does not leave them together there.',
          explanation:
            'Na stolu je deset olovaka. — the genitive plural ends in -a, and an extra a is slipped between the two consonants of the stem: olovk- → olovaka.',
        },
        {
          type: 'transform',
          q: 'This is the family cat. Now say that Lucija is giving milk TO her: "Lucija daje mlijeko…"',
          from: 'Ovo je naša mačka.',
          answer: 'Lucija daje mlijeko našoj mački.',
          accept: ['Lucija našoj mački daje mlijeko.', 'Lucija daje našoj mački mlijeko.'],
          hint: 'To whom? — the dative. Look at the two consonants before the final -a: nouns ending like this do not change them.',
          explanation:
            'Lucija daje mlijeko našoj mački. — the dative ends in -i, but nouns in -čka (and -tka) keep their k: mačka → mački, točka → točki.',
        },
      ],
    },
    mix: [
      8,
      1,
      {
        type: 'sort',
        q: 'Put each noun into the dative or locative in your head (u …, o …). Does its last consonant change before -i?',
        groups: ['The consonant changes before -i', 'The consonant stays'],
        items: [
          { hr: 'slika', group: 0 },
          { hr: 'baka', group: 1 },
          { hr: 'Afrika', group: 0 },
          { hr: 'patka', group: 1 },
          { hr: 'banka', group: 0 },
          { hr: 'Anka', group: 1 },
          { hr: 'jabuka', group: 0 },
        ],
        explanation:
          'na slici, u Africi, u banci, o jabuci — k becomes c. baka is a family word, patka ends in -tka and Anka is a woman’s name, so they keep the k: baki, patki, Anki.',
      },
      9,
      {
        type: 'match',
        q: 'One noun, five forms. Match each sentence to the form that completes it.',
        pairs: [
          ['Ovo je nova ___.', 'igra'],
          ['Djeca vole ovu ___.', 'igru'],
          ['Znam mnogo ___.', 'igara'],
          ['Uživamo u toj ___.', 'igri'],
          ['Zabavljamo se tom ___.', 'igrom'],
        ],
        explanation:
          'igra, igru, igri, igrom follow the table. Only the genitive plural after mnogo is special: the stem igr- ends in two consonants, so an a is slipped in — igara.',
      },
      10,
      {
        type: 'tf',
        q: '"Gospođo Kovač, izvolite" is the correct way to address Mrs. Kovač.',
        answer: true,
        hint: 'Which vowel does a feminine noun in -a usually end in when you call someone?',
        explanation:
          'True. gospođa takes -o in the vocative like most feminine nouns in -a: gospođo. The last name does not change.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Every Sunday I send Grandma a postcard."',
        words: ['Svake', 'nedjelje', 'šaljem', 'baki', 'razglednicu.'],
        accept: [
          'Svake nedjelje baki šaljem razglednicu.',
          'Baki svake nedjelje šaljem razglednicu.',
          'Šaljem baki razglednicu svake nedjelje.',
          'Baki šaljem razglednicu svake nedjelje.',
          'Svake nedjelje šaljem razglednicu baki.',
          'Šaljem baki svake nedjelje razglednicu.',
          'Razglednicu šaljem baki svake nedjelje.',
          'Baki šaljem svake nedjelje razglednicu.',
          'Svake nedjelje razglednicu šaljem baki.',
        ],
        explanation:
          'Svake nedjelje šaljem baki razglednicu. — baki is the dative, and as a family word it keeps its k.',
      },
      11,
      {
        type: 'transform',
        q: 'One job application was not enough. Say that you sent TEN.',
        from: 'Poslao sam jednu molbu.',
        answer: 'Poslao sam deset molbi.',
        accept: ['Poslala sam deset molbi.'],
        hint: 'After ten comes the genitive plural — but this is one of the nouns that do not take an extra a there. They take a different ending.',
        explanation:
          'Poslao sam deset molbi. — some nouns with a consonant cluster take -i in the genitive plural instead of an inserted a: molba → molbi, borba → borbi, šetnja → šetnji.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'hladnoj', 'rijeki', 'nismo', 'se', 'dugo', 'kupali.'],
        wrong: 2,
        answer: 'rijeci',
        hint: 'U + the locative ends in -i, and one consonant does not stay as it is before that ending.',
        explanation:
          'U hladnoj rijeci nismo se dugo kupali. — before the -i of the locative, k becomes c: rijeka → rijeci.',
      },
      12,
      3,
      {
        type: 'listen',
        audio: 'U našem razredu ima petnaest djevojaka i samo pet momaka.',
        q: 'What is the class like?',
        options: [
          'Five girls and fifteen boys',
          'Fifteen girls and only five boys',
          'Fifty girls and five boys',
          'Fifteen students, five of them girls',
        ],
        correct: 1,
        explanation:
          'petnaest djevojaka — fifteen girls; samo pet momaka — only five boys. Both nouns are in the genitive plural after the number, each with an a slipped into the stem.',
      },
      {
        type: 'dictate',
        audio: 'Daj mački malo mlijeka.',
        answer: 'Daj mački malo mlijeka.',
        hint: 'Four words: "Give the cat a little milk."',
        explanation:
          'Daj mački malo mlijeka. — mački is the dative of mačka, with the k unchanged, and mlijeka is the genitive after malo.',
      },
    ],
  },

  // ── -ovati / -ivati → -ujem; -nuti → -nem; hidden n and m ──────────────────
  'present-ivati-nuti': {
    text: {
      kind: 'dialogue',
      title: 'U turističkoj agenciji',
      lines: [
        {
          who: 'Agentica',
          hr: 'Dobar dan, gospodine Babiću. Što Vas zanima?',
          en: 'Good afternoon, Mr. Babić. What are you interested in?',
        },
        {
          who: 'Babić',
          hr: 'Dobar dan. Supruga i ja svake godine ljetujemo na istome mjestu, ali ove godine želimo nešto drukčije. Što nam preporučujete?',
          en: 'Good afternoon. My wife and I spend the summer in the same place every year, but this year we want something different. What do you recommend?',
        },
        {
          who: 'Agentica',
          hr: 'Ako volite mir, preporučujem Vam Vis. Tko jednom ode onamo, obično ostane tjedan dana dulje nego što je planirao.',
          en: 'If you like peace and quiet, I recommend Vis. Whoever goes there once usually stays a week longer than planned.',
        },
        {
          who: 'Babić',
          hr: 'Zvuči lijepo, ali supruga ne podnosi dugu vožnju brodom. Čim brod krene, ona mora leći.',
          en: 'That sounds nice, but my wife cannot stand a long boat ride. As soon as the boat sets off, she has to lie down.',
        },
        {
          who: 'Agentica',
          hr: 'Onda uzmite brzi katamaran: polazi iz Splita u tri, a već u pola pet ste na otoku.',
          en: 'Then take the fast catamaran: it leaves Split at three, and by four thirty you are on the island.',
        },
        {
          who: 'Babić',
          hr: 'A smještaj? Ne kupujemo ništa dok ne vidimo fotografije.',
          en: 'And the accommodation? We don’t buy anything until we see photos.',
        },
        {
          who: 'Agentica',
          hr: 'Naravno. Upravo Vam pokazujem apartman koji naši gosti najviše hvale — pogledajte ovdje.',
          en: 'Of course. I am just showing you the apartment our guests praise most — take a look here.',
        },
        {
          who: 'Babić',
          hr: 'Izgleda odlično. Ako ostanemo deset dana, dobivamo li popust?',
          en: 'It looks great. If we stay ten days, do we get a discount?',
        },
        {
          who: 'Agentica',
          hr: 'Dobivate deset posto. Samo trebate danas platiti polovicu, a ugovor potpisujete kad dođete po karte.',
          en: 'You get ten percent. You just need to pay half today, and you sign the contract when you come for the tickets.',
        },
        {
          who: 'Babić',
          hr: 'Dogovoreno. Kad moja supruga počne razmišljati o moru, ne može stati — rezervirajte odmah!',
          en: 'Deal. Once my wife starts thinking about the sea, she can’t stop — book it right away!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does the agent suggest the catamaran, and what do the Babićs get for a ten-day stay?',
          options: [
            'It is cheaper than the ferry; they get a free dinner',
            'Mrs. Babić cannot stand a long boat ride; they get ten percent off',
            'The ferry does not run in summer; they get a bigger apartment',
            'Mr. Babić is afraid of the sea; they get free tickets',
          ],
          correct: 1,
          hint: 'Someone has to lie down as soon as the boat sets off. The reward is a number with a percent sign.',
          explanation:
            'Supruga ne podnosi dugu vožnju brodom, and the catamaran takes only an hour and a half. For ten days dobivate deset posto.',
        },
        {
          q: 'The agent says "pokazujem" (from pokazivati), but Mr. Babić asks "dobivamo li" (from dobivati). Both infinitives seem to end in -ivati. Why is it not "dobujemo"?',
          options: [
            'Because dobivati is used only in questions',
            'Because in dobivati the i belongs to the verb dobiti and the suffix is only -vati, so the present stays regular',
            'Because the mi form never takes -uj-',
            'Because dobivati is perfective',
          ],
          correct: 1,
          hint: 'Take each verb apart. Which perfective verb is it made from, and what exactly was added?',
          explanation:
            'pokazati + -ivati gives pokazivati, and that suffix turns into -uj- in the present: pokazujem. dobivati is dobi-ti + -vati: there is no -ivati suffix in it, so it keeps -am: dobivam, dobivamo.',
        },
        {
          type: 'type',
          q: 'Now you. The agent describes her careful customer: Gospodin Babić ne ____ ništa bez fotografija. (kupovati)',
          answer: 'kupuje',
          hint: 'The -ova- of the infinitive does not survive in the present. This is the on form.',
          explanation:
            'kupuje — in -ovati verbs, -ova- is replaced by -uj- and the endings are -em, -eš, -e: kupujem, kupuješ, kupuje.',
        },
        {
          type: 'transform',
          q: 'The agent recommended Vis once, to Mr. Babić. Now say what she does with every customer, in the present: "Agentica svima…"',
          from: 'Agentica mi je preporučila Vis.',
          answer: 'Agentica svima preporučuje Vis.',
          accept: ['Agentica svima uvijek preporučuje Vis.', 'Agentica Vis preporučuje svima.'],
          hint: 'A routine needs the imperfective made with -ivati — and in the present that suffix behaves exactly like -ovati.',
          explanation:
            'Agentica svima preporučuje Vis. — the habit is preporučivati, and -ivati becomes -uj- in the present: preporučujem, preporučuje.',
        },
        {
          type: 'transform',
          q: 'The Babićs’ grandson dreams of the sea. Report his parents’ wish with da: "Roditelji žele da on…"',
          from: 'Želim postati kapetan.',
          answer: 'Roditelji žele da on postane kapetan.',
          accept: ['Roditelji žele da postane kapetan.'],
          hint: 'After da you need the present, not the infinitive — and this verb shows a consonant in the present that the infinitive hides.',
          explanation:
            'Roditelji žele da on postane kapetan. — postati hides an n: postanem, postaneš, postane, like stati → stanem and ostati → ostanem.',
        },
      ],
    },
    mix: [
      8,
      1,
      {
        type: 'sort',
        q: 'Which of these verbs swap their suffix for -uj- in the present, and which only look as if they should?',
        groups: ['ja …-ujem', 'ja …-am'],
        items: [
          { hr: 'darovati', group: 0 },
          { hr: 'pjevati', group: 1 },
          { hr: 'ratovati', group: 0 },
          { hr: 'uživati', group: 1 },
          { hr: 'zapisivati', group: 0 },
          { hr: 'pozivati', group: 1 },
          { hr: 'objavljivati', group: 0 },
          { hr: 'zahtijevati', group: 1 },
        ],
        explanation:
          'darujem, ratujem, zapisujem, objavljujem — the suffixes -ovati and -ivati become -uj-. pjevati, uživati, pozivati and zahtijevati only look like them: none is made with one of those two suffixes, so they keep -am: pjevam, uživam, pozivam, zahtijevam.',
      },
      9,
      3,
      {
        type: 'match',
        q: 'Each of these presents comes from an infinitive that looks different. Match the form to its meaning.',
        pairs: [
          ['krenem', 'I set off'],
          ['maknem', 'I move it out of the way'],
          ['dignem', 'I lift'],
          ['nestanem', 'I disappear'],
          ['postanem', 'I become'],
        ],
        explanation:
          'krenuti, maknuti and dignuti drop the u of -nuti: krenem, maknem, dignem. nestati and postati have no n in the infinitive, but it appears in the present: nestanem, postanem.',
      },
      {
        type: 'tf',
        q: 'The present of "donijeti" is "donijem".',
        answer: false,
        hint: 'The verbs in -nijeti hide a consonant that shows up only in the present.',
        explanation:
          'False. donijeti → donesem, donesu: the -nijeti verbs hide an s, as do odnijeti → odnesem and ponijeti → ponesem.',
      },
      10,
      {
        type: 'transform',
        q: 'One test, finished. Now say it is the professor’s routine, in the present: "Profesor nas svaki tjedan…"',
        from: 'Profesor nas je ispitao.',
        answer: 'Profesor nas svaki tjedan ispituje.',
        accept: [
          'Profesor nas ispituje svaki tjedan.',
          'Svaki tjedan nas profesor ispituje.',
          'Svaki nas tjedan profesor ispituje.',
          'Svaki tjedan nas ispituje profesor.',
        ],
        hint: 'The routine needs the imperfective in -ivati, and its present does not keep -iva-.',
        explanation:
          'Profesor nas svaki tjedan ispituje. — ispitati → ispitivati, and in the present -iva- becomes -uj-: ispitujem, ispituje.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Molim', 'te,', 'maknuj', 'torbu', 'sa', 'stolice.'],
        wrong: 2,
        answer: 'makni',
        hint: 'Verbs in -nuti lose a vowel in the present, and the command is built on that shorter stem.',
        explanation:
          'Molim te, makni torbu sa stolice. — maknuti → maknem, so the command is makni. The u of the infinitive never appears in the present or in the command.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "When I start reading a good book, I cannot stop."',
        words: ['Kad', 'počnem', 'čitati', 'dobru', 'knjigu,', 'ne', 'mogu', 'stati.'],
        accept: [
          'Ne mogu stati kad počnem čitati dobru knjigu.',
          'Kad dobru knjigu počnem čitati, ne mogu stati.',
          'Kad počnem dobru knjigu čitati, ne mogu stati.',
        ],
        explanation:
          'Kad počnem čitati dobru knjigu, ne mogu stati. — početi shows its hidden n in the present; after mogu comes the infinitive, where stati has none.',
      },
      {
        type: 'listen',
        audio: 'Ako uzmemo taksi, stići ćemo prije nego što predstava počne.',
        q: 'What is the speaker saying?',
        options: [
          'They took a taxi and still missed the beginning of the show',
          'If they take a taxi, they will arrive before the show begins',
          'The show will not begin until the taxi arrives',
          'They will take a taxi home after the show',
        ],
        correct: 1,
        explanation:
          'Ako uzmemo taksi — if we take a taxi (uzeti hides an m). prije nego što predstava počne — before the show begins (početi hides an n).',
      },
      {
        type: 'dictate',
        audio: 'Svako ljeto putujemo na more.',
        answer: 'Svako ljeto putujemo na more.',
        hint: 'Five words: "Every summer we travel to the coast."',
        explanation:
          'Svako ljeto putujemo na more. — putovati swaps -ova- for -uj- in the present: putujem, putujemo.',
      },
    ],
  },

  // ── Aspect after another verb ──────────────────────────────────────────────
  'aspect-with-verbs': {
    text: {
      kind: 'dialogue',
      title: 'Rok je sutra u podne',
      lines: [
        {
          who: 'Nina',
          hr: 'Jakove, jesi li napisao zamolbu za onaj posao? Rok je sutra u podne.',
          en: 'Jakov, have you written the application for that job? The deadline is tomorrow at noon.',
        },
        {
          who: 'Jakov',
          hr: 'Počeo sam je pisati sinoć, ali je nisam uspio dovršiti. Zazvonio je mobitel i…',
          en: 'I started writing it last night, but I didn’t manage to finish it. My phone rang and…',
        },
        {
          who: 'Nina',
          hr: '…i nastavio si gledati seriju, znam. Svaki put počneš raditi, a onda prestaneš nakon deset minuta.',
          en: '…and you went on watching your show, I know. Every time you start working, and then you stop after ten minutes.',
        },
        {
          who: 'Jakov',
          hr: 'Nemoj biti takva. Danas moram samo još napisati zadnji dio i sve pročitati.',
          en: 'Don’t be like that. Today I only have to write the last part and read it all through.',
        },
        {
          who: 'Nina',
          hr: 'Onda prestani razgovarati sa mnom i počni pisati. Poslije ti mogu pomoći provjeriti pravopis.',
          en: 'Then stop talking to me and start writing. Afterward I can help you check the spelling.',
        },
        {
          who: 'Jakov',
          hr: 'Hvala. Znaš da ne volim pisati takva pisma — nikad ne znam što trebam reći.',
          en: 'Thanks. You know I don’t like writing letters like that — I never know what I am supposed to say.',
        },
        {
          who: 'Nina',
          hr: 'Nemoj se brinuti zbog toga. Moraš samo objasniti zašto želiš baš taj posao.',
          en: 'Don’t worry about that. You just have to explain why you want that particular job.',
        },
        {
          who: 'Jakov',
          hr: 'Dobro. Samo nemoj zaboraviti doći u jedanaest, da stignem sve poslati prije ponoći.',
          en: 'All right. Just don’t forget to come at eleven, so that I manage to send everything before midnight.',
        },
        {
          who: 'Nina',
          hr: 'Neću zaboraviti. A ti nemoj opet zaspati za stolom!',
          en: 'I won’t forget. And don’t you fall asleep at the desk again!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Jakov still have to do today, and what does Nina offer?',
          options: [
            'Write the whole application from the beginning; Nina offers to write it for him',
            'Write the last part and read everything through; Nina offers to help check the spelling',
            'Send the application by noon; Nina offers to take it to the post office',
            'Call the company; Nina offers to watch the show with him afterward',
          ],
          correct: 1,
          hint: 'He began last night, so only the end is missing. Nina’s help comes after the writing.',
          explanation:
            'Moram samo još napisati zadnji dio i sve pročitati — two results to reach. Nina can help provjeriti pravopis, and she is to come at eleven.',
        },
        {
          q: 'Nina says "Nemoj se brinuti" with an imperfective verb, but "nemoj opet zaspati" with a perfective one. Why the perfective the second time?',
          options: [
            'Because zaspati has no imperfective partner',
            'Because it is a sharp warning against one particular slip, not a general "don’t do that"',
            'Because Nina is angry, and an angry command is perfective',
            'Because the sentence has the word opet in it',
          ],
          correct: 1,
          hint: 'One of the two is about an ongoing state of mind; the other is about a single accident that could happen tonight.',
          explanation:
            'After nemoj the infinitive is normally imperfective: Nemoj se brinuti — do not go on worrying. The perfective appears for a warning about one specific act: Nemoj zaspati! — do not let that one thing happen.',
        },
        {
          type: 'type',
          q: 'Now you. The application is sent, and Jakov can finally relax: Počeo sam ____ novu knjigu. (to read — which aspect?)',
          answer: 'čitati',
          hint: 'You can begin an activity, but you cannot begin a finished result. The verb you need has no prefix.',
          explanation:
            'Počeo sam čitati novu knjigu. — početi, like nastaviti and prestati, takes only an imperfective infinitive. The prefixed, perfective verb names the finished reading, and that cannot be "begun".',
        },
        {
          type: 'transform',
          q: 'Jakov is in the middle of writing. An hour later it is done — say that he MANAGED to do it: "Uspio sam…"',
          from: 'Pišem zamolbu.',
          answer: 'Uspio sam napisati zamolbu.',
          accept: ['Uspjela sam napisati zamolbu.', 'Uspio sam zamolbu napisati.'],
          hint: 'Managing is about an outcome, so the infinitive after it must be the one that names the finished result.',
          explanation:
            'Uspio sam napisati zamolbu. — uspjeti is about reaching a result, so here it takes the perfective infinitive: napisati, not pisati.',
        },
        {
          type: 'transform',
          q: 'This asks for one call tonight. Turn it into a general rule — "Don’t call me after midnight" — with nemoj.',
          from: 'Nazovi me poslije ponoći.',
          answer: 'Nemoj me zvati poslije ponoći.',
          accept: [
            'Nemoj me nikad zvati poslije ponoći.',
            'Nikad me nemoj zvati poslije ponoći.',
            'Poslije ponoći me nemoj zvati.',
            'Nemoj me poslije ponoći zvati.',
          ],
          hint: 'An ordinary prohibition does not use the prefixed verb. Take the plain infinitive, and put the short word me right after nemoj.',
          explanation:
            'Nemoj me zvati poslije ponoći. — a general "don’t" takes nemoj + the imperfective infinitive: zvati. The one-time request used the perfective nazvati.',
        },
      ],
    },
    mix: [
      4,
      1,
      {
        type: 'sort',
        q: 'One sentence is about an activity that got under way, the other about a result that was reached. Which sentence does each infinitive belong in?',
        groups: ['Počeo sam … (I began the activity)', 'Uspio sam … (I got it done)'],
        items: [
          { hr: 'učiti', group: 0 },
          { hr: 'naučiti', group: 1 },
          { hr: 'pisati', group: 0 },
          { hr: 'napisati', group: 1 },
          { hr: 'kuhati', group: 0 },
          { hr: 'skuhati', group: 1 },
          { hr: 'čistiti', group: 0 },
          { hr: 'očistiti', group: 1 },
        ],
        explanation:
          'A phase verb such as početi takes only the imperfective: učiti, pisati, kuhati, čistiti. uspjeti reports an outcome, so the result verbs go with it: naučiti, napisati, skuhati, očistiti. (An imperfective after uspjeti is rare and means that the activity itself was the achievement.)',
      },
      5,
      {
        type: 'match',
        q: 'The same report, five different stories. Match each sentence to its meaning.',
        pairs: [
          ['Moram pisati izvještaj.', 'I have to spend time working on the report.'],
          ['Moram napisati izvještaj.', 'I have to get the report done.'],
          ['Prestao sam pisati izvještaj.', 'I stopped working on the report.'],
          ['Uspio sam napisati izvještaj.', 'I managed to get the report done.'],
          ['Zaboravio sam napisati izvještaj.', 'I forgot to write the report.'],
        ],
        explanation:
          'After a modal the aspect is your choice and changes the meaning: pisati is the activity, napisati the result. prestati allows only the imperfective; uspjeti and zaboraviti are about outcomes, so here they take the perfective.',
      },
      6,
      {
        type: 'tf',
        q: '"Volim pročitati knjige na plaži" is the normal way to say "I like reading books on the beach."',
        answer: false,
        hint: 'Is liking something about the activity itself, or about one finished result?',
        explanation:
          'False. What you like is the activity, not one completed whole, so voljeti normally takes the imperfective infinitive: Volim čitati knjige na plaži.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Don’t forget your keys when you leave the apartment."',
        words: ['Nemoj', 'zaboraviti', 'ključeve', 'kad', 'izlaziš', 'iz', 'stana.'],
        accept: ['Kad izlaziš iz stana, nemoj zaboraviti ključeve.'],
        explanation:
          'Nemoj zaboraviti ključeve kad izlaziš iz stana. — a warning against one specific slip, so the perfective zaboraviti is right after nemoj here.',
      },
      7,
      {
        type: 'transform',
        q: 'This person smokes. A year later that is over — say "I have stopped smoking."',
        from: 'Pušim.',
        answer: 'Prestao sam pušiti.',
        accept: ['Prestala sam pušiti.', 'Ja sam prestao pušiti.', 'Ja sam prestala pušiti.'],
        hint: 'The verb for stopping goes into the past; what you stopped follows as an infinitive — of the only aspect a phase verb allows.',
        explanation:
          'Prestao sam pušiti. — prestati is a phase verb, so the infinitive after it is imperfective.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Cijelo', 'popodne', 'moram', 'odgovoriti', 'na', 'pozive.'],
        wrong: 3,
        answer: 'odgovarati',
        hint: 'The action fills the whole afternoon. It is not one finished act.',
        explanation:
          'Cijelo popodne moram odgovarati na pozive. — an action spread over a stretch of time is imperfective, so the modal needs odgovarati here.',
      },
      {
        type: 'listen',
        audio: 'Svake nedjelje moram zvati baku, ali jučer sam je zaboravio nazvati.',
        q: 'What happened?',
        options: [
          'The speaker calls Grandma every Sunday and did so yesterday too',
          'The speaker has to call Grandma every Sunday, but forgot to call her yesterday',
          'Grandma calls every Sunday, but yesterday she forgot',
          'The speaker no longer has to call Grandma on Sundays',
        ],
        correct: 1,
        explanation:
          'moram zvati — the weekly routine, imperfective. zaboravio sam je nazvati — one whole phone call that did not happen, perfective after zaboraviti.',
      },
      {
        type: 'dictate',
        audio: 'Nisam uspio riješiti problem.',
        answer: 'Nisam uspio riješiti problem.',
        hint: 'Four words: "I did not manage to solve the problem."',
        explanation:
          'Nisam uspio riješiti problem. — uspjeti is about an outcome, so the infinitive is the perfective riješiti.',
      },
    ],
  },

  // ── Living online ──────────────────────────────────────────────────────────
  'internet-society': {
    text: {
      kind: 'text',
      title: 'Tjedan dana bez mreža',
      lines: [
        {
          hr: 'Prošli mjesec moji su učenici pokušali provesti tjedan dana bez društvenih mreža.',
          en: 'Last month my students tried to spend a week without social networks.',
        },
        {
          hr: 'S jedne strane, pokus je uspio: nakon tri dana počeli su više razgovarati, a neki su čak ponovno počeli čitati.',
          en: 'On the one hand, the experiment worked: after three days they started talking more, and some even started reading again.',
        },
        {
          hr: 'S druge strane, nekoliko učenika priznalo je da su mreže ipak potajno otvarali u pregledniku, „samo da vide što ima novo”.',
          en: 'On the other hand, several students admitted that they had secretly opened the networks in a browser after all, "just to see what’s new."',
        },
        {
          hr: 'Ne mislim da su ti učenici ovisni o mrežama; mislim da se boje da će nešto propustiti.',
          en: 'I do not think those students are addicted to the networks; I think they are afraid of missing something.',
        },
        {
          hr: 'Najveća je prednost mreža to što nas povezuju s ljudima koji su daleko.',
          en: 'The biggest advantage of the networks is that they connect us with people who are far away.',
        },
        {
          hr: 'Glavni je nedostatak to što na njima provodimo vrijeme koje bismo inače proveli s onima koji su blizu.',
          en: 'The main disadvantage is that we spend time on them that we would otherwise spend with those who are near.',
        },
        {
          hr: 'Osim toga, lažne vijesti šire se brže od istinitih, a malo tko provjerava tko ih je objavio.',
          en: 'Besides, fake news spreads faster than true news, and hardly anyone checks who posted it.',
        },
        {
          hr: 'Međutim, ne vjerujem da će mreže za dvadeset godina nestati; vjerojatno će samo promijeniti oblik.',
          en: 'However, I do not believe the networks will disappear in twenty years; they will probably just change their form.',
        },
        {
          hr: 'Zbog toga bi bilo dobro da djeca već u školi uče kako ih pametno koristiti.',
          en: 'That is why it would be good for children to learn at school how to use them wisely.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what changed after three days, and what did several students admit?',
          options: [
            'They slept better; several admitted they had not tried at all',
            'They talked more and some read again; several admitted secretly opening the networks in a browser',
            'They got better grades; several admitted using a friend’s phone',
            'They were bored and angry; several admitted they had deleted their accounts',
          ],
          correct: 1,
          hint: 'The teacher gives one good result and one confession, each introduced by half of a two-part phrase.',
          explanation:
            'S jedne strane: počeli su više razgovarati, a neki ponovno čitati. S druge strane: nekoliko učenika potajno je otvaralo mreže u pregledniku.',
        },
        {
          q: 'How does the teacher judge the students who cheated?',
          options: [
            'As addicts who need help',
            'As lazy students who did not take the experiment seriously',
            'Not as addicts — as people who are afraid of missing something',
            'As victims of their parents, who are the ones to blame',
          ],
          correct: 2,
          hint: 'The teacher uses "Ne mislim da…" for one explanation and "mislim da…" for another.',
          explanation:
            'Ne mislim da su ovisni o mrežama; mislim da se boje da će nešto propustiti. The teacher rejects the strong word and offers a milder, more human reason.',
        },
        {
          type: 'type',
          q: 'Now you. The week is over, and at recess everything is as before: Opet svi gledaju nešto na svojim ____. (mobitel)',
          answer: 'mobitelima',
          hint: 'Croatian is ON the phone, and here it is a place, not a direction — so na takes the locative, and there are many phones.',
          explanation:
            'na svojim mobitelima — na + the locative for where something is; the plural locative ends in -ima.',
        },
        {
          type: 'transform',
          q: 'Name this as the MAIN good thing about the internet. Begin: "Najveća je prednost to što…"',
          from: 'Možemo učiti od kuće.',
          answer: 'Najveća je prednost to što možemo učiti od kuće.',
          accept: [
            'Najveća prednost je to što možemo učiti od kuće.',
            'Najveća je prednost interneta to što možemo učiti od kuće.',
            'Najveća prednost interneta je to što možemo učiti od kuće.',
          ],
          hint: 'The frame ends in "to što", and the sentence you were given follows it unchanged.',
          explanation:
            'Najveća je prednost to što možemo učiti od kuće. — to što turns a whole sentence into the thing you are naming as the advantage.',
        },
        {
          type: 'transform',
          q: 'Somebody claims this. You are not so sure — report it as something you do NOT believe will happen: "Ne vjerujem da…"',
          from: 'Knjige će nestati.',
          answer: 'Ne vjerujem da će knjige nestati.',
          accept: ['Ne vjerujem da će nestati knjige.', 'Ja ne vjerujem da će knjige nestati.'],
          hint: 'Inside the clause the short future word cannot stay where it was: it moves to the place right after da.',
          explanation:
            'Ne vjerujem da će knjige nestati. — in a da-clause the clitic će comes immediately after da, before the subject.',
        },
      ],
    },
    mix: [
      8,
      4,
      {
        type: 'sort',
        q: 'Where is it? Croatian is ON some of these and IN others. Which preposition goes in front of each?',
        groups: ['na …', 'u …'],
        items: [
          { hr: 'internetu', group: 0 },
          { hr: 'aplikaciji', group: 1 },
          { hr: 'društvenim mrežama', group: 0 },
          { hr: 'pregledniku', group: 1 },
          { hr: 'zaslonu', group: 0 },
          { hr: 'poruci', group: 1 },
        ],
        explanation:
          'na internetu, na društvenim mrežama, na zaslonu — Croatian is "on" the net, the networks and the screen. Inside a program or inside a text it is u: u aplikaciji, u pregledniku, u poruci.',
      },
      9,
      {
        type: 'match',
        q: 'Match each word to what it is.',
        pairs: [
          ['pametni telefon', 'a cell phone that works like a small computer'],
          ['pratitelj', 'someone who regularly reads what you put online'],
          ['objava', 'a text or photo you put on a network for others to see'],
          ['preglednik', 'the program you open websites with'],
          ['lažne vijesti', 'stories that look like news but are not true'],
        ],
        explanation:
          'pametni telefon — a smartphone; pratitelj — a follower (from pratiti, to follow); objava — a post (from objaviti, to publish); preglednik — a browser; lažne vijesti — fake news.',
      },
      10,
      {
        type: 'tf',
        q: '"Spojiti se na internet" takes the accusative because connecting is a movement onto the network.',
        answer: true,
        hint: 'Compare being on the net with getting onto it: a place, or a direction?',
        explanation:
          'True. A direction takes na + the accusative: spojiti se na internet. Once you are there, it is a place, and na takes the locative.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order: "My brother cannot tear himself away from his phone."',
        words: ['Moj', 'brat', 'se', 'ne', 'može', 'odvojiti', 'od', 'mobitela.'],
        accept: [
          'Moj se brat ne može odvojiti od mobitela.',
          'Od mobitela se moj brat ne može odvojiti.',
        ],
        explanation:
          'Moj brat se ne može odvojiti od mobitela. — odvojiti se od + the genitive; the short word se stands early in the sentence, after the first word or the first phrase.',
      },
      11,
      {
        type: 'transform',
        q: 'You have done it. Now tell a friend to do the same (ti).',
        from: 'Preuzeo sam aplikaciju.',
        answer: 'Preuzmi aplikaciju.',
        accept: ['Preuzmi aplikaciju!', 'Preuzmi i ti aplikaciju.', 'I ti preuzmi aplikaciju.'],
        hint: 'The command is built on the present stem, and this verb belongs to the family of uzeti — with the same hidden consonant.',
        explanation:
          'Preuzmi aplikaciju. — preuzeti conjugates like uzeti: preuzmem, so the command is preuzmi.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("In twenty years we will all work from home.")',
        words: ['Za', 'dvadeset', 'godine', 'svi', 'ćemo', 'raditi', 'od', 'kuće.'],
        wrong: 2,
        answer: 'godina',
        hint: 'Which case does a noun take after a number like this one — and is it singular or plural?',
        explanation:
          'Za dvadeset godina svi ćemo raditi od kuće. — after dvadeset the noun is in the genitive plural. godine would follow dvije, tri or četiri.',
      },
      {
        type: 'listen',
        audio: 'Moja baka svaki dan objavljuje fotografije svog vrta i već ima tisuću pratitelja.',
        q: 'What do you learn about the grandmother?',
        options: [
          'She follows a thousand gardeners online',
          'She posts photos of her garden every day and already has a thousand followers',
          'She has a thousand photos of her garden but never posts them',
          'She reads a thousand posts about gardens every day',
        ],
        correct: 1,
        explanation:
          'svaki dan objavljuje fotografije svog vrta — she posts garden photos daily; već ima tisuću pratitelja — and already has a thousand followers.',
      },
      {
        type: 'dictate',
        audio: 'Lažne vijesti brzo se šire.',
        answer: 'Lažne vijesti brzo se šire.',
        accept: ['Lažne se vijesti brzo šire.', 'Lažne vijesti se brzo šire.'],
        hint: 'Four words: "Fake news spreads fast."',
        explanation:
          'Lažne vijesti brzo se šire. — vijesti is plural in Croatian, so the verb is plural too: šire se.',
      },
    ],
  },

  // ── The history of the language ────────────────────────────────────────────
  'language-history': {
    text: {
      kind: 'text',
      title: 'Vodič kraj Bašćanske ploče',
      lines: [
        {
          hr: 'Dobro došli u Jurandvor na otoku Krku, u crkvu u kojoj se stoljećima čuvala Bašćanska ploča.',
          en: 'Welcome to Jurandvor on the island of Krk, to the church where the Baška tablet was kept for centuries.',
        },
        {
          hr: 'Ploča je nastala oko 1100. godine i jedan je od najstarijih hrvatskih spomenika.',
          en: 'The tablet was made around the year 1100 and is one of the oldest Croatian monuments.',
        },
        {
          hr: 'Slova koja vidite nisu latinica, nego glagoljica — pismo koje se na obali i otocima koristilo gotovo tisuću godina.',
          en: 'The letters you see are not the Latin alphabet but Glagolitic — a script that was used on the coast and the islands for almost a thousand years.',
        },
        {
          hr: 'Danas pišemo gajicom, koja je ime dobila po Ljudevitu Gaju; on je u devetnaestom stoljeću uveo slova kao što su č, š i ž.',
          en: 'Today we write in "gajica", which got its name from Ljudevit Gaj; in the nineteenth century he introduced letters such as č, š and ž.',
        },
        {
          hr: 'Gaj i njegovi prijatelji, ilirci, odabrali su štokavsko narječje kao temelj zajedničkoga standardnog jezika.',
          en: 'Gaj and his friends, the Illyrians, chose the Štokavian dialect as the basis of a shared standard language.',
        },
        {
          hr: 'Ipak, druga dva narječja nisu nestala: ovdje na Krku i danas ćete čuti „ča”, a u Zagrebu „kaj”.',
          en: 'Still, the other two dialects have not disappeared: here on Krk you will hear "ča" to this day, and in Zagreb "kaj".',
        },
        {
          hr: 'Moja baka, na primjer, nikad nije rekla „što” — za nju je to bila riječ iz knjiga i s televizije.',
          en: 'My grandmother, for example, never said "što" — for her that was a word from books and from television.',
        },
        {
          hr: 'Zato kažem da svatko od nas govori barem dva hrvatska jezika: onaj koji je naučio kod kuće i onaj koji je naučio u školi.',
          en: 'That is why I say that each of us speaks at least two Croatian languages: the one learned at home and the one learned at school.',
        },
        {
          hr: 'A sada pogledajte ploču izbliza — i nemojte se brinuti ako ne možete pročitati ni riječi. Bez pomoći ne mogu ni ja!',
          en: 'And now take a close look at the tablet — and don’t worry if you can’t read a single word. Without help, neither can I!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: how old is the tablet, and what is it written in?',
          options: [
            'It is from the nineteenth century, written in Gaj’s alphabet',
            'It is from around 1100, written in Glagolitic',
            'It is from around 1100, written in the Latin alphabet',
            'It is about a hundred years old, written in Glagolitic',
          ],
          correct: 1,
          hint: 'The guide says the letters are NOT the ones we use today, and gives a year with two zeros.',
          explanation:
            'Ploča je nastala oko 1100. godine, and its letters are glagoljica — the script used on the coast and the islands for almost a thousand years.',
        },
        {
          q: 'Why does the guide say that everyone speaks "barem dva hrvatska jezika"?',
          options: [
            'Because every Croatian learns a foreign language at school',
            'Because people grow up with a home dialect and then learn the standard language at school',
            'Because Croatian is written in two alphabets today',
            'Because old people and young people cannot understand each other',
          ],
          correct: 1,
          hint: 'Think of the grandmother and the word she never said.',
          explanation:
            'The grandmother said ča at home; što was for her a word from books and television. The dialect of home and the standard of school live side by side in the same speaker.',
        },
        {
          type: 'type',
          q: 'Now you. The guide’s grandmother from Krk never said „što”, because at home she spoke ____. (the dialect named after her word for "what")',
          answer: 'čakavski',
          accept: ['čakavicom', 'čakavštinom'],
          hint: 'Each dialect is named after its word for "what" — hers is the one heard on the coast and the islands.',
          explanation:
            'čakavski — named after ča, and spoken on the coast, in Istria and on the islands. The standard is built on štokavski, named after što.',
        },
        {
          type: 'transform',
          q: 'A visitor is impressed. Raise the praise to the top: say that this is the MOST beautiful monument on the island.',
          from: 'Ovo je lijep spomenik.',
          answer: 'Ovo je najljepši spomenik na otoku.',
          accept: [
            'Ovo je najljepši spomenik na cijelom otoku.',
            'To je najljepši spomenik na otoku.',
          ],
          hint: 'The comparative and superlative add a syllable, and the long ije of the adjective does not stay long.',
          explanation:
            'Ovo je najljepši spomenik na otoku. — lijep has the long reflex of jat, ije; in ljepši and najljepši it shortens to je, and l + j is written lj.',
        },
        {
          type: 'transform',
          q: 'One child is reading the Glagolitic letters. Now make it the whole school group — the plural of this noun.',
          from: 'Dijete čita glagoljicu.',
          answer: 'Djeca čitaju glagoljicu.',
          accept: ['Djeca glagoljicu čitaju.'],
          hint: 'The plural is a collective noun with the short reflex of jat — and although it declines like a singular, its verb is plural.',
          explanation:
            'Djeca čitaju glagoljicu. — dijete has the long ije, djeca the short je: the same thousand-year-old alternation. And djeca takes a plural verb.',
        },
      ],
    },
    mix: [
      5,
      2,
      6,
      {
        type: 'sort',
        q: 'Which word for "what" would you expect to hear in each place?',
        groups: ['ča — the coast, Istria and the islands', 'kaj — Zagreb and the northwest'],
        items: [
          { hr: 'Zagorje', group: 1 },
          { hr: 'Krk', group: 0 },
          { hr: 'Varaždin', group: 1 },
          { hr: 'Brač', group: 0 },
          { hr: 'Međimurje', group: 1 },
          { hr: 'Hvar', group: 0 },
          { hr: 'Cres', group: 0 },
        ],
        explanation:
          'Krk, Brač, Hvar and Cres are islands: ča. Zagorje, Varaždin and Međimurje lie in the northwest, north of Zagreb: kaj.',
      },
      7,
      {
        type: 'tf',
        q: 'The word for a dictionary is spelled "riječnik", because it is built from "riječ".',
        answer: false,
        hint: 'What usually happens to the long ije when a word gets longer?',
        explanation:
          'False. riječ has the long ije, but in the longer, derived word the jat is short and is written je: rječnik — the same alternation as dijete → djeca.',
      },
      8,
      {
        type: 'transform',
        q: 'This is how people say it over coffee. Rewrite it for a formal report, with the native Croatian words for the two loanwords.',
        from: 'Naša firma ima ured blizu aerodroma.',
        answer: 'Naša tvrtka ima ured blizu zračne luke.',
        accept: ['Naša tvrtka ima ured u blizini zračne luke.'],
        hint: 'Both nouns have a native partner. The second is two words, an adjective and a noun, and after blizu both of them go into the genitive.',
        explanation:
          'Naša tvrtka ima ured blizu zračne luke. — firma is colloquial, and the official word for an aerodrom is zračna luka; formal written Croatian prefers the native words. blizu takes the genitive: zračne luke.',
      },
      {
        type: 'match',
        q: 'Two words for one thing. Match the native Croatian word to the loanword that means the same.',
        pairs: [
          ['glazba', 'muzika'],
          ['kazalište', 'teatar'],
          ['računalo', 'kompjutor'],
          ['zrakoplov', 'avion'],
        ],
        explanation:
          'Croatian has a long tradition of building its own words. The native word is the one for writing and formal speech; the loanword is colloquial or belongs to set phrases and names.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The standard language is based on the Štokavian dialect."',
        words: ['Standardni', 'jezik', 'temelji', 'se', 'na', 'štokavskom', 'narječju.'],
        accept: [
          'Standardni se jezik temelji na štokavskom narječju.',
          'Standardni jezik se temelji na štokavskom narječju.',
          'Na štokavskom narječju temelji se standardni jezik.',
          'Na štokavskom se narječju temelji standardni jezik.',
        ],
        explanation:
          'Standardni jezik temelji se na štokavskom narječju. — temeljiti se na + the locative: to be based on.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['On', 'je', 'svijetski', 'poznat', 'pisac.'],
        wrong: 2,
        answer: 'svjetski',
        hint: 'This adjective is derived from svijet — which reflex of jat belongs in the longer, derived word?',
        explanation:
          'On je svjetski poznat pisac. — svijet has the long ije, but the derived adjective takes the short reflex: svjetski, like lijep → ljepši.',
      },
      {
        type: 'listen',
        audio: 'Moja baka iz Zagorja govori kajkavski, a djed s Brača čakavski.',
        q: 'Who speaks what?',
        options: [
          'Both grandparents speak the standard language',
          'Grandma from Zagorje speaks Kajkavian, and Grandpa from Brač speaks Čakavian',
          'Grandma from Brač speaks Čakavian, and Grandpa from Zagorje speaks Kajkavian',
          'Grandma speaks Čakavian and Grandpa speaks Štokavian',
        ],
        correct: 1,
        explanation:
          'baka iz Zagorja — the northwest, so kajkavski; djed s Brača — an island, so čakavski.',
      },
      {
        type: 'dictate',
        audio: 'Svaka riječ ima svoju povijest.',
        answer: 'Svaka riječ ima svoju povijest.',
        hint: 'Five words: "Every word has its own history."',
        explanation:
          'Svaka riječ ima svoju povijest. — riječ and povijest both carry the long reflex of jat, written ije.',
      },
    ],
  },
};
