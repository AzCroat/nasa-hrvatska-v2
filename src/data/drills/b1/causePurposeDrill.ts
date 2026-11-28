// src/data/drills/b1/causePurposeDrill.ts
//
// B1 BECAUSE AND IN ORDER TO — the drill for the `cause-purpose` lesson
// (B1 position 44).
//
// Three modes, nine items each:
//   uzrok   — the cause: jer, zato što and budući da take a clause, zbog takes a noun in
//             the genitive
//   namjera — the aim: da bih / da bi / da bismo + a participle, da + the present, radi,
//             and the infinitive after a verb of motion
//   smjer   — which way the sentence points: zato što and the cause, zato, zbog toga and
//             stoga and the result
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — 28 ("kad se ispričavamo zbog kašnjenja"), 46
//   ("Mnogi Hrvati jako vole primati posjete. Zato često zovu prijatelje i poznanike u
//   svoj dom.", "Nije pristojno odbiti jelo i piće da se domaćini ne uvrijede"), 65
//   ("Volontiram jer volim druženja i putovanja", "Zato ovo radim. Ali i zato što mogu
//   upoznati različite ljude"), 67 ("zato što su kuće skupe"), 79 ("Zato vozi sporije"),
//   80 ("Zbog toga nastaju velike gužve na gradskim cestama"), 81 ("To je valjda zbog
//   proljeća"), 104 ("Zbog sporta skoro uvijek nosi trenirku", "Anita kaže da je to samo
//   zato što više uči", "Zbog toga mora više raditi"), 116 ("ljudi rade sve više i više…
//   da bi sačuvali posao i da bi bolje živjeli", "U Švicarskoj ljudi žive da bi radili, a
//   u drugim zemljama ljudi rade da bi živjeli", "Konkurencija je vrlo velika"), 133 ("ne
//   zato što sam bio talent nego zato što sam jako želio nešto svirati").
//
// Where the book and the lesson differ:
//   - Budući da, kako bi, radi and stoga are not in the book; they come from the lesson
//     only. Four items.
//   - The book prints a purpose with plain da + the present (da se domaćini ne uvrijede)
//     next to da bi; the lesson allows both. Da and da bi, and da bi and kako bi, are
//     never offered against each other.
//   - Jer and zato što both mean "because" and are never offered against each other,
//     except at the start of a sentence, where the lesson allows zato što and budući da
//     but not jer.
//   - Zbog and radi: the lesson separates cause (zbog) from aim (radi). Zbog is widely
//     used for an aim too, so no sentence offers zbog as the wrong answer where radi is
//     right. The difference is asked once, as a question about what each word means.
//   - In the first person the lesson teaches da bih and da bismo. Da bi with ja or mi is
//     common in speech but not standard, and it is the wrong option in two items; in the
//     second one the tip says that da bi would be correct for oni.
//   - Grammar-order fence: the conditional forms are A2 material; the infinitive after a
//     verb of motion comes from the lesson just before. No reported speech (the next
//     lesson), no verbal adverbs, nothing from B2.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CAUSE_PURPOSE_MODE_LABELS: Record<string, string> = {
  uzrok: '❓ Jer ili zbog',
  namjera: '🎯 Da bih, radi',
  smjer: '↩️ Zato ili zato što',
};

