// Built-in Comprehension Exercises by CEFR Level — extracted from
// ListeningComprehensionScreen as part of the 1b decomposition. Data only;
// the screen imports EXERCISES and casts via Record<string, typeof EXERCISES.A1>.

export const EXERCISES = {
  A1: {
    label: 'A1 — Starter',
    color: '#16a34a',
    headerBg: 'linear-gradient(135deg,#059669,#065f46)',
    bg: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    border: '#bbf7d0',
    desc: 'Single words and simple greetings — build your ear from day one',
    sets: [
      {
        title: 'Greetings & Introductions',
        icon: '👋',
        questions: [
          {
            hr: 'Dobar dan.',
            en: 'Good day.',
            opts: ['Good morning.', 'Good day.', 'Good night.', 'Goodbye.'],
          },
          {
            hr: 'Kako se zoveš?',
            en: 'What is your name?',
            opts: ['How are you?', 'Where are you from?', 'What is your name?', 'How old are you?'],
          },
          {
            hr: 'Drago mi je.',
            en: 'Nice to meet you.',
            opts: ['I am happy.', 'Nice to meet you.', 'Thank you.', 'Excuse me.'],
          },
          {
            hr: 'Hvala lijepa.',
            en: 'Thank you very much.',
            opts: ['You are welcome.', 'Please.', 'Thank you very much.', 'I am sorry.'],
          },
          {
            hr: 'Gdje je toalet?',
            en: 'Where is the toilet?',
            opts: [
              'Where is the exit?',
              'Where is the toilet?',
              'Where is the hotel?',
              'Where is the market?',
            ],
          },
          {
            hr: 'Koliko košta?',
            en: 'How much does it cost?',
            opts: [
              'What time is it?',
              'How far is it?',
              'How much does it cost?',
              'How many are there?',
            ],
          },
          {
            hr: 'Govorite li engleski?',
            en: 'Do you speak English?',
            opts: [
              'Do you understand?',
              'Do you speak Croatian?',
              'Do you speak English?',
              'Can you help me?',
            ],
          },
          {
            hr: 'Jedan kava, molim.',
            en: 'One coffee, please.',
            opts: [
              'Two beers, please.',
              'One coffee, please.',
              'One water, please.',
              'One tea, please.',
            ],
          },
        ],
      },
      {
        title: 'Numbers & Colors',
        icon: '🔢',
        questions: [
          {
            hr: 'Imam pet jabuka.',
            en: 'I have five apples.',
            opts: [
              'I have three apples.',
              'I have five apples.',
              'I have seven apples.',
              'I have ten apples.',
            ],
          },
          {
            hr: 'Automobil je crven.',
            en: 'The car is red.',
            opts: ['The car is blue.', 'The car is red.', 'The car is green.', 'The car is white.'],
          },
          {
            hr: 'Koliko imaš godina?',
            en: 'How old are you?',
            opts: [
              'How many brothers do you have?',
              'What day is it?',
              'How old are you?',
              'How many people are there?',
            ],
          },
          {
            hr: 'Kuća je velika i bijela.',
            en: 'The house is big and white.',
            opts: [
              'The house is small and blue.',
              'The house is big and white.',
              'The house is old and yellow.',
              'The house is new and red.',
            ],
          },
          {
            hr: 'Dva i dva su četiri.',
            en: 'Two and two is four.',
            opts: [
              'Two and two is three.',
              'Two and two is five.',
              'Two and two is four.',
              'Three and two is four.',
            ],
          },
          {
            hr: 'More je plavo i lijepo.',
            en: 'The sea is blue and beautiful.',
            opts: [
              'The sky is blue and beautiful.',
              'The sea is green and cold.',
              'The sea is blue and beautiful.',
              'The lake is blue and clear.',
            ],
          },
          {
            hr: 'Imam tri brata i jednu sestru.',
            en: 'I have three brothers and one sister.',
            opts: [
              'I have one brother and three sisters.',
              'I have three brothers and two sisters.',
              'I have three brothers and one sister.',
              'I have two brothers and one sister.',
            ],
          },
        ],
      },
      {
        title: 'Food & Places',
        icon: '🍕',
        questions: [
          {
            hr: 'Idemo u restoran večeras.',
            en: 'We are going to a restaurant tonight.',
            opts: [
              'We are going to a café this morning.',
              'They are going to a restaurant tomorrow.',
              'We are going to a restaurant tonight.',
              'We are going to the market tonight.',
            ],
          },
          {
            hr: 'Pizza je moje omiljeno jelo.',
            en: 'Pizza is my favourite food.',
            opts: [
              'Pasta is my favourite food.',
              'Pizza is my favourite food.',
              'Fish is my favourite dish.',
              'Soup is my favourite meal.',
            ],
          },
          {
            hr: 'Tržnica je blizu stanice.',
            en: 'The market is near the station.',
            opts: [
              'The hotel is near the station.',
              'The market is far from the station.',
              'The market is near the station.',
              'The supermarket is next to the park.',
            ],
          },
          {
            hr: 'Jedan sok, molim.',
            en: 'One juice, please.',
            opts: [
              'One beer, please.',
              'Two juices, please.',
              'One juice, please.',
              'One water, please.',
            ],
          },
          {
            hr: 'Plaža je tu, lijevo.',
            en: 'The beach is here, on the left.',
            opts: [
              'The beach is far, on the right.',
              'The park is here, on the left.',
              'The beach is here, on the left.',
              'The beach is straight ahead.',
            ],
          },
          {
            hr: 'Škola je velika i nova.',
            en: 'The school is big and new.',
            opts: [
              'The school is small and old.',
              'The hospital is big and new.',
              'The school is big and old.',
              'The school is big and new.',
            ],
          },
        ],
      },
      {
        title: 'Around Town',
        icon: '🏙️',
        questions: [
          {
            hr: 'Autobus dolazi u pet.',
            en: 'The bus arrives at five.',
            opts: [
              'The bus arrives at five.',
              'The bus leaves at nine.',
              'The train arrives at five.',
              'The tram is late.',
            ],
          },
          {
            hr: 'Banka je desno.',
            en: 'The bank is on the right.',
            opts: [
              'The bank is on the right.',
              'The bank is on the left.',
              'The bank is straight ahead.',
              'The bank is closed.',
            ],
          },
          {
            hr: 'Danas pada kiša.',
            en: 'It is raining today.',
            opts: [
              'It is raining today.',
              'It is snowing today.',
              'It is sunny today.',
              'It is windy today.',
            ],
          },
          {
            hr: 'Moj brat radi u bolnici.',
            en: 'My brother works in a hospital.',
            opts: [
              'My brother works in a hospital.',
              'My brother works in a school.',
              'My brother works in a shop.',
              'My brother works in a hotel.',
            ],
          },
          {
            hr: 'Imam dvije sestre.',
            en: 'I have two sisters.',
            opts: [
              'I have two sisters.',
              'I have two brothers.',
              'I have two children.',
              'I have two dogs.',
            ],
          },
          {
            hr: 'Volim plivati ljeti.',
            en: 'I like to swim in summer.',
            opts: [
              'I like to swim in summer.',
              'I like to ski in winter.',
              'I like to run in the morning.',
              'I like to swim in the pool.',
            ],
          },
          {
            hr: 'Ovo je moja kuća.',
            en: 'This is my house.',
            opts: [
              'This is my house.',
              'This is my car.',
              'This is my street.',
              'This is my room.',
            ],
          },
        ],
      },

      {
        title: 'Connected Speech: Ana',
        icon: '🔗',
        passage: 'Zovem se Ana. Živim u Zagrebu. Imam brata i sestru. Volim kavu i more.',
        questions: [
          {
            hr: 'Zovem se Ana.',
            en: 'My name is Ana.',
            opts: ['My name is Ana.', 'I am calling Ana.', 'Her name is Ana.', 'I live with Ana.'],
          },
          {
            hr: 'Živim u Zagrebu.',
            en: 'I live in Zagreb.',
            opts: [
              'I live in Zagreb.',
              'I work in Zagreb.',
              'I was born in Zagreb.',
              'I am going to Zagreb.',
            ],
          },
          {
            hr: 'Imam brata i sestru.',
            en: 'I have a brother and a sister.',
            opts: [
              'I have a brother and a sister.',
              'I have two brothers.',
              'I love my brother and sister.',
              'My brother has a sister.',
            ],
          },
          {
            hr: 'Volim kavu i more.',
            en: 'I love coffee and the sea.',
            opts: [
              'I love coffee and the sea.',
              'I drink coffee by the sea.',
              'I want coffee and more.',
              'I love tea and the sea.',
            ],
          },
        ],
      },
      // ── 2026-07 connected-speech expansion (3 per level) ──
      {
        title: 'Connected Speech: Marko',
        icon: '🔗',
        passage:
          'Zovem se Marko i imam dvadeset i pet godina. Radim kao konobar u jednom restoranu u Splitu. Moja obitelj živi u Zagrebu, ali ja volim more. Svake nedjelje zovem mamu telefonom i dugo pričamo. Vikendom idem na plažu s prijateljima.',
        questions: [
          {
            hr: 'Zovem se Marko i imam dvadeset i pet godina.',
            en: 'My name is Marko and I am twenty-five years old.',
            opts: [
              'My name is Marko and I am twenty-five years old.',
              'My name is Marko and I am fifty-two years old.',
              'My brother is called Marko and he is twenty-five.',
              'My name is Ivan and I am twenty-five years old.',
            ],
          },
          {
            hr: 'Radim kao konobar u jednom restoranu u Splitu.',
            en: 'I work as a waiter in a restaurant in Split.',
            opts: [
              'I worked as a waiter in a restaurant in Split.',
              'I work as a cook in a restaurant in Split.',
              'I work as a waiter in a restaurant in Split.',
              'I work as a waiter in a hotel in Split.',
            ],
          },
          {
            hr: 'Moja obitelj živi u Zagrebu, ali ja volim more.',
            en: 'My family lives in Zagreb, but I love the sea.',
            opts: [
              'My family lives in Split, but I love the mountains.',
              'My family lives in Zagreb, but I love the sea.',
              'My family lives in Zagreb, but I love the mountains.',
              'My friends live in Zagreb, but I love the sea.',
            ],
          },
          {
            hr: 'Svake nedjelje zovem mamu telefonom i dugo pričamo.',
            en: 'Every Sunday I call my mum on the phone and we talk for a long time.',
            opts: [
              'Every Sunday I visit my mum and we talk for a long time.',
              'Every Saturday I call my mum on the phone and we talk briefly.',
              'Every Sunday I call my dad on the phone and we talk for a long time.',
              'Every Sunday I call my mum on the phone and we talk for a long time.',
            ],
          },
          {
            hr: 'Vikendom idem na plažu s prijateljima.',
            en: 'On weekends I go to the beach with friends.',
            opts: [
              'On weekends I go to the beach with friends.',
              'On weekdays I go to the beach with friends.',
              'On weekends I go to the mountains with friends.',
              'On weekends I go to the beach alone.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: My Daily Routine',
        icon: '🔗',
        passage:
          'Ustajem svaki dan u sedam sati. Doručkujem kruh i sir, a onda pijem čaj. Poslije doručka idem na posao autobusom. Navečer kuham večeru za cijelu obitelj. Prije spavanja čitam knjigu.',
        questions: [
          {
            hr: 'Ustajem svaki dan u sedam sati.',
            en: "I get up every day at seven o'clock.",
            opts: [
              'I get up every day at seven in the evening.',
              "I go to bed every day at seven o'clock.",
              "I get up every day at seven o'clock.",
              "I get up every day at eight o'clock.",
            ],
          },
          {
            hr: 'Doručkujem kruh i sir, a onda pijem čaj.',
            en: 'I have bread and cheese for breakfast, and then I drink tea.',
            opts: [
              'I have bread and cheese for breakfast, and then I drink tea.',
              'I have bread and jam for breakfast, and then I drink coffee.',
              'I have bread and cheese for lunch, and then I drink tea.',
              'I have eggs and cheese for breakfast, and then I drink tea.',
            ],
          },
          {
            hr: 'Poslije doručka idem na posao autobusom.',
            en: 'After breakfast I go to work by bus.',
            opts: [
              'Before breakfast I go to work by bus.',
              'After breakfast I go to work by bus.',
              'After breakfast I go to school by bus.',
              'After breakfast I go to work by car.',
            ],
          },
          {
            hr: 'Navečer kuham večeru za cijelu obitelj.',
            en: 'In the evening I cook dinner for the whole family.',
            opts: [
              'In the morning I cook dinner for the whole family.',
              'In the evening I cook lunch for the whole family.',
              'In the evening I cook dinner for myself.',
              'In the evening I cook dinner for the whole family.',
            ],
          },
          {
            hr: 'Prije spavanja čitam knjigu.',
            en: 'Before going to sleep I read a book.',
            opts: [
              'Before going to sleep I watch television.',
              'After waking up I read a book.',
              'Before going to sleep I read a book.',
              'Before going to sleep I read the newspaper.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: My Family',
        icon: '🔗',
        passage:
          'Imam veliku i sretnu obitelj. Moj otac je liječnik, a moja majka je učiteljica. Imam brata i dvije sestre. Naš pas se zove Reks. Svaki Božić okupimo se svi kod bake u selu.',
        questions: [
          {
            hr: 'Imam veliku i sretnu obitelj.',
            en: 'I have a big and happy family.',
            opts: [
              'I have a small and happy family.',
              'I have a big and happy family.',
              'I have a big and quiet family.',
              'I have a happy but small family.',
            ],
          },
          {
            hr: 'Moj otac je liječnik, a moja majka je učiteljica.',
            en: 'My father is a doctor, and my mother is a teacher.',
            opts: [
              'My father is a doctor, and my mother is a teacher.',
              'My mother is a doctor, and my father is a teacher.',
              'My father is a teacher, and my mother is a doctor.',
              'My father is a doctor, and my sister is a teacher.',
            ],
          },
          {
            hr: 'Imam brata i dvije sestre.',
            en: 'I have a brother and two sisters.',
            opts: [
              'I have two brothers and a sister.',
              'I have a sister and two brothers.',
              'I have one brother and one sister.',
              'I have a brother and two sisters.',
            ],
          },
          {
            hr: 'Naš pas se zove Reks.',
            en: 'Our dog is called Reks.',
            opts: [
              'Our cat is called Reks.',
              'Our dog is called Reks.',
              'Our dog is called Max.',
              'My dog is called Reks.',
            ],
          },
          {
            hr: 'Svaki Božić okupimo se svi kod bake u selu.',
            en: "Every Christmas we all gather at grandma's in the village.",
            opts: [
              "Every Christmas we all gather at grandpa's in the village.",
              "Every Easter we all gather at grandma's in the village.",
              "Every Christmas we all gather at grandma's in the village.",
              "Every Christmas some of us gather at grandma's in the city.",
            ],
          },
        ],
      },
    ],
  },
  A2: {
    label: 'A2 — Elementary',
    color: '#0e7490',
    headerBg: 'linear-gradient(135deg,#0e7490,#164e63)',
    bg: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)',
    border: '#bae6fd',
    desc: 'Short sentences about daily life — family, food, weather and routines',
    sets: [
      {
        title: 'Daily Routines',
        icon: '🌅',
        questions: [
          {
            hr: 'Svaki dan pijem kavu ujutro.',
            en: 'I drink coffee every morning.',
            opts: [
              'I drink tea every evening.',
              'I drink coffee every morning.',
              'I eat breakfast every morning.',
              'I drink juice every afternoon.',
            ],
          },
          {
            hr: 'On ide na posao autobusom.',
            en: 'He goes to work by bus.',
            opts: [
              'She goes to school by car.',
              'He goes to work by bus.',
              'He goes home by train.',
              'She goes shopping by taxi.',
            ],
          },
          {
            hr: 'Ona kuha večeru svaki dan.',
            en: 'She cooks dinner every day.',
            opts: [
              'She cleans the house every day.',
              'She cooks lunch every day.',
              'She cooks dinner every day.',
              'He cooks breakfast every day.',
            ],
          },
          {
            hr: 'Djeca idu u školu pješice.',
            en: 'The children go to school on foot.',
            opts: [
              'The children go to school by bicycle.',
              'The children go to the park on foot.',
              'The children go to school on foot.',
              'The adults go to work on foot.',
            ],
          },
          {
            hr: 'Volim čitati knjige navečer.',
            en: 'I love reading books in the evening.',
            opts: [
              'I love watching films in the evening.',
              'I love reading books in the morning.',
              'I love reading books in the evening.',
              'I love listening to music in the evening.',
            ],
          },
          {
            hr: 'Tata pere suđe poslije večere.',
            en: 'Dad washes the dishes after dinner.',
            opts: [
              'Mum washes the dishes after dinner.',
              'Dad washes the car after dinner.',
              'Dad washes the dishes after lunch.',
              'Dad washes the dishes after dinner.',
            ],
          },
        ],
      },
      {
        title: 'Family & Food',
        icon: '👨‍👩‍👧',
        questions: [
          {
            hr: 'Moja baka živi u Splitu.',
            en: 'My grandmother lives in Split.',
            opts: [
              'My grandfather lives in Zagreb.',
              'My grandmother lives in Dubrovnik.',
              'My grandmother lives in Split.',
              'My mother lives in Rijeka.',
            ],
          },
          {
            hr: 'Imamo dvoje djece — sina i kćer.',
            en: 'We have two children — a son and a daughter.',
            opts: [
              'We have three children.',
              'They have one son.',
              'We have two children — a son and a daughter.',
              'We have two sons.',
            ],
          },
          {
            hr: 'Za doručak jedem kruh s marmeladom.',
            en: 'For breakfast I eat bread with jam.',
            opts: [
              'For lunch I eat bread with cheese.',
              'For breakfast I eat bread with jam.',
              'For breakfast I eat eggs with bread.',
              'For dinner I eat soup with bread.',
            ],
          },
          {
            hr: 'Prstaci su tipično dalmatinsko jelo.',
            en: 'Date mussels are a typical Dalmatian dish.',
            opts: [
              'Sarma is a typical Dalmatian dish.',
              'Peka is a typical Slavonian dish.',
              'Date mussels are a typical Dalmatian dish.',
              'Burek is a typical Croatian dessert.',
            ],
          },
          {
            hr: 'Kolač je sladak i ukusan.',
            en: 'The cake is sweet and delicious.',
            opts: [
              'The soup is hot and delicious.',
              'The bread is fresh and tasty.',
              'The cake is sweet and delicious.',
              'The coffee is strong and bitter.',
            ],
          },
          {
            hr: 'Moj otac radi u bolnici kao liječnik.',
            en: 'My father works in a hospital as a doctor.',
            opts: [
              'My father works in a school as a teacher.',
              'My mother works in a hospital as a nurse.',
              'My father works in a hospital as a doctor.',
              'My brother works in a hospital as a doctor.',
            ],
          },
          {
            hr: 'Večeramo zajedno svaki petak.',
            en: 'We have dinner together every Friday.',
            opts: [
              'We have lunch together every Friday.',
              'We have dinner together every Sunday.',
              'They have dinner together every Saturday.',
              'We have dinner together every Friday.',
            ],
          },
        ],
      },
      {
        title: 'Shopping & Transport',
        icon: '🛍️',
        questions: [
          {
            hr: 'Autobus polazi svakih dvadeset minuta.',
            en: 'The bus departs every twenty minutes.',
            opts: [
              'The tram departs every twenty minutes.',
              'The bus departs every thirty minutes.',
              'The bus arrives every twenty minutes.',
              'The bus departs every twenty minutes.',
            ],
          },
          {
            hr: 'Ova jakna je preskupa za mene.',
            en: 'This jacket is too expensive for me.',
            opts: [
              'This dress is too big for me.',
              'This jacket is too small for me.',
              'This jacket is too expensive for me.',
              'This coat is a good deal for me.',
            ],
          },
          {
            hr: 'Gdje mogu kupiti razglednice?',
            en: 'Where can I buy postcards?',
            opts: [
              'Where can I buy newspapers?',
              'Where can I buy medicines?',
              'Where can I buy postcards?',
              'Where can I find a post office?',
            ],
          },
          {
            hr: 'Molim vas, ima li slobodnih mjesta u vlaku?',
            en: 'Excuse me, are there any free seats on the train?',
            opts: [
              'Excuse me, when does the train arrive?',
              'Please, are there any free rooms in the hotel?',
              'Excuse me, are there any free seats on the train?',
              'Excuse me, is this the right train for Split?',
            ],
          },
          {
            hr: 'Plaćam karticom, ne gotovinom.',
            en: 'I am paying by card, not with cash.',
            opts: [
              'I am paying in cash, not by card.',
              'I am paying by card, not with cash.',
              'She is paying in instalments, not upfront.',
              'He prefers cash over contactless payment.',
            ],
          },
          {
            hr: 'Trebam kartu za Zagreb i natrag.',
            en: 'I need a ticket to Zagreb and back.',
            opts: [
              'I need a one-way ticket to Zagreb.',
              'I need two tickets to Zagreb.',
              'I need a ticket to Zagreb and back.',
              'I need a bus pass for the whole week.',
            ],
          },
        ],
      },
      {
        title: 'Plans & Habits',
        icon: '🗓️',
        questions: [
          {
            hr: 'Vikendom obično spavam duže.',
            en: 'On weekends I usually sleep longer.',
            opts: [
              'On weekends I usually sleep longer.',
              'On weekdays I usually get up early.',
              'On weekends I usually work.',
              'On weekends I never sleep.',
            ],
          },
          {
            hr: 'Moram završiti zadaću prije večere.',
            en: 'I must finish my homework before dinner.',
            opts: [
              'I must finish my homework before dinner.',
              'I must start my homework after dinner.',
              'I must cook dinner before homework.',
              'I want to skip my homework tonight.',
            ],
          },
          {
            hr: 'Idemo u kino u subotu navečer.',
            en: 'We are going to the cinema on Saturday evening.',
            opts: [
              'We are going to the cinema on Saturday evening.',
              'We are going to the theatre on Sunday evening.',
              'We went to the cinema last Saturday.',
              'We are going to a concert on Saturday morning.',
            ],
          },
          {
            hr: 'Jučer sam kupila novu haljinu.',
            en: 'Yesterday I bought a new dress.',
            opts: [
              'Yesterday I bought a new dress.',
              'Yesterday I sold my old dress.',
              'Tomorrow I will buy a new dress.',
              'Yesterday I bought new shoes.',
            ],
          },
          {
            hr: 'Ljeti često putujemo na more.',
            en: 'In summer we often travel to the seaside.',
            opts: [
              'In summer we often travel to the seaside.',
              'In winter we often travel to the mountains.',
              'In summer we rarely travel anywhere.',
              'In summer we often travel abroad.',
            ],
          },
          {
            hr: 'Ne jedem meso, vegetarijanka sam.',
            en: 'I do not eat meat, I am a vegetarian.',
            opts: [
              'I do not eat meat, I am a vegetarian.',
              'I do not eat fish, I am allergic.',
              'I eat meat every day.',
              'I do not like vegetables at all.',
            ],
          },
          {
            hr: 'Stan ima dvije sobe i balkon.',
            en: 'The flat has two rooms and a balcony.',
            opts: [
              'The flat has two rooms and a balcony.',
              'The flat has three rooms and a garden.',
              'The house has two floors and a balcony.',
              'The flat has one room and a terrace.',
            ],
          },
          {
            hr: 'Nazvat ću te kad stignem doma.',
            en: 'I will call you when I get home.',
            opts: [
              'I will call you when I get home.',
              'I called you when I got home.',
              'I will text you when I leave home.',
              'I will visit you when I get home.',
            ],
          },
        ],
      },

      {
        title: 'Connected Speech: My Morning',
        icon: '🔗',
        passage:
          'Jutros sam ustala u sedam sati. Popila sam kavu i pojela sendvič. Autobusom sam otišla na posao. Poslije posla idem u trgovinu. Navečer ću gledati film.',
        questions: [
          {
            hr: 'Jutros sam ustala u sedam sati.',
            en: "This morning I got up at seven o'clock.",
            opts: [
              "This morning I got up at seven o'clock.",
              "This morning I left at seven o'clock.",
              "Yesterday I got up at seven o'clock.",
              "This morning I got up at six o'clock.",
            ],
          },
          {
            hr: 'Popila sam kavu i pojela sendvič.',
            en: 'I drank a coffee and ate a sandwich.',
            opts: [
              'I drank a coffee and ate a sandwich.',
              'I made a coffee and a sandwich.',
              'I drank tea and ate a sandwich.',
              'I bought a coffee and a sandwich.',
            ],
          },
          {
            hr: 'Autobusom sam otišla na posao.',
            en: 'I went to work by bus.',
            opts: [
              'I went to work by bus.',
              'I went to work by tram.',
              'I walked to work.',
              'The bus was late for work.',
            ],
          },
          {
            hr: 'Poslije posla idem u trgovinu.',
            en: 'After work I am going to the shop.',
            opts: [
              'After work I am going to the shop.',
              'Before work I go to the shop.',
              'After work I am going home.',
              'After the shop I go to work.',
            ],
          },
          {
            hr: 'Navečer ću gledati film.',
            en: 'In the evening I will watch a film.',
            opts: [
              'In the evening I will watch a film.',
              'In the evening I watched a film.',
              'Tonight I am making a film.',
              'In the morning I will watch a film.',
            ],
          },
        ],
      },
      // ── 2026-07 connected-speech expansion (3 per level) ──
      {
        title: 'Connected Speech: Shopping Trip',
        icon: '🔗',
        passage:
          'Jučer sam otišla u trgovački centar kupiti novu jaknu. Isprobala sam nekoliko veličina prije nego što sam pronašla pravu. Prodavačica mi je pomogla odabrati boju. Na kraju sam platila karticom, jer nisam imala gotovinu. Kupila sam i par cipela za sina.',
        questions: [
          {
            hr: 'Jučer sam otišla u trgovački centar kupiti novu jaknu.',
            en: 'Yesterday I went to the shopping centre to buy a new jacket.',
            opts: [
              'Yesterday I went to the shopping centre to buy new shoes.',
              'Tomorrow I am going to the shopping centre to buy a new jacket.',
              'Yesterday I went to the shopping centre to buy a new jacket.',
              'Yesterday I went to the market to buy a new jacket.',
            ],
          },
          {
            hr: 'Isprobala sam nekoliko veličina prije nego što sam pronašla pravu.',
            en: 'I tried on several sizes before I found the right one.',
            opts: [
              'I tried on several sizes before I found the right one.',
              'I tried on one size and it fit immediately.',
              'I tried on several colours before I found the right one.',
              'I bought several sizes without trying them on.',
            ],
          },
          {
            hr: 'Prodavačica mi je pomogla odabrati boju.',
            en: 'The shop assistant helped me choose the colour.',
            opts: [
              'The shop assistant helped me choose the size.',
              'The shop assistant helped me choose the colour.',
              'My friend helped me choose the colour.',
              'The shop assistant refused to help me.',
            ],
          },
          {
            hr: 'Na kraju sam platila karticom, jer nisam imala gotovinu.',
            en: 'In the end I paid by card, because I did not have cash.',
            opts: [
              'In the end I paid in cash, because I did not have a card.',
              'In the end I did not pay because the shop was closed.',
              'In the end I paid by card, although I had cash too.',
              'In the end I paid by card, because I did not have cash.',
            ],
          },
          {
            hr: 'Kupila sam i par cipela za sina.',
            en: 'I also bought a pair of shoes for my son.',
            opts: [
              'I also bought a pair of shoes for my son.',
              'I also bought a pair of shoes for my daughter.',
              'I also bought a jacket for my son.',
              'I almost bought a pair of shoes for my son.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: At the Doctor',
        icon: '🔗',
        passage:
          'Prošli tjedan sam se osjećala loše, pa sam otišla liječniku. Čekala sam u čekaonici skoro sat vremena. Liječnica mi je izmjerila temperaturu i pregledala grlo. Rekla mi je da imam običnu prehladu. Propisala mi je lijekove i savjetovala mirovanje kod kuće.',
        questions: [
          {
            hr: 'Prošli tjedan sam se osjećala loše, pa sam otišla liječniku.',
            en: 'Last week I felt unwell, so I went to the doctor.',
            opts: [
              'Last week I felt great, so I did not go anywhere.',
              'Last week I felt unwell, so I went to the doctor.',
              'Last week I felt unwell, but I did not go to the doctor.',
              'This week I felt unwell, so I went to the doctor.',
            ],
          },
          {
            hr: 'Čekala sam u čekaonici skoro sat vremena.',
            en: 'I waited in the waiting room for almost an hour.',
            opts: [
              'I waited outside the clinic for almost an hour.',
              'I waited in the waiting room for exactly two hours.',
              'I waited in the waiting room for almost an hour.',
              'I did not wait at all in the waiting room.',
            ],
          },
          {
            hr: 'Liječnica mi je izmjerila temperaturu i pregledala grlo.',
            en: 'The doctor took my temperature and examined my throat.',
            opts: [
              'The doctor took my temperature and examined my throat.',
              'The doctor took my blood pressure and examined my ears.',
              'The nurse took my temperature and examined my throat.',
              'The doctor only examined my throat.',
            ],
          },
          {
            hr: 'Rekla mi je da imam običnu prehladu.',
            en: 'She told me I had a common cold.',
            opts: [
              'She told me I had the flu.',
              'She told me I had an infection.',
              'She told me I had nothing serious at all.',
              'She told me I had a common cold.',
            ],
          },
          {
            hr: 'Propisala mi je lijekove i savjetovala mirovanje kod kuće.',
            en: 'She prescribed me medicine and advised rest at home.',
            opts: [
              'She prescribed me medicine and advised a trip to hospital.',
              'She prescribed me medicine and advised rest at home.',
              'She advised rest at home but no medicine.',
              'She prescribed me medicine and advised more exercise.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Weekend Weather',
        icon: '🔗',
        passage:
          'Ovaj vikend najavljuju sunčano i toplo vrijeme. U subotu ujutro planiramo ići na izlet u planine. Poslijepodne ćemo se vratiti prije nego što padne kiša. U nedjelju će navodno biti oblačno i vjetrovito. Zato smo odlučili ostati kod kuće i odmoriti se.',
        questions: [
          {
            hr: 'Ovaj vikend najavljuju sunčano i toplo vrijeme.',
            en: 'This weekend they are forecasting sunny and warm weather.',
            opts: [
              'This weekend they are forecasting sunny and warm weather.',
              'This weekend they are forecasting cold and rainy weather.',
              'Next weekend they are forecasting sunny weather.',
              'This weekend they are forecasting cloudy weather.',
            ],
          },
          {
            hr: 'U subotu ujutro planiramo ići na izlet u planine.',
            en: 'On Saturday morning we plan to go on a trip to the mountains.',
            opts: [
              'On Sunday morning we plan to go on a trip to the mountains.',
              'On Saturday evening we plan to go on a trip to the mountains.',
              'On Saturday morning we plan to go on a trip to the mountains.',
              'On Saturday morning we plan to go to the seaside.',
            ],
          },
          {
            hr: 'Poslijepodne ćemo se vratiti prije nego što padne kiša.',
            en: 'In the afternoon we will come back before it starts to rain.',
            opts: [
              'In the morning we will come back before it starts to rain.',
              'In the afternoon we will come back before it starts to rain.',
              'In the afternoon we will come back after it starts to rain.',
              'In the afternoon we will leave before it starts to rain.',
            ],
          },
          {
            hr: 'U nedjelju će navodno biti oblačno i vjetrovito.',
            en: 'On Sunday it is supposedly going to be cloudy and windy.',
            opts: [
              'On Monday it is supposedly going to be cloudy and windy.',
              'On Sunday it is supposedly going to be sunny and calm.',
              'On Sunday it is definitely going to be cloudy and windy.',
              'On Sunday it is supposedly going to be cloudy and windy.',
            ],
          },
          {
            hr: 'Zato smo odlučili ostati kod kuće i odmoriti se.',
            en: 'That is why we decided to stay home and rest.',
            opts: [
              'That is why we decided to stay home and rest.',
              'That is why we decided to go out despite the rain.',
              'That is why we decided to travel anyway.',
              'That is why we decided to stay home and work.',
            ],
          },
        ],
      },
      {
        title: 'Na tržnici — razgovor',
        icon: '🍅',
        // Two-voice dialogue (listening-depth, 2026-08-14): played line by line
        // with alternating native narrators before the per-sentence quiz.
        dialogue: [
          { s: 'A', hr: 'Dobar dan! Izvolite?' },
          { s: 'B', hr: 'Dobar dan. Molim vas kilogram rajčica.' },
          { s: 'A', hr: 'Naravno. Želite li još nešto?' },
          { s: 'B', hr: 'Imate li svježih smokava?' },
          { s: 'A', hr: 'Imamo, jutros su stigle s otoka.' },
          { s: 'B', hr: 'Onda pola kilograma, molim. Koliko košta sve skupa?' },
          { s: 'A', hr: 'Šest eura i dvadeset centi.' },
          { s: 'B', hr: 'Izvolite. Hvala vam lijepa!' },
          { s: 'A', hr: 'Hvala vama. Dođite nam opet!' },
        ],
        questions: [
          {
            hr: 'Molim vas kilogram rajčica.',
            en: 'A kilo of tomatoes, please.',
            opts: [
              'A kilo of peppers, please.',
              'A kilo of tomatoes, please.',
              'Half a kilo of tomatoes, please.',
              'A bag of tomatoes, please.',
            ],
          },
          {
            hr: 'Želite li još nešto?',
            en: 'Would you like anything else?',
            opts: [
              'Would you like anything else?',
              'Do you want to try it?',
              'Is that everything?',
              'Would you like a bag?',
            ],
          },
          {
            hr: 'Imate li svježih smokava?',
            en: 'Do you have fresh figs?',
            opts: [
              'Do you have fresh grapes?',
              'Are the figs fresh?',
              'Do you have fresh figs?',
              'Do you sell dried figs?',
            ],
          },
          {
            hr: 'Imamo, jutros su stigle s otoka.',
            en: 'We do — they arrived from the island this morning.',
            opts: [
              'We do — they arrived from the village this morning.',
              'We do — they arrived from the island this morning.',
              'We will get them from the island tomorrow.',
              'We do — they were picked on the island yesterday.',
            ],
          },
          {
            hr: 'Koliko košta sve skupa?',
            en: 'How much does it all cost together?',
            opts: [
              'How much do the figs cost?',
              'How much does it all cost together?',
              'Is everything so expensive?',
              'What does a kilo cost?',
            ],
          },
          {
            hr: 'Dođite nam opet!',
            en: 'Come see us again!',
            opts: [
              'Come see us again!',
              'See you tomorrow!',
              'Take care of yourself!',
              'Come back for the change!',
            ],
          },
        ],
      },
    ],
  },
  B1: {
    label: 'B1 — Intermediate',
    color: '#d97706',
    headerBg: 'linear-gradient(135deg,#d97706,#92400e)',
    bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)',
    border: '#fde68a',
    desc: 'Conversations and descriptions — travel, plans and expressing opinions',
    sets: [
      {
        title: 'Travel & Directions',
        icon: '✈️',
        questions: [
          {
            hr: 'Vlak za Rijeku polazi u deset i petnaest.',
            en: 'The train to Rijeka departs at ten fifteen.',
            opts: [
              'The train to Rijeka arrives at ten fifteen.',
              'The bus to Rijeka departs at ten fifteen.',
              'The train to Zagreb departs at ten fifteen.',
              'The train to Rijeka departs at ten fifteen.',
            ],
          },
          {
            hr: 'Trebam rezervirati sobu za tri noći.',
            en: 'I need to book a room for three nights.',
            opts: [
              'I need to book a room for two nights.',
              'I need to cancel a room for three nights.',
              'I need to book a table for three people.',
              'I need to book a room for three nights.',
            ],
          },
          {
            hr: 'Plitvička jezera su proglašena zaštićenim parkom 1949. godine.',
            en: 'Plitvice Lakes were declared a protected park in 1949.',
            opts: [
              'Plitvice Lakes became a UNESCO site in 1949.',
              'Krka National Park was founded in 1949.',
              'Plitvice Lakes were declared a protected park in 1979.',
              'Plitvice Lakes were declared a protected park in 1949.',
            ],
          },
          {
            hr: 'Skrenite lijevo kod semafora, a zatim idite ravno.',
            en: 'Turn left at the traffic lights, then go straight on.',
            opts: [
              'Turn right at the crossroads, then turn left.',
              'Turn left at the traffic lights, then go straight on.',
              'Go straight ahead, then turn left at the lights.',
              'Turn left at the corner, then turn right at the lights.',
            ],
          },
          {
            hr: 'Imam alergiju na morske plodove.',
            en: 'I have an allergy to seafood.',
            opts: [
              'I love seafood dishes.',
              'I have an allergy to nuts.',
              'I have an allergy to seafood.',
              'I cannot eat spicy food.',
            ],
          },
        ],
      },
      {
        title: 'Opinions & Plans',
        icon: '💬',
        questions: [
          {
            hr: 'Mislim da je hrvatski jezik težak, ali jako lijep.',
            en: 'I think Croatian is difficult, but very beautiful.',
            opts: [
              'I think Croatian is easy and fun.',
              'He thinks Croatian is the hardest language.',
              'I think Croatian is difficult, but very beautiful.',
              'She thinks Croatian is difficult and boring.',
            ],
          },
          {
            hr: 'Idućeg ljeta planiramo otići na Hvar.',
            en: 'Next summer we plan to go to Hvar.',
            opts: [
              'Last summer we went to Hvar.',
              'Next winter we plan to go to Hvar.',
              'Next summer we plan to go to Hvar.',
              'Next summer they plan to go to Korčula.',
            ],
          },
          {
            hr: 'Ako bude lijepog vremena, idemo na plažu.',
            en: 'If the weather is nice, we will go to the beach.',
            opts: [
              'When the weather is nice, we go to the beach.',
              'If the weather is nice, we will go to the beach.',
              'Because the weather was nice, we went to the beach.',
              'Although the weather was nice, we stayed at home.',
            ],
          },
          {
            hr: 'Volim more, ali bojim se dubloke vode.',
            en: 'I love the sea, but I am afraid of deep water.',
            opts: [
              'I love the sea and I am a strong swimmer.',
              'I hate the sea because I am afraid of water.',
              'I love the sea, but I am afraid of deep water.',
              'She loves the sea but cannot swim.',
            ],
          },
          {
            hr: 'Baka mi je naučila kako se priprema sarma.',
            en: 'My grandmother taught me how to prepare sarma.',
            opts: [
              'My mother learned how to make sarma from a book.',
              'My grandmother bought sarma at the market.',
              'My grandmother taught me how to prepare sarma.',
              'My aunt showed me how to make burek.',
            ],
          },
        ],
      },
      {
        title: 'Work & Study',
        icon: '📚',
        questions: [
          {
            hr: 'Radim od devet do pet, od ponedjeljka do petka.',
            en: 'I work from nine to five, Monday to Friday.',
            opts: [
              'I study from nine to five every day.',
              'I work from eight to four, Monday to Saturday.',
              'I work from nine to five, Monday to Friday.',
              'I work from nine to five, Tuesday to Saturday.',
            ],
          },
          {
            hr: 'Tražim posao u struci — završio sam ekonomski fakultet.',
            en: 'I am looking for a job in my field — I graduated from the economics faculty.',
            opts: [
              'I am looking for a job in law — I graduated from the law faculty.',
              'I am looking for a job in my field — I graduated from the economics faculty.',
              'I am looking for an internship — I am still studying economics.',
              'I finished medical school and I am now looking for a hospital placement.',
            ],
          },
          {
            hr: 'Kolegij počinje u deset i pol i traje dva sata.',
            en: 'The lecture starts at half past ten and lasts two hours.',
            opts: [
              'The seminar starts at ten and lasts one hour.',
              'The lecture starts at half past nine and lasts two hours.',
              'The lecture starts at half past ten and lasts two hours.',
              'The exam starts at half past ten and lasts three hours.',
            ],
          },
          {
            hr: 'Učim za ispit cijeli tjedan i tek ću vidjeti hoće li biti dovoljno.',
            en: 'I have been studying for the exam all week and will just have to see if it will be enough.',
            opts: [
              'I studied for the exam yesterday and I am confident I will pass.',
              'I have been studying for the exam all week and will just have to see if it will be enough.',
              'She gave up studying for the exam because it was too difficult.',
              'I passed the exam without studying because it was easy.',
            ],
          },
          {
            hr: 'Prijevod mora biti gotov do petka jer izdavač čeka na rukopis.',
            en: 'The translation must be finished by Friday because the publisher is waiting for the manuscript.',
            opts: [
              'The translation must be finished by Monday because the author is waiting.',
              'The report must be ready by Friday because the client is expecting it.',
              'The translation must be finished by Friday because the publisher is waiting for the manuscript.',
              'The manuscript must be edited by Friday for the annual conference.',
            ],
          },
          {
            hr: 'Svima je jasno da digitalne vještine postaju sve važnije na tržištu rada.',
            en: 'It is clear to everyone that digital skills are becoming increasingly important in the job market.',
            opts: [
              'Most employers still prefer candidates with traditional rather than digital skills.',
              'Digital skills are only important for young people entering the job market.',
              'It is clear to everyone that digital skills are becoming increasingly important in the job market.',
              'The job market in Croatia remains focused on manual trades rather than technology.',
            ],
          },
        ],
      },
      {
        title: 'Health & Feelings',
        icon: '🩺',
        questions: [
          {
            hr: 'Boli me glava već dva dana.',
            en: 'My head has been aching for two days.',
            opts: [
              'My head has been aching for two days.',
              'My tooth has been aching for two days.',
              'My head started aching two hours ago.',
              'My back aches every two days.',
            ],
          },
          {
            hr: 'Naručio sam se kod zubara za petak.',
            en: 'I made a dentist appointment for Friday.',
            opts: [
              'I made a dentist appointment for Friday.',
              'I cancelled my dentist appointment on Friday.',
              'I made a doctor’s appointment for Monday.',
              'I visited the dentist last Friday.',
            ],
          },
          {
            hr: 'Da sam znao, došao bih ranije.',
            en: 'Had I known, I would have come earlier.',
            opts: [
              'Had I known, I would have come earlier.',
              'If I know, I will come earlier.',
              'Since I knew, I came earlier.',
              'Had I known, I would have stayed home.',
            ],
          },
          {
            hr: 'Veselim se tvom dolasku.',
            en: 'I am looking forward to your arrival.',
            opts: [
              'I am looking forward to your arrival.',
              'I am worried about your arrival.',
              'I remember your arrival.',
              'I am looking forward to your party.',
            ],
          },
          {
            hr: 'Iako je padala kiša, otišli smo na izlet.',
            en: 'Although it was raining, we went on a trip.',
            opts: [
              'Although it was raining, we went on a trip.',
              'Because it was raining, we cancelled the trip.',
              'It was raining, so we stayed home.',
              'Although it was sunny, we went on a trip.',
            ],
          },
          {
            hr: 'Trebala bi se više odmarati.',
            en: 'You should rest more.',
            opts: [
              'You should rest more.',
              'You must work more.',
              'You wanted to rest more.',
              'You should sleep less.',
            ],
          },
          {
            hr: 'Čim završim posao, javit ću ti se.',
            en: 'As soon as I finish work, I will get in touch.',
            opts: [
              'As soon as I finish work, I will get in touch.',
              'Before I finish work, I will call you.',
              'When I finished work, I got in touch.',
              'As soon as I start work, I will get in touch.',
            ],
          },
          {
            hr: 'Nisam siguran hoću li stići na vrijeme.',
            en: 'I am not sure whether I will make it on time.',
            opts: [
              'I am not sure whether I will make it on time.',
              'I am sure I will make it on time.',
              'I am not sure when it starts.',
              'I know I will be late.',
            ],
          },
        ],
      },

      {
        title: 'Connected Speech: Trip to Split',
        icon: '🔗',
        passage:
          'Prošlog vikenda putovali smo u Split. Vlak je kasnio pola sata, ali nismo se ljutili. U gradu smo posjetili Dioklecijanovu palaču. Ručali smo ribu u maloj konobi kraj mora. Kući smo se vratili umorni, ali sretni.',
        questions: [
          {
            hr: 'Prošlog vikenda putovali smo u Split.',
            en: 'Last weekend we travelled to Split.',
            opts: [
              'Last weekend we travelled to Split.',
              'Next weekend we are travelling to Split.',
              'Last weekend we moved to Split.',
              'Last week we flew to Split.',
            ],
          },
          {
            hr: 'Vlak je kasnio pola sata, ali nismo se ljutili.',
            en: 'The train was half an hour late, but we were not angry.',
            opts: [
              'The train was half an hour late, but we were not angry.',
              'The train was an hour late, so we were angry.',
              'The bus was half an hour late, but we did not mind.',
              'The train arrived half an hour early.',
            ],
          },
          {
            hr: 'U gradu smo posjetili Dioklecijanovu palaču.',
            en: "In the city we visited Diocletian's Palace.",
            opts: [
              "In the city we visited Diocletian's Palace.",
              "In the city we saw Diocletian's statue.",
              'Outside the city we visited a palace.',
              "We stayed at a hotel near Diocletian's Palace.",
            ],
          },
          {
            hr: 'Ručali smo ribu u maloj konobi kraj mora.',
            en: 'We had fish for lunch in a small tavern by the sea.',
            opts: [
              'We had fish for lunch in a small tavern by the sea.',
              'We had dinner in a big restaurant by the sea.',
              'We caught fish in the sea near a tavern.',
              'We had meat for lunch in a small tavern.',
            ],
          },
          {
            hr: 'Kući smo se vratili umorni, ali sretni.',
            en: 'We returned home tired but happy.',
            opts: [
              'We returned home tired but happy.',
              'We returned home late and unhappy.',
              'We stayed at home, tired but happy.',
              'They returned home tired but happy.',
            ],
          },
        ],
      },
      // ── 2026-07 connected-speech expansion (3 per level) ──
      {
        title: 'Connected Speech: The Job Interview',
        icon: '🔗',
        passage:
          'Prošlog utorka imala sam razgovor za posao u jednoj zagrebačkoj tvrtki. Bila sam jako nervozna, pa sam stigla petnaest minuta ranije. Poslodavac me je pitao o mom iskustvu i o razlozima za promjenu posla. Odgovorila sam iskreno, iako mi je glas malo drhtao. Na kraju su mi rekli da ću odgovor dobiti idućeg tjedna.',
        questions: [
          {
            hr: 'Prošlog utorka imala sam razgovor za posao u jednoj zagrebačkoj tvrtki.',
            en: 'Last Tuesday I had a job interview at a company in Zagreb.',
            opts: [
              'Last Tuesday I started a new job at a company in Zagreb.',
              'Last Tuesday I had a job interview at a company in Zagreb.',
              'Last Friday I had a job interview at a company in Zagreb.',
              'Last Tuesday I had a job interview at a company in Split.',
            ],
          },
          {
            hr: 'Bila sam jako nervozna, pa sam stigla petnaest minuta ranije.',
            en: 'I was very nervous, so I arrived fifteen minutes early.',
            opts: [
              'I was very nervous, so I arrived fifteen minutes early.',
              'I was very calm, so I arrived exactly on time.',
              'I was very nervous, so I arrived fifteen minutes late.',
              'I was very nervous, so I left fifteen minutes early.',
            ],
          },
          {
            hr: 'Poslodavac me je pitao o mom iskustvu i o razlozima za promjenu posla.',
            en: 'The employer asked me about my experience and my reasons for changing jobs.',
            opts: [
              'The employer asked me only about my education.',
              'The employer asked me about my salary expectations.',
              'The employer asked me about my experience and my reasons for changing jobs.',
              'The employer asked my colleague about his experience.',
            ],
          },
          {
            hr: 'Odgovorila sam iskreno, iako mi je glas malo drhtao.',
            en: 'I answered honestly, even though my voice trembled a little.',
            opts: [
              'I answered vaguely, because my voice trembled a little.',
              'I refused to answer because I was too nervous.',
              'I answered honestly, and my voice was completely steady.',
              'I answered honestly, even though my voice trembled a little.',
            ],
          },
          {
            hr: 'Na kraju su mi rekli da ću odgovor dobiti idućeg tjedna.',
            en: 'At the end they told me I would get an answer the following week.',
            opts: [
              'At the end they told me I would get an answer the following week.',
              'At the end they told me I did not get the job.',
              'At the end they told me to call them the next day.',
              'At the end they told me the answer immediately.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Finding an Apartment',
        icon: '🔗',
        passage:
          'Već mjesec dana tražim stan za najam u centru grada. Pogledala sam nekoliko oglasa na internetu, ali cijene su prilično visoke. Jučer sam napokon razgledala jedan mali dvosobni stan blizu fakulteta. Vlasnica je bila ljubazna i odmah mi je pokazala sve prostorije. Stan mi se svidio, pa sam odlučila potpisati ugovor sljedeći tjedan.',
        questions: [
          {
            hr: 'Već mjesec dana tražim stan za najam u centru grada.',
            en: 'I have been looking for an apartment to rent in the city centre for a month.',
            opts: [
              'I found an apartment to rent in the city centre yesterday.',
              'I have been looking for an apartment to rent in the city centre for a month.',
              'I have been looking for a house to buy in the city centre.',
              'I have been looking for an apartment on the outskirts of the city.',
            ],
          },
          {
            hr: 'Pogledala sam nekoliko oglasa na internetu, ali cijene su prilično visoke.',
            en: 'I looked at several ads online, but the prices are quite high.',
            opts: [
              'I looked at several ads online, but the prices are quite high.',
              'I looked at several ads online, and the prices are very low.',
              'I placed an ad online myself, and it was expensive.',
              'I looked at one ad online, and the price was fair.',
            ],
          },
          {
            hr: 'Jučer sam napokon razgledala jedan mali dvosobni stan blizu fakulteta.',
            en: 'Yesterday I finally viewed a small two-room apartment near the university.',
            opts: [
              'Yesterday I finally viewed a large three-room apartment near the university.',
              'Tomorrow I will finally view a small apartment near the university.',
              'Yesterday I finally viewed a small two-room apartment near the university.',
              'Yesterday I finally viewed a small apartment far from the university.',
            ],
          },
          {
            hr: 'Vlasnica je bila ljubazna i odmah mi je pokazala sve prostorije.',
            en: 'The landlady was kind and immediately showed me all the rooms.',
            opts: [
              'The landlady was rude and refused to show me the rooms.',
              'The landlord was kind and showed me only one room.',
              'The landlady was busy, so she could not show me the rooms.',
              'The landlady was kind and immediately showed me all the rooms.',
            ],
          },
          {
            hr: 'Stan mi se svidio, pa sam odlučila potpisati ugovor sljedeći tjedan.',
            en: 'I liked the apartment, so I decided to sign the contract next week.',
            opts: [
              'I liked the apartment, so I decided to sign the contract next week.',
              'I liked the apartment, but I decided not to sign anything.',
              'I did not like the apartment, so I kept looking.',
              'I liked the apartment, so I signed the contract immediately.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: A Trip to Zadar',
        icon: '🔗',
        passage:
          'Prošlog mjeseca putovali smo autom prema Zadru na ljetovanje. Na pola puta nam se auto pokvario usred autoceste. Srećom, jedan vozač se zaustavio i pozvao je šlep-službu za nas. Čekali smo skoro dva sata dok nije stigla pomoć. Unatoč kvaru, odmor je na kraju bio prekrasan.',
        questions: [
          {
            hr: 'Prošlog mjeseca putovali smo autom prema Zadru na ljetovanje.',
            en: 'Last month we travelled by car towards Zadar for our summer holiday.',
            opts: [
              'Last month we travelled by train towards Zadar for our summer holiday.',
              'Next month we are travelling by car towards Zadar for our summer holiday.',
              'Last month we travelled by car towards Zadar for our summer holiday.',
              'Last month we travelled by car towards Split for our summer holiday.',
            ],
          },
          {
            hr: 'Na pola puta nam se auto pokvario usred autoceste.',
            en: 'Halfway there, our car broke down in the middle of the motorway.',
            opts: [
              'Halfway there, our car broke down in the middle of the motorway.',
              'At the very start, our car broke down in a car park.',
              'Near the end of the trip, our car ran out of fuel.',
              'Halfway there, our car broke down at a petrol station.',
            ],
          },
          {
            hr: 'Srećom, jedan vozač se zaustavio i pozvao je šlep-službu za nas.',
            en: 'Luckily, a driver stopped and called a tow service for us.',
            opts: [
              'Unluckily, no driver stopped to help us.',
              'Luckily, a police officer stopped and called an ambulance for us.',
              'Luckily, a driver stopped and gave us a ride to Zadar.',
              'Luckily, a driver stopped and called a tow service for us.',
            ],
          },
          {
            hr: 'Čekali smo skoro dva sata dok nije stigla pomoć.',
            en: 'We waited almost two hours until help arrived.',
            opts: [
              'We waited almost thirty minutes until help arrived.',
              'We waited almost two hours until help arrived.',
              'We waited all day, but help never arrived.',
              'We waited almost two hours, but then gave up.',
            ],
          },
          {
            hr: 'Unatoč kvaru, odmor je na kraju bio prekrasan.',
            en: 'Despite the breakdown, the holiday ended up being wonderful.',
            opts: [
              'Despite the breakdown, the holiday ended up being wonderful.',
              'Because of the breakdown, the holiday was ruined completely.',
              'Despite the breakdown, we decided to cancel the rest of the holiday.',
              'Despite the breakdown, the holiday was only average.',
            ],
          },
        ],
      },
      {
        title: 'Dogovor za vikend',
        icon: '🗓️',
        dialogue: [
          { s: 'A', hr: 'Bog, Marko! Kakvi su ti planovi za vikend?' },
          { s: 'B', hr: 'Bog! Još ne znam. Razmišljam o izletu na Plitvice.' },
          { s: 'A', hr: 'Odlična ideja! Smijem li se pridružiti?' },
          { s: 'B', hr: 'Naravno! Krećemo u subotu rano ujutro.' },
          { s: 'A', hr: 'U koliko sati točno?' },
          { s: 'B', hr: 'U šest, da izbjegnemo gužvu na cesti.' },
          { s: 'A', hr: 'Uh, to mi je prerano. Može u sedam?' },
          { s: 'B', hr: 'Dobro, može. Ali onda nećemo stići prije podneva.' },
          { s: 'A', hr: 'Nema veze. Glavno da vidimo jezera prije mraka.' },
          { s: 'B', hr: 'Dogovoreno. Vidimo se u subotu!' },
        ],
        questions: [
          {
            hr: 'Kakvi su ti planovi za vikend?',
            en: 'What are your plans for the weekend?',
            opts: [
              'What are your plans for the weekend?',
              'What are your plans for the summer?',
              'Do you have time this weekend?',
              'Where are you going for the weekend?',
            ],
          },
          {
            hr: 'Razmišljam o izletu na Plitvice.',
            en: 'I am thinking about a trip to Plitvice.',
            opts: [
              'I am planning to move to Plitvice.',
              'I am thinking about a trip to Plitvice.',
              'I have already been to Plitvice.',
              'I dream about the Plitvice lakes.',
            ],
          },
          {
            hr: 'Smijem li se pridružiti?',
            en: 'May I join you?',
            opts: [
              'Should I drive?',
              'Can you pick me up?',
              'May I join you?',
              'May I invite a friend?',
            ],
          },
          {
            hr: 'U šest, da izbjegnemo gužvu na cesti.',
            en: 'At six, so that we avoid the traffic on the road.',
            opts: [
              'At six, so that we avoid the traffic on the road.',
              'At six, before the road is closed.',
              'At seven, when there is less traffic.',
              'At six, because the park opens early.',
            ],
          },
          {
            hr: 'Ali onda nećemo stići prije podneva.',
            en: 'But then we will not arrive before noon.',
            opts: [
              'But then we will not arrive before evening.',
              'But then we will not arrive before noon.',
              'But then we cannot leave before noon.',
              'But we might still arrive around noon.',
            ],
          },
          {
            hr: 'Glavno da vidimo jezera prije mraka.',
            en: 'The main thing is that we see the lakes before dark.',
            opts: [
              'The main thing is that we see the lakes before dark.',
              'I hope the lakes are open before dark.',
              'We must leave the lakes before dark.',
              'The lakes are most beautiful in the dark.',
            ],
          },
        ],
      },
    ],
  },
  B2: {
    label: 'B2 — Upper Intermediate',
    color: '#7c3aed',
    headerBg: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
    bg: 'linear-gradient(135deg,#faf5ff,#ede9fe)',
    border: '#ddd6fe',
    desc: 'Complex sentences, nuance, culture and abstract topics',
    sets: [
      {
        title: 'Culture & History',
        icon: '🏛️',
        questions: [
          {
            hr: 'Hrvatska je postala članica Europske unije 2013. godine, što je bio važan korak za njenu europsku budućnost.',
            en: 'Croatia joined the European Union in 2013, which was an important step for its European future.',
            opts: [
              'Croatia joined the EU in 2004 as the eighth member.',
              'Croatia joined the EU in 2013, completing accession talks started in 2005.',
              'Croatia joined the European Union in 2013, which was an important step for its European future.',
              'Croatia applied for EU membership in 2013 but did not join until 2020.',
            ],
          },
          {
            hr: 'Dubrovnik je u 14. stoljeću razvio jedan od prvih sustava karantene na svijetu.',
            en: 'Dubrovnik developed one of the first quarantine systems in the world in the 14th century.',
            opts: [
              'Venice invented the quarantine system in the 15th century.',
              'Dubrovnik developed one of the first quarantine systems in the world in the 14th century.',
              'Dubrovnik established the first hospital in Europe in the 14th century.',
              'Dubrovnik became a free republic in the 14th century.',
            ],
          },
          {
            hr: 'Kravata, koju danas svi nose, dobila je ime po hrvatskim vojnicima koji su je nosili u 17. stoljeću.',
            en: 'The necktie, which everyone wears today, got its name from Croatian soldiers who wore it in the 17th century.',
            opts: [
              'The necktie was invented in France in the 18th century.',
              'Croatian soldiers in the 17th century wore a neck cloth that inspired the French word cravate.',
              'The necktie, which everyone wears today, got its name from Croatian soldiers who wore it in the 17th century.',
              'The word cravat comes from the Slavic word for a scarf worn in the 16th century.',
            ],
          },
          {
            hr: 'Nikola Tesla, iako rodom iz Smiljana u Lici, školovao se i radio u nekoliko europskih zemalja prije nego što je emigrirao u Ameriku.',
            en: 'Nikola Tesla, although born in Smiljan in Lika, studied and worked in several European countries before emigrating to America.',
            opts: [
              'Nikola Tesla was born in Serbia and moved to Croatia as a child.',
              'Nikola Tesla emigrated directly from his birthplace to America without working in Europe.',
              'Nikola Tesla, although born in Smiljan in Lika, studied and worked in several European countries before emigrating to America.',
              'Nikola Tesla spent his entire career in Vienna before moving to New York.',
            ],
          },
          {
            hr: 'Sinjska alka, viteška igra koja se održava svake godine u Sinju, uvrštena je na UNESCO-ov popis nematerijalne kulturne baštine.',
            en: 'The Sinjska Alka, a knightly tournament held every year in Sinj, is inscribed on the UNESCO list of intangible cultural heritage.',
            opts: [
              'The Sinjska Alka is a folk dance festival held annually in Split.',
              'The Sinjska Alka was removed from the UNESCO heritage list in 2010.',
              'The Sinjska Alka, a knightly tournament held every year in Sinj, is inscribed on the UNESCO list of intangible cultural heritage.',
              'The Sinjska Alka is a rowing competition on the Cetina river near Sinj.',
            ],
          },
          {
            hr: 'Klapa je oblik a cappella višeglasnog pjevanja koji potječe iz Dalmacije i danas je simbol hrvatskog kulturnog identiteta.',
            en: 'Klapa is a form of a cappella polyphonic singing originating in Dalmatia and today a symbol of Croatian cultural identity.',
            opts: [
              'Klapa is an instrument similar to a mandolin that is unique to the island of Brač.',
              'Klapa refers to a type of traditional Croatian dance performed at weddings.',
              'Klapa is a form of a cappella polyphonic singing originating in Dalmatia and today a symbol of Croatian cultural identity.',
              'Klapa is a festival of sacred music held in Dubrovnik each summer.',
            ],
          },
          {
            hr: 'Zlatna kuna, proglašena najljepšom valutom na svijetu, bila je u optjecaju od 1994. do 2023., kada je Hrvatska prešla na euro.',
            en: 'The gold kuna, named the most beautiful currency in the world, was in circulation from 1994 to 2023, when Croatia switched to the euro.',
            opts: [
              'Croatia adopted the euro in 2013 when it joined the European Union.',
              'The kuna was replaced by the euro after a public referendum in 2022.',
              'The gold kuna, named the most beautiful currency in the world, was in circulation from 1994 to 2023, when Croatia switched to the euro.',
              'The Croatian kuna was introduced in 1991 when Croatia declared independence.',
            ],
          },
        ],
      },
      {
        title: 'Abstract & Nuanced',
        icon: '🎭',
        questions: [
          {
            hr: 'Što se tiče naše tradicije, važno je da mladi naraštaji nauče ne samo jezik nego i vrijednosti koje se prenose s koljena na koljeno.',
            en: 'As far as our tradition is concerned, it is important that young generations learn not just the language but also the values passed down through generations.',
            opts: [
              'Young people today do not appreciate traditional values as much as their grandparents did.',
              'Language is the most important part of any tradition and should be preserved.',
              'As far as our tradition is concerned, it is important that young generations learn not just the language but also the values passed down through generations.',
              'Our tradition requires that children speak only Croatian at home.',
            ],
          },
          {
            hr: 'Diaspora Hrvata u Sjevernoj Americi čuva jezik i kulturu kroz zajednička društva, crkve i tečajeve hrvatskog.',
            en: 'The Croatian diaspora in North America preserves the language and culture through community organizations, churches and Croatian language classes.',
            opts: [
              'Croatian immigrants in North America have mostly forgotten their language within two generations.',
              'The Croatian diaspora in Australia is larger than in North America.',
              'The Croatian diaspora in North America preserves the language and culture through community organizations, churches and Croatian language classes.',
              'Croatian language classes in North America are mostly attended by non-Croatians.',
            ],
          },
          {
            hr: 'Glagoljaška tradicija, odnosno pisanje na glagoljici, dio je posebnog identiteta koji razlikuje hrvatsko kršćanstvo od ostalih europskih tradicija.',
            en: 'The Glagolitic tradition, that is, writing in the Glagolitic script, is part of a special identity that distinguishes Croatian Christianity from other European traditions.',
            opts: [
              'Glagolitic script was invented by Saints Cyril and Methodius for the Bulgarians.',
              'The Glagolitic tradition disappeared from Croatia in the 15th century.',
              'Glagolitic script is used in Croatia today for official church documents.',
              'The Glagolitic tradition, that is, writing in the Glagolitic script, is part of a special identity that distinguishes Croatian Christianity from other European traditions.',
            ],
          },
          {
            hr: 'Pojam "čakavski" označava jedan od triju narječja hrvatskog jezika, koji se govori pretežno na otocima i u Istri.',
            en: 'The term "Chakavian" refers to one of the three dialects of the Croatian language, spoken mainly on the islands and in Istria.',
            opts: [
              'Chakavian is the standard dialect used in Croatian schools and media.',
              'Chakavian is spoken only in the city of Zagreb and its surroundings.',
              'The term "Chakavian" refers to one of the three dialects of the Croatian language, spoken mainly on the islands and in Istria.',
              'Chakavian refers to a form of writing developed by monks in medieval Dalmatia.',
            ],
          },
          {
            hr: 'Upravo zbog geografske raznolikosti, od panonske ravnice do Jadrana, Hrvatska posjeduje iznimnu biološku raznovrsnost.',
            en: 'Precisely because of its geographic diversity, from the Pannonian plain to the Adriatic, Croatia possesses exceptional biodiversity.',
            opts: [
              'Croatia has low biodiversity because of its small size and warm climate.',
              "Croatia's biodiversity is threatened primarily by coastal development along the Adriatic.",
              'Precisely because of its geographic diversity, from the Pannonian plain to the Adriatic, Croatia possesses exceptional biodiversity.',
              'The Pannonian plain in Croatia is the most biodiverse region due to its rich soil.',
            ],
          },
          {
            hr: 'U suvremenom hrvatskom društvu sve je veći jaz između urbanih i ruralnih sredina, što utječe na demografsku sliku cijele države.',
            en: 'In modern Croatian society the gap between urban and rural areas is growing, which affects the demographic picture of the whole country.',
            opts: [
              'Croatian rural areas are growing faster than cities due to agricultural subsidies.',
              'The gap between rich and poor in Croatia has stayed the same over the past decade.',
              'In modern Croatian society the gap between urban and rural areas is growing, which affects the demographic picture of the whole country.',
              'Croatia has successfully reversed rural depopulation through government resettlement programmes.',
            ],
          },
        ],
      },
      {
        title: 'Media & Society',
        icon: '📰',
        questions: [
          {
            hr: 'Sloboda medija i neovisnost novinara ključni su za funkcioniranje demokratskog društva.',
            en: 'Media freedom and journalist independence are essential for a functioning democratic society.',
            opts: [
              'Government ownership of media ensures accurate and unbiased reporting.',
              'Media freedom and journalist independence are essential for a functioning democratic society.',
              'The internet has made traditional journalism completely irrelevant.',
              'Only public broadcasters can guarantee freedom of the press.',
            ],
          },
          {
            hr: 'Hrvatska kinematografija doživjela je međunarodni proboj zahvaljujući filmovima koji prikazuju ratnu traumu i poslijeratnu obnovu.',
            en: 'Croatian cinematography gained international recognition thanks to films depicting war trauma and post-war reconstruction.',
            opts: [
              "Croatian cinema is known mainly for animated films and children's stories.",
              'Croatian films have had no international recognition due to the language barrier.',
              'Croatian cinematography gained international recognition thanks to films depicting war trauma and post-war reconstruction.',
              'Croatian cinema focuses primarily on romantic comedies set in Dalmatia.',
            ],
          },
          {
            hr: 'Sve veća upotreba digitalnih medija mijenja načine na koje mladi Hrvati konzumiraju vijesti i kulturu.',
            en: 'The growing use of digital media is changing the ways in which young Croatians consume news and culture.',
            opts: [
              'Young Croatians prefer printed newspapers to online news sources.',
              'Digital media has had no significant impact on Croatian cultural consumption.',
              'The growing use of digital media is changing the ways in which young Croatians consume news and culture.',
              'Croatian television viewership has increased dramatically since the rise of streaming platforms.',
            ],
          },
          {
            hr: 'Turizam čini znatan udio u hrvatskom BDP-u, no donosi i izazove poput sezonalnosti i pritiska na okoliš.',
            en: "Tourism makes up a significant share of Croatia's GDP, but also brings challenges such as seasonality and environmental pressure.",
            opts: [
              'Tourism in Croatia is evenly distributed throughout the year with no seasonal peaks.',
              'Croatia has banned further tourist development to protect its natural environment.',
              "Tourism makes up a significant share of Croatia's GDP, but also brings challenges such as seasonality and environmental pressure.",
              'Croatian tourism is dominated by domestic visitors rather than international tourists.',
            ],
          },
          {
            hr: 'Emigracija mladih obrazovanih Hrvata u zapadnu Europu postala je jedan od glavnih demografskih izazova s kojima se zemlja suočava.',
            en: 'The emigration of young educated Croatians to western Europe has become one of the main demographic challenges the country faces.',
            opts: [
              'Croatia has seen a large influx of foreign workers replacing those who have emigrated.',
              'The emigration of Croatians peaked in the 1970s during socialist Yugoslavia.',
              'The emigration of young educated Croatians to western Europe has become one of the main demographic challenges the country faces.',
              "Croatia's population is growing steadily due to high birth rates and immigration.",
            ],
          },
        ],
      },
      {
        title: 'Work & Argument',
        icon: '💼',
        questions: [
          {
            hr: 'Unatoč krizi, tvrtka je povećala broj zaposlenih.',
            en: 'Despite the crisis, the company increased its workforce.',
            opts: [
              'Despite the crisis, the company increased its workforce.',
              'Because of the crisis, the company cut its workforce.',
              'During the crisis, the company went bankrupt.',
              'Despite the crisis, the company froze hiring.',
            ],
          },
          {
            hr: 'Da se mene pita, sastanci bi trajali upola kraće.',
            en: 'If it were up to me, meetings would be half as long.',
            opts: [
              'If it were up to me, meetings would be half as long.',
              'If they asked me, meetings would be twice as long.',
              'Nobody asks me about the meetings.',
              'In my opinion, meetings are too short.',
            ],
          },
          {
            hr: 'Izvješće mora biti predano do kraja tjedna.',
            en: 'The report must be submitted by the end of the week.',
            opts: [
              'The report must be submitted by the end of the week.',
              'The report was submitted at the start of the week.',
              'The report may be submitted next month.',
              'The report must be rewritten by tomorrow.',
            ],
          },
          {
            hr: 'Što se mene tiče, možemo početi odmah.',
            en: 'As far as I am concerned, we can start right away.',
            opts: [
              'As far as I am concerned, we can start right away.',
              'As far as I know, we already started.',
              'If you ask me, we should wait.',
              'As for him, he can start right away.',
            ],
          },
          {
            hr: 'Pregovori su prekinuti zbog nesuglasica oko cijene.',
            en: 'The negotiations were broken off due to disagreements over the price.',
            opts: [
              'The negotiations were broken off due to disagreements over the price.',
              'The negotiations succeeded thanks to the price.',
              'The negotiations continued despite the price.',
              'The negotiations were postponed due to illness.',
            ],
          },
          {
            hr: 'Koliko god se trudio, nije uspio sve stići.',
            en: 'However hard he tried, he could not get everything done.',
            opts: [
              'However hard he tried, he could not get everything done.',
              'Because he tried hard, he got everything done.',
              'He did not even try to get things done.',
              'However little he tried, he finished everything.',
            ],
          },
          {
            hr: 'Prednost dajemo kandidatima s iskustvom.',
            en: 'We give preference to candidates with experience.',
            opts: [
              'We give preference to candidates with experience.',
              'We reject candidates with experience.',
              'We give preference to younger candidates.',
              'Experience plays no role in our selection.',
            ],
          },
          {
            hr: 'Nema smisla raspravljati dok ne vidimo podatke.',
            en: 'There is no point arguing until we see the data.',
            opts: [
              'There is no point arguing until we see the data.',
              'It makes sense to argue before seeing the data.',
              'We argued after seeing the data.',
              'There is no data worth discussing.',
            ],
          },
        ],
      },

      {
        title: "Connected Speech: A Nurse's Work",
        icon: '🔗',
        passage:
          'Moja sestra već tri godine radi u jednoj velikoj bolnici. Posao je naporan, no kaže da ga ne bi mijenjala. Najteže su joj noćne smjene, osobito zimi. Ipak, kad pacijent ozdravi i zahvali joj, sve ima smisla. Sljedeće godine planira specijalizaciju iz pedijatrije.',
        questions: [
          {
            hr: 'Moja sestra već tri godine radi u jednoj velikoj bolnici.',
            en: 'My sister has been working in a large hospital for three years.',
            opts: [
              'My sister has been working in a large hospital for three years.',
              'My sister worked in a large hospital three years ago.',
              'My sister has been running a large hospital for three years.',
              'My sister has been studying at a hospital for two years.',
            ],
          },
          {
            hr: 'Posao je naporan, no kaže da ga ne bi mijenjala.',
            en: 'The job is demanding, but she says she would not change it.',
            opts: [
              'The job is demanding, but she says she would not change it.',
              'The job is easy, so she will not change it.',
              'The job is demanding, so she wants to change it.',
              'The job is demanding, and she says it is changing her.',
            ],
          },
          {
            hr: 'Najteže su joj noćne smjene, osobito zimi.',
            en: 'The night shifts are hardest for her, especially in winter.',
            opts: [
              'The night shifts are hardest for her, especially in winter.',
              'The morning shifts are hardest for her in winter.',
              'She finds nights hardest, especially in summer.',
              'Night shifts are the best paid, especially in winter.',
            ],
          },
          {
            hr: 'Ipak, kad pacijent ozdravi i zahvali joj, sve ima smisla.',
            en: 'Still, when a patient recovers and thanks her, it all makes sense.',
            opts: [
              'Still, when a patient recovers and thanks her, it all makes sense.',
              'Still, when a patient complains, nothing makes sense.',
              'When a patient recovers, she thanks the doctors.',
              'Whenever a patient arrives and greets her, it all makes sense.',
            ],
          },
          {
            hr: 'Sljedeće godine planira specijalizaciju iz pedijatrije.',
            en: 'Next year she plans to specialise in paediatrics.',
            opts: [
              'Next year she plans to specialise in paediatrics.',
              'Last year she specialised in paediatrics.',
              'Next year she plans to leave paediatrics.',
              'Next month she starts working in paediatrics.',
            ],
          },
        ],
      },
      // ── 2026-07 connected-speech expansion (3 per level) ──
      {
        title: 'Connected Speech: Resolving a Conflict',
        icon: '🔗',
        passage:
          'Prošlog tjedna došlo je do ozbiljne nesuglasice između mene i kolege oko raspodjele zadataka na projektu. Osjećao sam da radim više nego što je pravedno, dok je on tvrdio suprotno. Umjesto da situaciju guramo pod tepih, odlučili smo razgovarati otvoreno u nazočnosti voditeljice tima. Nakon iskrenog razgovora shvatili smo da je nesporazum nastao zbog loše komunikacije, a ne zle namjere. Sada bolje raspoređujemo obveze i redovito se dogovaramo unaprijed.',
        questions: [
          {
            hr: 'Prošlog tjedna došlo je do ozbiljne nesuglasice između mene i kolege oko raspodjele zadataka na projektu.',
            en: 'Last week a serious disagreement arose between me and a colleague over the division of tasks on the project.',
            opts: [
              'Last week a minor disagreement arose between two colleagues over the project deadline.',
              'Last week a serious disagreement arose between me and a colleague over the division of tasks on the project.',
              'Last month a serious disagreement arose between me and my manager over my salary.',
              'Last week we finished the project without any disagreement.',
            ],
          },
          {
            hr: 'Osjećao sam da radim više nego što je pravedno, dok je on tvrdio suprotno.',
            en: 'I felt that I was doing more than was fair, while he claimed the opposite.',
            opts: [
              'I felt that I was doing more than was fair, while he claimed the opposite.',
              'I felt that he was doing more than was fair, while I agreed with him.',
              'I felt everything was fair and had no complaints.',
              'He felt that he was doing less than was fair, while I agreed.',
            ],
          },
          {
            hr: 'Umjesto da situaciju guramo pod tepih, odlučili smo razgovarati otvoreno u nazočnosti voditeljice tima.',
            en: 'Instead of sweeping the situation under the rug, we decided to talk openly in the presence of the team leader.',
            opts: [
              'We decided to sweep the situation under the rug rather than discuss it.',
              'We decided to talk openly, but without involving the team leader.',
              'We decided to resolve everything through written emails only.',
              'Instead of sweeping the situation under the rug, we decided to talk openly in the presence of the team leader.',
            ],
          },
          {
            hr: 'Nakon iskrenog razgovora shvatili smo da je nesporazum nastao zbog loše komunikacije, a ne zle namjere.',
            en: 'After an honest conversation, we realised the misunderstanding arose from poor communication, not bad intentions.',
            opts: [
              "After the conversation, we realised the misunderstanding was entirely my colleague's fault.",
              'After the conversation, nothing was resolved and the conflict continued.',
              'After an honest conversation, we realised the misunderstanding arose from poor communication, not bad intentions.',
              'After an honest conversation, we realised the misunderstanding arose from bad intentions.',
            ],
          },
          {
            hr: 'Sada bolje raspoređujemo obveze i redovito se dogovaramo unaprijed.',
            en: 'Now we distribute responsibilities better and regularly agree on things in advance.',
            opts: [
              'Now we no longer speak about responsibilities at all.',
              'Now we distribute responsibilities better and regularly agree on things in advance.',
              'Now one of us decides everything without consulting the other.',
              'Now we distribute responsibilities worse than before.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Fire in Town',
        icon: '🔗',
        passage:
          'U našem je gradu prošlog vikenda izbio požar u staroj tvornici na periferiji. Vatrogasci su stigli u roku od deset minuta i uspjeli spriječiti širenje vatre na susjedne zgrade. Prema izjavama svjedoka, dim se vidio čak i iz susjednih naselja. Gradonačelnik je najavio da će se provesti istraga o uzroku požara. Srećom, nitko nije ozlijeđen, iako je materijalna šteta znatna.',
        questions: [
          {
            hr: 'U našem je gradu prošlog vikenda izbio požar u staroj tvornici na periferiji.',
            en: 'Last weekend a fire broke out in an old factory on the outskirts of our town.',
            opts: [
              'Last weekend a fire broke out in an old factory on the outskirts of our town.',
              'Last weekend a fire broke out in the town centre.',
              'Last month a fire broke out in an old factory nearby.',
              'Last weekend a flood damaged an old factory on the outskirts.',
            ],
          },
          {
            hr: 'Vatrogasci su stigli u roku od deset minuta i uspjeli spriječiti širenje vatre na susjedne zgrade.',
            en: 'Firefighters arrived within ten minutes and managed to prevent the fire from spreading to neighbouring buildings.',
            opts: [
              'Firefighters arrived within an hour and could not stop the fire from spreading.',
              'Firefighters arrived within ten minutes but the fire spread to neighbouring buildings anyway.',
              'Firefighters arrived within ten minutes and managed to prevent the fire from spreading to neighbouring buildings.',
              'Firefighters were not called because the fire was small.',
            ],
          },
          {
            hr: 'Prema izjavama svjedoka, dim se vidio čak i iz susjednih naselja.',
            en: "According to witnesses' statements, the smoke could be seen even from neighbouring settlements.",
            opts: [
              'According to witnesses, no smoke was visible from a distance.',
              "According to witnesses' statements, the smoke could be seen even from neighbouring settlements.",
              'According to the fire chief, the smoke was barely visible.',
              'According to witnesses, the fire produced no smoke at all.',
            ],
          },
          {
            hr: 'Gradonačelnik je najavio da će se provesti istraga o uzroku požara.',
            en: 'The mayor announced that an investigation into the cause of the fire would be carried out.',
            opts: [
              'The mayor announced that the factory would be rebuilt immediately.',
              'The mayor announced that no investigation was necessary.',
              'The fire chief announced the cause of the fire was already known.',
              'The mayor announced that an investigation into the cause of the fire would be carried out.',
            ],
          },
          {
            hr: 'Srećom, nitko nije ozlijeđen, iako je materijalna šteta znatna.',
            en: 'Fortunately, no one was injured, although the material damage is considerable.',
            opts: [
              'Fortunately, no one was injured, although the material damage is considerable.',
              'Unfortunately, several people were injured, but the damage was minor.',
              'Fortunately, no one was injured and there was no damage at all.',
              'Fortunately, the damage was considerable, but several people were injured.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Changing Habits',
        icon: '🔗',
        passage:
          'Nakon što mi je liječnik rekao da mi je kolesterol previsok, odlučio sam ozbiljno promijeniti navike. Prestao sam jesti brzu hranu i umjesto toga uvrstio više povrća i ribe u prehranu. Također sam počeo tri puta tjedno trčati, iako mi u početku nije bilo lako. Nakon nekoliko mjeseci osjećam se puno energičnije nego prije. Iduće kontrole pokazat će jesu li se rezultati doista poboljšali.',
        questions: [
          {
            hr: 'Nakon što mi je liječnik rekao da mi je kolesterol previsok, odlučio sam ozbiljno promijeniti navike.',
            en: 'After the doctor told me my cholesterol was too high, I decided to seriously change my habits.',
            opts: [
              'After the doctor told me my blood pressure was too high, I ignored the advice.',
              'After the doctor told me my cholesterol was too high, I decided to seriously change my habits.',
              'After the doctor told me I was healthy, I decided to change my diet anyway.',
              'After the doctor told me my cholesterol was too high, I decided to see a specialist instead.',
            ],
          },
          {
            hr: 'Prestao sam jesti brzu hranu i umjesto toga uvrstio više povrća i ribe u prehranu.',
            en: 'I stopped eating fast food and instead included more vegetables and fish in my diet.',
            opts: [
              'I stopped eating fast food and instead included more vegetables and fish in my diet.',
              'I stopped eating meat entirely and became a vegetarian.',
              'I kept eating fast food but added a bit of fruit.',
              'I stopped eating vegetables and fish and ate more fast food.',
            ],
          },
          {
            hr: 'Također sam počeo tri puta tjedno trčati, iako mi u početku nije bilo lako.',
            en: 'I also started running three times a week, although it was not easy at first.',
            opts: [
              'I also started swimming three times a week, and it was easy from the start.',
              'I also started running once a month, which was very easy.',
              'I also started running three times a week, although it was not easy at first.',
              'I stopped running because it was too difficult.',
            ],
          },
          {
            hr: 'Nakon nekoliko mjeseci osjećam se puno energičnije nego prije.',
            en: 'After a few months I feel much more energetic than before.',
            opts: [
              'After a few months I feel exactly the same as before.',
              'After a few weeks I feel more tired than before.',
              'After a few months I feel less energetic than before.',
              'After a few months I feel much more energetic than before.',
            ],
          },
          {
            hr: 'Iduće kontrole pokazat će jesu li se rezultati doista poboljšali.',
            en: 'The next check-ups will show whether the results have truly improved.',
            opts: [
              'The next check-ups will show whether the results have truly improved.',
              'The next check-up already confirmed there was no improvement.',
              'There will be no further check-ups since I feel better.',
              'The doctor said check-ups are no longer necessary.',
            ],
          },
        ],
      },
      {
        title: 'Razgovor za posao',
        icon: '💼',
        dialogue: [
          { s: 'A', hr: 'Dobar dan, izvolite sjesti. Recite nam nešto o svom radnom iskustvu.' },
          {
            s: 'B',
            hr: 'Hvala vam. Posljednje tri godine radim u marketinškoj agenciji u Splitu.',
          },
          { s: 'A', hr: 'Zašto želite promijeniti posao?' },
          { s: 'B', hr: 'Želim se razvijati u većem timu i preuzeti više odgovornosti.' },
          { s: 'A', hr: 'Kako se nosite s rokovima i pritiskom?' },
          { s: 'B', hr: 'Dobro organiziram vrijeme, pa rokovi za mene nisu problem.' },
          { s: 'A', hr: 'Kada biste mogli početi raditi kod nas?' },
          { s: 'B', hr: 'Uz otkazni rok, mogao bih početi za mjesec dana.' },
          { s: 'A', hr: 'Odlično. Javit ćemo vam se do kraja tjedna.' },
          { s: 'B', hr: 'Hvala vam na prilici. Doviđenja!' },
        ],
        questions: [
          {
            hr: 'Recite nam nešto o svom radnom iskustvu.',
            en: 'Tell us something about your work experience.',
            opts: [
              'Tell us something about your education.',
              'Tell us something about your work experience.',
              'Tell us why you left your last job.',
              'Tell us something about yourself.',
            ],
          },
          {
            hr: 'Želim se razvijati u većem timu i preuzeti više odgovornosti.',
            en: 'I want to develop in a bigger team and take on more responsibility.',
            opts: [
              'I want to lead a bigger team and delegate responsibility.',
              'I want to develop in a bigger team and take on more responsibility.',
              'I want a bigger salary and more freedom.',
              'I want to build a team and share responsibility.',
            ],
          },
          {
            hr: 'Kako se nosite s rokovima i pritiskom?',
            en: 'How do you handle deadlines and pressure?',
            opts: [
              'How do you handle criticism and failure?',
              'How do you feel about overtime and travel?',
              'How do you handle deadlines and pressure?',
              'How do you organize your working day?',
            ],
          },
          {
            hr: 'Uz otkazni rok, mogao bih početi za mjesec dana.',
            en: 'With my notice period, I could start in a month.',
            opts: [
              'With my notice period, I could start in a month.',
              'Without a notice period, I can start immediately.',
              'Because of my notice period, I cannot start this year.',
              'With some luck, I could start next week.',
            ],
          },
          {
            hr: 'Javit ćemo vam se do kraja tjedna.',
            en: 'We will get back to you by the end of the week.',
            opts: [
              'We will get back to you by the end of the month.',
              'We will get back to you by the end of the week.',
              'Call us back at the end of the week.',
              'We will let you know our decision today.',
            ],
          },
          {
            hr: 'Hvala vam na prilici.',
            en: 'Thank you for the opportunity.',
            opts: [
              'Thank you for the opportunity.',
              'Thank you for your time.',
              'Thank you for the invitation.',
              'Thank you for the offer.',
            ],
          },
        ],
      },
      {
        title: 'Život na otoku',
        icon: '🏝️',
        // Long connected passage (listening-depth, 2026-08-14) — extended
        // monologue at natural B2 density; per-sentence quiz below.
        passage:
          'Moja obitelj već tri generacije živi na malom otoku u Dalmaciji. Zimi nas je jedva dvjesto, ali ljeti se broj stanovnika udeseterostruči. Turizam nam je donio posao i novac, no promijenio je i način života. Mladi sve češće odlaze na kopno zbog škole i posla, a vraćaju se samo preko ljeta. Moj djed kaže da je otok najljepši u listopadu, kad odu i posljednji gosti. Tada se opet čuje more, a ne motori. Unatoč svemu, ne mogu zamisliti da živim negdje drugdje.',
        questions: [
          {
            hr: 'Moja obitelj već tri generacije živi na malom otoku u Dalmaciji.',
            en: 'My family has lived on a small island in Dalmatia for three generations already.',
            opts: [
              'My family has lived on a small island in Dalmatia for three generations already.',
              'My family moved to a small island in Dalmatia three generations ago.',
              'My family has owned a small hotel in Dalmatia for three generations.',
              'Three generations of my family visit a small island in Dalmatia.',
            ],
          },
          {
            hr: 'Zimi nas je jedva dvjesto, ali ljeti se broj stanovnika udeseterostruči.',
            en: 'In winter there are barely two hundred of us, but in summer the number of residents increases tenfold.',
            opts: [
              'In winter there are barely two hundred of us, but in summer the number of residents increases tenfold.',
              'In winter there are almost two thousand of us, but in summer the island empties.',
              'In winter barely two hundred tourists come, but in summer ten times more.',
              'In winter two hundred of us leave, but in summer everyone returns.',
            ],
          },
          {
            hr: 'Turizam nam je donio posao i novac, no promijenio je i način života.',
            en: 'Tourism brought us work and money, but it also changed our way of life.',
            opts: [
              'Tourism brought us work and money, but it also changed our way of life.',
              'Tourism brought us work and money, and improved our way of life.',
              'Tourism took away our work and money, and changed our way of life.',
              'Tourism brought us guests and noise, but our way of life survived.',
            ],
          },
          {
            hr: 'Mladi sve češće odlaze na kopno zbog škole i posla, a vraćaju se samo preko ljeta.',
            en: 'Young people leave for the mainland more and more often because of school and work, and come back only during the summer.',
            opts: [
              'Young people leave for the mainland more and more often because of school and work, and come back only during the summer.',
              'Young people rarely leave for the mainland, except for school and work in the summer.',
              'Young people move to the mainland for good because of school and work, and never come back.',
              'Young people commute to the mainland daily for school and work, returning every evening.',
            ],
          },
          {
            hr: 'Tada se opet čuje more, a ne motori.',
            en: 'Then you can hear the sea again, not engines.',
            opts: [
              'Then you can hear the sea again, not engines.',
              'Then the sea is louder than the engines.',
              'Then the boats finally return to the sea.',
              'Then you can finally swim in the sea again.',
            ],
          },
          {
            hr: 'Unatoč svemu, ne mogu zamisliti da živim negdje drugdje.',
            en: 'Despite everything, I cannot imagine living anywhere else.',
            opts: [
              'Despite everything, I cannot imagine living anywhere else.',
              'Because of everything, I imagine living somewhere else.',
              'After everything, I would gladly live somewhere else.',
              'Despite everything, I can imagine leaving one day.',
            ],
          },
        ],
      },
    ],
  },
  C1: {
    label: 'C1 — Advanced',
    color: '#7e22ce',
    headerBg: 'linear-gradient(135deg,#7e22ce,#6b21a8)',
    bg: 'linear-gradient(135deg,#faf5ff,#f3e8ff)',
    border: '#e9d5ff',
    desc: 'Complex clauses at natural speed — argument, nuance and current affairs',
    sets: [
      {
        title: 'Society & Debate',
        icon: '🗳️',
        questions: [
          {
            hr: 'Koliko god ta mjera bila nepopularna, dugoročno će se isplatiti.',
            en: 'However unpopular that measure may be, it will pay off in the long run.',
            opts: [
              'However unpopular that measure may be, it will pay off in the long run.',
              'Because the measure is popular, it will pay off quickly.',
              'The measure is unpopular and will never pay off.',
              'The measure is popular but expensive in the long run.',
            ],
          },
          {
            hr: 'Umjesto da se problem rješava, godinama se gura pod tepih.',
            en: 'Instead of being solved, the problem has been swept under the rug for years.',
            opts: [
              'Instead of being solved, the problem has been swept under the rug for years.',
              'The problem was solved years ago.',
              'The problem keeps being discussed openly for years.',
              'Instead of hiding it, they solved the problem years ago.',
            ],
          },
          {
            hr: 'Istraživanje upućuje na to da se navike mladih bitno mijenjaju.',
            en: 'The research suggests that young people’s habits are changing substantially.',
            opts: [
              'The research suggests that young people’s habits are changing substantially.',
              'The research proves young people never change their habits.',
              'The research was conducted by young people.',
              'The research suggests old habits are returning.',
            ],
          },
          {
            hr: 'Nitko ne osporava potrebu reforme, ali oko provedbe nema suglasja.',
            en: 'No one disputes the need for reform, but there is no consensus on implementation.',
            opts: [
              'No one disputes the need for reform, but there is no consensus on implementation.',
              'Everyone disputes the need for reform and its implementation.',
              'There is full consensus on how to implement the reform.',
              'No one wants any reform at all.',
            ],
          },
          {
            hr: 'Da nije bilo volontera, posljedice poplave bile bi puno teže.',
            en: 'Had it not been for the volunteers, the consequences of the flood would have been far worse.',
            opts: [
              'Had it not been for the volunteers, the consequences of the flood would have been far worse.',
              'Thanks to the volunteers, the flood was prevented entirely.',
              'The volunteers made the consequences of the flood worse.',
              'Despite the volunteers, the flood had no consequences.',
            ],
          },
          {
            hr: 'Ta je izjava izazvala burne reakcije javnosti.',
            en: 'That statement provoked stormy public reactions.',
            opts: [
              'That statement provoked stormy public reactions.',
              'That statement calmed the public down.',
              'The public ignored that statement completely.',
              'That statement was withdrawn before publication.',
            ],
          },
          {
            hr: 'Zakon je stupio na snagu početkom godine.',
            en: 'The law came into force at the beginning of the year.',
            opts: [
              'The law came into force at the beginning of the year.',
              'The law was repealed at the beginning of the year.',
              'The law will come into force next year.',
              'The law was proposed at the end of the year.',
            ],
          },
          {
            hr: 'S obzirom na okolnosti, odluka je bila razumna.',
            en: 'Given the circumstances, the decision was reasonable.',
            opts: [
              'Given the circumstances, the decision was reasonable.',
              'Despite the circumstances, the decision was unreasonable.',
              'The circumstances made any decision impossible.',
              'Regardless of the decision, the circumstances were reasonable.',
            ],
          },
        ],
      },
      {
        title: 'Idiom & Nuance',
        icon: '🎭',
        questions: [
          {
            hr: 'To mi je bila kap koja je prelila čašu.',
            en: 'That was the last straw for me.',
            opts: [
              'That was the last straw for me.',
              'That was a drop in the ocean for me.',
              'That filled my glass nicely.',
              'That was my first disappointment.',
            ],
          },
          {
            hr: 'Obećao je brda i doline, a nije ispunio ništa.',
            en: 'He promised the moon and stars and delivered nothing.',
            opts: [
              'He promised the moon and stars and delivered nothing.',
              'He promised little but delivered everything.',
              'He hiked the hills and valleys as promised.',
              'He fulfilled every promise he made.',
            ],
          },
          {
            hr: 'Nemoj mi prodavati maglu.',
            en: 'Don’t try to fool me with empty talk.',
            opts: [
              'Don’t try to fool me with empty talk.',
              'Don’t sell me your umbrella.',
              'Stop talking about the weather.',
              'Don’t offer me a discount.',
            ],
          },
          {
            hr: 'Drži fige da sve prođe kako treba.',
            en: 'Keep your fingers crossed that everything goes as it should.',
            opts: [
              'Keep your fingers crossed that everything goes as it should.',
              'Hold the figs until everything is ready.',
              'Make sure everything fails as planned.',
              'Wave your hands so everything goes well.',
            ],
          },
          {
            hr: 'Na kraju je ispalo da su svi znali osim mene.',
            en: 'In the end it turned out everyone knew except me.',
            opts: [
              'In the end it turned out everyone knew except me.',
              'In the end nobody knew anything at all.',
              'In the end I was the only one who knew.',
              'In the end everyone found out from me.',
            ],
          },
          {
            hr: 'Nije mu bilo ni na kraj pameti odustati.',
            en: 'Giving up was the furthest thing from his mind.',
            opts: [
              'Giving up was the furthest thing from his mind.',
              'He was constantly thinking about giving up.',
              'He gave up at the very end.',
              'He was of two minds about giving up.',
            ],
          },
          {
            hr: 'Prešli smo dug put, ali posao još nije gotov.',
            en: 'We have come a long way, but the job is not finished yet.',
            opts: [
              'We have come a long way, but the job is not finished yet.',
              'We travelled far and finished the job.',
              'The road was long, so we gave up the job.',
              'We have a long way to go before we start.',
            ],
          },
          {
            hr: 'Ušao je u posao preko noći, bez dana iskustva.',
            en: 'He got into the business overnight, without a day of experience.',
            opts: [
              'He got into the business overnight, without a day of experience.',
              'He built the business slowly over many years.',
              'He worked night shifts to gain experience.',
              'He left the business after one night.',
            ],
          },
        ],
      },
      {
        title: 'Culture & History',
        icon: '🏛️',
        questions: [
          {
            hr: 'Dubrovačka Republika stoljećima je čuvala neovisnost vještom diplomacijom.',
            en: 'The Republic of Dubrovnik preserved its independence for centuries through skilful diplomacy.',
            opts: [
              'The Republic of Dubrovnik preserved its independence for centuries through skilful diplomacy.',
              'The Republic of Dubrovnik lost its independence through poor diplomacy.',
              'Dubrovnik was independent for only a few decades.',
              'Dubrovnik preserved its independence through a strong army.',
            ],
          },
          {
            hr: 'Roman je preveden na dvadesetak jezika i doživio brojna izdanja.',
            en: 'The novel has been translated into some twenty languages and gone through numerous editions.',
            opts: [
              'The novel has been translated into some twenty languages and gone through numerous editions.',
              'The novel was never translated from Croatian.',
              'The novel had one edition in twenty years.',
              'The novel is being translated into its second language.',
            ],
          },
          {
            hr: 'Izložba obuhvaća radove nastale u posljednjih pola stoljeća.',
            en: 'The exhibition encompasses works created in the last half-century.',
            opts: [
              'The exhibition encompasses works created in the last half-century.',
              'The exhibition shows only this year’s works.',
              'The exhibition excludes anything older than a decade.',
              'The exhibition covers works from antiquity.',
            ],
          },
          {
            hr: 'Kritika je film dočekala podijeljenih mišljenja.',
            en: 'The critics received the film with divided opinions.',
            opts: [
              'The critics received the film with divided opinions.',
              'The critics unanimously praised the film.',
              'The critics refused to review the film.',
              'The audience was divided, but the critics agreed.',
            ],
          },
          {
            hr: 'Predstava je rasprodana tjednima unaprijed.',
            en: 'The performance has been sold out weeks in advance.',
            opts: [
              'The performance has been sold out weeks in advance.',
              'The performance was cancelled weeks ago.',
              'Tickets for the performance are still available.',
              'The performance sells out on the day itself.',
            ],
          },
          {
            hr: 'Njegov je opus obilježio čitavo jedno razdoblje.',
            en: 'His body of work defined an entire era.',
            opts: [
              'His body of work defined an entire era.',
              'His work was forgotten within an era.',
              'His single novel defined his career.',
              'An entire era ignored his work.',
            ],
          },
          {
            hr: 'Grad je obnovljen prema izvornim nacrtima.',
            en: 'The city was rebuilt according to the original plans.',
            opts: [
              'The city was rebuilt according to the original plans.',
              'The city was rebuilt in a completely new style.',
              'The original plans of the city were destroyed.',
              'The city was demolished according to plan.',
            ],
          },
          {
            hr: 'Običaj se prenosi s koljena na koljeno.',
            en: 'The custom is passed down from generation to generation.',
            opts: [
              'The custom is passed down from generation to generation.',
              'The custom was invented recently.',
              'The custom is forbidden for the young.',
              'The custom changes every generation entirely.',
            ],
          },
        ],
      },

      {
        title: 'Connected Speech: City Council',
        icon: '🔗',
        passage:
          'Na jučerašnjoj sjednici gradskog vijeća raspravljalo se o obnovi stare gradske jezgre. Većina vijećnika podržala je prijedlog, premda su neki upozorili na visoke troškove. Sredstva će se dijelom osigurati iz europskih fondova. Radovi bi trebali započeti početkom sljedeće godine. Građani će o svemu biti pravodobno obaviješteni.',
        questions: [
          {
            hr: 'Na jučerašnjoj sjednici gradskog vijeća raspravljalo se o obnovi stare gradske jezgre.',
            en: "At yesterday's city council session, the renovation of the old town core was discussed.",
            opts: [
              "At yesterday's city council session, the renovation of the old town core was discussed.",
              "At tomorrow's session the council will discuss the old town.",
              'Yesterday the council voted to demolish the old town core.',
              "At yesterday's session the mayor presented the new town centre.",
            ],
          },
          {
            hr: 'Većina vijećnika podržala je prijedlog, premda su neki upozorili na visoke troškove.',
            en: 'Most councillors supported the proposal, although some warned about the high costs.',
            opts: [
              'Most councillors supported the proposal, although some warned about the high costs.',
              'Most councillors rejected the proposal because of the high costs.',
              'A minority supported the proposal despite the low costs.',
              'All councillors supported the proposal without any warnings.',
            ],
          },
          {
            hr: 'Sredstva će se dijelom osigurati iz europskih fondova.',
            en: 'The funds will be partly secured from European funds.',
            opts: [
              'The funds will be partly secured from European funds.',
              'The funds were fully provided by European funds.',
              'The funds will be borrowed from European banks.',
              'European funds have rejected the funding request.',
            ],
          },
          {
            hr: 'Radovi bi trebali započeti početkom sljedeće godine.',
            en: 'The works should begin at the start of next year.',
            opts: [
              'The works should begin at the start of next year.',
              'The works began at the start of this year.',
              'The works should finish by the end of next year.',
              'The works must begin by the end of this month.',
            ],
          },
          {
            hr: 'Građani će o svemu biti pravodobno obaviješteni.',
            en: 'The citizens will be informed about everything in due time.',
            opts: [
              'The citizens will be informed about everything in due time.',
              'The citizens were informed about everything yesterday.',
              'The citizens must inform the council in due time.',
              'The citizens will decide about everything by referendum.',
            ],
          },
        ],
      },
      // ── 2026-07 connected-speech expansion (3 per level) ──
      {
        title: 'Connected Speech: Parking Debate',
        icon: '🔗',
        passage:
          'Na sinoćnjoj sjednici gradskog vijeća raspravljalo se o prijedlogu uvođenja naplate parkiranja u širem centru grada. Pristaše mjere tvrde da bi ograničavanje broja automobila smanjilo gužve i potaknulo građane na korištenje javnog prijevoza. Protivnici, s druge strane, upozoravaju da bi trgovci mogli izgubiti mušterije zbog otežanog pristupa. Nakon višesatne rasprave, vijećnici nisu uspjeli postići dogovor, pa je odluka odgođena za jednu od sljedećih sjednica. Građani su pozvani da putem javnog savjetovanja iznesu vlastita mišljenja prije konačnog glasovanja.',
        questions: [
          {
            hr: 'Na sinoćnjoj sjednici gradskog vijeća raspravljalo se o prijedlogu uvođenja naplate parkiranja u širem centru grada.',
            en: "At last night's city council session, a proposal to introduce paid parking in the wider city centre was discussed.",
            opts: [
              "At last night's session, the council discussed banning cars from the city centre entirely.",
              "At last night's session, the council approved free parking for all residents.",
              "At last night's city council session, a proposal to introduce paid parking in the wider city centre was discussed.",
              "At last night's session, the council discussed building a new car park outside the city.",
            ],
          },
          {
            hr: 'Pristaše mjere tvrde da bi ograničavanje broja automobila smanjilo gužve i potaknulo građane na korištenje javnog prijevoza.',
            en: 'Supporters of the measure claim that limiting the number of cars would reduce congestion and encourage citizens to use public transport.',
            opts: [
              'Supporters of the measure claim that limiting the number of cars would reduce congestion and encourage citizens to use public transport.',
              'Supporters of the measure claim it would have no effect on traffic at all.',
              'Opponents of the measure claim it would reduce congestion but hurt public transport.',
              'Supporters of the measure claim it would increase the number of cars in the centre.',
            ],
          },
          {
            hr: 'Protivnici, s druge strane, upozoravaju da bi trgovci mogli izgubiti mušterije zbog otežanog pristupa.',
            en: 'Opponents, on the other hand, warn that shopkeepers could lose customers due to reduced accessibility.',
            opts: [
              'Opponents, on the other hand, welcome the loss of customers as temporary.',
              'Supporters warn that shopkeepers could lose customers due to reduced accessibility.',
              'Opponents claim shopkeepers would gain more customers because of the measure.',
              'Opponents, on the other hand, warn that shopkeepers could lose customers due to reduced accessibility.',
            ],
          },
          {
            hr: 'Nakon višesatne rasprave, vijećnici nisu uspjeli postići dogovor, pa je odluka odgođena za jednu od sljedećih sjednica.',
            en: 'After hours of debate, the councillors failed to reach an agreement, so the decision was postponed to one of the upcoming sessions.',
            opts: [
              'After hours of debate, the councillors quickly reached a unanimous agreement.',
              'After hours of debate, the councillors failed to reach an agreement, so the decision was postponed to one of the upcoming sessions.',
              'After a brief debate, the councillors postponed the session entirely.',
              'After hours of debate, the mayor made the final decision alone.',
            ],
          },
          {
            hr: 'Građani su pozvani da putem javnog savjetovanja iznesu vlastita mišljenja prije konačnog glasovanja.',
            en: 'Citizens have been invited to voice their own opinions through a public consultation before the final vote.',
            opts: [
              'Citizens have been invited to voice their own opinions through a public consultation before the final vote.',
              'Citizens have been barred from expressing any opinion before the vote.',
              'Citizens will vote directly on the measure without any consultation.',
              'Citizens were informed the decision had already been finalised.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Film Festival',
        icon: '🔗',
        passage:
          'Ovogodišnje izdanje ljetnog filmskog festivala u Puli ponovno je privuklo tisuće posjetitelja iz cijele regije. Program je obuhvaćao raznolik izbor domaćih i međunarodnih ostvarenja, od intimnih drama do zahtjevnih dokumentaraca. Posebnu je pozornost pobudila retrospektiva posvećena hrvatskim redateljima čiji su filmovi obilježili devedesete godine. Kritičari su istaknuli da je organizacija ove godine bila besprijekorna, iako se pokoja projekcija odgodila zbog tehničkih poteškoća. Unatoč sitnim nedostacima, festival je i ove godine potvrdio status jednog od najvažnijih kulturnih događanja na Jadranu.',
        questions: [
          {
            hr: 'Ovogodišnje izdanje ljetnog filmskog festivala u Puli ponovno je privuklo tisuće posjetitelja iz cijele regije.',
            en: "This year's edition of the summer film festival in Pula again attracted thousands of visitors from across the region.",
            opts: [
              "This year's edition of the festival attracted only a handful of local visitors.",
              "This year's edition of the summer film festival in Pula again attracted thousands of visitors from across the region.",
              "This year's festival in Pula was cancelled due to low attendance.",
              "Last year's edition of the festival attracted thousands of visitors from abroad.",
            ],
          },
          {
            hr: 'Program je obuhvaćao raznolik izbor domaćih i međunarodnih ostvarenja, od intimnih drama do zahtjevnih dokumentaraca.',
            en: 'The programme included a diverse selection of domestic and international works, from intimate dramas to demanding documentaries.',
            opts: [
              'The programme included a diverse selection of domestic and international works, from intimate dramas to demanding documentaries.',
              "The programme included only domestic comedies and children's films.",
              'The programme focused exclusively on international blockbusters.',
              'The programme included a narrow selection of only Croatian dramas.',
            ],
          },
          {
            hr: 'Posebnu je pozornost pobudila retrospektiva posvećena hrvatskim redateljima čiji su filmovi obilježili devedesete godine.',
            en: 'A retrospective dedicated to Croatian directors whose films defined the 1990s attracted particular attention.',
            opts: [
              'A retrospective dedicated to foreign directors of the 1980s attracted particular attention.',
              'No retrospective was organised this year due to a lack of interest.',
              'A retrospective dedicated to Croatian directors whose films defined the 1990s attracted particular attention.',
              'A retrospective dedicated to Croatian directors of the 2000s attracted particular attention.',
            ],
          },
          {
            hr: 'Kritičari su istaknuli da je organizacija ove godine bila besprijekorna, iako se pokoja projekcija odgodila zbog tehničkih poteškoća.',
            en: "Critics pointed out that this year's organisation was flawless, although a few screenings were delayed due to technical difficulties.",
            opts: [
              'Critics pointed out that the organisation this year was chaotic and poorly planned.',
              'Critics pointed out that every screening ran exactly on schedule with no issues.',
              "Critics avoided commenting on the festival's organisation altogether.",
              "Critics pointed out that this year's organisation was flawless, although a few screenings were delayed due to technical difficulties.",
            ],
          },
          {
            hr: 'Unatoč sitnim nedostacima, festival je i ove godine potvrdio status jednog od najvažnijih kulturnih događanja na Jadranu.',
            en: 'Despite minor shortcomings, the festival once again confirmed its status as one of the most important cultural events on the Adriatic.',
            opts: [
              'Despite minor shortcomings, the festival once again confirmed its status as one of the most important cultural events on the Adriatic.',
              'Because of the shortcomings, the festival lost its status as a major cultural event.',
              'The festival has never been considered an important cultural event.',
              'Despite minor shortcomings, the festival was held for the very first time this year.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Changing Careers',
        icon: '🔗',
        passage:
          'Nakon petnaest godina rada u bankarstvu, odlučio sam potpuno promijeniti smjer karijere i posvetiti se stolarstvu. Kolege su isprva mislili da se šalim, no kad su vidjeli koliko sam odlučan, počeli su me podržavati. Najteži je dio bio odreći se stabilne plaće i krenuti ispočetka, gotovo kao pripravnik. Unatoč početnoj neizvjesnosti, danas mogu reći da se nikada nisam osjećao ispunjenije na poslu. Ono što sam naučio jest da nikada nije prekasno krenuti putem koji doista odgovara vlastitim vrijednostima.',
        questions: [
          {
            hr: 'Nakon petnaest godina rada u bankarstvu, odlučio sam potpuno promijeniti smjer karijere i posvetiti se stolarstvu.',
            en: 'After fifteen years working in banking, I decided to completely change my career path and devote myself to carpentry.',
            opts: [
              'After five years working in banking, I decided to change careers and become an accountant.',
              'After fifteen years working in carpentry, I decided to switch to banking.',
              'After fifteen years working in banking, I decided to completely change my career path and devote myself to carpentry.',
              'After fifteen years working in banking, I decided to retire early.',
            ],
          },
          {
            hr: 'Kolege su isprva mislili da se šalim, no kad su vidjeli koliko sam odlučan, počeli su me podržavati.',
            en: 'My colleagues at first thought I was joking, but when they saw how determined I was, they started supporting me.',
            opts: [
              'My colleagues at first thought I was joking, but when they saw how determined I was, they started supporting me.',
              'My colleagues immediately supported my decision without any doubts.',
              'My colleagues never believed I was serious and stopped speaking to me.',
              'My colleagues thought I was joking and continued to think so.',
            ],
          },
          {
            hr: 'Najteži je dio bio odreći se stabilne plaće i krenuti ispočetka, gotovo kao pripravnik.',
            en: 'The hardest part was giving up a stable salary and starting over, almost like an apprentice.',
            opts: [
              'The hardest part was finding new colleagues to work with.',
              'The easiest part was giving up a stable salary and starting over.',
              'The hardest part was convincing my family to support the decision.',
              'The hardest part was giving up a stable salary and starting over, almost like an apprentice.',
            ],
          },
          {
            hr: 'Unatoč početnoj neizvjesnosti, danas mogu reći da se nikada nisam osjećao ispunjenije na poslu.',
            en: 'Despite the initial uncertainty, today I can say I have never felt more fulfilled at work.',
            opts: [
              'Because of the initial uncertainty, I regret the decision every day.',
              'Despite the initial uncertainty, today I can say I have never felt more fulfilled at work.',
              'Despite the initial uncertainty, I still feel unfulfilled at work today.',
              'Thanks to the initial certainty, I felt fulfilled from day one.',
            ],
          },
          {
            hr: 'Ono što sam naučio jest da nikada nije prekasno krenuti putem koji doista odgovara vlastitim vrijednostima.',
            en: "What I have learned is that it is never too late to follow a path that truly matches one's own values.",
            opts: [
              "What I have learned is that it is never too late to follow a path that truly matches one's own values.",
              'What I have learned is that it is always too late to change careers after forty.',
              'What I have learned is that following your values rarely pays off.',
              'What I have learned is that career changes should be avoided at all costs.',
            ],
          },
        ],
      },
      {
        title: 'Iseljenička pisma',
        icon: '✉️',
        passage:
          'U potkrovlju smo pronašli kutiju pisama koja je prabaka slala iz Amerike početkom prošlog stoljeća. Pisala je o tvornici u kojoj je radila po dvanaest sati dnevno i o tome kako je štedjela svaki cent za povratak. Najviše me se dojmilo pismo u kojem opisuje prvi Božić daleko od doma. Priznaje da je plakala slušajući tuđe pjesme, ali dodaje kako je upravo te večeri odlučila otvoriti vlastitu pekarnicu. Da se tada vratila, kako je planirala, mi bismo danas vjerojatno živjeli u Lici. Njezina me sudbina podsjeća koliko su naši životi isprepleteni odlukama ljudi koje nikada nismo upoznali.',
        questions: [
          {
            hr: 'U potkrovlju smo pronašli kutiju pisama koja je prabaka slala iz Amerike početkom prošlog stoljeća.',
            en: 'In the attic we found a box of letters that great-grandmother sent from America at the beginning of the last century.',
            opts: [
              'In the attic we found a box of letters that great-grandmother sent from America at the beginning of the last century.',
              'In the attic we found a box of letters that great-grandmother received from America at the end of the last century.',
              'In the basement we found a box of photographs that great-grandmother brought from America a century ago.',
              'In the attic great-grandmother kept a box of letters she never sent to America.',
            ],
          },
          {
            hr: 'Pisala je o tvornici u kojoj je radila po dvanaest sati dnevno i o tome kako je štedjela svaki cent za povratak.',
            en: 'She wrote about the factory where she worked twelve hours a day and about how she saved every cent for the return home.',
            opts: [
              'She wrote about the factory where she worked twelve hours a day and about how she saved every cent for the return home.',
              'She wrote about the factory where she worked twelve days in a row and spent every cent she earned.',
              'She wrote about the shop where she worked twelve hours a week and saved every cent for a house.',
              'She wrote about the factory she owned and about how she counted every cent of profit.',
            ],
          },
          {
            hr: 'Najviše me se dojmilo pismo u kojem opisuje prvi Božić daleko od doma.',
            en: 'The letter in which she describes her first Christmas far from home impressed me the most.',
            opts: [
              'The letter in which she describes her first Christmas far from home impressed me the most.',
              'The letter in which she describes her last Christmas at home saddened me the most.',
              'The letter she wrote on her first Christmas confused me the most.',
              'The letter describing her journey home for Christmas surprised me the most.',
            ],
          },
          {
            hr: 'Priznaje da je plakala slušajući tuđe pjesme, ali dodaje kako je upravo te večeri odlučila otvoriti vlastitu pekarnicu.',
            en: "She admits she cried listening to other people's songs, but adds that that very evening she decided to open her own bakery.",
            opts: [
              "She admits she cried listening to other people's songs, but adds that that very evening she decided to open her own bakery.",
              "She denies she cried listening to other people's songs, though that evening she closed her bakery.",
              'She admits she cried singing her own songs, and that evening she decided to sell the bakery.',
              'She admits she cried listening to the radio, but adds that she soon forgot her plan for a bakery.',
            ],
          },
          {
            hr: 'Da se tada vratila, kako je planirala, mi bismo danas vjerojatno živjeli u Lici.',
            en: 'Had she returned then, as she planned, we would probably be living in Lika today.',
            opts: [
              'Had she returned then, as she planned, we would probably be living in Lika today.',
              'When she returned, as she planned, we all moved to Lika.',
              'If she returns as planned, we will probably live in Lika.',
              'Because she never planned to return, we do not live in Lika today.',
            ],
          },
          {
            hr: 'Njezina me sudbina podsjeća koliko su naši životi isprepleteni odlukama ljudi koje nikada nismo upoznali.',
            en: 'Her fate reminds me how much our lives are interwoven with the decisions of people we never met.',
            opts: [
              'Her fate reminds me how much our lives are interwoven with the decisions of people we never met.',
              'Her fate reminds me how little our lives depend on people we never met.',
              'Her fate warns me how our lives are complicated by the mistakes of strangers.',
              'Her fate reminds me how our lives are shaped by relatives we know well.',
            ],
          },
        ],
      },
    ],
  },
  C2: {
    label: 'C2 — Mastery',
    color: '#9d174d',
    headerBg: 'linear-gradient(135deg,#9d174d,#831843)',
    bg: 'linear-gradient(135deg,#fff1f2,#ffe4e6)',
    border: '#fbcfe8',
    desc: 'Native-speed rhetoric — irony, abstraction and the literary register',
    sets: [
      {
        title: 'Abstraction & Rhetoric',
        icon: '🧠',
        questions: [
          {
            hr: 'Sloboda koja ne podrazumijeva odgovornost brzo se izrodi u samovolju.',
            en: 'Freedom that does not entail responsibility quickly degenerates into arbitrariness.',
            opts: [
              'Freedom that does not entail responsibility quickly degenerates into arbitrariness.',
              'Freedom always requires the absence of responsibility.',
              'Responsibility quickly degenerates into freedom.',
              'Freedom and responsibility never appear together.',
            ],
          },
          {
            hr: 'Njegova šutnja bila je rječitija od svakog govora.',
            en: 'His silence was more eloquent than any speech.',
            opts: [
              'His silence was more eloquent than any speech.',
              'His speech was louder than his silence.',
              'He remained silent because he could not speak.',
              'His speeches were always eloquent and long.',
            ],
          },
          {
            hr: 'Povijest se ne ponavlja, ali se, kako kažu, rimuje.',
            en: 'History does not repeat itself, but, as they say, it rhymes.',
            opts: [
              'History does not repeat itself, but, as they say, it rhymes.',
              'History repeats itself word for word.',
              'History neither repeats nor resembles itself.',
              'Poets say history is written in rhyme.',
            ],
          },
          {
            hr: 'Svaka generacija iznova ispisuje granice mogućega.',
            en: 'Each generation redraws the boundaries of the possible anew.',
            opts: [
              'Each generation redraws the boundaries of the possible anew.',
              'Each generation respects the old boundaries.',
              'The boundaries of the possible never change.',
              'Only one generation ever changed the boundaries.',
            ],
          },
          {
            hr: 'Nije riječ o pukoj slučajnosti, nego o obrascu.',
            en: 'This is no mere coincidence, but a pattern.',
            opts: [
              'This is no mere coincidence, but a pattern.',
              'This is pure coincidence, nothing more.',
              'This is a pattern of coincidences.',
              'Neither coincidence nor pattern explains it.',
            ],
          },
          {
            hr: 'Koliko god paradoksalno zvučalo, obilje izbora katkad sputava.',
            en: 'However paradoxical it may sound, an abundance of choice sometimes constrains.',
            opts: [
              'However paradoxical it may sound, an abundance of choice sometimes constrains.',
              'Logically enough, more choice always liberates.',
              'A lack of choice sometimes constrains.',
              'Paradoxes are caused by too many choices.',
            ],
          },
          {
            hr: 'Ostaje otvorenim pitanje tko za to snosi odgovornost.',
            en: 'The question of who bears responsibility for it remains open.',
            opts: [
              'The question of who bears responsibility for it remains open.',
              'It has been settled who bears responsibility.',
              'Nobody ever asked who is responsible.',
              'The responsible person opened the question.',
            ],
          },
          {
            hr: 'Utoliko je veće iznenađenje što je odustao bez borbe.',
            en: 'It is all the more surprising that he gave up without a fight.',
            opts: [
              'It is all the more surprising that he gave up without a fight.',
              'It is no surprise that he fought to the end.',
              'He surprised everyone by winning the fight.',
              'The fight was bigger than the surprise.',
            ],
          },
        ],
      },
      {
        title: 'Irony & Understatement',
        icon: '😏',
        questions: [
          {
            hr: 'Snašao se, nema što — za tri dana potrošio je godišnju plaću.',
            en: 'He managed brilliantly, no doubt — in three days he spent a year’s salary.',
            opts: [
              'He managed brilliantly, no doubt — in three days he spent a year’s salary.',
              'He truly managed well and saved a year’s salary.',
              'In three years he spent a day’s salary.',
              'He failed to spend anything in three days.',
            ],
          },
          {
            hr: 'Nije baš da smo se pretrgnuli od posla.',
            en: 'It’s not as if we overexerted ourselves with work.',
            opts: [
              'It’s not as if we overexerted ourselves with work.',
              'We genuinely worked ourselves to exhaustion.',
              'We broke the machine at work.',
              'It’s not as if there was any work to do.',
            ],
          },
          {
            hr: 'E, sad smo stvarno riješili sve probleme ovoga svijeta.',
            en: 'Well, now we have truly solved all the world’s problems.',
            opts: [
              'Well, now we have truly solved all the world’s problems.',
              'The world’s problems are finally and sincerely solved.',
              'Now we can start solving the world’s problems.',
              'The world created new problems for us.',
            ],
          },
          {
            hr: 'Da ne povjeruješ: opet je zaboravio ključeve.',
            en: 'Unbelievable: he forgot his keys again.',
            opts: [
              'Unbelievable: he forgot his keys again.',
              'Believe it: he finally remembered his keys.',
              'Incredibly, he lost his wallet again.',
              'You would not believe how many keys he has.',
            ],
          },
          {
            hr: 'Blago si ga nama s ovakvom upravom.',
            en: 'Lucky us, with a management like this.',
            opts: [
              'Lucky us, with a management like this.',
              'Our management makes us genuinely rich.',
              'We pity the management sincerely.',
              'The management praised us warmly.',
            ],
          },
          {
            hr: 'Njemu objašnjavati strpljenje — to je posao za sveca.',
            en: 'Explaining patience to him — that is a job for a saint.',
            opts: [
              'Explaining patience to him — that is a job for a saint.',
              'He explains patience like a saint.',
              'Saints have no patience for explanations.',
              'Teaching him is quick and easy work.',
            ],
          },
          {
            hr: 'Kao da nam je to trebalo baš danas.',
            en: 'As if we needed that today of all days.',
            opts: [
              'As if we needed that today of all days.',
              'We truly needed that precisely today.',
              'Today we needed nothing at all.',
              'That was exactly what we ordered today.',
            ],
          },
          {
            hr: 'Ma nemoj reći da si opet u pravu.',
            en: 'Oh, don’t tell me you’re right again.',
            opts: [
              'Oh, don’t tell me you’re right again.',
              'Please never tell me the truth again.',
              'You are finally wrong for once.',
              'Tell me again why you are right.',
            ],
          },
        ],
      },
      {
        title: 'Literary Register',
        icon: '📖',
        questions: [
          {
            hr: 'Bijaše to vrijeme kad su se pisma još pisala rukom.',
            en: 'It was a time when letters were still written by hand.',
            opts: [
              'It was a time when letters were still written by hand.',
              'It is a time when letters are typed by machine.',
              'At that time nobody wrote letters at all.',
              'It was a time when hands still wrote books.',
            ],
          },
          {
            hr: 'Grad opustje, a s njim i sjećanja.',
            en: 'The town fell desolate, and with it the memories.',
            opts: [
              'The town fell desolate, and with it the memories.',
              'The town grew, and with it the memories.',
              'The desert town was full of memories.',
              'The town forgot its deserted streets.',
            ],
          },
          {
            hr: 'U njezinu se glasu naslućivala davno prešućena tuga.',
            en: 'In her voice one sensed a sorrow long left unspoken.',
            opts: [
              'In her voice one sensed a sorrow long left unspoken.',
              'Her voice openly declared a fresh sorrow.',
              'Her voice hid nothing but joy.',
              'In her voice one heard yesterday’s laughter.',
            ],
          },
          {
            hr: 'Sve što rekoše, vjetar odnese.',
            en: 'All that they said, the wind carried away.',
            opts: [
              'All that they said, the wind carried away.',
              'Everything they said was written down.',
              'The wind brought them new words.',
              'They said nothing, and the wind was still.',
            ],
          },
          {
            hr: 'Njegovim odlaskom kuća osta bez duše.',
            en: 'With his departure the house was left without a soul.',
            opts: [
              'With his departure the house was left without a soul.',
              'When he arrived, the house came alive.',
              'His departure filled the house with people.',
              'The house departed with his soul.',
            ],
          },
          {
            hr: 'Pripovijedaše starac o vremenima kojih se nitko više ne sjećaše.',
            en: 'The old man told of times no one remembered any longer.',
            opts: [
              'The old man told of times no one remembered any longer.',
              'The old man forgot the times everyone remembered.',
              'No one listened to the old man’s memories of today.',
              'The old man refused to speak of the past.',
            ],
          },
          {
            hr: 'Zaboravu usprkos, neka imena ostaju.',
            en: 'In spite of oblivion, some names remain.',
            opts: [
              'In spite of oblivion, some names remain.',
              'Thanks to oblivion, all names vanish.',
              'Some names remain forgotten on purpose.',
              'Oblivion spares no name at all.',
            ],
          },
          {
            hr: 'I tako, iz dana u dan, život prolažaše mimo njih.',
            en: 'And so, day after day, life passed them by.',
            opts: [
              'And so, day after day, life passed them by.',
              'And so, day after day, they seized life fully.',
              'Life stopped for them one day.',
              'They passed by life only once.',
            ],
          },
        ],
      },

      {
        title: 'Connected Speech: Wage Talks',
        icon: '🔗',
        passage:
          'Nakon višemjesečnih pregovora, sindikati i poslodavci napokon su postigli dogovor. Kolektivnim ugovorom predviđeno je postupno povećanje plaća tijekom sljedeće dvije godine. Obje strane ocijenile su kompromis prihvatljivim, iako ne i idealnim. Analitičari upozoravaju da će provedba ovisiti o gospodarskim kretanjima. Bude li inflacija rasla, pregovori bi se mogli ponoviti.',
        questions: [
          {
            hr: 'Nakon višemjesečnih pregovora, sindikati i poslodavci napokon su postigli dogovor.',
            en: 'After months of negotiations, the unions and employers finally reached an agreement.',
            opts: [
              'After months of negotiations, the unions and employers finally reached an agreement.',
              "After weeks of negotiations, the unions rejected the employers' offer.",
              'The unions and employers are finally starting negotiations after months.',
              'After months of strikes, the employers finally gave up.',
            ],
          },
          {
            hr: 'Kolektivnim ugovorom predviđeno je postupno povećanje plaća tijekom sljedeće dvije godine.',
            en: 'The collective agreement provides for a gradual wage increase over the next two years.',
            opts: [
              'The collective agreement provides for a gradual wage increase over the next two years.',
              'The collective agreement freezes wages for the next two years.',
              'The agreement provides for an immediate wage increase this year.',
              'The contract predicts a gradual wage decrease over two years.',
            ],
          },
          {
            hr: 'Obje strane ocijenile su kompromis prihvatljivim, iako ne i idealnim.',
            en: 'Both sides deemed the compromise acceptable, though not ideal.',
            opts: [
              'Both sides deemed the compromise acceptable, though not ideal.',
              'Both sides deemed the compromise ideal and final.',
              'One side found the compromise unacceptable.',
              'Both sides refused to comment on the compromise.',
            ],
          },
          {
            hr: 'Analitičari upozoravaju da će provedba ovisiti o gospodarskim kretanjima.',
            en: 'Analysts warn that implementation will depend on economic trends.',
            opts: [
              'Analysts warn that implementation will depend on economic trends.',
              'Analysts promise that implementation will improve the economy.',
              'Analysts warn that the economy depends on the agreement.',
              'Analysts doubt the agreement was ever implemented.',
            ],
          },
          {
            hr: 'Bude li inflacija rasla, pregovori bi se mogli ponoviti.',
            en: 'Should inflation rise, the negotiations could be repeated.',
            opts: [
              'Should inflation rise, the negotiations could be repeated.',
              'Because inflation rose, the negotiations were repeated.',
              'If inflation falls, the negotiations will be cancelled.',
              'Inflation will rise if the negotiations are repeated.',
            ],
          },
        ],
      },
      // ── 2026-07 connected-speech expansion (3 per level) ──
      {
        title: 'Connected Speech: Economic Outlook',
        icon: '🔗',
        passage:
          'Unatoč povoljnim makroekonomskim pokazateljima objavljenim ovog tromjesečja, brojni analitičari upozoravaju da se iza naizgled solidnog rasta krije zabrinjavajuća neravnoteža. Rast je gotovo u cijelosti potaknut potrošnjom, dok su ulaganja u proizvodne kapacitete ostala razmjerno skromna. Ovakav obrazac, tvrde stručnjaci, teško je održiv dugoročno, jer izostanak strukturnih reformi ostavlja gospodarstvo osjetljivim na vanjske šokove. Dodatno zabrinjava i činjenica da rast plaća sustavno zaostaje za rastom cijena nekretnina, što produbljuje jaz između generacija. Ako se ništa ne promijeni, upozoravaju analitičari, sadašnji zamah mogao bi se pokazati kratkotrajnim luksuzom.',
        questions: [
          {
            hr: 'Unatoč povoljnim makroekonomskim pokazateljima objavljenim ovog tromjesečja, brojni analitičari upozoravaju da se iza naizgled solidnog rasta krije zabrinjavajuća neravnoteža.',
            en: 'Despite the favourable macroeconomic indicators published this quarter, numerous analysts warn that a worrying imbalance lies behind the seemingly solid growth.',
            opts: [
              'Because of the favourable indicators, analysts see no cause for concern at all.',
              'Despite the favourable macroeconomic indicators published this quarter, numerous analysts warn that a worrying imbalance lies behind the seemingly solid growth.',
              "The indicators published this quarter were unfavourable, confirming analysts' fears.",
              'Analysts published macroeconomic indicators that contradict all previous forecasts.',
            ],
          },
          {
            hr: 'Rast je gotovo u cijelosti potaknut potrošnjom, dok su ulaganja u proizvodne kapacitete ostala razmjerno skromna.',
            en: 'Growth has been driven almost entirely by consumption, while investment in production capacity has remained relatively modest.',
            opts: [
              'Growth has been driven almost entirely by investment, while consumption has remained modest.',
              'Growth has stalled entirely due to a collapse in consumption.',
              'Growth has been driven almost entirely by consumption, while investment in production capacity has remained relatively modest.',
              'Investment in production capacity has driven growth, while consumption declined sharply.',
            ],
          },
          {
            hr: 'Ovakav obrazac, tvrde stručnjaci, teško je održiv dugoročno, jer izostanak strukturnih reformi ostavlja gospodarstvo osjetljivim na vanjske šokove.',
            en: 'Experts claim this pattern is hardly sustainable in the long run, since the absence of structural reforms leaves the economy vulnerable to external shocks.',
            opts: [
              'Experts claim this pattern is hardly sustainable in the long run, since the absence of structural reforms leaves the economy vulnerable to external shocks.',
              'Experts claim this pattern is perfectly sustainable thanks to recent structural reforms.',
              'Experts claim external shocks are the only threat, regardless of reforms.',
              'Experts claim structural reforms have made the economy immune to any shocks.',
            ],
          },
          {
            hr: 'Dodatno zabrinjava i činjenica da rast plaća sustavno zaostaje za rastom cijena nekretnina, što produbljuje jaz između generacija.',
            en: 'What is additionally worrying is the fact that wage growth systematically lags behind the rise in property prices, deepening the gap between generations.',
            opts: [
              'It is reassuring that wage growth has finally caught up with property prices.',
              'Property prices have fallen sharply, narrowing the gap between generations.',
              'Wage growth has outpaced property prices for the first time in years.',
              'What is additionally worrying is the fact that wage growth systematically lags behind the rise in property prices, deepening the gap between generations.',
            ],
          },
          {
            hr: 'Ako se ništa ne promijeni, upozoravaju analitičari, sadašnji zamah mogao bi se pokazati kratkotrajnim luksuzom.',
            en: 'If nothing changes, analysts warn, the current momentum could prove to be a short-lived luxury.',
            opts: [
              'If nothing changes, analysts warn, the current momentum could prove to be a short-lived luxury.',
              'Analysts are confident that current momentum will last for decades regardless of policy.',
              'If nothing changes, the current momentum will only strengthen further.',
              'Analysts warn that momentum has already disappeared completely this quarter.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Media and Trust',
        icon: '🔗',
        passage:
          'Sve izraženija komercijalizacija medijskog prostora dovela je do toga da senzacionalizam sve češće nadjačava temeljitost novinarskog istraživanja. Umjesto analitičkih priloga, uredništva se sve više okreću sadržaju osmišljenom za brzo dijeljenje na društvenim mrežama. Takav pristup, iako kratkoročno donosi klikove i oglašivačke prihode, dugoročno nagriza povjerenje publike u medije kao takve. Osobito je zabrinjavajuće što se granica između uredničkog sadržaja i plaćenog oglašavanja sve teže raspoznaje, čak i za iskusnog čitatelja. Bez ozbiljne rasprave o profesionalnim standardima, teško je očekivati da će se ovaj trend sam od sebe preokrenuti.',
        questions: [
          {
            hr: 'Sve izraženija komercijalizacija medijskog prostora dovela je do toga da senzacionalizam sve češće nadjačava temeljitost novinarskog istraživanja.',
            en: 'The growing commercialisation of the media space has led sensationalism to increasingly overshadow the thoroughness of journalistic research.',
            opts: [
              'The growing commercialisation of media has strengthened the thoroughness of journalistic research.',
              'Sensationalism has disappeared from the media thanks to stricter regulation.',
              'The growing commercialisation of the media space has led sensationalism to increasingly overshadow the thoroughness of journalistic research.',
              'Journalistic research has become more thorough due to commercial pressure.',
            ],
          },
          {
            hr: 'Umjesto analitičkih priloga, uredništva se sve više okreću sadržaju osmišljenom za brzo dijeljenje na društvenim mrežama.',
            en: 'Instead of analytical pieces, editorial offices are increasingly turning to content designed for quick sharing on social media.',
            opts: [
              'Instead of analytical pieces, editorial offices are increasingly turning to content designed for quick sharing on social media.',
              'Editorial offices have abandoned social media entirely in favour of analytical pieces.',
              'Analytical pieces have become more popular than social media content.',
              'Instead of social media content, editorial offices now focus solely on analytical pieces.',
            ],
          },
          {
            hr: 'Takav pristup, iako kratkoročno donosi klikove i oglašivačke prihode, dugoročno nagriza povjerenje publike u medije kao takve.',
            en: 'Such an approach, although it brings clicks and advertising revenue in the short term, erodes public trust in the media in the long run.',
            opts: [
              'Such an approach damages advertising revenue but builds long-term public trust.',
              'Such an approach, although it brings clicks and advertising revenue in the short term, erodes public trust in the media in the long run.',
              'Such an approach has no effect on public trust whatsoever.',
              'Such an approach increases both short-term clicks and long-term trust.',
            ],
          },
          {
            hr: 'Osobito je zabrinjavajuće što se granica između uredničkog sadržaja i plaćenog oglašavanja sve teže raspoznaje, čak i za iskusnog čitatelja.',
            en: 'It is particularly worrying that the line between editorial content and paid advertising is becoming harder to discern, even for an experienced reader.',
            opts: [
              'It is reassuring that the line between editorial content and advertising has become clearer.',
              'Only inexperienced readers struggle to tell editorial content from advertising.',
              'The line between editorial content and advertising disappeared decades ago.',
              'It is particularly worrying that the line between editorial content and paid advertising is becoming harder to discern, even for an experienced reader.',
            ],
          },
          {
            hr: 'Bez ozbiljne rasprave o profesionalnim standardima, teško je očekivati da će se ovaj trend sam od sebe preokrenuti.',
            en: 'Without a serious discussion of professional standards, it is hard to expect this trend to reverse on its own.',
            opts: [
              'Without a serious discussion of professional standards, it is hard to expect this trend to reverse on its own.',
              'A serious discussion of professional standards has already reversed the trend.',
              'This trend is expected to reverse on its own without any discussion.',
              'Professional standards are irrelevant to whether the trend reverses.',
            ],
          },
        ],
      },
      {
        title: 'Connected Speech: Microplastics Study',
        icon: '🔗',
        passage:
          'Hrvatski znanstvenici objavili su rezultate višegodišnjeg istraživanja o utjecaju mikroplastike na organizme u Jadranskom moru. Analize uzoraka prikupljenih duž obale pokazale su da čestice mikroplastike ulaze u prehrambeni lanac već na razini najsitnijih organizama. Prema riječima glavne istraživačice, dosadašnji podaci upućuju na to da koncentracija čestica raste brže nego što se ranije pretpostavljalo. Iako izravan utjecaj na zdravlje ljudi još nije u potpunosti razjašnjen, znanstvenici pozivaju na oprez i daljnja istraživanja. Rezultati će biti predstavljeni na međunarodnoj konferenciji o zaštiti mora, gdje se očekuje živa rasprava među stručnjacima.',
        questions: [
          {
            hr: 'Hrvatski znanstvenici objavili su rezultate višegodišnjeg istraživanja o utjecaju mikroplastike na organizme u Jadranskom moru.',
            en: 'Croatian scientists have published the results of a multi-year study on the impact of microplastics on organisms in the Adriatic Sea.',
            opts: [
              'Croatian scientists have published a single-year pilot study on plastic bottles in the Adriatic.',
              'Croatian scientists have published the results of a multi-year study on the impact of microplastics on organisms in the Adriatic Sea.',
              'Croatian scientists have published results on the impact of microplastics in the Mediterranean generally.',
              'Croatian scientists have announced plans for a future study on microplastics.',
            ],
          },
          {
            hr: 'Analize uzoraka prikupljenih duž obale pokazale su da čestice mikroplastike ulaze u prehrambeni lanac već na razini najsitnijih organizama.',
            en: 'Analyses of samples collected along the coast showed that microplastic particles enter the food chain already at the level of the smallest organisms.',
            opts: [
              'Analyses of samples showed that microplastic particles only affect the largest fish.',
              'Analyses of samples showed that microplastic particles do not enter the food chain at all.',
              'Analyses of samples collected along the coast showed that microplastic particles enter the food chain already at the level of the smallest organisms.',
              'Analyses of deep-sea samples showed no trace of microplastic particles.',
            ],
          },
          {
            hr: 'Prema riječima glavne istraživačice, dosadašnji podaci upućuju na to da koncentracija čestica raste brže nego što se ranije pretpostavljalo.',
            en: 'According to the lead researcher, the data so far suggest that the concentration of particles is rising faster than previously assumed.',
            opts: [
              'According to the lead researcher, the data so far suggest that the concentration of particles is rising faster than previously assumed.',
              'According to the lead researcher, particle concentration is decreasing steadily.',
              'According to the lead researcher, the data confirm earlier predictions exactly.',
              'According to the lead researcher, particle concentration has stabilised completely.',
            ],
          },
          {
            hr: 'Iako izravan utjecaj na zdravlje ljudi još nije u potpunosti razjašnjen, znanstvenici pozivaju na oprez i daljnja istraživanja.',
            en: 'Although the direct impact on human health has not yet been fully clarified, scientists are calling for caution and further research.',
            opts: [
              'Scientists have confirmed there is no impact on human health whatsoever.',
              'The impact on human health has been fully clarified and requires no further study.',
              'Scientists have stopped researching the topic due to a lack of funding.',
              'Although the direct impact on human health has not yet been fully clarified, scientists are calling for caution and further research.',
            ],
          },
          {
            hr: 'Rezultati će biti predstavljeni na međunarodnoj konferenciji o zaštiti mora, gdje se očekuje živa rasprava među stručnjacima.',
            en: 'The results will be presented at an international conference on marine conservation, where a lively discussion among experts is expected.',
            opts: [
              'The results will be presented at an international conference on marine conservation, where a lively discussion among experts is expected.',
              'The results will not be presented publicly due to their sensitivity.',
              'The results were already presented at a conference last year.',
              'The conference on marine conservation has been cancelled this year.',
            ],
          },
        ],
      },
      {
        title: 'Jezik i identitet',
        icon: '🗣️',
        passage:
          'Rasprava o odnosu jezika i identiteta u hrvatskome društvu rijetko ostaje na akademskoj razini. Svaka pravopisna reforma izazove žustre polemike u kojima se jezikoslovni argumenti isprepleću s političkima. Zagovornici purizma tvrde da posuđenice osiromašuju izražajne mogućnosti hrvatskoga, dok njihovi kritičari upozoravaju da je jezik živ organizam koji se opire propisivanju. Istina je, kao i obično, negdje između: norma daje jeziku stabilnost, a govornici mu daju život. Ono što se u udžbenicima naziva iznimkom, na tržnici je pravilo. Možda je upravo ta napetost između propisanoga i govorenoga najpouzdaniji znak da je jezik doista živ.',
        questions: [
          {
            hr: 'Rasprava o odnosu jezika i identiteta u hrvatskome društvu rijetko ostaje na akademskoj razini.',
            en: 'The debate about the relationship between language and identity in Croatian society rarely stays at an academic level.',
            opts: [
              'The debate about the relationship between language and identity in Croatian society rarely stays at an academic level.',
              'The debate about the relationship between language and identity in Croatian society rarely reaches an academic level.',
              'The debate about language and identity in Croatian society usually stays among academics.',
              'The relationship between language and identity is rarely debated in Croatian society.',
            ],
          },
          {
            hr: 'Svaka pravopisna reforma izazove žustre polemike u kojima se jezikoslovni argumenti isprepleću s političkima.',
            en: 'Every orthographic reform provokes heated polemics in which linguistic arguments intertwine with political ones.',
            opts: [
              'Every orthographic reform provokes heated polemics in which linguistic arguments intertwine with political ones.',
              'Every orthographic reform provokes quiet disagreements in which linguistic arguments defeat political ones.',
              'Every political reform provokes heated polemics in which orthographic arguments play no part.',
              'Every orthographic reform ends heated polemics by separating linguistic arguments from political ones.',
            ],
          },
          {
            hr: 'Zagovornici purizma tvrde da posuđenice osiromašuju izražajne mogućnosti hrvatskoga, dok njihovi kritičari upozoravaju da je jezik živ organizam koji se opire propisivanju.',
            en: 'Advocates of purism claim that loanwords impoverish the expressive possibilities of Croatian, while their critics warn that language is a living organism that resists prescription.',
            opts: [
              'Advocates of purism claim that loanwords impoverish the expressive possibilities of Croatian, while their critics warn that language is a living organism that resists prescription.',
              'Advocates of purism claim that loanwords enrich the expressive possibilities of Croatian, while their critics warn that language needs prescription.',
              'Critics of purism claim that loanwords impoverish Croatian, while its advocates warn that language resists change.',
              'Advocates of purism warn that language is a living organism, while their critics claim that loanwords stabilize it.',
            ],
          },
          {
            hr: 'Istina je, kao i obično, negdje između: norma daje jeziku stabilnost, a govornici mu daju život.',
            en: 'The truth is, as usual, somewhere in between: the norm gives language stability, and speakers give it life.',
            opts: [
              'The truth is, as usual, somewhere in between: the norm gives language stability, and speakers give it life.',
              'The truth is, unusually, somewhere in between: the norm gives language life, and speakers give it stability.',
              'The truth is simple: the norm limits language, and speakers defend it.',
              'The truth is, as usual, on both sides: the norm and the speakers fight for the language.',
            ],
          },
          {
            hr: 'Ono što se u udžbenicima naziva iznimkom, na tržnici je pravilo.',
            en: 'What is called an exception in textbooks is the rule at the market.',
            opts: [
              'What is called an exception in textbooks is the rule at the market.',
              'What is called a rule in textbooks is forbidden at the market.',
              'What the market calls an exception is the rule in textbooks.',
              'What textbooks allow is treated as an exception at the market.',
            ],
          },
          {
            hr: 'Možda je upravo ta napetost između propisanoga i govorenoga najpouzdaniji znak da je jezik doista živ.',
            en: 'Perhaps precisely that tension between the prescribed and the spoken is the most reliable sign that the language is truly alive.',
            opts: [
              'Perhaps precisely that tension between the prescribed and the spoken is the most reliable sign that the language is truly alive.',
              'Perhaps precisely that harmony between the prescribed and the spoken proves the language is alive.',
              'Perhaps that tension between the prescribed and the spoken is the surest sign the language is dying.',
              'Perhaps the absence of tension between writing and speech shows the language is truly alive.',
            ],
          },
        ],
      },
    ],
  },
};

export type ExerciseLevel = typeof EXERCISES.A1;
