// src/data/drills/a2/presentDrill.ts
//
// A2 PRESENT TENSE CONJUGATION — the drill for the `present` lesson.
//
// Follows Razgovarajte s nama! A2–B1, lesson 2 "Kad će taj vikend", pages 30–31 (Tanja and
// Marin's weekend house and the phone call "Idemo svi u našu vikendicu!": idu, ima, živi,
// možeš li, hoćete li), page 34 (PONOVIMO ići: idem, ideš, ide, idemo, idete, idu), pages
// 36–38 (GRAMATIKA PREZENT: imati > imam, raditi and živjeti > radim, živim, vjerovati >
// vjerujem, penjati se > penjem se, pisati > pišem with s + j = š, k + j = č, z + j = ž) and
// page 39 ("Što ćemo jesti?": možemo, ne jedemo), with page 146 (peći: pečem … peku; jesti:
// jedem) and page 165 (davati > dajem).
//
// Where the book and the lesson differ: the book sorts verbs by how the infinitive turns
// into the present (-ati > -am, -iti/-jeti > -im, -ovati > -ujem, -ati > -em/-jem) and never
// prints a table for moći or htjeti, which it only uses in dialogues; the lesson teaches
// three classes (-am, -im, -em) and names ići, moći and htjeti as the irregular verbs. The
// book also teaches the present of doći (dođem) on page 34, but only inside kad/čim clauses
// with the future, which is later grammar, so doći appears here only as an infinitive.
//
// Three modes:
//   nepravilni — ići, moći, htjeti, jesti, peći in the right person
//   promjena   — the stem change (pišem, stanujem, dajem) and the oni endings (-aju, -e, -u)
//   uRazgovoru — answering in a dialogue and telling the right sentence from a wrong ending

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PRESENT_MODE_LABELS: Record<string, string> = {
  nepravilni: '⚡ Nepravilni glagoli',
  promjena: '🔀 Promjena osnove',
  uRazgovoru: '💬 U razgovoru',
};

