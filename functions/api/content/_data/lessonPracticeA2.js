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
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_A2 = {
  present: {
    worked: [
      {
        title: 'The Verb That Hides Its Ja Form',
        problem: 'Dopuni glagolom moći: Ja ___ doći sutra.',
        en: 'Fill in with moći: I can come tomorrow.',
        steps: [
          { label: 'Who is the subject?', text: 'ja — first person singular.' },
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
          { label: 'Look at the infinitive', text: 'putovati ends in -ovati — a warning sign.' },
          {
            label: 'Change the middle',
            text: 'In the present, -ova- becomes -uj-: put- + -uj- gives the stem putuj-.',
          },
          { label: 'Add the ending', text: 'It follows the -em pattern, and mi takes -emo.' },
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
      ],
    },
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
          { label: 'The verb', text: 'znati with Vi takes -te: znate.' },
          { label: 'Make it a question', text: 'Verb first, li straight after it: znate li…' },
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
          { label: 'Change the verb', text: 'kako ste becomes kako si.' },
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
      ],
    },
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
          { label: 'Agree with the speaker', text: 'The speaker is a woman, so išla.' },
          {
            label: 'Add the auxiliary',
            text: 'ja → sam, and sam is a clitic: it sits second, straight after the participle.',
          },
          { label: 'Where to', text: 'Going somewhere is motion: na + accusative, na tržnicu.' },
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
      ],
    },
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
          { label: 'Gender', text: 'susjed ends in a consonant: masculine.' },
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
          { label: 'Gender', text: 'kazalište ends in -e: neuter.' },
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
      ],
    },
  },

  'adjective-agreement': {
    worked: [
      {
        title: 'A Neuter Noun',
        problem: 'Dopuni: To je ___ selo. (lijep)',
        en: 'Fill in: That is a beautiful village.',
        steps: [
          { label: 'Find the noun', text: 'selo — the adjective must follow it.' },
          { label: 'Its gender', text: 'selo ends in -o: neuter.' },
          { label: 'Match the ending', text: 'A neuter adjective ends in -o too.' },
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
          { label: 'Gender', text: 'bolnica is feminine.' },
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
      ],
    },
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
          { label: 'From a person', text: 'A person is not a space you come out of: od.' },
          { label: 'From a city', text: 'A city encloses you: iz.' },
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
      ],
    },
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
          { label: 'Person', text: 'A friend: ti → ne smiješ.' },
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
          { label: 'Use moći as a question', text: 'A waiter gets Vi: možete li…' },
          { label: 'Place "me"', text: 'mi is a clitic: second position, straight after li.' },
          { label: 'Infinitive and object', text: 'donijeti, then vodu in the accusative.' },
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
      ],
    },
  },

  'comparatives-a2': {
    worked: [
      {
        title: 'Older Than',
        problem: 'Ana ima 20 godina, Marija 25. Dopuni: Marija je ___ od Ane.',
        en: 'Ana is 20, Marija 25. Fill in: Marija is older than Ana.',
        steps: [
          { label: 'The adjective', text: 'old = star.' },
          { label: 'Make it comparative', text: 'A regular adjective adds -iji: stariji.' },
          { label: 'Agree with the subject', text: 'Marija is feminine: stariji → starija.' },
          { label: 'Than', text: 'od + genitive: Ana → Ane.' },
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
          { label: 'Superlative', text: 'Add naj- to the comparative: najbolji.' },
          { label: 'Agreement', text: 'restoran is masculine, so the -i ending stays.' },
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
      ],
    },
  },

  'object-pronouns': {
    worked: [
      {
        title: 'Replacing a Name',
        problem: 'Zamijeni ime zamjenicom: Vidim Anu svaki dan.',
        en: 'Replace the name with a pronoun: I see Ana every day.',
        steps: [
          { label: 'What job does Ana do?', text: 'She is the object — the one being seen.' },
          { label: 'The short form', text: '"her" as an object is je.' },
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
          { label: 'The thing', text: 'ključ is masculine, so "it" is ga.' },
          { label: 'The person', text: '"to him" is the dative: mu.' },
          { label: 'Order', text: 'To-whom before what: the dative comes first — mu, then ga.' },
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
          options: ['te', 'ti', 'tebe', 'tebi'],
          correct: 2,
          hint: 'After a preposition, always the long form — and za takes the accusative.',
          explanation: 'za tebe — the long accusative form.',
        },
      ],
    },
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
          { label: 'Gender', text: 'prijateljica ends in -a: feminine.' },
          { label: 'The ending', text: 'Feminine -a becomes -i in the dative.' },
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
      ],
    },
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
          { label: 'kartica', text: 'Feminine: -a → -om, karticom.' },
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
          { label: 'The ending', text: 'Željko takes -om in the instrumental: Željkom.' },
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
      ],
    },
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
          { label: 'So svoj', text: 'When the owner is the subject, the possessive is svoj.' },
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
      ],
    },
  },

  'plural-cases': {
    worked: [
      {
        title: 'A Plural Object',
        problem: 'Reci: "I see the tourists." (turist)',
        en: 'I see the tourists.',
        steps: [
          { label: 'Its job', text: 'The tourists are being seen: direct object, accusative.' },
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
          { label: 'The letters', text: 'pismo is the object: neuter accusative plural pisma.' },
          { label: 'To whom?', text: 'The receivers are dative plural.' },
          {
            label: 'Masculine and neuter',
            text: 'Dative plural -ima: prijatelj → prijateljima.',
          },
          { label: 'Feminine', text: 'Dative plural -ama: prijateljica → prijateljicama.' },
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
      ],
    },
  },

  quantity: {
    worked: [
      {
        title: 'A Lot of People',
        problem: 'Reci: "In summer a lot of tourists come."',
        en: 'In summer a lot of tourists come.',
        steps: [
          { label: 'The quantity word', text: 'puno is always followed by the genitive.' },
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
          { label: 'Measures take the genitive', text: 'kilogram and boca both open a genitive.' },
          { label: 'Tomatoes', text: 'Countable: genitive plural — rajčica.' },
          { label: 'Water', text: 'Uncountable: genitive singular — vode.' },
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
      ],
    },
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
          { label: 'Which form?', text: 'Saying what the date IS takes the plain ordinal.' },
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
          { label: 'The ordinal', text: 'ten → deseti.' },
          {
            label: '"On" a date',
            text: 'When something happens on a date, the ordinal goes into the genitive too: desetog.',
          },
          { label: 'The month', text: 'kolovoz → kolovoza, genitive.' },
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
      ],
    },
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
          { label: 'Order', text: 'The long auxiliary goes first, with li straight after it.' },
          { label: 'The participle', text: 'A male friend: vidio.' },
        ],
        answer: 'Jesi li vidio film?',
      },
      {
        title: 'A Question Word and a Denial',
        problem: 'Pitaj i odgovori: "When did she arrive?" — "She did not arrive."',
        en: 'Ask and answer: When did she arrive? — She did not arrive.',
        steps: [
          { label: 'Question word first', text: 'Kada opens the question, so no li is needed.' },
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
      ],
    },
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
          { label: 'No agreement', text: 'The adverb never changes to match the driver.' },
        ],
        answer: 'Vozi pažljivo.',
      },
      {
        title: 'An Irregular Comparison',
        problem: 'Reci: "Today I feel worse than yesterday."',
        en: 'Today I feel worse than yesterday.',
        steps: [
          { label: 'Start from the adverb', text: 'I feel badly: osjećam se loše.' },
          {
            label: 'Compare it',
            text: 'loše is one of the irregular four — its comparative is gore.',
          },
          { label: 'Than', text: 'nego + jučer.' },
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
          explanation: 'brže — z softens to ž, like lijep → ljepše.',
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
      ],
    },
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
          { label: 'Choose the word', text: 'Side by side is a, not ali.' },
          { label: 'Punctuate', text: 'A comma goes before a.' },
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
          { label: 'Order', text: 'The iako clause comes first here.' },
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
      ],
    },
  },

  'relative-koji': {
    worked: [
      {
        title: 'Koji as an Object',
        problem: 'Poveži: Ovo je film. Gledali smo ga jučer.',
        en: 'Join: This is the film. We watched it yesterday.',
        steps: [
          { label: 'Gender from outside', text: 'It refers back to film: masculine singular.' },
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
          { label: 'Gender from outside', text: 'prijateljica: feminine singular.' },
          { label: 'Case from inside', text: 'with her: s + instrumental.' },
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
      ],
    },
  },

  indefinites: {
    worked: [
      {
        title: 'Nobody, With a Negated Verb',
        problem: 'Reci: "Nobody called me."',
        en: 'Nobody called me.',
        steps: [
          { label: 'Build the word', text: 'no + who: ni- + tko = nitko.' },
          {
            label: 'Negate the verb too',
            text: 'Every ni- word needs a negated verb: je nazvao becomes nije nazvao.',
          },
          { label: 'Place me', text: 'me is a clitic: second position, after nitko.' },
        ],
        answer: 'Nitko me nije nazvao.',
      },
      {
        title: 'Two ni- Words and a Case',
        problem: 'Reci: "I have never told anyone."',
        en: 'I have never told anyone.',
        steps: [
          { label: 'never', text: 'ni- + kad = nikad.' },
          {
            label: 'anyone, in a negative sentence',
            text: 'Croatian uses the ni- word; reći takes the dative, so nitko → nikome.',
          },
          { label: 'Negate the verb', text: 'rekao sam → nisam rekao.' },
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
      ],
    },
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
          { label: 'The form', text: 'prozor → prozora.' },
        ],
        answer: 'Krevet je u spavaćoj sobi, pored prozora.',
      },
      {
        title: 'Flat and Floor',
        problem: 'Reci: "We live in a flat on the second floor."',
        en: 'We live in a flat on the second floor.',
        steps: [
          { label: 'Kuća or stan?', text: 'A flat is a stan: u + locative, stanu.' },
          { label: 'The floor', text: 'A floor takes an ordinal: second → drugi.' },
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
      ],
    },
  },

  'body-health': {
    worked: [
      {
        title: 'What Hurts',
        problem: 'Reci: "My stomach hurts."',
        en: 'My stomach hurts.',
        steps: [
          { label: 'The subject', text: 'The stomach does the hurting: trbuh is the subject.' },
          { label: 'The person', text: 'You are the object, accusative: me.' },
          { label: 'One thing or several?', text: 'One stomach: boli.' },
        ],
        answer: 'Boli me trbuh.',
      },
      {
        title: 'A Plural Body Part',
        problem: 'Reci: "Her eyes hurt."',
        en: 'Her eyes hurt.',
        steps: [
          { label: 'The subject', text: 'oči — eyes, plural.' },
          { label: 'The verb counts the eyes', text: 'Several things hurt: bole.' },
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
      ],
    },
  },

  'clothes-appearance': {
    worked: [
      {
        title: 'What She Is Wearing',
        problem: 'Reci: "Today she is wearing a white shirt and grey trousers."',
        en: 'Today she is wearing a white shirt and grey trousers.',
        steps: [
          { label: 'The verb', text: 'Wearing is nositi, not imati: nosi.' },
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
          { label: 'Register', text: 'A shop assistant gets Vi: imate li.' },
          { label: 'The jacket', text: 'jakna is the object: ova jakna → ovu jaknu.' },
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
      ],
    },
  },

  'describing-people': {
    worked: [
      {
        title: 'Height and Hair',
        problem: 'Opiši: "My brother is tall and has blond hair."',
        en: 'My brother is tall and has blond hair.',
        steps: [
          { label: 'Tall', text: 'brat is masculine: visok.' },
          { label: 'Blond', text: 'For hair, plav means blond.' },
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
          { label: 'Grey hair', text: 'Hair has its own word for grey: sijeda, never siva.' },
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
      ],
    },
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
          { label: 'The answer', text: 'Ja sam + the job in the subject form.' },
          { label: 'A woman', text: 'The female form is standard: kuhar → kuharica.' },
        ],
        answer: 'Čime se baviš? — Ja sam kuharica.',
      },
      {
        title: 'Working As',
        problem: 'Reci: "My father works as a driver at a big company."',
        en: 'My father works as a driver at a big company.',
        steps: [
          { label: 'As a driver', text: 'radi kao + the subject form: vozač, no case ending.' },
          { label: 'At a company', text: 'u + locative: tvrtka → tvrtki.' },
          { label: 'The adjective follows', text: 'Feminine locative -oj: velikoj.' },
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
      ],
    },
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
          { label: 'Pupil or student?', text: 'At school it is učenik — a girl is učenica.' },
          { label: 'The clitic', text: 'je goes second in its clause: dobra je učenica.' },
        ],
        answer: 'Moja kći ide u osnovnu školu i dobra je učenica.',
      },
      {
        title: 'Studying a Degree',
        problem: 'Reci: "I study economics at the Faculty of Economics."',
        en: 'I study economics at the Faculty of Economics.',
        steps: [
          { label: 'Which verb?', text: 'A university degree is studirati, not učiti.' },
          { label: 'The subject', text: 'studirati takes an object: ekonomija → ekonomiju.' },
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
      ],
    },
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
          { label: 'A sport', text: 'A game or sport is igrati: igram tenis.' },
          { label: 'An instrument', text: 'An instrument is svirati: svira klavir.' },
          { label: 'Join them', text: 'Two people side by side: a, after a comma.' },
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
          { label: 'The case', text: 'baviti se takes the bare instrumental — no s.' },
          { label: 'The form', text: 'fotografija is feminine: -a → -om.' },
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
      ],
    },
  },

  'travel-transport': {
    worked: [
      {
        title: 'Buying Tickets',
        problem: 'Reci: "Two one-way tickets to Zadar, please."',
        en: 'Two one-way tickets to Zadar, please.',
        steps: [
          { label: 'Two, feminine', text: 'karta is feminine, so two is dvije.' },
          {
            label: 'After two',
            text: 'A feminine noun after dva/dvije ends in -e, and the adjective matches: jednosmjerne karte.',
          },
          { label: 'The destination', text: 'za + accusative: za Zadar.' },
        ],
        answer: 'Dvije jednosmjerne karte za Zadar, molim.',
      },
      {
        title: 'Arrival From Somewhere',
        problem: 'Pitaj: "When does the ferry from Split arrive?"',
        en: 'When does the ferry from Split arrive?',
        steps: [
          { label: 'Question word first', text: 'Kad (when) opens the question.' },
          { label: 'Arrive', text: 'dolaziti, third person singular for the ferry: dolazi.' },
          { label: 'From Split', text: 'The origin is iz + genitive: Splita.' },
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
      ],
    },
  },

  'plans-invitations': {
    worked: [
      {
        title: 'An Invitation',
        problem: 'Pozovi prijateljicu: "Are you free on Friday? Shall we go to the cinema?"',
        en: 'Invite a (female) friend: Are you free on Friday? Shall we go to the cinema?',
        steps: [
          { label: 'Register', text: 'A friend: ti, so jesi li.' },
          { label: 'Agreement', text: 'She is a woman: slobodna.' },
          { label: 'The day', text: 'u + accusative: u petak.' },
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
          { label: 'The verb', text: 'For an arranged meeting: nalazimo se, in the present.' },
          {
            label: 'Half past seven',
            text: 'Croatian counts the half towards the NEXT hour: half past seven is pola osam, with u.',
          },
          { label: 'In front of', text: 'ispred + genitive: kazalište → kazališta.' },
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
      ],
    },
  },

  'celebrations-holidays': {
    worked: [
      {
        title: 'Two Greetings, Two Endings',
        problem: 'Čestitaj: "Happy Easter and happy holidays!"',
        en: 'Happy Easter and happy holidays!',
        steps: [
          { label: 'Easter', text: 'Uskrs is masculine: sretan.' },
          { label: 'Holidays', text: 'blagdani is masculine plural: sretni.' },
          { label: 'Join', text: 'i between them — sretan agrees with each noun separately.' },
        ],
        answer: 'Sretan Uskrs i sretni blagdani!',
      },
      {
        title: 'Congratulations On…',
        problem: 'Čestitaj prijateljici: "Congratulations on your new job!"',
        en: 'Congratulate a friend: Congratulations on your new job!',
        steps: [
          { label: 'The verb', text: 'Čestitam — and it takes na + locative for the occasion.' },
          { label: 'The noun', text: 'posao → poslu: the a drops out, as in the genitive posla.' },
          { label: 'The adjective', text: 'Masculine locative -om: novom.' },
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
      ],
    },
  },
};
