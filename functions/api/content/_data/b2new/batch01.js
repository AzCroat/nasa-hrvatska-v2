// functions/api/content/_data/b2new/batch01.js
//
// New B2 lessons, batch 01 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 1–2: the peculiarities of a-type (masculine and neuter)
// and e-type (feminine -a) nouns, -ati verbs whose present is not -am, the false friends of
// translators, literacy, the Croatian month names, anniversaries and the govoriti family.
//
// Forms were checked against src/lib/croatianMorphology.ts decline(). Two places where that
// engine is wrong were avoided rather than taught: san (sna, snovi) and vrabac (vrapca).
// Nouns in -tak (početak, zadatak, podatak) are kept out of the nominative plural, where
// the standard admits two spellings (početci / počeci); only forms with one answer are
// tested. Etymologies of the month names are stated only where they are the received
// explanation; veljača, ožujak, rujan and prosinac are said to be uncertain, which they are.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'noun-peculiarities-a',
    masterOrder: 1,
    prerequisites: [
      'masculine-plural-ovi',
      'fleeting-a',
      'sibilarization',
      'plural-irregular',
      'vocative-review',
    ],
    objectives: [
      'Know which short masculine nouns take -ovi / -evi and which do not: gradovi, muževi, but dani, gosti',
      'Handle the fleeting a and sibilarization in every case: momak → momka, učenik → učenici',
      'Use the irregular plurals čovjek → ljudi, oko → oči, dijete → djeca correctly, with their agreement',
    ],
  },
  {
    id: 'present-ati-tricky',
    masterOrder: 2,
    prerequisites: ['present', 'verbs-ati-irati', 'sounds-palatals', 'noun-peculiarities-a'],
    objectives: [
      'Conjugate -ati verbs whose present is -em: pisati → pišem, kazati → kažem, plakati → plačem',
      'Know the three that change more: slati → šaljem, zvati → zovem, brati → berem',
      'Keep the pattern in prefixed verbs and commands, and build the past from the infinitive: pošalji, pisao',
    ],
  },
  {
    id: 'false-friends',
    masterOrder: 4,
    prerequisites: ['noun-peculiarities-a', 'adjective-agreement', 'school-studies'],
    objectives: [
      'Recognise the false friends that trip English speakers: aktualan, eventualno, simpatičan, gimnazija',
      'Choose the Croatian word for what you actually mean: pravi razlog, na kraju, teretana, dokaz',
      'Use the words of school, health and renting correctly: lektira, ordinacija, ambulanta, kaucija, tvornica',
    ],
  },
  {
    id: 'literacy-and-language',
    masterOrder: 5,
    prerequisites: ['months', 'verb-prefixes', 'aspect-pairs', 'false-friends'],
    objectives: [
      'Talk about literacy: pismenost, digitalna, informacijska and funkcionalna pismenost',
      'Use the Croatian month names in every case and know where several of them come from',
      'Tell apart obljetnica, godišnjica and proslava, and the govoriti family: odgovoriti, dogovoriti se, nagovoriti',
    ],
  },
  {
    id: 'noun-peculiarities-e',
    masterOrder: 6,
    prerequisites: [
      'noun-peculiarities-a',
      'plural-cases',
      'dative-locative',
      'genitive-deep',
      'vocative-review',
    ],
    objectives: [
      'Form the genitive plural of feminine nouns in -a: sestara, djevojaka, but majki, borbi',
      'Apply sibilarization in the dative and locative singular — ruci, nozi, knjizi — and know its exceptions: baki, mački',
      'Address women correctly in the vocative: sestro, gospođo, učiteljice',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 1 · Peculiarities of a-type (masculine and neuter) nouns
// ─────────────────────────────────────────────────────────
const NOUN_A = {
  id: 'noun-peculiarities-a',
  title: 'Gradovi, Ljudi, Oči',
  subtitle: 'Masculine and neuter nouns up close: the long plural, the fleeting a, the irregulars',
  icon: '🔎',
  level: 'B2',
  duration: '~10 min',
  color: '#1e40af',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'The Nouns That Do Not Follow the Table',
      body: 'Grammars call masculine and neuter nouns the a-type, because their genitive singular ends in -a: grada, sela. You have declined them since A1. B2 starts with the places where they do not simply follow the table: the long plural that some short nouns refuse, the a that vanishes, the consonant that changes before -i and -e, and three everyday nouns whose plural is a different word. None of it is rare — these are words you say every day.',
      icon: '🔎',
    },
    {
      type: 'rule',
      title: 'The Long Plural: -ovi and -evi',
      body: 'Most one-syllable masculine nouns add -ov- before the plural endings: grad → gradovi, sin → sinovi, vlak → vlakovi. After a soft consonant (c, č, ć, đ, j, lj, nj, š, ž) the insert is -ev-: muž → muževi, broj → brojevi, kralj → kraljevi, nož → noževi. The insert stays in every plural case: gradova, gradovima, gradove. A two-syllable noun that loses its a and becomes one syllable can take it too: vjetar → vjetrovi.',
      highlight: 'muž → muževi',
    },
    {
      type: 'rule',
      title: 'Short Nouns That Refuse It',
      body: 'Some very common one-syllable nouns take the plain plural: dan → dani, gost → gosti, zub → zubi, konj → konji, mrav → mravi. Gost also has an unusual genitive plural: gostiju (sto gostiju). Sat has two plurals with two meanings: sati are hours (osam sati), satovi are clocks and watches. Brat has a collective plural, braća, which declines like a feminine singular: braće, braći, braću, braćom.',
      highlight: 'dan → dani',
    },
    {
      type: 'rule',
      title: 'The Fleeting a',
      body: 'An a in the last syllable, just before the final consonant, often disappears as soon as an ending is added: momak → momka, pas → psa, Zadar → Zadra, vjetar → vjetra. Otac loses its t as well: oca, ocu. The a comes back in the genitive plural: momaka, pasa. Not every such a is fleeting — korak → koraka, stručnjak → stručnjaka — so learn these nouns together with their genitive.',
      highlight: 'momak → momka',
    },
    {
      type: 'rule',
      title: 'k, g, h Before -i: Sibilarization',
      body: 'In the nominative plural (-i) and in -ima, k becomes c, g becomes z and h becomes s: učenik → učenici, učenicima; bubreg → bubrezi; Čeh → Česi. The genitive and accusative plural have no -i, so nothing changes there: učenika, učenike. Read the ending first, then decide on the consonant.',
      highlight: 'učenik → učenici',
    },
    {
      type: 'rule',
      title: 'The Vocative: k, g, h, c Before -e',
      body: 'Before the vocative ending -e, k becomes č, g becomes ž, h becomes š and c becomes č: vojnik → vojniče, drug → druže, Bog → Bože, duh → duše, stric → striče, otac → oče, čovjek → čovječe. After a soft consonant the vocative is -u: prijatelj → prijatelju, muž → mužu. Čovječe! is also an everyday exclamation of surprise.',
      highlight: 'čovjek → čovječe',
    },
    {
      type: 'rule',
      title: 'Three Plurals That Are Different Words',
      body: 'Čovjek → ljudi: the genitive plural is also ljudi (pet ljudi, mnogo ljudi), the dative ljudima, the accusative ljude; with dva, tri, četiri you keep čovjek: dva čovjeka. Oko → oči and uho → uši: these plurals are FEMININE, so plave oči, velike uši; their genitive is očiju, ušiju. Dijete → djeca: djeca declines like a feminine singular (djece, djeci, djecu, djecom) and takes a feminine adjective (mala djeca), but the verb is plural: Djeca se igraju. Some neuters add -en- or -et- outside the nominative: ime → imena, vrijeme → vremena, rame → ramena, dijete → djeteta.',
      highlight: 'plave oči',
    },
    {
      type: 'table',
      title: 'One Word, Several Surprises',
      headers: ['Nominative sg', 'Genitive sg', 'Nominative pl', 'Genitive pl', 'What to notice'],
      rows: [
        ['grad', 'grada', 'gradovi', 'gradova', 'the long plural -ovi'],
        ['muž', 'muža', 'muževi', 'muževa', '-evi after a soft consonant'],
        ['gost', 'gosta', 'gosti', 'gostiju', 'no -ovi; genitive plural -iju'],
        ['momak', 'momka', 'momci', 'momaka', 'fleeting a and k → c'],
        ['pas', 'psa', 'psi', 'pasa', 'the a returns in the genitive plural'],
        ['učenik', 'učenika', 'učenici', 'učenika', 'k → c only before -i'],
        ['čovjek', 'čovjeka', 'ljudi', 'ljudi', 'a different word in the plural'],
        ['oko', 'oka', 'oči', 'očiju', 'a feminine plural'],
        ['dijete', 'djeteta', 'djeca', 'djece', 'a collective plural'],
        ['ime', 'imena', 'imena', 'imena', 'an extra -en-'],
      ],
    },
    {
      type: 'example',
      title: 'Plurals in Context',
      items: [
        {
          hr: 'Moji sinovi studiraju u Zagrebu.',
          en: 'My sons are studying in Zagreb.',
          note: 'sinovi — sin takes the long plural',
        },
        {
          hr: 'Svi muževi iz naše ulice nedjeljom igraju nogomet.',
          en: 'All the husbands from our street play football on Sundays.',
          note: 'muževi — after the soft ž of muž the insert is -ev-',
        },
        {
          hr: 'Na večeri je bilo dvadeset gostiju.',
          en: 'There were twenty guests at the dinner.',
          note: 'gostiju — gost has no long plural, and its genitive plural is unusual',
        },
        {
          hr: 'Ljeti su dani dugi i topli.',
          en: 'In summer the days are long and warm.',
          note: 'dani — dan is one of the short nouns without -ovi',
        },
        {
          hr: 'U ovom razredu svi učenici dobro govore engleski.',
          en: 'In this class all the pupils speak English well.',
          note: 'učenici — the k of učenik becomes c before -i',
        },
        {
          hr: 'Na trgu je bilo mnogo ljudi.',
          en: 'There were a lot of people in the square.',
          note: 'ljudi — the plural of čovjek, also its genitive plural after mnogo',
        },
        {
          hr: 'Djeca se igraju u parku iza škole.',
          en: 'The children are playing in the park behind the school.',
          note: 'djeca takes a plural verb: igraju',
        },
        {
          hr: 'Moja kći ima velike smeđe oči.',
          en: 'My daughter has big brown eyes.',
          note: 'oči is feminine, so the adjectives are velike smeđe',
        },
      ],
    },
    {
      type: 'example',
      title: 'The Fleeting a and the Vocative',
      items: [
        {
          hr: 'Upoznala sam jednog momka iz Zadra.',
          en: 'I met a young man from Zadar.',
          note: 'momka, Zadra — the a of momak and of Zadar disappears',
        },
        {
          hr: 'Naš pas ne voli druge pse.',
          en: 'Our dog does not like other dogs.',
          note: 'pse — the accusative plural of pas, without the a',
        },
        {
          hr: 'Bez vjetra ne možemo jedriti.',
          en: 'Without wind we cannot sail.',
          note: 'vjetra — vjetar loses its a in the genitive',
        },
        {
          hr: 'Druže, gdje si bio cijeli dan?',
          en: 'Mate, where have you been all day?',
          note: 'druže — drug in the vocative: g becomes ž',
        },
        {
          hr: 'Čovječe, ne mogu vjerovati što se dogodilo!',
          en: 'Man, I cannot believe what happened!',
          note: 'čovječe — the vocative of čovjek, used as an exclamation',
        },
        {
          hr: 'Oče, pomozi mi s ovim pismom.',
          en: 'Father, help me with this letter.',
          note: 'oče — the vocative of otac: no t, and c becomes č',
        },
        {
          hr: 'Prijatelju, hvala ti na svemu.',
          en: 'My friend, thank you for everything.',
          note: 'prijatelju — after the soft lj the vocative ends in -u',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which is the nominative plural of gost?',
      options: ['gostovi', 'gosti', 'gostevi'],
      correct: 1,
      explanation:
        'Gost is one of the short nouns that refuse the long plural: gosti. Its genitive plural is gostiju.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the vocative of drug?',
      options: ['drugu', 'druge', 'druže'],
      correct: 2,
      explanation: 'Before the vocative -e, g becomes ž: druže.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Giving every short noun -ovi: "danovi, gostovi" — the plurals are dani and gosti. (2) Using the genitive plural for the singular: "Upoznao sam simpatičnog momaka" — one young man is momka; momaka is the genitive plural. (3) Changing the consonant where there is no -i: "Vidim učenice" for male pupils — the accusative plural keeps the k: učenike. (4) Treating oči as masculine: "plavi oči" — the plural of oko is feminine: plave oči.',
      highlight: 'plave oči',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which is the nominative plural of muž?',
          options: ['muži', 'mužovi', 'muževi', 'muževe'],
          correct: 2,
          explanation:
            'Muž ends in a soft ž, so the long plural uses -ev-: muževi. Muževe is the accusative plural.',
        },
        {
          q: 'Complete: "Na ručku je bilo deset ___." (guests)',
          options: ['gostiju', 'gostova', 'gosti', 'goste'],
          correct: 0,
          explanation: 'After deset the genitive plural, and gost has a special one: gostiju.',
        },
        {
          q: 'Complete: "Upoznao sam jednog ___ iz Splita." (a young man)',
          options: ['momak', 'momka', 'momaka', 'momku'],
          correct: 1,
          explanation:
            'A living masculine object takes the genitive-like accusative, and the fleeting a disappears: momka.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Ima lijepi plavi oči.',
            'Ima lijepa plava oči.',
            'Ima lijepih plavih oči.',
            'Ima lijepe plave oči.',
          ],
          correct: 3,
          explanation: 'Oči is a feminine plural, so the adjectives take -e: lijepe plave oči.',
        },
        {
          q: 'What is the vocative of čovjek?',
          options: ['čovječe', 'čovjeku', 'čovječu', 'čovjekom'],
          correct: 0,
          explanation: 'Before the vocative -e, k becomes č: čovječe.',
        },
        {
          q: 'Complete: "Profesor razgovara s ___." (the pupils)',
          options: ['učenike', 'učenikima', 'učenicima', 'učenika'],
          correct: 2,
          explanation:
            'S kim? — the instrumental plural -ima, and before -i the k becomes c: učenicima.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Masculine and Neuter Nouns — Key Takeaways',
      points: [
        'Short masculine nouns take -ovi, or -evi after a soft consonant: gradovi, muževi',
        'Some refuse it: dani, gosti (gostiju), zubi; sati are hours, satovi clocks',
        'The fleeting a: momak → momka, and it returns in the genitive plural: momaka',
        'k, g, h → c, z, s before -i; k, g, h, c → č, ž, š, č in the vocative',
        'čovjek → ljudi, oko → oči (feminine), dijete → djeca (plural verb)',
        'Neuters like ime and vrijeme add -en-: imena, vremena',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 2 · -ati verbs whose present is not -am
// ─────────────────────────────────────────────────────────
const PRESENT_ATI = {
  id: 'present-ati-tricky',
  title: 'Pišem, Šaljem, Zovem',
  subtitle: '-ati verbs whose present you cannot see from the infinitive',
  icon: '✉️',
  level: 'B2',
  duration: '~8 min',
  color: '#7c2d12',
  bg: '#fff7ed',
  slides: [
    {
      type: 'intro',
      title: 'Not Every -ati Verb Says -am',
      body: 'Čitati gives čitam, gledati gives gledam, and most -ati verbs work exactly like that. But a group of very common ones only LOOKS like čitati: pisati gives pišem, slati gives šaljem, zvati gives zovem. Nothing in the infinitive warns you. The way to master them is to learn each verb together with its ja form — and once you know it, the rest of the present follows the regular -em endings.',
      icon: '✉️',
    },
    {
      type: 'rule',
      title: 'A Consonant Changes Before -em',
      body: 'In these verbs the last consonant of the stem softens in every person of the present: s → š (pisati → pišem, brisati → brišem), z → ž (kazati → kažem, vezati → vežem), k → č (plakati → plačem, skakati → skačem), g → ž (lagati → lažem). The endings are -em, -eš, -e, -emo, -ete, and -u for oni: pišu, kažu, plaču.',
      highlight: 'pisati → pišem',
    },
    {
      type: 'rule',
      title: 'Three That Change More',
      body: 'Three short verbs change the stem itself. Slati → šaljem: s becomes š and lj appears (šalješ, šalje, šalju). Zvati → zovem: an o appears between z and v (zoveš, zovu). Brati → berem: an e appears (bereš, beru); prati → perem (to wash) works the same way. These are high-frequency verbs — Kako se zoveš? uses one of them.',
      highlight: 'zvati → zovem',
    },
    {
      type: 'table',
      title: 'The Whole Present',
      headers: ['', 'pisati', 'kazati', 'plakati', 'slati', 'zvati', 'brati'],
      rows: [
        ['ja', 'pišem', 'kažem', 'plačem', 'šaljem', 'zovem', 'berem'],
        ['ti', 'pišeš', 'kažeš', 'plačeš', 'šalješ', 'zoveš', 'bereš'],
        ['on, ona', 'piše', 'kaže', 'plače', 'šalje', 'zove', 'bere'],
        ['mi', 'pišemo', 'kažemo', 'plačemo', 'šaljemo', 'zovemo', 'beremo'],
        ['vi', 'pišete', 'kažete', 'plačete', 'šaljete', 'zovete', 'berete'],
        ['oni', 'pišu', 'kažu', 'plaču', 'šalju', 'zovu', 'beru'],
      ],
    },
    {
      type: 'rule',
      title: 'Prefixes Keep the Pattern',
      body: 'A prefix changes the meaning and the aspect, never the present: napisati → napišem, potpisati → potpišem, obrisati → obrišem, pokazati → pokažem, dokazati → dokažem, poslati → pošaljem, nazvati → nazovem, pozvati → pozovem, izabrati → izaberem. If you know the bare verb, you know all of its family.',
      highlight: 'poslati → pošaljem',
    },
    {
      type: 'rule',
      title: 'The Past From the Infinitive, the Command From the Present',
      body: 'The past tense is built on the infinitive, so the change does NOT appear there: pisao, kazala, plakali, slao, zvala, brali. The command is built on the present stem, so it DOES: piši, kaži, briši, šalji, zovi, beri — and the negative command Ne plači! The future uses the infinitive: pisat ću, slat ćemo.',
      highlight: 'Ne plači!',
    },
    {
      type: 'example',
      title: 'In the Present',
      items: [
        {
          hr: 'Svaki tjedan pišem baki dugo pismo.',
          en: 'Every week I write my grandmother a long letter.',
          note: 'pišem — in pisati the s becomes š',
        },
        {
          hr: 'Kako se kaže „hvala” na engleskom?',
          en: 'How do you say “hvala” in English?',
          note: 'kaže — in kazati the z becomes ž',
        },
        {
          hr: 'Dijete plače jer je umorno i gladno.',
          en: 'The child is crying because it is tired and hungry.',
          note: 'plače — in plakati the k becomes č',
        },
        {
          hr: 'Djeca skaču u more s mola.',
          en: 'The children jump into the sea from the pier.',
          note: 'skaču — the oni form of skakati ends in -u',
        },
        {
          hr: 'Nakon ručka uvijek brišem stol.',
          en: 'After lunch I always wipe the table.',
          note: 'brišem — in brisati the s becomes š',
        },
        {
          hr: 'Sutra vam šaljem sve dokumente.',
          en: 'Tomorrow I am sending you all the documents.',
          note: 'šaljem — slati has lj in every person',
        },
        {
          hr: 'Zovem se Petra, a prijatelji me zovu Pepa.',
          en: 'My name is Petra, and my friends call me Pepa.',
          note: 'zovem, zovu — zvati has an o in the present',
        },
        {
          hr: 'U rujnu beremo grožđe u vinogradu.',
          en: 'In September we pick grapes in the vineyard.',
          note: 'beremo — brati gains an e in the present',
        },
      ],
    },
    {
      type: 'example',
      title: 'Prefixes, Commands and the Past',
      items: [
        {
          hr: 'Molim vas, potpišite ovdje i ovdje.',
          en: 'Please sign here and here.',
          note: 'potpišite — potpisati keeps the š of pisati',
        },
        {
          hr: 'Ako ih pozovemo, sigurno će doći.',
          en: 'If we invite them, they will certainly come.',
          note: 'pozovemo — pozvati follows zvati',
        },
        {
          hr: 'Ne plači, sve će biti u redu.',
          en: 'Do not cry, everything will be all right.',
          note: 'plači — the command keeps the č of the present',
        },
        {
          hr: 'Jučer sam pisao cijeli dan.',
          en: 'Yesterday I was writing all day.',
          note: 'pisao — the past is built on the infinitive, so there is no š',
        },
        {
          hr: 'Izaberi što god želiš, ja častim.',
          en: 'Choose whatever you like, it is my treat.',
          note: 'izaberi — izabrati follows brati',
        },
        {
          hr: 'Pošalji mi poruku kad stigneš.',
          en: 'Send me a message when you arrive.',
          note: 'pošalji — the command of poslati, from the present stem šalj-',
        },
      ],
    },
    {
      type: 'rule',
      title: 'The Other -ati Subgroups: -jem and -im',
      body: 'Two more groups hide behind -ati. After a vowel, some take -jem: grijati → grijem, sijati → sijem, smijati se → smijem se, and pljuvati → pljujem. Verbs in -avati with a short root take -ajem: davati → dajem, prodavati → prodajem, ustajati → ustajem. A third group behaves like govoriti and takes -im, usually after č, ž, j or a soft consonant: bježati → bježim, držati → držim, trčati → trčim, and stajati → stojim, where the vowel changes too.',
      highlight: 'grijati → grijem · držati → držim · stajati → stojim',
    },
    {
      type: 'table',
      title: 'The -ati Subgroups',
      headers: ['Infinitive', 'ja', 'oni', 'Group'],
      rows: [
        ['čitati', 'čitam', 'čitaju', '-am (the regular one)'],
        ['pisati', 'pišem', 'pišu', '-em with a softened consonant'],
        ['grijati', 'grijem', 'griju', '-jem after a vowel'],
        ['smijati se', 'smijem se', 'smiju se', '-jem after a vowel'],
        ['pljuvati', 'pljujem', 'pljuju', '-uvati → -ujem'],
        ['davati', 'dajem', 'daju', '-avati → -ajem'],
        ['bježati', 'bježim', 'bježe', '-im, like govoriti'],
        ['držati', 'držim', 'drže', '-im, like govoriti'],
        ['stajati', 'stojim', 'stoje', '-im, with a vowel change'],
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the ja form of kazati?',
      options: ['kazam', 'kažem', 'kazem'],
      correct: 1,
      explanation: 'Kazati softens z to ž in the present: kažem, kažeš, kaže.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Oni ___ pakete svaki tjedan." (slati)',
      options: ['slaju', 'šalju', 'šaljaju'],
      correct: 1,
      explanation: 'Slati → šaljem, and the oni form is šalju.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Treating them like čitati: "pisam, kazam, zvam" — the present is pišem, kažem, zovem. (2) Carrying the change into the past: "pišao" — the past comes from the infinitive: pisao. (3) Dropping the lj of slati: "šalem" — it is šaljem. (4) A wrong oni form: "oni piše" or "oni pišeju" — it is pišu.',
      highlight: 'pišem, kažem, zovem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the ja form of brisati?',
          options: ['brisam', 'brišam', 'brisem', 'brišem'],
          correct: 3,
          explanation: 'In the present the s becomes š and the ending is -em: brišem.',
        },
        {
          q: 'Complete: "Kako se to ___ na engleskom?" (to say)',
          options: ['kaže', 'kaza', 'kazi', 'kaža'],
          correct: 0,
          explanation: 'Kazati → kažem; the on form is kaže.',
        },
        {
          q: 'Complete: "Djeca ___ u bazen." (to jump)',
          options: ['skakaju', 'skače', 'skaču', 'skačaju'],
          correct: 2,
          explanation: 'Skakati → skačem; djeca takes a plural verb, so skaču.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Jučer sam pišao pismo.',
            'Jučer sam pisao pismo.',
            'Jučer sam pisal pismo.',
            'Jučer sam pišem pismo.',
          ],
          correct: 1,
          explanation: 'The past is built on the infinitive pisati, so there is no š: pisao.',
        },
        {
          q: 'Complete: "Svaki dan ___ mamu telefonom." (zvati, ja)',
          options: ['zvam', 'zovam', 'zovem', 'zvem'],
          correct: 2,
          explanation: 'Zvati gains an o in the present: zovem.',
        },
        {
          q: 'Complete: "U jesen ___ jabuke." (brati, mi)',
          options: ['beremo', 'bramo', 'beramo', 'bremo'],
          correct: 0,
          explanation: 'Brati gains an e in the present: beremo.',
        },
      ],
    },
    {
      type: 'summary',
      title: '-ati Verbs With -em — Key Takeaways',
      points: [
        'Learn these verbs with their ja form: pisati → pišem',
        's → š, z → ž, k → č, g → ž in every person of the present',
        'slati → šaljem, zvati → zovem, brati → berem, prati → perem',
        'Prefixed verbs keep the pattern: pošaljem, nazovem, izaberem',
        'The command keeps the change (piši, šalji); the past does not (pisao, slao)',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 4 · False friends
// ─────────────────────────────────────────────────────────
const FALSE_FRIENDS = {
  id: 'false-friends',
  title: 'Aktualan Is Not Actual',
  subtitle: 'The false friends that trip translators — and what to say instead',
  icon: '🎭',
  level: 'B2',
  duration: '~8 min',
  color: '#6d28d9',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Words That Look Familiar',
      body: 'Croatian and English took many words from the same sources — Latin, French, German — and over the centuries the meanings drifted apart. Translators call such pairs lažni prijatelji, false friends: a word that looks like an English one and means something else. They are dangerous precisely because you do not stop to check them. This lesson covers the ones an English speaker meets first, and gives the Croatian word for what you actually meant.',
      icon: '🎭',
    },
    {
      type: 'rule',
      title: 'Aktualan and Eventualno',
      body: 'Aktualan means current or topical: aktualna tema (a topical subject), aktualne vijesti (the latest news). The English "actual" is pravi or stvaran: the actual reason = pravi razlog. Eventualno means possibly, if need be: Eventualno ću doći kasnije (I may come later). The English "eventually" is na kraju, konačno or s vremenom: Eventually we arrived = Na kraju smo stigli.',
      highlight: 'Eventualno ću doći kasnije',
    },
    {
      type: 'rule',
      title: 'People and Places',
      body: 'Simpatičan means likeable, pleasant: simpatičan konobar. The English "sympathetic" is suosjećajan or pun razumijevanja. A gimnazija is a school — the academic secondary school that prepares pupils for university; a gym is teretana (with weights) or dvorana (a sports hall). An ordinacija is a doctor’s or dentist’s surgery; an ambulanta is a local outpatient clinic, and an ambulance is the vozilo hitne pomoći — you call hitna pomoć on 194 or 112.',
      highlight: 'gimnazija',
    },
    {
      type: 'rule',
      title: 'School, Work and Renting',
      body: 'Lektira is the list of books pupils must read at school, or a book on it; a lecture is predavanje. A kompozicija is a musical composition (and a set of railway carriages); a school composition is a sastavak. Evidencija means records, a register: voditi evidenciju (to keep records); evidence is dokaz. Kaucija is a deposit (for a flat) or bail; caution is oprez. A novela is a short story or novella; a novel is roman. A factory is a tvornica.',
      highlight: 'Lektira',
    },
    {
      type: 'table',
      title: 'Look-Alike, Meaning, and What You Meant',
      headers: ['Croatian word', 'means', 'English look-alike', 'Croatian for that'],
      rows: [
        ['aktualan', 'current, topical', 'actual', 'pravi, stvaran'],
        ['eventualno', 'possibly', 'eventually', 'na kraju, konačno'],
        ['simpatičan', 'likeable', 'sympathetic', 'suosjećajan'],
        ['gimnazija', 'academic secondary school', 'gym', 'teretana'],
        ['ordinacija', 'doctor’s surgery', 'ordination', 'ređenje'],
        ['ambulanta', 'outpatient clinic', 'ambulance', 'vozilo hitne pomoći'],
        ['lektira', 'required reading', 'lecture', 'predavanje'],
        ['kompozicija', 'musical composition', 'school composition', 'sastavak'],
        ['evidencija', 'records, register', 'evidence', 'dokaz'],
        ['kaucija', 'deposit, bail', 'caution', 'oprez'],
        ['novela', 'short story, novella', 'novel', 'roman'],
      ],
    },
    {
      type: 'example',
      title: 'The Right Word in Context',
      items: [
        {
          hr: 'Klimatske promjene su vrlo aktualna tema.',
          en: 'Climate change is a very topical subject.',
          note: 'aktualna — current, topical',
        },
        {
          hr: 'Pravi razlog svog odlaska nikad nije rekao.',
          en: 'He never told the actual reason for his departure.',
          note: 'pravi — this is the English "actual"',
        },
        {
          hr: 'Eventualno ću doći poslije osam, ako stignem.',
          en: 'I may come after eight, if I make it.',
          note: 'eventualno — possibly, not "eventually"',
        },
        {
          hr: 'Na kraju smo ipak otišli na more.',
          en: 'Eventually we went to the seaside after all.',
          note: 'na kraju — this is "eventually"',
        },
        {
          hr: 'Tvoja nova kolegica je jako simpatična.',
          en: 'Your new colleague is really likeable.',
          note: 'simpatična — likeable, pleasant',
        },
        {
          hr: 'Moj sin ide u gimnaziju, a poslije škole u teretanu.',
          en: 'My son goes to grammar school, and after school to the gym.',
          note: 'gimnaziju is a school, teretanu a gym',
        },
        {
          hr: 'Liječnička ordinacija radi od osam do dva.',
          en: 'The doctor’s surgery is open from eight to two.',
          note: 'ordinacija — a surgery, a practice',
        },
        {
          hr: 'Za stan smo platili kauciju od tisuću eura.',
          en: 'We paid a deposit of a thousand euros for the flat.',
          note: 'kauciju — a deposit, not "caution"',
        },
        {
          hr: 'Za lektiru moramo pročitati jedan roman i dvije novele.',
          en: 'For our required reading we have to read one novel and two short stories.',
          note: 'roman is a novel; novele are short stories',
        },
        {
          hr: 'Tvrtka vodi evidenciju o radnom vremenu.',
          en: 'The company keeps records of working hours.',
          note: 'evidenciju — records, not evidence',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What does "eventualno" mean?',
      options: ['eventually', 'possibly', 'finally'],
      correct: 1,
      explanation: 'Eventualno means possibly, if need be. "Eventually" is na kraju or konačno.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which word means "a gym"?',
      options: ['gimnazija', 'teretana', 'ordinacija'],
      correct: 1,
      explanation:
        'A gimnazija is a school; the gym is teretana. An ordinacija is a doctor’s surgery.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using aktualan for "actual": "aktualni razlog" means the current reason; the actual reason is pravi razlog. (2) Using eventualno for "eventually": "Eventualno smo stigli" means we possibly arrived; to say we arrived in the end, say Na kraju smo stigli. (3) Asking for an ambulanta in an emergency — you call hitna pomoć. (4) Calling a gym gimnazija — it is a school; the gym is teretana.',
      highlight: 'Na kraju smo stigli',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What does "aktualan" mean?',
          options: ['actual', 'current, topical', 'active', 'accurate'],
          correct: 1,
          explanation: 'Aktualan means current or topical. "Actual" is pravi or stvaran.',
        },
        {
          q: 'Complete: "Moja kći ide u ___ — želi studirati medicinu." (an academic secondary school)',
          options: ['teretanu', 'ordinaciju', 'gimnaziju', 'ambulantu'],
          correct: 2,
          explanation: 'A gimnazija is the academic secondary school that leads to university.',
        },
        {
          q: 'Which sentence means "Eventually we found the hotel"?',
          options: [
            'Eventualno smo našli hotel.',
            'Aktualno smo našli hotel.',
            'Konačan smo našli hotel.',
            'Na kraju smo našli hotel.',
          ],
          correct: 3,
          explanation:
            '"Eventually" is na kraju. Eventualno smo našli hotel would mean we possibly found it.',
        },
        {
          q: 'Which word means "required reading at school"?',
          options: ['lektira', 'predavanje', 'lekcija', 'kompozicija'],
          correct: 0,
          explanation: 'Lektira is required reading. Predavanje is a lecture, lekcija a lesson.',
        },
        {
          q: 'Complete: "Zubar ima ___ u centru grada." (a practice)',
          options: ['ordinaciju', 'evidenciju', 'teretanu', 'kauciju'],
          correct: 0,
          explanation: 'A doctor’s or dentist’s practice is an ordinacija.',
        },
        {
          q: 'What does "simpatičan" mean?',
          options: ['sympathetic', 'likeable', 'symmetrical', 'sensitive'],
          correct: 1,
          explanation: 'Simpatičan means likeable. "Sympathetic" is suosjećajan.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'False Friends — Key Takeaways',
      points: [
        'aktualan = current, topical; "actual" = pravi, stvaran',
        'eventualno = possibly; "eventually" = na kraju, konačno',
        'simpatičan = likeable; "sympathetic" = suosjećajan',
        'gimnazija is a school; a gym is teretana',
        'ordinacija is a surgery, ambulanta an outpatient clinic, hitna pomoć the ambulance',
        'lektira = required reading, evidencija = records, kaucija = deposit, roman = novel',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 5 · Literacy, the month names, anniversaries, govoriti
// ─────────────────────────────────────────────────────────
const LITERACY = {
  id: 'literacy-and-language',
  title: 'Pismenost',
  subtitle: 'Literacy, the Croatian month names, anniversaries and the govoriti family',
  icon: '📜',
  level: 'B2',
  duration: '~10 min',
  color: '#065f46',
  bg: '#ecfdf5',
  slides: [
    {
      type: 'intro',
      title: 'Reading, Writing — and Much More',
      body: 'Pismenost, literacy, once meant simply being able to read and write. Today people speak of several literacies: finding and judging information, using digital tools, reading the media critically. This lesson gives you that vocabulary and two features of the Croatian language a literate speaker uses daily: the native names of the months, and the family of verbs built on govoriti.',
      icon: '📜',
    },
    {
      type: 'rule',
      title: 'Kinds of Literacy',
      body: 'Pismen means literate, nepismen illiterate; the noun is pismenost. Čitalačka pismenost is reading literacy, informacijska pismenost the skill of finding and judging information, digitalna pismenost the use of digital tools, medijska pismenost reading the media critically. Someone who can read but cannot understand a contract or a set of instructions is funkcionalno nepismen — functionally illiterate.',
      highlight: 'digitalna pismenost',
    },
    {
      type: 'rule',
      title: 'Month Names From Nature and Work',
      body: 'Standard Croatian, like Czech and Polish, uses its own month names rather than the Latin ones. Several name what happens in nature or on the farm: travanj comes from trava (grass), svibanj from svib (dogwood), lipanj from lipa (the lime tree, in flower in June), srpanj from srp (the sickle of the harvest), kolovoz from kolo and voziti (carts carrying the harvest), listopad from list and pasti (leaves falling), studeni from studen (cold). Siječanj is usually linked to sjeći, to cut, as the time for felling wood. For veljača, ožujak, rujan and prosinac several explanations exist and none is certain.',
      highlight: 'listopad',
    },
    {
      type: 'rule',
      title: 'Months in Sentences',
      body: 'Months are written with a small letter. "In March" is u + locative: u ožujku, u svibnju. Many have a fleeting a: travanj → u travnju, srpanj → u srpnju, rujan → u rujnu. Studeni is an adjective in form, so it is u studenome (or u studenom). A date uses the genitive of both the ordinal and the month: prvoga siječnja, dvadeset petog prosinca.',
      highlight: 'u studenome',
    },
    {
      type: 'table',
      title: 'The Twelve Months',
      headers: ['Month', 'Croatian', 'in …', 'on the first of …'],
      rows: [
        ['January', 'siječanj', 'u siječnju', 'prvog siječnja'],
        ['February', 'veljača', 'u veljači', 'prvog veljače'],
        ['March', 'ožujak', 'u ožujku', 'prvog ožujka'],
        ['April', 'travanj', 'u travnju', 'prvog travnja'],
        ['May', 'svibanj', 'u svibnju', 'prvog svibnja'],
        ['June', 'lipanj', 'u lipnju', 'prvog lipnja'],
        ['July', 'srpanj', 'u srpnju', 'prvog srpnja'],
        ['August', 'kolovoz', 'u kolovozu', 'prvog kolovoza'],
        ['September', 'rujan', 'u rujnu', 'prvog rujna'],
        ['October', 'listopad', 'u listopadu', 'prvog listopada'],
        ['November', 'studeni', 'u studenome', 'prvog studenoga'],
        ['December', 'prosinac', 'u prosincu', 'prvog prosinca'],
      ],
    },
    {
      type: 'rule',
      title: 'Anniversaries and Celebrations',
      body: 'Obljetnica is the anniversary of an event, often a public one: pedeseta obljetnica osnutka škole (the school’s fiftieth anniversary). Godišnjica means much the same and is the usual word for personal anniversaries: godišnjica braka (a wedding anniversary). Proslava is the celebration itself, and a big round anniversary can be called a jubilej. The verbs are slaviti (imperfective) and proslaviti (perfective).',
      highlight: 'godišnjica braka',
    },
    {
      type: 'rule',
      title: 'Govoriti and Its Family',
      body: 'Govoriti (to speak) is imperfective. Prefixes turn it into perfective verbs with new meanings, each with an imperfective partner in -arati: izgovoriti / izgovarati (to pronounce), odgovoriti / odgovarati (to answer — odgovoriti NA pitanje, odgovoriti komu), dogovoriti se / dogovarati se (to agree, to arrange), nagovoriti / nagovarati (to persuade: nagovorila me da dođem), prigovoriti / prigovarati (to object, to complain at — with the dative: prigovara susjedima). Razgovarati means to have a conversation.',
      highlight: 'nagovoriti',
    },
    {
      type: 'example',
      title: 'Literacy and the Calendar',
      items: [
        {
          hr: 'Digitalna pismenost danas je jednako važna kao čitanje i pisanje.',
          en: 'Today digital literacy is as important as reading and writing.',
        },
        {
          hr: 'Funkcionalno nepismena osoba ne razumije upute za lijek.',
          en: 'A functionally illiterate person does not understand the instructions for a medicine.',
        },
        {
          hr: 'Lipa cvjeta u lipnju, a lišće pada u listopadu.',
          en: 'The lime tree flowers in June, and the leaves fall in October.',
          note: 'u lipnju, u listopadu — u + locative',
        },
        {
          hr: 'Rođena sam dvanaestog svibnja.',
          en: 'I was born on the twelfth of May.',
          note: 'dvanaestog svibnja — a date takes the genitive',
        },
        {
          hr: 'Škola ove godine slavi pedesetu obljetnicu osnutka.',
          en: 'This year the school is celebrating the fiftieth anniversary of its founding.',
        },
        {
          hr: 'Moji roditelji sutra slave tridesetu godišnjicu braka.',
          en: 'My parents celebrate their thirtieth wedding anniversary tomorrow.',
        },
      ],
    },
    {
      type: 'example',
      title: 'The Govoriti Family',
      items: [
        {
          hr: 'Kako se izgovara ova riječ?',
          en: 'How is this word pronounced?',
        },
        {
          hr: 'Nitko nije odgovorio na moje pitanje.',
          en: 'Nobody answered my question.',
          note: 'odgovoriti na + accusative',
        },
        {
          hr: 'Dogovorili smo se da se nađemo u šest.',
          en: 'We agreed to meet at six.',
        },
        {
          hr: 'Prijateljica me je nagovorila da upišem tečaj.',
          en: 'My friend persuaded me to enrol in the course.',
        },
        {
          hr: 'Susjed stalno prigovara djeci zbog buke.',
          en: 'The neighbour keeps complaining at the children about the noise.',
          note: 'prigovarati takes the dative: djeci',
        },
        {
          hr: 'Satima smo razgovarali o knjigama.',
          en: 'We talked about books for hours.',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which month is named after the lime tree?',
      options: ['lipanj', 'listopad', 'srpanj'],
      correct: 0,
      explanation:
        'Lipanj comes from lipa, the lime tree, which flowers in June. Listopad is about falling leaves.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Nisam ___ na tvoju poruku." (I did not answer)',
      options: ['izgovorio', 'odgovorio', 'dogovorio'],
      correct: 1,
      explanation: 'To answer is odgovoriti, with na + accusative: odgovoriti na poruku.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Capitalising months: "u Siječnju" — Croatian writes them with a small letter: u siječnju. (2) Mixing up two prefixes: "Dogovorio je na pitanje" — answering is odgovoriti na pitanje; dogovoriti se means to agree on something. (3) Leaving out the preposition: "odgovoriti pitanje" — it is odgovoriti na pitanje. (4) Treating studeni as a noun: "u studeniju" — it declines like an adjective: u studenome.',
      highlight: 'odgovoriti na pitanje',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which month is named after falling leaves?',
          options: ['rujan', 'listopad', 'studeni', 'kolovoz'],
          correct: 1,
          explanation: 'Listopad: list (leaf) + pasti (to fall).',
        },
        {
          q: 'Complete: "Rođen sam u ___." (April)',
          options: ['travanj', 'travanju', 'travnja', 'travnju'],
          correct: 3,
          explanation: 'U + locative, and the a of travanj disappears: u travnju.',
        },
        {
          q: 'Which phrase means "digital literacy"?',
          options: [
            'digitalna pismenost',
            'digitalno pismo',
            'digitalni pisac',
            'digitalna pisanka',
          ],
          correct: 0,
          explanation: 'Literacy is pismenost; pismo is a letter, pisac a writer.',
        },
        {
          q: 'Complete: "Roditelji slave dvadesetu ___ braka." (anniversary)',
          options: ['proslavu', 'godišnjicu', 'rođendan', 'svečanost'],
          correct: 1,
          explanation: 'A wedding anniversary is godišnjica braka.',
        },
        {
          q: 'Complete: "Prijateljica me je ___ da idem s njom na koncert." (persuaded)',
          options: ['prigovorila', 'odgovorila', 'nagovorila', 'izgovorila'],
          correct: 2,
          explanation: 'To persuade is nagovoriti: nagovorila me je da idem.',
        },
        {
          q: 'Complete: "___ smo se da se vidimo u petak." (we agreed)',
          options: ['Dogovorili', 'Odgovorili', 'Izgovorili', 'Prigovorili'],
          correct: 0,
          explanation: 'To agree, to arrange is dogovoriti se.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Literacy and Language — Key Takeaways',
      points: [
        'pismenost: čitalačka, informacijska, digitalna, medijska; funkcionalno nepismen',
        'Croatian month names: travanj ← trava, lipanj ← lipa, srpanj ← srp, listopad ← list + pasti',
        'u + locative: u travnju, u studenome; dates in the genitive: prvog siječnja',
        'obljetnica of an event, godišnjica braka, proslava, jubilej',
        'izgovoriti, odgovoriti na, dogovoriti se, nagovoriti, prigovarati komu',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 6 · Peculiarities of e-type (feminine -a) nouns
// ─────────────────────────────────────────────────────────
const NOUN_E = {
  id: 'noun-peculiarities-e',
  title: 'Sestara, Majci, Učiteljice',
  subtitle: 'Feminine nouns in -a up close: the genitive plural, sibilarization, the vocative',
  icon: '🔍',
  level: 'B2',
  duration: '~9 min',
  color: '#9d174d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'The e-Type Nouns',
      body: 'Feminine nouns in -a are called the e-type, because their genitive singular ends in -e: žene, sestre. Their table looks regular, and in most cases it is. Three places are not: the genitive plural, where an extra a or a different ending appears; the dative and locative singular, where k, g and h change before -i — except when they do not; and the vocative, which has more than one pattern. This lesson takes each in turn.',
      icon: '🔍',
    },
    {
      type: 'rule',
      title: 'Genitive Plural: an Extra a',
      body: 'The genitive plural ends in -a. When the stem ends in two consonants, an a is slipped in between them: sestra → sestara, djevojka → djevojaka, olovka → olovaka, igra → igara, pjesma → pjesama, marka → maraka. So: pet sestara, mnogo djevojaka, deset olovaka. A noun without a consonant cluster just adds -a: knjiga → knjiga, žena → žena.',
      highlight: 'sestra → sestara',
    },
    {
      type: 'rule',
      title: 'Or the Ending -i',
      body: 'Some nouns with a consonant cluster take -i in the genitive plural instead: majka → majki, borba → borbi, molba → molbi, šetnja → šetnji, patnja → patnji. Ruka and noga have their own form, ruku and nogu. For a few nouns both -a and -i are standard; this lesson tests only nouns that have one form.',
      highlight: 'majka → majki',
    },
    {
      type: 'rule',
      title: 'Dative and Locative: k → c, g → z, h → s',
      body: 'Before the -i of the dative and locative singular, k becomes c, g becomes z and h becomes s: ruka → ruci, noga → nozi, knjiga → knjizi, majka → majci, rijeka → rijeci, Amerika → Americi. So: na ruci, u knjizi, pišem majci, živim u Americi.',
      highlight: 'knjiga → knjizi',
    },
    {
      type: 'rule',
      title: 'Where the Change Does Not Happen',
      body: 'Family words and pet names keep the consonant: baka → baki, seka → seki, and many women’s names: Anka → Anki. So do nouns ending in -čka and -tka: mačka → mački, patka → patki. So: pišem baki, dajem mački mlijeko. If you are unsure, the dictionary gives the dative.',
      highlight: 'baka → baki',
    },
    {
      type: 'rule',
      title: 'The Vocative',
      body: 'Most feminine nouns in -a take -o: žena → ženo, sestra → sestro, baka → bako, gospođa → gospođo (gospođo Horvat). Nouns in -ica take -ice: učiteljica → učiteljice, prijateljica → prijateljice, kolegica → kolegice. Many two-syllable first names stay as they are when you call out: Ana! Maja! Vesna!',
      highlight: 'učiteljica → učiteljice',
    },
    {
      type: 'table',
      title: 'The Three Trouble Spots',
      headers: [
        'Nominative sg',
        'Genitive pl',
        'Dative / locative sg',
        'Vocative',
        'What to notice',
      ],
      rows: [
        ['sestra', 'sestara', 'sestri', 'sestro', 'an a inserted'],
        ['djevojka', 'djevojaka', 'djevojci', 'djevojko', 'an a inserted; k → c'],
        ['majka', 'majki', 'majci', 'majko', 'genitive plural -i; k → c'],
        ['knjiga', 'knjiga', 'knjizi', '—', 'g → z'],
        ['ruka', 'ruku', 'ruci', '—', 'genitive plural -u; k → c'],
        ['baka', 'baka', 'baki', 'bako', 'family word: no change'],
        ['mačka', 'mačaka', 'mački', '—', '-čka: no change'],
        ['učiteljica', 'učiteljica', 'učiteljici', 'učiteljice', 'vocative -ice'],
      ],
    },
    {
      type: 'example',
      title: 'The Genitive Plural',
      items: [
        {
          hr: 'U našoj obitelji ima pet sestara i dva brata.',
          en: 'In our family there are five sisters and two brothers.',
          note: 'sestara — an a is inserted into sestra',
        },
        {
          hr: 'Na plaži je bilo mnogo djevojaka i momaka.',
          en: 'There were a lot of girls and young men on the beach.',
          note: 'djevojaka — an a is inserted into djevojka',
        },
        {
          hr: 'Kupila sam sinu deset olovaka za školu.',
          en: 'I bought my son ten pencils for school.',
          note: 'olovaka — an a is inserted into olovka',
        },
        {
          hr: 'Na priredbi je bilo dvadesetak majki.',
          en: 'About twenty mothers were at the school show.',
          note: 'majki — majka takes -i',
        },
        {
          hr: 'Ova zbirka ima stotinu pjesama.',
          en: 'This collection has a hundred poems.',
          note: 'pjesama — an a is inserted into pjesma',
        },
      ],
    },
    {
      type: 'example',
      title: 'Dative, Locative and Vocative',
      items: [
        {
          hr: 'Uvijek drži mobitel u desnoj ruci.',
          en: 'He always holds his phone in his right hand.',
          note: 'ruci — the k of ruka becomes c',
        },
        {
          hr: 'Pročitala sam to u jednoj staroj knjizi.',
          en: 'I read that in an old book.',
          note: 'knjizi — the g of knjiga becomes z',
        },
        {
          hr: 'Često mislim o majci i ocu.',
          en: 'I often think about my mother and father.',
          note: 'majci — the k of majka becomes c',
        },
        {
          hr: 'Svake nedjelje šaljem baki razglednicu.',
          en: 'Every Sunday I send my grandmother a postcard.',
          note: 'baki — the family word baka keeps its k',
        },
        {
          hr: 'Daj mački malo mlijeka.',
          en: 'Give the cat a little milk.',
          note: 'mački — a noun in -čka keeps its k',
        },
        {
          hr: 'Gospođo Kovač, izvolite sjesti.',
          en: 'Mrs Kovač, please sit down.',
          note: 'gospođo — the vocative of gospođa',
        },
        {
          hr: 'Učiteljice, mogu li nešto pitati?',
          en: 'Miss, may I ask something?',
          note: 'učiteljice — a noun in -ica takes -ice',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the genitive plural of sestra?',
      options: ['sestri', 'sestara', 'sestre'],
      correct: 1,
      explanation:
        'The stem sestr- ends in two consonants, t and r, so an a is inserted between them: sestara.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Pišem pismo ___." (my grandmother)',
      options: ['baci', 'baki', 'bake'],
      correct: 1,
      explanation: 'To whom? — the dative. Baka is a family word, so the k stays: baki.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) "pet sestra" — after five the genitive plural inserts an a: pet sestara. (2) "u knjigi", "na ruki" — before -i, g becomes z and k becomes c: u knjizi, na ruci. (3) Over-applying the change: "baci" for the dative of baka — family words keep the k: baki. (4) "Učiteljico!" — nouns in -ica take -ice: učiteljice.',
      highlight: 'u knjizi',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the genitive plural of djevojka?',
          options: ['djevojka', 'djevojkama', 'djevojaka', 'djevojke'],
          correct: 2,
          explanation: 'An a is inserted between v and k: djevojaka.',
        },
        {
          q: 'Complete: "Stalno razgovaram o ___." (my mother)',
          options: ['majki', 'majci', 'majke', 'majku'],
          correct: 1,
          explanation:
            'O + locative, and the k becomes c before -i: majci. Majki is the genitive plural.',
        },
        {
          q: 'Complete: "To piše u ovoj ___." (book)',
          options: ['knjizi', 'knjigi', 'knjige', 'knjigu'],
          correct: 0,
          explanation: 'U + locative, and g becomes z before -i: knjizi.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Dajem mlijeko mačci.',
            'Dajem mlijeko mačke.',
            'Dajem mlijeko mačku.',
            'Dajem mlijeko mački.',
          ],
          correct: 3,
          explanation: 'To whom? — the dative. A noun in -čka keeps its k: mački.',
        },
        {
          q: 'What is the vocative of prijateljica?',
          options: ['prijateljico', 'prijateljicom', 'prijateljice', 'prijateljicu'],
          correct: 2,
          explanation: 'Nouns in -ica take -ice in the vocative: prijateljice.',
        },
        {
          q: 'Complete: "Ova knjiga ima stotinu ___." (poems)',
          options: ['pjesma', 'pjesama', 'pjesmi', 'pjesme'],
          correct: 1,
          explanation: 'After stotinu the genitive plural, with an a inserted: pjesama.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Feminine Nouns in -a — Key Takeaways',
      points: [
        'Genitive plural: an a between two consonants — sestara, djevojaka, olovaka',
        'Some take -i: majki, borbi, molbi, šetnji; ruka and noga give ruku, nogu',
        'Dative and locative: k, g, h → c, z, s — ruci, nozi, knjizi, majci',
        'No change in family words and -čka, -tka: baki, seki, mački, patki',
        'Vocative -o (sestro, gospođo), but -ica → -ice (učiteljice)',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [NOUN_A, PRESENT_ATI, FALSE_FRIENDS, LITERACY, NOUN_E];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'noun-peculiarities-a': {
    worked: [
      {
        title: 'Hard or Soft: -ov- or -ev-',
        problem: 'Prevedi: "The kings lived in old towns."',
        en: 'The kings lived in old towns.',
        steps: [
          {
            label: 'kralj',
            text: 'A one-syllable masculine noun ending in the soft lj: the plural insert is -ev-, so kraljevi.',
          },
          {
            label: 'grad',
            text: 'Grad ends in a hard d: the insert is -ov-, and it stays in every plural case.',
          },
          { label: 'Where?', text: 'U + locative plural: gradovima, with the adjective starim.' },
          { label: 'The verb', text: 'Kings is masculine plural: su živjeli.' },
        ],
        answer: 'Kraljevi su živjeli u starim gradovima.',
      },
      {
        title: 'Fleeting a, Then an Irregular Plural',
        problem: 'Prevedi: "I met two young men and five people from Zadar."',
        en: 'I met two young men and five people from Zadar.',
        steps: [
          {
            label: 'dva + noun',
            text: 'After dva, tri, četiri the noun takes the genitive singular form: momak → momka, and the a disappears.',
          },
          {
            label: 'pet + noun',
            text: 'After five the genitive plural — and the plural of čovjek is a different word: ljudi.',
          },
          { label: 'iz + genitive', text: 'Zadar also has a fleeting a: iz Zadra.' },
        ],
        answer: 'Upoznao sam dva momka i pet ljudi iz Zadra.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ljeti su ___ dugi. (dan, plural)',
          options: ['danovi', 'dani', 'dane', 'dana'],
          correct: 1,
          hint: 'This is one of the short nouns that refuse the long plural.',
          explanation: 'dani — dan has no -ovi.',
        },
        {
          q: 'U parku se igra pet ___. (pas)',
          options: ['psa', 'psi', 'pasa', 'pse'],
          correct: 2,
          hint: 'After pet: the genitive plural, where the fleeting a comes back.',
          explanation: 'pasa — the a returns in the genitive plural.',
        },
        {
          q: 'Ovo su moji ___. (sin, plural)',
          options: ['sinovi', 'sini', 'sinove', 'sinova'],
          correct: 0,
          hint: 'A short noun with a hard final consonant takes -ov-.',
          explanation: 'sinovi — the nominative plural with the long insert.',
        },
        {
          q: 'Svi ___ u razredu su došli. (učenik, plural)',
          options: ['učeniki', 'učenike', 'učenika', 'učenici'],
          correct: 3,
          hint: 'The ending is -i, and k does not stay before it.',
          explanation: 'učenici — k becomes c before -i.',
        },
        {
          q: '___, gdje si? (otac)',
          options: ['Ocem', 'Oče', 'Oca', 'Ocu'],
          correct: 1,
          hint: 'Calling someone: the vocative, where c becomes č and the a and t disappear.',
          explanation: 'Oče — the vocative of otac.',
        },
        {
          q: 'Nemam ___ za ovo. (vrijeme)',
          options: ['vrijemena', 'vrijeme', 'vremena', 'vremenu'],
          correct: 2,
          hint: 'Nemati takes the genitive, and this neuter adds -en-; ije becomes e.',
          explanation: 'vremena — the genitive of vrijeme.',
        },
        {
          q: 'Ima smeđe ___. (oko, plural)',
          options: ['oči', 'oke', 'oka', 'očiju'],
          correct: 0,
          hint: 'The plural of this noun is a different, feminine form.',
          explanation: 'oči — smeđe oči, with a feminine adjective.',
        },
        {
          q: 'U zgradi živi mnogo ___. (čovjek)',
          options: ['čovjeka', 'ljude', 'ljudi', 'čovjeki'],
          correct: 2,
          hint: 'After mnogo the genitive plural — and this noun uses another word in the plural.',
          explanation:
            'ljudi — the genitive plural of čovjek is the same as its nominative plural.',
        },
        {
          type: 'type',
          q: 'Bez ____ se ne može jedriti. (vjetar)',
          answer: 'vjetra',
          hint: 'Bez takes the genitive, and the a of the last syllable disappears.',
          explanation: 'vjetra — the fleeting a disappears in the genitive.',
        },
        {
          type: 'type',
          q: '____ iz naše ulice rade u luci. (muž, plural)',
          answer: 'Muževi',
          hint: 'After a soft consonant the long plural uses -ev-.',
          explanation: 'Muževi — the nominative plural of muž.',
        },
        {
          type: 'type',
          q: '____, dođi ovamo! (drug)',
          answer: 'Druže',
          hint: 'In the vocative g becomes ž before -e.',
          explanation: 'Druže — the vocative of drug.',
        },
        {
          type: 'type',
          q: 'U kazalištu je bilo sto ____. (gost)',
          answer: 'gostiju',
          hint: 'After sto the genitive plural — and this noun has an unusual one.',
          explanation: 'gostiju — the genitive plural of gost.',
        },
        {
          type: 'type',
          q: 'Učiteljica daje knjige ____. (učenik, plural — dative)',
          answer: 'učenicima',
          hint: 'Before the ending -ima, k changes too.',
          explanation: 'učenicima — the dative plural, with k → c.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is the nominative plural of broj?',
        options: ['broji', 'brojovi', 'brojevi', 'brojeve'],
        correct: 2,
        explanation: 'Broj ends in the soft j, so the long plural uses -ev-: brojevi.',
      },
      {
        q: 'Complete: "Radim osam ___ dnevno." (hours)',
        options: ['sati', 'sata', 'sate', 'satima'],
        correct: 0,
        explanation: 'After osam the genitive plural; for hours it is sati.',
      },
      {
        q: 'Complete: "To je auto onog ___." (young man)',
        options: ['momaka', 'momka', 'momak', 'momku'],
        correct: 1,
        explanation:
          'The genitive singular, without the fleeting a: momka. Momaka is the genitive plural.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Djeca se igra u dvorištu.',
          'Djece se igraju u dvorištu.',
          'Djeca se igramo u dvorištu.',
          'Djeca se igraju u dvorištu.',
        ],
        correct: 3,
        explanation: 'Djeca takes a plural verb: igraju.',
      },
      {
        q: 'What is the vocative of vojnik?',
        options: ['vojniku', 'vojniče', 'vojnikom', 'vojnike'],
        correct: 1,
        explanation: 'Before the vocative -e, k becomes č: vojniče.',
      },
      {
        q: 'Complete: "Svi ___ su stigli na vrijeme." (the pupils)',
        options: ['učeniki', 'učenike', 'učenici', 'učenika'],
        correct: 2,
        explanation: 'The nominative plural ends in -i, so k becomes c: učenici.',
      },
    ],
    vocab: [
      ['sin', 'son', 'Imam dva sina i jednu kćer.'],
      ['muž', 'husband', 'Njezin muž radi u bolnici.'],
      ['gost', 'guest', 'Na vjenčanju je bilo sto gostiju.'],
      ['momak', 'young man, lad', 'Taj momak dobro igra nogomet.'],
      ['vjetar', 'wind', 'Danas puše jak vjetar.'],
      ['čovjek', 'person, man', 'Na trgu je bilo mnogo ljudi.'],
      ['oko', 'eye', 'Ima lijepe plave oči.'],
      ['uho', 'ear', 'Ne čujem dobro na desno uho.'],
      ['ime', 'name', 'Kako se piše vaše ime?'],
      ['vojnik', 'soldier', 'Vojnici su prošli kroz grad.'],
    ],
  },

  'present-ati-tricky': {
    worked: [
      {
        title: 'Find the ja Form, Then the Rest',
        problem: 'Prevedi: "Every evening my sister calls me and we write messages."',
        en: 'Every evening my sister calls me and we write messages.',
        steps: [
          { label: 'zvati', text: 'The present is zovem, zoveš, zove — so for sestra: zove.' },
          {
            label: 'The clitic',
            text: 'Me (me) goes second in the sentence, after the first phrase: Svake večeri me…',
          },
          { label: 'pisati', text: 'The present is pišem — for mi: pišemo.' },
        ],
        answer: 'Svake večeri me sestra zove i pišemo poruke.',
      },
      {
        title: 'A Prefixed Verb in a Command',
        problem: 'Prevedi: "Please sign here and send the form by e-mail." (formal)',
        en: 'Please sign here and send the form by e-mail.',
        steps: [
          {
            label: 'potpisati',
            text: 'Potpisati follows pisati: potpišem, so the polite command is potpišite.',
          },
          {
            label: 'poslati',
            text: 'Poslati follows slati: pošaljem, so the command is pošaljite.',
          },
          { label: 'By e-mail', text: 'The means takes the instrumental: e-poštom.' },
        ],
        answer: 'Molim vas, potpišite ovdje i pošaljite obrazac e-poštom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ja ___ pismo prijateljici. (pisati)',
          options: ['pisam', 'pišam', 'pišem', 'pisem'],
          correct: 2,
          hint: 'The s softens in the present, and the ending is -em.',
          explanation: 'pišem — pisati, s → š.',
        },
        {
          q: 'Ti uvijek ___ istinu. (kazati)',
          options: ['kažeš', 'kazaš', 'kazeš', 'kažaš'],
          correct: 0,
          hint: 'z becomes ž, and the ti ending is -eš.',
          explanation: 'kažeš — kazati, z → ž.',
        },
        {
          q: 'Beba ___ cijelu noć. (plakati)',
          options: ['plaka', 'plaće', 'plakaje', 'plače'],
          correct: 3,
          hint: 'k becomes č before the -e ending.',
          explanation: 'plače — plakati, k → č.',
        },
        {
          q: 'Oni ___ preko ograde. (skakati)',
          options: ['skakaju', 'skaču', 'skače', 'skaćeju'],
          correct: 1,
          hint: 'The oni form of these verbs ends in -u.',
          explanation: 'skaču — skakati, k → č, oni -u.',
        },
        {
          q: 'Mi ___ pakete iz Splita. (slati)',
          options: ['slamo', 'šalemo', 'slajemo', 'šaljemo'],
          correct: 3,
          hint: 's becomes š and lj appears.',
          explanation: 'šaljemo — slati → šaljem.',
        },
        {
          q: 'Kako se ___ vaš sin? (zvati)',
          options: ['zva', 'zove', 'zvaje', 'zov'],
          correct: 1,
          hint: 'An o appears between z and v.',
          explanation: 'zove — zvati → zovem.',
        },
        {
          q: 'Vi ___ najbolje grožđe. (brati)',
          options: ['berete', 'brate', 'bratete', 'bere'],
          correct: 0,
          hint: 'An e appears between b and r; the vi ending is -ete.',
          explanation: 'berete — brati → berem.',
        },
        {
          q: 'Jučer je cijeli dan ___. (plakati — past, she)',
          options: ['plačela', 'plakla', 'plakala', 'plačila'],
          correct: 2,
          hint: 'The past is built on the infinitive, not on the present.',
          explanation: 'plakala — no č in the past.',
        },
        {
          type: 'type',
          q: 'Ona ____ ploču nakon sata. (brisati)',
          answer: 'briše',
          hint: 'In the present the s becomes š; this is the ona form.',
          explanation: 'briše — brisati → brišem.',
        },
        {
          type: 'type',
          q: 'Zašto mi ____? (lagati, ti)',
          answer: 'lažeš',
          hint: 'g becomes ž before -eš.',
          explanation: 'lažeš — lagati → lažem.',
        },
        {
          type: 'type',
          q: 'Uvijek ____ susjede na rođendan. (zvati, mi)',
          answer: 'zovemo',
          hint: 'The present stem gains an o; the mi ending is -emo.',
          explanation: 'zovemo — zvati → zovem.',
        },
        {
          type: 'type',
          q: 'Oni ____ jabuke u voćnjaku. (brati)',
          answer: 'beru',
          hint: 'The present stem gains an e; the oni ending is -u.',
          explanation: 'beru — brati → berem.',
        },
        {
          type: 'type',
          q: '____ mi poruku kad stigneš! (poslati, ti — command)',
          answer: 'Pošalji',
          hint: 'The command is built on the present stem šalj-, with the prefix.',
          explanation: 'Pošalji — the ti command of poslati.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the ja form of vezati?',
        options: ['vezam', 'vezem', 'vežem', 'vežam'],
        correct: 2,
        explanation: 'Vezati softens z to ž: vežem.',
      },
      {
        q: 'Complete: "Zašto ___?" (plakati, ti)',
        options: ['plačeš', 'plakaš', 'plaćeš', 'plačaš'],
        correct: 0,
        explanation: 'Plakati → plačem, so ti plačeš.',
      },
      {
        q: 'Complete: "Oni ___ prozore svaki tjedan." (prati)',
        options: ['praju', 'pere', 'preju', 'peru'],
        correct: 3,
        explanation: 'Prati → perem, and the oni form is peru.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Jučer sam slao paket.',
          'Jučer sam šaljao paket.',
          'Jučer sam šalio paket.',
          'Jučer sam slaljo paket.',
        ],
        correct: 0,
        explanation: 'The past comes from the infinitive slati: slao.',
      },
      {
        q: 'Complete: "___ me sutra navečer!" (nazvati, ti — command)',
        options: ['Nazvi', 'Nazovi', 'Nazvaj', 'Nazovni'],
        correct: 1,
        explanation: 'Nazvati follows zvati: nazovem, so the command is nazovi.',
      },
      {
        q: 'Complete: "Tko ___ ovaj tekst?" (pisati, present)',
        options: ['pisa', 'pišu', 'piše', 'pise'],
        correct: 2,
        explanation: 'Tko takes a singular verb: piše.',
      },
    ],
    vocab: [
      ['pisati', 'to write', 'Pišem baki svaki tjedan.'],
      ['kazati', 'to say, to tell', 'Kako se to kaže na hrvatskom?'],
      ['plakati', 'to cry', 'Dijete plače jer je gladno.'],
      ['skakati', 'to jump', 'Djeca skaču u more.'],
      ['brisati', 'to wipe, to erase', 'Nakon ručka brišem stol.'],
      ['slati', 'to send', 'Šaljem ti fotografije.'],
      ['zvati', 'to call', 'Zovem mamu svaki dan.'],
      ['brati', 'to pick, to gather', 'U rujnu beremo grožđe.'],
      ['lagati', 'to lie (tell lies)', 'Ne volim kad mi netko laže.'],
      ['potpisati', 'to sign', 'Molim vas, potpišite ugovor.'],
    ],
  },

  'false-friends': {
    worked: [
      {
        title: 'Actual or Topical?',
        problem: 'Prevedi: "That is a topical question, but the actual problem is different."',
        en: 'That is a topical question, but the actual problem is different.',
        steps: [
          {
            label: 'topical',
            text: 'Current, topical = aktualan; pitanje is neuter, so aktualno pitanje.',
          },
          { label: 'actual', text: 'Actual = pravi, not aktualan: pravi problem.' },
          { label: 'different', text: 'Different = drukčiji, agreeing with problem.' },
        ],
        answer: 'To je aktualno pitanje, ali pravi problem je drukčiji.',
      },
      {
        title: 'Eventually, in a Factory',
        problem: 'Prevedi: "Eventually he found a job in a factory."',
        en: 'Eventually he found a job in a factory.',
        steps: [
          {
            label: 'eventually',
            text: 'Eventually = na kraju, not eventualno (which means possibly).',
          },
          {
            label: 'factory',
            text: 'The standard word is tvornica; u + locative gives u tvornici.',
          },
          {
            label: 'Word order',
            text: 'The clitic je follows the first phrase: Na kraju je našao…',
          },
        ],
        answer: 'Na kraju je našao posao u tvornici.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ovaj članak govori o vrlo ___ temi. (topical)',
          options: ['aktualnoj', 'eventualnoj', 'simpatičnoj', 'konačnoj'],
          correct: 0,
          hint: 'The false friend of "actual" is the word for "topical".',
          explanation: 'aktualnoj — o + locative of aktualna tema.',
        },
        {
          q: '___ ću doći, ako stignem. (possibly)',
          options: ['Na kraju', 'Konačno', 'Eventualno', 'Aktualno'],
          correct: 2,
          hint: 'The word that looks like "eventually" means "possibly".',
          explanation: 'Eventualno — possibly, if need be.',
        },
        {
          q: 'Moj novi kolega je jako ___. (likeable)',
          options: ['suosjećajan', 'simpatičan', 'aktualan', 'eventualan'],
          correct: 1,
          hint: 'The false friend of "sympathetic".',
          explanation: 'simpatičan — likeable.',
        },
        {
          q: 'Kad me boli zub, idem u zubarsku ___. (practice)',
          options: ['ordinaciju', 'gimnaziju', 'teretanu', 'lektiru'],
          correct: 0,
          hint: 'The word that looks like "ordination".',
          explanation: 'ordinaciju — a dentist’s surgery.',
        },
        {
          q: 'Svaki dan poslije posla vježbam u ___. (a gym)',
          options: ['gimnaziji', 'ordinaciji', 'ambulanti', 'teretani'],
          correct: 3,
          hint: 'Not the word that looks like "gym" — that one is a school.',
          explanation: 'teretani — a gym.',
        },
        {
          q: 'Za sutra moramo pročitati ___. (the required book)',
          options: ['predavanje', 'lektiru', 'kompoziciju', 'evidenciju'],
          correct: 1,
          hint: 'The word that looks like "lecture".',
          explanation: 'lektiru — required reading.',
        },
        {
          q: 'Na fakultetu slušamo ___ iz povijesti. (a lecture)',
          options: ['lektiru', 'kompoziciju', 'predavanje', 'ordinaciju'],
          correct: 2,
          hint: 'Not the look-alike — the word built on predavati, to teach.',
          explanation: 'predavanje — a lecture.',
        },
        {
          q: 'Policija nema nikakvog ___. (evidence)',
          options: ['evidencije', 'dokaza', 'kaucije', 'opreza'],
          correct: 1,
          hint: 'Not the look-alike, which means records.',
          explanation:
            'dokaz — evidence, proof; after nema it goes into the genitive: nikakvog dokaza.',
        },
        {
          type: 'type',
          q: 'Moj otac radi u ____ automobila. (factory)',
          answer: 'tvornici',
          hint: 'Use the standard word, in the locative after u.',
          explanation: 'tvornici — tvornica is the standard word for a factory.',
        },
        {
          type: 'type',
          q: 'Učiteljica vodi ____ o izostancima. (records)',
          answer: 'evidenciju',
          hint: 'It looks like "evidence", but it means a record; accusative.',
          explanation: 'evidenciju — voditi evidenciju, to keep records.',
        },
        {
          type: 'type',
          q: 'Pročitao sam samo prvu stranicu ____. (the novel)',
          answer: 'romana',
          hint: 'Not novela! Use the genitive.',
          explanation: 'romana — the genitive of roman, a novel.',
        },
        {
          type: 'type',
          q: 'Za ovaj stan treba platiti ____. (a deposit)',
          answer: 'kauciju',
          hint: 'It looks like the English "caution"; accusative.',
          explanation: 'kauciju — a deposit.',
        },
        {
          type: 'type',
          q: 'U slučaju nesreće odmah zovite ____ pomoć. (emergency)',
          answer: 'hitnu',
          hint: 'Not ambulanta — the emergency service, an adjective in the accusative.',
          explanation: 'hitnu pomoć — the ambulance service.',
        },
      ],
    },
    checkB: [
      {
        q: 'What does "eventualno" mean?',
        options: ['eventually', 'evidently', 'possibly', 'equally'],
        correct: 2,
        explanation: 'Eventualno means possibly. "Eventually" is na kraju.',
      },
      {
        q: 'Which word means "evidence" (proof)?',
        options: ['evidencija', 'dokaz', 'ordinacija', 'kaucija'],
        correct: 1,
        explanation: 'Evidence is dokaz. Evidencija means records.',
      },
      {
        q: 'Complete: "Najmodavac traži ___ od tisuću eura." (a deposit)',
        options: ['kauciju', 'evidenciju', 'kompoziciju', 'lektiru'],
        correct: 0,
        explanation: 'A deposit for a flat is kaucija.',
      },
      {
        q: 'What is the Croatian for "a novel"?',
        options: ['novela', 'lektira', 'roman', 'kompozicija'],
        correct: 2,
        explanation: 'A novel is roman; a novela is a short story or novella.',
      },
      {
        q: 'Which sentence means "The actual problem is money"?',
        options: [
          'Aktualni problem je novac.',
          'Eventualni problem je novac.',
          'Simpatični problem je novac.',
          'Pravi problem je novac.',
        ],
        correct: 3,
        explanation: '"Actual" is pravi. Aktualni problem means the current problem.',
      },
      {
        q: 'Who works in an ordinacija?',
        options: ['a lawyer', 'a doctor or dentist', 'a priest', 'a teacher'],
        correct: 1,
        explanation: 'An ordinacija is a doctor’s or dentist’s surgery.',
      },
    ],
    vocab: [
      ['aktualan', 'current, topical', 'To je vrlo aktualna tema.'],
      ['eventualno', 'possibly, if need be', 'Eventualno ću doći kasnije.'],
      ['simpatičan', 'likeable, pleasant', 'Konobar je bio jako simpatičan.'],
      ['gimnazija', 'academic secondary school', 'Moja sestra ide u gimnaziju.'],
      ['teretana', 'gym', 'Tri puta tjedno idem u teretanu.'],
      ['ordinacija', 'doctor’s surgery, practice', 'Ordinacija radi do dva.'],
      ['lektira', 'required reading', 'Za lektiru čitamo jedan roman.'],
      ['kaucija', 'deposit, bail', 'Platili smo kauciju za stan.'],
      ['tvornica', 'factory', 'Moj djed je radio u tvornici.'],
      ['dokaz', 'evidence, proof', 'Nema nikakvog dokaza.'],
    ],
  },

  'literacy-and-language': {
    worked: [
      {
        title: 'An Anniversary on a Date',
        problem: 'Prevedi: "The school celebrates its anniversary on the tenth of October."',
        en: 'The school celebrates its anniversary on the tenth of October.',
        steps: [
          {
            label: 'Which word?',
            text: 'The anniversary of an institution or event is obljetnica.',
          },
          { label: 'The date', text: 'A date takes the genitive: desetog, and the month too.' },
          { label: 'October', text: 'Listopad, in the genitive: listopada.' },
        ],
        answer: 'Škola slavi obljetnicu desetog listopada.',
      },
      {
        title: 'Pick the Right Prefix',
        problem: 'Prevedi: "She persuaded me, and we agreed to meet in May."',
        en: 'She persuaded me, and we agreed to meet in May.',
        steps: [
          {
            label: 'persuade',
            text: 'To persuade is nagovoriti; past, feminine: nagovorila, with me je in clitic order.',
          },
          { label: 'agree', text: 'To agree, to arrange is dogovoriti se: dogovorili smo se.' },
          { label: 'to meet', text: 'After dogovoriti se: da + present — da se nađemo.' },
          { label: 'in May', text: 'U + locative, with a fleeting a: svibanj → u svibnju.' },
        ],
        answer: 'Nagovorila me je i dogovorili smo se da se nađemo u svibnju.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Lišće pada u ___. (October)',
          options: ['listopadu', 'listopad', 'listopada', 'listopadom'],
          correct: 0,
          hint: 'U + locative.',
          explanation: 'u listopadu — the locative of listopad.',
        },
        {
          q: 'Božić je dvadeset petog ___. (December)',
          options: ['prosinac', 'prosincu', 'prosinca', 'prosinci'],
          correct: 2,
          hint: 'A date: the month goes into the genitive, and its a disappears.',
          explanation: 'prosinca — the genitive of prosinac.',
        },
        {
          q: 'Koji mjesec ima ime po srpu? (sickle)',
          options: ['svibanj', 'srpanj', 'siječanj', 'studeni'],
          correct: 1,
          hint: 'The harvest month, in high summer.',
          explanation: 'srpanj — from srp, the sickle.',
        },
        {
          q: 'Osoba koja ne zna čitati ni pisati je ___.',
          options: ['nepismena', 'pismena', 'nečitka', 'nemirna'],
          correct: 0,
          hint: 'The negative prefix ne- on the adjective for literate.',
          explanation: 'nepismena — illiterate.',
        },
        {
          q: 'Učitelj nam je ___ na sva pitanja. (answered)',
          options: ['dogovorio', 'izgovorio', 'nagovorio', 'odgovorio'],
          correct: 3,
          hint: 'The prefix od- — and it goes with na + accusative.',
          explanation: 'odgovorio — to answer.',
        },
        {
          q: 'Moramo se ___ oko termina sastanka. (agree)',
          options: ['odgovoriti', 'dogovoriti', 'izgovoriti', 'nagovoriti'],
          correct: 1,
          hint: 'The prefix do-, with se.',
          explanation: 'dogovoriti se — to agree, to arrange.',
        },
        {
          q: 'Susjed stalno ___ zbog buke. (complains)',
          options: ['dogovara', 'izgovara', 'prigovara', 'razgovara'],
          correct: 2,
          hint: 'The prefix pri-, imperfective.',
          explanation: 'prigovara — complains, objects.',
        },
        {
          q: 'Proslavili smo ___ obljetnicu tvrtke. (tenth)',
          options: ['deseti', 'desetu', 'desetom', 'desete'],
          correct: 1,
          hint: 'The ordinal agrees with obljetnica — feminine, accusative.',
          explanation: 'desetu obljetnicu — feminine accusative.',
        },
        {
          type: 'type',
          q: 'Rođendan mi je u ____. (July)',
          answer: 'srpnju',
          hint: 'U + locative; the a of the last syllable disappears.',
          explanation: 'u srpnju — the locative of srpanj.',
        },
        {
          type: 'type',
          q: 'Moji roditelji sutra slave godišnjicu ____. (marriage)',
          answer: 'braka',
          hint: 'The genitive of brak.',
          explanation: 'godišnjica braka — a wedding anniversary.',
        },
        {
          type: 'type',
          q: 'U školi učimo kako se ____ glasovi č i ć. (are pronounced)',
          answer: 'izgovaraju',
          hint: 'The imperfective partner of izgovoriti, in the oni form.',
          explanation: 'izgovaraju — the imperfective izgovarati, with se.',
        },
        {
          type: 'type',
          q: 'Mnogi stariji ljudi nemaju dovoljno digitalne ____. (literacy)',
          answer: 'pismenosti',
          hint: 'The noun pismenost, in the genitive after dovoljno.',
          explanation: 'pismenosti — the genitive of pismenost.',
        },
        {
          type: 'type',
          q: 'Mjesec ____ dobio je ime po hladnoći. (November)',
          answer: 'studeni',
          hint: 'It comes from the old word studen, cold.',
          explanation: 'studeni — from studen.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which month takes its name from grass?',
        options: ['svibanj', 'lipanj', 'travanj', 'kolovoz'],
        correct: 2,
        explanation: 'Travanj comes from trava, grass.',
      },
      {
        q: 'Complete: "Ispiti su u ___." (June)',
        options: ['lipnju', 'lipanj', 'lipanju', 'lipnja'],
        correct: 0,
        explanation: 'U + locative, with the fleeting a: u lipnju.',
      },
      {
        q: 'Complete: "Ovaj tjedan je pedeseta ___ osnutka grada." (anniversary)',
        options: ['proslava', 'obljetnica', 'godina', 'pismenost'],
        correct: 1,
        explanation: 'The anniversary of an event is obljetnica.',
      },
      {
        q: 'Complete: "Kako se ___ tvoje prezime?" (is pronounced)',
        options: ['odgovara', 'dogovara', 'nagovara', 'izgovara'],
        correct: 3,
        explanation: 'To pronounce is izgovarati / izgovoriti.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Nisam odgovorio njegovo pitanje.',
          'Nisam dogovorio na njegovo pitanje.',
          'Nisam odgovorio na njegovo pitanje.',
          'Nisam izgovorio na njegovo pitanje.',
        ],
        correct: 2,
        explanation: 'Odgovoriti takes na + accusative: odgovoriti na pitanje.',
      },
      {
        q: 'What does "funkcionalno nepismen" describe?',
        options: [
          'someone who cannot read at all',
          'someone who reads but cannot understand everyday texts',
          'someone who cannot use a computer',
          'someone who writes with many spelling mistakes',
        ],
        correct: 1,
        explanation:
          'A functionally illiterate person can read but cannot understand a contract or instructions.',
      },
    ],
    vocab: [
      ['pismenost', 'literacy', 'Digitalna pismenost danas je vrlo važna.'],
      ['nepismen', 'illiterate', 'Njegov djed je bio nepismen.'],
      ['obljetnica', 'anniversary (of an event)', 'Škola slavi stotu obljetnicu.'],
      ['godišnjica', 'anniversary', 'Sutra nam je godišnjica braka.'],
      ['proslava', 'celebration', 'Proslava je trajala do ponoći.'],
      ['izgovoriti', 'to pronounce', 'Ne znam izgovoriti ovu riječ.'],
      ['odgovoriti', 'to answer', 'Odgovorila je na sva pitanja.'],
      ['dogovoriti se', 'to agree, to arrange', 'Dogovorili smo se za petak.'],
      ['nagovoriti', 'to persuade', 'Nagovorio me da idem s njim.'],
      ['prigovarati', 'to complain, to object', 'Stalno prigovara zbog buke.'],
    ],
  },

  'noun-peculiarities-e': {
    worked: [
      {
        title: 'Three, Then Seven',
        problem: 'Prevedi: "I have three sisters and seven pencils."',
        en: 'I have three sisters and seven pencils.',
        steps: [
          {
            label: 'tri + noun',
            text: 'After dva, tri, četiri a feminine noun takes -e: tri sestre.',
          },
          { label: 'sedam + noun', text: 'After sedam the genitive plural.' },
          { label: 'The cluster', text: 'Olovka ends in -vka: an a slips in, olovaka.' },
        ],
        answer: 'Imam tri sestre i sedam olovaka.',
      },
      {
        title: 'Dative and Locative in One Sentence',
        problem: 'Prevedi: "I am writing to my mother about a river in America."',
        en: 'I am writing to my mother about a river in America.',
        steps: [
          { label: 'To whom?', text: 'The dative: majka → majci, the k becoming c before -i.' },
          { label: 'About what?', text: 'O + locative: rijeka → rijeci, with jednoj.' },
          { label: 'Where?', text: 'U + locative: Amerika → Americi.' },
        ],
        answer: 'Pišem majci o jednoj rijeci u Americi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'U razredu je dvanaest ___. (girls)',
          options: ['djevojka', 'djevojke', 'djevojaka', 'djevojkama'],
          correct: 2,
          hint: 'After dvanaest the genitive plural — with an extra a in the cluster.',
          explanation: 'djevojaka — an a is inserted.',
        },
        {
          q: 'Imam pet ___. (sisters)',
          options: ['sestara', 'sestra', 'sestre', 'sestri'],
          correct: 0,
          hint: 'After pet the genitive plural, with an a slipped in.',
          explanation: 'sestara — the genitive plural of sestra.',
        },
        {
          q: 'Na stolu je deset ___. (pencils)',
          options: ['olovke', 'olovka', 'olovci', 'olovaka'],
          correct: 3,
          hint: 'The genitive plural of a noun in -vka.',
          explanation: 'olovaka — an a between v and k.',
        },
        {
          q: 'Na priredbi je bilo puno ___. (mothers)',
          options: ['majkama', 'majki', 'majke', 'majci'],
          correct: 1,
          hint: 'This noun takes -i in the genitive plural.',
          explanation: 'majki — the genitive plural of majka.',
        },
        {
          q: 'Imam nešto u ___. (hand)',
          options: ['ruki', 'ruke', 'ruci', 'ruku'],
          correct: 2,
          hint: 'U + locative: k changes before -i.',
          explanation: 'ruci — k → c.',
        },
        {
          q: 'Pričam ti o ___. (grandmother)',
          options: ['baki', 'baci', 'bake', 'baku'],
          correct: 0,
          hint: 'A family word: the k does not change.',
          explanation: 'baki — baka keeps its k.',
        },
        {
          q: 'Daj ___ malo vode. (the cat)',
          options: ['mačci', 'mačke', 'mačku', 'mački'],
          correct: 3,
          hint: 'Nouns in -čka keep their k before -i.',
          explanation: 'mački — no sibilarization in -čka.',
        },
        {
          q: '___, gdje si? (sister — calling her)',
          options: ['Sestri', 'Sestro', 'Sestrom', 'Sestru'],
          correct: 1,
          hint: 'Most feminine nouns in -a take -o in the vocative.',
          explanation: 'Sestro — the vocative.',
        },
        {
          type: 'type',
          q: 'Pročitala sam to u jednoj ____. (book)',
          answer: 'knjizi',
          hint: 'U + locative: g changes before -i.',
          explanation: 'knjizi — g → z.',
        },
        {
          type: 'type',
          q: 'Imam ranu na ____. (leg)',
          answer: 'nozi',
          hint: 'Na + locative: g turns into z before -i.',
          explanation: 'nozi — the locative of noga.',
        },
        {
          type: 'type',
          q: '____, možete li mi pomoći? (teacher — a woman)',
          answer: 'Učiteljice',
          hint: 'A noun in -ica: the vocative ending is -ice.',
          explanation: 'Učiteljice — the vocative of učiteljica.',
        },
        {
          type: 'type',
          q: 'Na koncertu je bilo stotinu ____. (girls)',
          answer: 'djevojaka',
          hint: 'After stotinu the genitive plural, with an extra a.',
          explanation: 'djevojaka — the genitive plural of djevojka.',
        },
        {
          type: 'type',
          q: 'Šaljem paket ____. (my mother)',
          answer: 'majci',
          hint: 'To whom? — the dative, and k becomes c.',
          explanation: 'majci — the dative of majka.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the genitive plural of olovka?',
        options: ['olovki', 'olovaka', 'olovke', 'olovka'],
        correct: 1,
        explanation: 'An a is inserted between v and k: olovaka.',
      },
      {
        q: 'Complete: "Boli me nešto u ___." (leg)',
        options: ['nogi', 'noge', 'nogu', 'nozi'],
        correct: 3,
        explanation: 'U + locative, and g becomes z before -i: nozi.',
      },
      {
        q: 'Complete: "Kupali smo se u ___." (the river)',
        options: ['rijeci', 'rijeki', 'rijeke', 'rijeku'],
        correct: 0,
        explanation: 'U + locative, k → c: u rijeci.',
      },
      {
        q: 'Complete: "Pomažem ___ u vrtu." (grandmother)',
        options: ['baci', 'baku', 'baki', 'bake'],
        correct: 2,
        explanation: 'Pomagati takes the dative, and baka keeps its k: baki.',
      },
      {
        q: 'What is the vocative of kolegica?',
        options: ['kolegico', 'kolegice', 'kolegicom', 'kolegicu'],
        correct: 1,
        explanation: 'Nouns in -ica take -ice: kolegice.',
      },
      {
        q: 'Complete: "Ured svaki dan dobiva stotine ___." (requests)',
        options: ['molba', 'molbe', 'molaba', 'molbi'],
        correct: 3,
        explanation: 'Molba takes -i in the genitive plural: molbi.',
      },
    ],
    vocab: [
      ['djevojka', 'girl', 'U razredu je deset djevojaka.'],
      ['olovka', 'pencil', 'Možeš li mi posuditi olovku?'],
      ['pjesma', 'song, poem', 'Znam napamet mnogo pjesama.'],
      ['majka', 'mother', 'Često mislim o majci.'],
      ['molba', 'request, application', 'Poslao sam molbu za posao.'],
      ['ruka', 'hand, arm', 'Drži knjigu u ruci.'],
      ['noga', 'leg, foot', 'Imam ranu na nozi.'],
      ['učiteljica', 'teacher (woman)', 'Učiteljice, imam pitanje.'],
      ['mačka', 'cat', 'Daj mački malo mlijeka.'],
      ['rijeka', 'river', 'Kupali smo se u rijeci.'],
    ],
  },
};
