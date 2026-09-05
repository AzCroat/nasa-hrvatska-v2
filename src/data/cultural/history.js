// history.js
export const HISTORY = {
  title: 'Domovinski Rat — Homeland War',
  subtitle: 'The Croatian War of Independence (1991–1995)',
  intro:
    'The Homeland War represents the birth of modern Croatia as a free and sovereign nation. After centuries under foreign rule — from the Habsburg Empire to the Kingdom of Yugoslavia and communist Yugoslavia — Croatians finally achieved what generations had dreamed of: an independent homeland. This is the story of how a small nation stood up against overwhelming military force and won its freedom.',
  introHr:
    'Domovinski rat predstavlja rođenje moderne Hrvatske kao slobodne i suverene države. Nakon stoljeća pod stranom vlašću — od Habsburške Monarhije, preko Kraljevine Jugoslavije, do komunističke Jugoslavije — Hrvati su napokon ostvarili ono o čemu su generacije sanjale: neovisnu domovinu. Ovo je priča o tome kako se mali narod suprotstavio nadmoćnoj vojnoj sili i izborio svoju slobodu.',
  // GRADED CROATIAN (content expansion item 6, 2026-09-05). `introHr` / `textHr`
  // stay as the B1 baseline every consumer already reads; the *HrA1 / *HrA2 /
  // *HrB2 / *HrC1 / *HrC2 fields carry the same event at register — A1/A2 in
  // short simple sentences, B2 as reportage with dates and numbers, C1 as
  // analysis (causes, interpretations, open questions), C2 essayistic. The
  // screen picks by the learner's level (lib/gradedHr.ts) and falls back down
  // the ladder, so a cached payload without these fields renders exactly as
  // before. The field names end in `Hr` + level ON PURPOSE: lintCroatianText
  // matches `[a-zA-Z]*Hr[ABC]?[12]?`, so every one of these is scanned.
  introHrA1:
    'Domovinski rat je rat za neovisnost Hrvatske. Trajao je od 1991. do 1995. godine. Hrvatska je danas slobodna država. Ovo je priča o tom ratu.',
  introHrA2:
    'Hrvatska je stoljećima bila pod stranom vlašću: prvo pod Habsburgovcima, a zatim u Jugoslaviji. Godine 1991. Hrvati su glasovali za neovisnost i počeo je rat. Rat je trajao do 1995. godine. Mala zemlja obranila se od velike vojske i danas je slobodna država.',
  introHrB2:
    'Domovinski rat (1991. – 1995.) prijelomni je događaj moderne hrvatske povijesti: iz njega je izišla samostalna i međunarodno priznata država. Nakon stoljeća u kojima su o hrvatskim zemljama odlučivali Beč, Budimpešta i Beograd, hrvatski su građani na referendumu u svibnju 1991. velikom većinom izabrali neovisnost. Slijedile su četiri godine rata: okupacija trećine teritorija, razaranje Vukovara, stotine tisuća prognanika, a zatim vojno-redarstvene operacije kojima je 1995. oslobođena većina okupiranog područja. Ovaj pregled prati taj put — od prvih višestranačkih izbora do mirne reintegracije Podunavlja 1998. — i uz svaki događaj donosi riječi kojima se o njemu i danas govori.',
  introHrC1:
    'O Domovinskom ratu može se govoriti kao o vojnoj povijesti — o frontama, operacijama i brojkama — ili kao o političkom procesu u kojem se raspad jedne federacije pretvorio u nastanak nove države. Oba su pristupa potrebna, jer nijedan sam ne objašnjava zašto je sukob uopće poprimio oblik rata: raspad Jugoslavije mogao je, barem u teoriji, proći pregovorima, kako se to dogodilo u Čehoslovačkoj. Da nije, presudili su čimbenici koje ovaj pregled pokušava razdvojiti: nacionalna politika u Beogradu koja je JNA pretvorila u instrument jedne strane, međunarodna zajednica koja je predugo inzistirala na cjelovitosti države koja više nije postojala i hrvatska politika koja je, između obrane i državotvornog cilja, morala istodobno graditi vojsku i institucije. Kronologija koja slijedi zato nije samo niz datuma, nego pokušaj da se svaki od njih pročita kao odluka.',
  introHrC2:
    'Svaki narod ima događaj kojim mjeri vrijeme: prije njega i poslije njega. Za Hrvate je to Domovinski rat, i upravo zato o njemu nije lako govoriti mirno. Ono što je jednima osobno sjećanje — podrum, sirena, pismo s bojišnice — drugima je već školska lekcija, a trećima politički argument. Ovaj pregled ne pokušava pomiriti te tri razine, nego ih držati na okupu: navodi datume i brojke jer bez njih sjećanje postaje mit, ali ne zaboravlja da iza svakog datuma stoji netko tko ga je proživio. Jezik kojim se o ratu govori i sam je dio te povijesti — riječi kao branitelj, prognanik ili Oluja u hrvatskom nose značenja koja rječnik ne bilježi. Čitati ovu kronologiju znači, između ostaloga, učiti taj jezik.',
  timeline: [
    {
      year: '1989',
      title: 'Winds of Change',
      titleHr: 'Vjetrovi promjena',
      text: "As communism collapses across Eastern Europe, Croatia begins its journey toward democracy. Political parties are allowed for the first time in decades. The Croatian Democratic Union (HDZ) is founded, giving voice to the Croatian people\'s desire for self-determination.",
      textHr:
        'Dok komunizam propada diljem istočne Europe, Hrvatska započinje svoj put prema demokraciji. Prvi su put nakon više desetljeća dopuštene političke stranke. Osniva se Hrvatska demokratska zajednica (HDZ), koja daje glas želji hrvatskog naroda za samoodređenjem.',
      textHrA1:
        'Godina je 1989. Komunizam pada u istočnoj Europi. Hrvatska želi demokraciju. Osnivaju se nove političke stranke.',
      textHrA2:
        'Godine 1989. komunizam se raspadao u cijeloj istočnoj Europi. U Hrvatskoj su ljudi tražili demokraciju i slobodne izbore. Nakon mnogo godina ponovno su bile dopuštene političke stranke. Tada je osnovan HDZ, Hrvatska demokratska zajednica.',
      textHrB2:
        'Godina 1989. godina je u kojoj se istočna Europa lomi: u Poljskoj i Mađarskoj komunistički režimi pregovaraju o predaji vlasti, u studenome pada Berlinski zid, a u Hrvatskoj pod pritiskom javnosti popušta ustavni monopol jedne stranke. Nastaju prve oporbene organizacije, a već u lipnju osniva se Hrvatska demokratska zajednica na čelu s Franjom Tuđmanom, bivšim generalom i povjesničarom kojega je režim dvaput zatvarao. Istodobno u Beogradu Slobodan Milošević učvršćuje vlast programom koji federaciju želi pretvoriti u centraliziranu državu. Dva će se procesa za nepune dvije godine sudariti.',
      textHrC1:
        "Kada se 1989. godina opisuje kao godina vjetrova promjena, lako se previdi da su ti vjetrovi u Jugoslaviji puhali iz suprotnih smjerova. U Sloveniji i Hrvatskoj demokratizacija je značila višestranačje i odmak od Beograda; u Srbiji je masovna mobilizacija na 'antibirokratskoj revoluciji' služila upravo suprotnome — recentralizaciji federacije pod jednim vodstvom. Zato je pitanje što je uzrok kasnijemu ratu manje pitanje o 1991., a više o 1989.: dva su projekta bila nespojiva, a institucije koje su ih trebale pomiriti — Predsjedništvo SFRJ, Savez komunista — same su se raspadale. Osnivanje HDZ-a u lipnju te godine u tom je svjetlu i simptom i uzrok: simptom, jer je jednostranački sustav već izgubio legitimitet; uzrok, jer je hrvatskoj želji za samoodređenjem dalo organizacijski oblik i vođu.",
      textHrC2:
        'Povijest voli simetrične godine, a 1989. nudi se kao takva: pad zida, kraj jednog svijeta. No za hrvatskoga čitatelja ta je godina zanimljivija po svojoj asimetriji. Dok je Europa slavila, u Jugoslaviji su se dvije budućnosti već gledale preko stola, i nijedna nije pristajala odustati. Riječ promjena tada je značila različite stvari u Zagrebu i Beogradu, a jezik je to znao prije politike: u jednome se gradu govorilo o demokraciji, u drugome o jedinstvu, i obje su riječi bile iskrene. Osnivanje stranke u zagrebačkoj dvorani ne izgleda kao prijeloman događaj — nema prizora, nema zvona. Ali povijest se rijetko događa ondje gdje su kamere. Ona se češće događa u trenutku kad ljudi koji su desetljećima šutjeli shvate da se smiju izgovoriti.',
      emoji: '🌅',
    },
    {
      year: '1990',
      title: 'First Free Elections',
      titleHr: 'Prvi slobodni izbori',
      text: 'In the first democratic elections since World War II, Croatians overwhelmingly choose independence. Dr. Franjo Tuđman becomes the first democratically elected President. A new constitution is drafted, establishing Croatia as a sovereign nation of the Croatian people. The Croatian šahovnica (checkerboard) proudly returns as the national symbol.',
      textHr:
        'Na prvim demokratskim izborima od Drugoga svjetskog rata, Hrvati se u velikoj većini opredjeljuju za neovisnost. Dr. Franjo Tuđman postaje prvi demokratski izabrani predsjednik. Izrađuje se novi ustav kojim se Hrvatska uspostavlja kao suverena država hrvatskog naroda. Hrvatska šahovnica ponosno se vraća kao državni simbol.',
      textHrA1:
        'Godina je 1990. Hrvatska ima prve slobodne izbore. Ljudi glasuju za neovisnost. Franjo Tuđman je novi predsjednik. Hrvatska ima novi ustav i novu zastavu sa šahovnicom.',
      textHrA2:
        'U proljeće 1990. održani su prvi slobodni izbori nakon Drugoga svjetskog rata. Pobijedio je HDZ, a Franjo Tuđman postao je predsjednik. U prosincu je donesen novi ustav. Hrvatska je postala suverena država, a šahovnica se vratila na zastavu.',
      textHrB2:
        "Na izborima u travnju i svibnju 1990. — prvima višestranačkima od 1938. — HDZ osvaja natpolovičnu većinu u Saboru, a Franjo Tuđman 30. svibnja postaje predsjednik Predsjedništva, kasnije predsjednik Republike. Nova vlast mijenja državne simbole: šahovnica, koju je Jugoslavija dopuštala tek uz crvenu zvijezdu, vraća se kao grb, a 22. prosinca Sabor donosi 'Božićni ustav', koji Hrvatsku definira kao nacionalnu državu hrvatskog naroda i državu pripadnika drugih naroda i manjina koji su njezini državljani. Ustav ne proglašava neovisnost, ali otvara vrata razlazu: predviđa pravo na izdvajanje iz Jugoslavije i podređuje savezne zakone republičkima. U općinama s većinskim srpskim stanovništvom istodobno se organizira otpor — u kolovozu blokade cesta oko Knina, poznate kao 'balvan-revolucija'.",
      textHrC1:
        'Izbori iz 1990. redovito se tumače kao plebiscit za neovisnost, no valja biti precizan: HDZ je pobijedio s oko 42 posto glasova, a većinski izborni sustav tu je relativnu prednost pretvorio u čvrstu saborsku većinu od 205 od 356 mjesta. Program stranke govorio je o konfederaciji, a neovisnost je kao cilj sazrijevala tijekom godine, u mjeri u kojoj su pregovori o preustroju Jugoslavije propadali. Božićni ustav zato je manje deklaracija, a više instrument: definirao je Hrvatsku kao suverenu državu i time svaki daljnji korak — referendum, razdruživanje — učinio ustavno mogućim, a da ga još nije napravio. Cijena je te promjene bila vidljiva odmah. Srpska manjina, koja je u prethodnome ustavu bila konstitutivni narod, doživjela je novu definiciju kao gubitak statusa, a dio njezinih političkih vođa iskoristio je taj strah za pobunu koju je Beograd već pripremao. Rasprava o tome jesu li se te dvije stvari mogle razdvojiti traje do danas.',
      textHrC2:
        'Postoji fotografija s tih izbora koju svi pamte, i uvijek je ista: red ljudi pred glasačkim mjestom, netko drži dijete, netko se smije. Jednostavnost prizora zavarava. Nitko u tome redu nije znao glasa li za novi grb, za drugačiju Jugoslaviju ili za rat — vjerojatno ni za jedno od toga, nego za pravo da uopće bira. Sve je ostalo došlo poslije, i poslije se lako čini neizbježnim. Božićni ustav pisan je jezikom koji je istodobno svečan i oprezan: kaže suverena država, ali ne kaže samostalna; otvara vrata, ali ih ne prolazi. U toj se dvosmislenosti ogleda cijelo hrvatsko političko iskustvo tisućljeća — vještina da se kaže dovoljno, a ne previše. Šahovnica na zastavi bila je jedina rečenica koju su svi razumjeli bez pravnika.',
      emoji: '🗳️',
    },
    {
      year: '1991',
      title: 'Independence Declared',
      titleHr: 'Proglašenje neovisnosti',
      text: "On June 25, 1991, Croatia formally declares independence from Yugoslavia. The decision reflects the will of 94% of Croatian citizens who voted for sovereignty in the May referendum. However, the Yugoslav People\'s Army (JNA) and Serbian paramilitaries refuse to accept Croatian independence and launch armed aggression.",
      textHr:
        '25. lipnja 1991. Hrvatska službeno proglašava neovisnost od Jugoslavije. Ta odluka odražava volju 94% hrvatskih građana koji su na svibanjskom referendumu glasovali za suverenost. No Jugoslavenska narodna armija (JNA) i srpske paravojne postrojbe odbijaju priznati hrvatsku neovisnost i pokreću oružanu agresiju.',
      textHrA1:
        'Dana 25. lipnja 1991. Hrvatska proglašava neovisnost. Prije toga je bio referendum. Većina ljudi želi slobodnu Hrvatsku. Ali JNA ne prihvaća tu odluku. Počinje rat.',
      textHrA2:
        'U svibnju 1991. održan je referendum. Više od 90 posto građana glasovalo je za neovisnost. Dana 25. lipnja Sabor je proglasio neovisnu Hrvatsku. Jugoslavenska vojska (JNA) i srpske paravojne skupine nisu to prihvatile. Napale su hrvatske gradove i sela, i tako je počeo rat.',
      textHrB2:
        'Referendum 19. svibnja 1991. daje hrvatskoj politici legitimitet koji joj je nedostajao: uz odaziv od 83 posto, više od 93 posto birača glasuje za suverenu Hrvatsku koja može ući u savez s drugim republikama, a 92 posto protiv ostanka u jedinstvenoj Jugoslaviji. Pet tjedana kasnije, 25. lipnja, Sabor donosi Ustavnu odluku o suverenosti i samostalnosti, istoga dana kad i Slovenija. Na zahtjev Europske zajednice odluka se Brijunskom deklaracijom odgađa tri mjeseca, no na terenu moratorij ništa ne mijenja: već od ožujka traju oružani sukobi na Plitvicama, u Pakracu i Borovu Selu, a preko ljeta JNA otvoreno prelazi na stranu pobunjenih Srba. Rat nije počeo jednim danom, nego se, iz incidenta u incident, pretvorio u agresiju.',
      textHrC1:
        'Datum 25. lipnja 1991. u kolektivnom je pamćenju čvrst, no pravno i politički neovisnost je bila proces, a ne trenutak. Ustavna odluka toga dana zamrznuta je Brijunskom deklaracijom, stupila je na snagu 8. listopada, a međunarodno je priznata tek u siječnju 1992. Ta tri datuma otkrivaju logiku vremena: Europa je, bojeći se domino-efekta, do zadnjega pokušavala sačuvati Jugoslaviju, pa je hrvatska neovisnost priznata tek kad je rat učinio nemogućim sve druge opcije. Istodobno se raspravlja o tome je li moratorij Hrvatsku oslabio ili ojačao — oslabio, jer je JNA dobila ljeto da se rasporedi; ojačao, jer je Hrvatska ušla u rat kao strana koja je iscrpila sve pregovaračke mogućnosti. Ono što je nesporno jest da odluka o razdruživanju nije bila uzrok agresije: pobuna u Kninu i prvi oružani napadi prethodili su joj za više od godinu dana.',
      textHrC2:
        "Neovisnost se proglašava rečenicom, a živi se godinama; između tih dviju činjenica leži sve ono što kalendar ne zna zabilježiti. Dvadeset peti lipnja ušao je u udžbenike kao dan kad je nešto počelo, ali onima koji su ga proživjeli više je nalikovao na dan kad je nešto prestalo — iščekivanje, nada da se može bez rata. Zanimljivo je kako jezik prati takva stanja. Do toga ljeta govorilo se o 'incidentima', 'napetostima', 'sukobima'; riječ rat izgovarala se s oklijevanjem, kao da bi je izgovaranje moglo prizvati. A zatim je, negdje između Borova Sela i jeseni, postala jedina riječ koja je odgovarala stvarnosti. Narodi rijetko odlučuju kad će ući u povijest. Oni odlučuju samo kako će se u njoj ponašati, i to je ono što ova godina, više od datuma, pamti.",
      emoji: '🇭🇷',
    },
    {
      year: '1991',
      title: 'The Battle of Vukovar',
      titleHr: 'Bitka za Vukovar',
      text: "For 87 devastating days, the defenders of Vukovar — outnumbered and outgunned — hold their ground against a massive assault by the JNA and Serbian forces. The city is reduced to rubble, but its heroic resistance becomes the symbol of Croatian courage and sacrifice. Vukovar\'s defenders bought precious time for Croatia to organize its defense. The city\'s sacrifice will never be forgotten. Vukovar — grad heroj (city hero).",
      textHr:
        'Tijekom 87 razornih dana, branitelji Vukovara — brojčano i naoružanjem nadjačani — odolijevaju masovnom napadu JNA i srpskih snaga. Grad je pretvoren u ruševine, no njegov herojski otpor postaje simbol hrvatske hrabrosti i žrtve. Branitelji Vukovara izborili su dragocjeno vrijeme da se Hrvatska organizira za obranu. Žrtva grada nikada neće biti zaboravljena. Vukovar — grad heroj.',
      textHrA1:
        'Vukovar je grad na Dunavu. Godine 1991. JNA napada grad. Branitelji se bore 87 dana. Grad je potpuno razoren. Vukovar je grad heroj.',
      textHrA2:
        'U jesen 1991. JNA i srpske snage napale su Vukovar. Branitelja je bilo malo, a napadača mnogo. Ipak su se borili 87 dana. Grad je gotovo potpuno razoren, a 18. studenoga je pao. Vukovar je postao simbol hrvatske hrabrosti. Zato ga danas zovemo grad heroj.',
      textHrB2:
        'Opsada Vukovara trajala je od 25. kolovoza do 18. studenoga 1991. Oko 1 800 branitelja — pripadnika 204. brigade, policije i dragovoljaca — tri je mjeseca zadržavalo snage JNA i srpskih paravojnih postrojbi koje su brojile više desetaka tisuća ljudi, uz stotine tenkova i svakodnevno topničko razaranje grada. Civili su preživljavali u podrumima, bez struje i vode; procjenjuje se da je na grad padalo i više od šest tisuća granata dnevno. Nakon pada grada slijedili su zločini koji su ostali njegovo najtamnije poglavlje: stotine ranjenika i civila odvedene su iz vukovarske bolnice i ubijene na Ovčari. Vojno gledano, Vukovar je vezao glavninu neprijateljskih snaga upravo u tjednima kad je Hrvatska tek stvarala vojsku; simbolički, postao je mjerilo žrtve kojim se u Hrvatskoj i danas mjere svi ostali.',
      textHrC1:
        'Vukovar je u hrvatskoj kulturi sjećanja dobio mjesto koje se najbolje razumije usporedbom: ono što je Staljingrad u ruskoj ili Verdun u francuskoj memoriji — mjesto na kojem se poraz pretvara u moralnu pobjedu. Vojni povjesničari opravdano ističu da je opsada imala i strateško značenje: dok je JNA tri mjeseca trošila glavninu snaga na jedan grad, Hrvatska je dobila vrijeme da od policijskih postrojbi i dragovoljaca sastavi vojsku i da preživi jesen 1991., kad je pad Zagreba bio realna mogućnost. No sjećanje ne živi od strategije. Ono živi od Ovčare, od kolone koja 18. studenoga izlazi iz grada, od bolnice koja je trebala biti zaštićena. Zato je Vukovar i politički osjetljivo mjesto: rasprave o tome je li grad mogao biti bolje pomognut, tko je za što odgovoran i kako se sjećanje smije koristiti nikada nisu utihnule. Sve to čini Vukovar ne samo poglavljem povijesti nego i mjerom kojom hrvatsko društvo provjerava samo sebe.',
      textHrC2:
        'Postoje gradovi koje povijest posjeti i ode, i gradovi u koje se useli. Vukovar pripada drugima. Tko danas prođe njegovim ulicama, vidi obnovljene fasade i vodotoranj koji je, izrešetan, ostavljen kakav je bio — arhitektura je ovdje ispisala istu dvojbu koju nosi i jezik: koliko obnoviti, koliko ostaviti da svjedoči. Broj 87 postao je u hrvatskom gotovo zaseban pojam; ne treba mu imenica, svi znaju da su to dani. Kolona sjećanja svakoga 18. studenoga hoda istim putem kojim su ljudi 1991. izlazili iz grada, u tišini koja nije praznina nego oblik govora. Ima nečega dostojanstvenoga u tome da se najteži dan u godini obilježava hodanjem, a ne riječima. Riječi su, uostalom, uvijek dolazile poslije — i uvijek su bile premale.',
      emoji: '🕯️',
    },
    {
      year: '1992',
      title: 'International Recognition',
      titleHr: 'Međunarodno priznanje',
      text: 'On January 15, 1992, Croatia is recognized as an independent state by the European Community and the international community. Germany, under Chancellor Helmut Kohl, leads the push for recognition. The dream of Croatian statehood becomes reality in the eyes of the world.',
      textHr:
        '15. siječnja 1992. Hrvatsku kao neovisnu državu priznaju Europska zajednica i međunarodna zajednica. Njemačka, na čelu s kancelarom Helmutom Kohlom, predvodi zalaganje za priznanje. San o hrvatskoj državnosti postaje stvarnost u očima svijeta.',
      textHrA1:
        'Dana 15. siječnja 1992. Europa priznaje Hrvatsku. Hrvatska je sada neovisna država i za druge zemlje. Njemačka je puno pomogla. U svibnju Hrvatska ulazi u Ujedinjene narode.',
      textHrA2:
        'U siječnju 1992. zemlje Europske zajednice priznale su Hrvatsku kao neovisnu državu. Njemačka i njezin kancelar Helmut Kohl najviše su se zalagali za priznanje. Nakon toga su Hrvatsku priznale i mnoge druge države. U svibnju iste godine Hrvatska je postala članica Ujedinjenih naroda.',
      textHrB2:
        "Priznanje 15. siječnja 1992. bilo je rezultat pola godine diplomatskog natezanja. Njemačka je, uz Austriju i Vatikan, već u jesen 1991. zagovarala priznanje kao način da se rat zaustavi; Francuska, Britanija i Sjedinjene Države upozoravale su da će priznanje rat proširiti na Bosnu i Hercegovinu. Kompromis je nađen u Badinterovoj komisiji, koja je zaključila da se Jugoslavija nalazi 'u procesu raspada' i da republike ispunjavaju uvjete za priznanje uz jamstva za manjine. Nakon što je Vatikan priznao Hrvatsku 13. siječnja, Europska zajednica učinila je to zajedno dva dana kasnije, a do svibnja, kad je Hrvatska primljena u Ujedinjene narode, priznanje je postalo opće. Za hrvatsku javnost datum je značio kraj sumnje da se bori za nešto što svijet ne vidi; za vojsku na terenu, međutim, ništa se nije promijenilo — trećina zemlje ostala je okupirana.",
      textHrC1:
        "Rasprava o priznanju Hrvatske jedan je od rijetkih trenutaka u kojima je diplomatska povijest rata jednako dramatična kao vojna. Argument protiv — da će priznanje republika ubrzati raspad i preseliti rat u Bosnu — nije bio neozbiljan i djelomično se ostvario. Argument za — da je Jugoslavija već prestala postojati i da nepriznavanje samo daje vremena agresoru — pokazao se točnijim: primirje potpisano u Sarajevu 2. siječnja 1992., dva tjedna prije priznanja, održalo se upravo zato što je priznanje mijenjalo pravnu narav sukoba. Od toga trenutka napad na Hrvatsku više nije bio 'unutarnji sukob', nego agresija na međunarodno priznatu državu, s posljedicama za sankcije, mirovne snage i kasnija suđenja. Njemačka je uloga pritom bila ključna i sporna: kritičari su u njoj vidjeli povratak njemačke moći u Europu, a zagovornici prvi test hoće li ujedinjena Europa znati donijeti odluku. Nije slučajno da se o tome do danas piše u udžbenicima međunarodnih odnosa.",
      textHrC2:
        "Ima nečega gotovo apsurdnoga u činjenici da narod mora čekati da ga netko drugi 'prizna' — kao da postojanje treba potpis. A ipak, oni koji su te zime slušali radio znaju koliko je taj potpis težio. Priznanje ne mijenja teritorij i ne vraća mrtve; mijenja jedino rečenicu kojom svijet opisuje što se dogodilo. Do 15. siječnja to je bio 'jugoslavenski sukob', poslije njega agresija na Hrvatsku. Razlika je gramatička i zato presudna: u prvoj rečenici nema subjekta, u drugoj ga ima. Stoljećima su o Hrvatskoj odlučivali drugi — u Beču, Pešti, Beogradu — i sada su ponovno drugi odlučili, ali prvi put onako kako je htjela sama. Možda zato taj dan nije praznik. Praznici se slave zbog onoga što smo učinili; ovaj se pamti zbog onoga što su nam konačno prestali odricati.",
      emoji: '🌍',
    },
    {
      year: '1992-94',
      title: 'Under Occupation',
      titleHr: 'Pod okupacijom',
      text: "Nearly one-third of Croatian territory remains under Serbian occupation. The UN deploys peacekeeping forces, but the occupied areas — the self-proclaimed \'Republic of Serbian Krajina\' — continue to exist. Over 250,000 Croatians are expelled from their homes. The Croatian people endure, building their military and waiting for the right moment to liberate their homeland.",
      textHr:
        "Gotovo trećina hrvatskog državnog teritorija ostaje pod srpskom okupacijom. UN raspoređuje mirovne snage, no okupirana područja — samoproglašena 'Republika Srpska Krajina' — i dalje postoje. Više od 250.000 Hrvata protjerano je iz svojih domova. Hrvatski narod izdržava, gradi svoju vojsku i čeka pravi trenutak za oslobođenje domovine.",
      textHrA1:
        'Rat još traje. Trećina Hrvatske je pod okupacijom. Mnogi ljudi moraju napustiti svoje domove. Ujedinjeni narodi šalju vojnike. Hrvatska čeka i gradi svoju vojsku.',
      textHrA2:
        "Od 1992. do 1994. gotovo trećina Hrvatske bila je okupirana. To područje zvalo se 'Republika Srpska Krajina', ali nijedna ga država nije priznala. Više od 250 000 Hrvata moralo je pobjeći iz svojih domova. Vojnici Ujedinjenih naroda čuvali su liniju razdvajanja, ali okupacija je trajala. Hrvatska je u to vrijeme jačala svoju vojsku i pripremala se za oslobođenje.",
      textHrB2:
        "Vanceov plan iz siječnja 1992. donio je Hrvatskoj primirje, ali i zamrznutu frontu: oko 14 000 pripadnika UNPROFOR-a razmješteno je u četiri 'zaštićene zone' koje su obuhvaćale gotovo 27 posto državnog teritorija, od Baranje do zaleđa Zadra. Plan je predviđao razoružanje pobunjenika i povratak prognanika; ni jedno ni drugo nije se dogodilo. Na okupiranom području nastavljeno je protjerivanje preostalih Hrvata i rušenje njihovih kuća i crkava, a s položaja iznad Zadra i Karlovca povremeno se granatiralo slobodne gradove. Hrvatska je istodobno primala prognanike — u vrhuncu ih je, zajedno s izbjeglicama iz Bosne i Hercegovine, bilo blizu 700 000 — i pretvarala vojsku iz improvizirane obrane u profesionalnu silu. Manje operacije, poput Maslenice u siječnju 1993. i Medačkog džepa u rujnu iste godine, pokazale su da se ravnoteža mijenja, ali su izazvale i međunarodne kritike zbog civilnih žrtava.",
      textHrC1:
        "Razdoblje između primirja 1992. i operacija 1995. u hrvatskoj se historiografiji često preskače kao 'zatišje', što je pogrešno na dva načina. Prvo, zatišje je bilo krvavo: okupacija je značila sustavno protjerivanje, a linija razdvajanja svakodnevno granatiranje. Drugo, u tim su se godinama donijele odluke koje su odredile ishod rata. Hrvatska je, unatoč embargu na uvoz oružja, izgradila vojsku sposobnu za operacije na razini zbora, dijelom uz američke vojne savjetnike; istodobno je u pregovorima vodila politiku mirne reintegracije, čime je sebi osigurala argument da je vojno rješenje bilo posljednje, a ne prvo. Međunarodna zajednica pak pokazala je granice mirovnih misija koje čuvaju status quo bez ovlasti da ga mijenjaju — lekcija koju će 1995. u Srebrenici platiti drugi. Pitanje koje ostaje otvoreno jest jesu li tri godine čekanja bile nužna cijena za međunarodnu legitimnost oslobođenja ili propušteno vrijeme.",
      textHrC2:
        'Postoje godine koje povijest bilježi rečenicama, i godine koje bilježi jednom riječju. Za one koji su ih proživjeli u Zadru, Osijeku ili Karlovcu, riječ za 1992., 1993. i 1994. bila je čekanje. Čekanje ima svoju gramatiku: govori se u nesvršenom vidu — granatiralo se, protjerivalo se, čekalo se; ništa se ne završava, sve traje. Na drugoj strani te iste linije drugi su čekali drugo, i njihovo čekanje nije bilo manje ljudsko, samo je nadu vezalo za drugi ishod. Za to je vrijeme gotovo administrativna riječ prognanik ušla u svaki hrvatski dom — kao rođak koji spava na kauču, kao razred u kojem je pola djece iz mjesta kojih više nema. Rijetko se govori o tome da je najveći teret rata nosilo društvo koje nije bilo na bojišnici, nego u čekaonici. Ono je učilo strpljenje koje mu nitko nije htio priznati kao hrabrost.',
      emoji: '⏳',
    },
    {
      year: '1995',
      title: 'Operacija Oluja — Operation Storm',
      titleHr: 'Operacija Oluja',
      text: 'On August 4-7, 1995, the Croatian Army launches Operation Storm, the largest European land military operation since World War II. In just 84 hours, Croatian forces liberate the vast majority of occupied territory. The operation is a brilliant military success and restores Croatian sovereignty over nearly all of its internationally recognized borders. Church bells ring across Croatia. People weep with joy. The homeland is finally free.',
      textHr:
        'Od 4. do 7. kolovoza 1995. Hrvatska vojska pokreće Operaciju Oluju, najveću europsku kopnenu vojnu operaciju od Drugoga svjetskog rata. Za samo 84 sata hrvatske snage oslobađaju veliku većinu okupiranog teritorija. Operacija je briljantan vojni uspjeh i vraća hrvatski suverenitet nad gotovo cijelim međunarodno priznatim državnim područjem. Crkvena zvona zvone diljem Hrvatske. Ljudi plaču od sreće. Domovina je napokon slobodna.',
      textHrA1:
        'U kolovozu 1995. Hrvatska vojska počinje Operaciju Oluju. Za četiri dana oslobođen je veliki dio zemlje. Vojnici ulaze u Knin. Crkvena zvona zvone. Domovina je slobodna.',
      textHrA2:
        'Dana 4. kolovoza 1995. Hrvatska vojska započela je Operaciju Oluju. Bila je to najveća vojna operacija u Europi nakon Drugoga svjetskog rata. Već 5. kolovoza hrvatski vojnici ušli su u Knin i podigli zastavu na tvrđavi. Za samo četiri dana oslobođena je većina okupiranog područja. Zato je 5. kolovoza danas državni praznik: Dan pobjede i domovinske zahvalnosti.',
      textHrB2:
        'Oluja je počela u ranim satima 4. kolovoza 1995. napadom oko 130 000 pripadnika Hrvatske vojske i policije na fronti dugoj više od 600 kilometara. Obrana pobunjenika, oslabljena nakon pada zapadne Slavonije u svibnju (Operacija Bljesak) i operacija hrvatskih snaga oko Grahova i Glamoča u Bosni i Hercegovini, urušila se brže nego što je itko očekivao: Knin je oslobođen već drugoga dana, 5. kolovoza, a do 7. kolovoza pod hrvatskim je nadzorom bilo gotovo cijelo dotad okupirano područje, osim Podunavlja. Operacija je ujedno prekinula opsadu Bihaća i promijenila odnos snaga u Bosni i Hercegovini, što je otvorilo put Daytonskom sporazumu iste jeseni. Uz oslobođenje, Oluja je značila i odlazak većine srpskog stanovništva s tog područja te zločine nad onima koji su ostali — događaje koji su kasnije bili predmet suđenja u Haagu, gdje su hrvatski generali 2012. pravomoćno oslobođeni optužbe za zločinački pothvat.',
      textHrC1:
        'Oluja je istodobno vojna operacija, pravni slučaj i mjesto sjećanja, i svaka od tih razina ima svoje kriterije. Vojno, riječ je o rijetko uspješnoj ofenzivi: koordinirani napad na širokoj fronti, potpuna zračna nadmoć i psihološki učinak prethodnih operacija skratili su ono što se planiralo kao višetjedna kampanja na 84 sata. Pravno, njezina je narav utvrđivana punih sedamnaest godina: haaška Raspravna komora 2011. osudila je generale Gotovinu i Markača za sudjelovanje u zločinačkom pothvatu, a Žalbeno vijeće 2012. presudu je ukinulo, odbacivši tezu o namjernom protjerivanju stanovništva, ali ne i činjenicu da su se poslije operacije dogodili zločini nad civilima i imovinom. Kao mjesto sjećanja Oluja u Hrvatskoj označava kraj rata i obnovu cjelovitosti; u Srbiji se isti datum obilježava kao dan stradanja. Ozbiljna rasprava zato mora držati sve tri razine u vidu — što je zahtjevno, ali jedino pošteno.',
      textHrC2:
        'Rijetko koji događaj toliko ovisi o riječi kojom ga nazivamo. Kaže li se oslobođenje, pripovijest je zaokružena i završava zvonima; kaže li se egzodus, počinje druga pripovijest, s traktorima na cesti. Obje su rečenice istinite i nijedna nije cijela istina, a hrvatski jezik — kao i svaki drugi — nema riječi koja bi ih sadržavala obje. Možda je to razlog što se o Oluji najlakše govori u prvom licu množine: oslobodili smo, vratili smo se, pobijedili smo. Množina grije, ali i skriva — u njoj nema mjesta za starca koji je ostao u kući u zaleđu i za ono što mu se dogodilo. Zrelost jednog društva možda se najbolje mjeri time koliko je spremno u istoj rečenici izgovoriti obje istine, a da jedna ne poništi drugu. Peti kolovoza svake godine postavlja to pitanje, i svake je godine odgovor malo drugačiji.',
      emoji: '⚡',
    },
    {
      year: '1998',
      title: 'Peaceful Reintegration',
      titleHr: 'Mirna reintegracija',
      text: 'The last occupied region — eastern Slavonia including Vukovar — is peacefully reintegrated into Croatia through the Erdut Agreement and UN transitional administration. Croatia is whole again. The Croatian flag flies over Vukovar for the first time since 1991.',
      textHr:
        'Posljednja okupirana regija — istočna Slavonija, uključujući Vukovar — mirno se reintegrira u Hrvatsku putem Erdutskog sporazuma i prijelazne uprave Ujedinjenih naroda. Hrvatska je opet cjelovita. Hrvatska zastava prvi put od 1991. ponovno se vijori nad Vukovarom.',
      textHrA1:
        'Godine 1998. Hrvatska je ponovno cijela. Istočna Slavonija i Vukovar vraćaju se u Hrvatsku bez rata. Hrvatska zastava opet je u Vukovaru. Rat je gotov.',
      textHrA2:
        'Posljednji okupirani dio Hrvatske bila je istočna Slavonija s Vukovarom. Ona nije oslobođena vojno, nego pregovorima. Godine 1995. potpisan je Erdutski sporazum, a Ujedinjeni narodi dvije su godine upravljali tim područjem. Dana 15. siječnja 1998. ono je vraćeno Hrvatskoj. Hrvatska je tako ponovno postala cjelovita država.',
      textHrB2:
        'Erdutskim sporazumom od 12. studenoga 1995., potpisanim devet dana prije Daytona, hrvatska vlada i predstavnici Srba iz Podunavlja dogovorili su da posljednje okupirano područje — Baranja, istočna Slavonija i zapadni Srijem — bude vraćeno pod hrvatsku vlast mirnim putem, pod prijelaznom upravom Ujedinjenih naroda (UNTAES). Misija koju je vodio američki general Jacques Klein trajala je dvije godine: razoružala je paravojne postrojbe, organizirala lokalne izbore, uvela hrvatske dokumente, valutu i policiju u kojoj su bili i Srbi, te jamčila ostanak stanovništva. Mandat je završio 15. siječnja 1998., točno šest godina nakon međunarodnog priznanja, i toga se dana hrvatska zastava službeno vratila u Vukovar. Bila je to jedina mirna reintegracija okupiranog područja u ratovima na prostoru bivše Jugoslavije, a posljednje su se skupine prognanika u Vukovar vraćale još godinama.',
      textHrC1:
        'Mirna reintegracija zaslužuje više pozornosti nego što je obično dobiva, jer je jedini dio hrvatskoga ratnog iskustva koji je završio dogovorom, a ne operacijom. Njezin je uspjeh imao nekoliko preduvjeta koji se rijetko ponavljaju: vojni poraz pobunjenika u kolovozu 1995. učinio je pregovore jedinom alternativom, Beograd je nakon Daytona imao interes zatvoriti pitanje, a UNTAES je, za razliku od UNPROFOR-a, dobio ovlasti da upravlja, ne samo da promatra. Posljedice su vidljive i danas: Podunavlje je jedino područje Hrvatske u kojem je znatan dio srpskog stanovništva ostao, s dvojezičnim natpisima i zajamčenom zastupljenošću u lokalnoj vlasti, ali i s dubokim podjelama koje se u Vukovaru pokazuju od škola do spomenika. Reintegracija je, drugim riječima, riješila teritorijalno pitanje, a društveno pitanje ostavila otvorenim — što je možda najviše što jedan sporazum može.',
      textHrC2:
        'Kraj rata nema svoj datum onako kako ga ima početak. Netko će reći kolovoz 1995., netko siječanj 1998., a netko će reći da rat završava tek kad posljednji prognanik odluči hoće li se vratiti ili neće. Sve su tri rečenice točne, i to je možda najvažnija lekcija ove kronologije: povijest se ne zatvara, ona se samo predaje dalje. Mirna reintegracija najtiši je događaj u ovom nizu — bez zvona, bez tenkova, s administrativnim imenom koje zvuči kao naslov iz službenog lista. A ipak, u njoj je bilo nečega što nijedna operacija ne može postići: ljudi koji su bili na suprotnim stranama pristali su živjeti u istoj ulici. To što ta ulica u Vukovaru ni danas nije lagana ne obezvređuje dogovor, nego ga čini stvarnim. Mir nije stanje u kojem nema sukoba; mir je odluka da se sukob vodi riječima. Toj se odluci, četvrt stoljeća poslije, još uvijek učimo.',
      emoji: '🕊️',
    },
  ],
  heroes: [
    {
      name: 'Franjo Tuđman',
      role: 'First President of Croatia',
      roleHr: 'Prvi predsjednik Hrvatske',
      desc: 'Father of the nation. Led Croatia from communist Yugoslavia to independence. His vision and determination guided the country through its darkest hours to sovereignty.',
      descHr:
        'Otac domovine. Doveo je Hrvatsku iz komunističke Jugoslavije do neovisnosti. Njegova vizija i odlučnost vodile su zemlju kroz njezine najteže trenutke do suverenosti.',
    },
    {
      name: 'Gojko Šušak',
      role: 'Minister of Defence',
      roleHr: 'Ministar obrane',
      desc: 'Organized the Croatian military from virtually nothing into a force capable of defending and liberating the homeland.',
      descHr:
        'Organizirao je hrvatsku vojsku doslovno iz ničega, pretvorivši je u silu sposobnu braniti i osloboditi domovinu.',
    },
    {
      name: 'Blago Zadro',
      role: '3rd Battalion Commander, 204th Vukovar Brigade',
      roleHr: 'Zapovjednik 3. bojne 204. vukovarske brigade',
      desc: "Hero of Vukovar. Led the 3rd Battalion with extraordinary courage until his death in battle. The city's broader defense was commanded by Mile Dedaković 'Jastreb'.",
      descHr:
        "Heroj Vukovara. Zapovijedao je 3. bojnom s izvanrednom hrabrošću sve do svoje pogibije u borbi. Cjelokupnom obranom grada zapovijedao je Mile Dedaković 'Jastreb'.",
    },
    {
      name: 'Branimir Glavaš',
      role: 'Defense of Osijek',
      roleHr: 'Obrana Osijeka',
      desc: 'Organized the defense of Osijek in eastern Slavonia when Croatian cities came under attack.',
      descHr:
        'Organizirao je obranu Osijeka u istočnoj Slavoniji kada su hrvatski gradovi bili napadnuti.',
    },
    {
      name: 'Ante Gotovina',
      role: 'General — Operation Storm',
      roleHr: 'General — Operacija Oluja',
      desc: 'Commanded the Split Military District. Key architect of the liberation of the Krajina region during Operation Storm.',
      descHr:
        'Zapovijedao je Splitskim vojnim okrugom. Ključni je arhitekt oslobođenja krajiškog područja tijekom Operacije Oluje.',
    },
    {
      name: 'Janko Bobetko',
      role: 'Army Chief of Staff',
      roleHr: 'Načelnik Glavnog stožera',
      desc: 'Veteran military leader who helped shape the Croatian Army into an effective fighting force.',
      descHr:
        'Iskusni vojni zapovjednik koji je pomogao oblikovati Hrvatsku vojsku u učinkovitu borbenu silu.',
    },
  ],
  keyDates: [
    [
      '25. lipnja 1991.',
      'Croatian Parliament declares independence',
      'Dan neovisnosti — Independence Day',
    ],
    ['18. studenoga 1991.', 'Fall of Vukovar', 'Dan sjećanja na žrtve Vukovara — Remembrance Day'],
    ['15. siječnja 1992.', 'International recognition of Croatia', 'Međunarodno priznanje'],
    ['1. svibnja 1995.', 'Operation Flash liberates western Slavonia', 'Operacija Bljesak'],
    ['4.-7. kolovoza 1995.', 'Operation Storm liberates the Krajina', 'Operacija Oluja'],
    [
      '8. listopada',
      'Croatia severs all constitutional ties with Yugoslavia — independence fully activated',
      'Dan neovisnosti',
    ],
    [
      '5. kolovoza',
      'Victory and Homeland Thanksgiving Day',
      'Dan pobjede i domovinske zahvalnosti',
    ],
  ],
  vocabulary: [
    ['Domovinski rat', 'Homeland War'],
    ['Sloboda', 'Freedom'],
    ['Neovisnost', 'Independence'],
    ['Branitelj', 'Defender/Veteran'],
    ['Žrtva', 'Victim/Sacrifice'],
    ['Heroj', 'Hero'],
    ['Oluja', 'Storm'],
    ['Sjećanje', 'Remembrance'],
    ['Zastava', 'Flag'],
    ['Vojska', 'Army'],
    ['Obrana', 'Defense'],
    ['Pobjeda', 'Victory'],
    ['Mir', 'Peace'],
    ['Pomirenje', 'Reconciliation'],
    ['Hrabrost', 'Courage'],
    ['Domoljublje', 'Patriotism'],
    ['Žrtve', 'Victims/Casualties'],
    ['Oslobođenje', 'Liberation'],
  ],
  quote: 'Za Dom Spremni! — For the Homeland, Ready!',
  quote2: 'Bog i Hrvati! — God and Croatians!',
};
export const KINGS = {
  title: 'Hrvatski Kraljevi \u2014 Croatian Kings',
  subtitle: 'The Sovereign Kingdom of Croatia (c. 625\u20131102)',
  intro:
    'Long before foreign powers ruled over Croatian lands, Croatia was a sovereign kingdom \u2014 one of the oldest in Europe. The Croatian people arrived in the Balkans in the early 7th century, established their own duchies, converted to Christianity, and built a powerful medieval state that lasted nearly five centuries. The Trpimirovi\u0107 dynasty produced kings who defended Croatian territory against Bulgarians, Byzantines, Hungarians, and Venetians. This is the story of the Croatian nation before anyone else claimed authority over it.',
  introHr:
    'Mnogo prije nego \u0161to su strane sile zavladale hrvatskim zemljama, Hrvatska je bila suverena kraljevina \u2014 jedna od najstarijih u Europi. Hrvati su na Balkan do\u0161li po\u010detkom 7. stolje\u0107a, osnovali vlastite kne\u017eevine, primili kr\u0161\u0107anstvo i izgradili mo\u0107nu srednjovjekovnu dr\u017eavu koja je trajala gotovo pet stolje\u0107a. Dinastija Trpimirovi\u0107a dala je kraljeve koji su branili hrvatski teritorij od Bugara, Bizantinaca, Ma\u0111ara i Mle\u010dana. Ovo je pri\u010da o hrvatskom narodu prije nego \u0161to je itko drugi polagao pravo na vlast nad njim.',
  eras: [
    {
      title: 'Arrival of the Croats (c. 625\u2013800)',
      titleHr: 'Dolazak Hrvata (oko 625. \u2013 800.)',
      emoji: '\u2693',
      text: 'The Croats (Hrvati) migrated from their original homeland in White Croatia (around present-day southern Poland and western Ukraine) to the former Roman province of Dalmatia in the early 7th century. They established themselves along the Adriatic coast and inland, organizing into tribal communities led by chieftains. The Croats were among the first Slavic peoples to convert to Christianity, with baptism beginning under Frankish influence in the late 8th century. Their territory stretched from the Adriatic Sea inland through the Dinaric Alps into the Pannonian plain.',
      textHr:
        'Hrvati su se po\u010detkom 7. stolje\u0107a doselili iz svoje prvobitne domovine, Bijele Hrvatske (na podru\u010dju dana\u0161nje ju\u017ene Poljske i zapadne Ukrajine), u nekada\u0161nju rimsku provinciju Dalmaciju. Naselili su se uzdu\u017e jadranske obale i u unutra\u0161njosti, organiziraju\u0107i se u plemenske zajednice predvo\u0111ene poglavicama. Hrvati su bili me\u0111u prvim slavenskim narodima koji su primili kr\u0161\u0107anstvo \u2014 kr\u0161tenje zapo\u010dinje pod frana\u010dkim utjecajem krajem 8. stolje\u0107a. Njihov teritorij protezao se od Jadranskog mora, preko Dinarida, sve do panonske nizine.',
    },
    {
      title: 'The Duchy Period (c. 800\u2013925)',
      titleHr: 'Razdoblje kne\u017eevine (oko 800. \u2013 925.)',
      emoji: '\ud83c\udff0',
      text: 'Croatia first appears in written records as a duchy under Frankish overlordship. Duke Borna (c. 810\u2013821) was the first historically documented Croatian ruler, governing the Dalmatian duchy. His successors \u2014 Vladislav, Mislav, and then the great Trpimir I (c. 845\u2013864) \u2014 gradually expanded Croatian power and independence. Trpimir I founded the Trpimirovi\u0107 dynasty and issued the oldest known Croatian state document, the Charter of Duke Trpimir in 852, which first mentions the Croatian name in a royal document. Duke Branimir (879\u2013892) achieved a historic milestone when Pope John VIII formally recognized him as an independent ruler, effectively confirming Croatian sovereignty from both Frankish and Byzantine overlordship. Duke Muncimir continued building the state until his son would take it to its ultimate glory.',
      textHr:
        'Hrvatska se u pisanim izvorima prvi put spominje kao kne\u017eevina pod frana\u010dkim vrhovni\u0161tvom. Knez Borna (oko 810. \u2013 821.) prvi je povijesno potvr\u0111eni hrvatski vladar, koji je upravljao dalmatinskom kne\u017eevinom. Njegovi nasljednici \u2014 Vladislav, Mislav, a potom veliki Trpimir I. (oko 845. \u2013 864.) \u2014 postupno su \u0161irili hrvatsku mo\u0107 i neovisnost. Trpimir I. utemeljio je dinastiju Trpimirovi\u0107a i izdao najstariju poznatu ispravu hrvatske dr\u017eave, Trpimirovu darovnicu iz 852. godine, koja prva u kraljevskoj ispravi spominje hrvatsko ime. Knez Branimir (879. \u2013 892.) obilje\u017eio je povijesnu prekretnicu kada ga je papa Ivan VIII. slu\u017ebeno priznao neovisnim vladarom, \u010dime je potvr\u0111ena hrvatska suverenost i prema Francima i prema Bizantu. Knez Muncimir nastavio je graditi dr\u017eavu sve dok je njegov sin ne dovede do njezine najve\u0107e slave.',
    },
    {
      title: 'The Kingdom Established (925)',
      titleHr: 'Osnutak kraljevstva (925.)',
      emoji: '\ud83d\udc51',
      text: 'In approximately 925, Tomislav of the Trpimirovi\u0107 dynasty became the first King of Croatia. He united Dalmatian Croatia and Pannonian Croatia into a single kingdom. Pope John X addressed him as Rex Chroatorum \u2014 King of the Croats \u2014 making Croatia one of the earliest recognized Christian kingdoms in Europe. Under Tomislav, Croatia became a formidable military power with an army reportedly numbering up to 100,000 infantry, 60,000 cavalry, and a fleet of 180 warships. He defeated the Bulgarian Empire in the Battle of the Bosnian Highlands in 926 and successfully defended Croatia against Hungarian invasions. The kingdom stretched from the Drava River in the north to the Adriatic in the south, covering most of modern Croatia and much of Bosnia.',
      textHr:
        'Oko 925. godine Tomislav iz dinastije Trpimirovi\u0107a postaje prvi hrvatski kralj. Ujedinio je dalmatinsku i panonsku Hrvatsku u jedinstveno kraljevstvo. Papa Ivan X. oslovljavao ga je kao Rex Chroatorum \u2014 kralja Hrvata \u2014 \u010dime je Hrvatska postala jedno od najranije priznatih kr\u0161\u0107anskih kraljevstava u Europi. Pod Tomislavom je Hrvatska postala velika vojna sila, s vojskom koja je navodno brojala do 100.000 pje\u0161aka, 60.000 konjanika i flotu od 180 ratnih brodova. Porazio je Bugarsko Carstvo u Bitki na Bosanskoj visoravni 926. godine i uspje\u0161no obranio Hrvatsku od ma\u0111arskih napada. Kraljevstvo se protezalo od rijeke Drave na sjeveru do Jadrana na jugu, obuhva\u0107aju\u0107i ve\u0107i dio dana\u0161nje Hrvatske i znatan dio Bosne.',
    },
    {
      title: 'The Golden Age (1058\u20131089)',
      titleHr: 'Zlatno doba (1058. \u2013 1089.)',
      emoji: '\u2728',
      text: 'After a period of internal dynastic struggles following Tomislav, the kingdom reached its absolute peak under two extraordinary kings. Petar Kre\u0161imir IV (1058\u20131074) consolidated the kingdom and brought the Dalmatian coastal cities under Croatian control for the first time, earning the title King of Croatia and Dalmatia. He is considered the greatest territorial expander of the Croatian kingdom. His successor, Dmitar Zvonimir (1075\u20131089), was crowned at the Church of St. Peter and Moses in Solin on October 8, 1076, with direct papal blessing from Pope Gregory VII. Zvonimir\u0027s reign was peaceful and prosperous. He strengthened ties with the Catholic Church, modernized Croatian noble titles to match Western European standards, and brought Croatia firmly into the European political mainstream. His reign is recorded on the Ba\u0161ka Tablet \u2014 one of the oldest surviving texts in the Croatian language.',
      textHr:
        'Nakon razdoblja unutarnjih dinasti\u010dkih sukoba koji su uslijedili nakon Tomislava, kraljevstvo dose\u017ee svoj apsolutni vrhunac pod dvojicom izvanrednih kraljeva. Petar Kre\u0161imir IV. (1058. \u2013 1074.) u\u010dvrstio je kraljevstvo i prvi put doveo dalmatinske obalne gradove pod hrvatsku vlast, stekav\u0161i time naslov kralja Hrvatske i Dalmacije. Smatra se najve\u0107im teritorijalnim \u0161iriteljem hrvatskoga kraljevstva. Njegov nasljednik, Dmitar Zvonimir (1075. \u2013 1089.), okrunjen je u crkvi svetog Petra i Mojsija u Solinu 8. listopada 1076. godine, uz izravan papinski blagoslov pape Grgura VII. Zvonimirova je vladavina bila mirna i napredna. U\u010dvrstio je veze s Katoli\u010dkom crkvom, modernizirao hrvatske plemi\u0107ke titule prema zapadnoeuropskim uzorima i \u010dvrsto uveo Hrvatsku u europska politi\u010dka kretanja. Njegova je vladavina zabilje\u017eena na Ba\u0161\u0107anskoj plo\u010di \u2014 jednom od najstarijih sa\u010duvanih tekstova na hrvatskom jeziku.',
    },
    {
      title: 'The End of Independence (1089\u20131102)',
      titleHr: 'Kraj neovisnosti (1089. \u2013 1102.)',
      emoji: '\ud83d\udd6f\ufe0f',
      text: 'King Zvonimir died in 1089 without a male heir. His successor, Stjepan II, was the last king of the main Trpimirovi\u0107 line. Old and frail, Stjepan II died in 1091 after less than two years on the throne. A succession crisis followed. Petar Sva\u010di\u0107, likely a former ban (viceroy) under Zvonimir, was chosen as the last native Croatian king. He fought fiercely against the Hungarian King Koloman (Coloman), who claimed the Croatian throne through Zvonimir\u0027s wife Helena (a Hungarian princess). Petar Sva\u010di\u0107 fell in battle at Gvozd Mountain in 1097 \u2014 the last Croatian king to die defending Croatian independence. By 1102, the Croatian nobles entered into the Pacta Conventa with King Koloman, creating a personal union between Croatia and Hungary. Croatia kept its own parliament (Sabor), its own ban (viceroy), and its own laws, but would not have its own king again until the dream of independence was finally realized in the 20th century.',
      textHr:
        'Kralj Zvonimir umro je 1089. bez mu\u0161kog nasljednika. Njegov nasljednik, Stjepan II., bio je posljednji kralj glavne loze Trpimirovi\u0107a. Star i iznemogao, Stjepan II. umro je 1091., nakon manje od dvije godine na prijestolju. Uslijedila je nasljedna kriza. Petar Sva\u010di\u0107, vjerojatno biv\u0161i ban pod Zvonimirom, izabran je za posljednjeg doma\u0107eg hrvatskog kralja. \u017destoko se borio protiv ma\u0111arskoga kralja Kolomana, koji je pravo na hrvatsko prijestolje polagao preko Zvonimirove supruge Jelene (ma\u0111arske princeze). Petar Sva\u010di\u0107 poginuo je u bici na Gvozdu 1097. godine \u2014 posljednji hrvatski kralj koji je poginuo brane\u0107i hrvatsku neovisnost. Do 1102. godine hrvatsko je plemstvo sklopilo Pacta conventa s kraljem Kolomanom, \u010dime je uspostavljena personalna unija izme\u0111u Hrvatske i Ugarske. Hrvatska je zadr\u017eala vlastiti sabor, vlastitog bana i vlastite zakone, no vlastitoga kralja ne\u0107e imati sve do 20. stolje\u0107a, kada je san o neovisnosti napokon ostvaren.',
    },
  ],
  dukes: [
    {
      name: 'Borna',
      years: 'c. 810\u2013821',
      title: 'Knez (Duke)',
      desc: 'First historically documented Croatian ruler. Governed Dalmatian Croatia under Frankish overlordship. Fought against Ljudevit Posavski of Pannonian Croatia.',
      descHr:
        'Prvi povijesno potvr\u0111eni hrvatski vladar. Upravljao je dalmatinskom Hrvatskom pod frana\u010dkim vrhovni\u0161tvom. Ratovao je protiv Ljudevita Posavskog, vladara panonske Hrvatske.',
    },
    {
      name: 'Vladislav',
      years: 'c. 821\u2013835',
      title: 'Knez',
      desc: 'Borna\u0027s nephew and successor. Defeated Ljudevit and briefly united the Dalmatian and Pannonian duchies.',
      descHr:
        'Bornin ne\u0107ak i nasljednik. Porazio je Ljudevita i nakratko ujedinio dalmatinsku i panonsku kne\u017eevinu.',
    },
    {
      name: 'Mislav',
      years: 'c. 835\u2013845',
      title: 'Knez',
      desc: 'Signed a peace treaty with Venice in 839, one of the earliest Croatian diplomatic agreements. Expanded the duchy\u0027s power.',
      descHr:
        'Sklopio je mirovni ugovor s Mle\u010danima 839. godine, jedan od najranijih hrvatskih diplomatskih sporazuma. Pro\u0161irio je mo\u0107 kne\u017eevine.',
    },
    {
      name: 'Trpimir I',
      years: 'c. 845\u2013864',
      title: 'Knez',
      desc: 'Founder of the Trpimirovi\u0107 dynasty. Issued the Charter of 852 \u2014 the oldest document using the Croatian name. Defeated the Bulgarian army. Built churches and monasteries. Father of the Croatian royal line.',
      descHr:
        'Utemeljitelj dinastije Trpimirovi\u0107a. Izdao je Darovnicu iz 852. godine \u2014 najstariju ispravu u kojoj se spominje hrvatsko ime. Porazio je bugarsku vojsku. Gradio je crkve i samostane. Otac hrvatske kraljevske loze.',
    },
    {
      name: 'Domagoj',
      years: 'c. 864\u2013876',
      title: 'Knez',
      desc: 'Of the rival Domagojevi\u0107 dynasty. Known as the \u0027Worst Duke of the Slavs\u0027 by Italian chroniclers for his aggressive naval campaigns against Venetian shipping. A fierce defender of Croatian independence.',
      descHr:
        'Iz suparni\u010dke dinastije Domagojevi\u0107a. Talijanski su ga kroni\u010dari nazivali \u0027najgorim knezom Slavena\u0027 zbog njegovih agresivnih pomorskih pohoda protiv mleta\u010dkog brodovlja. \u017destoki branitelj hrvatske neovisnosti.',
    },
    {
      name: 'Branimir',
      years: 'c. 879\u2013892',
      title: 'Knez',
      desc: 'Achieved papal recognition of Croatian independence from Pope John VIII in 879. This letter is considered one of the most important documents in Croatian history \u2014 international recognition of Croatian sovereignty.',
      descHr:
        'Ishodio je papinsko priznanje hrvatske neovisnosti od pape Ivana VIII. 879. godine. To se pismo smatra jednim od najva\u017enijih dokumenata hrvatske povijesti \u2014 me\u0111unarodnim priznanjem hrvatskog suvereniteta.',
    },
    {
      name: 'Muncimir',
      years: 'c. 892\u2013910',
      title: 'Knez',
      desc: 'Father of Tomislav. Continued building Croatian institutions and military power, preparing the ground for the kingdom.',
      descHr:
        'Otac Tomislava. Nastavio je izgradnju hrvatskih institucija i vojne mo\u0107i, pripremaju\u0107i teren za kraljevstvo.',
    },
  ],
  kings: [
    {
      name: 'Tomislav',
      years: 'c. 910\u2013928',
      title: 'Prvi Hrvatski Kralj \u2014 First Croatian King',
      desc: 'United Dalmatian and Pannonian Croatia. Pope John X called him Rex Chroatorum (King of the Croats) in 925. Defeated the Bulgarians at the Battle of the Bosnian Highlands (926). Built a powerful military with reportedly 100,000 infantry and 180 warships. Defended Croatia against Hungarian invasions. His coronation marks the founding of the Croatian Kingdom.',
      descHr:
        'Ujedinio je dalmatinsku i panonsku Hrvatsku. Papa Ivan X. nazvao ga je 925. godine Rex Chroatorum (kralj Hrvata). Porazio je Bugare u Bitki na Bosanskoj visoravni (926.). Izgradio je mo\u0107nu vojsku koja je navodno brojala 100.000 pje\u0161aka i 180 ratnih brodova. Branio je Hrvatsku od ma\u0111arskih navala. Njegovo krunjenje ozna\u010dava utemeljenje Hrvatskog Kraljevstva.',
      emoji: '\ud83d\udc51',
      color: '#b45309',
    },
    {
      name: 'Trpimir II',
      years: 'c. 928\u2013935',
      title: 'Kralj',
      desc: 'Brother or son of Tomislav. Maintained the kingdom during a period of relative stability after Tomislav\u0027s military victories.',
      descHr:
        'Tomislavov brat ili sin. Odr\u017eao je kraljevstvo tijekom razdoblja relativne stabilnosti nakon Tomislavovih vojnih pobjeda.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Kre\u0161imir I',
      years: 'c. 935\u2013945',
      title: 'Kralj',
      desc: 'Continued Trpimirovi\u0107 rule. His reign saw the continuation of Croatian sovereignty and territorial integrity.',
      descHr:
        'Nastavio je vladavinu Trpimirovi\u0107a. Za njegove vladavine nastavlja se hrvatski suverenitet i teritorijalna cjelovitost.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Miroslav',
      years: 'c. 945\u2013949',
      title: 'Kralj',
      desc: 'His short reign ended when he was killed by Ban Pribina during a period of internal power struggles.',
      descHr:
        'Njegova kratka vladavina okon\u010dana je kada ga je ubio ban Pribina tijekom razdoblja unutarnjih sukoba za vlast.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Mihajlo Kre\u0161imir II',
      years: 'c. 949\u2013969',
      title: 'Kralj',
      desc: 'Restored stability after the dynastic crisis. Married Jelena (Helen of Zadar), who became one of the most celebrated queens in Croatian history. Together they built churches and strengthened the kingdom.',
      descHr:
        'Obnovio je stabilnost nakon dinasti\u010dke krize. O\u017eenio se Jelenom (Jelenom Zadarskom), koja je postala jedna od najslavnijih kraljica u hrvatskoj povijesti. Zajedno su gradili crkve i ja\u010dali kraljevstvo.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Stjepan Dr\u017eislav',
      years: 'c. 969\u2013997',
      title: 'Kralj',
      desc: 'Received royal insignia from the Byzantine Emperor, confirming Croatian royal authority. First Croatian king to use the title \u0027King of Croatia and Dalmatia.\u0027 Extended Croatian control over the Dalmatian cities.',
      descHr:
        'Primio je kraljevske insignije od bizantskog cara, \u010dime je potvr\u0111ena hrvatska kraljevska vlast. Prvi je hrvatski kralj koji je koristio naslov \u0027kralj Hrvatske i Dalmacije\u0027. Pro\u0161irio je hrvatsku vlast nad dalmatinskim gradovima.',
      emoji: '\ud83d\udc51',
      color: '#7c3aed',
    },
    {
      name: 'Svetoslav Suronja',
      years: 'c. 997\u20131000',
      title: 'Kralj',
      desc: 'Eldest son of Dr\u017eislav. Overthrown by his brothers with Venetian help. Venice under Doge Pietro II Orseolo used this instability to seize Dalmatian cities.',
      descHr:
        'Najstariji Dr\u017eislavov sin. Svrgnula su ga vlastita bra\u0107a uz mleta\u010dku pomo\u0107. Mle\u010dani su pod du\u017edem Petrom II. Orseolom iskoristili tu nestabilnost kako bi zauzeli dalmatinske gradove.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Kre\u0161imir III',
      years: 'c. 1000\u20131030',
      title: 'Kralj',
      desc: 'Fought to restore Croatian control over Dalmatia after Venetian expansion. Shared power with his brother Gojslav.',
      descHr:
        'Borio se za obnovu hrvatske vlasti nad Dalmacijom nakon mleta\u010dke ekspanzije. Vlast je dijelio sa svojim bratom Gojslavom.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Stjepan I',
      years: 'c. 1030\u20131058',
      title: 'Kralj',
      desc: 'Long reign during which he maintained the kingdom\u0027s borders and resisted both Byzantine and Venetian pressure on Dalmatia.',
      descHr:
        'Duga vladavina tijekom koje je o\u010duvao granice kraljevstva i odolijevao i bizantskom i mleta\u010dkom pritisku na Dalmaciju.',
      emoji: '\ud83d\udc51',
      color: '#0e7490',
    },
    {
      name: 'Petar Kre\u0161imir IV',
      years: '1058\u20131074',
      title: 'Kralj \u2014 The Great',
      desc: 'The greatest territorial expander. Brought all Dalmatian cities under Croatian rule for the first time. Used the title \u0027King of Croatia and Dalmatia.\u0027 Under his reign the kingdom reached its maximum territorial extent. Considered one of the most important Croatian monarchs.',
      descHr:
        'Najve\u0107i teritorijalni \u0161iritelj. Prvi je put sve dalmatinske gradove doveo pod hrvatsku vlast. Koristio je naslov \u0027kralj Hrvatske i Dalmacije\u0027. Za njegove vladavine kraljevstvo je doseglo svoj najve\u0107i teritorijalni opseg. Smatra se jednim od najva\u017enijih hrvatskih vladara.',
      emoji: '\ud83d\udc51',
      color: '#b45309',
    },
    {
      name: 'Dmitar Zvonimir',
      years: '1075\u20131089',
      title: 'Kralj \u2014 The Blessed',
      desc: 'Crowned at Solin by papal legate on October 8, 1076. His oath of loyalty is preserved as a key historical document. Reign was peaceful and prosperous. Strengthened ties with the Catholic Church. Recorded on the Ba\u0161ka Tablet \u2014 one of the oldest Croatian language texts. Married Jelena (Helena), Hungarian princess. Died 1089 without male heir.',
      descHr:
        'Okrunjen u Solinu rukom papinskog legata 8. listopada 1076. godine. Njegova zakletva vjernosti sa\u010duvana je kao klju\u010dni povijesni dokument. Vladavina mu je bila mirna i napredna. U\u010dvrstio je veze s Katoli\u010dkom crkvom. Zabilje\u017een na Ba\u0161\u0107anskoj plo\u010di \u2014 jednom od najstarijih tekstova na hrvatskom jeziku. O\u017eenio se Jelenom, ma\u0111arskom princezom. Umro je 1089. bez mu\u0161kog nasljednika.',
      emoji: '\ud83d\udc51',
      color: '#b45309',
    },
    {
      name: 'Stjepan II',
      years: '1089\u20131091',
      title: 'Zadnji Trpimirovi\u0107 \u2014 Last of the Line',
      desc: 'Last king from the direct Trpimirovi\u0107 dynasty. Elderly and in poor health, he ruled less than two years. His death without an heir triggered the succession crisis that would end Croatian independence.',
      descHr:
        'Posljednji kralj izravne loze Trpimirovi\u0107a. Star i slaba zdravlja, vladao je manje od dvije godine. Njegova smrt bez nasljednika pokrenula je nasljednu krizu koja \u0107e okon\u010dati hrvatsku neovisnost.',
      emoji: '\ud83d\udc51',
      color: '#dc2626',
    },
    {
      name: 'Petar Sva\u010di\u0107',
      years: '1093\u20131097',
      title: 'Posljednji Hrvatski Kralj \u2014 Last Croatian King',
      desc: 'Elected by Croatian nobles as the last native king. Fought heroically against Hungarian King Koloman who claimed the Croatian throne. Fell in battle at Gvozd Mountain (Petrova Gora) in 1097. His death marks the end of sovereign Croatian rule. The mountain where he fell was later renamed Petrova Gora (\u0027Peter\u0027s Mountain\u0027) in his honor. A true martyr of Croatian independence.',
      descHr:
        'Izabralo ga je hrvatsko plemstvo za posljednjeg doma\u0107eg kralja. Herojski se borio protiv ma\u0111arskog kralja Kolomana, koji je polagao pravo na hrvatsko prijestolje. Poginuo je u bici na Gvozdu (Petrova gora) 1097. godine. Njegova smrt ozna\u010dava kraj suverene hrvatske vlasti. Planina na kojoj je poginuo poslije je u njegovu \u010dast preimenovana u Petrovu goru. Pravi mu\u010denik hrvatske neovisnosti.',
      emoji: '\u2694\ufe0f',
      color: '#dc2626',
    },
  ],
  keyFacts: [
    ['852', 'Charter of Duke Trpimir \u2014 first document using the Croatian name'],
    ['879', 'Pope recognizes Croatian independence under Duke Branimir'],
    ['925', 'Tomislav crowned first King of Croatia'],
    ['926', 'Croats defeat Bulgarian Empire at Battle of Bosnian Highlands'],
    ['1076', 'Zvonimir crowned at Solin with papal blessing'],
    ['1091', 'Death of Stjepan II \u2014 end of Trpimirovi\u0107 dynasty'],
    ['1097', 'Petar Sva\u010di\u0107 falls at Gvozd Mountain'],
    ['1102', 'Pacta Conventa \u2014 Croatia enters union with Hungary'],
  ],
  royalCities: [
    {
      name: 'Nin',
      desc: 'Earliest Croatian royal seat. Bishop Gregory of Nin championed Croatian language in church services.',
      descHr:
        'Najstarije hrvatsko kraljevsko sjedi\u0161te. Biskup Grgur Ninski zalagao se za hrvatski jezik u crkvenim obredima.',
    },
    {
      name: 'Biograd na Moru',
      desc: 'Royal city and coronation site. Destroyed by Venice in 1125.',
      descHr: 'Kraljevski grad i mjesto krunidbe. Razorili su ga Mle\u010dani 1125. godine.',
    },
    {
      name: 'Knin',
      desc: 'Mountain fortress and royal seat. Strategic heart of the Croatian kingdom.',
      descHr:
        'Planinska utvrda i kraljevsko sjedi\u0161te. Strate\u0161ko srce hrvatskog kraljevstva.',
    },
    {
      name: 'Solin',
      desc: 'Ancient Salona. Site of Zvonimir\u0027s coronation in 1076. Heart of Croatian Christianity.',
      descHr:
        'Anti\u010dka Salona. Mjesto Zvonimirove krunidbe 1076. godine. Srce hrvatskog kr\u0161\u0107anstva.',
    },
    {
      name: '\u0160ibenik',
      desc: 'First city on the Adriatic founded by Croats (not Romans or Greeks).',
      descHr: 'Prvi grad na Jadranu koji su osnovali Hrvati (a ne Rimljani ili Grci).',
    },
  ],
  vocabulary: [
    ['kralj', 'king'],
    ['kraljica', 'queen'],
    ['kraljevstvo', 'kingdom'],
    ['kruna', 'crown'],
    ['knez', 'duke/prince'],
    ['ban', 'viceroy'],
    ['pleme', 'tribe'],
    ['sabor', 'parliament'],
    ['\u017eupanija', 'county'],
    ['vojska', 'army'],
    ['bitka', 'battle'],
    ['pobjeda', 'victory'],
    ['mir', 'peace'],
    ['ugovor', 'treaty'],
    ['nezavisnost', 'independence'],
    ['kr\u0161\u0107anstvo', 'Christianity'],
    ['crkva', 'church'],
    ['papa', 'pope'],
    ['vjera', 'faith'],
    ['narod', 'people/nation'],
    ['zemlja', 'land/country'],
    ['granica', 'border'],
    ['obrana', 'defense'],
    ['suverenost', 'sovereignty'],
  ],
  quote:
    'Hrvatska je imala svoje kraljeve dok su mnogi europski narodi jo\u0161 \u017eivjeli u plemenima.',
  quoteEn: 'Croatia had its own kings while many European peoples still lived in tribes.',
};
export const HIST_FACTS = [
  {
    hr: 'Hrvatska je imala prvog kralja 925. — Tomislava.',
    en: 'Croatia had its first king in 925 — Tomislav.',
  },
  {
    hr: 'Kravata potječe iz Hrvatske — vojnici su je nosili u 17. st.',
    en: 'The necktie originated in Croatia — soldiers wore them in the 17th century.',
  },
  {
    hr: 'Dubrovnik je bio neovisna republika više od 450 godina.',
    en: 'Dubrovnik was an independent republic for over 450 years.',
  },
  {
    hr: 'Nikola Tesla je rođen u Smiljanu, Hrvatska, 1856.',
    en: 'Nikola Tesla was born in Smiljan, Croatia, in 1856.',
  },
  {
    hr: 'Vučedolska kultura proizvela je najstariji europski kalendar.',
    en: 'The Vučedol culture produced the oldest European calendar.',
  },
  {
    hr: 'Vinkovci su najstarije kontinuirano naselje u Europi — 8.300 godina.',
    en: "Vinkovci is Europe's oldest continuously inhabited settlement — 8,300 years.",
  },
  {
    hr: 'Marco Polo je prema predaji rođen na Korčuli.',
    en: 'Marco Polo was traditionally believed born on Korčula.',
  },
  { hr: 'Hrvatska ima više od 1.000 otoka.', en: 'Croatia has over 1,000 islands.' },
  {
    hr: 'Dioklecijanova palača u Splitu sagrađena je oko 305. godine.',
    en: "Diocletian's Palace in Split was built around 305 AD.",
  },
  {
    hr: 'Labinska Republika 1921. smatra se prvim antifašističkim ustankom u Europi.',
    en: "The Labin Republic of 1921 is Europe's first anti-fascist uprising.",
  },
  {
    hr: 'Glagoljica je najstarije slavensko pismo.',
    en: 'Glagolitic is the oldest Slavic script.',
  },
  { hr: 'Plitvice su UNESCO od 1979.', en: 'Plitvice became UNESCO World Heritage in 1979.' },
  {
    hr: 'Hrvatska je osvojila 2. mjesto na SP 2018. u Rusiji.',
    en: 'Croatia won 2nd place at the 2018 World Cup in Russia.',
  },
  {
    hr: 'Carevi Valentinijan I. i Valens rođeni su u Vinkovcima.',
    en: 'Emperors Valentinian I and Valens were born in Vinkovci.',
  },
  {
    hr: 'Josip Belušić iz Labina izumio je brzinomjer 1888.',
    en: 'Josip Belušić from Labin invented the speedometer in 1888.',
  },
  {
    hr: 'Hrvatska je proglasila neovisnost 25. lipnja 1991.',
    en: 'Croatia declared independence on June 25, 1991.',
  },
  { hr: 'Zadar je star više od 3.000 godina.', en: 'Zadar is over 3,000 years old.' },
  {
    hr: 'Oluja 1995. bila je najveća kopnena operacija u Europi od WWII.',
    en: "Operation Storm 1995 was Europe's largest land operation since WWII.",
  },
  {
    hr: 'Lavoslav Ružička iz Vukovara dobio je Nobelovu nagradu 1939.',
    en: 'Lavoslav Ružička from Vukovar won the Nobel Prize in 1939.',
  },
  { hr: 'Hrvatska koristi euro od 2023.', en: 'Croatia adopted the euro in 2023.' },
  {
    hr: 'Stari Most u Mostaru srušen je 1993., obnovljen 2004.',
    en: 'The Old Bridge in Mostar was destroyed 1993, rebuilt 2004.',
  },
  {
    hr: 'U obrani Vukovara, 1.800 branitelja suprotstavilo se 36.000 vojnika.',
    en: "In Vukovar's defense, 1,800 defenders faced 36,000 soldiers.",
  },
  {
    hr: 'Hrvati žive u BiH od 7. stoljeća.',
    en: 'Croats have lived in BiH since the 7th century.',
  },
  {
    hr: 'Hitchcock je rekao da Zadar ima najljepši zalazak sunca.',
    en: 'Hitchcock said Zadar has the most beautiful sunset.',
  },
  {
    hr: 'Kralj Petar Krešimir IV. darovao je Bibinje 1066.',
    en: 'King Petar Krešimir IV granted Bibinje in 1066.',
  },
  {
    hr: 'Toni Kukoč osvojio je tri NBA naslova s Bullsima.',
    en: 'Toni Kukoč won three NBA titles with the Bulls.',
  },
  {
    hr: 'Franjevci su čuvali hrvatski identitet u Hercegovini 400 godina.',
    en: 'Franciscans preserved Croatian identity in Herzegovina for 400 years.',
  },
  {
    hr: 'Dražen Petrović poginuo je 1993. u 28. godini.',
    en: 'Dražen Petrović died in 1993 at age 28.',
  },
  {
    hr: 'Vučedolska golubica je najstariji prikaz golubice u Europi.',
    en: "The Vučedol Dove is Europe's oldest dove depiction.",
  },
  {
    hr: 'Hrvatska ima 5.835 km obale s otocima.',
    en: 'Croatia has 5,835 km of coastline with islands.',
  },
  {
    hr: 'Pulska Arena je 6. najveći rimski amfiteatar na svijetu.',
    en: 'Pula Arena is the 6th largest Roman amphitheatre in the world.',
  },
  {
    hr: 'Ban Jelačić ukinuo je kmetstvo u Hrvatskoj 1848.',
    en: 'Ban Jelačić abolished serfdom in Croatia in 1848.',
  },
  {
    hr: 'Sveti Vlaho je zaštitnik Dubrovnika od 972. godine.',
    en: "Saint Blaise has been Dubrovnik's patron since 972.",
  },
  {
    hr: 'Faust Vrančić izumio je padobran 1617.',
    en: 'Faust Vrančić invented the parachute in 1617.',
  },
  {
    hr: 'Dubrovnik je imao jednu od prvih karantena na svijetu.',
    en: "Dubrovnik had one of the world's first quarantines.",
  },
  {
    hr: 'Šibenik je jedini grad s dvije UNESCO katedrale.',
    en: 'Šibenik is the only city with two UNESCO cathedrals.',
  },
  {
    hr: 'Splitski Peristil datira iz 4. stoljeća.',
    en: "Split's Peristyle dates from the 4th century.",
  },
  {
    hr: 'Ivan Meštrović je jedan od najpoznatijih svjetskih kipara.',
    en: "Ivan Meštrović is one of the world's most famous sculptors.",
  },
  {
    hr: 'Bračko kamenje korišteno je za Bijelu kuću u Washingtonu.',
    en: 'Stone from Brač was used for the White House in Washington.',
  },
  {
    hr: 'Pašk sir je jedan od najboljih sireva na svijetu.',
    en: 'Pag cheese is one of the best cheeses in the world.',
  },
  { hr: 'Hrvatska ima osam nacionalnih parkova.', en: 'Croatia has eight national parks.' },
  {
    hr: 'Sveučilište u Zadru osnovano je 1396. — najstarije u Hrvatskoj.',
    en: "University of Zadar was founded in 1396 — Croatia's oldest.",
  },
  {
    hr: 'Modri špilj na Biševu je jedno od najljepših prirodnih čuda.',
    en: 'The Blue Cave on Biševo is one of the most beautiful natural wonders.',
  },
  {
    hr: "Ivan Gundulić napisao je 'Osman', remek-djelo hrvatske književnosti.",
    en: "Ivan Gundulić wrote 'Osman', a masterpiece of Croatian literature.",
  },
  {
    hr: 'Ruđer Bošković bio je jedan od najvećih znanstvenika 18. stoljeća.',
    en: 'Ruđer Bošković was one of the greatest scientists of the 18th century.',
  },
  {
    hr: 'Korčula ima jednu od najstarijih gradskih uprava u Europi (1214).',
    en: "Korčula has one of Europe's oldest city statutes (1214).",
  },
  {
    hr: 'Slavonski hrast koristio se za gradnju europskih katedrala.',
    en: 'Slavonian oak was used to build European cathedrals.',
  },
  {
    hr: 'Hvar ima najviše sunčanih sati u Hrvatskoj — 2.726 godišnje.',
    en: 'Hvar has the most sunshine hours in Croatia — 2,726/year.',
  },
  {
    hr: 'Trakošćan je najposjećeniji dvorac u Hrvatskoj.',
    en: 'Trakošćan is the most visited castle in Croatia.',
  },
  {
    hr: 'Maraska — liker od višanja iz Zadra — proizvodi se od 1700-ih.',
    en: 'Maraska — cherry liqueur from Zadar — has been made since the 1700s.',
  },
  {
    hr: 'Nin je najstariji hrvatski kraljevski grad.',
    en: 'Nin is the oldest Croatian royal city.',
  },
  {
    hr: 'Katedrala sv. Jakova u Šibeniku građena je 105 godina.',
    en: 'St. James Cathedral in Šibenik took 105 years to build.',
  },
  {
    hr: 'Matija Vlačić Ilirik iz Labina bio je blizak suradnik Martina Luthera.',
    en: 'Matthias Flacius from Labin was a close associate of Martin Luther.',
  },
  {
    hr: 'Vukovarski vodotoranj je simbol otpora i slobode.',
    en: 'The Vukovar water tower is a symbol of resistance and freedom.',
  },
  {
    hr: 'Mljet je otok na kojem je, prema legendi, Odisej proveo 7 godina.',
    en: 'Mljet is the island where Odysseus allegedly spent 7 years.',
  },
  {
    hr: 'Dubrovačke ljetne igre održavaju se od 1950.',
    en: 'Dubrovnik Summer Festival has been held since 1950.',
  },
  {
    hr: 'Đakovački lipicanci poznati su u cijelom svijetu.',
    en: "Đakovo's Lipizzan horses are world-famous.",
  },
  {
    hr: 'Tvrtka Rimac Automobili proizvodi najbrže električne aute na svijetu.',
    en: "Rimac Automobili makes the world's fastest electric cars.",
  },
  {
    hr: 'Luka Modrić osvojio je Zlatnu loptu 2018.',
    en: "Luka Modrić won the Ballon d'Or in 2018.",
  },
  {
    hr: 'Gorski kotar je najšumovitija regija Hrvatske.',
    en: "Gorski Kotar is Croatia's most forested region.",
  },
  {
    hr: 'Sinjska alka je UNESCO zaštićena vitežka igra od 1715.',
    en: "Sinjska Alka is a UNESCO-protected knights' game since 1715.",
  },
  {
    hr: 'Dalmacija ima više od 300 sunčanih dana godišnje.',
    en: 'Dalmatia has over 300 sunny days per year.',
  },
  {
    hr: 'Varaždin je bio glavni grad Hrvatske 1756-1776.',
    en: "Varaždin was Croatia's capital 1756-1776.",
  },
  {
    hr: 'Hrvati koriste tri pisma: latinicu, glagoljicu i ćirilicu.',
    en: 'Croats have used three scripts: Latin, Glagolitic, and Cyrillic.',
  },
  { hr: 'Rabac se zove Biser Kvarnera.', en: 'Rabac is called the Pearl of Kvarner.' },
  {
    hr: 'Ilirski pokret u 19. st. ujedinio je Južne Slavene oko hrvatskog jezika.',
    en: 'The Illyrian Movement in the 19th c. united South Slavs around Croatian language.',
  },
  {
    hr: 'Kopački rit je jedan od najvećih močvarnih krajolika u Europi.',
    en: "Kopački Rit is one of Europe's largest wetland landscapes.",
  },
  {
    hr: 'Andrija Mohorovičić otkrio je granicu Zemljine kore — Moho sloj.',
    en: "Andrija Mohorovičić discovered the Earth's crust boundary — the Moho layer.",
  },
  { hr: 'Hrvatsko Zagorje ima više od 50 dvoraca.', en: 'Hrvatsko Zagorje has over 50 castles.' },
  {
    hr: 'Pelješki most, otvoren 2022., povezuje južnu Dalmaciju.',
    en: 'The Pelješac Bridge, opened 2022, connects southern Dalmatia.',
  },
  {
    hr: 'Split je drugi najveći grad u Hrvatskoj s oko 180.000 stanovnika.',
    en: "Split is Croatia's 2nd largest city with about 180,000 people.",
  },
  {
    hr: 'Pag je poznat po čipki koja je na UNESCO-voj listi.',
    en: 'Pag is known for its lace, which is UNESCO-listed.',
  },
  {
    hr: 'Istarski pršut i tartufi poznati su u cijelom svijetu.',
    en: 'Istrian prosciutto and truffles are world-famous.',
  },
  {
    hr: 'Šokačke tradicije u Slavoniji žive kroz Vinkovačke jeseni.',
    en: 'Šokci traditions in Slavonia live through the Vinkovci Autumn festival.',
  },
  {
    hr: 'Ema Derossi-Bjelajac iz Labina bila je prva žena na čelu Hrvatske.',
    en: 'Ema Derossi-Bjelajac from Labin was the first woman to lead Croatia.',
  },
  {
    hr: 'Stončanski zidovi su drugi najduži obrambeni zidovi u Europi.',
    en: 'The Ston Walls are the second longest defensive walls in Europe.',
  },
  {
    hr: 'Neretva je jedina delta u Hrvatskoj i raj za ptice.',
    en: "Neretva has Croatia's only river delta and is a bird paradise.",
  },
  {
    hr: "Ivana Brlić-Mažuranić je hrvatska 'Andersen' — spisateljica bajki.",
    en: "Ivana Brlić-Mažuranić is Croatia's 'Andersen' — a fairy tale writer.",
  },
  {
    hr: 'Vatreni su osvojili brončanu medalju na SP 2022. u Kataru.',
    en: 'The Vatreni won bronze at the 2022 World Cup in Qatar.',
  },
  {
    hr: 'Rijeka je bila Europska prijestolnica kulture 2020.',
    en: 'Rijeka was European Capital of Culture in 2020.',
  },
  {
    hr: 'Špancirfest u Varaždinu je jedan od najvećih festivala u Hrvatskoj.',
    en: "Špancirfest in Varaždin is one of Croatia's biggest festivals.",
  },
  {
    hr: 'Nikola Šubić Zrinski branio je Siget 1566. do smrti.',
    en: 'Nikola Šubić Zrinski defended Siget in 1566 until death.',
  },
  {
    hr: 'Trg bana Jelačića u Zagrebu je najpoznatiji hrvatski trg.',
    en: "Ban Jelačić Square in Zagreb is Croatia's most famous square.",
  },
  {
    hr: 'Vukovar je imao oko 45.000 stanovnika prije rata.',
    en: 'Vukovar had about 45,000 residents before the war.',
  },
  {
    hr: 'Ovčara je mjesto jednog od najtežih zločina u Domovinskom ratu.',
    en: 'Ovčara is the site of one of the worst crimes of the Homeland War.',
  },
  { hr: 'Hrvatska je pristupila EU 1. srpnja 2013.', en: 'Croatia joined the EU on July 1, 2013.' },
  {
    hr: "'Lijepa naša domovino' je hrvatska himna od 1891.",
    en: "'Lijepa naša domovino' has been Croatia's anthem since 1891.",
  },
  {
    hr: 'Škabrnja je pretrpjela masovni zločin 18. studenoga 1991.',
    en: 'Škabrnja suffered a mass atrocity on November 18, 1991.',
  },
  {
    hr: 'Knin je oslobođen 5. kolovoza 1995. u Oluji.',
    en: 'Knin was liberated on August 5, 1995 during Operation Storm.',
  },
  {
    hr: 'Ivica Zubac je trenutno jedini Hrvat koji igra u NBA.',
    en: 'Ivica Zubac is currently the only Croatian playing in the NBA.',
  },
  {
    hr: 'Jadransko more ima prosječnu dubinu od 252 metra.',
    en: 'The Adriatic Sea has an average depth of 252 meters.',
  },
  { hr: 'Zagreb je prvi put spomenut 1094. godine.', en: 'Zagreb was first mentioned in 1094.' },
  {
    hr: 'Hrvatsko narodno kazalište osnovano je 1895.',
    en: 'Croatian National Theatre was founded in 1895.',
  },
  {
    hr: 'Brijuni su bili rezidencija Josipa Broza Tita.',
    en: 'Brijuni were the residence of Josip Broz Tito.',
  },
  {
    hr: 'Roko Ukić igrao je za Cibonu, Split i Toronto Raptorse.',
    en: 'Roko Ukić played for Cibona, Split and the Toronto Raptors.',
  },
  {
    hr: 'Dino Rađa igrao je za Boston Celticse od 1993. do 1997.',
    en: 'Dino Rađa played for the Boston Celtics from 1993 to 1997.',
  },
  {
    hr: 'Bojan Bogdanović je jedan od najboljih hrvatskih strijelaca u NBA.',
    en: 'Bojan Bogdanović is one of the best Croatian shooters in NBA history.',
  },
  {
    hr: 'Dalmatinski pas je pasmina koja potječe iz Dalmacije.',
    en: 'The Dalmatian dog breed originates from Dalmatia.',
  },
  {
    hr: 'Zagrebačka katedrala je najviša građevina u Hrvatskoj.',
    en: 'Zagreb Cathedral is the tallest building in Croatia.',
  },
  {
    hr: 'Biokovo Skywalk otvoren je 2020. na visini od 1.228 metara.',
    en: 'Biokovo Skywalk opened in 2020 at 1,228 meters altitude.',
  },
  {
    hr: 'Morske orgulje u Zadru sviraju uz pomoć valova.',
    en: 'The Sea Organ in Zadar plays music using waves.',
  },
  {
    hr: 'Hrvatsko vino Plavac Mali je jedno od najcjenjenijih crvenih vina.',
    en: 'Croatian Plavac Mali is one of the most prized red wines.',
  },
  {
    hr: 'Krk je bio najvažniji glagoljaški centar.',
    en: 'Krk was the most important center of Glagolitic culture.',
  },
  {
    hr: 'Baškanska ploča (oko 1100.) najstariji je hrvatski tekst.',
    en: 'The Baška Tablet (c. 1100) is the oldest Croatian text.',
  },
  {
    hr: 'Herman Potočnik Noordung iz HR je osmislio svemirsku stanicu 1929.',
    en: 'Herman Potočnik Noordung from HR designed a space station in 1929.',
  },
  {
    hr: 'Pozdrav Suncu u Zadru napravljen je od 300 staklenih ploča.',
    en: "Zadar's Sun Salutation is made of 300 glass panels.",
  },
  {
    hr: 'Vukovarska kolona sjećanja okuplja više od 100.000 ljudi svake godine.',
    en: "Vukovar's Memory Column draws over 100,000 people yearly.",
  },
  {
    hr: 'Ante Starčević poznat je kao Otac domovine.',
    en: 'Ante Starčević is known as the Father of the Homeland.',
  },
  {
    hr: 'Labinski rudari 1921. organizirali su samoupravu 37 dana.',
    en: 'Labin miners in 1921 organized self-government for 37 days.',
  },
  {
    hr: 'Jadrolinija je najstarija hrvatska trajektna kompanija.',
    en: "Jadrolinija is Croatia's oldest ferry company.",
  },
  {
    hr: 'Mate Parlov bio je svjetski boksački prvak 1978.',
    en: 'Mate Parlov was world boxing champion in 1978.',
  },
  {
    hr: 'Stjepan Radić osnovao je Hrvatsku seljačku stranku 1904.',
    en: 'Stjepan Radić founded the Croatian Peasant Party in 1904.',
  },
  {
    hr: 'Nacionalni park Kornati ima 89 otoka i otočića.',
    en: 'Kornati National Park has 89 islands and islets.',
  },
  {
    hr: 'Marija Jurić Zagorka bila je prva hrvatska novinarka.',
    en: "Marija Jurić Zagorka was Croatia's first female journalist.",
  },
  {
    hr: 'Opatija je bila ljetovalište austrougarske aristokracije.',
    en: 'Opatija was the summer resort of Austro-Hungarian aristocracy.',
  },
  {
    hr: "'Kad je bilo tako, bilo je tako' — čuva istinu naše prošlosti.",
    en: "'When it was so, it was so' — preserving the truth of our past.",
  },
  {
    hr: 'Labinjonska Čakavica zaštićena je kao nematerijalno kulturno dobro 2019.',
    en: 'Labinjonska Čakavica was protected as intangible cultural heritage in 2019.',
  },
  {
    hr: 'Giuseppina Martinuzzi iz Labina bila je prva istarska socijalna aktivistica.',
    en: "Giuseppina Martinuzzi from Labin was Istria's first social activist.",
  },
  {
    hr: 'Stipan Sorić bio je narodni junak iz Bibinja u borbi protiv Turaka.',
    en: 'Stipan Sorić was a folk hero from Bibinje in the fight against the Turks.',
  },
  {
    hr: 'Bibinje ima pet katoličkih crkava u malom mjestu.',
    en: 'Bibinje has five Catholic churches in a small town.',
  },
  {
    hr: 'Napredak je hrvatsko kulturno društvo osnovano 1902. u BiH.',
    en: 'Napredak is a Croatian cultural society founded in 1902 in BiH.',
  },
  {
    hr: "Hercegovina znači 'zemlja hercega' — po hercegu Stjepanu Vukčiću.",
    en: "Herzegovina means 'land of the duke' — after duke Stjepan Vukčić.",
  },
  {
    hr: 'Sveučilište u Mostaru predaje na hrvatskom jeziku.',
    en: 'University of Mostar teaches in Croatian language.',
  },
  {
    hr: 'Međugorje je jedno od najposjećenijih hodočasničkih mjesta na svijetu.',
    en: 'Međugorje is one of the most visited pilgrimage sites in the world.',
  },
  {
    hr: 'Neum je jedini bosanskohercegovački grad na moru.',
    en: "Neum is Bosnia's only coastal town.",
  },
  {
    hr: 'Ganga je tradicionalno pjevanje zapadne Hercegovine.',
    en: 'Ganga is traditional singing of western Herzegovina.',
  },
  {
    hr: 'Grude su bile administrativno središte za vrijeme rata.',
    en: 'Grude was the administrative center during the war.',
  },
  {
    hr: 'Ljubuški ima srednjovjekovnu tvrđavu iz 14. stoljeća.',
    en: 'Ljubuški has a medieval fortress from the 14th century.',
  },
  {
    hr: 'Široki Brijeg je poznat po franjevačkom samostanu i patriotizmu.',
    en: 'Široki Brijeg is known for its Franciscan monastery and patriotism.',
  },
  {
    hr: 'HVO je osnovan 8. travnja 1992. za obranu Hrvata u BiH.',
    en: 'The HVO was founded April 8, 1992 to defend Croats in BiH.',
  },
  {
    hr: 'Washingtonski sporazum 1994. zaustavio je sukob Hrvata i Bošnjaka.',
    en: 'The Washington Agreement 1994 ended the Croat-Bosniak conflict.',
  },
  {
    hr: '35 franjevačkih samostana u BiH postojalo je prije Turaka.',
    en: '35 Franciscan monasteries in BiH existed before the Ottomans.',
  },
  {
    hr: 'Baby Lasagna predstavljao je Hrvatsku na Eurosongu.',
    en: 'Baby Lasagna represented Croatia at Eurovision.',
  },
  {
    hr: "Oliver Dragojević poznat je kao 'glas Dalmacije'.",
    en: "Oliver Dragojević is known as 'the voice of Dalmatia'.",
  },
  {
    hr: "Agatha Christie spominje Vinkovce u 'Umorstvu u Orient Expressu'.",
    en: "Agatha Christie mentions Vinkovci in 'Murder on the Orient Express'.",
  },
  {
    hr: 'Steve Gaunt, Englez, došao je u Vinkovce 1991. i ostao zauvijek.',
    en: 'Steve Gaunt, an Englishman, came to Vinkovci in 1991 and stayed forever.',
  },
  {
    hr: 'Sopot kultura kod Vinkovaca datira iz 5480.-3790. pr. Kr.',
    en: 'Sopot culture near Vinkovci dates to 5480-3790 BC.',
  },
  {
    hr: 'Vinkovci su imali prvo metal-lijevanje na svijetu — Vučedol kultura.',
    en: "Vinkovci had the world's first metal casting — Vučedol culture.",
  },
  {
    hr: 'Rimski Cibalae imao je vodovod, kanalizaciju i terme.',
    en: 'Roman Cibalae had a water supply, sewerage, and thermal baths.',
  },
  {
    hr: 'Josip Runjanin, skladatelj hrvatske himne, odrastao je u Vinkovcima.',
    en: 'Josip Runjanin, composer of the Croatian anthem, grew up in Vinkovci.',
  },
  {
    hr: 'Vinkovačke jeseni najstariji su folklorni festival u Hrvatskoj.',
    en: 'Vinkovci Autumn is the oldest folklore festival in Croatia.',
  },
  {
    hr: 'Sinišu Glavaševića ubili su na Ovčari — bio je vukovarski novinar.',
    en: "Siniša Glavašević was killed at Ovčara — he was Vukovar's journalist.",
  },
  {
    hr: 'Masovna grobnica na Ovčari ekshumirana je 1996.',
    en: 'The mass grave at Ovčara was exhumed in 1996.',
  },
  {
    hr: 'Dvjesta žrtava identificirano je iz masovne grobnice na Ovčari.',
    en: '200 victims were identified from the Ovčara mass grave.',
  },
  {
    hr: 'Mile Mrkšić osuđen je na 20 godina za zločin na Ovčari.',
    en: 'Mile Mrkšić was sentenced to 20 years for the Ovčara crime.',
  },
  {
    hr: 'Do 12.000 projektila dnevno padalo je na Vukovar 1991.',
    en: 'Up to 12,000 shells per day fell on Vukovar in 1991.',
  },
  {
    hr: '86 djece poginulo je u opsadi Vukovara.',
    en: '86 children died in the siege of Vukovar.',
  },
  {
    hr: 'Vukovarski vodotoranj obnovljen je i otvoren 2020.',
    en: "Vukovar's water tower was restored and opened in 2020.",
  },
  {
    hr: 'Povorka sjećanja u Vukovaru održava se svake godine 18. studenoga.',
    en: 'The Memory Procession in Vukovar is held every November 18.',
  },
  {
    hr: 'Eltz dvorac u Vukovaru bio je bombardiran i opljačkan 1991.',
    en: 'Eltz Castle in Vukovar was bombed and looted in 1991.',
  },
  {
    hr: 'Vučedolski muzej na Dunavu otvoren je 2015.',
    en: 'The Vučedol Museum on the Danube opened in 2015.',
  },
  {
    hr: 'Hrvatska ima 11 UNESCO materijalnih i nematerijalnih dobara.',
    en: 'Croatia has 11 UNESCO material and immaterial heritage sites.',
  },
  {
    hr: 'Jadranska magistrala je jedna od najljepših cesta na svijetu.',
    en: 'The Adriatic Highway is one of the most beautiful roads in the world.',
  },
  {
    hr: 'Crveni otok kod Rovinja je popularan turistički biser.',
    en: 'Red Island near Rovinj is a popular tourist gem.',
  },
  {
    hr: 'Istra je najveći poluotok u Jadranskom moru.',
    en: 'Istria is the largest peninsula in the Adriatic Sea.',
  },
  {
    hr: 'Hrvatska je osvojila 3. mjesto na SP 2022. — drugi put na postolju!',
    en: 'Croatia won 3rd at the 2022 World Cup — second time on the podium!',
  },
  {
    hr: 'Rijeka ima najduži karneval u Hrvatskoj.',
    en: 'Rijeka has the longest carnival in Croatia.',
  },
  { hr: 'Papuk je prvi geopark u Hrvatskoj.', en: "Papuk is Croatia's first geopark." },
  { hr: 'Croatia Airlines osnovan je 1989.', en: 'Croatia Airlines was founded in 1989.' },
  {
    hr: 'Hrvatsko more jedno je od najčišćih na Mediteranu.',
    en: 'Croatian sea is among the cleanest in the Mediterranean.',
  },
  {
    hr: 'Nikola Tesla je izumio izmjeničnu struju.',
    en: 'Nikola Tesla invented alternating current.',
  },
  {
    hr: 'Bjelolasica je najviši skijaški centar u Hrvatskoj.',
    en: "Bjelolasica is Croatia's highest ski center.",
  },
  {
    hr: 'Medvedgrad je srednjovjekovna utvrda iznad Zagreba.',
    en: 'Medvedgrad is a medieval fortress above Zagreb.',
  },
  {
    hr: 'Vrsar je bio omiljeno mjesto Giacoma Casanove.',
    en: "Vrsar was Giacomo Casanova's favorite place.",
  },
  {
    hr: 'Solinska Salona bila je glavni grad rimske Dalmacije.',
    en: "Solin's Salona was the capital of Roman Dalmatia.",
  },
  { hr: 'Hrvatski jezik ima sedam padeža.', en: 'Croatian language has seven cases.' },
  {
    hr: 'Stradun je glavna ulica u Dubrovniku — duga 300 metara.',
    en: "Stradun is Dubrovnik's main street — 300 meters long.",
  },
  {
    hr: 'Mala Gospa (8. rujna) je veliki blagdan u Dalmaciji.',
    en: 'Nativity of Mary (Sept 8) is a major feast in Dalmatia.',
  },
  {
    hr: 'Crkva Sv. Donata u Zadru potječe iz 9. stoljeća.',
    en: 'St. Donatus Church in Zadar dates from the 9th century.',
  },
  {
    hr: 'Crkvina u Biskupiji kod Knina je kraljevsko krunidbeno mjesto.',
    en: 'Crkvina in Biskupija near Knin is a royal coronation site.',
  },
  {
    hr: 'Zvonimir je bio hrvatski kralj od 1076. do 1089.',
    en: 'Zvonimir was Croatian king from 1076 to 1089.',
  },
  {
    hr: 'Ban Kulin iz Bosne vladao je od 1180. do 1204.',
    en: 'Ban Kulin of Bosnia ruled from 1180 to 1204.',
  },
  {
    hr: 'Tomislav je ujedinio Panonsku i Dalmatinsku Hrvatsku.',
    en: 'Tomislav united Pannonian and Dalmatian Croatia.',
  },
  {
    hr: "Trpimirova darovnica (852.) prvi put spominje 'Hrvate'.",
    en: "Trpimir's charter (852) first mentions 'Croats'.",
  },
  {
    hr: 'Šubići su bili najmoćnija hrvatska plemićka obitelj u 13. st.',
    en: 'The Šubić family was the most powerful Croatian noble family in the 13th c.',
  },
  {
    hr: 'Hrvati su pokršteni u 7.-9. stoljeću.',
    en: 'Croats were Christianized in the 7th-9th century.',
  },
  {
    hr: 'Branimir je dobio papino priznanje Hrvatske 879.',
    en: 'Branimir received papal recognition of Croatia in 879.',
  },
  {
    hr: 'Drniški pršut je zaštićen oznakom izvornosti.',
    en: 'Drniš prosciutto has protected designation of origin.',
  },
  {
    hr: 'Turopolje ima najstariju europsku samoupravu — Plemenita općina od 1278.',
    en: "Turopolje has Europe's oldest self-government — Noble Municipality since 1278.",
  },
  { hr: 'Rijeka Krka ima 7 slapova na 75 km.', en: 'The Krka River has 7 waterfalls over 75 km.' },
  {
    hr: 'Stari Grad na Hvaru je jedno od najstarijih naselja u Europi.',
    en: 'Stari Grad on Hvar is one of the oldest settlements in Europe.',
  },
  {
    hr: 'Hrvatsku zastavu čine crvena, bijela i plava pruga.',
    en: 'The Croatian flag has red, white, and blue stripes.',
  },
  {
    hr: 'Grb Hrvatske ima 25 polja — bijela i crvena šahovnica.',
    en: "Croatia's coat of arms has 25 fields — white and red checkerboard.",
  },
  {
    hr: 'Hrvatsko more dom je za dupine, kornjače i sredozemne medvjedice.',
    en: 'Croatian sea is home to dolphins, turtles, and Mediterranean monk seals.',
  },
  {
    hr: 'Advent u Zagrebu proglašen je najboljim božićnim sajmom u Europi.',
    en: "Advent in Zagreb was declared Europe's best Christmas market.",
  },
  {
    hr: 'Otočić Baljenac nalikuje otisku prsta iz zraka.',
    en: 'The islet of Baljenac looks like a fingerprint from above.',
  },
  {
    hr: 'Čakovec je središte Međimurja — najsjevernije hrvatske županije.',
    en: "Čakovec is the center of Međimurje — Croatia's northernmost county.",
  },
  {
    hr: 'Daruvar je poznat po termalnim izvorima od rimskog doba.',
    en: 'Daruvar has been known for thermal springs since Roman times.',
  },
  {
    hr: 'Imotski ima Crveno i Modro jezero — prirodna čuda u kršu.',
    en: 'Imotski has the Red and Blue Lakes — natural karst wonders.',
  },
  {
    hr: 'Lastovo je najudaljeniji nastanjeni hrvatski otok.',
    en: 'Lastovo is the most remote inhabited Croatian island.',
  },
  {
    hr: 'Lonjsko polje je najveće poplavno područje u Hrvatskoj.',
    en: "Lonjsko Polje is Croatia's largest floodplain.",
  },
  {
    hr: 'Motovun je srednjovjekovni gradić u srcu Istre.',
    en: 'Motovun is a medieval town in the heart of Istria.',
  },
  {
    hr: 'Trogir je UNESCO grad — rimska, romanička i barokna arhitektura.',
    en: 'Trogir is a UNESCO city — Roman, Romanesque, and Baroque architecture.',
  },
  {
    hr: 'Vis je bio vojna baza zatvorena za turiste do 1989.',
    en: 'Vis was a military base closed to tourists until 1989.',
  },
  { hr: 'Samobor je poznat po kremšnitama.', en: 'Samobor is famous for kremšnita cream cakes.' },
  {
    hr: 'Kumrovec je rodno selo Josipa Broza Tita.',
    en: 'Kumrovec is the birthplace of Josip Broz Tito.',
  },
  {
    hr: 'Sisak je najstariji grad u kontinentalnoj Hrvatskoj — rimska Siscia.',
    en: 'Sisak is the oldest city in continental Croatia — Roman Siscia.',
  },
  {
    hr: 'Vukovar leži na ušću Vuke u Dunav.',
    en: 'Vukovar lies at the confluence of the Vuka and the Danube.',
  },
  { hr: 'Drniš je rodni grad Ivana Meštrovića.', en: "Drniš is Ivan Meštrović's hometown." },
  {
    hr: 'Crikvenica je najstarije morsko kupalište u Hrvatskoj.',
    en: 'Crikvenica is the oldest seaside resort in Croatia.',
  },
  {
    hr: 'Mali Ston ima najstarije solane na Mediteranu.',
    en: 'Mali Ston has the oldest salt pans in the Mediterranean.',
  },
  {
    hr: 'Rijeka Cetina je najdulji tok koji utječe u Jadran.',
    en: 'The Cetina is the longest river flowing into the Adriatic.',
  },
  {
    hr: 'Na Jankovcu u Papuku nalazi se najstarija šumarija u Hrvatskoj.',
    en: "Jankovac in Papuk has Croatia's oldest forestry office.",
  },
  {
    hr: "Marin Držić napisao je 'Dundo Maroje' — remek-djelo renesansne komedije.",
    en: "Marin Držić wrote 'Dundo Maroje' — a Renaissance comedy masterpiece.",
  },
  {
    hr: 'Slavonski hrast je jedan od najkvalitetnijih drvnih materijala u Europi.',
    en: 'Slavonian oak is one of the finest woods in Europe.',
  },
  {
    hr: 'Korčulanska moreška je tradicijski borbeni ples iz 15. stoljeća.',
    en: "Korčula's Moreška is a traditional battle dance from the 15th century.",
  },
  { hr: 'Hrvatsko more ima oko 450 vrsta riba.', en: 'Croatian sea has about 450 fish species.' },
  {
    hr: 'Vukovar je bio multietnički grad Hrvata, Srba, Mađara i ostalih.',
    en: 'Vukovar was a multi-ethnic city of Croats, Serbs, Hungarians and others.',
  },
  {
    hr: 'Slavonski kulen je zaštićen kao hrvatska oznaka izvornosti.',
    en: 'Slavonian kulen has Croatian protected designation of origin.',
  },
  {
    hr: 'Nikola Tesla dao je svijetu izmjeničnu struju i radio.',
    en: 'Nikola Tesla gave the world alternating current and radio.',
  },
  {
    hr: 'Pula Arena izgrađena je u 1. stoljeću za 23.000 gledatelja.',
    en: 'Pula Arena was built in the 1st century for 23,000 spectators.',
  },
  {
    hr: 'Kornatski otoci nemaju stalnih stanovnika.',
    en: 'The Kornati islands have no permanent residents.',
  },
  {
    hr: 'Dubrovačka Republika imala je vlastiti novac, zastavu i diplomaciju.',
    en: 'The Republic of Dubrovnik had its own currency, flag and diplomacy.',
  },
  {
    hr: 'Peristil u Splitu koristi se kao pozornica od antičkih vremena.',
    en: "Split's Peristyle has been used as a stage since ancient times.",
  },
  {
    hr: "Jelsa na Hvaru ima najstariju procesiju 'Za Križem' od 1510.",
    en: "Jelsa on Hvar has the oldest 'Following the Cross' procession since 1510.",
  },
  {
    hr: 'Čipka s Paga izrađuje se ručno od 15. stoljeća.',
    en: 'Pag lace has been made by hand since the 15th century.',
  },
  {
    hr: 'Benkovac je bio središte srpske pobune u Krajini 1991.',
    en: 'Benkovac was the center of the Serb rebellion in Krajina in 1991.',
  },
  {
    hr: 'Bleiburška tragedija 1945. temelj je kolektivnog sjećanja Hrvata.',
    en: 'The Bleiburg tragedy of 1945 is fundamental to Croatian collective memory.',
  },
  {
    hr: 'Trakošćan, Varaždin i Veliki Tabor su najljepši dvorci u Zagorju.',
    en: "Trakošćan, Varaždin and Veliki Tabor are Zagorje's most beautiful castles.",
  },
  {
    hr: "'Naša Hrvatska' — ne samo zemlja, nego osjećaj.",
    en: "'Our Croatia' — not just a land, but a feeling.",
  },
  {
    hr: 'Jadransko more zvuči kroz morske orgulje u Zadru.',
    en: 'The Adriatic Sea sounds through the Sea Organ in Zadar.',
  },
  {
    hr: 'Svetvinčenat ima jednu od najbolje očuvanih srednjovjekovnih utvrda u Istri.',
    en: 'Svetvinčenat has one of the best-preserved medieval forts in Istria.',
  },
  {
    hr: 'Korčulanska Gradska vijećnica iz 15. st. najstarija je u Dalmaciji.',
    en: "Korčula's 15th c. Town Hall is the oldest in Dalmatia.",
  },
  {
    hr: 'Krčki knezovi Frankopani vladali su 500 godina.',
    en: 'The Frankopan Princes of Krk ruled for 500 years.',
  },
  {
    hr: 'Grožnjan je grad umjetnika — više galerija nego stanovnika.',
    en: "Grožnjan is an artists' town — more galleries than residents.",
  },
  {
    hr: 'Rovinj je nekad bio otok — spojen s kopnom u 18. st.',
    en: 'Rovinj was once an island — connected to mainland in 18th c.',
  },
  {
    hr: 'Učka je najviša planina Istre — 1.396 m.',
    en: 'Učka is the highest mountain in Istria — 1,396 m.',
  },
  {
    hr: 'Istarski tartufi spadaju među najskuplje na svijetu.',
    en: 'Istrian truffles are among the most expensive in the world.',
  },
  { hr: 'Limski kanal je fjord u Istri dug 12 km.', en: 'Lim Channel is a 12 km fjord in Istria.' },
  {
    hr: 'Raša je najmlađi grad u Istri — sagrađen za rudare 1936.',
    en: 'Raša is the youngest town in Istria — built for miners in 1936.',
  },
  {
    hr: "Buzet je 'grad tartufa' — godišnji festival tartufa.",
    en: "Buzet is the 'city of truffles' — annual truffle festival.",
  },
  {
    hr: 'Brijunski otoci imaju Safari park s egzotičnim životinjama.',
    en: 'Brijuni islands have a Safari park with exotic animals.',
  },
  {
    hr: 'Josip Broz Tito primio je više od 100 državnih poglavara na Brijunima.',
    en: 'Josip Broz Tito received over 100 heads of state at Brijuni.',
  },
  {
    hr: 'Pazin ima ponor koji je inspirirao Jules Vernea.',
    en: 'Pazin has a chasm that inspired Jules Verne.',
  },
  {
    hr: 'Istra je poznata po Malvaziji — autohtonom bijelom vinu.',
    en: 'Istria is known for Malvasia — an indigenous white wine.',
  },
  {
    hr: 'Poreč ima Eufrazijevu baziliku — UNESCO od 1997.',
    en: 'Poreč has the Euphrasian Basilica — UNESCO since 1997.',
  },
  {
    hr: 'Umag je domaćin ATP teniskog turnira svake godine.',
    en: 'Umag hosts an ATP tennis tournament every year.',
  },
  {
    hr: 'Mošćenička Draga ima jednu od najljepših plaža u Kvarneru.',
    en: 'Mošćenička Draga has one of the most beautiful beaches in Kvarner.',
  },
  {
    hr: 'Kastav je srednjovjekovna utvrda iznad Rijeke.',
    en: 'Kastav is a medieval fortress above Rijeka.',
  },
  {
    hr: 'Lovran je poznat po festivalu marunadi — kestena.',
    en: 'Lovran is known for the marunada festival — chestnuts.',
  },
  {
    hr: 'Cres i Lošinj bili su jedan otok do 1. stoljeća.',
    en: 'Cres and Lošinj were one island until the 1st century.',
  },
  {
    hr: 'Beli na Cresu dom je za bjeloglave supove.',
    en: 'Beli on Cres is home to griffon vultures.',
  },
  {
    hr: 'Rab ima najstariji gradski park u Europi — Komrčar.',
    en: 'Rab has the oldest city park in Europe — Komrčar.',
  },
  {
    hr: "Novalja na Pagu poznata je po plaži Zrće — 'hrvatski Ibiza'.",
    en: "Novalja on Pag is known for Zrće beach — 'Croatian Ibiza'.",
  },
  {
    hr: 'Senj je bio dom uskoka — pirati koji su branili Hrvatsku.',
    en: 'Senj was home to the Uskoks — pirates who defended Croatia.',
  },
  {
    hr: 'Krapina je nalazište neandertalaca starog 130.000 godina.',
    en: 'Krapina is a Neanderthal site 130,000 years old.',
  },
  {
    hr: 'Plitvička jezera imaju 16 jezera povezanih slapovima.',
    en: 'Plitvice Lakes have 16 lakes connected by waterfalls.',
  },
  {
    hr: 'Karlovac je osnovan 1579. kao tvrđava protiv Turaka — u obliku zvijezde.',
    en: 'Karlovac was founded 1579 as a star-shaped fortress against the Turks.',
  },
  {
    hr: 'Čavoglave su selo koje je postalo simbol otpora u Domovinskom ratu.',
    en: 'Čavoglave is a village that became a symbol of resistance in the Homeland War.',
  },
  { hr: 'Slavonija je žitnica Hrvatske.', en: "Slavonia is Croatia's breadbasket." },
  {
    hr: 'Baranja je poznata po vinogradima i multikulturalnosti.',
    en: 'Baranja is known for vineyards and multiculturalism.',
  },
  {
    hr: "Požega leži u kotlini okruženoj planinama — 'Zlatna dolina'.",
    en: "Požega lies in a valley surrounded by mountains — 'Golden Valley'.",
  },
  {
    hr: 'Đakovo ima jednu od najljepših katedrala u Hrvatskoj.',
    en: 'Đakovo has one of the most beautiful cathedrals in Croatia.',
  },
  {
    hr: 'Brodsko kolo je slavonski festival folklora i tradicije.',
    en: "Brodsko Kolo is Slavonia's festival of folklore and tradition.",
  },
  {
    hr: 'Ilok je najistočniji grad u Hrvatskoj — na Dunavu.',
    en: "Ilok is Croatia's easternmost city — on the Danube.",
  },
  {
    hr: 'Ilok proizvodi vrhunska vina — posebno Graševinu i Traminac.',
    en: 'Ilok produces premium wines — especially Graševina and Traminer.',
  },
  {
    hr: 'Osječka Tvrđa je jedna od najbolje očuvanih baroknih utvrda u Europi.',
    en: "Osijek's Tvrđa is one of Europe's best-preserved baroque fortresses.",
  },
  {
    hr: 'Vukovarska bolnica bila je posljednje utočište branitelja.',
    en: "Vukovar Hospital was the defenders' last refuge.",
  },
  {
    hr: 'Borovo Selo — incident 2. svibnja 1991. početak je rata.',
    en: 'Borovo Selo — the incident of May 2, 1991 was the start of the war.',
  },
  {
    hr: 'Lika je najrjeđe naseljena regija Hrvatske.',
    en: "Lika is Croatia's most sparsely populated region.",
  },
  {
    hr: 'Gospić je središte Like — područje ljepote i tišine.',
    en: 'Gospić is the center of Lika — an area of beauty and silence.',
  },
  {
    hr: 'Velebit je najduža planina u Hrvatskoj — 145 km.',
    en: "Velebit is Croatia's longest mountain — 145 km.",
  },
  {
    hr: 'Paklenica je raj za penjače — 400+ smjerova.',
    en: "Paklenica is a climber's paradise — 400+ routes.",
  },
  {
    hr: 'Sjeverni Velebit ima Lukinu jamu — 1.421 m duboku.',
    en: 'Northern Velebit has Lukina Pit — 1,421 m deep.',
  },
  {
    hr: 'Međimurje je najsjevernija i najmanja hrvatska županija.',
    en: "Međimurje is Croatia's northernmost and smallest county.",
  },
  {
    hr: 'Varaždin je bio prijestolnica Hrvatske do požara 1776.',
    en: "Varaždin was Croatia's capital until a fire in 1776.",
  },
  {
    hr: 'Krapinske toplice poznate su još od rimskog doba.',
    en: 'Krapinske Toplice have been known since Roman times.',
  },
  {
    hr: 'Zagreb ima gornji i donji grad — povezani uspinjačom.',
    en: 'Zagreb has upper and lower town — connected by funicular.',
  },
  {
    hr: 'Zagrebačka uspinjača jedna je od najkraćih na svijetu — 66 metara.',
    en: "Zagreb's funicular is one of the world's shortest — 66 meters.",
  },
  {
    hr: "Dolac je zagrebačka tržnica poznata kao 'trbuh Zagreba'.",
    en: "Dolac is Zagreb's market known as 'the belly of Zagreb'.",
  },
  {
    hr: 'Muzej prekinutih veza u Zagrebu je jedinstven na svijetu.',
    en: 'Museum of Broken Relationships in Zagreb is unique in the world.',
  },
  {
    hr: 'Hrvatsko narodno kazalište u Zagrebu otvoreno je 1895.',
    en: 'Croatian National Theatre in Zagreb opened in 1895.',
  },
  {
    hr: "Jarun u Zagrebu zovu 'zagrebačko more'.",
    en: "Jarun in Zagreb is called 'Zagreb's sea'.",
  },
  {
    hr: 'Maksimir je najstariji javni park u jugoistočnoj Europi.',
    en: 'Maksimir is the oldest public park in southeastern Europe.',
  },
  {
    hr: 'Mirogoj u Zagrebu jedan je od najljepših groblja u Europi.',
    en: 'Mirogoj in Zagreb is one of the most beautiful cemeteries in Europe.',
  },
  {
    hr: 'Hrvati su bili izuzetak — i uvijek će biti.',
    en: 'Croats were the exception — and always will be.',
  },
  { hr: 'Ratnici su neuništivi.', en: 'Warriors are indestructible.' },
  { hr: 'Sjeti se Vukovara.', en: 'Remember Vukovar.' },
  { hr: 'Za dom.', en: 'For the homeland.' },
  {
    hr: 'Naša Hrvatska — naš dom, naš ponos, naš život.',
    en: 'Our Croatia — our home, our pride, our life.',
  },
  { hr: 'Dubrovačke zidine duge su 1.940 metara.', en: "Dubrovnik's walls are 1,940 meters long." },
  {
    hr: 'Sv. Vlaho je zaštitnik Dubrovnika — slavi se 3. veljače.',
    en: "St. Blaise is Dubrovnik's patron — celebrated February 3.",
  },
  {
    hr: 'Lokrum je otok zabranjen za noćenje — prema legendi proklet.',
    en: 'Lokrum is an island forbidden for overnight stays — cursed by legend.',
  },
  {
    hr: 'Trogir je uništen od Saracena 1123. i potpuno obnovljen.',
    en: 'Trogir was destroyed by Saracens in 1123 and completely rebuilt.',
  },
  {
    hr: 'Fortuna u Hvaru je najstarija kazališna zgrada u Europi (1612).',
    en: 'Fortuna in Hvar is the oldest theatre building in Europe (1612).',
  },
  {
    hr: 'Vis je mjesto bitke 1866. između Italije i Austrije.',
    en: 'Vis was the site of an 1866 battle between Italy and Austria.',
  },
  {
    hr: 'Biševo ima Modru špilju vidljivu samo oko podneva.',
    en: 'Biševo has a Blue Cave visible only around noon.',
  },
  {
    hr: 'Susak ima jedinu pješčanu plažu u sjevernom Jadranu.',
    en: 'Susak has the only sandy beach in the northern Adriatic.',
  },
  {
    hr: 'Silba nema automobila — samo pješaci i bicikli.',
    en: 'Silba has no cars — only pedestrians and bicycles.',
  },
  {
    hr: 'Dugi Otok ima slano jezero Mir — jedno od dva u Hrvatskoj.',
    en: 'Dugi Otok has salt lake Mir — one of two in Croatia.',
  },
  {
    hr: 'Premuda je otok na kojem je potonula austrougarska bojna brod.',
    en: 'Premuda is where an Austro-Hungarian battleship was sunk.',
  },
  {
    hr: "Ilovik je 'otok cvijeća' u Kvarneru.",
    en: "Ilovik is the 'island of flowers' in Kvarner.",
  },
  {
    hr: 'Palagruža je najudaljeniji hrvatski otok — bliže Italiji nego Hrvatskoj.',
    en: "Palagruža is Croatia's most remote island — closer to Italy.",
  },
  { hr: 'Jabuka je vulkanski otok u Jadranu.', en: 'Jabuka is a volcanic island in the Adriatic.' },
  { hr: 'Kornati nemaju izvora pitke vode.', en: 'Kornati have no fresh water sources.' },
  {
    hr: 'Hrvatska je u top 20 turističkih destinacija na svijetu.',
    en: 'Croatia is in the top 20 tourist destinations in the world.',
  },
  {
    hr: 'Rimac Nevera je najbrži električni automobil na svijetu.',
    en: "Rimac Nevera is the world's fastest electric car.",
  },
  {
    hr: 'Miroslav Krleža je najutjecajniji hrvatski književnik 20. stoljeća.',
    en: "Miroslav Krleža is Croatia's most influential 20th c. writer.",
  },
  {
    hr: "August Šenoa napisao je 'Zlatarevo zlato' — klasik hrvatske književnosti.",
    en: "August Šenoa wrote 'The Goldsmith's Gold' — a Croatian literary classic.",
  },
  {
    hr: 'Tin Ujević je jedan od najcjenjenijih hrvatskih pjesnika.',
    en: "Tin Ujević is one of Croatia's most esteemed poets.",
  },
  {
    hr: 'Marko Marulić iz Splita smatra se ocem hrvatske književnosti.',
    en: 'Marko Marulić from Split is considered the father of Croatian literature.',
  },
  {
    hr: 'Judita Marka Marulića (1501) prvi je ep na hrvatskom jeziku.',
    en: "Marulić's Judita (1501) is the first epic poem in Croatian.",
  },
  {
    hr: 'Nikola Jurišić branio je Kiseg s 800 ljudi protiv 100.000 Turaka 1532.',
    en: 'Nikola Jurišić defended Kőszeg with 800 against 100,000 Turks in 1532.',
  },
  {
    hr: 'Josip Jelačić je ban koji je ukinuo kmetstvo i branio Hrvatsku.',
    en: 'Josip Jelačić is the ban who abolished serfdom and defended Croatia.',
  },
  {
    hr: 'Vukovarska ulica u Zagrebu nazvana je u spomen žrtvama.',
    en: 'Vukovarska street in Zagreb is named in memory of the victims.',
  },
  {
    hr: 'Franjo Tuđman bio je prvi predsjednik neovisne Hrvatske.',
    en: 'Franjo Tuđman was the first president of independent Croatia.',
  },
  {
    hr: 'Goran Ivanišević je jedini Hrvat koji je osvojio Wimbledon (2001).',
    en: 'Goran Ivanišević is the only Croat to win Wimbledon (2001).',
  },
  {
    hr: 'Janica Kostelić osvojila je 4 olimpijska zlata u skijanju.',
    en: 'Janica Kostelić won 4 Olympic golds in skiing.',
  },
  {
    hr: 'Ivica Kostelić osvojio je Ukupni svjetski kup u skijanju 2011.',
    en: 'Ivica Kostelić won the Overall World Cup in skiing in 2011.',
  },
  {
    hr: 'Sandra Perković je dvostruka olimpijska pobjednica u bacanju diska.',
    en: 'Sandra Perković is a double Olympic champion in discus.',
  },
  {
    hr: 'Blanka Vlašić je jedna od najvećih visinašica svih vremena.',
    en: 'Blanka Vlašić is one of the greatest high jumpers of all time.',
  },
  {
    hr: 'Sara Kolak osvojila je olimpijsko zlato u bacanju koplja 2016.',
    en: 'Sara Kolak won Olympic gold in javelin in 2016.',
  },
  {
    hr: 'Hrvatsko rukomet je osvajalo medalje na svim velikim natjecanjima.',
    en: 'Croatian handball has won medals at all major competitions.',
  },
  {
    hr: 'Vaterpolo klub Jug Dubrovnik 7 puta je bio europski prvak.',
    en: 'Water polo club Jug Dubrovnik has been European champion 7 times.',
  },
  {
    hr: 'Hrvatska je na SP 1998. osvojila brončanu medalju — prvi nastup!',
    en: 'Croatia won bronze at the 1998 World Cup — their first appearance!',
  },
  {
    hr: 'Davor Šuker bio je najbolji strijelac SP 1998.',
    en: 'Davor Šuker was the top scorer at the 1998 World Cup.',
  },
  {
    hr: 'Luka Modrić je proglašen najboljim igračem SP 2018.',
    en: 'Luka Modrić was named the best player at the 2018 World Cup.',
  },
  {
    hr: 'Ivan Rakitić je zabio pobjednički jedanaesterac u polufinalu SP 2018.',
    en: 'Ivan Rakitić scored the winning penalty in the 2018 WC semifinal.',
  },
  {
    hr: 'Mario Mandžukić zabio je prvi autogol i prvi gol u finalu SP.',
    en: 'Mario Mandžukić scored both an own goal and a goal in the WC final.',
  },
  {
    hr: 'Mateo Kovačić je bio dio zlatnog sastava Reala i Chelseaja.',
    en: "Mateo Kovačić was part of Real Madrid and Chelsea's golden squads.",
  },
  {
    hr: 'Ivan Perišić zabio je gol u finalu SP 2018.',
    en: 'Ivan Perišić scored a goal in the 2018 WC final.',
  },
  {
    hr: 'Ante Rebić je strijelac jednog od najljepših golova u povijesti SP.',
    en: 'Ante Rebić scored one of the most beautiful goals in WC history.',
  },
  {
    hr: 'Domagoj Vida branio je Hrvatsku u polufinalu SP 2018.',
    en: 'Domagoj Vida defended Croatia in the 2018 WC semifinal.',
  },
  {
    hr: 'Hrvatska je pobijedila Brazil u četvrtfinalu SP 2022.',
    en: 'Croatia defeated Brazil in the 2022 WC quarterfinal.',
  },
  {
    hr: 'Dominik Livaković je bio heroj jedanaesteraca na SP 2022.',
    en: 'Dominik Livaković was the penalty hero at the 2022 WC.',
  },
  {
    hr: 'Joško Gvardiol jedan je od najskupljih hrvatskih igrača ikad.',
    en: 'Joško Gvardiol is one of the most expensive Croatian players ever.',
  },
  {
    hr: 'Zvonimir Boban je legenda Dinama i AC Milana.',
    en: 'Zvonimir Boban is a legend of Dinamo and AC Milan.',
  },
  {
    hr: 'Torcida je najstarija navijačka skupina u Europi — osnovana 1950.',
    en: "Torcida is Europe's oldest fan group — founded 1950.",
  },
  {
    hr: 'Bad Blue Boys su navijači Dinama Zagreba od 1986.',
    en: "Bad Blue Boys have been Dinamo Zagreb's fans since 1986.",
  },
  {
    hr: 'Cibona je osvojila Europski kup 1985. i 1986.',
    en: 'Cibona won the European Cup in 1985 and 1986.',
  },
  {
    hr: 'Krešimir Ćosić je bio prvi Europljanin u NBA Kući slavnih.',
    en: 'Krešimir Ćosić was the first European in the NBA Hall of Fame.',
  },
  {
    hr: 'Dražen Petrović je primljen u NBA Kuću slavnih 2002.',
    en: 'Dražen Petrović was inducted into the NBA Hall of Fame in 2002.',
  },
  {
    hr: 'Toni Kukoč je primljen u NBA Kuću slavnih 2021.',
    en: 'Toni Kukoč was inducted into the NBA Hall of Fame in 2021.',
  },
  {
    hr: 'Hrvatska košarkaška reprezentacija osvojila je srebrnu medalju na OI 1992.',
    en: "Croatia's basketball team won silver at the 1992 Olympics.",
  },
  {
    hr: 'Hrvatska je imala 7 igrača u NBA u jednom trenutku.',
    en: 'Croatia had 7 players in the NBA at one point.',
  },
  {
    hr: 'Dinamo Zagreb je igrao u Ligi prvaka više puta.',
    en: 'Dinamo Zagreb has played in the Champions League multiple times.',
  },
  {
    hr: 'Hajduk Split osnovan je 1911. u Pragu.',
    en: 'Hajduk Split was founded in 1911 in Prague.',
  },
  {
    hr: 'NK Zagreb je najstariji hrvatski nogometni klub — osnovan 1903.',
    en: "NK Zagreb is Croatia's oldest football club — founded 1903.",
  },
  {
    hr: 'Maksimir je najstariji stadion u Hrvatskoj.',
    en: 'Maksimir is the oldest stadium in Croatia.',
  },
  {
    hr: 'Poljud u Splitu projektirao je japanski arhitekt.',
    en: 'Poljud in Split was designed by a Japanese architect.',
  },
  {
    hr: 'Rijeka je dobila hrvatski naslov prvaka 2017. — nakon 72 godine!',
    en: 'Rijeka won the Croatian title in 2017 — after 72 years!',
  },
  {
    hr: 'INmusic je najveći festival otvorenog tipa u Hrvatskoj.',
    en: "INmusic is Croatia's largest open-air festival.",
  },
  {
    hr: 'Ultra Europe u Splitu privlači 150.000 posjetitelja.',
    en: 'Ultra Europe in Split attracts 150,000 visitors.',
  },
  {
    hr: 'Outlook Festival na Puntu održavao se od 2008. do 2022.',
    en: 'Outlook Festival in Punta was held from 2008 to 2022.',
  },
  { hr: 'Rabac ima 4 plaže s Plavom zastavom.', en: 'Rabac has 4 Blue Flag beaches.' },
  { hr: 'Labin ima 94 skulpture u parku Dubrova.', en: 'Labin has 94 sculptures in Dubrova Park.' },
  {
    hr: 'Girandella je najpopularnija plaža u Rabcu.',
    en: 'Girandella is the most popular beach in Rabac.',
  },
  {
    hr: 'Istarska Malvazija je najrasprostranjenije bijelo vino u Istri.',
    en: 'Istrian Malvasia is the most widespread white wine in Istria.',
  },
  { hr: 'Teran je autohtono istarsko crno vino.', en: 'Teran is an indigenous Istrian red wine.' },
  {
    hr: 'Istarski pršut suši se na buri i zri najmanje 12 mjeseci.',
    en: 'Istrian prosciutto is dried by bura wind and aged at least 12 months.',
  },
  { hr: 'Fuži su tradicionalna istarska tjestenina.', en: 'Fuži are traditional Istrian pasta.' },
  {
    hr: 'Maneštra je istarska juha od povrća — svaka kuća ima svoj recept.',
    en: 'Maneštra is Istrian vegetable soup — every house has its own recipe.',
  },
  {
    hr: 'Fritaja je istarska verzija omleta — često s tartufima.',
    en: 'Fritaja is the Istrian version of an omelet — often with truffles.',
  },
  {
    hr: 'Istra ima više od 3.000 stabala maslina starih preko 1.000 godina.',
    en: 'Istria has over 3,000 olive trees older than 1,000 years.',
  },
  {
    hr: 'Istrska maslinova ulja redovno osvajaju svjetske nagrade.',
    en: 'Istrian olive oils regularly win world awards.',
  },
  {
    hr: 'Rapska torta je slatki specijalitet otoka Raba od 15. st.',
    en: 'Rab cake is a sweet specialty of Rab island from the 15th century.',
  },
  {
    hr: 'Paški sir zri minimum 6 mjeseci i ima zaštićen naziv.',
    en: 'Pag cheese ages minimum 6 months and has a protected name.',
  },
  {
    hr: 'Zagorski štrukli mogu biti kuhani ili pečeni.',
    en: 'Zagorje štrukli can be boiled or baked.',
  },
  {
    hr: 'Hrvatsku su posjetili 21 milijun turista u rekordnoj 2023. godini.',
    en: 'Croatia was visited by 21 million tourists in the record year 2023.',
  },
  { hr: 'Pelješki most dug je 2.404 metra.', en: 'The Pelješac Bridge is 2,404 meters long.' },
  {
    hr: 'Hrvatska ima 4 EU zaštićene oznake za vino.',
    en: 'Croatia has 4 EU protected wine designations.',
  },
  {
    hr: 'Prosječna plaća u Hrvatskoj je oko 1.300 EUR neto.',
    en: 'Average salary in Croatia is about 1,300 EUR net.',
  },
  {
    hr: 'Hrvatska ima 20 županija i Grad Zagreb.',
    en: 'Croatia has 20 counties and the City of Zagreb.',
  },
  {
    hr: 'Sjeti se Vukovara. Sjeti se tko smo. Sjeti se zašto smo tu.',
    en: "Remember Vukovar. Remember who we are. Remember why we're here.",
  },
  {
    hr: 'Naša Hrvatska — jer biti Hrvat nije samo znati jezik, nego živjeti srcem.',
    en: "Our Croatia — because being Croatian isn't just knowing the language, it's living with heart.",
  },
];
