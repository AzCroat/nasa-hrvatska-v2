// ─── B1 lessons in class order — Units 5–6 (lessons 21–30) ───────────────────
// Same shape and rules as the A1 and A2 class files (a1class/, a2class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, the B1 lessons before each lesson, and the lesson itself have
// taught. No relative koji-clauses (lesson 35), no passive participles.
// The mixes are ordered so that a form is produced before any item prints it:
// short typed answers (je, mi, do, iz, za, Te) come first for that reason.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.

export const CLASS_B1_U05_06 = {
  // ══ UNIT 5 ═════════════════════════════════════════════════════════════════

  // ── Genitive: possession, absence, quantity ────────────────────────────────
  'genitive-deep': {
    text: {
      kind: 'dialogue',
      title: 'Prazan hladnjak',
      lines: [
        {
          who: 'Dora',
          hr: 'Tin, hladnjak je opet prazan! Nema sira, nema jogurta, a nema ni kruha.',
          en: 'Tin, the fridge is empty again! There is no cheese, no yogurt, and no bread either.',
        },
        {
          who: 'Tin',
          hr: 'Znam. Sinoć je kod nas bilo puno ljudi, pa sada nema ni kave ni soka.',
          en: 'I know. There were a lot of people at our place last night, so now there is neither coffee nor juice.',
        },
        {
          who: 'Dora',
          hr: 'Idem do trgovine blizu fakulteta. Što trebamo?',
          en: 'I am going to the store near the university. What do we need?',
        },
        {
          who: 'Tin',
          hr: 'Kupi kilogram jabuka, litru mlijeka i nekoliko boca vode.',
          en: 'Buy a kilo of apples, a liter of milk and a few bottles of water.',
        },
        {
          who: 'Dora',
          hr: 'Dobro. A gdje je ključ od stana? Na stolu vidim samo ključ tvoje sestre.',
          en: 'All right. And where is the key to the apartment? On the table I only see your sister’s key.',
        },
        {
          who: 'Tin',
          hr: 'Evo ključa, bio je ispod novina. Vraćaš li se prije ručka?',
          en: 'Here is the key, it was under the newspaper. Are you coming back before lunch?',
        },
        {
          who: 'Dora',
          hr: 'Naravno. Bez doručka ne mogu učiti, a bez kave ne mogu ni misliti.',
          en: 'Of course. Without breakfast I can’t study, and without coffee I can’t even think.',
        },
        {
          who: 'Tin',
          hr: 'Onda požuri! Eno autobusa, upravo dolazi na stanicu.',
          en: 'Then hurry! There is the bus, it is just coming to the stop.',
        },
        {
          who: 'Dora',
          hr: 'Ne treba mi autobus, trgovina je pet minuta od kuće.',
          en: 'I don’t need the bus, the store is five minutes from the house.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why is the fridge empty, and what does Tin ask Dora to buy?',
          options: [
            'They were away all week; bread, cheese and coffee',
            'They had a lot of people over last night; apples, milk and water',
            'Tin’s sister ate everything; apples, yogurt and juice',
            'The store was closed yesterday; milk, bread and a newspaper',
          ],
          correct: 1,
          hint: 'Think of what happened at their place the evening before, and of the three things Tin lists with a measure.',
          explanation:
            'Last night there were a lot of people at their place. Tin’s list: a kilo of apples, a liter of milk and a few bottles of water.',
        },
        {
          q: 'Tin finds the key and says "Evo ključa" — not "Evo ključ". Why does the noun change?',
          options: [
            'Because the key belongs to his sister',
            'Because the key was lost, and lost things take a special form',
            'Because the pointing word evo is followed by the genitive',
            'Because ključ is the object of the verb vidim',
          ],
          correct: 2,
          hint: 'Look at the little word in front of the noun. It belongs to a family of three pointing words.',
          explanation:
            'Evo, like its two sisters eto and eno, is followed by the genitive: ključ → ključa.',
        },
        {
          type: 'type',
          q: 'Now you. Dora opens the cupboard and finds no sugar — šećer. She says: Nema ____.',
          answer: 'šećera',
          hint: 'Absence takes the genitive, and this noun is masculine.',
          explanation: 'Nema šećera. — after nema the noun is in the genitive: masculine -a.',
        },
        {
          type: 'transform',
          q: 'The kitchen is empty again. Say that there is NO bread and NO milk — start with Nema.',
          from: 'Imamo kruh i mlijeko.',
          answer: 'Nema kruha i mlijeka.',
          accept: [
            'Nema kruha ni mlijeka.',
            'Nema ni kruha ni mlijeka.',
            'Nema više kruha i mlijeka.',
          ],
          hint: 'After nema both nouns leave the dictionary form: one is masculine, one is neuter, and they end the same way.',
          explanation:
            'Nema kruha i mlijeka. — imati takes the accusative (kruh, mlijeko), but nema takes the genitive: kruha, mlijeka.',
        },
        {
          type: 'type',
          q: 'The store is ten minutes from the train station — kolodvor: Trgovina je deset minuta od ____.',
          answer: 'kolodvora',
          hint: 'od is one of the prepositions that always take the genitive.',
          explanation: 'deset minuta od kolodvora — od + genitive; masculine nouns add -a.',
        },
      ],
    },
    mix: [
      7,
      6,
      {
        type: 'match',
        q: 'Five prepositions that take the genitive. Match each to its meaning.',
        pairs: [
          ['bez', 'without'],
          ['blizu', 'near'],
          ['umjesto', 'instead of'],
          ['kod', 'at (someone’s place)'],
          ['ispred', 'in front of'],
        ],
        explanation:
          'All five are followed by the genitive: bez soli, blizu mora, umjesto čaja, kod bake, ispred kuće.',
      },
      0,
      {
        type: 'sort',
        q: 'Why is the last word in the genitive?',
        groups: ['Something is missing', 'An amount of something', 'It says whose — or of what'],
        items: [
          { hr: 'Nema struje.', group: 0 },
          { hr: 'kilogram mesa', group: 1 },
          { hr: 'ključ susjeda', group: 2 },
          { hr: 'Nema vremena.', group: 0 },
          { hr: 'puno posla', group: 1 },
          { hr: 'centar grada', group: 2 },
          { hr: 'čaša soka', group: 1 },
        ],
        explanation:
          'Three jobs of one case: absence after nema (nema struje), a measure or quantity (kilogram mesa, puno posla), and "of" — whose it is (ključ susjeda, centar grada).',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "Buy a liter of milk and a kilo of apples."',
        words: ['Kupi', 'litru', 'mlijeka', 'i', 'kilogram', 'jabuka.'],
        accept: ['Kupi kilogram jabuka i litru mlijeka.'],
        explanation:
          'Kupi litru mlijeka i kilogram jabuka. The measure comes first, and what is measured follows in the genitive — apples, being countable, in the genitive plural.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Marija', 'stanuje', 'blizu', 'trg.'],
        wrong: 3,
        answer: 'trga',
        hint: 'Look at the preposition in front of the last word, and at the case it asks for.',
        explanation:
          'Marija stanuje blizu trga. — blizu takes the genitive, and a masculine noun adds -a.',
      },
      5,
      {
        type: 'tf',
        q: 'You say "Evo ključa!" when the key is here in your hand, and "Eno broda!" when the ship is far away from both of you.',
        answer: true,
        hint: 'Three pointing words: one for near me, one for near you, one for over there.',
        explanation:
          'True. Evo points at something near the speaker, eno at something away from both people. Both take the genitive: ključa, broda.',
      },
      8,
      {
        type: 'transform',
        q: 'The cheese is gone. Say that there is no cheese in the fridge — use nema.',
        from: 'Sir je u hladnjaku.',
        answer: 'U hladnjaku nema sira.',
        accept: [
          'Nema sira u hladnjaku.',
          'Sira nema u hladnjaku.',
          'U hladnjaku više nema sira.',
          'Nema više sira u hladnjaku.',
        ],
        hint: 'With je the noun is the subject. After nema it can no longer stay in the dictionary form.',
        explanation:
          'U hladnjaku nema sira. — "there is no" is nema, and the thing that is absent goes into the genitive.',
      },
      11,
      9,
      2,
      {
        type: 'listen',
        audio: 'Nema više karata za večerašnji koncert.',
        q: 'What is the problem?',
        options: [
          'The concert is canceled',
          'There are no more tickets for tonight’s concert',
          'The tickets are too expensive',
          'The concert starts too late',
        ],
        correct: 1,
        explanation:
          'Nema više karata — there are no more tickets. Karata is the genitive plural of karta, after nema.',
      },
      {
        type: 'dictate',
        audio: 'Evo kave bez šećera.',
        answer: 'Evo kave bez šećera.',
        hint: 'Four words: someone hands you a coffee with no sugar in it.',
        explanation: 'Evo kave bez šećera. — two genitives: kave after evo, šećera after bez.',
      },
    ],
  },

  // ── Adjectives in the genitive ─────────────────────────────────────────────
  'genitive-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'Odakle si zapravo?',
      lines: [
        {
          who: 'Lana',
          hr: 'Josipe, odakle si ti zapravo? Iz Zagreba?',
          en: 'Josip, where are you actually from? From Zagreb?',
        },
        {
          who: 'Josip',
          hr: 'Ne, ja sam iz malog grada blizu Varaždina. A ti?',
          en: 'No, I am from a small town near Varaždin. And you?',
        },
        {
          who: 'Lana',
          hr: 'Ja sam iz Rijeke, iz starog dijela grada. Naš stan je bio blizu glavne tržnice.',
          en: 'I am from Rijeka, from the old part of town. Our apartment was near the main market.',
        },
        {
          who: 'Josip',
          hr: 'Lijepo! Sviđa li ti se u Zagrebu?',
          en: 'Nice! Do you like it in Zagreb?',
        },
        {
          who: 'Lana',
          hr: 'Sviđa mi se, ali ne mogu bez svoje obitelji. Skoro svaki vikend sam kod svojih roditelja.',
          en: 'I like it, but I can’t do without my family. Almost every weekend I am at my parents’.',
        },
        {
          who: 'Josip',
          hr: 'Razumijem te. Ja živim kod svog starijeg brata, nedaleko od našeg ureda.',
          en: 'I understand you. I live at my older brother’s, not far from our office.',
        },
        {
          who: 'Lana',
          hr: 'Blago tebi! Ja do posla putujem sat vremena. Bez dobre glazbe i jake kave ne bih mogla.',
          en: 'Lucky you! I travel an hour to work. Without good music and strong coffee I couldn’t do it.',
        },
        {
          who: 'Josip',
          hr: 'Dođi u subotu k nama na ručak. Ispred naše zgrade uvijek ima puno slobodnih mjesta za parkiranje.',
          en: 'Come to our place for lunch on Saturday. In front of our building there are always a lot of free parking spaces.',
        },
        {
          who: 'Lana',
          hr: 'Hvala, rado! Donijet ću kolač od tamne čokolade.',
          en: 'Thank you, gladly! I will bring a dark chocolate cake.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is each of them from, and where does Josip live now?',
          options: [
            'Lana is from a small town, Josip from Rijeka; he lives alone near the market',
            'Both are from Zagreb; Josip lives with his parents',
            'Josip is from a small town, Lana from the old part of Rijeka; he lives at his older brother’s',
            'Josip is from Varaždin, Lana from Zagreb; he lives in the office building',
          ],
          correct: 2,
          hint: 'One of them names a small town near a bigger one, the other an old part of a city by the sea.',
          explanation:
            'Josip is from a small town near Varaždin, Lana from the old part of Rijeka. Josip lives at his older brother’s, not far from the office.',
        },
        {
          q: 'Lana says "kod svojih roditelja". What would "kod njezinih roditelja" mean instead?',
          options: [
            'Exactly the same — the two words can always be swapped',
            'At the parents of some other woman, not Lana’s own',
            'At Josip’s parents’',
            'Nothing — njezin cannot be used after kod',
          ],
          correct: 1,
          hint: 'One of the two words always points back at the subject of the sentence.',
          explanation:
            'Svoj points back at the subject: Lana is at her OWN parents’. Njezinih would point at another woman’s parents.',
        },
        {
          type: 'type',
          q: 'Now you. Josip’s friend Ante comes from a big city: Ante je iz ____ grada. (velik)',
          answer: 'velikog',
          accept: ['velikoga'],
          hint: 'Iz takes the genitive, and the adjective has to agree with its masculine noun.',
          explanation:
            'Ante je iz velikog grada. — masculine genitive: -og on the adjective, -a on the noun.',
        },
        {
          type: 'transform',
          q: 'Josip lives at his brother’s. Say the same about Lana and HER OWN sister.',
          from: 'Josip živi kod svog brata.',
          answer: 'Lana živi kod svoje sestre.',
          hint: 'Three words change. The word for "own" has to take the feminine genitive ending, like the noun after it.',
          explanation:
            'Lana živi kod svoje sestre. — kod takes the genitive; before a feminine noun the ending is -e: svoje sestre.',
        },
        {
          type: 'type',
          q: 'Lana has a lot of good colleagues: Imam puno ____ kolega. (dobar)',
          answer: 'dobrih',
          hint: 'After puno comes the genitive plural. The adjective loses its fleeting a and takes the one plural ending.',
          explanation:
            'Imam puno dobrih kolega. — in the genitive plural every adjective ends in -ih.',
        },
      ],
    },
    mix: [
      4,
      8,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['iz hladnog mora', 'out of the cold sea'],
          ['bez crne kave', 'without black coffee'],
          ['kod dragih susjeda', 'at the dear neighbors’ place'],
          ['blizu nove škole', 'near the new school'],
          ['nakon dugog dana', 'after a long day'],
        ],
        explanation:
          'Five genitive prepositions, three adjective endings: -og for masculine and neuter (hladnog, dugog), -e for feminine (crne, nove), -ih for the plural (dragih).',
      },
      9,
      {
        type: 'sort',
        q: 'What does the adjective go with? Sort the phrases.',
        groups: ['One masculine or neuter noun', 'One feminine noun', 'A plural noun'],
        items: [
          { hr: 'do velikog jezera', group: 0 },
          { hr: 'bez tople vode', group: 1 },
          { hr: 'pet crvenih jabuka', group: 2 },
          { hr: 'kod dragog prijatelja', group: 0 },
          { hr: 'blizu stare crkve', group: 1 },
          { hr: 'puno lijepih gradova', group: 2 },
        ],
        explanation:
          'Masculine and neuter share -og (velikog jezera, dragog prijatelja), the feminine has -e (tople vode, stare crkve), and every plural has -ih (crvenih jabuka, lijepih gradova).',
      },
      0,
      {
        type: 'order',
        q: 'Put the words in order: "Our apartment is near the main train station."',
        words: ['Naš', 'stan', 'je', 'blizu', 'glavnog', 'kolodvora.'],
        accept: ['Naš je stan blizu glavnog kolodvora.', 'Blizu glavnog kolodvora je naš stan.'],
        explanation:
          'Naš stan je blizu glavnog kolodvora. Blizu takes the genitive, and the adjective agrees with its masculine noun: glavnog kolodvora.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ovo', 'je', 'soba', 'moja', 'sestre.'],
        wrong: 3,
        answer: 'moje',
        hint: 'Whose room is it? The owner is in the genitive — and so is the word in front of her.',
        explanation:
          'Ovo je soba moje sestre. — the owner goes in the genitive, and the possessive agrees with the noun: moje sestre.',
      },
      5,
      {
        type: 'tf',
        q: 'In "Ana je kod njezine sestre", the sister is Ana’s own sister.',
        answer: false,
        hint: 'Which word would point back at the subject of the sentence?',
        explanation:
          'False. For her own sister Croatian uses svoj: Ana je kod svoje sestre. Njezine points at another woman’s sister.',
      },
      11,
      {
        type: 'transform',
        q: 'One new book becomes five. Start with: Na stolu je pet…',
        from: 'Na stolu je nova knjiga.',
        answer: 'Na stolu je pet novih knjiga.',
        hint: 'After pet both words go into the genitive plural; the adjective takes the one ending all genders share.',
        explanation:
          'Na stolu je pet novih knjiga. — after five and up: genitive plural, with -ih on the adjective.',
      },
      6,
      12,
      7,
      {
        type: 'listen',
        audio: 'Nakon tog dugog dana bila sam jako umorna.',
        q: 'Who is speaking, and what do you learn?',
        options: [
          'A man; he was tired after a long trip',
          'A woman; she was very tired after that long day',
          'A woman; she was tired before the long day began',
          'A woman; she is not tired at all today',
        ],
        correct: 1,
        explanation:
          'bila sam umorna — a woman is speaking. Nakon tog dugog dana: after that long day, with nakon + genitive.',
      },
      {
        type: 'dictate',
        audio: 'Živimo blizu starog parka.',
        answer: 'Živimo blizu starog parka.',
        accept: ['Živimo blizu staroga parka.'],
        hint: 'Four words: "We live near the old park."',
        explanation:
          'Živimo blizu starog parka. — blizu + genitive: -og on the adjective, -a on the noun.',
      },
    ],
  },

  // ── The genitive plural’s special forms ────────────────────────────────────
  'genitive-plural-special': {
    text: {
      kind: 'dialogue',
      title: 'Popis za svadbu',
      lines: [
        {
          who: 'Ivana',
          hr: 'Marko, moramo napraviti popis. Koliko ljudi zovemo na svadbu?',
          en: 'Marko, we have to make a list. How many people are we inviting to the wedding?',
        },
        {
          who: 'Marko',
          hr: 'S moje strane dolazi četrdeset gostiju. Moja mama ima šest sestara, a svaka dolazi s mužem.',
          en: 'Forty guests are coming from my side. My mom has six sisters, and each one is coming with her husband.',
        },
        {
          who: 'Ivana',
          hr: 'Ja imam malu obitelj, ali puno prijatelja: deset djevojaka s fakulteta i osam momaka iz zbora.',
          en: 'I have a small family but a lot of friends: ten girls from college and eight guys from the choir.',
        },
        {
          who: 'Marko',
          hr: 'To je već skoro šezdeset ljudi. Ima li restoran dovoljno stolova?',
          en: 'That is already almost sixty people. Does the restaurant have enough tables?',
        },
        {
          who: 'Ivana',
          hr: 'Ima petnaest velikih stolova. Ali svadba traje deset sati — tko će toliko plesati?',
          en: 'It has fifteen big tables. But a wedding lasts ten hours — who is going to dance that long?',
        },
        {
          who: 'Marko',
          hr: 'Ja sigurno neću. Nakon nekoliko pjesama uvijek me bole noge.',
          en: 'I certainly won’t. After a few songs my feet always hurt.',
        },
        {
          who: 'Ivana',
          hr: 'A pozivnice? Trebamo šezdeset pisama i isto toliko maraka.',
          en: 'And the invitations? We need sixty letters and the same number of stamps.',
        },
        {
          who: 'Marko',
          hr: 'Ili jednostavno pošaljemo poruke. Imam deset prstiju, sve ću napisati za pet minuta!',
          en: 'Or we simply send text messages. I have ten fingers, I will write everything in five minutes!',
        },
        {
          who: 'Ivana',
          hr: 'Ne može! Bake ne čitaju poruke, one žele pravu pozivnicu.',
          en: 'No way! Grandmas don’t read text messages, they want a real invitation.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how many guests come from Marko’s side, and what does he want to send instead of letters?',
          options: [
            'Sixty guests; e-mails',
            'Forty guests; text messages',
            'Fifteen guests; postcards',
            'Forty guests; nothing — he wants to call everyone',
          ],
          correct: 1,
          hint: 'His number is smaller than the total they reach together. His idea needs only his ten fingers.',
          explanation:
            'Forty guests come from Marko’s side. He would simply send text messages; Ivana insists on real invitations.',
        },
        {
          q: 'Marko says his mom has "šest sestara". With two sisters he would say "dvije sestre". Why are the forms different?',
          options: [
            'After two, three and four the noun is genitive singular; from five up it is genitive plural, and here an extra a slips into the stem',
            'The longer form is used only for relatives on the mother’s side',
            'The longer form is the accusative, because of the verb ima',
            'The shorter form is used for young sisters, the longer for adults',
          ],
          correct: 0,
          hint: 'It is the number that decides. And look at what happens between the last two consonants of the stem.',
          explanation:
            'From five up Croatian counts with the genitive plural. The stem sestr- ends in two consonants, so an a slips in between them. After 2–4 the noun is genitive singular: dvije sestre.',
        },
        {
          type: 'type',
          q: 'Now you. Ivana’s grandma never leaves her cats alone for long: Baka ima pet ____. (mačka)',
          answer: 'mačaka',
          hint: 'The stem ends in two consonants, č and k. Something has to slip in between them.',
          explanation:
            'Baka ima pet mačaka. — genitive plural with the slipped-in a: mačk- → mačaka.',
        },
        {
          type: 'type',
          q: 'The wedding is half a year away: Do svadbe ima još šest ____. (mjesec)',
          answer: 'mjeseci',
          accept: ['mjeseca'],
          hint: 'This is one of the few masculine nouns whose standard genitive plural ends like the plural of stvar.',
          explanation:
            'Do svadbe ima još šest mjeseci. — the standard genitive plural of mjesec is mjeseci (šest mjeseca is also heard).',
        },
        {
          type: 'transform',
          q: 'One letter is not enough. Say that there are twenty of them on the table.',
          from: 'Na stolu je jedno pismo.',
          answer: 'Na stolu je dvadeset pisama.',
          accept: ['Dvadeset pisama je na stolu.'],
          hint: 'After twenty you need the genitive plural — and the stem of this noun ends in two consonants.',
          explanation:
            'Na stolu je dvadeset pisama. — pism- ends in two consonants, so an a slips in: pisama.',
        },
      ],
    },
    mix: [
      8,
      0,
      {
        type: 'match',
        q: 'Counting the body. Match each phrase to its meaning.',
        pairs: [
          ['deset prstiju', 'ten fingers'],
          ['šest nogu', 'six legs'],
          ['četiri ruke', 'four arms'],
          ['puno ušiju', 'a lot of ears'],
          ['pet noći', 'five nights'],
        ],
        explanation:
          'From five up the body words have their own endings: prstiju, ušiju with -iju; nogu with -u. After four it is still the ordinary form: četiri ruke. And noć, like stvar, takes -i: pet noći.',
      },
      7,
      {
        type: 'sort',
        q: 'You count "pet …". How will the noun end? Sort the dictionary forms.',
        groups: ['An a slips into the stem', 'It ends in -i', 'It ends in -iju or -u'],
        items: [
          { hr: 'momak', group: 0 },
          { hr: 'noć', group: 1 },
          { hr: 'uho', group: 2 },
          { hr: 'student', group: 0 },
          { hr: 'riječ', group: 1 },
          { hr: 'noga', group: 2 },
          { hr: 'zemlja', group: 0 },
          { hr: 'lopta', group: 1 },
        ],
        explanation:
          'pet momaka, studenata, zemalja — an a slips in. Pet noći, riječi, lopti — the ending -i. Pet ušiju and pet nogu — the body words.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "A spider has eight legs, and a dog four."',
        words: ['Pauk', 'ima', 'osam', 'nogu,', 'a', 'pas', 'četiri', 'noge.'],
        accept: ['Pas ima četiri noge, a pauk osam nogu.'],
        explanation:
          'Pauk ima osam nogu, a pas četiri noge. After osam the special form nogu; after četiri the ordinary genitive singular noge.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Naša', 'djeca', 'znaju', 'deset', 'igra.'],
        wrong: 4,
        answer: 'igara',
        hint: 'After deset you need the genitive plural, and this stem ends in two consonants.',
        explanation:
          'Naša djeca znaju deset igara. — the stem igr- ends in two consonants, so from five up an a slips in: igara.',
      },
      {
        type: 'tf',
        q: '"Pet satova" is the correct way to say "five hours".',
        answer: false,
        hint: 'Sat is one of the masculine words that take -i when you count time.',
        explanation:
          'False. Five hours is pet sati. Satovi, satova are clocks, or lessons at school: pet satova means five clocks or five lessons.',
      },
      9,
      {
        type: 'transform',
        q: 'Three becomes ten. Change the number and the form of the noun.',
        from: 'Vidio sam tri muškarca.',
        answer: 'Vidio sam deset muškaraca.',
        hint: 'The dictionary form has a fleeting a. It is lost after three — and it comes back from five up.',
        explanation:
          'Vidio sam deset muškaraca. — muškarac loses its a in muškarca and gets it back in the genitive plural: muškaraca.',
      },
      3,
      11,
      6,
      4,
      {
        type: 'listen',
        audio: 'Čekali smo pet sati, a vlak nije došao.',
        q: 'How long did they wait?',
        options: ['Five minutes', 'Five hours', 'Five days', 'Five months'],
        correct: 1,
        explanation: 'pet sati — five hours. Sat takes -i in the genitive plural.',
      },
      {
        type: 'dictate',
        audio: 'Na trgu je bilo puno ljudi.',
        answer: 'Na trgu je bilo puno ljudi.',
        hint: 'Six words: "There were a lot of people in the square."',
        explanation:
          'Na trgu je bilo puno ljudi. — ljudi is the genitive plural of čovjek, and after puno the verb is neuter singular: bilo.',
      },
    ],
  },

  // ── Numbers and nouns ──────────────────────────────────────────────────────
  'numbers-nouns': {
    text: {
      kind: 'dialogue',
      title: 'Apartman na moru',
      lines: [
        {
          who: 'Gospođa Kovač',
          hr: 'Dobar dan! Trebamo apartman na dvanaest dana, u srpnju.',
          en: 'Good day! We need an apartment for twelve days, in July.',
        },
        {
          who: 'Vlasnik',
          hr: 'Dobar dan! Koliko vas ima?',
          en: 'Good day! How many of you are there?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Nas je petero: muž i ja i troje djece.',
          en: 'There are five of us: my husband and I and three children.',
        },
        {
          who: 'Vlasnik',
          hr: 'Imam apartman s tri sobe i pet kreveta. Ima i dva balkona i dvije kupaonice.',
          en: 'I have an apartment with three rooms and five beds. It also has two balconies and two bathrooms.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Odlično! Koliko je daleko plaža?',
          en: 'Excellent! How far is the beach?',
        },
        {
          who: 'Vlasnik',
          hr: 'Samo četiri minute pješice. A do grada vozi autobus svakih dvadeset minuta.',
          en: 'Only four minutes on foot. And a bus goes to town every twenty minutes.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Imamo i dva psa. Je li to problem?',
          en: 'We also have two dogs. Is that a problem?',
        },
        {
          who: 'Vlasnik',
          hr: 'Nije. U lipnju je kod mene bilo pet pasa i dvadeset jedan gost, i svi su bili zadovoljni!',
          en: 'It is not. In June I had five dogs and twenty-one guests here, and everyone was happy!',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Onda dolazimo! Dvanaest dana na moru — jedva čekam.',
          en: 'Then we are coming! Twelve days at the seaside — I can hardly wait.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how many people are in the Kovač family, and how far is the beach?',
          options: [
            'Three people; twenty minutes by bus',
            'Five people; four minutes on foot',
            'Five people; twelve minutes on foot',
            'Four people and a dog; four minutes by car',
          ],
          correct: 1,
          hint: 'Count the parents and the children. The beach is closer than the bus ride to town.',
          explanation:
            'There are five of them — the parents and three children — and the beach is only four minutes on foot.',
        },
        {
          q: 'The owner says "pet pasa" but "dvadeset jedan gost". Why is the second noun not in the plural?',
          options: [
            'Because gost has no plural form',
            'Because guests are people, and people are counted differently from animals',
            'Because the number ends in the word for "one", and the last word of the number decides',
            'Because after every number above twenty the noun is singular',
          ],
          correct: 2,
          hint: 'Read the number aloud and listen to its last word.',
          explanation:
            'In a compound number the last word decides. It ends in jedan, so the noun is nominative singular — just as after one alone.',
        },
        {
          type: 'type',
          q: 'Now you. The big room has four closets — ormar: Soba ima četiri ____.',
          answer: 'ormara',
          hint: 'Two, three and four take the genitive singular; the noun is masculine.',
          explanation:
            'Soba ima četiri ormara. — after 2, 3 and 4: genitive singular, masculine -a.',
        },
        {
          type: 'type',
          q: 'The family is staying twelve nights — noć: Ostajemo dvanaest ____.',
          answer: 'noći',
          hint: 'Do not be misled by the "two" inside the number: the teens all behave like five and up.',
          explanation:
            'Ostajemo dvanaest noći. — 11 to 19 always take the genitive plural, and noć takes -i there.',
        },
        {
          type: 'transform',
          q: 'The ferry was very late. Change one hour to twenty-two hours.',
          from: 'Čekali smo jedan sat.',
          answer: 'Čekali smo dvadeset dva sata.',
          accept: ['Čekali smo dvadeset i dva sata.'],
          hint: 'Look at the last word of the new number. It decides the form of the noun.',
          explanation:
            'Čekali smo dvadeset dva sata. — the number ends in dva, so the noun takes the form used after two: sata.',
        },
      ],
    },
    mix: [
      8,
      9,
      {
        type: 'match',
        q: 'Match each number to the noun form that can follow it.',
        pairs: [
          ['jedan', 'grad'],
          ['dva', 'grada'],
          ['dvanaest', 'gradova'],
          ['dvije', 'godine'],
          ['jedno', 'pismo'],
        ],
        explanation:
          'jedan grad (nominative singular), dva grada (the form after 2–4), dvanaest gradova (genitive plural). Dvije goes only with a feminine noun, jedno only with a neuter one.',
      },
      4,
      {
        type: 'sort',
        q: 'Which form of the noun follows each number?',
        groups: [
          'Singular, as after one',
          'The form after two, three, four',
          'The form after five and up',
        ],
        items: [
          { hr: 'dvadeset jedan', group: 0 },
          { hr: 'tri', group: 1 },
          { hr: 'četrnaest', group: 2 },
          { hr: 'dvadeset dva', group: 1 },
          { hr: 'sedam', group: 2 },
          { hr: 'trideset četiri', group: 1 },
          { hr: 'dvanaest', group: 2 },
          { hr: 'sto jedan', group: 0 },
        ],
        explanation:
          'The last word of the number decides: … jedan → singular; … dva, tri, četiri → genitive singular; everything else → genitive plural. The teens (dvanaest, četrnaest) always go with five and up.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "There are two glasses and three plates on the table."',
        words: ['Na', 'stolu', 'su', 'dvije', 'čaše', 'i', 'tri', 'tanjura.'],
        accept: [
          'Na stolu su tri tanjura i dvije čaše.',
          'Dvije čaše i tri tanjura su na stolu.',
          'Tri tanjura i dvije čaše su na stolu.',
        ],
        explanation:
          'Na stolu su dvije čaše i tri tanjura. Dvije is the feminine form of two, so it goes with čaše; tanjura is the masculine form after tri.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dan', 'ima', 'dvadeset', 'četiri', 'sati.'],
        wrong: 4,
        answer: 'sata',
        hint: 'Look at the last word of the number.',
        explanation:
          'Dan ima dvadeset četiri sata. — the number ends in četiri, so the noun takes the form used after 2–4.',
      },
      1,
      {
        type: 'tf',
        q: '"Pet studenata su došli" is the standard way to say "Five students came".',
        answer: false,
        hint: 'Think of what kind of verb follows a number from five up.',
        explanation:
          'False. After five and up the verb is neuter singular: Pet studenata je došlo. A plural verb goes with two, three and four: Dva studenta su došla.',
      },
      5,
      {
        type: 'transform',
        q: 'The class got bigger: one student becomes twenty-five.',
        from: 'U razredu je jedan učenik.',
        answer: 'U razredu je dvadeset pet učenika.',
        accept: ['U razredu je dvadeset i pet učenika.'],
        hint: 'The new number ends in pet, so the noun needs the genitive plural.',
        explanation:
          'U razredu je dvadeset pet učenika. — the last word is pet: genitive plural. The verb stays singular: je.',
      },
      2,
      3,
      10,
      11,
      {
        type: 'listen',
        audio: 'Vlak kasni četrdeset dvije minute.',
        q: 'How late is the train?',
        options: ['24 minutes', '42 minutes', '40 minutes', '14 minutes'],
        correct: 1,
        explanation:
          'četrdeset dvije minute — forty-two minutes. The number ends in dvije, so minute is the form after two.',
      },
      {
        type: 'dictate',
        audio: 'Imam dva brata i pet sestara.',
        answer: 'Imam dva brata i pet sestara.',
        hint: 'Six words: two brothers and five sisters.',
        explanation:
          'Imam dva brata i pet sestara. — brata after dva (genitive singular), sestara after pet (genitive plural).',
      },
    ],
  },

  // ── Time in the genitive ───────────────────────────────────────────────────
  'time-genitive': {
    text: {
      kind: 'dialogue',
      title: 'Stare fotografije',
      lines: [
        {
          who: 'Lea',
          hr: 'Bako, tko je ovo na slici? Kad je to bilo?',
          en: 'Grandma, who is this in the picture? When was that?',
        },
        {
          who: 'Baka',
          hr: 'To smo djed i ja. Upoznali smo se jednog ljeta na Korčuli. Te godine sam završila školu.',
          en: 'That is Grandpa and me. We met one summer on Korčula. That year I finished school.',
        },
        {
          who: 'Lea',
          hr: 'A vjenčali ste se sljedeće godine?',
          en: 'And you got married the following year?',
        },
        {
          who: 'Baka',
          hr: 'Jesmo, petog svibnja. Tog dana je padala kiša, ali nama to nije smetalo.',
          en: 'We did, on May 5. It rained that day, but that did not bother us.',
        },
        {
          who: 'Lea',
          hr: 'Lijepo! A ova slika? Ovdje ima puno snijega.',
          en: 'How nice! And this picture? There is a lot of snow here.',
        },
        {
          who: 'Baka',
          hr: 'Te zime smo živjeli u Gorskom kotaru. Svakog jutra je djed čistio snijeg ispred kuće.',
          en: 'That winter we lived in Gorski Kotar. Every morning Grandpa cleared the snow in front of the house.',
        },
        {
          who: 'Lea',
          hr: 'Prošlog tjedna sam i ja bila tamo, na izletu sa školom! Ali snijega nije bilo.',
          en: 'Last week I was there too, on a school trip! But there was no snow.',
        },
        {
          who: 'Baka',
          hr: 'Idućeg mjeseca imam rođendan. Hoćemo li zajedno otići tamo?',
          en: 'Next month it is my birthday. Shall we go there together?',
        },
        {
          who: 'Lea',
          hr: 'Naravno, bako! A jednog dana ću i ja svojoj unuci pokazivati ove slike.',
          en: 'Of course, Grandma! And one day I, too, will be showing these pictures to my granddaughter.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: when did Grandma and Grandpa meet, and when did they get married?',
          options: [
            'They met one winter in Gorski Kotar and married that same year',
            'They met at school and married on May 15',
            'They met one summer on Korčula and married on May 5 of the following year',
            'They met last week on a school trip and will marry next month',
          ],
          correct: 2,
          hint: 'Their story starts on an island, in a warm season. The wedding has an exact date in spring.',
          explanation:
            'They met one summer on Korčula (jednog ljeta) and got married the following year, on May 5 (petog svibnja).',
        },
        {
          q: 'Grandma says "Te zime" but "Tog dana". Why does the first word change?',
          options: [
            'The short form is for the distant past, the long one for the recent past',
            'It agrees with its noun: zima is feminine and dan is masculine, and both words are in the genitive',
            'The short form is plural, the long one singular',
            'The short form is used with seasons, the long one with dates',
          ],
          correct: 1,
          hint: 'Look at the gender of each noun.',
          explanation:
            'Both phrases are genitives with no preposition. The word for "that" agrees with its noun: feminine before zime, masculine before dana.',
        },
        {
          type: 'type',
          q: 'Now you. Lea is planning a trip to Split a year from now: ____ godine idem u Split. (idući)',
          answer: 'Iduće',
          hint: 'Godina is feminine, so the word for "next" takes the feminine genitive ending.',
          explanation:
            'Iduće godine idem u Split. — feminine genitive on both words, and no preposition.',
        },
        {
          type: 'type',
          q: 'Lea’s birthday is on April 10: Rođena sam ____ travnja. (deseti)',
          answer: 'desetog',
          accept: ['desetoga'],
          hint: 'In a date the ordinal goes into the genitive, just like the month after it.',
          explanation:
            'Rođena sam desetog travnja. — ordinal and month both in the genitive, with no preposition.',
        },
        {
          type: 'transform',
          q: 'This happened one summer. Say that it happened EVERY summer.',
          from: 'Jednog ljeta smo išli na more.',
          answer: 'Svakog ljeta smo išli na more.',
          accept: [
            'Svakoga ljeta smo išli na more.',
            'Svako ljeto smo išli na more.',
            'Svakog ljeta išli smo na more.',
            'Svakoga ljeta išli smo na more.',
            'Svako ljeto išli smo na more.',
          ],
          hint: 'Only the first word changes. The word for "every" takes the same ending as the word it replaces.',
          explanation:
            'Svakog ljeta smo išli na more. — svaki in the neuter genitive, like jednog. (The accusative svako ljeto is also correct.)',
        },
      ],
    },
    mix: [
      11,
      7,
      {
        type: 'match',
        q: 'When? Match each phrase to its meaning.',
        pairs: [
          ['prošle zime', 'last winter'],
          ['ove jeseni', 'this fall'],
          ['iduće subote', 'next Saturday'],
          ['svakog jutra', 'every morning'],
          ['tog proljeća', 'that spring'],
        ],
        explanation:
          'Five time phrases in the genitive, none with a preposition: prošli (last), ovaj (this), idući (next), svaki (every), taj (that).',
      },
      8,
      {
        type: 'sort',
        q: 'What does each time phrase do?',
        groups: [
          'Looks back at the past',
          'Looks ahead to the future',
          'Says it happens again and again',
        ],
        items: [
          { hr: 'prošle subote', group: 0 },
          { hr: 'idućeg ljeta', group: 1 },
          { hr: 'svake nedjelje', group: 2 },
          { hr: 'sljedeće godine', group: 1 },
          { hr: 'subotom', group: 2 },
          { hr: 'prošlog mjeseca', group: 0 },
        ],
        explanation:
          'prošli looks back, idući and sljedeći look ahead, and svaki repeats — as does the instrumental subotom, "on Saturdays".',
      },
      9,
      1,
      {
        type: 'order',
        q: 'Put the words in order: "Next year I want to study in Zagreb."',
        words: ['Iduće', 'godine', 'želim', 'studirati', 'u', 'Zagrebu.'],
        accept: [
          'Želim studirati u Zagrebu iduće godine.',
          'Iduće godine želim u Zagrebu studirati.',
          'Iduće godine u Zagrebu želim studirati.',
          'U Zagrebu želim studirati iduće godine.',
          'Želim iduće godine studirati u Zagrebu.',
        ],
        explanation:
          'Iduće godine želim studirati u Zagrebu. The time phrase needs no preposition; both of its words are in the feminine genitive.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Rođen', 'sam', 'petog', 'listopad.'],
        wrong: 3,
        answer: 'listopada',
        hint: 'In a date the number is in the genitive. What about the month after it?',
        explanation:
          'Rođen sam petog listopada. — in a date both the ordinal and the month go into the genitive.',
      },
      3,
      {
        type: 'tf',
        q: '"U prošle subote sam bio na moru" is correct: a time phrase needs the preposition u.',
        answer: false,
        hint: 'Compare: u subotu — and the phrase with "last".',
        explanation:
          'False. The genitive time phrase takes no preposition: Prošle subote sam bio na moru. The preposition belongs to the accusative: u subotu.',
      },
      10,
      {
        type: 'transform',
        q: 'Say it with the genitive instead — the meaning stays the same.',
        from: 'Svaki dan pijem kavu.',
        answer: 'Svakog dana pijem kavu.',
        accept: [
          'Svakoga dana pijem kavu.',
          'Pijem kavu svakog dana.',
          'Pijem kavu svakoga dana.',
          'Kavu pijem svakog dana.',
          'Kavu pijem svakoga dana.',
        ],
        hint: 'Both words change: the adjective takes the masculine genitive ending, and so does the noun.',
        explanation:
          'Svakog dana pijem kavu. — svaki dan (accusative) and svakog dana (genitive) mean the same; the genitive is a little more formal.',
      },
      4,
      6,
      0,
      5,
      {
        type: 'listen',
        audio: 'Dan državnosti slavi se tridesetog svibnja.',
        q: 'When is Statehood Day celebrated?',
        options: ['On May 13', 'On May 30', 'On March 30', 'On May 3'],
        correct: 1,
        explanation:
          'tridesetog svibnja — on May 30. Tridesetog is the thirtieth; the thirteenth would be trinaestog.',
      },
      {
        type: 'dictate',
        audio: 'Jednog dana ću živjeti na moru.',
        answer: 'Jednog dana ću živjeti na moru.',
        accept: ['Jednoga dana ću živjeti na moru.'],
        hint: 'Six words: a dream about living by the sea, some day.',
        explanation:
          'Jednog dana ću živjeti na moru. — jednog dana also looks forward: "one day, some day".',
      },
    ],
  },

  // ══ UNIT 6 ═════════════════════════════════════════════════════════════════

  // ── Time and duration ──────────────────────────────────────────────────────
  'time-duration': {
    text: {
      kind: 'dialogue',
      title: 'Koliko dugo si ovdje?',
      lines: [
        {
          who: 'Davor',
          hr: 'Emma, tvoj hrvatski je odličan! Koliko dugo živiš u Zagrebu?',
          en: 'Emma, your Croatian is excellent! How long have you lived in Zagreb?',
        },
        {
          who: 'Emma',
          hr: 'Hvala! Živim ovdje već dvije godine, a hrvatski učim tek godinu dana.',
          en: 'Thank you! I have lived here for two years now, and I have been learning Croatian for only a year.',
        },
        {
          who: 'Davor',
          hr: 'Tek godinu dana? A zašto si došla u Hrvatsku?',
          en: 'Only a year? And why did you come to Croatia?',
        },
        {
          who: 'Emma',
          hr: 'Moj djed je iz Like. Prije tri godine sam prvi put posjetila njegovo selo i ostala cijeli mjesec.',
          en: 'My grandfather is from Lika. Three years ago I visited his village for the first time and stayed a whole month.',
        },
        {
          who: 'Davor',
          hr: 'I odmah si odlučila ostati?',
          en: 'And you decided to stay right away?',
        },
        {
          who: 'Emma',
          hr: 'Nisam odmah. Vratila sam se u Kanadu, ali nakon nekoliko mjeseci sam znala: to je to.',
          en: 'Not right away. I went back to Canada, but after a few months I knew: this is it.',
        },
        {
          who: 'Davor',
          hr: 'A radiš li još u onoj školi stranih jezika?',
          en: 'And do you still work at that language school?',
        },
        {
          who: 'Emma',
          hr: 'Više ne. Od ponedjeljka radim u jednoj turističkoj agenciji. Za tjedan dana vodim prvu grupu na Plitvice!',
          en: 'Not anymore. Since Monday I have been working at a travel agency. In a week I am taking my first group to Plitvice!',
        },
        {
          who: 'Davor',
          hr: 'Bravo! Vrijeme leti — uskoro ćeš ti mene učiti hrvatski.',
          en: 'Bravo! Time flies — soon you will be teaching me Croatian.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how long has Emma lived in Zagreb, and how long has she been learning Croatian?',
          options: [
            'Three years in Zagreb; two years of Croatian',
            'One month in Zagreb; one week of Croatian',
            'Two years in Zagreb; only one year of Croatian',
            'One year in Zagreb; two years of Croatian',
          ],
          correct: 2,
          hint: 'The two numbers are different, and Davor is surprised by the smaller one.',
          explanation:
            'She has lived in Zagreb for two years and has been learning Croatian for only a year.',
        },
        {
          q: 'Emma says "Živim ovdje već dvije godine" — with the verb in the present. What would "Živjela sam ovdje dvije godine" tell Davor?',
          options: [
            'Exactly the same thing, only more politely',
            'That she will live there for two more years',
            'That she lived there for two years and no longer does',
            'That she moved there two years ago and may still be there',
          ],
          correct: 2,
          hint: 'In Croatian, something that began in the past and is still going on stays in the present.',
          explanation:
            'The past tense closes the period: she lived there and left. Because she still lives there, Croatian uses the present, where English says "have lived".',
        },
        {
          type: 'type',
          q: 'Now you. Davor has been learning German for only three months — less than you would expect: Njemački učim ____ tri mjeseca.',
          answer: 'tek',
          accept: ['samo'],
          hint: 'A short word for "only" that goes with time: it says the period is shorter than expected.',
          explanation:
            'Njemački učim tek tri mjeseca. — tek in front of a duration means "only that long". The verb is in the present, because he is still learning.',
        },
        {
          type: 'type',
          q: 'Emma started at the agency on Monday and is still there. Since when? Radim u agenciji ____ ponedjeljka.',
          answer: 'od',
          hint: 'The preposition for the starting point of something that is still going on. It takes the genitive.',
          explanation:
            'Radim u agenciji od ponedjeljka. — the starting point with the genitive, and the present, because she still works there: "I have been working there since Monday."',
        },
        {
          type: 'transform',
          q: 'Davor began working at the bank ten years ago and still works there. Say it in ONE sentence with već.',
          from: 'Davor je počeo raditi u banci prije deset godina.',
          answer: 'Davor već deset godina radi u banci.',
          accept: [
            'Davor radi u banci već deset godina.',
            'Već deset godina Davor radi u banci.',
            'Davor u banci radi već deset godina.',
            'Davor već deset godina u banci radi.',
          ],
          hint: 'It is still going on, so the verb is in the present — and the word for "ago" disappears.',
          explanation:
            'Davor već deset godina radi u banci. — već + a duration + the present: it started in the past and still continues.',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'match',
        q: 'Small words, big difference. Match each phrase to its meaning.',
        pairs: [
          ['prije dva dana', 'two days ago'],
          ['za dva dana', 'in two days'],
          ['cijela dva dana', 'for two whole days'],
          ['tijekom ljeta', 'during the summer'],
          ['nakon ručka', 'after lunch'],
        ],
        explanation:
          'prije looks back (ago) and za looks forward (in). A duration has no preposition at all: Čekao sam cijela dva dana. Tijekom and nakon take the genitive.',
      },
      9,
      {
        type: 'sort',
        q: 'Is it still going on, or is it over?',
        groups: ['Still true now', 'Over — no longer true'],
        items: [
          { hr: 'Živim ovdje pet godina.', group: 0 },
          { hr: 'Živio sam ondje pet godina.', group: 1 },
          { hr: 'Već dva sata čekam.', group: 0 },
          { hr: 'Čekao sam dva sata.', group: 1 },
          { hr: 'Učim hrvatski godinu dana.', group: 0 },
          { hr: 'Učila sam njemački tri godine.', group: 1 },
        ],
        explanation:
          'A duration with the PRESENT means it is still going on — English "have lived, have been waiting". With the past, the period is closed.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I have been working here for three years now."',
        words: ['Već', 'tri', 'godine', 'radim', 'ovdje.'],
        accept: [
          'Radim ovdje već tri godine.',
          'Radim već tri godine ovdje.',
          'Ovdje radim već tri godine.',
          'Već tri godine ovdje radim.',
          'Ovdje već tri godine radim.',
        ],
        explanation:
          'Već tri godine radim ovdje. Već stands in front of the duration, and the verb stays in the present.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Tijekom', 'vikend', 'radim', 'u', 'restoranu.'],
        wrong: 1,
        answer: 'vikenda',
        hint: 'The first word is a preposition, and it asks for a case.',
        explanation: 'Tijekom vikenda radim u restoranu. — tijekom (during) takes the genitive.',
      },
      1,
      {
        type: 'tf',
        q: 'Film počinje za deset minuta. Ti si stigao prije pola sata. Dakle, nisi zakasnio.',
        answer: true,
        hint: 'One phrase looks forward from now, the other looks back. Put the two on a clock.',
        explanation:
          'True. The movie starts IN ten minutes (za), and you arrived half an hour AGO (prije) — so you are not late.',
      },
      8,
      {
        type: 'transform',
        q: 'It is no longer true. Say so with "više ne".',
        from: 'Još radim u školi.',
        answer: 'Više ne radim u školi.',
        accept: ['U školi više ne radim.', 'Ne radim više u školi.'],
        hint: 'The word for "still" goes away; two words take its place, and one of them negates the verb.',
        explanation: 'Više ne radim u školi. — još (still) ↔ više ne (not anymore).',
      },
      0,
      2,
      10,
      11,
      {
        type: 'listen',
        audio: 'Sastanak počinje za pola sata.',
        q: 'When does the meeting start?',
        options: [
          'It started half an hour ago',
          'In half an hour',
          'It lasts half an hour',
          'In an hour and a half',
        ],
        correct: 1,
        explanation: 'za pola sata — in half an hour. "Half an hour ago" would be prije pola sata.',
      },
      {
        type: 'dictate',
        audio: 'Još nisam gotov.',
        answer: 'Još nisam gotov.',
        hint: 'Three words: a man says he is not finished yet.',
        explanation: 'Još nisam gotov. — još + a negated verb means "not yet".',
      },
    ],
  },

  // ── Verbs that take the genitive ───────────────────────────────────────────
  'verbs-with-genitive': {
    text: {
      kind: 'dialogue',
      title: 'Čega se bojiš?',
      lines: [
        {
          who: 'Tomo',
          hr: 'Nika, zašto stojiš? Idemo, do vrha ima još samo pola sata.',
          en: 'Nika, why are you standing there? Let’s go, it is only half an hour more to the top.',
        },
        {
          who: 'Nika',
          hr: 'Ne mogu. Bojim se visine, a ovaj most je jako visok.',
          en: 'I can’t. I am afraid of heights, and this bridge is very high.',
        },
        {
          who: 'Tomo',
          hr: 'Ne boj se! Držat ću te za ruku. Sjećaš li se našeg prvog izleta? Tada si se bojala krava!',
          en: 'Don’t be afraid! I will hold your hand. Do you remember our first trip? Back then you were afraid of cows!',
        },
        {
          who: 'Nika',
          hr: 'Sjećam se. I još ih se bojim! A čega se ti bojiš?',
          en: 'I remember. And I am still afraid of them! And what are you afraid of?',
        },
        { who: 'Tomo', hr: 'Ja? Samo zmija i zubara.', en: 'Me? Only snakes and the dentist.' },
        {
          who: 'Nika',
          hr: 'Zubara? Stvarno? I ne sramiš se toga?',
          en: 'The dentist? Really? And you are not ashamed of that?',
        },
        {
          who: 'Tomo',
          hr: 'Nimalo. Zbog zubara sam se čak odrekao čokolade!',
          en: 'Not at all. Because of the dentist I even gave up chocolate!',
        },
        {
          who: 'Nika',
          hr: 'Ti, bez čokolade? Ne vjerujem! Dobro, drži me čvrsto — idemo preko mosta.',
          en: 'You, without chocolate? I don’t believe it! All right, hold me tight — let’s go across the bridge.',
        },
        {
          who: 'Tomo',
          hr: 'Držim te. Vidiš da možeš! Ovog mosta ćeš se još dugo sjećati.',
          en: 'I’ve got you. You see that you can! You will remember this bridge for a long time.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what stops Nika on the trail, and what did Tomo give up?',
          options: [
            'She is tired; he gave up hiking',
            'She is afraid of snakes; he gave up coffee',
            'She is afraid of heights on the bridge; he gave up chocolate',
            'She is afraid of cows on the path; he gave up the dentist',
          ],
          correct: 2,
          hint: 'Her problem is right in front of her and very high. His sacrifice is something sweet.',
          explanation:
            'Nika is afraid of heights and the bridge is high. Tomo gave up chocolate — because of the dentist.',
        },
        {
          q: 'Nika says "I još ih se bojim!" What is "ih", and why does it stand where it does?',
          options: [
            'It is the dative "to them"; the dative always comes last',
            'It is the short genitive "of them" — the cows; short pronouns stand before se',
            'It is the accusative "them"; it stands after the first verb',
            'It is part of the verb bojati se and never moves',
          ],
          correct: 1,
          hint: 'What is she still afraid of? And which case does this verb ask for?',
          explanation:
            'Bojati se takes the genitive, and the short genitive of oni / one is ih. Among the little second-place words, a short pronoun comes before se.',
        },
        {
          type: 'type',
          q: 'Now you. Tomo’s little brother is afraid of dogs: Brat se boji ____. (pas, in the plural)',
          answer: 'pasa',
          hint: 'You need the genitive plural. The a that pas loses in psi comes back.',
          explanation:
            'Brat se boji pasa. — bojati se + genitive; the genitive plural of pas is pasa.',
        },
        {
          type: 'type',
          q: 'Nika asks Tomo and his brother together: Čega se vi ____? (bojati se)',
          answer: 'bojite',
          hint: 'This verb in -ati does not have an -am present. Take the pattern of govoriti for vi.',
          explanation:
            'Čega se vi bojite? — bojati se is an -ati verb with an -im present: bojim, bojiš, … bojite.',
        },
        {
          type: 'transform',
          q: 'Say the same with sjećati se: "I remember that trip." Mind the case.',
          from: 'Nisam zaboravio taj izlet.',
          answer: 'Sjećam se tog izleta.',
          accept: [
            'Sjećam se toga izleta.',
            'Ja se sjećam tog izleta.',
            'Tog izleta se sjećam.',
            'Dobro se sjećam tog izleta.',
            'Još se sjećam tog izleta.',
          ],
          hint: 'Zaboraviti takes the accusative. The verb of remembering takes another case — on both words.',
          explanation:
            'Sjećam se tog izleta. — sjećati se takes the genitive, with no preposition: taj izlet → tog izleta.',
        },
      ],
    },
    mix: [
      7,
      {
        type: 'match',
        q: 'Five verbs that take the genitive. Match each to its meaning.',
        pairs: [
          ['plašiti se', 'to be afraid of'],
          ['sjećati se', 'to remember'],
          ['sramiti se', 'to be ashamed of'],
          ['odreći se', 'to give up'],
          ['čuvati se', 'to beware of'],
        ],
        explanation:
          'All five are reflexive, and all put the thing in the genitive: Plašim se ispita. Sjećam se tog dana. Odrekao sam se cigareta.',
      },
      8,
      4,
      10,
      {
        type: 'sort',
        q: 'How does the ja form of the present end? Sort the verbs.',
        groups: ['It ends in -im', 'It ends in -am'],
        items: [
          { hr: 'spavati', group: 1 },
          { hr: 'ležati', group: 0 },
          { hr: 'pjevati', group: 1 },
          { hr: 'trčati', group: 0 },
          { hr: 'gledati', group: 1 },
          { hr: 'bježati', group: 0 },
          { hr: 'čekati', group: 1 },
        ],
        explanation:
          'Most -ati verbs have -am: spavam, pjevam, gledam, čekam. A small group has -im and must be learned: ležim, trčim, bježim — like bojim se.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "My sister is afraid of spiders and snakes."',
        words: ['Moja', 'sestra', 'se', 'boji', 'pauka', 'i', 'zmija.'],
        accept: [
          'Moja se sestra boji pauka i zmija.',
          'Moja sestra se boji zmija i pauka.',
          'Moja se sestra boji zmija i pauka.',
        ],
        explanation:
          'Moja sestra se boji pauka i zmija. Both nouns are in the genitive plural after bojati se.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Odrekla', 'sam', 'se', 'šećer.'],
        wrong: 3,
        answer: 'šećera',
        hint: 'Giving something up works like fearing it: the thing is not in the dictionary form.',
        explanation: 'Odrekla sam se šećera. — odreći se takes the genitive.',
      },
      5,
      {
        type: 'tf',
        q: '"Zaboravio sam adresu" and "Ne sjećam se adrese" are both correct, although the noun has two different forms.',
        answer: true,
        hint: 'Two verbs with almost the same meaning — do they take the same case?',
        explanation:
          'True. Zaboraviti takes the accusative (adresu); sjećati se takes the genitive (adrese).',
      },
      9,
      {
        type: 'transform',
        q: 'Replace "tog psa" with a short pronoun. Mind where it goes.',
        from: 'Bojim se tog psa.',
        answer: 'Bojim ga se.',
        accept: ['Ja ga se bojim.'],
        hint: 'The short genitive of on — and it stands in front of se.',
        explanation:
          'Bojim ga se. — ga is the short genitive of on, and short pronouns come before se.',
      },
      11,
      1,
      {
        type: 'listen',
        audio: 'Djed se odrekao cigareta prije dvije godine.',
        q: 'What did Grandpa do?',
        options: [
          'He started smoking two years ago',
          'He gave up cigarettes two years ago',
          'He will give up cigarettes in two years',
          'He has been afraid of cigarettes for two years',
        ],
        correct: 1,
        explanation:
          'odrekao se cigareta — he gave up cigarettes (genitive plural); prije dvije godine — two years ago.',
      },
      {
        type: 'dictate',
        audio: 'Čuvaj se psa!',
        answer: 'Čuvaj se psa!',
        hint: 'Three words — a sign on a gate: "Beware of the dog!"',
        explanation: 'Čuvaj se psa! — čuvati se takes the genitive: pas → psa.',
      },
    ],
  },

  // ── Telling a story ────────────────────────────────────────────────────────
  'telling-a-story': {
    text: {
      kind: 'text',
      title: 'Zadnji trajekt',
      lines: [
        {
          hr: 'Nećeš vjerovati što nam se dogodilo prošlog ljeta na Braču.',
          en: 'You will not believe what happened to us last summer on Brač.',
        },
        {
          hr: 'Bio je zadnji dan odmora. Sunce je sjalo, more je bilo toplo i nitko nije gledao na sat.',
          en: 'It was the last day of vacation. The sun was shining, the sea was warm and nobody was looking at the clock.',
        },
        {
          hr: 'Kupali smo se i jeli sladoled, a trajekt za Split je polazio u osam navečer.',
          en: 'We were swimming and eating ice cream, and the ferry for Split was leaving at eight in the evening.',
        },
        {
          hr: 'Odjednom je moja sestra viknula: „Već je pola osam!”',
          en: 'Suddenly my sister shouted: “It is already half past seven!”',
        },
        {
          hr: 'Prvo smo spakirali stvari, onda smo otrčali do auta, a zatim smo krenuli prema luci.',
          en: 'First we packed our things, then we ran to the car, and next we set off toward the port.',
        },
        {
          hr: 'Dok smo se vozili, tata je šutio, a mama je stalno gledala na sat.',
          en: 'While we were driving, Dad was silent and Mom kept looking at the clock.',
        },
        {
          hr: 'Kad smo stigli u luku, trajekt je već polazio.',
          en: 'When we got to the port, the ferry was already leaving.',
        },
        {
          hr: 'U tom trenutku jedan je radnik podigao ruku i trajekt je stao.',
          en: 'At that moment a worker raised his hand and the ferry stopped.',
        },
        {
          hr: 'Na kraju smo ušli zadnji, a svi putnici su nam se smijali. Taj dan nikad neću zaboraviti.',
          en: 'In the end we were the last to get on, and all the passengers laughed at us. I will never forget that day.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the story: when did the ferry leave, and who noticed the time?',
          options: [
            'At eight in the evening; the sister',
            'At half past seven; the mother',
            'At eight in the morning; the father',
            'At nine in the evening; a worker in the port',
          ],
          correct: 0,
          hint: 'Someone shouted the time out loud — and it was half an hour before the departure.',
          explanation:
            'The ferry was leaving at eight in the evening. The sister shouted that it was already half past seven.',
        },
        {
          q: 'Compare "Sunce je sjalo, more je bilo toplo" with "moja sestra je viknula". Why does the storyteller use two different kinds of verb?',
          options: [
            'The first is about nature, the second about people',
            'The first sets the scene — what was going on; the second is one event that moves the story forward',
            'The first is in the present, the second in the past',
            'The first is formal, the second is everyday speech',
          ],
          correct: 1,
          hint: 'Ask of each verb: did it go on in the background, or did it happen once and change things?',
          explanation:
            'The background is imperfective (sjalo — it was shining); the events are perfective (viknula — she shouted, once). That division is the backbone of a Croatian story.',
        },
        {
          type: 'type',
          q: 'Now you. Set the scene — it was raining all day: Cijeli dan je ____ kiša. (padati or pasti? Choose, and use the past.)',
          answer: 'padala',
          hint: 'It went on all day, so it is background. The past form agrees with kiša.',
          explanation:
            'Cijeli dan je padala kiša. — the scene is imperfective, and the form is feminine.',
        },
        {
          type: 'type',
          q: 'Two things were going on at the same time — Dad was driving, the children were sleeping: ____ je tata vozio, mi smo spavali.',
          answer: 'Dok',
          hint: 'One short word that joins two things happening side by side. The storyteller uses it for the drive to the port.',
          explanation:
            'Dok je tata vozio, mi smo spavali. — the word for "while" with two imperfective verbs: two backgrounds running together.',
        },
        {
          type: 'transform',
          q: 'Close your story with the classic last line: "I will NEVER forget that summer."',
          from: 'Zaboravit ću to ljeto.',
          answer: 'Nikad neću zaboraviti to ljeto.',
          accept: [
            'Nikada neću zaboraviti to ljeto.',
            'To ljeto nikad neću zaboraviti.',
            'To ljeto nikada neću zaboraviti.',
            'To ljeto neću nikad zaboraviti.',
            'To ljeto neću nikada zaboraviti.',
            'Neću nikad zaboraviti to ljeto.',
            'Neću nikada zaboraviti to ljeto.',
          ],
          hint: 'The word for "never" is not enough on its own: the future auxiliary has to turn negative too.',
          explanation:
            'Nikad neću zaboraviti to ljeto. — after nikad the verb is negated as well: nikad neću.',
        },
      ],
    },
    mix: [
      8,
      5,
      7,
      {
        type: 'match',
        q: 'What does each phrase do in a story?',
        pairs: [
          ['Da ti ispričam što se dogodilo.', 'opens the story'],
          ['U tom trenutku…', 'marks the turn'],
          ['Nakon toga…', 'gives the next step'],
          ['Ma daj!', 'the listener reacts'],
          ['Na kraju…', 'closes the story'],
        ],
        explanation:
          'A story needs an opener, steps, a turn and a close — and a listener who reacts: Ma daj! Stvarno? I što onda?',
      },
      0,
      {
        type: 'sort',
        q: 'Is it the background of the story, or an event?',
        groups: ['Background — it was going on', 'Event — it happened once'],
        items: [
          { hr: 'Sunce je sjalo.', group: 0 },
          { hr: 'Pas je zalajao.', group: 1 },
          { hr: 'Djeca su spavala.', group: 0 },
          { hr: 'Netko je pokucao na vrata.', group: 1 },
          { hr: 'Puhao je jak vjetar.', group: 0 },
          { hr: 'Ušla je u sobu.', group: 1 },
          { hr: 'Čekali smo vlak.', group: 0 },
          { hr: 'Vlak je stigao.', group: 1 },
        ],
        explanation:
          'Imperfective verbs paint the scene (sjalo, spavala, puhao, čekali). Perfective verbs are the single events that move the story on (zalajao, pokucao, ušla, stigao).',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "While I was cooking lunch, the phone rang."',
        words: ['Dok', 'sam', 'kuhala', 'ručak,', 'zazvonio', 'je', 'telefon.'],
        accept: [
          'Dok sam kuhala ručak, telefon je zazvonio.',
          'Zazvonio je telefon dok sam kuhala ručak.',
          'Telefon je zazvonio dok sam kuhala ručak.',
        ],
        explanation:
          'Dok sam kuhala ručak, zazvonio je telefon. The cooking is the background (imperfective); the ringing interrupts it (perfective).',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Djed', 'je', 'cijelo', 'jutro', 'pročitao', 'novine.'],
        wrong: 4,
        answer: 'čitao',
        hint: 'It went on all morning. Which kind of verb can last that long?',
        explanation:
          'Djed je cijelo jutro čitao novine. — something that went on for a stretch of time (cijelo jutro) is imperfective. Pročitao is one finished act and cannot fill a whole morning.',
      },
      1,
      {
        type: 'tf',
        q: '"Odjednom je dolazio autobus" is the natural way to say that the bus suddenly arrived.',
        answer: false,
        hint: 'A sudden arrival is one single event.',
        explanation:
          'False. The event that turns the story is perfective: Odjednom je došao autobus. Dolazio would make the arrival drag on.',
      },
      9,
      {
        type: 'transform',
        q: 'Make the anecdote vivid: retell it in the present, as Croatian storytellers do.',
        from: 'Stajao sam na stanici i čekao autobus.',
        answer: 'Stojim na stanici i čekam autobus.',
        accept: ['Stojim ja na stanici i čekam autobus.', 'Ja stojim na stanici i čekam autobus.'],
        hint: 'Two verbs go into the present. One of them is an -ati verb whose present is irregular: sto-.',
        explanation:
          'Stojim na stanici i čekam autobus. — the historic present. Stajati has the present stojim.',
      },
      3,
      11,
      10,
      2,
      {
        type: 'listen',
        audio: 'Dok smo spavali, netko je ukrao naš bicikl.',
        q: 'What happened, and when?',
        options: [
          'Someone stole their bike while they were sleeping',
          'They fell asleep after someone stole their bike',
          'They found a bike while they were out walking',
          'Someone was sleeping on their bike',
        ],
        correct: 0,
        explanation:
          'Dok smo spavali — while we were sleeping (background); netko je ukrao — someone stole (the event).',
      },
      {
        type: 'dictate',
        audio: 'Nećeš vjerovati što se dogodilo.',
        answer: 'Nećeš vjerovati što se dogodilo.',
        hint: 'Five words: how you begin a story that a friend will find hard to believe.',
        explanation: 'Nećeš vjerovati što se dogodilo. — "You will not believe what happened."',
      },
    ],
  },

  // ── News and media ─────────────────────────────────────────────────────────
  'media-news': {
    text: {
      kind: 'text',
      title: 'Vijesti u sedam',
      lines: [
        {
          hr: 'Dobra večer, ovo su vijesti u sedam.',
          en: 'Good evening, this is the seven o’clock news.',
        },
        {
          hr: 'Gradonačelnik Zagreba jutros je otvorio novi most preko Save.',
          en: 'This morning the mayor of Zagreb opened a new bridge across the Sava.',
        },
        {
          hr: 'Izjavio je da će preko mosta svaki dan prelaziti dvadeset tisuća automobila.',
          en: 'He stated that twenty thousand cars will cross the bridge every day.',
        },
        {
          hr: 'Policija javlja da je na autocesti prema Splitu velika gužva, ali da nema nesreća.',
          en: 'The police report that there is a big traffic jam on the highway toward Split, but that there are no accidents.',
        },
        {
          hr: 'Navodno će od idućeg mjeseca poskupjeti kava i kruh.',
          en: 'Apparently coffee and bread will get more expensive from next month.',
        },
        {
          hr: 'Prema izvještaju iz Dubrovnika, turisti su ove godine jako zadovoljni: more je čisto, a hrana odlična.',
          en: 'According to a report from Dubrovnik, tourists are very satisfied this year: the sea is clean and the food excellent.',
        },
        {
          hr: 'Novinari tvrde da će nogometaši Hajduka dobiti novog trenera, ali klub to još nije potvrdio.',
          en: 'Journalists claim that Hajduk’s soccer players will get a new coach, but the club has not confirmed it yet.',
        },
        {
          hr: 'I na kraju vrijeme: meteorolozi najavljuju da će sutra biti sunčano i toplo.',
          en: 'And finally the weather: the forecasters announce that tomorrow will be sunny and warm.',
        },
        { hr: 'To je sve za večeras. Laku noć!', en: 'That is all for tonight. Good night!' },
      ],
      questions: [
        {
          q: 'Without looking back at the news: what did the mayor do this morning, and what will the weather be like tomorrow?',
          options: [
            'He opened a new highway; rainy and cold',
            'He opened a new bridge; sunny and warm',
            'He visited Split; sunny and warm',
            'He opened a new bridge; a big storm is coming',
          ],
          correct: 1,
          hint: 'His news is about crossing a river. The forecast is good news.',
          explanation:
            'The mayor opened a new bridge across the Sava, and the forecasters announce a sunny, warm day.',
        },
        {
          q: 'Two of the news items are passed on as unconfirmed. Which two — and how can you tell?',
          options: [
            'The bridge and the traffic: a named person or the police say them',
            'The tourists and the weather: they come from a report and a forecast',
            'The prices and the new coach: one starts with a single word that marks hearsay, the other is only claimed by journalists and the club has not confirmed it',
            'None: everything on the news is said as a fact',
          ],
          correct: 2,
          hint: 'Look for one adverb at the very start of a sentence, and for a sentence that ends with a "but".',
          explanation:
            'The price rise opens with the word for "apparently, allegedly", which marks second-hand news. The coach story is what journalists claim — and the club has not confirmed it.',
        },
        {
          type: 'type',
          q: 'Now you. Report what the mayor said: Gradonačelnik je rekao ____ je most gotov.',
          answer: 'da',
          hint: 'English can leave out "that". Croatian cannot.',
          explanation:
            'Gradonačelnik je rekao da je most gotov. — a verb of saying is followed by da.',
        },
        {
          type: 'type',
          q: 'You heard a rumor about milk and are not sure it is true. Mark it as hearsay: ____ će poskupjeti i mlijeko.',
          answer: 'Navodno',
          hint: 'One adverb that says: I am only passing this on.',
          explanation:
            'Navodno će poskupjeti i mlijeko. — navodno marks what follows as second-hand and unverified.',
        },
        {
          type: 'transform',
          q: 'Report the minister’s words. Start with: Ministar je rekao da…',
          from: 'Ministar: „Cijene neće rasti.”',
          answer: 'Ministar je rekao da cijene neće rasti.',
          accept: ['Ministar je rekao da neće rasti cijene.'],
          hint: 'Keep his sentence as it is and join it to the verb of saying with one small word.',
          explanation:
            'Ministar je rekao da cijene neće rasti. — who said it + a verb of saying + da + what was said.',
        },
      ],
    },
    mix: [
      9,
      6,
      {
        type: 'match',
        q: 'The world of the media. Match each word to its meaning.',
        pairs: [
          ['žuti tisak', 'the tabloids'],
          ['časopis', 'a magazine'],
          ['emisija', 'a TV or radio show'],
          ['novinar', 'a journalist'],
          ['glavni lik', 'the main character'],
        ],
        explanation:
          'žuti tisak is literally "the yellow press"; a časopis comes out weekly or monthly; an emisija is a show on TV or the radio.',
      },
      8,
      0,
      {
        type: 'sort',
        q: 'Does the speaker state it as a fact, or pass it on from someone else?',
        groups: ['Stated as a fact', 'Passed on — second-hand'],
        items: [
          { hr: 'Sutra je praznik.', group: 0 },
          { hr: 'Navodno je sutra praznik.', group: 1 },
          { hr: 'Benzin je poskupio.', group: 0 },
          { hr: 'Kažu da će benzin poskupjeti.', group: 1 },
          { hr: 'Na autocesti je gužva.', group: 0 },
          { hr: 'Susjeda kaže da je na autocesti gužva.', group: 1 },
        ],
        explanation:
          'Navodno, kažu da and "X kaže da" all show that the speaker is passing something on, not vouching for it.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I heard on the news that it will rain tomorrow."',
        words: ['Čuo', 'sam', 'na', 'vijestima', 'da', 'će', 'sutra', 'padati', 'kiša.'],
        accept: [
          'Čuo sam na vijestima da će sutra kiša padati.',
          'Čuo sam na vijestima da će kiša sutra padati.',
          'Čuo sam na vijestima da će kiša padati sutra.',
          'Čuo sam na vijestima da će padati kiša sutra.',
          'Na vijestima sam čuo da će sutra padati kiša.',
        ],
        explanation:
          'Čuo sam na vijestima da će sutra padati kiša. After da the short word će comes straight away, in second place.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Čula', 'sam', 'na', 'radio', 'da', 'dolazi', 'kiša.'],
        wrong: 3,
        answer: 'radiju',
        hint: 'Where did she hear it? After na, a place where something is heard needs the locative.',
        explanation:
          'Čula sam na radiju da dolazi kiša. — čuti na + locative: na radiju, na vijestima.',
      },
      2,
      {
        type: 'tf',
        q: 'The headline "Ministar u posjetu Splitu" is a mistake: its verb is missing.',
        answer: false,
        hint: 'Think of how headlines save space.',
        explanation:
          'False. Headlines drop the forms of biti by convention. The reader supplies the verb: Ministar je u posjetu Splitu.',
      },
      5,
      {
        type: 'transform',
        q: 'Turn the headline into a full sentence.',
        from: 'Ministar stigao u Split',
        answer: 'Ministar je stigao u Split.',
        accept: ['Ministar je u Split stigao.'],
        hint: 'One short word is missing — the one headlines always drop.',
        explanation:
          'Ministar je stigao u Split. — the auxiliary je goes back in, in second place.',
      },
      1,
      3,
      10,
      11,
      {
        type: 'listen',
        audio: 'Navodno će idućeg tjedna poskupjeti benzin.',
        q: 'How sure is the speaker?',
        options: [
          'Completely sure — it has been officially announced',
          'Not sure — the speaker is passing on something unconfirmed',
          'The speaker says it will not happen',
          'The speaker says it already happened last week',
        ],
        correct: 1,
        explanation:
          'Navodno marks the news as second-hand: apparently gas will get more expensive next week.',
      },
      {
        type: 'dictate',
        audio: 'Jesi li čuo što se dogodilo?',
        answer: 'Jesi li čuo što se dogodilo?',
        hint: 'Six words: you ask a friend — a man — whether he has heard what happened.',
        explanation: 'Jesi li čuo što se dogodilo? — "Have you heard what happened?"',
      },
    ],
  },

  // ── Feelings and inner life ────────────────────────────────────────────────
  'feelings-inner-life': {
    text: {
      kind: 'dialogue',
      title: 'Poziv iz Dublina',
      lines: [
        {
          who: 'Mama',
          hr: 'Halo, Ana! Kako si? Snalaziš li se u novom gradu?',
          en: 'Hello, Ana! How are you? Are you finding your way in the new city?',
        },
        {
          who: 'Ana',
          hr: 'Snalazim se pomalo, mama. Posao je dobar, ali navečer mi je često dosadno.',
          en: 'I am managing, little by little, Mom. The job is good, but in the evenings I am often bored.',
        },
        {
          who: 'Mama',
          hr: 'Žao mi je što si sama. Nedostajemo li ti?',
          en: 'I am sorry that you are alone. Do you miss us?',
        },
        {
          who: 'Ana',
          hr: 'Naravno! Nedostaješ mi ti, nedostaje mi tata, a najviše mi nedostaju tvoji kolači.',
          en: 'Of course! I miss you, I miss Dad, and most of all I miss your cakes.',
        },
        {
          who: 'Mama',
          hr: 'Ha! A je li ti hladno? Brinem se za tebe, tamo stalno pada kiša.',
          en: 'Ha! And are you cold? I worry about you, it rains there all the time.',
        },
        {
          who: 'Ana',
          hr: 'Malo mi je hladno, ali ne boj se, kupila sam topli kaput. Nadam se da ćete me uskoro posjetiti.',
          en: 'I am a little cold, but don’t worry, I bought a warm coat. I hope you will visit me soon.',
        },
        {
          who: 'Mama',
          hr: 'Dolazimo za Božić! Tata se malo boji aviona, ali je iz inata prvi kupio kartu.',
          en: 'We are coming for Christmas! Dad is a little afraid of planes, but out of sheer defiance he was the first to buy a ticket.',
        },
        {
          who: 'Ana',
          hr: 'Stvarno? Jako mi je drago! Veselim se vašem dolasku.',
          en: 'Really? I am so glad! I am looking forward to your arrival.',
        },
        {
          who: 'Mama',
          hr: 'I mi se veselimo, dušo. Čuvaj se!',
          en: 'We are looking forward to it too, sweetheart. Take care!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how does Ana feel in the evenings, and what does she miss most of all?',
          options: [
            'She is afraid; she misses her warm coat',
            'She is bored; she misses her mom’s cakes',
            'She is cold; she misses the sea',
            'She is glad; she misses her job',
          ],
          correct: 1,
          hint: 'Her job is fine — the evenings are the problem. And the thing she misses most is sweet.',
          explanation:
            'In the evenings she is often bored (dosadno mi je), and most of all she misses her mom’s cakes.',
        },
        {
          q: 'Ana says "nedostaje mi tata" but "nedostaju mi tvoji kolači". Why does the verb change?',
          options: [
            'Because the first is about a person and the second about food',
            'Because mi changes from singular to plural',
            'Because the one who is missed is the subject: Dad is one, the cakes are many',
            'Because najviše always takes a plural verb',
          ],
          correct: 2,
          hint: 'In Croatian the sentence is turned around. Who or what is the subject here — Ana?',
          explanation:
            'With nedostajati the missed person or thing is the subject, and the one who misses is in the dative (mi). One subject → nedostaje; several → nedostaju.',
        },
        {
          type: 'type',
          q: 'Now you. Ana writes to her best friend Maja: "I miss you." ____ mi.',
          answer: 'Nedostaješ',
          hint: 'Maja — "you" — is the subject, so the verb takes the ti ending.',
          explanation: 'Nedostaješ mi. — you are the subject (ti → -eš); I am in the dative: mi.',
        },
        {
          type: 'type',
          q: 'Her parents are coming for Christmas — Božić — and Ana is looking forward to it: Veselim se ____.',
          answer: 'Božiću',
          hint: 'Ana uses this verb at the end of the call. It takes the case of "to what?", and the noun is masculine.',
          explanation: 'Veselim se Božiću. — veseliti se takes the dative: Božić → Božiću.',
        },
        {
          type: 'transform',
          q: 'Ana is glad. Now say the same about her FATHER: "He is glad."',
          from: 'Drago mi je.',
          answer: 'Drago mu je.',
          accept: ['Njemu je drago.', 'I njemu je drago.'],
          hint: 'The feeling happens TO someone. Only the short dative word changes.',
          explanation:
            'Drago mu je. — the person who feels it is in the dative: mi (to me), mu (to him).',
        },
      ],
    },
    mix: [
      4,
      8,
      {
        type: 'match',
        q: 'The feeling happens TO you. Match each sentence to its meaning.',
        pairs: [
          ['Hladno mi je.', 'I am cold.'],
          ['Dosadno mi je.', 'I am bored.'],
          ['Žao mi je.', 'I am sorry.'],
          ['Drago mi je.', 'I am glad.'],
          ['Muka mi je.', 'I feel sick.'],
        ],
        explanation:
          'In all five the person is in the dative — mi, "to me" — and the feeling is what the sentence is about.',
      },
      5,
      {
        type: 'sort',
        q: 'Which case does the verb take here?',
        groups: ['Genitive — of what?', 'Dative — to what?'],
        items: [
          { hr: 'Bojim se zime.', group: 0 },
          { hr: 'Veselim se ljetu.', group: 1 },
          { hr: 'Sramim se toga.', group: 0 },
          { hr: 'Nadam se suncu.', group: 1 },
          { hr: 'Čudim se tome.', group: 1 },
          { hr: 'Bojim se mraka.', group: 0 },
        ],
        explanation:
          'Fear and shame take the genitive: bojati se, sramiti se. Looking forward, hoping and wondering take the dative: veseliti se, nadati se, čuditi se.',
      },
      6,
      0,
      {
        type: 'order',
        q: 'Put the words in order: "I hope that you will come tomorrow."',
        words: ['Nadam', 'se', 'da', 'ćeš', 'sutra', 'doći.'],
        accept: ['Nadam se da ćeš doći sutra.'],
        explanation:
          'Nadam se da ćeš sutra doći. After da the short word ćeš comes at once, and the infinitive can wait till the end.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Brinem', 'se', 'za', 'sestra.'],
        wrong: 3,
        answer: 'sestru',
        hint: 'After za this verb wants the accusative, not the dictionary form.',
        explanation: 'Brinem se za sestru. — brinuti se za takes the accusative: sestra → sestru.',
      },
      1,
      {
        type: 'tf',
        q: '"Ja sam hladan" is how a man tells his Croatian friends that he feels cold.',
        answer: false,
        hint: 'Think of where the feeling "happens" in Croatian.',
        explanation:
          'False. That sentence means he is cold to the touch, or cold-hearted. The sensation happens to you, in the dative: Hladno mi je.',
      },
      9,
      {
        type: 'transform',
        q: 'Say the same with veseliti se: "I am looking forward to the vacation."',
        from: 'Jedva čekam odmor.',
        answer: 'Veselim se odmoru.',
        accept: ['Jako se veselim odmoru.', 'Ja se veselim odmoru.', 'Već se veselim odmoru.'],
        hint: 'Čekati takes the accusative. The verb of looking forward takes the case of "to what?".',
        explanation: 'Veselim se odmoru. — veseliti se takes the dative: odmor → odmoru.',
      },
      2,
      3,
      10,
      11,
      {
        type: 'listen',
        audio: 'Dosadno mi je bez tebe.',
        q: 'How does the speaker feel?',
        options: ['Bored without you', 'Cold without a coat', 'Sorry for you', 'Afraid of you'],
        correct: 0,
        explanation: 'Dosadno mi je — I am bored; bez tebe — without you (bez + genitive).',
      },
      {
        type: 'dictate',
        audio: 'Jako mi je žao.',
        answer: 'Jako mi je žao.',
        hint: 'Four words: "I am very sorry."',
        explanation: 'Jako mi je žao. — the short words mi and je take second place, after jako.',
      },
    ],
  },
};
