// src/data/drills/b2/aspectNegationDrill.ts
//
// B2 ASPECT IN NEGATION AND COMMANDS — the drill for the `aspect-negation` lesson
// (B2 position 12).
//
// Three modes, nine items each:
//   nijek   — a negated statement: a negated imperfective denies the activity, a
//             negated perfective denies the result; what holds now or for months is
//             imperfective; dok ne (until) takes a perfective
//   zabrana — telling someone not to: ne + an imperfective imperative, nemoj / nemojmo /
//             nemojte + an infinitive, and nothing between ne and the verb
//   nalog   — telling someone to, and asking: one act now is perfective, an activity in
//             general is imperfective
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 58 (imperfective verbs mean a process and
//   perfective verbs a result; a perfective present cannot say what is happening now;
//   "Mjesecima ne dobivaju plaću"), 60 ("Ne idem odavde dok svoju misiju ne izvršim"
//   beside "Ne odlazim dok izvršavam svoju misiju"), 201 (the place of ne: "Ne jedi
//   čokoladu! / Čokoladu ne jedi!"), 202 (bans and commands: nemoj, nemojmo, nemojte;
//   "Nemoj pisati pismo. / Ne piši pismo." and "Nemoj napisati pismo.").
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — the "V. GLAGOLSKI VID" practice
//   blocks, where the learner picks one member of a pair: 32–33 ("Zadatak glasi:
//   dopunite rečenice!"), 45 ("Molim vas, nemojte bacati to kamenje"), 58–59 ("Dobri
//   učitelji potiču, a ne obeshrabruju učenike"; "nemoj se obeshrabriti"), 115 ("Nikako
//   ne mogu otkopčati ovu košulju!"), 135 ("Molim te, pojačaj tu prekrasnu pjesmu!",
//   "Podsjeti me, molim te, kako joj se zove muž", "Ne podnosim tu groznu glazbu!"),
//   160–161 ("Molim te, ne pretjeruj!"), 184 ("Dođi! Prođi ovuda, kraće je"), 211
//   ("Dugo smo raspravljali o problemu, ali ništa nismo raspravili"), 250–251 ("Molim
//   te, sad odmah zaključaj sef da poslije ne zaboraviš").
//
// Where the books and the lesson differ:
//   - Neither book has a rule box for aspect under negation or in commands. The rules
//     (nisam čitao / nisam pročitao, general against one-time commands, permission)
//     come from the lesson; the books supply the sentences they are practiced on.
//   - The lesson calls nemoj + an imperfective infinitive the standard negative
//     command. The textbook prints both Nemoj pisati pismo and Nemoj napisati pismo,
//     and the grammar book has "nemoj se obeshrabriti". So no item sets the two aspects
//     against each other after nemoj; nemoj items test the infinitive and the person.
//   - After ne, both books print only imperfective imperatives (Ne piši, Ne jedi, ne
//     pretjeruj). A perfective imperative is offered as wrong after ne only in items
//     built on those book sentences, never with zaboraviti or pasti, where it is in
//     common use as a warning.
//   - The textbook allows a perfective present for habits (Svaki dan popijem jednu
//     kavu), so no item sets the aspects against each other after uvijek, nikad or
//     svaki dan in the present.
//   - Mogu li otvoriti prozor? and Smijem li otvarati prozore? are both standard, as
//     the lesson says. The two are never offered against each other; the permission
//     items ask what a given sentence means.
//   - The lesson's part on imati / nemati with the genitive is not in this drill; the
//     drill keeps to aspect.
//   - Grammar-order fence: no se-passive or participles, no conditional, no verbal
//     adverbs, no clitic-order questions, no "Da nisi…!" ban (negation-advanced).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ASPECT_NEGATION_MODE_LABELS: Record<string, string> = {
  nijek: '🚫 Nisam čitao / nisam pročitao',
  zabrana: '✋ Ne viči! Nemoj pisati!',
  nalog: '👉 Jedi! Pojačaj! Smijem li?',
};

