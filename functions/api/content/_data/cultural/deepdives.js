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
    {
      key: 'nedjeljni_objed',
      emoji: '🍲',
      title: 'Nedjeljni objed',
      titleEn: 'Sunday Lunch',
      paragraphs: [
        {
          hr: 'Nedjelja u Hrvatskoj ima svoj miris: juha s domaćim rezancima, pečenje koje se u pećnici okreće još od jutra, salata koju netko u zadnji tren zaboravi posoliti. Nedjeljni objed nije samo obrok nego tjedni sabor obitelji — okupljanje na koje se dolazi bez poziva, jer se poziv podrazumijeva.',
          en: 'Sunday in Croatia has its own smell: soup with homemade noodles, a roast that has been turning in the oven since morning, a salad someone forgets to salt at the last minute. Sunday lunch is not merely a meal but the weekly assembly of the family — a gathering one attends without an invitation, because the invitation is understood.',
        },
        {
          hr: 'Za stolom se ne sjedi kako tko stigne. Djed sjedi na čelu, baka najbliže kuhinji, a gost dobiva najbolju stolicu i najveći komad mesa, protivio se on tome ili ne. Razgovor teče po ustaljenom redu: najprije zdravlje, zatim posao, pa tek onda politika — a o politici se raspravlja glasno, iako svi za stolom uglavnom misle isto.',
          en: 'At the table, one does not sit wherever one arrives. Grandfather sits at the head, grandmother nearest the kitchen, and the guest receives the best chair and the largest piece of meat, whether he objects or not. Conversation follows an established order: first health, then work, and only then politics — and politics is argued loudly, although everyone at the table mostly thinks the same.',
        },
        {
          hr: 'Mladi se s vremenom odsele u druge gradove ili države, ali nedjeljni objed rijetko nestaje: samo se seli na videopoziv ili na jedan vikend mjesečno. Sociolozi bi rekli da je riječ o obredu koji održava međugeneracijsku solidarnost. Baka bi rekla da je riječ o tome da netko napokon pojede što je skuhala.',
          en: 'Over time the young move to other cities or countries, but Sunday lunch rarely disappears: it merely relocates to a video call or to one weekend a month. Sociologists would say it is a ritual that sustains solidarity between generations. Grandmother would say it is about someone finally eating what she cooked.',
        },
      ],
      vocab: [
        ['objed', 'lunch (the main midday meal)'],
        ['pečenje', 'roast'],
        ['podrazumijevati se', 'to be taken for granted, understood'],
        ['na čelu stola', 'at the head of the table'],
        ['međugeneracijski', 'intergenerational'],
      ],
    },
    {
      key: 'sjever_jug',
      emoji: '🧭',
      title: 'Sjever i jug',
      titleEn: 'North and South',
      paragraphs: [
        {
          hr: 'Hrvatska je mala zemlja s velikom unutarnjom razlikom: između Zagreba i Splita nije samo četiri sata autoceste nego i dva mentaliteta. Sjever je srednjoeuropski — točan, uredan, pomalo zatvoren. Jug je mediteranski — glasan, srdačan i uvjeren da se sve može riješiti sutra, uz kavu.',
          en: 'Croatia is a small country with a large internal difference: between Zagreb and Split lie not only four hours of motorway but two mentalities. The north is Central European — punctual, orderly, a little reserved. The south is Mediterranean — loud, warm-hearted and convinced that everything can be sorted out tomorrow, over coffee.',
        },
        {
          hr: 'Razlika se čuje i prije nego što se vidi. Zagrepčanin pita „Kaj radiš?", Splićanin „Ča radiš?", a oboje smatraju da onaj drugi govori smiješno. Šale o „purgerima" i „Dalmošima" stare su koliko i sama država; pripovijedaju se s uživanjem na obje strane i gotovo nikad ne prelaze u pravu zlobu.',
          en: 'The difference is heard before it is seen. A Zagreb native asks "Kaj radiš?", a Split native "Ča radiš?", and each thinks the other sounds funny. Jokes about "purgeri" and "Dalmoši" are as old as the state itself; they are told with relish on both sides and almost never tip over into real malice.',
        },
        {
          hr: 'No suparništvo ima i svoje sezone. Ljeti se pola Zagreba preseli na obalu i tjednima živi po dalmatinskim pravilima; zimi se Dalmatinci voze na sjever po snijeg, koncerte i poslove. Tako se razlika svake godine iznova potvrđuje — i svake godine iznova premošćuje.',
          en: 'Yet the rivalry has its seasons. In summer half of Zagreb moves to the coast and lives for weeks by Dalmatian rules; in winter the Dalmatians drive north for snow, concerts and work. And so the difference is confirmed anew each year — and bridged anew each year.',
        },
      ],
      vocab: [
        ['mentalitet', 'mentality'],
        ['srdačan', 'warm-hearted, cordial'],
        ['suparništvo', 'rivalry'],
        ['zloba', 'malice'],
        ['premostiti', 'to bridge (a gap)'],
      ],
    },
    {
      key: 'veza',
      emoji: '🤝',
      title: 'Preko veze',
      titleEn: 'Through Connections',
      paragraphs: [
        {
          hr: 'Riječ „veza" u hrvatskom ima jedno posve praktično značenje: poznanstvo koje otvara vrata. Termin kod liječnika, mjesto u vrtiću, brži red u uredu — mnogo se toga u svakodnevici rješava „preko veze", to jest zato što netko poznaje nekoga tko poznaje nekoga.',
          en: 'The word "veza" (connection) has a thoroughly practical meaning in Croatian: an acquaintance that opens doors. A doctor\'s appointment, a place in kindergarten, a faster queue at an office — much of everyday life is arranged "through a connection", that is, because someone knows someone who knows someone.',
        },
        {
          hr: 'Većina ljudi tu praksu javno osuđuje, a privatno je koristi bez grižnje savjesti. Nije riječ o klasičnoj korupciji — rijetko se što plaća — nego o mreži usluga koje se pamte i vraćaju. Rođak, kum, susjed i bivši kolega čine mrežu sigurnosti koju država često ne pruža na vrijeme.',
          en: 'Most people publicly condemn the practice and privately use it without a guilty conscience. This is not classic corruption — money rarely changes hands — but a web of favours that are remembered and returned. A cousin, a godfather, a neighbour and a former colleague form a safety net the state often fails to provide in time.',
        },
        {
          hr: 'Stranac koji dođe živjeti u Hrvatsku najprije se ljuti na sustav, a onda shvati da i on ima vezu: susjeda koji radi u općini, frizerku čiji brat popravlja automobile. Trenutak u kojem prvi put kaže „imam vezu" trenutak je u kojem je zapravo postao domaći.',
          en: 'A foreigner who comes to live in Croatia is first angry at the system, and then realises that he too has a connection: a neighbour who works at the municipality, a hairdresser whose brother repairs cars. The moment he first says "imam vezu" is the moment he has truly become a local.',
        },
      ],
      vocab: [
        ['veza', 'connection; useful acquaintance'],
        ['poznanstvo', 'acquaintance'],
        ['grižnja savjesti', 'guilty conscience'],
        ['usluga', 'favour; service'],
        ['kum', 'godfather; best man'],
      ],
    },
    {
      key: 'advent',
      emoji: '🎄',
      title: 'Advent u Zagrebu',
      titleEn: 'Advent in Zagreb',
      paragraphs: [
        {
          hr: 'Još prije desetak godina zagrebački je prosinac bio siv i tih. Onda je grad postavio nekoliko kućica s kuhanim vinom oko Zrinjevca — i dogodilo se nešto neočekivano. Advent u Zagrebu tri je puta zaredom proglašen najboljim božićnim sajmom u Europi, a turisti su počeli dolaziti u mjesecu u kojem ih prije nitko nije očekivao.',
          en: 'Just a decade or so ago, December in Zagreb was grey and quiet. Then the city set up a few huts selling mulled wine around Zrinjevac — and something unexpected happened. Advent in Zagreb was voted the best Christmas market in Europe three years running, and tourists began arriving in a month when no one had previously expected them.',
        },
        {
          hr: 'Za Zagrepčane je Advent ipak nešto drugo od sajma. To je mjesec u kojem se poslije posla ne ide kući nego na Trg, u kojem se s kolegama i prijateljima obilaze kućice kao da su postaje na hodočašću, i u kojem je posve normalno stajati na hladnoći sat vremena zbog jedne fritule.',
          en: 'For Zagreb residents, though, Advent is something other than a market. It is the month in which one does not go home after work but to the main square, in which one tours the huts with colleagues and friends as if they were stations on a pilgrimage, and in which it is perfectly normal to stand in the cold for an hour for a single fritula.',
        },
        {
          hr: 'Kritičari prigovaraju da je Advent postao preskup i previše komercijalan, da se kuhano vino prodaje po cijeni večere i da se od izvornog ugođaja malo što zadržalo. Možda imaju pravo. No svake subote u prosincu Trg je pun, a zvuk klizaljki na ledu ispred Umjetničkog paviljona postao je zvuk zagrebačke zime.',
          en: 'Critics object that Advent has become too expensive and too commercial, that mulled wine sells at the price of a dinner, and that little of the original atmosphere remains. Perhaps they are right. Yet every Saturday in December the square is full, and the sound of skates on the ice in front of the Art Pavilion has become the sound of a Zagreb winter.',
        },
      ],
      vocab: [
        ['kuhano vino', 'mulled wine'],
        ['sajam', 'fair, market'],
        ['hodočašće', 'pilgrimage'],
        ['fritule', 'small fried doughnuts (Advent treat)'],
        ['ugođaj', 'atmosphere, ambience'],
      ],
    },
    {
      key: 'gostoprimstvo',
      emoji: '🥃',
      title: 'Gostoprimstvo i rakija',
      titleEn: 'Hospitality and Rakija',
      paragraphs: [
        {
          hr: 'Kad uđete u hrvatsku kuću, prvo pitanje neće biti „kako ste" nego „što ćete popiti". Odbiti nije opcija: gost koji ništa ne uzme domaćina ostavlja u nedoumici je li nešto pogriješio. Zato iskusni gosti odmah prihvate kavu, sok ili — ako je domaćin stariji i sa sela — čašicu domaće rakije.',
          en: 'When you enter a Croatian home, the first question will not be "how are you" but "what will you drink". Declining is not an option: a guest who takes nothing leaves the host wondering whether he has done something wrong. Experienced guests therefore immediately accept coffee, juice or — if the host is older and from the countryside — a small glass of home-made rakija.',
        },
        {
          hr: 'Rakija je u tom obredu više od pića. Šljivovica, lozovača, travarica ili medica u pravilu dolaze iz vlastite proizvodnje ili od „jednog čovjeka koji je pravi", što je oznaka kvalitete koju nijedna etiketa ne može nadmašiti. Ponuditi rakiju znači pokazati povjerenje; pohvaliti je znači steći prijatelja.',
          en: 'In that ritual, rakija is more than a drink. Plum, grape, herbal or honey rakija as a rule comes from one\'s own production or from "a man who makes the real thing", a mark of quality no label can surpass. To offer rakija is to show trust; to praise it is to gain a friend.',
        },
        {
          hr: 'Gostoprimstvo ima i svoju drugu stranu: gost koji se prebrzo digne od stola vrijeđa, a onaj koji dođe praznih ruku pamti se. Zato se u posjet nosi kava, čokolada ili boca vina, a prije odlaska obvezno se tri puta odbije „još samo jednu" — i onda se ipak popije.',
          en: 'Hospitality has its other side too: a guest who rises from the table too soon gives offence, and one who arrives empty-handed is remembered. So one brings coffee, chocolate or a bottle of wine to a visit, and before leaving one must refuse "just one more" three times — and then drink it anyway.',
        },
      ],
      vocab: [
        ['gostoprimstvo', 'hospitality'],
        ['domaćin', 'host'],
        ['nedoumica', 'perplexity, doubt'],
        ['čašica', 'small glass, shot'],
        ['praznih ruku', 'empty-handed'],
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
    {
      key: 'glagoljica',
      emoji: '📜',
      title: 'Glagoljica',
      titleEn: 'The Glagolitic Script',
      paragraphs: [
        {
          hr: 'Prije nego što je hrvatski jezik prihvatio latinicu, pisao se pismom koje danas izgleda kao niz tajanstvenih kvadrata, krugova i petlji. Glagoljica, koju su u devetom stoljeću oblikovali Ćiril i Metod, u Hrvatskoj je preživjela dulje nego igdje drugdje — na pojedinim otocima i u Istri rabila se sve do devetnaestoga stoljeća.',
          en: 'Before the Croatian language adopted the Latin alphabet, it was written in a script that today looks like a series of mysterious squares, circles and loops. The Glagolitic script, shaped in the ninth century by Cyril and Methodius, survived longer in Croatia than anywhere else — on some islands and in Istria it was used until the nineteenth century.',
        },
        {
          hr: 'Njezin najpoznatiji spomenik, Bašćanska ploča iz oko 1100. godine, prvi je poznati zapis hrvatskoga imena na hrvatskom jeziku. Kamena ploča s otoka Krka nije samo jezični dokument nego i pravni: kralj Zvonimir njome daruje zemlju samostanu. Stoljeća kasnije glagoljaši, seoski svećenici koji su na tom pismu čitali misu, održali su ga živim izvan svakog kulturnog središta.',
          en: 'Its most famous monument, the Baška Tablet from around 1100, is the first known record of the Croatian name in the Croatian language. The stone tablet from the island of Krk is not only a linguistic document but a legal one: with it King Zvonimir donates land to a monastery. Centuries later the glagoljaši, village priests who read the Mass in that script, kept it alive far from any cultural centre.',
        },
        {
          hr: 'Danas je glagoljica prije svega simbol. Nalazimo je na suvenirima, tetovažama i logotipima, a u Istri postoji čitava Aleja glagoljaša s kamenim spomenicima. Kritičari upozoravaju da je pismo tako postalo dekoracija bez sadržaja; branitelji odgovaraju da je i dekoracija oblik pamćenja. Oboje su, čini se, u pravu.',
          en: 'Today the Glagolitic script is above all a symbol. We find it on souvenirs, tattoos and logos, and in Istria there is a whole Glagolitic Alley of stone monuments. Critics warn that the script has thus become decoration without content; its defenders reply that decoration too is a form of remembrance. Both, it seems, are right.',
        },
      ],
      vocab: [
        ['pismo', 'script, alphabet'],
        ['spomenik', 'monument'],
        ['glagoljaš', 'Glagolitic priest/scribe'],
        ['darovati', 'to donate, bestow'],
        ['pamćenje', 'memory, remembrance'],
      ],
    },
    {
      key: 'dubrovacka_republika',
      emoji: '⚓',
      title: 'Dubrovačka Republika',
      titleEn: 'The Republic of Ragusa',
      paragraphs: [
        {
          hr: 'Pet stoljeća — od 1358. do 1808. — malen grad na jugu Jadrana bio je samostalna država koja je nadživjela mnoga carstva. Dubrovačka Republika nije imala vojsku vrijednu spomena; imala je diplomate, trgovce i gotovo nepogrešiv osjećaj za to kome treba platiti, s kim pregovarati, a koga izbjegavati.',
          en: 'For five centuries — from 1358 to 1808 — a small city on the southern Adriatic was an independent state that outlived many empires. The Republic of Ragusa had no army worth mentioning; it had diplomats, merchants and an almost infallible sense of whom to pay, whom to negotiate with, and whom to avoid.',
        },
        {
          hr: 'Na ulazu u Knežev dvor stoji natpis koji je i danas program: „Obliti privatorum, publica curate" — zaboravite privatno, brinite se za javno. Knez je biran na samo mjesec dana, da se nitko ne bi previše navikao na vlast. Republika je 1416. među prvima u Europi zabranila trgovinu robovima, a njezin karantenski sustav postao je uzor drugima.',
          en: 'At the entrance to the Rector\'s Palace stands an inscription that is still a programme today: "Obliti privatorum, publica curate" — forget private matters, care for the public good. The Rector was elected for only a month, so that no one would grow too accustomed to power. In 1416 the Republic was among the first in Europe to ban the slave trade, and its quarantine system became a model for others.',
        },
        {
          hr: 'Suvremeni Dubrovnik nerado priznaje koliko duguje toj baštini. Grad koji je nekad odlučivao o vlastitoj sudbini danas se često osjeća kao kulisa za turiste i televizijske serije. No kad Dubrovčani govore o „slobodi" — riječi koja stoji na zastavi Republike — ne misle na apstrakciju. Misle na pet stotina godina u kojima su o sebi odlučivali sami.',
          en: 'Contemporary Dubrovnik is reluctant to admit how much it owes that heritage. A city that once decided its own fate today often feels like a backdrop for tourists and television series. But when the people of Dubrovnik speak of "libertas" — the word on the Republic\'s flag — they do not mean an abstraction. They mean five hundred years in which they decided for themselves.',
        },
      ],
      vocab: [
        ['nadživjeti', 'to outlive'],
        ['pregovarati', 'to negotiate'],
        ['knez', 'rector; prince'],
        ['baština', 'heritage'],
        ['kulisa', 'backdrop, stage set'],
      ],
    },
    {
      key: 'zagrebacka_skola',
      emoji: '🎬',
      title: 'Zagrebačka škola animiranog filma',
      titleEn: 'The Zagreb School of Animation',
      paragraphs: [
        {
          hr: 'Godine 1962. Oscara za najbolji animirani film prvi put nije dobio američki studio. Dobio ga je „Surogat" Dušana Vukotića, kratki film o čovjeku koji na plažu donosi sve na napuhavanje — pa i djevojku. Time je svijet službeno upoznao Zagrebačku školu animiranog filma, pokret koji je od pedesetih godina mijenjao ono što se od crtića očekivalo.',
          en: 'In 1962, for the first time, the Oscar for best animated film did not go to an American studio. It went to "Surogat" (Ersatz) by Dušan Vukotić, a short film about a man who brings everything to the beach inflatable — including his girlfriend. With that the world officially met the Zagreb School of Animation, a movement that from the 1950s changed what was expected of a cartoon.',
        },
        {
          hr: 'Dok je Disney težio glatkom, realističnom pokretu, zagrebački su autori išli suprotnim smjerom: reducirana animacija, plošni likovi, grafička stilizacija i — što je najvažnije — teme za odrasle. Njihovi filmovi govorili su o otuđenju, birokraciji i apsurdu modernog života, često bez ijedne riječi, jer je jezik slike bio univerzalan.',
          en: 'While Disney strove for smooth, realistic movement, the Zagreb artists went the opposite way: reduced animation, flat characters, graphic stylisation and — most importantly — themes for adults. Their films spoke of alienation, bureaucracy and the absurdity of modern life, often without a single word, because the language of the image was universal.',
        },
        {
          hr: 'Škola nije bila institucija nego okupljanje talenata u jednom studiju, u jednom gradu, u jednom povijesnom trenutku. Kad se taj trenutak promijenio, pokret je izgubio zamah. Ostalo je nasljeđe koje se danas proučava na filmskim akademijama od Tokija do Los Angelesa — i festival Animafest, na kojem Zagreb svake godine iznova potvrđuje da je animaciju shvaćao kao umjetnost prije mnogih drugih.',
          en: 'The School was not an institution but a gathering of talent in one studio, in one city, at one historical moment. When that moment changed, the movement lost its momentum. What remains is a legacy studied today at film academies from Tokyo to Los Angeles — and the Animafest festival, at which Zagreb confirms every year that it understood animation as an art before many others did.',
        },
      ],
      vocab: [
        ['crtić', 'cartoon (colloquial)'],
        ['plošan', 'flat, two-dimensional'],
        ['otuđenje', 'alienation'],
        ['zamah', 'momentum'],
        ['nasljeđe', 'legacy'],
      ],
    },
    {
      key: 'becarac',
      emoji: '🎶',
      title: 'Bećarac',
      titleEn: 'Bećarac',
      paragraphs: [
        {
          hr: 'U Slavoniji postoji pjesma koja nikada nije dovršena. Bećarac se sastoji od dvostiha koje pjevač izmišlja na licu mjesta, a ostali ih prihvaćaju ili nadmašuju vlastitim. Tema je bilo što: ljubav, vino, susjedova kći, načelnik, cijena pšenice. Pravilo je jedno — stih mora biti duhovit, a najbolje zajedljiv.',
          en: "In Slavonia there is a song that is never finished. The bećarac consists of couplets the singer improvises on the spot, which the others accept or outdo with their own. The subject is anything: love, wine, the neighbour's daughter, the mayor, the price of wheat. There is one rule — the verse must be witty, and preferably biting.",
        },
        {
          hr: 'UNESCO je 2011. uvrstio bećarac na popis nematerijalne kulturne baštine, što je mnoge Slavonce iznenadilo: ono što se pjevalo uz rakiju na svadbama odjednom je postalo svjetsko blago. No upravo u tome jest smisao. Bećarac je narodna satira, sredstvo kojim je selo stoljećima komentiralo vlast i običaje, a da mu nitko nije mogao prigovoriti — jer je to, na kraju krajeva, samo pjesma.',
          en: 'In 2011 UNESCO inscribed the bećarac on its list of intangible cultural heritage, which surprised many Slavonians: what was sung over rakija at weddings had suddenly become a world treasure. Yet that is precisely the point. The bećarac is folk satire, the means by which the village commented on authority and custom for centuries without anyone being able to object — because, after all, it is only a song.',
        },
        {
          hr: 'Danas bećarac živi na dva kolosijeka. Na festivalima ga izvode uvježbani ansambli u nošnjama, ispravno i pomalo muzejski. A u slavonskim dvorištima još se uvijek, oko ponoći, netko digne i zapjeva stih koji nitko prije nije čuo — i koji će sutra ponavljati cijelo selo. Baština je, pokazuje se, ono što se još uvijek smije izmisliti.',
          en: 'Today the bećarac lives on two tracks. At festivals it is performed by rehearsed ensembles in folk costume, correctly and a little museum-like. And in Slavonian courtyards someone still gets up around midnight and sings a verse no one has heard before — and which the whole village will repeat tomorrow. Heritage, it turns out, is what one is still allowed to invent.',
        },
      ],
      vocab: [
        ['dvostih', 'couplet'],
        ['zajedljiv', 'biting, sarcastic'],
        ['nematerijalna baština', 'intangible heritage'],
        ['nošnja', 'folk costume'],
        ['kolosijek', 'track (lit. rail track)'],
      ],
    },
    {
      key: 'licitar',
      emoji: '❤️',
      title: 'Licitarsko srce',
      titleEn: 'The Licitar Heart',
      paragraphs: [
        {
          hr: 'Crveno srce od medenog tijesta, obrubljeno bijelim šećernim ukrasom, s ogledalcem u sredini i kratkim stihom ispod njega — licitar je najprepoznatljiviji hrvatski suvenir, a da ga gotovo nitko ne jede. To i nije bila njegova svrha: licitar se daruje, vješa na zid ili na božićno drvce, a jede ga samo onaj tko ne zna bolje.',
          en: 'A red heart of honey dough, edged with white sugar decoration, with a small mirror in the centre and a short verse beneath it — the licitar is the most recognisable Croatian souvenir, and almost nobody eats it. That was never its purpose: a licitar is given, hung on a wall or on the Christmas tree, and eaten only by someone who does not know better.',
        },
        {
          hr: 'Obrt licitara u sjevernoj Hrvatskoj datira iz srednjega vijeka, kad su medičari uz samostane pekli kolače za proštenja. Ogledalce u srcu imalo je jasnu poruku: onaj tko ga primi trebao bi u njemu vidjeti — sebe, u očima darovatelja. Bilo je to ljubavno pismo za one koji pisati nisu znali ili nisu smjeli.',
          en: 'The licitar trade in northern Croatia dates from the Middle Ages, when honey-cake makers by the monasteries baked cakes for church fairs. The little mirror in the heart carried a clear message: whoever received it was meant to see in it — themselves, in the eyes of the giver. It was a love letter for those who could not write, or were not allowed to.',
        },
        {
          hr: 'Od 2010. licitarsko je umijeće na UNESCO-ovu popisu nematerijalne baštine, a obrtnika koji ga još poznaju sve je manje. Paradoks je očit: što je srce više na plakatima turističke zajednice, to ga manje ruku zna napraviti. Baština se, čini se, lakše brendira nego prenosi.',
          en: "Since 2010 the licitar craft has been on UNESCO's list of intangible heritage, and the craftsmen who still know it are ever fewer. The paradox is plain: the more the heart appears on tourist-board posters, the fewer hands know how to make it. Heritage, it seems, is more easily branded than passed on.",
        },
      ],
      vocab: [
        ['medeno tijesto', 'honey dough'],
        ['obrt', 'craft, trade'],
        ['proštenje', 'church fair (patron-saint day)'],
        ['darovatelj', 'giver, donor'],
        ['prenositi', 'to pass on, transmit'],
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
    {
      key: 'purizam',
      emoji: '🧹',
      title: 'Purizam i posuđenice',
      titleEn: 'Purism and Loanwords',
      paragraphs: [
        {
          hr: 'Malo koji jezik s toliko strasti raspravlja o vlastitim riječima kao hrvatski. Jezični purizam — sklonost da se tuđica zamijeni domaćom tvorenicom — ovdje nije akademska zanimacija nego dio nacionalne biografije. Zrakoplov umjesto aeroplana, tipkovnica umjesto klavijature, brzoglas umjesto telefona: neke su zamjene zaživjele, druge su postale predmetom šale, a granica među njima nije uvijek jasna.',
          en: 'Few languages debate their own words with as much passion as Croatian. Linguistic purism — the tendency to replace a foreign word with a domestic coinage — is here not an academic pastime but part of the national biography. Zrakoplov instead of aeroplan, tipkovnica instead of klavijatura, brzoglas instead of telefon: some replacements took root, others became the stuff of jokes, and the line between them is not always clear.',
        },
        {
          hr: 'Purizam je razumljiv kad se sjetimo da je standardni jezik stoljećima bio sredstvo obrane identiteta pod tuđim upravama. No ono što je nekad bilo otpor lako postaje refleks. Danas se ista energija troši na anglizme: digitalni rječnik mladih pun je glagola nastalih od engleskih korijena, a jezični savjetnici upozoravaju, propisuju i najčešće — gube.',
          en: 'Purism is understandable when we recall that the standard language was for centuries a means of defending identity under foreign administrations. But what was once resistance easily becomes reflex. Today the same energy is spent on anglicisms: the digital vocabulary of the young is full of verbs built on English roots, and language advisers warn, prescribe and, most often, lose.',
        },
        {
          hr: 'Možda je vrijeme da se pitanje postavi drukčije. Jezik koji ne posuđuje mrtav je jezik; jezik koji posuđuje bez mjere gubi obris. Pravo pitanje stoga nije treba li braniti hrvatski od tuđica, nego tko o tome odlučuje — govornici svojim svakodnevnim izborom ili savjetnici svojim popisima. Povijest sugerira da su govornici uvijek imali posljednju riječ, čak i kad su je izgovarali pogrešno.',
          en: 'Perhaps it is time to put the question differently. A language that does not borrow is a dead language; a language that borrows without measure loses its outline. The real question, then, is not whether Croatian should be defended from foreign words, but who decides — speakers through their everyday choices, or advisers through their lists. History suggests that speakers have always had the last word, even when they pronounced it wrongly.',
        },
      ],
      vocab: [
        ['tuđica', 'foreign word, loanword'],
        ['tvorenica', 'coinage, derived word'],
        ['zaživjeti', 'to take root, catch on'],
        ['jezični savjetnik', 'language adviser; usage guide'],
        ['obris', 'outline, contour'],
      ],
    },
    {
      key: 'regionalni_identiteti',
      emoji: '🗺️',
      title: 'Regionalni identiteti',
      titleEn: 'Regional Identities',
      paragraphs: [
        {
          hr: 'Pitajte Hrvata odakle je i rijetko ćete čuti „iz Hrvatske". Čut ćete: Dalmatinac, Istrijan, Slavonac, Zagorac, Ličanin. Regionalni identitet u Hrvatskoj nije podnaslov nacionalnoga nego njegov ravnopravni sloj, oblikovan stoljećima u kojima su ove pokrajine živjele pod različitim državama, zakonima i jezicima uprave.',
          en: 'Ask a Croat where he is from and you will rarely hear "from Croatia". You will hear: Dalmatian, Istrian, Slavonian, Zagorje man, Lika man. Regional identity in Croatia is not a subtitle to the national one but an equal layer of it, shaped over centuries in which these provinces lived under different states, laws and languages of administration.',
        },
        {
          hr: 'Ta slojevitost proizvodi napetost koju vanjski promatrač lako previdi. Istra, koja svoju višejezičnost slavi, i Slavonija, koja se osjeća zaboravljenom, na istu državu gledaju iz posve različitih kutova. Dalmacija je uvjerena da hrani zemlju turizmom; Zagreb je uvjeren da je plaća porezom. Svaka regija ima svoju pripovijest o žrtvi i zasluzi, i svaka je u njoj djelomično u pravu.',
          en: 'That layering produces a tension the outside observer easily overlooks. Istria, which celebrates its multilingualism, and Slavonia, which feels forgotten, look at the same state from entirely different angles. Dalmatia is convinced it feeds the country through tourism; Zagreb is convinced it pays for it through taxes. Every region has its narrative of sacrifice and merit, and each is partly right.',
        },
        {
          hr: 'Ipak, regionalizam u Hrvatskoj gotovo nikad ne prelazi u separatizam. Razlog je, paradoksalno, u samoj nacionalnoj priči: država je premlada i preteško stečena da bi se njezine granice dovodile u pitanje. Regionalni identitet zato funkcionira kao ventil — mjesto na kojem se smije biti drugačiji, upravo zato što se o zajedničkom ne raspravlja.',
          en: 'And yet regionalism in Croatia almost never turns into separatism. The reason, paradoxically, lies in the national story itself: the state is too young and was too hard-won for its borders to be questioned. Regional identity therefore functions as a valve — the place where one may be different, precisely because what is shared is not up for debate.',
        },
      ],
      vocab: [
        ['pokrajina', 'province, region'],
        ['slojevitost', 'layeredness, complexity'],
        ['previdjeti', 'to overlook'],
        ['zasluga', 'merit, credit'],
        ['ventil', 'valve; outlet (figurative)'],
      ],
    },
    {
      key: 'mit_o_moru',
      emoji: '🌊',
      title: 'Mit o moru',
      titleEn: 'The Myth of the Sea',
      paragraphs: [
        {
          hr: 'Hrvatska sebe zamišlja kao pomorsku naciju, iako većina njezinih stanovnika živi daleko od obale i more vidi dva tjedna godišnje. Taj raskorak između zemljopisa i samopredodžbe nije slučajan. More je u nacionalnoj mašti ono što je Hrvatsku razlikovalo od susjeda: prozor u Mediteran, dokaz da pripadamo zapadu, jamstvo da nismo tek još jedna zemlja u unutrašnjosti.',
          en: 'Croatia imagines itself a maritime nation, although most of its inhabitants live far from the coast and see the sea two weeks a year. That gap between geography and self-image is not accidental. In the national imagination the sea is what set Croatia apart from its neighbours: a window onto the Mediterranean, proof that we belong to the West, a guarantee that we are not just another inland country.',
        },
        {
          hr: 'Mit ima i svoju gospodarsku stranu. Turizam donosi petinu nacionalnoga dohotka, pa se o moru govori kao o resursu koji se crpi, a ne o prostoru u kojem se živi. Otoci se prazne zimi i prepune ljeti; ribar postaje statist na jelovniku, a brodograditelj uspomena. Ono što se prodaje kao autentično često je upravo ono što je autentičnost izgubilo.',
          en: 'The myth has its economic side too. Tourism brings a fifth of the national income, so the sea is spoken of as a resource to be extracted rather than a space to be lived in. The islands empty in winter and overflow in summer; the fisherman becomes an extra on the menu, the shipbuilder a memory. What is sold as authentic is often precisely what has lost its authenticity.',
        },
        {
          hr: 'Pa ipak, kad Hrvat u dijaspori zatvori oči i pomisli na dom, gotovo nikad ne vidi Zagreb. Vidi more. Mit se ne održava zato što je točan nego zato što je potreban — daje malenoj naciji osjećaj širine koju joj karta ne daje. Pitanje za sljedeće naraštaje nije hoće li se mit raspasti, nego hoće li od mora ostati išta osim mita.',
          en: 'And yet, when a Croat in the diaspora closes his eyes and thinks of home, he almost never sees Zagreb. He sees the sea. The myth persists not because it is accurate but because it is needed — it gives a small nation a sense of breadth the map does not grant it. The question for coming generations is not whether the myth will collapse, but whether anything of the sea will remain besides the myth.',
        },
      ],
      vocab: [
        ['raskorak', 'gap, discrepancy'],
        ['samopredodžba', 'self-image'],
        ['crpiti', 'to extract, draw on'],
        ['statist', 'extra (film/theatre); bit player'],
        ['naraštaj', 'generation'],
      ],
    },
    {
      key: 'spomenici_i_sjecanje',
      emoji: '🏛️',
      title: 'Spomenici i sjećanje',
      titleEn: 'Monuments and Memory',
      paragraphs: [
        {
          hr: 'Zagrebački glavni trg promijenio je ime šest puta u jednom stoljeću. Svaka je vlast imala potrebu upisati se u kamen i natpise ulica, a građani su, iz navike ili iz otpora, nastavili govoriti onako kako su naučili od roditelja. Tako je nastao neobičan dvojezični grad: službeni nazivi na pločama i nazivi koje ljudi doista rabe u razgovoru.',
          en: "Zagreb's main square changed its name six times in one century. Every regime felt the need to inscribe itself in stone and street signs, and the citizens, from habit or from resistance, went on speaking as they had learned from their parents. Thus arose a curious bilingual city: the official names on the plaques, and the names people actually use in conversation.",
        },
        {
          hr: 'Spomenik je uvijek tvrdnja o tome što zajednica smatra vrijednim pamćenja — i, jednako važno, što smatra vrijednim zaborava. Postavljanje i uklanjanje spomenika u Hrvatskoj zato rijetko prolazi mirno: iza svake brončane figure stoji rasprava o tome čija je povijest službena. Pritom se najviše govori o onome čega više nema.',
          en: 'A monument is always a claim about what a community considers worth remembering — and, just as importantly, what it considers worth forgetting. The erection and removal of monuments in Croatia therefore rarely passes quietly: behind every bronze figure stands an argument over whose history is official. And the most talk is about what is no longer there.',
        },
        {
          hr: 'Možda je zrelost društva mjerljiva upravo time koliko slojeva sjećanja može istodobno podnijeti. Grad u kojem ploča kaže jedno, a starica na klupi drugo, nije grad bez pamćenja — to je grad s previše pamćenja. Zadaća nije izabrati jednu verziju, nego naučiti čitati sve natpise, uključujući one koji su izbrisani.',
          en: "Perhaps a society's maturity can be measured precisely by how many layers of memory it can bear at once. A city where the plaque says one thing and the old woman on the bench another is not a city without memory — it is a city with too much memory. The task is not to choose one version but to learn to read all the inscriptions, including those that have been erased.",
        },
      ],
      vocab: [
        ['natpis', 'inscription, sign'],
        ['upisati se', 'to inscribe oneself'],
        ['tvrdnja', 'claim, assertion'],
        ['podnijeti', 'to bear, endure'],
        ['izbrisan', 'erased'],
      ],
    },
    {
      key: 'deklaracija',
      emoji: '🖊️',
      title: 'Deklaracija iz 1967.',
      titleEn: 'The 1967 Declaration',
      paragraphs: [
        {
          hr: 'U ožujku 1967. u zagrebačkom je tjedniku Telegram objavljen kratak tekst s dugim naslovom: Deklaracija o nazivu i položaju hrvatskog književnog jezika. Potpisalo ju je osamnaest kulturnih ustanova, među njima Matica hrvatska i Društvo književnika. Tražila je nešto što danas zvuči samorazumljivo — da se hrvatski u ustavu i javnom životu imenuje vlastitim imenom.',
          en: "In March 1967 a short text with a long title appeared in the Zagreb weekly Telegram: the Declaration on the Name and Status of the Croatian Literary Language. It was signed by eighteen cultural institutions, among them Matica hrvatska and the Writers' Society. It demanded something that today sounds self-evident — that Croatian be named by its own name in the constitution and in public life.",
        },
        {
          hr: 'Reakcija vlasti bila je brza i oštra. Potpisnici su smijenjeni, isključeni iz Partije ili gurnuti na rub javnoga života; neki su na taj rub ostali do kraja. No tekst je učinio nešto što se više nije moglo poništiti: pretvorio je pitanje jezika iz stručne rasprave u pitanje dostojanstva. Od tog trenutka govoriti o jeziku značilo je govoriti o tome tko smo.',
          en: "The authorities' reaction was swift and harsh. The signatories were dismissed, expelled from the Party or pushed to the margins of public life; some remained on that margin to the end. But the text did something that could no longer be undone: it turned the question of language from a specialist debate into a question of dignity. From that moment, to speak about language was to speak about who we are.",
        },
        {
          hr: 'Pola stoljeća kasnije Deklaracija se čita dvojako. Jednima je ona rođendan suvremenoga hrvatskog jezika, drugima podsjetnik na to koliko lako jezik postane politika. Oboje je istina, i upravo u tome jest njezina važnost: pokazala je da nijedan jezični standard nije neutralan, nego uvijek nečija odluka — i da se ta odluka može donijeti i drugačije.',
          en: "Half a century later the Declaration is read in two ways. To some it is the birthday of the modern Croatian language, to others a reminder of how easily language becomes politics. Both are true, and precisely therein lies its importance: it showed that no linguistic standard is neutral, but always someone's decision — and that the decision can also be made differently.",
        },
      ],
      vocab: [
        ['tjednik', 'weekly (newspaper)'],
        ['ustanova', 'institution'],
        ['samorazumljiv', 'self-evident'],
        ['smijeniti', 'to dismiss, remove from office'],
        ['dvojako', 'in two ways, ambiguously'],
      ],
    },
  ],
};
