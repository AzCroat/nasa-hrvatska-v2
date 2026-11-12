// functions/api/content/_data/b2new/batch04.js
//
// New B2 lessons, batch 04 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 5–6: colloquialisms and health (Zdrav kao dren), then
// agreement — the nouns in -a that do not agree the way their ending suggests (tata,
// varalica, braća) and agreement after numbers and quantity words — and the changing
// Croatian family.
//
// Agreement has more than one standard answer in several places, and those are taught as
// such and never tested against each other:
//   - dva/tri/četiri + masculine noun: the past participle in -a (dva prijatelja su došla)
//     and in -i (dva prijatelja su došli) are both standard;
//   - pet+, nekoliko, mnogo: singular neuter (pet ljudi je došlo) is the careful written
//     norm; plural agreement (pet ljudi su došli) is common in speech. No item offers the
//     plural as a wrong answer;
//   - masculine nouns in -a in the PLURAL (kolege) take masculine or feminine agreement;
//     only the singular is tested;
//   - a common-gender noun (varalica) for a man in a predicate (on je velika varalica /
//     veliki varalica): both are heard, so only unambiguous items are tested.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'colloquialisms',
    masterOrder: 24,
    prerequisites: ['degrees-intensity', 'opinions-agreeing', 'feelings-inner-life'],
    objectives: [
      'Understand the commonest colloquial words: lova, faca, frajer, cura, klopa, kužiti, fora',
      'Give the standard word for each: novac, važna osoba, momak, djevojka, hrana, razumjeti, šala',
      'Choose the register: colloquial with friends, standard in formal speech and writing',
    ],
  },
  {
    id: 'health-prevention',
    masterOrder: 25,
    prerequisites: [
      'colloquialisms',
      'imperative-review',
      'conditional-forms',
      'environment-nature',
    ],
    objectives: [
      'Talk about staying healthy, falling ill and seeing a doctor',
      'Name addictions and how to stop: ovisnost o pušenju, prestati pušiti, odviknuti se od alkohola',
      'Give advice for a heat wave with the imperative and the conditional: Pijte vodu. Trebali biste ostati u hladu.',
    ],
  },
  {
    id: 'agreement-special-nouns',
    masterOrder: 26,
    prerequisites: ['adjective-agreement', 'plural-cases', 'vocative-review', 'health-prevention'],
    objectives: [
      'Agree masculine nouns in -a as masculine in the singular: naš tata je došao, s mojim tatom',
      'Make a common-gender noun follow the person: Ana je velika varalica; Marko nas je prevario',
      'Agree braća, djeca and gospoda: moja braća (feminine singular), braća su došla (plural verb)',
    ],
  },
  {
    id: 'quantity-agreement',
    masterOrder: 27,
    prerequisites: ['numbers-nouns', 'agreement-special-nouns'],
    objectives: [
      'Agree adjective and verb after dva, tri, četiri: dva dobra prijatelja su došla, dvije sestre su došle',
      'Agree after pet and up, nekoliko and mnogo: pet ljudi je došlo, nekoliko studenata je položilo',
      'Use dvoje, troje, četvero for children and mixed groups: dvoje djece je došlo',
    ],
  },
  {
    id: 'family-changes',
    masterOrder: 29,
    prerequisites: ['quantity-agreement', 'opinions-agreeing', 'describing-people'],
    objectives: [
      'Describe how the Croatian family has changed: later marriage, fewer children, grandparents helping',
      'Use sve + comparative for a trend: sve kasnije, sve manje djece',
      'Discuss what makes people happy and argue a view with s jedne strane… s druge strane',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 24 · Colloquialisms
// ─────────────────────────────────────────────────────────
const COLLOQUIALISMS = {
  id: 'colloquialisms',
  title: 'Lova, Faca, Klopa',
  subtitle: 'Everyday colloquial Croatian — what it means and where it belongs',
  icon: '🗣️',
  level: 'B2',
  duration: '~9 min',
  color: '#c2410c',
  bg: '#fff7ed',
  slides: [
    {
      type: 'intro',
      title: 'Two Ways to Say the Same Thing',
      body: 'Among friends, at home, in text messages and in films, Croatians speak a relaxed register full of colloquialisms — kolokvijalizmi, words of everyday informal speech that are not part of the standard written language. "Nemam love" and "Nemam novca" both mean "I have no money"; the first is what you say to a friend, the second what you write to a bank. You need to UNDERSTAND these words to follow real conversation. You need to know their limits so that you never use them where they sound careless.',
      icon: '🗣️',
    },
    {
      type: 'rule',
      title: 'What a Colloquialism Is',
      body: 'A colloquialism belongs to razgovorni stil, the conversational style. Dictionaries mark it razg. (razgovorno — colloquial). Each one has a standard counterpart that is safe everywhere: lova – novac, klopa – hrana, cura – djevojka. Some come from other languages — gušt, for example, is the Italian gusto. Colloquial does not mean wrong: it means "for informal situations". Every word in this lesson is Croatian colloquial speech, heard all over the country.',
      highlight: 'razgovorni stil',
    },
    {
      type: 'table',
      title: 'Colloquial and Standard',
      headers: ['Colloquial', 'Standard', 'Meaning'],
      rows: [
        ['lova', 'novac', 'money, cash'],
        ['faca', 'lice; važna osoba', 'face; a big shot'],
        ['frajer', 'momak, mladić', 'guy; a cool guy'],
        ['cura', 'djevojka', 'girl; girlfriend'],
        ['klopa', 'hrana, jelo', 'food, grub'],
        ['kužiti', 'razumjeti', 'to get, to understand'],
        ['fora', 'šala, dosjetka', 'a joke, a gag'],
        ['gušt', 'užitak', 'pleasure, enjoyment'],
        ['frka', 'gužva, žurba, nevolja', 'a rush, a fuss, trouble'],
        ['klinac', 'dijete', 'a kid'],
        ['zezati se', 'šaliti se', 'to kid around'],
        ['brijati', 'misliti', 'to reckon (colloquial sense)'],
      ],
    },
    {
      type: 'rule',
      title: 'Brijati Has Two Lives',
      body: 'In the standard language brijati means to shave: Brijem se svako jutro (I shave every morning). In colloquial speech it has two more meanings: to reckon, to think — Brijem da će kiša (I reckon it is going to rain) — and, among young people, to have a good time: Sinoć smo dobro brijali (We had a great time last night). The context always tells you which one is meant.',
      highlight: 'Brijem da će kiša',
    },
    {
      type: 'rule',
      title: 'They Decline Like Any Word',
      body: 'A colloquial noun is an ordinary noun with a gender and cases. Lova is feminine: Nemam love. Imaš li lovu? Faca is feminine too, even when it describes a man: On je velika faca (He is a big shot). Frajer is masculine: Vidio sam onog frajera. Cura: Idem u kino s curom. Colloquial verbs conjugate normally: kužim, kužiš, kuži; zezam se, zezaš se.',
      highlight: 'On je velika faca',
    },
    {
      type: 'rule',
      title: 'Choosing the Register',
      body: 'With friends, family and people your own age who speak informally, colloquial words sound natural, and avoiding them can sound stiff. In formal situations — an office, a doctor, a teacher, a job interview, an email to someone you do not know, an essay — use the standard word: "Nemam dovoljno novca", never "Nemam love". A colloquialism next to the polite Vi-form is a clash: "Gospodine, kužite?" sounds rude, while "Gospodine, razumijete li?" is right.',
      highlight: 'Nemam dovoljno novca',
    },
    {
      type: 'example',
      title: 'Among Friends',
      items: [
        {
          hr: 'Nemam love do kraja mjeseca.',
          en: 'I am out of cash until the end of the month.',
          note: 'love — genitive of lova after nemam; standard: novca',
        },
        {
          hr: 'Klopa u toj konobi je odlična.',
          en: 'The grub in that tavern is excellent.',
          note: 'klopa — standard: hrana',
        },
        {
          hr: 'Kužiš li što ti govorim?',
          en: 'Do you get what I am telling you?',
          note: 'kužiš — standard: razumiješ',
        },
        {
          hr: 'Njegova cura radi u Zagrebu.',
          en: 'His girlfriend works in Zagreb.',
          note: 'cura — standard: djevojka',
        },
        {
          hr: 'Brijem da ćemo zakasniti na vlak.',
          en: 'I reckon we are going to miss the train.',
          note: 'brijem — colloquial for mislim',
        },
        {
          hr: 'Ne ljuti se, samo se zezam.',
          en: 'Do not be angry, I am only kidding.',
          note: 'zezam se — standard: šalim se',
        },
        {
          hr: 'Ujutro je uvijek frka, svi kasnimo na posao.',
          en: 'Mornings are always a rush, we are all late for work.',
          note: 'frka — standard: žurba',
        },
      ],
    },
    {
      type: 'example',
      title: 'The Same Thing, Said Formally',
      items: [
        {
          hr: 'Nemam dovoljno novca za stanarinu.',
          en: 'I do not have enough money for the rent.',
          note: 'novca — the standard word, safe in a letter or an office',
        },
        {
          hr: 'Hrana u bolnici bila je dobra.',
          en: 'The food in the hospital was good.',
          note: 'hrana — the standard word for klopa',
        },
        {
          hr: 'Razumijete li moje pitanje?',
          en: 'Do you understand my question?',
          note: 'razumijete — the polite Vi-form takes the standard verb',
        },
        {
          hr: 'Na sastanak je došao jedan vrlo važan čovjek.',
          en: 'A very important man came to the meeting.',
          note: 'važan čovjek — what faca means in a formal report',
        },
        {
          hr: 'Mislim da ćemo morati promijeniti plan.',
          en: 'I think we will have to change the plan.',
          note: 'mislim — the standard verb for brijem',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which word is the standard equivalent of "klopa"?',
      options: ['hrana', 'fora', 'lova', 'cura'],
      correct: 0,
      explanation: 'Klopa is colloquial for food; the standard word is hrana (or jelo, a dish).',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'You are writing to your landlord to say you cannot pay this month. Which sentence fits?',
      options: [
        'Ovaj mjesec nemam love.',
        'Ovaj mjesec nemam dovoljno novca.',
        'Ovaj mjesec sam u frci s lovom.',
      ],
      correct: 1,
      explanation:
        'A message to a landlord is a formal situation, so the standard word novac belongs there. Love and frka are colloquial.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using a colloquialism in formal writing: "Molim vas da mi vratite lovu" in a complaint — write novac: Molim vas da mi vratite novac. (2) Treating faca as masculine because it describes a man: "On je veliki faca" — faca is a feminine noun, so the adjective is feminine: On je velika faca. (3) Reading brijati only as "shave": "Brijem da je zatvoreno" means "I reckon it is closed". (4) Mixing a colloquialism with the polite Vi-form: "Kužite li?" — say Razumijete li?',
      highlight: 'On je velika faca',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What does "lova" mean in standard Croatian?',
          options: ['hrana', 'šala', 'novac', 'posao'],
          correct: 2,
          explanation: 'Lova is colloquial for money; the standard word is novac.',
        },
        {
          q: 'Complete: "Ivan je u svom gradu velika ___." (a big shot)',
          options: ['faca', 'fora', 'klopa', 'frka'],
          correct: 0,
          explanation:
            'Faca means a big shot (and also a face). Fora is a joke, klopa food, frka a rush or trouble.',
        },
        {
          q: 'Which sentence suits a job interview?',
          options: [
            'Kužim taj posao jako dobro.',
            'Taj mi je posao gušt.',
            'Brijem da sam dobar za taj posao.',
            'Mislim da dobro razumijem taj posao.',
          ],
          correct: 3,
          explanation:
            'A job interview needs the standard register: mislim and razumijem. Kužim, gušt and brijem are colloquial.',
        },
        {
          q: 'In "Sinoć smo dobro brijali", brijali means…',
          options: ['we shaved', 'we had a good time', 'we thought', 'we argued'],
          correct: 1,
          explanation:
            'Among young people brijati can mean to have a good time. Context rules out shaving here.',
        },
        {
          q: 'Complete: "Nemam ___ za kino." (colloquial: no money)',
          options: ['lova', 'lovu', 'love', 'lovom'],
          correct: 2,
          explanation:
            'Lova is a feminine noun, and nemam takes the genitive: love. Lovu is the accusative.',
        },
        {
          q: 'What is the standard equivalent of "zezati se"?',
          options: ['svađati se', 'šaliti se', 'žuriti se', 'brinuti se'],
          correct: 1,
          explanation: 'Zezati se means to kid around; the standard verb is šaliti se.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Colloquialisms — Key Takeaways',
      points: [
        'Colloquialisms (kolokvijalizmi) belong to informal speech: lova, faca, frajer, cura, klopa, kužiti, fora',
        'Each has a standard counterpart: novac, važna osoba, momak, djevojka, hrana, razumjeti, šala',
        'They decline like any word: nemam love, velika faca, s curom',
        'Brijati: to shave (standard), to reckon or to have fun (colloquial)',
        'Formal speech and writing take the standard word',
        'Never pair a colloquialism with the polite Vi-form',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 25 · Health and prevention
// ─────────────────────────────────────────────────────────
const HEALTH_PREVENTION = {
  id: 'health-prevention',
  title: 'Zdrav kao dren',
  subtitle: 'Staying healthy, falling ill, addiction and the heat — and how to give advice',
  icon: '🩺',
  level: 'B2',
  duration: '~9 min',
  color: '#047857',
  bg: '#ecfdf5',
  slides: [
    {
      type: 'intro',
      title: 'As Healthy as a Cornel Tree',
      body: 'Zdrav kao dren — "as healthy as a cornel tree" — is the Croatian way of saying fit as a fiddle; the cornel (dren) is a tough tree with very hard wood. This lesson is about keeping that way: healthy habits, illness and the doctor, addiction and how to break it, and how to get through a heat wave. It is also about giving advice, which Croatian does with two tools you know already — the imperative and the conditional.',
      icon: '🩺',
    },
    {
      type: 'rule',
      title: 'Healthy Habits and Illness',
      body: 'A healthy life rests on zdrava prehrana (a healthy diet), kretanje (moving, exercise) and dovoljno sna (enough sleep). When you fall ill — razboljeti se — you may have prehlada (a cold), gripa (flu), temperatura (a fever), kašalj (a cough). Pain is said with boljeti and the person in the accusative: Boli me glava. Bole me leđa. You go to the doctor (ići liječniku), get a recept (prescription) and collect the medicine in a ljekarna (pharmacy).',
      highlight: 'Boli me glava',
    },
    {
      type: 'rule',
      title: 'Prevention',
      body: 'Bolje spriječiti nego liječiti — better to prevent than to cure. Prevention (prevencija) means regular check-ups (preventivni pregledi), vaccination (cijepljenje) and avoiding risks. The verbs are spriječiti (to prevent) and izbjegavati (to avoid): Izbjegavajte masnu hranu. Cijepljenje sprječava mnoge bolesti.',
      highlight: 'Bolje spriječiti nego liječiti',
    },
    {
      type: 'rule',
      title: 'Addiction: o + Locative, od + Genitive',
      body: 'An addiction is ovisnost, and what you are addicted TO follows o with the locative: ovisnost o pušenju (smoking), o alkoholu, o kockanju (gambling). Someone addicted is ovisan (m) / ovisna (f) o nečemu. To quit is prestati + infinitive: prestati pušiti. To wean yourself off is odviknuti se od + genitive: odviknuti se od cigareta. Help comes from a liječnik or a savjetovalište (counselling centre).',
      highlight: 'ovisnost o pušenju',
    },
    {
      type: 'rule',
      title: 'Giving Advice',
      body: 'Public advice uses the Vi-form imperative: Pijte puno vode. Izbjegavajte sunce. A prohibition is nemojte + infinitive: Nemojte izlaziti po najvećoj vrućini. Personal advice is softer in the conditional: Trebali biste više spavati (You should sleep more). Bilo bi dobro da se više krećeš (It would be good if you moved more). Na tvom mjestu, ja bih prestao pušiti (In your place, I would stop smoking).',
      highlight: 'Trebali biste više spavati',
    },
    {
      type: 'rule',
      title: 'A Heat Wave',
      body: 'In summer Croatia regularly has a toplinski val (heat wave). Public health advice is simple: drink water often, even when you are not thirsty; stay in the shade and avoid going out in the hottest part of the day, roughly from 11 to 17; wear light clothing and a hat; never leave children or pets in a parked car; and check on older neighbours who live alone. Sunčanica is sunstroke, toplinski udar heatstroke.',
      highlight: 'toplinski val',
    },
    {
      type: 'example',
      title: 'At the Doctor’s and at Home',
      items: [
        {
          hr: 'Već tri dana imam temperaturu i boli me grlo.',
          en: 'I have had a fever for three days and my throat hurts.',
          note: 'boli me grlo — the person who hurts is in the accusative, me',
        },
        {
          hr: 'Liječnica mi je dala recept za antibiotik.',
          en: 'The doctor gave me a prescription for an antibiotic.',
          note: 'recept — the paper you take to the pharmacy',
        },
        {
          hr: 'Preventivni pregled jednom godišnje može spasiti život.',
          en: 'A check-up once a year can save a life.',
          note: 'preventivni pregled — a routine check-up',
        },
        {
          hr: 'Moj djed je zdrav kao dren, iako ima devedeset godina.',
          en: 'My grandfather is as fit as a fiddle, although he is ninety.',
          note: 'zdrav kao dren — the idiom for very healthy',
        },
        {
          hr: 'Brat mi je prestao pušiti prije pet godina.',
          en: 'My brother stopped smoking five years ago.',
          note: 'prestao pušiti — prestati + infinitive',
        },
        {
          hr: 'Ovisnost o alkoholu teško je pobijediti bez pomoći.',
          en: 'Alcohol addiction is hard to beat without help.',
          note: 'ovisnost o alkoholu — o + locative',
        },
      ],
    },
    {
      type: 'example',
      title: 'Advice in a Heat Wave',
      items: [
        {
          hr: 'Pijte vodu i kad niste žedni.',
          en: 'Drink water even when you are not thirsty.',
          note: 'pijte — Vi-form imperative of piti',
        },
        {
          hr: 'Nemojte izlaziti na sunce u podne.',
          en: 'Do not go out into the sun at noon.',
          note: 'nemojte izlaziti — nemojte + infinitive',
        },
        {
          hr: 'Nikad ne ostavljajte djecu u zaključanom autu.',
          en: 'Never leave children in a locked car.',
          note: 'ne ostavljajte — a negated imperative',
        },
        {
          hr: 'Trebali biste posjetiti staru susjedu i pitati treba li joj što.',
          en: 'You should visit the old neighbour and ask whether she needs anything.',
          note: 'trebali biste — conditional advice, softer than an order',
        },
        {
          hr: 'Na tvom mjestu ja bih danas ostao kod kuće.',
          en: 'If I were you, I would stay at home today.',
          note: 'ja bih ostao — conditional for personal advice',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Moj otac je ovisan ___." (addicted to smoking)',
      options: ['o pušenju', 'od pušenja', 'na pušenje', 's pušenjem'],
      correct: 0,
      explanation: 'Ovisan and ovisnost take o + locative: o pušenju.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is a polite prohibition for a public notice?',
      options: [
        'Ne izlazi na sunce!',
        'Nemojte izlaziti na sunce između 11 i 17 sati.',
        'Ne izlaziti na sunce bi bilo dobro.',
      ],
      correct: 1,
      explanation:
        'Public advice uses the Vi-form, and a prohibition is nemojte + infinitive. Ne izlazi is the ti-form.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using od after ovisnost: "ovisnost od alkohola" — the standard is ovisnost o alkoholu. (2) Putting the person in pain in the nominative or dative: "Ja boli glava", "Meni boli glava" — the standard is Boli me glava. (3) Adding da after prestati: "prestao je da puši" — Croatian uses the infinitive: prestao je pušiti. (4) A bare ne with an infinitive as an order: "Ne izlaziti!" on a sign is impersonal and cold; to a person, say Nemojte izlaziti.',
      highlight: 'Boli me glava',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Već tjedan dana bole ___ leđa."',
          options: ['ja', 'mene', 'mi', 'me'],
          correct: 3,
          explanation:
            'Boljeti takes the person in the accusative; the short form me goes second: Bole me leđa.',
        },
        {
          q: 'Complete: "Teško se odviknuti ___." (from cigarettes)',
          options: ['o cigaretama', 'od cigareta', 'cigarete', 's cigaretama'],
          correct: 1,
          explanation: 'Odviknuti se od + genitive: od cigareta.',
        },
        {
          q: 'Which sentence gives a friend gentle advice?',
          options: [
            'Trebao bi više spavati.',
            'Spavati više!',
            'Ti više spavaš.',
            'Nemojte više spavati.',
          ],
          correct: 0,
          explanation:
            'Trebao bi + infinitive is the soft, conditional way to advise a friend. Nemojte is a prohibition in the Vi-form.',
        },
        {
          q: 'What does "toplinski val" mean?',
          options: ['a cold front', 'sunstroke', 'a heat wave', 'a fever'],
          correct: 2,
          explanation: 'Toplinski val is a heat wave. Sunstroke is sunčanica, a fever temperatura.',
        },
        {
          q: 'Complete: "Moja sestra je prestala ___ prije dvije godine." (to smoke)',
          options: ['da puši', 'pušenje', 'pušiti', 'puši'],
          correct: 2,
          explanation: 'Prestati takes the infinitive: prestala je pušiti.',
        },
        {
          q: 'Which piece of heat-wave advice is correct and polite?',
          options: [
            'Ostavite psa u autu dok kupujete.',
            'Nemojte piti vodu prije podne.',
            'Izlazite na sunce u podne.',
            'Provjerite kako su stariji susjedi.',
          ],
          correct: 3,
          explanation:
            'Checking on older neighbours is standard heat-wave advice. The other three give dangerous advice.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Health and Prevention — Key Takeaways',
      points: [
        'Zdrav kao dren — as fit as a fiddle',
        'Pain: Boli me glava, Bole me leđa (accusative person)',
        'Ovisnost / ovisan o + locative; odviknuti se od + genitive; prestati + infinitive',
        'Public advice: Vi-form imperative and nemojte + infinitive',
        'Personal advice: Trebao/Trebala bi…, Bilo bi dobro da…, Na tvom mjestu ja bih…',
        'Heat wave: water, shade, no going out at the hottest hours, check on the elderly',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 26 · Agreement of special nouns in -a
// ─────────────────────────────────────────────────────────
const AGREEMENT_SPECIAL = {
  id: 'agreement-special-nouns',
  title: 'Naš tata, ta varalica, moja braća',
  subtitle: 'Nouns in -a that do not agree the way their ending suggests',
  icon: '👨‍👦',
  level: 'B2',
  duration: '~9 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'An Ending Is Not a Gender',
      body: 'You learned early that nouns ending in -a are usually feminine: žena, kuća, škola. Three groups break that rule. Tata ends in -a and is masculine. Varalica (a cheat) is masculine or feminine depending on who the cheat is. Braća (brothers) looks like a feminine singular word and yet takes a plural verb. Each group declines like žena; what changes is the AGREEMENT — the endings on the adjective and the verb that go with the noun.',
      icon: '👨‍👦',
    },
    {
      type: 'rule',
      title: 'Type tata: Masculine Nouns in -a',
      body: 'Tata, kolega (colleague), vođa (leader), sluga (servant), gazda (boss, landlord) and men’s names such as Luka, Nikola and Ivica are masculine, though they decline like žena: tata, tate, tati, tatu, tatom. In the SINGULAR every word that agrees is masculine: naš tata je došao, dragi kolega, kod mog tate, s našim tatom, novom kolegi. In the plural (kolege, vođe) you will meet both masculine and feminine agreement — naši kolege and naše kolege are both used — so this lesson practises the singular.',
      highlight: 'naš tata je došao',
    },
    {
      type: 'table',
      title: 'Tata Through the Cases',
      headers: ['Case', 'Noun ending like žena', 'With a masculine adjective'],
      rows: [
        ['nominative', 'tata', 'naš tata'],
        ['genitive', 'tate', 'našeg tate'],
        ['dative', 'tati', 'našem tati'],
        ['accusative', 'tatu', 'našeg tatu'],
        ['locative', 'tati', 'o našem tati'],
        ['instrumental', 'tatom', 's našim tatom'],
      ],
    },
    {
      type: 'rule',
      title: 'Type varalica: It Follows the Person',
      body: 'Some nouns in -a name a person who can be a man or a woman: varalica (cheat), pijanica (drunkard), izbjeglica (refugee), neznalica (ignoramus). They are called common-gender nouns (imenice zajedničkog roda). For a woman, everything is feminine: Ana je velika varalica — prevarila nas je. For a man, the words that show his sex — the verb and a demonstrative like taj — are masculine: Marko nas je prevario; taj izbjeglica je stigao prošle godine. An adjective right beside the noun in a predicate often keeps the -a form even for a man (On je velika varalica), and veliki varalica is also heard.',
      highlight: 'Marko nas je prevario',
    },
    {
      type: 'rule',
      title: 'Type braća: Collective Nouns',
      body: 'Braća (brothers), djeca (children), gospoda (gentlemen) and the historical vlastela (nobility) are collective nouns: one word for a group. Their form is feminine singular, so the ADJECTIVE is feminine singular and they decline like žena: moja braća, naša djeca, ta gospoda; nemam braće, pomažem djeci, s mojom braćom. But the VERB is plural: Braća dolaze. Djeca spavaju. In the past the participle ends in -a: Braća su došla. Djeca su se igrala. Gospoda su sjela. When you count brothers, use brat: dva brata, not dva braća.',
      highlight: 'Braća su došla',
    },
    {
      type: 'table',
      title: 'The Three Types Side by Side',
      headers: ['Type', 'Adjective', 'Present', 'Past'],
      rows: [
        ['tata (m)', 'naš tata', 'tata radi', 'tata je radio'],
        ['varalica — a woman', 'ta varalica', 'ona laže', 'prevarila je'],
        ['varalica — a man', 'taj varalica', 'on laže', 'prevario je'],
        ['braća', 'moja braća', 'braća rade', 'braća su radila'],
        ['djeca', 'naša djeca', 'djeca spavaju', 'djeca su spavala'],
      ],
    },
    {
      type: 'example',
      title: 'Tata and Varalica',
      items: [
        {
          hr: 'Naš tata je jučer došao iz Njemačke.',
          en: 'Our dad came back from Germany yesterday.',
          note: 'naš and došao are masculine, agreeing with tata',
        },
        {
          hr: 'Ljeto smo proveli kod našeg tate na otoku.',
          en: 'We spent the summer at our dad’s on the island.',
          note: 'tate is genitive like žene; našeg is a masculine adjective',
        },
        {
          hr: 'Novi kolega se zove Nikola i jako je pristojan.',
          en: 'The new colleague is called Nikola and is very polite.',
          note: 'novi and pristojan are masculine with kolega',
        },
        {
          hr: 'Luka je bio dobar vođa ekipe.',
          en: 'Luka was a good team leader.',
          note: 'bio and dobar are masculine with Luka and vođa',
        },
        {
          hr: 'Ana je velika varalica, prevarila je sve nas.',
          en: 'Ana is a big cheat, she fooled all of us.',
          note: 'velika and prevarila are feminine because Ana is a woman',
        },
        {
          hr: 'Taj izbjeglica je stigao u Hrvatsku prije tri godine.',
          en: 'That refugee came to Croatia three years ago.',
          note: 'taj and stigao are masculine because the refugee is a man',
        },
      ],
    },
    {
      type: 'example',
      title: 'Braća and Djeca',
      items: [
        {
          hr: 'Moja braća žive u Kanadi.',
          en: 'My brothers live in Canada.',
          note: 'moja is feminine singular; žive is plural',
        },
        {
          hr: 'Naša djeca su se cijeli dan igrala na plaži.',
          en: 'Our children played on the beach all day.',
          note: 'naša is feminine singular; igrala is the plural participle in -a',
        },
        {
          hr: 'Ljeti putujemo s mojom braćom.',
          en: 'In summer we travel with my brothers.',
          note: 'braćom is instrumental like ženom; mojom agrees with it',
        },
        {
          hr: 'Poštovana gospodo, dobro došli!',
          en: 'Dear gentlemen, welcome!',
          note: 'gospodo is the vocative of gospoda',
        },
        {
          hr: 'Imam dva brata i nijednu sestru.',
          en: 'I have two brothers and no sister.',
          note: 'brata — for counting, use brat, not braća',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "___ tata radi u bolnici."',
      options: ['Naš', 'Naša', 'Naše', 'Naši'],
      correct: 0,
      explanation: 'Tata is masculine, so the possessive is masculine singular: naš tata.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Djeca ___ u školi."',
      options: ['je', 'su', 'smo'],
      correct: 1,
      explanation: 'Djeca takes a plural verb: djeca su u školi.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Making tata feminine because of its ending: "Naša tata je došla" — tata is masculine: Naš tata je došao. (2) Giving braća or djeca a singular verb: "Moja braća dolazi", "Djeca je spavala" — the verb is plural: Moja braća dolaze. Djeca su spavala. (3) Making the adjective plural: "moji braća", "naši djeca" — the adjective is feminine singular: moja braća, naša djeca. (4) Counting with braća: "dva braća" — say dva brata.',
      highlight: 'Moja braća dolaze',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Naš tata je jučer ___ iz Splita."',
          options: ['stigla', 'stiglo', 'stigao', 'stigle'],
          correct: 2,
          explanation: 'Tata is masculine, so the participle is masculine: stigao.',
        },
        {
          q: 'Complete: "Razgovarao sam s ___ kolegom."',
          options: ['novim', 'novom', 'novog', 'nove'],
          correct: 0,
          explanation:
            'Kolegom is instrumental like ženom, but kolega is masculine, so the adjective is masculine: novim.',
        },
        {
          q: 'Complete: "Moja braća ___ u Zagrebu."',
          options: ['živi', 'živim', 'živiš', 'žive'],
          correct: 3,
          explanation: 'Braća takes a plural verb: žive.',
        },
        {
          q: 'Complete: "___ djeca su se igrala u parku."',
          options: ['Naši', 'Naša', 'Naše', 'Našu'],
          correct: 1,
          explanation:
            'The adjective with djeca is feminine singular: naša djeca. The verb is plural.',
        },
        {
          q: 'Marko is a big cheat. Complete: "Prošli tjedan nas je opet ___."',
          options: ['prevario', 'prevarila', 'prevarile', 'prevarilo'],
          correct: 0,
          explanation: 'The cheat is a man, so the verb that shows his sex is masculine: prevario.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Gosti su došla s djecom.',
            'Moja braća je došla.',
            'Moja su braća došla.',
            'Moji braća su došli.',
          ],
          correct: 2,
          explanation:
            'Moja (feminine singular) + plural verb with the participle in -a: Moja su braća došla.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Special Nouns in -a — Key Takeaways',
      points: [
        'Tata, kolega, vođa, Luka decline like žena but agree as masculine in the singular',
        'Naš tata je došao; s našim tatom; kod mog tate',
        'Varalica, pijanica, izbjeglica follow the person: feminine for a woman, a masculine verb for a man',
        'Braća, djeca, gospoda: feminine singular adjective, plural verb',
        'Braća su došla, djeca su se igrala — the plural participle in -a',
        'Count with brat: dva brata',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 27 · Agreement after numbers and quantity words
// ─────────────────────────────────────────────────────────
const QUANTITY_AGREEMENT = {
  id: 'quantity-agreement',
  title: 'Dva su došla, pet je došlo',
  subtitle: 'How the adjective and the verb agree after numbers and quantity words',
  icon: '🔢',
  level: 'B2',
  duration: '~9 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'The Number Decides the Verb',
      body: 'You already know that a number decides the NOUN’s form: dva prijatelja, pet prijatelja. At B2 the number also decides the adjective and the verb. "Two good friends came" and "five people came" look alike in English; in Croatian they are dva dobra prijatelja su došla and pet ljudi je došlo — a different adjective ending, a different verb, a different participle. This lesson sets out the four patterns, and is honest about where speech and the written norm differ.',
      icon: '🔢',
    },
    {
      type: 'rule',
      title: 'One: Full Agreement',
      body: 'Jedan, jedna, jedno agrees like an adjective, and so does everything else: jedan dobar prijatelj je došao, jedna studentica je došla, jedno dijete je plakalo. The same holds for numbers ending in one: dvadeset i jedan student je došao, trideset i jedna studentica je došla.',
      highlight: 'jedan dobar prijatelj je došao',
    },
    {
      type: 'rule',
      title: 'Two, Three, Four',
      body: 'After dva (m, n) / dvije (f), tri, četiri and oba / obje (both) the noun takes the genitive-singular form: dva prijatelja, tri sestre, četiri sela. The adjective ends in -a for masculine and neuter and in -e for feminine: dva dobra prijatelja, dva velika sela, dvije dobre prijateljice. The verb is plural: dva prijatelja dolaze, tri sestre žive u Splitu. In the past, a feminine noun takes -e (dvije sestre su došle), a neuter noun -a (dva sela su izgorjela), and a masculine noun takes -a or -i, BOTH standard: dva prijatelja su došla, dva prijatelja su došli.',
      highlight: 'dva prijatelja su došla',
    },
    {
      type: 'rule',
      title: 'Five and Up, and Quantity Words',
      body: 'From pet upwards (5–20, 25, 100…) and after nekoliko (several), mnogo / puno (many), malo (few), koliko (how many) and toliko (so many), the noun AND the adjective are in the genitive plural: pet dobrih prijatelja, nekoliko novih studenata, mnogo stranih turista. The verb is in the third person singular, and in the past the participle is neuter singular: Pet ljudi je došlo. Nekoliko studenata je položilo ispit. Mnogo turista dolazi ljeti. In everyday speech you will also hear plural agreement — pet ljudi su došli — but careful writing keeps the singular.',
      highlight: 'Pet ljudi je došlo',
    },
    {
      type: 'rule',
      title: 'Dvoje, Troje, Četvero: Collective Numbers',
      body: 'For children, and for a group of men and women together, Croatian uses collective numbers: dvoje, troje, četvero, petero. They take the genitive plural, and the verb is singular, neuter in the past: Dvoje djece je došlo. Troje studenata (a man and two women) je položilo ispit. Imamo četvero djece. Dva studenta means two men; dvoje studenata means a man and a woman.',
      highlight: 'Dvoje djece je došlo',
    },
    {
      type: 'table',
      title: 'The Four Patterns',
      headers: ['Number', 'Noun and adjective', 'Present', 'Past'],
      rows: [
        ['jedan / 21', 'jedan dobar prijatelj', 'dolazi', 'je došao'],
        ['dva, tri, četiri (m)', 'dva dobra prijatelja', 'dolaze', 'su došla / su došli'],
        ['dvije, tri, četiri (f)', 'dvije dobre prijateljice', 'dolaze', 'su došle'],
        ['pet+, nekoliko, mnogo', 'pet dobrih prijatelja', 'dolazi', 'je došlo'],
        ['dvoje, troje, četvero', 'dvoje djece', 'dolazi', 'je došlo'],
      ],
    },
    {
      type: 'example',
      title: 'Two to Four',
      items: [
        {
          hr: 'Dva dobra prijatelja su došla na moj rođendan.',
          en: 'Two good friends came to my birthday.',
          note: 'dobra and došla end in -a after dva',
        },
        {
          hr: 'Dvije mlađe sestre žive s roditeljima u Osijeku.',
          en: 'Two younger sisters live with their parents in Osijek.',
          note: 'mlađe ends in -e after dvije; žive is plural',
        },
        {
          hr: 'Tri velika broda uplovila su u splitsku luku.',
          en: 'Three big ships sailed into the port of Split.',
          note: 'velika and uplovila end in -a with the masculine noun broda',
        },
        {
          hr: 'Oba brata rade u istoj tvrtki.',
          en: 'Both brothers work in the same company.',
          note: 'oba takes brata, and the verb rade is plural',
        },
        {
          hr: 'Dvadeset i jedan student je položio ispit.',
          en: 'Twenty-one students passed the exam.',
          note: 'student and položio are singular because the number ends in one',
        },
      ],
    },
    {
      type: 'example',
      title: 'Five and Up, Several, Many',
      items: [
        {
          hr: 'Na sastanak je došlo pet novih članova.',
          en: 'Five new members came to the meeting.',
          note: 'novih članova is genitive plural; došlo is neuter singular',
        },
        {
          hr: 'Nekoliko studenata nije položilo ispit.',
          en: 'Several students did not pass the exam.',
          note: 'nekoliko takes studenata and the singular verb nije položilo',
        },
        {
          hr: 'Ljeti mnogo turista posjećuje Dubrovnik.',
          en: 'In summer many tourists visit Dubrovnik.',
          note: 'mnogo takes turista and the singular verb posjećuje',
        },
        {
          hr: 'Dvoje djece je cijelo poslijepodne crtalo u vrtu.',
          en: 'Two children spent the whole afternoon drawing in the garden.',
          note: 'dvoje takes djece, and crtalo is neuter singular',
        },
        {
          hr: 'Koliko je ljudi bilo na koncertu?',
          en: 'How many people were at the concert?',
          note: 'koliko takes ljudi and the neuter singular bilo',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Dvije ___ prijateljice dolaze sutra."',
      options: ['dobre', 'dobra', 'dobrih'],
      correct: 0,
      explanation: 'After dvije a feminine adjective ends in -e: dvije dobre prijateljice.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Pet ljudi ___ došlo na predavanje."',
      options: ['su', 'je', 'smo'],
      correct: 1,
      explanation:
        'After pet the careful written norm is the singular verb with a neuter participle: je došlo.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The genitive plural after two to four: "dva dobrih prijatelja", "tri sestara" — after dva, tri, četiri it is dva dobra prijatelja, tri sestre. (2) A mismatched pair after five: "pet ljudi su došlo" — choose one pattern; the written norm is Pet ljudi je došlo. (3) A masculine participle after pet: "pet studenata je došao" — after pet the participle is neuter: je došlo. (4) Dva for a man and a woman: "dva studenta" means two men; for a mixed pair say dvoje studenata.',
      highlight: 'Pet ljudi je došlo',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Tri ___ sela leže uz rijeku."',
          options: ['malih', 'mala', 'male', 'malo'],
          correct: 1,
          explanation: 'After tri a neuter adjective ends in -a: tri mala sela.',
        },
        {
          q: 'Complete: "Nekoliko studenata ___ položilo ispit."',
          options: ['su', 'smo', 'je', 'ste'],
          correct: 2,
          explanation:
            'Položilo is neuter singular, so it needs the singular auxiliary: je položilo.',
        },
        {
          q: 'Complete: "Dvije sestre su ___ iz Zadra."',
          options: ['došla', 'došao', 'došlo', 'došle'],
          correct: 3,
          explanation: 'After dvije a feminine noun takes the participle in -e: došle.',
        },
        {
          q: 'Complete: "Imamo ___ djece, dva sina i kćer."',
          options: ['troje', 'tri', 'trojica', 'trećeg'],
          correct: 0,
          explanation: 'Children are counted with collective numbers: troje djece.',
        },
        {
          q: 'Complete: "Na izlet je otišlo pet ___ učenika."',
          options: ['dobra', 'dobrih', 'dobri', 'dobre'],
          correct: 1,
          explanation:
            'After pet the adjective is in the genitive plural, like the noun: pet dobrih učenika.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Dvadeset i jedan student su došli.',
            'Pet studenata je došao.',
            'Dva studenta su došao.',
            'Dvadeset i jedan student je došao.',
          ],
          correct: 3,
          explanation:
            'A number ending in one agrees fully in the singular: dvadeset i jedan student je došao.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Agreement After Numbers — Key Takeaways',
      points: [
        'Jedan (and 21, 31…): full singular agreement — jedan student je došao',
        'Dva, tri, četiri: dva dobra prijatelja, dvije dobre prijateljice; plural verb',
        'Past after 2–4: m -a or -i (both standard), f -e, n -a',
        'Pet+, nekoliko, mnogo: genitive plural + singular verb, neuter past — pet ljudi je došlo',
        'Speech often says pet ljudi su došli; careful writing keeps the singular',
        'Dvoje, troje, četvero for children and mixed groups: dvoje djece je došlo',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 29 · The changing family
// ─────────────────────────────────────────────────────────
const FAMILY_CHANGES = {
  id: 'family-changes',
  title: 'Obitelj nekad i danas',
  subtitle: 'How the Croatian family is changing, and what makes people happy',
  icon: '👨‍👩‍👧',
  level: 'B2',
  duration: '~9 min',
  color: '#be185d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'Three Generations Under One Roof?',
      body: 'For a long time the typical Croatian family was large, and often three generations lived in one house: grandparents, parents and children. Much of that has changed. People marry later, have fewer children, and many young people move abroad for work. Other things have stayed: grandparents still look after grandchildren, and family remains at the centre of people’s lives. This lesson gives you the words to describe these changes and the phrases to discuss them at B2 level.',
      icon: '👨‍👩‍👧',
    },
    {
      type: 'rule',
      title: 'Family Words',
      body: 'Uža obitelj is the immediate family (parents and children); šira obitelj the extended family (grandparents, aunts, uncles, cousins). Brak is marriage; to get married is vjenčati se, a wedding vjenčanje. A partner living with you without marriage is a partner / partnerica, and that arrangement is izvanbračna zajednica. A single parent is samohrani roditelj; a household kućanstvo. Generations: djed i baka, roditelji, djeca, unuci, praunuci.',
      highlight: 'samohrani roditelj',
    },
    {
      type: 'rule',
      title: 'Describing a Trend: sve + Comparative',
      body: 'A change over time is said with sve + a comparative: Mladi se vjenčavaju sve kasnije (later and later). Obitelji imaju sve manje djece (fewer and fewer children). Sve je više ljudi koji žive sami. Remember the agreement from the last lessons: sve manje djece se rađa (singular verb after a quantity word), sve je više parova bez djece.',
      highlight: 'sve manje djece',
    },
    {
      type: 'rule',
      title: 'What Has Changed',
      body: 'Croats today marry and have their first child later than their parents did. The birth rate is low, below the level needed to keep the population stable, and many young people have emigrated for work. Young adults in Croatia leave their parents’ home later than in most EU countries, often around thirty, because housing is expensive. And grandparents play a big part in raising children — so much so that the joking colloquial name for it is "baka servis", the granny service.',
      highlight: 'baka servis',
    },
    {
      type: 'rule',
      title: 'Happiness',
      body: 'A happiness index (indeks sreće) measures how satisfied people are with their lives (zadovoljstvo životom). Surveys around the world find that relationships — family, friends, support in hard times — matter a great deal, alongside health, income and trust in others. To discuss it: Po mom mišljenju… (In my opinion), S jedne strane… s druge strane… (On the one hand… on the other), Slažem se / Ne slažem se (I agree / I disagree), Ovisi o tome… (It depends on…).',
      highlight: 'S jedne strane… s druge strane',
    },
    {
      type: 'example',
      title: 'Then and Now',
      items: [
        {
          hr: 'Moji djed i baka vjenčali su se s dvadeset godina.',
          en: 'My grandparents got married at twenty.',
          note: 'vjenčati se — to get married',
        },
        {
          hr: 'Danas se mladi parovi vjenčavaju sve kasnije.',
          en: 'Today young couples get married later and later.',
          note: 'sve kasnije — sve + comparative for a trend',
        },
        {
          hr: 'U našoj kući živjele su tri generacije.',
          en: 'Three generations lived in our house.',
          note: 'tri generacije takes the feminine plural participle živjele',
        },
        {
          hr: 'Sve manje djece rađa se u malim mjestima.',
          en: 'Fewer and fewer children are born in small places.',
          note: 'sve manje djece takes the singular verb rađa se',
        },
        {
          hr: 'Mnogi mladi odlaze raditi u inozemstvo.',
          en: 'Many young people go abroad to work.',
          note: 'inozemstvo — abroad',
        },
        {
          hr: 'Baka svako jutro vodi unuke u vrtić.',
          en: 'Grandma takes the grandchildren to nursery every morning.',
          note: 'unuke — accusative plural of unuk',
        },
      ],
    },
    {
      type: 'example',
      title: 'Discussing It',
      items: [
        {
          hr: 'Po mom mišljenju, obitelj je i dalje najvažnija stvar u životu.',
          en: 'In my opinion, family is still the most important thing in life.',
          note: 'po mom mišljenju — opening an opinion',
        },
        {
          hr: 'S jedne strane, mladi su slobodniji, a s druge strane, teže dolaze do stana.',
          en: 'On the one hand young people are freer, and on the other, it is harder for them to get a flat.',
          note: 's jedne strane… s druge strane — weighing two sides',
        },
        {
          hr: 'Ne slažem se da su ljudi nekad bili sretniji.',
          en: 'I do not agree that people used to be happier.',
          note: 'ne slažem se — disagreeing politely',
        },
        {
          hr: 'Ovisi o tome imaju li roditelji pomoć bake i djeda.',
          en: 'It depends on whether the parents have help from the grandparents.',
          note: 'ovisi o tome — it depends on',
        },
        {
          hr: 'Za mene je sreća vrijeme provedeno s obitelji i prijateljima.',
          en: 'For me happiness is time spent with family and friends.',
          note: 'sreća — happiness',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'How do you say "fewer and fewer children"?',
      options: ['sve manje djece', 'manje i manje djece', 'što manje djeca'],
      correct: 0,
      explanation:
        'A trend is sve + comparative, and manje takes the genitive plural: sve manje djece.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is "baka servis"?',
      options: [
        'a home for the elderly',
        'grandparents looking after their grandchildren',
        'a cleaning company',
      ],
      correct: 1,
      explanation:
        'Baka servis is a joking colloquial name for grandparents minding the grandchildren while the parents work.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Translating "more and more" word for word: "više i više parova" — Croatian says sve više parova. (2) A plural verb after a quantity word in writing: "Sve manje djece se rađaju" — the written norm is Sve manje djece se rađa. (3) Forgetting se: "Vjenčali smo prošle godine" — the verb is reflexive: Vjenčali smo se prošle godine. (4) "Ovisi od toga" — the standard is Ovisi o tome.',
      highlight: 'Ovisi o tome',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Mladi se vjenčavaju ___ kasnije."',
          options: ['vrlo', 'sve', 'više', 'što'],
          correct: 1,
          explanation: 'Sve + comparative describes a trend: sve kasnije.',
        },
        {
          q: 'What does "šira obitelj" mean?',
          options: [
            'the immediate family',
            'a single-parent family',
            'a large household',
            'the extended family',
          ],
          correct: 3,
          explanation:
            'Šira obitelj is the extended family — grandparents, aunts, uncles, cousins. The immediate family is uža obitelj.',
        },
        {
          q: 'Complete: "Sve manje djece ___ rađa na selu."',
          options: ['se', 'su se', 'smo se', 'ste se'],
          correct: 0,
          explanation: 'After a quantity word the verb is singular: sve manje djece se rađa.',
        },
        {
          q: 'Which phrase weighs two sides of an argument?',
          options: [
            'Ovisi o tome',
            'Slažem se',
            'S jedne strane… s druge strane',
            'Po mom mišljenju',
          ],
          correct: 2,
          explanation: 'S jedne strane… s druge strane — on the one hand… on the other.',
        },
        {
          q: 'Complete: "Moja sestra je ___ roditelj, sama odgaja sina."',
          options: ['samohrana', 'samohrani', 'samohranog', 'samohranom'],
          correct: 1,
          explanation:
            'Roditelj is masculine, so its adjective is masculine whoever the parent is: samohrani roditelj.',
        },
        {
          q: 'Complete: "To ovisi ___ cijeni stanova."',
          options: ['od', 'na', 'u', 'o'],
          correct: 3,
          explanation: 'Ovisiti takes o + locative: ovisi o cijeni.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'The Changing Family — Key Takeaways',
      points: [
        'Uža obitelj, šira obitelj; brak, vjenčati se, samohrani roditelj, kućanstvo',
        'A trend: sve kasnije, sve manje djece, sve više ljudi',
        'People marry later, have fewer children; many young people emigrate',
        'Young adults leave home late; grandparents help raise children (baka servis)',
        'Happiness: relationships matter as much as income',
        'Discuss with po mom mišljenju, s jedne strane… s druge strane, ovisi o tome',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [
  COLLOQUIALISMS,
  HEALTH_PREVENTION,
  AGREEMENT_SPECIAL,
  QUANTITY_AGREEMENT,
  FAMILY_CHANGES,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  colloquialisms: {
    worked: [
      {
        title: 'From a Chat to an Email',
        problem: 'Napiši formalno: "Nemam love, a klopa u menzi je skupa."',
        en: 'Write formally: I have no cash, and the grub in the canteen is expensive.',
        steps: [
          {
            label: 'Find the colloquial words',
            text: 'Two words belong to informal speech: love (from lova) and klopa.',
          },
          {
            label: 'Swap in the standard words',
            text: 'lova → novac, klopa → hrana. Keep the case: after nemam the genitive, so novca.',
          },
          {
            label: 'Check the rest',
            text: 'menza and skupa are neutral words, so they stay.',
          },
        ],
        answer: 'Nemam novca, a hrana u menzi je skupa.',
      },
      {
        title: 'Decoding Slang',
        problem: 'Što znači: "Brijem da ti cura ne kuži foru."',
        en: 'What does this colloquial sentence mean in standard Croatian?',
        steps: [
          {
            label: 'Brijem da',
            text: 'Here brijati is not shaving but thinking: brijem da = mislim da.',
          },
          {
            label: 'Ti cura',
            text: 'Cura is djevojka, and ti is the dative of possession: your girlfriend.',
          },
          {
            label: 'Ne kuži foru',
            text: 'Kužiti = razumjeti, fora = šala: does not get the joke.',
          },
        ],
        answer: 'Mislim da tvoja djevojka ne razumije šalu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What does "frajer" mean?',
          options: ['a guy', 'a fridge', 'a waiter', 'a teacher'],
          correct: 0,
          hint: 'It is a colloquial word for a young man.',
          explanation: 'Frajer is a guy, often a cool or showy one; standard momak or mladić.',
        },
        {
          q: 'Which sentence would you say to a friend, not write to an office?',
          options: [
            'Molim Vas za informaciju o cijeni.',
            'Ovaj film je pravi gušt.',
            'Zahvaljujem na brzom odgovoru.',
            'Poštovani, šaljem prijavu.',
          ],
          correct: 1,
          hint: 'Look for the word borrowed from Italian that means pleasure.',
          explanation: 'Gušt is colloquial; the other three are formal phrases.',
        },
        {
          q: 'Complete: "Sinoć sam bio u kinu sa svojom ___." (girlfriend, colloquial)',
          options: ['cura', 'curu', 'cure', 'curom'],
          correct: 3,
          hint: 'After s (with) the instrumental; the noun declines like žena.',
          explanation: 'sa svojom curom — instrumental.',
        },
        {
          q: 'What is the standard word for "fora"?',
          options: ['žurba', 'hrana', 'šala', 'posao'],
          correct: 2,
          hint: 'A fora makes people laugh.',
          explanation: 'Fora is a joke or a gag; standard šala.',
        },
        {
          q: 'In "Brijem se svako jutro" the verb means…',
          options: ['I reckon', 'I have fun', 'I hurry', 'I shave'],
          correct: 3,
          hint: 'This is the standard meaning, with se and a time of day.',
          explanation: 'Brijati se — to shave, the standard meaning.',
        },
        {
          q: 'Complete: "On je velika ___ u glazbenom svijetu." (a big name)',
          options: ['faca', 'frka', 'klopa', 'lova'],
          correct: 0,
          hint: 'The word also means face.',
          explanation: 'Faca — a big shot.',
        },
        {
          q: 'Which reply to a professor is appropriate?',
          options: [
            'Ne kužim zadatak.',
            'Brijem da ne razumijem.',
            'Ne razumijem zadatak, možete li ga objasniti?',
            'Zadatak je frka.',
          ],
          correct: 2,
          hint: 'A professor is a formal situation: standard words and the Vi-form.',
          explanation: 'Razumjeti + možete li — standard and polite.',
        },
        {
          q: 'What does "Imamo frku" mean?',
          options: [
            'We have a joke.',
            'We are in a rush / in trouble.',
            'We have money.',
            'We have food.',
          ],
          correct: 1,
          hint: 'Frka is about pressure, not fun.',
          explanation: 'Frka — a rush, a fuss or trouble.',
        },
        {
          type: 'type',
          q: "Napiši formalno: 'Nemam dovoljno ____ za stanarinu.' (colloquial: love)",
          answer: 'novca',
          accept: ['novaca'],
          hint: 'The standard word for money, in the genitive after nemam.',
          explanation: 'Nemam dovoljno novca.',
        },
        {
          type: 'type',
          q: "Napiši formalno: 'Oprostite, ne ____ što želite reći.' (colloquial: ne kužim)",
          answer: 'razumijem',
          hint: 'The standard verb for to understand, first person singular.',
          explanation: 'Ne razumijem — the standard verb.',
        },
        {
          type: 'type',
          q: "Napiši formalno: 'U hotelu je ____ bila odlična.' (colloquial: klopa)",
          answer: 'hrana',
          accept: ['Hrana'],
          hint: 'The neutral word for what you eat, feminine nominative.',
          explanation: 'Hrana je bila odlična.',
        },
        {
          type: 'type',
          q: "Kolokvijalno: 'Nisam ozbiljan, samo se ____.' (I am only kidding)",
          answer: 'zezam',
          hint: 'The colloquial verb for joking around, first person, with se already given.',
          explanation: 'Samo se zezam — colloquial for šalim se.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the standard word for "cura"?',
        options: ['djevojka', 'majka', 'sestra', 'prijateljica'],
        correct: 0,
        explanation: 'Cura means girl or girlfriend; the standard word is djevojka.',
      },
      {
        q: 'Complete: "Imaš li malo ___ za kavu?" (cash, colloquial)',
        options: ['lova', 'love', 'lovom', 'lovi'],
        correct: 1,
        explanation: 'Malo + genitive: malo love.',
      },
      {
        q: 'Which sentence fits a letter to a bank?',
        options: [
          'Molim vas da mi vratite lovu.',
          'Kužite, nisam kriv.',
          'Molim vas da mi vratite novac.',
          'Brijem da ste pogriješili.',
        ],
        correct: 2,
        explanation: 'A letter to a bank needs the standard word novac.',
      },
      {
        q: 'What does "kužiti" mean?',
        options: ['to cook', 'to joke', 'to hurry', 'to understand'],
        correct: 3,
        explanation: 'Kužiti is colloquial for razumjeti, to understand.',
      },
      {
        q: 'Complete: "Vidiš li onog ___ s gitarom?" (that guy)',
        options: ['frajer', 'frajera', 'frajeru', 'frajerom'],
        correct: 1,
        explanation: 'A living masculine object takes the genitive-like accusative: onog frajera.',
      },
      {
        q: 'What is the standard equivalent of "klinac"?',
        options: ['dijete', 'djed', 'učitelj', 'susjed'],
        correct: 0,
        explanation: 'Klinac is colloquial for a kid; standard dijete.',
      },
    ],
    vocab: [
      ['lova', 'money, cash (colloquial)', 'Nemam love do kraja mjeseca.'],
      ['faca', 'a big shot; a face (colloquial)', 'On je velika faca u svom gradu.'],
      ['frajer', 'a guy, a cool guy (colloquial)', 'Onaj frajer svira gitaru.'],
      ['cura', 'girl, girlfriend (colloquial)', 'Njegova cura radi u Zagrebu.'],
      ['klopa', 'food, grub (colloquial)', 'Klopa u toj konobi je odlična.'],
      ['kužiti', 'to get, to understand (colloquial)', 'Kužiš li što ti govorim?'],
      ['fora', 'a joke, a gag (colloquial)', 'Nisam shvatio foru.'],
      ['gušt', 'pleasure, enjoyment (colloquial)', 'Plivati u moru je pravi gušt.'],
      ['frka', 'a rush, trouble (colloquial)', 'Ujutro je uvijek frka.'],
      ['zezati se', 'to kid around (colloquial)', 'Ne ljuti se, samo se zezam.'],
    ],
  },

  'health-prevention': {
    worked: [
      {
        title: 'Turning Advice Into a Public Notice',
        problem: 'Napiši savjet za plakat: "Do not go out in the sun between 11 and 17."',
        en: 'Write a poster notice: Do not go out in the sun between 11 and 17.',
        steps: [
          {
            label: 'Who is addressed',
            text: 'A poster speaks to everyone, so it takes the polite Vi-form.',
          },
          {
            label: 'A prohibition',
            text: 'A Vi-form prohibition is nemojte + the infinitive: nemojte izlaziti.',
          },
          {
            label: 'Where and when',
            text: 'Movement onto the sun: na + accusative, na sunce; the hours: između 11 i 17 sati.',
          },
        ],
        answer: 'Nemojte izlaziti na sunce između 11 i 17 sati.',
      },
      {
        title: 'Advising a Friend',
        problem: 'Reci prijatelju: "You should stop smoking."',
        en: 'Tell a friend: You should stop smoking.',
        steps: [
          {
            label: 'Soft advice',
            text: 'Personal advice uses the conditional of trebati: trebao bi (to a man).',
          },
          {
            label: 'Stop + infinitive',
            text: 'Prestati takes an infinitive, never da: prestati pušiti.',
          },
          {
            label: 'Put it together',
            text: 'Trebao bi + prestati + pušiti.',
          },
        ],
        answer: 'Trebao bi prestati pušiti.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Boli ___ zub."',
          options: ['me', 'mi', 'ja', 'moj'],
          correct: 0,
          hint: 'Boljeti takes the person in the accusative, in the short form.',
          explanation: 'Boli me zub.',
        },
        {
          q: 'Complete: "On je ovisan ___." (gambling)',
          options: ['od kockanja', 'na kockanje', 'o kockanju', 'kockanjem'],
          correct: 2,
          hint: 'Ovisan takes the same preposition as ovisnost, with the locative.',
          explanation: 'ovisan o kockanju — o + locative.',
        },
        {
          q: 'Which is the Vi-form imperative of piti?',
          options: ['piju', 'pijte', 'pij', 'pijete'],
          correct: 1,
          hint: 'The Vi-form imperative ends in -te.',
          explanation: 'Pijte — drink (Vi-form).',
        },
        {
          q: 'What does "Bolje spriječiti nego liječiti" mean?',
          options: [
            'Better late than never.',
            'Health is wealth.',
            'Prevention is better than cure.',
            'An apple a day keeps the doctor away.',
          ],
          correct: 2,
          hint: 'Spriječiti is to prevent, liječiti to treat.',
          explanation: 'Better to prevent than to treat — prevention is better than cure.',
        },
        {
          q: 'Complete: "Na tvom mjestu ja ___ otišao liječniku."',
          options: ['bi', 'bih', 'bismo', 'biste'],
          correct: 1,
          hint: 'The conditional auxiliary for ja.',
          explanation: 'Ja bih otišao.',
        },
        {
          q: 'Complete: "Teško mu je odviknuti se ___."',
          options: ['o alkoholu', 'alkohol', 's alkoholom', 'od alkohola'],
          correct: 3,
          hint: 'Odviknuti se takes the preposition meaning from, with the genitive.',
          explanation: 'od alkohola — od + genitive.',
        },
        {
          q: 'Which advice suits a heat wave?',
          options: [
            'Nosite laganu odjeću i šešir.',
            'Trčite u podne.',
            'Ostavite dijete u autu na kratko.',
            'Pijte samo kavu.',
          ],
          correct: 0,
          hint: 'Choose what keeps the body cool and safe.',
          explanation: 'Light clothing and a hat are standard heat-wave advice.',
        },
        {
          q: 'What is "ljekarna"?',
          options: ['a hospital', 'a pharmacy', 'a waiting room', 'a prescription'],
          correct: 1,
          hint: 'It is where you take your recept.',
          explanation: 'Ljekarna — a pharmacy.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Moj otac je prestao ____ prije deset godina.' (to smoke)",
          answer: 'pušiti',
          hint: 'Prestati takes the infinitive of the verb for smoking.',
          explanation: 'Prestao je pušiti.',
        },
        {
          type: 'type',
          q: "Dopuni: '____ izlaziti na sunce bez šešira.' (Vi-form: do not)",
          answer: 'Nemojte',
          accept: ['nemojte'],
          hint: 'The Vi-form word that turns an infinitive into a prohibition.',
          explanation: 'Nemojte izlaziti — a polite prohibition.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Trebali ____ više spavati.' (You should sleep more — Vi-form)",
          answer: 'biste',
          hint: 'The conditional auxiliary for Vi.',
          explanation: 'Trebali biste više spavati.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Ovisnost o ____ uništava zdravlje.' (smoking)",
          answer: 'pušenju',
          hint: 'The verbal noun of pušiti, in the locative after o.',
          explanation: 'ovisnost o pušenju.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Već dva dana boli ___ glava."',
        options: ['ja', 'me', 'meni', 'moja'],
        correct: 1,
        explanation: 'Boljeti takes the accusative person: Boli me glava.',
      },
      {
        q: 'Complete: "Ovisnost ___ nije samo problem odraslih."',
        options: ['od alkohola', 'na alkohol', 'alkoholom', 'o alkoholu'],
        correct: 3,
        explanation: 'Ovisnost o + locative: o alkoholu.',
      },
      {
        q: 'Which sentence is polite advice to a stranger?',
        options: [
          'Trebali biste piti više vode.',
          'Piješ premalo vode.',
          'Pij vodu!',
          'Ne piti vodu!',
        ],
        correct: 0,
        explanation: 'Trebali biste + infinitive is polite conditional advice in the Vi-form.',
      },
      {
        q: 'What does "zdrav kao dren" mean?',
        options: ['pale and weak', 'slightly ill', 'very healthy', 'recently vaccinated'],
        correct: 2,
        explanation: 'Zdrav kao dren — as fit as a fiddle.',
      },
      {
        q: 'Complete: "Baka je odlučila prestati ___ slatkiše."',
        options: ['da jede', 'jesti', 'jede', 'jedenje'],
        correct: 1,
        explanation: 'Prestati takes the infinitive: prestati jesti.',
      },
      {
        q: 'During a heat wave, which of these should you NOT do?',
        options: [
          'drink water often',
          'stay in the shade',
          'leave a dog in a parked car',
          'check on older neighbours',
        ],
        correct: 2,
        explanation: 'A parked car heats up quickly; never leave children or animals in it.',
      },
    ],
    vocab: [
      ['zdrav kao dren', 'as fit as a fiddle', 'Djed je zdrav kao dren.'],
      ['prehlada', 'a cold', 'Imam prehladu i ostajem kod kuće.'],
      ['recept', 'a prescription', 'Liječnica mi je dala recept.'],
      ['ljekarna', 'a pharmacy', 'Lijek sam kupila u ljekarni.'],
      ['preventivni pregled', 'a check-up', 'Idem na preventivni pregled jednom godišnje.'],
      ['cijepljenje', 'vaccination', 'Cijepljenje sprječava mnoge bolesti.'],
      ['ovisnost', 'addiction', 'Ovisnost o pušenju teško je pobijediti.'],
      ['prestati', 'to stop, to quit', 'Prestao je pušiti prošle godine.'],
      ['odviknuti se', 'to wean oneself off', 'Odviknula se od kave.'],
      ['toplinski val', 'a heat wave', 'Toplinski val trajao je dva tjedna.'],
      ['sunčanica', 'sunstroke', 'Dobio je sunčanicu na plaži.'],
    ],
  },

  'agreement-special-nouns': {
    worked: [
      {
        title: 'Tata in the Instrumental',
        problem: 'Reci: "I went fishing with our dad."',
        en: 'Say: I went fishing with our dad.',
        steps: [
          {
            label: 'The case',
            text: 'With whom? — s + instrumental. Tata declines like žena: tatom.',
          },
          {
            label: 'The gender',
            text: 'Tata is a man, so the possessive is masculine: our → naš, instrumental našim.',
          },
          {
            label: 'Put it together',
            text: 'Išao sam na pecanje s našim tatom.',
          },
        ],
        answer: 'Išao sam na pecanje s našim tatom.',
      },
      {
        title: 'Braća in the Past',
        problem: 'Reci: "My brothers arrived yesterday."',
        en: 'Say: My brothers arrived yesterday.',
        steps: [
          {
            label: 'The noun',
            text: 'Brothers as a group: braća, a collective noun.',
          },
          {
            label: 'The adjective',
            text: 'Braća has a feminine singular form, so the possessive is moja.',
          },
          {
            label: 'The verb',
            text: 'The verb is plural, and the past participle ends in -a: su stigla.',
          },
        ],
        answer: 'Moja braća su jučer stigla.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Kod ___ tate uvijek ima kolača."',
          options: ['našeg', 'naše', 'naših', 'našoj'],
          correct: 0,
          hint: 'Tate is genitive like žene, but tata is a man.',
          explanation: 'kod našeg tate — a masculine genitive adjective.',
        },
        {
          q: 'Complete: "Djeca ___ u dvorištu."',
          options: ['se igra', 'se igraju', 'se igram', 'se igraš'],
          correct: 1,
          hint: 'The noun looks singular, but the verb with it is not.',
          explanation: 'Djeca se igraju — plural verb.',
        },
        {
          q: 'Complete: "Ana je prava ___."',
          options: ['varalico', 'varalicu', 'varalica', 'varalice'],
          correct: 2,
          hint: 'After je the noun is in the nominative.',
          explanation: 'Ana je prava varalica.',
        },
        {
          q: 'Complete: "___ kolega je počeo raditi u ponedjeljak."',
          options: ['Nova', 'Novog', 'Novu', 'Novi'],
          correct: 3,
          hint: 'Kolega is a man here; the adjective follows his gender.',
          explanation: 'Novi kolega — masculine.',
        },
        {
          q: 'Complete: "Ne poznajem tvoju ___."',
          options: ['braća', 'braću', 'braće', 'braćom'],
          correct: 1,
          hint: 'A direct object; braća declines like žena.',
          explanation: 'tvoju braću — accusative.',
        },
        {
          q: 'Which is correct?',
          options: [
            'Gospoda su sjela za stol.',
            'Gospoda je sjela za stol.',
            'Gospoda su sjeli za stola.',
            'Gospoda sjedi su za stol.',
          ],
          correct: 0,
          hint: 'Gospoda is like braća: plural verb, participle in -a.',
          explanation: 'Gospoda su sjela.',
        },
        {
          q: 'Complete: "Ivica nam je ___ istinu."',
          options: ['rekla', 'reklo', 'rekao', 'rekle'],
          correct: 2,
          hint: 'Ivica is a man’s name.',
          explanation: 'Ivica je rekao — masculine.',
        },
        {
          q: 'How do you say "two brothers"?',
          options: ['dva braća', 'dvoje braće', 'dvije braće', 'dva brata'],
          correct: 3,
          hint: 'Count with the singular noun, not the collective.',
          explanation: 'dva brata.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Razgovarala sam s ____ tatom.' (my — instrumental)",
          answer: 'mojim',
          accept: ['svojim'],
          hint: 'The masculine instrumental of the possessive for my.',
          explanation: 's mojim tatom.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Moja braća ____ u Australiji.' (live)",
          answer: 'žive',
          hint: 'Present of živjeti, plural.',
          explanation: 'Moja braća žive.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Djeca su cijeli dan ____.' (slept — spavati)",
          answer: 'spavala',
          hint: 'The plural participle used with djeca ends in -a.',
          explanation: 'Djeca su spavala.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Kupila sam poklon ____ tati.' (our — dative)",
          answer: 'našem',
          hint: 'The masculine dative of the possessive for our.',
          explanation: 'našem tati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ljeto smo proveli kod ___ tate."',
        options: ['mojeg', 'moje', 'mojoj', 'mojih'],
        correct: 0,
        explanation:
          'Tate is genitive like žene, but the adjective is masculine: mojeg (mog) tate.',
      },
      {
        q: 'Complete: "Moja braća ___ sutra."',
        options: ['dolazi', 'dolazim', 'dolaze', 'dolaziš'],
        correct: 2,
        explanation: 'Braća takes a plural verb: dolaze.',
      },
      {
        q: 'Complete: "Naša djeca su ___ u Splitu."',
        options: ['rođeni', 'rođen', 'rođeno', 'rođena'],
        correct: 3,
        explanation: 'With djeca the plural participle ends in -a: rođena.',
      },
      {
        q: 'Complete: "Luka je bio ___ vođa."',
        options: ['dobra', 'dobar', 'dobrom', 'dobre'],
        correct: 1,
        explanation: 'Luka is a man; vođa agrees as masculine in the singular: dobar vođa.',
      },
      {
        q: 'Maja is a big cheat. Complete: "Opet nas je ___."',
        options: ['prevarila', 'prevario', 'prevarili', 'prevarilo'],
        correct: 0,
        explanation: 'The cheat is a woman, so the verb is feminine: prevarila.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Naši djeca idu u školu.',
          'Naša djeca ide u školu.',
          'Naše djeca idu u školu.',
          'Naša djeca idu u školu.',
        ],
        correct: 3,
        explanation: 'Feminine singular adjective + plural verb: Naša djeca idu u školu.',
      },
    ],
    vocab: [
      ['tata', 'dad (masculine)', 'Naš tata je došao kući.'],
      ['kolega', 'colleague (male)', 'Novi kolega je jako pristojan.'],
      ['vođa', 'leader', 'Luka je bio dobar vođa.'],
      ['varalica', 'a cheat', 'Ana je velika varalica.'],
      ['pijanica', 'a drunkard', 'Susjed je bio pijanica, ali se promijenio.'],
      ['izbjeglica', 'a refugee', 'Izbjeglica je stigao prošle godine.'],
      ['braća', 'brothers (collective)', 'Moja braća žive u Kanadi.'],
      ['djeca', 'children (collective)', 'Djeca su se igrala na plaži.'],
      ['gospoda', 'gentlemen (collective)', 'Dame i gospodo, dobro došli!'],
    ],
  },

  'quantity-agreement': {
    worked: [
      {
        title: 'Two Good Friends',
        problem: 'Reci: "Two good friends came to the party."',
        en: 'Say: Two good friends came to the party.',
        steps: [
          {
            label: 'The noun after dva',
            text: 'After dva the noun takes the genitive-singular form: prijatelja.',
          },
          {
            label: 'The adjective',
            text: 'A masculine adjective after dva ends in -a: dobra.',
          },
          {
            label: 'The verb',
            text: 'Plural auxiliary su; the participle in -a (or -i, both standard): došla.',
          },
        ],
        answer: 'Dva dobra prijatelja su došla na zabavu.',
      },
      {
        title: 'Five People',
        problem: 'Reci: "Five people waited at the stop."',
        en: 'Say: Five people waited at the stop.',
        steps: [
          {
            label: 'The noun after pet',
            text: 'From five upwards the genitive plural: ljudi.',
          },
          {
            label: 'The verb',
            text: 'In careful writing the verb is singular: je.',
          },
          {
            label: 'The participle',
            text: 'Neuter singular: čekalo.',
          },
        ],
        answer: 'Pet ljudi je čekalo na stanici.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Dva ___ stola stoje u kutu."',
          options: ['stara', 'stari', 'starih', 'stare'],
          correct: 0,
          hint: 'After dva a masculine adjective has the same ending as the noun.',
          explanation: 'dva stara stola.',
        },
        {
          q: 'Complete: "Deset ___ stanova je prodano."',
          options: ['nova', 'novi', 'novih', 'novo'],
          correct: 2,
          hint: 'After deset the adjective is in the genitive plural.',
          explanation: 'deset novih stanova.',
        },
        {
          q: 'Complete: "Mnogo turista ___ ljeti."',
          options: ['dolaze', 'dolazi', 'dolazimo', 'dolazite'],
          correct: 1,
          hint: 'After a quantity word the written norm is the third person singular.',
          explanation: 'Mnogo turista dolazi.',
        },
        {
          q: 'Complete: "Tri sestre ___ u istoj zgradi."',
          options: ['živi', 'živim', 'živiš', 'žive'],
          correct: 3,
          hint: 'After tri the verb is plural.',
          explanation: 'Tri sestre žive.',
        },
        {
          q: 'Complete: "Četiri sela su ___ u požaru."',
          options: ['izgorjela', 'izgorjelo', 'izgorjele', 'izgorio'],
          correct: 0,
          hint: 'Selo is neuter; after četiri a neuter participle ends in -a.',
          explanation: 'četiri sela su izgorjela.',
        },
        {
          q: 'Which phrase means "a man and a woman, students"?',
          options: ['dva studenta', 'dvoje studenata', 'dvije studentice', 'dva studenata'],
          correct: 1,
          hint: 'A mixed pair takes a collective number.',
          explanation: 'dvoje studenata — a mixed pair.',
        },
        {
          q: 'Complete: "Nekoliko radnika je ___ na posao."',
          options: ['zakasnio', 'zakasnili', 'zakasnila', 'zakasnilo'],
          correct: 3,
          hint: 'After nekoliko the participle is neuter singular.',
          explanation: 'Nekoliko radnika je zakasnilo.',
        },
        {
          q: 'Complete: "Dvadeset i jedna ___ je došla."',
          options: ['studentice', 'studentica', 'studentica su', 'studentice su'],
          correct: 1,
          hint: 'A number ending in one agrees fully in the singular.',
          explanation: 'dvadeset i jedna studentica je došla.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Dvije ____ žene čekaju autobus.' (old — star)",
          answer: 'stare',
          hint: 'After dvije a feminine adjective ends in -e.',
          explanation: 'dvije stare žene.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Pet studenata ____ položilo ispit.' (auxiliary)",
          answer: 'je',
          hint: 'The participle is neuter singular, so the auxiliary is singular too.',
          explanation: 'Pet studenata je položilo.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Imaju ____ djece, dvije kćeri i sina.' (three — collective)",
          answer: 'troje',
          hint: 'The collective number for three, used with djeca.',
          explanation: 'troje djece.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Na koncertu je bilo mnogo ____ ljudi.' (young — mlad)",
          answer: 'mladih',
          hint: 'After mnogo the adjective is in the genitive plural.',
          explanation: 'mnogo mladih ljudi.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Dva ___ brata rade u Njemačkoj."',
        options: ['mlađih', 'mlađa', 'mlađi', 'mlađe'],
        correct: 1,
        explanation: 'After dva a masculine adjective ends in -a: dva mlađa brata.',
      },
      {
        q: 'Complete: "Šest ljudi ___ ozlijeđeno u nesreći."',
        options: ['je', 'su', 'smo', 'ste'],
        correct: 0,
        explanation: 'Ozlijeđeno is neuter singular, so the auxiliary is singular: je.',
      },
      {
        q: 'Complete: "Obje kćeri su ___ na fakultet."',
        options: ['upisao', 'upisalo', 'upisale', 'upisala'],
        correct: 2,
        explanation: 'After obje a feminine noun takes the participle in -e: upisale.',
      },
      {
        q: 'Complete: "Dvoje djece ___ u bazenu."',
        options: ['plivamo', 'plivate', 'plivaš', 'pliva'],
        correct: 3,
        explanation: 'After a collective number the verb is singular: dvoje djece pliva.',
      },
      {
        q: 'Complete: "Nekoliko ___ kuća je srušeno."',
        options: ['stara', 'starih', 'stare', 'staru'],
        correct: 1,
        explanation: 'After nekoliko the adjective is in the genitive plural: starih kuća.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Tri dobrih prijateljica su došle.',
          'Tri dobra prijateljice su došle.',
          'Tri dobre prijateljice su došle.',
          'Tri dobre prijateljice je došlo.',
        ],
        correct: 2,
        explanation: 'After tri: feminine adjective in -e, plural verb, participle in -e.',
      },
    ],
    vocab: [
      ['nekoliko', 'several', 'Nekoliko studenata je zakasnilo.'],
      ['mnogo', 'many, a lot', 'Mnogo turista dolazi ljeti.'],
      ['oba / obje', 'both', 'Oba brata rade u istoj tvrtki.'],
      ['dvoje', 'two (children, a mixed pair)', 'Imaju dvoje djece.'],
      ['troje', 'three (children, a mixed group)', 'Troje studenata je položilo ispit.'],
      ['četvero', 'four (children, a mixed group)', 'Obitelj ima četvero djece.'],
      ['koliko', 'how many, how much', 'Koliko je ljudi bilo na koncertu?'],
      ['položiti ispit', 'to pass an exam', 'Pet studenata je položilo ispit.'],
      ['ozlijeđen', 'injured', 'Dvoje ljudi je ozlijeđeno u nesreći.'],
    ],
  },

  'family-changes': {
    worked: [
      {
        title: 'Describing a Trend',
        problem: 'Reci: "Families have fewer and fewer children."',
        en: 'Say: Families have fewer and fewer children.',
        steps: [
          {
            label: 'The trend',
            text: 'Fewer and fewer is sve + the comparative of malo: sve manje.',
          },
          {
            label: 'The noun after manje',
            text: 'Manje is a quantity word, so it takes the genitive plural: djece.',
          },
          {
            label: 'The verb',
            text: 'Obitelji is the subject, plural: imaju.',
          },
        ],
        answer: 'Obitelji imaju sve manje djece.',
      },
      {
        title: 'Weighing Two Sides',
        problem:
          'Reci: "On the one hand young people are freer, on the other they leave home later."',
        en: 'Say: On the one hand young people are freer, on the other they leave home later.',
        steps: [
          {
            label: 'The frame',
            text: 'S jedne strane… s druge strane… — genitive after s meaning from.',
          },
          {
            label: 'First half',
            text: 'mladi su slobodniji — the comparative of slobodan.',
          },
          {
            label: 'Second half',
            text: 'Leaving home later: kasnije odlaze iz roditeljskog doma.',
          },
        ],
        answer:
          'S jedne strane mladi su slobodniji, a s druge strane kasnije odlaze iz roditeljskog doma.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What is "uža obitelj"?',
          options: [
            'the immediate family',
            'the extended family',
            'a foster family',
            'a large family',
          ],
          correct: 0,
          hint: 'Uži means narrower.',
          explanation: 'Uža obitelj — parents and children.',
        },
        {
          q: 'Complete: "Sve ___ mladih odlazi u inozemstvo."',
          options: ['puno', 'više', 'mnogo', 'najviše'],
          correct: 1,
          hint: 'A growing trend needs a comparative after sve.',
          explanation: 'Sve više mladih.',
        },
        {
          q: 'Complete: "Vjenčali smo ___ prošlog ljeta."',
          options: ['nas', 'se', 'si', 'sebe'],
          correct: 1,
          hint: 'Vjenčati in the sense of getting married is reflexive.',
          explanation: 'Vjenčali smo se.',
        },
        {
          q: 'Which sentence states a disagreement politely?',
          options: ['To je glupost.', 'Nemaš pojma.', 'Ne slažem se s tim mišljenjem.', 'Šuti.'],
          correct: 2,
          hint: 'Look for the standard phrase for disagreeing.',
          explanation: 'Ne slažem se — I disagree.',
        },
        {
          q: 'What does "indeks sreće" measure?',
          options: [
            'the number of marriages',
            'the birth rate',
            'how satisfied people are with their lives',
            'household income',
          ],
          correct: 2,
          hint: 'Sreća means happiness.',
          explanation: 'Indeks sreće — satisfaction with life.',
        },
        {
          q: 'Complete: "Bake i djedovi često čuvaju ___."',
          options: ['unuci', 'unucima', 'unuka', 'unuke'],
          correct: 3,
          hint: 'A direct object, plural.',
          explanation: 'čuvaju unuke — accusative plural.',
        },
        {
          q: 'Complete: "U kući su živjele tri ___."',
          options: ['generacija', 'generacije', 'generacijama', 'generaciju'],
          correct: 1,
          hint: 'After tri a feminine noun takes the genitive-singular form, which here ends in -e.',
          explanation: 'tri generacije.',
        },
        {
          q: 'Complete: "To ovisi ___ tome koliko zarađuju."',
          options: ['od', 'o', 'na', 'iz'],
          correct: 1,
          hint: 'Ovisiti takes a preposition with the locative.',
          explanation: 'ovisi o tome.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Mladi se vjenčavaju sve ____.' (later and later — kasno)",
          answer: 'kasnije',
          hint: 'The comparative of the adverb for late.',
          explanation: 'sve kasnije.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Po mom ____, obitelj je najvažnija.' (opinion)",
          answer: 'mišljenju',
          hint: 'The noun for opinion, in the locative after po.',
          explanation: 'Po mom mišljenju.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Sve manje djece se ____ na selu.' (is born — rađati se)",
          answer: 'rađa',
          hint: 'After a quantity word the verb is third person singular.',
          explanation: 'Sve manje djece se rađa.',
        },
        {
          type: 'type',
          q: "Dopuni: 'Ona je ____ majka i sama odgaja kćer.' (single — samohran)",
          answer: 'samohrana',
          hint: 'The adjective agrees with majka, feminine nominative.',
          explanation: 'samohrana majka.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sve ___ ljudi živi sam."',
        options: ['više', 'vrlo', 'puno', 'jako'],
        correct: 0,
        explanation: 'A growing trend: sve + comparative, sve više.',
      },
      {
        q: 'What is "baka servis"?',
        options: [
          'a pension fund',
          'grandparents looking after grandchildren',
          'a nursing home',
          'a babysitting agency',
        ],
        correct: 1,
        explanation: 'A joking colloquial name for grandparents minding the grandchildren.',
      },
      {
        q: 'Complete: "Vjenčanje je bilo u crkvi, a onda smo ___ proslavili."',
        options: ['ga', 'ju', 'ih', 'ga je'],
        correct: 0,
        explanation: 'Vjenčanje is neuter; the accusative clitic is ga: proslavili smo ga.',
      },
      {
        q: 'Which phrase means "it depends on"?',
        options: ['slažem se', 'po mom mišljenju', 'ovisi o tome', 's druge strane'],
        correct: 2,
        explanation: 'Ovisi o tome — it depends on.',
      },
      {
        q: 'Complete: "Mladi u Hrvatskoj ___ napuštaju roditeljski dom."',
        options: ['najranije', 'ranije', 'rano', 'kasno'],
        correct: 3,
        explanation:
          'Young adults in Croatia leave the parental home late compared with most of the EU.',
      },
      {
        q: 'What is "izvanbračna zajednica"?',
        options: ['a divorce', 'a wedding', 'an engagement', 'living together without marriage'],
        correct: 3,
        explanation: 'Izvanbračna zajednica — a couple living together without marriage.',
      },
    ],
    vocab: [
      ['uža obitelj', 'immediate family', 'Za Božić se okupi uža obitelj.'],
      ['šira obitelj', 'extended family', 'Na vjenčanju je bila cijela šira obitelj.'],
      ['brak', 'marriage', 'Njihov brak traje četrdeset godina.'],
      ['vjenčati se', 'to get married', 'Vjenčali su se u Splitu.'],
      ['samohrani roditelj', 'single parent', 'Samohrani roditelj ima puno obveza.'],
      ['kućanstvo', 'household', 'U kućanstvu žive tri osobe.'],
      ['unuk', 'grandson, grandchild', 'Baka čuva unuka.'],
      ['inozemstvo', 'abroad', 'Brat radi u inozemstvu.'],
      ['zadovoljstvo životom', 'life satisfaction', 'Zadovoljstvo životom ovisi o mnogo stvari.'],
      ['sreća', 'happiness; luck', 'Za mene je sreća vrijeme s obitelji.'],
    ],
  },
};
