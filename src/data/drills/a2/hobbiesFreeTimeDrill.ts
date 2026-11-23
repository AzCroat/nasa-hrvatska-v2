// src/data/drills/a2/hobbiesFreeTimeDrill.ts
//
// A2 FREE TIME AND HOBBIES — the drill for the `hobbies-free-time` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 18, 30, 32 and 37 (and the text "Prijatelji" on
// page 105): "Što radite u slobodno vrijeme?", the weekend page ("Mladi vikendom…"), the
// invitation to the weekend house ("…često radi i subotom"), the summer activities list
// (plivanje, planinarenje, šetnje) and "bavi se … sviranjem gitare".
//
// Three modes:
//   igrati — igrati a sport or a game, svirati an instrument, igrati se with no game named
//   baviti — baviti se + instrumental, voljeti + infinitive, u slobodno vrijeme
//   kada   — the instrumental of time: subotom, vikendom — and ljeti, zimi

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const HOBBIES_FREE_TIME_MODE_LABELS: Record<string, string> = {
  igrati: '🎸 Igrati ili svirati?',
  baviti: '🏃 Čime se baviš?',
  kada: '📅 Subotom, ljeti',
};

export const HOBBIES_FREE_TIME_DRILL_DATA: ModeDrillItem[] = [
  // ── igrati ────────────────────────────────────────────────────────────────
  {
    mode: 'igrati',
    q: 'Marin subotom ____ košarku.',
    en: 'Marin plays basketball on Saturdays.',
    opts: ['igra', 'svira', 'se igra', 'se bavi'],
    answer: 'igra',
    tip: 'A sport takes igrati: igra košarku. svira is only for instruments, se igra is playing with no game named, and se bavi would need the instrumental (košarkom).',
  },
  {
    mode: 'igrati',
    q: 'Tanja ____ klavir.',
    en: 'Tanja plays the piano.',
    opts: ['svira', 'igra', 'se igra', 'pjeva'],
    answer: 'svira',
    tip: 'An instrument takes svirati: svira klavir. igra is for sports and games, se igra is what children do, and pjeva means she sings.',
  },
  {
    mode: 'igrati',
    q: 'Djeca ____ u vrtu.',
    en: 'The children are playing in the garden.',
    opts: ['se igraju', 'igraju', 'sviraju', 'se igra'],
    answer: 'se igraju',
    tip: 'No game is named, so it is igrati se, and djeca takes a plural verb: se igraju. igraju without se is waiting for a game, sviraju needs an instrument, and se igra is singular.',
  },
  {
    mode: 'igrati',
    q: 'Navečer s prijateljima ____ karte.',
    en: 'In the evening I play cards with friends.',
    opts: ['igram', 'sviram', 'se igram', 'pjevam'],
    answer: 'igram',
    tip: 'Cards are a game, so igrati: igram karte. sviram is for an instrument, se igram cannot take an object like karte, and pjevam means I sing.',
  },
  {
    mode: 'igrati',
    q: 'Znaš li ____ gitaru?',
    en: 'Do you know how to play the guitar?',
    opts: ['svirati', 'igrati', 'igrati se', 'sviraš'],
    answer: 'svirati',
    tip: 'A guitar is an instrument, so svirati, and after znaš the verb stays in the infinitive. igrati and igrati se are for games and play; sviraš would put two conjugated verbs side by side.',
  },
  {
    mode: 'igrati',
    q: 'Mi vikendom ____ tenis.',
    en: 'We play tennis on weekends.',
    opts: ['igramo', 'sviramo', 'se igramo', 'igraju'],
    answer: 'igramo',
    tip: 'Tennis is a sport, and mi takes -mo: igramo tenis. sviramo is for instruments, se igramo cannot take tenis as an object, and igraju is the form for oni.',
  },
  {
    mode: 'igrati',
    q: 'Mala Danijela ____ s mačkom.',
    en: 'Little Danijela is playing with the cat.',
    opts: ['se igra', 'igra', 'svira', 'se igraju'],
    answer: 'se igra',
    tip: 'Playing in general, with no game named, is igrati se: se igra. igra alone needs a game or sport, svira needs an instrument, and se igraju is plural.',
  },
  {
    mode: 'igrati',
    q: 'Što sviraš? — Sviram ____.',
    en: 'What do you play? — I play the violin.',
    opts: ['violinu', 'violina', 'violinom', 'violini'],
    answer: 'violinu',
    tip: 'The instrument is the object of svirati, so the accusative: violinu. violina is the dictionary form, violinom the instrumental and violini the dative.',
  },
  {
    mode: 'igrati',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (She plays chess.)',
    opts: ['Ona igra šah.', 'Ona svira šah.', 'Ona se igra šah.', 'Ona igra se šah.'],
    answer: 'Ona igra šah.',
    tip: 'Chess is a game, so plain igrati: Ona igra šah. svirati is for instruments, and igrati se cannot take a game as its object, wherever se is placed.',
  },
  {
    mode: 'igrati',
    q: 'Djed i ja često ____ šah.',
    en: 'Grandpa and I often play chess.',
    opts: ['igramo', 'sviramo', 'igraju', 'igram'],
    answer: 'igramo',
    tip: 'Grandpa and I are "we", so the verb ends in -mo: igramo. sviramo is the wrong verb for a game, igraju is "they", and igram is only "I".',
  },

  // ── baviti ────────────────────────────────────────────────────────────────
  {
    mode: 'baviti',
    q: 'Alma se bavi ____.',
    en: 'Alma is into music.',
    opts: ['glazbom', 'glazba', 'glazbu', 'glazbe'],
    answer: 'glazbom',
    tip: 'baviti se takes the instrumental: glazbom. glazba is the dictionary form, glazbu the accusative you would use after voljeti, and glazbe the genitive.',
  },
  {
    mode: 'baviti',
    q: 'Mi se bavimo ____.',
    en: 'We go hiking as a hobby.',
    opts: ['planinarenjem', 'planinarenje', 'planinarenja', 'planinarenju'],
    answer: 'planinarenjem',
    tip: 'After baviti se comes the instrumental, and a neuter noun in -nje takes -em: planinarenjem. planinarenje is the dictionary form, planinarenja the genitive, planinarenju the dative or locative.',
  },
  {
    mode: 'baviti',
    q: '____ se baviš?',
    en: 'What do you do as a hobby?',
    opts: ['Čime', 'Što', 'Čega', 'Čemu'],
    answer: 'Čime',
    tip: 'baviti se takes the instrumental, and the instrumental of što is čime. Što is the subject or object form, Čega the genitive, Čemu the dative.',
  },
  {
    mode: 'baviti',
    q: 'U slobodno vrijeme volim ____.',
    en: 'In my free time I like to read.',
    opts: ['čitati', 'čitam', 'čita', 'čitaju'],
    answer: 'čitati',
    tip: 'After volim the second verb stays in the infinitive: volim čitati. čitam, čita and čitaju are conjugated forms and cannot follow another conjugated verb.',
  },
  {
    mode: 'baviti',
    q: 'Što radiš u ____ vrijeme?',
    en: 'What do you do in your free time?',
    opts: ['slobodno', 'slobodni', 'slobodna', 'slobodnom'],
    answer: 'slobodno',
    tip: 'vrijeme is neuter and the phrase uses u + accusative: u slobodno vrijeme. slobodni is masculine, slobodna feminine, and slobodnom is a locative ending that this phrase does not use.',
  },
  {
    mode: 'baviti',
    q: 'Ja ____ sportom, a sestra glazbom.',
    en: 'I do sports, and my sister does music.',
    opts: ['se bavim', 'bavim', 'se bavi', 'se igram'],
    answer: 'se bavim',
    tip: 'The verb is baviti se and ja takes -im: se bavim. bavim has lost its se, se bavi is the form for she, and se igram is playing, which does not take sportom.',
  },
  {
    mode: 'baviti',
    q: 'Mi obožavamo ____.',
    en: 'We love traveling.',
    opts: ['putovati', 'putujemo', 'putujem', 'putuje'],
    answer: 'putovati',
    tip: 'obožavati works like voljeti: the activity follows in the infinitive, putovati. putujemo, putujem and putuje are conjugated forms.',
  },
  {
    mode: 'baviti',
    q: 'Marin se ne ____ sportom.',
    en: 'Marin does not do sports.',
    opts: ['bavi', 'bavim', 'baviš', 'bave'],
    answer: 'bavi',
    tip: 'Marin is "he", so the verb is bavi. bavim is the form for I, baviš for you, and bave for they.',
  },
  {
    mode: 'baviti',
    q: 'Navečer volimo ____ u parku.',
    en: 'In the evening we like to walk in the park.',
    opts: ['šetati', 'šetamo', 'šetam', 'šeta'],
    answer: 'šetati',
    tip: 'volimo is already conjugated, so what we like doing stays in the infinitive: šetati. šetamo, šetam and šeta would be a second conjugated verb.',
  },

  // ── kada ──────────────────────────────────────────────────────────────────
  {
    mode: 'kada',
    q: 'Josip radi i ____.',
    en: 'Josip works on Saturdays too.',
    opts: ['subotom', 'subota', 'u subote', 'subotu'],
    answer: 'subotom',
    tip: 'A day in the instrumental means "on those days, regularly": subotom. subota is the dictionary form, "u subote" copies English and is not Croatian, and subotu needs u and then means one Saturday.',
  },
  {
    mode: 'kada',
    q: '____ idemo na izlet u planine.',
    en: 'On weekends we go on a trip to the mountains.',
    opts: ['Vikendom', 'Vikend', 'U vikende', 'Vikenda'],
    answer: 'Vikendom',
    tip: 'Regularly on weekends is the instrumental with no preposition: Vikendom. Vikend is the dictionary form, "U vikende" translates the English word for word, and Vikenda is the genitive.',
  },
  {
    mode: 'kada',
    q: 'Kada ljudi idu na more? — ____.',
    en: 'When do people go to the seaside? — In summer.',
    opts: ['Ljeti', 'U ljeti', 'Ljeto', 'Ljetu'],
    answer: 'Ljeti',
    tip: 'ljeti is a ready-made word for "in summer" and takes no preposition. "U ljeti" adds one that is not needed, Ljeto is just the noun, and Ljetu is its dative.',
  },
  {
    mode: 'kada',
    q: '____ skijamo u planinama.',
    en: 'In winter we ski in the mountains.',
    opts: ['Zimi', 'U zimi', 'Zima', 'Zimom'],
    answer: 'Zimi',
    tip: 'zimi is the one-word way to say "in winter". "U zimi" adds a preposition that does not belong, Zima is the noun, and the instrumental pattern (subotom) is for days, not for this season.',
  },
  {
    mode: 'kada',
    q: 'Baka ____ ide u crkvu.',
    en: 'Grandma goes to church on Sundays.',
    opts: ['nedjeljom', 'nedjelja', 'nedjelju', 'u nedjelje'],
    answer: 'nedjeljom',
    tip: 'Every Sunday is the bare instrumental: nedjeljom. nedjelja is the dictionary form, nedjelju needs u and means one Sunday, and "u nedjelje" is English put into Croatian words.',
  },
  {
    mode: 'kada',
    q: 'Tečaj hrvatskog imam ____ i srijedom.',
    en: 'I have my Croatian class on Mondays and Wednesdays.',
    opts: ['ponedjeljkom', 'ponedjeljak', 'ponedjeljku', 'ponedjeljka'],
    answer: 'ponedjeljkom',
    tip: 'It matches srijedom: the instrumental for a regular day, and ponedjeljak drops its a: ponedjeljkom. ponedjeljak is the dictionary form, ponedjeljku the dative or locative, ponedjeljka the genitive.',
  },
  {
    mode: 'kada',
    q: 'Mladi ____ navečer idu u grad.',
    en: 'Young people go into town on Friday evenings.',
    opts: ['petkom', 'petak', 'u petke', 'petku'],
    answer: 'petkom',
    tip: 'A habit on Fridays is the instrumental, and petak drops its a: petkom. petak is the dictionary form, "u petke" is not Croatian, and petku is the dative or locative.',
  },
  {
    mode: 'kada',
    q: 'Koja rečenica govori o navici?',
    en: 'Which sentence describes a habit (every Saturday)?',
    opts: [
      'Subotom idem na tržnicu.',
      'U subotu idem na tržnicu.',
      'Subota idem na tržnicu.',
      'Do subote idem na tržnicu.',
    ],
    answer: 'Subotom idem na tržnicu.',
    tip: 'Subotom means on Saturdays, as a habit. U subotu is one particular Saturday, Subota is only the name of the day and cannot say when, and Do subote means until Saturday.',
  },
];
