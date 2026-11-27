// src/data/drills/b2/aspectSuffixesDrill.ts
//
// B2 MAKING VERBS IMPERFECTIVE AGAIN — the drill for the `aspect-suffixes` lesson
// (B2 position 3).
//
// Three modes, nine items each:
//   par     — picking the secondary imperfective out of its look-alikes: -ivati,
//             -avati, and -ati with a changed stem (zapisivati, zaključavati, odgađati)
//   izbor   — choosing the member of the pair that the sentence needs: in progress,
//             lasting or repeated against one finished act
//   prezent — the present of these verbs: -ivati → -ujem, -avati → -avam, davati →
//             dajem, and the -vati verbs that keep -am (dobivam, otkrivam)
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 38 (the present of verbs in -ivati, -ovati,
//   -evati → -ujem: pokazivati, upisivati, zahvaljivati…; and the group -ivati → -ivam:
//   pozivati, otkrivati, pokrivati), 56–58 (GLAGOLSKI VID: imperfective and perfective
//   verbs; a perfective present cannot say what is happening now; "Nove kulture
//   obogaćuju / obogate postojeću kulturu"), 58–60 (adverbs with each aspect: stalno,
//   mjesecima, godinama against odjednom, odmah; "Kuhala je ručak 2 sata" against
//   "Skuhala je ručak za dva sata"), 117 (pairs: izučavati — izučiti, proučavati —
//   proučiti, poučavati — poučiti).
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — the "V. GLAGOLSKI VID" practice
//   blocks, which print the pairs and make the learner choose: 32–33 (dočekivati —
//   dočekati, doseljavati se — doseliti se, iscrpljivati — iscrpiti, izrezivati —
//   izrezati, iskorištavati — iskoristiti), 58–59 (nagomilavati — nagomilati), 114–115
//   (opskrbljivati — opskrbiti, optuživati — optužiti, obnavljati — obnoviti, odgađati
//   — odgoditi, otkopčavati — otkopčati, otplaćivati — otplatiti), 160–161 (pretjerivati
//   — pretjerati), 184 (procjenjivati — procijeniti), 250–251 (završavati — završiti,
//   zaključavati — zaključati, zarađivati — zaraditi).
//
// Where the books and the lesson differ:
//   - Neither book has a rule box for the suffixes. The textbook explains what the two
//     aspects mean; the grammar book only prints the pairs and practices them. The
//     account of -ivati, -avati, -vati, -ovati and -ati with a changed stem comes from
//     the lesson, and the pairs and sentences come from the books.
//   - The textbook allows a perfective present for habits (Svaki dan popijem jednu
//     kavu, Uvijek ona plati račun) and says an imperfective is possible there too. The
//     lesson gives only the imperfective for habits. So no item sets the two aspects
//     against each other after uvijek, često or svaki dan in the present; the izbor
//     items use upravo, sada, stalno, a stretch of time (pet minuta, već 20 godina, još
//     27 godina) or one finished act in the past.
//   - The textbook lists a second present type, -ivati → -ivam (otkrivati, pozivati,
//     pokrivati). The lesson shows it only with dobivati. One item follows the book.
//   - Zaključivati (to conclude) is a real verb beside zaključavati (to lock). It is
//     offered as wrong only where the sentence is about locking, and the tip says so.
//   - Grammar-order fence: the present forms are the ones in the lesson's own table (the
//     full -ujem lesson comes later); no aspect after phase verbs or modals, no aspect
//     in negation or commands, no passive, no conditional, no verbal adverbs.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ASPECT_SUFFIXES_MODE_LABELS: Record<string, string> = {
  par: '🔄 Parnjak: -ivati, -avati',
  izbor: '⚖️ Traje ili je gotovo?',
  prezent: '🗣️ Prezent: -ujem, -avam',
};

