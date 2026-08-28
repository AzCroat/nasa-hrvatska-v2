// ═══════════════════════════════════════════════════════════
// B1 CURRICULUM — the expansion to 30 (Wave 3, 2026-08-28)
// ═══════════════════════════════════════════════════════════
//
// Same per-level split as lessonsA1.js and lessonsA2.js.
//
// WHAT B1 WAS MISSING
// -------------------
// B1's ten lessons were the remaining cases and the aspect system — the two
// hardest things in Croatian, taught well. What they were not was B1. The level
// CEFR defines as "can describe experiences and events, give reasons and
// explanations for opinions and plans, and produce connected text on familiar
// topics" had:
//
//   * no way to REPORT what anyone said — no "rekao je da…", which is most of
//     what connected speech about other people consists of;
//   * no time clauses and no conditions, so nothing could be sequenced or
//     supposed: no "when I arrive", no "if you have time";
//   * no cause and no purpose, which is literally the "give reasons and
//     explanations" half of the level descriptor;
//   * no verb prefixes, so the single most productive word-building mechanism
//     in the language was invisible — a learner met `napisati`, `prepisati`,
//     `potpisati` and `opisati` as four unrelated words;
//   * and one topical lesson out of ten. B1 is where a learner starts handling
//     real situations, and the level had nothing about renting, banking, work,
//     complaining, or reading the news.
//
// AUTHORING RULES — see CLAUDE.md → Croatian Content Authoring.

