// src/data/drills/b1/infinitiveVsDaDrill.ts
//
// B1 INFINITIVE OR "DA" — the drill for the `infinitive-vs-da` lesson
// (B1 position 43).
//
// Three modes, nine items each:
//   da       — da means "that" and is required after misliti, znati, reći, nadati se,
//              shvatiti
//   inf      — the plain infinitive after a modal, a verb of wanting or starting, and
//              after a verb of motion
//   subjekt  — the same subject takes the infinitive, a different subject takes a clause:
//              Želim doći. / Želim da dođeš.
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — the book has no rule for this; the drill is
//   built from the sentences it prints: 31 ("Nisam danas mogla doći na predavanje",
//   "Možeš li mi donijeti bilježnicu?", "Malo se bojim doći u hladnu kuću", "Ne moramo se
//   brinuti"), 46 ("trebamo pričekati da nas ponude više puta"), 53
//   ("mislim da je tu prije bio kip Madone", "Ljudi pričaju da se u blizini
//   utopio neki grof"), 81 ("Nadam se da će se tvojoj mami svidjeti Zagreb"), 90 ("Onda
//   sam shvatila da je to glumac Goran Višnjić!"), 96 ("Volio bih te bolje upoznati",
//   "Uvijek želi pomoći", "Rekla sam ti da nemam vremena večeras"), 104 ("Kažu da radi
//   kvalitetnije nego drugi studenti", "Igor mora sam zarađivati za školovanje"), 108
//   ("pazit ću da bude lijep"), 114 ("Jesi li znala da prosječan par dnevno razgovara
//   samo devet minuta?"), 128 ("Moram malo pospremiti ovaj nered"), 133 ("misli da će
//   biti vatrogasac", "počeo sam pisati roman").
//
// Where the book and the lesson differ:
//   - The lesson lists "feeling" among the verbs that take da. After veseliti se and
//     drago mi je the book prints što ("Veselimo se što ćemo doći", "Drago mi je što ćete
//     doći", page 33). Both are standard, so da is never tested against što after a verb
//     of feeling.
//   - The lesson names Moram da idem as Serbian usage. A Serbian form may not appear in
//     this app even as a wrong answer, so da + present after a modal or after željeti
//     with the same subject is never offered. The wrong options are other slips: da + an
//     infinitive (Moram da ići), a finite verb with no da, a participle, and za + an
//     infinitive.
//   - Misliti + an infinitive is standard with another meaning (Mislim doći, "I intend
//     to come"), so a bare infinitive is never offered as wrong after misliti.
//   - Grammar-order fence: no da bi or kako bi (purpose, the next lesson), no reported
//     questions or orders (two lessons later). Reported statements with da appear only as
//     the book prints them.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INFINITIVE_VS_DA_MODE_LABELS: Record<string, string> = {
  da: '📌 Da = that',
  inf: '♾️ Infinitiv',
  subjekt: '👥 Isti ili drugi subjekt',
};

