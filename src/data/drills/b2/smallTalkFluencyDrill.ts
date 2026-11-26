// src/data/drills/b2/smallTalkFluencyDrill.ts
//
// B2 CONVERSATIONAL FLUENCY — the drill for the `small-talk-fluency` lesson
// (B2 position 30).
//
// Three modes, nine items each:
//   postapalice — hesitating in Croatian: pa, ovaj, znaš, zapravo, baš
//   popravak    — keeping the conversation alive when a word will not come:
//                 Da razmislim, Nešto kao…, describing around the missing word
//   reakcije    — reacting while listening: Stvarno?, Ma nemoj!, I onda?, Jasno,
//                 Aha, Slažem se, Kako to misliš?
//
// Book pages (printed numbers):
//   Razgovarajte s nama! B2 textbook — 84 (razgovorni jezik: "za kolokvijalni govor
//   karakteristične su poštapalice (ovoga, ovaj, mislim, je li…)", and the note that
//   such language does not belong in official situations), 119 (POJAČAJNE ČESTICE:
//   pa, ma, baš in "Pa da!", "Ma daj!", "Ma nemoj!?", "baš je pretjerala").
//   Razgovarajte s nama! Gramatika i pravopis B2–C1 — thin: no conversation unit.
//   Used here: 116–117 (OBJASNIDBENI KONEKTORI: naime, ustvari, zapravo, to jest;
//   "Malo sam zadrijemao. Zapravo zaspao sam poslije ručka."), 238–239 (baš, čak).
//
// Where the books and the lesson differ:
//   - The textbook names fillers (poštapalice) in one sentence and warns that
//     colloquial language is out of place in offices, at universities and in the
//     media. The lesson encourages fillers as the quickest way to sound fluent. Both
//     are right for their setting, and one item carries the textbook's warning.
//   - Buying time, repair (Kako se ono kaže…, Nešto kao…) and listener reactions come
//     from the lesson only; neither book teaches them.
//   - The textbook's own list of fillers is ovoga, ovaj, mislim, je li; the lesson's
//     is pa, ovaj, znaš, zapravo, u biti, kako da kažem. The drill uses the lesson's
//     list plus the particles the textbook explains (pa, ma, baš).
//   - Grammar-order fence: no passive, no participial adjectives, no verbal nouns, no
//     reported speech, no verbal adverbs. The only conditional is the lesson's own
//     fixed phrase Kako bih to rekao… No zar ne tags (they belong to position 52).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SMALL_TALK_FLUENCY_MODE_LABELS: Record<string, string> = {
  postapalice: '💭 Poštapalice',
  popravak: '🛠️ Kad riječ ne dolazi',
  reakcije: '👂 Reakcije slušatelja',
};

