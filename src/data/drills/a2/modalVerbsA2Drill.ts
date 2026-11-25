// src/data/drills/a2/modalVerbsA2Drill.ts
//
// A2 MODAL VERBS: MOĆI, MORATI, HTJETI, SMJETI, TREBATI — the drill for the
// `modal-verbs-a2` lesson.
//
// Follows Razgovarajte s nama! A2–B1, where the modal verbs are taught through dialogues
// and phrase boxes: page 17 ("Možete li, molim Vas, ponoviti kako se zovete?"), page 31
// (the phone call: "Možeš li mi donijeti bilježnicu?", "Hoćete li … ići s nama?", "Morate
// doći!", "Ne moramo se brinuti."), page 41 ("Moram uzeti…", "Trebam još spakirati…"),
// page 47 ("Kasno je, moramo ići kući."), page 64 ("htjela bih imati posebno, drugačije
// ljeto"), page 65 ("trebam imati radno iskustvo"), page 69
// ("Možete li nam dati primjer?"), page 72 (ULJUDNO PITANJE, MOLBA I SAVJET: "Biste li
// otvorili prozor?", "Možete li otvoriti prozor?", "Trebali biste popiti tabletu."), page
// 79 ("Smije li vozač razgovarati mobitelom tijekom vožnje?"), page 88 ("Molim vas, mogu
// li razgovarati s gospođom Pejić?"), page 104 ("Igor mora sam zarađivati za školovanje"),
// page 108 ("Neću odmah tražiti posao.", "htio bih uskoro imati nov posao") and page 144
// ("Ne moraš sve znati!").
//
// Where the book and the lesson differ: the book has no chapter and no conjugation table
// for the modal verbs; it uses them in dialogues and gives one grammar box (page 72) on the
// polite question, request and advice with the conditional. The lesson sets the five verbs
// side by side, with their endings and the contrast ne moram / ne smijem, which the book
// never states as a rule. The book also offers the imperative with molim te / molim Vas as
// the usual polite request; the lesson softens with a modal question.
//
// Three modes:
//   oblik    — the right person of the modal, and the infinitive after it
//   znacenje — can, must, want, may, need: the right modal for the meaning
//   molba    — softening a request: Mogu li…? Možete li…? Htio bih… Biste li…?

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MODAL_VERBS_A2_MODE_LABELS: Record<string, string> = {
  oblik: '🧩 Modalni glagol + infinitiv',
  znacenje: '🚦 Mogu, moram, smijem?',
  molba: '🙏 Uljudna molba',
};