export const CAUSE_PURPOSE_DRILL_DATA: ModeDrillItem[] = [
  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Martina skoro uvijek nosi trenirku ____ sporta.',
    en: 'Martina almost always wears a tracksuit because of sports.',
    opts: ['zbog', 'jer', 'zato što', 'budući da'],
    answer: 'zbog',
    tip: 'Sporta is a noun in the genitive with no verb, so the word is the preposition zbog. Jer, zato što and budući da are conjunctions: each needs a whole clause with its own verb.',
  },
  {
    mode: 'uzrok',
    q: 'Hrvati češće kupuju stanove nego kuće ____ su kuće skupe.',
    en: 'Croatians buy apartments more often than houses because houses are expensive.',
    opts: ['zato što', 'zbog', 'zato', 'radi'],
    answer: 'zato što',
    tip: 'A clause with a verb (su kuće skupe) needs a conjunction: zato što. Zbog and radi are prepositions and take a noun in the genitive. Zato alone means "that is why" and introduces the result, not the cause.',
  },
  {
    mode: 'uzrok',
    q: 'Ispričavamo se zbog ____.',
    en: 'We apologize for being late.',
    opts: ['kašnjenja', 'kašnjenje', 'kašnjenju', 'što kasnimo'],
    answer: 'kašnjenja',
    tip: 'Zbog takes the genitive: zbog kašnjenja. Kašnjenje is the nominative and kašnjenju the dative. A clause cannot follow zbog directly; with a clause the sentence would be Ispričavamo se što kasnimo, without zbog.',
  },
  {
    mode: 'uzrok',
    q: '____ nemaju puno novca, Igor mora sam zarađivati.',
    en: 'Since they do not have much money, Igor has to earn his own.',
    opts: ['Budući da', 'Jer', 'Zbog', 'Zato'],
    answer: 'Budući da',
    tip: 'Budući da introduces a cause and can open the sentence. Jer cannot open one; it only follows the main half. Zbog needs a noun in the genitive, not a clause, and zato introduces a result.',
  },
  {
    mode: 'uzrok',
    q: 'Ne idem na izlet jer ____.',
    en: 'I am not going on the trip because I am sick.',
    opts: ['sam bolestan', 'bolesti', 'bolest', 'moje bolesti'],
    answer: 'sam bolestan',
    tip: 'Jer is followed by a whole clause with its own verb: jer sam bolestan. Bolesti, bolest and moje bolesti are nouns with no verb; a noun goes with zbog (zbog bolesti).',
  },
  {
    mode: 'uzrok',
    q: 'Ne idem na izlet zbog ____.',
    en: 'I am not going on the trip because of an illness.',
    opts: ['bolesti', 'sam bolestan', 'bolest', 'bolešću'],
    answer: 'bolesti',
    tip: 'Zbog is followed by a noun in the genitive, with no verb: zbog bolesti. Sam bolestan is a clause and goes with jer. Bolest is the nominative and bolešću the instrumental.',
  },
  {
    mode: 'uzrok',
    q: 'Koja je rečenica pravilna?',
    en: 'Which sentence is correct?',
    opts: [
      'Ne radimo zbog praznika.',
      'Ne radimo jer praznika.',
      'Ne radimo zbog je praznik.',
      'Ne radimo zbog praznik.',
    ],
    answer: 'Ne radimo zbog praznika.',
    tip: 'Zbog + a noun in the genitive: zbog praznika. Jer wants a clause with a verb (jer je praznik), not a bare noun. Zbog cannot take a clause, and after zbog the noun cannot stay in the nominative.',
  },
  {
    mode: 'uzrok',
    q: 'Iza koje riječi NE može stajati cijela rečenica s glagolom?',
    en: 'Which word cannot be followed by a whole clause with a verb?',
    opts: ['zbog', 'jer', 'zato što', 'budući da'],
    answer: 'zbog',
    tip: 'Zbog is a preposition and takes a noun in the genitive: zbog kiše. Jer, zato što and budući da are conjunctions, and a clause is exactly what follows them: jer pada kiša.',
  },
  {
    mode: 'uzrok',
    q: 'Najčešće jednim automobilom putuje jedna osoba. Zbog ____ nastaju velike gužve.',
    en: 'Most often one person rides in one car. Because of that, big traffic jams build up.',
    opts: ['toga', 'to', 'tom', 'tim'],
    answer: 'toga',
    tip: 'Zbog takes the genitive, and the genitive of to is toga: zbog toga, "because of that". To is the nominative, tom the locative and tim the instrumental.',
  },

  // ── namjera ───────────────────────────────────────────────────────────────
  {
    mode: 'namjera',
    q: 'Ljudi rade sve više ____ sačuvali posao.',
    en: 'People work more and more in order to keep their jobs.',
    opts: ['da bi', 'zbog', 'zato', 'budući da'],
    answer: 'da bi',
    tip: 'An aim is da bi + a participle: da bi sačuvali. Zbog takes a noun, not a participle. Zato introduces a result, and budući da gives a cause and needs a full verb, not a bare participle.',
  },
  {
    mode: 'namjera',
    q: 'Štedim novac da ____ kupila stan.',
    en: 'I am saving money in order to buy an apartment.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'The conditional form matches the subject, and for ja it is bih: da bih kupila. Bi is the form for ti, on, ona and oni; with ja it is common in speech but not standard. Bismo is for mi and biste for vi.',
  },
  {
    mode: 'namjera',
    q: 'Ustajemo rano da ____ stigli na prvi vlak.',
    en: 'We get up early so that we can catch the first train.',
    opts: ['bismo', 'bih', 'biste', 'bi'],
    answer: 'bismo',
    tip: 'The subject is mi, so bismo: da bismo stigli. Bih is for ja and biste for vi. Da bi stigli would be correct for oni; it would say that somebody else catches the train.',
  },
  {
    mode: 'namjera',
    q: 'U Švicarskoj ljudi žive da bi ____.',
    en: 'In Switzerland people live to work.',
    opts: ['radili', 'raditi', 'rade', 'radit'],
    answer: 'radili',
    tip: 'Bi is followed by the participle, which agrees with ljudi: da bi radili. Raditi is an infinitive and rade a present form; neither goes with bi. Radit is the shortened infinitive used only before ću, ćeš, će.',
  },
  {
    mode: 'namjera',
    q: 'Došao sam ____ razgovora o poslu.',
    en: 'I came for the purpose of a talk about the job.',
    opts: ['radi', 'jer', 'da bi', 'zato'],
    answer: 'radi',
    tip: 'Radi + the genitive names what you are aiming at: radi razgovora. Jer and da bi need a verb after them, not a noun. Zato means "that is why" and takes no noun either.',
  },
  {
    mode: 'namjera',
    q: 'Koja riječ gleda unaprijed, prema cilju?',
    en: 'Which word looks forward, toward an aim?',
    opts: ['radi', 'zbog', 'jer', 'budući da'],
    answer: 'radi',
    tip: 'Radi gives a purpose, something aimed at: radi razgovora. Zbog gives a cause, something that already happened: zbog gužve. Jer and budući da also give causes, and they take a clause.',
  },
  {
    mode: 'namjera',
    q: 'Nije pristojno odbiti jelo i piće ____ domaćini ne uvrijede.',
    en: 'It is not polite to refuse food and drink, so that the hosts do not take offense.',
    opts: ['da se', 'zbog se', 'zato se', 'radi se'],
    answer: 'da se',
    tip: 'An aim can be a clause with da + the present: da se domaćini ne uvrijede. Zbog and radi are prepositions and cannot open a clause. Zato would turn the hosts into a result instead of an aim.',
  },
  {
    mode: 'namjera',
    q: 'Idem u trgovinu ____ kruh.',
    en: 'I am going to the store to buy bread.',
    opts: ['kupiti', 'zbog kupiti', 'za kupiti', 'jer kupiti'],
    answer: 'kupiti',
    tip: 'After a verb of motion with the same subject, the aim is a plain infinitive: Idem kupiti. Zbog and za are prepositions and do not take an infinitive in standard Croatian. Jer needs a clause with a verb in a person.',
  },
  {
    mode: 'namjera',
    lead: 'Vježbam svaki dan da bih bio zdrav.',
    q: 'Što izriče drugi dio rečenice?',
    opts: [
      'the aim of the exercise',
      'the cause of the exercise',
      'a condition for the exercise',
      'a habit in the past',
    ],
    answer: 'the aim of the exercise',
    tip: 'Da bih + a participle says what something is for: being healthy is what the speaker is aiming at. A cause would be jer or zato što, a condition would be ako, and nothing here is in the past.',
  },

  // ── smjer ─────────────────────────────────────────────────────────────────
  {
    mode: 'smjer',
    q: 'Mnogi Hrvati vole primati posjete. ____ često zovu prijatelje u svoj dom.',
    en: 'Many Croatians love having visitors. That is why they often invite friends over.',
    opts: ['Zato', 'Zato što', 'Jer', 'Zbog'],
    answer: 'Zato',
    tip: 'Zato alone points back at the reason just given and introduces the result. Zato što and jer introduce the cause, which would turn the two sentences around. Zbog needs a noun in the genitive.',
  },
  {
    mode: 'smjer',
    q: 'Anita kaže da ima dobre ocjene samo ____ više uči.',
    en: 'Anita says she has good grades only because she studies more.',
    opts: ['zato što', 'zato', 'zbog', 'stoga'],
    answer: 'zato što',
    tip: 'Studying more is the cause, and a cause with a verb takes zato što. Zato and stoga introduce a result ("that is why", "therefore"). Zbog needs a noun, not the clause više uči.',
  },
  {
    mode: 'smjer',
    lead: 'Vozač razgovara mobitelom. Zato vozi sporije.',
    q: 'Što je uzrok?',
    opts: [
      'talking on the phone',
      'driving more slowly',
      'the car itself',
      'nothing; the two are not linked',
    ],
    answer: 'talking on the phone',
    tip: 'Zato means "that is why": what comes before it is the cause, and what follows it is the result. Driving more slowly is the result here. The car is not mentioned, and zato does link the two sentences.',
  },
  {
    mode: 'smjer',
    q: '____ sam umoran, idem ranije spavati.',
    en: 'Because I am tired, I am going to bed earlier.',
    opts: ['Zato što', 'Zato', 'Jer', 'Zbog'],
    answer: 'Zato što',
    tip: 'Zato što introduces the cause and can open the sentence. Zato alone would introduce a result. Jer cannot open a sentence, and zbog needs a noun in the genitive, not sam umoran.',
  },
  {
    mode: 'smjer',
    q: 'Konkurencija je vrlo velika; ____ mladi moraju rano planirati karijeru.',
    en: 'Competition is very strong; therefore young people have to plan their careers early.',
    opts: ['stoga', 'zato što', 'jer', 'zbog'],
    answer: 'stoga',
    tip: 'Stoga is the formal "therefore": it introduces the result. Zato što and jer introduce a cause and would reverse the meaning. Zbog is a preposition and needs a noun in the genitive.',
  },
  {
    mode: 'smjer',
    q: 'Što znači „zato“ kad stoji bez „što“?',
    en: 'What does zato mean on its own, without što?',
    opts: [
      '"that is why": it introduces the result',
      '"because": it introduces the cause',
      '"in order to": it introduces the aim',
      '"although": it introduces an obstacle',
    ],
    answer: '"that is why": it introduces the result',
    tip: 'Zato alone introduces the consequence: Pada kiša, zato ostajem doma. "Because" is zato što, "in order to" is da bih or kako bih, and "although" is iako.',
  },
  {
    mode: 'smjer',
    q: '— Zašto ne jedeš meso? — ____ sam vegetarijanka.',
    en: 'Why do you not eat meat? — Because I am a vegetarian.',
    opts: ['Zato što', 'Zato', 'Zbog', 'Stoga'],
    answer: 'Zato što',
    tip: 'The answer to zašto gives the cause, so zato što. Zato and stoga introduce a result and need the cause before them. Zbog needs a noun in the genitive, not a clause.',
  },
  {
    mode: 'smjer',
    q: 'Koja rečenica ima isto značenje kao „Ostajem kod kuće zato što pada kiša“?',
    en: 'Which sentence means the same as "I am staying home because it is raining"?',
    opts: [
      'Pada kiša, zato ostajem kod kuće.',
      'Ostajem kod kuće, zato pada kiša.',
      'Pada kiša zato što ostajem kod kuće.',
      'Ostajem kod kuće da bi padala kiša.',
    ],
    answer: 'Pada kiša, zato ostajem kod kuće.',
    tip: 'The rain is the cause and staying home is the result: cause + zato + result. The second and third sentences make staying home the cause of the rain, and da bi padala kiša would make rain the aim.',
  },
  {
    mode: 'smjer',
    q: 'Učim hrvatski ne zato što moram, ____ volim taj jezik.',
    en: 'I am learning Croatian not because I have to but because I love the language.',
    opts: ['nego zato što', 'nego zato', 'ali zato', 'nego zbog'],
    answer: 'nego zato što',
    tip: 'The first cause is denied and the true one replaces it: ne zato što… nego zato što…. Nego zato drops što, so no cause follows. Ali is not used after a denial, and zbog needs a noun, not volim.',
  },
];
