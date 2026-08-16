// deepdives.js — B2–C2 culture deep dives (fluency initiative, 2026-08).
//
// WHY: every entry in the daily session's Croatia slot (CROATIA_POOL) gated at
// B1 or below, so a B2–C2 learner's culture slot recycled B1 bilingual prose
// forever. These essays are written AT register — B2 feature journalism, C1
// cultural criticism, C2 academic/essayistic — HR-first with full English
// behind the standard culture toggle (bilingual.tsx).
//
// Shape per essay: { key, emoji, title, titleEn, paragraphs: [{hr, en}],
// vocab: [[hr, en]] }. Rendered by CultureDeepDiveScreen (one screen per tier);
// completion via the Croatia slot's auto-complete-on-return contract.

export const CULTURE_DEEP_DIVES = {
  B2: [
    {
      key: 'kava',
      emoji: '☕',
      title: 'Kava kao institucija',
      titleEn: 'Coffee as an Institution',
      paragraphs: [
        {
          hr: 'U Hrvatskoj kava nije piće — kava je društvena ustanova. Kad netko kaže „idemo na kavu", rijetko misli na kofein: misli na sat i pol razgovora, na provjeru svih važnih vijesti iz kvarta i na obred koji se ne smije požurivati. Konobar koji bi gostu donio račun prije nego što ga ovaj zatraži počinio bi ozbiljan prekršaj protiv nepisanih pravila.',
          en: 'In Croatia, coffee is not a drink — coffee is a social institution. When someone says "let\'s go for a coffee", they rarely mean caffeine: they mean an hour and a half of conversation, a check-up on all the important neighbourhood news, and a ritual that must not be rushed. A waiter who brought a guest the bill before being asked would commit a serious offence against the unwritten rules.',
        },
        {
          hr: 'Stranci se često čude kako netko može dva sata sjediti uz jedan jedini espresso. Odgovor je jednostavan: kava je ovdje najam stola, a stol je pozornica. Na njoj se sklapaju poslovi, dogovaraju vjenčanja, analiziraju utakmice i rješavaju svjetski problemi. Cijena kave zapravo je ulaznica za predstavu koja traje koliko god želite.',
          en: "Foreigners often marvel at how someone can sit for two hours over a single espresso. The answer is simple: here, the coffee is rent for the table, and the table is a stage. Deals are struck on it, weddings are arranged, matches are analysed and the world's problems are solved. The price of the coffee is really a ticket to a show that lasts as long as you like.",
        },
        {
          hr: 'Subotnja špica — jutarnji izlazak na kavu u središte grada — u Zagrebu je gotovo modna revija. Važno je vidjeti i biti viđen. Tko želi razumjeti hrvatsko društvo, ne treba čitati sociološke studije: dovoljno je sjesti na terasu, naručiti kavu i promatrati.',
          en: 'The Saturday špica — the morning coffee outing to the city centre — is almost a fashion show in Zagreb. It matters to see and be seen. Whoever wants to understand Croatian society need not read sociological studies: it is enough to sit on a terrace, order a coffee, and watch.',
        },
      ],
      vocab: [
        ['ustanova', 'institution'],
        ['obred', 'ritual'],
        ['prekršaj', 'offence, violation'],
        ['nepisana pravila', 'unwritten rules'],
        ['špica', 'peak-hour promenade (Zagreb coffee ritual)'],
      ],
    },
    {
      key: 'fjaka',
      emoji: '🌊',
      title: 'Fjaka i pomalo',
      titleEn: 'Fjaka and Taking It Slow',
      paragraphs: [
        {
          hr: 'Dalmacija je svijetu darovala riječ koja se ne može prevesti: fjaka. To nije lijenost, kako misle sjevernjaci, nego stanje duha — blaženo mirovanje tijela i misli u kojem čovjek ne želi ništa, a i to ništa mu je previše. Fjaka dolazi nepozvana, najčešće poslije ručka, kad sunce pritisne grad i kad se i galebovi umire.',
          en: 'Dalmatia gave the world a word that cannot be translated: fjaka. It is not laziness, as northerners think, but a state of mind — a blissful stillness of body and thought in which one wants nothing, and even that nothing feels like too much. Fjaka arrives uninvited, usually after lunch, when the sun presses down on the town and even the seagulls fall quiet.',
        },
        {
          hr: 'Uz fjaku ide i „pomalo" — možda najvažnija riječ dalmatinskoga rječnika. Pomalo je odgovor na sva pitanja: Kako si? Pomalo. Kad će biti gotovo? Pomalo. Radi li se? Pomalo. U toj riječi stane cijela životna filozofija: sve će se obaviti, ali svojim ritmom, i nikakva žurba neće promijeniti red stvari.',
          en: 'Alongside fjaka goes "pomalo" — perhaps the most important word in the Dalmatian vocabulary. Pomalo is the answer to every question: How are you? Pomalo. When will it be done? Pomalo. Is work happening? Pomalo. A whole philosophy of life fits into that word: everything will get done, but at its own rhythm, and no hurry will change the order of things.',
        },
        {
          hr: 'Lako je fjaku proglasiti izgovorom za nerad. No liječnici bi rekli da je riječ o prirodnoj obrani od vrućine, a filozofi da je to mediteranski odgovor na tiraniju produktivnosti. Turisti dolaze zbog mora, a vraćaju se zbog fjake — jer su negdje između rive i konobe otkrili da se život ne mora stalno ubrzavati.',
          en: 'It is easy to declare fjaka an excuse for idleness. But doctors would say it is a natural defence against the heat, and philosophers that it is the Mediterranean answer to the tyranny of productivity. Tourists come for the sea and return for the fjaka — because somewhere between the seafront and the tavern they discovered that life does not have to keep accelerating.',
        },
      ],
      vocab: [
        ['blažen', 'blissful'],
        ['mirovanje', 'stillness, rest'],
        ['nepozvan', 'uninvited'],
        ['izgovor', 'excuse'],
        ['tiranija produktivnosti', 'the tyranny of productivity'],
      ],
    },
    {
      key: 'nogomet',
      emoji: '⚽',
      title: 'Kockice na srcu',
      titleEn: 'Checkers on the Heart',
      paragraphs: [
        {
          hr: 'Malo koja zemlja od četiri milijuna stanovnika može reći da je dvaput u šest godina igrala u završnici svjetskoga prvenstva. Kad Vatreni igraju, Hrvatska staje: ulice se prazne, terase pune, a iz svakoga dvorišta dopire isti zvuk televizijskoga prijenosa. Nogomet je ovdje više od sporta — on je javna proba nacionalnoga zajedništva.',
          en: 'Few countries of four million people can say they played in a World Cup final twice in six years. When the Vatreni play, Croatia stops: the streets empty, the terraces fill, and from every courtyard comes the same sound of the television broadcast. Football here is more than sport — it is a public rehearsal of national togetherness.',
        },
        {
          hr: 'Slavlje nakon velikih pobjeda ima svoj ustaljeni scenarij: bakljada na glavnome trgu, zastave na balkonima, automobilske trube do dugo u noć. Djeca u dresovima s kockicama uče imena igrača prije nego što nauče tablicu množenja. A povratak reprezentacije iz Rusije 2018. — pola milijuna ljudi na zagrebačkim ulicama — ušao je u udžbenike kao najveći doček u povijesti zemlje.',
          en: "The celebration after great victories has its set script: flares on the main square, flags on balconies, car horns late into the night. Children in checkered jerseys learn the players' names before they learn their times tables. And the national team's return from Russia in 2018 — half a million people on the streets of Zagreb — entered the textbooks as the biggest welcome in the country's history.",
        },
        {
          hr: 'Zašto baš nogomet? Možda zato što mala zemlja na velikoj pozornici napokon igra ravnopravno. Uspjeh reprezentacije mnogima je dokaz da veličina nije sudbina — da se upornošću, talentom i s malo dalmatinske tvrdoglavosti može stati uz bok najvećima. Zato suze nakon poraza ovdje nikad ne traju dugo: važno je da smo bili tamo, i da su nas svi vidjeli.',
          en: "Why football, of all things? Perhaps because on the big stage a small country finally plays as an equal. The national team's success is proof to many that size is not destiny — that with persistence, talent and a little Dalmatian stubbornness one can stand shoulder to shoulder with the greatest. That is why tears after a defeat never last long here: what matters is that we were there, and that everyone saw us.",
        },
      ],
      vocab: [
        ['završnica', 'final (of a tournament)'],
        ['zajedništvo', 'togetherness, unity'],
        ['bakljada', 'flare-lit celebration'],
        ['doček', 'welcome (celebration)'],
        ['ravnopravno', 'as an equal'],
      ],
    },
  ],
  C1: [
    {
      key: 'klapa',
      emoji: '🎶',
      title: 'Klapa — pjesma bez pratnje',
      titleEn: 'Klapa — Song Without Accompaniment',
      paragraphs: [
        {
          hr: 'Klapsko pjevanje nastalo je ondje gdje su muškarci nakon posla imali samo jedno glazbalo: vlastite glasove. U dalmatinskim mjestima klapa se okupljala u konobi ili na rivi, a višeglasje se prenosilo sluhom, s koljena na koljeno, bez nota i dirigenta. Prvi tenor vodi melodiju, ostali ga slijede u terci, a bas drži temelj — i u tom je jednostavnom rasporedu sadržana čitava estetika: sklad važniji od solista.',
          en: 'Klapa singing arose where men after work had only one instrument: their own voices. In Dalmatian towns the klapa would gather in a tavern or on the seafront, and the multi-part harmony was passed on by ear, from generation to generation, without sheet music or conductor. The first tenor leads the melody, the others follow in thirds, and the bass holds the foundation — and in that simple arrangement lies an entire aesthetic: harmony above the soloist.',
        },
        {
          hr: 'Godine 2012. UNESCO je klapsko pjevanje uvrstio na popis nematerijalne kulturne baštine čovječanstva. Priznanje je stiglo u pravi čas: tradicija se našla na raskrižju između festivalskih pozornica i estradnih obrada koje klapski zvuk križaju s pop-aranžmanima. Puristi zbog toga negoduju, no povjesničari glazbe podsjećaju da se klapa oduvijek mijenjala — i da je upravo ta prilagodljivost održala na životu.',
          en: 'In 2012, UNESCO inscribed klapa singing on the list of the intangible cultural heritage of humanity. The recognition came at the right moment: the tradition found itself at a crossroads between festival stages and commercial arrangements that cross the klapa sound with pop production. Purists grumble at this, but music historians point out that klapa has always changed — and that precisely this adaptability has kept it alive.',
        },
        {
          hr: 'Za iseljenike je klapa možda i najizravniji zvučni most prema domovini. Dovoljno je da negdje u Torontu ili Sydneyu zazvuči „Da te mogu pismom zvati" pa da se dvorana pretvori u rivu. Etnomuzikolozi bi rekli da je riječ o glazbenome pamćenju zajednice; oni koji pjevaju rekli bi jednostavnije — da se u klapi najlakše plače.',
          en: 'For emigrants, klapa is perhaps the most direct sonic bridge to the homeland. It is enough for "Da te mogu pismom zvati" to ring out somewhere in Toronto or Sydney for the hall to turn into a seafront. Ethnomusicologists would say this is a community\'s musical memory; those who sing would put it more simply — in a klapa, crying comes easiest.',
        },
      ],
      vocab: [
        ['višeglasje', 'multi-part harmony'],
        ['s koljena na koljeno', 'from generation to generation'],
        ['nematerijalna baština', 'intangible heritage'],
        ['prilagodljivost', 'adaptability'],
        ['iseljenik', 'emigrant'],
      ],
    },
    {
      key: 'kanon',
      emoji: '📚',
      title: 'Od Marulića do Krleže',
      titleEn: 'From Marulić to Krleža',
      paragraphs: [
        {
          hr: 'Kad je Marko Marulić 1501. u Splitu dovršio „Juditu", ep o biblijskoj udovici spjevan „u versih harvacki složen", učinio je nešto prevratničko: dokazao je da se visoka književnost može pisati jezikom puka. Zato ga zovemo ocem hrvatske književnosti — ne zbog starine, nego zbog odluke da materinski jezik uzme ozbiljno.',
          en: 'When Marko Marulić completed "Judith" in Split in 1501 — an epic about the biblical widow composed "in Croatian verses" — he did something revolutionary: he proved that high literature could be written in the language of the common people. That is why we call him the father of Croatian literature — not because of antiquity, but because of the decision to take the mother tongue seriously.',
        },
        {
          hr: 'Devetnaesto stoljeće donijelo je preporod i Šenou, koji je stvorio čitateljsku publiku, a dvadeseto dva nezaobilazna imena: Miroslava Krležu i Ivanu Brlić-Mažuranić. Krleža je u golemu opusu secirao malograđanštinu, rat i mit; Brlić-Mažuranić je u „Pričama iz davnine" od slavenske mitologije istkala svijet koji su kritičari uspoređivali s Andersenovim. Između ta dva pola — nemilosrdne analize i bajkovite mašte — razapeta je hrvatska književnost.',
          en: 'The nineteenth century brought the national revival and Šenoa, who created a reading public, and the twentieth two unavoidable names: Miroslav Krleža and Ivana Brlić-Mažuranić. Krleža, in a vast opus, dissected petty-bourgeois life, war and myth; Brlić-Mažuranić, in "Tales of Long Ago", wove from Slavic mythology a world critics compared to Andersen\'s. Between those two poles — merciless analysis and fairy-tale imagination — Croatian literature is stretched.',
        },
        {
          hr: 'Suvremena književnost odavno je prešla granice: Dubravka Ugrešić i Daša Drndić prevode se na desetke jezika, a tema egzila i pamćenja postala je njezin zaštitni znak. Tko danas uči hrvatski, ne uči samo jezik svakodnevice, nego i ključ za jednu od najgušćih malih književnosti Europe.',
          en: "Contemporary literature long ago crossed the borders: Dubravka Ugrešić and Daša Drndić are translated into dozens of languages, and the theme of exile and memory has become its trademark. Whoever learns Croatian today learns not only the language of everyday life, but a key to one of Europe's densest small literatures.",
        },
      ],
      vocab: [
        ['prevratnički', 'revolutionary, subversive'],
        ['preporod', 'national revival'],
        ['malograđanština', 'petty-bourgeois mentality'],
        ['nezaobilazan', 'unavoidable, essential'],
        ['zaštitni znak', 'trademark, hallmark'],
      ],
    },
    {
      key: 'iseljenistvo',
      emoji: '🧳',
      title: 'Hrvatska izvan Hrvatske',
      titleEn: 'Croatia Beyond Croatia',
      paragraphs: [
        {
          hr: 'Procjenjuje se da izvan domovine živi gotovo jednako Hrvata i njihovih potomaka koliko i u njoj. Valovi iseljavanja slijedili su povijest: filoksera i siromaštvo krajem devetnaestoga stoljeća odveli su težake u Ameriku i Australiju, politika je nakon 1945. tjerala jedne, a ekonomija sedamdesetih druge — „gastarbajtere" čiji su kovčezi mirisali na dim i domaću rakiju.',
          en: 'It is estimated that nearly as many Croats and their descendants live outside the homeland as within it. The waves of emigration followed history: phylloxera and poverty at the end of the nineteenth century took farm labourers to America and Australia; after 1945 politics drove out some, and in the seventies the economy drove out others — the "gastarbajteri" whose suitcases smelled of smoke and homemade rakija.',
        },
        {
          hr: 'Dijaspora je domovini ostala privržena na opipljive načine: doznakama koje su desetljećima držale obiteljske proračune, ljetnim povratcima koji udvostruče stanovništvo otoka, i sinovima i kćerima koji su 1991. dolazili braniti zemlju koju su poznavali samo s fotografija. U Mississaugi, Frankfurtu i Punta Arenasu hrvatski se domovi i župe drže kao utvrde identiteta.',
          en: 'The diaspora has remained attached to the homeland in tangible ways: through remittances that for decades propped up family budgets, summer returns that double the population of the islands, and sons and daughters who in 1991 came to defend a country they knew only from photographs. In Mississauga, Frankfurt and Punta Arenas, Croatian homes and parishes are kept up like fortresses of identity.',
        },
        {
          hr: 'Odnos matice i dijaspore nije bez napetosti: povratnici se znaju požaliti na birokraciju i mentalitet, a domaći na idealiziranu sliku domovine koju iseljenici čuvaju pod staklenim zvonom. No treći naraštaj, koji hrvatski uči iz aplikacija poput ove, možda je najbolji dokaz da se identitet ne nasljeđuje automatski — on se svaki put iznova bira.',
          en: 'The relationship between homeland and diaspora is not without tension: returnees complain about bureaucracy and mentality, while locals point at the idealised image of the homeland that emigrants keep under a bell jar. But the third generation, learning Croatian from apps like this one, may be the best proof that identity is not inherited automatically — it is chosen anew every time.',
        },
      ],
      vocab: [
        ['potomak', 'descendant'],
        ['doznaka', 'remittance'],
        ['privržen', 'attached, devoted'],
        ['matica', 'homeland (as mother country)'],
        ['naraštaj', 'generation'],
      ],
    },
  ],
  C2: [
    {
      key: 'pravopis',
      emoji: '✒️',
      title: 'Pravopisni ratovi',
      titleEn: 'The Orthography Wars',
      paragraphs: [
        {
          hr: 'Malo je koja europska kultura vodila tako strastvene javne polemike oko pravopisa kao hrvatska. Otkako je jezik devedesetih ponovno postao poprištem simboličke politike, svaki je pravopisni priručnik dočekivan kao program: hoće li se pisati „ne ću" ili „neću", „grješka" ili „greška", pitanja su koja su punila naslovnice i zavađala akademske institute. Izvana gledano — sitnice; iznutra, rasprava o tome tko ima pravo normirati zajednički jezik.',
          en: 'Few European cultures have waged such passionate public polemics over orthography as the Croatian one. Ever since the language once again became an arena of symbolic politics in the nineties, every orthographic manual has been received as a manifesto: whether to write "ne ću" or "neću", "grješka" or "greška" — questions that filled front pages and set academic institutes against each other. From the outside, trifles; from within, a debate over who has the right to standardise the common language.',
        },
        {
          hr: 'Purizam pritom nije novost nego konstanta: hrvatski je jezik stoljećima kovao vlastite riječi ondje gdje su drugi posuđivali. Zrakoplov, kolodvor, veleposlanstvo — sve su to uspjele kovanice; nogostup i brzoglas podsjećaju da norma ne može sve. Jezikoslovci se spore oko granice: gdje prestaje briga za jezik, a počinje njegovo discipliniranje?',
          en: 'Purism, moreover, is not a novelty but a constant: for centuries Croatian has coined its own words where others borrowed. Zrakoplov (aeroplane), kolodvor (railway station), veleposlanstvo (embassy) — all successful coinages; nogostup (pavement) and brzoglas (telephone) remind us that the norm cannot do everything. Linguists dispute the boundary: where does care for the language end and its disciplining begin?',
        },
        {
          hr: 'Godine 2013. objavljen je pravopis Instituta za hrvatski jezik, zamišljen kao pomirbeni — s dvostrukostima ondje gdje se struka nije mogla usuglasiti. Kompromis, dakako, nije zadovoljio nikoga do kraja, što je možda i najhrvatskiji mogući ishod. U međuvremenu jezik živi svoj život: mladi pišu porukama bez dijakritika, anglizmi naviru, a pravopisna se strast seli na društvene mreže. Ratovi jenjavaju; jezik, kao i uvijek, pobjeđuje sve svoje čuvare.',
          en: 'In 2013 the Institute for the Croatian Language published its orthography, conceived as conciliatory — with doublets wherever the profession could not agree. The compromise, of course, satisfied no one completely, which is perhaps the most Croatian outcome possible. Meanwhile the language lives its own life: the young text without diacritics, anglicisms pour in, and orthographic passion migrates to social media. The wars are subsiding; the language, as always, outlives all its guardians.',
        },
      ],
      vocab: [
        ['poprište', 'arena, battleground'],
        ['zavađati', 'to set at odds'],
        ['kovanica', 'coinage (word)'],
        ['dvostrukost', 'doublet, permitted variant'],
        ['jenjavati', 'to subside, die down'],
      ],
    },
    {
      key: 'tri_pisma',
      emoji: '📜',
      title: 'Tri pisma jedne kulture',
      titleEn: 'Three Scripts of One Culture',
      paragraphs: [
        {
          hr: 'Hrvatska je pismenost trojezična i tropismena od samih početaka — rijedak slučaj u Europi. Na glagoljici su klesani najstariji spomenici i tiskan prvotisak Misala 1483., prije mnogih većih naroda; latinicom su pisali dubrovački pjesnici i splitski humanisti; a hrvatskom ćirilicom, bosančicom, stoljećima su se služili franjevci i pučani od Poljica do Bosne. Tri pisma nisu bila tri svijeta, nego tri registra iste kulture.',
          en: 'Croatian literacy has been trilingual and tri-scriptal from its very beginnings — a rare case in Europe. On Glagolitic were carved the oldest monuments, and the first printed Missal appeared in 1483, earlier than among many larger nations; in Latin script wrote the poets of Dubrovnik and the humanists of Split; and Croatian Cyrillic, bosančica, was used for centuries by Franciscans and common folk from Poljica to Bosnia. The three scripts were not three worlds but three registers of one culture.',
        },
        {
          hr: 'Glagoljica je pritom bila više od pisma: bila je povlastica. Papinskim dopuštenjem hrvatski su glagoljaši stoljećima služili misu na crkvenoslavenskome — jedini u zapadnoj Crkvi kojima liturgija nije bila na latinskome. Ta je iznimka od Krka do Istre stvorila samosvjesnu pismenu kulturu seoskih župnika, koji su na marginama brevijara ostavljali i najstarije hrvatske grafite.',
          en: 'Glagolitic, moreover, was more than a script: it was a privilege. By papal dispensation, Croatian Glagolitic priests celebrated Mass in Church Slavonic for centuries — the only ones in the Western Church whose liturgy was not in Latin. That exception, from Krk to Istria, created a self-aware literate culture of village priests, who also left the oldest Croatian graffiti in the margins of their breviaries.',
        },
        {
          hr: 'Danas glagoljica živi kao simbol: na suvenirima, tetovažama i u školskim izbornim programima. Lako je u tome vidjeti puki marketing baštine, no simboli su rijetko nevini. Narod koji je svoje prvo pismo pretvorio u ukras zapravo poručuje da pismenost smatra dijelom identiteta — a to je, u doba u kojem se čitanje mjeri sekundama pozornosti, možda subverzivnija poruka nego što se čini.',
          en: 'Today Glagolitic lives on as a symbol: on souvenirs, tattoos and in elective school programmes. It is easy to see mere heritage marketing in this, but symbols are rarely innocent. A nation that has turned its first script into an ornament is really declaring that it considers literacy part of its identity — and in an age when reading is measured in seconds of attention, that may be a more subversive message than it seems.',
        },
      ],
      vocab: [
        ['prvotisak', 'incunabulum, first printing'],
        ['povlastica', 'privilege'],
        ['dopuštenje', 'dispensation, permission'],
        ['samosvjestan', 'self-aware, self-assured'],
        ['subverzivan', 'subversive'],
      ],
    },
    {
      key: 'humor',
      emoji: '🎭',
      title: 'Smijeh kao obrana',
      titleEn: 'Laughter as Defence',
      paragraphs: [
        {
          hr: 'Hrvatski se humor najbolje razumije kao strategija preživljavanja. Narod koji je povijest uglavnom trpio, a rijetko krojio, naučio je da je smijeh jedini oblik nadmoći dostupan slabijima. Zato je ovdašnja šala rijetko bezazlena: ona je uvijek pomalo na nečiji račun — najčešće na vlastiti, jer samoironija je jedina ironija koja ne traži ispriku.',
          en: "Croatian humour is best understood as a survival strategy. A people who mostly endured history rather than shaped it learned that laughter is the only form of superiority available to the weaker side. That is why the local joke is rarely innocent: it is always slightly at someone's expense — most often one's own, since self-irony is the only irony that requires no apology.",
        },
        {
          hr: 'Televizijski klasici to zorno pokazuju. „Gruntovčani" su sedamdesetih pod krinkom ruralne komedije secirali malu sredinu točnije od ijedne studije, a rečenice Dudeka i Regice ušle su u svakodnevni govor. Regionalne su serije učinile i nešto dublje: legitimirale su dijalekte na ekranu, pa se smijeh pretvorio u nastavu kajkavskoga i dalmatinskoga za cijelu zemlju.',
          en: 'The television classics show this vividly. In the seventies, "Gruntovčani", under the guise of rural comedy, dissected small-town society more precisely than any study, and the lines of Dudek and Regica entered everyday speech. The regional series did something deeper still: they legitimised dialects on screen, so laughter turned into a lesson in Kajkavian and Dalmatian for the whole country.',
        },
        {
          hr: 'Internetska generacija humor je preselila u memove, no mehanika je ostala ista: apsurd svakodnevice — redovi, birokracija, vječne obnove cesta — prerađuje se u kolektivnu terapiju. Stranac koji nauči gramatiku znat će što Hrvati govore; tek kad počne razumijevati čemu se smiju, znat će što doista misle.',
          en: 'The internet generation has moved humour into memes, but the mechanics remain the same: the absurdity of daily life — queues, bureaucracy, the eternal roadworks — is processed into collective therapy. A foreigner who learns the grammar will know what Croats are saying; only when they begin to understand what Croats laugh at will they know what they really think.',
        },
      ],
      vocab: [
        ['nadmoć', 'superiority'],
        ['bezazlen', 'innocent, harmless'],
        ['samoironija', 'self-irony'],
        ['pod krinkom', 'under the guise of'],
        ['zorno', 'vividly, graphically'],
      ],
    },
  ],
};
