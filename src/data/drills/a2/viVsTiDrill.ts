// src/data/drills/a2/viVsTiDrill.ts
//
// A2 VI AND TI — the drill for the `vi-vs-ti` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 17, 34, 36–38, 47, 88 and 100: the
// introductions of lesson 1 ("Možete li, molim Vas, ponoviti kako se zovete?", "Poznajem
// Vas / te iz viđenja", "Drago mi je što te opet vidim!", "Kako se zovete? Odakle ste?"),
// the present-tense tables that print "ti dođeš — vi/Vi dođete", the phrases for guests
// ("Izvolite!", "Hvala Vam!", "Oprostite što kasnimo", "Zar već idete?"), the phone
// phrases ("Croaticum, izvolite?", "Ne čujem Vas") and the compliments ("Ova boja odlično
// Vam stoji!", "Hvala ti / Vam!").
//
// Where the book and the lesson differ: the book never explains Vi and ti as a topic; it
// simply prints both forms side by side in its phrase boxes and verb tables. The lesson
// states the rule (who gets Vi, who gets ti, the offer "Možemo li prijeći na ti?"). The
// drill uses the book's phrases to practice the lesson's rule. Only the present tense and
// the set polite words (Izvolite, Oprostite) are needed.
//
// Three modes:
//   glagol    — the verb form: -š for ti, -te for Vi
//   zamjenica — te / Vas, ti / Vam, tvoj / Vaš
//   situacija — who gets Vi, who gets ti, and the right line for the moment

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VI_VS_TI_MODE_LABELS: Record<string, string> = {
  glagol: '🗣️ Kako ste? Kako si?',
  zamjenica: '👉 Vas ili te?',
  situacija: '🤝 Vi ili ti?',
};

