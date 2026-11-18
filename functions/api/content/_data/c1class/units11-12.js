// ─── C1 lessons in class order — Units 11–12 (lessons 51–60) ─────────────────
// Same shape and rules as units01-02.js:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Notes for this block:
// - The literary tenses (aorist, imperfekt, bijah-pluperfect) are always ASKED
//   FOR by name; the everyday perfekt is never marked wrong.
// - Existing typed items come before anything in the mix that prints their
//   answer, and each text avoids the forms those items ask for wherever the
//   lesson allows it (the comparative conjunctions cannot be avoided).
// - The player ignores capitals and punctuation in typed and ordered answers,
//   so quotation marks, commas and capitals are tested with tf, sort, match
//   and fix (tap-only), never with type, transform, order or dictate.
// - Quotation marks are „…” with ‚…’ inside them.

export const CLASS_C1_U11_12 = {
  // ══ UNIT 11 ════════════════════════════════════════════════════════════════

  // ── Aorist & imperfekt ─────────────────────────────────────────────────────
  'aorist-imperfekt': {
    text: {
      kind: 'text',
      title: 'Povratak',
      lines: [
        {
          hr: 'Bijaše kasna jesen i bura puhaše već treći dan kad se Jakov, nakon dvadeset godina, uputi prema rodnom selu.',
          en: 'It was late fall and the bura had been blowing for three days when Jakov, after twenty years, set out for his native village.',
        },
        {
          hr: 'Cesta se penjaše uz brdo, a on koračaše polako, kao čovjek koji se boji onoga što će naći.',
          en: 'The road climbed the hill, and he walked slowly, like a man who is afraid of what he will find.',
        },
        {
          hr: 'Na vrhu zastade, okrenu se i pogleda dolje: u uvali svijetljahu samo dva prozora.',
          en: 'At the top he stopped, turned around and looked down: in the cove only two windows were shining.',
        },
        {
          hr: 'Pred prvom kućom stajaše starica i hranjaše kokoši; kad ču korake, podiže glavu.',
          en: 'In front of the first house an old woman stood feeding the hens; when she heard footsteps, she raised her head.',
        },
        {
          hr: '„Koga tražiš, sinko?” upita ga, a on joj ne odgovori odmah.',
          en: '“Who are you looking for, son?” she asked him, and he did not answer her right away.',
        },
        {
          hr: '„Tražim kuću Marka Barića”, reče napokon, „ako još stoji.”',
          en: '“I am looking for Marko Barić’s house,” he said at last, “if it is still standing.”',
        },
        {
          hr: 'Starica ga dugo gledaše, a onda ispusti zdjelu i prekriži se.',
          en: 'The old woman looked at him for a long time, and then she dropped the bowl and crossed herself.',
        },
        {
          hr: '„Jakove, jesi li to ti?” prošapta. „Rekoše nam da si poginuo, pa ti platismo misu za dušu.”',
          en: '“Jakov, is that you?” she whispered. “They told us you had been killed, so we paid for a Mass for your soul.”',
        },
        {
          hr: '„Kako vidite, pogriješiše”, odvrati on i prvi se put te večeri nasmiješi.',
          en: '“As you can see, they were wrong,” he replied, and for the first time that evening he smiled.',
        },
        {
          hr: 'Uđoše u kuću; na ognjištu gorjaše vatra, a na zidu još visjaše očeva slika.',
          en: 'They went into the house; a fire was burning on the hearth, and his father’s picture was still hanging on the wall.',
        },
        {
          hr: 'Te noći ne zaspa ni on ni ona: pričahu do zore, a kad zapjevaše prvi pijetlovi, starica reče: „Sad odoh leći, a ti ostani — ova te kuća dugo čekaše.”',
          en: 'That night neither he nor she fell asleep: they talked until dawn, and when the first roosters crowed, the old woman said: “Now I am off to bed, and you stay — this house waited for you a long time.”',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: why does the old woman drop the bowl and cross herself?',
          options: [
            'She takes Jakov for a thief who has come to the empty house',
            'The village had been told that he was dead and had paid for a Mass for his soul',
            'She recognizes in him the man who once ruined her family',
            'He tells her that Marko Barić has died abroad',
          ],
          correct: 1,
          hint: 'Recall what she whispers right after she says his name.',
          explanation:
            'Rekoše nam da si poginuo, pa ti platismo misu za dušu. — the village believed him dead. For her, a man is standing there whom they had already mourned.',
        },
        {
          q: 'In "Starica ga dugo gledaše, a onda ispusti zdjelu" the first verb is an imperfekt and the second an aorist. Why does the narrator change tense in the middle of the sentence?',
          options: [
            'Because gledaše is plural and ispusti is singular',
            'Because the imperfekt is used for women and the aorist for objects',
            'Because looking lasts and forms the background, while dropping the bowl is one sudden, completed event',
            'Because a sentence may not contain the same literary tense twice',
          ],
          correct: 2,
          hint: 'Ask of each verb: is it imperfective or perfective — and which of the two actions could you film in a single frame?',
          explanation:
            'gledati is imperfective: a long look is a lasting state, so it takes the imperfekt (gledaše). ispustiti is perfective: one sudden act, so it takes the aorist (ispusti). The imperfekt paints the background; the aorist moves the story forward.',
        },
        {
          type: 'type',
          q: 'Continue the story in the same literary tense: Jakov uđe u kuhinju i ____ za stol. (sjesti — aorist, 3rd singular)',
          answer: 'sjede',
          hint: 'The aorist of this verb is built on the stem that the present (sjednem) also shows, with a d; the third person singular has no personal ending after the -e.',
          explanation:
            'sjede — sjesti: sjedoh, sjede, sjede, sjedosmo, sjedoste, sjedoše. In everyday Croatian you would say sjeo je; the aorist gives the quick narrative beat.',
        },
        {
          type: 'transform',
          q: 'Retell this in the literary style: put both verbs into the aorist.',
          from: 'Starica je ustala i zagrlila ga.',
          answer: 'Starica ustade i zagrli ga.',
          accept: [
            'Starica ustade te ga zagrli.',
            'Starica usta i zagrli ga.',
            'Starica usta te ga zagrli.',
          ],
          hint: 'Both verbs are perfective, so both can take this tense. The auxiliary disappears, and each verb becomes a single word.',
          explanation:
            'Starica ustade i zagrli ga. — ustati has two standard aorists, ustadoh / ustade and the shorter ustah / usta; zagrliti: zagrlih, zagrli. The aorist is one word: no je, no participle. The perfekt of the original is, of course, just as correct — only less literary.',
        },
        {
          type: 'transform',
          q: 'Now the background: put the verb into the imperfekt.',
          from: 'U selu su lajali psi.',
          answer: 'U selu lajahu psi.',
          accept: ['Psi lajahu u selu.', 'U selu psi lajahu.'],
          hint: 'lajati is imperfective, which is what this tense needs. The third person plural has its own ending, different from the aorist -še.',
          explanation:
            'U selu lajahu psi. — the imperfekt of lajati: lajah, lajaše, lajaše, lajasmo, lajaste, lajahu. The third person plural ends in -hu; -še in the plural belongs to the aorist (rekoše, uđoše).',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'A speaker of today’s Croatian who gets up from the table and says "Odoh ja, kasnim!" is using an aorist.',
        answer: true,
        hint: 'Which verb is hiding in the first word — and is that verb perfective?',
        explanation:
          'True. odoh is the first person singular aorist of otići. In everyday speech the aorist survives in a few short, lively forms — odoh, rekoh, dođoh — often to announce something the speaker is about to do at once: "I am off."',
      },
      11,
      {
        type: 'sort',
        q: 'Aorist or imperfekt?',
        groups: ['Aorist — one completed event', 'Imperfekt — a lasting background'],
        items: [
          { hr: 'Vrata se otvoriše.', group: 0 },
          { hr: 'Kiša padaše cijelu noć.', group: 1 },
          { hr: 'Putnik zastade pred kućom.', group: 0 },
          { hr: 'Zvona zvonjahu u daljini.', group: 1 },
          { hr: 'Rekosmo mu istinu.', group: 0 },
          { hr: 'Bijasmo mladi i bezbrižni.', group: 1 },
        ],
        explanation:
          'The aorist comes from perfective verbs and narrates single completed events (otvoriše, zastade, rekosmo). The imperfekt comes from imperfective verbs and paints what was going on (padaše, zvonjahu, bijasmo). Note the third person plural: -še in the aorist, -hu in the imperfekt.',
      },
      9,
      {
        type: 'match',
        q: 'Match each aorist of doći to its everyday equivalent.',
        pairs: [
          ['dođoh', 'došao sam'],
          ['dođe', 'došao je'],
          ['dođosmo', 'došli smo'],
          ['dođoste', 'došli ste'],
          ['dođoše', 'došli su'],
        ],
        explanation:
          'doći: dođoh, dođe, dođe, dođosmo, dođoste, dođoše. The aorist carries person and number in its ending, so it needs neither an auxiliary nor a participle; the perfekt says the same thing in everyday style.',
      },
      10,
      0,
      {
        type: 'order',
        q: 'Put the words in order: "I saw him and recognized him at once."',
        words: ['Vidjeh', 'ga', 'i', 'odmah', 'ga', 'prepoznah.'],
        accept: ['Vidjeh ga i prepoznah ga odmah.'],
        explanation:
          'Vidjeh ga i odmah ga prepoznah. — two first-person aorists in -h. Each clause has its own clitic ga, which leans on the first stressed word of its clause: Vidjeh ga; odmah ga prepoznah (or prepoznah ga odmah).',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Both brothers got up and went out.")',
        words: ['Oba', 'brata', 'ustade', 'i', 'izađoše.'],
        wrong: 2,
        answer: 'ustadoše',
        hint: 'Count the people who got up, then check the person and number of that verb.',
        explanation:
          'Oba brata ustadoše i izađoše. — ustade is the second and third person SINGULAR; two brothers need the third person plural, which in the aorist ends in -še (ustadoše, or the shorter ustaše).',
      },
      3,
      {
        type: 'transform',
        q: 'Rewrite in the everyday past (perfekt).',
        from: 'Sjedoše za stol i zapjevaše.',
        answer: 'Sjeli su za stol i zapjevali.',
        accept: [
          'Sjeli su za stol i zapjevali su.',
          'Oni su sjeli za stol i zapjevali.',
          'Sjele su za stol i zapjevale.',
          'Sjele su za stol i zapjevale su.',
          'One su sjele za stol i zapjevale.',
        ],
        hint: 'Both verbs are third person plural. The everyday tense needs an auxiliary and a participle; one auxiliary can serve both verbs.',
        explanation:
          'Sjeli su za stol i zapjevali. — every aorist has a perfekt equivalent, and in conversation the perfekt is the normal choice. What is lost is only the pace: three short aorists in a row read like quick cuts in a movie.',
      },
      7,
      {
        type: 'listen',
        audio: 'Dok starac spavaše, djeca tiho izađoše iz kuće i otrčaše na obalu.',
        q: 'What happened?',
        options: [
          'The old man woke up and sent the children to the shore',
          'While the old man slept, the children quietly left the house and ran to the shore',
          'The children were sleeping while the old man walked along the shore',
          'The old man and the children quietly left the house together',
        ],
        correct: 1,
        explanation:
          'spavaše is an imperfekt — the background (he was sleeping); izađoše and otrčaše are aorists, third person plural — the two quick events in front of it. Dok + imperfekt is the classic frame for an aorist narrative.',
      },
      {
        type: 'dictate',
        audio: 'Rekoh ti da ne ideš tamo.',
        answer: 'Rekoh ti da ne ideš tamo.',
        hint: 'Six words: "I told you not to go there." The first verb is an aorist.',
        explanation:
          'Rekoh ti da ne ideš tamo. — rekoh is the aorist that everybody still uses in speech; it gives the reproach more punch than rekao sam ti.',
      },
    ],
  },

  // ── Pluperfect & tense sequencing ──────────────────────────────────────────
  pluskvamperfekt: {
    text: {
      kind: 'dialogue',
      title: 'Nakon četrdeset godina',
      lines: [
        {
          who: 'Novinarka',
          hr: 'Gospodine Lovriću, vratili ste se u Komižu nakon četrdeset godina. Jeste li zatekli mjesto kakvo ste ostavili?',
          en: 'Mr. Lovrić, you have come back to Komiža after forty years. Did you find the town the way you left it?',
        },
        {
          who: 'Lovrić',
          hr: 'Nipošto. Kad smo se žena i ja iskrcali s trajekta, shvatili smo da je mjesto koje smo pamtili već odavno bilo nestalo.',
          en: 'Not at all. When my wife and I got off the ferry, we realized that the town we remembered had long since disappeared.',
        },
        {
          who: 'Novinarka',
          hr: 'Što Vas je najviše iznenadilo?',
          en: 'What surprised you most?',
        },
        {
          who: 'Lovrić',
          hr: 'Tvornica sardina. Znao sam da su je zatvorili, ali nisam znao da su je još prije toga bili prodali strancima, i to u bescjenje.',
          en: 'The sardine factory. I knew they had closed it, but I did not know that even before that they had sold it to foreigners, and for next to nothing.',
        },
        {
          who: 'Novinarka',
          hr: 'A obiteljska kuća? Čula sam da je dugo stajala prazna.',
          en: 'And the family house? I heard that it stood empty for a long time.',
        },
        {
          who: 'Lovrić',
          hr: 'Stajala je. Sestre su se bile udale i odselile u Split još dok sam ja plovio, a roditelji su, kako sam poslije doznao, bili prepisali kuću na strica prije nego što su umrli.',
          en: 'It did. My sisters had married and moved to Split while I was still at sea, and my parents, as I found out later, had signed the house over to my uncle before they died.',
        },
        {
          who: 'Novinarka',
          hr: 'Dakle, kad ste se vratili, kuća više nije pripadala Vama?',
          en: 'So when you came back, the house no longer belonged to you?',
        },
        {
          who: 'Lovrić',
          hr: 'Nije. Stric ju je, srećom, sačuvao: sve je ostalo ondje gdje su to roditelji bili ostavili, čak i očeve mreže.',
          en: 'It did not. Luckily, my uncle looked after it: everything stayed where my parents had left it, even my father’s nets.',
        },
        {
          who: 'Novinarka',
          hr: 'Jeste li ikad požalili što ste otišli?',
          en: 'Have you ever regretted leaving?',
        },
        {
          who: 'Lovrić',
          hr: 'Požalio sam tek kad sam shvatio koliko sam toga propustio. Sinovi mojih prijatelja već su bili odrasli, a ja im nisam znao ni imena. Zato sam učinio ono što bijah obećao ocu na rastanku, kako bi se reklo u starim knjigama: vratio sam se — kasno, ali ipak.',
          en: 'I regretted it only when I realized how much I had missed. My friends’ sons had already grown up, and I did not even know their names. So I did what I had promised my father when we parted, as the old books would put it: I came back — late, but still.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what had happened to the family house while Mr. Lovrić was away?',
          options: [
            'His sisters had sold it to foreigners for next to nothing',
            'It had been turned into part of the sardine factory',
            'His parents had signed it over to his uncle, who kept everything as it was',
            'It had collapsed after standing empty for forty years',
          ],
          correct: 2,
          hint: 'Recall who looked after it — and whose nets are still there.',
          explanation:
            'Roditelji su bili prepisali kuću na strica prije nego što su umrli, and the uncle kept it: sve je ostalo ondje gdje su to roditelji bili ostavili. The thing sold to foreigners was the factory.',
        },
        {
          q: 'Lovrić says: "Znao sam da su je zatvorili, ali nisam znao da su je još prije toga bili prodali strancima." Why "bili prodali" and not simply "prodali"?',
          options: [
            'Because reported knowledge (nisam znao da…) always requires the pluperfect',
            'Because a plural subject needs two participles',
            'Because the factory still belongs to the foreigners today',
            'Because the sale came before another past event, the closing, and the pluperfect marks it as the earlier of the two',
          ],
          correct: 3,
          hint: 'Put the two events on a timeline: the closing and the sale. Which one is further back?',
          explanation:
            'The closing is already in the past (su je zatvorili); the sale lies behind it, and bili prodali marks exactly that. "da su je još prije toga prodali" would also be correct Croatian — the pluperfect is never obligatory — but then only "još prije toga" would carry the order of events.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one that begins with "Kad smo stigli…". Mark the EARLIER event with the pluperfect and add "već".',
          from: 'Gosti su otišli. Stigli smo poslije toga.',
          answer: 'Kad smo stigli, gosti su već bili otišli.',
          accept: [
            'Kad smo stigli, gosti su bili već otišli.',
            'Kad smo stigli, već su bili otišli gosti.',
            'Kad smo stigli, gosti već bijahu otišli.',
            'Kad smo stigli, gosti bijahu već otišli.',
            'Kad smo stigli, već su gosti bili otišli.',
          ],
          hint: 'The pluperfect goes on the event that happened first, and only on that one: the perfekt of biti plus the participle, both agreeing with a masculine plural subject.',
          explanation:
            'Kad smo stigli, gosti su već bili otišli. — the guests left FIRST, so their leaving takes su bili otišli; our arrival stays in the plain perfekt. Putting the pluperfect on the arrival (Kad smo bili stigli…) would reverse the order.',
        },
        {
          type: 'type',
          q: 'Say it the way an old novel would. "Bili smo zaboravili put." → ____ zaboravili put. (the imperfekt of biti, 1st person plural)',
          answer: 'Bijasmo',
          accept: ['Bjesmo'],
          hint: 'Lovrić uses the first person singular of this auxiliary in his last answer. For "we" it takes the same ending that the aorist has in that person.',
          explanation:
            'Bijasmo zaboravili put. — the literary pluperfect uses the imperfekt of biti (bijah for "I", bijasmo for "we") in place of the perfekt (bili smo). It replaces the auxiliary; the two are never combined.',
        },
        {
          type: 'transform',
          q: 'Report this as something that had happened before he found out. Begin with "Nije znao da…" and use the pluperfect.',
          from: 'Sestre su mu poslale pismo.',
          answer: 'Nije znao da su mu sestre bile poslale pismo.',
          accept: [
            'Nije znao da su mu sestre već bile poslale pismo.',
            'Nije znao da su mu sestre bile pismo poslale.',
            'Nije znao da su mu bile poslale pismo.',
          ],
          hint: 'Inside the new clause the short words follow "da" at once; the extra participle agrees with a feminine plural subject.',
          explanation:
            'Nije znao da su mu sestre bile poslale pismo. — the sending precedes his not knowing, so it takes su bile poslale; both participles are feminine plural, and the clitics su mu move up to stand right after da.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '"Nakon što je završio studij, odselio se u Zadar." is incomplete Croatian: after "nakon što" the earlier action must stand in the pluperfect.',
        answer: false,
        hint: 'Ask what already tells the reader which of the two events came first.',
        explanation:
          'False. The conjunction nakon što already fixes the order, so the plain perfekt is fully standard. The pluperfect is possible there but never required; Croatian uses it far less often than English uses "had".',
      },
      5,
      {
        type: 'sort',
        q: 'What does the verb form say?',
        groups: [
          'Had done (pluperfect)',
          'Would have done (past conditional)',
          'Did (plain perfekt)',
        ],
        items: [
          { hr: 'Bili smo zaboravili ključeve.', group: 0 },
          { hr: 'Bili bismo zaboravili ključeve.', group: 1 },
          { hr: 'Zaboravili smo ključeve.', group: 2 },
          { hr: 'Bile su već zaspale.', group: 0 },
          { hr: 'Bile bi već zaspale.', group: 1 },
          { hr: 'Već su zaspale.', group: 2 },
        ],
        explanation:
          'One small word separates a fact from a non-event: bili smo zaboravili (we had forgotten — it happened) against bili bismo zaboravili (we would have forgotten — it did not). The pluperfect is the perfekt of biti plus a participle; the past conditional is the conditional of biti plus a participle.',
      },
      6,
      {
        type: 'match',
        q: 'Match the everyday pluperfect to its literary twin.',
        pairs: [
          ['bio sam rekao', 'bijah rekao'],
          ['bila je rekla', 'bijaše rekla'],
          ['bili smo rekli', 'bijasmo rekli'],
          ['bili ste rekli', 'bijaste rekli'],
        ],
        explanation:
          'The literary pluperfect swaps the perfekt of biti for its imperfekt: bio sam → bijah, bila je → bijaše, bili smo → bijasmo, bili ste → bijaste. The participle of the main verb stays exactly as it was and still agrees with the subject.',
      },
      7,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Only then did she realize what she had done."',
        words: ['Tek', 'je', 'tada', 'shvatila', 'što', 'je', 'bila', 'učinila.'],
        accept: [
          'Tek tada je shvatila što je bila učinila.',
          'Tada je tek shvatila što je bila učinila.',
        ],
        explanation:
          'Tek je tada shvatila što je bila učinila. — the deed precedes the realization, so it takes je bila učinila. In the main clause the clitic je may split the opening phrase (Tek je tada) or follow it (Tek tada je); in the što-clause it follows što directly.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("When we came back, the neighbors — all women — had already left.")',
        words: ['Kad', 'smo', 'se', 'vratili,', 'susjede', 'su', 'već', 'bile', 'otišli.'],
        wrong: 8,
        answer: 'otišle.',
        hint: 'The pluperfect has two participles, and both must agree with the subject. One of them does not.',
        explanation:
          'Kad smo se vratili, susjede su već bile otišle. — susjede is feminine plural, so both participles end in -e: bile otišle. Agreement is the commonest slip in this tense, because there are two forms to keep in step.',
      },
      1,
      {
        type: 'transform',
        q: 'This sentence is in the literary register. Rewrite it in everyday standard Croatian: the perfekt for the later event, the pluperfect with the perfekt of biti for the earlier one.',
        from: 'Kad stigosmo u luku, brod već bijaše isplovio.',
        answer: 'Kad smo stigli u luku, brod je već bio isplovio.',
        accept: [
          'Kad smo stigli u luku, brod je bio već isplovio.',
          'Kad smo stigle u luku, brod je već bio isplovio.',
          'Kad smo stigle u luku, brod je bio već isplovio.',
        ],
        hint: 'The aorist becomes an auxiliary plus a participle; the one-word literary auxiliary of the pluperfect becomes two words.',
        explanation:
          'Kad smo stigli u luku, brod je već bio isplovio. — stigosmo → smo stigli; bijaše isplovio → je bio isplovio. The literary pair (aorist + bijaše) and the everyday pair (perfekt + je bio) say exactly the same thing.',
      },
      2,
      {
        type: 'listen',
        audio:
          'Nisam mu se javila jer sam bila izgubila njegov broj, a on je mislio da sam ga zaboravila.',
        q: 'Why did she not get in touch?',
        options: [
          'She had forgotten him, and he had lost her number',
          'He had asked her not to call him anymore',
          'She had lost his number; he thought she had forgotten him',
          'She thought he had changed his number',
        ],
        correct: 2,
        explanation:
          'jer sam bila izgubila njegov broj — losing the number came before not calling, so it stands in the pluperfect. His mistaken belief follows: on je mislio da sam ga zaboravila.',
      },
      {
        type: 'dictate',
        audio: 'Vlak je već bio otišao.',
        answer: 'Vlak je već bio otišao.',
        hint: 'Five words: "The train had already left."',
        explanation:
          'Vlak je već bio otišao. — the perfekt of biti (je bio) plus the participle otišao, both masculine singular like vlak; već sits naturally between the auxiliary and bio.',
      },
    ],
  },

  // ── Comparative clauses ────────────────────────────────────────────────────
  'comparative-clauses': {
    text: {
      kind: 'dialogue',
      title: 'Obnova stana',
      lines: [
        {
          who: 'Dora',
          hr: 'Dakle, je li obnova stana napokon gotova ili se samo ponašaš kao da jest?',
          en: 'So, is the apartment renovation finally finished, or are you just acting as if it were?',
        },
        {
          who: 'Vinko',
          hr: 'Gotova je, ali potrajala je dvostruko dulje nego što su nam majstori obećali — i stajala, dakako, više nego što smo ikad mislili potrošiti.',
          en: 'It is finished, but it took twice as long as the workmen promised us — and cost, of course, more than we ever thought we would spend.',
        },
        {
          who: 'Dora',
          hr: 'Kao što sam ti i rekla: s majstorima uvijek računaj na najgore.',
          en: 'Just as I told you: with workmen, always count on the worst.',
        },
        {
          who: 'Vinko',
          hr: 'Rekla si, priznajem. Što sam ih češće zvao, to su se rjeđe javljali, a kad bi se javili, razgovarali su sa mnom kao da im ja dugujem novac, a ne oni meni posao.',
          en: 'You did, I admit. The more often I called them, the less often they answered, and when they did answer, they talked to me as if I owed them money, and not they me the work.',
        },
        {
          who: 'Dora',
          hr: 'A kupaonica? Je li barem ona ispala po vašoj zamisli?',
          en: 'And the bathroom? Did that at least turn out the way you had pictured it?',
        },
        {
          who: 'Vinko',
          hr: 'Ljepša je nego što sam se usudio nadati. Pločice su postavili točno kao što je Iva nacrtala, do zadnjeg centimetra.',
          en: 'It is nicer than I dared to hope. They laid the tiles exactly as Iva had drawn them, down to the last centimeter.',
        },
        {
          who: 'Dora',
          hr: 'Onda se nemaš na što žaliti. Koliko si se namučio, toliko sad možeš uživati.',
          en: 'Then you have nothing to complain about. As much as you suffered, that is how much you can enjoy it now.',
        },
        {
          who: 'Vinko',
          hr: 'Uživao bih kad Iva ne bi već govorila kao da je kuhinja sljedeća na redu.',
          en: 'I would enjoy it if Iva were not already talking as if the kitchen were next in line.',
        },
        {
          who: 'Dora',
          hr: 'I što ćeš joj reći?',
          en: 'And what are you going to tell her?',
        },
        {
          who: 'Vinko',
          hr: 'Da bih radije još deset godina kuhao na starom štednjaku nego da ponovno pola godine živim u prašini.',
          en: 'That I would rather cook on the old stove for another ten years than live in dust for half a year again.',
        },
        {
          who: 'Dora',
          hr: 'Onda joj to reci još večeras. Što prije, to bolje — poslije će biti teže nego što misliš.',
          en: 'Then tell her that tonight. The sooner, the better — later it will be harder than you think.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how did the workmen treat Vinko during the renovation?',
          options: [
            'They finished early but charged him twice the agreed price',
            'The more often he called, the less often they answered — and they spoke to him as if he owed them money',
            'They ignored Iva’s drawing and laid the tiles their own way',
            'They refused to start on the kitchen until the bathroom was paid for',
          ],
          correct: 1,
          hint: 'Recall what happened when he phoned them, and the tone they took when they did pick up.',
          explanation:
            'Što sam ih češće zvao, to su se rjeđe javljali, and they talked to him kao da im on duguje novac. The bathroom, on the other hand, came out exactly as Iva had drawn it.',
        },
        {
          q: 'Vinko says: "razgovarali su sa mnom kao da im ja dugujem novac". The main verb is in the past. Why is "dugujem" in the present?',
          options: [
            'Because the tense in a kao da clause is measured from the main action: an appearance that held at that same moment stays in the present',
            'Because he really does still owe them money today',
            'Because kao da can only ever be followed by the present tense',
            'Because dugovati has no past tense in standard Croatian',
          ],
          correct: 0,
          hint: 'English says "as if I owed". Ask whether the owing would be earlier than the talking or at the same time.',
          explanation:
            'Croatian does not shift the tense after kao da. The appearance (I owe them) is simultaneous with the talking, so the present stays: razgovarali su kao da im dugujem. A perfekt there would mean something earlier — kao da sam im ostao dužan — and a future something later: Izgleda kao da će padati kiša.',
        },
        {
          type: 'transform',
          q: 'Vinko is surprised. Join the two sentences into ONE comparison: a comparative, then a clause.',
          from: 'Kuhinja je mala. Nisam je takvom pamtio.',
          answer: 'Kuhinja je manja nego što sam je pamtio.',
          accept: [
            'Kuhinja je manja nego što sam pamtio.',
            'Kuhinja je manja nego što sam ju pamtio.',
            'Kuhinja je manja negoli sam je pamtio.',
            'Kuhinja je manja negoli sam pamtio.',
            'Kuhinja je manja no što sam je pamtio.',
            'Kuhinja je manja no što sam pamtio.',
          ],
          hint: 'The adjective needs its (irregular) comparative. A whole clause follows it, so "od" will not do — and the clause itself becomes positive.',
          explanation:
            'Kuhinja je manja nego što sam je pamtio. — mali → manji. Before a noun you may choose od or nego (manja od sobe), but only nego što can introduce a clause. The negation disappears: the comparison itself already says that memory and reality differ.',
        },
        {
          type: 'transform',
          q: 'Put the MAIN verb into the past. Think before you touch the second verb.',
          from: 'Majstor me gleda kao da me ne razumije.',
          answer: 'Majstor me gledao kao da me ne razumije.',
          accept: [
            'Majstor me je gledao kao da me ne razumije.',
            'Majstor me pogledao kao da me ne razumije.',
            'Majstor me je pogledao kao da me ne razumije.',
            'Gledao me kao da me ne razumije.',
            'Gledao me je kao da me ne razumije.',
          ],
          hint: 'English would shift both verbs ("looked… as if he did not understand"). Croatian measures the second one from the first.',
          explanation:
            'Majstor me gledao kao da me ne razumije. — only the main verb moves into the past. The not-understanding is simultaneous with the looking, so it stays in the present after kao da.',
        },
        {
          type: 'type',
          q: 'Dora nije iznenađena: sve je ispalo točno ____ je predvidjela. (ONE word that can stand in for "kao što")',
          answer: 'kako',
          accept: ['onako kako'],
          hint: 'A single word of manner — the one you would also use to ask in what way something was done.',
          explanation:
            'Sve je ispalo točno kako je predvidjela. — when the comparison is with a real fact, kako can replace kao što: kako smo se dogovorili = kao što smo se dogovorili. It cannot replace kao da, which compares with a mere appearance.',
        },
      ],
    },
    mix: [
      12,
      {
        type: 'tf',
        q: '"Što prije krenemo to ćemo prije stići." needs a comma after "krenemo".',
        answer: true,
        hint: 'Which clause comes first here — the main one or the dependent one?',
        explanation:
          'True. When the comparative clause comes first, a comma closes it: Što prije krenemo, to ćemo prije stići. The same holds for the short form: Što prije, to bolje.',
      },
      13,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "I would rather walk than wait for the bus."',
        words: ['Radije', 'ću', 'pješačiti', 'nego', 'da', 'čekam', 'autobus.'],
        explanation:
          'Radije ću pješačiti nego da čekam autobus. — after radije or bolje, nego da compares two possible actions and rejects the second. The clitic ću leans on Radije; inside the da-clause the verb is in the present.',
      },
      11,
      14,
      5,
      {
        type: 'sort',
        q: 'What is the comparison made with?',
        groups: [
          'A real fact (as, the way)',
          'Only an appearance (as if)',
          'A measure (than, as much as)',
        ],
        items: [
          { hr: 'Sve je bilo kao što su obećali.', group: 0 },
          { hr: 'Smije se kao da je sve u redu.', group: 1 },
          { hr: 'Potrošili smo više nego što smo planirali.', group: 2 },
          { hr: 'Kao što vidite, dvorana je puna.', group: 0 },
          { hr: 'Izgledaš kao da nisi spavao.', group: 1 },
          { hr: 'Platit ćeš onoliko koliko potrošiš.', group: 2 },
        ],
        explanation:
          'kao što compares with something that really is so; kao da with something that only seems so; nego što and koliko measure one amount or degree against another. Note the tense after kao da: nisi spavao is a perfekt because the not-sleeping would be EARLIER than the looking.',
      },
      {
        type: 'match',
        q: 'Match the two halves of each sentence.',
        pairs: [
          ['Što je stariji,', 'to je tvrdoglaviji.'],
          ['Koliko ljudi,', 'toliko ćudi.'],
          ['Radije bih ostao kod kuće', 'nego da idem na taj sastanak.'],
          ['Smijali smo se', 'kao kad smo bili djeca.'],
          ['Vrijeme je ljepše', 'nego što su najavili.'],
        ],
        explanation:
          'Each second half is tied to a signal in the first: što… to with two comparatives; koliko… toliko for amount against amount (the proverb means "as many people, so many temperaments"); radije… nego da for a rejected alternative; kao kad for a remembered time; a comparative + nego što before a clause.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("The more you work, the more tired you are." — said to a man)',
        words: ['Što', 'više', 'radiš,', 'to', 'si', 'umoran.'],
        wrong: 5,
        answer: 'umorniji.',
        hint: 'This pair links two things that grow together. Look at the form of the word in each half that says "how much".',
        explanation:
          'Što više radiš, to si umorniji. — što… to requires a comparative in BOTH halves: više… umorniji. With the plain adjective the proportion collapses.',
      },
      {
        type: 'transform',
        q: 'Turn the condition into a proportion: "the more…, the less…".',
        from: 'Ako više vježbaš, manje griješiš.',
        answer: 'Što više vježbaš, to manje griješiš.',
        accept: [
          'Što više vježbaš, manje griješiš.',
          'Što više vježbaš, to ćeš manje griješiti.',
          'Što više vježbaš, manje ćeš griješiti.',
          'Čim više vježbaš, tim manje griješiš.',
        ],
        hint: 'Both comparatives are already there. Replace the conditional conjunction with the first word of the pair and open the main clause with its partner.',
        explanation:
          'Što više vježbaš, to manje griješiš. — što opens the dependent clause, to the main one, and each stands right before its comparative. A comma closes the što-clause because it comes first.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Što sam ga dulje slušala, to mi se više činilo da govori kao da ni sam ne vjeruje u ono što kaže.',
        q: 'What impression did the speaker get?',
        options: [
          'The longer she listened, the more convinced she became that he was right',
          'He spoke for longer than he had been asked to',
          'She stopped listening because she did not believe him',
          'The longer she listened, the more it seemed to her that he did not believe his own words',
        ],
        correct: 3,
        explanation:
          'Što… dulje, to… više — a proportion: the longer she listened, the more it seemed. Inside it sits an unreal comparison: govori kao da ni sam ne vjeruje — he speaks as if he himself did not believe it, with the present tense kept after kao da.',
      },
      {
        type: 'dictate',
        audio: 'Govori kao da sve zna.',
        answer: 'Govori kao da sve zna.',
        hint: 'Five words: "He talks as if he knew everything."',
        explanation:
          'Govori kao da sve zna. — an appearance, not a fact, so kao da; and where English says "knew", Croatian keeps the present zna.',
      },
    ],
  },

  // ── Writing direct speech ──────────────────────────────────────────────────
  'direct-speech-spelling': {
    text: {
      kind: 'text',
      title: 'Ključ ispod tegle',
      lines: [
        {
          hr: 'Kad je Lucija te večeri stigla pred bakinu kuću, vrata su bila zaključana, a na njima je visjela ceduljica: „Otišla sam do susjede. Ključ znaš gdje je.”',
          en: 'When Lucija arrived at her grandmother’s house that evening, the door was locked, and a little note was hanging on it: “I have gone over to the neighbor’s. You know where the key is.”',
        },
        {
          hr: '„Znam, naravno”, promrmljala je Lucija i podigla teglu s bosiljkom, ali ispod nje nije bilo ničega.',
          en: '“I know, of course,” Lucija muttered, and she lifted the pot of basil, but there was nothing under it.',
        },
        {
          hr: 'Pokucala je susjedi na prozor i upitala: „Oprostite, teta Mare, je li moja baka kod Vas?”',
          en: 'She knocked on the neighbor’s window and asked: “Excuse me, Aunt Mare, is my grandmother at your place?”',
        },
        {
          hr: '„Nije, dušo”, odgovorila je susjeda, „bila je, ali je prije pola sata otišla kući.”',
          en: '“No, dear,” the neighbor answered, “she was, but she went home half an hour ago.”',
        },
        {
          hr: '„Kako kući?” začudila se Lucija. „Kuća je zaključana, a ključa nema ispod tegle!”',
          en: '“What do you mean, home?” said Lucija in surprise. “The house is locked, and the key is not under the pot!”',
        },
        {
          hr: 'Susjeda se nasmijala i rekla da je baka u posljednje vrijeme postala, kako sama kaže, „malo zaboravna”.',
          en: 'The neighbor laughed and said that the grandmother had lately become, as she herself puts it, “a little forgetful.”',
        },
        {
          hr: '„Jučer mi je rekla ‚idem samo po kruh’ i vratila se s tri kile rajčica, a bez kruha”, dodala je.',
          en: '“Yesterday she told me ‘I am just going to get bread’ and came back with three kilos of tomatoes, and no bread,” she added.',
        },
        {
          hr: 'U tom se trenutku s ulice začulo: „Lucija! Što stojiš tu kao da si pala s Marsa?”',
          en: 'At that moment a voice came from the street: “Lucija! Why are you standing there as if you had fallen from Mars?”',
        },
        {
          hr: 'Baka je stajala pred kućom s ključem u ruci. „Ponijela sam ga sa sobom”, priznala je, „da ga netko ne ukrade.”',
          en: 'Her grandmother was standing in front of the house with the key in her hand. “I took it with me,” she admitted, “so that nobody would steal it.”',
        },
        {
          hr: '„A ceduljica?” upitala je Lucija. „Ceduljica je”, rekla je baka dostojanstveno, „bila za lopove.”',
          en: '“And the note?” asked Lucija. “The note,” said her grandmother with dignity, “was for the thieves.”',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the story: why was the key not under the pot of basil?',
          options: [
            'The neighbor had borrowed it half an hour earlier',
            'Lucija had been looking under the wrong pot',
            'The grandmother had taken it with her so that nobody would steal it',
            'The grandmother had lost it on her way to buy bread',
          ],
          correct: 2,
          hint: 'Recall what the grandmother admits when she appears with the key in her hand.',
          explanation:
            '„Ponijela sam ga sa sobom”, priznala je, „da ga netko ne ukrade.” — and the note on the door, she explains, was meant for the thieves.',
        },
        {
          q: 'Look at: „Kako kući?” začudila se Lucija. — Why is there NO comma after the closing quotation mark, although there is one in „Znam, naravno”, promrmljala je Lucija?',
          options: [
            'Because a reflexive verb (začudila se) never takes a comma before it',
            'Because the quoted question keeps its question mark, and that mark already separates it from the reporting clause; the comma only stands in for the period a statement loses',
            'Because a comma is only used when the quotation is longer than two words',
            'Because the reporting clause begins with a capital letter after a question',
          ],
          correct: 1,
          hint: 'Compare what stands INSIDE the closing mark in the two sentences.',
          explanation:
            'A quoted statement gives up its period, and a comma after the closing mark takes over: „Znam, naravno”, promrmljala je. A question mark or exclamation mark stays inside the marks and does the separating itself, so no comma is added — and the reporting clause still continues in lower case.',
        },
        {
          type: 'transform',
          q: 'Turn Lucija’s question into reported speech. Begin with "Lucija je upitala susjedu…".',
          from: '„Je li moja baka kod Vas?”',
          answer: 'Lucija je upitala susjedu je li njezina baka kod nje.',
          accept: [
            'Lucija je upitala susjedu je li njena baka kod nje.',
            'Lucija je upitala susjedu je li baka kod nje.',
            'Lucija je upitala susjedu je li joj baka kod nje.',
          ],
          hint: 'The quotation marks and the question mark go; the two persons change (moja, Vas), but the tense and the question particle stay exactly as she said them.',
          explanation:
            'Lucija je upitala susjedu je li njezina baka kod nje. — in reported speech the persons shift (moja → njezina, kod Vas → kod nje), but the tense does not: she asked in the present, so the present stays. A reported yes/no question keeps je li and ends with a period, not a question mark.',
        },
        {
          type: 'transform',
          q: 'Go the other way: write the grandmother’s exact words — only what would stand inside the quotation marks.',
          from: 'Baka je rekla da je ključ ponijela sa sobom jer se bojala lopova.',
          answer: 'Ključ sam ponijela sa sobom jer sam se bojala lopova.',
          accept: [
            'Ponijela sam ključ sa sobom jer sam se bojala lopova.',
            'Ključ sam ponijela sa sobom jer se bojim lopova.',
            'Ponijela sam ključ sa sobom jer se bojim lopova.',
          ],
          hint: 'She is now speaking about herself: every third-person auxiliary becomes first person, and the conjunction that introduced the report disappears.',
          explanation:
            'Ključ sam ponijela sa sobom jer sam se bojala lopova. — da disappears and je → sam in both clauses. Note what happens to the cluster in the second clause: the third-person je is left out after se (jer se bojala), but the first-person sam is not (jer sam se bojala).',
        },
        {
          type: 'type',
          q: 'Complete the reporting clause: „Ne znam gdje je ključ”, ____ Lucija. (odvratiti — perfekt; two words, in the order a reporting clause takes AFTER a quotation)',
          answer: 'odvratila je',
          hint: 'After a quotation the reporting clause is turned around: the participle leads, the auxiliary follows it, and the speaker comes last.',
          explanation:
            '„Ne znam gdje je ključ”, odvratila je Lucija. — after the quotation the order is verb first, speaker last (rekla je baka, upitala je Lucija), and the clause starts in lower case because it continues the same sentence.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In „Stigli smo”, rekao je vozač. „Molim vas, ništa ne zaboravite.” the capital M is correct.',
        answer: true,
        hint: 'Look at what closes the reporting clause: a comma or a period?',
        explanation:
          'True. The first quotation was a complete sentence, so the reporting clause ends with a period and a NEW quoted sentence begins — with a capital. A lower-case continuation is only right when ONE sentence is split: „Stigli smo”, rekao je vozač, „i nitko nije zakasnio.”',
      },
      9,
      5,
      {
        type: 'sort',
        q: 'Is the punctuation correct?',
        groups: ['Correctly punctuated', 'Incorrectly punctuated'],
        items: [
          { hr: '„Vidimo se sutra”, rekla je Maja.', group: 0 },
          { hr: '„Vidimo se sutra,” rekla je Maja.', group: 1 },
          { hr: 'Otac je upitao: „Tko je to bio?”', group: 0 },
          { hr: 'Otac je upitao, „Tko je to bio?”', group: 1 },
          { hr: '„Požuri!” doviknuo mu je brat.', group: 0 },
          { hr: '„Požuri!”, doviknuo mu je brat.', group: 1 },
        ],
        explanation:
          'Three rules, each shown right and wrong: the comma after a quoted statement stands AFTER the closing mark, not inside it as in English; a reporting clause that comes first ends in a colon, not a comma; and after a question mark or exclamation mark no comma is added at all.',
      },
      10,
      4,
      6,
      {
        type: 'match',
        q: 'Match each mark to its job in written speech.',
        pairs: [
          ['„ ”', 'enclose the exact words of the speaker'],
          ['‚ ’', 'enclose a quotation inside another quotation'],
          [':', 'closes a reporting clause that comes before the quotation'],
          ['—', 'opens a speaker’s turn in a novel, instead of quotation marks'],
        ],
        explanation:
          'Croatian quotation marks open low and close high: „…”. A quotation within a quotation takes single marks. A reporting clause that comes first ends in a colon: Rekla je: „Dođi.” In fiction a dash at the start of the line can replace the marks altogether: — Dođi — rekla je.',
      },
      11,
      3,
      {
        type: 'order',
        q: 'Build the sentence with the reporting clause in the MIDDLE: “I do not know,” she said quietly, “where the keys are.”',
        words: ['„Ne', 'znam”,', 'rekla je', 'tiho,', '„gdje', 'su', 'ključevi.”'],
        explanation:
          '„Ne znam”, rekla je tiho, „gdje su ključevi.” — one sentence split in two: a comma after the first closing mark, a comma after the reporting clause, a lower-case continuation, and the final period INSIDE the last closing mark, because it belongs to the quoted sentence.',
      },
      {
        type: 'fix',
        q: 'One piece is punctuated wrongly. Tap it. (“I am coming back tonight,” said Petra.)',
        words: ['„Vraćam', 'se', 'večeras.”,', 'rekla', 'je', 'Petra.'],
        wrong: 2,
        answer: 'večeras”,',
        hint: 'A quoted statement that is followed by its reporting clause gives something up.',
        explanation:
          '„Vraćam se večeras”, rekla je Petra. — the statement loses its period when the reporting clause follows; the comma after the closing mark replaces it. Only a question mark or an exclamation mark would stay inside.',
      },
      {
        type: 'transform',
        q: 'Turn the direct speech into reported speech with "da".',
        from: 'Marko je rekao: „Kasnit ću pola sata.”',
        answer: 'Marko je rekao da će kasniti pola sata.',
        accept: [
          'Marko je rekao da će pola sata kasniti.',
          'Rekao je da će kasniti pola sata.',
          'Marko je rekao kako će kasniti pola sata.',
          'Marko je rekao da će zakasniti pola sata.',
        ],
        hint: 'The colon and the marks go. The person of the verb changes, the tense does not — and the short auxiliary must move up to stand right after the conjunction.',
        explanation:
          'Marko je rekao da će kasniti pola sata. — ću → će because Marko is now spoken about; the future stays a future (Croatian has no "would be late" shift); and the clitic će follows da at once, so the infinitive regains its full form: kasnit ću → da će kasniti.',
      },
      {
        type: 'listen',
        audio:
          'Kad sam je pitao hoće li doći, odgovorila je da još ne zna, ali da će mi javiti do petka.',
        q: 'Which quotation gives her exact words?',
        options: [
          '„Još ne znam, ali javit ću ti do petka.”',
          '„Još ne zna, ali javit će mi do petka.”',
          '„Ne dolazim, ali javit ću ti u petak.”',
          '„Još ne znam hoću li ti javiti do petka.”',
        ],
        correct: 0,
        explanation:
          'Reported: odgovorila je da još ne zna, ali da će mi javiti do petka. In her own mouth the third person becomes first (ne zna → ne znam, će → ću) and mi becomes ti. The tenses are the same in both versions.',
      },
      {
        type: 'dictate',
        audio: '„Stani!” viknuo je vozač.',
        answer: '„Stani!” viknuo je vozač.',
        hint: 'Four words: “Stop!” shouted the driver. Only the words are checked here, not the marks.',
        explanation:
          '„Stani!” viknuo je vozač. — compare the marks with what you wrote: the exclamation mark stays inside them, no comma follows, and the reporting clause runs on in lower case with the verb before the speaker.',
      },
    ],
  },

  // ── Debate and persuasion ──────────────────────────────────────────────────
  'debate-persuasion': {
    text: {
      kind: 'dialogue',
      title: 'Tribina: središte grada bez automobila',
      lines: [
        {
          who: 'Moderatorica',
          hr: 'Gospođo Perić, zalažete se za to da se središte grada zatvori za automobile. Gospodin Kovač tvrdi da bi to uništilo male obrtnike. Što mu odgovarate?',
          en: 'Ms. Perić, you are arguing for closing the city center to cars. Mr. Kovač claims that this would destroy small tradespeople. What is your answer to him?',
        },
        {
          who: 'Perić',
          hr: 'Razumijem tu bojazan i ne bih je olako odbacila. Ipak, podaci iz Ljubljane pokazuju upravo suprotno: nakon zatvaranja središta promet u trgovinama porastao je za petinu.',
          en: 'I understand that fear and would not dismiss it lightly. Still, the data from Ljubljana show exactly the opposite: after the center was closed, sales in the stores rose by a fifth.',
        },
        {
          who: 'Kovač',
          hr: 'Tu se ne bih složio. Ljubljana nije Split; naši kupci dolaze iz okolnih mjesta i bez automobila jednostavno neće doći.',
          en: 'There I would not agree. Ljubljana is not Split; our customers come from the surrounding towns, and without a car they simply will not come.',
        },
        {
          who: 'Perić',
          hr: 'To je točno samo djelomično. Slažem se da dio kupaca dolazi automobilom, ali na temelju čega tvrdite da neće doći ako parkiraju pet minuta dalje?',
          en: 'That is only partly true. I agree that some of the customers come by car, but on what basis do you claim that they will not come if they park five minutes farther away?',
        },
        {
          who: 'Kovač',
          hr: 'Na temelju trideset godina iza pulta, gospođo. Kad je prošlog ljeta ulica bila raskopana, utržak mi je pao za trećinu.',
          en: 'On the basis of thirty years behind the counter, ma’am. When the street was dug up last summer, my takings fell by a third.',
        },
        {
          who: 'Perić',
          hr: 'Vjerujem Vam, no iz toga ne proizlazi da bi pješačka zona imala isti učinak: raskopana ulica odbija sve, a uređena privlači šetače.',
          en: 'I believe you, but it does not follow from that that a pedestrian zone would have the same effect: a dug-up street drives everyone away, while a well-kept one attracts people out for a walk.',
        },
        {
          who: 'Kovač',
          hr: 'Možda, ali tko će mi jamčiti da ću do tada preživjeti? Ne radi se ovdje o statistici, već o ljudima koji od tog posla žive.',
          en: 'Perhaps, but who will guarantee that I survive until then? This is not about statistics, but about people who make their living from that work.',
        },
        {
          who: 'Perić',
          hr: 'Upravo je u tome stvar. Zato i predlažem prijelazno razdoblje od dvije godine, s dostavom do deset ujutro i povlaštenim parkiranjem za stanare.',
          en: 'That is exactly the point. That is why I am proposing a transition period of two years, with deliveries until ten in the morning and preferential parking for residents.',
        },
        {
          who: 'Kovač',
          hr: 'Dopustite, to prvi put čujem. Ako je dostava doista zajamčena, onda povlačim ono što sam rekao o „uništavanju” — premda i dalje mislim da je rok prekratak.',
          en: 'Excuse me, this is the first I have heard of it. If deliveries really are guaranteed, then I withdraw what I said about “destroying” — although I still think the time frame is too short.',
        },
        {
          who: 'Perić',
          hr: 'Imate pravo, o roku se može razgovarati; prihvaćam taj argument.',
          en: 'You are right, the time frame is open to discussion; I accept that argument.',
        },
        {
          who: 'Moderatorica',
          hr: 'Vratimo se, dakle, na ono što je bitno: oko cilja se slažete, a spor je ostao samo oko rokova.',
          en: 'Let us return, then, to what matters: you agree on the goal, and the only dispute left is about the time frame.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the debate: what made Mr. Kovač withdraw his claim about "destroying" small businesses?',
          options: [
            'The sales figures from Ljubljana',
            'The moderator’s reminder to return to the main point',
            'Ms. Perić’s admission that the time frame was too short',
            'Learning that deliveries would be guaranteed during a two-year transition period',
          ],
          correct: 3,
          hint: 'Recall what he says he is hearing for the first time.',
          explanation:
            'Ako je dostava doista zajamčena, onda povlačim ono što sam rekao… — the Ljubljana figures did not move him, but a concrete guarantee did. He still holds one point back: da je rok prekratak — and she concedes that one in turn.',
        },
        {
          q: 'Mr. Kovač says "Tu se ne bih složio" rather than "Ne slažem se". What does the conditional do here?',
          options: [
            'It shows that he has not yet made up his mind',
            'It keeps a firm disagreement polite: he objects just as strongly, but in a form a public discussion expects',
            'It refers to a hypothetical situation in the future',
            'It is required by the reflexive pronoun se',
          ],
          correct: 1,
          hint: 'Look at what he says next. Does he sound unsure?',
          explanation:
            'The conditional softens the form, not the content. "Ne slažem se" is grammatical but abrupt; ne bih se složio / složila is the standard way to disagree firmly and still be heard. His very next sentence shows that he is not hesitating at all.',
        },
        {
          type: 'transform',
          q: 'Challenge this claim calmly, as Ms. Perić does: ask ON WHAT BASIS he claims it. Begin with "Na temelju čega…" and address him politely.',
          from: 'Naši kupci neće doći bez automobila.',
          answer: 'Na temelju čega tvrdite da Vaši kupci neće doći bez automobila?',
          accept: [
            'Na temelju čega tvrdite da kupci neće doći bez automobila?',
            'Na temelju čega tvrdite da vaši kupci bez automobila neće doći?',
            'Na temelju čega tvrdite da kupci bez automobila neće doći?',
            'Na temelju čega to tvrdite?',
          ],
          hint: 'The polite verb of claiming, then his statement as a da-clause — and "our" customers are no longer yours to call that.',
          explanation:
            'Na temelju čega tvrdite da Vaši kupci neće doći bez automobila? — asking for the basis of a claim puts the burden of proof where it belongs without attacking the speaker. Note the shift of person inside the clause: naši → Vaši, with the capital of polite address to one person.',
        },
        {
          type: 'type',
          q: 'Reframe the way Mr. Kovač does: Ne radi se o brzini, već o ____. (sigurnost — in the case that "o" requires)',
          answer: 'sigurnosti',
          hint: 'Both halves of this move stand in the same case after "o". This noun is feminine and ends in a consonant.',
          explanation:
            'Ne radi se o brzini, već o sigurnosti. — raditi se o governs the locative, and the second half repeats both the preposition and the case. The move rejects the FRAMING of the debate, not a particular claim.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one reframing move that begins with "Ne radi se o…".',
          from: 'Problem nije novac. Problem je povjerenje.',
          answer: 'Ne radi se o novcu, već o povjerenju.',
          accept: [
            'Ne radi se o novcu, nego o povjerenju.',
            'Ne radi se tu o novcu, već o povjerenju.',
            'Ne radi se tu o novcu, nego o povjerenju.',
            'Ne radi se ovdje o novcu, već o povjerenju.',
            'Ne radi se ovdje o novcu, nego o povjerenju.',
          ],
          hint: 'After the negated first half, the contrast is NOT introduced by "ali". Both nouns go into the locative; one of them loses a vowel on the way.',
          explanation:
            'Ne radi se o novcu, već o povjerenju. — novac → o novcu (the a drops out), povjerenje → o povjerenju. After a negation the correcting conjunction is već or its commoner twin, which you will practice below; "ali" cannot do this job.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: 'In the reframing move "Ne radi se o X, … o Y", both X and Y stand in the locative.',
        answer: true,
        hint: 'Which case does the preposition "o" take when it means "about"?',
        explanation:
          'True. raditi se o + locative, and the preposition is repeated in the second half with the same case: Ne radi se o novcu… o načelu.',
      },
      8,
      {
        type: 'sort',
        q: 'What is the speaker doing?',
        groups: ['Conceding a point', 'Pushing back', 'Asking for proof'],
        items: [
          { hr: 'Imate pravo, to nisam uzela u obzir.', group: 0 },
          { hr: 'Prihvaćam argument.', group: 0 },
          { hr: 'Upravo suprotno.', group: 1 },
          { hr: 'Tu se ne bih složio.', group: 1 },
          { hr: 'Na temelju čega to tvrdite?', group: 2 },
          { hr: 'Imate li za to ikakve brojke?', group: 2 },
        ],
        explanation:
          'A good debater does all three. Conceding what is true (Imate pravo, Prihvaćam argument) makes the points you keep more credible; pushing back in the conditional keeps it polite; and asking for the basis of a claim raises the standard without raising the temperature.',
      },
      11,
      {
        type: 'match',
        q: 'Match the Croatian move to its English equivalent.',
        pairs: [
          ['Upravo je u tome stvar.', 'That is exactly the point.'],
          ['To je točno samo djelomično.', 'That is only partly true.'],
          ['Povlačim tu tvrdnju.', 'I withdraw that claim.'],
          ['Vratimo se na bitno.', 'Let us get back to what matters.'],
        ],
        explanation:
          'Four moves for four moments: seizing on the opponent’s own point, granting part of a claim, taking back something you said, and steering the discussion back to its subject.',
      },
      10,
      7,
      5,
      {
        type: 'order',
        q: 'Put the words in order: "I agree to a certain extent, but the data show the opposite."',
        words: [
          'Slažem',
          'se',
          'do',
          'određene',
          'mjere,',
          'ali',
          'podaci',
          'pokazuju',
          'suprotno.',
        ],
        accept: [
          'Do određene mjere se slažem, ali podaci pokazuju suprotno.',
          'Do određene se mjere slažem, ali podaci pokazuju suprotno.',
          'Slažem se do određene mjere, ali suprotno pokazuju podaci.',
        ],
        explanation:
          'Slažem se do određene mjere, ali podaci pokazuju suprotno. — concede first, then object: the partial agreement makes the objection easier to hear. A comma stands before ali.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Can you back up that claim with evidence?")',
        words: ['Možete', 'li', 'tu', 'tvrdnju', 'potkrijepiti', 'dokazi?'],
        wrong: 5,
        answer: 'dokazima?',
        hint: 'The claim is the object. What you support it WITH is the means — and the means has its own case, without a preposition.',
        explanation:
          'Možete li tu tvrdnju potkrijepiti dokazima? — potkrijepiti takes the thing supported in the accusative (tvrdnju) and the means in the instrumental: dokazima, brojkama, primjerima.',
      },
      {
        type: 'transform',
        q: 'Soften this the way a debater would: put the verb into the conditional (a man is speaking).',
        from: 'Ne slažem se s tom procjenom.',
        answer: 'Ne bih se složio s tom procjenom.',
        accept: [
          'S tom se procjenom ne bih složio.',
          'S tom procjenom se ne bih složio.',
          'Ne bih se s tom procjenom složio.',
          'Ne bih se slagao s tom procjenom.',
          'Ja se ne bih složio s tom procjenom.',
        ],
        hint: 'The conditional auxiliary for "I" joins the negation, the reflexive follows it, and the verb becomes a participle — of the perfective partner.',
        explanation:
          'Ne bih se složio s tom procjenom. — ne bih forms one stressed unit, se follows it, and the participle agrees with the speaker (a woman says složila). The disagreement is exactly as firm as before; only its form is now what a public discussion expects.',
      },
      2,
      {
        type: 'listen',
        audio:
          'Slažem se da cijene rastu, ali iz toga ne slijedi da su za to krivi isključivo iznajmljivači.',
        q: 'What is the speaker’s position?',
        options: [
          'She denies that prices are rising',
          'She agrees that landlords alone are to blame for rising prices',
          'She grants that prices are rising but denies that this proves landlords alone are to blame',
          'She wants to return to the question of who is renting',
        ],
        correct: 2,
        explanation:
          'Slažem se da… ali iz toga ne slijedi da… — she concedes the fact and then names the gap in the reasoning: rising prices do not by themselves prove that landlords, and only they (isključivo), are responsible.',
      },
      {
        type: 'dictate',
        audio: 'Prihvaćam argument, ali ne i zaključak.',
        answer: 'Prihvaćam argument, ali ne i zaključak.',
        hint: 'Six words: "I accept the argument, but not the conclusion as well."',
        explanation:
          'Prihvaćam argument, ali ne i zaključak. — a compact way to concede and object in one breath; ne i means "not… as well". Mind the ć in prihvaćam and the č in zaključak.',
      },
    ],
  },

  // ══ UNIT 12 ════════════════════════════════════════════════════════════════

  // ── Formal speech and ceremony ─────────────────────────────────────────────
  'formal-speech': {
    text: {
      kind: 'text',
      title: 'Pedeset godina Gradske knjižnice',
      lines: [
        {
          hr: 'Poštovani gradonačelniče, cijenjeni uzvanici, drage kolegice i kolege, dragi čitatelji!',
          en: 'Mr. Mayor, distinguished guests, dear colleagues, dear readers!',
        },
        {
          hr: 'Čast mi je i zadovoljstvo pozdraviti vas večeras u ime svih djelatnika Gradske knjižnice, koja ove jeseni slavi pedesetu obljetnicu.',
          en: 'It is my honor and pleasure to welcome you this evening on behalf of all the staff of the City Library, which is celebrating its fiftieth anniversary this fall.',
        },
        {
          hr: 'Dopustite mi da se na početku prisjetim onih koji su ovu kuću stvarali kad u njoj nije bilo ni grijanja ni polica, a knjige su se posuđivale iz kartonskih kutija.',
          en: 'Allow me to begin by remembering those who built this institution when it had neither heating nor shelves, and books were lent out of cardboard boxes.',
        },
        {
          hr: 'Posebnu zahvalnost dugujemo našoj prvoj ravnateljici, gospođi Nadi Bilić, bez čije upornosti ove knjižnice danas ne bi bilo.',
          en: 'We owe special gratitude to our first director, Mrs. Nada Bilić, without whose persistence this library would not exist today.',
        },
        {
          hr: 'Zahvaljujem i Gradu, koji nas je podupirao i onda kad za kulturu nije bilo novca, kao i brojnim darovateljima, čija su imena uklesana na ploči u predvorju.',
          en: 'I also thank the City, which supported us even when there was no money for culture, as well as the many donors whose names are engraved on the plaque in the lobby.',
        },
        {
          hr: 'Dopustite mi, ipak, da dodam i ovo: knjižnica nisu zidovi ni police, već ljudi koji u nju svakoga dana ulaze.',
          en: 'Allow me, however, to add this as well: a library is not walls or shelves, but the people who walk into it every day.',
        },
        {
          hr: 'Stoga mi je osobita čast večeras uručiti priznanje našoj najvjernijoj čitateljici, gospođi Ani Kralj, koja je u pedeset godina posudila više od četiri tisuće knjiga.',
          en: 'It is therefore a particular honor for me this evening to present an award to our most loyal reader, Mrs. Ana Kralj, who has borrowed more than four thousand books in fifty years.',
        },
        {
          hr: 'Na kraju, želim svima nama da i sljedećih pedeset godina dočekamo ovako — zajedno, znatiželjni i s knjigom u ruci.',
          en: 'Finally, I wish for all of us that we may greet the next fifty years like this, too — together, curious and with a book in hand.',
        },
        {
          hr: 'Pozivam vas da ustanete i da zajedno nazdravimo našoj knjižnici i svima koji je vole.',
          en: 'I invite you to stand and to join me in a toast to our library and to all who love it.',
        },
        {
          hr: 'Hvala vam na pozornosti. Živjeli!',
          en: 'Thank you for your attention. Cheers!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the speech: who receives the award this evening, and for what?',
          options: [
            'The first director, for founding the library without heating or shelves',
            'The mayor, for supporting the library when there was no money for culture',
            'The library’s most loyal reader, who has borrowed more than four thousand books in fifty years',
            'A donor whose name is engraved on the plaque in the lobby',
          ],
          correct: 2,
          hint: 'The first director and the City are thanked; only one person is handed something.',
          explanation:
            'Osobita mi je čast uručiti priznanje našoj najvjernijoj čitateljici, gospođi Ani Kralj. The first director is owed gratitude (zahvalnost dugujemo), and the City and the donors are thanked — a formal speech keeps these acts apart.',
        },
        {
          q: 'The director says "da zajedno nazdravimo našoj knjižnici i svima koji je vole". Why "našoj knjižnici" and "svima", and not "za našu knjižnicu" and "za sve"?',
          options: [
            'Because zajedno requires the instrumental',
            'Because nazdraviti takes whoever is toasted in the dative, without a preposition',
            'Because after "da" every object goes into the locative',
            'Because "za" can only be used with people, never with institutions',
          ],
          correct: 1,
          hint: 'Ask "komu nazdravljamo?" and listen to the form of the question word.',
          explanation:
            'nazdraviti komu? — the dative: nazdravimo mladencima, domaćinu, našoj knjižnici, svima. "Za" belongs to the toast itself, when the glasses go up (Za mladence!), not to this verb in careful Croatian.',
        },
        {
          type: 'type',
          q: 'Zahvaljujem ____ na dugogodišnjoj potpori. (gradonačelnik — in the case that zahvaljivati requires)',
          answer: 'gradonačelniku',
          hint: 'The person thanked answers "komu?"; the reason follows with na + locative.',
          explanation:
            'Zahvaljujem gradonačelniku na dugogodišnjoj potpori. — zahvaljivati komu (dative) na čemu (locative). In her first sentence the director ADDRESSES him, which is a different case again: gradonačelniče (vocative).',
        },
        {
          type: 'transform',
          q: 'Make it ceremonial: begin with "Čast mi je…" and change the verb into the form that phrase requires.',
          from: 'Pozdravljam vas u ime knjižnice.',
          answer: 'Čast mi je pozdraviti vas u ime knjižnice.',
          accept: [
            'Čast mi je vas pozdraviti u ime knjižnice.',
            'Čast mi je u ime knjižnice pozdraviti vas.',
            'Čast mi je što vas mogu pozdraviti u ime knjižnice.',
            'Čast mi je što vas pozdravljam u ime knjižnice.',
            'Čast mi je da vas pozdravim u ime knjižnice.',
          ],
          hint: 'After this phrase comes either an infinitive — of the perfective verb, since it is one single act — or a clause with "što".',
          explanation:
            'Čast mi je pozdraviti vas u ime knjižnice. — Čast mi je + infinitive (or + što-clause) is the standard ceremonial opener. One act of greeting calls for the perfective pozdraviti rather than pozdravljati.',
        },
        {
          type: 'type',
          q: 'Dopustite mi da ____ nekoliko riječi. (reći — the present-tense form that "da" needs here, for "I")',
          answer: 'kažem',
          accept: ['reknem', 'rečem'],
          hint: 'After "Dopustite mi da" comes a present tense in the first person. In today’s Croatian reći usually borrows that present from another verb of saying.',
          explanation:
            'Dopustite mi da kažem nekoliko riječi. — the present of reći (reknem, older rečem) is bookish; everyday and formal Croatian alike use kažem, from kazati. The whole formula politely asks for the floor.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'A Croatian formal speech normally opens with the address — "Poštovani uzvanici", "Drage kolegice i kolege" — before the speaker says anything else.',
        answer: true,
        hint: 'Think of how the director of the library began.',
        explanation:
          'True. The address comes first, usually ordered by rank, and in the vocative: Poštovani gradonačelniče, cijenjeni uzvanici… An English-style opener such as "Thank you all for being here" before any address sounds translated.',
      },
      9,
      {
        type: 'sort',
        q: 'For which occasion?',
        groups: ['A celebration', 'A retirement or farewell', 'A funeral'],
        items: [
          { hr: 'Sretno mladencima!', group: 0 },
          { hr: 'Sretan rođendan i sve najbolje!', group: 0 },
          { hr: 'Želimo Vam mnogo zdravlja i veselja u mirovini.', group: 1 },
          { hr: 'Hvala Vam na svim godinama zajedničkog rada.', group: 1 },
          { hr: 'Primite izraze naše iskrene sućuti.', group: 2 },
          { hr: 'Počivao u miru.', group: 2 },
        ],
        explanation:
          'Each occasion has its own formulas, and they do not travel: wishes of luck and happiness for a wedding or birthday, thanks and good wishes for the years ahead at a retirement, and at a funeral only the fixed expressions built on sućut.',
      },
      10,
      {
        type: 'match',
        q: 'Match each ceremonial sentence to its everyday counterpart.',
        pairs: [
          ['Dopustite mi da kažem nekoliko riječi.', 'Mogu li nešto reći?'],
          ['Čast mi je pozdraviti vas.', 'Drago mi je što vas vidim.'],
          ['Zahvaljujem na pozornosti.', 'Hvala što ste me slušali.'],
          ['Uručujem Vam ovo priznanje.', 'Evo, ovo je za Vas.'],
        ],
        explanation:
          'The formal register does the same things as everyday speech — asking for the floor, greeting, thanking, handing something over — but with fixed phrases: dopustite mi da…, čast mi je…, zahvaljujem na…, uručujem….',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "On behalf of the whole family, I thank you for coming."',
        words: ['U', 'ime', 'cijele', 'obitelji', 'zahvaljujem', 'vam', 'što', 'ste', 'došli.'],
        accept: [
          'Zahvaljujem vam u ime cijele obitelji što ste došli.',
          'U ime cijele obitelji vam zahvaljujem što ste došli.',
        ],
        explanation:
          'U ime cijele obitelji zahvaljujem vam što ste došli. — u ime + genitive names whom you speak for; zahvaljujem vam + što-clause gives the reason. The clitic vam may follow the verb or the whole opening phrase.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("On behalf of all my colleagues, I wish you much happiness.")',
        words: ['U', 'ime', 'svih', 'kolegama', 'želim', 'Vam', 'mnogo', 'sreće.'],
        wrong: 3,
        answer: 'kolega',
        hint: 'Check the case that "u ime" governs — the word before the wrong one already shows it.',
        explanation:
          'U ime svih kolega želim Vam mnogo sreće. — u ime takes the genitive: svih kolega (genitive plural), like u ime cijele obitelji. kolegama is a dative, instrumental or locative.',
      },
      6,
      {
        type: 'transform',
        q: 'Turn the statement into a toast: begin with "Nazdravimo…".',
        from: 'Naši domaćini zaslužuju zdravicu.',
        answer: 'Nazdravimo našim domaćinima!',
        accept: ['Nazdravimo domaćinima!', 'Nazdravimo svojim domaćinima!'],
        hint: 'The verb of toasting takes the people toasted in the dative plural, with no preposition.',
        explanation:
          'Nazdravimo našim domaćinima! — nazdraviti komu: the hosts go into the dative plural, našim domaćinima. Then the glasses go up on Živjeli!',
      },
      7,
      {
        type: 'listen',
        audio:
          'Dragi Ivane, u ime svih nas koji smo s tobom radili puna tri desetljeća, želim ti da u mirovini napokon nađeš vremena za sve ono što si godinama odgađao.',
        q: 'What is the occasion, and what is the wish?',
        options: [
          'A birthday: thirty more healthy years',
          'A retirement: time at last for everything he kept putting off',
          'A wedding: three decades of happiness',
          'A promotion: success in the new position',
        ],
        correct: 1,
        explanation:
          'u mirovini — in retirement; puna tri desetljeća — a full three decades of working together; da nađeš vremena za sve ono što si godinama odgađao — that you find time for everything you kept postponing for years. Address, on whose behalf, the wish: the three parts of a short speech.',
      },
      {
        type: 'dictate',
        audio: 'Čast mi je otvoriti ovaj skup.',
        answer: 'Čast mi je otvoriti ovaj skup.',
        hint: 'Six words: "It is my honor to open this gathering."',
        explanation:
          'Čast mi je otvoriti ovaj skup. — Čast mi je + infinitive; the clitics mi je follow the first stressed word, and one single act of opening calls for the perfective otvoriti.',
      },
    ],
  },

  // ── Translation traps ──────────────────────────────────────────────────────
  'translation-pitfalls': {
    text: {
      kind: 'dialogue',
      title: 'Prijevod koji miriše na original',
      lines: [
        {
          who: 'Vesna',
          hr: 'Filipe, pročitala sam Vaš prijevod izvješća. Točan je, ali na svakoj se stranici vidi da je original bio engleski.',
          en: 'Filip, I have read your translation of the report. It is accurate, but on every page one can see that the original was English.',
        },
        {
          who: 'Filip',
          hr: 'Po čemu se to vidi? Trudio sam se da ništa ne izostavim.',
          en: 'What gives it away? I tried hard not to leave anything out.',
        },
        {
          who: 'Vesna',
          hr: 'Upravo po tome. Napisali ste „odluka je donesena od strane uprave”, a hrvatski bi autor jednostavno rekao da je uprava donijela odluku.',
          en: 'Exactly that. You wrote “odluka je donesena od strane uprave” (“the decision was made by the management board”), whereas a Croatian author would simply say that the board made the decision.',
        },
        {
          who: 'Filip',
          hr: 'Shvaćam. A rečenica „to ne pravi smisao”? Učinila mi se nespretnom već dok sam je pisao.',
          en: 'I see. And the sentence “to ne pravi smisao”? It struck me as clumsy even while I was writing it.',
        },
        {
          who: 'Vesna',
          hr: 'S razlogom: na hrvatskom nešto ima smisla, a ne „pravi” ga. Jednako tako „in order to” ne treba prevoditi s „u cilju da”: dovoljno je „kako bi” ili samo „da”.',
          en: 'With good reason: in Croatian something “has” sense; it does not “make” it. In the same way, “in order to” need not be translated as “u cilju da”: “kako bi” or simply “da” is enough.',
        },
        {
          who: 'Filip',
          hr: 'Najviše me ipak muče riječi koje izgledaju poznato. „Actual figures” preveo sam kao „aktualne brojke”.',
          en: 'What troubles me most, though, are the words that look familiar. I translated “actual figures” as “aktualne brojke.”',
        },
        {
          who: 'Vesna',
          hr: 'A to su, dakako, stvarne brojke; aktualne bi bile one najnovije. Jednako ste tako napisali da će se strane „eventualno dogovoriti”, premda autor tvrdi da će se dogovor prije ili poslije postići, a ne da je tek moguć.',
          en: 'And those are, of course, the real figures; “aktualne” would be the latest ones. In the same way you wrote that the parties will “eventualno” reach an agreement, although the author claims that an agreement will be reached sooner or later, not that it is merely possible.',
        },
        {
          who: 'Filip',
          hr: 'Znači, pretvorio sam obećanje u nagađanje. Što je s rečenicom „rekao je da je bio bolestan”?',
          en: 'So I turned a promise into a guess. What about the sentence “rekao je da je bio bolestan”?',
        },
        {
          who: 'Vesna',
          hr: 'Ako u originalu stoji „he said he was ill”, onda je u trenutku govora još bio bolestan, pa hrvatski traži prezent: rekao je da je bolestan. Vrijeme se u neupravnom govoru ne pomiče kao u engleskom.',
          en: 'If the original says “he said he was ill,” then he was still ill at the moment of speaking, so Croatian requires the present: rekao je da je bolestan. In reported speech the tense does not shift the way it does in English.',
        },
        {
          who: 'Filip',
          hr: 'Dakle, ne prevodim riječi, već ono što bi hrvatski govornik rekao na istome mjestu.',
          en: 'So I am not translating words, but what a Croatian speaker would say in the same place.',
        },
        {
          who: 'Vesna',
          hr: 'Tako je. I kad završite, pročitajte tekst naglas kao da originala nikad nije bilo: sve što zazvuči strano, vjerojatno i jest strano.',
          en: 'That is right. And when you finish, read the text aloud as if the original had never existed: anything that sounds foreign probably is foreign.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what was wrong with writing that the parties will "eventualno dogovoriti"?',
          options: [
            'It turned the author’s claim that an agreement WILL come sooner or later into a mere possibility',
            'It made the sentence too formal for a business report',
            'It suggested that the agreement had already been reached',
            'It is a passive construction, which Croatian avoids',
          ],
          correct: 0,
          hint: 'Recall how Filip himself sums up his mistake: he turned one thing into another.',
          explanation:
            'eventualno means "possibly, if it comes to that", not "eventually". The author promised an outcome (prije ili poslije); the translation only allowed for one — pretvorio sam obećanje u nagađanje.',
        },
        {
          q: 'Vesna corrects "rekao je da je bio bolestan" to "rekao je da je bolestan". Why does Croatian need the present there?',
          options: [
            'Because biti has no perfekt in subordinate clauses',
            'Because two past tenses may never stand in one sentence',
            'Because reported speech keeps the tense of the original words: he said "I am ill", and "je bio bolestan" would mean he had been ill earlier',
            'Because the present is more polite when speaking about illness',
          ],
          correct: 2,
          hint: 'Reconstruct what the man actually said, in the first person.',
          explanation:
            'His words were "Bolestan sam", so the report is da je bolestan. Croatian does not backshift. "Rekao je da je bio bolestan" is good Croatian too — but it reports "Bio sam bolestan", an illness that was already over.',
        },
        {
          type: 'transform',
          q: 'Rewrite the sentence without the calque "od strane": make the one who acted the subject.',
          from: 'Prijedlog je odbijen od strane ministarstva.',
          answer: 'Ministarstvo je odbilo prijedlog.',
          accept: ['Prijedlog je odbilo ministarstvo.', 'Ministarstvo je prijedlog odbilo.'],
          hint: 'The agent moves into the nominative and the verb becomes active — agreeing with a neuter subject.',
          explanation:
            'Ministarstvo je odbilo prijedlog. — if the agent matters enough to be named, Croatian makes it the subject. The passive with od strane copies the English by-phrase; style guides have advised against it for decades.',
        },
        {
          type: 'transform',
          q: 'Translate into Croatian. (She was still tired when she said it.)',
          from: 'She said that she was tired.',
          answer: 'Rekla je da je umorna.',
          accept: [
            'Ona je rekla da je umorna.',
            'Kazala je da je umorna.',
            'Rekla je kako je umorna.',
          ],
          hint: 'What were her actual words? Report them in the tense in which she said them.',
          explanation:
            'Rekla je da je umorna. — she said "Umorna sam", and the present stays. The English "was" is only the backshift that English grammar requires; copying it (da je bila umorna) would change the meaning to "she had been tired".',
        },
        {
          type: 'type',
          q: 'Zvali smo ih ____ ih podsjetili na rok. ("in order to" — two words: a conjunction of purpose and the conditional auxiliary for "we")',
          answer: 'kako bismo',
          accept: ['da bismo'],
          hint: 'No noun such as "cilj" is needed. The auxiliary must agree with the subject — and for "we" its standard form is not the bare one.',
          explanation:
            'Zvali smo ih kako bismo ih podsjetili na rok. — purpose is expressed with kako or da + the conditional, and the auxiliary agrees with the subject: bismo for "we". "U cilju da" and "u svrhu da" are padding copied from "in order to".',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Tamo je problem." is the natural Croatian for "There is a problem."',
        answer: false,
        hint: 'What does tamo actually point to?',
        explanation:
          'False. tamo is a place — "over there" — so the sentence means "the problem is over there". The existential "there is" is not translated word for word: Postoji problem. / Imamo problem. / Ima jedan problem.',
      },
      9,
      0,
      {
        type: 'sort',
        q: 'Natural Croatian, or a calque?',
        groups: ['Natural Croatian', 'A calque — better avoided'],
        items: [
          { hr: 'Svakodnevno provjeravam poštu.', group: 0 },
          { hr: 'Provjeravam poštu na dnevnoj bazi.', group: 1 },
          { hr: 'Što se tiče rokova, sve je u redu.', group: 0 },
          { hr: 'Po pitanju rokova sve je u redu.', group: 1 },
          { hr: 'To ima smisla.', group: 0 },
          { hr: 'To pravi smisao.', group: 1 },
        ],
        explanation:
          'on a daily basis → svakodnevno; it makes sense → ima smisla; and "regarding" is što se tiče, not the bureaucratic po pitanju, itself an older calque. The calques are easy to understand, and two of them are common in office prose — which is exactly why a careful translator has to hunt them down.',
      },
      10,
      2,
      {
        type: 'match',
        q: 'False friends: match each Croatian word to what it really means.',
        pairs: [
          ['eventualno', 'possibly'],
          ['aktualan', 'current, topical'],
          ['fabula', 'the plot of a story'],
          ['pretendirati', 'to lay claim to something'],
          ['genijalan', 'brilliant'],
        ],
        explanation:
          'None of these means what its English look-alike means: actual is stvaran, a fable is basna, to pretend is pretvarati se, and genial (friendly) is srdačan. The first word on the list is the costliest of all in a contract or a report.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "My back has been hurting since yesterday."',
        words: ['Od', 'jučer', 'me', 'bole', 'leđa.'],
        accept: ['Leđa me bole od jučer.', 'Bole me leđa od jučer.', 'Od jučer me leđa bole.'],
        explanation:
          'Od jučer me bole leđa. — no possessive: the body part is the subject (leđa, plural, so bole) and the person is the accusative clitic me. Croatian also uses the present where English says "has been hurting".',
      },
      {
        type: 'fix',
        q: 'One word is a false friend. Tap it. ("Actually, I did not know about the meeting.")',
        words: ['Aktualno,', 'nisam', 'znao', 'za', 'sastanak.'],
        wrong: 0,
        answer: 'Zapravo,',
        hint: 'The first word looks like its English counterpart but talks about what is current, not about what is really the case.',
        explanation:
          'Zapravo, nisam znao za sastanak. — "actually" is zapravo; aktualno means "currently relevant", as in aktualna tema.',
      },
      3,
      {
        type: 'transform',
        q: 'Replace the empty light-verb phrase with the plain verb.',
        from: 'Banka je izvršila plaćanje računa.',
        answer: 'Banka je platila račun.',
        accept: ['Banka je račun platila.', 'Banka je platila račune.'],
        hint: 'The real action is hiding in the verbal noun. Turn it back into a verb, and give that verb its object in the accusative.',
        explanation:
          'Banka je platila račun. — izvršiti plaćanje says in two words what platiti says in one, and the genitive računa becomes a plain accusative object. The same cure works for vršiti analizu (analizirati) and obaviti provjeru (provjeriti).',
      },
      6,
      {
        type: 'listen',
        audio:
          'Eventualno bismo mogli pomaknuti rok za tjedan dana, ali samo ako to naručitelj izričito zatraži.',
        q: 'What is the speaker offering?',
        options: [
          'The deadline will eventually be moved by a week, whatever the client says',
          'The deadline has already been moved at the client’s request',
          'The deadline cannot be moved under any circumstances',
          'The deadline might possibly be moved by a week, but only if the client explicitly asks for it',
        ],
        correct: 3,
        explanation:
          'Eventualno bismo mogli… — "we could possibly…": a possibility, hedged twice (the conditional and eventualno), and tied to a condition: samo ako to naručitelj izričito zatraži. Reading it as "eventually" would turn a cautious maybe into a promise.',
      },
      {
        type: 'dictate',
        audio: 'Svakodnevno čitam hrvatske novine.',
        answer: 'Svakodnevno čitam hrvatske novine.',
        hint: 'Four words: "I read Croatian newspapers on a daily basis" — said the Croatian way.',
        explanation:
          'Svakodnevno čitam hrvatske novine. — one adverb instead of "na dnevnoj bazi", and a simple present for the English habitual; novine is plural in Croatian, so hrvatske.',
      },
    ],
  },

  // ── Proofreading your own Croatian ─────────────────────────────────────────
  'proofreading-editing': {
    text: {
      kind: 'dialogue',
      title: 'Lektorica i novinar',
      lines: [
        {
          who: 'Jasna',
          hr: 'Tine, Vaš je članak dobar, ali prije tiska moramo proći kroz nekoliko sitnica. Jeste li ga pročitali naglas?',
          en: 'Tin, your article is good, but before it goes to print we have to go through a few small things. Have you read it aloud?',
        },
        {
          who: 'Tin',
          hr: 'Nisam, priznajem. Pročitao sam ga triput u sebi i nisam vidio ništa sporno.',
          en: 'I have not, I admit. I read it silently three times and saw nothing questionable.',
        },
        {
          who: 'Jasna',
          hr: 'U tome i jest nevolja: vlastiti tekst čitamo onako kako smo ga zamislili, a ne onako kako je napisan. Pogledajte prvu rečenicu: „Mislim, da je odluka ishitrena.”',
          en: 'That is exactly the trouble: we read our own text the way we imagined it, not the way it is written. Look at the first sentence: “Mislim, da je odluka ishitrena.”',
        },
        {
          who: 'Tin',
          hr: 'Zarez ispred „da”… U školi su nas učili da se zarez stavlja ispred svakog veznika.',
          en: 'A comma before “da”… At school they taught us that a comma goes before every conjunction.',
        },
        {
          who: 'Jasna',
          hr: 'Ispred „ali”, „nego” i „no” stavlja se, ali izrična se rečenica ne odvaja. Zatim, napisali ste „sa kolegama” i „sa predsjednikom”, a „sa” dolazi ispred s, š, z i ž, ispred teško izgovorljivih skupina poput ps i ks te u „sa mnom”.',
          en: 'It does go before “ali,” “nego” and “no,” but an object clause is not set off. Next, you wrote “sa kolegama” and “sa predsjednikom,” whereas “sa” comes before s, š, z and ž, before clusters that are hard to pronounce, such as ps and ks, and in “sa mnom.”',
        },
        {
          who: 'Tin',
          hr: 'Dakle, „s kolegama”, ali „sa županom”. A što je s riječju „lijepota”? Program mi je nije podcrtao.',
          en: 'So, “s kolegama,” but “sa županom.” And what about the word “lijepota”? The software did not underline it for me.',
        },
        {
          who: 'Jasna',
          hr: 'Program nije lektor. „Lijep” ima dugi jat, ali se u izvedenici jat krati: ljepota, ljepši, uljepšati. Isto je s parom „cvijet” i „cvjetovi”.',
          en: 'Software is not a copy editor. “Lijep” has a long jat, but in the derived word the jat shortens: ljepota, ljepši, uljepšati. It is the same with the pair “cvijet” and “cvjetovi.”',
        },
        {
          who: 'Tin',
          hr: 'A „neznam”? To mi je, bojim se, promaknulo u žurbi.',
          en: 'And “neznam”? That one, I am afraid, slipped past me in the rush.',
        },
        {
          who: 'Jasna',
          hr: 'Niječnica se piše odvojeno od glagola: ne znam, ne mogu, ne želim. Sastavljeno se pišu samo oblici triju glagola: nemam, neću i nisam.',
          en: 'The negative particle is written separately from the verb: ne znam, ne mogu, ne želim. Only the forms of three verbs are written as one word: nemam, neću and nisam.',
        },
        {
          who: 'Tin',
          hr: 'Sve su to pogreške koje bih kod drugoga odmah uočio.',
          en: 'These are all mistakes that I would spot at once in somebody else’s text.',
        },
        {
          who: 'Jasna',
          hr: 'Zato i čitamo u nekoliko prolaza: najprije slaganje, zatim padeži, pa pravopis i tek onda interpunkcija. Tko lovi sve odjednom, ne ulovi ništa.',
          en: 'That is why we read in several passes: first agreement, then cases, then spelling, and only then punctuation. Whoever hunts everything at once catches nothing.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: in what order does Jasna say a text should be checked?',
          options: [
            'Punctuation, spelling, cases, agreement',
            'Spelling, punctuation, agreement, cases',
            'Agreement, cases, spelling, punctuation',
            'Cases, agreement, punctuation, spelling',
          ],
          correct: 2,
          hint: 'She starts with what a reader notices first — whether the words match each other — and ends with the smallest marks.',
          explanation:
            'Najprije slaganje, zatim padeži, pa pravopis i tek onda interpunkcija. — one pass for each kind of error, because whoever hunts everything at once catches nothing.',
        },
        {
          q: 'Jasna says that "lijep" gives "ljepota", not "lijepota". Why does the spelling change?',
          options: [
            'Because nouns are never written with -ije-',
            'Because the jat is long in lijep but short in the derived word, and a short jat is written -je-',
            'Because lj and ije may not stand in the same word',
            'Because ljepota is borrowed from another dialect',
          ],
          correct: 1,
          hint: 'Say the two words aloud and listen to the length of the first syllable.',
          explanation:
            'A long jat is written ije (lijep, cvijet, vrijeme), a short one je. When a word is lengthened or derived, the syllable often shortens — and the spelling follows: ljepota, ljepši, cvjetovi. Nouns as such have nothing against -ije-: cvijet, mlijeko, riječ.',
        },
        {
          type: 'type',
          q: 'Pred kućom raste ____ grm. (cvijet → the adjective: "a flowering bush")',
          answer: 'cvjetni',
          accept: ['cvjetan'],
          hint: 'The syllable that is long in the noun is no longer long in the derived adjective, and the spelling follows the length.',
          explanation:
            'cvjetni grm — cvijet has a long jat (ije); in cvjetni, as in cvjetovi and cvjećar, the jat is short and is written je.',
        },
        {
          type: 'type',
          q: 'Urednik je javio da večeras ____ doći. (he cannot — the negative particle and the verb, written as the norm requires)',
          answer: 'ne može',
          hint: 'Only three verbs fuse with the negative particle, and moći is not one of them.',
          explanation:
            'ne može — two words. The particle ne is written apart from the verb (ne znam, ne mogu, ne može); it fuses only in the negative forms of imati, htjeti and biti: nemam, neću, nisam.',
        },
        {
          type: 'transform',
          q: 'Put the sentence into the future tense, and write the negative auxiliary as today’s norm requires.',
          from: 'Ne čitam tekst naglas.',
          answer: 'Neću čitati tekst naglas.',
          accept: [
            'Neću tekst čitati naglas.',
            'Tekst neću čitati naglas.',
            'Neću naglas čitati tekst.',
            'Neću pročitati tekst naglas.',
          ],
          hint: 'The negative future auxiliary is one of the three verbs Jasna lists — and it is spelled with the soft of the two similar letters.',
          explanation:
            'Neću čitati tekst naglas. — neću is written as one word and with ć (hoću, neću, ću), while čitati has č. After neću the infinitive keeps its full form: čitat ću, but neću čitati.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Nisam došao jer sam bio bolestan." needs a comma before "jer".',
        answer: false,
        hint: 'Does the reason come before the main clause here, or after it?',
        explanation:
          'False. A dependent clause that FOLLOWS its main clause in the natural order is not set off: Nisam došao jer sam bio bolestan. Put the dependent clause first and the comma appears: Budući da sam bio bolestan, nisam došao.',
      },
      9,
      {
        type: 'sort',
        q: 'Which form of the preposition goes in front?',
        groups: ['s', 'sa'],
        items: [
          { hr: '___ bratom', group: 0 },
          { hr: '___ sestrom', group: 1 },
          { hr: '___ šefom', group: 1 },
          { hr: '___ prijateljima', group: 0 },
          { hr: '___ zadovoljstvom', group: 1 },
          { hr: '___ kolegama', group: 0 },
          { hr: '___ mnom', group: 1 },
          { hr: '___ djecom', group: 0 },
        ],
        explanation:
          'sa stands before s, š, z and ž, where a bare s would be swallowed (sa sestrom, sa šefom, sa zadovoljstvom), and in sa mnom; it is also allowed before awkward clusters (sa psom). Otherwise the short form is the norm: s bratom, s prijateljima, s kolegama, s djecom.',
      },
      10,
      {
        type: 'match',
        q: 'Match each word with a long jat to its relative with a short one.',
        pairs: [
          ['dijete', 'djeca'],
          ['mlijeko', 'mljekar'],
          ['snijeg', 'snjegović'],
          ['vrijeme', 'vremenski'],
          ['zvijezda', 'zvjezdica'],
        ],
        explanation:
          'Long jat is written ije, short jat je — and after r that follows a consonant the short jat is usually just e: vrijeme → vremenski. When the syllable shortens in a derived or inflected form, the spelling changes with it.',
      },
      11,
      0,
      {
        type: 'order',
        q: 'Put the words in order: "She told me that she would send it to me tomorrow."',
        words: ['Rekla', 'mi', 'je', 'da', 'će', 'mi', 'ga', 'sutra', 'poslati.'],
        accept: ['Rekla mi je da će mi ga poslati sutra.'],
        explanation:
          'Rekla mi je da će mi ga sutra poslati. — each clause has its own cluster in the fixed order: in the main clause dative mi, then je; after da the auxiliary će, then dative mi, then accusative ga. No comma before da.',
      },
      {
        type: 'fix',
        q: 'One word is misspelled. Tap it. ("Come to our place for lunch and bring some fruit.")',
        words: ['Dođi', 'k', 'nama', 'na', 'ručak', 'i', 'donesi', 'voče.'],
        wrong: 7,
        answer: 'voće.',
        hint: 'Two letters of the alphabet sound alike to many speakers. One word here has the right one, another has the wrong one.',
        explanation:
          'Dođi k nama na ručak i donesi voće. — ručak has the hard č, voće the soft ć. Many speakers do not hear the difference, so this pair has to be learned word by word and checked in a separate pass.',
      },
      5,
      {
        type: 'transform',
        q: 'Replace BOTH nouns with short pronouns and keep the cluster in order.',
        from: 'Vratit ću knjigu Ani sutra.',
        answer: 'Vratit ću joj je sutra.',
        accept: [
          'Sutra ću joj je vratiti.',
          'Vratit ću joj ju sutra.',
          'Sutra ću joj ju vratiti.',
          'Ja ću joj je sutra vratiti.',
          'Ja ću joj je vratiti sutra.',
        ],
        hint: 'After the auxiliary, the person who receives comes before the thing that is given.',
        explanation:
          'Vratit ću joj je sutra. — the cluster runs auxiliary (ću), dative (joj), accusative (je). A cluster in the wrong order (ću je joj) is one of the errors that survive every silent rereading and are caught at once when the text is read aloud.',
      },
      4,
      {
        type: 'listen',
        audio:
          'Lektorica mi je vratila tekst s napomenom da zarez ispred veznika „ali” nedostaje na tri mjesta, a da ispred veznika „da” stoji na dva mjesta gdje ne bi smio.',
        q: 'What did the copy editor find?',
        options: [
          'A comma is missing before "ali" in three places and wrongly stands before "da" in two',
          'A comma is missing before "da" in three places and wrongly stands before "ali" in two',
          'There are five commas too many in the text',
          'The conjunctions "ali" and "da" are used wrongly in five places',
        ],
        correct: 0,
        explanation:
          'zarez ispred „ali” nedostaje na tri mjesta — a comma belongs before the contrastive ali; ispred „da” stoji… gdje ne bi smio — and it does not belong before da introducing an object clause (Mislim da je tako).',
      },
      {
        type: 'dictate',
        audio: 'Ne znam kada ću stići.',
        answer: 'Ne znam kada ću stići.',
        hint: 'Five words: "I do not know when I will arrive." Count the words as you write.',
        explanation:
          'Ne znam kada ću stići. — ne znam is two words; ću and stići both have the soft ć; and no comma stands before kada, because the dependent clause follows its main clause.',
      },
    ],
  },

  // ── Reading the media critically ───────────────────────────────────────────
  'media-analysis': {
    text: {
      kind: 'dialogue',
      title: 'Dvije vijesti o istoj školi',
      lines: [
        {
          who: 'Profesorica',
          hr: 'Pročitat ću vam vijest s jednoga portala: „Donesena je odluka o zatvaranju područne škole u Brezju. Kako doznajemo, do zatvaranja je došlo zbog racionalizacije mreže škola.” Što ste primijetili?',
          en: 'I am going to read you a news item from a news site: “A decision has been made to close the branch school in Brezje. As we have learned, the closure came about because of the rationalization of the school network.” What did you notice?',
        },
        {
          who: 'Ema',
          hr: 'Prvo to da nitko ništa nije učinio. Odluka „je donesena”, do zatvaranja „je došlo” — a tko ju je donio, iz teksta se ne može doznati.',
          en: 'First of all, that nobody did anything. The decision “has been made,” the closure “came about” — and who made it cannot be learned from the text.',
        },
        {
          who: 'Luka',
          hr: 'Meni je zapela za oko „racionalizacija”. Roditelji bi to vjerojatno nazvali ukidanjem škole, a ne racionalizacijom.',
          en: 'What caught my eye was “rationalization.” The parents would probably call it abolishing the school, not rationalization.',
        },
        {
          who: 'Profesorica',
          hr: 'Točno. Nijedna od tih riječi nije netočna, ali svaka uokviruje događaj na svoj način. A izvor?',
          en: 'Exactly. Neither of those words is inaccurate, but each frames the event in its own way. And the source?',
        },
        {
          who: 'Ema',
          hr: '„Kako doznajemo” — dakle, izvor nije imenovan. Portal nam zapravo poručuje da za tu tvrdnju ne jamči.',
          en: '“As we have learned” — so the source is not named. The site is really telling us that it does not vouch for that claim.',
        },
        {
          who: 'Profesorica',
          hr: 'Usporedite to s drugim listom: „Gradsko vijeće sinoć je, unatoč prosvjedu roditelja, ukinulo školu u Brezju. Gradonačelnik je odbio komentirati odluku.”',
          en: 'Compare that with another paper: “Last night the city council, despite a protest by parents, abolished the school in Brezje. The mayor declined to comment on the decision.”',
        },
        {
          who: 'Luka',
          hr: 'Ovdje se odmah zna tko je što učinio: vijeće je ukinulo, gradonačelnik je odbio. I spominje se prosvjed, kojega u prvoj vijesti uopće nema.',
          en: 'Here you know at once who did what: the council abolished, the mayor declined. And the protest is mentioned, which is not in the first item at all.',
        },
        {
          who: 'Ema',
          hr: 'Ali ni drugi list nije nevin. U nastavku piše o „takozvanoj racionalizaciji”, što znači da autor tu riječ ne prihvaća, premda to nigdje izravno ne kaže.',
          en: 'But the second paper is not innocent either. Further on it writes about the “so-called rationalization,” which means that the author does not accept that word, although he nowhere says so directly.',
        },
        {
          who: 'Profesorica',
          hr: 'Izvrsno. Koja je, dakle, od dviju vijesti objektivnija?',
          en: 'Excellent. So which of the two items is the more objective?',
        },
        {
          who: 'Luka',
          hr: 'Rekao bih da nijedna nije posve neutralna: prva skriva počinitelja, a druga zauzima stranu. Čitatelj koji želi znati što se dogodilo mora pročitati obje.',
          en: 'I would say that neither is entirely neutral: the first hides the one responsible, and the second takes a side. A reader who wants to know what happened has to read both.',
        },
        {
          who: 'Profesorica',
          hr: 'I pritom se uvijek upitati tri stvari: tko je nestao iz rečenice, koja riječ nije izabrana i tko za tvrdnju jamči.',
          en: 'And always ask three things while doing so: who has disappeared from the sentence, which word was not chosen, and who vouches for the claim.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does the second paper report that the first item leaves out altogether?',
          options: [
            'The name of the village where the school is',
            'The official reason for the closure',
            'The parents’ protest — and who actually closed the school',
            'The fact that the source wished to remain unnamed',
          ],
          correct: 2,
          hint: 'Recall what Luka notices right after the professor reads the second item.',
          explanation:
            'Gradsko vijeće… unatoč prosvjedu roditelja, ukinulo je školu. — the second paper names the actor and mentions the protest, kojega u prvoj vijesti uopće nema. The official reason and the unnamed source belong to the FIRST item.',
        },
        {
          q: 'Why does "Donesena je odluka o zatvaranju škole" suit a writer who would rather not say who is responsible?',
          options: [
            'Because the passive participle makes the decision the grammatical subject, and the sentence is complete without anyone who decided',
            'Because the participle shows that the decision is not yet final',
            'Because the feminine form donesena refers to the school, not to people',
            'Because a passive sentence is always more formal and therefore more truthful',
          ],
          correct: 0,
          hint: 'Ask "tko?" of the sentence. Is there any slot in it that must hold the answer?',
          explanation:
            'In the participle passive the thing done is the subject (odluka), and nothing obliges the writer to add the doer. The sentence is perfectly good Croatian — and for precisely that reason the first question to put to it is: tko je donio odluku?',
        },
        {
          type: 'transform',
          q: 'Name the actor: rewrite the headline as an active sentence with "Gradsko vijeće" as its subject.',
          from: 'Donesena je odluka o zatvaranju škole.',
          answer: 'Gradsko vijeće donijelo je odluku o zatvaranju škole.',
          accept: [
            'Gradsko je vijeće donijelo odluku o zatvaranju škole.',
            'Gradsko vijeće je donijelo odluku o zatvaranju škole.',
            'Odluku o zatvaranju škole donijelo je gradsko vijeće.',
          ],
          hint: 'The subject of the passive becomes the object, and the verb now agrees with a neuter singular subject.',
          explanation:
            'Gradsko vijeće donijelo je odluku o zatvaranju škole. — odluka → odluku (accusative), donesena je → donijelo je, agreeing with vijeće. The same facts, but now somebody answers for them.',
        },
        {
          type: 'type',
          q: 'Prema ____ informacijama, ravnateljica podnosi ostavku. (neslužben — unofficial; in the form "prema" requires here)',
          answer: 'neslužbenim',
          hint: 'prema governs the dative, and the adjective must agree with a plural noun.',
          explanation:
            'Prema neslužbenim informacijama… — dative plural after prema. Like kako doznajemo, the phrase tells the reader that nobody has put a name to the claim, and that the paper is not vouching for it.',
        },
        {
          type: 'type',
          q: 'Jedan list piše „racionalizacija”, a roditelji govore „ukidanje”. Vlada kaže „mjere štednje”, a sindikati kažu: ____. (cuts — rez, in the plural)',
          answer: 'rezovi',
          hint: 'A one-syllable masculine noun: it takes the long plural.',
          explanation:
            'rezovi — "cuts". mjere štednje and rezovi can describe the very same policy; the first presents it as prudence, the second as loss. Neither is false, and noticing which one a paper chose is half of reading it.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'When a paper writes "kako doznajemo", it is telling the reader that it has verified the claim and stands behind it.',
        answer: false,
        hint: 'Who is the source in that phrase — and is that source named?',
        explanation:
          'False. kako doznajemo ("as we have learned") points to a source that is not named. It is a distancing phrase: the paper passes the claim on without vouching for it, and a careful summary must keep that qualification.',
      },
      10,
      0,
      {
        type: 'sort',
        q: 'Is the one who acted named in the sentence?',
        groups: ['The actor is named', 'The actor has disappeared'],
        items: [
          { hr: 'Vlada je uvela novi porez.', group: 0 },
          { hr: 'Uveden je novi porez.', group: 1 },
          { hr: 'Uprava je otpustila dvadeset radnika.', group: 0 },
          { hr: 'Došlo je do otpuštanja dvadeset radnika.', group: 1 },
          { hr: 'Sud je odbacio tužbu.', group: 0 },
          { hr: 'Tužba je odbačena.', group: 1 },
        ],
        explanation:
          'Two constructions make an actor vanish: the participle passive (Uveden je…, Tužba je odbačena) and the verbal noun with došlo je do… (do otpuštanja). All six sentences are correct Croatian; only three of them tell you whom to ask.',
      },
      9,
      {
        type: 'match',
        q: 'Match each expression to what it tells the reader.',
        pairs: [
          ['navodno', 'reported, but not vouched for'],
          ['tobože', 'the writer thinks it is untrue'],
          ['takozvani', 'the writer rejects the label'],
          ['prema službenom priopćenju', 'an official statement is the source'],
          ['bez komentara', 'somebody declined to answer'],
        ],
        explanation:
          'navodno is neutral distance; tobože and takozvani carry the writer’s own disbelief — an opinion smuggled in through a single word. prema službenom priopćenju names a source that can be held to its words, and bez komentara records a refusal to speak.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "The minister declined to comment on the decision."',
        words: ['Ministar', 'je', 'odbio', 'komentirati', 'odluku.'],
        accept: ['Ministar je odluku odbio komentirati.', 'Odluku je ministar odbio komentirati.'],
        explanation:
          'Ministar je odbio komentirati odluku. — odbiti + infinitive; komentirati takes a direct object in the accusative, with no preposition where English says "comment ON".',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("According to unofficial sources, the negotiations have failed.")',
        words: ['Prema', 'neslužbenim', 'izvora,', 'pregovori', 'su', 'propali.'],
        wrong: 2,
        answer: 'izvorima,',
        hint: 'The adjective already shows the case the preposition requires. The noun has not followed it.',
        explanation:
          'Prema neslužbenim izvorima, pregovori su propali. — prema takes the dative: neslužbenim izvorima. And note what the phrase does: it reports a failure for which nobody is yet willing to answer by name.',
      },
      7,
      2,
      {
        type: 'transform',
        q: 'Make the actor disappear, the way an official statement might: begin with "Došlo je do…" and use a verbal noun.',
        from: 'Ministarstvo je ukinulo stipendije.',
        answer: 'Došlo je do ukidanja stipendija.',
        accept: ['Do ukidanja stipendija je došlo.', 'Došlo je do ukidanja stipendije.'],
        hint: 'The verb turns into a noun in the genitive after "do", and its former object becomes a genitive too. The subject simply has no place left.',
        explanation:
          'Došlo je do ukidanja stipendija. — ukinuti → ukidanje, genitive ukidanja; stipendije → stipendija (genitive plural). The ministry is gone, and the event now seems to have happened by itself — which is why it pays to turn such sentences back into active ones as you read.',
      },
      {
        type: 'listen',
        audio:
          'Navodno je do prekida pregovora došlo nakon što je uprava, kako doznajemo iz neslužbenih izvora, odbila razgovarati o plaćama.',
        q: 'How much of this does the paper vouch for?',
        options: [
          'All of it: the breakdown and its cause are stated as confirmed facts',
          'Only the cause: the refusal to discuss pay has been officially confirmed',
          'None of it firmly: the breakdown is "alleged", and the reason comes from unnamed, unofficial sources',
          'Nothing, because the paper says the report is false',
        ],
        correct: 2,
        explanation:
          'Two distancing signals in one sentence: navodno (allegedly) for the breakdown, and kako doznajemo iz neslužbenih izvora for its cause. The paper reports, but vouches for nothing. It does not, however, call the story false — that would take tobože.',
      },
      {
        type: 'dictate',
        audio: 'Tko je donio tu odluku?',
        answer: 'Tko je donio tu odluku?',
        hint: 'Five words: the question a critical reader puts to a headline with no actor — "Who made that decision?"',
        explanation:
          'Tko je donio tu odluku? — donijeti odluku is the fixed phrase for making a decision; the participle is donio (masculine, with tko): before the final o the -ije- of donijeti gives a plain i — donio, but donijela.',
      },
    ],
  },

  // ── Legal and administrative Croatian ──────────────────────────────────────
  'law-administration': {
    text: {
      kind: 'dialogue',
      title: 'Rješenje na šalteru',
      lines: [
        {
          who: 'Stranka',
          hr: 'Dobar dan. Dobila sam rješenje kojim se moj zahtjev za dječji doplatak odbija, a ne razumijem ni zašto ni što sada mogu učiniti.',
          en: 'Good afternoon. I have received a decision refusing my application for a child allowance, and I understand neither why nor what I can do now.',
        },
        {
          who: 'Službenica',
          hr: 'Dobar dan, gospođo Jurić. Pogledajmo obrazloženje: zahtjev je odbijen na temelju članka 17. stavka 2. Zakona jer mu nije priložena potvrda o prihodima za prošlu godinu.',
          en: 'Good afternoon, Mrs. Jurić. Let us look at the statement of reasons: the application was refused pursuant to Article 17, paragraph 2 of the Act because a certificate of income for last year was not attached to it.',
        },
        {
          who: 'Stranka',
          hr: 'Ali ja sam potvrdu predala! Ovdje piše da se „smatra da podnositelj nije udovoljio uvjetima”. Tko to smatra?',
          en: 'But I did hand in the certificate! It says here that “the applicant is deemed not to have met the conditions.” Who deems that?',
        },
        {
          who: 'Službenica',
          hr: 'Tako se u rješenjima piše; misli se na tijelo koje je odlučivalo. Vaša je potvrda, koliko vidim, stigla dva dana nakon isteka roka, pa se sukladno propisima nije mogla uzeti u obzir.',
          en: 'That is how decisions are worded; it means the body that decided the matter. Your certificate, as far as I can see, arrived two days after the deadline had expired, so in accordance with the regulations it could not be taken into account.',
        },
        {
          who: 'Stranka',
          hr: 'Znači li to da je sve propalo?',
          en: 'Does that mean everything is lost?',
        },
        {
          who: 'Službenica',
          hr: 'Ne znači. Pročitajte uputu o pravnom lijeku na dnu: protiv ovog rješenja možete izjaviti žalbu, a rok za žalbu iznosi petnaest dana od dana dostave.',
          en: 'It does not. Read the notice of legal remedy at the bottom: you may lodge an appeal against this decision, and the time limit for the appeal is fifteen days from the date of service.',
        },
        {
          who: 'Stranka',
          hr: 'Rješenje mi je poštar uručio prošlog utorka. Računa li se i taj dan?',
          en: 'The mail carrier handed me the decision last Tuesday. Does that day count as well?',
        },
        {
          who: 'Službenica',
          hr: 'Ne računa se; rok počinje teći prvoga sljedećeg dana. Žalba se predaje ovom uredu, pisano, a u njoj morate navesti zbog čega rješenje pobijate.',
          en: 'It does not; the time limit starts to run on the first day after it. The appeal is filed with this office, in writing, and in it you must state why you are contesting the decision.',
        },
        {
          who: 'Stranka',
          hr: 'I što trebam priložiti?',
          en: 'And what do I need to attach?',
        },
        {
          who: 'Službenica',
          hr: 'Potvrdu o prihodima i dokaz o prebivalištu; izvornike ponesite na uvid. Dok se o žalbi ne odluči, rješenje nije pravomoćno.',
          en: 'The certificate of income and proof of residence; bring the originals for inspection. Until the appeal has been decided, the decision is not final.',
        },
        {
          who: 'Stranka',
          hr: 'Hvala Vam. Da su mi to ovako objasnili odmah, ne bih izgubila tjedan dana.',
          en: 'Thank you. If they had explained it to me like this right away, I would not have lost a week.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why was Mrs. Jurić’s application refused?',
          options: [
            'She had never handed in a certificate of income',
            'Her income for last year was too high',
            'Her certificate of income arrived two days after the deadline had expired',
            'She had not attached proof of residence',
          ],
          correct: 2,
          hint: 'She insists that she DID hand the certificate in. What does the clerk then see in the file?',
          explanation:
            'Vaša je potvrda stigla dva dana nakon isteka roka, pa se nije mogla uzeti u obzir. — the document existed, but it was late. In administrative matters the deadline is the one sentence worth reading twice.',
        },
        {
          q: 'The clerk says the certificate could not be considered "sukladno propisima". Why does "propisi" take this form?',
          options: [
            'Because sukladno governs the genitive, like na temelju',
            'Because it is an instrumental after an understood "s"',
            'Because every noun in legal language stands in the locative',
            'Because sukladno governs the dative',
          ],
          correct: 3,
          hint: 'Compare her earlier phrase "na temelju članka": the two formulas do not take the same case.',
          explanation:
            'sukladno + dative: sukladno propisima, sukladno zakonu. Its near-synonym u skladu s takes the instrumental (u skladu s propisima), while na temelju and temeljem take the genitive (na temelju članka 17.). In the plural the dative and instrumental look alike, which is why the singular is the real test.',
        },
        {
          type: 'type',
          q: 'Najamnina se plaća na temelju ____ o najmu. (ugovor)',
          answer: 'ugovora',
          hint: 'The clerk uses the same formula with "članak". Which case does it put the noun in?',
          explanation:
            'na temelju ugovora o najmu — na temelju (like the more bureaucratic temeljem) governs the genitive.',
        },
        {
          type: 'transform',
          q: 'Unpack the impersonal style: tell Mrs. Jurić directly what SHE has to do. Use "morate" and keep the rest.',
          from: 'Žalba se predaje ovom uredu.',
          answer: 'Žalbu morate predati ovom uredu.',
          accept: [
            'Morate predati žalbu ovom uredu.',
            'Žalbu morate predati ovomu uredu.',
            'Morate predati žalbu ovomu uredu.',
            'Ovom uredu morate predati žalbu.',
            'Morate žalbu predati ovom uredu.',
            'Vi morate predati žalbu ovom uredu.',
          ],
          hint: 'In the se-passive the appeal is the subject. Once a person does the filing, the appeal becomes an object — and one single filing calls for the perfective verb.',
          explanation:
            'Žalbu morate predati ovom uredu. — žalba (nominative) → žalbu (accusative), and the general predaje se becomes the single act predati. Turning administrative sentences back into "who has to do what" is the surest way to check that you have understood them.',
        },
        {
          type: 'type',
          q: 'Sukladno ____ 5. ovoga ugovora, najam prestaje istekom godine. (članak)',
          answer: 'članku',
          hint: 'Unlike "na temelju", this formula does not take the genitive.',
          explanation:
            'Sukladno članku 5. ovoga ugovora… — sukladno + dative (članku), whereas na temelju takes the genitive (članka). The period after the numeral marks it as an ordinal: "članku petom".',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In "temeljem članka 12." and "sukladno članku 12." the word for "article" stands in the same case.',
        answer: false,
        hint: 'Look at the last letter of the noun in each phrase.',
        explanation:
          'False. temeljem (like na temelju) takes the genitive — članka; sukladno takes the dative — članku. Mixing the two is one of the commonest errors in administrative prose, even among native speakers.',
      },
      9,
      {
        type: 'sort',
        q: 'Which case does the formula govern?',
        groups: ['Genitive', 'Dative', 'Instrumental'],
        items: [
          { hr: 'na temelju', group: 0 },
          { hr: 'temeljem', group: 0 },
          { hr: 'u svrhu', group: 0 },
          { hr: 'sukladno', group: 1 },
          { hr: 'protivno', group: 1 },
          { hr: 'u skladu s', group: 2 },
          { hr: 'u vezi s', group: 2 },
        ],
        explanation:
          'na temelju zakona, temeljem zakona, u svrhu postupka (genitive); sukladno zakonu, protivno zakonu (dative); u skladu sa zakonom, u vezi sa zahtjevom (instrumental). All of these are standard; outside legal templates na temelju and u skladu s are the more neutral choices, while temeljem and sukladno sound bureaucratic.',
      },
      10,
      {
        type: 'match',
        q: 'Match each term to its meaning.',
        pairs: [
          ['pravomoćno rješenje', 'a decision that can no longer be appealed'],
          ['uputa o pravnom lijeku', 'the notice that tells you how to appeal'],
          ['obrazloženje', 'the statement of reasons'],
          ['dostava', 'the official delivery of a document'],
          ['prebivalište', 'registered permanent residence'],
        ],
        explanation:
          'Every administrative decision has an obrazloženje and ends with an uputa o pravnom lijeku; time limits run from the dostava; and the decision becomes pravomoćno once it can no longer be contested by an appeal.',
      },
      11,
      3,
      {
        type: 'order',
        q: 'Put the words in order: "An appeal may be lodged against this decision within fifteen days."',
        words: [
          'Protiv',
          'ovog',
          'rješenja',
          'može',
          'se',
          'izjaviti',
          'žalba',
          'u',
          'roku',
          'od',
          'petnaest',
          'dana.',
        ],
        accept: [
          'Protiv ovog rješenja žalba se može izjaviti u roku od petnaest dana.',
          'Žalba se protiv ovog rješenja može izjaviti u roku od petnaest dana.',
          'Protiv ovog se rješenja može izjaviti žalba u roku od petnaest dana.',
          'Protiv ovog rješenja može se u roku od petnaest dana izjaviti žalba.',
          'U roku od petnaest dana može se protiv ovog rješenja izjaviti žalba.',
          'U roku od petnaest dana protiv ovog rješenja može se izjaviti žalba.',
          'Žalba se može izjaviti protiv ovog rješenja u roku od petnaest dana.',
          'Protiv ovog rješenja može se izjaviti u roku od petnaest dana žalba.',
        ],
        explanation:
          'Protiv ovog rješenja može se izjaviti žalba u roku od petnaest dana. — the standard closing formula of a decision: protiv + genitive, the impersonal može se, the fixed phrase izjaviti žalbu, and the deadline, u roku od + genitive.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("In accordance with the provisions of the contract, the tenant pays the utilities.")',
        words: ['U', 'skladu', 's', 'odredaba', 'ugovora,', 'najmoprimac', 'plaća', 'režije.'],
        wrong: 3,
        answer: 'odredbama',
        hint: 'The little word before the wrong one decides its case.',
        explanation:
          'U skladu s odredbama ugovora, najmoprimac plaća režije. — u skladu s takes the instrumental: s odredbama. odredaba is a genitive plural, the form that na temelju would require.',
      },
      2,
      {
        type: 'transform',
        q: 'Rewrite the sentence with the more neutral, everyday formula: "u skladu s" in place of "sukladno".',
        from: 'Sukladno zakonu, žalba odgađa izvršenje rješenja.',
        answer: 'U skladu sa zakonom, žalba odgađa izvršenje rješenja.',
        accept: [
          'Žalba odgađa izvršenje rješenja u skladu sa zakonom.',
          'Žalba u skladu sa zakonom odgađa izvršenje rješenja.',
        ],
        hint: 'Two things change: the case of the noun, and — because of the sound the noun begins with — the shape of the preposition.',
        explanation:
          'U skladu sa zakonom, žalba odgađa izvršenje rješenja. — sukladno + dative (zakonu) becomes u skladu s + instrumental (zakonom), and before z the preposition takes its longer form, sa.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Podnositelj zahtjeva dužan je u roku od osam dana dostaviti dokaz o prebivalištu; u protivnom će se smatrati da je od zahtjeva odustao.',
        q: 'What happens if the applicant does nothing?',
        options: [
          'The application will be decided without the document',
          'The applicant will be given eight more days',
          'The applicant will have to pay a fine',
          'The application will be treated as withdrawn',
        ],
        correct: 3,
        explanation:
          'u roku od osam dana — within eight days; u protivnom — otherwise; smatrat će se da je od zahtjeva odustao — he will be deemed to have withdrawn the application. The deadline and its consequence stand in one sentence, as they usually do.',
      },
      {
        type: 'dictate',
        audio: 'Izmjene stupaju na snagu danom donošenja.',
        answer: 'Izmjene stupaju na snagu danom donošenja.',
        hint: 'Six words: "The amendments come into force on the day they are adopted."',
        explanation:
          'Izmjene stupaju na snagu danom donošenja. — stupiti / stupati na snagu is the fixed phrase for regulations coming into force; danom donošenja is an instrumental of time, "as of the day of adoption".',
      },
    ],
  },
};