export const MODAL_VERBS_A2_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Kasno je, mi ____ ići kući.',
    en: 'It is late, we have to go home.',
    cue: 'morati',
    opts: ['moramo', 'moram', 'morate', 'moraju'],
    answer: 'moramo',
    tip: 'morati is a regular -am verb, and with mi it ends in -amo: moramo. moram is I, morate is you (vi), and moraju is they.',
  },
  {
    mode: 'oblik',
    q: 'Moram ____ Josipove i Danijeline stvari.',
    en: "I have to take Josip's and Danijela's things.",
    opts: ['uzeti', 'uzmem', 'uzmeš', 'uzima'],
    answer: 'uzeti',
    tip: 'Only the modal verb changes for the person; the second verb stays in the infinitive: Moram uzeti. uzmem, uzmeš and uzima are present forms, and a present form cannot follow moram.',
  },
  {
    mode: 'oblik',
    q: 'Vozači ne ____ razgovarati mobitelom tijekom vožnje.',
    en: 'Drivers are not allowed to talk on a cell phone while driving.',
    cue: 'smjeti',
    opts: ['smiju', 'smije', 'smijemo', 'smijete'],
    answer: 'smiju',
    tip: 'smjeti goes smijem, smiješ, smije, smijemo, smijete, smiju. Vozači are oni, so smiju. smije is one person, smijemo is we, and smijete is you (vi).',
  },
  {
    mode: 'oblik',
    q: 'Kad tražimo posao, mi ____ imati radno iskustvo.',
    en: 'When we look for a job, we need to have work experience.',
    cue: 'trebati',
    opts: ['trebamo', 'trebam', 'trebate', 'trebaju'],
    answer: 'trebamo',
    tip: 'trebati is a regular -am verb: with mi it is trebamo, followed by the infinitive imati. trebam is I, trebate is you (vi), and trebaju is they.',
  },
  {
    mode: 'oblik',
    q: 'Tanja i Marin ____ imati drugačije ljeto.',
    en: 'Tanja and Marin want to have a different summer.',
    cue: 'htjeti',
    opts: ['hoće', 'hoću', 'hoćemo', 'hoćete'],
    answer: 'hoće',
    tip: 'The oni form of htjeti is hoće, the same as the on/ona form. hoću is I, hoćemo is we, and hoćete is you (vi).',
  },
  {
    mode: 'oblik',
    q: 'Ne ____ sve znati, Marine!',
    en: 'You do not have to know everything, Marin!',
    cue: 'morati',
    opts: ['moraš', 'moram', 'mora', 'moraju'],
    answer: 'moraš',
    tip: 'You are talking to Marin, one friend, so the ti form: moraš. moram is I, mora is he or she, and moraju is they.',
  },
  {
    mode: 'oblik',
    q: 'Možete li nam ____ primjer?',
    en: 'Can you give us an example?',
    opts: ['dati', 'date', 'dajete', 'dam'],
    answer: 'dati',
    tip: 'Možete already carries the person, so the next verb is the infinitive: dati. date and dajete are vi forms of the present and dam is the ja form; two conjugated verbs cannot stand side by side here.',
  },
  {
    mode: 'oblik',
    q: 'Gospođo Pejić, ____ pričekati pet minuta.',
    en: 'Mrs. Pejić, you have to wait five minutes.',
    cue: 'morati',
    opts: ['morate', 'moraš', 'moramo', 'moraju'],
    answer: 'morate',
    tip: 'You say Vi to Mrs. Pejić, so the verb ends in -ate: morate. moraš is the ti form for a friend, moramo is we, and moraju is they.',
  },
  {
    mode: 'oblik',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (I do not want to look for a job right away.)',
    opts: [
      'Neću odmah tražiti posao.',
      'Neću odmah tražim posao.',
      'Neću odmah traži posao.',
      'Neću odmah tražio posao.',
    ],
    answer: 'Neću odmah tražiti posao.',
    tip: 'After neću the second verb is the infinitive: tražiti. tražim and traži are present forms and tražio is the past form; none of them can follow a modal verb.',
  },

  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Imam ušteđevinu, pa ne ____ odmah tražiti posao.',
    en: 'I have savings, so I do not have to look for a job right away.',
    opts: ['moram', 'smijem', 'mogu', 'znam'],
    answer: 'moram',
    tip: 'ne moram means there is no obligation: I do not have to. ne smijem would mean I am not allowed to, ne mogu that I am unable to, and ne znam that I do not know how.',
  },
  {
    mode: 'znacenje',
    q: 'Danijela je još mala. Ona ne ____ sama ići u šumu.',
    en: 'Danijela is still little. She is not allowed to go into the forest alone.',
    opts: ['smije', 'mora', 'treba', 'želi'],
    answer: 'smije',
    tip: 'A prohibition is ne smjeti: ne smije. ne mora and ne treba only say she does not have to or need to go, which leaves her free to go, and ne želi says she does not want to.',
  },
  {
    mode: 'znacenje',
    q: 'Josip u subotu radi, zato ne ____ ići s nama.',
    en: 'Josip is working on Saturday, so he is unable to come with us.',
    opts: ['može', 'mora', 'treba', 'smije'],
    answer: 'može',
    tip: 'Being unable to, because something stands in the way, is ne moći: ne može. ne mora and ne treba mean he does not have to, and ne smije means somebody forbids it.',
  },
  {
    mode: 'znacenje',
    q: 'Igor nema novca za školovanje. Zato ____ sam zarađivati.',
    en: 'Igor has no money for his education. So he has to earn money himself.',
    opts: ['mora', 'smije', 'može', 'hoće'],
    answer: 'mora',
    tip: 'An obligation with no choice is morati: mora. smije would only say he is allowed to, može that he is able to, and hoće that he wants to.',
  },
  {
    mode: 'znacenje',
    q: '— Profesorice, ____ li na ispitu imati rječnik? — Ne, rječnik je zabranjen.',
    en: 'Professor, are we allowed to have a dictionary at the exam? — No, the dictionary is forbidden.',
    opts: ['smijemo', 'moramo', 'hoćemo', 'trebamo'],
    answer: 'smijemo',
    tip: 'Asking for permission is smjeti: Smijemo li…? The answer "zabranjen" shows it was about a rule. moramo and trebamo would ask whether it is required, and hoćemo whether we want or are going to.',
  },
  {
    mode: 'znacenje',
    q: 'Tanja kaže: „Ovo ljeto ____ putovati i upoznati nove ljude!“',
    en: 'Tanja says: "This summer I want to travel and meet new people!"',
    opts: ['hoću', 'moram', 'smijem', 'trebam'],
    answer: 'hoću',
    tip: 'A wish is htjeti: hoću. moram would make it an obligation, smijem a permission, and trebam a need.',
  },
  {
    mode: 'znacenje',
    q: 'Idemo na skijanje. Ja ____ nove rukavice.',
    en: 'We are going skiing. I need new gloves.',
    opts: ['trebam', 'moram', 'smijem', 'mogu'],
    answer: 'trebam',
    tip: 'trebati can take a thing in the accusative: Trebam nove rukavice. moram, smijem and mogu cannot stand with a noun alone; they need an infinitive after them.',
  },
  {
    mode: 'znacenje',
    q: 'Imaš temperaturu. ____ popiti tabletu i ležati.',
    en: 'You have a fever. You should take a pill and stay in bed.',
    opts: ['Trebaš', 'Smiješ', 'Hoćeš', 'Znaš'],
    answer: 'Trebaš',
    tip: 'Advice, what someone should do, is trebati: Trebaš popiti tabletu. Smiješ would only give permission, Hoćeš says you want to, and Znaš says you know how.',
  },
  {
    mode: 'znacenje',
    q: 'Liječnik kaže: „Ne smijete jesti slatko.“ Što to znači?',
    opts: [
      'Sugary food is forbidden for you.',
      'You do not have to eat sugary food.',
      'You are unable to eat sugary food.',
      'You do not want to eat sugary food.',
    ],
    answer: 'Sugary food is forbidden for you.',
    tip: 'ne smjeti is a prohibition: you must not. "Do not have to" would be ne morate, "unable to" would be ne možete, and "do not want to" would be nećete.',
  },
  {
    mode: 'znacenje',
    q: 'Kako ćete reći prijatelju da NIJE obavezno doći u devet?',
    en: 'How do you tell a friend that it is NOT necessary to come at nine?',
    opts: [
      'Ne moraš doći u devet.',
      'Ne smiješ doći u devet.',
      'Ne možeš doći u devet.',
      'Nećeš doći u devet.',
    ],
    answer: 'Ne moraš doći u devet.',
    tip: 'ne moraš takes away the obligation: you do not have to. Ne smiješ forbids it, Ne možeš says he is unable to, and Nećeš says he will not or does not want to.',
  },

  // ── molba ─────────────────────────────────────────────────────────────────
  {
    mode: 'molba',
    q: 'U vlaku je vruće. Kako ćete uljudno zamoliti nepoznatu gospođu?',
    en: 'It is hot on the train. How do you politely ask a woman you do not know?',
    opts: [
      'Biste li otvorili prozor, molim Vas?',
      'Otvori prozor!',
      'Moraš otvoriti prozor.',
      'Hoću otvoren prozor.',
    ],
    answer: 'Biste li otvorili prozor, molim Vas?',
    tip: 'A question with the conditional and Vi (Biste li otvorili…?) plus molim Vas is a polite request. "Otvori prozor!" is a bare order in the ti form, "Moraš…" tells her what she must do, and "Hoću…" is a demand.',
  },
  {
    mode: 'molba',
    q: 'Oprostite, nisam čuo Vaše ime. ____ li ga ponoviti?',
    en: 'Sorry, I did not catch your name. Could you repeat it?',
    opts: ['Možete', 'Možeš', 'Mogu', 'Moraju'],
    answer: 'Možete',
    tip: '"Vaše ime" shows you are saying Vi, so the request is Možete li…? Možeš is the ti form for a friend, Mogu li would ask whether I may repeat it, and Moraju is about other people.',
  },
  {
    mode: 'molba',
    q: 'Dobar dan, ovdje Ivan Šimić. ____ li razgovarati s gospođom Pejić?',
    en: 'Hello, this is Ivan Šimić. May I speak with Mrs. Pejić?',
    opts: ['Mogu', 'Možeš', 'Moram', 'Hoću'],
    answer: 'Mogu',
    tip: 'On the phone you ask for someone with Mogu li…? (May I…?). Možeš li would ask the other person whether they can, Moram li asks whether I have to, and Hoću li asks whether I will.',
  },
  {
    mode: 'molba',
    q: 'Gost u kafiću želi biti uljudan: „Dobar dan, ____ kavu s mlijekom, molim.“',
    en: 'A guest in a café wants to be polite: "Hello, I would like a coffee with milk, please."',
    opts: ['htio bih', 'hoću', 'moram', 'smijem'],
    answer: 'htio bih',
    tip: 'The conditional htio bih (I would like) is the soft way to order. hoću sounds like a demand, and moram and smijem need an infinitive and say must and may, not a wish.',
  },
  {
    mode: 'molba',
    q: 'Ana kaže konobaru: „____ čašu vode, molim Vas.“',
    en: 'Ana says to the waiter: "I would like a glass of water, please."',
    opts: ['Htjela bih', 'Htio bih', 'Htjeli bih', 'Htjela bi'],
    answer: 'Htjela bih',
    tip: 'Ana is a woman speaking about herself: htjela + bih. Htio bih is what a man says, Htjeli is a plural form that does not go with bih, and bi is the form for you (ti) or for him and her, not for I.',
  },
  {
    mode: 'molba',
    q: 'Oprostite, gospodine, biste li mi ____ pomoći? Tražim kolodvor.',
    en: 'Excuse me, sir, could you help me? I am looking for the station.',
    opts: ['mogli', 'možete', 'mogu', 'moći'],
    answer: 'mogli',
    tip: 'After biste comes the -l form, and with Vi it is the plural mogli even for one man: Biste li mi mogli pomoći? možete and mogu are present forms and moći is the infinitive; none of them can follow biste.',
  },
  {
    mode: 'molba',
    q: 'Bi li mi ____ donijeti bilježnicu, Martina?',
    en: 'Could you bring me the notebook, Martina?',
    opts: ['mogla', 'mogao', 'mogli', 'možeš'],
    answer: 'mogla',
    tip: 'Bi li + the -l form, and Martina is one woman you say ti to: mogla. mogao is for a man, mogli is the plural used with biste, and možeš is a present form that cannot follow bi.',
  },
  {
    mode: 'molba',
    q: 'Umjesto naredbe „Zatvori vrata!“ možete reći blaže:',
    en: 'Instead of the order "Close the door!" you can say more gently:',
    opts: [
      'Možeš li zatvoriti vrata, molim te?',
      'Moraš zatvoriti vrata.',
      'Ne smiješ zatvoriti vrata.',
      'Hoćeš zatvoriti vrata.',
    ],
    answer: 'Možeš li zatvoriti vrata, molim te?',
    tip: 'A question with moći plus molim te turns the order into a request. "Moraš…" is still an order, "Ne smiješ…" forbids closing the door, and "Hoćeš…" is a statement that you want to, not a request.',
  },
  {
    mode: 'molba',
    q: 'Liječnica uljudno savjetuje pacijenta: „____ popiti tabletu.“',
    en: 'The doctor politely advises her patient: "You should take a pill."',
    opts: ['Trebali biste', 'Trebali bismo', 'Trebao bih', 'Trebala bi'],
    answer: 'Trebali biste',
    tip: 'Polite advice to someone you say Vi to is the conditional: Trebali biste. Trebali bismo means we should, Trebao bih means I should (a man speaking), and Trebala bi is about a woman, not about this patient.',
  },
];
