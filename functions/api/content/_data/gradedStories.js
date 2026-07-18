/**
 * gradedStories.js — Graded Croatian reading & listening content
 * Graded stories across A1-C2 (see per-level counts in the array; the
 * 2026-07 reading expansion grew A1/A2 to 16 each).
 * Each story: Croatian paragraphs, English translations, vocabulary, comprehension quiz.
 */

export const GRADED_STORIES = [
  // ═══════════════════════════════════════════════════════
  // A1 — Survival level, present tense, basic vocabulary
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_a1_1',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🛒',
    title: 'Na tržnici',
    titleEn: 'At the Market',
    duration: 4,
    focus: 'Present tense • Numbers & prices • Accusative (direct objects)',
    intro:
      'Ana goes to the market every Saturday. Practice everyday shopping vocabulary and polite Croatian conversation.',
    paragraphs: [
      {
        hr: 'Ana ide na tržnicu svake subote. Ona kupuje svježe voće i povrće za cijeli tjedan. Tržnica se nalazi u centru grada.',
        en: 'Ana goes to the market every Saturday. She buys fresh fruit and vegetables for the whole week. The market is in the city centre.',
      },
      {
        hr: '"Dobar dan! Koliko košta kilogram jabuka?" pita Ana.\n"Dva eura, gospodice," odgovara prodavač.\n"Dajte mi, molim vas, dva kilograma jabuka i jedan kilogram naranča."\n"Izvolite. Ima li još nešto?"\n"Da, još pola kilograma rajčica i dvije paprike, molim."\n"U redu, to je zajedno sedam eura."',
        en: '"Good day! How much does a kilogram of apples cost?" asks Ana.\n"Two euros, miss," answers the vendor.\n"Please give me two kilograms of apples and one kilogram of oranges."\n"Here you are. Anything else?"\n"Yes, half a kilogram of tomatoes and two peppers, please."\n"All right, that\'s seven euros in total."',
      },
      {
        hr: 'Ana plati i zahvali prodavaču. On se nasmiješi i kaže: "Vidimo se sljedeće subote!" Ana stavi voće i povrće u torbu i krene prema autu.',
        en: 'Ana pays and thanks the vendor. He smiles and says: "See you next Saturday!" Ana puts the fruit and vegetables in her bag and heads towards the car.',
      },
      {
        hr: 'Doma, Ana opere sve što je kupila i stavi u hladnjak. Ona je zadovoljna — sve je svježe i nije skupo. Tržnica je puno bolja od supermarketa!',
        en: 'At home, Ana washes everything she bought and puts it in the fridge. She is satisfied — everything is fresh and not expensive. The market is much better than a supermarket!',
      },
    ],
    vocabulary: [
      { hr: 'tržnica', en: 'market', ex: 'Ana ide na tržnicu.' },
      { hr: 'svježe', en: 'fresh (adj.)', ex: 'Svježe voće je ukusno.' },
      { hr: 'voće', en: 'fruit', ex: 'Jabuke su voće.' },
      { hr: 'povrće', en: 'vegetables', ex: 'Rajčice su povrće.' },
      { hr: 'koliko košta', en: 'how much does it cost', ex: 'Koliko košta kilogram?' },
      { hr: 'jabuke', en: 'apples', ex: 'Dajte mi kilo jabuka.' },
      { hr: 'naranče', en: 'oranges', ex: 'Naranče su narančaste.' },
      { hr: 'rajčice', en: 'tomatoes', ex: 'Rajčice su crvene.' },
      { hr: 'paprike', en: 'peppers', ex: 'Paprike su ukusne.' },
      { hr: 'hladnjak', en: 'refrigerator', ex: 'Stavi mlijeko u hladnjak.' },
    ],
    quiz: [
      {
        q: 'Kada Ana ide na tržnicu?',
        qEn: 'When does Ana go to the market?',
        opts: ['Svaki petak', 'Svake nedjelje', 'Svaki dan', 'Svake subote'],
        correct: 3,
      },
      {
        q: 'Koliko košta kilogram jabuka?',
        qEn: 'How much does a kilogram of apples cost?',
        opts: ['Deset eura', 'Dva eura', 'Pet eura', 'Jedan euro'],
        correct: 1,
      },
      {
        q: 'Zašto Ana voli tržnicu?',
        qEn: 'Why does Ana love the market?',
        opts: [
          'Jer je sve svježe i nije skupo',
          'Jer je prodavač simpatičan',
          'Jer je besplatno',
          'Jer je blizu kuće',
        ],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a1_2',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '👨‍👩‍👧‍👦',
    title: 'Moja obitelj',
    titleEn: 'My Family',
    duration: 4,
    focus: 'Nominative case • Possessives (moj/moja) • Professions',
    intro: 'Marko introduces his family. Practice describing people, their ages, and what they do.',
    paragraphs: [
      {
        hr: 'Zovem se Marko Horvat. Imam dvadeset i sedam godina i živim u Osijeku. Živim s obitelji u lijepoj kući blizu centra.',
        en: 'My name is Marko Horvat. I am twenty-seven years old and I live in Osijek. I live with my family in a nice house near the centre.',
      },
      {
        hr: 'Moja mama se zove Vesna. Ona ima pedeset dvije godine i ona je učiteljica u osnovnoj školi. Moj tata se zove Zvonko. On je vozač i ima pedeset pet godina. Oni su zajedno trideset godina.',
        en: "My mother's name is Vesna. She is fifty-two years old and she is a primary school teacher. My father's name is Zvonko. He is a driver and he is fifty-five. They have been together for thirty years.",
      },
      {
        hr: 'Imam jednu sestru. Ona se zove Petra i ima dvadeset godina. Petra studira medicinu na Sveučilištu u Osijeku. Ona je pametna i marljiva. Imam i jednog brata — on se zove Luka i ima deset godina. Luka voli igrati nogomet.',
        en: 'I have one sister. Her name is Petra and she is twenty years old. Petra studies medicine at the University of Osijek. She is clever and hard-working. I also have a brother — his name is Luka and he is ten years old. Luka loves playing football.',
      },
      {
        hr: 'Imamo i psa koji se zove Rex. Rex je mali bijeli pudl i ima četiri godine. On je veseo i volio bi igrati se cijeli dan. Volim svoju obitelj — mi smo sretni zajedno.',
        en: 'We also have a dog called Rex. Rex is a small white poodle and he is four years old. He is cheerful and would love to play all day. I love my family — we are happy together.',
      },
    ],
    vocabulary: [
      { hr: 'obitelj', en: 'family', ex: 'Volim svoju obitelj.' },
      { hr: 'mama', en: 'mum / mother', ex: 'Moja mama je učiteljica.' },
      { hr: 'tata', en: 'dad / father', ex: 'Moj tata je vozač.' },
      { hr: 'učiteljica', en: 'teacher (female)', ex: 'Ona je učiteljica u školi.' },
      { hr: 'vozač', en: 'driver', ex: 'On je vozač kamiona.' },
      { hr: 'sestra', en: 'sister', ex: 'Moja sestra studira medicinu.' },
      { hr: 'studirati', en: 'to study (at university)', ex: 'Petra studira medicinu.' },
      { hr: 'brat', en: 'brother', ex: 'Moj brat voli nogomet.' },
      { hr: 'pametan', en: 'clever / smart', ex: 'Ona je pametna studentica.' },
      { hr: 'marljiv', en: 'hard-working / diligent', ex: 'On je marljiv učenik.' },
    ],
    quiz: [
      {
        q: 'Što radi Markova mama?',
        qEn: "What does Marko's mother do?",
        opts: ['Ona je kuharica', 'Ona je vozačica', 'Ona je doktorica', 'Ona je učiteljica'],
        correct: 3,
      },
      {
        q: 'Koliko godina ima Petra?',
        qEn: 'How old is Petra?',
        opts: ['Dvadeset godina', 'Dvadeset pet godina', 'Petnaest godina', 'Deset godina'],
        correct: 0,
      },
      {
        q: 'Kako se zove Markov pas?',
        qEn: "What is Marko's dog called?",
        opts: ['Vesna', 'Rex', 'Luka', 'Zvonko'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_a1_3',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '☀️',
    title: 'Jutarnja rutina',
    titleEn: 'Morning Routine',
    duration: 4,
    focus: 'Present tense • Reflexive verbs (se) • Time expressions',
    intro:
      'Follow Ivan\'s morning routine. Croatian uses many reflexive verbs (ending in "se") for daily activities.',
    paragraphs: [
      {
        hr: 'Ivan se budi svako jutro u sedam sati. Kad se probudi, odmah ide u kupaonicu. Tamo se umiva hladnom vodom, pere zube i tušira se.',
        en: "Ivan wakes up every morning at seven o'clock. When he wakes up, he immediately goes to the bathroom. There he washes his face with cold water, brushes his teeth and showers.",
      },
      {
        hr: 'Nakon tuširanja, Ivan se oblači. Odabere traperice i bijelu majicu. Onda ide u kuhinju i pripremi doručak — kuha kavu i namaže kruh maslacem i džemom. Ponekad pojede i jedno jaje.',
        en: 'After showering, Ivan gets dressed. He picks jeans and a white t-shirt. Then he goes to the kitchen and prepares breakfast — he makes coffee and spreads butter and jam on bread. Sometimes he also eats an egg.',
      },
      {
        hr: 'U pola osam Ivan uzima ranac i izlazi iz stana. Autobuska postaja je blizu, samo tri minute pješice. Ivan voli slušati glazbu dok čeka autobus.',
        en: 'At half past seven Ivan picks up his backpack and leaves the apartment. The bus stop is nearby, just three minutes on foot. Ivan likes listening to music while he waits for the bus.',
      },
      {
        hr: 'Na poslu počinje raditi u osam i četrdeset pet. Ivan je programer i voli svoj posao. "Svako jutro je nova prilika," misli Ivan dok ulazi u ured.',
        en: 'At work he starts at eight forty-five. Ivan is a programmer and he loves his job. "Every morning is a new opportunity," thinks Ivan as he walks into the office.',
      },
    ],
    vocabulary: [
      { hr: 'buditi se', en: 'to wake up (reflexive)', ex: 'Ivan se budi u sedam.' },
      { hr: 'kupaonica', en: 'bathroom', ex: 'Ide u kupaonicu.' },
      { hr: 'prati zube', en: 'to brush teeth', ex: 'Perem zube dva puta dnevno.' },
      { hr: 'tuširati se', en: 'to shower (reflexive)', ex: 'Tuširam se svako jutro.' },
      { hr: 'oblačiti se', en: 'to get dressed (reflexive)', ex: 'Ivan se oblači za posao.' },
      { hr: 'doručak', en: 'breakfast', ex: 'Jede doručak u kuhinji.' },
      { hr: 'kava', en: 'coffee', ex: 'Pijem kavu svako jutro.' },
      { hr: 'džem', en: 'jam', ex: 'Volim kruh s džemom.' },
      { hr: 'ranac', en: 'backpack', ex: 'Uzima ranac i ide.' },
      { hr: 'programer', en: 'programmer', ex: 'On je programer.' },
    ],
    quiz: [
      {
        q: 'U koliko sati se Ivan budi?',
        qEn: 'What time does Ivan wake up?',
        opts: ['U sedam sati', 'U šest sati', 'U osam sati', 'U devet sati'],
        correct: 0,
      },
      {
        q: 'Što Ivan jede za doručak?',
        qEn: 'What does Ivan eat for breakfast?',
        opts: ['Kruh s maslacem i džemom', 'Samo kavu', 'Tost sa sirom', 'Joghurt i voće'],
        correct: 0,
      },
      {
        q: 'Koliko minuta hoda Ivan do autobusne postaje?',
        qEn: 'How many minutes does Ivan walk to the bus stop?',
        opts: ['Deset minuta', 'Jednu minutu', 'Pet minuta', 'Tri minute'],
        correct: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // A2 — Elementary, past tense, common cases
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_a2_1',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🌊',
    title: 'Vikend u Splitu',
    titleEn: 'Weekend in Split',
    duration: 5,
    focus: 'Past tense (bio/bila + infinitive) • Accusative with motion verbs • Tourism vocabulary',
    intro:
      'A trip to Split! Practice the Croatian past tense and vocabulary for travel and sightseeing.',
    paragraphs: [
      {
        hr: 'Prošli vikend sam otišao u Split s prijateljicom Anom. Putovali smo autom — vožnja iz Zagreba traje oko dva i pol sata. Bilo je lijepo i sunčano.',
        en: 'Last weekend I went to Split with my friend Ana. We travelled by car — the drive from Zagreb takes about two and a half hours. It was nice and sunny.',
      },
      {
        hr: 'U Splitu smo posjetili Dioklecijanovu palaču. Hodali smo kroz uske ulice Starog grada i divili se staroj rimskoj arhitekturi. Ana je fotografirala sve što je vidjela. Za ručak smo sjeli u restoran na Rivi. Ja sam naručio prstace na buzaru, a Ana je uzela pečenu ribu s blitvom.',
        en: "In Split we visited Diocletian's Palace. We walked through the narrow streets of the Old Town and admired the old Roman architecture. Ana photographed everything she saw. For lunch we sat at a restaurant on the Riva promenade. I ordered date mussels in garlic-wine sauce, and Ana had grilled fish with Swiss chard.",
      },
      {
        hr: 'Poslijepodne smo otišli na plažu Bačvice. Kupali smo se u moru i gledali mladež kako igraju picigin — to je stara splitska igra s malenom lopticom. Sunce je jako peklo, ali bila je prekrasna atmosfera.',
        en: "In the afternoon we went to Bačvice beach. We swam in the sea and watched young people playing picigin — that's an old Split game with a small ball. The sun was beating down hard, but the atmosphere was wonderful.",
      },
      {
        hr: 'Navečer smo šetali po Rivi i pili kavu uz more. Vratio sam se doma sretan i odmoran. Split je prelijep grad — sigurno ću ga opet posjetiti uskoro!',
        en: 'In the evening we strolled along the Riva and drank coffee by the sea. I came back home happy and refreshed. Split is a beautiful city — I will definitely visit it again soon!',
      },
    ],
    vocabulary: [
      { hr: 'posjetiti', en: 'to visit (pf.)', ex: 'Posjetili smo palaču.' },
      { hr: 'hodati', en: 'to walk (impf.)', ex: 'Hodali smo po gradu.' },
      { hr: 'diviti se', en: 'to admire (refl.)', ex: 'Divimo se arhitekturi.' },
      { hr: 'naručiti', en: 'to order (in a restaurant, pf.)', ex: 'Naručio sam ribu.' },
      { hr: 'prstaci', en: 'date mussels (local delicacy)', ex: 'Prstaci su ukusni.' },
      { hr: 'blitva', en: 'Swiss chard', ex: 'Riba s blitvom i krumpirom.' },
      { hr: 'picigin', en: 'traditional Split beach ball game', ex: 'Mladi igraju picigin.' },
      { hr: 'šetati', en: 'to stroll / take a walk (impf.)', ex: 'Šetamo po gradu.' },
      { hr: 'odmoran', en: 'rested / refreshed', ex: 'Osjećam se odmorno.' },
      { hr: 'uskoro', en: 'soon', ex: 'Doći ću uskoro.' },
    ],
    quiz: [
      {
        q: 'Koliko dugo traje vožnja od Zagreba do Splita?',
        qEn: 'How long does the drive from Zagreb to Split take?',
        opts: ['Oko dva i pol sata', 'Četiri sata', 'Jedan sat', 'Šest sati'],
        correct: 0,
      },
      {
        q: 'Što je picigin?',
        qEn: 'What is picigin?',
        opts: ['Vrsta ribe', 'Stara splitska igra s loptom', 'Domaće jelo', 'Dio palače'],
        correct: 1,
      },
      {
        q: 'Što je naručio pripovjedač za ručak?',
        qEn: 'What did the narrator order for lunch?',
        opts: ['Prstace na buzaru', 'Pizzu', 'Gulaš', 'Pečenu ribu'],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a2_2',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🏥',
    title: 'Kod doktora',
    titleEn: "At the Doctor's",
    duration: 5,
    focus: 'Genitive with "boli me" • Dative case • Imperative mood',
    intro:
      "Marija isn't feeling well. Learn Croatian medical vocabulary and how to describe symptoms.",
    paragraphs: [
      {
        hr: 'Marija se nije osjećala dobro od jučer. Boljela ju je glava i grlo. Imala je i visoku temperaturu — trideset i osam stupnjeva. Jutros je nazvala svog liječnika i dobila termin za deset sati.',
        en: "Marija hadn't been feeling well since yesterday. She had a headache and a sore throat. She also had a high temperature — thirty-eight degrees. This morning she called her doctor and got an appointment for ten o'clock.",
      },
      {
        hr: 'U čekaonici je sjedila pola sata i listala stari časopis. Napokon je medicinska sestra pozvala njezino ime. Ušla je u ordinaciju. "Dobar dan, Marija. Što vas boli?" upitao je doktor Kovač. "Boli me grlo i imam temperaturu," odgovorila je ona. "I glava me boli već dva dana."',
        en: 'She sat in the waiting room for half an hour and leafed through an old magazine. Finally the nurse called her name. She entered the surgery. "Good day, Marija. What hurts?" asked Dr Kovač. "My throat hurts and I have a temperature," she answered. "And I\'ve had a headache for two days."',
      },
      {
        hr: 'Doktor ju je pregledao — pogledao je u grlo, poslušao pluća i izmjerio temperaturu. "Imate anginu," rekao je. "Moram vam propisati antibiotike. Uzimajte jednu tabletu tri puta dnevno, sedam dana. Pijte puno tekućine i mirovajte."',
        en: 'The doctor examined her — he looked at her throat, listened to her lungs and took her temperature. "You have tonsillitis," he said. "I need to prescribe you antibiotics. Take one tablet three times a day for seven days. Drink plenty of fluids and rest."',
      },
      {
        hr: 'Marija je otišla u ljekarnu i kupila lijek. Slijedila je sve doktorove upute. Za četiri dana se osjećala puno bolje. "Sljedeći put ću se bolje oblačiti po lošem vremenu," obećala je sebi.',
        en: 'Marija went to the pharmacy and bought the medicine. She followed all the doctor\'s instructions. After four days she felt much better. "Next time I\'ll dress more warmly in bad weather," she promised herself.',
      },
    ],
    vocabulary: [
      { hr: 'osjećati se', en: 'to feel (reflexive)', ex: 'Osjećam se loše.' },
      { hr: 'boljeti', en: 'to hurt/ache (boli me = it hurts me)', ex: 'Boli me glava.' },
      { hr: 'grlo', en: 'throat', ex: 'Boli me grlo.' },
      { hr: 'temperatura', en: 'temperature / fever', ex: 'Imam temperaturu.' },
      { hr: 'čekaonica', en: 'waiting room', ex: 'Čekam u čekaonici.' },
      { hr: 'ordinacija', en: "doctor's surgery / office", ex: 'Ušla je u ordinaciju.' },
      { hr: 'angina', en: 'tonsillitis / strep throat', ex: 'Imam anginu.' },
      { hr: 'antibiotici', en: 'antibiotics', ex: 'Uzimam antibiotike.' },
      { hr: 'tableta', en: 'tablet / pill', ex: 'Jedna tableta dnevno.' },
      { hr: 'mirovanje', en: 'rest (noun)', ex: 'Doktor je propisao mirovanje.' },
    ],
    quiz: [
      {
        q: 'Zašto Marija ide liječniku?',
        qEn: "Why does Marija go to the doctor's?",
        opts: [
          'Boli je noga',
          'Boli je glava i grlo i ima temperaturu',
          'Ne može hodati',
          'Ima alergiju',
        ],
        correct: 1,
      },
      {
        q: 'Koliko tableta treba uzimati svaki dan?',
        qEn: 'How many tablets should she take every day?',
        opts: ['Četiri tablete', 'Tri tablete', 'Jednu tabletu', 'Dvije tablete'],
        correct: 1,
      },
      {
        q: 'Za koliko dana se Marija osjećala bolje?',
        qEn: 'After how many days did Marija feel better?',
        opts: ['Jedan dan', 'Dva dana', 'Tjedan dana', 'Četiri dana'],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a2_3',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🏠',
    title: 'Novi susjed',
    titleEn: 'The New Neighbour',
    duration: 5,
    focus: 'Future tense (će + inf.) • Introducing yourself • Dative of address',
    intro:
      'Juraj moves to Zagreb for the first time. Learn how Croatians introduce themselves and get to know neighbours.',
    paragraphs: [
      {
        hr: 'Juraj se uselio u stan na drugom katu prošle subote. Dolazi iz Rijeke i prvi put živi sam u Zagrebu. Sve mu je novo i malo strašno — ali i uzbudljivo.',
        en: 'Juraj moved into the flat on the second floor last Saturday. He comes from Rijeka and is living alone in Zagreb for the first time. Everything is new to him and a little frightening — but also exciting.',
      },
      {
        hr: 'U ponedjeljak je netko pokucao na njegova vrata. Bila je to susjeda s trećeg kata, gospođa Babić. "Dobrodošli! Ja sam Mirjana Babić. Ako vam treba ikakva pomoć, slobodno pitajte," rekla je ljubazno. Juraj se nasmiješio: "Hvala lijepa! Ja sam Juraj Horvat. Drago mi je što sam vas upoznao."',
        en: 'On Monday someone knocked on his door. It was the neighbour from the third floor, Mrs Babić. "Welcome! I am Mirjana Babić. If you need any help, please feel free to ask," she said kindly. Juraj smiled: "Thank you very much! I am Juraj Horvat. It\'s nice to meet you."',
      },
      {
        hr: 'Gospođa Babić mu je rekla da će u petak biti skupština stanara u sedam navečer u prizemlju. "Bit će dobra prilika da upoznate ostale susjede," dodala je. Juraj je obećao da će doći.',
        en: 'Mrs Babić told him that on Friday there would be a tenants\' meeting at seven in the evening in the ground floor. "It will be a good chance to meet the other neighbours," she added. Juraj promised he would come.',
      },
      {
        hr: 'Petak navečer, Juraj je otišao na skupštinu. Upoznao je još pet susjeda. Svi su bili srdačni i prijazni. Nakon skupštine, svi su zajedno popili kavu. Juraj je pomislio: "Mislim da ću se ovdje dobro osjećati."',
        en: 'Friday evening, Juraj went to the meeting. He met five more neighbours. Everyone was warm and friendly. After the meeting, everyone had coffee together. Juraj thought: "I think I\'m going to feel good here."',
      },
    ],
    vocabulary: [
      { hr: 'uselio se', en: 'moved in (pf., m.)', ex: 'Juraj se uselio u stan.' },
      { hr: 'kat', en: 'floor / storey', ex: 'Živim na trećem katu.' },
      { hr: 'susjed/susjeda', en: 'neighbour (m./f.)', ex: 'Moja susjeda je ljubazna.' },
      { hr: 'pokucati', en: 'to knock (pf.)', ex: 'Netko je pokucao na vrata.' },
      { hr: 'slobodno pitajte', en: 'feel free to ask', ex: 'Slobodno pitajte ako trebate.' },
      { hr: 'skupština stanara', en: "tenants' meeting", ex: 'Skupština je u petak.' },
      { hr: 'prizemlje', en: 'ground floor', ex: 'Pošta je u prizemlju.' },
      { hr: 'srdačan', en: 'warm / cordial', ex: 'Svi su bili srdačni.' },
      { hr: 'obećati', en: 'to promise (pf.)', ex: 'Obećao je da će doći.' },
      { hr: 'osjećati se', en: 'to feel (reflexive)', ex: 'Dobro se osjećam.' },
    ],
    quiz: [
      {
        q: 'Odakle dolazi Juraj?',
        qEn: 'Where does Juraj come from?',
        opts: ['Iz Splita', 'Iz Osijeka', 'Iz Zagreba', 'Iz Rijeke'],
        correct: 3,
      },
      {
        q: 'Kada je skupština stanara?',
        qEn: "When is the tenants' meeting?",
        opts: [
          'U petak u sedam navečer',
          'U ponedjeljak navečer',
          'U srijedu ujutro',
          'U subotu poslijepodne',
        ],
        correct: 0,
      },
      {
        q: 'Što su susjedi radili nakon skupštine?',
        qEn: 'What did the neighbours do after the meeting?',
        opts: [
          'Zajedno su popili kavu',
          'Otišli su kući',
          'Šetali su po gradu',
          'Gledali su televiziju',
        ],
        correct: 0,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // B1 — Intermediate, verbal aspect, complex sentences
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_b1_1',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '📦',
    title: 'Selidba u Zagreb',
    titleEn: 'Moving to Zagreb',
    duration: 7,
    focus: 'Perfective vs. imperfective aspect • Instrumental case (s + instr.) • Complex clauses',
    intro:
      'Moving to a new city is an adventure. Notice how Croatian uses IMPERFECTIVE verbs for ongoing/repeated actions and PERFECTIVE verbs for completed single actions.',
    paragraphs: [
      {
        hr: 'Kad sam se preselio iz Varaždina u Zagreb, nisam poznavao gotovo nikoga u gradu. Seoba je bila naporna — tjedan dana sam pakirao stvari, a na kraju sam sve uspio strpati u mali kombi koji sam unajmio.',
        en: 'When I moved from Varaždin to Zagreb, I hardly knew anyone in the city. The move was exhausting — for a week I was packing things (impf.), and in the end I managed to fit everything into a small van I had rented.',
      },
      {
        hr: 'Moj novi stan se nalazi u Dubravi, na rubu grada. Nije luksuzno, ali ima sve što treba: dvije sobe, kuhinju, kupaonicu i mali balkon s pogledom na park. Prvoga dana kad sam ušao, osjetio sam čudan mješavinu uzbuđenja i tuge — nisam više bio u svom rodnom gradu.',
        en: "My new flat is in Dubrava, on the outskirts of the city. It's not luxurious, but it has everything you need: two rooms, a kitchen, a bathroom and a small balcony overlooking a park. On the first day when I walked in, I felt a strange mixture of excitement and sadness — I was no longer in my home town.",
      },
      {
        hr: 'Kolega s posla, Tomislav, pomogao mi je prenijeti teže komade namještaja. Bez njega bih se mučio sam sa strojem za pranje rublja i kaučem. Kad smo konačno završili, sjeli smo u kuhinji i popili hladno pivo. "Dobrodošao u Zagreb," rekao je Tomislav, "sad si pravi Zagrepčanin!"',
        en: 'My colleague Tomislav helped me move the heavier pieces of furniture. Without him I would have struggled alone with the washing machine and the sofa. When we finally finished, we sat in the kitchen and drank a cold beer. "Welcome to Zagreb," said Tomislav, "now you\'re a true Zagrepčanin!"',
      },
      {
        hr: 'Prvih nekoliko tjedana bilo je izazovno. Morao sam naučiti tramvajske linije, pronaći najbliži supermarket i prijaviti promjenu adrese u nadležnom uredu. Ali postupno, grad mi je postajao poznat. Četiri godine kasnije, ne mogu si zamisliti da živim negdje drugdje.',
        en: 'The first few weeks were challenging. I had to learn the tram lines, find the nearest supermarket and register my change of address at the relevant office. But gradually, the city became familiar to me. Four years later, I cannot imagine living anywhere else.',
      },
    ],
    vocabulary: [
      { hr: 'seoba / selidba', en: 'moving house', ex: 'Selidba je bila naporna.' },
      { hr: 'pakirati (impf.)', en: 'to pack (ongoing)', ex: 'Cijeli tjedan sam pakirao.' },
      { hr: 'strpati (pf.)', en: 'to cram / fit in (completed)', ex: 'Strpao sam sve u kombi.' },
      { hr: 'kombi', en: 'van / minivan', ex: 'Unajmio sam kombi.' },
      { hr: 'rub grada', en: 'outskirts (of the city)', ex: 'Živim na rubu grada.' },
      { hr: 'uzbuđenje', en: 'excitement', ex: 'Osjećao sam uzbuđenje.' },
      {
        hr: 'prenijeti (pf.)',
        en: 'to carry / move (furniture)',
        ex: 'Pomogao mi je prenijeti stvari.',
      },
      { hr: 'mučiti se', en: 'to struggle / toil', ex: 'Mučio bih se sam.' },
      { hr: 'postupno', en: 'gradually', ex: 'Postupno sam naučio grad.' },
      {
        hr: 'zamisliti (pf.)',
        en: 'to imagine (completed act)',
        ex: 'Ne mogu si zamisliti život drugdje.',
      },
    ],
    quiz: [
      {
        q: 'Odakle se preselio pripovjedač?',
        qEn: 'Where did the narrator move from?',
        opts: ['Iz Splita', 'Iz Rijeke', 'Iz Varaždina', 'Iz Osijeka'],
        correct: 2,
      },
      {
        q: 'Tko mu je pomogao prenijeti namještaj?',
        qEn: 'Who helped him move the furniture?',
        opts: ['Kolega Tomislav', 'Susjed', 'Otac', 'Brat'],
        correct: 0,
      },
      {
        q: 'Kako se pripovjedač osjeća prema Zagrebu četiri godine kasnije?',
        qEn: 'How does the narrator feel about Zagreb four years later?',
        opts: [
          'Smatra grad preskupim',
          'Ne može zamisliti da živi negdje drugdje',
          'Želi se preseliti natrag',
          'Nema prijatelja tamo',
        ],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_b1_2',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🎄',
    title: 'Baka dolazi za Božić',
    titleEn: 'Grandma Comes for Christmas',
    duration: 7,
    focus:
      'Habitual imperfective (svake godine = every year) • Relative clauses (koji/koja) • Cultural vocabulary',
    intro:
      'Christmas traditions in Croatia are rich and family-centred. Notice how imperfective verbs describe habitual yearly customs.',
    paragraphs: [
      {
        hr: 'Svake godine, za Božić, naša baka Ružica dolazi autobusom iz Karlovca. Onoga dana kad stigne, cijela kuća odmah zamiriše na njezine kolače — orahnjaču i makovnjaču, koje je pekla noću u svom stanu.',
        en: 'Every year at Christmas, our grandmother Ružica comes by bus from Karlovac. The day she arrives, the whole house immediately fills with the smell of her pastries — walnut roll and poppy seed roll, which she baked overnight in her flat.',
      },
      {
        hr: 'Dok baka priprema kolače u kuhinji, tata iz podruma donosi jelku. Mi djeca ukrašavamo jelku šarenim kuglicama i lampicama. Mama kuha ribu jer je Badnjak — dan posta. Svake godine spremi isti meni: bakalar na bijelo s krumpirom i blitvu. "To se jede uz Badnjak," kaže uvijek.',
        en: 'While grandma prepares pastries in the kitchen, dad brings the Christmas tree up from the basement. We children decorate the tree with colourful baubles and lights. Mum cooks fish because it\'s Christmas Eve — a day of fasting. Every year she makes the same menu: salt cod in white sauce with potatoes and Swiss chard. "That\'s what you eat on Christmas Eve," she always says.',
      },
      {
        hr: 'Nakon večere idemo na ponoćku — božićnu misu u obližnju crkvu. Crkva je uvijek puna, a orguljaš svira stare crkvene pjesme koje svi znaju napamet. Kad se vratimo, djeca odmah žure u krevet. Naravno, nitko ne može zaspati zbog uzbuđenja — pokloni čekaju pod jelkom.',
        en: 'After dinner we go to midnight mass — the Christmas mass at the nearby church. The church is always full, and the organist plays old church songs that everyone knows by heart. When we get back, the children rush straight to bed. Of course, no one can sleep for excitement — the presents are waiting under the tree.',
      },
      {
        hr: 'Ujutro na Božić svi rano ustajemo. Otvaramo poklone uz vesele uzvike i smijeh. Baka sjedi u naslonjaču i gleda nas — i plače od sreće, kao što čini svake godine. Za ručak jedemo juhu, pečenku s mlincima i za desert orahnjaču. "Taj dan je prebrzo prošao," kaže baka uvijek na odlasku. I uvijek ima pravo.',
        en: 'On Christmas morning we all get up early. We open presents amid happy exclamations and laughter. Grandma sits in the armchair and watches us — and cries with happiness, as she does every year. For lunch we have soup, roast meat with flatbread and for dessert walnut roll. "That day passes too quickly," grandma always says on leaving. And she is always right.',
      },
    ],
    vocabulary: [
      {
        hr: 'orahnjača',
        en: 'walnut roll (Croatian Christmas pastry)',
        ex: 'Baka peče orahnjaču.',
      },
      { hr: 'makovnjača', en: 'poppy seed roll', ex: 'Volim makovnjaču.' },
      { hr: 'jelka', en: 'Christmas tree', ex: 'Ukrašavamo jelku.' },
      { hr: 'Badnjak', en: 'Christmas Eve', ex: 'Na Badnjak jedemo ribu.' },
      { hr: 'bakalar', en: 'salt cod / dried cod', ex: 'Bakalar na bijelo s krumpirom.' },
      { hr: 'blitva', en: 'Swiss chard', ex: 'Blitva i krumpir uz ribu.' },
      { hr: 'ponoćka', en: 'midnight mass (Christmas)', ex: 'Idemo na ponoćku.' },
      { hr: 'napamet', en: 'by heart', ex: 'Znaju pjesme napamet.' },
      {
        hr: 'mlinec (pl. mlinci)',
        en: 'baked flatbread (traditional side dish)',
        ex: 'Pečenka s mlincima.',
      },
      { hr: 'naslonjač', en: 'armchair', ex: 'Sjedi u naslonjaču.' },
    ],
    quiz: [
      {
        q: 'Odakle dolazi baka Ružica?',
        qEn: 'Where does grandmother Ružica come from?',
        opts: ['Iz Rijeke', 'Iz Varaždina', 'Iz Karlovca', 'Iz Splita'],
        correct: 2,
      },
      {
        q: 'Zašto se na Badnjak jede riba?',
        qEn: 'Why is fish eaten on Christmas Eve?',
        opts: [
          'Jer djeca vole ribu',
          'Jer je najjeftinija',
          'Jer nema mesa u trgovini',
          'Jer je Badnjak dan posta',
        ],
        correct: 3,
      },
      {
        q: 'Što baka radi dok djeca otvaraju poklone?',
        qEn: 'What does grandma do while the children open presents?',
        opts: ['Razgovara telefonom', 'Sjedi i plače od sreće', 'Ide spavati', 'Kuha doručak'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_b1_3',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '💼',
    title: 'Na razgovoru za posao',
    titleEn: 'At the Job Interview',
    duration: 8,
    focus: 'Conditional mood (bih/bi) • Formal register • Complex vocabulary',
    intro:
      'Ksenija interviews for a marketing job in Zadar. Listen for the conditional mood and formal Croatian used in professional contexts.',
    paragraphs: [
      {
        hr: 'Ksenija je aplicirala za posao marketinškog koordinatora u jednoj zadarskoj agenciji. Tjedan dana nakon što je poslala prijavu, dobila je poziv. Bila je i uzbuđena i nervozna — to bi bio njezin prvi pravi posao nakon završetka fakulteta.',
        en: 'Ksenija applied for a job as a marketing coordinator at an agency in Zadar. A week after sending her application, she received a call. She was both excited and nervous — it would be her first proper job after finishing university.',
      },
      {
        hr: 'Na razgovoru su je pitali o njezinom dosadašnjem iskustvu, zašto želi raditi baš u toj agenciji te kakve su njezine dugoročne ambicije. Ksenija je odgovarala smireno i samopouzdano. "Što biste rekli da je vaša najveća slabost?" upitao je voditelj razgovora. Ksenija se nije zbunila: "Ponekad sam previše orijentirana na detalje — ali to mi pomaže da svaki projekt radim temeljito."',
        en: 'At the interview they asked her about her previous experience, why she wanted to work at that particular agency and what her long-term ambitions were. Ksenija answered calmly and confidently. "What would you say is your biggest weakness?" the interviewer asked. Ksenija didn\'t get flustered: "Sometimes I\'m too detail-oriented — but that helps me do every project thoroughly."',
      },
      {
        hr: 'Na kraju razgovora, Ksenija je pitala o radnom vremenu, visini plaće i mogućnostima napredovanja. "Kad biste mogli početi?" upitao je voditelj. "Odmah sljedećeg tjedna, ako bi to odgovaralo vama," odgovorila je Ksenija. Voditelj se zadovoljno nasmiješio.',
        en: 'At the end of the interview, Ksenija asked about working hours, salary and opportunities for advancement. "When could you start?" the interviewer asked. "As early as next week, if that would suit you," Ksenija answered. The interviewer smiled, satisfied.',
      },
      {
        hr: 'Dva dana kasnije, Ksenija je otvorila e-mail od agencije: bila je primljena! Odmah je nazvala mamu: "Dobila sam posao, mama!" Mama je bila toliko ponosna da su joj suze krenule niz lice. Ksenija je shvatila da su se sve godine truda i studija konačno isplatile.',
        en: 'Two days later, Ksenija opened an email from the agency: she had been hired! She immediately called her mum: "I got the job, mum!" Her mum was so proud that tears ran down her face. Ksenija realised that all those years of hard work and study had finally paid off.',
      },
    ],
    vocabulary: [
      { hr: 'aplicirati', en: 'to apply (for a job)', ex: 'Aplicirala je za posao.' },
      { hr: 'dosadašnje iskustvo', en: 'previous / prior experience', ex: 'Pitali su o iskustvu.' },
      { hr: 'smireno', en: 'calmly', ex: 'Odgovarala je smireno.' },
      { hr: 'samopouzdanje', en: 'self-confidence', ex: 'Imala je samopouzdanja.' },
      { hr: 'voditelj razgovora', en: 'interviewer', ex: 'Voditelj je postavljao pitanja.' },
      { hr: 'slabost', en: 'weakness', ex: 'Koja je vaša slabost?' },
      { hr: 'temeljito', en: 'thoroughly', ex: 'Rade temeljito i pažljivo.' },
      { hr: 'napredovanje', en: 'advancement / promotion', ex: 'Ima li mogućnosti napredovanja?' },
      { hr: 'primljen/primljena', en: 'accepted / hired (m./f.)', ex: 'Bila je primljena!' },
      { hr: 'isplatiti se (pf.)', en: 'to pay off / be worth it', ex: 'Trud se isplatio.' },
    ],
    quiz: [
      {
        q: 'Za koji posao aplicira Ksenija?',
        qEn: 'What job is Ksenija applying for?',
        opts: ['Odvjetnica', 'Novinarka', 'Marketinška koordinatorica', 'Učiteljica'],
        correct: 2,
      },
      {
        q: 'Kako je Ksenija odgovorila na pitanje o njezinoj slabosti?',
        qEn: 'How did Ksenija answer the question about her weakness?',
        opts: [
          'Rekla je da nema slabosti',
          'Rekla je da je previše orijentirana na detalje',
          'Promijenila je temu',
          'Nije odgovorila',
        ],
        correct: 1,
      },
      {
        q: 'Što je Ksenija napravila odmah nakon što je dobila e-mail o poslu?',
        qEn: 'What did Ksenija do immediately after receiving the job email?',
        opts: [
          'Nazvala je mamu',
          'Otišla je slaviti s prijatelicama',
          'Plakala je',
          'Odgovorila je na e-mail',
        ],
        correct: 0,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // A1 — continued (gs_a1_4 – gs_a1_6)
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_a1_4',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '☕',
    title: 'U kafiću',
    titleEn: 'At the Café',
    duration: 3,
    focus: 'Ordering drinks • Polite phrases • Numbers',
    intro:
      'Ivan orders coffee with a friend in a Zagreb café. Practice polite café conversation and drink vocabulary.',
    paragraphs: [
      {
        hr: 'Ivan i Maja sjede u malom kafiću u centru Zagreba. Kafić se zove "Stari grad". Vani je sunčano i toplo.',
        en: 'Ivan and Maja are sitting in a small café in the centre of Zagreb. The café is called "Stari grad". Outside it is sunny and warm.',
      },
      {
        hr: 'Konobarica dolazi do stola. "Izvolite, što želite?" pita ona.\n"Ja bih jednu kavu, molim," kaže Ivan.\n"A ja bih jednu limunadu i jedan kroasan," kaže Maja.\n"Sve je to," kaže konobarica. "Odmah dolazi."',
        en: 'The waitress comes to the table. "What would you like?" she asks.\n"I\'d like a coffee, please," says Ivan.\n"And I\'d like a lemonade and a croissant," says Maja.\n"Is that everything?" says the waitress. "Coming right away."',
      },
      {
        hr: 'Kava i limonada su ukusni. Ivan i Maja razgovaraju o vikend planovima. Plaćaju zajedno — kava košta jedan euro i pedeset centi, limonada dva eura, a kroasan jedan euro i dvadeset centi.',
        en: 'The coffee and lemonade are delicious. Ivan and Maja talk about weekend plans. They pay together — the coffee costs one euro fifty, the lemonade two euros, and the croissant one euro twenty.',
      },
    ],
    vocabulary: [
      { hr: 'kafić', en: 'café', ex: 'Sjedimo u kafiću.' },
      { hr: 'konobarica', en: 'waitress', ex: 'Konobarica donosi kavu.' },
      { hr: 'kava', en: 'coffee', ex: 'Ja bih jednu kavu.' },
      { hr: 'limonada', en: 'lemonade', ex: 'Limonada je hladna.' },
      { hr: 'kroasan', en: 'croissant', ex: 'Kroasan je ukusan.' },
      { hr: 'plaćati', en: 'to pay', ex: 'Plaćamo zajedno.' },
      { hr: 'ukusan', en: 'delicious / tasty', ex: 'Kava je ukusna.' },
      { hr: 'odmah', en: 'immediately / right away', ex: 'Dolazim odmah.' },
      { hr: 'vani', en: 'outside', ex: 'Vani je lijepo.' },
    ],
    quiz: [
      {
        q: 'Gdje se nalazi kafić?',
        qEn: 'Where is the café located?',
        opts: ['Na plaži', 'Blizu tržnice', 'U centru Zagreba', 'U Splitu'],
        correct: 2,
      },
      {
        q: 'Što naručuje Maja?',
        qEn: 'What does Maja order?',
        opts: ['Samo kavu', 'Limunadu i kroasan', 'Čaj i kolač', 'Kavu i kroasan'],
        correct: 1,
      },
      {
        q: 'Koliko košta kava?',
        qEn: 'How much does the coffee cost?',
        opts: ['Jedan euro i dvadeset centi', 'Dva eura', 'Jedan euro i pedeset centi', 'Tri eura'],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_a1_5',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🚌',
    title: 'Na autobusnoj stanici',
    titleEn: 'At the Bus Station',
    duration: 3,
    focus: 'Transport vocabulary • Asking for information • Time',
    intro:
      'Ante needs to get to Rijeka. Practice buying bus tickets and asking for travel information.',
    paragraphs: [
      {
        hr: 'Ante stoji na autobusnoj stanici u Zagrebu. On treba ići u Rijeku. Putuje autobusom jer nema auto.',
        en: 'Ante is standing at the bus station in Zagreb. He needs to go to Rijeka. He travels by bus because he does not have a car.',
      },
      {
        hr: '"Oprostite, kada ide sljedeći autobus za Rijeku?" pita Ante na blagajni.\n"Sljedeći autobus ide u dvanaest i trideset," kaže blagajnik.\n"Jedna karta, molim vas. Koliko košta?"\n"Petnaest eura. Imate li studentsku iskaznicu?"\n"Da, imam." Ante plati trinaest eura.',
        en: '"Excuse me, when does the next bus to Rijeka go?" asks Ante at the ticket office.\n"The next bus goes at twelve thirty," says the clerk.\n"One ticket, please. How much does it cost?"\n"Fifteen euros. Do you have a student card?"\n"Yes, I do." Ante pays thirteen euros.',
      },
      {
        hr: 'Ante sjedne na klupu i čeka. Autobus dolazi na vrijeme. Vožnja traje oko dva sata. Ante gleda kroz prozor i sluša glazbu na slušalicama.',
        en: 'Ante sits on a bench and waits. The bus arrives on time. The journey takes about two hours. Ante looks out of the window and listens to music on headphones.',
      },
    ],
    vocabulary: [
      { hr: 'autobusna stanica', en: 'bus station', ex: 'Čekam na autobusnoj stanici.' },
      { hr: 'karta', en: 'ticket', ex: 'Kupujem kartu za Rijeku.' },
      { hr: 'blagajnik', en: 'ticket clerk (male)', ex: 'Blagajnik prodaje karte.' },
      { hr: 'studentska iskaznica', en: 'student card', ex: 'Imam studentsku iskaznicu.' },
      { hr: 'vožnja', en: 'journey / ride', ex: 'Vožnja traje dva sata.' },
      { hr: 'čekati', en: 'to wait', ex: 'Čekam autobus.' },
      { hr: 'na vrijeme', en: 'on time', ex: 'Autobus dolazi na vrijeme.' },
      { hr: 'prozor', en: 'window', ex: 'Gledam kroz prozor.' },
      { hr: 'slušalice', en: 'headphones', ex: 'Slušam glazbu na slušalicama.' },
    ],
    quiz: [
      {
        q: 'Zašto Ante putuje autobusom?',
        qEn: 'Why does Ante travel by bus?',
        opts: ['Jer voli autobuse', 'Jer je stanica blizu', 'Jer nema auto', 'Jer je jeftinije'],
        correct: 2,
      },
      {
        q: 'U koliko sati ide sljedeći autobus?',
        qEn: 'What time does the next bus go?',
        opts: ['U trinaest', 'U dvanaest i trideset', 'U jedanaest i trideset', 'U deset'],
        correct: 1,
      },
      {
        q: 'Koliko Ante plati za kartu?',
        qEn: 'How much does Ante pay for the ticket?',
        opts: ['Deset eura', 'Petnaest eura', 'Dvanaest eura', 'Trinaest eura'],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a1_6',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🏖️',
    title: 'Na plaži',
    titleEn: 'At the Beach',
    duration: 3,
    focus: 'Weather vocabulary • Body parts • Simple descriptions',
    intro:
      'Ana and her sister spend a summer day on a Croatian beach. Practice describing weather and beach activities.',
    paragraphs: [
      {
        hr: 'Ana i njena sestra Ivana su na plaži u Zadru. More je plavo i mirno. Sunce sjaji i nije vjetrovito. Savršen je dan za plažu!',
        en: 'Ana and her sister Ivana are at the beach in Zadar. The sea is blue and calm. The sun is shining and it is not windy. It is a perfect day for the beach!',
      },
      {
        hr: 'Ana pliva u moru. Voda je hladna ali osvježavajuća. Ivana leži na ručniku i čita knjigu. Ona ne voli plivati ali voli sunčati se.',
        en: 'Ana swims in the sea. The water is cold but refreshing. Ivana lies on a towel and reads a book. She does not like swimming but she likes sunbathing.',
      },
      {
        hr: 'Poslije plivanja, Ana i Ivana jedu sladoled. Sladoled je od čokolade i vanilije. Ukusan je! Ostaju na plaži do šest sati navečer.',
        en: "After swimming, Ana and Ivana eat ice cream. The ice cream is chocolate and vanilla flavour. It is delicious! They stay at the beach until six o'clock in the evening.",
      },
    ],
    vocabulary: [
      { hr: 'plaža', en: 'beach', ex: 'Idemo na plažu.' },
      { hr: 'more', en: 'sea', ex: 'More je plavo.' },
      { hr: 'plivati', en: 'to swim', ex: 'Ana pliva svaki dan.' },
      { hr: 'ručnik', en: 'towel', ex: 'Ležim na ručniku.' },
      { hr: 'sunčati se', en: 'to sunbathe', ex: 'Volim sunčati se.' },
      { hr: 'sladoled', en: 'ice cream', ex: 'Jedem sladoled od jagode.' },
      { hr: 'osvježavajuć', en: 'refreshing', ex: 'Voda je osvježavajuća.' },
      { hr: 'mirno', en: 'calm / peaceful', ex: 'More je mirno danas.' },
      { hr: 'navečer', en: 'in the evening', ex: 'Idemo kući navečer.' },
    ],
    quiz: [
      {
        q: 'Gdje su Ana i Ivana?',
        qEn: 'Where are Ana and Ivana?',
        opts: ['U Zadru', 'U Dubrovniku', 'U Šibeniku', 'U Splitu'],
        correct: 0,
      },
      {
        q: 'Što radi Ivana na plaži?',
        qEn: 'What does Ivana do at the beach?',
        opts: ['Spava', 'Jede burek', 'Pliva u moru', 'Leži i čita knjigu'],
        correct: 3,
      },
      {
        q: 'Kada Ana i Ivana odlaze s plaže?',
        qEn: 'When do Ana and Ivana leave the beach?',
        opts: ['U četiri sata', 'U šest sati navečer', 'U sedam sati navečer', 'U pet sati'],
        correct: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // A2 — continued (gs_a2_4 – gs_a2_6)
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_a2_4',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🍕',
    title: 'Večera u restoranu',
    titleEn: 'Dinner at the Restaurant',
    duration: 3,
    focus: 'Past tense (jesam + participle) • Food vocabulary • Expressing opinions',
    intro:
      'Marko took his girlfriend Petra to a restaurant in Dubrovnik for her birthday. Practice restaurant language and past tense.',
    paragraphs: [
      {
        hr: 'Jučer navečer, Marko je odveo svoju djevojku Petru u restoran u Dubrovniku. Bio je njezin rođendan. Restoran se zove "Konoba Dalmatia" i nalazi se blizu Stare gradske jezgre.',
        en: 'Yesterday evening, Marko took his girlfriend Petra to a restaurant in Dubrovnik. It was her birthday. The restaurant is called "Konoba Dalmatia" and is located near the Old Town.',
      },
      {
        hr: 'Naručili su dalmatinske specijalitete. Petra je jela prstace na buzaru — to su dagnje kuhane s češnjakom i vinom. Marko je naručio brancina na žaru s blitvom i krumpirom. Za desert, dijelili su fritule — male dalmatinske krofne posute šećerom.',
        en: 'They ordered Dalmatian specialities. Petra ate date mussels in buzara sauce — these are mussels cooked with garlic and wine. Marko ordered grilled sea bass with chard and potatoes. For dessert, they shared fritule — small Dalmatian doughnuts dusted with sugar.',
      },
      {
        hr: 'Večera je bila odlična. Petra je rekla da su fritule bile najbolji desert koji je ikada jela. Marko se smiješio i bio je sretan što je odabrao taj restoran. Platili su sto dvadeset eura, ali vrijedilo je svake lipe.',
        en: 'The dinner was excellent. Petra said the fritule were the best dessert she had ever eaten. Marko smiled and was happy that he had chosen that restaurant. They paid one hundred and twenty euros, but it was worth every cent.',
      },
    ],
    vocabulary: [
      {
        hr: 'konoba',
        en: 'traditional Croatian restaurant / tavern',
        ex: 'Volim večerati u konobi.',
      },
      { hr: 'prstaci', en: 'date mussels (shellfish)', ex: 'Prstaci su dalmatinski specijalitet.' },
      { hr: 'brancin', en: 'sea bass', ex: 'Brancin na žaru je ukusan.' },
      { hr: 'blitva', en: 'Swiss chard', ex: 'Blitva s krumpirom je prilog.' },
      { hr: 'fritule', en: 'small Dalmatian doughnuts', ex: 'Fritule su slatke i ukusne.' },
      { hr: 'naručiti', en: 'to order (food)', ex: 'Naručio sam brancina.' },
      { hr: 'dijeliti', en: 'to share', ex: 'Dijelimo desert.' },
      { hr: 'vrijediti', en: 'to be worth', ex: 'To vrijedi svake lipe.' },
      { hr: 'odabrati', en: 'to choose / select', ex: 'Odabrali smo dobar restoran.' },
    ],
    quiz: [
      {
        q: 'Zašto su Marko i Petra otišli u restoran?',
        qEn: 'Why did Marko and Petra go to the restaurant?',
        opts: [
          'Jer je bio Markov rođendan',
          'Jer su slavili posao',
          'Jer su bili gladni',
          'Jer je bio Petrin rođendan',
        ],
        correct: 3,
      },
      {
        q: 'Što je Petra jela za glavno jelo?',
        qEn: 'What did Petra eat for the main course?',
        opts: ['Pastu', 'Fritule', 'Brancina na žaru', 'Prstace na buzaru'],
        correct: 3,
      },
      {
        q: 'Što je Petra rekla o fritulama?',
        qEn: 'What did Petra say about the fritule?',
        opts: [
          'Da su bile premasne',
          'Da su bile premale',
          'Da su bile preskupe',
          'Da su bile najbolji desert koji je ikada jela',
        ],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a2_5',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '⚽',
    title: 'Utakmica Dinama',
    titleEn: 'A Dinamo Match',
    duration: 3,
    focus: 'Past tense • Sports vocabulary • Expressing excitement',
    intro:
      'Josip went to see his favourite football club, Dinamo Zagreb, play at Maksimir stadium. Practice sports language and narrating past events.',
    paragraphs: [
      {
        hr: 'Prošle subote, Josip je otišao na stadion Maksimir gledati utakmicu Dinama. Dinamo je igrao protiv Hajduka iz Splita — to je najveći derbi u hrvatskom nogometu. Josip je kupio kartu tjedan dana ranije jer su karte brzo rasprodane.',
        en: 'Last Saturday, Josip went to the Maksimir stadium to watch a Dinamo match. Dinamo played against Hajduk from Split — this is the biggest derby in Croatian football. Josip bought his ticket a week earlier because tickets sell out quickly.',
      },
      {
        hr: 'Atmosfera na stadionu bila je nevjerojatna. Navijači su pjevali i vikali cijelu utakmicu. U dvadeset i petoj minuti, Dinamo je zabio gol i svi su skočili na noge. Na kraju prve poluvremena rezultat je bio jedan nula za Dinamo.',
        en: 'The atmosphere at the stadium was incredible. The fans sang and shouted throughout the match. In the twenty-fifth minute, Dinamo scored a goal and everyone jumped to their feet. At the end of the first half the score was one-nil to Dinamo.',
      },
      {
        hr: 'U drugom poluvremenu, Hajduk je izjednačio. Ali u devedeset i drugoj minuti, Dinamo je zabio pobjednički gol! Josip je bio presretan. Vratio se kući kasno navečer, ali nije mogao zaspati od uzbuđenja.',
        en: 'In the second half, Hajduk equalised. But in the ninety-second minute, Dinamo scored the winning goal! Josip was overjoyed. He got home late in the evening, but he could not fall asleep from excitement.',
      },
    ],
    vocabulary: [
      { hr: 'utakmica', en: 'match / game', ex: 'Idemo gledati utakmicu.' },
      { hr: 'stadion', en: 'stadium', ex: 'Maksimir je veliki stadion.' },
      { hr: 'navijač', en: 'fan / supporter', ex: 'Josip je navijač Dinama.' },
      { hr: 'zabiti gol', en: 'to score a goal', ex: 'Dinamo je zabio gol.' },
      { hr: 'derbi', en: 'derby (big local rivalry match)', ex: 'Dinamo-Hajduk derbi je poseban.' },
      { hr: 'izjednačiti', en: 'to equalise', ex: 'Hajduk je izjednačio u drugom poluvremenu.' },
      { hr: 'poluvrijeme', en: 'half time / half', ex: 'Rezultat na poluvremenu bio je 1:0.' },
      { hr: 'uzbuđenje', en: 'excitement', ex: 'Nije mogao spavati od uzbuđenja.' },
      { hr: 'rasprodati', en: 'to sell out', ex: 'Karte su rasprodane.' },
    ],
    quiz: [
      {
        q: 'Tko je igrao u utakmici?',
        qEn: 'Who played in the match?',
        opts: ['Dinamo i Šibenik', 'Dinamo i Hajduk', 'Dinamo i Rijeka', 'Hajduk i Osijek'],
        correct: 1,
      },
      {
        q: 'Koji je bio rezultat na poluvremenu?',
        qEn: 'What was the score at half time?',
        opts: ['Jedan jedan', 'Dva nula za Dinamo', 'Jedan nula za Dinamo', 'Nula nula'],
        correct: 2,
      },
      {
        q: 'Kada je Dinamo zabio pobjednički gol?',
        qEn: 'When did Dinamo score the winning goal?',
        opts: [
          'Na poluvremenu',
          'U dvadeset i petoj minuti',
          'U devedeset i drugoj minuti',
          'Na početku utakmice',
        ],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_a2_6',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🎶',
    title: 'Klapa na rivi',
    titleEn: 'Klapa on the Promenade',
    duration: 3,
    focus: 'Past + present tense • Music vocabulary • Cultural descriptions',
    intro:
      'Katarina heard a klapa group singing on the Šibenik waterfront. Practice describing cultural experiences and using mixed tenses.',
    paragraphs: [
      {
        hr: 'Katarina je šetala rivom u Šibeniku jedne ljetne večeri. Bila je topla noć i grad je bio pun turista i mještana. Odjednom je čula pjevanje — grupu muškaraca koji su pjevali bez instrumenta.',
        en: 'Katarina was walking along the promenade in Šibenik one summer evening. It was a warm night and the town was full of tourists and locals. Suddenly she heard singing — a group of men singing without instruments.',
      },
      {
        hr: 'To je bila klapa — tradicionalni dalmatinski oblik pjevanja. Klapa se sastoji od muških glasova koji pjevaju u harmoniji. Pjesme su često o moru, ljubavi i zavičaju. Katarina je stala i slušala. Svi oko nje su također stali.',
        en: 'It was a klapa — the traditional Dalmatian form of singing. A klapa consists of male voices singing in harmony. The songs are often about the sea, love and homeland. Katarina stopped and listened. Everyone around her stopped too.',
      },
      {
        hr: 'Nakon nastupa, Katarina je prišla vođi klape i pitala ga o grupi. Rekao joj je da klapa postoji već dvadeset godina i da nastupaju svako ljeto na Šibenskoj rivi. UNESCO je 2012. godine proglasio klapu nematerijalnom kulturnom baštinom čovječanstva.',
        en: 'After the performance, Katarina approached the klapa leader and asked him about the group. He told her the klapa had existed for twenty years and that they perform every summer on the Šibenik waterfront. In 2012 UNESCO declared klapa an intangible cultural heritage of humanity.',
      },
    ],
    vocabulary: [
      { hr: 'riva', en: 'waterfront promenade', ex: 'Šetamo po rivi.' },
      {
        hr: 'klapa',
        en: 'klapa (traditional Dalmatian a cappella singing group)',
        ex: 'Klapa pjeva na rivi.',
      },
      { hr: 'harmonija', en: 'harmony', ex: 'Glasovi pjevaju u harmoniji.' },
      { hr: 'zavičaj', en: 'homeland / native region', ex: 'Pjesme su o zavičaju.' },
      { hr: 'nastup', en: 'performance', ex: 'Nastup klape bio je predivan.' },
      { hr: 'mještanin', en: 'local resident', ex: 'Mještani vole klapu.' },
      { hr: 'baština', en: 'heritage', ex: 'Klapa je kulturna baština.' },
      { hr: 'UNESCO', en: 'UNESCO', ex: 'UNESCO je proglasio klapu baštinom.' },
      { hr: 'odjednom', en: 'suddenly', ex: 'Odjednom je počela kiša.' },
    ],
    quiz: [
      {
        q: 'Gdje je Katarina čula klapu?',
        qEn: 'Where did Katarina hear the klapa?',
        opts: [
          'U kafiću u Zadru',
          'Na plaži u Splitu',
          'Na rivi u Šibeniku',
          'Na stadionu u Zagrebu',
        ],
        correct: 2,
      },
      {
        q: 'Što je klapa?',
        qEn: 'What is a klapa?',
        opts: [
          'Vrsta dalmatinske hrane',
          'Tradicijski oblik a cappella pjevanja',
          'Tradicionalni ples',
          'Glazbeni instrument',
        ],
        correct: 1,
      },
      {
        q: 'Kada je UNESCO proglasio klapu kulturnom baštinom?',
        qEn: 'When did UNESCO declare klapa cultural heritage?',
        opts: ['2000. godine', '2020. godine', '2008. godine', '2012. godine'],
        correct: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // B1 — continued (gs_b1_4 – gs_b1_6)
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_b1_4',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🫙',
    title: 'Peka — drevna tradicija',
    titleEn: 'Peka — Ancient Tradition',
    duration: 4,
    focus: 'Passive constructions • Cultural vocabulary • Instrumental case',
    intro:
      "Learn about peka, one of Croatia's most beloved cooking traditions, while practising passive voice and cultural description.",
    paragraphs: [
      {
        hr: 'Peka je jedan od najstarijih načina kuhanja u Dalmaciji i Istri. Radi se o metalnom poklopcu, koji se naziva peka ili čripnja, koji se stavlja iznad hrane dok se ona polako peče ispod žara od drvenog ugljena. Ovaj način kuhanja koristi se stoljećima i danas je simbolom dalmatinske kuhinje.',
        en: 'Peka is one of the oldest cooking methods in Dalmatia and Istria. It involves a metal lid, called peka or čripnja, which is placed over the food while it slowly cooks under the embers of charcoal. This cooking method has been used for centuries and today is a symbol of Dalmatian cuisine.',
      },
      {
        hr: 'Najčešće se pod pekom priprema janjetina, teletina ili piletina, obično s povrćem kao što su krumpiri, mrkva i luk. Meso se marinira nekoliko sati u maslinovom ulju, češnjaku i ružmarinu. Zatim se sve složi u plitku metalnu posudu, pokrije pekovim poklopcem i zaspe žarom. Jelo se priprema dva do tri sata.',
        en: 'Most often lamb, veal or chicken is prepared under the peka, usually with vegetables such as potatoes, carrots and onion. The meat is marinated for several hours in olive oil, garlic and rosemary. Then everything is arranged in a shallow metal dish, covered with the peka lid and buried under embers. The dish takes two to three hours to prepare.',
      },
      {
        hr: 'Ono što peku čini posebnom nije samo okus — to je cijeli ritual koji je oko nje nastao. U dalmatinskim obiteljima, priprema peke povod je za obiteljsko okupljanje. Dok jelo polako dozrijeva ispod žara, obitelj sjedi vani, razgovara i pije domaće vino. Gosti su uvijek dobrodošli. Kažu da je hrana pod pekon kuhana ljubavlju — i to se može osjetiti u svakom zalogaju.',
        en: 'What makes peka special is not just the flavour — it is the whole ritual that has grown up around it. In Dalmatian families, preparing a peka is an occasion for family gathering. While the dish slowly matures under the embers, the family sits outside, talks and drinks homemade wine. Guests are always welcome. They say food cooked under the peka is cooked with love — and you can taste it in every bite.',
      },
    ],
    vocabulary: [
      {
        hr: 'peka',
        en: 'peka (traditional Croatian domed cooking lid)',
        ex: 'Janjetina pod pekon je ukusna.',
      },
      { hr: 'žar', en: 'embers / hot coals', ex: 'Jelo se peče ispod žara.' },
      { hr: 'janjetina', en: 'lamb meat', ex: 'Janjetina pod pekon je specijalitet.' },
      { hr: 'marinirati', en: 'to marinate', ex: 'Mariniram meso u maslinovom ulju.' },
      { hr: 'maslinovo ulje', en: 'olive oil', ex: 'Dalmatinska kuhinja koristi maslinovo ulje.' },
      { hr: 'ružmarin', en: 'rosemary', ex: 'Ružmarin daje poseban okus mesu.' },
      { hr: 'ritual', en: 'ritual', ex: 'Peka je obiteljski ritual.' },
      { hr: 'zalogaj', en: 'bite / mouthful', ex: 'Svaki zalogaj je ukusan.' },
      {
        hr: 'dozrijevati',
        en: 'to mature / to slowly cook through',
        ex: 'Jelo dozrijeva ispod žara.',
      },
    ],
    quiz: [
      {
        q: 'Što je peka?',
        qEn: 'What is peka?',
        opts: ['Vrsta sira', 'Dalmatinski ples', 'Metalni poklopac za kuhanje', 'Vrsta kruha'],
        correct: 2,
      },
      {
        q: 'Koliko dugo se priprema jelo pod pekon?',
        qEn: 'How long does a peka dish take to prepare?',
        opts: ['Pet sati', 'Jedan sat', 'Dva do tri sata', 'Pola sata'],
        correct: 2,
      },
      {
        q: 'Što obitelj radi dok jelo dozrijeva ispod žara?',
        qEn: 'What does the family do while the dish matures under the embers?',
        opts: ['Ide na plažu', 'Ide u crkvu', 'Spava', 'Sjedi vani, razgovara i pije vino'],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_b1_5',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🏰',
    title: 'Dubrovnik: grad i zidine',
    titleEn: 'Dubrovnik: the City and its Walls',
    duration: 4,
    focus: 'Historical present • Genitive of possession • Describing places',
    intro:
      "Explore the history and architecture of Dubrovnik's famous Old Town. Practice describing places, using the genitive case, and narrating historical facts.",
    paragraphs: [
      {
        hr: 'Dubrovnik je jedan od najočuvanijih primjera gotičko-renesansne arhitekture na Mediteranu. Stari grad okružen je moćnim kamenim zidinama dugim gotovo dva kilometra, koje su građene i pojačavane od 13. do 17. stoljeća. Dubrovnik je 1979. uvršten na UNESCO-ov popis mjesta Svjetske baštine.',
        en: "Dubrovnik is one of the best-preserved examples of Gothic-Renaissance architecture in the Mediterranean. The Old Town is surrounded by mighty stone walls almost two kilometres long, which were built and reinforced from the 13th to the 17th century. In 1979 Dubrovnik was placed on UNESCO's World Heritage list.",
      },
      {
        hr: 'Šetnja po zidinama traje otprilike sat i pol i nudi nevjerojatne poglede na Jadransko more i crvene krovove staroga grada. Duž zidina smješteno je nekoliko tvrđava: Lovrijenac, Minčeta i Revelin. Lovrijenac, koji stoji na 37 metara visokoj stijeni izvan zidina, posebno je impresivan. Na njemu piše natpis: "Non bene pro toto libertas venditur auro" — "Sloboda se ne prodaje ni za sve zlato na svijetu."',
        en: 'Walking the walls takes about an hour and a half and offers incredible views of the Adriatic Sea and the red rooftops of the old town. Along the walls several fortresses are positioned: Lovrijenac, Minčeta and Revelin. Lovrijenac, which stands on a 37-metre-high rock outside the walls, is particularly impressive. It bears the inscription: "Non bene pro toto libertas venditur auro" — "Freedom is not sold for all the gold in the world."',
      },
      {
        hr: 'Dubrovnik je bio slobodna republika — Dubrovačka Republika — od 1358. do 1808. godine. U tom razdoblju, grad je bio jedno od najvažnijih trgovačkih središta Mediterana, poznato po svojoj vještoj diplomaciji i bogatim trgovcima. Danas je Dubrovnik jedan od najpopularnijih turističkih odredišta u Europi i prima više od milijun posjetitelja godišnje.',
        en: 'Dubrovnik was a free republic — the Republic of Ragusa — from 1358 to 1808. During that period, the city was one of the most important trading centres of the Mediterranean, known for its skilled diplomacy and wealthy merchants. Today Dubrovnik is one of the most popular tourist destinations in Europe, receiving more than a million visitors a year.',
      },
    ],
    vocabulary: [
      { hr: 'zidine', en: 'city walls', ex: 'Šetamo po zidinama Dubrovnika.' },
      { hr: 'tvrđava', en: 'fortress', ex: 'Lovrijenac je stara tvrđava.' },
      { hr: 'baština', en: 'heritage', ex: 'Dubrovnik je Svjetska baština.' },
      { hr: 'arhitektura', en: 'architecture', ex: 'Dubrovnik ima prekrasnu arhitekturu.' },
      { hr: 'republika', en: 'republic', ex: 'Dubrovačka Republika bila je slobodna.' },
      { hr: 'diplomacija', en: 'diplomacy', ex: 'Grad je bio poznat po diplomaciji.' },
      { hr: 'trgovac', en: 'merchant / trader', ex: 'Bogati trgovci živjeli su u gradu.' },
      { hr: 'okružen', en: 'surrounded', ex: 'Grad je okružen zidinama.' },
      { hr: 'natpis', en: 'inscription', ex: 'Na tvrđavi je latinski natpis.' },
    ],
    quiz: [
      {
        q: 'Koliko je duga dubrovačka zidina?',
        qEn: 'How long are the Dubrovnik walls?',
        opts: ['Tri kilometra', 'Jedan kilometar', 'Pola kilometra', 'Gotovo dva kilometra'],
        correct: 3,
      },
      {
        q: 'Što znači natpis na tvrđavi Lovrijenac?',
        qEn: 'What does the inscription on fortress Lovrijenac mean?',
        opts: [
          'Mir i ljubav',
          'Sloboda se ne prodaje ni za sve zlato na svijetu',
          'Dobrodošli u Dubrovnik',
          'Bog i Hrvati',
        ],
        correct: 1,
      },
      {
        q: 'Koliko dugo je Dubrovnik bio slobodna republika?',
        qEn: 'How long was Dubrovnik a free republic?',
        opts: ['Od 1200. do 1500.', 'Od 1358. do 1808.', 'Oko sto godina', 'Samo pedeset godina'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_b1_6',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🌿',
    title: 'Istra: vino, tartufi i masline',
    titleEn: 'Istria: Wine, Truffles and Olives',
    duration: 4,
    focus: 'Relative clauses • Impersonal constructions • Agricultural vocabulary',
    intro:
      "Discover Istria's famous gastronomic landscape. Practice relative clauses, impersonal constructions, and vocabulary related to food and agriculture.",
    paragraphs: [
      {
        hr: 'Istra je poluotok koji se smatra kulinarskom prijestolnicom Hrvatske. Tlo Istre bogato je crvenom "terra rossa" zemljom, koja je idealna za uzgoj masline, vinove loze i mnogih aromatičnih biljaka. Upravo zbog tog jedinstvenog tla, istarsko vino i maslinovo ulje poznati su diljem Europe.',
        en: 'Istria is a peninsula that is considered the culinary capital of Croatia. Istrian soil is rich in red "terra rossa" earth, which is ideal for growing olives, vines and many aromatic plants. It is precisely because of this unique soil that Istrian wine and olive oil are well known throughout Europe.',
      },
      {
        hr: 'Posebno mjesto u istarskoj gastronomiji zauzima tartuf — gljiva koja raste skrivena pod zemljom u hrastovim šumama. Istra ima neke od najvrjednijih vrsta tartufa na svijetu: bijeli tartuf, koji se bere u jesen, smatra se "dijamantom kuhinje". Jedan kilogram bijelog tartufa može koštati nekoliko tisuća eura. Lovci na tartufe, poznati kao tartufari, obučavaju posebne pse koji njuhom pronalaze skrivena blaga pod lišćem i korijenjem.',
        en: 'A special place in Istrian gastronomy is held by the truffle — a fungus that grows hidden underground in oak forests. Istria has some of the most valuable species of truffles in the world: the white truffle, which is harvested in autumn, is considered the "diamond of cuisine". One kilogram of white truffle can cost several thousand euros. Truffle hunters, known as tartufari, train special dogs that use their sense of smell to find hidden treasures beneath leaves and roots.',
      },
      {
        hr: 'Istra nije samo poznata po tartufu i vinu. Rovinj i Pula privlače milhune turista, a unutrašnjost poluotoka nudi mirna sela s kamenim kućama i izvorne okuse koji se sve teže nalaze drugdje. Posebno se preporučuje posjetiti istarsku konferenci — međunarodni sajam tartufa koji se svake godine održava u Livadama kod Buzeta. Tko jednom proba istarsku kuhinju, teško je zaboravi.',
        en: 'Istria is not only famous for truffles and wine. Rovinj and Pula attract millions of tourists, while the interior of the peninsula offers quiet villages with stone houses and authentic flavours that are increasingly hard to find elsewhere. A visit to the Istrian truffle fair — an international truffle festival held each year in Livade near Buzet — is particularly recommended. Anyone who tries Istrian cuisine once can hardly forget it.',
      },
    ],
    vocabulary: [
      { hr: 'tartuf', en: 'truffle', ex: 'Bijeli tartuf je jako skup.' },
      { hr: 'tartufar', en: 'truffle hunter', ex: 'Tartufari obučavaju pse.' },
      { hr: 'poluotok', en: 'peninsula', ex: 'Istra je poluotok na Jadranu.' },
      { hr: 'tlo', en: 'soil / ground', ex: 'Istarsko tlo je bogato i crveno.' },
      { hr: 'uzgoj', en: 'cultivation / growing', ex: 'Uzgoj masline je važan u Istri.' },
      { hr: 'gljiva', en: 'mushroom / fungus', ex: 'Tartuf je vrsta gljive.' },
      { hr: 'loza', en: 'grapevine', ex: 'Na brežuljcima rastu vinove loze.' },
      { hr: 'njuh', en: 'sense of smell', ex: 'Psi imaju odličan njuh.' },
      { hr: 'sajam', en: 'fair / trade show', ex: 'Sajam tartufa je svake godine u Buzetu.' },
    ],
    quiz: [
      {
        q: 'Zašto je istarsko tlo posebno?',
        qEn: 'Why is Istrian soil special?',
        opts: [
          'Jer je plavo',
          'Jer je bogata crvena "terra rossa" zemlja idealna za uzgoj',
          'Jer nema minerala',
          'Jer je uvijek mokro',
        ],
        correct: 1,
      },
      {
        q: 'Kada se bere bijeli tartuf?',
        qEn: 'When is the white truffle harvested?',
        opts: ['U proljeće', 'Zimi', 'Ljeti', 'U jesen'],
        correct: 3,
      },
      {
        q: 'Kako tartufari pronalaze tartufe?',
        qEn: 'How do tartufari find truffles?',
        opts: [
          'Metal detektorom',
          'Uz pomoć satelita',
          'Uz pomoć posebno obučenih pasa',
          'Kopanjem na slijepo',
        ],
        correct: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // B2 — Advanced (gs_b2_1 – gs_b2_4)
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_b2_1',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '📖',
    title: 'Miroslav Krleža i hrvatska književnost',
    titleEn: 'Miroslav Krleža and Croatian Literature',
    duration: 5,
    focus: 'Literary register • Subordinate clauses • Imperfect & pluperfect',
    intro:
      "Explore the life and legacy of Croatia's greatest 20th-century writer, Miroslav Krleža. Practice formal literary register and complex sentence structures.",
    paragraphs: [
      {
        hr: 'Miroslav Krleža — književnik, dramatičar, esejist i enciklopedist — najznačajnija je figura moderne hrvatske književnosti. Rođen je 1893. u Zagrebu, u doba kada je Hrvatska još uvijek bila dio Austro-Ugarske Monarhije, a umro je 1981. kao državno priznat velikan socijalističke Jugoslavije. Paradoks njegova položaja — neprilagodljivi buntovnik koji je istovremeno bio blizak vlastima — obilježava svu složenost njegova opusa i njegova vremena.',
        en: 'Miroslav Krleža — writer, playwright, essayist and encyclopaedist — is the most significant figure of modern Croatian literature. He was born in 1893 in Zagreb, at a time when Croatia was still part of the Austro-Hungarian Monarchy, and died in 1981 as a state-recognised giant of socialist Yugoslavia. The paradox of his position — an uncompromising rebel who was at the same time close to the authorities — marks all the complexity of his body of work and his era.',
      },
      {
        hr: 'Krležin književni opus je golem i raznovrstan. U dramama kao što su "Gospoda Glembajevi" i "U agoniji", Krleža razotkriva moralnu trulost građanske klase u predratnoj Hrvatskoj. U romanima "Na rubu pameti" i "Povratak Filipa Latinovicza" propituje ulogu intelektualca u društvu koje ga ne razumije i ne trpi. Njegova poezija, posebice zbirka "Balade Petrice Kerempuha" pisana čakavsko-kajkavskim jezičnim slojevima, postiže izniman lirski učinak koji se opire jednostavnom prevođenju.',
        en: 'Krleža\'s literary output is vast and varied. In plays such as "The Glembay Family" and "In Agony", Krleža exposes the moral rot of the bourgeois class in pre-war Croatia. In the novels "On the Edge of Reason" and "The Return of Philip Latinovicz", he interrogates the role of the intellectual in a society that neither understands nor tolerates him. His poetry, especially the collection "The Ballads of Petrica Kerempuh" written in Chakavian-Kajkavian linguistic layers, achieves an exceptional lyrical effect that resists simple translation.',
      },
      {
        hr: 'Uz književni rad, Krleža je bio glavni urednik Enciklopedije Jugoslavije, monumentalnog projekta koji je obilježio zlatno doba jugoslavenske leksikografije. Kao predsjednik Društva hrvatskih književnika, 1967. potpisao je "Deklaraciju o nazivu i položaju hrvatskog književnog jezika" — dokument koji je zahtijevao ravnopravnost hrvatskog jezika u odnosu na srpski, što mu je donijelo sukob s vlastima. Krleža je ostao kontroverzna figura: na Zapadu cijenjen kao autor europskog formata, u Hrvatskoj poštovan i osporavan istovremeno. Njegova djela i danas se čitaju, igraju i tumače na novim načinima, svjedočeći o njihovoj trajnoj aktualnosti.',
        en: 'Alongside his literary work, Krleža was chief editor of the Encyclopaedia of Yugoslavia, a monumental project that marked the golden age of Yugoslav lexicography. As president of the Society of Croatian Writers, in 1967 he signed the "Declaration on the Name and Status of the Croatian Literary Language" — a document demanding equal status for Croatian in relation to Serbian, which brought him into conflict with the authorities. Krleža remains a controversial figure: valued in the West as a writer of European stature, simultaneously revered and contested in Croatia. His works are still read, performed and interpreted in new ways today, testifying to their enduring relevance.',
      },
    ],
    vocabulary: [
      { hr: 'dramatičar', en: 'playwright', ex: 'Krleža je bio pisac i dramatičar.' },
      { hr: 'enciklopedist', en: 'encyclopaedist', ex: 'Radio je kao enciklopedist.' },
      { hr: 'buntovnik', en: 'rebel', ex: 'Bio je neprilagodljivi buntovnik.' },
      { hr: 'opus', en: 'body of work / oeuvre', ex: 'Krležin opus je golem.' },
      { hr: 'razotkrivati', en: 'to expose / reveal', ex: 'Drama razotkriva moralnu trulost.' },
      {
        hr: 'propitivati',
        en: 'to interrogate / question',
        ex: 'Roman propituje ulogu intelektualca.',
      },
      { hr: 'leksikografija', en: 'lexicography', ex: 'Bio je veliki doprinos leksikografiji.' },
      { hr: 'osporavati', en: 'to contest / dispute', ex: 'Krleža je i danas osporavan.' },
      {
        hr: 'aktualnost',
        en: 'relevance / topicality',
        ex: 'Njegova dijela imaju trajnu aktualnost.',
      },
    ],
    quiz: [
      {
        q: 'Kada je i gdje je rođen Miroslav Krleža?',
        qEn: 'When and where was Miroslav Krleža born?',
        opts: ['1881. u Osijeku', '1893. u Splitu', '1900. u Dubrovniku', '1893. u Zagrebu'],
        correct: 3,
      },
      {
        q: 'Što je Krleža potpisao 1967. godine?',
        qEn: 'What did Krleža sign in 1967?',
        opts: [
          'Statut Dinama',
          'Ustav Jugoslavije',
          'Deklaraciju o nazivu i položaju hrvatskog književnog jezika',
          'Sporazum o miru',
        ],
        correct: 2,
      },
      {
        q: 'Čemu svjedoče Krležina djela koja se i danas čitaju i igraju?',
        qEn: "What do Krleža's works being read and performed today testify to?",
        opts: [
          'Državnoj cenzuri',
          'Njihovoj trajnoj aktualnosti',
          'Nedostatku novih pisaca',
          'Lošem ukusu publike',
        ],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_b2_2',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🌊',
    title: 'Domovinski rat i sjećanje',
    titleEn: 'The Homeland War and Memory',
    duration: 5,
    focus: 'Complex past constructions • Abstract nouns • Sensitive historical register',
    intro:
      'A thoughtful exploration of how Croatia commemorates the 1990s Homeland War. Practise advanced past tense constructions, abstract vocabulary, and handling sensitive historical topics.',
    paragraphs: [
      {
        hr: 'Domovinski rat — koji je trajao od 1991. do 1995. — temeljni je događaj suvremene hrvatske identifikacije. Hrvatska je 25. lipnja 1991. proglasila neovisnost, no agresija Jugoslavenske narodne armije i srpskih paravojnih postrojbi uskoro je eskalirala u oružani sukob koji je obilježio čitavo desetljeće. Gradovi kao Vukovar, Dubrovnik i Šibenik postali su simboli otpora i patnje.',
        en: "The Homeland War — which lasted from 1991 to 1995 — is the foundational event of contemporary Croatian identity. Croatia declared independence on 25 June 1991, but the aggression of the Yugoslav People's Army and Serbian paramilitary formations soon escalated into an armed conflict that marked an entire decade. Cities such as Vukovar, Dubrovnik and Šibenik became symbols of resistance and suffering.",
      },
      {
        hr: 'Vukovar je posebno mjesto u kolektivnoj memoriji. Opsada Vukovara trajala je od kolovoza do studenog 1991. Branitelji grada — vojnici i civili ramena uz rame — odolijevali su znatno nadmoćnijem neprijatelju 87 dana. Grad je na kraju pao 18. studenog 1991. Slika voduške vodotornja, izbucanog ali uspravnog usred razrušenoga grada, postala je jedan od najprepoznatljivijih simbola rata i otpora.',
        en: "Vukovar holds a special place in collective memory. The siege of Vukovar lasted from August to November 1991. The city's defenders — soldiers and civilians side by side — held out against a vastly superior enemy for 87 days. The city finally fell on 18 November 1991. The image of the Vukovar water tower, riddled with bullets yet standing upright amid the ruined city, became one of the most recognisable symbols of the war and of resistance.",
      },
      {
        hr: 'Pitanje sjećanja na Domovinski rat ostaje složeno i politički osjetljivo. Hrvatska društvo suočava se s izazovom koji je zajednički mnogim poslijeratnim društvima: kako kolektivno sjećanje učiniti mjestom pomirenja, a ne trajnog sukoba. Vukovar danas živi sporo gospodarsko oporavak, a demografski se nije vratio na predratnu razinu. Ipak, svake godine na Obljetnici pada Vukovara, 18. studenog, tisuće hodočasnika hodaju ulicama grada u tišini, noseći cvijeće i upaljene lampione. Taj šutljivi mimohod — kolona sjećanja — najmoćniji je odgovor na sve pokušaje brisanja prošlosti.',
        en: 'The question of memory of the Homeland War remains complex and politically sensitive. Croatian society faces a challenge common to many post-war societies: how to make collective memory a place of reconciliation rather than perpetual conflict. Vukovar today lives through a slow economic recovery, and demographically has not returned to pre-war levels. Yet every year on the Anniversary of the Fall of Vukovar, 18 November, thousands of pilgrims walk the city streets in silence, carrying flowers and lit lanterns. This silent march — the column of remembrance — is the most powerful response to all attempts to erase the past.',
      },
    ],
    vocabulary: [
      { hr: 'neovisnost', en: 'independence', ex: 'Hrvatska je proglasila neovisnost 1991.' },
      { hr: 'opsada', en: 'siege', ex: 'Opsada Vukovara trajala je 87 dana.' },
      { hr: 'branitelj', en: 'defender (of homeland)', ex: 'Branitelji su čuvali grad.' },
      { hr: 'vodotoranj', en: 'water tower', ex: 'Vukovarski vodotoranj je simbol otpora.' },
      { hr: 'pomirenje', en: 'reconciliation', ex: 'Pomirenje je dug i težak proces.' },
      { hr: 'hodočasnik', en: 'pilgrim', ex: 'Tisuće hodočasnika hodaju 18. studenog.' },
      { hr: 'lampion', en: 'lantern / paper lantern', ex: 'Nose upaljene lampione u sjećanje.' },
      { hr: 'oporavak', en: 'recovery', ex: 'Grad prolazi sporo gospodarski oporavak.' },
      { hr: 'mimohod', en: 'march / procession', ex: 'Šutljivi mimohod traje cijelo jutro.' },
    ],
    quiz: [
      {
        q: 'Koliko je dana trajala opsada Vukovara?',
        qEn: 'How many days did the siege of Vukovar last?',
        opts: ['200 dana', '87 dana', '120 dana', '50 dana'],
        correct: 1,
      },
      {
        q: 'Što je simbol otpora iz Vukovara?',
        qEn: 'What is the symbol of resistance from Vukovar?',
        opts: ['Gradska vijećnica', 'Tvrđava', 'Stara crkva', 'Vodotoranj'],
        correct: 3,
      },
      {
        q: 'Što se svake godine događa 18. studenog u Vukovaru?',
        qEn: 'What happens every year on 18 November in Vukovar?',
        opts: [
          'Šutljivi mimohod tisuća hodočasnika',
          'Sportski maraton',
          'Vojska parade',
          'Glazbeni festival',
        ],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_b2_3',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🏙️',
    title: 'Zagreb između tradicije i suvremenosti',
    titleEn: 'Zagreb between Tradition and Modernity',
    duration: 5,
    focus: 'Contrast structures • Urban sociology vocabulary • Gerunds and verbal nouns',
    intro:
      "Explore the tensions and harmonies between Zagreb's historic character and its contemporary urban life. Practise contrast structures, complex subordination, and urban vocabulary.",
    paragraphs: [
      {
        hr: 'Zagreb je grad koji živi u produktivnoj napetosti između starog i novog. Gornji grad — s Kaptolom, katedralom i labirintom uskih kamenih ulica — svjedok je tisućljetne prošlosti, dok se samo petnaest minuta hoda dalje, na Savici i Novom Zagrebu, rasprostire sasvim drukčiji urbani pejzaž: betonski blokovi nastali u doba socijalizma, danas sve češće okruženi niklim kavarnama, coworking prostorima i kreativnim industrijama.',
        en: "Zagreb is a city that lives in productive tension between the old and the new. The Upper Town — with Kaptol, the cathedral and a labyrinth of narrow stone streets — is a witness to a millennia-long past, while just fifteen minutes' walk away, in Savica and New Zagreb, an entirely different urban landscape spreads out: concrete blocks built in the socialist era, today increasingly surrounded by new cafés, coworking spaces and creative industries.",
      },
      {
        hr: 'Potres koji je pogodio Zagreb u ožujku 2020. — jačine 5,5 po Richteru — razgolitio je dublje strukturne probleme: tisuće zgrada u gradskoj jezgri bile su oštećene, a u nekim dijelovima Gornjeg i Donjeg grada sanacija još uvijek nije završena. Potres je međutim potaknuo i širu javnu raspravu o urbanom planiranju, zaštiti kulturne baštine i položaju stanara u sve skupljim privatnim najmovima. Mnogi mladi Zagrepčani, suočeni s nemogućnošću kupnje stana u centru, sele se u prigradska naselja ili odlaze u inozemstvo.',
        en: 'The earthquake that struck Zagreb in March 2020 — measuring 5.5 on the Richter scale — laid bare deeper structural problems: thousands of buildings in the city centre were damaged, and in some parts of the Upper and Lower Town reconstruction is still not complete. The earthquake, however, also prompted a broader public debate about urban planning, the protection of cultural heritage and the situation of tenants in increasingly expensive private rentals. Many young Zagrebians, faced with the impossibility of buying a flat in the centre, are moving to suburban settlements or leaving for abroad.',
      },
      {
        hr: 'Unatoč tim izazovima, Zagreb se nameće kao regionalno kulturno središte. Muzej suvremene umjetnosti, Muzej prekinutih veza — koji je stekao međunarodnu slavu — i sve bogatija scena neovisnih kazališta i glazbenih festivala svjedoče o živoj kulturnoj energiji. Advent u Zagrebu proglašen je više puta najboljim božićnim tržištem u Europi, privlačeći posjetitelje iz cijeloga svijeta. Grad koji se gradi između trauma i nade, između nostalgije i inovacije, možda je upravo zbog te napetosti toliko živ.',
        en: 'Despite these challenges, Zagreb asserts itself as a regional cultural centre. The Museum of Contemporary Art, the Museum of Broken Relationships — which has gained international fame — and an increasingly rich scene of independent theatres and music festivals attest to a vibrant cultural energy. Zagreb Advent has been named the best Christmas market in Europe on multiple occasions, attracting visitors from all over the world. A city building itself between trauma and hope, between nostalgia and innovation, is perhaps precisely because of that tension so alive.',
      },
    ],
    vocabulary: [
      { hr: 'napetost', en: 'tension', ex: 'Zagreb živi u napetosti između starog i novog.' },
      { hr: 'pejzaž', en: 'landscape / cityscape', ex: 'Urbani pejzaž Novog Zagreba je drukčiji.' },
      {
        hr: 'sanacija',
        en: 'reconstruction / remediation',
        ex: 'Sanacija zgrada još nije završena.',
      },
      { hr: 'najam', en: 'rent / rental', ex: 'Privatni najam je sve skuplji.' },
      { hr: 'prigradski', en: 'suburban', ex: 'Mladi sele u prigradska naselja.' },
      { hr: 'kazalište', en: 'theatre', ex: 'Volim ići u kazalište.' },
      { hr: 'nostalgia', en: 'nostalgia', ex: 'Grad živi između nostalgije i inovacije.' },
      {
        hr: 'razgolititi',
        en: 'to lay bare / expose',
        ex: 'Potres je razgolitio strukturne probleme.',
      },
      {
        hr: 'nametnuti se',
        en: 'to assert itself / impose itself',
        ex: 'Zagreb se nameće kao kulturno središte.',
      },
    ],
    quiz: [
      {
        q: 'Kada je Zagreb pogodio potres opisan u tekstu?',
        qEn: 'When did the earthquake described in the text hit Zagreb?',
        opts: ['U siječnju 2019.', 'U ožujku 2020.', 'U prosincu 2020.', 'U lipnju 2021.'],
        correct: 1,
      },
      {
        q: 'Čime se Muzej prekinutih veza posebno ističe?',
        qEn: 'What is the Museum of Broken Relationships particularly noted for?',
        opts: [
          'Izložbom o ratu',
          'Interaktivnim eksponatima',
          'Svojom veličinom',
          'Međunarodnom slavom',
        ],
        correct: 3,
      },
      {
        q: 'Što mnogi mladi Zagrepčani rade zbog visokih cijena stanova u centru?',
        qEn: 'What do many young Zagrebians do because of high flat prices in the centre?',
        opts: [
          'Renoviraju stare zgrade',
          'Ostaju s roditeljima',
          'Sele se u prigradska naselja ili odlaze u inozemstvo',
          'Kupuju stanove na kredit',
        ],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_b2_4',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🌍',
    title: 'Hrvatska dijaspora i identitet',
    titleEn: 'The Croatian Diaspora and Identity',
    duration: 5,
    focus:
      'Conditional and subjunctive-like constructions • Identity vocabulary • Complex argumentation',
    intro:
      "An analytical text on Croatian identity, emigration, and the diaspora's relationship with the homeland. Practise advanced vocabulary, argumentation structures, and conditional constructions.",
    paragraphs: [
      {
        hr: 'Procjenjuje se da između tri i četiri milijuna Hrvata i osoba hrvatskog porijekla živi izvan granica Republike Hrvatske — broj koji je gotovo usporediv s ukupnim brojem stanovnika same države. Hrvatska dijaspora koncentrirana je ponajprije u Njemačkoj, Australiji, Kanadi, Sjedinjenim Državama i u susjednim državama, ali i u Južnoj Americi, gdje postoje snažne zajednice u Argentini i Čileu, potomci emigrantskih valova s kraja 19. i početka 20. stoljeća.',
        en: 'It is estimated that between three and four million Croatians and persons of Croatian origin live outside the borders of the Republic of Croatia — a number almost comparable with the total number of inhabitants of the state itself. The Croatian diaspora is concentrated primarily in Germany, Australia, Canada, the United States and neighbouring countries, but also in South America, where there are strong communities in Argentina and Chile, descendants of emigrant waves from the late 19th and early 20th centuries.',
      },
      {
        hr: 'Odnos dijaspore prema domovini složen je i mijenja se iz generacije u generaciju. Za prve generacije emigranata, odlazak je bio traumatičan raskid, a čuvanje jezika, vjere i običaja postajalo je egzistencijalnim pitanjem identiteta. Druhge i treće generacije često govore o tzv. "dvostrukom identitetu" — osjećaju da ne pripadaju sasvim ni ovdje ni tamo. Zanimljivo je da su upravo Hrvati iz dijaspore imali ključnu ulogu u međunarodnom priznavanju hrvatske neovisnosti 1991. i 1992. godine, lobirajeći u parlamentima i vladama zemalja primitka.',
        en: 'The diaspora\'s relationship with the homeland is complex and changes from generation to generation. For first-generation emigrants, departure was a traumatic rupture, and the preservation of language, faith and customs became an existential question of identity. Second and third generations often speak of a so-called "dual identity" — the feeling of not belonging entirely either here or there. Interestingly, it was precisely Croatians from the diaspora who played a key role in the international recognition of Croatian independence in 1991 and 1992, lobbying in the parliaments and governments of their host countries.',
      },
      {
        hr: 'Suvremena emigracija iz Hrvatske — koja se posebno ubrzala ulaskom u Europsku uniju 2013. godine — donosi nova pitanja. Mladi, obrazovani Hrvati odlaze zbog boljih ekonomskih mogućnosti, niže birokratske opterećenosti i veće kvalitete javnih usluga u zapadnoj Europi. Demografska erozija, koja je jedna od najozbiljnijih prijetnji dugoročnoj stabilnosti Hrvatske, teško se može zaustaviti bez sustavnih strukturnih reformi. Hrvatska vlada pokušava privući povratnike posebnim poreznim olakšicama, ali uspjeh tih mjera ostaje skroman. Pitanje dijaspore nije samo sentimentalno — ono je usko vezano uz budućnost cijele nacije.',
        en: "Contemporary emigration from Croatia — which accelerated particularly after EU accession in 2013 — raises new questions. Young, educated Croatians leave for better economic opportunities, lower bureaucratic burden and higher quality of public services in Western Europe. Demographic erosion, which is one of the most serious threats to Croatia's long-term stability, cannot easily be stopped without systematic structural reforms. The Croatian government attempts to attract returnees with special tax incentives, but the success of these measures remains modest. The diaspora question is not merely sentimental — it is closely tied to the future of the entire nation.",
      },
    ],
    vocabulary: [
      { hr: 'dijaspora', en: 'diaspora', ex: 'Hrvatska dijaspora je brojna.' },
      { hr: 'porijeklo', en: 'origin / descent', ex: 'Ona je hrvatskog porijekla.' },
      { hr: 'emigrant', en: 'emigrant', ex: 'Prve generacije emigranata čuvale su jezik.' },
      { hr: 'raskid', en: 'rupture / break', ex: 'Odlazak je bio traumatičan raskid.' },
      { hr: 'lobirati', en: 'to lobby', ex: 'Lobirali su za neovisnost.' },
      {
        hr: 'demografski',
        en: 'demographic (adj.)',
        ex: 'Demografska erozija je ozbiljan problem.',
      },
      {
        hr: 'porezna olakšica',
        en: 'tax incentive / relief',
        ex: 'Vlada nudi porezne olakšice povratnicima.',
      },
      { hr: 'povratnik', en: 'returnee', ex: 'Mnogi povratnici donose nova znanja.' },
      { hr: 'erozija', en: 'erosion', ex: 'Demografska erozija ugrožava budućnost.' },
    ],
    quiz: [
      {
        q: 'Koliko se Hrvata i osoba hrvatskog porijekla procjenjuje da živi izvan Hrvatske?',
        qEn: 'How many Croatians and persons of Croatian origin are estimated to live outside Croatia?',
        opts: [
          'Manje od pola milijuna',
          'Oko milijun',
          'Oko pet milijuna',
          'Između tri i četiri milijuna',
        ],
        correct: 3,
      },
      {
        q: 'Kakvu su ulogu imali Hrvati iz dijaspore 1991. i 1992. godine?',
        qEn: 'What role did Croatians from the diaspora play in 1991 and 1992?',
        opts: [
          'Lobiranje za međunarodno priznavanje neovisnosti',
          'Osnivali su nove političke stranke',
          'Vraćali su se u Hrvatsku masovno',
          'Slali su humanitarnu pomoć',
        ],
        correct: 0,
      },
      {
        q: 'Što hrvatska vlada čini kako bi privukla povratnike?',
        qEn: 'What does the Croatian government do to attract returnees?',
        opts: [
          'Plaća putne troškove',
          'Daje besplatne tečajeve',
          'Gradi nove stanove',
          'Nudi posebne porezne olakšice',
        ],
        correct: 3,
      },
    ],
  },

  // ── C1 Stories ──────────────────────────────────────────────────────────────

  {
    id: 'gs_c1_1',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '📖',
    title: 'Jezik kao ogledalo kulture',
    titleEn: 'Language as a Mirror of Culture',
    duration: 7,
    focus: 'Verbal nouns • Formal discourse • Abstract linguistic concepts',
    intro:
      'An analytical essay on the relationship between language and cultural identity in the Croatian context. Practise verbal nouns, formal discourse markers, and abstract vocabulary.',
    paragraphs: [
      {
        hr: 'Jezik nije samo sredstvo komunikacije — on je i nositelj kulture, sjećanja i kolektivnog identiteta. Za Hrvate, ta dimenzija jezičnoga pitanja ima posebno značenje, uzimajući u obzir burnu povijest standardizacije i višestoljetnih pokušaja nametanja stranih jezičnih normi. Glagoljica, najstarije hrvatsko pismo, simbol je toga kontinuiteta: ona svjedoči o pismenosti koja seže u 9. stoljeće i koja je odolijevala latinizaciji i germanizaciji jednako kao što je preživjela osmanske prodore na periferiji.',
        en: 'Language is not merely a means of communication — it is also a carrier of culture, memory and collective identity. For Croatians, this dimension of the language question has a particular significance, given the turbulent history of standardisation and centuries-long attempts to impose foreign linguistic norms. Glagolitic script, the oldest Croatian writing system, is a symbol of that continuity: it bears witness to literacy reaching back to the 9th century, which resisted Latinisation and Germanisation just as it survived Ottoman incursions on the periphery.',
      },
      {
        hr: 'Standardizacija hrvatskoga književnog jezika u 19. stoljeću nije bila tek filološki projekt — bila je i politički čin. Ilirski preporoditelji, na čelu s Ljudevitom Gajem, težili su ujedinjavanju rasutih hrvatskih dijalekata u jedinstven književni standard koji bi mogao parirati mađarskome i njemačkome na razini javnoga diskursa. Uvođenje štokavske novoštokavske osnovice u standardni jezik podrazumijevalo je odricanje dijela autohtonih čakavskih i kajkavskih oblika — žrtvu koja se i danas propituje u lingvističkim i kulturnim raspravama.',
        en: 'The standardisation of the Croatian literary language in the 19th century was not merely a philological project — it was also a political act. The Illyrian Revival figures, led by Ljudevit Gaj, sought to unify the scattered Croatian dialects into a single literary standard that could rival Hungarian and German at the level of public discourse. The introduction of the Shtokavian Neo-Shtokavian base into the standard language entailed the abandonment of some autochthonous Chakavian and Kajkavian forms — a sacrifice that is still debated in linguistic and cultural discussions today.',
      },
      {
        hr: 'Danas, u dobu digitalne komunikacije, pitanje jezičnoga identiteta dobiva novu dimenziju. Pisana forma — nekad privilegija obrazovanih — sada je svakodnevna stvarnost za milijune korisnika društvenih mreža koji pišu onako kako govore: na čakavskome, kajkavskome, ili mješavinom standarda i žargona. Ta spontana demokratizacija pisanja ne ugrožava standardni jezik — ona ga obogaćuje, uvodeći u javni diskurs jezičnu raznolikost koja je uvijek bila dio hrvatskoga identiteta. Standardni jezik ostaje stup kulturnoga i administrativnoga jedinstva, ali vitalni su mu živci dijalekatski korijeni koji ga hrane autentičnošću.',
        en: 'Today, in the age of digital communication, the question of linguistic identity takes on a new dimension. Written form — once the privilege of the educated — is now an everyday reality for millions of social media users who write as they speak: in Chakavian, Kajkavian, or a mixture of standard language and slang. This spontaneous democratisation of writing does not threaten the standard language — it enriches it, introducing into public discourse the linguistic diversity that has always been part of Croatian identity. The standard language remains a pillar of cultural and administrative unity, but its vital nerves are the dialectal roots that nourish it with authenticity.',
      },
    ],
    vocabulary: [
      { hr: 'nositelj', en: 'carrier / bearer', ex: 'Jezik je nositelj kulture i sjećanja.' },
      {
        hr: 'standardizacija',
        en: 'standardisation',
        ex: 'Standardizacija języka bila je politički čin.',
      },
      {
        hr: 'filološki',
        en: 'philological (adj.)',
        ex: 'Filološki projekt trajao je desetljećima.',
      },
      {
        hr: 'odricanje',
        en: 'abandonment / renunciation',
        ex: 'Odricanje dijalekata bio je veliki korak.',
      },
      {
        hr: 'propitovati',
        en: 'to question / interrogate',
        ex: 'Ta se žrtva još uvijek propituje.',
      },
      {
        hr: 'obogaćivati',
        en: 'to enrich (imperfective)',
        ex: 'Dijalekti obogaćuju standardni jezik.',
      },
      { hr: 'dijalekatski', en: 'dialectal (adj.)', ex: 'Dijalekatski korijeni su važni.' },
      {
        hr: 'autentičnost',
        en: 'authenticity',
        ex: 'Autentičnost je temelj kulturnoga identiteta.',
      },
      { hr: 'javni diskurs', en: 'public discourse', ex: 'Jezik je dio javnoga diskursa.' },
    ],
    quiz: [
      {
        q: 'Što je, po tekstu, Glagoljica?',
        qEn: 'What, according to the text, is Glagolitic script?',
        opts: [
          'Simbol kontinuiteta hrvatske pismenosti',
          'Najstariji europski alfabet uopće',
          'Tursko pismo adaptirano za Slavene',
          'Pismo koje je nastalo u 15. stoljeću',
        ],
        correct: 0,
      },
      {
        q: 'Zašto su ilirski preporoditelji uveli štokavsku osnovicu u standard?',
        qEn: 'Why did the Illyrian Revival figures introduce the Shtokavian base into the standard?',
        opts: [
          'Kako bi ujedinili sve slavenske narode',
          'Kako bi standard mogao parirati mađarskome i njemačkome',
          'Jer je to zahtijevao austrijski car',
          'Jer je bio najbogatiji dijalekt',
        ],
        correct: 1,
      },
      {
        q: 'Kakav je, po tekstu, utjecaj digitalne komunikacije na standardni jezik?',
        qEn: 'What effect, according to the text, does digital communication have on the standard language?',
        opts: [
          'Potiče povratak glagoljici',
          'Obogaćuje ga uvodeći jezičnu raznolikost',
          'Nema vidljivog utjecaja',
          'Ugrožava ga i smanjuje njegovu upotrebu',
        ],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_c1_2',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🍷',
    title: 'Dalmatinska kuhinja: okus i sjećanje',
    titleEn: 'Dalmatian Cuisine: Taste and Memory',
    duration: 6,
    focus: 'Sensory vocabulary • Implicit cultural meaning • Complex noun phrases',
    intro:
      'A cultural essay on Dalmatian cuisine as a layered historical record. Practise complex noun phrases, abstract cultural vocabulary, and C1-level reading comprehension.',
    paragraphs: [
      {
        hr: 'Dalmatinska kuhinja nije tek zbroj recepata — ona je kodirana povijest, zapis klimatske i geopolitičke sudbine jedne obale. Venecijanska vladavina ostavila je trag u upotrebi maslinovog ulja i vina kao temeljnih kulinarskih medija; osmansko susjedstvo uvelo je neke mirodije i načine konzerviranja; rimsko naslijeđe vidljivo je u odabiru riba i školjaka koji se malo promijenio kroz dva tisućljeća. Kuhati po dalmatinski znači, u svakom smislu, kuhati po slojevima povijesti.',
        en: 'Dalmatian cuisine is not merely a collection of recipes — it is a coded history, a record of the climatic and geopolitical fate of a coastline. Venetian rule left its mark in the use of olive oil and wine as foundational culinary media; Ottoman neighbourliness introduced some spices and methods of preservation; the Roman legacy is visible in the choice of fish and shellfish, which has changed little over two millennia. To cook in the Dalmatian way means, in every sense, to cook through layers of history.',
      },
      {
        hr: 'Peko — posuda za pečenje ispod žara — možda je najprecizniji simbol dalmatinskoga kulinarskog pristupa. Spora, pokrivena kuhinja: meso ili riba polaže se s povrćem i uljem, peko se poklopi, a zatim zaspe žarom. Strpljenje je ovdje tehnika, a ne vrlina — bez njega nema ni okusa. Takav se način kuhanja ne može ubrzati bez gubitka: onaj tko pokušava pečenku pod pekom brzopleto pretvoriti u ekspresni obrok, izgubit će precizno ono što peko obećava.',
        en: 'The peka — a bell-shaped lid for roasting under embers — is perhaps the most precise symbol of the Dalmatian culinary approach. Slow, covered cooking: meat or fish is arranged with vegetables and oil, the peka is closed, and then covered with embers. Patience here is technique, not virtue — without it there is no flavour either. This method of cooking cannot be hurried without loss: whoever tries to hastily turn a peka roast into an express meal will lose precisely what the peka promises.',
      },
      {
        hr: 'Primat ribe u dalmatinskoj kuhinji nije tek pitanje dostupnosti — on odražava dublje poimanje odnosa čovjeka i mora. Riba je svježa ili nikakva; marinada i mirodije služe naglašavanju, a ne prikrivanju okusa. Ovaj filozofski stav prema sirovini — koji akademski gastronomi danas nazivaju "kuhinjom minimalne intervencije" — u Dalmaciji nije moda ni trend, nego praksa stara koliko i sam ribolov. Ribari koji su ujutro izvukli mrežu, o podne su priredili roštilj, a navečer pojeli ostatke s malo kruha i vinom: to je recept koji ne treba poboljšavati.',
        en: "Fish's primacy in Dalmatian cuisine is not merely a question of availability — it reflects a deeper understanding of the relationship between people and the sea. Fish is fresh or nothing; marinade and spices serve to accentuate, not conceal, the flavour. This philosophical stance towards the raw ingredient — which academic gastronomes today call the 'cuisine of minimal intervention' — in Dalmatia is not a fashion or trend, but a practice as old as fishing itself. Fishermen who drew up their nets in the morning prepared a grill at noon and ate the leftovers with a little bread and wine in the evening: that is a recipe that needs no improvement.",
      },
    ],
    vocabulary: [
      {
        hr: 'kulinarski',
        en: 'culinary (adj.)',
        ex: 'To je kulinarska tradicija stara tisućljećima.',
      },
      {
        hr: 'peko',
        en: 'traditional bell-shaped roasting lid',
        ex: 'Janjetina ispod peka je specijalitet.',
      },
      { hr: 'strpljenje', en: 'patience', ex: 'Strpljenje je ključ dobrog jela.' },
      {
        hr: 'sirovina',
        en: 'raw ingredient / raw material',
        ex: 'Kvalitetna sirovina je temelj svega.',
      },
      {
        hr: 'mirodije',
        en: 'spices / aromatics',
        ex: 'Dalmatinska kuhinja ne koristi previše mirodija.',
      },
      { hr: 'marinada', en: 'marinade', ex: 'Riba leži u marinadi sat vremena.' },
      {
        hr: 'naglašavati',
        en: 'to accentuate / emphasise (impf.)',
        ex: 'Ulje naglašava okus ribe.',
      },
      {
        hr: 'poimanje',
        en: 'understanding / conception',
        ex: 'Poimanje hrane ovdje je filozofija.',
      },
      {
        hr: 'intervencija',
        en: 'intervention',
        ex: 'Minimalna intervencija znači poštovanje sirovine.',
      },
    ],
    quiz: [
      {
        q: 'Koji je, po tekstu, utjecaj venecijanske vladavine na dalmatinsku kuhinju?',
        qEn: 'What, according to the text, was the influence of Venetian rule on Dalmatian cuisine?',
        opts: [
          'Tradicija peka i sporoga kuhanja',
          'Donošenje egzotičnih ribljih vrsta',
          'Upotreba maslinovog ulja i vina kao temeljnih kulinarskih medija',
          'Uvođenje mesa kao glavnog jela',
        ],
        correct: 2,
      },
      {
        q: 'Što peko simbolizira u dalmatinskom pristupu kuhanju?',
        qEn: 'What does the peka symbolise in the Dalmatian approach to cooking?',
        opts: [
          'Modernu tehniku roštiljanja',
          'Sporo kuhanje koje zahtijeva strpljenje',
          'Brzo i efikasno kuhanje',
          'Talijansku kulinarsku tradiciju',
        ],
        correct: 1,
      },
      {
        q: 'Što znači "kuhinja minimalne intervencije" kako je opisana u tekstu?',
        qEn: 'What does "cuisine of minimal intervention" mean as described in the text?',
        opts: [
          'Filozofija da sirovina treba biti naglašena, a ne prikrivena',
          'Kuhinja bez soli i mirodija',
          'Kuhinja koja koristi malo posuđa i opreme',
          'Japanski stil kuhanja adaptiran za Mediteran',
        ],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_c1_3',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '✍️',
    title: 'Miroslav Krleža i moderna hrvatska proza',
    titleEn: 'Miroslav Krleža and Modern Croatian Prose',
    duration: 7,
    focus: 'Literary Croatian • Critical analysis vocabulary • Complex subordination',
    intro:
      "An analytical introduction to Croatia's most important 20th-century writer. Practise literary register, critical vocabulary, and complex argument structures at C1 level.",
    paragraphs: [
      {
        hr: 'Miroslav Krleža (1893.–1981.) ostaje najmoćnijim glasom modernog hrvatskog romana, eseja i drame. Njegova proza — gruba, polifonična, prepuna aluzija na europsku povijest i filozofiju — nije salonska književnost za lagano čitanje, nego izazov koji traži od čitatelja punu angažiranost. Romani kao što su "Povratak Filipa Latinovicza" i "Zastave" mogu se čitati kao pokušaji razumijevanja raspada Austro-Ugarske Monarhije i rađanja novih, nerijetko krvavijih poredaka — ali i kao duboke studije psihičke i moralne razrovanosti modernoga čovjeka.',
        en: 'Miroslav Krleža (1893–1981) remains the most powerful voice of the modern Croatian novel, essay and drama. His prose — rough, polyphonic, full of allusions to European history and philosophy — is not salon literature for easy reading, but a challenge that demands full engagement from the reader. Novels such as "The Return of Filip Latinovicz" and "Banners" can be read as attempts to understand the collapse of the Austro-Hungarian Monarchy and the birth of new, often bloodier orders — but also as deep studies of the psychological and moral disintegration of modern man.',
      },
      {
        hr: "Krležin stil svjesno krši konvencije ujednačene proze: rečenice se nižu u dugačkim zamršenostima, digresije postaju temeljne, a svaki monolog junaka otkriva slojeve protuslovlja koja se nikad ne razrješuju. Ta fragmentarnost nije manjkavost nego poetički program — Krleža odbija laž zaključenosti i nudi čitatelju ono što opisuje kao 'otvorenu ranu' modernoga iskustva. Pod tim su utjecajem rasli Antun Šoljan, Slobodan Novak i cijela generacija šezdesetih, koji su razvijali vlastite varijante hrvatske postmoderne lirske proze.",
        en: "Krleža's style deliberately violates the conventions of smooth prose: sentences accumulate in long convolutions, digressions become foundational, and each character's monologue reveals layers of contradictions that are never resolved. This fragmentariness is not a shortcoming but a poetic programme — Krleža refuses the lie of closure and offers the reader what he describes as the 'open wound' of modern experience. Under this influence grew Antun Šoljan, Slobodan Novak and an entire generation of the 1960s, who developed their own variants of Croatian postmodern lyrical prose.",
      },
      {
        hr: 'Čitati Krležu danas znači suočiti se i s pitanjima koja nisu zastarjela: klasna napetost, ambivalentnost intelektualca u politički opterećenim vremenima, somatska i psihička cijena modernizacije. Njegova Enciklopedija — monumentalni projekt koji je Krleža vodio desetljećima — svjedoči o razlogu zbog kojega je bio toliko omiljen kod jugoslavenskih vlasti koliko i sumnjičav prema njima: bio je prevelik, presložen i previše protuslovit da bi se smjestio u bilo kakvu ideološku šablonu. Taj paradoks čini ga možda najpotpunijim hrvatskim intelektualcem 20. stoljeća.',
        en: 'To read Krleža today means confronting questions that have not aged: class tension, the ambivalence of the intellectual in politically burdened times, the somatic and psychological cost of modernisation. His Encyclopaedia — a monumental project that Krleža led for decades — bears witness to the reason he was as beloved by Yugoslav authorities as he was suspicious of them: he was too large, too complex and too contradictory to fit into any ideological template. This paradox makes him perhaps the most complete Croatian intellectual of the 20th century.',
      },
    ],
    vocabulary: [
      {
        hr: 'polifon/polifonija',
        en: 'polyphonic / polyphony',
        ex: 'Krležina proza je polifonična.',
      },
      { hr: 'aluzija', en: 'allusion', ex: 'Tekst je prepun aluzija na povijest.' },
      { hr: 'angažiranost', en: 'engagement / commitment', ex: 'Čitanje traži punu angažiranost.' },
      { hr: 'protuslovlje', en: 'contradiction', ex: 'Likovi su puni protuslovlja.' },
      { hr: 'fragmentarnost', en: 'fragmentariness', ex: 'Fragmentarnost je poetički program.' },
      {
        hr: 'ambivalentnost',
        en: 'ambivalence',
        ex: 'Ambivalentnost intelektualca je vječna tema.',
      },
      { hr: 'šablona', en: 'template / mould', ex: 'Ne uklapa se ni u jednu ideološku šablonu.' },
      { hr: 'paradoks', en: 'paradox', ex: 'To je temeljni paradoks njegova lika.' },
      {
        hr: 'poetički',
        en: 'poetic (pertaining to poetics)',
        ex: 'To je poetički, ne estetski izbor.',
      },
    ],
    quiz: [
      {
        q: 'Što karakterizira Krležin stilski pristup prema tekstu?',
        qEn: "What characterises Krleža's stylistic approach according to the text?",
        opts: [
          'Humor i ironija kao dominantna sredstva',
          'Kratke, jasne rečenice i jednostavne priče',
          'Duge, digresivne rečenice s nerazrješenim protuslovljima',
          'Klasičan narativni format 19. stoljeća',
        ],
        correct: 2,
      },
      {
        q: 'Što tekst govori o Krleži i jugoslavenskim vlastima?',
        qEn: 'What does the text say about Krleža and the Yugoslav authorities?',
        opts: [
          'Otvoreno se suprotstavljao vlastima i bio progonjen',
          'Bio je potpuno odan režimu',
          'Živio je u emigraciji i pisao o domovini',
          'Bio je omiljen, ali previše složen za svaku ideološku šablonu',
        ],
        correct: 3,
      },
      {
        q: 'Koji pisac je prema tekstu nastao pod Krležinim utjecajem?',
        qEn: "Which writer, according to the text, developed under Krleža's influence?",
        opts: ['Marko Marulić', 'August Šenoa', 'Slobodan Novak', 'Ivan Gundulić'],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_c1_4',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🌊',
    title: 'Ekološki izazovi Jadrana',
    titleEn: 'Ecological Challenges of the Adriatic',
    duration: 7,
    focus: 'Academic/formal register • Environmental vocabulary • Complex argument structures',
    intro:
      'A formal analytical text on the environmental pressures facing the Adriatic Sea. Practise academic register, scientific vocabulary, and C1-level argumentation in Croatian.',
    paragraphs: [
      {
        hr: 'Jadransko more, koje pokriva oko 138.000 četvornih kilometara i dostiže prosječnu dubinu od 173 metra, pripada ekološki najosjetljivijim morskim sustavima Mediterana. Kao poluotvoreno more s relativno ograničenom izmjenom vode s otvorenim Sredozemljem, Jadran je posebno podložan bioakumulaciji zagađivala iz industrijskih i poljoprivrednih izvora duž dalmatinske i talijanske obale. Povišene temperature mora, smanjena slanost u sjevernim plitkim vodama zbog porasta slatkovodnog otjecanja, te promjene u fitoplanktonskim zajednicama — sve su to pokazatelji koji upućuju na sustavne pomake u ekosustavu.',
        en: 'The Adriatic Sea, covering approximately 138,000 square kilometres and reaching an average depth of 173 metres, belongs to the most ecologically sensitive marine systems in the Mediterranean. As a semi-enclosed sea with relatively limited exchange of water with the open Mediterranean, the Adriatic is particularly susceptible to bioaccumulation of pollutants from industrial and agricultural sources along the Dalmatian and Italian coasts. Elevated sea temperatures, reduced salinity in the northern shallow waters due to increased freshwater runoff, and changes in phytoplankton communities — these are all indicators pointing to systemic shifts in the ecosystem.',
      },
      {
        hr: 'Ribarska industrija, nekada temelj obalne ekonomije, prolazi kroz sustavno iscrpljivanje resursa: stokovi plave ribe — sardina i skuša — smanjili su se za procijenjenih 30 do 40% u posljednjih dvadeset godina. Kvote propisane u okviru Zajedničke ribarske politike Europske unije dijelomično su suzbile prelov, ali nadzor nad provedbom ostaje nedostatan u malim lukama duž Dalmacije. Usporedno s tim, bilježi se širenje invazivnih vrsta — posebno blagovice Lagocephalus sceleratus — čija je prisutnost promijenila ponašanje i kretanje lokalnih ronioca i ribolovaca.',
        en: "The fishing industry, once the foundation of the coastal economy, is undergoing systematic resource depletion: stocks of blue fish — sardines and mackerel — have declined by an estimated 30 to 40% over the past twenty years. Quotas prescribed under the European Union's Common Fisheries Policy have partially suppressed overfishing, but enforcement oversight remains insufficient in the small harbours along Dalmatia. Concurrently, the spread of invasive species is being recorded — particularly the silver-cheeked toadfish Lagocephalus sceleratus — whose presence has changed the behaviour and movement of local divers and fishermen.",
      },
      {
        hr: 'Odgovori na ekološku krizu Jadrana ne mogu biti isključivo tehničko-regulatorni. Kulturna promjena u odnosu prema moru — od resursne prema suodgovornoj logici — preduvjet je za svaku dugoročnu strategiju. Inicijative kao što su morska zaštićena područja pokazuju pozitivne rezultate tamo gdje postoji lokalna podrška i edukacija, ali izostaju tamo gdje su standardi postavljeni izvana, bez uključivanja ribarskih zajednica u proces donošenja odluka. Budućnost Jadrana ovisi o sposobnosti institucija i lokalnih zajednica da pregovaraju oko interesa koji se čine nespojivima — ali koji su, u dugoročnoj perspektivi, zapravo zajednički.',
        en: 'Responses to the ecological crisis of the Adriatic cannot be exclusively technical-regulatory in nature. A cultural shift in the relationship towards the sea — from a resource logic to a co-responsible logic — is a precondition for any long-term strategy. Initiatives such as marine protected areas show positive results where local support and education exist, but are absent where standards are set from outside, without the inclusion of fishing communities in the decision-making process. The future of the Adriatic depends on the ability of institutions and local communities to negotiate around interests that appear incompatible — but which are, in the long-term perspective, actually shared.',
      },
    ],
    vocabulary: [
      {
        hr: 'bioakumulacija',
        en: 'bioaccumulation',
        ex: 'Bioakumulacija zagađivala je ozbiljan problem.',
      },
      {
        hr: 'fitoplankton',
        en: 'phytoplankton',
        ex: 'Promjene u fitoplanktonskim zajednicama su alarmantan znak.',
      },
      {
        hr: 'iscrpljivanje',
        en: 'depletion (verbal noun)',
        ex: 'Iscrpljivanje resursa mora se zaustaviti.',
      },
      { hr: 'prelov', en: 'overfishing', ex: 'Kvote trebaju spriječiti prelov.' },
      { hr: 'nadzor', en: 'oversight / supervision', ex: 'Nadzor nad provedbom je nedostatan.' },
      { hr: 'invazivna vrsta', en: 'invasive species', ex: 'Blagovica je opasna invazivna vrsta.' },
      {
        hr: 'suodgovornost',
        en: 'co-responsibility',
        ex: 'Suodgovornost je ključ ekološke politike.',
      },
      { hr: 'preduvjet', en: 'precondition', ex: 'Edukacija je preduvjet promjene.' },
      {
        hr: 'donošenje odluka',
        en: 'decision-making',
        ex: 'Ribari moraju sudjelovati u donošenju odluka.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je Jadran posebno osjetljiv na zagađenje?',
        qEn: 'Why is the Adriatic particularly susceptible to pollution?',
        opts: [
          'Jer se ribolov odvija isključivo u sjevernom dijelu',
          'Jer ne prima slatku vodu iz rijeka',
          'Jer je poluotvoreno more s ograničenom izmjenom vode',
          'Jer je najpliće more na Mediteranu',
        ],
        correct: 2,
      },
      {
        q: 'Što tekst kaže o morskim zaštićenim područjima?',
        qEn: 'What does the text say about marine protected areas?',
        opts: [
          'Uvijek pokazuju pozitivne rezultate',
          'Nikad ne funkcioniraju bez EU potpore',
          'Rade bolje tamo gdje postoji lokalna podrška i edukacija',
          'Zabranjeni su prema međunarodnom pravu',
        ],
        correct: 2,
      },
      {
        q: 'Što, po tekstu, nije dovoljan odgovor na ekološku krizu?',
        qEn: 'What, according to the text, is not a sufficient response to the ecological crisis?',
        opts: [
          'Suodgovorna logika upravljanja',
          'Isključivo tehnički i regulatorni pristup',
          'Kulturna promjena u odnosu prema moru',
          'Uključivanje ribarskih zajednica u odlučivanje',
        ],
        correct: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // B2 — Complex grammar, passive, conditional, formal register
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_b2_5',
    level: 'B2',
    levelColor: '#1d4ed8',
    levelBg: '#dbeafe',
    icon: '🏛️',
    title: 'Reforma Obrazovnog Sustava',
    titleEn: 'Reform of the Education System',
    duration: 10,
    focus: 'Passive voice • Conditional mood • Formal written register • Nominalisations',
    intro:
      'A newspaper editorial examines a proposed Croatian education reform. Practise understanding formal argumentation and the passive constructions common in written Croatian.',
    paragraphs: [
      {
        hr: 'Obrazovni sustav u Hrvatskoj suočava se s dubokim strukturnim problemima koji su se nakupljali desetljećima. Nedavno je Ministarstvo obrazovanja predstavilo prijedlog sveobuhvatne reforme koji bi, prema najavama, trebao biti proveden do 2027. godine. Kritičari, međutim, tvrde da je reforma zamišljena bez dovoljnog savjetovanja s nastavnicima i roditeljima.',
        en: 'The education system in Croatia is facing deep structural problems that have been accumulating for decades. Recently, the Ministry of Education presented a proposal for a comprehensive reform which, according to announcements, should be implemented by 2027. Critics, however, claim that the reform was conceived without sufficient consultation with teachers and parents.',
      },
      {
        hr: 'Prijedlog uključuje smanjenje broja obveznih predmeta u osnovnoj školi, uvođenje projektne nastave i veću autonomiju ravnatelja. Nastavnici su podijeljeni: jedni tvrde da bi reforme bile korisne kad bi bile praćene odgovarajućom podrškom i ulaganjima u infrastrukturu; drugi strahuju da bi smanjenje sati matematike i znanosti moglo oslabiti kompetencije učenika.',
        en: 'The proposal includes reducing the number of compulsory subjects in primary school, introducing project-based learning and greater autonomy for headteachers. Teachers are divided: some argue that the reforms would be useful if accompanied by appropriate support and investment in infrastructure; others fear that reducing mathematics and science hours could weaken pupil competencies.',
      },
      {
        hr: 'Reforma je bila podvrgnuta javnoj raspravi u kojoj je prikupljeno više od deset tisuća komentara. Analiza je pokazala da roditelji najčešće izražavaju zabrinutost zbog preopterećenosti djece, dok nastavnici uglavnom traže bolje plaće i manje administrativnih obveza. Mnogi stručnjaci ističu da bez sustavnog ulaganja u obrazovanje promjena kurikuluma sama po sebi neće donijeti željene rezultate.',
        en: 'The reform was subjected to a public consultation in which more than ten thousand comments were collected. The analysis showed that parents most frequently express concern about the overloading of children, while teachers mainly demand better pay and fewer administrative obligations. Many experts point out that without systematic investment in education, a curriculum change alone will not deliver the desired results.',
      },
      {
        hr: 'Bez obzira na ishod parlamentarnog glasanja koje se očekuje do kraja godine, jasno je da obrazovni sustav ne može ostati nepromijenjen. Pitanje je samo hoće li reforme biti provedene postupno, uz suglasnost svih dionika, ili će biti nametnute odozgo bez potrebnog konsenzusa.',
        en: "Regardless of the outcome of the parliamentary vote expected by year's end, it is clear that the education system cannot remain unchanged. The only question is whether the reforms will be implemented gradually, with the agreement of all stakeholders, or whether they will be imposed from above without the necessary consensus.",
      },
    ],
    vocabulary: [
      {
        hr: 'strukturni problemi',
        en: 'structural problems',
        ex: 'Sustav ima strukturne probleme.',
      },
      { hr: 'sveobuhvatan', en: 'comprehensive', ex: 'Sveobuhvatna reforma je potrebna.' },
      { hr: 'savjetovanje', en: 'consultation', ex: 'Savjetovanje s dionicima je važno.' },
      { hr: 'autonomija', en: 'autonomy', ex: 'Ravnatelji traže veću autonomiju.' },
      { hr: 'podvrgnut', en: 'subjected to', ex: 'Prijedlog je bio podvrgnut raspravi.' },
      {
        hr: 'preopterećenost',
        en: 'overload / being overburdened',
        ex: 'Djeca pate od preopterećenosti.',
      },
      { hr: 'dionici', en: 'stakeholders', ex: 'Svi dionici trebaju biti uključeni.' },
      { hr: 'nametnut', en: 'imposed', ex: 'Odluka je bila nametnuta odozgo.' },
      { hr: 'konsenzus', en: 'consensus', ex: 'Konsenzus je teško postići.' },
      { hr: 'kurikulum', en: 'curriculum', ex: 'Novi kurikulum uvodi projektnu nastavu.' },
    ],
    quiz: [
      {
        q: 'Koji je jedan od ciljeva predložene reforme?',
        qEn: 'What is one of the goals of the proposed reform?',
        opts: [
          'Ukidanje autonomije ravnatelja',
          'Centralizacija upravljanja školama',
          'Povećanje broja obveznih predmeta',
          'Uvođenje projektne nastave',
        ],
        correct: 3,
      },
      {
        q: 'Što roditelji najčešće ističu u javnoj raspravi?',
        qEn: 'What do parents most frequently raise in the public consultation?',
        opts: [
          'Zabrinutost zbog preopterećenosti djece',
          'Potrebu za boljim plaćama nastavnika',
          'Podršku smanjenju sati matematike',
          'Zahtjev za smanjenom autonomijom ravnatelja',
        ],
        correct: 0,
      },
      {
        q: 'Što stručnjaci ističu kao nužan uvjet za uspjeh reforme?',
        qEn: 'What do experts highlight as a necessary condition for the success of the reform?',
        opts: [
          'Sustavno ulaganje u obrazovanje',
          'Brzo provođenje bez javne rasprave',
          'Ukidanje javnog obrazovanja',
          'Smanjenje broja nastavnika',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_b2_6',
    level: 'B2',
    levelColor: '#1d4ed8',
    levelBg: '#dbeafe',
    icon: '🧑‍⚖️',
    title: 'Potrošačka Prava',
    titleEn: 'Consumer Rights',
    duration: 9,
    focus: 'Conditional sentences • Passive constructions • Legal vocabulary • Formal letters',
    intro:
      'Ivan bought a faulty laptop and must navigate Croatian consumer rights law. This text introduces legal Croatian and the conditional constructions needed when making formal complaints.',
    paragraphs: [
      {
        hr: 'Ivan je kupio prijenosno računalo u jednoj od većih trgovina elektroničke robe. Dva tjedna nakon kupnje uređaj se počeo pregrijavati i iznenada isključivati. Kad bi se to ponovilo više puta, odlučio je potraži zaštitu svojih potrošačkih prava.',
        en: 'Ivan bought a laptop in one of the larger electronics stores. Two weeks after the purchase the device started overheating and switching off unexpectedly. When this repeated itself several times, he decided to seek protection of his consumer rights.',
      },
      {
        hr: 'Prema Zakonu o zaštiti potrošača, svaki kupac ima pravo na reklamaciju u roku od dvije godine od kupnje. Prodavač je dužan primiti reklamaciju i odgovoriti na nju u roku od petnaest dana. Ako bi prodavač odbio reklamaciju bez valjanog razloga, potrošač se može obratiti Državnom inspektoratu ili tražiti posredovanje putem europske platforme za rješavanje sporova.',
        en: 'According to the Consumer Protection Act, every buyer has the right to make a complaint within two years of purchase. The seller is obliged to accept the complaint and respond within fifteen days. If the seller were to refuse the complaint without valid reason, the consumer may contact the State Inspectorate or seek mediation through the European online dispute resolution platform.',
      },
      {
        hr: 'Ivan je napisao formalnu reklamaciju u kojoj je opisao kvar, priložio račun i fotografije zaslona s porukama o grešci. U pismu je naveo da zahtijeva popravak ili zamjenu uređaja, a u slučaju da nijedna opcija nije izvediva — povrat novca. Prodavač je odgovorio da će uređaj biti pregledan u ovlaštenom servisu te da će Ivan biti obaviješten o ishodu u roku od sedam radnih dana.',
        en: 'Ivan wrote a formal complaint in which he described the fault, attached the receipt and photographs of the screen with error messages. In the letter he stated that he was requesting repair or replacement of the device, and in the event that neither option was feasible — a refund. The seller responded that the device would be examined in an authorised service centre and that Ivan would be notified of the outcome within seven working days.',
      },
      {
        hr: 'Slučaj je na kraju riješen u Ivanovu korist — uređaj je zamijenjen novim modelom. Iskustvo ga je potaknulo da istraži svoja potrošačka prava podrobnije. Kako je sažeo: "Da sam znao svoja prava od početka, bio bih sigurniji u cijelom procesu."',
        en: 'The case was ultimately resolved in Ivan\'s favour — the device was replaced with a new model. The experience motivated him to explore his consumer rights more thoroughly. As he summarised: "If I had known my rights from the start, I would have been more confident throughout the whole process."',
      },
    ],
    vocabulary: [
      {
        hr: 'reklamacija',
        en: 'complaint (about defective goods)',
        ex: 'Predao je reklamaciju u trgovini.',
      },
      { hr: 'kvar', en: 'fault / breakdown', ex: 'Uređaj ima ozbiljan kvar.' },
      { hr: 'priložiti', en: 'to attach / enclose', ex: 'Priložio je račun uz reklamaciju.' },
      {
        hr: 'ovlašteni servis',
        en: 'authorised service centre',
        ex: 'Uređaj je poslan u ovlašteni servis.',
      },
      { hr: 'povrat novca', en: 'refund', ex: 'Tražio je povrat novca.' },
      {
        hr: 'Državni inspektorat',
        en: 'State Inspectorate',
        ex: 'Prijava je podnesena Državnom inspektoratu.',
      },
      { hr: 'posredovanje', en: 'mediation', ex: 'Posredovanje je brže od suda.' },
      {
        hr: 'valjani razlog',
        en: 'valid reason',
        ex: 'Odbijanje bez valjanog razloga je nezakonito.',
      },
      { hr: 'rok', en: 'deadline / time limit', ex: 'Rok za reklamaciju je dvije godine.' },
      { hr: 'izvediv', en: 'feasible', ex: 'Je li popravak izvediv?' },
    ],
    quiz: [
      {
        q: 'Koji je zakonski rok za reklamaciju u Hrvatskoj?',
        qEn: 'What is the legal deadline for a complaint in Croatia?',
        opts: ['Trideset dana', 'Šest mjeseci', 'Pet godina', 'Dvije godine'],
        correct: 3,
      },
      {
        q: 'Što je Ivan zatražio u formalnoj reklamaciji?',
        qEn: 'What did Ivan request in his formal complaint?',
        opts: [
          'Popravak, zamjenu ili povrat novca',
          'Isključivo povrat novca',
          'Besplatno produljenje jamstva',
          'Novi model uz nadoplatu',
        ],
        correct: 0,
      },
      {
        q: 'Čemu je Ivanovo iskustvo potaknulo druge?',
        qEn: "What did Ivan's experience motivate?",
        opts: [
          'Da uvijek plaćaju gotovinom',
          'Da istraže svoja potrošačka prava',
          'Da kupuju isključivo online',
          'Da izbjegavaju kupnju elektronike',
        ],
        correct: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // C1 — Literary & academic Croatian, complex syntax
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_c1_5',
    level: 'C1',
    levelColor: '#7c3aed',
    levelBg: '#f5f3ff',
    icon: '⚖️',
    title: 'Demokratski Deficit',
    titleEn: 'Democratic Deficit',
    duration: 13,
    focus: 'Complex argument structure • Nominalisation • Academic register • Concessive clauses',
    intro:
      'A political science essay examines the concept of democratic deficit in the European Union. Practise reading dense academic Croatian with sophisticated argument structures.',
    paragraphs: [
      {
        hr: 'Pojam demokratskog deficita u Europskoj uniji odnosi se na strukturnu napetost između nadnacionalne naravi njezina upravljanja i demokratskih mehanizama koji ostaju, u velikoj mjeri, ukorijenjenima na razini nacionalnih država. Dok je Europski parlament ojačavao svoju ulogu Lisabonskim ugovorom, izvršna ovlast i dalje je disproporcionalno koncentrirana u Vijeću i Europskoj komisiji — tijelima čija je demokratska odgovornost neizravna ili posredovana.',
        en: 'The concept of democratic deficit in the European Union refers to the structural tension between the supranational nature of its governance and the democratic mechanisms that remain, to a large degree, rooted at the level of nation states. While the European Parliament strengthened its role through the Lisbon Treaty, executive power continues to be disproportionately concentrated in the Council and the European Commission — bodies whose democratic accountability is indirect or mediated.',
      },
      {
        hr: 'Teoričari poput Andrewa Moravcsika tvrde da se demokratski deficit preuveličava — da je EU zapravo usporediva s regulatornim agencijama unutar nacionalnih sustava i da njezina legitimnost proizlazi iz učinkovitosti i vladavine prava, a ne iz neposrednog mandata birača. Nasuprot tome, Jürgen Habermas argumentira da legitimnost kompleksnih pluralnih demokracija zahtijeva razvoj transeuropske javne sfere u kojoj bi se formirala istinska politička volja nadnacionalnog opsega.',
        en: 'Theorists such as Andrew Moravcsik argue that the democratic deficit is overstated — that the EU is actually comparable to regulatory agencies within national systems and that its legitimacy derives from effectiveness and the rule of law rather than from a direct electoral mandate. In contrast, Jürgen Habermas argues that the legitimacy of complex plural democracies requires the development of a trans-European public sphere in which genuine political will of a supranational scope would be formed.',
      },
      {
        hr: 'Hrvatska je u prvim godinama članstva u EU prolazila kroz intenzivan proces prilagodbe u kojemu su norme i procedure propisane iz Bruxellesa nerijetko dolazile u koliziju s ustaljenim domaćim administrativnim praksama. Ovaj je proces, paradoksalno, ojačao svjesnost o demokratskim deficitima i unutar samog nacionalnog sustava: transparentnost postupaka, neovisnost pravosuđa i uključenost civilnog društva postali su predmeti javnih rasprava koji ranije nisu imali institucionalnu rezonancu.',
        en: 'Croatia in its first years of EU membership went through an intensive process of adaptation in which the norms and procedures prescribed from Brussels often came into collision with established domestic administrative practices. This process, paradoxically, strengthened awareness of democratic deficits within the national system itself: transparency of procedures, judicial independence and the involvement of civil society became subjects of public debate that previously lacked institutional resonance.',
      },
      {
        hr: 'Rasprave o demokratskom deficitu nisu samo akademske — one impliciraju praktična pitanja o tome tko donosi odluke, u čije ime i uz kakvu odgovornost. Ostaje otvorenim pitanjem može li EU razviti oblike participativne demokracije koji bi nadišli formalne glasačke mehanizme i ponudili građanima osjećaj stvarnog sudjelovanja u oblikovanju zajedničke budućnosti.',
        en: 'Debates about democratic deficit are not merely academic — they imply practical questions about who makes decisions, in whose name and with what accountability. It remains an open question whether the EU can develop forms of participatory democracy that would transcend formal voting mechanisms and offer citizens a sense of genuine participation in shaping a common future.',
      },
    ],
    vocabulary: [
      { hr: 'nadnacionalan', en: 'supranational', ex: 'EU je nadnacionalna organizacija.' },
      {
        hr: 'disproporcionalno',
        en: 'disproportionately',
        ex: 'Moć je disproporcionalno raspodijeljena.',
      },
      { hr: 'posredovan', en: 'mediated / indirect', ex: 'Legitimnost je posredovana izborima.' },
      { hr: 'vladavina prava', en: 'rule of law', ex: 'Vladavina prava je temelj demokracije.' },
      { hr: 'javna sfera', en: 'public sphere', ex: 'Debate se vode u javnoj sferi.' },
      { hr: 'kolizija', en: 'collision / conflict', ex: 'Norme su došle u koliziju s praksama.' },
      { hr: 'transparentnost', en: 'transparency', ex: 'Transparentnost postupaka je ključna.' },
      { hr: 'rezonanca', en: 'resonance', ex: 'Tema nije imala institucionalnu rezonancu.' },
      {
        hr: 'participativna demokracija',
        en: 'participatory democracy',
        ex: 'Traže oblike participativne demokracije.',
      },
      { hr: 'implicirati', en: 'to imply / entail', ex: 'Ovo implicira ozbiljne posljedice.' },
    ],
    quiz: [
      {
        q: 'Što Moravcsik tvrdi o demokratskom deficitu EU?',
        qEn: "What does Moravcsik claim about the EU's democratic deficit?",
        opts: [
          'Da Europski parlament treba biti ukinut',
          'Da je preuveličan i da EU podsjeća na regulatorne agencije',
          'Da EU nema nikakve demokratske mehanizme',
          'Da je to stvaran i ozbiljan problem',
        ],
        correct: 1,
      },
      {
        q: 'Što je, prema tekstu, paradoksalno potaknulo demokratska pitanja u Hrvatskoj?',
        qEn: 'What, according to the text, paradoxically stimulated democratic questions in Croatia?',
        opts: [
          'Prilagodba normama EU-a',
          'Jačanje nacionalnog parlamenta',
          'Istraživanja akademskog sektora',
          'Negativno iskustvo s EU fondovima',
        ],
        correct: 0,
      },
      {
        q: 'Koje otvoreno pitanje tekst ističe na kraju?',
        qEn: 'Which open question does the text highlight at the end?',
        opts: [
          'Može li EU razviti participativnu demokraciju izvan formalnih glasačkih mehanizama?',
          'Može li EU preživjeti bez Lisabonskog ugovora?',
          'Treba li Hrvatska napustiti EU?',
          'Je li Europska komisija transparentnija od Vijeća?',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_c1_6',
    level: 'C1',
    levelColor: '#7c3aed',
    levelBg: '#f5f3ff',
    icon: '🎭',
    title: 'Uloga Kulture u Izgradnji Identiteta',
    titleEn: 'The Role of Culture in Identity Construction',
    duration: 12,
    focus: 'Abstract argumentation • Relative clauses • Gerunds & verbal nouns • Cultural register',
    intro:
      'A cultural studies essay explores how culture constructs and constrains individual identity. This text uses the full range of C1 grammatical structures and cultivated literary Croatian.',
    paragraphs: [
      {
        hr: 'Kultura nije puka pozadina na kojoj se odvija individualni život — ona je aktivna sila koja oblikuje percepciju, usmjerava vrijednosti i određuje obrasce razumijevanja sebe i drugoga. Svaka zajednica nosi nasljedstvo simboličkih sustava — jezika, rituala, narativa — koji, prenošeni kroz generacije, konstituiraju ono što Anthony Giddens naziva "ontološkom sigurnošću": temeljnim osjećajem stalnosti i smislenosti koji nam omogućuje snalaženje u složenosti svakodnevnog iskustva.',
        en: "Culture is not merely a backdrop against which individual life unfolds — it is an active force that shapes perception, directs values and determines patterns of understanding oneself and others. Every community carries the inheritance of symbolic systems — language, rituals, narratives — which, transmitted across generations, constitute what Anthony Giddens calls 'ontological security': the fundamental sense of continuity and meaningfulness that enables us to navigate the complexity of everyday experience.",
      },
      {
        hr: 'Međutim, kultura nije monolitna ni nepromjenjiva. Identiteti koji se formiraju unutar kulturnih okvira nisu jednoznačni: oni su uvijek ispresjecani klasom, rodom, generacijskim iskustvima i migracijskim putanjama. Dijasporski identiteti, primjerice, svjedoče o tome kako kulturna memorija može biti istovremeno čvrst oslonac i teška obveza — ovisno o kontekstu u kojemu se priziva.',
        en: 'However, culture is neither monolithic nor unchanging. Identities formed within cultural frameworks are never unambiguous: they are always intersected by class, gender, generational experiences and migratory trajectories. Diasporic identities, for example, testify to how cultural memory can simultaneously be a firm anchor and a heavy obligation — depending on the context in which it is invoked.',
      },
      {
        hr: 'U hrvatskom kontekstu, rasprave o kulturnom identitetu nerijetko se odvijaju u sjeni traumatske povijesti 20. stoljeća i relativno kratke tradicije samostalne državnosti. Pitanje što "biti Hrvat" znači nije ni kulturno ni politički neutralno: ono je prepuno napetosti između regionalnih raznolikosti (slavonske, dalmatinske, zagorske, primorske tradicije), između urbano-ruralnih podjela i između naraštaja koji su živjeli bitno različite socijalizacijske prakse.',
        en: 'In the Croatian context, debates about cultural identity often unfold in the shadow of the traumatic history of the 20th century and a relatively short tradition of independent statehood. The question of what it means "to be Croatian" is neither culturally nor politically neutral: it is charged with tensions between regional diversities (Slavonian, Dalmatian, Zagorje, Primorje traditions), between urban-rural divisions and between generations that have lived through substantially different socialisation practices.',
      },
      {
        hr: 'Upravo ta višeslojnost čini kulturu i izazovnom i dragocjenom kategorijom za razumijevanje identiteta. Umjesto da kulturu promatramo kao statičan inventar navika i vrijednosti, produktivnije ju je konceptualizirati kao dinamičan prostor pregovaranja — prostor u kojemu se tradicija i inovacija neprestano dogovaraju, sukobljavaju i rekonstituiraju. U tom smislu, kulturna kompetencija nije poznavanje fiksiranih kulturnih sadržaja nego sposobnost navigiranja tim stalno promjenjivim prostorom.',
        en: 'It is precisely this multilayered quality that makes culture both a challenging and a precious category for understanding identity. Rather than viewing culture as a static inventory of habits and values, it is more productive to conceptualise it as a dynamic space of negotiation — a space in which tradition and innovation are constantly negotiating, colliding and reconstituting themselves. In this sense, cultural competence is not the knowledge of fixed cultural contents but the ability to navigate this continuously changing space.',
      },
    ],
    vocabulary: [
      {
        hr: 'konstituirati',
        en: 'to constitute / form',
        ex: 'Rituali konstituiraju zajednički identitet.',
      },
      {
        hr: 'ontološka sigurnost',
        en: 'ontological security',
        ex: 'Kultura nudi ontološku sigurnost.',
      },
      { hr: 'monolitan', en: 'monolithic', ex: 'Kultura nije monolitna.' },
      {
        hr: 'ispresjecan',
        en: 'intersected / cross-cut',
        ex: 'Identitet je ispresjecan rodom i klasom.',
      },
      { hr: 'dijasporski', en: 'diasporic', ex: 'Dijasporski identitet je složen.' },
      {
        hr: 'prizivati',
        en: 'to invoke / summon',
        ex: 'Pamćenje se priziva u posebnim trenucima.',
      },
      { hr: 'pregovaranje', en: 'negotiation', ex: 'Identitet nastaje kroz pregovaranje.' },
      {
        hr: 'rekonstituirati se',
        en: 'to reconstitute itself',
        ex: 'Tradicija se stalno rekonstituira.',
      },
      {
        hr: 'navigiranje',
        en: 'navigating',
        ex: 'Kulturna kompetencija je navigiranje složenošću.',
      },
      {
        hr: 'višeslojnost',
        en: 'multilayeredness / complexity',
        ex: 'Višeslojnost kulture je njena snaga.',
      },
    ],
    quiz: [
      {
        q: 'Što Giddens naziva "ontološkom sigurnošću"?',
        qEn: 'What does Giddens call "ontological security"?',
        opts: [
          'Ekonomsku stabilnost pojedinca',
          'Temeljni osjećaj stalnosti i smislenosti koji omogućuje snalaženje u iskustvu',
          'Politički konsenzus unutar zajednice',
          'Poznavanje kulturnih sadržaja i tradicija',
        ],
        correct: 1,
      },
      {
        q: 'Kako tekst opisuje dijasporske identitete?',
        qEn: 'How does the text describe diasporic identities?',
        opts: [
          'Kao istovremeni čvrst oslonac i teška obveza',
          'Kao beznačajne za razumijevanje kulture',
          'Kao prevladane kategorije u globalnom dobu',
          'Kao stabilan i jednoznačan izvor ponosa',
        ],
        correct: 0,
      },
      {
        q: 'Što, prema tekstu, znači kulturna kompetencija?',
        qEn: 'According to the text, what does cultural competence mean?',
        opts: [
          'Poznavanje fiksiranih kulturnih sadržaja',
          'Vladanje svim dijalektima jednog jezika',
          'Prihvaćanje dominantnih kulturnih normi',
          'Sposobnost navigiranja stalno promjenjivim kulturnim prostorom',
        ],
        correct: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // Seed expansion — additional long-form listening at the fluency frontier
  // (B2/C1), the tier where extended connected-speech input matters most.
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_b2_7',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '💻',
    title: 'Digitalni nomadi na Jadranu',
    titleEn: 'Digital Nomads on the Adriatic',
    duration: 5,
    focus: 'Conditional • Passive constructions • Work & economy vocabulary',
    intro:
      'A feature on the rise of remote workers settling along the Croatian coast. Practise conditional sentences, passive voice, and professional vocabulary.',
    paragraphs: [
      {
        hr: 'Posljednjih nekoliko godina hrvatska obala privlači sve veći broj takozvanih digitalnih nomada — ljudi koji rade na daljinu i pritom slobodno biraju gdje će živjeti. Kad bi se pitalo prosječnog stanovnika Splita ili Zadra, vjerojatno bi rekao da su gradske kavane danas pune stranaca s prijenosnim računalima koji ujutro održavaju sastanke, a poslijepodne plivaju u moru.',
        en: 'Over the past few years the Croatian coast has been attracting an ever-growing number of so-called digital nomads — people who work remotely and freely choose where to live. If you asked an average resident of Split or Zadar, they would probably say that the town cafés are nowadays full of foreigners with laptops who hold meetings in the morning and swim in the sea in the afternoon.',
      },
      {
        hr: 'Hrvatska je 2021. godine uvela poseban boravišni status za digitalne nomade, čime je postala jedna od prvih europskih zemalja koja je takav model formalno uredila. Viza se izdaje na razdoblje do godinu dana, a uvjet je da podnositelj dokaže stalan prihod ostvaren izvan Hrvatske. Mnogi smatraju da bi se, kada bi se administrativni postupci dodatno pojednostavili, broj prijava udvostručio.',
        en: 'In 2021 Croatia introduced a special residence status for digital nomads, becoming one of the first European countries to formally regulate such a model. The visa is issued for a period of up to one year, and the condition is that the applicant prove a steady income earned outside Croatia. Many believe that, if the administrative procedures were further simplified, the number of applications would double.',
      },
      {
        hr: 'Ekonomski učinci nisu zanemarivi. Nomadi troše na smještaj, ugostiteljstvo i lokalne usluge tijekom cijele godine, a ne samo u vrhuncu turističke sezone. Time se ublažava ovisnost priobalja o tromjesečnoj ljetnoj gužvi. S druge strane, kritičari upozoravaju da bi nekontroliran priljev mogao dodatno podići cijene najma i istisnuti domaće stanovništvo iz središta gradova.',
        en: "The economic effects are not negligible. Nomads spend on accommodation, hospitality and local services throughout the whole year, not only at the peak of the tourist season. This eases the coast's dependence on the three-month summer crush. On the other hand, critics warn that an uncontrolled influx could further raise rental prices and push the local population out of city centres.",
      },
      {
        hr: 'Ipak, većina se stručnjaka slaže da je riječ o prilici koju bi trebalo pažljivo iskoristiti. Ako se ulaganja usmjere u brzu internetsku infrastrukturu i cjelogodišnji sadržaj, manji bi obalni gradovi mogli postati privlačna mjesta za život, a ne samo odredišta za kratak odmor. Pitanje je hoće li lokalne zajednice uspjeti tu ravnotežu pronaći na vrijeme.',
        en: 'Nevertheless, most experts agree that this is an opportunity that should be carefully used. If investment is directed into fast internet infrastructure and year-round amenities, smaller coastal towns could become attractive places to live, and not merely destinations for a short holiday. The question is whether local communities will manage to find that balance in time.',
      },
    ],
    vocabulary: [
      { hr: 'na daljinu', en: 'remotely', ex: 'Sve više ljudi radi na daljinu.' },
      {
        hr: 'boravišni status',
        en: 'residence status',
        ex: 'Dobila je boravišni status na godinu dana.',
      },
      { hr: 'prihod', en: 'income', ex: 'Mora dokazati stalan prihod.' },
      { hr: 'udvostručiti', en: 'to double', ex: 'Broj prijava bi se mogao udvostručiti.' },
      { hr: 'učinak', en: 'effect / impact', ex: 'Ekonomski učinci nisu zanemarivi.' },
      { hr: 'ublažiti', en: 'to ease / mitigate', ex: 'Time se ublažava ovisnost o sezoni.' },
      { hr: 'priljev', en: 'influx', ex: 'Nekontroliran priljev podiže cijene najma.' },
      {
        hr: 'istisnuti',
        en: 'to push out / displace',
        ex: 'Visoke cijene istiskuju domaće stanovništvo.',
      },
      { hr: 'ulaganje', en: 'investment', ex: 'Ulaganje u infrastrukturu je ključno.' },
      { hr: 'ravnoteža', en: 'balance', ex: 'Treba pronaći ravnotežu na vrijeme.' },
    ],
    quiz: [
      {
        q: 'Što je Hrvatska uvela 2021. godine?',
        qEn: 'What did Croatia introduce in 2021?',
        opts: [
          'Besplatan internet na obali',
          'Poseban boravišni status za digitalne nomade',
          'Porez na strane radnike',
          'Zabranu rada na daljinu',
        ],
        correct: 1,
      },
      {
        q: 'Koji je glavni uvjet za vizu digitalnog nomada?',
        qEn: 'What is the main condition for the digital nomad visa?',
        opts: [
          'Poznavanje hrvatskog jezika',
          'Kupnja nekretnine',
          'Boravak duži od pet godina',
          'Dokaz o stalnom prihodu izvan Hrvatske',
        ],
        correct: 3,
      },
      {
        q: 'Na što upozoravaju kritičari?',
        qEn: 'What do critics warn about?',
        opts: [
          'Na pad kvalitete interneta',
          'Na manjak turista ljeti',
          'Na zatvaranje kavana',
          'Na rast cijena najma i istiskivanje domaćih',
        ],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_c1_7',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '📉',
    title: 'Iseljavanje i demografska budućnost',
    titleEn: 'Emigration and the Demographic Future',
    duration: 7,
    focus: 'Verbal nouns • Abstract discourse • Demography & policy vocabulary',
    intro:
      'An analytical essay on emigration and demographic decline in Croatia. Practise verbal nouns, formal discourse connectives, and abstract socio-economic vocabulary.',
    paragraphs: [
      {
        hr: 'Malo je pitanja koja toliko zaokupljaju hrvatsku javnost kao iseljavanje i s njime povezano starenje stanovništva. Ulaskom u Europsku uniju 2013. godine otvorilo se tržište rada cijeloga kontinenta, a posljedica je bila odljev mladih i obrazovanih ljudi razmjera kakav suvremena Hrvatska dotad nije zabilježila. Riječ je o procesu koji se ne može svesti na pojedinačne odluke, nego ga treba promatrati kao splet gospodarskih, institucionalnih i psiholoških čimbenika.',
        en: 'Few questions preoccupy the Croatian public as much as emigration and the population ageing connected with it. With entry into the European Union in 2013, the labour market of the entire continent opened up, and the consequence was an outflow of young and educated people of a scale that contemporary Croatia had not previously recorded. This is a process that cannot be reduced to individual decisions, but should be observed as a web of economic, institutional and psychological factors.',
      },
      {
        hr: 'Ono što zabrinjava demografe nije samo brojčani gubitak, koliko njegova struktura. Odlaze prvenstveno ljudi u najproduktivnijoj dobi, često s visokim stupnjem obrazovanja, a upravo bi oni trebali biti nositelji budućega gospodarskog rasta i punitelji mirovinskoga sustava. Njihovim odlaskom slabi porezna osnovica, a istodobno raste udio umirovljenika — kombinacija koja dugoročno dovodi u pitanje održivost javnih financija.',
        en: 'What worries demographers is not so much the numerical loss as its structure. Those who leave are primarily people of the most productive age, often with a high level of education, and they are precisely the ones who ought to be the bearers of future economic growth and the contributors to the pension system. With their departure the tax base weakens, while at the same time the share of pensioners grows — a combination that in the long run calls into question the sustainability of public finances.',
      },
      {
        hr: 'Pojednostavljeno tumačenje, prema kojemu je iseljavanje isključivo posljedica niskih plaća, ne izdržava ozbiljniju kritiku. Istraživanja pokazuju da iseljenike jednako, ako ne i više, motivira percepcija nepravednosti, nepovjerenje u institucije i osjećaj da napredovanje ne ovisi o sposobnosti, nego o vezama. Drugim riječima, riječ je koliko o ekonomskom, toliko i o vrijednosnom problemu.',
        en: 'A simplified interpretation, according to which emigration is exclusively a consequence of low wages, does not withstand more serious scrutiny. Studies show that emigrants are motivated equally, if not more, by a perception of unfairness, distrust in institutions, and a feeling that advancement does not depend on ability but on connections. In other words, it is as much a question of values as it is an economic one.',
      },
      {
        hr: 'Rješenja koja se nude kreću se od poticaja za povratak i ulaganja u obrazovanje do dubinske reforme javne uprave. Nijedna mjera, međutim, neće uroditi plodom bez obnove povjerenja između građana i države. Demografska se slika, naime, ne mijenja proglasima, nego strpljivim, dosljednim radom na uvjetima koji ljudima daju razlog da ostanu — ili da se vrate.',
        en: 'The solutions on offer range from incentives for return and investment in education to a deep reform of public administration. No measure, however, will bear fruit without a restoration of trust between citizens and the state. The demographic picture, namely, does not change through proclamations, but through patient, consistent work on the conditions that give people a reason to stay — or to return.',
      },
    ],
    vocabulary: [
      { hr: 'iseljavanje', en: 'emigration', ex: 'Iseljavanje mladih zabrinjava demografe.' },
      { hr: 'odljev', en: 'outflow / drain', ex: 'Odljev obrazovanih ljudi slabi gospodarstvo.' },
      {
        hr: 'starenje stanovništva',
        en: 'population ageing',
        ex: 'Starenje stanovništva opterećuje mirovinski sustav.',
      },
      { hr: 'čimbenik', en: 'factor', ex: 'Riječ je o spletu više čimbenika.' },
      { hr: 'porezna osnovica', en: 'tax base', ex: 'Odlaskom radnika slabi porezna osnovica.' },
      {
        hr: 'održivost',
        en: 'sustainability',
        ex: 'Dovodi se u pitanje održivost javnih financija.',
      },
      { hr: 'percepcija', en: 'perception', ex: 'Motivira ih percepcija nepravednosti.' },
      { hr: 'nepovjerenje', en: 'distrust', ex: 'Nepovjerenje u institucije potiče odlazak.' },
      { hr: 'poticaj', en: 'incentive', ex: 'Nude se poticaji za povratak.' },
      {
        hr: 'uroditi plodom',
        en: 'to bear fruit',
        ex: 'Nijedna mjera neće uroditi plodom bez povjerenja.',
      },
    ],
    quiz: [
      {
        q: 'Koji je događaj 2013. ubrzao iseljavanje?',
        qEn: 'Which 2013 event accelerated emigration?',
        opts: ['Gospodarska kriza', 'Ulazak u Europsku uniju', 'Promjena ustava', 'Uvođenje eura'],
        correct: 1,
      },
      {
        q: 'Zašto struktura iseljavanja posebno zabrinjava demografe?',
        qEn: 'Why does the structure of emigration particularly worry demographers?',
        opts: [
          'Jer se iseljavaju cijela sela',
          'Jer odlaze samo umirovljenici',
          'Jer odlaze mladi i obrazovani u najproduktivnijoj dobi',
          'Jer se nitko ne vraća',
        ],
        correct: 2,
      },
      {
        q: 'Što tekst navodi kao uvjet uspjeha bilo koje mjere?',
        qEn: 'What does the text cite as the condition for any measure to succeed?',
        opts: [
          'Povećanje plaća u javnom sektoru',
          'Veće subvencije poslodavcima',
          'Zatvaranje granica',
          'Obnovu povjerenja između građana i države',
        ],
        correct: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // C2 — Mastery level: literary/analytical prose, abstract register
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_c2_1',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🗝️',
    title: 'Jezik kao zavičaj',
    titleEn: 'Language as Homeland',
    duration: 8,
    focus: 'Abstract/literary register • Identity & belonging • Verbal nouns & nuance',
    intro:
      'A reflective essay on language, memory, and diaspora identity. Practise abstract literary register, figurative usage, and the kind of nuanced phrasing that separates C1 from C2.',
    paragraphs: [
      {
        hr: 'Postoji osjećaj, blizak svakome tko je odrastao daleko od domovine, da jezik nije tek sredstvo sporazumijevanja, nego svojevrstan zavičaj koji nosimo u sebi. Riječi koje smo čuli u djetinjstvu — uspavanke, imena jela, prve psovke — urezane su dublje od bilo koje naučene gramatike. One ne prenose samo značenje, nego i miris kuhinje, ton bakina glasa i težinu nedjeljnih popodneva.',
        en: 'There is a feeling, familiar to anyone who grew up far from their homeland, that language is not merely a means of communication but a kind of homeland we carry within us. The words we heard in childhood — lullabies, the names of dishes, our first curses — are etched more deeply than any learned grammar. They convey not only meaning but the smell of a kitchen, the tone of a grandmother’s voice, and the weight of Sunday afternoons.',
      },
      {
        hr: 'Ipak, taj se zavičaj lako osipa. U drugoj se generaciji jezik povlači u kuću, u trećoj u tek pokoji izraz, a u četvrtoj nerijetko nestaje posve. Mnogi tek kao odrasli ljudi osjete tu prazninu i odluče vratiti ono što su, naizgled, nepovratno izgubili — ne zbog koristi, nego zbog pripadnosti.',
        en: 'Yet that homeland easily erodes. In the second generation the language retreats into the home, in the third into just the occasional expression, and in the fourth it not infrequently disappears entirely. Many feel that emptiness only as adults and decide to recover what they had, seemingly, irretrievably lost — not out of usefulness, but out of belonging.',
      },
      {
        hr: 'Učenje jezika predaka razlikuje se od učenja bilo kojega stranog jezika. Tu nije riječ o osvajanju nepoznatoga, nego o prisjećanju; svaka svladana riječ kao da otključava vrata koja su oduvijek bila ondje. Put je, doduše, trnovit — odrasli se srame pogrešaka, a savršenstvo koje priželjkuju redovito im izmiče.',
        en: 'Learning the language of one’s ancestors differs from learning any foreign language. It is not a matter of conquering the unknown but of remembering; every mastered word seems to unlock a door that was always there. The path, admittedly, is thorny — adults are ashamed of mistakes, and the perfection they long for regularly eludes them.',
      },
      {
        hr: 'No upravo se u toj nesavršenosti krije sloboda. Jezik se ne posjeduje kao predmet, nego se nastanjuje kao kuća: uvijek pomalo propušta, uvijek traži obnovu. Tko to prihvati, otkriva da zavičaj nije mjesto na karti, nego nešto što iznova gradimo svakom izgovorenom rečenicom.',
        en: 'But it is precisely in that imperfection that freedom lies. A language is not possessed like an object but inhabited like a house: it always leaks a little, always demands renewal. Whoever accepts this discovers that a homeland is not a place on a map, but something we rebuild with every sentence we speak.',
      },
    ],
    vocabulary: [
      { hr: 'zavičaj', en: 'homeland / native region', ex: 'Jezik je zavičaj koji nosimo u sebi.' },
      {
        hr: 'sredstvo sporazumijevanja',
        en: 'means of communication',
        ex: 'Jezik je više od sredstva sporazumijevanja.',
      },
      { hr: 'urezati', en: 'to etch / engrave', ex: 'Te su riječi duboko urezane u pamćenje.' },
      { hr: 'osipati se', en: 'to erode / crumble away', ex: 'Materinski se jezik polako osipa.' },
      { hr: 'povlačiti se', en: 'to retreat / withdraw', ex: 'Jezik se povlači u kuću.' },
      {
        hr: 'praznina',
        en: 'emptiness / void',
        ex: 'Osjetio je prazninu i odlučio nešto poduzeti.',
      },
      { hr: 'pripadnost', en: 'belonging', ex: 'Uči jezik zbog pripadnosti, ne koristi.' },
      {
        hr: 'prisjećanje',
        en: 'remembering / recollection',
        ex: 'Učenje je više prisjećanje nego osvajanje.',
      },
      { hr: 'trnovit', en: 'thorny', ex: 'Put do tečnosti je trnovit.' },
      {
        hr: 'nastaniti se',
        en: 'to settle / take up residence',
        ex: 'U jezik se nastanjujemo kao u kuću.',
      },
    ],
    quiz: [
      {
        q: 'Kako tekst opisuje odnos jezika i zavičaja?',
        qEn: 'How does the text describe the relationship between language and homeland?',
        opts: [
          'Zavičaj je isključivo mjesto na karti',
          'Jezik je zavičaj koji nosimo u sebi',
          'Jezik je samo sredstvo sporazumijevanja',
          'Jezik nema veze s identitetom',
        ],
        correct: 1,
      },
      {
        q: 'Što se, prema tekstu, događa s jezikom kroz generacije iseljenika?',
        qEn: 'What happens to the language across emigrant generations?',
        opts: [
          'Jača iz generacije u generaciju',
          'Odmah ga zamjenjuje drugi jezik',
          'Postupno se osipa i može posve nestati',
          'Ostaje potpuno nepromijenjen',
        ],
        correct: 2,
      },
      {
        q: 'Po čemu se učenje jezika predaka razlikuje od učenja stranog jezika?',
        qEn: 'How does learning an ancestral language differ from learning a foreign one?',
        opts: [
          'Moguće je samo u djetinjstvu',
          'Ne zahtijeva nikakav trud',
          'Lakše je jer nema gramatike',
          'Riječ je o prisjećanju, a ne o osvajanju nepoznatoga',
        ],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_c2_2',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🐌',
    title: 'Pohvala sporosti',
    titleEn: 'In Praise of Slowness',
    duration: 8,
    focus: 'Argumentative essay • Abstract vocabulary • Rhetorical contrast',
    intro:
      'A short argumentative essay on speed, attention, and depth in the digital age. Practise abstract nouns, rhetorical antithesis, and concessive constructions ("one should not, of course…").',
    paragraphs: [
      {
        hr: 'Živimo u dobu koje slavi brzinu kao da je ona sama po sebi vrlina. Vijesti nas zapljuskuju u stvarnome vremenu, poruke traže trenutačan odgovor, a strpljenje je počelo zvučati gotovo kao mana. U toj se vrevi lako zaboravlja da mnoge stvari od vrijednosti — povjerenje, znanje, prijateljstvo — sazrijevaju isključivo polako.',
        en: 'We live in an age that celebrates speed as if it were a virtue in itself. News washes over us in real time, messages demand an instant reply, and patience has begun to sound almost like a flaw. In that bustle it is easy to forget that many things of value — trust, knowledge, friendship — ripen exclusively slowly.',
      },
      {
        hr: 'Sporost o kojoj je riječ nije lijenost, nego svjesno usporavanje. Tko knjigu čita danima, umjesto da preleti tuđi sažetak, ne gubi vrijeme — on ulazi u tekst i dopušta mu da ga promijeni. Površnost je cijena žurbe; dubina je nagrada strpljenju.',
        en: 'The slowness in question is not laziness but a conscious slowing down. Whoever reads a book over days, instead of skimming someone else’s summary, does not waste time — he enters the text and allows it to change him. Superficiality is the price of haste; depth is the reward of patience.',
      },
      {
        hr: 'Zanimljivo je da i jezik najbolje otkriva svoje tajne onima koji ne hrle prema cilju. Nijanse značenja, ritam rečenice, suzdržana ironija — sve se to opaža tek kad zastanemo. Brzina hvata informaciju, ali sporost hvata smisao.',
        en: 'It is interesting that language too reveals its secrets best to those who do not rush toward a goal. Nuances of meaning, the rhythm of a sentence, restrained irony — all of this is noticed only when we pause. Speed captures information, but slowness captures meaning.',
      },
      {
        hr: 'Ne treba, dakako, odbaciti svaku žurbu; ima trenutaka kad je brzina nužna. Riječ je o ravnoteži koju smo, čini se, izgubili. Možda je najveći luksuz našega doba upravo onaj koji ništa ne košta: dopustiti si da nešto traje onoliko dugo koliko uistinu zaslužuje.',
        en: 'One should not, of course, reject all haste; there are moments when speed is necessary. It is about a balance that we seem to have lost. Perhaps the greatest luxury of our age is precisely the one that costs nothing: to allow oneself to let something last as long as it truly deserves.',
      },
    ],
    vocabulary: [
      { hr: 'vrlina', en: 'virtue', ex: 'Brzina nije vrlina sama po sebi.' },
      {
        hr: 'zapljuskivati',
        en: 'to wash over / splash',
        ex: 'Vijesti nas zapljuskuju u stvarnom vremenu.',
      },
      { hr: 'trenutačan', en: 'instantaneous', ex: 'Poruke traže trenutačan odgovor.' },
      { hr: 'strpljenje', en: 'patience', ex: 'Dubina je nagrada strpljenju.' },
      { hr: 'mana', en: 'flaw / defect', ex: 'Strpljenje danas zvuči kao mana.' },
      { hr: 'sazrijevati', en: 'to ripen / mature', ex: 'Povjerenje sazrijeva polako.' },
      { hr: 'površnost', en: 'superficiality', ex: 'Površnost je cijena žurbe.' },
      { hr: 'žurba', en: 'haste / hurry', ex: 'Ne treba odbaciti svaku žurbu.' },
      { hr: 'suzdržan', en: 'restrained', ex: 'Cijenio je njegovu suzdržanu ironiju.' },
      { hr: 'hrliti', en: 'to rush / hasten toward', ex: 'Ne hrli prema cilju pod svaku cijenu.' },
    ],
    quiz: [
      {
        q: 'Što tekst kritizira u suvremenom dobu?',
        qEn: 'What does the text criticize about the modern age?',
        opts: [
          'Slavljenje brzine kao vrline same po sebi',
          'Manjak tehnologije',
          'Previše čitanja knjiga',
          'Pretjeranu sporost',
        ],
        correct: 0,
      },
      {
        q: 'Kako autor definira sporost?',
        qEn: 'How does the author define slowness?',
        opts: [
          'Kao lijenost',
          'Kao svjesno usporavanje',
          'Kao manu karaktera',
          'Kao čisti gubitak vremena',
        ],
        correct: 1,
      },
      {
        q: 'Što, prema autoru, "hvata smisao"?',
        qEn: 'According to the author, what "captures meaning"?',
        opts: ['Brzina', 'Sporost', 'Žurba', 'Površnost'],
        correct: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // A1 — 2026-07 reading expansion (gs_a1_7 … gs_a1_16)
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_a1_7',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🥐',
    title: 'U pekarnici',
    titleEn: 'At the Bakery',
    duration: 4,
    focus: 'Present tense • Food & prices • Polite requests',
    intro:
      'Marko starts every morning at the neighbourhood bakery. Learn breakfast words and how to order politely.',
    paragraphs: [
      {
        hr: 'Marko svako jutro ide u pekarnicu. Pekarnica je blizu njegove kuće, na uglu ulice. Unutra uvijek lijepo miriše na svježi kruh.',
        en: 'Marko goes to the bakery every morning. The bakery is close to his house, on the street corner. Inside it always smells nicely of fresh bread.',
      },
      {
        hr: '"Dobro jutro! Izvolite?" pita prodavačica.\n"Dobro jutro! Jedan kruh i dva peciva, molim vas," kaže Marko.\n"Želite li još nešto? Burek je još topao."\n"Može jedan burek sa sirom, hvala."',
        en: '"Good morning! What can I get you?" asks the shop assistant.\n"Good morning! One loaf of bread and two rolls, please," says Marko.\n"Would you like anything else? The burek is still warm."\n"One cheese burek then, thank you."',
      },
      {
        hr: 'Marko plaća četiri eura i pedeset centi. Prodavačica mu daje vrećicu i kaže: "Ugodan dan!" Marko odgovara: "Hvala, također!"',
        en: 'Marko pays four euros and fifty cents. The shop assistant gives him a bag and says: "Have a nice day!" Marko replies: "Thanks, you too!"',
      },
      {
        hr: 'Doma Marko pije kavu i jede topli burek. Njegova sestra jede pecivo s marmeladom. Doručak je najvažniji obrok u danu, kaže njihova mama.',
        en: 'At home Marko drinks coffee and eats the warm burek. His sister eats a roll with jam. Breakfast is the most important meal of the day, says their mum.',
      },
    ],
    vocabulary: [
      { hr: 'pekarnica', en: 'bakery', ex: 'Pekarnica je na uglu.' },
      { hr: 'kruh', en: 'bread', ex: 'Kruh je svjež.' },
      { hr: 'pecivo', en: 'roll / pastry', ex: 'Jedem pecivo s marmeladom.' },
      { hr: 'topao', en: 'warm', ex: 'Burek je topao.' },
      { hr: 'mirisati', en: 'to smell (nice)', ex: 'Kruh lijepo miriše.' },
      { hr: 'vrećica', en: 'small bag', ex: 'Kruh je u vrećici.' },
      { hr: 'doručak', en: 'breakfast', ex: 'Doručak je u osam.' },
      { hr: 'obrok', en: 'meal', ex: 'Ručak je veliki obrok.' },
    ],
    quiz: [
      {
        q: 'Gdje je pekarnica?',
        qEn: 'Where is the bakery?',
        opts: ['Na tržnici', 'U centru grada', 'Na uglu ulice', 'Pokraj škole'],
        correct: 2,
      },
      {
        q: 'Što Marko kupuje osim kruha i peciva?',
        qEn: 'What does Marko buy besides bread and rolls?',
        opts: ['Marmeladu', 'Kavu', 'Burek sa sirom', 'Mlijeko'],
        correct: 2,
      },
      {
        q: 'Što kaže mama o doručku?',
        qEn: 'What does mum say about breakfast?',
        opts: [
          'Doručak je skup',
          'Doručak je uvijek topao',
          'Doručak nije važan',
          'Doručak je najvažniji obrok u danu',
        ],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a1_8',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '👨‍👩‍👧‍👦',
    title: 'Moja obitelj',
    titleEn: 'My Family',
    duration: 4,
    focus: 'Present tense • Family vocabulary • Possessives (moj/moja)',
    intro:
      'Lucija introduces her family — parents, brother, grandma and the family dog. Core family words in context.',
    paragraphs: [
      {
        hr: 'Zovem se Lucija i imam veliku obitelj. Moj tata se zove Ivan i radi kao vozač autobusa. Moja mama se zove Marija i ona je učiteljica u školi.',
        en: 'My name is Lucija and I have a big family. My dad is called Ivan and he works as a bus driver. My mum is called Marija and she is a teacher at a school.',
      },
      {
        hr: 'Imam jednog brata. On se zove Petar i ima deset godina. Petar voli sport, posebno nogomet. Svaki dan igra nogomet u parku s prijateljima.',
        en: 'I have one brother. His name is Petar and he is ten years old. Petar loves sport, especially football. Every day he plays football in the park with his friends.',
      },
      {
        hr: 'Naša baka živi s nama. Ona odlično kuha — njezina juha je najbolja na svijetu! Baka svako popodne pije kavu i čita novine na balkonu.',
        en: 'Our grandma lives with us. She cooks wonderfully — her soup is the best in the world! Every afternoon grandma drinks coffee and reads the newspaper on the balcony.',
      },
      {
        hr: 'Imamo i psa. On se zove Rex i jako je veseo. Navečer svi zajedno večeramo i pričamo o danu. Volim svoju obitelj!',
        en: 'We also have a dog. His name is Rex and he is very cheerful. In the evening we all have dinner together and talk about the day. I love my family!',
      },
    ],
    vocabulary: [
      { hr: 'obitelj', en: 'family', ex: 'Imam veliku obitelj.' },
      { hr: 'vozač', en: 'driver', ex: 'Tata je vozač autobusa.' },
      { hr: 'učiteljica', en: 'teacher (f.)', ex: 'Mama je učiteljica.' },
      { hr: 'posebno', en: 'especially', ex: 'Volim sport, posebno nogomet.' },
      { hr: 'najbolji', en: 'the best', ex: 'Bakina juha je najbolja.' },
      { hr: 'popodne', en: 'afternoon', ex: 'Popodne pijem kavu.' },
      { hr: 'veseo', en: 'cheerful', ex: 'Pas je veseo.' },
      { hr: 'večerati', en: 'to have dinner', ex: 'Večeramo zajedno.' },
    ],
    quiz: [
      {
        q: 'Što radi Lucijin tata?',
        qEn: "What does Lucija's dad do?",
        opts: ['On je vozač autobusa', 'On je prodavač', 'On je učitelj', 'On je kuhar'],
        correct: 0,
      },
      {
        q: 'Što Petar voli?',
        qEn: 'What does Petar love?',
        opts: ['Čitanje', 'Kuhanje', 'Nogomet', 'Glazbu'],
        correct: 2,
      },
      {
        q: 'Gdje baka čita novine?',
        qEn: 'Where does grandma read the newspaper?',
        opts: ['Na balkonu', 'U kuhinji', 'U parku', 'U školi'],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a1_9',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🌳',
    title: 'Nedjelja u parku',
    titleEn: 'Sunday in the Park',
    duration: 4,
    focus: 'Present tense • Weather • Activities outdoors',
    intro:
      'A sunny Sunday in the city park — ice cream, a lake and a small adventure with the dog.',
    paragraphs: [
      {
        hr: 'Danas je nedjelja i vrijeme je lijepo. Sunce sija i nebo je plavo. Obitelj Kovač ide u park. Park je velik i zelen, a u sredini je malo jezero.',
        en: 'Today is Sunday and the weather is nice. The sun is shining and the sky is blue. The Kovač family goes to the park. The park is big and green, and in the middle there is a small lake.',
      },
      {
        hr: 'Djeca se igraju na igralištu. Tata i mama sjede na klupi i razgovaraju. Pas Rex trči po travi i lovi lopticu. Svi su sretni.',
        en: 'The children play on the playground. Dad and mum sit on a bench and talk. Rex the dog runs on the grass and chases the little ball. Everyone is happy.',
      },
      {
        hr: 'Poslije igre svi jedu sladoled. Mali Petar želi dva sladoleda, ali mama kaže: "Jedan je dovoljno!" Petar bira čokoladu, a Lucija jagodu.',
        en: 'After playing, everyone eats ice cream. Little Petar wants two ice creams, but mum says: "One is enough!" Petar chooses chocolate, and Lucija strawberry.',
      },
      {
        hr: 'Odjednom Rex skače u jezero! Voda je hladna, ali Rex je sretan. Tata se smije: "Rex također želi sladoled!" Svi se smiju. Kakva lijepa nedjelja!',
        en: 'Suddenly Rex jumps into the lake! The water is cold, but Rex is happy. Dad laughs: "Rex wants ice cream too!" Everyone laughs. What a lovely Sunday!',
      },
    ],
    vocabulary: [
      { hr: 'vrijeme', en: 'weather / time', ex: 'Vrijeme je lijepo.' },
      { hr: 'sijati', en: 'to shine', ex: 'Sunce sija.' },
      { hr: 'jezero', en: 'lake', ex: 'U parku je jezero.' },
      { hr: 'igralište', en: 'playground', ex: 'Djeca su na igralištu.' },
      { hr: 'klupa', en: 'bench', ex: 'Sjedimo na klupi.' },
      { hr: 'trava', en: 'grass', ex: 'Rex trči po travi.' },
      { hr: 'dovoljno', en: 'enough', ex: 'Jedan sladoled je dovoljno.' },
      { hr: 'odjednom', en: 'suddenly', ex: 'Odjednom pada kiša.' },
    ],
    quiz: [
      {
        q: 'Kakvo je vrijeme danas?',
        qEn: 'What is the weather like today?',
        opts: ['Pada snijeg', 'Hladno je', 'Lijepo je i sunčano', 'Pada kiša'],
        correct: 2,
      },
      {
        q: 'Što je u sredini parka?',
        qEn: 'What is in the middle of the park?',
        opts: ['Pekarnica', 'Kafić', 'Malo jezero', 'Igralište'],
        correct: 2,
      },
      {
        q: 'Što radi Rex na kraju priče?',
        qEn: 'What does Rex do at the end of the story?',
        opts: ['Jede sladoled', 'Skače u jezero', 'Spava na travi', 'Trči kući'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_a1_10',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🚌',
    title: 'Autobusom u školu',
    titleEn: 'By Bus to School',
    duration: 4,
    focus: 'Present tense • Transport • Telling time',
    intro: "Petar's school morning: the alarm, the bus stop, and a race against the clock.",
    paragraphs: [
      {
        hr: 'Petar ustaje svaki dan u sedam sati. Brzo se oblači, pere zube i jede doručak. U sedam i trideset izlazi iz kuće.',
        en: "Petar gets up every day at seven o'clock. He quickly gets dressed, brushes his teeth and eats breakfast. At seven thirty he leaves the house.",
      },
      {
        hr: 'Autobusna stanica je blizu. Autobus broj pet dolazi u sedam i četrdeset. Petar čeka s prijateljicom Anom. Oni razgovaraju o školi.',
        en: 'The bus stop is nearby. Bus number five comes at seven forty. Petar waits with his friend Ana. They talk about school.',
      },
      {
        hr: 'Danas autobus kasni! Petar gleda na sat: sedam i četrdeset pet... sedam i pedeset... "Škola počinje u osam!" kaže Ana. Napokon, autobus dolazi.',
        en: 'Today the bus is late! Petar looks at his watch: seven forty-five... seven fifty... "School starts at eight!" says Ana. At last, the bus arrives.',
      },
      {
        hr: 'Vožnja traje deset minuta. Petar i Ana trče od stanice do škole. Ulaze u razred točno u osam sati. Učiteljica se smiješi: "Baš na vrijeme!"',
        en: 'The ride takes ten minutes. Petar and Ana run from the stop to the school. They enter the classroom at exactly eight o\'clock. The teacher smiles: "Right on time!"',
      },
    ],
    vocabulary: [
      { hr: 'ustajati', en: 'to get up', ex: 'Ustajem u sedam sati.' },
      { hr: 'oblačiti se', en: 'to get dressed', ex: 'Brzo se oblačim.' },
      { hr: 'stanica', en: 'stop / station', ex: 'Čekam na stanici.' },
      { hr: 'kasniti', en: 'to be late', ex: 'Autobus kasni.' },
      { hr: 'napokon', en: 'at last', ex: 'Napokon dolazi autobus.' },
      { hr: 'vožnja', en: 'ride / drive', ex: 'Vožnja traje deset minuta.' },
      { hr: 'trajati', en: 'to last', ex: 'Sat traje 45 minuta.' },
      { hr: 'na vrijeme', en: 'on time', ex: 'Dolazim na vrijeme.' },
    ],
    quiz: [
      {
        q: 'Kada Petar ustaje?',
        qEn: 'When does Petar get up?',
        opts: ['U sedam i trideset', 'U šest sati', 'U sedam sati', 'U osam sati'],
        correct: 2,
      },
      {
        q: 'Koji autobus Petar čeka?',
        qEn: 'Which bus does Petar wait for?',
        opts: ['Broj petnaest', 'Broj dva', 'Broj deset', 'Broj pet'],
        correct: 3,
      },
      {
        q: 'Zašto Petar i Ana trče do škole?',
        qEn: 'Why do Petar and Ana run to school?',
        opts: [
          'Jer vole trčati',
          'Jer pada kiša',
          'Jer je škola daleko',
          'Jer autobus kasni i škola počinje u osam',
        ],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a1_11',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🎂',
    title: 'Bakin rođendan',
    titleEn: "Grandma's Birthday",
    duration: 4,
    focus: 'Present tense • Celebrations • Giving gifts (dative)',
    intro:
      "The whole family gathers for grandma's seventieth birthday — cake, presents and one big surprise.",
    paragraphs: [
      {
        hr: 'Danas baka slavi rođendan. Ima sedamdeset godina! Cijela obitelj dolazi na proslavu: tete, stričevi, bratići i sestrične.',
        en: 'Today grandma is celebrating her birthday. She is seventy years old! The whole family is coming to the celebration: aunts, uncles and cousins.',
      },
      {
        hr: 'Mama peče veliku tortu od čokolade. Lucija i Petar ukrašavaju dnevnu sobu balonima. Tata kupuje cvijeće — baka najviše voli ruže.',
        en: 'Mum is baking a big chocolate cake. Lucija and Petar are decorating the living room with balloons. Dad is buying flowers — grandma loves roses the most.',
      },
      {
        hr: 'U pet sati svi viču: "Sretan rođendan!" Baka je jako sretna. Djeca joj daju poklon: veliki album sa starim fotografijama obitelji.',
        en: 'At five o\'clock everyone shouts: "Happy birthday!" Grandma is very happy. The children give her a present: a big album with old family photographs.',
      },
      {
        hr: 'Baka gleda fotografije i plače od sreće. "Ovo je najljepši poklon na svijetu," kaže ona. Onda svi jedu tortu i pjevaju stare pjesme do kasne večeri.',
        en: 'Grandma looks at the photographs and cries with joy. "This is the most beautiful present in the world," she says. Then everyone eats cake and sings old songs until late evening.',
      },
    ],
    vocabulary: [
      { hr: 'slaviti', en: 'to celebrate', ex: 'Baka slavi rođendan.' },
      { hr: 'proslava', en: 'celebration', ex: 'Proslava je u pet sati.' },
      { hr: 'peći', en: 'to bake', ex: 'Mama peče tortu.' },
      { hr: 'ukrašavati', en: 'to decorate', ex: 'Ukrašavamo sobu balonima.' },
      { hr: 'cvijeće', en: 'flowers', ex: 'Baka voli cvijeće.' },
      { hr: 'poklon', en: 'present / gift', ex: 'Ovo je poklon za tebe.' },
      { hr: 'fotografija', en: 'photograph', ex: 'Gledamo stare fotografije.' },
      { hr: 'pjevati', en: 'to sing', ex: 'Pjevamo stare pjesme.' },
    ],
    quiz: [
      {
        q: 'Koliko godina baka ima?',
        qEn: 'How old is grandma?',
        opts: ['Šezdeset', 'Pedeset', 'Osamdeset', 'Sedamdeset'],
        correct: 3,
      },
      {
        q: 'Koje cvijeće baka najviše voli?',
        qEn: 'Which flowers does grandma love the most?',
        opts: ['Ruže', 'Suncokrete', 'Tulipane', 'Ljiljane'],
        correct: 0,
      },
      {
        q: 'Što djeca daju baki?',
        qEn: 'What do the children give grandma?',
        opts: ['Album s fotografijama', 'Novu haljinu', 'Balone', 'Tortu'],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a1_12',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🏖️',
    title: 'Dan na plaži',
    titleEn: 'A Day at the Beach',
    duration: 4,
    focus: 'Present tense • Summer & sea vocabulary • Colours',
    intro: 'A hot July day on the Adriatic — swimming, sandcastles and the bluest sea.',
    paragraphs: [
      {
        hr: 'Ljeto je i obitelj je na moru. Danas je jako vruće — trideset pet stupnjeva! Plaža je puna ljudi, ali more je mirno i plavo.',
        en: 'It is summer and the family is at the seaside. Today it is very hot — thirty-five degrees! The beach is full of people, but the sea is calm and blue.',
      },
      {
        hr: 'Lucija i Petar plivaju cijelo jutro. Voda je topla i čista. Petar roni i gleda male ribe. "Vidim plavu ribu!" viče on.',
        en: 'Lucija and Petar swim all morning. The water is warm and clean. Petar dives and watches little fish. "I can see a blue fish!" he shouts.',
      },
      {
        hr: 'U podne obitelj sjedi u hladu pod suncobranom. Jedu sendviče i lubenicu. Mama kaže: "Poslije ručka jedan sat bez plivanja!" Djeca grade dvorac od pijeska.',
        en: 'At noon the family sits in the shade under the parasol. They eat sandwiches and watermelon. Mum says: "After lunch, one hour without swimming!" The children build a sandcastle.',
      },
      {
        hr: 'Navečer svi gledaju zalazak sunca. Nebo je narančasto i ružičasto. "More je najljepše navečer," kaže tata. Sutra dolaze opet!',
        en: 'In the evening they all watch the sunset. The sky is orange and pink. "The sea is most beautiful in the evening," says dad. Tomorrow they are coming again!',
      },
    ],
    vocabulary: [
      { hr: 'vruće', en: 'hot (weather)', ex: 'Danas je jako vruće.' },
      { hr: 'stupanj', en: 'degree', ex: 'Trideset stupnjeva je vruće.' },
      { hr: 'plivati', en: 'to swim', ex: 'Plivamo u moru.' },
      { hr: 'roniti', en: 'to dive', ex: 'Petar roni i gleda ribe.' },
      { hr: 'hlad', en: 'shade', ex: 'Sjedimo u hladu.' },
      { hr: 'lubenica', en: 'watermelon', ex: 'Ljeti jedemo lubenicu.' },
      { hr: 'pijesak', en: 'sand', ex: 'Dvorac od pijeska.' },
      { hr: 'zalazak sunca', en: 'sunset', ex: 'Gledamo zalazak sunca.' },
    ],
    quiz: [
      {
        q: 'Koliko je stupnjeva danas?',
        qEn: 'How many degrees is it today?',
        opts: ['Četrdeset', 'Trideset pet', 'Trideset', 'Dvadeset pet'],
        correct: 1,
      },
      {
        q: 'Što Petar vidi kad roni?',
        qEn: 'What does Petar see when he dives?',
        opts: ['Lubenicu', 'Plavu ribu', 'Dvorac', 'Suncobran'],
        correct: 1,
      },
      {
        q: 'Kakvo je nebo navečer?',
        qEn: 'What is the sky like in the evening?',
        opts: ['Crno', 'Narančasto i ružičasto', 'Sivo i tamno', 'Plavo i zeleno'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_a1_13',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '☕',
    title: 'Kava s prijateljicom',
    titleEn: 'Coffee with a Friend',
    duration: 4,
    focus: 'Present tense • Café culture • Ordering drinks',
    intro: 'Ana meets her best friend for coffee — the most Croatian of all rituals.',
    paragraphs: [
      {
        hr: 'Subota je ujutro. Ana ide u kafić u centru grada. Tamo je čeka njezina najbolja prijateljica Ivana. One piju kavu zajedno svake subote.',
        en: 'It is Saturday morning. Ana goes to a café in the city centre. Her best friend Ivana is waiting for her there. They drink coffee together every Saturday.',
      },
      {
        hr: '"Bog, Ivana! Kako si?" pita Ana.\n"Odlično! Sjedni. Što piješ danas?"\n"Kavu s mlijekom, kao i uvijek," smije se Ana.\nKonobar dolazi i one naručuju dvije kave i čašu vode.',
        en: '"Hi, Ivana! How are you?" asks Ana.\n"Great! Sit down. What are you drinking today?"\n"Coffee with milk, as always," laughs Ana.\nThe waiter comes and they order two coffees and a glass of water.',
      },
      {
        hr: 'Prijateljice razgovaraju dva sata. Pričaju o poslu, o obitelji i o planovima za ljeto. Kava je odavno gotova, ali razgovor ne prestaje.',
        en: 'The friends talk for two hours. They talk about work, about family and about plans for the summer. The coffee is long finished, but the conversation does not stop.',
      },
      {
        hr: 'U Hrvatskoj kava nije samo piće — kava je vrijeme za prijatelje. "Vidimo se sljedeće subote?" pita Ivana. "Naravno! Isti kafić, isto vrijeme," odgovara Ana.',
        en: 'In Croatia coffee is not just a drink — coffee is time for friends. "See you next Saturday?" asks Ivana. "Of course! Same café, same time," replies Ana.',
      },
    ],
    vocabulary: [
      { hr: 'kafić', en: 'café', ex: 'Kafić je u centru.' },
      {
        hr: 'najbolja prijateljica',
        en: 'best friend (f.)',
        ex: 'Ivana je moja najbolja prijateljica.',
      },
      { hr: 'naručivati', en: 'to order', ex: 'Naručujemo dvije kave.' },
      { hr: 'konobar', en: 'waiter', ex: 'Konobar donosi kavu.' },
      { hr: 'razgovarati', en: 'to talk / converse', ex: 'Razgovaramo o poslu.' },
      { hr: 'plan', en: 'plan', ex: 'Imamo planove za ljeto.' },
      { hr: 'odavno', en: 'long ago / for a long time', ex: 'Kava je odavno gotova.' },
      { hr: 'piće', en: 'drink', ex: 'Kava je toplo piće.' },
    ],
    quiz: [
      {
        q: 'Kada Ana i Ivana piju kavu zajedno?',
        qEn: 'When do Ana and Ivana drink coffee together?',
        opts: ['Jednom mjesečno', 'Svake nedjelje', 'Svake subote', 'Svaki dan'],
        correct: 2,
      },
      {
        q: 'Što Ana uvijek pije?',
        qEn: 'What does Ana always drink?',
        opts: ['Kavu s mlijekom', 'Vodu', 'Čaj', 'Sok'],
        correct: 0,
      },
      {
        q: 'Što je kava u Hrvatskoj?',
        qEn: 'What is coffee in Croatia?',
        opts: ['Samo piće', 'Doručak', 'Vrijeme za prijatelje', 'Skupo piće'],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_a1_14',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🏠',
    title: 'Naš stan',
    titleEn: 'Our Flat',
    duration: 4,
    focus: 'Present tense • Rooms & furniture • Locative (u/na + location)',
    intro: "A tour of the family flat, room by room — and everyone's favourite corner.",
    paragraphs: [
      {
        hr: 'Živimo u stanu na trećem katu. Stan nije velik, ali je svijetao i udoban. Imamo dnevnu sobu, kuhinju, dvije spavaće sobe i kupaonicu.',
        en: 'We live in a flat on the third floor. The flat is not big, but it is bright and comfortable. We have a living room, a kitchen, two bedrooms and a bathroom.',
      },
      {
        hr: 'U dnevnoj sobi je velika siva sofa i televizor. Tata navečer tamo gleda vijesti. Na zidu su fotografije obitelji i jedna slika mora.',
        en: 'In the living room there is a big grey sofa and a television. Dad watches the news there in the evening. On the wall there are family photographs and one painting of the sea.',
      },
      {
        hr: 'Kuhinja je mamino kraljevstvo. Tamo uvijek nešto lijepo miriše. Na stolu je uvijek svježe voće, a u pećnici često kolač.',
        en: "The kitchen is mum's kingdom. Something always smells nice there. There is always fresh fruit on the table, and often a cake in the oven.",
      },
      {
        hr: 'Moja soba je mala, ali je moja! U njoj su krevet, radni stol i police pune knjiga. Na balkonu imamo cvijeće i dvije stolice. Tu čitam kad je lijepo vrijeme.',
        en: 'My room is small, but it is mine! In it there is a bed, a desk and shelves full of books. On the balcony we have flowers and two chairs. I read there when the weather is nice.',
      },
    ],
    vocabulary: [
      { hr: 'kat', en: 'floor / storey', ex: 'Stan je na trećem katu.' },
      { hr: 'udoban', en: 'comfortable', ex: 'Sofa je udobna.' },
      { hr: 'dnevna soba', en: 'living room', ex: 'Televizor je u dnevnoj sobi.' },
      { hr: 'zid', en: 'wall', ex: 'Slika je na zidu.' },
      { hr: 'pećnica', en: 'oven', ex: 'Kolač je u pećnici.' },
      { hr: 'radni stol', en: 'desk', ex: 'Učim za radnim stolom.' },
      { hr: 'polica', en: 'shelf', ex: 'Police su pune knjiga.' },
      { hr: 'balkon', en: 'balcony', ex: 'Na balkonu je cvijeće.' },
    ],
    quiz: [
      {
        q: 'Na kojem katu je stan?',
        qEn: 'On which floor is the flat?',
        opts: ['Na drugom', 'Na prvom', 'Na trećem', 'Na četvrtom'],
        correct: 2,
      },
      {
        q: 'Što tata radi u dnevnoj sobi?',
        qEn: 'What does dad do in the living room?',
        opts: ['Gleda vijesti', 'Kuha', 'Spava', 'Čita knjige'],
        correct: 0,
      },
      {
        q: 'Gdje pripovjedačica čita kad je lijepo vrijeme?',
        qEn: 'Where does the narrator read when the weather is nice?',
        opts: ['U dnevnoj sobi', 'Na balkonu', 'U parku', 'U kuhinji'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_a1_15',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🌧️',
    title: 'Kišni dan',
    titleEn: 'A Rainy Day',
    duration: 4,
    focus: 'Present tense • Weather • Indoor activities',
    intro: 'Rain all day — but inside there are board games, hot chocolate and palačinke.',
    paragraphs: [
      {
        hr: 'Danas pada kiša cijeli dan. Nebo je sivo i puše jak vjetar. Nitko ne ide van. "Što radimo danas?" pita Petar tužno.',
        en: 'Today it is raining all day. The sky is grey and a strong wind is blowing. Nobody is going outside. "What are we doing today?" asks Petar sadly.',
      },
      {
        hr: '"Igramo društvene igre!" kaže Lucija. Ona donosi karte i "Čovječe, ne ljuti se". Cijela obitelj sjedi za stolom i igra. Tata gubi tri puta i svi se smiju.',
        en: '"We are playing board games!" says Lucija. She brings cards and "Ludo". The whole family sits at the table and plays. Dad loses three times and everyone laughs.',
      },
      {
        hr: 'Popodne mama radi palačinke s marmeladom i orasima. Djeca piju topli kakao. Vani i dalje pada kiša, ali unutra je toplo i veselo.',
        en: 'In the afternoon mum makes pancakes with jam and walnuts. The children drink hot cocoa. Outside it is still raining, but inside it is warm and cheerful.',
      },
      {
        hr: 'Navečer svi zajedno gledaju stari film. Rex spava pokraj sofe. "Kišni dani nisu tako loši," kaže Petar. "Posebno kad ima palačinki!"',
        en: 'In the evening they all watch an old film together. Rex sleeps next to the sofa. "Rainy days are not so bad," says Petar. "Especially when there are pancakes!"',
      },
    ],
    vocabulary: [
      { hr: 'padati', en: 'to fall (rain: to rain)', ex: 'Kiša pada cijeli dan.' },
      { hr: 'puhati', en: 'to blow (wind)', ex: 'Puše jak vjetar.' },
      { hr: 'društvena igra', en: 'board game', ex: 'Igramo društvene igre.' },
      { hr: 'gubiti', en: 'to lose', ex: 'Tata gubi tri puta.' },
      { hr: 'palačinke', en: 'pancakes', ex: 'Mama radi palačinke.' },
      { hr: 'orah', en: 'walnut', ex: 'Palačinke s orasima.' },
      { hr: 'i dalje', en: 'still / continuing', ex: 'Kiša i dalje pada.' },
      { hr: 'pokraj', en: 'next to', ex: 'Rex spava pokraj sofe.' },
    ],
    quiz: [
      {
        q: 'Kakvo je vrijeme danas?',
        qEn: 'What is the weather like today?',
        opts: ['Sunčano', 'Pada snijeg', 'Pada kiša cijeli dan', 'Vruće je'],
        correct: 2,
      },
      {
        q: 'Tko gubi tri puta u igri?',
        qEn: 'Who loses three times in the game?',
        opts: ['Mama', 'Tata', 'Petar', 'Lucija'],
        correct: 1,
      },
      {
        q: 'Što mama radi popodne?',
        qEn: 'What does mum make in the afternoon?',
        opts: ['Sendviče', 'Palačinke', 'Tortu', 'Juhu'],
        correct: 1,
      },
    ],
  },

  {
    id: 'gs_a1_16',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🍽️',
    title: 'Večera kod susjeda',
    titleEn: 'Dinner at the Neighbours',
    duration: 4,
    focus: 'Present tense • Being a guest • Polite phrases',
    intro: 'The neighbours invite the family over — a first lesson in Croatian hospitality.',
    paragraphs: [
      {
        hr: 'Susjedi Horvat zovu obitelj na večeru. "Dođite u sedam!" kaže gospođa Horvat. Mama nosi bocu vina i kutiju čokolade — u Hrvatskoj gost nikad ne dolazi praznih ruku.',
        en: 'The Horvat neighbours invite the family to dinner. "Come at seven!" says Mrs Horvat. Mum brings a bottle of wine and a box of chocolates — in Croatia a guest never arrives empty-handed.',
      },
      {
        hr: '"Dobra večer! Dobro došli!" kaže gospodin Horvat na vratima. "Izvolite, uđite." Stan lijepo miriše. Na stolu je juha, pečena piletina i salata.',
        en: '"Good evening! Welcome!" says Mr Horvat at the door. "Please, come in." The flat smells lovely. On the table there is soup, roast chicken and salad.',
      },
      {
        hr: '"Jedite, jedite! Ima još!" govori gospođa Horvat cijelu večer. Tata kaže: "Sve je jako ukusno!" Gospođa Horvat se smiješi: "Uzmite još malo piletine!"',
        en: '"Eat, eat! There is more!" says Mrs Horvat all evening. Dad says: "Everything is delicious!" Mrs Horvat smiles: "Take a little more chicken!"',
      },
      {
        hr: 'Poslije večere odrasli piju kavu, a djeca se igraju. U deset sati obitelj ide kući. "Hvala na svemu! Sljedeći put vi dođite k nama!" kaže mama. Tako to ide među dobrim susjedima.',
        en: 'After dinner the adults drink coffee and the children play. At ten o\'clock the family goes home. "Thank you for everything! Next time you come to us!" says mum. That is how it goes between good neighbours.',
      },
    ],
    vocabulary: [
      { hr: 'susjed', en: 'neighbour', ex: 'Susjedi su jako dragi.' },
      { hr: 'gost', en: 'guest', ex: 'Gost ne dolazi praznih ruku.' },
      { hr: 'boca', en: 'bottle', ex: 'Boca vina je poklon.' },
      { hr: 'dobro došli', en: 'welcome', ex: 'Dobro došli u naš dom!' },
      { hr: 'ukusno', en: 'delicious', ex: 'Sve je jako ukusno.' },
      { hr: 'pečen', en: 'roasted / baked', ex: 'Pečena piletina je na stolu.' },
      { hr: 'odrasli', en: 'adults', ex: 'Odrasli piju kavu.' },
      { hr: 'sljedeći put', en: 'next time', ex: 'Sljedeći put dođite k nama.' },
    ],
    quiz: [
      {
        q: 'Što mama nosi susjedima?',
        qEn: 'What does mum bring to the neighbours?',
        opts: ['Bocu vina i čokoladu', 'Palačinke', 'Ništa', 'Tortu i cvijeće'],
        correct: 0,
      },
      {
        q: 'Što gospođa Horvat govori cijelu večer?',
        qEn: 'What does Mrs Horvat say all evening?',
        opts: ['"Jedite, jedite!"', '"Kako ste?"', '"Laku noć!"', '"Doviđenja!"'],
        correct: 0,
      },
      {
        q: 'Što gost u Hrvatskoj nikad ne radi?',
        qEn: 'What does a guest in Croatia never do?',
        opts: ['Ne jede juhu', 'Ne razgovara', 'Ne pije kavu', 'Ne dolazi praznih ruku'],
        correct: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // A2 — 2026-07 reading expansion (gs_a2_7 … gs_a2_16)
  // ═══════════════════════════════════════════════════════

  {
    id: 'gs_a2_7',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '💼',
    title: 'Prvi dan na poslu',
    titleEn: 'First Day at Work',
    duration: 5,
    focus: 'Past tense (perfekt) • Workplace vocabulary • Introductions',
    intro:
      "Ivana's nervous first day at a new office — new faces, a small mistake, and a kind colleague.",
    paragraphs: [
      {
        hr: 'Ivana je jučer imala prvi dan na novom poslu. Ustala je već u šest sati jer je bila jako nervozna. Obukla je bijelu košulju i crne hlače, popila kavu i krenula autobusom u ured.',
        en: "Yesterday Ivana had her first day at a new job. She got up at six o'clock already because she was very nervous. She put on a white shirt and black trousers, drank a coffee and set off by bus to the office.",
      },
      {
        hr: 'U uredu ju je dočekala šefica, gospođa Novak. "Dobro došli u naš tim!" rekla je i pokazala Ivani njezin radni stol. Kolege su se predstavili: Marko iz računovodstva, Petra iz marketinga i Davor, koji sjedi pokraj nje.',
        en: 'At the office the boss, Mrs Novak, welcomed her. "Welcome to our team!" she said and showed Ivana her desk. The colleagues introduced themselves: Marko from accounting, Petra from marketing and Davor, who sits next to her.',
      },
      {
        hr: 'Prije podneva Ivana je napravila malu pogrešku — poslala je e-poštu krivoj osobi. Jako se zabrinula, ali Davor se nasmijao: "Ne brini! Svi smo prvi dan nešto krivo napravili. Ja sam prve godine izbrisao važan dokument!"',
        en: 'Before noon Ivana made a small mistake — she sent an email to the wrong person. She got very worried, but Davor laughed: "Don\'t worry! We all did something wrong on our first day. In my first year I deleted an important document!"',
      },
      {
        hr: 'Za vrijeme pauze svi su zajedno otišli na kavu. Pričali su o poslu, ali i o obitelji i hobijima. Ivana je saznala da Petra također trenira odbojku. Dogovorile su se da idući tjedan idu zajedno na trening.',
        en: 'During the break they all went for coffee together. They talked about work, but also about family and hobbies. Ivana found out that Petra also plays volleyball. They agreed to go to practice together next week.',
      },
      {
        hr: 'Navečer je Ivana nazvala mamu. "Kako je bilo?" pitala je mama. "Iskreno — počelo je s pogreškom, ali završilo je odlično. Mislim da ću biti sretna tamo," odgovorila je Ivana s osmijehom.',
        en: 'In the evening Ivana called her mum. "How was it?" asked mum. "Honestly — it started with a mistake, but it ended great. I think I will be happy there," Ivana answered with a smile.',
      },
    ],
    vocabulary: [
      { hr: 'nervozan', en: 'nervous', ex: 'Bila je nervozna prije posla.' },
      { hr: 'dočekati', en: 'to welcome / meet on arrival', ex: 'Šefica ju je dočekala.' },
      { hr: 'predstaviti se', en: 'to introduce oneself', ex: 'Kolege su se predstavili.' },
      { hr: 'pogreška', en: 'mistake', ex: 'Napravila je malu pogrešku.' },
      { hr: 'zabrinuti se', en: 'to get worried', ex: 'Jako se zabrinula.' },
      { hr: 'pauza', en: 'break', ex: 'Za vrijeme pauze pijemo kavu.' },
      { hr: 'saznati', en: 'to find out', ex: 'Saznala je zanimljivu vijest.' },
      { hr: 'dogovoriti se', en: 'to agree / arrange', ex: 'Dogovorile su se za trening.' },
      { hr: 'iskreno', en: 'honestly', ex: 'Iskreno, bilo je teško.' },
    ],
    quiz: [
      {
        q: 'Zašto je Ivana ustala u šest sati?',
        qEn: "Why did Ivana get up at six o'clock?",
        opts: [
          'Jer je autobus rano išao',
          'Jer je bila nervozna',
          'Jer je imala trening',
          'Jer je uvijek rano ustaje',
        ],
        correct: 1,
      },
      {
        q: 'Kakvu je pogrešku Ivana napravila?',
        qEn: 'What mistake did Ivana make?',
        opts: [
          'Zaboravila je ime šefice',
          'Zakasnila je na posao',
          'Izbrisala je dokument',
          'Poslala je e-poštu krivoj osobi',
        ],
        correct: 3,
      },
      {
        q: 'Što Ivana i Petra imaju zajedničko?',
        qEn: 'What do Ivana and Petra have in common?',
        opts: ['Obje piju čaj', 'Obje rade u marketingu', 'Obje su nove', 'Obje treniraju odbojku'],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a2_8',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '💦',
    title: 'Izlet na Plitvička jezera',
    titleEn: 'A Trip to Plitvice Lakes',
    duration: 5,
    focus: 'Past tense • Nature vocabulary • Trip planning',
    intro:
      "The family visits Croatia's most famous national park — sixteen lakes, wooden paths and one lost cap.",
    paragraphs: [
      {
        hr: 'Prošle subote obitelj Kovač je išla na izlet na Plitvička jezera. Ustali su rano, spremili sendviče i vodu te krenuli autom u sedam sati. Vožnja je trajala dva sata.',
        en: "Last Saturday the Kovač family went on a trip to Plitvice Lakes. They got up early, prepared sandwiches and water and set off by car at seven o'clock. The drive took two hours.",
      },
      {
        hr: 'Plitvička jezera su najpoznatiji nacionalni park u Hrvatskoj. Park ima šesnaest jezera i mnogo slapova. Voda je nevjerojatno čista — plava i zelena u isto vrijeme. Obitelj je hodala drvenim stazama iznad vode.',
        en: 'Plitvice Lakes is the most famous national park in Croatia. The park has sixteen lakes and many waterfalls. The water is incredibly clean — blue and green at the same time. The family walked on wooden paths above the water.',
      },
      {
        hr: 'Petar je cijelo vrijeme fotografirao. "Pogledaj ovaj slap!" vikao je svakih pet minuta. Kod velikog slapa puhao je jak vjetar i Petru je odletjela kapa — ravno u jezero! Svi su se smijali, čak i Petar.',
        en: 'Petar was taking photos the whole time. "Look at this waterfall!" he shouted every five minutes. By the big waterfall a strong wind was blowing and Petar\'s cap flew off — straight into the lake! Everyone laughed, even Petar.',
      },
      {
        hr: 'U podne su sjeli na klupu i pojeli sendviče. Vidjeli su patke i jednu veliku ribu. "U ovom parku ne smiješ plivati ni hraniti životinje," pročitala je Lucija na znaku. "Priroda se ovdje čuva."',
        en: 'At noon they sat on a bench and ate their sandwiches. They saw ducks and one big fish. "In this park you may not swim or feed the animals," Lucija read on a sign. "Nature is protected here."',
      },
      {
        hr: 'Kući su stigli navečer, umorni ali sretni. Petar je izabrao najbolju fotografiju i stavio je na zid svoje sobe. "Sljedeći put idemo bez kape," rekao je tata i namignuo.',
        en: 'They arrived home in the evening, tired but happy. Petar chose the best photo and put it on the wall of his room. "Next time we go without a cap," said dad and winked.',
      },
    ],
    vocabulary: [
      { hr: 'izlet', en: 'trip / excursion', ex: 'Idemo na izlet u subotu.' },
      { hr: 'najpoznatiji', en: 'the most famous', ex: 'Plitvice su najpoznatiji park.' },
      { hr: 'slap', en: 'waterfall', ex: 'Veliki slap je prekrasan.' },
      { hr: 'nevjerojatno', en: 'incredibly', ex: 'Voda je nevjerojatno čista.' },
      { hr: 'staza', en: 'path / trail', ex: 'Hodamo drvenim stazama.' },
      { hr: 'odletjeti', en: 'to fly off', ex: 'Kapa mu je odletjela.' },
      { hr: 'patka', en: 'duck', ex: 'Patke plivaju u jezeru.' },
      { hr: 'znak', en: 'sign', ex: 'Pročitaj što piše na znaku.' },
      { hr: 'namignuti', en: 'to wink', ex: 'Tata je namignuo.' },
    ],
    quiz: [
      {
        q: 'Koliko jezera ima park?',
        qEn: 'How many lakes does the park have?',
        opts: ['Šesnaest', 'Deset', 'Šest', 'Dvadeset'],
        correct: 0,
      },
      {
        q: 'Što se dogodilo Petru kod velikog slapa?',
        qEn: 'What happened to Petar by the big waterfall?',
        opts: [
          'Vidio je veliku ribu',
          'Izgubio je fotoaparat',
          'Odletjela mu je kapa u jezero',
          'Pao je u vodu',
        ],
        correct: 2,
      },
      {
        q: 'Što se u parku ne smije raditi?',
        qEn: 'What is not allowed in the park?',
        opts: [
          'Plivati i hraniti životinje',
          'Fotografirati i hodati',
          'Jesti sendviče',
          'Sjediti na klupi',
        ],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a2_9',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🩺',
    title: 'Kod liječnice',
    titleEn: "At the Doctor's",
    duration: 5,
    focus: 'Past tense • Health & body • Giving advice (imperative)',
    intro:
      'Marko wakes up ill and visits the doctor — symptoms, advice and a week without football.',
    paragraphs: [
      {
        hr: 'Marko se u ponedjeljak probudio s temperaturom. Boljelo ga je grlo i imao je jaku glavobolju. "Ne ideš danas na posao," rekla je njegova žena. "Idi liječnici!"',
        en: 'On Monday Marko woke up with a fever. His throat hurt and he had a bad headache. "You are not going to work today," said his wife. "Go to the doctor!"',
      },
      {
        hr: 'U ambulanti je čekao pola sata. Napokon je sestra pozvala njegovo ime. Liječnica ga je pitala: "Što vas muči?" Marko je objasnio: "Boli me grlo od subote, imam temperaturu i stalno sam umoran."',
        en: 'At the clinic he waited for half an hour. Finally the nurse called his name. The doctor asked him: "What is troubling you?" Marko explained: "My throat has hurt since Saturday, I have a fever and I am constantly tired."',
      },
      {
        hr: 'Liječnica ga je pregledala. Pogledala mu je grlo, poslušala pluća i izmjerila temperaturu — trideset osam i pet. "Imate gripu," rekla je. "Ništa strašno, ali morate se odmarati."',
        en: 'The doctor examined him. She looked at his throat, listened to his lungs and measured his temperature — thirty-eight point five. "You have the flu," she said. "Nothing serious, but you must rest."',
      },
      {
        hr: '"Pijte puno tekućine — vodu, čaj s medom i limunom. Uzimajte ovaj lijek tri puta dnevno poslije jela. I ostanite doma barem pet dana," rekla je liječnica i napisala recept.',
        en: '"Drink a lot of fluids — water, tea with honey and lemon. Take this medicine three times a day after meals. And stay home for at least five days," said the doctor and wrote a prescription.',
      },
      {
        hr: '"A nogomet u četvrtak?" pitao je Marko tiho. Liječnica se nasmijala: "Nikakav sport ovaj tjedan! Zdravlje je na prvom mjestu." Marko je uzdahnuo, kupio lijekove u ljekarni i otišao doma u krevet.',
        en: '"And football on Thursday?" asked Marko quietly. The doctor laughed: "No sport this week! Health comes first." Marko sighed, bought the medicine at the pharmacy and went home to bed.',
      },
    ],
    vocabulary: [
      { hr: 'probuditi se', en: 'to wake up', ex: 'Probudio se s temperaturom.' },
      { hr: 'ambulanta', en: "clinic / doctor's office", ex: 'Čekao je u ambulanti.' },
      { hr: 'mučiti', en: 'to trouble / bother', ex: 'Što vas muči?' },
      { hr: 'pregledati', en: 'to examine', ex: 'Liječnica ga je pregledala.' },
      { hr: 'pluća', en: 'lungs', ex: 'Poslušala mu je pluća.' },
      { hr: 'tekućina', en: 'fluid / liquid', ex: 'Pijte puno tekućine.' },
      { hr: 'recept', en: 'prescription / recipe', ex: 'Napisala je recept.' },
      { hr: 'uzdahnuti', en: 'to sigh', ex: 'Marko je uzdahnuo.' },
      { hr: 'na prvom mjestu', en: 'in first place / first', ex: 'Zdravlje je na prvom mjestu.' },
    ],
    quiz: [
      {
        q: 'Od kada Marka boli grlo?',
        qEn: "Since when has Marko's throat hurt?",
        opts: ['Od jučer', 'Od subote', 'Od jutra', 'Od ponedjeljka'],
        correct: 1,
      },
      {
        q: 'Kolika je Markova temperatura?',
        qEn: "What is Marko's temperature?",
        opts: ['37,5', '36,5', '39,5', '38,5'],
        correct: 3,
      },
      {
        q: 'Što liječnica kaže o nogometu?',
        qEn: 'What does the doctor say about football?',
        opts: [
          'Nikakav sport ovaj tjedan',
          'Nogomet je zdrav',
          'Samo pola utakmice',
          'Može igrati u četvrtak',
        ],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a2_10',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '📦',
    title: 'Selidba',
    titleEn: 'Moving House',
    duration: 5,
    focus: 'Past tense • Home & furniture • Helping verbs',
    intro:
      'Boxes everywhere! The family moves to a bigger flat — with a little help from their friends.',
    paragraphs: [
      {
        hr: 'Obitelj Babić se prošli vikend selila u veći stan. Novi stan ima tri spavaće sobe i veliki balkon s pogledom na park. Cijeli tjedan prije selidbe pakirali su stvari u kutije.',
        en: 'Last weekend the Babić family moved to a bigger flat. The new flat has three bedrooms and a big balcony with a view of the park. The whole week before the move they packed things into boxes.',
      },
      {
        hr: 'U subotu ujutro došli su prijatelji pomoći. Šest ljudi je nosilo kutije, sofu, krevete i veliki ormar. "Ovaj ormar je težak kao slon!" šalio se ujak Tomislav. Stubište je bilo usko pa su morali biti jako oprezni.',
        en: 'On Saturday morning friends came to help. Six people carried boxes, the sofa, beds and the big wardrobe. "This wardrobe is as heavy as an elephant!" joked uncle Tomislav. The staircase was narrow so they had to be very careful.',
      },
      {
        hr: 'Mama je organizirala sve: "Kutije s knjigama u dnevnu sobu! Posuđe u kuhinju! Igračke u dječju sobu!" Do podneva su prenijeli sve stvari. Onda je mama naručila pizzu za sve.',
        en: 'Mum organized everything: "Boxes with books to the living room! Dishes to the kitchen! Toys to the children\'s room!" By noon they had carried everything over. Then mum ordered pizza for everyone.',
      },
      {
        hr: 'Popodne su slagali namještaj. Tata je tri sata sastavljao krevet i na kraju su mu ostala dva vijka. "To je normalno," smijao se prijatelj Darko. "Uvijek ostane nekoliko vijaka!"',
        en: 'In the afternoon they arranged the furniture. Dad spent three hours assembling a bed and at the end he had two screws left over. "That is normal," laughed his friend Darko. "There are always a few screws left!"',
      },
      {
        hr: 'Navečer su svi sjedili na podu među kutijama, jeli pizzu i pili sok. Stan je još bio pun neraspakiranih stvari, ali osjećao se kao dom. "Za naš novi dom!" rekao je tata. "Živjeli!"',
        en: 'In the evening they all sat on the floor among the boxes, ate pizza and drank juice. The flat was still full of unpacked things, but it felt like home. "To our new home!" said dad. "Cheers!"',
      },
    ],
    vocabulary: [
      { hr: 'seliti se', en: 'to move (house)', ex: 'Selimo se u veći stan.' },
      { hr: 'pakirati', en: 'to pack', ex: 'Pakiramo stvari u kutije.' },
      { hr: 'stubište', en: 'staircase', ex: 'Stubište je usko.' },
      { hr: 'oprezan', en: 'careful', ex: 'Budite oprezni s ormarom!' },
      { hr: 'posuđe', en: 'dishes / crockery', ex: 'Posuđe ide u kuhinju.' },
      { hr: 'prenijeti', en: 'to carry over / transfer', ex: 'Prenijeli su sve stvari.' },
      { hr: 'sastavljati', en: 'to assemble', ex: 'Tata sastavlja krevet.' },
      { hr: 'vijak', en: 'screw', ex: 'Ostala su dva vijka.' },
      { hr: 'osjećati se', en: 'to feel', ex: 'Stan se osjeća kao dom.' },
    ],
    quiz: [
      {
        q: 'Koliko spavaćih soba ima novi stan?',
        qEn: 'How many bedrooms does the new flat have?',
        opts: ['Jednu', 'Četiri', 'Dvije', 'Tri'],
        correct: 3,
      },
      {
        q: 'S čime ujak Tomislav uspoređuje ormar?',
        qEn: 'What does uncle Tomislav compare the wardrobe to?',
        opts: ['S autom', 'S konjem', 'S kućom', 'Sa slonom'],
        correct: 3,
      },
      {
        q: 'Što je tati ostalo nakon sastavljanja kreveta?',
        qEn: 'What did dad have left after assembling the bed?',
        opts: ['Ništa', 'Jedan kotač', 'Dva vijka', 'Jedna daska'],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_a2_11',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🍷',
    title: 'Ljetni posao u konobi',
    titleEn: 'A Summer Job at the Konoba',
    duration: 5,
    focus: 'Past tense • Restaurant work • Coastal culture',
    intro:
      'Student Luka spends July waiting tables in a Dalmatian konoba — hard work, good tips and unforgettable sunsets.',
    paragraphs: [
      {
        hr: 'Luka je student i ovog ljeta je radio u konobi u malom mjestu pokraj Šibenika. Konoba je stara kamena kuća s terasom uz more. Njegov posao? Konobar — od pet popodne do ponoći, šest dana u tjednu.',
        en: 'Luka is a student and this summer he worked in a konoba in a small town near Šibenik. The konoba is an old stone house with a terrace by the sea. His job? Waiter — from five in the afternoon until midnight, six days a week.',
      },
      {
        hr: 'Prvi tjedan je bio težak. Luka je morao zapamtiti cijeli jelovnik: crni rižot, brudet, pašticadu, ribu s gradela... Jednom je gostima donio krivo jelo i šef ga je strogo pogledao. Ali Luka je brzo učio.',
        en: 'The first week was hard. Luka had to memorize the whole menu: black risotto, fish stew, pašticada, grilled fish... Once he brought guests the wrong dish and the boss gave him a stern look. But Luka learned fast.',
      },
      {
        hr: 'Gosti su dolazili iz cijele Europe: Nijemci, Talijani, Francuzi... Luka je s njima govorio engleski, ali hrvatski gosti su mu bili najdraži. "Mali, donesi još pola litre!" vikali su domaći s velikog stola svaku večer.',
        en: 'Guests came from all over Europe: Germans, Italians, French... Luka spoke English with them, but the Croatian guests were his favourites. "Kid, bring another half litre!" the locals shouted from the big table every evening.',
      },
      {
        hr: 'Najljepši dio dana bio je zalazak sunca. Oko osam sati more bi postalo zlatno i svi gosti bi utihnuli na trenutak. Čak i šef bi stao i pogledao prema moru. "Zbog ovoga živimo ovdje," rekao je jednom.',
        en: 'The most beautiful part of the day was the sunset. Around eight o\'clock the sea would turn golden and all the guests would fall silent for a moment. Even the boss would stop and look towards the sea. "This is why we live here," he said once.',
      },
      {
        hr: 'Krajem kolovoza Luka je zaradio dovoljno za novi laptop i put u Berlin. Šef mu je na rastanku rekao: "Dogodine te opet čekam. Sada si pravi konobar!" Luka se vratio na fakultet umoran, preplanuo i ponosan.',
        en: 'At the end of August Luka had earned enough for a new laptop and a trip to Berlin. At parting the boss told him: "I expect you again next year. Now you are a real waiter!" Luka returned to university tired, tanned and proud.',
      },
    ],
    vocabulary: [
      { hr: 'konoba', en: 'traditional Dalmatian tavern', ex: 'Večeramo u konobi.' },
      { hr: 'ponoć', en: 'midnight', ex: 'Radi do ponoći.' },
      { hr: 'zapamtiti', en: 'to memorize', ex: 'Zapamtio je cijeli jelovnik.' },
      { hr: 'jelovnik', en: 'menu', ex: 'Jelovnik je na stolu.' },
      { hr: 'jelo', en: 'dish / meal', ex: 'Donio je krivo jelo.' },
      { hr: 'najdraži', en: 'favourite / dearest', ex: 'Domaći gosti su mu najdraži.' },
      { hr: 'utihnuti', en: 'to fall silent', ex: 'Svi su utihnuli na trenutak.' },
      { hr: 'rastanak', en: 'parting / farewell', ex: 'Na rastanku su se rukovali.' },
      { hr: 'preplanuo', en: 'tanned', ex: 'Vratio se preplanuo s mora.' },
    ],
    quiz: [
      {
        q: 'Gdje je Luka radio ovog ljeta?',
        qEn: 'Where did Luka work this summer?',
        opts: [
          'Na plaži u Splitu',
          'U restoranu u Berlinu',
          'U hotelu u Zagrebu',
          'U konobi pokraj Šibenika',
        ],
        correct: 3,
      },
      {
        q: 'Što se dogodilo prvi tjedan?',
        qEn: 'What happened in the first week?',
        opts: [
          'Luka je dobio otkaz',
          'Luka je razbio čašu',
          'Luka je zaboravio doći',
          'Luka je donio gostima krivo jelo',
        ],
        correct: 3,
      },
      {
        q: 'Što je Luka kupio zarađenim novcem?',
        qEn: 'What did Luka buy with the money he earned?',
        opts: ['Novi mobitel', 'Bicikl', 'Auto', 'Novi laptop i put u Berlin'],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a2_12',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🚂',
    title: 'Vlakom u Split',
    titleEn: 'By Train to Split',
    duration: 5,
    focus: 'Past tense • Travel vocabulary • Buying tickets',
    intro:
      'A summer train journey from Zagreb to the coast — tickets, tunnels and a talkative fellow passenger.',
    paragraphs: [
      {
        hr: 'Ana je odlučila posjetiti sestru u Splitu. Kupila je kartu na kolodvoru — trideset eura u jednom smjeru. "Vlak polazi u osam i petnaest s trećeg perona," rekla je službenica na šalteru.',
        en: 'Ana decided to visit her sister in Split. She bought a ticket at the station — thirty euros one way. "The train departs at eight fifteen from platform three," said the clerk at the counter.',
      },
      {
        hr: 'Vlak je krenuo točno na vrijeme. Ana je sjedila pokraj prozora. Nasuprot nje sjedila je starija gospođa koja je odmah počela razgovor: "Idete li i vi na more? Ja idem kod unuke u Kaštela!"',
        en: 'The train left exactly on time. Ana sat by the window. Opposite her sat an older lady who immediately started a conversation: "Are you going to the seaside too? I am going to my granddaughter\'s in Kaštela!"',
      },
      {
        hr: 'Putovanje je trajalo šest sati, ali Ani nije bilo dosadno. Gospođa Marica joj je pričala o svom životu: radila je četrdeset godina kao krojačica, ima petero unučadi i svako ljeto putuje na more istim vlakom.',
        en: 'The journey took six hours, but Ana was not bored. Mrs Marica told her about her life: she worked for forty years as a seamstress, has five grandchildren and travels to the seaside every summer on the same train.',
      },
      {
        hr: 'Poslije Gospića krajolik se promijenio. Vlak je prošao kroz duge tunele, a onda se odjednom — more! Cijeli vagon je uzviknuo: "Eno mora!" To je tradicija: tko prvi vidi more, taj ima sreću cijelo ljeto.',
        en: 'After Gospić the landscape changed. The train passed through long tunnels, and then suddenly — the sea! The whole carriage exclaimed: "There\'s the sea!" It is a tradition: whoever sees the sea first has luck all summer.',
      },
      {
        hr: 'U Splitu je Anu čekala sestra. "Kako je bilo na putu?" pitala je. "Prekrasno! Upoznala sam gospođu Maricu, čula njezinu cijelu životnu priču i prva vidjela more," smijala se Ana. "Ovo će biti sretno ljeto!"',
        en: 'In Split her sister was waiting for Ana. "How was the journey?" she asked. "Wonderful! I met Mrs Marica, heard her whole life story and was first to see the sea," laughed Ana. "This will be a lucky summer!"',
      },
    ],
    vocabulary: [
      { hr: 'u jednom smjeru', en: 'one way (ticket)', ex: 'Karta u jednom smjeru.' },
      { hr: 'polaziti', en: 'to depart', ex: 'Vlak polazi u osam.' },
      { hr: 'peron', en: 'platform', ex: 'Vlak je na trećem peronu.' },
      { hr: 'šalter', en: 'counter / ticket window', ex: 'Kupujem kartu na šalteru.' },
      { hr: 'nasuprot', en: 'opposite', ex: 'Sjedi nasuprot mene.' },
      { hr: 'unuka', en: 'granddaughter', ex: 'Ide kod unuke na more.' },
      { hr: 'krojačica', en: 'seamstress', ex: 'Radila je kao krojačica.' },
      { hr: 'krajolik', en: 'landscape', ex: 'Krajolik se promijenio.' },
      { hr: 'uzviknuti', en: 'to exclaim', ex: 'Svi su uzviknuli: "More!"' },
    ],
    quiz: [
      {
        q: 'Koliko je koštala karta?',
        qEn: 'How much did the ticket cost?',
        opts: ['Dvadeset eura', 'Četrdeset eura', 'Trideset eura', 'Pedeset eura'],
        correct: 2,
      },
      {
        q: 'Što je gospođa Marica radila četrdeset godina?',
        qEn: 'What did Mrs Marica do for forty years?',
        opts: ['Bila je liječnica', 'Bila je krojačica', 'Bila je učiteljica', 'Bila je kuharica'],
        correct: 1,
      },
      {
        q: 'Kakvu sreću ima onaj tko prvi vidi more?',
        qEn: 'What luck does the person who sees the sea first have?',
        opts: [
          'Sreću cijelu godinu',
          'Sreću cijeli dan',
          'Sreću cijelo ljeto',
          'Nema nikakve sreće',
        ],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_a2_13',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '📚',
    title: 'Tjedan prije ispita',
    titleEn: 'The Week Before the Exam',
    duration: 5,
    focus: 'Past tense + future • Studying • Daily schedule',
    intro: 'Lucija has a big maths exam — a week of studying, one crisis and a well-earned reward.',
    paragraphs: [
      {
        hr: 'Lucija sljedeći petak piše veliki ispit iz matematike. Napravila je plan: svaki dan poslije škole učit će dva sata. "Bez mobitela dok učiš!" rekla je mama i stavila telefon u ladicu.',
        en: 'Next Friday Lucija is taking a big maths exam. She made a plan: every day after school she will study for two hours. "No phone while you study!" said mum and put the phone in a drawer.',
      },
      {
        hr: 'Prva tri dana su prošla dobro. Lucija je rješavala zadatke, ponavljala formule i pisala bilješke u bilježnicu. Ali u srijedu je došla kriza — nije razumjela zadatke s postotcima i počela je plakati.',
        en: 'The first three days went well. Lucija solved problems, revised formulas and wrote notes in her notebook. But on Wednesday came a crisis — she did not understand the percentage problems and started to cry.',
      },
      {
        hr: 'Tata je sjeo pokraj nje. "Pokazat ću ti trik," rekao je mirno. "Postotak je samo dio od sto." Objasnio joj je polako, korak po korak, s primjerima iz trgovine: popust od dvadeset posto, cijena od pedeset eura...',
        en: 'Dad sat down next to her. "I will show you a trick," he said calmly. "A percentage is just a part of one hundred." He explained it to her slowly, step by step, with examples from the shop: a twenty percent discount, a price of fifty euros...',
      },
      {
        hr: 'Odjednom je Luciji sve postalo jasno! "Pa to je lako!" uzviknula je. Četvrtak je cijeli dan vježbala i riješila trideset zadataka. Navečer je mirno zaspala — bila je spremna.',
        en: 'Suddenly everything became clear to Lucija! "But that is easy!" she exclaimed. On Thursday she practised all day and solved thirty problems. In the evening she fell asleep peacefully — she was ready.',
      },
      {
        hr: 'U petak poslije ispita Lucija je izašla iz škole s velikim osmijehom. "Mislim da sam sve točno riješila!" Sljedeći tjedan je stigla ocjena: odličan! Za nagradu, cijela obitelj je otišla na sladoled. Lucija je naručila najveći.',
        en: 'On Friday after the exam Lucija came out of school with a big smile. "I think I solved everything correctly!" The next week the grade arrived: an A! As a reward, the whole family went for ice cream. Lucija ordered the biggest one.',
      },
    ],
    vocabulary: [
      { hr: 'ispit', en: 'exam', ex: 'Piše ispit iz matematike.' },
      { hr: 'rješavati', en: 'to solve (impf.)', ex: 'Rješava zadatke svaki dan.' },
      { hr: 'ponavljati', en: 'to revise / repeat', ex: 'Ponavlja formule.' },
      { hr: 'bilješka', en: 'note', ex: 'Piše bilješke u bilježnicu.' },
      { hr: 'kriza', en: 'crisis', ex: 'U srijedu je došla kriza.' },
      { hr: 'postotak', en: 'percentage', ex: 'Postotak je dio od sto.' },
      { hr: 'korak po korak', en: 'step by step', ex: 'Objasnio je korak po korak.' },
      { hr: 'spreman', en: 'ready', ex: 'Bila je spremna za ispit.' },
      { hr: 'nagrada', en: 'reward / prize', ex: 'Za nagradu idu na sladoled.' },
    ],
    quiz: [
      {
        q: 'Koliko sati dnevno Lucija uči po planu?',
        qEn: 'How many hours a day does Lucija study according to the plan?',
        opts: ['Dva sata', 'Tri sata', 'Jedan sat', 'Četiri sata'],
        correct: 0,
      },
      {
        q: 'Što Lucija nije razumjela u srijedu?',
        qEn: 'What did Lucija not understand on Wednesday?',
        opts: ['Zadatke s razlomcima', 'Zadatke s postotcima', 'Geometriju', 'Formule za površinu'],
        correct: 1,
      },
      {
        q: 'Koju je ocjenu Lucija dobila?',
        qEn: 'What grade did Lucija get?',
        opts: ['Vrlo dobar', 'Dobar', 'Odličan', 'Dovoljan'],
        correct: 2,
      },
    ],
  },

  {
    id: 'gs_a2_14',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🍲',
    title: 'Nedjeljni ručak',
    titleEn: 'Sunday Lunch',
    duration: 5,
    focus: 'Present + past • Food & tradition • Family gatherings',
    intro:
      "The sacred Croatian institution: Sunday lunch at grandma's — soup, sarma and three generations at one table.",
    paragraphs: [
      {
        hr: 'U Hrvatskoj je nedjeljni ručak svetinja. Svake nedjelje u jedan sat cijela obitelj Jurić dolazi kod bake Kate. Nitko ne smije kasniti — to baka ne oprašta!',
        en: "In Croatia, Sunday lunch is sacred. Every Sunday at one o'clock the whole Jurić family comes to grandma Kata's. Nobody is allowed to be late — grandma does not forgive that!",
      },
      {
        hr: 'Baka je jutros ustala u šest i počela kuhati. Prvo juha od povrća s domaćim rezancima. Onda sarma — kupila je kiseli kupus još u četvrtak na tržnici. I na kraju, njezin slavni kolač od jabuka.',
        en: 'Grandma got up at six this morning and started cooking. First vegetable soup with homemade noodles. Then sarma — she bought the sauerkraut back on Thursday at the market. And finally, her famous apple cake.',
      },
      {
        hr: 'Za stolom sjedi jedanaest ljudi: baka, njezina dva sina s obiteljima i teta Vesna iz Osijeka. Svi pričaju u isto vrijeme — o poslu, o politici, o nogometu. "Tiše malo, juha se hladi!" viče baka iz kuhinje.',
        en: 'Eleven people sit at the table: grandma, her two sons with their families and aunt Vesna from Osijek. Everyone talks at the same time — about work, politics, football. "Quiet down a bit, the soup is getting cold!" shouts grandma from the kitchen.',
      },
      {
        hr: 'Mali Ivan ne voli sarmu. "Moraš probati barem jednu," kaže mama. Ivan proba i — čudo! — pojede tri sarme. Baka je sretna: "Vidiš! Bakina sarma je najbolja na svijetu." Svi se slažu, i to nije prvi put.',
        en: 'Little Ivan does not like sarma. "You have to try at least one," says mum. Ivan tries and — a miracle! — eats three sarmas. Grandma is happy: "You see! Grandma\'s sarma is the best in the world." Everyone agrees, and not for the first time.',
      },
      {
        hr: 'Poslije ručka muškarci gledaju utakmicu, žene piju kavu, a djeca se igraju u dvorištu. Oko šest sati svi polako idu doma — s punim trbusima i vrećicama kolača za ponijeti. "Vidimo se sljedeće nedjelje!" To se ne mora ni reći.',
        en: 'After lunch the men watch the match, the women drink coffee, and the children play in the yard. Around six o\'clock everyone slowly goes home — with full bellies and bags of cake to take away. "See you next Sunday!" That does not even need to be said.',
      },
    ],
    vocabulary: [
      { hr: 'svetinja', en: 'sacred thing', ex: 'Nedjeljni ručak je svetinja.' },
      { hr: 'opraštati', en: 'to forgive', ex: 'Baka kašnjenje ne oprašta.' },
      { hr: 'rezanci', en: 'noodles', ex: 'Juha s domaćim rezancima.' },
      { hr: 'kiseli kupus', en: 'sauerkraut', ex: 'Sarma se radi od kiselog kupusa.' },
      { hr: 'slavan', en: 'famous', ex: 'Njezin slavni kolač od jabuka.' },
      { hr: 'hladiti se', en: 'to get cold', ex: 'Juha se hladi!' },
      { hr: 'čudo', en: 'miracle / wonder', ex: 'Ivan je pojeo tri sarme — čudo!' },
      { hr: 'dvorište', en: 'yard / courtyard', ex: 'Djeca se igraju u dvorištu.' },
      { hr: 'za ponijeti', en: 'to take away', ex: 'Kolači za ponijeti.' },
    ],
    quiz: [
      {
        q: 'U koliko sati je nedjeljni ručak?',
        qEn: 'At what time is Sunday lunch?',
        opts: ['U dvanaest', 'U dva', 'U jedan', 'U tri'],
        correct: 2,
      },
      {
        q: 'Kada je baka kupila kiseli kupus?',
        qEn: 'When did grandma buy the sauerkraut?',
        opts: ['Jučer', 'Danas ujutro', 'U subotu', 'U četvrtak'],
        correct: 3,
      },
      {
        q: 'Koliko sarmi je Ivan pojeo?',
        qEn: 'How many sarmas did Ivan eat?',
        opts: ['Jednu', 'Dvije', 'Nijednu', 'Tri'],
        correct: 3,
      },
    ],
  },

  {
    id: 'gs_a2_15',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🎁',
    title: 'Poklon za mamu',
    titleEn: 'A Present for Mum',
    duration: 5,
    focus: 'Past tense • Shopping • Making decisions',
    intro: 'Two kids, twenty euros and a mission: find the perfect birthday present for mum.',
    paragraphs: [
      {
        hr: 'Mamin rođendan je u subotu. Lucija i Petar su štedjeli džeparac dva mjeseca i skupili dvadeset eura. "Što ćemo joj kupiti?" pitala je Lucija. "Nešto savršeno," rekao je Petar ozbiljno.',
        en: 'Mum\'s birthday is on Saturday. Lucija and Petar saved their pocket money for two months and collected twenty euros. "What shall we buy her?" asked Lucija. "Something perfect," said Petar seriously.',
      },
      {
        hr: 'U četvrtak poslije škole otišli su u trgovački centar. Prvo su gledali parfeme — preskupi. Onda šalove — "Mama ima pet šalova," rekla je Lucija. Onda knjige — "Ali koju? Ne znamo što je već pročitala."',
        en: 'On Thursday after school they went to the shopping centre. First they looked at perfumes — too expensive. Then scarves — "Mum has five scarves," said Lucija. Then books — "But which one? We don\'t know what she has already read."',
      },
      {
        hr: 'Poslije sat vremena bili su umorni i bez ideje. Sjeli su na klupu. Odjednom je Petar pokazao na mali dućan preko puta: "Pogledaj!" U izlogu je bila šalica s natpisom "Najbolja mama na svijetu" — ali to nije bilo to.',
        en: 'After an hour they were tired and out of ideas. They sat on a bench. Suddenly Petar pointed at a small shop across the way: "Look!" In the window was a mug with the inscription "Best mum in the world" — but that was not it.',
      },
      {
        hr: 'Pokraj šalice stajala je mala srebrna ogrlica s privjeskom u obliku srca. "To je to!" rekli su u isto vrijeme. Ogrlica je koštala osamnaest eura. Prodavačica ju je lijepo zamotala u plavi papir s vrpcom.',
        en: 'Next to the mug stood a small silver necklace with a heart-shaped pendant. "That\'s it!" they said at the same time. The necklace cost eighteen euros. The shop assistant wrapped it nicely in blue paper with a ribbon.',
      },
      {
        hr: 'U subotu ujutro donijeli su mami doručak u krevet i poklon. Mama je otvorila kutijicu i oči su joj se napunile suzama. "Ovo je najljepši poklon koji sam ikad dobila," rekla je i zagrlila ih oboje. Petar je šapnuo Luciji: "Rekao sam ti — savršeno."',
        en: 'On Saturday morning they brought mum breakfast in bed and the present. Mum opened the little box and her eyes filled with tears. "This is the most beautiful present I have ever received," she said and hugged them both. Petar whispered to Lucija: "I told you — perfect."',
      },
    ],
    vocabulary: [
      { hr: 'džeparac', en: 'pocket money', ex: 'Štede džeparac dva mjeseca.' },
      { hr: 'skupiti', en: 'to collect / gather', ex: 'Skupili su dvadeset eura.' },
      { hr: 'preskup', en: 'too expensive', ex: 'Parfemi su preskupi.' },
      { hr: 'dućan', en: 'shop (colloquial)', ex: 'Mali dućan preko puta.' },
      { hr: 'izlog', en: 'shop window', ex: 'U izlogu je šalica.' },
      { hr: 'ogrlica', en: 'necklace', ex: 'Srebrna ogrlica sa srcem.' },
      { hr: 'privjesak', en: 'pendant', ex: 'Privjesak u obliku srca.' },
      { hr: 'zamotati', en: 'to wrap', ex: 'Zamotala je poklon u papir.' },
      { hr: 'zagrliti', en: 'to hug', ex: 'Mama ih je zagrlila.' },
    ],
    quiz: [
      {
        q: 'Koliko su novca djeca skupila?',
        qEn: 'How much money did the children collect?',
        opts: ['Deset eura', 'Petnaest eura', 'Trideset eura', 'Dvadeset eura'],
        correct: 3,
      },
      {
        q: 'Zašto nisu kupili knjigu?',
        qEn: 'Why did they not buy a book?',
        opts: [
          'Mama ne voli čitati',
          'Knjige su preskupe',
          'Ne znaju što je mama već pročitala',
          'Knjižara je bila zatvorena',
        ],
        correct: 2,
      },
      {
        q: 'Što su na kraju kupili?',
        qEn: 'What did they buy in the end?',
        opts: ['Srebrnu ogrlicu s privjeskom', 'Šalicu s natpisom', 'Parfem', 'Plavi šal'],
        correct: 0,
      },
    ],
  },

  {
    id: 'gs_a2_16',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '📱',
    title: 'Video-poziv s bakom',
    titleEn: 'A Video Call with Grandma',
    duration: 5,
    focus: 'Present + past • Diaspora life • Technology & family',
    intro:
      'Every Sunday, a screen connects Chicago and Zagorje — a diaspora family keeps Croatian alive one video call at a time.',
    paragraphs: [
      {
        hr: 'Obitelj Marić živi u Chicagu već petnaest godina, ali svake nedjelje u pet sati — u Hrvatskoj je tada ponoć manje sat — zovu baku Đurđu u Zagorje. To je njihova najvažnija tradicija.',
        en: "The Marić family has lived in Chicago for fifteen years, but every Sunday at five o'clock — in Croatia it is then one hour to midnight — they call grandma Đurđa in Zagorje. It is their most important tradition.",
      },
      {
        hr: '"Bako, vidiš li nas?" viče mali Tomislav na engleskom. "Vidim, vidim! Ali govori hrvatski, zlato moje!" smije se baka na ekranu. Tomislav se trudi: "Bako... kako si... danas?" Baka plješće: "Bravo! Svaki tjedan sve bolje!"',
        en: '"Grandma, can you see us?" shouts little Tomislav in English. "I see you, I see you! But speak Croatian, my darling!" laughs grandma on the screen. Tomislav tries hard: "Grandma... how are you... today?" Grandma claps: "Bravo! Better every week!"',
      },
      {
        hr: 'Baka im pokazuje svoj vrt kroz kameru: rajčice, papriku, cvijeće. "Ove godine imam najbolje rajčice u selu!" Onda pita: "Kada dolazite? Kuham vam štrukle čim sletite!" Tata odgovara: "U srpnju, mama. Već smo kupili karte."',
        en: 'Grandma shows them her garden through the camera: tomatoes, peppers, flowers. "This year I have the best tomatoes in the village!" Then she asks: "When are you coming? I will cook you štrukli as soon as you land!" Dad answers: "In July, mum. We have already bought the tickets."',
      },
      {
        hr: 'Mama i baka onda pola sata razgovaraju o receptima. Baka objašnjava kako se radi prava zagorska juha, a mama zapisuje. "U Americi nema takvog vrhnja," žali se mama. "Onda dođi po njega!" odgovara baka. Svi se smiju.',
        en: 'Mum and grandma then talk about recipes for half an hour. Grandma explains how real Zagorje soup is made, and mum writes it down. "In America there is no cream like that," complains mum. "Then come and get it!" answers grandma. Everyone laughs.',
      },
      {
        hr: 'Na kraju poziva svi mašu ekranu. "Volim vas! Vidimo se u srpnju!" kaže baka. Tomislav nakon poziva pita: "Tata, koliko još ima do srpnja?" Tata ga zagrli: "Još malo, sine. Još samo malo." Domovina je daleko, ali nedjeljom je uvijek blizu.',
        en: 'At the end of the call everyone waves at the screen. "I love you! See you in July!" says grandma. After the call Tomislav asks: "Dad, how long until July?" Dad hugs him: "A little longer, son. Just a little longer." The homeland is far away, but on Sundays it is always near.',
      },
    ],
    vocabulary: [
      { hr: 'video-poziv', en: 'video call', ex: 'Nedjeljom imamo video-poziv.' },
      { hr: 'ekran', en: 'screen', ex: 'Baka je na ekranu.' },
      {
        hr: 'truditi se',
        en: 'to try hard / make an effort',
        ex: 'Tomislav se trudi govoriti hrvatski.',
      },
      { hr: 'pljeskati', en: 'to clap', ex: 'Baka plješće od sreće.' },
      { hr: 'vrt', en: 'garden', ex: 'Baka pokazuje svoj vrt.' },
      { hr: 'sletjeti', en: 'to land (plane)', ex: 'Kuham čim sletite!' },
      { hr: 'vrhnje', en: 'cream (dairy)', ex: 'Juha sa vrhnjem.' },
      { hr: 'mahati', en: 'to wave', ex: 'Svi mašu ekranu.' },
      { hr: 'domovina', en: 'homeland', ex: 'Domovina je daleko.' },
    ],
    quiz: [
      {
        q: 'Koliko dugo obitelj Marić živi u Chicagu?',
        qEn: 'How long has the Marić family lived in Chicago?',
        opts: ['Petnaest godina', 'Pet godina', 'Deset godina', 'Dvadeset godina'],
        correct: 0,
      },
      {
        q: 'Što baka kaže Tomislavu kad govori engleski?',
        qEn: 'What does grandma tell Tomislav when he speaks English?',
        opts: [
          '"Ne razumijem te."',
          '"Zovi mamu."',
          '"Bravo, odlično!"',
          '"Govori hrvatski, zlato moje!"',
        ],
        correct: 3,
      },
      {
        q: 'Kada obitelj dolazi u Hrvatsku?',
        qEn: 'When is the family coming to Croatia?',
        opts: ['Za Božić', 'U lipnju', 'U kolovozu', 'U srpnju'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b1_7',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🧺',
    title: 'Subota na Dolcu',
    titleEn: 'Saturday at Dolac Market',
    duration: 7,
    focus: 'Perfekt i prezent u pripovijedanju • Genitiv količine • Dijalog na tržnici',
    intro:
      'Dolac je najpoznatija zagrebačka tržnica. Subotom ujutro ondje kupuje pola grada — a naša pripovjedačica uči kako se to radi.',
    paragraphs: [
      {
        hr: 'Subotom ujutro Dolac je najživlje mjesto u Zagrebu. Crveni suncobrani otvaraju se već u sedam, a kumice slažu rajčice, breskve i domaći sir. Došla sam rano jer mi je baka rekla: tko dođe kasno, bira ono što su drugi ostavili.',
        en: 'On Saturday mornings Dolac is the liveliest place in Zagreb. The red parasols open by seven, and the market women arrange tomatoes, peaches and homemade cheese. I came early because my grandma told me: whoever comes late chooses what others have left behind.',
      },
      {
        hr: 'Prvo sam kupila kilogram rajčica i pola kile mladog krumpira. Kumica me pitala jesam li iz Zagreba. Rekla sam joj da su mi roditelji odavde, ali da sam odrasla u Kanadi. Nasmijala se i dodala mi šaku trešanja: „Ovo je gratis, za dobrodošlicu."',
        en: 'First I bought a kilogram of tomatoes and half a kilo of new potatoes. The market woman asked me whether I was from Zagreb. I told her my parents were from here, but that I grew up in Canada. She laughed and handed me a fistful of cherries: "These are free, to welcome you."',
      },
      {
        hr: 'Kod mliječnih proizvoda trebalo je čekati u redu. Ispred mene stajala je gospođa koja je kupovala svježi kravlji sir i vrhnje — kaže, za štrukle. Objasnila mi je da se pravi sir prepoznaje po mirisu i da nikad ne kupujem onaj koji ničim ne miriše.',
        en: 'At the dairy products one had to wait in line. In front of me stood a lady buying fresh cow’s cheese and cream — for štrukli, she says. She explained to me that real cheese is recognized by its smell and that I should never buy one that smells of nothing.',
      },
      {
        hr: 'Kući sam se vratila s punim torbama i praznim novčanikom, ali sretna. Na Dolcu ne kupuješ samo hranu — kupuješ razgovor, savjet i osjećaj da pripadaš. Sljedeće subote idem opet, ovaj put s bakinim popisom.',
        en: 'I returned home with full bags and an empty wallet, but happy. At Dolac you don’t just buy food — you buy conversation, advice and a feeling of belonging. Next Saturday I’m going again, this time with grandma’s list.',
      },
    ],
    vocabulary: [
      {
        hr: 'tržnica',
        en: 'market(place)',
        ex: 'Dolac je najpoznatija zagrebačka tržnica.',
      },
      {
        hr: 'kumica',
        en: 'market woman (Zagreb)',
        ex: 'Kumica mi je dodala šaku trešanja.',
      },
      {
        hr: 'suncobran',
        en: 'parasol',
        ex: 'Crveni suncobrani otvaraju se u sedam.',
      },
      {
        hr: 'vrhnje',
        en: 'cream',
        ex: 'Kupila je svježi sir i vrhnje.',
      },
      {
        hr: 'red',
        en: 'line, queue',
        ex: 'Trebalo je čekati u redu.',
      },
      {
        hr: 'novčanik',
        en: 'wallet',
        ex: 'Vratila sam se s praznim novčanikom.',
      },
      {
        hr: 'šaka',
        en: 'fist(ful)',
        ex: 'Dodala mi je šaku trešanja.',
      },
      {
        hr: 'pripadati',
        en: 'to belong',
        ex: 'Kupuješ osjećaj da pripadaš.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je pripovjedačica došla rano?',
        qEn: 'Why did the narrator come early?',
        opts: [
          'Jer je baka tako savjetovala',
          'Jer je radila u blizini',
          'Jer se Dolac rano zatvara',
          'Jer subotom nema gužve',
        ],
        correct: 0,
      },
      {
        q: 'Što je kumica dala gratis?',
        qEn: 'What did the market woman give for free?',
        opts: ['Šaku trešanja', 'Kilogram rajčica', 'Svježi sir', 'Mladi krumpir'],
        correct: 0,
      },
      {
        q: 'Za što gospođa kupuje sir i vrhnje?',
        qEn: 'What is the lady buying cheese and cream for?',
        opts: ['Za štrukle', 'Za pitu', 'Za palačinke', 'Za sarmu'],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_b1_8',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '⚽',
    title: 'Nedjeljna utakmica',
    titleEn: 'The Sunday Match',
    duration: 7,
    focus: 'Glagoli kretanja s prefiksima • Navijanje i sport • Bliska budućnost',
    intro:
      'U malom mjestu nogometna utakmica nije samo sport — nedjeljom se na igralištu okuplja cijelo selo.',
    paragraphs: [
      {
        hr: 'U našem mjestu nedjelja ima svoj red: ujutro misa, u podne ručak, a poslijepodne — utakmica. Naš klub igra u trećoj ligi i nikad neće u prvu, ali to nikome ne smeta. Na tribini se zna tko gdje sjedi već trideset godina.',
        en: 'In our town Sunday has its order: mass in the morning, lunch at noon, and in the afternoon — the match. Our club plays in the third league and will never make the first, but that bothers no one. In the stands, everyone has known who sits where for thirty years.',
      },
      {
        hr: 'Moj bratić Luka igra veznog. Cijeli tjedan radi u očevoj radionici, a subotom navečer rano liježe, što je kod nas prava senzacija. Mama mu nosi čistu opremu, a djed, koji je i sam nekad igrao, daje mu iste savjete već deset godina: „Gledaj loptu, a ne publiku."',
        en: 'My cousin Luka plays midfield. All week he works in his father’s workshop, and on Saturday evenings he goes to bed early, which around here is a real sensation. His mum brings him clean kit, and grandpa, who once played himself, has been giving him the same advice for ten years: "Watch the ball, not the crowd."',
      },
      {
        hr: 'Danas igramo protiv susjednog sela. To je derbi u kojem rezultat znači manje od časti. Kad je sudac dosudio jedanaesterac protiv nas, pola tribine je skočilo na noge. Gol smo primili, ali smo do kraja izjednačili — i slavili kao da smo osvojili prvenstvo.',
        en: 'Today we play against the neighbouring village. It’s a derby in which the result means less than honour. When the referee awarded a penalty against us, half the stand jumped to their feet. We conceded the goal, but equalized by the end — and celebrated as if we had won the championship.',
      },
      {
        hr: 'Poslije utakmice svi zajedno idemo u dom na kobasice i gemišt. Igrači obiju momčadi sjede za istim stolom. Sljedeće nedjelje sve ispočetka — i neka tako ostane.',
        en: 'After the match we all go together to the community hall for sausages and gemišt. Players of both teams sit at the same table. Next Sunday it all starts again — and long may it stay that way.',
      },
    ],
    vocabulary: [
      {
        hr: 'utakmica',
        en: 'match, game',
        ex: 'Poslijepodne je utakmica.',
      },
      {
        hr: 'tribina',
        en: 'stand, bleachers',
        ex: 'Na tribini se zna tko gdje sjedi.',
      },
      {
        hr: 'vezni (igrač)',
        en: 'midfielder',
        ex: 'Luka igra veznog.',
      },
      {
        hr: 'sudac',
        en: 'referee',
        ex: 'Sudac je dosudio jedanaesterac.',
      },
      {
        hr: 'jedanaesterac',
        en: 'penalty kick',
        ex: 'Dosudio je jedanaesterac protiv nas.',
      },
      {
        hr: 'izjednačiti',
        en: 'to equalize',
        ex: 'Do kraja smo izjednačili.',
      },
      {
        hr: 'momčad',
        en: 'team',
        ex: 'Igrači obiju momčadi sjede zajedno.',
      },
      {
        hr: 'čast',
        en: 'honour',
        ex: 'Rezultat znači manje od časti.',
      },
    ],
    quiz: [
      {
        q: 'U kojoj ligi igra klub?',
        qEn: 'In which league does the club play?',
        opts: ['U županijskoj', 'U prvoj', 'U drugoj', 'U trećoj'],
        correct: 3,
      },
      {
        q: 'Što djed savjetuje Luki?',
        qEn: 'What does grandpa advise Luka?',
        opts: [
          'Da trenira svaki dan',
          'Da puca jače',
          'Da mijenja klub',
          'Da gleda loptu, a ne publiku',
        ],
        correct: 3,
      },
      {
        q: 'Kako je završila utakmica?',
        qEn: 'How did the match end?',
        opts: ['Pobjedom domaćih', 'Prekinuta je', 'Porazom bez gola', 'Izjednačeno'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b1_9',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🚗',
    title: 'Autoškola',
    titleEn: 'Driving School',
    duration: 7,
    focus: 'Imperativ i upute • Modalni glagoli morati/smjeti • Promet',
    intro:
      'Polaganje vozačkog ispita u Hrvatskoj ozbiljan je pothvat — pogotovo kad ti je instruktor legenda kvarta.',
    paragraphs: [
      {
        hr: 'Upisala sam autoškolu u rujnu. Prvo ide teorija: znakovi, prednost prolaska, pravila o brzini. Na testu me najviše mučilo tko prolazi prvi na raskrižju bez znakova — dok mi instruktor nije rekao čarobnu formulu: „Tko dolazi zdesna, taj ima prednost."',
        en: 'I enrolled in driving school in September. Theory comes first: signs, right of way, speed rules. On the test I struggled most with who goes first at an unmarked intersection — until my instructor told me the magic formula: "Whoever comes from the right has priority."',
      },
      {
        hr: 'Moj instruktor Zvone vozi ljude po ovim ulicama trideset godina. Smiren je kao more u kolovozu. Kad sam prvi put ugasila auto nasred križanja, samo je rekao: „Ništa, upali ponovno. Svi su nekad gasili." Kaže da je najgori učenik kojeg je imao — on sam, davne osamdesete.',
        en: 'My instructor Zvone has been driving people around these streets for thirty years. He is calm as the sea in August. The first time I stalled the car in the middle of an intersection, he just said: "No matter, start it again. Everyone has stalled once." He says the worst student he ever had was — himself, back in the eighties.',
      },
      {
        hr: 'Najteže mi je bilo parkiranje unatrag. Zvone je imao metodu: „Kad retrovizorom uhvatiš drugi stup ograde, vrti volan do kraja." Vježbale smo na parkiralištu iza trgovačkog centra dok nisam mogla parkirati i zatvorenih očiju — što, naravno, ne smijem raditi.',
        en: 'Reverse parking was hardest for me. Zvone had a method: "When you catch the second fence post in your mirror, turn the wheel all the way." We practised in the car park behind the shopping centre until I could park with my eyes closed — which, of course, I’m not allowed to do.',
      },
      {
        hr: 'Na dan ispita ruke su mi se tresle. Ispitivač je bio strog, ali pravedan. Kad je na kraju rekao „Položili ste", prvo sam nazvala mamu, a onda Zvonu. Rekao je: „Znao sam. Sad polako — i nikad ne žuri na žuto."',
        en: 'On exam day my hands were shaking. The examiner was strict but fair. When at the end he said "You have passed", I first called my mum, and then Zvone. He said: "I knew it. Take it easy now — and never rush an amber light."',
      },
    ],
    vocabulary: [
      {
        hr: 'prednost prolaska',
        en: 'right of way',
        ex: 'Tko dolazi zdesna, ima prednost.',
      },
      {
        hr: 'raskrižje',
        en: 'intersection',
        ex: 'Ugasila sam auto nasred raskrižja.',
      },
      {
        hr: 'ugasiti (auto)',
        en: 'to stall (a car)',
        ex: 'Svi su nekad gasili auto.',
      },
      {
        hr: 'retrovizor',
        en: 'rear-view mirror',
        ex: 'Uhvati stup retrovizorom.',
      },
      {
        hr: 'volan',
        en: 'steering wheel',
        ex: 'Vrti volan do kraja.',
      },
      {
        hr: 'ispitivač',
        en: 'examiner',
        ex: 'Ispitivač je bio strog, ali pravedan.',
      },
      {
        hr: 'položiti (ispit)',
        en: 'to pass (an exam)',
        ex: 'Položili ste!',
      },
      {
        hr: 'žuriti',
        en: 'to hurry',
        ex: 'Nikad ne žuri na žuto.',
      },
    ],
    quiz: [
      {
        q: 'Što je pripovjedačici bilo najteže?',
        qEn: 'What was hardest for the narrator?',
        opts: ['Pokretanje na uzbrdici', 'Teorija', 'Parkiranje unatrag', 'Vožnja autocestom'],
        correct: 2,
      },
      {
        q: 'Tko je bio Zvonin najgori učenik?',
        qEn: 'Who was Zvone’s worst student?',
        opts: ['On sam', 'Susjed', 'Pripovjedačica', 'Njegov sin'],
        correct: 0,
      },
      {
        q: 'Koga je pripovjedačica prvo nazvala?',
        qEn: 'Whom did the narrator call first?',
        opts: ['Tatu', 'Mamu', 'Sestru', 'Zvonu'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b1_10',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🏕️',
    title: 'Sezona u kampu',
    titleEn: 'A Season at the Campsite',
    duration: 8,
    focus: 'Futur I • Poslovni razgovori • Turizam i sezona',
    intro:
      'Tisuće studenata svako ljeto rade sezonu na obali. Ovo je priča o jednom ljetu na recepciji kampa na Krku.',
    paragraphs: [
      {
        hr: 'U svibnju sam se javio na oglas: kamp na otoku Krku tražio je recepcionara sa znanjem engleskog i njemačkog. Na razgovoru su me pitali mogu li raditi pod pritiskom. Rekao sam da sam odrastao u kući s tri sestre. Dobio sam posao odmah.',
        en: 'In May I answered an ad: a campsite on the island of Krk was looking for a receptionist with English and German. At the interview they asked me whether I could work under pressure. I said I grew up in a house with three sisters. I got the job immediately.',
      },
      {
        hr: 'Lipanj je bio miran, ali u srpnju je počeo pravi val. Njemačke obitelji s prikolicama, nizozemski biciklisti, talijanski kamperi — svi stižu istog dana i svi žele parcelu u prvom redu do mora. Naučio sam najvažniju rečenicu sezone: „Trenutačno je sve zauzeto, ali vidjet ću što mogu učiniti."',
        en: 'June was quiet, but in July the real wave began. German families with caravans, Dutch cyclists, Italian campers — they all arrive on the same day and all want a pitch in the first row by the sea. I learned the most important sentence of the season: "Everything is currently full, but I’ll see what I can do."',
      },
      {
        hr: 'Najviše sam naučio od šefice Vesne. Ona može istovremeno smiriti ljutitog gosta, primiti rezervaciju telefonom i objasniti čistačici raspored — na tri jezika. Kad je jedne noći puknula vodovodna cijev, organizirala je sve prije nego što je majstor uopće stigao.',
        en: 'I learned the most from my boss Vesna. She can simultaneously calm an angry guest, take a phone reservation and explain the schedule to the cleaner — in three languages. When a water pipe burst one night, she had everything organized before the repairman even arrived.',
      },
      {
        hr: 'Krajem rujna kamp se ispraznio. Zadnji gosti, umirovljenici iz Beča, ostavili su mi napojnicu i poruku: „Vidimo se dogodine." Sjeo sam na prazan mol i shvatio da ću se vratiti — zbog mora, ali još više zbog ljudi.',
        en: 'At the end of September the campsite emptied. The last guests, pensioners from Vienna, left me a tip and a note: "See you next year." I sat on the empty pier and realized I would come back — for the sea, but even more for the people.',
      },
    ],
    vocabulary: [
      {
        hr: 'oglas',
        en: 'advertisement',
        ex: 'Javio sam se na oglas u svibnju.',
      },
      {
        hr: 'recepcionar',
        en: 'receptionist',
        ex: 'Kamp je tražio recepcionara.',
      },
      {
        hr: 'parcela',
        en: 'pitch, plot',
        ex: 'Svi žele parcelu do mora.',
      },
      {
        hr: 'prikolica',
        en: 'caravan, trailer',
        ex: 'Obitelji stižu s prikolicama.',
      },
      {
        hr: 'zauzeto',
        en: 'occupied, full',
        ex: 'Trenutačno je sve zauzeto.',
      },
      {
        hr: 'vodovodna cijev',
        en: 'water pipe',
        ex: 'Noću je puknula vodovodna cijev.',
      },
      {
        hr: 'napojnica',
        en: 'tip, gratuity',
        ex: 'Gosti su mi ostavili napojnicu.',
      },
      {
        hr: 'umirovljenik',
        en: 'pensioner',
        ex: 'Zadnji gosti bili su umirovljenici iz Beča.',
      },
    ],
    quiz: [
      {
        q: 'Gdje se nalazi kamp?',
        qEn: 'Where is the campsite?',
        opts: ['Na Krku', 'Kod Zadra', 'U Istri', 'Na Hvaru'],
        correct: 0,
      },
      {
        q: 'Što svi gosti žele?',
        qEn: 'What do all the guests want?',
        opts: ['Parcelu do mora', 'Besplatan doručak', 'Mirnu parcelu u hladu', 'Popust'],
        correct: 0,
      },
      {
        q: 'Zašto će se pripovjedač vratiti?',
        qEn: 'Why will the narrator return?',
        opts: ['Zbog šefice', 'Zbog napojnica', 'Zbog plaće', 'Zbog mora i ljudi'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b1_11',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🦷',
    title: 'Kod zubara',
    titleEn: 'At the Dentist',
    duration: 6,
    focus: 'Bezlične konstrukcije (boli me…) • Zdravstveni rječnik • Izražavanje straha',
    intro:
      'Odgađati zubara nacionalni je sport — dok zub ne presudi sam. Priča o pobjedi nad strahom.',
    paragraphs: [
      {
        hr: 'Zub me bolio tjedan dana, a ja sam se pravio da ne postoji. Pio sam hladno na drugu stranu usta i žvakao samo lijevo. Moja žena je na kraju rekla: „Ili zubar ili spavaš u dnevnom boravku." Nazvao sam ordinaciju isti dan.',
        en: 'My tooth had been aching for a week, and I pretended it didn’t exist. I drank cold drinks on the other side of my mouth and chewed only on the left. In the end my wife said: "Either the dentist or you sleep in the living room." I called the surgery that same day.',
      },
      {
        hr: 'U čekaonici je sjedio dječak od možda osam godina, potpuno miran. Ja sam prelistao sve časopise i dvaput izašao „na zrak". Kad me sestra prozvala, dječak mi je rekao: „Ne boj se, striček, doktorica je super." Zemlja, otvori se.',
        en: 'In the waiting room sat a boy of maybe eight, completely calm. I leafed through all the magazines and stepped out twice "for air". When the nurse called my name, the boy told me: "Don’t be afraid, mister, the doctor is great." Earth, swallow me now.',
      },
      {
        hr: 'Doktorica je pogledala snimku i rekla da je upala ozbiljna, ali da se zub može spasiti. „Boljet će manje nego što mislite, a manje-više odmah ćete osjetiti olakšanje." Imala je pravo. Nakon pola sata izašao sam s plombom i osjećajem da sam pobijedio zmaja.',
        en: 'The dentist looked at the X-ray and said the inflammation was serious, but the tooth could be saved. "It will hurt less than you think, and you’ll feel relief more or less immediately." She was right. After half an hour I walked out with a filling and the feeling of having slain a dragon.',
      },
      {
        hr: 'Sada idem na kontrolu svakih šest mjeseci, kako je doktorica rekla. Dječaku iz čekaonice, gdje god bio — hvala. Ponekad hrabrost dolazi u malim pakiranjima.',
        en: 'Now I go for a check-up every six months, as the dentist said. To the boy from the waiting room, wherever he is — thank you. Sometimes courage comes in small packages.',
      },
    ],
    vocabulary: [
      {
        hr: 'zubar',
        en: 'dentist',
        ex: 'Ili zubar ili dnevni boravak.',
      },
      {
        hr: 'ordinacija',
        en: 'doctor’s office, surgery',
        ex: 'Nazvao sam ordinaciju isti dan.',
      },
      {
        hr: 'čekaonica',
        en: 'waiting room',
        ex: 'U čekaonici je sjedio dječak.',
      },
      {
        hr: 'upala',
        en: 'inflammation',
        ex: 'Upala je bila ozbiljna.',
      },
      {
        hr: 'snimka',
        en: 'X-ray, scan',
        ex: 'Doktorica je pogledala snimku.',
      },
      {
        hr: 'plomba',
        en: 'filling',
        ex: 'Izašao sam s plombom.',
      },
      {
        hr: 'olakšanje',
        en: 'relief',
        ex: 'Odmah ćete osjetiti olakšanje.',
      },
      {
        hr: 'kontrola',
        en: 'check-up',
        ex: 'Idem na kontrolu svakih šest mjeseci.',
      },
    ],
    quiz: [
      {
        q: 'Koliko je dugo pripovjedača bolio zub?',
        qEn: 'How long had the narrator’s tooth ached?',
        opts: ['Tjedan dana', 'Mjesec dana', 'Jedan dan', 'Tri dana'],
        correct: 0,
      },
      {
        q: 'Tko ga je ohrabrio u čekaonici?',
        qEn: 'Who encouraged him in the waiting room?',
        opts: ['Doktorica', 'Žena', 'Sestra', 'Dječak'],
        correct: 3,
      },
      {
        q: 'Što sada radi svakih šest mjeseci?',
        qEn: 'What does he now do every six months?',
        opts: ['Ide na kontrolu', 'Zove ordinaciju', 'Ide na čišćenje', 'Mijenja četkicu'],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_b1_12',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🎓',
    title: 'Upis na fakultet',
    titleEn: 'Enrolling at University',
    duration: 7,
    focus: 'Buduće namjere • Obrazovni sustav • Kondicional za želje',
    intro:
      'Državna matura, bodovi, rang-liste — i jedna velika odluka. Kako je Petra birala svoj put.',
    paragraphs: [
      {
        hr: 'Cijelo ljeto nakon mature Petra je osvježavala stranicu s rang-listama. Prijavila je tri studija: pravo u Zagrebu, psihologiju u Rijeci i — na mamino inzistiranje — ekonomiju „za svaki slučaj". Bodovi s državne mature bili su dobri, ali za psihologiju je gužva svake godine.',
        en: 'All summer after her school-leaving exams Petra kept refreshing the ranking-list page. She had applied for three programmes: law in Zagreb, psychology in Rijeka and — at her mum’s insistence — economics "just in case". Her matura points were good, but for psychology it’s crowded every year.',
      },
      {
        hr: 'Djed je navijao za pravo: „U ovoj obitelji nitko još nije bio odvjetnik, a svima bi nam trebao." Tata je šutio, što kod njega znači da ima mišljenje, ali čeka da ga netko pita. Kad ga je Petra napokon pitala, rekao je samo: „Biraj ono zbog čega ćeš ustajati bez budilice."',
        en: 'Grandpa was rooting for law: "No one in this family has been a lawyer yet, and we could all use one." Dad kept quiet, which with him means he has an opinion but is waiting to be asked. When Petra finally asked him, he said only: "Choose the thing that will get you up without an alarm clock."',
      },
      {
        hr: 'Objava je stigla u srpnju u devet ujutro: psihologija, Rijeka, četrnaesto mjesto od šezdeset. Petra je vrištala, mama je plakala, a djed je rekao da će joj oprostiti što neće biti odvjetnica — ako mu jednog dana objasni zašto njegov susjed stalno pomiče ogradu.',
        en: 'The announcement came in July at nine in the morning: psychology, Rijeka, fourteenth place out of sixty. Petra screamed, mum cried, and grandpa said he would forgive her for not becoming a lawyer — if one day she explains to him why his neighbour keeps moving the fence.',
      },
      {
        hr: 'U rujnu je potpisala ugovor o studiranju i našla sobu s pogledom na Učku. Prvi kolegij zove se Uvod u psihologiju. Kaže da se malo boji statistike, ali da se prvi put u životu veseli ponedjeljku.',
        en: 'In September she signed her study contract and found a room with a view of Učka. The first course is called Introduction to Psychology. She says she’s a little afraid of statistics, but that for the first time in her life she is looking forward to Monday.',
      },
    ],
    vocabulary: [
      {
        hr: 'državna matura',
        en: 'state school-leaving exam',
        ex: 'Bodovi s državne mature bili su dobri.',
      },
      {
        hr: 'rang-lista',
        en: 'ranking list',
        ex: 'Osvježavala je stranicu s rang-listama.',
      },
      {
        hr: 'prijaviti (studij)',
        en: 'to apply for (a programme)',
        ex: 'Prijavila je tri studija.',
      },
      {
        hr: 'bodovi',
        en: 'points',
        ex: 'Bodovi su bili dobri.',
      },
      {
        hr: 'odvjetnik',
        en: 'lawyer',
        ex: 'Nitko još nije bio odvjetnik.',
      },
      {
        hr: 'budilica',
        en: 'alarm clock',
        ex: 'Ustajat ćeš bez budilice.',
      },
      {
        hr: 'kolegij',
        en: 'university course',
        ex: 'Prvi kolegij je Uvod u psihologiju.',
      },
      {
        hr: 'veseliti se',
        en: 'to look forward to',
        ex: 'Veseli se ponedjeljku.',
      },
    ],
    quiz: [
      {
        q: 'Koji je studij Petra upisala?',
        qEn: 'Which programme did Petra get into?',
        opts: ['Pravo u Zagrebu', 'Medicinu', 'Ekonomiju', 'Psihologiju u Rijeci'],
        correct: 3,
      },
      {
        q: 'Što je tata savjetovao?',
        qEn: 'What did dad advise?',
        opts: [
          'Da bira ono zbog čega će ustajati bez budilice',
          'Da ode u inozemstvo',
          'Da upiše pravo',
          'Da sluša mamu',
        ],
        correct: 0,
      },
      {
        q: 'Čega se Petra malo boji?',
        qEn: 'What is Petra a little afraid of?',
        opts: ['Ispita', 'Profesora', 'Cimerice', 'Statistike'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b1_13',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🍇',
    title: 'Berba grožđa',
    titleEn: 'The Grape Harvest',
    duration: 7,
    focus: 'Množina i količine • Tradicijski običaji • Radnje koje se ponavljaju',
    intro:
      'Svake jeseni obitelj se okuplja u Zagorju na berbi. Posao je težak, ali nitko ga ne bi mijenjao.',
    paragraphs: [
      {
        hr: 'Zadnje subote u rujnu u našoj se obitelji ne pita ništa: ide se u Zagorje, na berbu. Djedov vinograd nije velik — tristo trsova na brijegu iznad kuće — ali svake godine okupi tridesetak ljudi: rodbinu, susjede i dvoje-troje zalutalih prijatelja koji su „samo došli pomoći".',
        en: 'On the last Saturday of September, no questions are asked in our family: we go to Zagorje, to the harvest. Grandpa’s vineyard isn’t big — three hundred vines on the hill above the house — but every year it gathers thirty-odd people: relatives, neighbours and two or three stray friends who "just came to help".',
      },
      {
        hr: 'Radi se u parovima: jedan reže grozdove škarama, drugi drži kantu. Baka nadgleda sve s vrha reda i nepogrešivo primjećuje svaki preskočeni trs. Do podneva su nam ruke ljepljive od soka, a netko svake godine sjedne na punu kantu — ove godine bio je to stric Ivo.',
        en: 'You work in pairs: one cuts the bunches with shears, the other holds the bucket. Grandma supervises everything from the top of the row and unerringly spots every skipped vine. By noon our hands are sticky with juice, and every year someone sits on a full bucket — this year it was uncle Ivo.',
      },
      {
        hr: 'U podne se sve zaustavlja. Na dugačkom stolu pod orahom čeka gulaš, domaći kruh i sir. Djed drži isti govor kao i svake godine: da je ovo vino posebno jer ga beremo zajedno. Svi ga slušamo kao da ga prvi put čujemo.',
        en: 'At noon everything stops. On the long table under the walnut tree wait goulash, homemade bread and cheese. Grandpa gives the same speech as every year: that this wine is special because we pick it together. We all listen as if hearing it for the first time.',
      },
      {
        hr: 'Navečer se mošt već cijedi u podrumu, a mi umorni sjedimo na klupi i računamo: ako godina bude dobra, bit će oko petsto litara. Ali prava računica je drukčija — jedan dan berbe vrijedi više od svih litara ovoga svijeta.',
        en: 'In the evening the must is already draining in the cellar, and we sit tired on the bench doing the maths: if it’s a good year, there will be about five hundred litres. But the real calculation is different — one day of harvest is worth more than all the litres in this world.',
      },
    ],
    vocabulary: [
      {
        hr: 'berba',
        en: 'harvest (grapes)',
        ex: 'Ide se u Zagorje, na berbu.',
      },
      {
        hr: 'vinograd',
        en: 'vineyard',
        ex: 'Djedov vinograd nije velik.',
      },
      {
        hr: 'trs',
        en: 'grapevine',
        ex: 'Tristo trsova na brijegu.',
      },
      {
        hr: 'grozd',
        en: 'bunch of grapes',
        ex: 'Jedan reže grozdove škarama.',
      },
      {
        hr: 'kanta',
        en: 'bucket',
        ex: 'Drugi drži kantu.',
      },
      {
        hr: 'ljepljiv',
        en: 'sticky',
        ex: 'Ruke su nam ljepljive od soka.',
      },
      {
        hr: 'mošt',
        en: 'grape must',
        ex: 'Mošt se cijedi u podrumu.',
      },
      {
        hr: 'podrum',
        en: 'cellar',
        ex: 'U podrumu je hladno.',
      },
    ],
    quiz: [
      {
        q: 'Koliko trsova ima djedov vinograd?',
        qEn: 'How many vines does grandpa’s vineyard have?',
        opts: ['Petsto', 'Sto', 'Tisuću', 'Tristo'],
        correct: 3,
      },
      {
        q: 'Tko je ove godine sjeo na punu kantu?',
        qEn: 'Who sat on a full bucket this year?',
        opts: ['Pripovjedač', 'Baka', 'Djed', 'Stric Ivo'],
        correct: 3,
      },
      {
        q: 'Što djed kaže u govoru?',
        qEn: 'What does grandpa say in his speech?',
        opts: [
          'Da je vino najbolje u Zagorju',
          'Da će prodati vinograd',
          'Da je vino posebno jer ga beru zajedno',
          'Da je godina loša',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b1_14',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🎣',
    title: 'Ribolov s djedom',
    titleEn: 'Fishing with Grandpa',
    duration: 6,
    focus: 'Prošla ponavljana radnja • Priroda i more • Odnos unuka i djeda',
    intro:
      'Neke se lekcije ne uče u školi. Najvažnije stvari unuk je naučio u barci, čekajući ribu koja možda neće doći.',
    paragraphs: [
      {
        hr: 'Djed me budio u pet ujutro, uvijek istom rečenicom: „Riba ne čeka lijene." U luci bi već mirisalo na sol i dizel. Njegova barka zvala se Zvijezda i bila je starija od moje mame, ali motor je palio iz prve — jer ga je djed svake nedjelje čistio kao da je zlatan.',
        en: 'Grandpa used to wake me at five in the morning, always with the same sentence: "Fish don’t wait for the lazy." The harbour would already smell of salt and diesel. His boat was called Zvijezda and was older than my mum, but the engine started first time — because grandpa cleaned it every Sunday as if it were made of gold.',
      },
      {
        hr: 'Vozili bismo se do uvale koju je znao samo on. Tamo bi ugasio motor i rekao: „Sad slušaj." Slušao sam galebove, vodu o bok barke i ništa više. Trebale su mi godine da shvatim: upravo to ništa bilo je ono po što smo dolazili.',
        en: 'We would motor to a cove only he knew. There he would cut the engine and say: "Now listen." I listened to the gulls, the water against the hull and nothing else. It took me years to understand: that very nothing was what we came for.',
      },
      {
        hr: 'Ribolov me naučio strpljenju. Nekad bismo za tri sata ulovili pun kabao šarga, a nekad ništa osim jedne smokve koju bi mi djed dodao iz torbe. „I prazna mreža nešto lovi", govorio je, „lovi mir."',
        en: 'Fishing taught me patience. Sometimes in three hours we would catch a full pail of bream, and sometimes nothing but a fig grandpa would hand me from his bag. "An empty net catches something too," he used to say, "it catches peace."',
      },
      {
        hr: 'Djeda više nema, a Zvijezda je sada moja. Svakog ljeta odvedem svog sina u istu uvalu, ugasim motor i kažem: „Sad slušaj." On još misli da čekamo ribu. Neka misli — shvatit će kad dođe vrijeme.',
        en: 'Grandpa is gone now, and Zvijezda is mine. Every summer I take my son to the same cove, cut the engine and say: "Now listen." He still thinks we’re waiting for fish. Let him think so — he’ll understand when the time comes.',
      },
    ],
    vocabulary: [
      {
        hr: 'ribolov',
        en: 'fishing',
        ex: 'Ribolov me naučio strpljenju.',
      },
      {
        hr: 'barka',
        en: 'small boat',
        ex: 'Njegova barka zvala se Zvijezda.',
      },
      {
        hr: 'uvala',
        en: 'cove, bay',
        ex: 'Vozili bismo se do uvale.',
      },
      {
        hr: 'galeb',
        en: 'seagull',
        ex: 'Slušao sam galebove.',
      },
      {
        hr: 'strpljenje',
        en: 'patience',
        ex: 'Naučio me strpljenju.',
      },
      {
        hr: 'kabao',
        en: 'pail, bucket',
        ex: 'Ulovili bismo pun kabao šarga.',
      },
      {
        hr: 'mreža',
        en: 'net',
        ex: 'I prazna mreža nešto lovi.',
      },
      {
        hr: 'bok (barke)',
        en: 'side, hull (of a boat)',
        ex: 'Voda udara o bok barke.',
      },
    ],
    quiz: [
      {
        q: 'Kako se zvala djedova barka?',
        qEn: 'What was grandpa’s boat called?',
        opts: ['Sreća', 'Galeb', 'Zvijezda', 'Uvala'],
        correct: 2,
      },
      {
        q: 'Što po djedu lovi prazna mreža?',
        qEn: 'According to grandpa, what does an empty net catch?',
        opts: ['Vjetar', 'Ništa', 'Mir', 'Sreću'],
        correct: 2,
      },
      {
        q: 'Kamo pripovjedač sada vodi sina?',
        qEn: 'Where does the narrator now take his son?',
        opts: ['U luku', 'Na drugi otok', 'U istu uvalu', 'Na jezero'],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b1_15',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🧭',
    title: 'Izgubljena u Zagrebu',
    titleEn: 'Lost in Zagreb',
    duration: 6,
    focus: 'Upute za snalaženje • Prostorni prijedlozi • Ljubaznost prema strancima',
    intro:
      'GPS je odustao, mobitel se ugasio — i tako je Emma iz Australije otkrila kako se u Zagrebu zapravo pita za put.',
    paragraphs: [
      {
        hr: 'Emma je u Zagreb stigla u posjet rodbini koju nikad nije upoznala. Adresa: Ilica, negdje. Mobitel joj se ugasio u tramvaju broj šest, a papirić s kućnim brojem ostao je u drugoj jakni. Znala je samo da zgrada ima zeleni ulaz i da je „blizu one velike kavane".',
        en: 'Emma arrived in Zagreb to visit relatives she had never met. The address: Ilica, somewhere. Her phone died in tram number six, and the slip with the house number stayed in her other jacket. All she knew was that the building had a green entrance and was "near that big café".',
      },
      {
        hr: 'Prvo je pitala mladića sa slušalicama. Izvadio je jednu slušalicu, saslušao je i rekao: „Ilica je duga tri kilometra. Trebat će nam više podataka." Nasmijali su se i krenuli zajedno — jer u Zagrebu se put ne objašnjava, u Zagrebu te se otprati.',
        en: 'First she asked a young man with earphones. He took out one earphone, heard her out and said: "Ilica is three kilometres long. We’re going to need more data." They laughed and set off together — because in Zagreb directions aren’t explained, in Zagreb you get walked there.',
      },
      {
        hr: 'Kod Britanskog trga pridružila im se gospođa s tržnice koja je „točno znala koja je to kavana". Usput je Emma saznala gdje se pije najbolja kava, zašto se špica subotom ne propušta i da se njezina prezimena — Horvat — u Zagrebu ne treba sramiti, jer ga nosi pola grada.',
        en: 'At Britanski Square they were joined by a lady from the market who "knew exactly which café that was". Along the way Emma learned where the best coffee is drunk, why the Saturday špica must not be missed, and that her surname — Horvat — is nothing to be shy about in Zagreb, since half the city carries it.',
      },
      {
        hr: 'Zeleni ulaz našli su u pokrajnjoj ulici. Teta Jagoda otvorila je vrata, pogledala cijelu delegaciju i — pozvala sve na kavu. Mladić sa slušalicama danas je Emmin vodič po Zagrebu. Njegovo ime? Također Horvat. Nisu u rodu. Vjerojatno.',
        en: 'They found the green entrance in a side street. Aunt Jagoda opened the door, looked at the whole delegation and — invited everyone in for coffee. The young man with the earphones is now Emma’s guide around Zagreb. His name? Also Horvat. They’re not related. Probably.',
      },
    ],
    vocabulary: [
      {
        hr: 'snalaziti se',
        en: 'to find one’s way',
        ex: 'Teško se snalazila bez mobitela.',
      },
      {
        hr: 'ulaz',
        en: 'entrance',
        ex: 'Zgrada ima zeleni ulaz.',
      },
      {
        hr: 'slušalice',
        en: 'earphones',
        ex: 'Mladić je izvadio jednu slušalicu.',
      },
      {
        hr: 'otpratiti',
        en: 'to walk somebody (somewhere)',
        ex: 'U Zagrebu te se otprati.',
      },
      {
        hr: 'pridružiti se',
        en: 'to join',
        ex: 'Pridružila im se gospođa s tržnice.',
      },
      {
        hr: 'špica',
        en: 'Saturday promenade (Zagreb)',
        ex: 'Špica se subotom ne propušta.',
      },
      {
        hr: 'pokrajnja ulica',
        en: 'side street',
        ex: 'Ulaz je u pokrajnjoj ulici.',
      },
      {
        hr: 'u rodu',
        en: 'related (by family)',
        ex: 'Nisu u rodu. Vjerojatno.',
      },
    ],
    quiz: [
      {
        q: 'Što je Emma znala o zgradi?',
        qEn: 'What did Emma know about the building?',
        opts: ['Da ima zeleni ulaz', 'Kućni broj', 'Ime ulice i broj', 'Kat i stan'],
        correct: 0,
      },
      {
        q: 'Kako se u Zagrebu objašnjava put?',
        qEn: 'How are directions given in Zagreb?',
        opts: ['Kaže se broj tramvaja', 'Nacrta se karta', 'Otprati te se', 'Pošalje se lokacija'],
        correct: 2,
      },
      {
        q: 'Kako se preziva mladić sa slušalicama?',
        qEn: 'What is the young man’s surname?',
        opts: ['Jagoda', 'Babić', 'Horvat', 'Kovač'],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b1_16',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🎄',
    title: 'Advent u Zagrebu',
    titleEn: 'Advent in Zagreb',
    duration: 7,
    focus: 'Opis atmosfere • Bezlični izrazi • Zimske tradicije',
    intro:
      'Zagrebački advent više je puta biran za najbolji u Europi. Ali za obitelj Novak advent znači nešto sasvim svoje.',
    paragraphs: [
      {
        hr: 'Kad se na Zrinjevcu upale lampice, u obitelji Novak počinje sezona koju tata zove „mjesec kuhanog vina", a mama „mjesec potrošenog novca". Djeca imaju svoj raspored: klizanje na Tomislavcu, fritule kod štanda do fontane i obavezno razgledavanje jaslica u katedrali.',
        en: 'When the lights come on in Zrinjevac park, the Novak family begins the season dad calls "the month of mulled wine" and mum "the month of spent money". The children have their own schedule: skating at Tomislav Square, fritule at the stand by the fountain, and the obligatory viewing of the nativity scene at the cathedral.',
      },
      {
        hr: 'Baka Novak drži do tradicije: na prvu nedjelju adventa pali se prva svijeća na vijencu, a na stol dolazi pečena purica s mlincima. Unuci znaju da se prije ručka ništa ne grize, ma koliko mirisalo iz kuhinje — to je pravilo starije od svih njih zajedno.',
        en: 'Grandma Novak keeps tradition: on the first Sunday of Advent the first candle on the wreath is lit, and roast turkey with mlinci comes to the table. The grandchildren know that nothing gets nibbled before lunch, no matter how good the kitchen smells — that rule is older than all of them put together.',
      },
      {
        hr: 'Ove godine snijeg je pao baš na Badnjak. Cijela ulica izašla je van: susjedi su se grudali kao djeca, netko je iznio termosicu čaja, a gospodin Perić, koji inače ne pozdravlja nikoga, čistio je snijeg pred tuđim vratima i pjevušio.',
        en: 'This year snow fell right on Christmas Eve. The whole street came outside: neighbours had a snowball fight like children, someone brought out a thermos of tea, and Mr Perić, who normally greets no one, was clearing snow in front of other people’s doors and humming.',
      },
      {
        hr: 'Na Štefanje se obitelj okuplja kod bake. Stol se produžuje s dvije daske, jer nas je svake godine više. Kad se upali svijeća i digne čaša, baka kaže isto što i uvijek: „Da nam je svima ovako — i dogodine." I bude.',
        en: 'On St Stephen’s Day the family gathers at grandma’s. The table is extended with two boards, because every year there are more of us. When the candle is lit and the glass raised, grandma says what she always says: "May we all be like this — next year too." And so it is.',
      },
    ],
    vocabulary: [
      {
        hr: 'advent',
        en: 'Advent',
        ex: 'Zagrebački advent biran je za najbolji u Europi.',
      },
      {
        hr: 'kuhano vino',
        en: 'mulled wine',
        ex: 'Mjesec kuhanog vina.',
      },
      {
        hr: 'klizanje',
        en: 'ice skating',
        ex: 'Klizanje na Tomislavcu.',
      },
      {
        hr: 'fritule',
        en: 'fritule (mini doughnuts)',
        ex: 'Fritule kod štanda do fontane.',
      },
      {
        hr: 'jaslice',
        en: 'nativity scene',
        ex: 'Razgledavanje jaslica u katedrali.',
      },
      {
        hr: 'vijenac',
        en: 'wreath',
        ex: 'Pali se prva svijeća na vijencu.',
      },
      {
        hr: 'Badnjak',
        en: 'Christmas Eve',
        ex: 'Snijeg je pao baš na Badnjak.',
      },
      {
        hr: 'grudati se',
        en: 'to have a snowball fight',
        ex: 'Susjedi su se grudali kao djeca.',
      },
    ],
    quiz: [
      {
        q: 'Što baka servira prve nedjelje adventa?',
        qEn: 'What does grandma serve on the first Sunday of Advent?',
        opts: ['Fritule', 'Bakalar', 'Puricu s mlincima', 'Sarmu'],
        correct: 2,
      },
      {
        q: 'Kada je ove godine pao snijeg?',
        qEn: 'When did it snow this year?',
        opts: ['Na Štefanje', 'Na Badnjak', 'Prve nedjelje adventa', 'Na Novu godinu'],
        correct: 1,
      },
      {
        q: 'Što baka kaže uz podignutu čašu?',
        qEn: 'What does grandma say with her glass raised?',
        opts: [
          '„Sretan Božić!"',
          '„Da nam je svima ovako — i dogodine."',
          '„Živjeli!"',
          '„Dobar tek!"',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_8',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🏛️',
    title: 'Život u palači',
    titleEn: 'Living in a Palace',
    duration: 9,
    focus: 'Pasivne konstrukcije • Povijesni prezent • Baština i suvremenost',
    intro:
      'Dioklecijanova palača nije muzej — u njoj se već sedamnaest stoljeća živi. Split je grad koji stanuje u vlastitoj povijesti.',
    paragraphs: [
      {
        hr: 'Kad je rimski car Dioklecijan oko 300. godine dao sagraditi palaču uz more, planirao je mirnu starost: vrtove, terme i pogled na otoke. Nije mogao znati da će se njegova rezidencija pretvoriti u živi grad — da će se u carskim podrumima jednog dana prodavati suveniri, a u peristilu ljeti izvoditi opera.',
        en: 'When the Roman emperor Diocletian had a palace built by the sea around the year 300, he was planning a peaceful retirement: gardens, baths and a view of the islands. He could not have known that his residence would turn into a living city — that souvenirs would one day be sold in the imperial basements, and opera performed in the Peristyle in summer.',
      },
      {
        hr: 'Nakon propasti Salone u sedmom stoljeću, izbjeglice su se sklonile unutar palačinih zidina i više nikad nisu otišle. Antički su stupovi ugrađeni u srednjovjekovne kuće, carev mauzolej postao je katedrala, a hramovi skladišta i crkvice. Palača nije sačuvana usprkos životu u njoj — sačuvana je upravo zbog njega.',
        en: 'After the fall of Salona in the seventh century, refugees took shelter within the palace walls and never left. Ancient columns were built into medieval houses, the emperor’s mausoleum became a cathedral, and temples became warehouses and chapels. The palace was not preserved despite the life within it — it was preserved precisely because of it.',
      },
      {
        hr: 'Danas u staroj jezgri živi oko dvije tisuće ljudi. Gospođa Marija, čiji stan gleda ravno na Peristil, kaže da se na turiste navikneš kao na galebove: „Ujutro, prije osam, grad je samo naš. Popijem kavu na prozoru i gledam kako se kamen budi. Ta svjetlost — nju ni car nije mogao kupiti."',
        en: 'Today about two thousand people live in the old core. Mrs Marija, whose flat looks straight onto the Peristyle, says you get used to the tourists the way you get used to seagulls: "In the morning, before eight, the city is ours alone. I drink my coffee at the window and watch the stone wake up. That light — even the emperor couldn’t buy it."',
      },
      {
        hr: 'No život u spomeniku ima i cijenu. Stanovi se sve češće pretvaraju u apartmane, mladi odlaze u kvartove gdje je život jeftiniji, a konzervatori i stanari vode beskrajne pregovore oko svake klime i svakog prozora. Split traži ravnotežu koju traže svi povijesni gradovi: kako živjeti od baštine, a ne potrošiti je.',
        en: 'But life in a monument has its price. Flats are increasingly turned into holiday apartments, the young move to neighbourhoods where life is cheaper, and conservators and residents hold endless negotiations over every air-conditioning unit and every window. Split is seeking the balance all historic cities seek: how to live off heritage without using it up.',
      },
      {
        hr: 'Ipak, kad se navečer upale svjetla i kamen poprimi boju meda, jasno je zašto se odavde teško odlazi. Dioklecijan je gradio za sebe, a ostavio svima. Malo koji car može reći da mu se u dnevnom boravku i danas — živi.',
        en: 'Still, when the lights come on in the evening and the stone takes on the colour of honey, it is clear why this place is hard to leave. Diocletian built for himself and left it to everyone. Few emperors can say that people still — live in their living room.',
      },
    ],
    vocabulary: [
      {
        hr: 'palača',
        en: 'palace',
        ex: 'U palači se živi već sedamnaest stoljeća.',
      },
      {
        hr: 'izbjeglica',
        en: 'refugee',
        ex: 'Izbjeglice su se sklonile unutar zidina.',
      },
      {
        hr: 'zidine',
        en: 'city walls',
        ex: 'Sklonili su se unutar zidina.',
      },
      {
        hr: 'mauzolej',
        en: 'mausoleum',
        ex: 'Carev mauzolej postao je katedrala.',
      },
      {
        hr: 'jezgra',
        en: 'core (old town)',
        ex: 'U staroj jezgri živi dvije tisuće ljudi.',
      },
      {
        hr: 'spomenik',
        en: 'monument',
        ex: 'Život u spomeniku ima cijenu.',
      },
      {
        hr: 'konzervator',
        en: 'conservator',
        ex: 'Konzervatori i stanari pregovaraju.',
      },
      {
        hr: 'baština',
        en: 'heritage',
        ex: 'Kako živjeti od baštine, a ne potrošiti je?',
      },
    ],
    quiz: [
      {
        q: 'Zašto je palača sačuvana?',
        qEn: 'Why was the palace preserved?',
        opts: [
          'Upravo zbog života u njoj',
          'Jer je bila zaključana',
          'Jer je bila muzej',
          'Jer su je čuvali vojnici',
        ],
        correct: 0,
      },
      {
        q: 'Što je postao carev mauzolej?',
        qEn: 'What did the emperor’s mausoleum become?',
        opts: ['Katedrala', 'Tržnica', 'Kazalište', 'Skladište'],
        correct: 0,
      },
      {
        q: 'Koji problem muči staru jezgru?',
        qEn: 'Which problem troubles the old core?',
        opts: [
          'Zidine se ruše',
          'Previše je muzeja',
          'Stanovi postaju apartmani, mladi odlaze',
          'Nema turista',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b2_9',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🎶',
    title: 'Klapa — pjesma bez instrumenata',
    titleEn: 'Klapa — Song without Instruments',
    duration: 9,
    focus: 'Neodređene zamjenice • Glazbeno nazivlje • Opis tradicije (UNESCO)',
    intro:
      'Klapsko pjevanje uvršteno je na UNESCO-ov popis nematerijalne baštine. Ali za pjevače, klapa je prije svega — prijateljstvo koje pjeva.',
    paragraphs: [
      {
        hr: 'Klapa u dalmatinskom govoru znači društvo, grupa prijatelja. I upravo je to bit klapskog pjevanja: nekoliko muških ili ženskih glasova bez ikakvih instrumenata, poredanih u polukrug, pjeva o moru, ljubavi, maslinama i majci. Prvi tenor vodi melodiju, a ostali ga slijede u skladnim akordima — uho uz uho, rame uz rame.',
        en: 'In the Dalmatian vernacular, klapa means company, a group of friends. And that is precisely the essence of klapa singing: several male or female voices without any instruments, arranged in a semicircle, singing about the sea, love, olives and mother. The first tenor leads the melody and the others follow in harmonious chords — ear to ear, shoulder to shoulder.',
      },
      {
        hr: 'Tradicija je nastala u devetnaestom stoljeću iz crkvenog pjevanja i serenada pod prozorima. Pjevalo se u konobama, na rivi, poslije mise — gdje god su se našla četvorica koje je spajao dobar sluh i još bolja volja. Godine 2012. klapsko je pjevanje uvršteno na UNESCO-ov popis nematerijalne kulturne baštine čovječanstva.',
        en: 'The tradition arose in the nineteenth century from church singing and serenades under windows. People sang in taverns, on the waterfront, after mass — wherever four men were brought together by a good ear and even better will. In 2012 klapa singing was inscribed on UNESCO’s list of the intangible cultural heritage of humanity.',
      },
      {
        hr: 'Ante, prvi bas klape iz Omiša, objašnjava da se u klapi ne traži najljepši glas, nego onaj koji zna slušati: „Solist može biti zvijezda. U klapi si dio zvuka. Ako se tvoj glas čuje previše — pogriješio si." Omiš svake godine ugošćuje najstariji festival klapa, gdje se novi sastavi natječu pred punim trgom.',
        en: 'Ante, first bass of a klapa from Omiš, explains that a klapa does not look for the most beautiful voice, but for the one that knows how to listen: "A soloist can be a star. In a klapa you are part of the sound. If your voice is heard too much — you’ve made a mistake." Every year Omiš hosts the oldest klapa festival, where new groups compete before a packed square.',
      },
      {
        hr: 'Danas klape pjevaju i obrade pop-pjesama, snimaju spotove i pune dvorane, a ženske i mješovite klape odavno su ravnopravne. Puristi ponekad negoduju, ali tradicija koja se ne mijenja — umire. Klapa živi upravo zato što svaka generacija u nju unese nešto svoje.',
        en: 'Today klapas also sing pop covers, record videos and fill concert halls, and female and mixed klapas have long been equals. Purists sometimes grumble, but a tradition that does not change — dies. Klapa lives precisely because every generation brings something of its own to it.',
      },
      {
        hr: 'A najbolje se klapa i dalje čuje tamo gdje je i nastala: uz bocu vina, poslije večere, kad netko tiho počne „Da te mogu pismom zvati" i svi se pogledi sretnu. Tada ni publika ni pozornica nisu potrebni — dovoljno je društvo. Dovoljna je klapa.',
        en: 'And a klapa is still heard at its best where it was born: over a bottle of wine, after dinner, when someone quietly begins "Da te mogu pismom zvati" and all eyes meet. Then neither audience nor stage is needed — company is enough. A klapa is enough.',
      },
    ],
    vocabulary: [
      {
        hr: 'klapa',
        en: 'klapa; group of friends',
        ex: 'Klapa znači društvo, grupa prijatelja.',
      },
      {
        hr: 'polukrug',
        en: 'semicircle',
        ex: 'Pjevači stoje u polukrugu.',
      },
      {
        hr: 'sklad',
        en: 'harmony',
        ex: 'Glasovi se slažu u skladu.',
      },
      {
        hr: 'sluh',
        en: 'ear (for music)',
        ex: 'Spajao ih je dobar sluh.',
      },
      {
        hr: 'nematerijalna baština',
        en: 'intangible heritage',
        ex: 'Uvršteno na popis nematerijalne baštine.',
      },
      {
        hr: 'sastav',
        en: 'ensemble, group',
        ex: 'Novi sastavi natječu se u Omišu.',
      },
      {
        hr: 'obrada',
        en: 'cover (of a song)',
        ex: 'Klape pjevaju i obrade pop-pjesama.',
      },
      {
        hr: 'ravnopravan',
        en: 'equal (in rights)',
        ex: 'Ženske klape odavno su ravnopravne.',
      },
    ],
    quiz: [
      {
        q: 'Što u dalmatinskom govoru znači klapa?',
        qEn: 'What does klapa mean in the Dalmatian vernacular?',
        opts: ['Društvo, grupu prijatelja', 'Crkveni zbor', 'Pjesmu o moru', 'Vrstu konobe'],
        correct: 0,
      },
      {
        q: 'Kada je klapsko pjevanje uvršteno na UNESCO-ov popis?',
        qEn: 'When was klapa singing inscribed on the UNESCO list?',
        opts: ['1991.', '2005.', '1979.', '2012.'],
        correct: 3,
      },
      {
        q: 'Što se po Anti u klapi najviše cijeni?',
        qEn: 'According to Ante, what matters most in a klapa?',
        opts: ['Najjači glas', 'Glas koji zna slušati', 'Solistička karijera', 'Najljepši glas'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_10',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '💻',
    title: 'Ured s pogledom na more',
    titleEn: 'An Office with a Sea View',
    duration: 9,
    focus: 'Argumentacija za i protiv • Kondicional u raspravi • Suvremeno tržište rada',
    intro:
      'Rad na daljinu promijenio je tko može živjeti u Hrvatskoj — i odakle se uopće radi. Rasprava koja dijeli generacije.',
    paragraphs: [
      {
        hr: 'Kad je Marta rekla roditeljima da daje otkaz u zagrebačkoj banci i seli na Korčulu, mama je tjedan dana kuhala u tišini. „A posao?" — „Nosim ga sa sobom." Marta programira za njemačku tvrtku: potreban joj je laptop, stabilan internet i mir. Sve troje na otoku ima — uz pogled kakav nijedan ured ne nudi.',
        en: 'When Marta told her parents she was quitting her job at a Zagreb bank and moving to Korčula, her mum cooked in silence for a week. "And work?" — "I’m taking it with me." Marta codes for a German company: she needs a laptop, stable internet and peace. She has all three on the island — with a view no office can offer.',
      },
      {
        hr: 'Hrvatska je 2021. među prvima u Europi uvela vizu za digitalne nomade, a otoci su počeli privlačiti ljude koji zarađuju u eurima, dolarima i funtama, a troše u lokalnom dućanu. Zimi, kad se apartmani isprazne, upravo oni drže kafiće otvorenima i školu punijom za koje dijete.',
        en: 'In 2021 Croatia was among the first in Europe to introduce a digital-nomad visa, and the islands began attracting people who earn in euros, dollars and pounds, and spend in the local shop. In winter, when the holiday flats empty, it is they who keep the cafés open and the school fuller by a child or two.',
      },
      {
        hr: 'No slika nije samo razglednica. Cijene najma rastu i domaćima, internet zna pasti baš prije važnog sastanka, a trajekt po buri ne pita za rokove. Najteža je, kaže Marta, granica između posla i života: „Kad ti je ured deset koraka od plaže, uvijek si pomalo na poslu — i pomalo na godišnjem."',
        en: 'But the picture is not just a postcard. Rents rise for locals too, the internet tends to drop right before an important meeting, and the ferry in a bura gale does not ask about deadlines. Hardest of all, says Marta, is the boundary between work and life: "When your office is ten steps from the beach, you are always slightly at work — and slightly on holiday."',
      },
      {
        hr: 'Njezin susjed, umirovljeni ribar Frane, isprva je sumnjičavo gledao „malu koja cijeli dan tipka". Onda mu je pomogla postaviti internetsko oglašavanje apartmana i sad je najveći zagovornik novih susjeda. „Otok umire bez mladih", kaže. „Meni je svejedno tipka li netko ili veze mreže — bitno da svijetli prozor."',
        en: 'Her neighbour, the retired fisherman Frane, at first looked askance at "the girl who types all day". Then she helped him set up online advertising for his apartments, and now he is the biggest advocate of the new neighbours. "The island dies without the young," he says. "I don’t care whether someone types or mends nets — what matters is a lit window."',
      },
      {
        hr: 'Marta ne zna hoće li ostati zauvijek. Zna samo da je prvi put u životu na kavi do devet, a na poslu do pet — i da joj se pojam „kvaliteta života" više ne čini kao fraza iz oglasa. Možda je budućnost rada zapravo vrlo stara ideja: raditi da bi se živjelo, a ne obrnuto.',
        en: 'Marta doesn’t know whether she’ll stay forever. She only knows that for the first time in her life she has coffee until nine and works until five — and that the phrase "quality of life" no longer sounds to her like ad copy. Perhaps the future of work is actually a very old idea: working in order to live, not the other way round.',
      },
    ],
    vocabulary: [
      {
        hr: 'rad na daljinu',
        en: 'remote work',
        ex: 'Rad na daljinu promijenio je tržište.',
      },
      {
        hr: 'otkaz',
        en: 'resignation, notice',
        ex: 'Dala je otkaz u banci.',
      },
      {
        hr: 'viza',
        en: 'visa',
        ex: 'Viza za digitalne nomade uvedena je 2021.',
      },
      {
        hr: 'najam',
        en: 'rent',
        ex: 'Cijene najma rastu i domaćima.',
      },
      {
        hr: 'rok',
        en: 'deadline',
        ex: 'Trajekt po buri ne pita za rokove.',
      },
      {
        hr: 'granica',
        en: 'boundary, border',
        ex: 'Granica između posla i života.',
      },
      {
        hr: 'zagovornik',
        en: 'advocate',
        ex: 'Frane je najveći zagovornik novih susjeda.',
      },
      {
        hr: 'pojam',
        en: 'concept, notion',
        ex: 'Pojam kvalitete života nije fraza.',
      },
    ],
    quiz: [
      {
        q: 'Što je Marti potrebno za posao?',
        qEn: 'What does Marta need for her work?',
        opts: ['Ured u gradu', 'Tvrtka u Hrvatskoj', 'Automobil', 'Laptop, internet i mir'],
        correct: 3,
      },
      {
        q: 'Što zimi rade digitalni nomadi za otok?',
        qEn: 'What do digital nomads do for the island in winter?',
        opts: [
          'Odlaze kućama',
          'Grade hotele',
          'Drže kafiće otvorenima i školu punijom',
          'Iznajmljuju apartmane',
        ],
        correct: 2,
      },
      {
        q: 'Što je Frani najvažnije?',
        qEn: 'What matters most to Frane?',
        opts: ['Da svijetli prozor', 'Da je tiho', 'Da se vežu mreže', 'Da nomadi plaćaju najam'],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_b2_11',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🌊',
    title: 'Otok bez plastike',
    titleEn: 'An Island without Plastic',
    duration: 9,
    focus: 'Izražavanje cilja i posljedice • Ekološki rječnik • Se-pasiv u novinskom stilu',
    intro:
      'Mali otok, velika odluka: priča o zajednici koja je rekla ne jednokratnoj plastici — i o tome što se dogodilo poslije.',
    paragraphs: [
      {
        hr: 'Sve je počelo nakon jedne zimske oluje, kad je jugo na žalo naplavilo brdo smeća: boce, vrećice, komade stiropora s uzgajališta. Mještani su ga skupljali tri vikenda. Na trećem je netko rekao ono što su svi mislili: „Čistiti možemo dovijeka. Ili možemo nešto promijeniti."',
        en: 'It all began after a winter storm, when the southerly wind washed a mountain of rubbish onto the beach: bottles, bags, pieces of styrofoam from the fish farms. The locals spent three weekends collecting it. On the third, someone said what everyone was thinking: "We can clean forever. Or we can change something."',
      },
      {
        hr: 'Mjesni je odbor donio odluku kakvu dotad nije imao nijedan hrvatski otok: u trgovini se ukidaju plastične vrećice, kafići prelaze na povratne čaše, a na rivi se postavljaju spremnici za odvojeno prikupljanje otpada. Turistima se na trajektu dijeli platnena vrećica s natpisom „Otok se čuva — čuvaj ga i ti."',
        en: 'The local board made a decision no Croatian island had made before: plastic bags were abolished in the shop, cafés switched to returnable cups, and containers for separate waste collection were installed on the waterfront. Tourists on the ferry are handed a cloth bag with the inscription "The island keeps itself — you keep it too."',
      },
      {
        hr: 'Nije išlo glatko. Trgovkinja Nada isprva se bunila da će izgubiti kupce, konobari su gunđali zbog pranja čaša, a jedan je apartmandžija tvrdio da će „takve komplikacije" otjerati goste. Dogodilo se suprotno: o otoku su pisali strani mediji, a gosti su počeli dolaziti upravo zbog čistog mora i mira bez smeća.',
        en: 'It did not go smoothly. Nada the shopkeeper protested at first that she would lose customers, waiters grumbled about washing cups, and one apartment owner claimed that "such complications" would drive guests away. The opposite happened: foreign media wrote about the island, and guests began coming precisely for the clean sea and rubbish-free peace.',
      },
      {
        hr: 'Djeca iz jedine škole na otoku postala su „zeleni inspektori": svakog mjeseca važu otpad i rezultate objavljuju na oglasnoj ploči ispred crkve. Količina miješanog otpada pala je za trećinu u dvije godine. „Odrasli se natječu tko će imati manje", smije se učiteljica. „Nitko ne želi da ga prozovu djeca."',
        en: 'The children from the island’s only school became "green inspectors": every month they weigh the waste and post the results on the noticeboard in front of the church. The amount of mixed waste fell by a third in two years. "The adults compete over who will have less," laughs the teacher. "Nobody wants to be called out by the children."',
      },
      {
        hr: 'Otok nije spasio svijet i njegovi žitelji to znaju. Ali svako žalo koje se više ne mora čistiti svaki vikend dokaz je da se velike promjene ponekad donose malom većinom — na mjesnom odboru, u veljači, kad trajekt kasni i kad se čini da vas nitko ne gleda.',
        en: 'The island has not saved the world and its inhabitants know it. But every beach that no longer needs cleaning every weekend is proof that big changes are sometimes made by a small majority — at the local board, in February, when the ferry is late and it seems no one is watching.',
      },
    ],
    vocabulary: [
      {
        hr: 'jednokratna plastika',
        en: 'single-use plastic',
        ex: 'Otok je rekao ne jednokratnoj plastici.',
      },
      {
        hr: 'žalo',
        en: 'pebble beach',
        ex: 'Jugo je na žalo naplavilo smeće.',
      },
      {
        hr: 'naplaviti',
        en: 'to wash ashore',
        ex: 'Oluja je naplavila brdo smeća.',
      },
      {
        hr: 'mjesni odbor',
        en: 'local board',
        ex: 'Mjesni odbor donio je odluku.',
      },
      {
        hr: 'povratna čaša',
        en: 'returnable cup',
        ex: 'Kafići prelaze na povratne čaše.',
      },
      {
        hr: 'spremnik',
        en: 'container, bin',
        ex: 'Postavljeni su spremnici za otpad.',
      },
      {
        hr: 'otpad',
        en: 'waste',
        ex: 'Odvojeno prikupljanje otpada.',
      },
      {
        hr: 'žitelj',
        en: 'inhabitant',
        ex: 'Žitelji otoka to znaju.',
      },
    ],
    quiz: [
      {
        q: 'Što je pokrenulo promjenu?',
        qEn: 'What set off the change?',
        opts: [
          'Smeće koje je oluja naplavila na žalo',
          'Turistička sezona',
          'Odluka ministarstva',
          'Novi načelnik',
        ],
        correct: 0,
      },
      {
        q: 'Tko su „zeleni inspektori"?',
        qEn: 'Who are the "green inspectors"?',
        opts: ['Djeca iz škole', 'Turisti', 'Policajci', 'Konobari'],
        correct: 0,
      },
      {
        q: 'Za koliko je pao miješani otpad?',
        qEn: 'By how much did mixed waste fall?',
        opts: ['Za polovinu', 'Za desetinu', 'Nije pao', 'Za trećinu'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b2_12',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '📱',
    title: 'Generacija ekrana',
    titleEn: 'The Screen Generation',
    duration: 9,
    focus: 'Izražavanje mišljenja i neslaganja • Statistički izrazi • Rasprava o društvu',
    intro:
      'Koliko je sati previše? Razgovor o mladima i ekranima u kojem nitko nema potpuno pravo — ni potpuno krivo.',
    paragraphs: [
      {
        hr: 'U obitelji Kovačević večera počinje istim ritualom: mobiteli u košaru na polici. Pravilo je uvela mama Sanja nakon što je shvatila da za stolom sjede četiri osobe i — četiri ekrana. „Nismo razgovarali, nego smo se jedni drugima javljali", kaže. Najteže se odvikavala, priznaje, ona sama.',
        en: 'In the Kovačević family, dinner begins with the same ritual: phones into the basket on the shelf. Mum Sanja introduced the rule after realizing that four people were sitting at the table with — four screens. "We weren’t talking, we were messaging each other," she says. The hardest to wean off, she admits, was she herself.',
      },
      {
        hr: 'Istraživanja pokazuju da hrvatski srednjoškolci na ekranima provode u prosjeku više od pet sati dnevno, a svaki četvrti kaže da bi se „teško ili nikako" mogao odvojiti od mobitela na jedan dan. Psihologinja Ivana Radić upozorava da problem nije ekran, nego ono što istiskuje: san, kretanje i dosadu — „a iz dosade se, začudo, rađaju najbolje ideje".',
        en: 'Research shows that Croatian secondary-school pupils spend on average more than five hours a day on screens, and one in four says they could "hardly or not at all" part with their phone for a single day. Psychologist Ivana Radić warns that the problem is not the screen but what it crowds out: sleep, movement and boredom — "and out of boredom, oddly enough, the best ideas are born".',
      },
      {
        hr: 'Šesnaestogodišnji Karlo na to ima protuargument koji roditelji nerado čuju: na mobitelu uči engleski, montira video-uratke i vodi grupu za pripremu mature. „Vi ste imali kvart, mi imamo internet. Nije pitanje koliko sam na ekranu, nego što na njemu radim." Njegova baka dodaje da se isto govorilo i o televiziji — pa su svi preživjeli.',
        en: 'Sixteen-year-old Karlo has a counter-argument parents are reluctant to hear: on his phone he learns English, edits videos and runs a matura-prep group. "You had the neighbourhood, we have the internet. The question isn’t how long I’m on the screen, but what I do on it." His grandma adds that the same used to be said about television — and everyone survived.',
      },
      {
        hr: 'Škole traže svoj put između zabrane i zanemarivanja. Neke su uvele „ladice za mobitele" na početku sata, druge medijsku pismenost kao izborni predmet. Profesorica informatike iz Osijeka sažima ono oko čega se struka uglavnom slaže: „Zabrana bez razgovora samo seli problem u hodnik."',
        en: 'Schools are seeking their own path between prohibition and neglect. Some have introduced "phone drawers" at the start of class, others media literacy as an elective subject. An informatics teacher from Osijek sums up what the profession broadly agrees on: "A ban without conversation merely moves the problem into the corridor."',
      },
      {
        hr: 'Kod Kovačevićevih košara je i dalje na polici, ali uz novo pravilo koje je predložio — Karlo: nedjeljom poslijepodne svi zajedno biraju film. S ekranom, dakako. Možda je u tome cijela mudrost: ekran koji spaja umjesto onoga koji razdvaja.',
        en: 'At the Kovačevićs’ the basket is still on the shelf, but with a new rule proposed by — Karlo: on Sunday afternoons they all choose a film together. With a screen, of course. Perhaps that is the whole wisdom: a screen that connects instead of one that divides.',
      },
    ],
    vocabulary: [
      {
        hr: 'ekran',
        en: 'screen',
        ex: 'Za stolom su sjedila četiri ekrana.',
      },
      {
        hr: 'odviknuti se',
        en: 'to wean oneself off',
        ex: 'Najteže se odvikavala mama.',
      },
      {
        hr: 'u prosjeku',
        en: 'on average',
        ex: 'Više od pet sati dnevno u prosjeku.',
      },
      {
        hr: 'istisnuti',
        en: 'to crowd out, displace',
        ex: 'Ekran istiskuje san i kretanje.',
      },
      {
        hr: 'protuargument',
        en: 'counter-argument',
        ex: 'Karlo ima protuargument.',
      },
      {
        hr: 'medijska pismenost',
        en: 'media literacy',
        ex: 'Uveli su medijsku pismenost kao predmet.',
      },
      {
        hr: 'zanemarivanje',
        en: 'neglect',
        ex: 'Put između zabrane i zanemarivanja.',
      },
      {
        hr: 'razdvajati',
        en: 'to divide, separate',
        ex: 'Ekran koji spaja, a ne razdvaja.',
      },
    ],
    quiz: [
      {
        q: 'Koje je pravilo uvela mama Sanja?',
        qEn: 'Which rule did mum Sanja introduce?',
        opts: [
          'Mobitel tek nakon zadaće',
          'Mobiteli u košaru za vrijeme večere',
          'Sat ekrana dnevno',
          'Zabrana interneta',
        ],
        correct: 1,
      },
      {
        q: 'Što po psihologinji ekran istiskuje?',
        qEn: 'According to the psychologist, what does the screen crowd out?',
        opts: ['Prijatelje', 'Obitelj', 'Školu', 'San, kretanje i dosadu'],
        correct: 3,
      },
      {
        q: 'Što je predložio Karlo?',
        qEn: 'What did Karlo propose?',
        opts: [
          'Ukidanje košare',
          'Novi mobitel',
          'Zajednički film nedjeljom',
          'Više vremena za igrice',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b2_13',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '☕',
    title: 'Kava od tri sata',
    titleEn: 'The Three-Hour Coffee',
    duration: 8,
    focus: 'Frazemi i kolokacije uz kavu • Društvene konvencije • Ironija i humor',
    intro:
      'U Hrvatskoj „idemo na kavu" rijetko znači kavu. To je institucija, mjera vremena i način života — na užas svakog rokovnika.',
    paragraphs: [
      {
        hr: 'Stranci koji dođu živjeti u Hrvatsku najprije nauče dvije stvari: da se papiri vade „od šalterskog do šalterskog" i da poziv na kavu nema nikakve veze s kavom. Na kavu se ide kad se slavi, kad se tuguje, kad se nešto dogovara i kad se nema što raditi — dakle, uvijek.',
        en: 'Foreigners who come to live in Croatia first learn two things: that paperwork is done "from one counter to the next", and that an invitation for coffee has nothing to do with coffee. One goes for coffee to celebrate, to grieve, to arrange something and when there is nothing to do — in other words, always.',
      },
      {
        hr: 'Prosječna kava u kafiću traje sat i pol, a subotnja i po tri — jer se s kavom ne žuri. Konobar vas neće požurivati ni kad odavno gledate u praznu šalicu: stol je vaš dok god ga ne napustite. Poslovni ljudi iz Njemačke na tome dožive kulturni šok, a onda se, u pravilu, oduševe.',
        en: 'An average coffee in a café lasts an hour and a half, and a Saturday one up to three — because coffee is not to be rushed. The waiter will not hurry you even when you have long been staring into an empty cup: the table is yours as long as you don’t leave it. Business people from Germany suffer culture shock over this — and then, as a rule, fall in love with it.',
      },
      {
        hr: 'Kava ima i svoju gramatiku. „Idemo na kavu" znači druženje. „Moramo na kavu" znači da postoji tema. „Naći ćemo se na kavi" može značiti bilo što između sutra i nikad. A najozbiljnija od svih poruka glasi: „Dođi na kavu, imam ti nešto za reći" — tu se otkazuju svi drugi planovi.',
        en: 'Coffee also has its own grammar. "Let’s go for coffee" means socializing. "We must go for coffee" means there is a topic. "We’ll meet for coffee" can mean anything between tomorrow and never. And the most serious message of all reads: "Come for coffee, I have something to tell you" — for that one, all other plans are cancelled.',
      },
      {
        hr: 'Ekonomisti povremeno izračunaju koliko nas nacionalno ispijanje kave košta u radnim satima, i brojke su uvijek dramatične. Ali te tablice ne mjere ono najvažnije: da se uz kavu čuvaju brakovi, sklapaju poslovi, prebrode krize i drže na okupu kvartovi. Neke se investicije ne vide u proračunu.',
        en: 'Economists occasionally calculate how much our national coffee-drinking costs in working hours, and the figures are always dramatic. But those tables do not measure what matters most: that over coffee marriages are saved, deals are made, crises are weathered and neighbourhoods held together. Some investments do not show up in the budget.',
      },
      {
        hr: 'Zato, ako vas netko u Hrvatskoj pozove na kavu — pristanite. Ne pijete li kavu, naručite čaj, sok ili ništa: nitko neće ni primijetiti. Kava je, kao što svaki domaći zna, samo izgovor. Ono pravo dolazi u razgovoru, negdje između druge i treće šalice koje niste ni popili.',
        en: 'So, if someone in Croatia invites you for coffee — say yes. If you don’t drink coffee, order tea, juice or nothing: no one will even notice. Coffee, as every local knows, is only an excuse. The real thing arrives in the conversation, somewhere between the second and third cup you never even drank.',
      },
    ],
    vocabulary: [
      {
        hr: 'šalter',
        en: 'counter, service window',
        ex: 'Papiri se vade od šalterskog do šalterskog.',
      },
      {
        hr: 'požurivati',
        en: 'to hurry (someone)',
        ex: 'Konobar vas neće požurivati.',
      },
      {
        hr: 'šalica',
        en: 'cup',
        ex: 'Gledate u praznu šalicu.',
      },
      {
        hr: 'druženje',
        en: 'socializing',
        ex: 'Kava znači druženje.',
      },
      {
        hr: 'otkazati',
        en: 'to cancel',
        ex: 'Otkazuju se svi drugi planovi.',
      },
      {
        hr: 'prebroditi',
        en: 'to weather, overcome',
        ex: 'Uz kavu se prebrode krize.',
      },
      {
        hr: 'proračun',
        en: 'budget',
        ex: 'Neke se investicije ne vide u proračunu.',
      },
      {
        hr: 'izgovor',
        en: 'excuse, pretext',
        ex: 'Kava je samo izgovor.',
      },
    ],
    quiz: [
      {
        q: 'Koliko traje prosječna kava u kafiću?',
        qEn: 'How long does an average café coffee last?',
        opts: ['Cijeli dan', 'Petnaest minuta', 'Pola sata', 'Sat i pol'],
        correct: 3,
      },
      {
        q: 'Što znači poruka „Dođi na kavu, imam ti nešto za reći"?',
        qEn: 'What does "Come for coffee, I have something to tell you" mean?',
        opts: [
          'Da je kava gotova',
          'Ništa posebno',
          'Poziv na posao',
          'Otkazuju se svi drugi planovi',
        ],
        correct: 3,
      },
      {
        q: 'Što je kava, prema tekstu, zapravo?',
        qEn: 'According to the text, what is coffee really?',
        opts: ['Poslovni ritual', 'Nacionalno piće', 'Gubitak vremena', 'Izgovor za razgovor'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_c1_8',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🗣️',
    title: 'Tri riječi za kuću',
    titleEn: 'Three Words for House',
    duration: 10,
    focus: 'Dijalektologija • Metajezični rječnik • Složene odnosne rečenice',
    intro:
      'Kajkavski, čakavski, štokavski: tri narječja, tri glazbe istog jezika. Zašto Hrvati iz različitih krajeva katkad zvuče kao stranci — i zašto je to bogatstvo.',
    paragraphs: [
      {
        hr: 'Pitate li Zagorca, Splićanina i Slavonca kako kažu „što", dobit ćete tri odgovora: kaj, ča i što. Po tim se zamjenicama tri hrvatska narječja i zovu — kajkavsko, čakavsko i štokavsko. Standardni je jezik izgrađen na štokavskoj osnovici, ali narječja nisu njegova iskrivljenja, nego stariji, ravnopravni ogranci istoga stabla: čakavski je, primjerice, sačuvao naglasni sustav stariji od većine onoga što se danas čuje u Europi.',
        en: 'Ask someone from Zagorje, Split and Slavonia how they say "what" and you will get three answers: kaj, ča and što. The three Croatian dialect groups are named after those pronouns — Kajkavian, Chakavian and Shtokavian. The standard language was built on a Shtokavian base, but the dialects are not corruptions of it; they are older, equal branches of the same tree: Chakavian, for instance, has preserved an accentual system older than most of what can be heard in Europe today.',
      },
      {
        hr: 'Dijalekt je desetljećima nosio žig provincije: u školi se ispravljao, na radiju izbjegavao, a govornike je pratio osjećaj da njihov materinski govor „nije pravi jezik". Lingvisti su, srećom, mislili drukčije. Godine 2019. kajkavski je književni jezik — onaj kojim su pisali Krleža u Baladama i stari zagorski pisci — dobio i međunarodni jezični kod, a čakavska poezija odavno ulazi u školske čitanke.',
        en: 'For decades dialect carried the stigma of the provinces: it was corrected at school, avoided on the radio, and its speakers were haunted by the feeling that their mother tongue was "not a real language". Linguists, fortunately, thought otherwise. In 2019 the Kajkavian literary language — the one Krleža wrote his Ballads in, along with the old Zagorje writers — received an international language code, and Chakavian poetry has long since entered school readers.',
      },
      {
        hr: 'Napetost između standarda i zavičajnoga govora svaki govornik rješava sam. Novinarka rođena u Bednji — čiji se mjesni govor smatra jednim od najosebujnijih u Hrvatskoj — priča kako je na poslu godinama „prevodila samu sebe", a onda shvatila da upravo zbog dvoglasja bolje čuje jezik od kolega: tko od djetinjstva živi u dva sustava, taj o oba misli svjesnije.',
        en: 'Every speaker resolves the tension between the standard and the home vernacular in their own way. A journalist born in Bednja — whose local speech is considered among the most distinctive in Croatia — tells how at work she "translated herself" for years, and then realized that precisely because of that double voice she hears language better than her colleagues: whoever grows up living in two systems thinks about both more consciously.',
      },
      {
        hr: 'Danas se narječja vraćaju na velika vrata: mladi na društvenim mrežama pišu kajkavski i čakavski bez srama, dijalektalni se rap sluša od Čakovca do Kaštela, a festivali poput Croatia rediviva čuvaju ča-kaj-što kao trojstvo, ne kao natjecanje. Jer jezik nije samo sredstvo sporazumijevanja — on je pamćenje. A narod koji pamti na tri načina, bogatiji je tri puta.',
        en: 'Today the dialects are returning through the front door: young people write Kajkavian and Chakavian on social media without shame, dialect rap is listened to from Čakovec to Kaštela, and festivals such as Croatia rediviva guard ča-kaj-što as a trinity, not a competition. For language is not merely a means of communication — it is memory. And a people that remembers in three ways is three times richer.',
      },
    ],
    vocabulary: [
      {
        hr: 'narječje',
        en: 'dialect group',
        ex: 'Tri hrvatska narječja: kajkavsko, čakavsko i štokavsko.',
      },
      {
        hr: 'osnovica',
        en: 'base, foundation',
        ex: 'Standard je izgrađen na štokavskoj osnovici.',
      },
      {
        hr: 'iskrivljenje',
        en: 'distortion, corruption',
        ex: 'Narječja nisu iskrivljenja standarda.',
      },
      {
        hr: 'žig',
        en: 'stamp, stigma',
        ex: 'Dijalekt je nosio žig provincije.',
      },
      {
        hr: 'materinski govor',
        en: 'mother tongue',
        ex: 'Njihov materinski govor nije „pogrešan".',
      },
      {
        hr: 'osebujan',
        en: 'distinctive, peculiar',
        ex: 'Bednjanski je govor izrazito osebujan.',
      },
      {
        hr: 'zavičajni',
        en: 'of one’s home region',
        ex: 'Napetost standarda i zavičajnoga govora.',
      },
      {
        hr: 'sporazumijevanje',
        en: 'communication, mutual understanding',
        ex: 'Jezik nije samo sredstvo sporazumijevanja.',
      },
    ],
    quiz: [
      {
        q: 'Po čemu su narječja dobila imena?',
        qEn: 'After what are the dialect groups named?',
        opts: ['Po regijama', 'Po zamjenici za „što"', 'Po rijekama', 'Po piscima'],
        correct: 1,
      },
      {
        q: 'Što se dogodilo 2019. godine?',
        qEn: 'What happened in 2019?',
        opts: [
          'Čakavski je zabranjen',
          'Bednja je postala grad',
          'Kajkavski književni jezik dobio je međunarodni kod',
          'Standard je promijenjen',
        ],
        correct: 2,
      },
      {
        q: 'Što je jezik prema završetku teksta?',
        qEn: 'According to the ending, what is language?',
        opts: ['Prepreka', 'Sredstvo bez vrijednosti', 'Natjecanje', 'Pamćenje'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_c1_9',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🏖️',
    title: 'Zlatna koka i njezina jaja',
    titleEn: 'The Golden Hen and Her Eggs',
    duration: 10,
    focus: 'Argumentacija s ustupcima • Ekonomsko nazivlje • Ironijski otklon',
    intro:
      'Turizam čini petinu hrvatskoga gospodarstva — brojka kojom se drugi hvale, a ekonomisti zbog nje ne spavaju. Analiza zemlje koja živi od ljeta.',
    paragraphs: [
      {
        hr: 'U Hrvatskoj se turizam od milja zove „zlatna koka", i brojke tom nadimku daju za pravo: gotovo petina bruto domaćeg proizvoda, dvadesetak milijuna dolazaka godišnje, pune terase od Umaga do Cavtata. Malo koja europska zemlja toliko ovisi o jednoj djelatnosti — i upravo je to, upozoravaju ekonomisti, druga strana medalje: koka koja nese zlatna jaja može i prehladiti se.',
        en: 'In Croatia tourism is affectionately called "the golden hen", and the figures justify the nickname: nearly a fifth of gross domestic product, some twenty million arrivals a year, full terraces from Umag to Cavtat. Few European countries depend so heavily on a single industry — and that, economists warn, is the other side of the coin: a hen that lays golden eggs can also catch a cold.',
      },
      {
        hr: 'Ovisnost o sezoni vidi se najbolje u studenome, kad se poluotoci isprazne, konobe pozatvaraju, a tisuće sezonskih radnika odjave s burze tek dogodine u svibnju. Obalni gradovi žive četiri mjeseca na godinu, a preostalih osam broje dane; ekonomisti to zovu monokulturom, a stanovnici — čekanjem. Svaki potres na emitivnim tržištima, od pandemije do inflacije, ovdje se osjeti dvostruko.',
        en: 'Dependence on the season is most visible in November, when the peninsulas empty, the taverns shut one after another, and thousands of seasonal workers sign off the employment register until the following May. Coastal towns live four months a year and count the days for the remaining eight; economists call it a monoculture, the residents call it waiting. Every tremor in the source markets, from pandemic to inflation, is felt here twice over.',
      },
      {
        hr: 'Druga je cijena manje vidljiva u tablicama: apartmanizacija guta prostor, najam istiskuje domaće iz starih jezgri, a komunalna infrastruktura ljeti radi na granici pucanja. Otoci ostaju bez mladih, jer je isplativije iznajmiti tri sobe nego pokrenuti obrt. „Prodajemo ono od čega živimo", kaže sociolog s riječkog sveučilišta, „a čudimo se što nam ga je sve manje."',
        en: 'The other price is less visible in the spreadsheets: apartment-building devours space, rents push locals out of the old town cores, and the utility infrastructure runs at breaking point in summer. The islands are losing their young, because letting three rooms pays better than starting a trade. "We are selling the very thing we live off," says a sociologist from the university in Rijeka, "and then wonder why there is less and less of it."',
      },
      {
        hr: 'Rješenja se znaju napamet — produljenje sezone, kongresni i zdravstveni turizam, povratak poljoprivredi i industriji znanja — i svaki ih strateški dokument uredno nabraja. No mijenjati model dok novac pristiže znači rezati granu na kojoj se ugodno sjedi, pa se reforme odgađaju do prve krize. A koka, strpljiva, nese dalje. Do prve prehlade.',
        en: 'The solutions are known by heart — extending the season, congress and health tourism, a return to agriculture and the knowledge industry — and every strategic document dutifully lists them. But changing the model while the money keeps arriving means sawing off the branch one sits on so comfortably, and so the reforms are postponed until the first crisis. And the hen, patient, keeps laying. Until the first cold.',
      },
    ],
    vocabulary: [
      {
        hr: 'bruto domaći proizvod',
        en: 'gross domestic product',
        ex: 'Turizam čini petinu BDP-a.',
      },
      {
        hr: 'djelatnost',
        en: 'industry, activity',
        ex: 'Ovisnost o jednoj djelatnosti.',
      },
      {
        hr: 'burza (rada)',
        en: 'employment office',
        ex: 'Radnici se odjave s burze.',
      },
      {
        hr: 'monokultura',
        en: 'monoculture',
        ex: 'Ekonomisti to zovu monokulturom.',
      },
      {
        hr: 'apartmanizacija',
        en: 'proliferation of holiday flats',
        ex: 'Apartmanizacija guta prostor.',
      },
      {
        hr: 'obrt',
        en: 'trade, small business',
        ex: 'Isplativije je iznajmljivati nego pokrenuti obrt.',
      },
      {
        hr: 'isplativ',
        en: 'profitable',
        ex: 'Najam je isplativiji od obrta.',
      },
      {
        hr: 'produljenje',
        en: 'extension, prolongation',
        ex: 'Produljenje sezone stalna je tema.',
      },
    ],
    quiz: [
      {
        q: 'Koliki udio BDP-a čini turizam?',
        qEn: 'What share of GDP does tourism make up?',
        opts: ['Polovinu', 'Desetinu', 'Gotovo petinu', 'Trećinu'],
        correct: 2,
      },
      {
        q: 'Što se događa u studenome?',
        qEn: 'What happens in November?',
        opts: [
          'Obala se isprazni, a sezonci odjave s burze',
          'Otvaraju se konobe',
          'Rastu cijene najma',
          'Počinje nova sezona',
        ],
        correct: 0,
      },
      {
        q: 'Zašto se reforme odgađaju?',
        qEn: 'Why are reforms postponed?',
        opts: [
          'Jer nema turista',
          'Jer novac i dalje pristiže',
          'Jer nema strategija',
          'Jer ih zabranjuje EU',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_10',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '👧',
    title: 'Dijete s dva jezika',
    titleEn: 'A Child with Two Languages',
    duration: 10,
    focus: 'Psiholingvistika • Savjetodavni registar • Kondicionalne strukture',
    intro:
      'Milijuni hrvatske djece odrastaju izvan Hrvatske, između jezika škole i jezika nedjeljnog ručka. Što znanost kaže o dvojezičnom odrastanju — a što bake?',
    paragraphs: [
      {
        hr: 'U subotu ujutro u hrvatskim dopunskim školama od Münchena do Melbournea sjede djeca koja hrvatski čuju uglavnom nedjeljom, preko videopoziva s bakom. Roditelji ih dovode s istom tihom nadom: da jezik ne završi s njihovom generacijom. I s istim strahom: hoće li dijete miješati jezike, zaostati u školi, zbuniti se?',
        en: 'On Saturday mornings, in Croatian supplementary schools from Munich to Melbourne, sit children who hear Croatian mostly on Sundays, over a video call with grandma. Parents bring them with the same quiet hope: that the language should not end with their generation. And with the same fear: will the child mix languages, fall behind at school, get confused?',
      },
      {
        hr: 'Znanost je tu neuobičajeno jednoglasna: neće. Dvojezična djeca katkad progovore koji mjesec kasnije i posuđuju riječi iz jednog jezika u drugi, ali to nije zbrka, nego strategija — mozak poseže za najbržom dostupnom riječju. Dugoročne su prednosti mjerljive: lakše prebacivanje pažnje, bolje razumijevanje tuđih perspektiva i, u starosti, otpornija memorija. Uvjet je samo jedan: da oba jezika dobiju dovoljno životnoga prostora.',
        en: 'Science is unusually unanimous here: they will not. Bilingual children sometimes start speaking a few months later and borrow words from one language into the other, but that is not confusion, it is strategy — the brain reaches for the fastest available word. The long-term advantages are measurable: easier switching of attention, better understanding of other perspectives and, in old age, a more resilient memory. There is only one condition: that both languages get enough living space.',
      },
      {
        hr: 'Upravo tu nastaje problem koji lingvisti zovu nasljednim jezikom: hrvatski tih mališana često ostaje „kuhinjski" — savršen za juhu, sarmu i laku noć, preslab za raspravu o klimatskim promjenama. Razumiju sve, odgovaraju na engleskom ili njemačkom, a padeži im klize. Stručnjaci savjetuju ono što zvuči jednostavno, a traži disciplinu: čitati na hrvatskom, gledati crtiće na hrvatskom i — najvažnije — ne ispravljati svaku pogrešku, nego razgovarati dalje.',
        en: 'This is exactly where the problem linguists call a heritage language arises: those children’s Croatian often remains "kitchen Croatian" — perfect for soup, sarma and goodnight, too weak for a debate on climate change. They understand everything, answer in English or German, and their cases slip. Experts advise what sounds simple and demands discipline: read in Croatian, watch cartoons in Croatian and — most importantly — don’t correct every mistake, keep the conversation going.',
      },
      {
        hr: 'A bake, koje o psiholingvistici ne znaju ništa, znaju ono glavno. „Ja s njom govorim samo hrvatski", kaže baka Anka iz Toronta o unuci, „pa neka odgovara kako hoće. Jednog dana će joj moje riječi zatrebati." Istraživanja joj daju za pravo: djeca koja jezik vežu uz osobu koju vole, uče ga dublje od svake škole. Jezik se, pokazuje se, ne prenosi gramatikama — prenosi se ljubavlju.',
        en: 'And the grandmothers, who know nothing about psycholinguistics, know the main thing. "I speak only Croatian with her," says grandma Anka from Toronto about her granddaughter, "and let her answer however she likes. One day she will need my words." Research proves her right: children who tie a language to a person they love learn it more deeply than any school can teach. Language, it turns out, is not passed on by grammars — it is passed on by love.',
      },
    ],
    vocabulary: [
      {
        hr: 'dopunska škola',
        en: 'supplementary school',
        ex: 'Subotom idu u hrvatsku dopunsku školu.',
      },
      {
        hr: 'dvojezičan',
        en: 'bilingual',
        ex: 'Dvojezična djeca ne zaostaju.',
      },
      {
        hr: 'posuđivati',
        en: 'to borrow',
        ex: 'Posuđuju riječi iz jednog jezika u drugi.',
      },
      {
        hr: 'mjerljiv',
        en: 'measurable',
        ex: 'Prednosti su mjerljive.',
      },
      {
        hr: 'nasljedni jezik',
        en: 'heritage language',
        ex: 'Lingvisti to zovu nasljednim jezikom.',
      },
      {
        hr: 'mališan',
        en: 'little one, child',
        ex: 'Hrvatski tih mališana ostaje „kuhinjski".',
      },
      {
        hr: 'ispravljati',
        en: 'to correct',
        ex: 'Ne ispravljati svaku pogrešku.',
      },
      {
        hr: 'prenositi',
        en: 'to pass on, transmit',
        ex: 'Jezik se prenosi ljubavlju.',
      },
    ],
    quiz: [
      {
        q: 'Što znanost kaže o miješanju jezika?',
        qEn: 'What does science say about language mixing?',
        opts: [
          'To treba kažnjavati',
          'To je strategija, a ne zbrka',
          'To je znak zaostajanja',
          'To je rijetko',
        ],
        correct: 1,
      },
      {
        q: 'Što je „kuhinjski" hrvatski?',
        qEn: 'What is "kitchen" Croatian?',
        opts: [
          'Jezik dovoljan za dom, preslab za rasprave',
          'Jezik dopunske škole',
          'Dijalekt',
          'Jezik recepata',
        ],
        correct: 0,
      },
      {
        q: 'Čime se jezik prema tekstu prenosi?',
        qEn: 'According to the text, how is language passed on?',
        opts: ['Gramatikama', 'Testovima', 'Ljubavlju', 'Televizijom'],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c1_11',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '⚡',
    title: 'Čovjek koji je upalio svjetlo',
    titleEn: 'The Man Who Turned On the Light',
    duration: 10,
    focus: 'Biografski registar • Pasiv u historiografiji • Vremenske rečenice',
    intro:
      'Rodio se u ličkom selu za grmljavinske noći, a umro u njujorškom hotelu s golubicom na prozoru. Nikola Tesla — život između munje i tišine.',
    paragraphs: [
      {
        hr: 'U noći između 9. i 10. srpnja 1856., dok je nad Smiljanom bjesnjela oluja, rodio se dječak kojega će svijet pamtiti po munjama. Primalja je, kažu, rekla da će dijete rođeno u takvoj noći biti dijete tame. „Ne", odgovorila je majka Đuka, „bit će dijete svjetla." Malo je proročanstava u povijesti tako uredno ispunjeno.',
        en: 'On the night between the 9th and 10th of July 1856, while a storm raged over Smiljan, a boy was born whom the world would remember for lightning. The midwife, they say, remarked that a child born on such a night would be a child of darkness. "No," replied his mother Đuka, "he will be a child of light." Few prophecies in history have been fulfilled so neatly.',
      },
      {
        hr: 'Otac, pravoslavni svećenik, namijenio mu je bogosloviju; sin je birao struju. Preko Graza i Praga stigao je u Budimpeštu, gdje mu je u parku, usred recitiranja Goethea, sinula ideja okretnoga magnetskog polja — temelj izmjenične struje. Godine 1884. iskrcao se u New Yorku s četiri centa u džepu i preporukom u kojoj je, prema legendi, pisalo: „Poznajem dva velika čovjeka — jedan ste vi, drugi je ovaj mladić."',
        en: 'His father, an Orthodox priest, intended him for the seminary; the son chose electricity. Via Graz and Prague he reached Budapest, where, in a park, in the middle of reciting Goethe, the idea of the rotating magnetic field came to him — the foundation of alternating current. In 1884 he disembarked in New York with four cents in his pocket and a letter of recommendation which, according to legend, read: "I know two great men — one is you, the other is this young man."',
      },
      {
        hr: 'Uslijedio je „rat struja" protiv Edisona, pobjeda izmjenične struje na Svjetskoj izložbi u Chicagu i hidroelektrana na Niagari, kojom je Teslin sustav osvijetlio kontinent. No izumitelj kojemu se pripisuje više od tristo patenata za novac nikad nije mario: ugovore je derao kad bi prijateljima zaprijetio bankrot, a bogatstvo je potrošio na laboratorije i viziju bežičnoga prijenosa energije koju svijet ni danas nije dostigao.',
        en: 'There followed the "war of the currents" against Edison, the victory of alternating current at the Chicago World’s Fair, and the hydroelectric plant at Niagara, with which Tesla’s system lit a continent. Yet the inventor credited with more than three hundred patents never cared for money: he tore up contracts when bankruptcy threatened his friends, and spent his fortune on laboratories and a vision of wireless energy transmission the world has not reached even today.',
      },
      {
        hr: 'Umro je sam, u hotelskoj sobi 3327, među bilježnicama i mrvicama za golubove. Danas mu ime nose jedinica magnetske indukcije, najpoznatija tvornica automobila na svijetu i zračna luka u Beogradu; Smiljan mu čuva rodnu kuću, a Zagreb ulicu i institut. Hrvatska i Srbija katkad se spore čiji je više — a on bi, vjerojatno, odgovorio kao i za života: da pripada budućnosti.',
        en: 'He died alone, in hotel room 3327, among notebooks and crumbs for the pigeons. Today his name is borne by the unit of magnetic induction, the most famous car factory in the world and Belgrade’s airport; Smiljan keeps his birth house, Zagreb a street and an institute. Croatia and Serbia sometimes quarrel over whose he is more — and he would probably answer as he did in life: that he belongs to the future.',
      },
    ],
    vocabulary: [
      {
        hr: 'primalja',
        en: 'midwife',
        ex: 'Primalja je rekla da će biti dijete tame.',
      },
      {
        hr: 'proročanstvo',
        en: 'prophecy',
        ex: 'Malo je proročanstava tako ispunjeno.',
      },
      {
        hr: 'bogoslovija',
        en: 'seminary',
        ex: 'Otac mu je namijenio bogosloviju.',
      },
      {
        hr: 'izmjenična struja',
        en: 'alternating current',
        ex: 'Temelj izmjenične struje.',
      },
      {
        hr: 'izumitelj',
        en: 'inventor',
        ex: 'Izumitelj s tristo patenata.',
      },
      {
        hr: 'patent',
        en: 'patent',
        ex: 'Pripisuje mu se više od tristo patenata.',
      },
      {
        hr: 'bežični',
        en: 'wireless',
        ex: 'Vizija bežičnoga prijenosa energije.',
      },
      {
        hr: 'pripadati',
        en: 'to belong',
        ex: 'Odgovorio bi da pripada budućnosti.',
      },
    ],
    quiz: [
      {
        q: 'Gdje je Tesli sinula ideja okretnoga magnetskog polja?',
        qEn: 'Where did the idea of the rotating magnetic field come to Tesla?',
        opts: ['U Smiljanu', 'U parku u Budimpešti', 'Na Niagari', 'U New Yorku'],
        correct: 1,
      },
      {
        q: 'Kako se Tesla odnosio prema novcu?',
        qEn: 'How did Tesla treat money?',
        opts: [
          'Ulagao je u dionice',
          'Ostavio ga je obitelji',
          'Skupljao ga je',
          'Nije za njega mario',
        ],
        correct: 3,
      },
      {
        q: 'Što je majka Đuka prorekla?',
        qEn: 'What did his mother Đuka foretell?',
        opts: [
          'Da će biti bogat',
          'Da će otići u Ameriku',
          'Da će biti svećenik',
          'Da će biti dijete svjetla',
        ],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_c1_12',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '📜',
    title: 'Pismo uklesano u kamen',
    titleEn: 'A Script Carved in Stone',
    duration: 10,
    focus: 'Historiografski registar • Trpni oblici • Kulturno pamćenje',
    intro:
      'Glagoljica je pismo kojim su Hrvati pisali tisuću godina — na kamenu, pergameni i vratima crkava. Priča o slovima koja su odbila umrijeti.',
    paragraphs: [
      {
        hr: 'Oko 1100. godine, na otoku Krku, netko je u ploču bijeloga vapnenca uklesao rečenicu kojom hrvatski jezik ulazi u povijest: zapis o zemlji koju je kralj Zvonimir darovao crkvi svete Lucije. Bašćanska ploča, kako je danas zovemo, prvi je spomenik na kojem se hrvatsko ime spominje na hrvatskom jeziku — i to glagoljicom, pismom obloga, tajanstvenog crteža koje ne sliči nijednom drugom u Europi.',
        en: 'Around the year 1100, on the island of Krk, someone carved into a slab of white limestone the sentence with which the Croatian language enters history: a record of land donated by King Zvonimir to the church of Saint Lucy. The Baška Tablet, as we call it today, is the first monument on which the Croatian name is mentioned in the Croatian language — and in Glagolitic, a script of rounded, mysterious shapes that resembles no other in Europe.',
      },
      {
        hr: 'Glagoljicu su u devetom stoljeću sastavili Ćiril i Metod za potrebe slavenskoga bogoslužja, no dok ju je većina Slavena s vremenom zamijenila ćirilicom ili latinicom, hrvatski su je glagoljaši — seoski popovi od Istre do Zadra — tvrdoglavo čuvali stoljećima. Na glagoljici su ispisani misali i zakoni; Misal po zakonu rimskoga dvora iz 1483. prva je hrvatska tiskana knjiga, otisnuta svega tridesetak godina nakon Gutenberga.',
        en: 'Glagolitic was devised in the ninth century by Cyril and Methodius for Slavic liturgy, but while most Slavs replaced it in time with Cyrillic or Latin script, the Croatian Glagolites — village priests from Istria to Zadar — stubbornly preserved it for centuries. Missals and laws were written in Glagolitic; the Missal by the Law of the Roman Court of 1483 is the first printed Croatian book, produced barely thirty years after Gutenberg.',
      },
      {
        hr: 'Vinodolski zakonik, drugi najstariji slavenski pravni tekst, ispisan je glagoljicom 1288.; njome su vođene matice rođenih, sastavljane oporuke i klesani natpisi nad vratima. Bila je pismo svakodnevice, ne samo oltara. Tek je u devetnaestom stoljeću konačno ustuknula pred latinicom — no u istarskim je župama pokoji svećenik glagoljao gotovo do naših dana.',
        en: 'The Law Codex of Vinodol, the second-oldest Slavic legal text, was written in Glagolitic in 1288; registers of births were kept in it, wills drawn up, inscriptions carved above doorways. It was a script of everyday life, not only of the altar. Only in the nineteenth century did it finally yield to the Latin script — yet in Istrian parishes the occasional priest sang the Glagolitic liturgy almost into our own times.',
      },
      {
        hr: 'Danas glagoljica živi drugim životom: studenti je uče kao izborni kolegij, dizajneri je nose na majicama, a Aleja glagoljaša između Roča i Huma — najmanjega grada na svijetu — vodi putnika kroz kamena slova velika poput čovjeka. Narod koji je vlastito ime prvi put zapisao vlastitim pismom to ne zaboravlja: glagoljica više nije sredstvo komunikacije, ali jest ono što je oduvijek bila — potpis.',
        en: 'Today Glagolitic lives a second life: students take it as an elective course, designers put it on T-shirts, and the Glagolitic Alley between Roč and Hum — the smallest town in the world — leads the traveller past stone letters as tall as a person. A people that first wrote down its own name in its own script does not forget that: Glagolitic is no longer a means of communication, but it remains what it always was — a signature.',
      },
    ],
    vocabulary: [
      {
        hr: 'uklesati',
        en: 'to carve (into stone)',
        ex: 'Rečenica je uklesana u vapnenac.',
      },
      {
        hr: 'spomenik',
        en: 'monument',
        ex: 'Prvi spomenik s hrvatskim imenom.',
      },
      {
        hr: 'bogoslužje',
        en: 'liturgy, divine service',
        ex: 'Pismo za slavensko bogoslužje.',
      },
      {
        hr: 'glagoljaš',
        en: 'Glagolitic priest',
        ex: 'Glagoljaši su pismo čuvali stoljećima.',
      },
      {
        hr: 'misal',
        en: 'missal',
        ex: 'Misal iz 1483. prva je tiskana knjiga.',
      },
      {
        hr: 'zakonik',
        en: 'law codex',
        ex: 'Vinodolski zakonik ispisan je 1288.',
      },
      {
        hr: 'oporuka',
        en: 'will, testament',
        ex: 'Glagoljicom su sastavljane oporuke.',
      },
      {
        hr: 'ustuknuti',
        en: 'to yield, give way',
        ex: 'Ustuknula je pred latinicom.',
      },
    ],
    quiz: [
      {
        q: 'Što je Bašćanska ploča?',
        qEn: 'What is the Baška Tablet?',
        opts: [
          'Najstariji zakon',
          'Prva tiskana knjiga',
          'Ploča s deset zapovijedi',
          'Prvi spomenik s hrvatskim imenom na hrvatskom jeziku',
        ],
        correct: 3,
      },
      {
        q: 'Što je Misal iz 1483. godine?',
        qEn: 'What is the Missal of 1483?',
        opts: [
          'Rukopis Ćirila i Metoda',
          'Zbirka pjesama',
          'Prijevod Biblije',
          'Prva hrvatska tiskana knjiga',
        ],
        correct: 3,
      },
      {
        q: 'Što je glagoljica danas, prema tekstu?',
        qEn: 'According to the text, what is Glagolitic today?',
        opts: ['Zaboravljeno pismo', 'Službeno pismo', 'Sredstvo komunikacije', 'Potpis naroda'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_c2_3',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🖋️',
    title: 'Pismo koje nikad nisam poslao',
    titleEn: 'The Letter I Never Sent',
    duration: 11,
    focus: 'Aorist i imperfekt u pripovijedanju • Epistolarni stil • Unutarnji monolog',
    intro:
      'Književna minijatura u kojoj pripovjedač piše ocu — trideset godina prekasno. Tekst svjesno poseže za aoristom i imperfektom, vremenima sjećanja.',
    paragraphs: [
      {
        hr: 'Dragi oče, počeh ovo pismo tridesetak puta, i tridesetak ga puta poderah. Večeras, kad kiša dobova po istom limenom prozorskom pragu po kojem je dobovala i onda, ne dam mu da završi u košu. Bijaše listopad kad si me otpratio na kolodvor; nosio si moj kovčeg, a ja tvoju šutnju. „Piši", reče mi, i to bi sve. Vlak krenu, ti osta na peronu, kaput ti se vijoraše — a ja, dvadesetogodišnjak siguran u sve, ne mahnuh.',
        en: 'Dear Father, I began this letter some thirty times, and some thirty times I tore it up. Tonight, as the rain drums on the same tin windowsill it drummed on back then, I will not let it end in the wastebasket. It was October when you saw me off at the station; you carried my suitcase, and I carried your silence. "Write," you said, and that was all. The train moved, you remained on the platform, your coat fluttering — and I, a twenty-year-old certain of everything, did not wave.',
      },
      {
        hr: 'Ne pisah. Ni prve godine, kad mi tuđina bijaše gorka poput kave koju ondje piju bez razgovora; ni poslije, kad postadoh netko kome se drugi obraćaju s poštovanjem. Slao sam novac — uredno, svakoga prvog u mjesecu — i mišljah da je to isto. Majka mi u pismima javljaše da si zdrav, da vinograd rodi, da pitaš za mene. Nikad ne napisa: „nedostaješ mu". To sam morao pročitati sâm, među recima, ali naučih čitati prekasno.',
        en: 'I did not write. Not in the first year, when the foreign land was bitter to me like the coffee they drink there without conversation; nor later, when I became someone whom others address with respect. I sent money — punctually, on the first of every month — and thought it was the same thing. Mother wrote that you were well, that the vineyard was bearing, that you asked after me. She never once wrote: "he misses you." That I had to read myself, between the lines, but I learned to read too late.',
      },
      {
        hr: 'Kad te posljednji put vidjeh, sjeđaše na klupi pred kućom i gledaše u brijeg, onako kako se gleda u nešto što se zna napamet. Htjedoh ti reći sve — i ne rekoh ništa. Govorili smo o vremenu. O berbi. O susjedovu traktoru. Dva čovjeka koja su se cijeli život voljela na jeziku u kojem za tu ljubav nema riječi, ili je mi ne znadosmo naći.',
        en: 'When I saw you for the last time, you were sitting on the bench in front of the house, looking at the hill the way one looks at something known by heart. I wanted to tell you everything — and said nothing. We spoke about the weather. About the harvest. About the neighbour’s tractor. Two men who loved each other all their lives in a language that has no words for that love — or we did not know how to find them.',
      },
      {
        hr: 'Sada je kasno za slanje, a nije kasno za pisanje; tek sada razumijem razliku. Tvoj kaput visi u mome ormaru, u tuđem gradu koji je postao moj. Kad ga obučem, ramena mi bivaju šira nego što jesu. Laku noć, oče. Vlak davno ode, peron opustje — ali evo me, napokon mašem.',
        en: 'It is too late now for sending, but not too late for writing; only now do I understand the difference. Your coat hangs in my wardrobe, in a foreign city that has become mine. When I put it on, my shoulders become broader than they are. Good night, Father. The train left long ago, the platform emptied — but here I am, waving at last.',
      },
    ],
    vocabulary: [
      {
        hr: 'poderati',
        en: 'to tear up',
        ex: 'Trideset ga puta poderah.',
      },
      {
        hr: 'dobovati',
        en: 'to drum, patter',
        ex: 'Kiša dobuje po limenom pragu.',
      },
      {
        hr: 'tuđina',
        en: 'foreign land(s)',
        ex: 'Tuđina mi bijaše gorka.',
      },
      {
        hr: 'obraćati se',
        en: 'to address (someone)',
        ex: 'Obraćaju mu se s poštovanjem.',
      },
      {
        hr: 'među recima',
        en: 'between the lines',
        ex: 'To sam čitao među recima.',
      },
      {
        hr: 'znati napamet',
        en: 'to know by heart',
        ex: 'Gledaše u brijeg koji zna napamet.',
      },
      {
        hr: 'opustjeti',
        en: 'to become deserted',
        ex: 'Peron opustje.',
      },
      {
        hr: 'vijoriti se',
        en: 'to flutter, wave',
        ex: 'Kaput ti se vijoraše na vjetru.',
      },
    ],
    quiz: [
      {
        q: 'U kojem je glagolskom vremenu „počeh"?',
        qEn: 'Which tense is "počeh"?',
        opts: ['Imperfekt', 'Pluskvamperfekt', 'Perfekt', 'Aorist'],
        correct: 3,
      },
      {
        q: 'Što je pripovjedač slao umjesto pisama?',
        qEn: 'What did the narrator send instead of letters?',
        opts: ['Poklone', 'Novac', 'Razglednice', 'Fotografije'],
        correct: 1,
      },
      {
        q: 'Što pripovjedač na kraju napokon čini?',
        qEn: 'What does the narrator finally do at the end?',
        opts: ['Prodaje kaput', 'Vraća se kući', 'Šalje pismo', 'Maše'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_c2_4',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🌉',
    title: 'Most',
    titleEn: 'The Bridge',
    duration: 11,
    focus: 'Esejistička meditacija • Simbolika i metafora • Nominalne rečenice',
    intro:
      'Meditacija o mostovima — građevinama koje spajaju obale i razdvajaju epohe. Od rimskih lukova do novog mosta na Pelješcu.',
    paragraphs: [
      {
        hr: 'Nijedna građevina ne govori o čovjeku toliko koliko most. Kuća je briga za sebe; tvrđava, strah od drugoga; hram, razgovor s nebom. Most je jedini oblik kojim kamen izgovara povjerenje: on pretpostavlja da na drugoj obali stanuje netko do koga vrijedi doći. Zato mostove ne ruše oluje nego vojske — tko želi ubiti grad, prvo mu prekine ruku pruženu preko vode.',
        en: 'No structure speaks of man as much as a bridge. A house is care for oneself; a fortress, fear of the other; a temple, conversation with heaven. The bridge is the only form in which stone utters trust: it presumes that on the far bank lives someone worth reaching. That is why bridges are destroyed not by storms but by armies — whoever wants to kill a city first severs the arm it extends across the water.',
      },
      {
        hr: 'Na ovim prostorima mostovi su oduvijek bili više od inženjerstva. Rimski luk u Solinu pregazio je carstva koja su ga gradila; šibenski je most šezdesetih spojio ne samo dvije obale Krke nego i dva svijeta, selo i grad; a stari most u Mostaru, kad se 1993. srušio u Neretvu, nije pao kao kamen, nego kao čovjek — snimka njegova pada boli i one koji ga nikad nisu prešli. Obnovljen je, dakako. Ali obnovljeni most, kao i zaraslo tkivo, pamti.',
        en: 'In these lands bridges have always been more than engineering. The Roman arch at Solin outlived the empires that built it; the Šibenik bridge in the sixties joined not only the two banks of the Krka but two worlds, village and town; and the Old Bridge of Mostar, when it collapsed into the Neretva in 1993, fell not like stone but like a man — the footage of its fall pains even those who never crossed it. It was rebuilt, of course. But a rebuilt bridge, like healed tissue, remembers.',
      },
      {
        hr: 'Ljeti 2022. Hrvatska je dobila most o kojem je sanjala pola stoljeća: dva i pol kilometra čelika preko Malostonskoga zaljeva, kojim je jug zemlje napokon spojen s njezinim tijelom. Na otvorenju su ljudi plakali, i to ne zbog prometa. Plakali su jer most na ovim prostorima nikad nije samo prečac: on je dokaz da se nešto veliko može i dovršiti, da obale, ma kako se dugo mimoilazile, na kraju ipak jedna drugoj — pripadnu.',
        en: 'In the summer of 2022 Croatia received the bridge it had dreamed of for half a century: two and a half kilometres of steel across the Bay of Mali Ston, finally joining the country’s south to its body. At the opening, people wept — and not because of traffic. They wept because in these lands a bridge is never a mere shortcut: it is proof that something great can actually be finished, that shores, however long they pass each other by, in the end do belong to one another.',
      },
      {
        hr: 'Svaki od nas gradi svoje mostove i svaki poneki sruši. Jezici su mostovi; isprike su mostovi; šutnja koja se prekine poslije dugih godina najuži je i najhrabriji od svih. Graditelji starih lukova znali su tajnu koju psihologija tek otkriva: luk stoji zato što se dvije polovice, naslonjene jedna na drugu, međusobno drže u zraku. Tako i ljudi. Most nije mjesto prelaska. Most je zagrljaj koji je naučio stajati.',
        en: 'Each of us builds bridges of our own, and each of us tears the odd one down. Languages are bridges; apologies are bridges; a silence broken after long years is the narrowest and bravest of them all. The builders of the old arches knew a secret psychology is only now discovering: an arch stands because its two halves, leaning against each other, hold one another in the air. So do people. A bridge is not a place of crossing. A bridge is an embrace that has learned to stand.',
      },
    ],
    vocabulary: [
      {
        hr: 'građevina',
        en: 'structure, building',
        ex: 'Nijedna građevina ne govori toliko o čovjeku.',
      },
      {
        hr: 'povjerenje',
        en: 'trust',
        ex: 'Kamen izgovara povjerenje.',
      },
      {
        hr: 'pretpostavljati',
        en: 'to presuppose, assume',
        ex: 'Most pretpostavlja drugu obalu.',
      },
      {
        hr: 'pregaziti',
        en: 'to outlive; to run over',
        ex: 'Luk je pregazio carstva.',
      },
      {
        hr: 'tkivo',
        en: 'tissue',
        ex: 'Obnovljeni most, kao zaraslo tkivo, pamti.',
      },
      {
        hr: 'zaljev',
        en: 'bay, gulf',
        ex: 'Most preko Malostonskoga zaljeva.',
      },
      {
        hr: 'prečac',
        en: 'shortcut',
        ex: 'Most nikad nije samo prečac.',
      },
      {
        hr: 'mimoilaziti se',
        en: 'to pass one another by',
        ex: 'Obale se dugo mimoilaze.',
      },
    ],
    quiz: [
      {
        q: 'Što most, prema tekstu, „izgovara"?',
        qEn: 'According to the text, what does a bridge "utter"?',
        opts: ['Brigu', 'Strah', 'Povjerenje', 'Snagu'],
        correct: 2,
      },
      {
        q: 'Zašto su ljudi plakali na otvorenju Pelješkog mosta?',
        qEn: 'Why did people weep at the opening of the Pelješac Bridge?',
        opts: [
          'Jer je dokaz da se veliko može dovršiti',
          'Zbog vjetra',
          'Zbog cijene',
          'Zbog prometa',
        ],
        correct: 0,
      },
      {
        q: 'Zašto luk stoji?',
        qEn: 'Why does an arch stand?',
        opts: [
          'Zbog žbuke',
          'Zbog težine temelja',
          'Jer se dvije polovice međusobno drže',
          'Zbog čelika',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c2_5',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🕰️',
    title: 'O zaboravu',
    titleEn: 'On Forgetting',
    duration: 11,
    focus: 'Filozofski esej • Apstraktni leksik • Parodoksalne konstrukcije',
    intro:
      'Pamćenje slavimo, zaborav osuđujemo. A ipak, bez zaborava ne bi bilo ni praštanja, ni sna, ni novoga početka. Esej u obranu najklevetanije sposobnosti uma.',
    paragraphs: [
      {
        hr: 'O pamćenju govorimo kao o vrlini, o zaboravu kao o kvaru. Pamćenje ima svoje spomenike, arhive i obljetnice; zaborav nema ničega — njemu ne dižemo kipove, njega se stidimo. Pa ipak, tko bi izdržao um koji ništa ne ispušta? Borges je o tome napisao priču: njegov Funes, osuđen da pamti svaki list svakoga stabla, ne može misliti. Misliti znači sažimati, a sažimati znači — ispuštati. Zaborav nije rupa u pamćenju; zaborav je njegov oblik.',
        en: 'We speak of memory as a virtue, of forgetting as a defect. Memory has its monuments, archives and anniversaries; forgetting has nothing — we raise no statues to it, we are ashamed of it. And yet, who could endure a mind that lets nothing go? Borges wrote a story about this: his Funes, condemned to remember every leaf of every tree, cannot think. To think is to condense, and to condense is — to let go. Forgetting is not a hole in memory; forgetting is its shape.',
      },
      {
        hr: 'Neurologija potvrđuje ono što je književnost slutila: mozak troši više energije na zaboravljanje nego na pohranu. Svake noći, u snu, um prosijava dan — bitno pretače u trajno, nebitno rastvara. Čovjek koji „loše pamti" često samo dobro prosijava. I obrnuto: nesanica je katkad tek pamćenje koje je odbilo predati smjenu.',
        en: 'Neurology confirms what literature suspected: the brain spends more energy on forgetting than on storage. Every night, in sleep, the mind sifts the day — decanting the essential into the lasting, dissolving the inessential. A person who "remembers poorly" is often merely sifting well. And conversely: insomnia is sometimes just memory refusing to hand over its shift.',
      },
      {
        hr: 'Postoji, dakako, zaborav kojega se valja bojati — onaj naručeni, kolektivni, koji briše nezgodna poglavlja i preimenuje ulice. Protiv njega pamćenje s pravom ratuje. No postoji i zaborav bez kojega zajednice ne mogu dalje: onaj koji nakon svađe, rata ili nesreće dopušta da se susjed ponovno pogleda u oči. Praštanje nije čin pamćenja nego njegova svjesnog stišavanja; tko kaže „oprostio sam, ali ne zaboravljam", najčešće nije učinio ni jedno ni drugo.',
        en: 'There is, of course, a forgetting one should fear — the commissioned, collective kind that erases inconvenient chapters and renames streets. Against that kind, memory rightly wages war. But there is also a forgetting without which communities cannot go on: the kind that, after a quarrel, a war or a calamity, allows one to look a neighbour in the eye again. Forgiveness is not an act of memory but of its conscious quieting; whoever says "I have forgiven, but I do not forget" has usually done neither.',
      },
      {
        hr: 'Možda je mudrost upravo u tome: pamtiti ono što nas je izgradilo, zaboraviti ono što nas je samo ranilo — i ne brkati jedno s drugim. Starost, kažu, briše najprije imena, a najkasnije melodije. Kao da nam um na odlasku poručuje što je cijelo vrijeme bilo važno: ne kako se što zvalo, nego kako je — zvučalo. Blago onome tko na kraju zaboravi sve osim onoga što je volio. On nije izgubio pamćenje. On ga je dovršio.',
        en: 'Perhaps wisdom lies precisely there: to remember what built us, to forget what merely wounded us — and not to confuse the two. Old age, they say, erases names first and melodies last. As if the departing mind were telling us what mattered all along: not what things were called, but how they — sounded. Blessed is the one who at the end forgets everything except what he loved. He has not lost his memory. He has completed it.',
      },
    ],
    vocabulary: [
      {
        hr: 'vrlina',
        en: 'virtue',
        ex: 'O pamćenju govorimo kao o vrlini.',
      },
      {
        hr: 'kvar',
        en: 'defect, malfunction',
        ex: 'Zaborav smatramo kvarom.',
      },
      {
        hr: 'sažimati',
        en: 'to condense, summarize',
        ex: 'Misliti znači sažimati.',
      },
      {
        hr: 'pohrana',
        en: 'storage',
        ex: 'Mozak troši više na zaborav nego na pohranu.',
      },
      {
        hr: 'prosijavati',
        en: 'to sift',
        ex: 'Um noću prosijava dan.',
      },
      {
        hr: 'naručen',
        en: 'commissioned, ordered',
        ex: 'Naručeni zaborav briše poglavlja.',
      },
      {
        hr: 'stišavanje',
        en: 'quieting, hushing',
        ex: 'Praštanje je svjesno stišavanje pamćenja.',
      },
      {
        hr: 'brkati',
        en: 'to confuse, mix up',
        ex: 'Ne brkati jedno s drugim.',
      },
    ],
    quiz: [
      {
        q: 'Zašto Borgesov Funes ne može misliti?',
        qEn: 'Why can Borges’s Funes not think?',
        opts: [
          'Jer ne spava',
          'Jer pamti sve i ništa ne ispušta',
          'Jer je slijep',
          'Jer je zaboravio jezik',
        ],
        correct: 1,
      },
      {
        q: 'Što um radi noću, prema tekstu?',
        qEn: 'According to the text, what does the mind do at night?',
        opts: ['Ponavlja melodije', 'Odmara se bez rada', 'Briše sve', 'Prosijava dan'],
        correct: 3,
      },
      {
        q: 'Kojeg se zaborava valja bojati?',
        qEn: 'Which forgetting should one fear?',
        opts: ['Naručenog, kolektivnog', 'Staračkog', 'Svakog', 'Noćnog'],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_c2_6',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '💨',
    title: 'Bura',
    titleEn: 'The Bura',
    duration: 11,
    focus: 'Personifikacija • Bogat pridjevski leksik • Ritam rečenice',
    intro:
      'Vjetar koji ruši kamione i bistri glave. Portret bure — sile koja je oblikovala kamen, kuće i karaktere sjevernoga Jadrana.',
    paragraphs: [
      {
        hr: 'Bura se ne najavljuje. Jugo kuka danima, mijesi nebo u sivo tijesto, boli koljena i glave; bura dolazi kao presuda — preko noći, s Velebita, čista i bijela. Najprije zazviždi u žicama, zatim legne na zaljev i počne ga češljati protiv dlake. Ujutro je nebo oprano do modrine kakvu boje ne poznaju, a zrak tako oštar da se čini: udahneš li dublje, porezat ćeš se.',
        en: 'The bura gives no notice. The southerly whines for days, kneading the sky into grey dough, aching in knees and heads; the bura arrives like a verdict — overnight, off the Velebit range, clean and white. First it whistles in the wires, then it lies down on the bay and begins combing it against the grain. By morning the sky is washed to a blue no paint knows, and the air is so sharp it seems that if you breathed in deeper, you would cut yourself.',
      },
      {
        hr: 'Rađa se, kažu meteorolozi, iz hladnoga zraka koji se prelije preko planine i sruči niz padinu poput lavine; najjača je upravo pod Velebitom, u Senju, i na mostovima koje s užitkom zatvara. Njezini udari — refuli, kako ih zovu na obali — znaju prevrnuti kamion i odnijeti krov, pa se u senjskim kućama i danas grade vrata na zavjetrinu, a stare masline uz more rastu vodoravno, počešljane jednom zauvijek.',
        en: 'It is born, meteorologists say, of cold air that spills over the mountain and crashes down the slope like an avalanche; it is strongest right under Velebit, in Senj, and on the bridges it delights in closing. Its gusts — refuli, as they call them on the coast — can overturn a lorry and carry off a roof, which is why doors in Senj houses are still built on the lee side, and the old olive trees by the sea grow horizontally, combed once and for all.',
      },
      {
        hr: 'A opet, nitko o buri ne govori kao o neprijatelju. Ona suši pršut i meso na način koji nijedna komora ne zna oponašati; ona tjera vlagu iz kuća i mutljag iz uvala; ona, vele stari, „bistri more i pamet". Poslije tri dana bure svijet izgleda kao nov: otoci priđu bliže, Velebit se vidi do posljednje bore, a čovjek, koliko god ga izmučila, hoda uspravnije. Malo koja nepogoda ostavlja za sobom — red.',
        en: 'And yet no one speaks of the bura as an enemy. It cures pršut and meat in a way no chamber can imitate; it drives damp from the houses and murk from the coves; it, the old folk say, "clears the sea and the mind". After three days of bura the world looks new: the islands draw nearer, Velebit is visible to its last wrinkle, and a person, however much it has worn them out, walks more upright. Few calamities leave order in their wake.',
      },
      {
        hr: 'Zato je bura ovim krajevima više od vremena: ona je ćud. Ljudi ispod Velebita govore kratko, troše malo i ne obećavaju olako — jer sve što je suvišno bura ionako odnese. Nauči li čovjek živjeti s vjetrom koji mu svako malo pokuša odnijeti krov, naučio je i ono glavno: da se temelji kopaju duboko, a da se poslije svake oluje — broji, popravi i ide dalje. Bura ne oblikuje samo kamen. Bura odgaja.',
        en: 'That is why in these parts the bura is more than weather: it is a temperament. The people below Velebit speak briefly, spend little and do not promise lightly — for whatever is superfluous, the bura carries off anyway. Once you learn to live with a wind that every so often tries to take your roof, you have learned the main thing: that foundations are dug deep, and that after every storm you — count, repair and carry on. The bura does not only shape stone. The bura raises children.',
      },
    ],
    vocabulary: [
      {
        hr: 'najavljivati se',
        en: 'to announce oneself',
        ex: 'Bura se ne najavljuje.',
      },
      {
        hr: 'presuda',
        en: 'verdict',
        ex: 'Dolazi kao presuda, preko noći.',
      },
      {
        hr: 'padina',
        en: 'slope',
        ex: 'Zrak se sruči niz padinu.',
      },
      {
        hr: 'udar',
        en: 'gust, blow',
        ex: 'Njezini udari prevrću kamione.',
      },
      {
        hr: 'zavjetrina',
        en: 'lee, sheltered side',
        ex: 'Vrata se grade na zavjetrinu.',
      },
      {
        hr: 'oponašati',
        en: 'to imitate',
        ex: 'Nijedna komora to ne zna oponašati.',
      },
      {
        hr: 'nepogoda',
        en: 'storm, bad weather',
        ex: 'Malo koja nepogoda ostavlja red.',
      },
      {
        hr: 'ćud',
        en: 'temperament, nature',
        ex: 'Bura je ćud ovih krajeva.',
      },
    ],
    quiz: [
      {
        q: 'Odakle bura dolazi?',
        qEn: 'Where does the bura come from?',
        opts: ['S mora', 'Iz Italije', 'S juga', 'S Velebita'],
        correct: 3,
      },
      {
        q: 'Kako se na obali zovu udari bure?',
        qEn: 'What are the bura’s gusts called on the coast?',
        opts: ['Valovi', 'Refuli', 'Zapusi', 'Maestrali'],
        correct: 1,
      },
      {
        q: 'Što bura, prema starima, „bistri"?',
        qEn: 'According to the old folk, what does the bura "clear"?',
        opts: ['Nebo i zvijezde', 'More i pamet', 'Vino i ulje', 'Kuće i dvorišta'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_7',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🔍',
    title: 'Rubovi jezika',
    titleEn: 'The Edges of Language',
    duration: 12,
    focus: 'Metajezična refleksija • Neprevodivost • Složena subordinacija',
    intro:
      'Svaki jezik ima riječi koje drugi jezici mogu samo opisati. Esej o neprevodivome — i o tome što rubovi jezika otkrivaju o njegovu središtu.',
    paragraphs: [
      {
        hr: 'Postoje riječi koje se ne daju prevesti, nego samo prepričati. Portugalci imaju saudade, čežnju za nečim što se možda nikad nije ni dogodilo; Danci hygge, toplinu male sreće; Nijemci Torschlusspanik, strah od vrata koja se zatvaraju. Hrvatski svojim govornicima nudi vlastite nepremostivosti: fjaku, stanje slatke obamrlosti koje nije lijenost nego mudrost tijela; merak, užitak koji se ne troši nego traje; inat, koji rječnici prevode kao „prkos" i time ga uredno promaše.',
        en: 'There are words that cannot be translated, only recounted. The Portuguese have saudade, a longing for something that perhaps never happened at all; the Danes hygge, the warmth of small happiness; the Germans Torschlusspanik, the fear of closing doors. Croatian offers its speakers untranslatabilities of its own: fjaka, a state of sweet torpor that is not laziness but the body’s wisdom; merak, a pleasure that is not spent but lasts; inat, which dictionaries render as "spite" and thereby miss it entirely.',
      },
      {
        hr: 'Jer inat nije prkos. Prkos je reakcija; inat je svjetonazor. Iz inata se gradi kuća kraj susjedove veće, završava fakultet koji su svi otpisali, preživljava opsada. Inat je iracionalan, skup i ponekad autodestruktivan — i upravo zato dostojanstven: on je odbijanje da svijet ima zadnju riječ. Tko ne razumije inat, taj će povijest ovih prostora čitati kao niz nerazumnih odluka. Tko ga razumije, prepoznat će u njima — kralježnicu.',
        en: 'For inat is not spite. Spite is a reaction; inat is a worldview. Out of inat one builds a house next to the neighbour’s bigger one, finishes the degree everyone had written off, survives a siege. Inat is irrational, costly and sometimes self-destructive — and precisely for that reason dignified: it is the refusal to let the world have the last word. Whoever does not understand inat will read the history of these lands as a series of unreasonable decisions. Whoever understands it will recognize in them — a backbone.',
      },
      {
        hr: 'Lingvisti će reći da neprevodive riječi ne dokazuju da narodi različito osjećaju, nego da su različite osjećaje smatrali vrijednima imenovanja. Upravo je to njihova draž: rječnik je popis onoga što je zajednici bilo dovoljno važno da dobije ime. Gdje Eskimi nijansiraju snijeg, Dalmatinci nijansiraju dokolicu; gdje njemački precizira strahove, hrvatski precizira otpore. Reci mi što ne možeš prevesti, i reći ću ti tko si.',
        en: 'Linguists will say that untranslatable words do not prove that peoples feel differently, but that they considered different feelings worth naming. That is precisely their charm: a lexicon is an inventory of what a community found important enough to name. Where the Inuit shade snow into nuances, Dalmatians shade idleness; where German makes fears precise, Croatian makes resistances precise. Tell me what you cannot translate, and I will tell you who you are.',
      },
      {
        hr: 'Za onoga tko uči hrvatski, rubovi su jezika najstrmiji dio puta — i najljepši. Padeže će savladati vježbom, red riječi sluhom; ali tek kad prvi put osjeti fjaku umjesto da je prevede, kad iz inata ustraje u nečemu što se ne isplati, kad mu za nekim bude žao onako kako se samo na hrvatskom može „biti žao" — tada više ne uči jezik. Tada jezik uči njega. A to je, možda, jedina definicija tečnosti koja nešto vrijedi: govoriti jezik znači pristati da te on izgovara.',
        en: 'For the learner of Croatian, the edges of the language are the steepest part of the journey — and the most beautiful. Cases can be mastered by practice, word order by ear; but only when he first feels fjaka instead of translating it, when out of inat he persists in something that does not pay, when he misses someone the way one can only "be sorry" in Croatian — then he is no longer learning the language. Then the language is learning him. And that, perhaps, is the only definition of fluency worth anything: to speak a language is to consent to being spoken by it.',
      },
    ],
    vocabulary: [
      {
        hr: 'neprevodiv',
        en: 'untranslatable',
        ex: 'Neprevodive riječi samo se prepričavaju.',
      },
      {
        hr: 'obamrlost',
        en: 'torpor, numbness',
        ex: 'Fjaka je slatka obamrlost.',
      },
      {
        hr: 'svjetonazor',
        en: 'worldview',
        ex: 'Inat je svjetonazor, ne reakcija.',
      },
      {
        hr: 'otpisati',
        en: 'to write off',
        ex: 'Fakultet koji su svi otpisali.',
      },
      {
        hr: 'dostojanstven',
        en: 'dignified',
        ex: 'Inat je upravo zato dostojanstven.',
      },
      {
        hr: 'kralježnica',
        en: 'spine, backbone',
        ex: 'U tim se odlukama prepoznaje kralježnica.',
      },
      {
        hr: 'dokolica',
        en: 'leisure, idleness',
        ex: 'Dalmatinci nijansiraju dokolicu.',
      },
      {
        hr: 'tečnost',
        en: 'fluency',
        ex: 'Jedina definicija tečnosti koja vrijedi.',
      },
    ],
    quiz: [
      {
        q: 'Po čemu se inat razlikuje od prkosa?',
        qEn: 'How does inat differ from spite?',
        opts: [
          'Inat je slabiji',
          'Prkos je stariji pojam',
          'Inat je svjetonazor, prkos reakcija',
          'Ni po čemu',
        ],
        correct: 2,
      },
      {
        q: 'Što je rječnik, prema tekstu?',
        qEn: 'According to the text, what is a lexicon?',
        opts: [
          'Povijest jezika',
          'Zbirka prijevoda',
          'Popis pravila',
          'Popis onoga što je zajednici bilo važno imenovati',
        ],
        correct: 3,
      },
      {
        q: 'Kada učenik „više ne uči jezik"?',
        qEn: 'When is the learner "no longer learning the language"?',
        opts: [
          'Kad jezik počne učiti njega',
          'Kad savlada padeže',
          'Kad položi ispit',
          'Kad prevede fjaku',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_a1_17',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🌊',
    title: 'Posjet baki u Dalmaciji',
    titleEn: 'A Visit to Grandma in Dalmatia',
    duration: 7,
    focus: 'obiteljski život • prezent glagola • riječi o moru i selu',
    intro:
      'Pratite obitelj Horvat na ljetnom putovanju baki u Dalmaciju, gdje upoznajemo more, selo i toplinu obiteljskog doma.',
    paragraphs: [
      {
        hr: 'Obitelj Horvat živi u Zagrebu. Ljeti oni putuju u Dalmaciju. Tamo živi baka Ana. Baka ima malu kuću kraj mora. Djeca vole ljeto kod bake. Mama i tata voze auto tri sata. Cesta ide kroz planine i polja. Svi su sretni kad vide more.',
        en: "The Horvat family lives in Zagreb. In summer they travel to Dalmatia. Grandma Ana lives there. Grandma has a small house by the sea. The children love summer at grandma's. Mom and dad drive for three hours. The road goes through mountains and fields. Everyone is happy when they see the sea.",
      },
      {
        hr: 'Baka Ana čeka obitelj ispred kuće. Ona nosi bijelu haljinu i osmijeh. "Dobar dan, dragi moji!" viče baka. Djeca trče prema baki i grle je. Baka miriše na lavandu i more. Kuća ima veliki vrt s maslinama. U vrtu rastu i smokve i limun. Mačka Mica spava ispod stola.',
        en: 'Grandma Ana waits for the family in front of the house. She\'s wearing a white dress and a smile. "Good day, my dears!" grandma calls out. The children run to grandma and hug her. Grandma smells of lavender and the sea. The house has a big garden with olive trees. Figs and lemons also grow in the garden. The cat Mica is sleeping under the table.',
      },
      {
        hr: 'Ujutro baka pravi doručak za sve. Na stolu su kruh, sir i masline. Baka peče i slatke fritule za djecu. Fritule mirišu na rakiju i limun. Djed Ivan donosi svježe voće iz vrta. On bere grožđe i velike smokve. Svi zajedno sjede za velikim stolom. Baka priča stare priče o moru.',
        en: 'In the morning grandma makes breakfast for everyone. On the table there is bread, cheese and olives. Grandma also bakes sweet fritule for the children. The fritule smell of brandy and lemon. Grandpa Ivan brings fresh fruit from the garden. He picks grapes and big figs. Everyone sits together at the big table. Grandma tells old stories about the sea.',
      },
      {
        hr: 'Poslije doručka djeca idu na plažu. Plaža je blizu, samo pet minuta hoda. More je toplo i vrlo plavo. Djeca plivaju i grade dvorce od pijeska. Tata igra nogomet s bratom na pijesku. Mama čita knjigu ispod velikog suncobrana. Baka sjedi na klupi i gleda unuke. Ona je sretna kad vidi njihov smijeh.',
        en: 'After breakfast the children go to the beach. The beach is close, just a five-minute walk. The sea is warm and very blue. The children swim and build sandcastles. Dad plays football with his brother on the sand. Mom reads a book under a big beach umbrella. Grandma sits on a bench and watches her grandchildren. She is happy when she sees their laughter.',
      },
      {
        hr: 'Navečer cijela obitelj ide u šetnju. Selo je malo, ali vrlo lijepo. Kuće su bijele s crvenim krovovima. Ljudi sjede pred kućama i pričaju. Djeca pozdravljaju susjede i njihove pse. Baka poznaje sve ljude u selu. Ona pokazuje unucima staru crkvu na trgu. Crkva ima zvono staro sto godina.',
        en: 'In the evening the whole family goes for a walk. The village is small but very beautiful. The houses are white with red roofs. People sit in front of their houses and chat. The children greet the neighbors and their dogs. Grandma knows everyone in the village. She shows her grandchildren the old church on the square. The church has a bell that is a hundred years old.',
      },
      {
        hr: 'Jedne večeri baka peče ribu na roštilju. Riba je svježa, ulovljena tog jutra. Djed je ujutro išao na ribolov. On voli loviti ribu s prijateljima. Svi sjede za stolom u vrtu. Zvijezde su svijetle iznad njihovih glava. Baka govori: "Ovo je pravi život." Djeca se smiju i jedu s užitkom.',
        en: 'One evening grandma grills fish. The fish is fresh, caught that morning. Grandpa went fishing in the morning. He loves fishing with his friends. Everyone sits at the table in the garden. The stars are bright above their heads. Grandma says, "This is real life." The children laugh and eat with delight.',
      },
      {
        hr: 'Na kraju ljeta obitelj mora ići kući. Baka plače malo, ali se smiješi. "Dođite opet dogodine," kaže ona djeci. Djeca obećavaju da će opet doći. Oni grle baku jako, jako dugo. Auto polako odlazi s male ceste. Baka maše rukom dok auto ne nestane. Ljeto u Dalmaciji ostaje u srcu.',
        en: 'At the end of summer the family has to go home. Grandma cries a little, but she smiles. "Come again next year," she tells the children. The children promise they will come again. They hug grandma tightly for a long time. The car slowly leaves down the small road. Grandma waves until the car disappears. Summer in Dalmatia stays in their hearts.',
      },
    ],
    vocabulary: [
      {
        hr: 'baka',
        en: 'grandmother',
        ex: 'Baka Ana čeka obitelj ispred kuće.',
      },
      {
        hr: 'more',
        en: 'sea',
        ex: 'More je toplo i vrlo plavo.',
      },
      {
        hr: 'vrt',
        en: 'garden',
        ex: 'Kuća ima veliki vrt s maslinama.',
      },
      {
        hr: 'plaža',
        en: 'beach',
        ex: 'Plaža je blizu, samo pet minuta hoda.',
      },
      {
        hr: 'riba',
        en: 'fish',
        ex: 'Baka peče ribu na roštilju.',
      },
      {
        hr: 'selo',
        en: 'village',
        ex: 'Selo je malo, ali vrlo lijepo.',
      },
      {
        hr: 'grožđe',
        en: 'grapes',
        ex: 'Djed bere grožđe i velike smokve.',
      },
    ],
    quiz: [
      {
        q: 'Gdje živi baka Ana?',
        qEn: 'Where does Grandma Ana live?',
        opts: ['U Zagrebu', 'U Dalmaciji', 'U Zagorju', 'U Istri'],
        correct: 1,
      },
      {
        q: 'Što djeca rade na plaži?',
        qEn: 'What do the children do at the beach?',
        opts: ['Čitaju knjige', 'Plivaju i grade dvorce od pijeska', 'Igraju košarku', 'Spavaju'],
        correct: 1,
      },
      {
        q: 'Što baka peče na roštilju?',
        qEn: 'What does grandma grill?',
        opts: ['Piletinu', 'Povrće', 'Ribu', 'Kruh'],
        correct: 2,
      },
      {
        q: 'Tko ide na ribolov ujutro?',
        qEn: 'Who goes fishing in the morning?',
        opts: ['Tata', 'Djed Ivan', 'Marko', 'Susjed'],
        correct: 1,
      },
      {
        q: 'Kako se obitelj osjeća na kraju ljeta?',
        qEn: 'How does the family feel at the end of summer?',
        opts: ['Ljutito', 'Tužno, ali sretno', 'Ravnodušno', 'Uplašeno'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a1_18',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🍅',
    title: 'Prvi dan na Dolcu',
    titleEn: 'First Day at Dolac Market',
    duration: 6,
    focus: 'tržnica i kupovina • opisi boja i okusa • novi grad, novi prijatelji',
    intro: 'Marko je nov u Zagrebu i danas prvi put istražuje čuvenu tržnicu Dolac.',
    paragraphs: [
      {
        hr: 'Marko je nov u Zagrebu. On dolazi iz malog grada. Danas ide prvi put na tržnicu. Tržnica se zove Dolac. Dolac je poznat po svježem povrću. Marko nosi veliku platnenu torbu. On je malo nervozan, ali radoznao. Sunce sija i grad je živ.',
        en: "Marko is new in Zagreb. He comes from a small town. Today he's going to the market for the first time. The market is called Dolac. Dolac is famous for its fresh vegetables. Marko carries a big cloth bag. He is a bit nervous but curious. The sun is shining and the city is lively.",
      },
      {
        hr: 'Tržnica Dolac je iznad glavnog trga. Marko hoda uz crvene i žute suncobrane. Prodavačice stoje iza velikih drvenih štandova. One prodaju rajčice, papriku i krumpir. Miris svježeg voća puni cijeli zrak. Marko vidi jagode, trešnje i lubenice. Sve boje su jarke i lijepe. On ne zna gdje prvo pogledati.',
        en: "The Dolac market is above the main square. Marko walks past red and yellow umbrellas. Women vendors stand behind big wooden stalls. They sell tomatoes, peppers and potatoes. The smell of fresh fruit fills the air. Marko sees strawberries, cherries and watermelons. All the colors are bright and beautiful. He doesn't know where to look first.",
      },
      {
        hr: 'Jedna starija gospođa zove Marka k sebi. "Dođi, mladiću, imam najbolje rajčice!" kaže ona. Marko prilazi i gleda njezin štand. Rajčice su crvene, velike i sočne. "Koliko koštaju?" pita Marko gospođu. "Dva eura za kilogram," odgovara ona s osmijehom. Marko kupuje jedan kilogram rajčica. Gospođa mu daje i malo peršina.',
        en: 'An older woman calls Marko over. "Come here, young man, I have the best tomatoes!" she says. Marko approaches and looks at her stall. The tomatoes are red, big and juicy. "How much do they cost?" Marko asks the woman. "Two euros per kilo," she answers with a smile. Marko buys one kilogram of tomatoes. The woman also gives him a bit of parsley.',
      },
      {
        hr: 'Marko zatim ide do štanda sa sirom. Prodavač nudi domaći sir i vrhnje. "Ovaj sir je iz Zagorja," kaže prodavač. Marko proba mali komad sira. Sir je kremast i vrlo ukusan. On kupuje pola kile sira. Prodavač pakira sir u papir. Marko zahvaljuje i sprema sir u torbu.',
        en: 'Marko then goes to the cheese stall. The vendor offers homemade cheese and cream. "This cheese is from Zagorje," the vendor says. Marko tries a small piece of cheese. The cheese is creamy and very tasty. He buys half a kilo of cheese. The vendor wraps the cheese in paper. Marko says thanks and puts the cheese in his bag.',
      },
      {
        hr: 'Na kraju tržnice je cvjetni kutak. Žene prodaju ruže, tulipane i suncokrete. Marko kupuje buket žutog cvijeća. Cvijeće je za njegovu novu susjedu. Susjeda mu je pomogla useliti u stan. Marko misli da je to lijep gest. On plaća cvijeće i kaže hvala. Prodavačica mu poželi ugodan dan.',
        en: "At the end of the market there is a blooming flower corner. Women sell roses, tulips and sunflowers. Marko buys a bouquet of yellow flowers. The flowers are for his new neighbor. The neighbor helped him move into his apartment. Marko thinks it's a nice gesture. He pays for the flowers and says thank you. The vendor wishes him a nice day.",
      },
      {
        hr: 'Marko sad ima punu torbu hrane. Torba je teška, ali on je sretan. Tržnica Dolac mu se jako sviđa. Ljudi su ovdje ljubazni i vedri. On odlučuje doći opet sljedeći tjedan. Marko hoda kući kroz stari centar. Zvona katedrale glasno zvone u podne. Marko se osjeća kao pravi Zagrepčanin.',
        en: 'Marko now has a full bag of food. The bag is heavy, but he is happy. He really likes the Dolac market. The people here are kind and cheerful. He decides to come again next week. Marko walks home through the old city center. The cathedral bells ring loudly at noon. Marko feels like a true Zagreb local.',
      },
    ],
    vocabulary: [
      {
        hr: 'tržnica',
        en: 'market',
        ex: 'Marko ide prvi put na tržnicu.',
      },
      {
        hr: 'povrće',
        en: 'vegetables',
        ex: 'Dolac je poznat po svježem povrću.',
      },
      {
        hr: 'rajčica',
        en: 'tomato',
        ex: 'Rajčice su crvene, velike i sočne.',
      },
      {
        hr: 'sir',
        en: 'cheese',
        ex: 'Marko kupuje pola kile sira.',
      },
      {
        hr: 'cvijeće',
        en: 'flowers',
        ex: 'Marko kupuje buket žutog cvijeća.',
      },
      {
        hr: 'susjeda',
        en: 'neighbor (f.)',
        ex: 'Cvijeće je za njegovu novu susjedu.',
      },
      {
        hr: 'torba',
        en: 'bag',
        ex: 'Marko nosi veliku platnenu torbu.',
      },
    ],
    quiz: [
      {
        q: 'Kako se zove tržnica u Zagrebu?',
        qEn: 'What is the market in Zagreb called?',
        opts: ['Britanac', 'Dolac', 'Bundek', 'Jarun'],
        correct: 1,
      },
      {
        q: 'Što Marko kupuje prvo?',
        qEn: 'What does Marko buy first?',
        opts: ['Sir', 'Cvijeće', 'Rajčice', 'Kruh'],
        correct: 2,
      },
      {
        q: 'Odakle je sir koji Marko kupuje?',
        qEn: 'Where is the cheese from?',
        opts: ['Iz Dalmacije', 'Iz Zagorja', 'Iz Slavonije', 'Iz Istre'],
        correct: 1,
      },
      {
        q: 'Za koga Marko kupuje cvijeće?',
        qEn: 'Who does Marko buy flowers for?',
        opts: ['Za baku', 'Za majku', 'Za susjedu', 'Za prodavačicu'],
        correct: 2,
      },
      {
        q: 'Kako se Marko osjeća na kraju dana?',
        qEn: 'How does Marko feel at the end of the day?',
        opts: ['Umorno i tužno', 'Kao pravi Zagrepčanin', 'Razočarano', 'Bijesno'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a1_19',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '🐕',
    title: 'Moj pas Bela',
    titleEn: 'My Dog Bela',
    duration: 9,
    focus: 'Present tense • Daily routine vocabulary • Family & pets',
    intro:
      'Follow Ana through an ordinary day with her lively dog Bela — from the morning walk to a small scare near the road, and a cozy evening at home.',
    paragraphs: [
      {
        hr: 'Zovem se Ana i živim s obitelji u malom stanu. Imamo psa koji se zove Bela. Bela je bijela, mala i vesela. Svako jutro me budi lavežem pored kreveta. Prvo joj dam vodu, a onda hranu u zdjelicu. Bela jede brzo i maše repom od sreće.',
        en: 'My name is Ana and I live with my family in a small apartment. We have a dog named Bela. Bela is white, small, and cheerful. Every morning she wakes me up with barking next to my bed. First I give her water, then food in her bowl. Bela eats quickly and wags her tail with joy.',
      },
      {
        hr: 'Poslije doručka izlazimo u šetnju. Bela voli park iza naše zgrade jer tamo ima puno trave i drveća. Ja nosim uzicu, a Bela trči ispred mene i njuši svaki grm. Ptice pjevaju, a sunce izlazi. Bela ponekad stane i gleda mačku, ali je brzo pozovem.',
        en: "After breakfast we go out for a walk. Bela loves the park behind our building because there's lots of grass and trees there. I carry the leash while Bela runs ahead of me, sniffing every bush. Birds sing and the sun rises. Bela sometimes stops to look at a cat, but I quickly call her back.",
      },
      {
        hr: 'U parku često srećemo susjedova psa Rexa. Rex je velik i smeđ, ali vrlo dobroćudan. Bela i Rex se vole igrati zajedno i trčati u krug. Vlasnici sjede na klupi i razgovaraju. Djeca se smiju i gledaju pse kako se jure po travi.',
        en: "In the park we often meet our neighbor's dog, Rex. Rex is big and brown, but very good-natured. Bela and Rex love playing together and running in circles. The owners sit on a bench and chat. Children laugh as they watch the dogs chase each other across the grass.",
      },
      {
        hr: 'Jednog jutra Bela odjednom potrči prema cesti jer vidi vjevericu. Srce mi jako brzo kuca od straha. Vičem njezino ime glasno. Srećom, Bela stane točno na rubu ceste i pogleda me. Brzo joj stavim uzicu i čvrsto je držim. Osjećam olakšanje kad je sigurna pored mene.',
        en: "One morning Bela suddenly darts toward the road because she sees a squirrel. My heart pounds with fear. I shout her name loudly. Luckily, Bela stops right at the edge of the road and looks at me. I quickly put on her leash and hold it tightly. I feel relief once she's safe beside me.",
      },
      {
        hr: 'Poslije tog straha hodamo kući. Bela hoda mirno pored mene. Kod kuće joj dam malo vode i ona legne na svoj jastuk. Skuham čaj i sjednem pored nje. Bela zaspi za nekoliko minuta jer je šetnja bila duga. Gledam njezino mirno disanje i osjećam se sretno.',
        en: 'After that scare we walk home. Bela walks calmly beside me. At home I give her a little water and she lies down on her cushion. I make tea and sit down next to her. Bela falls asleep within minutes because the walk was long. I watch her breathing peacefully and feel content.',
      },
      {
        hr: 'Poslijepodne se Bela probudi puna energije. Traži svoju omiljenu igračku, žutu gumenu loptu. Bacam joj loptu po hodniku, a ona je brzo donosi natrag. Ova igra joj se jako sviđa. Katkad lopta padne pod ormar i Bela cvili dok je ne izvadim. Onda opet veselo maše repom.',
        en: 'In the afternoon Bela wakes up full of energy. She looks for her favorite toy, a yellow rubber ball. I throw the ball down the hallway and she quickly brings it back. She loves this game. Sometimes the ball rolls under the wardrobe and Bela whines until I fish it out. Then she happily wags her tail again.',
      },
      {
        hr: 'Navečer izlazimo na kratku šetnju prije spavanja. Ulice su tihe, a zrak je svjež i ugodan. Bela njuši svaki kutak jer je noć puna novih mirisa. Susjedi nas pozdravljaju i pitaju kako je Bela. Odgovaram da je danas bila živahna. Bela maše repom kad čuje svoje ime.',
        en: 'In the evening we go out for a short walk before bed. The streets are quiet and the air is fresh and pleasant. Bela sniffs every corner because the night is full of new smells. Neighbors greet us and ask how Bela is doing. I tell them she was lively today. Bela wags her tail when she hears her name.',
      },
      {
        hr: 'Kad se vratimo kući, cijela obitelj večera zajedno. Bela sjedi ispod stola i strpljivo čeka mrvice. Tata joj katkad da mali komad kruha, iako mama kaže da nije zdravo. Poslije večere Bela legne na svoje mjesto u dnevnoj sobi. Gledamo televiziju dok ona tiho hrče pored kauča.',
        en: "When we get home, the whole family has dinner together. Bela sits under the table, patiently waiting for crumbs. Dad sometimes gives her a small piece of bread, even though Mom says it isn't healthy. After dinner Bela lies down in her spot in the living room. We watch television while she snores softly by the couch.",
      },
      {
        hr: 'Prije spavanja Bela dolazi u moju sobu i skoči na krevet. Ja je pomilujem po glavi i poželim joj laku noć. Bela se sklupča kraj mojih nogu i brzo zaspi. Volim ovaj mirni trenutak na kraju dana. Bela nije samo pas, ona je pravi član naše obitelji.',
        en: "Before bed Bela comes into my room and jumps onto the bed. I stroke her head and wish her goodnight. Bela curls up by my feet and quickly falls asleep. I love this peaceful moment at the end of the day. Bela isn't just a dog — she's a true member of our family.",
      },
    ],
    vocabulary: [
      { hr: 'psa', en: 'dog (accusative/genitive)', ex: 'Imamo psa koji se zove Bela.' },
      { hr: 'u šetnju', en: 'for a walk', ex: 'Poslije doručka izlazimo u šetnju.' },
      {
        hr: 'njuši',
        en: 'sniffs',
        ex: 'Ja nosim uzicu, a Bela trči ispred mene i njuši svaki grm.',
      },
      {
        hr: 'susjedova psa',
        en: "the neighbor's dog",
        ex: 'U parku često srećemo susjedova psa Rexa.',
      },
      { hr: 'od straha', en: 'out of fear', ex: 'Srce mi jako brzo kuca od straha.' },
      { hr: 'uzicu', en: 'leash (accusative)', ex: 'Brzo joj stavim uzicu i čvrsto je držim.' },
      { hr: 'jastuk', en: 'cushion', ex: 'Kod kuće joj dam malo vode i ona legne na svoj jastuk.' },
      {
        hr: 'gumenu loptu',
        en: 'rubber ball',
        ex: 'Traži svoju omiljenu igračku, žutu gumenu loptu.',
      },
      { hr: 'maše repom', en: 'wags her tail', ex: 'Bela maše repom kad čuje svoje ime.' },
      {
        hr: 'član naše obitelji',
        en: 'member of our family',
        ex: 'Bela nije samo pas, ona je pravi član naše obitelji.',
      },
    ],
    quiz: [
      {
        q: 'Kako se zove pas u priči?',
        qEn: "What is the dog's name in the story?",
        opts: ['Bela', 'Rex', 'Luna', 'Sivko'],
        correct: 0,
      },
      {
        q: 'Zašto se Ana uplaši u parku?',
        qEn: 'Why does Ana get scared in the park?',
        opts: [
          'Bela je pobjegla kroz vrata',
          'Bela potrči prema cesti kad vidi vjevericu',
          'Bela se potuče s Rexom',
          'Bela padne u jezero',
        ],
        correct: 1,
      },
      {
        q: 'Što Bela radi dok obitelj večera?',
        qEn: 'What does Bela do while the family eats dinner?',
        opts: [
          'Spava u svojoj košari',
          'Laje na goste',
          'Sjedi ispod stola i čeka mrvice',
          'Igra se loptom u dvorištu',
        ],
        correct: 2,
      },
      {
        q: 'Gdje Bela spava navečer?',
        qEn: 'Where does Bela sleep in the evening?',
        opts: ['Na kuhinjskom podu', 'U dvorištu', 'U autu', 'Kraj Aninih nogu na krevetu'],
        correct: 3,
      },
      {
        q: 'Koju igračku Bela najviše voli?',
        qEn: 'Which toy does Bela love the most?',
        opts: ['Plišanog medvjeda', 'Žutu gumenu loptu', 'Staru cipelu', 'Konopac za vuču'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a1_20',
    level: 'A1',
    levelColor: '#166534',
    levelBg: '#dcfce7',
    icon: '⛴️',
    title: 'Putovanje trajektom',
    titleEn: 'The Ferry Trip',
    duration: 9,
    focus: 'Present tense • Travel vocabulary • Sequencing words',
    intro:
      'A family sets out on a ferry crossing to a Croatian island, watching gulls, riding the waves, and ending the day with ice cream by the harbor.',
    paragraphs: [
      {
        hr: 'Danas putujemo trajektom na otok. Cijela obitelj rano ustaje jer trajekt polazi u osam sati. Tata vozi auto do luke, a ja gledam more kroz prozor. Na luci ima puno ljudi i automobila koji čekaju ukrcaj. Mama kupuje karte na šalteru pored ulaza.',
        en: "Today we're traveling by ferry to an island. The whole family gets up early because the ferry departs at eight o'clock. Dad drives the car to the harbor while I watch the sea through the window. The harbor is full of people and cars waiting to board. Mom buys the tickets at the counter near the entrance.",
      },
      {
        hr: 'Karte nisu skupe, svaka košta samo nekoliko eura. Službenik nam pokazuje gdje treba stati u redu. Čekamo desetak minuta, a onda trajekt polako pristaje uz obalu. Vozila ulaze prva, a putnici bez auta ulaze pješice preko rampe. Ja hodam iza mame i držim njezinu ruku.',
        en: "The tickets aren't expensive — each one costs just a few euros. An attendant shows us where to line up. We wait about ten minutes, and then the ferry slowly docks at the pier. Vehicles board first, and passengers without cars walk on board over the ramp. I walk behind Mom, holding her hand.",
      },
      {
        hr: 'Na trajektu odmah idemo na gornju palubu. Vjetar puše jako, a more je tamnoplave boje. Galebovi lete iznad broda i glasno kliču. Brat baca komadić kruha u zrak, a galeb ga spretno uhvati. Svi se smijemo toj vještoj ptici.',
        en: 'On the ferry we head straight for the upper deck. The wind blows hard and the sea is deep blue. Seagulls fly above the boat, calling loudly. My brother tosses a piece of bread into the air and a gull catches it skillfully. We all laugh at the clever bird.',
      },
      {
        hr: 'Trajekt polako izlazi iz luke i plovi prema otvorenom moru. Grad iza nas postaje sve manji. Vidimo druge otoke u daljini i male ribarske brodove. More miriše na sol, a sunce grije moje lice. Sjedimo na klupi i uživamo u pogledu.',
        en: 'The ferry slowly leaves the harbor and sails toward the open sea. The town behind us grows smaller and smaller. We see other islands in the distance and small fishing boats. The sea smells of salt and the sun warms my face. We sit on a bench and enjoy the view.',
      },
      {
        hr: 'Putovanje traje otprilike sat i pol. Na trajektu postoji mali kafić gdje ljudi piju kavu i jedu sendviče. Tata kupuje sok za mene i brata. Pijemo sok i gledamo valove kako udaraju o bok broda. Neki putnici čitaju knjige, a drugi se samo odmaraju.',
        en: "The trip takes about an hour and a half. There's a small café on the ferry where people drink coffee and eat sandwiches. Dad buys juice for me and my brother. We drink our juice and watch the waves hit the side of the boat. Some passengers read books while others just rest.",
      },
      {
        hr: 'Odjednom brod počne malo ljuljati jer je more nemirnije. Mama kaže da to nije opasno, samo obično ljuljanje. Ipak, malo se bojim i čvrsto držim ogradu. Brat se smije i kaže da je to kao vlakić u zabavnom parku. Polako se opuštam kad vidim da su svi mirni.',
        en: "Suddenly the boat starts rocking a little because the sea has become rougher. Mom says it's not dangerous, just normal rocking. Still, I'm a little scared and grip the railing tightly. My brother laughs and says it's like a ride at an amusement park. I slowly relax when I see everyone else staying calm.",
      },
      {
        hr: 'Nakon nekog vremena ugledamo obalu otoka. Kućice su bijele i crvene, a luka je puna malih brodica. Putnici počinju skupljati svoje stvari i silaziti prema izlazu. Auti kreću prvi, a mi pješice slijedimo gomilu ljudi. Osjećam uzbuđenje jer prvi put dolazim na ovaj otok.',
        en: "After a while we spot the island's coastline. The houses are white and red, and the harbor is full of small boats. Passengers start gathering their things and heading for the exit. Cars go first, and we follow the crowd on foot. I feel excited because this is my first time visiting this island.",
      },
      {
        hr: 'Kad siđemo s trajekta, odmah osjetimo miris borova i mora. Luka je mala i mirna, potpuno drugačija od velikog grada. Tata iznajmljuje skuter, a mi hodamo prema centru mjesta. Ulice su uske i pune cvijeća na prozorima. Svi ljudi izgledaju opušteno i sretno.',
        en: 'As soon as we step off the ferry, we smell pine trees and the sea. The harbor is small and quiet, completely different from the big city. Dad rents a scooter while we walk toward the center of town. The streets are narrow and full of flowers in the windows. Everyone looks relaxed and happy.',
      },
      {
        hr: 'Na kraju dana kupujemo sladoled u maloj slastičarnici pored rive. Ja biram čokoladni okus, a brat uzima jagodu. Sjedimo na klupi i gledamo sunce kako zalazi nad morem. Ovaj dan na otoku je pravo malo putovanje. Jedva čekamo sutrašnje kupanje na plaži.',
        en: 'At the end of the day we buy ice cream at a small shop by the seafront. I choose chocolate flavor while my brother picks strawberry. We sit on a bench and watch the sun set over the sea. This day on the island feels like a little adventure. We can hardly wait to swim at the beach tomorrow.',
      },
    ],
    vocabulary: [
      { hr: 'trajektom', en: 'by ferry', ex: 'Danas putujemo trajektom na otok.' },
      { hr: 'karte', en: 'tickets', ex: 'Mama kupuje karte na šalteru pored ulaza.' },
      { hr: 'gornju palubu', en: 'upper deck', ex: 'Na trajektu odmah idemo na gornju palubu.' },
      { hr: 'Galebovi', en: 'seagulls', ex: 'Galebovi lete iznad broda i glasno kliču.' },
      {
        hr: 'otvorenom moru',
        en: 'open sea',
        ex: 'Trajekt polako izlazi iz luke i plovi prema otvorenom moru.',
      },
      { hr: 'sat i pol', en: 'an hour and a half', ex: 'Putovanje traje otprilike sat i pol.' },
      {
        hr: 'ljuljati',
        en: 'to rock/sway',
        ex: 'Odjednom brod počne malo ljuljati jer je more nemirnije.',
      },
      {
        hr: 'obalu otoka',
        en: "the island's coastline",
        ex: 'Nakon nekog vremena ugledamo obalu otoka.',
      },
      {
        hr: 'miris borova',
        en: 'the smell of pine trees',
        ex: 'Kad siđemo s trajekta, odmah osjetimo miris borova i mora.',
      },
      {
        hr: 'sladoled',
        en: 'ice cream',
        ex: 'Na kraju dana kupujemo sladoled u maloj slastičarnici pored rive.',
      },
    ],
    quiz: [
      {
        q: 'U koliko sati polazi trajekt?',
        qEn: 'At what time does the ferry depart?',
        opts: ['U osam sati', 'U deset sati', 'U podne', 'U šest sati'],
        correct: 0,
      },
      {
        q: 'Gdje obitelj prvo ide kad se ukrca na trajekt?',
        qEn: 'Where does the family go first after boarding the ferry?',
        opts: [
          'U kafić na donjoj palubi',
          'Na gornju palubu',
          'U auto na parkingu broda',
          'U kabinu za odmor',
        ],
        correct: 1,
      },
      {
        q: 'Zašto se pripovjedačica malo uplaši na moru?',
        qEn: 'Why does the narrator get a little scared at sea?',
        opts: [
          'Vidi oluju na horizontu',
          'Netko padne u more',
          'Brod počne ljuljati jer je more nemirnije',
          'Trajekt stane usred puta',
        ],
        correct: 2,
      },
      {
        q: 'Što obitelj kupuje na kraju dana?',
        qEn: 'What does the family buy at the end of the day?',
        opts: ['Suvenire', 'Ribu za večeru', 'Nove sandale', 'Sladoled u slastičarnici'],
        correct: 3,
      },
      {
        q: 'Koliko otprilike traje putovanje trajektom?',
        qEn: 'About how long does the ferry trip take?',
        opts: ['Pola sata', 'Sat i pol', 'Tri sata', 'Cijeli dan'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a2_17',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '💧',
    title: 'Vikend na Plitvicama',
    titleEn: 'A Weekend at Plitvice Lakes',
    duration: 8,
    focus: 'prošlo i buduće vrijeme • priroda i nacionalni park • obiteljski izlet',
    intro:
      'Obitelj Novak provodi nezaboravan vikend istražujući vodopade i jezera Nacionalnog parka Plitvička jezera.',
    paragraphs: [
      {
        hr: 'Obitelj Novak je prošlog vikenda putovala na Plitvička jezera. Otac je rezervirao malu kućicu blizu ulaza u park. Vozili su se skoro dva sata od Zagreba. Kad su stigli, odmah su osjetili miris borove šume. Djeca su bila uzbuđena jer su prvi put vidjela vodopade. Majka je rekla da će ovo biti nezaboravan vikend.',
        en: 'Last weekend the Novak family traveled to Plitvice Lakes. Dad had booked a small cottage near the park entrance. They drove for almost two hours from Zagreb. When they arrived, they immediately smelled the pine forest. The children were excited because they saw waterfalls for the first time. Mom said this would be an unforgettable weekend.',
      },
      {
        hr: 'Sljedećeg jutra cijela obitelj je krenula u šetnju kroz park. Staza je vodila pored prekrasnih zelenih jezera. Voda je bila toliko bistra da su vidjeli ribe. Sunčeva svjetlost stvarala je male duge iznad vodopada. Djeca su trčala naprijed i fotografirala svaki vodopad. Otac im je pokazivao stare drvene mostove. Svi su se divili prirodi.',
        en: 'The next morning the whole family set off on a walk through the park. The trail led past beautiful green lakes. The water was so clear that they could see fish. The sunlight created small rainbows above the waterfalls. The children ran ahead and photographed every waterfall. Dad showed them the old wooden bridges. Everyone marveled at the nature around them.',
      },
      {
        hr: 'Poslije podne su sjeli na malu drvenu klupu pored jezera. Majka je izvadila sendviče i voće iz ruksaka. Jeli su i gledali kako patke plivaju. Iznenada je počela padati kiša. Kiša nije dugo trajala. Djeca su se smijala jer su bila mokra. Otac je rekao da će sutra biti lijepo vrijeme.',
        en: "In the afternoon they sat on a small wooden bench by the lake. Mom took sandwiches and fruit out of the backpack. They ate and watched the ducks swim. Suddenly it started to rain. The rain didn't last long. The children laughed because they were wet. Dad said the weather would be nice tomorrow.",
      },
      {
        hr: 'Navečer su se vratili u kućicu i skuhali večeru. Majka je pripremila tjesteninu sa svježim povrćem iz vrta. Otac je zapalio vatru u kaminu jer je bilo hladno. Djeca su igrala društvene igre za stolom. Kroz prozor su gledali zvijezde iznad tamne šume. Bilo je jako tiho. Svi su brzo zaspali nakon dugog dana.',
        en: 'In the evening they returned to the cottage and cooked dinner. Mom prepared pasta with fresh vegetables from the garden. Dad lit a fire in the fireplace because it was cold. The children played board games at the table. Through the window they watched the stars above the dark forest. It was very quiet. Everyone fell asleep quickly after a long day.',
      },
      {
        hr: 'Sljedećeg dana su posjetili Veliki slap, najveći vodopad u parku. Voda je padala s velike visine uz snažnu buku. Djeca su bila oduševljena veličinom slapa. Otac je snimio video da pokaže prijateljima kod kuće. Poslije su prošetali drvenim stazama iznad jezera. Ribe su plivale ispod prozirne vode. Svi su se slikali ispred prekrasnog krajolika.',
        en: 'The next day they visited Veliki Slap, the biggest waterfall in the park. The water fell from a great height with a powerful roar. The children were amazed by the size of the waterfall. Dad filmed a video to show his friends back home. Afterward they walked along wooden paths above the lakes. Fish swam beneath the clear water. Everyone took photos in front of the stunning landscape.',
      },
      {
        hr: 'Prije povratka kući, obitelj je stala u malom selu blizu parka. Kupili su domaći sir i med od lokalnih seljaka. Prodavačica im je pričala o jezeru. Rekla je da će park uskoro biti još ljepši u jesen. Djeca su obećala da će opet doći sljedeće godine. Majka je fotografirala cijelu obitelj ispred stare vodenice.',
        en: 'Before heading home, the family stopped in a small village near the park. They bought homemade cheese and honey from local farmers. The saleswoman told them about the lake. She said the park would soon be even more beautiful in autumn. The children promised they would come again next year. Mom photographed the whole family in front of an old watermill.',
      },
      {
        hr: 'Na putu kući, djeca su pričala o svojim omiljenim vodopadima. Otac je vozio polako jer je cesta bila puna zavoja. Majka je rekla da će sljedeći put ostati duže. Svi su se složili da su Plitvice čudesne. Kad su stigli u Zagreb, bili su umorni ali sretni. Vikend na Plitvicama ostat će dugo u sjećanju.',
        en: 'On the way home, the children talked about their favorite waterfalls. Dad drove slowly because the road was full of curves. Mom said that next time they would stay longer. Everyone agreed that Plitvice was wonderful. When they arrived in Zagreb, they were tired but happy. The weekend at Plitvice would stay in their memory for a long time.',
      },
    ],
    vocabulary: [
      {
        hr: 'jezero',
        en: 'lake',
        ex: 'Staza je vodila pored prekrasnih zelenih jezera.',
      },
      {
        hr: 'vodopad',
        en: 'waterfall',
        ex: 'Djeca su prvi put vidjela vodopade.',
      },
      {
        hr: 'staza',
        en: 'trail, path',
        ex: 'Staza je vodila pored prekrasnih zelenih jezera.',
      },
      {
        hr: 'šuma',
        en: 'forest',
        ex: 'Odmah su osjetili miris borove šume.',
      },
      {
        hr: 'ruksak',
        en: 'backpack',
        ex: 'Majka je izvadila sendviče iz ruksaka.',
      },
      {
        hr: 'kućica',
        en: 'cottage',
        ex: 'Otac je rezervirao malu kućicu blizu ulaza u park.',
      },
      {
        hr: 'slap',
        en: 'waterfall, cascade',
        ex: 'Sljedećeg dana su posjetili Veliki slap.',
      },
      {
        hr: 'vodenica',
        en: 'watermill',
        ex: 'Majka je fotografirala obitelj ispred stare vodenice.',
      },
    ],
    quiz: [
      {
        q: 'Tko je rezervirao kućicu blizu parka?',
        qEn: 'Who booked the cottage near the park?',
        opts: ['Majka', 'Otac', 'Baka', 'Djeca'],
        correct: 1,
      },
      {
        q: 'Zašto je voda u jezerima izgledala posebno?',
        qEn: 'Why did the lake water look special?',
        opts: [
          'Bila je zelena i mutna',
          'Bila je toliko bistra da su vidjeli ribe',
          'Bila je smrznuta',
          'Bila je vrlo duboka',
        ],
        correct: 1,
      },
      {
        q: 'Što se dogodilo poslije podne kraj jezera?',
        qEn: 'What happened in the afternoon by the lake?',
        opts: ['Počela je padati kiša', 'Nestala je struja', 'Izgubili su se', 'Auto se pokvario'],
        correct: 0,
      },
      {
        q: 'Što su kupili u malom selu?',
        qEn: 'What did they buy in the small village?',
        opts: ['Suvenire', 'Domaći sir i med', 'Odjeću', 'Karte za brod'],
        correct: 1,
      },
      {
        q: 'Kako se obitelj osjećala na putu kući?',
        qEn: 'How did the family feel on the way home?',
        opts: ['Ljutito', 'Umorno, ali sretno', 'Razočarano', 'Uplašeno'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a2_18',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🍲',
    title: 'Nedjeljni ručak s rođakom iz Amerike',
    titleEn: 'Sunday Lunch with a Cousin from America',
    duration: 8,
    focus: 'obiteljsko okupljanje • tradicionalna kuhinja • iseljeništvo i povratak',
    intro:
      'Obitelj Kovačević priprema poseban nedjeljni ručak jer se rođak Filip vraća iz Amerike u posjet.',
    paragraphs: [
      {
        hr: 'Svake nedjelje obitelj Kovačević priprema veliki ručak zajedno. Ovog tjedna je posebno uzbudljivo jer dolazi rođak Filip iz Amerike. Filip je otišao u Chicago prije deset godina. Sada se vratio u Hrvatsku na kratak posjet obitelji. Baka Zora je rano ustala da pripremi sve namirnice. Ona je odlučila skuhati tradicionalnu sarmu i pečenu piletinu.',
        en: 'Every Sunday the Kovačević family prepares a big lunch together. This week is especially exciting because cousin Filip is coming from America. Filip moved to Chicago ten years ago. Now he has returned to Croatia for a short family visit. Grandma Zora got up early to prepare all the ingredients. She decided to cook traditional sarma and roast chicken.',
      },
      {
        hr: 'Mama Ivana je otišla na tržnicu kupiti svježe povrće. Kupila je kupus, luk, mrkvu i puno začina. Otac Damir je u međuvremenu čistio dvorište i postavljao stolove. Sestra Lucija je pekla kolač od jabuka za desert. Cijela kuća je mirisala na luk koji se prži. Svi su žurili jer je Filip trebao stići prije podneva.',
        en: 'Mom Ivana went to the market to buy fresh vegetables. She bought cabbage, onions, carrots and lots of spices. Meanwhile, dad Damir was cleaning the yard and setting up tables. Sister Lucija was baking an apple cake for dessert. The whole house smelled of frying onions. Everyone was hurrying because Filip was due to arrive before noon.',
      },
      {
        hr: 'Baka Zora je pažljivo umotavala meso u listove kupusa. Ona je naučila taj recept od svoje majke davno. Sarma mora kuhati na laganoj vatri nekoliko sati. Kuhinja je bila puna pare i mirisa začina. Djeca su pomagala slagati tanjure i čaše na stol. Svi su znali da će ručak biti poseban ovaj put.',
        en: 'Grandma Zora carefully wrapped the meat in cabbage leaves. She had learned that recipe from her own mother long ago. Sarma needs to simmer on low heat for several hours. The kitchen was full of steam and the smell of spices. The children helped set the plates and glasses on the table. Everyone knew this lunch would be special this time.',
      },
      {
        hr: 'Točno u podne, ispred kuće se zaustavio taksi. Filip je izašao s velikim osmijehom na licu. Nosio je poklone za svu djecu iz obitelji. Baka Zora je potrčala prema njemu i zagrlila ga čvrsto. "Nisi se nimalo promijenio," rekla je sa suzama radosnicama. Filip je odgovorio da mu je Hrvatska uvijek u srcu.',
        en: 'Exactly at noon, a taxi stopped in front of the house. Filip stepped out with a big smile on his face. He was carrying gifts for all the children in the family. Grandma Zora ran toward him and hugged him tightly. "You haven\'t changed a bit," she said with tears of joy. Filip replied that Croatia was always in his heart.',
      },
      {
        hr: 'Svi su sjeli za veliki stol pod starom lipom. Baka je iznijela sarmu koja je mirisala prekrasno. Filip je probao prvi zalogaj i zatvorio oči. "Ovo je okus mog djetinjstva," rekao je tiho. U Americi nikad nije našao takav pravi domaći okus. Obitelj se smijala i pričala priče iz starih dana.',
        en: 'Everyone sat down at the big table under the old linden tree. Grandma brought out the sarma, which smelled wonderful. Filip took the first bite and closed his eyes. "This is the taste of my childhood," he said quietly. In America he had never found such a real homemade taste. The family laughed and told stories from the old days.',
      },
      {
        hr: 'Poslije ručka, Filip je pričao o svom životu u Chicagu. Rekao je da radi kao inženjer u velikoj tvrtki. Nedostajali su mu hrvatski jezik i obiteljska okupljanja. Djeca su ga pitala hoće li se jednog dana vratiti zauvijek. Filip je rekao da još ne zna odgovor. Ipak, obećao je da će dolaziti svake godine.',
        en: "After lunch, Filip talked about his life in Chicago. He said he works as an engineer at a large company. He missed the Croatian language and family gatherings. The children asked him if he would ever return for good. Filip said he still didn't know the answer. Still, he promised he would come every year.",
      },
      {
        hr: 'Nakon kolača i kave, svi su izašli u vrt. Djeca su igrala nogomet, a odrasli su sjedili i razgovarali. Sunce je polako zalazilo iza susjednih brežuljaka. Baka Zora je gledala svoju obitelj s velikim ponosom. Ovaj nedjeljni ručak bio je poseban jer je spojio generacije. Filip je otputovao sljedeći dan, ali obećanje je ostalo.',
        en: 'After cake and coffee, everyone went out into the garden. The children played football while the adults sat and talked. The sun slowly set behind the neighboring hills. Grandma Zora watched her family with great pride. This Sunday lunch was special because it brought the generations together. Filip left the next day, but the promise remained.',
      },
    ],
    vocabulary: [
      {
        hr: 'ručak',
        en: 'lunch',
        ex: 'Svake nedjelje obitelj priprema veliki ručak.',
      },
      {
        hr: 'sarma',
        en: 'sarma (stuffed cabbage rolls)',
        ex: 'Baka je pažljivo umotavala sarmu.',
      },
      {
        hr: 'rođak',
        en: 'cousin (m.)',
        ex: 'Dolazi rođak Filip iz Amerike.',
      },
      {
        hr: 'tržnica',
        en: 'market',
        ex: 'Mama je otišla na tržnicu kupiti povrće.',
      },
      {
        hr: 'kolač',
        en: 'cake',
        ex: 'Sestra je pekla kolač od jabuka.',
      },
      {
        hr: 'obitelj',
        en: 'family',
        ex: 'Cijela obitelj sjela je za veliki stol.',
      },
      {
        hr: 'taksi',
        en: 'taxi',
        ex: 'Ispred kuće se zaustavio taksi.',
      },
    ],
    quiz: [
      {
        q: 'Odakle dolazi rođak Filip?',
        qEn: 'Where does cousin Filip come from?',
        opts: ['Iz Njemačke', 'Iz Amerike', 'Iz Kanade', 'Iz Australije'],
        correct: 1,
      },
      {
        q: 'Što baka Zora kuha za ručak?',
        qEn: 'What does Grandma Zora cook for lunch?',
        opts: ['Pečenu piletinu i sarmu', 'Riblju juhu', 'Tjesteninu', 'Pizzu'],
        correct: 0,
      },
      {
        q: 'Čime Filip dolazi do kuće?',
        qEn: 'How does Filip arrive at the house?',
        opts: ['Vlakom', 'Autobusom', 'Taksijem', 'Biciklom'],
        correct: 2,
      },
      {
        q: 'Čime se Filip bavi u Chicagu?',
        qEn: 'What does Filip do for work in Chicago?',
        opts: ['Radi kao liječnik', 'Radi kao inženjer', 'Studira', 'Radi kao kuhar'],
        correct: 1,
      },
      {
        q: 'Što je Filip obećao obitelji?',
        qEn: 'What did Filip promise the family?',
        opts: [
          'Da će se odmah vratiti zauvijek',
          'Da će dolaziti svake godine',
          'Da neće više dolaziti',
          'Da će poslati novac',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a2_19',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🚲',
    title: 'Biciklom na posao',
    titleEn: 'Cycling to Work',
    duration: 10,
    focus: 'Perfekt tense • Everyday connectors (pa, zato, ali, jer) • Workplace vocabulary',
    intro:
      "Marko's bike commute takes an unexpected detour when a flat tire threatens to make him late for an important meeting — a story about small mishaps and understanding bosses.",
    paragraphs: [
      {
        hr: 'Marko svako jutro vozi bicikl na posao jer živi blizu centra grada. Jučer je ustao malo kasnije nego inače, pa je morao žuriti. Popio je kavu u žurbi i brzo obukao jaknu. Bicikl je čekao ispred zgrade, naslonjen na ogradu. Marko je skočio na sjedalo i krenuo prema uredu.',
        en: 'Marko rides his bike to work every morning because he lives close to the city center. Yesterday he got up a bit later than usual, so he had to rush. He drank his coffee in a hurry and quickly put on his jacket. The bike was waiting outside the building, leaning against the railing. Marko hopped on the seat and set off toward the office.',
      },
      {
        hr: 'Vožnja je obično ugodna jer prolazi kroz mirnu ulicu pored parka. Tog jutra je sunce lijepo sijalo, a zrak je bio svjež. Marko je vozio brzo jer nije htio zakasniti na sastanak. Odjednom je začuo čudan zvuk iz stražnjeg kotača. Bicikl je odjednom postao težak za vožnju, kao da nešto vuče kotač.',
        en: "The ride is usually pleasant because it passes through a quiet street by the park. That morning the sun was shining beautifully and the air was fresh. Marko rode fast because he didn't want to be late for his meeting. Suddenly he heard a strange sound coming from the back wheel. The bike suddenly became hard to pedal, as if something were dragging on the wheel.",
      },
      {
        hr: 'Marko je stao pored ceste i pogledao kotač. Guma je bila potpuno prazna, probušena komadićem stakla. Uzdahnuo je od frustracije jer nije ponio alat za popravak. Pogledao je sat na mobitelu: za dvadeset minuta počinje sastanak. Nazvao je kolegicu i objasnio joj problem.',
        en: "Marko stopped by the road and looked at the wheel. The tire was completely flat, punctured by a piece of glass. He sighed in frustration because he hadn't brought any repair tools. He checked the clock on his phone: the meeting started in twenty minutes. He called a colleague and explained the problem.",
      },
      {
        hr: 'Srećom, ubrzo se sjetio da postoji servis bicikala dvije ulice dalje. Gurao je bicikl niz ulicu, ljutit na sebe zbog kašnjenja. Vlasnik servisa, stariji gospodin, odmah je prepoznao problem. Rekao je da će popravak trajati samo petnaest minuta. Marko mu je zahvalio na brzoj pomoći.',
        en: 'Luckily, he soon remembered there was a bike repair shop two streets away. He pushed the bike down the street, annoyed with himself for being late. The shop owner, an older gentleman, immediately recognized the problem. He said the repair would take only fifteen minutes. Marko thanked him for the quick help.',
      },
      {
        hr: "Dok je čekao, Marko je poslao poruku šefu da će malo zakasniti. Šef mu je odgovorio kratko: 'U redu, samo dođi čim možeš.' Marko se malo smirio jer nije očekivao takvu reakciju. Sjeo je na klupu ispred servisa i gledao ljude kako prolaze. Vrijeme je prolazilo sporije nego što je htio.",
        en: "While he waited, Marko texted his boss to say he'd be a little late. His boss replied briefly: 'No problem, just come when you can.' Marko calmed down a bit since he hadn't expected such a reaction. He sat on a bench in front of the shop and watched people passing by. Time seemed to pass more slowly than he wanted.",
      },
      {
        hr: 'Nakon petnaest minuta, mehaničar je vratio bicikl s novom unutarnjom gumom. Marko mu je platio nekoliko eura i zahvalio na trudu. Brzo je skočio na bicikl i nastavio put prema uredu. Vozio je brže nego inače jer je htio nadoknaditi izgubljeno vrijeme. Srce mu je jako tuklo od žurbe i napora.',
        en: 'After fifteen minutes, the mechanic returned the bike with a new inner tube. Marko paid him a few euros and thanked him for his effort. He quickly hopped back on the bike and continued toward the office. He pedaled faster than usual, trying to make up for lost time. His heart pounded hard from the rush and the effort.',
      },
      {
        hr: 'Kad je stigao u ured, sastanak je već bio u tijeku. Tiho je ušao i sjeo na svoje mjesto pored prozora. Šef ga je pogledao, ali nije rekao ništa neugodno. Nakon sastanka, šef mu je prišao i pitao što se dogodilo. Marko mu je ispričao cijelu priču o probušenoj gumi.',
        en: "When he arrived at the office, the meeting was already underway. He quietly slipped in and sat down at his seat by the window. His boss glanced at him but didn't say anything unpleasant. After the meeting, the boss came over and asked what had happened. Marko told him the whole story about the flat tire.",
      },
      {
        hr: 'Šef se nasmijao i rekao da se to svima može dogoditi. Ipak, savjetovao je Marku da idući put nosi rezervni alat. Marko mu je obećao da će od sutra imati komplet za hitne popravke u torbi. Kolege su ga zadirkivale cijeli dan zbog kašnjenja. Marko se samo smijao i priznao da je jutro bilo naporno.',
        en: "The boss laughed and said it could happen to anyone. Still, he advised Marko to carry spare tools next time. Marko promised that from tomorrow he'd keep an emergency repair kit in his bag. His coworkers teased him all day about being late. Marko just laughed along and admitted the morning had been exhausting.",
      },
      {
        hr: 'Navečer, na putu kući, Marko je kupio mali komplet alata u trgovini. Odlučio je da više nikad neće riskirati takvo kašnjenje. Vozio je polako kući, uživajući u mirnoj večeri bez žurbe. Ovaj dan ga je naučio da uvijek treba biti spreman na iznenađenja. Sutra će opet voziti bicikl na posao, ali s alatom u torbi.',
        en: "In the evening, on his way home, Marko bought a small tool kit at a shop. He decided he would never risk being late like that again. He rode home slowly, enjoying the calm evening without any rush. The day taught him that you should always be ready for surprises. Tomorrow he'll ride his bike to work again — but this time with tools in his bag.",
      },
    ],
    vocabulary: [
      {
        hr: 'vozi bicikl',
        en: 'rides a bike',
        ex: 'Marko svako jutro vozi bicikl na posao jer živi blizu centra grada.',
      },
      {
        hr: 'probušena komadićem stakla',
        en: 'punctured by a piece of glass',
        ex: 'Guma je bila potpuno prazna, probušena komadićem stakla.',
      },
      {
        hr: 'servis bicikala',
        en: 'bike repair shop',
        ex: 'Srećom, ubrzo se sjetio da postoji servis bicikala dvije ulice dalje.',
      },
      {
        hr: 'zahvalio na brzoj pomoći',
        en: 'thanked him for the quick help',
        ex: 'Marko mu je zahvalio na brzoj pomoći.',
      },
      {
        hr: 'poslao poruku šefu',
        en: 'sent a message to the boss',
        ex: 'Dok je čekao, Marko je poslao poruku šefu da će malo zakasniti.',
      },
      {
        hr: 'novom unutarnjom gumom',
        en: 'with a new inner tube',
        ex: 'Nakon petnaest minuta, mehaničar je vratio bicikl s novom unutarnjom gumom.',
      },
      {
        hr: 'sastanak je već bio u tijeku',
        en: 'the meeting was already underway',
        ex: 'Kad je stigao u ured, sastanak je već bio u tijeku.',
      },
      {
        hr: 'savjetovao je Marku',
        en: 'he advised Marko',
        ex: 'Ipak, savjetovao je Marku da idući put nosi rezervni alat.',
      },
      {
        hr: 'zadirkivale cijeli dan',
        en: 'teased him all day',
        ex: 'Kolege su ga zadirkivale cijeli dan zbog kašnjenja.',
      },
      {
        hr: 'komplet alata',
        en: 'tool kit',
        ex: 'Navečer, na putu kući, Marko je kupio mali komplet alata u trgovini.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je Marko jučer žurio ujutro?',
        qEn: 'Why was Marko in a hurry yesterday morning?',
        opts: [
          'Ustao je kasnije nego inače',
          'Zaboravio je bicikl kod kuće',
          'Auto mu se pokvario',
          'Prespavao je sastanak',
        ],
        correct: 0,
      },
      {
        q: 'Što se dogodilo s biciklom tijekom vožnje?',
        qEn: 'What happened to the bike during the ride?',
        opts: [
          'Lanac je pukao',
          'Guma na stražnjem kotaču se probušila',
          'Kočnice nisu radile',
          'Sjedalo se otkačilo',
        ],
        correct: 1,
      },
      {
        q: 'Koliko je trajao popravak bicikla?',
        qEn: 'How long did the bike repair take?',
        opts: ['Pet minuta', 'Pola sata', 'Petnaest minuta', 'Cijeli sat'],
        correct: 2,
      },
      {
        q: 'Kako je šef reagirao kad je Marko poslao poruku o kašnjenju?',
        qEn: 'How did the boss react when Marko sent the message about being late?',
        opts: [
          'Ljutito je odgovorio',
          'Nije uopće odgovorio',
          'Otkazao je sastanak',
          'Mirno mu je rekao da dođe čim može',
        ],
        correct: 3,
      },
      {
        q: 'Što je Marko kupio navečer na putu kući?',
        qEn: 'What did Marko buy in the evening on the way home?',
        opts: ['Novi bicikl', 'Mali komplet alata', 'Novu jaknu', 'Kavu za sutra'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_a2_20',
    level: 'A2',
    levelColor: '#1e40af',
    levelBg: '#dbeafe',
    icon: '🫙',
    title: 'Priprema zimnice',
    titleEn: 'Making Winter Preserves',
    duration: 10,
    focus: 'Perfekt tense • Food & kitchen vocabulary • Family tradition',
    intro:
      "Laura spends a day at her grandmother's house learning the family tradition of making ajvar — Croatia's beloved roasted-pepper preserve — jar by jar.",
    paragraphs: [
      {
        hr: 'Svake jeseni baka Zora poziva unuku Lauru da joj pomogne oko zimnice. Ove godine Laura je prvi put ozbiljno sudjelovala u cijelom procesu. Rano ujutro stigla je k baki na selo, gdje su je čekale vreće svježe paprike. Baka je već pripremila veliki lonac i daske za rezanje. Kuhinja je mirisala na papriku i češnjak.',
        en: "Every autumn, Grandma Zora invites her granddaughter Laura to help her with the winter preserves. This year, Laura took part in the whole process seriously for the first time. She arrived early in the morning at her grandmother's village house, where sacks of fresh peppers were waiting for her. Grandma had already prepared a big pot and cutting boards. The kitchen smelled of peppers and garlic.",
      },
      {
        hr: 'Prvi zadatak bio je oprati papriku pod hladnom vodom. Laura je pažljivo prala svaku papriku, a baka je provjeravala je li dovoljno čista. Zatim su zajedno pekle papriku na velikom pladnju u pećnici. Kad je koža paprike postala tamna i mjehurasta, baka ju je izvadila i pokrila krpom da se ohladi.',
        en: 'The first task was washing the peppers under cold water. Laura carefully washed each pepper while Grandma checked that they were clean enough. Then together they roasted the peppers on a large tray in the oven. When the pepper skins turned dark and blistered, Grandma took them out and covered them with a cloth to cool.',
      },
      {
        hr: 'Guljenje kože bio je najsporiji dio posla, pa su sjele za stol i radile zajedno. Baka je ispričala kako je nekad, kad je bila mlada, cijela obitelj pomagala u pripremi zimnice. Laura je pažljivo slušala priče o starim vremenima. Ruke su im bile ljepljive od soka paprike, ali obje su uživale u razgovoru.',
        en: 'Peeling the skins was the slowest part of the job, so they sat at the table and worked together. Grandma told stories about how, back when she was young, the whole family used to help prepare the winter preserves. Laura listened carefully to the stories about the old days. Their hands were sticky from the pepper juice, but they both enjoyed the conversation.',
      },
      {
        hr: 'Kad je sva paprika oguljena, baka je uključila stroj za mljevenje. Meso paprike pretvorilo se u gustu crvenu masu. Baka je dodala malo ulja, soli i češnjaka po staroj obiteljskoj recepturi. Laura je miješala smjesu drvenom kuhačom dok se ajvar polako kuhao na laganoj vatri.',
        en: 'Once all the peppers were peeled, Grandma turned on the grinding machine. The pepper flesh turned into a thick red paste. Grandma added a little oil, salt, and garlic, following the old family recipe. Laura stirred the mixture with a wooden spoon while the ajvar slowly cooked over a low flame.',
      },
      {
        hr: 'Kuhanje ajvara trajalo je gotovo dva sata jer se smjesa morala stalno miješati. Miris pečene paprike ispunio je cijelu kuću i dopro čak do dvorišta. Baka je povremeno kušala ajvar i dodavala začine po potrebi. Laura je zahvalila baki na strpljenju jer je proces bio dulji nego što je očekivala.',
        en: "Cooking the ajvar took almost two hours because the mixture had to be stirred constantly. The smell of roasted peppers filled the whole house and even reached the yard. Grandma occasionally tasted the ajvar and added seasoning as needed. Laura thanked Grandma for her patience, since the process took longer than she'd expected.",
      },
      {
        hr: 'Dok su čekale da se ajvar skuha, zajedno su oprale staklenke u vrućoj vodi. Baka je objasnila da staklenke moraju biti savršeno čiste, inače se zimnica brzo pokvari. Laura je slagala staklenke na čist ručnik da se osuše. Sunce je kroz prozor obasjavalo kuhinju, a baka je pjevušila staru pjesmu dok je radila.',
        en: 'While waiting for the ajvar to cook, they washed the jars together in hot water. Grandma explained that the jars had to be perfectly clean, otherwise the preserves would spoil quickly. Laura arranged the jars on a clean towel to dry. Sunlight streamed through the window into the kitchen while Grandma hummed an old song as she worked.',
      },
      {
        hr: 'Kad je ajvar bio gotov, baka je vruću smjesu pažljivo ulila u staklenke. Laura je brzo zatvarala poklopce dok je baka punila sljedeću staklenku. Zajedno su okrenule staklenke naopako na deku, kako je baka naučila od svoje majke. Ova stara metoda pomaže da se poklopci dobro zabrtve.',
        en: 'When the ajvar was ready, Grandma carefully poured the hot mixture into the jars. Laura quickly sealed the lids while Grandma filled the next jar. Together they turned the jars upside down on a blanket, just as Grandma had learned from her own mother. This old method helps the lids seal tightly.',
      },
      {
        hr: 'Poslije nekoliko sati staklenke su se ohladile, a poklopci su tiho puknuli kao znak da su dobro zatvorene. Baka je s ponosom poredala staklenke na policu u smočnici. Rekla je da će ove zalihe ajvara trajati cijelu zimu. Laura je osjetila veliko zadovoljstvo jer je prvi put sama sudjelovala u cijelom postupku.',
        en: 'After a few hours the jars had cooled, and the lids quietly popped as a sign that they were sealed properly. Grandma proudly lined up the jars on a shelf in the pantry. She said this batch of ajvar would last the whole winter. Laura felt a deep sense of satisfaction, having taken part in the whole process herself for the first time.',
      },
      {
        hr: 'Navečer su sjele za stol i probale svježi kruh s toplim ajvarom. Okus je bio bogat, blago sladak i pomalo ljut. Baka je zahvalila Lauri na pomoći i rekla da je ponosna na nju. Laura je obećala da će svake godine dolaziti pomoći oko zimnice. Ova tradicija sada je postala i njezina, ne samo bakina.',
        en: "In the evening they sat at the table and tasted fresh bread with warm ajvar. The flavor was rich, slightly sweet, and a little spicy. Grandma thanked Laura for her help and said she was proud of her. Laura promised she would come help with the winter preserves every year from now on. This tradition had now become hers too, not just her grandmother's.",
      },
    ],
    vocabulary: [
      {
        hr: 'vreće svježe paprike',
        en: 'sacks of fresh peppers',
        ex: 'Rano ujutro stigla je k baki na selo, gdje su je čekale vreće svježe paprike.',
      },
      {
        hr: 'pekle papriku',
        en: 'roasted the peppers',
        ex: 'Zatim su zajedno pekle papriku na velikom pladnju u pećnici.',
      },
      {
        hr: 'guljenje kože',
        en: 'peeling the skin',
        ex: 'Guljenje kože bio je najsporiji dio posla, pa su sjele za stol i radile zajedno.',
      },
      {
        hr: 'stroj za mljevenje',
        en: 'grinding machine',
        ex: 'Kad je sva paprika oguljena, baka je uključila stroj za mljevenje.',
      },
      {
        hr: 'ajvar polako kuhao',
        en: 'the ajvar slowly cooked',
        ex: 'Laura je miješala smjesu drvenom kuhačom dok se ajvar polako kuhao na laganoj vatri.',
      },
      {
        hr: 'zahvalila baki na strpljenju',
        en: 'thanked grandma for her patience',
        ex: 'Laura je zahvalila baki na strpljenju jer je proces bio dulji nego što je očekivala.',
      },
      {
        hr: 'oprale staklenke',
        en: 'washed the jars',
        ex: 'Dok su čekale da se ajvar skuha, zajedno su oprale staklenke u vrućoj vodi.',
      },
      {
        hr: 'okrenule staklenke naopako',
        en: 'turned the jars upside down',
        ex: 'Zajedno su okrenule staklenke naopako na deku, kako je baka naučila od svoje majke.',
      },
      {
        hr: 'poklopci su tiho puknuli',
        en: 'the lids quietly popped',
        ex: 'Poslije nekoliko sati staklenke su se ohladile, a poklopci su tiho puknuli kao znak da su dobro zatvorene.',
      },
      {
        hr: 'probale svježi kruh s toplim ajvarom',
        en: 'tasted fresh bread with warm ajvar',
        ex: 'Navečer su sjele za stol i probale svježi kruh s toplim ajvarom.',
      },
    ],
    quiz: [
      {
        q: 'Tko poziva Lauru da pomogne oko zimnice?',
        qEn: 'Who invites Laura to help with the winter preserves?',
        opts: ['Baka Zora', 'Majka', 'Teta', 'Susjeda'],
        correct: 0,
      },
      {
        q: 'Što rade Laura i baka s paprikom nakon pranja?',
        qEn: 'What do Laura and grandma do with the peppers after washing them?',
        opts: ['Odmah je melju', 'Peku je u pećnici', 'Stave je u zamrzivač', 'Kuhaju je u vodi'],
        correct: 1,
      },
      {
        q: 'Koliko otprilike traje kuhanje ajvara?',
        qEn: 'About how long does cooking the ajvar take?',
        opts: ['Pola sata', 'Jedan sat', 'Gotovo dva sata', 'Cijeli dan'],
        correct: 2,
      },
      {
        q: 'Zašto baka i Laura okreću staklenke naopako?',
        qEn: 'Why do grandma and Laura turn the jars upside down?',
        opts: [
          'Da se ajvar brže ohladi',
          'Da provjere boju ajvara',
          'Da uklone zrak iz staklenke',
          'Jer je to stara metoda da se poklopci dobro zabrtve',
        ],
        correct: 3,
      },
      {
        q: 'Što Laura i baka rade navečer, na kraju dana?',
        qEn: 'What do Laura and grandma do in the evening, at the end of the day?',
        opts: [
          'Idu spavati bez večere',
          'Probaju svježi kruh s toplim ajvarom',
          'Odlaze u kupovinu',
          'Peru sve staklenke ponovno',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b1_17',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🏡',
    title: 'Kamena kuća na Korčuli',
    titleEn: 'The Stone House on Korčula',
    duration: 9,
    focus: "Građevinski i kućni rječnik • Relativne rečenice s 'koji' • Izražavanje planova i nade",
    intro:
      'Ana i Marko odlučili su ostaviti gradski život i obnoviti staru kamenu kuću na otoku Korčuli. Priča prati njihov prvi ljetni mjesec obnove, pun iznenađenja, truda i malih pobjeda.',
    paragraphs: [
      {
        hr: 'Ana i Marko su mladi bračni par iz Splita koji je prošle jeseni odlučio zamijeniti stan u gradu za kamenu kuću u malom selu na Korčuli. Kuću je Ani ostavila baka, no zgrada je gotovo dvadeset godina stajala prazna i uvelike je propadala. Kad su prvi put otvorili teška drvena vrata, osjetili su miris vlage i starog kamena.',
        en: 'Ana and Marko are a young married couple from Split who decided last autumn to trade their city apartment for a stone house in a small village on Korčula. The house was left to Ana by her grandmother, but the building had stood empty for almost twenty years and was falling into serious disrepair. When they first opened the heavy wooden door, they smelled damp and old stone.',
      },
      {
        hr: 'Iako su oboje imali stalne poslove u Splitu, Marko je uzeo neplaćeni dopust kako bi cijelo ljeto proveo na otoku. Ana je nastavila raditi na daljinu, jer joj poslodavac dopušta rad izvan ureda. Odlučili su da će sami obaviti dio radova, dok će za teže poslove, poput krova, unajmiti lokalne majstore.',
        en: 'Although both had steady jobs in Split, Marko took unpaid leave so he could spend the whole summer on the island. Ana kept working remotely, since her employer allows her to work outside the office. They decided to do some of the work themselves, while hiring local craftsmen for the harder jobs, like the roof.',
      },
      {
        hr: 'Prvi veliki problem pojavio se već drugog dana, kada su na tavanu otkrili da je krovna konstrukcija truležna te da bi se pri jačoj kiši mogla urušiti. Majstor kojeg su pozvali iz obližnjeg mjesta rekao im je da cijeli krov treba zamijeniti, a ne samo popraviti crijep koji je pukao.',
        en: 'The first big problem appeared on the second day, when they discovered in the attic that the roof structure was rotten and could collapse in heavy rain. The craftsman they called from a nearby town told them the whole roof needed replacing, not just the cracked tiles.',
      },
      {
        hr: 'Zamjena krova koštala je više nego što su isprva planirali, pa su se Ana i Marko dugo svađali oko toga odakle uzeti dodatni novac. Naposljetku su odlučili prodati stariji obiteljski automobil, jer su zaključili da im na otoku, gdje je sve blizu, drugi auto zapravo i ne treba.',
        en: "Replacing the roof cost more than they had originally planned, so Ana and Marko argued for a long time about where to find the extra money. In the end they decided to sell their older family car, since they concluded that on the island, where everything is close by, they didn't really need a second car.",
      },
      {
        hr: 'Dok su majstori radili na krovu, Ana i Marko su čistili unutrašnje zidove od stare žbuke koja se ljuštila s kamena. Iza jednog ormara pronašli su zazidani prozor koji nitko od njih nije znao da postoji. U dvorištu su, kopajući korov, otkrili i stari kameni bunar pun zemlje i lišća.',
        en: 'While the craftsmen worked on the roof, Ana and Marko cleaned the old plaster off the inner stone walls. Behind a cupboard they found a bricked-up window that neither of them knew existed. In the yard, while pulling weeds, they also uncovered an old stone well full of dirt and leaves.',
      },
      {
        hr: 'Susjedi iz sela, uglavnom stariji ljudi koji su cijeli život proveli na otoku, često su navraćali da vide kako napreduje obnova. Jedan je susjed donio staru fotografiju kuće iz pedesetih godina, na kojoj se vidjelo da je pročelje nekoć bilo ukrašeno kamenim natpisom s godinom gradnje.',
        en: 'Neighbors from the village, mostly older people who had spent their whole lives on the island, often dropped by to see how the renovation was progressing. One neighbor brought an old photograph of the house from the 1950s, which showed that the façade had once been decorated with a stone inscription bearing the year it was built.',
      },
      {
        hr: 'Ljetne vrućine otežavale su posao, jer se u podne gotovo nije moglo raditi na suncu, a navečer su ih mučili komarci koji su dolazili iz obližnjeg maslinika. Unatoč tim poteškoćama, Marko je tvrdio da bi mu bilo žao odustati sada kada su već uložili toliko truda i novca.',
        en: "The summer heat made the work harder, since it was almost impossible to work in the sun at midday, and in the evenings they were bothered by mosquitoes coming from a nearby olive grove. Despite these difficulties, Marko said he'd regret giving up now, after they had already invested so much effort and money.",
      },
      {
        hr: 'Do kraja kolovoza krov je bio gotov, a zidovi očišćeni i ponovno ožbukani vapnom, kako bi kamen mogao disati. Ana i Marko su odlučili da će sljedećeg ljeta urediti i vrt te dio kuće pretvoriti u sobe za goste. Nadaju se da će za dvije godine kuća napokon izgledati kao dom o kojem su oduvijek sanjali.',
        en: 'By the end of August the roof was finished, and the walls had been cleaned and re-plastered with lime, so the stone could breathe. Ana and Marko decided that next summer they would landscape the garden and turn part of the house into guest rooms. They hope that in two years the house will finally look like the home they always dreamed of.',
      },
    ],
    vocabulary: [
      {
        hr: 'propadati',
        en: 'to fall into disrepair, deteriorate',
        ex: 'Stara kuća je godinama propadala jer nitko nije brinuo o njoj.',
      },
      {
        hr: 'krovna konstrukcija',
        en: 'roof structure',
        ex: 'Krovna konstrukcija bila je trula i opasna za stanovanje.',
      },
      {
        hr: 'žbuka',
        en: 'plaster',
        ex: 'Sa zidova se ljuštila stara žbuka pomiješana sa slamom.',
      },
      {
        hr: 'bunar',
        en: 'well',
        ex: 'U dvorištu su pronašli stari kameni bunar pun lišća.',
      },
      {
        hr: 'neplaćeni dopust',
        en: 'unpaid leave',
        ex: 'Uzeo je neplaćeni dopust kako bi mogao obnoviti kuću.',
      },
      {
        hr: 'majstor',
        en: 'craftsman, repairman',
        ex: 'Pozvali su majstora da procijeni štetu na krovu.',
      },
      {
        hr: 'urušiti se',
        en: 'to collapse',
        ex: 'Bojali su se da bi se krov mogao urušiti pri jačoj kiši.',
      },
      {
        hr: 'ožbukati',
        en: 'to plaster (a wall)',
        ex: 'Zidove su ponovno ožbukali vapnenom žbukom.',
      },
      {
        hr: 'maslinik',
        en: 'olive grove',
        ex: 'Komarci su navečer dolazili iz obližnjeg maslinika.',
      },
    ],
    quiz: [
      {
        q: 'Odakle su Ana i Marko?',
        qEn: 'Where are Ana and Marko from?',
        opts: ['Iz Dubrovnika', 'Iz Zagreba', 'Iz Rijeke', 'Iz Splita'],
        correct: 3,
      },
      {
        q: 'Tko je Ani ostavio kuću?',
        qEn: 'Who left the house to Ana?',
        opts: ['Njezin stric', 'Njezina majka', 'Njezina baka', 'Njezin djed'],
        correct: 2,
      },
      {
        q: 'Koji se veliki problem pojavio već drugog dana?',
        qEn: 'What big problem appeared already on the second day?',
        opts: [
          'Puknuta vodovodna cijev',
          'Provala u kuću',
          'Nestanak struje',
          'Trula krovna konstrukcija',
        ],
        correct: 3,
      },
      {
        q: 'Što su Ana i Marko odlučili prodati kako bi platili obnovu?',
        qEn: 'What did Ana and Marko decide to sell to pay for the renovation?',
        opts: ['Anin nakit', 'Markov motocikl', 'Stariji obiteljski automobil', 'Stan u Splitu'],
        correct: 2,
      },
      {
        q: 'Što Ana i Marko planiraju sljedećeg ljeta?',
        qEn: 'What do Ana and Marko plan to do next summer?',
        opts: [
          'Prodati kuću',
          'Sagraditi bazen',
          'Preseliti se natrag u Split',
          'Urediti vrt i sobe za goste',
        ],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b1_18',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🍇',
    title: 'Berba u slavonskom vinogradu',
    titleEn: 'Harvest in a Slavonian Vineyard',
    duration: 9,
    focus:
      "Poljoprivredni rječnik • Vremenske rečenice s 'dok' i 'kad' • Opisivanje svakodnevne rutine",
    intro:
      'Filip je student iz Zagreba koji je jedno ljeto proveo radeći u vinogradu svoje tetke u Slavoniji. Priča opisuje njegovo iskustvo berbe grožđa, teškog rada i seoskog života.',
    paragraphs: [
      {
        hr: 'Filip je student ekonomije u Zagrebu koji je odlučio ljetne praznike provesti radeći kod tetke Slavice u njezinu vinogradu nedaleko od Iloka. Tetka je svake godine tražila pomoć oko berbe grožđa, a ove je godine, budući da joj je sin otišao studirati u inozemstvo, ostala bez para ruku. Filip se odmah javio da pomogne.',
        en: 'Filip is an economics student in Zagreb who decided to spend his summer holiday working for his aunt Slavica in her vineyard near Ilok. Every year his aunt needed help with the grape harvest, and this year, since her son had gone abroad to study, she was left without an extra pair of hands. Filip immediately offered to help.',
      },
      {
        hr: 'Kad je stigao vlakom u Vukovar, a odatle autobusom do sela, Filipa je iznenadila tišina koja je vladala uokolo, tako drugačija od zagrebačke vreve. Vinograd se prostirao na blagoj padini iznad sela, a redovi trsova bili su savršeno poravnani, kao da ih je netko izmjerio ravnalom.',
        en: 'When he arrived by train in Vukovar, and from there by bus to the village, Filip was struck by the silence all around him, so different from the bustle of Zagreb. The vineyard stretched across a gentle slope above the village, and the rows of vines were perfectly aligned, as if someone had measured them with a ruler.',
      },
      {
        hr: 'Svaki dan počinjao je vrlo rano, još prije izlaska sunca, jer je tetka Slavica tvrdila da grožđe treba brati dok je hladno, prije nego što vrućina omekša bobice. Filip bi ustao u pet sati ujutro, popio kavu na brzinu i krenuo prema vinogradu s ostalim sezonskim radnicima.',
        en: 'Every day began very early, before sunrise, since Aunt Slavica insisted the grapes had to be picked while it was still cool, before the heat softened the berries. Filip would get up at five in the morning, drink a quick coffee, and head to the vineyard with the other seasonal workers.',
      },
      {
        hr: 'Prvih nekoliko dana Filipu su ruke bile pune ogrebotina od oštrih listova i žica koje pridržavaju trsove, a leđa su ga boljela od dugotrajnog saginjanja. Iskusniji radnici, koji su berbu obavljali već godinama, pokazali su mu kako pravilno rezati grozdove nožićem, a da pritom ne ošteti lozu.',
        en: "For the first few days Filip's hands were covered in scratches from the sharp leaves and the wires that support the vines, and his back ached from constant bending. The more experienced workers, who had been harvesting for years, showed him how to properly cut the bunches with a small knife without damaging the vine.",
      },
      {
        hr: 'Unatoč naporu, Filipu se svidjelo društvo ostalih berača, među kojima su bili i sezonski radnici iz susjednih sela te dvoje studenata iz Osijeka. Za ručak su svi zajedno sjedali za dugi stol u hladu, gdje je tetka Slavica servirala domaću juhu, kruh i sir, a poslije toga kratko drijemali.',
        en: 'Despite the effort, Filip enjoyed the company of the other pickers, who included seasonal workers from neighboring villages and two students from Osijek. For lunch they all sat together at a long table in the shade, where Aunt Slavica served homemade soup, bread, and cheese, after which they took a short nap.',
      },
      {
        hr: 'Sredinom kolovoza najavljena je jaka oluja s tučom, pa je cijela ekipa morala ubrzati berbu kako bi se što više grožđa spasilo prije nevremena. Radili su do kasno navečer uz svjetlo reflektora, jer je tetka govorila da bi jedna noć tuče mogla uništiti čitav prinos te godine.',
        en: "In mid-August a strong storm with hail was forecast, so the whole team had to speed up the harvest to save as much grapes as possible before the bad weather hit. They worked late into the evening under floodlights, since Aunt Slavica said that a single night of hail could ruin the entire year's crop.",
      },
      {
        hr: 'Srećom, oluja je prošla sela zaobilazeći ih tek rubom, tako da su spasili gotovo sav urod. Te večeri tetka Slavica priredila je malu proslavu s domaćim vinom iz prošlogodišnje berbe, a svi radnici, umorni ali sretni, pjevali su stare slavonske pjesme do kasno u noć.',
        en: "Luckily, the storm passed around the village, only skirting its edge, so they saved almost the entire harvest. That evening Aunt Slavica held a small celebration with homemade wine from last year's harvest, and all the workers, tired but happy, sang old Slavonian songs late into the night.",
      },
      {
        hr: 'Kad se u rujnu vratio u Zagreb, Filip je shvatio koliko je naporan, ali i vrijedan seoski rad kojim se njegova obitelj nekada bavila. Odlučio je da će i sljedećeg ljeta doći pomoći tetki oko berbe, jer mu je taj mjesec u vinogradu, unatoč boli u leđima, ostao jedno od najljepših sjećanja.',
        en: 'When he returned to Zagreb in September, Filip realized how demanding, yet how valuable, the rural work his family had once done really was. He decided he would come back to help his aunt with the harvest again next summer, since that month in the vineyard, despite the backache, had become one of his fondest memories.',
      },
    ],
    vocabulary: [
      {
        hr: 'berba',
        en: 'harvest (of grapes)',
        ex: 'Berba grožđa počinje čim jutra postanu hladnija.',
      },
      {
        hr: 'trs',
        en: 'grapevine (plant)',
        ex: 'Redovi trsova protezali su se cijelom padinom brda.',
      },
      {
        hr: 'grozd',
        en: 'bunch of grapes',
        ex: 'Svaki grozd trebalo je pažljivo odrezati nožićem.',
      },
      {
        hr: 'sezonski radnik',
        en: 'seasonal worker',
        ex: 'Ljeti u vinograd dolaze mnogi sezonski radnici iz okolnih sela.',
      },
      {
        hr: 'loza',
        en: 'grapevine, vine',
        ex: 'Pazili su da nožićem ne oštete lozu prilikom rezanja.',
      },
      {
        hr: 'prinos',
        en: 'yield (of a harvest)',
        ex: 'Loša godina može prepoloviti prinos cijelog vinograda.',
      },
      {
        hr: 'urod',
        en: 'crop, harvest yield',
        ex: 'Zahvaljujući brzoj berbi, spasili su gotovo cijeli urod.',
      },
      {
        hr: 'ogrebotina',
        en: 'scratch',
        ex: 'Nakon prvog dana berbe ruke su mu bile pune ogrebotina.',
      },
    ],
    quiz: [
      {
        q: 'Gdje se nalazi vinograd tetke Slavice?',
        qEn: "Where is Aunt Slavica's vineyard located?",
        opts: ['Blizu Splita', 'Blizu Rijeke', 'Blizu Zagreba', 'Blizu Iloka'],
        correct: 3,
      },
      {
        q: 'Zašto tetka treba pomoć ove godine?',
        qEn: 'Why does the aunt need help this year?',
        opts: [
          'Prodala je dio vinograda',
          'Njezin muž je bolestan',
          'Njezin sin otišao je studirati u inozemstvo',
          'Otvorila je restoran',
        ],
        correct: 2,
      },
      {
        q: 'Zašto beru grožđe rano ujutro?',
        qEn: 'Why do they pick grapes early in the morning?',
        opts: [
          'Jer tako grožđe brže dozrijeva',
          'Jer se navečer ne vidi dobro',
          'Jer je hladnije i bobice su čvršće',
          'Jer je tržnica otvorena samo ujutro',
        ],
        correct: 2,
      },
      {
        q: 'Što je ugrozilo berbu sredinom kolovoza?',
        qEn: 'What threatened the harvest in mid-August?',
        opts: [
          'Najavljena oluja s tučom',
          'Nestašica radnika',
          'Požar u susjednom selu',
          'Kvar traktora',
        ],
        correct: 0,
      },
      {
        q: 'Što je Filip odlučio na kraju priče?',
        qEn: 'What did Filip decide at the end of the story?',
        opts: [
          'Da će se preseliti u Slavoniju',
          'Da će upisati studij poljoprivrede',
          'Da će i sljedeće ljeto doći pomoći',
          'Da više nikada neće raditi u vinogradu',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b1_19',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🐕',
    title: 'Volontiranje u azilu za životinje',
    titleEn: 'Volunteering at an Animal Shelter',
    duration: 11,
    focus:
      'Dativ i instrumental u kontekstu • Vidski parovi (svršeni/nesvršeni) • Rječnik skrbi za životinje',
    intro:
      "Follow a first-time volunteer's first months at a Croatian animal shelter, from daily chores to earning the trust of a traumatized dog.",
    paragraphs: [
      {
        hr: 'Kad sam prije šest mjeseci prvi put ušla u azil za životinje, nisam znala što očekivati. Prijateljica mi je rekla da azilu uvijek nedostaju volonteri, pa sam se odlučila prijaviti. Ravnateljica azila me je dočekala s osmijehom i odmah me odvela u dvorište gdje su psi lajali iz svih kutova.',
        en: "When I first walked into the animal shelter six months ago, I didn't know what to expect. A friend told me the shelter always lacked volunteers, so I decided to sign up. The shelter director greeted me with a smile and immediately took me to the yard where dogs were barking from every corner.",
      },
      {
        hr: 'Svako jutro počinjem s hranjenjem životinja i čišćenjem kaveza, što traje gotovo dva sata. Poslije toga šetam pse po dvorištu, jednog po jednog, jer neki od njih ne podnose druge pse. Volonteri se međusobno dogovaraju tko će raditi koju smjenu, a ja obično dolazim vikendom, kad imam više vremena.',
        en: "Every morning I start by feeding the animals and cleaning the cages, which takes almost two hours. After that I walk the dogs around the yard, one at a time, because some of them can't stand other dogs. The volunteers arrange among themselves who works which shift, and I usually come on weekends, when I have more time.",
      },
      {
        hr: 'Upoznala sam nekoliko drugih volontera, uglavnom studente i umirovljenike koji vole životinje. Marko, iskusni volonter, pokazao mi je gdje se drži hrana i kako se pravilno stavlja ovratnik psu koji se boji ljudi. Zahvalila sam mu na strpljenju, jer sam u početku sve radila presporo i bojala se pogrešaka.',
        en: 'I met several other volunteers, mostly students and retirees who love animals. Marko, an experienced volunteer, showed me where the food is kept and how to properly put a collar on a dog afraid of people. I thanked him for his patience, because at first I did everything too slowly and was afraid of mistakes.',
      },
      {
        hr: 'Najteži slučaj u azilu bio je pas po imenu Rex, njemački ovčar kojeg je prijašnji vlasnik zlostavljao. Rex je režao na svakoga tko mu se približi i skrivao se u kutu kaveza čim bi netko ušao. Nitko od volontera nije se usudio ući k njemu sam, pa smo uvijek išli u paru.',
        en: 'The hardest case in the shelter was a dog named Rex, a German shepherd whose previous owner had abused him. Rex growled at anyone who came near him and hid in the corner of his cage the moment someone entered. None of the volunteers dared go in to him alone, so we always went in pairs.',
      },
      {
        hr: 'Tjednima sam dolazila k Rexovu kavezu i samo sjedila na podu, ne gledajući ga izravno u oči, kako me je naučila veterinarka. Isprva bi zarežao čim bih sjela, no polako se navikavao na moju prisutnost. Donosila sam mu iste poslastice svaki put, u isto vrijeme, jer psi poput njega trebaju predvidljivost.',
        en: "For weeks I came to Rex's cage and just sat on the floor, not looking him directly in the eyes, as the vet had taught me. At first he would growl the moment I sat down, but slowly he got used to my presence. I brought him the same treats every time, at the same time, because dogs like him need predictability.",
      },
      {
        hr: 'Prekretnica se dogodila jednog kišnog utorka, kad je Rex prvi put prišao i onjušio mi ruku umjesto da se povuče. Srce mi je snažno kucalo dok sam mirno sjedila, a on je nakon nekoliko sekundi legao pored mene. Te večeri sam se vratila kući presretna i odmah nazvala roditelje da im ispričam.',
        en: 'The turning point came on a rainy Tuesday, when Rex approached for the first time and sniffed my hand instead of pulling back. My heart pounded hard as I sat still, and after a few seconds he lay down beside me. That evening I went home overjoyed and immediately called my parents to tell them.',
      },
      {
        hr: 'Do proljeća je Rex naučio hodati na povodcu bez povlačenja i više nije režao kad bi mu netko prišao polako. Ravnateljica mi je rekla da se rijetko koji pas oporavi tako brzo, ali da je to zbog moje upornosti i redovitih dolazaka. Bila sam ponosna, iako sam znala da posao još nije završen.',
        en: "By spring Rex had learned to walk on a leash without pulling and no longer growled when someone approached him slowly. The director told me few dogs recover that fast, but that it was thanks to my persistence and regular visits. I was proud, although I knew the work wasn't finished yet.",
      },
      {
        hr: 'Osim pasa, u azilu živi i tridesetak mačaka o kojima se brine druga skupina volontera. Mačke su općenito mirnije, no neke satima ne izlaze iz kartonske kutije od straha. Volim gledati kako se mlade mačke igraju klupkom vune dok starije drijemaju na suncu.',
        en: "Besides dogs, the shelter is also home to about thirty cats, cared for by another group of volunteers. Cats are generally calmer, though some don't leave their cardboard box for hours out of fear. I love watching the young cats play with a ball of yarn while the older ones doze in the sun.",
      },
      {
        hr: 'Azil je organizirao dan otvorenih vrata kako bi se životinje lakše udomile, s plakatima, fotografijama i pričama o svakom psu i svakoj mački. Danima smo pripremali dvorište, postavljali stolove i tiskali letke s brojevima telefona za zainteresirane. Nadala sam se da će netko prepoznati Rexovu vrijednost unatoč njegovoj burnoj prošlosti.',
        en: "The shelter organized an open house so the animals could be adopted more easily, with posters, photos, and stories about every dog and cat. For days we prepared the yard, set up tables, and printed flyers with phone numbers for anyone interested. I hoped someone would recognize Rex's worth despite his turbulent past.",
      },
      {
        hr: 'Na sam dan, bračni par se zaustavio pred Rexovim kavezom i strpljivo me ispitivao o njegovoj prošlosti. Dva tjedna poslije potpisali su papire, a ja sam plakala od sreće dok je odlazio kroz vrata. Danas mi šalju fotografije kako trči po vrtu bez straha, i zato se svake subote vraćam u azil, znajući da povjerenje uvijek vrijedi truda.',
        en: "On the day itself, a married couple stopped for a long time in front of Rex's cage and patiently asked me about his past. Two weeks later they signed the papers, and I cried with joy as he walked out the door. Today they send me photos of him running around the yard without fear, and that's why I come back to the shelter every Saturday, knowing that trust is always worth the effort.",
      },
    ],
    vocabulary: [
      {
        hr: 'azil',
        en: 'shelter',
        ex: 'Kad sam prije šest mjeseci prvi put ušla u azil za životinje, nisam znala što očekivati.',
      },
      {
        hr: 'nedostajati',
        en: 'to be lacking / needed',
        ex: 'Prijateljica mi je rekla da azilu uvijek nedostaju volonteri, pa sam se odlučila prijaviti.',
      },
      {
        hr: 'kavez',
        en: 'cage',
        ex: 'Rex je režao na svakoga tko mu se približi i skrivao se u kutu kaveza čim bi netko ušao.',
      },
      {
        hr: 'zlostavljati',
        en: 'to abuse / mistreat',
        ex: 'Najteži slučaj u azilu bio je pas po imenu Rex, njemački ovčar kojeg je prijašnji vlasnik zlostavljao.',
      },
      {
        hr: 'povodac',
        en: 'leash',
        ex: 'Do proljeća je Rex naučio hodati na povodcu bez povlačenja i više nije režao kad bi mu netko prišao polako.',
      },
      {
        hr: 'udomiti',
        en: 'to find a home for / adopt out',
        ex: 'Azil je organizirao dan otvorenih vrata kako bi se životinje lakše udomile, s plakatima, fotografijama i pričama o svakom psu i svakoj mački.',
      },
      {
        hr: 'povjerenje',
        en: 'trust',
        ex: 'Danas mi šalju fotografije kako trči po vrtu bez straha, i zato se svake subote vraćam u azil, znajući da povjerenje uvijek vrijedi truda.',
      },
      {
        hr: 'strpljenje',
        en: 'patience',
        ex: 'Zahvalila sam mu na strpljenju, jer sam u početku sve radila presporo i bojala se pogrešaka.',
      },
      {
        hr: 'prekretnica',
        en: 'turning point',
        ex: 'Prekretnica se dogodila jednog kišnog utorka, kad je Rex prvi put prišao i onjušio mi ruku umjesto da se povuče.',
      },
      {
        hr: 'predvidljivost',
        en: 'predictability',
        ex: 'Donosila sam mu iste poslastice svaki put, u isto vrijeme, jer psi poput njega trebaju predvidljivost.',
      },
    ],
    quiz: [
      {
        q: 'Zašto se glavna junakinja odlučila prijaviti kao volonterka?',
        qEn: 'Why did the main character decide to sign up as a volunteer?',
        opts: [
          'Zato što ju je ravnateljica azila osobno pozvala.',
          'Zato što joj je prijateljica rekla da azilu uvijek nedostaju volonteri.',
          'Zato što je htjela udomiti psa za sebe.',
          'Zato što je to bio školski zadatak.',
        ],
        correct: 1,
      },
      {
        q: 'Što je Rexov prijašnji vlasnik radio njemu?',
        qEn: "What had Rex's previous owner done to him?",
        opts: [
          'Trenirao ga je kao psa čuvara.',
          'Napustio ga je dok je bio štene.',
          'Zlostavljao ga je.',
          'Udomio ga je iz drugog azila.',
        ],
        correct: 2,
      },
      {
        q: 'Kada se dogodila prekretnica s Rexom?',
        qEn: 'When did the turning point with Rex happen?',
        opts: [
          'Jednog sunčanog nedjeljnog jutra.',
          'Na danu otvorenih vrata.',
          'Prvog dana u azilu.',
          'Jednog kišnog utorka.',
        ],
        correct: 3,
      },
      {
        q: 'Što je azil pripremao za dan otvorenih vrata?',
        qEn: 'What did the shelter prepare for the open house day?',
        opts: [
          'Plakate, fotografije i priče o životinjama, uz stolove i letke.',
          'Veterinarski pregled za svaku životinju.',
          'Nove kaveze za sve pse.',
          'Dobrotvornu dražbu s lokalnim tvrtkama.',
        ],
        correct: 0,
      },
      {
        q: 'Tko je udomio Rexa?',
        qEn: 'Who adopted Rex?',
        opts: [
          'Mlada studentica volonterka.',
          'Sama ravnateljica azila.',
          'Bračni par.',
          'Obitelj s troje djece.',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b1_20',
    level: 'B1',
    levelColor: '#92400e',
    levelBg: '#fef3c7',
    icon: '🏃',
    title: 'Prvi polumaraton',
    titleEn: 'My First Half-Marathon',
    duration: 12,
    focus: 'Futur • Kondicional za ublažavanje (bih, htio bih) • Rječnik trčanja i izdržljivosti',
    intro:
      'An office worker with no running background trains through a harsh winter and a mid-season injury to complete his first half-marathon in the rain.',
    paragraphs: [
      {
        hr: 'Kad sam se prijavio na svoj prvi polumaraton, radio sam u uredu od devet do pet i jedva sam stigao trčati dva puta tjedno. Kolega mi je rekao da ću, ako budem uporan, sigurno stići do cilja za pet mjeseci treninga. Ipak, u sebi sam sumnjao hoću li uopće izdržati prvih deset kilometara.',
        en: 'When I signed up for my first half-marathon, I was working nine-to-five and barely managed to run twice a week. A colleague told me that if I stayed consistent, I would surely make it to the finish line after five months of training. Still, deep down I doubted whether I could even survive the first ten kilometers.',
      },
      {
        hr: 'Prve tjedne treninga počeo sam usred zime, kad je vani bilo tek nekoliko stupnjeva iznad nule. Ustajao sam prije posla i trčao po mraku, uz cestu punu leda, jer poslije radnog dana nisam imao ni volje ni energije. Kupio sam toplu jaknu i reflektirajući prsluk kako bih bio siguran u prometu.',
        en: 'I started my first weeks of training in the dead of winter, when it was only a few degrees above freezing outside. I got up before work and ran in the dark, along a road covered in ice, because after a workday I had neither the will nor the energy. I bought a warm jacket and a reflective vest to stay safe in traffic.',
      },
      {
        hr: 'Nakon mjesec dana treninga počeo sam sumnjati je li polumaraton uopće za mene. Noge su me boljele, tempo mi se nije poboljšavao, a prijatelji su govorili da bih se možda trebao zadovoljiti s deset kilometara. Ipak, odlučio sam da neću odustati prije nego što barem pokušam trčati cijelu udaljenost jednom u treningu.',
        en: "After a month of training I started doubting whether a half-marathon was even for me. My legs hurt, my pace wasn't improving, and friends said I should maybe settle for ten kilometers. Still, I decided I wouldn't quit before at least trying to run the full distance once in training.",
      },
      {
        hr: 'Prijavio sam se na online plan treninga koji je obećavao da ću, ako ga budem pratio strogo, poboljšati vrijeme za nekoliko minuta. Plan je uključivao duge nedjeljne trke, kraće brze intervale srijedom i dan odmora petkom. Obećao sam sebi da ću se držati rasporeda bez obzira na vrijeme ili raspoloženje.',
        en: 'I signed up for an online training plan that promised that if I followed it strictly, I would improve my time by several minutes. The plan included long Sunday runs, shorter fast intervals on Wednesdays, and a rest day on Fridays. I promised myself I would stick to the schedule regardless of the weather or my mood.',
      },
      {
        hr: 'Šest tjedana prije utrke uganuo sam gležanj na mokrom pločniku i liječnik mi je rekao da ne smijem trčati barem deset dana. Bio sam očajan, jer sam se bojao da ću izgubiti svu formu koju sam gradio mjesecima. Umjesto trčanja, plivao sam i vozio bicikl kako bih zadržao barem dio kondicije.',
        en: "Six weeks before the race I sprained my ankle on a wet pavement, and the doctor told me I couldn't run for at least ten days. I was devastated, afraid I would lose all the fitness I had built over months. Instead of running, I swam and cycled to keep at least some of my conditioning.",
      },
      {
        hr: 'Kad sam se konačno vratio trčanju, tempo mi je bio sporiji nego prije ozljede i bojao sam se da bih mogao ponovno ozlijediti isti gležanj. Fizioterapeutkinja mi je savjetovala vježbe za stabilizaciju gležnja prije svakog treninga. Polako sam vratio povjerenje u svoje tijelo, iako sam ostatak priprema trčao opreznije nego ikad.',
        en: 'When I finally got back to running, my pace was slower than before the injury and I was afraid I might re-injure the same ankle. The physiotherapist advised me to do stabilization exercises for the ankle before every training session. I slowly regained trust in my body, though I ran the rest of the preparation more cautiously than ever.',
      },
      {
        hr: 'Večer prije utrke jedva sam spavao, provjeravajući vremensku prognozu koja je najavljivala kišu cijeli dan. Pripremio sam odjeću, broj za prsa i energetske gelove još navečer, kako ujutro ne bih ništa zaboravio u žurbi. Poslao sam poruku obitelji da će me, ako sve bude u redu, moći vidjeti na cilju oko podneva.',
        en: "The night before the race I barely slept, checking the weather forecast that predicted rain all day. I had already prepared my clothes, race bib, and energy gels that evening, so I wouldn't forget anything in the morning rush. I texted my family that if everything went well, they would be able to see me at the finish around noon.",
      },
      {
        hr: 'Utrka je krenula pod pljuskom, a cipele su mi bile mokre već nakon prvog kilometra. Oko petnaestog kilometra noge su mi otežale i pomislio sam da bih se možda trebao zaustaviti i prohodati malo. Ipak, sjetio sam se svih hladnih jutara zimskog treninga i odlučio sam da neću stati, bez obzira na kišu.',
        en: "The race started under a downpour, and my shoes were already soaked after the first kilometer. Around the fifteenth kilometer my legs grew heavy and I thought I might have to stop and walk for a while. Still, I remembered all the cold winter training mornings and decided I wouldn't stop, no matter the rain.",
      },
      {
        hr: 'Kad sam ugledao cilj, obitelj je stajala s kišobranima i vikala moje ime, a ja sam potrčao zadnjih dvjesto metara koliko su mi noge dopuštale. Prešao sam crtu s vremenom boljim nego što sam se ikad usudio nadati, unatoč ozljedi i kiši. Zagrlio sam suprugu mokar do kože, ali sretniji nego ikad.',
        en: 'When I spotted the finish line, my family was standing there with umbrellas shouting my name, and I sprinted the last two hundred meters as much as my legs allowed. I crossed the line with a time better than I had ever dared to hope for, despite the injury and the rain. I hugged my wife, soaked to the skin, but happier than ever.',
      },
      {
        hr: 'Sljedeći tjedan noge su me još boljele, ali sam već pretraživao internet u potrazi za sljedećom utrkom. Kolega s posla rekao mi je da ću, ako nastavim ovim tempom, uskoro trčati puni maraton, a ja sam se samo nasmijao. Za sada mi je dovoljno što znam da mogu izdržati više nego što sam mislio.',
        en: "The following week my legs still hurt, but I was already searching online for the next race. A colleague from work told me that if I kept up this pace, I would soon be running a full marathon, and I just laughed. For now, it's enough for me to know I can endure more than I thought.",
      },
    ],
    vocabulary: [
      {
        hr: 'uporan',
        en: 'persistent',
        ex: 'Kolega mi je rekao da ću, ako budem uporan, sigurno stići do cilja za pet mjeseci treninga.',
      },
      {
        hr: 'izdržati',
        en: 'to endure / hold out',
        ex: 'Ipak, u sebi sam sumnjao hoću li uopće izdržati prvih deset kilometara.',
      },
      {
        hr: 'odustati',
        en: 'to give up',
        ex: 'Ipak, odlučio sam da neću odustati prije nego što barem pokušam trčati cijelu udaljenost jednom u treningu.',
      },
      {
        hr: 'uganuti',
        en: 'to sprain',
        ex: 'Šest tjedana prije utrke uganuo sam gležanj na mokrom pločniku i liječnik mi je rekao da ne smijem trčati barem deset dana.',
      },
      {
        hr: 'gležanj',
        en: 'ankle',
        ex: 'Fizioterapeutkinja mi je savjetovala vježbe za stabilizaciju gležnja prije svakog treninga.',
      },
      {
        hr: 'kondicija',
        en: 'fitness / physical condition',
        ex: 'Umjesto trčanja, plivao sam i vozio bicikl kako bih zadržao barem dio kondicije.',
      },
      {
        hr: 'pljusak',
        en: 'downpour',
        ex: 'Utrka je krenula pod pljuskom, a cipele su mi bile mokre već nakon prvog kilometra.',
      },
      {
        hr: 'cilj',
        en: 'finish line / goal',
        ex: 'Kad sam ugledao cilj, obitelj je stajala s kišobranima i vikala moje ime, a ja sam potrčao zadnjih dvjesto metara koliko su mi noge dopuštale.',
      },
      {
        hr: 'prognoza',
        en: 'forecast',
        ex: 'Večer prije utrke jedva sam spavao, provjeravajući vremensku prognozu koja je najavljivala kišu cijeli dan.',
      },
      {
        hr: 'tempo',
        en: 'pace',
        ex: 'Kad sam se konačno vratio trčanju, tempo mi je bio sporiji nego prije ozljede i bojao sam se da bih mogao ponovno ozlijediti isti gležanj.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je glavni lik u početku sumnjao da može istrčati polumaraton?',
        qEn: 'Why did the main character initially doubt he could run the half-marathon?',
        opts: [
          'Zato što mu je liječnik savjetovao da ne trči.',
          'Zato što nikad prije nije trčao.',
          'Zato što mu se tempo nije poboljšavao, a noge su ga boljele.',
          'Zato što nije imao prave tenisice za trčanje.',
        ],
        correct: 2,
      },
      {
        q: 'Kada se dogodila ozljeda gležnja?',
        qEn: 'When did the ankle injury happen?',
        opts: [
          'Dan prije utrke.',
          'Šest tjedana prije utrke.',
          'Na prvom treningu.',
          'Tjedan dana nakon utrke.',
        ],
        correct: 1,
      },
      {
        q: 'Što je radio dok se oporavljao od ozljede?',
        qEn: 'What did he do while recovering from the injury?',
        opts: [
          'Potpuno je mirovao mjesec dana.',
          'Nastavio je trčati unatoč boli.',
          'Plivao je i vozio bicikl kako bi održao kondiciju.',
          'Unajmio je osobnog trenera.',
        ],
        correct: 2,
      },
      {
        q: 'Kakvo je bilo vrijeme na dan utrke?',
        qEn: 'What was the weather like on race day?',
        opts: [
          'Kiša je padala cijelu utrku.',
          'Bilo je sunčano i vruće.',
          'Bilo je hladno uz slab snijeg.',
          'Bilo je vjetrovito, ali suho.',
        ],
        correct: 0,
      },
      {
        q: 'Tko ga je dočekao na cilju?',
        qEn: 'Who was waiting for him at the finish line?',
        opts: [
          'Njegov trkački klub.',
          'Kolega s posla.',
          'Nitko, završio je sam.',
          'Obitelj s kišobranima.',
        ],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b2_14',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '☕',
    title: 'Povratak i prvi obrt',
    titleEn: 'The Return and the First Business',
    duration: 10,
    focus:
      'Poslovni i administrativni rječnik • Kondicional i pasiv • Iskazivanje frustracije i ustrajnosti',
    intro:
      'Nakon petnaest godina života u Njemačkoj, Tomislav se vratio u Hrvatsku s namjerom da otvori mali obrt — kafić u rodnom Karlovcu. Priča prati njegov susret s hrvatskom birokracijom i sve ono što otvaranje malog posla zapravo znači.',
    paragraphs: [
      {
        hr: 'Tomislav je petnaest godina radio kao konobar i kasnije voditelj smjene u jednom minhenskom kafiću, no oduvijek je sanjao da će jednog dana otvoriti vlastiti lokal u Hrvatskoj. Kad mu je preminula baka ostavila mali stan u centru Karlovca, odlučio je da je to znak da se konačno vrati i pokuša ostvariti taj san, unatoč strahu od nepoznatog.',
        en: 'Tomislav had worked for fifteen years as a waiter and later a shift manager at a café in Munich, but he had always dreamed of one day opening his own place in Croatia. When his late grandmother left him a small apartment in the center of Karlovac, he decided it was a sign to finally return and try to make that dream come true, despite his fear of the unknown.',
      },
      {
        hr: 'Prvi korak bio je ishoditi OIB, osobni identifikacijski broj bez kojeg u Hrvatskoj nije moguće obaviti gotovo nijednu službenu radnju, pa ni onu najjednostavniju. Iako je Tomislav rođen u Hrvatskoj, budući da je otišao još kao dijete, morao je u nadležnom uredu ponovno dokazivati identitet, što je potrajalo dulje nego što je očekivao.',
        en: "The first step was obtaining an OIB, a personal identification number without which it's almost impossible to carry out any official transaction in Croatia, even the simplest one. Although Tomislav was born in Croatia, since he had left as a child, he had to prove his identity all over again at the relevant office, which took longer than he expected.",
      },
      {
        hr: 'Nakon toga trebalo je odlučiti hoće li registrirati obrt ili osnovati društvo s ograničenom odgovornošću, pa je Tomislav potražio savjet knjigovotkinje koju mu je preporučio jedan stari školski prijatelj. Ona mu je objasnila da bi za mali kafić obrt bio jednostavniji i jeftiniji za vođenje, iako bi ga to osobno činilo odgovornim za sve dugove.',
        en: 'After that he had to decide whether to register a sole proprietorship (obrt) or set up a limited liability company, so Tomislav sought advice from an accountant recommended by an old school friend. She explained that for a small café an obrt would be simpler and cheaper to run, although it would make him personally liable for all debts.',
      },
      {
        hr: 'Prostor za kafić pronašao je u prizemlju stare zgrade blizu Zorina doma, no zgrada je zahtijevala temeljitu obnovu prije nego što bi se u njoj uopće smjelo poslovati. Kako bi kafić legalno mogao raditi, trebala mu je uporabna dozvola, dokument kojim nadležno tijelo potvrđuje da je prostor sigurno i propisno izgrađen za namjenu koju obavlja.',
        en: 'He found a space for the café on the ground floor of an old building near Zorin dom, but the building required thorough renovation before it could legally be used for business at all. For the café to operate legally, he needed a use permit (uporabna dozvola), a document by which the relevant authority confirms that a space has been built safely and properly for its intended purpose.',
      },
      {
        hr: 'Čekanje na inspekciju koja bi trebala izdati uporabnu dozvolu potrajalo je mjesecima, a svaki put kad bi Tomislav nazvao ured, rečeno mu je da je predmet u obradi. Da su svi papiri odmah bili ispravno predani, postupak bi vjerojatno trajao upola kraće, no on jednostavno nije znao koji su svi dokumenti prvotno bili potrebni.',
        en: "Waiting for the inspection that would issue the use permit dragged on for months, and every time Tomislav called the office, he was told the case was under review. Had all the paperwork been submitted correctly from the start, the process would probably have taken half as long, but he simply hadn't known which documents were originally required.",
      },
      {
        hr: 'Osim uporabne dozvole, morao je ishoditi i potvrdu da lokal zadovoljava protupožarne propise, kao i uvesti sustav HACCP kojim se prati sigurnost hrane i pića koje poslužuje. Sve je to zahtijevalo dodatna ulaganja koja Tomislav u početku uopće nije predvidio kada je računao koliko će mu novca ukupno trebati za otvaranje.',
        en: "Besides the use permit, he also had to obtain confirmation that the premises met fire-safety regulations, as well as introduce a HACCP system to monitor the safety of the food and drinks served. All of this required additional investment that Tomislav hadn't foreseen at all when he first calculated how much money he would need in total to open.",
      },
      {
        hr: 'Unatoč svim poteškoćama, susjedi i stari prijatelji iz Karlovca često su navraćali dok je radove obavljao, nudeći pomoć oko preslagivanja namještaja ili ustupajući mu alat koji mu je nedostajao. Njegov otac, umirovljeni zidar, svakodnevno je dolazio pomoći oko manjih popravaka, iako mu je liječnik zbog leđa savjetovao da se odmara.',
        en: 'Despite all the difficulties, neighbors and old friends from Karlovac often dropped by while he was doing the renovation work, offering to help rearrange furniture or lending him tools he lacked. His father, a retired bricklayer, came every day to help with small repairs, even though his doctor had advised him to rest because of his back.',
      },
      {
        hr: "Kada je kafić napokon otvoren, nakon gotovo godinu dana čekanja i papirologije, Tomislav je na vratima objesio malu ploču s nazivom 'Kod bake Ane', u čast baki koja mu je ostavila stan u kojem je sve započelo. Prvog jutra poslužio je kavu susjedima koji su ga poznavali još kao dijete.",
        en: "When the café finally opened, after almost a year of waiting and paperwork, Tomislav hung a small sign on the door with the name 'Kod bake Ane' (At Grandma Ana's), in honor of the grandmother who had left him the apartment where it all began. On the first morning he served coffee to neighbors who had known him since he was a child.",
      },
      {
        hr: 'Danas, kada mu netko iz dijaspore javi da razmišlja o povratku i pokretanju vlastitog posla, Tomislav uvijek kaže isto: neka se strpe, neka unaprijed provjere svaki dokument koji im je potreban i neka ne odustanu kada im se učini da birokracija nikada neće završiti, jer se, kako kaže, na kraju ipak isplati.',
        en: "Today, whenever someone from the diaspora tells him they're thinking about returning and starting their own business, Tomislav always says the same thing: be patient, check in advance every document you'll need, and don't give up when the bureaucracy seems like it will never end, because, as he puts it, in the end it's still worth it.",
      },
    ],
    vocabulary: [
      {
        hr: 'OIB',
        en: 'personal identification number',
        ex: 'Bez OIB-a u Hrvatskoj ne možete otvoriti ni bankovni račun.',
      },
      {
        hr: 'obrt',
        en: 'sole proprietorship, small trade business',
        ex: 'Odlučio je registrirati obrt umjesto trgovačkog društva.',
      },
      {
        hr: 'uporabna dozvola',
        en: 'use permit, occupancy permit',
        ex: 'Bez uporabne dozvole lokal se ne smije legalno koristiti.',
      },
      {
        hr: 'knjigovotkinja',
        en: '(female) accountant, bookkeeper',
        ex: 'Knjigovotkinja mu je objasnila razliku između obrta i d.o.o.-a.',
      },
      {
        hr: 'inspekcija',
        en: 'inspection',
        ex: 'Čekali su mjesecima da inspekcija dođe pregledati prostor.',
      },
      {
        hr: 'protupožarni propisi',
        en: 'fire-safety regulations',
        ex: 'Lokal je morao zadovoljiti sve protupožarne propise prije otvaranja.',
      },
      {
        hr: 'papirologija',
        en: 'paperwork',
        ex: 'Otvaranje malog obrta uključivalo je mnogo papirologije.',
      },
      {
        hr: 'dijaspora',
        en: 'diaspora',
        ex: 'Sve više ljudi iz dijaspore razmišlja o povratku u Hrvatsku.',
      },
    ],
    quiz: [
      {
        q: 'Gdje je Tomislav radio prije povratka u Hrvatsku?',
        qEn: 'Where did Tomislav work before returning to Croatia?',
        opts: [
          'U hotelu u Beču',
          'U tvornici u Berlinu',
          'U restoranu u Zürichu',
          'U kafiću u Münchenu',
        ],
        correct: 3,
      },
      {
        q: 'Što je OIB?',
        qEn: 'What is an OIB?',
        opts: [
          'Dozvola za rad ugostiteljskog objekta',
          'Naziv poreznog obrasca',
          'Vrsta poslovnog kredita',
          'Osobni identifikacijski broj',
        ],
        correct: 3,
      },
      {
        q: 'Zašto je Tomislav odabrao obrt umjesto d.o.o.-a?',
        qEn: 'Why did Tomislav choose an obrt instead of a d.o.o.?',
        opts: [
          'Jer mu je to naložila banka',
          'Jer d.o.o. nije dopušten za kafiće',
          'Jer je jednostavniji i jeftiniji za vođenje',
          'Jer obrt ne plaća poreze',
        ],
        correct: 2,
      },
      {
        q: 'Čemu služi uporabna dozvola?',
        qEn: 'What is the purpose of the use permit (uporabna dozvola)?',
        opts: [
          'Omogućuje uvoz opreme bez carine',
          'Potvrđuje da je vlasnik platio sve poreze',
          'Dopušta zapošljavanje stranih radnika',
          'Potvrđuje da je prostor sigurno i propisno izgrađen',
        ],
        correct: 3,
      },
      {
        q: 'Kako se zove kafić koji je Tomislav otvorio?',
        qEn: 'What is the café that Tomislav opened called?',
        opts: ['Kod bake Ane', 'Kod strica Ive', 'Stari Karlovac', 'Slavonska kuća'],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_b2_15',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🚋',
    title: 'Čovjek koji vozi uspinjaču',
    titleEn: 'The Man Who Runs the Funicular',
    duration: 10,
    focus: 'Opisni rječnik i zanimanja • Pasivne konstrukcije • Kontrast prošlosti i sadašnjosti',
    intro:
      'Zagrebačka uspinjača na Gornji grad jedna je od najkraćih javnih željeznica na svijetu i prometuje od davne 1890. godine. Ovaj tekst prati jedan radni dan njezina strojovođe te otkriva zašto ta mala naprava i danas privlači toliku pažnju.',
    paragraphs: [
      {
        hr: 'Zagrebačka uspinjača, koja povezuje Ilicu s Gornjim gradom, prometuje neprekidno još od 1890. godine, zbog čega se smatra jednom od najstarijih javnih željeznica u ovom dijelu Europe. Duga je svega šezdeset i šest metara, pa je turisti često nazivaju najkraćom uspinjačom na svijetu, iako taj podatak nije uvijek službeno potvrđen.',
        en: "The Zagreb funicular, which connects Ilica with the Upper Town (Gornji grad), has run continuously since 1890, which is why it's considered one of the oldest public railways in this part of Europe. It's only sixty-six meters long, so tourists often call it the shortest funicular in the world, although that claim isn't always officially confirmed.",
      },
      {
        hr: 'Strojovođa Ivan radi na uspinjači već gotovo dvadeset godina, otkad je kao mladić slučajno vidio natječaj za posao i prijavio se, ne sluteći da će mu ta mala kabina postati drugi dom. Kaže da mu se svakog jutra, kada dođe na posao, čini kao da vrijeme na trenutak stane, iako sam zna da to nije istina.',
        en: "Engine driver Ivan has worked on the funicular for almost twenty years, ever since he happened to see a job ad as a young man and applied, not suspecting that this small cabin would become his second home. He says that every morning, when he arrives at work, it feels for a moment as if time stands still, even though he knows that isn't true.",
      },
      {
        hr: 'Uspinjača se kreće pomoću čeličnog užeta koje su nekada pokretali parni strojevi, a danas je sustav u potpunosti elektrificiran te se njime upravlja iz male komandne sobe smještene na gornjoj stanici. Dva vagona, povezana istim užetom, kreću se istovremeno u suprotnim smjerovima, tako da jedan uvijek uravnotežuje težinu drugoga.',
        en: 'The funicular moves by means of a steel cable that used to be driven by steam engines, but today the system is fully electrified and is operated from a small control room located at the upper station. The two cars, connected by the same cable, move simultaneously in opposite directions, so that one always balances the weight of the other.',
      },
      {
        hr: 'Ivanov radni dan počinje rano ujutro, prije nego što se otvore vrata za putnike, kada se provjerava cijeli sustav i uvjerava da uže, kočnice i vrata rade ispravno. Tek nakon što je sve pregledano i zabilježeno u dnevnik, uspinjača se smije pustiti u pogon i prve mušterije mogu ući u vagon.',
        en: "Ivan's working day begins early in the morning, before the doors open for passengers, when the whole system is checked to make sure the cable, brakes, and doors are working properly. Only after everything has been inspected and logged in the diary is the funicular allowed to start operating, and the first customers can board the car.",
      },
      {
        hr: 'Tijekom dana Ivan susreće raznolike putnike, od turista koji vožnju doživljavaju kao neizostavnu atrakciju i odmah je fotografiraju, do Zagrepčana koji uspinjaču koriste svakodnevno kao dio puta na posao i jedva je primjećuju. Njemu je zanimljivo promatrati kako se isti prostor od šezdeset sekundi vožnje doživljava toliko različito.',
        en: 'Throughout the day Ivan meets a variety of passengers, from tourists who experience the ride as a must-see attraction and photograph it immediately, to Zagreb locals who use the funicular daily as part of their commute and barely notice it. He finds it interesting to watch how the same sixty-second stretch is experienced so differently.',
      },
      {
        hr: 'Jednom prilikom, tijekom ljetne vrućine, sustav se automatski zaustavio zbog manjeg tehničkog kvara baš kada je vagon bio na pola puta. Iako su putnici isprva bili pomalo uznemireni, Ivan ih je smirenim glasom obavijestio da će kvar biti brzo otklonjen, što se i dogodilo za nepunih pet minuta, uz pljesak kada se vagon pokrenuo.',
        en: 'On one occasion, during the summer heat, the system automatically stopped due to a minor technical fault right when the car was halfway up. Although the passengers were initially somewhat uneasy, Ivan calmly informed them that the fault would soon be fixed, which happened in under five minutes, to applause when the car started moving again.',
      },
      {
        hr: 'Ivan priznaje da se posao uvelike promijenio otkako je počeo raditi, jer je uspinjača nekada uglavnom prevozila stanovnike Gornjeg grada, dok danas njome dominiraju turisti iz cijelog svijeta. Unatoč tome, ponosan je što je dio nasljeđa koje bi, da nije održavano s toliko pažnje, moglo odavno biti zamijenjeno običnim stubama ili liftom.',
        en: 'Ivan admits the job has changed a great deal since he started, since the funicular once mainly carried residents of the Upper Town, while today it is dominated by tourists from all over the world. Still, he is proud to be part of a heritage that, had it not been maintained with such care, could long ago have been replaced by ordinary stairs or a lift.',
      },
      {
        hr: 'Kada se navečer vrata zatvore za posljednjim putnicima, Ivan ponovno prolazi kroz sustav provjera, bilježi eventualne nepravilnosti te isključuje pogon prije nego što ode kući. Taj posljednji krug, kaže, obavlja gotovo automatski, no nikada ga ne preskače, jer zna da bi i najmanji previd sutradan mogao prouzročiti veći problem.',
        en: 'When the doors close for the last passengers in the evening, Ivan goes through the system checks again, notes any irregularities, and shuts down the drive before heading home. That final round, he says, he performs almost automatically, but he never skips it, since he knows even the smallest oversight could cause a bigger problem the next day.',
      },
      {
        hr: 'Za Ivana uspinjača nije samo prijevozno sredstvo, nego simbol grada koji povezuje staro i novo, baš kao što nekoliko sekundi vožnje povezuje Ilicu i Gornji grad. Nada se da će, kada jednog dana ode u mirovinu, netko jednako predano nastaviti brinuti se o toj maloj, ali dragocjenoj zagrebačkoj znamenitosti.',
        en: "For Ivan, the funicular isn't just a means of transport but a symbol of a city that connects old and new, just as a few seconds of riding connect Ilica and the Upper Town. He hopes that when he retires one day, someone will care just as devotedly for this small but precious Zagreb landmark.",
      },
    ],
    vocabulary: [
      {
        hr: 'uspinjača',
        en: 'funicular',
        ex: 'Zagrebačka uspinjača vozi turiste i mještane već više od stoljeća.',
      },
      {
        hr: 'strojovođa',
        en: 'engine driver, operator',
        ex: 'Strojovođa svako jutro provjerava sustav prije prvog polaska.',
      },
      {
        hr: 'uže',
        en: 'cable, rope',
        ex: 'Vagoni su povezani čeličnim užetom koje ih pokreće.',
      },
      {
        hr: 'vagon',
        en: 'carriage, car',
        ex: 'Dva vagona kreću se istovremeno u suprotnim smjerovima.',
      },
      {
        hr: 'kočnica',
        en: 'brake',
        ex: 'Prije polaska strojovođa provjerava rade li kočnice ispravno.',
      },
      {
        hr: 'pogon',
        en: 'drive, operation',
        ex: 'Navečer se pogon isključuje nakon posljednje vožnje.',
      },
      {
        hr: 'znamenitost',
        en: 'landmark, sight',
        ex: 'Uspinjača je jedna od najpoznatijih zagrebačkih znamenitosti.',
      },
      {
        hr: 'nasljeđe',
        en: 'heritage',
        ex: 'Grad brine o uspinjači jer je ona dio njegova nasljeđa.',
      },
    ],
    quiz: [
      {
        q: 'Od koje godine prometuje zagrebačka uspinjača?',
        qEn: 'Since what year has the Zagreb funicular been running?',
        opts: ['Od 1970. godine', 'Od 1890. godine', 'Od 1950. godine', 'Od 1925. godine'],
        correct: 1,
      },
      {
        q: 'Koliko dugo Ivan radi kao strojovođa uspinjače?',
        qEn: 'How long has Ivan worked as the funicular operator?',
        opts: [
          'Samo dvije godine',
          'Pet mjeseci',
          'Više od trideset godina',
          'Gotovo dvadeset godina',
        ],
        correct: 3,
      },
      {
        q: 'Čime se danas pokreće uspinjača?',
        qEn: 'What powers the funicular today?',
        opts: ['Parom', 'Ručno, okretanjem ručice', 'Elektricitetom', 'Dizelskim motorom'],
        correct: 2,
      },
      {
        q: 'Što se dogodilo jednom prilikom tijekom ljetne vrućine?',
        qEn: 'What happened once during the summer heat?',
        opts: [
          'Putnici su morali izaći i gurati vagon',
          'Uspinjača je zapalila',
          'Uže je puklo i vagon je pao',
          'Sustav se automatski zaustavio zbog manjeg kvara',
        ],
        correct: 3,
      },
      {
        q: 'Kako se prema Ivanu promijenila struktura putnika tijekom godina?',
        qEn: 'How has the passenger makeup changed over the years, according to Ivan?',
        opts: [
          'Nekad su prevladavali stanovnici, danas turisti',
          'Nekad su prevladavali turisti, danas stanovnici',
          'Broj putnika se uopće nije promijenio',
          'Danas uspinjaču koriste samo školarci',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'gs_b2_16',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🏚️',
    title: 'Obnova stare kuće',
    titleEn: 'Renovating the Old House',
    duration: 12,
    focus: 'Pasivne konstrukcije i particip • Zavisne rečenice • Rječnik birokracije i obnove',
    intro:
      "A man inherits his great-aunt's stone house in inland Croatia and navigates permits, craftsmen, and an unexpected discovery in the walls while renovating it.",
    paragraphs: [
      {
        hr: 'Kad mi je teta Štefanija preminula, ostavila mi je staru kamenu kuću u zagorskom selu, pa sam odlučio obnoviti je umjesto da je prodam, iako su mi svi savjetovali suprotno. Kuća, sagrađena krajem devetnaestog stoljeća, godinama je stajala prazna i vlažna, s krovom koji je propuštao na dva mjesta. Nisam bio svjestan koliko će papirologija biti kompliciranija od samih radova.',
        en: 'When my great-aunt Štefanija passed away, she left me an old stone house in a Zagorje village, and I decided to renovate it instead of selling it, even though everyone advised the opposite. The house, built in the late nineteenth century, had stood empty and damp for years, with a roof leaking in two places. I had no idea how much more complicated the paperwork would be than the construction work itself.',
      },
      {
        hr: 'Prvi korak bio je zatražiti uvjerenje da kuća nije zaštićena kao spomenik kulture, jer bi tada svaki zahvat morao odobriti konzervatorski odjel. Zatim sam ishodio glavni projekt kod arhitekta i predao zahtjev za građevinsku dozvolu. Činovnica mi je obećala odgovor za mjesec dana, no čekao sam gotovo tri.',
        en: "The first step was to obtain a certificate confirming the house wasn't registered as a cultural monument, since in that case every intervention would have to be approved by the conservation department. Then I obtained the main project from an architect and submitted an application for a building permit. The clerk promised me an answer within a month, but I waited almost three.",
      },
      {
        hr: 'Kad sam napokon dobio dozvolu, potražio sam majstore spremne raditi u udaljenom selu, što se pokazalo težim nego što sam mislio. Zidara Ivicu preporučio mi je susjed, a on se prihvatio posla zajedno sa svojim šogorom, tesarom specijaliziranim za stare krovne konstrukcije. Dogovorili smo se da će radovi trajati šest mjeseci, iako sam u sebi znao da će potrajati dulje.',
        en: 'Once I finally got the permit, I looked for craftsmen willing to work in a remote village, which proved harder than I expected. A neighbor recommended the mason Ivica, who took on the job together with his brother-in-law, a carpenter specializing in old roof structures. We agreed the work would take six months, though deep down I knew it would take longer.',
      },
      {
        hr: 'Radovi su počeli rušenjem trulih greda i skidanjem starog crijepa, pri čemu se otkrilo da je krovna konstrukcija ozbiljnije oštećena nego što je procijenjeno u projektu. Zidovi su bili građeni od lokalnog kamena, vezanog vapnenom žbukom, tehnikom koja se danas rijetko primjenjuje. Ivica mi je objasnio da takve zidove ne treba rušiti nego samo očistiti i ojačati.',
        en: "The work began with tearing down rotten beams and removing the old roof tiles, which revealed that the roof structure was more seriously damaged than the project had estimated. The walls were built of local stone bound with lime mortar, a technique rarely used today. Ivica explained that such walls shouldn't be torn down, only cleaned and reinforced.",
      },
      {
        hr: 'Sredinom radova, dok su radnici uklanjali staru žbuku u prizemlju, u zidu su pronašli metalnu kutiju s pismima pisanim rukom i nekoliko starih fotografija. Ispostavilo se da je pisma teta Štefanija pisala svome zaručniku koji se nije vratio iz rata, a nikada ih nije poslala. Sjedio sam među ruševinama i prvi put čitao riječi koje nisu bile namijenjene meni.',
        en: 'Midway through the work, while the workers were removing old plaster on the ground floor, they found a metal box in the wall containing handwritten letters and a few old photographs. It turned out that aunt Štefanija had written the letters to her fiancé, who never returned from the war, and had never sent them. I sat among the ruins that evening and for the first time read words that were never meant for me.',
      },
      {
        hr: 'Ta su pisma promijenila moj odnos prema kući, koja mi je do tada bila samo naslijeđena obveza puna papirologije i troškova. Shvatio sam da svaki kamen u tim zidovima nosi priču ljudi koji su ovdje živjeli, voljeli i čekali, a da obnova nije samo popravljanje krova nego i čuvanje sjećanja. Odlučio sam pisma uokviriti i objesiti u budućoj dnevnoj sobi.',
        en: "Those letters changed my relationship with the house, which until then had been just an inherited burden full of paperwork and expenses. I realized that every stone in those walls carries the story of people who lived, loved, and waited here, and that renovation isn't just fixing a roof but also preserving memory. I decided to frame the letters and hang them in the future living room.",
      },
      {
        hr: 'Usred radova morao sam prijaviti promjenu izvođača građevinskoj inspekciji, jer se Ivicin šogor razbolio, pa je posao preuzeo drugi tesar. Inspektor je zahtijevao dodatnu dokumentaciju o statici krova prije nego što je odobrio nastavak radova, što je sve zajedno stajalo dodatna dva mjeseca čekanja. Naučio sam da u obnovi stare kuće birokracija ponekad traje dulje od samih zidarskih radova.',
        en: "In the middle of the work I had to report a change of contractor to the building inspectorate, since Ivica's brother-in-law fell ill and another carpenter took over. The inspector required additional documentation about the roof's structural stability before approving the continuation of the work, which altogether cost two extra months of waiting. I learned that in renovating an old house, bureaucracy sometimes takes longer than the masonry work itself.",
      },
      {
        hr: 'Kad je došlo vrijeme za unutarnje uređenje, morao sam odlučiti hoću li ugraditi podno grijanje ili zadržati vanjštinu što je moguće netaknutijom. Arhitektica mi je predložila kompromis: moderne instalacije skrivene ispod podova, dok su vanjski zidovi i kameni okviri prozora ostali izvorni. Time je kuća zadržala dušu, ali dobila i udobnost koju stara gradnja sama nije mogla pružiti.',
        en: "When it came time for the interior work, I had to decide whether to install underfloor heating or keep the exterior as untouched as possible. The architect suggested a compromise: modern installations hidden under the floors, while the exterior walls and stone window frames remained original. That way the house kept its soul but also gained a comfort the old construction alone couldn't provide.",
      },
      {
        hr: 'Uselio sam se prošlog ljeta, nešto više od dvije godine nakon prvog zahtjeva za dozvolu. Kuća više ne izgleda kao muzej ni kao praznina, nego kao mjesto u kojemu se stara pisma, novi zidovi i moja svakodnevica isprepliću u jednu cjelinu. Shvatio sam da dom nije nešto što se nasljeđuje gotovo, nego nešto što se, kamen po kamen, iznova gradi.',
        en: "I moved in last summer, a little more than two years after my first permit application. The house no longer looks like a museum or an empty shell, but like a place where old letters, new walls, and my daily life are woven into one whole. I realized that home isn't something inherited ready-made, but something that is, stone by stone, built anew.",
      },
    ],
    vocabulary: [
      {
        hr: 'papirologija',
        en: 'paperwork',
        ex: 'Nisam bio svjestan koliko će papirologija biti kompliciranija od samih radova.',
      },
      {
        hr: 'konzervatorski odjel',
        en: 'conservation department',
        ex: 'Prvi korak bio je zatražiti uvjerenje da kuća nije zaštićena kao spomenik kulture, jer bi tada svaki zahvat morao odobriti konzervatorski odjel.',
      },
      {
        hr: 'građevinska dozvola',
        en: 'building permit',
        ex: 'Zatim sam ishodio glavni projekt kod arhitekta i predao zahtjev za građevinsku dozvolu.',
      },
      {
        hr: 'žbuka',
        en: 'plaster / mortar',
        ex: 'Sredinom radova, dok su radnici uklanjali staru žbuku u prizemlju, u zidu su pronašli metalnu kutiju s pismima pisanim rukom i nekoliko starih fotografija.',
      },
      {
        hr: 'zaručnik',
        en: 'fiancé',
        ex: 'Ispostavilo se da je pisma teta Štefanija pisala svome zaručniku koji se nije vratio iz rata, a nikada ih nije poslala.',
      },
      {
        hr: 'inspekcija',
        en: 'inspectorate / inspection',
        ex: 'Usred radova morao sam prijaviti promjenu izvođača građevinskoj inspekciji, jer se Ivicin šogor razbolio, pa je posao preuzeo drugi tesar.',
      },
      {
        hr: 'statika',
        en: 'structural stability / statics',
        ex: 'Inspektor je zahtijevao dodatnu dokumentaciju o statici krova prije nego što je odobrio nastavak radova, što je sve zajedno stajalo dodatna dva mjeseca čekanja.',
      },
      {
        hr: 'vanjština',
        en: 'exterior',
        ex: 'Kad je došlo vrijeme za unutarnje uređenje, morao sam odlučiti hoću li ugraditi podno grijanje ili zadržati vanjštinu što je moguće netaknutijom.',
      },
      {
        hr: 'ojačati',
        en: 'to reinforce',
        ex: 'Ivica mi je objasnio da takve zidove ne treba rušiti nego samo očistiti i ojačati.',
      },
      {
        hr: 'nasljeđivati',
        en: 'to inherit',
        ex: 'Shvatio sam da dom nije nešto što se nasljeđuje gotovo, nego nešto što se, kamen po kamen, iznova gradi.',
      },
    ],
    quiz: [
      {
        q: 'Što su pripovjedaču svi savjetovali nakon što je naslijedio kuću?',
        qEn: 'What did everyone advise the narrator after he inherited the house?',
        opts: [
          'Da prvo obnovi krov i useli se u kuću.',
          'Da kuću daruje lokalnom muzeju.',
          'Da kuću iznajmljuje turistima.',
          'Da kuću proda umjesto da je obnavlja.',
        ],
        correct: 3,
      },
      {
        q: 'Koliko je pripovjedač čekao na odgovor za građevinsku dozvolu?',
        qEn: 'How long did the narrator wait for the building permit decision?',
        opts: [
          'Gotovo tri mjeseca, iako mu je obećan mjesec dana.',
          'Točno mjesec dana, kako je obećano.',
          'Gotovo godinu dana.',
          'Dva tjedna.',
        ],
        correct: 0,
      },
      {
        q: 'Što su radnici pronašli u zidu tijekom radova?',
        qEn: 'What did the workers find in the wall during the renovation?',
        opts: [
          'Staru zbirku kovanica.',
          'Metalnu kutiju s rukom pisanim pismima i fotografijama.',
          'Skrivene stube prema podrumu.',
          'Ništa vrijedno spomena.',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je došlo do dodatnog kašnjenja usred radova?',
        qEn: 'Why was there an additional delay in the middle of the work?',
        opts: [
          'Zidar je potpuno napustio projekt.',
          'Pripovjedaču je ponestalo novca.',
          'Inspektor je nakon promjene izvođača zatražio dodatnu dokumentaciju.',
          'Oluja je oštetila novi krov.',
        ],
        correct: 2,
      },
      {
        q: 'Kakav je kompromis predložila arhitektica za unutarnje uređenje?',
        qEn: 'What compromise did the architect suggest for the interior work?',
        opts: [
          'Zamijeniti sve kamene zidove modernim betonom.',
          'Sakriti moderne instalacije ispod podova, a vanjštinu zadržati izvornom.',
          'Dograditi kat na kuću.',
          'Ostaviti unutrašnjost potpuno nedovršenom.',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_17',
    level: 'B2',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🏢',
    title: 'Sastanak stanara',
    titleEn: "The Tenants' Meeting",
    duration: 12,
    focus: 'Neupravni (indirektni) govor • Kondicional • Rječnik zgrade i zajednice',
    intro:
      "A leaking roof forces a building's quarrelling tenants into a meeting that swings between factions, dry humor, and an unexpected compromise.",
    paragraphs: [
      {
        hr: 'Krov naše zgrade prokišnjava već treću godinu zaredom, a ovog proljeća voda je počela kapati i u stan na trećem katu, daleko od najoštećenijeg dijela. Predsjednica suvlasnika, gospođa Perić, sazvala je hitan sastanak stanara u zajedničkoj prostoriji, tvrdeći da se problem više ne smije odgađati. Petnaestak stanara stiglo je te srijede navečer, neki mrzovoljni, a neki radoznali.',
        en: "Our building's roof has been leaking for the third year running, and this spring water started dripping even into the apartment on the third floor, far from the most damaged section. The board chair, Mrs. Perić, called an urgent tenants' meeting in the shared ground-floor room, insisting the problem could no longer be postponed. About fifteen tenants showed up that Wednesday evening, some grumpy, some curious about what would happen.",
      },
      {
        hr: 'Odmah su se izdvojile dvije suprotstavljene struje. Gospodin Horvat s prvog kata inzistirao je da je dovoljno samo zakrpati oštećena mjesta, jer sebi uz mirovinu ne može priuštiti veći trošak. Mlađi bračni par iz potkrovlja, naprotiv, tvrdio je da bi djelomični popravak bio bacanje novca i da bi cijeli krov trebalo zamijeniti odjednom, unatoč visokoj cijeni.',
        en: "Two opposing camps immediately formed. Mr. Horvat from the first floor insisted that patching the damaged spots was enough, since he couldn't afford a bigger expense on his pension. The young married couple from the attic apartment, on the other hand, argued that a partial repair would be throwing money away and that the whole roof should be replaced at once, despite the high cost.",
      },
      {
        hr: 'Majstor koji je prošli tjedan pregledao krov rekao je predsjednici da bi djelomični popravak izdržao možda dvije zime, ali da bi potpuna obnova bila jedino trajno rješenje. Gospođa Perić je prenijela stanarima da je majstor procijenio kako bi cjelovita obnova stajala oko petnaest tisuća eura, dok bi zakrpa koštala tek dvije tisuće. Nakon te informacije, rasprava se dodatno rasplamsala.',
        en: 'The roofer who inspected the roof the previous week told the chair that a partial repair might hold up for maybe two winters, but that a complete renovation would be the only lasting solution. Mrs. Perić relayed to the tenants that the roofer had estimated a full renovation at around fifteen thousand euros, while patching would cost only two thousand. After that information, the debate flared up even more.',
      },
      {
        hr: 'Usred žustre svađe, stariji gospodin Fabijan, poznat po suhom humoru, ustao je i rekao da će, ako se ovako nastavi, krov propasti prije nego što se itko složi oko ičega. Svi su se nasmijali, čak i gospodin Horvat, a napetost u prostoriji nakratko je popustila. Netko je predložio stanku za kavu, na što se predsjednica nevoljko složila.',
        en: 'In the middle of the heated argument, older Mr. Fabijan, known for his dry humor, stood up and said that if things kept going this way, the roof would collapse before anyone agreed on anything. Everyone laughed, even Mr. Horvat, and the tension in the room briefly eased. Someone suggested a coffee break, which the chair reluctantly agreed to.',
      },
      {
        hr: 'Nakon stanke, mlađi susjed s drugog kata, inženjer po struci, predložio je treće rješenje: obnoviti krov u dvije faze, počevši od najoštećenijeg dijela iznad zajedničkog stubišta. Objasnio je da bi se time trošak mogao podijeliti na dvije godine, a stanari bez ušteđevine ne bi bili prisiljeni odmah platiti cijeli iznos. Ideja je zvučala razumno, no Horvat je ostao sumnjičav.',
        en: "After the break, a younger neighbor from the second floor, an engineer by profession, proposed a third option: renovate the roof in two phases, starting with the most damaged section above the shared staircase. He explained that this would spread the cost over two years, and tenants without savings wouldn't be forced to pay the whole amount at once. The idea sounded reasonable, but Mr. Horvat still looked suspicious.",
      },
      {
        hr: 'Gospodin Horvat rekao je da se boji kako bi se druga faza mogla vječno odgađati te da bi platili dvaput više nego za jednokratnu obnovu. Podsjetio je stanare da su prije pet godina na sličan način odgodili sanaciju pročelja, koje je na kraju koštalo gotovo dvostruko više nego prvotna procjena. Nekoliko je stanara kimnulo, prisjećajući se te neugodne epizode.',
        en: "Mr. Horvat said he was afraid the second phase could be postponed forever and that they'd end up paying twice as much as for a one-time renovation. He reminded the tenants that five years earlier they had postponed the façade repair in a similar way, which ended up costing almost double the original estimate. Several tenants nodded, recalling that unpleasant episode.",
      },
      {
        hr: 'Nakon dodatnog sata rasprave, dogovoren je kompromis koji nitko od stanara u početku nije predložio: krov će se obnoviti u cijelosti, ali radovi će se podijeliti na dva kredita koji će se otplaćivati iz zajedničke pričuve, tako da nijedan stanar ne mora odjednom izdvojiti veći iznos. Gospodin Horvat pristao je uz uvjet da se troškovi pismeno potvrde, na što se predsjednica rado složila.',
        en: 'After another hour of discussion, a compromise was reached that none of the tenants had initially proposed: the roof would be fully renovated, but the work would be split across two reserve-fund loans, so no tenant would have to pay a large sum all at once. Mr. Horvat agreed on the condition that all costs be confirmed in writing in advance, which the chair happily accepted.',
      },
      {
        hr: 'Na kraju sastanka, gospodin Fabijan je, s uobičajenim osmijehom, primijetio da je krovu trebalo tri kišne sezone da natjera cijelu zgradu da se konačno dogovori oko ičega. Svi su se nasmijali, a predsjednica je zapisnik zaključila riječima da će prvi krediti biti odobreni već sljedećeg mjeseca. Stanari su se razišli kasno navečer, umorni, ali prvi put pomalo optimistični.',
        en: 'At the end of the meeting, Mr. Fabijan, with his usual smile, remarked that it had taken three rainy seasons to make the whole building finally agree on anything. Everyone laughed, and the chair closed the minutes by saying the first loans would be approved as early as next month. The tenants dispersed late in the evening, tired but, for the first time since the problem began, somewhat optimistic.',
      },
      {
        hr: 'Kao netko tko je godinama izbjegavao sastanke stanara, smatrajući ih gubitkom vremena, te sam večeri shvatio koliko je važno da susjedi razgovaraju licem u lice umjesto da razmjenjuju ljutite poruke u skupini. Krov će možda još kapati mjesecima dok se ne isplate krediti, ali barem znamo da ćemo, kad idući problem iskrsne, sjesti za isti stol i nekako se dogovoriti.',
        en: "As someone who had avoided tenants' meetings for years, considering them a waste of time, I realized that evening how important it is for neighbors to talk face to face instead of exchanging angry messages in the group chat. The roof might still leak for months until the loans are paid off, but at least we know that when the next problem comes up, we'll sit at the same table and somehow work it out.",
      },
    ],
    vocabulary: [
      {
        hr: 'prokišnjavati',
        en: 'to leak (of a roof)',
        ex: 'Krov naše zgrade prokišnjava već treću godinu zaredom, a ovog proljeća voda je počela kapati i u stan na trećem katu, daleko od najoštećenijeg dijela.',
      },
      {
        hr: 'suvlasnik',
        en: 'co-owner',
        ex: 'Predsjednica suvlasnika, gospođa Perić, sazvala je hitan sastanak stanara u zajedničkoj prostoriji, tvrdeći da se problem više ne smije odgađati.',
      },
      {
        hr: 'priuštiti',
        en: 'to afford',
        ex: 'Gospodin Horvat s prvog kata inzistirao je da je dovoljno samo zakrpati oštećena mjesta, jer sebi uz mirovinu ne može priuštiti veći trošak.',
      },
      {
        hr: 'procijeniti',
        en: 'to estimate',
        ex: 'Gospođa Perić je prenijela stanarima da je majstor procijenio kako bi cjelovita obnova stajala oko petnaest tisuća eura, dok bi zakrpa koštala tek dvije tisuće.',
      },
      {
        hr: 'popustiti',
        en: 'to ease / loosen',
        ex: 'Svi su se nasmijali, čak i gospodin Horvat, a napetost u prostoriji nakratko je popustila.',
      },
      {
        hr: 'ušteđevina',
        en: 'savings',
        ex: 'Objasnio je da bi se time trošak mogao podijeliti na dvije godine, a stanari bez ušteđevine ne bi bili prisiljeni odmah platiti cijeli iznos.',
      },
      {
        hr: 'sanacija',
        en: 'repair / remediation',
        ex: 'Podsjetio je stanare da su prije pet godina na sličan način odgodili sanaciju pročelja, koje je na kraju koštalo gotovo dvostruko više nego prvotna procjena.',
      },
      {
        hr: 'kompromis',
        en: 'compromise',
        ex: 'Nakon dodatnog sata rasprave, dogovoren je kompromis koji nitko od stanara u početku nije predložio: krov će se obnoviti u cijelosti, ali radovi će se podijeliti na dva kredita koji će se otplaćivati iz zajedničke pričuve, tako da nijedan stanar ne mora odjednom izdvojiti veći iznos.',
      },
      {
        hr: 'zapisnik',
        en: 'minutes (of a meeting)',
        ex: 'Svi su se nasmijali, a predsjednica je zapisnik zaključila riječima da će prvi krediti biti odobreni već sljedećeg mjeseca.',
      },
      {
        hr: 'iskrsnuti',
        en: 'to arise / come up (of a problem)',
        ex: 'Krov će možda još kapati mjesecima dok se ne isplate krediti, ali barem znamo da ćemo, kad idući problem iskrsne, sjesti za isti stol i nekako se dogovoriti.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je gospođa Perić sazvala hitan sastanak?',
        qEn: 'Why did Mrs. Perić call an urgent meeting?',
        opts: [
          'Zato što se useljavao novi stanar.',
          'Zato što je prokišnjavanje zahvatilo i dotad neoštećen stan.',
          'Zato što je trebalo odobriti godišnji proračun.',
          'Zato što je jedan stanar podnio tužbu.',
        ],
        correct: 1,
      },
      {
        q: 'Što je majstor procijenio da će koštati potpuna obnova krova?',
        qEn: 'What did the roofer estimate a full roof renovation would cost?',
        opts: [
          'Oko petnaest tisuća eura.',
          'Oko dvije tisuće eura.',
          'Oko trideset tisuća eura.',
          'Odbio je dati procjenu.',
        ],
        correct: 0,
      },
      {
        q: 'Tko je razriješio napetost šalom usred rasprave?',
        qEn: 'Who eased the tension with a joke in the middle of the argument?',
        opts: [
          'Gospođa Perić.',
          'Inženjer s drugog kata.',
          'Gospodin Horvat.',
          'Gospodin Fabijan.',
        ],
        correct: 3,
      },
      {
        q: 'Čega se bojao gospodin Horvat vezano uz predloženu drugu fazu radova?',
        qEn: 'What was Mr. Horvat afraid of regarding the proposed second phase of work?',
        opts: [
          'Da će krovopokrivač bankrotirati prije završetka.',
          'Da će se druga faza vječno odgađati i na kraju koštati više.',
          'Da zgrada tijekom radova neće biti sigurna.',
          'Da susjedi više neće razgovarati jedni s drugima.',
        ],
        correct: 1,
      },
      {
        q: 'Kakav je konačni dogovor postignut na sastanku?',
        qEn: 'What was the final agreement reached at the meeting?',
        opts: [
          'Da se napravi samo djelomična zakrpa.',
          'Da se obnova odgodi za još godinu dana.',
          'Da se potpuna obnova podijeli na dva kredita iz zajedničke pričuve.',
          'Da svaki stanar unajmi vlastitog izvođača.',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c1_13',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🎶',
    title: 'Glazba koja ne treba glazbala',
    titleEn: 'The Music That Needs No Instruments',
    duration: 12,
    focus: 'Klapsko pjevanje • Zajedništvo bez pratnje • Kolektivni dah',
    intro:
      'Na hrvatskoj obali postoji glazba koja se pjeva bez ijednog instrumenta, a ipak zvuči kao cijeli orkestar. Esej o klapi — i o tome što sklad bez glazbala otkriva o zajedništvu.',
    paragraphs: [
      {
        hr: 'Klapa se rađa ondje gdje instrumenti šute: u konobama, na rivama, u brodskim potpalubljima, gdje su mornari i težaci, ne raspolažući ničim osim glasa, pjevajući nakon posla, otkrili da se pjesma može graditi kao kuća — kamen na kamen, glas na glas. Premda je danas klapsko pjevanje UNESCO-ova baština, njegov je izvor posve neslužben: potreba da se umor izreče na način koji riječi same ne dopuštaju.',
        en: "Klapa is born where instruments fall silent: in taverns, on seafronts, in ships' holds, where sailors and labourers, possessing nothing but their voice, singing after work, discovered that a song can be built like a house — stone upon stone, voice upon voice. Though klapa singing is today a UNESCO heritage, its origin is entirely unofficial: the need to voice exhaustion in a way that words alone do not allow.",
      },
      {
        hr: 'Klapa nema kapelnika, ali ima strogu, nepisanu hijerarhiju. Prvi tenor nosi melodiju, ali ne smije je nositi sam; drugi tenor prati, umekšavajući oštrine; bariton ispunjava sredinu, dok bas, spuštajući se ispod svih ostalih, drži temelj na kojem počiva cijela građevina. Nitko od njih, pjevajući zajedno, ne smije se nametnuti: umijeće klape jest umijeće povlačenja, ne isticanja.',
        en: 'A klapa has no conductor, yet it has a strict, unwritten hierarchy. The first tenor carries the melody, but must not carry it alone; the second tenor follows, softening the edges; the baritone fills the middle, while the bass, dropping below all the others, holds the foundation on which the whole structure rests. None of them, singing together, may impose himself: the art of klapa is the art of withdrawal, not of standing out.',
      },
      {
        hr: 'Klapa se, za razliku od zborske glazbe, ne uči iz notnog zapisa nego iz uha i sjećanja. Mladić koji uđe u klapu ne dobiva partituru; dobiva mjesto uz starijeg pjevača i zadatak da sluša dok njegov glas, gotovo nesvjesno, ne nauči kamo se uklopiti. Slijedom toga, svaka klapa nosi trag svojih prethodnika, kao što dijete nosi crte lica roditelja.',
        en: "Unlike choral music, klapa is not learned from written notation but from the ear and from memory. A young man who joins a klapa receives no score; he receives a place beside an older singer and the task of listening until his voice, almost unconsciously, learns where to fit in. Consequently, every klapa carries the trace of its predecessors, the way a child carries the features of its parents' faces.",
      },
      {
        hr: 'Klapa prati zajednicu kroz sve njezine prijelaze: pjeva na vjenčanju, na sprovodu, na blagdan sveca zaštitnika, uz predstojeći dolazak proljeća ili uz oproštaj od ljeta. Ondje gdje bi drugi narod unajmio orkestar, dalmatinsko selo okupi vlastite glasove, jer je pjesma, dijeljena među susjedima, vrjednija od pjesme kupljene. Tako klapa postaje ne priredba, nego obred.',
        en: 'Klapa accompanies the community through all its transitions: it sings at weddings, at funerals, on the feast of the patron saint, at the approaching arrival of spring or the farewell to summer. Where another people would hire an orchestra, a Dalmatian village gathers its own voices, because a song shared among neighbours is worth more than a song that is bought. Thus klapa becomes not an event, but a rite.',
      },
      {
        hr: 'U tome je klapa, možda nesvjesno, politički čin: dokazuje da sklad ne zahtijeva vladara. Nema dirigenta koji određuje tempo, nema ravnatelja koji propisuje dinamiku; sve što klapu drži na okupu jest zajednički osjećaj za trenutak, stečen godinama pjevanja jednih uz druge. Stoga klapa uspijeva upravo ondje gdje formalne institucije zakazuju — u nesavršenom, ali živom dogovoru glasova.',
        en: 'In this, klapa is, perhaps unconsciously, a political act: it proves that harmony does not require a ruler. There is no conductor dictating tempo, no director prescribing dynamics; all that holds a klapa together is a shared feel for the moment, acquired over years of singing alongside one another. Hence klapa succeeds precisely where formal institutions falter — in the imperfect, but living, agreement of voices.',
      },
      {
        hr: 'Suvremena kultura veliča individualni glas: solista, virtuoza, onoga koji se izdvaja. Klapa uči suprotnome. U njoj je vrhunac umijeća znati kada šutjeti, kada popustiti drugome glasu prostor koji bi se lako mogao prisvojiti. Pjevač koji u klapi zapjeva glasnije od potrebnog ne pokazuje snagu, nego nerazumijevanje: razumio je notu, ali ne i njezinu svrhu unutar cjeline.',
        en: 'Contemporary culture glorifies the individual voice: the soloist, the virtuoso, the one who stands apart. Klapa teaches the opposite. In it, the height of skill is knowing when to be silent, when to yield to another voice a space that could easily be claimed. A singer who in a klapa sings louder than necessary shows not strength but incomprehension: he has understood the note, but not its purpose within the whole.',
      },
      {
        hr: 'Ono što klapa najprije traži od svojih članova nije glas, nego sluh. Prije nego što progovori, pjevač mora naučiti čuti: čuti kamo klizi bariton, čuti gdje bas diše, čuti trenutak u kojem se prvi tenor sprema uzdignuti glas. Tko ne čuje druge, taj u klapi ne može otpjevati ni jednu jedinu ispravnu notu, koliko god mu grlo bilo snažno.',
        en: 'What klapa first demands of its members is not a voice, but an ear. Before he speaks, a singer must learn to hear: to hear where the baritone slides, where the bass breathes, the moment at which the first tenor prepares to raise his voice. Whoever does not hear the others cannot sing a single correct note in a klapa, however powerful his throat may be.',
      },
      {
        hr: 'Svake ljetne večeri u Omišu, na Festivalu dalmatinskih klapa, desetci sastava dokazuju da se ova tradicija ne gasi, nego se, naprotiv, pomlađuje: mladi pjevači, odgojeni uz stare ploče i uz djedove glasove, donose klapu u dvorane pune publike koja pljeska istoj pjesmi koju su njihovi pradjedovi pjevali bez ikakve publike, tek radi sebe i radi mora.',
        en: "Every summer evening in Omiš, at the Festival of Dalmatian Klapa, dozens of ensembles prove that this tradition is not dying out but, on the contrary, being rejuvenated: young singers, raised on old records and on their grandfathers' voices, bring klapa into halls full of an audience applauding the very song their great-grandfathers sang without any audience at all, purely for their own sake and for the sea's.",
      },
      {
        hr: 'Klapa, u konačnici, poučava nešto što nadilazi glazbu: da zajedništvo nije zbroj glasova, nego njihovo međusobno prilagođavanje, njihova spremnost da se povuku kako bi cjelina zazvučala ispravno. U svijetu koji sve glasnije traži da se svatko čuje, klapa tiho podsjeća da se najljepši sklad rađa iz onoga što je pojedinac spreman ne otpjevati.',
        en: 'In the end, klapa teaches something that goes beyond music: that community is not the sum of voices but their mutual adjustment to one another, their readiness to withdraw so that the whole may sound right. In a world that ever more loudly demands that everyone be heard, klapa quietly reminds us that the most beautiful harmony is born from what an individual is willing not to sing.',
      },
    ],
    vocabulary: [
      {
        hr: 'glazbalo',
        en: 'musical instrument',
        ex: 'Glazba koja ne treba glazbala.',
      },
      {
        hr: 'nametnuti se',
        en: 'to impose oneself',
        ex: 'Nitko od njih ne smije se nametnuti.',
      },
      {
        hr: 'sklad',
        en: 'harmony',
        ex: 'Sklad ne zahtijeva vladara.',
      },
      {
        hr: 'povlačenje',
        en: 'withdrawal, self-effacement',
        ex: 'Umijeće klape jest umijeće povlačenja.',
      },
      {
        hr: 'baština',
        en: 'heritage',
        ex: 'Klapsko pjevanje UNESCO-ova je baština.',
      },
      {
        hr: 'zakazati',
        en: 'to fail, falter',
        ex: 'Klapa uspijeva ondje gdje institucije zakazuju.',
      },
      {
        hr: 'pomladiti se',
        en: 'to be rejuvenated',
        ex: 'Tradicija se ne gasi, nego se pomlađuje.',
      },
      {
        hr: 'prisvojiti',
        en: 'to appropriate, claim',
        ex: 'Prostor koji bi se lako mogao prisvojiti.',
      },
      {
        hr: 'obred',
        en: 'rite, ritual',
        ex: 'Klapa postaje ne priredba, nego obred.',
      },
      {
        hr: 'temelj',
        en: 'foundation',
        ex: 'Bas drži temelj na kojem počiva građevina.',
      },
    ],
    quiz: [
      {
        q: 'Zašto klapa, prema tekstu, funkcionira bez dirigenta?',
        qEn: 'Why, according to the text, does a klapa function without a conductor?',
        opts: [
          'Jer glasovi dijele zajednički osjećaj za trenutak, stečen godinama pjevanja',
          'Jer je jedan glas uvijek određen kao glavni',
          'Jer klapa uopće ne treba sklada',
          'Jer pjevaju isključivo po notnom zapisu',
        ],
        correct: 0,
      },
      {
        q: 'Što, prema eseju, razlikuje vrhunskog klapskog pjevača od lošeg?',
        qEn: 'What, according to the essay, distinguishes an excellent klapa singer from a poor one?',
        opts: [
          'Zna kada šutjeti i prepustiti prostor drugome glasu',
          'Poznaje sve note napamet',
          'Ima najsnažniji glas u selu',
          'Pjeva glasnije od svih ostalih članova',
        ],
        correct: 0,
      },
      {
        q: 'Kako mladi pjevač, prema tekstu, uči klapsko pjevanje?',
        qEn: 'How, according to the text, does a young singer learn klapa singing?',
        opts: [
          'Snimanjem nastupa na festivalu',
          'Slušanjem i mjestom uz starijeg pjevača, ne notnim zapisom',
          'Isključivo pohađanjem glazbene škole',
          'Čitanjem partiture kod kuće',
        ],
        correct: 1,
      },
      {
        q: 'Zašto tekst tvrdi da je klapa, u izvjesnom smislu, „politički čin”?',
        qEn: 'Why does the text claim that klapa is, in a certain sense, a "political act"?',
        opts: [
          'Jer njihove pjesme govore o politici',
          'Jer klape javno sudjeluju u izborima',
          'Jer im rad financira država',
          'Jer dokazuje da sklad može nastati bez vladara ili formalne institucije',
        ],
        correct: 3,
      },
      {
        q: 'Što, prema zaključku eseja, klapa poučava o zajedništvu?',
        qEn: "According to the essay's conclusion, what does klapa teach about community?",
        opts: [
          'Da pojedinac uvijek mora pjevati glasnije od drugih',
          'Da je najvažniji broj pjevača u sastavu',
          'Da se rađa iz spremnosti pojedinca da se povuče radi cjeline',
          'Da zajedništvo ne postoji bez pratnje instrumenata',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c1_14',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🗼',
    title: 'Čuvar krajnjeg svjetla',
    titleEn: 'Keeper of the Farthest Light',
    duration: 12,
    focus: 'Samoća i dužnost • Ophođenje s vremenom • Otočki krajolik',
    intro:
      'Na najudaljenijem hrvatskom otoku, gdje brod pristaje tek jednom mjesečno, čovjek uči živjeti prema ritmu mora, a ne prema satu. Priča o svjetioničaru na Palagruži kroz četiri godišnja doba.',
    paragraphs: [
      {
        hr: 'Stigavši na Palagružu prvog dana travnja, Ivan je s broda iskrcao tri sanduka knjiga, radio-prijamnik i strpljenje za koje nije znao hoće li mu biti dovoljno. Svjetionik, uspravan na hridi kao posljednji zub otoka, čekao ga je premazan solju i tišinom. Opskrbni brod dolazi jednom mjesečno; sve ostalo, uključujući vlastitu pamet, čuvar mora nositi sa sobom.',
        en: "Arriving on Palagruža on the first day of April, Ivan unloaded from the boat three crates of books, a radio receiver, and a patience he did not know would be enough. The lighthouse, standing upright on the reef like the island's last tooth, awaited him coated in salt and silence. The supply boat comes once a month; everything else, including one's own wits, the keeper must carry with him.",
      },
      {
        hr: 'Proljeće na Palagruži ne miriši na cvijet, nego na more koje se budi. Ivan je ubrzo naučio čitati nebo: kada se jata selica, iscrpljena preletom preko pučine, sruče na hrid tražeći predah, znao je da se vrijeme kvari. Zabilježivši svaki dolazak u bilježnicu koju je vodio više iz navike negoli dužnosti, postao je, a da toga nije bio ni svjestan, jedini kroničar otoka.',
        en: "Spring on Palagruža does not smell of blossom, but of the sea awakening. Ivan soon learned to read the sky: when flocks of migratory birds, exhausted by their flight over the open sea, dropped onto the reef seeking respite, he knew the weather was about to turn. Recording every arrival in a notebook he kept more from habit than duty, he became, without being aware of it, the island's sole chronicler.",
      },
      {
        hr: 'Ljeti se more oko otoka napuni jedrilicama, a ponekad i znatiželjnicima koji, unatoč upozorenju s ploče, pokušaju popeti se do svjetla. Ivan ih dočekuje uljudno, ali kratko: svjetionik nije znamenitost, nego stroj koji ne smije zatajiti. Dok turisti fotografiraju vidik, on provjerava leću, jer noć ne pita je li dan bio ugodan.',
        en: 'In summer the sea around the island fills with sailboats, and sometimes with curious visitors who, despite the warning sign, try to climb up to the light. Ivan receives them politely, but briefly: the lighthouse is not a landmark, but a machine that must not fail. While the tourists photograph the view, he checks the lens, because the night does not ask whether the day was pleasant.',
      },
      {
        hr: 'Usprkos vrelini koja u kolovozu pretvara kamen u pećnicu, posao se ne obustavlja. Usamljenost mu tada dolazi najjače, ne noću, nego u podne, kad je more prazna ploča bez ijednog broda, a jedini zvuk jest cvrčak koji se, čini se, ne umara. Ivan je naučio razgovarati s morem naglas, ne zato što je vjerovao da mu ono odgovara, nego zato što tišina, ne razbijena ničim, postaje neizdrživa.',
        en: 'Despite the heat that in August turns the rock into an oven, the work does not stop. Loneliness comes to him most strongly then, not at night but at noon, when the sea is an empty slate without a single boat, and the only sound is a cricket that never seems to tire. Ivan learned to talk to the sea aloud, not because he believed it answered him, but because the silence, unbroken by anything, becomes unbearable.',
      },
      {
        hr: 'Jesen na Palagružu dolazi naglo, s prvom burom koja opskrbni brod otkazuje bez najave. Ivan tada prebrojava zalihe, procjenjuje hoće li kruha i ulja biti dovoljno, i zna da mu, ne stigne li brod tjedan dana, na um ne smije pasti panika. Bura mu je, s vremenom, postala gotovo drag glas — grub, ali pouzdan, jer barem najavljuje sebe, za razliku od tišine.',
        en: 'Autumn arrives on Palagruža abruptly, with the first bora that cancels the supply boat without warning. Ivan then counts his supplies, gauges whether there will be enough bread and oil, and knows that, should the boat fail to arrive for a week, panic must not enter his mind. Over time the bora became almost a dear voice to him — harsh, but reliable, for at least it announces itself, unlike the silence.',
      },
      {
        hr: 'Slijedom toga, počeo je jesen doživljavati ne kao gubitak ljeta, nego kao povratak sebi: dani se skraćuju, posjeti prorjeđuju, a on, prepušten samo sebi i mehanizmu koji mora vrtjeti, otkriva da samoća, kad se izabere, prestaje biti kazna. Postaje, umjesto toga, oblik discipline koji malo tko izvana razumije.',
        en: 'Consequently, he began to experience autumn not as the loss of summer, but as a return to himself: the days grow shorter, visits grow sparser, and he, left to himself and the mechanism he must keep turning, discovers that solitude, when chosen, ceases to be a punishment. It becomes, instead, a form of discipline that few outsiders understand.',
      },
      {
        hr: 'Zima donosi valove koji se, udarajući o hrid, penju gotovo do vrata kućice, i noći u kojima svjetlo mora gorjeti unatoč vjetru koji prijeti da ugasi sve što gori. Provjeravajući generator po treći put te noći, Ivan zna da od njegove budnosti ovisi brod kojeg možda nikad neće vidjeti, ali čiji će kapetan, prolazeći kroz tjesnac, pouzdano potražiti baš njegovo svjetlo.',
        en: 'Winter brings waves that, crashing against the reef, climb almost to the door of the cottage, and nights in which the light must burn despite the wind that threatens to extinguish everything that burns. Checking the generator for the third time that night, Ivan knows that a ship he may never see depends on his vigilance, a ship whose captain, passing through the strait, will reliably seek out exactly his light.',
      },
      {
        hr: 'U tome je, čini se, i najveća paradoksalnost njegova poziva: svjetioničar radi za ljude koje nikad ne susreće, čuva živote koje nikad ne broji, i jedina mu je nagrada spoznaja da svjetlo, dok on bdije, ne trepće. Nitko mu se neće zahvaliti; nitko ni ne zna njegovo ime. Pa ipak, upravo ta nevidljivost čini njegov posao, po njemu samom, dostojnim.',
        en: 'In this, it seems, lies the greatest paradox of his calling: the lighthouse keeper works for people he never meets, guards lives he never counts, and his only reward is the knowledge that the light, while he keeps watch, does not flicker. No one will thank him; no one even knows his name. And yet it is precisely this invisibility that makes his work, in his own view, worthy.',
      },
      {
        hr: 'Kad je travanj ponovno stigao, Ivan je, premda umoran, ostao još jednu godinu, jer je shvatio nešto što se riječima teško prenosi: da se čovjek koji jednom nauči živjeti s morem, umjesto pored njega, teško vraća kopnu. Palagruža ga nije zarobila; naučila ga je da samoća, dobro pretočena u dužnost, može biti oblik slobode.',
        en: 'When April arrived again, Ivan, though weary, stayed one more year, for he had understood something hard to convey in words: that a man who once learns to live with the sea, rather than beside it, returns to the mainland only with difficulty. Palagruža had not trapped him; it had taught him that solitude, well transformed into duty, can be a form of freedom.',
      },
    ],
    vocabulary: [
      {
        hr: 'hrid',
        en: 'reef, cliff',
        ex: 'Svjetionik uspravan na hridi.',
      },
      {
        hr: 'iscrpljen',
        en: 'exhausted',
        ex: 'Jata selica, iscrpljena preletom preko pučine.',
      },
      {
        hr: 'kroničar',
        en: 'chronicler',
        ex: 'Postao je jedini kroničar otoka.',
      },
      {
        hr: 'zatajiti',
        en: 'to fail, malfunction',
        ex: 'Stroj koji ne smije zatajiti.',
      },
      {
        hr: 'neizdrživ',
        en: 'unbearable',
        ex: 'Tišina postaje neizdrživa.',
      },
      {
        hr: 'prorijediti se',
        en: 'to thin out, become sparse',
        ex: 'Posjeti se prorjeđuju.',
      },
      {
        hr: 'bdjeti',
        en: 'to keep watch, keep vigil',
        ex: 'Dok on bdije, svjetlo ne trepće.',
      },
      {
        hr: 'dostojan',
        en: 'worthy',
        ex: 'Njegov je posao, po njemu, dostojan.',
      },
      {
        hr: 'pouzdan',
        en: 'reliable',
        ex: 'Bura mu je postala gotovo drag, pouzdan glas.',
      },
      {
        hr: 'zarobiti',
        en: 'to trap, capture',
        ex: 'Palagruža ga nije zarobila.',
      },
    ],
    quiz: [
      {
        q: 'Zašto Ivan tijekom ljeta ophodi znatiželjnike kratko, ali uljudno?',
        qEn: 'Why does Ivan treat curious summer visitors briefly but politely?',
        opts: [
          'Jer svjetionik shvaća kao stroj koji ne smije zatajiti, ne kao znamenitost',
          'Jer ga turisti ometaju u čitanju',
          'Jer mu je to propisano pravilnikom',
          'Jer ne voli razgovarati s ljudima',
        ],
        correct: 0,
      },
      {
        q: 'Što bura, prema tekstu, predstavlja Ivanu jeseni?',
        qEn: 'According to the text, what does the bora represent to Ivan in autumn?',
        opts: [
          'Znak da mora zauvijek napustiti otok',
          'Prijetnju kojoj se boji suprotstaviti',
          'Pouzdaniji, poznatiji glas nasuprot neizdrživoj tišini',
          'Razlog da prestane bilježiti dolaske ptica',
        ],
        correct: 2,
      },
      {
        q: 'Kako tekst opisuje paradoks svjetioničareva poziva?',
        qEn: "How does the text describe the paradox of the lighthouse keeper's calling?",
        opts: [
          'Čuva živote ljudi koje nikad ne upozna niti mu oni zahvale',
          'Poznaje svakog kapetana koji prolazi tjesnacem',
          'Njegov rad donosi mu javno priznanje',
          'Prima veliku plaću za neznatan posao',
        ],
        correct: 0,
      },
      {
        q: 'Zašto Ivan na kraju odlučuje ostati na otoku još jednu godinu?',
        qEn: 'Why does Ivan ultimately decide to stay on the island for another year?',
        opts: [
          'Shvatio je da mu samoća, pretočena u dužnost, donosi slobodu',
          'Opskrbni brod po njega nije stigao',
          'Htio je izbjeći daljnje bilježenje selica',
          'Nije imao gdje se vratiti na kopnu',
        ],
        correct: 0,
      },
      {
        q: 'Što priča sugerira o odnosu samoće i discipline?',
        qEn: 'What does the story suggest about the relationship between solitude and discipline?',
        opts: [
          'Da disciplina uklanja svaku potrebu za samoćom',
          'Da čuvar svjetionika mora pod svaku cijenu izbjegavati samoću',
          'Da je samoća uvijek štetna za čovjeka',
          'Da izabrana samoća prestaje biti kazna i postaje oblik discipline',
        ],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_c1_15',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🖌️',
    title: 'Restauratorica fresaka',
    titleEn: 'The Fresco Restorer',
    duration: 12,
    focus: 'zanat • strpljivost • etika obnove',
    intro:
      'A fresco restorer in an Istrian church reflects on the slow, exacting craft of conservation — and on where the line falls between preserving history and rewriting it.',
    paragraphs: [
      {
        hr: 'Ivana Barić svako jutro otključa vrata istarske crkvice i prvo ugasi mobitel, jer tišina koju restauriranje zahtijeva mora biti gotovo obredna. Popne se na skelu, otvori kutiju s kistovima i pincetama te zastane pred freskom kao pred pacijentom povjerenim na skrb. Svaki centimetar zida svjedoči o rukama koje su ga oslikale prije sedam stoljeća.',
        en: 'Every morning, Ivana Barić unlocks the door of the Istrian church and first turns off her phone, because the silence restoration demands must be almost ritual. She climbs the scaffold, opens her case of brushes and tweezers, and pauses before the fresco as before a patient entrusted to her care. Every centimeter of the wall bears witness to hands that painted it seven centuries ago.',
      },
      {
        hr: 'Freska prikazuje Poklonstvo pastira, no stoljeća vlage i dima od svijeća nagrizla su boju tako da se lice Djevice jedva nazire ispod sivkaste mrlje. Ispod gornjeg sloja rendgenska je snimka otkrila stariji crtež, grublju verziju iste scene, nastalu možda desetljeće ranije. Ta dva sloja, vidljivi i skriveni, pretvaraju fresku u dvostruki spomenik: jedan trenutku nastanka, drugi trenutku naknadne dorade.',
        en: "The fresco depicts the Adoration of the Shepherds, but centuries of damp and candle smoke have corroded the paint until the Virgin's face is barely visible beneath a grayish stain. Beneath the top layer, an X-ray revealed an older, rougher version of the same scene, painted perhaps a decade earlier. These two layers, visible and hidden, turn the fresco into a double monument: one to the moment of its creation, the other to a later reworking.",
      },
      {
        hr: 'Prije nego dotakne boju, Ivana provede tjedne u promatranju: fotografira fresku pod ultraljubičastim svjetlom, bilježi pukotine, testira otapalo na neupadljivom rubu veličine nokta. Skalpel drži gotovo okomito, uklanjajući nečistoću u slojevima tanjim od papira, dok povećalo uvećava svaki potez kista njezina prethodnika. Brzina ovdje nije vrlina; jedan pogrešan pokret može zauvijek izbrisati ono što fotografija ne bi mogla vratiti.',
        en: 'Before she touches the paint, Ivana spends weeks observing: she photographs the fresco under ultraviolet light, notes the cracks, tests a solvent on an inconspicuous patch the size of a fingernail. She holds the scalpel almost vertical, removing grime in layers thinner than paper, while a magnifying glass enlarges every brushstroke of her predecessor. Speed is no virtue here; a single wrong move can erase forever what no photograph could restore.',
      },
      {
        hr: 'Suvremena konzervatorska etika nalaže da svaka nadopuna bude prepoznatljiva izbliza, ali neupadljiva s udaljenosti s koje vjernici promatraju oltar. Ivana zato koristi tehniku tratteggio, tanke crtice koje oko s nekoliko metara stapa u cjelinu, no koje pod povećalom jasno odaju suvremenu intervenciju. Cilj nije prevariti gledatelja, nego mu vratiti sliku bez laži o cjelovitosti.',
        en: 'Modern conservation ethics require that any addition be recognizable up close, yet unobtrusive from the distance at which worshippers view the altar. Ivana therefore uses the tratteggio technique, thin brushstrokes that the eye blends into the whole from a few meters away, but that clearly betray a modern intervention under magnification. The goal is not to deceive the viewer, but to give the image back without a lie about its wholeness.',
      },
      {
        hr: 'Prošle je jeseni, čisteći donji rub freske, naišla na trag ranije intervencije: premazan oblak boje kojim je neki prijašnji majstor prekrio oštećenje umjesto da ga sanira. Mogla ga je ukloniti, no odlučila je zadržati ga kao svjedočanstvo da freska ima vlastitu povijest brige, ne samo povijest nastanka. Time je priznala da autentičnost nije zamrznuto stanje, nego niz odluka donesenih kroz stoljeća.',
        en: "Last autumn, cleaning the fresco's lower edge, she found a trace of an earlier intervention: a patch of color with which some previous master had covered damage instead of repairing it. She could have removed it, but chose to keep it as testimony that the fresco has its own history of care, not just a history of creation. In doing so she acknowledged that authenticity is not a frozen state but a series of decisions made across centuries.",
      },
      {
        hr: 'Sate provedene na skeli tijelo pamti drukčije nego um: ukočen vrat, prašina koja peče oči, vlaga koja se hladnim dahom uvlači pod kožu. Rad u polumraku crkve stvara osjećaj redovničke izdvojenosti od vanjskog svijeta, koji ne sluti da netko gore, centimetar po centimetru, vraća boju licima što su ih naslikali davno umrli slikari. Kad siđe sa skele, hod joj je nesiguran, kao da se vraća iz drugog stoljeća.',
        en: "Hours spent on the scaffold are remembered by the body differently than by the mind: a stiff neck, dust that stings the eyes, damp that creeps under the skin with a cold breath. Working in the church's half-light creates a feeling of monastic isolation from the outside world, which has no idea that someone up there is restoring colour, centimeter by centimeter, to faces painted by long-dead painters. When she climbs down from the scaffold, her steps are unsteady, as though returning from another century.",
      },
      {
        hr: 'Norma je nemilosrdna i istodobno oslobađajuća: jedan kvadratni centimetar dnevno, jer je žurba jedini pravi neprijatelj konzervatora. U toj usporenosti vrijeme se ne mjeri satima nego dovršenim poljima, a dan koji je drugima prazan njoj donosi vidljiv pomak. Naučila je da strpljenje nije vrlina koju netko posjeduje od rođenja, nego vještina koja se, poput poteza kista, uvježbava ponavljanjem.',
        en: "The quota is merciless and, at the same time, liberating: one square centimeter a day, because haste is the conservator's one true enemy. In that slowness, time is measured not in hours but in completed patches, and a day that would seem empty to others brings her a visible advance. She has learned that patience is not a virtue one is born with but a skill practiced, like a brushstroke, through repetition.",
      },
      {
        hr: 'Najteže odluke ne tiču se tehnike nego opsega: gdje povući crtu između obnavljanja izgubljenog i izmišljanja onoga što nikad nije postojalo. Ivana odbija dovršavati praznine domišljanjem, koliko god iskušenje bilo veliko; radije ostavlja vidljivu prazninu nego nameće vlastitu ruku tamo gdje izvornik šuti. Poniznost pred izvornim slikarom, kaže, važnija je od želje da posao izgleda dovršeno.',
        en: 'The hardest decisions concern not technique but scope: where to draw the line between restoring what is lost and inventing what never existed. Ivana refuses to complete gaps by guesswork, however tempting; she would rather leave a visible void than impose her own hand where the original stays silent. Humility before the original painter, she says, matters more than the wish to make the work look finished.',
      },
      {
        hr: 'Kad navečer spremi alat i siđe niz skelu posljednji put, okrene se i pogleda fresku koja još nije gotova, možda neće biti ni sljedeće godine. U tom nedovršenom stanju ipak prepoznaje uspjeh, jer njezin posao nikad nije bio da freska izgleda nova, nego da preživi još jedno stoljeće čitljiva onima koji dolaze poslije nje. Zaključa vrata s istim mirom s kojim ih je ujutro otključala.',
        en: 'When she packs her tools in the evening and climbs down the scaffold for the last time, she turns to look at the fresco, still unfinished, perhaps not to be finished even next year. Yet in that unfinished state she recognizes success, for her task was never to make the fresco look new, but to help it survive one more century, legible to those who come after her. She locks the door with the same calm with which she unlocked it that morning.',
      },
    ],
    vocabulary: [
      {
        hr: 'restauriranje',
        en: 'restoration',
        ex: 'tišina koju restauriranje zahtijeva mora biti gotovo obredna',
      },
      {
        hr: 'skela',
        en: 'scaffold',
        ex: 'Popne se na skelu, otvori kutiju s kistovima i pincetama',
      },
      {
        hr: 'sloj',
        en: 'layer',
        ex: 'Ta dva sloja, vidljivi i skriveni, pretvaraju fresku u dvostruki spomenik',
      },
      { hr: 'otapalo', en: 'solvent', ex: 'testira otapalo na neupadljivom rubu veličine nokta' },
      {
        hr: 'nadopuna',
        en: 'in-fill / retouching',
        ex: 'Suvremena konzervatorska etika nalaže da svaka nadopuna bude prepoznatljiva izbliza',
      },
      {
        hr: 'svjedočanstvo',
        en: 'testimony',
        ex: 'odlučila je zadržati ga kao svjedočanstvo da freska ima vlastitu povijest brige',
      },
      {
        hr: 'autentičnost',
        en: 'authenticity',
        ex: 'autentičnost nije zamrznuto stanje, nego niz odluka donesenih kroz stoljeća',
      },
      {
        hr: 'konzervator',
        en: 'conservator',
        ex: 'jer je žurba jedini pravi neprijatelj konzervatora',
      },
      {
        hr: 'poniznost',
        en: 'humility',
        ex: 'Poniznost pred izvornim slikarom, kaže, važnija je od želje da posao izgleda dovršeno.',
      },
      {
        hr: 'izvornik',
        en: 'the original (work)',
        ex: 'radije ostavlja vidljivu prazninu nego nameće vlastitu ruku tamo gdje izvornik šuti',
      },
    ],
    quiz: [
      {
        q: 'Zašto Ivana ugasi mobitel prije početka rada?',
        qEn: 'Why does Ivana turn off her phone before starting work?',
        opts: [
          'Zato što je tišina dio obreda koji restauriranje zahtijeva.',
          'Zato što crkva zabranjuje mobitele.',
          'Zato što skela blokira signal.',
          'Zato što to zahtijeva njezina nadređena.',
        ],
        correct: 0,
      },
      {
        q: 'Što je otkrila rendgenska snimka ispod gornjeg sloja freske?',
        qEn: "What did the X-ray scan reveal beneath the fresco's top layer?",
        opts: [
          'Prazan, neoslikan zid.',
          'Stariju, grublju verziju iste scene.',
          'Modernu krivotvorinu.',
          'Potpis izvornog slikara.',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je Ivana odlučila zadržati trag ranije intervencije umjesto da ga ukloni?',
        qEn: 'Why did Ivana decide to keep the trace of an earlier intervention instead of removing it?',
        opts: [
          'Uklanjanje bi oštetilo zid.',
          'Nije imala odgovarajuće otapalo.',
          'Ostaje kao svjedočanstvo da freska ima vlastitu povijest brige.',
          'Previše se dobro uklapao u stil izvornog slikara.',
        ],
        correct: 2,
      },
      {
        q: 'Prema tekstu, koja je najveća prijetnja poslu konzervatora?',
        qEn: "According to the text, what is the greatest threat to a conservator's work?",
        opts: ['Nedovoljna rasvjeta.', 'Nedostatak novca.', 'Kritika javnosti.', 'Žurba.'],
        correct: 3,
      },
      {
        q: 'Što Ivana radije čini kad joj nedostaje informacija o izvornom izgledu dijela freske?',
        qEn: "What does Ivana prefer to do when she lacks information about a fresco's original appearance?",
        opts: [
          'Izmisliti uvjerljivu nadopunu po uzoru na slične freske.',
          'Posavjetovati se s lokalnim povjesničarima.',
          'Ostaviti vidljivu prazninu radije nego nametnuti vlastitu ruku.',
          'Prekriti prazninu neutralnom bojom.',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c1_16',
    level: 'C1',
    levelColor: '#4c1d95',
    levelBg: '#ede9fe',
    icon: '🌙',
    title: 'Noćna smjena',
    titleEn: 'Night Shift',
    duration: 12,
    focus: 'ritam noćne smjene • empatija • izdržljivost',
    intro:
      'A hospital nurse moves through the rhythm of a night shift — small crises, quiet vigilance, and the long wait for dawn.',
    paragraphs: [
      {
        hr: 'Kad u dvadeset i dva sata preuzme smjenu, Petra Vidović prošeta hodnikom i osluhne bolnicu, jer noću zvukovi govore više nego izvještaji na papiru. Dnevna sestra joj preda ključeve ormarića s lijekovima i kratko sažme stanje svakog pacijenta, a onda nestane, umorna od dvanaest sati na nogama. Petra ostaje sama s tridesetak duša koje spavaju, i sa satima koji se pružaju sporo.',
        en: "When she takes over the shift at ten in the evening, Petra Vidović walks the corridor and listens to the hospital, because at night sounds say more than any written report. The day nurse hands her the medication cabinet keys and briefly summarizes each patient's condition, then disappears, tired after twelve hours on her feet. Petra is left alone with some thirty souls who are sleeping, and with hours that stretch on slowly.",
      },
      {
        hr: 'Obilazak soba obavlja se uvijek istim redoslijedom, od sobe broj jedan do sobe broj petnaest, jer promjena rutine povećava rizik da se nešto zaboravi. Mjeri tlak, broji disanje, provjerava infuzije, a tihim glasom izgovara ime svakog pacijenta, kao da ih podsjeća da nisu sami u mraku. Do ponoći zna tko diše otežano, tko je nemiran u snu, a tko čeka jutro s tjeskobom.',
        en: "The rounds are always done in the same order, from room one to room fifteen, because changing the routine increases the risk that something will be forgotten. She takes blood pressure, counts breaths, checks IV drips, and quietly says each patient's name as she goes, as if reminding them they are not alone in the dark. By midnight she knows who is breathing with difficulty, who is restless in sleep, and who is waiting for morning with anxiety.",
      },
      {
        hr: 'Malo iza jedan sat noću oglasi se alarm s monitora u sobi sedam, gdje zasićenost kisikom starijeg gospodina naglo pada. Petra utrči bez panike, prilagodi protok kisika i govori mu smirenim glasom dok mu se disanje ne stabilizira. Takvi trenuci ne dopuštaju razmišljanje, samo uvježbani slijed pokreta koji tijelo pamti bolje od uma.',
        en: "Shortly after one in the morning, an alarm sounds from the monitor in room seven, where an elderly man's oxygen saturation is suddenly dropping. Petra rushes in without panic, adjusts the oxygen flow, and speaks to him calmly until his breathing stabilizes. Such moments leave no room for thought, only a practiced sequence of movements the body remembers better than the mind.",
      },
      {
        hr: 'U noćnoj smjeni se rijetko govori o osjećajima; umjesto toga se šuti, broji, bilježi, jer riječi bi usporile posao koji zahtijeva brzinu. Protokoli se poštuju ne zato što bi netko provjeravao, nego zato što se u tišini bolnice, kad je osoblje malobrojno, na njih jedino može osloniti. Tako se gradi navika koja izvana izgleda hladno, a zapravo je oblik brige.',
        en: "On the night shift people rarely talk about feelings; instead they stay silent, count, and record, because words would slow down work that demands speed. Protocols are followed not because anyone is checking, but because, in the hospital's night silence, when staff are few, they are the only thing to rely on. Night after night, this builds a habit that looks cold from outside but is, in fact, a form of care.",
      },
      {
        hr: 'Oko četiri zazvoni telefon na postaji: kćer pacijentice iz sobe devet, koja živi u inozemstvu, zabrinuto pita kako je majka provela noć. Petra joj mirno objašnjava da je majka spavala, da su vitalni znakovi stabilni, i osjeti kako se glas na drugoj strani opušta. Takvi pozivi nisu dio službenog opisa posla, no za Petru su jednako važni kao mjerenje tlaka.',
        en: "Around four, the phone rings at the nurses' station: the daughter of the patient in room nine, who lives abroad, anxiously asks how her mother spent the night. Petra calmly explains that her mother slept, that her vital signs are stable, and she can feel the voice on the other end relax. Such calls are not part of the official job description, but for Petra they matter just as much as taking blood pressure.",
      },
      {
        hr: 'Između četiri i pet, kad se i najnemirniji pacijenti utišaju, nastupa najteži dio smjene: sat u kojem tijelo najviše žudi za snom, a um mora ostati budan. Petra tada piše izvještaje, provjerava zalihe zavoja, i dopušta si trenutak pogleda kroz prozor prema parkiralištu. Razmišlja zašto je odabrala ovaj posao, a odgovor je uvijek isti: netko mora biti budan dok drugi spavaju.',
        en: 'Between four and five, when even the most restless patients settle, comes the hardest part of the shift: the hour when the body craves sleep most and the mind must stay alert. Petra writes reports, checks bandage supplies, and allows herself a moment to look out the window at the parking lot. She thinks about why she chose this job at all, and the answer is always the same: someone has to stay awake while others sleep.',
      },
      {
        hr: 'Nešto prije pet, iz sobe tri javi se zvono za pomoć, a mlada pacijentica nakon operacije žali se na iznenadnu, oštru bol u trbuhu. Petra pozove dežurnog liječnika, provjeri ranu, izmjeri temperaturu, i zajedno brzo utvrde da je riječ o komplikaciji koja zahtijeva hitnu intervenciju. Kriza se rješava u tridesetak minuta zahvaljujući uigranom timu koji, iako umoran, funkcionira kao jedno tijelo s više pari ruku.',
        en: 'A little before five, the call bell rings from room three, where a young patient recovering from surgery complains of sudden, sharp abdominal pain. Petra calls the on-duty doctor, checks the wound, takes her temperature, and together they quickly determine it is a complication requiring urgent intervention. The crisis is resolved within about thirty minutes, thanks to a well-drilled team that, tired as it is, functions like a single body with several pairs of hands.',
      },
      {
        hr: 'Nakon deset godina noćnih smjena, Petra je naučila razlikovati umor koji dolazi jednom od onoga koji se nakuplja mjesecima, sloj po sloj, kao naslage na dnu posude koja se nikad do kraja ne ispere. Svaka noć, gledano zasebno, izgleda podnošljivo; tek kad se noći zbroje u godine, otkriva se koliko je taj ritam mijenjao njezino tijelo i njezin odnos prema danu.',
        en: 'After ten years of night shifts, Petra has learned to tell apart the fatigue that comes once from the kind that builds up over months, layer by layer, like sediment at the bottom of a container that never fully rinses clean. Each single night, seen on its own, seems bearable; only when the nights add up to years does it become clear how much this rhythm has changed her body and her relationship to daytime.',
      },
      {
        hr: 'U sedam sati, dnevna sestra dolazi svježa i naspavana, a Petra joj u nekoliko rečenica preda cijelu noć: tko je dobro spavao, tko je imao krizu, što treba paziti do podneva. Izlazi u jutro koje za druge tek počinje, a za nju je već davno u tijeku. Ne žali se na obrnuti ritam života; zna da netko mora čuvati noć da bi drugi mirno sanjali.',
        en: 'At seven, the day nurse arrives fresh and rested, and Petra hands over the entire night in a few sentences: who slept well, who had a crisis, what to watch until noon. She steps out into a morning that, for others, is just beginning, while for her it has long been underway. She does not resent this inverted rhythm of life; she knows that someone must keep watch over the night so that others may dream in peace.',
      },
    ],
    vocabulary: [
      {
        hr: 'smjena',
        en: 'shift',
        ex: 'Kad u dvadeset i dva sata preuzme smjenu, Petra Vidović prošeta hodnikom i osluhne bolnicu',
      },
      {
        hr: 'obilazak',
        en: 'rounds (ward round)',
        ex: 'Obilazak soba obavlja se uvijek istim redoslijedom, od sobe broj jedan do sobe broj petnaest',
      },
      {
        hr: 'zasićenost kisikom',
        en: 'oxygen saturation',
        ex: 'gdje zasićenost kisikom starijeg gospodina naglo pada',
      },
      {
        hr: 'protokol',
        en: 'protocol',
        ex: 'Protokoli se poštuju ne zato što bi netko provjeravao',
      },
      { hr: 'postaja', en: "nurses' station", ex: 'Oko četiri zazvoni telefon na postaji' },
      { hr: 'vitalni znakovi', en: 'vital signs', ex: 'da su vitalni znakovi stabilni' },
      { hr: 'zavoj', en: 'bandage / dressing', ex: 'provjerava zalihe zavoja' },
      {
        hr: 'komplikacija',
        en: 'complication',
        ex: 'da je riječ o komplikaciji koja zahtijeva hitnu intervenciju',
      },
      {
        hr: 'naslage',
        en: 'sediment / build-up',
        ex: 'sloj po sloj, kao naslage na dnu posude koja se nikad do kraja ne ispere',
      },
      { hr: 'budnost', en: 'wakefulness', ex: 'netko mora biti budan dok drugi spavaju' },
    ],
    quiz: [
      {
        q: 'Zašto Petra obilazi sobe uvijek istim redoslijedom?',
        qEn: 'Why does Petra always do her rounds in the same order?',
        opts: [
          'Zato što to nalažu bolnička pravila.',
          'Zato što promjena rutine povećava rizik da se nešto zaboravi.',
          'Zato što pacijenti očekuju stalan raspored.',
          'Zato što se tako štedi najviše vremena.',
        ],
        correct: 1,
      },
      {
        q: 'Što Petra radi kad se oglasi alarm zbog pada zasićenosti kisikom?',
        qEn: 'What does Petra do when the alarm signals falling oxygen saturation?',
        opts: [
          'Zove liječnika i čeka upute.',
          'Budi pacijentovu obitelj.',
          'Sama prilagodi protok kisika i smiruje pacijenta.',
          'Premješta pacijenta na intenzivnu njegu.',
        ],
        correct: 2,
      },
      {
        q: 'Prema tekstu, zašto se u noćnoj smjeni protokoli strogo poštuju?',
        qEn: 'According to the text, why are protocols strictly followed during the night shift?',
        opts: [
          'Zato što se samo na njih osoblje može osloniti kad je malobrojno.',
          'Zato što nadređeni izdaleka nadziru osoblje.',
          'Zato što osiguranje zahtijeva dokumentaciju.',
          'Zato što to traže pacijenti.',
        ],
        correct: 0,
      },
      {
        q: 'Kako Petra opisuje razliku između umora nakon jedne noćne smjene i umora nakupljenog kroz godine?',
        qEn: 'How does Petra describe the difference between fatigue after one night shift and fatigue accumulated over years?',
        opts: [
          'Nema stvarne razlike među njima.',
          'Umor nakon jedne smjene uvijek je gori.',
          'Nakupljeni umor nestane nakon godišnjeg odmora.',
          'Jedna noć izgleda podnošljivo, ali godine noćnih smjena mijenjaju tijelo i navike.',
        ],
        correct: 3,
      },
      {
        q: 'Zašto Petra ne zamjera obrnutom ritmu svog života?',
        qEn: "Why doesn't Petra resent her inverted daily rhythm?",
        opts: [
          'Zato što uskoro planira promijeniti posao.',
          'Zato što su noćne smjene znatno bolje plaćene.',
          'Zato što vjeruje da netko mora čuvati noć kako bi drugi mirno spavali.',
          'Zato što voli biti sama noću.',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c2_8',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '♟️',
    title: 'Jezik kvadrata',
    titleEn: 'The Language of Squares',
    duration: 13,
    focus: 'Heraldika kao pismo • Vizualna gramatika • Kolektivno pamćenje',
    intro:
      'Dva polja, dvije boje, jedan ritam koji traje stoljećima. Esej o šahovnici kao vizualnoj gramatici koja pamti pripadnost i onda kada riječi zašute.',
    paragraphs: [
      {
        hr: 'Rijetko koji uzorak nosi toliko značenja u tako malo poteza kao šahovnica: dva polja, dvije boje, jedan ritam koji se ponavlja u beskonačnost. Bijaše, kažu legende, štit još iz srednjovjekovlja, kad se heraldika služila bojom ondje gdje riječi ne bi dopirale — na bojnom polju, gdje se plemić morao prepoznati s udaljenosti prije nego što bi ga itko upitao za ime.',
        en: 'Few patterns carry as much meaning in so few strokes as the chequy shield: two fields, two colours, one rhythm repeating into infinity. It was, legends say, a shield already in the Middle Ages, when heraldry used colour where words could not reach — on the battlefield, where a nobleman had to be recognised from a distance before anyone could ask his name.',
      },
      {
        hr: 'Crveno i bijelo, u jeziku heraldike, nisu tek boje nego tvrdnje: crveno govori o hrabrosti, bijelo o čistoći namjere, a njihovo izmjenično slaganje, red do reda, tvrdi nešto treće — postojanost koja se ne mijenja bez obzira odakle joj se pristupi. Grb koji je nekoć krasio štitove nekolicine plemićkih obitelji, stoljećima kasnije postade znak čitava naroda, a taj je prijelaz, od pojedinačnoga k zajedničkome, sam po sebi priča o tome kako se simboli demokratiziraju.',
        en: 'Red and white, in the language of heraldry, are not merely colours but assertions: red speaks of courage, white of purity of intent, and their alternation, row upon row, asserts a third thing — a constancy that does not change regardless of the angle from which it is approached. A crest that once adorned the shields of a handful of noble families became, centuries later, the emblem of an entire people, and that transition, from the individual to the shared, is itself a story about how symbols become democratized.',
      },
      {
        hr: 'Šahovnica se, unatoč promjenjivim gospodarima ovih prostora, održala u pečatima, novcu i grbovima stoljećima prije negoli je itko pomislio da bi mogla postati zastava. U tome je njezina osobita snaga: nije nastala kao parola za trenutak, nego kao uzorak koji je nadživio sve prilike u kojima je izmišljen, ravnodušan prema tome tko trenutačno drži pečat. Arhivi to potvrđuju šutke, bez ijednog manifesta: isti crveno-bijeli raspored ponavlja se na kamenim pločama i pergamentima nastalima u razmaku od nekoliko stoljeća, kao da je uzorak čekao, strpljiviji od bilo koje vlasti koja ga je posudila.',
        en: 'The chequy pattern, despite the changing rulers of these lands, persisted in seals, coinage and crests centuries before anyone thought it might become a flag. Therein lies its peculiar strength: it did not arise as a slogan for the moment, but as a pattern that outlived every occasion in which it was devised, indifferent to who currently holds the seal. The archives confirm this silently, without a single manifesto: the same red-and-white arrangement recurs on stone slabs and parchments created centuries apart, as though the pattern were waiting, more patient than any authority that ever borrowed it.',
      },
      {
        hr: 'Izvan grbovnih knjiga, kvadratić crveno-bijele izmjene odavno je pobjegao u svakodnevicu: tkao se u pojasove nošnji dugo prije nego što je itko od tkalja pomišljao na državu, urezivao se u nadgrobne ploče, utiskivao u vez stolnjaka koji je krasio svaki drugi dom na obali. Uzorak je, drugim riječima, živio paralelan život, mnogo skromniji od svog državničkog, ali ništa manje uporan.',
        en: 'Outside the books of heraldry, the little red-and-white square long ago escaped into everyday life: it was woven into the belts of folk costumes long before any weaver thought of the state, carved into gravestones, stitched into the embroidery of tablecloths that adorned every other home on the coast. The pattern, in other words, lived a parallel life, far humbler than its statesmanlike one, but no less persistent.',
      },
      {
        hr: 'Danas isti uzorak krasi dresove nogometaša i turističke suvenire, magnete na hladnjacima i etikete boca, pa se s pravom postavlja pitanje troši li se ponavljanjem njegovo dostojanstvo. Odgovor je, čini se, dvostruk: kvadratić na majici navijača ne umanjuje kvadratić na grobu palog vojnika, jer kontekst, ne uzorak sam, određuje registar u kojem znak progovara — isto slovo, drukčija rečenica.',
        en: "Today the same pattern adorns footballers' jerseys and tourist souvenirs, fridge magnets and bottle labels, so the question rightly arises whether repetition wears down its dignity. The answer, it seems, is twofold: the little square on a fan's shirt does not diminish the little square on a fallen soldier's grave, because context, not the pattern itself, determines the register in which the sign speaks — the same letter, a different sentence.",
      },
      {
        hr: 'Ondje je i najdublja analogija: šahovnica funkcionira kao gramatika, ne kao rječnik. Rječnik nudi značenja; gramatika nudi poredak, pravilo po kojem se značenja slažu. Šahovnica ne kazuje ništa određeno svojim promatračima — ne priča priču, ne navodi datum, ne imenuje junaka — nego uspostavlja obrazac prepoznavanja koji djeluje prije nego što se itko sjeti pitati što uzorak doista znači. Baš zato je otporna na tumačenja koja joj nameću dnevne prilike: gramatika se ne da ucijeniti trenutnim značenjem, jer njezina zadaća nije da nešto tvrdi, nego da omogući da se nešto uopće izgovori.',
        en: 'Herein lies the deepest analogy: the chequy pattern functions as grammar, not as a dictionary. A dictionary offers meanings; grammar offers order, the rule by which meanings are arranged. The pattern tells its observers nothing specific — it recounts no story, states no date, names no hero — but establishes a pattern of recognition that operates before anyone thinks to ask what the pattern actually means. Precisely for that reason it resists interpretations imposed on it by the moment: grammar cannot be held hostage to momentary meaning, because its task is not to assert something, but to make it possible for something to be said at all.',
      },
      {
        hr: 'Iseljenik koji na dalekom kontinentu ugleda šahovnicu na nečijoj majici ili naljepnici automobila ne razmišlja o povijesti heraldike; prepoznaje, prije bilo kakve misli, nešto što mu je blisko, kao što se prepoznaje rukopis roditelja i prije čitanja same poruke. U tom trenu uzorak djeluje brže od jezika: gramatika koja se čita okom, ne umom.',
        en: "An emigrant who, on a distant continent, catches sight of the chequy pattern on someone's shirt or car sticker does not think about the history of heraldry; he recognises, before any thought, something close to him, the way one recognises a parent's handwriting even before reading the message itself. In that instant the pattern acts faster than language: a grammar read by the eye, not the mind.",
      },
      {
        hr: 'Ipak, svaka gramatika trpi zloporabu kad se rabi bez sluha za kontekst: uzorak nabačen ondje gdje bi umjesnija bila tišina djeluje kao rečenica izvikana ondje gdje bi dolikovao šapat. Dostojanstvo šahovnice, poput dostojanstva bilo kojeg starog znaka, ne štiti se zabranom uporabe, nego mjerom — znanjem kada zavrjeđuje svečanost, a kada tek dekorativnu uzgrednost.',
        en: 'Yet every grammar suffers abuse when used without an ear for context: a pattern thrown in where silence would be more fitting acts like a sentence shouted where a whisper would befit. The dignity of the chequy pattern, like the dignity of any old sign, is protected not by banning its use, but by measure — by knowing when it merits solemnity, and when it merits only decorative incidentalness.',
      },
      {
        hr: 'Slijedom svega rečenoga, čini se ispravnijim govoriti o identitetu kao o uzorku negoli o paroli: parole se mijenjaju iz desetljeća u desetljeće, prilagođavaju se trenutku i brzo zastarijevaju, dok uzorak, ostajući gotovo nepromijenjen stoljećima, prenosi pripadnost tiho, bez potrebe da itko povisi glas.',
        en: 'Following all that has been said, it seems more accurate to speak of identity as a pattern rather than a slogan: slogans change from decade to decade, adapt to the moment and quickly become dated, whereas a pattern, remaining almost unchanged for centuries, conveys belonging quietly, without anyone needing to raise their voice.',
      },
      {
        hr: 'Šahovnica, u konačnici, ne dokazuje ništa i nikome ništa ne mora dokazivati: ona jednostavno jest, red do reda, kvadrat do kvadrata, gramatika koja pamti i onda kada svi koji su je jednom izgovorili riječima davno zašute.',
        en: 'The chequy pattern, in the end, proves nothing and owes no one any proof: it simply is, row upon row, square upon square, a grammar that remembers even after all those who once put it into words have long fallen silent.',
      },
    ],
    vocabulary: [
      {
        hr: 'heraldika',
        en: 'heraldry',
        ex: 'Heraldika se služila bojom ondje gdje riječi ne bi dopirale.',
      },
      {
        hr: 'tvrdnja',
        en: 'assertion, claim',
        ex: 'Boje nisu tek boje, nego tvrdnje.',
      },
      {
        hr: 'demokratizirati se',
        en: 'to become democratized',
        ex: 'Tako se simboli demokratiziraju.',
      },
      {
        hr: 'ravnodušan',
        en: 'indifferent',
        ex: 'Uzorak je ravnodušan prema tome tko drži pečat.',
      },
      {
        hr: 'dostojanstvo',
        en: 'dignity',
        ex: 'Troši li se ponavljanjem njegovo dostojanstvo.',
      },
      {
        hr: 'registar',
        en: 'register (stylistic)',
        ex: 'Kontekst određuje registar u kojem znak progovara.',
      },
      {
        hr: 'zloporaba',
        en: 'abuse, misuse',
        ex: 'Svaka gramatika trpi zloporabu.',
      },
      {
        hr: 'zavrjeđivati',
        en: 'to merit, deserve',
        ex: 'Zna kada uzorak zavrjeđuje svečanost.',
      },
      {
        hr: 'parola',
        en: 'slogan',
        ex: 'Identitet je uzorak, a ne parola.',
      },
      {
        hr: 'uzgrednost',
        en: 'incidentalness, casualness',
        ex: 'Ondje je uzorak tek dekorativna uzgrednost.',
      },
    ],
    quiz: [
      {
        q: 'Zašto tekst tvrdi da šahovnica funkcionira kao gramatika, a ne kao rječnik?',
        qEn: 'Why does the text claim the chequy pattern functions as grammar rather than a dictionary?',
        opts: [
          'Jer uspostavlja obrazac prepoznavanja, a ne priopćava određeno značenje',
          'Jer se poučava u školi kao gramatika',
          'Jer sadrži slova umjesto boja',
          'Jer je starija od svakog postojećeg rječnika',
        ],
        correct: 0,
      },
      {
        q: 'Što, prema eseju, čini najveću snagu šahovnice kao simbola?',
        qEn: "According to the essay, what constitutes the chequy pattern's greatest strength as a symbol?",
        opts: [
          'To što se nikad nije mijenjala od srednjeg vijeka',
          'To što je nadživjela sve prilike u kojima je nastala, neovisno o vlasti',
          'To što je jedina boja dopuštena plemstvu',
          'To što je nastala kao politička parola',
        ],
        correct: 1,
      },
      {
        q: 'Kako esej objašnjava da isti uzorak može biti i na dresu i na nadgrobnoj ploči?',
        qEn: 'How does the essay explain that the same pattern can appear both on a jersey and on a gravestone?',
        opts: [
          'Kontekst, a ne uzorak sam, određuje registar u kojem znak progovara',
          'Jer je uzorak posve izgubio svako dostojanstvo',
          'Jer dresovi i nadgrobne ploče imaju identično značenje',
          'Jer se sam uzorak mijenja ovisno o materijalu',
        ],
        correct: 0,
      },
      {
        q: 'Zašto iseljenik, prema tekstu, prepozna šahovnicu prije nego što o njoj uopće promisli?',
        qEn: 'According to the text, why does an emigrant recognise the pattern before even thinking about it?',
        opts: [
          'Jer je prethodno detaljno proučio heraldiku',
          'Jer mu je netko prethodno objasnio značenje',
          'Jer prepoznaje boje prije nego oblik',
          'Jer djeluje poput gramatike koja se čita okom, brže od jezika',
        ],
        correct: 3,
      },
      {
        q: 'Što esej zaključno predlaže kao bolju metaforu za identitet — uzorak ili parolu?',
        qEn: 'What does the essay ultimately propose as the better metaphor for identity — a pattern or a slogan?',
        opts: [
          'Oboje podjednako, bez ikakve razlike',
          'Uzorak, jer tiho prenosi pripadnost i ne zastarijeva poput parole',
          'Parolu, jer je glasnija i jasnija od uzorka',
          'Nijedno od toga, jer identitetu simboli ne trebaju',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_9',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '⏳',
    title: 'Riva protiv sata',
    titleEn: 'The Riva Against the Clock',
    duration: 13,
    focus: 'Fjaka i pomalo • Riva kao otpor ubrzanju • Filozofija vremena',
    intro:
      'Na dalmatinskoj rivi vrijeme se ne mjeri nego proživljava. Esej o pomalu, fjaki i rivi kao tihom otporu ubrzanom svijetu.',
    paragraphs: [
      {
        hr: 'Sat na rivi, ako uopće postoji, obično kasni ili žuri, kao da i on zna da ovdje vrijeme nije obveza nego prijedlog. Dok se u gradovima sjevera vrijeme mjeri produktivnošću po minuti, dalmatinska riva njeguje drugu aritmetiku: onu u kojoj popodne provedeno gledajući more nije izgubljeno vrijeme, nego jedino ispravno potrošeno.',
        en: 'The clock on the riva, if it exists at all, usually runs slow or fast, as though it too knows that here time is not an obligation but a suggestion. While in northern cities time is measured in productivity per minute, the Dalmatian riva cultivates a different arithmetic: one in which an afternoon spent watching the sea is not lost time, but the only time correctly spent.',
      },
      {
        hr: "Pomalo, riječ koju stranac prevede kao 'polako' i time je osiromaši, zapravo je čitav svjetonazor sažet u dva sloga. Ne znači odugovlačiti niti zanemarivati; znači odbiti da tempo određuje netko izvan tebe — poslodavac, satnica, tuđa žurba. Tko izgovori pomalo, ne kaže da neće nego da će, ali onda kad stvar to zaslužuje, a ne kad je netko drugi zapovjedi.",
        en: "Pomalo, a word a foreigner translates as 'slowly' and thereby impoverishes, is in fact an entire worldview compressed into two syllables. It does not mean to procrastinate or to neglect; it means refusing to let the pace be set by someone outside yourself — an employer, a timesheet, someone else's rush. Whoever says pomalo is not saying he won't, but that he will, only when the thing deserves it, not when someone else commands it.",
      },
      {
        hr: 'Mediteran dijeli tu osjetljivost za vrijeme, premda svaka obala ima svoj izgovor za nju: Talijani reknu piano piano, Grci sigà sigà, ali hrvatsko pomalo nosi dodatnu crtu tvrdoglavosti, gotovo prkosa, kao da iza usporavanja stoji odluka, a ne puka navika. Možda je to zato što je ova obala stoljećima morala braniti svoj mir od onih koji su joj htjeli nametnuti tuđi ritam.',
        en: 'The Mediterranean shares this sensitivity to time, though every coast has its own way of saying it: Italians say piano piano, Greeks sigà sigà, but the Croatian pomalo carries an additional trace of stubbornness, almost defiance, as though behind the slowing down stands a decision, not mere habit. Perhaps that is because this coast had, for centuries, to defend its peace from those who wished to impose a foreign rhythm upon it.',
      },
      {
        hr: 'Fjaka, sestra pomala, ne pripada volji nego tijelu: ona dođe sama, obično oko podneva, kad sunce postane pretežak teret za bilo kakav pothvat. Onaj tko je nikad nije osjetio pomisli da je riječ o lijenosti; onaj tko jest, zna da je riječ o obrani — tijelo koje odbija sudjelovati u ritmu koji mu ne odgovara.',
        en: "Fjaka, pomalo's sister, belongs not to the will but to the body: it comes uninvited, usually around noon, when the sun becomes too heavy a burden for any undertaking. Whoever has never felt it assumes it is a matter of laziness; whoever has, knows it is a matter of defence — a body refusing to take part in a rhythm that does not suit it.",
      },
      {
        hr: 'Riva sama, ta uska pruga kamena između kuća i mora, nema službene svrhe, a upravo zato ispunjava toliko njih: ondje se šeće bez cilja, sjedi bez razloga, razgovara bez dnevnog reda. Nitko na rivi ne pita koliko je sati, jer bi pitanje odalo da još uvijek pripada onom drugom, bržem svijetu.',
        en: 'The riva itself, that narrow strip of stone between the houses and the sea, has no official purpose, and precisely for that reason fulfils so many: there one walks without aim, sits without reason, talks without an agenda. No one on the riva asks what time it is, because the question would betray that he still belongs to that other, faster world.',
      },
      {
        hr: 'Riva mijenja lice ovisno o dobu dana, ali nikad žurbu: ujutro njome prolaze ribari noseći mrežu, u podne je prazna zbog fjake, navečer se puni obiteljima koje ne idu nikamo određeno, nego jednostavno šeću, korzo za korzom, kao da sam čin hodanja bez cilja treba obnavljati svaku večer iznova, poput obreda koji nitko nije propisao, a svi ga poštuju.',
        en: "The riva's face changes with the time of day, but never its lack of hurry: in the morning fishermen pass along it carrying nets, at noon it stands empty because of the fjaka, in the evening it fills with families going nowhere in particular, simply strolling, one turn of the promenade after another, as though the very act of walking without aim needed to be renewed every evening anew, like a rite no one prescribed, yet everyone observes.",
      },
      {
        hr: 'Suvremeni čovjek, naoružan aplikacijama koje mjere svaku minutu njegova dana, rivu doživljava kao anomaliju, gotovo kao kvar u sustavu: kako to da netko sjedi sat vremena, ne gledajući u zaslon, ne postižući ništa mjerljivo? A upravo je ta nemjerljivost bit stvari — riva ne proizvodi ništa jer to i nije njezina zadaća.',
        en: 'Modern man, armed with applications that measure every minute of his day, experiences the riva as an anomaly, almost as a glitch in the system: how can someone sit for an hour, not looking at a screen, achieving nothing measurable? And it is precisely that immeasurability that is the point — the riva produces nothing because that is not its task.',
      },
      {
        hr: 'Postoji, u konačnici, etička razlika između vremena koje se posjeduje i vremena koje se unajmljuje. Onaj tko svaki sat prodaje unaprijed, poslodavcu ili zaslonu, živi u vremenu koje mu nikad posve ne pripada; onaj tko sjedne na rivu i ne učini ništa, na sat vremena postaje jedini gospodar vlastita trajanja.',
        en: 'There is, ultimately, an ethical difference between time that is owned and time that is rented out. Whoever sells every hour in advance, to an employer or a screen, lives in time that never fully belongs to him; whoever sits down on the riva and does nothing becomes, for an hour, the sole master of his own duration.',
      },
      {
        hr: 'Stari ribari, generacijama prije nas, sjeđahu na istim kamenim klupama, gledajući isto more, ne žureći se nikamo, i ta se navika, prenesena bez ijedne pouke izgovorene naglas, održala do danas, unatoč svim silama koje su pokušale ubrzati sve, uključujući i njih.',
        en: 'Old fishermen, generations before us, used to sit on the same stone benches, gazing at the same sea, hurrying nowhere, and that habit, passed on without a single lesson spoken aloud, has survived to this day, despite every force that tried to speed up everything, themselves included.',
      },
      {
        hr: 'Turisti, promatrajući mještane na rivi, ponekad povjeruju da gledaju besposlicu vrijednu fotografije, ne shvaćajući da svjedoče najzahtjevnijoj vještini koju je ovaj kraj razvio: sposobnosti da se, usprkos svakom pritisku izvana, ne žuri. Ironija je potpuna kad isti turist, snimivši prizor, požuri natrag u red za trajekt.',
        en: 'Tourists, watching the locals on the riva, sometimes believe they are looking at an idleness worth photographing, not realising they are witnessing the most demanding skill this region has developed: the ability, despite every pressure from outside, not to hurry. The irony is complete when that same tourist, having filmed the scene, hurries back to the ferry queue.',
      },
      {
        hr: 'Riva, dakle, nije nostalgija niti zaostatak, nego tih oblik otpora: podsjetnik da je vrijeme, prije nego što je postalo roba, bilo jednostavno ono što čovjek proživi, a ne ono što od njega netko drugi oduzme. Tko nauči sjediti na rivi ne gledajući na sat, naučio je nešto što se nijednom aplikacijom ne da preuzeti.',
        en: 'The riva, then, is neither nostalgia nor a holdover, but a quiet form of resistance: a reminder that time, before it became a commodity, was simply what a person lives through, not what someone else takes from him. Whoever learns to sit on the riva without looking at a clock has learned something no application can take over.',
      },
    ],
    vocabulary: [
      {
        hr: 'aritmetika',
        en: 'arithmetic (fig. reckoning)',
        ex: 'Riva njeguje drugu aritmetiku vremena.',
      },
      {
        hr: 'osiromašiti',
        en: 'to impoverish',
        ex: 'Stranac riječ prevede i time je osiromaši.',
      },
      {
        hr: 'pothvat',
        en: 'undertaking, endeavour',
        ex: 'Sunce postane pretežak teret za bilo kakav pothvat.',
      },
      {
        hr: 'odati',
        en: 'to betray, give away',
        ex: 'Pitanje bi odalo da još pripada bržem svijetu.',
      },
      {
        hr: 'nemjerljivost',
        en: 'immeasurability',
        ex: 'Upravo je ta nemjerljivost bit stvari.',
      },
      {
        hr: 'unajmiti',
        en: 'to rent, hire out',
        ex: 'Vrijeme koje se unajmljuje poslodavcu.',
      },
      {
        hr: 'besposlica',
        en: 'idleness, loafing',
        ex: 'Povjeruju da gledaju besposlicu vrijednu fotografije.',
      },
      {
        hr: 'zaostatak',
        en: 'a holdover, leftover',
        ex: 'Riva nije zaostatak, nego oblik otpora.',
      },
      {
        hr: 'roba',
        en: 'commodity, goods',
        ex: 'Vrijeme prije nego što je postalo roba.',
      },
      {
        hr: 'odbiti',
        en: 'to refuse',
        ex: 'Pomalo znači odbiti da tempo određuje netko izvan tebe.',
      },
    ],
    quiz: [
      {
        q: 'Što, prema eseju, pomalo zapravo znači?',
        qEn: 'According to the essay, what does pomalo actually mean?',
        opts: [
          'Namjerno kašnjenje na dogovorene sastanke',
          'Odbijanje da tempo određuje netko izvan tebe, ne odugovlačenje',
          'Potpuni nedostatak bilo kakvog plana',
          "Doslovan prijevod riječi 'polako'",
        ],
        correct: 1,
      },
      {
        q: 'Zašto se fjaka, prema tekstu, ne smije poistovjetiti s lijenošću?',
        qEn: 'According to the text, why must fjaka not be equated with laziness?',
        opts: [
          'Jer se javlja isključivo noću',
          'Jer je nastala tek razvojem turizma',
          'Jer je posljedica nedovoljnog sna',
          'Jer je obrana tijela od ritma koji mu ne odgovara',
        ],
        correct: 3,
      },
      {
        q: "Zašto riva, prema eseju, nema 'službenu svrhu'?",
        qEn: "According to the essay, why does the riva have no 'official purpose'?",
        opts: [
          'Jer upravo time omogućuje šetnju, sjedenje i razgovor bez cilja',
          'Jer je premalena za bilo kakvu funkciju',
          'Jer je gradska uprava zabranila trgovinu na njoj',
          'Jer je namijenjena isključivo turistima',
        ],
        correct: 0,
      },
      {
        q: 'U čemu esej vidi ironiju turista koji fotografira mještane na rivi?',
        qEn: 'Where does the essay locate the irony of the tourist photographing locals on the riva?',
        opts: [
          'Mještani se samo pretvaraju da su opušteni',
          'Riva je zapravo puna buke i žurbe',
          'Turist uopće ne razumije hrvatski jezik',
          'Turist potom požuri natrag u red, ne usvojivši ono što je promatrao',
        ],
        correct: 3,
      },
      {
        q: "Koju etičku razliku esej povlači između 'posjedovanog' i 'unajmljenog' vremena?",
        qEn: "What ethical distinction does the essay draw between time 'owned' and time 'rented out'?",
        opts: [
          'Razlike zapravo nema, oba su podjednako vrijedna',
          'Posjedovano vrijeme uopće ne postoji u modernom svijetu',
          'Posjedovano vrijeme čini čovjeka gospodarom vlastita trajanja, unajmljeno ga otuđuje',
          'Unajmljeno vrijeme uvijek je produktivnije od posjedovanog',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c2_10',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🏝️',
    title: 'Otok zimi',
    titleEn: 'The Island in Winter',
    duration: 12,
    focus: 'praznina • zajedništvo • ritam otočne zime',
    intro:
      'An essay on an Adriatic island once the ferries thin out and the tourists leave, and on what community comes to mean when only a few hundred people remain.',
    paragraphs: [
      {
        hr: 'Zadnji rujanski trajekt odveze posljednje turiste, a luka, još jučer krcata glasovima, utone u tišinu koja će potrajati do proljeća. Onima koji ostaju taj prizor nije nov: znaju da otok mijenja disanje, da se ljeto povlači kao plima, ostavljajući prazne terase i zatvorene kapke. Ono što se doima kao kraj sezone za njih je početak jedinog razdoblja u kojem je otok napokon njihov.',
        en: 'The last September ferry carries away the final tourists, and the harbor, packed just yesterday with voices, sinks into a silence that will last until spring. For those who stay, the scene is nothing new: they know the island changes its breathing, that summer withdraws like a tide, leaving empty terraces and shuttered windows behind. What looks like the end of the season is, for them, the beginning of the only period in which the island is finally theirs.',
      },
      {
        hr: 'Trajekt koji je ljeti plovio šest puta dnevno zimi pristaje tek dvaput, a kad zapuše jaka bura, ne pristaje uopće, pa se otok danima nalazi odsječen od kopna poput broda usidrenog u vlastitoj samoći. Ta izoliranost, koju bi stranac nazvao nezgodom, mještani doživljavaju gotovo kao zaštitu: kažu da se otok zimi vraća samome sebi, oslobođen obveze da bude razglednica za svakoga tko prođe.',
        en: 'The ferry that sailed six times a day in summer calls only twice in winter, and when a strong bura blows, it does not call at all, leaving the island cut off from the mainland for days, like a ship anchored in its own solitude. That isolation, which an outsider would call a misfortune, the locals experience almost as protection: they say the island returns to itself in winter, freed from the obligation to be a postcard for whoever passes through.',
      },
      {
        hr: 'Oni koji ostaju nisu samo najstariji; među njima je mladi ribar koji je odbio posao u Rijeci, učiteljica koja vozi djecu trajektom do škole na susjednom otoku, te umirovljeni pomorac koji zimi popravlja tuđe krovove jer ne zna sjediti besposlen. Njih ne drži nostalgija, nego uvjerenje da otok bez stalnih stanovnika prestaje biti otok, a postaje samo kulisa.',
        en: "Those who stay are not only the oldest; among them is a young fisherman who turned down a job in Rijeka, a teacher who ferries children to school on a neighboring island, and a retired sailor who spends winters fixing other people's roofs because he doesn't know how to sit idle. What holds them is not nostalgia but the conviction that an island without permanent residents stops being an island and becomes merely a backdrop.",
      },
      {
        hr: 'Zimi se pomoć organizira bez dogovora: netko će susjedu odvesti u ambulantu, netko drugi podijeliti drva kad ponestane goriva, a treći će svratiti da provjeri je li starica upalila peć. Nitko to ne naziva solidarnošću, jer riječ zvuči preuzvišeno za nešto što je, u zajednici od stotinjak duša, tek način na koji se preživljava zima. Gustoća međusobne ovisnosti čini otočku zajednicu zimi čvršćom nego ljeti.',
        en: 'In winter, help is organized without discussion: someone will drive a neighbor to the clinic, someone else will share firewood when fuel runs low, and a third will stop by to check that an old woman has managed to light her own stove. No one calls it solidarity, because the word sounds too grand for something that, in a community of about a hundred souls, is simply how one gets through winter. This density of mutual dependence makes the island community tighter in winter than in summer.',
      },
      {
        hr: 'Jedina konoba koja zimi ostaje otvorena postaje neslužbeno sjedište otoka: tamo se svako predvečerje skupi šačica muškaraca uz partiju briškule, a žene svrate po kruh i ostanu na kavu. Konobar, koji ljeti jedva stigne poslužiti sve stolove, zimi pamti kako svatko pije kavu. Ta konoba, malena i skromna, obavlja zimi posao koji trg i crkva obavljaju ljeti: drži zajednicu na okupu.',
        en: "The single tavern that stays open in winter becomes the island's unofficial headquarters: every evening a handful of men gather there for a game of briškula, and women stop in for bread and stay for coffee. The waiter, who in summer barely manages to serve every table, remembers in winter how everyone takes their coffee. This small, modest tavern performs in winter the role the square and the church perform in summer: it holds the community together.",
      },
      {
        hr: 'Stariji se sjećaju zime kad struje nestade na deset dana i kad se cijelo selo grijaše oko jedne peći u školi, dijeleći ono malo hrane što bijaše u smočnicama. O toj zimi pričaju bez gorčine, gotovo s ponosom, kao o ispitu koji je otok položio i koji je pokazao da zajedništvo, kad zatreba, nadmašuje svaku nestašicu.',
        en: 'The older residents remember a winter when the power vanished for ten days and the whole village warmed itself around a single stove in the school, sharing what little food remained in their pantries. They speak of that winter without bitterness, almost with pride, as of a test the island passed, one that showed that togetherness, when needed, outweighs any shortage.',
      },
      {
        hr: 'Ljeti je otok proizvod: mjeri se brojem ležajeva, cijenom kave, ocjenama na internetskim stranicama koje mještani rijetko čitaju. Zimi otok prestaje biti proizvod i postaje mjesto življenja, s vlastitim sitnim brigama poput toga hoće li trajekt sutra pristati ili hoće li liječnik doći na vrijeme. Mještani u toj razlici prepoznaju dvije različite verzije istog komada zemlje.',
        en: 'In summer the island is a product: measured in bed counts, coffee prices, online ratings the locals rarely read. In winter the island stops being a product and becomes a place to live, with its own small worries, like whether the ferry will call tomorrow or whether the doctor will arrive on time. In this difference, residents recognize two different versions of the same patch of land.',
      },
      {
        hr: 'Svake godine netko od mladih ode, privučen poslom na kopnu ili u inozemstvu, a otok ostaje siromašniji za jedan glas, jedan par ruku, jednu buduću obitelj. Oni koji ostaju o tome ne govore puno, kao da je tema preteška za konobu i kavu, no u tišini kojom je prate osjeća se koliko su svjesni da zajedništvo koje ih zimi drži na okupu nije zajamčeno zauvijek.',
        en: "Every year someone young leaves, drawn by work on the mainland or abroad, and the island is left poorer by one voice, one pair of hands, one future family. Those who remain don't talk about it much, as if the subject were too heavy for the tavern and its coffee, but in the silence with which they meet it one senses how aware they are that the togetherness holding them together in winter is not guaranteed forever.",
      },
      {
        hr: 'Kad bi netko izvana pitao mještane što otok zimi zapravo jest, odgovor bi vjerojatno bio jednostavan: mjesto gdje se ljudi oslanjaju jedni na druge, ne iz izbora nego iz nužde koja je postala vrijednost sama po sebi. Trajekti koji sve rjeđe pristaju ne prorjeđuju samo promet, nego i iluziju da zajednica može opstati bez truda; zima svake godine iznova podsjeća tko ostaje i zašto.',
        en: 'If an outsider asked the locals what the island in winter actually is, the answer would probably be simple: a place where people rely on one another, not by choice but out of a necessity that has become a value in itself. The ferries that call less and less often thin out not just traffic but the illusion that a community can survive without effort; every year, winter reminds anew who stays and why.',
      },
    ],
    vocabulary: [
      {
        hr: 'trajekt',
        en: 'ferry',
        ex: 'Trajekt koji je ljeti plovio šest puta dnevno zimi pristaje tek dvaput',
      },
      { hr: 'bura', en: 'the bura (north wind)', ex: 'a kad zapuše jaka bura, ne pristaje uopće' },
      {
        hr: 'mještani',
        en: 'locals / residents',
        ex: 'Ta izoliranost, koju bi stranac nazvao nezgodom, mještani doživljavaju gotovo kao zaštitu',
      },
      {
        hr: 'konoba',
        en: 'tavern',
        ex: 'Jedina konoba koja zimi ostaje otvorena postaje neslužbeno sjedište otoka',
      },
      {
        hr: 'briškula',
        en: 'briškula (a Croatian card game)',
        ex: 'tamo se svako predvečerje skupi šačica muškaraca uz partiju briškule',
      },
      {
        hr: 'solidarnost',
        en: 'solidarity',
        ex: 'Nitko to ne naziva solidarnošću, jer riječ zvuči preuzvišeno',
      },
      {
        hr: 'smočnica',
        en: 'pantry / larder',
        ex: 'dijeleći ono malo hrane što bijaše u smočnicama',
      },
      {
        hr: 'nestašica',
        en: 'shortage',
        ex: 'zajedništvo, kad zatreba, nadmašuje svaku nestašicu',
      },
      {
        hr: 'ležaj',
        en: 'bed / berth (tourist accommodation)',
        ex: 'mjeri se brojem ležajeva, cijenom kave',
      },
      {
        hr: 'zajedništvo',
        en: 'togetherness / solidarity',
        ex: 'zajedništvo koje ih zimi drži na okupu nije zajamčeno zauvijek',
      },
    ],
    quiz: [
      {
        q: 'Što se dogodi s otokom kad ode zadnji rujanski trajekt?',
        qEn: 'What happens to the island when the last September ferry departs?',
        opts: [
          'Luka se zatvara zbog popravaka.',
          'Otok utone u tišinu i, na neki način, vrati se svojim stanovnicima.',
          'Sve trgovine odmah se zatvaraju do proljeća.',
          'Broj stanovnika se udvostruči dolaskom radnika.',
        ],
        correct: 1,
      },
      {
        q: 'Kako mještani doživljavaju zimsku izoliranost uzrokovanu burom?',
        qEn: 'How do the locals experience the winter isolation caused by the bura wind?',
        opts: [
          'Kao opasnost koja zahtijeva evakuaciju.',
          'Kao nezgodu na koju se stalno žale.',
          'Gotovo kao zaštitu koja otoku dopušta da se vrati samome sebi.',
          'Kao priliku za podizanje cijena turistima.',
        ],
        correct: 2,
      },
      {
        q: 'Prema tekstu, tko su ljudi koji ostaju na otoku zimi?',
        qEn: 'According to the text, who are the people who stay on the island in winter?',
        opts: [
          'Mješavina mladih i starih: ribar, učiteljica i umirovljeni pomorac.',
          'Samo najstariji stanovnici koji nemaju kamo.',
          'Uglavnom sezonski radnici bez zimskog posla.',
          'Bogati vlasnici zatvorenih vila.',
        ],
        correct: 0,
      },
      {
        q: 'Kakvu ulogu ima jedina zimi otvorena konoba?',
        qEn: 'What role does the one tavern that stays open in winter play?',
        opts: [
          'Služi uglavnom kao turistička atrakcija.',
          'Posluje s gubitkom i uskoro će se zatvoriti.',
          'Rezervirana je samo za ribare.',
          'Djeluje kao neslužbeno središte koje drži zajednicu na okupu.',
        ],
        correct: 3,
      },
      {
        q: 'Čemu, prema zaključku eseja, zapravo služi otočna zima?',
        qEn: "According to the essay's conclusion, what does the island's winter ultimately serve to do?",
        opts: [
          'Privlačenju ulagača u turizam.',
          'Podsjećanju tko ostaje i zašto zajedništvo nije zajamčeno.',
          'Smanjenju troškova trajektne tvrtke.',
          'Građi za lokalne folklorne festivale.',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_11',
    level: 'C2',
    levelColor: '#9d174d',
    levelBg: '#fce7f3',
    icon: '🔧',
    title: 'Popravljati, ne bacati',
    titleEn: 'To Repair, Not to Discard',
    duration: 13,
    focus: 'kultura popravka • planirano zastarijevanje • dostojanstvo održavanja',
    intro:
      'An essay on repair culture versus disposability, seen through a village handyman who has spent forty years pushing back against planned obsolescence.',
    paragraphs: [
      {
        hr: 'U dnu sela, u radionici čiji je krov zarđao kao i ruke njegova vlasnika, Ante Perković već četrdeset godina popravlja ono što bi drugi bez razmišljanja bacili: fen za kosu, miješalicu za beton, dječji bicikl, staru peglu. Na policama čekaju uređaji čiji su vlasnici odustali od popravka, uvjereni da je jeftinije kupiti nov. Ante misli suprotno, a ta razlika u uvjerenju pitanje je o tome kakav svijet gradimo.',
        en: "At the edge of the village, in a workshop whose roof has rusted just like its owner's hands, Ante Perković has spent forty years repairing what others would discard without a second thought: a hairdryer, a concrete mixer, a child's bicycle, an old iron. On the shelves wait devices whose owners gave up on repair, convinced it was cheaper to buy new. Ante believes the opposite, and that difference in conviction is a question of what kind of world we are building.",
      },
      {
        hr: 'Planirano zastarijevanje, pojam skovan još prošlog stoljeća, označava namjerno skraćivanje vijeka trajanja proizvoda kako bi potrošnja ostala neprekidna: baterija koja se ne može zamijeniti, dio koji prestaje biti dostupan, softver koji uređaj usporava dovoljno da kupnja novoga postane nužnost. Riječ je o logici u kojoj je kvar unaprijed ugrađen, a ne slučajna nezgoda.',
        en: "Planned obsolescence, a term coined back in the last century, describes the deliberate shortening of a product's lifespan to keep consumption uninterrupted: a battery that cannot be replaced, a part that stops being available, software that slows a device down just enough to make buying a new one feel necessary. It is a logic in which failure is built in beforehand rather than accidental.",
      },
      {
        hr: 'Naši su djedovi i bake živjeli u svijetu u kojem se svaka stvar popravljala dok god je to imalo smisla, a bacanje je bilo gotovo sramotno, znak rastrošnosti koju si je malo tko mogao priuštiti. Majstor u selu nije bio luksuz nego nužnost, jedina osoba koja je znala vratiti stroj u pogon. Kultura je nestala jer je popravak prestao biti isplativ u usporedbi s novom robom.',
        en: 'Our grandparents lived in a world where everything was repaired for as long as it made any sense, and throwing things away was almost shameful, a sign of wastefulness few could afford. The village craftsman was not a luxury but a necessity, the only person who knew how to bring a machine back to life. That culture disappeared because repair stopped being worthwhile compared with new goods.',
      },
      {
        hr: 'Prošli je tjedan u radionicu ušla mlada žena s pokvarenim aparatom za kavu, uvjerena da će joj Ante reći kako popravak nema smisla. On je aparat rastavio, pronašao napuknut plastični dio vrijedan nekoliko eura, naručio zamjenu i za dva dana joj vratio uređaj koji je radio kao nov. Njezino ga iznenađenje, kaže Ante, rastužuje, jer otkriva koliko je ljudi naviklo misliti da je popravak nemoguć.',
        en: 'Last week a young woman walked into the workshop with a broken coffee machine, convinced Ante would tell her repair made no sense. He took the machine apart, found a cracked plastic part worth only a few euros, ordered a replacement, and returned the appliance to her two days later working like new. Her surprise, Ante says, saddens him, because it reveals how many people have learned to assume repair is impossible.',
      },
      {
        hr: 'Za Antu, popravljanje nije samo tehnička vještina nego način poštovanja prema stvarima i ljudima koji su ih stvorili: svaki uređaj, kaže, nosi u sebi trud inženjera, radnika na traci, čovjeka koji ga je kupio štedeći mjesecima. Baciti nešto prerano znači obezvrijediti taj trud, dok popravak, koliko god skroman, vraća stvarima dostojanstvo koje im rastrošno društvo oduzima.',
        en: 'For Ante, repairing is not merely a technical skill but a way of respecting both the things themselves and the people who made them: every device, he says, carries within it the effort of an engineer, a worker on an assembly line, a person who bought it after months of saving. Throwing something away too soon devalues that effort, while repair, however modest, restores to things a dignity that a wasteful society strips from them.',
      },
      {
        hr: 'Zašto plaćamo više za jamstvo od godinu dana nego za uređaj koji bi, uz malu njegu, trajao deset? Zašto je jeftinije baciti pokvareni fen nego ga odnijeti na popravak, iako popravak zahtijeva samo zamjenu jedne grijaće spirale? Odgovor nije u nedostatku znanja, nego u sustavu cijena i rada koji popravak čini skupljim od nove robe.',
        en: 'Why do we pay more for a one-year warranty than for a device that, with a little care, would last ten? Why is it cheaper to throw away a broken hairdryer than to have it repaired, even though the repair requires only replacing one heating coil? The answer lies not in a lack of knowledge, but in a system of pricing and labor that makes repair more expensive than buying new.',
      },
      {
        hr: 'Svaki bačeni uređaj nije samo gubitak novca nego i sirovina, energije utrošene u proizvodnju, prostora na odlagalištu koje se sporo, ako uopće, razgrađuje. Kultura popravka, stoga, nije nostalgičan hir starih majstora, nego praktičan odgovor na pitanje koje društvo sve rjeđe postavlja: koliko toga uistinu moramo baciti da bismo kupili nešto novo?',
        en: 'Every discarded device is not just a loss of money but of raw materials, of energy spent in production, of landfill space that decomposes slowly, if at all. A culture of repair, then, is not a nostalgic whim of old craftsmen but a practical answer to a question society asks less and less often: how much do we truly need to throw away in order to buy something new?',
      },
      {
        hr: 'Antina radionica odavno je više od mjesta popravka: susjedi navraćaju popiti kavu, popričati o vremenu i pritom mu donijeti pokvareni alat, kao da je popravak samo izgovor za druženje koje si selo inače rijetko priušti. Djeca ga promatraju kako lemi žicu ili brusi zupčanik, i neka od njih, kaže sa smiješkom, već su naučila razlikovati odvijač od ključa bolje nego njihovi roditelji.',
        en: "Ante's workshop has long been more than a place of repair: neighbors stop by for coffee, to talk about the weather, and bring along a broken tool, as if the repair were merely an excuse for company the village otherwise rarely affords itself. Children watch him solder a wire or grind a gear, and some of them, he says with a smile, have already learned to tell a screwdriver from a wrench better than their parents can.",
      },
      {
        hr: 'Posljednjih godina primjećuje obrat: mladi koji dolaze u radionicu ne zato što nemaju novca za novo, nego zato što svjesno biraju popravak kao stav, gotovo politički čin protiv društva koje ih uvjerava da je bacanje normalno. Traže od njega da im pokaže kako zamijeniti bateriju ili ekran, jer žele razumjeti uređaje koje koriste.',
        en: 'In recent years he has also noticed a reversal: young people who come to the workshop not because they lack money for something new, but because they consciously choose repair as a stance, almost a political act against a society that convinces them that throwing things away is normal. They ask him to show them how to replace a battery or a screen, because they want to understand the devices they use.',
      },
      {
        hr: 'Ante zna da njegova radionica jednog dana neće imati nasljednika, jer malo je mladih spremno provesti život uz miris lemila i ulja umjesto uz ekrane. No dok vrata ostaju otvorena, nastavlja raditi ono što smatra osnovnim oblikom poštovanja prema svijetu: ne bacati nešto samo zato što je lakše kupiti novo, nego mu dati priliku da proradi.',
        en: "Ante knows his workshop will one day have no successor, since few young people are willing to spend their lives amid the smell of solder and oil instead of in front of screens. But as long as the doors remain open, he continues doing what he considers the most basic form of respect for the world: not throwing something away just because it's easier to buy new, but giving it a chance to work.",
      },
    ],
    vocabulary: [
      {
        hr: 'popravljati',
        en: 'to repair / fix',
        ex: 'već četrdeset godina popravlja ono što bi drugi bez razmišljanja bacili',
      },
      {
        hr: 'planirano zastarijevanje',
        en: 'planned obsolescence',
        ex: 'Planirano zastarijevanje, pojam skovan još prošlog stoljeća, označava namjerno skraćivanje vijeka trajanja proizvoda',
      },
      {
        hr: 'rastrošnost',
        en: 'wastefulness',
        ex: 'bacanje je bilo gotovo sramotno, znak rastrošnosti koju si je malo tko mogao priuštiti',
      },
      {
        hr: 'isplativ',
        en: 'cost-effective / profitable',
        ex: 'popravak prestao biti isplativ u usporedbi s novom robom',
      },
      {
        hr: 'dostojanstvo',
        en: 'dignity',
        ex: 'popravak, koliko god skroman, vraća stvarima dostojanstvo koje im rastrošno društvo oduzima',
      },
      {
        hr: 'jamstvo',
        en: 'warranty',
        ex: 'Zašto plaćamo više za jamstvo od godinu dana nego za uređaj koji bi, uz malu njegu, trajao deset?',
      },
      {
        hr: 'odlagalište',
        en: 'landfill / waste site',
        ex: 'prostora na odlagalištu koje se sporo, ako uopće, razgrađuje',
      },
      {
        hr: 'sirovina',
        en: 'raw material',
        ex: 'Svaki bačeni uređaj nije samo gubitak novca nego i sirovina, energije utrošene u proizvodnju',
      },
      {
        hr: 'majstor',
        en: 'craftsman / handyman',
        ex: 'Majstor u selu nije bio luksuz nego nužnost, jedina osoba koja je znala vratiti stroj u pogon',
      },
      {
        hr: 'odvijač',
        en: 'screwdriver',
        ex: 'već su naučila razlikovati odvijač od ključa bolje nego njihovi roditelji',
      },
    ],
    quiz: [
      {
        q: 'Zašto Ante Perković misli suprotno od ljudi koji radije kupuju novo?',
        qEn: 'Why does Ante Perković think differently from people who prefer to buy new rather than repair?',
        opts: [
          'Vjeruje da je popravljanje pitanje toga kakav svijet gradimo.',
          'Ne može si priuštiti prodaju novih uređaja.',
          'Ima osobnu zamjerku prema proizvođačima.',
          'Zakon ga je obvezao otvoriti radionicu.',
        ],
        correct: 0,
      },
      {
        q: 'Što, prema tekstu, planirano zastarijevanje zapravo znači?',
        qEn: 'According to the text, what does planned obsolescence actually mean?',
        opts: [
          'Kvarove nastale slučajnim tvorničkim greškama.',
          'Namjerno skraćivanje vijeka trajanja proizvoda radi neprekidne potrošnje.',
          'Marketinški pojam bez stvarnog učinka.',
          'Zakon koji nalaže godišnje ažuriranje softvera.',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je mlada žena bila iznenađena kad je Ante popravio njezin aparat za kavu?',
        qEn: 'Why was the young woman surprised when Ante repaired her coffee machine?',
        opts: [
          'Očekivala je da će popravak trajati tjednima.',
          'Mislila je da je popravak preskup.',
          'Bila je uvjerena da popravak nema smisla i prije nego što je pokušala.',
          'Nije znala da Antina radionica još postoji.',
        ],
        correct: 2,
      },
      {
        q: 'Zašto, prema Anti, bacanje uređaja prerano obezvrjeđuje uloženi trud?',
        qEn: 'According to Ante, why does discarding a device too soon devalue the effort invested in it?',
        opts: [
          'Zato što se time krše uvjeti jamstva.',
          'Zato što poskupljuje sirovine.',
          'Zato što šteti ugledu proizvođača.',
          'Zato što zanemaruje trud inženjera i radnika koji su ga stvorili.',
        ],
        correct: 3,
      },
      {
        q: 'Zašto mladi danas svjesno biraju popravak umjesto kupnje novog uređaja, prema tekstu?',
        qEn: 'Why, according to the text, do young people today consciously choose repair over buying new?',
        opts: [
          'Zato što servisi nude bolja jamstva od trgovina.',
          'Zato što si ne mogu priuštiti nove uređaje.',
          'Zato što popravak vide kao stav protiv potrošačke kulture i žele razumjeti što koriste.',
          'Zato što državne subvencije čine popravak obveznim.',
        ],
        correct: 2,
      },
    ],
  },
];
