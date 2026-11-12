// functions/api/content/_data/c1new/batch01.js
//
// New C1 lessons, batch 01 (Croaticum restructure, stage 6, 2026-11-12). See c1new/index.js.
//
// Razgovarajte s nama! B2-C1, lesson 1 (Baština i suvremeni svijet) and the start of
// lesson 2 (Moderni bonton): the i-declension at C1 depth with kći and mati, the
// accusative of measure and manner, coordinate and conclusive clauses, the spelling of
// abbreviations, and collective nouns.
//
// Where usage guides differ (instrumental -i or -ju after an adjective; kostiju or kosti;
// a comma before conclusive pa; 25 % or 25%) the lesson teaches both and no item tests
// the choice between them.

/** Spine entries for this batch. `masterOrder` is the lesson's final C1 position. */
export const SPINE = [
  {
    id: 'i-nouns-mati-kci',
    masterOrder: 2,
    prerequisites: ['clitics-advanced', 'i-declension'],
    objectives: [
      'Form the instrumental of i-nouns with -i or -ju, including the sound changes radošću, smrću, ljubavlju',
      'Use the genitive plural in -iju where Croatian has it: očiju, ušiju, kostiju',
      'Decline kći correctly and recognise the literary noun mati in every case',
    ],
  },
  {
    id: 'accusative-measure-manner',
    masterOrder: 3,
    prerequisites: ['i-nouns-mati-kci'],
    objectives: [
      'Express duration, distance, weight, price and age with the bare accusative',
      'Keep the number rules inside a measure: tri kilometra, deset kilometara, tisuću eura',
      'Tell the prepositional accusative of manner (na brzinu) from the instrumental (svom snagom)',
    ],
  },
  {
    id: 'coordinate-conclusive-clauses',
    masterOrder: 4,
    prerequisites: ['accusative-measure-manner', 'complex-sentences'],
    objectives: [
      'Join clauses with i, pa, te, ni and niti and know what each adds',
      'Draw a conclusion with dakle, stoga, zato, prema tome and pa',
      'Punctuate both: no comma before i, te, ni, niti; a comma before stoga, zato, prema tome',
    ],
  },
  {
    id: 'abbreviations',
    masterOrder: 5,
    prerequisites: ['coordinate-conclusive-clauses'],
    objectives: [
      'Write kratice with a full stop: npr., tj., itd., tzv., str., br., st.',
      'Write pokrate in capitals without full stops and decline them with a hyphen: HNK-a, u EU-u',
      'Write units and symbols without a full stop, and ordinals and dates with one',
    ],
  },
  {
    id: 'collective-nouns',
    masterOrder: 6,
    prerequisites: ['abbreviations', 'i-nouns-mati-kci'],
    objectives: [
      'Recognise and decline the -je collectives: lišće, cvijeće, granje, kamenje, grožđe',
      'Decline braća, djeca and gospoda and make verbs and adjectives agree with them',
      'Use the -ad collectives (telad, prasad, momčad) as feminine singular nouns',
    ],
  },
];