export const PRESENT_DRILL_DATA: ModeDrillItem[] = [
  // ── nepravilni ────────────────────────────────────────────────────────────
  {
    mode: 'nepravilni',
    q: 'Tanja, kamo ti ____ za vikend? — Na selo, u vikendicu.',
    en: 'Tanja, where are you going for the weekend? — To the country, to the weekend house.',
    opts: ['ideš', 'idem', 'ide', 'idete'],
    answer: 'ideš',
    tip: 'ići does not keep its infinitive stem: idem, ideš, ide, idemo, idete, idu. The question says ti, so ideš. idem is I, ide is he or she, and idete goes with vi.',
  },
  {
    mode: 'nepravilni',
    q: 'Tanja i Marin često ____ na selo.',
    en: 'Tanja and Marin often go to the country.',
    opts: ['idu', 'ide', 'idemo', 'idete'],
    answer: 'idu',
    tip: 'Tanja and Marin are two people, so the oni form: idu. ide is for one person, idemo means we go, and idete means you (vi) go.',
  },
  {
    mode: 'nepravilni',
    q: 'Ja danas ne ____ doći na predavanje.',
    en: 'I cannot come to the lecture today.',
    opts: ['mogu', 'možeš', 'može', 'možemo'],
    answer: 'mogu',
    tip: 'moći is irregular: mogu, možeš, može, možemo, možete, mogu. The ja form keeps the g and ends in -u: mogu. možeš is you, može is he or she, and možemo is we.',
  },
  {
    mode: 'nepravilni',
    q: 'Ti ____ kupiti kruh, a ja ću kuhati.',
    en: 'You can buy the bread, and I will cook.',
    opts: ['možeš', 'mogu', 'može', 'možete'],
    answer: 'možeš',
    tip: 'After ti the form of moći is možeš: the g turns into ž before -eš. mogu is I (or they), može is he or she, and možete goes with vi.',
  },
  {
    mode: 'nepravilni',
    q: 'Tanja i Marin ____ zvati susjeda Ivana.',
    en: 'Tanja and Marin want to call their neighbor Ivan.',
    opts: ['hoće', 'hoćemo', 'hoćete', 'hoćeš'],
    answer: 'hoće',
    tip: 'htjeti goes hoću, hoćeš, hoće, hoćemo, hoćete, hoće: the oni form is hoće, the same as the on/ona form. hoćemo is we, hoćete is you (vi), and hoćeš is you (ti).',
  },
  {
    mode: 'nepravilni',
    q: '____ li vi ići s nama u vikendicu?',
    en: 'Do you (all) want to come with us to the weekend house?',
    opts: ['Hoćete', 'Hoćeš', 'Hoće', 'Hoćemo'],
    answer: 'Hoćete',
    tip: 'The subject is vi, so htjeti takes -ete: Hoćete li…? Hoćeš goes with ti, Hoće with he, she or they, and Hoćemo with we.',
  },
  {
    mode: 'nepravilni',
    q: 'Ja ____ kavu, hvala. Pijem samo čaj.',
    en: 'I do not want coffee, thanks. I drink only tea.',
    opts: ['neću', 'nećeš', 'neće', 'nećemo'],
    answer: 'neću',
    tip: 'The negative of htjeti is one word, and for ja it is neću. nećeš is you (ti), neće is he, she or they, and nećemo is we.',
  },
  {
    mode: 'nepravilni',
    q: 'Danijela je mala, ali već ____ meso.',
    en: 'Danijela is little, but she already eats meat.',
    opts: ['jede', 'jedem', 'jedeš', 'jedu'],
    answer: 'jede',
    tip: 'jesti gets a d in the present: jedem, jedeš, jede, jedemo, jedete, jedu. Danijela is one person, ona, so jede. jedem is I, jedeš is you, and jedu is they.',
  },
  {
    mode: 'nepravilni',
    q: 'Bako, što ti to ____? — Kruh.',
    en: 'Grandma, what are you baking? — Bread.',
    opts: ['pečeš', 'pečem', 'peče', 'peku'],
    answer: 'pečeš',
    tip: 'peći has č in the present: pečem, pečeš, peče. You are asking Grandma with ti, so pečeš. pečem is I, peče is he or she, and peku is they.',
  },
  {
    mode: 'nepravilni',
    q: 'Ja pečem meso, a Tanja i Marin ____ kukuruz.',
    en: 'I am grilling the meat, and Tanja and Marin are grilling the corn.',
    opts: ['peku', 'peče', 'pečemo', 'pečete'],
    answer: 'peku',
    tip: 'In the oni form peći goes back to k: peku. All the other forms have č: peče is one person, pečemo is we, and pečete is you (vi).',
  },

  // ── promjena ──────────────────────────────────────────────────────────────
  {
    mode: 'promjena',
    q: 'Martina svaki dan ____ poruku Tanji.',
    en: 'Martina writes a message to Tanja every day.',
    cue: 'pisati',
    opts: ['piše', 'pišem', 'pišeš', 'pišu'],
    answer: 'piše',
    tip: 'pisati changes s to š in every present form (s + j = š), and Martina is ona: piše. pišem is I, pišeš is you, and pišu is they.',
  },
  {
    mode: 'promjena',
    q: 'Gdje ti ____? — U centru, blizu fakulteta.',
    en: 'Where do you live? — Downtown, near the university.',
    cue: 'stanovati',
    opts: ['stanuješ', 'stanujem', 'stanuje', 'stanuju'],
    answer: 'stanuješ',
    tip: 'Verbs in -ovati swap -ova- for -uje-: stanujem, stanuješ, stanuje. With ti it is stanuješ. stanujem is I, stanuje is he or she, and stanuju is they.',
  },
  {
    mode: 'promjena',
    q: 'Tanja i Marin ____ susjedu Ivanu.',
    en: 'Tanja and Marin trust their neighbor Ivan.',
    cue: 'vjerovati',
    opts: ['vjeruju', 'vjeruje', 'vjerujemo', 'vjerujete'],
    answer: 'vjeruju',
    tip: 'vjerovati is an -ujem verb, and its oni form ends in -uju: vjeruju. vjeruje is for one person, vjerujemo is we, and vjerujete is you (vi).',
  },
  {
    mode: 'promjena',
    q: 'Tanja i Martina navečer ____ televiziju.',
    en: 'Tanja and Martina watch television in the evening.',
    cue: 'gledati',
    opts: ['gledaju', 'gleda', 'gledamo', 'gledate'],
    answer: 'gledaju',
    tip: 'Verbs like gledam and imam take -aju for oni: gledaju. gleda is one person, gledamo is we, and gledate is you (vi).',
  },
  {
    mode: 'promjena',
    q: 'Moji roditelji ____ na selu.',
    en: 'My parents live in the country.',
    cue: 'živjeti',
    opts: ['žive', 'živi', 'živimo', 'živite'],
    answer: 'žive',
    tip: 'Verbs in -im (živim, radim) take -e for oni: žive. živi is the form for one person, živimo is we, and živite is you (vi).',
  },
  {
    mode: 'promjena',
    q: 'Marin se u subotu ____ na brdo.',
    en: 'On Saturday Marin climbs the hill.',
    cue: 'penjati se',
    opts: ['penje', 'penjem', 'penješ', 'penju'],
    answer: 'penje',
    tip: 'penjati se is an -ati verb that takes the -em endings: penjem se, penješ se, penje se. Marin is on, so penje. penjem is I, penješ is you, and penju is they.',
  },
  {
    mode: 'promjena',
    q: 'Zašto ti ____? — Zato što je film tužan.',
    en: 'Why are you crying? — Because the movie is sad.',
    cue: 'plakati',
    opts: ['plačeš', 'plačem', 'plače', 'plaču'],
    answer: 'plačeš',
    tip: 'plakati changes k to č in the present (k + j = č): plačem, plačeš, plače. With ti it is plačeš. plačem is I, plače is he or she, and plaču is they.',
  },
  {
    mode: 'promjena',
    q: 'Baka uvijek ____ kolač Danijeli.',
    en: 'Grandma always gives a cake to Danijela.',
    cue: 'davati',
    opts: ['daje', 'dajem', 'daješ', 'daju'],
    answer: 'daje',
    tip: 'davati drops -va- and takes -jem: dajem, daješ, daje. Baka is ona, so daje. dajem is I, daješ is you, and daju is they.',
  },
  {
    mode: 'promjena',
    q: 'Glagol je „rezati“. Koji oblik ide uz „oni“?',
    en: 'The verb is "rezati" (to cut). Which form goes with "oni"?',
    opts: ['režu', 'reže', 'režemo', 'režete'],
    answer: 'režu',
    tip: 'rezati changes z to ž in the present (z + j = ž), and -em verbs take -u for oni: režu. reže is he or she, režemo is we, and režete is you (vi).',
  },

  // ── uRazgovoru ────────────────────────────────────────────────────────────
  {
    mode: 'uRazgovoru',
    q: '— Što radiš? — ____ mejl Josipu.',
    en: 'What are you doing? — I am writing an email to Josip.',
    opts: ['Pišem', 'Pišeš', 'Piše', 'Pišu'],
    answer: 'Pišem',
    tip: 'The question is in the ti form, but you answer about yourself, so the ja form: Pišem. Pišeš would say it about the person you are talking to, Piše is he or she, and Pišu is they.',
  },
  {
    mode: 'uRazgovoru',
    q: '— Gospodine Ivane, gdje Vi živite? — ____ na selu, blizu Rijeke.',
    en: 'Mr. Ivan, where do you live? — I live in the country, near Rijeka.',
    opts: ['Živim', 'Živiš', 'Živi', 'Žive'],
    answer: 'Živim',
    tip: 'He is asked with Vi but answers about himself with the ja form: Živim. Živiš is the ti form, Živi is he or she, and Žive is they.',
  },
  {
    mode: 'uRazgovoru',
    q: '— Hoćete li ti i Josip ići s nama? — Da, ____!',
    en: 'Do you and Josip want to come with us? — Yes, we do!',
    opts: ['hoćemo', 'hoćete', 'hoću', 'hoće'],
    answer: 'hoćemo',
    tip: 'A short answer repeats the verb, but in the person of the one who answers. "Ti i Josip" answer as we: hoćemo. hoćete just repeats the question, hoću is only I, and hoće is he, she or they.',
  },
  {
    mode: 'uRazgovoru',
    q: '— Ide li Josip s nama? — Ne ____, on radi i subotom.',
    en: 'Is Josip coming with us? — He cannot, he works on Saturdays too.',
    opts: ['može', 'mogu', 'možeš', 'možemo'],
    answer: 'može',
    tip: 'The answer is about Josip, on, so moći takes the form može. mogu is I or they, možeš is you, and možemo is we.',
  },
  {
    mode: 'uRazgovoru',
    q: '— Tanja, imate li ti i Marin vrt? — Da, ____ malen vrt.',
    en: 'Tanja, do you and Marin have a garden? — Yes, we have a small garden.',
    opts: ['imamo', 'imate', 'imam', 'imaju'],
    answer: 'imamo',
    tip: 'Tanja answers for herself and Marin, so the mi form: imamo. imate repeats the question form, imam would be Tanja alone, and imaju is they.',
  },
  {
    mode: 'uRazgovoru',
    q: 'Koji je odgovor pravilan? — Vjeruješ li Tanji?',
    en: 'Which answer is right? — Do you trust Tanja?',
    opts: ['Da, vjerujem joj.', 'Da, vjeruješ joj.', 'Da, vjeruje joj.', 'Da, vjeruju joj.'],
    answer: 'Da, vjerujem joj.',
    tip: 'You are asked with ti and answer with ja: vjerujem, with -ova- changed to -uje-. vjeruješ repeats the question form, vjeruje is he or she, and vjeruju is they.',
  },
  {
    mode: 'uRazgovoru',
    q: 'Samo je jedna rečenica točna. Koja?',
    en: 'Only one sentence is correct. Which one? (They can come tomorrow.)',
    opts: [
      'Oni mogu doći sutra.',
      'Oni može doći sutra.',
      'Oni možemo doći sutra.',
      'Oni možete doći sutra.',
    ],
    answer: 'Oni mogu doći sutra.',
    tip: 'The oni form of moći is mogu, the same as the ja form; it does not follow može. može is for one person, možemo goes with mi, and možete goes with vi.',
  },
  {
    mode: 'uRazgovoru',
    q: 'Koja rečenica nema pogrešku?',
    en: 'Which sentence has no mistake? (Marin and I eat meat.)',
    opts: [
      'Marin i ja jedemo meso.',
      'Marin i ja jedu meso.',
      'Marin i ja jedete meso.',
      'Marin i ja jede meso.',
    ],
    answer: 'Marin i ja jedemo meso.',
    tip: '"Marin i ja" together are mi, so the verb ends in -emo: jedemo. jedu is the oni form, jedete goes with vi, and jede is for one person.',
  },
  {
    mode: 'uRazgovoru',
    lead: 'Tanja i Marin stanuje u centru.',
    q: 'U rečenici je pogreška. Koji oblik treba stajati umjesto „stanuje“?',
    en: 'There is a mistake in the sentence. Which form should replace "stanuje"?',
    opts: ['stanuju', 'stanujem', 'stanuješ', 'stanujemo'],
    answer: 'stanuju',
    tip: 'Tanja and Marin are two people, so the verb needs the oni ending -uju: stanuju. stanuje is for one person; stanujem is I, stanuješ is you, and stanujemo is we.',
  },
];