export const ASPECT_SUFFIXES_DRILL_DATA: ModeDrillItem[] = [
  // ── par ───────────────────────────────────────────────────────────────────
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to note down“?',
    opts: ['zapisivati', 'zapisati', 'zapisavati', 'zapisovati'],
    answer: 'zapisivati',
    tip: 'The perfective zapisati gets the suffix -ivati: zapisivati, to note down as a habit or right now. Zapisati itself is perfective, one finished act. Zapisavati and zapisovati use suffixes this verb does not take.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to pay off (a loan)“?',
    opts: ['otplaćivati', 'otplatiti', 'otplativati', 'otplaćati'],
    answer: 'otplaćivati',
    tip: 'Otplatiti → otplaćivati: the suffix is -ivati, and t softens to ć, as in platiti → plaćati. Otplatiti is the perfective. Otplativati leaves out the softening. Otplaćati copies plaćati, but with this prefix the verb takes -ivati.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to lock“?',
    opts: ['zaključavati', 'zaključati', 'zaključivati', 'zaključovati'],
    answer: 'zaključavati',
    tip: 'Zaključati → zaključavati, with the suffix -avati. Zaključati is the perfective. Zaključivati is a real verb, but it is the partner of zaključiti and means "to conclude". Zaključovati is not a verb.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to postpone“?',
    opts: ['odgađati', 'odgoditi', 'odgodivati', 'odgođivati'],
    answer: 'odgađati',
    tip: 'Some pairs change the stem and take plain -ati: odgoditi → odgađati, with o → a and d → đ, like otvoriti → otvarati. Odgoditi is the perfective. Odgodivati and odgođivati force -ivati onto a verb that does not take it.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to renovate“?',
    opts: ['obnavljati', 'obnoviti', 'obnovivati', 'obnovljati'],
    answer: 'obnavljati',
    tip: 'Obnoviti → obnavljati: the vowel changes (o → a), v becomes vlj, and the ending is -ati. Obnoviti is the perfective. Obnovivati forces -ivati onto it. Obnovljati has the soft consonant but not the vowel change.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to explain“?',
    opts: ['objašnjavati', 'objasniti', 'objasnivati', 'objasnjavati'],
    answer: 'objašnjavati',
    tip: 'Objasniti → objašnjavati: the suffix is -avati, n softens to nj, and s becomes š before it. Objasniti is the perfective. Objasnivati uses the wrong suffix and no softening. Objasnjavati leaves the s unchanged.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to cut out“?',
    opts: ['izrezivati', 'izrezati', 'izrežavati', 'izrezovati'],
    answer: 'izrezivati',
    tip: 'Izrezati → izrezivati, with -ivati, the same pattern as zapisati → zapisivati. Izrezati is the perfective. Izrežavati and izrezovati are not words; they use suffixes this verb does not take.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to accuse“?',
    opts: ['optuživati', 'optužiti', 'optužjivati', 'optužovati'],
    answer: 'optuživati',
    tip: 'Optužiti → optuživati, with -ivati. Optužiti is the perfective. Optužjivati and optužovati are not words; they use suffixes this verb does not take.',
  },
  {
    mode: 'par',
    q: 'Koji je od ovih oblika nesvršeni glagol sa značenjem „to estimate“?',
    opts: ['procjenjivati', 'procijeniti', 'procijenivati', 'procjenavati'],
    answer: 'procjenjivati',
    tip: 'Procijeniti → procjenjivati: the suffix is -ivati, n softens to nj, and the long ije shortens to je. Procijeniti is the perfective. Procijenivati keeps the stem unchanged. Procjenavati uses a suffix this verb does not take.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'U zgradu se stalno ____ novi stanari.',
    en: 'New tenants keep moving into the building.',
    opts: ['doseljavaju', 'dosele', 'doseliti', 'doseljavati'],
    answer: 'doseljavaju',
    tip: 'Stalno (all the time) describes something repeated, and the present for that is imperfective: doseljavaju. Dosele is a perfective present and cannot describe what keeps happening now. Doseliti and doseljavati are infinitives.',
  },
  {
    mode: 'izbor',
    q: '____ smo se sokovima i pivom, tulum može početi!',
    en: 'We have stocked up on juice and beer, the party can start!',
    opts: ['Opskrbili', 'Opskrbljivali', 'Opskrbiti', 'Opskrbljujemo'],
    answer: 'Opskrbili',
    tip: 'The party can start because the job is done: one finished act, so the perfective opskrbili. Opskrbljivali would say only that the stocking up was going on, with no result. Opskrbiti is an infinitive, and opskrbljujemo is a present form that cannot stand with smo.',
  },
  {
    mode: 'izbor',
    q: 'Kredit ću ____ još 27 godina.',
    en: 'I will be paying off the loan for another 27 years.',
    opts: ['otplaćivati', 'otplatiti', 'otplaćujem', 'otplatio'],
    answer: 'otplaćivati',
    tip: 'A stretch of time with no "za" (još 27 godina) means the action lasts, so the verb is imperfective: otplaćivati. Otplatiti is one finished act and would need "za 27 godina". Otplaćujem and otplatio are finite forms and cannot follow ću.',
  },
  {
    mode: 'izbor',
    q: 'Dijete je u vrtiću ____ jaknu pet minuta, a majci se žurilo na posao.',
    en: 'The child spent five minutes unbuttoning his jacket, and his mother was in a hurry.',
    opts: ['otkopčavalo', 'otkopčalo', 'otkopčati', 'otkopčava'],
    answer: 'otkopčavalo',
    tip: 'Pet minuta says how long the action went on, and that takes the imperfective: otkopčavalo. The perfective otkopčalo is one finished act and goes with "za pet minuta". Otkopčati is an infinitive, and otkopčava is a present form that cannot stand with je.',
  },
  {
    mode: 'izbor',
    q: 'Nitko ne zna koliko Karla sada ____.',
    en: 'Nobody knows how much Karla earns now.',
    opts: ['zarađuje', 'zaradi', 'zarađivati', 'zaraditi'],
    answer: 'zarađuje',
    tip: 'Sada points at the present moment, and what holds now is said with an imperfective present: zarađuje. Zaradi is a perfective present and cannot describe the current state. Zarađivati and zaraditi are infinitives.',
  },
  {
    mode: 'izbor',
    q: 'Prošle je godine Karla ____ ukupno sto tisuća eura.',
    en: 'Last year Karla earned a total of one hundred thousand euros.',
    opts: ['zaradila', 'zarađivala', 'zaraditi', 'zarađuje'],
    answer: 'zaradila',
    tip: 'Ukupno (in total) gives the final sum, a finished result, so the verb is perfective: zaradila. Zarađivala describes the earning as it went on and does not go with a total. Zaraditi is an infinitive, and zarađuje is a present form that cannot stand with je.',
  },
  {
    mode: 'izbor',
    q: 'Djed i baka ____ stare stvari u garaži već 20 godina.',
    en: 'Grandpa and Grandma have been piling up old things in the garage for 20 years.',
    opts: ['nagomilavaju', 'nagomilaju', 'nagomilati', 'nagomilali'],
    answer: 'nagomilavaju',
    tip: 'Već 20 godina describes something that has lasted until now, so the present is imperfective: nagomilavaju. Nagomilaju is a perfective present and cannot describe what is still going on. Nagomilati is an infinitive, and nagomilali has no auxiliary.',
  },
  {
    mode: 'izbor',
    q: 'Sad si zaista ____!',
    en: 'Now you have really gone too far!',
    opts: ['pretjerao', 'pretjerivao', 'pretjerati', 'pretjeruješ'],
    answer: 'pretjerao',
    tip: 'The speaker reacts to one act that has just been completed, so the verb is perfective: pretjerao. Pretjerivao would describe a habit in the past and does not fit sad. Pretjerati is an infinitive, and pretjeruješ is a present form that cannot stand with si.',
  },
  {
    mode: 'izbor',
    q: 'Nazvat ću te poslije, upravo ____ važan posao.',
    en: 'I will call you later, I am just finishing an important job.',
    opts: ['završavam', 'završim', 'završiti', 'završio'],
    answer: 'završavam',
    tip: 'Upravo (right now) means the action is in progress, and only an imperfective present can say that: završavam. Završim is a perfective present; it works after čim or kad, not for what is happening now. Završiti is an infinitive, and završio has no auxiliary.',
  },

  // ── prezent ───────────────────────────────────────────────────────────────
  {
    mode: 'prezent',
    q: 'Na predavanju sve ____ u bilježnicu.',
    en: 'In class I note everything down in my notebook.',
    opts: ['zapisujem', 'zapisivam', 'zapisivujem', 'zapisam'],
    answer: 'zapisujem',
    tip: 'Verbs in -ivati swap -iva- for -uj- in the present: zapisivati → zapisujem. Zapisivam keeps the infinitive stem. Zapisivujem has both -iv- and -uj-. Zapisam is not a form; the perfective present is zapišem.',
  },
  {
    mode: 'prezent',
    q: 'Svaku večer ____ vrata dvaput.',
    en: 'Every evening I lock the door twice.',
    opts: ['zaključavam', 'zaključujem', 'zaključavajem', 'zaključavem'],
    answer: 'zaključavam',
    tip: 'Verbs in -avati keep the stem and take -am: zaključavati → zaključavam. Zaključujem is the present of zaključivati and means "I conclude". Zaključavajem and zaključavem use endings this group does not have.',
  },
  {
    mode: 'prezent',
    q: 'Baka nam uvijek ____ previše kolača.',
    en: 'Grandma always gives us too many cakes.',
    opts: ['daje', 'dava', 'davaje', 'davuje'],
    answer: 'daje',
    tip: 'Davati is the odd one: it drops -va- in the present, davati → dajem, daje. Dava keeps the infinitive stem. Davaje adds the ending to the full stem. Davuje copies the -ujem pattern, which this verb does not follow.',
  },
  {
    mode: 'prezent',
    q: 'Svaki mjesec ____ plaću petnaestoga.',
    en: 'Every month I get my salary on the fifteenth.',
    opts: ['dobivam', 'dobivujem', 'dobivajem', 'dobivem'],
    answer: 'dobivam',
    tip: 'Dobivati is built on dobiti + -vati, so the -iv- is not the suffix -ivati and the verb keeps -am: dobivam. Dobivujem forces the -ujem pattern onto it. Dobivajem and dobivem use endings this verb does not have.',
  },
  {
    mode: 'prezent',
    q: 'Profesor nam strpljivo ____ pravila.',
    en: 'The teacher patiently explains the rules to us.',
    opts: ['objašnjava', 'objašnjuje', 'objašnjavaje', 'objašnjive'],
    answer: 'objašnjava',
    tip: 'Verbs in -avati keep the stem: objašnjavati → objašnjavam, objašnjava. Objašnjuje forces the -ujem pattern onto an -avati verb. Objašnjavaje and objašnjive are not present forms.',
  },
  {
    mode: 'prezent',
    q: 'Zašto mi to ____ tek sada?',
    en: 'Why are you showing me this only now?',
    opts: ['pokazuješ', 'pokazivaš', 'pokazivuješ', 'pokazaješ'],
    answer: 'pokazuješ',
    tip: 'Pokazivati → pokazujem, pokazuješ: -iva- becomes -uj-. Pokazivaš keeps the infinitive stem. Pokazivuješ has both -iv- and -uj-. Pokazaješ is not a form of this verb.',
  },
  {
    mode: 'prezent',
    q: '____ me ova vrućina!',
    en: 'This heat is wearing me out!',
    opts: ['Iscrpljuje', 'Iscrpljiva', 'Iscrpljivuje', 'Iscrpljivaje'],
    answer: 'Iscrpljuje',
    tip: 'Iscrpljivati → iscrpljujem, iscrpljuje: -iva- becomes -uj-. Iscrpljiva keeps the infinitive stem. Iscrpljivuje has both -iv- and -uj-, and iscrpljivaje adds the ending to the full stem.',
  },
  {
    mode: 'prezent',
    q: 'Znanstvenici svake godine ____ nove vrste.',
    en: 'Scientists discover new species every year.',
    opts: ['otkrivaju', 'otkruju', 'otkrivuju', 'otkrivaje'],
    answer: 'otkrivaju',
    tip: 'Otkrivati is built on otkriti + -vati, like dobivati, so it keeps -am: otkrivam, otkrivaju. Otkruju and otkrivuju force the -ujem pattern onto it. Otkrivaje is not a present form.',
  },
  {
    mode: 'prezent',
    q: 'Mi taj kredit ____ već deset godina.',
    en: 'We have been paying off that loan for ten years.',
    opts: ['otplaćujemo', 'otplaćivamo', 'otplaćivujemo', 'otplaćamo'],
    answer: 'otplaćujemo',
    tip: 'Otplaćivati → otplaćujem, otplaćujemo: -iva- becomes -uj-. Otplaćivamo keeps the infinitive stem. Otplaćivujemo has both -iv- and -uj-. Otplaćamo would belong to a verb otplaćati, which is not the one used.',
  },
];
