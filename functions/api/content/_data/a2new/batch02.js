// functions/api/content/_data/a2new/batch02.js
//
// New A2 lessons, batch 02 (Croaticum restructure, stage 3, 2026-11-12). See a2new/index.js.
//
// Six lessons from Razgovarajte s nama! A2-B1, lessons 2 and 3:
//   verbs-nuti (12) · weekend-plans (13) · grocery-shopping (16) · visiting-customs (17)
//   · locative-adjectives (18) · quality-of-life (23)
// Nothing here uses grammar the learner has not met: no comparatives, no koji-clauses,
// no conjunction clauses beyond the fixed opinion frame "mislim da …", no indefinite
// pronouns. Drill banks for each lesson live in src/data/drills/a2/.

// ─────────────────────────────────────────────────────────────────────────────
// 12 · verbs-nuti — krenuti/krenem, stati/stanem, doći/dođem
// ─────────────────────────────────────────────────────────────────────────────
const L_VERBS_NUTI = {
  id: 'verbs-nuti',
  title: 'Krenuti, Ostati, Doći — Verbs With a Hidden Stem',
  subtitle: 'Set off, stay, come, find: the present that the infinitive does not show',
  icon: '🚦',
  level: 'A2',
  duration: '~6 min',
  color: '#0e7490',
  bg: '#ecfeff',
  slides: [
    {
      type: 'intro',
      title: 'Verbs You Use Every Day',
      body: 'Set off, turn, stop, stay, come, leave, find, go in — some of the most useful verbs in Croatian do not build their present the way their infinitive suggests. Krenuti does not give "krenujem", and doći does not give "doćem". Each has a stem of its own, and once you know it, the command form (Kreni! Dođi!) comes with it for free.',
      icon: '🚦',
    },
    {
      type: 'rule',
      title: 'Group 1: -nuti → -nem',
      body: 'Take away -uti, keep the n, and add the ordinary -em endings: krenuti (to set off) → krenem, kreneš, krene, krenemo, krenete, krenu. The same pattern serves skrenuti (to turn off a road), okrenuti (to turn round), maknuti (to move something away), dignuti (to lift) and viknuti (to shout).',
      highlight: 'krenuti → krenem',
    },
    {
      type: 'table',
      title: 'Three -nuti Verbs in the Present',
      headers: ['Person', 'krenuti (set off)', 'skrenuti (turn)', 'maknuti (move away)'],
      rows: [
        ['ja', 'krenem', 'skrenem', 'maknem'],
        ['ti', 'kreneš', 'skreneš', 'makneš'],
        ['on / ona / ono', 'krene', 'skrene', 'makne'],
        ['mi', 'krenemo', 'skrenemo', 'maknemo'],
        ['vi', 'krenete', 'skrenete', 'maknete'],
        ['oni / one / ona', 'krenu', 'skrenu', 'maknu'],
      ],
    },
    {
      type: 'rule',
      title: 'Group 2: stati, ostati, postati — an n Appears',
      body: 'These three end in -ati, but their present has an n the infinitive does not show: stati (to stop) → stanem; ostati (to stay) → ostanem, ostaneš, ostane, ostanemo, ostanete, ostanu; postati (to become) → postanem. "Ostam" and "postam" do not exist.',
      highlight: 'ostati → ostanem',
    },
    {
      type: 'rule',
      title: 'Group 3: the -ći Verbs of Coming and Going',
      body: 'Doći (to come) → dođem, dođeš, dođe, dođemo, dođete, dođu. Naći (to find) → nađem. Ući (to go in) → uđem. Izaći (to go out) → izađem. The odd one is otići (to leave, to go away): it is the only verb with TWO presents, both correct — otiđem, otiđeš, otiđe… and the shorter odem, odeš, ode, odemo, odete, odu. In speech you will hear odem more often.',
      highlight: 'otići → otiđem or odem',
    },
    {
      type: 'table',
      title: 'Coming, Going, Finding',
      headers: ['Person', 'doći (come)', 'otići (leave)', 'naći (find)', 'ući (go in)'],
      rows: [
        ['ja', 'dođem', 'otiđem / odem', 'nađem', 'uđem'],
        ['ti', 'dođeš', 'otiđeš / odeš', 'nađeš', 'uđeš'],
        ['on / ona', 'dođe', 'otiđe / ode', 'nađe', 'uđe'],
        ['mi', 'dođemo', 'otiđemo / odemo', 'nađemo', 'uđemo'],
        ['vi', 'dođete', 'otiđete / odete', 'nađete', 'uđete'],
        ['oni / one', 'dođu', 'otiđu / odu', 'nađu', 'uđu'],
      ],
    },
    {
      type: 'rule',
      title: 'When Do You Use This Present?',
      body: 'All of these verbs name one finished step — the moment you set off, arrive, find. So their present is used in two places. (1) Routines: Obično krenem u sedam (I usually set off at seven). Svaki petak odem kod bake (Every Friday I go round to Grandma’s). (2) After kad (when), čim (as soon as) and ako (if), when you talk about one step that comes first: Kad dođeš, nazovi me. Čim dođemo, krenemo na plažu. Ako skrenete desno, vidjet ćete crkvu. Directions and plans are full of this. For one plain plan for tomorrow, use the future with the infinitive: Krenut ću u sedam. Doći ću sutra. Note the spelling: krenuti drops its final -i before ću (krenut ću), but doći keeps its whole form (doći ću).',
      highlight: 'Kad dođeš, nazovi me.',
    },
    {
      type: 'rule',
      title: 'The Command Comes From the Present',
      body: 'Take the present stem, add -i for one friend, -ite for a group or a stranger, -imo for "let’s": kren-em → kreni, krenite, krenimo; skren-em → skreni, skrenite; stan-em → stani, stanite; dođ-em → dođi, dođite; uđ-em → uđi, uđite; nađ-em → nađi. Directions are full of them: Skrenite lijevo kod pošte.',
      highlight: 'Skrenite lijevo kod pošte.',
    },
    {
      type: 'rule',
      title: 'The Past You Already Know',
      body: 'The past tense is built from the infinitive, as you learned in A1: krenuo / krenula, maknuo / maknula, stao / stala, ostao / ostala, postao / postala. The -ći verbs have short irregular forms: došao / došla, otišao / otišla, našao / našla, ušao / ušla.',
      highlight: 'došao, otišao, našao, ušao',
    },
    {
      type: 'example',
      title: 'Routines and Directions',
      items: [
        {
          hr: 'Obično krenem na posao u sedam sati.',
          en: 'I usually set off for work at seven.',
          note: 'krenem — the ja form of krenuti',
        },
        {
          hr: 'Kod pošte skrenite lijevo, a zatim idite ravno.',
          en: 'Turn left at the post office, and then go straight on.',
          note: 'skrenite — the vi command of skrenuti',
        },
        {
          hr: 'Autobus uvijek stane ispred škole.',
          en: 'The bus always stops in front of the school.',
          note: 'stane — the on form of stati',
        },
        {
          hr: 'Vikendom često ostanemo kod kuće.',
          en: 'At weekends we often stay at home.',
          note: 'ostanemo — the mi form of ostati',
        },
        {
          hr: 'Svaki petak odem kod bake na ručak.',
          en: 'Every Friday I go round to my grandmother’s for lunch.',
          note: 'odem — the ja form of otići',
        },
        {
          hr: 'Djeca uđu u učionicu točno u osam.',
          en: 'The children go into the classroom at exactly eight.',
          note: 'uđu — the oni form of ući',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Uvijek nađem parking blizu ureda.',
          en: 'I always find a parking space near the office.',
          note: 'nađem — the ja form of naći',
        },
        {
          hr: 'Makni torbu sa stola, molim te.',
          en: 'Move the bag off the table, please.',
          note: 'makni — the ti command of maknuti',
        },
        {
          hr: 'Moja sestra uvijek dođe kasno.',
          en: 'My sister always arrives late.',
          note: 'dođe — the ona form of doći',
        },
        {
          hr: 'Moj brat je prošle godine postao liječnik.',
          en: 'My brother became a doctor last year.',
          note: 'postao — the past of postati',
        },
        {
          hr: 'Sutra ćemo krenuti rano, a doći ćemo navečer.',
          en: 'Tomorrow we will set off early and arrive in the evening.',
          note: 'future: ćemo plus the full infinitives krenuti and doći',
        },
        {
          hr: 'Dođite k nama u nedjelju!',
          en: 'Come round to us on Sunday!',
          note: 'dođite — the vi command of doći',
        },
        {
          hr: 'Kad dođeš u Split, nazovi me.',
          en: 'When you get to Split, call me.',
          note: 'kad + the present of doći: one step that comes first',
        },
        {
          hr: 'Čim prođete Ogulin, skrenite desno.',
          en: 'As soon as you pass Ogulin, turn right.',
          note: 'čim + prođete (proći → prođem, like doći)',
        },
        {
          hr: 'Svake godine u srpnju otiđem na more.',
          en: 'Every year in July I go off to the seaside.',
          note: 'otiđem — the longer present of otići, as correct as odem',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Ja obično ___ u osam." (set off)',
      options: ['krenem', 'krenim', 'krenujem', 'krenam'],
      correct: 0,
      explanation:
        'Krenuti drops -uti, keeps the n and takes -em: krenem. There is no -uj- in this verb and no -am or -im.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which is the ja form of otići?',
      options: ['otićem', 'odem', 'oteđem', 'otijem'],
      correct: 1,
      explanation:
        'Otići is the odd one in its group: its present is otiđem or odem — both correct. Otićem and oteđem do not exist.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Building the present as if from an -ati or -ovati verb: "krenujem" or "krenam" instead of krenem. (2) Forgetting the n in stati, ostati and postati: "Vikendom ostam kod kuće" — the present is ostanem. (3) Putting the present where a single plan for tomorrow needs the future: "Sutra krenem u sedam" sounds like a habit; say Sutra ću krenuti u sedam, or Krenut ću sutra u sedam. And write the future in two words: krenut ću, never one.',
      highlight: 'ostanem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Oni ___ na posao u sedam." (set off)',
          options: ['krenem', 'krenu', 'krenuju', 'kreneju'],
          correct: 1,
          explanation: 'Krenuti → kren- + the oni ending -u: krenu.',
        },
        {
          q: 'Complete: "Vikendom ___ kod kuće." (I stay)',
          options: ['ostanem', 'ostam', 'ostanim', 'ostaem'],
          correct: 0,
          explanation: 'Ostati has an n in the present: ostanem, ostaneš, ostane…',
        },
        {
          q: 'Complete: "Svaki dan ___ kući u pet." (she comes)',
          options: ['doće', 'dođi', 'dođe', 'dođu'],
          correct: 2,
          explanation:
            'Doći → dođ- + the ona ending -e: dođe. Dođi is the command, dođu is "they come".',
        },
        {
          q: 'Which is the vi command (polite or plural) of skrenuti?',
          options: ['skreni', 'skrenuli', 'skrenete', 'skrenite'],
          correct: 3,
          explanation:
            'The command comes from the present stem skren- plus -ite: skrenite. Skreni is for one friend.',
        },
        {
          q: 'Complete: "___ rano ujutro." (I will set off)',
          options: ['Krenuti ću', 'Krenut ću', 'Ću krenuti', 'Krenem ću'],
          correct: 1,
          explanation:
            'When the infinitive opens the sentence it loses its final -i and ću follows as a separate word: Krenut ću. Ću can never stand first.',
        },
        {
          q: 'Complete: "Jučer smo ___ ključeve." (found)',
          options: ['nađli', 'naćili', 'našli', 'nađeli'],
          correct: 2,
          explanation: 'Naći has a short irregular past: našao, našla, našli.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Krenuti, Ostati, Doći — Key Takeaways',
      points: [
        '-nuti verbs: krenuti → krenem, skrenuti → skrenem, maknuti → maknem',
        'stati, ostati, postati gain an n: stanem, ostanem, postanem',
        'doći → dođem, naći → nađem, ući → uđem — and otići has two: otiđem or odem',
        'Their present is for routines and after kad, čim, ako: Kad dođeš, nazovi me',
        'A single plan for tomorrow uses the future: Krenut ću, doći ću',
        'The command comes from the present stem: kreni, stanite, dođi, uđite',
      ],
    },
  ],
};

const P_VERBS_NUTI = {
  worked: [
    {
      title: 'A Routine With ostati',
      problem: 'Prevedi: "On Sundays we usually stay at home."',
      en: 'On Sundays we usually stay at home.',
      steps: [
        {
          label: 'Find the verb',
          text: 'To stay is ostati — one of the verbs whose present has a hidden n.',
        },
        {
          label: 'The stem',
          text: 'The present stem is ostan-, and the mi ending is -emo: ostanemo.',
        },
        {
          label: 'The time word',
          text: 'On Sundays is the instrumental nedjeljom, with no preposition; kod kuće is "at home".',
        },
      ],
      answer: 'Nedjeljom obično ostanemo kod kuće.',
    },
    {
      title: 'Two Commands From Two Presents',
      problem: 'Prevedi, prijatelju: "Come in and find a seat!"',
      en: 'Say to a friend: Come in and find a seat!',
      steps: [
        {
          label: 'To come in',
          text: 'Ući has the present uđem. The stem is uđ-.',
        },
        {
          label: 'To find',
          text: 'Naći has the present nađem. The stem is nađ-.',
        },
        {
          label: 'One friend',
          text: 'Add -i to each stem for the ti command, and mjesto is the seat.',
        },
      ],
      answer: 'Uđi i nađi mjesto!',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Ti uvijek ___ na vrijeme. (come)',
        options: ['dođeš', 'dođes', 'doćeš', 'dođiš'],
        correct: 0,
        hint: 'The present stem of this verb has đ, and the ti ending is -eš.',
        explanation: 'dođeš — doći keeps đ in every person.',
      },
      {
        q: 'Mi ___ u osam. (set off)',
        options: ['krenimo', 'krenemo', 'krenujemo', 'krenamo'],
        correct: 1,
        hint: 'Keep the n of the infinitive and add the mi ending -emo.',
        explanation: 'krenemo. Krenimo is the command "let’s set off".',
      },
      {
        q: 'Autobus ___ ispred hotela. (stops)',
        options: ['sta', 'stanuje', 'stane', 'stanu'],
        correct: 2,
        hint: 'Stati hides an n in its present; the on ending is -e.',
        explanation: 'stane. Stanuje is a different verb: "lives".',
      },
      {
        q: 'Oni ___ kod nas cijeli vikend. (stay)',
        options: ['ostane', 'ostanemo', 'ostanu', 'ostanete'],
        correct: 2,
        hint: 'The stem is ostan-; which ending belongs to oni?',
        explanation: 'ostanu — the oni ending is -u.',
      },
      {
        q: '___ lijevo kod crkve! (turn — to a stranger)',
        options: ['Skreni', 'Skrenite', 'Skreneš', 'Skrenuli'],
        correct: 1,
        hint: 'A stranger gets the polite command: the stem plus -ite.',
        explanation: 'Skrenite — skreni is for a friend.',
      },
      {
        q: 'Svaki petak ___ kod prijatelja. (I go round)',
        options: ['odem', 'ode', 'odu', 'otim'],
        correct: 0,
        hint: 'Take the SHORT present of otići — the one that starts od-; ja ends in -em.',
        explanation: 'odem — the ja form of otići.',
      },
      {
        type: 'type',
        q: 'Uvijek ____ parking blizu ureda. (I find)',
        answer: 'nađem',
        hint: 'Naći has đ in its present stem; ja ends in -em.',
        explanation: 'nađem — the ja form of naći.',
      },
      {
        type: 'type',
        q: 'Vikendom ____ kod kuće. (we stay)',
        answer: 'ostanemo',
        hint: 'Remember the hidden n, then the mi ending.',
        explanation: 'ostanemo — the mi form of ostati.',
      },
      {
        type: 'type',
        q: '____ unutra! (come in — to a friend)',
        answer: 'uđi',
        hint: 'The present of ući is uđem; drop -em and add the ending for one friend.',
        explanation: 'Uđi — the ti command of ući.',
      },
      {
        type: 'type',
        q: 'Moja sestra je ____ liječnica. (became)',
        answer: 'postala',
        hint: 'The past of postati, for a woman.',
        explanation: 'postala — past tense, feminine.',
      },
      {
        type: 'type',
        q: 'Djeca ____ u učionicu u osam. (go in)',
        answer: 'uđu',
        hint: 'The verb is ući, and the subject is a plural: they.',
        explanation: 'uđu — the oni form of ući.',
      },
      {
        q: 'Sutra ___ kod tebe. (I will come)',
        options: ['ću doći', 'doći ću', 'ću dođem', 'dođem ću'],
        correct: 0,
        hint: 'After Sutra, the little future word must come second; the infinitive stays whole.',
        explanation: 'Sutra ću doći — ću follows the first word, and doći keeps its full form.',
      },
      {
        q: 'Kad ___ u Zagreb, nazovi me. (you arrive — ti)',
        options: ['dođeš', 'doći', 'dođi', 'došao'],
        correct: 0,
        hint: 'After kad, one step that comes first is in the present; ti ends in -eš.',
        explanation: 'Kad dođeš… — the present of doći after kad. Dođi is the command.',
      },
      {
        q: 'Which is ALSO a correct ja form of otići, besides odem?',
        options: ['otićem', 'otiđem', 'otidem', 'otijem'],
        correct: 1,
        hint: 'Otići is the only verb in its group with two presents; the long one has đ, like dođem.',
        explanation: 'otiđem — the long present. Otiđem and odem are both correct.',
      },
      {
        type: 'type',
        q: 'Čim ____ kući, skuhat ću ručak. (doći — ja)',
        answer: 'dođem',
        hint: 'After čim, the present of doći; ja ends in -em.',
        explanation: 'Čim dođem… — as soon as I get home.',
      },
      {
        q: '___ torbu sa stolice! (move away — to a friend)',
        options: ['Makni', 'Maknite', 'Maknuj', 'Makneš'],
        correct: 0,
        hint: 'The stem is makn-; one friend gets -i.',
        explanation: 'Makni — the ti command of maknuti.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Vi uvijek ___ na vrijeme." (come)',
      options: ['dođu', 'dođete', 'doćete', 'dođeju'],
      correct: 1,
      explanation: 'Doći → dođ- + the vi ending -ete: dođete.',
    },
    {
      q: 'Which is the ti command of maknuti?',
      options: ['makneš', 'maknuo', 'makni', 'maknite'],
      correct: 2,
      explanation: 'The present stem makn- plus -i: makni. Maknite is for a group or a stranger.',
    },
    {
      q: 'Complete: "Oni nedjeljom ___ kod kuće." (stay)',
      options: ['ostanu', 'ostane', 'ostanemo', 'ostam'],
      correct: 0,
      explanation: 'Ostati → ostan- + -u for oni: ostanu.',
    },
    {
      q: 'Complete: "Svako jutro ___ na posao u sedam." (she sets off)',
      options: ['krenu', 'krenem', 'kreni', 'krene'],
      correct: 3,
      explanation: 'The ona form of krenuti: krene. Kreni is the command.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Ostati ću kod kuće.',
        'Ostat ću kod kuće.',
        'Ću ostati kod kuće.',
        'Ostanem ću kod kuće.',
      ],
      correct: 1,
      explanation:
        'An infinitive in -ti that opens the sentence loses its -i before ću: Ostat ću. Ću never stands first.',
    },
    {
      q: 'Complete: "Jučer je ___ kasno." (he arrived)',
      options: ['došla', 'dođao', 'doćao', 'došao'],
      correct: 3,
      explanation: 'Doći has an irregular past: došao for a man, došla for a woman.',
    },
  ],
  vocab: [
    ['krenuti', 'to set off', 'Obično krenem u sedam.'],
    ['skrenuti', 'to turn (off a road)', 'Skrenite lijevo kod pošte.'],
    ['maknuti', 'to move (something) away', 'Makni torbu sa stola.'],
    ['stati', 'to stop', 'Autobus stane ispred škole.'],
    ['ostati', 'to stay', 'Vikendom ostanemo kod kuće.'],
    ['postati', 'to become', 'Moj brat je postao liječnik.'],
    ['doći', 'to come, to arrive', 'Sestra uvijek dođe kasno.'],
    ['otići', 'to leave, to go away', 'Svaki petak odem kod bake.'],
    ['naći', 'to find', 'Uvijek nađem parking.'],
    ['ući', 'to go in, to enter', 'Djeca uđu u učionicu.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 13 · weekend-plans — the weekend, the future, hotel or private accommodation
// ─────────────────────────────────────────────────────────────────────────────
const L_WEEKEND_PLANS = {
  id: 'weekend-plans',
  title: 'Planovi za vikend',
  subtitle: 'What are you doing at the weekend — and where will you sleep?',
  icon: '🏖️',
  level: 'A2',
  duration: '~6 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'Što radiš za vikend?',
      body: 'Every Friday someone will ask you: Što radiš za vikend? This lesson gives you two ways to answer — the present with a time word, and the future — plus everything you need to book a room for a weekend away, in a hotel or in private accommodation, which is how a great many visitors stay on the Croatian coast.',
      icon: '🏖️',
    },
    {
      type: 'rule',
      title: 'The Present Can Talk About the Weekend',
      body: 'As in English ("On Saturday I’m going to the sea"), Croatian uses the present for a plan that is already arranged, as long as a time word says when: U subotu idem na more. Ovaj vikend putujemo u Zadar. The future says the same thing, a little more firmly: U subotu ću ići na more. Both are correct.',
      highlight: 'U subotu idem na more.',
    },
    {
      type: 'rule',
      title: 'Time Words for the Weekend',
      body: 'Days take u + accusative: u petak, u subotu, u nedjelju — add navečer, ujutro or popodne for the part of the day: u petak navečer. "This weekend" and "next weekend" need no preposition at all: ovaj vikend, sljedeći vikend. "At the weekend" in general is za vikend, and "every weekend" is vikendom.',
      highlight: 'za vikend',
    },
    {
      type: 'rule',
      title: 'The Future, and Where ću Goes',
      body: 'The future is ću, ćeš, će, ćemo, ćete, će plus the infinitive. Ću is a little word that must stand second in its sentence: U nedjelju ću ostati kod kuće. If the infinitive comes first, it loses its final -i and ću follows it: Ostat ću kod kuće. Infinitives in -ći keep their form: Ići ćemo na izlet.',
      highlight: 'U nedjelju ću ostati kod kuće.',
    },
    {
      type: 'rule',
      title: 'Hotel or Private Accommodation?',
      body: 'A hotel has a reception (recepcija), often a pool (bazen), and breakfast in the price. Privatni smještaj means rooms (sobe) or a flat (apartman) let by a private owner: the host meets you and gives you the key, and an apartman usually has its own kitchen. On the coast you will see houses with signs reading "Sobe" or "Apartmani". Either way a small tourist tax, boravišna pristojba, is added per person per night.',
      highlight: 'privatni smještaj',
    },
    {
      type: 'rule',
      title: 'Booking: the Adjective Goes Into the Accusative',
      body: 'When you ask for a room, the room is the object of your verb, so the adjective moves into the accusative with it: slobodna soba → Imate li slobodnu sobu? Mirna soba → Tražim mirnu sobu. A masculine thing that is not alive keeps its basic form: Tražimo jeftin smještaj. Rezervirali smo mali apartman.',
      highlight: 'Imate li slobodnu sobu?',
    },
    {
      type: 'table',
      title: 'Hotel and Private Accommodation',
      headers: ['', 'hotel', 'privatni smještaj'],
      rows: [
        ['recepcija', 'yes, open all day', 'no — the host gives you the key'],
        ['doručak', 'usually in the price', 'usually not; you cook or go out'],
        ['kuhinja', 'no', 'an apartman usually has one'],
        ['what you ask for', 'dvokrevetnu sobu', 'apartman za dvije osobe'],
        ['how you pay', 'at reception, by card', 'often to the host, sometimes in cash'],
      ],
    },
    {
      type: 'example',
      title: 'Talking About the Weekend',
      items: [
        { hr: 'Što radiš za vikend?', en: 'What are you doing at the weekend?' },
        {
          hr: 'U subotu idemo na izlet na Plitvice.',
          en: 'On Saturday we are going on a trip to Plitvice.',
          note: 'present with a time word for an arranged plan',
        },
        {
          hr: 'U nedjelju ću ostati kod kuće i odmoriti se.',
          en: 'On Sunday I will stay at home and rest.',
          note: 'ću stands second, after U nedjelju',
        },
        {
          hr: 'Ovaj vikend putujemo u Zadar kod prijatelja.',
          en: 'This weekend we are travelling to Zadar to stay with friends.',
          note: 'ovaj vikend — no preposition',
        },
        {
          hr: 'Sljedeći vikend ćemo ići u planine.',
          en: 'Next weekend we will go to the mountains.',
        },
        {
          hr: 'U petak navečer idem u kino s Anom.',
          en: 'On Friday evening I am going to the cinema with Ana.',
        },
      ],
    },
    {
      type: 'example',
      title: 'Finding a Place to Stay',
      items: [
        {
          hr: 'Tražimo jeftin smještaj blizu plaže.',
          en: 'We are looking for cheap accommodation near the beach.',
          note: 'jeftin smještaj — masculine, not alive: the accusative looks like the basic form',
        },
        {
          hr: 'Imate li slobodnu sobu za petak i subotu?',
          en: 'Do you have a free room for Friday and Saturday?',
          note: 'slobodnu sobu — both words take the feminine accusative -u',
        },
        {
          hr: 'Želim dvokrevetnu sobu s pogledom na more.',
          en: 'I would like a double room with a sea view.',
          note: 'dvokrevetnu — the feminine accusative of dvokrevetna',
        },
        {
          hr: 'Rezervirali smo mali apartman s kuhinjom.',
          en: 'We have booked a small flat with a kitchen.',
        },
        {
          hr: 'Koliko košta noćenje s doručkom?',
          en: 'How much is one night with breakfast?',
        },
        {
          hr: 'Doručak nije uključen u cijenu, ali kuhinja je velika.',
          en: 'Breakfast is not included in the price, but the kitchen is big.',
        },
      ],
    },
    {
      type: 'example',
      title: 'Holidays, Weekends, Breaks — Words and Idioms',
      items: [
        {
          hr: 'Božić je blagdan, a Dan državnosti je praznik.',
          en: 'Christmas is a religious feast, and Statehood Day is a public holiday.',
          note: 'blagdan — a church feast; praznik — a public holiday',
        },
        {
          hr: 'Radimo bez predaha cijelo jutro.',
          en: 'We have been working all morning without a break.',
          note: 'predah — a breather; pauza — a short break at work',
        },
        {
          hr: 'Ajde, radimo — nije svaki dan nedjelja.',
          en: 'Come on, let’s work — it can’t be a holiday every day.',
          note: 'Nije svaki dan nedjelja — every day can’t be Sunday',
        },
        {
          hr: 'Ovaj vrt je pravi praznik za oči.',
          en: 'This garden is a real feast for the eyes.',
          note: 'praznik za oči — a feast for the eyes',
        },
        {
          hr: 'Na cestama je opet crni vikend.',
          en: 'It is another black weekend on the roads.',
          note: 'crni vikend — a weekend with many road accidents',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Tražim ___ sobu, daleko od ceste." (quiet)',
      options: ['mirna', 'mirnu', 'mirnoj', 'mirne'],
      correct: 1,
      explanation:
        'Sobu is the object of tražim, feminine accusative, and the adjective follows it: mirnu sobu.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is correct?',
      options: ['U subotu ići ću na more.', 'U subotu ću ići na more.', 'U subotu ći ću na more.'],
      correct: 1,
      explanation:
        'Ću must stand second in the sentence, straight after the first phrase U subotu: U subotu ću ići na more.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the adjective in its basic form after a verb with an object: "Imate li slobodna soba?" — the room is the object, so both words take the accusative: Imate li slobodnu sobu? (2) Putting ću in the wrong place: "U subotu ići ću na more" — ću must be second: U subotu ću ići na more. (3) Saying "u vikend" for "at the weekend" — the phrase is za vikend, or vikendom for "every weekend".',
      highlight: 'Imate li slobodnu sobu?',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "U subotu ___ na more." (we are going)',
          options: ['idemo', 'ići', 'išli', 'idete'],
          correct: 0,
          explanation:
            'The present with a time word talks about an arranged plan; the mi form of ići is idemo.',
        },
        {
          q: 'Complete: "Tražimo ___ smještaj." (cheap)',
          options: ['jeftina', 'jeftinu', 'jeftin', 'jeftinog'],
          correct: 2,
          explanation:
            'Smještaj is masculine and not alive, so in the accusative the adjective keeps its basic form: jeftin smještaj.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'U nedjelju ostat ću kod kuće.',
            'U nedjelju ću ostati kod kuće.',
            'U nedjelju ću ostat kod kuće.',
            'U nedjelju ostati ću kod kuće.',
          ],
          correct: 1,
          explanation:
            'After U nedjelju, ću comes second and the infinitive stays whole: U nedjelju ću ostati kod kuće.',
        },
        {
          q: 'Complete: "Imate li ___ sobu s pogledom na more?" (double)',
          options: ['dvokrevetna', 'dvokrevetnoj', 'dvokrevetne', 'dvokrevetnu'],
          correct: 3,
          explanation: 'Sobu is a feminine accusative object, so the adjective is dvokrevetnu.',
        },
        {
          q: 'What does "Doručak je uključen u cijenu" mean?',
          options: [
            'Breakfast costs extra.',
            'Breakfast is included in the price.',
            'Breakfast is not served.',
            'Breakfast is in the room.',
          ],
          correct: 1,
          explanation: 'Uključen means "included", and u cijenu is "in the price".',
        },
        {
          q: 'Which phrase means "at the weekend"?',
          options: ['u vikendu', 'na vikendu', 'za vikend', 'do vikenda'],
          correct: 2,
          explanation: 'Croatian says za vikend. Do vikenda means "until the weekend".',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Planovi za vikend — Key Takeaways',
      points: [
        'Present plus a time word for an arranged plan: U subotu idem na more',
        'Future for the same plan, more firmly: U subotu ću ići na more',
        'Ću stands second: U nedjelju ću ostati… / Ostat ću…',
        'Time words: u petak navečer, ovaj vikend, sljedeći vikend, za vikend',
        'Hotel or privatni smještaj: sobe and apartmani let by a private host',
        'Booking puts the adjective in the accusative: slobodnu sobu, jeftin smještaj',
      ],
    },
  ],
};

const P_WEEKEND_PLANS = {
  worked: [
    {
      title: 'Two Plans, Two Tenses',
      problem: 'Prevedi: "On Saturday we are going to the sea, and on Sunday we will rest."',
      en: 'On Saturday we are going to the sea, and on Sunday we will rest.',
      steps: [
        {
          label: 'The arranged plan',
          text: 'A plan with a time word can use the present: U subotu idemo na more.',
        },
        {
          label: 'The future',
          text: 'We will rest is ćemo plus odmoriti se. After U nedjelju, ćemo comes second.',
        },
        {
          label: 'The order of the little words',
          text: 'Ćemo comes before se: u nedjelju ćemo se odmoriti. A joins the two halves.',
        },
      ],
      answer: 'U subotu idemo na more, a u nedjelju ćemo se odmoriti.',
    },
    {
      title: 'Asking for a Room',
      problem: 'Prevedi, recepcionaru: "Do you have a free double room?"',
      en: 'Say to a receptionist: Do you have a free double room?',
      steps: [
        {
          label: 'The question',
          text: 'Do you have…? to a stranger is Imate li…?',
        },
        {
          label: 'The object',
          text: 'The room is the object of imate, so soba becomes sobu.',
        },
        {
          label: 'Both adjectives follow',
          text: 'slobodna and dvokrevetna both take the feminine accusative -u.',
        },
      ],
      answer: 'Imate li slobodnu dvokrevetnu sobu?',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'U petak navečer ___ u kino. (I am going)',
        options: ['ideš', 'ići', 'idem', 'išao'],
        correct: 2,
        hint: 'A plan with a time word can use the present; you need the ja form.',
        explanation: 'idem — the present of ići, ja form.',
      },
      {
        q: 'Tražimo ___ apartman blizu plaže. (small)',
        options: ['mali', 'malog', 'malu', 'malom'],
        correct: 0,
        hint: 'Apartman is masculine and not alive.',
        explanation: 'mali apartman — the accusative looks like the basic form.',
      },
      {
        q: 'Imate li ___ sobu? (free)',
        options: ['slobodna', 'slobodnu', 'slobodnoj', 'slobodne'],
        correct: 1,
        hint: 'The room is the object; the adjective copies the feminine accusative ending.',
        explanation: 'slobodnu sobu.',
      },
      {
        q: 'U nedjelju ___ kod kuće. (I will stay)',
        options: ['ostat ću', 'ću ostati', 'ostati ću', 'ću ostat'],
        correct: 1,
        hint: 'After U nedjelju the little future word must come second.',
        explanation: 'U nedjelju ću ostati kod kuće.',
      },
      {
        q: 'Što radiš ___? (at the weekend)',
        options: ['u vikend', 'za vikend', 'na vikendu', 'vikendu'],
        correct: 1,
        hint: 'One preposition is used with vikend for "at the weekend".',
        explanation: 'za vikend.',
      },
      {
        q: 'Koliko košta ___ s doručkom? (one night’s stay)',
        options: ['noćenje', 'noćenja', 'noćenju', 'noćenjem'],
        correct: 0,
        hint: 'It is the subject of košta.',
        explanation: 'noćenje — the basic form, as the subject.',
      },
      {
        type: 'type',
        q: 'Želim ____ sobu s pogledom na more. (double)',
        answer: 'dvokrevetnu',
        hint: 'Feminine accusative, the same ending as sobu.',
        explanation: 'dvokrevetnu sobu.',
      },
      {
        type: 'type',
        q: 'Sljedeći vikend ____ ići u planine. (we will)',
        answer: 'ćemo',
        hint: 'The future helper for mi, standing second.',
        explanation: 'ćemo — Sljedeći vikend ćemo ići u planine.',
      },
      {
        type: 'type',
        q: '____ ćemo na izlet u subotu. (to go)',
        answer: 'ići',
        hint: 'This infinitive ends in -ći, so it keeps its whole form before the future helper.',
        explanation: 'Ići ćemo na izlet — -ći infinitives do not shorten.',
      },
      {
        type: 'type',
        q: 'Tražimo ____ smještaj. (cheap)',
        answer: 'jeftin',
        hint: 'Masculine, not alive: the accusative keeps the basic form.',
        explanation: 'jeftin smještaj.',
      },
      {
        type: 'type',
        q: 'Ovaj vikend ____ u Split. (we are travelling)',
        answer: 'putujemo',
        hint: 'The present of putovati, mi form.',
        explanation: 'putujemo — putovati → putuj- + -emo.',
      },
      {
        q: 'Which kind of accommodation usually has its own kitchen?',
        options: ['hotelska soba', 'apartman', 'recepcija', 'bazen'],
        correct: 1,
        hint: 'Think of a flat let by a private host.',
        explanation: 'An apartman usually has a kitchen.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "U petak navečer ___ u kazalište." (I am going)',
      options: ['ideš', 'ići', 'idem', 'išao'],
      correct: 2,
      explanation: 'An arranged plan with a time word: the present idem.',
    },
    {
      q: 'Complete: "Rezervirali smo ___ apartman." (small)',
      options: ['mali', 'malog', 'malu', 'malom'],
      correct: 0,
      explanation: 'Apartman is masculine and not alive, so mali stays as it is.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Sljedeći vikend putovat ćemo u Split.',
        'Sljedeći vikend ćemo putovat u Split.',
        'Ćemo putovati sljedeći vikend u Split.',
        'Sljedeći vikend ćemo putovati u Split.',
      ],
      correct: 3,
      explanation:
        'Ćemo comes second, after Sljedeći vikend, and the infinitive is written whole: putovati.',
    },
    {
      q: 'Complete: "Želimo ___ sobu." (big)',
      options: ['velika', 'veliku', 'velike', 'velikoj'],
      correct: 1,
      explanation: 'Feminine accusative object: veliku sobu.',
    },
    {
      q: 'What is "privatni smještaj"?',
      options: [
        'a big hotel',
        'a campsite',
        'rooms or a flat let by a private owner',
        'a youth hostel',
      ],
      correct: 2,
      explanation: 'Privatni smještaj means sobe or apartmani let by a private host.',
    },
    {
      q: 'Complete: "Koliko košta ___ za dvije osobe?" (one night’s stay)',
      options: ['noćenje', 'noćenja', 'noćenju', 'noćenjem'],
      correct: 0,
      explanation: 'Noćenje is the subject of košta, so it stays in its basic form.',
    },
  ],
  vocab: [
    ['vikend', 'weekend', 'Što radiš za vikend?'],
    ['izlet', 'trip, outing', 'U subotu idemo na izlet.'],
    ['smještaj', 'accommodation', 'Tražimo jeftin smještaj.'],
    ['privatni smještaj', 'private accommodation', 'Privatni smještaj je često jeftin.'],
    ['apartman', 'holiday flat', 'Rezervirali smo mali apartman.'],
    ['dvokrevetna soba', 'double room', 'Želim dvokrevetnu sobu.'],
    ['noćenje', 'overnight stay', 'Koliko košta noćenje?'],
    ['doručak', 'breakfast', 'Doručak je uključen u cijenu.'],
    ['rezervirati', 'to book, to reserve', 'Rezervirali smo sobu.'],
    ['pogled na more', 'sea view', 'Soba ima pogled na more.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 16 · grocery-shopping — quantities with the genitive, market and supermarket
// ─────────────────────────────────────────────────────────────────────────────
const L_GROCERY_SHOPPING = {
  id: 'grocery-shopping',
  title: 'U trgovini i na tržnici',
  subtitle: 'A kilo of apples, a litre of milk, half a kilo of cheese',
  icon: '🛒',
  level: 'A2',
  duration: '~6 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: 'How Much, of What?',
      body: 'Buying food in Croatian is mostly one pattern used over and over: a word for the amount, then the food in the genitive — kilogram jabuka, litra mlijeka, boca vode. You met the genitive after quantities in A1. Here you put it to work at the market stall and the supermarket checkout, with the packaging words and the weights Croatians actually use.',
      icon: '🛒',
    },
    {
      type: 'rule',
      title: 'Amount + Genitive',
      body: 'After any word for an amount, the food goes into the genitive. Things you count (apples, eggs, tomatoes) take the genitive PLURAL: kilogram jabuka, kutija jaja, kilogram rajčica. Things you do not count (milk, water, cheese, flour) take the genitive SINGULAR: litra mlijeka, boca vode, komad sira, paket brašna.',
      highlight: 'litra mlijeka',
    },
    {
      type: 'table',
      title: 'Packaging and Amounts',
      headers: ['Croatian', 'English'],
      rows: [
        ['kilogram (kila) jabuka', 'a kilo of apples'],
        ['pola kile sira', 'half a kilo of cheese'],
        ['deset deka šunke', '100 grams of ham'],
        ['litra mlijeka', 'a litre of milk'],
        ['boca vode', 'a bottle of water'],
        ['kutija jaja', 'a box of eggs'],
        ['paket tjestenine', 'a packet of pasta'],
        ['staklenka meda', 'a jar of honey'],
        ['limenka soka', 'a can of juice'],
        ['komad kruha', 'a piece of bread'],
      ],
    },
    {
      type: 'rule',
      title: 'The Weights People Really Use',
      body: 'Kilogram is often shortened to kila in everyday speech: kila jabuka, dvije kile krumpira. Half a kilo is pola kile. At the deli counter Croatians count in deka — one deka is ten grams — so "deset deka šunke" is 100 grams of ham and "dvadeset deka sira" is 200 grams of cheese.',
      highlight: 'deset deka šunke',
    },
    {
      type: 'rule',
      title: 'The Container Has a Case Too',
      body: 'The food is always in the genitive, but the amount word does whatever job it has in the sentence. As the object of Dajte mi… or Trebam… it goes into the accusative: kila → Dajte mi kilu jabuka. Litra → Trebam litru mlijeka. Boca → Uzet ću bocu vina. Masculine kilogram and paket do not change: Trebam paket riže.',
      highlight: 'Dajte mi kilu jabuka',
    },
    {
      type: 'rule',
      title: 'Numbers With the Amount Word',
      body: 'Two, three and four take the short plural form you learned in A1, and five and above take the genitive plural — on the amount word, while the food stays in its genitive: dvije boce vode, tri kile jabuka, četiri litre mlijeka, but pet boca vode. Dva kilograma, but pet kilograma.',
      highlight: 'dvije boce vode',
    },
    {
      type: 'rule',
      title: 'At the Market and in the Supermarket',
      body: 'At the market (tržnica, in Zagreb also called plac) you buy from a stall and ask: Koliko košta kilogram rajčica? Dajte mi pola kile, molim vas. The seller asks: Je li to sve? In the supermarket you take a basket (košarica) or a trolley (kolica), pay at the checkout (blagajna), and are asked: Trebate li vrećicu? You can answer: Platit ću karticom.',
      highlight: 'Je li to sve?',
    },
    {
      type: 'example',
      title: 'At the Market',
      items: [
        {
          hr: 'Dobar dan! Koliko košta kilogram rajčica?',
          en: 'Good afternoon! How much is a kilo of tomatoes?',
          note: 'rajčica — genitive plural after kilogram',
        },
        {
          hr: 'Dajte mi kilu jabuka i pola kile grožđa, molim vas.',
          en: 'Give me a kilo of apples and half a kilo of grapes, please.',
          note: 'kilu — the object, so kila takes the accusative',
        },
        {
          hr: 'Na tržnici je voće svježe i nije skupo.',
          en: 'At the market the fruit is fresh and not expensive.',
        },
        {
          hr: 'Je li to sve? — Da, hvala, to je sve.',
          en: 'Is that everything? — Yes, thank you, that is all.',
        },
        {
          hr: 'Uzet ću pola kile sira i dvadeset deka šunke.',
          en: 'I will take half a kilo of cheese and 200 grams of ham.',
          note: 'sira, šunke — genitive singular, they are not counted',
        },
      ],
    },
    {
      type: 'example',
      title: 'In the Supermarket',
      items: [
        {
          hr: 'Trebamo litru mlijeka, kruh i bocu ulja.',
          en: 'We need a litre of milk, bread and a bottle of oil.',
          note: 'litru, bocu — accusative, as objects of trebamo',
        },
        {
          hr: 'Kupila sam kutiju jaja i paket riže.',
          en: 'I bought a box of eggs and a packet of rice.',
        },
        {
          hr: 'Dvije boce vode i tri limenke soka, molim.',
          en: 'Two bottles of water and three cans of juice, please.',
          note: 'boce, limenke — the short plural after dvije and tri',
        },
        {
          hr: 'Trebate li vrećicu? — Ne, hvala, imam svoju.',
          en: 'Do you need a bag? — No, thanks, I have my own.',
        },
        {
          hr: 'Platit ću karticom na blagajni.',
          en: 'I will pay by card at the checkout.',
        },
        {
          hr: 'U košaricu stavim staklenku meda i paket kave.',
          en: 'I put a jar of honey and a packet of coffee into the basket.',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "litra ___" (milk)',
      options: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
      correct: 1,
      explanation: 'After an amount word, the food is in the genitive: litra mlijeka.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Dajte mi ___ jabuka, molim vas." (a kilo)',
      options: ['kila', 'kilu', 'kile', 'kilom'],
      correct: 1,
      explanation:
        'Kila is the object of dajte mi, so it takes the accusative kilu; jabuka stays genitive plural.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the food in its basic form: "litra mlijeko" — after an amount word it is always the genitive: litra mlijeka. (2) Forgetting that the amount word is the object: "Dajte mi kila jabuka" — say Dajte mi kilu jabuka. (3) Using the genitive singular for things you count: "kilogram jabuke" — countable things take the genitive plural: kilogram jabuka.',
      highlight: 'litra mlijeka',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Trebam bocu ___." (water)',
          options: ['voda', 'vodu', 'vode', 'vodom'],
          correct: 2,
          explanation: 'After the amount word boca, the food is in the genitive singular: vode.',
        },
        {
          q: 'Complete: "Dajte mi kilogram ___." (apples)',
          options: ['jabuka', 'jabuke', 'jabuku', 'jabukama'],
          correct: 0,
          explanation: 'Apples are counted, so the genitive plural: jabuka.',
        },
        {
          q: 'Complete: "Molim vas, ___ mlijeka." (a litre — as the object)',
          options: ['litra', 'litre', 'litri', 'litru'],
          correct: 3,
          explanation: 'As the object, litra takes the accusative litru.',
        },
        {
          q: 'What is "deset deka šunke"?',
          options: ['ten slices of ham', '100 grams of ham', 'ten kilos of ham', 'a tin of ham'],
          correct: 1,
          explanation: 'One deka is ten grams, so ten deka is 100 grams.',
        },
        {
          q: 'Complete: "Kupila sam dvije ___ vina." (bottles)',
          options: ['boca', 'boce', 'bocu', 'bocama'],
          correct: 1,
          explanation: 'After dvije, the amount word takes the short plural: dvije boce.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Uzet ću pola kile sir.',
            'Uzet ću pola kila sira.',
            'Uzet ću pola kile sira.',
            'Uzet ću pola kilu sira.',
          ],
          correct: 2,
          explanation:
            'Pola takes the genitive kile, and the cheese is genitive singular too: pola kile sira.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'U trgovini — Key Takeaways',
      points: [
        'Amount word + food in the genitive: litra mlijeka, boca vode',
        'Counted things take the genitive plural: kilogram jabuka, kutija jaja',
        'kila, pola kile, deset deka — the weights people use',
        'As an object the amount word takes the accusative: Dajte mi kilu jabuka',
        'dvije boce, tri kile — but pet boca, pet kilograma',
        'Market: Koliko košta…? Je li to sve? · Supermarket: blagajna, vrećica, karticom',
      ],
    },
  ],
};

const P_GROCERY_SHOPPING = {
  worked: [
    {
      title: 'An Order at the Stall',
      problem: 'Prevedi: "Give me two kilos of potatoes, please."',
      en: 'Give me two kilos of potatoes, please.',
      steps: [
        {
          label: 'The request',
          text: 'To a seller: Dajte mi…, molim vas.',
        },
        {
          label: 'The amount',
          text: 'Two kilos: after dvije the amount word takes the short plural kile.',
        },
        {
          label: 'The food',
          text: 'After any amount, the food is genitive: krumpir → krumpira.',
        },
      ],
      answer: 'Dajte mi dvije kile krumpira, molim vas.',
    },
    {
      title: 'A Shopping List',
      problem: 'Prevedi: "We need a litre of milk and a box of eggs."',
      en: 'We need a litre of milk and a box of eggs.',
      steps: [
        {
          label: 'The verb',
          text: 'We need is trebamo, and what we need is its object.',
        },
        {
          label: 'Amount words as objects',
          text: 'litra → litru, kutija → kutiju — feminine accusative.',
        },
        {
          label: 'The food',
          text: 'Milk is not counted: mlijeka. Eggs are counted: jaja, genitive plural.',
        },
      ],
      answer: 'Trebamo litru mlijeka i kutiju jaja.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Kupio sam kutiju ___. (eggs)',
        options: ['jaje', 'jaja', 'jajima', 'jajem'],
        correct: 1,
        hint: 'Eggs are counted, so the genitive plural.',
        explanation: 'kutija jaja — genitive plural.',
      },
      {
        q: 'Trebamo bocu ___. (oil)',
        options: ['ulje', 'ulju', 'ulja', 'uljem'],
        correct: 2,
        hint: 'Oil is not counted: genitive singular.',
        explanation: 'boca ulja.',
      },
      {
        q: 'Dajte mi ___ sira, molim vas. (half a kilo)',
        options: ['pola kile', 'pola kila', 'pola kilu', 'pola kilom'],
        correct: 0,
        hint: 'Pola is an amount word too, so kila after it goes into the genitive.',
        explanation: 'pola kile sira.',
      },
      {
        q: 'Koliko košta kilogram ___? (oranges)',
        options: ['naranču', 'naranče', 'narančom', 'naranča'],
        correct: 3,
        hint: 'Oranges are counted; the genitive plural here looks just like the basic form.',
        explanation: 'kilogram naranča — the genitive plural looks like the basic form.',
      },
      {
        q: 'Kupila sam pet ___ vode. (bottles)',
        options: ['boca', 'boce', 'bocu', 'bocama'],
        correct: 0,
        hint: 'Five and above take the genitive plural of the amount word.',
        explanation: 'pet boca vode.',
      },
      {
        q: 'Gdje plaćate u supermarketu?',
        options: ['na blagajni', 'na štandu', 'u košarici', 'na tržnici'],
        correct: 0,
        hint: 'It is the place with the till.',
        explanation: 'na blagajni — at the checkout.',
      },
      {
        type: 'type',
        q: 'Trebam litru ____. (milk)',
        answer: 'mlijeka',
        hint: 'Genitive singular: milk is not counted.',
        explanation: 'litra mlijeka.',
      },
      {
        type: 'type',
        q: 'Dajte mi ____ jabuka. (a kilo — as the object)',
        answer: 'kilu',
        hint: 'The amount word kila is the object here.',
        explanation: 'kilu — the accusative of kila.',
      },
      {
        type: 'type',
        q: 'Uzet ću dvadeset deka ____. (ham)',
        answer: 'šunke',
        hint: 'Genitive singular of šunka.',
        explanation: 'dvadeset deka šunke — 200 grams of ham.',
      },
      {
        type: 'type',
        q: 'Kupio sam dvije ____ vina. (bottles)',
        answer: 'boce',
        hint: 'After dvije the amount word takes the short plural.',
        explanation: 'dvije boce vina.',
      },
      {
        type: 'type',
        q: 'Kupila sam paket ____. (rice)',
        answer: 'riže',
        hint: 'Genitive singular of riža.',
        explanation: 'paket riže.',
      },
      {
        q: 'What does "Je li to sve?" mean?',
        options: ['How much is it?', 'Is that everything?', 'Do you need a bag?', 'Is it fresh?'],
        correct: 1,
        hint: 'The seller asks this when you seem to have finished.',
        explanation: 'Je li to sve? — Is that everything?',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Trebamo kutiju ___." (eggs)',
      options: ['jaja', 'jaje', 'jajima', 'jajem'],
      correct: 0,
      explanation: 'Eggs are counted: genitive plural jaja.',
    },
    {
      q: 'Complete: "Koliko košta kilogram ___?" (tomatoes)',
      options: ['rajčice', 'rajčicu', 'rajčicom', 'rajčica'],
      correct: 3,
      explanation: 'Tomatoes are counted: genitive plural rajčica.',
    },
    {
      q: 'Complete: "Dajte mi ___ ulja, molim vas." (a bottle)',
      options: ['boca', 'bocu', 'boce', 'bocom'],
      correct: 1,
      explanation: 'The bottle is the object of dajte mi: accusative bocu.',
    },
    {
      q: 'Which means "half a kilo of cheese"?',
      options: ['pola kilo sira', 'pola sira kile', 'pola kile sira', 'pola kile sir'],
      correct: 2,
      explanation: 'Pola + genitive kile, and the cheese in the genitive: pola kile sira.',
    },
    {
      q: 'Complete: "U supermarketu plaćam na ___." (checkout)',
      options: ['blagajni', 'blagajna', 'blagajnu', 'blagajnom'],
      correct: 0,
      explanation: 'Where you pay is a place: na + locative blagajni.',
    },
    {
      q: 'Complete: "Kupio sam šest ___ vode." (bottles)',
      options: ['boce', 'bocu', 'bocom', 'boca'],
      correct: 3,
      explanation: 'After six, the amount word takes the genitive plural: šest boca.',
    },
  ],
  vocab: [
    ['tržnica', 'market (open-air)', 'Na tržnici je voće svježe.'],
    ['kilogram', 'kilogram', 'Koliko košta kilogram jabuka?'],
    ['litra', 'litre', 'Trebam litru mlijeka.'],
    ['boca', 'bottle', 'Uzet ću bocu vina.'],
    ['kutija', 'box', 'Kupila sam kutiju jaja.'],
    ['staklenka', 'jar', 'Staklenka meda je na stolu.'],
    ['limenka', 'can', 'Tri limenke soka, molim.'],
    ['blagajna', 'checkout, till', 'Platit ću na blagajni.'],
    ['košarica', 'shopping basket', 'Uzmi košaricu.'],
    ['vrećica', 'small bag', 'Trebate li vrećicu?'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 17 · visiting-customs — arriving, bringing, staying, leaving
// ─────────────────────────────────────────────────────────────────────────────
const L_VISITING_CUSTOMS = {
  id: 'visiting-customs',
  title: 'U gostima',
  subtitle: 'Visiting a Croatian home: what to bring, what to say, how to leave',
  icon: '💐',
  level: 'A2',
  duration: '~6 min',
  color: '#be185d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'You Are Invited',
      body: 'Being invited into a Croatian home — for coffee, for Sunday lunch, for a family celebration — comes with its own small script. There are a handful of phrases everybody uses at the door, at the table and on the way out, and a few customs that tell a polite guest from a careless one.',
      icon: '💐',
    },
    {
      type: 'rule',
      title: 'Arriving',
      body: 'Guests usually arrive about a quarter of an hour after the invited time, and that is perfectly normal; arriving early is awkward, because the host is still getting ready. If you are really late, phone ahead, and at the door say: Oprostite što kasnim (Sorry I am late). Treat "Oprostite što…" as a fixed opening: what follows is an ordinary present-tense verb. To a friend you use ti: Oprosti što kasnim.',
      highlight: 'Oprostite što kasnim.',
    },
    {
      type: 'rule',
      title: 'What to Bring',
      body: 'Never arrive empty-handed. The usual gifts are flowers (cvijeće), a bottle of wine (boca vina), a cake (kolač or torta) or a box of chocolates (bombonijera), and something small for the children. Do not bring chrysanthemums (krizanteme): in Croatia they are the flowers for the cemetery, carried to graves on All Saints’ Day (Svi sveti).',
      highlight: 'krizanteme',
    },
    {
      type: 'rule',
      title: 'At the Door',
      body: 'The host greets you: Dobro došli! Izvolite, uđite! Many Croatians take their shoes off at home and the host may offer slippers (papuče). If you are not sure, ask: Trebam li se izuti? (Should I take my shoes off?) The host may say: Ne, ne treba — slobodno uđite.',
      highlight: 'Trebam li se izuti?',
    },
    {
      type: 'rule',
      title: 'At the Table',
      body: 'Hosts offer food again and again: Poslužite se! (Help yourself!) Uzmite još! (Take more!) A polite guest waits to be offered at least twice before helping themselves properly, and then accepts a second helping; when you really cannot, say Hvala, sit sam / sita sam (Thank you, I am full). When glasses are raised everyone says Živjeli! and looks each other in the eye. Before eating, people wish each other Dobar tek!',
      highlight: 'Poslužite se!',
    },
    {
      type: 'rule',
      title: 'Leaving',
      body: 'Leaving usually takes a while. Start with Moram ići (I have to go), and thank the hosts: Hvala na pozivu (Thanks for the invitation), Hvala na ručku / na večeri. After hvala na, the noun is in the locative. Bilo je jako lijepo (It was really lovely) and Pozdravite svoju obitelj (Give my regards to your family) are the warm finish. The host answers: Hvala što ste došli!',
      highlight: 'Hvala na pozivu',
    },
    {
      type: 'table',
      title: 'Who Says What',
      headers: ['moment', 'guest says', 'host says'],
      rows: [
        ['arriving late', 'Oprostite što kasnim.', 'Nema problema, uđite!'],
        ['at the door', 'Dobar dan! Ovo je za vas.', 'Dobro došli! Izvolite!'],
        ['shoes', 'Trebam li se izuti?', 'Ne treba. / Evo vam papuče.'],
        ['at the table', 'Jako je ukusno!', 'Poslužite se! Uzmite još!'],
        ['refusing more', 'Hvala, sita sam.', 'Samo još malo!'],
        ['leaving', 'Moram ići. Hvala na pozivu.', 'Hvala što ste došli!'],
      ],
    },
    {
      type: 'example',
      title: 'Arriving and Sitting Down',
      items: [
        {
          hr: 'Oprostite što kasnim, bila je velika gužva na cesti.',
          en: 'Sorry I am late, there was a lot of traffic on the road.',
        },
        {
          hr: 'Izvolite, ovo je za vas — malo cvijeća i boca vina.',
          en: 'Here you are, this is for you — some flowers and a bottle of wine.',
          note: 'cvijeća — genitive after malo',
        },
        {
          hr: 'Dobro došli! Uđite, molim vas.',
          en: 'Welcome! Come in, please.',
        },
        {
          hr: 'Trebam li se izuti? — Ne, ne treba, slobodno uđite.',
          en: 'Should I take my shoes off? — No, there is no need, do come in.',
        },
        {
          hr: 'Poslužite se, ima još kolača u kuhinji.',
          en: 'Help yourselves, there is more cake in the kitchen.',
        },
        {
          hr: 'Hvala, jako je ukusno, ali stvarno sam sita.',
          en: 'Thank you, it is delicious, but I am really full.',
          note: 'sita — a woman speaking; a man says sit',
        },
      ],
    },
    {
      type: 'example',
      title: 'Toasts and Goodbyes',
      items: [
        {
          hr: 'Živjeli! I hvala na pozivu.',
          en: 'Cheers! And thank you for the invitation.',
          note: 'pozivu — locative after hvala na',
        },
        {
          hr: 'Moram ići, sutra rano radim.',
          en: 'I have to go, I start work early tomorrow.',
        },
        {
          hr: 'Bilo je jako lijepo, hvala na večeri.',
          en: 'It was really lovely, thank you for dinner.',
        },
        {
          hr: 'Pozdravite svoju obitelj!',
          en: 'Give my regards to your family!',
          note: 'svoju — the family belongs to the person you are speaking to, the subject of the command',
        },
        {
          hr: 'Hvala što ste došli, vidimo se uskoro!',
          en: 'Thank you for coming, see you soon!',
        },
        {
          hr: 'Donijela sam kolač za djecu.',
          en: 'I have brought a cake for the children.',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'You arrive twenty minutes late. What do you say at the door?',
      options: ['Moram ići.', 'Oprostite što kasnim.', 'Živjeli!'],
      correct: 1,
      explanation: 'Oprostite što kasnim — Sorry I am late. Moram ići is for leaving.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Putting the wrong case after hvala na: "Hvala na poziv" — the noun takes the locative: Hvala na pozivu, Hvala na večeri. (2) Using ti with your friend’s parents: say Hvala vam na pozivu and Izvolite to people you would address formally, and keep ti for friends. (3) Bringing chrysanthemums as a gift: in Croatia they are cemetery flowers. Choose other flowers, wine or a cake.',
      highlight: 'Hvala na pozivu',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'You arrive late. Which sentence apologises?',
          options: [
            'Oprostite što kasnim.',
            'Oprostite što kasnite.',
            'Hvala što kasnim.',
            'Moram kasniti.',
          ],
          correct: 0,
          explanation: 'Oprostite što kasnim — the verb is about you, so the ja form kasnim.',
        },
        {
          q: 'Complete: "Hvala na ___." (invitation)',
          options: ['poziv', 'poziva', 'pozivom', 'pozivu'],
          correct: 3,
          explanation: 'After hvala na, the noun is in the locative: pozivu.',
        },
        {
          q: 'Which flowers should you NOT bring to a Croatian home?',
          options: ['ruže', 'tulipane', 'krizanteme', 'suncokrete'],
          correct: 2,
          explanation: 'Chrysanthemums are the flowers taken to the cemetery.',
        },
        {
          q: 'The host says "Poslužite se!" What does it mean?',
          options: ['Sit down!', 'Help yourself!', 'Come in!', 'Take your shoes off!'],
          correct: 1,
          explanation: 'Poslužite se — help yourself (to the food).',
        },
        {
          q: 'Complete: "Moram ___, sutra rano radim." (go)',
          options: ['ići', 'idem', 'išla', 'ide'],
          correct: 0,
          explanation: 'After moram comes the infinitive: ići.',
        },
        {
          q: 'What do people say when they raise their glasses?',
          options: ['Dobar tek!', 'Izvolite!', 'Uživajte!', 'Živjeli!'],
          correct: 3,
          explanation: 'Živjeli! is the toast. Dobar tek is said before eating.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'U gostima — Key Takeaways',
      points: [
        'About fifteen minutes after the invited time is normal; if very late: Oprostite što kasnim',
        'Bring flowers, wine, a cake or chocolates — never chrysanthemums',
        'Dobro došli! Izvolite, uđite! · Trebam li se izuti?',
        'Poslužite se! Uzmite još! · Hvala, sita sam · Živjeli! · Dobar tek!',
        'Leaving: Moram ići. Hvala na pozivu. Bilo je jako lijepo.',
        'Hvala na + locative: na pozivu, na ručku, na večeri',
      ],
    },
  ],
};

const P_VISITING_CUSTOMS = {
  worked: [
    {
      title: 'Thanking the Hosts',
      problem: 'Prevedi, roditeljima prijatelja: "Thank you for lunch, it was really lovely."',
      en: 'Say to a friend’s parents: Thank you for lunch, it was really lovely.',
      steps: [
        {
          label: 'Who you are talking to',
          text: 'Your friend’s parents get the formal vi: hvala vam.',
        },
        {
          label: 'What you thank them for',
          text: 'After hvala na the noun is in the locative: ručak → ručku.',
        },
        {
          label: 'It was lovely',
          text: 'Bilo je jako lijepo — the neuter past of biti, with je second.',
        },
      ],
      answer: 'Hvala vam na ručku, bilo je jako lijepo.',
    },
    {
      title: 'Late, With a Gift',
      problem: 'Prevedi: "Sorry I am late! This is for you."',
      en: 'Sorry I am late! This is for you.',
      steps: [
        {
          label: 'The apology',
          text: 'The fixed opening Oprostite što… is followed by a present verb.',
        },
        {
          label: 'The verb',
          text: 'To be late is kasniti; I am late is kasnim.',
        },
        {
          label: 'The gift',
          text: 'This is for you: Ovo je za vas — za takes the accusative vas.',
        },
      ],
      answer: 'Oprostite što kasnim! Ovo je za vas.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Hvala vam na ___. (dinner)',
        options: ['večera', 'večeri', 'večeru', 'večerom'],
        correct: 1,
        hint: 'After hvala na, the locative — feminine nouns end in -i here.',
        explanation: 'na večeri.',
      },
      {
        q: 'The host opens the door. What does she say?',
        options: ['Moram ići!', 'Dobro došli!', 'Sita sam!', 'Oprostite što kasnim!'],
        correct: 1,
        hint: 'She is greeting guests who are arriving.',
        explanation: 'Dobro došli! — Welcome!',
      },
      {
        q: 'Which gift is a bad idea?',
        options: ['boca vina', 'kolač', 'krizanteme', 'bombonijera'],
        correct: 2,
        hint: 'One of these belongs on a grave.',
        explanation: 'krizanteme — cemetery flowers.',
      },
      {
        q: 'You want to know whether to take your shoes off. You ask:',
        options: ['Trebam li se izuti?', 'Mogu li sjesti?', 'Gdje je kuhinja?', 'Je li to sve?'],
        correct: 0,
        hint: 'The verb you need means "to take off one’s shoes".',
        explanation: 'Trebam li se izuti?',
      },
      {
        q: 'To a friend: "Sorry I am late!"',
        options: [
          'Oprostite što kasnim!',
          'Oprosti što kasnim!',
          'Oprosti što kasniš!',
          'Oprostite što kasnite!',
        ],
        correct: 1,
        hint: 'A friend gets ti — and the lateness is yours.',
        explanation: 'Oprosti što kasnim!',
      },
      {
        q: 'You are full and cannot eat more (a man speaking).',
        options: ['Hvala, sit sam.', 'Hvala, sita sam.', 'Hvala, siti smo.', 'Hvala, sito je.'],
        correct: 0,
        hint: 'The adjective agrees with a man speaking about himself.',
        explanation: 'sit sam — a woman says sita sam.',
      },
      {
        type: 'type',
        q: 'Hvala na ____! (invitation)',
        answer: 'pozivu',
        hint: 'The locative of poziv.',
        explanation: 'Hvala na pozivu.',
      },
      {
        type: 'type',
        q: 'Moram ____, kasno je. (to go)',
        answer: 'ići',
        hint: 'After moram, the infinitive.',
        explanation: 'Moram ići.',
      },
      {
        type: 'type',
        q: '____ se, ima još kolača! (help yourselves)',
        answer: 'Poslužite',
        hint: 'The host’s polite command, from poslužiti se.',
        explanation: 'Poslužite se!',
      },
      {
        type: 'type',
        q: 'Hvala na ____. (lunch)',
        answer: 'ručku',
        hint: 'The locative of ručak — the a in the last syllable drops out.',
        explanation: 'na ručku.',
      },
      {
        type: 'type',
        q: 'Oprostite što ____. (I am late)',
        answer: 'kasnim',
        hint: 'The ja form of kasniti.',
        explanation: 'Oprostite što kasnim.',
      },
      {
        q: 'Before the meal everyone says:',
        options: ['Živjeli!', 'Dobar tek!', 'Laku noć!', 'Sretan put!'],
        correct: 1,
        hint: 'It wishes you a good appetite.',
        explanation: 'Dobar tek! — enjoy your meal.',
      },
    ],
  },
  checkB: [
    {
      q: 'You thank the hosts for dinner. Which is correct?',
      options: ['Hvala na večera.', 'Hvala na večeri.', 'Hvala na večeru.', 'Hvala na večerom.'],
      correct: 1,
      explanation: 'After hvala na, the locative: večeri.',
    },
    {
      q: 'What does the host say when you arrive?',
      options: ['Moram ići!', 'Oprostite što kasnim!', 'Dobro došli!', 'Siti smo!'],
      correct: 2,
      explanation: 'Dobro došli! — Welcome!',
    },
    {
      q: 'Complete: "Trebam li se ___?" (take my shoes off)',
      options: ['izuti', 'izujem', 'izuo', 'izut'],
      correct: 0,
      explanation: 'After trebam li comes the infinitive: izuti.',
    },
    {
      q: 'What does "Sita sam" mean?',
      options: ['I am tired.', 'I am happy.', 'I am late.', 'I am full.'],
      correct: 3,
      explanation: 'Sita sam — I am full (a woman speaking).',
    },
    {
      q: 'You visit your friend’s parents for the first time. Which do you say?',
      options: [
        'Hvala ti na pozivu.',
        'Hvala tebi na poziv.',
        'Hvala vam na pozivu.',
        'Hvala vama na poziv.',
      ],
      correct: 2,
      explanation: 'Formal vam for people you do not know well, and the locative pozivu.',
    },
    {
      q: 'Complete: "Pozdravite ___ obitelj!" (your own)',
      options: ['svoja', 'svoju', 'svojoj', 'svoje'],
      correct: 1,
      explanation: 'Obitelj is a feminine object, so the accusative svoju.',
    },
  ],
  vocab: [
    ['poziv', 'invitation', 'Hvala na pozivu.'],
    ['gost', 'guest', 'Danas imamo goste.'],
    ['cvijeće', 'flowers', 'Donijela sam cvijeće.'],
    ['bombonijera', 'box of chocolates', 'Kupio sam bombonijeru.'],
    ['kasniti', 'to be late', 'Oprostite što kasnim.'],
    ['izuti se', 'to take one’s shoes off', 'Trebam li se izuti?'],
    ['papuče', 'slippers', 'Evo vam papuče.'],
    ['poslužiti se', 'to help oneself (to food)', 'Poslužite se!'],
    ['sit / sita', 'full (after eating)', 'Hvala, sita sam.'],
    ['Živjeli!', 'Cheers!', 'Živjeli! Hvala na pozivu.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 18 · locative-adjectives — u velikom gradu, u mojoj kući, o svojoj obitelji
// ─────────────────────────────────────────────────────────────────────────────
const L_LOCATIVE_ADJECTIVES = {
  id: 'locative-adjectives',
  title: 'U velikom gradu — the Locative of Adjectives',
  subtitle: 'Adjectives, this and that, my and your — and svoj — after u, na, o, po',
  icon: '🏙️',
  level: 'A2',
  duration: '~6 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Where You Live, What You Talk About',
      body: 'You already put nouns in the locative: u gradu, na plaži, o obitelji. But as soon as you say WHICH town or WHOSE family — u velikom gradu, o svojoj obitelji — every word in front of the noun has to follow it into the locative. The good news: there are only three endings to learn.',
      icon: '🏙️',
    },
    {
      type: 'rule',
      title: 'Masculine and Neuter: -om (or -em)',
      body: 'An adjective in front of a masculine or neuter noun in the locative ends in -om: velik → u velikom gradu, mali → u malom selu, nov → u novom stanu. If the adjective’s stem ends in a "soft" consonant — c, č, ć, dž, đ, j, lj, nj, š or ž — the ending is -em instead: vruć → na vrućem pijesku, svjež → na svježem zraku, naš → u našem gradu.',
      highlight: 'u velikom gradu',
    },
    {
      type: 'rule',
      title: 'Feminine: -oj',
      body: 'In front of a feminine noun the ending is always -oj, soft stem or not: velika → u velikoj kući, lijepa → na lijepoj plaži, naša → u našoj ulici, vruća → u vrućoj sobi.',
      highlight: 'u velikoj kući',
    },
    {
      type: 'rule',
      title: 'This, That, My, Your',
      body: 'Demonstratives and possessives take the same endings. Taj → u tom gradu, u toj kući. Ovaj → u ovom, u ovoj. Onaj → u onom, u onoj. Moj → u mom (or mojem) stanu, u mojoj sobi; tvoj the same. Naš, vaš → u našem, u našoj. Njegov, njezin, njihov → u njegovom, u njezinoj, u njihovom.',
      highlight: 'u tom gradu, u toj kući',
    },
    {
      type: 'rule',
      title: 'Svoj in the Locative',
      body: 'Svoj still points back at the subject, and it declines like moj: o svom (or svojem) poslu, o svojoj obitelji. Ana priča o svojoj obitelji means Ana is talking about her OWN family; Ana priča o njezinoj obitelji means another woman’s family.',
      highlight: 'o svojoj obitelji',
    },
    {
      type: 'rule',
      title: 'The Plural: -im',
      body: 'In the plural, every gender takes -im in front of a noun ending in -ima or -ama: u velikim gradovima, na lijepim plažama, o svojim prijateljima, u ovim zgradama.',
      highlight: 'u velikim gradovima',
    },
    {
      type: 'rule',
      title: 'Where, What About — and When',
      body: 'The locative answers three questions. Gdje? (where) — u velikom gradu. O čemu? (about what) — o novom poslu. And Kada? (when) for a longer stretch of time named with u: u devetnaestom stoljeću (in the 19th century), u prošlom stoljeću, u ovom mjesecu. Written with a number, the dot shows the ordinal: u 19. stoljeću, read as u devetnaestom stoljeću. The ordinal is an adjective, so it takes the same -om you have just learned.',
      highlight: 'u devetnaestom stoljeću',
    },
    {
      type: 'table',
      title: 'The Locative Endings at a Glance',
      headers: ['word', 'masculine / neuter', 'feminine', 'plural'],
      rows: [
        ['velik', 'velikom', 'velikoj', 'velikim'],
        ['vruć (soft stem)', 'vrućem', 'vrućoj', 'vrućim'],
        ['taj / ta / to', 'tom', 'toj', 'tim'],
        ['ovaj', 'ovom', 'ovoj', 'ovim'],
        ['moj', 'mom (mojem)', 'mojoj', 'mojim'],
        ['svoj', 'svom (svojem)', 'svojoj', 'svojim'],
        ['naš', 'našem', 'našoj', 'našim'],
        ['njegov', 'njegovom', 'njegovoj', 'njegovim'],
      ],
    },
    {
      type: 'example',
      title: 'Where Things Are',
      items: [
        {
          hr: 'Živim u velikom gradu, ali volim mir i tišinu.',
          en: 'I live in a big city, but I love peace and quiet.',
          note: 'velikom — masculine locative, -om',
        },
        {
          hr: 'Moji roditelji žive u malom selu blizu Osijeka.',
          en: 'My parents live in a small village near Osijek.',
          note: 'malom — neuter locative, -om',
        },
        {
          hr: 'Na toj plaži uvijek ima puno ljudi.',
          en: 'There are always a lot of people on that beach.',
          note: 'toj — the feminine locative of ta',
        },
        {
          hr: 'U našem stanu nema balkona.',
          en: 'There is no balcony in our flat.',
          note: 'našem — naš has a soft stem, so -em',
        },
        {
          hr: 'Djeca se igraju na vrućem pijesku.',
          en: 'The children are playing on the hot sand.',
          note: 'vrućem — vruć ends in ć, so -em',
        },
        {
          hr: 'Moj brat radi na jednom velikom brodu.',
          en: 'My brother works on a big ship.',
          note: 'jednom velikom — both words take -om',
        },
      ],
    },
    {
      type: 'example',
      title: 'What People Talk About',
      items: [
        {
          hr: 'Ana često priča o svojoj obitelji.',
          en: 'Ana often talks about her (own) family.',
          note: 'svojoj — the family is Ana’s own',
        },
        {
          hr: 'Stanujemo u ovoj zgradi već pet godina.',
          en: 'We have been living in this building for five years.',
          note: 'ovoj — the feminine locative of ova',
        },
        {
          hr: 'Što misliš o njegovom novom poslu?',
          en: 'What do you think about his new job?',
          note: 'njegovom novom — both words take -om',
        },
        {
          hr: 'Na mom stolu je puno papira.',
          en: 'There is a lot of paper on my desk.',
          note: 'mom — the short form of mojem',
        },
        {
          hr: 'Ljeti se kupamo u toplom moru.',
          en: 'In summer we swim in the warm sea.',
          note: 'toplom — neuter locative, -om',
        },
        {
          hr: 'Ivan priča o svojim prijateljima iz škole.',
          en: 'Ivan is talking about his friends from school.',
          note: 'svojim — plural locative, -im',
        },
        {
          hr: 'Ovu crkvu su gradili u devetnaestom stoljeću.',
          en: 'They built this church in the 19th century.',
          note: 'u devetnaestom stoljeću — the locative of time',
        },
        {
          hr: 'U ovom mjesecu imamo puno posla.',
          en: 'This month we have a lot of work.',
          note: 'u ovom mjesecu — when? also the locative',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Živim u ___ kući." (big)',
      options: ['velika', 'veliku', 'velikoj', 'velikom'],
      correct: 2,
      explanation: 'Kući is a feminine locative, so the adjective takes -oj: velikoj.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Radim u ___ gradu." (this)',
      options: ['ovom', 'ovoj', 'ovaj', 'ovu'],
      correct: 0,
      explanation: 'Gradu is a masculine locative, so ovaj becomes ovom.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the adjective behind: "Živim u veliki grad" — that sentence talks about moving INTO a city. For where you live, both words take the locative: Živim u velikom gradu. (2) Using -om after a soft stem: "u našom gradu" — naš ends in š, so the ending is -em: u našem gradu. (3) Giving a feminine noun the masculine ending: "u velikom kući" — feminine is always -oj: u velikoj kući.',
      highlight: 'u našem gradu',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Moja baka živi u ___ selu." (small)',
          options: ['mali', 'malom', 'maloj', 'malo'],
          correct: 1,
          explanation: 'Selo is neuter; in the locative the adjective takes -om: malom.',
        },
        {
          q: 'Complete: "Na ___ plaži ima puno turista." (that)',
          options: ['taj', 'tom', 'toj', 'tu'],
          correct: 2,
          explanation: 'Plaža is feminine, so the locative of ta is toj.',
        },
        {
          q: 'Complete: "U ___ stanu je hladno." (our)',
          options: ['našem', 'našom', 'našoj', 'naš'],
          correct: 0,
          explanation: 'Stan is masculine and naš has a soft stem, so -em: našem.',
        },
        {
          q: 'Complete: "Marko priča o ___ sestri." (his own)',
          options: ['svom', 'njegovoj', 'svoju', 'svojoj'],
          correct: 3,
          explanation:
            'The sister is Marko’s own, so svoj, in the feminine locative: svojoj. Njegovoj would be another man’s sister.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Živim u veliki grad.',
            'Živim u velikoj gradu.',
            'Živim u velikom gradu.',
            'Živim u velikim grad.',
          ],
          correct: 2,
          explanation: 'Where you live: u + locative, with -om on the masculine adjective.',
        },
        {
          q: 'Complete: "Djeca trče po ___ pijesku." (hot)',
          options: ['vrućom', 'vrućem', 'vrućoj', 'vruć'],
          correct: 1,
          explanation: 'Vruć ends in ć, a soft consonant, so the masculine locative is vrućem.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'The Locative of Adjectives — Key Takeaways',
      points: [
        'Masculine and neuter: -om — u velikom gradu, u malom selu',
        'After a soft stem (c, č, ć, dž, đ, j, lj, nj, š, ž): -em — u našem gradu',
        'Feminine: always -oj — u velikoj kući, na toj plaži',
        'taj → tom / toj, moj → mom / mojoj, njegov → njegovom / njegovoj',
        'svoj points back at the subject: o svojoj obitelji',
        'Plural: -im for every gender — u velikim gradovima',
      ],
    },
  ],
};

const P_LOCATIVE_ADJECTIVES = {
  worked: [
    {
      title: 'Two Words Follow the Noun',
      problem: 'Prevedi: "We live in a new building."',
      en: 'We live in a new building.',
      steps: [
        {
          label: 'Where, not where to',
          text: 'Living somewhere is a location, so u takes the locative.',
        },
        {
          label: 'The noun',
          text: 'Zgrada is feminine: u zgradi.',
        },
        {
          label: 'The adjective',
          text: 'In front of a feminine locative the ending is -oj: nova → novoj.',
        },
      ],
      answer: 'Živimo u novoj zgradi.',
    },
    {
      title: 'Svoj After o',
      problem: 'Prevedi: "Petar is talking about his (own) job."',
      en: 'Petar is talking about his (own) job.',
      steps: [
        {
          label: 'Whose job?',
          text: 'Petar’s own, and Petar is the subject — so svoj.',
        },
        {
          label: 'The case',
          text: 'Pričati o takes the locative: posao → o poslu.',
        },
        {
          label: 'The ending',
          text: 'Posao is masculine, so svoj → svom (or svojem).',
        },
      ],
      answer: 'Petar priča o svom poslu.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Radim u ___ uredu. (new)',
        options: ['novom', 'novoj', 'novi', 'novem'],
        correct: 0,
        hint: 'Ured is masculine and the stem is not soft.',
        explanation: 'u novom uredu.',
      },
      {
        q: 'U ___ kući imamo vrt. (my)',
        options: ['mom', 'moja', 'moju', 'mojoj'],
        correct: 3,
        hint: 'Kuća is feminine: the locative ending is -oj.',
        explanation: 'u mojoj kući.',
      },
      {
        q: 'Što znaš o ___ gradu? (this)',
        options: ['ovaj', 'ovom', 'ovoj', 'ovu'],
        correct: 1,
        hint: 'Grad is masculine; ovaj takes the masculine locative ending.',
        explanation: 'o ovom gradu.',
      },
      {
        q: 'Petra piše o ___ putovanju. (her own)',
        options: ['njezinom', 'svojoj', 'svom', 'svoje'],
        correct: 2,
        hint: 'The trip is the subject’s own, and putovanje is neuter.',
        explanation: 'o svom putovanju.',
      },
      {
        q: 'U ___ gradu ima puno parkova. (your — to a group)',
        options: ['vašom', 'vašem', 'vašoj', 'vaš'],
        correct: 1,
        hint: 'Vaš has a soft stem; grad is masculine.',
        explanation: 'u vašem gradu.',
      },
      {
        q: 'Ljeti radimo na ___ otocima. (small — plural)',
        options: ['malom', 'maloj', 'malim', 'mali'],
        correct: 2,
        hint: 'In the plural every gender takes the same ending.',
        explanation: 'na malim otocima.',
      },
      {
        type: 'type',
        q: 'Živim u ____ gradu. (big)',
        answer: 'velikom',
        hint: 'Masculine locative; the stem is not soft.',
        explanation: 'u velikom gradu.',
      },
      {
        type: 'type',
        q: 'Na ____ plaži ima puno ljudi. (that)',
        answer: 'toj',
        hint: 'Plaža is feminine; take the locative of ta.',
        explanation: 'na toj plaži.',
      },
      {
        type: 'type',
        q: 'U ____ stanu nema balkona. (our)',
        answer: 'našem',
        hint: 'A soft stem, and stan is masculine.',
        explanation: 'u našem stanu.',
      },
      {
        type: 'type',
        q: 'Ana priča o ____ obitelji. (her own)',
        answer: 'svojoj',
        hint: 'The family is the subject’s own, and obitelj is feminine.',
        explanation: 'o svojoj obitelji.',
      },
      {
        type: 'type',
        q: 'Djeca se igraju na ____ pijesku. (hot)',
        answer: 'vrućem',
        hint: 'The stem ends in ć, a soft consonant.',
        explanation: 'na vrućem pijesku.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Stanujem u velikom kući.',
          'Stanujem u velikoj kući.',
          'Stanujem u veliku kuću.',
          'Stanujem u velika kuća.',
        ],
        correct: 1,
        hint: 'Where you live: locative, and kuća is feminine.',
        explanation: 'u velikoj kući.',
      },
      {
        q: 'Baka priča o životu u ___ stoljeću. (the 20th — dvadeseti)',
        options: ['dvadeseti', 'dvadesetom', 'dvadesetoj', 'dvadeseto'],
        correct: 1,
        hint: 'When? u + the locative; stoljeće is neuter.',
        explanation: 'u dvadesetom stoljeću — the locative of time, -om.',
      },
      {
        type: 'type',
        q: 'U ____ stoljeću ljudi nisu imali struju. (the 18th — osamnaesti)',
        answer: 'osamnaestom',
        hint: 'u + the locative for a stretch of time; the ordinal takes the neuter ending.',
        explanation: 'u osamnaestom stoljeću.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Radim u ___ uredu." (new)',
      options: ['novom', 'novoj', 'novi', 'novem'],
      correct: 0,
      explanation: 'Masculine locative with a hard stem: novom.',
    },
    {
      q: 'Complete: "U ___ sobi spava beba." (that)',
      options: ['tom', 'ta', 'tu', 'toj'],
      correct: 3,
      explanation: 'Soba is feminine, so the locative of ta is toj.',
    },
    {
      q: 'Complete: "Što znaš o ___ selu?" (this)',
      options: ['ovaj', 'ovom', 'ovoj', 'ovo'],
      correct: 1,
      explanation: 'Selo is neuter; neuter and masculine share the ending: ovom.',
    },
    {
      q: 'Complete: "Luka piše o ___ putovanju." (his own)',
      options: ['njegovom', 'svojoj', 'svom', 'svoje'],
      correct: 2,
      explanation: 'The trip is Luka’s own and putovanje is neuter: svom.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'U našom gradu ima puno parkova.',
        'U naš grad ima puno parkova.',
        'U našoj gradu ima puno parkova.',
        'U našem gradu ima puno parkova.',
      ],
      correct: 3,
      explanation: 'Naš has a soft stem, so the masculine locative is našem.',
    },
    {
      q: 'Complete: "Živimo u ___ gradovima." (big — plural)',
      options: ['velikim', 'velikom', 'velikoj', 'veliki'],
      correct: 0,
      explanation: 'The plural locative of every adjective ends in -im.',
    },
  ],
  vocab: [
    ['selo', 'village', 'Žive u malom selu.'],
    ['stoljeće', 'century', 'Živimo u dvadeset prvom stoljeću.'],
    ['zgrada', 'building', 'Stanujemo u ovoj zgradi.'],
    ['pijesak', 'sand', 'Djeca su na vrućem pijesku.'],
    ['brod', 'ship', 'Radi na velikom brodu.'],
    ['otok', 'island', 'Ručali smo na tom otoku.'],
    ['ulica', 'street', 'Živim u mirnoj ulici.'],
    ['pričati o', 'to talk about', 'Priča o svojoj obitelji.'],
    ['vruć', 'hot', 'Pijesak je vruć.'],
    ['topao', 'warm', 'Kupamo se u toplom moru.'],
    ['miran', 'quiet, peaceful', 'Živimo u mirnom kvartu.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 23 · quality-of-life — work, rest, money; giving an opinion
// ─────────────────────────────────────────────────────────────────────────────
const L_QUALITY_OF_LIFE = {
  id: 'quality-of-life',
  title: 'Kvaliteta života',
  subtitle: 'Work, rest, money — and how to say what you think about them',
  icon: '⚖️',
  level: 'A2',
  duration: '~6 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'What Makes a Good Life?',
      body: 'A good salary, or free time? A big city, or a quiet village by the sea? Croatians argue about this over coffee all the time. This lesson gives you the words for work, money, rest and health, and three short frames for saying what you think: mislim da…, po mom mišljenju…, čini mi se da…',
      icon: '⚖️',
    },
    {
      type: 'rule',
      title: 'The Words of the Topic',
      body: 'Kvaliteta života (quality of life — the Croatian word is feminine: kvaliteta). Plaća (salary), troškovi života (the cost of living), najam stana (rent), slobodno vrijeme (free time), odmor (rest, holiday), zdravlje (health), stres (stress), javni prijevoz (public transport), priroda (nature), sigurnost (safety), zadovoljan / zadovoljna (satisfied).',
      highlight: 'kvaliteta života',
    },
    {
      type: 'rule',
      title: 'Mislim da… — I Think That…',
      body: 'Mislim da is followed by an ordinary sentence in the present: Mislim da je život ovdje skup. Mislim da imaš pravo. Treat "da" as part of the frame and continue as you would without it. Little words like je and su come straight after da: Mislim da je… — never "Mislim da skupo je". For a negative opinion Croatians usually say Mislim da nije…: Mislim da nije dobro raditi vikendom.',
      highlight: 'Mislim da je život ovdje skup.',
    },
    {
      type: 'rule',
      title: 'Po mom mišljenju, čini mi se',
      body: 'Po mom mišljenju (in my opinion) puts po before the locative: mišljenje → mišljenju, moje → mom. It is followed by a comma and an ordinary sentence: Po mom mišljenju, plaće su male. Čini mi se da… (it seems to me that…) is softer, for when you are less sure: Čini mi se da ljudi ovdje rade previše.',
      highlight: 'po mom mišljenju',
    },
    {
      type: 'rule',
      title: 'Asking Someone Else',
      body: 'Što misliš o…? (What do you think about…?) takes the locative after o: Što misliš o životu na selu? To a stranger: Što mislite o…? To ask about satisfaction: Jesi li zadovoljan / zadovoljna poslom? — zadovoljan takes the instrumental, with no preposition: poslom, plaćom, životom.',
      highlight: 'Što misliš o životu na selu?',
    },
    {
      type: 'table',
      title: 'Saying What Is Good and What Is Not',
      headers: ['Croatian', 'English'],
      rows: [
        ['Imam dobru plaću.', 'I have a good salary.'],
        ['Radim previše.', 'I work too much.'],
        ['Nemam slobodnog vremena.', 'I have no free time.'],
        ['Troškovi života su visoki.', 'The cost of living is high.'],
        ['Imam puno stresa na poslu.', 'I have a lot of stress at work.'],
        ['Javni prijevoz je odličan.', 'Public transport is excellent.'],
        ['Zrak je čist, a priroda je blizu.', 'The air is clean and nature is close by.'],
      ],
    },
    {
      type: 'example',
      title: 'Talking About Life',
      items: [
        {
          hr: 'Imam dobru plaću, ali nemam slobodnog vremena.',
          en: 'I have a good salary, but I have no free time.',
          note: 'slobodnog vremena — genitive after nemam',
        },
        {
          hr: 'Troškovi života u Zagrebu su visoki.',
          en: 'The cost of living in Zagreb is high.',
        },
        {
          hr: 'U mom gradu ima puno parkova i zrak je čist.',
          en: 'In my town there are a lot of parks and the air is clean.',
        },
        {
          hr: 'Jesi li zadovoljna poslom? — Jesam, ali plaća je mala.',
          en: 'Are you satisfied with your job? — I am, but the salary is small.',
          note: 'poslom — instrumental after zadovoljna',
        },
        {
          hr: 'Za mene su obitelj i prijatelji jako važni.',
          en: 'For me, family and friends are very important.',
        },
        {
          hr: 'Što misliš o životu na selu?',
          en: 'What do you think about life in the countryside?',
          note: 'životu — locative after o',
        },
      ],
    },
    {
      type: 'example',
      title: 'Giving an Opinion',
      items: [
        {
          hr: 'Mislim da je zdravlje jako važno.',
          en: 'I think health is very important.',
          note: 'je comes straight after da',
        },
        {
          hr: 'Po mom mišljenju, život u malom gradu je miran i jeftin.',
          en: 'In my opinion, life in a small town is peaceful and cheap.',
        },
        {
          hr: 'Čini mi se da ljudi ovdje rade previše.',
          en: 'It seems to me that people here work too much.',
        },
        {
          hr: 'Mislim da nije dobro raditi vikendom.',
          en: 'I don’t think it is good to work at weekends.',
          note: 'Croatian puts the "not" after da: mislim da nije',
        },
        {
          hr: 'Čini mi se da je javni prijevoz ovdje odličan.',
          en: 'It seems to me that public transport here is excellent.',
        },
        {
          hr: 'Mislim da imaš pravo, novac nije sve.',
          en: 'I think you are right, money is not everything.',
        },
      ],
    },
    {
      type: 'rule',
      title: 'Idemo li na kavu? — Coffee Is Not About Coffee',
      body: '"Idemo li na kavu?" is the most common invitation in Croatia, and it rarely means a quick espresso. People sit over one coffee for an hour or more, on a terrace if the weather allows, and talk — about work, family, politics, sport. Nobody hurries you to order again or to leave. Saying yes is how friendships and business contacts are kept up; that slow hour is part of what Croatians mean by a good quality of life.',
      highlight: 'Idemo li na kavu?',
    },
    {
      type: 'example',
      title: 'Idioms With crn and bijel',
      items: [
        {
          hr: 'Želim to vidjeti crno na bijelom.',
          en: 'I want to see it in black and white (in writing).',
          note: 'crno na bijelom — written down, official',
        },
        {
          hr: 'On je crna ovca u obitelji.',
          en: 'He is the black sheep of the family.',
          note: 'crna ovca — the one who does not fit in',
        },
        {
          hr: 'Imam crne misli.',
          en: 'I have gloomy thoughts.',
          note: 'crne misli — dark, sad thoughts',
        },
        {
          hr: 'Mnogi ljudi rade na crno.',
          en: 'Many people work off the books.',
          note: 'raditi na crno — to work without a contract or taxes',
        },
        {
          hr: 'Ona voli crni humor.',
          en: 'She likes black humour.',
          note: 'crni humor — jokes about dark things',
        },
        {
          hr: 'Iskren političar je prava bijela vrana.',
          en: 'An honest politician is a real rarity.',
          note: 'bijela vrana — a white crow: something very rare',
        },
        {
          hr: 'Hladnjak i perilica su bijela tehnika.',
          en: 'A fridge and a washing machine are white goods.',
          note: 'bijela tehnika — large household appliances',
        },
        {
          hr: 'Na kraju su digli bijelu zastavu.',
          en: 'In the end they raised the white flag.',
          note: 'dići bijelu zastavu — to give up',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Po ___ mišljenju, život ovdje je lijep." (my)',
      options: ['moje', 'mom', 'moj', 'mojim'],
      correct: 1,
      explanation: 'Po takes the locative: po mom mišljenju.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is correct?',
      options: ['Mislim da skupo je.', 'Mislim da je skupo.', 'Mislim je da skupo.'],
      correct: 1,
      explanation: 'Je comes straight after da: Mislim da je skupo.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving out da: "Mislim je skupo" — the frame is Mislim da je skupo. (2) Putting je or su at the end: "Mislim da skupo je" — the little word comes straight after da. (3) Leaving mišljenje in its basic form: "po moje mišljenje" — po takes the locative: po mom mišljenju. And remember that the Croatian word is kvaliteta, feminine.',
      highlight: 'po mom mišljenju',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Mislim ___ je život ovdje skup."',
          options: ['da', 'li', 'to', 'i'],
          correct: 0,
          explanation: 'The opinion frame is mislim da + an ordinary sentence.',
        },
        {
          q: 'Complete: "Po ___ mišljenju, plaće su male." (my)',
          options: ['moje', 'moj', 'mom', 'mojim'],
          correct: 2,
          explanation: 'Po takes the locative: po mom mišljenju.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Mislim da skupo je.',
            'Mislim je da skupo.',
            'Mislim da je skupo je.',
            'Mislim da je skupo.',
          ],
          correct: 3,
          explanation: 'Je comes once, straight after da.',
        },
        {
          q: 'What does "Čini mi se da…" mean?',
          options: ['I am sure that…', 'It seems to me that…', 'I hope that…', 'I asked whether…'],
          correct: 1,
          explanation: 'Čini mi se da — it seems to me that; softer than mislim da.',
        },
        {
          q: 'Complete: "Što misliš o ___ u Splitu?" (life)',
          options: ['život', 'života', 'životu', 'životom'],
          correct: 2,
          explanation: 'O takes the locative: o životu.',
        },
        {
          q: 'Which phrase means "the cost of living"?',
          options: ['troškovi života', 'plaća', 'najam stana', 'slobodno vrijeme'],
          correct: 0,
          explanation: 'Troškovi života — the cost of living. Plaća is a salary.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Kvaliteta života — Key Takeaways',
      points: [
        'plaća, troškovi života, slobodno vrijeme, zdravlje, stres, javni prijevoz',
        'Mislim da + an ordinary sentence: Mislim da je život ovdje skup',
        'Little words come straight after da; "not" goes after it: Mislim da nije…',
        'Po mom mišljenju, … — po + locative',
        'Čini mi se da… — softer, when you are less sure',
        'Što misliš o + locative? · Jesi li zadovoljan poslom?',
      ],
    },
  ],
};

const P_QUALITY_OF_LIFE = {
  worked: [
    {
      title: 'An Opinion With mislim da',
      problem: 'Prevedi: "I think the cost of living here is high."',
      en: 'I think the cost of living here is high.',
      steps: [
        {
          label: 'The frame',
          text: 'I think that… is Mislim da, followed by an ordinary sentence.',
        },
        {
          label: 'The subject',
          text: 'The cost of living is troškovi života — a plural, so the verb is su.',
        },
        {
          label: 'Word order',
          text: 'Su comes straight after da; the adjective agrees with the plural: visoki.',
        },
      ],
      answer: 'Mislim da su troškovi života ovdje visoki.',
    },
    {
      title: 'A Negative Opinion',
      problem: 'Prevedi: "In my opinion, it is not good to work too much."',
      en: 'In my opinion, it is not good to work too much.',
      steps: [
        {
          label: 'The opening',
          text: 'In my opinion: po + locative — po mom mišljenju, then a comma.',
        },
        {
          label: 'It is not good',
          text: 'Nije dobro — no separate word for "it" is needed.',
        },
        {
          label: 'To work too much',
          text: 'An infinitive follows: raditi previše.',
        },
      ],
      answer: 'Po mom mišljenju, nije dobro raditi previše.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Čini ___ se da ljudi ovdje rade previše.',
        options: ['me', 'mi', 'meni', 'moj'],
        correct: 1,
        hint: 'The frame needs the short dative form of ja.',
        explanation: 'Čini mi se da…',
      },
      {
        q: 'Mislim da ___ dobro raditi vikendom. (it is not)',
        options: ['nije', 'ne je', 'je ne', 'nisam'],
        correct: 0,
        hint: 'The negative of je is a single word.',
        explanation: 'Mislim da nije dobro…',
      },
      {
        q: 'Jesi li zadovoljan ___? (the job — posao)',
        options: ['posao', 'posla', 'poslu', 'poslom'],
        correct: 3,
        hint: 'Zadovoljan takes the instrumental, with no preposition.',
        explanation: 'zadovoljan poslom — instrumental.',
      },
      {
        q: 'Što mislite o ___ na selu? (life)',
        options: ['život', 'životu', 'života', 'životom'],
        correct: 1,
        hint: 'O takes the locative.',
        explanation: 'o životu.',
      },
      {
        q: 'Za mene ___ obitelj i zdravlje jako važni.',
        options: ['je', 'sam', 'smo', 'su'],
        correct: 3,
        hint: 'Two things together make a plural subject.',
        explanation: 'su — obitelj i zdravlje are two things.',
      },
      {
        q: 'Which sentence gives an opinion?',
        options: [
          'Radim u uredu.',
          'Imam dvoje djece.',
          'Po mom mišljenju, život na selu je lijep.',
          'Živim u Rijeci.',
        ],
        correct: 2,
        hint: 'Look for one of the opinion frames.',
        explanation: 'Po mom mišljenju… gives an opinion; the others state facts.',
      },
      {
        type: 'type',
        q: 'Mislim ____ imaš pravo.',
        answer: 'da',
        hint: 'The little word that joins mislim to the opinion.',
        explanation: 'Mislim da imaš pravo.',
      },
      {
        type: 'type',
        q: 'Po mom ____, plaće su male. (opinion)',
        answer: 'mišljenju',
        hint: 'The locative of mišljenje.',
        explanation: 'po mom mišljenju.',
      },
      {
        type: 'type',
        q: 'Imam dobru plaću, ali nemam slobodnog ____. (time)',
        answer: 'vremena',
        hint: 'After nemam, the genitive of vrijeme.',
        explanation: 'slobodnog vremena.',
      },
      {
        type: 'type',
        q: 'Mislim da ____ javni prijevoz ovdje odličan. (is)',
        answer: 'je',
        hint: 'The present of biti for one thing, straight after da.',
        explanation: 'Mislim da je javni prijevoz ovdje odličan.',
      },
      {
        type: 'type',
        q: 'Troškovi života ____ visoki. (are)',
        answer: 'su',
        hint: 'Troškovi is a plural subject.',
        explanation: 'Troškovi života su visoki.',
      },
      {
        q: 'What does "Imam puno stresa na poslu" mean?',
        options: [
          'I have a lot of free time at work.',
          'I have a lot of stress at work.',
          'I earn a lot at work.',
          'I travel a lot for work.',
        ],
        correct: 1,
        hint: 'Stres is a word English shares.',
        explanation: 'I have a lot of stress at work.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Čini ___ se da je život ovdje miran."',
      options: ['me', 'mi', 'meni', 'moj'],
      correct: 1,
      explanation: 'The frame is čini mi se — mi is the short dative of ja.',
    },
    {
      q: 'Complete: "Mislim da ___ dobro raditi noću." (it is not)',
      options: ['nije', 'ne je', 'je ne', 'nisam'],
      correct: 0,
      explanation: 'Mislim da nije dobro… — the negative of je is nije.',
    },
    {
      q: 'Which sentence gives an opinion?',
      options: [
        'Radim u bolnici.',
        'Imam dva brata.',
        'Mislim da je život u Splitu lijep.',
        'Živim u Zadru.',
      ],
      correct: 2,
      explanation: 'Mislim da… gives an opinion; the others state facts.',
    },
    {
      q: 'Complete: "Je li Ana zadovoljna ___?" (life — život)',
      options: ['život', 'životu', 'života', 'životom'],
      correct: 3,
      explanation: 'Zadovoljna takes the instrumental, with no preposition: životom.',
    },
    {
      q: 'What does "Nemam slobodnog vremena" mean?',
      options: [
        'I have no money.',
        'I have no free time.',
        'I have no job.',
        'I have no friends here.',
      ],
      correct: 1,
      explanation: 'Slobodno vrijeme is free time; after nemam it is in the genitive.',
    },
    {
      q: 'Complete: "Po mom mišljenju, zdravlje i obitelj ___ jako važni."',
      options: ['je', 'sam', 'smo', 'su'],
      correct: 3,
      explanation: 'Two things together are a plural subject: su.',
    },
  ],
  vocab: [
    ['kvaliteta života', 'quality of life', 'Kvaliteta života ovdje je dobra.'],
    ['plaća', 'salary', 'Imam dobru plaću.'],
    ['troškovi života', 'cost of living', 'Troškovi života su visoki.'],
    ['slobodno vrijeme', 'free time', 'Nemam slobodnog vremena.'],
    ['zdravlje', 'health', 'Zdravlje je jako važno.'],
    ['stres', 'stress', 'Imam puno stresa na poslu.'],
    ['zadovoljan', 'satisfied', 'Zadovoljan sam poslom.'],
    ['mišljenje', 'opinion', 'Po mom mišljenju, to je skupo.'],
    ['misliti', 'to think', 'Mislim da imaš pravo.'],
    ['javni prijevoz', 'public transport', 'Javni prijevoz je odličan.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────────────────────────────────────

/** Spine entries for this batch. `masterOrder` is the lesson's final A2 position. */
export const SPINE = [
  {
    id: 'verbs-nuti',
    masterOrder: 12,
    prerequisites: ['present', 'imperative-basic', 'past-irregular', 'future-tense'],
    objectives: [
      'Form the present of krenuti, skrenuti and maknuti: krenem, skreneš, makne',
      'Use the hidden n of stati, ostati and postati: stanem, ostanem, postanem',
      'Say dođem, nađem, uđem — and otiđem or odem for otići',
      'Build the command from the present stem: kreni, skrenite, dođi, uđite',
    ],
  },
  {
    id: 'weekend-plans',
    masterOrder: 13,
    prerequisites: ['future-plans', 'at-the-hotel', 'adjective-agreement', 'verbs-nuti'],
    objectives: [
      'Talk about weekend plans with the present and a time word, or with the future',
      'Place ću correctly: U subotu ću ići… / Ići ću…',
      'Choose between a hotel and private accommodation and book a room',
      'Put the adjective into the accusative when asking for a room: slobodnu sobu',
    ],
  },
  {
    id: 'grocery-shopping',
    masterOrder: 16,
    prerequisites: ['genitive-partitive', 'numbers-genitive', 'shopping-prices', 'quantity'],
    objectives: [
      'Ask for amounts with the genitive: kilogram jabuka, litra mlijeka',
      'Use the weights Croatians use: kila, pola kile, deset deka',
      'Put the amount word into the accusative as an object: Dajte mi kilu jabuka',
      'Shop at the market and at the supermarket checkout',
    ],
  },
  {
    id: 'visiting-customs',
    masterOrder: 17,
    prerequisites: ['formal-address', 'vi-vs-ti', 'food-drink', 'verbs-nuti'],
    objectives: [
      'Know what to bring to a Croatian home — and what not to',
      'Apologise for being late and greet hosts at the door',
      'Accept and refuse food politely, and give a toast',
      'Take leave and thank the hosts: Hvala na pozivu',
    ],
  },
  {
    id: 'locative-adjectives',
    masterOrder: 18,
    prerequisites: ['locative-intro', 'locative-pronouns', 'adjective-agreement', 'svoj'],
    objectives: [
      'Put adjectives into the locative: u velikom gradu, u velikoj kući',
      'Use -em after a soft stem: u našem gradu, na vrućem pijesku',
      'Decline taj, ovaj, moj and njegov in the locative',
      'Use svoj in the locative: o svojoj obitelji',
    ],
  },
  {
    id: 'quality-of-life',
    masterOrder: 23,
    prerequisites: ['work-jobs', 'hobbies-free-time', 'likes-preferences', 'locative-adjectives'],
    objectives: [
      'Talk about work, money, rest and health as parts of a good life',
      'Give an opinion with mislim da…, po mom mišljenju…, čini mi se da…',
      'Ask someone else: Što misliš o…? Jesi li zadovoljan…?',
      'Keep je and su straight after da: Mislim da je…',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA2.js). */
export const LESSONS = [
  L_VERBS_NUTI,
  L_WEEKEND_PLANS,
  L_GROCERY_SHOPPING,
  L_VISITING_CUSTOMS,
  L_LOCATIVE_ADJECTIVES,
  L_QUALITY_OF_LIFE,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'verbs-nuti': P_VERBS_NUTI,
  'weekend-plans': P_WEEKEND_PLANS,
  'grocery-shopping': P_GROCERY_SHOPPING,
  'visiting-customs': P_VISITING_CUSTOMS,
  'locative-adjectives': P_LOCATIVE_ADJECTIVES,
  'quality-of-life': P_QUALITY_OF_LIFE,
};