export const SMALL_TALK_FLUENCY_DRILL_DATA: ModeDrillItem[] = [
  // ── postapalice ───────────────────────────────────────────────────────────
  {
    mode: 'postapalice',
    q: 'Kojom poštapalicom govornik uključuje sugovornika, kao englesko „you know“?',
    opts: ['znaš', 'ovaj', 'pa', 'zapravo'],
    answer: 'znaš',
    tip: 'Znaš… is literally "you know…" and pulls the listener in. Ovaj is pure hesitation, like "um". Pa opens an answer, like "well", and zapravo means "actually".',
  },
  {
    mode: 'postapalice',
    q: 'Malo sam zadrijemao. ____, spavao sam dva sata.',
    en: 'I dozed off a little. Actually, I slept for two hours.',
    opts: ['Zapravo', 'Jasno', 'I onda', 'Ma nemoj'],
    answer: 'Zapravo',
    tip: 'Zapravo corrects or sharpens what you have just said. Jasno, I onda? and Ma nemoj! are things a listener says in reaction to someone else, not ways to correct yourself.',
  },
  {
    mode: 'postapalice',
    q: 'Što govornik radi kad kaže „Pa, kako da kažem…“?',
    opts: [
      'buys a moment to think without going silent',
      'ends the conversation',
      'asks the listener to repeat',
      'says that he strongly disagrees',
    ],
    answer: 'buys a moment to think without going silent',
    tip: 'Pa and kako da kažem are two fillers in a row: they hold the turn while the speaker looks for words. They do not close the conversation, they are not a request to repeat, and they carry no disagreement.',
  },
  {
    mode: 'postapalice',
    q: 'Koja je poštapalica čisto oklijevanje, kao englesko „um“?',
    opts: ['ovaj', 'znaš', 'zapravo', 'u biti'],
    answer: 'ovaj',
    tip: 'Ovaj… in the middle of a sentence is pure hesitation with no meaning of its own. Znaš addresses the listener. Zapravo (actually) and u biti (basically) both add a shade of meaning.',
  },
  {
    mode: 'postapalice',
    q: 'Koja rečenica zvuči tečno, bez tišine i bez engleskog?',
    opts: [
      'Pa, ovaj… nije baš jeftino.',
      'Well… nije baš jeftino.',
      'Um, like… nije baš jeftino.',
      'Sorry… nije baš jeftino.',
    ],
    answer: 'Pa, ovaj… nije baš jeftino.',
    tip: 'The Croatian hesitation sounds are pa and ovaj. "Well", "um, like" and "sorry" are English fillers; in the middle of a Croatian sentence they pull the listener out of it.',
  },
  {
    mode: 'postapalice',
    q: 'Gdje poštapalice poput „ovaj“ i „mislim“ treba izbjegavati?',
    opts: [
      'u službenom govoru, na primjer na radiju',
      'u razgovoru s prijateljima',
      'kod kuće, s obitelji',
      'u kafiću, uz kavu',
    ],
    answer: 'u službenom govoru, na primjer na radiju',
    tip: 'Fillers belong to colloquial, spontaneous speech. In official situations (offices, the university, the media) that register is out of place. With friends, at home and over coffee they are exactly what makes you sound natural.',
  },
  {
    mode: 'postapalice',
    q: '— Je li film bio dobar? — ____, ne bih rekao.',
    en: '"Was the film good?" "Well, I would not say so."',
    opts: ['Pa', 'Ma nemoj', 'I onda', 'Jasno'],
    answer: 'Pa',
    tip: 'Pa opens an answer that needs a moment, like English "well". Ma nemoj! expresses surprise at news. I onda? asks for the rest of a story, and Jasno says you have understood; none of them starts your own opinion.',
  },
  {
    mode: 'postapalice',
    q: 'Što riječ „pa“ znači na početku odgovora?',
    opts: [
      'Ništa određeno: samo otvara odgovor.',
      'Znači „ne“.',
      'Znači „možda“.',
      'Znači „zato“.',
    ],
    answer: 'Ništa određeno: samo otvara odgovor.',
    tip: 'Pa at the start of an answer carries no meaning of its own; it fills the pause while you think. It does not mean no, maybe or because, so the answer after it can go either way: Pa, da. / Pa, ne.',
  },
  {
    mode: 'postapalice',
    lead: 'Nije baš jednostavno.',
    q: 'Što ovdje radi riječ „baš“?',
    opts: [
      'softens the denial: "not exactly simple"',
      'means "never"',
      'means "too"',
      'turns the sentence into a question',
    ],
    answer: 'softens the denial: "not exactly simple"',
    tip: 'Baš means "really, exactly", so nije baš is "not exactly", a gentle way to say something is hard. "Never" is nikad and "too" is the prefix pre- or previše. Baš does not make a question.',
  },

  // ── popravak ──────────────────────────────────────────────────────────────
  {
    mode: 'popravak',
    q: 'Ne možete se sjetiti riječi „otvarač“. Što je najbolje reći?',
    opts: [
      'Kako se ono kaže… ono za otvaranje boca?',
      'Ništa, samo šutjeti i čekati.',
      'How do you say "opener"?',
      'Nije važno, zaboravi.',
    ],
    answer: 'Kako se ono kaže… ono za otvaranje boca?',
    tip: 'Saying the gap out loud in Croatian and describing the thing keeps you in the conversation, and the listener supplies the word. Silence and switching to English end the exchange, and giving up drops your own sentence.',
  },
  {
    mode: 'popravak',
    q: 'Ne mogu se sjetiti ____ onog glumca.',
    en: 'I cannot remember the name of that actor.',
    cue: 'ime',
    opts: ['imena', 'ime', 'imenu', 'imenom'],
    answer: 'imena',
    tip: 'Sjetiti se takes the genitive: sjetiti se imena. Ime is the nominative or accusative, which English "remember the name" suggests. Imenu is the dative or locative and imenom the instrumental.',
  },
  {
    mode: 'popravak',
    q: 'Da ____ na trenutak.',
    en: 'Let me think for a moment.',
    opts: ['razmislim', 'razmisliti', 'razmislio', 'razmišljam'],
    answer: 'razmislim',
    tip: 'The fixed phrase is Da razmislim: da + the present of perfective razmisliti, first person. An infinitive cannot follow da. Razmislio is a past participle, and razmišljam (imperfective) is not used in this phrase.',
  },
  {
    mode: 'popravak',
    q: 'Ne znate riječ „tržnica“. Kako je najbolje opisati?',
    opts: [
      'Nešto kao velika trgovina na otvorenom, s voćem i povrćem.',
      'Ne znam tu riječ.',
      'To je… ne mogu.',
      'Ono, znaš… ma ništa.',
    ],
    answer: 'Nešto kao velika trgovina na otvorenom, s voćem i povrćem.',
    tip: 'Nešto kao… plus a description gives the listener enough to supply the word. The other three stop at the gap: they say that a word is missing but give no clue which one.',
  },
  {
    mode: 'popravak',
    q: 'Sugovornik vam je rekao riječ koju ste tražili. Kako nastaviti?',
    opts: [
      'Da, baš to! Dakle, kao što sam rekao…',
      'Zašto me prekidate?',
      'Nije važno, zaboravite.',
      'Sorry, I will say it in English.',
    ],
    answer: 'Da, baš to! Dakle, kao što sam rekao…',
    tip: 'Accept the word (Da, baš to!) and carry on; that is what a repaired conversation looks like. Treating the help as an interruption is rude. Giving up or switching to English throws away the help you just got.',
  },
  {
    mode: 'popravak',
    q: 'Koja rečenica otvoreno kaže da trebate malo vremena?',
    opts: ['Samo malo, da razmislim.', 'Stvarno?', 'Ma nemoj!', 'Slažem se.'],
    answer: 'Samo malo, da razmislim.',
    tip: 'Samo malo, da razmislim buys time honestly. Stvarno? and Ma nemoj! react to what someone else said. Slažem se expresses agreement, not a need to think.',
  },
  {
    mode: 'popravak',
    q: 'Nešto ____ mali čekić za meso.',
    en: 'Something like a small hammer for meat.',
    opts: ['kao', 'kako', 'koji', 'što'],
    answer: 'kao',
    tip: 'A comparison with a noun takes kao: nešto kao čekić. Kako means "how" and introduces a clause. Koji and što are relative words and would need a verb after them.',
  },
  {
    mode: 'popravak',
    q: 'Tražite riječ „ručnik“. Koji opis najviše pomaže sugovorniku?',
    opts: [
      'Ono čime se brišeš kad izađeš iz mora.',
      'Ona stvar, znaš već.',
      'Nešto što imaš kod kuće.',
      'Ne znam, zaboravio sam.',
    ],
    answer: 'Ono čime se brišeš kad izađeš iz mora.',
    tip: 'A useful description says what the thing is for: ono čime se brišeš. "That thing, you know" and "something you have at home" fit a hundred objects. Saying you forgot gives the listener nothing to work with.',
  },
  {
    mode: 'popravak',
    q: 'Kako ____ to rekla… posao je zanimljiv, ali naporan.',
    en: 'How would I put it… the job is interesting but tiring. (a woman speaking)',
    opts: ['bih', 'sam', 'ću', 'budem'],
    answer: 'bih',
    tip: 'The fixed time-buying phrase is Kako bih to rekao / rekla…, with the conditional bih. Sam would make it a past question (How did I say it?). Ću does not combine with rekla, and budem belongs after ako or kad.',
  },

  // ── reakcije ──────────────────────────────────────────────────────────────
  {
    mode: 'reakcije',
    q: '— Dobila sam posao u Splitu! — ____ Čestitam!',
    opts: ['Stvarno?', 'Šteta.', 'Da razmislim.', 'Nešto kao…'],
    answer: 'Stvarno?',
    tip: 'Stvarno? (Really?) shows surprise and interest at good news. Šteta is "what a pity", the wrong feeling here. Da razmislim and Nešto kao… are for buying time and describing, not for reacting.',
  },
  {
    mode: 'reakcije',
    q: 'Koja kratka riječ pokazuje da pratite, a ne prekida govornika?',
    opts: ['Aha.', 'Čekaj!', 'Dosta.', 'Oprostite, ali…'],
    answer: 'Aha.',
    tip: 'Aha is listener noise: it costs nothing and tells the speaker you are following. Čekaj! and Oprostite, ali… take the turn away. Dosta tells the speaker to stop.',
  },
  {
    mode: 'reakcije',
    q: '— …i tada je konobar donio račun. — ____? Što je bilo dalje?',
    opts: ['I onda', 'Slažem se', 'Da razmislim', 'Nešto kao'],
    answer: 'I onda',
    tip: 'I onda? (And then?) pushes the story on. Slažem se is agreement with an opinion, and there is no opinion here. Da razmislim and Nešto kao are things a speaker says, not a listener.',
  },
  {
    mode: 'reakcije',
    q: 'Kako to ____?',
    en: 'What do you mean?',
    opts: ['misliš', 'mislim', 'misli', 'misliti'],
    answer: 'misliš',
    tip: 'You ask the person in front of you, so the verb is in the second person: Kako to misliš? Mislim would be asking yourself. Misli is "he or she means", and the infinitive cannot be the verb of the question.',
  },
  {
    mode: 'reakcije',
    q: 'Zašto je dobro reći „aha“ ili „jasno“ dok netko govori?',
    opts: [
      'Jer šutnja u hrvatskom razgovoru može izgledati kao neslaganje ili dosada.',
      'Jer se tako pristojno mijenja tema.',
      'Jer se tako govornika moli da prestane.',
      'Jer se tako pokazuje da znate više od govornika.',
    ],
    answer: 'Jer šutnja u hrvatskom razgovoru može izgledati kao neslaganje ili dosada.',
    tip: 'In Croatian conversation the listener is expected to make noise every few sentences; attentive silence can read as skepticism or boredom. Aha and jasno do not change the topic, stop the speaker or show off.',
  },
  {
    mode: 'reakcije',
    q: 'Koja reakcija pokazuje da ste razumjeli objašnjenje?',
    opts: ['Jasno.', 'I onda?', 'Stvarno?', 'Kako to misliš?'],
    answer: 'Jasno.',
    tip: 'Jasno (Right, I see) confirms that you have understood. I onda? asks for more of the story. Stvarno? shows surprise, and Kako to misliš? says that you have not understood yet.',
  },
  {
    mode: 'reakcije',
    q: '— Mislim da je vlak bolji od autobusa. — ____ se. Udobniji je.',
    en: '"I think the train is better than the bus." "I agree. It is more comfortable."',
    opts: ['Slažem', 'Slažeš', 'Slaže', 'Složiti'],
    answer: 'Slažem',
    tip: 'You speak for yourself, so the verb is in the first person: Slažem se. Slažeš se would be "you agree" and slaže se "he or she agrees". The infinitive složiti cannot stand alone as an answer.',
  },
  {
    mode: 'reakcije',
    q: 'Koja reakcija izražava iznenađenje?',
    opts: ['Ma nemoj!', 'Jasno.', 'Slažem se.', 'Da, da.'],
    answer: 'Ma nemoj!',
    tip: 'Ma nemoj! is "You do not say!", a reaction to surprising news. Jasno means you have understood. Slažem se and Da, da show agreement and attention, with no surprise in them.',
  },
  {
    mode: 'reakcije',
    q: 'Prijatelj vam nešto priča već nekoliko minuta. Što od ovoga NE pomaže razgovoru?',
    opts: ['šutjeti cijelo vrijeme', 'reći „aha“', 'reći „stvarno?“', 'reći „da, da“'],
    answer: 'šutjeti cijelo vrijeme',
    tip: 'Listening in complete silence makes a Croatian speaker think you disagree or are bored. Aha, stvarno? and da, da are the short reactions that show you are with them.',
  },
];
