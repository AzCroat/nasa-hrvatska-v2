// functions/api/content/_data/lessonPracticeA2.js
//
// A2 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time) and one guided-practice slide (four items, each with a HINT shown
// after a first wrong try and an explanation once resolved).
//
// Authoring rules, the same ones the checks and drills follow:
//   - distractors are wrong by case, gender, agreement, aspect, word order or
//     register — never by being Serbian, and never real Croatian that a native
//     would say for the meaning asked;
//   - no cue in the form of its answer (a parenthetical names the MEANING or the
//     dictionary form, not the answer);
//   - a hint points at the rule and never contains the answer;
//   - the greeting is bog (owner decision, 2026-07).
//
// Academic programme (2026-09-29): each entry also carries checkB (a parallel
// six-item mastery check on the same objectives, served after a fail), guided
// practice extended to twelve items with at least four TYPED (the learner writes
// the form; the cue names the meaning or the dictionary form, never the answer),
// and vocab: the lesson's own target words as [hr, en, example], enrolled in
// review on a pass.
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_A2 = {
  present: {
    worked: [
      {
        title: 'The Verb That Hides Its Ja Form',
        problem: 'Dopuni glagolom moći: Ja ___ doći sutra.',
        en: 'Fill in with moći: I can come tomorrow.',
        steps: [
          {
            label: 'Who is the subject?',
            text: 'ja — first person singular.',
          },
          {
            label: 'Recall the pattern',
            text: 'moći runs možeš, može, možemo, možete — the stem changes to mož- almost everywhere.',
          },
          {
            label: 'Spot the exception',
            text: 'The ja form is NOT built from mož-: it keeps the g and ends in -u, exactly like the oni form.',
          },
          {
            label: 'Check the second verb',
            text: 'After moći the next verb stays in the infinitive: doći.',
          },
        ],
        answer: 'Ja mogu doći sutra.',
      },
      {
        title: 'An -ovati Verb',
        problem: 'Stavi u prezent (mi): putovati',
        en: 'Put into the present (we): to travel',
        steps: [
          {
            label: 'Look at the infinitive',
            text: 'putovati ends in -ovati — a warning sign.',
          },
          {
            label: 'Change the middle',
            text: 'In the present, -ova- becomes -uj-: put- + -uj- gives the stem putuj-.',
          },
          {
            label: 'Add the ending',
            text: 'It follows the -em pattern, and mi takes -emo.',
          },
        ],
        answer: 'putujemo',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ti ___ na posao pješice. (ići)',
          options: ['ideš', 'ide', 'idete', 'idem'],
          correct: 0,
          hint: 'Ti is second person singular, and ići builds its present on the stem id-.',
          explanation: 'ti ideš — "you go". The endings are -em, -eš, -e, -emo, -ete, -u.',
        },
        {
          q: 'Oni ___ novine svako jutro. (čitati)',
          options: ['čita', 'čitaju', 'čitamo', 'čitate'],
          correct: 1,
          hint: 'Oni is third person plural. In the -am class that ending is -aju.',
          explanation: 'oni čitaju — like gledati: gledaju.',
        },
        {
          q: 'Ona ___ voće na tržnici. (kupovati)',
          options: ['kupova', 'kupuje', 'kupovi', 'kupuj'],
          correct: 1,
          hint: 'An -ovati verb never keeps its -ova- in the present.',
          explanation: 'kupovati → kupujem, kupuješ, kupuje. The -ova- becomes -uje-.',
        },
        {
          q: 'Mi ___ ići danas. (we do not want to)',
          options: ['ne hoćemo', 'nećemo', 'ne htjemo', 'nehtimo'],
          correct: 1,
          hint: 'The negative of htjeti is not ne + the long form: ne fuses with the short form into one word.',
          explanation: 'nećemo — one word, like neću, nećeš, neće.',
        },
        {
          type: 'type',
          q: 'Ja ____ ručak svaki dan. (kuhati)',
          answer: 'kuham',
          hint: 'kuhati follows the -am pattern, like gledati; ja ends in -m.',
          explanation: 'kuhati → kuham, kuhaš, kuha, kuhamo, kuhate, kuhaju.',
        },
        {
          type: 'type',
          q: 'Vi ____ jako brzo. (govoriti)',
          answer: 'govorite',
          hint: 'govoriti is an -im verb, and vi takes the ending -ite.',
          explanation: 'govoriti → govorim, govoriš, govori, govorimo, govorite, govore.',
        },
        {
          type: 'type',
          q: 'Oni ____ pismo baki. (pisati)',
          answer: 'pišu',
          hint: 'pisati is an -em verb with an s → š change in every present form; oni ends in -u.',
          explanation: 'pisati → pišem, pišeš, piše, pišemo, pišete, pišu.',
        },
        {
          type: 'type',
          q: 'Oni ____ kruh u pekari. (kupovati)',
          answer: 'kupuju',
          hint: 'An -ovati verb swaps -ova- for -uj- in the present; oni ends in -u.',
          explanation: 'kupovati → kupujem, kupuješ, kupuje, kupujemo, kupujete, kupuju.',
        },
        {
          type: 'type',
          q: 'Sutra ne ____ doći. (moći — ja)',
          answer: 'mogu',
          hint: 'The ja form of moći is not built on mož- — it keeps the g, like the oni form.',
          explanation: 'moći → mogu, možeš, može, možemo, možete, mogu.',
        },
        {
          q: 'Ona ___ taksi. (zvati)',
          options: ['zova', 'zove', 'zvati', 'zovi'],
          correct: 1,
          hint: 'zvati changes its stem to zov- in the present and takes the -em endings.',
          explanation: 'ona zove — "she is calling". zovi is the imperative (call!).',
        },
        {
          q: 'Ja ___ kavu, a ti? (htjeti)',
          options: ['htjem', 'hoću', 'hoćem', 'htijem'],
          correct: 1,
          hint: 'htjeti does not use the -em or -im pattern; its forms are built on hoć-.',
          explanation: 'htjeti → hoću, hoćeš, hoće, hoćemo, hoćete, hoće.',
        },
        {
          q: 'Djeca ___ film u dnevnoj sobi. (gledati)',
          options: ['gleda', 'gledaju', 'gledamo', 'gledate'],
          correct: 1,
          hint: 'djeca means "the children" and takes a third-person plural verb.',
          explanation: 'djeca gledaju — the -am class makes its oni form in -aju.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Možeš li doći večeras? — Nažalost, ne ___." (I can\'t.)',
        options: ['možem', 'mogu', 'može', 'možemo'],
        correct: 1,
        explanation:
          'moći keeps its g in the ja form: mogu. možem is a learner invention, može is he/she, možemo is we.',
      },
      {
        q: 'Complete: "Vi ___ hrvatski jako dobro." (You all speak Croatian very well.)',
        options: ['govorite', 'govoriš', 'govore', 'govorimo'],
        correct: 0,
        explanation:
          'govoriti is an -im verb: govorim, govoriš, govori, govorimo, govorite, govore. Vi takes -ite.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Oni putovaju u Split.',
          'Oni putuje u Split.',
          'Oni putuju u Split.',
          'Oni putovu u Split.',
        ],
        correct: 2,
        explanation:
          'putovati is an -ovati verb, so -ova- becomes -uj-: putujem … putuju. putuje is the he/she form.',
      },
      {
        q: 'Spot the error: "Djeca pisaju zadaću."',
        options: [
          'zadaću should be zadaća',
          'pisaju should be pišu — pisati has the s → š change and ends in -u',
          'Djeca needs the singular verb piše',
          'nothing is wrong',
        ],
        correct: 1,
        explanation:
          'pisati conjugates pišem, pišeš, piše, pišemo, pišete, pišu. "Pisaju" does not exist, and djeca takes a plural verb.',
      },
      {
        q: 'Complete: "Oni ___ ostati kod kuće." (They do not want to stay at home.)',
        options: ['ne hoće', 'nehtiju', 'neće', 'ne htju'],
        correct: 2,
        explanation:
          'The negative of htjeti fuses into one word: neću, nećeš, neće, nećemo, nećete, neće. "Ne hoće" is not the standard form.',
      },
      {
        q: 'Complete: "Kako se ___? — Zovem se Luka." (What is your name? — to a friend)',
        options: ['zovaš', 'zoviš', 'zove', 'zoveš'],
        correct: 3,
        explanation:
          'zvati changes its stem in the present: zovem, zoveš, zove… The ti form is zoveš; zove is he/she.',
      },
    ],
    vocab: [
      ['gledati', 'to watch', 'Navečer gledamo film.'],
      ['govoriti', 'to speak', 'Govorite li engleski?'],
      ['pisati', 'to write', 'Pišem baki svaki tjedan.'],
      ['imati', 'to have', 'Imam dvije sestre.'],
      ['ići', 'to go', 'Idemo na tržnicu.'],
      ['htjeti', 'to want', 'Hoćeš li kavu?'],
      ['moći', 'to be able to, can', 'Ne mogu danas, moram raditi.'],
      ['kupovati', 'to buy (regularly)', 'Kupujem kruh svako jutro.'],
      ['putovati', 'to travel', 'Ljeti putujemo na more.'],
      ['zvati', 'to call', 'Zovem taksi.'],
      ['čitati', 'to read', 'Djed čita novine.'],
      ['kuhati', 'to cook', 'Mama kuha ručak.'],
    ],
  },

  'vi-vs-ti': {
    worked: [
      {
        title: 'Asking a Stranger',
        problem: 'Pitaj stariju gospođu na ulici: "Excuse me, do you know where the station is?"',
        en: 'Ask an older lady in the street: Excuse me, do you know where the station is?',
        steps: [
          {
            label: 'Who is it?',
            text: 'An older woman you do not know — Vi, the safe default.',
          },
          {
            label: 'Get her attention politely',
            text: 'The Vi imperative of oprostiti is oprostite.',
          },
          {
            label: 'The verb',
            text: 'znati with Vi takes -te: znate.',
          },
          {
            label: 'Make it a question',
            text: 'Verb first, li straight after it: znate li…',
          },
        ],
        answer: 'Oprostite, znate li gdje je kolodvor?',
      },
      {
        title: 'After the Invitation',
        problem: 'Susjed (60 godina) kaže: "Možemo prijeći na ti." Prihvati i pitaj ga kako je.',
        en: 'Your neighbour (60) says: "We can switch to ti." Accept, and ask how he is.',
        steps: [
          {
            label: 'Accept warmly',
            text: 'An offer to switch is a compliment. Naravno, s veseljem! is the natural answer.',
          },
          {
            label: 'Now the rules change',
            text: 'From this moment he gets ti. Keeping Vi would read as distance, not politeness.',
          },
          {
            label: 'Change the verb',
            text: 'kako ste becomes kako si.',
          },
        ],
        answer: 'Naravno, s veseljem! Kako si?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Pišeš e-mail profesorici: "Thank you for your help."',
          options: [
            'Hvala ti na pomoći.',
            'Hvala Vam na pomoći.',
            'Hvala Vas na pomoći.',
            'Hvala tebi na pomoći.',
          ],
          correct: 1,
          hint: 'A teacher gets the polite form — and hvala takes the dative, not the accusative.',
          explanation:
            'Hvala Vam na pomoći — the polite Vi, in the dative after hvala. Writing to one person, it is capitalised as a courtesy.',
        },
        {
          q: 'Pitaš dijete u parku kako se zove.',
          options: ['Kako se zoveš?', 'Kako se zovete?', 'Kako se zove Vi?', 'Kako Vi se zovete?'],
          correct: 0,
          hint: 'Children always get the informal form.',
          explanation: 'Kako se zoveš? — ti with a child.',
        },
        {
          q: 'Starijoj susjedi nudiš svoje mjesto: "Please sit down."',
          options: [
            'Sjedni, molim te.',
            'Sjedi, molim Vas.',
            'Sjednite, molim te.',
            'Sjednite, molim Vas.',
          ],
          correct: 3,
          hint: 'An older neighbour gets Vi — and BOTH the verb and the "please" must match.',
          explanation:
            'Sjednite, molim Vas. Mixing a ti verb with a Vi "please" (or the reverse) sounds confused.',
        },
        {
          q: 'U ljekarni pitaš ljekarnicu: "Do you have something for a headache?"',
          options: [
            'Imaš li nešto za glavobolju?',
            'Imaš li Vi nešto za glavobolju?',
            'Imate li nešto za glavobolju?',
            'Imamo li nešto za glavobolju?',
          ],
          correct: 2,
          hint: 'Someone serving you is a stranger in a formal setting, and the verb must go into the -te form.',
          explanation: 'Imate li nešto za glavobolju? — Vi, with the matching verb.',
        },
        {
          type: 'type',
          q: 'Gospođo, ____ li mi pomoći? (moći — polite)',
          answer: 'možete',
          hint: 'Polite address uses the Vi form of the verb, which ends in -te.',
          explanation: 'Vi možete — the polite "can you". The ti form would be možeš.',
        },
        {
          type: 'type',
          q: 'Ivane, ____ li vremena večeras? (imati — to a friend)',
          answer: 'imaš',
          hint: 'A friend is ti, and ti ends in -š.',
          explanation: 'ti imaš — "do you have time tonight?" to a friend.',
        },
        {
          type: 'type',
          q: 'Dobar dan, kako ____? (biti — to a stranger)',
          answer: 'ste',
          hint: 'A stranger is Vi, and Vi takes the plural form of biti.',
          explanation: 'Kako ste? — the polite "How are you?". Kako si? is for friends.',
        },
        {
          type: 'type',
          q: 'Hvala ____ na pozivu, gospodine Horvat. (to you — polite)',
          answer: 'Vam',
          hint: 'hvala takes the dative, and the polite dative of Vi is written with a capital in a letter.',
          explanation: 'hvala Vam — the polite "thank you". hvala ti is for friends.',
        },
        {
          type: 'type',
          q: 'Mama, ____ li umorna? (biti)',
          answer: 'jesi',
          hint: 'Your own mother is ti; in a li question biti uses its long form.',
          explanation:
            'Jesi li umorna? — family is informal, and a question with li opens with the long form jesi.',
        },
        {
          q: "Your friend's grandmother offers you cake. How do you thank her?",
          options: [
            'Hvala ti, bako.',
            'Hvala Vam, gospođo.',
            'Hvala, stara.',
            'Hvala tebi, gospođo.',
          ],
          correct: 1,
          hint: 'She is an elder you are not related to — think about which form of "you" that calls for.',
          explanation: 'An older woman you are meeting is Vi: hvala Vam, gospođo.',
        },
        {
          q: 'A colleague offered ti last week. Which request fits now?',
          options: [
            'Možete li mi poslati datoteku?',
            'Možeš li mi poslati datoteku?',
            'Mogu li Vam poslati datoteku?',
            'Pošaljite mi datoteku, molim.',
          ],
          correct: 1,
          hint: 'After the offer, staying on Vi reads as distance.',
          explanation: 'Možeš li… — the ti form, now that you have switched.',
        },
        {
          q: 'A child in a shop asks you something. Which reply is natural?',
          options: [
            'Izvolite, recite.',
            'Da, dušo, što trebaš?',
            'Da, gospodine, što trebate?',
            'Molim Vas?',
          ],
          correct: 1,
          hint: 'Children are never addressed formally.',
          explanation: 'A child is ti: što trebaš? The other replies are Vi forms.',
        },
      ],
    },
    checkB: [
      {
        q: 'You ask a waiter you do not know for the bill. Complete: "___ li mi donijeti račun?"',
        options: ['Možeš', 'Može', 'Možete', 'Možemo'],
        correct: 2,
        explanation:
          'A stranger in a service setting is Vi, so the verb is možete. možeš is the ti form; može and možemo change the person.',
      },
      {
        q: 'Your cousin, who is your age, asks what you are doing tonight. Which reply fits?',
        options: [
          'Ništa posebno, a Vi?',
          'Ništa posebno, a ti?',
          'Ništa posebno, a oni?',
          'Ništa posebno, a ja?',
        ],
        correct: 1,
        explanation:
          'Family and peers are ti, so "a ti?" returns the question at the same level. Vi would sound distant.',
      },
      {
        q: 'Which greeting fits a first visit to a new doctor?',
        options: ['Bog, kako si?', 'Ćao, doktore!', 'Dobar dan, doktore.', 'Hej, što ima?'],
        correct: 2,
        explanation:
          'A doctor is addressed formally: a time-of-day greeting and the title. The others are ti-register openers.',
      },
      {
        q: 'Your 70-year-old neighbour says: "Ma, možemo na ti." What is the best reply?',
        options: [
          'Ne, radije ću Vam i dalje govoriti Vi.',
          'Naravno, s veseljem!',
          'Zašto?',
          'Hvala Vam, gospodine, ali ne.',
        ],
        correct: 1,
        explanation:
          'An offer to switch to ti is a sign of welcome. Accept it warmly; refusing reads as cold.',
      },
      {
        q: 'Complete, speaking to your best friend: "Hvala ___ na pomoći!"',
        options: ['ti', 'Vam', 'Vi', 'tebe'],
        correct: 0,
        explanation:
          'hvala takes the dative, and a friend is ti: hvala ti. Vam is the polite dative, Vi is nominative, tebe is not dative.',
      },
      {
        q: 'Complete, to a stranger in the street: "Oprostite, ___ li mi reći koliko je sati?"',
        options: ['znaš', 'zna', 'znamo', 'znate'],
        correct: 3,
        explanation:
          'A stranger is Vi, and Vi takes the -te ending: znate. It matches the polite oprostite at the start.',
      },
    ],
    vocab: [
      ['gospodin', 'Mr, sir', 'Gospodine, izvolite sjesti.'],
      ['gospođa', 'Mrs, madam', 'Gospođo Marić, kako ste?'],
      ['oprostite', 'excuse me (polite)', 'Oprostite, gdje je pošta?'],
      ['izvolite', 'here you are, please (polite)', 'Izvolite, Vaša kava.'],
      ['molim', 'please; pardon?', 'Molim Vas, pričekajte trenutak.'],
      ['hvala', 'thank you', 'Hvala Vam na pomoći.'],
      ['prijeći na ti', 'to switch to informal address', 'Možemo li prijeći na ti?'],
      ['s veseljem', 'with pleasure', 'Naravno, s veseljem!'],
      ['drago mi je', 'nice to meet you', 'Drago mi je, ja sam Petra.'],
      ['poštovani', 'dear (formal letter opening)', 'Poštovani gospodine Horvat,'],
      ['susjed', 'neighbour', 'Naš susjed ima sedamdeset godina.'],
    ],
  },

  'past-tense': {
    worked: [
      {
        title: 'A Woman Talking About Yesterday',
        problem: 'Reci (žena): "I went to the market."',
        en: 'Say (as a woman): I went to the market.',
        steps: [
          {
            label: 'Find the participle',
            text: 'ići is irregular in the past: išao for a man, išla for a woman.',
          },
          {
            label: 'Agree with the speaker',
            text: 'The speaker is a woman, so išla.',
          },
          {
            label: 'Add the auxiliary',
            text: 'ja → sam, and sam is a clitic: it sits second, straight after the participle.',
          },
          {
            label: 'Where to',
            text: 'Going somewhere is motion: na + accusative, na tržnicu.',
          },
        ],
        answer: 'Išla sam na tržnicu.',
      },
      {
        title: 'A Mixed Group, Negated',
        problem: 'Stavi u prošlo vrijeme: Petar i Ana ne rade.',
        en: 'Put into the past: Petar and Ana are not working.',
        steps: [
          {
            label: 'Who is the subject?',
            text: 'A man and a woman: a mixed group takes the masculine plural -li: radili.',
          },
          {
            label: 'Negate the auxiliary',
            text: 'su becomes the one-word negative nisu — never "ne su".',
          },
          {
            label: 'Word order',
            text: 'nisu is a full word, not a clitic, so it can stand before the participle.',
          },
        ],
        answer: 'Petar i Ana nisu radili.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moja sestra ___ pismo. (pisati — she wrote)',
          options: ['je pisao', 'je pisala', 'su pisale', 'sam pisala'],
          correct: 1,
          hint: 'The participle agrees with the subject, and sestra is feminine singular.',
          explanation: 'Moja sestra je pisala pismo. -la for one woman, je for she.',
        },
        {
          q: '___ u kinu. (We were at the cinema — two women speaking.)',
          options: ['Bili smo', 'Bile smo', 'Bila smo', 'Bile su'],
          correct: 1,
          hint: 'A group made only of women takes its own plural ending, and "we" takes smo.',
          explanation: 'Bile smo u kinu. -le is the all-female plural.',
        },
        {
          q: 'Which sentence says "Yesterday he ate fish"?',
          options: [
            'Jučer je jeo ribu.',
            'Jučer jeo je ribu.',
            'Je jučer jeo ribu.',
            'Jučer je jela ribu.',
          ],
          correct: 0,
          hint: 'The auxiliary sits in second position, and the participle must match "he".',
          explanation: 'Jučer je jeo ribu. jeo for a man; je straight after the first word.',
        },
        {
          q: 'Mi ___ film. (We did not watch the film — a mixed group.)',
          options: ['nismo gledali', 'ne smo gledali', 'nismo gledale', 'nisu gledali'],
          correct: 0,
          hint: 'The past negative is one word, and a mixed group takes the masculine plural.',
          explanation: 'Mi nismo gledali film.',
        },
        {
          type: 'type',
          q: 'Jučer sam ____ cijeli dan. (raditi — a woman speaking)',
          answer: 'radila',
          hint: 'A woman speaking about herself uses the feminine singular participle.',
          explanation: 'radila sam — feminine singular -la.',
        },
        {
          type: 'type',
          q: 'Jučer je moj brat ____ u Zadar. (ići)',
          answer: 'išao',
          hint: 'ići has an irregular participle with a š that the infinitive does not show.',
          explanation: 'išao je — masculine singular of ići.',
        },
        {
          type: 'type',
          q: 'Mi ____ bili kod kuće. (we were not)',
          answer: 'nismo',
          hint: 'The negative auxiliary is one word, and mi is first person plural.',
          explanation: 'nismo bili — the fused negative auxiliary.',
        },
        {
          type: 'type',
          q: 'Marko i Ana su ____ u kino. (ići)',
          answer: 'išli',
          hint: 'A mixed group takes the masculine plural participle.',
          explanation: 'išli su — -li for a mixed group.',
        },
        {
          type: 'type',
          q: 'Gdje si ____ jučer? (biti — to a woman)',
          answer: 'bila',
          hint: 'The participle agrees with the woman you are asking.',
          explanation: 'Gdje si bila? — feminine singular.',
        },
        {
          q: 'Ana ___ jučer. (she worked)',
          options: ['je radila', 'je radio', 'sam radila', 'su radile'],
          correct: 0,
          hint: 'Ana is one woman, in the third person.',
          explanation: 'Ana je radila — feminine participle with je.',
        },
        {
          q: 'Which says "We (two women) were in Split"?',
          options: [
            'Bili smo u Splitu.',
            'Bile smo u Splitu.',
            'Bila sam u Splitu.',
            'Bile su u Splitu.',
          ],
          correct: 1,
          hint: 'An all-female group, and the first person plural auxiliary.',
          explanation: 'Bile smo — -le for women only, smo for we.',
        },
        {
          q: 'Tko ___ vrata? (Who opened the door?)',
          options: ['je otvorila', 'je otvorio', 'su otvorili', 'sam otvorio'],
          correct: 1,
          hint: 'tko takes the same participle ending as a single man.',
          explanation: 'Tko je otvorio vrata? — tko takes the masculine singular.',
        },
      ],
    },
    checkB: [
      {
        q: 'Ivan says he was tired. Complete: "Ivan: ___ sam umoran."',
        options: ['Bio', 'Bila', 'Bili', 'Bile'],
        correct: 0,
        explanation:
          'Ivan is a man speaking about himself, so the participle is masculine singular: bio.',
      },
      {
        q: 'Complete: "Moje kolegice ___ na sastanak." (My colleagues — all women — went to the meeting.)',
        options: ['su išli', 'su išle', 'je išla', 'su išla'],
        correct: 1,
        explanation:
          'A group of women takes the -le plural: išle su. išli is for a mixed or male group.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Smo gledali film.',
          'Gledali smo film.',
          'Gledali film smo.',
          'Smo film gledali.',
        ],
        correct: 1,
        explanation:
          'The clitic smo sits in second position: Gledali smo film. It can never open the sentence.',
      },
      {
        q: 'Spot the error: "Petar je pisala pismo."',
        options: [
          'je should be sam',
          'pismo should be pisma',
          'pisala should be pisao — Petar is masculine',
          'nothing is wrong',
        ],
        correct: 2,
        explanation:
          'The participle agrees with the subject; Petar is a man: Petar je pisao pismo.',
      },
      {
        q: 'Complete: "Oni ___ doći." (They could not come.)',
        options: ['ne su mogli', 'nisu mogli', 'nisu mogao', 'nismo mogli'],
        correct: 1,
        explanation:
          'The negative auxiliary for oni is nisu, and the participle stays plural: nisu mogli.',
      },
      {
        q: 'What does "Jela sam" tell you about the speaker?',
        options: ['a man', 'a group of men', 'a group of women', 'a woman'],
        correct: 3,
        explanation:
          'jela is the feminine singular participle of jesti, and sam is first person: a woman speaking.',
      },
    ],
    vocab: [
      ['raditi', 'to work', 'Jučer sam radila do šest.'],
      ['biti', 'to be', 'Bili smo u Istri.'],
      ['ići', 'to go', 'Išao sam u Zagreb.'],
      ['jesti', 'to eat', 'Jela je pizzu.'],
      ['doći', 'to come', 'Kad si došao kući?'],
      ['moći', 'to be able to', 'Nisam mogla spavati.'],
      ['vidjeti', 'to see', 'Nismo vidjeli taj film.'],
      ['kasniti', 'to be late', 'Vlak je kasnio dvadeset minuta.'],
      ['studirati', 'to study (at university)', 'Sestre su studirale u Zadru.'],
      ['jučer', 'yesterday', 'Jučer sam kuhala ručak.'],
      ['pisati', 'to write', 'Petar je pisao pismo.'],
    ],
  },

  'accusative-deep': {
    worked: [
      {
        title: 'Is It Alive?',
        problem: 'Dopuni: Zovem ___. (susjed)',
        en: 'Fill in: I am calling the neighbour.',
        steps: [
          {
            label: 'What is its job?',
            text: 'The neighbour is being called: a direct object, so accusative.',
          },
          {
            label: 'Gender',
            text: 'susjed ends in a consonant: masculine.',
          },
          {
            label: 'Ask the key question',
            text: 'Is it alive? A neighbour is a person, so the animate rule applies: add -a.',
          },
        ],
        answer: 'Zovem susjeda.',
      },
      {
        title: 'Going, Not Being',
        problem: 'Reci: "In the evening we are going to the theatre." (kazalište)',
        en: 'In the evening we are going to the theatre.',
        steps: [
          {
            label: 'Movement or location?',
            text: 'You are going there — movement towards a place, so u + accusative.',
          },
          {
            label: 'Gender',
            text: 'kazalište ends in -e: neuter.',
          },
          {
            label: 'Apply the rule',
            text: 'A neuter accusative is the same as the dictionary form — no change.',
          },
        ],
        answer: 'Navečer idemo u kazalište.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Poznaješ li ___? (Ivan)',
          options: ['Ivan', 'Ivana', 'Ivanu', 'Ivanom'],
          correct: 1,
          hint: 'Ivan is a person — a living masculine noun as the object takes an extra ending.',
          explanation:
            'Poznaješ li Ivana? Animate masculine: the accusative looks like the genitive.',
        },
        {
          q: 'Stavi torbu ___. (onto the chair — stolica)',
          options: ['na stolicu', 'na stolici', 'na stolica', 'u stolicu'],
          correct: 0,
          hint: 'Putting something somewhere is movement, and stolica is feminine.',
          explanation: 'na stolicu — motion onto, so accusative; feminine -a → -u.',
        },
        {
          q: 'Tražim ___. (the key — ključ)',
          options: ['ključa', 'ključ', 'ključu', 'ključem'],
          correct: 1,
          hint: 'Ask whether a key is alive before you add anything.',
          explanation:
            'Tražim ključ. Inanimate masculine: the accusative equals the dictionary form.',
        },
        {
          q: 'Idemo na more ___. (on Saturday — subota)',
          options: ['u suboti', 'u subotu', 'u subota', 'na suboti'],
          correct: 1,
          hint: 'A day of the week with u is one of the accusative time expressions.',
          explanation: 'u subotu — like u ponedjeljak. Feminine -a → -u.',
        },
        {
          type: 'type',
          q: 'Imam ____. (a sister — sestra)',
          answer: 'sestru',
          hint: 'A feminine noun ending in -a changes its ending as a direct object.',
          explanation: 'sestra → sestru: feminine -a becomes -u in the accusative.',
        },
        {
          type: 'type',
          q: 'Svako jutro hranim ____. (the cat — mačka)',
          answer: 'mačku',
          hint: 'mačka is feminine; the object form swaps -a for another vowel.',
          explanation: 'mačka → mačku. Feminine -a nouns take -u as objects.',
        },
        {
          type: 'type',
          q: 'Vidim ____ svaki dan. (Marko)',
          answer: 'Marka',
          hint: 'Marko is a living masculine noun, and living masculine nouns take -a as objects.',
          explanation: 'Marko → Marka: the animate accusative, the same form as the genitive.',
        },
        {
          type: 'type',
          q: 'Stavi čašu u ____. (the kitchen — kuhinja)',
          answer: 'kuhinju',
          hint: 'stavi means movement into a place, so u takes the accusative.',
          explanation: 'u kuhinju — motion into; u kuhinji would mean already in the kitchen.',
        },
        {
          type: 'type',
          q: 'Tražim ____. (the doctor — doktor)',
          answer: 'doktora',
          hint: 'A doctor is a person — a living masculine noun.',
          explanation: 'doktor → doktora: animate masculine nouns add -a in the accusative.',
        },
        {
          q: 'Which sentence means "I am going to the city"?',
          options: ['Idem u gradu.', 'Idem u grad.', 'Idem u grada.', 'Idem u gradom.'],
          correct: 1,
          hint: 'Going somewhere is movement, and a city is not alive.',
          explanation:
            'u grad — accusative of direction; grad is inanimate, so it does not change.',
        },
        {
          q: 'Complete: "Gledamo ___." (We are watching the film.)',
          options: ['filma', 'film', 'filmu', 'filmom'],
          correct: 1,
          hint: 'The thing watched is inanimate masculine — ask whether it is alive.',
          explanation: 'film stays film: inanimate masculine accusative equals the nominative.',
        },
        {
          q: 'Complete: "Vidim ___ u vrtu." (the dog — pas)',
          options: ['pas', 'psa', 'pasa', 'psu'],
          correct: 1,
          hint: 'A dog is alive, and the a in pas drops out when an ending is added.',
          explanation: 'pas → psa: animate accusative with the -a ending.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Zovem ___." (I am calling my brother.)',
        options: ['brat', 'brata', 'bratu', 'bratom'],
        correct: 1,
        explanation:
          'brat is masculine and animate, so the accusative adds -a: brata. bratu is dative, bratom instrumental.',
      },
      {
        q: 'Complete: "Čitam ___." (I am reading an interesting book.)',
        options: [
          'zanimljiva knjiga',
          'zanimljivom knjigom',
          'zanimljivu knjigu',
          'zanimljivoj knjizi',
        ],
        correct: 2,
        explanation:
          'The direct object of a feminine -a noun ends in -u, and the adjective agrees: zanimljivu knjigu.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Idem u trgovini.', 'Idem u trgovina.', 'Idem u trgovinu.', 'Idem u trgovinom.'],
        correct: 2,
        explanation:
          'Going into the shop is motion: u + accusative, trgovina → trgovinu. u trgovini is being in the shop.',
      },
      {
        q: 'Spot the error: "Vidim novog auta."',
        options: [
          'novog should be nova',
          'nothing is wrong',
          'Vidim should be Vidimo',
          'novog auta should be novi auto — a car is inanimate',
        ],
        correct: 3,
        explanation:
          'Only living masculine nouns take -a in the accusative. A car is an object: Vidim novi auto.',
      },
      {
        q: 'Complete: "Čekam ___ već pola sata." (I have been waiting for my friend — a man — for half an hour.)',
        options: ['prijatelj', 'prijatelju', 'prijatelja', 'prijateljem'],
        correct: 2,
        explanation:
          'čekati takes a direct object, and prijatelj is animate: prijatelja. prijatelju is dative.',
      },
      {
        q: 'Complete: "Radimo ___." (We work all week.)',
        options: ['cijeli tjedan', 'cijelom tjednu', 'cijelim tjednom', 'cijela tjedna'],
        correct: 0,
        explanation:
          'How long something lasts is said with the accusative: cijeli tjedan, cijeli dan, cijelu noć.',
      },
    ],
    vocab: [
      ['brat', 'brother', 'Zovem brata svaku večer.'],
      ['sestra', 'sister', 'Volim svoju sestru.'],
      ['prijatelj', 'friend', 'Čekam prijatelja ispred kina.'],
      ['pas', 'dog', 'Hranim psa dva puta dnevno.'],
      ['mačka', 'cat', 'Imamo malu mačku.'],
      ['stol', 'table', 'Stavi tanjur na stol.'],
      ['knjiga', 'book', 'Čitam zanimljivu knjigu.'],
      ['grad', 'city, town', 'Sutra idemo u grad.'],
      ['plaža', 'beach', 'Djeca idu na plažu.'],
      ['polica', 'shelf', 'Stavi knjigu na policu.'],
      ['stolica', 'chair', 'Sjela je na stolicu.'],
      ['hladnjak', 'fridge', 'Stavi mlijeko u hladnjak.'],
    ],
  },

  'adjective-agreement': {
    worked: [
      {
        title: 'A Neuter Noun',
        problem: 'Dopuni: To je ___ selo. (lijep)',
        en: 'Fill in: That is a beautiful village.',
        steps: [
          {
            label: 'Find the noun',
            text: 'selo — the adjective must follow it.',
          },
          {
            label: 'Its gender',
            text: 'selo ends in -o: neuter.',
          },
          {
            label: 'Match the ending',
            text: 'A neuter adjective ends in -o too.',
          },
        ],
        answer: 'To je lijepo selo.',
      },
      {
        title: 'Into the Locative',
        problem: 'Reci: "I work in a new hospital." (bolnica)',
        en: 'I work in a new hospital.',
        steps: [
          {
            label: 'Case of the noun',
            text: 'Being inside a place: u + locative. bolnica → bolnici.',
          },
          {
            label: 'Gender',
            text: 'bolnica is feminine.',
          },
          {
            label: 'The adjective follows',
            text: 'The feminine locative adjective ending is -oj: nova → novoj.',
          },
        ],
        answer: 'Radim u novoj bolnici.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Imam ___ psa. (a small dog — mali)',
          options: ['mali', 'malog', 'malom', 'mala'],
          correct: 1,
          hint: 'pas is a living masculine noun used as an object — the adjective takes the animate ending too.',
          explanation: 'Imam malog psa. Animate masculine accusative: -og.',
        },
        {
          q: 'Pijem ___ kavu. (hot — vruć)',
          options: ['vruća', 'vruću', 'vruće', 'vrućom'],
          correct: 1,
          hint: 'kava is the object, so both words take the feminine accusative.',
          explanation: 'vruću kavu — feminine accusative -u on both.',
        },
        {
          q: 'Sjedim na ___ stolici. (old — star)',
          options: ['staroj', 'stara', 'staru', 'starom'],
          correct: 0,
          hint: 'Sitting is location: the noun is in the locative, and it is feminine.',
          explanation: 'na staroj stolici — feminine locative -oj.',
        },
        {
          q: 'Danas je vrijeme ___. (beautiful — lijep)',
          options: ['lijep', 'lijepa', 'lijepo', 'lijepi'],
          correct: 2,
          hint: 'vrijeme ends in -e. What gender does that ending usually mean?',
          explanation: 'vrijeme is neuter, so lijepo.',
        },
        {
          type: 'type',
          q: 'Imamo ____ mačku. (black — crni)',
          answer: 'crnu',
          hint: 'mačku is a feminine accusative, and the adjective must match it.',
          explanation: 'crnu mačku — feminine accusative -u on both words.',
        },
        {
          type: 'type',
          q: 'Živim u ____ gradu. (small — mali)',
          answer: 'malom',
          accept: ['malome'],
          hint: 'gradu is locative; the masculine locative adjective ends in -om.',
          explanation: 'u malom gradu — masculine locative.',
        },
        {
          type: 'type',
          q: 'Vidim ____ brata. (big — veliki)',
          answer: 'velikog',
          accept: ['velikoga'],
          hint: 'brat is alive and masculine, so the adjective takes the animate accusative.',
          explanation: 'velikog brata — the animate accusative, like the genitive.',
        },
        {
          type: 'type',
          q: 'Pišem ____ olovkom. (red — crveni)',
          answer: 'crvenom',
          hint: 'olovkom is a feminine instrumental; the adjective ends the same way.',
          explanation: 'crvenom olovkom — feminine instrumental -om.',
        },
        {
          type: 'type',
          q: 'To je ____ more. (blue — plavi)',
          answer: 'plavo',
          hint: 'more is neuter.',
          explanation: 'plavo more — neuter nominative -o.',
        },
        {
          q: 'Kupio sam ___ cipele. (black)',
          options: ['crni', 'crne', 'crna', 'crnu'],
          correct: 1,
          hint: 'cipele is a feminine plural object.',
          explanation: 'crne cipele — feminine plural accusative -e.',
        },
        {
          q: 'Nema ___ kruha. (warm)',
          options: ['topli', 'toplog', 'toplom', 'toplim'],
          correct: 1,
          hint: 'After nema the noun is genitive, and the adjective follows it.',
          explanation: 'toplog kruha — masculine genitive -og.',
        },
        {
          q: 'Which phrase is correct?',
          options: ['velika grad', 'veliki grad', 'veliko grad', 'velikom grad'],
          correct: 1,
          hint: 'grad is masculine, and here it is in the nominative.',
          explanation: 'veliki grad — masculine nominative -i.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Imam ___ kuću." (a big house)',
        options: ['veliki', 'velika', 'veliku', 'velikoj'],
        correct: 2,
        explanation:
          'kuća is feminine and here it is the object, so both words take the accusative -u: veliku kuću.',
      },
      {
        q: 'Complete: "Upoznao sam ___ čovjeka." (an interesting man)',
        options: ['zanimljivi', 'zanimljivog', 'zanimljivom', 'zanimljivu'],
        correct: 1,
        explanation:
          'čovjek is masculine and alive, so the adjective takes the animate accusative -og: zanimljivog čovjeka.',
      },
      {
        q: 'Which sentence has correct agreement?',
        options: [
          'Živimo u malom stanu.',
          'Živimo u mali stanu.',
          'Živimo u malog stanu.',
          'Živimo u mala stanu.',
        ],
        correct: 0,
        explanation:
          'stanu is locative, so the adjective takes the masculine locative -om: u malom stanu.',
      },
      {
        q: 'Spot the error: "Kupila sam crveni haljinu."',
        options: [
          'haljinu should be haljina',
          'crveni should be crvenu — it must match the feminine accusative',
          'sam should be je',
          'nothing is wrong',
        ],
        correct: 1,
        explanation:
          'haljinu is feminine accusative, and the adjective must follow it: crvenu haljinu.',
      },
      {
        q: 'Complete: "Ovo ___ dijete spava." (This small child is sleeping.)',
        options: ['mali', 'mala', 'malo', 'malog'],
        correct: 2,
        explanation: 'dijete is neuter, so the adjective takes the neuter -o: malo dijete.',
      },
      {
        q: 'Complete: "Ove ___ kuće su skupe." (these old houses)',
        options: ['stari', 'stara', 'starim', 'stare'],
        correct: 3,
        explanation: 'kuće is feminine plural nominative, so the adjective ends in -e: stare kuće.',
      },
    ],
    vocab: [
      ['veliki', 'big', 'Zagreb je veliki grad.'],
      ['mali', 'small', 'Imamo malu kuću.'],
      ['lijep', 'beautiful', 'Ovo je lijepa haljina.'],
      ['star', 'old', 'Živimo u staroj kući.'],
      ['novi', 'new', 'Novi susjedi su ljubazni.'],
      ['crven', 'red', 'Kupila sam crvenu haljinu.'],
      ['plav', 'blue', 'More je jako plavo.'],
      ['crn', 'black', 'Imamo crnog psa.'],
      ['zanimljiv', 'interesting', 'Čitam zanimljivu knjigu.'],
      ['mlad', 'young', 'Mlad čovjek čeka ispred banke.'],
      ['ljubazan', 'kind, friendly', 'Konobar je bio jako ljubazan.'],
    ],
  },

  'prepositions-action': {
    worked: [
      {
        title: 'Where I Am, Where I Am Going',
        problem: 'Reci: "I am in the shop, and then I am going to the post office."',
        en: 'I am in the shop, and then I am going to the post office.',
        steps: [
          {
            label: 'First half: position',
            text: 'Being in the shop: u + locative. trgovina → trgovini.',
          },
          {
            label: 'Second half: movement',
            text: 'Going to the post office: na + accusative. pošta → poštu.',
          },
          {
            label: 'Join them',
            text: 'Two things side by side, so a — and a comma in front of it.',
          },
        ],
        answer: 'U trgovini sam, a onda idem na poštu.',
      },
      {
        title: 'Two Kinds of "From"',
        problem: 'Reci: "I got a letter from my brother, from Rijeka."',
        en: 'I got a letter from my brother, from Rijeka.',
        steps: [
          {
            label: 'From a person',
            text: 'A person is not a space you come out of: od.',
          },
          {
            label: 'From a city',
            text: 'A city encloses you: iz.',
          },
          {
            label: 'Both take the genitive',
            text: 'brat → brata, Rijeka → Rijeke.',
          },
        ],
        answer: 'Dobio sam pismo od brata iz Rijeke.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Sutra idemo ___. (to the village — selo)',
          options: ['u selo', 'u selu', 'iz sela', 'u sela'],
          correct: 0,
          hint: 'Going somewhere is movement — and a neuter noun does not change in that case.',
          explanation: 'u selo — accusative of direction.',
        },
        {
          q: 'Ključevi su ___. (in the car — auto)',
          options: ['u auto', 'u autu', 'u autom', 'iz auta'],
          correct: 1,
          hint: 'The keys are already there — position, not movement.',
          explanation: 'u autu — locative. u auto would mean "into the car".',
        },
        {
          q: 'Ovaj poklon je ___. (from my grandmother — baka)',
          options: ['iz bake', 'od bake', 'od baki', 's bakom'],
          correct: 1,
          hint: 'A person is not an enclosed space, and the preposition takes the genitive.',
          explanation: 'od bake — od for a person; baka → bake.',
        },
        {
          q: 'Idem u kino ___ sestrom.',
          options: ['s', 'sa', 'od', 'bez'],
          correct: 1,
          hint: 'Company takes the instrumental — and look at the first letter of the next word.',
          explanation: 'sa sestrom — sa before s, š, z, ž, where s would run into the next sound.',
        },
        {
          type: 'type',
          q: 'Sjedimo u ____. (in the garden — vrt)',
          answer: 'vrtu',
          hint: 'Sitting is a static location, so u takes the locative; masculine nouns end in -u.',
          explanation: 'u vrtu — being in the garden, locative.',
        },
        {
          type: 'type',
          q: 'Idem na ____. (to the market — tržnica)',
          answer: 'tržnicu',
          hint: 'Going somewhere is motion, so na takes the accusative; feminine -a becomes -u.',
          explanation: 'na tržnicu — motion towards, accusative.',
        },
        {
          type: 'type',
          q: 'Vraćam se iz ____. (from Zagreb)',
          answer: 'Zagreba',
          hint: 'iz always takes the genitive; masculine nouns add -a.',
          explanation: 'iz Zagreba — out of an enclosed place, genitive.',
        },
        {
          type: 'type',
          q: 'Čaj bez ____, molim. (sugar — šećer)',
          answer: 'šećera',
          hint: 'bez takes the genitive.',
          explanation: 'bez šećera — without sugar, genitive.',
        },
        {
          type: 'type',
          q: "Večeras smo kod ____. (at grandma's — baka)",
          answer: 'bake',
          hint: 'kod takes the genitive; feminine -a nouns end in -e there.',
          explanation: "kod bake — at grandma's place, genitive.",
        },
        {
          q: 'Knjiga je ___ torbi.',
          options: ['iz', 'u', 'do', 's'],
          correct: 1,
          hint: 'torbi is a locative form — which of these can take the locative?',
          explanation: 'u torbi — in the bag. iz and do take the genitive, s the instrumental.',
        },
        {
          q: 'Stavi ključeve ___ stol.',
          options: ['na', 'od', 'kod', 'iz'],
          correct: 0,
          hint: 'stavi is movement onto something, and stol here is an accusative.',
          explanation: 'na stol — motion onto, accusative. od, kod and iz take the genitive.',
        },
        {
          q: 'Pijem kavu ___ mlijeka.',
          options: ['bez', 's', 'u', 'kod'],
          correct: 0,
          hint: 'mlijeka is a genitive form — look for the preposition that means without.',
          explanation: 'bez mlijeka — without milk. s would need the instrumental: s mlijekom.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ključevi su na ___." (on the table — stol)',
        options: ['stol', 'stolu', 'stola', 'stolom'],
        correct: 1,
        explanation:
          'The keys are lying there — static location, so na + locative: stolu. stol would mean putting them onto it.',
      },
      {
        q: 'Complete: "Sutra idemo u ___." (to the museum — muzej)',
        options: ['muzeju', 'muzeja', 'muzej', 'muzejom'],
        correct: 2,
        explanation:
          'Going somewhere is motion: u + accusative. muzej is inanimate, so the accusative equals the nominative.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Dolazim od Osijeka.',
          'Dolazim iz Osijek.',
          'Dolazim iz Osijeka.',
          'Dolazim s Osijekom.',
        ],
        correct: 2,
        explanation:
          'A city is an enclosed place, so from it is iz + genitive: iz Osijeka. od is for people and time points.',
      },
      {
        q: 'Complete: "Ovo pismo je od ___." (from my brother — brat)',
        options: ['brata', 'bratu', 'brat', 'bratom'],
        correct: 0,
        explanation: 'From a person is od + genitive: od brata.',
      },
      {
        q: 'Which phrase says "at my friend\'s place" (prijatelj)?',
        options: ['u prijatelju', 'kod prijatelja', 'od prijatelja', 'na prijatelja'],
        correct: 1,
        explanation:
          "kod + genitive means at someone's place: kod prijatelja. od prijatelja means from a friend.",
      },
      {
        q: 'Complete: "Radim od ponedjeljka ___ petka." (until Friday)',
        options: ['u', 'do', 'na', 'iz'],
        correct: 1,
        explanation: 'do + genitive means to or until: od ponedjeljka do petka.',
      },
    ],
    vocab: [
      ['kuća', 'house', 'Idem kući poslije posla.'],
      ['škola', 'school', 'Djeca su u školi.'],
      ['posao', 'work, job', 'Svaki dan idem na posao.'],
      ['tržnica', 'market', 'Kupujem voće na tržnici.'],
      ['ured', 'office', 'Radim u uredu.'],
      ['trgovina', 'shop', 'Idem u trgovinu po kruh.'],
      ['kafić', 'café', 'Nađimo se u kafiću.'],
      ['restoran', 'restaurant', 'Večeras idemo u restoran.'],
      ['ormar', 'wardrobe', 'Torba je u ormaru.'],
      ['šećer', 'sugar', 'Kava bez šećera, molim.'],
      ['vrt', 'garden', 'Baka sjedi u vrtu.'],
    ],
  },

  'modal-verbs-a2': {
    worked: [
      {
        title: 'Forbidden, Not Optional',
        problem: 'Reci prijatelju: "You must not smoke here."',
        en: 'Tell a friend: You must not smoke here.',
        steps: [
          {
            label: 'What kind of "must not"?',
            text: 'It is a prohibition: the rule does not allow it.',
          },
          {
            label: 'Avoid the trap',
            text: 'ne moraš means "you don\'t have to". Prohibition is the negative of smjeti.',
          },
          {
            label: 'Person',
            text: 'A friend: ti → ne smiješ.',
          },
          {
            label: 'The second verb',
            text: 'After a modal the verb stays in the infinitive: pušiti.',
          },
        ],
        answer: 'Ovdje ne smiješ pušiti.',
      },
      {
        title: 'Turning an Order Into a Request',
        problem: 'Zamoli konobara pristojno: "Can you bring me some water?"',
        en: 'Ask the waiter politely: Can you bring me some water?',
        steps: [
          {
            label: 'Avoid the bare imperative',
            text: 'Donesite mi vodu is grammatical but sounds like an order.',
          },
          {
            label: 'Use moći as a question',
            text: 'A waiter gets Vi: možete li…',
          },
          {
            label: 'Place "me"',
            text: 'mi is a clitic: second position, straight after li.',
          },
          {
            label: 'Infinitive and object',
            text: 'donijeti, then vodu in the accusative.',
          },
        ],
        answer: 'Možete li mi donijeti vodu?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Mama kaže: "Sutra je nedjelja, ___ ustati rano." (you don\'t have to)',
          options: ['ne moraš', 'ne smiješ', 'ne možeš', 'nećeš'],
          correct: 0,
          hint: 'No obligation is the negative of the "must" verb — not a prohibition.',
          explanation: 'ne moraš — you are free not to. ne smiješ would forbid it.',
        },
        {
          q: '___ li parkirati ovdje? (Are we allowed to park here?)',
          options: ['Smijemo', 'Moramo', 'Smiju', 'Smijete'],
          correct: 0,
          hint: 'You are asking permission, and the subject is "we".',
          explanation: 'Smijemo li parkirati ovdje? — smjeti for permission, mi form.',
        },
        {
          q: 'Moram ___ baku. (call — nazvati)',
          options: ['nazovem', 'nazvati', 'nazovi', 'nazvao'],
          correct: 1,
          hint: 'What form does the verb after a modal take?',
          explanation: 'Moram nazvati baku. The second verb is always the infinitive.',
        },
        {
          q: 'Trebam ___. (a new phone — novi mobitel)',
          options: ['novog mobitela', 'novom mobitelu', 'novi mobitel', 'nova mobitela'],
          correct: 2,
          hint: 'trebati can take a noun as its object — and a phone is not alive.',
          explanation: 'Trebam novi mobitel. Inanimate masculine accusative: no change.',
        },
        {
          type: 'type',
          q: 'Ne ____ ovdje parkirati — zabranjeno je. (you may not — ti)',
          answer: 'smiješ',
          hint: 'Something forbidden takes the permission verb, not the obligation verb.',
          explanation: 'ne smiješ — smjeti for ti.',
        },
        {
          type: 'type',
          q: 'Sutra ____ ustati u šest. (I must)',
          answer: 'moram',
          hint: 'Strong obligation, first person singular.',
          explanation: 'moram — morati for ja.',
        },
        {
          type: 'type',
          q: 'Moram ____ na posao. (to go)',
          answer: 'ići',
          accept: ['otići'],
          hint: 'After a modal the second verb is an infinitive.',
          explanation: 'moram ići — the infinitive after a modal.',
        },
        {
          type: 'type',
          q: 'Mi ____ ići u kino večeras. (we want)',
          answer: 'hoćemo',
          accept: ['želimo'],
          hint: 'htjeti builds its forms on hoć-; mi ends in -emo.',
          explanation: 'hoćemo — htjeti for mi (želimo says the same with željeti).',
        },
        {
          type: 'type',
          q: "____ ići tamo. (I don't want to)",
          answer: 'Neću',
          hint: 'The negative of htjeti fuses into one word.',
          explanation: 'Neću — never "ne hoću".',
        },
        {
          type: 'type',
          q: 'Oni ____ plivati. (they can)',
          answer: 'mogu',
          hint: 'The oni form of moći is identical to the ja form.',
          explanation: 'oni mogu — the same form as ja mogu.',
        },
        {
          q: '___ li ući? (May I come in?)',
          options: ['Smijem', 'Moram', 'Hoću', 'Trebam'],
          correct: 0,
          hint: 'You are asking for permission.',
          explanation: 'Smijem li ući? — smjeti asks whether it is allowed.',
        },
        {
          q: 'Complete: "On ___ učiti za ispit." (He needs to study for the exam.)',
          options: ['treba', 'trebam', 'trebaju', 'trebaš'],
          correct: 0,
          hint: 'You need the he/she form of the verb for need.',
          explanation: 'on treba — trebati for he.',
        },
        {
          q: 'Which means "You don\'t have to come"?',
          options: ['Ne smiješ doći.', 'Ne moraš doći.', 'Ne možeš doći.', 'Nećeš doći.'],
          correct: 1,
          hint: 'No obligation — which modal expresses obligation?',
          explanation: 'Ne moraš doći — negated morati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Djeco, ne ___ trčati oko bazena!" (you are not allowed)',
        options: ['morate', 'smijete', 'hoćete', 'trebate'],
        correct: 1,
        explanation:
          'A prohibition is ne + smjeti: ne smijete. ne morate would mean they are free not to run.',
      },
      {
        q: 'Complete: "Nažalost, ne ___ doći na zabavu — radim." (I can\'t)',
        options: ['smijem', 'moram', 'mogu', 'hoću'],
        correct: 2,
        explanation:
          'Being unable because of work is moći: ne mogu. ne smijem would mean someone forbids it.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Moram idem kući.', 'Moram ići kući.', 'Moram ide kući.', 'Moram idi kući.'],
        correct: 1,
        explanation: 'After a modal the second verb stays in the infinitive: moram ići.',
      },
      {
        q: 'What does "Ne moraš mi pomoći" mean?',
        options: [
          "You mustn't help me",
          "You can't help me",
          "You don't want to help me",
          "You don't have to help me",
        ],
        correct: 3,
        explanation: 'Negated morati removes the obligation. A prohibition would be ne smiješ.',
      },
      {
        q: 'Complete: "Oni ___ raditi subotom." (They have to work on Saturdays.)',
        options: ['moraju', 'mora', 'moramo', 'morate'],
        correct: 0,
        explanation: 'morati for oni is moraju. mora is he or she.',
      },
      {
        q: 'Which is the most polite way to ask a stranger to pass the salt?',
        options: ['Daj mi sol.', 'Sol!', 'Biste li mi mogli dodati sol?', 'Dodaj sol.'],
        correct: 2,
        explanation:
          'A conditional modal question in the Vi form turns an order into a polite request.',
      },
    ],
    vocab: [
      ['moći', 'can, to be able', 'Mogu doći sutra.'],
      ['morati', 'must, to have to', 'Moram ići kući.'],
      ['htjeti', 'to want', 'Hoćeš li kavu?'],
      ['smjeti', 'may, to be allowed', 'Smijem li sjesti ovdje?'],
      ['trebati', 'should, to need', 'Trebam otići liječniku.'],
      ['željeti', 'to wish, to want', 'Želim putovati.'],
      ['pušiti', 'to smoke', 'Ovdje ne smiješ pušiti.'],
      ['parkirati', 'to park', 'Smijemo li parkirati ovdje?'],
      ['ustati', 'to get up', 'Sutra ne moram ustati rano.'],
      ['zabranjeno', 'forbidden', 'Pušenje je zabranjeno.'],
      ['plivati', 'to swim', 'Mogu plivati.'],
      ['ispit', 'exam', 'Moram učiti za ispit.'],
    ],
  },

  'comparatives-a2': {
    worked: [
      {
        title: 'Older Than',
        problem: 'Ana ima 20 godina, Marija 25. Dopuni: Marija je ___ od Ane.',
        en: 'Ana is 20, Marija 25. Fill in: Marija is older than Ana.',
        steps: [
          {
            label: 'The adjective',
            text: 'old = star.',
          },
          {
            label: 'Make it comparative',
            text: 'A regular adjective adds -iji: stariji.',
          },
          {
            label: 'Agree with the subject',
            text: 'Marija is feminine: stariji → starija.',
          },
          {
            label: 'Than',
            text: 'od + genitive: Ana → Ane.',
          },
        ],
        answer: 'Marija je starija od Ane.',
      },
      {
        title: 'The Best',
        problem: 'Reci: "This is the best restaurant in town."',
        en: 'This is the best restaurant in town.',
        steps: [
          {
            label: 'good = dobar',
            text: 'dobar is one of the irregular five: its comparative is bolji.',
          },
          {
            label: 'Superlative',
            text: 'Add naj- to the comparative: najbolji.',
          },
          {
            label: 'Agreement',
            text: 'restoran is masculine, so the -i ending stays.',
          },
        ],
        answer: 'Ovo je najbolji restoran u gradu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Autobus je ___ od vlaka. (slower — spor)',
          options: ['sporiji', 'sporši', 'najsporiji', 'više spor'],
          correct: 0,
          hint: 'A regular adjective changes its ending — Croatian does not add a separate word for "more".',
          explanation: 'spor → sporiji, with the regular -iji.',
        },
        {
          q: 'Moj stan je ___ od tvojeg. (smaller)',
          options: ['maliji', 'manji', 'najmanji', 'malen'],
          correct: 1,
          hint: 'mali is irregular — its comparative is a word you learn whole.',
          explanation: 'mali → manji.',
        },
        {
          q: 'Ljeto je ___ nego zima. (more beautiful — lijep)',
          options: ['lijepije', 'ljepši', 'ljepše', 'najljepše'],
          correct: 2,
          hint: 'The comparative must agree with ljeto — and ljeto ends in -o.',
          explanation: 'ljepše — neuter, agreeing with ljeto. nego keeps zima in the nominative.',
        },
        {
          q: 'Hrvatska je manja ___ Njemačke.',
          options: ['nego', 'od', 'kao', 'iz'],
          correct: 1,
          hint: 'Look at the case of Njemačke: which "than" takes the genitive?',
          explanation: 'od + genitive. With nego it would be nego Njemačka.',
        },
        {
          type: 'type',
          q: 'Zima je ____ od jeseni. (colder — hladan)',
          answer: 'hladnija',
          hint: 'Add -iji to the stem, drop the a of -an, and agree with the feminine zima.',
          explanation: 'hladan → hladniji; feminine hladnija.',
        },
        {
          type: 'type',
          q: 'Moj auto je ____ od tvojeg. (better)',
          answer: 'bolji',
          hint: 'dobar is one of the irregular five.',
          explanation: 'dobar → bolji.',
        },
        {
          type: 'type',
          q: 'Ovaj put je ____ od onog. (easier — lak)',
          answer: 'lakši',
          hint: 'lak belongs to the small group that takes -ši.',
          explanation: 'lak → lakši.',
        },
        {
          type: 'type',
          q: 'Ona je ____ od sestre. (taller — visok)',
          answer: 'viša',
          hint: 'visok is irregular, and the form must agree with ona.',
          explanation: 'visok → viši; feminine viša.',
        },
        {
          type: 'type',
          q: 'Zagreb je ____ grad u Hrvatskoj. (the biggest)',
          answer: 'najveći',
          hint: 'naj- goes in front of the comparative, and the comparative of velik is irregular.',
          explanation: 'najveći — naj- + veći.',
        },
        {
          type: 'type',
          q: 'Brat je stariji od ____. (than me)',
          answer: 'mene',
          hint: 'od takes the genitive.',
          explanation: 'od mene — the genitive of ja.',
        },
        {
          q: 'Which is the comparative of "lijep"?',
          options: ['lijepiji', 'ljepši', 'lijepši', 'najljepši'],
          correct: 1,
          hint: 'lijep takes -ši, and its ije shortens in the comparative.',
          explanation: 'lijep → ljepši.',
        },
        {
          q: 'Ovaj stan je skuplji ___ onaj.',
          options: ['od', 'nego', 'kao', 'iz'],
          correct: 1,
          hint: 'onaj is a nominative form.',
          explanation: 'nego onaj — nego keeps the nominative; with od it would be od onoga.',
        },
        {
          q: 'Complete: "Ovo je ___ dan u mom životu." (the most beautiful)',
          options: ['ljepši', 'najljepši', 'najlijepi', 'lijep'],
          correct: 1,
          hint: 'The superlative is built on the comparative.',
          explanation: 'najljepši — naj- + ljepši.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ova knjiga je ___ od one." (more interesting — zanimljiv)',
        options: ['zanimljiva', 'zanimljivija', 'više zanimljiva', 'najzanimljivija'],
        correct: 1,
        explanation:
          'The comparative is built into the word with -iji, agreeing with the feminine knjiga: zanimljivija. više zanimljiva copies English "more".',
      },
      {
        q: 'Complete: "Moj brat je ___ od mene." (younger — mlad)',
        options: ['mladiji', 'najmlađi', 'mlađi', 'mladši'],
        correct: 2,
        explanation: 'mlad takes -ji, which softens d to đ: mlađi. najmlađi is the superlative.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Rijeka je veća od Zadra.',
          'Rijeka je veća od Zadar.',
          'Rijeka je veća nego od Zadra.',
          'Rijeka je velikija od Zadra.',
        ],
        correct: 0,
        explanation:
          'velik has the irregular comparative veći, and od takes the genitive: veća od Zadra.',
      },
      {
        q: 'Spot the error: "Ovo je najveliki park u gradu."',
        options: [
          'park should be parka',
          'najveliki should be najveći — velik is irregular',
          'gradu should be grad',
          'nothing is wrong',
        ],
        correct: 1,
        explanation:
          'The superlative is naj- + the comparative, and the comparative of velik is veći: najveći.',
      },
      {
        q: 'Complete: "Ana je starija ___ ja."',
        options: ['od', 'nego', 'kao', 'iz'],
        correct: 1,
        explanation:
          'ja is in the nominative, and nego keeps the case of the first term: starija nego ja. With od it would be starija od mene.',
      },
      {
        q: 'Complete: "To je ___ restoran u Splitu." (the best)',
        options: ['bolji', 'dobar', 'najdobriji', 'najbolji'],
        correct: 3,
        explanation: 'dobar → bolji → najbolji. The regular suffix cannot be added to dobar.',
      },
    ],
    vocab: [
      ['bolji', 'better', 'Ovaj film je bolji od prvog.'],
      ['gori', 'worse', 'Danas je vrijeme gore nego jučer.'],
      ['veći', 'bigger', 'Zagreb je veći od Splita.'],
      ['manji', 'smaller', 'Moj stan je manji od tvojeg.'],
      ['viši', 'taller', 'Ivan je viši od Marka.'],
      ['ljepši', 'more beautiful', 'Ljeto je ljepše nego zima.'],
      ['mlađi', 'younger', 'Moj brat je mlađi od mene.'],
      ['stariji', 'older', 'Ana je starija od sestre.'],
      ['lakši', 'easier', 'Ovaj ispit je lakši.'],
      ['najbolji', 'best', 'To je najbolji restoran u gradu.'],
      ['jednostavan', 'simple', 'Ovo pravilo je jednostavnije.'],
    ],
  },

  'object-pronouns': {
    worked: [
      {
        title: 'Replacing a Name',
        problem: 'Zamijeni ime zamjenicom: Vidim Anu svaki dan.',
        en: 'Replace the name with a pronoun: I see Ana every day.',
        steps: [
          {
            label: 'What job does Ana do?',
            text: 'She is the object — the one being seen.',
          },
          {
            label: 'The short form',
            text: '"her" as an object is je.',
          },
          {
            label: 'Place it',
            text: 'je is a clitic: second position, straight after the verb that opens the sentence.',
          },
        ],
        answer: 'Vidim je svaki dan.',
      },
      {
        title: 'Two Pronouns at Once',
        problem: 'Reci: "I am giving it to him." (the key — ključ)',
        en: 'I am giving it to him (the key).',
        steps: [
          {
            label: 'The thing',
            text: 'ključ is masculine, so "it" is ga.',
          },
          {
            label: 'The person',
            text: '"to him" is the dative: mu.',
          },
          {
            label: 'Order',
            text: 'To-whom before what: the dative comes first — mu, then ga.',
          },
          {
            label: 'Position',
            text: 'Both are clitics and follow the verb that opens the sentence.',
          },
        ],
        answer: 'Dajem mu ga.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Gdje je Marko? — Ne znam, danas ___ nisam vidio.',
          options: ['ga', 'mu', 'ih', 'on'],
          correct: 0,
          hint: 'Marko is the object of "see", one man — the short accusative.',
          explanation: 'danas ga nisam vidio — "I have not seen him today".',
        },
        {
          q: 'Rekao sam ___ istinu. (I told her the truth.)',
          options: ['je', 'ju', 'joj', 'nju'],
          correct: 2,
          hint: 'reći takes the dative: to whom you tell something.',
          explanation: 'Rekao sam joj istinu. joj = to her.',
        },
        {
          q: 'Which says "Show it to me" (the photo — slika)?',
          options: ['Pokaži je mi.', 'Pokaži mi je.', 'Pokaži mene je.', 'Je mi pokaži.'],
          correct: 1,
          hint: 'The dative comes before the accusative, and neither can open the sentence.',
          explanation: 'Pokaži mi je. to-me first, then it.',
        },
        {
          q: 'Ovo je za ___. (This is for you — a friend.)',
          options: ['tvoj', 'ti', 'tebe', 'tebi'],
          correct: 2,
          hint: 'After a preposition, use the long form — and za takes the accusative.',
          explanation: 'za tebe — the long accusative form.',
        },
        {
          type: 'type',
          q: 'Vidiš li Marka? — Da, vidim ____. (him)',
          answer: 'ga',
          hint: 'vidjeti takes a direct object; use the short accusative for one man.',
          explanation: 'Vidim ga. — the short accusative "him", after the verb.',
        },
        {
          type: 'type',
          q: 'Pomozi ____, molim te! (me)',
          answer: 'mi',
          hint: 'pomoći takes the dative, not the accusative.',
          explanation: 'Pomozi mi! — pomoći takes the dative, so "me" is mi here, not me.',
        },
        {
          type: 'type',
          q: 'Kupio sam ____ cvijeće za rođendan. (for her)',
          answer: 'joj',
          hint: 'The person who receives is in the dative; use the short form.',
          explanation: 'joj — the short dative "to her / for her".',
        },
        {
          type: 'type',
          q: 'Čekamo ____ ispred škole. (you — plural)',
          answer: 'vas',
          hint: 'čekati takes a direct object; you (plural) as an object has a short form.',
          explanation: 'Čekamo vas. — accusative "you all".',
        },
        {
          type: 'type',
          q: 'Ovo je za ____. (me)',
          answer: 'mene',
          hint: 'After a preposition you need the long form of the pronoun.',
          explanation: 'za mene — after a preposition the long form is the normal choice.',
        },
        {
          q: 'Complete: "Daj ___ ključ." (Give him the key.)',
          options: ['ga', 'mu', 'njega', 'on'],
          correct: 1,
          hint: 'The person who receives the key is in the dative.',
          explanation: 'Daj mu ključ — mu is the dative "to him". ga would be the key itself.',
        },
        {
          q: 'Which is the right order for "He gave it to them"?',
          options: ['Dao ih ga je.', 'Dao im ga je.', 'Dao ga im je.', 'Dao je im ga.'],
          correct: 1,
          hint: 'To-whom before what, and the auxiliary je comes last in the cluster.',
          explanation: 'Dao im ga je: dative im, accusative ga, then je.',
        },
        {
          q: 'Koga tražiš? — ___ (Him.)',
          options: ['Ga.', 'Mu.', 'Njega.', 'Njemu.'],
          correct: 2,
          hint: 'A pronoun standing alone as an answer needs its stressed form.',
          explanation: 'Njega. — the long accusative; a short clitic can never stand alone.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Poznaješ li Anu i Marka? — Da, dobro ___ poznajem."',
        options: ['ih', 'im', 'oni', 'ga'],
        correct: 0,
        explanation:
          'Two people as a direct object take the short accusative ih. im is the dative, oni the subject, ga is one person.',
      },
      {
        q: 'Complete: "Reci ___ da kasnim." (Tell her that I am late.)',
        options: ['je', 'ju', 'joj', 'nju'],
        correct: 2,
        explanation:
          'reći takes the dative for the person told: joj. je and ju are accusative, nju is the long accusative.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Me zove svaki dan.',
          'Zove me svaki dan.',
          'Zove svaki dan me.',
          'Zove mene me svaki dan.',
        ],
        correct: 1,
        explanation:
          'The clitic me takes second position, right after the first word: Zove me svaki dan. It can never open a sentence.',
      },
      {
        q: 'What is wrong with "Poslao sam ga joj"?',
        options: [
          'Nothing — it is correct',
          'The dative must come before the accusative: "Poslao sam joj ga"',
          '"ga" should be "njega"',
          '"sam" must come at the end',
        ],
        correct: 1,
        explanation:
          'When two pronouns meet, the dative (to whom) comes before the accusative (what): joj ga.',
      },
      {
        q: 'Complete: "Ovo pismo je za ___." (for them)',
        options: ['ih', 'im', 'njih', 'oni'],
        correct: 2,
        explanation:
          'After a preposition only the long form is possible: za njih. ih and im are short forms that cannot follow za.',
      },
      {
        q: 'What does "Javi nam" mean?',
        options: ['Let us know', 'Let them know', 'Let me know', 'Let her know'],
        correct: 0,
        explanation:
          'nam is the dative "to us". Let them know is javi im, let me know javi mi, let her know javi joj.',
      },
    ],
    vocab: [
      ['vidjeti', 'to see', 'Vidim ga svaki dan.'],
      ['poznavati', 'to know (a person)', 'Poznaješ li je?'],
      ['reći', 'to say, to tell', 'Reci mi istinu.'],
      ['javiti', 'to let know', 'Javi mi kad stigneš.'],
      ['dati', 'to give', 'Daj mi to, molim te.'],
      ['pomoći', 'to help', 'Možeš li mi pomoći?'],
      ['poslati', 'to send', 'Poslat ću ti ga sutra.'],
      ['čekati', 'to wait (for)', 'Čekamo vas ispred kina.'],
      ['tražiti', 'to look for', 'Tražim ga cijeli dan.'],
      ['pokazati', 'to show', 'Pokaži mi sliku.'],
    ],
  },

  'dative-intro': {
    worked: [
      {
        title: 'Writing TO Someone',
        problem: 'Reci: "I am writing to my friend." (prijateljica)',
        en: 'I am writing to my (female) friend.',
        steps: [
          {
            label: 'Which case?',
            text: 'pisati someone means writing TO them: the dative, with no preposition.',
          },
          {
            label: 'Gender',
            text: 'prijateljica ends in -a: feminine.',
          },
          {
            label: 'The ending',
            text: 'Feminine -a becomes -i in the dative.',
          },
        ],
        answer: 'Pišem prijateljici.',
      },
      {
        title: 'Who Likes What',
        problem: 'Reci: "Marko likes the sea."',
        en: 'Marko likes the sea.',
        steps: [
          {
            label: 'Turn it around',
            text: 'In Croatian the sea does the pleasing: more is the subject.',
          },
          {
            label: 'The person receives',
            text: 'Marko is the one pleased, so he goes into the dative: Marku.',
          },
          {
            label: 'The verb',
            text: 'sviđati se agrees with the subject more — third person singular: se sviđa.',
          },
        ],
        answer: 'Marku se sviđa more.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kupio sam cvijeće ___. (for my mother — majka)',
          options: ['majka', 'majku', 'majci', 'majke'],
          correct: 2,
          hint: 'She receives the flowers. Feminine -a takes one vowel in that case.',
          explanation: 'majci — dative, the receiver.',
        },
        {
          q: 'Zahvalio sam se ___. (I thanked the doctor — liječnik)',
          options: ['liječniku', 'liječnika', 'liječnik', 'liječnikom'],
          correct: 0,
          hint: 'zahvaliti is on the list of verbs that take the dative.',
          explanation: 'liječniku — masculine dative -u.',
        },
        {
          q: 'Vjeruješ li ___? (Do you believe your brother? — brat)',
          options: ['brata', 'bratu', 'brat', 'bratom'],
          correct: 1,
          hint: 'vjerovati looks like it takes a plain object in English — in Croatian it does not.',
          explanation: 'Vjeruješ li bratu? vjerovati takes the dative.',
        },
        {
          q: 'Dosadno ___ je. (She is bored.)',
          options: ['je', 'joj', 'ona', 'nju'],
          correct: 1,
          hint: 'Like hladno mi je: the person is in the dative, not the subject.',
          explanation: 'Dosadno joj je — literally, it is boring to her.',
        },
        {
          type: 'type',
          q: 'Dajem kruh ____. (the child — dijete)',
          answer: 'djetetu',
          hint: 'dijete grows a -t- in its other forms, and neuter nouns take -u in the dative.',
          explanation: 'dijete → djetetu, the one who receives the bread.',
        },
        {
          type: 'type',
          q: 'Javi ____ kad stigneš. (Ivana)',
          answer: 'Ivani',
          hint: 'javiti takes the dative, and a feminine -a noun ends in -i there.',
          explanation: 'Ivana → Ivani: dative, the person who is told.',
        },
        {
          type: 'type',
          q: 'Vjerujem ____. (my sister — sestra)',
          answer: 'sestri',
          hint: 'vjerovati takes the dative even though English uses a plain object.',
          explanation: 'Vjerujem sestri — vjerovati + dative, feminine -i.',
        },
        {
          type: 'type',
          q: 'Kupio sam poklon ____. (for my brother — brat)',
          answer: 'bratu',
          accept: ['za brata'],
          hint: 'The person who receives the present is in the dative; masculine nouns take -u.',
          explanation:
            'bratu — the dative of the receiver. za brata says the same thing with a preposition.',
        },
        {
          type: 'type',
          q: 'Treba ____ odmor. (I need)',
          answer: 'mi',
          hint: 'With treba the thing needed is the subject and the person is in the dative.',
          explanation: 'Treba mi odmor — literally "a rest is needed to me".',
        },
        {
          q: 'Complete: "Reci ___ da stižem." (Tell Dad — otac)',
          options: ['otac', 'oca', 'ocu', 'ocem'],
          correct: 2,
          hint: 'reći takes the dative, and otac loses its a when it takes an ending.',
          explanation: 'otac → ocu, the dative. oca is the accusative.',
        },
        {
          q: 'Complete: "Idem k ___." (to my grandmother — baka)',
          options: ['baka', 'baku', 'baki', 'bakom'],
          correct: 2,
          hint: 'k is one of the few prepositions that take the dative.',
          explanation: 'k baki — k + dative for going towards a person.',
        },
        {
          q: 'Which verb takes the dative for the person?',
          options: ['vidjeti', 'čekati', 'zvati', 'vjerovati'],
          correct: 3,
          hint: 'Three of these take a plain direct object, as in English.',
          explanation:
            'vjerovati + dative: vjerujem mu. The others take the accusative: vidim ga, čekam ga, zovem ga.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Pišem pismo ___." (to my friend — prijatelj)',
        options: ['prijatelja', 'prijatelju', 'prijatelj', 'prijateljem'],
        correct: 1,
        explanation:
          'The receiver is in the dative, and a masculine noun takes -u: prijatelju. prijatelja is the accusative.',
      },
      {
        q: 'Complete: "Objasni ___ zadatak." (Explain the task to Ana.)',
        options: ['Anu', 'Ana', 'Ani', 'Anom'],
        correct: 2,
        explanation:
          'The person something is explained to takes the dative; feminine -a becomes -i: Ani.',
      },
      {
        q: 'Which sentence correctly asks a friend "Do you like Zagreb?"',
        options: [
          'Sviđaš li se Zagreb?',
          'Sviđa li ti se Zagreb?',
          'Sviđa li te se Zagreb?',
          'Sviđa li tebe Zagreb?',
        ],
        correct: 1,
        explanation:
          'Zagreb does the pleasing and is the subject; the person who likes it is in the dative: ti.',
      },
      {
        q: 'What is wrong with "Pomažem mamu u kuhinji"?',
        options: [
          'Nothing — it is correct',
          '"mamu" should be "mami" — pomagati takes the dative',
          '"u kuhinji" should be "u kuhinju"',
          '"Pomažem" should be "Pomažemo"',
        ],
        correct: 1,
        explanation:
          'Helping someone takes the dative in Croatian: pomažem mami. u kuhinji is right — location.',
      },
      {
        q: 'What does "Dosadno mi je" mean?',
        options: ['I am bored', 'It bores him', 'I am boring', 'Give me something'],
        correct: 0,
        explanation:
          'Literally "it is boring to me" — the person affected is in the dative mi. "I am boring" would be dosadan sam.',
      },
      {
        q: 'Complete: "Zahvalio sam se ___ na pomoći." (my neighbour — susjed)',
        options: ['susjeda', 'susjedom', 'susjed', 'susjedu'],
        correct: 3,
        explanation:
          'zahvaliti se takes the dative for the person thanked: susjedu. susjeda is the accusative.',
      },
    ],
    vocab: [
      ['dati', 'to give', 'Dao sam knjigu bratu.'],
      ['pomoći', 'to help', 'Možeš li pomoći Ani?'],
      ['vjerovati', 'to believe, to trust', 'Vjerujem svom bratu.'],
      ['zahvaliti se', 'to thank', 'Zahvalio sam se susjedi na kolaču.'],
      ['objasniti', 'to explain', 'Učitelj nam je objasnio pravilo.'],
      ['javiti', 'to let know', 'Javi mami da si stigao.'],
      ['poklon', 'present, gift', 'Kupio sam poklon baki.'],
      ['sviđati se', 'to be liked by, to please', 'Sviđa mi se ova glazba.'],
      ['trebati', 'to be needed, to need', 'Treba mi nova jakna.'],
      ['dosadno', 'boring (it is boring)', 'Djeci je dosadno kad pada kiša.'],
      ['razglednica', 'postcard', 'Poslao sam mami razglednicu.'],
    ],
  },

  'instrumental-intro': {
    worked: [
      {
        title: 'The Means: No Preposition',
        problem: 'Reci: "I pay by card and go to work by tram." (kartica, tramvaj)',
        en: 'I pay by card and go to work by tram.',
        steps: [
          {
            label: 'Means or company?',
            text: 'A card and a tram are the method, not companions: bare instrumental, no s.',
          },
          {
            label: 'kartica',
            text: 'Feminine: -a → -om, karticom.',
          },
          {
            label: 'tramvaj',
            text: 'Masculine, and it ends in the soft consonant j — so -em, not -om: tramvajem.',
          },
        ],
        answer: 'Plaćam karticom i idem na posao tramvajem.',
      },
      {
        title: 'Company: With S or Sa',
        problem: 'Reci: "I am going to the cinema with Željko."',
        en: 'I am going to the cinema with Željko.',
        steps: [
          {
            label: 'Means or company?',
            text: 'Željko is a person you are WITH, so the preposition is needed.',
          },
          {
            label: 'The ending',
            text: 'Željko takes -om in the instrumental: Željkom.',
          },
          {
            label: 's or sa?',
            text: 'The name begins with ž — one of s, š, z, ž — so the longer sa.',
          },
        ],
        answer: 'Idem u kino sa Željkom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Putujemo na more ___. (by plane — avion)',
          options: ['s avionom', 'avionom', 'avionu', 'u avion'],
          correct: 1,
          hint: 'A plane is the means of travel, not a companion.',
          explanation: 'avionom — bare instrumental for the means.',
        },
        {
          q: 'Pijem čaj ___ medom. (with honey)',
          options: ['s', 'sa', 'od', 'iz'],
          correct: 0,
          hint: 'Company takes the instrumental with a preposition — check the letter the next word starts with.',
          explanation: 's medom — m is not s, š, z or ž, so the short form.',
        },
        {
          q: 'Brat se bavi ___. (music — glazba)',
          options: ['glazba', 'glazbu', 'glazbom', 's glazbom'],
          correct: 2,
          hint: 'baviti se takes the instrumental with no preposition.',
          explanation: 'Bavi se glazbom.',
        },
        {
          q: 'Razgovaram ___. (with my neighbour — susjed)',
          options: ['susjedom', 's susjedom', 'sa susjedom', 'susjedu'],
          correct: 2,
          hint: 'A person you are with needs the preposition — and this noun begins with s.',
          explanation: 'sa susjedom — the longer form before s.',
        },
        {
          type: 'type',
          q: 'Putujem u Split ____. (by train — vlak)',
          answer: 'vlakom',
          hint: 'Transport is the instrumental with no preposition; a masculine noun takes -om.',
          explanation: 'vlak → vlakom: the means of travel, no preposition.',
        },
        {
          type: 'type',
          q: 'Idem u kino ____ bratom. (with)',
          answer: 's',
          hint: 'Company needs a preposition; check the first sound of the next word.',
          explanation: 's bratom — bratom starts with b, so the short form is right.',
        },
        {
          type: 'type',
          q: 'Jedem juhu ____. (with a spoon — žlica)',
          answer: 'žlicom',
          hint: 'A tool takes the instrumental with no preposition; feminine -a nouns take -om.',
          explanation: 'žlica → žlicom: the tool, so no s.',
        },
        {
          type: 'type',
          q: 'Razgovaram s ____. (a friend — prijatelj)',
          answer: 'prijateljem',
          hint: 'After a soft consonant such as lj the masculine instrumental ends in -em.',
          explanation: 'prijatelj → prijateljem, because lj is soft.',
        },
        {
          type: 'type',
          q: 'Bavim se ____. (photography — fotografija)',
          answer: 'fotografijom',
          hint: 'baviti se takes the instrumental with no preposition.',
          explanation: 'fotografija → fotografijom: bavim se fotografijom.',
        },
        {
          type: 'type',
          q: 'Putujemo na otok ____. (by sea — more)',
          answer: 'morem',
          hint: 'A neuter noun in -e takes -em in the instrumental.',
          explanation: 'more → morem: by sea, no preposition.',
        },
        {
          q: 'Kava ___ šećerom, molim.',
          options: ['bez', 'sa', 's', 'od'],
          correct: 1,
          hint: 'Look at the first sound of šećerom, and at which case follows.',
          explanation: 'sa šećerom — before š the preposition is sa. bez and od take the genitive.',
        },
        {
          q: 'Complete: "Idem na posao ___." (by bike — bicikl)',
          options: ['bicikl', 'biciklu', 'biciklom', 'bicikla'],
          correct: 2,
          hint: 'A means of transport is the instrumental with no preposition.',
          explanation: 'biciklom — the instrumental of means.',
        },
        {
          q: 'Which means "I am talking with my sister"?',
          options: [
            'Razgovaram sestru.',
            'Razgovaram sa sestrom.',
            'Razgovaram sestrom.',
            'Razgovaram s sestra.',
          ],
          correct: 1,
          hint: 'A person you are with needs the preposition, and sestra starts with s.',
          explanation: 'sa sestrom — company takes sa + instrumental before s.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Plaćam ___." (I am paying by card — kartica)',
        options: ['karticu', 'karticom', 'kartica', 'kartici'],
        correct: 1,
        explanation:
          'The means of doing something is the bare instrumental: karticom. karticu is the accusative, kartici the dative or locative.',
      },
      {
        q: 'Complete: "Živim ___ roditeljima." (I live with my parents.)',
        options: ['s', 'sa', 'k', 'od'],
        correct: 0,
        explanation:
          'Company takes s + instrumental. roditeljima does not start with s, š, z or ž, so the preposition is plain s.',
      },
      {
        q: 'Which sentence correctly says "I go to work by tram"?',
        options: [
          'Idem na posao tramvaju.',
          'Idem na posao tramvajem.',
          'Idem na posao tramvaj.',
          'Idem na posao u tramvaj.',
        ],
        correct: 1,
        explanation:
          'Transport is the instrumental with no preposition, and tramvaj ends in the soft j, so it takes -em: tramvajem.',
      },
      {
        q: 'What is wrong with "Kava s mlijeko, molim"?',
        options: [
          'Nothing — it is correct',
          'It should be "s mlijekom" — s takes the instrumental',
          'It should be "sa mlijekom"',
          'It should be "kava mlijeko"',
        ],
        correct: 1,
        explanation:
          'With in the sense of together with is s + instrumental: kava s mlijekom. mlijeko begins with m, so it stays s.',
      },
      {
        q: 'Complete: "Sestra se bavi ___." (tennis — tenis)',
        options: ['tenisu', 'tenis', 's tenisom', 'tenisom'],
        correct: 3,
        explanation: 'baviti se takes the bare instrumental with no preposition: bavi se tenisom.',
      },
      {
        q: 'Complete: "Otac je došao ___ sinom."',
        options: ['s', 'k', 'sa', 'o'],
        correct: 2,
        explanation:
          'sinom begins with s, so the preposition takes its longer form: sa sinom. Plain s before s cannot be said.',
      },
    ],
    vocab: [
      ['vlak', 'train', 'U Zagreb putujem vlakom.'],
      ['autobus', 'bus', 'U školu idem autobusom.'],
      ['tramvaj', 'tram', 'Na posao se vozim tramvajem.'],
      ['avion', 'plane', 'Na more putujemo avionom.'],
      ['brod', 'ship, boat', 'Na otok idemo brodom.'],
      ['bicikl', 'bicycle', 'Ljeti idem biciklom na posao.'],
      ['olovka', 'pencil', 'Pišem olovkom.'],
      ['kartica', 'card', 'Mogu li platiti karticom?'],
      ['baviti se', 'to do (as an activity)', 'Bavim se sportom.'],
      ['postati', 'to become', 'Želi postati liječnikom.'],
      ['razgovarati', 'to talk', 'Razgovaram sa sestrom.'],
      ['mlijeko', 'milk', 'Kavu pijem s mlijekom.'],
    ],
  },

  svoj: {
    worked: [
      {
        title: 'The Owner Is the Subject',
        problem: 'Prevedi: "Marko is calling his (own) mother."',
        en: 'Marko is calling his (own) mother.',
        steps: [
          {
            label: 'Who owns the mother?',
            text: 'Marko — and Marko is the subject of the sentence.',
          },
          {
            label: 'So svoj',
            text: 'When the owner is the subject, the possessive is svoj.',
          },
          {
            label: 'The ending',
            text: 'majka is the object: feminine accusative, so svoju majku.',
          },
        ],
        answer: 'Marko zove svoju majku.',
      },
      {
        title: 'When Svoj Is Wrong',
        problem: 'Ana poznaje Marka. Prevedi: "His mother is a doctor."',
        en: 'Ana knows Marko. Translate: His mother is a doctor.',
        steps: [
          {
            label: 'Find the subject',
            text: 'In the new sentence the subject is the mother herself.',
          },
          {
            label: 'Who is the owner?',
            text: 'Marko — not the subject. svoj cannot point at the subject it describes.',
          },
          {
            label: 'Use njegov',
            text: 'Agreeing with majka: njegova. And a woman doctor is liječnica.',
          },
        ],
        answer: 'Njegova majka je liječnica.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Djeca vole ___ učiteljicu. (their own teacher)',
          options: ['svoju', 'njihovu', 'svoja', 'svoj'],
          correct: 0,
          hint: 'The owner is the subject — and the teacher is a feminine object.',
          explanation: "svoju učiteljicu. njihovu would mean someone else's children's teacher.",
        },
        {
          q: 'Zaboravio sam ___ ključeve. (my keys)',
          options: ['svoji', 'svoje', 'svojih', 'svojima'],
          correct: 1,
          hint: 'ključevi is masculine plural, and here it is the object.',
          explanation: 'svoje ključeve — masculine plural accusative.',
        },
        {
          q: 'Ivan i ___ žena dolaze večeras. (his wife)',
          options: ['svoja', 'svoju', 'njegovu', 'njegova'],
          correct: 3,
          hint: 'The wife is part of the subject — can svoj describe the subject itself?',
          explanation: 'njegova žena. svoj never appears inside the subject.',
        },
        {
          q: 'Pišem ___ bratu. (to my own brother)',
          options: ['svojeg', 'svojem', 'svoj', 'svojim'],
          correct: 1,
          hint: 'pisati takes the dative, and svoj takes the same ending moj would.',
          explanation: 'svojem bratu — masculine dative, like mojem.',
        },
        {
          type: 'type',
          q: 'Ivan traži ____ ključ. (his own)',
          answer: 'svoj',
          hint: 'The owner is the subject, and ključ is masculine and inanimate.',
          explanation: "svoj ključ — Ivan's own key.",
        },
        {
          type: 'type',
          q: 'Sestra čita ____ knjigu. (her own)',
          answer: 'svoju',
          hint: 'The owner is the subject, and knjigu is feminine accusative.',
          explanation: 'svoju knjigu — her own book.',
        },
        {
          type: 'type',
          q: "Ivan voli ____ ženu. (another man's)",
          answer: 'njegovu',
          hint: 'The owner is not the subject, so the word for his is needed, agreeing with ženu.',
          explanation: 'njegovu ženu — the wife of some other man.',
        },
        {
          type: 'type',
          q: 'Pomažem ____ bratu. (my own — dative)',
          answer: 'svojem',
          accept: ['svom', 'svojemu'],
          hint: 'The owner is the subject, and bratu is a masculine dative.',
          explanation: 'svojem (or svom) bratu — svoj in the dative, like mojem/mom.',
        },
        {
          type: 'type',
          q: 'Uzeli su ____ stvari. (their own)',
          answer: 'svoje',
          hint: 'The owners are the subject, and stvari is a feminine plural object.',
          explanation: 'svoje stvari — their own things.',
        },
        {
          q: 'Petra i ___ muž dolaze sutra. (her husband)',
          options: ['svoj', 'njezin', 'svoja', 'svojim'],
          correct: 1,
          hint: 'The husband is part of the subject himself.',
          explanation: 'njezin muž — svoj can never sit inside the subject.',
        },
        {
          q: 'Tražim ___ torbu. (my own bag — the natural way)',
          options: ['moja', 'svoju', 'svoja', 'svoj'],
          correct: 1,
          hint: 'The owner is the subject, and torbu is feminine accusative.',
          explanation: 'svoju torbu — what a native says when the subject owns it.',
        },
        {
          q: 'Oni prodaju ___ kuću. (their own)',
          options: ['njihovu', 'svoju', 'svoja', 'njihova'],
          correct: 1,
          hint: "Whose house is it — the subject's, or another group's?",
          explanation: 'svoju kuću — njihovu would mean a house belonging to other people.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Marko vozi ___ auto." (Marko drives his OWN car.)',
        options: ['svoj', 'njegov', 'svoju', 'moj'],
        correct: 0,
        explanation:
          'The owner is the subject, so svoj; auto is masculine and inanimate, so the accusative is svoj.',
      },
      {
        q: 'Complete: "Ana zove ___ brata." (Ana is calling ANOTHER woman\'s brother.)',
        options: ['svog', 'njezinog', 'svoju', 'njezin'],
        correct: 1,
        explanation:
          "The owner is not the subject, so njezin, in the animate accusative: njezinog brata. svog would make him Ana's own brother.",
      },
      {
        q: 'Which sentence says "We are visiting our grandmother" the way a native says it?',
        options: [
          'Posjećujemo svoja baka.',
          'Posjećujemo svoju baku.',
          'Posjećujemo svoj baku.',
          'Posjećujemo njihovu baku.',
        ],
        correct: 1,
        explanation:
          'We own the grandmother and we are the subject, so svoj, agreeing with the feminine accusative baku: svoju baku.',
      },
      {
        q: 'What is wrong with "Svoj pas spava u vrtu"?',
        options: [
          'Nothing — it is correct',
          '"Svoj" cannot be part of the subject — it should be "Moj pas"',
          'It should be "Svog psa"',
          'It should be "Svoja pas"',
        ],
        correct: 1,
        explanation:
          'svoj points back at the subject, so it can never sit inside the subject itself: Moj pas spava u vrtu.',
      },
      {
        q: 'What does "Ana voli svoju sestru" mean?',
        options: [
          "Ana loves another woman's sister",
          'Ana loves our sister',
          'Ana loves my sister',
          'Ana loves her own sister',
        ],
        correct: 3,
        explanation: 'svoju points back at Ana, the subject: the sister is her own.',
      },
      {
        q: 'Complete: "Djeca pišu ___ baki." (to their own grandmother — dative)',
        options: ['svoju', 'svoja', 'njihovoj', 'svojoj'],
        correct: 3,
        explanation:
          'The children own the grandmother, so svoj, and it follows baki into the dative: svojoj baki.',
      },
    ],
    vocab: [
      ['svoj', "one's own", 'Ivan pere svoj auto.'],
      ['njegov', 'his', 'Ovo je njegov kišobran.'],
      ['njezin', 'her', 'Njezina sestra živi u Splitu.'],
      ['njihov', 'their', 'Njihova kuća je blizu mora.'],
      ['moj', 'my', 'Moj brat dolazi sutra.'],
      ['žena', 'wife; woman', 'Ivan voli svoju ženu.'],
      ['muž', 'husband', 'Njezin muž je liječnik.'],
      ['ključ', 'key', 'Zaboravio sam svoj ključ.'],
      ['stvar', 'thing', 'Uzmi svoje stvari.'],
      ['kišobran', 'umbrella', 'Uzimam svoj kišobran.'],
      ['torba', 'bag', 'Ana je uzela svoju torbu.'],
    ],
  },

  'plural-cases': {
    worked: [
      {
        title: 'A Plural Object',
        problem: 'Reci: "I see the tourists." (turist)',
        en: 'I see the tourists.',
        steps: [
          {
            label: 'Its job',
            text: 'The tourists are being seen: direct object, accusative.',
          },
          {
            label: 'Masculine plural',
            text: 'The accusative plural of a masculine noun ends in -e.',
          },
          {
            label: 'What about animacy?',
            text: 'It disappears in the plural: living or not, masculine takes -e.',
          },
        ],
        answer: 'Vidim turiste.',
      },
      {
        title: 'One Ending, Three Cases',
        problem: 'Reci: "I write letters to my (male) friends and (female) friends."',
        en: 'I write letters to my friends — the men and the women.',
        steps: [
          {
            label: 'The letters',
            text: 'pismo is the object: neuter accusative plural pisma.',
          },
          {
            label: 'To whom?',
            text: 'The receivers are dative plural.',
          },
          {
            label: 'Masculine and neuter',
            text: 'Dative plural -ima: prijatelj → prijateljima.',
          },
          {
            label: 'Feminine',
            text: 'Dative plural -ama: prijateljica → prijateljicama.',
          },
        ],
        answer: 'Pišem pisma prijateljima i prijateljicama.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Posjetili smo pet ___. (cities — grad)',
          options: ['gradovi', 'gradove', 'gradova', 'gradovima'],
          correct: 2,
          hint: 'From five upwards the noun goes into the genitive plural.',
          explanation: 'pet gradova — the long genitive plural -a.',
        },
        {
          q: 'Vidiš li ___? (the mountains — planina)',
          options: ['planine', 'planina', 'planinama', 'planinu'],
          correct: 0,
          hint: 'A plural object. Does a feminine noun change between subject and object in the plural?',
          explanation: 'planine — feminine plural looks the same as subject and as object.',
        },
        {
          q: 'Idemo na izlet ___. (with the neighbours — susjedi)',
          options: ['sa susjede', 'sa susjeda', 'sa susjedi', 'sa susjedima'],
          correct: 3,
          hint: 'Company is instrumental, and the instrumental plural shares one ending with two other cases.',
          explanation: 'sa susjedima — -ima for masculine.',
        },
        {
          q: 'U ___ ima puno turista ljeti. (in the villages — selo)',
          options: ['sela', 'selima', 'selama', 'selu'],
          correct: 1,
          hint: 'Location, plural, neuter — neuter shares its ending with masculine here.',
          explanation: 'u selima — locative plural -ima. -ama is the feminine ending.',
        },
        {
          type: 'type',
          q: 'Čekam ____. (the buses — autobusi)',
          answer: 'autobuse',
          hint: 'A masculine plural object changes -i to -e.',
          explanation: 'autobusi → autobuse, the accusative plural.',
        },
        {
          type: 'type',
          q: 'Kupio sam pet ____. (tickets — karta)',
          answer: 'karata',
          hint: 'After five you need the genitive plural, and a helping a breaks up the rt cluster.',
          explanation: 'karta → karata, like sestra → sestara.',
        },
        {
          type: 'type',
          q: 'Pišem pisma ____. (to my friends — prijatelji)',
          answer: 'prijateljima',
          hint: 'The receivers take the dative plural; masculine nouns end in -ima.',
          explanation: 'prijateljima — dative plural.',
        },
        {
          type: 'type',
          q: 'Živimo u malim ____. (villages — selo)',
          answer: 'selima',
          hint: 'u + locative; in the plural the locative of a neuter noun ends in -ima.',
          explanation:
            'u malim selima — locative plural, the same form as the dative and instrumental.',
        },
        {
          type: 'type',
          q: 'Šetam s ____. (the dogs — psi)',
          answer: 'psima',
          hint: 's takes the instrumental, and the masculine plural ending is shared with two other cases.',
          explanation: 's psima — instrumental plural -ima.',
        },
        {
          q: 'Gledam ___. (the films — filmovi)',
          options: ['filmovi', 'filmove', 'filmova', 'filmovima'],
          correct: 1,
          hint: 'A masculine plural object changes its ending.',
          explanation: 'filmove — accusative plural -e.',
        },
        {
          q: 'U gradu ima mnogo ___. (parks — park)',
          options: ['parkovi', 'parkove', 'parkova', 'parkovima'],
          correct: 2,
          hint: 'mnogo is a quantity word.',
          explanation: 'mnogo parkova — genitive plural after a quantity word.',
        },
        {
          q: 'Knjige su na ___. (on the shelves — police)',
          options: ['police', 'polica', 'policama', 'policu'],
          correct: 2,
          hint: 'na + locative, and in the plural feminine nouns share one ending across three cases.',
          explanation: 'na policama — locative plural -ama.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Vidim ___." (I see the dogs — pas, plural psi)',
        options: ['psi', 'pse', 'pasa', 'psima'],
        correct: 1,
        explanation:
          'A masculine plural object takes -e: pse. psi is the subject form, pasa the genitive plural.',
      },
      {
        q: 'Complete: "Kupila sam šest ___." (six apples — jabuka)',
        options: ['jabuke', 'jabukama', 'jabuku', 'jabuka'],
        correct: 3,
        explanation:
          'From five upwards a counted noun is genitive plural, and for jabuka that is the long -a: jabuka.',
      },
      {
        q: 'Complete: "Razgovaram s ___." (with the teachers — učitelj)',
        options: ['učitelje', 'učitelja', 'učiteljima', 'učitelji'],
        correct: 2,
        explanation:
          's takes the instrumental, and the masculine plural ending is -ima: učiteljima.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'U sobi ima puno stolice.',
          'U sobi ima puno stolica.',
          'U sobi ima puno stolicama.',
          'U sobi ima puno stolicu.',
        ],
        correct: 1,
        explanation: 'puno takes the genitive plural, which for stolica is stolica.',
      },
      {
        q: 'What is wrong with "Šaljem poruke sestre"? (I send messages to my sisters.)',
        options: [
          'Nothing — it is correct',
          '"sestre" should be "sestrama" — the receivers take the dative plural',
          '"poruke" should be "poruka"',
          '"Šaljem" should be "Šalju"',
        ],
        correct: 1,
        explanation:
          'The people you send to are receivers, so they take the dative plural -ama: sestrama. poruke is the right accusative plural.',
      },
      {
        q: 'In "Imam pet prijatelja", what form is "prijatelja"?',
        options: [
          'Genitive plural after a number from five up',
          'Accusative singular',
          'Nominative plural',
          'Dative plural',
        ],
        correct: 0,
        explanation:
          'After pet the noun is genitive plural. It happens to look like the accusative singular, but the number decides.',
      },
    ],
    vocab: [
      ['student', 'student', 'U grupi je pet studenata.'],
      ['otok', 'island', 'Hrvatska ima puno otoka.'],
      ['knjiga', 'book', 'Imam dvadeset knjiga.'],
      ['sestra', 'sister', 'Nemam sestara.'],
      ['selo', 'village', 'U selima ljeti ima puno turista.'],
      ['pismo', 'letter', 'Napisao sam nekoliko pisama.'],
      ['jabuka', 'apple', 'Kupila sam šest jabuka.'],
      ['turist', 'tourist', 'Na plaži ima puno turista.'],
      ['planina', 'mountain', 'Volim planine.'],
      ['karta', 'ticket; map', 'Kupio sam pet karata.'],
      ['susjed', 'neighbour', 'Idemo na izlet sa susjedima.'],
    ],
  },

  quantity: {
    worked: [
      {
        title: 'A Lot of People',
        problem: 'Reci: "In summer a lot of tourists come."',
        en: 'In summer a lot of tourists come.',
        steps: [
          {
            label: 'The quantity word',
            text: 'puno is always followed by the genitive.',
          },
          {
            label: 'Countable?',
            text: 'Tourists can be counted, so the genitive PLURAL: turista.',
          },
          {
            label: 'The verb',
            text: 'A quantity phrase counts as one unit: third person singular, dolazi.',
          },
        ],
        answer: 'Ljeti dolazi puno turista.',
      },
      {
        title: 'At the Market',
        problem: 'Naruči: "A kilo of tomatoes and a bottle of water, please." (rajčica, voda)',
        en: 'A kilo of tomatoes and a bottle of water, please.',
        steps: [
          {
            label: 'Measures take the genitive',
            text: 'kilogram and boca both open a genitive.',
          },
          {
            label: 'Tomatoes',
            text: 'Countable: genitive plural — rajčica.',
          },
          {
            label: 'Water',
            text: 'Uncountable: genitive singular — vode.',
          },
          {
            label: 'The bottle itself',
            text: 'It is what you are asking for: accusative, boca → bocu.',
          },
        ],
        answer: 'Molim kilogram rajčica i bocu vode.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Imamo dosta ___. (bread — kruh)',
          options: ['kruh', 'kruha', 'kruhom', 'kruhu'],
          correct: 1,
          hint: 'dosta takes the genitive — and bread here is uncountable.',
          explanation: 'dosta kruha — genitive singular.',
        },
        {
          q: 'Na zabavi je bilo nekoliko ___. (friends — prijatelj)',
          options: ['prijatelja', 'prijatelji', 'prijateljima', 'prijatelje'],
          correct: 0,
          hint: 'nekoliko is a quantity word, and friends can be counted.',
          explanation: 'nekoliko prijatelja — genitive plural.',
        },
        {
          q: 'Previše ljudi ___ ovdje. (smoke — pušiti)',
          options: ['pušim', 'puši', 'pušimo', 'pušite'],
          correct: 1,
          hint: 'A quantity phrase behaves as a single unit, whatever the noun looks like.',
          explanation: 'Previše ljudi puši ovdje — the verb stays singular.',
        },
        {
          q: 'Daj mi malo ___. (salt — sol)',
          options: ['sol', 'soli', 'solju', 'solom'],
          correct: 1,
          hint: 'malo takes the genitive. sol is feminine and belongs to the small i-group, like noć.',
          explanation: 'malo soli — the genitive of sol ends in -i.',
        },
        {
          type: 'type',
          q: 'Ovaj tjedan imam puno ____. (work — posao)',
          answer: 'posla',
          hint: 'A quantity word takes the genitive, and work is uncountable, so it stays singular.',
          explanation: 'puno posla — genitive singular of posao.',
        },
        {
          type: 'type',
          q: 'Kupio sam litru ____. (milk — mlijeko)',
          answer: 'mlijeka',
          hint: 'A measure is followed by the genitive of what it measures.',
          explanation: 'litru mlijeka — genitive after a measure.',
        },
        {
          type: 'type',
          q: 'Na predavanju je bilo nekoliko ____. (students — student)',
          answer: 'studenata',
          hint: 'nekoliko takes the genitive plural, with a helping a before the ending.',
          explanation: 'nekoliko studenata — genitive plural.',
        },
        {
          type: 'type',
          q: 'Molim šalicu ____. (tea — čaj)',
          answer: 'čaja',
          hint: 'After a measure such as šalica the contents go into the genitive.',
          explanation: 'šalicu čaja — genitive singular of čaj.',
        },
        {
          type: 'type',
          q: 'Daj mi komad ____. (bread — kruh)',
          answer: 'kruha',
          hint: 'komad is a measure, so the bread takes the genitive.',
          explanation: 'komad kruha — genitive after a measure.',
        },
        {
          q: 'Puno turista ___ ljeti. (come)',
          options: ['dolazi', 'dolazimo', 'dolaziš', 'dolazite'],
          correct: 0,
          hint: 'A quantity phrase behaves like a single unit in the third person.',
          explanation:
            'Puno turista dolazi — the quantity phrase takes a third-person singular verb.',
        },
        {
          q: 'Bocu ___, molim. (wine — vino)',
          options: ['vino', 'vina', 'vinu', 'vinom'],
          correct: 1,
          hint: 'boca is a measure.',
          explanation: 'bocu vina — genitive of the contents.',
        },
        {
          q: 'Which means "a lot of time"?',
          options: ['puno vremena', 'puno vrijeme', 'puno vremenu', 'puno vremenom'],
          correct: 0,
          hint: 'Time is uncountable, and puno takes the genitive.',
          explanation: 'puno vremena — genitive singular.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Popij malo ___." (Drink a little water — voda.)',
        options: ['voda', 'vode', 'vodu', 'vodom'],
        correct: 1,
        explanation:
          'malo takes the genitive, and water is uncountable, so the genitive singular: vode.',
      },
      {
        q: 'Complete: "Na plaži je previše ___." (too many tourists — turist)',
        options: ['turisti', 'turista', 'turiste', 'turistima'],
        correct: 1,
        explanation:
          'previše takes the genitive, and tourists can be counted, so the genitive plural: turista.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Daj mi čašu vode.',
          'Daj mi čašu voda.',
          'Daj mi čašu vodu.',
          'Daj mi čaša vode.',
        ],
        correct: 0,
        explanation:
          'A measure takes the genitive of its contents (vode), and the measure itself is the object of daj, so it is accusative: čašu.',
      },
      {
        q: 'What is wrong with "Imam puno posao"?',
        options: [
          'Nothing — it is correct',
          'After puno the noun takes the genitive: "puno posla"',
          'It should be "puno poslova" for a lot of work',
          'It should be "puno poslu"',
        ],
        correct: 1,
        explanation:
          'Every quantity word takes the genitive, and work is uncountable: puno posla. puno poslova means many separate jobs.',
      },
      {
        q: 'Complete: "Koliko ___ imaš?" (How much money do you have? — novac)',
        options: ['novac', 'novcu', 'novcem', 'novca'],
        correct: 3,
        explanation: 'koliko takes the genitive, and money is uncountable: koliko novca.',
      },
      {
        q: 'What does "nekoliko knjiga" mean?',
        options: ['several books', 'a lot of books', 'too many books', 'no books'],
        correct: 0,
        explanation: 'nekoliko means several. A lot is puno or mnogo, too many is previše.',
      },
    ],
    vocab: [
      ['puno', 'a lot, much, many', 'Imam puno posla.'],
      ['malo', 'a little, few', 'Daj mi malo vode.'],
      ['nekoliko', 'several', 'Došlo je nekoliko prijatelja.'],
      ['dosta', 'enough, quite a lot', 'Imamo dosta kruha.'],
      ['previše', 'too much, too many', 'Ljeti je previše turista.'],
      ['koliko', 'how much, how many', 'Koliko košta ova torba?'],
      ['kilogram', 'kilogram', 'Kupila sam kilogram jabuka.'],
      ['litra', 'litre', 'Treba nam litra mlijeka.'],
      ['šalica', 'cup', 'Popila sam šalicu kave.'],
      ['boca', 'bottle', 'Donio je bocu vina.'],
      ['komad', 'piece', 'Pojeo sam komad torte.'],
      ['čaša', 'glass', 'Molim čašu vode.'],
    ],
  },

  'ordinals-dates': {
    worked: [
      {
        title: 'What the Date Is',
        problem: 'Reci: "Today is the twenty-first of March."',
        en: 'Today is the twenty-first of March.',
        steps: [
          {
            label: 'Build the ordinal',
            text: 'Past twenty only the last word changes: dvadeset stays, jedan → prvi.',
          },
          {
            label: 'Which form?',
            text: 'Saying what the date IS takes the plain ordinal.',
          },
          {
            label: 'The month',
            text: 'After a date the month is genitive: ožujak → ožujka (the a in -jak drops).',
          },
        ],
        answer: 'Danas je dvadeset prvi ožujka.',
      },
      {
        title: 'On a Date',
        problem: 'Reci: "We arrive on the tenth of August."',
        en: 'We arrive on the tenth of August.',
        steps: [
          {
            label: 'The ordinal',
            text: 'ten → deseti.',
          },
          {
            label: '"On" a date',
            text: 'When something happens on a date, the ordinal goes into the genitive too: desetog.',
          },
          {
            label: 'The month',
            text: 'kolovoz → kolovoza, genitive.',
          },
        ],
        answer: 'Dolazimo desetog kolovoza.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ovo je moje ___ dijete. (third)',
          options: ['treći', 'treća', 'treće', 'tri'],
          correct: 2,
          hint: 'An ordinal agrees like an adjective — and dijete ends in -e.',
          explanation: 'treće dijete — neuter.',
        },
        {
          q: 'Danas je prvi ___. (May — svibanj)',
          options: ['svibanj', 'svibnja', 'svibnju', 'svibnjem'],
          correct: 1,
          hint: 'After a date the month goes into the genitive — and watch the a that drops out.',
          explanation: 'prvi svibnja — the genitive of svibanj.',
        },
        {
          q: 'Koncert je ___ lipnja. (on the fourth of June)',
          options: ['četvrti', 'četiri', 'četvrtom', 'četvrtog'],
          correct: 3,
          hint: 'This says WHEN it happens, not what the date is.',
          explanation: 'četvrtog lipnja — both words genitive.',
        },
        {
          q: 'Koji je mjesec "prosinac"?',
          options: ['November', 'December', 'October', 'January'],
          correct: 1,
          hint: 'It is the last month of the year.',
          explanation: 'prosinac = December; studeni is November.',
        },
        {
          type: 'type',
          q: 'Ovo je moj ____ posjet Splitu. (first)',
          answer: 'prvi',
          hint: 'posjet is masculine, and the ordinal agrees like an adjective.',
          explanation: 'prvi posjet — masculine nominative ordinal.',
        },
        {
          type: 'type',
          q: 'Danas je deseti ____. (April — travanj)',
          answer: 'travnja',
          hint: 'After a date the month goes into the genitive, and its a drops out, as in lipanj → lipnja.',
          explanation: 'deseti travnja — the month in the genitive.',
        },
        {
          type: 'type',
          q: 'Vratili smo se ____ kolovoza. (on the second of August)',
          answer: 'drugog',
          accept: ['drugoga'],
          hint: 'Something happening on a date puts the ordinal into the genitive.',
          explanation: 'drugog kolovoza — the ordinal and the month both in the genitive.',
        },
        {
          type: 'type',
          q: 'Kći je u ____ razredu. (fourth — četvrti)',
          answer: 'četvrtom',
          accept: ['četvrtome'],
          hint: 'u for position takes the locative, and the ordinal agrees with razredu.',
          explanation: 'u četvrtom razredu — masculine locative -om.',
        },
        {
          type: 'type',
          q: 'Ožujak je ____ mjesec u godini. (third)',
          answer: 'treći',
          hint: 'mjesec is masculine.',
          explanation: 'treći mjesec — March is the third month.',
        },
        {
          q: 'Which month is "veljača"?',
          options: ['January', 'February', 'March', 'April'],
          correct: 1,
          hint: 'It comes straight after siječanj.',
          explanation: 'veljača is February. January is siječanj, March ožujak, April travanj.',
        },
        {
          q: 'Kupio sam kartu za ___ red. (the first row)',
          options: ['prvi', 'prva', 'prvo', 'prvog'],
          correct: 0,
          hint: 'red is masculine and inanimate, and here it is an accusative after za.',
          explanation: 'za prvi red — the inanimate accusative equals the nominative.',
        },
        {
          q: 'Which is "the twenty-first century"? (stoljeće is neuter)',
          options: [
            'dvadeset i jedan stoljeće',
            'dvadeset prvo stoljeće',
            'dvadeseti prvi stoljeće',
            'dvadeset prva stoljeće',
          ],
          correct: 1,
          hint: 'Only the last part of a compound becomes an ordinal, and it agrees with the noun.',
          explanation:
            'dvadeset prvo stoljeće — only prvo is an ordinal, neuter to match stoljeće.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Danas je ___ svibnja." (Today is the second of May.)',
        options: ['dva', 'drugi', 'drugog', 'druga'],
        correct: 1,
        explanation:
          'Stating what the date is takes the plain masculine ordinal: drugi svibnja. drugog is for when something happens on that date.',
      },
      {
        q: 'Complete: "Rođena sam ___ ožujka." (I was born on the eleventh of March.)',
        options: ['jedanaesti', 'jedanaest', 'jedanaestog', 'jedanaestom'],
        correct: 2,
        explanation:
          'Something happening on a date puts the ordinal into the genitive: jedanaestog ožujka.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ovo je moja prva godina u Zagrebu.',
          'Ovo je moja prvi godina u Zagrebu.',
          'Ovo je moja prvo godina u Zagrebu.',
          'Ovo je moja jedna godina u Zagrebu.',
        ],
        correct: 0,
        explanation:
          'godina is feminine, so the ordinal takes -a: prva godina. jedna is the counting number, not first.',
      },
      {
        q: 'What is wrong with "Danas je dvadeseti kolovoz"?',
        options: [
          'Nothing — it is correct',
          'The month must be in the genitive: "dvadeseti kolovoza"',
          'It should be "dvadeset kolovoz"',
          'It should be "dvadesetog kolovoz"',
        ],
        correct: 1,
        explanation: 'After a date the month is always genitive: dvadeseti kolovoza.',
      },
      {
        q: 'Which month is "rujan"?',
        options: ['June', 'August', 'September', 'November'],
        correct: 2,
        explanation: 'rujan is September. June is lipanj, August kolovoz, November studeni.',
      },
      {
        q: 'Complete: "Ured je na ___ katu." (on the third floor)',
        options: ['treći', 'trećeg', 'treća', 'trećem'],
        correct: 3,
        explanation:
          'An ordinal agrees like an adjective, and na for position takes the locative: na trećem katu.',
      },
    ],
    vocab: [
      ['prvi', 'first', 'Ovo je moj prvi put u Hrvatskoj.'],
      ['drugi', 'second', 'Ana je došla druga.'],
      ['treći', 'third', 'Stanujemo na trećem katu.'],
      ['siječanj', 'January', 'U siječnju je hladno.'],
      ['veljača', 'February', 'Rođen sam u veljači.'],
      ['ožujak', 'March', 'Proljeće počinje u ožujku.'],
      ['travanj', 'April', 'Danas je deseti travnja.'],
      ['lipanj', 'June', 'Škola završava u lipnju.'],
      ['srpanj', 'July', 'Vjenčali su se dvadesetog srpnja.'],
      ['kolovoz', 'August', 'U kolovozu idemo na more.'],
      ['listopad', 'October', 'U listopadu pada lišće.'],
      ['kat', 'floor, storey', 'Ured je na petom katu.'],
    ],
  },

  'past-questions-negation': {
    worked: [
      {
        title: 'A Yes/No Question',
        problem: 'Pitaj prijatelja: "Did you see the film?"',
        en: 'Ask a (male) friend: Did you see the film?',
        steps: [
          {
            label: 'Which auxiliary?',
            text: 'A yes/no question uses the long form: si becomes jesi.',
          },
          {
            label: 'Order',
            text: 'The long auxiliary goes first, with li straight after it.',
          },
          {
            label: 'The participle',
            text: 'A male friend: vidio.',
          },
        ],
        answer: 'Jesi li vidio film?',
      },
      {
        title: 'A Question Word and a Denial',
        problem: 'Pitaj i odgovori: "When did she arrive?" — "She did not arrive."',
        en: 'Ask and answer: When did she arrive? — She did not arrive.',
        steps: [
          {
            label: 'Question word first',
            text: 'Kada opens the question, so no li is needed.',
          },
          {
            label: 'Clitic after it',
            text: 'je goes straight after kada, then the participle: stigla.',
          },
          {
            label: 'The denial',
            text: 'The negative nije is a full word, so it can open the answer.',
          },
        ],
        answer: 'Kada je stigla? — Nije stigla.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ li bio u Splitu? (Have you been to Split? — to a man)',
          options: ['Si', 'Jesi', 'Nisi', 'Je'],
          correct: 1,
          hint: 'A yes/no question opens with the long form of the auxiliary.',
          explanation: 'Jesi li bio u Splitu? The short si can never open a sentence.',
        },
        {
          q: 'Zašto ___ došao? (Why did you not come?)',
          options: ['nisi', 'ne si', 'jesi li', 'si ne'],
          correct: 0,
          hint: 'The past negative fuses into one word — and after a question word there is no li.',
          explanation: 'Zašto nisi došao?',
        },
        {
          q: 'Which asks "Did they know?"',
          options: ['Su li znali?', 'Jesu li znali?', 'Li su znali?', 'Jesu li znao?'],
          correct: 1,
          hint: 'Long auxiliary first, li second — and the participle agrees with "they".',
          explanation: 'Jesu li znali?',
        },
        {
          q: 'Što ste ___ jučer? (What did you do yesterday? — to a mixed group)',
          options: ['radio', 'radite', 'radili', 'radila'],
          correct: 2,
          hint: 'ste is the plural auxiliary, and a mixed group takes the masculine plural participle.',
          explanation: 'Što ste radili jučer?',
        },
        {
          type: 'type',
          q: '____ li čitao tu knjigu? (Have you read that book? — to a man)',
          answer: 'Jesi',
          hint: 'A yes/no question opens with the long form of the auxiliary.',
          explanation: 'Jesi li čitao? — the long auxiliary plus li.',
        },
        {
          type: 'type',
          q: 'Ana ____ bila na poslu. (Ana was not at work.)',
          answer: 'nije',
          hint: 'The negative auxiliary fuses ne with the third-person form.',
          explanation: 'Ana nije bila na poslu.',
        },
        {
          type: 'type',
          q: 'Što ____ kupili? (What did you — plural — buy?)',
          answer: 'ste',
          hint: 'A question word already makes it a question, so the short auxiliary follows it.',
          explanation: 'Što ste kupili? — no li after a question word.',
        },
        {
          type: 'type',
          q: '____ razumjela pitanje. (I — a woman — did not understand the question.)',
          answer: 'Nisam',
          hint: 'The fused negative auxiliary can open a sentence.',
          explanation: 'Nisam razumjela pitanje.',
        },
        {
          type: 'type',
          q: '____ li oni bili u Zagrebu? (Have they been to Zagreb?)',
          answer: 'Jesu',
          hint: 'Third person plural, long form, for a yes/no question.',
          explanation: 'Jesu li bili u Zagrebu?',
        },
        {
          q: 'Which correctly asks "When did you arrive?" (to a woman)',
          options: ['Kada jesi stigla?', 'Kada si stigla?', 'Si kada stigla?', 'Kada stigla si?'],
          correct: 1,
          hint: 'After a question word the short auxiliary follows directly.',
          explanation: 'Kada si stigla? — the question word, then the clitic.',
        },
        {
          q: 'Complete: "___ li došla?" (Did she come?)',
          options: ['Je', 'Jesam', 'Jesi', 'Jesu'],
          correct: 0,
          hint: 'The third-person singular question form is the one to memorise.',
          explanation: 'Je li došla? — third person singular.',
        },
        {
          q: 'How does a man say "I did not know"?',
          options: ['Ne sam znao.', 'Nisam znao.', 'Nisam znala.', 'Nije znao.'],
          correct: 1,
          hint: 'The negative is one word, and the participle agrees with the man speaking.',
          explanation: 'Nisam znao — fused negative, masculine participle.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ li bio kod liječnika?" (Have you been to the doctor? — to a man)',
        options: ['Si', 'Jesi', 'Jesmo', 'Li'],
        correct: 1,
        explanation:
          'A yes/no question opens with the long auxiliary plus li: Jesi li bio? The short si cannot open a sentence.',
      },
      {
        q: 'Complete: "Marko ___ došao na zabavu." (Marko did not come to the party.)',
        options: ['ne je', 'nije', 'nisu', 'je ne'],
        correct: 1,
        explanation: 'The third-person singular negative is the fused nije. nisu is plural.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Sam bila u kinu.', 'U kinu bila sam.', 'Bila sam u kinu.', 'Bila u kinu sam.'],
        correct: 2,
        explanation:
          'sam is a clitic in second position: Bila sam u kinu. It cannot open a sentence or be pushed further back.',
      },
      {
        q: 'Which question asks "Did they call?"',
        options: ['Jesu li zvali?', 'Li su zvali?', 'Su li zvali?', 'Zvali su li?'],
        correct: 0,
        explanation:
          'A yes/no question uses the long auxiliary first, then li: Jesu li zvali? The short su cannot open it.',
      },
      {
        q: 'What does "Niste razumjeli" mean?',
        options: [
          'We did not understand',
          'You understood',
          'They did not understand',
          'You (plural) did not understand',
        ],
        correct: 3,
        explanation:
          'niste is the second-person plural negative auxiliary: you did not understand.',
      },
      {
        q: 'Complete: "Gdje ___ bili prošlog ljeta?" (Where were you — plural — last summer?)',
        options: ['ste', 'jeste', 'ste li', 'jeste li'],
        correct: 0,
        explanation:
          'With a question word there is no li, and the short auxiliary follows it straight away: Gdje ste bili?',
      },
    ],
    vocab: [
      ['znati', 'to know', 'Nismo znali.'],
      ['razumjeti', 'to understand', 'Nisam razumjela pitanje.'],
      ['kupiti', 'to buy', 'Što ste kupili?'],
      ['stići', 'to arrive', 'Kada su stigli?'],
      ['reći', 'to say', 'Što si rekao?'],
      ['javiti', 'to let know', 'Zašto nisi javio?'],
      ['gdje', 'where', 'Gdje si bio?'],
      ['kada', 'when', 'Kada ste došli?'],
      ['zašto', 'why', 'Zašto nisi došao?'],
      ['točno', 'true, exact', 'Je li to točno?'],
      ['bolestan', 'ill', 'Nisam radila, bila sam bolesna.'],
    ],
  },

  adverbs: {
    worked: [
      {
        title: 'From Adjective to Adverb',
        problem: 'Reci: "He drives carefully." (pažljiv)',
        en: 'He drives carefully.',
        steps: [
          {
            label: 'What is being described?',
            text: 'HOW he drives — so an adverb, not an adjective.',
          },
          {
            label: 'The rule',
            text: 'An adverb is the neuter form of the adjective: pažljiv → pažljivo.',
          },
          {
            label: 'No agreement',
            text: 'The adverb never changes to match the driver.',
          },
        ],
        answer: 'Vozi pažljivo.',
      },
      {
        title: 'An Irregular Comparison',
        problem: 'Reci: "Today I feel worse than yesterday."',
        en: 'Today I feel worse than yesterday.',
        steps: [
          {
            label: 'Start from the adverb',
            text: 'I feel badly: osjećam se loše.',
          },
          {
            label: 'Compare it',
            text: 'loše is one of the irregular four — its comparative is gore.',
          },
          {
            label: 'Than',
            text: 'nego + jučer.',
          },
        ],
        answer: 'Danas se osjećam gore nego jučer.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Djeco, govorite ___! (quietly — tih)',
          options: ['tih', 'tiha', 'tiho', 'tihi'],
          correct: 2,
          hint: 'How they speak: an adverb is the neuter form of the adjective.',
          explanation: 'tiho — the neuter form, used as an adverb.',
        },
        {
          q: 'Ona trči ___ od mene. (faster — brz)',
          options: ['brže', 'brzo', 'brži', 'brzije'],
          correct: 0,
          hint: 'A comparative adverb ends like the neuter comparative, and brz softens its z.',
          explanation: 'brže — z softens to ž, as d softens to đ in mlad → mlađe.',
        },
        {
          q: 'Which says "I sometimes go to the cinema"?',
          options: [
            'Ponekad idem u kino.',
            'Nikad idem u kino.',
            'Ponekad idem u kinu.',
            'Idem ponekad u kinom.',
          ],
          correct: 0,
          hint: 'Choose the right frequency word, then check the case after u for going somewhere.',
          explanation:
            'Ponekad idem u kino. — the adverb before the verb, u + accusative for motion.',
        },
        {
          q: 'Jučer sam radio ___ nego obično. (less)',
          options: ['malije', 'malo', 'manji', 'manje'],
          correct: 3,
          hint: 'malo is one of the irregular four — the regular -ije ending does not exist for it.',
          explanation: 'malo → manje.',
        },
        {
          type: 'type',
          q: 'Moj djed hoda ____. (slowly — spor)',
          answer: 'sporo',
          hint: 'An adverb is the neuter form of the adjective.',
          explanation: 'spor → sporo.',
        },
        {
          type: 'type',
          q: 'Pjevaš jako ____! (beautifully — lijep)',
          answer: 'lijepo',
          hint: 'Describing how someone sings needs the neuter form.',
          explanation: 'lijep → lijepo.',
        },
        {
          type: 'type',
          q: 'Spavao sam ____. (badly — loš)',
          answer: 'loše',
          hint: 'The adverb is the neuter form; a soft š takes -e rather than -o.',
          explanation: 'loš → loše, as in the table.',
        },
        {
          type: 'type',
          q: 'Danas govoriš ____ nego jučer. (better)',
          answer: 'bolje',
          hint: 'dobro is one of the four irregular comparatives.',
          explanation: 'dobro → bolje.',
        },
        {
          type: 'type',
          q: '____ ne pijem kavu navečer. (never)',
          answer: 'Nikad',
          accept: ['Nikada'],
          hint: 'The negative frequency word — and the verb after it is negated too.',
          explanation: 'Nikad ne pijem kavu — double negation.',
        },
        {
          q: 'Which says "I sometimes cook"?',
          options: ['Ponekad kuham.', 'Ponekad ne kuham.', 'Nikad kuham.', 'Rijetko ne kuham.'],
          correct: 0,
          hint: 'ponekad is not a negative word.',
          explanation: 'Ponekad kuham — the verb stays positive after ponekad.',
        },
        {
          q: 'In "Juha je topla", what is "topla"?',
          options: ['an adverb', 'an adjective agreeing with juha', 'a verb', 'a noun'],
          correct: 1,
          hint: 'Does it describe a noun or how something is done?',
          explanation: 'topla agrees with the feminine juha, so it is an adjective.',
        },
        {
          q: 'Complete: "Ovo je ___ nego što sam mislio." (easier — lak)',
          options: ['lakše', 'lako', 'lakiji', 'laki'],
          correct: 0,
          hint: 'Adverbs compare like adjectives; this one has a consonant change.',
          explanation: 'lako → lakše, the comparative.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "On vozi ___." (He drives slowly — spor.)',
        options: ['spor', 'sporo', 'spora', 'spori'],
        correct: 1,
        explanation: 'How he drives is an adverb, the neuter form of the adjective: sporo.',
      },
      {
        q: 'Complete: "Danas se osjećam ___ nego jučer." (worse)',
        options: ['lošo', 'gore', 'gori', 'loše'],
        correct: 1,
        explanation:
          'The comparative of the adverb loše is gore. gori is an adjective form, and plain loše makes no comparison.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Nikad gledam televiziju.',
          'Ne nikad gledam televiziju.',
          'Nikad ne gledam televiziju.',
          'Nikad gledam ne televiziju.',
        ],
        correct: 2,
        explanation:
          'nikad is a negative word, so the verb is negated too, with ne right before it: Nikad ne gledam.',
      },
      {
        q: 'What is wrong with "Ona govori glasna"?',
        options: [
          'Nothing — it is correct',
          '"glasna" is an adjective; how she speaks needs the adverb "glasno"',
          'It should be "glasan"',
          'It should be "glasni"',
        ],
        correct: 1,
        explanation: 'How someone speaks is described by the adverb, the neuter form: glasno.',
      },
      {
        q: 'What does "Obično ustajem u sedam" mean?',
        options: [
          'I always get up at seven',
          'I never get up at seven',
          'I sometimes get up at seven',
          'I usually get up at seven',
        ],
        correct: 3,
        explanation: 'obično means usually. Always is uvijek, never nikad, sometimes ponekad.',
      },
      {
        q: 'Complete: "Radim ___ nego prije." (more — mnogo)',
        options: ['mnogije', 'više', 'mnogo', 'viši'],
        correct: 1,
        explanation:
          'mnogo has the irregular comparative više. mnogije does not exist, and viši means taller.',
      },
    ],
    vocab: [
      ['brzo', 'fast, quickly', 'Ona brzo hoda.'],
      ['sporo', 'slowly', 'Djed vozi sporo.'],
      ['lijepo', 'beautifully, nicely', 'Ona lijepo pjeva.'],
      ['tiho', 'quietly', 'Govori tiho, beba spava.'],
      ['glasno', 'loudly', 'Susjedi glasno slušaju glazbu.'],
      ['dobro', 'well', 'Govoriš dobro hrvatski.'],
      ['loše', 'badly', 'Spavao sam loše.'],
      ['bolje', 'better', 'Danas mi je bolje.'],
      ['uvijek', 'always', 'Uvijek pijem kavu ujutro.'],
      ['često', 'often', 'Često idemo na more.'],
      ['rijetko', 'rarely', 'Rijetko idem u kazalište.'],
      ['nikad', 'never', 'Nikad ne kasnim na posao.'],
    ],
  },

  conjunctions: {
    worked: [
      {
        title: 'Side by Side',
        problem: 'Poveži: Brat živi u Zagrebu. Sestra živi u Splitu.',
        en: 'Join: My brother lives in Zagreb. My sister lives in Split.',
        steps: [
          {
            label: 'Contrast or obstacle?',
            text: 'Nothing is being contradicted — two facts are set side by side.',
          },
          {
            label: 'Choose the word',
            text: 'Side by side is a, not ali.',
          },
          {
            label: 'Punctuate',
            text: 'A comma goes before a.',
          },
        ],
        answer: 'Brat živi u Zagrebu, a sestra živi u Splitu.',
      },
      {
        title: 'Although, Moved to the Front',
        problem: 'Poveži s "iako": Hladno je. Idem na plažu.',
        en: 'Join with "although": It is cold. I am going to the beach.',
        steps: [
          {
            label: 'Which clause does iako open?',
            text: 'The one that is the obstacle: iako je hladno.',
          },
          {
            label: 'Order',
            text: 'The iako clause comes first here.',
          },
          {
            label: 'Punctuate',
            text: 'A clause moved to the front is closed off by a comma.',
          },
        ],
        answer: 'Iako je hladno, idem na plažu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ovo nije kava, ___ čaj.',
          options: ['a', 'ali', 'nego', 'pa'],
          correct: 2,
          hint: 'After a denial, the word that brings in the replacement is not the English "but".',
          explanation: 'nije kava, nego čaj — nego after a negative.',
        },
        {
          q: 'Ne mogu doći ___ sam bolestan.',
          options: ['jer', 'ako', 'iako', 'ili'],
          correct: 0,
          hint: 'The second clause gives the reason.',
          explanation: 'jer = because.',
        },
        {
          q: 'Hoćeš li čaj ___ kavu?',
          options: ['ali', 'ili', 'nego', 'jer'],
          correct: 1,
          hint: 'You are offering a choice between two things.',
          explanation: 'ili = or.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ako imaš vremena dođi.',
            'Ako imaš vremena, dođi.',
            'Ako, imaš vremena dođi.',
            'Ako imaš, vremena dođi.',
          ],
          correct: 1,
          hint: 'When the dependent clause comes first, a comma closes it off.',
          explanation: 'Ako imaš vremena, dođi.',
        },
        {
          type: 'type',
          q: 'Ja pijem vino, ____ ona pije vodu. (and — side by side)',
          answer: 'a',
          hint: 'Two facts side by side, with nothing contradicted.',
          explanation: 'a — whereas; there is no obstacle, so not ali.',
        },
        {
          type: 'type',
          q: 'Htio bih ići, ____ nemam vremena. (but)',
          answer: 'ali',
          hint: 'Not having time is a real obstacle.',
          explanation: 'ali — a genuine contradiction of the first half.',
        },
        {
          type: 'type',
          q: 'Ne živim u Zadru ____ u Puli. (but — after a negative)',
          answer: 'nego',
          accept: ['već'],
          hint: 'After a denial, the replacement takes a special word, not ali.',
          explanation: 'nego (or već) — ne u Zadru nego u Puli.',
        },
        {
          type: 'type',
          q: 'Ostajem kod kuće ____ sam bolestan. (because)',
          answer: 'jer',
          accept: ['zato što'],
          hint: 'The everyday word for because, placed between the clauses.',
          explanation: 'jer — it cannot open the sentence, but it can join the second clause.',
        },
        {
          type: 'type',
          q: '____ imaš vremena, dođi k nama. (if)',
          answer: 'Ako',
          hint: 'A condition, placed at the front and closed with a comma.',
          explanation: 'Ako imaš vremena, dođi — a condition.',
        },
        {
          q: 'Which is punctuated correctly?',
          options: [
            'Radim ali nisam umoran.',
            'Radim, ali nisam umoran.',
            'Radim ali, nisam umoran.',
            'Radim, ali, nisam umoran.',
          ],
          correct: 1,
          hint: 'A comma goes before the contrast word.',
          explanation: 'Radim, ali nisam umoran — one comma, before ali.',
        },
        {
          q: 'Hoćeš li sok ___ vodu?',
          options: ['ili', 'a', 'nego', 'jer'],
          correct: 0,
          hint: 'You are offering a choice.',
          explanation: 'ili — or.',
        },
        {
          q: 'Zašto ne dolaziš? — ___ što moram raditi.',
          options: ['Zato', 'Jer', 'Ako', 'Iako'],
          correct: 0,
          hint: 'This because can open a sentence, and it is two words long.',
          explanation: 'Zato što moram raditi — zato što can open a sentence.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Brat voli nogomet, ___ sestra voli tenis."',
        options: ['nego', 'ali', 'a', 'jer'],
        correct: 2,
        explanation:
          "Two preferences side by side, nothing contradicted: a. ali would present the sister's tennis as an obstacle.",
      },
      {
        q: 'Complete: "Umoran sam, ___ ću ipak doći." (I am tired, but I will still come.)',
        options: ['a', 'ali', 'nego', 'jer'],
        correct: 1,
        explanation:
          'Tiredness is a real obstacle to coming, so ali. nego needs a negative before it.',
      },
      {
        q: 'Complete: "To nije moj auto ___ tvoj."',
        options: ['ali', 'nego', 'a', 'pa'],
        correct: 1,
        explanation: 'After a negative, the replacement is introduced with nego (or već).',
      },
      {
        q: 'Which sentence says "I am eating because I am hungry"?',
        options: [
          'Jer sam gladan, jedem.',
          'Jedem jer sam gladan.',
          'Jedem zato sam gladan.',
          'Jedem ali sam gladan.',
        ],
        correct: 1,
        explanation:
          'jer cannot open a sentence, so it sits between the clauses. zato alone means "that is why".',
      },
      {
        q: 'What is wrong with "Ako padne kiša ostajemo kod kuće"?',
        options: [
          'Nothing — it is correct',
          '"Ako" cannot open a sentence',
          'It should be "jer padne kiša"',
          'A comma is needed after the fronted ako clause: "Ako padne kiša, ostajemo kod kuće"',
        ],
        correct: 3,
        explanation:
          'A dependent clause moved to the front is closed off with a comma. ako can open a sentence freely.',
      },
      {
        q: 'Complete: "___ je bilo hladno, kupali smo se." (Although it was cold, we went swimming.)',
        options: ['Iako', 'Ako', 'Jer', 'Pa'],
        correct: 0,
        explanation: 'iako means although. ako means if, and jer cannot open a sentence.',
      },
    ],
    vocab: [
      ['i', 'and', 'Kava i kolač, molim.'],
      ['a', 'and, whereas', 'Ja radim, a on spava.'],
      ['ali', 'but', 'Volio bih, ali ne mogu.'],
      ['ili', 'or', 'Čaj ili kava?'],
      ['pa', 'and then, so', 'Došao je pa smo jeli.'],
      ['jer', 'because', 'Ne mogu jer radim.'],
      ['zato što', 'because', 'Zato što sam umoran, ne idem.'],
      ['iako', 'although', 'Iako pada kiša, idemo.'],
      ['ako', 'if', 'Ako možeš, dođi.'],
      ['nego', 'but (after a negative); than', 'Nije crno nego bijelo.'],
      ['zašto', 'why', 'Zašto ne dolaziš?'],
    ],
  },

  'relative-koji': {
    worked: [
      {
        title: 'Koji as an Object',
        problem: 'Poveži: Ovo je film. Gledali smo ga jučer.',
        en: 'Join: This is the film. We watched it yesterday.',
        steps: [
          {
            label: 'Gender from outside',
            text: 'It refers back to film: masculine singular.',
          },
          {
            label: 'Case from inside',
            text: 'Inside its clause it is what we watched — the object, accusative.',
          },
          {
            label: 'The form',
            text: 'An inanimate masculine accusative equals the subject form: koji. smo follows it in second position.',
          },
        ],
        answer: 'Ovo je film koji smo gledali jučer.',
      },
      {
        title: 'With a Preposition',
        problem: 'Poveži: To je prijateljica. Idem s njom na more.',
        en: 'Join: That is the friend. I am going to the seaside with her.',
        steps: [
          {
            label: 'Gender from outside',
            text: 'prijateljica: feminine singular.',
          },
          {
            label: 'Case from inside',
            text: 'with her: s + instrumental.',
          },
          {
            label: 'Preposition first',
            text: 'The preposition goes in front of koji, never at the end: s kojom.',
          },
        ],
        answer: 'To je prijateljica s kojom idem na more.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kako se zove djevojka ___ sjedi pored tebe?',
          options: ['koja', 'koju', 'kojoj', 'koji'],
          correct: 0,
          hint: 'Feminine from outside — and inside its clause it is the one doing the sitting.',
          explanation: 'koja — feminine subject.',
        },
        {
          q: 'Ovo je kuća ___ sam odrastao. (the house I grew up in)',
          options: ['koju', 'u koju', 'u kojoj', 'kojoj'],
          correct: 2,
          hint: 'Inside the clause the house is where you grew up — position, and the preposition goes first.',
          explanation: 'u kojoj — u + locative.',
        },
        {
          q: 'Upoznao sam čovjeka ___ radi u banci.',
          options: ['kojeg', 'koji', 'kojem', 'kojim'],
          correct: 1,
          hint: 'čovjeka is an object in the main clause — but what job does the man do INSIDE the relative clause?',
          explanation: 'koji — he is the subject of radi. The case comes from inside.',
        },
        {
          q: 'Gdje je knjiga ___ si mi dao?',
          options: ['koja', 'koju', 'kojom', 'kojoj'],
          correct: 1,
          hint: 'Inside the clause the book is the thing given — the object.',
          explanation: 'koju — feminine accusative.',
        },
        {
          type: 'type',
          q: 'Ovo je čovjek ____ radi sa mnom. (who)',
          answer: 'koji',
          hint: 'čovjek is masculine, and inside the clause he is the one doing the work.',
          explanation: 'koji — masculine, subject of radi.',
        },
        {
          type: 'type',
          q: 'Kako se zove knjiga ____ čitaš? (that you are reading)',
          answer: 'koju',
          hint: 'knjiga is feminine, and inside the clause it is what you read.',
          explanation: 'koju — feminine accusative, the object of čitaš.',
        },
        {
          type: 'type',
          q: 'Ovo je kuća u ____ živim. (which)',
          answer: 'kojoj',
          hint: 'u for a place takes the locative, and kuća is feminine.',
          explanation: 'u kojoj — feminine locative.',
        },
        {
          type: 'type',
          q: 'Prijatelj ____ sam pisao živi u Kanadi. (to whom)',
          answer: 'kojem',
          accept: ['kojemu'],
          hint: 'Writing to someone takes the dative, and prijatelj is masculine.',
          explanation: 'kojem — masculine dative.',
        },
        {
          type: 'type',
          q: 'Kolega s ____ radim je iz Splita. (whom — with)',
          answer: 'kojim',
          hint: 's takes the instrumental, and kolega here is a man.',
          explanation: 's kojim — masculine instrumental.',
        },
        {
          q: 'Gdje je torba ___ sam kupila jučer?',
          options: ['koja', 'koju', 'kojoj', 'kojom'],
          correct: 1,
          hint: 'The bag is what was bought — its job inside the clause decides the case.',
          explanation: 'koju — feminine accusative, the object of kupila.',
        },
        {
          q: 'Grad ___ volim najviše je Dubrovnik.',
          options: ['koji', 'koja', 'kojem', 'kojim'],
          correct: 0,
          hint: 'grad is masculine and inanimate, and it is the object of volim.',
          explanation: 'koji — the inanimate accusative looks like the subject form.',
        },
        {
          q: 'Which says "the woman I work with"?',
          options: [
            'žena koju radim s',
            'žena s kojom radim',
            'žena kojom radim s',
            'žena koja radim',
          ],
          correct: 1,
          hint: 'Croatian never leaves the preposition at the end.',
          explanation: 'žena s kojom radim — the preposition goes in front of koji.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "To je djevojka ___ pjeva u zboru." (That is the girl who sings in the choir.)',
        options: ['koji', 'koja', 'koju', 'kojoj'],
        correct: 1,
        explanation:
          'djevojka is feminine, and inside the clause she is the subject of pjeva: koja.',
      },
      {
        q: 'Complete: "Film ___ gledamo je dosadan." (The film we are watching is boring.)',
        options: ['koji', 'koja', 'kojem', 'kojim'],
        correct: 0,
        explanation:
          'film is masculine and inanimate, and inside the clause it is the object of gledamo, so the accusative looks like the subject form: koji.',
      },
      {
        q: 'Complete: "Prijateljica s ___ putujem živi u Rijeci." (The friend I travel with lives in Rijeka.)',
        options: ['koja', 'kojoj', 'kojom', 'koju'],
        correct: 2,
        explanation: 's takes the instrumental, and the friend is feminine: s kojom.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Selo koje sam rođen je malo.',
          'Selo u kojem sam rođen je malo.',
          'Selo kojem sam rođen u je malo.',
          'Selo koji sam rođen je malo.',
        ],
        correct: 1,
        explanation:
          'Inside the clause the village is where you were born, so u + the neuter locative: u kojem. The preposition goes first.',
      },
      {
        q: 'What is wrong with "Ovo je auto sam kupio"?',
        options: [
          'Nothing — it is correct',
          'The connector cannot be dropped: "Ovo je auto koji sam kupio"',
          '"sam" should be "je"',
          'It should be "Ovo je auto kojem sam kupio"',
        ],
        correct: 1,
        explanation:
          'English can drop "that"; Croatian never drops koji. The car is the object, so koji.',
      },
      {
        q: 'In "Susjed kojem pomažem", what job does "kojem" do?',
        options: [
          'Subject of pomažem',
          'Direct object in the accusative',
          'The one who receives the help — dative',
          'A place',
        ],
        correct: 2,
        explanation:
          'pomagati takes the dative for the person helped, so the masculine dative: kojem.',
      },
    ],
    vocab: [
      ['koji', 'who, which, that', 'Čovjek koji govori je moj brat.'],
      ['čovjek', 'man, person', 'Upoznao sam čovjeka koji radi u banci.'],
      ['djevojka', 'girl', 'Kako se zove djevojka koja sjedi tamo?'],
      ['jezik', 'language', 'On govori pet jezika.'],
      ['živjeti', 'to live', 'Grad u kojem živim je lijep.'],
      ['odrasti', 'to grow up', 'Ovo je kuća u kojoj sam odrastao.'],
      ['poznavati', 'to know (a person)', 'Žena koju poznajem radi ovdje.'],
      ['voziti se', 'to ride, to drive', 'Auto kojim se vozim je star.'],
      ['kolega', 'colleague', 'Kolega s kojim radim je iz Splita.'],
      ['pjevati', 'to sing', 'Djevojka koja pjeva je moja sestra.'],
    ],
  },

  indefinites: {
    worked: [
      {
        title: 'Nobody, With a Negated Verb',
        problem: 'Reci: "Nobody called me."',
        en: 'Nobody called me.',
        steps: [
          {
            label: 'Build the word',
            text: 'no + who: ni- + tko = nitko.',
          },
          {
            label: 'Negate the verb too',
            text: 'Every ni- word needs a negated verb: je nazvao becomes nije nazvao.',
          },
          {
            label: 'Place me',
            text: 'me is a clitic: second position, after nitko.',
          },
        ],
        answer: 'Nitko me nije nazvao.',
      },
      {
        title: 'Two ni- Words and a Case',
        problem: 'Reci: "I have never told anyone."',
        en: 'I have never told anyone.',
        steps: [
          {
            label: 'never',
            text: 'ni- + kad = nikad.',
          },
          {
            label: 'anyone, in a negative sentence',
            text: 'Croatian uses the ni- word; reći takes the dative, so nitko → nikome.',
          },
          {
            label: 'Negate the verb',
            text: 'rekao sam → nisam rekao.',
          },
        ],
        answer: 'Nikad nikome nisam rekao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ je pokucao na vrata. (Someone knocked at the door.)',
          options: ['Netko', 'Nitko', 'Svatko', 'Nešto'],
          correct: 0,
          hint: '"Some" is one prefix, "no" another — and this is a person.',
          explanation: 'Netko — ne- + tko.',
        },
        {
          q: 'Ne čujem ___. (I do not hear anything.)',
          options: ['nešto', 'ništa', 'svašta', 'nitko'],
          correct: 1,
          hint: 'The verb is already negated, so the "no" family matches it — and this is a thing.',
          explanation: 'Ne čujem ništa — ni- + što.',
        },
        {
          q: 'Tražim ključeve, ali ih ___ ne vidim. (anywhere)',
          options: ['negdje', 'svugdje', 'nigdje', 'nikad'],
          correct: 2,
          hint: 'A place, in a sentence with a negated verb.',
          explanation: 'nigdje ne vidim — ni- + gdje.',
        },
        {
          q: '___ student mora napisati test. (Every student)',
          options: ['Svatko', 'Svaki', 'Svaka', 'Svako'],
          correct: 1,
          hint: 'This one stands before a noun and agrees with it like an adjective.',
          explanation: 'Svaki student — masculine. svatko stands alone.',
        },
        {
          type: 'type',
          q: '____ ne zna odgovor. (Nobody)',
          answer: 'Nitko',
          hint: 'ni- means no, attached to tko.',
          explanation: 'Nitko ne zna — with the verb negated too.',
        },
        {
          type: 'type',
          q: 'Želiš li ____ popiti? (something)',
          answer: 'nešto',
          hint: 'ne- means some, attached to što.',
          explanation: 'nešto — something.',
        },
        {
          type: 'type',
          q: 'Ne vidim ____. (anybody)',
          answer: 'nikoga',
          hint: 'After a negated verb use the ni- word, and the object of vidjeti is accusative.',
          explanation: 'Ne vidim nikoga — nitko in the accusative.',
        },
        {
          type: 'type',
          q: '____ dan idem na posao pješice. (every)',
          answer: 'Svaki',
          hint: 'This word is an adjective and agrees with the masculine dan.',
          explanation: 'Svaki dan — every day.',
        },
        {
          type: 'type',
          q: 'Ključeve nisam našao ____. (anywhere)',
          answer: 'nigdje',
          hint: 'With a negated verb Croatian uses the ni- form of gdje.',
          explanation: 'nigdje — nisam ih našao nigdje.',
        },
        {
          q: 'Ništa ___ razumijem.',
          options: ['ne', 'ni', 'nije', 'nisam'],
          correct: 0,
          hint: 'The verb is in the present and needs its own negative.',
          explanation: 'Ništa ne razumijem — double negation.',
        },
        {
          q: 'Možemo sjesti bilo ___. (anywhere at all)',
          options: ['gdje', 'nigdje', 'negdje', 'svugdje'],
          correct: 0,
          hint: 'bilo in front of a plain question word gives "any … at all".',
          explanation: 'bilo gdje — anywhere at all.',
        },
        {
          q: '___ žena pita za tebe. (A certain woman — neki)',
          options: ['Neki', 'Neka', 'Neko', 'Nekoga'],
          correct: 1,
          hint: 'neki is an adjective and agrees with its noun.',
          explanation: 'Neka žena — feminine, agreeing with žena.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ je ostavio kišobran." (Someone left an umbrella.)',
        options: ['Nitko', 'Netko', 'Svatko', 'Ništa'],
        correct: 1,
        explanation: 'Someone is the ne- word netko. nitko would need a negated verb.',
      },
      {
        q: 'Complete: "Nisam rekao ___." (I did not tell anyone — dative)',
        options: ['nitko', 'nikoga', 'nikome', 'netko'],
        correct: 2,
        explanation:
          'The person told is in the dative, so nitko declines to nikome. nikoga is the accusative.',
      },
      {
        q: 'Which sentence correctly says "Nobody is at home"?',
        options: [
          'Nitko je kod kuće.',
          'Nitko nije kod kuće.',
          'Netko nije kod kuće.',
          'Ne nitko je kod kuće.',
        ],
        correct: 1,
        explanation:
          'The ni- family needs a negated verb: Nitko nije kod kuće. Netko nije kod kuće means someone is not at home.',
      },
      {
        q: 'What is wrong with "Nikad pušim"?',
        options: [
          'Nothing — it is correct',
          '"Nikad" needs a negated verb: "Nikad ne pušim"',
          'It should be "Nekad ne pušim"',
          '"Nikad" cannot open a sentence',
        ],
        correct: 1,
        explanation: 'Every ni- word requires the verb to be negated as well: Nikad ne pušim.',
      },
      {
        q: 'What does "negdje" mean?',
        options: ['nowhere', 'everywhere', 'somewhere', 'never'],
        correct: 2,
        explanation: 'ne- means some: negdje is somewhere. Nowhere is nigdje, everywhere svugdje.',
      },
      {
        q: 'Complete: "___ voli ljeto." (Everyone loves summer.)',
        options: ['Svaki', 'Svašta', 'Sve', 'Svatko'],
        correct: 3,
        explanation:
          'On its own, everyone is svatko. svaki needs a noun after it, and svašta means all sorts of things.',
      },
    ],
    vocab: [
      ['netko', 'someone', 'Netko je pokucao na vrata.'],
      ['nitko', 'nobody', 'Nitko ne zna odgovor.'],
      ['svatko', 'everyone', 'Svatko voli more.'],
      ['nešto', 'something', 'Želiš li nešto popiti?'],
      ['ništa', 'nothing', 'Ništa ne vidim.'],
      ['svašta', 'all sorts of things', 'Na tržnici ima svašta.'],
      ['negdje', 'somewhere', 'Ključevi su negdje u kući.'],
      ['nigdje', 'nowhere', 'Nigdje ne idem sutra.'],
      ['svugdje', 'everywhere', 'Tražio sam te svugdje.'],
      ['svaki', 'every, each', 'Svaki dan učim hrvatski.'],
      ['neki', 'some, a certain', 'Neki čovjek te traži.'],
      ['bilo tko', 'anyone at all', 'Možeš pitati bilo koga.'],
    ],
  },

  'house-home': {
    worked: [
      {
        title: 'Placing the Furniture',
        problem: 'Opiši: "The bed is in the bedroom, next to the window."',
        en: 'The bed is in the bedroom, next to the window.',
        steps: [
          {
            label: 'In the bedroom',
            text: 'Position with u: locative. spavaća soba → spavaćoj sobi — the adjective follows the noun.',
          },
          {
            label: 'Next to the window',
            text: 'pored is one of the place words that take the genitive.',
          },
          {
            label: 'The form',
            text: 'prozor → prozora.',
          },
        ],
        answer: 'Krevet je u spavaćoj sobi, pored prozora.',
      },
      {
        title: 'Flat and Floor',
        problem: 'Reci: "We live in a flat on the second floor."',
        en: 'We live in a flat on the second floor.',
        steps: [
          {
            label: 'Kuća or stan?',
            text: 'A flat is a stan: u + locative, stanu.',
          },
          {
            label: 'The floor',
            text: 'A floor takes an ordinal: second → drugi.',
          },
          {
            label: 'Into the locative',
            text: 'na + locative for where it is: na drugom katu.',
          },
        ],
        answer: 'Živimo u stanu na drugom katu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Knjige su ___. (on the shelf — polica)',
          options: ['na policu', 'na polici', 'na police', 'na policom'],
          correct: 1,
          hint: 'The books are already there: position, and polica is feminine.',
          explanation: 'na polici — locative. na policu would be putting them there.',
        },
        {
          q: 'Mačka spava ispod ___. (the bed — krevet)',
          options: ['krevetu', 'krevet', 'krevetom', 'kreveta'],
          correct: 3,
          hint: 'u and na take the locative for position — the other place words do not.',
          explanation: 'ispod kreveta — ispod takes the genitive.',
        },
        {
          q: 'Kuham u ___. (the kitchen — kuhinja)',
          options: ['kuhinja', 'kuhinju', 'kuhinji', 'kuhinjom'],
          correct: 2,
          hint: 'You are in the room: position, and the noun is feminine.',
          explanation: 'u kuhinji — feminine locative -i.',
        },
        {
          q: 'Stan nije na katu, nego u ___. (on the ground floor)',
          options: ['prizemlje', 'prizemlju', 'prizemlja', 'prizemljem'],
          correct: 1,
          hint: 'The ground floor has its own neuter word and takes u — and this is position.',
          explanation: 'u prizemlju — neuter locative -u.',
        },
        {
          type: 'type',
          q: 'Živim u ____. (a flat — stan)',
          answer: 'stanu',
          hint: 'Where you live is a position, so u takes the locative.',
          explanation: 'u stanu — masculine locative -u.',
        },
        {
          type: 'type',
          q: 'Kauč je pored ____. (the wall — zid)',
          answer: 'zida',
          hint: 'pored takes the genitive.',
          explanation: 'pored zida — genitive.',
        },
        {
          type: 'type',
          q: 'Slika visi na ____. (the wall — zid)',
          answer: 'zidu',
          hint: 'The picture is already there, and na for position takes the locative.',
          explanation: 'na zidu — locative of position.',
        },
        {
          type: 'type',
          q: 'Perilica je u ____. (the bathroom — kupaonica)',
          answer: 'kupaonici',
          hint: 'u + locative; feminine -a nouns end in -i.',
          explanation: 'u kupaonici — feminine locative.',
        },
        {
          type: 'type',
          q: 'Naš stan je na ____ katu. (fifth — peti)',
          answer: 'petom',
          accept: ['petome'],
          hint: 'The ordinal agrees with katu, which is locative.',
          explanation: 'na petom katu — masculine locative -om.',
        },
        {
          q: 'Mačka spava ___ kreveta.',
          options: ['ispod', 'u', 'na', 's'],
          correct: 0,
          hint: 'kreveta is a genitive form.',
          explanation: 'ispod kreveta — under the bed, genitive.',
        },
        {
          q: 'Djeca se igraju u ___. (the garden — vrt)',
          options: ['vrt', 'vrta', 'vrtu', 'vrtom'],
          correct: 2,
          hint: 'They are already there — position.',
          explanation: 'u vrtu — locative of position.',
        },
        {
          q: 'Which word means "window"?',
          options: ['vrata', 'prozor', 'zid', 'krevet'],
          correct: 1,
          hint: 'You look out of it.',
          explanation: 'prozor is a window. vrata is a door, zid a wall, krevet a bed.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Djeca spavaju u ___." (in the bedroom — spavaća soba)',
        options: ['spavaća soba', 'spavaćoj sobi', 'spavaću sobu', 'spavaćom sobom'],
        correct: 1,
        explanation: 'Position takes u + locative, and both words are feminine: u spavaćoj sobi.',
      },
      {
        q: 'Complete: "Bicikl je iza ___." (behind the house — kuća)',
        options: ['kuća', 'kuću', 'kuće', 'kući'],
        correct: 2,
        explanation: 'iza takes the genitive, and a feminine -a noun ends in -e there: iza kuće.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Živimo u prizemlju.',
          'Živimo na prizemlju.',
          'Živimo u prizemlje.',
          'Živimo u prizemlja.',
        ],
        correct: 0,
        explanation:
          'The ground floor takes u + locative: u prizemlju. u prizemlje would be moving into it.',
      },
      {
        q: 'What is wrong with "Slika je iznad kauču"?',
        options: [
          'Nothing — it is correct',
          'iznad takes the genitive: "iznad kauča"',
          'It should be "iznad kauč"',
          'It should be "u kauču"',
        ],
        correct: 1,
        explanation:
          'Only u and na take the locative for position; iznad, like ispod, pored and iza, takes the genitive.',
      },
      {
        q: 'Which room is the "dnevni boravak"?',
        options: ['bathroom', 'hallway', 'garage', 'living room'],
        correct: 3,
        explanation:
          'dnevni boravak is the living room. The bathroom is kupaonica, the hallway hodnik, the garage garaža.',
      },
      {
        q: 'Complete: "Moj stan je na ___ katu." (the second floor)',
        options: ['drugi', 'drugog', 'drugom', 'dva'],
        correct: 2,
        explanation: 'The ordinal agrees with katu in the locative: na drugom katu.',
      },
    ],
    vocab: [
      ['kuća', 'house', 'Živimo u kući s vrtom.'],
      ['stan', 'flat, apartment', 'Moj stan je na trećem katu.'],
      ['soba', 'room', 'Ovo je moja soba.'],
      ['kuhinja', 'kitchen', 'Mama kuha u kuhinji.'],
      ['kupaonica', 'bathroom', 'Kupaonica je mala.'],
      ['spavaća soba', 'bedroom', 'Djeca spavaju u spavaćoj sobi.'],
      ['dnevni boravak', 'living room', 'Kauč je u dnevnom boravku.'],
      ['krevet', 'bed', 'Mačka spava ispod kreveta.'],
      ['kauč', 'sofa', 'Sjedimo na kauču.'],
      ['prozor', 'window', 'Otvori prozor, molim te.'],
      ['vrata', 'door', 'Zatvori vrata.'],
      ['prizemlje', 'ground floor', 'Stan je u prizemlju.'],
    ],
  },

  'body-health': {
    worked: [
      {
        title: 'What Hurts',
        problem: 'Reci: "My stomach hurts."',
        en: 'My stomach hurts.',
        steps: [
          {
            label: 'The subject',
            text: 'The stomach does the hurting: trbuh is the subject.',
          },
          {
            label: 'The person',
            text: 'You are the object, accusative: me.',
          },
          {
            label: 'One thing or several?',
            text: 'One stomach: boli.',
          },
        ],
        answer: 'Boli me trbuh.',
      },
      {
        title: 'A Plural Body Part',
        problem: 'Reci: "Her eyes hurt."',
        en: 'Her eyes hurt.',
        steps: [
          {
            label: 'The subject',
            text: 'oči — eyes, plural.',
          },
          {
            label: 'The verb counts the eyes',
            text: 'Several things hurt: bole.',
          },
          {
            label: 'The person',
            text: 'Her, as the object: the short accusative je, in second position.',
          },
        ],
        answer: 'Bole je oči.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Boli ___ zub. (His tooth hurts.)',
          options: ['mu', 'ga', 'on', 'njemu'],
          correct: 1,
          hint: 'boljeti takes the accusative for the person, not the dative.',
          explanation: 'Boli ga zub.',
        },
        {
          q: 'Djeca su bolesna. Boli ___ grlo. (Their throats hurt.)',
          options: ['im', 'ih', 'oni', 'njih'],
          correct: 1,
          hint: 'The person is the object — the short accusative for "them".',
          explanation: 'Boli ih grlo.',
        },
        {
          q: 'Idem u ___ po lijek. (the pharmacy)',
          options: ['ljekarni', 'ljekarna', 'ljekarne', 'ljekarnu'],
          correct: 3,
          hint: 'You are going there — movement, and the word is feminine.',
          explanation: 'u ljekarnu — accusative of direction.',
        },
        {
          q: 'A woman says "I have a cold."',
          options: ['Prehlađen sam.', 'Prehlađeno sam.', 'Prehlađena si.', 'Prehlađena sam.'],
          correct: 3,
          hint: 'The adjective agrees with the speaker, and "I am" is sam.',
          explanation: 'Prehlađena sam — feminine, first person.',
        },
        {
          type: 'type',
          q: 'Boli ____ glava. (Her head hurts.)',
          answer: 'je',
          hint: 'The person is the accusative object; use the short form for her.',
          explanation: 'Boli je glava — je is the short accusative "her".',
        },
        {
          type: 'type',
          q: '____ me noge. (My legs hurt.)',
          answer: 'Bole',
          hint: 'The verb agrees with the body part, and there are two legs.',
          explanation: 'Bole me noge — plural subject, plural verb.',
        },
        {
          type: 'type',
          q: 'Bio sam kod ____. (the doctor — liječnik)',
          answer: 'liječnika',
          hint: 'kod takes the genitive.',
          explanation: "kod liječnika — at the doctor's, genitive.",
        },
        {
          type: 'type',
          q: 'Prehlađen ____. (I have a cold — a man speaking)',
          answer: 'sam',
          hint: 'The first-person short form of biti.',
          explanation: 'Prehlađen sam — a woman would say prehlađena sam.',
        },
        {
          type: 'type',
          q: 'Imate li nešto za ____? (a headache — glavobolja)',
          answer: 'glavobolju',
          hint: 'za here takes the accusative; feminine -a becomes -u.',
          explanation: 'za glavobolju — accusative after za.',
        },
        {
          q: 'Boli ___ zub? (Does your tooth hurt? — to a friend)',
          options: ['ti', 'te', 'tebi', 'tvoj'],
          correct: 1,
          hint: 'boljeti takes the accusative for the person.',
          explanation: 'Boli te zub? — te is the short accusative "you".',
        },
        {
          q: 'Which of these is plural in Croatian?',
          options: ['nos', 'grlo', 'usta', 'trbuh'],
          correct: 2,
          hint: 'Like leđa, one of these has no singular.',
          explanation: 'usta (mouth) is plural, so bole me usta.',
        },
        {
          q: 'A woman says "I am tired":',
          options: ['Umoran sam.', 'Umorna sam.', 'Umorno sam.', 'Umorni sam.'],
          correct: 1,
          hint: 'The adjective agrees with the speaker.',
          explanation: 'Umorna sam — feminine.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ me trbuh." (My stomach hurts.)',
        options: ['Boli', 'Bole', 'Bolim', 'Boliš'],
        correct: 0,
        explanation:
          'The body part is the subject, and trbuh is one thing: boli. bolim would make you the one hurting.',
      },
      {
        q: 'Complete: "Bole ___ oči." (His eyes hurt.)',
        options: ['mu', 'ga', 'njegov', 'on'],
        correct: 1,
        explanation:
          'The person affected is the accusative object: ga. mu is the dative, which boljeti does not take.',
      },
      {
        q: 'Which sentence correctly says "Our backs hurt"?',
        options: ['Boli nas leđa.', 'Bole nas leđa.', 'Bole nam leđa.', 'Boli nam leđa.'],
        correct: 1,
        explanation: 'leđa is always plural, so bole, and the person is the accusative nas.',
      },
      {
        q: 'What is wrong with "Ja bolim zub"?',
        options: [
          'Nothing — it is correct',
          'The body part is the subject and you are the object: "Boli me zub"',
          'It should be "Bolim zuba"',
          'It should be "Boli mi zub"',
        ],
        correct: 1,
        explanation:
          'In Croatian the tooth does the hurting: Boli me zub, with the person in the accusative.',
      },
      {
        q: 'What does "Imam temperaturu" mean?',
        options: ['I have a temperature (a fever)', 'I feel sick', 'I have a cold', 'I am tired'],
        correct: 0,
        explanation:
          'Imam temperaturu is a fever. I feel sick is muka mi je, a cold prehlađen sam, tired umoran sam.',
      },
      {
        q: 'Complete: "Idem ___ ljekarnu." (to the pharmacy)',
        options: ['kod', 'na', 'k', 'u'],
        correct: 3,
        explanation:
          'Going into the pharmacy is u + accusative: u ljekarnu. kod would need the genitive.',
      },
    ],
    vocab: [
      ['glava', 'head', 'Boli me glava.'],
      ['ruka', 'arm, hand', 'Boli me ruka.'],
      ['noga', 'leg, foot', 'Bole me noge.'],
      ['oko', 'eye', 'Oči su joj plave.'],
      ['uho', 'ear', 'Bole ga uši.'],
      ['leđa', 'back', 'Bole me leđa.'],
      ['trbuh', 'stomach', 'Boli me trbuh.'],
      ['grlo', 'throat', 'Boli me grlo.'],
      ['zub', 'tooth', 'Boli ga zub.'],
      ['liječnik', 'doctor', 'Idem k liječniku.'],
      ['ljekarna', 'pharmacy', 'Idem u ljekarnu po lijek.'],
      ['lijek', 'medicine', 'Moram uzimati lijek.'],
    ],
  },

  'clothes-appearance': {
    worked: [
      {
        title: 'What She Is Wearing',
        problem: 'Reci: "Today she is wearing a white shirt and grey trousers."',
        en: 'Today she is wearing a white shirt and grey trousers.',
        steps: [
          {
            label: 'The verb',
            text: 'Wearing is nositi, not imati: nosi.',
          },
          {
            label: 'The shirt',
            text: 'košulja is feminine and the object: bijela košulja → bijelu košulju.',
          },
          {
            label: 'The trousers',
            text: 'hlače is always feminine plural; its object form does not change, and the colour takes -e: sive hlače.',
          },
        ],
        answer: 'Danas nosi bijelu košulju i sive hlače.',
      },
      {
        title: 'Another Size',
        problem: 'U trgovini: "Do you have this jacket in a smaller size?"',
        en: 'In a shop: Do you have this jacket in a smaller size?',
        steps: [
          {
            label: 'Register',
            text: 'A shop assistant gets Vi: imate li.',
          },
          {
            label: 'The jacket',
            text: 'jakna is the object: ova jakna → ovu jaknu.',
          },
          {
            label: 'The size',
            text: 'Size is broj, and "in" a size is u + locative: manji broj → manjem broju.',
          },
        ],
        answer: 'Imate li ovu jaknu u manjem broju?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Na plaži nosim ___. (a yellow hat — žuta kapa)',
          options: ['žuta kapa', 'žutu kapu', 'žutoj kapi', 'žute kape'],
          correct: 1,
          hint: 'What you wear is the object — both words take the feminine accusative.',
          explanation: 'žutu kapu.',
        },
        {
          q: 'Ove tenisice su mi ___. (too big — velik)',
          options: ['velik', 'velika', 'velike', 'veliki'],
          correct: 2,
          hint: 'tenisice is feminine plural, like cipele.',
          explanation: 'velike — feminine plural -e.',
        },
        {
          q: 'Moj brat uvijek ___ crnu jaknu. (wears)',
          options: ['nosiš', 'nosi', 'nose', 'nosim'],
          correct: 1,
          hint: 'The subject is one person, not you and not me.',
          explanation: 'nosi — third person singular of nositi.',
        },
        {
          q: 'Tražim ___ majicu. (a pink T-shirt — ružičast)',
          options: ['ružičastu', 'ružičasta', 'ružičaste', 'ružičastoj'],
          correct: 0,
          hint: 'The colour agrees with majica, which here is the object.',
          explanation: 'ružičastu majicu — feminine accusative.',
        },
        {
          type: 'type',
          q: 'Danas nosim ____ haljinu. (a yellow dress — žut)',
          answer: 'žutu',
          hint: 'haljinu is a feminine accusative, and the colour must match.',
          explanation: 'žutu haljinu — feminine accusative -u.',
        },
        {
          type: 'type',
          q: 'Moja sestra ____ naočale. (wears — nositi)',
          answer: 'nosi',
          hint: 'Third person singular of the verb for wearing.',
          explanation: 'ona nosi — nositi for she.',
        },
        {
          type: 'type',
          q: 'Ove cipele su mi ____. (too small — mali)',
          answer: 'male',
          accept: ['premale'],
          hint: 'cipele is feminine plural, and the adjective agrees with it.',
          explanation: 'male — feminine plural.',
        },
        {
          type: 'type',
          q: 'Mogu li ovo ____? (try on)',
          answer: 'probati',
          accept: ['isprobati'],
          hint: 'After mogu li the verb is an infinitive.',
          explanation: 'Mogu li ovo probati? — can I try this on?',
        },
        {
          type: 'type',
          q: 'Tražim ____ kaput. (a black coat — crn)',
          answer: 'crni',
          hint: 'kaput is masculine and inanimate, so its accusative looks like the nominative.',
          explanation: 'crni kaput — masculine inanimate accusative.',
        },
        {
          q: 'Which verb means "to wear" clothes?',
          options: ['imati', 'nositi', 'raditi', 'staviti'],
          correct: 1,
          hint: 'The same verb also means to carry.',
          explanation: 'nositi — imati would say you own it.',
        },
        {
          q: 'Hlače su ___. (new)',
          options: ['nov', 'nova', 'novo', 'nove'],
          correct: 3,
          hint: 'hlače is always plural.',
          explanation: 'nove — feminine plural.',
        },
        {
          q: 'Complete: "Imate li ovu majicu u ___ boji?" (in blue)',
          options: ['plava', 'plavu', 'plavoj', 'plavom'],
          correct: 2,
          hint: 'u + locative, and boja is feminine.',
          explanation: 'u plavoj boji — feminine locative.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Nosim ___ jaknu." (I am wearing a red jacket.)',
        options: ['crven', 'crvena', 'crvenu', 'crvene'],
        correct: 2,
        explanation:
          'jakna is feminine and the object of nosim, so the colour takes the feminine accusative: crvenu.',
      },
      {
        q: 'Complete: "Kupila sam ___ traperice." (I bought new jeans.)',
        options: ['nov', 'novu', 'nove', 'novi'],
        correct: 2,
        explanation: 'traperice is feminine plural, so the adjective takes -e: nove traperice.',
      },
      {
        q: 'Which sentence correctly says "My brother is wearing a white shirt"?',
        options: [
          'Moj brat nosi bijela košulja.',
          'Moj brat nosi bijelu košulju.',
          'Moj brat nosi bijeloj košulji.',
          'Moj brat nosi bijeli košulju.',
        ],
        correct: 1,
        explanation:
          'What you wear is the accusative object: bijelu košulju. bijeli is masculine and does not agree.',
      },
      {
        q: 'What is wrong with "Nosim nova hlače"?',
        options: [
          'Nothing — it is correct',
          'hlače is feminine plural, so the adjective must be "nove"',
          'It should be "novu hlaču"',
          '"Nosim" should be "Imam"',
        ],
        correct: 1,
        explanation: 'hlače has no singular; as a feminine plural it takes -e: nove hlače.',
      },
      {
        q: 'In a shop, "Imate li manji broj?" asks…',
        options: [
          'Do you have a smaller size?',
          'Do you have a cheaper one?',
          'Do you have another colour?',
          'Do you have fewer of them?',
        ],
        correct: 0,
        explanation: 'broj is the size in a shop, and manji is smaller.',
      },
      {
        q: 'Complete: "Uzet ću ___ čarape." (I will take the grey socks — siv)',
        options: ['sivu', 'sivi', 'siva', 'sive'],
        correct: 3,
        explanation: 'čarape is feminine plural, so the colour takes -e: sive čarape.',
      },
    ],
    vocab: [
      ['majica', 'T-shirt', 'Nosim crvenu majicu.'],
      ['košulja', 'shirt', 'Brat nosi bijelu košulju.'],
      ['hlače', 'trousers', 'Hlače su mi prevelike.'],
      ['traperice', 'jeans', 'Kupila sam nove traperice.'],
      ['suknja', 'skirt', 'Nosi crnu suknju.'],
      ['haljina', 'dress', 'Ovo je lijepa haljina.'],
      ['jakna', 'jacket', 'Uzmi jaknu, hladno je.'],
      ['kaput', 'coat', 'Zimi nosim kaput.'],
      ['cipele', 'shoes', 'Cipele su mi male.'],
      ['čarape', 'socks', 'Trebam nove čarape.'],
      ['nositi', 'to wear; to carry', 'Moja sestra nosi naočale.'],
      ['probati', 'to try (on)', 'Mogu li ovo probati?'],
    ],
  },

  'describing-people': {
    worked: [
      {
        title: 'Height and Hair',
        problem: 'Opiši: "My brother is tall and has blond hair."',
        en: 'My brother is tall and has blond hair.',
        steps: [
          {
            label: 'Tall',
            text: 'brat is masculine: visok.',
          },
          {
            label: 'Blond',
            text: 'For hair, plav means blond.',
          },
          {
            label: 'Has hair',
            text: 'imati takes the accusative: plava kosa → plavu kosu.',
          },
        ],
        answer: 'Moj brat je visok i ima plavu kosu.',
      },
      {
        title: 'The Possessive Dative',
        problem: 'Reci na hrvatski način: "Her hair is grey."',
        en: 'Say it the Croatian way: Her hair is grey.',
        steps: [
          {
            label: 'Grey hair',
            text: 'Hair has its own word for grey: sijeda, never siva.',
          },
          {
            label: 'Whose?',
            text: 'Not njezina — a Croatian puts the owner in the dative: joj.',
          },
          {
            label: 'Order',
            text: 'kosa first; then the clitics, the dative joj before je.',
          },
        ],
        answer: 'Kosa joj je sijeda.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moja teta je jako ___. (cheerful — veseo)',
          options: ['veseo', 'veselo', 'veseli', 'vesela'],
          correct: 3,
          hint: 'teta is feminine. The final -o of veseo turns back into an l before any ending.',
          explanation:
            'vesela — the -eo of veseo is an old -el, and the l returns before an ending.',
        },
        {
          q: 'Oči su ___ smeđe. (Her eyes are brown.)',
          options: ['je', 'joj', 'nju', 'njezin'],
          correct: 1,
          hint: 'The owner goes into the dative, short form.',
          explanation: 'Oči su joj smeđe.',
        },
        {
          q: '___ je tvoj novi šef? — Strog, ali pošten.',
          options: ['Koji', 'Kakav', 'Tko', 'Čiji'],
          correct: 1,
          hint: 'The answer describes his character — what kind of person he is.',
          explanation: 'Kakav je? asks what someone is like. Koji? asks which one.',
        },
        {
          q: 'Ona ima ___ kosu. (long curly hair)',
          options: ['dugu kovrčavu', 'duga kovrčava', 'dugoj kovrčavoj', 'duge kovrčave'],
          correct: 0,
          hint: 'After imati, hair is the object — both adjectives follow it into that case.',
          explanation: 'dugu kovrčavu kosu — feminine accusative on all three.',
        },
        {
          type: 'type',
          q: 'Moja teta je jako ____. (patient — strpljiv)',
          answer: 'strpljiva',
          hint: 'teta is feminine, and the adjective agrees with her.',
          explanation: 'strpljiva — feminine -a.',
        },
        {
          type: 'type',
          q: 'Oči su ____ plave. (His eyes are blue.)',
          answer: 'mu',
          hint: 'The owner is shown with the short dative, which follows the auxiliary su.',
          explanation: 'Oči su mu plave — the possessive dative "to him".',
        },
        {
          type: 'type',
          q: 'Ima ____ kosu. (brown — smeđ)',
          answer: 'smeđu',
          hint: 'kosu is a feminine accusative.',
          explanation: 'smeđu kosu — feminine accusative.',
        },
        {
          type: 'type',
          q: '____ je tvoja nova učiteljica? — Stroga, ali draga. (What is she like?)',
          answer: 'Kakva',
          hint: 'You are asking what kind of person, and the word agrees with a feminine noun.',
          explanation: 'Kakva je? — kakav, agreeing with učiteljica.',
        },
        {
          type: 'type',
          q: 'Moja sestra je ____. (clever — pametan)',
          answer: 'pametna',
          hint: 'The feminine form drops the a of -an.',
          explanation: 'pametan → pametna.',
        },
        {
          q: 'Which word means "lazy"?',
          options: ['vrijedan', 'lijen', 'strpljiv', 'ozbiljan'],
          correct: 1,
          hint: 'It is the opposite of hard-working.',
          explanation: 'lijen is lazy; vrijedan is hard-working.',
        },
        {
          q: 'Moji roditelji su ___. (kind — drag)',
          options: ['drag', 'draga', 'dragi', 'drago'],
          correct: 2,
          hint: 'A mixed group takes the masculine plural.',
          explanation: 'dragi — masculine plural for a mixed group.',
        },
        {
          q: 'Complete: "Ima plavu ___." (She has blond hair.)',
          options: ['kosa', 'kosu', 'kosi', 'kosom'],
          correct: 1,
          hint: 'imati takes the accusative.',
          explanation: 'plavu kosu — plav with hair means blond.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moj djed je ___." (My grandfather is tall.)',
        options: ['visoka', 'visok', 'visoko', 'visoki'],
        correct: 1,
        explanation:
          'The adjective agrees with djed, which is masculine: visok. visoka is feminine, visoko neuter.',
      },
      {
        q: 'Complete: "Kosa ___ je kovrčava." (Her hair is curly.)',
        options: ['je', 'joj', 'nju', 'njezin'],
        correct: 1,
        explanation:
          'The owner is named with the possessive dative: kosa joj je kovrčava — the hair to her.',
      },
      {
        q: 'Which sentence says "He has blue eyes"?',
        options: ['Ima plave oči.', 'Ima plava oči.', 'Ima plavih očiju.', 'Ima plavim očima.'],
        correct: 0,
        explanation: 'imati takes the accusative, and oči is plural: plave oči.',
      },
      {
        q: 'What is wrong with "Moja sestra je sramežljiv"?',
        options: [
          'Nothing — it is correct',
          'The adjective must agree with sestra: "sramežljiva"',
          'It should be "sramežljivo"',
          'It should be "je sramežljivu"',
        ],
        correct: 1,
        explanation: 'sestra is feminine, so the adjective takes -a: sramežljiva.',
      },
      {
        q: 'You want to know which of the boys is Ivan. What do you ask?',
        options: ['Kakav je Ivan?', 'Čiji je Ivan?', 'Kako je Ivan?', 'Koji je Ivan?'],
        correct: 3,
        explanation:
          'koji asks which one out of a set. kakav asks what he is like, kako how he is.',
      },
      {
        q: 'What does "sijeda kosa" mean?',
        options: ['blond hair', 'black hair', 'grey hair', 'long hair'],
        correct: 2,
        explanation: 'sijeda is grey, for hair only. Blond is plava, black crna, long duga.',
      },
    ],
    vocab: [
      ['visok', 'tall', 'Moj djed je visok.'],
      ['nizak', 'short', 'Brat je nizak, a sestra visoka.'],
      ['mršav', 'slim', 'On je visok i mršav.'],
      ['zgodan', 'attractive', 'Njezin muž je zgodan.'],
      ['kosa', 'hair', 'Ima dugu smeđu kosu.'],
      ['brada', 'beard', 'Djed ima sijedu bradu.'],
      ['naočale', 'glasses', 'Moja sestra nosi naočale.'],
      ['veseo', 'cheerful', 'Teta je uvijek vesela.'],
      ['pametan', 'clever', 'Ona je jako pametna.'],
      ['strpljiv', 'patient', 'Učitelj je strpljiv.'],
      ['vrijedan', 'hard-working', 'Ana je vrijedna.'],
      ['sramežljiv', 'shy', 'Mali Ivan je sramežljiv.'],
    ],
  },

  'work-jobs': {
    worked: [
      {
        title: 'Asking and Answering',
        problem: 'Pitaj i odgovori (žena): "What do you do?" — "I am a cook."',
        en: 'Ask and answer (a woman answering): What do you do? — I am a cook.',
        steps: [
          {
            label: 'The idiomatic question',
            text: 'baviti se takes the instrumental, so "what" becomes čime: Čime se baviš?',
          },
          {
            label: 'The answer',
            text: 'Ja sam + the job in the subject form.',
          },
          {
            label: 'A woman',
            text: 'The female form is standard: kuhar → kuharica.',
          },
        ],
        answer: 'Čime se baviš? — Ja sam kuharica.',
      },
      {
        title: 'Working As',
        problem: 'Reci: "My father works as a driver at a big company."',
        en: 'My father works as a driver at a big company.',
        steps: [
          {
            label: 'As a driver',
            text: 'radi kao + the subject form: vozač, no case ending.',
          },
          {
            label: 'At a company',
            text: 'u + locative: tvrtka → tvrtki.',
          },
          {
            label: 'The adjective follows',
            text: 'Feminine locative -oj: velikoj.',
          },
        ],
        answer: 'Moj otac radi kao vozač u velikoj tvrtki.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moja sestra je ___. (a lawyer)',
          options: ['odvjetnik', 'odvjetnica', 'odvjetnicu', 'odvjetnika'],
          correct: 1,
          hint: 'A woman takes the female job title, in the subject form.',
          explanation: 'odvjetnica — the male form for a woman reads as an error.',
        },
        {
          q: 'Danas nisam ___ poslu. (at work)',
          options: ['na', 'u', 'kod', 'iz'],
          correct: 0,
          hint: 'posao is one of the places that pairs with the "on" preposition.',
          explanation: 'na poslu — but u banci. Each place is learned with its preposition.',
        },
        {
          q: 'Radi kao ___. (She works as a shop assistant.)',
          options: ['prodavačicu', 'prodavač', 'prodavačica', 'prodavačice'],
          correct: 2,
          hint: 'After kao the job stays in the subject form — and she is a woman.',
          explanation: 'Radi kao prodavačica.',
        },
        {
          q: '___ se bavi tvoj brat? (What does your brother do?)',
          options: ['Što', 'Čime', 'Kime', 'Koga'],
          correct: 1,
          hint: 'baviti se takes the instrumental — so the question word does too, and it is about a thing.',
          explanation: 'Čime se bavi? — the instrumental of što.',
        },
        {
          type: 'type',
          q: 'Moj otac je ____. (a lawyer)',
          answer: 'odvjetnik',
          hint: 'A man, and after je the job stays in the subject form.',
          explanation: 'odvjetnik — a woman would be odvjetnica.',
        },
        {
          type: 'type',
          q: 'Ana radi kao ____. (a doctor)',
          answer: 'liječnica',
          hint: 'Ana is a woman, and after kao the job stays in the subject form.',
          explanation: 'radi kao liječnica — the female form.',
        },
        {
          type: 'type',
          q: '____ se baviš? (What do you do for a living?)',
          answer: 'Čime',
          hint: 'baviti se takes the instrumental, so the question word is instrumental too.',
          explanation: 'Čime se baviš? — the instrumental of što.',
        },
        {
          type: 'type',
          q: 'Imam sastanak ____ kolegicom. (with)',
          answer: 's',
          hint: 'Company takes a preposition; look at the first sound of the next word.',
          explanation: 's kolegicom — k is not s, š, z or ž, so plain s.',
        },
        {
          type: 'type',
          q: 'Moja teta radi u ____. (a bank — banka)',
          answer: 'banci',
          hint: 'u + locative; the k of banka changes before -i.',
          explanation: 'u banci — k becomes c before the locative -i.',
        },
        {
          q: 'Which means "annual leave"?',
          options: ['radno vrijeme', 'godišnji odmor', 'plaća', 'sastanak'],
          correct: 1,
          hint: 'It is the holiday your job gives you each year.',
          explanation: 'godišnji odmor — annual leave. radno vrijeme is working hours.',
        },
        {
          q: 'Moj brat radi ___ fakultetu.',
          options: ['u', 'na', 'kod', 'iz'],
          correct: 1,
          hint: 'This workplace is one that takes na rather than u.',
          explanation: 'na fakultetu — like na poslu, a place learned with its preposition.',
        },
        {
          q: 'Je li on ___? (Is he employed?)',
          options: ['zaposlen', 'zaposlena', 'zaposleno', 'zaposleni'],
          correct: 0,
          hint: 'on is masculine singular.',
          explanation: 'zaposlen — masculine singular.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moja sestra je ___." (My sister is a cook — kuhar.)',
        options: ['kuhar', 'kuharica', 'kuharicu', 'kuhara'],
        correct: 1,
        explanation:
          'A woman takes the female form, and after je it stays in the subject form: kuharica.',
      },
      {
        q: 'Complete: "Ljeti radim ___ konobarica." (In summer I work as a waitress.)',
        options: ['kao', 'za', 'kod', 'u'],
        correct: 0,
        explanation: 'radim kao + the subject form says what you work as.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Danas nisam u poslu.',
          'Danas nisam na poslu.',
          'Danas nisam na posao.',
          'Danas nisam kod posla.',
        ],
        correct: 1,
        explanation: 'Being at work is na poslu — na with the locative. na posao is going to work.',
      },
      {
        q: 'What is wrong with "Moja mama je prodavač"?',
        options: [
          'Nothing — it is correct',
          'It should be "prodavača"',
          'A woman shop assistant is "prodavačica"',
          'It should be "radi prodavač"',
        ],
        correct: 2,
        explanation:
          'Croatian uses the female title for a woman: prodavačica. The male form reads as an error.',
      },
      {
        q: 'Which word means "company, firm"?',
        options: ['plaća', 'šef', 'sastanak', 'tvrtka'],
        correct: 3,
        explanation: 'tvrtka is a company. plaća is salary, šef boss, sastanak a meeting.',
      },
      {
        q: 'Complete: "Radim u ___." (in an office — ured)',
        options: ['ured', 'uredu', 'ureda', 'uredom'],
        correct: 1,
        explanation: 'Where you work takes u + locative: u uredu.',
      },
    ],
    vocab: [
      ['posao', 'job, work', 'Danas nisam na poslu.'],
      ['ured', 'office', 'Radim u uredu.'],
      ['tvrtka', 'company', 'Radim u maloj tvrtki.'],
      ['plaća', 'salary', 'Plaća je dobra.'],
      ['šef', 'boss', 'Imam sastanak sa šefom.'],
      ['kolega', 'colleague', 'Moj kolega je iz Splita.'],
      ['sastanak', 'meeting', 'Sastanak je u devet.'],
      ['učitelj', 'teacher', 'Moja majka je učiteljica.'],
      ['konobar', 'waiter', 'Ljeti radim kao konobar.'],
      ['odvjetnik', 'lawyer', 'Moj otac je odvjetnik.'],
      ['zaposlen', 'employed', 'Brat je zaposlen u banci.'],
      ['baviti se', 'to do (for a living)', 'Čime se baviš?'],
    ],
  },

  'school-studies': {
    worked: [
      {
        title: 'Pupil, Not Student',
        problem: 'Reci: "My daughter goes to primary school and is a good pupil."',
        en: 'My daughter goes to primary school and is a good pupil.',
        steps: [
          {
            label: 'Going to school',
            text: 'Movement: u + accusative, osnovna škola → osnovnu školu.',
          },
          {
            label: 'Pupil or student?',
            text: 'At school it is učenik — a girl is učenica.',
          },
          {
            label: 'The clitic',
            text: 'je goes second in its clause: dobra je učenica.',
          },
        ],
        answer: 'Moja kći ide u osnovnu školu i dobra je učenica.',
      },
      {
        title: 'Studying a Degree',
        problem: 'Reci: "I study economics at the Faculty of Economics."',
        en: 'I study economics at the Faculty of Economics.',
        steps: [
          {
            label: 'Which verb?',
            text: 'A university degree is studirati, not učiti.',
          },
          {
            label: 'The subject',
            text: 'studirati takes an object: ekonomija → ekonomiju.',
          },
          {
            label: 'The institution',
            text: 'A faculty takes na + locative, and the adjective follows: na Ekonomskom fakultetu.',
          },
        ],
        answer: 'Studiram ekonomiju na Ekonomskom fakultetu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Svaku večer ___ nove riječi. (I learn)',
          options: ['studiram', 'učim', 'predajem', 'učiš'],
          correct: 1,
          hint: 'Learning in general, not a degree course — and the subject is "I".',
          explanation: 'učim — učiti is learning or studying in general.',
        },
        {
          q: 'Moj brat ___ na sveučilištu. (teaches, lectures)',
          options: ['uči', 'studira', 'predaje', 'predavati'],
          correct: 2,
          hint: 'The teacher\'s verb, not the learner\'s — conjugated for "he".',
          explanation: 'predaje — predavati is to teach or lecture.',
        },
        {
          q: 'U školi sam dobio dobru ___. (mark)',
          options: ['ocjenu', 'ocjena', 'ocjeni', 'ocjene'],
          correct: 0,
          hint: 'The mark is what you received — the object, and the word is feminine.',
          explanation: 'dobru ocjenu — feminine accusative.',
        },
        {
          q: 'Koji ___ ti je najdraži u školi? (subject)',
          options: ['predmet', 'ocjena', 'knjižnica', 'zadaća'],
          correct: 0,
          hint: 'Which word means a school subject — and which one can koji agree with?',
          explanation: 'predmet = subject. The other three are feminine and would need koja.',
        },
        {
          type: 'type',
          q: 'Ja učim hrvatski, a sestra ____ povijest na fakultetu. (studies — at university)',
          answer: 'studira',
          hint: 'A degree course takes the verb for studying at university.',
          explanation: 'studira — studirati for she.',
        },
        {
          type: 'type',
          q: 'Moja teta ____ matematiku u gimnaziji. (teaches)',
          answer: 'predaje',
          hint: 'The verb for teaching a subject, in the third person singular.',
          explanation: 'predaje — predavati for she.',
        },
        {
          type: 'type',
          q: 'Moj mlađi brat je ____. (a school pupil)',
          answer: 'učenik',
          hint: 'A school pupil is not called a student in Croatian.',
          explanation: 'učenik — student is only for university.',
        },
        {
          type: 'type',
          q: 'Sutra imam ispit iz ____. (maths — matematika)',
          answer: 'matematike',
          hint: 'iz takes the genitive; feminine -a becomes -e.',
          explanation: 'ispit iz matematike — genitive.',
        },
        {
          type: 'type',
          q: 'Djeca su još u ____. (school — škola)',
          answer: 'školi',
          hint: 'u for position takes the locative.',
          explanation: 'u školi — feminine locative -i.',
        },
        {
          q: 'Which word is a woman university student?',
          options: ['učenica', 'studentica', 'profesorica', 'učiteljica'],
          correct: 1,
          hint: 'At university, not at school.',
          explanation: 'studentica — učenica is a school pupil.',
        },
        {
          q: 'Moram napisati ___. (homework)',
          options: ['zadaću', 'ocjenu', 'predmet', 'ispit'],
          correct: 0,
          hint: 'It is what you do at home after school.',
          explanation: 'zadaću — zadaća in the accusative.',
        },
        {
          q: 'Studiram ___ Sveučilištu u Zagrebu.',
          options: ['u', 'na', 'kod', 'iz'],
          correct: 1,
          hint: 'University, like fakultet, pairs with one particular preposition.',
          explanation: 'na Sveučilištu — like na fakultetu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Svaki dan ___ nove hrvatske riječi." (I learn new Croatian words — on my own.)',
        options: ['studiram', 'učim', 'predajem', 'diplomiram'],
        correct: 1,
        explanation:
          'Learning in general, on your own, is učiti: učim. studirati claims a university course, and predavati is teaching.',
      },
      {
        q: 'Complete: "Kći je ___ osnovnoj školi." (in primary school)',
        options: ['na', 'u', 'kod', 'do'],
        correct: 1,
        explanation: 'škola pairs with u: u osnovnoj školi. na belongs with fakultet.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Imam ispit iz povijesti.',
          'Imam ispit od povijesti.',
          'Imam ispit u povijesti.',
          'Imam ispit povijest.',
        ],
        correct: 0,
        explanation: 'An exam in a subject is ispit iz + genitive: ispit iz povijesti.',
      },
      {
        q: 'What is wrong with "Moj brat je učenik na fakultetu"?',
        options: [
          'Nothing — it is correct',
          'At university he is a "student", not an "učenik"',
          'It should be "učenika"',
          '"na fakultetu" should be "u fakultetu"',
        ],
        correct: 1,
        explanation:
          'učenik is a school pupil; at university the word is student. na fakultetu is right.',
      },
      {
        q: 'What does "diplomirati" mean?',
        options: ['to lecture', 'to learn', 'to graduate', 'to fail an exam'],
        correct: 2,
        explanation: 'diplomirati is to graduate. Lecturing is predavati, learning učiti.',
      },
      {
        q: 'Which word means "library"?',
        options: ['knjižara', 'predavanje', 'razred', 'knjižnica'],
        correct: 3,
        explanation:
          'knjižnica is a library. knjižara is a bookshop, predavanje a lecture, razred a class.',
      },
    ],
    vocab: [
      ['učiti', 'to learn, to study', 'Učim hrvatski svaki dan.'],
      ['studirati', 'to study at university', 'Ana studira pravo.'],
      ['predavati', 'to teach, to lecture', 'Profesor predaje na fakultetu.'],
      ['učenik', 'school pupil', 'Moj sin je učenik.'],
      ['student', 'university student', 'Ona je studentica.'],
      ['škola', 'school', 'Djeca su u školi.'],
      ['fakultet', 'faculty, university', 'Idem na fakultet.'],
      ['ispit', 'exam', 'Sutra imam ispit iz povijesti.'],
      ['ocjena', 'mark, grade', 'Dobio sam dobru ocjenu.'],
      ['predmet', 'subject', 'Koji ti je najdraži predmet?'],
      ['zadaća', 'homework', 'Djeca pišu zadaću.'],
      ['knjižnica', 'library', 'Učim u knjižnici.'],
    ],
  },

  'hobbies-free-time': {
    worked: [
      {
        title: 'Sport and Instrument',
        problem: 'Reci: "On Sundays I play tennis, and my sister plays the piano."',
        en: 'On Sundays I play tennis, and my sister plays the piano.',
        steps: [
          {
            label: 'On Sundays',
            text: 'Regularly, on that day: the instrumental of time, nedjeljom.',
          },
          {
            label: 'A sport',
            text: 'A game or sport is igrati: igram tenis.',
          },
          {
            label: 'An instrument',
            text: 'An instrument is svirati: svira klavir.',
          },
          {
            label: 'Join them',
            text: 'Two people side by side: a, after a comma.',
          },
        ],
        answer: 'Nedjeljom igram tenis, a sestra svira klavir.',
      },
      {
        title: 'Baviti Se',
        problem:
          'Odgovori: "Čime se baviš u slobodno vrijeme?" — "I do photography." (fotografija)',
        en: 'Answer: What do you do in your free time? — I do photography.',
        steps: [
          {
            label: 'Keep the verb',
            text: 'The question uses baviti se, so the answer does too: bavim se.',
          },
          {
            label: 'The case',
            text: 'baviti se takes the bare instrumental — no s.',
          },
          {
            label: 'The form',
            text: 'fotografija is feminine: -a → -om.',
          },
        ],
        answer: 'Bavim se fotografijom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moj sin ___ bubnjeve. (plays the drums)',
          options: ['igra', 'svira', 'igra se', 'bavi se'],
          correct: 1,
          hint: 'Drums are an instrument, not a game.',
          explanation: 'svira bubnjeve — svirati for instruments.',
        },
        {
          q: 'Moj otac se ___ planinarenjem. (does hiking)',
          options: ['bavi', 'igra', 'svira', 'bave'],
          correct: 0,
          hint: 'An ongoing activity in the instrumental — and the subject is one person.',
          explanation: 'bavi se planinarenjem.',
        },
        {
          q: '___ idemo na more. (In summer)',
          options: ['Ljeto', 'Ljeti', 'Ljetu', 'Ljeta'],
          correct: 1,
          hint: 'Like zimi: the season on its own, with no preposition.',
          explanation: 'ljeti = in summer.',
        },
        {
          q: 'U slobodno vrijeme volim ___. (to cook)',
          options: ['kuham', 'kuhati', 'kuha', 'kuhala'],
          correct: 1,
          hint: 'After volim, the second verb is not conjugated.',
          explanation: 'volim kuhati — voljeti + infinitive.',
        },
        {
          type: 'type',
          q: 'Moj brat ____ nogomet. (plays)',
          answer: 'igra',
          hint: 'A sport takes one of the two "play" verbs; third person singular.',
          explanation: 'igra nogomet — igrati for sports and games.',
        },
        {
          type: 'type',
          q: 'Ona ____ violinu. (plays)',
          answer: 'svira',
          hint: 'An instrument takes the other "play" verb.',
          explanation: 'svira violinu — svirati for instruments.',
        },
        {
          type: 'type',
          q: 'Djeca ____ igraju u vrtu. (play — in general)',
          answer: 'se',
          hint: 'Playing with no game named needs a small word in second position.',
          explanation: 'Djeca se igraju — igrati se.',
        },
        {
          type: 'type',
          q: 'Bavim se ____. (running — trčanje)',
          answer: 'trčanjem',
          hint: 'baviti se takes the instrumental; a neuter noun in -e takes -em.',
          explanation: 'bavim se trčanjem — instrumental -em.',
        },
        {
          type: 'type',
          q: '____ idem u kino. (On Sundays — nedjelja)',
          answer: 'Nedjeljom',
          hint: 'A day in the instrumental means "on that day, regularly".',
          explanation: 'nedjeljom — on Sundays.',
        },
        {
          q: 'Najviše volim ___. (to hike)',
          options: ['planinariti', 'planinarim', 'planinari', 'planinario'],
          correct: 0,
          hint: 'After volim the next verb is an infinitive.',
          explanation: 'volim planinariti — voljeti + infinitive.',
        },
        {
          q: 'Complete: "U ___ vrijeme šetam." (In my free time I walk.)',
          options: ['slobodno', 'slobodna', 'slobodan', 'slobodni'],
          correct: 0,
          hint: 'vrijeme is neuter.',
          explanation: 'u slobodno vrijeme — neuter accusative.',
        },
        {
          q: 'Which verb goes with "šah" (chess)?',
          options: ['svirati', 'igrati', 'igrati se', 'baviti'],
          correct: 1,
          hint: 'Chess is a game.',
          explanation: 'igrati šah — games take igrati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sestra ___ klavir." (My sister plays the piano.)',
        options: ['igra', 'svira', 'igra se', 'bavi'],
        correct: 1,
        explanation: 'An instrument takes svirati: svira klavir. igrati is for sports and games.',
      },
      {
        q: 'Complete: "Subotom ___ tenis." (On Saturdays we play tennis.)',
        options: ['sviramo', 'igramo', 'igramo se', 'bavimo'],
        correct: 1,
        explanation: 'A sport or game takes igrati: igramo tenis.',
      },
      {
        q: 'Which sentence says "I do photography"?',
        options: [
          'Bavim se fotografijom.',
          'Bavim fotografiju.',
          'Bavim se sa fotografijom.',
          'Bavim se fotografija.',
        ],
        correct: 0,
        explanation:
          'baviti se takes the bare instrumental, with no preposition: bavim se fotografijom.',
      },
      {
        q: 'What is wrong with "Igram gitaru"?',
        options: [
          'Nothing — it is correct',
          'An instrument takes svirati: "Sviram gitaru"',
          'It should be "Igram se gitarom"',
          'It should be "Igram gitara"',
        ],
        correct: 1,
        explanation: 'Instruments are played with svirati; igrati is for sports and games.',
      },
      {
        q: 'What does "vikendom" mean?',
        options: ['this weekend', 'last weekend', 'until the weekend', 'at weekends, regularly'],
        correct: 3,
        explanation:
          'The instrumental of a time word means "regularly, on those days": vikendom = at weekends.',
      },
      {
        q: 'Complete: "___ idemo na more." (In summer we go to the seaside.)',
        options: ['Ljeto', 'Ljetu', 'Ljeta', 'Ljeti'],
        correct: 3,
        explanation: 'ljeti is the one-word adverb for "in summer", the twin of zimi.',
      },
    ],
    vocab: [
      ['igrati', 'to play (a sport, a game)', 'Igram nogomet subotom.'],
      ['svirati', 'to play (an instrument)', 'Sviram gitaru.'],
      ['igrati se', 'to play (children)', 'Djeca se igraju u parku.'],
      ['čitati', 'to read', 'U slobodno vrijeme čitam.'],
      ['trčati', 'to run', 'Ujutro trčim u parku.'],
      ['plivati', 'to swim', 'Ljeti plivamo u moru.'],
      ['planinariti', 'to go hiking', 'Najviše volim planinariti.'],
      ['slikati', 'to paint', 'Moja baka voli slikati.'],
      ['šetati', 'to walk, to stroll', 'Navečer šetamo uz more.'],
      ['baviti se', 'to do (an activity)', 'Bavim se glazbom.'],
      ['slobodno vrijeme', 'free time', 'U slobodno vrijeme kuham.'],
      ['vikend', 'weekend', 'Vikendom idemo na izlet.'],
    ],
  },

  'travel-transport': {
    worked: [
      {
        title: 'Buying Tickets',
        problem: 'Reci: "Two one-way tickets to Zadar, please."',
        en: 'Two one-way tickets to Zadar, please.',
        steps: [
          {
            label: 'Two, feminine',
            text: 'karta is feminine, so two is dvije.',
          },
          {
            label: 'After two',
            text: 'A feminine noun after dva/dvije ends in -e, and the adjective matches: jednosmjerne karte.',
          },
          {
            label: 'The destination',
            text: 'za + accusative: za Zadar.',
          },
        ],
        answer: 'Dvije jednosmjerne karte za Zadar, molim.',
      },
      {
        title: 'Arrival From Somewhere',
        problem: 'Pitaj: "When does the ferry from Split arrive?"',
        en: 'When does the ferry from Split arrive?',
        steps: [
          {
            label: 'Question word first',
            text: 'Kad (when) opens the question.',
          },
          {
            label: 'Arrive',
            text: 'dolaziti, third person singular for the ferry: dolazi.',
          },
          {
            label: 'From Split',
            text: 'The origin is iz + genitive: Splita.',
          },
        ],
        answer: 'Kad dolazi trajekt iz Splita?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Na posao idem ___. (by bicycle)',
          options: ['biciklom', 's biciklom', 'na bicikl', 'bicikl'],
          correct: 0,
          hint: 'The means of transport takes the bare instrumental.',
          explanation: 'biciklom — no preposition.',
        },
        {
          q: 'Koliko traje put ___ Dubrovnika?',
          options: ['za', 'do', 'u', 'na'],
          correct: 1,
          hint: 'Dubrovnika is genitive — which of these takes the genitive and means "as far as"?',
          explanation: 'do Dubrovnika — do + genitive.',
        },
        {
          q: 'Autobus ___ u deset. (leaves)',
          options: ['dolazi', 'polazak', 'polazi', 'putuje'],
          correct: 2,
          hint: 'The timetable verb for departing — a verb, not the noun.',
          explanation: 'polazi — polaziti is to depart; polazak is the noun "departure".',
        },
        {
          q: 'Na recepciji: "I have a reservation."',
          options: [
            'Imam rezervaciju.',
            'Imam rezervacija.',
            'Imam rezervacijom.',
            'Imam rezervaciji.',
          ],
          correct: 0,
          hint: 'imati takes a direct object, and the word is feminine.',
          explanation: 'Imam rezervaciju — feminine accusative.',
        },
        {
          type: 'type',
          q: 'Došli su ____. (by plane — avion)',
          answer: 'avionom',
          hint: 'Transport is the instrumental with no preposition.',
          explanation: 'avionom — the instrumental of means.',
        },
        {
          type: 'type',
          q: 'Vlak ____ u osam. (departs)',
          answer: 'polazi',
          hint: 'The timetable verb for leaving, third person singular.',
          explanation: 'polazi — polaziti, to depart.',
        },
        {
          type: 'type',
          q: 'Autobus iz Rijeke ____ u pet. (arrives)',
          answer: 'dolazi',
          hint: 'The timetable verb for arriving.',
          explanation: 'dolazi — dolaziti, to arrive.',
        },
        {
          type: 'type',
          q: 'Imam ____. (a reservation — rezervacija)',
          answer: 'rezervaciju',
          hint: 'imati takes the accusative; feminine -a becomes -u.',
          explanation: 'Imam rezervaciju.',
        },
        {
          type: 'type',
          q: 'Kad polazi autobus za ____? (Pula)',
          answer: 'Pulu',
          hint: 'za for a destination takes the accusative.',
          explanation: 'autobus za Pulu — accusative.',
        },
        {
          q: 'Where do planes leave from?',
          options: ['kolodvor', 'zračna luka', 'peron', 'trajekt'],
          correct: 1,
          hint: 'Trains and buses leave from a station; planes from somewhere else.',
          explanation: 'zračna luka — the airport.',
        },
        {
          q: 'Je li doručak ___? (included)',
          options: ['uključen', 'uključena', 'uključeno', 'uključeni'],
          correct: 0,
          hint: 'doručak is masculine singular.',
          explanation: 'uključen — agreeing with doručak.',
        },
        {
          q: 'Which is a return ticket?',
          options: ['jednosmjerna karta', 'povratna karta', 'vozni red', 'prtljaga'],
          correct: 1,
          hint: 'It gets you there and back.',
          explanation: 'povratna karta — jednosmjerna is one-way.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Na Hvar putujemo ___." (by ferry — trajekt)',
        options: ['trajekt', 'trajektom', 'trajektu', 'u trajekt'],
        correct: 1,
        explanation: 'The means of transport is the bare instrumental: trajektom.',
      },
      {
        q: 'Complete: "Kad polazi vlak ___ Osijek?" (the train to Osijek)',
        options: ['iz', 'za', 'od', 'u'],
        correct: 1,
        explanation:
          'The destination of a train takes za + accusative: vlak za Osijek. iz and od mark the origin.',
      },
      {
        q: 'Complete: "Autobus ___ Zadra kasni." (The bus from Zadar is late.)',
        options: ['za', 'na', 'iz', 'u'],
        correct: 2,
        explanation: 'The origin takes iz + genitive: autobus iz Zadra.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Jedna jednosmjerna kartu za Rijeku, molim.',
          'Jednu jednosmjernu kartu za Rijeke, molim.',
          'Jednu jednosmjernu kartu iz Rijeku, molim.',
          'Jednu jednosmjernu kartu za Rijeku, molim.',
        ],
        correct: 3,
        explanation: 'The whole ticket phrase is accusative, and za takes the accusative Rijeku.',
      },
      {
        q: 'Complete: "Na posao idem ___." (on foot)',
        options: ['nogama', 'pješice', 'nogom', 'pješak'],
        correct: 1,
        explanation:
          'On foot is its own word, pješice — the one exception to the instrumental of transport. pješak is a pedestrian.',
      },
      {
        q: 'What does "kašnjenje" mean?',
        options: ['departure', 'arrival', 'delay', 'timetable'],
        correct: 2,
        explanation:
          'kašnjenje is a delay. Departure is polazak, arrival dolazak, timetable vozni red.',
      },
    ],
    vocab: [
      ['vlak', 'train', 'Vlak za Split polazi u osam.'],
      ['trajekt', 'car ferry', 'Na otok idemo trajektom.'],
      ['kolodvor', 'station', 'Nađimo se na kolodvoru.'],
      ['zračna luka', 'airport', 'Zračna luka je izvan grada.'],
      ['karta', 'ticket', 'Jednu kartu za Zagreb, molim.'],
      ['povratna karta', 'return ticket', 'Trebam povratnu kartu.'],
      ['peron', 'platform', 'Vlak polazi s drugog perona.'],
      ['vozni red', 'timetable', 'Pogledaj vozni red.'],
      ['prtljaga', 'luggage', 'Gdje je moja prtljaga?'],
      ['polaziti', 'to depart', 'Autobus polazi u deset.'],
      ['dolaziti', 'to arrive', 'Vlak dolazi u pet.'],
      ['smještaj', 'accommodation', 'Tražimo smještaj na moru.'],
    ],
  },

  'plans-invitations': {
    worked: [
      {
        title: 'An Invitation',
        problem: 'Pozovi prijateljicu: "Are you free on Friday? Shall we go to the cinema?"',
        en: 'Invite a (female) friend: Are you free on Friday? Shall we go to the cinema?',
        steps: [
          {
            label: 'Register',
            text: 'A friend: ti, so jesi li.',
          },
          {
            label: 'Agreement',
            text: 'She is a woman: slobodna.',
          },
          {
            label: 'The day',
            text: 'u + accusative: u petak.',
          },
          {
            label: 'The suggestion',
            text: 'A plain present question does it: Idemo…? — and u kino is motion, accusative.',
          },
        ],
        answer: 'Jesi li slobodna u petak? Idemo u kino?',
      },
      {
        title: 'Time and Place',
        problem: 'Dogovori: "We\'ll meet at half past seven in front of the theatre."',
        en: 'Arrange it: We will meet at half past seven in front of the theatre.',
        steps: [
          {
            label: 'The verb',
            text: 'For an arranged meeting: nalazimo se, in the present.',
          },
          {
            label: 'Half past seven',
            text: 'Croatian counts the half towards the NEXT hour: half past seven is pola osam, with u.',
          },
          {
            label: 'In front of',
            text: 'ispred + genitive: kazalište → kazališta.',
          },
        ],
        answer: 'Nalazimo se u pola osam ispred kazališta.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Večeras ___ u kino. (we are going — it is arranged)',
          options: ['idemo', 'išli smo', 'ići', 'idem'],
          correct: 0,
          hint: 'An arranged plan uses the plain present — and the subject is "we".',
          explanation: 'Večeras idemo u kino.',
        },
        {
          q: 'Nalazimo se ___ restorana. (in front of)',
          options: ['u', 'ispred', 'na', 's'],
          correct: 1,
          hint: 'restorana is genitive — which place word takes the genitive and means "in front of"?',
          explanation: 'ispred restorana.',
        },
        {
          q: '"Javit ću ti" means…',
          options: ['I will let you know.', 'I will call you now.', 'See you!', 'Agreed!'],
          correct: 0,
          hint: 'It buys time — you are not saying yes or no yet.',
          explanation: 'Javit ću ti — I will let you know.',
        },
        {
          q: 'Idemo ___ subotu na izlet?',
          options: ['na', 'za', 'u', 'o'],
          correct: 2,
          hint: 'A day of the week takes the same preposition as u petak.',
          explanation: 'u subotu — u + accusative for a day.',
        },
        {
          type: 'type',
          q: 'Sutra ____ u Split. (I am going — it is arranged)',
          answer: 'idem',
          hint: 'An arranged plan uses the plain present.',
          explanation: 'Sutra idem u Split — the present for a fixed plan.',
        },
        {
          type: 'type',
          q: 'Nalazimo se ____ kina. (in front of)',
          answer: 'ispred',
          hint: 'A place word that takes the genitive.',
          explanation: 'ispred kina — in front of the cinema.',
        },
        {
          type: 'type',
          q: '____, ne mogu. Možda drugi put. (Unfortunately)',
          answer: 'Nažalost',
          hint: 'The word that opens a polite refusal.',
          explanation: 'Nažalost, ne mogu — softer than a bare ne mogu.',
        },
        {
          type: 'type',
          q: 'Što ____ na večeru? (How about dinner? — kazati)',
          answer: 'kažeš',
          hint: 'The ti form of the verb for "say", with a z → ž change.',
          explanation: 'Što kažeš na…? — how about…?',
        },
        {
          type: 'type',
          q: 'Idemo u kino? — ____! (Sure!)',
          answer: 'Može',
          hint: 'The everyday yes to a suggestion — literally "it can".',
          explanation: 'Može! — the standard yes.',
        },
        {
          q: 'Which closes an arrangement to meet?',
          options: ['Vidimo se!', 'Dobar tek!', 'Izvolite!', 'Sretan put!'],
          correct: 0,
          hint: 'It means "see you".',
          explanation: 'Vidimo se! — see you.',
        },
        {
          q: 'U subotu ___ na izlet. (we are going — arranged)',
          options: ['idemo', 'išli smo', 'ići', 'ide'],
          correct: 0,
          hint: 'An arranged plan, in the first person plural.',
          explanation: 'idemo — the present for a plan.',
        },
        {
          q: 'Which asks "Are you free?" (to a woman)',
          options: [
            'Jesi li slobodan?',
            'Jesi li slobodna?',
            'Jesi li slobodno?',
            'Je li slobodna?',
          ],
          correct: 1,
          hint: 'The adjective agrees with the woman, and you are talking to her.',
          explanation: 'Jesi li slobodna? — feminine, second person.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Hoćeš li ___ na kavu?" (Do you want to go for a coffee?)',
        options: ['ići', 'ideš', 'idi', 'idemo'],
        correct: 0,
        explanation: 'After hoćeš li the next verb is an infinitive: ići.',
      },
      {
        q: 'Complete: "Vidimo se ___ pola sedam." (See you at half past six.)',
        options: ['na', 'u', 'za', 'o'],
        correct: 1,
        explanation:
          'Clock time takes u + accusative: u pola sedam. za would mean "in" a stretch of time.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Večeras idemo u kazalište.',
          'Večeras idemo u kazalištu.',
          'Večeras idemo na kazalište.',
          'Večeras idemo kazalište.',
        ],
        correct: 0,
        explanation:
          'Going somewhere is motion: u + accusative, and kazalište is neuter, so it does not change.',
      },
      {
        q: 'What is wrong with "Nalazimo se ispred kavana"?',
        options: [
          'Nothing — it is correct',
          'ispred takes the genitive: "ispred kavane"',
          'It should be "ispred kavanu"',
          'It should be "ispred kavani"',
        ],
        correct: 1,
        explanation: 'ispred takes the genitive, and a feminine -a noun ends in -e: ispred kavane.',
      },
      {
        q: 'What does "Možda drugi put" do in a reply?',
        options: [
          'It accepts warmly',
          'It softens a refusal',
          'It fixes a time',
          'It asks for directions',
        ],
        correct: 1,
        explanation: 'Maybe another time leaves the door open, so a no does not sound abrupt.',
      },
      {
        q: 'Complete: "Jesi li ___ u subotu?" (Are you free on Saturday? — to a man)',
        options: ['slobodna', 'slobodni', 'slobodno', 'slobodan'],
        correct: 3,
        explanation: 'A man is slobodan; a woman would be slobodna.',
      },
    ],
    vocab: [
      ['slobodan', 'free', 'Jesi li slobodan u subotu?'],
      ['plan', 'plan', 'Imaš li planove za vikend?'],
      ['kino', 'cinema', 'Idemo u kino?'],
      ['kazalište', 'theatre', 'Večeras idemo u kazalište.'],
      ['nalaziti se', 'to meet (up)', 'Nalazimo se u osam.'],
      ['ispred', 'in front of', 'Čekam te ispred kina.'],
      ['može', 'sure, OK', 'Idemo na kavu? — Može!'],
      ['dogovoreno', 'agreed', 'U osam ispred kina. — Dogovoreno!'],
      ['nažalost', 'unfortunately', 'Nažalost, ne mogu.'],
      ['rado', 'gladly', 'Rado ću doći.'],
      ['vidimo se', 'see you', 'Vidimo se sutra!'],
      ['izlet', 'trip, outing', 'U subotu idemo na izlet.'],
    ],
  },

  'celebrations-holidays': {
    worked: [
      {
        title: 'Two Greetings, Two Endings',
        problem: 'Čestitaj: "Happy Easter and happy holidays!"',
        en: 'Happy Easter and happy holidays!',
        steps: [
          {
            label: 'Easter',
            text: 'Uskrs is masculine: sretan.',
          },
          {
            label: 'Holidays',
            text: 'blagdani is masculine plural: sretni.',
          },
          {
            label: 'Join',
            text: 'i between them — sretan agrees with each noun separately.',
          },
        ],
        answer: 'Sretan Uskrs i sretni blagdani!',
      },
      {
        title: 'Congratulations On…',
        problem: 'Čestitaj prijateljici: "Congratulations on your new job!"',
        en: 'Congratulate a friend: Congratulations on your new job!',
        steps: [
          {
            label: 'The verb',
            text: 'Čestitam — and it takes na + locative for the occasion.',
          },
          {
            label: 'The noun',
            text: 'posao → poslu: the a drops out, as in the genitive posla.',
          },
          {
            label: 'The adjective',
            text: 'Masculine locative -om: novom.',
          },
        ],
        answer: 'Čestitam na novom poslu!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'It is 24 June and you meet Ivan. What do you say?',
          options: ['Sretan rođendan!', 'Sretan imendan!', 'Sretna imendan!', 'Sretno imendan!'],
          correct: 1,
          hint: "Ivan's saint's day falls in June — and the adjective agrees with a masculine noun.",
          explanation: 'Sretan imendan! 24 June is the feast of St John — Ivan.',
        },
        {
          q: '___ Badnjak!',
          options: ['Sretna', 'Sretan', 'Sretno', 'Sretni'],
          correct: 1,
          hint: 'Badnjak ends in a consonant and is one day.',
          explanation: 'Sretan Badnjak — masculine singular.',
        },
        {
          q: 'Prijatelj je položio ispit. Što kažeš?',
          options: ['Čestitam!', 'Živjeli!', 'Dobar tek!', 'Sretan Božić!'],
          correct: 0,
          hint: 'The all-purpose word for congratulating someone.',
          explanation: 'Čestitam! — for an exam, a wedding, a new job.',
        },
        {
          q: 'Čestitam ___ vjenčanju!',
          options: ['za', 'na', 'u', 'o'],
          correct: 1,
          hint: 'čestitati takes one preposition with the locative for the occasion.',
          explanation: 'Čestitam na vjenčanju! — čestitati na + locative.',
        },
        {
          type: 'type',
          q: '____ Božić! (Happy)',
          answer: 'Sretan',
          hint: 'Božić is masculine, and the greeting agrees with it.',
          explanation: 'Sretan Božić! — masculine.',
        },
        {
          type: 'type',
          q: '____ Nova godina! (Happy)',
          answer: 'Sretna',
          hint: 'godina is feminine.',
          explanation: 'Sretna Nova godina! — feminine.',
        },
        {
          type: 'type',
          q: 'Kad se podignu čaše, kažemo: "____!" (Cheers!)',
          answer: 'Živjeli',
          hint: 'Literally "may we live".',
          explanation: 'Živjeli! — the toast.',
        },
        {
          type: 'type',
          q: 'Čestitam na ____! (the wedding — vjenčanje)',
          answer: 'vjenčanju',
          hint: 'na here takes the locative; a neuter noun in -e ends in -u.',
          explanation: 'čestitam na vjenčanju — locative after na.',
        },
        {
          type: 'type',
          q: 'Svaki Ivan slavi ____ 24. lipnja. (name day)',
          answer: 'imendan',
          hint: 'The feast of the saint you are named after.',
          explanation: "imendan — Ivan's is 24 June.",
        },
        {
          q: 'Which holiday is on 15 August?',
          options: ['Svi sveti', 'Velika Gospa', 'Badnjak', 'Dan državnosti'],
          correct: 1,
          hint: 'It is in the middle of summer.',
          explanation: 'Velika Gospa — the Assumption, 15 August.',
        },
        {
          q: 'Which is the other common toast besides "Živjeli!"?',
          options: ['U zdravlje!', 'Dobar tek!', 'Sretno!', 'Izvolite!'],
          correct: 0,
          hint: 'It means "to health".',
          explanation: 'U zdravlje! — to health.',
        },
        {
          q: 'What is "Badnjak"?',
          options: ['New Year', 'Christmas Eve', 'Easter', 'All Saints'],
          correct: 1,
          hint: 'It is the day before Božić.',
          explanation: 'Badnjak is Christmas Eve, 24 December.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ Uskrs!" (Happy Easter!)',
        options: ['Sretna', 'Sretan', 'Sretno', 'Sretni'],
        correct: 1,
        explanation: 'Uskrs is masculine, so the greeting takes the masculine form: Sretan Uskrs!',
      },
      {
        q: 'Complete: "___ imendan!" (Happy name day!)',
        options: ['Sretna', 'Sretno', 'Sretni', 'Sretan'],
        correct: 3,
        explanation: 'imendan is masculine: Sretan imendan! sretno on its own means good luck.',
      },
      {
        q: 'Your friend has just passed an exam. What do you say?',
        options: ['Čestitam!', 'Živjeli!', 'Dobar tek!', 'Izvolite!'],
        correct: 0,
        explanation: 'Čestitam! is congratulations. Živjeli is a toast, dobar tek enjoy your meal.',
      },
      {
        q: 'What is wrong with "Sretno rođendan"?',
        options: [
          'Nothing — it is correct',
          'rođendan is masculine, so it is "Sretan rođendan"',
          'It should be "Sretna rođendan"',
          '"rođendan" should be "rođendana"',
        ],
        correct: 1,
        explanation: 'The greeting agrees with its noun: Sretan rođendan!',
      },
      {
        q: 'When is Božić?',
        options: ['24 December', '25 December', '1 January', '15 August'],
        correct: 1,
        explanation:
          'Božić is Christmas, 25 December. 24 December is Badnjak, 15 August Velika Gospa.',
      },
      {
        q: 'What does "Dobar tek!" mean, and when is it said?',
        options: [
          'Cheers — when glasses are raised',
          'Congratulations — at a wedding',
          'Enjoy your meal — before eating',
          'Good luck — before an exam',
        ],
        correct: 2,
        explanation:
          'Dobar tek! is said before a meal. When glasses are raised the word is Živjeli!',
      },
    ],
    vocab: [
      ['Božić', 'Christmas', 'Sretan Božić!'],
      ['Badnjak', 'Christmas Eve', 'Na Badnjak cijela obitelj večera zajedno.'],
      ['Uskrs', 'Easter', 'Sretan Uskrs!'],
      ['Nova godina', 'New Year', 'Sretna Nova godina!'],
      ['rođendan', 'birthday', 'Sretan rođendan!'],
      ['imendan', 'name day', 'Danas je Ivanov imendan.'],
      ['vjenčanje', 'wedding', 'Čestitam na vjenčanju!'],
      ['blagdan', 'holiday, feast day', 'Sretni blagdani!'],
      ['čestitati', 'to congratulate', 'Čestitam ti na ispitu!'],
      ['sretan', 'happy', 'Sretan put!'],
      ['živjeli', 'cheers', 'Podignimo čaše — živjeli!'],
      ['kolač', 'cake', 'Donijela sam kolač.'],
    ],
  },
};