export const VI_VS_TI_DRILL_DATA: ModeDrillItem[] = [
  // ── glagol ────────────────────────────────────────────────────────────────
  {
    mode: 'glagol',
    q: 'Gospodine Murtić, odakle ____?',
    en: 'Mr. Murtić, where are you from?',
    opts: ['ste', 'si', 'je', 'smo'],
    answer: 'ste',
    tip: 'You say Vi to Mr. Murtić, and the Vi form of biti is ste. si is the ti form for a friend, je is he or she, and smo is we.',
  },
  {
    mode: 'glagol',
    q: 'Bog, ja sam Igor. Ti si nova ovdje? Što ____?',
    en: 'Hi, I am Igor. You are new here? What do you study?',
    opts: ['studiraš', 'studirate', 'studira', 'studiram'],
    answer: 'studiraš',
    tip: 'Igor has already said "Ti si", so the verb stays in the ti form, ending in -š: studiraš. studirate is the Vi form, studira is he or she, and studiram is I.',
  },
  {
    mode: 'glagol',
    q: 'Gospođo Pejić, što ____ u slobodno vrijeme?',
    en: 'Mrs. Pejić, what do you do in your free time?',
    opts: ['radite', 'radiš', 'radi', 'rade'],
    answer: 'radite',
    tip: 'Mrs. Pejić gets Vi, so the verb ends in -te: radite. radiš is the ti form, radi is he or she, and rade is they.',
  },
  {
    mode: 'glagol',
    q: 'Oprostite, kako se ____?',
    en: 'Excuse me, what is your name?',
    opts: ['zovete', 'zoveš', 'zove', 'zovem'],
    answer: 'zovete',
    tip: 'Oprostite is the polite Vi word, so the verb must match it: zovete. zoveš would go with Oprosti, zove asks about someone else, and zovem is your own name.',
  },
  {
    mode: 'glagol',
    q: 'Bog, Marko! Kako si? ____ li vremena za kavu?',
    en: 'Hi, Marko! How are you? Do you have time for a coffee?',
    opts: ['Imaš', 'Imate', 'Ima', 'Imam'],
    answer: 'Imaš',
    tip: '"Bog" and "Kako si?" show that Marko is a friend, so the ti form: Imaš. Imate would switch to Vi in the middle of the talk, Ima is he or she, and Imam is I.',
  },
  {
    mode: 'glagol',
    q: 'Gospodine, ____ li, molim Vas, ponoviti adresu?',
    en: 'Sir, can you repeat the address, please?',
    opts: ['možete', 'možeš', 'može', 'mogu'],
    answer: 'možete',
    tip: 'Gospodine and molim Vas are both polite, so the verb is the Vi form: možete. možeš is for a friend, može is he or she, and mogu is I.',
  },
  {
    mode: 'glagol',
    q: 'Ana i Marko, kamo ____ večeras?',
    en: 'Ana and Marko, where are you going tonight?',
    opts: ['idete', 'ideš', 'idu', 'idemo'],
    answer: 'idete',
    tip: 'Two people always take the vi form, even close friends: idete. ideš speaks to only one of them, idu is they, and idemo is we.',
  },
  {
    mode: 'glagol',
    q: 'Mama, što ____ za ručak?',
    en: 'Mom, what are you cooking for lunch?',
    opts: ['kuhaš', 'kuhate', 'kuha', 'kuham'],
    answer: 'kuhaš',
    tip: 'Family gets ti, so the verb ends in -š: kuhaš. kuhate would sound as if you were talking to a stranger, kuha is he or she, and kuham is I.',
  },
  {
    mode: 'glagol',
    q: 'Ivan, moj prijatelj, ide kući. Kažem: „Zar već ____?“',
    en: 'Ivan, my friend, is going home. I say: "Are you leaving already?"',
    opts: ['ideš', 'idete', 'ide', 'idem'],
    answer: 'ideš',
    tip: 'One friend gets ti: Zar već ideš? idete is what you say to guests you address as Vi or to several people, ide is he or she, and idem is I.',
  },

  // ── zamjenica ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenica',
    q: 'Poznajem ____ iz viđenja, gospodine.',
    en: 'I know you by sight, sir.',
    opts: ['Vas', 'te', 'Vam', 'ti'],
    answer: 'Vas',
    tip: 'poznavati takes the accusative, and gospodine calls for the polite form: Vas. te is the accusative for a friend, and Vam and ti are datives.',
  },
  {
    mode: 'zamjenica',
    q: 'Bog, Ivana! Drago mi je što ____ opet vidim.',
    en: 'Hi, Ivana! I am glad to see you again.',
    opts: ['te', 'Vas', 'ti', 'Vam'],
    answer: 'te',
    tip: '"Bog" and a first name mean ti, and vidjeti takes the accusative: te. Vas is the polite accusative, and ti and Vam are datives.',
  },
  {
    mode: 'zamjenica',
    q: 'Gospođo Horvat, ova boja odlično ____ stoji!',
    en: 'Mrs. Horvat, this color looks great on you!',
    opts: ['Vam', 'ti', 'Vas', 'te'],
    answer: 'Vam',
    tip: 'Something looks good "to" a person, so the dative, and Mrs. Horvat gets the polite one: Vam. ti is the dative for a friend, and Vas and te are accusatives.',
  },
  {
    mode: 'zamjenica',
    q: 'Mama, hvala ____! Poklon je jako lijep.',
    en: 'Mom, thank you! The present is very nice.',
    opts: ['ti', 'Vam', 'te', 'Vas'],
    answer: 'ti',
    tip: 'hvala takes the dative, and your mom gets the informal one: hvala ti. Vam is the polite dative, and te and Vas are accusatives.',
  },
  {
    mode: 'zamjenica',
    q: 'Gospodine, kako je ____ ime?',
    en: 'Sir, what is your name?',
    opts: ['Vaše', 'tvoje', 'Vaš', 'tvoj'],
    answer: 'Vaše',
    tip: 'The polite word for your is Vaš, and ime is neuter, so Vaše. tvoje is the form for a friend, and Vaš and tvoj are masculine forms that do not fit ime.',
  },
  {
    mode: 'zamjenica',
    q: 'Luka, ti sjediš ovdje? Je li ovo ____ knjiga?',
    en: 'Luka, do you sit here? Is this your book?',
    opts: ['tvoja', 'Vaša', 'tvoj', 'Vaš'],
    answer: 'tvoja',
    tip: 'You have just said ti to Luka, so your is tvoj, and knjiga is feminine: tvoja. Vaša goes with Vi, and tvoj and Vaš are masculine forms.',
  },
  {
    mode: 'zamjenica',
    q: 'Gospodine Šimić, je li ovo ____ auto?',
    en: 'Mr. Šimić, is this your car?',
    opts: ['Vaš', 'tvoj', 'Vaša', 'tvoja'],
    answer: 'Vaš',
    tip: 'Mr. Šimić gets Vi, so your is Vaš, and auto is masculine: Vaš auto. tvoj is for a friend, and Vaša and tvoja are feminine forms.',
  },
  {
    mode: 'zamjenica',
    q: 'Ja sam iz Australije. A odakle ste ____, gospođo?',
    en: 'I am from Australia. And where are you from, ma’am?',
    opts: ['Vi', 'ti', 'ona', 'oni'],
    answer: 'Vi',
    tip: 'The verb ste and the word gospođo both call for the polite Vi, written with a capital V for one person. ti would need si; ona and oni talk about other people and would need je or su.',
  },
  {
    mode: 'zamjenica',
    q: 'Ja studiram geografiju. A što studiraš ____?',
    en: 'I study geography. And what do you study?',
    opts: ['ti', 'Vi', 'ona', 'oni'],
    answer: 'ti',
    tip: 'The verb studiraš ends in -š, the ti form, so the pronoun is ti. Vi would need studirate, ona would need studira, and oni would need studiraju.',
  },

  // ── situacija ─────────────────────────────────────────────────────────────
  {
    mode: 'situacija',
    q: 'Zovete ured. Javlja se glas: „Croaticum, izvolite?“ Što kažete?',
    en: 'You call an office. A voice answers: "Croaticum, how can I help you?" What do you say?',
    opts: [
      'Dobar dan! Mogu li razgovarati s gospođom Pejić?',
      'Bog, ovdje Ivan. Što radiš?',
      'Hej! Imaš li vremena za kavu?',
      'Bog! Kako si?',
    ],
    answer: 'Dobar dan! Mogu li razgovarati s gospođom Pejić?',
    tip: 'An office is a formal place and you do not know who answered, so you greet with Dobar dan and ask politely. The other three lines use Bog, Hej and ti forms (radiš, imaš, si), which are only for friends.',
  },
  {
    mode: 'situacija',
    q: 'Već se dugo poznajemo. Možemo li prijeći na ____? — Naravno, s veseljem!',
    en: 'We have known each other a long time. Can we drop the formal address? — Of course, with pleasure!',
    opts: ['ti', 'Vi', 'oni', 'ona'],
    answer: 'ti',
    tip: 'The offer is "prijeći na ti": after a time on Vi, people move to the friendly form, and the warm answer is "Naravno, s veseljem!". Vi is where they started, and oni and ona are not forms of address.',
  },
  {
    mode: 'situacija',
    q: 'Gost daje cvijeće gospođi Kovač i kaže: „____!“',
    en: 'A guest hands Mrs. Kovač flowers and says: "Here you are!"',
    opts: ['Izvolite', 'Izvoli', 'Oprosti', 'Hvala ti'],
    answer: 'Izvolite',
    tip: 'When you hand something to a person you call Vi, you say Izvolite. Izvoli is the same word for a friend, Oprosti is an informal sorry, and Hvala ti is what the person who receives says to a friend.',
  },
  {
    mode: 'situacija',
    q: 'Kasniš na kavu s prijateljicom Anom. Što kažeš?',
    en: 'You are late for coffee with your friend Ana. What do you say?',
    opts: [
      'Oprosti što kasnim.',
      'Oprostite što kasnim.',
      'Oprosti što kasniš.',
      'Oprostite što kasnite.',
    ],
    answer: 'Oprosti što kasnim.',
    tip: 'Ana is a friend, so Oprosti, and you are the one who is late, so kasnim. Oprostite is the Vi form; kasniš and kasnite would say that Ana is the late one.',
  },
  {
    mode: 'situacija',
    q: 'Tko je za tebe „ti“?',
    en: 'Which of these people do you call "ti"?',
    opts: ['dijete u parku', 'liječnica u bolnici', 'službenik u banci', 'profesor na fakultetu'],
    answer: 'dijete u parku',
    tip: 'Children always get ti. A doctor, a bank clerk and a professor are people you meet in a formal role, so they get Vi until they offer ti.',
  },
  {
    mode: 'situacija',
    q: 'Gospodin Šimić je tvoj novi šef. Koja rečenica NIJE za njega?',
    en: 'Mr. Šimić is your new boss. Which sentence is NOT right for him?',
    opts: ['Kako si?', 'Kako ste?', 'Odakle ste?', 'Što radite?'],
    answer: 'Kako si?',
    tip: '"Kako si?" is the ti form, which is too familiar for a new boss. Kako ste, Odakle ste and Što radite all use the Vi form, the safe choice until he offers ti.',
  },
  {
    mode: 'situacija',
    q: '— Dobar dan! Ja sam Miljenko Murtić. — ____',
    en: 'A man you do not know introduces himself. Choose the polite reply.',
    opts: ['Drago mi je. Kako ste?', 'Drago mi je. Kako si?', 'Bog! Što radiš?', 'Hej! Kako si?'],
    answer: 'Drago mi je. Kako ste?',
    tip: 'He greets you with Dobar dan and his full name, which is formal, so you answer with the Vi form: Kako ste? The other three use si or radiš, the ti forms, and Bog and Hej are greetings for friends.',
  },
  {
    mode: 'situacija',
    q: 'U pismu piše: „Kako ste Vi?“ Komu je pismo?',
    opts: [
      'One person, addressed politely',
      'A group of close friends',
      'One close friend',
      'A small child',
    ],
    answer: 'One person, addressed politely',
    tip: 'Vi with a capital V is the polite form for one person. A group of friends is vi with a small v, and one close friend or a child would get "Kako si ti?".',
  },
  {
    mode: 'situacija',
    q: 'Prvi put si kod liječnika. Koja je rečenica točna?',
    en: 'It is your first visit to this doctor. Which sentence is right?',
    opts: [
      'Gdje radite, doktore?',
      'Gdje radiš, doktore?',
      'Gdje radi, doktore?',
      'Gdje radim, doktore?',
    ],
    answer: 'Gdje radite, doktore?',
    tip: 'A doctor you do not know gets Vi, so the verb ends in -te: radite. radiš is the ti form, radi talks about someone else, and radim is about yourself.',
  },
];
