// functions/api/content/_data/a2new/batch05.js
//
// New A2 lessons, batch 05 (Croaticum restructure, stage 3, 2026-11-12). See a2new/index.js.
//
// possessive-dative (41) · verbs-with-dative-a2 (42) · impersonal-feelings (44) ·
// car-and-traffic (45) · public-transport (47) · phone-calls-a2 (48).
//
// Razgovarajte s nama! A2-B1, lesson 5 (Transport i komunikacija): the dative in its A2
// uses, and the car, transport and telephone topics that carry it. Each lesson uses only
// grammar taught at or before its own masterOrder: the dative of adjectives (40), the
// conditional (32–34), aspect (28–30), clitic order (11) and the se-impersonal (43).
// No comparative, no relative koji-clause and no da-clause appears anywhere here.

/** Spine entries for this batch. `masterOrder` is the lesson's final A2 position. */
export const SPINE = [
  {
    id: 'possessive-dative',
    masterOrder: 41,
    prerequisites: ['dative-locative', 'giving-and-sending', 'object-pronouns'],
    objectives: [
      'Say whose something is with a short dative: Majka mi je liječnica.',
      'Put the dative pronoun in second place, before je and after su',
      'Say what happened to someone’s things: Pala mu je torba, Ukrali su mi novčanik',
      'Use a noun in the dative as the owner: Sestri je auto u servisu.',
    ],
  },
  {
    id: 'verbs-with-dative-a2',
    masterOrder: 42,
    prerequisites: ['verbs-with-dative', 'dative-locative', 'possessive-dative'],
    objectives: [
      'Say you miss someone the Croatian way: Nedostaješ mi.',
      'Use smetati and odgovarati: Smeta li vam glazba? Odgovara li vam u pet?',
      'Thank, congratulate and believe someone in the dative: Zahvalio sam joj, Čestitam ti',
      'Make the verb agree with the thing, and keep the dative in the clitic cluster',
    ],
  },
  {
    id: 'impersonal-feelings',
    masterOrder: 44,
    prerequisites: ['feelings', 'impersonal', 'verbs-with-dative-a2'],
    objectives: [
      'Say how you feel with dative + je + -o: Hladno mi je, Dosadno nam je',
      'Use the set: drago, žao, lako, teško, zlo, svejedno, neugodno, lijepo',
      'Put it in the past and future with bilo and bit će, and negate it with nije',
      'Say what you need with Treba mi / Trebaju mi, the verb agreeing with the thing',
      'Say what you feel like doing with dative + se: Spava mi se. Ne radi mi se.',
    ],
  },
  {
    id: 'car-and-traffic',
    masterOrder: 45,
    prerequisites: ['possessive-dative', 'travel-croatia', 'aspect'],
    objectives: [
      'Name the parts of a car: motor, gume, kočnice, svjetla, akumulator',
      'Say what went wrong: Auto mi se pokvario, Probušila mi se guma',
      'Talk to a mechanic: Možete li pogledati kočnice? Kad će auto biti gotov?',
      'Talk about traffic, parking and fuel: gužva, semafor, kružni tok, cestarina',
    ],
  },
  {
    id: 'public-transport',
    masterOrder: 47,
    prerequisites: ['travel-transport', 'travel-croatia', 'ici-going'],
    objectives: [
      'Buy a ticket one way or return: Jednu povratnu kartu do Splita, molim.',
      'Read a timetable and ask about departures and delays: Kad polazi? Vlak kasni.',
      'Ask where to get off and where to change: Gdje moram sići? Morate presjesti.',
      'Say how you travel with the instrumental alone: Idem tramvajem.',
    ],
  },
  {
    id: 'phone-calls-a2',
    masterOrder: 48,
    prerequisites: ['phone-call', 'modal-verbs-a2', 'formal-address'],
    objectives: [
      'Answer a call formally and ask for someone politely: Mogu li razgovarati s…?',
      'Handle a bad line and a cut-off call: Loše se čuje. Prekinula se veza.',
      'Leave a voicemail message with your name, the reason and your number',
      'Ask politely with the conditional: Biste li mogli ponoviti?',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA2.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Possessive dative
  // ─────────────────────────────────────────────────────────
  {
    id: 'possessive-dative',
    title: 'My Mother Is a Doctor: Whose with the Dative',
    subtitle: 'Majka mi je liječnica — mi does the job of moj',
    icon: '👨‍👩‍👧',
    level: 'A2',
    duration: '~8 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'A Second Way to Say "My"',
        body: 'You already say "my mother" with moj: Moja majka je liječnica. In everyday speech Croatians very often say it another way: Majka mi je liječnica. Word for word, "mother to-me is a doctor". The short dative pronoun mi tells you whose mother it is. This lesson teaches that pattern — and the place it has to stand in the sentence.',
        icon: '👨‍👩‍👧',
      },
      {
        type: 'rule',
        title: 'The Dative Says Whose',
        body: 'Put the owner in the dative and leave the thing in the nominative. Brat mi je student. (My brother is a student.) Kuća joj je velika. (Her house is big.) Stan nam je mali. (Our flat is small.) Both ways are correct Croatian: Moj brat je student says the same as Brat mi je student. The dative version is the one you will hear most in conversation, especially about family and about things that belong to you.',
        highlight: 'Brat mi je student.',
      },
      {
        type: 'table',
        title: 'The Short Dative Pronouns',
        headers: ['Owner', 'Short dative', 'Example', 'Meaning'],
        rows: [
          ['ja', 'mi', 'Sestra mi je u Zagrebu.', 'My sister is in Zagreb.'],
          ['ti', 'ti', 'Kako ti je mama?', 'How is your mum?'],
          ['on', 'mu', 'Otac mu je kuhar.', 'His father is a cook.'],
          ['ona', 'joj', 'Kuća joj je velika.', 'Her house is big.'],
          ['mi', 'nam', 'Stan nam je mali.', 'Our flat is small.'],
          ['vi / Vi', 'vam', 'Kako vam je obitelj?', 'How is your family?'],
          ['oni / one', 'im', 'Sin im je u školi.', 'Their son is at school.'],
        ],
      },
      {
        type: 'rule',
        title: 'Second Place: Before je, After su',
        body: 'mi, ti, mu, joj, nam, vam and im are short words, so they stand in second place, straight after the first word or phrase. They also follow the clitic order you learned: the forms of biti come FIRST, except je, which comes LAST. So with one person it is Brat mi je u Splitu (mi, then je), but with several it is Roditelji su mi u Splitu (su, then mi). The same goes for sam, si, smo and ste: Prijatelj sam ti. (I am your friend.)',
        highlight: 'Roditelji su mi u Splitu.',
      },
      {
        type: 'rule',
        title: 'A Noun Can Be the Owner Too',
        body: 'The owner does not have to be a pronoun. Put any person in the dative: Ani je auto u servisu. (Ana’s car is at the garage.) Sestri je kći bolesna. (Her sister’s daughter is ill — whose sister it is comes from the context; Mojoj sestri makes it MY sister.) Mojoj baki je kuća na Hvaru. (My grandmother’s house is on Hvar.) A noun owner usually opens the sentence, and the short je then follows it.',
        highlight: 'Ani je auto u servisu.',
      },
      {
        type: 'rule',
        title: 'When Something Happens to Your Things',
        body: 'The dative is the natural way to say that something happened to what is yours. Pala mu je torba. (His bag fell.) Ukrali su mi novčanik. (They stole my wallet.) Razbio mi se mobitel. (My phone broke.) Umro joj je djed. (Her grandfather died.) The dative names the person it happened to. With se the short pronoun comes before se: mi se, mu se, joj se.',
        highlight: 'Razbio mi se mobitel.',
      },
      {
        type: 'example',
        title: 'Who Is Whose',
        items: [
          {
            hr: 'Majka mi je liječnica, a otac mi je profesor.',
            en: 'My mother is a doctor and my father is a teacher.',
            note: 'mi stands after majka and again after otac',
          },
          {
            hr: 'Brat joj živi u Njemačkoj.',
            en: 'Her brother lives in Germany.',
            note: 'joj works with any verb, not only with biti',
          },
          {
            hr: 'Kako ti je sestra?',
            en: 'How is your sister?',
            note: 'ti in second place, after kako',
          },
          {
            hr: 'Roditelji su mu u Splitu.',
            en: 'His parents are in Split.',
            note: 'su comes before mu',
          },
          {
            hr: 'Ani je auto u servisu već tjedan dana.',
            en: 'Ana’s car has been at the garage for a week already.',
            note: 'Ani is the dative of Ana',
          },
        ],
      },
      {
        type: 'example',
        title: 'Something Happened to It',
        items: [
          {
            hr: 'Pala mi je torba u more.',
            en: 'My bag fell into the sea.',
            note: 'mi before je',
          },
          {
            hr: 'Ukrali su mu novčanik u tramvaju.',
            en: 'Someone stole his wallet on the tram.',
            note: 'su before mu',
          },
          {
            hr: 'Razbio mi se mobitel, pa sam kupio novi.',
            en: 'My phone broke, so I bought a new one.',
            note: 'mi before se',
          },
          {
            hr: 'Umro joj je djed prošle godine.',
            en: 'Her grandfather died last year.',
            note: 'joj names whose grandfather',
          },
          {
            hr: 'Mojoj sestri se pokvario bicikl.',
            en: 'My sister’s bike broke down.',
            note: 'mojoj sestri, a whole phrase in the dative, opens the sentence',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "His father is a cook" with the dative?',
        options: [
          'Otac ga je kuhar.',
          'Otac mu je kuhar.',
          'Mu je otac kuhar.',
          'Otac je mu kuhar.',
        ],
        correct: 1,
        explanation:
          'mu is the dative of on, and it stands second, before je. ga is the accusative, mu cannot open the sentence, and je must come after mu.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "Ukrali su mi bicikl." mean?',
        options: [
          'I stole a bicycle.',
          'They gave me a bicycle.',
          'Someone stole my bicycle.',
          'My bicycle is new.',
        ],
        correct: 2,
        explanation:
          'Ukrali su — they stole; mi — from me, mine. The dative names the person it happened to.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, opening with the short pronoun: "Mi je majka liječnica" — mi can never stand first; say Majka mi je liječnica, or use the long form for emphasis: Meni je majka liječnica. Second, the wrong order with plural biti: "Roditelji mi su u Splitu" — su comes before the dative: Roditelji su mi u Splitu. Third, the accusative instead of the dative: "Otac me je liječnik" — whose is said with mi, ti, mu, joj, not me, te, ga, je.',
        highlight: 'Roditelji su mi u Splitu.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Brat ___ je student." (My brother is a student.)',
            options: ['me', 'mi', 'moj', 'ja'],
            correct: 1,
            explanation:
              'The owner goes in the dative: mi. me is the accusative, moj would need a different word order, and ja is the nominative.',
          },
          {
            q: 'Which sentence says "My parents are in Split"?',
            options: [
              'Roditelji mi su u Splitu.',
              'Mi su roditelji u Splitu.',
              'Roditelji su mi u Splitu.',
              'Roditelji su me u Splitu.',
            ],
            correct: 2,
            explanation:
              'su comes before the dative in the cluster: su mi. mi cannot open the sentence, and me is the accusative.',
          },
          {
            q: 'What does "Pala joj je torba." mean?',
            options: ['Her bag fell.', 'I dropped my bag.', 'His bag fell.', 'Her bag is new.'],
            correct: 0,
            explanation:
              'Pala je torba — the bag fell; joj — hers. mu would be his, mi would be mine.',
          },
          {
            q: 'Complete: "___ je auto u servisu." (My sister’s car is at the garage.)',
            options: ['Sestra', 'Sestru', 'Sestrom', 'Sestri'],
            correct: 3,
            explanation:
              'The owner goes in the dative, and the dative of sestra is sestri. Sestra is the nominative, sestru the accusative, sestrom the instrumental.',
          },
          {
            q: 'Which sentence is correct? (My mother is a doctor.)',
            options: [
              'Majka me je liječnica.',
              'Majka mi je liječnica.',
              'Mi je majka liječnica.',
              'Majka je mi liječnica.',
            ],
            correct: 1,
            explanation:
              'Majka first, then mi, then je. me is the accusative, mi cannot open a sentence, and je comes after mi, not before it.',
          },
          {
            q: 'Complete: "Ukrali su ___ novčanik." (They stole his wallet.)',
            options: ['ga', 'on', 'joj', 'mu'],
            correct: 3,
            explanation:
              'His is the dative mu. ga is the accusative, on the nominative, and joj means her.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Possessive Dative — Key Takeaways',
        points: [
          'The owner can go in the dative: Majka mi je liječnica = Moja majka je liječnica',
          'Short forms: mi, ti, mu, joj, nam, vam, im — always in second place',
          'Before je, after su: Brat mi je… / Roditelji su mi…',
          'A noun owner goes in the dative too: Ani je auto u servisu.',
          'Things that happen to you: Pala mi je torba. Razbio mi se mobitel.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Verbs with the dative (A2)
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbs-with-dative-a2',
    title: 'I Miss You: More Verbs with the Dative',
    subtitle: 'nedostajati, smetati, odgovarati, čestitati, zahvaliti, pripadati',
    icon: '💌',
    level: 'A2',
    duration: '~8 min',
    color: '#be185d',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Verbs That Want a Dative',
        body: 'You know pomoći, vjerovati and sviđati se. A handful of everyday verbs work the same way and come up in every conversation: missing someone, being bothered by noise, a time that suits you, thanking and congratulating. English uses "me", "you" and "him" for all of them; Croatian uses the dative — mi, ti, mu.',
        icon: '💌',
      },
      {
        type: 'rule',
        title: 'Two Kinds of Dative Verb',
        body: 'Kind one: YOU do something TO someone, and that someone is in the dative. Zahvaljujem vam. (I thank you.) Čestitam ti! (Congratulations to you!) Vjerujem mu. (I believe him.) Kind two works like sviđati se: the THING is the subject, and the person who feels it is in the dative. Nedostaje mi more. Literally "the sea is lacking to me" — I miss the sea. Smeta mi buka. The noise bothers me.',
        highlight: 'Nedostaje mi more.',
      },
      {
        type: 'table',
        title: 'The Verbs',
        headers: ['Verb', 'Meaning', 'Example', 'In English'],
        rows: [
          ['nedostajati', 'to be missed by', 'Nedostaješ mi.', 'I miss you.'],
          ['smetati', 'to bother', 'Smeta li vam dim?', 'Does the smoke bother you?'],
          ['odgovarati', 'to suit', 'Odgovara mi u pet.', 'Five o’clock suits me.'],
          ['čestitati', 'to congratulate', 'Čestitam ti rođendan!', 'Happy birthday to you!'],
          ['zahvaliti', 'to thank', 'Zahvalio sam joj na pomoći.', 'I thanked her for the help.'],
          ['vjerovati', 'to believe, trust', 'Ne vjerujem mu.', 'I don’t believe him.'],
          [
            'pripadati',
            'to belong to',
            'Ovaj kišobran pripada Marku.',
            'This umbrella is Marko’s.',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Missing Someone: Turn the Sentence Round',
        body: 'English says "I miss you": I am the subject. Croatian says Nedostaješ mi: YOU are the subject and I am in the dative. So the verb agrees with the one who is missed. Nedostaješ mi. (I miss you.) Nedostajem ti. (You miss me.) Nedostaju mi prijatelji. (I miss my friends — prijatelji is plural, so nedostaju.) In the past the participle agrees too: Nedostajala si mi. (I missed you — said to a woman.) Nedostajao mi je Split. (I missed Split.)',
        highlight: 'Nedostaješ mi.',
      },
      {
        type: 'rule',
        title: 'Odgovarati Has Two Meanings',
        body: 'odgovarati means "to answer" and also "to suit". Both take the person in the dative. Odgovara li vam sutra u deset? (Does tomorrow at ten suit you?) Ne odgovara mi, radim. (It doesn’t suit me, I’m working.) Odgovorio sam joj na poruku. (I answered her message.) For a meeting time, Odgovara li ti…? is the most natural question there is.',
        highlight: 'Odgovara li vam sutra u deset?',
      },
      {
        type: 'rule',
        title: 'The Dative in the Clitic Cluster',
        body: 'The short dative stands second and follows the order you learned: li first, then sam/si/smo/ste/su, then the dative, then je last. Smeta li vam glazba? (li, then vam.) Nedostajao si mi. (si, then mi.) Zahvalili smo im. (smo, then im.) Smetala mu je buka. (mu, then je.) With a reason for thanking, add na and the locative: Hvala ti na pomoći. Zahvalio sam mu na savjetu.',
        highlight: 'Nedostajao si mi.',
      },
      {
        type: 'example',
        title: 'Missing, Bothering, Suiting',
        items: [
          {
            hr: 'Nedostaješ mi, kad dolaziš kući?',
            en: 'I miss you — when are you coming home?',
            note: 'nedostaješ agrees with ti, the one who is missed',
          },
          {
            hr: 'Na moru mi je nedostajala obitelj.',
            en: 'At the seaside I missed my family.',
            note: 'nedostajala agrees with obitelj, a feminine noun',
          },
          {
            hr: 'Smeta li vam ako otvorim prozor?',
            en: 'Do you mind if I open the window?',
            note: 'smeta li vam — the polite way to ask permission',
          },
          {
            hr: 'Odgovara li ti u subotu ujutro?',
            en: 'Does Saturday morning suit you?',
            note: 'odgovara here means "suits"',
          },
          {
            hr: 'Djeci smeta buka s ulice.',
            en: 'The noise from the street bothers the children.',
            note: 'djeci is the dative of djeca',
          },
        ],
      },
      {
        type: 'example',
        title: 'Thanking, Congratulating, Believing',
        items: [
          {
            hr: 'Zahvalio sam joj na pomoći i na savjetu.',
            en: 'I thanked her for the help and the advice.',
            note: 'joj for her; na + locative for the reason',
          },
          {
            hr: 'Čestitali smo mu rođendan telefonom.',
            en: 'We wished him a happy birthday by phone.',
            note: 'smo before mu',
          },
          {
            hr: 'Čestitam vam na diplomi!',
            en: 'Congratulations on your degree!',
            note: 'čestitati + na + locative for the achievement',
          },
          {
            hr: 'Ne vjerujem tom čovjeku.',
            en: 'I don’t trust that man.',
            note: 'tom čovjeku is a dative phrase',
          },
          {
            hr: 'Ova kuća pripada mojoj obitelji već sto godina.',
            en: 'This house has belonged to my family for a hundred years.',
            note: 'mojoj obitelji is the dative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I miss Zagreb"?',
        options: [
          'Nedostajem Zagreb.',
          'Nedostaje mi Zagreb.',
          'Nedostajem Zagrebu.',
          'Zagreb nedostajem.',
        ],
        correct: 1,
        explanation:
          'Zagreb is the subject — it is "lacking to me" — so the verb is nedostaje and you are mi.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Hvala ti ___ pomoći." (Thanks for the help.)',
        options: ['za', 'na', 'u', 's'],
        correct: 1,
        explanation: 'Thanking for something takes na + locative: hvala ti na pomoći.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, building "I miss you" the English way: "Nedostajem te" — say Nedostaješ mi; the one who is missed is the subject. Second, the accusative after a dative verb: "Vjerujem te", "Zahvalio sam ga" — say Vjerujem ti, Zahvalio sam mu. Third, the wrong cluster order in the past: "Nedostajao mi si" — si comes before the dative: Nedostajao si mi.',
        highlight: 'Nedostajao si mi.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you say "I miss you" to a friend?',
            options: ['Nedostajem te.', 'Nedostaješ mi.', 'Nedostajem ti.', 'Nedostaješ me.'],
            correct: 1,
            explanation:
              'The one who is missed is the subject (you → nedostaješ) and the one who misses is in the dative (mi). Nedostajem ti means "you miss me".',
          },
          {
            q: 'Complete: "Zahvalio sam ___ na pomoći." (I thanked her for the help.)',
            options: ['ju', 'nju', 'joj', 'ona'],
            correct: 2,
            explanation:
              'zahvaliti takes the dative: joj. ju and nju are the accusative, ona the nominative.',
          },
          {
            q: 'Complete: "Nedostaju mi ___." (I miss my friends.)',
            options: ['prijatelji', 'prijatelje', 'prijateljima', 'prijatelja'],
            correct: 0,
            explanation:
              'The friends are the subject, so they are in the nominative plural: prijatelji. That is also why the verb is plural, nedostaju.',
          },
          {
            q: 'Which sentence asks "Does the music bother you?" (polite)',
            options: [
              'Smeta li vam glazba?',
              'Smeta li Vi glazba?',
              'Smetate li glazbu?',
              'Smeta li vam glazbu?',
            ],
            correct: 0,
            explanation:
              'The music is the subject (glazba, nominative) and the person bothered is in the dative (vam).',
          },
          {
            q: 'Complete: "Odgovara li ___ sutra u deset?" (Does tomorrow at ten suit you? — to a friend)',
            options: ['te', 'ti', 'tebe', 'tvoj'],
            correct: 1,
            explanation: 'odgovarati takes the dative: ti. te and tebe are the accusative.',
          },
          {
            q: 'Complete: "Jako ___ je nedostajao Zagreb." (She really missed Zagreb.)',
            options: ['ju', 'ona', 'je', 'joj'],
            correct: 3,
            explanation:
              'She is the one who misses, so she is in the dative: joj, before je. Zagreb is the subject.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Dative Verbs — Key Takeaways',
        points: [
          'Thank, congratulate, believe, answer someone: zahvaliti, čestitati, vjerovati, odgovoriti + dative',
          'Missing, bothering, suiting: the thing is the subject — Nedostaje mi more. Smeta mi buka.',
          'Nedostaješ mi = I miss you; Nedostajem ti = you miss me',
          'The verb agrees with the subject: Nedostaju mi prijatelji.',
          'In the cluster: li, then sam/si/su, then the dative, then je',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Impersonal feelings
  // ─────────────────────────────────────────────────────────
  {
    id: 'impersonal-feelings',
    title: 'Cold, Bored, Sorry: How You Feel with mi je',
    subtitle: 'Hladno mi je · Dosadno nam je · Treba mi…',
    icon: '🥶',
    level: 'A2',
    duration: '~8 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Nobody Is Cold in Croatian',
        body: 'In English you are cold, you are bored, you are sorry. In Croatian you usually are not: it is cold TO you. Hladno mi je — word for word "cold to-me it-is". You met hladno mi je and žao mi je in A1. Now you will use the whole family of these sentences, for any person, in the past and the future, and with Treba mi for what you need.',
        icon: '🥶',
      },
      {
        type: 'rule',
        title: 'The Pattern: Dative + je + -o',
        body: 'Three parts: an adverb ending in -o or -e (hladno, vruće, dosadno), the person in the dative (mi, ti, mu, joj, nam, vam, im), and je. There is no subject at all, which is why the verb is always je. Hladno mi je. (I am cold.) Vruće mu je. (He is hot.) Dosadno nam je. (We are bored.) Lako im je. (It is easy for them.)',
        highlight: 'Hladno mi je.',
      },
      {
        type: 'table',
        title: 'Feelings That Work This Way',
        headers: ['Croatian', 'Meaning', 'Example'],
        rows: [
          ['hladno / vruće / toplo', 'cold / hot / warm', 'Toplo mi je.'],
          ['drago', 'glad, pleased', 'Drago mi je!'],
          ['žao', 'sorry', 'Žao mi je.'],
          ['dosadno', 'bored', 'Dosadno mu je.'],
          ['lako / teško', 'easy / hard', 'Teško joj je.'],
          ['zlo / loše / dobro', 'sick / unwell / fine', 'Zlo mi je.'],
          ['lijepo', 'having a nice time', 'Lijepo nam je.'],
          ['svejedno', 'all the same, I don’t mind', 'Svejedno mi je.'],
          ['neugodno', 'embarrassed, uncomfortable', 'Neugodno mi je.'],
        ],
      },
      {
        type: 'rule',
        title: 'Any Person, Any Noun',
        body: 'Put whoever feels it in the dative — a pronoun or a noun. Mami je hladno. (Mum is cold.) Djeci je dosadno. (The children are bored.) Baki je loše. (Grandma isn’t well.) For contrast use the long form; then it can open the sentence: Meni je vruće, a tebi? (I’m hot — and you?) Add an infinitive to say what is easy or hard: Teško mi je ustati rano. (It is hard for me to get up early.)',
        highlight: 'Meni je vruće, a tebi?',
      },
      {
        type: 'rule',
        title: 'Past, Future, Not',
        body: 'With no subject, the past uses the neuter form bilo, always: Bilo mi je hladno. (I was cold.) Bilo nam je lijepo. (We had a lovely time.) The future is bit će: Bit će ti dosadno. (You will be bored.) To say no, use nije: Nije mi hladno. (I am not cold.) To ask: Je li ti hladno? (Are you cold?)',
        highlight: 'Bilo mi je hladno.',
      },
      {
        type: 'rule',
        title: 'Treba mi: What You Need',
        body: 'trebati works the same way: the thing you need is the subject, you are in the dative. Treba mi kaput. (I need a coat.) Because the thing is the subject, the verb agrees with it: Trebaju mi rukavice. (I need gloves — plural.) In the past the participle agrees too: Trebao mi je kišobran. Trebala mi je pomoć. You can also say Trebam kaput — both are correct.',
        highlight: 'Trebaju mi rukavice.',
      },
      {
        type: 'rule',
        title: 'Spava mi se: What You Feel Like Doing',
        body: 'Put the person in the dative, add se, and use the verb in its on form: Spava mi se. (I feel sleepy — literally, it sleeps itself to me.) Ne radi mi se danas. (I don’t feel like working today.) Ide mi se na koncert. (I feel like going to the concert.) Ništa mi se ne radi. (I don’t feel like doing anything.) The short words keep their order — the dative mi, then se: Spava ti se? Spava mu se. If you name a thing you feel like, the verb agrees with it: Jede mi se pizza. Jedu mi se trešnje. In the past the verb is neuter, like bilo: Jučer mi se nije radilo.',
        highlight: 'Spava mi se.',
      },
      {
        type: 'example',
        title: 'How Do You Feel?',
        items: [
          {
            hr: 'Zatvori prozor, molim te, hladno mi je.',
            en: 'Close the window, please — I am cold.',
            note: 'mi is the person who feels the cold',
          },
          {
            hr: 'Djeci je dosadno, idemo u park.',
            en: 'The children are bored — let’s go to the park.',
            note: 'djeci is the dative of djeca',
          },
          {
            hr: 'Drago mi je, ja sam Marina.',
            en: 'Nice to meet you, I am Marina.',
            note: 'drago mi je when you meet someone',
          },
          {
            hr: 'Žao nam je, ne možemo doći.',
            en: 'We are sorry, we can’t come.',
            note: 'nam for we',
          },
          {
            hr: 'Teško mi je govoriti hrvatski na telefonu.',
            en: 'It is hard for me to speak Croatian on the phone.',
            note: 'teško + infinitive',
          },
          {
            hr: 'Je li ti hladno? — Nije, toplo mi je.',
            en: 'Are you cold? — No, I am warm.',
            note: 'nije mi in the negative',
          },
        ],
      },
      {
        type: 'example',
        title: 'Then and Later',
        items: [
          {
            hr: 'Na izletu nam je bilo jako lijepo.',
            en: 'We had a really lovely time on the trip.',
            note: 'bilo is neuter — there is no subject',
          },
          {
            hr: 'Baki je jučer bilo loše, ali danas joj je dobro.',
            en: 'Grandma was unwell yesterday, but today she is fine.',
            note: 'bilo for yesterday, je for today',
          },
          {
            hr: 'Bit će ti vruće u tom džemperu.',
            en: 'You will be hot in that jumper.',
            note: 'bit će for the future',
          },
          {
            hr: 'Trebala mi je pomoć, a nitko nije došao.',
            en: 'I needed help and nobody came.',
            note: 'trebala agrees with pomoć',
          },
        ],
      },
      {
        type: 'example',
        title: 'What You Feel Like',
        items: [
          {
            hr: 'Spava mi se, idem u krevet.',
            en: 'I’m sleepy, I’m going to bed.',
            note: 'dative mi, then se, then the on form spava',
          },
          {
            hr: 'Danas mi se ne radi.',
            en: 'I don’t feel like working today.',
            note: 'ne goes straight before the verb',
          },
          {
            hr: 'Ide li ti se u kino večeras?',
            en: 'Do you feel like going to the cinema tonight?',
            note: 'li, then ti, then se',
          },
          {
            hr: 'Jede mi se nešto slatko.',
            en: 'I fancy something sweet.',
            note: 'the thing is the subject of jede',
          },
          {
            hr: 'Uči nam se hrvatski!',
            en: 'We feel like learning Croatian!',
            note: 'nam — we, in the dative',
          },
          {
            hr: 'Kuhanje mi ide od ruke, ali crtanje ne.',
            en: 'I’m good at cooking, but not at drawing.',
            note: 'idiom: nešto ide od ruke — to be good at something',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "He is bored"?',
        options: ['On je dosadno.', 'Dosadno ga je.', 'Dosadno mu je.', 'Dosadan mu je.'],
        correct: 2,
        explanation:
          'The person who is bored goes in the dative (mu), the adverb ends in -o, and the verb is je. "On je dosadan" would mean he is boring!',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete, in the past: "___ mi je hladno." (I was cold.)',
        options: ['Bio', 'Bila', 'Bilo', 'Bili'],
        correct: 2,
        explanation: 'There is no subject, so the past is always the neuter bilo.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, the English shape: "Ja sam hladno" — say Hladno mi je. (Ja sam hladan describes a cold person, not how you feel.) Second, a masculine or feminine past: "Bio mi je hladno", "Bila mi je hladno" — there is no subject, so it is always Bilo mi je hladno. Third, starting with the short form: "Mi je hladno" — say Hladno mi je, or Meni je hladno for emphasis.',
        highlight: 'Bilo mi je hladno.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you say "I am cold" (you feel cold)?',
            options: ['Ja sam hladno.', 'Hladno mi je.', 'Hladno me je.', 'Hladna mi je.'],
            correct: 1,
            explanation:
              'The person goes in the dative (mi) and the adverb hladno takes je. me is the accusative, and hladna is an adjective with nothing to agree with.',
          },
          {
            q: 'Complete: "Djeci ___ dosadno." (The children are bored.)',
            options: ['su', 'je', 'smo', 'jesu'],
            correct: 1,
            explanation: 'djeci is a dative, not a subject. With no subject the verb is always je.',
          },
          {
            q: 'Complete, in the past: "___ nam je lijepo na moru." (We had a lovely time at the sea.)',
            options: ['Bio', 'Bili', 'Bila', 'Bilo'],
            correct: 3,
            explanation: 'No subject, so the neuter bilo.',
          },
          {
            q: 'Which sentence says "My mum feels sick"?',
            options: ['Mama je zlo.', 'Mamu je zlo.', 'Mami su zlo.', 'Mami je zlo.'],
            correct: 3,
            explanation:
              'The person goes in the dative: mami. mama is the nominative, mamu the accusative, and the verb is je, not su.',
          },
          {
            q: 'Complete: "___ mi rukavice." (I need gloves.)',
            options: ['Treba', 'Trebam', 'Trebaju', 'Trebaš'],
            correct: 2,
            explanation:
              'The gloves are the subject and they are plural, so the verb is trebaju. With mi, the forms trebam and trebaš do not fit.',
          },
          {
            q: 'What does "Svejedno mi je." mean?',
            options: ['I don’t mind.', 'I am sorry.', 'I am bored.', 'I am glad.'],
            correct: 0,
            explanation:
              'svejedno — all the same: it makes no difference to me. Sorry is žao, bored is dosadno, glad is drago.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Impersonal Feelings — Key Takeaways',
        points: [
          'Dative + je + -o: Hladno mi je. Dosadno nam je. Žao mi je.',
          'Any person in the dative: Mami je hladno. Djeci je dosadno.',
          'Past is always bilo, future bit će, negative nije: Bilo mi je hladno.',
          'Long form for contrast: Meni je vruće, a tebi?',
          'Treba mi: the verb agrees with the thing — Trebaju mi rukavice.',
          'What you feel like: dative + se — Spava mi se. Ne radi mi se.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Car and traffic
  // ─────────────────────────────────────────────────────────
  {
    id: 'car-and-traffic',
    title: 'My Car Broke Down: Cars and Traffic',
    subtitle: 'Auto mi se pokvario · gužva · semafor · cestarina',
    icon: '🚗',
    level: 'A2',
    duration: '~9 min',
    color: '#b91c1c',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'On the Road',
        body: 'Sooner or later a car lets you down: a flat tyre on the way to the coast, a battery that will not start on a cold morning. This lesson gives you the parts of a car, the sentences for when something goes wrong — they use the dative you just learned — and the words for traffic, parking and petrol.',
        icon: '🚗',
      },
      {
        type: 'table',
        title: 'Parts of the Car',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['motor', 'engine', 'Motor je bučan.'],
          ['guma', 'tyre', 'Guma je prazna.'],
          ['kočnice', 'brakes', 'Kočnice ne rade dobro.'],
          ['svjetla', 'lights', 'Upali svjetla!'],
          ['akumulator', 'car battery', 'Akumulator je prazan.'],
          ['volan', 'steering wheel', 'Volan je s lijeve strane.'],
          ['prtljažnik', 'boot, trunk', 'Kofer je u prtljažniku.'],
          ['brisači', 'windscreen wipers', 'Brisači ne rade.'],
        ],
      },
      {
        type: 'rule',
        title: 'When It Breaks: mi + se',
        body: 'Croatian says that the car broke down "on you": the thing is the subject, se shows it happened by itself, and the dative says whose it is. Auto mi se pokvario. (My car has broken down.) Probušila mi se guma. (I have a flat tyre.) Pregrijao mu se motor. (His engine has overheated.) The dative comes before se. auto is masculine, so it is pokvario, not pokvarila.',
        highlight: 'Auto mi se pokvario.',
      },
      {
        type: 'rule',
        title: 'At the Garage',
        body: 'A garage is an autoservis, and the person who repairs cars is a mehaničar. Ask: Možete li pogledati kočnice? (Can you look at the brakes?) Što ne valja? (What’s wrong?) Kad će auto biti gotov? (When will the car be ready?) Koliko će to koštati? (How much will that cost?) If the car does not start at all: Auto mi ne pali. Akumulator mi je prazan.',
        highlight: 'Kad će auto biti gotov?',
      },
      {
        type: 'rule',
        title: 'Traffic and Rules',
        body: 'A traffic jam is gužva, traffic lights are semafor, a junction is raskrižje and a roundabout is kružni tok. In Croatia you drive on the right. The speed limit is 50 km/h in towns and 130 km/h on the motorway (autocesta), where you pay a toll, cestarina. Signs use the se-impersonal you know: Ovdje se ne smije parkirati. (No parking here.) A fine is kazna.',
        highlight: 'Ovdje se ne smije parkirati.',
      },
      {
        type: 'rule',
        title: 'Petrol',
        body: 'You buy petrol at a benzinska postaja. Petrol is benzin, diesel is dizel. To fill up yourself: Natočio sam benzin. To ask the attendant to fill the tank: Napunite, molim. To ask where: Oprostite, gdje je benzinska postaja?',
        highlight: 'Napunite, molim.',
      },
      {
        type: 'example',
        title: 'Something Went Wrong',
        items: [
          {
            hr: 'Probušila mi se guma na autocesti.',
            en: 'I got a flat tyre on the motorway.',
            note: 'probušila agrees with guma',
          },
          {
            hr: 'Auto mi ne pali, akumulator mi je prazan.',
            en: 'My car won’t start — the battery is flat.',
            note: 'mi twice: my car, my battery',
          },
          {
            hr: 'Tati se pokvario auto pa je zvao mehaničara.',
            en: 'Dad’s car broke down so he called a mechanic.',
            note: 'tati is the dative of tata',
          },
          {
            hr: 'Pregrijao nam se motor na putu za Split.',
            en: 'Our engine overheated on the way to Split.',
            note: 'nam before se',
          },
          {
            hr: 'Možete li pogledati kočnice? Nešto nije u redu.',
            en: 'Can you look at the brakes? Something is wrong.',
            note: 'kočnice is plural',
          },
          {
            hr: 'Auto će biti gotov sutra poslijepodne.',
            en: 'The car will be ready tomorrow afternoon.',
            note: 'gotov agrees with the masculine auto',
          },
        ],
      },
      {
        type: 'example',
        title: 'On the Road',
        items: [
          {
            hr: 'Velika je gužva, zakasnit ćemo.',
            en: 'There’s a big traffic jam — we’ll be late.',
            note: 'zakasnit ćemo, the future',
          },
          {
            hr: 'Na semaforu skreni desno.',
            en: 'Turn right at the traffic lights.',
            note: 'na semaforu is locative',
          },
          {
            hr: 'U kružnom toku uzmi drugi izlaz.',
            en: 'Take the second exit at the roundabout.',
            note: 'u kružnom toku is locative',
          },
          {
            hr: 'Ovdje se ne smije parkirati, dobit ćeš kaznu.',
            en: 'You can’t park here — you’ll get a fine.',
            note: 'se ne smije, the impersonal',
          },
          {
            hr: 'Ubaci u petu brzinu, kasnimo!',
            en: 'Get a move on, we are late!',
            note: 'idiom: ubaciti u petu brzinu — to speed up (literally, put it in fifth gear)',
          },
          {
            hr: 'Ana ima novi auto? To već znaju i ptice na grani.',
            en: 'Ana has a new car? Everybody knows that already.',
            note: 'idiom: znaju i ptice na grani — even the birds on the branch know',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I have a flat tyre"?',
        options: [
          'Probušila mi se guma.',
          'Probušio mi se guma.',
          'Probušila se mi guma.',
          'Probušila me se guma.',
        ],
        correct: 0,
        explanation:
          'guma is feminine, so probušila; the dative mi comes before se; me is the accusative.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What is "kružni tok"?',
        options: ['a traffic jam', 'a motorway', 'a roundabout', 'a car park'],
        correct: 2,
        explanation: 'kružni — circular, tok — flow: a roundabout.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, the wrong cluster order: "Auto se mi pokvario" — the dative comes before se: Auto mi se pokvario. Second, the wrong gender: auto ends in -o but is masculine, so "Auto se pokvarila" is wrong — it is pokvario, and the car is gotov, not gotova. Third, an active verb without se: "Auto mi je pokvario" says the car broke something of mine; the car itself broke down is Auto mi se pokvario.',
        highlight: 'Auto mi se pokvario.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Auto ___ pokvario." (My car has broken down.)',
            options: ['se mi', 'mi se', 'me se', 'mi je'],
            correct: 1,
            explanation:
              'The dative comes before se in the cluster: mi se. me is the accusative, and without se the sentence no longer says the car broke down.',
          },
          {
            q: 'Complete: "Probušila mi se ___." (I have a flat tyre.)',
            options: ['guma', 'gume', 'gumu', 'gumom'],
            correct: 0,
            explanation:
              'The tyre is the subject, so it is in the nominative: guma. That is also why the verb is feminine, probušila.',
          },
          {
            q: 'You ask the mechanic when the car will be ready. Which is correct?',
            options: [
              'Kad će auto biti gotova?',
              'Kad je auto bio gotov?',
              'Kad će auto biti gotov?',
              'Kad ćeš auto biti gotov?',
            ],
            correct: 2,
            explanation:
              'auto is masculine, so gotov; the future is će; the second option asks about the past.',
          },
          {
            q: 'What is a "semafor"?',
            options: ['a roundabout', 'traffic lights', 'a car park', 'a toll'],
            correct: 1,
            explanation: 'semafor — traffic lights.',
          },
          {
            q: 'Which sign says parking is not allowed?',
            options: [
              'Ovdje se smije parkirati.',
              'Ovdje ne parkira se.',
              'Ovdje se ne smijem parkirati.',
              'Ovdje se ne smije parkirati.',
            ],
            correct: 3,
            explanation:
              'The impersonal: se, then ne smije, then the infinitive. The first sign says parking IS allowed; the others mix up the order or the person.',
          },
          {
            q: 'Complete: "Na autocesti se plaća ___." (On the motorway you pay a toll.)',
            options: ['cestarina', 'cestarinu', 'cestarine', 'cestarini'],
            correct: 0,
            explanation:
              'In a se-sentence the thing paid is the subject, so it stays in the nominative: cestarina.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Cars and Traffic — Key Takeaways',
        points: [
          'Parts: motor, guma, kočnice, svjetla, akumulator, volan, prtljažnik, brisači',
          'Breakdowns with dative + se: Auto mi se pokvario. Probušila mi se guma.',
          'auto is masculine: pokvario, gotov',
          'At the garage: Možete li pogledati…? Kad će auto biti gotov?',
          'Traffic: gužva, semafor, raskrižje, kružni tok, autocesta, cestarina, kazna',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Public transport
  // ─────────────────────────────────────────────────────────
  {
    id: 'public-transport',
    title: 'Where Do I Get Off? Trams, Buses and Trains',
    subtitle: 'karta · vozni red · presjesti · sići',
    icon: '🚋',
    level: 'A2',
    duration: '~9 min',
    color: '#1d4ed8',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Getting Around Without a Car',
        body: 'In Zagreb the blue trams of ZET (Zagrebački električni tramvaj) and its buses take you almost everywhere. Between cities there are trains and coaches. This lesson covers the whole journey: buying the right ticket, reading the timetable, asking which tram goes where, and — the question every visitor needs — where to get off.',
        icon: '🚋',
      },
      {
        type: 'rule',
        title: 'Buying a Ticket',
        body: 'A ticket is a karta (or a vozna karta). Ask for it in the accusative: Jednu kartu do Splita, molim. A one-way ticket is a karta u jednom smjeru; a return ticket is a povratna karta. Koliko košta povratna karta do Rijeke? In Zagreb you buy tram tickets at a kiosk or, for more money, from the driver, and you must validate the ticket — poništiti kartu — when you get on.',
        highlight: 'Jednu kartu do Splita, molim.',
      },
      {
        type: 'table',
        title: 'Places and Words',
        headers: ['Croatian', 'English'],
        rows: [
          ['tramvajska stanica', 'tram stop'],
          ['autobusni kolodvor', 'bus (coach) station'],
          ['željeznički kolodvor', 'railway station'],
          ['peron', 'platform'],
          ['vozni red', 'timetable'],
          ['polazak / dolazak', 'departure / arrival'],
          ['vozač / kontrolor', 'driver / ticket inspector'],
          ['mjesečna karta', 'monthly pass'],
        ],
      },
      {
        type: 'rule',
        title: 'Timetables and Delays',
        body: 'Kad polazi sljedeći vlak za Zagreb? (When does the next train to Zagreb leave?) Kad stiže u Osijek? (When does it arrive in Osijek?) S kojeg perona? (From which platform?) Answers you will hear: Polazi u 14:30. Vlak kasni dvadeset minuta. (The train is twenty minutes late.) sljedeći means "next" and agrees like any adjective: sljedeći vlak, sljedeća stanica, na sljedećoj stanici.',
        highlight: 'Vlak kasni dvadeset minuta.',
      },
      {
        type: 'rule',
        title: 'Getting Off and Changing',
        body: 'To get off is sići (perfective): Gdje moram sići? (Where do I have to get off?) The answer puts the stop in the locative: Morate sići na trećoj stanici. Siđite na Glavnom kolodvoru. To change to another line is presjesti: Morate presjesti na tramvaj broj šest. To check you are on the right line: Ide li ovaj tramvaj do Trga bana Jelačića?',
        highlight: 'Gdje moram sići?',
      },
      {
        type: 'rule',
        title: 'How You Travel: Instrumental, No s',
        body: 'The means of transport is in the instrumental with NO preposition: Idem tramvajem. Putujemo vlakom. Dolazim autobusom. If you are talking about being inside it, use u + locative: Sjedim u tramvaju. (I am sitting in the tram.)',
        highlight: 'Idem tramvajem.',
      },
      {
        type: 'example',
        title: 'At the Ticket Window',
        items: [
          {
            hr: 'Dobar dan, jednu povratnu kartu do Splita, molim.',
            en: 'Good afternoon, one return ticket to Split, please.',
            note: 'kartu is accusative, povratnu agrees with it',
          },
          {
            hr: 'Kad polazi sljedeći autobus za Rijeku?',
            en: 'When does the next bus to Rijeka leave?',
            note: 'za Rijeku — the destination in the accusative',
          },
          {
            hr: 'Vlak polazi s drugog perona u osam i deset.',
            en: 'The train leaves from platform two at ten past eight.',
            note: 's drugog perona is genitive',
          },
          {
            hr: 'Nažalost, vlak kasni pola sata.',
            en: 'Unfortunately the train is half an hour late.',
            note: 'kasniti — to be late',
          },
          {
            hr: 'Gdje se kupuju karte za tramvaj?',
            en: 'Where do you buy tram tickets?',
            note: 'se kupuju agrees with karte',
          },
        ],
      },
      {
        type: 'example',
        title: 'On the Tram',
        items: [
          {
            hr: 'Oprostite, ide li ovaj tramvaj do Glavnog kolodvora?',
            en: 'Excuse me, does this tram go to the main station?',
            note: 'do + genitive: do Glavnog kolodvora',
          },
          {
            hr: 'Gdje moram sići za muzej?',
            en: 'Where do I get off for the museum?',
            note: 'sići — to get off',
          },
          {
            hr: 'Siđite na sljedećoj stanici i presjednite na šesticu.',
            en: 'Get off at the next stop and change to the number six.',
            note: 'šestica is the everyday name for the number 6 tram',
          },
          {
            hr: 'Svaki dan idem na posao tramvajem.',
            en: 'I go to work by tram every day.',
            note: 'tramvajem, instrumental with no s',
          },
          {
            hr: 'Kontrolor je pitao za kartu, a ja sam je zaboravio poništiti.',
            en: 'The inspector asked for my ticket, and I had forgotten to validate it.',
            note: 'je here is the accusative pronoun for kartu',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You want a ticket there and back. You ask for:',
        options: ['kartu u jednom smjeru', 'mjesečnu kartu', 'povratnu kartu', 'vozni red'],
        correct: 2,
        explanation:
          'povratna karta — a return ticket. u jednom smjeru is one way, a mjesečna karta is a monthly pass, and vozni red is the timetable.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence says "I travel by train"?',
        options: ['Putujem s vlakom.', 'Putujem vlakom.', 'Putujem vlak.', 'Putujem na vlaku.'],
        correct: 1,
        explanation: 'The means of transport is the instrumental, with no preposition: vlakom.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, adding s to the means of transport: "Idem s tramvajem" — say Idem tramvajem. Second, putting the stop in the accusative: "Siđite na sljedeću stanicu" — where you get off is a place, so the locative: na sljedećoj stanici. Third, the instrumental for being inside: "Sjedim tramvajem" — inside it is u + locative: Sjedim u tramvaju.',
        highlight: 'Idem tramvajem.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you say "I go by tram"?',
            options: ['Idem s tramvajem.', 'Idem tramvajem.', 'Idem tramvaj.', 'Idem tramvaju.'],
            correct: 1,
            explanation: 'The instrumental with no preposition: tramvajem.',
          },
          {
            q: 'You want a ticket there and back. Which do you ask for?',
            options: ['vozni red', 'kartu u jednom smjeru', 'povratnu kartu', 'mjesečnu kartu'],
            correct: 2,
            explanation: 'povratna karta — return ticket.',
          },
          {
            q: 'Complete: "Gdje moram ___?" (Where do I have to get off?)',
            options: ['sići', 'siđem', 'silazim', 'sišao'],
            correct: 0,
            explanation: 'After moram comes the infinitive: sići.',
          },
          {
            q: 'Complete: "Morate sići na ___ stanici." (You have to get off at the next stop.)',
            options: ['sljedeća', 'sljedeću', 'sljedećoj', 'sljedećom'],
            correct: 2,
            explanation:
              'na + locative for a place, and the adjective agrees: na sljedećoj stanici.',
          },
          {
            q: 'What does "Vlak kasni deset minuta." mean?',
            options: [
              'The train leaves in ten minutes.',
              'The train is ten minutes late.',
              'The journey takes ten minutes.',
              'The train left ten minutes ago.',
            ],
            correct: 1,
            explanation: 'kasniti — to be late.',
          },
          {
            q: 'Complete: "Morate ___ na tramvaj broj šest." (You have to change to tram number six.)',
            options: ['presjednete', 'presjeli', 'sjesti', 'presjesti'],
            correct: 3,
            explanation:
              'After morate comes the infinitive presjesti — to change lines. sjesti means to sit down.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Public Transport — Key Takeaways',
        points: [
          'Jednu kartu do Splita, molim. — u jednom smjeru or povratnu',
          'Kad polazi sljedeći vlak? Vlak kasni dvadeset minuta.',
          'Gdje moram sići? — Na sljedećoj stanici. Morate presjesti na šesticu.',
          'Means of transport: instrumental, no s — tramvajem, vlakom, autobusom',
          'In Zagreb, validate your ticket: poništiti kartu',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Phone calls (A2)
  // ─────────────────────────────────────────────────────────
  {
    id: 'phone-calls-a2',
    title: 'Can I Speak to Mrs Novak? Phone Calls',
    subtitle: 'Loše se čuje · Prekinula se veza · leaving a message',
    icon: '📞',
    level: 'A2',
    duration: '~9 min',
    color: '#047857',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'Beyond "Halo?"',
        body: 'In A1 you answered the phone and left a short message. Now you will make a formal call to an office, ask for someone politely, deal with a bad line or a call that drops, and leave a voicemail that says everything it needs to. The conditional you have just learned is what makes it all sound polite.',
        icon: '📞',
      },
      {
        type: 'rule',
        title: 'Answering and Asking for Someone',
        body: 'At home people answer Halo? or Molim? At work they say the company and offer help: Hotel Adria, dobar dan, izvolite. Say who you are: Ovdje Ana Horvat. Then ask for the person with s + instrumental: Mogu li razgovarati s gospođom Novak? More polite still, with the conditional: Htio bih razgovarati s gospodinom Kovačem. The answer may be: Trenutak, spajam vas. (One moment, I’ll put you through.) or Tko ga treba? (Who is asking for him?)',
        highlight: 'Mogu li razgovarati s gospođom Novak?',
      },
      {
        type: 'rule',
        title: 'When They Are Not There',
        body: 'Nažalost, trenutno nije u uredu. (Unfortunately she isn’t in the office right now.) Možete li nazvati kasnije? (Can you call later?) Želite li ostaviti poruku? (Would you like to leave a message?) You can answer: Hvala, nazvat ću ponovno. Or leave a message: Recite mu, molim vas: zvala je Ana Horvat.',
        highlight: 'Želite li ostaviti poruku?',
      },
      {
        type: 'rule',
        title: 'A Bad Line, a Dropped Call',
        body: 'If you cannot hear well: Loše se čuje. (The line is bad.) Ne čujem vas dobro. (I can’t hear you well.) Biste li mogli ponoviti? (Could you repeat that?) If the call drops, the next call starts with: Prekinula se veza. (We got cut off.) And a reason you may need: Baterija mi je prazna. (My battery is flat.) Nemam signala. (I have no signal.)',
        highlight: 'Prekinula se veza.',
      },
      {
        type: 'rule',
        title: 'Leaving a Voicemail',
        body: 'A voicemail greeting says: Ostavite poruku nakon zvučnog signala. Your message needs four things, in this order: greeting and name (Dobar dan, ovdje Marko Babić), the reason (Zovem zbog sastanka u petak), what you want (Molim vas, nazovite me), and your number and goodbye (Moj broj je 091 234 5678. Hvala, doviđenja). If you dialled the wrong number: Oprostite, pogriješio sam broj.',
        highlight: 'Molim vas, nazovite me.',
      },
      {
        type: 'example',
        title: 'Calling an Office',
        items: [
          {
            hr: 'Turistička agencija Jadran, dobar dan, izvolite.',
            en: 'Jadran travel agency, good morning, how can I help?',
            note: 'izvolite — the formal offer of help',
          },
          {
            hr: 'Dobar dan, ovdje Ivana Perić. Mogu li razgovarati s gospođom Novak?',
            en: 'Good morning, this is Ivana Perić. May I speak to Mrs Novak?',
            note: 's gospođom Novak is instrumental',
          },
          {
            hr: 'Trenutak, molim, spajam vas.',
            en: 'One moment, please, I’ll put you through.',
            note: 'spajati — to connect',
          },
          {
            hr: 'Nažalost, gospođa Novak je danas na sastanku.',
            en: 'Unfortunately Mrs Novak is in a meeting today.',
            note: 'na sastanku is locative',
          },
          {
            hr: 'Biste li joj mogli reći: zvala je Ivana?',
            en: 'Could you tell her that Ivana called?',
            note: 'joj before mogli; the conditional makes it polite',
          },
        ],
      },
      {
        type: 'example',
        title: 'Problems and Messages',
        items: [
          {
            hr: 'Halo? Loše se čuje, biste li mogli ponoviti?',
            en: 'Hello? The line is bad — could you say that again?',
            note: 'loše se čuje — the line is bad',
          },
          {
            hr: 'Oprostite, prekinula se veza. Baterija mi je bila prazna.',
            en: 'Sorry, we got cut off. My battery was flat.',
            note: 'bila agrees with baterija',
          },
          {
            hr: 'Dobar dan, ovdje Marko Babić. Zovem zbog sastanka u petak.',
            en: 'Good morning, this is Marko Babić. I’m calling about the meeting on Friday.',
            note: 'zbog sastanka is genitive',
          },
          {
            hr: 'Molim vas, nazovite me na broj 091 234 5678. Hvala, doviđenja.',
            en: 'Please call me on 091 234 5678. Thank you, goodbye.',
            note: 'nazovite — polite imperative',
          },
          {
            hr: 'Oprostite, pogriješio sam broj.',
            en: 'Sorry, I dialled the wrong number.',
            note: 'pogriješiti broj — to get the number wrong',
          },
          {
            hr: 'Prvo birajte nulu, onda broj.',
            en: 'First dial zero, then the number.',
            note: 'birati broj — to dial a number',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you ask "May I speak to Mr Horvat?"',
        options: [
          'Mogu li razgovarati s gospodin Horvat?',
          'Mogu li razgovarati s gospodinom Horvatom?',
          'Mogu li razgovarati gospodina Horvata?',
          'Mogu li razgovarati s gospodina Horvata?',
        ],
        correct: 1,
        explanation:
          'razgovarati s + instrumental: s gospodinom Horvatom. Both the title and the surname take the ending.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'The call has dropped. You call back and say:',
        options: ['Loše se vidi.', 'Prekinula se veza.', 'Pogriješio sam broj.', 'Izvolite.'],
        correct: 1,
        explanation: 'Prekinula se veza — the connection was cut off.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, the nominative after s: "s gospodin Kovač" — after s comes the instrumental, title and surname: s gospodinom Kovačem. Second, the dative after nazvati: "Nazovite mi" — nazvati takes the accusative: Nazovite me. Third, writing the conditional apart: "bi ste" — biste is one word: Biste li mogli ponoviti?',
        highlight: 'Biste li mogli ponoviti?',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'You answer the phone at work. Which is the right register?',
            options: [
              'Bog, reci.',
              'Tvrtka Adria, dobar dan, izvolite.',
              'Što hoćeš?',
              'Halo, tko je to?',
            ],
            correct: 1,
            explanation:
              'A formal answer gives the company, a greeting and izvolite. The others are for friends, or simply rude.',
          },
          {
            q: 'Ask politely to speak to Mr Kovač.',
            options: [
              'Mogu li razgovarati s gospodin Kovač?',
              'Mogu li razgovarati gospodina Kovača?',
              'Mogu li razgovarati s gospodinom Kovačem?',
              'Mogu li razgovarati s gospodina Kovača?',
            ],
            correct: 2,
            explanation: 'razgovarati s + instrumental: s gospodinom Kovačem.',
          },
          {
            q: 'The line is bad. You say:',
            options: ['Loše se čuje.', 'Loše se vidi.', 'Loše čujem se.', 'Loše čuje se.'],
            correct: 0,
            explanation:
              'Loše se čuje — it can be heard badly. "Se vidi" is about seeing, and the other two get the order or the person wrong.',
          },
          {
            q: 'Which sentence says the call was cut off?',
            options: [
              'Prekinuo se veza.',
              'Prekinula se vezu.',
              'Prekinula se veza.',
              'Prekinulo se vezu.',
            ],
            correct: 2,
            explanation: 'veza is the subject (nominative) and feminine, so prekinula se veza.',
          },
          {
            q: 'Which polite request asks the person to repeat?',
            options: [
              'Bi ste li mogli ponoviti?',
              'Biste li mogao ponoviti?',
              'Bili ste mogli ponoviti?',
              'Biste li mogli ponoviti?',
            ],
            correct: 3,
            explanation: 'biste is one word, and with Vi the participle is plural: mogli.',
          },
          {
            q: 'In a voicemail, how do you ask to be called back?',
            options: [
              'Molim vas, nazovete me.',
              'Molim vas, nazovite me.',
              'Molim vas, nazovite mi.',
              'Molim vas, nazvali me.',
            ],
            correct: 1,
            explanation: 'The polite imperative nazovite, and nazvati takes the accusative me.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Phone Calls — Key Takeaways',
        points: [
          'Formal answer: name of the company, dobar dan, izvolite',
          'Mogu li razgovarati s gospođom Novak? — s + instrumental',
          'Loše se čuje. Biste li mogli ponoviti? Prekinula se veza.',
          'A voicemail: name, reason (zovem zbog…), request (nazovite me), number',
          'Wrong number: Oprostite, pogriješio sam broj.',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'possessive-dative': {
    worked: [
      {
        title: 'Whose, with the Dative',
        problem: 'Say: My mother is a doctor.',
        en: 'Say that your mother is a doctor, with the dative.',
        steps: [
          { label: 'The owner', text: 'The mother is yours — "to me" — so the dative is mi.' },
          { label: 'Second place', text: 'mi follows the first word, majka.' },
          { label: 'je last', text: 'je comes after mi: Majka mi je liječnica.' },
        ],
        answer: 'Majka mi je liječnica.',
      },
      {
        title: 'Plural biti',
        problem: 'Say: Her parents are in Zagreb.',
        en: 'Say that her parents are in Zagreb.',
        steps: [
          { label: 'The owner', text: 'Her → the dative joj.' },
          { label: 'The verb', text: 'roditelji is plural, so the verb is su.' },
          {
            label: 'The order',
            text: 'su comes before the dative, je would come after: Roditelji su joj u Zagrebu.',
          },
        ],
        answer: 'Roditelji su joj u Zagrebu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Choose: "Sestra ___ je u Zagrebu." (My sister is in Zagreb.)',
          options: ['me', 'mi', 'moja', 'ja'],
          correct: 1,
          hint: 'Whose? Mine — the short dative of ja.',
          explanation: 'Sestra mi je u Zagrebu.',
        },
        {
          q: 'Choose: "Kuća ___ je velika." (Her house is big.)',
          options: ['ju', 'je', 'joj', 'ona'],
          correct: 2,
          hint: 'The short dative of ona.',
          explanation: 'Kuća joj je velika.',
        },
        {
          q: 'Which word order is right? (Our parents are at the sea.)',
          options: [
            'Roditelji nam su na moru.',
            'Roditelji su nam na moru.',
            'Nam su roditelji na moru.',
            'Roditelji su nas na moru.',
          ],
          correct: 1,
          hint: 'su stands before the dative.',
          explanation: 'Roditelji su nam na moru.',
        },
        {
          q: 'What does "Pao mu je mobitel." mean?',
          options: [
            'His phone fell.',
            'I dropped my phone.',
            'Her phone fell.',
            'He bought a phone.',
          ],
          correct: 0,
          hint: 'mu is "to him".',
          explanation: 'His phone fell.',
        },
        {
          q: 'Choose: "___ je brat u Londonu." (Ivan’s brother is in London.)',
          options: ['Ivan', 'Ivana', 'Ivanom', 'Ivanu'],
          correct: 3,
          hint: 'The owner goes in the dative; masculine nouns take -u.',
          explanation: 'Ivanu je brat u Londonu.',
        },
        {
          q: 'Choose: "Ukrali su ___ torbu." (They stole our bag.)',
          options: ['nas', 'nam', 'naš', 'mi'],
          correct: 1,
          hint: 'The short dative of mi (we).',
          explanation: 'Ukrali su nam torbu.',
        },
        {
          q: 'Which sentence is correct? (My phone broke.)',
          options: [
            'Razbio se mi mobitel.',
            'Razbio mi se mobitel.',
            'Mi se razbio mobitel.',
            'Razbio me se mobitel.',
          ],
          correct: 1,
          hint: 'The dative comes before se.',
          explanation: 'Razbio mi se mobitel.',
        },
        {
          q: 'Choose: "Kako ___ je obitelj?" (How is your family? — polite)',
          options: ['vas', 'Vi', 'vam', 'vaš'],
          correct: 2,
          hint: 'The short dative of vi.',
          explanation: 'Kako vam je obitelj?',
        },
        {
          type: 'type',
          q: 'Otac ____ je kuhar. (His father is a cook.)',
          answer: 'mu',
          hint: 'The short dative of on.',
          explanation: 'Otac mu je kuhar.',
        },
        {
          type: 'type',
          q: 'Djeca su ____ u školi. (Their children are at school.)',
          answer: 'im',
          hint: 'The short dative of oni.',
          explanation: 'Djeca su im u školi.',
        },
        {
          type: 'type',
          q: '____ je auto u servisu. (Ana’s car is at the garage.)',
          answer: 'Ani',
          hint: 'Ana in the dative: -a becomes -i.',
          explanation: 'Ani je auto u servisu.',
        },
        {
          type: 'type',
          q: 'Umro ____ je djed. (Her grandfather died.)',
          answer: 'joj',
          hint: 'The short dative of ona.',
          explanation: 'Umro joj je djed.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Otac ___ je kuhar." (Her father is a cook.)',
        options: ['joj', 'ju', 'ona', 'mu'],
        correct: 0,
        explanation: 'Her → the dative joj. mu would be his.',
      },
      {
        q: 'Which sentence says "My friends are at the sea"?',
        options: [
          'Prijatelji mi su na moru.',
          'Mi su prijatelji na moru.',
          'Prijatelji su mi na moru.',
          'Prijatelji su me na moru.',
        ],
        correct: 2,
        explanation: 'su before the dative: Prijatelji su mi na moru.',
      },
      {
        q: 'What does "Razbio mi se mobitel." mean?',
        options: [
          'I broke your phone.',
          'My phone broke.',
          'His phone broke.',
          'I bought a phone.',
        ],
        correct: 1,
        explanation: 'mi — mine; razbio se — broke by itself.',
      },
      {
        q: 'Complete: "___ je kći u Londonu." (Marko’s daughter is in London.)',
        options: ['Marko', 'Marka', 'Marku', 'Markom'],
        correct: 2,
        explanation: 'The owner in the dative: Marku.',
      },
      {
        q: 'Complete: "Kako ___ je mama?" (How is your mum? — to a friend)',
        options: ['te', 'ti', 'tvoj', 'vam'],
        correct: 1,
        explanation: 'The short dative of ti is ti.',
      },
      {
        q: 'Complete: "Djeca ___ u školi." (Their children are at school.)',
        options: ['im su', 'ih su', 'su ih', 'su im'],
        correct: 3,
        explanation: 'su before the dative im.',
      },
    ],
    vocab: [
      ['novčanik', 'wallet', 'Ukrali su mi novčanik.'],
      ['torba', 'bag', 'Pala joj je torba.'],
      ['mobitel', 'mobile phone', 'Razbio mi se mobitel.'],
      ['ukrasti', 'to steal', 'Netko mu je ukrao bicikl.'],
      ['pasti', 'to fall', 'Pala mi je kapa u more.'],
      ['razbiti se', 'to break (by itself)', 'Razbila mi se čaša.'],
      ['servis', 'garage, repair shop', 'Auto mi je u servisu.'],
      ['umrijeti', 'to die', 'Umro joj je djed.'],
      ['liječnica', 'doctor (woman)', 'Majka mi je liječnica.'],
    ],
  },

  'verbs-with-dative-a2': {
    worked: [
      {
        title: 'Missing Someone',
        problem: 'Say to a friend: I miss you.',
        en: 'Tell a friend you miss them.',
        steps: [
          { label: 'Turn it round', text: 'In Croatian the one who is missed is the subject: ti.' },
          { label: 'The verb', text: 'nedostajati for ti: nedostaješ.' },
          { label: 'The one who misses', text: 'You, in the dative: mi. Nedostaješ mi.' },
        ],
        answer: 'Nedostaješ mi.',
      },
      {
        title: 'Thanking, in the Past',
        problem: 'Say: I thanked him for the advice.',
        en: 'Say that you thanked him for the advice.',
        steps: [
          { label: 'The verb', text: 'zahvaliti, past: zahvalio sam.' },
          { label: 'The person', text: 'zahvaliti takes the dative: mu, after sam.' },
          { label: 'The reason', text: 'na + locative: na savjetu. Zahvalio sam mu na savjetu.' },
        ],
        answer: 'Zahvalio sam mu na savjetu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'How do you say "I miss the sea"?',
          options: [
            'Nedostajem more.',
            'Nedostaje mi more.',
            'More nedostajem.',
            'Nedostajem moru.',
          ],
          correct: 1,
          hint: 'The sea is the subject; you are in the dative.',
          explanation: 'Nedostaje mi more.',
        },
        {
          q: 'What does "Nedostajem ti." mean?',
          options: ['I miss you.', 'You miss me.', 'I miss him.', 'We miss you.'],
          correct: 1,
          hint: 'Who is the subject here — the one who is missed?',
          explanation: 'I am the one missed, you feel it: you miss me.',
        },
        {
          q: 'Choose: "Smeta li ___ buka?" (Does the noise bother you? — to a friend)',
          options: ['te', 'ti', 'tebe', 'tvoja'],
          correct: 1,
          hint: 'smetati takes the dative.',
          explanation: 'Smeta li ti buka?',
        },
        {
          q: 'Choose: "Čestitam ___ rođendan!" (Happy birthday — polite)',
          options: ['Vas', 'Vi', 'Vaš', 'Vam'],
          correct: 3,
          hint: 'čestitati takes the dative.',
          explanation: 'Čestitam Vam rođendan!',
        },
        {
          q: 'Choose: "Nedostaju mi ___." (I miss my parents.)',
          options: ['roditelje', 'roditelji', 'roditeljima', 'roditelja'],
          correct: 1,
          hint: 'The parents are the subject.',
          explanation: 'Nedostaju mi roditelji.',
        },
        {
          q: 'Which order is right? (You missed me — a man speaking.)',
          options: [
            'Nedostajao mi si.',
            'Nedostajao sam ti.',
            'Nedostajao sam te.',
            'Mi si nedostajao.',
          ],
          correct: 1,
          hint: 'I was the one missed, so the verb is in the I-form; sam, then the dative.',
          explanation: 'Nedostajao sam ti.',
        },
        {
          q: 'Choose: "Odgovara li ___ u pet?" (Does five suit you? — polite)',
          options: ['vam', 'vas', 'Vi', 'vaš'],
          correct: 0,
          hint: 'odgovarati takes the dative.',
          explanation: 'Odgovara li vam u pet?',
        },
        {
          q: 'Choose: "Ovaj kišobran pripada ___." (This umbrella belongs to my brother.)',
          options: ['moj brat', 'mog brata', 'mojem bratu', 'mojim bratom'],
          correct: 2,
          hint: 'pripadati takes the dative.',
          explanation: 'Ovaj kišobran pripada mojem bratu.',
        },
        {
          type: 'type',
          q: 'Ne vjerujem ____. (I don’t believe him.)',
          answer: 'mu',
          hint: 'The short dative of on.',
          explanation: 'Ne vjerujem mu.',
        },
        {
          type: 'type',
          q: 'Zahvalili smo ____ na pomoći. (We thanked them for the help.)',
          answer: 'im',
          hint: 'The short dative of oni.',
          explanation: 'Zahvalili smo im na pomoći.',
        },
        {
          type: 'type',
          q: 'Hvala ti ____ savjetu. (Thanks for the advice.)',
          answer: 'na',
          hint: 'The preposition for the reason you thank someone.',
          explanation: 'Hvala ti na savjetu.',
        },
        {
          type: 'type',
          q: '____ mi Split. (I miss Split.)',
          answer: 'Nedostaje',
          hint: 'Split is the subject — third person singular of nedostajati.',
          explanation: 'Nedostaje mi Split.',
        },
      ],
    },
    checkB: [
      {
        q: 'How do you say "We miss you" to a friend?',
        options: ['Nedostaješ nam.', 'Nedostajemo ti.', 'Nedostaješ nas.', 'Nedostajemo te.'],
        correct: 0,
        explanation: 'You are missed (nedostaješ), we feel it (nam).',
      },
      {
        q: 'Complete: "Čestitam ___!" (Congratulations to you! — polite)',
        options: ['Vas', 'Vam', 'Vi', 'Vaš'],
        correct: 1,
        explanation: 'čestitati takes the dative: Vam.',
      },
      {
        q: 'Complete: "Ova kuća pripada ___." (This house belongs to my grandmother.)',
        options: ['moja baka', 'moju baku', 'mojoj baki', 'mojom bakom'],
        correct: 2,
        explanation: 'pripadati takes the dative: mojoj baki.',
      },
      {
        q: 'What does "Nedostajem ti." mean?',
        options: ['I miss you.', 'You miss me.', 'I miss her.', 'We miss you.'],
        correct: 1,
        explanation: 'I am the one missed; you are the one who misses.',
      },
      {
        q: 'Which sentence says "I thanked him"?',
        options: ['Zahvalio sam ga.', 'Zahvalio mu sam.', 'Zahvalio sam mu.', 'Zahvalio sam on.'],
        correct: 2,
        explanation: 'Dative mu, after sam.',
      },
      {
        q: 'Complete: "Nisam ___ vjerovao." (I didn’t believe him.)',
        options: ['ga', 'mu', 'njega', 'on'],
        correct: 1,
        explanation: 'vjerovati takes the dative: mu.',
      },
    ],
    vocab: [
      ['nedostajati', 'to be missed by', 'Nedostaješ mi.'],
      ['smetati', 'to bother', 'Smeta li vam dim?'],
      ['odgovarati', 'to suit; to answer', 'Odgovara li ti u pet?'],
      ['čestitati', 'to congratulate', 'Čestitam ti rođendan!'],
      ['zahvaliti', 'to thank', 'Zahvalio sam joj na pomoći.'],
      ['pripadati', 'to belong to', 'Kuća pripada mojoj obitelji.'],
      ['buka', 'noise', 'Smeta mi buka.'],
      ['savjet', 'advice', 'Hvala ti na savjetu.'],
      ['diploma', 'degree, diploma', 'Čestitam vam na diplomi.'],
    ],
  },

  'impersonal-feelings': {
    worked: [
      {
        title: 'A Feeling Now',
        problem: 'Say: The children are bored.',
        en: 'Say that the children are bored.',
        steps: [
          { label: 'The adverb', text: 'Bored is dosadno.' },
          { label: 'The person', text: 'The children feel it, so they go in the dative: djeci.' },
          { label: 'The verb', text: 'No subject, so je: Djeci je dosadno.' },
        ],
        answer: 'Djeci je dosadno.',
      },
      {
        title: 'A Feeling in the Past',
        problem: 'Say: We had a lovely time.',
        en: 'Say that you all had a lovely time.',
        steps: [
          { label: 'The adverb', text: 'A nice time is lijepo.' },
          { label: 'The person', text: 'We → the dative nam.' },
          { label: 'The past', text: 'No subject, so the neuter bilo: Bilo nam je lijepo.' },
        ],
        answer: 'Bilo nam je lijepo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'How do you say "She is hot"? (she feels hot)',
          options: ['Ona je vruće.', 'Vruće joj je.', 'Vruće ju je.', 'Vruća joj je.'],
          correct: 1,
          hint: 'Dative + je + the adverb.',
          explanation: 'Vruće joj je.',
        },
        {
          q: 'Choose: "Žao ___ je." (We are sorry.)',
          options: ['nas', 'mi', 'nam', 'naš'],
          correct: 2,
          hint: 'The short dative of mi (we).',
          explanation: 'Žao nam je.',
        },
        {
          q: 'Choose, in the past: "___ mu je loše." (He felt unwell.)',
          options: ['Bio', 'Bilo', 'Bila', 'Bili'],
          correct: 1,
          hint: 'There is no subject.',
          explanation: 'Bilo mu je loše.',
        },
        {
          q: 'Choose: "Treba ___ kišobran." (I need an umbrella.)',
          options: ['me', 'mi', 'ja', 'moj'],
          correct: 1,
          hint: 'The person who needs is in the dative.',
          explanation: 'Treba mi kišobran.',
        },
        {
          q: 'Choose: "___ mi nove cipele." (I need new shoes.)',
          options: ['Treba', 'Trebaju', 'Trebam', 'Trebamo'],
          correct: 1,
          hint: 'The shoes are the subject — and plural.',
          explanation: 'Trebaju mi nove cipele.',
        },
        {
          q: 'Which sentence says "Grandma is cold"?',
          options: ['Baka je hladno.', 'Baku je hladno.', 'Baki je hladno.', 'Baki su hladno.'],
          correct: 2,
          hint: 'The one who feels it goes in the dative.',
          explanation: 'Baki je hladno.',
        },
        {
          q: 'What does "Neugodno mi je." mean?',
          options: ['I am embarrassed.', 'I am glad.', 'I am cold.', 'It is easy for me.'],
          correct: 0,
          hint: 'ne + ugodno (pleasant).',
          explanation: 'I feel embarrassed / uncomfortable.',
        },
        {
          q: 'Choose: "Meni je hladno, a ___?" (I’m cold — and you?)',
          options: ['ti', 'te', 'tebe', 'tebi'],
          correct: 3,
          hint: 'The long dative, for contrast.',
          explanation: 'Meni je hladno, a tebi?',
        },
        {
          type: 'type',
          q: 'Nije ____ hladno. (I am not cold.)',
          answer: 'mi',
          hint: 'The short dative of ja.',
          explanation: 'Nije mi hladno.',
        },
        {
          type: 'type',
          q: '____ ti je hladno? (Are you cold?)',
          answer: 'Je li',
          hint: 'The question form of je.',
          explanation: 'Je li ti hladno?',
        },
        {
          type: 'type',
          q: 'Bit ____ vam dosadno. (You will be bored.)',
          answer: 'će',
          hint: 'The future of je, after bit.',
          explanation: 'Bit će vam dosadno.',
        },
        {
          type: 'type',
          q: '____ mi je pomoć. (I needed help.)',
          answer: 'Trebala',
          hint: 'The past participle agrees with pomoć, a feminine noun.',
          explanation: 'Trebala mi je pomoć.',
        },
        {
          q: 'How do you say "I feel sleepy"?',
          options: ['Spavam se.', 'Spava mi se.', 'Spava se mi.', 'Spavam mi se.'],
          correct: 1,
          hint: 'The person in the dative, then se — and the verb in its on form.',
          explanation: 'Spava mi se — dative mi before se, verb in the third person.',
        },
        {
          type: 'type',
          q: 'Danas mi se ne ____. (raditi — I don’t feel like working)',
          answer: 'radi',
          hint: 'With mi se the verb is always in its on form.',
          explanation: 'Ne radi mi se / Danas mi se ne radi.',
        },
        {
          q: 'Complete: "Jedu ___ se trešnje." (I fancy cherries.)',
          options: ['me', 'mi', 'ja', 'moj'],
          correct: 1,
          hint: 'The person who feels like it goes in the short dative.',
          explanation: 'Jedu mi se trešnje — the verb agrees with trešnje, the person is mi.',
        },
      ],
    },
    checkB: [
      {
        q: 'How do you say "He is hot"? (he feels hot)',
        options: ['Vruće mu je.', 'On je vruće.', 'Vruće ga je.', 'Vruć mu je.'],
        correct: 0,
        explanation: 'Dative mu + je + vruće.',
      },
      {
        q: 'Complete: "Nije ___ hladno." (I am not cold.)',
        options: ['me', 'mi', 'ja', 'moj'],
        correct: 1,
        explanation: 'The short dative mi.',
      },
      {
        q: 'Complete, in the future: "Bit ___ ti dosadno." (You will be bored.)',
        options: ['ću', 'će', 'ćeš', 'ćemo'],
        correct: 1,
        explanation: 'No subject, so the third person: bit će.',
      },
      {
        q: 'Which sentence says "Grandma is sorry"?',
        options: ['Baka je žao.', 'Baki su žao.', 'Baku je žao.', 'Baki je žao.'],
        correct: 3,
        explanation: 'Dative baki + je + žao.',
      },
      {
        q: 'Complete: "___ mi je pomoć." (I needed help.)',
        options: ['Trebao', 'Trebala', 'Trebalo', 'Trebali'],
        correct: 1,
        explanation: 'pomoć is feminine and the subject, so trebala.',
      },
      {
        q: 'Complete: "Meni je vruće, a ___?" (I’m hot — and you?)',
        options: ['ti', 'te', 'tebe', 'tebi'],
        correct: 3,
        explanation: 'The long dative tebi, for contrast.',
      },
    ],
    vocab: [
      ['hladno', 'cold (how you feel)', 'Hladno mi je.'],
      ['vruće', 'hot', 'Vruće mu je.'],
      ['dosadno', 'boring, bored', 'Djeci je dosadno.'],
      ['drago', 'glad', 'Drago mi je.'],
      ['žao', 'sorry', 'Žao nam je.'],
      ['svejedno', 'all the same', 'Svejedno mi je.'],
      ['neugodno', 'embarrassing, uncomfortable', 'Neugodno mi je.'],
      ['zlo', 'sick (feeling)', 'Zlo mi je u autobusu.'],
      ['rukavice', 'gloves', 'Trebaju mi rukavice.'],
      ['spava mi se', 'I feel sleepy', 'Spava mi se, idem u krevet.'],
      ['ne radi mi se', 'I don’t feel like working', 'Danas mi se ne radi.'],
    ],
  },

  'car-and-traffic': {
    worked: [
      {
        title: 'A Breakdown',
        problem: 'Say: My car has broken down.',
        en: 'Say that your car has broken down.',
        steps: [
          {
            label: 'The subject',
            text: 'The car broke down by itself: auto se pokvario (auto is masculine).',
          },
          { label: 'Whose', text: 'Yours → the dative mi.' },
          { label: 'The cluster', text: 'The dative comes before se: Auto mi se pokvario.' },
        ],
        answer: 'Auto mi se pokvario.',
      },
      {
        title: 'At the Garage',
        problem: 'Ask: When will the car be ready?',
        en: 'Ask the mechanic when the car will be ready.',
        steps: [
          { label: 'The question word', text: 'When → kad.' },
          { label: 'The future', text: 'The car, third person: će … biti.' },
          { label: 'Agreement', text: 'auto is masculine: gotov. Kad će auto biti gotov?' },
        ],
        answer: 'Kad će auto biti gotov?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What are "kočnice"?',
          options: ['tyres', 'brakes', 'lights', 'wipers'],
          correct: 1,
          hint: 'You press them to stop.',
          explanation: 'kočnice — brakes.',
        },
        {
          q: 'What is a "prtljažnik"?',
          options: ['the boot', 'the engine', 'the steering wheel', 'the battery'],
          correct: 0,
          hint: 'prtljaga is luggage.',
          explanation: 'prtljažnik — the boot (trunk).',
        },
        {
          q: 'Choose: "Pregrijao ___ se motor." (His engine overheated.)',
          options: ['ga', 'mu', 'joj', 'on'],
          correct: 1,
          hint: 'His → the short dative of on.',
          explanation: 'Pregrijao mu se motor.',
        },
        {
          q: 'Which sentence is correct? (My car broke down.)',
          options: [
            'Auto mi se pokvarila.',
            'Auto se mi pokvario.',
            'Auto mi se pokvario.',
            'Auto me se pokvario.',
          ],
          correct: 2,
          hint: 'auto is masculine, and the dative comes before se.',
          explanation: 'Auto mi se pokvario.',
        },
        {
          q: 'What is a "gužva" on the road?',
          options: ['a toll', 'a traffic jam', 'a junction', 'a fine'],
          correct: 1,
          hint: 'Too many cars in one place.',
          explanation: 'gužva — a traffic jam (or a crowd).',
        },
        {
          q: 'At the petrol station, which asks for a full tank?',
          options: ['Napunim, molim.', 'Napuni se, molim.', 'Napunite, molim.', 'Napunio, molim.'],
          correct: 2,
          hint: 'The polite imperative.',
          explanation: 'Napunite, molim.',
        },
        {
          q: 'Choose: "Možete li pogledati ___?" (Can you look at the tyres?)',
          options: ['gume', 'guma', 'gumama', 'gumom'],
          correct: 0,
          hint: 'Accusative plural.',
          explanation: 'Možete li pogledati gume?',
        },
        {
          q: 'Choose: "Na ___ skreni lijevo." (Turn left at the lights.)',
          options: ['semafor', 'semaforom', 'semafora', 'semaforu'],
          correct: 3,
          hint: 'na + locative for a place.',
          explanation: 'Na semaforu skreni lijevo.',
        },
        {
          type: 'type',
          q: 'Auto mi ne ____. (My car won’t start.)',
          answer: 'pali',
          hint: 'The verb paliti, third person.',
          explanation: 'Auto mi ne pali.',
        },
        {
          type: 'type',
          q: 'Akumulator mi je ____. (My battery is flat.)',
          answer: 'prazan',
          hint: 'Empty, masculine, to agree with akumulator.',
          explanation: 'Akumulator mi je prazan.',
        },
        {
          type: 'type',
          q: 'Na autocesti se plaća ____. (On the motorway you pay a toll.)',
          answer: 'cestarina',
          hint: 'The word for toll; in a se-sentence it is the subject.',
          explanation: 'Na autocesti se plaća cestarina.',
        },
        {
          type: 'type',
          q: 'Ovdje se ne ____ parkirati. (No parking here.)',
          answer: 'smije',
          hint: 'smjeti, third person singular.',
          explanation: 'Ovdje se ne smije parkirati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Pregrijao ___ se motor." (His engine has overheated.)',
        options: ['ga', 'mu', 'joj', 'on'],
        correct: 1,
        explanation: 'His → the dative mu, before se.',
      },
      {
        q: 'Complete: "Auto mi ne ___." (My car won’t start.)',
        options: ['pali', 'pale', 'palim', 'pališ'],
        correct: 0,
        explanation: 'auto is the subject, third person: ne pali.',
      },
      {
        q: 'At the petrol station, which asks for a full tank?',
        options: ['Napunim, molim.', 'Napuni se, molim.', 'Napunite, molim.', 'Napunio, molim.'],
        correct: 2,
        explanation: 'The polite imperative: Napunite, molim.',
      },
      {
        q: 'What is a "kružni tok"?',
        options: ['a traffic jam', 'a roundabout', 'a junction with lights', 'a car park'],
        correct: 1,
        explanation: 'kružni tok — a roundabout.',
      },
      {
        q: 'Complete: "Možete li pogledati ___?" (Can you look at the brakes?)',
        options: ['kočnicama', 'kočnica', 'kočnicom', 'kočnice'],
        correct: 3,
        explanation: 'Accusative plural: kočnice.',
      },
      {
        q: 'Complete: "Gužva je, ___ ćemo." (There’s a jam, we’ll be late.)',
        options: ['zakasnit', 'zakasni', 'zakasniti', 'zakasnio'],
        correct: 0,
        explanation: 'Before ćemo the infinitive drops its -i: zakasnit ćemo.',
      },
    ],
    vocab: [
      ['motor', 'engine', 'Pregrijao mi se motor.'],
      ['guma', 'tyre', 'Probušila mi se guma.'],
      ['kočnice', 'brakes', 'Kočnice ne rade dobro.'],
      ['akumulator', 'car battery', 'Akumulator mi je prazan.'],
      ['mehaničar', 'mechanic', 'Zvao sam mehaničara.'],
      ['gužva', 'traffic jam', 'Na cesti je velika gužva.'],
      ['semafor', 'traffic lights', 'Na semaforu skreni desno.'],
      ['kružni tok', 'roundabout', 'U kružnom toku uzmi drugi izlaz.'],
      ['cestarina', 'motorway toll', 'Cestarina se plaća na izlazu.'],
      ['kazna', 'fine', 'Dobio sam kaznu za parkiranje.'],
    ],
  },

  'public-transport': {
    worked: [
      {
        title: 'Buying a Ticket',
        problem: 'Ask for one return ticket to Split.',
        en: 'Ask at the window for one return ticket to Split.',
        steps: [
          { label: 'What you want', text: 'A ticket, in the accusative: jednu kartu.' },
          { label: 'Which kind', text: 'Return → povratnu, agreeing with kartu.' },
          {
            label: 'Where to',
            text: 'do + genitive: do Splita. Jednu povratnu kartu do Splita, molim.',
          },
        ],
        answer: 'Jednu povratnu kartu do Splita, molim.',
      },
      {
        title: 'Where to Get Off',
        problem: 'Tell a visitor: Get off at the next stop.',
        en: 'Tell a visitor politely to get off at the next stop.',
        steps: [
          { label: 'The verb', text: 'sići, polite imperative: siđite.' },
          { label: 'Where', text: 'A place, so na + locative: na stanici.' },
          {
            label: 'Agreement',
            text: 'sljedeći agrees: na sljedećoj stanici. Siđite na sljedećoj stanici.',
          },
        ],
        answer: 'Siđite na sljedećoj stanici.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'What is a "vozni red"?',
          options: ['a queue', 'the timetable', 'the platform', 'a ticket'],
          correct: 1,
          hint: 'It tells you when things leave and arrive.',
          explanation: 'vozni red — the timetable.',
        },
        {
          q: 'Choose: "Idemo na more ___." (We are going to the seaside by bus.)',
          options: ['s autobusom', 'autobusom', 'autobus', 'u autobusu'],
          correct: 1,
          hint: 'Instrumental, with no preposition.',
          explanation: 'Idemo na more autobusom.',
        },
        {
          q: 'Choose: "Jednu ___ do Zadra, molim." (One ticket to Zadar, please.)',
          options: ['karta', 'karte', 'kartu', 'kartom'],
          correct: 2,
          hint: 'What you ask for is in the accusative.',
          explanation: 'Jednu kartu do Zadra, molim.',
        },
        {
          q: 'What does "Vlak kasni." mean?',
          options: [
            'The train is late.',
            'The train is full.',
            'The train is leaving.',
            'The train is cancelled.',
          ],
          correct: 0,
          hint: 'kasno means late.',
          explanation: 'The train is late.',
        },
        {
          q: 'Choose: "Ide li ovaj tramvaj do ___?" (Does this tram go to the main square?)',
          options: ['glavni trg', 'glavnom trgu', 'glavnog trga', 'glavnim trgom'],
          correct: 2,
          hint: 'do + genitive.',
          explanation: 'Ide li ovaj tramvaj do glavnog trga?',
        },
        {
          q: 'Choose: "Morate sići na ___ stanici." (You have to get off at the third stop.)',
          options: ['treća', 'treću', 'trećom', 'trećoj'],
          correct: 3,
          hint: 'na + locative, and the ordinal agrees.',
          explanation: 'Morate sići na trećoj stanici.',
        },
        {
          q: 'What does a "kontrolor" do?',
          options: ['drives the tram', 'checks tickets', 'sells newspapers', 'repairs the line'],
          correct: 1,
          hint: 'kontrolirati — to check.',
          explanation: 'A kontrolor is a ticket inspector.',
        },
        {
          q: 'Which question asks when the train arrives in Osijek?',
          options: [
            'Kad stiže vlak u Osijek?',
            'Kad stiže vlak u Osijeku?',
            'Kad stižem vlak u Osijek?',
            'Kad stiže vlaka u Osijek?',
          ],
          correct: 0,
          hint: 'Arriving INTO a place: u + accusative.',
          explanation: 'Kad stiže vlak u Osijek?',
        },
        {
          type: 'type',
          q: 'Gdje moram ____? (Where do I have to get off?)',
          answer: 'sići',
          hint: 'The perfective infinitive for getting off.',
          explanation: 'Gdje moram sići?',
        },
        {
          type: 'type',
          q: 'Morate ____ na šesticu. (You have to change to the number six.)',
          answer: 'presjesti',
          hint: 'The infinitive for changing to another line.',
          explanation: 'Morate presjesti na šesticu.',
        },
        {
          type: 'type',
          q: 'Svaki dan putujem ____. (I travel by train every day.)',
          answer: 'vlakom',
          hint: 'The Croatian word for train, in the instrumental.',
          explanation: 'Svaki dan putujem vlakom.',
        },
        {
          type: 'type',
          q: 'Kartu treba ____. (You have to validate the ticket.)',
          answer: 'poništiti',
          hint: 'The verb for stamping the ticket, in the infinitive.',
          explanation: 'Kartu treba poništiti.',
        },
      ],
    },
    checkB: [
      {
        q: 'Ask: When does the next bus to Rijeka leave?',
        options: [
          'Kad polazi sljedeći autobus za Rijeku?',
          'Kad polazi sljedeći autobus za Rijeci?',
          'Kad polazi sljedećeg autobusa za Rijeku?',
          'Kad polazim sljedeći autobus za Rijeku?',
        ],
        correct: 0,
        explanation: 'The bus is the subject (nominative), za + accusative for the destination.',
      },
      {
        q: 'Complete: "Jednu ___ do Splita, molim." (One ticket to Split, please.)',
        options: ['karta', 'kartu', 'karte', 'kartom'],
        correct: 1,
        explanation: 'Accusative: jednu kartu.',
      },
      {
        q: 'Which sentence asks if this tram goes to the main station?',
        options: [
          'Ide li ovaj tramvaj do Glavni kolodvor?',
          'Ide li ovog tramvaja do Glavnog kolodvora?',
          'Ide li ovaj tramvaj do Glavnog kolodvora?',
          'Idem li ovaj tramvaj do Glavnog kolodvora?',
        ],
        correct: 2,
        explanation: 'The tram is the subject, do + genitive: do Glavnog kolodvora.',
      },
      {
        q: 'What is a "vozni red"?',
        options: ['a platform', 'a queue', 'the driver', 'the timetable'],
        correct: 3,
        explanation: 'vozni red — the timetable.',
      },
      {
        q: 'Complete: "Idemo u Zagreb ___." (We are going to Zagreb by train.)',
        options: ['s vlakom', 'vlak', 'vlakom', 'vlaku'],
        correct: 2,
        explanation: 'Instrumental, no preposition: vlakom.',
      },
      {
        q: 'Complete: "Kartu treba ___." (You have to validate the ticket.)',
        options: ['poništiti', 'poništila', 'poništim', 'poništen'],
        correct: 0,
        explanation: 'After treba, the infinitive: poništiti.',
      },
    ],
    vocab: [
      ['karta', 'ticket', 'Jednu kartu do Splita, molim.'],
      ['povratna karta', 'return ticket', 'Koliko košta povratna karta?'],
      ['vozni red', 'timetable', 'Pogledaj vozni red.'],
      ['stanica', 'stop (tram, bus)', 'Siđite na sljedećoj stanici.'],
      ['kolodvor', 'station', 'Vlak stiže na Glavni kolodvor.'],
      ['peron', 'platform', 'Vlak polazi s drugog perona.'],
      ['sići', 'to get off', 'Gdje moram sići?'],
      ['presjesti', 'to change (lines)', 'Morate presjesti na šesticu.'],
      ['kasniti', 'to be late', 'Vlak kasni deset minuta.'],
      ['poništiti', 'to validate (a ticket)', 'Kartu treba poništiti.'],
    ],
  },

  'phone-calls-a2': {
    worked: [
      {
        title: 'Asking for Someone',
        problem: 'Ask politely: May I speak to Mrs Novak?',
        en: 'Ask politely to speak to Mrs Novak.',
        steps: [
          { label: 'The polite frame', text: 'Mogu li razgovarati — may I speak.' },
          { label: 'With whom', text: 'razgovarati s + instrumental.' },
          {
            label: 'The endings',
            text: 'gospođa → gospođom; Novak is a woman’s surname and does not change. Mogu li razgovarati s gospođom Novak?',
          },
        ],
        answer: 'Mogu li razgovarati s gospođom Novak?',
      },
      {
        title: 'A Voicemail',
        problem: 'Leave a message: say who you are, why you called, and ask to be called back.',
        en: 'Leave a short voicemail as Marko Babić about Friday’s meeting.',
        steps: [
          { label: 'Name', text: 'Dobar dan, ovdje Marko Babić.' },
          { label: 'Reason', text: 'zbog + genitive: Zovem zbog sastanka u petak.' },
          {
            label: 'Request',
            text: 'Polite imperative + accusative: Molim vas, nazovite me. Hvala, doviđenja.',
          },
        ],
        answer:
          'Dobar dan, ovdje Marko Babić. Zovem zbog sastanka u petak. Molim vas, nazovite me. Hvala, doviđenja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Someone asks "Tko zove?" You answer:',
          options: [
            'Ovdje Ana Horvat.',
            'Ovdje Anu Horvat.',
            'Ovdje Ani Horvat.',
            'Ovdje Anom Horvat.',
          ],
          correct: 0,
          hint: 'Your name stays in the nominative.',
          explanation: 'Ovdje Ana Horvat.',
        },
        {
          q: 'Choose: "Mogu li razgovarati s ___?" (May I speak to Ivan?)',
          options: ['Ivan', 'Ivana', 'Ivanom', 'Ivanu'],
          correct: 2,
          hint: 's + instrumental.',
          explanation: 'Mogu li razgovarati s Ivanom?',
        },
        {
          q: 'What does "Trenutak, spajam vas." mean?',
          options: [
            'Sorry, wrong number.',
            'One moment, I’ll put you through.',
            'Please call back later.',
            'The line is bad.',
          ],
          correct: 1,
          hint: 'spajati — to connect.',
          explanation: 'One moment, I’ll put you through.',
        },
        {
          q: 'The person is out. The secretary says:',
          options: [
            'Nažalost, trenutno nisam u uredu.',
            'Nažalost, trenutno nije u uredu.',
            'Nažalost, trenutno nije u ured.',
            'Nažalost, trenutno nije na uredu.',
          ],
          correct: 1,
          hint: 'About her, and where she is: u + locative.',
          explanation: 'Nažalost, trenutno nije u uredu.',
        },
        {
          q: 'Choose: "___ li mogli ponoviti?" (Could you repeat that? — polite)',
          options: ['Bi', 'Bih', 'Biste', 'Bismo'],
          correct: 2,
          hint: 'The conditional for Vi.',
          explanation: 'Biste li mogli ponoviti?',
        },
        {
          q: 'You dialled the wrong number. You say:',
          options: [
            'Oprostite, pogriješio broj sam.',
            'Oprostite, pogriješio sam brojem.',
            'Oprostite, pogriješio sam broj.',
            'Oprostite, pogriješio me broj.',
          ],
          correct: 2,
          hint: 'sam second, broj in the accusative.',
          explanation: 'Oprostite, pogriješio sam broj.',
        },
        {
          q: 'Ending a call with a friend, you say:',
          options: ['Čujete se!', 'Čujemo se!', 'Čujem se!', 'Čuju se!'],
          correct: 1,
          hint: 'We will hear each other — the we-form.',
          explanation: 'Čujemo se! — talk soon.',
        },
        {
          q: 'Which sentence says "My battery is flat"?',
          options: [
            'Baterija me je prazna.',
            'Baterija mi je prazan.',
            'Mi je baterija prazna.',
            'Baterija mi je prazna.',
          ],
          correct: 3,
          hint: 'Possessive dative, and prazna agrees with baterija.',
          explanation: 'Baterija mi je prazna.',
        },
        {
          type: 'type',
          q: 'Loše se ____. (The line is bad.)',
          answer: 'čuje',
          hint: 'čuti, third person singular.',
          explanation: 'Loše se čuje.',
        },
        {
          type: 'type',
          q: 'Prekinula se ____. (We got cut off.)',
          answer: 'veza',
          hint: 'The word for the connection, in the nominative.',
          explanation: 'Prekinula se veza.',
        },
        {
          type: 'type',
          q: 'Molim vas, nazovite ____. (Please call me.)',
          answer: 'me',
          hint: 'nazvati takes the accusative; the short form of ja.',
          explanation: 'Molim vas, nazovite me.',
        },
        {
          type: 'type',
          q: 'Zovem ____ sastanka u petak. (I’m calling about the meeting on Friday.)',
          answer: 'zbog',
          hint: 'The preposition for "because of", with the genitive.',
          explanation: 'Zovem zbog sastanka u petak.',
        },
      ],
    },
    checkB: [
      {
        q: 'Someone asks "Tko zove?" You answer:',
        options: [
          'Ovdje Ana Horvat.',
          'Ovdje Anu Horvat.',
          'Ovdje Ani Horvat.',
          'Ovdje Anom Horvat.',
        ],
        correct: 0,
        explanation: 'Your name in the nominative: Ovdje Ana Horvat.',
      },
      {
        q: 'The person you want is out. The secretary says:',
        options: [
          'Nažalost, trenutno nisam u uredu.',
          'Nažalost, trenutno nije u uredu.',
          'Nažalost, trenutno nije u ured.',
          'Nažalost, trenutno nije na uredu.',
        ],
        correct: 1,
        explanation: 'nije for her, u uredu for where.',
      },
      {
        q: 'You dialled the wrong number. You say:',
        options: [
          'Oprostite, pogriješio broj sam.',
          'Oprostite, pogriješio sam brojem.',
          'Oprostite, pogriješio sam broj.',
          'Oprostite, pogriješio me broj.',
        ],
        correct: 2,
        explanation: 'Oprostite, pogriješio sam broj.',
      },
      {
        q: 'Complete politely: "___ razgovarati s gospođom Novak." (I would like to speak to Mrs Novak.)',
        options: ['Htio bi', 'Hoću bih', 'Htio bih', 'Htjeli bih'],
        correct: 2,
        explanation: 'The conditional for ja: htio bih (a woman says htjela bih).',
      },
      {
        q: 'At the end of a call with a friend, you say:',
        options: ['Čujete se!', 'Čujem se!', 'Čuju se!', 'Čujemo se!'],
        correct: 3,
        explanation: 'Čujemo se! — we will hear each other: talk soon.',
      },
      {
        q: 'Your phone battery is flat. You say:',
        options: [
          'Baterija mi je prazna.',
          'Baterija me je prazna.',
          'Baterija mi je prazan.',
          'Mi je baterija prazna.',
        ],
        correct: 0,
        explanation: 'Possessive dative mi in second place; prazna agrees with baterija.',
      },
    ],
    vocab: [
      ['razgovarati', 'to talk, speak', 'Mogu li razgovarati s gospođom Novak?'],
      ['spojiti', 'to put through', 'Trenutak, spojit ću vas.'],
      ['poruka', 'message', 'Želite li ostaviti poruku?'],
      ['veza', 'connection, line', 'Prekinula se veza.'],
      ['nazvati', 'to call', 'Nazovite me sutra.'],
      ['signal', 'signal; tone', 'Nemam signala.'],
      ['baterija', 'battery (phone)', 'Baterija mi je prazna.'],
      ['ured', 'office', 'Trenutno nije u uredu.'],
      ['pogriješiti', 'to make a mistake', 'Pogriješio sam broj.'],
      ['birati broj', 'to dial a number', 'Prvo birajte nulu, onda broj.'],
    ],
  },
};
