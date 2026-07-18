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
        opts: ['Svaki petak', 'Svake subote', 'Svake nedjelje', 'Svaki dan'],
        correct: 1,
      },
      {
        q: 'Koliko košta kilogram jabuka?',
        qEn: 'How much does a kilogram of apples cost?',
        opts: ['Jedan euro', 'Pet eura', 'Dva eura', 'Deset eura'],
        correct: 2,
      },
      {
        q: 'Zašto Ana voli tržnicu?',
        qEn: 'Why does Ana love the market?',
        opts: [
          'Jer je blizu kuće',
          'Jer je besplatno',
          'Jer je sve svježe i nije skupo',
          'Jer je prodavač simpatičan',
        ],
        correct: 2,
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
        opts: ['Ona je doktorica', 'Ona je učiteljica', 'Ona je vozačica', 'Ona je kuharica'],
        correct: 1,
      },
      {
        q: 'Koliko godina ima Petra?',
        qEn: 'How old is Petra?',
        opts: ['Deset godina', 'Petnaest godina', 'Dvadeset godina', 'Dvadeset pet godina'],
        correct: 2,
      },
      {
        q: 'Kako se zove Markov pas?',
        qEn: "What is Marko's dog called?",
        opts: ['Luka', 'Zvonko', 'Vesna', 'Rex'],
        correct: 3,
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
        opts: ['U šest sati', 'U sedam sati', 'U osam sati', 'U devet sati'],
        correct: 1,
      },
      {
        q: 'Što Ivan jede za doručak?',
        qEn: 'What does Ivan eat for breakfast?',
        opts: ['Samo kavu', 'Joghurt i voće', 'Kruh s maslacem i džemom', 'Tost sa sirom'],
        correct: 2,
      },
      {
        q: 'Koliko minuta hoda Ivan do autobusne postaje?',
        qEn: 'How many minutes does Ivan walk to the bus stop?',
        opts: ['Jednu minutu', 'Pet minuta', 'Tri minute', 'Deset minuta'],
        correct: 2,
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
        opts: ['Jedan sat', 'Oko dva i pol sata', 'Četiri sata', 'Šest sati'],
        correct: 1,
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
        opts: ['Pečenu ribu', 'Prstace na buzaru', 'Pizzu', 'Gulaš'],
        correct: 1,
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
        opts: ['Jednu tabletu', 'Dvije tablete', 'Tri tablete', 'Četiri tablete'],
        correct: 2,
      },
      {
        q: 'Za koliko dana se Marija osjećala bolje?',
        qEn: 'After how many days did Marija feel better?',
        opts: ['Jedan dan', 'Dva dana', 'Četiri dana', 'Tjedan dana'],
        correct: 2,
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
        opts: ['Iz Zagreba', 'Iz Splita', 'Iz Rijeke', 'Iz Osijeka'],
        correct: 2,
      },
      {
        q: 'Kada je skupština stanara?',
        qEn: "When is the tenants' meeting?",
        opts: [
          'U ponedjeljak navečer',
          'U srijedu ujutro',
          'U petak u sedam navečer',
          'U subotu poslijepodne',
        ],
        correct: 2,
      },
      {
        q: 'Što su susjedi radili nakon skupštine?',
        qEn: 'What did the neighbours do after the meeting?',
        opts: [
          'Otišli su kući',
          'Zajedno su popili kavu',
          'Gledali su televiziju',
          'Šetali su po gradu',
        ],
        correct: 1,
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
        opts: ['Iz Rijeke', 'Iz Splita', 'Iz Varaždina', 'Iz Osijeka'],
        correct: 2,
      },
      {
        q: 'Tko mu je pomogao prenijeti namještaj?',
        qEn: 'Who helped him move the furniture?',
        opts: ['Brat', 'Kolega Tomislav', 'Susjed', 'Otac'],
        correct: 1,
      },
      {
        q: 'Kako se pripovjedač osjeća prema Zagrebu četiri godine kasnije?',
        qEn: 'How does the narrator feel about Zagreb four years later?',
        opts: [
          'Želi se preseliti natrag',
          'Ne može zamisliti da živi negdje drugdje',
          'Smatra grad preskupim',
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
        opts: ['Iz Splita', 'Iz Varaždina', 'Iz Karlovca', 'Iz Rijeke'],
        correct: 2,
      },
      {
        q: 'Zašto se na Badnjak jede riba?',
        qEn: 'Why is fish eaten on Christmas Eve?',
        opts: [
          'Jer je najjeftinija',
          'Jer djeca vole ribu',
          'Jer je Badnjak dan posta',
          'Jer nema mesa u trgovini',
        ],
        correct: 2,
      },
      {
        q: 'Što baka radi dok djeca otvaraju poklone?',
        qEn: 'What does grandma do while the children open presents?',
        opts: ['Kuha doručak', 'Sjedi i plače od sreće', 'Ide spavati', 'Razgovara telefonom'],
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
        opts: ['Novinarka', 'Odvjetnica', 'Marketinška koordinatorica', 'Učiteljica'],
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
          'Otišla je slaviti s prijatelicama',
          'Nazvala je mamu',
          'Odgovorila je na e-mail',
          'Plakala je',
        ],
        correct: 1,
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
        opts: ['U Splitu', 'Na plaži', 'U centru Zagreba', 'Blizu tržnice'],
        correct: 2,
      },
      {
        q: 'Što naručuje Maja?',
        qEn: 'What does Maja order?',
        opts: ['Kavu i kroasan', 'Limunadu i kroasan', 'Samo kavu', 'Čaj i kolač'],
        correct: 1,
      },
      {
        q: 'Koliko košta kava?',
        qEn: 'How much does the coffee cost?',
        opts: ['Dva eura', 'Jedan euro i dvadeset centi', 'Jedan euro i pedeset centi', 'Tri eura'],
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
        opts: ['Jer voli autobuse', 'Jer nema auto', 'Jer je jeftinije', 'Jer je stanica blizu'],
        correct: 1,
      },
      {
        q: 'U koliko sati ide sljedeći autobus?',
        qEn: 'What time does the next bus go?',
        opts: ['U jedanaest i trideset', 'U dvanaest i trideset', 'U trinaest', 'U deset'],
        correct: 1,
      },
      {
        q: 'Koliko Ante plati za kartu?',
        qEn: 'How much does Ante pay for the ticket?',
        opts: ['Petnaest eura', 'Deset eura', 'Trinaest eura', 'Dvanaest eura'],
        correct: 2,
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
        opts: ['U Splitu', 'U Dubrovniku', 'U Zadru', 'U Šibeniku'],
        correct: 2,
      },
      {
        q: 'Što radi Ivana na plaži?',
        qEn: 'What does Ivana do at the beach?',
        opts: ['Pliva u moru', 'Leži i čita knjigu', 'Jede burek', 'Spava'],
        correct: 1,
      },
      {
        q: 'Kada Ana i Ivana odlaze s plaže?',
        qEn: 'When do Ana and Ivana leave the beach?',
        opts: ['U četiri sata', 'U pet sati', 'U šest sati navečer', 'U sedam sati navečer'],
        correct: 2,
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
          'Jer su bili gladni',
          'Jer je bio Petrin rođendan',
          'Jer je bio Markov rođendan',
          'Jer su slavili posao',
        ],
        correct: 1,
      },
      {
        q: 'Što je Petra jela za glavno jelo?',
        qEn: 'What did Petra eat for the main course?',
        opts: ['Brancina na žaru', 'Prstace na buzaru', 'Fritule', 'Pastu'],
        correct: 1,
      },
      {
        q: 'Što je Petra rekla o fritulama?',
        qEn: 'What did Petra say about the fritule?',
        opts: [
          'Da su bile preskupe',
          'Da su bile premale',
          'Da su bile najbolji desert koji je ikada jela',
          'Da su bile premasne',
        ],
        correct: 2,
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
        opts: ['Dinamo i Rijeka', 'Dinamo i Hajduk', 'Hajduk i Osijek', 'Dinamo i Šibenik'],
        correct: 1,
      },
      {
        q: 'Koji je bio rezultat na poluvremenu?',
        qEn: 'What was the score at half time?',
        opts: ['Dva nula za Dinamo', 'Jedan jedan', 'Jedan nula za Dinamo', 'Nula nula'],
        correct: 2,
      },
      {
        q: 'Kada je Dinamo zabio pobjednički gol?',
        qEn: 'When did Dinamo score the winning goal?',
        opts: [
          'U dvadeset i petoj minuti',
          'Na poluvremenu',
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
          'Na plaži u Splitu',
          'Na rivi u Šibeniku',
          'U kafiću u Zadru',
          'Na stadionu u Zagrebu',
        ],
        correct: 1,
      },
      {
        q: 'Što je klapa?',
        qEn: 'What is a klapa?',
        opts: [
          'Vrsta dalmatinske hrane',
          'Tradicionalni ples',
          'Tradicijski oblik a cappella pjevanja',
          'Glazbeni instrument',
        ],
        correct: 2,
      },
      {
        q: 'Kada je UNESCO proglasio klapu kulturnom baštinom?',
        qEn: 'When did UNESCO declare klapa cultural heritage?',
        opts: ['2000. godine', '2008. godine', '2012. godine', '2020. godine'],
        correct: 2,
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
        opts: ['Vrsta kruha', 'Metalni poklopac za kuhanje', 'Dalmatinski ples', 'Vrsta sira'],
        correct: 1,
      },
      {
        q: 'Koliko dugo se priprema jelo pod pekon?',
        qEn: 'How long does a peka dish take to prepare?',
        opts: ['Pola sata', 'Jedan sat', 'Dva do tri sata', 'Pet sati'],
        correct: 2,
      },
      {
        q: 'Što obitelj radi dok jelo dozrijeva ispod žara?',
        qEn: 'What does the family do while the dish matures under the embers?',
        opts: ['Spava', 'Ide u crkvu', 'Sjedi vani, razgovara i pije vino', 'Ide na plažu'],
        correct: 2,
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
        opts: ['Pola kilometra', 'Jedan kilometar', 'Gotovo dva kilometra', 'Tri kilometra'],
        correct: 2,
      },
      {
        q: 'Što znači natpis na tvrđavi Lovrijenac?',
        qEn: 'What does the inscription on fortress Lovrijenac mean?',
        opts: [
          'Dobrodošli u Dubrovnik',
          'Sloboda se ne prodaje ni za sve zlato na svijetu',
          'Bog i Hrvati',
          'Mir i ljubav',
        ],
        correct: 1,
      },
      {
        q: 'Koliko dugo je Dubrovnik bio slobodna republika?',
        qEn: 'How long was Dubrovnik a free republic?',
        opts: ['Oko sto godina', 'Od 1358. do 1808.', 'Od 1200. do 1500.', 'Samo pedeset godina'],
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
          'Jer je uvijek mokro',
          'Jer nema minerala',
        ],
        correct: 1,
      },
      {
        q: 'Kada se bere bijeli tartuf?',
        qEn: 'When is the white truffle harvested?',
        opts: ['U proljeće', 'Ljeti', 'U jesen', 'Zimi'],
        correct: 2,
      },
      {
        q: 'Kako tartufari pronalaze tartufe?',
        qEn: 'How do tartufari find truffles?',
        opts: [
          'Uz pomoć posebno obučenih pasa',
          'Metal detektorom',
          'Kopanjem na slijepo',
          'Uz pomoć satelita',
        ],
        correct: 0,
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
        opts: ['1893. u Splitu', '1893. u Zagrebu', '1900. u Dubrovniku', '1881. u Osijeku'],
        correct: 1,
      },
      {
        q: 'Što je Krleža potpisao 1967. godine?',
        qEn: 'What did Krleža sign in 1967?',
        opts: [
          'Ustav Jugoslavije',
          'Deklaraciju o nazivu i položaju hrvatskog književnog jezika',
          'Sporazum o miru',
          'Statut Dinama',
        ],
        correct: 1,
      },
      {
        q: 'Čemu svjedoče Krležina djela koja se i danas čitaju i igraju?',
        qEn: "What do Krleža's works being read and performed today testify to?",
        opts: [
          'Nedostatku novih pisaca',
          'Njihovoj trajnoj aktualnosti',
          'Lošem ukusu publike',
          'Državnoj cenzuri',
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
        opts: ['50 dana', '87 dana', '120 dana', '200 dana'],
        correct: 1,
      },
      {
        q: 'Što je simbol otpora iz Vukovara?',
        qEn: 'What is the symbol of resistance from Vukovar?',
        opts: ['Stara crkva', 'Vodotoranj', 'Gradska vijećnica', 'Tvrđava'],
        correct: 1,
      },
      {
        q: 'Što se svake godine događa 18. studenog u Vukovaru?',
        qEn: 'What happens every year on 18 November in Vukovar?',
        opts: [
          'Sportski maraton',
          'Glazbeni festival',
          'Šutljivi mimohod tisuća hodočasnika',
          'Vojska parade',
        ],
        correct: 2,
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
        opts: ['U siječnju 2019.', 'U prosincu 2020.', 'U ožujku 2020.', 'U lipnju 2021.'],
        correct: 2,
      },
      {
        q: 'Čime se Muzej prekinutih veza posebno ističe?',
        qEn: 'What is the Museum of Broken Relationships particularly noted for?',
        opts: [
          'Svojom veličinom',
          'Međunarodnom slavom',
          'Izložbom o ratu',
          'Interaktivnim eksponatima',
        ],
        correct: 1,
      },
      {
        q: 'Što mnogi mladi Zagrepčani rade zbog visokih cijena stanova u centru?',
        qEn: 'What do many young Zagrebians do because of high flat prices in the centre?',
        opts: [
          'Kupuju stanove na kredit',
          'Ostaju s roditeljima',
          'Sele se u prigradska naselja ili odlaze u inozemstvo',
          'Renoviraju stare zgrade',
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
          'Oko milijun',
          'Između tri i četiri milijuna',
          'Oko pet milijuna',
          'Manje od pola milijuna',
        ],
        correct: 1,
      },
      {
        q: 'Kakvu su ulogu imali Hrvati iz dijaspore 1991. i 1992. godine?',
        qEn: 'What role did Croatians from the diaspora play in 1991 and 1992?',
        opts: [
          'Slali su humanitarnu pomoć',
          'Lobiranje za međunarodno priznavanje neovisnosti',
          'Osnivali su nove političke stranke',
          'Vraćali su se u Hrvatsku masovno',
        ],
        correct: 1,
      },
      {
        q: 'Što hrvatska vlada čini kako bi privukla povratnike?',
        qEn: 'What does the Croatian government do to attract returnees?',
        opts: [
          'Gradi nove stanove',
          'Nudi posebne porezne olakšice',
          'Plaća putne troškove',
          'Daje besplatne tečajeve',
        ],
        correct: 1,
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
          'Pismo koje je nastalo u 15. stoljeću',
          'Tursko pismo adaptirano za Slavene',
          'Najstariji europski alfabet uopće',
        ],
        correct: 0,
      },
      {
        q: 'Zašto su ilirski preporoditelji uveli štokavsku osnovicu u standard?',
        qEn: 'Why did the Illyrian Revival figures introduce the Shtokavian base into the standard?',
        opts: [
          'Jer je bio najbogatiji dijalekt',
          'Kako bi standard mogao parirati mađarskome i njemačkome',
          'Jer je to zahtijevao austrijski car',
          'Kako bi ujedinili sve slavenske narode',
        ],
        correct: 1,
      },
      {
        q: 'Kakav je, po tekstu, utjecaj digitalne komunikacije na standardni jezik?',
        qEn: 'What effect, according to the text, does digital communication have on the standard language?',
        opts: [
          'Ugrožava ga i smanjuje njegovu upotrebu',
          'Nema vidljivog utjecaja',
          'Obogaćuje ga uvodeći jezičnu raznolikost',
          'Potiče povratak glagoljici',
        ],
        correct: 2,
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
          'Uvođenje mesa kao glavnog jela',
          'Upotreba maslinovog ulja i vina kao temeljnih kulinarskih medija',
          'Tradicija peka i sporoga kuhanja',
          'Donošenje egzotičnih ribljih vrsta',
        ],
        correct: 1,
      },
      {
        q: 'Što peko simbolizira u dalmatinskom pristupu kuhanju?',
        qEn: 'What does the peka symbolise in the Dalmatian approach to cooking?',
        opts: [
          'Brzo i efikasno kuhanje',
          'Talijansku kulinarsku tradiciju',
          'Sporo kuhanje koje zahtijeva strpljenje',
          'Modernu tehniku roštiljanja',
        ],
        correct: 2,
      },
      {
        q: 'Što znači "kuhinja minimalne intervencije" kako je opisana u tekstu?',
        qEn: 'What does "cuisine of minimal intervention" mean as described in the text?',
        opts: [
          'Kuhinja koja koristi malo posuđa i opreme',
          'Filozofija da sirovina treba biti naglašena, a ne prikrivena',
          'Japanski stil kuhanja adaptiran za Mediteran',
          'Kuhinja bez soli i mirodija',
        ],
        correct: 1,
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
          'Kratke, jasne rečenice i jednostavne priče',
          'Duge, digresivne rečenice s nerazrješenim protuslovljima',
          'Klasičan narativni format 19. stoljeća',
          'Humor i ironija kao dominantna sredstva',
        ],
        correct: 1,
      },
      {
        q: 'Što tekst govori o Krleži i jugoslavenskim vlastima?',
        qEn: 'What does the text say about Krleža and the Yugoslav authorities?',
        opts: [
          'Otvoreno se suprotstavljao vlastima i bio progonjen',
          'Bio je potpuno odan režimu',
          'Bio je omiljen, ali previše složen za svaku ideološku šablonu',
          'Živio je u emigraciji i pisao o domovini',
        ],
        correct: 2,
      },
      {
        q: 'Koji pisac je prema tekstu nastao pod Krležinim utjecajem?',
        qEn: "Which writer, according to the text, developed under Krleža's influence?",
        opts: ['Ivan Gundulić', 'Marko Marulić', 'Slobodan Novak', 'August Šenoa'],
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
          'Jer je najpliće more na Mediteranu',
          'Jer je poluotvoreno more s ograničenom izmjenom vode',
          'Jer ne prima slatku vodu iz rijeka',
          'Jer se ribolov odvija isključivo u sjevernom dijelu',
        ],
        correct: 1,
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
          'Kulturna promjena u odnosu prema moru',
          'Isključivo tehnički i regulatorni pristup',
          'Uključivanje ribarskih zajednica u odlučivanje',
          'Suodgovorna logika upravljanja',
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
          'Povećanje broja obveznih predmeta',
          'Centralizacija upravljanja školama',
          'Uvođenje projektne nastave',
          'Ukidanje autonomije ravnatelja',
        ],
        correct: 2,
      },
      {
        q: 'Što roditelji najčešće ističu u javnoj raspravi?',
        qEn: 'What do parents most frequently raise in the public consultation?',
        opts: [
          'Potrebu za boljim plaćama nastavnika',
          'Zabrinutost zbog preopterećenosti djece',
          'Podršku smanjenju sati matematike',
          'Zahtjev za smanjenom autonomijom ravnatelja',
        ],
        correct: 1,
      },
      {
        q: 'Što stručnjaci ističu kao nužan uvjet za uspjeh reforme?',
        qEn: 'What do experts highlight as a necessary condition for the success of the reform?',
        opts: [
          'Brzo provođenje bez javne rasprave',
          'Sustavno ulaganje u obrazovanje',
          'Smanjenje broja nastavnika',
          'Ukidanje javnog obrazovanja',
        ],
        correct: 1,
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
        opts: ['Trideset dana', 'Šest mjeseci', 'Dvije godine', 'Pet godina'],
        correct: 2,
      },
      {
        q: 'Što je Ivan zatražio u formalnoj reklamaciji?',
        qEn: 'What did Ivan request in his formal complaint?',
        opts: [
          'Isključivo povrat novca',
          'Popravak, zamjenu ili povrat novca',
          'Besplatno produljenje jamstva',
          'Novi model uz nadoplatu',
        ],
        correct: 1,
      },
      {
        q: 'Čemu je Ivanovo iskustvo potaknulo druge?',
        qEn: "What did Ivan's experience motivate?",
        opts: [
          'Da izbjegavaju kupnju elektronike',
          'Da uvijek plaćaju gotovinom',
          'Da istraže svoja potrošačka prava',
          'Da kupuju isključivo online',
        ],
        correct: 2,
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
          'Da je to stvaran i ozbiljan problem',
          'Da je preuveličan i da EU podsjeća na regulatorne agencije',
          'Da EU nema nikakve demokratske mehanizme',
          'Da Europski parlament treba biti ukinut',
        ],
        correct: 1,
      },
      {
        q: 'Što je, prema tekstu, paradoksalno potaknulo demokratska pitanja u Hrvatskoj?',
        qEn: 'What, according to the text, paradoxically stimulated democratic questions in Croatia?',
        opts: [
          'Negativno iskustvo s EU fondovima',
          'Prilagodba normama EU-a',
          'Jačanje nacionalnog parlamenta',
          'Istraživanja akademskog sektora',
        ],
        correct: 1,
      },
      {
        q: 'Koje otvoreno pitanje tekst ističe na kraju?',
        qEn: 'Which open question does the text highlight at the end?',
        opts: [
          'Može li EU preživjeti bez Lisabonskog ugovora?',
          'Može li EU razviti participativnu demokraciju izvan formalnih glasačkih mehanizama?',
          'Treba li Hrvatska napustiti EU?',
          'Je li Europska komisija transparentnija od Vijeća?',
        ],
        correct: 1,
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
          'Kao stabilan i jednoznačan izvor ponosa',
          'Kao istovremeni čvrst oslonac i teška obveza',
          'Kao beznačajne za razumijevanje kulture',
          'Kao prevladane kategorije u globalnom dobu',
        ],
        correct: 1,
      },
      {
        q: 'Što, prema tekstu, znači kulturna kompetencija?',
        qEn: 'According to the text, what does cultural competence mean?',
        opts: [
          'Poznavanje fiksiranih kulturnih sadržaja',
          'Sposobnost navigiranja stalno promjenjivim kulturnim prostorom',
          'Vladanje svim dijalektima jednog jezika',
          'Prihvaćanje dominantnih kulturnih normi',
        ],
        correct: 1,
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
          'Zabranu rada na daljinu',
          'Poseban boravišni status za digitalne nomade',
          'Porez na strane radnike',
          'Besplatan internet na obali',
        ],
        correct: 1,
      },
      {
        q: 'Koji je glavni uvjet za vizu digitalnog nomada?',
        qEn: 'What is the main condition for the digital nomad visa?',
        opts: [
          'Poznavanje hrvatskog jezika',
          'Kupnja nekretnine',
          'Dokaz o stalnom prihodu izvan Hrvatske',
          'Boravak duži od pet godina',
        ],
        correct: 2,
      },
      {
        q: 'Na što upozoravaju kritičari?',
        qEn: 'What do critics warn about?',
        opts: [
          'Na pad kvalitete interneta',
          'Na rast cijena najma i istiskivanje domaćih',
          'Na manjak turista ljeti',
          'Na zatvaranje kavana',
        ],
        correct: 1,
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
        opts: ['Ulazak u Europsku uniju', 'Uvođenje eura', 'Gospodarska kriza', 'Promjena ustava'],
        correct: 0,
      },
      {
        q: 'Zašto struktura iseljavanja posebno zabrinjava demografe?',
        qEn: 'Why does the structure of emigration particularly worry demographers?',
        opts: [
          'Jer odlaze samo umirovljenici',
          'Jer odlaze mladi i obrazovani u najproduktivnijoj dobi',
          'Jer se iseljavaju cijela sela',
          'Jer se nitko ne vraća',
        ],
        correct: 1,
      },
      {
        q: 'Što tekst navodi kao uvjet uspjeha bilo koje mjere?',
        qEn: 'What does the text cite as the condition for any measure to succeed?',
        opts: [
          'Povećanje plaća u javnom sektoru',
          'Zatvaranje granica',
          'Obnovu povjerenja između građana i države',
          'Veće subvencije poslodavcima',
        ],
        correct: 2,
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
          'Jezik je samo sredstvo sporazumijevanja',
          'Jezik je zavičaj koji nosimo u sebi',
          'Jezik nema veze s identitetom',
          'Zavičaj je isključivo mjesto na karti',
        ],
        correct: 1,
      },
      {
        q: 'Što se, prema tekstu, događa s jezikom kroz generacije iseljenika?',
        qEn: 'What happens to the language across emigrant generations?',
        opts: [
          'Jača iz generacije u generaciju',
          'Postupno se osipa i može posve nestati',
          'Ostaje potpuno nepromijenjen',
          'Odmah ga zamjenjuje drugi jezik',
        ],
        correct: 1,
      },
      {
        q: 'Po čemu se učenje jezika predaka razlikuje od učenja stranog jezika?',
        qEn: 'How does learning an ancestral language differ from learning a foreign one?',
        opts: [
          'Lakše je jer nema gramatike',
          'Riječ je o prisjećanju, a ne o osvajanju nepoznatoga',
          'Ne zahtijeva nikakav trud',
          'Moguće je samo u djetinjstvu',
        ],
        correct: 1,
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
          'Pretjeranu sporost',
          'Slavljenje brzine kao vrline same po sebi',
          'Manjak tehnologije',
          'Previše čitanja knjiga',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor definira sporost?',
        qEn: 'How does the author define slowness?',
        opts: [
          'Kao lijenost',
          'Kao svjesno usporavanje',
          'Kao čisti gubitak vremena',
          'Kao manu karaktera',
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
        opts: ['U centru grada', 'Na uglu ulice', 'Pokraj škole', 'Na tržnici'],
        correct: 1,
      },
      {
        q: 'Što Marko kupuje osim kruha i peciva?',
        qEn: 'What does Marko buy besides bread and rolls?',
        opts: ['Kavu', 'Marmeladu', 'Burek sa sirom', 'Mlijeko'],
        correct: 2,
      },
      {
        q: 'Što kaže mama o doručku?',
        qEn: 'What does mum say about breakfast?',
        opts: [
          'Doručak je skup',
          'Doručak je najvažniji obrok u danu',
          'Doručak nije važan',
          'Doručak je uvijek topao',
        ],
        correct: 1,
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
        opts: ['On je učitelj', 'On je vozač autobusa', 'On je kuhar', 'On je prodavač'],
        correct: 1,
      },
      {
        q: 'Što Petar voli?',
        qEn: 'What does Petar love?',
        opts: ['Kuhanje', 'Čitanje', 'Nogomet', 'Glazbu'],
        correct: 2,
      },
      {
        q: 'Gdje baka čita novine?',
        qEn: 'Where does grandma read the newspaper?',
        opts: ['U parku', 'U kuhinji', 'U školi', 'Na balkonu'],
        correct: 3,
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
        opts: ['Pada kiša', 'Lijepo je i sunčano', 'Hladno je', 'Pada snijeg'],
        correct: 1,
      },
      {
        q: 'Što je u sredini parka?',
        qEn: 'What is in the middle of the park?',
        opts: ['Igralište', 'Kafić', 'Malo jezero', 'Pekarnica'],
        correct: 2,
      },
      {
        q: 'Što radi Rex na kraju priče?',
        qEn: 'What does Rex do at the end of the story?',
        opts: ['Jede sladoled', 'Spava na travi', 'Skače u jezero', 'Trči kući'],
        correct: 2,
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
        opts: ['U šest sati', 'U sedam sati', 'U osam sati', 'U sedam i trideset'],
        correct: 1,
      },
      {
        q: 'Koji autobus Petar čeka?',
        qEn: 'Which bus does Petar wait for?',
        opts: ['Broj dva', 'Broj deset', 'Broj pet', 'Broj petnaest'],
        correct: 2,
      },
      {
        q: 'Zašto Petar i Ana trče do škole?',
        qEn: 'Why do Petar and Ana run to school?',
        opts: [
          'Jer vole trčati',
          'Jer autobus kasni i škola počinje u osam',
          'Jer pada kiša',
          'Jer je škola daleko',
        ],
        correct: 1,
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
        opts: ['Šezdeset', 'Sedamdeset', 'Osamdeset', 'Pedeset'],
        correct: 1,
      },
      {
        q: 'Koje cvijeće baka najviše voli?',
        qEn: 'Which flowers does grandma love the most?',
        opts: ['Tulipane', 'Ruže', 'Suncokrete', 'Ljiljane'],
        correct: 1,
      },
      {
        q: 'Što djeca daju baki?',
        qEn: 'What do the children give grandma?',
        opts: ['Tortu', 'Balone', 'Album s fotografijama', 'Novu haljinu'],
        correct: 2,
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
        opts: ['Dvadeset pet', 'Trideset', 'Trideset pet', 'Četrdeset'],
        correct: 2,
      },
      {
        q: 'Što Petar vidi kad roni?',
        qEn: 'What does Petar see when he dives?',
        opts: ['Plavu ribu', 'Dvorac', 'Lubenicu', 'Suncobran'],
        correct: 0,
      },
      {
        q: 'Kakvo je nebo navečer?',
        qEn: 'What is the sky like in the evening?',
        opts: ['Sivo i tamno', 'Narančasto i ružičasto', 'Plavo i zeleno', 'Crno'],
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
        opts: ['Svaki dan', 'Svake subote', 'Svake nedjelje', 'Jednom mjesečno'],
        correct: 1,
      },
      {
        q: 'Što Ana uvijek pije?',
        qEn: 'What does Ana always drink?',
        opts: ['Čaj', 'Sok', 'Kavu s mlijekom', 'Vodu'],
        correct: 2,
      },
      {
        q: 'Što je kava u Hrvatskoj?',
        qEn: 'What is coffee in Croatia?',
        opts: ['Samo piće', 'Vrijeme za prijatelje', 'Doručak', 'Skupo piće'],
        correct: 1,
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
        opts: ['Na prvom', 'Na drugom', 'Na trećem', 'Na četvrtom'],
        correct: 2,
      },
      {
        q: 'Što tata radi u dnevnoj sobi?',
        qEn: 'What does dad do in the living room?',
        opts: ['Kuha', 'Gleda vijesti', 'Čita knjige', 'Spava'],
        correct: 1,
      },
      {
        q: 'Gdje pripovjedačica čita kad je lijepo vrijeme?',
        qEn: 'Where does the narrator read when the weather is nice?',
        opts: ['U kuhinji', 'U dnevnoj sobi', 'Na balkonu', 'U parku'],
        correct: 2,
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
        opts: ['Sunčano', 'Pada kiša cijeli dan', 'Pada snijeg', 'Vruće je'],
        correct: 1,
      },
      {
        q: 'Tko gubi tri puta u igri?',
        qEn: 'Who loses three times in the game?',
        opts: ['Petar', 'Lucija', 'Mama', 'Tata'],
        correct: 3,
      },
      {
        q: 'Što mama radi popodne?',
        qEn: 'What does mum make in the afternoon?',
        opts: ['Tortu', 'Palačinke', 'Juhu', 'Sendviče'],
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
        opts: ['Tortu i cvijeće', 'Bocu vina i čokoladu', 'Palačinke', 'Ništa'],
        correct: 1,
      },
      {
        q: 'Što gospođa Horvat govori cijelu večer?',
        qEn: 'What does Mrs Horvat say all evening?',
        opts: ['"Laku noć!"', '"Jedite, jedite!"', '"Doviđenja!"', '"Kako ste?"'],
        correct: 1,
      },
      {
        q: 'Što gost u Hrvatskoj nikad ne radi?',
        qEn: 'What does a guest in Croatia never do?',
        opts: ['Ne dolazi praznih ruku', 'Ne jede juhu', 'Ne pije kavu', 'Ne razgovara'],
        correct: 0,
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
          'Jer je imala trening',
          'Jer je bila nervozna',
          'Jer je autobus rano išao',
          'Jer je uvijek rano ustaje',
        ],
        correct: 1,
      },
      {
        q: 'Kakvu je pogrešku Ivana napravila?',
        qEn: 'What mistake did Ivana make?',
        opts: [
          'Zakasnila je na posao',
          'Izbrisala je dokument',
          'Poslala je e-poštu krivoj osobi',
          'Zaboravila je ime šefice',
        ],
        correct: 2,
      },
      {
        q: 'Što Ivana i Petra imaju zajedničko?',
        qEn: 'What do Ivana and Petra have in common?',
        opts: ['Obje rade u marketingu', 'Obje treniraju odbojku', 'Obje piju čaj', 'Obje su nove'],
        correct: 1,
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
        opts: ['Šest', 'Deset', 'Šesnaest', 'Dvadeset'],
        correct: 2,
      },
      {
        q: 'Što se dogodilo Petru kod velikog slapa?',
        qEn: 'What happened to Petar by the big waterfall?',
        opts: [
          'Pao je u vodu',
          'Odletjela mu je kapa u jezero',
          'Izgubio je fotoaparat',
          'Vidio je veliku ribu',
        ],
        correct: 1,
      },
      {
        q: 'Što se u parku ne smije raditi?',
        qEn: 'What is not allowed in the park?',
        opts: [
          'Fotografirati i hodati',
          'Jesti sendviče',
          'Plivati i hraniti životinje',
          'Sjediti na klupi',
        ],
        correct: 2,
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
        opts: ['Od ponedjeljka', 'Od subote', 'Od jučer', 'Od jutra'],
        correct: 1,
      },
      {
        q: 'Kolika je Markova temperatura?',
        qEn: "What is Marko's temperature?",
        opts: ['37,5', '38,5', '39,5', '36,5'],
        correct: 1,
      },
      {
        q: 'Što liječnica kaže o nogometu?',
        qEn: 'What does the doctor say about football?',
        opts: [
          'Može igrati u četvrtak',
          'Nikakav sport ovaj tjedan',
          'Samo pola utakmice',
          'Nogomet je zdrav',
        ],
        correct: 1,
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
        opts: ['Dvije', 'Tri', 'Četiri', 'Jednu'],
        correct: 1,
      },
      {
        q: 'S čime ujak Tomislav uspoređuje ormar?',
        qEn: 'What does uncle Tomislav compare the wardrobe to?',
        opts: ['S autom', 'S kućom', 'Sa slonom', 'S konjem'],
        correct: 2,
      },
      {
        q: 'Što je tati ostalo nakon sastavljanja kreveta?',
        qEn: 'What did dad have left after assembling the bed?',
        opts: ['Dva vijka', 'Jedna daska', 'Ništa', 'Jedan kotač'],
        correct: 0,
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
          'U hotelu u Zagrebu',
          'U konobi pokraj Šibenika',
          'Na plaži u Splitu',
          'U restoranu u Berlinu',
        ],
        correct: 1,
      },
      {
        q: 'Što se dogodilo prvi tjedan?',
        qEn: 'What happened in the first week?',
        opts: [
          'Luka je dobio otkaz',
          'Luka je donio gostima krivo jelo',
          'Luka je razbio čašu',
          'Luka je zaboravio doći',
        ],
        correct: 1,
      },
      {
        q: 'Što je Luka kupio zarađenim novcem?',
        qEn: 'What did Luka buy with the money he earned?',
        opts: ['Auto', 'Novi laptop i put u Berlin', 'Novi mobitel', 'Bicikl'],
        correct: 1,
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
        opts: ['Dvadeset eura', 'Trideset eura', 'Četrdeset eura', 'Pedeset eura'],
        correct: 1,
      },
      {
        q: 'Što je gospođa Marica radila četrdeset godina?',
        qEn: 'What did Mrs Marica do for forty years?',
        opts: ['Bila je učiteljica', 'Bila je krojačica', 'Bila je kuharica', 'Bila je liječnica'],
        correct: 1,
      },
      {
        q: 'Kakvu sreću ima onaj tko prvi vidi more?',
        qEn: 'What luck does the person who sees the sea first have?',
        opts: [
          'Sreću cijeli dan',
          'Sreću cijelo ljeto',
          'Sreću cijelu godinu',
          'Nema nikakve sreće',
        ],
        correct: 1,
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
        opts: ['Jedan sat', 'Dva sata', 'Tri sata', 'Četiri sata'],
        correct: 1,
      },
      {
        q: 'Što Lucija nije razumjela u srijedu?',
        qEn: 'What did Lucija not understand on Wednesday?',
        opts: ['Zadatke s postotcima', 'Formule za površinu', 'Zadatke s razlomcima', 'Geometriju'],
        correct: 0,
      },
      {
        q: 'Koju je ocjenu Lucija dobila?',
        qEn: 'What grade did Lucija get?',
        opts: ['Dobar', 'Vrlo dobar', 'Odličan', 'Dovoljan'],
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
        opts: ['U dvanaest', 'U jedan', 'U dva', 'U tri'],
        correct: 1,
      },
      {
        q: 'Kada je baka kupila kiseli kupus?',
        qEn: 'When did grandma buy the sauerkraut?',
        opts: ['Jučer', 'U subotu', 'U četvrtak', 'Danas ujutro'],
        correct: 2,
      },
      {
        q: 'Koliko sarmi je Ivan pojeo?',
        qEn: 'How many sarmas did Ivan eat?',
        opts: ['Nijednu', 'Jednu', 'Dvije', 'Tri'],
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
        opts: ['Deset eura', 'Petnaest eura', 'Dvadeset eura', 'Trideset eura'],
        correct: 2,
      },
      {
        q: 'Zašto nisu kupili knjigu?',
        qEn: 'Why did they not buy a book?',
        opts: [
          'Knjige su preskupe',
          'Mama ne voli čitati',
          'Ne znaju što je mama već pročitala',
          'Knjižara je bila zatvorena',
        ],
        correct: 2,
      },
      {
        q: 'Što su na kraju kupili?',
        qEn: 'What did they buy in the end?',
        opts: ['Šalicu s natpisom', 'Srebrnu ogrlicu s privjeskom', 'Plavi šal', 'Parfem'],
        correct: 1,
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
        opts: ['Pet godina', 'Deset godina', 'Petnaest godina', 'Dvadeset godina'],
        correct: 2,
      },
      {
        q: 'Što baka kaže Tomislavu kad govori engleski?',
        qEn: 'What does grandma tell Tomislav when he speaks English?',
        opts: [
          '"Bravo, odlično!"',
          '"Govori hrvatski, zlato moje!"',
          '"Ne razumijem te."',
          '"Zovi mamu."',
        ],
        correct: 1,
      },
      {
        q: 'Kada obitelj dolazi u Hrvatsku?',
        qEn: 'When is the family coming to Croatia?',
        opts: ['U lipnju', 'U srpnju', 'U kolovozu', 'Za Božić'],
        correct: 1,
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
          'Jer subotom nema gužve',
          'Jer se Dolac rano zatvara',
          'Jer je radila u blizini',
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
        opts: ['Za štrukle', 'Za palačinke', 'Za sarmu', 'Za pitu'],
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
        opts: ['U trećoj', 'U prvoj', 'U drugoj', 'U županijskoj'],
        correct: 0,
      },
      {
        q: 'Što djed savjetuje Luki?',
        qEn: 'What does grandpa advise Luka?',
        opts: [
          'Da gleda loptu, a ne publiku',
          'Da trenira svaki dan',
          'Da puca jače',
          'Da mijenja klub',
        ],
        correct: 0,
      },
      {
        q: 'Kako je završila utakmica?',
        qEn: 'How did the match end?',
        opts: ['Izjednačeno', 'Pobjedom domaćih', 'Porazom bez gola', 'Prekinuta je'],
        correct: 0,
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
        opts: ['Parkiranje unatrag', 'Teorija', 'Vožnja autocestom', 'Pokretanje na uzbrdici'],
        correct: 0,
      },
      {
        q: 'Tko je bio Zvonin najgori učenik?',
        qEn: 'Who was Zvone’s worst student?',
        opts: ['On sam', 'Pripovjedačica', 'Njegov sin', 'Susjed'],
        correct: 0,
      },
      {
        q: 'Koga je pripovjedačica prvo nazvala?',
        qEn: 'Whom did the narrator call first?',
        opts: ['Mamu', 'Zvonu', 'Tatu', 'Sestru'],
        correct: 0,
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
        opts: ['Na Krku', 'Na Hvaru', 'U Istri', 'Kod Zadra'],
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
        opts: ['Zbog mora i ljudi', 'Zbog plaće', 'Zbog šefice', 'Zbog napojnica'],
        correct: 0,
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
        opts: ['Tjedan dana', 'Jedan dan', 'Mjesec dana', 'Tri dana'],
        correct: 0,
      },
      {
        q: 'Tko ga je ohrabrio u čekaonici?',
        qEn: 'Who encouraged him in the waiting room?',
        opts: ['Dječak', 'Sestra', 'Žena', 'Doktorica'],
        correct: 0,
      },
      {
        q: 'Što sada radi svakih šest mjeseci?',
        qEn: 'What does he now do every six months?',
        opts: ['Ide na kontrolu', 'Mijenja četkicu', 'Ide na čišćenje', 'Zove ordinaciju'],
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
        opts: ['Psihologiju u Rijeci', 'Pravo u Zagrebu', 'Ekonomiju', 'Medicinu'],
        correct: 0,
      },
      {
        q: 'Što je tata savjetovao?',
        qEn: 'What did dad advise?',
        opts: [
          'Da bira ono zbog čega će ustajati bez budilice',
          'Da upiše pravo',
          'Da sluša mamu',
          'Da ode u inozemstvo',
        ],
        correct: 0,
      },
      {
        q: 'Čega se Petra malo boji?',
        qEn: 'What is Petra a little afraid of?',
        opts: ['Statistike', 'Ispita', 'Profesora', 'Cimerice'],
        correct: 0,
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
        opts: ['Tristo', 'Petsto', 'Sto', 'Tisuću'],
        correct: 0,
      },
      {
        q: 'Tko je ove godine sjeo na punu kantu?',
        qEn: 'Who sat on a full bucket this year?',
        opts: ['Stric Ivo', 'Baka', 'Djed', 'Pripovjedač'],
        correct: 0,
      },
      {
        q: 'Što djed kaže u govoru?',
        qEn: 'What does grandpa say in his speech?',
        opts: [
          'Da je vino posebno jer ga beru zajedno',
          'Da je godina loša',
          'Da će prodati vinograd',
          'Da je vino najbolje u Zagorju',
        ],
        correct: 0,
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
        opts: ['Zvijezda', 'Galeb', 'Uvala', 'Sreća'],
        correct: 0,
      },
      {
        q: 'Što po djedu lovi prazna mreža?',
        qEn: 'According to grandpa, what does an empty net catch?',
        opts: ['Mir', 'Ništa', 'Sreću', 'Vjetar'],
        correct: 0,
      },
      {
        q: 'Kamo pripovjedač sada vodi sina?',
        qEn: 'Where does the narrator now take his son?',
        opts: ['U istu uvalu', 'Na drugi otok', 'U luku', 'Na jezero'],
        correct: 0,
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
        opts: ['Otprati te se', 'Nacrta se karta', 'Pošalje se lokacija', 'Kaže se broj tramvaja'],
        correct: 0,
      },
      {
        q: 'Kako se preziva mladić sa slušalicama?',
        qEn: 'What is the young man’s surname?',
        opts: ['Horvat', 'Kovač', 'Babić', 'Jagoda'],
        correct: 0,
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
        opts: ['Puricu s mlincima', 'Sarmu', 'Bakalar', 'Fritule'],
        correct: 0,
      },
      {
        q: 'Kada je ove godine pao snijeg?',
        qEn: 'When did it snow this year?',
        opts: ['Na Badnjak', 'Na Štefanje', 'Na Novu godinu', 'Prve nedjelje adventa'],
        correct: 0,
      },
      {
        q: 'Što baka kaže uz podignutu čašu?',
        qEn: 'What does grandma say with her glass raised?',
        opts: [
          '„Da nam je svima ovako — i dogodine."',
          '„Živjeli!"',
          '„Sretan Božić!"',
          '„Dobar tek!"',
        ],
        correct: 0,
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
          'Jer su je čuvali vojnici',
          'Jer je bila muzej',
        ],
        correct: 0,
      },
      {
        q: 'Što je postao carev mauzolej?',
        qEn: 'What did the emperor’s mausoleum become?',
        opts: ['Katedrala', 'Skladište', 'Kazalište', 'Tržnica'],
        correct: 0,
      },
      {
        q: 'Koji problem muči staru jezgru?',
        qEn: 'Which problem troubles the old core?',
        opts: [
          'Stanovi postaju apartmani, mladi odlaze',
          'Nema turista',
          'Zidine se ruše',
          'Previše je muzeja',
        ],
        correct: 0,
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
        opts: ['Društvo, grupu prijatelja', 'Pjesmu o moru', 'Vrstu konobe', 'Crkveni zbor'],
        correct: 0,
      },
      {
        q: 'Kada je klapsko pjevanje uvršteno na UNESCO-ov popis?',
        qEn: 'When was klapa singing inscribed on the UNESCO list?',
        opts: ['2012.', '1979.', '2005.', '1991.'],
        correct: 0,
      },
      {
        q: 'Što se po Anti u klapi najviše cijeni?',
        qEn: 'According to Ante, what matters most in a klapa?',
        opts: ['Glas koji zna slušati', 'Najljepši glas', 'Najjači glas', 'Solistička karijera'],
        correct: 0,
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
        opts: ['Laptop, internet i mir', 'Ured u gradu', 'Automobil', 'Tvrtka u Hrvatskoj'],
        correct: 0,
      },
      {
        q: 'Što zimi rade digitalni nomadi za otok?',
        qEn: 'What do digital nomads do for the island in winter?',
        opts: [
          'Drže kafiće otvorenima i školu punijom',
          'Iznajmljuju apartmane',
          'Odlaze kućama',
          'Grade hotele',
        ],
        correct: 0,
      },
      {
        q: 'Što je Frani najvažnije?',
        qEn: 'What matters most to Frane?',
        opts: ['Da svijetli prozor', 'Da se vežu mreže', 'Da nomadi plaćaju najam', 'Da je tiho'],
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
          'Odluka ministarstva',
          'Turistička sezona',
          'Novi načelnik',
        ],
        correct: 0,
      },
      {
        q: 'Tko su „zeleni inspektori"?',
        qEn: 'Who are the "green inspectors"?',
        opts: ['Djeca iz škole', 'Konobari', 'Turisti', 'Policajci'],
        correct: 0,
      },
      {
        q: 'Za koliko je pao miješani otpad?',
        qEn: 'By how much did mixed waste fall?',
        opts: ['Za trećinu', 'Za polovinu', 'Za desetinu', 'Nije pao'],
        correct: 0,
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
          'Mobiteli u košaru za vrijeme večere',
          'Zabrana interneta',
          'Sat ekrana dnevno',
          'Mobitel tek nakon zadaće',
        ],
        correct: 0,
      },
      {
        q: 'Što po psihologinji ekran istiskuje?',
        qEn: 'According to the psychologist, what does the screen crowd out?',
        opts: ['San, kretanje i dosadu', 'Prijatelje', 'Školu', 'Obitelj'],
        correct: 0,
      },
      {
        q: 'Što je predložio Karlo?',
        qEn: 'What did Karlo propose?',
        opts: [
          'Zajednički film nedjeljom',
          'Više vremena za igrice',
          'Ukidanje košare',
          'Novi mobitel',
        ],
        correct: 0,
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
        opts: ['Sat i pol', 'Petnaest minuta', 'Pola sata', 'Cijeli dan'],
        correct: 0,
      },
      {
        q: 'Što znači poruka „Dođi na kavu, imam ti nešto za reći"?',
        qEn: 'What does "Come for coffee, I have something to tell you" mean?',
        opts: [
          'Otkazuju se svi drugi planovi',
          'Ništa posebno',
          'Poziv na posao',
          'Da je kava gotova',
        ],
        correct: 0,
      },
      {
        q: 'Što je kava, prema tekstu, zapravo?',
        qEn: 'According to the text, what is coffee really?',
        opts: ['Izgovor za razgovor', 'Nacionalno piće', 'Gubitak vremena', 'Poslovni ritual'],
        correct: 0,
      },
    ],
  },
];
