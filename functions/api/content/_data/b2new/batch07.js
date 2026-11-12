// functions/api/content/_data/b2new/batch07.js
//
// New B2 lessons, batch 07 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 11–12: the genitive of negation, climate and the
// environment (negation in statements, questions and exclamations; exoticisms),
// direct and indirect speech with the clitic cluster inside the reported clause,
// interjections, and free time, sport and travel.
//
// After a negated transitive verb modern standard Croatian accepts BOTH the accusative
// and the genitive (Nisam dobio odgovor / odgovora). Both are taught as correct, and no
// item ever offers both as competing options — only nema, nije bilo and neće biti,
// where the genitive is the only standard choice, are tested as one-answer items.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'genitive-of-negation',
    masterOrder: 51,
    prerequisites: ['genitive-deep', 'aspect-negation', 'modal-nuance'],
    objectives: [
      'Put what is missing into the genitive after nema, nije bilo and neće biti: Nema vode. Nije bilo struje.',
      'Keep the past and future frozen in the neuter singular: Nije bilo autobusa, never "nisu bili autobusi"',
      'Use the fixed genitive phrases (nemam pojma, ni traga ni glasa, nema veze) and know that after a negated verb both Nisam dobio odgovor and odgovora are correct',
    ],
  },
  {
    id: 'climate-environment',
    masterOrder: 54,
    prerequisites: ['environment-nature', 'genitive-of-negation', 'negation-advanced'],
    objectives: [
      'Talk about natural disasters in Croatia, climate change and sorting waste',
      'Put ne in the right place and ask negative questions: Ne bojim se potresa. Zar ne znaš?',
      'Understand the exclamation Čega sve nema! and recognise exoticisms such as cunami and tajfun',
    ],
  },
  {
    id: 'reported-speech-b2',
    masterOrder: 56,
    prerequisites: ['reported-speech', 'clitics', 'hedging-precision'],
    objectives: [
      'Report statements, yes/no questions, wh-questions and commands without changing the tense',
      'Change the person to fit the new speaker: "Volim te." → Rekao je da me voli.',
      'Line up the short words inside the reported clause: Rekao je da mu ga je dao.',
    ],
  },
  {
    id: 'interjections',
    masterOrder: 57,
    prerequisites: ['vocative-intro', 'reported-speech-b2'],
    objectives: [
      'Use the common interjections for pain, relief, surprise, praise and silence: joj, jao, ajme, uf, oho, aha, ups, hej, pst, bravo',
      'Punctuate them with a comma and an exclamation mark, and put the person called in the vocative: Bravo, Petre!',
      'Know which interjections are casual and which fit any register',
    ],
  },
  {
    id: 'travel-and-sport',
    masterOrder: 58,
    prerequisites: ['interjections', 'verbal-adverbs', 'instrumental'],
    objectives: [
      'Talk about sport and hobbies with baviti se + instrumental, igrati + accusative and navijati za',
      'Say you are bored (Dosadno mi je. Dosađujem se.) and that you did something to your heart’s content with na- + se',
      'Tell a trip with perfective steps and imperfective background, and know Dražen Petrović and Davor Rostuhar',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 51 · The genitive of negation
// ─────────────────────────────────────────────────────────
const GENITIVE_OF_NEGATION = {
  id: 'genitive-of-negation',
  title: 'Nema Vode: The Genitive of Negation',
  subtitle: 'Nema, nije bilo, neće biti — and the case that follows when something is not there',
  icon: '🚫',
  level: 'B2',
  duration: '~9 min',
  color: '#b91c1c',
  bg: '#fef2f2',
  slides: [
    {
      type: 'intro',
      title: 'When Something Is Not There',
      body: 'You have said "nema" since A1 — Nema problema. Nema ga. This lesson looks hard at the case that follows it, the genitive, and at every place Croatian uses the genitive because something is NOT there: nema, nije bilo, neće biti, fixed phrases such as ni traga ni glasa, and negated verbs, where modern Croatian accepts two cases. Grammar books call it the genitive of negation; the Croaticum B2 book calls it the "Slavic" genitive, because several Slavic languages share it.',
      icon: '🚫',
    },
    {
      type: 'rule',
      title: 'Nema: Always the Genitive',
      body: '"Nema" means "there is no" or "there are no". Whatever is missing goes into the genitive, singular or plural: Nema vode. Nema kruha. Nema autobusa. Nema slobodnih mjesta. A person works the same way: Nema Ivana. Nema ga. Nema ih. Nema me kod kuće do šest. The verb never changes — nema stays nema whether one thing or a hundred are missing.',
      highlight: 'Nema vode.',
    },
    {
      type: 'rule',
      title: 'Past and Future: Nije Bilo, Neće Biti',
      body: 'In the past, "there was no" is nije bilo; in the future, "there will be no" is neće biti. The verb does not agree with the missing thing — it is frozen in the neuter singular: Nije bilo vode. Nije bilo autobusa. Nije bilo nikoga. Neće biti kiše. Neće biti problema. Learners who know agreement well are tempted to write "nisu bili autobusi", but nothing is the subject here: the missing thing stands in the genitive.',
      highlight: 'Nije bilo autobusa.',
    },
    {
      type: 'rule',
      title: 'Nemati: The Genitive of Amounts',
      body: 'With nemati (not to have), things you measure rather than count — time, money, luck, patience — take the genitive: Nemam vremena. Nemamo novca. Nemaš sreće. Nema strpljenja. With one countable thing, everyday Croatian mostly keeps the accusative: Nemam auto. Nemam kišobran. That is standard too, so do not "correct" it.',
      highlight: 'Nemam vremena.',
    },
    {
      type: 'rule',
      title: 'Fixed Phrases',
      body: 'Several everyday phrases are always in the genitive, often with ni (not even): nemam pojma (I have no idea), nema veze (never mind), nema šanse (no chance), nema problema (no problem), ni traga ni glasa (not a trace, not a word — someone has vanished), ni žive duše (not a living soul). Od njega nema ni traga ni glasa. Na ulici nije bilo ni žive duše.',
      highlight: 'ni traga ni glasa',
    },
    {
      type: 'rule',
      title: 'After a Negated Verb: Two Correct Cases',
      body: 'When an ordinary verb that takes an object is negated, modern standard Croatian normally keeps the accusative: Nisam dobio odgovor. Ne vidim smisao. Nisam pročitao tu knjigu. The genitive is also correct, and it sounds more emphatic or more written — "not any, not the least bit": Nisam dobio odgovora. Ne vidim smisla. It is especially common with nijedan (not a single) and nikakav (no kind of): Nisam dobio nikakvog odgovora. Both cases are right; when in doubt, use the accusative.',
      highlight: 'Nisam dobio odgovor.',
    },
    {
      type: 'rule',
      title: 'Nijednog Čovjeka: When You Cannot Tell',
      body: 'For a living masculine noun the accusative and the genitive look the same: Nisam vidio nijednog čovjeka. Nisam sreo Marka. It does not matter which case you call it — the form is right either way. With feminine nouns you can hear the difference: Nisam vidjela nijednu ženu (accusative) or Nisam vidjela nijedne žene (genitive, more formal). Both are standard.',
      highlight: 'Nisam vidio nijednog čovjeka.',
    },
    {
      type: 'table',
      title: 'Where the Genitive Appears',
      headers: ['Construction', 'Case', 'Example'],
      rows: [
        ['nema', 'genitive only', 'Nema kruha.'],
        ['nije bilo', 'genitive only', 'Nije bilo struje.'],
        ['neće biti', 'genitive only', 'Neće biti kiše.'],
        ['nemati + an amount', 'genitive', 'Nemam vremena.'],
        ['fixed phrases', 'genitive only', 'Nemam pojma.'],
        ['negated verb + object', 'accusative or genitive', 'Nisam dobio odgovor / odgovora.'],
      ],
    },
    {
      type: 'example',
      title: 'Nothing There',
      items: [
        {
          hr: 'U hladnjaku nema mlijeka ni jaja.',
          en: 'There is no milk and no eggs in the fridge.',
          note: 'mlijeka, jaja — genitive after nema',
        },
        {
          hr: 'Jučer cijeli dan nije bilo struje.',
          en: 'Yesterday there was no electricity all day.',
          note: 'nije bilo — frozen neuter singular; struje — genitive',
        },
        {
          hr: 'Na otoku ovog ljeta nije bilo dovoljno vode.',
          en: 'There was not enough water on the island this summer.',
          note: 'vode — genitive after nije bilo',
        },
        {
          hr: 'Prema prognozi, ovaj vikend neće biti kiše.',
          en: 'According to the forecast, there will be no rain this weekend.',
          note: 'neće biti + genitive: kiše',
        },
        {
          hr: 'Gdje je šef? — Njega danas nema.',
          en: 'Where is the boss? — He is not in today.',
          note: 'njega — the long genitive of on, because it starts the sentence',
        },
        {
          hr: 'Na koncertu nije bilo puno ljudi.',
          en: 'There were not many people at the concert.',
          note: 'nije bilo stays singular even with puno ljudi',
        },
      ],
    },
    {
      type: 'example',
      title: 'Phrases and Choices',
      items: [
        {
          hr: 'Nemam vremena za kavu, žurim na posao.',
          en: 'I have no time for coffee, I am rushing to work.',
          note: 'vremena — the genitive of vrijeme',
        },
        {
          hr: 'Nemam pojma gdje sam ostavio ključeve.',
          en: 'I have no idea where I left my keys.',
          note: 'pojma — a fixed genitive phrase',
        },
        {
          hr: 'Od mačke nema ni traga ni glasa već tri dana.',
          en: 'There has been no sign of the cat for three days.',
          note: 'ni traga ni glasa — someone (or something) has vanished',
        },
        {
          hr: 'Nisam dobio odgovor na poruku.',
          en: 'I did not get an answer to my message.',
          note: 'odgovor — the everyday accusative after a negated verb',
        },
        {
          hr: 'Nisam dobio nikakvog odgovora.',
          en: 'I did not get any answer at all.',
          note: 'odgovora — the emphatic genitive, here with nikakav',
        },
        {
          hr: 'U sobi nije bilo ni žive duše.',
          en: 'There was not a living soul in the room.',
          note: 'žive duše — genitive in a fixed phrase',
        },
        {
          hr: 'Nema veze, doći ćeš drugi put.',
          en: 'Never mind, you will come another time.',
          note: 'veze — genitive in a fixed phrase',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Jučer ___ autobusa zbog štrajka."',
      options: ['nisu bili', 'nije bilo', 'nije bio'],
      correct: 1,
      explanation:
        '"There were no buses" is the existential past: nije bilo, frozen in the neuter singular, with autobusa in the genitive.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is NOT standard Croatian?',
      options: ['Nisam dobio odgovor.', 'Nisam dobio odgovora.', 'Nema kruh.'],
      correct: 2,
      explanation:
        'After nema only the genitive is standard: Nema kruha. After a negated verb such as nisam dobio, both the accusative and the genitive are correct.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Making the verb agree with what is missing: "Nisu bili autobusi" — the existential past is frozen: Nije bilo autobusa. (2) A nominative after nema: "Nema voda" — it must be Nema vode. (3) Starting a sentence with a short pronoun: "Ga nema" — at the start use the long form, Njega nema, or put ga after the verb: Nema ga. (4) Treating the accusative after a negated verb as a mistake: Nisam pročitao knjigu is perfectly standard; the genitive is only the more emphatic choice.',
      highlight: 'Nije bilo autobusa.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "U hladnjaku nema ___." (milk)',
          options: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
          correct: 1,
          explanation: 'Nema always takes the genitive: mlijeka.',
        },
        {
          q: 'Complete: "Jučer ___ struje cijeli dan." (there was no)',
          options: ['nije bila', 'nisu bile', 'nije bilo', 'nije bio'],
          correct: 2,
          explanation:
            'The existential past is frozen in the neuter singular: nije bilo, whatever the gender of struja.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Sutra neće biti kiša.',
            'Sutra neće biti kiši.',
            'Sutra neće biti kiše.',
            'Sutra neće biti kišu.',
          ],
          correct: 2,
          explanation: 'Neće biti — "there will be no" — takes the genitive: kiše.',
        },
        {
          q: 'Which pair is BOTH standard Croatian?',
          options: [
            'Nisam dobio odgovor. / Nisam dobio odgovora.',
            'Nema vode. / Nema voda.',
            'Nije bilo autobusa. / Nisu bili autobusa.',
            'Nemam vremena. / Nemam vremenom.',
          ],
          correct: 0,
          explanation:
            'After a negated verb both cases are correct — the accusative is everyday, the genitive more emphatic. After nema and nije bilo only the genitive is standard.',
        },
        {
          q: 'Complete: "Od njega nema ni ___ ni glasa."',
          options: ['trag', 'traga', 'tragu', 'tragom'],
          correct: 1,
          explanation: 'Ni traga ni glasa is a fixed genitive phrase: someone has vanished.',
        },
        {
          q: 'Complete: "Gdje je Marko? — ___ danas nema."',
          options: ['On', 'Njemu', 'Njega', 'Njim'],
          correct: 2,
          explanation:
            'Nema takes the genitive, and at the start of the sentence the long form is needed: Njega danas nema. (Or: Danas ga nema.)',
        },
      ],
    },
    {
      type: 'summary',
      title: 'The Genitive of Negation — Key Takeaways',
      points: [
        'Nema, nije bilo and neće biti always take the genitive: Nema vode.',
        'The past and future are frozen: Nije bilo autobusa. Neće biti kiše.',
        'Amounts after nemati are in the genitive: Nemam vremena.',
        'Fixed phrases: nemam pojma, nema veze, ni traga ni glasa, ni žive duše',
        'After a negated verb both are correct: Nisam dobio odgovor / odgovora',
        'At the start of a sentence use the long pronoun: Njega nema.',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 54 · Climate, natural disasters and the environment
// ─────────────────────────────────────────────────────────
const CLIMATE_ENVIRONMENT = {
  id: 'climate-environment',
  title: 'Klima i okoliš: Fires, Floods and Waste',
  subtitle: 'Natural disasters, sorting rubbish — and where ne goes in a sentence',
  icon: '🌍',
  level: 'B2',
  duration: '~9 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: 'Living Close to Nature',
      body: 'Croatia lives close to nature, and nature does not always behave: fires on the coast in summer, rivers that flood in the east, and in 2020 two earthquakes in the space of nine months. This lesson gives you the words for climate, natural disasters and waste, and it puts negation to work: where ne goes in a sentence, how to ask a negative question, and an exclamation that says the opposite of what it seems to.',
      icon: '🌍',
    },
    {
      type: 'rule',
      title: 'Natural Disasters',
      body: 'Prirodne nepogode (natural disasters): potres (earthquake), poplava (flood), požar (fire; šumski požar — a forest fire), suša (drought), oluja (storm), tuča (hail), klizište (landslide). On 22 March 2020 a strong earthquake hit Zagreb, and on 29 December 2020 an even stronger one struck Petrinja and the area around Sisak. In May 2014 the river Sava flooded Gunja and other villages in eastern Croatia. In summer, firefighting planes — kanaderi — fly over the Dalmatian coast.',
      highlight: 'potres (earthquake), poplava (flood)',
    },
    {
      type: 'rule',
      title: 'Climate and Waste',
      body: 'Klimatske promjene (climate change), globalno zatopljenje (global warming), zagađenje (pollution), okoliš (the environment). For waste: otpad (waste), smeće (rubbish), odvajanje otpada (sorting waste), reciklirati (to recycle), spremnik (a container), plastika, staklo, papir. In Croatian shops you can return empty drink bottles and get a small refund — povratna naknada. Dan planeta Zemlje (Earth Day) is 22 April; Svjetski dan hrane (World Food Day) is 16 October.',
      highlight: 'odvajanje otpada',
    },
    {
      type: 'rule',
      title: 'Where Ne Goes',
      body: 'Ne stands directly before the verb it denies: Ne odvajam otpad. Otpad ne odvajam. Ne and its verb count as one unit, so short words like se, mi and ga follow them: Ne bojim se potresa. Ne sviđa mi se taj plan. If another word comes first, the short words go second and ne stays by the verb: Ja se ne bojim potresa. With biti and htjeti, ne fuses into one word: nisam, nije, neću, nećemo. With the conditional it stays separate: ne bih, ne bismo.',
      highlight: 'Ne bojim se potresa.',
    },
    {
      type: 'rule',
      title: 'Negative Questions and Exclamations',
      body: 'A negative question often shows surprise and expects "yes": Zar ne znaš da se boce mogu vratiti? (Don’t you know…?) Zar nisi čuo za potres? Nije li to previše plastike? (formal: Isn’t that too much plastic?) A tag at the end asks for agreement: Vruće je, zar ne? One exclamation turns negation upside down: Čega sve nema na tržnici! does not mean the market is empty — it means there is everything. Što sve ljudi ne bace! — The things people throw away!',
      highlight: 'Zar ne znaš',
    },
    {
      type: 'rule',
      title: 'Exoticisms and Croatian Products',
      body: 'An exoticism (egzotizam) is a borrowed word for something typical of a far-away place: cunami (from Japanese), tajfun, monsun. They are written the Croatian way and decline like Croatian nouns: Cunami je pogodio obalu. Ljudi su bježali pred tajfunom. Typical Croatian products need no translation either: kulen (a spicy Slavonian sausage), paški sir (sheep’s cheese from the island of Pag) and Bajadera, the famous nougat sweet made by Kraš.',
      highlight: 'cunami (from Japanese), tajfun, monsun',
    },
    {
      type: 'table',
      title: 'Words for Nature and Waste',
      headers: ['Croatian', 'English'],
      rows: [
        ['potres', 'earthquake'],
        ['poplava', 'flood'],
        ['šumski požar', 'forest fire'],
        ['suša', 'drought'],
        ['klimatske promjene', 'climate change'],
        ['zagađenje', 'pollution'],
        ['odvajanje otpada', 'sorting waste'],
        ['spremnik za staklo', 'glass container'],
        ['povratna naknada', 'bottle refund'],
      ],
    },
    {
      type: 'example',
      title: 'Disasters and Climate',
      items: [
        {
          hr: 'Potres je u ožujku 2020. oštetio mnoge zgrade u Zagrebu.',
          en: 'In March 2020 the earthquake damaged many buildings in Zagreb.',
          note: 'potres — the subject; zgrade — accusative plural',
        },
        {
          hr: 'Nakon potresa u Petrinji ljudi iz cijele Hrvatske slali su pomoć.',
          en: 'After the Petrinja earthquake people from all over Croatia sent help.',
          note: 'nakon + genitive: nakon potresa',
        },
        {
          hr: 'Ljeti zbog suše i vjetra lako izbije šumski požar.',
          en: 'In summer a forest fire breaks out easily because of drought and wind.',
          note: 'zbog + genitive: suše, vjetra',
        },
        {
          hr: 'Kanaderi su cijeli dan gasili požar na obali.',
          en: 'The firefighting planes spent all day putting out the fire on the coast.',
          note: 'gasili — imperfective: an activity that lasted',
        },
        {
          hr: 'U svibnju 2014. Sava je poplavila Gunju i okolna sela.',
          en: 'In May 2014 the Sava flooded Gunja and the surrounding villages.',
          note: 'poplaviti — to flood; poplava — a flood',
        },
        {
          hr: 'Zar ne vidiš da su ljeta svake godine sve toplija?',
          en: 'Can’t you see that the summers are getting hotter every year?',
          note: 'zar ne — a surprised negative question',
        },
      ],
    },
    {
      type: 'example',
      title: 'Waste and Food',
      items: [
        {
          hr: 'Kod kuće odvajamo papir, plastiku i staklo.',
          en: 'At home we sort paper, plastic and glass.',
          note: 'odvajati — to separate, to sort',
        },
        {
          hr: 'Ne bacaj staklo u smeće, nego u spremnik!',
          en: 'Do not throw glass in the rubbish, put it in the container!',
          note: 'ne directly before the verb; nego after a negative',
        },
        {
          hr: 'Prazne boce nosimo u trgovinu i dobijemo povratnu naknadu.',
          en: 'We take empty bottles to the shop and get a refund.',
          note: 'povratna naknada — the bottle refund',
        },
        {
          hr: 'Na Dan planeta Zemlje učenici čiste obalu i parkove.',
          en: 'On Earth Day pupils clean up the coast and the parks.',
          note: 'Dan planeta Zemlje — 22 April',
        },
        {
          hr: 'Svjetski dan hrane podsjeća nas da ne bacamo hranu.',
          en: 'World Food Day reminds us not to waste food.',
          note: 'da ne bacamo — ne stays by its verb',
        },
        {
          hr: 'Čega sve nema na tržnici: kulena, paškog sira, domaćeg meda!',
          en: 'The market has everything: kulen, Pag cheese, homemade honey!',
          note: 'an exclamation with nema meaning "there is everything"; the list is in the genitive',
        },
        {
          hr: 'Ja se ne bojim oluje, ali se bojim potresa.',
          en: 'I am not afraid of storms, but I am afraid of earthquakes.',
          note: 'ja first, se second, ne by the verb',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which sentence puts the words in the right order?',
      options: ['Se ne sviđa mi taj plan.', 'Ne sviđa mi se taj plan.', 'Ne mi se sviđa taj plan.'],
      correct: 1,
      explanation:
        'Ne and the verb come first as one unit, then the short words mi and se: Ne sviđa mi se taj plan.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What does "Što sve ljudi ne bace!" mean?',
      options: [
        'People throw nothing away.',
        'The things people throw away!',
        'Why don’t people throw things away?',
      ],
      correct: 1,
      explanation:
        'In this kind of exclamation ne does not deny anything: it stresses how much. People throw away all sorts of things.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Putting a short word first: "Se ne bojim" — start with ne + the verb, or with another word: Ne bojim se / Ja se ne bojim. (2) Writing the fused forms apart: "ni sam", "ni je" — they are nisam, nije; but ne bih stays apart. (3) Reading Čega sve nema! as "there is nothing" — it means there is everything. (4) A nominative after nema: "nema struja" — it is nema struje.',
      highlight: 'Ne bojim se',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which sentence is correct?',
          options: [
            'Se ne bojim potresa.',
            'Ne se bojim potresa.',
            'Ne bojim se potresa.',
            'Ne bojim potresa se.',
          ],
          correct: 2,
          explanation:
            'Ne + the verb form one unit and the short word se follows: Ne bojim se potresa.',
        },
        {
          q: 'Complete: "Nažalost, u trgovini nije bilo ___ sira." (from Pag)',
          options: ['paški', 'paškog', 'paškom', 'pašku'],
          correct: 1,
          explanation:
            'Nije bilo takes the genitive, and the adjective follows the noun: paškog sira.',
        },
        {
          q: 'What does "Čega sve nema na sajmu!" mean?',
          options: [
            'There is nothing at the fair.',
            'What is missing at the fair?',
            'The fair is closed today.',
            'There is everything at the fair!',
          ],
          correct: 3,
          explanation:
            'In this exclamation the negation stresses abundance: the fair has everything.',
        },
        {
          q: 'Which word is an exoticism — a word for something typical of a distant place?',
          options: ['poplava', 'potres', 'tajfun', 'suša'],
          correct: 2,
          explanation:
            'Tajfun names a storm of the Pacific region; the others are everyday Croatian words.',
        },
        {
          q: 'Complete: "___ ne znaš da se boce mogu vratiti u trgovinu?" (surprise)',
          options: ['Zar', 'Li', 'Ni', 'Da'],
          correct: 0,
          explanation: 'Zar opens a surprised negative question: Zar ne znaš…? — Don’t you know…?',
        },
        {
          q: 'Which town was struck by a strong earthquake on 29 December 2020?',
          options: ['Split', 'Petrinja', 'Osijek', 'Zadar'],
          correct: 1,
          explanation:
            'The Petrinja earthquake of 29 December 2020 was even stronger than the Zagreb earthquake of March that year.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Climate and Environment — Key Takeaways',
      points: [
        'Disasters: potres, poplava, požar, suša, oluja, tuča',
        'Zagreb (22 March 2020) and Petrinja (29 December 2020) were hit by earthquakes',
        'Waste: odvajanje otpada, spremnik, povratna naknada',
        'Ne stands right before its verb; short words follow: Ne bojim se.',
        'Zar ne znaš? — a surprised question; Vruće je, zar ne? — a tag',
        'Čega sve nema! means there is everything',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 56 · Reported speech in depth
// ─────────────────────────────────────────────────────────
const REPORTED_SPEECH_B2 = {
  id: 'reported-speech-b2',
  title: 'Rekao je da mu ga je dao',
  subtitle:
    'Statements, questions and commands in reported speech — and the short words inside them',
  icon: '🗣️',
  level: 'B2',
  duration: '~9 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Passing Words On',
      body: 'At B1 you reported simple statements with da and yes/no questions with je li. This lesson does the whole job: statements, yes/no questions, wh-questions and commands, the changes of person that come with them — and the short words (clitics), which have their own place inside the reported clause: Rekao je da mu ga je dao.',
      icon: '🗣️',
    },
    {
      type: 'rule',
      title: 'No Change of Tense',
      body: 'English shifts the tense back: "I am tired" becomes "she said she WAS tired". Croatian keeps the tense of the original words: "Umorna sam." → Rekla je da je umorna. "Doći ću sutra." → Rekao je da će doći sutra. "Bila sam u Splitu." → Rekla je da je bila u Splitu. Only the person changes, to fit the new speaker.',
      highlight: 'Rekla je da je umorna.',
    },
    {
      type: 'rule',
      title: 'Statements: Da',
      body: 'A reported statement starts with da. Pronouns and verb endings change to fit who is speaking now: "Volim te." → Rekao je da me voli. "Ne razumijem vas." → Rekla je da nas ne razumije. "Moj brat živi u Puli." → Rekao je da njegov brat živi u Puli. Reporting verbs give colour: reći, kazati, objasniti, tvrditi (to claim), dodati (to add), priznati (to admit).',
      highlight: 'Rekao je da me voli.',
    },
    {
      type: 'rule',
      title: 'Yes/No Questions: Li After the Verb',
      body: 'A reported yes/no question puts li straight after the verb and needs no da: "Dolaziš li?" → Pitala me je dolazim li. "Imaš li vremena?" → Pitao me je imam li vremena. With biti, the long form carries li: je li, jesam li, jesu li. "Je li Ivan doma?" → Pitali smo je li Ivan doma. "Jesi li vidio film?" → Pitao me je jesam li vidio film.',
      highlight: 'Pitala me je dolazim li.',
    },
    {
      type: 'rule',
      title: 'Wh-Questions: Keep the Question Word',
      body: 'A reported wh-question keeps its question word and adds nothing else — no da, no li: "Gdje živiš?" → Pitala me je gdje živim. "Kada polazi vlak?" → Pitali smo kada polazi vlak. "Zašto kasniš?" → Šef me je pitao zašto kasnim.',
      highlight: 'Pitala me je gdje živim.',
    },
    {
      type: 'rule',
      title: 'Commands: Da or Neka + Present',
      body: 'An imperative becomes da or neka + the present tense: "Zatvori prozor!" → Rekla mi je da zatvorim prozor. "Pričekajte!" → Rekao je neka pričekamo. A polite request is reported with zamoliti: Zamolila me je da joj pomognem. Neka is especially natural when you pass a message on to a third person: Reci Ivi neka me nazove.',
      highlight: 'Rekla mi je da zatvorim prozor.',
    },
    {
      type: 'rule',
      title: 'The Short Words Inside the Reported Clause',
      body: 'Short words sit second in their OWN clause — straight after da, after the question word, or after the verb + li — in the usual order: li, then sam/ću/bih, then the dative (mi, mu, joj), then the accusative (me, ga, je, ih), then se, and je last. "Dao sam mu ga." → Rekao je da mu ga je dao. "Poslat ću ti ga." → Rekla je da će mi ga poslati. "Sviđa mi se." → Rekla je da joj se sviđa. "Je li ti ga vratio?" → Pitali su me je li mi ga vratio.',
      highlight: 'Rekao je da mu ga je dao.',
    },
    {
      type: 'table',
      title: 'From Direct to Reported',
      headers: ['Direct', 'Reported'],
      rows: [
        ['"Umorna sam."', 'Rekla je da je umorna.'],
        ['"Dolaziš li?"', 'Pitala me je dolazim li.'],
        ['"Je li Ivan doma?"', 'Pitali smo je li Ivan doma.'],
        ['"Gdje živiš?"', 'Pitala me je gdje živim.'],
        ['"Zatvori prozor!"', 'Rekla mi je da zatvorim prozor.'],
        ['"Dao sam mu ga."', 'Rekao je da mu ga je dao.'],
      ],
    },
    {
      type: 'example',
      title: 'Statements and Questions',
      items: [
        {
          hr: 'Marija je rekla da je umorna i da ide spavati.',
          en: 'Marija said she was tired and was going to bed.',
          note: 'no change of tense: je, ide',
        },
        {
          hr: 'Ivan kaže da će doći tek u subotu.',
          en: 'Ivan says he will only come on Saturday.',
          note: 'the future stays the future',
        },
        {
          hr: 'Pitala sam ga ima li vremena za kavu.',
          en: 'I asked him if he had time for a coffee.',
          note: 'verb + li, no da',
        },
        {
          hr: 'Prodavač nas je pitao jesmo li zadovoljni.',
          en: 'The shop assistant asked us whether we were satisfied.',
          note: 'jesmo li — the long form of biti carries li',
        },
        {
          hr: 'Turisti su pitali gdje je autobusna stanica.',
          en: 'The tourists asked where the bus station was.',
          note: 'the question word stays; no da',
        },
        {
          hr: 'Nitko mi nije rekao zašto vlak kasni.',
          en: 'Nobody told me why the train was late.',
          note: 'a reported wh-question after reći',
        },
      ],
    },
    {
      type: 'example',
      title: 'Commands and Short Words',
      items: [
        {
          hr: 'Liječnica mi je rekla da pijem više vode.',
          en: 'The doctor told me to drink more water.',
          note: 'imperative → da + present',
        },
        {
          hr: 'Reci bratu neka me nazove večeras.',
          en: 'Tell your brother to call me tonight.',
          note: 'neka for a message to a third person',
        },
        {
          hr: 'Zamolio nas je da mu pomognemo.',
          en: 'He asked us to help him.',
          note: 'zamoliti — a polite request; mu right after da',
        },
        {
          hr: 'Rekao je da mu ga je dao još prošli tjedan.',
          en: 'He said he had given it to him back last week.',
          note: 'da, then mu ga, then je last',
        },
        {
          hr: 'Ana je rekla da će mi ga poslati poštom.',
          en: 'Ana said she would send it to me by post.',
          note: 'da, then će, mi, ga',
        },
        {
          hr: 'Pitali su me je li mi se film svidio.',
          en: 'They asked me whether I had liked the film.',
          note: 'je li, then mi, then se',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Report: "Gladan sam." → Rekao je da ___ gladan.',
      options: ['je', 'je bio', 'sam'],
      correct: 0,
      explanation:
        'Croatian keeps the tense and only changes the person: da je gladan. "Je bio" would mean he had been hungry earlier.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'How do you report "Gdje radiš?"',
      options: [
        'Pitao me je da gdje radim.',
        'Pitao me je gdje radim.',
        'Pitao me je radim li gdje.',
      ],
      correct: 1,
      explanation: 'A reported wh-question keeps the question word and adds no da: gdje radim.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Shifting the tense as in English: reporting "Umorna sam" as "Rekla je da je bila umorna" — keep the present: Rekla je da je umorna. (2) Adding da before a question: "Pitao je da gdje živim" — a reported question needs no da. (3) Putting the short words after the verb: "Rekao je da dao mu ga je" — they come straight after da: da mu ga je dao. (4) Forgetting to change the person: "Rekao je da volim te" — the speaker has changed, so: da me voli.',
      highlight: 'da mu ga je dao',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Report: "Bolestan sam." → Marko je rekao da ___ bolestan.',
          options: ['je bio', 'je', 'sam', 'bi bio'],
          correct: 1,
          explanation: 'No change of tense, only of person: da je bolestan.',
        },
        {
          q: 'Report: "Imaš li psa?" → Pitala me je ___ psa.',
          options: ['da imam', 'imam li', 'li imam', 'imaš li'],
          correct: 1,
          explanation: 'A yes/no question: the verb, then li, and the person changes to imam.',
        },
        {
          q: 'Report: "Gdje je pošta?" → Turist je pitao ___.',
          options: ['gdje pošta je', 'da gdje je pošta', 'gdje je pošta', 'je li gdje pošta'],
          correct: 2,
          explanation: 'Keep the question word and the word order; add no da: gdje je pošta.',
        },
        {
          q: 'Report: "Dao sam joj ga." → Rekao je da ___ dao.',
          options: ['joj ga je', 'je joj ga', 'ga joj je', 'joj je ga'],
          correct: 0,
          explanation: 'Dative before accusative, and je last: da joj ga je dao.',
        },
        {
          q: 'Report the command: "Pričekaj me!" → Rekla mi je ___.',
          options: ['da pričekaj', 'da pričekam je', 'pričekati', 'da je pričekam'],
          correct: 3,
          explanation:
            'Imperative → da + present, and "me" (her) becomes je, placed straight after da: da je pričekam.',
        },
        {
          q: 'Report: "Je li ti se svidjelo?" → Pitali su me ___.',
          options: [
            'je li mi se svidjelo',
            'je li se mi svidjelo',
            'mi se je li svidjelo',
            'je li ti se svidjelo',
          ],
          correct: 0,
          explanation:
            'The person changes (ti → mi), and the order is je li, then the dative mi, then se.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Reported Speech — Key Takeaways',
      points: [
        'Croatian keeps the original tense: Rekla je da je umorna.',
        'Statements: da; yes/no questions: verb + li (je li, jesam li)',
        'Wh-questions keep the question word, with no da',
        'Commands: da or neka + present: Rekla mi je da zatvorim prozor.',
        'Change the person to fit the new speaker: da me voli',
        'Short words sit right after da or li: da mu ga je dao',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 57 · Interjections
// ─────────────────────────────────────────────────────────
const INTERJECTIONS = {
  id: 'interjections',
  title: 'Joj, Uf, Bravo! Interjections',
  subtitle: 'The small words for pain, relief, surprise and praise — with the right comma and case',
  icon: '😮',
  level: 'B2',
  duration: '~8 min',
  color: '#c2410c',
  bg: '#fff7ed',
  slides: [
    {
      type: 'intro',
      title: 'Small Words, Big Feelings',
      body: 'Interjections — uzvici — are the small words that burst out when you feel something: pain, relief, surprise, delight, or the wish for someone to be quiet. They never change their form, and a single one can carry a whole sentence of meaning. Native speakers use them all the time, and a learner who uses them well sounds much more natural.',
      icon: '😮',
    },
    {
      type: 'rule',
      title: 'Pain, Fright and Dismay',
      body: 'Joj — sudden pain, surprise or worry: Joj, udario sam se! Joj, kako je kasno! Jao — sharper pain or grief: Jao, boli me noga! Ajme — dismay, "oh no!", very colloquial: Ajme, zaboravio sam ključeve! Jao meni and joj meni add a dative pronoun: woe is me. With another pronoun it becomes a warning: Jao tebi ako zakasniš!',
      highlight: 'Joj, udario sam se!',
    },
    {
      type: 'rule',
      title: 'Relief, Surprise, Understanding',
      body: 'Uf — relief or tiredness: Uf, napokon smo stigli! Uf, kako je vruće! Oho — surprise, often pleasant: Oho, pa ti si narastao! Aha — "I see", understanding: Aha, sad mi je jasno. Ups — a small accident, informal: Ups, prolio sam kavu.',
      highlight: 'Uf, napokon smo stigli!',
    },
    {
      type: 'rule',
      title: 'Attention, Silence and Praise',
      body: 'Hej — to call someone or greet a friend: Hej, čekaj me! Pst — "shh", asking for silence: Pst, beba spava! Bravo — praise, in any register: Bravo, odlično si to riješio!',
      highlight: 'Pst, beba spava!',
    },
    {
      type: 'rule',
      title: 'Punctuation',
      body: 'An interjection is separated from the rest of the sentence by a comma, and the sentence usually ends with an exclamation mark: Joj, kako boli! Bravo, Ivane! When the interjection stands alone, it takes the exclamation mark itself: Ajme! Bravo! A question can follow too: Hej, jesi li dobro?',
      highlight: 'Joj, kako boli!',
    },
    {
      type: 'rule',
      title: 'The Vocative After an Interjection',
      body: 'An interjection is usually aimed at someone, so the name or noun that follows is in the vocative — the calling case: Hej, Ivane! Bravo, Petre! Joj, bako, pazi! Pst, djeco! Some names keep their usual form — Bravo, Ana! Hej, Luka! — while others change: Marija → Marijo, Petar → Petre. If a name is in the middle of the sentence, it gets commas on both sides: Hej, Ivane, čekaj me!',
      highlight: 'Hej, Ivane!',
    },
    {
      type: 'rule',
      title: 'Register',
      body: 'Bravo, joj and aha are fine almost anywhere. Ajme, ups, uf and hej belong to everyday speech with friends and family; in a formal email or a meeting with officials they sound too casual. Pst is fine with children or in a cinema, but can sound rude to an adult you do not know. In writing, interjections appear in dialogue, messages and stories, rarely in formal texts. When you report what someone said, the interjection drops out and the feeling goes into the verb: Ana je uzviknula da je to divno.',
      highlight: 'Ajme, ups, uf and hej',
    },
    {
      type: 'table',
      title: 'Common Interjections',
      headers: ['Interjection', 'Feeling', 'Example'],
      rows: [
        ['joj', 'pain, surprise, worry', 'Joj, kako je kasno!'],
        ['jao', 'sharp pain, grief', 'Jao, boli me!'],
        ['ajme', 'dismay ("oh no")', 'Ajme, ključevi!'],
        ['uf', 'relief, tiredness', 'Uf, gotovo je.'],
        ['oho', 'surprise', 'Oho, što je ovo?'],
        ['aha', 'understanding', 'Aha, sad shvaćam.'],
        ['ups', 'a small accident', 'Ups, pardon!'],
        ['hej', 'calling, greeting', 'Hej, kako si?'],
        ['pst', 'silence, please', 'Pst, tiho!'],
        ['bravo', 'praise', 'Bravo, svaka čast!'],
      ],
    },
    {
      type: 'example',
      title: 'Feelings',
      items: [
        {
          hr: 'Joj, kako je kasno, propustit ćemo vlak!',
          en: 'Oh, it is so late, we will miss the train!',
          note: 'joj — worry; comma after it',
        },
        {
          hr: 'Jao, opekao sam prst na tavi!',
          en: 'Ow, I burnt my finger on the pan!',
          note: 'jao — sharp pain',
        },
        {
          hr: 'Ajme, ostavio sam novčanik u taksiju!',
          en: 'Oh no, I left my wallet in the taxi!',
          note: 'ajme — dismay, colloquial',
        },
        {
          hr: 'Uf, napokon je prestala kiša.',
          en: 'Phew, the rain has finally stopped.',
          note: 'uf — relief',
        },
        {
          hr: 'Oho, netko je danas dobre volje!',
          en: 'Well, well, somebody is in a good mood today!',
          note: 'oho — surprise',
        },
        {
          hr: 'Aha, znači da sutra ne radimo.',
          en: 'I see, so that means we are not working tomorrow.',
          note: 'aha — understanding',
        },
        {
          hr: 'Ups, krivo sam upisao lozinku.',
          en: 'Oops, I typed the password wrong.',
          note: 'ups — a small slip, informal',
        },
      ],
    },
    {
      type: 'example',
      title: 'With Names and in Reports',
      items: [
        {
          hr: 'Hej, Ivane, čekaj me na stanici!',
          en: 'Hey, Ivan, wait for me at the stop!',
          note: 'Ivane — vocative, with commas on both sides',
        },
        {
          hr: 'Pst, djeco, film počinje!',
          en: 'Shh, children, the film is starting!',
          note: 'djeco — the vocative of djeca',
        },
        {
          hr: 'Bravo, Petre, položio si ispit!',
          en: 'Well done, Petar, you passed the exam!',
          note: 'Petre — the vocative of Petar',
        },
        {
          hr: 'Joj, bako, nemoj nositi te teške torbe!',
          en: 'Oh, Grandma, don’t carry those heavy bags!',
          note: 'bako — the vocative of baka',
        },
        {
          hr: 'Jao meni, opet sam zaboravio njezin rođendan!',
          en: 'Woe is me, I have forgotten her birthday again!',
          note: 'jao + the dative meni',
        },
        {
          hr: 'Ana je uzviknula da je to divno.',
          en: 'Ana exclaimed that it was wonderful.',
          note: 'reported: the interjection drops out, the feeling goes into the verb',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which interjection asks for silence?',
      options: ['bravo', 'pst', 'oho'],
      correct: 1,
      explanation: 'Pst is the Croatian "shh": Pst, beba spava!',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Hej, ___, dođi ovamo!" (Ivan)',
      options: ['Ivan', 'Ivane', 'Ivanu'],
      correct: 1,
      explanation: 'The person called is in the vocative: Ivan → Ivane.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving out the comma: "Joj kako boli!" — it is Joj, kako boli! (2) The nominative for the person called: "Bravo, Petar!" — use the calling case: Bravo, Petre! (3) Ajme or ups in a formal setting — they are colloquial. (4) A nominative pronoun after jao: "Jao ja!" — it takes the dative: Jao meni!',
      highlight: 'Bravo, Petre!',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which interjection fits? "___, napokon smo stigli kući!" (relief)',
          options: ['Uf', 'Pst', 'Hej', 'Ups'],
          correct: 0,
          explanation: 'Uf expresses relief or tiredness.',
        },
        {
          q: 'Complete: "Bravo, ___!" (Petar)',
          options: ['Petar', 'Petra', 'Petre', 'Petru'],
          correct: 2,
          explanation: 'After an interjection the person called is in the vocative: Petre.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: ['Joj kako boli!', 'Joj, kako boli!', 'Joj! kako, boli', 'Joj kako, boli!'],
          correct: 1,
          explanation: 'A comma after the interjection, an exclamation mark at the end.',
        },
        {
          q: 'Complete: "Jao ___, opet kasnim!"',
          options: ['ja', 'mene', 'meni', 'mnom'],
          correct: 2,
          explanation: 'Jao and joj take the dative: Jao meni! — woe is me.',
        },
        {
          q: 'Which of these words is a casual interjection?',
          options: ['poštovani', 'ajme', 'svakako', 'nažalost'],
          correct: 1,
          explanation:
            'Ajme is a colloquial interjection of dismay; the others are not interjections.',
        },
        {
          q: 'What does "Aha" express in "Aha, sad razumijem."?',
          options: ['pain', 'a warning', 'disgust', 'understanding'],
          correct: 3,
          explanation: 'Aha means "I see" — understanding.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Interjections — Key Takeaways',
      points: [
        'joj, jao, ajme — pain, worry, dismay',
        'uf — relief; oho — surprise; aha — understanding; ups — a slip',
        'hej — calling; pst — silence; bravo — praise',
        'A comma after the interjection, an exclamation mark at the end',
        'The person called is in the vocative: Hej, Ivane! Joj, bako!',
        'Jao meni — a dative pronoun; ajme, ups, uf, hej are casual',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 58 · Free time, sport and travel
// ─────────────────────────────────────────────────────────
const TRAVEL_AND_SPORT = {
  id: 'travel-and-sport',
  title: 'Hej, Haj, Uživaj! Free Time, Sport and Travel',
  subtitle: 'Hobbies, boredom, rest and the story of a trip',
  icon: '🏀',
  level: 'B2',
  duration: '~9 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'What Do You Do When You Are Free?',
      body: 'Free time is where conversation lives: what you play, whom you support, how you rest, what you do when you are bored, and where you travelled last summer. This lesson gives you the verbs and cases that go with them — baviti se + instrumental, igrati + accusative, navijati za — the two ways to be bored, the prefix na- that means "to your heart’s content", and the way aspect carries a travel story.',
      icon: '🏀',
    },
    {
      type: 'rule',
      title: 'Baviti se, Igrati, Navijati',
      body: 'Baviti se + instrumental says what you do regularly as an activity: Bavim se plivanjem. Čime se baviš u slobodno vrijeme? Moj brat se bavi fotografijom. A ball game you play takes igrati + accusative, with no preposition: igram košarku, igraju nogomet, igramo tenis. You support a team with navijati za + accusative: Navijam za Hajduk.',
      highlight: 'Bavim se plivanjem.',
    },
    {
      type: 'rule',
      title: 'Boredom and Rest',
      body: 'Boredom has two shapes. The dative one: Dosadno mi je. (I am bored — literally "it is boring to me".) The reflexive one: Dosađujem se. (I am getting bored.) Something boring is dosadan: Film je bio dosadan. Careful: "Ja sam dosadan" means I am a boring person. Rest: odmarati se (to rest), šetati (to walk, to stroll), ići u šetnju (to go for a walk), spavati (to sleep). Many people say boredom feeds creativity: kad nam je dosadno, počinjemo smišljati nove stvari.',
      highlight: 'Dosadno mi je.',
    },
    {
      type: 'rule',
      title: 'Na- + se: To Your Heart’s Content',
      body: 'The prefix na- together with se means doing something until you have had enough: naspavati se (to get enough sleep), najesti se (to eat your fill), naputovati se (to travel a lot), nagledati se (to see plenty of). What you had your fill of goes into the genitive: najesti se kolača. Vikendom se napokon naspavam. Ljetos smo se naputovali. Najeli smo se domaćeg kruha.',
      highlight: 'naspavati se',
    },
    {
      type: 'rule',
      title: 'Telling a Trip: Aspect Carries the Story',
      body: 'In a travel story the perfective verbs move the plot forward and the imperfective ones paint the background: Krenuli smo u šest. Dok smo vozili uz obalu, sunce je izlazilo. Stigli smo u Zadar i odmah se okupali. Time words keep the reader oriented: najprije (first), zatim (then), nakon toga (after that), napokon (finally), na kraju (in the end).',
      highlight: 'Krenuli smo u šest.',
    },
    {
      type: 'rule',
      title: 'Two Croatians Worth Knowing',
      body: 'Dražen Petrović (1964–1993), born in Šibenik, was one of the greatest European basketball players. He played for Cibona Zagreb, Real Madrid and in the NBA, and won Olympic silver with Croatia in Barcelona in 1992. He died in a car accident in Germany in 1993; the Dražen Petrović Memorial Centre in Zagreb keeps his memory alive. Davor Rostuhar is a Croatian travel writer and photographer whose books and pictures bring far-off places to Croatian readers. The UN’s International Day of Sport for Development and Peace is 6 April.',
      highlight: 'Dražen Petrović (1964–1993)',
    },
    {
      type: 'table',
      title: 'Free-Time Phrases',
      headers: ['Croatian', 'English', 'Grammar'],
      rows: [
        ['baviti se sportom', 'to do sport', '+ instrumental'],
        ['igrati košarku', 'to play basketball', '+ accusative'],
        ['navijati za Hajduk', 'to support Hajduk', 'za + accusative'],
        ['dosadno mi je', 'I am bored', 'dative'],
        ['dosađivati se', 'to be getting bored', 'reflexive'],
        ['naspavati se', 'to get enough sleep', 'na- + se'],
        ['ići u šetnju', 'to go for a walk', 'u + accusative'],
        ['putopis', 'a travel book', 'noun'],
      ],
    },
    {
      type: 'example',
      title: 'Sport and Free Time',
      items: [
        {
          hr: 'Dva puta tjedno bavim se plivanjem.',
          en: 'Twice a week I go swimming.',
          note: 'baviti se + instrumental: plivanjem',
        },
        {
          hr: 'Dečki igraju košarku iza škole.',
          en: 'The boys are playing basketball behind the school.',
          note: 'igrati + accusative, no preposition',
        },
        {
          hr: 'Cijela obitelj navija za Dinamo.',
          en: 'The whole family supports Dinamo.',
          note: 'navijati za + accusative',
        },
        {
          hr: 'Nedjeljom idemo u dugu šetnju uz rijeku.',
          en: 'On Sundays we go for a long walk along the river.',
          note: 'u + accusative: u šetnju',
        },
        {
          hr: 'Djeci je bilo dosadno pa su počela crtati.',
          en: 'The children were bored, so they started drawing.',
          note: 'djeci — dative: the bored ones',
        },
        {
          hr: 'Kad se dosađujem, sviram gitaru.',
          en: 'When I get bored, I play the guitar.',
          note: 'dosađivati se — the reflexive way to be bored',
        },
        {
          hr: 'Konačno sam se naspavao nakon napornog tjedna.',
          en: 'I finally got enough sleep after a hard week.',
          note: 'na- + se: enough of it',
        },
      ],
    },
    {
      type: 'example',
      title: 'Travel Stories',
      items: [
        {
          hr: 'Krenuli smo rano ujutro, dok je grad još spavao.',
          en: 'We set off early in the morning, while the city was still asleep.',
          note: 'krenuli — a step; spavao — the background',
        },
        {
          hr: 'Na putu smo stali u malom selu i najeli se domaćeg kruha.',
          en: 'On the way we stopped in a small village and ate our fill of homemade bread.',
          note: 'najesti se + genitive',
        },
        {
          hr: 'Rostuharove fotografije vode nas u daleke zemlje.',
          en: 'Rostuhar’s photographs take us to distant countries.',
          note: 'Rostuharove — a possessive adjective',
        },
        {
          hr: 'Dražen Petrović rođen je u Šibeniku.',
          en: 'Dražen Petrović was born in Šibenik.',
          note: 'u + locative: u Šibeniku',
        },
        {
          hr: 'Mnogi navijači posjećuju Memorijalni centar Dražen Petrović u Zagrebu.',
          en: 'Many fans visit the Dražen Petrović Memorial Centre in Zagreb.',
          note: 'centar — the object, accusative',
        },
        {
          hr: 'Ljetos smo se naputovali, a sad nam je dosadno kod kuće.',
          en: 'This summer we travelled to our heart’s content, and now we are bored at home.',
          note: 'naputovati se; nam je dosadno',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Čime se baviš? — Bavim se ___."',
      options: ['plivanje', 'plivanjem', 'plivanja'],
      correct: 1,
      explanation: 'Baviti se takes the instrumental: plivanjem.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is correct?',
      options: ['Igram u košarku.', 'Igram košarku.', 'Igram košarkom.'],
      correct: 1,
      explanation: 'A game you play takes igrati + accusative with no preposition: Igram košarku.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) A preposition before the game: "igram u nogomet" — it is igram nogomet. (2) The accusative after baviti se: "bavim se sport" — baviti se takes the instrumental: bavim se sportom. (3) "Ja sam dosadan" for "I am bored" — that means you are a boring person; say Dosadno mi je. (4) Forgetting se: "Konačno sam naspavao" — it is Konačno sam se naspavao.',
      highlight: 'Dosadno mi je.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "U slobodno vrijeme bavim se ___."',
          options: ['fotografija', 'fotografiju', 'fotografijom', 'fotografiji'],
          correct: 2,
          explanation: 'Baviti se + instrumental: fotografijom.',
        },
        {
          q: 'How do you say "I am bored"?',
          options: ['Ja sam dosadan.', 'Dosadno mi je.', 'Dosađuje me.', 'Imam dosadu.'],
          correct: 1,
          explanation:
            'Dosadno mi je — "it is boring to me". Ja sam dosadan means you are a boring person.',
        },
        {
          q: 'Complete: "Dečki ___ nogomet u parku."',
          options: ['igraju', 'igraju se', 'igraju u', 'igraju s'],
          correct: 0,
          explanation: 'Igrati + accusative, with no preposition and no se: igraju nogomet.',
        },
        {
          q: 'Complete: "Nakon napornog tjedna napokon sam se ___."',
          options: ['spavao', 'zaspavao', 'naspavao', 'prespavao'],
          correct: 2,
          explanation: 'Na- + se means "enough of it": naspavati se — to get enough sleep.',
        },
        {
          q: 'Where was Dražen Petrović born?',
          options: ['Zagreb', 'Split', 'Rijeka', 'Šibenik'],
          correct: 3,
          explanation: 'Dražen Petrović was born in Šibenik in 1964.',
        },
        {
          q: 'Complete: "Navijam ___ Hajduk."',
          options: ['na', 'za', 'u', 's'],
          correct: 1,
          explanation: 'Navijati za + accusative: navijam za Hajduk.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Free Time, Sport and Travel — Key Takeaways',
      points: [
        'Baviti se + instrumental: bavim se plivanjem',
        'Igrati + accusative, no preposition: igram košarku',
        'Navijati za + accusative: navijam za Hajduk',
        'Dosadno mi je / Dosađujem se — two ways to be bored',
        'Na- + se: naspavati se, najesti se, naputovati se',
        'Perfective verbs move a story, imperfective verbs paint the background',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [
  GENITIVE_OF_NEGATION,
  CLIMATE_ENVIRONMENT,
  REPORTED_SPEECH_B2,
  INTERJECTIONS,
  TRAVEL_AND_SPORT,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'genitive-of-negation': {
    worked: [
      {
        title: 'There Was No…',
        problem: 'Prevedi: "There was no bread in the shop yesterday."',
        en: 'There was no bread in the shop yesterday.',
        steps: [
          {
            label: 'There was no',
            text: 'The existential past: nije bilo, frozen in the neuter singular.',
          },
          { label: 'What is missing', text: 'It goes into the genitive: kruh → kruha.' },
          { label: 'Where and when', text: 'u + locative: u trgovini; and jučer.' },
        ],
        answer: 'Jučer u trgovini nije bilo kruha.',
      },
      {
        title: 'There Will Be No…',
        problem: 'Prevedi: "There will be no problems, I promise."',
        en: 'There will be no problems, I promise.',
        steps: [
          {
            label: 'There will be no',
            text: 'The future of nema: neće biti — it does not agree with anything.',
          },
          { label: 'The genitive plural', text: 'problemi → problema.' },
          { label: 'I promise', text: 'obećavam, after a comma.' },
        ],
        answer: 'Neće biti problema, obećavam.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Na parkiralištu nema ___ mjesta. (free)',
          options: ['slobodna', 'slobodnih', 'slobodnim', 'slobodne'],
          correct: 1,
          hint: 'Several places, and nema takes the genitive plural.',
          explanation: 'slobodnih mjesta — genitive plural after nema.',
        },
        {
          q: 'Prošlog tjedna ___ vode u cijeloj ulici.',
          options: ['nisu bile', 'nije bila', 'nije bilo', 'nije bio'],
          correct: 2,
          hint: 'The past of nema does not agree with the missing thing.',
          explanation: 'nije bilo — frozen in the neuter singular.',
        },
        {
          q: 'Gdje su djeca? — ___ nema, otišla su van.',
          options: ['Oni', 'Njih', 'Ih', 'Njima'],
          correct: 1,
          hint: 'At the start of the sentence, the long genitive form.',
          explanation: 'Njih nema — the long genitive plural, because it opens the sentence.',
        },
        {
          q: 'Danas nemam ___ ni za ručak.',
          options: ['vrijeme', 'vremena', 'vremenu', 'vremenom'],
          correct: 1,
          hint: 'Time is an amount, and nemati takes the genitive here.',
          explanation: 'vremena — the genitive of vrijeme.',
        },
        {
          q: 'Which sentence is standard Croatian?',
          options: [
            'Sutra neće biti nastava.',
            'Sutra neće biti nastave.',
            'Sutra neće biti nastavom.',
            'Sutra neće biti nastavu.',
          ],
          correct: 1,
          hint: 'The future of nema takes the same case as nema.',
          explanation: 'neće biti + genitive: nastave.',
        },
        {
          q: 'Choose the emphatic, more formal version of "Nisam dobio odgovor."',
          options: [
            'Nisam dobio odgovora.',
            'Nisam dobio odgovoru.',
            'Nisam dobio odgovorom.',
            'Nisam dobio odgovori.',
          ],
          correct: 0,
          hint: 'After a negated verb the other correct case is the one nema uses.',
          explanation:
            'odgovora — the genitive of negation, more emphatic than the everyday accusative.',
        },
        {
          q: 'What does "Od njega nema ni traga ni glasa" mean?',
          options: [
            'He is very quiet.',
            'Nobody has seen or heard from him.',
            'He left a message.',
            'He has lost his voice.',
          ],
          correct: 1,
          hint: 'Not a trace, not a word.',
          explanation: 'The phrase means someone has vanished without any sign.',
        },
        {
          q: 'Na ulici nije bilo ni žive ___.',
          options: ['duša', 'duše', 'duši', 'dušu'],
          correct: 1,
          hint: 'A fixed phrase after nije bilo — the genitive.',
          explanation: 'ni žive duše — not a living soul.',
        },
        {
          type: 'type',
          q: 'Nemam ____ gdje je stanica. (idea — pojam)',
          answer: 'pojma',
          hint: 'A fixed phrase in the genitive.',
          explanation: 'Nemam pojma — I have no idea.',
        },
        {
          type: 'type',
          q: 'Jučer nije bilo ____. (struja)',
          answer: 'struje',
          hint: 'After nije bilo, the genitive of a feminine noun in -a.',
          explanation: 'struje — genitive singular.',
        },
        {
          type: 'type',
          q: 'U kinu nema više ____. (karte, plural)',
          answer: 'karata',
          hint: 'Genitive plural, with an extra a slipped in before the ending.',
          explanation: 'karata — the genitive plural of karta.',
        },
        {
          type: 'type',
          q: 'Ana nije tu. ____ danas nema. (her, stressed)',
          answer: 'Nje',
          hint: 'The long genitive of ona, because it opens the sentence.',
          explanation: 'Nje danas nema — the long form, since a short one cannot come first.',
        },
        {
          type: 'type',
          q: 'Ovaj vikend neće biti ____ na cesti. (gužva)',
          answer: 'gužve',
          hint: 'The future of nema takes the genitive.',
          explanation: 'gužve — genitive singular after neće biti.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Na stanici nema ___." (taxis)',
        options: ['taksiji', 'taksija', 'taksijima', 'taksije'],
        correct: 1,
        explanation: 'Nema + genitive plural: taksija.',
      },
      {
        q: 'Complete: "Prošle zime ___ snijega." (there was no)',
        options: ['nije bio', 'nije bilo', 'nije bila', 'nisu bili'],
        correct: 1,
        explanation: 'The existential past is frozen: nije bilo snijega.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Na koncertu nije bilo puno ljudi.',
          'Na koncertu nisu bili puno ljudi.',
          'Na koncertu nije bio puno ljudi.',
          'Na koncertu nije bila puno ljudi.',
        ],
        correct: 0,
        explanation: 'Nije bilo stays in the neuter singular, even with puno ljudi.',
      },
      {
        q: 'Complete: "Ne brini, ___ problema."',
        options: ['nema', 'nisu', 'nemaju', 'nije'],
        correct: 0,
        explanation: 'Nema problema — a fixed genitive phrase: no problem.',
      },
      {
        q: 'Which pair is BOTH standard Croatian?',
        options: [
          'Nema kruha. / Nema kruh.',
          'Neće biti kiše. / Neće biti kiša.',
          'Nemam pojma. / Nemam pojam.',
          'Ne vidim smisao. / Ne vidim smisla.',
        ],
        correct: 3,
        explanation:
          'After a negated verb both the accusative and the genitive are correct. After nema and neće biti, and in nemam pojma, only the genitive is standard.',
      },
      {
        q: 'In "Nisam vidio nijednog čovjeka", which case is "nijednog čovjeka"?',
        options: [
          'Only the genitive',
          'Only the accusative',
          'Either — for a living masculine noun the two forms are the same',
          'The locative',
        ],
        correct: 2,
        explanation:
          'A living masculine noun has the same form in the accusative and the genitive, so the sentence is right either way.',
      },
    ],
    vocab: [
      ['nestašica', 'shortage', 'Ljeti je na otocima bilo nestašice vode.'],
      ['struja', 'electricity', 'Jučer nije bilo struje.'],
      ['trag', 'trace, sign', 'Od lopova nema ni traga.'],
      ['pojam', 'notion, idea', 'Nemam pojma gdje je.'],
      ['smisao', 'sense, point', 'Ne vidim smisla u tome.'],
      ['odgovor', 'answer, reply', 'Nisam dobio nikakvog odgovora.'],
      ['šansa', 'chance', 'Nema šanse da stignemo na vrijeme.'],
      ['gužva', 'crowd, traffic jam', 'Danas na cesti nema gužve.'],
      ['nijedan', 'not a single', 'Nema nijednog slobodnog mjesta.'],
    ],
  },

  'climate-environment': {
    worked: [
      {
        title: 'Ne and a Short Word',
        problem: 'Prevedi: "I am not afraid of storms."',
        en: 'I am not afraid of storms.',
        steps: [
          { label: 'The verb', text: 'bojati se — to be afraid; it takes the genitive.' },
          { label: 'Ne first', text: 'Ne + the verb form one unit: ne bojim.' },
          { label: 'The short word', text: 'se follows that unit: ne bojim se.' },
          { label: 'What you fear', text: 'oluja → genitive: oluje.' },
        ],
        answer: 'Ne bojim se oluje.',
      },
      {
        title: 'A Surprised Question',
        problem: 'Prevedi: "Didn’t you know that bottles can be returned to the shop?"',
        en: 'Didn’t you know that bottles can be returned to the shop?',
        steps: [
          { label: 'Surprise', text: 'Start with zar, which shows the speaker is surprised.' },
          { label: 'The negative verb', text: 'nisi znao — the fused form of ne + si.' },
          {
            label: 'The rest',
            text: 'da se boce mogu vratiti u trgovinu — u + accusative for where to.',
          },
        ],
        answer: 'Zar nisi znao da se boce mogu vratiti u trgovinu?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ljeti zbog ___ često izbiju požari.',
          options: ['suša', 'suše', 'sušom', 'sušu'],
          correct: 1,
          hint: 'Zbog always takes the genitive.',
          explanation: 'zbog suše — genitive singular.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Ne ga bacaj u smeće.',
            'Ga ne bacaj u smeće.',
            'Ne bacaj ga u smeće.',
            'Ne bacaj u smeće ga.',
          ],
          correct: 2,
          hint: 'Ne + the verb come first; the short word follows them.',
          explanation: 'Ne bacaj ga u smeće — ga right after the ne + verb unit.',
        },
        {
          q: 'Zar ___ čuo za potres u Petrinji?',
          options: ['ne si', 'nisi', 'ni si', 'nis'],
          correct: 1,
          hint: 'Ne fuses with the forms of biti into one word.',
          explanation: 'nisi — one word.',
        },
        {
          q: 'Plastiku bacamo u ___ za plastiku.',
          options: ['spremnik', 'spremnika', 'spremniku', 'spremnikom'],
          correct: 0,
          hint: 'Where to? u + accusative, and the noun is a masculine thing.',
          explanation: 'u spremnik — accusative of direction; a masculine thing does not change.',
        },
        {
          q: 'Which word names a natural disaster?',
          options: ['otpad', 'poplava', 'spremnik', 'naknada'],
          correct: 1,
          hint: 'Think of a river that bursts its banks.',
          explanation: 'poplava — a flood.',
        },
        {
          q: '"Čega sve nema u ovom dućanu!" means:',
          options: [
            'The shop is empty.',
            'The shop has everything!',
            'Is the shop closed?',
            'Nothing here is fresh.',
          ],
          correct: 1,
          hint: 'In this exclamation the negation stresses how much.',
          explanation: 'It means the shop has all sorts of things.',
        },
        {
          q: 'Complete the tag: "Ljeta su sve toplija, ___?"',
          options: ['zar ne', 'zar da', 'li ne', 'ne li'],
          correct: 0,
          hint: 'The tag that asks for agreement.',
          explanation: 'zar ne — isn’t it so?',
        },
        {
          q: 'Which word is an exoticism?',
          options: ['tuča', 'monsun', 'oluja', 'klizište'],
          correct: 1,
          hint: 'A seasonal wind of South Asia.',
          explanation: 'monsun names a weather pattern of a distant region.',
        },
        {
          type: 'type',
          q: 'Jučer nije bilo ____ u cijelom kvartu. (voda)',
          answer: 'vode',
          hint: 'After nije bilo, the genitive.',
          explanation: 'vode — genitive singular.',
        },
        {
          type: 'type',
          q: 'Stare novine bacamo u spremnik za ____. (paper)',
          answer: 'papir',
          hint: 'Za + accusative; the noun is a masculine thing.',
          explanation: 'spremnik za papir — the paper container.',
        },
        {
          type: 'type',
          q: 'Ne ____ taj plan. (I don’t like — sviđati se, with "to me")',
          answer: 'sviđa mi se',
          hint: 'The verb first, then the dative, then se.',
          explanation: 'Ne sviđa mi se taj plan — ne + verb, then mi, then se.',
        },
        {
          type: 'type',
          q: 'Prema prognozi, sutra neće biti ____. (kiša)',
          answer: 'kiše',
          hint: 'The future of nema takes the genitive.',
          explanation: 'kiše — genitive singular.',
        },
        {
          type: 'type',
          q: 'Svjetski dan hrane obilježava se 16. ____. (October)',
          answer: 'listopada',
          hint: 'A month name in the genitive, as in every Croatian date.',
          explanation: '16. listopada — World Food Day.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which sentence is correct?',
        options: [
          'Mi se ne sviđa taj plan.',
          'Ne sviđa mi se taj plan.',
          'Ne mi sviđa se taj plan.',
          'Sviđa ne mi se taj plan.',
        ],
        correct: 1,
        explanation: 'Ne + the verb first, then mi and se.',
      },
      {
        q: 'Complete: "Vruće je, ___?" (isn’t it?)',
        options: ['zar ne', 'li ne', 'ne li', 'da ne'],
        correct: 0,
        explanation: 'The agreement tag is zar ne.',
      },
      {
        q: 'Complete: "Ove godine nije bilo ___." (drought)',
        options: ['suša', 'suše', 'suši', 'sušu'],
        correct: 1,
        explanation: 'After nije bilo, the genitive: suše.',
      },
      {
        q: 'When is Earth Day — Dan planeta Zemlje?',
        options: ['16 October', '22 March', '22 April', '29 December'],
        correct: 2,
        explanation: 'Earth Day is 22 April; World Food Day is 16 October.',
      },
      {
        q: 'What is "odvajanje otpada"?',
        options: ['burning rubbish', 'sorting waste', 'a rubbish dump', 'buying less'],
        correct: 1,
        explanation: 'Odvajanje otpada — separating paper, plastic, glass and the rest.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ne bi smo bacili hranu.',
          'Nebismo bacili hranu.',
          'Bismo ne bacili hranu.',
          'Ne bismo bacili hranu.',
        ],
        correct: 3,
        explanation:
          'With the conditional ne stays a separate word, and bismo is one word: ne bismo.',
      },
    ],
    vocab: [
      ['potres', 'earthquake', 'Potres je oštetio mnoge zgrade.'],
      ['poplava', 'flood', 'Poplava je pogodila Gunju 2014.'],
      ['požar', 'fire', 'Ljeti na obali često izbije požar.'],
      ['suša', 'drought', 'Zbog suše nema dovoljno vode.'],
      ['okoliš', 'the environment', 'Moramo čuvati okoliš.'],
      ['otpad', 'waste', 'Kod kuće odvajamo otpad.'],
      ['spremnik', 'container', 'Staklo bacamo u spremnik za staklo.'],
      ['zagađenje', 'pollution', 'Zagađenje zraka raste u velikim gradovima.'],
      ['klimatske promjene', 'climate change', 'Klimatske promjene mijenjaju naša ljeta.'],
    ],
  },

  'reported-speech-b2': {
    worked: [
      {
        title: 'A Question, Reported',
        problem: 'Prevedi: "She asked me whether I had seen the film."',
        en: 'She asked me whether I had seen the film.',
        steps: [
          { label: 'The direct question', text: '"Jesi li vidio film?"' },
          { label: 'Change the person', text: 'jesi (you) becomes jesam (I).' },
          { label: 'Li stays after the verb', text: 'jesam li — no da before it.' },
          { label: 'No change of tense', text: 'The past stays the past: jesam li vidio.' },
        ],
        answer: 'Pitala me je jesam li vidio film.',
      },
      {
        title: 'Short Words After Da',
        problem: 'Report: "Dao sam mu ga." (Marko said it)',
        en: 'Marko said he had given it to him.',
        steps: [
          { label: 'The frame', text: 'Marko je rekao da…' },
          { label: 'The person', text: 'sam (I) becomes je (he).' },
          {
            label: 'The order',
            text: 'Dative mu, accusative ga, and je last — all straight after da.',
          },
          { label: 'The verb', text: 'dao follows the cluster.' },
        ],
        answer: 'Marko je rekao da mu ga je dao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"Kasnim." → Rekla je da ___.',
          options: ['kasnim', 'kasni', 'je kasnila', 'kasniš'],
          correct: 1,
          hint: 'Keep the tense; change the person to she.',
          explanation: 'da kasni — present tense, third person.',
        },
        {
          q: '"Jesi li gladan?" → Mama me je pitala ___ gladan.',
          options: ['jesam li', 'jesi li', 'da sam', 'li sam'],
          correct: 0,
          hint: 'A yes/no question; the person becomes I.',
          explanation: 'jesam li — the long form of biti carries li.',
        },
        {
          q: '"Kamo ideš?" → Pitao me je ___.',
          options: ['da kamo idem', 'kamo idem', 'idem li kamo', 'kamo ideš'],
          correct: 1,
          hint: 'Keep the question word, add nothing, change the person.',
          explanation: 'kamo idem — no da, no li.',
        },
        {
          q: '"Otvori vrata!" → Rekao mi je ___ vrata.',
          options: ['da otvori', 'da otvorim', 'otvoriti da', 'otvorim da'],
          correct: 1,
          hint: 'An imperative becomes da + present, and I am the one who must do it.',
          explanation: 'da otvorim — da + present, first person.',
        },
        {
          q: '"Dala sam mu ga." → Rekla je da ___ dala.',
          options: ['mu ga je', 'ga mu je', 'je mu ga', 'mu je ga'],
          correct: 0,
          hint: 'Dative, then accusative, then je last.',
          explanation: 'da mu ga je dala.',
        },
        {
          q: '"Sviđa mi se Zagreb." → Rekao je da ___ Zagreb.',
          options: ['mu se sviđa', 'se mu sviđa', 'sviđa mu se', 'mi se sviđa'],
          correct: 0,
          hint: 'The short words go straight after da, dative before se; the person changes.',
          explanation: 'da mu se sviđa Zagreb.',
        },
        {
          q: '"Molim te, pomozi mi." → Zamolila me je da ___ pomognem.',
          options: ['joj', 'mi', 'je', 'ju'],
          correct: 0,
          hint: 'Help whom? The dative — and it is now her.',
          explanation: 'da joj pomognem — pomoći takes the dative.',
        },
        {
          q: '"Je li Ana doma?" → Pitali smo ___ Ana doma.',
          options: ['da je', 'li je', 'je li', 'jesi li'],
          correct: 2,
          hint: 'With biti, the verb comes first and li follows it.',
          explanation: 'je li Ana doma.',
        },
        {
          type: 'type',
          q: '"Bolesna sam." → Rekla je da ____ bolesna.',
          answer: 'je',
          hint: 'Same tense, third person.',
          explanation: 'da je bolesna.',
        },
        {
          type: 'type',
          q: '"Gdje stanuješ?" → Pitao me je gdje ____.',
          answer: 'stanujem',
          hint: 'The question was to you; now you report it as I.',
          explanation: 'gdje stanujem — first person, no li.',
        },
        {
          type: 'type',
          q: '"Dođi sutra!" → Rekla mi je da ____ sutra.',
          answer: 'dođem',
          hint: 'An imperative becomes da + the present, first person.',
          explanation: 'da dođem — present of doći.',
        },
        {
          type: 'type',
          q: '"Vratio sam joj ga." → Rekao je da ____ vratio.',
          answer: 'joj ga je',
          hint: 'Three short words: dative, accusative, and the auxiliary last.',
          explanation: 'da joj ga je vratio.',
        },
        {
          type: 'type',
          q: '"Imate li sobu?" → Pitali smo ih ____ sobu.',
          answer: 'imaju li',
          hint: 'The verb in the third person plural, then li.',
          explanation: 'imaju li sobu — a reported yes/no question.',
        },
      ],
    },
    checkB: [
      {
        q: 'Report: "Umorni smo." → Rekli su da ___ umorni.',
        options: ['smo', 'su', 'su bili', 'bi bili'],
        correct: 1,
        explanation: 'Same tense, new person: da su umorni.',
      },
      {
        q: 'Report: "Govoriš li njemački?" → Pitao me je ___ njemački.',
        options: ['govorim li', 'da govorim', 'li govorim', 'govoriš li'],
        correct: 0,
        explanation: 'The verb, then li, and the person becomes I: govorim li.',
      },
      {
        q: 'Report: "Kada počinje film?" → Pitala sam ___.',
        options: [
          'da kada počinje film',
          'kada film počinje li',
          'kada počinje film',
          'počinje li kada film',
        ],
        correct: 2,
        explanation: 'Keep the question word, add no da and no li.',
      },
      {
        q: 'Report: "Poslat ću ti ga." → Rekla je da ___ poslati.',
        options: ['ću ti ga', 'će mi ga', 'mi ga će', 'će ga mi'],
        correct: 1,
        explanation:
          'The person changes (ću → će, ti → mi), and the auxiliary comes before the dative and accusative.',
      },
      {
        q: 'Pass on the message: "Tell Iva she should call me." → Reci Ivi ___ me nazove.',
        options: ['neka', 'li', 'je li', 'što'],
        correct: 0,
        explanation: 'Neka + present passes a request on to a third person.',
      },
      {
        q: 'Which reported sentence is correct?',
        options: [
          'Rekao je da volim te.',
          'Rekao je da me voli.',
          'Rekao je da te voli me.',
          'Rekao je me da voli.',
        ],
        correct: 1,
        explanation: '"Volim te" said to me becomes da me voli: new person, me straight after da.',
      },
    ],
    vocab: [
      ['tvrditi', 'to claim', 'Tvrdi da nije ništa vidio.'],
      ['dodati', 'to add', 'Dodala je da će zakasniti.'],
      ['priznati', 'to admit', 'Priznao je da je pogriješio.'],
      ['zamoliti', 'to ask (a favour)', 'Zamolila me je da joj pomognem.'],
      ['objasniti', 'to explain', 'Objasnio nam je kako doći do hotela.'],
      ['upozoriti', 'to warn', 'Upozorio nas je da je cesta zatvorena.'],
      ['poruka', 'message', 'Reci mu neka mi pošalje poruku.'],
      ['ponoviti', 'to repeat', 'Možete li ponoviti što je rekao?'],
    ],
  },

  interjections: {
    worked: [
      {
        title: 'Interjection, Comma, Vocative',
        problem: 'Napiši: "Well done, Petar!"',
        en: 'Well done, Petar!',
        steps: [
          { label: 'The interjection', text: 'Praise: bravo.' },
          { label: 'The comma', text: 'A comma separates the interjection from the rest.' },
          { label: 'The vocative', text: 'Petar is being addressed: Petre.' },
          { label: 'The end', text: 'An exclamation mark.' },
        ],
        answer: 'Bravo, Petre!',
      },
      {
        title: 'Woe Is Me',
        problem: 'Prevedi: "Oh dear, woe is me, I have forgotten the keys again!"',
        en: 'Oh dear, woe is me, I have forgotten the keys again!',
        steps: [
          { label: 'The feeling', text: 'Dismay over one’s own bad luck: jao.' },
          { label: 'The pronoun', text: 'Jao takes the dative: meni.' },
          {
            label: 'Punctuation',
            text: 'A comma after the interjection phrase, an exclamation mark at the end.',
          },
        ],
        answer: 'Jao meni, opet sam zaboravio ključeve!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"___, udario sam glavu!" (sudden pain)',
          options: ['Joj', 'Bravo', 'Aha', 'Hej'],
          correct: 0,
          hint: 'The everyday cry of a sudden ouch.',
          explanation: 'Joj — sudden pain or surprise.',
        },
        {
          q: '"___, sad mi je jasno." (understanding)',
          options: ['Uf', 'Aha', 'Pst', 'Jao'],
          correct: 1,
          hint: 'The word for "I see".',
          explanation: 'Aha — understanding.',
        },
        {
          q: '"___, odlično si to napravila!" (praise)',
          options: ['Ups', 'Ajme', 'Bravo', 'Pst'],
          correct: 2,
          hint: 'The same praise word is used in many languages.',
          explanation: 'Bravo — praise, in any register.',
        },
        {
          q: '"Hej, ___!" (Josip)',
          options: ['Josip', 'Josipa', 'Josipe', 'Josipu'],
          correct: 2,
          hint: 'The calling case of a masculine name.',
          explanation: 'Josipe — the vocative.',
        },
        {
          q: '"Pst, ___, tiše!" (djeca)',
          options: ['djeca', 'djeco', 'djeci', 'djecu'],
          correct: 1,
          hint: 'You are calling the children: the vocative ends in -o.',
          explanation: 'djeco — the vocative of djeca.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Uf kako je vruće!',
            'Uf, kako je vruće!',
            'Uf, kako, je vruće!',
            'Uf kako je, vruće!',
          ],
          correct: 1,
          hint: 'One comma, straight after the interjection.',
          explanation: 'Uf, kako je vruće!',
        },
        {
          q: '"Jao ___!" (woe is me)',
          options: ['ja', 'meni', 'mene', 'mnom'],
          correct: 1,
          hint: 'Jao takes the "to whom" case.',
          explanation: 'Jao meni — the dative.',
        },
        {
          q: 'Which interjection is fine in almost any register?',
          options: ['ajme', 'ups', 'bravo', 'hej'],
          correct: 2,
          hint: 'You could say it to your boss after a good presentation.',
          explanation: 'Bravo fits everywhere; the others are casual.',
        },
        {
          type: 'type',
          q: '____, prolio sam kavu! (oops)',
          answer: 'Ups',
          hint: 'The informal word for a small accident.',
          explanation: 'Ups — a small slip.',
        },
        {
          type: 'type',
          q: 'Hej, ____, čekaj me! (Ivan)',
          answer: 'Ivane',
          hint: 'The vocative of a masculine name ending in a consonant.',
          explanation: 'Ivane — the vocative of Ivan.',
        },
        {
          type: 'type',
          q: 'Joj, ____, pazi! (majka)',
          answer: 'majko',
          hint: 'A feminine noun in -a: the vocative ends in -o.',
          explanation: 'majko — the vocative of majka.',
        },
        {
          type: 'type',
          q: 'Jao ____ ako zaboraviš! (you — a warning)',
          answer: 'tebi',
          hint: 'The dative of ti.',
          explanation: 'Jao tebi — a warning, with the dative.',
        },
        {
          type: 'type',
          q: 'Bravo, ____! (Petar)',
          answer: 'Petre',
          hint: 'The vocative; the a before the r drops out.',
          explanation: 'Petre — the vocative of Petar.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___, beba spava!" (asking for silence)',
        options: ['Bravo', 'Oho', 'Pst', 'Uf'],
        correct: 2,
        explanation: 'Pst — the Croatian "shh".',
      },
      {
        q: 'Complete: "Joj, ___, pazi na stepenice!" (baka)',
        options: ['baka', 'bako', 'baki', 'baku'],
        correct: 1,
        explanation: 'The vocative of baka is bako.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Hej Ivane čekaj!',
          'Hej, Ivane, čekaj!',
          'Hej Ivane, čekaj',
          'Hej, Ivane čekaj,',
        ],
        correct: 1,
        explanation:
          'A comma after hej, commas around the vocative, an exclamation mark at the end.',
      },
      {
        q: 'Which interjection expresses (often pleasant) surprise?',
        options: ['oho', 'jao', 'pst', 'ups'],
        correct: 0,
        explanation: 'Oho — surprise: Oho, pa ti si narastao!',
      },
      {
        q: 'Complete: "Jao ___ ako opet zakasniš!" (a warning to you)',
        options: ['ti', 'tebe', 'tebi', 'tobom'],
        correct: 2,
        explanation: 'Jao takes the dative: jao tebi.',
      },
      {
        q: 'What does "Ups" signal?',
        options: ['a small accident or slip', 'strong praise', 'grief', 'agreement'],
        correct: 0,
        explanation: 'Ups — oops, a small slip; informal.',
      },
    ],
    vocab: [
      ['uzvik', 'interjection, exclamation', 'Joj je čest uzvik u hrvatskom.'],
      ['uzviknuti', 'to exclaim', 'Ana je uzviknula da je to divno.'],
      ['zaboraviti', 'to forget', 'Ajme, zaboravio sam ključeve!'],
      ['proliti', 'to spill', 'Ups, prolio sam kavu.'],
      ['tiho', 'quietly', 'Pst, govori tiho!'],
      ['napokon', 'finally', 'Uf, napokon smo stigli!'],
      ['shvatiti', 'to realise, to understand', 'Aha, sad shvaćam.'],
      ['pohvala', 'praise', 'Bravo je kratka pohvala.'],
      ['pažljiv', 'careful', 'Joj, budi pažljiv na stepenicama!'],
    ],
  },

  'travel-and-sport': {
    worked: [
      {
        title: 'What Do You Do?',
        problem: 'Prevedi: "My brother does photography and supports Hajduk."',
        en: 'My brother does photography and supports Hajduk.',
        steps: [
          { label: 'A hobby', text: 'baviti se + instrumental: fotografija → fotografijom.' },
          { label: 'Se in second place', text: 'Moj brat se bavi…' },
          { label: 'Supporting', text: 'navijati za + accusative: za Hajduk.' },
        ],
        answer: 'Moj brat se bavi fotografijom i navija za Hajduk.',
      },
      {
        title: 'A Step and a Background',
        problem:
          'Prevedi: "We set off at six; while we were driving along the coast, the sun was rising."',
        en: 'We set off at six; while we were driving along the coast, the sun was rising.',
        steps: [
          { label: 'The step', text: 'Setting off is one completed act: perfective krenuli smo.' },
          {
            label: 'The background',
            text: 'Driving went on for a while: imperfective dok smo vozili.',
          },
          { label: 'The scene', text: 'The sunrise was in progress: sunce je izlazilo.' },
        ],
        answer: 'Krenuli smo u šest; dok smo vozili uz obalu, sunce je izlazilo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moja mama se bavi ___.',
          options: ['jogu', 'joga', 'jogom', 'jogi'],
          correct: 2,
          hint: 'Baviti se takes the "with" case.',
          explanation: 'jogom — the instrumental.',
        },
        {
          q: 'Petkom navečer igramo ___.',
          options: ['tenisom', 'tenis', 'u tenis', 'tenisu'],
          correct: 1,
          hint: 'Igrati + accusative, with no preposition.',
          explanation: 'igramo tenis.',
        },
        {
          q: 'Za koji klub ___?',
          options: ['navijaš', 'navijaš se', 'navijaš na', 'navijaš u'],
          correct: 0,
          hint: 'The verb is not reflexive, and za already stands at the front.',
          explanation: 'Za koji klub navijaš?',
        },
        {
          q: 'Kiša pada cijeli dan i ___ je dosadno.',
          options: ['ja', 'meni', 'mene', 'mnom'],
          correct: 1,
          hint: 'The bored person is in the dative.',
          explanation: 'meni je dosadno.',
        },
        {
          q: 'Ovog ljeta smo se ___ — obišli smo pola Europe.',
          options: ['putovali', 'naputovali', 'otputovali', 'proputovali'],
          correct: 1,
          hint: 'Na- + se: to your heart’s content.',
          explanation: 'naputovati se — to travel a lot.',
        },
        {
          q: 'Which verb paints the background in a story?',
          options: ['stigli smo', 'krenuli smo', 'vozili smo', 'okupali smo se'],
          correct: 2,
          hint: 'Look for the imperfective verb.',
          explanation: 'vozili smo — an activity in progress.',
        },
        {
          q: '"Dosađujem se" means:',
          options: ['I am boring.', 'I am getting bored.', 'I am resting.', 'I am bothering you.'],
          correct: 1,
          hint: 'The reflexive way to be bored.',
          explanation: 'Dosađujem se — I am getting bored.',
        },
        {
          q: 'Dražen Petrović won Olympic silver with Croatia in…',
          options: ['1988', '1992', '1996', '2002'],
          correct: 1,
          hint: 'The Barcelona Olympics.',
          explanation: '1992, in Barcelona.',
        },
        {
          type: 'type',
          q: 'Bavim se ____. (swimming — plivanje)',
          answer: 'plivanjem',
          hint: 'The instrumental of a neuter noun.',
          explanation: 'plivanjem — baviti se + instrumental.',
        },
        {
          type: 'type',
          q: 'Djeci je bilo ____ pa su izašla van. (bored)',
          answer: 'dosadno',
          hint: 'The neuter form that goes with a dative.',
          explanation: 'Djeci je bilo dosadno.',
        },
        {
          type: 'type',
          q: 'Napokon sam se ____. (got enough sleep — masculine)',
          answer: 'naspavao',
          hint: 'Na- + spavati, in the past tense.',
          explanation: 'naspavao sam se.',
        },
        {
          type: 'type',
          q: 'Svake večeri idemo u ____. (a walk — šetnja)',
          answer: 'šetnju',
          hint: 'Where to? u + accusative.',
          explanation: 'u šetnju — accusative.',
        },
        {
          type: 'type',
          q: 'Najeli smo se domaćeg ____. (bread)',
          answer: 'kruha',
          hint: 'Najesti se takes the genitive.',
          explanation: 'kruha — genitive of kruh.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Čime se bavi tvoja sestra? — Bavi se ___."',
        options: ['tenis', 'tenisom', 'tenisa', 'tenisu'],
        correct: 1,
        explanation: 'Baviti se + instrumental: tenisom.',
      },
      {
        q: 'Which sentence means "The children were bored"?',
        options: [
          'Djeca su bila dosadna.',
          'Djeci je bilo dosadno.',
          'Djecu je bilo dosadno.',
          'Djeca je bilo dosadno.',
        ],
        correct: 1,
        explanation:
          'The bored ones are in the dative: Djeci je bilo dosadno. Djeca su bila dosadna means they were boring.',
      },
      {
        q: 'Complete: "Na izletu smo se ___ domaćih kolača." (ate our fill)',
        options: ['najeli', 'pojeli', 'jeli', 'izjeli'],
        correct: 0,
        explanation: 'Najesti se — to eat one’s fill, with the genitive.',
      },
      {
        q: 'Which sport did Dražen Petrović play?',
        options: ['tennis', 'football', 'basketball', 'handball'],
        correct: 2,
        explanation: 'Basketball — for Cibona, Real Madrid and in the NBA.',
      },
      {
        q: 'Who is Davor Rostuhar?',
        options: ['a footballer', 'a travel writer and photographer', 'a politician', 'a singer'],
        correct: 1,
        explanation: 'Davor Rostuhar is a Croatian travel writer and photographer.',
      },
      {
        q: 'Which verb moves a travel story forward (a completed step)?',
        options: ['vozili smo', 'putovali smo', 'šetali smo', 'stigli smo'],
        correct: 3,
        explanation: 'stigli smo — perfective: one completed step.',
      },
    ],
    vocab: [
      ['slobodno vrijeme', 'free time', 'Što radiš u slobodno vrijeme?'],
      ['baviti se', 'to do (a hobby, a sport)', 'Bavim se plivanjem.'],
      ['navijati', 'to support (a team)', 'Navijam za Hajduk.'],
      ['dosadan', 'boring', 'Film je bio dosadan.'],
      ['dosađivati se', 'to be getting bored', 'Kad se dosađujem, čitam.'],
      ['odmarati se', 'to rest', 'Vikendom se odmaram.'],
      ['šetnja', 'a walk', 'Idemo u šetnju uz more.'],
      ['putopis', 'travel writing, a travel book', 'Čitam putopis o Islandu.'],
      ['putopisac', 'travel writer', 'Davor Rostuhar je hrvatski putopisac.'],
    ],
  },
};
