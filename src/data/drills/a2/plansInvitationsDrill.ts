// src/data/drills/a2/plansInvitationsDrill.ts
//
// A2 MAKING PLANS — the drill for the `plans-invitations` lesson.
//
// Follows Razgovarajte s nama! A2–B1, pages 32, 57, 82–83 and 97: the phone invitation to
// the weekend house ("Hoćete li … ići s nama?" — "Hvala ti na pozivu!"), the text "Idemo li
// na kavu?", the street meeting and its speaking task (stage 4: "poziv na kavu, poziv u
// posjet ili na novi susret: imaš li vremena za kavu…"), and Marin's call to Klara ("Bi li
// išla sa mnom…?" — "…već imam dogovor" — "Čujemo se sutra!"). The book spreads invitations
// over these dialogues and has no single page for them; fixing the time and place
// ("Nalazimo se…") follows the lesson.
//
// Three modes:
//   poziv   — inviting: Jesi li slobodan? Idemo na kavu? Hoćeš li ići s nama?
//   odgovor — accepting and declining gracefully
//   dogovor — the time, the place, the present for an arranged plan, and the goodbye

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PLANS_INVITATIONS_MODE_LABELS: Record<string, string> = {
  poziv: '☕ Poziv',
  odgovor: '👍 Može ili ne mogu',
  dogovor: '🕗 Dogovor',
};