export const ASPECT_NEGATION_DRILL_DATA: ModeDrillItem[] = [
  // ── nijek ─────────────────────────────────────────────────────────────────
  {
    mode: 'nijek',
    lead: 'Nisam pročitao tu knjigu.',
    q: 'Što je govornik rekao o sebi i knjizi?',
    opts: [
      'He did not get through it; he may have started.',
      'He read it and did not like it.',
      'He is not reading it right now.',
      'He is not going to read it.',
    ],
    answer: 'He did not get through it; he may have started.',
    tip: 'A negated perfective denies the result: the book was not read to the end. To deny the activity itself you negate the imperfective: Nisam čitao tu knjigu. The sentence is in the past, so it is not about now or about the future.',
  },
  {
    mode: 'nijek',
    lead: 'Nisam polagala ispit.',
    q: 'Što je studentica rekla?',
    opts: [
      'She did not take the exam at all.',
      'She took the exam and failed it.',
      'She took the exam and passed it.',
      'She is taking the exam right now.',
    ],
    answer: 'She did not take the exam at all.',
    tip: 'Polagati is imperfective, and a negated imperfective denies the whole activity: she never sat the exam. "Took it and failed" is the negated perfective, Nisam položila ispit. Nothing here says she passed, and the sentence is in the past.',
  },
  {
    mode: 'nijek',
    q: 'Na njezinu je tanjuru ostalo pola porcije. Što ćete reći?',
    opts: ['Nije pojela sve.', 'Nije jela ništa.', 'Neće jesti ništa.', 'Ne jede ništa.'],
    answer: 'Nije pojela sve.',
    tip: 'She ate some but did not finish, so you deny the result with the perfective: nije pojela sve. Nije jela ništa denies the activity: no eating at all. Neće jesti is the future and ne jede the present, but the meal is over.',
  },
  {
    mode: 'nijek',
    q: 'Dugo smo razgovarali o problemu, ali ništa nismo ____.',
    en: 'We talked about the problem for a long time but settled nothing.',
    opts: ['raspravili', 'raspravljali', 'raspraviti', 'raspravljaju'],
    answer: 'raspravili',
    tip: 'The talking happened; what is missing is the result, so the perfective is negated: ništa nismo raspravili. Raspravljali would deny the talking itself and contradict the first half. Raspraviti is an infinitive, and raspravljaju is a present form that cannot follow nismo.',
  },
  {
    mode: 'nijek',
    q: 'Nikako ne mogu ____ ovu košulju!',
    en: 'I just cannot get this shirt unbuttoned!',
    opts: ['otkopčati', 'otkopčavati', 'otkopčam', 'otkopčao'],
    answer: 'otkopčati',
    tip: 'The speaker is failing to reach one result, the shirt open, so the perfective follows ne mogu: otkopčati. Otkopčavati is the activity, done over and over, and that is not what is failing here. Otkopčam and otkopčao are finite forms and cannot follow mogu.',
  },
  {
    mode: 'nijek',
    q: 'Radnici mjesecima ne ____ plaću.',
    en: 'The workers have not been getting paid for months.',
    opts: ['dobivaju', 'dobiju', 'dobiti', 'dobili'],
    answer: 'dobivaju',
    tip: 'Mjesecima (for months) describes something that lasts, and that takes the imperfective, negated or not: ne dobivaju. Dobiju is a perfective present and cannot describe a lasting situation. Dobiti is an infinitive, and dobili has no auxiliary.',
  },
  {
    mode: 'nijek',
    q: 'Ne ____ tu groznu glazbu!',
    en: 'I cannot stand that awful music!',
    opts: ['podnosim', 'podnosiš', 'podnijeti', 'podnio'],
    answer: 'podnosim',
    tip: 'What is true right now is said with an imperfective present, and negation does not change that: ne podnosim. Podnosiš is the wrong person for the speaker, podnijeti is an infinitive, and podnio has no auxiliary.',
  },
  {
    mode: 'nijek',
    q: 'Ne idem odavde dok svoju misiju ne ____.',
    en: 'I am not leaving here until I complete my mission.',
    opts: ['izvršim', 'izvršavam', 'izvršiti', 'izvršio'],
    answer: 'izvršim',
    tip: 'Dok ne means "until", and the point it waits for is a finished act: dok ne izvršim. With the imperfective izvršavam the clause would mean "while I am not carrying it out". Izvršiti is an infinitive, and izvršio has no auxiliary.',
  },
  {
    mode: 'nijek',
    q: 'Dobri učitelji potiču, a ne ____ učenike.',
    en: 'Good teachers encourage their students; they do not discourage them.',
    opts: ['obeshrabruju', 'obeshrabre', 'obeshrabriti', 'obeshrabrili'],
    answer: 'obeshrabruju',
    tip: 'A general truth in the present is imperfective, like potiču beside it: ne obeshrabruju. Obeshrabre is a perfective present, which cannot state what generally holds in a simple sentence. Obeshrabriti is an infinitive, and obeshrabrili has no auxiliary.',
  },

  // ── zabrana ───────────────────────────────────────────────────────────────
  {
    mode: 'zabrana',
    q: 'Nikad ne pospremam stan, kažeš?! Molim te, ne ____!',
    en: 'I never clean the apartment, you say?! Please do not exaggerate!',
    opts: ['pretjeruj', 'pretjeraj', 'pretjerivati', 'pretjeruješ'],
    answer: 'pretjeruj',
    tip: 'After ne the imperative is imperfective: ne pretjeruj. The perfective pretjeraj is not used for this ban. Pretjerivati is an infinitive, which would need nemoj. Pretjeruješ is a present form and makes a statement, not a command.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ na mene, nisam ja kriv!',
    en: 'Do not yell at me, it is not my fault!',
    opts: ['viči', 'vikni', 'vikati', 'vičeš'],
    answer: 'viči',
    tip: 'A ban with ne takes the imperfective imperative: ne viči. Vikni is perfective, one single shout, and is not used after ne here. Vikati is an infinitive, which would need nemoj. Vičeš is a present form, a statement.',
  },
  {
    mode: 'zabrana',
    q: 'Nemoj ____ pismo.',
    en: 'Do not write the letter.',
    opts: ['pisati', 'piši', 'pišeš', 'pisao'],
    answer: 'pisati',
    tip: 'Nemoj is followed by an infinitive: nemoj pisati. Piši is an imperative; it goes with ne (Ne piši pismo), not with nemoj. Pišeš and pisao are finite forms and cannot follow nemoj.',
  },
  {
    mode: 'zabrana',
    q: 'Molim vas, ____ bacati to kamenje.',
    en: 'Please do not throw those stones.',
    opts: ['nemojte', 'nemoj', 'nemojmo', 'nemate'],
    answer: 'nemojte',
    tip: 'Molim vas speaks to several people or to one person politely, so the form is nemojte. Nemoj is for one person you call ti. Nemojmo includes the speaker: let us not. Nemate means "you do not have" and is not a command.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ se, stići ćemo na vrijeme.',
    en: 'Do not worry, we will get there on time.',
    opts: ['brini', 'zabrini', 'brinuti', 'brineš'],
    answer: 'brini',
    tip: 'Ne + the imperfective imperative: ne brini se. Zabrini is perfective (to start worrying) and is not used after ne. Brinuti is an infinitive, which would need nemoj. Brineš is a present form, a statement.',
  },
  {
    mode: 'zabrana',
    q: 'Koja je zabrana pravilno složena?',
    opts: [
      'Nemoj zatvarati vrata.',
      'Nemoj zatvaraj vrata.',
      'Nemoj zatvaraš vrata.',
      'Ne nemoj zatvarati vrata.',
    ],
    answer: 'Nemoj zatvarati vrata.',
    tip: 'Nemoj + an infinitive, and nothing else. Nemoj zatvaraj puts two imperatives together. Nemoj zatvaraš has a present form after nemoj. Nemoj already contains the negation, so ne nemoj says it twice.',
  },
  {
    mode: 'zabrana',
    q: '____ se svađati pred djecom.',
    en: 'Let us not argue in front of the children.',
    opts: ['Nemojmo', 'Nemojte', 'Nemoj', 'Nećemo'],
    answer: 'Nemojmo',
    tip: '"Let us not" is nemojmo + an infinitive. Nemojte tells other people not to argue, and nemoj tells one person. Nećemo se svađati is a statement about the future, not a call to do something.',
  },
  {
    mode: 'zabrana',
    q: 'U kojoj je zapovijedi niječnica na pravom mjestu?',
    opts: ['Čokoladu ne jedi!', 'Čokoladu jedi ne!', 'Jedi ne čokoladu!', 'Ne više jedi čokoladu!'],
    answer: 'Čokoladu ne jedi!',
    tip: 'In the imperative ne stands directly in front of the verb, and no other word can come between them. The object may move to the front: Čokoladu ne jedi! In the other three sentences ne is cut off from jedi or stands after it.',
  },
  {
    mode: 'zabrana',
    q: 'Nije lako naučiti skijati u odrasloj dobi, ali nemoj se ____.',
    en: 'It is not easy to learn to ski as an adult, but do not get discouraged.',
    opts: ['obeshrabriti', 'obeshrabri', 'obeshrabriš', 'obeshrabrio'],
    answer: 'obeshrabriti',
    tip: 'Nemoj takes an infinitive, and a perfective one is fine when you warn against one outcome: nemoj se obeshrabriti. Obeshrabri is an imperative and cannot follow nemoj. Obeshrabriš and obeshrabrio are finite forms.',
  },

  // ── nalog ─────────────────────────────────────────────────────────────────
  {
    mode: 'nalog',
    q: 'Molim te, ____ tu prekrasnu pjesmu!',
    en: 'Please turn that beautiful song up!',
    opts: ['pojačaj', 'pojačavaj', 'pojačati', 'pojačaš'],
    answer: 'pojačaj',
    tip: 'A request for one act, now, takes the perfective imperative: pojačaj. Pojačavaj is imperfective and would ask for it to be done again and again. Pojačati is an infinitive. Pojačaš is a present form, not a command.',
  },
  {
    mode: 'nalog',
    q: '____ me, molim te, kako joj se zove muž.',
    en: 'Remind me, please, what her husband is called.',
    opts: ['Podsjeti', 'Podsjećaj', 'Podsjetiti', 'Podsjetiš'],
    answer: 'Podsjeti',
    tip: 'One act, once, right now: the perfective imperative podsjeti. Podsjećaj is imperfective and would mean "keep reminding me". Podsjetiti is an infinitive. Podsjetiš is a present form, not a command.',
  },
  {
    mode: 'nalog',
    q: 'Molim te, sad odmah ____ sef da poslije ne zaboraviš.',
    en: 'Please lock the safe right now so that you do not forget later.',
    opts: ['zaključaj', 'zaključavaj', 'zaključati', 'zaključao'],
    answer: 'zaključaj',
    tip: 'Sad odmah asks for one finished act, so the imperative is perfective: zaključaj. Zaključavaj is imperfective, a habit or a repeated act. Zaključati is an infinitive, and zaključao is a past form with no auxiliary.',
  },
  {
    mode: 'nalog',
    q: '____ polako, imamo vremena.',
    en: 'Eat slowly, we have time.',
    opts: ['Jedi', 'Pojedi', 'Jesti', 'Jedeš'],
    answer: 'Jedi',
    tip: 'Advice about how to do an activity takes the imperfective imperative: jedi polako. Pojedi is perfective and means "eat it up"; it needs a thing to finish. Jesti is an infinitive. Jedeš is a present form, a statement.',
  },
  {
    mode: 'nalog',
    q: 'Zadatak glasi: ____ rečenice!',
    en: 'The task reads: complete the sentences!',
    opts: ['Dopunite', 'Dopunjavajte', 'Dopuniti', 'Dopunili'],
    answer: 'Dopunite',
    tip: 'A task asks for a finished result, so the imperative is perfective: dopunite. Dopunjavajte is imperfective and would ask for the activity with no end point. Dopuniti is an infinitive, and dopunili is a past form with no auxiliary.',
  },
  {
    mode: 'nalog',
    q: 'Dođi! ____ ovuda, kraće je.',
    en: 'Come! Go through here, it is shorter.',
    opts: ['Prođi', 'Prolazi', 'Proći', 'Prošao'],
    answer: 'Prođi',
    tip: 'One specific act, like dođi before it: the perfective imperative prođi. Prolazi is imperfective, for passing through as a habit. Proći is an infinitive, and prošao is a past form with no auxiliary.',
  },
  {
    mode: 'nalog',
    q: 'Ne razumijem vas. ____ sporije, molim vas.',
    en: 'I do not understand you. Speak more slowly, please.',
    opts: ['Govorite', 'Progovorite', 'Govoriti', 'Govorili'],
    answer: 'Govorite',
    tip: 'An instruction about how to carry on an activity is imperfective: govorite sporije. Progovorite is perfective and means "start to speak", which cannot be done slowly. Govoriti is an infinitive, and govorili is a past form with no auxiliary.',
  },
  {
    mode: 'nalog',
    lead: 'Smijem li ovdje pušiti?',
    q: 'Što govornik pita?',
    opts: [
      'whether smoking is allowed here in general',
      'whether he may finish this one cigarette',
      'whether someone will smoke with him',
      'whether smoking used to be allowed here',
    ],
    answer: 'whether smoking is allowed here in general',
    tip: 'The imperfective pušiti names the activity as such, so the question is about what is allowed in this place. One finished act would need a perfective verb. The question is about the speaker, and it is in the present, not the past.',
  },
  {
    mode: 'nalog',
    lead: 'Mogu li otvoriti prozor?',
    q: 'Što govornik traži?',
    opts: [
      'permission for one act, now',
      'a general rule about the windows',
      'someone else to do it for him',
      'to know whether the window can be opened at all',
    ],
    answer: 'permission for one act, now',
    tip: 'The perfective otvoriti is one finished act: may I open the window, this once. A general rule would use the imperfective (Smijem li otvarati prozore?). Asking the other person to do it would be Možeš li…?, and the question is not about how the window works.',
  },
];