export const INFINITIVE_VS_DA_DRILL_DATA: ModeDrillItem[] = [
  // ── da ────────────────────────────────────────────────────────────────────
  {
    mode: 'da',
    q: 'Mislim ____ je tu prije bio kip Madone.',
    en: 'I think a statue of the Madonna used to stand here.',
    opts: ['da', 'što', 'li', 'jer'],
    answer: 'da',
    tip: 'After misliti the clause is introduced by da, and it cannot be dropped the way English drops "that". Što does not introduce a clause after misliti. Li makes a question, and jer would give a reason.',
  },
  {
    mode: 'da',
    q: 'Može li se „da“ izostaviti iza glagola misliti, znati i reći?',
    en: 'Can da be left out after the verbs misliti, znati and reći?',
    opts: [
      'No, never. English drops "that"; Croatian keeps da.',
      'Yes, in everyday speech.',
      'Yes, when the subject stays the same.',
      'Yes, after a comma.',
    ],
    answer: 'No, never. English drops "that"; Croatian keeps da.',
    tip: 'Mislim da je dobro, Znam da dolaziš, Rekao je da će doći: da is required every time. It stays in speech, it stays when the subject is the same (Mislim da ću doći), and a comma does not replace it.',
  },
  {
    mode: 'da',
    q: 'Onda sam shvatila ____ glumac Goran Višnjić.',
    en: 'Then I realized it was the actor Goran Višnjić.',
    opts: ['da je to', 'je to', 'to biti', 'da to biti'],
    answer: 'da je to',
    tip: 'After shvatiti comes a full clause with da and its own verb: da je to glumac. Je to leaves out da. To biti and da to biti have an infinitive where the clause needs a real verb form.',
  },
  {
    mode: 'da',
    q: 'Šefovi kažu ____ Igor radi kvalitetnije nego drugi studenti.',
    en: 'The bosses say Igor does better work than the other students.',
    opts: ['da', 'što', 'koji', 'ili'],
    answer: 'da',
    tip: 'What somebody says is a clause with da: Kažu da radi. Što does not follow kazati in this meaning. Koji refers back to a noun, and ili means "or".',
  },
  {
    mode: 'da',
    q: 'Rekla sam ti ____ vremena večeras.',
    en: 'I told you I have no time tonight.',
    opts: ['da nemam', 'nemam', 'da nemati', 'nemati'],
    answer: 'da nemam',
    tip: 'Reći + da + a full clause: da nemam vremena. Nemam without da copies English, which can leave "that" out. Da nemati and nemati have an infinitive, and the clause needs a verb with its own person.',
  },
  {
    mode: 'da',
    q: 'Jesi li znala ____ prosječan par dnevno razgovara samo devet minuta?',
    en: 'Did you know that the average couple talks for only nine minutes a day?',
    opts: ['da', 'koji', 'zato', 'ili'],
    answer: 'da',
    tip: 'A fact somebody knows is a clause with da: znati da… Koji would have to refer back to a noun. Zato means "that is why", and ili means "or".',
  },
  {
    mode: 'da',
    q: 'Kako se kaže „I know you are tired“?',
    opts: ['Znam da si umoran.', 'Znam si umoran.', 'Znam biti umoran.', 'Znam da biti umoran.'],
    answer: 'Znam da si umoran.',
    tip: 'English leaves "that" out; Croatian cannot: Znam da si umoran. Znam si umoran has nothing joining the halves. Znam biti and znam da biti put an infinitive where a clause with its own subject is needed.',
  },
  {
    mode: 'da',
    q: 'Nadam se ____ ispit.',
    en: 'I hope I will pass the exam.',
    opts: ['da ću položiti', 'položiti', 'ću položiti', 'da položiti'],
    answer: 'da ću položiti',
    tip: 'After nadati se, da is required even when the subject stays the same: Nadam se da ću položiti. A bare infinitive is not used after nadati se. Ću položiti leaves out da, and da is never followed by an infinitive.',
  },
  {
    mode: 'da',
    q: 'Konobar je siguran ____ Sandra i Tom uživati u Opatiji.',
    en: 'The waiter is sure that Sandra and Tom will enjoy Opatija.',
    opts: ['da će', 'će', 'da', 'što'],
    answer: 'da će',
    tip: 'The clause needs da, and the infinitive uživati needs its future helper: da će… uživati. Će alone leaves out da. Da alone leaves uživati with no helping verb, and što does not introduce this clause.',
  },

  // ── inf ───────────────────────────────────────────────────────────────────
  {
    mode: 'inf',
    q: 'Nisam danas mogla ____ na predavanje.',
    en: 'I could not come to the lecture today.',
    opts: ['doći', 'dođem', 'došla', 'da doći'],
    answer: 'doći',
    tip: 'After a modal verb standard Croatian uses the plain infinitive: mogla doći. Dođem is a present form with nothing to join it. Došla is a participle, and da is never followed by an infinitive.',
  },
  {
    mode: 'inf',
    q: 'Marin je dobar i ljubazan. Uvijek želi ____.',
    en: 'Marin is kind and friendly. He always wants to help.',
    opts: ['pomoći', 'pomogne', 'pomogao', 'pomozi'],
    answer: 'pomoći',
    tip: 'The same person wants and helps, so the infinitive is enough: želi pomoći. Pomogne is a present form with nothing to join it. Pomogao is a participle, and pomozi is an order.',
  },
  {
    mode: 'inf',
    q: 'Kad sam imao deset godina, počeo sam ____ roman.',
    en: 'When I was ten, I started writing a novel.',
    opts: ['pisati', 'pišem', 'pisao', 'pisanje'],
    answer: 'pisati',
    tip: 'A verb of starting takes the infinitive: počeo sam pisati. Pišem is a present form and pisao a participle; neither can follow počeo sam. Pisanje is a noun and would not take roman as its object.',
  },
  {
    mode: 'inf',
    q: 'Idem ____ kruh i mlijeko.',
    en: 'I am going to buy bread and milk.',
    opts: ['kupiti', 'kupim', 'kupio', 'za kupiti'],
    answer: 'kupiti',
    tip: 'After a verb of motion the purpose is a plain infinitive: Idem kupiti. Kupim is a present form with nothing to join it, and kupio is a participle. Za kupiti copies "for to buy" and is not standard.',
  },
  {
    mode: 'inf',
    q: 'Koja je rečenica pravilna?',
    en: 'Which sentence is correct?',
    opts: [
      'Moram pospremiti sobu.',
      'Moram da pospremiti sobu.',
      'Moram pospremim sobu.',
      'Moram pospremila sobu.',
    ],
    answer: 'Moram pospremiti sobu.',
    tip: 'Morati + the plain infinitive. Moram da pospremiti puts a conjunction in front of an infinitive. Moram pospremim sets two present forms side by side, and pospremila is a participle.',
  },
  {
    mode: 'inf',
    q: 'Volio bih te bolje ____.',
    en: 'I would like to get to know you better.',
    opts: ['upoznati', 'upoznam', 'upoznao', 'upoznaj'],
    answer: 'upoznati',
    tip: 'Volio bih + the infinitive when the same person wishes and acts: upoznati. Upoznam is a present form with nothing to join it. Upoznao is a participle, and upoznaj is an order.',
  },
  {
    mode: 'inf',
    q: 'Možeš li mi ____ bilježnicu?',
    en: 'Can you bring me the notebook?',
    opts: ['donijeti', 'doneseš', 'donio', 'donesi'],
    answer: 'donijeti',
    tip: 'Moći is a modal, so the infinitive: Možeš li mi donijeti. Doneseš is a second present form, donio is a participle, and donesi is an order; none of them can follow možeš.',
  },
  {
    mode: 'inf',
    q: 'Iza kojega glagola dolazi infinitiv, a ne rečenica s „da“?',
    en: 'Which verb is followed by a plain infinitive, not by a clause with da?',
    opts: ['morati', 'reći', 'nadati se', 'shvatiti'],
    answer: 'morati',
    tip: 'A modal takes the infinitive: Moram ići. Reći, nadati se and shvatiti are verbs of saying, hoping and understanding, and they take a full clause with da.',
  },
  {
    mode: 'inf',
    q: 'Što je pogrešno u rečenici „Moram da ići“?',
    en: 'What is wrong with this sentence?',
    opts: [
      'A conjunction stands in front of an infinitive; it is just Moram ići.',
      'Moram cannot be followed by another verb.',
      'Ići needs se.',
      'Nothing is wrong.',
    ],
    answer: 'A conjunction stands in front of an infinitive; it is just Moram ići.',
    tip: 'Da opens a clause with a verb that has its own person; an infinitive has none. After a modal the infinitive follows directly: Moram ići. Morati is followed by other verbs all the time, and ići is not reflexive.',
  },

  // ── subjekt ───────────────────────────────────────────────────────────────
  {
    mode: 'subjekt',
    q: 'Želim ____ sutra na večeru.',
    en: 'I want you to come to dinner tomorrow.',
    opts: ['da dođeš', 'doći', 'te doći', 'da doći'],
    answer: 'da dođeš',
    tip: 'A different subject (I want, YOU come) needs a full clause: da dođeš. Doći alone means "I want to come". Te doći copies the English object "you", and da is never followed by an infinitive.',
  },
  {
    mode: 'subjekt',
    q: 'Želim ____ hrvatski.',
    en: 'I want to learn Croatian.',
    opts: ['naučiti', 'da naučiš', 'naučio', 'da naučiti'],
    answer: 'naučiti',
    tip: 'The same person wants and learns, so the infinitive: Želim naučiti. Da naučiš would mean "I want YOU to learn". Naučio is a participle, and da is never followed by an infinitive.',
  },
  {
    mode: 'subjekt',
    lead: 'Mama želi da pospremim sobu.',
    q: 'Tko će pospremiti sobu?',
    opts: ['I will; Mom wants me to.', 'Mom will.', 'Nobody will.', 'Mom and I together.'],
    answer: 'I will; Mom wants me to.',
    tip: 'Da pospremim has its own subject, ja, different from mama: she wants me to do it. "Mom will" would be the infinitive, Mama želi pospremiti sobu. Nothing is negated, and no "together" is said.',
  },
  {
    mode: 'subjekt',
    lead: 'Mama želi pospremiti sobu.',
    q: 'Tko će prema ovoj rečenici pospremiti sobu?',
    opts: ['Mom herself.', 'I will.', 'The children.', 'Nobody will.'],
    answer: 'Mom herself.',
    tip: 'An infinitive has no subject of its own; it shares the subject of želi, so Mom does the tidying. For somebody else the sentence would need a clause: Mama želi da pospremim (da djeca pospreme) sobu.',
  },
  {
    mode: 'subjekt',
    q: 'Trebamo pričekati ____ nas domaćini ponude.',
    en: 'We should wait for the hosts to offer.',
    opts: ['da', 'što', 'koji', 'i'],
    answer: 'da',
    tip: 'We wait, the hosts offer: a new subject needs a clause with da. Što does not introduce it. Koji would refer back to a noun, and i would only add a second statement.',
  },
  {
    mode: 'subjekt',
    q: 'Učiteljica želi da učenici ____ knjigu do petka.',
    en: 'The teacher wants the students to read the book by Friday.',
    opts: ['pročitaju', 'pročitati', 'pročitali', 'pročita'],
    answer: 'pročitaju',
    tip: 'Inside the da-clause the verb takes the person of its own subject, učenici: pročitaju. Da is never followed by an infinitive. Pročitali is a participle with no helping verb, and pročita is singular.',
  },
  {
    mode: 'subjekt',
    q: 'Kako se kaže „He wants us to help him“?',
    opts: ['Želi da mu pomognemo.', 'Želi nam pomoći.', 'Želi nas pomoći.', 'Želi da pomoći.'],
    answer: 'Želi da mu pomognemo.',
    tip: 'He wants, WE help: a different subject, so da + a verb in the mi form. Želi nam pomoći means "he wants to help us". Želi nas pomoći copies the English object, and da is never followed by an infinitive.',
  },
  {
    mode: 'subjekt',
    q: 'Kada iza glagola „željeti“ dolazi rečenica s „da“?',
    en: 'When is željeti followed by a clause with da?',
    opts: [
      'when the second verb has a different subject',
      'when the subject stays the same',
      'always',
      'never',
    ],
    answer: 'when the second verb has a different subject',
    tip: 'Different subject, a clause: Želim da dođeš. Same subject, the infinitive: Želim doći. So it is neither always nor never.',
  },
  {
    mode: 'subjekt',
    q: 'Tanja se boji ____ avionom.',
    en: 'Tanja is afraid to fly.',
    opts: ['letjeti', 'leti', 'letjela', 'da letjeti'],
    answer: 'letjeti',
    tip: 'Tanja is afraid and Tanja flies: the same subject, so the infinitive, as in Bojim se doći. Leti is a present form with nothing to join it. Letjela is a participle, and da is never followed by an infinitive.',
  },
];