export const PLANS_INVITATIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── poziv ─────────────────────────────────────────────────────────────────
  {
    mode: 'poziv',
    q: 'Marine, jesi li ____ sutra poslije posla?',
    en: 'Marin, are you free tomorrow after work?',
    opts: ['slobodan', 'slobodna', 'slobodni', 'slobodno'],
    answer: 'slobodan',
    tip: 'You are asking one man with ti, so the masculine singular: slobodan. slobodna is for a woman, slobodni goes with jeste (Vi or several people), and slobodno is neuter.',
  },
  {
    mode: 'poziv',
    q: 'Imaš li vremena? Idemo ____?',
    en: 'Do you have time? Shall we go for coffee?',
    opts: ['na kavu', 'na kavi', 'u kavu', 'za kavu'],
    answer: 'na kavu',
    tip: 'Going for coffee is ići na + accusative: na kavu. na kavi is the locative and means already sitting over coffee, u kavu would be into the coffee, and za kavu goes with imati vremena, not with idemo.',
  },
  {
    mode: 'poziv',
    q: 'Imate li sutra ____ za ručak s nama?',
    en: 'Do you have time tomorrow for lunch with us?',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    tip: 'Having "some time" is imati + genitive: vremena. vrijeme is the dictionary form, vremenu the dative or locative, and vremenom the instrumental.',
  },
  {
    mode: 'poziv',
    q: 'Što ____ večeras? Idemo u kazalište?',
    en: 'What are you doing tonight? Shall we go to the theater?',
    opts: ['radiš', 'radi', 'raditi', 'radio'],
    answer: 'radiš',
    tip: 'You ask a friend about tonight with the present and the ti form: radiš. radi is he or she, raditi is the infinitive, and radio is a past form that needs si.',
  },
  {
    mode: 'poziv',
    q: 'Hoćeš li ____ s nama na izlet?',
    en: 'Do you want to come with us on the trip?',
    opts: ['ići', 'ideš', 'idem', 'išao'],
    answer: 'ići',
    tip: 'After hoćeš li the verb stays in the infinitive: ići. ideš and idem are conjugated forms, and išao is the past form.',
  },
  {
    mode: 'poziv',
    q: 'Što kažeš ____ u nedjelju?',
    en: 'How about a trip on Sunday?',
    opts: ['na izlet', 'na izletu', 'za izlet', 'o izletu'],
    answer: 'na izlet',
    tip: 'A suggestion is "Što kažeš na" + accusative: na izlet. na izletu is the locative (while on the trip), za izlet means for the trip, and o izletu means about the trip.',
  },
  {
    mode: 'poziv',
    q: 'Imaš li ____ za vikend?',
    en: 'Do you have plans for the weekend?',
    opts: ['planove', 'planovi', 'planova', 'planovima'],
    answer: 'planove',
    tip: 'Plans are the object of imaš, so the accusative plural: planove. planovi is the subject form, planova the genitive you would use after nemam, and planovima the dative, locative or instrumental.',
  },
  {
    mode: 'poziv',
    q: 'Klara, bi li ____ sa mnom na koncert?',
    en: 'Klara, would you go to a concert with me?',
    opts: ['išla', 'išao', 'ići', 'ideš'],
    answer: 'išla',
    tip: 'After bi li comes the -o / -la form, and Klara is a woman: išla. išao is the form for a man, and ići and ideš cannot follow bi.',
  },
  {
    mode: 'poziv',
    q: 'Idemo za vikend na selo. Hoćete li ići ____?',
    en: 'We are going to the countryside for the weekend. Will you come with us?',
    opts: ['s nama', 'sa nama', 's nas', 's mi'],
    answer: 's nama',
    tip: 's takes the instrumental of mi: s nama. sa is only needed before s, z, š, ž or a hard group (sa mnom), nas is the genitive or accusative, and mi is the subject form.',
  },

  // ── odgovor ───────────────────────────────────────────────────────────────
  {
    mode: 'odgovor',
    q: 'Prijatelj te zove na kavu. Želiš ići. Što kažeš?',
    en: 'A friend invites you for coffee. You want to go. What do you say?',
    opts: ['Može, rado!', 'Nažalost, ne mogu.', 'Možda drugi put.', 'Nema na čemu.'],
    answer: 'Može, rado!',
    tip: '"Može, rado!" is the everyday warm yes. "Nažalost, ne mogu" and "Možda drugi put" both turn the invitation down, and "Nema na čemu" answers a thank-you.',
  },
  {
    mode: 'odgovor',
    q: 'Ne možeš ići u kino. Što kažeš?',
    en: 'You cannot go to the movies. What is the polite thing to say?',
    opts: ['Nažalost, ne mogu. Možda drugi put.', 'Ne.', 'Može, vidimo se!', 'Dogovoreno!'],
    answer: 'Nažalost, ne mogu. Možda drugi put.',
    tip: 'A polite no is softened: Nažalost, ne mogu, and then Možda drugi put. A bare "Ne." is blunt, and "Može, vidimo se!" and "Dogovoreno!" both accept.',
  },
  {
    mode: 'odgovor',
    q: '____, večeras ne mogu. Već imam dogovor.',
    en: 'Unfortunately, I cannot tonight. I already have plans.',
    opts: ['Nažalost', 'Naravno', 'Rado', 'Može'],
    answer: 'Nažalost',
    tip: 'A refusal opens with Nažalost — unfortunately. Naravno (of course), Rado (gladly) and Može (sure) all say yes, which does not fit "ne mogu".',
  },
  {
    mode: 'odgovor',
    q: 'Hvala ti na ____!',
    en: 'Thank you for the invitation!',
    opts: ['pozivu', 'poziv', 'poziva', 'pozivom'],
    answer: 'pozivu',
    tip: 'Thanking for something is hvala na + locative: na pozivu. poziv is the dictionary form, poziva the genitive, and pozivom the instrumental.',
  },
  {
    mode: 'odgovor',
    q: 'Ne znam još. ____ ću ti sutra.',
    en: 'I do not know yet. I will let you know tomorrow.',
    opts: ['Javit', 'Javiti', 'Javim', 'Javio'],
    answer: 'Javit',
    tip: 'When ću follows the verb, the infinitive drops its final -i: Javit ću ti. Javiti keeps the -i, Javim is the present, and Javio is a past form.',
  },
  {
    mode: 'odgovor',
    q: 'Rado bih ____, ali moram učiti.',
    en: 'I would love to come, but I have to study. (a man speaking)',
    opts: ['došao', 'došla', 'doći', 'dođem'],
    answer: 'došao',
    tip: 'After bih comes the -o / -la form, and the speaker is a man: došao. došla is what a woman says, and doći and dođem cannot follow bih.',
  },
  {
    mode: 'odgovor',
    q: 'Idemo u kino u osam? — Može, ____!',
    en: 'Shall we go to the movies at eight? — Sure, it is settled!',
    opts: ['dogovoreno', 'dogovoriti', 'dogovor', 'dogovaram'],
    answer: 'dogovoreno',
    tip: 'Dogovoreno — agreed — is the set word that settles a plan after Može. dogovoriti is the infinitive, dogovor is the noun (an arrangement), and dogovaram is "I am arranging".',
  },
  {
    mode: 'odgovor',
    q: 'Danas ne mogu. Možda drugi ____.',
    en: 'I cannot today. Maybe another time.',
    opts: ['put', 'puta', 'sat', 'dan'],
    answer: 'put',
    tip: 'Another time, meaning another occasion, is drugi put. puta is the form after numbers (dva puta), sat is an hour, and dan would promise a different day rather than soften the no.',
  },
  {
    mode: 'odgovor',
    q: 'Klara kaže: „Sutra ne mogu, ali u nedjelju sam ____.“',
    en: 'Klara says: "I cannot tomorrow, but I am free on Sunday."',
    opts: ['slobodna', 'slobodan', 'slobodno', 'slobodni'],
    answer: 'slobodna',
    tip: 'Klara is talking about herself, so the feminine form: slobodna. slobodan is what a man says, slobodno is neuter, and slobodni is the plural.',
  },

  // ── dogovor ───────────────────────────────────────────────────────────────
  {
    mode: 'dogovor',
    q: 'Nalazimo se ____ na trgu.',
    en: 'We are meeting at seven on the square.',
    opts: ['u sedam', 'na sedam', 'za sedam', 'sedmi'],
    answer: 'u sedam',
    tip: 'Clock time is u + the number: u sedam. na is for places, "za sedam" would need a unit (za sedam minuta — in seven minutes), and sedmi means the seventh.',
  },
  {
    mode: 'dogovor',
    q: 'Nalazimo se ispred ____.',
    en: 'We are meeting in front of the theater.',
    opts: ['kazališta', 'kazalište', 'kazalištu', 'kazalištem'],
    answer: 'kazališta',
    tip: 'ispred takes the genitive: ispred kazališta. kazalište is the dictionary form, kazalištu the locative you would use after u, and kazalištem the instrumental.',
  },
  {
    mode: 'dogovor',
    q: 'Čekam te u ____.',
    en: 'I will wait for you at the café.',
    opts: ['kavani', 'kavana', 'kavanu', 'kavane'],
    answer: 'kavani',
    tip: 'Waiting is a position, so u + locative: u kavani. kavana is the dictionary form, u kavanu is for walking in, and kavane is the genitive.',
  },
  {
    mode: 'dogovor',
    q: 'Večeras ____ kod Tanje. Dolaziš i ti?',
    en: "Tonight we are having dinner at Tanja's. Are you coming too?",
    opts: ['večeramo', 'večerali smo', 'večerati', 'večera'],
    answer: 'večeramo',
    tip: 'A plan that is already arranged takes the plain present: večeramo. večerali smo is the past, večerati is a bare infinitive, and večera is the form for one person.',
  },
  {
    mode: 'dogovor',
    q: 'U nedjelju nam ____ prijatelji na ručak.',
    en: 'On Sunday friends are coming over for lunch.',
    opts: ['dolaze', 'dolazi', 'došli su', 'dolaziti'],
    answer: 'dolaze',
    tip: 'It is arranged, so the present, and prijatelji is plural: dolaze. dolazi is singular, došli su is the past, and dolaziti is the infinitive.',
  },
  {
    mode: 'dogovor',
    q: '____ se sutra u osam!',
    en: 'See you tomorrow at eight!',
    opts: ['Vidimo', 'Vidim', 'Vidite', 'Vidjeti'],
    answer: 'Vidimo',
    tip: 'The goodbye is Vidimo se — literally "we see each other", in the mi form. Vidim is I, Vidite is you, and Vidjeti is the infinitive.',
  },
  {
    mode: 'dogovor',
    q: 'Nazvat ću te sutra. ____ se!',
    en: 'I will call you tomorrow. Talk to you then!',
    opts: ['Čujemo', 'Čujem', 'Čuti', 'Čuju'],
    answer: 'Čujemo',
    tip: 'When the next contact is a phone call, you close with Čujemo se — "we hear each other". Čujem is I, Čuti is the infinitive, and Čuju is they.',
  },
  {
    mode: 'dogovor',
    q: 'U ____ sati se nalazimo?',
    en: 'At what time are we meeting?',
    opts: ['koliko', 'koji', 'kada', 'kako'],
    answer: 'koliko',
    tip: 'The set question for a clock time is U koliko sati? koji does not fit the plural sati, and kada and kako are question words that stand alone, not after u.',
  },
  {
    mode: 'dogovor',
    q: 'Gdje se nalazimo? — ____.',
    en: 'Where are we meeting? — At the stop.',
    opts: ['Na stanici', 'Na stanicu', 'U stanice', 'Na stanicom'],
    answer: 'Na stanici',
    tip: 'A meeting place answers gdje?, so na + locative: Na stanici. Na stanicu is the accusative for going there, stanice is the genitive, and stanicom the instrumental.',
  },
  {
    mode: 'dogovor',
    q: 'Koncert počinje u devet. Nalazimo se u ____ devet.',
    en: 'The concert starts at nine. We are meeting at eight thirty.',
    opts: ['pola', 'pol', 'polu', 'pole'],
    answer: 'pola',
    tip: 'Half past eight is "pola devet" — half way to nine — and pola never changes. "pol" is a shortened spoken form, and "polu" and "pole" add endings the word does not take.',
  },
];