/** @type {ReadonlyArray<object>} */
export const LESSONS_B1 = [
  // ─────────────────────────────────────────────────────────
  // Time and Duration
  // ─────────────────────────────────────────────────────────
  {
    id: 'time-duration',
    title: 'Time and Duration',
    subtitle: 'Ago, in, for, since, still, already — and the cases they take',
    icon: '⏳',
    level: 'B1',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Small Words That Place Events',
        body: 'You can say what happened and what will happen. This lesson is about locating those events relative to now, and to each other — two days ago, in an hour, for three years, since Monday, still, already, not any more. They are short words, they are used constantly, and most of them govern a case.',
        icon: '⏳',
      },
      {
        type: 'rule',
        title: 'Ago and In: prije and za',
        body: 'Two prepositions that mirror each other. "Prije" plus the genitive means ago: prije dva dana (two days ago), prije godinu dana (a year ago). "Za" plus the accusative means in, looking forward: za dva dana (in two days), za sat vremena (in an hour). Getting these the wrong way round reverses your sentence, so they are worth drilling as a pair.',
        highlight: 'prije dva dana / za dva dana',
      },
      {
        type: 'table',
        title: 'Placing an Event',
        headers: ['Croatian', 'English', 'Case'],
        rows: [
          ['prije tjedan dana', 'a week ago', 'genitive'],
          ['za tjedan dana', 'in a week', 'accusative'],
          ['nakon / poslije ručka', 'after lunch', 'genitive'],
          ['tijekom ljeta', 'during the summer', 'genitive'],
          ['od ponedjeljka', 'since Monday', 'genitive'],
          ['do petka', 'until Friday', 'genitive'],
        ],
      },
      {
        type: 'rule',
        title: 'How Long: the Bare Accusative',
        body: 'Duration takes the accusative with no preposition at all. Čekao sam dva sata. (I waited two hours.) Živim ovdje pet godina. (I have lived here five years.) Radio je cijeli dan. (He worked all day.) English needs "for"; Croatian needs nothing, and adding "za" changes the meaning to "in".',
        highlight: 'Čekao sam dva sata.',
      },
      {
        type: 'rule',
        title: 'The Present Covers English "Have Been"',
        body: 'This is the point where English speakers most often reach for the wrong tense. If something started in the past and is STILL going on, Croatian uses the present. Živim ovdje pet godina. (I have lived here for five years — and still do.) Učim hrvatski dvije godine. Using the past would say you no longer live here, which is a different fact.',
        highlight: 'Učim hrvatski dvije godine.',
      },
      {
        type: 'table',
        title: 'Still, Already, Not Any More',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['još', 'still', 'Još radim.'],
          ['već', 'already, for (now)', 'Već sam gotov.'],
          ['tek', 'only just', 'Tek sam stigao.'],
          ['više ne', 'not any more', 'Više ne pušim.'],
          ['još ne', 'not yet', 'Još nisam gotov.'],
          ['uskoro', 'soon', 'Uskoro dolazim.'],
        ],
      },
      {
        type: 'rule',
        title: 'Već Does Double Duty',
        body: '"Već" means already — Već sam jeo. But paired with a duration it means "for, up to now", and it is how Croatians most often express that: Već pet godina živim ovdje. Već dvije godine učim hrvatski. It carries the sense that the situation continues, which is exactly why the verb stays in the present.',
        highlight: 'Već pet godina živim ovdje.',
      },
      {
        type: 'example',
        title: 'Placing Events in Time',
        items: [
          {
            hr: 'Vratio sam se prije sat vremena.',
            en: 'I got back an hour ago.',
            note: 'prije + genitive',
          },
          {
            hr: 'Vlak polazi za deset minuta.',
            en: 'The train leaves in ten minutes.',
            note: 'za + accusative',
          },
          {
            hr: 'Radim ovdje već tri godine.',
            en: 'I have been working here for three years.',
            note: 'već + duration, verb in the present',
          },
          {
            hr: 'Tijekom zime rijetko izlazim.',
            en: 'During the winter I rarely go out.',
            note: 'tijekom + genitive',
          },
          {
            hr: 'Više ne živim u Zagrebu.',
            en: 'I do not live in Zagreb any more.',
            note: 'više ne — and the verb is negated',
          },
          {
            hr: 'Još nisam odlučio.',
            en: 'I have not decided yet.',
            note: 'još ne / još nisam',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "in two days" (looking forward)?',
        options: ['prije dva dana', 'za dva dana', 'dva dana', 'do dva dana'],
        correct: 1,
        explanation:
          '"Za" plus the accusative looks forward: za dva dana. "Prije dva dana" is two days AGO, and a bare "dva dana" would express how long something lasted.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You still live in Split and moved there five years ago. Which is right?',
        options: [
          'Živio sam u Splitu pet godina.',
          'Živim u Splitu pet godina.',
          'Živjet ću u Splitu pet godina.',
        ],
        correct: 1,
        explanation:
          'A situation that started earlier and continues takes the PRESENT in Croatian. The past tense would say you used to live there and no longer do.',
      },
      {
        type: 'summary',
        title: 'Time and Duration — Key Takeaways',
        points: [
          'prije + genitive = ago; za + accusative = in (from now)',
          'Duration is the bare accusative: Čekao sam dva sata.',
          'Something still going on takes the PRESENT: Živim ovdje pet godina.',
          'već, još, tek, više ne, još ne',
          'Već + a duration is the usual way to say "for … now"',
          'tijekom, od, do, nakon and poslije all take the genitive',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Verb Prefixes
  // ─────────────────────────────────────────────────────────
  {
    id: 'verb-prefixes',
    title: 'Verb Prefixes',
    subtitle: 'One verb, a dozen meanings — the engine of Croatian vocabulary',
    icon: '🧩',
    level: 'B1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Most Productive Mechanism in the Language',
        body: 'Until now, napisati, prepisati, potpisati, opisati and upisati have looked like five separate words to memorise. They are one verb — pisati — with five prefixes. Once you can read a prefix, your vocabulary stops growing one word at a time and starts growing one ROOT at a time.',
        icon: '🧩',
      },
      {
        type: 'rule',
        title: 'A Prefix Does Two Things at Once',
        body: 'It adds a meaning — direction, completion, a bit of, all over — and it almost always makes the verb PERFECTIVE. pisati (imperfective, to write) → napisati (perfective, to write and finish). That is why prefixes and aspect are the same topic seen from two sides, and why this lesson sits where it does.',
        highlight: 'prefix = meaning + perfective',
      },
      {
        type: 'table',
        title: 'One Root, Many Verbs — pisati',
        headers: ['Verb', 'Meaning', 'What the prefix adds'],
        rows: [
          ['napisati', 'to write (and finish)', 'na- completion'],
          ['potpisati', 'to sign', 'pot- under'],
          ['prepisati', 'to copy out', 'pre- across, over'],
          ['opisati', 'to describe', 'o- around'],
          ['upisati', 'to enrol, write in', 'u- into'],
          ['zapisati', 'to note down', 'za- behind, fix'],
          ['ispisati', 'to write out', 'iz- out of'],
        ],
      },
      {
        type: 'rule',
        title: 'The Prefixes Match the Prepositions',
        body: 'This is the shortcut. u- is "u" (into), iz- is "iz" (out of), do- is "do" (up to), pre- is "preko" (across), na- is "na" (onto), s- / sa- is "s" (down, together), pod- is "ispod" (under), nad- is "iznad" (over). If you know the preposition, you can usually guess the prefix — and often the whole verb.',
        highlight: 'u- into · iz- out of · do- up to · pre- across',
      },
      {
        type: 'table',
        title: 'The Same Prefixes on ići (to go)',
        headers: ['Verb', 'Meaning'],
        rows: [
          ['doći', 'to come, arrive'],
          ['otići', 'to leave, go away'],
          ['ući', 'to enter'],
          ['izaći', 'to go out, exit'],
          ['proći', 'to pass by, go through'],
          ['prijeći', 'to cross'],
          ['naći', 'to find'],
        ],
      },
      {
        type: 'rule',
        title: 'Four Prefixes Worth Knowing Cold',
        body: '"Po-" often means a little, or briefly: pričekati (wait a bit), popiti (drink up), pogledati (take a look). "Pre-" means across, or too much, or re-: prevesti (translate, carry across), prejesti se (overeat), prepisati (rewrite). "Raz-" means apart: razumjeti (understand — literally "think apart"), razbiti (smash). "Za-" often marks a beginning: zapjevati (burst into song), zaspati (fall asleep).',
        highlight: 'po- a bit · pre- across/too much · raz- apart · za- begin',
      },
      {
        type: 'example',
        title: 'Reading the Prefix',
        items: [
          {
            hr: 'Moraš potpisati ugovor.',
            en: 'You have to sign the contract.',
            note: 'pot- (under) + pisati — you write underneath',
          },
          {
            hr: 'Možeš li mi to prevesti?',
            en: 'Can you translate that for me?',
            note: 'pre- (across) + voditi — to carry across',
          },
          {
            hr: 'Upisao sam se na tečaj hrvatskog.',
            en: 'I enrolled on a Croatian course.',
            note: 'u- (into) + pisati — to write yourself in',
          },
          {
            hr: 'Pogledaj ovo na trenutak.',
            en: 'Take a look at this for a moment.',
            note: 'po- (briefly) + gledati',
          },
          {
            hr: 'Nisam razumio, možete li ponoviti?',
            en: 'I did not understand, could you repeat?',
            note: 'raz- (apart) + umjeti — to think it apart',
          },
        ],
      },
      {
        type: 'rule',
        title: 'When You Meet an Unknown Verb',
        body: 'Strip the prefix and look at what is left. If the root is one you know, you can usually get within reach of the meaning from the prefix alone — and even when you cannot, you will know which family it belongs to, which is enough to follow a sentence. This is the single highest-value habit at B1.',
        highlight: 'strip the prefix, find the root',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What does "potpisati" most likely mean? (pisati = to write, pot- = under)',
        options: ['to describe', 'to sign', 'to copy', 'to enrol'],
        correct: 1,
        explanation:
          'To write UNDER something is to sign it. "Opisati" is describe (o- around), "prepisati" is copy (pre- across) and "upisati" is enrol (u- into).',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which prefix means "out of"?',
        options: ['u-', 'iz-', 'do-', 'na-'],
        correct: 1,
        explanation:
          'The prefixes echo the prepositions: iz- is "out of", u- is "into", do- is "up to" and na- is "onto". Knowing the preposition usually gets you the prefix.',
      },
      {
        type: 'summary',
        title: 'Verb Prefixes — Key Takeaways',
        points: [
          'A prefix adds meaning AND usually makes the verb perfective',
          'The prefixes echo the prepositions: u-, iz-, do-, pre-, na-, pod-, nad-',
          'One root gives a whole family: pisati → napisati, potpisati, opisati, upisati',
          'po- a little · pre- across or too much · raz- apart · za- begin',
          'Meeting an unknown verb? Strip the prefix and look for the root',
          'This is how Croatian vocabulary grows by families, not by items',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Sitting, Standing, Putting
  // ─────────────────────────────────────────────────────────
  {
    id: 'position-placement',
    title: 'Sitting, Standing, Putting',
    subtitle: 'The verb pairs where one is a state and the other is a change',
    icon: '🪑',
    level: 'B1',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Being Somewhere vs. Getting There',
        body: 'English uses "sit" for both sitting down and being seated, and lets context sort it out. Croatian has two different verbs, and choosing the wrong one is immediately noticeable. Better still, the choice tells you which case follows — so this lesson is really the A1 motion-versus-position rule, applied to verbs.',
        icon: '🪑',
      },
      {
        type: 'table',
        title: 'The Pairs',
        headers: ['Change of state', 'Ongoing state', 'English'],
        rows: [
          ['sjesti', 'sjediti', 'sit down / be sitting'],
          ['leći', 'ležati', 'lie down / be lying'],
          ['stati', 'stajati', 'stand up, stop / be standing'],
          ['staviti', 'stajati (stoji)', 'put / be placed'],
          ['objesiti', 'visjeti', 'hang up / be hanging'],
          ['sakriti', 'skrivati se', 'hide (something) / be hiding'],
        ],
      },
      {
        type: 'rule',
        title: 'The Change Takes the Accusative',
        body: 'A verb of CHANGE describes movement to a place, so it takes the same case as any motion: the accusative. Sjedni na stolicu. (Sit down on the chair.) Lezi na krevet. (Lie down on the bed.) Stavi knjigu na stol. (Put the book on the table.) Something arrives somewhere, so the destination is accusative.',
        highlight: 'Sjedni na stolicu.',
      },
      {
        type: 'rule',
        title: 'The State Takes the Locative',
        body: 'A verb of STATE describes being somewhere, so it takes the locative. Sjedim na stolici. (I am sitting on the chair.) Ležim na krevetu. (I am lying on the bed.) Knjiga stoji na stolu. (The book is on the table.) Nothing is moving, so nothing is accusative.',
        highlight: 'Sjedim na stolici.',
      },
      {
        type: 'table',
        title: 'Same Preposition, Two Cases',
        headers: ['Change (accusative)', 'State (locative)'],
        rows: [
          ['Sjedni na stolicu.', 'Sjedim na stolici.'],
          ['Lezi na krevet.', 'Ležim na krevetu.'],
          ['Stavi to u ladicu.', 'To je u ladici.'],
          ['Objesi kaput u ormar.', 'Kaput visi u ormaru.'],
          ['Idem u sobu.', 'U sobi sam.'],
        ],
      },
      {
        type: 'rule',
        title: 'Staviti and Stajati Are Not the Same Word',
        body: 'Two verbs that look alike and behave differently. "Staviti / stavljati" is to put something somewhere — it takes an object and the accusative. "Stajati" is to stand or to be positioned, and it takes no object. Stavljam knjigu na stol. Knjiga stoji na stolu. If you can ask "put WHAT?", you need staviti.',
        highlight: 'Stavljam knjigu / Knjiga stoji',
      },
      {
        type: 'example',
        title: 'In Practice',
        items: [
          {
            hr: 'Sjednite, molim vas.',
            en: 'Please take a seat.',
            note: 'change of state — polite imperative',
          },
          {
            hr: 'Sjedimo u kavani već sat vremena.',
            en: 'We have been sitting in the café for an hour.',
            note: 'state → locative, and the present for duration',
          },
          {
            hr: 'Stavi ključeve na stol.',
            en: 'Put the keys on the table.',
            note: 'accusative — they are arriving there',
          },
          {
            hr: 'Ključevi su na stolu.',
            en: 'The keys are on the table.',
            note: 'locative — they are already there',
          },
          {
            hr: 'Legao sam u deset i odmah zaspao.',
            en: 'I went to bed at ten and fell asleep straight away.',
            note: 'leći + zaspati, both perfective',
          },
          {
            hr: 'Auto stoji ispred kuće.',
            en: 'The car is parked in front of the house.',
            note: 'stajati for a positioned object',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am sitting on the chair"? ("stolica" is feminine.)',
        options: [
          'Sjedim na stolicu.',
          'Sjedim na stolici.',
          'Sjednem na stolici.',
          'Sjedam na stolicu.',
        ],
        correct: 1,
        explanation:
          '"Sjediti" is the ongoing state, so nothing is moving and the locative follows: na stolici. "Na stolicu" would be a destination, which needs a verb of change like sjesti.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Stavi knjigu na ___."',
        options: ['stol', 'stolu', 'stola', 'stolom'],
        correct: 0,
        explanation:
          '"Staviti" is a change of position, so the destination is accusative — and "stol" is masculine and not alive, so it does not change. "Na stolu" is the locative, right for where the book already is.',
      },
      {
        type: 'summary',
        title: 'Position and Placement — Key Takeaways',
        points: [
          'Croatian splits change from state: sjesti / sjediti, leći / ležati',
          'A change of position takes the ACCUSATIVE — something arrives',
          'An ongoing state takes the LOCATIVE — nothing is moving',
          'staviti takes an object; stajati does not',
          'It is the same motion-versus-position rule you learned at A1',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Infinitive or Da
  // ─────────────────────────────────────────────────────────
  {
    id: 'infinitive-vs-da',
    title: 'Infinitive or "Da"',
    subtitle: 'Two jobs for one small word, and which one Croatian prefers',
    icon: '🔀',
    level: 'B1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'One Word, Two Completely Different Jobs',
        body: '"Da" is doing two unrelated things in Croatian, and separating them clears up a lot at once. In one job it is compulsory and means "that". In the other it competes with the infinitive — and there, standard Croatian has a clear preference.',
        icon: '🔀',
      },
      {
        type: 'rule',
        title: 'Job One: "Da" Means "That" — and It Is Required',
        body: 'After verbs of saying, thinking, knowing, hoping and feeling, "da" introduces a whole clause and cannot be dropped. Mislim da je dobro. (I think it is good.) Znam da dolaziš. Rekao je da će doći. Nadam se da si dobro. English happily leaves "that" out — "I think it\'s good" — and Croatian never does.',
        highlight: 'Mislim da je dobro.',
      },
      {
        type: 'rule',
        title: 'Job Two: Where the Infinitive Belongs',
        body: 'After a modal verb, or a verb of wanting, starting, or being able, standard Croatian uses the plain infinitive. Moram ići. Želim doći. Mogu pomoći. Počeo je pjevati. Idem kupiti kruh. This is the neutral form in writing and the one to reach for by default — it is shorter, and it is what you will read everywhere.',
        highlight: 'Moram ići.',
      },
      {
        type: 'table',
        title: 'Which Job Is It?',
        headers: ['Sentence', 'Which "da"', 'Why'],
        rows: [
          ['Mislim da je dobro.', 'that-clause', 'required after misliti'],
          ['Znam da dolaziš.', 'that-clause', 'required after znati'],
          ['Moram ići.', 'infinitive', 'after a modal'],
          ['Želim naučiti hrvatski.', 'infinitive', 'after a verb of wanting'],
          ['Nadam se da ćeš doći.', 'that-clause', 'required after nadati se'],
          ['Idem kupiti kruh.', 'infinitive', 'purpose after a verb of motion'],
        ],
      },
      {
        type: 'rule',
        title: 'The Test That Settles It',
        body: 'Ask whether the second half has its own subject. "I think THAT HE is coming" — a different person, so it needs a full clause and "da". "I want TO GO" — the same person throughout, so the infinitive is enough. Different subject means a clause; same subject means an infinitive. That single test resolves almost every case.',
        highlight: 'different subject → da · same subject → infinitive',
      },
      {
        type: 'rule',
        title: 'When the Subject Changes, You Need the Clause',
        body: 'This is why "Želim doći" and "Želim da dođeš" are both correct and mean different things. The first is I want to come; the second is I want YOU to come. English marks the difference with an object — "I want you to come" — and Croatian marks it by switching to a full clause with its own verb.',
        highlight: 'Želim doći. / Želim da dođeš.',
      },
      {
        type: 'example',
        title: 'Both Jobs at Work',
        items: [
          {
            hr: 'Moram završiti ovaj posao danas.',
            en: 'I have to finish this work today.',
            note: 'modal + infinitive',
          },
          {
            hr: 'Mislim da je to dobra ideja.',
            en: 'I think that is a good idea.',
            note: 'da is compulsory here',
          },
          {
            hr: 'Želim da mi pomogneš.',
            en: 'I want you to help me.',
            note: 'the subject changes, so a full clause',
          },
          {
            hr: 'Idem se odmoriti.',
            en: 'I am going to have a rest.',
            note: 'motion + infinitive, with se in second position',
          },
          {
            hr: 'Nadam se da ćemo se uskoro vidjeti.',
            en: 'I hope we will see each other soon.',
            note: 'nadati se always takes da',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which correctly says "I have to go"?',
        options: ['Moram ići.', 'Moram da idem.', 'Moram idem.', 'Moram za ići.'],
        correct: 0,
        explanation:
          'After a modal verb with the same subject throughout, standard Croatian takes the plain infinitive: Moram ići. That is the neutral form and the one you will read everywhere.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "I want YOU to come"?',
        options: ['Želim doći.', 'Želim da dođeš.', 'Želim te doći.', 'Želim tebi doći.'],
        correct: 1,
        explanation:
          'The subject changes — I want, you come — so the second half needs its own clause with its own verb: Želim da dođeš. "Želim doći" would mean I want to come myself.',
      },
      {
        type: 'summary',
        title: 'Infinitive or Da — Key Takeaways',
        points: [
          '"Da" as "that" is compulsory after misliti, znati, reći, nadati se',
          'English drops "that"; Croatian never does',
          'After a modal or a verb of wanting, use the plain infinitive',
          'The test: different subject → a clause with da; same subject → infinitive',
          'Želim doći = I want to come · Želim da dođeš = I want you to come',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Impersonal Sentences
  // ─────────────────────────────────────────────────────────
  {
    id: 'impersonal',
    title: 'Impersonal Sentences',
    subtitle: 'One should, it is possible, it is said — sentences with no subject',
    icon: '🌫️',
    level: 'B1',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'Saying Things Without Saying Who',
        body: 'Signs, rules, instructions and general truths all avoid naming a doer. English reaches for "you", "one", "people" or the passive. Croatian has a neater set of tools, and you already met the main one at A1 — the impersonal "se". Here is the rest of the family.',
        icon: '🌫️',
      },
      {
        type: 'rule',
        title: 'Treba: One Should',
        body: '"Treba" plus an infinitive is the everyday way to say what ought to be done, with no subject at all. Treba pričekati. (One should wait.) Treba to riješiti. (That needs sorting out.) In the negative: Ne treba žuriti. (There is no need to hurry.) It never changes for person — that is precisely the point of it.',
        highlight: 'Treba pričekati.',
      },
      {
        type: 'rule',
        title: 'Adding a Person Puts Them in the Dative',
        body: 'If you do want to say who, the person goes into the dative and the verb still does not change. Treba mi odmor. (I need a rest.) Trebalo bi ti pomoći. Compare "trebam" — Trebam odmor — which is a personal sentence with you as the subject. Both are correct; the impersonal one is softer and more common in advice.',
        highlight: 'Treba mi odmor.',
      },
      {
        type: 'table',
        title: 'The Impersonal Family',
        headers: ['Croatian', 'English'],
        rows: [
          ['Treba pričekati.', 'One should wait.'],
          ['Može se platiti karticom.', 'You can pay by card.'],
          ['Ne smije se pušiti.', 'Smoking is not allowed.'],
          ['Kaže se da…', 'It is said that…'],
          ['Potrebno je rezervirati.', 'It is necessary to book.'],
          ['Moguće je da…', 'It is possible that…'],
        ],
      },
      {
        type: 'rule',
        title: 'Modal + Se: the Language of Signs',
        body: 'Put "se" with a third-person modal and you have the standard form for every rule and notice in the country. Ovdje se ne puši. Može se platiti karticom. Ne smije se parkirati. Ulazi se na druga vrata. Once you can read this pattern you can read almost any sign in Croatia, which makes it worth more than its grammar suggests.',
        highlight: 'Ovdje se ne puši.',
      },
      {
        type: 'rule',
        title: 'Weather and Feeling Take It Too',
        body: 'The subjectless pattern from A1 belongs to this family. Hladno je. Kasno je. Teško je. Add a dative and it becomes personal without gaining a subject: Hladno mi je. (I am cold.) Žao mi je. (I am sorry.) Drago mi je. (Pleased to meet you.) Those last two are set phrases you will use constantly.',
        highlight: 'Drago mi je. · Žao mi je.',
      },
      {
        type: 'example',
        title: 'Impersonal in Use',
        items: [
          {
            hr: 'Treba rezervirati stol unaprijed.',
            en: 'You should book a table in advance.',
            note: 'general advice, no subject',
          },
          {
            hr: 'Može li se ovdje platiti gotovinom?',
            en: 'Can one pay in cash here?',
            note: 'modal + se, as a question',
          },
          {
            hr: 'Kaže se da je ljeto ovdje prekrasno.',
            en: 'They say the summer here is beautiful.',
            note: 'kaže se + da-clause',
          },
          {
            hr: 'Žao mi je, ne mogu doći.',
            en: 'I am sorry, I cannot come.',
            note: 'dative + subjectless adjective',
          },
          {
            hr: 'Ne smije se fotografirati u muzeju.',
            en: 'Photography is not allowed in the museum.',
            note: 'exactly how the sign will be worded',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A sign says "Ovdje se ne puši." What does it mean?',
        options: [
          'He does not smoke here.',
          'No smoking here.',
          'I do not smoke here.',
          'Smoking is available here.',
        ],
        correct: 1,
        explanation:
          'The impersonal "se" removes the doer entirely, which is why it is the standard wording for rules and notices. There is no "he" in the sentence at all.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which says "I need a rest" impersonally?',
        options: ['Trebam odmor.', 'Treba mi odmor.', 'Treba odmor mi.', 'Trebam mi odmor.'],
        correct: 1,
        explanation:
          'The impersonal form keeps the verb in the third person and puts the person in the dative: Treba mi odmor. "Trebam odmor" is also correct, but it is the personal version with you as the subject.',
      },
      {
        type: 'summary',
        title: 'Impersonal Sentences — Key Takeaways',
        points: [
          'treba + infinitive = one should; the verb never changes for person',
          'Adding a person puts them in the dative: Treba mi odmor.',
          'Modal + se is the language of every sign: Ovdje se ne puši.',
          'kaže se, zna se, vidi se — it is said, it is known, it shows',
          'Hladno mi je, žao mi je, drago mi je — subjectless plus a dative',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Time Clauses
  // ─────────────────────────────────────────────────────────
  {
    id: 'time-clauses',
    title: 'When, While, As Soon As',
    subtitle: 'Sequencing events — and the tense Croatian uses that English does not',
    icon: '⛓️',
    level: 'B1',
    duration: '~6 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'Putting Events in Order',
        body: 'A B1 learner is supposed to be able to narrate — and narration is mostly about saying which thing happened when, relative to another thing. These are the words that do it, plus one rule about tense that English speakers get wrong every single time.',
        icon: '⛓️',
      },
      {
        type: 'table',
        title: 'The Connectors',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['kad(a)', 'when', 'Kad sam došao, spavala je.'],
          ['dok', 'while, as long as', 'Dok sam čekao, čitao sam.'],
          ['čim', 'as soon as', 'Čim stignem, javit ću ti.'],
          ['prije nego što', 'before', 'Nazovi prije nego što dođeš.'],
          ['nakon što', 'after', 'Nakon što smo jeli, izašli smo.'],
          ['otkako', 'since', 'Otkako živim ovdje, sretan sam.'],
        ],
      },
      {
        type: 'rule',
        title: 'THE RULE: the Present for a Future "When"',
        body: 'This is the one to get right. When a time clause points at the future, Croatian puts it in the PRESENT, not the future. Kad dođem, javit ću ti. (When I arrive, I will let you know.) Čim stignem, nazvat ću. Notice that the main clause is future and the time clause is present — English does exactly the same thing and nobody notices: you say "when I ARRIVE", not "when I will arrive".',
        highlight: 'Kad dođem, javit ću ti.',
      },
      {
        type: 'rule',
        title: 'Dok Has Two Meanings',
        body: '"Dok" with an imperfective verb means "while": Dok sam čitao, zazvonio je telefon. With a perfective verb, or with "ne", it means "until": Čekaj dok ne dođem. (Wait until I come.) That "ne" is not a negation you translate — it is part of the construction, and leaving it out is a very common learner error.',
        highlight: 'Čekaj dok ne dođem.',
      },
      {
        type: 'rule',
        title: 'Aspect Does the Sequencing',
        body: 'The connectors tell you the relationship; the ASPECT tells you the shape. Dok sam čitao (imperfective — an ongoing background) zazvonio je telefon (perfective — a single event that interrupts it). That pairing is how Croatian narrates: the imperfective sets the scene and the perfective moves the story on. It is worth re-reading the aspect lessons with this in mind.',
        highlight: 'imperfective background, perfective event',
      },
      {
        type: 'example',
        title: 'Sequencing Events',
        items: [
          {
            hr: 'Kad sam bio mali, živjeli smo na selu.',
            en: 'When I was little, we lived in the countryside.',
            note: 'both imperfective — an ongoing period',
          },
          {
            hr: 'Čim završim posao, idem kući.',
            en: 'As soon as I finish work, I am going home.',
            note: 'future meaning, present tense',
          },
          {
            hr: 'Dok si spavao, zvala je Ana.',
            en: 'While you were asleep, Ana called.',
            note: 'background + interrupting event',
          },
          {
            hr: 'Nazovi me prije nego što kreneš.',
            en: 'Call me before you set off.',
            note: 'prije nego što + present',
          },
          {
            hr: 'Čekat ću dok ne dođeš.',
            en: 'I will wait until you come.',
            note: 'dok ne — the "ne" is part of the phrase',
          },
          {
            hr: 'Otkako sam počeo učiti, sve je lakše.',
            en: 'Since I started learning, everything is easier.',
            note: 'otkako + past, main clause present',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The Comma',
        body: 'When the time clause comes FIRST, it is followed by a comma: Kad dođem, javit ću ti. When it comes second, the comma is usually dropped: Javit ću ti kad dođem. Both orders are natural; putting the time clause first gives it a little more weight.',
        highlight: 'Kad dođem, javit ću ti.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which correctly says "When I arrive, I will call you"?',
        options: [
          'Kad ću doći, nazvat ću te.',
          'Kad dođem, nazvat ću te.',
          'Kad dolazim, nazvat ću te.',
          'Kad sam došao, nazvat ću te.',
        ],
        correct: 1,
        explanation:
          'A time clause pointing at the future goes into the present in Croatian: kad dođem. English does the same — "when I arrive", never "when I will arrive" — so the instinct is already there.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Čekaj ___ dođem." (Wait until I come.)',
        options: ['dok', 'dok ne', 'kad', 'čim'],
        correct: 1,
        explanation:
          '"Until" is "dok ne" in Croatian, and the "ne" is part of the construction rather than a negation to translate. Plain "dok" would mean "while", which says something different.',
      },
      {
        type: 'summary',
        title: 'Time Clauses — Key Takeaways',
        points: [
          'kad, dok, čim, prije nego što, nakon što, otkako',
          'A future time clause takes the PRESENT: Kad dođem, javit ću ti.',
          'dok + imperfective = while; dok ne = until',
          'Aspect does the sequencing: imperfective background, perfective event',
          'Time clause first takes a comma; second usually does not',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // If and When: Real Conditions
  // ─────────────────────────────────────────────────────────
  {
    id: 'real-conditions',
    title: 'If — Real Conditions',
    subtitle: 'Things that may actually happen, and the tense they need',
    icon: '🔮',
    level: 'B1',
    duration: '~5 min',
    color: '#d97706',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Conditions You Expect to Be Met',
        body: 'This lesson is about the everyday "if" — if you have time, if it rains, if I finish early. Not the hypothetical "if I were rich", which needs the conditional mood and comes later. These are conditions that may genuinely happen, and they are built on tenses you already have.',
        icon: '🔮',
      },
      {
        type: 'rule',
        title: 'Ako + Present, Main Clause Future',
        body: 'The basic shape: "ako" plus the present, then a future main clause. Ako imaš vremena, javi mi. (If you have time, let me know.) Ako bude kiše, ostat ćemo doma. Just like the time clauses, the "if" half stays in the present even though it points forward — and again, English does the same: "if you have time", not "if you will have time".',
        highlight: 'Ako imaš vremena, javi mi.',
      },
      {
        type: 'rule',
        title: 'The Form Croatian Adds: budem',
        body: 'For a condition genuinely in the future, Croatian has a dedicated form English lacks: budem, budeš, bude, budemo, budete, budu, plus the participle. Ako budeš imao vremena, javi mi. Ako bude padala kiša, nećemo ići. It is more precise than the plain present and very common after "ako" and "kad". Recognise it first; producing it comes with practice.',
        highlight: 'Ako budeš imao vremena…',
      },
      {
        type: 'table',
        title: 'The Shapes',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['Ako imaš vremena, javi mi.', 'If you have time, let me know.', 'present + imperative'],
          ['Ako budeš mogao, dođi.', 'If you can, come.', 'budem-form + imperative'],
          ['Ako pada kiša, ostajemo doma.', 'If it rains, we stay home.', 'a general rule'],
          ['Kad pada kiša, ostajem doma.', 'When it rains, I stay home.', 'kad = whenever'],
          ['Ako ne dođeš, javi mi.', 'If you do not come, let me know.', 'negated condition'],
        ],
      },
      {
        type: 'rule',
        title: 'Ako or Kad?',
        body: '"Ako" leaves it open — it may or may not happen. "Kad" treats it as certain, or as a general rule that repeats. Ako dođeš, vidimo se. (If you come — you might not.) Kad dođeš, vidimo se. (When you come — you will.) With a general truth, "kad" means "whenever": Kad pada kiša, ceste su skliske.',
        highlight: 'ako = maybe · kad = certainly or whenever',
      },
      {
        type: 'rule',
        title: 'Two More Worth Having',
        body: '"Osim ako" means unless: Doći ću, osim ako ne bude problema. "U slučaju da" means in case: Ponesi kišobran u slučaju da pada. And to state a condition negatively, simply negate the verb after "ako": Ako ne stigneš na vrijeme, nazovi.',
        highlight: 'osim ako · u slučaju da',
      },
      {
        type: 'example',
        title: 'Everyday Conditions',
        items: [
          {
            hr: 'Ako budeš slobodan, idemo na kavu.',
            en: 'If you are free, we will go for a coffee.',
            note: 'budem-form after ako',
          },
          {
            hr: 'Ako ti nešto zatreba, javi se.',
            en: 'If you need anything, get in touch.',
            note: 'zatrebati + dative',
          },
          {
            hr: 'Kad završim fakultet, tražit ću posao.',
            en: 'When I finish university, I will look for a job.',
            note: 'kad — it is going to happen',
          },
          {
            hr: 'Ako pada kiša, utakmica se odgađa.',
            en: 'If it rains, the match is postponed.',
            note: 'a general rule, both present',
          },
          {
            hr: 'Ponesi jaknu u slučaju da zahladi.',
            en: 'Take a jacket in case it gets cold.',
            note: 'u slučaju da + present',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which correctly says "If you have time, let me know"?',
        options: [
          'Ako ćeš imati vremena, javi mi.',
          'Ako imaš vremena, javi mi.',
          'Ako imao si vremena, javi mi.',
        ],
        correct: 1,
        explanation:
          'The "if" clause stays in the present even though it points forward: ako imaš. That is the same thing English does — "if you have time", never "if you will have time".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You are certain your friend is coming. Which do you use?',
        options: ['Ako dođeš…', 'Kad dođeš…', 'Osim ako dođeš…'],
        correct: 1,
        explanation:
          '"Kad" treats the event as certain; "ako" leaves it genuinely open. Using "ako" about something you both know is happening sounds oddly doubtful.',
      },
      {
        type: 'summary',
        title: 'Real Conditions — Key Takeaways',
        points: [
          'ako + present, main clause future or imperative',
          'The "if" clause stays in the present, exactly as in English',
          'budem / budeš / bude + participle is the dedicated future condition',
          'ako = it may happen · kad = it will, or whenever',
          'osim ako = unless · u slučaju da = in case',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Because and In Order To
  // ─────────────────────────────────────────────────────────
  {
    id: 'cause-purpose',
    title: 'Because and In Order To',
    subtitle: 'Giving reasons and stating aims — and the zbog/radi distinction',
    icon: '🎯',
    level: 'B1',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'The Half of B1 Nobody Had Taught',
        body: 'The CEFR descriptor for this level says a learner can "briefly give reasons and explanations for opinions and plans". That is this lesson, and until now the level contained nothing for it. Two ideas: why something happened, and what something is for.',
        icon: '🎯',
      },
      {
        type: 'table',
        title: 'Cause: Why It Happened',
        headers: ['Croatian', 'English', 'Followed by'],
        rows: [
          ['jer', 'because', 'a clause; never opens a sentence'],
          ['zato što', 'because', 'a clause; can open one'],
          ['budući da', 'since, as', 'a clause; formal, opens one'],
          ['zbog', 'because of', 'a noun in the genitive'],
          ['zato', 'that is why', 'the consequence'],
          ['stoga', 'therefore', 'formal, the consequence'],
        ],
      },
      {
        type: 'rule',
        title: 'Jer Takes a Clause, Zbog Takes a Noun',
        body: 'The commonest mix-up. "Jer" is followed by a whole clause with its own verb: Ne idem jer pada kiša. "Zbog" is followed by a noun in the genitive, with no verb: Ne idem zbog kiše. Same meaning, two different structures — if there is a verb after it, you need jer.',
        highlight: 'jer pada kiša / zbog kiše',
      },
      {
        type: 'rule',
        title: 'Purpose: da bi and kako bi',
        body: 'To say what something is FOR, use "da bi" or "kako bi" plus the conditional forms bih, bi, bismo, biste, plus a participle. Učim hrvatski da bih mogao razgovarati s obitelji. When the subject is the same throughout, there is a much simpler option: just use "da" with the present, or an infinitive of purpose after a verb of motion — Idem kupiti kruh.',
        highlight: 'da bih mogao…',
      },
      {
        type: 'rule',
        title: 'ZBOG or RADI — the Distinction Worth Knowing',
        body: 'Both are followed by the genitive and both come out as "because of" in careless English, but standard Croatian separates them. "Zbog" gives a CAUSE — something that already happened: Zakasnio sam zbog gužve. (I was late because of the traffic.) "Radi" gives a PURPOSE — something aimed at: Došao sam radi razgovora. (I came for the sake of a conversation.) Cause looks backward; purpose looks forward.',
        highlight: 'zbog = cause · radi = purpose',
      },
      {
        type: 'example',
        title: 'Reasons and Aims',
        items: [
          {
            hr: 'Ne idem van jer sam umoran.',
            en: 'I am not going out because I am tired.',
            note: 'jer + a clause',
          },
          {
            hr: 'Zakasnio sam zbog gužve u prometu.',
            en: 'I was late because of the traffic.',
            note: 'zbog + genitive, and a real cause',
          },
          {
            hr: 'Učim hrvatski da bih razgovarao s bakom.',
            en: 'I am learning Croatian so I can talk to my grandmother.',
            note: 'da bi + conditional + participle',
          },
          {
            hr: 'Idem u dućan kupiti mlijeko.',
            en: 'I am going to the shop to buy milk.',
            note: 'the simple purpose infinitive after motion',
          },
          {
            hr: 'Budući da nemam auto, idem tramvajem.',
            en: 'Since I do not have a car, I take the tram.',
            note: 'budući da opens the sentence',
          },
          {
            hr: 'Pada kiša, zato ostajemo doma.',
            en: 'It is raining, that is why we are staying in.',
            note: 'zato introduces the consequence',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Zato and Zato Što Are Not the Same',
        body: 'One letter of difference, opposite directions. "Zato što" introduces the CAUSE: Ostajem doma zato što pada kiša. "Zato" alone introduces the CONSEQUENCE: Pada kiša, zato ostajem doma. Reading them the wrong way round inverts the sentence, so it is worth a moment now.',
        highlight: 'zato što = because · zato = so',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Ne idem van ___ kiše." (I am not going out because of the rain.)',
        options: ['jer', 'zato što', 'zbog', 'da bi'],
        correct: 2,
        explanation:
          '"Kiše" is a noun in the genitive with no verb after it, so the preposition "zbog" is needed. "Jer" and "zato što" require a full clause: … jer pada kiša.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which means "I was late because of the traffic"?',
        options: [
          'Zakasnio sam radi gužve.',
          'Zakasnio sam zbog gužve.',
          'Zakasnio sam jer gužve.',
        ],
        correct: 1,
        explanation:
          'The traffic is the CAUSE of something that already happened, so it takes "zbog". "Radi" states a purpose you are aiming at, which is not what a delay is.',
      },
      {
        type: 'summary',
        title: 'Cause and Purpose — Key Takeaways',
        points: [
          'jer, zato što, budući da take a clause; zbog takes a genitive noun',
          'If there is a verb after it, you need jer — not zbog',
          'Purpose: da bi / kako bi + conditional, or a plain infinitive after motion',
          'zbog = cause, looking back · radi = purpose, looking forward',
          'zato što = because · zato = that is why',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Reported Speech
  // ─────────────────────────────────────────────────────────
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    subtitle: 'He said that… — and the tense shift Croatian does NOT make',
    icon: '💬',
    level: 'B1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Passing On What Someone Said',
        body: 'Most of what anyone says about other people is reported speech — he said, she asked, they told me. Croatian handles it more simply than English does, and the simplification is exactly where English speakers overcomplicate it.',
        icon: '💬',
      },
      {
        type: 'rule',
        title: 'THE RULE: Croatian Does Not Shift the Tense',
        body: 'English backshifts: "I am coming" becomes "He said he WAS coming". Croatian does not. Whatever tense the person used, you keep. Rekao je: "Dolazim." → Rekao je da dolazi. He said he is coming — present stays present, even though the saying was in the past. This is simpler than English, and it is the single thing to remember.',
        highlight: 'Rekao je da dolazi.',
      },
      {
        type: 'table',
        title: 'Direct to Reported',
        headers: ['They said', 'You report it as', 'English'],
        rows: [
          ['"Dolazim."', 'Rekao je da dolazi.', 'He said he was coming.'],
          ['"Bio sam tamo."', 'Rekao je da je bio tamo.', 'He said he had been there.'],
          ['"Doći ću."', 'Rekao je da će doći.', 'He said he would come.'],
          ['"Ne znam."', 'Rekla je da ne zna.', 'She said she did not know.'],
          ['"Pomozi mi."', 'Rekao mi je da mu pomognem.', 'He told me to help him.'],
        ],
      },
      {
        type: 'rule',
        title: 'What Does Change: the Person',
        body: 'The tense stays; the pronouns and possessives move to your point of view. "Ja dolazim" becomes "on dolazi". "Moja sestra" becomes "njegova sestra". "Vidim te" becomes "vidi me" — if he was talking to you. This is the same adjustment English makes, and it is the part that needs actual thought.',
        highlight: 'ja → on · moja → njegova',
      },
      {
        type: 'rule',
        title: 'Time Words Move Too',
        body: 'If you are reporting on a different day, the time words shift with you: danas → tog dana or taj dan, sutra → sljedeći dan, jučer → dan prije, sada → tada, ovdje → ondje. Rekao je da dolazi sutra becomes, a week later, Rekao je da će doći sljedeći dan.',
        highlight: 'sutra → sljedeći dan',
      },
      {
        type: 'rule',
        title: 'Reporting a Question',
        body: 'A yes/no question keeps the "li" it had: Pitao je dolazim li. Pitao je je li sve u redu. A question word simply stays where it is: Pitao je gdje živim. Pitala je kada dolazim. No inversion and no auxiliary — just the question word followed by an ordinary clause, which makes this easier than the English equivalent.',
        highlight: 'Pitao je gdje živim.',
      },
      {
        type: 'rule',
        title: 'Reporting a Request',
        body: 'An imperative becomes "da" plus the present. "Dođi!" → Rekao mi je da dođem. "Pomozi mi." → Zamolio me da mu pomognem. "Nemoj to raditi." → Rekao mi je da to ne radim. Note that this is the "da" that introduces a clause with a DIFFERENT subject — the pattern from the infinitive lesson, doing exactly the job it was described for.',
        highlight: 'Rekao mi je da dođem.',
      },
      {
        type: 'example',
        title: 'Reporting in Practice',
        items: [
          {
            hr: 'Ana je rekla da je umorna.',
            en: 'Ana said she was tired.',
            note: 'she said "umorna sam" — present kept',
          },
          {
            hr: 'Rekli su da će doći kasnije.',
            en: 'They said they would come later.',
            note: 'future kept as future',
          },
          {
            hr: 'Pitao me gdje radim.',
            en: 'He asked me where I work.',
            note: 'question word, then a normal clause',
          },
          {
            hr: 'Zamolila me da joj pomognem.',
            en: 'She asked me to help her.',
            note: 'request → da + present',
          },
          {
            hr: 'Mislio sam da si otišao.',
            en: 'I thought you had left.',
            note: 'the perfect stays the perfect',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Ana said "Dolazim." How do you report it?',
        options: [
          'Ana je rekla da je dolazila.',
          'Ana je rekla da dolazi.',
          'Ana je rekla da će dolaziti.',
          'Ana je rekla da dolazim.',
        ],
        correct: 1,
        explanation:
          'Croatian does not backshift, so the present she used stays present: da dolazi. Only the person changes, from "ja" to "ona". English would say "she said she was coming", which is where the temptation comes from.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you report the request "Pomozi mi"?',
        options: [
          'Rekao mi je pomozi mu.',
          'Rekao mi je da mu pomognem.',
          'Rekao mi je da mu pomozi.',
        ],
        correct: 1,
        explanation:
          'An imperative becomes "da" plus the present, conjugated for whoever is being asked: da mu pomognem. The imperative form itself never survives into reported speech.',
      },
      {
        type: 'summary',
        title: 'Reported Speech — Key Takeaways',
        points: [
          'Croatian does NOT shift the tense — whatever they said, you keep',
          'The pronouns and possessives shift to your point of view',
          'Time and place words shift if you are reporting later or elsewhere',
          'Questions: the question word stays, or use je li for yes/no',
          'Requests become da + present: Rekao mi je da dođem.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Relative Clauses, Deeper
  // ─────────────────────────────────────────────────────────
  {
    id: 'relative-deep',
    title: 'Relative Clauses, Deeper',
    subtitle: 'Whose, where, and the što that refers to a whole idea',
    icon: '🪡',
    level: 'B1',
    duration: '~5 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Beyond Koji',
        body: 'A2 gave you "koji" — the woman who, the book which. That covers most sentences. This lesson adds the four that cover the rest: whose, where, what, and the one that refers back to an entire idea rather than a single noun.',
        icon: '🪡',
      },
      {
        type: 'rule',
        title: 'Čiji — Whose',
        body: '"Čiji" agrees with the thing OWNED, like any possessive, and it is the relative version of the question word you met at A1. Čovjek čija je kuća gorjela. (The man whose house burned.) Žena čiji sin studira u Zagrebu. Note that the agreement follows the house and the son, not the man or the woman.',
        highlight: 'Čovjek čija je kuća gorjela.',
      },
      {
        type: 'rule',
        title: 'Gdje, Kamo, Odakle',
        body: 'For places, the question words double as relatives and are often more natural than "u kojem". Grad gdje sam odrastao. (The town where I grew up.) Mjesto kamo idemo. (The place we are going to.) Selo odakle je moja obitelj. (The village my family is from.) "U kojem" is equally correct and slightly more formal.',
        highlight: 'Grad gdje sam odrastao.',
      },
      {
        type: 'rule',
        title: 'Ono Što — What',
        body: 'English "what" in the sense of "the thing that" is "ono što" in Croatian, and it cannot be shortened to bare "što" at the start. Ono što me muči je cijena. (What worries me is the price.) Ne razumijem ono što govoriš. Reci mi ono što znaš. Once you have it, a whole class of English sentence becomes available.',
        highlight: 'Ono što me muči…',
      },
      {
        type: 'rule',
        title: 'Što for a Whole Idea',
        body: 'The most useful item here. When the relative refers not to a noun but to the whole preceding clause, Croatian uses "što". Zakasnio je, što me nije iznenadilo. (He was late, which did not surprise me.) Sve je prošlo dobro, što je bilo olakšanje. English uses "which" for this; using "koji" here is a very common learner error, because "koji" must attach to a noun.',
        highlight: 'Zakasnio je, što me nije iznenadilo.',
      },
      {
        type: 'table',
        title: 'Which Word When',
        headers: ['Refers to', 'Word', 'Example'],
        rows: [
          ['a noun', 'koji', 'čovjek koji govori'],
          ['a possessor', 'čiji', 'čovjek čija je kuća…'],
          ['a place', 'gdje / kamo / odakle', 'grad gdje živim'],
          ['"the thing that"', 'ono što', 'ono što znam'],
          ['a whole clause', 'što', 'Zakasnio je, što me ljuti.'],
        ],
      },
      {
        type: 'example',
        title: 'All Five in Use',
        items: [
          {
            hr: 'To je prijatelj čiju sam sestru upoznao.',
            en: 'That is the friend whose sister I met.',
            note: 'čiju agrees with sestru, the thing owned',
          },
          {
            hr: 'Vratio sam se u selo odakle je moj djed.',
            en: 'I went back to the village my grandfather is from.',
            note: 'odakle — origin',
          },
          {
            hr: 'Ono što najviše volim je more.',
            en: 'What I love most is the sea.',
            note: 'ono što opens the sentence',
          },
          {
            hr: 'Nije došao, što nas je sve iznenadilo.',
            en: 'He did not come, which surprised us all.',
            note: 'što refers to the whole first clause',
          },
          {
            hr: 'Ovo je kuća u kojoj sam odrastao.',
            en: 'This is the house I grew up in.',
            note: 'u kojoj — the formal alternative to gdje',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Zakasnio je, ___ me nije iznenadilo." (…which did not surprise me.)',
        options: ['koji', 'koje', 'što', 'čiji'],
        correct: 2,
        explanation:
          'The relative refers to the whole preceding clause rather than to any single noun, and that is exactly what "što" is for. "Koji" must attach to a noun, so it cannot do this job.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which says "the man whose house is big"? ("kuća" is feminine.)',
        options: [
          'čovjek koji je kuća velika',
          'čovjek čiji je kuća velika',
          'čovjek čija je kuća velika',
        ],
        correct: 2,
        explanation:
          '"Čiji" agrees with the thing OWNED, and the house is feminine, so it takes "čija". The man\'s own gender never affects it — the same rule as every other possessive.',
      },
      {
        type: 'summary',
        title: 'Relative Clauses — Key Takeaways',
        points: [
          'čiji = whose, agreeing with the thing owned',
          'gdje / kamo / odakle for places — natural, and often better than u kojem',
          'ono što = "the thing that", and it cannot shorten to bare što',
          'što refers to a WHOLE clause: Zakasnio je, što me ljuti.',
          'koji must attach to a noun — that is the line between koji and što',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Telling a Story
  // ─────────────────────────────────────────────────────────
  {
    id: 'telling-a-story',
    title: 'Telling a Story',
    subtitle: 'Narrating an event from beginning to end',
    icon: '📖',
    level: 'B1',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Putting It All Together',
        body: 'This lesson introduces almost no new grammar. It takes the aspect system, the time clauses and the connectors you now have and shows what they are FOR: telling somebody what happened. Narrating is the skill B1 is measured on, and it is mostly a matter of choosing the right aspect at the right moment.',
        icon: '📖',
      },
      {
        type: 'rule',
        title: 'The Backbone: Imperfective Scene, Perfective Events',
        body: 'A story has a background and a chain of things that happen. The background is imperfective — Bilo je kasno, padala je kiša, čekao sam autobus. The events are perfective — Odjednom je stigao, ušao sam, sjeo sam. Get that division right and your narration sounds Croatian even if the vocabulary is simple.',
        highlight: 'padala je kiša → odjednom je stigao',
      },
      {
        type: 'table',
        title: 'Getting Started',
        headers: ['Croatian', 'English'],
        rows: [
          ['Jednom davno…', 'Once upon a time…'],
          ['Prošli tjedan…', 'Last week…'],
          ['Sjećam se kad…', 'I remember when…'],
          ['Bilo je to prije nekoliko godina.', 'It was a few years ago.'],
          ['Da ti ispričam što se dogodilo.', 'Let me tell you what happened.'],
          ['Nećeš vjerovati…', 'You will not believe it…'],
        ],
      },
      {
        type: 'table',
        title: 'Moving It Along',
        headers: ['Croatian', 'English', 'Use'],
        rows: [
          ['prvo… onda… zatim', 'first… then… next', 'sequence'],
          ['odjednom', 'suddenly', 'the turn'],
          ['u tom trenutku', 'at that moment', 'the turn'],
          ['nakon toga', 'after that', 'sequence'],
          ['međutim', 'however', 'contrast'],
          ['na kraju', 'in the end', 'closing'],
        ],
      },
      {
        type: 'rule',
        title: 'The Historic Present',
        body: 'Croatian narrators often switch into the PRESENT mid-story to make it vivid, exactly as English does in an anecdote: "So I\'m standing there, and this guy walks up…" Stojim ja tako, kad odjednom dolazi neki tip… Notice "ja" moved after the verb — that inversion is part of the storytelling register, and it is a small thing that sounds very native.',
        highlight: 'Stojim ja tako, kad odjednom…',
      },
      {
        type: 'rule',
        title: 'Reacting While Someone Tells You',
        body: 'A story is a two-person activity in Croatian, and staying silent reads as not listening. Stvarno? (Really?) Ma daj! (No way!) Pa naravno. (Well of course.) I što onda? (And then what?) Ne mogu vjerovati. Drop one in every few sentences and the conversation works the way it is supposed to.',
        highlight: 'Stvarno? · Ma daj! · I što onda?',
      },
      {
        type: 'example',
        title: 'A Short Story',
        items: [
          {
            hr: 'Prošlog ljeta bili smo na moru.',
            en: 'Last summer we were at the seaside.',
            note: 'imperfective — the setting',
          },
          {
            hr: 'Jednog jutra odlučili smo ići na otok.',
            en: 'One morning we decided to go to an island.',
            note: 'perfective — the story starts moving',
          },
          {
            hr: 'Dok smo čekali trajekt, počela je kiša.',
            en: 'While we were waiting for the ferry, it started raining.',
            note: 'background + interrupting event',
          },
          {
            hr: 'Na kraju smo ipak otišli i bilo je predivno.',
            en: 'In the end we went anyway and it was wonderful.',
            note: 'na kraju closes it',
          },
          {
            hr: 'Nikad neću zaboraviti taj dan.',
            en: 'I will never forget that day.',
            note: 'nikad + a negated verb, as always',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are setting the scene: it was raining as you waited. Which aspect?',
        options: [
          'Pala je kiša. (perfective)',
          'Padala je kiša. (imperfective)',
          'Pasti će kiša. (future)',
        ],
        correct: 1,
        explanation:
          'Background description takes the imperfective, because the rain was ongoing rather than a single completed event. The perfective would mark it as one finished occurrence, which is what the events of the story use.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which word marks the turning point in a story?',
        options: ['prvo', 'odjednom', 'na kraju', 'međutim'],
        correct: 1,
        explanation:
          '"Odjednom" — suddenly — is what signals the moment the story turns. "Prvo" opens a sequence, "na kraju" closes it, and "međutim" marks a contrast rather than a surprise.',
      },
      {
        type: 'summary',
        title: 'Telling a Story — Key Takeaways',
        points: [
          'Imperfective for the background, perfective for the events',
          'Openers: Sjećam se kad… / Da ti ispričam što se dogodilo.',
          'prvo, onda, zatim, odjednom, nakon toga, na kraju',
          'The historic present makes an anecdote vivid, as it does in English',
          'React while listening: Stvarno? Ma daj! I što onda?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Opinions and Agreeing
  // ─────────────────────────────────────────────────────────
  {
    id: 'opinions-agreeing',
    title: 'Opinions and Agreeing',
    subtitle: 'Saying what you think, and disagreeing without a row',
    icon: '💭',
    level: 'B1',
    duration: '~5 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Having a Discussion',
        body: 'B1 is the level at which a learner stops reporting facts and starts having views about them. The grammar is already in place — "da" clauses and the cause words. What is needed is the set of openers, and a way to disagree that does not sound like a confrontation.',
        icon: '💭',
      },
      {
        type: 'table',
        title: 'Saying What You Think',
        headers: ['Croatian', 'English', 'Register'],
        rows: [
          ['Mislim da…', 'I think that…', 'neutral'],
          ['Čini mi se da…', 'It seems to me that…', 'softer'],
          ['Po mom mišljenju…', 'In my opinion…', 'more formal'],
          ['Rekao bih da…', 'I would say that…', 'cautious'],
          ['Siguran sam da…', 'I am sure that…', 'strong'],
          ['Nisam siguran, ali…', 'I am not sure, but…', 'hedging'],
        ],
      },
      {
        type: 'rule',
        title: 'Every One of Them Takes "Da"',
        body: 'Notice the pattern: all of these are followed by a full clause introduced by "da", and it is never dropped. Mislim da je to dobra ideja. Čini mi se da nisi u pravu. This is the compulsory "da" from the infinitive lesson, and opinions are where you will use it most.',
        highlight: 'Mislim da…',
      },
      {
        type: 'table',
        title: 'Agreeing and Disagreeing',
        headers: ['Croatian', 'English'],
        rows: [
          ['Slažem se.', 'I agree.'],
          ['Potpuno se slažem.', 'I completely agree.'],
          ['Imaš pravo.', 'You are right.'],
          ['Ne slažem se.', 'I do not agree.'],
          ['Nisam siguran u to.', 'I am not sure about that.'],
          ['Možda, ali…', 'Maybe, but…'],
        ],
      },
      {
        type: 'rule',
        title: 'Imati Pravo, Not Biti u Pravu Only',
        body: 'To be right is "imati pravo" — literally to have right. Imaš pravo. Nemaš pravo. Mislim da je u pravu is also correct and common. What does not work is a direct translation of "you are right" with an adjective, because Croatian treats being right as something you have rather than something you are.',
        highlight: 'Imaš pravo.',
      },
      {
        type: 'rule',
        title: 'Disagree Gently First',
        body: 'A bare "Ne slažem se" is stronger in Croatian than "I disagree" is in English, and in a friendly conversation it lands hard. The usual approach is to concede something first: Možda, ali… / Razumijem, ali… / Djelomično se slažem, međutim… / To je točno, ali s druge strane… The structure is the same one you would use in English; only the phrases are new.',
        highlight: 'Razumijem, ali…',
      },
      {
        type: 'example',
        title: 'A Discussion',
        items: [
          {
            hr: 'Mislim da je učenje jezika lakše kad si mlad.',
            en: 'I think learning languages is easier when you are young.',
            note: 'mislim da + a time clause',
          },
          {
            hr: 'Slažem se, ali odrasli imaju više strpljenja.',
            en: 'I agree, but adults have more patience.',
            note: 'agree, then add',
          },
          {
            hr: 'Čini mi se da to ovisi o osobi.',
            en: 'It seems to me that it depends on the person.',
            note: 'ovisiti o + locative',
          },
          {
            hr: 'Imaš pravo, nisam o tome razmišljao.',
            en: 'You are right, I had not thought about that.',
            note: 'o tome + locative',
          },
          {
            hr: 'Po mom mišljenju, praksa je važnija od teorije.',
            en: 'In my opinion, practice is more important than theory.',
            note: 'comparative + od + genitive',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "You are right"?',
        options: ['Ti si pravo.', 'Imaš pravo.', 'Ti si prav.', 'Jesi pravo.'],
        correct: 1,
        explanation:
          'Croatian treats being right as something you HAVE: imaš pravo. Translating "you are right" with an adjective does not work, because there is no adjective doing that job.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Mislim ___ je to dobra ideja."',
        options: ['što', 'da', 'koji', 'ako'],
        correct: 1,
        explanation:
          'Verbs of thinking and saying take a clause introduced by "da", and unlike English "that" it is never dropped. This is the compulsory use of "da" rather than the one that competes with the infinitive.',
      },
      {
        type: 'summary',
        title: 'Opinions — Key Takeaways',
        points: [
          'Mislim da… / Čini mi se da… / Po mom mišljenju… — and da is never dropped',
          'Slažem se · Imaš pravo · Ne slažem se',
          'Being right is something you HAVE: imaš pravo',
          'A bare "ne slažem se" lands harder in Croatian than in English',
          'Concede first: Razumijem, ali… / Možda, ali…',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Complaints and Problems
  // ─────────────────────────────────────────────────────────
  {
    id: 'complaints-problems',
    title: 'When Something Goes Wrong',
    subtitle: 'Explaining a problem and asking for it to be fixed',
    icon: '🛠️',
    level: 'B1',
    duration: '~5 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Situations You Cannot Avoid',
        body: 'A room with no hot water, a bill that is wrong, a delivery that never came. These conversations need precise, calm language — and the useful discovery is that Croatian mostly avoids blaming anyone, which makes complaining easier than you might expect.',
        icon: '🛠️',
      },
      {
        type: 'rule',
        title: 'Croatian Reports Faults, It Does Not Assign Them',
        body: 'The natural way to say something is broken puts the OBJECT first and leaves the person out. Ne radi klima. (The air conditioning is not working.) Pokvario se bojler. (The boiler has broken.) Nešto nije u redu s računom. (Something is wrong with the bill.) There is no "you" anywhere, which is exactly why it does not sound like an accusation.',
        highlight: 'Ne radi klima.',
      },
      {
        type: 'table',
        title: 'Describing the Problem',
        headers: ['Croatian', 'English'],
        rows: [
          ['Ne radi.', 'It is not working.'],
          ['Pokvario se.', 'It has broken.'],
          ['Nema tople vode.', 'There is no hot water.'],
          ['Ovo nije ono što sam naručio.', 'This is not what I ordered.'],
          ['Mislim da je došlo do greške.', 'I think there has been a mistake.'],
          ['Račun nije točan.', 'The bill is not correct.'],
        ],
      },
      {
        type: 'rule',
        title: 'Opening Politely',
        body: 'Start with "Oprostite" and then state the problem, not the person. Oprostite, imam problem sa sobom. Oprostite, mislim da je došlo do greške. Adding "molim vas" and using the V-form throughout keeps the whole exchange civil, and in practice it gets things fixed faster than the alternative.',
        highlight: 'Oprostite, imam problem…',
      },
      {
        type: 'table',
        title: 'Asking for a Fix',
        headers: ['Croatian', 'English'],
        rows: [
          ['Možete li to provjeriti?', 'Could you check that?'],
          ['Možete li mi pomoći s ovim?', 'Could you help me with this?'],
          ['Htio bih razgovarati s voditeljem.', 'I would like to speak to the manager.'],
          ['Mogu li dobiti drugu sobu?', 'Could I have a different room?'],
          ['Kada će to biti riješeno?', 'When will it be sorted out?'],
          ['Htio bih uložiti žalbu.', 'I would like to make a complaint.'],
        ],
      },
      {
        type: 'rule',
        title: 'The Conditional Softens Everything',
        body: '"Htio bih" and "Htjela bih" turn a demand into a request, and "Mogli biste li…?" is softer still than "Možete li…?". This is the same conditional you met for ordering coffee at A1, doing more serious work. In a complaint it matters more than anywhere else: the conditional is what keeps you firm without being rude.',
        highlight: 'Htio bih… / Mogli biste li…?',
      },
      {
        type: 'example',
        title: 'A Complaint, Start to Finish',
        items: [
          {
            hr: 'Oprostite, u sobi nema tople vode.',
            en: 'Excuse me, there is no hot water in the room.',
            note: 'nema + genitive, and no blame',
          },
          {
            hr: 'Klima ne radi već dva dana.',
            en: 'The air conditioning has not worked for two days.',
            note: 'već + duration, verb in the present',
          },
          {
            hr: 'Možete li poslati nekoga da to pogleda?',
            en: 'Could you send someone to look at it?',
            note: 'da + present — a different subject',
          },
          {
            hr: 'Mislim da je došlo do greške u računu.',
            en: 'I think there has been a mistake in the bill.',
            note: 'doći do + genitive — an impersonal event',
          },
          {
            hr: 'Hvala vam na razumijevanju.',
            en: 'Thank you for your understanding.',
            note: 'hvala na + locative — how to close',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "The air conditioning is not working"?',
        options: ['Klima nije rad.', 'Ne radi klima.', 'Klima ne raditi.', 'Klima nema rad.'],
        correct: 1,
        explanation:
          'Croatian states the fault with the object and the verb, leaving people out of it entirely: Ne radi klima. That is also why the sentence does not read as an accusation.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the softest way to ask for something to be checked?',
        options: ['Provjerite to.', 'Možete li to provjeriti?', 'Mogli biste li to provjeriti?'],
        correct: 2,
        explanation:
          'The conditional "mogli biste li" is the gentlest of the three. A bare imperative is the most direct, and "možete li" sits between them — all three are usable, but in a complaint the softest wording works best.',
      },
      {
        type: 'summary',
        title: 'Problems — Key Takeaways',
        points: [
          'Croatian reports the fault, not the culprit: Ne radi klima.',
          'Open with Oprostite and use the V-form throughout',
          'Nema tople vode / Pokvario se / Došlo je do greške',
          'The conditional keeps you firm without being rude: Htio bih…',
          'Close with Hvala vam na razumijevanju.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Offices and Paperwork
  // ─────────────────────────────────────────────────────────
  {
    id: 'bureaucracy',
    title: 'Offices and Paperwork',
    subtitle: 'The bank, the post office, and forms that must be filled in',
    icon: '🏛️',
    level: 'B1',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'The Language of the Counter',
        body: 'Anyone spending real time in Croatia will meet a counter, a form and a queue. The vocabulary is narrow and highly repetitive, which makes it unusually quick to learn — and the impersonal constructions you met earlier are exactly what official language runs on.',
        icon: '🏛️',
      },
      {
        type: 'table',
        title: 'Where You Go',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['banka', 'bank', 'šalter', 'counter, window'],
          ['pošta', 'post office', 'red', 'queue'],
          ['ured', 'office', 'broj', 'number (ticket)'],
          ['matični ured', 'registry office', 'obrazac', 'form'],
          ['policijska postaja', 'police station', 'potvrda', 'certificate, receipt'],
          ['općina', 'municipal office', 'pečat', 'stamp'],
        ],
      },
      {
        type: 'table',
        title: 'Documents',
        headers: ['Croatian', 'English'],
        rows: [
          ['osobna iskaznica', 'ID card'],
          ['putovnica', 'passport'],
          ['vozačka dozvola', 'driving licence'],
          ['boravišna dozvola', 'residence permit'],
          ['rodni list', 'birth certificate'],
          ['OIB', 'personal identification number'],
        ],
      },
      {
        type: 'rule',
        title: 'The OIB Is the Key to Everything',
        body: 'The OIB — osobni identifikacijski broj — is an eleven-digit number that every resident and taxpayer in Croatia has, and almost nothing official can be done without it. Anyone dealing with property, a bank account or an inheritance will be asked for it early. Trebam OIB. Imate li OIB? Worth knowing before the counter asks.',
        highlight: 'OIB',
      },
      {
        type: 'table',
        title: 'At the Counter',
        headers: ['Croatian', 'English'],
        rows: [
          ['Trebam podići novac.', 'I need to withdraw money.'],
          ['Htio bih otvoriti račun.', 'I would like to open an account.'],
          ['Gdje se to predaje?', 'Where do I hand this in?'],
          ['Trebam li ispuniti obrazac?', 'Do I need to fill in a form?'],
          ['Koje dokumente trebam?', 'Which documents do I need?'],
          ['Koliko dugo to traje?', 'How long does it take?'],
        ],
      },
      {
        type: 'rule',
        title: 'Official Language Is Impersonal',
        body: 'Forms and clerks avoid naming a person, exactly as the impersonal lesson described. Popunjava se čitko. (To be completed legibly.) Predaje se na šalteru broj tri. Potrebno je priložiti presliku. Molimo pričekajte. Reading this pattern is most of what is needed to get through a form, and "potrebno je" plus an infinitive is the single most common shape.',
        highlight: 'Potrebno je priložiti presliku.',
      },
      {
        type: 'example',
        title: 'Getting Something Done',
        items: [
          {
            hr: 'Dobar dan, trebam potvrdu o prebivalištu.',
            en: 'Good day, I need a certificate of residence.',
            note: 'potvrda o + locative',
          },
          {
            hr: 'Trebate li moju osobnu iskaznicu?',
            en: 'Do you need my ID card?',
            note: 'V-form throughout',
          },
          {
            hr: 'Uzmite broj i pričekajte da vas prozovu.',
            en: 'Take a number and wait to be called.',
            note: 'da + present — a different subject',
          },
          {
            hr: 'Obrazac se predaje na šalteru broj dva.',
            en: 'The form is handed in at counter number two.',
            note: 'impersonal se — how a sign words it',
          },
          {
            hr: 'Trebate priložiti presliku putovnice.',
            en: 'You need to attach a copy of your passport.',
            note: 'preslika + genitive',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is an OIB?',
        options: [
          'a bank account number',
          'a personal identification number',
          'a residence permit',
          'a tax form',
        ],
        correct: 1,
        explanation:
          'The osobni identifikacijski broj is the eleven-digit number every resident and taxpayer has. Almost nothing official — a bank account, a property matter, an inheritance — can be done without it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A sign reads "Obrazac se predaje na šalteru broj dva." What does it mean?',
        options: [
          'He hands the form in at counter two.',
          'The form is handed in at counter two.',
          'Hand me the form at counter two.',
        ],
        correct: 1,
        explanation:
          'The impersonal "se" removes the doer, which is exactly why official notices are written this way. There is no "he" and no "me" in the sentence.',
      },
      {
        type: 'summary',
        title: 'Paperwork — Key Takeaways',
        points: [
          'banka, pošta, šalter, obrazac, potvrda, pečat',
          'osobna iskaznica, putovnica, boravišna dozvola, rodni list',
          'The OIB is required for almost anything official',
          'Official language is impersonal: potrebno je…, predaje se…',
          'Trebam… / Htio bih… / Koje dokumente trebam?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Renting a Flat
  // ─────────────────────────────────────────────────────────
  {
    id: 'renting-flat',
    title: 'Renting a Flat',
    subtitle: 'Reading an advert, viewing a place, agreeing terms',
    icon: '🔑',
    level: 'B1',
    duration: '~5 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'One of the First Real Tasks',
        body: 'Finding somewhere to live is where a learner first has to read compressed, abbreviated Croatian and then negotiate about money. The adverts have their own shorthand, and knowing it turns an intimidating page of text into something scannable.',
        icon: '🔑',
      },
      {
        type: 'table',
        title: 'Reading the Advert',
        headers: ['Croatian', 'English'],
        rows: [
          ['iznajmljuje se', 'for rent'],
          ['garsonijera', 'studio flat'],
          ['dvosoban stan', 'two-room flat'],
          ['namješten / nenamješten', 'furnished / unfurnished'],
          ['kvadrata (m²)', 'square metres'],
          ['najamnina', 'rent'],
          ['režije', 'utilities'],
          ['polog / jamstvo', 'deposit'],
        ],
      },
      {
        type: 'rule',
        title: 'How Croatian Counts Rooms',
        body: 'A "dvosoban stan" is a two-ROOM flat, and the count excludes the kitchen and bathroom — so it is roughly a one-bedroom flat with a living room. "Jednosoban" is one room; "trosoban" is three. A "garsonijera" is a single space with a kitchen corner. Reading these as bedrooms will consistently overestimate the size by one.',
        highlight: 'dvosoban ≈ one bedroom plus a living room',
      },
      {
        type: 'rule',
        title: 'Rent Plus Režije',
        body: '"Najamnina" is the rent itself. "Režije" — always plural — are the running costs: water, electricity, heating, building maintenance. An advert quoting 500 eura will usually mean plus režije, which can add a meaningful amount in winter. The question to ask is simply: Jesu li režije uključene?',
        highlight: 'Jesu li režije uključene?',
      },
      {
        type: 'table',
        title: 'Viewing and Asking',
        headers: ['Croatian', 'English'],
        rows: [
          ['Mogu li pogledati stan?', 'Can I view the flat?'],
          ['Koliko je najamnina?', 'How much is the rent?'],
          ['Jesu li režije uključene?', 'Are utilities included?'],
          ['Koliki je polog?', 'How much is the deposit?'],
          ['Na koliko dugo je ugovor?', 'How long is the contract for?'],
          ['Je li dopušteno držati kućne ljubimce?', 'Are pets allowed?'],
        ],
      },
      {
        type: 'rule',
        title: 'Ask for a Contract',
        body: '"Ugovor o najmu" is a rental contract, and a written one protects both sides — it is also what a residence permit application will want to see. Trebam ugovor o najmu. Možemo li potpisati ugovor? Note "potpisati", the prefixed verb from earlier: to write underneath.',
        highlight: 'ugovor o najmu',
      },
      {
        type: 'example',
        title: 'A Viewing',
        items: [
          {
            hr: 'Zovem u vezi oglasa za stan.',
            en: 'I am calling about the advert for the flat.',
            note: 'u vezi + genitive',
          },
          {
            hr: 'Je li stan još slobodan?',
            en: 'Is the flat still available?',
            note: 'još = still',
          },
          {
            hr: 'Stan je na trećem katu, bez lifta.',
            en: 'The flat is on the third floor, with no lift.',
            note: 'bez + genitive',
          },
          {
            hr: 'Najamnina je pet stotina eura plus režije.',
            en: 'The rent is five hundred euros plus utilities.',
            note: 'pet stotina eura — genitive plural',
          },
          {
            hr: 'Polog je jedna mjesečna najamnina.',
            en: "The deposit is one month's rent.",
            note: 'mjesečna agreeing with najamnina',
          },
          {
            hr: 'Kada bih se mogao useliti?',
            en: 'When could I move in?',
            note: 'conditional + useliti se',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'An advert says "dvosoban stan". Roughly what is it?',
        options: [
          'a studio',
          'one bedroom plus a living room',
          'two bedrooms plus a living room',
          'two flats',
        ],
        correct: 1,
        explanation:
          'Croatian counts rooms rather than bedrooms and excludes the kitchen and bathroom, so a dvosoban stan is about one bedroom and a living room. Reading it as two bedrooms will overestimate it by one.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What are "režije"?',
        options: ['the deposit', 'the utilities', 'the contract', 'the agency fee'],
        correct: 1,
        explanation:
          '"Režije" are the running costs — water, electricity, heating, building maintenance — and they are usually quoted separately from the rent. The deposit is "polog" and the contract is "ugovor".',
      },
      {
        type: 'summary',
        title: 'Renting — Key Takeaways',
        points: [
          'iznajmljuje se, garsonijera, dvosoban stan, namješten',
          'Rooms are counted without the kitchen and bathroom',
          'najamnina is the rent; režije are the utilities, usually extra',
          'Jesu li režije uključene? — ask this every time',
          'Get an ugovor o najmu; a residence permit application will want it',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Applying for a Job
  // ─────────────────────────────────────────────────────────
  {
    id: 'job-interview',
    title: 'Applying for a Job',
    subtitle: 'The CV, the covering letter, and the interview',
    icon: '📄',
    level: 'B1',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Talking About Yourself Professionally',
        body: 'A job application is where the formal register stops being optional. It also draws on almost everything at this level: the past tense for experience, the present for what you do now, the conditional for what you would like, and the cause words for why you are applying.',
        icon: '📄',
      },
      {
        type: 'table',
        title: 'The Documents',
        headers: ['Croatian', 'English'],
        rows: [
          ['životopis', 'CV'],
          ['zamolba / motivacijsko pismo', 'covering letter'],
          ['natječaj / oglas za posao', 'job advert, vacancy'],
          ['prijava', 'application'],
          ['radno iskustvo', 'work experience'],
          ['preporuka', 'reference'],
        ],
      },
      {
        type: 'rule',
        title: 'Životopis, Not Biografija',
        body: 'A CV is a "životopis" — literally a life-writing, and another compound worth noticing. A "zamolba" is the covering letter; "motivacijsko pismo" is the more modern term and both are understood. The advert itself is an "oglas za posao", or a "natječaj" when it is a formal public competition, which is how most public-sector posts are advertised.',
        highlight: 'životopis · zamolba',
      },
      {
        type: 'table',
        title: 'Talking About Experience',
        headers: ['Croatian', 'English'],
        rows: [
          ['Radio sam kao…', 'I worked as…'],
          ['Imam pet godina iskustva.', 'I have five years of experience.'],
          ['Diplomirao sam na…', 'I graduated from…'],
          ['Trenutno radim u…', 'I currently work at…'],
          ['Zadužen sam za…', 'I am responsible for…'],
          ['Tečno govorim…', 'I speak … fluently.'],
        ],
      },
      {
        type: 'rule',
        title: 'The Participle Agrees With You',
        body: 'Every past-tense statement about yourself carries your gender. A man writes "Diplomirao sam", "Radio sam", "Bio sam zadužen". A woman writes "Diplomirala sam", "Radila sam", "Bila sam zadužena". In a written application this is the most visible place to get it right, because it appears in almost every sentence.',
        highlight: 'Radio sam / Radila sam',
      },
      {
        type: 'table',
        title: 'At the Interview',
        headers: ['Croatian', 'English'],
        rows: [
          ['Recite nam nešto o sebi.', 'Tell us something about yourself.'],
          ['Zašto se javljate na ovo mjesto?', 'Why are you applying for this post?'],
          ['Koje su vaše prednosti?', 'What are your strengths?'],
          ['Gdje se vidite za pet godina?', 'Where do you see yourself in five years?'],
          ['Kakva su vaša očekivanja?', 'What are your expectations?'],
          ['Imate li pitanja za nas?', 'Do you have any questions for us?'],
        ],
      },
      {
        type: 'rule',
        title: 'Answer With Reasons',
        body: 'The cause and purpose words from earlier are what an interview answer is made of. Javljam se jer me zanima ovo područje. Želim raditi ovdje zbog vaših projekata. Učim hrvatski kako bih mogao raditi s klijentima. An answer without a "jer" or a "kako bi" in it will sound thin, in Croatian as much as in English.',
        highlight: 'Javljam se jer…',
      },
      {
        type: 'example',
        title: 'An Application',
        items: [
          {
            hr: 'Javljam se na vaš oglas za mjesto prevoditelja.',
            en: 'I am applying for your advertised translator post.',
            note: 'javljati se na + accusative',
          },
          {
            hr: 'Diplomirala sam na Filozofskom fakultetu u Zagrebu.',
            en: 'I graduated from the Faculty of Humanities in Zagreb.',
            note: 'a woman writing; a man: diplomirao',
          },
          {
            hr: 'Imam tri godine iskustva u prevođenju.',
            en: 'I have three years of experience in translation.',
            note: 'tri godine — the 2–4 form',
          },
          {
            hr: 'Zanima me ovo mjesto jer volim raditi s ljudima.',
            en: 'I am interested in this post because I like working with people.',
            note: 'zanima me — the thing is the subject',
          },
          {
            hr: 'Unaprijed zahvaljujem na razmatranju.',
            en: 'Thank you in advance for your consideration.',
            note: 'the standard closing of a zamolba',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is a "životopis"?',
        options: ['a covering letter', 'a CV', 'a reference', 'a job advert'],
        correct: 1,
        explanation:
          'A "životopis" is a CV — literally a life-writing. The covering letter is a "zamolba" or "motivacijsko pismo", and the advert is an "oglas za posao".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A woman is writing that she graduated. Which is correct?',
        options: ['Diplomirao sam', 'Diplomirala sam', 'Diplomirali smo', 'Diplomirati sam'],
        correct: 1,
        explanation:
          'The past participle agrees with the speaker, so a woman writes "diplomirala sam". In a written application this ending appears in nearly every sentence, which makes it the most visible thing to get right.',
      },
      {
        type: 'summary',
        title: 'Job Applications — Key Takeaways',
        points: [
          'životopis = CV · zamolba = covering letter · oglas za posao = advert',
          'Radio/Radila sam kao… — the participle agrees with you',
          'Imam pet godina iskustva · Zadužen sam za…',
          'Interview answers need a reason: jer…, zbog…, kako bih…',
          'Close a written application with Unaprijed zahvaljujem.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // News and Media
  // ─────────────────────────────────────────────────────────
  {
    id: 'media-news',
    title: 'News and Media',
    subtitle: 'Reading a headline, following a report, saying what you heard',
    icon: '📰',
    level: 'B1',
    duration: '~5 min',
    color: '#78716c',
    bg: '#fafaf9',
    slides: [
      {
        type: 'intro',
        title: 'Where Reading Really Starts',
        body: 'News is the first authentic Croatian most learners can actually get through, because the vocabulary repeats and the structures are predictable. It is also where reported speech stops being an exercise: almost every news sentence is somebody saying something.',
        icon: '📰',
      },
      {
        type: 'table',
        title: 'The Basics',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['vijesti', 'news', 'naslov', 'headline'],
          ['novine', 'newspaper', 'članak', 'article'],
          ['emisija', 'programme', 'novinar', 'journalist'],
          ['izvještaj', 'report', 'izvor', 'source'],
          ['dnevnik', 'TV news bulletin', 'intervju', 'interview'],
          ['objaviti', 'to publish', 'javiti', 'to report'],
        ],
      },
      {
        type: 'rule',
        title: 'Headlines Drop the Verb',
        body: 'Croatian headlines compress hard, often losing "biti" entirely. "Nova pravila na snazi od siječnja" — new rules in force from January, with no verb at all. "Ministar u posjetu Splitu." Expect to supply "je" or "su" mentally, and the headline becomes an ordinary sentence.',
        highlight: 'Nova pravila na snazi od siječnja',
      },
      {
        type: 'rule',
        title: 'News Runs on Reported Speech',
        body: 'This is where that lesson pays off. Ministar je rekao da će se pravila promijeniti. Policija javlja da nema ozlijeđenih. Izvori tvrde da je odluka već donesena. Remember that Croatian does not backshift: the tense in the clause is the tense the person actually used.',
        highlight: 'Rekao je da će…',
      },
      {
        type: 'table',
        title: 'Saying Where You Heard It',
        headers: ['Croatian', 'English'],
        rows: [
          ['Čuo sam na vijestima da…', 'I heard on the news that…'],
          ['Pisalo je u novinama da…', 'It said in the paper that…'],
          ['Navodno…', 'Apparently…'],
          ['Prema izvještaju…', 'According to the report…'],
          ['Kažu da…', 'They say that…'],
          ['Nisam siguran je li to točno.', 'I am not sure whether that is true.'],
        ],
      },
      {
        type: 'rule',
        title: 'Navodno — Apparently',
        body: 'One word that does a lot of work: "navodno" marks everything after it as second-hand and unverified. Navodno će cijene rasti. It is how a careful speaker signals that they are passing something on rather than vouching for it — useful in conversation, and very common in reporting.',
        highlight: 'Navodno…',
      },
      {
        type: 'example',
        title: 'Talking About the News',
        items: [
          {
            hr: 'Jesi li čuo što se dogodilo?',
            en: 'Have you heard what happened?',
            note: 'što se dogodilo — impersonal se',
          },
          {
            hr: 'Pisalo je u novinama da će biti izbori.',
            en: 'It said in the paper that there will be elections.',
            note: 'pisalo je — impersonal, no subject',
          },
          {
            hr: 'Navodno je odluka već donesena.',
            en: 'Apparently the decision has already been taken.',
            note: 'a passive participle: donesena',
          },
          {
            hr: 'Prema izvještaju, nema ozlijeđenih.',
            en: 'According to the report, there are no injuries.',
            note: 'nema + genitive plural',
          },
          {
            hr: 'Ne vjerujem svemu što pročitam.',
            en: 'I do not believe everything I read.',
            note: 'vjerovati + dative: svemu',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What does "navodno" signal?',
        options: [
          'that the speaker witnessed it',
          'that it is second-hand and unverified',
          'that it is officially confirmed',
          'that it happened long ago',
        ],
        correct: 1,
        explanation:
          '"Navodno" marks what follows as reported rather than vouched for — the equivalent of English "apparently" or "allegedly". It is how a careful speaker distances themselves from a claim.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A headline reads "Nova pravila na snazi od siječnja." What is missing?',
        options: ['the subject', 'the verb', 'the object', 'nothing'],
        correct: 1,
        explanation:
          'Croatian headlines routinely drop "biti", so the reader supplies "su": Nova pravila SU na snazi… Supplying it mentally turns most headlines into ordinary sentences.',
      },
      {
        type: 'summary',
        title: 'News — Key Takeaways',
        points: [
          'vijesti, novine, članak, naslov, izvještaj, izvor',
          'Headlines drop biti — supply je or su mentally',
          'News is mostly reported speech, and Croatian does not backshift',
          'Čuo sam na vijestima da… / Pisalo je u novinama da…',
          'Navodno marks a claim as second-hand',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Technology and the Internet
  // ─────────────────────────────────────────────────────────
  {
    id: 'technology-internet',
    title: 'Technology and the Internet',
    subtitle: 'Everyday digital vocabulary, and Croatian’s own words for it',
    icon: '💻',
    level: 'B1',
    duration: '~5 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'A Vocabulary With Two Layers',
        body: 'Croatian has a strong tradition of building native words rather than importing them, and technology is where that is most visible. Most concepts have both a Croatian word and an international one, and knowing which is used where is half of sounding current.',
        icon: '💻',
      },
      {
        type: 'table',
        title: 'The Native Words',
        headers: ['Croatian', 'English', 'Built from'],
        rows: [
          ['računalo', 'computer', 'računati — to calculate'],
          ['zaslon', 'screen', 'zaslon — a shield'],
          ['tipkovnica', 'keyboard', 'tipka — a key'],
          ['miš', 'mouse', 'the animal, as in English'],
          ['preglednik', 'browser', 'pregledati — to look through'],
          ['poveznica', 'link', 'povezati — to connect'],
          ['pretraživač', 'search engine', 'pretraživati — to search'],
        ],
      },
      {
        type: 'rule',
        title: 'Računalo and Kompjuter Both Exist',
        body: '"Računalo" is the standard Croatian word and what you will read in writing, on signs and in official use. "Kompjuter" is heard in speech and understood everywhere. Neither is wrong; the native word is simply the one that belongs in anything written. The same pattern runs through the whole field.',
        highlight: 'računalo (written) · kompjuter (spoken)',
      },
      {
        type: 'table',
        title: 'Everyday Actions',
        headers: ['Croatian', 'English'],
        rows: [
          ['preuzeti', 'to download'],
          ['poslati', 'to send'],
          ['spremiti', 'to save'],
          ['obrisati', 'to delete'],
          ['prijaviti se', 'to log in'],
          ['odjaviti se', 'to log out'],
          ['podijeliti', 'to share'],
          ['pretraživati', 'to search'],
        ],
      },
      {
        type: 'rule',
        title: 'Prijaviti Se and Odjaviti Se',
        body: 'Two reflexive verbs you will meet on every screen. "Prijaviti se" is to log in or to register; "odjaviti se" is to log out. Note the prefixes doing exactly what the prefix lesson described: pri- towards, od- away from. Prijavi se na stranicu. Odjavio sam se.',
        highlight: 'prijaviti se / odjaviti se',
      },
      {
        type: 'table',
        title: 'Phones and Connection',
        headers: ['Croatian', 'English'],
        rows: [
          ['mobitel', 'mobile phone'],
          ['aplikacija', 'app'],
          ['punjač', 'charger'],
          ['baterija', 'battery'],
          ['lozinka', 'password'],
          ['korisničko ime', 'username'],
          ['nema signala', 'there is no signal'],
        ],
      },
      {
        type: 'example',
        title: 'In Use',
        items: [
          {
            hr: 'Možeš li mi poslati poveznicu?',
            en: 'Can you send me the link?',
            note: 'poveznica → poveznicu, accusative',
          },
          {
            hr: 'Zaboravio sam lozinku.',
            en: 'I have forgotten my password.',
            note: 'Croatian omits "my" here',
          },
          {
            hr: 'Nema signala, nazvat ću te kasnije.',
            en: 'There is no signal, I will call you later.',
            note: 'nema + genitive',
          },
          {
            hr: 'Baterija mi je pri kraju.',
            en: 'My battery is nearly dead.',
            note: 'mi — the possessive dative',
          },
          {
            hr: 'Preuzmi aplikaciju i prijavi se.',
            en: 'Download the app and log in.',
            note: 'two imperatives',
          },
          {
            hr: 'Radim od kuće dva dana tjedno.',
            en: 'I work from home two days a week.',
            note: 'od kuće + a bare accusative duration',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is a "poveznica"?',
        options: ['a password', 'a link', 'a browser', 'a keyboard'],
        correct: 1,
        explanation:
          'A "poveznica" is a link, built from "povezati" — to connect. The browser is a "preglednik", the keyboard a "tipkovnica" and the password a "lozinka".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which means "to log in"?',
        options: ['odjaviti se', 'prijaviti se', 'preuzeti', 'spremiti'],
        correct: 1,
        explanation:
          '"Prijaviti se" is to log in or register, with pri- meaning towards; "odjaviti se" with od- is to log out. "Preuzeti" is download and "spremiti" is save.',
      },
      {
        type: 'summary',
        title: 'Technology — Key Takeaways',
        points: [
          'Croatian builds native words: računalo, zaslon, tipkovnica, preglednik',
          'The native word belongs in writing; the international one is heard in speech',
          'preuzeti, spremiti, obrisati, podijeliti, pretraživati',
          'prijaviti se = log in · odjaviti se = log out',
          'mobitel, aplikacija, punjač, lozinka, korisničko ime',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Nature and the Environment
  // ─────────────────────────────────────────────────────────
  {
    id: 'environment-nature',
    title: 'Nature and the Environment',
    subtitle: 'The Croatian landscape, and talking about protecting it',
    icon: '🌲',
    level: 'B1',
    duration: '~5 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'A Country With a Lot of It',
        body: 'Croatia has eight national parks, a thousand islands and a coastline most countries would build an economy around — which they have. This vocabulary is useful for travel, for conversation, and because environmental topics come up constantly in a country whose living depends on how the coast looks.',
        icon: '🌲',
      },
      {
        type: 'table',
        title: 'The Landscape',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['more', 'sea', 'planina', 'mountain'],
          ['otok', 'island', 'brdo', 'hill'],
          ['obala', 'coast', 'rijeka', 'river'],
          ['plaža', 'beach', 'jezero', 'lake'],
          ['uvala', 'cove, bay', 'slap', 'waterfall'],
          ['šuma', 'forest', 'špilja', 'cave'],
        ],
      },
      {
        type: 'rule',
        title: 'Words the Coast Gave the World',
        body: 'Two Croatian landscape words entered international scientific use. "Kras" — the limestone country of Istria and the Dinarides — is the origin of the geological term karst, used worldwide for that terrain and its caves and sinkholes. And "Dalmacija" gave its name to the dog. Both are worth knowing, because Croatians will mention them.',
        highlight: 'kras → karst',
      },
      {
        type: 'table',
        title: 'Weather and Wind',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['bura', 'the bura', 'cold, dry, from the north-east'],
          ['jugo', 'the jugo', 'warm, damp, from the south'],
          ['maestral', 'the maestral', 'a pleasant summer sea breeze'],
          ['oluja', 'storm', ''],
          ['suša', 'drought', ''],
          ['poplava', 'flood', ''],
        ],
      },
      {
        type: 'rule',
        title: 'The Winds Have Names and Reputations',
        body: 'On the Adriatic the wind is not small talk. The "bura" is cold and violent and can close roads and stop ferries; the "jugo" is warm and damp and is blamed — seriously — for headaches and bad moods. "Puše bura" is a sentence with consequences, and knowing which wind is which marks you out as someone who has actually been there.',
        highlight: 'Puše bura.',
      },
      {
        type: 'table',
        title: 'Talking About the Environment',
        headers: ['Croatian', 'English'],
        rows: [
          ['okoliš', 'the environment'],
          ['onečišćenje', 'pollution'],
          ['otpad', 'waste'],
          ['reciklirati', 'to recycle'],
          ['zaštititi', 'to protect'],
          ['nacionalni park', 'national park'],
          ['klimatske promjene', 'climate change'],
        ],
      },
      {
        type: 'example',
        title: 'In Conversation',
        items: [
          {
            hr: 'Plitvička jezera su najpoznatiji nacionalni park.',
            en: 'Plitvice Lakes is the best-known national park.',
            note: 'jezera is neuter plural → su',
          },
          {
            hr: 'Danas puše jaka bura, trajekti ne voze.',
            en: 'A strong bura is blowing today, the ferries are not running.',
            note: 'exactly how this gets said',
          },
          {
            hr: 'Trebamo bolje zaštititi obalu.',
            en: 'We need to protect the coast better.',
            note: 'trebamo + infinitive',
          },
          {
            hr: 'Otpad se odvaja u različite spremnike.',
            en: 'Waste is separated into different bins.',
            note: 'impersonal se',
          },
          {
            hr: 'Ljeti je more toplo, a zimi hladno.',
            en: 'In summer the sea is warm, and in winter cold.',
            note: 'a for side-by-side contrast',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'The "bura" is…',
        options: [
          'a warm, damp southerly wind',
          'a cold, dry north-easterly wind',
          'a summer sea breeze',
          'a kind of storm at sea',
        ],
        correct: 1,
        explanation:
          'The bura comes cold and dry off the mountains from the north-east and can stop ferries running. The warm damp southerly is the jugo, and the pleasant summer breeze is the maestral.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which international scientific term comes from a Croatian landscape word?',
        options: ['tundra', 'karst', 'fjord', 'delta'],
        correct: 1,
        explanation:
          '"Karst" comes from "kras", the limestone country of Istria and the Dinarides, and is now used worldwide for that terrain and its caves and sinkholes.',
      },
      {
        type: 'summary',
        title: 'Nature — Key Takeaways',
        points: [
          'more, otok, obala, uvala, planina, rijeka, jezero, slap, šuma',
          'bura = cold and north-easterly · jugo = warm and southerly',
          'Puše bura is a sentence with practical consequences on the coast',
          'okoliš, onečišćenje, otpad, reciklirati, zaštititi',
          'Croatian "kras" is the origin of the geological term karst',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Food and Cooking
  // ─────────────────────────────────────────────────────────
  {
    id: 'food-cooking',
    title: 'Food and Cooking',
    subtitle: 'Reading a recipe, and the regional split in Croatian food',
    icon: '🍲',
    level: 'B1',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'A Recipe Is Grammar You Can Eat',
        body: 'A1 got you through a café. This is the kitchen — and a recipe happens to be one of the best texts a B1 learner can read, because it is pure imperative and pure quantity-plus-genitive, which are two things you already have.',
        icon: '🍲',
      },
      {
        type: 'table',
        title: 'In the Kitchen',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['kuhati', 'to cook, boil', 'lonac', 'pot'],
          ['peći', 'to bake, roast', 'tava', 'frying pan'],
          ['pržiti', 'to fry', 'pećnica', 'oven'],
          ['rezati', 'to cut', 'nož', 'knife'],
          ['miješati', 'to stir, mix', 'žlica', 'spoon'],
          ['dodati', 'to add', 'zdjela', 'bowl'],
        ],
      },
      {
        type: 'rule',
        title: 'A Recipe Is Written in Imperatives',
        body: 'Croatian recipes address you directly, usually with the polite plural. Narežite luk. (Chop the onion.) Zagrijte ulje u tavi. Dodajte sol i papar. Kuhajte dvadeset minuta. Miješajte povremeno. If you can read the -ite ending, you can follow a recipe — and that is a genuinely satisfying first authentic text.',
        highlight: 'Narežite luk. Dodajte sol.',
      },
      {
        type: 'rule',
        title: 'Quantities Take the Genitive',
        body: 'Every line of an ingredient list is the quantity rule at work. dvjesto grama brašna, litra mlijeka, žlica šećera, malo soli, tri jajeta. The measure comes first and what is measured follows in the genitive — exactly as it did in a café, just in longer lists.',
        highlight: 'dvjesto grama brašna',
      },
      {
        type: 'table',
        title: 'Dishes Worth Knowing',
        headers: ['Dish', 'What it is', 'Where'],
        rows: [
          ['peka', 'meat and vegetables under an iron bell', 'the coast'],
          ['pašticada', 'slow-braised beef in sweet-sour sauce', 'Dalmatia'],
          ['crni rižot', 'cuttlefish-ink risotto', 'the coast'],
          ['štrukli', 'baked or boiled cheese pastry', 'Zagorje'],
          ['kulen', 'spiced paprika sausage', 'Slavonia'],
          ['fritule', 'small sweet fried doughnuts', 'the coast'],
        ],
      },
      {
        type: 'rule',
        title: 'The Country Splits in Two at the Table',
        body: 'Croatian food divides along the same line as its geography. The coast is Mediterranean — olive oil, fish, grilled meat, herbs, wine. The continental north and east are Central European — pork, paprika, freshwater fish, pastry, beer and rakija. Asking a Croatian which is better is not a neutral question, and you will get a long answer.',
        highlight: 'coast Mediterranean · inland Central European',
      },
      {
        type: 'rule',
        title: 'Sitting Down to Eat',
        body: '"Dobar tek!" is what you say before eating — enjoy your meal — and it is expected rather than optional. "Živjeli!" is for the glasses. If you are eating at someone\'s home, expect to be offered more than you can manage, and expect "Samo malo, molim" to be treated as an opening position rather than an answer.',
        highlight: 'Dobar tek!',
      },
      {
        type: 'example',
        title: 'A Recipe, and a Table',
        items: [
          {
            hr: 'Narežite luk i pržite ga na ulju.',
            en: 'Chop the onion and fry it in oil.',
            note: 'two imperatives, and ga for the onion',
          },
          {
            hr: 'Dodajte dvjesto grama brašna i miješajte.',
            en: 'Add two hundred grams of flour and stir.',
            note: 'quantity → genitive: brašna',
          },
          {
            hr: 'Pecite u pećnici četrdeset minuta.',
            en: 'Bake in the oven for forty minutes.',
            note: 'duration is a bare accusative',
          },
          {
            hr: 'Ovo je recept moje bake.',
            en: "This is my grandmother's recipe.",
            note: 'possession → genitive: moje bake',
          },
          {
            hr: 'Dobar tek! — Hvala, također.',
            en: 'Enjoy your meal! — Thank you, you too.',
            note: 'the standard exchange',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A recipe says "Narežite luk." What are you being asked to do?',
        options: ['boil the onion', 'chop the onion', 'add the onion', 'fry the onion'],
        correct: 1,
        explanation:
          '"Narezati" is to cut or slice, and the -ite ending is the polite imperative recipes are written in. Boiling would be "kuhajte", adding "dodajte" and frying "pržite".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "dvjesto grama ___" (two hundred grams of flour — brašno)',
        options: ['brašno', 'brašna', 'brašnu', 'brašnom'],
        correct: 1,
        explanation:
          'A quantity is followed by the genitive, and the genitive of the neuter "brašno" is "brašna". Every line of an ingredient list works this way.',
      },
      {
        type: 'summary',
        title: 'Food and Cooking — Key Takeaways',
        points: [
          'kuhati, peći, pržiti, rezati, miješati, dodati',
          'Recipes are written in polite imperatives: Narežite… Dodajte…',
          'Ingredient quantities take the genitive: dvjesto grama brašna',
          'peka, pašticada and crni rižot on the coast; štrukli and kulen inland',
          'Croatian food splits Mediterranean coast from Central European interior',
          'Dobar tek! before eating — it is expected, not optional',
        ],
      },
    ],
  },
];