/** Lesson bodies (same shape as lessonsC1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // The i-declension in depth, kći and mati
  // ─────────────────────────────────────────────────────────
  {
    id: 'i-nouns-mati-kci',
    title: 'With Joy, at Night, to My Daughter',
    subtitle:
      'The i-declension in depth — instrumental -ju, genitive plural -iju — and the nouns kći and mati',
    icon: '🌙',
    level: 'C1',
    duration: '~8 min',
    color: '#4338ca',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'The Feminine Nouns That End in a Consonant',
        body: 'You have declined stvar and noć since B2. At C1 the i-declension is where the finer forms live: an instrumental with two endings, one of which changes the sound of the stem (radost → radošću), a genitive plural in -iju for a handful of nouns (očiju, ušiju), and two old nouns for family members, kći (daughter) and mati (mother), whose forms you need to read literature and to write correctly.',
        icon: '🌙',
      },
      {
        type: 'rule',
        title: 'Who Belongs Here',
        body: 'The i-declension holds feminine nouns that end in a consonant: stvar, noć, riječ, ljubav, krv, kost, smrt, pamet, sol, glad, jesen, obitelj, vijest, and every abstract noun in -ost (radost, mladost, starost, mogućnost). Misao (thought) belongs here too, with the stem misl-: misao, misli. They are feminine whatever their ending suggests — velika radost, ta noć, ova stvar — and everything that agrees with them is feminine.',
        highlight: 'velika radost, ta noć, ova stvar',
      },
      {
        type: 'table',
        title: 'noć in Every Case',
        headers: ['Case', 'Singular', 'Plural'],
        rows: [
          ['Nominative', 'noć', 'noći'],
          ['Genitive', 'noći', 'noći'],
          ['Dative', 'noći', 'noćima'],
          ['Accusative', 'noć', 'noći'],
          ['Vocative', 'noći', 'noći'],
          ['Locative', 'noći', 'noćima'],
          ['Instrumental', 'noći / noću', 'noćima'],
        ],
      },
      {
        type: 'rule',
        title: 'The Instrumental: -i or -ju',
        body: 'The instrumental singular has two standard endings, -i and -ju. The -ju ending meets the last consonant of the stem and changes it (jotation): t + j → ć (smrt → smrću, pamet → pameću), st + j → šć (radost → radošću, kost → košću), d + j → đ (glad → glađu), and after v, b, p, m an l appears (ljubav → ljubavlju, krv → krvlju). After č, ć, đ, j, lj, nj, š, ž the ending is simply added: riječ → riječju, noć → noću, sol → solju. Fixed phrases prefer -ju (jednom riječju, s ljubavlju, noću as "at night"); after an adjective -i is very common (s velikom radosti). Both are correct, and no rule obliges you to choose one.',
        highlight: 'radost → radošću, smrt → smrću, ljubav → ljubavlju',
      },
      {
        type: 'table',
        title: 'The -ju Instrumental',
        headers: ['Nominative', 'Instrumental -ju', 'What happened'],
        rows: [
          ['radost', 'radošću', 'st + j → šć'],
          ['mladost', 'mladošću', 'st + j → šć'],
          ['kost', 'košću', 'st + j → šć'],
          ['smrt', 'smrću', 't + j → ć'],
          ['pamet', 'pameću', 't + j → ć'],
          ['glad', 'glađu', 'd + j → đ'],
          ['ljubav', 'ljubavlju', 'v + j → vlj'],
          ['krv', 'krvlju', 'v + j → vlj'],
          ['misao (misl-)', 'mišlju', 'sl + j → šlj'],
          ['riječ', 'riječju', 'nothing changes after č'],
          ['noć', 'noću', 'nothing changes after ć'],
        ],
      },
      {
        type: 'rule',
        title: 'The Genitive Plural in -iju',
        body: 'Most i-nouns have the genitive plural in -i: tih stvari, mnogo noći, puno vijesti. A few add -iju. Oči and uši — the plurals of oko (eye) and uho (ear) — decline as i-nouns and have only očiju and ušiju: iz očiju, do ušiju. Kost has both kostiju and kosti; both are standard. The dative, locative and instrumental plural of every i-noun end in -ima: stvarima, očima, ušima.',
        highlight: 'iz očiju, do ušiju',
      },
      {
        type: 'rule',
        title: 'kći — the Daughter',
        body: 'The nominative is kći; every other singular case is built on kćer-. The accusative is kćer (Vodim kćer u školu), and the genitive, dative and locative are kćeri. The instrumental is kćeri, with a rarer kćerju. The plural is kćeri, kćerima. In speech you will hear kćer used for the nominative too, and the colloquial kćerka; in standard writing the nominative is kći. After dvije, tri and četiri the form is kćeri: dvije kćeri.',
        highlight: 'Vodim kćer u školu',
      },
      {
        type: 'rule',
        title: 'mati — the Literary Mother',
        body: 'Mati is the old and literary word for majka. You meet it in poetry, songs, older prose and solemn speech, and you need to recognise its forms, which are built on mater-: genitive matere, dative and locative materi, accusative mater, instrumental materom; the vocative is mati. In your own everyday Croatian use majka or mama.',
        highlight: 'matere, materi, mater, materom',
      },
      {
        type: 'table',
        title: 'kći and mati Side by Side',
        headers: ['Case', 'kći', 'mati (literary)'],
        rows: [
          ['Nominative', 'kći', 'mati'],
          ['Genitive', 'kćeri', 'matere'],
          ['Dative', 'kćeri', 'materi'],
          ['Accusative', 'kćer', 'mater'],
          ['Vocative', 'kćeri', 'mati'],
          ['Locative', 'kćeri', 'materi'],
          ['Instrumental', 'kćeri (kćerju)', 'materom'],
        ],
      },
      {
        type: 'example',
        title: 'The Instrumental and the Plural',
        items: [
          {
            hr: 'Vijest o pobjedi primili smo s velikom radošću.',
            en: 'We received the news of the victory with great joy.',
            note: 'radošću — instrumental of radost; s velikom radosti is equally standard',
          },
          {
            hr: 'Stari grad noću izgleda potpuno drukčije nego danju.',
            en: 'At night the old town looks completely different than by day.',
            note: 'noću — the instrumental of noć, used as an adverb',
          },
          {
            hr: 'Svako pismo potpisivala je s ljubavlju i završavala jednom riječju: hvala.',
            en: 'She signed every letter with love and ended it with a single word: thank you.',
            note: 'ljubavlju and riječju — -ju instrumentals of ljubav and riječ',
          },
          {
            hr: 'Mnogi su branitelji slobodu svoje zemlje platili smrću.',
            en: 'Many defenders paid for their country’s freedom with their lives.',
            note: 'smrću — t + j melts into ć',
          },
          {
            hr: 'U teškim trenucima treba se služiti pameću, a ne samo srcem.',
            en: 'In hard moments you need to use your head, not only your heart.',
            note: 'pameću — služiti se takes the instrumental',
          },
          {
            hr: 'Pas je cijelo poslijepodne glodao hrpu kostiju iz mesnice.',
            en: 'The dog spent the whole afternoon gnawing a pile of bones from the butcher’s.',
            note: 'kostiju — genitive plural; kosti is equally standard',
          },
          {
            hr: 'Suze su joj potekle iz očiju kad je ugledala staru kuću.',
            en: 'Tears ran from her eyes when she saw the old house.',
            note: 'očiju — the only genitive plural of oči',
          },
          {
            hr: 'Zaljubio se do ušiju već prvog ljeta na otoku.',
            en: 'He fell head over heels in love in his very first summer on the island.',
            note: 'ušiju — genitive plural of uši after do',
          },
          {
            hr: 'O takvim stvarima u našoj se obitelji nije razgovaralo.',
            en: 'Such things were not talked about in our family.',
            note: 'stvarima — the locative plural ends in -ima',
          },
        ],
      },
      {
        type: 'example',
        title: 'The Daughter and the Mother',
        items: [
          {
            hr: 'Moja kći studira medicinu u Rijeci i dolazi kući vikendom.',
            en: 'My daughter studies medicine in Rijeka and comes home at weekends.',
            note: 'kći — the standard nominative',
          },
          {
            hr: 'Sutra vodim kćer na more, prvi put nakon dvije godine.',
            en: 'Tomorrow I am taking my daughter to the seaside, for the first time in two years.',
            note: 'kćer — the accusative',
          },
          {
            hr: 'Za rođendan smo kćeri kupili novi bicikl.',
            en: 'For her birthday we bought our daughter a new bicycle.',
            note: 'kćeri — the dative',
          },
          {
            hr: 'Imaju dvije kćeri i sina koji svira violinu.',
            en: 'They have two daughters and a son who plays the violin.',
            note: 'kćeri — the form after dvije',
          },
          {
            hr: 'U staroj pjesmi sin se na rastanku oprašta od matere.',
            en: 'In the old poem the son takes leave of his mother at parting.',
            note: 'matere — the literary genitive of mati',
          },
          {
            hr: 'Svake je nedjelje iz Amerike pisao materi duga pisma.',
            en: 'Every Sunday he wrote long letters to his mother from America.',
            note: 'materi — the literary dative; in speech majci',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the instrumental of "radost" with the -ju ending?',
        options: ['radostju', 'radošću', 'radosću', 'radostom'],
        correct: 1,
        explanation:
          'st + j melts into šć, so radost + ju gives radošću. radostju leaves the sound change out, and -om is the masculine ending.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Sutra vodim ___ na more." (my daughter)',
        options: ['kći', 'kćer', 'kćerju', 'kćere'],
        correct: 1,
        explanation:
          'voditi takes the accusative, and the accusative of kći is kćer. kći is the nominative, kćerju a rare instrumental, and kćere does not exist.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Leaving out the sound change in the -ju instrumental: radostju and smrtju do not exist — write radošću and smrću. (2) Treating an i-noun as masculine because it ends in a consonant: ovaj stvar is wrong — ova stvar, velika radost. (3) Using kći where the sentence needs the accusative: Vodim kći u školu is wrong — write Vodim kćer u školu. (4) Giving oči and uši a genitive plural like the nominative: iz oči is wrong — iz očiju, do ušiju.',
        highlight: 'Vodim kćer u školu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is the instrumental of "smrt" with the -ju ending?',
            options: ['smrtju', 'smrću', 'smrtom', 'smrći'],
            correct: 1,
            explanation:
              't + j gives ć: smrću. smrtju skips the sound change, and the other two do not exist.',
          },
          {
            q: 'Complete: "Grad je ___ pun svjetla." (at night)',
            options: ['noći', 'noćom', 'noću', 'noćju'],
            correct: 2,
            explanation:
              'noću — the instrumental of noć, used as the adverb "at night". After ć the ending -ju is added with no change, and the j merges into ć.',
          },
          {
            q: 'Complete: "Iz njegovih ___ nisam mogao ništa pročitati." (eyes)',
            options: ['oka', 'očima', 'oči', 'očiju'],
            correct: 3,
            explanation:
              'iz takes the genitive, and the genitive plural of oči is očiju. oka is singular, očima is the dative/locative/instrumental.',
          },
          {
            q: 'Complete: "Moja ___ upisala je pravo." (daughter)',
            options: ['kći', 'kćeri', 'kćerom', 'kćere'],
            correct: 0,
            explanation:
              'The subject is in the nominative, which is kći. kćeri is the genitive, dative or locative; kćerom and kćere do not exist.',
          },
          {
            q: 'Which form is the literary genitive of "mati"?',
            options: ['mati', 'materi', 'matere', 'materom'],
            correct: 2,
            explanation:
              'mati, matere, materi, mater, materom. materi is the dative and locative, materom the instrumental.',
          },
          {
            q: 'Complete: "Dočekali su nas s velikom ___." (joy)',
            options: ['radost', 'radošću', 'radostju', 'radosta'],
            correct: 1,
            explanation:
              's + instrumental: radošću (radosti is also correct, but it is not offered). radostju misses the sound change; radost is the nominative.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The i-Declension — Key Takeaways',
        points: [
          'Feminine nouns in a consonant: stvar, noć, riječ, ljubav, every noun in -ost',
          'Instrumental -i or -ju; -ju changes the stem: radošću, smrću, glađu, ljubavlju, mišlju',
          'Genitive plural -i, but očiju and ušiju only, kostiju or kosti',
          'kći, kćeri, kćeri, kćer, kćeri, kćeri, kćeri — plural kćeri, kćerima',
          'mati is literary: matere, materi, mater, materom — use majka yourself',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The accusative of measure and manner
  // ─────────────────────────────────────────────────────────
  {
    id: 'accusative-measure-manner',
    title: 'How Long, How Far, How Much',
    subtitle:
      'The accusative without a preposition for duration, distance, weight and price — and how manner is expressed',
    icon: '📏',
    level: 'C1',
    duration: '~8 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'An Accusative That Is Not an Object',
        body: 'In Čekao sam cijeli dan, the whole day is not what you waited for — it is how long you waited. Croatian puts duration, distance, weight, price and size into the accusative with no preposition, just as English says "I waited all day" with no "for". You have been using it since A1 (svaki dan); this lesson makes it deliberate, adds the number rules that live inside a measure, and sorts out how manner is expressed.',
        icon: '📏',
      },
      {
        type: 'rule',
        title: 'Where the Bare Accusative Measures',
        body: 'Duration: Čekao sam sat vremena, Kiša je padala cijelu noć. Repetition: Dolazi svaki dan, Svaku subotu idemo na tržnicu. Distance: Hodali smo tri kilometra. Price: Knjiga košta dvadeset eura. Weight: Kofer teži dvadeset kilograma. Size and age with an adjective: Zid je visok dva metra, Baka je stara devedeset godina. You see the accusative clearly only where its form differs from the nominative — with feminine nouns in -a: cijelu noć, jednu minutu, svaku subotu, tisuću eura.',
        highlight: 'cijelu noć, jednu minutu, svaku subotu',
      },
      {
        type: 'table',
        title: 'The Measure Types',
        headers: ['Measure', 'Example', 'More'],
        rows: [
          ['Duration', 'Čekali smo sat vremena.', 'cijelu noć, tjedan dana, mjesec dana'],
          ['Repetition', 'Dolazi svaki dan.', 'svaku subotu, svaki tjedan'],
          ['Distance', 'Hodali smo tri kilometra.', 'jednu milju, deset kilometara'],
          ['Price', 'Laptop košta tisuću eura.', 'dva eura, sto eura'],
          ['Weight', 'Kofer teži dvadeset kilograma.', 'jednu tonu, dva kilograma'],
          ['Size, age', 'Zid je visok dva metra.', 'dubok metar, star pet godina'],
        ],
      },
      {
        type: 'rule',
        title: 'Numbers Inside the Measure',
        body: 'The measure phrase as a whole stands in the accusative, so the number rules you know apply inside it. jedan/jedna: the accusative of the numeral and noun (jedan kilometar, jednu minutu). dva, tri, četiri: the genitive singular (tri kilometra, dva eura, dvije minute). Five and up: the genitive plural (deset kilometara, pet minuta, devedeset godina). In sat vremena, tjedan dana and mjesec dana the first word is the accusative and the second a genitive that never changes. Tisuća is a feminine noun, so a thousand on its own is tisuću (Košta tisuću eura), while deset tisuća takes the genitive plural.',
        highlight: 'tri kilometra, deset kilometara, tisuću eura',
      },
      {
        type: 'rule',
        title: 'Duration: Bare, za or tijekom',
        body: 'The bare accusative measures the whole stretch: Pisao je knjigu godinu dana (he spent a year writing it). za + accusative gives the time it takes to finish, usually with a perfective verb: Napisao je knjigu za godinu dana (he wrote it in a year) — and za can also mean "in a year from now". tijekom + genitive places an event within a period: Tijekom godine napisao je dvije knjige. English "for" is therefore usually NOT za: Ostali smo tjedan dana means "we stayed for a week".',
        highlight: 'Ostali smo tjedan dana',
      },
      {
        type: 'rule',
        title: 'Manner: na or u + Accusative, or the Instrumental',
        body: 'Manner and circumstance are expressed with na or u + accusative in many fixed phrases: na brzinu (in a hurry), na vrijeme (on time), na sreću (luckily), na prvi pogled (at first sight), na dušak (in one gulp), na sav glas (at the top of one’s voice), u dlaku (to a hair), u jedan glas (in unison). Without a preposition, manner is expressed by the INSTRUMENTAL: svom snagom (with all one’s strength), punom parom (at full steam), brzim korakom (at a quick pace). So Trčao je svom snagom is an instrumental, not an accusative. Two such phrases are written as one word: napamet (by heart) and naglas (aloud).',
        highlight: 'svom snagom, punom parom, brzim korakom',
      },
      {
        type: 'table',
        title: 'Manner Phrases',
        headers: ['Phrase', 'Case', 'Meaning'],
        rows: [
          ['na brzinu', 'na + accusative', 'in a hurry'],
          ['na vrijeme', 'na + accusative', 'on time'],
          ['na sreću', 'na + accusative', 'luckily'],
          ['na prvi pogled', 'na + accusative', 'at first sight'],
          ['u dlaku', 'u + accusative', 'exactly, to a hair'],
          ['u jedan glas', 'u + accusative', 'in unison'],
          ['svom snagom', 'instrumental', 'with all one’s strength'],
          ['punom parom', 'instrumental', 'at full steam'],
          ['napamet, naglas', 'one word', 'by heart, aloud'],
        ],
      },
      {
        type: 'example',
        title: 'Time, Distance, Price',
        items: [
          {
            hr: 'Čekali smo ga sat vremena, a onda smo otišli bez njega.',
            en: 'We waited for him for an hour, and then we left without him.',
            note: 'sat vremena — sat is the accusative of duration; vremena is a fixed genitive',
          },
          {
            hr: 'Cijelu noć padala je kiša, pa smo ujutro ostali u kući.',
            en: 'It rained all night, so in the morning we stayed indoors.',
            note: 'cijelu noć — feminine accusative of duration',
          },
          {
            hr: 'Na Velebitu smo u jednom danu prehodali dvadeset kilometara.',
            en: 'On Velebit we walked twenty kilometres in a single day.',
            note: 'dvadeset kilometara — distance; after twenty, the genitive plural',
          },
          {
            hr: 'Do posla svako jutro pješačim tri kilometra uz rijeku.',
            en: 'Every morning I walk three kilometres to work along the river.',
            note: 'tri kilometra — after tri, the genitive singular; svako jutro — repetition',
          },
          {
            hr: 'Novi laptop košta tisuću eura, a stari je koštao sedamsto.',
            en: 'The new laptop costs a thousand euros, and the old one cost seven hundred.',
            note: 'tisuću — the accusative of tisuća',
          },
          {
            hr: 'Moj kofer teži dvadeset tri kilograma, a dopušteno je dvadeset.',
            en: 'My suitcase weighs twenty-three kilograms, and twenty is allowed.',
            note: 'dvadeset tri kilograma — the last numeral, tri, decides the genitive singular',
          },
          {
            hr: 'Kameni zid oko vrta visok je dva metra.',
            en: 'The stone wall around the garden is two metres high.',
            note: 'dva metra — measure with the adjective visok',
          },
          {
            hr: 'Moja je baka stara devedeset godina, a još radi u vrtu.',
            en: 'My grandmother is ninety years old and still works in the garden.',
            note: 'devedeset godina — age as a measure with star',
          },
        ],
      },
      {
        type: 'example',
        title: 'Manner',
        items: [
          {
            hr: 'Na prvi pogled stan nam se činio savršenim.',
            en: 'At first sight the flat seemed perfect to us.',
            note: 'na prvi pogled — na + accusative',
          },
          {
            hr: 'Ručak smo pojeli na brzinu i otrčali na vlak.',
            en: 'We ate lunch in a hurry and ran for the train.',
            note: 'na brzinu — na + accusative of manner',
          },
          {
            hr: 'Trčao je svom snagom, ali vlak je već krenuo.',
            en: 'He ran with all his strength, but the train had already left.',
            note: 'svom snagom — instrumental of manner, no preposition',
          },
          {
            hr: 'Na sreću, u nesreći nitko nije ozlijeđen.',
            en: 'Luckily, no one was hurt in the accident.',
            note: 'na sreću — na + accusative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Kiša je padala ___ noć." (the whole)',
        options: ['cijela', 'cijelu', 'cijeloj', 'cijelom'],
        correct: 1,
        explanation:
          'Duration takes the bare accusative, and noć is feminine: cijelu noć. cijela is the nominative, cijeloj the dative/locative.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which phrase expresses manner with the INSTRUMENTAL?',
        options: ['na brzinu', 'svom snagom', 'na vrijeme', 'cijeli dan'],
        correct: 1,
        explanation:
          'svom snagom has no preposition and the -om ending of the instrumental. na brzinu and na vrijeme are na + accusative; cijeli dan is a duration.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Translating "for" with za: Ostali smo za tjedan dana means "within a week" or "a week from now"; for a stay of a week write Ostali smo tjedan dana. (2) Leaving a feminine measure in the nominative: Ostali smo jedna noć is wrong — write Ostali smo jednu noć. (3) Breaking the number rule inside the measure: tri kilometre and pet kilometra are wrong — tri kilometra, pet kilometara. (4) Calling every manner phrase an accusative: svom snagom and punom parom are instrumentals; only na brzinu, na vrijeme, u dlaku and the like are na/u + accusative.',
        highlight: 'Ostali smo jednu noć',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ostali smo u Splitu ___ noć." (one)',
            options: ['jednu', 'jedna', 'jednoj', 'jedne'],
            correct: 0,
            explanation:
              'Duration in the accusative; noć is feminine, so jednu. jedna is the nominative, jednoj the dative/locative.',
          },
          {
            q: 'Complete: "Do škole hoda tri ___ svako jutro." (kilometre)',
            options: ['kilometar', 'kilometra', 'kilometre', 'kilometara'],
            correct: 1,
            explanation:
              'After tri, the genitive singular: tri kilometra. kilometara follows five and up.',
          },
          {
            q: 'Complete: "Taj sat košta pet ___ eura." (thousand)',
            options: ['tisuću', 'tisuća', 'tisuće', 'tisući'],
            correct: 1,
            explanation:
              'After pet, the genitive plural of tisuća, which is also tisuća. tisuću is the accusative singular, used for "a thousand" on its own.',
          },
          {
            q: 'Complete: "Ovaj laptop košta ___ eura." (a thousand)',
            options: ['tisuća', 'tisuće', 'tisući', 'tisuću'],
            correct: 3,
            explanation: 'Price takes the accusative, and tisuća is a feminine noun: tisuću eura.',
          },
          {
            q: 'Which sentence uses the accusative of duration correctly?',
            options: [
              'Čekao sam te cijelu sat.',
              'Čekao sam te cijeli sat.',
              'Čekao sam te cijelom satu.',
              'Čekao sam te u cijeli sat.',
            ],
            correct: 1,
            explanation:
              'sat is masculine and inanimate, so the accusative is the same as the nominative: cijeli sat. Duration takes no preposition.',
          },
          {
            q: 'Which phrase is an INSTRUMENTAL of manner?',
            options: ['na brzinu', 'u dlaku', 'punom parom', 'na prvi pogled'],
            correct: 2,
            explanation:
              'punom parom has no preposition and instrumental endings. The other three are na/u + accusative.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Accusative of Measure — Key Takeaways',
        points: [
          'Duration, repetition, distance, price, weight and size: the bare accusative',
          'Feminine measures show it: cijelu noć, jednu minutu, svaku subotu, tisuću eura',
          'Numbers inside: tri kilometra, deset kilometara; sat vremena, tjedan dana',
          'za + accusative = the time to finish; bare accusative = the whole stretch',
          'Manner: na/u + accusative (na brzinu, u dlaku) or the instrumental (svom snagom)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Coordinate and conclusive clauses
  // ─────────────────────────────────────────────────────────
  {
    id: 'coordinate-conclusive-clauses',
    title: 'And, And Then, Therefore',
    subtitle:
      'Coordinate clauses with i, pa, te, ni, niti — conclusive clauses with dakle, stoga, zato, prema tome',
    icon: '🔗',
    level: 'C1',
    duration: '~8 min',
    color: '#15803d',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'Two Families of Joined Clauses',
        body: 'Croatian grammar names two kinds of clause that are joined without one depending on the other. Sastavne rečenice (coordinate clauses) add one fact to another: i, pa, te, ni, niti. Zaključne rečenice (conclusive clauses) draw a conclusion from what came before: dakle, stoga, zato, prema tome, and pa in its "so" sense. Each clause could stand alone; the connector says how they relate — and decides whether a comma goes between them.',
        icon: '🔗',
      },
      {
        type: 'table',
        title: 'The Connectors',
        headers: ['Connector', 'Meaning', 'Example'],
        rows: [
          ['i', 'and — plain addition', 'Kupio je kruh i vratio se kući.'],
          ['pa', 'and then — what comes next', 'Ručali smo pa smo otišli na plažu.'],
          [
            'te',
            'and — formal, frequent in writing',
            'Vlada je razmotrila prijedlog te ga uputila Saboru.',
          ],
          ['ni, niti', 'nor, and not', 'Nije jeo niti je pio.'],
          ['dakle', 'so, thus', 'Nema svjetla, dakle nitko nije kod kuće.'],
          ['stoga', 'therefore — formal', 'Cesta je zatvorena, stoga idemo obilaznicom.'],
          ['zato', 'that is why', 'Bio sam bolestan, zato nisam došao.'],
          ['prema tome', 'consequently', 'Rok je istekao, prema tome prijava nije valjana.'],
          ['pa', 'so — a conclusion', 'Kasno je, pa idemo kući.'],
        ],
      },
      {
        type: 'rule',
        title: 'i, pa, te — Close, Not Identical',
        body: 'i is neutral addition. pa adds what comes next in time — Ručali smo pa smo otišli na plažu — and often what follows from it: Pao je s bicikla pa je slomio ruku. te means the same as i but belongs to written and formal Croatian: official reports, news, academic prose. In conversation te sounds bookish; in a report a string of i … i … i sounds childish, and te is how writers vary it.',
        highlight: 'Pao je s bicikla pa je slomio ruku',
      },
      {
        type: 'rule',
        title: 'ni and niti — Negative Addition',
        body: 'Two patterns. (a) The verb is negated and ni stands before each member: Ne pijem ni kavu ni čaj. Nije ni jeo ni pio. The ne stays — Croatian negates twice where English does not. (b) niti opens a second negative clause: Nije jeo niti je pio. Here niti carries the "not", so the second verb is normally left without ne. ni and niti mean the same; niti is the usual choice at the head of a clause.',
        highlight: 'Ne pijem ni kavu ni čaj',
      },
      {
        type: 'rule',
        title: 'Conclusions: dakle, stoga, zato, prema tome',
        body: 'All four introduce a consequence of what was just said. dakle (so, thus) is neutral and often sums up; stoga (therefore) is formal; zato (that is why) points back at a reason already given; prema tome (consequently, accordingly) belongs to formal, legal and academic style. pa can also draw a conclusion in speech: Kasno je, pa idemo kući. Keep zato apart from zato što: zato looks back at a reason (Bio sam bolestan, zato nisam došao); zato što introduces the reason (Nisam došao zato što sam bio bolestan).',
        highlight: 'Bio sam bolestan, zato nisam došao',
      },
      {
        type: 'rule',
        title: 'The Commas',
        body: 'No comma before i, pa, te, ni or niti when they join coordinate clauses: Ušao je u sobu i sjeo. Nije jeo niti je pio. (A comma before i is written only when i is repeated for emphasis or follows an inserted phrase.) A comma DOES go before dakle, stoga, zato and prema tome when they open the second clause: Cesta je zatvorena, stoga idemo obilaznicom. When dakle or prema tome sits inside a clause as an aside, it is set off on both sides: Dokumente smo, dakle, predali na vrijeme. Before conclusive pa, writers and guides differ — you will see it with and without a comma.',
        highlight: 'Cesta je zatvorena, stoga idemo obilaznicom',
      },
      {
        type: 'example',
        title: 'Adding',
        items: [
          {
            hr: 'Otvorio je prozor i duboko udahnuo jutarnji morski zrak.',
            en: 'He opened the window and took a deep breath of the morning sea air.',
            note: 'i — plain addition, no comma before it',
          },
          {
            hr: 'Prvo smo obišli stari grad pa smo sjeli na kavu na rivi.',
            en: 'First we walked round the old town and then sat down for coffee on the waterfront.',
            note: 'pa — the next thing in time',
          },
          {
            hr: 'Ministarstvo je razmotrilo prijedlog te ga uputilo Saboru na raspravu.',
            en: 'The ministry considered the proposal and sent it to Parliament for debate.',
            note: 'te — formal "and", typical of official texts',
          },
          {
            hr: 'Nije se javio cijeli tjedan niti je odgovorio na poruke.',
            en: 'He did not get in touch all week, nor did he answer the messages.',
            note: 'niti — opens the second negative clause; je odgovorio stays without ne',
          },
          {
            hr: 'Ne volim ni vrućinu ni gužvu, pa ljeti bježim u planine.',
            en: 'I like neither the heat nor the crowds, so in summer I escape to the mountains.',
            note: 'ni … ni — the verb volim keeps its ne; pa here draws a conclusion',
          },
        ],
      },
      {
        type: 'example',
        title: 'Concluding',
        items: [
          {
            hr: 'Sva su svjetla ugašena, dakle nikoga nema kod kuće.',
            en: 'All the lights are off, so nobody is at home.',
            note: 'dakle — a conclusion, with a comma before it',
          },
          {
            hr: 'Vlak kasni sat vremena, stoga ćemo propustiti sastanak.',
            en: 'The train is an hour late, therefore we will miss the meeting.',
            note: 'stoga — formal "therefore"; ćemo comes right after it',
          },
          {
            hr: 'Nisam imao novca, zato nisam išao na koncert s vama.',
            en: 'I had no money; that is why I did not go to the concert with you.',
            note: 'zato — looks back at the reason already given',
          },
          {
            hr: 'Rok za prijavu istekao je u petak, prema tome vaša prijava nije valjana.',
            en: 'The application deadline expired on Friday; consequently your application is not valid.',
            note: 'prema tome — formal and legal style',
          },
          {
            hr: 'Sve dokumente smo, dakle, predali na vrijeme.',
            en: 'So we did hand in all the documents on time.',
            note: 'dakle — an aside inside the clause, set off by commas on both sides',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which connector draws a conclusion?',
        options: ['i', 'te', 'stoga', 'niti'],
        correct: 2,
        explanation: 'stoga means "therefore". i and te add, and niti adds a negative clause.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Ručali smo, i otišli na plažu.',
          'Ručali smo i otišli na plažu.',
          'Ručali smo i, otišli na plažu.',
          'Ručali, smo i otišli na plažu.',
        ],
        correct: 1,
        explanation: 'No comma before i when it joins coordinate clauses.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) A comma before i, te, ni or niti between clauses: Ušao je u sobu, i sjeo is wrong — write Ušao je u sobu i sjeo. (2) Dropping ne when ni … ni follows the verb: Pijem ni kavu ni čaj is wrong — Ne pijem ni kavu ni čaj. (3) Mixing up zato and zato što: zato points back at a reason already stated, zato što introduces it. (4) Leaving out the comma before a conclusive connector: write Cesta je zatvorena, stoga idemo obilaznicom.',
        highlight: 'Ušao je u sobu i sjeo',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Ušao je u sobu, i sjeo za stol.',
              'Ušao je u sobu i sjeo za stol.',
              'Ušao je, u sobu i sjeo za stol.',
              'Ušao je u sobu i, sjeo za stol.',
            ],
            correct: 1,
            explanation: 'Coordinate clauses joined by i take no comma.',
          },
          {
            q: 'Complete: "Nisam imao karte, ___ nisam ušao na koncert." (that is why)',
            options: ['jer', 'zato', 'zato što', 'iako'],
            correct: 1,
            explanation:
              'zato looks back at the reason already given. jer and zato što would introduce a reason, iako a concession.',
          },
          {
            q: 'Complete: "Ne jedem ___ meso ___ ribu."',
            options: ['i … i', 'ni … ni', 'ili … ili', 'te … te'],
            correct: 1,
            explanation:
              'With a negated verb, ni stands before each member: Ne jedem ni meso ni ribu.',
          },
          {
            q: 'Which connector is formal and means "therefore"?',
            options: ['pa', 'i', 'niti', 'stoga'],
            correct: 3,
            explanation:
              'stoga is the formal "therefore". pa can draw a conclusion in speech, but it is not formal.',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Cesta je zatvorena stoga, idemo obilaznicom.',
              'Cesta je, zatvorena stoga idemo obilaznicom.',
              'Cesta je zatvorena, stoga idemo obilaznicom.',
              'Cesta je zatvorena stoga idemo, obilaznicom.',
            ],
            correct: 2,
            explanation:
              'The comma goes before the conclusive connector that opens the second clause.',
          },
          {
            q: 'In "Prvo smo ručali pa smo otišli u šetnju", what does pa express?',
            options: ['a sequence in time', 'a contrast', 'a cause', 'a condition'],
            correct: 0,
            explanation: 'pa adds what came next: first lunch, then the walk.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Coordinate and Conclusive Clauses — Key Takeaways',
        points: [
          'Coordinate: i (and), pa (and then), te (formal and), ni / niti (nor)',
          'ni … ni keeps the ne on the verb: Ne pijem ni kavu ni čaj',
          'Conclusive: dakle, stoga, zato, prema tome — and pa in speech',
          'zato looks back at a reason; zato što introduces one',
          'No comma before i, pa, te, ni, niti; a comma before stoga, zato, prema tome',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The spelling of abbreviations
  // ─────────────────────────────────────────────────────────
  {
    id: 'abbreviations',
    title: 'npr., HNK-a, 5 km',
    subtitle:
      'Kratice and pokrate in Hrvatski pravopis — full stops, capitals, and how they decline',
    icon: '✒️',
    level: 'C1',
    duration: '~8 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Two Kinds of Shortening',
        body: 'Croatian spelling distinguishes a kratica — a shortened word or phrase that is read out in full (npr. is read na primjer) — from a pokrata, a new word made from initials or syllables (HNK, HAZU, EU, NATO). The two are written differently: one takes a full stop, the other capitals and none. Units of measurement and symbols are a third group with rules of their own. Get them right and your written Croatian looks educated at a glance.',
        icon: '✒️',
      },
      {
        type: 'rule',
        title: 'Kratice Take a Full Stop',
        body: 'A kratica is a word cut short, so it ends with a full stop: npr. (na primjer), tj. (to jest), itd. (i tako dalje), i sl. (i slično), tzv. (takozvani), str. (stranica), br. (broj), god. (godina), st. (stoljeće), sv. (sveti), dr. (doktor), prof. (profesor), pr. Kr. (prije Krista). They are written in small letters inside a sentence, and they do not take case endings: the full word they stand for is read with its ending. s dr. Horvatom is read s doktorom Horvatom.',
        highlight: 's dr. Horvatom',
      },
      {
        type: 'table',
        title: 'Common Kratice',
        headers: ['Kratica', 'Read as', 'Meaning'],
        rows: [
          ['npr.', 'na primjer', 'for example'],
          ['tj.', 'to jest', 'that is'],
          ['itd.', 'i tako dalje', 'and so on'],
          ['i sl.', 'i slično', 'and the like'],
          ['tzv.', 'takozvani', 'so-called'],
          ['str.', 'stranica', 'page'],
          ['br.', 'broj', 'number'],
          ['st.', 'stoljeće', 'century'],
          ['sv.', 'sveti', 'saint'],
          ['pr. Kr.', 'prije Krista', 'BC'],
        ],
      },
      {
        type: 'rule',
        title: 'Pokrate: Capitals, No Full Stops',
        body: 'A pokrata made from initial letters is written in capitals with no full stops: HNK (Hrvatsko narodno kazalište), HAZU (Hrvatska akademija znanosti i umjetnosti), EU (Europska unija), UN (Ujedinjeni narodi), HRT (Hrvatska radiotelevizija), NATO. A pokrata made from syllables and read as an ordinary word is often written like a name, with only a capital initial — Hina, the Croatian news agency — though organisations frequently write their own names in capitals.',
        highlight: 'HNK, HAZU, EU, UN, HRT',
      },
      {
        type: 'rule',
        title: 'Declining a Pokrata',
        body: 'An initialism that is read letter by letter takes its case ending after a hyphen, and the ending follows the pronunciation: HNK → HNK-a, u HNK-u, s HNK-om; HRT → HRT-a, na HRT-u; EU → EU-a, u EU-u; UN → u UN-u; NATO → NATO-a, u NATO-u. A pokrata written as a name declines like a noun with no hyphen: Hina, Hine, u Hini. A kratica with a full stop never takes an ending.',
        highlight: 'HNK-a, u HNK-u, u EU-u',
      },
      {
        type: 'rule',
        title: 'Symbols, Ordinals and the End of a Sentence',
        body: 'Units and symbols have no full stop and stand after the number with a space: 5 km, 20 kg, 3 m, 1 l, 10 h, 30 min, 15 EUR or 15 €, 20 °C. Croatian writes a decimal comma: 2,5 kg. For the percent sign Hrvatski pravopis recommends a space (25 %), and 25% is widespread; both are seen. An ordinal number takes a full stop: 21. st., 3. razred, 1. srpnja. A date is written 12. 11. 2026. or 12. studenoga 2026. When a sentence ends in an abbreviation that already has a full stop, no second one is added; and no comma goes before itd. or i sl., because they continue the list.',
        highlight: 'kruh, mlijeko itd.',
      },
      {
        type: 'example',
        title: 'Kratice and Symbols',
        items: [
          {
            hr: 'U Hrvatskoj ima mnogo zaštićenih područja, npr. Plitvička jezera, Paklenica i Kornati.',
            en: 'Croatia has many protected areas, for example the Plitvice Lakes, Paklenica and the Kornati.',
            note: 'npr. — a kratica for na primjer, with a full stop',
          },
          {
            hr: 'Do sela ima još 12 km, tj. dvadesetak minuta vožnje.',
            en: 'It is still 12 km to the village, that is, about twenty minutes’ drive.',
            note: 'km — a symbol, no full stop; tj. — to jest',
          },
          {
            hr: 'Na tržnici smo kupili rajčice, papriku, luk itd.',
            en: 'At the market we bought tomatoes, peppers, onions and so on.',
            note: 'itd. — no comma before it and no second full stop after it',
          },
          {
            hr: 'Ta je crkva sagrađena u 12. st., a obnovljena u 18. st.',
            en: 'That church was built in the 12th century and restored in the 18th.',
            note: 'st. — stoljeće; 12. — an ordinal with a full stop',
          },
          {
            hr: 'Pročitajte poglavlje na str. 45 i riješite zadatke br. 3 i 4.',
            en: 'Read the chapter on page 45 and do exercises nos. 3 and 4.',
            note: 'str. and br. — kratice with a full stop',
          },
          {
            hr: 'Paket teži 2,5 kg, a poštarina iznosi 6 EUR.',
            en: 'The parcel weighs 2.5 kg and the postage is 6 euros.',
            note: 'kg and EUR — symbols, no full stop; 2,5 — the decimal comma',
          },
          {
            hr: 'O rezultatima sam razgovarao s dr. Matićem.',
            en: 'I talked to Dr Matić about the results.',
            note: 'dr. — the title takes no ending; Matićem carries the instrumental',
          },
        ],
      },
      {
        type: 'example',
        title: 'Pokrate',
        items: [
          {
            hr: 'Predstava počinje u 20 h na velikoj sceni HNK-a.',
            en: 'The performance begins at 8 p.m. on the main stage of the Croatian National Theatre.',
            note: 'HNK-a — genitive after a hyphen; h — a symbol, no full stop',
          },
          {
            hr: 'Hrvatska je postala članica EU-a 1. srpnja 2013.',
            en: 'Croatia became a member of the European Union on 1 July 2013.',
            note: 'EU-a — genitive; 1. — an ordinal; the year ends the sentence with one full stop',
          },
          {
            hr: 'O tom se prijedlogu dugo raspravljalo u UN-u.',
            en: 'That proposal was debated at length in the United Nations.',
            note: 'UN-u — locative after a hyphen',
          },
          {
            hr: 'Vijest je objavila Hina, a prenijeli su je HRT i drugi mediji.',
            en: 'The news was published by Hina and carried by Croatian Radiotelevision and other media.',
            note: 'Hina — a syllable pokrata written like a name; HRT — initials in capitals',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the correct spelling of the abbreviation for "na primjer"?',
        options: ['npr', 'npr.', 'n.pr.', 'NPR'],
        correct: 1,
        explanation: 'A kratica takes one full stop at the end and small letters: npr.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Predstava je u ___." (the HNK — locative)',
        options: ['HNK', 'HNKu', 'HNK-u', 'HNK.-u'],
        correct: 2,
        explanation: 'An initialism takes its case ending after a hyphen: u HNK-u.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) A full stop after a unit symbol: Hodali smo 8 km. do vrha is wrong — write 8 km do vrha. (2) Full stops inside an initialism: H.N.K. and E.U. are wrong — write HNK, EU. (3) An ending glued straight onto an initialism: HNKa and EUu are wrong — write HNK-a, u EU-u. (4) A comma before itd. or a doubled full stop at the end: kruh, mlijeko, itd.. is wrong — write kruh, mlijeko itd.',
        highlight: 'write HNK-a, u EU-u',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which spelling of "to jest" is correct?',
            options: ['tj.', 't.j.', 'tj', 'TJ.'],
            correct: 0,
            explanation: 'One full stop at the end, small letters: tj.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Hodali smo 8 km. do vrha.',
              'Hodali smo 8 km do vrha.',
              'Hodali smo 8 Km do vrha.',
              'Hodali smo 8 KM. do vrha.',
            ],
            correct: 1,
            explanation: 'A unit symbol has no full stop and keeps its small letters: 8 km.',
          },
          {
            q: 'Complete: "Ulaznice za predstave ___ kupuju se na blagajni." (of the HNK)',
            options: ['HNK', 'HNK-a', 'HNKa', 'H.N.K.-a'],
            correct: 1,
            explanation: 'The genitive ending follows a hyphen: HNK-a.',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Kupili smo kruh, mlijeko, itd.',
              'Kupili smo kruh, mlijeko itd..',
              'Kupili smo kruh, mlijeko itd.',
              'Kupili smo kruh, mlijeko, itd..',
            ],
            correct: 2,
            explanation: 'No comma before itd., and its full stop also ends the sentence.',
          },
          {
            q: 'Which of these is a pokrata (made from initials), not a kratica?',
            options: ['str.', 'npr.', 'tzv.', 'HAZU'],
            correct: 3,
            explanation:
              'HAZU is built from the initials of Hrvatska akademija znanosti i umjetnosti. The others are shortened words with a full stop.',
          },
          {
            q: 'Complete: "Hrvatska je članica ___ od 2013." (the EU — genitive)',
            options: ['EU', 'EU-e', 'EU-a', 'E.U.-a'],
            correct: 2,
            explanation: 'EU is read e-u and takes the genitive -a after a hyphen: EU-a.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Abbreviations — Key Takeaways',
        points: [
          'Kratice end with a full stop: npr., tj., itd., i sl., tzv., str., br., st.',
          'Pokrate from initials: capitals, no full stops — HNK, EU, HRT',
          'Decline a pokrata with a hyphen: HNK-a, u HNK-u, u EU-u; kratice take no endings',
          'Symbols have no full stop: 5 km, 20 kg, 10 h; ordinals do: 21. st., 1. srpnja',
          'No comma before itd., and no second full stop at the end of a sentence',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Collective nouns
  // ─────────────────────────────────────────────────────────
  {
    id: 'collective-nouns',
    title: 'Leaves, Brothers, Calves',
    subtitle: 'Zbirne imenice — singular in form, many in meaning, and what agrees with them',
    icon: '🍂',
    level: 'C1',
    duration: '~8 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Many Things as One',
        body: 'A collective noun (zbirna imenica) names many things as one whole: lišće (the leaves, foliage), cvijeće (flowers), kamenje (stones). In meaning they are plural; in form most of them are singular, and the form is what agreement follows. Croatian has three types, each with its own declension and its own agreement — and learners who get them wrong produce sentences like Lišće su opali, which no native speaker would say.',
        icon: '🍂',
      },
      {
        type: 'rule',
        title: 'Type 1: Neuter Nouns in -je',
        body: 'Many collectives are neuter singular nouns in -je, often with the consonant softened: list → lišće, cvijet → cvijeće, grana → granje, kamen → kamenje, pero → perje, trn → trnje, drvo → drveće, and grožđe (grapes). They decline like more and polje (lišće, lišća, lišću, lišćem), and everything agrees in the neuter singular: Lišće je opalo. Žuto lišće. They are not the same as the ordinary plural: cvjetovi are individual blossoms, cvijeće the flowers you buy or plant; listovi are sheets of paper or single leaves, lišće the foliage.',
        highlight: 'Lišće je opalo',
      },
      {
        type: 'table',
        title: 'lišće in Every Case',
        headers: ['Case', 'Form', 'Example'],
        rows: [
          ['Nominative', 'lišće', 'Lišće je žuto.'],
          ['Genitive', 'lišća', 'Dvorište je puno lišća.'],
          ['Dative', 'lišću', 'Djeca se vesele lišću.'],
          ['Accusative', 'lišće', 'Grabimo lišće.'],
          ['Locative', 'lišću', 'Jež spava u lišću.'],
          ['Instrumental', 'lišćem', 'Staza je prekrivena lišćem.'],
        ],
      },
      {
        type: 'rule',
        title: 'Type 2: braća, djeca, gospoda',
        body: 'Three nouns are plural in meaning and decline like a feminine singular in -a, exactly like žena: braća (brothers), djeca (children), gospoda (gentlemen). braća, braće, braći, braću, braćo, braći, braćom. An attribute takes the feminine singular form: moja braća, mala djeca. The verb is plural, and the participle and the predicate adjective end in -a: Braća su došla. Djeca su umorna. Gospoda su sjela. In speech you will hear Braća su došli; the standard form is došla.',
        highlight: 'Braća su došla. Djeca su umorna.',
      },
      {
        type: 'table',
        title: 'braća, djeca, gospoda',
        headers: ['Case', 'braća', 'djeca', 'gospoda'],
        rows: [
          ['Nominative', 'braća', 'djeca', 'gospoda'],
          ['Genitive', 'braće', 'djece', 'gospode'],
          ['Dative', 'braći', 'djeci', 'gospodi'],
          ['Accusative', 'braću', 'djecu', 'gospodu'],
          ['Vocative', 'braćo', 'djeco', 'gospodo'],
          ['Locative', 'braći', 'djeci', 'gospodi'],
          ['Instrumental', 'braćom', 'djecom', 'gospodom'],
        ],
      },
      {
        type: 'rule',
        title: 'Type 3: Feminine Nouns in -ad',
        body: 'The young of animals form collectives in -ad: tele → telad (calves), pile → pilad (chicks), prase → prasad (piglets), janje → janjad (lambs); so do unuče → unučad (grandchildren) and momčad (a team). These are feminine singular nouns of the i-declension, like stvar: telad, teladi, teladi, telad. Everything agrees in the feminine singular: Telad je pasla na livadi. Prasad je bila gladna. Naša je momčad pobijedila.',
        highlight: 'Telad je pasla na livadi',
      },
      {
        type: 'table',
        title: 'Agreement at a Glance',
        headers: ['Noun', 'Example', 'Agreement'],
        rows: [
          ['lišće', 'Lišće je opalo.', 'neuter singular'],
          ['cvijeće', 'Cvijeće je uvelo.', 'neuter singular'],
          ['braća', 'Moja su braća stigla.', 'plural verb, -a forms'],
          ['djeca', 'Djeca su umorna.', 'plural verb, -a forms'],
          ['gospoda', 'Gospoda su sjela.', 'plural verb, -a forms'],
          ['telad', 'Telad je pasla.', 'feminine singular'],
          ['momčad', 'Momčad je izgubila.', 'feminine singular'],
        ],
      },
      {
        type: 'example',
        title: 'Things Gathered Together',
        items: [
          {
            hr: 'U jesen lišće požuti i opada s drveća u parku.',
            en: 'In autumn the leaves turn yellow and fall from the trees in the park.',
            note: 'lišće — neuter singular, so požuti and opada are singular; drveća is the genitive of drveće',
          },
          {
            hr: 'Na stolu je stajao buket svježeg cvijeća iz vrta.',
            en: 'On the table stood a bouquet of fresh flowers from the garden.',
            note: 'cvijeća — genitive singular of cvijeće',
          },
          {
            hr: 'Nakon oluje cesta je bila puna granja i kamenja.',
            en: 'After the storm the road was full of branches and stones.',
            note: 'granja and kamenja — genitive singular of granje and kamenje',
          },
          {
            hr: 'Grožđe je ove godine rano dozrelo, pa je berba počela u kolovozu.',
            en: 'The grapes ripened early this year, so the harvest began in August.',
            note: 'grožđe — neuter singular, so dozrelo',
          },
          {
            hr: 'Seljak je ujutro nahranio pilad, a navečer prasad.',
            en: 'The farmer fed the chicks in the morning and the piglets in the evening.',
            note: 'pilad, prasad — accusative, the same as the nominative, like stvar',
          },
          {
            hr: 'Telad je cijeli dan pasla na livadi iza staje.',
            en: 'The calves grazed all day in the meadow behind the barn.',
            note: 'telad — feminine singular, so je pasla',
          },
          {
            hr: 'Naša je momčad sinoć pobijedila u gostima.',
            en: 'Our team won away last night.',
            note: 'momčad — feminine singular: je pobijedila',
          },
        ],
      },
      {
        type: 'example',
        title: 'Brothers, Children, Gentlemen',
        items: [
          {
            hr: 'Moja su braća dvadeset godina živjela u Njemačkoj.',
            en: 'My brothers lived in Germany for twenty years.',
            note: 'braća — moja is feminine singular in form, su živjela is plural',
          },
          {
            hr: 'Dao sam braći ključeve od kuće prije puta.',
            en: 'I gave my brothers the house keys before the trip.',
            note: 'braći — dative, like ženi',
          },
          {
            hr: 'Djeca su se cijelo poslijepodne igrala u parku.',
            en: 'The children played in the park all afternoon.',
            note: 'djeca — plural verb su, participle igrala in -a',
          },
          {
            hr: 'Dame i gospodo, dobro došli u Zagreb!',
            en: 'Ladies and gentlemen, welcome to Zagreb!',
            note: 'gospodo — vocative of gospoda',
          },
          {
            hr: 'Gospoda su sjela za stol i naručila vino.',
            en: 'The gentlemen sat down at the table and ordered wine.',
            note: 'gospoda — plural verb su, participles sjela and naručila in -a',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Lišće je ___." (fallen)',
        options: ['opalo', 'opali', 'opala', 'opao'],
        correct: 0,
        explanation: 'lišće is neuter singular, so the participle is opalo.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Braća ___ došla."',
        options: ['je', 'su', 'smo', 'ste'],
        correct: 1,
        explanation:
          'braća declines like a feminine singular but takes a plural verb: Braća su došla.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Making a -je collective plural: Lišće su opali is wrong — lišće is neuter singular: Lišće je opalo. (2) Giving braća or djeca a singular verb: Djeca je došla is wrong — Djeca su došla. (3) Declining braća like a plural noun: braćima and s braćama do not exist — braći, s braćom. (4) Treating an -ad noun as masculine: Telad je pasao is wrong — telad is feminine: Telad je pasla.',
        highlight: 'Djeca su došla',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Cvijeće u vazi već je ___." (wilted)',
            options: ['uvelo', 'uveli', 'uvela', 'uveo'],
            correct: 0,
            explanation: 'cvijeće is neuter singular: uvelo.',
          },
          {
            q: 'Complete: "Moja ___ žive u Kanadi." (brothers)',
            options: ['brata', 'braća', 'braće', 'braćo'],
            correct: 1,
            explanation:
              'The nominative of the collective is braća. braće is the genitive, braćo the vocative.',
          },
          {
            q: 'Complete: "Kupila sam ___ igračke." (for the children)',
            options: ['djeca', 'djece', 'djecu', 'djeci'],
            correct: 3,
            explanation: 'The dative of djeca is djeci, like ženi.',
          },
          {
            q: 'Complete: "Naša je momčad sinoć ___." (won)',
            options: ['pobijedio', 'pobijedila', 'pobijedili', 'pobijedilo'],
            correct: 1,
            explanation: 'momčad is a feminine singular -ad noun: pobijedila.',
          },
          {
            q: 'Which of these is a collective noun?',
            options: ['listovi', 'listić', 'lišće', 'list'],
            correct: 2,
            explanation:
              'lišće names the leaves as one mass. listovi is an ordinary plural, listić a diminutive.',
          },
          {
            q: 'Complete: "Nakon oluje dvorište je bilo puno ___." (branches)',
            options: ['granje', 'granja', 'granju', 'granjem'],
            correct: 1,
            explanation: 'pun takes the genitive: granja.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Collective Nouns — Key Takeaways',
        points: [
          'Neuter -je collectives are singular: Lišće je opalo, cvijeće, granje, kamenje, grožđe',
          'cvijeće ≠ cvjetovi, lišće ≠ listovi: the mass against the single items',
          'braća, djeca, gospoda decline like žena: braću, djeci, gospodo',
          'With them: plural verb, -a forms — Braća su došla, Djeca su umorna',
          'telad, prasad, momčad are feminine singular: Telad je pasla',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'i-nouns-mati-kci': {
    worked: [
      {
        title: 'With Joy',
        problem: 'Reci: She accepted the invitation with joy.',
        en: 'She accepted the invitation with joy.',
        steps: [
          { label: 'The case', text: '"with" describing manner is s + instrumental.' },
          {
            label: 'The noun',
            text: 'radost is an i-noun; its instrumental is radosti or the -ju form.',
          },
          {
            label: 'The sound change',
            text: 'With -ju, st + j melts into šć: radošću.',
          },
        ],
        answer: 'Prihvatila je poziv s radošću.',
      },
      {
        title: 'Two Daughters, Three Cases',
        problem: 'Reci: My daughter wrote to her daughter.',
        en: 'My daughter wrote to her daughter.',
        steps: [
          { label: 'The subject', text: 'The subject is in the nominative: moja kći.' },
          {
            label: 'To whom',
            text: 'pisati komu takes the dative, and the dative of kći is kćeri.',
          },
          {
            label: 'Her own',
            text: 'The daughter belongs to the subject, so svoj, in the feminine dative: svojoj.',
          },
        ],
        answer: 'Moja kći pisala je svojoj kćeri.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which gender is "radost"?',
          options: ['masculine', 'feminine', 'neuter', 'it depends on the sentence'],
          correct: 1,
          hint: 'Put an adjective in front of it: velika …',
          explanation: 'Every noun in -ost is feminine and belongs to the i-declension.',
        },
        {
          q: 'Which is the instrumental of "kost" with the -ju ending?',
          options: ['kostju', 'košću', 'kostom', 'košći'],
          correct: 1,
          hint: 'st + j melts into šć.',
          explanation: 'kost → košću (kosti is the other standard instrumental).',
        },
        {
          q: 'Which is the instrumental of "misao" with the -ju ending?',
          options: ['misaoju', 'misaom', 'mišlju', 'misiju'],
          correct: 2,
          hint: 'The stem is misl-, and sl + j becomes šlj.',
          explanation: 'misao → mišlju (misli is also correct).',
        },
        {
          q: 'Complete: "Nije skidao pogled s njezinih ___." (eyes)',
          options: ['oči', 'očima', 'očiju', 'oka'],
          correct: 2,
          hint: 's meaning "off" takes the genitive, and oči has an unusual genitive plural.',
          explanation: 's njezinih očiju — genitive plural.',
        },
        {
          q: 'Complete: "Sutra ću posjetiti ___." (my daughter)',
          options: ['svoju kći', 'svoju kćer', 'svojoj kćeri', 'svojom kćeri'],
          correct: 1,
          hint: 'posjetiti takes the accusative, which differs from the nominative.',
          explanation: 'svoju kćer — the accusative.',
        },
        {
          q: 'Which word is the literary counterpart of "majka"?',
          options: ['mati', 'mama', 'maćeha', 'matica'],
          correct: 0,
          hint: 'It is short, and its genitive is matere.',
          explanation: 'mati, matere, materi — literary and poetic.',
        },
        {
          q: 'Complete: "Jednom ___, nisam zadovoljan." (word)',
          options: ['riječ', 'riječju', 'riječom', 'riječa'],
          correct: 1,
          hint: 'A fixed phrase with the -ju instrumental; č does not change.',
          explanation: 'Jednom riječju — in a word.',
        },
        {
          q: 'Which is the dative plural of "stvar"?',
          options: ['stvari', 'stvarama', 'stvarima', 'stvarim'],
          correct: 2,
          hint: 'The dative, locative and instrumental plural share one ending.',
          explanation: 'stvarima — -ima.',
        },
        {
          type: 'type',
          q: 'Primila je vijest s velikom ____. (radost, the -ju form)',
          answer: 'radošću',
          hint: 'st + j melts into šć.',
          explanation: 's velikom radošću (s velikom radosti is equally standard).',
        },
        {
          type: 'type',
          q: 'Grad je ____ sasvim drukčiji. (at night)',
          answer: 'noću',
          hint: 'The instrumental of noć, used as an adverb.',
          explanation: 'noću — at night.',
        },
        {
          type: 'type',
          q: 'Vidio sam tvoju ____ u kazalištu. (daughter)',
          answer: 'kćer',
          hint: 'vidjeti takes the accusative, which is not the same as the nominative kći.',
          explanation: 'tvoju kćer — accusative.',
        },
        {
          type: 'type',
          q: 'Potpisao je pismo s ____. (ljubav, the -ju form)',
          answer: 'ljubavlju',
          hint: 'After v, the j of -ju brings an l with it.',
          explanation: 's ljubavlju — with love.',
        },
        {
          type: 'type',
          q: 'Pas je zakopao hrpu ____. (kost, the longer genitive plural)',
          answer: 'kostiju',
          hint: 'The longer genitive plural adds -iju.',
          explanation: 'hrpu kostiju (kosti is also standard).',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is the instrumental of "ljubav" with the -ju ending?',
        options: ['ljubavju', 'ljubavlju', 'ljubavom', 'ljubavlu'],
        correct: 1,
        explanation: 'After v, the j of -ju brings an l: ljubavlju.',
      },
      {
        q: 'Complete: "Kupili smo ___ stan u Splitu." (for our daughter)',
        options: ['kći', 'kćer', 'kćeri', 'kćerom'],
        correct: 2,
        explanation: 'The one you buy for is in the dative: kćeri.',
      },
      {
        q: 'Complete: "Zaljubio se do ___." (literally "up to the ears")',
        options: ['uha', 'ušima', 'uši', 'ušiju'],
        correct: 3,
        explanation: 'do takes the genitive, and the genitive plural of uši is ušiju.',
      },
      {
        q: 'Complete: "Služi se ___, a ne samo srcem." (good sense)',
        options: ['pamet', 'pameću', 'pametju', 'pametom'],
        correct: 1,
        explanation: 'služiti se takes the instrumental; t + j melts into ć: pameću.',
      },
      {
        q: 'Which noun is NOT in the i-declension?',
        options: ['noć', 'stvar', 'radost', 'most'],
        correct: 3,
        explanation:
          'most (bridge) is masculine: mosta, mostu. The other three are feminine i-nouns.',
      },
      {
        q: 'Complete: "Ponosni su na svoje dvije ___." (daughters)',
        options: ['kćeri', 'kćer', 'kći', 'kćerima'],
        correct: 0,
        explanation: 'After dvije, kći takes the form kćeri.',
      },
    ],
    vocab: [
      ['radost', 'joy', 'Primili smo vijest s radošću.'],
      ['noću', 'at night', 'Grad je noću pun svjetla.'],
      ['ljubav', 'love', 'Pismo je potpisala s ljubavlju.'],
      ['pamet', 'good sense, mind', 'Služi se pameću.'],
      ['kost', 'bone', 'Pas glođe kost.'],
      ['misao', 'thought', 'Zaokupljen je jednom mišlju.'],
      ['kći', 'daughter', 'Moja kći studira u Rijeci.'],
      ['mati', 'mother (literary)', 'U pjesmi se sin oprašta od matere.'],
      ['riječ', 'word', 'Jednom riječju, uspjeli smo.'],
      ['oči', 'eyes', 'Suze su joj potekle iz očiju.'],
    ],
  },

  'accusative-measure-manner': {
    worked: [
      {
        title: 'A Whole Night',
        problem: 'Reci: It snowed all night, and in the morning the snow was a metre deep.',
        en: 'It snowed all night, and in the morning the snow was a metre deep.',
        steps: [
          {
            label: 'Duration',
            text: 'How long it snowed is a bare accusative, with no preposition.',
          },
          { label: 'The form', text: 'noć is feminine, so cijela becomes cijelu: cijelu noć.' },
          {
            label: 'Depth',
            text: 'dubok + accusative of measure; metar is masculine and inanimate, so its accusative looks like the nominative: dubok jedan metar.',
          },
        ],
        answer: 'Cijelu noć padao je snijeg, a ujutro je bio dubok jedan metar.',
      },
      {
        title: 'Price and Distance',
        problem: 'Reci: The ticket costs three euros and the station is two kilometres away.',
        en: 'The ticket costs three euros and the station is two kilometres away.',
        steps: [
          { label: 'Price', text: 'koštati + accusative of price, no preposition.' },
          { label: 'The number', text: 'After tri, the genitive singular: tri eura.' },
          {
            label: 'Distance',
            text: 'udaljen + accusative of measure; after dva, the genitive singular: dva kilometra.',
          },
        ],
        answer: 'Karta košta tri eura, a kolodvor je udaljen dva kilometra.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Čekao sam ga ___ vremena." (an hour)',
          options: ['sat', 'sata', 'satom', 'satu'],
          correct: 0,
          hint: 'The unit itself does not change; the genitive vremena follows it.',
          explanation: 'sat vremena — an hour.',
        },
        {
          q: 'Complete: "Ostali smo u Zadru mjesec ___." (a month)',
          options: ['danima', 'dan', 'dana', 'danu'],
          correct: 2,
          hint: 'The same fixed genitive that follows tjedan in "a week".',
          explanation: 'mjesec dana — a month.',
        },
        {
          q: 'Complete: "Prepješačili smo pet ___." (kilometres)',
          options: ['kilometra', 'kilometara', 'kilometre', 'kilometar'],
          correct: 1,
          hint: 'Five and up take the genitive plural.',
          explanation: 'pet kilometara.',
        },
        {
          q: 'Which phrase means "luckily"?',
          options: ['u sreću', 'na sreću', 'na sreći', 'za sreću'],
          correct: 1,
          hint: 'A fixed phrase: a preposition of direction + accusative.',
          explanation: 'na sreću — luckily (za sreću means "for luck").',
        },
        {
          q: 'Complete: "Zid je visok tri ___." (metres)',
          options: ['metar', 'metrima', 'metre', 'metra'],
          correct: 3,
          hint: 'After tri, the genitive singular.',
          explanation: 'tri metra.',
        },
        {
          q: 'Which sentence has an instrumental of manner?',
          options: [
            'Pojeo je ručak na brzinu.',
            'Vozio je punom brzinom.',
            'Stigao je na vrijeme.',
            'Pogodio je u dlaku.',
          ],
          correct: 1,
          hint: 'Look for the one with no preposition and an -om ending.',
          explanation: 'punom brzinom — instrumental of manner.',
        },
        {
          q: 'Complete: "Kava ovdje košta dva ___." (euros)',
          options: ['euro', 'eure', 'eura', 'eurima'],
          correct: 2,
          hint: 'After dva, the genitive singular.',
          explanation: 'dva eura.',
        },
        {
          q: 'Complete: "Popio je pivo na ___." (in one gulp)',
          options: ['dušak', 'dušku', 'duška', 'dušakom'],
          correct: 0,
          hint: 'na + the accusative of a masculine inanimate noun, which looks like its nominative.',
          explanation: 'na dušak — in one gulp.',
        },
        {
          type: 'type',
          q: 'Kiša je padala ____ noć. (the whole)',
          answer: 'cijelu',
          hint: 'noć is feminine, and duration takes the accusative.',
          explanation: 'cijelu noć.',
        },
        {
          type: 'type',
          q: 'Novi telefon košta ____ eura. (a thousand)',
          answer: 'tisuću',
          hint: 'The accusative of the feminine noun for a thousand.',
          explanation: 'tisuću eura.',
        },
        {
          type: 'type',
          q: 'Hodali smo četiri ____ uz rijeku. (kilometre)',
          answer: 'kilometra',
          hint: 'After četiri, the genitive singular.',
          explanation: 'četiri kilometra.',
        },
        {
          type: 'type',
          q: 'Svaku ____ idemo na tržnicu. (Saturday)',
          answer: 'subotu',
          hint: 'Repetition takes the accusative, and the word for Saturday is feminine.',
          explanation: 'svaku subotu.',
        },
        {
          type: 'type',
          q: 'Nauči pjesmu ____ do petka. (by heart — one word)',
          answer: 'napamet',
          hint: 'na + the word for mind, written together.',
          explanation: 'napamet — written as one word.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Čekala sam te ___ minutu!" (a whole)',
        options: ['cijela', 'cijelu', 'cijeloj', 'cijelom'],
        correct: 1,
        explanation: 'minuta is feminine; duration takes the accusative: cijelu.',
      },
      {
        q: 'Complete: "Hodali smo deset ___." (kilometres)',
        options: ['kilometra', 'kilometre', 'kilometara', 'kilometrima'],
        correct: 2,
        explanation: 'After deset, the genitive plural: kilometara.',
      },
      {
        q: 'Complete: "Kofer teži dva ___." (kilograms)',
        options: ['kilogram', 'kilograma', 'kilogramu', 'kilograme'],
        correct: 1,
        explanation: 'After dva, the genitive singular: kilograma.',
      },
      {
        q: 'Complete: "Ta crkva stara je osamsto ___." (years)',
        options: ['godina', 'godine', 'godinu', 'godinama'],
        correct: 0,
        explanation: 'After osamsto, the genitive plural: godina.',
      },
      {
        q: 'Which sentence means "I stayed for a week"?',
        options: [
          'Ostao sam za tjedan dana.',
          'Ostao sam u tjednu dana.',
          'Ostao sam tjednom dana.',
          'Ostao sam tjedan dana.',
        ],
        correct: 3,
        explanation:
          'Duration is the bare accusative. za tjedan dana means "within a week" or "a week from now".',
      },
      {
        q: 'Complete: "Stigli smo točno na ___." (time)',
        options: ['vremenu', 'vrijeme', 'vremena', 'vremenom'],
        correct: 1,
        explanation: 'na vrijeme — na + accusative.',
      },
    ],
    vocab: [
      ['sat vremena', 'an hour', 'Čekali smo sat vremena.'],
      ['tjedan dana', 'a week', 'Ostali smo tjedan dana.'],
      ['koštati', 'to cost', 'Laptop košta tisuću eura.'],
      ['težiti', 'to weigh', 'Kofer teži dvadeset kilograma.'],
      ['udaljen', 'away, distant', 'Kolodvor je udaljen dva kilometra.'],
      ['na brzinu', 'in a hurry', 'Ručali smo na brzinu.'],
      ['na vrijeme', 'on time', 'Stigli smo na vrijeme.'],
      ['na sreću', 'luckily', 'Na sreću, nitko nije ozlijeđen.'],
      ['napamet', 'by heart', 'Naučio je pjesmu napamet.'],
      ['svom snagom', 'with all one’s strength', 'Trčao je svom snagom.'],
    ],
  },

  'coordinate-conclusive-clauses': {
    worked: [
      {
        title: 'Two Negatives Joined',
        problem: 'Reci: She did not answer, nor did she call.',
        en: 'She did not answer, nor did she call.',
        steps: [
          { label: 'First clause', text: 'An ordinary negative clause: Nije odgovorila.' },
          {
            label: 'The connector',
            text: 'A second negative clause is joined with niti — no comma before it.',
          },
          {
            label: 'The second verb',
            text: 'niti already carries the "not", so the verb after it is left positive: je nazvala.',
          },
        ],
        answer: 'Nije odgovorila niti je nazvala.',
      },
      {
        title: 'Drawing the Conclusion',
        problem: 'Reci: The shop is closed, so we will buy bread tomorrow.',
        en: 'The shop is closed, so we will buy bread tomorrow.',
        steps: [
          { label: 'The fact', text: 'First the reason: Trgovina je zatvorena.' },
          {
            label: 'The connector',
            text: 'A conclusion follows, so a conclusive connector — stoga, with a comma before it.',
          },
          { label: 'Word order', text: 'The clitic ćemo comes straight after stoga.' },
        ],
        answer: 'Trgovina je zatvorena, stoga ćemo kruh kupiti sutra.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which connector adds a negative clause?',
          options: ['te', 'niti', 'pa', 'dakle'],
          correct: 1,
          hint: 'It is the clause-level partner of ni.',
          explanation: 'niti — nor.',
        },
        {
          q: 'Complete: "Prvo smo otišli u kino ___ smo večerali." (and then)',
          options: ['pa', 'dakle', 'niti', 'stoga'],
          correct: 0,
          hint: 'The connector of sequence in time.',
          explanation: 'pa — and then.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Pozvali smo goste, te pripremili večeru.',
            'Pozvali smo goste te pripremili večeru.',
            'Pozvali smo, goste te pripremili večeru.',
            'Pozvali smo goste te, pripremili večeru.',
          ],
          correct: 1,
          hint: 'te behaves like i.',
          explanation: 'No comma before te between coordinate clauses.',
        },
        {
          q: 'Complete: "Sve su karte prodane, ___ ćemo koncert gledati na televiziji." (therefore)',
          options: ['jer', 'ali', 'stoga', 'niti'],
          correct: 2,
          hint: 'A formal conclusive connector.',
          explanation: 'stoga — therefore.',
        },
        {
          q: 'Complete: "Nisam došao ___ sam bio bolestan." (because)',
          options: ['zato', 'zato što', 'dakle', 'stoga'],
          correct: 1,
          hint: 'This one introduces the reason, so it needs a second word.',
          explanation: 'zato što introduces a reason; zato alone looks back at one.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Ne volim ni zimu ni kišu.',
            'Volim ni zimu ni kišu.',
            'Ne volim ni zimu, ni kišu ne.',
            'Ni volim zimu ni kišu.',
          ],
          correct: 0,
          hint: 'With ni … ni, the verb keeps its own negation.',
          explanation: 'Ne volim ni zimu ni kišu.',
        },
        {
          q: 'Which is a conclusive connector?',
          options: ['i', 'te', 'ni', 'prema tome'],
          correct: 3,
          hint: 'It means "consequently".',
          explanation: 'prema tome — consequently.',
        },
        {
          q: 'In "Kasno je, pa idemo kući", pa means…',
          options: ['and then', 'so', 'but', 'nor'],
          correct: 1,
          hint: 'The second clause follows from the first.',
          explanation: 'pa here draws a conclusion.',
        },
        {
          type: 'type',
          q: 'Vlak je otišao, ____ ćemo čekati sljedeći. (therefore — formal)',
          answer: 'stoga',
          accept: ['dakle', 'zato', 'prema tome'],
          hint: 'The formal conclusive connector that begins with st-.',
          explanation: 'stoga — therefore.',
        },
        {
          type: 'type',
          q: 'Nije jeo ____ je pio. (nor)',
          answer: 'niti',
          hint: 'The negative partner of i at the head of a clause.',
          explanation: 'Nije jeo niti je pio.',
        },
        {
          type: 'type',
          q: 'Svjetla su ugašena, ____ nitko nije kod kuće. (so — a conclusion)',
          answer: 'dakle',
          accept: ['stoga', 'zato', 'prema tome'],
          hint: 'A neutral conclusive connector that sums up.',
          explanation: 'dakle — so.',
        },
        {
          type: 'type',
          q: 'Pao je s bicikla ____ je slomio ruku. (and then, as a result)',
          answer: 'pa',
          accept: ['i', 'te'],
          hint: 'The two-letter connector of sequence.',
          explanation: 'pa — and then.',
        },
        {
          type: 'type',
          q: 'Ne pijem ____ kavu ni čaj. (neither)',
          answer: 'ni',
          hint: 'The same small word stands before each item.',
          explanation: 'Ne pijem ni kavu ni čaj.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Vlak kasni, prema tome zakasnit ćemo.',
          'Vlak kasni prema tome, zakasnit ćemo.',
          'Vlak kasni prema, tome zakasnit ćemo.',
          'Vlak, kasni prema tome zakasnit ćemo.',
        ],
        correct: 0,
        explanation: 'The comma goes before the conclusive connector.',
      },
      {
        q: 'Complete: "Nije došao ___ se javio." (nor did he get in touch)',
        options: ['ali', 'niti', 'jer', 'zato'],
        correct: 1,
        explanation: 'niti opens a second negative clause.',
      },
      {
        q: 'Which connector belongs mainly to formal written style and means "and"?',
        options: ['pa', 'te', 'ni', 'dakle'],
        correct: 1,
        explanation: 'te is the formal "and".',
      },
      {
        q: 'Complete: "Bio sam umoran, ___ sam rano legao." (that is why)',
        options: ['zato što', 'jer', 'zato', 'premda'],
        correct: 2,
        explanation: 'zato looks back at the reason just given.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Pijem ni kavu ni čaj.',
          'Ne pijem ni kavu ni čaj.',
          'Ne pijem ni kavu, ni čaj ne.',
          'Ni pijem kavu ni čaj.',
        ],
        correct: 1,
        explanation: 'The verb keeps ne, and ni stands before each member.',
      },
      {
        q: 'What does dakle introduce in "Nema svjetla, dakle nitko nije kod kuće"?',
        options: ['a cause', 'a contrast', 'an alternative', 'a conclusion'],
        correct: 3,
        explanation: 'dakle draws a conclusion from the first clause.',
      },
    ],
    vocab: [
      ['dakle', 'so, thus', 'Nema svjetla, dakle nitko nije kod kuće.'],
      ['stoga', 'therefore', 'Cesta je zatvorena, stoga idemo obilaznicom.'],
      ['zato', 'that is why', 'Bio sam bolestan, zato nisam došao.'],
      ['prema tome', 'consequently', 'Rok je istekao, prema tome prijava nije valjana.'],
      ['niti', 'nor', 'Nije jeo niti je pio.'],
      ['te', 'and (formal)', 'Razmotrili su prijedlog te ga prihvatili.'],
      ['sastavna rečenica', 'coordinate clause', 'Rečenica Ručali smo i otišli je sastavna.'],
      ['zaključna rečenica', 'conclusive clause', 'Zaključna rečenica izriče posljedicu.'],
      ['obilaznica', 'bypass', 'Idemo obilaznicom.'],
    ],
  },

  abbreviations: {
    worked: [
      {
        title: 'Decline the Theatre',
        problem: 'Napiši: The premiere in the HNK will be on 12 November.',
        en: 'The premiere in the Croatian National Theatre will be on 12 November.',
        steps: [
          { label: 'The pokrata', text: 'HNK is made from initials: capitals, no full stops.' },
          { label: 'The case', text: 'u + locative; the ending goes after a hyphen: HNK-u.' },
          {
            label: 'The date',
            text: 'The day is an ordinal with a full stop, and the month is in the genitive: 12. studenoga.',
          },
        ],
        answer: 'Premijera u HNK-u bit će 12. studenoga.',
      },
      {
        title: 'A List That Trails Off',
        problem:
          'Napiši: We visited Split, Zadar, Šibenik and so on, and drove 300 km in two days.',
        en: 'We visited Split, Zadar, Šibenik and so on, and drove 300 km in two days.',
        steps: [
          { label: 'The list', text: 'itd. ends the list with no comma before it.' },
          { label: 'The unit', text: 'km is a symbol: a space after the number, no full stop.' },
          { label: 'The end', text: 'The sentence ends with its own full stop after dana.' },
        ],
        answer: 'Obišli smo Split, Zadar, Šibenik itd. i prešli 300 km u dva dana.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the abbreviation of "takozvani"?',
          options: ['tkzv.', 'tzv.', 't.z.v.', 'tzv'],
          correct: 1,
          hint: 'Three letters and one full stop.',
          explanation: 'tzv. — so-called.',
        },
        {
          q: 'Which is written correctly?',
          options: [
            'Temperatura je 25 °C.',
            'Temperatura je 25 °C..',
            'Temperatura je 25 C°.',
            'Temperatura je 25 °c.',
          ],
          correct: 0,
          hint: 'The degree sign comes before a capital C.',
          explanation: '25 °C — and the sentence has one full stop.',
        },
        {
          q: 'Complete: "Sastanak u ___ održan je jučer." (the UN — locative)',
          options: ['UN', 'UN-u', 'U.N.-u', 'UNu'],
          correct: 1,
          hint: 'Capitals, then a hyphen, then the ending.',
          explanation: 'u UN-u.',
        },
        {
          q: 'Which of these takes a full stop?',
          options: ['km', 'EUR', 'str', 'kg'],
          correct: 2,
          hint: 'Only a shortened ordinary word gets one; units do not.',
          explanation: 'str. (stranica) is a kratica.',
        },
        {
          q: 'How do you write "21st century" with the abbreviation?',
          options: ['21 st.', '21. st.', '21.st', '21-st.'],
          correct: 1,
          hint: 'The ordinal and the abbreviation each have a full stop.',
          explanation: '21. st.',
        },
        {
          q: 'Which sentence ends correctly?',
          options: [
            'Prodaju voće, povrće i sl..',
            'Prodaju voće, povrće, i sl.',
            'Prodaju voće, povrće i sl.',
            'Prodaju voće, povrće i sl',
          ],
          correct: 2,
          hint: 'No comma before it, and one full stop at the end.',
          explanation: 'i sl. closes the list and the sentence.',
        },
        {
          q: 'How do you read "s dr. Horvatom"?',
          options: [
            's doktor Horvatom',
            's doktorom Horvatom',
            's drom Horvatom',
            's doktora Horvata',
          ],
          correct: 1,
          hint: 'The kratica is read as the full word, with its case ending.',
          explanation: 's doktorom Horvatom.',
        },
        {
          q: 'Which is a syllable pokrata written like a name?',
          options: ['Hina', 'HNK', 'EU', 'str.'],
          correct: 0,
          hint: 'It declines like a noun with no hyphen.',
          explanation: 'Hina, Hine, u Hini.',
        },
        {
          type: 'type',
          q: 'Hodali smo 15 ____ po planini. (kilometres — the symbol)',
          answer: 'km',
          hint: 'Two small letters.',
          explanation: '15 km.',
        },
        {
          type: 'type',
          q: 'Gledali smo operu u ____. (the HNK — locative)',
          answer: 'HNK-u',
          hint: 'Capitals, a hyphen, then the locative ending.',
          explanation: 'u HNK-u.',
        },
        {
          type: 'type',
          q: 'Mnoge zemlje ____ koriste euro. (of the EU — genitive)',
          answer: 'EU-a',
          hint: 'A hyphen, then the genitive ending.',
          explanation: 'zemlje EU-a.',
        },
        {
          type: 'type',
          q: 'Riješite zadatak na ____ 12. (page — abbreviation)',
          answer: 'str.',
          hint: 'The first three letters of the word for page, and a full stop.',
          explanation: 'str. 12.',
        },
        {
          type: 'type',
          q: 'Kupila je jabuke, kruške ____ (and so on — abbreviation)',
          answer: 'itd.',
          hint: 'Three letters for i tako dalje.',
          explanation: 'itd. — no comma before it.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which spelling of "i tako dalje" is correct?',
        options: ['i.t.d.', 'itd.', 'itd', 'i tako d.'],
        correct: 1,
        explanation: 'itd. — one full stop at the end.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Paket od 3 kg. stigao je jučer.',
          'Paket od 3 Kg stigao je jučer.',
          'Paket od 3 kg stigao je jučer.',
          'Paket od 3 KG. stigao je jučer.',
        ],
        correct: 2,
        explanation: 'kg is a symbol: small letters, no full stop.',
      },
      {
        q: 'Complete: "Radi na ___ već deset godina." (the HRT — locative)',
        options: ['HRTu', 'HRT-u', 'HRT.-u', 'H.R.T.-u'],
        correct: 1,
        explanation: 'The locative ending after a hyphen: HRT-u.',
      },
      {
        q: 'Which is correct?',
        options: [
          'Crkva je iz 15 st.',
          'Crkva je iz 15. st.',
          'Crkva je iz 15 St.',
          'Crkva je iz 15.st',
        ],
        correct: 1,
        explanation: 'The ordinal takes a full stop, then a space, then st.',
      },
      {
        q: 'Which is written correctly?',
        options: [
          'Razgovarao sam s dr.-om Babićem.',
          'Razgovarao sam s dr. Babićem.',
          'Razgovarao sam s drom. Babićem.',
          'Razgovarao sam s Dr. Babićem.',
        ],
        correct: 1,
        explanation:
          'A kratica takes no ending, and it is written in small letters inside a sentence.',
      },
      {
        q: 'Which unit is written correctly after a number?',
        options: ['20 min', '20 min.', '20 Min', '20min.'],
        correct: 0,
        explanation: 'min is a symbol: a space before it and no full stop.',
      },
    ],
    vocab: [
      ['kratica', 'abbreviation (shortened word)', 'Npr. je kratica za na primjer.'],
      ['pokrata', 'acronym, initialism', 'HNK je pokrata.'],
      ['točka', 'full stop', 'Iza kratice pišemo točku.'],
      ['spojnica', 'hyphen', 'Nastavak dolazi iza spojnice: HNK-a.'],
      ['zarez', 'comma', 'Ispred itd. ne pišemo zarez.'],
      ['veliko slovo', 'capital letter', 'Pokrate pišemo velikim slovima.'],
      ['mjerna jedinica', 'unit of measurement', 'Iza mjerne jedinice nema točke.'],
      ['redni broj', 'ordinal number', 'Iza rednog broja pišemo točku.'],
      ['stoljeće', 'century', 'Crkva je iz 12. st.'],
    ],
  },

  'collective-nouns': {
    worked: [
      {
        title: 'Foliage, Not Leaves',
        problem: 'Reci: The leaves have fallen and the wind is carrying them across the yard.',
        en: 'The leaves have fallen and the wind is carrying them across the yard.',
        steps: [
          { label: 'The noun', text: 'Fallen leaves as a mass are lišće, the collective.' },
          { label: 'Agreement', text: 'lišće is neuter singular: je opalo.' },
          {
            label: 'The pronoun',
            text: 'Referring back to a neuter singular takes ga, not ih, though English says "them".',
          },
        ],
        answer: 'Lišće je opalo i vjetar ga nosi po dvorištu.',
      },
      {
        title: 'The Brothers Arrived',
        problem: 'Reci: My brothers have arrived and they are tired.',
        en: 'My brothers have arrived and they are tired.',
        steps: [
          {
            label: 'The attribute',
            text: 'braća declines like a feminine singular, so my is moja.',
          },
          { label: 'The verb', text: 'The auxiliary is plural: su, in second position.' },
          {
            label: 'The -a forms',
            text: 'The participle and the predicate adjective end in -a: stigla, umorna.',
          },
        ],
        answer: 'Moja su braća stigla i umorna su.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the collective noun formed from "cvijet"?',
          options: ['cvjetovi', 'cvijeće', 'cvjetić', 'cvijetje'],
          correct: 1,
          hint: 'It ends in -će.',
          explanation: 'cvijeće — flowers as a whole.',
        },
        {
          q: 'Complete: "Drveće je ___." (has blossomed)',
          options: ['procvjetalo', 'procvjetali', 'procvjetala', 'procvjetao'],
          correct: 0,
          hint: 'drveće is neuter singular.',
          explanation: 'Drveće je procvjetalo.',
        },
        {
          q: 'Complete: "Razgovarao sam s ___." (the children)',
          options: ['djeca', 'djecom', 'djeci', 'djecama'],
          correct: 1,
          hint: 'The instrumental, declined like ženom.',
          explanation: 's djecom.',
        },
        {
          q: 'Complete: "Prasad je bila ___." (hungry)',
          options: ['gladan', 'gladna', 'gladni', 'gladno'],
          correct: 1,
          hint: '-ad nouns are feminine singular.',
          explanation: 'Prasad je bila gladna.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Djeca je otišla.', 'Djeca su otišlo.', 'Djeca su otišla.', 'Djeca je otišli.'],
          correct: 2,
          hint: 'A plural verb, and a participle ending like the noun.',
          explanation: 'Djeca su otišla.',
        },
        {
          q: 'Which is the genitive of "kamenje"?',
          options: ['kamenje', 'kamenja', 'kamenju', 'kamenjem'],
          correct: 1,
          hint: 'It declines like polje: polja.',
          explanation: 'kamenja.',
        },
        {
          q: 'Complete: "Pozdravio je ___ u dvorani." (the gentlemen)',
          options: ['gospoda', 'gospode', 'gospodu', 'gospodom'],
          correct: 2,
          hint: 'The accusative, like ženu.',
          explanation: 'gospodu — accusative.',
        },
        {
          q: 'Which noun names a sports team?',
          options: ['momčad', 'telad', 'pilad', 'unučad'],
          correct: 0,
          hint: 'It comes from the word for a young man.',
          explanation: 'momčad — a team.',
        },
        {
          type: 'type',
          q: 'Lišće je ____ s grana. (opasti, past participle)',
          answer: 'opalo',
          hint: 'Neuter singular ends in -o.',
          explanation: 'Lišće je opalo.',
        },
        {
          type: 'type',
          q: 'Moja ____ studiraju u Zagrebu. (brothers)',
          answer: 'braća',
          hint: 'Plural in meaning, declined like a feminine singular in -a.',
          explanation: 'Moja braća studiraju.',
        },
        {
          type: 'type',
          q: 'Na stolu je vaza svježeg ____. (flowers — collective)',
          answer: 'cvijeća',
          hint: 'The genitive singular of the collective formed from cvijet.',
          explanation: 'svježeg cvijeća.',
        },
        {
          type: 'type',
          q: 'Kupila sam ____ sladoled. (for the children)',
          answer: 'djeci',
          hint: 'The dative, like ženi.',
          explanation: 'djeci — dative.',
        },
        {
          type: 'type',
          q: 'Telad je ____ na livadi. (pasti, past participle)',
          answer: 'pasla',
          hint: 'Feminine singular.',
          explanation: 'Telad je pasla.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Lišće je ___." (yellow)',
        options: ['žut', 'žuta', 'žuti', 'žuto'],
        correct: 3,
        explanation: 'lišće is neuter singular: žuto.',
      },
      {
        q: 'Complete: "Djeca su ___." (tired)',
        options: ['umoran', 'umorno', 'umorna', 'umornu'],
        correct: 2,
        explanation: 'The predicate adjective with djeca ends in -a: umorna.',
      },
      {
        q: 'Complete: "Dao sam ___ ključeve." (to my brothers)',
        options: ['braća', 'braću', 'braći', 'braće'],
        correct: 2,
        explanation: 'The dative of braća is braći.',
      },
      {
        q: 'Complete: "Telad je cijeli dan ___ na livadi." (grazed)',
        options: ['pasao', 'pasla', 'paslo', 'pasli'],
        correct: 1,
        explanation: 'telad is feminine singular: pasla.',
      },
      {
        q: 'Complete: "Dame i ___, dobro došli!" (gentlemen)',
        options: ['gospoda', 'gospode', 'gospodo', 'gospodu'],
        correct: 2,
        explanation: 'The vocative: gospodo.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Grožđe je dozrelo.',
          'Grožđe su dozreli.',
          'Grožđe je dozreo.',
          'Grožđe su dozrela.',
        ],
        correct: 0,
        explanation: 'grožđe is neuter singular: je dozrelo.',
      },
    ],
    vocab: [
      ['lišće', 'leaves, foliage', 'U jesen lišće opada.'],
      ['cvijeće', 'flowers', 'Kupio joj je cvijeće.'],
      ['granje', 'branches', 'Cesta je puna granja.'],
      ['kamenje', 'stones', 'Put je posut kamenjem.'],
      ['drveće', 'trees', 'Drveće je procvjetalo.'],
      ['grožđe', 'grapes', 'Grožđe je dozrelo.'],
      ['braća', 'brothers', 'Moja su braća stigla.'],
      ['gospoda', 'gentlemen', 'Dame i gospodo, dobro došli!'],
      ['telad', 'calves', 'Telad je pasla na livadi.'],
      ['momčad', 'team', 'Naša je momčad pobijedila.'],
    ],
  },
};
