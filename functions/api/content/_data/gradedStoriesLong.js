/**
 * gradedStoriesLong.js — READING DEPTH at B2–C2 (content expansion item 3,
 * 2026-09-05). Spread into GRADED_STORIES by gradedStories.js.
 *
 * THE FINDING. Every graded story sat between 70 and 625 Croatian words —
 * A1 averaged 268, C2 468. A reader who had reached B2 had nothing longer to
 * read than a beginner: no sustained argument, no serial with a plot carried
 * across parts, no literary prose that asks to be read slowly. Each of B2, C1
 * and C2 held ~10,000 words in ~25 pieces of a page each.
 *
 * WHAT THIS ADDS — same shape, longer and at register:
 *  - B2  : feature journalism and a three-part SERIAL (900–1,100 words a part);
 *  - C1  : OPINION and ANALYSIS — a thesis, evidence, a counter-argument, a
 *          position (1,000–1,200 words);
 *  - C2  : LITERARY prose — original short fiction and a two-part novella
 *          excerpt, written for this app, not quoted from any author
 *          (1,000–1,100 words).
 * Every piece keeps the reader's contract: paragraphs with hr + en, ≥8 vocab
 * items with an example sentence, a five-question comprehension quiz with
 * distractors wrong by MEANING (never Serbian, never merely marked).
 *
 * `kind` names the genre ('serial' | 'feature' | 'opinion' | 'literary'); a
 * serial part carries `series: { id, part, of }` and its title ends in "(k/n)".
 * The story-of-the-day picker orders by score and title, not by part, so every
 * part's `intro` (English) says where it sits and each part opens readable on
 * its own. gradedStories.test.ts pins: ≥ 800 Croatian words per long read,
 * every serial complete and consecutive, and the per-level word floors.
 *
 * This file is in lintCroatianText.mjs TARGETS (hr / en / q / ex / opts /
 * title / intro are all matched field names).
 */

export const GRADED_STORIES_LONG = [
  // ═══════════════════════════════════════════════════════════════════════
  // B2 — SERIAL: Kuća na Gornjem gradu (1/3, 2/3, 3/3)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'gs_b2_long_kuca_1',
    level: 'B2',
    kind: 'serial',
    series: { id: 'kuca_gornji_grad', part: 1, of: 3 },
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🏚️',
    title: 'Kuća na Gornjem gradu (1/3)',
    titleEn: 'The House in the Upper Town (1/3)',
    duration: 14,
    focus: 'Narrative past • Reported speech • Housing & inheritance vocabulary',
    intro:
      "Part 1 of 3. Vesna inherits a flat in Zagreb's Upper Town from an aunt she barely knew — and finds a letter that was never meant for her. Read this part first.",
    paragraphs: [
      {
        hr: 'Vesna je za tetu Miru znala uglavnom iz priča. Bila je to sestra njezine bake, žena koja je cijeli život provela u istom stanu na Gornjem gradu, nekoliko koraka od Kamenitih vrata, i koja se, koliko se Vesna sjećala, na obiteljskim okupljanjima pojavila možda tri puta. Zato ju je poziv iz odvjetničkog ureda zatekao usred radnog dana kao poruka s krive adrese. Gospođa Mira Horvat ostavila joj je stan. Njoj, a ne svojoj djeci, jer djece nije imala; ne bratu, jer je brat umro prije deset godina; nego njoj, unuci sestre koju je viđala jednom godišnje.',
        en: "Vesna knew Aunt Mira mostly from stories. She was her grandmother's sister, a woman who had spent her whole life in the same flat in the Upper Town, a few steps from the Stone Gate, and who, as far as Vesna could remember, had turned up at family gatherings perhaps three times. So the call from the solicitor's office caught her in the middle of a working day like a message sent to the wrong address. Mrs Mira Horvat had left her the flat. To her, and not to her children, because she had no children; not to her brother, because her brother had died ten years earlier; but to her, the granddaughter of a sister she saw once a year.",
      },
      {
        hr: 'Odvjetnik je bio ljubazan i precizan. Objasnio joj je što znači ostavinska rasprava, koliko traje upis u zemljišne knjige i zašto će porez na nasljedstvo, srećom, biti nula, jer je Vesna u ravnoj liniji potomak. Govorio je polako, kao netko tko je istu rečenicu izgovorio stotinu puta ljudima koji je čuju prvi put. Na kraju joj je preko stola gurnuo omotnicu s ključevima i rekao: "Stan je u stanju u kakvom ga je gospođa ostavila. Nitko nije ulazio od pogreba."',
        en: 'The solicitor was courteous and precise. He explained to her what a probate hearing means, how long registration in the land registry takes and why the inheritance tax would, fortunately, be zero, because Vesna was a descendant in the direct line. He spoke slowly, like someone who had said the same sentence a hundred times to people hearing it for the first time. At the end he pushed an envelope with the keys across the table and said: "The flat is in the state the lady left it in. Nobody has been in since the funeral."',
      },
      {
        hr: 'Prvi je put ušla u subotu ujutro, kad je Gornji grad još pripadao onima koji na njemu žive, a ne turistima koji ga oko podneva zaposjednu. Zgrada je bila jedna od onih starih, s dvorištem u sredini i drvenim stubištem koje škripi na svakoj drugoj stubi. Stan je bio na drugom katu. Kad je otključala vrata, dočekao ju je miris koji je poznavala, a nije znala odakle: prašina, stari papir i nešto slatko, možda dunje koje su se godinama sušile na ormaru.',
        en: 'She went in for the first time on a Saturday morning, when the Upper Town still belonged to the people who live there and not to the tourists who occupy it around noon. The building was one of those old ones, with a courtyard in the middle and a wooden staircase that creaks on every other step. The flat was on the second floor. When she unlocked the door, she was met by a smell she recognised without knowing from where: dust, old paper and something sweet, perhaps quinces that had been drying on top of the wardrobe for years.',
      },
      {
        hr: 'Stan je bio veći nego što je očekivala i puniji nego što bi itko želio. Teta Mira očito nije bacala ništa. Na policama su stajale knjige u tri reda, jedan iza drugoga; u kuhinji je bilo posuđa za dvadeset ljudi, a živjela je sama; u hodniku, pod vješalicom, čekale su četiri kišobrana. Vesna je hodala iz sobe u sobu i pokušavala misliti praktično — što prodati, što zadržati, koga zvati zbog vlage u kupaonici — ali misli su joj stalno bježale na jedno pitanje: zašto ja?',
        en: 'The flat was bigger than she had expected and fuller than anyone would wish. Aunt Mira evidently threw nothing away. Books stood on the shelves in three rows, one behind the other; in the kitchen there was crockery for twenty people, and she had lived alone; in the hall, under the coat rack, four umbrellas were waiting. Vesna walked from room to room trying to think practically — what to sell, what to keep, whom to call about the damp in the bathroom — but her thoughts kept escaping to one question: why me?',
      },
      {
        hr: 'Nazvala je majku. "Znaš li ti zašto mi je teta Mira ostavila stan?" Majka je dugo šutjela, što je kod nje značilo da razmišlja kako nešto reći, a ne što reći. "Mira je bila posebna", rekla je napokon. "Baka je govorila da je ona jedina u obitelji koja je znala čuvati tajnu. Nikad nisam saznala koju." Vesna je spustila slušalicu s osjećajem da je dobila odgovor koji otvara više pitanja nego što ih zatvara, što je, kako će uskoro shvatiti, bilo sasvim u Mirinu stilu.',
        en: 'She called her mother. "Do you know why Aunt Mira left me the flat?" Her mother was silent for a long time, which with her meant she was thinking about how to say something, not what to say. "Mira was special," she said at last. "Grandma used to say she was the only one in the family who knew how to keep a secret. I never found out which one." Vesna put the phone down with the feeling that she had received an answer that opened more questions than it closed — which was, as she would soon understand, entirely in Mira\'s style.',
      },
      {
        hr: 'Odgovor, ili barem njegov početak, pronašla je u spavaćoj sobi. U ladici noćnog ormarića, pod kutijom s lijekovima i molitvenikom, ležala je omotnica. Na njoj je rukom, plavom tintom, bilo napisano: "Za Vesnu — kad dođe vrijeme." Rukopis je bio sitan i nagnut ulijevo, rukopis nekoga tko je pisao mnogo i brzo. Vesna je sjela na rub kreveta i dugo držala omotnicu u rukama, kao da bi je otvaranje moglo obvezati na nešto što još nije razumjela.',
        en: 'The answer, or at least the beginning of one, she found in the bedroom. In the drawer of the bedside table, under a box of medicines and a prayer book, lay an envelope. On it, by hand, in blue ink, was written: "For Vesna — when the time comes." The handwriting was small and slanted to the left, the handwriting of someone who wrote a great deal and fast. Vesna sat on the edge of the bed and held the envelope in her hands for a long time, as if opening it might commit her to something she did not yet understand.',
      },
      {
        hr: 'Pismo je počinjalo bez uvoda. "Draga Vesna, ako ovo čitaš, onda me više nema, a stan je tvoj. Znam da se pitaš zašto. Odgovor je dug, i nije samo moj, pa ću ti ga dati onako kako sam ga i ja dobila — u dijelovima. U ovom stanu postoji nešto što pripada tvojoj obitelji već osamdeset godina, a što nitko od živih, osim mene, nije vidio. Nije zlato, nemoj se razočarati. Ali jest vrijedno, na način koji ćeš, nadam se, razumjeti bolje od mene."',
        en: 'The letter began without preamble. "Dear Vesna, if you are reading this, then I am gone and the flat is yours. I know you are wondering why. The answer is long, and it is not mine alone, so I will give it to you the way I received it — in parts. In this flat there is something that has belonged to your family for eighty years and that no one living, apart from me, has seen. It is not gold, don\'t be disappointed. But it is valuable, in a way you will, I hope, understand better than I did."',
      },
      {
        hr: '"Tvoja prabaka Ana, moja i bakina majka, došla je u ovaj stan 1941. godine kao podstanarka. Vlasnici su bili obitelj Weiss — Ivo, Klara i njihova kći Lea, koja je tada imala dvanaest godina. Znaš što se te godine događalo u Zagrebu, ne moram ti objašnjavati. U proljeće 1942. obitelj Weiss je odvedena. Prije toga su moja majka i Klara Weiss nešto dogovorile. O tome se u našoj obitelji nikada nije govorilo, ne zato što je bilo sramotno, nego zato što je bilo opasno, a poslije, kad više nije bilo opasno, zato što se šutnja pretvorila u naviku."',
        en: '"Your great-grandmother Ana, my mother and your grandmother\'s, came to this flat in 1941 as a lodger. The owners were the Weiss family — Ivo, Klara and their daughter Lea, who was twelve at the time. You know what was happening in Zagreb that year, I don\'t need to explain. In the spring of 1942 the Weiss family was taken away. Before that, my mother and Klara Weiss agreed on something. It was never spoken of in our family, not because it was shameful but because it was dangerous, and later, when it was no longer dangerous, because silence had turned into a habit."',
      },
      {
        hr: 'Vesna je prestala čitati i pogledala oko sebe. Soba je odjednom izgledala drugačije — ne kao prostor koji treba isprazniti, nego kao mjesto koje je nešto čuvalo. Pismo se nastavljalo, ali sljedeća je stranica bila prazna, osim jedne rečenice na sredini: "Ostatak je u kuhinji, u trećoj ladici odozgo, ispod papira za pečenje. Nemoj zvati nikoga dok ne pročitaš do kraja."',
        en: 'Vesna stopped reading and looked around her. The room suddenly looked different — not like a space to be emptied, but like a place that had been keeping something. The letter continued, but the next page was blank except for one sentence in the middle: "The rest is in the kitchen, in the third drawer from the top, under the baking paper. Don\'t call anyone until you have read to the end."',
      },
      {
        hr: 'Ustala je i otišla u kuhinju. Treća ladica odozgo bila je zaglavljena, kao i sve ladice u starim kuhinjama, i morala ju je povući objema rukama. Unutra su bili papir za pečenje, klupko špage, nekoliko gumica — i, ispod svega, tanka bilježnica s tvrdim smeđim koricama. Na prvoj stranici stajalo je ime: Lea Weiss, 1942. Vesna je pogledala na sat. Bilo je deset ujutro. Imala je cijeli dan.',
        en: 'She got up and went to the kitchen. The third drawer from the top was stuck, like all drawers in old kitchens, and she had to pull it with both hands. Inside were baking paper, a ball of string, a few rubber bands — and, beneath everything, a thin notebook with hard brown covers. On the first page was a name: Lea Weiss, 1942. Vesna looked at the clock. It was ten in the morning. She had the whole day.',
      },
    ],
    vocabulary: [
      {
        hr: 'ostavinska rasprava',
        en: 'probate hearing',
        ex: 'Ostavinska rasprava zakazana je za ožujak.',
      },
      {
        hr: 'zemljišne knjige',
        en: 'land registry',
        ex: 'Upis u zemljišne knjige traje nekoliko tjedana.',
      },
      {
        hr: 'nasljedstvo',
        en: 'inheritance',
        ex: 'Porez na nasljedstvo u ravnoj liniji ne plaća se.',
      },
      {
        hr: 'podstanar / podstanarka',
        en: 'lodger, tenant',
        ex: 'Došla je u stan kao podstanarka.',
      },
      {
        hr: 'zaposjesti',
        en: 'to occupy, take over',
        ex: 'Turisti oko podneva zaposjednu Gornji grad.',
      },
      { hr: 'škripati', en: 'to creak', ex: 'Drveno stubište škripi na svakoj drugoj stubi.' },
      { hr: 'omotnica', en: 'envelope', ex: 'Na omotnici je rukom bilo napisano njezino ime.' },
      {
        hr: 'obvezati (se)',
        en: 'to commit, to bind',
        ex: 'Otvaranje pisma moglo bi je obvezati na nešto.',
      },
      { hr: 'zaglavljen', en: 'stuck, jammed', ex: 'Ladica je bila zaglavljena.' },
      {
        hr: 'pretvoriti se u naviku',
        en: 'to turn into a habit',
        ex: 'Šutnja se pretvorila u naviku.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je Vesnu iznenadilo što je naslijedila stan?',
        qEn: 'Why was Vesna surprised to inherit the flat?',
        opts: [
          'Jer je tetu Miru jedva poznavala i viđala je rijetko',
          'Jer je teta Mira imala vlastitu djecu',
          'Jer je stan bio već prodan',
          'Jer je odvjetnik pogriješio adresu',
        ],
        correct: 0,
      },
      {
        q: 'Što je odvjetnik rekao o porezu na nasljedstvo?',
        qEn: 'What did the solicitor say about inheritance tax?',
        opts: [
          'Da će biti vrlo visok zbog lokacije stana',
          'Da ga neće biti jer je Vesna potomak u ravnoj liniji',
          'Da ga plaća država',
          'Da se plaća tek nakon prodaje stana',
        ],
        correct: 1,
      },
      {
        q: 'Kada je Vesna prvi put ušla u stan i zašto baš tada?',
        qEn: 'When did Vesna first enter the flat, and why then?',
        opts: [
          'U subotu navečer, kad su turisti otišli',
          'U subotu ujutro, dok je Gornji grad još pripadao stanovnicima',
          'Odmah nakon pogreba, s odvjetnikom',
          'U ponedjeljak, jer je tada zgrada otvorena',
        ],
        correct: 1,
      },
      {
        q: 'Što teta Mira u pismu kaže o onome što se čuva u stanu?',
        qEn: 'What does Aunt Mira say in the letter about what is kept in the flat?',
        opts: [
          'Da je riječ o zlatu koje treba prodati',
          'Da pripada obitelji Weiss i treba ga vratiti državi',
          'Da nije zlato, ali je vrijedno na drugi način',
          'Da ga je već pokazala cijeloj obitelji',
        ],
        correct: 2,
      },
      {
        q: 'Zašto se, prema pismu, u obitelji nikada nije govorilo o dogovoru iz 1942.?',
        qEn: 'According to the letter, why was the 1942 agreement never spoken of in the family?',
        opts: [
          'Jer se nitko nije sjećao detalja',
          'Prvo zato što je bilo opasno, a poslije zato što je šutnja postala navika',
          'Jer je obitelj Weiss to zabranila',
          'Jer je prabaka Ana zaboravila hrvatski',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_long_kuca_2',
    level: 'B2',
    kind: 'serial',
    series: { id: 'kuca_gornji_grad', part: 2, of: 3 },
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '📓',
    title: 'Kuća na Gornjem gradu (2/3)',
    titleEn: 'The House in the Upper Town (2/3)',
    duration: 14,
    focus: 'Historical narrative • Pluperfect & aspect • Bureaucracy of the past',
    intro:
      "Part 2 of 3. In part 1 Vesna inherited her great-aunt's flat and found a letter pointing to a notebook hidden in the kitchen. Now she reads what twelve-year-old Lea Weiss wrote in 1942 — and what Vesna's great-grandmother promised.",
    paragraphs: [
      {
        hr: 'Bilježnica je imala četrdesetak stranica, ispisanih olovkom, dječjim rukopisom koji se s vremenom mijenjao — na početku velik i okrugao, prema kraju sitniji i nagnut, kao da je i rukopis odrastao brže nego što je trebao. Lea Weiss počela ju je pisati u siječnju 1942. Prve su stranice bile obične: škola, hladnoća, jedna svađa s majkom zbog rukavica, prijateljica Zdenka koja je prestala dolaziti. Vesna je čitala stojeći, oslonjena na kuhinjski pult, i tek je nakon nekoliko stranica shvatila da još nije skinula kaput.',
        en: "The notebook had about forty pages, written in pencil, in a child's handwriting that changed over time — large and round at the beginning, smaller and slanted towards the end, as if the handwriting too had grown up faster than it should have. Lea Weiss began writing it in January 1942. The first pages were ordinary: school, the cold, a quarrel with her mother over gloves, a friend Zdenka who had stopped coming round. Vesna read standing, leaning on the kitchen counter, and only after several pages realised she had not yet taken off her coat.",
      },
      {
        hr: 'U ožujku se ton promijenio. Lea je pisala o tome kako otac više ne ide u ured, kako su na vratima dućana u Ilici osvanuli natpisi koje nije smjela pročitati naglas, kako je majka po noći šivala nešto u podstavu kaputa. I pisala je o Ani, podstanarki iz male sobe do kuhinje, koja je "jedina u zgradi koja nas još pozdravlja punim imenom". Ana je tada imala dvadeset i tri godine, radila je u tvornici duhana i slala novac roditeljima u Zagorje. Vesna je znala tu Anu samo s jedne fotografije: ozbiljna žena u crnini, četrdeset godina kasnije.',
        en: 'In March the tone changed. Lea wrote about how her father no longer went to the office, how notices she was not allowed to read aloud had appeared on shop doors in Ilica, how her mother sewed something into the lining of a coat at night. And she wrote about Ana, the lodger in the small room next to the kitchen, who was "the only one in the building who still greets us by our full name". Ana was twenty-three then, worked in the tobacco factory and sent money to her parents in Zagorje. Vesna knew that Ana from only one photograph: a serious woman in black, forty years later.',
      },
      {
        hr: 'Bilo je čudno čitati o vlastitoj prabaki iz tuđe perspektive — i to iz perspektive djeteta. Lea ju je opisivala kao "visoku i uvijek u žurbi", kao nekoga tko donosi kruh kad ga više nitko drugi ne može kupiti i tko zna popraviti radio. Vesna je iz obiteljskih priča poznavala drugu Anu: strogu, štedljivu, ženu koja nije voljela darove i koja je na svako pitanje o prošlosti odgovarala pitanjem o sadašnjosti. Tek je sada shvatila da su to možda bile iste osobine, gledane s dvije strane istog rata.',
        en: 'It was strange to read about her own great-grandmother from someone else\'s perspective — and a child\'s at that. Lea described her as "tall and always in a hurry", as someone who brings bread when no one else can buy it any more and who knows how to fix a radio. From family stories Vesna knew a different Ana: strict, thrifty, a woman who did not like presents and who answered every question about the past with a question about the present. Only now did she understand that these might have been the same qualities, seen from two sides of the same war.',
      },
      {
        hr: 'Dogovor, o kojem je teta Mira pisala, Lea je opisala u jednoj jedinoj rečenici, dvadeset i šestog travnja: "Mama je danas Ani dala ključ od ormara i rekla joj da je sve unutra sada njezino, dok se mi ne vratimo." Vesna je pročitala rečenicu triput. Dok se mi ne vratimo. Djevojčica od dvanaest godina zapisala ju je kao što bi zapisala odlazak na ljetovanje — bez zareza sumnje. Sljedeći zapis bio je tjedan dana kasnije i glasio je samo: "Sutra idemo. Ana plače u kuhinji i misli da je ne čujemo."',
        en: 'The agreement Aunt Mira had written about, Lea described in a single sentence, on the twenty-sixth of April: "Today Mama gave Ana the key to the wardrobe and told her that everything inside is hers now, until we come back." Vesna read the sentence three times. Until we come back. A twelve-year-old girl had written it down the way she would have written down a departure for the summer holidays — without a comma of doubt. The next entry was a week later and said only: "Tomorrow we go. Ana is crying in the kitchen and thinks we can\'t hear her."',
      },
      {
        hr: 'Nakon toga bilježnica više nije bila Leina. Rukopis se promijenio u odrasli, uredan, s tintom umjesto olovke: Ana je nastavila pisati na istim stranicama, ali rijetko, ponekad jednom u godinu dana. Zapisivala je što je učinila s onim što joj je bilo povjereno. Ormar je preselila u svoju sobu, kad joj je 1945. stan formalno dodijeljen jer se vlasnici "nisu vratili". Nikada ga nije otvorila pred drugima. Kad se udala, muž ju je pitao što je unutra; odgovorila je da su to stvari koje čuva za nekoga. Kad je rodila kćer, Miru, zapisala je: "Reći ću joj kad bude dovoljno stara da razumije zašto se o tome ne govori."',
        en: 'After that the notebook was no longer Lea\'s. The handwriting changed to an adult, tidy one, in ink instead of pencil: Ana continued writing on the same pages, but rarely, sometimes once a year. She noted what she had done with what had been entrusted to her. She moved the wardrobe into her own room when, in 1945, the flat was formally allocated to her because the owners "had not returned". She never opened it in front of others. When she married, her husband asked what was inside; she answered that they were things she was keeping for someone. When she gave birth to a daughter, Mira, she wrote: "I will tell her when she is old enough to understand why this is not spoken of."',
      },
      {
        hr: 'Vesna je pronašla ormar odmah — bio je to onaj visoki, tamni, u spavaćoj sobi, s ključem koji je visio na unutarnjoj strani vrata, kao da nikoga više nije trebalo držati podalje. Unutra nije bilo ni zlata ni nakita. Bile su knjige — pedesetak svezaka, na njemačkom, hrvatskom i hebrejskom — i, na donjoj polici, drvena kutija s fotografijama, dokumentima i jednom violinom u futroli na kojoj je pisalo L. W. Sve je bilo složeno tako pažljivo da je Vesna isprva pomislila da netko ovdje redovito čisti. Onda je shvatila da je taj netko bila teta Mira, osamdeset godina poslije, svaki tjedan.',
        en: 'Vesna found the wardrobe at once — it was the tall, dark one in the bedroom, with the key hanging on the inside of the door, as if no one needed to be kept away any more. Inside there was neither gold nor jewellery. There were books — some fifty volumes, in German, Croatian and Hebrew — and, on the bottom shelf, a wooden box of photographs, documents and a violin in a case marked L. W. Everything was arranged so carefully that Vesna at first thought someone cleaned in here regularly. Then she realised that someone had been Aunt Mira, eighty years later, every week.',
      },
      {
        hr: 'Na dnu kutije bio je papir koji je objašnjavao ostalo: potvrda iz 1947. da su Ivo, Klara i Lea Weiss "nestali u logoru Jasenovac" — riječ koja je i tada i danas značila nešto što potvrde ne mogu reći. Nije bilo nikoga tko bi se vratio. Ana je to znala od 1947., a ormar je čuvala do smrti 1998. Mira ga je čuvala dalje, iako više nije bilo koga čekati. I sada je ostavila stan Vesni, s pismom i bilježnicom, jer se, kako je napisala u zadnjem odlomku pisma, "u obitelji nešto mora završiti, a ne samo prenositi".',
        en: 'At the bottom of the box was a paper that explained the rest: a certificate from 1947 that Ivo, Klara and Lea Weiss had "disappeared in the Jasenovac camp" — a word which meant, then and now, something certificates cannot say. There was no one to come back. Ana had known that since 1947, and she kept the wardrobe until her death in 1998. Mira kept it on, though there was no longer anyone to wait for. And now she had left the flat to Vesna, with the letter and the notebook, because, as she wrote in the last paragraph of the letter, "in a family something has to be completed, not only passed on".',
      },
      {
        hr: 'Vesna je sjela na pod ispred ormara. Bilo je podne; s Markova trga čula se buka turista i zvono. Mislila je na to koliko je puta u životu prošla ovom ulicom ne znajući da se dva kata iznad nje čuva nešto što je čekalo nju. Mislila je i na praktična pitanja, jer se um brani praktičnim pitanjima: komu to pripada, postoji li tko od Weissovih, što se radi s violinom koja osamdeset godina nije svirala. Ali ispod svih tih pitanja bilo je jedno koje je Mira očito ostavila njoj, a ne odvjetniku: što znači završiti?',
        en: "Vesna sat down on the floor in front of the wardrobe. It was noon; from St Mark's Square came the noise of tourists and a bell. She thought about how many times in her life she had walked down this street not knowing that two floors above her something was being kept that had been waiting for her. She thought too about the practical questions, because the mind defends itself with practical questions: to whom does this belong, is there anyone left of the Weiss family, what does one do with a violin that has not been played for eighty years. But beneath all those questions was one Mira had evidently left to her and not to the solicitor: what does it mean to complete something?",
      },
      {
        hr: 'Na posljednjoj stranici bilježnice, ispod Aninih i Mirinih zapisa, bilo je mjesta za još nekoliko redaka. Vesna je iz torbe izvadila olovku, pogledala datum na mobitelu i zapisala ga. Zatim je dugo držala olovku iznad papira, ne znajući što napisati. Na kraju je napisala samo: "Pronašla sam." I ispod toga, manjim slovima: "Sada moram saznati tko je još ostao."',
        en: 'On the last page of the notebook, below Ana\'s and Mira\'s entries, there was room for a few more lines. Vesna took a pencil from her bag, looked at the date on her phone and wrote it down. Then she held the pencil above the paper for a long time, not knowing what to write. In the end she wrote only: "I have found it." And beneath that, in smaller letters: "Now I have to find out who is still left."',
      },
    ],
    vocabulary: [
      {
        hr: 'podstava',
        en: 'lining (of a coat)',
        ex: 'Majka je po noći šivala nešto u podstavu kaputa.',
      },
      {
        hr: 'osvanuti',
        en: 'to appear overnight, dawn',
        ex: 'Na vratima dućana osvanuli su natpisi.',
      },
      {
        hr: 'povjeriti',
        en: 'to entrust',
        ex: 'Zapisivala je što je učinila s onim što joj je bilo povjereno.',
      },
      { hr: 'dodijeliti', en: 'to allocate, assign', ex: 'Stan joj je 1945. formalno dodijeljen.' },
      { hr: 'svezak', en: 'volume (book)', ex: 'U ormaru je bilo pedesetak svezaka.' },
      {
        hr: 'futrola',
        en: 'case (for an instrument)',
        ex: 'Violina je bila u futroli s inicijalima.',
      },
      {
        hr: 'potvrda',
        en: 'certificate, confirmation',
        ex: 'Potvrda iz 1947. objašnjavala je ostalo.',
      },
      { hr: 'nestati', en: 'to disappear', ex: 'Obitelj je "nestala" u logoru.' },
      {
        hr: 'braniti se (čime)',
        en: 'to defend oneself (with)',
        ex: 'Um se brani praktičnim pitanjima.',
      },
      {
        hr: 'prenositi',
        en: 'to pass on, transmit',
        ex: 'Nešto se mora završiti, a ne samo prenositi.',
      },
    ],
    quiz: [
      {
        q: 'Kako se Lein rukopis mijenja kroz bilježnicu i što to sugerira?',
        qEn: "How does Lea's handwriting change through the notebook, and what does that suggest?",
        opts: [
          'Postaje veći i uredniji jer je vježbala pisanje',
          'Postaje sitniji i nagnut, kao da je i rukopis prebrzo odrastao',
          'Prelazi na tintu jer je ostala bez olovaka',
          'Ne mijenja se; mijenja se samo jezik',
        ],
        correct: 1,
      },
      {
        q: 'Što je Klara Weiss dala Ani i uz koje riječi?',
        qEn: 'What did Klara Weiss give Ana, and with what words?',
        opts: [
          'Novac, uz molbu da ga pošalje rođacima',
          'Ključ od ormara, s riječima da je sve unutra Anino dok se oni ne vrate',
          'Violinu, da je proda i plati stanarinu',
          'Bilježnicu, da je preda policiji',
        ],
        correct: 1,
      },
      {
        q: 'Što se nalazilo u ormaru?',
        qEn: 'What was in the wardrobe?',
        opts: [
          'Zlato i nakit obitelji Weiss',
          'Samo stara odjeća',
          'Knjige na tri jezika, kutija s fotografijama i dokumentima te violina',
          'Pisma koja je Ana pisala Lei',
        ],
        correct: 2,
      },
      {
        q: 'Zašto je Ana nastavila čuvati ormar i nakon 1947.?',
        qEn: 'Why did Ana keep guarding the wardrobe even after 1947?',
        opts: [
          'Jer je vjerovala da će se obitelj ipak vratiti',
          'Jer joj je odvjetnik tako naložio',
          'Jer je obećanje čuvala i kad više nije bilo koga čekati',
          'Jer nije znala što je unutra',
        ],
        correct: 2,
      },
      {
        q: 'Što Vesna zapisuje na posljednjoj stranici?',
        qEn: 'What does Vesna write on the last page?',
        opts: [
          'Popis stvari za prodaju',
          'Da je pronašla ormar i da mora saznati tko je još ostao',
          'Datum ostavinske rasprave',
          'Ispriku obitelji Weiss',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_long_kuca_3',
    level: 'B2',
    kind: 'serial',
    series: { id: 'kuca_gornji_grad', part: 3, of: 3 },
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🎻',
    title: 'Kuća na Gornjem gradu (3/3)',
    titleEn: 'The House in the Upper Town (3/3)',
    duration: 14,
    focus: 'Formal correspondence • Conditional • Institutions & archives',
    intro:
      'Part 3 of 3. Vesna has found the Weiss family\'s books and Lea\'s violin, kept for eighty years. Now she has to decide what "completing" it means — and whether anyone is left to receive it.',
    paragraphs: [
      {
        hr: 'Prvih nekoliko tjedana Vesna nije zvala nikoga, kako je pismo i tražilo. Umjesto toga je čitala. Pročitala je Leinu bilježnicu još dvaput, pregledala svaku fotografiju i prepisala svako ime koje se u dokumentima pojavilo. Bilo ih je jedanaest. Zatim je, jedne večeri, otvorila prijenosno računalo i počela pisati elektroničku poštu Židovskoj općini Zagreb, pa muzeju, pa arhivu. Pisala je oprezno, službenim tonom kojim se piše ustanovama: "Poštovani, obraćam Vam se u vezi s ostavštinom obitelji Weiss iz Zagreba…" Poslije trećeg pisma shvatila je da se stil promijenio — više nije pisala kao nasljednica stana, nego kao netko tko nešto vraća.',
        en: 'For the first few weeks Vesna called no one, as the letter had asked. Instead she read. She read Lea\'s notebook twice more, went through every photograph and copied out every name that appeared in the documents. There were eleven of them. Then, one evening, she opened her laptop and began writing emails to the Jewish Community of Zagreb, then to the museum, then to the archive. She wrote carefully, in the official tone one uses for institutions: "Dear Sir or Madam, I am writing to you regarding the estate of the Weiss family of Zagreb…" After the third letter she realised that her style had changed — she was no longer writing as the heir to a flat, but as someone returning something.',
      },
      {
        hr: 'Odgovori su stizali sporo, ali su stizali. Iz arhiva su potvrdili ono što je već znala, uz nekoliko datuma koje nije. Iz muzeja su je pitali bi li im dopustila da fotografiraju knjige i bilježnicu; imali su, rekli su, vrlo malo osobnih zapisa djece iz tih godina. Iz općine joj je odgovorila žena po imenu Ruth, koja je predložila da se sastanu. "Prezime Weiss je često", napisala je, "ali Klara i Ivo iz Vaše ulice nisu bili bez rodbine. Postoji jedna linija. Ne obećavam ništa, no vrijedi pokušati."',
        en: 'The replies came slowly, but they came. The archive confirmed what she already knew, with a few dates she had not. The museum asked whether she would allow them to photograph the books and the notebook; they had, they said, very few personal records by children from those years. From the community a woman named Ruth replied and suggested they meet. "The surname Weiss is common," she wrote, "but Klara and Ivo from your street were not without relatives. There is one line. I promise nothing, but it is worth trying."',
      },
      {
        hr: 'Sastale su se u kafiću na Cvjetnom trgu, u ono doba poslijepodneva kad se grad umiri između posla i večere. Ruth je bila pedesetih godina, s naočalama koje je stalno skidala i stavljala, i s načinom govora koji je Vesnu odmah smirio: ni svečano ni ležerno, nego točno. Objasnila joj je što je saznala. Klara Weiss imala je sestru, Elzu, koja se 1939. udala i otišla u Palestinu. Elzini su potomci danas u Haifi i u Torontu. "Jedan od njih", rekla je Ruth i otpila gutljaj kave, "zove se Daniel. Ima šezdeset i tri godine, umirovljeni je profesor glazbe i prošle mi je godine pisao pitajući postoji li još što od obitelji njegove bake u Zagrebu. Odgovorila sam mu da nema. Sad ću mu morati pisati ponovno."',
        en: 'They met in a café on Flower Square, at that time of the afternoon when the city quietens between work and dinner. Ruth was in her fifties, with glasses she kept taking off and putting on, and a way of speaking that immediately calmed Vesna: neither solemn nor casual, but exact. She explained what she had found out. Klara Weiss had a sister, Elza, who married in 1939 and left for Palestine. Elza\'s descendants are today in Haifa and in Toronto. "One of them," said Ruth, taking a sip of coffee, "is called Daniel. He is sixty-three, a retired music professor, and last year he wrote to me asking whether anything was left of his grandmother\'s family in Zagreb. I told him there was not. Now I shall have to write to him again."',
      },
      {
        hr: 'Vesna je te noći loše spavala, ne od tuge nego od nečega što joj je bilo teže imenovati — možda od osjećaja da nešto što je osamdeset godina stajalo na mjestu sada mora krenuti. Ujutro je, prije posla, otišla u stan, sjela pred ormar i pomislila kako bi se Ana osjećala. Zatim je pomislila da to nije pravo pitanje. Ana je učinila svoje: sačuvala je. Mira je učinila svoje: nije prodala, nije zaboravila, nije prepustila drugima. Njoj je ostalo ono što nijedna od njih nije mogla — pronaći nekoga tko će te knjige ponovno otvoriti kao svoje, a ne kao tuđe.',
        en: "That night Vesna slept badly, not from grief but from something harder to name — perhaps from the feeling that something which had stood in place for eighty years now had to move. In the morning, before work, she went to the flat, sat in front of the wardrobe and wondered how Ana would have felt. Then she thought that was not the right question. Ana had done her part: she had kept it. Mira had done hers: she had not sold it, not forgotten it, not left it to others. What was left to her was what neither of them could do — to find someone who would open those books again as their own, and not as someone else's.",
      },
      {
        hr: 'Na poslu je bila odsutna i kolege su to primijetili. Kad ju je šefica pitala je li sve u redu, Vesna je rekla da rješava nasljedstvo, što je bilo istina, i da je to komplicirano, što je bila druga vrsta istine. Nije znala kako objasniti da je naslijedila obavezu, a ne imovinu — da stan s pogledom na Markov trg vrijedi na tržištu točno određenu svotu, a ono što je u njemu ne vrijedi ništa i vrijedi sve, ovisno o tome tko gleda. Šefica je kimnula i dala joj tjedan slobodno. "Nasljedstva su takva", rekla je. "Nitko ti ne kaže da traju."',
        en: 'At work she was absent-minded and her colleagues noticed. When her manager asked if everything was all right, Vesna said she was dealing with an inheritance, which was true, and that it was complicated, which was another kind of truth. She did not know how to explain that she had inherited an obligation, not property — that a flat overlooking St Mark\'s Square is worth a precisely determined sum on the market, and what is inside it is worth nothing and worth everything, depending on who is looking. Her manager nodded and gave her a week off. "Inheritances are like that," she said. "Nobody tells you they take time."',
      },
      {
        hr: 'Daniel je odgovorio za tri dana, na engleskom, s nekoliko hrvatskih riječi koje je, kako je napisao, naučio od bake i nikad nije imao komu reći. Pisao je da se sjeća priče o sestri koja je "ostala u Zagrebu s mužem i djevojčicom koja je svirala violinu". Nije znao ime djevojčice. Kad mu je Vesna napisala da se zvala Lea i da violina postoji, nije odgovorio dva dana. Onda je stigla jedna rečenica: "Dolazim u lipnju, ako smijem."',
        en: 'Daniel replied within three days, in English, with a few Croatian words which, he wrote, he had learned from his grandmother and never had anyone to say to. He wrote that he remembered the story of a sister who had "stayed in Zagreb with her husband and a little girl who played the violin". He did not know the girl\'s name. When Vesna wrote to him that her name was Lea and that the violin existed, he did not reply for two days. Then one sentence arrived: "I am coming in June, if I may."',
      },
      {
        hr: 'Do lipnja je Vesna uredila stan, ali ne onako kako je u ožujku planirala. Nije ga ispraznila. Prodala je posuđe za dvadeset ljudi i tri od četiri kišobrana, popravila vlagu u kupaonici i zamijenila slavine. Knjige tete Mire ostavila je na policama, u tri reda. Ormar nije dirala. Odvjetniku je, kad ju je pitao hoće li stan prodati ili iznajmiti, odgovorila da još ne zna, i po prvi je put osjetila da je to točan odgovor, a ne izbjegavanje.',
        en: "By June Vesna had put the flat in order, but not the way she had planned in March. She had not emptied it. She sold the crockery for twenty people and three of the four umbrellas, fixed the damp in the bathroom and replaced the taps. Aunt Mira's books she left on the shelves, in three rows. The wardrobe she did not touch. When the solicitor asked whether she would sell or rent the flat, she answered that she did not yet know, and for the first time felt that this was an accurate answer and not an evasion.",
      },
      {
        hr: 'Daniel je bio visok, sijed i vrlo tih. Stubištem se popeo polako, zaustavljajući se na svakom odmorištu, ne zato što je bio umoran, nego zato što je gledao. Kad je ušao u spavaću sobu i vidio ormar, nije rekao ništa. Vesna mu je dala ključ i izišla u kuhinju, jer je osjećala da neke stvari treba otvoriti bez svjedoka. Čula je kako se vrata ormara otvaraju. Zatim dugo ništa. Zatim, vrlo tiho, nekoliko nesigurnih tonova — netko je nakon osamdeset godina nategnuo žice i provjerio hoće li violina još govoriti.',
        en: 'Daniel was tall, grey-haired and very quiet. He climbed the staircase slowly, stopping on every landing, not because he was tired but because he was looking. When he entered the bedroom and saw the wardrobe, he said nothing. Vesna gave him the key and went out into the kitchen, because she felt that some things should be opened without witnesses. She heard the wardrobe doors open. Then, for a long time, nothing. Then, very quietly, a few uncertain notes — someone, after eighty years, had tightened the strings and checked whether the violin would still speak.',
      },
      {
        hr: 'Poslije su sjedili za kuhinjskim stolom, pili kavu iz Mirinih šalica i dogovarali ono što se moralo dogovoriti. Knjige na hebrejskom i fotografije Daniel bi ponio; knjige na hrvatskom i njemačkom, i bilježnicu, predložio je da ostanu u Zagrebu, u muzeju, "gdje ih može pročitati netko komu će značiti više nego meni". O violini nije bilo rasprave. Kad je odlazio, na vratima se okrenuo i rekao, na hrvatskom, sporo: "Hvala što ste čuvali." Vesna je htjela reći da nije ona, nego Ana i Mira. Umjesto toga je rekla samo: "Nema na čemu." Kad je zatvorila vrata, uzela je bilježnicu, otvorila posljednju stranicu i pod svoj zapis iz ožujka dodala jednu riječ: "Završeno."',
        en: 'Afterwards they sat at the kitchen table, drank coffee from Mira\'s cups and arranged what had to be arranged. The Hebrew books and the photographs Daniel would take; the Croatian and German books, and the notebook, he proposed should stay in Zagreb, in the museum, "where someone can read them to whom they will mean more than to me". About the violin there was no discussion. As he was leaving, he turned at the door and said, in Croatian, slowly: "Thank you for keeping them." Vesna wanted to say that it was not her, but Ana and Mira. Instead she said only: "You are welcome." When she had closed the door, she took the notebook, opened the last page and under her entry from March added one word: "Completed."',
      },
    ],
    vocabulary: [
      {
        hr: 'ostavština',
        en: 'estate, legacy',
        ex: 'Pisala je u vezi s ostavštinom obitelji Weiss.',
      },
      { hr: 'ustanova', en: 'institution', ex: 'Tim se tonom piše ustanovama.' },
      { hr: 'nasljednica', en: 'heiress', ex: 'Više nije pisala kao nasljednica stana.' },
      { hr: 'potomak', en: 'descendant', ex: 'Elzini su potomci danas u Haifi i Torontu.' },
      { hr: 'umiroviti se', en: 'to retire', ex: 'Daniel je umirovljeni profesor glazbe.' },
      { hr: 'imenovati', en: 'to name', ex: 'Osjećaj joj je bilo teško imenovati.' },
      {
        hr: 'prepustiti (komu)',
        en: 'to leave to, hand over to',
        ex: 'Mira nije prepustila ormar drugima.',
      },
      { hr: 'odmorište', en: 'landing (stairs)', ex: 'Zaustavljao se na svakom odmorištu.' },
      { hr: 'svjedok', en: 'witness', ex: 'Neke stvari treba otvoriti bez svjedoka.' },
      {
        hr: 'izbjegavanje',
        en: 'evasion, avoidance',
        ex: 'Bio je to točan odgovor, a ne izbjegavanje.',
      },
    ],
    quiz: [
      {
        q: 'Kako se promijenio stil Vesninih pisama ustanovama?',
        qEn: "How did the style of Vesna's letters to institutions change?",
        opts: [
          'Postao je neformalan i prijateljski',
          'Više nije pisala kao nasljednica, nego kao netko tko nešto vraća',
          'Počela je pisati na engleskom',
          'Prestala je koristiti službene pozdrave',
        ],
        correct: 1,
      },
      {
        q: 'Tko je Daniel?',
        qEn: 'Who is Daniel?',
        opts: [
          'Leaov brat koji je preživio rat',
          'Odvjetnik koji vodi ostavinsku raspravu',
          'Potomak Klarine sestre Elze, umirovljeni profesor glazbe',
          'Kustos zagrebačkog muzeja',
        ],
        correct: 2,
      },
      {
        q: 'Što je, prema Vesninu razmišljanju, ostalo njoj da učini, a Ana i Mira nisu mogle?',
        qEn: "According to Vesna's reflection, what was left for her to do that Ana and Mira could not?",
        opts: [
          'Prodati stan i podijeliti novac',
          'Pronaći nekoga tko će knjige otvoriti kao svoje',
          'Predati sve policiji',
          'Napisati knjigu o obitelji Weiss',
        ],
        correct: 1,
      },
      {
        q: 'Zašto Vesna izlazi iz sobe kad Daniel otvara ormar?',
        qEn: 'Why does Vesna leave the room when Daniel opens the wardrobe?',
        opts: [
          'Jer joj je zazvonio telefon',
          'Jer smatra da neke stvari treba otvoriti bez svjedoka',
          'Jer se boji violine',
          'Jer mora skuhati kavu prije nego što on završi',
        ],
        correct: 1,
      },
      {
        q: 'Kako je dogovoreno što će biti s predmetima iz ormara?',
        qEn: 'What was agreed about the objects from the wardrobe?',
        opts: [
          'Daniel odnosi sve u Toronto',
          'Sve ostaje Vesni u stanu',
          'Hebrejske knjige i fotografije idu Danielu, ostale knjige i bilježnica u muzej, violina njemu bez rasprave',
          'Sve se prodaje, a novac dijeli',
        ],
        correct: 2,
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // B2 — FEATURE JOURNALISM (current affairs, 850–1,000 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'gs_b2_long_ljeto_bez_turista',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '⛵',
    title: 'Ljeto bez turista',
    titleEn: 'A Summer Without Tourists',
    duration: 13,
    focus: 'Reportage register • Numbers & percentages • Cause and consequence',
    intro:
      'A feature from a small Adriatic island town that lives eleven months a year on what it earns in one — and what happened the summer the visitors did not come.',
    paragraphs: [
      {
        hr: 'U mjestu s tisuću i dvjesto stanovnika zimi i, prema procjenama turističke zajednice, dvanaest tisuća ljeti, kalendar ne počinje u siječnju. Počinje u lipnju, kad stigne prvi katamaran s više od deset putnika, i završava u rujnu, kad se posljednji apartman zaključa do sljedeće godine. Sve između — škola, obnova cesta, čak i vjenčanja — planira se oko tih četrnaest tjedana. "Mi ne živimo od turizma", kaže vlasnik jedne od tri konobe na rivi. "Mi živimo turizam. To nije isto."',
        en: 'In a town of twelve hundred inhabitants in winter and, according to the tourist board\'s estimates, twelve thousand in summer, the calendar does not begin in January. It begins in June, when the first catamaran with more than ten passengers arrives, and ends in September, when the last apartment is locked until the following year. Everything in between — school, road repairs, even weddings — is planned around those fourteen weeks. "We don\'t live off tourism," says the owner of one of the three taverns on the waterfront. "We live tourism. That is not the same thing."',
      },
      {
        hr: 'Razlika je postala vidljiva onog ljeta kad su gosti izostali. Nije važno zašto — jedne godine to je bila pandemija, druge cijene goriva, treće vremenska prognoza koja je tjedan dana pokazivala kišu nad cijelom obalom pa su se rezervacije otkazivale u valovima. Važno je što se dogodilo. Prema podacima općine, prihodi od boravišne pristojbe pali su za šezdeset posto. Konoba na rivi otpustila je sezonsko osoblje u srpnju, mjesec dana ranije nego ikad. Trgovina mješovitom robom, jedina u mjestu, skratila je radno vrijeme. A školski autobus, koji općina financira iz sezonskih prihoda, u rujnu je vozio samo dvaput dnevno.',
        en: "The difference became visible the summer the guests stayed away. It does not matter why — one year it was the pandemic, another fuel prices, a third a weather forecast that showed rain over the whole coast for a week so bookings were cancelled in waves. What matters is what happened. According to the municipality's figures, revenue from the tourist tax fell by sixty per cent. The tavern on the waterfront laid off its seasonal staff in July, a month earlier than ever. The general store, the only one in town, shortened its opening hours. And the school bus, which the municipality funds from seasonal revenue, ran only twice a day in September.",
      },
      {
        hr: 'Ekonomisti to zovu monokulturom, i riječ nije slučajno posuđena iz poljoprivrede. Kad cijelo mjesto uzgaja jednu kulturu, jedna loša godina ne znači slabiji prihod nego prazne police. Prije pedeset godina na otoku su radile tvornica sardina, dva ribarska poduzeća i zadruga koja je otkupljivala maslinovo ulje. Sve je to nestalo devedesetih, ne zato što je propalo, nego zato što se turizam pokazao lakšim: apartman ne treba brod, ni skladište, ni radnike koji ostaju preko zime. "Prodali smo mreže i kupili klima-uređaje", kaže umirovljeni ribar koji je posljednji prodao brod. "Nitko nas nije tjerao. Sami smo."',
        en: 'Economists call it a monoculture, and the word is not borrowed from agriculture by accident. When a whole town grows one crop, one bad year does not mean lower income but empty shelves. Fifty years ago the island had a sardine factory, two fishing companies and a cooperative that bought up olive oil. All of that disappeared in the nineties, not because it failed but because tourism proved easier: an apartment needs no boat, no warehouse, no workers who stay over the winter. "We sold the nets and bought air conditioners," says a retired fisherman who was the last to sell his boat. "Nobody forced us. We did it ourselves."',
      },
      {
        hr: 'Ipak, priča nije samo o novcu. Ravnateljica osnovne škole, koja u mjestu radi dvadeset godina, opisuje drugu posljedicu: djeca odrastaju s idejom da je rad nešto što se događa ljeti, a ostatak godine čekanje. "Imam učenike koji s petnaest godina zarađuju više nego njihovi učitelji, tri mjeseca godišnje. Teško im je objasniti zašto bi učili kemiju." Mnogi od njih ne planiraju ostati — ne zato što ne vole otok, nego zato što otok, kako kaže jedan maturant, "nema plan B".',
        en: 'Yet the story is not only about money. The head of the primary school, who has worked in the town for twenty years, describes another consequence: children grow up with the idea that work is something that happens in summer and the rest of the year is waiting. "I have pupils who at fifteen earn more than their teachers, three months a year. It is hard to explain to them why they should learn chemistry." Many of them do not plan to stay — not because they do not love the island, but because the island, as one school-leaver puts it, "has no plan B".',
      },
      {
        hr: 'Plan B, pokazuje se, nije nemoguć — samo je spor. U susjednom mjestu, dvadeset minuta vožnje uz obalu, mala skupina obitelji vratila se maslinarstvu i prije desetak godina osnovala uljaru. Ulje prodaju pod vlastitom etiketom, uglavnom u Zagreb i inozemstvo, i zapošljavaju šest ljudi cijele godine. Brojka zvuči skromno dok se ne usporedi s nulom, što je broj cjelogodišnjih radnih mjesta koje stvara pedeset apartmana. "Nismo protiv turizma", kaže voditeljica uljare. "Turisti su nam najbolji kupci. Ali ne želimo da nam budu jedini."',
        en: 'Plan B, it turns out, is not impossible — only slow. In the neighbouring town, twenty minutes\' drive along the coast, a small group of families returned to olive growing and about ten years ago set up an oil mill. They sell the oil under their own label, mainly to Zagreb and abroad, and employ six people all year round. The figure sounds modest until it is compared with zero, which is the number of year-round jobs created by fifty apartments. "We are not against tourism," says the woman who runs the mill. "Tourists are our best customers. But we don\'t want them to be our only ones."',
      },
      {
        hr: 'Država je problem prepoznala, barem na papiru. Strategija razvoja otoka govori o "diversifikaciji", "cjelogodišnjem turizmu" i "očuvanju tradicijskih djelatnosti", a natječaji za poticaje raspisuju se svake godine. Problem je, tvrde lokalni poduzetnici, u razmjeru: poticaj od nekoliko tisuća eura ne može konkurirati apartmanu koji u osam tjedana zaradi dvostruko više. "Dok se izgradnja apartmana oporezuje kao i uljara, svi će graditi apartmane", kaže načelnik općine, koji je i sam iznajmljivač i to otvoreno priznaje. "Ja nisam iznimka. Ja sam pravilo."',
        en: 'The state has recognised the problem, at least on paper. The island development strategy speaks of "diversification", "year-round tourism" and "preserving traditional activities", and calls for grants are published every year. The problem, local entrepreneurs argue, is one of scale: a grant of a few thousand euros cannot compete with an apartment that earns twice as much in eight weeks. "As long as building apartments is taxed the same as an oil mill, everyone will build apartments," says the mayor, who is himself a landlord and admits it openly. "I am not the exception. I am the rule."',
      },
      {
        hr: 'Postoji i treći glas, koji se rjeđe čuje jer pripada onima koji su otišli. Mladi liječnik rođen u mjestu, koji danas radi u Zagrebu, objašnjava preko telefona zašto se ne vraća: "Volio bih. Ali što bih radio od listopada do svibnja? Ambulanta radi dva dana tjedno, škola ima šezdeset učenika, a moja bi supruga, koja je arhitektica, tamo mogla projektirati samo apartmane." Njegovi roditelji i dalje iznajmljuju tri apartmana i zarađuju dovoljno; problem, kaže, nije novac nego to što otok "nudi zaradu, a ne život". Rečenica je gruba, priznaje, ali ne zna blažu koja bi bila točna.',
        en: 'There is also a third voice, heard less often because it belongs to those who left. A young doctor born in the town, who now works in Zagreb, explains over the phone why he is not coming back: "I would like to. But what would I do from October to May? The surgery is open two days a week, the school has sixty pupils, and my wife, who is an architect, could only design apartments there." His parents still rent out three apartments and earn enough; the problem, he says, is not money but that the island "offers earnings, not a life". The sentence is harsh, he admits, but he does not know a gentler one that would be accurate.',
      },
      {
        hr: 'Turistička zajednica, sa svoje strane, pokušava produljiti sezonu: u travnju organizira biciklističku utrku, u listopadu festival maslinova ulja, a zimi programe za umirovljenike iz sjeverne Europe koji traže sunce i tišinu. Rezultati su skromni, ali mjerljivi — sezona se u pet godina produljila za otprilike tri tjedna. "Nitko ne očekuje da će nam veljača izgledati kao kolovoz", kaže direktorica. "Ali ako listopad bude izgledao kao lipanj, to je već trećina više godine u kojoj mjesto živi. A svaki tjedan koji dodamo znači jednog radnika manje koga treba otpustiti."',
        en: 'The tourist board, for its part, is trying to extend the season: in April it organises a cycling race, in October an olive-oil festival, and in winter programmes for pensioners from northern Europe looking for sun and quiet. The results are modest but measurable — in five years the season has lengthened by about three weeks. "Nobody expects February to look like August," says the director. "But if October looks like June, that is already a third more of the year in which the town is alive. And every week we add means one worker fewer who has to be laid off."',
      },
      {
        hr: 'Što se, dakle, dogodilo poslije ljeta bez turista? Manje nego što bi se očekivalo. Sljedeće su se godine gosti vratili, rezervacije su bile bolje nego ikad, a konoba na rivi ponovno je zaposlila sezonce, ovaj put u svibnju. Uljara u susjednom mjestu zaposlila je sedmog radnika. Škola je izgubila još jedan razred. Ribar koji je prodao brod i dalje svako jutro sjedi na rivi i gleda katamaran kako pristaje. "Znate što je najgore?" kaže. "Nije ono ljeto bez turista. Najgore je da smo ga zaboravili čim su se vratili."',
        en: 'So what happened after the summer without tourists? Less than one might expect. The following year the guests returned, bookings were better than ever, and the tavern on the waterfront hired seasonal staff again, this time in May. The oil mill in the neighbouring town hired a seventh worker. The school lost another class. The fisherman who sold his boat still sits on the waterfront every morning and watches the catamaran dock. "Do you know what the worst thing is?" he says. "It isn\'t that summer without tourists. The worst thing is that we forgot it as soon as they came back."',
      },
      {
        hr: 'Na kraju rive, gdje se asfalt pretvara u kamen, stoji zgrada bivše tvornice sardina. Prozori su joj zazidani, a na pročelju još stoji natpis s imenom koje mladi više ne znaju pročitati bez pomoći. Općina već deset godina raspravlja što s njom: hotel, muzej, kulturni centar. Svake se jeseni rasprava obnovi, svakog proljeća odgodi, jer u proljeće svi imaju važnijeg posla. Tvornica, kao i mjesto, čeka lipanj.',
        en: 'At the end of the waterfront, where the asphalt turns to stone, stands the building of the former sardine factory. Its windows are bricked up, and on the façade there is still a sign with a name the young can no longer read without help. For ten years the municipality has been debating what to do with it: a hotel, a museum, a cultural centre. Every autumn the debate is revived, every spring postponed, because in spring everyone has more important work. The factory, like the town, waits for June.',
      },
    ],
    vocabulary: [
      {
        hr: 'turistička zajednica',
        en: 'tourist board',
        ex: 'Prema procjenama turističke zajednice, ljeti ih je dvanaest tisuća.',
      },
      {
        hr: 'boravišna pristojba',
        en: 'tourist (sojourn) tax',
        ex: 'Prihodi od boravišne pristojbe pali su za šezdeset posto.',
      },
      {
        hr: 'otpustiti',
        en: 'to lay off, dismiss',
        ex: 'Konoba je otpustila sezonsko osoblje u srpnju.',
      },
      {
        hr: 'mješovita roba',
        en: 'general goods (grocery)',
        ex: 'Trgovina mješovitom robom skratila je radno vrijeme.',
      },
      { hr: 'zadruga', en: 'cooperative', ex: 'Zadruga je otkupljivala maslinovo ulje.' },
      {
        hr: 'otkupljivati',
        en: 'to buy up (from producers)',
        ex: 'Zadruga otkupljuje ulje od malih proizvođača.',
      },
      {
        hr: 'poticaj',
        en: 'grant, incentive',
        ex: 'Natječaji za poticaje raspisuju se svake godine.',
      },
      { hr: 'razmjer', en: 'scale, proportion', ex: 'Problem je u razmjeru.' },
      {
        hr: 'iznajmljivač',
        en: 'landlord, (holiday) letter',
        ex: 'Načelnik je i sam iznajmljivač.',
      },
      { hr: 'pročelje', en: 'façade', ex: 'Na pročelju još stoji stari natpis.' },
    ],
    quiz: [
      {
        q: 'Što vlasnik konobe misli razlikom između "živjeti od turizma" i "živjeti turizam"?',
        qEn: 'What does the tavern owner mean by the difference between "living off tourism" and "living tourism"?',
        opts: [
          'Da turizam donosi premalo novca',
          'Da je cijeli život mjesta, a ne samo prihod, podređen sezoni',
          'Da turisti žive bolje od mještana',
          'Da konoba radi samo za turiste',
        ],
        correct: 1,
      },
      {
        q: 'Zašto tekst uspoređuje ovisnost o turizmu s monokulturom u poljoprivredi?',
        qEn: 'Why does the text compare dependence on tourism to monoculture in agriculture?',
        opts: [
          'Jer turisti najviše kupuju poljoprivredne proizvode',
          'Jer jedna loša godina ne znači manji prihod nego prazne police',
          'Jer je otok nekad uzgajao samo masline',
          'Jer ekonomisti ne razumiju turizam',
        ],
        correct: 1,
      },
      {
        q: 'Koju posljedicu opisuje ravnateljica škole?',
        qEn: 'What consequence does the head teacher describe?',
        opts: [
          'Djeca ne žele raditi ljeti',
          'Djeca odrastaju misleći da je rad samo ljetni, a ostatak godine čekanje',
          'Škola nema dovoljno učitelja kemije',
          'Učenici zarađuju manje od učitelja',
        ],
        correct: 1,
      },
      {
        q: 'Zašto načelnik kaže "Ja nisam iznimka, ja sam pravilo"?',
        qEn: 'Why does the mayor say "I am not the exception, I am the rule"?',
        opts: [
          'Jer je jedini iznajmljivač u mjestu',
          'Jer priznaje da i on gradi apartmane, kao i svi, dok se porez ne promijeni',
          'Jer se protivi poticajima',
          'Jer je zabranio gradnju apartmana',
        ],
        correct: 1,
      },
      {
        q: 'Što ribar smatra najgorim u cijeloj priči?',
        qEn: 'What does the fisherman consider the worst thing in the whole story?',
        opts: [
          'Ljeto bez turista',
          'Da je prodao brod',
          'Da je mjesto lekciju zaboravilo čim su se turisti vratili',
          'Da katamaran kasni',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b2_long_vlak',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🚆',
    title: 'Vlak koji više ne staje',
    titleEn: 'The Train That No Longer Stops',
    duration: 13,
    focus: 'Public services & infrastructure • Passive constructions • Arguing both sides',
    intro:
      'A regional railway line in Slavonia loses its passenger service. A feature on what a timetable means to a village — and on the arithmetic behind the decision.',
    paragraphs: [
      {
        hr: 'Kolodvor u selu ima dva perona, čekaonicu s klupom i ploču s voznim redom na kojoj od prošlog prosinca nema ničega. Vlakovi i dalje prolaze — teretni, dvaput dnevno, s drvom i šećernom repom — ali više ne staju. Putnički promet na dionici dugoj četrdeset i tri kilometra ukinut je odlukom koju su u mjestu doznali iz novina. "Nitko nas nije pitao", kaže žena koja je trideset godina radila kao prometnica na tom istom kolodvoru. "A nismo ni mi pitali. Mislili smo da vlak jednostavno postoji, kao rijeka."',
        en: 'The station in the village has two platforms, a waiting room with a bench and a timetable board on which there has been nothing since last December. Trains still pass — freight, twice a day, with timber and sugar beet — but they no longer stop. Passenger service on the forty-three-kilometre section was withdrawn by a decision the village learned of from the newspapers. "Nobody asked us," says a woman who worked for thirty years as a dispatcher at that same station. "But we didn\'t ask either. We thought the train simply existed, like the river."',
      },
      {
        hr: 'Argumenti prijevoznika nisu bili skriveni; objavljeni su u dokumentu od dvadeset stranica. Prosječan broj putnika po vlaku pao je na sedam. Trošak po putniku premašio je trideset eura, dok je cijena karte bila tri. Pruga je izgrađena 1912. i na njoj su vlakovi vozili brzinom od pedeset kilometara na sat, jer bi svaka veća brzina zahtijevala obnovu koja se procjenjuje na desetke milijuna. Umjesto vlaka uveden je autobus koji vozi istom trasom, češće i jeftinije. Na papiru je odluka besprijekorna.',
        en: "The operator's arguments were not hidden; they were published in a twenty-page document. The average number of passengers per train had fallen to seven. The cost per passenger exceeded thirty euros, while the ticket price was three. The line was built in 1912 and trains ran on it at fifty kilometres an hour, because any higher speed would require a renovation estimated at tens of millions. Instead of the train, a bus was introduced running the same route, more often and more cheaply. On paper the decision is flawless.",
      },
      {
        hr: 'Na terenu izgleda drugačije. Autobus, za razliku od vlaka, ne staje u selu, nego na glavnoj cesti, dva kilometra dalje, jer se u selo ne može okrenuti. Za srednjoškolce koji putuju u grad to znači ustajanje pola sata ranije i pješačenje uz cestu bez nogostupa. Za umirovljenike koji jednom mjesečno idu liječniku to znači ovisnost o susjedu s autom. Za jedinu trgovinu u selu, koja je stajala nasuprot kolodvoru i živjela od ljudi koji čekaju vlak, to je značilo zatvaranje u ožujku. "Vlak nije prevozio samo ljude", kaže bivša prometnica. "Prevozio je razlog da se netko zaustavi."',
        en: 'On the ground it looks different. The bus, unlike the train, does not stop in the village but on the main road, two kilometres away, because it cannot turn round in the village. For secondary-school pupils travelling to town that means getting up half an hour earlier and walking along a road with no pavement. For pensioners who go to the doctor once a month it means depending on a neighbour with a car. For the only shop in the village, which stood opposite the station and lived off people waiting for the train, it meant closing in March. "The train didn\'t only carry people," says the former dispatcher. "It carried a reason for someone to stop."',
      },
      {
        hr: 'Slučaj nije jedinstven. U posljednjih petnaest godina u Hrvatskoj je putnički promet ukinut na više od dvadeset dionica, uglavnom u Slavoniji, Baranji i Lici — krajevima koji istodobno gube stanovnike najbrže. Stručnjaci za promet ne slažu se što je tu uzrok, a što posljedica. Jedni tvrde da se vlakovi ukidaju jer ljudi odlaze; drugi da ljudi odlaze, među ostalim, i zato što se ukidaju vlakovi. Vjerojatno je istina da je riječ o krugu, u kojem svaka odluka koja ima smisla za sebe ubrzava ono što nitko ne želi.',
        en: 'The case is not unique. In the last fifteen years passenger service in Croatia has been withdrawn on more than twenty sections, mostly in Slavonia, Baranja and Lika — the regions that are at the same time losing population fastest. Transport experts disagree about what is cause and what is consequence. Some argue that trains are withdrawn because people are leaving; others that people are leaving, among other reasons, because trains are being withdrawn. Probably the truth is that it is a circle, in which every decision that makes sense on its own accelerates what nobody wants.',
      },
      {
        hr: 'Učiteljica u seoskoj školi opisuje kako krug izgleda iz razreda. Prije deset godina imala je dvadeset i troje djece; danas ih ima jedanaest, u dva kombinirana razreda. Dvije su obitelji ove godine otišle u grad, i obje su kao razlog navele prijevoz: roditelji rade u smjenama, a s autobusom koji staje dva kilometra od kuće ne mogu uskladiti posao i školu. "Kad ode još jedna obitelj, škola pada ispod granice i zatvara se", kaže. "A kad se škola zatvori, više nema razloga da netko mlad ovdje ostane. Onda neće trebati ni vlak ni autobus."',
        en: 'A teacher at the village school describes what the circle looks like from the classroom. Ten years ago she had twenty-three children; today she has eleven, in two combined classes. Two families left for the town this year, and both gave transport as the reason: the parents work shifts, and with a bus that stops two kilometres from the house they cannot reconcile work and school. "When one more family goes, the school falls below the threshold and closes," she says. "And when the school closes, there is no longer any reason for anyone young to stay here. Then neither the train nor the bus will be needed."',
      },
      {
        hr: 'Ima i onih koji misle da je žalovanje za prugom romantika koju si selo ne može priuštiti. Mladi poljoprivrednik koji je preuzeo očevo gospodarstvo kaže da vlak nije koristio godinama, da se u grad vozi kombijem i da bi novac za obnovu pruge radije vidio u navodnjavanju ili u brzom internetu, "koji nam treba svaki dan, a ne dvaput". Njegov je argument teško odbaciti — i upravo je to problem: svi argumenti u ovoj priči teško se odbacuju, a međusobno se isključuju.',
        en: 'There are also those who think that mourning the line is a romance the village cannot afford. A young farmer who took over his father\'s holding says he had not used the train for years, that he drives to town in a van and that he would rather see the money for renovating the line spent on irrigation or on fast internet, "which we need every day, not twice a day". His argument is hard to dismiss — and that is precisely the problem: every argument in this story is hard to dismiss, and they exclude one another.',
      },
      {
        hr: 'Prijevoznik na to odgovara brojkama koje je teško osporiti: održavanje pruge na kojoj vozi sedmero ljudi košta više nego što bi koštalo da se tih sedmero vozi taksijem. Novac koji se uštedi, tvrde, ulaže se u pruge gdje putnika ima — Zagreb, Rijeka, Osijek. "Ne možemo održavati željeznicu iz 1912. za selo iz 2026.", rekao je direktor na sjednici županijske skupštine, i rečenica je završila u naslovima. Manje se citiralo ono što je dodao: da bi odluka bila drugačija kad bi lokalna samouprava sudjelovala u trošku, kao u nekim europskim zemljama.',
        en: 'The operator replies with figures that are hard to dispute: maintaining a line on which seven people travel costs more than it would cost to drive those seven by taxi. The money saved, they argue, is invested in lines where there are passengers — Zagreb, Rijeka, Osijek. "We cannot maintain a railway from 1912 for a village from 2026," the director said at a session of the county assembly, and the sentence ended up in the headlines. Less quoted was what he added: that the decision would be different if local government shared the cost, as in some European countries.',
      },
      {
        hr: 'Ta rečenica zanima načelnika općine, koji je nakon sjednice počeo zvati kolege iz susjednih općina. Zamisao je jednostavna i u Hrvatskoj gotovo nepoznata: da se pet općina uz prugu udruži i sufinancira jedan jutarnji i jedan popodnevni vlak, po uzoru na regionalne linije u Austriji ili Češkoj. Prvi izračuni pokazuju da bi to svaku općinu stajalo otprilike koliko i održavanje jednog kilometra lokalne ceste. "Nije pitanje možemo li", kaže načelnik. "Pitanje je hoćemo li se dogovoriti. A to je, znate, u Slavoniji uvijek teže pitanje."',
        en: 'That sentence interests the municipal mayor, who after the session began calling colleagues from neighbouring municipalities. The idea is simple and almost unknown in Croatia: that the five municipalities along the line join together and co-finance one morning and one afternoon train, on the model of regional lines in Austria or the Czech Republic. First calculations show it would cost each municipality roughly as much as maintaining one kilometre of local road. "The question is not whether we can," says the mayor. "The question is whether we will agree. And that, you know, is always the harder question in Slavonia."',
      },
      {
        hr: 'Dok se općine dogovaraju, selo se prilagođava. Netko je na ploču s voznim redom zalijepio papir s rasporedom autobusa i telefonskim brojem susjeda koji "vozi u grad za gorivo". Djeca su naučila ustajati ranije. Umirovljenici su otkrili da liječnik prima i u susjednom selu, do kojeg se može pješice. Trgovina se nije vratila. Čekaonica na kolodvoru i dalje je otključana — netko iz Hrvatskih željeznica to nije stigao promijeniti — i ljeti se u njoj hladi klupa na kojoj sjede starci i gledaju teretne vlakove kako prolaze.',
        en: 'While the municipalities negotiate, the village adapts. Someone has stuck a paper to the timetable board with the bus schedule and the phone number of a neighbour who "drives to town for fuel money". The children have learned to get up earlier. The pensioners have discovered that the doctor also holds surgery in the neighbouring village, which can be reached on foot. The shop has not come back. The waiting room at the station is still unlocked — someone at Croatian Railways has not got round to changing that — and in summer the bench in it stays cool, where old men sit and watch the freight trains pass.',
      },
      {
        hr: 'Bivša prometnica jednom je tjedno dolazi obrisati. Nitko je nije zamolio, i nitko joj ne plaća. "Kad se vlak vrati, a vratit će se", kaže, "netko će morati znati gdje je ključ od signalne kućice." Pitam je vjeruje li stvarno da će se vratiti. Gleda prugu koja se u daljini gubi među kukuruzom i odgovara pitanjem: "A što bih drugo radila utorkom?"',
        en: 'The former dispatcher comes once a week to wipe it down. Nobody asked her to, and nobody pays her. "When the train comes back, and it will come back," she says, "someone will have to know where the key to the signal box is." I ask whether she really believes it will come back. She looks at the line disappearing into the maize in the distance and answers with a question: "And what else would I do on Tuesdays?"',
      },
    ],
    vocabulary: [
      { hr: 'vozni red', en: 'timetable', ex: 'Na ploči s voznim redom nema ničega.' },
      {
        hr: 'dionica',
        en: 'section (of a line/road)',
        ex: 'Promet je ukinut na dionici dugoj 43 kilometra.',
      },
      {
        hr: 'ukinuti',
        en: 'to abolish, withdraw (a service)',
        ex: 'Putnički promet je ukinut prošlog prosinca.',
      },
      {
        hr: 'prometnik / prometnica',
        en: 'dispatcher (railway)',
        ex: 'Trideset je godina radila kao prometnica.',
      },
      {
        hr: 'prijevoznik',
        en: 'carrier, transport operator',
        ex: 'Argumenti prijevoznika objavljeni su u dokumentu.',
      },
      { hr: 'premašiti', en: 'to exceed', ex: 'Trošak po putniku premašio je trideset eura.' },
      { hr: 'nogostup', en: 'pavement, sidewalk', ex: 'Cesta nema nogostup.' },
      { hr: 'osporiti', en: 'to dispute, contest', ex: 'Brojke je teško osporiti.' },
      { hr: 'sufinancirati', en: 'to co-finance', ex: 'Općine bi sufinancirale jutarnji vlak.' },
      { hr: 'prilagoditi se', en: 'to adapt', ex: 'Selo se prilagođava.' },
    ],
    quiz: [
      {
        q: 'Kako je selo doznalo za ukidanje putničkog prometa?',
        qEn: 'How did the village learn about the withdrawal of passenger service?',
        opts: [
          'Na javnoj raspravi',
          'Iz novina',
          'Pismom prijevoznika',
          'Od načelnika na sjednici',
        ],
        correct: 1,
      },
      {
        q: 'Zašto autobus nije jednakovrijedna zamjena za vlak?',
        qEn: 'Why is the bus not an equivalent replacement for the train?',
        opts: [
          'Jer vozi rjeđe i skuplje',
          'Jer ne staje u selu nego na glavnoj cesti dva kilometra dalje',
          'Jer ne prima srednjoškolce',
          'Jer vozi samo ljeti',
        ],
        correct: 1,
      },
      {
        q: 'Što tekst kaže o odnosu ukidanja vlakova i iseljavanja?',
        qEn: 'What does the text say about the relationship between withdrawing trains and emigration?',
        opts: [
          'Ljudi odlaze isključivo zbog vlakova',
          'Vlakovi se ukidaju isključivo zato što ljudi odlaze',
          'Riječ je o krugu u kojem jedno ubrzava drugo',
          'Nema nikakve veze između njih',
        ],
        correct: 2,
      },
      {
        q: 'Koju je zamisao načelnik preuzeo iz direktorove manje citirane rečenice?',
        qEn: "What idea did the mayor take from the director's less-quoted sentence?",
        opts: [
          'Da se pruga obnovi za veće brzine',
          'Da općine uz prugu sufinanciraju dva vlaka dnevno',
          'Da se uvede još jedan autobus',
          'Da se kolodvor pretvori u muzej',
        ],
        correct: 1,
      },
      {
        q: 'Zašto bivša prometnica i dalje čisti čekaonicu?',
        qEn: 'Why does the former dispatcher still clean the waiting room?',
        opts: [
          'Jer joj Hrvatske željeznice plaćaju',
          'Jer vjeruje da će se vlak vratiti i netko će morati znati gdje je ključ',
          'Jer u čekaonici prodaje karte za autobus',
          'Jer joj je načelnik to naložio',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_long_tramvaj',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🚋',
    title: 'Tramvaj u pet ujutro',
    titleEn: "The Five O'Clock Tram",
    duration: 13,
    focus: 'Portraits & interviews • Time expressions • Work and social vocabulary',
    intro:
      'One ride on the first tram of the day across Zagreb, and the people who are already on it — a feature about the city that works before the city wakes up.',
    paragraphs: [
      {
        hr: 'Prvi tramvaj linije 6 kreće s Črnomerca u 4:52. U njemu je, kad krene, sedmero ljudi, i svi se međusobno poznaju — ne po imenu, nego po mjestu na kojem sjede. Vozač zna tko će ući na kojoj stanici prije nego što tramvaj stane. "Ovo nije javni prijevoz", kaže mi, ne skidajući pogled s tračnica. "Ovo je kućni prijevoz. Isti ljudi, svaki dan, deset godina." Grad kroz koji prolazimo još je grad ulične rasvjete i zatvorenih roleta; kafići će se otvoriti tek za dva sata.',
        en: 'The first tram on line 6 leaves Črnomerec at 4:52. When it sets off there are seven people on it, and they all know one another — not by name, but by the seat they sit in. The driver knows who will get on at which stop before the tram halts. "This isn\'t public transport," he tells me, not taking his eyes off the rails. "This is house transport. The same people, every day, ten years." The city we pass through is still a city of street lighting and closed shutters; the cafés will not open for another two hours.',
      },
      {
        hr: 'Na prvom sjedalu iza vozača sjedi žena u plavoj radnoj kuti ispod kaputa. Zove se Štefica, ima pedeset i osam godina i čisti urede u poslovnom tornju u centru. Radi od šest do deset, zatim popodne u jednoj školi. "Kad dođu u ured u osam, sve je čisto i nitko ne misli kako", kaže bez ljutnje, kao da opisuje vremensku prognozu. Pitam je smeta li joj to. Razmišlja. "Smetalo bi mi da je prljavo. Ovako je u redu." Na Trgu bana Jelačića silazi, mahne vozaču, i tramvaj kreće dalje bez nje kao da mu nešto nedostaje.',
        en: 'In the first seat behind the driver sits a woman in a blue work smock under her coat. Her name is Štefica, she is fifty-eight and she cleans offices in a business tower in the centre. She works from six to ten, then in the afternoon at a school. "When they arrive at the office at eight, everything is clean and nobody thinks about how," she says without anger, as if describing the weather forecast. I ask whether that bothers her. She thinks. "It would bother me if it were dirty. This way it\'s fine." At Ban Jelačić Square she gets off, waves to the driver, and the tram moves on without her as if something were missing.',
      },
      {
        hr: 'Iza nje sjede dvojica mladića u istim jaknama s logotipom pekarnice. Jedan spava naslonjen na prozor; drugi gleda u mobitel i tiho se smije. Kad ga upitam, kaže da su iz Bosne, da rade u pekarnici na Kvaternikovu trgu i da smjena počinje u pet i trideset, kad se kruh već peče sat vremena. "Prvi kruh ide u šest u kafiće, drugi u sedam u trgovine, treći u osam ljudima", objašnjava kao da nabraja vozni red. Plaća je bolja nego doma, stan dijele s još dvojicom, a nedjeljom, jedinim slobodnim danom, spavaju do podneva. "Onda nam je čudno vidjeti grad danju", kaže. "Kao da smo negdje drugdje."',
        en: 'Behind her sit two young men in identical jackets with a bakery logo. One is asleep, leaning against the window; the other looks at his phone and laughs quietly. When I ask him, he says they are from Bosnia, that they work in a bakery on Kvaternik Square and that the shift starts at half past five, when the bread has already been baking for an hour. "The first bread goes to the cafés at six, the second to the shops at seven, the third to people at eight," he explains as if reciting a timetable. The pay is better than at home, they share a flat with two others, and on Sunday, their only day off, they sleep till noon. "Then it feels strange to see the city by day," he says. "As if we were somewhere else."',
      },
      {
        hr: 'Na Kvaternikovu trgu ulazi medicinska sestra koja upravo završava noćnu smjenu u bolnici i vozi se u suprotnom smjeru od svih ostalih — kući, na spavanje. Ona je jedina u tramvaju koja izgleda umorno, i jedina koja se smiješi. "Noćna je najbolja smjena", tvrdi. "Nema posjeta, nema šefova, samo pacijenti i mi. Najgore je ovo sad — kad se vozim kući, a cijeli grad kreće na posao. Kao da plivam protiv struje." Radi noćne već dvanaest godina, po vlastitom izboru; djeca su joj velika, muž radi popodne, i tako se, kaže, barem vide za ručkom.',
        en: 'At Kvaternik Square a nurse gets on who is just finishing a night shift at the hospital and is travelling in the opposite direction from everyone else — home, to sleep. She is the only person on the tram who looks tired, and the only one who is smiling. "Nights are the best shift," she maintains. "No visitors, no bosses, just the patients and us. The worst part is this bit now — when I\'m riding home and the whole city is setting off for work. As if I were swimming against the current." She has been working nights for twelve years, by her own choice; her children are grown, her husband works afternoons, and that way, she says, they at least see each other at lunch.',
      },
      {
        hr: 'Prema podacima Zagrebačkog holdinga, prvim tramvajima — onima koji kreću prije pet i trideset — dnevno se vozi oko sedam tisuća ljudi, što je manje od dva posto svih putnika. No struktura je posve drugačija od dnevne: gotovo nema studenata i umirovljenika, a prevladavaju radnici u čišćenju, pekarstvu, zdravstvu, zaštitarskoj službi i trgovini. Sociologinja koja proučava rad u gradu naziva ih "nevidljivom smjenom": ljudi čiji rad svi koriste, a nitko ne vidi, jer se obavlja prije nego što grad otvori oči.',
        en: 'According to figures from Zagreb Holding, the first trams — those leaving before half past five — carry about seven thousand people a day, less than two per cent of all passengers. But the composition is completely different from the daytime: there are almost no students or pensioners, and cleaners, bakers, health workers, security staff and shop workers predominate. A sociologist who studies work in the city calls them "the invisible shift": people whose work everyone uses and nobody sees, because it is done before the city opens its eyes.',
      },
      {
        hr: 'Nevidljivost ima i svoju cijenu u novcu. Prema podacima sindikata, radnici u čišćenju i pekarstvu među najslabije su plaćenima u gradu, a noćni i rani rad često se ne plaća kao takav, jer se ugovori sklapaju na "fleksibilno radno vrijeme". Štefica, primjerice, za dvije smjene dnevno zaradi nešto više od minimalne plaće. "Kad sam počela, čistila sam jednu zgradu i to je bilo dovoljno", kaže. "Sad čistim dvije i nije." Ne kaže to kao pritužbu — u ovom tramvaju nitko se ne žali — nego kao činjenicu koju je netko trebao zapisati.',
        en: 'Invisibility also has its price in money. According to union figures, workers in cleaning and baking are among the lowest paid in the city, and night and early work is often not paid as such, because contracts are drawn up for "flexible working hours". Štefica, for example, earns a little over the minimum wage for two shifts a day. "When I started, I cleaned one building and that was enough," she says. "Now I clean two and it isn\'t." She does not say it as a complaint — nobody on this tram complains — but as a fact somebody ought to have written down.',
      },
      {
        hr: 'Vozač, koji je i sam dio nevidljive smjene, ima svoju teoriju o tome zašto se ništa ne mijenja: "Ljudi koji odlučuju nikad se nisu vozili ovim tramvajem. Ne zato što su zli, nego zato što u pet ujutro spavaju." Predlaže, pola u šali, da gradski vijećnici jednom godišnje moraju odraditi jednu ranu smjenu — bilo koju — prije nego što glasuju o voznom redu. "Ne bi trebalo puno. Jedno jutro. Poslije toga bi autobus za skladište kretao u pet, garantiram."',
        en: 'The driver, who is himself part of the invisible shift, has his own theory about why nothing changes: "The people who decide have never ridden this tram. Not because they are bad, but because at five in the morning they are asleep." He suggests, half in jest, that city councillors should have to do one early shift a year — any early shift — before they vote on the timetable. "It wouldn\'t take much. One morning. After that the bus to the warehouse would leave at five, I guarantee it."',
      },
      {
        hr: 'Nevidljivost ima i praktične posljedice. Vozni red noćnih i ranih linija posljednji je put ozbiljno mijenjan prije petnaest godina, iako se grad u međuvremenu proširio i radna mjesta preselila. Zaštitar koji ulazi na Držićevoj objašnjava da do skladišta u kojem radi mora presjesti dvaput i posljednji kilometar pješačiti, jer autobus koji bi ga odvezao kreće tek u šest. "Da smo tisuću bankara, promijenili bi vozni red za tjedan dana", kaže. "Ovako, mi se prilagođavamo. Uvijek smo se prilagođavali."',
        en: 'Invisibility has practical consequences too. The timetable of night and early lines was last seriously changed fifteen years ago, although the city has expanded in the meantime and jobs have moved. A security guard who gets on at Držićeva explains that to reach the warehouse where he works he has to change twice and walk the last kilometre, because the bus that would take him does not leave until six. "If we were a thousand bankers, they\'d change the timetable in a week," he says. "As it is, we adapt. We\'ve always adapted."',
      },
      {
        hr: 'U pola šest tramvaj stiže na Sopot, kraj linije. Vozač gasi svjetla, izlazi, popije kavu iz termosice na stanici i za deset minuta kreće natrag. Sad je tramvaj puniji: grad se budi, ulaze prvi ljudi u odijelima, prvi studenti s naušnicama u ušima, i nitko od njih ne zna da su na ovom sjedalu do maloprije sjedili ljudi koji su im ispekli kruh i očistili ured. "Znate što je najsmješnije?" kaže vozač dok zatvara vrata. "Ovi u odijelima misle da je grad počeo s njima."',
        en: 'At half past five the tram reaches Sopot, the end of the line. The driver switches off the lights, gets out, drinks coffee from a flask at the stop and in ten minutes sets off back. Now the tram is fuller: the city is waking up, the first people in suits get on, the first students with earphones in, and none of them knows that until a moment ago the people who baked their bread and cleaned their office were sitting in this seat. "You know what\'s funniest?" says the driver as he closes the doors. "These ones in suits think the city started with them."',
      },
      {
        hr: 'Kad sljedeći dan u osam ujutro uđem u isti tramvaj, pun je i nitko se ne poznaje. Ljudi gledaju u mobitele, netko govori preglasno, netko se gura. Na sjedalu iza vozača sjedi muškarac s aktovkom i čita novine u kojima piše o produktivnosti. Pekarnica na Kvaternikovu trgu već je prodala treći kruh. Štefica je otišla u školu. Medicinska sestra spava. Tramvaj je isti, ali grad u njemu je drugi — glasniji, zaposleniji, i posve uvjeren da je jedini.',
        en: 'When I get on the same tram at eight the next morning, it is full and nobody knows anyone. People look at their phones, someone talks too loudly, someone pushes. In the seat behind the driver sits a man with a briefcase reading a newspaper article about productivity. The bakery on Kvaternik Square has already sold its third bread. Štefica has gone to the school. The nurse is asleep. The tram is the same, but the city inside it is a different one — louder, busier, and entirely convinced that it is the only one.',
      },
    ],
    vocabulary: [
      { hr: 'roleta', en: 'roller shutter, blind', ex: 'Grad zatvorenih roleta još spava.' },
      { hr: 'radna kuta', en: 'work smock, overall', ex: 'Nosi plavu radnu kutu ispod kaputa.' },
      { hr: 'smjena', en: 'shift', ex: 'Noćna je najbolja smjena.' },
      {
        hr: 'plivati protiv struje',
        en: 'to swim against the current',
        ex: 'Vozim se kući dok svi kreću na posao — kao da plivam protiv struje.',
      },
      {
        hr: 'prevladavati',
        en: 'to predominate',
        ex: 'Prevladavaju radnici u čišćenju i pekarstvu.',
      },
      { hr: 'zaštitar', en: 'security guard', ex: 'Zaštitar ulazi na Držićevoj.' },
      { hr: 'presjesti', en: 'to change (transport)', ex: 'Do skladišta mora presjesti dvaput.' },
      { hr: 'skladište', en: 'warehouse', ex: 'Radi u skladištu na rubu grada.' },
      { hr: 'termosica', en: 'thermos flask', ex: 'Popije kavu iz termosice na stanici.' },
      { hr: 'aktovka', en: 'briefcase', ex: 'Muškarac s aktovkom čita novine.' },
    ],
    quiz: [
      {
        q: 'Što vozač misli kad kaže da je to "kućni prijevoz"?',
        qEn: 'What does the driver mean by calling it "house transport"?',
        opts: [
          'Da tramvaj vozi samo do kuća putnika',
          'Da se u njemu godinama voze isti ljudi koji se međusobno prepoznaju',
          'Da je tramvaj u privatnom vlasništvu',
          'Da putnici ne plaćaju karte',
        ],
        correct: 1,
      },
      {
        q: 'Zašto pekarski radnik kaže da im je "čudno vidjeti grad danju"?',
        qEn: 'Why does the bakery worker say it feels "strange to see the city by day"?',
        opts: [
          'Jer rade noću i spavaju danju pa grad rijetko vide na svjetlu',
          'Jer su nedavno stigli u Zagreb',
          'Jer nedjeljom nema tramvaja',
          'Jer im je grad prevelik',
        ],
        correct: 0,
      },
      {
        q: 'Što sociologinja naziva "nevidljivom smjenom"?',
        qEn: 'What does the sociologist call "the invisible shift"?',
        opts: [
          'Radnike koji rade od kuće',
          'Ljude čiji rad svi koriste, a nitko ne vidi, jer se obavlja prije buđenja grada',
          'Vozače prvih tramvaja',
          'Studente koji uče noću',
        ],
        correct: 1,
      },
      {
        q: 'Koju praktičnu posljedicu nevidljivosti opisuje zaštitar?',
        qEn: 'What practical consequence of invisibility does the security guard describe?',
        opts: [
          'Nižu plaću od bankara',
          'Vozni red koji se ne prilagođava njihovim potrebama, pa presjeda i pješači',
          'Zabranu ulaska u prve tramvaje',
          'Nedostatak sjedala u tramvaju',
        ],
        correct: 1,
      },
      {
        q: 'Kakav je tramvaj u osam ujutro u usporedbi s onim u pet?',
        qEn: "How does the eight o'clock tram compare with the five o'clock one?",
        opts: [
          'Prazniji i tiši',
          'Isti ljudi, samo umorniji',
          'Pun, glasan, nitko se ne poznaje i grad misli da je jedini',
          'Vozi drugom linijom',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b2_long_prvi_glas',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🗳️',
    title: 'Prvi glas',
    titleEn: 'First Vote',
    duration: 13,
    focus: 'Civic vocabulary • Reported opinions • Contrasting viewpoints',
    intro:
      'Four eighteen-year-olds vote for the first time. A feature on what young Croatians expect from politics, why many of their friends will not turn up, and what a ballot paper looks like when you have never held one.',
    paragraphs: [
      {
        hr: 'Iva je na biralište došla s majkom, ne zato što je morala, nego zato što je, kako kaže, "htjela da netko vidi". Ima osamnaest godina i tri mjeseca, maturirala je u lipnju i ovo je prvi put da njezino ime stoji na popisu birača. Postupak je trajao dvije minute: osobna iskaznica, potpis, listić, paravan, kutija. "Očekivala sam da će biti svečanije", kaže poslije, na stubama škole u kojoj je birališno mjesto. "A onda sam shvatila da je baš u tome stvar. Nije svečano. Normalno je. I to je valjda dobro."',
        en: 'Iva came to the polling station with her mother, not because she had to but because, as she puts it, she "wanted someone to see". She is eighteen years and three months old, finished secondary school in June and this is the first time her name is on the electoral roll. The procedure took two minutes: identity card, signature, ballot paper, screen, box. "I expected it to be more ceremonial," she says afterwards, on the steps of the school where the polling station is. "And then I realised that\'s exactly the point. It isn\'t ceremonial. It\'s normal. And that\'s probably good."',
      },
      {
        hr: 'Iva je, statistički gledano, iznimka. Na posljednjim parlamentarnim izborima glasovalo je manje od polovice birača mlađih od dvadeset i pet godina, dok je među starijima od šezdeset odaziv prelazio sedamdeset posto. Brojke se ponavljaju već dva desetljeća, i svake se godine o njima piše s istom zabrinutošću i istim zaključkom: mladi su apatični. Sami mladi taj zaključak, međutim, uglavnom odbacuju. "Nisam apatičan", kaže Ivin razredni kolega Luka, koji nije glasovao. "Samo ne vidim koga bih birao. To nije isto."',
        en: 'Statistically speaking, Iva is the exception. At the last parliamentary elections fewer than half of voters under twenty-five voted, while among those over sixty turnout exceeded seventy per cent. The figures have been repeating for two decades, and every year they are written about with the same concern and the same conclusion: the young are apathetic. The young themselves, however, mostly reject that conclusion. "I\'m not apathetic," says Iva\'s classmate Luka, who did not vote. "I just don\'t see whom I would choose. That\'s not the same thing."',
      },
      {
        hr: 'Istraživanja daju Luki djelomično za pravo. Anketa provedena među mladima od osamnaest do dvadeset i pet godina pokazuje da ih se više od šezdeset posto zanima za "pitanja koja politika rješava" — stanovanje, plaće, okoliš, obrazovanje — a manje od trideset posto za "politiku" kao takvu. Drugim riječima, zanima ih što će se dogoditi, a ne tko će to reći da će se dogoditi. Politologinja koja je vodila istraživanje kaže da je to razlika između generacija koja se često krivo čita: "Stariji su glasovali za stranke jer su stranke bile identitet. Mladi traže rješenje, i ako ga ne vide, ostaju doma. To nije apatija, to je zahtjevnost."',
        en: 'Research partly proves Luka right. A survey among young people aged eighteen to twenty-five shows that more than sixty per cent are interested in "the issues politics deals with" — housing, wages, the environment, education — and fewer than thirty per cent in "politics" as such. In other words, they are interested in what will happen, not in who says it will happen. The political scientist who led the study says this is a generational difference that is often misread: "Older people voted for parties because parties were an identity. The young are looking for a solution, and if they don\'t see one, they stay at home. That isn\'t apathy, that is being demanding."',
      },
      {
        hr: 'Stranke to, barem na papiru, znaju. Svaka je ove godine imala "program za mlade", većina i kandidata mlađeg od trideset godina na vidljivom mjestu liste, a kampanje su se vodile na društvenim mrežama više nego ikad. Rezultat je, prema Luki, bio suprotan namjeri: "Kad političar od šezdeset godina snima video s plesom, ne osjećam da me razumije. Osjećam da me netko pokušava prodati." Iva je blaža: "Bilo je smiješno, ali barem su se trudili. Prije četiri godine nisu ni to."',
        en: 'The parties, at least on paper, know this. Every one of them had a "programme for the young" this year, most also a candidate under thirty in a visible place on the list, and the campaigns were run on social media more than ever. The result, according to Luka, was the opposite of the intention: "When a sixty-year-old politician films a dance video, I don\'t feel he understands me. I feel someone is trying to sell me something." Iva is gentler: "It was funny, but at least they tried. Four years ago they didn\'t even do that."',
      },
      {
        hr: 'Luka prati politiku više nego većina njegovih vršnjaka — zna imena ministara, čita o proračunu, gledao je predizborne sučeljavanja. Upravo zato, tvrdi, nije glasovao: "Kad slušaš pola sata i nitko ne kaže ništa što se može provjeriti, onda glas nije izbor nego lutrija." Politolozi bi rekli da je to klasičan primjer onoga što zovu "informiranim nesudjelovanjem" — ne nezainteresiranost, nego razočaranje koje dolazi upravo od zainteresiranosti. Luka to formulira jednostavnije: "Ne želim da moj glas bude nečija statistika."',
        en: 'Luka follows politics more than most of his peers — he knows the ministers\' names, reads about the budget, watched the pre-election debates. That is precisely why, he maintains, he did not vote: "When you listen for half an hour and nobody says anything that can be checked, then a vote isn\'t a choice but a lottery." Political scientists would say this is a classic example of what they call "informed non-participation" — not lack of interest, but a disappointment that comes precisely from being interested. Luka puts it more simply: "I don\'t want my vote to be somebody\'s statistic."',
      },
      {
        hr: 'Treći prvi glasač, Marko, glasovao je, ali ne za stranku. Na listiću je, kaže, tražio ime — konkretnu osobu iz svog grada za koju zna što je napravila. "Stranke su mi sve iste, ali ljudi nisu. Onaj koji je popravio igralište u mom kvartu, njemu vjerujem više nego programu na sto stranica." Njegov pristup, koji politolozi zovu personaliziranim glasovanjem, sve je češći među mladima i, kako pokazuju istraživanja, jedan je od razloga zašto lokalni izbori imaju bolji odaziv mladih od parlamentarnih.',
        en: 'The third first-time voter, Marko, voted, but not for a party. On the ballot paper, he says, he was looking for a name — a specific person from his town whose record he knows. "The parties are all the same to me, but people aren\'t. The one who fixed the playground in my neighbourhood, I trust him more than a hundred-page programme." His approach, which political scientists call personalised voting, is increasingly common among the young and, as research shows, is one of the reasons local elections have better youth turnout than parliamentary ones.',
      },
      {
        hr: 'Četvrta, Ana, glasovala je iz inozemstva, u konzulatu u Münchenu, gdje studira. Stajala je u redu sat i pol, među ljudima koji su se većinom u Njemačku odselili posljednjih deset godina. "Bilo je čudno", kaže preko videopoziva. "Svi smo otišli, a svi smo došli glasovati. Netko iza mene je rekao: \'Glasam da se mogu vratiti.\' Mislim da je to najtočnija rečenica koju sam čula o ovim izborima." Na pitanje hoće li se ona vratiti odgovara da to ovisi — "i o tome za koga glasam, i o tome tko pobijedi, i o tome što se dogodi između".',
        en: 'The fourth, Ana, voted from abroad, at the consulate in Munich, where she is studying. She stood in a queue for an hour and a half among people who had mostly moved to Germany in the last ten years. "It was strange," she says over a video call. "We all left, and we all came to vote. Someone behind me said: \'I\'m voting so that I can come back.\' I think that is the most accurate sentence I have heard about these elections." Asked whether she will come back, she answers that it depends — "on whom I vote for, on who wins, and on what happens in between".',
      },
      {
        hr: 'Škole su, prema mišljenju svih četvero, dio problema i moguće rješenje. Politika i gospodarstvo predaju se u četvrtom razredu srednje škole, jedan sat tjedno, uglavnom iz udžbenika koji objašnjava ustav, a ne izbore. Nitko od njih nije u školi vidio primjer glasačkog listića ni razgovarao o tome kako se čita stranački program. "Naučili smo što je Sabor", kaže Iva, "ali ne i kako se u njega ulazi." Ministarstvo najavljuje reformu građanskog odgoja već godinama; svaki put, kažu učitelji, zapne na pitanju tko će ga predavati i što se u njemu smije reći.',
        en: 'Schools, in the opinion of all four, are part of the problem and a possible solution. Politics and economics are taught in the final year of secondary school, one lesson a week, mostly from a textbook that explains the constitution rather than elections. None of them saw a sample ballot paper at school or discussed how to read a party programme. "We learned what the Sabor is," says Iva, "but not how you get into it." The ministry has been announcing a reform of civic education for years; every time, teachers say, it gets stuck on the question of who will teach it and what may be said in it.',
      },
      {
        hr: 'Kad se navečer objave rezultati, četvero prvih glasača reagira različito. Iva je zadovoljna, umjereno. Marko je zadovoljan što je "njegov" ušao. Ana u Münchenu piše da "ovisi što se dogodi između". Luka, koji nije glasovao, gleda rezultate pažljivije od svih i kaže da će iduće put možda glasovati — "ako netko kaže nešto što se može provjeriti". Odaziv mladih ovaj je put bio dva posto veći nego prošli, što će analitičari nazvati "blagim porastom", a što u brojkama znači nekoliko tisuća Iva, Marka i Ana koje su prvi put stale iza paravana i shvatile da nije svečano. Da je normalno.',
        en: 'When the results are announced in the evening, the four first-time voters react differently. Iva is satisfied, moderately. Marko is pleased that "his" candidate got in. Ana in Munich writes that it "depends on what happens in between". Luka, who did not vote, watches the results more attentively than any of them and says he might vote next time — "if someone says something that can be checked". Youth turnout this time was two per cent higher than last, which analysts will call "a slight increase", and which in numbers means several thousand Ivas, Markos and Anas who stepped behind the screen for the first time and realised it was not ceremonial. That it was normal.',
      },
    ],
    vocabulary: [
      { hr: 'biralište', en: 'polling station', ex: 'Na biralište je došla s majkom.' },
      { hr: 'popis birača', en: 'electoral roll', ex: 'Prvi je put na popisu birača.' },
      {
        hr: 'glasački listić',
        en: 'ballot paper',
        ex: 'Nitko u školi nije vidio primjer glasačkog listića.',
      },
      { hr: 'paravan', en: 'screen (voting booth)', ex: 'Stala je iza paravana.' },
      { hr: 'odaziv', en: 'turnout', ex: 'Odaziv mladih bio je manji od polovice.' },
      {
        hr: 'vršnjak',
        en: 'peer, person of the same age',
        ex: 'Prati politiku više od svojih vršnjaka.',
      },
      { hr: 'sučeljavanje', en: 'debate (electoral)', ex: 'Gledao je predizborna sučeljavanja.' },
      {
        hr: 'razočaranje',
        en: 'disappointment',
        ex: 'Razočaranje dolazi upravo od zainteresiranosti.',
      },
      { hr: 'konzulat', en: 'consulate', ex: 'Glasovala je u konzulatu u Münchenu.' },
      {
        hr: 'građanski odgoj',
        en: 'civic education',
        ex: 'Ministarstvo najavljuje reformu građanskog odgoja.',
      },
    ],
    quiz: [
      {
        q: 'Zašto Iva kaže da je dobro što glasovanje "nije svečano"?',
        qEn: 'Why does Iva say it is good that voting "isn\'t ceremonial"?',
        opts: [
          'Jer je trajalo predugo',
          'Jer je shvatila da je normalnost postupka upravo bit demokracije',
          'Jer joj majka nije dopustila slaviti',
          'Jer su izbori bili nevažni',
        ],
        correct: 1,
      },
      {
        q: 'Kako Luka objašnjava zašto nije glasovao?',
        qEn: 'How does Luka explain why he did not vote?',
        opts: [
          'Nije zainteresiran za politiku',
          'Zaboravio je datum izbora',
          'Prati politiku, ali ne vidi koga bi izabrao jer nitko ne govori provjerljivo',
          'Nije imao osobnu iskaznicu',
        ],
        correct: 2,
      },
      {
        q: 'Što je "personalizirano glasovanje" u Markovu slučaju?',
        qEn: 'What is "personalised voting" in Marko\'s case?',
        opts: [
          'Glasovanje za stranku s najboljim programom',
          'Glasovanje za konkretnu osobu iz svog grada čiji rad poznaje',
          'Glasovanje putem interneta',
          'Glasovanje po savjetu roditelja',
        ],
        correct: 1,
      },
      {
        q: 'Koju rečenicu Ana smatra najtočnijom o izborima?',
        qEn: 'Which sentence does Ana consider the most accurate about the elections?',
        opts: [
          '"Svi smo otišli."',
          '"Glasam da se mogu vratiti."',
          '"Stranke su sve iste."',
          '"Nije svečano."',
        ],
        correct: 1,
      },
      {
        q: 'Što, prema tekstu, u školi nedostaje u pripremi za izbore?',
        qEn: 'According to the text, what is missing in the school preparation for elections?',
        opts: [
          'Više sati o ustavu',
          'Praktično znanje: kako izgleda listić i kako se čita program',
          'Obavezno glasovanje za učenike',
          'Posjeti političara školama',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_long_salica',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '♻️',
    title: 'Šalica koja se vraća',
    titleEn: 'The Cup That Comes Back',
    duration: 12,
    focus: 'Environment & consumer habits • Conditional sentences • Evaluating a policy',
    intro:
      'A city introduces a deposit on takeaway coffee cups. A feature that follows one cup for a week — through cafés, bins, a washing plant and an argument about whether small rules change big habits.',
    paragraphs: [
      {
        hr: 'Šalica ima broj. Utisnut je u dno, ispod loga grada, i glasi 0481. Kad je kupite s kavom u bilo kojem od dvjesto kafića koji sudjeluju u sustavu, platite jedan euro više; kad je vratite — u istom kafiću ili bilo kojem drugom — dobijete euro natrag. Zamisao je stara koliko i staklene boce, ali ju je grad prije godinu dana prvi u Hrvatskoj primijenio na kavu za van, i od tada se o njoj svađaju konobari, ekolozi, ekonomisti i, najviše, ljudi koji piju kavu.',
        en: "The cup has a number. It is stamped into the base, below the city's logo, and reads 0481. When you buy it with a coffee in any of the two hundred cafés taking part in the scheme, you pay a euro more; when you return it — to the same café or any other — you get the euro back. The idea is as old as glass bottles, but a year ago the city was the first in Croatia to apply it to takeaway coffee, and since then waiters, ecologists, economists and, above all, people who drink coffee have been arguing about it.",
      },
      {
        hr: 'Brojke, barem one službene, izgledaju dobro. U prvoj godini u sustav je ušlo osamdeset tisuća šalica, a stopa povrata iznosi osamdeset i devet posto — što znači da se od deset šalica devet vrati, a jedna završi u ladici, u autu ili, rjeđe, u smeću. Grad procjenjuje da je time izbjegnuto oko milijun i pol jednokratnih čaša godišnje, što je otprilike količina koja bi, složena jedna na drugu, dosegla visinu od tri Sljemena. Usporedba je gradska, ne moja, ali djeluje.',
        en: "The figures, at least the official ones, look good. In the first year eighty thousand cups entered the scheme, and the return rate is eighty-nine per cent — meaning that of ten cups nine come back and one ends up in a drawer, in a car or, more rarely, in the rubbish. The city estimates that this has avoided about one and a half million single-use cups a year, roughly the quantity which, stacked one on top of another, would reach the height of three Sljemes. The comparison is the city's, not mine, but it works.",
      },
      {
        hr: 'Konobari vide drugu stranu. "Prvi mjesec bio je kaos", kaže vlasnica kafića blizu glavnog kolodvora, gdje se ujutro proda tristo kava za van. "Ljudi nisu razumjeli zašto plaćaju više, vraćali su šalice iz drugih kafića, tražili euro natrag za šalicu koju su kupili u drugom gradu." Sustav se s vremenom uhodao, ali problem koji je ostao zove se pranje. Vraćene se šalice ne peru u kafiću, nego ih dvaput tjedno skuplja kombi i odvozi u pogon na rubu grada. Do tada stoje u kutijama u skladištu, "a skladište mi je", kaže vlasnica, "veličine ormara".',
        en: 'The waiters see the other side. "The first month was chaos," says the owner of a café near the main station, where three hundred takeaway coffees are sold every morning. "People didn\'t understand why they were paying more, they returned cups from other cafés, asked for a euro back for a cup they\'d bought in another city." The system settled in over time, but the problem that remained is called washing. Returned cups are not washed in the café; twice a week a van collects them and takes them to a plant on the edge of the city. Until then they stand in boxes in the storeroom, "and my storeroom," says the owner, "is the size of a wardrobe".',
      },
      {
        hr: 'Pogon za pranje nalazi se u bivšoj mljekari i zapošljava dvanaest ljudi. Šalica 0481 ondje stiže u utorak, prolazi kroz stroj koji je pere na osamdeset stupnjeva, suši, pregledava kamerom koja traži napukline, i vraća u kutiju za neki drugi kafić. Voditelj pogona kaže da jedna šalica u prosjeku izdrži dvjesto pranja prije nego što je povuku iz upotrebe. "Pitaju me koliko puta šalica mora kružiti da bi bila ekološki bolja od papirnate", kaže. "Odgovor je: otprilike dvadeset. Naše su u prosjeku na četrdeset i pet."',
        en: 'The washing plant is in a former dairy and employs twelve people. Cup 0481 arrives there on Tuesday, passes through a machine that washes it at eighty degrees, dries it, inspects it with a camera looking for cracks, and returns it to a box for some other café. The plant manager says a cup on average survives two hundred washes before being withdrawn from use. "People ask me how many times a cup has to circulate to be environmentally better than a paper one," he says. "The answer is: about twenty. Ours are on forty-five on average."',
      },
      {
        hr: 'Ekonomija sustava manje je očita nego njegova ekologija. Grad je za pokretanje uložio oko tristo tisuća eura — u šalice, stroj za pranje, kombije i softver koji prati brojeve — i procjenjuje da će se ulaganje vratiti za četiri godine, ponajprije uštedom na odvozu otpada. Kafići ne plaćaju ništa, ali ni ne zarađuju: euro depozita prolazi kroz njihovu kasu i vraća se kupcu. Ono što gube jest vrijeme — konobarica u kafiću kod kolodvora procjenjuje da na povrate potroši dvadesetak minuta dnevno, "što je jedna pauza za cigaretu koju više nemam".',
        en: 'The economics of the scheme are less obvious than its ecology. The city invested about three hundred thousand euros to launch it — in cups, the washing machine, vans and the software that tracks the numbers — and estimates the investment will pay back in four years, primarily through savings on waste collection. The cafés pay nothing, but neither do they earn: the euro of deposit passes through their till and returns to the customer. What they lose is time — the waitress at the café by the station estimates she spends about twenty minutes a day on returns, "which is one cigarette break I no longer have".',
      },
      {
        hr: 'Drugi gradovi promatraju sa zanimanjem i oprezom. Dva su najavila slične sustave za sljedeću godinu, jedan ga je odbio uz obrazloženje da "nema kapaciteta za pranje", a jedan primorski grad razmišlja o inačici prilagođenoj turistima, koji šalicu često odnesu kući kao suvenir i euro nikad ne zatraže natrag. "To nam je zapravo najbolji scenarij", kaže tamošnji pročelnik, napola ozbiljno. "Turist plati euro, odnese šalicu, a mi smo prodali suvenir i uštedjeli čašu."',
        en: 'Other cities are watching with interest and caution. Two have announced similar schemes for next year, one rejected it on the grounds that it "has no washing capacity", and one coastal city is considering a variant adapted to tourists, who often take the cup home as a souvenir and never ask for the euro back. "That is actually our best scenario," says the department head there, half seriously. "The tourist pays a euro, takes the cup, and we have sold a souvenir and saved a cup."',
      },
      {
        hr: 'Kritike ipak nisu utihnule, i nisu sve s iste strane. Udruga malih ugostitelja tvrdi da sustav pogoduje velikim lancima, koji imaju prostora za kutije i osoblja za administraciju, dok mali kafić s jednim konobarom gubi vrijeme na svaki povrat. Dio ekologa, pak, smatra da je cijeli projekt premalen da bi nešto značio: kava za van čini tri posto gradskog otpada, a plastične vrećice, ambalaža za dostavu hrane i građevinski otpad zajedno više od polovice. "Šalica je dobra, ali je i alibi", kaže jedna od njih. "Lako je biti zelen za jedan euro."',
        en: 'The criticism has not died down, however, and it does not all come from the same side. The association of small caterers argues the scheme favours the big chains, which have room for the boxes and staff for the paperwork, while a small café with one waiter loses time on every return. Some ecologists, on the other hand, consider the whole project too small to mean anything: takeaway coffee makes up three per cent of the city\'s waste, while plastic bags, food-delivery packaging and construction waste together make up more than half. "The cup is good, but it\'s also an alibi," says one of them. "It\'s easy to be green for one euro."',
      },
      {
        hr: 'Grad na to odgovara da šalica nikada nije bila zamišljena kao rješenje, nego kao navika. "Kad bismo odmah uveli depozit na svu ambalažu, ljudi bi se pobunili", kaže pročelnica za zaštitu okoliša. "Šalica je vježba. Ako građani nauče vratiti šalicu, lakše će vratiti bocu, pa vrećicu, pa kutiju od dostave." Sljedeći korak, najavljuje, upravo je depozit na kutije za hranu za van, koji bi trebao krenuti na proljeće — "ako preživimo raspravu".',
        en: 'The city replies that the cup was never meant as a solution, but as a habit. "If we introduced a deposit on all packaging at once, people would rebel," says the head of the environmental protection department. "The cup is practice. If citizens learn to return a cup, they will find it easier to return a bottle, then a bag, then a delivery box." The next step, she announces, is precisely a deposit on takeaway food boxes, due to start in the spring — "if we survive the debate".',
      },
      {
        hr: 'Što se dogodilo s ljudima koji piju kavu? Anketa koju je grad naručio pokazuje da je četrdeset posto ispitanika zbog depozita počelo nositi vlastitu šalicu, što nitko nije predvidio i što sustavu zapravo šteti — vlastita šalica ne ulazi u statistiku povrata. Petnaest posto kaže da pije manje kave za van, a više u kafiću, sjedeći, što konobari pozdravljaju, a tvrtke koje prodaju automate za kavu ne. Ostali su, kažu, "naviknuti". Jedan od njih, student koji svako jutro kupuje kavu na putu do fakulteta, formulira to ovako: "Prvi tjedan sam se ljutio. Drugi tjedan sam zaboravio da se ljutim. Sad mi je čudno kad u drugom gradu dobijem papirnatu čašu."',
        en: 'What happened to the people who drink coffee? A survey commissioned by the city shows that forty per cent of respondents began carrying their own cup because of the deposit, which nobody predicted and which actually harms the scheme — a personal cup does not enter the return statistics. Fifteen per cent say they drink less coffee to go and more in the café, sitting down, which the waiters welcome and the companies selling coffee machines do not. The rest are, they say, "used to it". One of them, a student who buys coffee every morning on the way to university, puts it like this: "The first week I was annoyed. The second week I forgot I was annoyed. Now it feels strange when I get a paper cup in another city."',
      },
      {
        hr: 'Šalica 0481 u petak je ponovno u kafiću kod kolodvora, na polici, oprana i spremna. Vlasnica je uzima i pokazuje mi dno: broj, logo i sitna ogrebotina koju kamera nije smatrala dovoljnim razlogom za povlačenje. "Znate što je najsmješnije?" kaže. "Ljudi sada gledaju broj. Jedan gospodin traži uvijek istu — kaže da mu je 0217 sretna. Nikad ne dobije istu, naravno, ali svaki put pita." Zatim natoči kavu, stavi poklopac i pruži šalicu sljedećem u redu. Euro više, euro natrag. Grad, u malom, vježba.',
        en: 'On Friday cup 0481 is back in the café by the station, on the shelf, washed and ready. The owner picks it up and shows me the base: the number, the logo and a small scratch the camera did not consider sufficient reason for withdrawal. "You know what\'s funniest?" she says. "People look at the number now. One gentleman always asks for the same one — says 0217 is his lucky one. He never gets the same one, of course, but he asks every time." Then she pours the coffee, puts on the lid and hands the cup to the next person in the queue. A euro more, a euro back. The city, in miniature, practising.',
      },
    ],
    vocabulary: [
      { hr: 'utisnut', en: 'stamped, embossed', ex: 'Broj je utisnut u dno šalice.' },
      { hr: 'povrat', en: 'return (of a deposit/item)', ex: 'Stopa povrata iznosi 89 posto.' },
      {
        hr: 'jednokratan',
        en: 'single-use, disposable',
        ex: 'Izbjegnuto je milijun i pol jednokratnih čaša.',
      },
      {
        hr: 'uhodati se',
        en: 'to settle in, get into routine',
        ex: 'Sustav se s vremenom uhodao.',
      },
      { hr: 'pogon', en: 'plant, facility', ex: 'Šalice se peru u pogonu na rubu grada.' },
      { hr: 'napuklina', en: 'crack', ex: 'Kamera traži napukline.' },
      {
        hr: 'povući iz upotrebe',
        en: 'to withdraw from use',
        ex: 'Šalica izdrži dvjesto pranja prije povlačenja iz upotrebe.',
      },
      { hr: 'pogodovati (komu)', en: 'to favour, benefit', ex: 'Sustav pogoduje velikim lancima.' },
      { hr: 'ambalaža', en: 'packaging', ex: 'Depozit na svu ambalažu izazvao bi pobunu.' },
      {
        hr: 'pročelnik / pročelnica',
        en: 'head of a (city) department',
        ex: 'Pročelnica za zaštitu okoliša najavljuje sljedeći korak.',
      },
    ],
    quiz: [
      {
        q: 'Kako funkcionira sustav depozita opisan u tekstu?',
        qEn: 'How does the deposit scheme described in the text work?',
        opts: [
          'Plati se euro više, a euro se vrati kad se šalica vrati u bilo koji kafić u sustavu',
          'Šalica se kupuje jednom i zadržava zauvijek',
          'Šalica se vraća samo u kafić gdje je kupljena',
          'Depozit se plaća samo za prvu kavu u danu',
        ],
        correct: 0,
      },
      {
        q: 'Koji je glavni praktični problem za male kafiće?',
        qEn: 'What is the main practical problem for small cafés?',
        opts: [
          'Cijena šalica',
          'Vraćene šalice čekaju u kutijama u premalom skladištu do odvoza na pranje',
          'Gosti odbijaju piti iz njih',
          'Kombi dolazi svaki dan i ometa posao',
        ],
        correct: 1,
      },
      {
        q: 'Zašto dio ekologa šalicu naziva "alibijem"?',
        qEn: 'Why do some ecologists call the cup an "alibi"?',
        opts: [
          'Jer se šalice ne peru dovoljno vruće',
          'Jer grad zarađuje na depozitu',
          'Jer su šalice uvezene',
          'Jer kava za van čini mali dio otpada, a veći problemi ostaju neriješeni',
        ],
        correct: 3,
      },
      {
        q: 'Kako grad brani projekt?',
        qEn: 'How does the city defend the project?',
        opts: [
          'Tvrdi da šalica rješava problem otpada',
          'Kaže da je šalica vježba navike koja olakšava kasnije depozite na drugu ambalažu',
          'Najavljuje ukidanje sustava',
          'Optužuje konobare za loše provođenje',
        ],
        correct: 1,
      },
      {
        q: 'Koji neočekivani učinak pokazuje anketa?',
        qEn: 'What unexpected effect does the survey show?',
        opts: [
          'Ljudi piju više kave nego prije',
          'Većina je prestala piti kavu',
          'Četrdeset posto ispitanika počelo je nositi vlastitu šalicu, što ne ulazi u statistiku povrata',
          'Šalice se vraćaju u druge gradove',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_b2_long_podstanari',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🏢',
    title: 'Iznajmljivači i podstanari',
    titleEn: 'Landlords and Tenants',
    duration: 13,
    focus: 'Housing & money vocabulary • Comparatives • Balancing two perspectives',
    intro:
      'Rents in Zagreb have doubled in a decade. A feature that sits down with both sides of the same door — a couple who cannot find a flat and the owner who will not rent to them — and with the numbers between them.',
    paragraphs: [
      {
        hr: 'Petra i Ivan traže stan već četiri mjeseca. Oboje rade — ona u knjigovodstvu, on u IT tvrtki — i zajedno zarađuju iznad zagrebačkog prosjeka. Ipak, svaki tjedan pišu desetak poruka na oglase i dobiju dva-tri odgovora, a na razgledavanju ih redovito čeka još petnaest parova. "Osjećamo se kao na audiciji", kaže Petra. "Nosimo potvrde o plaći, preporuke bivšeg stanodavca, čak i fotografiju mačke, da vide da je mirna. I onda stan dobije netko tko je ponudio pedeset eura više."',
        en: 'Petra and Ivan have been looking for a flat for four months. Both work — she in bookkeeping, he in an IT company — and together they earn above the Zagreb average. Yet every week they write a dozen messages to adverts and get two or three replies, and at the viewing another fifteen couples are regularly waiting. "We feel like we\'re at an audition," says Petra. "We bring salary certificates, references from our former landlord, even a photo of the cat, so they can see she\'s quiet. And then the flat goes to someone who offered fifty euros more."',
      },
      {
        hr: 'Brojke potvrđuju dojam. Prosječna najamnina za dvosobni stan u Zagrebu u deset se godina udvostručila, dok su plaće porasle za otprilike polovicu toga. Ponuda stanova za dugoročni najam istodobno se smanjila: prema procjenama agencija, gotovo trećina stanova koji su se prije iznajmljivali studentima i mladim obiteljima danas se iznajmljuje turistima, po danu, preko platformi. Hrvatska pritom ima jednu od najviših stopa vlasništva nad stanovima u Europi — više od devedeset posto kućanstava živi u vlastitom — pa je tržište najma malo, nesređeno i, kako kaže jedan ekonomist, "prepušteno pojedinačnim živcima".',
        en: 'The figures confirm the impression. The average rent for a two-room flat in Zagreb has doubled in ten years, while wages have risen by about half that. The supply of flats for long-term rent has shrunk at the same time: according to agency estimates, almost a third of the flats that used to be rented to students and young families are now rented to tourists, by the night, through platforms. Croatia meanwhile has one of the highest rates of home ownership in Europe — more than ninety per cent of households live in their own — so the rental market is small, unregulated and, as one economist puts it, "left to individual nerves".',
      },
      {
        hr: 'Živci s druge strane vrata pripadaju gospođi Vlasti, umirovljenoj profesorici koja iznajmljuje stan naslijeđen od roditelja. Njezina je priča drugačija, ali ne manje stvarna. Prije pet godina iznajmila je stan mladom paru koji je nakon godinu dana prestao plaćati. Postupak iseljenja trajao je dvadeset mjeseci, a sudske troškove i neplaćenu stanarinu nikada nije naplatila. "Otada iznajmljujem samo preko preporuke, samo na godinu, i tražim tri mjesece unaprijed", kaže. "Znam da to zvuči okrutno. Ali ja nisam banka. Ja sam žena s jednim stanom i mirovinom od šesto eura."',
        en: 'The nerves on the other side of the door belong to Mrs Vlasta, a retired teacher who rents out a flat inherited from her parents. Her story is different, but no less real. Five years ago she rented the flat to a young couple who stopped paying after a year. The eviction procedure took twenty months, and she never recovered the court costs or the unpaid rent. "Since then I rent only through recommendation, only for a year, and I ask for three months in advance," she says. "I know it sounds cruel. But I am not a bank. I am a woman with one flat and a pension of six hundred euros."',
      },
      {
        hr: 'Pravnici potvrđuju da je gospođa Vlasta u pravu barem u jednome: zakon o najmu stanova star je gotovo trideset godina i štiti obje strane loše. Stanodavac koji želi iseliti neplatišu čeka godinama; podstanar kojem stanodavac otkaže ugovor bez razloga nema se komu obratiti, jer se većina ugovora ionako sklapa usmeno ili "na crno", da bi se izbjegao porez. Procjenjuje se da se više od polovice najamnina u Zagrebu plaća bez ugovora ili s ugovorom na simboličan iznos. "Imamo tržište na kojem su svi ranjivi i svi to znaju", kaže odvjetnica specijalizirana za stanarske sporove. "Zato se svi ponašaju obrambeno."',
        en: 'Lawyers confirm that Mrs Vlasta is right in at least one respect: the law on residential tenancies is almost thirty years old and protects both sides badly. A landlord who wants to evict a non-payer waits for years; a tenant whose landlord cancels the contract without cause has nobody to turn to, because most contracts are concluded verbally anyway, or "off the books", to avoid tax. It is estimated that more than half of rents in Zagreb are paid without a contract or with a contract for a token amount. "We have a market on which everyone is vulnerable and everyone knows it," says a lawyer specialising in tenancy disputes. "That\'s why everyone behaves defensively."',
      },
      {
        hr: 'Obrambeno ponašanje ima svoju cijenu, i ne plaćaju je samo mladi parovi. Sveučilište u Zagrebu ove je godine upisalo manje studenata iz drugih gradova nego prije pet godina, a dio razloga, prema anketi studentskog zbora, jest cijena smještaja: soba u privatnom stanu stoji koliko i pola prosječne plaće u Slavoniji. Studentski domovi imaju mjesta za desetak posto studenata. Bolnice i škole u Zagrebu teško zapošljavaju mlade liječnike i učitelje iz drugih krajeva, jer im plaća ne pokriva najam. "Tržište najma nije stambeno pitanje", kaže ekonomist. "To je pitanje tko si može priuštiti živjeti u glavnom gradu, a to je pitanje o zemlji."',
        en: 'Defensive behaviour has its price, and it is not only young couples who pay it. The University of Zagreb enrolled fewer students from other towns this year than five years ago, and part of the reason, according to a student union survey, is the cost of accommodation: a room in a private flat costs as much as half an average wage in Slavonia. Student halls have places for about ten per cent of students. Hospitals and schools in Zagreb find it hard to hire young doctors and teachers from other regions, because their pay does not cover the rent. "The rental market is not a housing question," says the economist. "It is a question of who can afford to live in the capital, and that is a question about the country."',
      },
      {
        hr: 'Postoji i pokušaj da se problem riješi odozdo. Skupina mladih arhitekata i pravnika osnovala je stambenu zadrugu — model uobičajen u Švicarskoj i Njemačkoj, a u Hrvatskoj gotovo nepoznat — u kojoj članovi zajedno grade zgradu i zatim u njoj žive kao najmoprimci vlastite zadruge, bez profita i bez mogućnosti prodaje. Prva zgrada s dvadeset stanova trebala bi biti gotova za dvije godine. "Nećemo riješiti Zagreb", kaže jedan od osnivača. "Ali dokazat ćemo da stan može biti dom, a ne investicija. Netko to mora prvi pokazati."',
        en: 'There is also an attempt to solve the problem from below. A group of young architects and lawyers has founded a housing cooperative — a model common in Switzerland and Germany, and almost unknown in Croatia — in which members build a building together and then live in it as tenants of their own cooperative, without profit and without the possibility of selling. The first building with twenty flats should be finished in two years. "We won\'t solve Zagreb," says one of the founders. "But we will prove that a flat can be a home and not an investment. Someone has to show it first."',
      },
      {
        hr: 'Gospođa Vlasta o zadruzi nije čula, ali kad joj objasnim model, dugo šuti, a onda kaže nešto što sažima cijelu priču: "Znate, ja svoj stan ne iznajmljujem da bih zaradila. Iznajmljujem ga da bih ga zadržala — porez, pričuva, popravci. Da mi netko jamči da će ga netko pristojan čuvati i platiti, dala bih ga za manje. Ali nitko mi to ne jamči, pa tražim više i bojim se svakoga." Zatim doda, tiše: "Vjerojatno se i oni boje mene."',
        en: 'Mrs Vlasta has not heard of the cooperative, but when I explain the model to her she is silent for a long time, and then says something that sums up the whole story: "You know, I don\'t rent out my flat to make money. I rent it out to keep it — tax, the building fund, repairs. If someone guaranteed me that a decent person would look after it and pay, I\'d let it for less. But nobody guarantees me that, so I ask for more and I\'m afraid of everyone." Then she adds, more quietly: "They are probably afraid of me too."',
      },
      {
        hr: 'Država je više puta najavljivala novi zakon, a posljednji prijedlog uključuje brži postupak iseljenja za neplatiše, registar ugovora o najmu i porezne olakšice za dugoročni najam. Prijedlog kritiziraju obje strane, što ga, prema mišljenju jednog zastupnika, "vjerojatno čini uravnoteženim". Iznajmljivači tvrde da će registar samo povećati porez; udruge podstanara da su olakšice premale da bi ikoga odvratile od turista. Rasprava u Saboru odgođena je dvaput.',
        en: 'The state has announced a new law several times, and the latest proposal includes a faster eviction procedure for non-payers, a register of rental contracts and tax relief for long-term letting. The proposal is criticised by both sides, which, in the opinion of one member of parliament, "probably makes it balanced". Landlords argue that the register will only increase tax; tenants\' associations that the relief is too small to deter anyone from tourists. The debate in the Sabor has been postponed twice.',
      },
      {
        hr: 'Dok se zakon čeka, gradovi pokušavaju svoje. Zagreb je najavio program po kojem bi grad jamčio stanodavcima plaćanje najamnine za mlade obitelji — ako podstanar prestane plaćati, grad plaća i naplaćuje se od podstanara. Slični programi postoje u Beču i Ljubljani, i ondje su, prema podacima, povećali ponudu dugoročnog najma za desetak posto. "To je ono što mi treba", kaže gospođa Vlasta kad joj opišem program. "Ne trebam veću stanarinu. Trebam da mi netko jamči da ću je dobiti."',
        en: 'While the law is awaited, the cities are trying their own approaches. Zagreb has announced a programme under which the city would guarantee landlords the payment of rent for young families — if the tenant stops paying, the city pays and recovers the money from the tenant. Similar programmes exist in Vienna and Ljubljana, and there, according to the data, they have increased the supply of long-term rentals by about ten per cent. "That\'s what I need," says Mrs Vlasta when I describe the programme to her. "I don\'t need a higher rent. I need someone to guarantee I\'ll get it."',
      },
      {
        hr: 'Petra i Ivan stan su na kraju našli — ne preko oglasa, nego preko Ivanove kolegice čija je teta tražila "nekoga normalnog". Stanarina je nešto viša nego što su planirali, ugovor je na godinu, a teta je tražila dva mjeseca unaprijed umjesto tri, "jer ste mladi". Pitam ih jesu li zadovoljni. Ivan sliježe ramenima. "Zadovoljni smo što je gotovo. Ali nešto je čudno u gradu u kojem stan dobiješ jer poznaješ nekoga, a ne zato što ga možeš platiti." Petra dodaje: "I u kojem gospođa koja nam ga daje ima isti strah kao mi. Samo s druge strane vrata."',
        en: 'Petra and Ivan found a flat in the end — not through an advert but through Ivan\'s colleague whose aunt was looking for "someone normal". The rent is somewhat higher than they planned, the contract is for a year, and the aunt asked for two months in advance instead of three, "because you\'re young". I ask whether they are satisfied. Ivan shrugs. "We\'re satisfied that it\'s over. But there\'s something odd about a city where you get a flat because you know someone, not because you can pay for it." Petra adds: "And where the lady giving it to us has the same fear we have. Just from the other side of the door."',
      },
    ],
    vocabulary: [
      {
        hr: 'najamnina / stanarina',
        en: 'rent',
        ex: 'Prosječna najamnina udvostručila se u deset godina.',
      },
      { hr: 'stanodavac', en: 'landlord', ex: 'Donijeli su preporuku bivšeg stanodavca.' },
      {
        hr: 'razgledavanje',
        en: 'viewing (of a flat)',
        ex: 'Na razgledavanju čeka petnaest parova.',
      },
      {
        hr: 'dugoročni najam',
        en: 'long-term rental',
        ex: 'Ponuda stanova za dugoročni najam smanjila se.',
      },
      {
        hr: 'kućanstvo',
        en: 'household',
        ex: 'Više od 90 posto kućanstava živi u vlastitom stanu.',
      },
      { hr: 'iseljenje', en: 'eviction', ex: 'Postupak iseljenja trajao je dvadeset mjeseci.' },
      {
        hr: 'neplatiša',
        en: 'non-payer, defaulter',
        ex: 'Stanodavac koji želi iseliti neplatišu čeka godinama.',
      },
      { hr: 'na crno', en: 'off the books, informally', ex: 'Većina se ugovora sklapa "na crno".' },
      {
        hr: 'porezna olakšica',
        en: 'tax relief',
        ex: 'Prijedlog uključuje porezne olakšice za dugoročni najam.',
      },
      { hr: 'jamčiti', en: 'to guarantee', ex: 'Grad bi jamčio stanodavcima plaćanje najamnine.' },
    ],
    quiz: [
      {
        q: 'Zašto se Petra osjeća "kao na audiciji"?',
        qEn: 'Why does Petra feel "like at an audition"?',
        opts: [
          'Jer stanodavci traže glumce',
          'Jer se s dokumentima i preporukama natječe s mnogo parova, a odlučuje tko ponudi više',
          'Jer joj je stan preskup',
          'Jer mora dokazati da nema mačku',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je hrvatsko tržište najma malo i nesređeno, prema tekstu?',
        qEn: 'According to the text, why is the Croatian rental market small and unregulated?',
        opts: [
          'Jer nitko ne želi živjeti u Zagrebu',
          'Jer je zabranjeno iznajmljivati turistima',
          'Jer su plaće previsoke',
          'Jer većina kućanstava živi u vlastitom stanu, pa je najam rubna pojava prepuštena pojedincima',
        ],
        correct: 3,
      },
      {
        q: 'Što je gospođa Vlasta naučila iz iskustva s neplatišama?',
        qEn: 'What did Mrs Vlasta learn from her experience with non-payers?',
        opts: [
          'Da treba iznajmljivati turistima',
          'Da iznajmljuje samo preko preporuke, na godinu, uz tri mjeseca unaprijed',
          'Da je najbolje prodati stan',
          'Da sud uvijek štiti stanodavce',
        ],
        correct: 1,
      },
      {
        q: 'Zašto zastupnik kaže da je prijedlog zakona "vjerojatno uravnotežen"?',
        qEn: 'Why does the MP say the draft law is "probably balanced"?',
        opts: [
          'Jer ga podržavaju obje strane',
          'Jer ga kritiziraju obje strane',
          'Jer je napisan na engleskom i hrvatskom',
          'Jer ga je Sabor već izglasao',
        ],
        correct: 1,
      },
      {
        q: 'Što gospođa Vlasta kaže da joj zapravo treba?',
        qEn: 'What does Mrs Vlasta say she actually needs?',
        opts: ['Višu stanarinu', 'Više stanova', 'Nižu mirovinu', 'Jamstvo da će stanarinu dobiti'],
        correct: 3,
      },
    ],
  },
  {
    id: 'gs_b2_long_godina_na_selu',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🌻',
    title: 'Godina na selu',
    titleEn: 'A Year in the Village',
    duration: 13,
    focus: 'Life-change narrative • Seasons & routines • Weighing gains and losses',
    intro:
      'A young family leaves Zagreb for a village in Slavonia with a state grant, a half-ruined house and a plan. Twelve months later, a feature on what the brochure promised and what the year delivered.',
    paragraphs: [
      {
        hr: 'Kuća je stajala osamnaest tisuća eura, što je u Zagrebu cijena parkirnog mjesta. Imala je četiri sobe, podrum, dvorište s orahom i krov koji je, kako je prodavač rekao, "držao do lani". Maja i Tomislav kupili su je u ožujku, s dvoje djece od pet i sedam godina, poticajem od Ministarstva za naseljavanje slabije razvijenih područja i uvjerenjem koje je Maja opisala ovako: "Znali smo da će biti teško. Nismo znali što točno."',
        en: 'The house cost eighteen thousand euros, which in Zagreb is the price of a parking space. It had four rooms, a cellar, a yard with a walnut tree and a roof that, as the seller said, "held until last year". Maja and Tomislav bought it in March, with two children aged five and seven, a grant from the Ministry for settling less developed areas, and a conviction Maja described like this: "We knew it would be hard. We didn\'t know what exactly."',
      },
      {
        hr: 'Selo ima četiristo stanovnika, crkvu, školu s dva kombinirana razreda, trgovinu koja radi do jedan i kafić koji radi kad vlasnik ima volje. Do najbližeg grada je dvadeset kilometara, do Zagreba tri sata. Tomislav je programer i radi na daljinu, što je cijelu selidbu učinilo mogućom; Maja je bila učiteljica u Zagrebu i u selu je, nakon pola godine čekanja, dobila pola radnog vremena u školi. "U gradu sam imala trideset učenika u razredu", kaže. "Ovdje ih imam devet, u dva razreda, i poznajem im roditelje, bake, pse. To je druga vrsta posla."',
        en: 'The village has four hundred inhabitants, a church, a school with two combined classes, a shop open until one and a café that is open when the owner feels like it. The nearest town is twenty kilometres away, Zagreb three hours. Tomislav is a programmer and works remotely, which made the whole move possible; Maja was a teacher in Zagreb and in the village, after six months\' waiting, got a half-time post at the school. "In the city I had thirty pupils in the class," she says. "Here I have nine, in two classes, and I know their parents, grandmothers, dogs. It\'s a different kind of job."',
      },
      {
        hr: 'Prvih šest mjeseci potrošili su na krov, koji nije "držao do lani", nego do prve jače kiše u travnju. Zatim na vodu, jer je bunar bio zagađen, a priključak na vodovod trebalo je čekati. Zatim na internet, bez kojega Tomislav ne može raditi i koji je stigao tek u srpnju, nakon pisama, poziva i jednog članka u lokalnim novinama. "Poticaj je pokrio kuću", kaže Tomislav. "Sve ostalo platili smo iz ušteđevine. Ako netko misli da se na selo seli jer je jeftino, neka računa dvaput."',
        en: 'The first six months they spent on the roof, which did not "hold until last year" but until the first heavy rain in April. Then on water, because the well was contaminated and the connection to the mains had to be waited for. Then on the internet, without which Tomislav cannot work and which arrived only in July, after letters, calls and an article in the local paper. "The grant covered the house," says Tomislav. "Everything else we paid from savings. If anyone thinks you move to the countryside because it\'s cheap, let them do the sums twice."',
      },
      {
        hr: 'Susjedi su, kažu oboje, bili ono što brošure obećavaju, ali na način koji brošure ne opisuju. Prvi tjedan nitko nije došao. Drugi je tjedan došla starija žena s kolačem i pitanjima — odakle su, čiji su, zašto baš ovamo — i sljedećeg je dana cijelo selo znalo odgovore. "Nema privatnosti", kaže Maja, "ali nema ni anonimnosti, a ja sam shvatila da mi je anonimnost u gradu bila usamljenost s drugim imenom." Kad je Tomislav u studenome pao s ljestava i slomio ruku, netko je svaki dan tri tjedna donosio drva i ložio peć, a nitko nikad nije rekao tko.',
        en: 'The neighbours, they both say, were what the brochures promise, but in a way the brochures do not describe. The first week nobody came. The second week an elderly woman came with a cake and questions — where were they from, whose were they, why here of all places — and the next day the whole village knew the answers. "There\'s no privacy," says Maja, "but there\'s no anonymity either, and I realised that anonymity in the city had been loneliness under another name." When Tomislav fell off a ladder in November and broke his arm, somebody brought firewood and lit the stove every day for three weeks, and nobody ever said who.',
      },
      {
        hr: 'Djeca su se prilagodila brže od roditelja, što je, prema riječima psihologinje koja prati obitelji u programu naseljavanja, uobičajeno. Sedmogodišnji sin naučio je voziti bicikl po cesti bez nogostupa, razlikovati vrste voća po lišću i, na Majin užas, penjati se na orah. Petogodišnja kći prvih se mjeseci pitala gdje su "pravi dućani", a do ljeta je zaboravila da postoje. Jedino što djeci nedostaje, kaže Maja, jesu druga djeca: u selu ih je ukupno dvadeset i troje, i svi se poznaju do umora.',
        en: 'The children adapted faster than the parents, which, according to the psychologist who follows families in the settlement programme, is usual. The seven-year-old son learned to ride a bicycle on a road with no pavement, to tell kinds of fruit by their leaves and, to Maja\'s horror, to climb the walnut tree. The five-year-old daughter asked in the first months where the "real shops" were, and by summer had forgotten they existed. The only thing the children lack, says Maja, is other children: there are twenty-three in the whole village, and they all know one another to the point of weariness.',
      },
      {
        hr: 'Novac je, dakako, tema kojoj se vraćaju. Kuća je bila jeftina, ali život na selu skuplji je nego što su mislili u nekoliko točaka koje nitko ne spominje: dva automobila umjesto nijednog, jer bez auta se ne može ni do liječnika ni do trgovine s "pravim" izborom; grijanje na drva, koje je jeftinije od plina samo ako ga sami cijepate; i vrijeme, koje je najskuplje od svega. "U Zagrebu sam do posla trebala dvadeset minuta tramvajem", kaže Maja. "Ovdje trebam pet minuta pješice do škole, ali sat vremena do zubara, dva do specijalista i pola dana do bilo koje ustanove koja izdaje papire."',
        en: 'Money, of course, is a subject they return to. The house was cheap, but life in the village is more expensive than they thought on several points nobody mentions: two cars instead of none, because without a car you can reach neither the doctor nor a shop with a "real" choice; wood heating, which is cheaper than gas only if you split the wood yourself; and time, which is the most expensive of all. "In Zagreb I needed twenty minutes by tram to get to work," says Maja. "Here I need five minutes on foot to the school, but an hour to the dentist, two to a specialist and half a day to any office that issues papers."',
      },
      {
        hr: 'S druge strane, neke su se stavke jednostavno izbrisale. Ne plaćaju vrtić, jer ga nema, pa kćer čuva susjeda za jaja i pomoć u vrtu. Ne plaćaju teretanu, jer, kaže Tomislav, "cijepanje drva je teretana". Ne plaćaju dostavu hrane, jer je nema, pa kuhaju, što je, priznaje Maja, prvih mjeseci bilo mučenje, a sada je "jedino vrijeme u danu kad smo svi četvero u istoj sobi bez ekrana". Račun na kraju godine bio je, po njezinu izračunu, otprilike isti kao u Zagrebu. "Samo što novac ide na druge stvari. I na druge ljude."',
        en: 'On the other hand, some items simply vanished. They do not pay for nursery, because there is none, so the neighbour looks after their daughter in exchange for eggs and help in the garden. They do not pay for a gym, because, says Tomislav, "splitting wood is the gym". They do not pay for food delivery, because there is none, so they cook, which, Maja admits, was torture in the first months and is now "the only time of day when all four of us are in the same room without a screen". The bill at the end of the year was, by her calculation, roughly the same as in Zagreb. "Only the money goes on different things. And to different people."',
      },
      {
        hr: 'Program naseljavanja, koji je u tri godine u slavonska sela privukao oko osamsto obitelji, ima i svoju drugu statistiku: gotovo četvrtina vratila se u grad prije isteka obveze od pet godina, vraćajući poticaj. Razlozi su uvijek slični — posao koji se ipak nije mogao raditi na daljinu, bolest za koju je najbliža bolnica predaleko, škola koja se zatvorila jer nije bilo dovoljno djece. Voditeljica programa to ne skriva: "Ne prodajemo idilu. Prodajemo mogućnost. Za neke je to dovoljno, za neke nije."',
        en: 'The settlement programme, which in three years has drawn about eight hundred families to Slavonian villages, has its other statistic too: almost a quarter returned to the city before the five-year commitment expired, repaying the grant. The reasons are always similar — a job that could not after all be done remotely, an illness for which the nearest hospital is too far, a school that closed because there were not enough children. The programme manager does not hide this: "We are not selling an idyll. We are selling a possibility. For some that is enough, for some it isn\'t."',
      },
      {
        hr: 'Maja i Tomislav u ožujku su obilježili godinu. Krov drži, voda teče, internet radi, orah je prvi put dao ploda. Pitam ih žale li. Tomislav dugo razmišlja i onda kaže da žali za dvije stvari: za kinom i za time što ne može navečer otići pješice na pivo, "jer kafić radi kad vlasnik hoće, a vlasnik rijetko hoće". Maja žali za bazenom i za prijateljicama, koje dolaze rjeđe nego što su obećale. "Ali", dodaje, "ne žalim za onim što sam mislila da ću najviše žaliti — za gradom. Grad je ostao gdje je bio. Mi smo se pomaknuli."',
        en: 'In March Maja and Tomislav marked a year. The roof holds, the water runs, the internet works, the walnut tree has borne fruit for the first time. I ask whether they have regrets. Tomislav thinks for a long time and then says he regrets two things: the cinema, and not being able to walk to a beer in the evening, "because the café is open when the owner wants, and the owner rarely wants". Maja misses the swimming pool and her friends, who come less often than they promised. "But," she adds, "I don\'t regret the thing I thought I\'d regret most — the city. The city stayed where it was. We moved."',
      },
      {
        hr: 'Na kraju razgovora Maja pokazuje bilježnicu u kojoj je od prvog dana bilježila troškove, jer joj je, kaže, u početku trebao dokaz da su donijeli razumnu odluku. Nakon godine prestala je zapisivati. "Shvatila sam da računam krivu stvar", kaže. "Kuća je jeftina, život nije. Ali život nije bio jeftin ni u Zagrebu — samo smo tamo plaćali drugima, a ovdje plaćamo sebi." Zatim ustaje, jer je četiri i pol, a u pola pet dolazi susjeda s jajima, i to se, kaže, ne propušta.',
        en: 'At the end of the conversation Maja shows me a notebook in which from the first day she recorded expenses, because, she says, at the start she needed proof that they had made a sensible decision. After a year she stopped writing. "I realised I was counting the wrong thing," she says. "The house is cheap, life isn\'t. But life wasn\'t cheap in Zagreb either — only there we paid others, and here we pay ourselves." Then she gets up, because it is half past four, and at half past four the neighbour comes with eggs, and that, she says, is not to be missed.',
      },
    ],
    vocabulary: [
      {
        hr: 'poticaj za naseljavanje',
        en: 'settlement grant',
        ex: 'Kuću su kupili poticajem za naseljavanje.',
      },
      {
        hr: 'kombinirani razred',
        en: 'combined (mixed-age) class',
        ex: 'Škola ima dva kombinirana razreda.',
      },
      { hr: 'na daljinu', en: 'remotely', ex: 'Tomislav radi na daljinu.' },
      { hr: 'bunar', en: 'well', ex: 'Bunar je bio zagađen.' },
      {
        hr: 'priključak',
        en: 'connection (utilities)',
        ex: 'Priključak na vodovod trebalo je čekati.',
      },
      { hr: 'ušteđevina', en: 'savings', ex: 'Sve ostalo platili su iz ušteđevine.' },
      { hr: 'ložiti', en: 'to stoke, light (a stove)', ex: 'Netko je svaki dan ložio peć.' },
      { hr: 'do umora', en: 'to the point of weariness', ex: 'Djeca se poznaju do umora.' },
      { hr: 'istek', en: 'expiry', ex: 'Vratili su se prije isteka obveze od pet godina.' },
      { hr: 'idila', en: 'idyll', ex: 'Ne prodajemo idilu, prodajemo mogućnost.' },
    ],
    quiz: [
      {
        q: 'Što je selidbu obitelji učinilo mogućom?',
        qEn: "What made the family's move possible?",
        opts: [
          'Majina nova plaća',
          'To što Tomislav radi na daljinu',
          'Blizina Zagreba',
          'Besplatna kuća',
        ],
        correct: 1,
      },
      {
        q: 'Što Tomislav poručuje onima koji misle da je selo jeftino?',
        qEn: 'What does Tomislav tell people who think the countryside is cheap?',
        opts: [
          'Da imaju pravo',
          'Da poticaj pokriva sve troškove',
          'Da računaju dvaput, jer je kuća jeftina, a sve ostalo plaćeno iz ušteđevine',
          'Da se sele u grad',
        ],
        correct: 2,
      },
      {
        q: 'Kako Maja opisuje razliku između privatnosti i anonimnosti?',
        qEn: 'How does Maja describe the difference between privacy and anonymity?',
        opts: [
          'U selu ima oboje',
          'U selu nema privatnosti ni anonimnosti, a gradska anonimnost bila je zapravo usamljenost',
          'U gradu je imala više prijatelja',
          'Anonimnost joj u selu najviše nedostaje',
        ],
        correct: 1,
      },
      {
        q: 'Koju "drugu statistiku" programa tekst navodi?',
        qEn: 'Which "other statistic" of the programme does the text cite?',
        opts: [
          'Da se sve obitelji vraćaju u grad',
          'Da se gotovo četvrtina obitelji vratila prije isteka obveze i vratila poticaj',
          'Da program nema dovoljno prijavljenih',
          'Da su sve škole u programu zatvorene',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je Maja prestala zapisivati troškove?',
        qEn: 'Why did Maja stop recording expenses?',
        opts: [
          'Jer je izgubila bilježnicu',
          'Jer je shvatila da računa krivu stvar — život nije bio jeftin ni u gradu',
          'Jer su troškovi postali preveliki',
          'Jer joj je Tomislav preuzeo računovodstvo',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_long_vrt',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🥕',
    title: 'Dvorište koje je postalo vrt',
    titleEn: 'The Yard That Became a Garden',
    duration: 13,
    focus: 'Community & neighbours • Impersonal constructions • Describing change over time',
    intro:
      'A rubbish-strewn courtyard between four blocks of flats in Novi Zagreb becomes a community garden. A feature on the neighbours who did it, the rules they wrote, and the tomato that started a dispute.',
    paragraphs: [
      {
        hr: 'Prije tri godine dvorište između četiri zgrade u Novom Zagrebu bilo je ono što se u urbanizmu uljudno zove "neuređena zelena površina", a u susjedstvu nešto grublje. Trava se kosila dvaput godišnje, klupe su bile polomljene, a u kutu je stajao kontejner u koji su ljudi iz cijelog kvarta odlagali ono što ne stane u obični. Danas na istom mjestu raste četrdeset i osam povrtnih gredica, tri stabla jabuke, jedna klupa koju nitko nije polomio i natpis koji glasi: "Vrt susjeda. Uzmi što ti treba, ostavi što možeš."',
        en: 'Three years ago the courtyard between four blocks in Novi Zagreb was what urban planning politely calls "an unmaintained green area", and the neighbourhood called something ruder. The grass was cut twice a year, the benches were broken, and in the corner stood a container into which people from the whole district dumped whatever did not fit in the ordinary one. Today on the same spot grow forty-eight vegetable beds, three apple trees, one bench nobody has broken and a sign that reads: "Neighbours\' garden. Take what you need, leave what you can."',
      },
      {
        hr: 'Sve je počelo s jednom ženom i jednim paketićem sjemena rajčice. Ljubica, umirovljena medicinska sestra s petog kata, prvog je proljeća pandemije, kad se nije smjelo nikamo, iskopala metar kvadratni ispod svog prozora i posadila rajčice, "da imam što gledati". Susjed s trećeg kata, inženjer koji je ostao bez posla, ponudio joj je da napravi drvenu ogradicu. Susjeda s prvog donijela je sadnice paprike. Do ljeta su ih bilo šestero, a dvorište je imalo dvanaest gredica i prvu svađu — o tome tko je pobrao Ljubičinu rajčicu.',
        en: 'It all began with one woman and one packet of tomato seeds. Ljubica, a retired nurse from the fifth floor, in the first spring of the pandemic, when nobody was allowed to go anywhere, dug up a square metre under her window and planted tomatoes, "so I\'d have something to look at". The neighbour from the third floor, an engineer who had lost his job, offered to build her a little wooden fence. The neighbour from the first floor brought pepper seedlings. By summer there were six of them, and the courtyard had twelve beds and its first quarrel — about who had picked Ljubica\'s tomato.',
      },
      {
        hr: 'Svađa se pokazala korisnom, jer je iz nje nastao pravilnik. Napisao ga je inženjer, na jednoj stranici, i visi na oglasnoj ploči u ulazu svake zgrade: svaka gredica ima svog "domaćina", koji odlučuje što se sadi i tko bere; zajedničke su samo voćke i začinsko bilje; voda se plaća iz zajedničke kase u koju svatko daje pet eura mjesečno; tko ne obrađuje gredicu dva mjeseca, gubi je. Posljednje je pravilo, kaže Ljubica, "najvažnije i najbolnije", jer je zbog njega dvoje ljudi prestalo dolaziti. "Ali bez njega bi pola gredica bilo korov, a onda bi svi prestali dolaziti."',
        en: 'The quarrel proved useful, because out of it came the rulebook. The engineer wrote it, on one page, and it hangs on the notice board in the entrance of each block: every bed has its "host", who decides what is planted and who picks; only the fruit trees and herbs are shared; water is paid for from a common fund into which everyone puts five euros a month; whoever does not tend their bed for two months loses it. The last rule, says Ljubica, is "the most important and the most painful", because two people stopped coming because of it. "But without it half the beds would be weeds, and then everyone would stop coming."',
      },
      {
        hr: 'Grad je za vrt saznao tek druge godine, kad je netko prijavio "nelegalnu gradnju" — misleći na drvene ogradice i spremište za alat veličine ormara. Inspektor je došao, pogledao, pojeo jednu rajčicu i otišao. Nekoliko tjedana kasnije stigao je dopis iz gradskog ureda u kojem je stajalo da je zemljište u vlasništvu Grada i da ga stanari "koriste bez pravne osnove", ali i da Grad "pozdravlja inicijativu" i predlaže potpisivanje ugovora o korištenju na pet godina. "Trebalo nam je pola godine da shvatimo da to znači da smijemo", kaže inženjer.',
        en: 'The city learned of the garden only in the second year, when someone reported "illegal construction" — meaning the little wooden fences and a tool shed the size of a wardrobe. The inspector came, looked, ate a tomato and left. A few weeks later a letter arrived from the city office stating that the land was owned by the City and that the residents were "using it without legal basis", but also that the City "welcomes the initiative" and proposes signing a five-year use agreement. "It took us six months to understand that that meant we were allowed to," says the engineer.',
      },
      {
        hr: 'Danas u vrtu radi četrdesetak ljudi iz sve četiri zgrade, u dobi od sedam do osamdeset i šest godina. Najstarija je gospođa Kata, koja više ne može kopati, ali svako jutro sjedi na klupi i "nadgleda". Najmlađi su blizanci s drugog kata, koji imaju svoju gredicu s jagodama i strogo pravilo da se jagode ne smiju jesti prije nego što ih pokažu mami. Između njih su obitelji, samci, jedan student koji je vrt otkrio tražeći mjesto za učenje i jedan par koji se, prema susjedskim tračevima, upoznao nad gredicom s tikvicama.',
        en: 'Today some forty people from all four blocks work in the garden, aged from seven to eighty-six. The oldest is Mrs Kata, who can no longer dig but sits on the bench every morning and "supervises". The youngest are the twins from the second floor, who have their own strawberry bed and a strict rule that the strawberries may not be eaten before being shown to their mother. In between are families, single people, a student who discovered the garden while looking for a place to study, and a couple who, according to neighbourhood gossip, met over a bed of courgettes.',
      },
      {
        hr: 'Sociolozi bi to nazvali društvenim kapitalom; susjedi to zovu "poznavanjem". Prije vrta, kaže Ljubica, u zgradi s pedeset stanova poznavala je po imenu možda deset ljudi. Danas poznaje sve, uključujući njihove alergije, radno vrijeme i mišljenje o gnojivu. Kad je prošle zime jedan stariji susjed pao u stanu i dva dana nije izlazio, primijetili su to jer nije došao provjeriti luk. "U gradu se umire tako da nitko ne primijeti", kaže. "Ovdje bi netko primijetio. To nije mala stvar."',
        en: 'Sociologists would call it social capital; the neighbours call it "knowing each other". Before the garden, says Ljubica, in a block of fifty flats she knew perhaps ten people by name. Today she knows everyone, including their allergies, working hours and opinions on fertiliser. When an elderly neighbour fell in his flat last winter and did not come out for two days, they noticed because he had not come to check on the onions. "In the city people die without anyone noticing," she says. "Here someone would notice. That is not a small thing."',
      },
      {
        hr: 'Vrt je promijenio i odnos prema samom dvorištu. Kontejner u kutu, u koji se godinama bacalo sve, nestao je — ne zato što ga je netko uklonio, nego zato što je nakon nekoliko mjeseci ostao prazan pa ga je komunalno poduzeće samo odvezlo. Klupa koju nitko nije polomio nije od tvrđeg drva nego prijašnje, kaže inženjer, "samo je sada nečija". Djeca iz zgrada, koja su se prije igrala na parkiralištu, sad se igraju među gredicama, s pravilom da se po gredicama ne trči, koje krše otprilike jednako često koliko i odrasli pravilo o pet eura.',
        en: 'The garden has changed the relationship to the courtyard itself, too. The container in the corner, into which everything was thrown for years, has disappeared — not because someone removed it, but because after a few months it stayed empty and the municipal company simply took it away. The bench nobody has broken is not made of harder wood than the previous one, says the engineer, "it is just somebody\'s now". The children from the blocks, who used to play in the car park, now play among the beds, with a rule that you do not run across the beds, which they break about as often as the adults break the rule about five euros.',
      },
      {
        hr: 'Nisu, dakako, svi oduševljeni. Dio stanara smatra da vrt "izgleda neuredno", da privlači ptice i da bi na tom mjestu trebalo biti parkirališta, kojega u kvartu kronično nedostaje. Na sastanku suvlasnika prošle jeseni prijedlog da se vrt zamijeni parkiralištem dobio je trećinu glasova — što je, ovisno o tome tko računa, ili dokaz da vrt ima čvrstu većinu ili upozorenje da je ta većina krhka. "Rajčica ne može konkurirati automobilu", kaže inženjer. "Ali može konkurirati samoći. To je naš argument."',
        en: 'Not everyone is delighted, of course. Some residents think the garden "looks untidy", that it attracts birds, and that the space should be a car park, which the district chronically lacks. At the co-owners\' meeting last autumn the proposal to replace the garden with a car park got a third of the votes — which, depending on who is counting, is either proof that the garden has a solid majority or a warning that the majority is fragile. "A tomato can\'t compete with a car," says the engineer. "But it can compete with loneliness. That is our argument."',
      },
      {
        hr: 'Ugovor s Gradom istječe za dvije godine i nitko ne zna što će biti poslije. Ljubica kaže da o tome ne razmišlja: "Rajčice ne znaju za ugovore." Inženjer, praktičniji, već sastavlja prijavu za produljenje i traži druge vrtove u gradu s kojima bi se mogli udružiti — ima ih, kaže, već sedam, i svi imaju isti problem: postoje iz dobre volje, a dobra volja nije pravna kategorija. U međuvremenu, na gredici ispod Ljubičina prozora, na istom kvadratnom metru gdje je sve počelo, raste treća generacija rajčica. Natpis na ogradici kaže: "Ne brati. Ovo je spomenik."',
        en: 'The agreement with the City expires in two years and nobody knows what will happen afterwards. Ljubica says she does not think about it: "Tomatoes don\'t know about contracts." The engineer, more practical, is already drafting the application for an extension and looking for other gardens in the city to join forces with — there are, he says, seven already, and they all have the same problem: they exist out of goodwill, and goodwill is not a legal category. Meanwhile, in the bed under Ljubica\'s window, on the same square metre where it all began, the third generation of tomatoes is growing. The sign on the little fence says: "Do not pick. This is a monument."',
      },
    ],
    vocabulary: [
      { hr: 'gredica', en: 'garden bed', ex: 'U dvorištu raste četrdeset i osam gredica.' },
      { hr: 'sadnica', en: 'seedling', ex: 'Susjeda je donijela sadnice paprike.' },
      { hr: 'pravilnik', en: 'rulebook, set of rules', ex: 'Iz svađe je nastao pravilnik.' },
      { hr: 'oglasna ploča', en: 'notice board', ex: 'Pravilnik visi na oglasnoj ploči.' },
      { hr: 'korov', en: 'weeds', ex: 'Bez pravila pola gredica bilo bi korov.' },
      {
        hr: 'pravna osnova',
        en: 'legal basis',
        ex: 'Stanari koriste zemljište bez pravne osnove.',
      },
      { hr: 'dopis', en: 'official letter, memo', ex: 'Stigao je dopis iz gradskog ureda.' },
      { hr: 'nadgledati', en: 'to supervise, oversee', ex: 'Gospođa Kata svako jutro nadgleda.' },
      {
        hr: 'suvlasnik',
        en: 'co-owner',
        ex: 'Na sastanku suvlasnika glasovalo se o parkiralištu.',
      },
      { hr: 'krhak', en: 'fragile', ex: 'Većina je krhka.' },
    ],
    quiz: [
      {
        q: 'Kako je vrt počeo?',
        qEn: 'How did the garden begin?',
        opts: [
          'Grad je uredio dvorište',
          'Umirovljena medicinska sestra posadila je rajčice pod prozorom tijekom pandemije',
          'Inženjer je kupio sjeme za cijelu zgradu',
          'Škola je organizirala projekt',
        ],
        correct: 1,
      },
      {
        q: 'Koje pravilo Ljubica naziva "najvažnijim i najbolnijim"?',
        qEn: 'Which rule does Ljubica call "the most important and the most painful"?',
        opts: [
          'Da se voda plaća iz zajedničke kase',
          'Da su voćke zajedničke',
          'Da tko dva mjeseca ne obrađuje gredicu, gubi je',
          'Da svaka gredica ima domaćina',
        ],
        correct: 2,
      },
      {
        q: 'Kako je Grad reagirao kad je saznao za vrt?',
        qEn: 'How did the City react when it learned of the garden?',
        opts: [
          'Naložio je rušenje ogradica',
          'Utvrdio je da nema pravne osnove, ali pozdravio inicijativu i ponudio ugovor o korištenju',
          'Kupio je zemljište od stanara',
          'Pretvorio je vrt u parkiralište',
        ],
        correct: 1,
      },
      {
        q: 'Kako su susjedi primijetili da je stariji susjed pao?',
        qEn: 'How did the neighbours notice that the elderly neighbour had fallen?',
        opts: [
          'Čuli su buku iz stana',
          'Nije došao provjeriti luk',
          'Zvala ih je njegova obitelj',
          'Vidjeli su ga kroz prozor',
        ],
        correct: 1,
      },
      {
        q: 'Što inženjer misli kad kaže da rajčica "može konkurirati samoći"?',
        qEn: 'What does the engineer mean by saying a tomato "can compete with loneliness"?',
        opts: [
          'Da je vrt jeftiniji od parkirališta',
          'Da vrt daje ono što auto ne može: povezanost među susjedima',
          'Da rajčice rastu bolje kad su same',
          'Da parkiralište privlači više ljudi',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_b2_long_kino',
    level: 'B2',
    kind: 'feature',
    levelColor: '#6b21a8',
    levelBg: '#f3e8ff',
    icon: '🎬',
    title: 'Posljednja kinodvorana',
    titleEn: 'The Last Cinema',
    duration: 13,
    focus: 'Culture & small towns • Past habitual • Interviews and counter-arguments',
    intro:
      "The only cinema in a town of eight thousand is about to close — or be saved by a volunteers' association. A feature on what a screening room means when everyone has a screen at home.",
    paragraphs: [
      {
        hr: 'Kino "Sloboda" ima dvjesto sjedala, od kojih sto sedamdeset radi, platno iz 1978. i projektor iz 2012., kupljen kad su se filmovi prestali distribuirati na vrpci. Nalazi se u središtu grada od osam tisuća stanovnika, između pošte i pekarnice, i tri je generacije bilo mjesto na koje se išlo — na prvi spoj, na školsku predstavu, na nedjeljnu matineju s djecom. Od siječnja ove godine zatvoreno je, "privremeno", što u malim gradovima obično znači zauvijek.',
        en: 'The "Sloboda" cinema has two hundred seats, of which a hundred and seventy work, a screen from 1978 and a projector from 2012, bought when films stopped being distributed on reels. It stands in the centre of a town of eight thousand, between the post office and the bakery, and for three generations it was the place one went — on a first date, to the school play, to the Sunday matinée with the children. Since January this year it has been closed, "temporarily", which in small towns usually means for ever.',
      },
      {
        hr: 'Razlog zatvaranja nije tajna i nije jedan. Grad, koji je vlasnik zgrade, više nije mogao pokrivati gubitak od tridesetak tisuća eura godišnje. Publika se smanjivala: s prosječno šezdeset gledatelja po projekciji prije deset godina na petnaestak lani. Distributeri filmova sve su češće tražili da se novi naslovi prikazuju u više termina tjedno, što kino s jednim zaposlenim nije moglo. A najveći konkurent nije bilo drugo kino — najbliže je pedeset kilometara daleko — nego dnevna soba: prema anketi, tri četvrtine kućanstava u gradu plaća barem jednu uslugu za gledanje filmova na zahtjev.',
        en: 'The reason for closing is no secret and is not a single one. The town, which owns the building, could no longer cover a loss of about thirty thousand euros a year. Audiences had been shrinking: from an average of sixty viewers per screening ten years ago to about fifteen last year. Film distributors increasingly demanded that new titles be shown at several times a week, which a cinema with one employee could not do. And the biggest competitor was not another cinema — the nearest is fifty kilometres away — but the living room: according to a survey, three quarters of households in the town pay for at least one on-demand film service.',
      },
      {
        hr: 'Kad je odluka objavljena, dogodilo se nešto što gradonačelnik, po vlastitom priznanju, nije očekivao: ljudi su se naljutili. Ne oni koji su u kino išli — njih je, kako pokazuju brojke, bilo malo — nego oni koji nisu. "Došli su mi ljudi koji u kinu nisu bili pet godina i pitali kako smo se usudili", kaže. "Rekao sam im: da ste dolazili, ne bismo se morali usuditi." Rečenica je završila na društvenim mrežama i podijelila grad na one koji su u njoj vidjeli drskost i one koji su u njoj vidjeli istinu.',
        en: 'When the decision was announced, something happened that the mayor, by his own admission, had not expected: people got angry. Not the ones who went to the cinema — of those, as the figures show, there were few — but the ones who did not. "People came to me who hadn\'t been to the cinema in five years and asked how we dared," he says. "I told them: if you had come, we wouldn\'t have had to dare." The sentence ended up on social media and divided the town into those who saw arrogance in it and those who saw truth.',
      },
      {
        hr: 'Iz te je ljutnje nastala udruga. Osnovalo ju je dvadesetak ljudi — učiteljica, dva umirovljenika, vlasnica knjižare, nekoliko studenata koji su se vratili na ljeto — s idejom da kino preuzmu kao volonteri: grad bi i dalje plaćao struju i održavanje zgrade, a udruga bi vodila program, prodavala karte i radila na blagajni. Model postoji u desecima europskih gradića, i podaci pokazuju da tako vođena kina preživljavaju bolje od komercijalnih, jer ne moraju zarađivati, nego samo ne gubiti.',
        en: 'Out of that anger an association was born. About twenty people founded it — a teacher, two pensioners, the owner of the bookshop, a few students home for the summer — with the idea of taking over the cinema as volunteers: the town would still pay for electricity and building maintenance, and the association would run the programme, sell tickets and staff the box office. The model exists in dozens of small European towns, and the data show that cinemas run this way survive better than commercial ones, because they do not have to make money, only not lose it.',
      },
      {
        hr: 'Prvi je test bio u svibnju: probna projekcija, jedan stari hrvatski film, ulaz besplatan, kokice po dva eura. Došlo je sto četrdeset ljudi. "Pola ih je došlo iz nostalgije, pola iz znatiželje, a nekoliko iz prkosa", kaže učiteljica koja je stajala na blagajni. Druga projekcija, dva tjedna kasnije, s novim filmom i kartom od četiri eura, privukla je sedamdesetero. Treća pedesetero. "To je brojka s kojom se može živjeti", kaže. "Nije ona koju smo sanjali. Ali s petnaest smo bili mrtvi, a s pedeset dišemo."',
        en: 'The first test was in May: a trial screening, an old Croatian film, free entry, popcorn at two euros. A hundred and forty people came. "Half came out of nostalgia, half out of curiosity, and a few out of defiance," says the teacher who staffed the box office. The second screening, two weeks later, with a new film and a four-euro ticket, drew seventy. The third, fifty. "That is a figure one can live with," she says. "It isn\'t the one we dreamed of. But at fifteen we were dead, and at fifty we breathe."',
      },
      {
        hr: 'Novac ostaje pitanje na koje udruga još nema potpun odgovor. Karte od četiri eura pokrivaju najam filmova i kokice, ali ne i popravak sjedala, novi projektor koji će za nekoliko godina biti nužan ni grijanje, koje zimi stoji više od svih karata zajedno. Udruga se prijavila na natječaj ministarstva za male kinoprikazivače, tražila sponzore među lokalnim tvrtkama i pokrenula akciju "posvoji sjedalo" — za pedeset eura na naslon se stavlja pločica s imenom darovatelja. Do rujna je posvojeno šezdeset i dva sjedala, uključujući tri s natpisima u spomen na ljude koji su u tom kinu radili.',
        en: 'Money remains a question to which the association does not yet have a full answer. Four-euro tickets cover film hire and popcorn, but not seat repairs, the new projector that will be necessary in a few years, or heating, which in winter costs more than all the tickets together. The association has applied to a ministry call for small exhibitors, sought sponsors among local firms and launched an "adopt a seat" drive — for fifty euros a plaque with the donor\'s name goes on the backrest. By September sixty-two seats had been adopted, including three with inscriptions in memory of people who worked in that cinema.',
      },
      {
        hr: 'Pločice su, pokazalo se, učinile više od novca: ljudi koji su platili sjedalo počeli su dolaziti da ga vide, a onda i da na njemu sjede. "Nitko ne želi da njegovo sjedalo bude prazno", kaže vlasnica knjižare, koja je akciju predložila. "To je najjeftinija marketinška kampanja u povijesti ovog grada."',
        en: 'The plaques, it turned out, did more than the money: the people who paid for a seat began coming to see it, and then to sit in it. "Nobody wants their seat to be empty," says the bookshop owner, who proposed the drive. "It is the cheapest marketing campaign in the history of this town."',
      },
      {
        hr: 'Skeptika ne nedostaje, i nisu svi zlonamjerni. Vlasnik kafića preko puta, koji je kinu godinama dobavljao kokice, pita što će biti kad studenti u jesen odu, a umirovljenici se umore. Ravnatelj gradske knjižnice, koja se također bori za publiku, upozorava da volonterski entuzijazam traje u prosjeku dvije godine, "poslije čega ostanu tri osobe i sve padne na njih". A jedan gradski vijećnik, koji je glasovao za zatvaranje, kaže da je udruga "dokaz da je grad bio u pravu": kino, tvrdi, nije zatvoreno zato što nema publike, nego zato što je publika mislila da će ga netko drugi održati na životu.',
        en: 'There is no shortage of sceptics, and not all of them are malicious. The owner of the café opposite, who supplied the cinema with popcorn for years, asks what will happen when the students leave in the autumn and the pensioners tire. The director of the town library, which is also fighting for an audience, warns that volunteer enthusiasm lasts on average two years, "after which three people remain and everything falls on them". And one town councillor, who voted to close, says the association is "proof that the town was right": the cinema, he argues, did not close because there was no audience, but because the audience thought someone else would keep it alive.',
      },
      {
        hr: 'Udruga na to odgovara programom, ne polemikom. Jesenski raspored uključuje filmski klub za srednjoškolce, koji sami biraju naslove i vode raspravu poslije projekcije; jutarnje projekcije za umirovljenike s kavom u cijeni karte; mjesečnu večer dokumentarnog filma s gostom; i, jedanput mjesečno, "kino na zahtjev" — film koji izabere publika glasovanjem na oglasnoj ploči pred kinom. Prve je večeri pobijedio film iz 1994. koji je pola grada vidjelo na prvom spoju. "To nije nostalgija", kaže učiteljica. "To je zajednica koja se sjeća da je zajednica."',
        en: 'The association answers with a programme, not a polemic. The autumn schedule includes a film club for secondary-school pupils, who choose the titles themselves and lead the discussion after the screening; morning screenings for pensioners with coffee included in the ticket; a monthly documentary evening with a guest; and, once a month, "cinema on demand" — a film chosen by the audience by voting on the notice board in front of the cinema. The first evening was won by a film from 1994 which half the town had seen on a first date. "That isn\'t nostalgia," says the teacher. "That is a community remembering that it is a community."',
      },
      {
        hr: 'Hoće li "Sloboda" preživjeti, znat će se za dvije godine, kad istekne ugovor s gradom i kad se, prema ravnateljevu proračunu, istroši prvi entuzijazam. Do tada, svake subote u osam, netko od dvadesetak volontera otključava vrata između pošte i pekarnice, pali projektor iz 2012. i čeka. Ponekad dođe pedesetero. Ponekad dvadeset. Jedne kišne večeri u srpnju došlo je četvero, i film se svejedno prikazao, jer, kako je rekao umirovljenik na blagajni, "kino koje ne prikaže film jer je malo ljudi nije kino nego skladište".',
        en: 'Whether "Sloboda" will survive will be known in two years, when the agreement with the town expires and when, by the library director\'s calculation, the first enthusiasm wears out. Until then, every Saturday at eight, one of the twenty-odd volunteers unlocks the door between the post office and the bakery, switches on the 2012 projector and waits. Sometimes fifty come. Sometimes twenty. One rainy evening in July four came, and the film was shown anyway, because, as the pensioner at the box office said, "a cinema that doesn\'t show a film because there are few people isn\'t a cinema but a warehouse".',
      },
    ],
    vocabulary: [
      {
        hr: 'kinodvorana',
        en: 'cinema hall',
        ex: 'Posljednja kinodvorana u gradu zatvorena je u siječnju.',
      },
      { hr: 'platno', en: 'screen (cinema)', ex: 'Platno je iz 1978. godine.' },
      { hr: 'matineja', en: 'matinée', ex: 'Nedjeljom se išlo na matineju s djecom.' },
      {
        hr: 'na zahtjev',
        en: 'on demand',
        ex: 'Tri četvrtine kućanstava plaća usluge gledanja filmova na zahtjev.',
      },
      { hr: 'usuditi se', en: 'to dare', ex: 'Pitali su kako smo se usudili zatvoriti kino.' },
      { hr: 'drskost', en: 'arrogance, impertinence', ex: 'Jedni su u rečenici vidjeli drskost.' },
      { hr: 'blagajna', en: 'box office, till', ex: 'Učiteljica je stajala na blagajni.' },
      { hr: 'prkos', en: 'defiance', ex: 'Nekoliko ih je došlo iz prkosa.' },
      { hr: 'zlonamjeran', en: 'malicious', ex: 'Skeptici nisu svi zlonamjerni.' },
      {
        hr: 'istrošiti se',
        en: 'to wear out, be used up',
        ex: 'Prvi entuzijazam istroši se za dvije godine.',
      },
    ],
    quiz: [
      {
        q: 'Koji je, prema tekstu, najveći konkurent kina "Sloboda"?',
        qEn: 'According to the text, what is the "Sloboda" cinema\'s biggest competitor?',
        opts: [
          'Kino u susjednom gradu',
          'Dnevna soba, odnosno usluge filmova na zahtjev',
          'Gradska knjižnica',
          'Kafić preko puta',
        ],
        correct: 1,
      },
      {
        q: 'Tko se naljutio kad je zatvaranje objavljeno?',
        qEn: 'Who got angry when the closure was announced?',
        opts: [
          'Redoviti posjetitelji kina',
          'Uglavnom ljudi koji u kino godinama nisu išli',
          'Distributeri filmova',
          'Zaposlenici kina',
        ],
        correct: 1,
      },
      {
        q: 'Kako funkcionira volonterski model koji udruga predlaže?',
        qEn: 'How does the volunteer model proposed by the association work?',
        opts: [
          'Udruga kupuje zgradu od grada',
          'Grad plaća struju i održavanje, a udruga vodi program i blagajnu',
          'Grad zapošljava volontere',
          'Distributeri financiraju program',
        ],
        correct: 1,
      },
      {
        q: 'Zašto učiteljica kaže da je pedesetero gledatelja "brojka s kojom se može živjeti"?',
        qEn: 'Why does the teacher say fifty viewers is "a figure one can live with"?',
        opts: [
          'Jer je to više nego prije zatvaranja, kad je kino s petnaest bilo "mrtvo"',
          'Jer je to broj koji su sanjali',
          'Jer je kino tada puno',
          'Jer grad tada plaća više',
        ],
        correct: 0,
      },
      {
        q: 'Što umirovljenik na blagajni misli rečenicom o "skladištu"?',
        qEn: 'What does the pensioner at the box office mean by his sentence about a "warehouse"?',
        opts: [
          'Da kino treba pretvoriti u skladište',
          'Da se film prikazuje bez obzira na broj gledatelja, jer to kino čini kinom',
          'Da je premalo mjesta za kokice',
          'Da kino zarađuje kao skladište',
        ],
        correct: 1,
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // C1 — OPINION & ANALYSIS (a thesis, evidence, a counter-argument, a stance)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'gs_c1_long_most',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🌉',
    title: 'Treba li nam još jedan most?',
    titleEn: 'Do We Need Another Bridge?',
    duration: 15,
    focus: 'Argumentative essay • Concession & rebuttal • Infrastructure and environment',
    intro:
      'An opinion piece on a proposed bridge to an Adriatic island: why the arguments for it are stronger than its opponents admit, why the arguments against are stronger than its supporters admit, and where the author lands.',
    paragraphs: [
      {
        hr: 'Svakih nekoliko godina u Hrvatskoj se otvori rasprava o mostu. Ne o nekom određenom — mostovi se mijenjaju — nego o mostu kao ideji: da se otok, dolina ili grad poveže s ostatkom zemlje trajno, betonom, bez ovisnosti o vremenu, trajektu i volji brodara. Ovoga puta riječ je o otoku s pet tisuća stanovnika, tri kilometra od obale, čiji je trajekt zimi otkazan prosječno devet dana mjesečno. Prijedlog je star trideset godina; novost je da za njega ovaj put ima novca. I upravo zato rasprava više nije o tome je li most moguć, nego je li poželjan — a to je teže pitanje.',
        en: 'Every few years a debate about a bridge opens up in Croatia. Not about a particular one — the bridges change — but about the bridge as an idea: to connect an island, a valley or a town with the rest of the country permanently, in concrete, without depending on weather, ferries and the will of shipping companies. This time it concerns an island with five thousand inhabitants, three kilometres from the coast, whose ferry in winter is cancelled on average nine days a month. The proposal is thirty years old; what is new is that this time there is money for it. And precisely for that reason the debate is no longer about whether the bridge is possible, but whether it is desirable — and that is the harder question.',
      },
      {
        hr: 'Počnimo s onim što protivnici mosta ne vole priznati: argumenti za most su ozbiljni i nisu samo ekonomski. Devet dana bez trajekta mjesečno znači devet dana bez hitne pomoći koja stiže na vrijeme, bez učitelja koji putuju s obale, bez svježe robe u jedinoj trgovini. Stanovništvo otoka u trideset se godina smanjilo za četvrtinu, a prosječna dob prelazi pedeset. Ljudi ne odlaze zato što ne vole otok; odlaze zato što na njemu ne mogu planirati. Most ne rješava sve, ali rješava ono najosnovnije — pretvara otok iz mjesta na koje se dolazi kad se može u mjesto na koje se dolazi kad se hoće.',
        en: "Let us begin with what the bridge's opponents do not like to admit: the arguments for the bridge are serious and not only economic. Nine days a month without a ferry means nine days without an ambulance that arrives in time, without teachers who commute from the coast, without fresh goods in the only shop. The island's population has fallen by a quarter in thirty years, and the average age is over fifty. People are not leaving because they do not love the island; they are leaving because on it they cannot plan. A bridge does not solve everything, but it solves the most basic thing — it turns the island from a place one reaches when one can into a place one reaches when one wants to.",
      },
      {
        hr: 'Sada ono što zagovornici ne vole priznati: svaki most u Hrvatskoj koji je otok povezao s kopnom promijenio je taj otok brže i dublje nego što je itko predviđao, i ne uvijek nabolje. Podaci su dostupni i nisu dvosmisleni. Na otocima s mostom broj apartmana po stanovniku dvostruko je veći nego na otocima bez mosta; cijene zemljišta porasle su tri do pet puta u desetljeću nakon otvaranja; udio stalnog stanovništva u ukupnom broju kuća pao je ispod polovice. Most ne dovodi samo hitnu pomoć i učitelje. Dovodi i investitore, vikendaše, promet i sve ono što otok čini manje otokom. Tko tvrdi da se to može izbjeći, treba pokazati gdje se izbjeglo.',
        en: 'Now what the advocates do not like to admit: every bridge in Croatia that has connected an island to the mainland has changed that island faster and more deeply than anyone predicted, and not always for the better. The data are available and not ambiguous. On islands with a bridge the number of apartments per inhabitant is twice as high as on islands without one; land prices rose three to five times in the decade after opening; the share of permanent residents in the total number of houses fell below half. A bridge does not bring only ambulances and teachers. It also brings investors, weekenders, traffic and everything that makes an island less of an island. Whoever claims this can be avoided should show where it has been avoided.',
      },
      {
        hr: 'Protivnici tu obično stanu i zaključe da je most, dakle, pogreška. No taj zaključak prešućuje jednu neugodnu činjenicu: otok bez mosta također se mijenja, samo u suprotnom smjeru. Ako je otok s mostom u opasnosti da postane predgrađe, otok bez mosta u opasnosti je da postane muzej — lijep, autentičan i prazan. Između tih dviju sudbina nema neutralne opcije zvane "ostaviti kako jest", jer "kako jest" upravo nestaje. Rasprava koja se vodi kao izbor između promjene i očuvanja zapravo je izbor između dviju promjena, od kojih je jedna vidljiva, a druga tiha.',
        en: 'Opponents usually stop there and conclude that the bridge is therefore a mistake. But that conclusion passes over one uncomfortable fact: an island without a bridge also changes, only in the opposite direction. If an island with a bridge is in danger of becoming a suburb, an island without one is in danger of becoming a museum — beautiful, authentic and empty. Between these two fates there is no neutral option called "leave it as it is", because "as it is" is precisely what is disappearing. A debate conducted as a choice between change and preservation is really a choice between two changes, one of which is visible and the other silent.',
      },
      {
        hr: 'Ako je to točno — a mislim da jest — onda pravo pitanje nije most ili ne most, nego kakav most i s kojim pravilima. Ovdje se rasprava obično raspadne, jer pravila zvuče kao birokracija, a most kao vizija. No upravo su pravila ono što razlikuje otoke koji su most preživjeli od onih koje je most progutao. Nekoliko primjera iz drugih zemalja pokazuje što djeluje: cestarina za nerezidente, čiji prihod ide u otočni proračun; prostorni plan usvojen prije otvaranja mosta, a ne poslije, kad je zemljište već prodano; ograničenje broja turističkih ležajeva po stanovniku; i, možda najvažnije, pravo prvokupa otočne zajednice na zemljište koje se prodaje.',
        en: 'If that is right — and I think it is — then the real question is not bridge or no bridge, but what kind of bridge and with what rules. Here the debate usually falls apart, because rules sound like bureaucracy and a bridge sounds like a vision. Yet it is precisely the rules that distinguish the islands that survived a bridge from those a bridge swallowed. A few examples from other countries show what works: a toll for non-residents, whose revenue goes to the island budget; a spatial plan adopted before the bridge opens, not after, when the land has already been sold; a cap on tourist beds per inhabitant; and, perhaps most important, a right of first refusal for the island community on land that comes up for sale.',
      },
      {
        hr: 'Znam prigovor: to su lijepe zamisli koje se u Hrvatskoj ne provode. Prostorni planovi mijenjaju se pod pritiskom, cestarine se ukidaju pred izbore, a pravo prvokupa ostaje na papiru jer zajednica nema novca. Prigovor je opravdan i upravo zato treba biti izrečen prije, a ne poslije. Ako država nije spremna most pratiti pravilima koja će provoditi, onda ga ne bi trebala graditi — ne zato što most nije dobar, nego zato što bi most bez pravila bio poklon investitorima plaćen novcem svih nas, uz otočane kao usputnu štetu.',
        en: "I know the objection: these are fine ideas that are not implemented in Croatia. Spatial plans are changed under pressure, tolls are abolished before elections, and the right of first refusal stays on paper because the community has no money. The objection is justified, and precisely for that reason it should be voiced before, not after. If the state is not prepared to accompany the bridge with rules it will enforce, then it should not build it — not because the bridge is not good, but because a bridge without rules would be a gift to investors paid for with everyone's money, with the islanders as collateral damage.",
      },
      {
        hr: 'Postoji i argument koji se rijetko čuje, a zaslužuje mjesto: argument o tome tko odlučuje. O mostu se raspravlja u Zagrebu, u ministarstvima i na televiziji, a ljudi kojih se on najviše tiče — pet tisuća otočana — nisu upitani ni na jednom referendumu, ni na jednoj javnoj raspravi koja bi bila više od formalnosti. Anketa lokalnog portala pokazuje da su otočani podijeljeni gotovo napola, s jasnim uzorkom: mlađi i oni s djecom uglavnom su za, stariji i oni koji žive od turizma uglavnom protiv. To nije podjela koju se smije preskočiti. Most koji otok podijeli prije nego što ga poveže loš je most, kakav god bio.',
        en: 'There is also an argument rarely heard that deserves a place: the argument about who decides. The bridge is debated in Zagreb, in ministries and on television, while the people it concerns most — five thousand islanders — have not been asked in a single referendum, nor in a single public consultation that was more than a formality. A survey by the local news site shows the islanders divided almost in half, with a clear pattern: the younger and those with children are mostly for, the older and those who live off tourism mostly against. That is not a division that may be skipped over. A bridge that divides an island before it connects it is a bad bridge, whatever else it is.',
      },
      {
        hr: 'Gdje, dakle, stajem? Za most — uvjetno, i s uvjetima koji nisu ukras. Za most jer alternativa nije očuvanje nego polagano gašenje, i jer pet tisuća ljudi ima pravo na hitnu pomoć koja dolazi svaki dan, a ne kad more dopusti. Uvjetno jer most bez prostornog plana, bez cestarine i bez glasa otočana nije infrastruktura nego špekulacija s betonskim temeljima. I s uvjetima koji nisu ukras jer sam ih vidio kako nestaju čim se prva lopata zabije u zemlju. Ako ih država ne može jamčiti, neka to kaže otvoreno — a onda neka barem kupi drugi trajekt.',
        en: "So where do I stand? For the bridge — conditionally, and with conditions that are not decoration. For the bridge because the alternative is not preservation but slow extinction, and because five thousand people have a right to an ambulance that comes every day, not when the sea permits. Conditionally because a bridge without a spatial plan, without a toll and without the islanders' voice is not infrastructure but speculation with concrete foundations. And with conditions that are not decoration because I have seen them vanish the moment the first spade goes into the ground. If the state cannot guarantee them, let it say so openly — and then at least buy a second ferry.",
      },
      {
        hr: 'Na kraju, jedna napomena o jeziku rasprave. Zagovornici govore o "razvoju", protivnici o "očuvanju", i obje su riječi prazne dok se ne kaže razvoj čega i očuvanje za koga. Razvoj koji otok napuni apartmanima, a isprazni od ljudi nije razvoj. Očuvanje koje otok pretvori u kulisu za ljetne posjetitelje nije očuvanje. Most je samo beton; ono što će od njega nastati odlučuje se prije nego što se izlije, u rečenicama koje su dosadne, dugačke i presudne. Rasprava koju vodimo trebala bi biti o tim rečenicama. Umjesto toga, vodimo je o betonu.',
        en: 'Finally, a note on the language of the debate. Advocates speak of "development", opponents of "preservation", and both words are empty until one says development of what and preservation for whom. Development that fills an island with apartments and empties it of people is not development. Preservation that turns an island into a stage set for summer visitors is not preservation. A bridge is only concrete; what will come of it is decided before it is poured, in sentences that are dull, long and decisive. The debate we are having should be about those sentences. Instead, we are having it about concrete.',
      },
    ],
    vocabulary: [
      { hr: 'trajekt', en: 'ferry', ex: 'Trajekt je zimi otkazan devet dana mjesečno.' },
      { hr: 'brodar', en: 'shipping company / shipowner', ex: 'Otok ovisi o volji brodara.' },
      {
        hr: 'poželjan',
        en: 'desirable',
        ex: 'Pitanje nije je li most moguć, nego je li poželjan.',
      },
      { hr: 'zagovornik', en: 'advocate, proponent', ex: 'Zagovornici govore o razvoju.' },
      {
        hr: 'prešutjeti',
        en: 'to pass over in silence, omit',
        ex: 'Zaključak prešućuje jednu neugodnu činjenicu.',
      },
      { hr: 'cestarina', en: 'toll', ex: 'Cestarina za nerezidente išla bi u otočni proračun.' },
      {
        hr: 'prostorni plan',
        en: 'spatial (zoning) plan',
        ex: 'Prostorni plan treba usvojiti prije otvaranja mosta.',
      },
      {
        hr: 'pravo prvokupa',
        en: 'right of first refusal (pre-emption)',
        ex: 'Zajednica bi imala pravo prvokupa na zemljište.',
      },
      { hr: 'usputna šteta', en: 'collateral damage', ex: 'Otočani bi bili usputna šteta.' },
      {
        hr: 'kulisa',
        en: 'stage set, backdrop',
        ex: 'Otok ne smije postati kulisa za ljetne posjetitelje.',
      },
    ],
    quiz: [
      {
        q: 'Koji argument ZA most autor smatra najosnovnijim?',
        qEn: 'Which argument FOR the bridge does the author consider the most basic?',
        opts: [
          'Da će porasti cijene zemljišta',
          'Da otok postaje mjesto na koje se dolazi kad se hoće, a ne kad se može',
          'Da će doći više turista',
          'Da je most jeftiniji od trajekta',
        ],
        correct: 1,
      },
      {
        q: 'Što, prema autoru, zagovornici mosta ne vole priznati?',
        qEn: "According to the author, what do the bridge's advocates not like to admit?",
        opts: [
          'Da most nikad neće biti izgrađen',
          'Da su svi mostovi otoke promijenili brže i dublje, s dokazanim posljedicama za cijene i stanovništvo',
          'Da otočani ne žele most',
          'Da je trajekt pouzdaniji',
        ],
        correct: 1,
      },
      {
        q: 'Zašto autor tvrdi da ne postoji opcija "ostaviti kako jest"?',
        qEn: 'Why does the author argue that there is no option to "leave it as it is"?',
        opts: [
          'Jer je most već izgrađen',
          'Jer se otok bez mosta također mijenja — tiho, prema praznom muzeju',
          'Jer država ne dopušta status quo',
          'Jer se trajekt ukida',
        ],
        correct: 1,
      },
      {
        q: 'Kakav je autorov konačni stav?',
        qEn: "What is the author's final position?",
        opts: [
          'Protiv mosta u svakom slučaju',
          'Za most bez ikakvih uvjeta',
          'Za most, uvjetno — s provedivim pravilima; bez njih radije drugi trajekt',
          'Neodlučan, bez stava',
        ],
        correct: 2,
      },
      {
        q: 'Što autor zamjera jeziku rasprave?',
        qEn: 'What does the author criticise in the language of the debate?',
        opts: [
          'Da se previše govori o pravilima',
          'Da su "razvoj" i "očuvanje" prazne riječi dok se ne kaže čega i za koga',
          'Da protivnici koriste strane riječi',
          'Da se rasprava vodi na otoku umjesto u Zagrebu',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_tko_placa_more',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🌊',
    title: 'Tko plaća more?',
    titleEn: 'Who Pays for the Sea?',
    duration: 15,
    focus:
      'Economic analysis • Nominal style & abstract nouns • Distinguishing cost, price and value',
    intro:
      "An analysis of Croatian tourism's central paradox: the country earns a fifth of its income from a coast whose upkeep it does not charge for. Who bears the costs, who takes the profits, and what a fair price would look like.",
    paragraphs: [
      {
        hr: 'Hrvatska od turizma zarađuje otprilike petinu svojega bruto domaćeg proizvoda, što je udio kakav u Europskoj uniji nema nijedna druga zemlja. Ta se brojka obično navodi s ponosom, a rjeđe s pitanjem koje iz nje slijedi: što točno prodajemo? Odgovor nije hotel, ni apartman, ni konoba — to su samo posrednici. Prodajemo more, obalu, otoke i zrak iznad njih, dakle dobra koja nitko nije proizveo, koja nikome ne pripadaju i za čije održavanje nitko ne izdaje račun. Ovaj tekst pokušava odgovoriti na jednostavno pitanje: tko taj račun zapravo plaća?',
        en: 'Croatia earns roughly a fifth of its gross domestic product from tourism, a share no other country in the European Union has. That figure is usually cited with pride, and less often with the question that follows from it: what exactly are we selling? The answer is not the hotel, nor the apartment, nor the tavern — those are only intermediaries. We are selling the sea, the coast, the islands and the air above them, that is, goods nobody produced, which belong to nobody and for whose upkeep nobody issues an invoice. This text tries to answer a simple question: who actually pays that invoice?',
      },
      {
        hr: 'Ekonomisti za takva dobra imaju naziv — zajednička dobra — i dobro poznatu dijagnozu: budući da ih svi koriste, a nitko ne posjeduje, svatko ima interes uzeti što više, a nitko interes održavati. Rezultat je poznat kao tragedija zajedničkih dobara i na hrvatskoj se obali može promatrati u stvarnom vremenu. Svaki novi apartman pojedinačno je racionalna odluka; zajedno, deset tisuća novih apartmana godišnje znači pretrpane plaže, kanalizaciju koja ljeti ne izdrži, vodu koja se racionira na otocima i more koje u kolovozu u nekim uvalama više ne zadovoljava standarde za kupanje. Nitko od tih deset tisuća investitora nije kriv. Svi zajedno jesu.',
        en: 'Economists have a name for such goods — commons — and a well-known diagnosis: since everyone uses them and nobody owns them, everyone has an interest in taking as much as possible and nobody an interest in maintaining them. The result is known as the tragedy of the commons and can be observed in real time on the Croatian coast. Each new apartment is individually a rational decision; together, ten thousand new apartments a year mean overcrowded beaches, sewerage that does not hold up in summer, water rationed on the islands and a sea that in August in some coves no longer meets bathing standards. None of those ten thousand investors is to blame. All of them together are.',
      },
      {
        hr: 'Pogledajmo sada tko plaća. Prvo plaćaju lokalne zajednice: općine koje zimi imaju tri tisuće stanovnika, a ljeti trideset tisuća korisnika vode, struje, cesta i odvoza otpada, pri čemu se infrastruktura mora dimenzionirati prema ljetu, a financirati prema zimi. Boravišna pristojba, koja bi to trebala pokriti, iznosi u prosjeku oko jednog eura po noćenju, što je nekoliko puta manje nego u usporedivim sredozemnim destinacijama, i još se dijeli s turističkim zajednicama koje je troše na promidžbu — dakle na privlačenje još korisnika. Sustav je, formalno gledano, savršeno logičan: novac od gostiju troši se na dovođenje gostiju. Manje je logičan ako ga gleda netko kome ljeti iz slavine ne teče voda.',
        en: 'Let us now look at who pays. First, the local communities pay: municipalities which in winter have three thousand inhabitants and in summer thirty thousand users of water, electricity, roads and waste collection, where the infrastructure must be sized for summer and financed from winter. The tourist tax, which ought to cover this, averages about one euro per night, several times less than in comparable Mediterranean destinations, and is moreover shared with tourist boards which spend it on promotion — that is, on attracting more users. The system is, formally speaking, perfectly logical: money from guests is spent on bringing in guests. It is less logical seen by someone whose tap runs dry in summer.',
      },
      {
        hr: 'Drugo plaćaju oni koji na obali žive, a od turizma ne žive. Učiteljica, medicinska sestra ili policajac u primorskom gradu plaćaju najam koji je određen ljetnim prihodima od apartmana, a ne njihovim plaćama; kupuju u trgovinama čije su cijene kalibrirane prema gostima; i ljeti, kad grad radi punim kapacitetom, imaju najmanje pristupa onome zbog čega ondje žive — plaži, rivi, miru. U anketama ti ljudi turizam ne odbacuju, ali sve češće opisuju osjećaj da su "gosti u vlastitom gradu". To je sociološki podatak koliko i ekonomski, i ozbiljniji je od oba.',
        en: 'Second, those who live on the coast but do not live off tourism pay. A teacher, a nurse or a police officer in a coastal town pays a rent set by summer apartment income rather than by their wages; shops in stores whose prices are calibrated for guests; and in summer, when the town runs at full capacity, has the least access to what they live there for — the beach, the waterfront, the quiet. In surveys these people do not reject tourism, but more and more often describe a feeling of being "guests in their own town". That is a sociological datum as much as an economic one, and more serious than either.',
      },
      {
        hr: 'Treće plaća more samo, ako se tako smije reći — a zapravo plaćaju oni koji će ga koristiti za dvadeset godina. Ribari izvještavaju o uvalama u kojima više nema ribe jer su ljeti puna sidra i motora; biolozi o livadama posidonije koje nestaju pod sidrima jahti; komunalne službe o količinama otpada koje rastu brže od kapaciteta za obradu. Ti se troškovi ne pojavljuju ni u čijem računu, jer ih nitko ne fakturira, pa ih se u službenim brojkama o "doprinosu turizma" jednostavno nema. Ekonomisti to zovu eksternalijom. Ribari to zovu prazno more.',
        en: 'Third, the sea itself pays, if one may put it that way — and in fact those who will use it in twenty years pay. Fishermen report coves where there are no more fish because in summer they are full of anchors and engines; biologists report meadows of posidonia disappearing under yacht anchors; municipal services report volumes of waste growing faster than the capacity to treat them. These costs appear on nobody\'s bill, because nobody invoices them, so in the official figures on the "contribution of tourism" they simply do not exist. Economists call this an externality. Fishermen call it an empty sea.',
      },
      {
        hr: 'Tko, s druge strane, ubire? Ubiru, prvo, vlasnici apartmana, čiji se prihod oporezuje paušalno — fiksnim iznosom po krevetu, neovisno o zaradi — što je porezni režim kakav nema nijedna druga djelatnost u zemlji. Ubiru platforme za rezervacije, koje na svaku noć uzimaju petnaestak posto i porez plaćaju uglavnom u inozemstvu. Ubire i država, kroz porez na dodanu vrijednost koji gosti plaćaju na sve što kupe — i to je, valja pošteno reći, najveći pojedinačni prihod od turizma, iz kojega se financiraju bolnice i škole daleko od obale. Problem nije u tome da netko zarađuje. Problem je u tome da se zarada i trošak ne sastaju na istom mjestu.',
        en: 'Who, on the other hand, collects? First, apartment owners collect, whose income is taxed at a flat rate — a fixed sum per bed, regardless of earnings — a tax regime no other activity in the country has. Booking platforms collect, taking about fifteen per cent on every night and paying tax mostly abroad. The state collects too, through value added tax which guests pay on everything they buy — and that, to be fair, is the largest single revenue from tourism, from which hospitals and schools far from the coast are financed. The problem is not that someone earns. The problem is that the earnings and the cost do not meet in the same place.',
      },
      {
        hr: 'Što bi značilo da se sastanu? Nekoliko je mjera koje ekonomska logika nalaže, a politička ih redovito odgađa. Boravišna pristojba koja odražava stvarni trošak — u sezoni višestruko veća nego danas — i koja ostaje općini, ne turističkoj zajednici. Oporezivanje najma prema stvarnom prihodu, kao i svake druge djelatnosti, uz olakšice za one koji stan iznajmljuju cijele godine stanovnicima. Naknada za sidrenje u zaštićenim uvalama, po uzoru na zemlje koje su to uvele i nisu izgubile jahte. I, najteže od svega, ograničenje broja ležajeva po stanovniku u općinama koje su prešle granicu na kojoj infrastruktura izdrži — što bi značilo reći nekim investitorima ne.',
        en: 'What would it mean for them to meet? There are several measures that economic logic dictates and political logic regularly postpones. A tourist tax reflecting the real cost — several times higher than today in season — and remaining with the municipality, not the tourist board. Taxing rentals according to actual income, like every other activity, with relief for those who rent a flat to residents all year round. An anchoring fee in protected coves, following countries that have introduced one and have not lost the yachts. And, hardest of all, a cap on beds per inhabitant in municipalities that have crossed the line at which the infrastructure holds — which would mean saying no to some investors.',
      },
      {
        hr: 'Prigovor koji se uvijek javlja glasi: to bi nas učinilo skupljima od konkurencije i gosti bi otišli u Grčku ili Španjolsku. Prigovor zaslužuje ozbiljan odgovor, i on glasi: dio bi otišao, i to bi bilo dobro. Turizam koji ovisi o tome da smo najjeftiniji turizam je koji se natječe s najsiromašnijima i koji nas na tom natjecanju ne može dugo držati. Zemlje koje su podigle cijenu mora — od Baleara do Slovenije — nisu izgubile goste; izgubile su najgore goste i dobile više novca od boljih. More nije proizvod koji se prodaje na količinu. Ono je jedini kapital koji imamo i koji ne možemo uvesti.',
        en: 'The objection that always arises goes: this would make us more expensive than the competition and the guests would go to Greece or Spain. The objection deserves a serious answer, and it is this: some would go, and that would be good. Tourism that depends on our being the cheapest is tourism that competes with the poorest and cannot keep us in that competition for long. Countries that have raised the price of the sea — from the Balearics to Slovenia — have not lost guests; they have lost the worst guests and gained more money from better ones. The sea is not a product sold by volume. It is the only capital we have that we cannot import.',
      },
      {
        hr: 'Tko, dakle, plaća more? Danas ga plaćaju općine iz zimskih proračuna, stanovnici iz plaća koje nisu turističke, ribari iz praznih mreža i generacija koja još nije rođena. Tko ga ubire? Vlasnici kreveta, platforme i, dijelom, država. Pitanje nije je li to nepravedno — očito jest — nego koliko dugo može trajati. Zajednička dobra imaju svojstvo da propadaju polako, a onda odjednom. Hrvatska obala još je u fazi polako. Rasprava o tome tko plaća more nije rasprava o pravednosti nego o tome hoćemo li tu fazu iskoristiti dok traje.',
        en: 'So who pays for the sea? Today the municipalities pay from winter budgets, residents from wages that are not tourist wages, fishermen from empty nets and a generation not yet born. Who collects? Bed owners, platforms and, in part, the state. The question is not whether that is unjust — it obviously is — but how long it can last. Commons have the property of decaying slowly, and then all at once. The Croatian coast is still in the slow phase. The debate about who pays for the sea is not a debate about fairness but about whether we will use that phase while it lasts.',
      },
    ],
    vocabulary: [
      {
        hr: 'bruto domaći proizvod',
        en: 'gross domestic product',
        ex: 'Turizam čini petinu bruto domaćeg proizvoda.',
      },
      { hr: 'posrednik', en: 'intermediary', ex: 'Hotel i apartman samo su posrednici.' },
      {
        hr: 'zajednička dobra',
        en: 'commons, common goods',
        ex: 'More je zajedničko dobro koje nitko ne posjeduje.',
      },
      {
        hr: 'dimenzionirati',
        en: 'to size, dimension (infrastructure)',
        ex: 'Infrastruktura se dimenzionira prema ljetu.',
      },
      { hr: 'promidžba', en: 'promotion, publicity', ex: 'Pristojba se troši na promidžbu.' },
      { hr: 'eksternalija', en: 'externality', ex: 'Ekonomisti taj trošak zovu eksternalijom.' },
      { hr: 'paušalno', en: 'at a flat rate', ex: 'Prihod od apartmana oporezuje se paušalno.' },
      {
        hr: 'naknada',
        en: 'fee, charge, compensation',
        ex: 'Naknada za sidrenje u zaštićenim uvalama.',
      },
      { hr: 'nalagati', en: 'to dictate, require', ex: 'Ekonomska logika nalaže nekoliko mjera.' },
      { hr: 'natjecati se', en: 'to compete', ex: 'Natječemo se s najsiromašnijima.' },
    ],
    quiz: [
      {
        q: 'Što autor tvrdi da Hrvatska "zapravo prodaje"?',
        qEn: 'What does the author claim Croatia "actually sells"?',
        opts: [
          'Hotele i apartmane',
          'Zajednička dobra — more, obalu, otoke — koja nitko nije proizveo',
          'Hranu i vino',
          'Usluge platformi za rezervacije',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor opisuje logiku boravišne pristojbe?',
        qEn: 'How does the author describe the logic of the tourist tax?',
        opts: [
          'Previsoka je i odbija goste',
          'Novac od gostiju troši se na dovođenje novih gostiju, a ne na infrastrukturu',
          'Ide izravno u državni proračun',
          'Plaćaju je samo domaći gosti',
        ],
        correct: 1,
      },
      {
        q: 'Što znači osjećaj da su stanovnici "gosti u vlastitom gradu"?',
        qEn: 'What does the feeling of being "guests in their own town" mean?',
        opts: [
          'Da stanovnici ljeti putuju',
          'Da oni koji ne žive od turizma plaćaju njegove cijene, a ljeti imaju najmanje pristupa gradu',
          'Da stanovnici dobivaju besplatne noćenja',
          'Da turisti postaju stanovnici',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor odgovara na prigovor da bismo poskupljenjem izgubili goste?',
        qEn: 'How does the author answer the objection that higher prices would lose guests?',
        opts: [
          'Tvrdi da nitko ne bi otišao',
          'Slaže se i odustaje od prijedloga',
          'Kaže da bi dio otišao i da bi to bilo dobro — izgubili bismo najgore goste',
          'Predlaže snižavanje cijena',
        ],
        correct: 2,
      },
      {
        q: 'Što autor misli rečenicom da zajednička dobra propadaju "polako, a onda odjednom"?',
        qEn: 'What does the author mean by saying commons decay "slowly, and then all at once"?',
        opts: [
          'Da je obala već propala',
          'Da još ima vremena za djelovanje, ali ono nije neograničeno',
          'Da se more oporavlja svake zime',
          'Da propadanje nije moguće predvidjeti',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_algoritam',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🤖',
    title: 'Jezik u rukama algoritma',
    titleEn: 'A Language in the Hands of an Algorithm',
    duration: 15,
    focus: 'Technology & language policy • Hypothetical reasoning • Defining terms before arguing',
    intro:
      'An analysis of what machine translation and text generators mean for a language of four million speakers — the real risks, the imagined ones, and the one question nobody in the debate is asking.',
    paragraphs: [
      {
        hr: 'Kad se govori o hrvatskom jeziku i umjetnoj inteligenciji, rasprava se obično svede na dvije rečenice. Prva glasi: "Mali jezici će izumrijeti jer će svi govoriti s računalima na engleskom." Druga glasi: "Mali jezici će preživjeti jer će računala prevoditi sve na sve." Obje su rečenice izgovorene s uvjerenjem, obje se pozivaju na tehnologiju koju govornik obično ne razumije, i obje su, tvrdim, krive na isti način: pretpostavljaju da o sudbini jezika odlučuje alat, a ne ljudi koji ga koriste. Ovaj tekst pokušava rasplesti što se doista mijenja, što se samo čini da se mijenja, i što bi trebalo mijenjati nas.',
        en: 'When the Croatian language and artificial intelligence are discussed, the debate usually boils down to two sentences. The first goes: "Small languages will die out because everyone will talk to computers in English." The second goes: "Small languages will survive because computers will translate everything into everything." Both sentences are uttered with conviction, both appeal to a technology the speaker usually does not understand, and both are, I argue, wrong in the same way: they assume that the fate of a language is decided by the tool and not by the people who use it. This text tries to untangle what is really changing, what only seems to be changing, and what ought to be changing us.',
      },
      {
        hr: 'Počnimo s definicijom, jer bez nje rasprava ostaje na razini slogana. Kad kažemo da neki jezik "postoji" u digitalnom svijetu, mislimo na barem tri različite stvari: da se na njemu može pretraživati, da se na njega može strojno prevoditi i da na njemu strojevi mogu proizvoditi tekst koji zvuči kao da ga je napisao govornik. Hrvatski je na prvoj razini već dvadeset godina, na drugoj desetak, a na trećoj tek posljednjih nekoliko. Svaka od tih razina ima drugačije posljedice, a rasprava ih redovito miješa.',
        en: 'Let us begin with a definition, because without one the debate stays at the level of slogans. When we say a language "exists" in the digital world, we mean at least three different things: that one can search in it, that one can machine-translate into it, and that machines can produce text in it that sounds as though a speaker wrote it. Croatian has been at the first level for twenty years, at the second for about ten, and at the third only for the last few. Each of these levels has different consequences, and the debate regularly mixes them up.',
      },
      {
        hr: 'Strojno prevođenje najstarija je i najbolje shvaćena razina, i o njoj se može govoriti na temelju podataka. Prevoditelji izvještavaju o padu narudžbi za tehničke i pravne tekstove, ali i o rastu potražnje za lekturom strojnih prijevoda — posao se nije nestao, promijenio je oblik. Za jezik samu posljedice su suptilnije. Strojni prijevod na hrvatski proizvodi hrvatski koji je gramatički točan, a idiomatski siromašan: rečenice s engleskim redom riječi, s glagolom ondje gdje bi ga govornik stavio negdje drugdje, s "vršiti utjecaj" umjesto "utjecati". Taj hrvatski nitko ne govori, ali ga sve više ljudi čita, a što se čita, s vremenom se počne i pisati. To je prva stvarna opasnost, i nema ništa s izumiranjem: jezik ne nestaje, nego se izravnava.',
        en: 'Machine translation is the oldest and best understood level, and one can speak about it on the basis of data. Translators report a fall in orders for technical and legal texts, but also a rise in demand for post-editing of machine translations — the work has not disappeared, it has changed shape. For the language itself the consequences are subtler. Machine translation into Croatian produces a Croatian that is grammatically correct and idiomatically poor: sentences with English word order, with the verb where a speaker would put it somewhere else, with "to exert influence" instead of "to influence". Nobody speaks that Croatian, but more and more people read it, and what is read is, over time, also written. That is the first real danger, and it has nothing to do with extinction: the language is not disappearing, it is being flattened.',
      },
      {
        hr: 'Druga razina — strojevi koji sami pišu — nova je i o njoj se govori s najviše strasti i najmanje podataka. Strah da će djeca prestati pisati jer će pisati stroj razumljiv je, ali ga treba izmjeriti prije nego što se na njemu gradi politika. Ono što se dosad zna jest da generatori teksta na hrvatskom rade osjetno lošije nego na engleskom, jer su na hrvatskome učili na stotinu puta manje teksta; da griješe upravo ondje gdje hrvatski nije engleski — u padežima, aspektu, redu klitika — i da te pogreške čine sigurnim tonom koji čitatelja uvjerava. Za jezik čije govornike odgajamo da sumnjaju u vlastito uho, to je ozbiljan problem. Ali problem je, opet, u ljudima koji stroju vjeruju više nego sebi, a ne u stroju.',
        en: 'The second level — machines that write on their own — is new and is spoken about with the most passion and the least data. The fear that children will stop writing because the machine will write is understandable, but it should be measured before policy is built on it. What is known so far is that text generators perform noticeably worse in Croatian than in English, because they learned on a hundred times less Croatian text; that they err precisely where Croatian is not English — in cases, aspect, clitic order — and that they make those errors in a confident tone that convinces the reader. For a language whose speakers we are raising to doubt their own ear, that is a serious problem. But the problem is, again, in the people who trust the machine more than themselves, not in the machine.',
      },
      {
        hr: 'Sada protuargument, koji zaslužuje više od odbacivanja. Optimisti kažu: nikada u povijesti nije bilo jeftinije proizvesti tekst na hrvatskom. Udžbenik, priručnik, uputa za lijek, podnaslov za film — sve što se prije nije prevodilo jer se nije isplatilo, sada se može prevesti za nekoliko centi. Jezik koji je prije bio odsutan iz cijelih područja života — od softvera do znanstvenih članaka — sada u njima može biti prisutan. To je istina, i nije mala. Jezik koji se ne koristi u nekom području iz njega se povlači; jezik koji se koristi, makar i strojno, ondje ostaje. Pitanje je samo kakav ostaje.',
        en: 'Now the counter-argument, which deserves more than dismissal. The optimists say: never in history has it been cheaper to produce text in Croatian. A textbook, a manual, a medicine leaflet, a subtitle for a film — everything that used not to be translated because it did not pay can now be translated for a few cents. A language that was previously absent from whole areas of life — from software to scientific articles — can now be present in them. That is true, and it is not small. A language not used in some domain withdraws from it; a language used there, even by machine, remains. The only question is what kind of language remains.',
      },
      {
        hr: 'I tu dolazimo do pitanja koje nitko u raspravi ne postavlja: tko će odlučiti kakav hrvatski strojevi uče? Strojevi uče iz teksta koji postoji, a tekst koji postoji na internetu na hrvatskom jeziku u velikoj je mjeri loše lektoriran, pisan u žurbi ili već strojno preveden. Ako se ništa ne učini, strojevi će naučiti hrvatski komentara i portala, a zatim ga vratiti u udžbenike i upute, s autoritetom koji stroj uvijek ima. To nije zavjera, nego statistika. Alternativa postoji i nije skupa: digitalizirani korpus dobre hrvatske proze, publicistike i stručnog teksta, otvoreno dostupan za učenje strojeva. Takav korpus Hrvatska djelomično ima i drži ga zaključanog, uglavnom iz autorskopravnih razloga koji su rješivi kad se netko odluči riješiti ih.',
        en: 'And here we come to the question nobody in the debate is asking: who will decide what kind of Croatian the machines learn? Machines learn from the text that exists, and the text that exists on the internet in Croatian is to a large extent badly edited, written in haste or already machine-translated. If nothing is done, the machines will learn the Croatian of comment sections and news portals, and then return it to textbooks and manuals with the authority a machine always has. That is not a conspiracy, but statistics. An alternative exists and is not expensive: a digitised corpus of good Croatian prose, journalism and specialist text, openly available for machine learning. Croatia partly has such a corpus and keeps it locked, mostly for copyright reasons that are solvable once someone decides to solve them.',
      },
      {
        hr: 'Postoji i pitanje škole, na kojem se najlakše griješi. Reakcija na strojno pisanje u većini je škola bila zabrana, što je reakcija koja nikad u povijesti tehnologije nije uspjela i neće ni ovaj put. Korisnija je reakcija ona koju su primijenili neki nastavnici hrvatskoga: dati učenicima strojno napisan tekst i tražiti da ga poprave. Vježba ima dvostruki učinak — učenici uče što stroj ne zna, a time i što hrvatski jest, i uče da tekst koji zvuči uvjereno ne mora biti točan. To je, ako se pravo pogleda, definicija pismenosti u vremenu koje dolazi: ne sposobnost da se napiše, nego sposobnost da se prepozna što je napisano loše.',
        en: 'There is also the question of school, on which it is easiest to go wrong. The reaction to machine writing in most schools was a ban, a reaction that has never in the history of technology succeeded and will not this time either. More useful is the reaction some Croatian-language teachers have adopted: give pupils a machine-written text and ask them to correct it. The exercise has a double effect — pupils learn what the machine does not know, and thereby what Croatian is, and they learn that a text that sounds confident need not be correct. That, if one looks at it properly, is the definition of literacy in the time that is coming: not the ability to write, but the ability to recognise what has been written badly.',
      },
      {
        hr: 'Vratimo se dvjema rečenicama s početka. Hoće li mali jezici izumrijeti jer će svi govoriti s računalima na engleskom? Ne — govorit će s računalima na hrvatskom, i to će biti hrvatski koji su računala naučila od nas. Hoće li mali jezici preživjeti jer će računala sve prevoditi? Ne — preživjet će oni jezici čiji govornici budu znali razlikovati dobar prijevod od lošeg, a to se ne uči od računala. Jezik ne umire kad ga ljudi prestanu govoriti; umire kad ga prestanu popravljati. Alat koji imamo može ubrzati oboje. Što će ubrzati, ovisi o tome hoćemo li ga koristiti kao zamjenu za vlastito uho ili kao vježbu za njega.',
        en: 'Let us return to the two sentences from the beginning. Will small languages die out because everyone will talk to computers in English? No — they will talk to computers in Croatian, and it will be the Croatian the computers learned from us. Will small languages survive because computers will translate everything? No — the languages that survive will be those whose speakers know how to tell a good translation from a bad one, and that is not learned from a computer. A language does not die when people stop speaking it; it dies when they stop correcting it. The tool we have can accelerate both. Which one it accelerates depends on whether we use it as a substitute for our own ear or as an exercise for it.',
      },
    ],
    vocabulary: [
      {
        hr: 'svesti (se) na',
        en: 'to boil down to, reduce to',
        ex: 'Rasprava se obično svede na dvije rečenice.',
      },
      {
        hr: 'rasplesti',
        en: 'to untangle, unravel',
        ex: 'Tekst pokušava rasplesti što se doista mijenja.',
      },
      {
        hr: 'lektura',
        en: 'proofreading, editing',
        ex: 'Raste potražnja za lekturom strojnih prijevoda.',
      },
      {
        hr: 'idiomatski',
        en: 'idiomatic(ally)',
        ex: 'Prijevod je gramatički točan, a idiomatski siromašan.',
      },
      {
        hr: 'izravnati (se)',
        en: 'to flatten, level out',
        ex: 'Jezik ne nestaje, nego se izravnava.',
      },
      {
        hr: 'odgajati',
        en: 'to raise, bring up',
        ex: 'Govornike odgajamo da sumnjaju u vlastito uho.',
      },
      {
        hr: 'isplatiti se',
        en: 'to pay off, be worth it',
        ex: 'Prije se nije isplatilo prevoditi upute.',
      },
      {
        hr: 'korpus',
        en: 'corpus (text collection)',
        ex: 'Korpus dobre hrvatske proze trebao bi biti otvoren.',
      },
      { hr: 'autorskopravni', en: 'copyright-related', ex: 'Razlozi su autorskopravni i rješivi.' },
      { hr: 'pismenost', en: 'literacy', ex: 'To je definicija pismenosti u vremenu koje dolazi.' },
    ],
    quiz: [
      {
        q: 'U čemu su, prema autoru, obje početne rečenice krive "na isti način"?',
        qEn: 'In what way, according to the author, are both opening sentences wrong "in the same way"?',
        opts: [
          'Obje precjenjuju engleski',
          'Obje pretpostavljaju da o sudbini jezika odlučuje alat, a ne ljudi',
          'Obje se odnose samo na velike jezike',
          'Obje su znanstveno dokazane',
        ],
        correct: 1,
      },
      {
        q: 'Koju "prvu stvarnu opasnost" autor vidi u strojnom prevođenju?',
        qEn: 'What "first real danger" does the author see in machine translation?',
        opts: [
          'Da prevoditelji ostaju bez posla',
          'Da se jezik izravnava — gramatički točan, a idiomatski siromašan hrvatski koji ljudi počnu pisati',
          'Da se hrvatski više neće prevoditi',
          'Da će strojevi prevoditi na srpski',
        ],
        correct: 1,
      },
      {
        q: 'Što je, prema autoru, pitanje koje nitko u raspravi ne postavlja?',
        qEn: 'According to the author, what is the question nobody in the debate is asking?',
        opts: [
          'Koliko strojevi koštaju',
          'Tko će odlučiti kakav hrvatski strojevi uče',
          'Hoće li škole zabraniti računala',
          'Kada će hrvatski postati službeni jezik interneta',
        ],
        correct: 1,
      },
      {
        q: 'Koju školsku vježbu autor smatra korisnijom od zabrane?',
        qEn: 'Which school exercise does the author consider more useful than a ban?',
        opts: [
          'Prepisivanje strojnog teksta',
          'Popravljanje strojno napisanog teksta, čime učenici uče što stroj ne zna',
          'Pisanje bez računala',
          'Učenje engleskog umjesto hrvatskog',
        ],
        correct: 1,
      },
      {
        q: 'Kada, prema autoru, jezik umire?',
        qEn: 'According to the author, when does a language die?',
        opts: [
          'Kad ga ljudi prestanu govoriti',
          'Kad ga računala nauče',
          'Kad ga ljudi prestanu popravljati',
          'Kad izgubi službeni status',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c1_long_demografija',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '📉',
    title: 'Demografija bez panike',
    titleEn: 'Demography Without Panic',
    duration: 15,
    focus:
      'Reading statistics critically • Causal language • Separating description from prescription',
    intro:
      'Croatia has lost a tenth of its population in a generation. An analysis that takes the numbers apart — what they measure, what they miss, which explanations survive the evidence — and argues that the panic is the wrong response to the right problem.',
    paragraphs: [
      {
        hr: 'Prema posljednjem popisu, u Hrvatskoj živi oko 3,87 milijuna ljudi — gotovo četiristo tisuća manje nego deset godina prije i više od pola milijuna manje nego 1991. Brojke su stvarne i ozbiljne, i ovaj tekst ne namjerava ih umanjiti. Namjerava, međutim, učiniti nešto što se u raspravi o demografiji rijetko čini: pročitati ih polako. Jer riječ koja se uz njih najčešće veže — "katastrofa", "izumiranje", "nestajanje" — nije analiza nego reakcija, a od reakcije se ne prave politike. Ili se prave loše.',
        en: 'According to the last census, about 3.87 million people live in Croatia — almost four hundred thousand fewer than ten years earlier and more than half a million fewer than in 1991. The figures are real and serious, and this text does not intend to minimise them. It intends, however, to do something rarely done in the demographic debate: to read them slowly. Because the word most often attached to them — "catastrophe", "extinction", "disappearance" — is not analysis but reaction, and policies are not made from reactions. Or they are made badly.',
      },
      {
        hr: 'Prvo, što brojka mjeri. Pad od četiristo tisuća sastoji se od dva različita procesa koje javnost redovito zbraja u jedan. Prvi je prirodni pad: više umrlih nego rođenih, oko petnaest do dvadeset tisuća godišnje. Drugi je iseljavanje: više odseljenih nego doseljenih, koje je u vrhuncu, nakon ulaska u Europsku uniju, iznosilo i po pedeset tisuća godišnje, a posljednjih godina pada prema nuli, uz neke godine s pozitivnim saldom zbog doseljavanja radnika iz Azije. Ta su dva procesa različita po uzrocima, po trajanju i po tome što se s njima može učiniti. Politika koja ih tretira kao jedan problem ne rješava nijedan.',
        en: 'First, what the figure measures. The fall of four hundred thousand consists of two different processes which the public regularly adds up into one. The first is natural decline: more deaths than births, about fifteen to twenty thousand a year. The second is emigration: more people leaving than arriving, which at its peak, after joining the European Union, reached fifty thousand a year, and in recent years has been falling towards zero, with some years showing a positive balance owing to the arrival of workers from Asia. These two processes differ in their causes, their duration and in what can be done about them. A policy that treats them as one problem solves neither.',
      },
      {
        hr: 'Drugo, što brojka ne mjeri. Popis broji ljude koji su u zemlji prijavljeni, a ne one koji u njoj žive. Procjene na temelju podataka o zdravstvenom osiguranju, mobilnim mrežama i potrošnji struje sugeriraju da je broj ljudi koji stvarno žive u Hrvatskoj nešto veći od popisanog, jer se dio iseljenih vratio, a nije se prijavio, i jer je dio doseljenih ovdje, a nije popisan. Razlika nije golema — možda pedeset do sto tisuća — ali je važna za ton: zemlja nije prazna koliko brojke sugeriraju, nego je slabo izbrojena. To je razlika koju bi svaka ozbiljna rasprava trebala priznati prije nego što krene dalje.',
        en: 'Second, what the figure does not measure. A census counts people who are registered in the country, not those who live in it. Estimates based on health-insurance data, mobile networks and electricity consumption suggest that the number of people actually living in Croatia is somewhat higher than the census figure, because some of the emigrants have returned without registering, and some of the immigrants are here without having been counted. The difference is not huge — perhaps fifty to a hundred thousand — but it matters for the tone: the country is not as empty as the figures suggest, but badly counted. That is a difference any serious debate should acknowledge before moving on.',
      },
      {
        hr: 'Treće, objašnjenja. Ona koja se najčešće nude — "mladi odlaze jer nema posla", "ljudi ne rađaju jer nemaju stanove" — nisu pogrešna, ali su nepotpuna na način koji vodi u krive mjere. Iseljavanje je najviše raslo u godinama kad je nezaposlenost padala, što ne znači da posao nije važan, nego da nije dovoljan: ljudi ne odlaze samo od nezaposlenosti, nego od osjećaja da se pravila ne primjenjuju jednako, da napredovanje ovisi o poznanstvu i da se u javnim ustanovama ne isplati biti dobar. To su razlozi koje nijedna ekonomska mjera ne može izravno riješiti, i upravo se zato o njima rjeđe govori.',
        en: 'Third, the explanations. Those most often offered — "the young leave because there are no jobs", "people don\'t have children because they have no housing" — are not wrong, but they are incomplete in a way that leads to the wrong measures. Emigration grew most in the years when unemployment was falling, which does not mean that a job is unimportant, but that it is not sufficient: people leave not only from unemployment but from a sense that the rules are not applied equally, that advancement depends on connections and that in public institutions it does not pay to be good. These are reasons no economic measure can solve directly, and precisely for that reason they are discussed less.',
      },
      {
        hr: 'S natalitetom je slično. Hrvatska ima stopu ukupnog fertiliteta oko 1,5 djeteta po ženi, što je nisko, ali nije iznimka: to je otprilike europski prosjek, viši nego u Italiji, Španjolskoj ili Poljskoj. Zemlje koje su se iz te zone pomakle — Francuska, skandinavske zemlje — nisu to postigle jednokratnim isplatama za rođenje djeteta, koje su u Hrvatskoj omiljena mjera, nego dugoročnom infrastrukturom: vrtićima koji rade do šest, roditeljskim dopustom koji koriste i očevi, radnim mjestima na kojima majka ne gubi karijeru. Te su mjere skupe, spore i ne daju rezultate do sljedećih izbora. Zato ih se ne provodi. Ne zato što nisu poznate.',
        en: "It is similar with the birth rate. Croatia has a total fertility rate of about 1.5 children per woman, which is low but not exceptional: it is roughly the European average, higher than in Italy, Spain or Poland. The countries that have moved out of that zone — France, the Scandinavian countries — did not achieve it with one-off payments for the birth of a child, which are Croatia's favourite measure, but with long-term infrastructure: nurseries open until six, parental leave that fathers use too, jobs in which a mother does not lose her career. These measures are expensive, slow and yield no results before the next election. That is why they are not implemented. Not because they are unknown.",
      },
      {
        hr: 'Četvrto, ono što se u panici zaboravlja: demografija je sporija od politike, ali brža od naših predodžbi. Iseljavanje koje je 2015. izgledalo kao nezaustavljivo praktički se zaustavilo do 2023., dijelom jer je otišao tko je htio, dijelom jer su se plaće približile europskima, dijelom jer je Njemačka postala manje privlačna. Doseljavanje radnika iz Nepala, Filipina i Indije, koje 2015. nitko nije predviđao, danas godišnje dovodi više ljudi nego što se rodi. Zemlja koja je prije deset godina raspravljala o tome kako zadržati mlade, danas raspravlja o tome kako integrirati doseljene — a to je rasprava za koju nije pripremljena, jer je prošlu vodila u panici, a ne u planiranju.',
        en: 'Fourth, what panic forgets: demography is slower than politics, but faster than our perceptions. The emigration that in 2015 looked unstoppable had practically stopped by 2023, partly because those who wanted to leave had left, partly because wages had approached European levels, partly because Germany had become less attractive. The arrival of workers from Nepal, the Philippines and India, which nobody predicted in 2015, today brings more people a year than are born. A country that ten years ago debated how to keep its young today debates how to integrate the newcomers — and that is a debate it is not prepared for, because it conducted the last one in panic rather than in planning.',
      },
      {
        hr: 'Što bi onda značilo baviti se demografijom bez panike? Značilo bi, prvo, razdvojiti probleme: iseljavanje, natalitet i doseljavanje traže tri različite politike, a ne jedan resor s jednom porukom. Drugo, mjeriti bolje: zemlja koja ne zna koliko ljudi u njoj živi ne može planirati ni škole ni bolnice. Treće, prestati mjeriti uspjeh brojem stanovnika. Hrvatska s tri i pol milijuna ljudi koji ostaju jer žele, u kojoj se pravila primjenjuju jednako i u kojoj vrtić radi do šest, bolja je zemlja od Hrvatske s četiri i pol milijuna koji čekaju priliku da odu. Broj nije cilj. Cilj je zemlja iz koje se ne odlazi iz očaja i u koju se ne dolazi samo iz nužde.',
        en: 'What, then, would it mean to deal with demography without panic? It would mean, first, separating the problems: emigration, the birth rate and immigration require three different policies, not one ministry with one message. Second, measuring better: a country that does not know how many people live in it cannot plan schools or hospitals. Third, ceasing to measure success by population size. A Croatia of three and a half million people who stay because they want to, in which the rules apply equally and the nursery is open until six, is a better country than a Croatia of four and a half million waiting for a chance to leave. The number is not the goal. The goal is a country one does not leave in despair and does not come to only out of necessity.',
      },
      {
        hr: 'Znam da ovakav tekst riskira optužbu da umanjuje problem. Ne umanjujem ga; pokušavam ga vidjeti. Pola milijuna ljudi manje nego 1991. stvaran je gubitak, sa stvarnim posljedicama za mirovine, škole i sela koja se prazne. Ali gubitak koji se opisuje kao katastrofa dobiva odgovore kakve katastrofe dobivaju — hitne, vidljive i kratke — a ovome problemu trebaju odgovori kakve dobivaju dugoročne bolesti: dosadni, dosljedni i mjereni u desetljećima. Panika je razumljiva. Ali panika ne rađa djecu, ne vraća iseljene i ne uči jezik doseljenima. Panika samo mijenja temu prije nego što je razumijemo.',
        en: 'I know a text like this risks the accusation of minimising the problem. I am not minimising it; I am trying to see it. Half a million people fewer than in 1991 is a real loss, with real consequences for pensions, schools and villages that are emptying. But a loss described as a catastrophe gets the answers catastrophes get — urgent, visible and short — and this problem needs the answers long-term illnesses get: dull, consistent and measured in decades. Panic is understandable. But panic does not bear children, does not bring back emigrants and does not teach newcomers the language. Panic only changes the subject before we have understood it.',
      },
    ],
    vocabulary: [
      {
        hr: 'popis (stanovništva)',
        en: 'census',
        ex: 'Prema posljednjem popisu u Hrvatskoj živi 3,87 milijuna ljudi.',
      },
      { hr: 'umanjiti', en: 'to minimise, play down', ex: 'Tekst ne namjerava umanjiti brojke.' },
      {
        hr: 'prirodni pad',
        en: 'natural decline (deaths > births)',
        ex: 'Prirodni pad iznosi do dvadeset tisuća godišnje.',
      },
      {
        hr: 'saldo',
        en: 'balance (net figure)',
        ex: 'Neke godine imaju pozitivan migracijski saldo.',
      },
      { hr: 'natalitet', en: 'birth rate', ex: 'S natalitetom je slično.' },
      {
        hr: 'jednokratna isplata',
        en: 'one-off payment',
        ex: 'Jednokratne isplate omiljena su mjera.',
      },
      { hr: 'roditeljski dopust', en: 'parental leave', ex: 'Roditeljski dopust koriste i očevi.' },
      { hr: 'predodžba', en: 'notion, perception', ex: 'Demografija je brža od naših predodžbi.' },
      {
        hr: 'resor',
        en: 'ministry portfolio, department',
        ex: 'Tri politike, a ne jedan resor s jednom porukom.',
      },
      { hr: 'dosljedan', en: 'consistent', ex: 'Trebaju odgovori koji su dosadni i dosljedni.' },
    ],
    quiz: [
      {
        q: 'Zašto autor želi brojke "pročitati polako"?',
        qEn: 'Why does the author want to "read the figures slowly"?',
        opts: [
          'Jer su brojke krive',
          'Jer riječi poput "katastrofa" nisu analiza nego reakcija, a od reakcija se prave loše politike',
          'Jer popis nije završen',
          'Jer su brojke premale da bi bile važne',
        ],
        correct: 1,
      },
      {
        q: 'Koja dva procesa javnost zbraja u jedan?',
        qEn: 'Which two processes does the public add up into one?',
        opts: [
          'Rođenja i vjenčanja',
          'Doseljavanje i turizam',
          'Nezaposlenost i inflaciju',
          'Prirodni pad i iseljavanje',
        ],
        correct: 3,
      },
      {
        q: 'Što autor zaključuje iz činjenice da je iseljavanje raslo dok je nezaposlenost padala?',
        qEn: 'What does the author conclude from the fact that emigration grew while unemployment fell?',
        opts: [
          'Da posao nije važan',
          'Da posao nije dovoljan — ljudi odlaze i zbog osjećaja nejednakih pravila',
          'Da su statistike krive',
          'Da nezaposlenost uzrokuje iseljavanje',
        ],
        correct: 1,
      },
      {
        q: 'Zašto se, prema autoru, ne provode mjere koje su podigle natalitet u drugim zemljama?',
        qEn: 'According to the author, why are the measures that raised birth rates elsewhere not implemented?',
        opts: [
          'Jer nisu poznate',
          'Jer su skupe, spore i ne daju rezultate do sljedećih izbora',
          'Jer ih Europska unija zabranjuje',
          'Jer Hrvatska ima dovoljno vrtića',
        ],
        correct: 1,
      },
      {
        q: 'Što autor predlaže umjesto broja stanovnika kao mjere uspjeha?',
        qEn: 'What does the author propose instead of population size as the measure of success?',
        opts: [
          'Broj rođenih godišnje',
          'Zemlju iz koje se ne odlazi iz očaja i u koju se ne dolazi samo iz nužde',
          'Broj doseljenih radnika',
          'Visinu plaća',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_grad_koji_spava',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🏙️',
    title: 'Grad koji spava',
    titleEn: 'The City That Sleeps',
    duration: 15,
    focus: 'Urban policy • Extended metaphor • Weighing regulation against freedom',
    intro:
      'An opinion piece on what happens to a historic city centre when most of its flats become short-term lets: the numbers from Dubrovnik and Split, the argument that regulation is an attack on property, and why the author thinks a city is not the sum of its owners.',
    paragraphs: [
      {
        hr: 'Postoji jedan sat u danu kad se stara jezgra Dubrovnika vidi onakva kakva je postala. Nije to podne, kad je puna, ni ponoć, kad je prazna, nego oko sedam ujutro, kad se u gradu od tisuću i dvjesto stanova upali svjetlo u možda stotinu. Ostali spavaju — ne ljudi u njima, nego stanovi sami, jer u njima nitko ne živi. Prema podacima Grada, u povijesnoj jezgri danas stalno stanuje oko tisuću i petsto ljudi, četvrtina broja iz 1991. i osmina broja iz 1961. Ostatak stanova iznajmljuje se turistima, po noći, s ključem u kutiji na vratima i vlasnikom koji živi u Zagrebu, Beču ili Sydneyu.',
        en: "There is one hour of the day when Dubrovnik's old core can be seen as it has become. It is not noon, when it is full, nor midnight, when it is empty, but around seven in the morning, when in a town of twelve hundred flats the light comes on in perhaps a hundred. The rest are asleep — not the people in them, but the flats themselves, because nobody lives in them. According to the City's figures, about fifteen hundred people now live permanently in the historic core, a quarter of the 1991 figure and an eighth of the 1961 one. The remaining flats are let to tourists, by the night, with a key in a box on the door and an owner who lives in Zagreb, Vienna or Sydney.",
      },
      {
        hr: 'Dubrovnik je krajnji slučaj, ali nije usamljen. Splitski Varoš i Dioklecijanova palača slijede istim putem s desetak godina zakašnjenja; Rovinj, Hvar i Korčula već su prošli točku na kojoj se u starom gradu zimi može kupiti kruh. Obrazac je isti svugdje i nije hrvatski izum — Venecija, Barcelona i Lisabon prošli su ga prije nas — ali je u Hrvatskoj brži, jer je gotovo svaki stan u privatnom vlasništvu, jer je porez na kratkoročni najam simboličan i jer se sve odvija u gradovima koji su premali da bi ga apsorbirali. Kad iz Barcelone ode dvadeset tisuća stanovnika, grad to jedva primijeti. Kad iz Dubrovnika ode četiri tisuće, grad nestane.',
        en: "Dubrovnik is the extreme case, but it is not alone. Split's Varoš and Diocletian's Palace are following the same path about ten years behind; Rovinj, Hvar and Korčula have already passed the point at which bread can be bought in the old town in winter. The pattern is the same everywhere and is not a Croatian invention — Venice, Barcelona and Lisbon went through it before us — but in Croatia it is faster, because almost every flat is privately owned, because tax on short-term letting is symbolic, and because it all happens in towns too small to absorb it. When twenty thousand residents leave Barcelona, the city barely notices. When four thousand leave Dubrovnik, the city vanishes.",
      },
      {
        hr: 'Argument protiv regulacije treba iznijeti pošteno, jer nije glup. Stan je privatno vlasništvo; vlasnik ima pravo s njim raditi što želi, unutar zakona; ako mu turisti plaćaju više nego podstanari, zabraniti mu da iznajmljuje turistima znači oduzeti mu dio vrijednosti njegove imovine bez naknade. Uz to, mnogi vlasnici nisu investitori nego obitelji koje su stan naslijedile i od njega žive — umirovljenici čija mirovina ne pokriva ni komunalne troškove u gradu u kojem je sve skuplje. Reći im da moraju iznajmljivati jeftinije, i to nekome tko ostaje cijelu godinu, zvuči kao da se od najslabijih traži da subvencioniraju grad koji ih je već zaboravio.',
        en: 'The argument against regulation should be stated fairly, because it is not stupid. A flat is private property; the owner has the right to do with it what he wishes, within the law; if tourists pay him more than tenants, forbidding him to let to tourists means taking part of the value of his property without compensation. Moreover, many owners are not investors but families who inherited the flat and live off it — pensioners whose pension does not cover even the utility bills in a town where everything is more expensive. Telling them they must let more cheaply, and to someone who stays all year, sounds like asking the weakest to subsidise a city that has already forgotten them.',
      },
      {
        hr: 'Argument je ozbiljan i ipak promašuje, jer počiva na pretpostavci da je grad zbroj svojih vlasnika. Nije. Grad je i škola koja se zatvara jer nema djece, i ljekarna koja radi samo ljeti, i župa bez župljana, i susjedstvo u kojem nitko ne zna tko je umro. Vrijednost stana u Dubrovniku ne stvara vlasnik; stvara je grad oko njega — zidine, ulice, ime — koji su gradili i održavali svi, stoljećima, iz zajedničkog novca. Kad vlasnik tu vrijednost pretvori u noćenja, on privatizira nešto što nije njegovo i ostavlja trošak onima koji ostaju. To se zove eksternalija, i regulirati je nije napad na vlasništvo nego njegova definicija: pravo na stan nikad nije uključivalo pravo na grad.',
        en: 'The argument is serious and yet misses, because it rests on the assumption that a city is the sum of its owners. It is not. A city is also the school that closes because there are no children, the pharmacy that is open only in summer, the parish without parishioners, the neighbourhood in which nobody knows who has died. The value of a flat in Dubrovnik is not created by the owner; it is created by the city around it — the walls, the streets, the name — which everyone built and maintained, for centuries, from common money. When the owner turns that value into overnight stays, he privatises something that is not his and leaves the cost to those who remain. That is called an externality, and regulating it is not an attack on property but its definition: the right to a flat never included the right to the city.',
      },
      {
        hr: 'Što regulacija konkretno znači, o tome europski gradovi već imaju iskustva, i ona su poučna u obje smjera. Berlin je 2016. zabranio kratkoročni najam cijelih stanova i nakon dvije godine zabranu ublažio, jer se pokazala neprovedivom: stanovi su se iznajmljivali dalje, samo bez računa. Amsterdam je ograničio broj noći godišnje na trideset i ograničenje provodi digitalno, preko platformi koje moraju blokirati oglas nakon tridesete noći — i to djeluje. Barcelona je najavila da do 2028. ukida sve dozvole za turistički najam u stanovima, što je najradikalniji potez i o kojemu se još ne može suditi. Zajednički je nazivnik: mjere koje ovise o inspektoru ne djeluju, a mjere koje ovise o platformi djeluju.',
        en: 'What regulation concretely means is something European cities already have experience of, and it is instructive in both directions. Berlin banned the short-term letting of whole flats in 2016 and after two years softened the ban, because it proved unenforceable: the flats went on being let, only without receipts. Amsterdam limited the number of nights a year to thirty and enforces the limit digitally, through the platforms, which must block a listing after the thirtieth night — and that works. Barcelona has announced that by 2028 it will withdraw all permits for tourist letting in flats, the most radical move and one that cannot yet be judged. The common denominator: measures that depend on an inspector do not work, and measures that depend on the platform do.',
      },
      {
        hr: 'Hrvatska ima jednu prednost koju nema nijedan od tih gradova: problem je, uz sve, još rješiv. U Dubrovniku živi tisuću i petsto ljudi, ne petnaest. Split još ima škole u središtu. Rovinj još ima pekarnicu koja radi zimi. Ono što je potrebno nije zabrana — zabrane se u Hrvatskoj obilaze brže nego što se donose — nego tri stvari koje su dosadne i provedive: porez na kratkoročni najam koji raste s brojem noćenja, umjesto paušala koji ga nagrađuje; obveza platformama da primjenjuju gradske kvote, kao u Amsterdamu; i olakšice, ne kazne, za vlasnike koji stan iznajme stanovniku na godinu — jer gospođa s mirovinom od šesto eura nije neprijatelj, nego netko koga treba učiniti saveznikom.',
        en: 'Croatia has one advantage none of those cities has: the problem is, despite everything, still solvable. Fifteen hundred people live in Dubrovnik, not fifteen. Split still has schools in the centre. Rovinj still has a bakery open in winter. What is needed is not a ban — bans are circumvented in Croatia faster than they are passed — but three things that are dull and enforceable: a tax on short-term letting that rises with the number of nights, instead of a flat rate that rewards it; an obligation on the platforms to apply city quotas, as in Amsterdam; and relief, not penalties, for owners who let a flat to a resident for a year — because the lady with a pension of six hundred euros is not the enemy, but someone to be made an ally.',
      },
      {
        hr: 'Znam i posljednji prigovor: da će grad bez turista biti siromašan. Neće biti bez turista — bit će s manje turista koji plaćaju više, u gradu koji zimi ne izgleda kao napuštena filmska kulisa. Venecija je pokušala imati sve — svaki stan turistima, svaki turist u gradu — i danas ima pedeset tisuća stanovnika i trideset milijuna posjetitelja godišnje, što joj nitko ne zavidi, uključujući Venecijance. Grad koji spava nije grad koji se odmara. To je grad koji je prodao san i sada ga iznajmljuje po noći.',
        en: 'I know the last objection too: that a city without tourists will be poor. It will not be without tourists — it will have fewer tourists who pay more, in a city that in winter does not look like an abandoned film set. Venice tried to have everything — every flat for tourists, every tourist in the city — and today has fifty thousand residents and thirty million visitors a year, which nobody envies, including the Venetians. A city that sleeps is not a city that is resting. It is a city that has sold its dream and now lets it out by the night.',
      },
      {
        hr: 'U sedam ujutro, dok se u stotinu prozora pali svjetlo, u Dubrovniku se još može vidjeti što je grad: čistač koji zna imena svih pasa u ulici, pekar koji ostavlja kruh na prozoru gospođi koja više ne silazi, dječak s torbom koji trči na jedini školski autobus. To nisu ukrasi. To je ono što zidine čuvaju i zbog čega se turisti dolaze fotografirati — ne znajući da fotografiraju nešto što nestaje. Politika koja to ne vidi nije neutralna. Ona bira, samo ne priznaje.',
        en: 'At seven in the morning, while the light comes on in a hundred windows, one can still see in Dubrovnik what a city is: the street cleaner who knows the names of all the dogs in the street, the baker who leaves bread on the windowsill for the lady who no longer comes down, the boy with a schoolbag running for the only school bus. These are not ornaments. They are what the walls protect and what the tourists come to photograph — without knowing that they are photographing something that is disappearing. A policy that does not see this is not neutral. It chooses, only it does not admit it.',
      },
    ],
    vocabulary: [
      {
        hr: 'stara jezgra',
        en: 'old core, historic centre',
        ex: 'U staroj jezgri stalno živi 1500 ljudi.',
      },
      {
        hr: 'kratkoročni najam',
        en: 'short-term letting',
        ex: 'Porez na kratkoročni najam simboličan je.',
      },
      { hr: 'apsorbirati', en: 'to absorb', ex: 'Gradovi su premali da bi apsorbirali promjenu.' },
      { hr: 'bez naknade', en: 'without compensation', ex: 'Oduzeti dio vrijednosti bez naknade.' },
      {
        hr: 'subvencionirati',
        en: 'to subsidise',
        ex: 'Traži se od najslabijih da subvencioniraju grad.',
      },
      {
        hr: 'počivati na',
        en: 'to rest on (an assumption)',
        ex: 'Argument počiva na krivoj pretpostavci.',
      },
      { hr: 'župa / župljanin', en: 'parish / parishioner', ex: 'Župa bez župljana.' },
      { hr: 'neprovediv', en: 'unenforceable', ex: 'Zabrana se pokazala neprovedivom.' },
      {
        hr: 'zajednički nazivnik',
        en: 'common denominator',
        ex: 'Zajednički je nazivnik da mjere ovise o platformi.',
      },
      {
        hr: 'obilaziti (zakon)',
        en: 'to circumvent (a law)',
        ex: 'Zabrane se obilaze brže nego što se donose.',
      },
    ],
    quiz: [
      {
        q: 'Zašto autor kaže da stanovi u Dubrovniku "spavaju"?',
        qEn: 'Why does the author say the flats in Dubrovnik "sleep"?',
        opts: [
          'Jer su stanari umorni od turista',
          'Jer u većini nitko stalno ne živi — iznajmljuju se turistima po noći',
          'Jer se svjetla gase u ponoć',
          'Jer grad zimi zatvara stare zgrade',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je, prema autoru, proces u Hrvatskoj brži nego u Barceloni ili Veneciji?',
        qEn: 'According to the author, why is the process faster in Croatia than in Barcelona or Venice?',
        opts: [
          'Jer hrvatski gradovi imaju više turista',
          'Jer je gotovo sve u privatnom vlasništvu, porez je simboličan i gradovi su premali da bi to apsorbirali',
          'Jer Hrvatska nema zakone o vlasništvu',
          'Jer Hrvati više vole apartmane',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor pobija argument da je regulacija napad na vlasništvo?',
        qEn: 'How does the author counter the argument that regulation is an attack on property?',
        opts: [
          'Tvrdi da vlasništvo nije važno',
          'Tvrdi da vrijednost stana stvara grad, ne vlasnik, pa pravo na stan nikad nije uključivalo pravo na grad',
          'Predlaže da grad otkupi sve stanove',
          'Kaže da vlasnici nemaju prava',
        ],
        correct: 1,
      },
      {
        q: 'Koja je lekcija iz iskustva Berlina i Amsterdama?',
        qEn: 'What is the lesson from the experience of Berlin and Amsterdam?',
        opts: [
          'Mjere koje ovise o inspektoru ne djeluju, a one koje provode platforme djeluju',
          'Zabrane uvijek djeluju',
          'Kratkoročni najam ne može se regulirati',
          'Treba slijediti Barcelonu bez odgode',
        ],
        correct: 0,
      },
      {
        q: 'Što autor misli rečenicom da je grad "prodao san i sada ga iznajmljuje po noći"?',
        qEn: 'What does the author mean by saying the city "has sold its dream and now lets it out by the night"?',
        opts: [
          'Da su hoteli preskupi',
          'Da je grad ono što ga je činilo gradom pretvorio u turističku robu',
          'Da stanovnici ne spavaju zbog buke',
          'Da su snovi turista važniji od snova stanovnika',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_skola_bez_zvona',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🔔',
    title: 'Škola bez zvona',
    titleEn: 'A School Without a Bell',
    duration: 15,
    focus: 'Education reform • Evaluating evidence • Rhetorical questions and answers',
    intro:
      'Every Croatian government announces an education reform and every one of them stalls. An opinion piece on why — and on the one change that would matter more than any curriculum, which nobody proposes because it cannot be announced.',
    paragraphs: [
      {
        hr: 'Reforma školstva u Hrvatskoj ima svojstvo godišnjih doba: vraća se redovito, svaki put s novim imenom i istim obećanjima. U posljednjih dvadeset godina bilo ih je barem pet — kurikularna, cjelovita, eksperimentalna, digitalna, još jedna kurikularna — i svaka je na kraju ostavila nešto: nove udžbenike, tablete, radne listove, sat informatike. Nijedna nije ostavila ono što je obećala, a to je škola u kojoj se uči drugačije. Pitanje koje ovaj tekst postavlja nije zašto reforme ne uspijevaju, jer je na to odgovoreno stotinu puta, nego zašto uvijek reformiramo isto — sadržaj — a nikad ono što bi trebalo: oblik.',
        en: 'School reform in Croatia has the quality of the seasons: it returns regularly, each time with a new name and the same promises. In the last twenty years there have been at least five — curricular, comprehensive, experimental, digital, another curricular — and each one left something in the end: new textbooks, tablets, worksheets, a computing lesson. None left what it promised, which is a school where learning happens differently. The question this text asks is not why reforms fail, because that has been answered a hundred times, but why we always reform the same thing — content — and never what ought to be reformed: form.',
      },
      {
        hr: 'Oblik škole u Hrvatskoj gotovo se nije promijenio od 1950-ih. Sat traje četrdeset i pet minuta jer je toliko trajao kad su ga određivali ljudi koji nisu imali pojma o pažnji dvanaestogodišnjaka. Zvono zvoni svakih četrdeset i pet minuta i prekida što god se događalo, uključujući trenutke u kojima je netko nešto shvatio. Razredi imaju trideset učenika jer je toliko klupa stalo u učionicu izgrađenu 1960. Ocjene idu od jedan do pet jer su tako išle u Austro-Ugarskoj. Nastavnik stoji ispred, učenici sjede u redovima, i taj se raspored — koji je, kad se pravo pogleda, raspored tvornice — nije mijenjao ni pod jednom reformom, jer ga nijedna reforma nije ni dotaknula.',
        en: 'The form of the school in Croatia has hardly changed since the 1950s. A lesson lasts forty-five minutes because that is how long it lasted when it was set by people who had no idea about the attention span of a twelve-year-old. The bell rings every forty-five minutes and interrupts whatever was happening, including the moments when someone understood something. Classes have thirty pupils because that is how many desks fitted into a classroom built in 1960. Grades run from one to five because that is how they ran in Austria-Hungary. The teacher stands in front, the pupils sit in rows, and that arrangement — which is, if one looks at it properly, the arrangement of a factory — has not changed under any reform, because no reform has even touched it.',
      },
      {
        hr: 'Zašto se sadržaj reformira, a oblik ne? Odgovor je neugodan, ali jednostavan: sadržaj se može najaviti. Novi kurikulum ima naslov, datum i ministra koji ga predstavlja. Može se tiskati, dijeliti, fotografirati. Oblik se ne može najaviti, jer se sastoji od tisuću malih odluka koje donose ravnatelji i nastavnici u tisuću škola, svaki dan, bez kamere. Promjena oblika ne daje naslov u vijestima nego, u najboljem slučaju, deset godina kasnije, generaciju koja drugačije misli. Nijedan ministar nije na vlasti deset godina. Zato svaki reformira ono što se vidi.',
        en: 'Why is content reformed and form not? The answer is uncomfortable but simple: content can be announced. A new curriculum has a title, a date and a minister presenting it. It can be printed, distributed, photographed. Form cannot be announced, because it consists of a thousand small decisions made by head teachers and teachers in a thousand schools, every day, without a camera. Changing the form yields no headline but, at best, ten years later, a generation that thinks differently. No minister is in office for ten years. So each reforms what can be seen.',
      },
      {
        hr: 'Postoje, međutim, škole u Hrvatskoj koje su oblik promijenile same, bez reforme i uglavnom bez dopuštenja. Poznajem osnovnu školu u Istri koja je ukinula zvono — nastavnici sami odlučuju kad završava sat — i u kojoj se pokazalo da se ništa nije raspalo, nego da su satovi postali dulji kad je trebalo i kraći kad nije. Poznajem gimnaziju u Zagrebu u kojoj se dva predmeta predaju zajedno, povijest i književnost, u dvosatu, s dva nastavnika, i u kojoj učenici na državnoj maturi prolaze bolje iz oba. Poznajem seosku školu u Slavoniji u kojoj se, iz nužde, u istoj učionici uče djeca dviju dobi, i u kojoj su nastavnici otkrili da stariji koji uče mlađe uče više od obojih. Nijedna od tih škola nije čekala reformu. Sve tri riskiraju da ih sljedeća reforma vrati na staro.',
        en: 'There are, however, schools in Croatia that have changed the form themselves, without a reform and mostly without permission. I know a primary school in Istria that abolished the bell — the teachers decide themselves when a lesson ends — and where it turned out that nothing fell apart, but that lessons became longer when needed and shorter when not. I know a grammar school in Zagreb where two subjects are taught together, history and literature, in a double period, with two teachers, and where pupils do better in both at the national final exam. I know a village school in Slavonia where, out of necessity, children of two ages learn in the same classroom, and where the teachers discovered that the older ones teaching the younger learn more than either. None of these schools waited for a reform. All three risk being returned to the old way by the next one.',
      },
      {
        hr: 'Tu dolazimo do protuargumenta, koji zaslužuje pažnju jer ga iznose ljudi koji školu poznaju. Glasi: oblik se ne može propisati odozgo, a ako se ne propiše, promijenit će ga samo dobre škole, koje bi bile dobre i bez toga, pa će razlika između dobrih i loših škola postati veća. Reforma sadržaja barem svima daje isto. To je ozbiljan argument, i točan je u opisu, a kriv u zaključku. Točno je da će slobodu prvo iskoristiti najbolji. Ali reforme koje "svima daju isto" dosad su svima dale isto lošu školu, s tabletima. Jednakost u lošemu nije pravednost. Pravednost bi bila da najlošija škola ima pravo i sredstva da postane kao najbolja — a to znači sloboda plus potpora, ne propis.',
        en: 'Here we come to the counter-argument, which deserves attention because it is put forward by people who know schools. It goes: form cannot be prescribed from above, and if it is not prescribed, only good schools will change it, which would have been good anyway, so the gap between good and bad schools will widen. A reform of content at least gives everyone the same. That is a serious argument, and it is right in its description and wrong in its conclusion. It is true that the best will be the first to use freedom. But reforms that "give everyone the same" have so far given everyone the same bad school, with tablets. Equality in what is bad is not fairness. Fairness would be for the worst school to have the right and the means to become like the best — and that means freedom plus support, not prescription.',
      },
      {
        hr: 'Što bi, dakle, značila reforma oblika? Ne novi zakon, nego ukidanje nekoliko starih: propisa o trajanju sata, o broju učenika, o tome da se predmet mora predavati odvojeno od drugog predmeta. Zatim, novac koji ide školi, a ne programu — dovoljno da ravnatelj može zaposliti drugog nastavnika za dvosat, a ne da mora čekati natječaj ministarstva. Zatim, vrednovanje koje mjeri ono što škola tvrdi da radi, a ne ono što je lako mjeriti. I zatim — najteže — deset godina bez nove reforme, kako bi se vidjelo što je od toga djelovalo. Nijedna od tih stvari nema naslov. Sve zajedno bile bi najveća promjena u hrvatskoj školi od uvođenja obveznog osmogodišnjeg obrazovanja.',
        en: 'What, then, would a reform of form mean? Not a new law, but the repeal of several old ones: regulations on the length of a lesson, on the number of pupils, on a subject having to be taught separately from another subject. Then, money that goes to the school and not to a programme — enough for a head teacher to hire a second teacher for a double period rather than wait for a ministry tender. Then, evaluation that measures what the school claims to do, not what is easy to measure. And then — the hardest — ten years without a new reform, so that one can see what worked. None of these things has a headline. Together they would be the biggest change in Croatian schooling since the introduction of compulsory eight-year education.',
      },
      {
        hr: 'Bit će rečeno da ovakav prijedlog precjenjuje škole i nastavnike — da većina ne želi slobodu nego uputu, jer je uputa sigurnija. Dio te tvrdnje je točan i treba ga reći: sloboda je teret, a nastavnik s dvadeset i šest sati tjedno, s tri razreda po trideset učenika i s plaćom koju ne treba spominjati, ima pravo na umor. Ali ta se tvrdnja koristi kao razlog da se ništa ne mijenja, a trebala bi se koristiti kao razlog da se mijenja redoslijed: prvo manje sati i manje učenika, pa onda sloboda. Nastavnik kojemu se prvo olakša, a zatim vjeruje, uzet će slobodu. Nastavnik kojemu se daje sloboda kao dodatni posao, s pravom je odbija.',
        en: 'It will be said that such a proposal overestimates schools and teachers — that most do not want freedom but instruction, because instruction is safer. Part of that claim is true and should be said: freedom is a burden, and a teacher with twenty-six hours a week, three classes of thirty pupils and a salary that need not be mentioned has a right to be tired. But that claim is used as a reason to change nothing, when it should be used as a reason to change the order: first fewer hours and fewer pupils, then freedom. A teacher who is first relieved and then trusted will take the freedom. A teacher who is given freedom as extra work rightly refuses it.',
      },
      {
        hr: 'Škola u Istri koja je ukinula zvono ima na zidu ulaza natpis koji je napisao jedan učenik: "Ovdje sat završava kad nešto naučiš." Rečenica je naivna, netočna i bolja od svake reforme koju sam pročitao. Naivna, jer se ne može provesti u tisuću škola dekretom. Netočna, jer sat ponekad mora završiti i prije. Bolja, jer opisuje školu iz perspektive onoga koji uči, a ne onoga koji propisuje. Reforma koja bi tu perspektivu uzela ozbiljno ne bi imala naslov, ni ministra, ni datum. Imala bi samo škole koje se, jedna po jedna, prestaju bojati tišine nakon zvona koje više ne zvoni.',
        en: 'The school in Istria that abolished the bell has on the wall of the entrance a sign written by a pupil: "Here the lesson ends when you have learned something." The sentence is naive, inaccurate and better than any reform I have read. Naive, because it cannot be implemented in a thousand schools by decree. Inaccurate, because a lesson sometimes has to end earlier too. Better, because it describes the school from the perspective of the one who learns, not the one who prescribes. A reform that took that perspective seriously would have no title, no minister and no date. It would have only schools which, one by one, stop being afraid of the silence after a bell that no longer rings.',
      },
    ],
    vocabulary: [
      { hr: 'kurikulum', en: 'curriculum', ex: 'Novi kurikulum ima naslov, datum i ministra.' },
      {
        hr: 'raspored',
        en: 'arrangement, timetable, layout',
        ex: 'Raspored učionice je raspored tvornice.',
      },
      {
        hr: 'dvosat',
        en: 'double period (lesson)',
        ex: 'Povijest i književnost predaju se u dvosatu.',
      },
      {
        hr: 'državna matura',
        en: 'national final (school-leaving) exam',
        ex: 'Učenici na državnoj maturi prolaze bolje.',
      },
      { hr: 'propisati', en: 'to prescribe, regulate', ex: 'Oblik se ne može propisati odozgo.' },
      { hr: 'potpora', en: 'support', ex: 'Sloboda plus potpora, ne propis.' },
      {
        hr: 'vrednovanje',
        en: 'evaluation, assessment',
        ex: 'Vrednovanje koje mjeri ono što škola tvrdi da radi.',
      },
      {
        hr: 'natječaj',
        en: 'public tender / competition',
        ex: 'Ravnatelj ne bi morao čekati natječaj ministarstva.',
      },
      { hr: 'precijeniti', en: 'to overestimate', ex: 'Prijedlog možda precjenjuje nastavnike.' },
      { hr: 'dekret', en: 'decree', ex: 'Ne može se provesti dekretom.' },
    ],
    quiz: [
      {
        q: 'Što je, prema autoru, temeljna pogreška hrvatskih reforma školstva?',
        qEn: 'According to the author, what is the fundamental mistake of Croatian school reforms?',
        opts: [
          'Da mijenjaju oblik škole umjesto sadržaja',
          'Da uvijek reformiraju sadržaj, a nikad oblik — sat, zvono, raspored učionice',
          'Da ne uvode dovoljno tableta',
          'Da traju predugo',
        ],
        correct: 1,
      },
      {
        q: 'Zašto se sadržaj reformira, a oblik ne?',
        qEn: 'Why is content reformed and form not?',
        opts: [
          'Jer je oblik zakonom zabranjeno mijenjati',
          'Jer se sadržaj može najaviti i fotografirati, a oblik su tisuće malih odluka bez kamere',
          'Jer nastavnici ne žele mijenjati sadržaj',
          'Jer je oblik već savršen',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor odgovara na argument da će slobodu iskoristiti samo dobre škole?',
        qEn: 'How does the author answer the argument that only good schools will use freedom?',
        opts: [
          'Tvrdi da to nije istina',
          'Predlaže da se loše škole zatvore',
          'Slaže se s opisom, ali kaže da je jednakost u lošemu nepravedna; pravednost je sloboda plus potpora',
          'Kaže da sloboda nije važna',
        ],
        correct: 2,
      },
      {
        q: 'Koji redoslijed promjena autor predlaže za nastavnike?',
        qEn: 'What order of changes does the author propose for teachers?',
        opts: [
          'Prvo sloboda, zatim manje sati',
          'Prvo manje sati i učenika, zatim sloboda',
          'Prvo viša plaća, zatim više sati',
          'Prvo novi kurikulum, zatim novi udžbenici',
        ],
        correct: 1,
      },
      {
        q: 'Zašto autor učenikov natpis smatra "boljim od svake reforme"?',
        qEn: 'Why does the author consider the pupil\'s sign "better than any reform"?',
        opts: [
          'Jer je gramatički savršen',
          'Jer opisuje školu iz perspektive onoga koji uči, a ne onoga koji propisuje',
          'Jer ga je moguće provesti dekretom',
          'Jer ga je napisao ministar',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_unija_1',
    level: 'C1',
    kind: 'serial',
    series: { id: 'unija', part: 1, of: 2 },
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🇪🇺',
    title: 'Što nam je Unija donijela (1/2)',
    titleEn: 'What the Union Has Brought Us (1/2)',
    duration: 15,
    focus: 'Two-part analysis • Balance sheet structure • Economic and legal vocabulary',
    intro:
      'Part 1 of 2. Croatia joined the European Union in July 2013. This first part draws up the balance sheet everyone agrees on — money, borders, the euro, emigration — and asks what the figures actually show. Part 2 turns to what cannot be counted.',
    paragraphs: [
      {
        hr: 'Prvoga srpnja 2013. Hrvatska je postala dvadeset i osma članica Europske unije, i te je noći na Trgu bana Jelačića bilo više vatrometa nego uvjerenja. Ankete su pokazivale da članstvo podržava jedva natpolovična većina; referendum godinu prije prošao je s odazivom od četrdeset i četiri posto. Ulazak je dočekan s umorom prije nego s oduševljenjem, kao ispit koji se polagao predugo. Više od desetljeća kasnije pitanje "što nam je Unija donijela" postavlja se drugačijim tonom — ne više kao pitanje treba li ući, nego kao pitanje jesmo li dobro iskoristili to što smo ušli. Ovaj tekst pokušava na njega odgovoriti u dva dijela: prvo brojkama, zatim onim što brojke ne vide.',
        en: 'On the first of July 2013 Croatia became the twenty-eighth member of the European Union, and that night on Ban Jelačić Square there were more fireworks than conviction. Polls showed that barely a slim majority supported membership; the referendum a year earlier had passed with a turnout of forty-four per cent. Accession was greeted with fatigue rather than enthusiasm, like an exam that had taken too long to sit. More than a decade later the question "what has the Union brought us" is asked in a different tone — no longer as a question of whether to join, but of whether we have used our membership well. This text tries to answer it in two parts: first with figures, then with what the figures do not see.',
      },
      {
        hr: 'Počnimo s novcem, jer se o njemu najviše govori i najmanje razumije. Hrvatska je od ulaska iz europskih fondova primila znatno više nego što je u proračun Unije uplatila — neto korist procjenjuje se na više od deset milijardi eura, što je otprilike godišnji državni proračun. Taj je novac vidljiv: u obnovljenim željeznicama, pročišćivačima otpadnih voda, vrtićima, znanstvenoj opremi i, u posljednje vrijeme, u obnovi Zagreba i Banovine nakon potresa. Manje je vidljivo ono što ekonomisti zovu apsorpcijom: Hrvatska je godinama bila među zemljama koje najsporije troše dodijeljeni novac, jer nije imala dovoljno ljudi koji znaju napisati projekt, provesti natječaj i pravdati trošak. Novac je stajao na računu dok su ceste čekale.',
        en: "Let us begin with money, because it is talked about most and understood least. Since accession Croatia has received considerably more from European funds than it has paid into the Union's budget — the net benefit is estimated at more than ten billion euros, roughly one annual state budget. That money is visible: in renovated railways, wastewater treatment plants, nurseries, scientific equipment and, lately, in the reconstruction of Zagreb and Banovina after the earthquakes. Less visible is what economists call absorption: for years Croatia was among the countries slowest to spend the money allocated to it, because it did not have enough people who knew how to write a project, run a tender and justify an expense. The money sat in the account while the roads waited.",
      },
      {
        hr: 'Druga je brojka granica — ili njezina odsutnost. Ulaskom u schengenski prostor 2023. Hrvatska je ukinula kontrole na granicama sa Slovenijom i Mađarskom, a istodobno uvela euro. Dva su događaja u jednoj noći promijenila svakodnevicu više nego deset godina članstva prije toga: nestali su redovi na Bregani, nestalo je preračunavanje kuna u eure na svakom putovanju, a s njima i osjećaj da je Hrvatska "gotovo" Europa. Gospodarski učinak mjeri se skromnije nego što se osjećaj sugerira — nekoliko desetinki postotka rasta, prema procjenama Narodne banke — ali psihološki učinak, koji se ne može mjeriti, nije zato manje stvaran.',
        en: 'The second figure is the border — or its absence. By entering the Schengen area in 2023 Croatia abolished controls on its borders with Slovenia and Hungary, and at the same time introduced the euro. Two events in one night changed everyday life more than ten years of membership before them: the queues at Bregana disappeared, the conversion of kunas into euros on every trip disappeared, and with them the feeling that Croatia was "almost" Europe. The economic effect is measured more modestly than the feeling suggests — a few tenths of a percentage point of growth, according to the National Bank\'s estimates — but the psychological effect, which cannot be measured, is not for that reason less real.',
      },
      {
        hr: 'Treća brojka nije dobra, i o njoj se govori najviše: iseljavanje. U pet godina nakon ulaska iz Hrvatske je, prema procjenama, otišlo između dvjesto i tristo tisuća ljudi, uglavnom u Njemačku, Irsku i Austriju, uglavnom mladih i uglavnom zaposlenih. Uzročna veza s članstvom je stvarna — otvorilo je tržišta rada — ali je jednostavnija nego što se prikazuje. Ljudi nisu otišli zato što su mogli, nego zato što su htjeli, a mogli su. Isti su ljudi deset godina prije odlazili s radnim vizama i na crno; Unija im je odlazak učinila lakšim i, što se rjeđe kaže, povratak mogućim. Podaci o povratnicima, koji se tek posljednjih godina počinju prikupljati, pokazuju da se vraća oko trećine — s iskustvom, jezikom i, najčešće, s prigovorima na to kako se stvari rade doma.',
        en: 'The third figure is not good, and it is talked about most: emigration. In the five years after accession, according to estimates, between two and three hundred thousand people left Croatia, mostly for Germany, Ireland and Austria, mostly young and mostly employed. The causal link with membership is real — it opened labour markets — but it is simpler than it is presented. People did not leave because they could, but because they wanted to, and could. The same people ten years earlier had left with work visas and off the books; the Union made leaving easier for them and, something less often said, return possible. Data on returnees, which have only begun to be collected in recent years, show that about a third come back — with experience, a language and, most often, complaints about how things are done at home.',
      },
      {
        hr: 'Četvrta brojka govori o pravu, i najzanimljivija je jer se najmanje spominje. Od ulaska u Uniju hrvatski građani i tvrtke pred hrvatskim sudovima mogu se pozivati na europsko pravo, a kad sudovi u tome zakažu, na Sud Europske unije u Luxembourgu. To zvuči apstraktno dok se ne pogledaju slučajevi: potrošači koji su dobili natrag novac od banaka zbog nepoštenih ugovora o kreditima u švicarskim francima pozivali su se na europske direktive; radnici koji su izborili plaćeni prekovremeni rad pozivali su se na europsku sudsku praksu; građani koji su od države dobili podatke koje im je odbijala dati pozivali su se na europsko pravo o pristupu informacijama. Unija u tim slučajevima nije bila bruxelleska birokracija, nego viša instanca za ljude čije su niže instance zakazale.',
        en: 'The fourth figure concerns law, and it is the most interesting because it is least mentioned. Since joining the Union, Croatian citizens and companies can invoke European law before Croatian courts, and when the courts fail in that, the Court of Justice of the European Union in Luxembourg. That sounds abstract until one looks at the cases: consumers who got money back from banks over unfair Swiss-franc loan contracts invoked European directives; workers who won paid overtime invoked European case law; citizens who obtained from the state information it had refused them invoked European law on access to information. In those cases the Union was not Brussels bureaucracy but a higher instance for people whose lower instances had failed.',
      },
      {
        hr: 'Peta brojka je politička i najspornija: koliko je Hrvatska od ulaska postala "europskija" u smislu koji su pristupni pregovori podrazumijevali — vladavina prava, neovisno pravosuđe, borba protiv korupcije. Ovdje podaci nisu ohrabrujući. Na ljestvicama percepcije korupcije Hrvatska je od 2013. stagnirala ili blago padala; povjerenje u pravosuđe među najnižima je u Uniji; a nekoliko se visokih dužnosnika našlo pod istragom bez posljedica koje bi netko izvan zemlje smatrao proporcionalnima. Unija na to ima ograničen utjecaj — poluge koje je imala prije ulaska, kad se svako poglavlje pregovora moglo zaustaviti, nakon ulaska više nema. To je poznato kao paradoks pristupanja: zemlja se najviše mijenja dok čeka na vratima, a najmanje kad prođe kroz njih.',
        en: 'The fifth figure is political and the most contested: how much Croatia has become "more European" since accession in the sense the accession negotiations implied — rule of law, an independent judiciary, the fight against corruption. Here the data are not encouraging. On corruption-perception indices Croatia has stagnated or slightly declined since 2013; trust in the judiciary is among the lowest in the Union; and several senior officials have found themselves under investigation without consequences anyone outside the country would consider proportionate. The Union has limited influence on this — the levers it had before accession, when every negotiating chapter could be halted, it no longer has after accession. This is known as the accession paradox: a country changes most while it waits at the door, and least once it has passed through it.',
      },
      {
        hr: 'Zbrojimo, koliko se zbrojiti može. Novac: jasno pozitivno, uz trošak sporog trošenja. Granice i euro: pozitivno, više u životu nego u brojkama. Iseljavanje: negativno, ali manje jednoznačno nego što se čini, i s povratkom koji tek počinje. Pravo: pozitivno i podcijenjeno. Institucije: neutralno do negativno, s upozorenjem da se to ne može pripisati Uniji nego onima koji su njezine zahtjeve doživjeli kao ispit koji treba položiti, a ne kao standard koji treba održati. Ako bi se ta bilanca morala sažeti u rečenicu, glasila bi: Unija je Hrvatskoj dala alate i novac, a Hrvatska ih je iskoristila onoliko koliko je htjela, što je manje nego što je mogla i više nego što priznaje.',
        en: 'Let us add up what can be added up. Money: clearly positive, with the cost of slow spending. Borders and the euro: positive, more in life than in figures. Emigration: negative, but less unambiguous than it seems, and with a return that is only beginning. Law: positive and underrated. Institutions: neutral to negative, with the caveat that this cannot be attributed to the Union but to those who experienced its demands as an exam to be passed rather than a standard to be maintained. If that balance sheet had to be summed up in a sentence, it would go: the Union gave Croatia tools and money, and Croatia used them as much as it wanted to, which is less than it could have and more than it admits.',
      },
      {
        hr: 'No bilanca u eurima i postocima nije cijeli odgovor, i to je razlog za drugi dio. Članstvo u Uniji promijenilo je i stvari koje se ne knjiže: kako mladi Hrvati zamišljaju vlastitu budućnost, kako se o Hrvatskoj govori vani, što znači biti "mala zemlja" u zajednici u kojoj su mnoge zemlje male, i što se dogodilo s osjećajem — starim koliko i hrvatska politika — da nam netko izvana treba reći tko smo. O tome u nastavku.',
        en: 'But a balance sheet in euros and percentages is not the whole answer, and that is the reason for a second part. Membership of the Union has also changed things that are not entered in the books: how young Croats imagine their own future, how Croatia is spoken of abroad, what it means to be a "small country" in a community in which many countries are small, and what has happened to the feeling — as old as Croatian politics — that someone from outside needs to tell us who we are. Of that in the next part.',
      },
    ],
    vocabulary: [
      { hr: 'članica', en: 'member state', ex: 'Hrvatska je postala 28. članica Unije.' },
      {
        hr: 'natpolovična većina',
        en: 'simple (absolute) majority',
        ex: 'Članstvo je podržavala jedva natpolovična većina.',
      },
      {
        hr: 'neto korist',
        en: 'net benefit',
        ex: 'Neto korist procjenjuje se na više od deset milijardi eura.',
      },
      {
        hr: 'apsorpcija',
        en: 'absorption (of funds)',
        ex: 'Hrvatska je bila spora u apsorpciji fondova.',
      },
      {
        hr: 'pravdati (trošak)',
        en: 'to justify, account for (an expense)',
        ex: 'Trebaju ljudi koji znaju pravdati trošak.',
      },
      { hr: 'svakodnevica', en: 'everyday life', ex: 'Dva su događaja promijenila svakodnevicu.' },
      { hr: 'povratnik', en: 'returnee', ex: 'Podaci o povratnicima tek se prikupljaju.' },
      {
        hr: 'pozivati se na',
        en: 'to invoke, rely on (law)',
        ex: 'Potrošači su se pozivali na europske direktive.',
      },
      {
        hr: 'instanca',
        en: 'instance (court level)',
        ex: 'Unija je bila viša instanca kad su niže zakazale.',
      },
      { hr: 'poluga', en: 'lever', ex: 'Poluge koje je Unija imala prije ulaska poslije nema.' },
    ],
    quiz: [
      {
        q: 'Kakvo je bilo raspoloženje pri ulasku u Uniju, prema autoru?',
        qEn: 'What was the mood at accession, according to the author?',
        opts: [
          'Sveopće oduševljenje',
          'Umor prije nego oduševljenje — kao ispit koji se polagao predugo',
          'Otvoreno protivljenje većine',
          'Ravnodušnost bez ikakve proslave',
        ],
        correct: 1,
      },
      {
        q: 'Što autor naziva "apsorpcijom" i zašto je bila problem?',
        qEn: 'What does the author call "absorption" and why was it a problem?',
        opts: [
          'Sposobnost da se potroši dodijeljeni novac — nedostajali su ljudi koji znaju napisati i provesti projekt',
          'Uplate u proračun Unije',
          'Broj iseljenih radnika',
          'Brzinu ukidanja granica',
        ],
        correct: 0,
      },
      {
        q: 'Kako autor tumači vezu između članstva i iseljavanja?',
        qEn: 'How does the author interpret the link between membership and emigration?',
        opts: [
          'Članstvo je jedini uzrok iseljavanja',
          'Nema nikakve veze',
          'Članstvo je odlazak učinilo lakšim, ali ljudi su odlazili jer su htjeli — i povratak je postao moguć',
          'Iseljavanje je prestalo ulaskom u Uniju',
        ],
        correct: 2,
      },
      {
        q: 'Što je "paradoks pristupanja"?',
        qEn: 'What is the "accession paradox"?',
        opts: [
          'Da zemlje ulaze u Uniju a da to ne žele',
          'Da se zemlja najviše mijenja dok čeka na vratima, a najmanje kad kroz njih prođe',
          'Da Unija prima samo bogate zemlje',
          'Da se korupcija smanjuje nakon ulaska',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor sažima bilancu u jednoj rečenici?',
        qEn: 'How does the author sum up the balance sheet in one sentence?',
        opts: [
          'Unija je Hrvatskoj sve dala, a Hrvatska sve iskoristila',
          'Unija je Hrvatskoj dala alate i novac, a Hrvatska ih je iskoristila manje nego što je mogla i više nego što priznaje',
          'Unija je Hrvatskoj naštetila',
          'Hrvatska je Uniji dala više nego što je dobila',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_unija_2',
    level: 'C1',
    kind: 'serial',
    series: { id: 'unija', part: 2, of: 2 },
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🧭',
    title: 'Što nam je Unija donijela (2/2)',
    titleEn: 'What the Union Has Brought Us (2/2)',
    duration: 15,
    focus:
      'Two-part analysis • Identity and political culture • Abstract argument with concrete anchors',
    intro:
      'Part 2 of 2. Part 1 drew up the balance sheet in euros and percentages. This part asks what membership changed that cannot be counted: how a small nation sees itself, how it argues, and whether it still needs to be told who it is.',
    paragraphs: [
      {
        hr: 'U prvom sam dijelu zbrojio što se zbrojiti može. Ostalo je ono što se ne knjiži, a što je — tvrdim — važnije od svega u bilanci. Riječ je o promjenama u načinu na koji Hrvatska razmišlja o sebi, i one su suptilne, spore i rijetko se pripisuju Uniji, jer ih nitko nije najavio ni proslavio. Počnimo s najmanjom: s pitanjem kamo mladi ljudi zamišljaju da idu.',
        en: 'In the first part I added up what can be added up. What remains is what is not entered in the books, and which is — I argue — more important than anything on the balance sheet. It concerns changes in the way Croatia thinks about itself, and they are subtle, slow and rarely attributed to the Union, because nobody announced or celebrated them. Let us begin with the smallest: the question of where young people imagine they are going.',
      },
      {
        hr: 'Prije ulaska, "otići van" značilo je prijelaz — iz jednog svijeta u drugi, s vizom, s odlukom, s osjećajem da se nešto ostavlja. Za generaciju koja je odrasla u Uniji, otići u Beč, Dublin ili Utrecht znači otprilike ono što je za njihove roditelje značilo otići u Zagreb: promjenu adrese, ne svijeta. Studij u inozemstvu, koji je nekad bio privilegij, danas je opcija koju razmatra svaki treći maturant. To ima cijenu — o iseljavanju je bilo riječi — ali ima i učinak koji se rjeđe vidi: Hrvatska je prestala biti mjesto koje se ili nikad ne napušta ili se napušta zauvijek. Postala je mjesto iz kojeg se odlazi i u koje se vraća, i taj promet ljudi, ideja i navika mijenja zemlju polaganije od bilo koje reforme, ali trajnije.',
        en: 'Before accession, "going abroad" meant a crossing — from one world to another, with a visa, with a decision, with a sense of leaving something behind. For the generation that grew up in the Union, going to Vienna, Dublin or Utrecht means roughly what going to Zagreb meant for their parents: a change of address, not of world. Study abroad, once a privilege, is today an option every third school-leaver considers. That has a price — emigration has been discussed — but it also has an effect seen less often: Croatia has stopped being a place one either never leaves or leaves for ever. It has become a place one leaves and returns to, and that traffic of people, ideas and habits changes the country more slowly than any reform, but more lastingly.',
      },
      {
        hr: 'Druga je promjena u tome kako se o Hrvatskoj govori vani, i kako se to odražava na način na koji Hrvati govore o sebi. Devedesetih je Hrvatska u stranim medijima bila zemlja rata; dvijetisućitih zemlja tranzicije, što je uljudan izraz za zemlju koja još nije ono što bi trebala biti; danas je zemlja europskog polufinala, Schengena i eura — dosadna na način na koji su dosadne zemlje koje funkcioniraju. To je golem pomak, i nije ga napravila Unija sama, ali ga bez Unije ne bi bilo. Njegov je unutarnji učinak da je hrvatski javni govor izgubio jednu od svojih najstarijih tema: pitanje pripadamo li Europi. Pripadamo, formalno i nepovratno, i o tome se više ne raspravlja. Energija koja je desetljećima išla u to pitanje sada je slobodna za druga — i to je, čini mi se, najveći dobitak koji nitko ne broji.',
        en: 'The second change is in how Croatia is spoken of abroad, and how that reflects on the way Croats speak of themselves. In the nineties Croatia in the foreign media was a country of war; in the two-thousands a country of transition, which is a polite expression for a country that is not yet what it should be; today it is a country of a European semi-final, Schengen and the euro — boring in the way that countries that function are boring. That is an enormous shift, and the Union did not make it alone, but without the Union it would not exist. Its internal effect is that Croatian public discourse has lost one of its oldest themes: the question of whether we belong to Europe. We belong, formally and irreversibly, and it is no longer debated. The energy that for decades went into that question is now free for others — and that, it seems to me, is the greatest gain nobody counts.',
      },
      {
        hr: 'Treća promjena tiče se veličine. Hrvatska je u Uniji mala zemlja — dvadeseta po broju stanovnika od dvadeset i sedam — i ta činjenica, koja se u domaćoj politici često izgovara s prizvukom nemoći, u europskom kontekstu znači nešto drugo. U Uniji je većina zemalja mala. Slovenija, Estonija, Irska, Danska, Luksemburg — zemlje koje su svoju veličinu pretvorile u prednost, u brzinu odlučivanja, u specijalizaciju, u sposobnost da se cijela zemlja dogovori za tjedan dana. Hrvatska tu lekciju još nije naučila, ali je prvi put u povijesti u društvu u kojem je može naučiti od ravnih, a ne od većih. To je razlika između učenja i pokoravanja, i ona je, dugoročno, možda najvažnija stvar koju je Unija donijela zemlji koja se stoljećima definirala prema većima od sebe.',
        en: 'The third change concerns size. Croatia is a small country in the Union — twentieth by population out of twenty-seven — and that fact, which in domestic politics is often pronounced with a tinge of powerlessness, means something else in the European context. In the Union most countries are small. Slovenia, Estonia, Ireland, Denmark, Luxembourg — countries that have turned their size into an advantage, into speed of decision, into specialisation, into the ability of a whole country to agree within a week. Croatia has not yet learned that lesson, but for the first time in its history it is in company where it can learn it from equals rather than from larger powers. That is the difference between learning and submitting, and it is, in the long run, perhaps the most important thing the Union has brought a country that for centuries defined itself in relation to those bigger than itself.',
      },
      {
        hr: 'Sad protuargument, koji zaslužuje ozbiljnost. Kritičari — a ima ih i lijevo i desno — kažu da je Hrvatska u Uniji izgubila ono što je najteže stekla: pravo da sama odlučuje. Zakoni se pišu u Bruxellesu, novac dolazi s uvjetima, poljoprivrednici propadaju zbog konkurencije koju ne mogu pratiti, a "europske vrijednosti" ponekad zvuče kao nova verzija stare navike da nam netko izvana kaže kako živjeti. Dio je toga točan. Suverenitet u Uniji jest podijeljen; to je i definicija Unije. Pitanje je samo s čime se to uspoređuje. Hrvatska izvan Unije ne bi bila suverena onako kako je bila 1995., nego onako kako je mala zemlja bez saveznika između većih susjeda — što je, povijesno gledano, oblik suverenosti koji je Hrvatska najbolje poznavala i najmanje voljela.',
        en: 'Now the counter-argument, which deserves seriousness. Critics — and they exist on both the left and the right — say that in the Union Croatia has lost what it gained most painfully: the right to decide for itself. Laws are written in Brussels, money comes with conditions, farmers go under because of competition they cannot match, and "European values" sometimes sound like a new version of the old habit of someone from outside telling us how to live. Part of that is true. Sovereignty in the Union is shared; that is the very definition of the Union. The only question is what it is compared with. Croatia outside the Union would not be sovereign as it was in 1995, but as a small country without allies between larger neighbours is — which, historically speaking, is the form of sovereignty Croatia has known best and liked least.',
      },
      {
        hr: 'Postoji, ipak, jedan gubitak koji kritičari točno vide, a zagovornici radije prešute: Unija je hrvatskoj politici dala izgovor. Kad nešto ne uspije, "Bruxelles je tražio"; kad nešto treba odgoditi, "čekamo europski okvir"; kad se nešto neugodno mora učiniti, "to su europska pravila". Dio je toga istina, ali je veći dio zamjena za odgovornost. Zemlja koja je desetljećima čekala da joj netko izvana odredi granice, jezik i položaj naučila je u Uniji novu verziju stare navike — da odluke koje ne želi donositi pripisuje nekome drugom. To nije donijela Unija. To smo donijeli mi, i to je, od svega što sam nabrojio, jedina stvar koju možemo promijeniti sami.',
        en: 'There is, nevertheless, one loss that the critics see correctly and the advocates prefer to pass over: the Union has given Croatian politics an excuse. When something fails, "Brussels demanded it"; when something needs postponing, "we are waiting for the European framework"; when something unpleasant has to be done, "those are European rules". Part of that is true, but the larger part is a substitute for responsibility. A country that for decades waited for someone from outside to determine its borders, language and position learned in the Union a new version of an old habit — to attribute the decisions it does not want to make to someone else. That was not brought by the Union. We brought it, and it is, of everything I have listed, the only thing we can change by ourselves.',
      },
      {
        hr: 'Što nam je, dakle, Unija donijela? U prvom dijelu: novac, granice bez redova, euro, pravo na koje se možemo pozvati i institucije koje nismo popravili. U drugom: mlade koji odlaze i vraćaju se, javni govor koji je prestao pitati pripadamo li, društvo malih zemalja od kojih možemo učiti i izgovor koji smo si sami dali. Bilanca je pozitivna, ali nije završena, jer Unija nije odredište nego okvir — a okvir je onoliko dobar koliko ono što se u njega stavi. Trinaest godina poslije, Hrvatska je u Europi. Pitanje koje ostaje nije više što nam je Europa donijela, nego što ćemo mi, sada kad smo tu, donijeti sebi.',
        en: 'What, then, has the Union brought us? In the first part: money, borders without queues, the euro, law we can invoke, and institutions we have not repaired. In the second: young people who leave and return, a public discourse that has stopped asking whether we belong, a company of small countries we can learn from, and an excuse we have given ourselves. The balance is positive, but it is not finished, because the Union is not a destination but a framework — and a framework is only as good as what is put into it. Thirteen years on, Croatia is in Europe. The question that remains is no longer what Europe has brought us, but what we, now that we are here, will bring ourselves.',
      },
    ],
    vocabulary: [
      {
        hr: 'knjižiti',
        en: 'to enter in the books, record (accounting)',
        ex: 'Ostalo je ono što se ne knjiži.',
      },
      { hr: 'pripisati (komu)', en: 'to attribute to', ex: 'Promjene se rijetko pripisuju Uniji.' },
      { hr: 'tranzicija', en: 'transition', ex: 'Dvijetisućitih smo bili zemlja tranzicije.' },
      { hr: 'nepovratno', en: 'irreversibly', ex: 'Pripadamo Europi formalno i nepovratno.' },
      { hr: 'prizvuk', en: 'tinge, overtone', ex: 'Riječ "mala" izgovara se s prizvukom nemoći.' },
      { hr: 'pokoravanje', en: 'submission', ex: 'Razlika između učenja i pokoravanja.' },
      { hr: 'suverenitet', en: 'sovereignty', ex: 'Suverenitet u Uniji jest podijeljen.' },
      { hr: 'saveznik', en: 'ally', ex: 'Mala zemlja bez saveznika između većih susjeda.' },
      { hr: 'izgovor', en: 'excuse', ex: 'Unija je hrvatskoj politici dala izgovor.' },
      { hr: 'okvir', en: 'framework', ex: 'Unija nije odredište nego okvir.' },
    ],
    quiz: [
      {
        q: 'Kako se, prema autoru, promijenilo značenje izraza "otići van"?',
        qEn: 'How, according to the author, has the meaning of "going abroad" changed?',
        opts: [
          'Postalo je nemoguće',
          'Znači isključivo iseljavanje zauvijek',
          'Odnosi se samo na turizam',
          'Od prijelaza u drugi svijet postalo je promjena adrese — odlazi se i vraća',
        ],
        correct: 3,
      },
      {
        q: 'Koji "najveći dobitak koji nitko ne broji" autor navodi?',
        qEn: 'What "greatest gain nobody counts" does the author name?',
        opts: [
          'Europske fondove',
          'Da javni govor više ne pita pripadamo li Europi, pa je energija slobodna za druga pitanja',
          'Ukidanje granica',
          'Uspjeh na nogometnom prvenstvu',
        ],
        correct: 1,
      },
      {
        q: 'Što autor kaže o "malim zemljama" u Uniji?',
        qEn: 'What does the author say about "small countries" in the Union?',
        opts: [
          'Da su nemoćne',
          'Da su većina i da su veličinu pretvorile u prednost; Hrvatska od njih može učiti kao od ravnih',
          'Da ih Unija zanemaruje',
          'Da bi trebale izaći iz Unije',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor odgovara na kritiku o gubitku suvereniteta?',
        qEn: 'How does the author answer the criticism about loss of sovereignty?',
        opts: [
          'Tvrdi da suverenitet nije podijeljen',
          'Priznaje da je podijeljen, ali pita s čime se uspoređuje — Hrvatska izvan Unije bila bi mala zemlja bez saveznika',
          'Slaže se da bi Hrvatska trebala izaći',
          'Kaže da suverenitet nije važan',
        ],
        correct: 1,
      },
      {
        q: 'Koji gubitak autor smatra jedinim koji možemo sami promijeniti?',
        qEn: 'Which loss does the author consider the only one we can change ourselves?',
        opts: [
          'Iseljavanje mladih',
          'Izgovor kojim politika odgovornost pripisuje Bruxellesu',
          'Konkurenciju poljoprivrednicima',
          'Sporu apsorpciju fondova',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_rad_na_daljinu',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '💻',
    title: 'Rad na daljinu i obala koja ga ne primjećuje',
    titleEn: 'Remote Work and the Coast That Does Not Notice It',
    duration: 15,
    focus:
      'Labour & regional policy • Conditional and hypothetical argument • Distinguishing symptom from cause',
    intro:
      "An analysis of the one opportunity the pandemic handed Croatia's depopulating coast — and why, five years on, almost nothing has been built to catch it.",
    paragraphs: [
      {
        hr: 'U proljeće 2020. dogodilo se nešto što nijedna hrvatska strategija regionalnog razvoja nije predvidjela: milijuni ljudi u Europi otkrili su da posao ne mora biti mjesto. Programer iz Münchena, računovođa iz Milana, prevoditeljica iz Beča — svi su odjednom radili iz dnevne sobe, i svi su, čim se moglo putovati, počeli pitati zašto ta dnevna soba ne bi mogla imati pogled na more. Hrvatska je u tom trenutku imala ono što gotovo nitko drugi u Uniji nije: tisuću kilometara obale, more koje se u lipnju može piti i tisuće praznih kuća u mjestima koja se desetljećima prazne. Imala je, drugim riječima, savršenu ponudu za potražnju koja se pojavila preko noći.',
        en: 'In the spring of 2020 something happened that no Croatian regional development strategy had foreseen: millions of people in Europe discovered that work does not have to be a place. A programmer from Munich, an accountant from Milan, a translator from Vienna — all suddenly worked from the living room, and all, as soon as travel was possible, began asking why that living room could not have a view of the sea. Croatia at that moment had what almost no one else in the Union had: a thousand kilometres of coast, a sea that in June is fit to drink, and thousands of empty houses in towns that have been emptying for decades. It had, in other words, the perfect supply for a demand that appeared overnight.',
      },
      {
        hr: 'Reakcija je bila brza i, gledano iz današnje perspektive, uglavnom kozmetička. Uvedena je "viza za digitalne nomade" koja je stranim državljanima izvan Unije dopuštala godinu dana boravka bez plaćanja poreza na dohodak ostvaren vani. Nekoliko je gradova otvorilo "coworking prostore" u bivšim knjižnicama. Turističke zajednice snimile su spotove s prijenosnim računalom na plaži. Rezultat: u pet godina viza je izdana nekoliko tisuća puta, što je manje od broja apartmana izgrađenih u jednoj sezoni na jednom otoku. Digitalni nomadi došli su, ostali mjesec ili dva, ostavili novac u kafićima i otišli. Obala ih je dočekala kao turiste, i oni su se tako i ponašali.',
        en: 'The reaction was fast and, seen from today\'s perspective, mostly cosmetic. A "digital nomad visa" was introduced, allowing citizens of non-EU countries a year\'s residence without paying income tax on earnings made abroad. A few towns opened "coworking spaces" in former libraries. Tourist boards filmed videos with a laptop on the beach. The result: in five years the visa was issued a few thousand times, fewer than the number of apartments built in one season on one island. The digital nomads came, stayed a month or two, left money in the cafés and went away. The coast received them as tourists, and they behaved accordingly.',
      },
      {
        hr: 'Prava prilika, tvrdim, nikad nije bila u stranim nomadima, nego u domaćim povratnicima — i to je prilika koja je propuštena gotovo u cijelosti. Od ulaska u Uniju iz Hrvatske je otišlo nekoliko stotina tisuća ljudi, znatan dio njih u zanimanja koja se danas mogu obavljati s bilo koje adrese s dobrom internetskom vezom. Anketa među hrvatskim iseljenicima u Njemačkoj i Irskoj pokazala je da bi se više od trećine vratilo kad bi mogli zadržati posao i plaću. Njima ne treba viza ni spot s plažom. Treba im ono što obala nema: brz internet koji ne pada kad zapuše jugo, vrtić koji radi cijelu godinu, škola s više od dva razreda i osjećaj da neće biti jedini u mjestu mlađi od pedeset.',
        en: 'The real opportunity, I argue, was never in foreign nomads but in domestic returnees — and it is an opportunity that has been missed almost entirely. Since joining the Union several hundred thousand people have left Croatia, a considerable part of them into occupations that can today be done from any address with a good internet connection. A survey among Croatian emigrants in Germany and Ireland showed that more than a third would return if they could keep their job and salary. They need neither a visa nor a beach video. They need what the coast does not have: fast internet that does not go down when the south wind blows, a nursery open all year, a school with more than two classes, and the feeling that they will not be the only person in the town under fifty.',
      },
      {
        hr: 'Pogledajmo svaku od tih stavki, jer se u njima krije odgovor na pitanje zašto se ništa nije dogodilo. Internet: prema podacima regulatorne agencije, više od trećine naselja na otocima i u dalmatinskom zaleđu nema pristup vezi bržoj od trideset megabita, što je brzina na kojoj videopoziv radi, a dijeljenje ekrana ne. Program širokopojasnog interneta financiran europskim novcem kasni godinama, iz istih razloga iz kojih kasni sve što se financira europskim novcem — nedostaje ljudi koji znaju provesti natječaj. Vrtići: na otocima s manje od tisuću stanovnika vrtića uglavnom nema, a gdje ga ima, radi do jedan, što je radno vrijeme prilagođeno majci koja ne radi, a ne roditelju koji radi za tvrtku u Frankfurtu. Škole: kombinirani razredi, jedan učitelj za četiri predmeta, srednja škola na kopnu. Nijedan od tih problema nije nerješiv. Svaki je dosadan.',
        en: "Let us look at each of those items, because in them lies the answer to why nothing happened. Internet: according to the regulatory agency's data, more than a third of settlements on the islands and in the Dalmatian hinterland have no access to a connection faster than thirty megabits, which is the speed at which a video call works and screen sharing does not. The broadband programme financed with European money is years late, for the same reasons everything financed with European money is late — there are not enough people who know how to run a tender. Nurseries: on islands with fewer than a thousand inhabitants there are mostly none, and where there is one it is open until one, an opening time adapted to a mother who does not work rather than a parent who works for a company in Frankfurt. Schools: combined classes, one teacher for four subjects, secondary school on the mainland. None of those problems is unsolvable. Every one of them is dull.",
      },
      {
        hr: 'Tu dolazimo do stvarnog uzroka, koji nije tehnički nego politički. Turizam donosi novac ljeti, vidljivo, i onima koji odlučuju — jer su i sami iznajmljivači. Povratnik koji radi na daljinu donosi novac cijele godine, nevidljivo, i ne odlučuje ni o čemu jer ga još nema. Prvi model ne zahtijeva ništa osim da se ne mijenja; drugi zahtijeva vrtić, internet i školu prije nego što se itko vrati, dakle ulaganje u ljude koji možda neće doći. Lokalni političar koji bira između sigurnog apartmana i mogućeg povratnika birat će apartman, ne zato što je kratkovidan, nego zato što je racionalan u sustavu koji nagrađuje kratkovidnost. Promijeniti to ne znači uvjeravati načelnike, nego promijeniti ono što se nagrađuje.',
        en: 'Here we come to the real cause, which is not technical but political. Tourism brings money in summer, visibly, and to those who decide — because they are landlords themselves. A returnee working remotely brings money all year, invisibly, and decides nothing because he is not yet there. The first model requires nothing except that nothing change; the second requires a nursery, internet and a school before anyone returns, that is, investment in people who may not come. A local politician choosing between a sure apartment and a possible returnee will choose the apartment, not because he is short-sighted but because he is rational in a system that rewards short-sightedness. Changing that does not mean persuading mayors, but changing what is rewarded.',
      },
      {
        hr: 'Kako bi to izgledalo? Nekoliko je zemalja pokazalo put, i nijedna nije bogatija od Hrvatske. Portugal je udaljenim regijama dao porezne olakšice za povratnike koji ondje prijave prebivalište i rade za inozemne poslodavce, uz uvjet da ostanu tri godine. Irska je u malim gradovima otvorila mrežu "radnih središta" — ne coworking za nomade, nego uredske prostore s dječjom sobom za ljude koji ondje žive — i financira ih iz proračuna, ne iz turističkih pristojbi. Italija plaća općinama po glavi stalnog stanovnika, a ne po noćenju, što preko noći mijenja što se načelniku isplati. Nijedna od tih mjera nije skupa u usporedbi s onim što Hrvatska već troši na promidžbu turizma. Sve traže isto: da se povratnik prestane tretirati kao turist koji je predugo ostao.',
        en: 'What would that look like? Several countries have shown the way, and none of them is richer than Croatia. Portugal gave its remote regions tax relief for returnees who register their residence there and work for foreign employers, on condition they stay three years. Ireland opened a network of "work hubs" in small towns — not coworking for nomads, but office spaces with a children\'s room for people who live there — and funds them from the budget, not from tourist taxes. Italy pays municipalities per permanent resident, not per overnight stay, which overnight changes what is worth a mayor\'s while. None of these measures is expensive compared with what Croatia already spends on promoting tourism. All of them ask the same thing: that the returnee stop being treated as a tourist who has stayed too long.',
      },
      {
        hr: 'Prigovor koji se čuje jest da rad na daljinu jenjava — da se tvrtke vraćaju u urede i da je prilika, ako je i bila, prošla. Podaci to djelomično potvrđuju: udio potpuno udaljenog rada u Europi pao je s vrhunca, ali se ustalio na razini nekoliko puta višoj od one prije pandemije, a hibridni rad, s dva ili tri dana u uredu, postao je norma u zanimanjima koja su hrvatski iseljenici najčešće birali. Za otok tri sata od Zagreba hibridni rad ne pomaže. Za Zadar, Šibenik ili Rijeku — gradove s aerodromom, sveučilištem i bolnicom — pomaže itekako, jer se od njih do Beča ili Münchena leti sat vremena, što je manje nego što mnogi Nijemci putuju do vlastitog ureda. Prilika se nije zatvorila. Premjestila se s otoka u gradove, gdje je infrastruktura već napola izgrađena i gdje bi je bilo najlakše dovršiti.',
        en: "The objection one hears is that remote work is waning — that companies are returning to offices and that the opportunity, if there was one, has passed. The data partly confirm this: the share of fully remote work in Europe has fallen from its peak, but has settled at a level several times higher than before the pandemic, and hybrid work, with two or three days in the office, has become the norm in the occupations Croatian emigrants most often chose. For an island three hours from Zagreb, hybrid work does not help. For Zadar, Šibenik or Rijeka — cities with an airport, a university and a hospital — it helps a great deal, because from them to Vienna or Munich is an hour's flight, which is less than many Germans travel to their own office. The opportunity has not closed. It has moved from the islands to the cities, where the infrastructure is already half built and where it would be easiest to finish.",
      },
      {
        hr: 'Zaključak nije optimističan, ali nije ni beznadan. Hrvatska je 2020. dobila priliku kakvu male, ispražnjene zemlje dobiju jednom u generaciji, i potrošila ju je na vizu za strance i spot s plažom. Prilika se od tada smanjila i preselila, ali još postoji, u gradovima koji imaju aerodrom i sveučilište, za ljude koji već znaju hrvatski i imaju razlog da se vrate. Uhvatiti je znači učiniti nekoliko dosadnih stvari — internet, vrtić, porez, način na koji se općine financiraju — koje se ne mogu snimiti za spot. To je, uostalom, glavni razlog zašto još nisu učinjene.',
        en: 'The conclusion is not optimistic, but neither is it hopeless. In 2020 Croatia was handed the kind of opportunity small, emptied countries get once in a generation, and spent it on a visa for foreigners and a beach video. The opportunity has since shrunk and moved, but it still exists, in the cities that have an airport and a university, for people who already know Croatian and have a reason to return. Seizing it means doing a few dull things — internet, nursery, tax, the way municipalities are financed — that cannot be filmed for a video. That, after all, is the main reason they have not yet been done.',
      },
    ],
    vocabulary: [
      {
        hr: 'potražnja',
        en: 'demand (economics)',
        ex: 'Savršena ponuda za potražnju koja se pojavila preko noći.',
      },
      {
        hr: 'kozmetički',
        en: 'cosmetic (superficial)',
        ex: 'Reakcija je bila uglavnom kozmetička.',
      },
      { hr: 'boravak', en: 'residence, stay', ex: 'Viza dopušta godinu dana boravka.' },
      { hr: 'iseljenik', en: 'emigrant', ex: 'Anketa među hrvatskim iseljenicima u Njemačkoj.' },
      { hr: 'zaleđe', en: 'hinterland', ex: 'Naselja u dalmatinskom zaleđu nemaju brz internet.' },
      {
        hr: 'širokopojasni',
        en: 'broadband',
        ex: 'Program širokopojasnog interneta kasni godinama.',
      },
      { hr: 'kratkovidan', en: 'short-sighted', ex: 'Sustav nagrađuje kratkovidnost.' },
      {
        hr: 'prebivalište',
        en: 'place of residence (registered)',
        ex: 'Povratnici koji prijave prebivalište dobivaju olakšice.',
      },
      { hr: 'jenjavati', en: 'to wane, subside', ex: 'Rad na daljinu jenjava, kažu kritičari.' },
      {
        hr: 'ustaliti se',
        en: 'to settle, stabilise',
        ex: 'Udio udaljenog rada ustalio se na višoj razini.',
      },
    ],
    quiz: [
      {
        q: 'Zašto autor reakciju iz 2020. naziva "kozmetičkom"?',
        qEn: 'Why does the author call the 2020 reaction "cosmetic"?',
        opts: [
          'Jer je viza bila preskupa',
          'Jer su viza, coworking prostori i spotovi doveli nekoliko tisuća kratkotrajnih posjetitelja koji su se ponašali kao turisti',
          'Jer se nomadi nisu smjeli kupati',
          'Jer je obala već bila puna',
        ],
        correct: 1,
      },
      {
        q: 'U kome autor vidi "pravu priliku"?',
        qEn: 'In whom does the author see the "real opportunity"?',
        opts: [
          'U stranim digitalnim nomadima',
          'U domaćim iseljenicima koji bi se vratili kad bi mogli zadržati posao i plaću',
          'U umirovljenicima iz sjeverne Europe',
          'U turistima koji dulje ostaju',
        ],
        correct: 1,
      },
      {
        q: 'Što je, prema autoru, "stvarni uzrok" nedjelovanja?',
        qEn: 'According to the author, what is the "real cause" of inaction?',
        opts: [
          'Nedostatak novca',
          'Tehnički problemi s internetom',
          'Politički: sustav nagrađuje siguran ljetni apartman, a ne ulaganje u povratnike koji možda neće doći',
          'Otpor iseljenika povratku',
        ],
        correct: 2,
      },
      {
        q: 'Što zajedničko traže mjere iz Portugala, Irske i Italije?',
        qEn: 'What do the measures from Portugal, Ireland and Italy have in common?',
        opts: [
          'Velika ulaganja u hotele',
          'Da se povratnik prestane tretirati kao turist koji je predugo ostao',
          'Ukidanje poreza svima',
          'Zabranu rada na daljinu',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor odgovara na prigovor da rad na daljinu jenjava?',
        qEn: 'How does the author answer the objection that remote work is waning?',
        opts: [
          'Slaže se da je prilika prošla',
          'Kaže da se prilika premjestila s otoka u gradove s aerodromom, gdje hibridni rad funkcionira',
          'Tvrdi da podaci lažu',
          'Predlaže da se otoci povežu mostovima',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_pristojnost',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '💬',
    title: 'O pristojnosti u javnoj raspravi',
    titleEn: 'On Civility in Public Debate',
    duration: 15,
    focus:
      'Political culture & language • Definitions and distinctions • Register of public speech',
    intro:
      'An essay on why Croatian public debate has grown coarser, why the usual explanation — social media — is only half right, and what civility actually is once it is separated from politeness.',
    paragraphs: [
      {
        hr: 'Svaka generacija misli da je javna rasprava u njezino vrijeme gora nego ikad, i svaka za to ima dokaze. Naša ih ima više nego prethodne: snimke saborskih sjednica u kojima se zastupnici nazivaju imenima koja se ne smiju tiskati, komentare pod člancima koje urednici gase jer ih ne mogu moderirati, televizijske emisije u kojima se sugovornici nadglasavaju dok gledatelj ne shvati da ni jedan ni drugi ne govore njemu, nego jedan drugome. Dijagnoza je uobičajena: društvene mreže. Ona je, tvrdim, točna otprilike napola, i upravo polovica koja nedostaje objašnjava zašto se stvari ne popravljaju.',
        en: 'Every generation thinks that public debate in its time is worse than ever, and every one has evidence for it. Ours has more than the previous ones: recordings of parliamentary sessions in which members call one another names that cannot be printed, comments under articles that editors shut down because they cannot moderate them, television programmes in which the participants shout over one another until the viewer realises that neither is speaking to him but each to the other. The diagnosis is the usual one: social media. It is, I argue, about half right, and it is precisely the missing half that explains why things do not improve.',
      },
      {
        hr: 'Prvo, što je točno. Društvene mreže nagrađuju bijes, jer bijes zadržava pažnju, a pažnja je jedino što mreže prodaju. Rečenica koja izaziva ljutnju dobiva deset puta više odgovora od rečenice koja izaziva razmišljanje, i algoritam, koji ne razlikuje ljutnju od interesa, širi je dalje. Političar koji to shvati — a shvatili su svi — nauči govoriti tako da bude podijeljen, a ne tako da bude shvaćen. To je stvaran mehanizam i ne treba ga umanjivati. Ali on objašnjava zašto se grubost širi, a ne zašto nastaje. Grubost je postojala prije mreža; mreže su joj samo dale megafon.',
        en: 'First, what is true. Social media reward anger, because anger holds attention, and attention is the only thing the networks sell. A sentence that provokes anger gets ten times more responses than a sentence that provokes thought, and the algorithm, which does not distinguish anger from interest, spreads it further. A politician who understands this — and they all have — learns to speak so as to be shared rather than so as to be understood. That is a real mechanism and should not be minimised. But it explains why coarseness spreads, not why it arises. Coarseness existed before the networks; the networks only gave it a megaphone.',
      },
      {
        hr: 'Druga polovica objašnjenja starija je i neugodnija: hrvatska javna rasprava nikada nije razvila ono što bi se moglo nazvati kulturom neslaganja — skup pravila po kojima se ljudi koji misle različito mogu razgovarati bez da to postane pitanje časti. Razlozi su povijesni i ovdje ih mogu samo skicirati. Zemlja u kojoj je politička pripadnost stotinu godina bila pitanje života, iseljavanja ili zatvora nije imala priliku naučiti da protivnik može biti u krivu, a ne biti neprijatelj. Kad se demokracija napokon uspostavila, naslijedila je govor prethodnih režima — govor u kojem se protivnik ne pobija nego razotkriva, u kojem je neslaganje znak zle namjere, a ne drugačijeg pogleda. Taj se govor u devedesetima učvrstio, u dvijetisućitima institucionalizirao, a društvene su ga mreže, kad su stigle, samo zatekle spremnim.',
        en: 'The second half of the explanation is older and more uncomfortable: Croatian public debate has never developed what might be called a culture of disagreement — a set of rules by which people who think differently can talk without it becoming a matter of honour. The reasons are historical and I can only sketch them here. A country in which political allegiance for a hundred years was a question of life, emigration or prison had no chance to learn that an opponent can be wrong without being an enemy. When democracy was finally established, it inherited the speech of the previous regimes — speech in which the opponent is not refuted but exposed, in which disagreement is a sign of bad intent rather than of a different view. That speech hardened in the nineties, was institutionalised in the two-thousands, and social media, when they arrived, merely found it ready.',
      },
      {
        hr: 'Sad je nužna jedna distinkcija, jer se bez nje o pristojnosti govori pogrešno. Pristojnost nije uljudnost. Uljudnost je oblik — "poštovani kolega", "s dužnim poštovanjem" — i može biti savršeno očuvana u raspravi koja je u biti nasilna, kao što se u Saboru redovito i događa: zastupnik "poštovanom kolegi" uljudno poručuje da je izdajnik. Pristojnost je nešto drugo: to je pretpostavka da sugovornik govori iskreno i da bi mogao biti u pravu, iz koje slijedi obveza da se odgovori na ono što je rekao, a ne na ono što se o njemu misli. Uljudnost se može propisati poslovnikom. Pristojnost se ne može, jer nije stvar riječi nego stava prema drugome. Zato rasprave o "kulturi dijaloga" koje završavaju popisom zabranjenih riječi promašuju: zabranjuju uvrede, a ostavljaju prezir.',
        en: 'Now a distinction is necessary, because without it civility is talked about wrongly. Civility is not politeness. Politeness is form — "honourable colleague", "with due respect" — and can be perfectly preserved in a debate that is in substance violent, as happens regularly in the Sabor: a member politely tells the "honourable colleague" that he is a traitor. Civility is something else: it is the assumption that one\'s interlocutor speaks sincerely and might be right, from which follows the obligation to answer what he said and not what one thinks of him. Politeness can be prescribed by standing orders. Civility cannot, because it is not a matter of words but of one\'s attitude to the other. That is why debates about a "culture of dialogue" that end in a list of forbidden words miss the point: they ban insults and leave contempt.',
      },
      {
        hr: 'Tu se javlja protuargument koji ozbiljni ljudi iznose ozbiljno: da je poziv na pristojnost oružje onih koji imaju moć. Onaj tko je na vlasti može si priuštiti miran ton; onaj tko je bespravno otpušten, protjeran ili prevaren nema razloga biti pristojan, i zahtjev da bude znači zahtjev da šuti. Argument je jak i djelomično točan. Bijes je ponekad jedini jezik koji nepravda razumije, i povijest svake slobode uključuje ljude koji su bili nepristojni u pravom trenutku. Ali argument brka dvije stvari: bijes prema nepravdi i prezir prema osobi. Prvo je legitimno i često nužno. Drugo je ono što rasprava ne može preživjeti, jer se s osobom koju preziremo ne može ni o čemu dogovoriti — a rasprava postoji zato da se dogovori.',
        en: 'Here arises a counter-argument that serious people make seriously: that the call for civility is a weapon of those who hold power. The one in power can afford a calm tone; the one who has been unlawfully dismissed, expelled or cheated has no reason to be civil, and demanding that he be so means demanding that he be silent. The argument is strong and partly right. Anger is sometimes the only language injustice understands, and the history of every freedom includes people who were uncivil at the right moment. But the argument confuses two things: anger at injustice and contempt for a person. The first is legitimate and often necessary. The second is what a debate cannot survive, because nothing can be agreed with a person we despise — and debate exists so that things may be agreed.',
      },
      {
        hr: 'Što bi, dakle, pomoglo? Ne novi poslovnik, jer poslovnik regulira riječi. Ne "medijska pismenost" sama, jer pismenost pomaže čitatelju, a ne govorniku. Pomoglo bi nekoliko stvari koje se ne mogu propisati, ali se mogu pokazati. Prvo, primjer: javne osobe koje pristanu biti u krivu naglas — koje kažu "promijenio sam mišljenje" i objasne zašto — čine više za kulturu rasprave nego svi kodeksi zajedno, jer pokazuju da neslaganje ne mora biti poraz. Drugo, formati: rasprava u kojoj svaki sudionik mora najprije sažeti stav protivnika tako da ga protivnik prihvati kao točan, prije nego što ga smije pobijati. Zvuči školski, i jest; postoji zato što se u školi nije naučilo. Treće, urednici koji odbiju objaviti tekst čiji je jedini sadržaj prezir, koliko god bio čitan.',
        en: 'What, then, would help? Not new standing orders, because standing orders regulate words. Not "media literacy" alone, because literacy helps the reader, not the speaker. What would help are a few things that cannot be prescribed but can be shown. First, example: public figures who agree to be wrong out loud — who say "I have changed my mind" and explain why — do more for the culture of debate than all the codes together, because they show that disagreement need not be defeat. Second, formats: a debate in which each participant must first summarise the opponent\'s position in a way the opponent accepts as accurate before being allowed to refute it. It sounds like school, and it is; it exists because it was not learned at school. Third, editors who refuse to publish a text whose only content is contempt, however widely read it would be.',
      },
      {
        hr: 'Znam da se sve to čini malim pred snagom algoritma koji nagrađuje bijes. I jest malo. Ali algoritam ne piše rečenice; piše ih netko, i taj netko svaki put bira hoće li odgovoriti na argument ili na osobu. Ta odluka ne ovisi o mreži nego o govorniku, i to je jedino mjesto na kojem se nešto može promijeniti bez čekanja da se promijeni svijet. Pristojnost, u smislu koji sam pokušao opisati, nije slabost ni ukras. To je jedina pretpostavka pod kojom rasprava uopće ima smisla: da onaj s druge strane možda zna nešto što ja ne znam. Društvo koje tu pretpostavku izgubi neće izgubiti raspravu — nastavit će raspravljati glasnije nego ikad. Izgubit će razlog za raspravu.',
        en: 'I know all this seems small before the power of an algorithm that rewards anger. And it is small. But the algorithm does not write sentences; someone writes them, and that someone chooses every time whether to answer the argument or the person. That decision does not depend on the network but on the speaker, and it is the only place where something can change without waiting for the world to change. Civility, in the sense I have tried to describe, is neither weakness nor ornament. It is the only assumption under which debate makes any sense at all: that the one on the other side may know something I do not. A society that loses that assumption will not lose the debate — it will go on debating louder than ever. It will lose the reason for debating.',
      },
    ],
    vocabulary: [
      {
        hr: 'nadglasavati (se)',
        en: 'to shout over one another',
        ex: 'Sugovornici se nadglasavaju.',
      },
      { hr: 'grubost', en: 'coarseness, rudeness', ex: 'Grubost je postojala prije mreža.' },
      { hr: 'neslaganje', en: 'disagreement', ex: 'Nismo razvili kulturu neslaganja.' },
      {
        hr: 'pripadnost',
        en: 'allegiance, belonging',
        ex: 'Politička pripadnost bila je pitanje života.',
      },
      { hr: 'razotkriti', en: 'to expose, unmask', ex: 'Protivnik se ne pobija nego razotkriva.' },
      { hr: 'uljudnost', en: 'politeness', ex: 'Pristojnost nije uljudnost.' },
      {
        hr: 'poslovnik',
        en: 'standing orders, rules of procedure',
        ex: 'Uljudnost se može propisati poslovnikom.',
      },
      { hr: 'prezir', en: 'contempt', ex: 'Zabranjuju uvrede, a ostavljaju prezir.' },
      { hr: 'brkati', en: 'to confuse, mix up', ex: 'Argument brka dvije stvari.' },
      { hr: 'kodeks', en: 'code (of conduct)', ex: 'Primjer čini više nego svi kodeksi zajedno.' },
    ],
    quiz: [
      {
        q: 'Zašto autor tvrdi da je dijagnoza "društvene mreže" točna samo napola?',
        qEn: 'Why does the author claim the diagnosis "social media" is only half right?',
        opts: [
          'Jer mreže nemaju utjecaja',
          'Jer mreže objašnjavaju zašto se grubost širi, a ne zašto nastaje',
          'Jer je televizija gora od mreža',
          'Jer političari ne koriste mreže',
        ],
        correct: 1,
      },
      {
        q: 'Što autor naziva "kulturom neslaganja"?',
        qEn: 'What does the author call a "culture of disagreement"?',
        opts: [
          'Običaj da se svi slažu',
          'Pravila po kojima ljudi različitih mišljenja razgovaraju bez da to postane pitanje časti',
          'Zabranu političkih rasprava',
          'Način glasovanja u Saboru',
        ],
        correct: 1,
      },
      {
        q: 'Koja je razlika između uljudnosti i pristojnosti prema autoru?',
        qEn: 'What is the difference between politeness and civility according to the author?',
        opts: [
          'Nema razlike',
          'Pristojnost se propisuje poslovnikom, uljudnost ne',
          'Uljudnost je za privatni život, pristojnost za javni',
          'Uljudnost je oblik riječi; pristojnost je pretpostavka da sugovornik govori iskreno i mogao bi biti u pravu',
        ],
        correct: 3,
      },
      {
        q: 'Kako autor odgovara na argument da je poziv na pristojnost "oružje moćnih"?',
        qEn: 'How does the author answer the argument that the call for civility is a "weapon of the powerful"?',
        opts: [
          'Odbacuje ga u cijelosti',
          'Priznaje da je bijes prema nepravdi legitiman, ali razlikuje ga od prezira prema osobi, koji rasprava ne može preživjeti',
          'Kaže da nepravda ne postoji',
          'Slaže se da pristojnost znači šutnju',
        ],
        correct: 1,
      },
      {
        q: 'Što, prema autoru, društvo gubi ako izgubi pretpostavku da drugi možda zna nešto što ja ne znam?',
        qEn: 'According to the author, what does a society lose if it loses the assumption that the other may know something I do not?',
        opts: [
          'Raspravu samu — ljudi prestanu govoriti',
          'Razlog za raspravu, iako nastavlja raspravljati glasnije',
          'Pravo glasa',
          'Društvene mreže',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_besplatni_studij',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '🎓',
    title: 'Cijena besplatnog studija',
    titleEn: 'The Price of Free University',
    duration: 15,
    focus:
      'Public finance & fairness • Distinguishing "free" from "paid by someone" • Steelmanning the opposing view',
    intro:
      'Croatia funds university study for most students from taxes and calls it free. An analysis of who actually pays, who actually benefits, and why the fairest system might not be the one that costs students nothing.',
    paragraphs: [
      {
        hr: 'Riječ "besplatno" jedna je od najuspješnijih riječi u hrvatskoj politici, i jedna od najnetočnijih. Studij na javnim sveučilištima za većinu je studenata besplatan u smislu da ne plaćaju školarinu; nije besplatan ni u kojem drugom smislu, jer ga netko plaća — otprilike milijardu eura godišnje iz državnog proračuna, što znači iz poreza svih, uključujući onih koji nikad nisu studirali ni neće. Ovaj tekst ne zagovara školarine. Zagovara nešto neugodnije: da se o sustavu koji svi hvale prestane govoriti kao o daru, a počne kao o preraspodjeli, jer tek se tada može pitati je li pravedna.',
        en: 'The word "free" is one of the most successful words in Croatian politics, and one of the least accurate. Study at public universities is free for most students in the sense that they pay no tuition; it is not free in any other sense, because someone pays for it — about a billion euros a year from the state budget, which means from everyone\'s taxes, including those who never studied and never will. This text does not advocate tuition fees. It advocates something more uncomfortable: that the system everyone praises stop being spoken of as a gift and start being spoken of as a redistribution, because only then can one ask whether it is fair.',
      },
      {
        hr: 'Počnimo s pitanjem tko studira. Podaci su dosljedni već desetljećima: udio studenata čiji roditelji imaju fakultetsko obrazovanje nekoliko je puta veći od udjela takvih roditelja u stanovništvu, a udio studenata iz kućanstava s najnižim prihodima znatno je niži od njihova udjela među mladima. Drugim riječima, na javnom sveučilištu, koje plaćaju svi, natprosječno su zastupljena djeca iz obitelji koje bi ga mogle platiti, a podzastupljena djeca iz obitelji koje ne bi. To nije hrvatska osobitost — isti obrazac postoji u svakoj zemlji s besplatnim studijem — ali je hrvatska osobitost da se o tome gotovo ne govori, jer bi se time dovelo u pitanje nešto što svi smatraju očito dobrim.',
        en: 'Let us begin with the question of who studies. The data have been consistent for decades: the share of students whose parents have a university education is several times higher than the share of such parents in the population, and the share of students from the lowest-income households is considerably lower than their share among the young. In other words, at the public university, which everyone pays for, children from families that could afford it are over-represented, and children from families that could not are under-represented. That is not a Croatian peculiarity — the same pattern exists in every country with free study — but it is a Croatian peculiarity that it is hardly ever talked about, because doing so would call into question something everyone considers obviously good.',
      },
      {
        hr: 'Slijedi pitanje tko plaća. Porezni sustav u Hrvatskoj oslanja se pretežno na porez na dodanu vrijednost, koji svi plaćaju pri svakoj kupnji, neovisno o prihodu; porez na dohodak, koji je progresivan, čini manji dio prihoda. To znači da prodavačica, vozač i konobar kroz svaku kupnju financiraju studij djece liječnika i odvjetnika u razmjeru koji je, gledano prema prihodu, veći nego što bi bio u zemlji s progresivnijim porezima. "Besplatan studij za sve" tako se u praksi pretvara u prijenos od onih koji ne studiraju prema onima koji studiraju — a ti drugi, u prosjeku, potječu iz imućnijih obitelji i sami će, s diplomom, zarađivati više. Nazvati to socijalnom mjerom zahtijeva određenu dozu optimizma.',
        en: 'Next comes the question of who pays. The tax system in Croatia relies predominantly on value added tax, which everyone pays on every purchase regardless of income; income tax, which is progressive, makes up a smaller part of revenue. That means the shop assistant, the driver and the waiter finance, through every purchase, the studies of the children of doctors and lawyers to an extent that, relative to income, is greater than it would be in a country with more progressive taxation. "Free study for all" thus in practice becomes a transfer from those who do not study to those who do — and the latter, on average, come from better-off families and will themselves, with a degree, earn more. Calling that a social measure requires a certain dose of optimism.',
      },
      {
        hr: 'Sad argument za besplatan studij, iznesen najbolje što mogu, jer ga zaslužuje. Prvo: školarine odvraćaju upravo one koje bi trebalo privući — mlade iz siromašnijih obitelji, koji dug doživljavaju kao rizik, a ne kao ulaganje. Zemlje koje su uvele visoke školarine, poput Engleske, nisu smanjile nejednakost u upisu, a povećale su zaduženost generacija. Drugo: obrazovanje nije samo privatna korist onoga tko studira, nego i javna — liječnik, učitelj ili inženjer koristi svima, pa je pravedno da ga svi plaćaju. Treće: sustav koji se financira iz poreza jednostavan je, predvidiv i ne stvara tržište na kojem se fakulteti natječu u marketingu umjesto u kvaliteti. Sva su tri argumenta točna. Nijedan ne odgovara na pitanje zašto konobar plaća studij odvjetnikovu sinu.',
        en: "Now the argument for free study, put as well as I can, because it deserves it. First: tuition fees deter precisely those who ought to be attracted — young people from poorer families, who experience debt as a risk rather than an investment. Countries that introduced high fees, such as England, did not reduce inequality in enrolment, and increased the indebtedness of generations. Second: education is not only a private benefit to the one who studies but a public one — a doctor, a teacher or an engineer benefits everyone, so it is fair that everyone pays. Third: a system financed from taxes is simple, predictable and does not create a market in which faculties compete in marketing rather than in quality. All three arguments are correct. None of them answers the question of why the waiter pays for the lawyer's son's studies.",
      },
      {
        hr: 'Postoji odgovor koji izbjegava obje krajnosti, i primjenjuju ga zemlje čije sustave Hrvatska inače rado citira. Studij ostaje besplatan pri upisu — nitko ne plaća unaprijed, nitko se ne zadužuje — ali se financira i naknadno, kroz porez na dohodak, od onih koji su studirali i zarađuju iznad određene granice. Tko nakon diplome zarađuje malo, ne plaća ništa; tko zarađuje mnogo, kroz godine vraća dio onoga što je dobio. Australija taj sustav ima trideset godina; skandinavske zemlje postižu sličan učinak progresivnim porezima. Učinak je da studij plaćaju oni kojima je najviše koristio, kad im je koristio, a ne oni kojima nije koristio nikad. To je, ako se pravo pogleda, jedina verzija "besplatnog studija" koja zaslužuje pridjev "pravedan".',
        en: 'There is an answer that avoids both extremes, and it is applied by countries whose systems Croatia otherwise likes to cite. Study remains free at enrolment — nobody pays in advance, nobody goes into debt — but it is also financed afterwards, through income tax, by those who studied and earn above a certain threshold. Whoever earns little after graduating pays nothing; whoever earns a lot returns, over the years, part of what they received. Australia has had that system for thirty years; the Scandinavian countries achieve a similar effect through progressive taxes. The effect is that study is paid for by those it benefited most, when it benefited them, and not by those it never benefited at all. That is, if one looks at it properly, the only version of "free study" that deserves the adjective "fair".',
      },
      {
        hr: 'Drugi dio pravednosti tiče se onoga što se studentima daje uz besplatan upis, a to je u Hrvatskoj malo i krivo raspodijeljeno. Studentski domovi imaju mjesta za desetak posto studenata i dodjeljuju se po bodovima koji nagrađuju uspjeh više nego potrebu, pa u dom češće uđe odličan student iz Zagreba koji u njemu ne treba živjeti nego prosječan student iz Slavonije koji bez njega ne može studirati. Stipendije su malobrojne i uglavnom za izvrsnost. Prehrana je subvencionirana svima jednako, što znači da student čiji roditelji zarađuju pet tisuća eura jede za isti euro kao i student čiji roditelji zarađuju osamsto. Sustav koji se ponosi jednakošću jednako tretira nejednake, što je definicija nepravednosti koju je Aristotel opisao prije dvije i pol tisuće godina.',
        en: 'The second part of fairness concerns what students are given alongside free enrolment, and in Croatia that is little and wrongly distributed. Student halls have places for about ten per cent of students and are allocated on points that reward achievement more than need, so an excellent student from Zagreb who does not need to live in a hall gets in more often than an average student from Slavonia who cannot study without one. Scholarships are few and mostly for excellence. Meals are subsidised for everyone equally, which means a student whose parents earn five thousand euros eats for the same euro as a student whose parents earn eight hundred. A system that prides itself on equality treats unequals equally, which is the definition of injustice Aristotle described two and a half thousand years ago.',
      },
      {
        hr: 'Prigovor koji ovakvom tekstu redovito slijedi glasi da otvaranje pitanja školarina "otvara vrata" njihovu uvođenju, i da je bolje ne dirati sustav koji, uz sve mane, ipak omogućuje studij svima. Prigovor razumijem i djelomično dijelim: hrvatska politika zna iskoristiti raspravu o pravednosti da bi opravdala štednju. Ali argument "ne dirati" ima svoju cijenu, i plaćaju je oni najslabiji: student iz malog mjesta koji ne dobije dom pa ne upiše fakultet, student koji radi noćne smjene da bi platio stan pa napusti studij u drugoj godini, konobar koji financira nešto što njegovoj djeci nikad nije bilo dostupno. Šutnja o nepravednosti nije neutralna. Ona je odluka da nepravednost ostane.',
        en: 'The objection that regularly follows a text like this goes that raising the question of tuition fees "opens the door" to their introduction, and that it is better not to touch a system which, for all its faults, still makes study possible for everyone. I understand the objection and partly share it: Croatian politics knows how to use a debate about fairness to justify austerity. But the "don\'t touch it" argument has its price, and the weakest pay it: the student from a small town who does not get a hall place and so does not enrol, the student who works night shifts to pay for a flat and so drops out in the second year, the waiter who finances something that was never available to his children. Silence about unfairness is not neutral. It is a decision that the unfairness remain.',
      },
      {
        hr: 'Što bih, dakle, predložio? Ne školarine — one rješavaju krivi problem i stvaraju novi. Nego tri stvari koje sustav čine onim što tvrdi da jest. Prvo, domove i stipendije dodjeljivati prema potrebi, a izvrsnost nagrađivati drugačije. Drugo, subvencije za prehranu i prijevoz vezati za prihod obitelji, kao što se veže dječji doplatak. Treće — i to je ono najteže — otvoreno reći da besplatan studij plaćaju porezni obveznici, da ga plaćaju regresivno i da bi ga trebali plaćati oni koji su od njega najviše dobili, kroz porez na dohodak, poslije, kad mogu. Nijedan od tih prijedloga nije radikalan. Radikalno je jedino to što se o njima ne govori, u zemlji u kojoj se o svemu ostalom govori preglasno.',
        en: 'What, then, would I propose? Not tuition fees — they solve the wrong problem and create a new one. Rather three things that make the system what it claims to be. First, allocate halls and scholarships according to need, and reward excellence differently. Second, tie meal and transport subsidies to family income, as child benefit is tied. Third — and this is the hardest — say openly that free study is paid for by taxpayers, that they pay for it regressively, and that it ought to be paid for by those who gained most from it, through income tax, later, when they can. None of these proposals is radical. The only radical thing is that they are not discussed, in a country where everything else is discussed too loudly.',
      },
    ],
    vocabulary: [
      { hr: 'školarina', en: 'tuition fee', ex: 'Većina studenata ne plaća školarinu.' },
      { hr: 'preraspodjela', en: 'redistribution', ex: 'Riječ je o preraspodjeli, ne o daru.' },
      { hr: 'zastupljen', en: 'represented', ex: 'Djeca imućnijih natprosječno su zastupljena.' },
      { hr: 'pretežno', en: 'predominantly', ex: 'Sustav se oslanja pretežno na PDV.' },
      { hr: 'imućan', en: 'well-off, affluent', ex: 'Studenti potječu iz imućnijih obitelji.' },
      { hr: 'odvraćati', en: 'to deter', ex: 'Školarine odvraćaju siromašnije.' },
      { hr: 'zaduženost', en: 'indebtedness', ex: 'Školarine su povećale zaduženost generacija.' },
      {
        hr: 'naknadno',
        en: 'subsequently, afterwards',
        ex: 'Studij se financira i naknadno, kroz porez.',
      },
      { hr: 'dodjeljivati', en: 'to allocate, award', ex: 'Domove dodjeljivati prema potrebi.' },
      { hr: 'porezni obveznik', en: 'taxpayer', ex: 'Besplatan studij plaćaju porezni obveznici.' },
    ],
    quiz: [
      {
        q: 'Zašto autor riječ "besplatno" naziva netočnom?',
        qEn: 'Why does the author call the word "free" inaccurate?',
        opts: [
          'Jer studenti plaćaju školarinu',
          'Jer su knjige skupe',
          'Jer je studij besplatan samo za strance',
          'Jer studij plaća netko drugi — porezni obveznici, uključujući one koji nisu studirali',
        ],
        correct: 3,
      },
      {
        q: 'Što podaci pokazuju o tome tko studira?',
        qEn: 'What do the data show about who studies?',
        opts: [
          'Da studiraju uglavnom djeca iz siromašnih obitelji',
          'Da su djeca fakultetski obrazovanih roditelja natprosječno, a djeca iz najsiromašnijih kućanstava podzastupljena',
          'Da svi studiraju jednako',
          'Da studiraju samo Zagrepčani',
        ],
        correct: 1,
      },
      {
        q: 'Zašto konobar, prema autoru, plaća studij odvjetnikovu sinu?',
        qEn: "Why, according to the author, does the waiter pay for the lawyer's son's studies?",
        opts: [
          'Jer konobari ne plaćaju porez',
          'Jer se sustav oslanja na PDV koji svi plaćaju pri kupnji, neovisno o prihodu',
          'Jer odvjetnici ne plaćaju porez',
          'Jer konobar to želi',
        ],
        correct: 1,
      },
      {
        q: 'Koji model autor smatra jedinim koji zaslužuje pridjev "pravedan"?',
        qEn: 'Which model does the author consider the only one deserving the adjective "fair"?',
        opts: [
          'Visoke školarine unaprijed',
          'Studij besplatan pri upisu, a plaćaju ga naknadno kroz porez na dohodak oni koji su studirali i dobro zarađuju',
          'Studij samo za odlične studente',
          'Studij koji plaćaju roditelji',
        ],
        correct: 1,
      },
      {
        q: 'Što autor predlaže umjesto školarina?',
        qEn: 'What does the author propose instead of tuition fees?',
        opts: [
          'Ukidanje javnih sveučilišta',
          'Domove i stipendije prema potrebi, subvencije vezane za prihod, i otvoreno priznanje tko plaća',
          'Smanjenje broja studenata',
          'Privatizaciju domova',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c1_long_zasto_ne_citamo',
    level: 'C1',
    kind: 'opinion',
    levelColor: '#9a3412',
    levelBg: '#ffedd5',
    icon: '📚',
    title: 'Zašto ne čitamo',
    titleEn: 'Why We Do Not Read',
    duration: 15,
    focus: 'Cultural analysis • Handling survey data • The difference between a cause and an alibi',
    intro:
      'More than half of Croatian adults did not read a single book last year. An analysis that takes the standard explanations apart — price, screens, school — and argues that the real reason is a habit nobody is paid to build.',
    paragraphs: [
      {
        hr: 'Svake se godine objavi isto istraživanje s istim rezultatom, i svake se godine o njemu piše kao o iznenađenju: više od polovice odraslih građana Hrvatske u protekloj godini nije pročitalo nijednu knjigu. Ne "manje nego prije", ne "manje nego u Sloveniji" — nijednu. Među onima koji čitaju, prosjek je četiri knjige godišnje, a četvrtina od toga su udžbenici i stručni priručnici. Hrvatska je po tome pri dnu Europske unije, u društvu zemalja s kojima se inače ne voli uspoređivati. Objašnjenja koja se nude uvijek su ista tri, i ovaj tekst tvrdi da su sva tri više alibiji nego uzroci.',
        en: 'Every year the same survey is published with the same result, and every year it is written about as a surprise: more than half of adult Croatian citizens did not read a single book in the past year. Not "fewer than before", not "fewer than in Slovenia" — not one. Among those who read, the average is four books a year, and a quarter of those are textbooks and professional manuals. Croatia is near the bottom of the European Union on this, in the company of countries it otherwise does not like to be compared with. The explanations offered are always the same three, and this text argues that all three are alibis more than causes.',
      },
      {
        hr: 'Prvi alibi: knjige su skupe. Istina je da knjiga u Hrvatskoj stoji dvadesetak eura, što je za mnoge znatan izdatak. No ista anketa pokazuje da ljudi koji ne čitaju ne čitaju ni posuđene knjige, ni knjige iz knjižnice, čija članarina stoji manje od jedne knjige godišnje, ni besplatne elektroničke knjige kojih je na hrvatskom sve više. Ljudi koji ne čitaju nisu ljudi kojima je knjiga preskupa; to su ljudi kojima knjiga ne pada na um kao mogućnost. Cijena je stvaran problem za one koji čitaju mnogo. Za one koji ne čitaju ništa, ona je objašnjenje koje se nudi anketaru jer zvuči razumnije od istine.',
        en: 'The first alibi: books are expensive. It is true that a book in Croatia costs about twenty euros, which for many is a considerable outlay. But the same survey shows that people who do not read do not read borrowed books either, nor library books, whose membership costs less than one book a year, nor the free electronic books of which there are more and more in Croatian. People who do not read are not people for whom a book is too expensive; they are people to whom a book does not occur as a possibility. Price is a real problem for those who read a great deal. For those who read nothing, it is the explanation offered to the pollster because it sounds more reasonable than the truth.',
      },
      {
        hr: 'Drugi alibi: ekrani. Tvrdnja glasi da su mobiteli i serije pojeli vrijeme koje se prije trošilo na knjige. I ovdje je dio istine očit — prosječan Hrvat provede na mobitelu više od tri sata dnevno — no zaključak ne slijedi. Zemlje s najvećim udjelom čitatelja, od Švedske do Estonije, imaju jednako toliko ekrana i jednako toliko serija. Ako ekrani uništavaju čitanje, uništavali bi ga svugdje podjednako, a ne uništavaju. Ekran ne zamjenjuje knjigu; on zamjenjuje prazninu koja je postojala i prije njega. U zemlji u kojoj se čitalo, ekran postane još jedno mjesto za čitanje. U zemlji u kojoj se nije, ekran postane sve.',
        en: 'The second alibi: screens. The claim goes that phones and series have eaten the time once spent on books. Here too part of the truth is obvious — the average Croat spends more than three hours a day on a phone — but the conclusion does not follow. The countries with the highest share of readers, from Sweden to Estonia, have just as many screens and just as many series. If screens destroyed reading, they would destroy it everywhere equally, and they do not. The screen does not replace the book; it replaces an emptiness that existed before it. In a country where people read, the screen becomes one more place to read. In a country where they did not, the screen becomes everything.',
      },
      {
        hr: 'Treći alibi najozbiljniji je, jer je najbliži istini: škola. Hrvatska škola čitanje uči kao dužnost, ne kao užitak — s lektirom koja je sto godina stara, s pitanjima o "poruci djela" i s ocjenom za pročitano. Generacije učenika nauče da je knjiga nešto što se mora, a onda, kad više ne moraju, prestanu. To je točno i o tome su napisane tisuće stranica. Ali i ovdje treba biti oprezan: finska škola također ima obveznu lektiru i također ocjenjuje, a Finci čitaju. Razlika nije u tome što škola radi s knjigom, nego u tome što se s knjigom događa izvan škole — u kući, u tramvaju, na plaži. Škola može ubiti ljubav prema čitanju. Ne može je stvoriti sama, jer se ljubav ne stvara u učionici nego se u nju donosi.',
        en: 'The third alibi is the most serious, because it is closest to the truth: school. The Croatian school teaches reading as a duty, not a pleasure — with set texts a hundred years old, with questions about "the message of the work" and a grade for having read. Generations of pupils learn that a book is something one must do, and then, when they no longer must, they stop. That is true and thousands of pages have been written about it. But here too one should be careful: the Finnish school also has compulsory set reading and also grades it, and the Finns read. The difference is not in what school does with the book, but in what happens to the book outside school — at home, on the tram, on the beach. School can kill the love of reading. It cannot create it alone, because love is not created in the classroom but brought into it.',
      },
      {
        hr: 'Što se, dakle, događa s knjigom izvan škole u Hrvatskoj? Malo, i to je pravi odgovor. Podaci pokazuju da u gotovo polovici kućanstava s djecom nema više od dvadeset knjiga, a u petini nema nijedne osim školskih. Djeca koja ne vide roditelja s knjigom u rukama ne uče da je čitanje nešto što odrasli rade dobrovoljno; uče da je to školski predmet. Nije riječ o novcu, jer su te iste kuće pune drugih stvari; riječ je o navici koja se ne prenosi jer je nitko nije imao od koga naslijediti. Hrvatska je zemlja koja je pismenost stekla kasno i brzo, u dvije generacije, i u kojoj čitanje nikad nije postalo dio svakodnevice kao što je postalo u zemljama s tri stoljeća građanske kulture. To se ne može popraviti kampanjom. Može se popraviti samo onako kako je nastalo — sporo, iz generacije u generaciju.',
        en: 'What, then, happens to the book outside school in Croatia? Little, and that is the real answer. The data show that in almost half of households with children there are no more than twenty books, and in a fifth none apart from schoolbooks. Children who do not see a parent with a book in hand do not learn that reading is something adults do voluntarily; they learn that it is a school subject. It is not a matter of money, because those same houses are full of other things; it is a matter of a habit that is not passed on because nobody had anyone to inherit it from. Croatia is a country that acquired literacy late and fast, in two generations, and in which reading never became part of everyday life as it did in countries with three centuries of bourgeois culture. That cannot be fixed by a campaign. It can be fixed only the way it arose — slowly, from one generation to the next.',
      },
      {
        hr: 'Postoji protuargument koji treba čuti: da čitanje knjiga nije jedina vrsta čitanja, i da ljudi koji ne otvaraju knjige svakodnevno čitaju članke, poruke, titlove i objave — više teksta nego ijedna generacija prije njih. To je točno, i mjeriti kulturu samo knjigama snobovski je uzak pogled. Ali postoji razlika koju ta obrana previđa: knjiga je jedini oblik teksta koji traži da se u nečemu ostane dulje od tri minute. Sposobnost da se sat vremena prati jedna misao — jedna priča, jedan argument, jedan lik — nije književni ukras nego preduvjet za sve što zahtijeva strpljenje: za razumijevanje ugovora, za praćenje rasprave do kraja, za razlikovanje onoga što netko kaže od onoga što se o njemu misli. Društvo koje čita samo kratko postaje društvo koje razumije samo kratko.',
        en: 'There is a counter-argument that should be heard: that reading books is not the only kind of reading, and that people who do not open books daily read articles, messages, subtitles and posts — more text than any generation before them. That is true, and to measure culture by books alone is a snobbishly narrow view. But there is a difference that defence overlooks: the book is the only form of text that asks one to stay with something longer than three minutes. The ability to follow one thought for an hour — one story, one argument, one character — is not a literary ornament but a precondition for everything that requires patience: for understanding a contract, for following a debate to the end, for distinguishing what someone says from what one thinks of them. A society that reads only briefly becomes a society that understands only briefly.',
      },
      {
        hr: 'Što bi pomoglo, ako ne kampanja? Nekoliko stvari koje su zemlje s čitateljima učinile davno. Knjižnice otvorene u vrijeme kad ljudi ne rade, dakle večerima i vikendom, a ne od osam do tri. Knjige u čekaonicama, na kolodvorima, u kafićima — ondje gdje ljudi čekaju, a ne ondje gdje se čitanje "promiče". Poklon-knjiga svakom novorođenom djetetu, s posjetom knjižničarke, kakvu Slovenija ima godinama i koja je ondje mjerljivo podigla broj kućanstava s knjigama. Škola koja, uz lektiru, dopusti da se čita i ono što učenik sam izabere, i da se o tome ne piše ispit. Nijedna od tih mjera nije skupa. Sve traže isto: da se knjiga prestane tretirati kao kulturno dobro koje treba štititi, a počne kao nešto što se ostavlja na stolu da ga netko uzme.',
        en: 'What would help, if not a campaign? A few things that countries with readers did long ago. Libraries open when people are not working, that is, in the evenings and at weekends, not from eight to three. Books in waiting rooms, at stations, in cafés — where people wait, not where reading is "promoted". A gift book for every newborn child, with a visit from a librarian, of the kind Slovenia has had for years and which has measurably raised the number of households with books there. A school which, alongside the set texts, allows pupils to read what they choose themselves, and does not set an exam on it. None of these measures is expensive. All of them ask the same thing: that the book stop being treated as a cultural good to be protected, and start being treated as something left on the table for someone to pick up.',
      },
      {
        hr: 'Na kraju, priznanje. Tekst o tome zašto ne čitamo pročitat će oni koji čitaju, što je paradoks kojemu se ne može pobjeći i koji objašnjava zašto se o problemu piše svake godine, a ne mijenja ništa. Oni koji bi ga trebali pročitati neće, ne zato što ne mogu, nego zato što im ne pada na um. Jedini način da im padne jest da netko koga poznaju — roditelj, prijatelj, kolega — knjigu drži u ruci dovoljno često da postane normalna. To nije kulturna politika. To je ono što su kulturne politike zaboravile da im je jedini cilj.',
        en: 'Finally, an admission. A text on why we do not read will be read by those who read, a paradox that cannot be escaped and that explains why the problem is written about every year and nothing changes. Those who ought to read it will not, not because they cannot, but because it does not occur to them. The only way for it to occur to them is for someone they know — a parent, a friend, a colleague — to hold a book in hand often enough for it to become normal. That is not cultural policy. It is what cultural policies have forgotten is their only goal.',
      },
    ],
    vocabulary: [
      { hr: 'pri dnu', en: 'near the bottom', ex: 'Hrvatska je po čitanju pri dnu Unije.' },
      { hr: 'alibi', en: 'alibi, excuse', ex: 'Sva tri objašnjenja više su alibiji nego uzroci.' },
      { hr: 'izdatak', en: 'outlay, expense', ex: 'Dvadeset eura znatan je izdatak.' },
      {
        hr: 'članarina',
        en: 'membership fee',
        ex: 'Članarina u knjižnici stoji manje od jedne knjige.',
      },
      {
        hr: 'pasti na um',
        en: 'to occur to someone',
        ex: 'Knjiga im ne pada na um kao mogućnost.',
      },
      { hr: 'lektira', en: 'set reading (school)', ex: 'Lektira je sto godina stara.' },
      {
        hr: 'dobrovoljno',
        en: 'voluntarily',
        ex: 'Čitanje je nešto što odrasli rade dobrovoljno.',
      },
      {
        hr: 'preduvjet',
        en: 'precondition',
        ex: 'Strpljenje je preduvjet za razumijevanje ugovora.',
      },
      {
        hr: 'snobovski',
        en: 'snobbish(ly)',
        ex: 'Mjeriti kulturu samo knjigama snobovski je usko.',
      },
      {
        hr: 'promicati',
        en: 'to promote (a cause)',
        ex: 'Knjige ondje gdje ljudi čekaju, ne gdje se čitanje promiče.',
      },
    ],
    quiz: [
      {
        q: 'Zašto autor odbacuje cijenu kao uzrok nečitanja?',
        qEn: 'Why does the author reject price as the cause of not reading?',
        opts: [
          'Jer su knjige u Hrvatskoj jeftine',
          'Jer oni koji ne čitaju ne čitaju ni posuđene, knjižnične ni besplatne knjige — knjiga im ne pada na um',
          'Jer država plaća knjige',
          'Jer se knjige kupuju samo za poklon',
        ],
        correct: 1,
      },
      {
        q: 'Kako autor pobija tvrdnju da ekrani uništavaju čitanje?',
        qEn: 'How does the author refute the claim that screens destroy reading?',
        opts: [
          'Tvrdi da Hrvati ne koriste mobitele',
          'Pokazuje da zemlje s najviše čitatelja imaju jednako ekrana — ekran zamjenjuje prazninu, ne knjigu',
          'Kaže da su serije bolje od knjiga',
          'Predlaže zabranu mobitela',
        ],
        correct: 1,
      },
      {
        q: 'Što je, prema autoru, "pravi odgovor" na pitanje zašto se ne čita?',
        qEn: 'According to the author, what is the "real answer" to why people do not read?',
        opts: [
          'Škola je loša',
          'Navika čitanja izvan škole ne prenosi se jer je malo tko imao od koga naslijediti',
          'Knjižnice su zatvorene',
          'Hrvatski pisci su nezanimljivi',
        ],
        correct: 1,
      },
      {
        q: 'Koju razliku autor vidi između knjige i drugih vrsta teksta?',
        qEn: 'What difference does the author see between a book and other kinds of text?',
        opts: [
          'Knjiga je jedini oblik teksta koji traži da se u nečemu ostane dulje od nekoliko minuta',
          'Knjiga je skuplja',
          'Knjiga je uvijek na hrvatskom',
          'Knjiga se čita samo u školi',
        ],
        correct: 0,
      },
      {
        q: 'Koji paradoks autor priznaje na kraju?',
        qEn: 'What paradox does the author admit at the end?',
        opts: [
          'Da ni on ne čita',
          'Da tekst o nečitanju čitaju samo oni koji čitaju, pa se ništa ne mijenja',
          'Da knjige postaju skuplje',
          'Da su knjižnice prazne ljeti',
        ],
        correct: 1,
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // C2 — LITERARY PROSE (original short fiction written for this app; not
  // quotations from any published author)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'gs_c2_long_zimska_kuca_1',
    level: 'C2',
    kind: 'serial',
    series: { id: 'zimska_kuca', part: 1, of: 2 },
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '❄️',
    title: 'Zimska kuća (1/2)',
    titleEn: 'The Winter House (1/2)',
    duration: 16,
    focus: 'Literary narrative • Free indirect style • Aorist & imperfect as stylistic register',
    intro:
      'Part 1 of 2. An original novella excerpt. A woman returns in January to the island house where she spent childhood summers, to sell it. The house, and the winter, have other ideas. Read this part first.',
    paragraphs: [
      {
        hr: 'Kuću je vidjela s trajekta prije nego što je vidjela mjesto, kao što se uvijek vidi ono što se ne želi vidjeti: bijela mrlja iznad uvale, s tamnim pravokutnikom prozora koji je odavde izgledao kao oko što ne trepće. Bilo je siječanjsko jutro, more boje ulja, a na palubi osim nje dvoje ljudi — starac s vrećicama kruha za cijeli tjedan i mlada žena koja je razgovarala s nekim tko nije bio tu. Nitko nije gledao prema kući. Zašto bi. Kuće su bile svačije i ničije, zimi ponajmanje.',
        en: 'She saw the house from the ferry before she saw the town, the way one always sees what one does not wish to see: a white smudge above the cove, with the dark rectangle of a window that from here looked like an eye that does not blink. It was a January morning, the sea the colour of oil, and on deck apart from her two people — an old man with bags of bread for the whole week and a young woman talking to someone who was not there. Nobody was looking towards the house. Why would they. Houses belonged to everyone and no one, in winter least of all.',
      },
      {
        hr: 'Bila je došla prodati je. Rečenica je u njoj stajala već mjesecima, dovršena i zaključana, kao stvar koju se spakiralo prije puta: doći, otvoriti, pregledati, potpisati. Agentica iz Splita, žena koja je sve nazivala "objektom", trebala je stići u podne s kupcem, Nijemcem koji je tražio "nešto autentično". Riječ ju je naljutila više nego što je htjela priznati. Autentično. Kao da je kuća u kojoj su joj umrli baka i djed, u kojoj je naučila plivati i lagati, u kojoj je prvi put ostala sama preko noći, kulisa koju treba ocijeniti po stupnju vjerodostojnosti.',
        en: 'She had come to sell it. The sentence had stood inside her for months, finished and locked, like a thing packed before a journey: arrive, open, inspect, sign. The agent from Split, a woman who called everything "the property", was due to arrive at noon with the buyer, a German who was looking for "something authentic". The word had angered her more than she wished to admit. Authentic. As if the house in which her grandparents had died, in which she had learned to swim and to lie, in which she had first stayed alone overnight, were a stage set to be rated by degree of credibility.',
      },
      {
        hr: 'Ključ je bio ondje gdje je uvijek bio, pod trećim kamenom slijeva, i to ju je pogodilo jače od svega što je slijedilo — da se u dvadeset godina ništa nije pomaknulo, da je kamen čekao. Brava je zaškripala i pustila. Unutra je bilo hladnije nego vani, onom posebnom, ustajalom hladnoćom kamenih kuća koje su zimu upile u zidove i sad je polako vraćaju. Mirisalo je na vlagu, na lavandu koju je baka stavljala u ormare protiv moljaca i koja je, začudo, još djelovala, i na nešto treće, slatkasto, što nije mogla imenovati dok nije ušla u kuhinju i vidjela na stolu zdjelu s dunjama, osušenima do kamena, koje je netko ostavio da mirišu prije dvadeset godina i koje su, u nedostatku drugih uputa, nastavile.',
        en: 'The key was where it had always been, under the third stone from the left, and that struck her harder than anything that followed — that in twenty years nothing had shifted, that the stone had waited. The lock creaked and gave. Inside it was colder than outside, with that particular stale cold of stone houses that have soaked winter into their walls and now slowly give it back. It smelled of damp, of the lavender her grandmother put in the wardrobes against moths and which, astonishingly, still worked, and of a third thing, sweetish, which she could not name until she went into the kitchen and saw on the table a bowl of quinces, dried to stone, which someone had left to scent the room twenty years ago and which, in the absence of other instructions, had continued.',
      },
      {
        hr: 'Sjela je za stol, u kaputu, i nije upalila svjetlo. Kroz prozor se vidjela uvala i, na drugoj strani, kuća Perinih, jedina u kojoj je zimi gorjelo svjetlo. Perina je bila bakina prijateljica, ili neprijateljica — na otoku se to razlikovalo samo po tonu — i ako je još živa, mislila je, ima devedeset i dvije godine i zna da sam došla, jer je trajekt vidjela, jer je vidjela ženu s gradskom torbom kako se penje puteljkom, jer na otoku zimi nema događaja koji nije nečiji. Ta ju je misao, umjesto da je uznemiri, na neki način smirila. Netko zna. Netko je uvijek znao.',
        en: "She sat at the table, in her coat, and did not switch on the light. Through the window one could see the cove and, on the other side, the Perina house, the only one in which a light burned in winter. Perina had been her grandmother's friend, or enemy — on the island the two differed only in tone — and if she is still alive, she thought, she is ninety-two and knows I have come, because she saw the ferry, because she saw a woman with a city bag climbing the path, because on the island in winter there is no event that is not someone's. That thought, instead of unsettling her, in a way calmed her. Someone knows. Someone had always known.",
      },
      {
        hr: 'Pregledavanje je počela odozgo, kako joj je agentica savjetovala, "da vidite ima li krov". Krov je bio. Tavan je bio pun onoga čime su tavani puni — kovčega, stolaca s tri noge, novina koje su prestale izlaziti — i jedne stvari koje se nije sjećala: drvene škrinje s bravom, u kutu pod gredom, na kojoj je netko ugljenom napisao godinu: 1962. Nije je otvorila. Ne još. Sišla je u sobe, otvorila prozore da hladnoća barem bude svježa, prebrojala ono što se moglo prebrojati. Namještaj koji Nijemac neće htjeti. Zavjese koje je baka šivala i koje su na suncu izgubile boju kao stare fotografije. Krevet u kojem je djed umro i u kojem je ona, s devet godina, spavala sljedeće noći jer nije bilo drugoga, i nije se bojala, i to je poslije godinama smatrala najhrabrijom stvari koju je učinila.',
        en: 'She began the inspection from the top, as the agent had advised, "so you can see whether there is a roof". There was. The attic was full of what attics are full of — trunks, three-legged chairs, newspapers that had ceased publication — and one thing she did not remember: a wooden chest with a lock, in the corner under the beam, on which someone had written a year in charcoal: 1962. She did not open it. Not yet. She went down into the rooms, opened the windows so that the cold would at least be fresh, counted what could be counted. Furniture the German would not want. Curtains her grandmother had sewn and which had lost their colour in the sun like old photographs. The bed in which her grandfather had died and in which she, aged nine, had slept the following night because there was no other, and had not been afraid, and had for years afterwards considered that the bravest thing she had ever done.',
      },
      {
        hr: 'U podne je zazvonio mobitel: agentica, iz Splita, s glasom kakvim se javljaju loše vijesti koje su za onoga tko ih javlja dobre. Jugo. Trajekt otkazan, možda i sutra, kupac se vraća u München, "ali ne brinite, ostaje zainteresiran, autentičnost mu je vrlo važna". Ona je rekla da razumije, što je bila istina, i da će pričekati, što još nije znala je li istina. Zatim je spustila telefon na stol pored dunja i shvatila da je na otoku, zimi, sama, bez trajekta i bez razloga, u kući koju je došla prodati i koja ju je, nekim starim otočkim lukavstvom, zadržala barem još jednu noć.',
        en: 'At noon her phone rang: the agent, from Split, with the voice in which one delivers bad news that is good for the one delivering it. The south wind. Ferry cancelled, perhaps tomorrow too, the buyer is returning to Munich, "but don\'t worry, he remains interested, authenticity is very important to him". She said she understood, which was true, and that she would wait, which she did not yet know was true. Then she put the phone down on the table beside the quinces and realised that she was on the island, in winter, alone, without a ferry and without a reason, in a house she had come to sell and which had, by some old island cunning, kept her at least one more night.',
      },
      {
        hr: 'Jugo je stiglo do tri sata, onako kako jugo stiže — ne odjednom, nego kao slutnja, kao glavobolja prije glavobolje. More se u uvali podiglo i posivjelo, prozori su počeli tiho zvečati, a u kući se pojavio zvuk kojeg se sjećala iz djetinjstva i za koji je mislila da ga je izmislila: dugo, tanko zviždanje kroz pukotinu u okviru vrata na terasi, koje je baka zvala "kuća pjeva" i zbog kojeg djed nikad nije htio popraviti vrata. Stajala je u hodniku i slušala. Kuća je pjevala. Nije znala plače li.',
        en: 'The south wind arrived by three, the way the south wind arrives — not all at once, but as a premonition, like the headache before the headache. The sea in the cove rose and greyed, the windows began to rattle quietly, and in the house appeared a sound she remembered from childhood and had thought she had invented: a long, thin whistling through a crack in the frame of the terrace door, which her grandmother called "the house singing" and because of which her grandfather never wanted to fix the door. She stood in the hall and listened. The house was singing. She did not know whether she was crying.',
      },
      {
        hr: 'Kad se smračilo, upalila je svjetlo — struja je, na njezino iznenađenje, radila — i u kuhinjskom ormaru pronašla ono što je znala da će pronaći, jer je baka bila žena koja se pripremala za ratove: brašno u limenci, sol, ulje u boci sa staklenim čepom, konzerve sardina s datumom koji je davno prošao i koje su, kao i dunje, nastavile postojati bez ikoga tko bi im rekao da prestanu. Skuhala je čaj od kadulje, koje je bilo u vrećici na klinu, sjela uz štednjak na drva koji je uspjela upaliti trećim pokušajem i pomislila, prvi put od jutra, ne na prodaju nego na škrinju na tavanu. Na godinu 1962. Na to da je te godine baka imala dvadeset i šest godina i nije još bila baka, nego žena koja je u drvenu škrinju stavila nešto što je zaključala i o čemu, u trideset godina koliko su se poznavale, nije rekla ni riječ.',
        en: 'When it grew dark she switched on the light — the electricity, to her surprise, worked — and in the kitchen cupboard found what she knew she would find, because her grandmother was a woman who prepared for wars: flour in a tin, salt, oil in a bottle with a glass stopper, tins of sardines with a date long past and which, like the quinces, had continued to exist without anyone to tell them to stop. She made sage tea, from a bag hanging on a nail, sat by the wood stove which she managed to light on the third attempt, and thought, for the first time since morning, not about the sale but about the chest in the attic. About the year 1962. About the fact that in that year her grandmother had been twenty-six and not yet a grandmother, but a woman who had put something into a wooden chest, locked it, and in the thirty years they had known each other had not said a word about it.',
      },
      {
        hr: 'Vani je jugo lomilo valove o kamen s onim jednoličnim, strpljivim zvukom koji na otoku znači da se ništa neće dogoditi do sutra. Preko uvale, kod Perinih, svjetlo je gorjelo. Zamislila je staricu kako sjedi uz svoj prozor i gleda prema ovom svjetlu, kako računa: došla je ujutro, još nije otišla, upalila je svjetlo, dakle ostaje. Zamislila je kako Perina zna što je u škrinji. Zatim je pomislila da to nije nemoguće — da na otoku uvijek netko zna — i da će sutra, ako jugo popusti, morati odlučiti hoće li otići trajektom ili preko uvale, do kuće u kojoj gori svjetlo. Kuća je pjevala. Ona je, ne primijetivši, počela pjevušiti s njom.',
        en: 'Outside the south wind broke the waves on the stone with that monotonous, patient sound which on the island means that nothing will happen until tomorrow. Across the cove, at the Perina house, the light burned. She imagined the old woman sitting by her window looking towards this light, calculating: she came in the morning, she has not left, she has switched on the light, so she is staying. She imagined Perina knowing what was in the chest. Then she thought this was not impossible — that on the island someone always knows — and that tomorrow, if the wind dropped, she would have to decide whether to leave by ferry or go across the cove, to the house where the light burned. The house was singing. She, without noticing, had begun to hum along.',
      },
    ],
    vocabulary: [
      { hr: 'mrlja', en: 'smudge, stain', ex: 'Kuća je bila bijela mrlja iznad uvale.' },
      {
        hr: 'vjerodostojnost',
        en: 'credibility, authenticity',
        ex: 'Kulisa koju treba ocijeniti po stupnju vjerodostojnosti.',
      },
      { hr: 'ustajao', en: 'stale, stagnant', ex: 'Ustajala hladnoća kamenih kuća.' },
      { hr: 'moljac', en: 'moth', ex: 'Lavanda protiv moljaca.' },
      { hr: 'puteljak', en: 'path, lane', ex: 'Žena se penje puteljkom.' },
      { hr: 'škrinja', en: 'chest, trunk', ex: 'Drvena škrinja s bravom pod gredom.' },
      {
        hr: 'lukavstvo',
        en: 'cunning, ruse',
        ex: 'Nekim starim otočkim lukavstvom kuća ju je zadržala.',
      },
      { hr: 'slutnja', en: 'premonition, foreboding', ex: 'Jugo stiže kao slutnja.' },
      { hr: 'zvečati', en: 'to rattle, clink', ex: 'Prozori su počeli tiho zvečati.' },
      { hr: 'pjevušiti', en: 'to hum', ex: 'Počela je pjevušiti s kućom.' },
    ],
    quiz: [
      {
        q: 'Zašto pripovjedačicu ljuti riječ "autentično"?',
        qEn: 'Why does the word "authentic" anger the narrator?',
        opts: [
          'Jer je kuća zapravo nova',
          'Jer svodi kuću njezina života na kulisu koju se ocjenjuje po vjerodostojnosti',
          'Jer kupac ne govori hrvatski',
          'Jer je agentica pogriješila adresu',
        ],
        correct: 1,
      },
      {
        q: 'Što ju je "pogodilo jače od svega što je slijedilo"?',
        qEn: 'What "struck her harder than anything that followed"?',
        opts: [
          'Da je ključ još pod istim kamenom — da se u dvadeset godina ništa nije pomaknulo',
          'Hladnoća u kući',
          'Osušene dunje',
          'Pogled na Perinu kuću',
        ],
        correct: 0,
      },
      {
        q: 'Kako je pripovjedačica reagirala na misao da Perina zna da je došla?',
        qEn: 'How did the narrator react to the thought that Perina knows she has come?',
        opts: [
          'Uznemirila se i zatvorila zavjese',
          'Na neki način ju je to smirilo — netko je uvijek znao',
          'Odlučila je odmah otići',
          'Nazvala je Perinu',
        ],
        correct: 1,
      },
      {
        q: 'Što je "kuća pjeva"?',
        qEn: 'What is "the house singing"?',
        opts: [
          'Bakina pjesma',
          'Zviždanje juga kroz pukotinu u vratima koje djed nije htio popraviti',
          'Zvuk radija iz Perine kuće',
          'Škripanje kreveta',
        ],
        correct: 1,
      },
      {
        q: 'O čemu pripovjedačica prvi put od jutra razmišlja umjesto o prodaji?',
        qEn: 'What does the narrator think about for the first time since morning instead of the sale?',
        opts: [
          'O povratku u Split',
          'O škrinji s godinom 1962. i o tome što je baka u nju zaključala',
          'O tome kako popraviti vrata',
          'O kupcu iz Münchena',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_zimska_kuca_2',
    level: 'C2',
    kind: 'serial',
    series: { id: 'zimska_kuca', part: 2, of: 2 },
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🕯️',
    title: 'Zimska kuća (2/2)',
    titleEn: 'The Winter House (2/2)',
    duration: 16,
    focus: 'Literary narrative • Dialogue in dialect-coloured standard • Ellipsis and implication',
    intro:
      'Part 2 of 2. The south wind has kept her on the island for another day. She crosses the cove to the one house where a light burns, and learns what her grandmother locked in a chest in 1962 — and why the sale was never going to be simple.',
    paragraphs: [
      {
        hr: 'Ujutro jugo nije popustilo, nego se samo umorilo, kako se umori svađa koja traje predugo: more je i dalje bilo sivo i visoko, ali zvuk je postao ravnomjeran, gotovo domaći. Trajekt, rekla je poruka, ne vozi. Ona je to pročitala bez razočaranja, što ju je iznenadilo, popila čaj, obukla bakinu vunenu jaknu koju je našla na vješalici i koja joj je bila prevelika i ondje gdje je prije dvadeset godina bila premalena, i krenula preko uvale, po stazi koja je zimi bila više pretpostavka nego staza.',
        en: "In the morning the south wind had not dropped but merely tired, as a quarrel tires that has lasted too long: the sea was still grey and high, but the sound had become even, almost domestic. The ferry, said the text message, is not running. She read this without disappointment, which surprised her, drank her tea, put on her grandmother's woollen jacket which she found on the hook and which was too big for her where twenty years ago it had been too small, and set off across the cove, along a path that in winter was more a supposition than a path.",
      },
      {
        hr: 'Perina ju je dočekala na vratima prije nego što je pokucala, što je značilo da ju je gledala od trenutka kad je izišla iz kuće, i što nijedna od njih nije spomenula. Bila je manja nego što ju je pamtila, kako su svi stari ljudi manji nego što ih pamtimo, a oči su joj bile iste — one sitne, svijetle oči što gledaju kroz čovjeka u ono što stoji iza njega. "Anina", rekla je, po majci, kako se na otoku zovu ljudi, i to ime, koje nitko u gradu nije znao, palo je na nju kao kaput. "Uđi. Znala sam da ćeš doći. Nisam znala hoćeš li doći prije ili poslije škrinje."',
        en: 'Perina met her at the door before she knocked, which meant she had been watching her from the moment she left the house, and which neither of them mentioned. She was smaller than she remembered her, as all old people are smaller than we remember them, and her eyes were the same — those small, pale eyes that look through a person to what stands behind them. "Anina," she said, after her mother, the way people are named on the island, and that name, which nobody in the city knew, fell on her like a coat. "Come in. I knew you would come. I didn\'t know whether you would come before or after the chest."',
      },
      {
        hr: 'Kuhinja je bila topla i mirisala je na kavu i na nešto što se dugo kuhalo. Sjele su. Perina nije pitala ništa — ni o gradu, ni o poslu, ni o tome zašto dvadeset godina — nego je natočila kavu i počela govoriti kao da nastavlja razgovor prekinut jučer. "Tvoja baka i ja bile smo u istoj klupi. Do rata. Poslije rata više nije bilo klupa, nego se radilo. Tisuću devetsto šezdeset i druge ona je imala dvadeset i šest, ja dvadeset i sedam, i obje smo bile udane, i obje smo mislile da je to to." Zastala je, otpila. "Onda je došao onaj s broda."',
        en: 'The kitchen was warm and smelled of coffee and of something that had been cooking a long time. They sat. Perina asked nothing — not about the city, nor about work, nor about why twenty years — but poured coffee and began to speak as if continuing a conversation broken off yesterday. "Your grandmother and I sat at the same desk. Until the war. After the war there were no more desks, there was work. In nineteen sixty-two she was twenty-six, I was twenty-seven, and we were both married, and we both thought that was that." She paused, sipped. "Then the one from the ship came."',
      },
      {
        hr: 'Bio je Talijan, ili se tako govorilo; možda je bio s Cresa i samo je tako zvučao. Došao je s brodom koji je popravljao svjetionike i ostao tri mjeseca dulje nego što je brod ostao, u sobi iznad konobe, i svirao je harmoniku navečer na rivi, i baka je — Perina je to izrekla bez ikakva naglaska, kao da čita s računa — "bila mlada i on je bio netko tko ju je gledao kao da je vidi". Nije rečeno što se dogodilo. Na otoku se to ne kaže; to se zna. Rečeno je samo da je otišao u prosincu, da je ona ostala, i da je u siječnju, godinu poslije, rođena Anina majka. "Tvoj djed je znao", rekla je Perina. "Sve je znao. I nikad, ni jednom, ni riječi. To ti je bio čovjek."',
        en: 'He was Italian, or so it was said; perhaps he was from Cres and only sounded like that. He came with the ship that repaired the lighthouses and stayed three months longer than the ship stayed, in the room above the tavern, and he played the accordion on the waterfront in the evenings, and her grandmother — Perina said this without any emphasis, as if reading it off a bill — "was young and he was someone who looked at her as though he saw her". What happened was not said. On the island it is not said; it is known. It was said only that he left in December, that she stayed, and that in January, a year later, Anina\'s mother was born. "Your grandfather knew," said Perina. "He knew everything. And never, not once, a word. That was a man for you."',
      },
      {
        hr: 'Ona je sjedila i držala šalicu objema rukama, kao da bi mogla pobjeći. Pokušavala je uskladiti ono što je čula s licem koje je pamtila — bakinim licem, strogim, s onom borom između očiju koja se nikad nije izravnala — i nije mogla, a onda je odjednom mogla, i sve je sjelo, kao kad se ključ okrene u bravi koju smo godinama smatrali zaglavljenom: šutnja za stolom kad bi netko spomenuo Cres, harmonika na tavanu koju nitko nije svirao, djedova ruka na bakinu ramenu na svakoj fotografiji, uvijek na istom mjestu, kao da drži nešto što bi inače otišlo. "Što je u škrinji?" upitala je. Perina je slegnula ramenima. "Nisam otvarala. Nije moje. Ali znam da je ključ u limenci s brašnom, jer mi je rekla da ti kažem, ako dođeš prije nje. Nisi došla prije nje. Ali došla si."',
        en: "She sat and held the cup in both hands, as if it might escape. She tried to reconcile what she had heard with the face she remembered — her grandmother's face, stern, with that furrow between the eyes that never smoothed out — and could not, and then suddenly could, and everything fell into place, as when a key turns in a lock we had for years considered jammed: the silence at the table whenever someone mentioned Cres, the accordion in the attic that nobody played, her grandfather's hand on her grandmother's shoulder in every photograph, always in the same place, as if holding something that would otherwise leave. \"What is in the chest?\" she asked. Perina shrugged. \"I never opened it. It isn't mine. But I know the key is in the flour tin, because she told me to tell you, if you came before her. You didn't come before her. But you came.\"",
      },
      {
        hr: 'Vraćala se preko uvale u sumrak, s jugom u leđima, i u limenci s brašnom, ispod brašna koje je bilo starije od nje, našla ključ. Na tavanu je bilo hladno i tamno; svijeću je nosila kao netko u romanu, s osjećajem da preigrava. Škrinja se otvorila lako, kao da je čekala. Unutra nije bilo pisama, ni fotografija, ni ičega od onoga što se u škrinjama drži u romanima. Bila je harmonika, u futroli od crne kože, i, na njoj, dječja vunena kapica, ručno pletena, s inicijalom koji je bio inicijal njezine majke. I ništa drugo. Sjela je na pod, na tavanu, sa svijećom, i dugo gledala te dvije stvari koje su zajedno govorile više nego što bi mogla ijedna hrpa pisama: glazbu koja je otišla i dijete koje je ostalo.',
        en: "She went back across the cove at dusk, with the wind at her back, and in the flour tin, under flour older than she was, found the key. The attic was cold and dark; she carried the candle like someone in a novel, with a sense of overacting. The chest opened easily, as if it had been waiting. Inside there were no letters, no photographs, nothing of what is kept in chests in novels. There was an accordion, in a black leather case, and on it a child's woollen cap, hand-knitted, with an initial that was her mother's initial. And nothing else. She sat on the floor, in the attic, with the candle, and looked for a long time at those two things which together said more than any pile of letters could: the music that left and the child that stayed.",
      },
      {
        hr: 'Sutradan je jugo stalo, onako kako stane — odjednom, bez objašnjenja, ostavljajući more mirno i posramljeno. Trajekt je vozio. Agentica je javila da kupac dolazi u petak i da je "još zainteresiraniji". Ona je stajala na terasi, u bakinoj jakni, s kavom, i gledala kako se preko uvale, kod Perinih, gasi svjetlo koje je gorjelo cijelu noć, jer ga starica, pomislila je, gasi tek kad vidi da je ona ustala. Zatim je ušla, uzela telefon i napisala agentici poruku koju je sastavljala dugo, iako je bila kratka. Da hvala. Da kupca ne treba zvati. Da objekt, kako ga zove, nije na prodaju, i da ne zna dokad.',
        en: 'The next day the south wind stopped, the way it stops — suddenly, without explanation, leaving the sea calm and ashamed. The ferry was running. The agent wrote that the buyer was coming on Friday and was "even more interested". She stood on the terrace, in her grandmother\'s jacket, with coffee, and watched the light across the cove, at the Perina house, go out after burning all night, because the old woman, she thought, switches it off only when she sees that I am up. Then she went in, took the phone and wrote the agent a message she composed for a long time, although it was short. Thank you. There was no need to call the buyer. The property, as she called it, was not for sale, and she did not know until when.',
      },
      {
        hr: 'Nije znala što će s kućom. Nije znala što će s harmonikom koju nije znala svirati, ni s kapicom, ni s Perinom koja je imala devedeset i dvije godine i koja je, shvatila je, čekala dvadeset godina da nekome preda rečenicu koju joj je povjerila prijateljica ili neprijateljica, na otoku se to razlikovalo samo po tonu. Znala je jedino da je rečenica koju je donijela sa sobom — doći, otvoriti, pregledati, potpisati — bila rečenica nekoga tko misli da su kuće objekti, i da je ta osoba otišla trajektom koji nije vozio. Ostala je druga, u prevelikoj jakni, na terasi, s pogledom na uvalu u kojoj se, na drugoj strani, upravo ponovno upalilo svjetlo, jer Perina, očito, nije vjerovala da će zaista ostati, i htjela je vidjeti.',
        en: 'She did not know what she would do with the house. She did not know what she would do with an accordion she could not play, nor with the cap, nor with Perina who was ninety-two and who, she realised, had waited twenty years to hand someone a sentence entrusted to her by a friend or an enemy, on the island the two differed only in tone. She knew only that the sentence she had brought with her — arrive, open, inspect, sign — was the sentence of someone who thinks houses are properties, and that this person had left on the ferry that was not running. Another had stayed, in a jacket too big, on the terrace, looking at the cove where, on the other side, the light had just come on again, because Perina, evidently, did not believe she would really stay, and wanted to see.',
      },
    ],
    vocabulary: [
      { hr: 'ravnomjeran', en: 'even, steady', ex: 'Zvuk mora postao je ravnomjeran.' },
      {
        hr: 'pretpostavka',
        en: 'supposition, assumption',
        ex: 'Staza je zimi više pretpostavka nego staza.',
      },
      { hr: 'naglasak', en: 'emphasis, stress; accent', ex: 'Izrekla je to bez ikakva naglaska.' },
      { hr: 'svjetionik', en: 'lighthouse', ex: 'Brod je popravljao svjetionike.' },
      {
        hr: 'uskladiti',
        en: 'to reconcile, harmonise',
        ex: 'Pokušavala je uskladiti što je čula s licem koje pamti.',
      },
      { hr: 'bora', en: 'wrinkle, furrow', ex: 'Bora između očiju koja se nikad nije izravnala.' },
      { hr: 'preigravati', en: 'to overact', ex: 'Nosila je svijeću s osjećajem da preigrava.' },
      { hr: 'kapica', en: "little cap (child's)", ex: 'Dječja vunena kapica s inicijalom.' },
      { hr: 'posramljen', en: 'ashamed, abashed', ex: 'More je ostalo mirno i posramljeno.' },
      {
        hr: 'predati (komu što)',
        en: 'to hand over, pass on',
        ex: 'Čekala je dvadeset godina da nekome preda rečenicu.',
      },
    ],
    quiz: [
      {
        q: 'Kako je pripovjedačica primila vijest da trajekt ne vozi?',
        qEn: 'How did the narrator receive the news that the ferry was not running?',
        opts: [
          'S ljutnjom',
          'Bez razočaranja, što ju je samu iznenadilo',
          'S paničnim pozivom agentici',
          'Odlučila je otplivati',
        ],
        correct: 1,
      },
      {
        q: 'Što znači Perinina rečenica "Nisam znala hoćeš li doći prije ili poslije škrinje"?',
        qEn: 'What does Perina\'s sentence "I didn\'t know whether you would come before or after the chest" mean?',
        opts: [
          'Da je Perina otvorila škrinju',
          'Da Perina zna za škrinju i čekala je da pripovjedačica dođe po objašnjenje',
          'Da škrinja pripada Perini',
          'Da je škrinja izgubljena',
        ],
        correct: 1,
      },
      {
        q: 'Kako tekst prenosi ono što se dogodilo između bake i čovjeka s broda?',
        qEn: 'How does the text convey what happened between the grandmother and the man from the ship?',
        opts: [
          'Izravno i detaljno',
          'Elipsom — "na otoku se to ne kaže; to se zna" — i činjenicom o rođenju majke',
          'Pismom koje je baka ostavila',
          'Perina to izričito opisuje',
        ],
        correct: 1,
      },
      {
        q: 'Što je bilo u škrinji i što to dvoje predmeta zajedno "govori"?',
        qEn: 'What was in the chest, and what do the two objects "say" together?',
        opts: [
          'Pisma i fotografije koja sve objašnjavaju',
          'Novac i ugovor o kući',
          'Harmonika i dječja kapica — glazba koja je otišla i dijete koje je ostalo',
          'Djedova odjeća',
        ],
        correct: 2,
      },
      {
        q: 'Kako se mijenja odnos pripovjedačice prema rečenici "doći, otvoriti, pregledati, potpisati"?',
        qEn: 'How does the narrator\'s relation to the sentence "arrive, open, inspect, sign" change?',
        opts: [
          'Provodi je do kraja i prodaje kuću',
          'Shvaća da je to rečenica nekoga tko misli da su kuće objekti — i da je ta osoba "otišla"',
          'Zaboravlja je zbog juga',
          'Prepušta odluku Perini',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_fotograf',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '📷',
    title: 'Fotograf iz Vrbnika',
    titleEn: 'The Photographer from Vrbnik',
    duration: 15,
    focus:
      'Literary portrait • Layered time (present, remembered, photographed) • Precise nominal style',
    intro:
      'An original short story. For fifty years a village photographer on the island of Krk took one photograph of every inhabitant on the same day each year. His granddaughter opens the archive after his death and finds the one face he never photographed.',
    paragraphs: [
      {
        hr: 'Svakog dvadeset i prvog lipnja, na najdulji dan u godini, Ante Volarić postavljao je stolicu ispred crkve svete Marije u Vrbniku, na isto mjesto — tri kamena od vrata, tako da se u kadru vidi i luk i komad neba — i fotografirao svakoga tko bi prošao. Nije tražio ništa: ni da se smiješe, ni da stanu ravno, ni da skinu šešir. Tražio je samo da sjednu, na pola minute, i pogledaju u objektiv. Radio je to od 1971. do 2021., pedeset godina bez prekida, uključujući godinu rata, godinu potresa i godinu u kojoj mu je umrla žena, kad je snimao, kako su govorili, "kao da fotografira nju u svakome".',
        en: 'Every twenty-first of June, on the longest day of the year, Ante Volarić set a chair in front of the church of St Mary in Vrbnik, in the same place — three stones from the door, so that the arch and a piece of sky appeared in the frame — and photographed everyone who passed. He asked for nothing: not that they smile, nor that they stand straight, nor that they remove their hats. He asked only that they sit, for half a minute, and look into the lens. He did this from 1971 to 2021, fifty years without a break, including the year of the war, the year of the earthquake and the year his wife died, when he shot, as they said, "as if photographing her in everyone".',
      },
      {
        hr: 'Kad je umro, u ožujku, u devedesetoj, unuka Iva naslijedila je kuću, radionicu i ono što je u oporuci nazvao "arhivom", riječju koju je u životu izgovorio, koliko se sjećala, jednom. Radionica je bila mala i tamna i mirisala je na kemikalije koje se više nisu proizvodile. Uz zid su stajali ormari s ladicama, a u ladicama, po godinama, omotnice; u svakoj omotnici negativi i jedan otisak, na poleđini ime i broj. Prebrojala ih je prve večeri, iz radoznalosti koja se pretvorila u nešto drugo: dvadeset i dvije tisuće četiristo osamnaest fotografija. Pedeset godina jednog mjesta, gledanog s iste stolice, jednoga dana u godini.',
        en: 'When he died, in March, at ninety, his granddaughter Iva inherited the house, the workshop and what in his will he called "the archive", a word which, as far as she remembered, he had uttered once in his life. The workshop was small and dark and smelled of chemicals no longer manufactured. Along the wall stood cabinets with drawers, and in the drawers, by year, envelopes; in each envelope negatives and one print, on the back a name and a number. She counted them the first evening, out of a curiosity that turned into something else: twenty-two thousand four hundred and eighteen photographs. Fifty years of one place, seen from the same chair, on one day of the year.',
      },
      {
        hr: 'Prve je tjedne gledala nasumce, kako se gleda tuđi život — s onom mješavinom stida i gladi. Zatim je počela slagati po imenima, i tada se arhiv otvorio na način koji nije predvidjela. Isti čovjek, pedeset puta, od dječaka s ogrebotinom na koljenu do starca s istom ogrebotinom, sada u obliku ožiljka, na istom koljenu. Ista žena od 1974. do 1989., a onda nikad više — a Iva je znala, kao što svi u Vrbniku znaju, zašto. Cijele obitelji koje se u kadru množe, pa prorjeđuju, pa nestaju, pa se vraćaju kao unuci s njemačkim naglaskom. Stolica se nije mijenjala. Luk se nije mijenjao. Mijenjalo se sve ostalo, toliko sporo da se to moglo vidjeti samo tako — pedeset slika u nizu, kao film koji traje pola stoljeća i prikazuje se u pola minute.',
        en: "For the first weeks she looked at random, the way one looks at someone else's life — with that mixture of shame and hunger. Then she began sorting by name, and then the archive opened in a way she had not foreseen. The same man, fifty times, from a boy with a scrape on his knee to an old man with the same scrape, now in the form of a scar, on the same knee. The same woman from 1974 to 1989, and then never again — and Iva knew, as everyone in Vrbnik knows, why. Whole families that multiply in the frame, then thin out, then vanish, then return as grandchildren with German accents. The chair did not change. The arch did not change. Everything else changed, so slowly that it could be seen only this way — fifty pictures in a row, like a film that lasts half a century and is shown in half a minute.",
      },
      {
        hr: 'Djed nije nikad izlagao. Nekoliko je puta, koliko je znala, dolazio netko iz Zagreba ili Rijeke s prijedlogom — knjiga, izložba, "projekt o identitetu" — i svaki je put otišao bez ičega. Ante bi ih primio, ponudio im vino, pokazao im radionicu i rekao, otprilike, da to nije umjetnost nego popis. "Popisujem", govorio je. "Kao župnik, samo bez sakramenata." Iva je to kao dijete smatrala skromnošću, kao studentica ograničenošću, a sada, s omotnicama u krilu, počinjala je misliti da je bilo nešto treće: da je razumio što ima, i da je znao da bi to, jednom izloženo, prestalo biti to. Da bi popis postao izložba, a ljudi u njemu — motivi.',
        en: 'Her grandfather had never exhibited. A few times, as far as she knew, someone came from Zagreb or Rijeka with a proposal — a book, an exhibition, "a project on identity" — and each time left with nothing. Ante would receive them, offer them wine, show them the workshop and say, more or less, that this was not art but a register. "I register," he would say. "Like the parish priest, only without the sacraments." As a child Iva had taken this for modesty, as a student for narrowness, and now, with the envelopes in her lap, she was beginning to think it had been a third thing: that he understood what he had, and knew that, once exhibited, it would cease to be that. That the register would become an exhibition, and the people in it — subjects.',
      },
      {
        hr: 'Tražila je sebe, naravno. Našla se: 1996., u naručju, s licem izobličenim od plača, jer je, kako joj je majka pričala, imala tri mjeseca i mrzila sunce. Zatim svake godine, do 2014., kad je otišla studirati i prestala dolaziti za Ivanje — ne iz odluke, nego iz onoga od čega su sastavljene sve odluke koje nismo donijeli: ispita, poslova, jednog ljeta u Berlinu, još jednog. Od 2015. do 2021. u omotnicama s njezinim imenom nije bilo ničega. Djed ih je ipak označio, svaku godinu, njezinim imenom i praznim brojem, kao da drži mjesto. Sedam praznih omotnica. Držala ih je u ruci dulje nego bilo koju fotografiju.',
        en: "She looked for herself, of course. She found herself: 1996, in someone's arms, her face contorted with crying, because, as her mother told it, she was three months old and hated the sun. Then every year until 2014, when she went away to study and stopped coming for St John's Day — not from decision, but from the stuff all the decisions we never made are composed of: exams, jobs, one summer in Berlin, another. From 2015 to 2021 the envelopes with her name held nothing. Her grandfather had labelled them all the same, every year, with her name and an empty number, as if holding a place. Seven empty envelopes. She held them in her hand longer than any photograph.",
      },
      {
        hr: 'Tražila je i njega, i tu je arhiv zašutio. U pedeset godina Ante Volarić nije snimio nijedan autoportret. Nije sjeo na stolicu ni jednom, ni kad bi ga netko ponudio da ga snimi, a nudili su, pričala je majka, svake godine, u šali koja je s vremenom postala običaj i onda prestala biti smiješna. Iva je prošla sve omotnice, godinu po godinu, tražeći makar rub, odraz u prozoru, sjenu na kamenu — ništa. Čovjek koji je pedeset godina popisivao jedno mjesto ostavio je u popisu jednu jedinu rupu, i ta je rupa imala njegov oblik.',
        en: 'She looked for him too, and here the archive fell silent. In fifty years Ante Volarić had taken no self-portrait. He had not sat on the chair once, not even when someone offered to photograph him, and they offered, her mother said, every year, as a joke that over time became a custom and then stopped being funny. Iva went through all the envelopes, year by year, looking for so much as an edge, a reflection in a window, a shadow on the stone — nothing. The man who for fifty years had registered one place had left in the register a single hole, and that hole had his shape.',
      },
      {
        hr: 'Objašnjenje je došlo od onoga od koga dolaze objašnjenja u malim mjestima: od župnika, koji je bio mlad i koji je znao priču jer mu ju je ispričao prethodnik. Ante je kao dječak, 1950-ih, bio fotografiran za neku iskaznicu, i fotograf iz Krka, u žurbi, snimio ga je s pogledom mimo objektiva, i slika je ispala takva da je dječak na njoj izgledao kao da nekoga traži i ne nalazi. Majka mu je, navodno, rekla da tako izgledaju ljudi koji će otići. Nije otišao. Ali je, kako je župnik rekao, "odlučio da ga više nitko neće gledati kroz staklo dok on ne gleda natrag". Pa je nabavio aparat i stao s druge strane. Zauvijek.',
        en: 'The explanation came from where explanations come from in small places: from the parish priest, who was young and knew the story because his predecessor had told him. As a boy, in the 1950s, Ante had been photographed for some identity card, and the photographer from Krk, in a hurry, caught him looking past the lens, and the picture came out such that the boy in it looked as if he were seeking someone and not finding them. His mother, supposedly, told him that this is what people look like who will leave. He did not leave. But, as the priest said, "he decided that nobody would look at him through glass again while he was not looking back". So he acquired a camera and stood on the other side. For good.',
      },
      {
        hr: 'Dvadeset i prvog lipnja te godine Iva je iznijela stolicu pred crkvu svete Marije, tri kamena od vrata. Nije znala što radi; znala je samo da omotnica za 2022. ne smije ostati prazna, i da to netko mora učiniti, i da je ona jedina koja zna gdje stolica stoji. Ljudi su dolazili — manje nego u djedovo vrijeme, ali su dolazili, jer se u Vrbniku zna što je dvadeset i prvi lipnja — i sjedali, i gledali u objektiv, i ona je snimala, nespretno, s djedovim aparatom koji je bio teži nego što je izgledao. Pred kraj dana, kad je sunce sišlo iza luka, sjela je i sama, postavila samookidač, i pogledala u objektiv onako kako je gledalo dvadeset i dvije tisuće ljudi prije nje: ravno, bez smiješka, kao netko tko se ne skriva. Slika je ispala nakrivljena. Stavila ju je u omotnicu, napisala svoje ime i broj jedan, i pomislila da popis, možda, ipak nije zatvoren.',
        en: "On the twenty-first of June that year Iva carried the chair out in front of the church of St Mary, three stones from the door. She did not know what she was doing; she knew only that the envelope for 2022 must not stay empty, and that someone had to do it, and that she was the only one who knew where the chair stood. People came — fewer than in her grandfather's time, but they came, because in Vrbnik one knows what the twenty-first of June is — and sat, and looked into the lens, and she photographed them, clumsily, with her grandfather's camera which was heavier than it looked. Towards the end of the day, when the sun had gone behind the arch, she sat down herself, set the self-timer, and looked into the lens the way twenty-two thousand people had looked before her: straight, without a smile, like someone not hiding. The picture came out crooked. She put it in an envelope, wrote her name and the number one, and thought that the register, perhaps, was not closed after all.",
      },
    ],
    vocabulary: [
      { hr: 'kadar', en: 'frame (photographic shot)', ex: 'U kadru se vidi luk i komad neba.' },
      { hr: 'objektiv', en: 'lens', ex: 'Tražio je samo da pogledaju u objektiv.' },
      { hr: 'oporuka', en: 'will, testament', ex: 'U oporuci je arhiv nazvao arhivom.' },
      { hr: 'poleđina', en: 'back (of a photo/page)', ex: 'Na poleđini ime i broj.' },
      { hr: 'nasumce', en: 'at random', ex: 'Prve je tjedne gledala nasumce.' },
      {
        hr: 'ogrebotina / ožiljak',
        en: 'scrape / scar',
        ex: 'Ista ogrebotina, sada u obliku ožiljka.',
      },
      { hr: 'prorjeđivati se', en: 'to thin out', ex: 'Obitelji se u kadru množe, pa prorjeđuju.' },
      {
        hr: 'popisivati',
        en: 'to register, take a census',
        ex: 'Popisujem, kao župnik bez sakramenata.',
      },
      { hr: 'izobličen', en: 'contorted, distorted', ex: 'Lice izobličeno od plača.' },
      { hr: 'samookidač', en: 'self-timer', ex: 'Postavila je samookidač i sjela.' },
    ],
    quiz: [
      {
        q: 'Što je Ante tražio od ljudi koje je fotografirao?',
        qEn: 'What did Ante ask of the people he photographed?',
        opts: [
          'Da se smiješe i skinu šešir',
          'Samo da sjednu na pola minute i pogledaju u objektiv',
          'Da plate fotografiju',
          'Da dođu u nedjeljnoj odjeći',
        ],
        correct: 1,
      },
      {
        q: 'Zašto Ante nikad nije izlagao, prema Ivinu konačnom tumačenju?',
        qEn: "Why did Ante never exhibit, according to Iva's final interpretation?",
        opts: [
          'Iz skromnosti',
          'Jer nitko nije bio zainteresiran',
          'Jer je razumio da bi popis postao izložba, a ljudi u njemu motivi',
          'Jer su fotografije bile loše',
        ],
        correct: 2,
      },
      {
        q: 'Što znače sedam praznih omotnica s Ivinim imenom?',
        qEn: "What do the seven empty envelopes with Iva's name mean?",
        opts: [
          'Da je djed izgubio fotografije',
          'Da je djed svake godine držao mjesto za nju iako nije dolazila',
          'Da Iva nije htjela biti fotografirana',
          'Da su fotografije prodane',
        ],
        correct: 1,
      },
      {
        q: 'Zašto Ante nikad nije snimio autoportret?',
        qEn: 'Why did Ante never take a self-portrait?',
        opts: [
          'Jer nije imao samookidač',
          'Jer je kao dječak loše ispao na slici i odlučio da ga više nitko neće gledati kroz staklo dok on ne gleda natrag',
          'Jer je mislio da je ružan',
          'Jer mu je župnik to zabranio',
        ],
        correct: 1,
      },
      {
        q: 'Što Iva čini dvadeset i prvog lipnja i zašto piše broj jedan?',
        qEn: 'What does Iva do on the twenty-first of June and why does she write the number one?',
        opts: [
          'Prodaje arhiv i počinje novi popis kupaca',
          'Nastavlja djedov popis i snima prvi autoportret u njemu — popis možda nije zatvoren',
          'Zatvara radionicu',
          'Fotografira samo djecu',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_posljednji_ribar',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🐟',
    title: 'Posljednji ribar',
    titleEn: 'The Last Fisherman',
    duration: 15,
    focus: 'Literary prose • Sea and craft lexis • Unreliable memory and the unsaid',
    intro:
      'An original short story. An old fisherman on a Dalmatian island still goes out every night, though there are almost no fish and nobody buys them. His son, home from Germany for a week, tries to understand why — and finds the answer in what his father does not catch.',
    paragraphs: [
      {
        hr: 'Otac je izlazio u četiri, kao i uvijek, i Marko ga je čuo kroza zid — ne korake, jer je otac hodao kao mačka, nego zvuk koji je prethodio koracima: struganje šibice, dugi uzdah prve cigarete, škljocaj brave na vratima koja su škljocala tako od Markova djetinjstva i koja nitko nije popravio jer bi onda, kako je majka govorila, "kuća bila tiha, a tiha kuća je prazna". Marko je ležao u krevetu u kojem je spavao kao dječak i slušao motor kako se pali dolje u mandraću, kašljucavo, pa ravnomjerno, pa sve tiše, dok ga more nije uzelo. Bio je doma tjedan dana, iz Stuttgarta, i četvrto jutro zaredom nije mogao odlučiti je li taj zvuk utjeha ili optužba.',
        en: 'His father went out at four, as always, and Marko heard him through the wall — not the footsteps, because his father walked like a cat, but the sound that preceded the footsteps: the scrape of a match, the long sigh of the first cigarette, the click of the lock on the door which had clicked like that since Marko\'s childhood and which nobody had fixed because then, as his mother said, "the house would be quiet, and a quiet house is an empty one". Marko lay in the bed he had slept in as a boy and listened to the engine starting down in the little harbour, coughing, then steady, then ever quieter, until the sea took it. He had been home a week, from Stuttgart, and for the fourth morning in a row could not decide whether that sound was a comfort or an accusation.',
      },
      {
        hr: 'U mjestu su ostala tri ribara, od nekadašnjih trideset, i od tih trojice samo je otac još izlazio svaku noć. Druga su dvojica izlazila kad je vrijeme dobro i kad ima kome prodati, što je, u praksi, značilo u srpnju i kolovozu, za konobe. Otac je izlazio u siječnju, u buri, u kiši, kad nije bilo ni konoba ni gostiju ni ribe, i vraćao se s pet-šest komada koje je davao susjedima, jer ih nije imao komu prodati, a on ih više nije jeo. "Imam sedamdeset i osam godina", rekao je Marku kad ga je ovaj oprezno pitao, treće večeri, ima li to smisla. "U mojim godinama smisao je luksuz. Ja idem na more."',
        en: 'Three fishermen were left in the town, of a former thirty, and of those three only his father still went out every night. The other two went out when the weather was good and there was someone to sell to, which in practice meant July and August, for the taverns. His father went out in January, in the north wind, in rain, when there were no taverns, no guests and no fish, and came back with five or six pieces which he gave to the neighbours, because he had no one to sell them to, and he no longer ate them himself. "I am seventy-eight," he said to Marko when the latter cautiously asked him, on the third evening, whether it made sense. "At my age sense is a luxury. I go to sea."',
      },
      {
        hr: 'Marko je bio inženjer i rečenice koje nisu odgovarale na pitanje smetale su mu profesionalno. U Stuttgartu je vodio odjel koji se bavio optimizacijom — riječ koju ocu nikad nije uspio prevesti, ne zato što nije znao hrvatsku riječ, nego zato što je otac, kad bi je čuo, gledao u njega kao u čovjeka koji objašnjava boju slijepcu. Optimizacija je značila da se ne radi ono što se ne isplati. Otac je pedeset godina radio ono što se sve manje isplaćivalo, i to s istom pažnjom, istim čvorovima, istim redoslijedom kojim je slagao mreže u barku, kao da se svaka noć broji negdje gdje se Markove tablice ne broje.',
        en: "Marko was an engineer and sentences that did not answer the question bothered him professionally. In Stuttgart he ran a department that dealt with optimisation — a word he had never managed to translate for his father, not because he did not know the Croatian word, but because his father, on hearing it, looked at him as at a man explaining colour to a blind person. Optimisation meant not doing what does not pay. His father had for fifty years done what paid less and less, and with the same care, the same knots, the same order in which he laid the nets in the boat, as if every night were counted somewhere Marko's spreadsheets do not count.",
      },
      {
        hr: 'Petog jutra Marko je ustao u pola četiri i čekao u kuhinji, obučen. Otac je ušao, pogledao ga, i nije rekao ništa — na otoku se ne kaže "ideš sa mnom?" nego se čeka da onaj drugi krene — pa su krenuli. Barka je bila ista, drvena, preuska za dvojicu odraslih muškaraca koji se dugo nisu dodirnuli. More je bilo crno i mirno, ono zimsko more koje izgleda kao da nešto zna. Otac je vozio bez svjetla, po sjećanju, između hridi koje Marko nije vidio, a onda je ugasio motor na mjestu koje se ni po čemu nije razlikovalo od ostatka mora i rekao: "Ovdje."',
        en: 'On the fifth morning Marko got up at half past three and waited in the kitchen, dressed. His father came in, looked at him, and said nothing — on the island one does not say "are you coming with me?" but waits for the other to move — and so they set off. The boat was the same, wooden, too narrow for two grown men who had not touched each other in a long time. The sea was black and calm, that winter sea which looks as if it knows something. His father steered without lights, from memory, between rocks Marko could not see, and then cut the engine at a spot that in no way differed from the rest of the sea and said: "Here."',
      },
      {
        hr: 'Mreže su išle u more polako, s onim zvukom koji Marko nije čuo dvadeset godina i koji je odmah prepoznao kao zvuk vlastitog djetinjstva — tihi pljusak plovaka, šuštanje najlona preko ruba. Otac nije govorio. Marko je htio pitati zašto baš ovdje, ali je shvatio da zna odgovor: ovdje je uvijek bilo ovdje. Ovdje je djed bacao mreže, i pradjed, i tu se, u ovoj uvali koju s obale nitko ne razlikuje od susjednih, nalazio jedini komad svijeta na kojem je otac bio posve siguran gdje je. Ribe više nije bilo, ili je bilo malo, ali mjesto je ostalo, i otac je svaku noć dolazio provjeriti da je još tu.',
        en: 'The nets went into the sea slowly, with that sound Marko had not heard for twenty years and recognised at once as the sound of his own childhood — the quiet splash of floats, the rustle of nylon over the gunwale. His father did not speak. Marko wanted to ask why here of all places, but realised he knew the answer: here had always been here. Here his grandfather had cast his nets, and his great-grandfather, and here, in this cove which from the shore nobody could tell from the neighbouring ones, was the only piece of the world where his father was entirely certain of where he was. There were no more fish, or few, but the place remained, and his father came every night to check that it was still there.',
      },
      {
        hr: 'Čekali su. Otac je pušio, Marko je gledao kako se na istoku nebo dijeli od mora tankom, sivom linijom koja je prvo bila slutnja pa tvrdnja. Negdje daleko prošao je trajekt, osvijetljen kao grad, pun ljudi koji su spavali ili gledali u mobitele, ne znajući da ih iz tame promatraju dvojica muškaraca u barci i da su, iz te barke, nestvarni. "Tvoja majka", rekao je otac odjednom, prvi put te godine, "govorila je da ću umrijeti na moru. Rekla je to kao da mi prijeti. A ja sam mislio: daj Bože." Marko nije znao što bi rekao. Otac nije ni očekivao. To je bila rečenica koja se izgovara moru, a sin je slučajno bio u blizini.',
        en: 'They waited. His father smoked, Marko watched the sky in the east separate from the sea along a thin grey line that was first a premonition and then a statement. Somewhere far off a ferry passed, lit up like a town, full of people who were sleeping or looking at their phones, not knowing that two men in a boat were watching them from the darkness and that, from that boat, they were unreal. "Your mother," his father said suddenly, for the first time that year, "used to say I would die at sea. She said it as if threatening me. And I thought: God willing." Marko did not know what to say. His father did not expect him to. It was a sentence spoken to the sea, and the son happened to be nearby.',
      },
      {
        hr: 'Izvukli su mreže u sivo jutro. Bilo je četiri ribe, male, i jedna sipa, i mnogo, mnogo praznine, koja se vukla iz mora teška i mokra kao da je i ona ulov. Otac ju je slagao pažljivo, s čvorovima, s redoslijedom, kao da će je sutra trebati, što je i hoće. Marko je gledao njegove ruke — velike, izrezane, ruke koje su znale svaki kamen na dnu ove uvale — i shvatio da je pitanje koje je postavio treće večeri bilo krivo pitanje. Nije bilo pitanje ima li to smisla. Bilo je pitanje što bi otac bio bez toga, i na to je pitanje odgovor bio tako očit da ga nitko na otoku ne bi ni postavio. Optimizirati oca značilo bi ukinuti ga.',
        en: 'They hauled the nets in the grey morning. There were four fish, small, and one cuttlefish, and much, much emptiness, which dragged out of the sea heavy and wet as if it too were the catch. His father laid it in carefully, with the knots, with the order, as if he would need it tomorrow, which he would. Marko watched his hands — big, cut, hands that knew every stone on the bottom of this cove — and understood that the question he had asked on the third evening had been the wrong question. It was not a question of whether this made sense. It was a question of what his father would be without it, and to that question the answer was so obvious that nobody on the island would even have asked it. To optimise his father would have been to abolish him.',
      },
      {
        hr: 'Vraćali su se sa suncem u leđima. Na rivi je stajala susjeda s kantom, kao svako jutro, i otac joj je dao tri ribe, a sipu je zadržao, "za dečka", što je bio prvi put u dvadeset godina da je nešto zadržao za sebe, i Marko je to shvatio tek poslije, u Stuttgartu, u tablici koju je gledao a nije vidio. Te večeri, posljednje, otac je za stolom rekao da bi, kad on više ne bude mogao, netko trebao znati gdje je "ovdje", jer se to ne može zapisati, ni fotografirati, ni objasniti, nego samo pokazati, jednom, u tami, nekome tko šuti. Marko je rekao da zna. Otac je kimnuo. Zatim je upalio cigaretu, pogledao prema vratima koja su škljocala i rekao da bi ih sutra trebalo popraviti, a obojica su znali da neće.',
        en: 'They came back with the sun behind them. On the waterfront the neighbour stood with her bucket, as every morning, and his father gave her three fish and kept the cuttlefish, "for the boy", which was the first time in twenty years he had kept something for himself, and Marko understood this only later, in Stuttgart, in a spreadsheet he was looking at and not seeing. That evening, the last, his father said at the table that when he could no longer manage, someone ought to know where "here" was, because it cannot be written down, nor photographed, nor explained, only shown, once, in the dark, to someone who keeps quiet. Marko said he knew. His father nodded. Then he lit a cigarette, looked towards the door that clicked and said it ought to be fixed tomorrow, and both of them knew it would not be.',
      },
    ],
    vocabulary: [
      {
        hr: 'mandrać',
        en: 'small boat harbour (Dalmatian)',
        ex: 'Motor se palio dolje u mandraću.',
      },
      {
        hr: 'kašljucav',
        en: 'coughing, spluttering (engine)',
        ex: 'Motor se palio kašljucavo, pa ravnomjerno.',
      },
      { hr: 'bura', en: 'the north-east wind (bora)', ex: 'Izlazio je u siječnju, u buri.' },
      {
        hr: 'isplaćivati se',
        en: 'to pay off (be worthwhile)',
        ex: 'Radio je ono što se sve manje isplaćivalo.',
      },
      { hr: 'čvor', en: 'knot', ex: 'Isti čvorovi, isti redoslijed.' },
      {
        hr: 'hrid',
        en: 'rock, reef (in the sea)',
        ex: 'Vozio je između hridi koje Marko nije vidio.',
      },
      { hr: 'plovak', en: 'float (fishing)', ex: 'Tihi pljusak plovaka.' },
      { hr: 'ulov', en: 'catch (fishing)', ex: 'Praznina se vukla iz mora kao da je i ona ulov.' },
      { hr: 'sipa', en: 'cuttlefish', ex: 'Četiri ribe i jedna sipa.' },
      { hr: 'ukinuti', en: 'to abolish', ex: 'Optimizirati oca značilo bi ukinuti ga.' },
    ],
    quiz: [
      {
        q: 'Zašto nitko nije popravio vrata koja škljocaju?',
        qEn: 'Why has nobody fixed the door that clicks?',
        opts: [
          'Jer nema majstora na otoku',
          'Jer bi, prema majci, tiha kuća bila prazna kuća',
          'Jer otac voli buku',
          'Jer su vrata nova',
        ],
        correct: 1,
      },
      {
        q: 'Što otac odgovara na pitanje ima li izlazak na more smisla?',
        qEn: 'What does the father answer when asked whether going to sea makes sense?',
        opts: [
          '"Ima, jer zarađujem."',
          '"U mojim godinama smisao je luksuz. Ja idem na more."',
          '"Nema, ali ne znam što bih drugo."',
          '"Pitaj majku."',
        ],
        correct: 1,
      },
      {
        q: 'Zašto Marko ocu nikad nije uspio prevesti riječ "optimizacija"?',
        qEn: 'Why has Marko never managed to translate the word "optimisation" for his father?',
        opts: [
          'Jer ne zna hrvatsku riječ',
          'Jer otac ne čuje dobro',
          'Jer je otac pojam gledao kao slijepac boju — njegov svijet nije radio po tom načelu',
          'Jer otac govori samo dijalektom',
        ],
        correct: 2,
      },
      {
        q: 'Što za oca znači mjesto koje zove "ovdje"?',
        qEn: 'What does the place the father calls "here" mean to him?',
        opts: [
          'Mjesto s najviše ribe',
          'Jedini komad svijeta na kojem je posve siguran gdje je — mjesto djeda i pradjeda',
          'Mjesto blizu trajektne linije',
          'Mjesto koje je pronašao na karti',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je važno da otac zadržava sipu "za dečka"?',
        qEn: 'Why is it significant that the father keeps the cuttlefish "for the boy"?',
        opts: [
          'Jer sipa vrijedi više od ribe',
          'Jer je to prvi put u dvadeset godina da je nešto zadržao za sebe — gesta prema sinu',
          'Jer susjeda ne voli sipe',
          'Jer je Marko tražio sipu',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_sat_na_kolodvoru',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🕰️',
    title: 'Sat na kolodvoru',
    titleEn: 'The Station Clock',
    duration: 15,
    focus: 'Literary prose • A single object as structure • Shifting narrative distance',
    intro:
      'An original short story. A retired railway clockmaker in Zagreb is called back one last time when the great clock on the main station stops. What he finds inside it is not a fault.',
    paragraphs: [
      {
        hr: 'Sat na Glavnom kolodvoru stao je u utorak, u 6:14, i prvi ga je primijetio čistač, jer je čistačima kolodvor ono što je pomorcima more — površina koju gledaju i kad ne gledaju. Do sedam su ga primijetili svi, jer je sat na pročelju kolodvora jedna od onih stvari koje grad ne vidi dok rade, a vidi odmah kad stanu, kao zube. Netko je fotografirao, netko objavio, netko napisao da je to "znak". Uprava je do devet nazvala tri servisa, i sva su tri rekla isto: da takav mehanizam više nitko ne servisira, i da bi trebalo pitati Bartola.',
        en: 'The clock on the Main Station stopped on Tuesday, at 6:14, and the first to notice was a cleaner, because to cleaners a station is what the sea is to sailors — a surface they look at even when they are not looking. By seven everyone had noticed, because the clock on the station\'s façade is one of those things a city does not see while it works and sees at once when it stops, like teeth. Someone photographed it, someone posted it, someone wrote that it was "a sign". By nine the management had called three repair firms, and all three said the same thing: that nobody services such a mechanism any more, and that one ought to ask Bartol.',
      },
      {
        hr: 'Bartol Kranjčec imao je osamdeset i jednu godinu i četrdeset i dvije godine radnog staža u Hrvatskim željeznicama, od čega je trideset proveo održavajući satove — kolodvorske, peronske, one u uredima šefova postaja, i ovaj, veliki, s kazaljkama dugima metar i pol, koji je zvao "gospodin". Kad su ga nazvali, bio je u vrtu, i rekao je da će doći sutra, jer je, kako je objasnio ženi, "sat stao, ne netko umro". Ujutro je uzeo torbu s alatom koju nije otvorio sedam godina, tramvaj do kolodvora i stube do tavana iznad glavne dvorane, gdje se ulazi u sat kao u malu, mračnu sobu koja tiče.',
        en: 'Bartol Kranjčec was eighty-one and had forty-two years of service with Croatian Railways, thirty of them spent maintaining clocks — station clocks, platform clocks, those in the offices of stationmasters, and this one, the great one, with hands a metre and a half long, which he called "the gentleman". When they called, he was in the garden, and he said he would come tomorrow, because, as he explained to his wife, "a clock has stopped, not someone died". In the morning he took the tool bag he had not opened for seven years, the tram to the station and the stairs to the attic above the main hall, where one enters the clock as into a small, dark room that ticks.',
      },
      {
        hr: 'Nije ticala. To je prvo primijetio, još na stubama: tišina iznad dvorane, gusta, kakve ondje nikad nije bilo. Otključao je vrata ključem koji je još imao — nitko ga nije tražio natrag, jer nitko drugi nije znao za što je — i ušao. Mehanizam je stajao u polumraku, velik kao ormar, s utezima i kotačima od mjedi koji su u prošlom stoljeću bili zlatni, a sad su bili boje starog meda. Bartol je stajao pred njim kako se stoji pred nekim koga dugo nismo vidjeli i tko se promijenio: s trenutkom prepoznavanja koji kasni. Zatim je spustio torbu, skinuo kaput i rekao, naglas, jer je oduvijek govorio satovima: "No, gospodine. Da vidimo."',
        en: 'It was not ticking. That he noticed first, still on the stairs: the silence above the hall, dense, of a kind there had never been. He unlocked the door with the key he still had — nobody had asked for it back, because nobody else knew what it was for — and went in. The mechanism stood in the half-dark, big as a wardrobe, with weights and wheels of brass that in the last century had been golden and were now the colour of old honey. Bartol stood before it the way one stands before someone not seen for a long time who has changed: with a moment of recognition that comes late. Then he set down the bag, took off his coat and said, aloud, because he had always talked to clocks: "Well, sir. Let us see."',
      },
      {
        hr: 'Kvar nije našao, i to ga je uznemirilo više nego što bi ga uznemirio kvar. Prošao je sve: utege, koji su bili gdje treba; kotače, koji su se okretali kad ih je gurnuo; zapinjač, koji je zapinjao; njihalo, koje se, pogurnuto, njihalo pravilno i zatim, poslije nekoliko minuta, samo od sebe stalo, bez razloga, kao čovjek koji usred rečenice zaboravi što je htio reći. Ponovio je to triput. Triput je sat krenuo, radio pet-šest minuta savršeno, i stao. Bartol je sjeo na sanduk u kutu, na kojem je sjedio trideset godina, i prvi put u životu pomislio da možda sat nije pokvaren, nego da je odlučio.',
        en: 'He found no fault, and that unsettled him more than a fault would have. He went through everything: the weights, which were where they should be; the wheels, which turned when he pushed them; the escapement, which caught; the pendulum, which, given a push, swung regularly and then, after a few minutes, stopped of its own accord, for no reason, like a person who forgets mid-sentence what they wanted to say. He repeated this three times. Three times the clock started, ran perfectly for five or six minutes, and stopped. Bartol sat on the crate in the corner on which he had sat for thirty years, and for the first time in his life thought that perhaps the clock was not broken, but had decided.',
      },
      {
        hr: 'Znao je, dakako, da je to besmislica. Bio je majstor, ne pjesnik; satovi su strojevi, i strojevi ne odlučuju. Ali znao je i nešto drugo, što se u četrdeset i dvije godine nauči, a ne može se izgovoriti pred inženjerom: da svaki mehanizam ima način na koji umire, i da taj način nije slučajan. Peronski satovi umiru naglo, od struje. Uredski od nemara. A ovaj — ovaj je umirao onako kako je i radio: pristojno, u tišini, bez lomljenja, kao gospodin koji ustaje od stola prije nego što ga zamole. Bartol je gledao njihalo koje je visjelo mirno i pomislio da ga u toj tišini razumije bolje nego što je razumio bilo koga koga je u posljednjih sedam godina slušao.',
        en: 'He knew, of course, that this was nonsense. He was a craftsman, not a poet; clocks are machines, and machines do not decide. But he also knew something else, which one learns in forty-two years and cannot say in front of an engineer: that every mechanism has a way of dying, and that the way is not accidental. Platform clocks die suddenly, of electricity. Office clocks of neglect. And this one — this one was dying the way it had worked: decently, in silence, without breaking, like a gentleman who rises from the table before he is asked to. Bartol looked at the pendulum hanging still and thought that in that silence he understood it better than he had understood anyone he had listened to in the last seven years.',
      },
      {
        hr: 'Dolje, u dvorani, kolodvor je radio kao i uvijek: vlakovi su stizali i odlazili po rasporedu koji više nije ovisio o ovom satu nego o računalima u nekom uredu u kojem Bartol nikad nije bio. Ljudi su gledali u mobitele. Sat na pročelju bio im je, shvatio je, već godinama samo lice — ukras, fotografija, "znak" — i to što je stao nije promijenilo nijedan dolazak ni odlazak. Bilo je u tome nečega što bi ga prije rastužilo, a sad ga je, na način koji nije mogao objasniti, umirilo: gospodin je mogao stati jer ga više nitko nije trebao. Umro je onda kad je to postalo dopušteno.',
        en: 'Below, in the hall, the station worked as always: trains arrived and departed according to a schedule that no longer depended on this clock but on computers in some office Bartol had never been in. People looked at their phones. The clock on the façade had for years, he realised, been only a face to them — an ornament, a photograph, "a sign" — and its stopping had changed not one arrival or departure. There was something in that which would once have saddened him, and which now, in a way he could not explain, calmed him: the gentleman could stop because nobody needed him any more. He had died when that became permitted.',
      },
      {
        hr: 'Popravio ga je, naravno. To se od njega tražilo, i to je znao. Zamijenio je oprugu zapinjača, koja je bila u redu, i očistio ležajeve, koji su bili čisti, i namjestio njihalo za milimetar koji nije trebao, i sat je krenuo i nije stao. Radio je do večeri, jer je htio biti siguran, i jer nije htio sići. Kad je napokon sišao, u dvorani je stajao mladić iz uprave s papirom koji je trebalo potpisati i s pitanjem što je bilo. Bartol je pogledao papir, zatim mladića, i rekao: "Umor." Mladić je zapisao "umor materijala". Bartol ga nije ispravio.',
        en: 'He repaired it, of course. That was what was asked of him, and he knew it. He replaced the escapement spring, which had been fine, and cleaned the bearings, which had been clean, and adjusted the pendulum by a millimetre that was not needed, and the clock started and did not stop. He worked until evening, because he wanted to be sure, and because he did not want to go down. When he finally came down, a young man from the management was standing in the hall with a paper to be signed and a question about what had been wrong. Bartol looked at the paper, then at the young man, and said: "Fatigue." The young man wrote down "material fatigue". Bartol did not correct him.',
      },
      {
        hr: 'Vraćao se tramvajem, s torbom na koljenima, kroz grad koji je palio svjetla. Na kolodvoru iza njega sat je pokazivao točno vrijeme, i nitko to nije primijetio, jer se ono što radi ne vidi. Bartol je mislio na to da ga više neće zvati — sad su znali da mehanizam radi, a on je imao osamdeset i jednu godinu i vlastito njihalo koje je, kad bi ga navečer, u tišini, slušao, ponekad na trenutak stalo, bez razloga, pa krenulo dalje. Nije se bojao. Ako je išta naučio od gospodina, naučio je da postoji način da se stane pristojno, kad više nitko ne gleda, i da to nije kvar. Doma je ženi rekao da je bila sitnica. Ona je rekla da zna, jer je i sama nešto slično popravila danas, u kuhinji, samo što se to ne zove istim imenom.',
        en: 'He went back by tram, with the bag on his knees, through a city switching on its lights. At the station behind him the clock showed the right time, and nobody noticed, because what works is not seen. Bartol thought about how they would not call him again — now they knew the mechanism worked, and he was eighty-one and had a pendulum of his own which, when he listened to it in the evening in the silence, sometimes stopped for a moment, for no reason, and then went on. He was not afraid. If he had learned anything from the gentleman, he had learned that there is a way to stop decently, when nobody is looking any more, and that it is not a fault. At home he told his wife it had been a trifle. She said she knew, because she had fixed something similar herself today, in the kitchen, only it is not called by the same name.',
      },
    ],
    vocabulary: [
      { hr: 'pročelje', en: 'façade', ex: 'Sat na pročelju kolodvora vidi se tek kad stane.' },
      { hr: 'radni staž', en: 'years of service', ex: 'Imao je 42 godine radnog staža.' },
      { hr: 'kazaljka', en: 'clock hand', ex: 'Kazaljke duge metar i pol.' },
      { hr: 'uteg', en: 'weight (clock)', ex: 'Mehanizam s utezima i kotačima od mjedi.' },
      { hr: 'mjed', en: 'brass', ex: 'Kotači od mjedi boje starog meda.' },
      { hr: 'zapinjač', en: 'escapement (clockwork)', ex: 'Zapinjač je zapinjao kako treba.' },
      { hr: 'njihalo', en: 'pendulum', ex: 'Njihalo se njihalo pravilno, pa stalo.' },
      { hr: 'nemar', en: 'neglect, carelessness', ex: 'Uredski satovi umiru od nemara.' },
      { hr: 'ležaj', en: 'bearing (mechanical)', ex: 'Očistio je ležajeve koji su bili čisti.' },
      { hr: 'sitnica', en: 'trifle, small matter', ex: 'Rekao je ženi da je bila sitnica.' },
    ],
    quiz: [
      {
        q: 'Zašto je čistač prvi primijetio da je sat stao?',
        qEn: 'Why was the cleaner the first to notice the clock had stopped?',
        opts: [
          'Jer je čistač i sam bio urar',
          'Jer čistači kolodvor gledaju kao pomorci more — i kad ne gledaju',
          'Jer je čistač radio na tavanu',
          'Jer mu je uprava rekla da provjeri',
        ],
        correct: 1,
      },
      {
        q: 'Što Bartola uznemiruje više nego što bi ga uznemirio kvar?',
        qEn: 'What unsettles Bartol more than a fault would have?',
        opts: [
          'Da je ključ izgubljen',
          'Da kvara nema — sat kreće, radi nekoliko minuta i stane bez razloga',
          'Da su utezi pokradeni',
          'Da uprava ne želi platiti',
        ],
        correct: 1,
      },
      {
        q: 'Kako, prema Bartolu, "umire" veliki sat?',
        qEn: 'How, according to Bartol, does the great clock "die"?',
        opts: [
          'Naglo, od struje',
          'Od nemara',
          'Pristojno, u tišini, kao gospodin koji ustaje od stola prije nego što ga zamole',
          'Lomeći kotače',
        ],
        correct: 2,
      },
      {
        q: 'Što Bartola umiri kad gleda kolodvor odozgo?',
        qEn: 'What calms Bartol when he looks at the station from above?',
        opts: [
          'Da su vlakovi točni',
          'Spoznaja da je sat mogao stati jer ga više nitko ne treba — stao je kad je to postalo dopušteno',
          'Da ga ljudi fotografiraju',
          'Da će dobiti novi posao',
        ],
        correct: 1,
      },
      {
        q: 'Zašto Bartol ne ispravlja mladića koji zapisuje "umor materijala"?',
        qEn: 'Why does Bartol not correct the young man who writes down "material fatigue"?',
        opts: [
          'Jer je to točan tehnički opis',
          'Jer je umoran',
          'Jer je ono što on misli pod "umor" nešto što se u izvještaj ne može zapisati',
          'Jer mladić ne razumije hrvatski',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c2_long_tetkina_biljeznica',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '📔',
    title: 'Tetkina bilježnica',
    titleEn: "My Aunt's Notebook",
    duration: 15,
    focus: 'First-person literary memoir • Irony and tenderness • Recipes as narrative device',
    intro:
      "An original short story told in the first person. After her aunt's death, the narrator inherits a recipe notebook in which, between the ingredients, an entire life has been written in the margins.",
    paragraphs: [
      {
        hr: 'Teta Ljuba nije pisala dnevnik. To je govorila s ponosom, kao netko tko ne puši: "Ja nemam što skrivati, pa nemam što ni zapisivati." Kad je umrla, u osamdeset i sedmoj, ostavila mi je stan u Sisku, koji sam prodala, garnituru za kavu koju čuvam, i bilježnicu s receptima, koju sam prvih mjeseci držala u kutiji jer sam mislila da znam što je u njoj. Znala sam: sarma, štrukli, orehnjača, tetina pita od jabuka za koju nitko nije uspio dobiti recept dok je bila živa. Nisam znala da je teta, koja nije pisala dnevnik, četrdeset godina pisala nešto drugo, na marginama, sitnim slovima, između sastojaka.',
        en: 'Aunt Ljuba did not keep a diary. She said this with pride, like someone who does not smoke: "I have nothing to hide, so I have nothing to write down either." When she died, at eighty-seven, she left me the flat in Sisak, which I sold, the coffee set, which I keep, and a notebook of recipes, which for the first months I kept in a box because I thought I knew what was in it. I did know: sarma, štrukli, walnut roll, my aunt\'s apple pie for which nobody managed to get the recipe while she was alive. I did not know that my aunt, who did not keep a diary, had for forty years been writing something else, in the margins, in tiny letters, between the ingredients.',
      },
      {
        hr: 'Otkrila sam to tražeći pitu. Recept je bio ondje, na stranici s uglom presavijenim od upotrebe, i bio je, dakako, neupotrebljiv — "brašna koliko uzme", "peći dok ne bude gotovo" — jer teta je pripadala generaciji koja je recepte pisala za sebe, ne za druge, kao što se piše podsjetnik, a ne uputa. Ali uz rub stranice, okomito, jer vodoravno više nije bilo mjesta, stajalo je: "Pekla za Stjepana kad se vratio iz vojske, 1971. Pojeo pola, rekao da je bolja od majčine. Lagao je. Udala sam se." Pročitala sam to triput. Zatim sam sjela na pod i počela listati od početka.',
        en: 'I discovered it looking for the pie. The recipe was there, on a page with a corner folded from use, and it was, of course, unusable — "flour as much as it takes", "bake until done" — because my aunt belonged to a generation that wrote recipes for themselves, not for others, the way one writes a reminder rather than instructions. But along the edge of the page, vertically, because horizontally there was no room left, it said: "Baked it for Stjepan when he came back from the army, 1971. He ate half, said it was better than his mother\'s. He was lying. I married him." I read it three times. Then I sat on the floor and began leafing through from the beginning.',
      },
      {
        hr: 'Bilježnica je bila kronološka onako kako su kronološki životi — ne po datumima, nego po tome što se kad kuhalo. Prve stranice, iz šezdesetih, bile su jednostavna jela i kratke margine: "Za mamu, bolesna." "Prvi put sama." "Preslano, ali su jeli." Zatim Stjepan, i margine su se produljile, i u njima se pojavio humor kojeg u tetinu govoru nikad nije bilo, jer je u govoru bila stroga, a na papiru, pokazalo se, nije: "Sarma. Njegova majka došla na ručak, jela tri, rekla da su njezine bolje. Njezine su bolje. Nisam rekla." Pa recept za juhu iz 1978., i uz njega samo: "Ivo rođen. Nisam kuhala mjesec dana. Prvo što sam skuhala." Ivo je bio moj otac.',
        en: 'The notebook was chronological the way lives are chronological — not by dates, but by what was cooked when. The first pages, from the sixties, were simple dishes and short margins: "For Mum, ill." "First time alone." "Too salty, but they ate it." Then Stjepan, and the margins lengthened, and in them appeared a humour there had never been in my aunt\'s speech, because in speech she was stern and on paper, it turned out, she was not: "Sarma. His mother came to lunch, ate three, said hers were better. Hers are better. I didn\'t say so." Then a recipe for soup from 1978, and beside it only: "Ivo born. Didn\'t cook for a month. First thing I cooked." Ivo was my father.',
      },
      {
        hr: 'Osamdesete su bile najgušće. Recepti su se množili — teta je, očito, kuhala za pola ulice — a margine su postale nešto između kronike i obračuna. "Gulaš za Božić 1984. Stjepan i brat se posvađali oko politike, nisu se govorili do Uskrsa. Gulaš je bio dobar." "Palačinke, 1986. Ivo ih je prvi put napravio sam. Zalijepile se. Ponosna." "Riblja juha, 1989. Svi govore o promjenama. Ja mislim: promjene ili ne, riba se čisti isto." Čitala sam kako netko čita pisma koja mu nisu upućena, s onim stidom koji ne prestaje, a ne može ni zaustaviti. Teta je bila najmanje literarna osoba koju sam poznavala. Na marginama je pisala bolje od većine ljudi koje sam čitala.',
        en: 'The eighties were the densest. The recipes multiplied — my aunt was evidently cooking for half the street — and the margins became something between a chronicle and a reckoning. "Goulash for Christmas 1984. Stjepan and his brother quarrelled about politics, didn\'t speak till Easter. The goulash was good." "Pancakes, 1986. Ivo made them by himself for the first time. They stuck. Proud." "Fish soup, 1989. Everyone talks about changes. I think: changes or not, a fish is cleaned the same way." I read the way one reads letters not addressed to oneself, with that shame which does not stop and cannot stop one either. My aunt was the least literary person I knew. In the margins she wrote better than most people I have read.',
      },
      {
        hr: 'Onda su došle devedesete, i margine su se skratile do kosti. "Grah. Uzbuna." "Kruh. Bez struje." "Ništa. Sisak, listopad 1991." Prazna stranica, prva u bilježnici, s jednom rečenicom u sredini: "Stjepan." I ništa drugo, ni recept, ni datum, jer je datum, valjda, bio takav da ga nije trebalo zapisati da bi se pamtio. Sljedeća stranica, mjesec kasnije, bila je opet recept — "Juha od povrća, za Ivu i djecu iz susjedstva, dvadeset porcija" — i u margini: "Kuham. Što bih drugo." Prevrnula sam list i dugo nisam mogla dalje, jer sam shvatila da je u toj rečenici bila cijela teta, i da je ta rečenica bila razlog zašto nije pisala dnevnik: dnevnik bi je tražio da stane. Recepti su je tražili da nastavi.',
        en: 'Then came the nineties, and the margins shortened to the bone. "Beans. Air raid." "Bread. No electricity." "Nothing. Sisak, October 1991." An empty page, the first in the notebook, with one sentence in the middle: "Stjepan." And nothing else, no recipe, no date, because the date, presumably, was such that it did not need writing down to be remembered. The next page, a month later, was a recipe again — "Vegetable soup, for Ivo and the neighbourhood children, twenty portions" — and in the margin: "I cook. What else would I do." I turned the page and for a long time could not go on, because I understood that in that sentence was the whole of my aunt, and that that sentence was the reason she did not keep a diary: a diary would have asked her to stop. Recipes asked her to continue.',
      },
      {
        hr: 'Poslije rata margine su se vratile, ali drugačije — kraće, mudrije, ponekad zlobne na način koji me tjerao na smijeh u praznom stanu. "Kolač za susjedu koja mi je 1992. rekla da se iselim. Napravila najbolji. Neka zna." "Pita, 2003. Ivo se razveo. Rekla sam da sam to znala. Nisam znala, ali sam morala nešto reći." "Krumpir salata, 2009. Unuka došla s dečkom. Dečko vegan. Krumpir je vegan, hvala Bogu." Ta sam unuka bila ja, i tog se dečka više ne sjećam, ali se sjećam salate, i sjećam se da me teta poslije, na vratima, pogledala onako kako je gledala kad je nešto zaključila, i rekla samo: "Dobra si." Mislila sam da govori o meni. Sad mislim da je govorila o salati, i da je to bilo isto.',
        en: 'After the war the margins came back, but different — shorter, wiser, sometimes malicious in a way that made me laugh in the empty flat. "Cake for the neighbour who told me in 1992 to move out. Made the best one. Let her know." "Pie, 2003. Ivo divorced. Said I had known. I hadn\'t, but I had to say something." "Potato salad, 2009. Granddaughter came with a boyfriend. Boyfriend vegan. Potato is vegan, thank God." That granddaughter was me, and that boyfriend I no longer remember, but I remember the salad, and I remember that afterwards, at the door, my aunt looked at me the way she looked when she had concluded something, and said only: "You\'re good." I thought she was talking about me. Now I think she was talking about the salad, and that it was the same thing.',
      },
      {
        hr: 'Posljednji je zapis iz 2023., dvije godine prije smrti, uz recept za čaj od kadulje, što nije recept nego stanje. Rukopis je bio drhtav, ali su slova bila ista, ona sitna, nagnuta slova koja su četrdeset godina stajala uspravno između sastojaka. Pisalo je: "Za mene. Nemam više za koga kuhati. Ovo je onda kraj bilježnice, a ne mene, da se ne zabunite." I ispod, kao naknadna misao, drukčijom tintom: "Pita: brašna koliko uzme znači dok se ne prestane lijepiti za ruke. Nikome nisam rekla jer bi onda bila svačija."',
        en: 'The last entry is from 2023, two years before her death, beside a recipe for sage tea, which is not a recipe but a condition. The handwriting was shaky, but the letters were the same, those tiny slanted letters which for forty years had stood upright between the ingredients. It said: "For me. No one left to cook for. So this is the end of the notebook, not of me, in case you get confused." And below, like an afterthought, in different ink: "Pie: flour as much as it takes means until it stops sticking to your hands. I never told anyone because then it would be everyone\'s."',
      },
      {
        hr: 'Ispekla sam pitu te večeri, u tuđoj kuhinji, s brašnom koliko je uzelo. Nije bila kao tetina — ništa nikad nije — ali se nije lijepila za ruke, i to je, pomislila sam, bilo ono što je htjela reći: ne recept, nego mjera. Bilježnicu držim u kuhinji, ne u kutiji. Ponekad, kad kuham, zapišem nešto uz rub — kratko, sitno, okomito kad nema mjesta. Nemam što skrivati. Ali imam, pokazalo se, što zapisivati, i teta je to znala prije mene, i ostavila mi je jedini oblik dnevnika koji je smatrala pristojnim: onaj koji se piše dok ruke rade nešto drugo.',
        en: "I baked the pie that evening, in someone else's kitchen, with flour as much as it took. It was not like my aunt's — nothing ever is — but it did not stick to my hands, and that, I thought, was what she had wanted to say: not a recipe, but a measure. I keep the notebook in the kitchen, not in a box. Sometimes, when I cook, I write something along the edge — short, tiny, vertical when there is no room. I have nothing to hide. But I have, it turns out, something to write down, and my aunt knew that before I did, and left me the only form of diary she considered decent: the kind that is written while the hands are doing something else.",
      },
    ],
    vocabulary: [
      { hr: 'garnitura', en: 'set (of crockery, furniture)', ex: 'Garnitura za kavu koju čuvam.' },
      { hr: 'margina', en: 'margin (of a page)', ex: 'Pisala je na marginama, sitnim slovima.' },
      { hr: 'sastojak', en: 'ingredient', ex: 'Zapisi su stajali između sastojaka.' },
      { hr: 'presavijen', en: 'folded', ex: 'Stranica s uglom presavijenim od upotrebe.' },
      { hr: 'podsjetnik', en: 'reminder, memo', ex: 'Pisala je recept kao podsjetnik, ne uputu.' },
      {
        hr: 'obračun',
        en: 'reckoning, settling of accounts',
        ex: 'Margine su bile nešto između kronike i obračuna.',
      },
      { hr: 'uzbuna', en: 'alarm, air raid warning', ex: '"Grah. Uzbuna."' },
      { hr: 'zloban', en: 'malicious, spiteful', ex: 'Margine su ponekad bile zlobne.' },
      { hr: 'drhtav', en: 'shaky, trembling', ex: 'Rukopis je bio drhtav.' },
      {
        hr: 'naknadna misao',
        en: 'afterthought',
        ex: 'Ispod, kao naknadna misao, drukčijom tintom.',
      },
    ],
    quiz: [
      {
        q: 'Zašto je teta s ponosom govorila da ne piše dnevnik?',
        qEn: 'Why did the aunt say with pride that she kept no diary?',
        opts: [
          'Jer nije znala pisati',
          'Jer je smatrala da nema što skrivati, pa ni zapisivati',
          'Jer je dnevnik bio zabranjen',
          'Jer je pisala romane',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je tetin recept za pitu "neupotrebljiv"?',
        qEn: 'Why is the aunt\'s pie recipe "unusable"?',
        opts: [
          'Jer je napisan na stranom jeziku',
          'Jer su sastojci precrtani',
          'Jer ga je pisala za sebe, kao podsjetnik: "brašna koliko uzme"',
          'Jer nedostaje stranica',
        ],
        correct: 2,
      },
      {
        q: 'Kako se, prema pripovjedačici, tetin pisani glas razlikuje od govornog?',
        qEn: "How, according to the narrator, does the aunt's written voice differ from her spoken one?",
        opts: [
          'Nema razlike',
          'U govoru je bila stroga, a na papiru duhovita',
          'Na papiru je bila stroža',
          'Pisala je samo na njemačkom',
        ],
        correct: 1,
      },
      {
        q: 'Zašto pripovjedačica zaključuje da teta nije pisala dnevnik?',
        qEn: 'Why does the narrator conclude her aunt kept no diary?',
        opts: [
          'Jer nije imala vremena',
          'Jer bi dnevnik od nje tražio da stane, a recepti su tražili da nastavi',
          'Jer joj je Stjepan to zabranio',
          'Jer je mislila da je dnevnik za mlade',
        ],
        correct: 1,
      },
      {
        q: 'Što znači tetina posljednja uputa o brašnu?',
        qEn: "What does the aunt's last instruction about flour mean?",
        opts: [
          'Točnu količinu u gramima',
          'Da recept treba baciti',
          'Mjeru, ne recept — "dok se ne prestane lijepiti za ruke" — koju je čuvala da pita ne bude svačija',
          'Da se brašno ne koristi',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'gs_c2_long_nokturno',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🌙',
    title: 'Nokturno za dvije ulice',
    titleEn: 'Nocturne for Two Streets',
    duration: 15,
    focus: 'Literary prose • Parallel narration • Urban night as a character',
    intro:
      'An original short story. Two streets in Zagreb, one in the Upper Town and one in Trešnjevka, on the same night in November — and two people who will never meet, each keeping something awake.',
    paragraphs: [
      {
        hr: 'Postoje dva Zagreba noću, i ne dijele ih rijeka ni pruga nego sat. Prvi je gornji, kameni, koji se zatvori u deset kao knjiga — gase se izlozi na Radićevoj, zadnji tramvaj protrese Ilicu i ode, i ostanu samo plinske lampe, čuvar koji ih pali i gasi po rasporedu iz devetnaestog stoljeća, i tišina koja u tom gradu ima težinu. Drugi je donji, betonski, koji se ne zatvara nego samo mijenja ton: u Trešnjevci u dva ujutro još radi pekarnica, još netko sjedi na klupi ispred zgrade s psom koji ne mora van, i još u jednom prozoru na četvrtom katu gori svjetlo koje ne gasi nitko. Ova priča ide između ta dva prozora — jednog koji se gasi i jednog koji ne može.',
        en: 'There are two Zagrebs at night, and they are divided not by a river or a railway but by an hour. The first is the upper one, of stone, which closes at ten like a book — the shop windows on Radićeva go dark, the last tram shakes Ilica and leaves, and there remain only the gas lamps, the lamplighter who lights and extinguishes them on a schedule from the nineteenth century, and a silence that in that town has weight. The second is the lower one, of concrete, which does not close but only changes its tone: in Trešnjevka at two in the morning a bakery is still open, someone still sits on the bench in front of the building with a dog that does not need to go out, and in one fourth-floor window a light still burns that nobody switches off. This story goes between those two windows — one that goes out and one that cannot.',
      },
      {
        hr: 'Na Gornjem gradu, u ulici koja ima šest kuća i jedno ime koje nitko ne koristi, Vlado pali lampe. Radi to dvadeset i šest godina, svaku večer, s dugim štapom i upaljačem koji nosi u unutarnjem džepu, i turisti ga fotografiraju kao da je i sam dio rasvjete. Nije mu to neugodno. Neugodno mu je nešto drugo, što nikome ne govori: da već godinu dana, kad dođe do pete lampe, one pred kućom broj četiri, zastane dulje nego što treba, jer se u toj kući, na prvom katu, prije godinu dana ugasilo svjetlo koje je dvadeset i pet godina gorjelo dok bi on prolazio. Žena koja je ondje živjela stajala bi na prozoru i kimnula. On bi kimnuo. Nikad nisu razgovarali. Sad prozor nema zavjesa, i on svake večeri pali lampu pred tim prozorom malo pažljivije nego druge, kao da je pali za nekoga.',
        en: 'In the Upper Town, in a street that has six houses and a name nobody uses, Vlado lights the lamps. He has done it for twenty-six years, every evening, with a long pole and a lighter he carries in his inside pocket, and tourists photograph him as if he too were part of the lighting. He does not mind that. He minds something else, which he tells no one: that for a year now, when he reaches the fifth lamp, the one in front of house number four, he pauses longer than necessary, because in that house, on the first floor, a year ago a light went out that for twenty-five years had burned as he passed. The woman who lived there would stand at the window and nod. He would nod. They never spoke. Now the window has no curtains, and every evening he lights the lamp in front of that window a little more carefully than the others, as if lighting it for someone.',
      },
      {
        hr: 'U Trešnjevci, na četvrtom katu, Sanja ne spava. Ne zato što ne može, nego zato što ne smije: u sobi pored spava dijete koje ima šest tjedana i koje se budi svakih devedeset minuta s preciznošću koja bi bila smiješna da nije razorna. Između buđenja Sanja sjedi u kuhinji, sa svjetlom upaljenim jer joj tama u tim satima nije prijateljica, i gleda kroz prozor u dvorište u kojem se ništa ne događa. Ponekad, u pola tri, vidi kako se u pekarnici preko puta upali svjetlo i kako netko nosi vreće brašna, i taj joj je prizor, ne zna zašto, dragocjen — netko drugi je budan i radi nešto što ima smisla. Ona ne zna kako se zove pekar. On ne zna da ona postoji. Ali svake noći, u pola tri, njih dvoje su jedini budni ljudi u ovoj ulici, i to je, ona misli, neka vrsta odnosa.',
        en: "In Trešnjevka, on the fourth floor, Sanja is not sleeping. Not because she cannot, but because she may not: in the next room sleeps a child six weeks old who wakes every ninety minutes with a precision that would be funny if it were not devastating. Between wakings Sanja sits in the kitchen, with the light on because in those hours the dark is not her friend, and looks through the window at a courtyard where nothing happens. Sometimes, at half past two, she sees the light come on in the bakery opposite and someone carrying sacks of flour, and that sight, she does not know why, is precious to her — someone else is awake and doing something that makes sense. She does not know the baker's name. He does not know she exists. But every night, at half past two, the two of them are the only people awake in this street, and that, she thinks, is a kind of relationship.",
      },
      {
        hr: 'Vlado je došao do zadnje lampe, one na uglu odakle se vidi donji grad kako svijetli, i zastao, kao i svake večeri, da pogleda. Odavde Zagreb izgleda kao netko tko spava s upaljenom televizijom: svjetla trepere bez reda, negdje se pali, negdje gasi, i sve zajedno ne znači ništa i znači da su ljudi tu. Vlado nikad nije živio dolje. Rođen je na Gornjem gradu, u vrijeme kad su ondje živjeli ljudi a ne apartmani, i ostat će ovdje dok bude imao gdje, što više nije sigurno. Ali svake večeri s ovog ugla gleda dolje i misli o tome kako u svakom od tih prozora netko nešto čeka, i kako je njegov posao, kad se pravo pogleda, samo to: paliti svjetlo da se vidi da netko čeka.',
        en: 'Vlado has reached the last lamp, the one on the corner from which the lower town can be seen shining, and pauses, as every evening, to look. From here Zagreb looks like someone asleep with the television on: lights flicker without order, somewhere one comes on, somewhere one goes out, and all together it means nothing and means that people are there. Vlado has never lived down there. He was born in the Upper Town, at a time when people lived there and not apartments, and he will stay here as long as he has somewhere to stay, which is no longer certain. But every evening from this corner he looks down and thinks about how in each of those windows someone is waiting for something, and how his job, if one looks at it properly, is only this: to light a light so it can be seen that someone is waiting.',
      },
      {
        hr: 'Dijete se probudilo u tri i dvanaest. Sanja je otišla, uzela ga, sjela u naslonjač koji je postao njezino jedino mjesto na svijetu, i dok ga je hranila, gledala je kroz prozor spavaće sobe, koji gleda na drugu stranu — prema gradu, prema brdu, prema Gornjem gradu koji odavde izgleda kao niz svjetala razapetih po tami, mirnih i jednakih, kao da ih je netko pažljivo poslagao. Nije znala da su to plinske lampe. Nije znala da ih pali čovjek sa štapom. Znala je samo da su ta svjetla, za razliku od svih drugih u gradu, uvijek ista, svake noći, i da joj to godi, jer u životu u kojem se sve promijenilo u šest tjedana postoji nešto što se ne mijenja i što gori. Dijete je jelo. Ona je gledala svjetla. Negdje između njih, pomislila je, sigurno je još netko budan.',
        en: 'The child woke at twelve minutes past three. Sanja went, picked him up, sat in the armchair that had become her only place in the world, and while feeding him looked through the bedroom window, which faces the other way — towards the city, towards the hill, towards the Upper Town, which from here looks like a row of lights strung across the dark, calm and equal, as if someone had arranged them carefully. She did not know they were gas lamps. She did not know a man with a pole lit them. She knew only that those lights, unlike all the others in the city, were always the same, every night, and that this pleased her, because in a life in which everything had changed in six weeks there was something that did not change and that burned. The child ate. She watched the lights. Somewhere between them, she thought, someone else must be awake.',
      },
      {
        hr: 'Vlado je sišao kući, u stan na Tkalčićevoj koji je naslijedio i koji su mu već dvaput pokušali kupiti, i sjeo uz prozor, ne paleći svjetlo, jer njemu tama nije bila neprijatelj nego posao. Odavde se vidi komad donjeg grada, s onim prozorima koji nikad ne spavaju. Jedan od njih, pomislio je, kao svake noći, netko drži budnim zato što mora — bolest, dijete, tuga, posao. Nije znao koji. Nije trebao znati. Dovoljno je bilo da zna da postoje, kao što je bilo dovoljno da žena na prvom katu kuće broj četiri zna da će on proći u pola deset, dvadeset i pet godina, svake večeri, bez ijedne riječi. Neki odnosi ne trebaju imena. Trebaju samo redovitost.',
        en: 'Vlado went down home, to the flat on Tkalčićeva he had inherited and which people had twice tried to buy from him, and sat by the window without switching on the light, because to him the dark was not an enemy but a trade. From here one can see a piece of the lower town, with those windows that never sleep. One of them, he thought, as every night, someone keeps awake because they must — illness, a child, grief, work. He did not know which. He did not need to know. It was enough to know they existed, as it had been enough for the woman on the first floor of house number four to know that he would pass at half past nine, for twenty-five years, every evening, without a single word. Some relationships need no names. They need only regularity.',
      },
      {
        hr: 'U četiri i trideset pekar u Trešnjevci izvadio je prvi kruh. U pet i četrdeset Vlado je ustao da ugasi lampe, jer se lampe gase ručno, po redu obrnutom od paljenja, pa se peta lampa, ona pred kućom broj četiri, gasi druga, i on je i tada zastao. U šest je Sanjino dijete zaspalo onim dubokim snom koji dolazi tek kad je noć gotova, i ona je zaspala u naslonjaču s njim, s licem okrenutim prema prozoru, i zadnje što je vidjela bila su svjetla na brdu koja se gase, jedno po jedno, kao da netko pažljivo zatvara knjigu. Nije znala tko. Znala je da se to događa svaki dan, i da će se dogoditi i sutra. Grad se budio. Dva su Zagreba za trenutak bila jedan.',
        en: "At half past four the baker in Trešnjevka took out the first bread. At twenty to six Vlado got up to extinguish the lamps, because the lamps are put out by hand, in the reverse order to lighting, so the fifth lamp, the one in front of house number four, is put out second, and he paused then too. At six Sanja's child fell into that deep sleep which comes only when the night is over, and she fell asleep in the armchair with him, her face turned to the window, and the last thing she saw was the lights on the hill going out, one by one, as if someone were carefully closing a book. She did not know who. She knew it happened every day, and that it would happen tomorrow too. The city was waking. For a moment the two Zagrebs were one.",
      },
    ],
    vocabulary: [
      { hr: 'izlog', en: 'shop window', ex: 'Gase se izlozi na Radićevoj.' },
      {
        hr: 'plinska lampa',
        en: 'gas lamp',
        ex: 'Ostanu samo plinske lampe i čuvar koji ih pali.',
      },
      { hr: 'upaljač', en: 'lighter', ex: 'Nosi upaljač u unutarnjem džepu.' },
      { hr: 'kimnuti', en: 'to nod', ex: 'Ona bi kimnula, on bi kimnuo.' },
      { hr: 'razoran', en: 'devastating', ex: 'Preciznost koja bi bila smiješna da nije razorna.' },
      { hr: 'dragocjen', en: 'precious', ex: 'Taj joj je prizor dragocjen.' },
      { hr: 'treperiti', en: 'to flicker', ex: 'Svjetla trepere bez reda.' },
      {
        hr: 'naslonjač',
        en: 'armchair',
        ex: 'Naslonjač je postao njezino jedino mjesto na svijetu.',
      },
      { hr: 'razapet', en: 'stretched, strung out', ex: 'Niz svjetala razapetih po tami.' },
      { hr: 'redovitost', en: 'regularity', ex: 'Neki odnosi ne trebaju imena, nego redovitost.' },
    ],
    quiz: [
      {
        q: 'Što dijeli "dva Zagreba" prema pripovjedaču?',
        qEn: 'What divides the "two Zagrebs" according to the narrator?',
        opts: ['Rijeka', 'Pruga', 'Sat — vrijeme kad se koji dio zatvara', 'Tramvajska linija'],
        correct: 2,
      },
      {
        q: 'Zašto Vlado pred kućom broj četiri zastaje dulje?',
        qEn: 'Why does Vlado pause longer in front of house number four?',
        opts: [
          'Jer je lampa pokvarena',
          'Jer se ondje prije godinu dana ugasilo svjetlo žene koja mu je 25 godina kimala s prozora',
          'Jer tamo živi njegova obitelj',
          'Jer ga tamo turisti fotografiraju',
        ],
        correct: 1,
      },
      {
        q: 'Zašto je Sanji dragocjen prizor pekara u pola tri?',
        qEn: 'Why is the sight of the baker at half past two precious to Sanja?',
        opts: [
          'Jer joj donosi kruh',
          'Jer je netko drugi budan i radi nešto što ima smisla',
          'Jer ga poznaje od djetinjstva',
          'Jer želi postati pekarica',
        ],
        correct: 1,
      },
      {
        q: 'Što Sanja ne zna o svjetlima na brdu, a što joj svejedno godi?',
        qEn: 'What does Sanja not know about the lights on the hill, and what nonetheless pleases her?',
        opts: [
          'Ne zna da su plinske i da ih pali čovjek sa štapom; godi joj da su uvijek ista',
          'Ne zna da su ugašena',
          'Ne zna da ih vidi samo ona',
          'Ne zna da su električna; godi joj što se mijenjaju',
        ],
        correct: 0,
      },
      {
        q: 'Što, prema Vladu, neki odnosi trebaju umjesto imena?',
        qEn: 'According to Vlado, what do some relationships need instead of names?',
        opts: ['Riječi', 'Redovitost', 'Pisma', 'Susrete'],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_kamen_koji_pamti',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🪨',
    title: 'Kamen koji pamti',
    titleEn: 'The Stone That Remembers',
    duration: 15,
    focus: 'Literary prose • Craft and inheritance • Extended metaphor sustained across a text',
    intro:
      'An original short story. A stonemason in Brač takes on a young apprentice from Zagreb who has never held a chisel. Over one summer she learns what the stone will and will not allow — and what her teacher has been cutting for forty years.',
    paragraphs: [
      {
        hr: 'Prvo što joj je rekao bilo je da kamen ne oprašta, a drugo da to nije istina. "Ljudi to govore", rekao je, sjedeći na bloku bijelog bračkog vapnenca koji je čekao da postane nešto, "jer zvuči mudro. Kamen oprašta sve. Ne pamti ništa. Ti pamtiš. Svaki krivi udarac koji napraviš vidjet ćeš do kraja života, a kamenu je svejedno." Zvao se Frane, imao je šezdeset i devet godina i ruke koje su izgledale kao da su same od kamena, i Lucija, koja je došla iz Zagreba sa završenim kiparstvom i bez ijednog dana rada u kamenolomu, shvatila je prvog jutra da ono što je učila pet godina ovdje vrijedi otprilike koliko i njezin naglasak.',
        en: 'The first thing he told her was that stone does not forgive, and the second that this was not true. "People say that," he said, sitting on a block of white Brač limestone waiting to become something, "because it sounds wise. Stone forgives everything. It remembers nothing. You remember. Every wrong blow you make you will see for the rest of your life, and the stone couldn\'t care less." His name was Frane, he was sixty-nine and had hands that looked as if they themselves were made of stone, and Lucija, who had come from Zagreb with a degree in sculpture and not a single day\'s work in a quarry, understood on the first morning that what she had studied for five years was worth here roughly as much as her accent.',
      },
      {
        hr: 'Radionica je bila iznad Pučišća, na mjestu gdje se vapnenac vadi tisuću godina i gdje je, kako je Frane volio reći, "pola Europe nastalo": Dioklecijanova palača, šibenska katedrala, dio Bijele kuće u Washingtonu — što je istina, ili barem istina kakvu otok priča o sebi. Lucija je prvi tjedan samo gledala. Frane je radio bez mjerenja, bez crteža, s dlijetom i drvenim batom, i kamen je pod njegovim rukama nestajao onako kako nestaje snijeg — ne odjednom, nego kao da se povlači sam, po vlastitoj odluci. Pitala ga je kako zna gdje udariti. Rekao je da ne zna. "Kamen zna. Ja slušam."',
        en: 'The workshop was above Pučišća, in the place where limestone has been quarried for a thousand years and where, as Frane liked to say, "half of Europe came from": Diocletian\'s Palace, Šibenik Cathedral, part of the White House in Washington — which is true, or at least the truth the island tells about itself. The first week Lucija only watched. Frane worked without measuring, without drawings, with a chisel and a wooden mallet, and the stone vanished under his hands the way snow vanishes — not all at once, but as if withdrawing of its own accord, by its own decision. She asked him how he knew where to strike. He said he did not know. "The stone knows. I listen."',
      },
      {
        hr: 'Prvi je vlastiti komad dobila u drugom tjednu: blok veličine glave, i zadatak da ga pretvori u kocku. Kocku. Pet godina kiparstva, izložbe, jedna nagrada — i kocka. Naljutila se, tiho, onako kako se ljute ljudi koji su se školovali da bi im netko rekao da ne znaju ništa, i zatim je počela, i za tri dana napravila kocku koja je bila gotovo kocka, s jednom stranicom koja je "pobjegla", kako je Frane rekao, ne prezirno nego s onim tonom kojim liječnik izgovara dijagnozu. "Udarila si prejako jer si htjela da bude gotovo. Kamen ne zna što je gotovo. Zna samo što je sljedeće." Kocku je stavio na policu, među desetke drugih, i ona je tek tada vidjela da su sve ondje — kocke svih koji su ikad ušli u tu radionicu, svaka s jednom stranicom koja je pobjegla.',
        en: 'She got her first piece of her own in the second week: a block the size of a head, and the task of turning it into a cube. A cube. Five years of sculpture, exhibitions, one prize — and a cube. She got angry, quietly, the way people get angry who have been educated only to be told they know nothing, and then she began, and in three days made a cube that was almost a cube, with one face that had "escaped", as Frane put it, not contemptuously but in the tone with which a doctor pronounces a diagnosis. "You struck too hard because you wanted it to be finished. Stone doesn\'t know what finished is. It only knows what is next." He put the cube on a shelf, among dozens of others, and only then did she see that they were all there — the cubes of everyone who had ever entered that workshop, each with one face that had escaped.',
      },
      {
        hr: 'Ljeto je prolazilo u prašini. Naučila je da vapnenac ima žile kao drvo i da ih treba čitati prije prvog udarca; da postoji zvuk koji kamen ispusti trenutak prije nego što pukne krivo, i da se taj zvuk ne može opisati nego samo čuti; da se ne radi na suncu, ne zato što je vruće nego zato što se u jakom svjetlu ne vidi ono što treba vidjeti, a to su sjene. Naučila je da Frane ne govori mnogo, a da kad govori, govori u rečenicama koje je poslije ponavljala u sebi kao molitve: "Ne skidaj ono što ne moraš." "Kamen se ne dodaje." "Ako ne znaš što dalje, stani i pogledaj odakle si došla." Tek u kolovozu shvatila je da nijedna od tih rečenica nije samo o kamenu.',
        en: 'The summer passed in dust. She learned that limestone has veins like wood and that they must be read before the first blow; that there is a sound the stone makes a moment before it breaks wrongly, and that the sound cannot be described but only heard; that one does not work in the sun, not because it is hot but because in strong light one cannot see what needs to be seen, and that is the shadows. She learned that Frane does not talk much, and that when he does he speaks in sentences she later repeated to herself like prayers: "Don\'t take off what you don\'t have to." "Stone is not added." "If you don\'t know what next, stop and look where you came from." Only in August did she understand that none of those sentences was only about stone.',
      },
      {
        hr: 'U kutu radionice, pod platnom koje nikad nije dizao, stajao je komad na kojem Frane nije radio dok je ona bila tu, a koji je, sudeći po prašini na platnu, stajao dugo. Pitala je jedanput. Rekao je da je to "nešto za sebe", što je na otoku značilo da se ne pita dalje. Ali jednog popodneva u rujnu, kad je jugo zatvorilo kamenolom i kad su sjedili u radionici bez posla, on je ustao, skinuo platno i pokazao joj. Bila je to figura — ženska, u prirodnoj veličini, dovršena do ramena, s licem koje još nije bilo lice nego nagovještaj: čelo, početak nosa, jedan obraz. Radio je na tome, rekao je, četrdeset godina. "Jednu godinu jedan udarac. Ponekad nijedan." Nije rekao tko je. Nije trebao.',
        en: 'In the corner of the workshop, under a cloth he never lifted, stood a piece Frane did not work on while she was there, and which, judging by the dust on the cloth, had stood for a long time. She asked once. He said it was "something for myself", which on the island meant one does not ask further. But one afternoon in September, when the south wind had closed the quarry and they sat in the workshop with no work, he got up, took off the cloth and showed her. It was a figure — female, life-size, finished to the shoulders, with a face that was not yet a face but a hint: a forehead, the beginning of a nose, one cheek. He had been working on it, he said, for forty years. "One year, one blow. Sometimes none." He did not say who it was. He did not need to.',
      },
      {
        hr: 'Stajali su pred njom dugo. Zatim je Frane rekao rečenicu koju je Lucija poslije godinama pokušavala zapisati i nikad nije uspjela točno: da je kamen jedini materijal koji dopušta da se čeka, jer se ne suši, ne truli i ne mijenja, i da je zato jedini materijal za stvari koje se ne mogu dovršiti. "Drvo bi me požurilo. Glina bi se raspala. Kamen čeka koliko ja čekam. Zato sam ga izabrao. Ili je on izabrao mene, kako ti se više sviđa." Zatim je vratio platno, kao netko tko pokriva usnulog čovjeka, i rekao da sutra rade na kapitelu za neku crkvu u Njemačkoj, i da bi ona mogla napraviti list akanta, ako se usudi.',
        en: 'They stood before it a long time. Then Frane said a sentence Lucija for years afterwards tried to write down and never managed exactly: that stone is the only material that allows one to wait, because it does not dry, does not rot and does not change, and that it is therefore the only material for things that cannot be finished. "Wood would hurry me. Clay would fall apart. Stone waits as long as I wait. That is why I chose it. Or it chose me, whichever you prefer." Then he replaced the cloth, like someone covering a sleeping man, and said that tomorrow they would work on a capital for some church in Germany, and that she could make an acanthus leaf, if she dared.',
      },
      {
        hr: 'Usudila se. List je ispao dobar — ne Franin, ali dobar, s jednim rubom koji je pobjegao i koji je Frane pogledao i nije komentirao, što je bila najveća pohvala koju je od njega dobila. U listopadu se vratila u Zagreb, u atelijer koji joj je sad izgledao kao soba nekoga drugoga, i prvo što je učinila bilo je da je kupila blok bračkog kamena, veličine glave, i stavila ga na stol. Nije ga dirala tjednima. Zatim je jednog jutra uzela dlijeto i napravila jedan udarac, dobar, i stala. Kamen je čekao. Ona je, prvi put u životu, znala kako se to radi.',
        en: "She dared. The leaf came out well — not Frane's, but well, with one edge that escaped and which Frane looked at and did not comment on, which was the greatest praise she ever received from him. In October she returned to Zagreb, to a studio that now looked to her like someone else's room, and the first thing she did was buy a block of Brač stone, the size of a head, and put it on the table. She did not touch it for weeks. Then one morning she took a chisel and made one blow, a good one, and stopped. The stone waited. She, for the first time in her life, knew how that was done.",
      },
    ],
    vocabulary: [
      { hr: 'vapnenac', en: 'limestone', ex: 'Blok bijelog bračkog vapnenca.' },
      { hr: 'kamenolom', en: 'quarry', ex: 'Nijedan dan rada u kamenolomu.' },
      { hr: 'dlijeto', en: 'chisel', ex: 'Radio je s dlijetom i drvenim batom.' },
      { hr: 'bat', en: 'mallet', ex: 'Drveni bat u desnoj ruci.' },
      { hr: 'žila', en: 'vein (in stone/wood)', ex: 'Vapnenac ima žile kao drvo.' },
      {
        hr: 'nagovještaj',
        en: 'hint, intimation',
        ex: 'Lice koje još nije lice nego nagovještaj.',
      },
      { hr: 'truliti', en: 'to rot', ex: 'Kamen se ne suši i ne truli.' },
      { hr: 'kapitel', en: 'capital (architecture)', ex: 'Sutra rade na kapitelu za crkvu.' },
      { hr: 'akant', en: 'acanthus', ex: 'Mogla bi napraviti list akanta.' },
      { hr: 'usuditi se', en: 'to dare', ex: 'Usudila se.' },
    ],
    quiz: [
      {
        q: 'Zašto Frane kaže da "kamen oprašta sve"?',
        qEn: 'Why does Frane say that "stone forgives everything"?',
        opts: [
          'Jer se kamen može zalijepiti',
          'Jer kamen ne pamti — pamti onaj tko radi, i to je ono što ne oprašta',
          'Jer je vapnenac mekan',
          'Jer se pogreške mogu ispraviti bojom',
        ],
        correct: 1,
      },
      {
        q: 'Što Lucija vidi kad Frane stavi njezinu kocku na policu?',
        qEn: 'What does Lucija see when Frane puts her cube on the shelf?',
        opts: [
          'Da je njezina kocka najbolja',
          'Da su ondje kocke svih koji su ikad ušli u radionicu, svaka s jednom stranicom koja je pobjegla',
          'Da je polica prazna',
          'Da Frane skuplja kocke za prodaju',
        ],
        correct: 1,
      },
      {
        q: 'Zašto se u radionici ne radi na suncu?',
        qEn: 'Why is work not done in the sun in the workshop?',
        opts: [
          'Jer je prevruće',
          'Jer sunce grije kamen pa puca',
          'Jer Frane ne voli sunce',
          'Jer se u jakom svjetlu ne vide sjene, a njih treba vidjeti',
        ],
        correct: 3,
      },
      {
        q: 'Zašto je kamen, prema Franinim riječima, "jedini materijal za stvari koje se ne mogu dovršiti"?',
        qEn: 'Why is stone, in Frane\'s words, "the only material for things that cannot be finished"?',
        opts: [
          'Jer je najjeftiniji',
          'Jer se ne suši, ne truli i ne mijenja — dopušta da se čeka',
          'Jer ga ima najviše na otoku',
          'Jer je najtvrđi',
        ],
        correct: 1,
      },
      {
        q: 'Što Lucija čini s blokom kamena u Zagrebu i što to znači?',
        qEn: 'What does Lucija do with the block of stone in Zagreb, and what does it mean?',
        opts: [
          'Napravi kocku za tri dana',
          'Napravi jedan dobar udarac i stane — naučila je čekati',
          'Proda ga',
          'Vrati ga Frani',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_gospodja_vera',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🎭',
    title: 'Gospođa Vera odlazi u kazalište',
    titleEn: 'Mrs Vera Goes to the Theatre',
    duration: 15,
    focus:
      'Literary prose • Comic register with a tragic floor • Social observation through one evening',
    intro:
      'An original short story. Every first Thursday of the month for forty years, Mrs Vera has gone to the Croatian National Theatre. Tonight she goes alone for the first time, and discovers that a ritual can survive the person it was shared with.',
    paragraphs: [
      {
        hr: 'Gospođa Vera Marinković izlazila je iz kuće u pet i četvrt, iako je predstava počinjala u pola osam, a do kazališta je bilo dvadeset minuta tramvajem, jer je odlazak u kazalište, prema njezinu shvaćanju, počinjao trenutkom kad se zaključaju vrata, a ne trenutkom kad se ugase svjetla. Nosila je tamnoplavi kostim koji je nosila na sve premijere od 1987., cipele koje su bile udobne i koje je prezirala, i torbicu u kojoj je bilo točno ono što treba: karta, naočale, rupčić, bombon protiv kašlja koji nikad nije pojela i program prošle predstave, koji bi u pauzi čitala kao da ga vidi prvi put. Prvi je četvrtak u mjesecu, a prvi četvrtak u mjesecu, već četrdeset godina, znači kazalište. To što je Đuro umro u veljači nije, odlučila je, razlog da se raspored mijenja.',
        en: 'Mrs Vera Marinković left the house at a quarter past five, although the performance began at half past seven and the theatre was twenty minutes away by tram, because going to the theatre, as she understood it, began the moment the door was locked and not the moment the lights went down. She wore the navy suit she had worn to every premiere since 1987, shoes that were comfortable and that she despised, and a handbag containing exactly what was needed: the ticket, her glasses, a handkerchief, a cough sweet she never ate, and the programme of the previous production, which she would read in the interval as if seeing it for the first time. It was the first Thursday of the month, and the first Thursday of the month, for forty years, had meant the theatre. That Đuro had died in February was not, she had decided, a reason to change the schedule.',
      },
      {
        hr: 'U tramvaju je sjela na mjesto na kojem su uvijek sjedili, do prozora, i ostavila ono pored sebe prazno, ne iz sentimentalnosti — gospođa Vera je sentimentalnost smatrala oblikom nereda — nego iz navike, koja je, kako je shvatila kad je neki mladić upitao je li slobodno, bila jača od odluke. "Slobodno je", rekla je, i mladić je sjeo, i ona je cijelim putem do Trga gledala kroz prozor s izrazom osobe koja je nešto izgubila u tramvaju i ne želi da se to primijeti. Na Trgu je izišla, kao uvijek, jednu stanicu ranije, jer se do kazališta ide pješice, preko Zrinjevca, pod platanama, "da se čovjek pripremi". Đuro je to zvao procesijom. Ona je to zvala redom.',
        en: 'On the tram she sat in the seat where they had always sat, by the window, and left the one beside her empty, not from sentimentality — Mrs Vera considered sentimentality a form of untidiness — but from habit, which, she realised when a young man asked whether it was free, was stronger than decision. "It is free," she said, and the young man sat down, and all the way to the Square she looked out of the window with the expression of a person who has lost something on the tram and does not want it noticed. At the Square she got off, as always, one stop early, because one walks to the theatre, across Zrinjevac, under the plane trees, "so that one can prepare". Đuro had called it the procession. She called it order.',
      },
      {
        hr: 'Pred kazalištem je stajala ona publika koju je poznavala napamet, ne po imenima nego po kategorijama: pretplatnici, sijedi i točni; gimnazijalci s nastavnicom, u tenisicama, s izrazom lica koji je govorio da bi radije bili bilo gdje drugdje i koji se do pauze redovito mijenjao; parovi na prvom spoju, koji su kazalište izabrali jer se u njemu ne mora razgovarati; i jedan gospodin s leptir-mašnom koji je dolazio na svaku predstavu sam, četrdeset godina, i kojeg su ona i Đuro zvali Grof, i o kojem su izmišljali priče, i za kojeg je sad, prvi put, pomislila da možda i on o njima nešto misli. Ili je mislio. Sad je ona bila sama, kao on, i to ju je, umjesto da je rastuži, nekako uvrijedilo.',
        en: 'In front of the theatre stood the audience she knew by heart, not by names but by categories: subscribers, grey and punctual; secondary-school pupils with their teacher, in trainers, with an expression that said they would rather be anywhere else and that regularly changed by the interval; couples on a first date, who had chosen the theatre because in it one need not talk; and one gentleman with a bow tie who came to every performance alone, for forty years, whom she and Đuro had called the Count, about whom they invented stories, and about whom she now thought, for the first time, that perhaps he too thought something about them. Or had. Now she was alone, like him, and that, instead of saddening her, somehow offended her.',
      },
      {
        hr: 'Sjedalo je bilo isto — deveti red, sredina, kupljeno u pretplati koja je od ožujka bila na jedno ime — i pored njega, s desne strane, sjedila je žena njezinih godina koja je odmah počela razgovarati, što je gospođa Vera smatrala nepristojnim, dok se nije pokazalo da žena govori o nečemu što gospođu Veru zanima: o tome da je glavni glumac "pretjerao u onoj sceni s pismom" u prošloj predstavi, što je bilo točno, i što je Đuro, koji nije razumio kazalište ali je razumio ljude, također primijetio. Žena se zvala Nada, bila je udovica pet godina, i dolazila je, rekla je, "jer u kući nema nikoga tko bi mi rekao da pretjerujem". Gospođa Vera nije znala je li to bila šala. Nasmijala se za svaki slučaj.',
        en: 'The seat was the same — ninth row, centre, bought on a subscription that since March had been in one name — and beside it, on the right, sat a woman her own age who began talking at once, which Mrs Vera considered rude, until it turned out the woman was talking about something that interested Mrs Vera: that the leading actor had "overdone that scene with the letter" in the last production, which was true, and which Đuro, who did not understand theatre but understood people, had also noticed. The woman\'s name was Nada, she had been a widow for five years, and she came, she said, "because at home there is nobody to tell me I\'m overdoing it". Mrs Vera did not know whether that was a joke. She laughed just in case.',
      },
      {
        hr: 'Predstava je bila Krleža, što je gospođa Vera odobravala, jer Krležu se ne razumije, pa se čovjek u kazalištu barem osjeća kao da je nešto zaradio. Gledala je pozorno, kao uvijek, s naočalama koje je stavljala na početku svakog čina i skidala na kraju, i u drugom činu, u sceni u kojoj netko umire duže nego što je to medicinski moguće, uhvatila se da je nagnula glavu udesno, prema mjestu na kojem bi bio Đuro, da mu šapne ono što mu je četrdeset godina šaptala u toj vrsti scene: "Sad će." Nije bilo koga. Umjesto toga, s desne strane, Nada je šapnula: "Sad će." Gospođa Vera se okrenula. Nada je gledala u pozornicu, s izrazom lica žene koja to šapće već pet godina u prazno i koja je prvi put dobila odgovor, jer je gospođa Vera, ne razmišljajući, šapnula natrag: "Uvijek predugo."',
        en: 'The play was Krleža, of which Mrs Vera approved, because one does not understand Krleža, so in the theatre one at least feels one has earned something. She watched attentively, as always, with the glasses she put on at the start of each act and took off at the end, and in the second act, in a scene in which someone dies longer than is medically possible, she caught herself tilting her head to the right, towards the place where Đuro would have been, to whisper what she had whispered to him for forty years in that kind of scene: "Any moment now." There was no one. Instead, from the right, Nada whispered: "Any moment now." Mrs Vera turned. Nada was looking at the stage, with the expression of a woman who has been whispering that into emptiness for five years and has for the first time received an answer, because Mrs Vera, without thinking, whispered back: "Always too long."',
      },
      {
        hr: 'U pauzi su stajale u foajeu, svaka sa svojom čašom vode — vino u pauzi gospođa Vera smatrala je znakom da se čovjek nije došao gledati predstavu nego sebe — i razgovarale o predstavi onako kako se razgovara o predstavi koju obje gledaju trideset godina u različitim postavama: bez strasti, s preciznošću, kao dva kirurga o operaciji. Nada je znala imena svih glumaca. Gospođa Vera znala je godine svih premijera. Zajedno su, shvatila je, znale kazalište onako kako ga zna netko tko u njemu radi, a nijedna nije nikad radila ništa što ima veze s kazalištem. Nada je bila knjigovotkinja. Gospođa Vera učiteljica matematike. "Zato i volimo Krležu", rekla je Nada. "Nitko ne očekuje da išta razumijemo."',
        en: 'In the interval they stood in the foyer, each with her glass of water — wine in the interval Mrs Vera considered a sign that one had come to watch oneself rather than the play — and talked about the production the way one talks about a play both have been watching for thirty years in different casts: without passion, with precision, like two surgeons about an operation. Nada knew the names of all the actors. Mrs Vera knew the years of all the premieres. Together, she realised, they knew the theatre the way someone who works in it knows it, and neither had ever done anything connected with the theatre. Nada was a bookkeeper. Mrs Vera a mathematics teacher. "That\'s why we love Krleža," said Nada. "Nobody expects us to understand anything."',
      },
      {
        hr: 'Poslije predstave gospođa Vera nije otišla odmah, kako je uvijek odlazila, nego je stajala pred kazalištem dok se publika razilazila, i gledala Grofa kako odlazi sam prema Ilici, s leptir-mašnom i s korakom čovjeka koji ide kući u prazan stan i koji je na to navikao onako kako se navikne na šum u uhu. Nada je stajala uz nju. Nijedna nije predložila ništa. Zatim je Nada rekla da sljedeći prvi četvrtak daju Držića, da ona sjedi u devetom redu, desno od sredine, i da će, ako gospođa Vera dođe, ponijeti bombone protiv kašlja, "jer je u devetom redu propuh". Gospođa Vera je rekla da uvijek nosi svoje. Nada je rekla da zna, ali da ih nikad ne pojede. Gospođa Vera je pogledala tu ženu koja je pet godina sjedila do njih, ne primijećena, i primjećivala, i rekla da će doći.',
        en: 'After the performance Mrs Vera did not leave at once, as she always had, but stood in front of the theatre while the audience dispersed, and watched the Count walking away alone towards Ilica, with his bow tie and the gait of a man going home to an empty flat who had grown used to it the way one grows used to a ringing in the ear. Nada stood beside her. Neither proposed anything. Then Nada said that next first Thursday they were doing Držić, that she sat in the ninth row, right of centre, and that if Mrs Vera came she would bring cough sweets, "because there\'s a draught in the ninth row". Mrs Vera said she always brought her own. Nada said she knew, but that she never ate them. Mrs Vera looked at this woman who for five years had sat beside them, unnoticed, noticing, and said she would come.',
      },
      {
        hr: 'U tramvaju kući sjela je do prozora i ostavila mjesto pored sebe prazno, i kad je neka djevojka upitala je li slobodno, rekla je da nije, prvi put u životu, i lagala, i nije se osjećala loše. Đuro bi rekao da je to sentimentalno. Ona bi rekla da nije, da je to red — da se neka mjesta drže ne za onoga koga nema nego za onoga tko bi mogao doći. Kod kuće je stavila program u ladicu, uz trideset i devet drugih, i na poleđini, kao uvijek, olovkom zapisala datum, predstavu i jednu riječ ocjene. Zatim je, prvi put, dodala još nešto: "Nada, 9. red." I zaključala vrata, jer je odlazak u kazalište, prema njezinu shvaćanju, završavao tek tada.',
        en: 'On the tram home she sat by the window and left the seat beside her empty, and when a girl asked whether it was free she said it was not, for the first time in her life, and lied, and did not feel bad. Đuro would have said it was sentimental. She would have said it was not, that it was order — that some seats are kept not for the one who is gone but for the one who might come. At home she put the programme in the drawer, with thirty-nine others, and on the back, as always, wrote in pencil the date, the play and a one-word verdict. Then, for the first time, she added something more: "Nada, 9th row." And locked the door, because going to the theatre, as she understood it, ended only then.',
      },
    ],
    vocabulary: [
      { hr: 'kostim', en: "suit (woman's)", ex: 'Tamnoplavi kostim za sve premijere.' },
      { hr: 'pretplatnik', en: 'subscriber', ex: 'Pretplatnici, sijedi i točni.' },
      { hr: 'leptir-mašna', en: 'bow tie', ex: 'Gospodin s leptir-mašnom dolazio je sam.' },
      {
        hr: 'pretjerati',
        en: 'to overdo, exaggerate',
        ex: 'Glumac je pretjerao u sceni s pismom.',
      },
      { hr: 'čin', en: 'act (of a play)', ex: 'Stavljala je naočale na početku svakog čina.' },
      { hr: 'foaje', en: 'foyer', ex: 'U pauzi su stajale u foajeu.' },
      { hr: 'postava', en: 'cast (theatre)', ex: 'Predstava u različitim postavama.' },
      { hr: 'razilaziti se', en: 'to disperse', ex: 'Publika se razilazila.' },
      { hr: 'propuh', en: 'draught', ex: 'U devetom redu je propuh.' },
      { hr: 'ocjena', en: 'verdict, grade', ex: 'Jedna riječ ocjene na poleđini programa.' },
    ],
    quiz: [
      {
        q: 'Kad, prema gospođi Veri, počinje odlazak u kazalište?',
        qEn: 'When, according to Mrs Vera, does going to the theatre begin?',
        opts: [
          'Kad se ugase svjetla',
          'Kad tramvaj stigne na Trg',
          'Kad počne drugi čin',
          'Kad se zaključaju vrata kuće',
        ],
        correct: 3,
      },
      {
        q: 'Zašto gospođa Vera ostavlja mjesto u tramvaju prazno?',
        qEn: 'Why does Mrs Vera leave the seat on the tram empty?',
        opts: [
          'Iz sentimentalnosti',
          'Iz navike koja je jača od odluke',
          'Jer je mjesto rezervirano',
          'Jer ne voli sjediti do stranaca',
        ],
        correct: 1,
      },
      {
        q: 'Što se dogodi u drugom činu što promijeni večer?',
        qEn: 'What happens in the second act that changes the evening?',
        opts: [
          'Glumac zaboravi tekst',
          'Nada šapne rečenicu koju je Vera četrdeset godina šaptala Đuri, a Vera joj odgovori',
          'Gospođa Vera zaspi',
          'Grof napusti predstavu',
        ],
        correct: 1,
      },
      {
        q: 'Zašto, prema Nadi, obje vole Krležu?',
        qEn: 'Why, according to Nada, do they both love Krleža?',
        opts: [
          'Jer ga razumiju bolje od drugih',
          'Jer nitko ne očekuje da išta razumiju',
          'Jer je iz njihova kvarta',
          'Jer su ga učile u školi',
        ],
        correct: 1,
      },
      {
        q: 'Što znači Verina laž u tramvaju kući?',
        qEn: "What does Vera's lie on the tram home mean?",
        opts: [
          'Da je ljuta na djevojku',
          'Da mjesto sada drži ne za onoga koga nema, nego za onoga tko bi mogao doći',
          'Da se boji stranaca',
          'Da čeka Đuru',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_karta',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🗺️',
    title: 'Karta koja ne postoji',
    titleEn: 'The Map That Does Not Exist',
    duration: 15,
    focus: 'Literary prose • Memory and place • Dialogue that withholds more than it says',
    intro:
      "An original short story. A cartographer's daughter clears out her father's office and finds a hand-drawn map of a Croatian town she cannot locate — because he drew it from memory, of a place that no longer exists on any map but his.",
    paragraphs: [
      {
        hr: 'Otac je crtao karte, službeno, četrdeset godina, za Državnu geodetsku upravu, i to je bio posao o kojem se u obitelji govorilo kao o vremenu — postojao je, nije se komentirao. Kad je umro, Dora je dobila zadatak isprazniti njegovu radnu sobu, jer je majka rekla da ne može, a brat da nema vremena, što je bilo isto. Soba je bila kakvom ju je pamtila: ormari s rolama papira, mirisi tuša i gume za brisanje, jedan prozor koji je gledao na dvorište i jedan koji nije gledao ni na što, jer ga je otac zazidao policama. Karte su bile posložene po godinama i po područjima, s urednim naljepnicama, i ona ih je prvo tjedan dana samo slagala u kutije za arhiv, ne gledajući, jer je znala da će, ako pogleda, stati.',
        en: 'Her father drew maps, officially, for forty years, for the State Geodetic Administration, and it was a job spoken of in the family as one speaks of the weather — it existed, it was not commented on. When he died, Dora was given the task of clearing his study, because her mother said she could not and her brother that he had no time, which was the same thing. The room was as she remembered it: cupboards with rolls of paper, the smells of ink and eraser, one window looking onto the courtyard and one looking onto nothing, because her father had walled it up with shelves. The maps were arranged by year and by area, with neat labels, and for the first week she only packed them into archive boxes without looking, because she knew that if she looked, she would stop.',
      },
      {
        hr: 'Stala je drugog tjedna, na najnižoj polici, gdje je pod službenim rolama ležala jedna koja nije imala naljepnicu. Razmotala ju je na stolu i pridržala rubove knjigama, kao što je otac činio, i pogledala. Bila je to karta gradića — ulice, trg, crkva označena križem, rijeka s mostom, groblje, škola. Crtana rukom, tušem, s onom preciznošću koja je bila očeva i s legendom u kutu ispisanom njegovim rukopisom: "Mjerilo 1 : 2000. Stanje 1961." Ime mjesta nije bilo napisano. Dora je poznavala hrvatske gradove bolje od većine ljudi, jer je odrasla nad kartama, i ovaj nije prepoznala. Nije bio nigdje.',
        en: 'She stopped in the second week, on the lowest shelf, where under the official rolls lay one that had no label. She unrolled it on the table and held down the edges with books, as her father used to, and looked. It was a map of a small town — streets, a square, a church marked with a cross, a river with a bridge, a cemetery, a school. Hand-drawn, in ink, with that precision which was her father\'s and with a legend in the corner in his handwriting: "Scale 1:2000. State as of 1961." The name of the place was not written. Dora knew Croatian towns better than most people, because she had grown up over maps, and this one she did not recognise. It was nowhere.',
      },
      {
        hr: 'Tražila je tjedan dana. Uspoređivala je oblik rijeke s rijekama koje je znala, položaj crkve s položajima crkava, mrežu ulica sa svime što je mogla pronaći u očevu arhivu i na internetu. Ništa nije odgovaralo, ili je odgovaralo djelomično, kao lice koje nas podsjeća na nekoga a nije taj netko. Onda je učinila ono što je trebala odmah: odnijela je kartu majci, koja je pogledala, dugo, i rekla — ne odmah, nego nakon što je ustala, prišla prozoru i vratila se — da je to Rakovica. Ne ona Rakovica koju bi Dora našla na karti, nego dio Rakovice koji više ne postoji, jer je selo u kojem je otac odrastao 1965. potopljeno akumulacijskim jezerom za hidroelektranu. "Nikad o tome nije govorio", rekla je majka. "Rekao mi je jedanput, prije vjenčanja, i rekao da me više ne pita."',
        en: 'She searched for a week. She compared the shape of the river with rivers she knew, the position of the church with the positions of churches, the street grid with everything she could find in her father\'s archive and online. Nothing matched, or matched partially, like a face that reminds us of someone and is not that someone. Then she did what she should have done at once: she took the map to her mother, who looked, for a long time, and said — not at once, but after standing up, going to the window and coming back — that it was Rakovica. Not the Rakovica Dora would find on a map, but the part of Rakovica that no longer exists, because the village in which her father grew up was flooded in 1965 by a reservoir for a hydroelectric plant. "He never spoke of it," said her mother. "He told me once, before the wedding, and said not to ask him again."',
      },
      {
        hr: 'Dora je kartu odnijela natrag u radnu sobu i gledala je drugačije. Sad je vidjela ono što prije nije: da kuće nisu samo pravokutnici nego da svaka ima broj, i da su brojevi ispisani sitno, uz rub, kao popis; da je jedna kuća, blizu crkve, označena drugačije, s malim krugom koji na službenim kartama ne znači ništa; da je uz školu nacrtano drvo, jedno jedino drvo na cijeloj karti, što geodet ne bi nacrtao osim ako to drvo nije bilo važno. Otac je imao trinaest godina kad je selo potopljeno. Ovu je kartu, sudeći po tušu i papiru, crtao mnogo kasnije — možda dvadeset godina kasnije, možda više. Crtao je iz sjećanja, mjerilom 1 : 2000, mjesto koje je stajalo pod trideset metara vode. Nije bilo drugog načina da ga zadrži.',
        en: 'Dora took the map back to the study and looked at it differently. Now she saw what she had not seen before: that the houses were not just rectangles but that each had a number, and the numbers were written small, along the edge, like a register; that one house, near the church, was marked differently, with a small circle which on official maps means nothing; that beside the school a tree was drawn, the single tree on the whole map, which a surveyor would not draw unless the tree mattered. Her father had been thirteen when the village was flooded. This map, judging by the ink and the paper, he had drawn much later — perhaps twenty years later, perhaps more. He had drawn from memory, at a scale of 1:2000, a place that stood under thirty metres of water. There had been no other way to keep it.',
      },
      {
        hr: 'Otišla je u Rakovicu u listopadu, sama, autom, s kartom u tubi na stražnjem sjedalu. Jezero je bilo veliko i mirno i ni po čemu nije izgledalo kao mjesto pod kojim nešto leži; na obali su bili kamp, restoran i iznajmljivač čamaca koji je zimi bio zatvoren. Stajala je na obali s kartom i pokušavala uskladiti oblik zaljeva s oblikom rijeke na papiru, i nije mogla, jer voda ne pamti obale koje je progutala. Zatim je stariji čovjek koji je popravljao ogradu kampa prišao i, ne pitajući ništa, pogledao kartu preko njezina ramena i rekao: "To je staro selo. Crkva je bila tamo, gdje je ona plutača." Pokazao je. Na sredini jezera, na mjestu koje se ni po čemu nije razlikovalo od ostatka vode, plutala je crvena plutača. "Za zvono", rekao je. "Zvono su izvadili prije potapanja. Plutača je da se zna."',
        en: 'She went to Rakovica in October, alone, by car, with the map in a tube on the back seat. The lake was large and calm and in no way looked like a place under which something lies; on the shore there were a campsite, a restaurant and a boat-hire business closed for the winter. She stood on the shore with the map and tried to reconcile the shape of the bay with the shape of the river on the paper, and could not, because water does not remember the banks it has swallowed. Then an older man who was mending the campsite fence came over and, asking nothing, looked at the map over her shoulder and said: "That\'s the old village. The church was there, where that buoy is." He pointed. In the middle of the lake, at a spot in no way different from the rest of the water, floated a red buoy. "For the bell," he said. "They took the bell out before the flooding. The buoy is so that people know."',
      },
      {
        hr: 'Čovjek se zvao Mile i imao je sedamdeset i četiri godine, što je značilo da je 1965. imao trinaest, kao i njezin otac. Pitala ga je poznaje li prezime. Poznavao je. "Bili smo u razredu", rekao je, i pogledao kartu ponovno, sad pažljivije, i prstom prešao preko ulica kao netko koji hoda. Zaustavio se kod kuće s krugom. "To je njihova. Tu je stanovao." Pa kod drveta uz školu: "Orah. Penjali smo se. Tvoj otac je pao i slomio ruku, i učiteljica ga je nosila do liječnika, tri kilometra, jer nije bilo auta." Zastao je. "On to nikad nije nacrtao? Nikad nikome nije pokazao?" Dora je rekla da nije. Mile je kimnuo, kao da je to bilo u redu. "Neki od nas pričaju", rekao je. "Neki crtaju. Većina šuti. Selo je isto pod vodom kako god."',
        en: 'The man\'s name was Mile and he was seventy-four, which meant that in 1965 he had been thirteen, like her father. She asked whether he knew the surname. He did. "We were in the same class," he said, and looked at the map again, more carefully now, and ran his finger along the streets like someone walking. He stopped at the house with the circle. "That\'s theirs. He lived there." Then at the tree by the school: "A walnut. We used to climb it. Your father fell and broke his arm, and the teacher carried him to the doctor, three kilometres, because there was no car." He paused. "He never drew this? Never showed anyone?" Dora said he had not. Mile nodded, as if that were in order. "Some of us tell stories," he said. "Some draw. Most keep quiet. The village is under water the same whichever way."',
      },
      {
        hr: 'Vratila se u Zagreb s kartom i s nečim što nije znala imenovati — ne s tugom, jer otac je bio star i umro je mirno, nego s onim što ostane kad shvatimo da smo poznavali nekoga cijeli život i da je taj netko cijelo vrijeme nosio u sebi jedno mjesto, ulicu po ulicu, kuću po kuću, i nije ga pokazao, ne zato što je bilo tajna, nego zato što nije bilo za pokazivanje. Kartu je dala uokviriti i objesila je u hodniku, gdje ju je majka svako jutro gledala u prolazu i nije ništa govorila. Brat je, kad je došao, upitao što je to. Dora je rekla da je to Rakovica. Brat je rekao da Rakovica tako ne izgleda. Dora je rekla da zna. Zatim mu je pokazala krug uz crkvu, i drvo, i rekla mu za orah i za slomljenu ruku, i brat je dugo gledao kartu i onda rekao, tiho, da ni on nije znao da je otac ikad bio dijete.',
        en: 'She returned to Zagreb with the map and with something she could not name — not grief, because her father had been old and had died peacefully, but what remains when we realise we knew someone all our lives and that someone carried inside them the whole time one place, street by street, house by house, and did not show it, not because it was a secret but because it was not for showing. She had the map framed and hung it in the hall, where her mother looked at it every morning in passing and said nothing. Her brother, when he came, asked what it was. Dora said it was Rakovica. Her brother said Rakovica did not look like that. Dora said she knew. Then she showed him the circle by the church, and the tree, and told him about the walnut and the broken arm, and her brother looked at the map for a long time and then said, quietly, that he too had not known their father had ever been a child.',
      },
    ],
    vocabulary: [
      {
        hr: 'geodetska uprava',
        en: 'geodetic (surveying) administration',
        ex: 'Radio je za Državnu geodetsku upravu.',
      },
      { hr: 'rola', en: 'roll (of paper)', ex: 'Ormari s rolama papira.' },
      { hr: 'tuš', en: 'India ink', ex: 'Karta crtana tušem.' },
      { hr: 'mjerilo', en: 'scale (of a map)', ex: 'Mjerilo 1 : 2000.' },
      {
        hr: 'legenda',
        en: 'legend, key (of a map)',
        ex: 'Legenda u kutu ispisana njegovim rukopisom.',
      },
      {
        hr: 'akumulacijsko jezero',
        en: 'reservoir (dam lake)',
        ex: 'Selo je potopljeno akumulacijskim jezerom.',
      },
      { hr: 'potopiti', en: 'to flood, submerge', ex: 'Selo je potopljeno 1965.' },
      { hr: 'plutača', en: 'buoy', ex: 'Crvena plutača na sredini jezera.' },
      { hr: 'uokviriti', en: 'to frame', ex: 'Kartu je dala uokviriti.' },
      { hr: 'u prolazu', en: 'in passing', ex: 'Majka ju je gledala u prolazu.' },
    ],
    quiz: [
      {
        q: 'Zašto Dora prvi tjedan slaže karte ne gledajući ih?',
        qEn: 'Why does Dora pack the maps for the first week without looking at them?',
        opts: [
          'Jer su karte tajne',
          'Jer zna da će, ako pogleda, stati',
          'Jer joj je majka tako naložila',
          'Jer ne razumije karte',
        ],
        correct: 1,
      },
      {
        q: 'Zašto Dora ne može pronaći mjesto s karte?',
        qEn: 'Why can Dora not find the place on the map?',
        opts: [
          'Jer je karta krivo nacrtana',
          'Jer je mjesto u drugoj državi',
          'Jer je mjesto potopljeno 1965. i ne postoji ni na jednoj karti osim očevoj',
          'Jer je ime izbrisano',
        ],
        correct: 2,
      },
      {
        q: 'Što na karti otkriva da nije službena?',
        qEn: 'What on the map reveals that it is not an official one?',
        opts: [
          'Krivo mjerilo',
          'Kuća označena krugom i jedno jedino drvo uz školu — detalji koje geodet ne bi crtao bez razloga',
          'Nedostatak rijeke',
          'Crtana je olovkom',
        ],
        correct: 1,
      },
      {
        q: 'Što označava plutača na jezeru?',
        qEn: 'What does the buoy on the lake mark?',
        opts: [
          'Granicu kampa',
          'Mjesto gdje je bila crkva — postavljena "da se zna"',
          'Opasnu struju',
          'Mjesto za ribolov',
        ],
        correct: 1,
      },
      {
        q: 'Što brat kaže na kraju i što to znači?',
        qEn: 'What does the brother say at the end, and what does it mean?',
        opts: [
          'Da Rakovica ne postoji',
          'Da ni on nije znao da je otac ikad bio dijete — karta otkriva čovjeka koji je cijeli život šutio',
          'Da kartu treba prodati',
          'Da je karta krivotvorina',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'gs_c2_long_ulica',
    level: 'C2',
    kind: 'literary',
    levelColor: '#831843',
    levelBg: '#fce7f3',
    icon: '🪧',
    title: 'Ulica koja mijenja ime',
    titleEn: 'The Street That Changes Its Name',
    duration: 15,
    focus: 'Literary prose • History through one address • Irony of official language',
    intro:
      'An original short story. A woman born in 1931 has lived at the same address her whole life, and the street has had five names. Her granddaughter, a civil servant tasked with the sixth renaming, comes to ask what the street should be called.',
    paragraphs: [
      {
        hr: 'Baka Katica rođena je 1931. u kući broj sedam u ulici koja se tada zvala po jednom kralju, i u istoj je kući, u istoj sobi s pogledom na isti kesten, doživjela devedeset i četvrtu godinu, a ulica se u međuvremenu zvala po jednom vojskovođi, jednom generalu, jednom pjesniku i jednom datumu. Adresa joj se mijenjala pet puta, a ona se nije pomaknula ni metar. "Ja sam stajala", govorila je, "a ulica je putovala." Poštar, koji je bio treći poštar u njezinu životu, znao je da pisma za Katicu treba nositi na broj sedam bez obzira na to što piše na omotnici, i to je, po njezinu mišljenju, bilo jedino stalno u cijeloj stvari: da netko zna gdje je.',
        en: 'Grandma Katica was born in 1931 in house number seven in a street that was then named after a king, and in the same house, in the same room with a view of the same chestnut tree, she reached her ninety-fourth year, while the street had in the meantime been named after a military commander, a general, a poet and a date. Her address changed five times, and she did not move a metre. "I stood still," she used to say, "and the street travelled." The postman, who was the third postman of her life, knew that letters for Katica were to be brought to number seven regardless of what was written on the envelope, and that, in her opinion, was the only constant in the whole affair: that someone knew where she was.',
      },
      {
        hr: 'Unuka Ines radila je u gradskom uredu koji se bavio, među ostalim, imenima ulica, i te je jeseni dobila zadatak koji se u uredu zvao "revizija odonima", a što je značilo da će se ulica broj sedam preimenovati šesti put, jer je pjesnik po kojem se zvala, pokazalo se, 1942. potpisao nešto što nije trebao. Ines je to trebala pripremiti — prijedlog, obrazloženje, javnu raspravu kojoj nitko ne dolazi — i, u nedostatku boljeg izvora, otišla je pitati baku. Ne službeno. Nego onako kako se pita netko tko je jedini u gradu vidio sve nazive s istog prozora.',
        en: 'Her granddaughter Ines worked in the city office that dealt, among other things, with street names, and that autumn was given a task which in the office was called "the odonym review", meaning that the street of number seven would be renamed a sixth time, because the poet after whom it was named had, it turned out, signed something in 1942 that he should not have. Ines was to prepare it — the proposal, the justification, the public consultation nobody attends — and, for want of a better source, went to ask her grandmother. Not officially. But the way one asks someone who is the only person in the city to have seen every name from the same window.',
      },
      {
        hr: 'Baka je saslušala, natočila kavu i počela od početka, jer je to jedini način na koji je znala pričati. Kralj je bio kralj, o njemu se u kući nije govorilo ni dobro ni loše, i ulica se tako zvala kad je ona naučila čitati, pa je to ime za nju zauvijek ostalo "pravo", kao što je prvi jezik pravi. Vojskovođa je došao 1941., s pločom koju su postavili noću, i o njemu se u kući govorilo tiho, a poslije rata nikako. General je došao 1945. i ostao najdulje, četrdeset i pet godina, dovoljno da Katica pod tim imenom rodi dvoje djece, sahrani muža i ode u mirovinu, i to ime, rekla je, "nije bilo ni dobro ni loše, nego dugo, a dugo je ono što ulice pamte". Pjesnik je došao 1991., s cvijećem i govorima, i njegovo je ime baka jedino zapamtila s ponosom, jer je pjesme učila u školi, a "pjesme se ne mijenjaju kad se promijeni ploča".',
        en: 'Grandma listened, poured coffee and began from the beginning, because that was the only way she knew how to tell things. The king was a king; in the house he was spoken of neither well nor ill, and the street bore his name when she learned to read, so that name remained for her for ever "the real one", as a first language is the real one. The military commander came in 1941, with a plaque they put up at night, and he was spoken of in the house quietly, and after the war not at all. The general came in 1945 and stayed longest, forty-five years, long enough for Katica under that name to bear two children, bury a husband and retire, and that name, she said, "was neither good nor bad, but long, and long is what streets remember". The poet came in 1991, with flowers and speeches, and his was the only name Grandma remembered with pride, because she had learned his poems at school, and "poems don\'t change when the plaque changes".',
      },
      {
        hr: 'Ines je zapisivala, iz navike, i onda prestala, jer je shvatila da zapisuje krivu stvar. Baka nije govorila o imenima nego o onome što se pod svakim imenom događalo u kući broj sedam: o bratu koji je otišao pod vojskovođom i nije se vratio; o susjedu koji je pod generalom prijavio drugog susjeda i s kojim je poslije, pod pjesnikom, pila kavu jer "nije bilo drugoga s kime"; o kestenu koji su htjeli srušiti pod svakim režimom i koji je svaki režim preživio jer se uvijek našao netko tko je stanovao preko puta i imao rođaka u uredu. "Ulica se zove kako se zove", rekla je baka. "Kuća se zove po ljudima koji u njoj stanuju. To ne piše ni na jednoj ploči."',
        en: 'Ines wrote it down, from habit, and then stopped, because she realised she was writing down the wrong thing. Grandma was not talking about the names but about what happened under each name in house number seven: about a brother who left under the military commander and did not come back; about a neighbour who under the general informed on another neighbour and with whom she later, under the poet, drank coffee because "there was no one else to drink it with"; about the chestnut tree they wanted to cut down under every regime and which survived every regime because there was always someone living opposite who had a relative in an office. "The street is called what it is called," Grandma said. "A house is called after the people who live in it. That isn\'t written on any plaque."',
      },
      {
        hr: 'Pitala ju je, napokon, ono zbog čega je došla: kako bi se ulica trebala zvati. Baka je dugo šutjela, gledajući kesten, i Ines je pomislila da je zaboravila pitanje, što se u posljednje vrijeme događalo. Onda je baka rekla: "Po kestenu." Ines se nasmijala, pa prestala, jer baka nije. "Misliš ozbiljno?" "Mislim. Kesten je jedini koji nikoga nije izdao, nikoga prijavio i ništa potpisao. Sto godina stoji na istom mjestu i daje hlad svima, i onima koji su bili s jednima i onima koji su bili s drugima. Da se ulica zvala po kestenu, ne bi je trebalo mijenjati svaki put kad se otkrije što je netko potpisao. Kesten ništa nije potpisao." Zatim je dodala, tiše: "A i lakše je za poštara."',
        en: 'She asked her, at last, what she had come for: what the street should be called. Grandma was silent a long time, looking at the chestnut, and Ines thought she had forgotten the question, which had been happening lately. Then Grandma said: "After the chestnut." Ines laughed, then stopped, because Grandma had not. "You mean it?" "I do. The chestnut is the only one that betrayed nobody, informed on nobody and signed nothing. A hundred years it has stood in the same place giving shade to everyone, to those who were with one side and those who were with the other. If the street were named after the chestnut, it wouldn\'t need changing every time someone finds out what somebody signed. The chestnut signed nothing." Then she added, more quietly: "And it\'s easier for the postman."',
      },
      {
        hr: 'Ines je prijedlog napisala, u dva oblika, kako se u uredu pisalo. Službeni je predlagao ime jednog znanstvenika koji je umro dovoljno davno da nije potpisao ništa što se može pronaći, i taj je prijedlog prošao komisiju, javnu raspravu na koju su došla tri čovjeka i gradsku skupštinu, i ploča je postavljena u ožujku, danju, s dva govora i bez cvijeća. Neslužbeni je prijedlog stajao u ladici njezina stola, na jednom listu, i glasio: "Kestenova ulica", s obrazloženjem koje je prepisala od bake gotovo doslovno i za koje je znala da ga nijedna komisija na svijetu ne bi prihvatila, jer komisije ne priznaju argument koji glasi da je nešto stajalo na istom mjestu i nikome ništa nije učinilo.',
        en: 'Ines wrote the proposal, in two forms, as things were written in the office. The official one proposed the name of a scientist who had died long enough ago not to have signed anything that could be found, and that proposal passed the committee, the public consultation attended by three people and the city assembly, and the plaque was put up in March, in daylight, with two speeches and no flowers. The unofficial proposal lay in the drawer of her desk, on one sheet, and read: "Chestnut Street", with a justification she had copied from her grandmother almost word for word and which she knew no committee in the world would accept, because committees do not recognise the argument that something stood in the same place and did nothing to anyone.',
      },
      {
        hr: 'Baka je umrla u svibnju, pod šestim imenom, koje nije ni pokušala zapamtiti. Na sprovodu je Ines primijetila da poštar stoji straga, u uniformi, što je bilo protiv propisa, i da je donio pismo, jedno od onih službenih, s novom adresom otisnutom na omotnici, i da ga je stavio na lijes, ne rekavši ništa, jer je to bilo prvo pismo za broj sedam na kojem je pisalo ime koje Katica nije doživjela. Poslije je Ines otišla do kuće, stala pod kesten i pogledala ploču na uglu, novu, čistu, s imenom znanstvenika koji nikome ništa nije značio i baš je zato bio siguran. Zatim je pogledala kesten, koji je cvjetao, kao svakog svibnja, pod svakim imenom, i pomislila da baka nije bila naivna, nego točna: jedino ime koje bi ulica podnijela bez preimenovanja bilo je ime nečega što ne može ništa potpisati. Ali za takva imena, znala je, uredi nisu građeni.',
        en: 'Grandma died in May, under the sixth name, which she had not even tried to remember. At the funeral Ines noticed the postman standing at the back, in uniform, which was against regulations, and that he had brought a letter, one of the official kind, with the new address printed on the envelope, and that he placed it on the coffin without saying anything, because it was the first letter for number seven bearing a name Katica had not lived to see. Afterwards Ines went to the house, stood under the chestnut and looked at the plaque on the corner, new, clean, with the name of a scientist who meant nothing to anyone and was for that very reason safe. Then she looked at the chestnut, which was in bloom, as every May, under every name, and thought that her grandmother had not been naive but precise: the only name the street could bear without renaming was the name of something that cannot sign anything. But for such names, she knew, offices are not built.',
      },
    ],
    vocabulary: [
      { hr: 'vojskovođa', en: 'military commander, warlord', ex: 'Ulica se zvala po vojskovođi.' },
      { hr: 'preimenovati', en: 'to rename', ex: 'Ulica se preimenuje šesti put.' },
      { hr: 'odonim', en: 'odonym (street name)', ex: 'U uredu se to zvalo revizija odonima.' },
      {
        hr: 'obrazloženje',
        en: 'justification, statement of reasons',
        ex: 'Prijedlog, obrazloženje, javna rasprava.',
      },
      { hr: 'ploča', en: 'plaque, sign', ex: 'Ploču su postavili noću.' },
      {
        hr: 'prijaviti (koga)',
        en: 'to inform on, report someone',
        ex: 'Susjed je prijavio drugog susjeda.',
      },
      { hr: 'izdati', en: 'to betray', ex: 'Kesten nikoga nije izdao.' },
      { hr: 'komisija', en: 'committee, commission', ex: 'Prijedlog je prošao komisiju.' },
      { hr: 'skupština', en: 'assembly', ex: 'Gradska skupština usvojila je prijedlog.' },
      { hr: 'lijes', en: 'coffin', ex: 'Stavio je pismo na lijes.' },
    ],
    quiz: [
      {
        q: 'Što baka misli rečenicom "Ja sam stajala, a ulica je putovala"?',
        qEn: 'What does Grandma mean by "I stood still and the street travelled"?',
        opts: [
          'Da se često selila',
          'Da je ostala na istoj adresi dok se ime ulice mijenjalo pet puta',
          'Da je ulica fizički premještena',
          'Da je putovala po Europi',
        ],
        correct: 1,
      },
      {
        q: 'Zašto se ulica preimenuje šesti put?',
        qEn: 'Why is the street being renamed a sixth time?',
        opts: [
          'Jer stanovnici tako žele',
          'Jer je pjesnik zaboravljen',
          'Jer je stara ploča oštećena',
          'Jer se otkrilo da je pjesnik 1942. potpisao nešto što nije trebao',
        ],
        correct: 3,
      },
      {
        q: 'Što Ines shvaća dok zapisuje bakine riječi?',
        qEn: "What does Ines realise while writing down her grandmother's words?",
        opts: [
          'Da baka ne pamti imena',
          'Da zapisuje krivu stvar — baka govori o ljudima u kući, ne o imenima ulice',
          'Da baka ne želi razgovarati',
          'Da su imena važnija od ljudi',
        ],
        correct: 1,
      },
      {
        q: 'Zašto baka predlaže da se ulica zove po kestenu?',
        qEn: 'Why does Grandma propose naming the street after the chestnut?',
        opts: [
          'Jer voli kestene',
          'Jer kesten nikoga nije izdao ni ništa potpisao, pa ga ne bi trebalo mijenjati — i lakše je za poštara',
          'Jer je kesten najstariji u gradu',
          'Jer je to ime već postojalo',
        ],
        correct: 1,
      },
      {
        q: 'Zašto službeni prijedlog imenuje znanstvenika?',
        qEn: 'Why does the official proposal name a scientist?',
        opts: [
          'Jer je bio slavan',
          'Jer je umro dovoljno davno da nije potpisao ništa što se može pronaći — i zato je "siguran"',
          'Jer je živio u ulici',
          'Jer ga je baka predložila',
        ],
        correct: 1,
      },
    ],
  },
];
