// cityHr/A1.js — City of the Day's Croatian intro at A1, keyed by the
// city's `name` in CROATIAN_CITIES.
//
// A1 — short simple sentences, subject forms, present tense (~40 words).
//
// ONE BAND PER MODULE, AND THAT IS THE POINT (2026-09-07). The corpus used to
// be a single `geographyHr.js` holding every band, so a learner who opens the
// screen downloaded all of them to read one — at three bands that was 710 KB
// for ~240 KB of use, and at six it would have been ~1.6 MB. `lib/cityIntroHr`
// resolves the learner's band and dynamically imports THIS file alone; every
// band file gets its own `chunk-geo-hr-*` chunk, which the service worker's
// existing `chunk-geo*` precache exclusion covers by construction.
//
// THE ENTRY SHAPE IS LOAD-BEARING, not decoration. Each city maps to an OBJECT
// carrying a `introHrA1` field rather than to a bare string, because
// `lintCroatianText.mjs` matches Croatian by FIELD NAME
// (`[a-zA-Z]*Hr[ABC]?[12]?`) and a bare `'Zagreb': '…'` would key the text by
// a city name the matcher cannot see — the whole corpus invisible to the lint.
// Every band file must be in that script's TARGETS; `cityOfDayGraded.test.tsx`
// derives the file list from disk and checks it.
//
// 364 cities, 14,594 Croatian words.
export const CITY_INTRO_HR_A1 = {
  Dubrovnik: {
    introHrA1:
      'Dubrovnik je grad na jugu Hrvatske. Grad je na moru. Ima stare zidine i kamene kuće. Glavna ulica se zove Stradun. Ljeti dolazi mnogo turista. Ljudi kažu da je Dubrovnik biser Jadrana.',
  },
  Rijeka: {
    introHrA1:
      'Rijeka je treći najveći grad u Hrvatskoj. Grad je na moru, u Kvarnerskom zaljevu. Rijeka ima veliku luku. Svake zime u Rijeci je veliki karneval. Godine 2020. Rijeka je bila Europska prijestolnica kulture.',
  },
  Pula: {
    introHrA1:
      'Pula je najveći grad u Istri. Grad je na moru. U Puli je velika rimska arena. Arena je stara dvije tisuće godina. Ljeti su u Areni koncerti. Pula ima i lijepe plaže.',
  },
  Osijek: {
    introHrA1:
      'Osijek je najveći grad u Slavoniji, na istoku Hrvatske. Grad je na rijeci Dravi. Slavonija je ravna zemlja s puno polja. U Osijeku je stara tvrđava Tvrđa. U Tvrđi su danas kafići i studenti. Osijek je poznat po kulenu.',
  },
  Šibenik: {
    introHrA1:
      'Šibenik je grad u Dalmaciji. Šibenik su osnovali Hrvati, a ne Rimljani. U gradu je katedrala svetog Jakova. Katedrala je od kamena. Blizu grada je Nacionalni park Krka. Tamo su lijepi vodopadi.',
  },
  Trogir: {
    introHrA1:
      'Trogir je mali grad na otoku. Most spaja otok i kopno. Cijeli stari grad je pod zaštitom UNESCO-a. Grad je vrlo star. Ima katedralu i tvrđavu. Ulice su uske i kamene.',
  },
  Hvar: {
    introHrA1:
      'Hvar je otok u Dalmaciji. Na Hvaru ima puno sunca. Otok je poznat po lavandi. Grad Hvar ima staro kazalište. Ljeti je trg pun kafića. Turisti vole Hvar zbog mora i sunca.',
  },
  Varaždin: {
    introHrA1:
      'Varaždin je grad na sjeveru Hrvatske. Grad je nekada bio glavni grad Hrvatske. Centar grada je barokni. Kuće su lijepe i stare. Ljeti u Varaždinu je festival Špancirfest. Ljudi šetaju ulicama i slušaju glazbu.',
  },
  Karlovac: {
    introHrA1:
      'Karlovac je grad u srednjoj Hrvatskoj. Grad je star i ima oblik zvijezde. Kroz Karlovac teku četiri rijeke. Ljeti se ljudi kupaju u rijekama. U Karlovcu se pravi pivo Karlovačko. Grad je blizu Zagreba.',
  },
  Rovinj: {
    introHrA1:
      'Rovinj je grad u Istri. Grad je na moru, na poluotoku. Kuće su šarene i stare. Na vrhu brda je crkva svete Eufemije. Ulice su uske i idu uz brdo. Mnogi kažu da je Rovinj romantičan grad.',
  },
  Poreč: {
    introHrA1:
      'Poreč je grad u Istri. Grad je na moru. U Poreču je stara bazilika. Bazilika ima zlatne mozaike. Mozaici su stari 1500 godina. Ljeti u Poreč dolazi najviše turista u Hrvatskoj.',
  },
  Opatija: {
    introHrA1:
      'Opatija je grad na moru blizu Rijeke. Prije sto pedeset godina tu su dolazili bogati ljudi iz Beča. Grad ima stare lijepe vile i hotele. Uz more ide duga šetnica. Šetnica se zove Lungomare. U veljači u Opatiji cvjetaju kamelije.',
  },
  Makarska: {
    introHrA1:
      'Makarska je grad u Dalmaciji. Grad je između mora i planine. Planina se zove Biokovo. Biokovo je vrlo visoko. U Makarskoj su duge plaže. Ljeti dolazi mnogo gostiju.',
  },
  Korčula: {
    introHrA1:
      'Korčula je otok i grad u Dalmaciji. Stari grad ima zidine i uske ulice. Neki kažu da je Marko Polo rođen na Korčuli. Na otoku ljudi plešu ples s mačevima. Ples se zove Moreška. Korčula ima dobra bijela vina.',
  },
  Nin: {
    introHrA1:
      'Nin je mali grad blizu Zadra. Grad je na malom otoku u laguni. Nin je vrlo star i važan. Tu su nekad krunili hrvatske kraljeve. U Ninu je najstarija hrvatska crkva. Ima i plaže i ljekovito blato.',
  },
  Sinj: {
    introHrA1:
      'Sinj je grad u Dalmatinskoj zagori. Grad nije na moru. Svake godine u kolovozu je Sinjska alka. Jahači na konjima gađaju mali željezni kolut. Alka postoji od 1715. godine. Ljudi u Sinju štuju Gospu Sinjsku.',
  },
  Ilok: {
    introHrA1:
      'Ilok je grad na krajnjem istoku Hrvatske. Grad je na brdu iznad Dunava. Preko rijeke je Srbija. Ilok je poznat po vinu. Vinski podrumi su stari sedamsto godina. U gradu je stari dvorac.',
  },
  Đakovo: {
    introHrA1:
      'Đakovo je grad u Slavoniji. U gradu je velika katedrala s dva tornja. Tornjevi su visoki 84 metra. Katedrala se vidi iz daleka jer je zemlja ravna. U Đakovu se uzgajaju bijeli konji lipicanci. Ljeti je u gradu festival narodnih nošnji.',
  },
  'Vukovar Grad': {
    introHrA1:
      'Vukovar je grad na istoku Hrvatske, na rijeci Dunavu. Grad je bio vrlo lijep, s baroknim kućama. Godine 1991. grad je razoren u ratu. Vodotoranj u Vukovaru je simbol grada. On je ostao stajati. Danas ljudi obnavljaju grad.',
  },
  Koprivnica: {
    introHrA1:
      'Koprivnica je grad u Podravini, na sjeveru Hrvatske. Blizu grada je selo Hlebine. U Hlebinama su seljaci slikali slike. Njihove slike su danas poznate u cijelom svijetu. U Koprivnici je i tvornica Podravka. Podravka pravi začin Vegetu.',
  },
  Čakovec: {
    introHrA1:
      'Čakovec je grad na sjeveru Hrvatske. Grad je glavni grad Međimurja. Međimurje je između dvije rijeke, Mure i Drave. U Čakovcu je stari dvorac obitelji Zrinski. Danas je u dvorcu muzej. Čakovec je blizu Slovenije i Mađarske.',
  },
  Gospić: {
    introHrA1:
      'Gospić je glavni grad Like. Lika je planinski kraj u Hrvatskoj. Zimi tu pada mnogo snijega. Blizu Gospića je selo Smiljan. U Smiljanu je rođen Nikola Tesla. Lika je poznata po janjetini i krumpiru.',
  },
  Pag: {
    introHrA1:
      'Pag je otok u Dalmaciji. Otok je kamenit i gol, kao Mjesec. Na Pagu puše jaka bura. Na otoku ima više ovaca nego ljudi. Pag je poznat po siru i po čipki. Ljeti je na plaži Zrće velika zabava.',
  },
  Vis: {
    introHrA1:
      'Vis je otok daleko od kopna. Dugo je na otoku bila vojska. Turisti nisu smjeli doći. Zato je otok ostao miran i lijep. Na Visu ljudi love ribu. Otok ima dobro vino.',
  },
  Brač: {
    introHrA1:
      'Brač je veliki otok u Dalmaciji. Otok je poznat po bijelom kamenu. Od tog kamena su sagrađene mnoge zgrade u svijetu. Na Braču je plaža Zlatni rat. Plaža mijenja oblik. Na otoku raste mnogo maslina.',
  },
  'Slavonski Brod': {
    introHrA1:
      'Slavonski Brod je grad u Slavoniji, na rijeci Savi. Preko rijeke je Bosna. U gradu je velika stara tvrđava. Tvrđava je od cigle. Svake godine u gradu je festival narodnih plesova. Festival se zove Brodsko kolo.',
  },
  Samobor: {
    introHrA1:
      'Samobor je mali grad blizu Zagreba. Grad je star i miran. Samobor je poznat po kolaču kremšniti. Svake zime u Samoboru je karneval. Iznad grada su ruševine starog dvorca. Oko grada su brda za planinarenje.',
  },
  Požega: {
    introHrA1:
      'Požega je grad u Slavoniji. Grad je u dolini. Oko doline su brda i šume. Dolina se zove Zlatna dolina. Požega ima staru katedralu i samostan. Grad je poznat po kulturi i vinu. Ovdje raste dobro vino.',
  },
  Petrinja: {
    introHrA1:
      'Petrinja je grad u Hrvatskoj. Grad je na rijeci Kupi, u Baniji. Petrinja ima stari grad i tešku povijest. Grad pamti jak potres iz 2020. godine. Mnoge kuće su tada srušene. Ljudi danas obnavljaju grad. Petrinja je grad koji ne odustaje.',
  },
  Bjelovar: {
    introHrA1:
      'Bjelovar je grad u sjevernoj Hrvatskoj. Grad je star oko 270 godina. Ulice idu iz centra kao zvijezda s osam krakova. U centru su dvije velike crkve. Oko Bjelovara su sela i krave. Mlijeko i sir iz Bjelovara su poznati.',
  },
  Virovitica: {
    introHrA1:
      'Virovitica je miran grad u Podravini. U gradu je stari dvorac Pejačević. U dvorcu je danas muzej. Oko grada rastu vinogradi. Ljudi ovdje prave dobro vino. Iz Virovitice je poznata skladateljica Dora Pejačević. Grad ima bogatu kulturu.',
  },
  Labin: {
    introHrA1:
      'Labin je stari grad na brdu u Istri. Grad je star tri tisuće godina. Ispod Labina je more i mjesto Rabac. Nekada su u Labinu radili rudari. Godine 1921. rudari su se pobunili. Danas u Labinu žive mnogi umjetnici.',
  },
  Mostar: {
    introHrA1:
      'Mostar je grad u Hercegovini, u Bosni i Hercegovini. U gradu je poznati Stari most. Most je star. U ratu 1993. most je srušen. Godine 2004. most je opet sagrađen. Mladi ljudi skaču s mosta u rijeku Neretvu.',
  },
  Mljet: {
    introHrA1:
      'Mljet je otok na jugu Hrvatske. Otok je zelen i pun šume. Na Mljetu je nacionalni park. U parku su dva slana jezera. Na jednom jezeru je mali otok sa starim samostanom. Na otoku žive mungosi. Ljeti dolaze turisti.',
  },
  Omiš: {
    introHrA1:
      'Omiš je grad u Dalmaciji. Grad je na moru, gdje rijeka Cetina ulazi u more. Iznad grada su visoke stijene. Nekada su u Omišu živjeli gusari. Danas ljudi tu idu na rafting. U Omišu se pjeva klapa.',
  },
  'Biograd na Moru': {
    introHrA1:
      'Biograd na Moru je grad u Dalmaciji. Grad je na moru blizu Zadra. Biograd je stari kraljevski grad. Ovdje su nekad krunili hrvatske kraljeve. Danas je Biograd ljetovalište. Ima veliku marinu i puno brodova. Blizu grada je veliko jezero, Vransko jezero.',
  },
  Skradin: {
    introHrA1:
      'Skradin je mali stari grad u Dalmaciji. Grad je na rijeci Krki, blizu mora. Oko grada su brda. Skradin ima malu luku. Odavde idu brodovi u Nacionalni park Krka. U parku je veliki slap Skradinski buk. Ljeti dolazi mnogo turista.',
  },
  Cavtat: {
    introHrA1:
      'Cavtat je mali grad na moru. Grad je blizu Dubrovnika. Cavtat je na poluotoku. Oko grada su čempresi i more. Grad je vrlo star. Tu je rođen slikar Vlaho Bukovac.',
  },
  Primošten: {
    introHrA1:
      'Primošten je mali grad u Dalmaciji. Stari grad je na malom poluotoku. Nekad je Primošten bio otok. Danas ga most spaja s kopnom. Kuće su od kamena, a na vrhu je crkva. Oko grada su vinogradi. Ovdje raste vino babić.',
  },
  Vodice: {
    introHrA1:
      'Vodice su grad na moru u Dalmaciji. Grad je između Zadra i Šibenika. Vodice imaju duge plaže. Ljeti dolazi mnogo turista. Mnogi gosti su iz Češke, Slovačke i Njemačke. Oni dolaze svake godine. U centru je stara crkva.',
  },
  Tisno: {
    introHrA1:
      'Tisno je mali grad u Dalmaciji. Grad je na kopnu i na otoku Murteru. Između njih je uski morski prolaz. Preko prolaza ide most. Most se otvara za brodove. Ljeti su u Tisnom veliki festivali glazbe. Dolaze ljudi iz cijelog svijeta.',
  },
  Drniš: {
    introHrA1:
      'Drniš je mali grad u Dalmaciji. Grad nije na moru, nego u dolini rijeke Krke. Drniš je poznat po pršutu. Drniški pršut je jako dobar. Blizu Drniša je rođen kipar Ivan Meštrović. On je najveći hrvatski kipar. Blizu grada je i kanjon Čikole.',
  },
  Imotski: {
    introHrA1:
      'Imotski je grad u Dalmaciji, blizu granice s Hercegovinom. Grad je iznad dva jezera. Modro jezero je plavo i ljeti gotovo nestane. Crveno jezero je jako duboko. Imotski ima staru tvrđavu Topanu. Ljudi ovdje vole nogomet. Poznato je i slatko vino prošek.',
  },
  Metković: {
    introHrA1:
      'Metković je grad na jugu Dalmacije. Grad je na rijeci Neretvi. Oko grada je delta: voda, kanali i močvare. Ovdje živi mnogo ptica. Ljudi jedu jegulje i žabe. Blizu grada je rimski grad Narona. Ovaj kraj je drugačiji od ostale Dalmacije.',
  },
  Ploče: {
    introHrA1:
      'Ploče su grad i luka na jugu Dalmacije. Grad je na ušću rijeke Neretve. Luka je velika i moderna. Odavde ide željeznica u Sarajevo. Ploče su važna luka za Bosnu i Hercegovinu. Grad je nov, iz 1950-ih godina. Blizu grada su lijepa Baćinska jezera.',
  },
  Solin: {
    introHrA1:
      'Solin je mali grad blizu Splita. Pod gradom su ruševine starog rimskog grada Salone. Salona je bila velika i važna. Ovdje je živjelo 60.000 ljudi. Danas se vide amfiteatar i stare crkve. Blizu Solina je rođen car Dioklecijan.',
  },
  Klis: {
    introHrA1:
      'Klis je mali grad iznad Splita. Iznad grada je velika tvrđava na stijeni. Tvrđava čuva prolaz između mora i unutrašnjosti. Ovdje su se ljudi borili tisućama godina. S tvrđave se vidi Split, more i otoci. Tvrđava je poznata iz serije Igra prijestolja.',
  },
  Supetar: {
    introHrA1:
      'Supetar je najveći grad na otoku Braču. Ima veliku luku za trajekte. Trajekt iz Splita vozi oko 50 minuta. Grad je lijep i miran. Brač je poznat po bijelom kamenu. Od tog kamena je Dioklecijanova palača u Splitu.',
  },
  Bol: {
    introHrA1:
      'Bol je mali grad na jugu otoka Brača. Poznat je po plaži Zlatni rat. Plaža ima oblik roga i mijenja oblik. Ljudi je puno fotografiraju. U Bolu je stari samostan. Iznad grada je planina Vidova gora. Ljeti ovdje puše vjetar maestral.',
  },
  'Stari Grad': {
    introHrA1:
      'Stari Grad je grad na otoku Hvaru. Vrlo je star. Grci su ga osnovali 384. godine prije Krista. Tada se zvao Faros. Oko grada je ravnica s poljima i suhozidima. Ljudi tu rade zemlju već 2400 godina. U gradu je i Tvrdalj, kuća starog pjesnika.',
  },
  Ston: {
    introHrA1:
      'Ston je mali grad na poluotoku Pelješcu. Poznat je po dugim starim zidinama. Zidine su duge 5,5 kilometara. One spajaju Ston i Mali Ston. U Stonu se pravi sol već jako dugo. Ljudi tu uzgajaju kamenice i dagnje. Stonske kamenice su najbolje u Hrvatskoj.',
  },
  Orebić: {
    introHrA1:
      'Orebić je mjesto na poluotoku Pelješcu. Nalazi se točno preko puta otoka Korčule. Trajekt do Korčule vozi cijeli dan. Nekad su ovdje živjeli bogati kapetani brodova. Njihove lijepe kamene kuće još stoje uz more. Iznad mjesta je stari samostan. U brdima raste vino dingač.',
  },
  'Baška Voda': {
    introHrA1:
      'Baška Voda je malo mjesto na moru. Nalazi se na Makarskoj rivijeri. Iza mjesta je velika planina Biokovo. Planina je jako visoka i blizu mora. Mjesto ima dugu plažu i čisto more. Ljeti dolaze obitelji s djecom. Kroz mjesto prolazi Jadranska magistrala.',
  },
  Brela: {
    introHrA1:
      'Brela su malo mjesto na Makarskoj rivijeri. Imaju jednu od najljepših plaža na Mediteranu. Plaža je od šljunka. Uz plažu rastu stari borovi. More je jako čisto. U moru je mala stijena s jednim borom. Zove se Kamen Brela.',
  },
  Novigrad: {
    introHrA1:
      'Novigrad je mali grad na moru u Istri. Grad je na malom poluotoku i voda je gotovo svuda oko njega. Grad ima stare zidine i kule. U centru je katedrala svetog Pelagija. Novigrad je vrlo star. Više od tisuću godina ovdje je bio biskup.',
  },
  Umag: {
    introHrA1:
      'Umag je mali grad na moru u Istri. Grad ima stari centar sa zidinama. Umag je poznat po tenisu. Svakog srpnja ovdje je veliki teniski turnir. Tereni su zemljani i gledaju na more. Ovdje je igrao Goran Ivanišević. Turnir traje od 1990. godine.',
  },
  Motovun: {
    introHrA1:
      'Motovun je mali grad na brdu u Istri. Grad ima stare zidine. Ispod brda je rijeka Mirna i šuma. U šumi rastu tartufi. Tartufi su vrlo skupi. Svako ljeto u Motovunu je filmski festival.',
  },
  Grožnjan: {
    introHrA1:
      'Grožnjan je malo selo na brdu u Istri. Nekad je selo bilo gotovo prazno. Ljudi su otišli nakon rata. Onda su prazne kuće dobili umjetnici. Danas u selu žive slikari, kipari i glazbenici. U svakoj kući je galerija ili radionica.',
  },
  Buzet: {
    introHrA1:
      'Buzet je mali grad na brdu u Istri. Nalazi se u dolini rijeke Mirne. Buzet je grad tartufa. Tartufi rastu pod zemljom. Ljudi ih traže od listopada do prosinca. Svake godine je u Buzetu festival tartufa. Tada se pravi golemi omlet s tartufima.',
  },
  Pazin: {
    introHrA1:
      'Pazin je grad u Istri. To je glavni grad Istarske županije. U gradu je stari dvorac, kaštel. Pod dvorcem je duboka jama. U jamu ulazi potok i nestaje pod zemljom. Voda izlazi opet blizu Pule. Pisac Jules Verne pisao je o toj jami.',
  },
  Vodnjan: {
    introHrA1:
      'Vodnjan je mali grad u Istri. Oko grada rastu masline. Maslinovo ulje iz Vodnjana je vrlo dobro. U crkvi svetog Blaža je nešto neobično. Tu su tri stara tijela svetaca. Tijela su stara 600 godina, ali nisu istrunula. Nitko ne zna zašto.',
  },
  Roč: {
    introHrA1:
      'Roč je malo selo u Istri, pod planinom Učkom. U selu živi manje od 200 ljudi. Od Roča do Huma vodi Aleja glagoljaša. Na putu je 11 kamenih spomenika. Oni slave staro hrvatsko pismo, glagoljicu. U Roču je svake godine festival harmonike.',
  },
  Hum: {
    introHrA1:
      'Hum je najmanji grad na svijetu. U Humu živi samo 20 do 30 ljudi. Ali Hum ima zidine, crkvu i gradonačelnika. Grad je u Istri, na kraju Aleje glagoljaša. U staroj crkvi su rijetke freske. U Humu se pravi biska, rakija od imele.',
  },
  Crikvenica: {
    introHrA1:
      'Crikvenica je grad na moru u Kvarneru. To je staro ljetovalište. Ljudi ovamo dolaze već više od sto godina. Gosti dolaze iz Austrije, Mađarske i Češke. Grad ima duge plaže i topao zaljev. Uz more stoje stare vile. Ovdje treniraju i hrvatski sportaši.',
  },
  'Novi Vinodolski': {
    introHrA1:
      'Novi Vinodolski je stari grad na brdu iznad mora. Grad je poznat po Vinodolskom zakoniku. To je stari zakon iz 1288. godine. Zakon je napisan na hrvatskom jeziku. Napisan je glagoljicom, starim hrvatskim pismom. Stari grad ima uske ulice iz srednjeg vijeka.',
  },
  Senj: {
    introHrA1:
      'Senj je grad na moru pod planinom Velebit. U Senju puše vrlo jak vjetar, bura. Iznad grada je tvrđava Nehaj. Nekada su u Senju živjeli ratnici uskoci. Oni su napadali turske i mletačke brodove. Ljeti je more u Senju hladno i čisto.',
  },
  Krk: {
    introHrA1:
      'Krk je najveći hrvatski otok. Otok je spojen s kopnom mostom. Grad Krk je star i ima zidine. Na otoku je pronađena Bašćanska ploča. To je najstariji tekst na hrvatskom jeziku. Na Krku je i zračna luka.',
  },
  Rab: {
    introHrA1:
      'Rab je otok i grad u Kvarneru. Grad Rab ima četiri zvonika. Zvonici se vide s mora. Grad je star i ima uske ulice. Otok ima lijepe plaže s pijeskom. Ljeti dolazi mnogo turista.',
  },
  'Mali Lošinj': {
    introHrA1:
      'Mali Lošinj je grad na otoku Lošinju. Grad je na moru, u velikoj luci. Kuće u luci su šarene. Na otoku raste mnogo mirisnog bilja. U moru blizu otoka žive dupini. Zrak na Lošinju je vrlo zdrav.',
  },
  Cres: {
    introHrA1:
      'Cres je veliki otok u Kvarneru. Na otoku živi malo ljudi. Na Cresu žive bjeloglavi supovi, velike ptice. To je jedino mjesto u Hrvatskoj gdje se gnijezde. Na otoku je Vransko jezero. Voda u jezeru je slatka. Na Cres se dolazi trajektom.',
  },
  Lovran: {
    introHrA1:
      'Lovran je malo mjesto na moru blizu Opatije. Ime dolazi od drveta lovora. U Lovranu je klima blaga i topla. Ovdje rastu biljke s juga. Iznad mjesta je planina Učka. Ona štiti Lovran od hladnog vjetra. Ovdje se slavi i festival kestena.',
  },
  'Velika Gorica': {
    introHrA1:
      'Velika Gorica je grad blizu Zagreba. To je najveći grad u Zagrebačkoj županiji. U Velikoj Gorici je zagrebačka zračna luka. Grad je u ravnici Turopolje. U Turopolju su stare hrastove šume. Tu živi i posebna svinja, turopoljska svinja. U proljeće na kućama žive rode.',
  },
  Jastrebarsko: {
    introHrA1:
      'Jastrebarsko je mali grad blizu Zagreba. Ljudi ga zovu Jaska. Oko grada su brda Plešivica. Na brdima rastu vinogradi. Ovdje se pravi dobro bijelo vino. Kroz vinograde vodi vinska cesta. U gradu je stari dvorac obitelji Erdödy. Ljudi iz Zagreba dolaze ovamo za vikend.',
  },
  Zaprešić: {
    introHrA1:
      'Zaprešić je grad sjeverozapadno od Zagreba, na rijeci Savi. To je predgrađe glavnog grada. Grad je poznat po nogometnom klubu Inter Zaprešić. Blizu grada je lijepi stari dvorac Januševec. Uz Savu su jezera i močvare. Tamo živi mnogo ptica.',
  },
  Krapina: {
    introHrA1:
      'Krapina je grad u Hrvatskom zagorju. Grad je blizu Zagreba. U Krapini su pronađene kosti neandertalaca. Kosti su stare 130 tisuća godina. U gradu je veliki muzej o neandertalcima. Muzej je vrlo moderan.',
  },
  'Marija Bistrica': {
    introHrA1:
      'Marija Bistrica je malo mjesto u Zagorju. To je najvažnije mjesto za hodočašće u Hrvatskoj. Svake godine dolazi više od milijun ljudi. Oni dolaze vidjeti kip Crne Gospe. Papa Ivan Pavao II. bio je ovdje 1998. godine. Na brdu je i križni put.',
  },
  Kumrovec: {
    introHrA1:
      'Kumrovec je malo selo u Zagorju. Ovdje je rođen Josip Broz Tito. Tito je bio vođa Jugoslavije od 1945. do 1980. godine. Selo je danas muzej na otvorenom. Kuće izgledaju kao nekad. Ispred Titove rodne kuće stoji njegov kip od bronce.',
  },
  Klanjec: {
    introHrA1:
      'Klanjec je mali grad u Zagorju. Grad je na rijeci Sutli. Rijeka je granica između Hrvatske i Slovenije. U Klanjcu je rođen kipar Antun Augustinčić. Njegov kip Mir stoji ispred zgrade UN-a u New Yorku. U Klanjcu je galerija s njegovim djelima.',
  },
  Pregrada: {
    introHrA1:
      'Pregrada je mali grad u Zagorju. Grad je blizu granice sa Slovenijom. Oko grada su brežuljci i vinogradi. Ljudi ovdje prave vino. Blizu su Terme Tuhelj. Tamo je topla voda. Ljudi dolaze na kupanje i odmor, ljeti i zimi.',
  },
  'Donja Stubica': {
    introHrA1:
      'Donja Stubica je mali grad u Zagorju. Grad je poznat zbog povijesti. Godine 1573. tu je bila velika seljačka buna. Vođa je bio Matija Gubec. On je i danas narodni junak. Blizu grada su Stubičke Toplice. Tamo ljudi dolaze na kupanje.',
  },
  Đurđevac: {
    introHrA1:
      'Đurđevac je grad u Podravini. Oko grada su polja: pšenica, kukuruz i paprika. U gradu je stara utvrda. Ljudi ovdje imaju legendu o pijetlu i topu. Zato se zovu Picoki. Svake godine imaju festival. Festival se zove Picokijada.',
  },
  Ludbreg: {
    introHrA1:
      'Ludbreg je mali grad u Podravini. Ljudi kažu da je Ludbreg središte svijeta. U gradu je poznato svetište. Tamo dolaze hodočasnici iz cijele Hrvatske. U gradu je i stari dvorac. U dvorcu je radionica. Ljudi tamo popravljaju stare tapiserije.',
  },
  Lepoglava: {
    introHrA1:
      'Lepoglava je grad u Zagorju. Poznat je zbog dvije stvari. Prva je čipka. Žene rade lijepu čipku rukama. Druga je veliki zatvor. U gradu je i stari samostan. Samostan je iz 1400. godine. Tu je bila prva hrvatska gimnazija.',
  },
  'Nova Gradiška': {
    introHrA1:
      'Nova Gradiška je grad u Slavoniji. Grad je nov: ljudi su ga gradili 1748. godine. Ulice su ravne. U sredini je trg. Blizu grada je planina Psunj. Psunj je najviša planina u Slavoniji. Ima puno šume. Blizu je i stariji grad, Stara Gradiška.',
  },
  Županja: {
    introHrA1:
      'Županja je grad u Slavoniji. Grad je na rijeci Savi. Ljudi ovdje vole glazbu. Sviraju tamburicu. Žene rade lijepi vez. Nošnje su vrlo bogate. Svake godine ima festival folklora. Rat 1991. godine bio je blizu grada.',
  },
  Pakrac: {
    introHrA1:
      'Pakrac je grad u zapadnoj Slavoniji. Blizu je grad Lipik. Oba grada imaju toplice. Voda je topla. U ratu 1991. godine gradovi su bili jako oštećeni. Sada ih ljudi obnavljaju. Iznad grada je planina Papuk. Papuk je park prirode.',
  },
  Našice: {
    introHrA1:
      'Našice su mali grad u Slavoniji. U gradu je lijepi dvorac. Dvorac je obitelji Pejačević. Danas je u dvorcu muzej. Tu je rođena Dora Pejačević. Ona je bila skladateljica. Pisala je glazbu za orkestar. Kraj ima i dobro vino.',
  },
  Otočac: {
    introHrA1:
      'Otočac je grad u Lici. Grad je u dolini rijeke Gacke. Voda u rijeci je vrlo čista i hladna. U rijeci žive velike pastrve. Ribari dolaze iz cijele Europe. Blizu su Plitvice i Velebit. Ljudi ovdje jedu dobru janjetinu.',
  },
  Ogulin: {
    introHrA1:
      'Ogulin je grad u Gorskom kotaru. Grad je među planinama i šumama. U Ogulinu je rođena spisateljica Ivana Brlić-Mažuranić. Ona je pisala bajke za djecu. Svake godine u Ogulinu je festival bajki. Blizu grada je planina Klek.',
  },
  Slunj: {
    introHrA1:
      'Slunj je grad u srednjoj Hrvatskoj. Blizu grada je selo Rastoke. Tamo rijeka teče kroz selo. Ima puno malih slapova. Kuće i mlinovi su na vodi. Neki mlinovi su stari 400 godina. Ljudi tu jedu pored slapa. Voda je zelena i čista.',
  },
  Sisak: {
    introHrA1:
      'Sisak je grad u srednjoj Hrvatskoj. Grad je na tri rijeke: Savi, Kupi i Odri. Sisak je vrlo star grad. Godine 1593. kod Siska je bila velika bitka. Hrvati su pobijedili Turke. U gradu je stara tvrđava od cigle.',
  },
  Popovača: {
    introHrA1:
      'Popovača je grad u Moslavini. Moslavina je ravna zemlja. Ljudi tu rade na polju. Ima puno pšenice, suncokreta i kukuruza. Blizu je brdo Moslavačka gora. Na brdu su vinogradi. Kroz grad ide željeznica. Vlak vozi u Zagreb i u Slavoniju.',
  },
  Trilj: {
    introHrA1:
      'Trilj je mali grad u Dalmaciji. Grad je na rijeci Cetini. Rijeka je blizu Splita. Ljudi tu vole konje. Konji su stara tradicija. Na rijeci ljudi voze kajak i rafting. Ljudi čuvaju stare nošnje i pjesme. Blizu je grad Sinj.',
  },
  Vrgorac: {
    introHrA1:
      'Vrgorac je mali grad u Dalmaciji. Grad nije na moru. Grad je u polju. Oko polja su kamena brda. Blizu je granica s Hercegovinom. Ljudi tu prave vino. Grožđe se zove Kujundžuša. Vino je zlatno i mirisno. Ima i smokava i maslina.',
  },
  'Vela Luka': {
    introHrA1:
      'Vela Luka je grad na otoku Korčuli. Grad je u dugoj i mirnoj uvali. More je tiho. Tu dolaze ljudi s brodicama. Oko grada su masline. Ljudi prave bijelo vino Pošip. Iznad grada je stara špilja. Zove se Vela spila.',
  },
  Lastovo: {
    introHrA1:
      'Lastovo je otok na jugu Hrvatske. Otok je daleko od obale. Nema puno ljudi. Ima malo auta. Noću je nebo vrlo tamno. Ljudi gledaju zvijezde. Priroda je čista. Zimi ima veliki karneval. Karneval se zove Poklad.',
  },
  Jelsa: {
    introHrA1:
      'Jelsa je mali grad na otoku Hvaru. Grad je na sjevernoj obali otoka. Oko grada su polja lavande i vinogradi. Lavanda lijepo miriše. U lipnju su polja ljubičasta. Grad je miran. Ima stare zidine i utvrdu. Ljudi tu love ribu.',
  },
  Komiža: {
    introHrA1:
      'Komiža je mali grad na otoku Visu. Grad je na zapadnoj obali otoka. Ljudi tu love ribu. Love srdele. Imaju stare drvene brodice. Luka je šarena. Blizu je otok Biševo. Tamo je Modra špilja. Voda u špilji je plava.',
  },
  Blato: {
    introHrA1:
      'Blato je grad na otoku Korčuli. Grad je u sredini otoka. Nije na moru. Oko grada su masline i vinogradi. Ljudi tu prave maslinovo ulje. U centru je duga aleja lipa. Ljudi plešu stari ples s mačevima. Ples se zove kumpanjija.',
  },
  Stolac: {
    introHrA1:
      'Stolac je mali grad u Hercegovini. Grad je na rijeci Bregavi. Ljudi tu žive vrlo dugo, tri tisuće godina. Iznad grada je stara utvrda. Ima i stari most i stare kuće. Blizu grada su stećci. To su stari kameni grobovi.',
  },
  Čapljina: {
    introHrA1:
      'Čapljina je grad u Hercegovini. Grad je na rijeci Neretvi. Blizu je Hutovo blato. To je velika močvara. Tamo živi puno ptica. Ima više od 240 vrsta. Voda se zimi ne ledi. Ljudi tu jedu jegulje, žabe i šarane.',
  },
  Ljubuški: {
    introHrA1:
      'Ljubuški je grad u Hercegovini. Grad je na rijeci Trebižat. Iznad grada je stara tvrđava na stijeni. Oko grada su vinogradi. Ljudi prave bijelo vino Žilavku i crno vino Blatinu. Blizu su slapovi Kravica. Ljeti se ljudi tamo kupaju.',
  },
  Međugorje: {
    introHrA1:
      'Međugorje je malo selo u Hercegovini. Godine 1981. šestero djece reklo je da vidi Gospu. Od tada u Međugorje dolaze hodočasnici iz cijelog svijeta. Svake godine dolaze milijuni ljudi. Oko sela su brda i vinogradi. Ljudi se penju na brdo Podbrdo i mole.',
  },
  Čitluk: {
    introHrA1:
      'Čitluk je mjesto u Hercegovini. Blizu je Međugorje. Oko Čitluka su vinogradi. Zemlja je kamena. Ljudi prave vino. Grožđe se zove Žilavka i Blatina. U Čitluku je velika vinarija. Zove se Hercegovina vino. Vinarija ima puno nagrada.',
  },
  Livno: {
    introHrA1:
      'Livno je grad u zapadnoj Bosni. Grad je na velikom ravnom polju. Polje se zove Livanjsko polje. Na polju pasu ovce. Od ovčjeg mlijeka pravi se livanjski sir. Sir je poznat u cijeloj Europi.',
  },
  Neum: {
    introHrA1:
      'Neum je grad u Bosni i Hercegovini. Grad je na moru. To je jedini grad na moru u toj zemlji. Obala je duga 24 kilometra. Oko Neuma je Hrvatska. Ljudi tu kupuju cigarete i alkohol. Jeftinije je nego u Hrvatskoj.',
  },
  Tomislavgrad: {
    introHrA1:
      'Tomislavgrad je grad u Bosni i Hercegovini. Grad je u velikom polju. Polje se zove Duvanjsko polje. Stari naziv grada je Duvno. Grad ima ime po kralju Tomislavu. On je bio prvi hrvatski kralj. Tu žive većinom Hrvati.',
  },
  Kupres: {
    introHrA1:
      'Kupres je grad u Bosni i Hercegovini. Grad je visoko, na 1100 metara. Oko grada su livade i planine. Ljudi imaju krave. Prave kajmak. Kajmak se jede s kruhom. Zimi ljudi skijaju. Svake godine je veliki sajam stoke.',
  },
  Tučepi: {
    introHrA1:
      'Tučepi su mjesto na moru. Mjesto je na Makarskoj rivijeri. Iza plaže je velika planina Biokovo. Planina je vrlo visoka. Plaža je duga i ima šljunak. More je čisto. Gore na brdu je staro selo s kamenim kućama.',
  },
  Gradac: {
    introHrA1:
      'Gradac je mjesto na moru. To je zadnje mjesto na Makarskoj rivijeri. Tu cesta ide dalje u Hercegovinu. Gradac ima dugu plažu. Plaža je duga šest kilometara. Uz plažu je borova šuma. Šuma daje hlad. Dolaze obitelji s djecom.',
  },
  Šolta: {
    introHrA1:
      'Šolta je otok blizu Splita. To je najbliži otok gradu. Brod vozi 45 minuta. Otok je miran. Ima puno maslina. Ljudi prave dobro maslinovo ulje. Ima i pčela i meda. Od meda prave medovinu. Uvale su tihe.',
  },
  Lopud: {
    introHrA1:
      'Lopud je mali otok blizu Dubrovnika. Na otoku nema auta. Ljudi hodaju. Ima plažu s pijeskom. Plaža se zove Šunj. Na otoku je puno crkava. Ima ih više od trideset. Ima i stare palače i vrtove.',
  },
  Šipan: {
    introHrA1:
      'Šipan je otok blizu Dubrovnika. To je najveći otok Elafita. Otok je miran. Ima dva sela: Šipanska Luka i Suđurađ. Na otoku su stare ljetne palače. Ima masline i vinograde. More je vrlo čisto. Brod iz Dubrovnika vozi 75 minuta.',
  },
  Koločep: {
    introHrA1:
      'Koločep je mali otok blizu Dubrovnika. Brod vozi trideset minuta. Otok ima dva mala sela. Tu živi malo ljudi. Na otoku rastu limuni, smokve i agave. More je vrlo čisto. Ljudi su nekad vadili crveni koralj iz mora.',
  },
  Pelješac: {
    introHrA1:
      'Pelješac je dug poluotok. On je sjeverno od Dubrovnika. Na poluotoku su vinogradi. Vinogradi su na strmom brdu, blizu mora. Grožđe se zove plavac mali. Ljudi prave crno vino Dingač. Od 2022. godine ima veliki most do kopna.',
  },
  Ivanec: {
    introHrA1:
      'Ivanec je mali grad u sjevernoj Hrvatskoj. Grad je u brdima. Iznad grada je planina Ivanščica. Visoka je 1060 metara. To je najviši vrh Zagorja. Ljudi rado idu na planinu. U gradu je stari dvorac. Ljudi prave rakiju od šljiva i krušaka.',
  },
  'Novi Marof': {
    introHrA1:
      'Novi Marof je mali grad u sjevernoj Hrvatskoj. Grad je između Zagreba i Varaždina. Oko grada su brda i vinogradi. Ljudi prave bijelo vino. Grožđe se zove šipon. Podrumi su u brdu. U listopadu je berba grožđa.',
  },
  Vinica: {
    introHrA1:
      'Vinica je mali grad blizu Varaždina. U gradu je veliki barokni dvorac. Dvorac je obitelji Erdödy. Ta obitelj je bila vrlo moćna. Oko dvorca je stari park. Danas je u dvorcu muzej. Ljudi tu imaju stare nošnje s lijepim vezom.',
  },
  Zlatar: {
    introHrA1:
      'Zlatar je mali grad u Zagorju. Ime grada znači zlatar, čovjek koji radi zlato. Grad je u dolini rijeke Krapine. Na brdu je crkva svete Marije. Tamo dolaze hodočasnici. Ljudi vole staru glazbu. Blizu je Zlatar Bistrica s toplicama.',
  },
  Valpovo: {
    introHrA1:
      'Valpovo je grad u Slavoniji. Grad je blizu rijeke Drave. U gradu je veliki barokni dvorac. Dvorac ima četiri tornja. Oko dvorca je voda. Danas je u dvorcu muzej. Oko grada su polja kukuruza i suncokreta. Ima i vinograda.',
  },
  Belišće: {
    introHrA1:
      'Belišće je mali grad u Slavoniji. Grad je na rijeci Dravi. Grad je nov. Ljudi su ga gradili 1884. godine. Gradila ga je obitelj Gutmann. Imali su tvornicu za drvo. U šumama raste hrast. Hrast je vrlo dobar za bačve.',
  },
  Orahovica: {
    introHrA1:
      'Orahovica je mali grad u Slavoniji. Grad je pod planinom Papuk. Iznad grada je stara tvrđava. Zove se Ružica grad. Danas su to ruševine. Ljudi idu tamo pješice. Papuk je park prirode. Blizu je lijepi kanjon Jankovac.',
  },
  Knin: {
    introHrA1:
      'Knin je grad u Dalmaciji. Grad nije na moru, nego u unutrašnjosti. Iznad grada je velika stara tvrđava. Tvrđava je jedna od najvećih u Hrvatskoj. Knin je stari grad hrvatskih kraljeva. Peti kolovoza je važan dan za Knin i za Hrvatsku.',
  },
  Opuzen: {
    introHrA1:
      'Opuzen je mali grad na jugu Dalmacije. Grad je u delti rijeke Neretve. Oko grada su polja, kanali i voćnjaci. Tu rastu poznate mandarine. Ljudi beru mandarine u jesen. U studenom je u Opuzenu veliki festival mandarina.',
  },
  Vranjic: {
    introHrA1:
      'Vranjic je malo mjesto blizu Splita. Nekad je bio otok, a danas je poluotok. Ljudi tu žive od ribolova. Mjesto je mirno i staro. Ima malu crkvu svetog Martina. Vranjic je blizu velikog grada, ali izgleda kao selo.',
  },
  'Kaštel Stari': {
    introHrA1:
      'Kaštel Stari je mjesto na moru između Splita i Trogira. To je najstariji od sedam Kaštela. Kaštel je mala tvrđava. Stari kaštel je iz 15. stoljeća. Ljudi su nekad bježali u kaštel od Osmanlija. Danas je tu poznata kaštelanska jagoda.',
  },
  'Kaštel Lukšić': {
    introHrA1:
      'Kaštel Lukšić je jedno od sedam Kaštela blizu Splita. U mjestu je stari dvorac Vitturi. Oko dvorca je voda, a oko mjesta su vinogradi. Tu je i muzej o svih sedam Kaštela. S obale se vide Split i Trogir.',
  },
  Pučišća: {
    introHrA1:
      'Pučišća su selo na otoku Braču. Selo je na sjevernoj obali otoka. Ljudi ovdje rade s kamenom. Brački kamen je bijel i tvrd. U Pučišćima je jedina klesarska škola u Hrvatskoj. Od bračkog kamena su stare palače u Splitu i Bijela kuća u Washingtonu.',
  },
  Vrboska: {
    introHrA1:
      'Vrboska je malo selo na otoku Hvaru. Kroz selo ide kanal s kamenim mostovima. Zato ljudi zovu Vrbosku Mala Venecija. U selu je stara crkva s debelim zidovima. Ljudi tu žive od ribolova i vina. Iznad sela su vinogradi.',
  },
  Baška: {
    introHrA1:
      'Baška je mjesto na otoku Krku. Ima dugu plažu od kamenčića. Plaža je duga skoro dva kilometra. Baška je poznata i po staroj kamenoj ploči. Ploča je iz 1102. godine. Na njoj je star hrvatski tekst. Ljudi dolaze vidjeti plažu i ploču.',
  },
  Malinska: {
    introHrA1:
      'Malinska je mjesto na otoku Krku. Mjesto je u lijepoj uvali na zapadnoj obali. Oko plaža je gusta borova šuma. Šuma daje hlad ljeti. More je plitko i dobro za djecu. Obitelji rado dolaze u Malinsku. Krčki most je blizu.',
  },
  Vrbnik: {
    introHrA1:
      'Vrbnik je staro selo na otoku Krku. Selo je na visokoj stijeni iznad mora. Ulice su uske i kamene. Jedna ulica je tako uska da jedva prolazi jedan čovjek. Oko Vrbnika su vinogradi. Tu raste žlahtina, bijelo vino koje raste samo ovdje.',
  },
  Novalja: {
    introHrA1:
      'Novalja je mali grad na otoku Pagu. Blizu grada je plaža Zrće. Ljeti su na plaži veliki klubovi i glazba. Mladi ljudi dolaze iz cijele Europe. Otok Pag je poznat i po siru i po čipki. Pod gradom je stari rimski tunel za vodu.',
  },
  Podgora: {
    introHrA1:
      'Podgora je malo mjesto na Makarskoj rivijeri. Ima lijepu plažu i mirno more. Iznad mjesta je visoka planina Biokovo. U Podgori stoji veliki betonski spomenik. Spomenik se zove Galeb. On je iz vremena Drugog svjetskog rata. Obitelji rado dolaze ovamo ljeti.',
  },
  Drvenik: {
    introHrA1:
      'Drvenik je malo selo na moru južno od Makarske. Ovdje završava Makarska rivijera. Iz Drvenika idu trajekti na otok Hvar i na Pelješac. Iza sela je visoka planina Biokovo. Selo ima dvije male luke za brodove. U konobi ljudi jedu ribu i janjetinu.',
  },
  Slano: {
    introHrA1:
      'Slano je malo selo sjeverno od Dubrovnika. Selo je na kraju duboke uvale. More je tu mirno i sigurno za brodove. Ovdje počinje Dubrovačka rivijera. Oko sela rastu smokve i masline. Slano je tiho mjesto, daleko od gužve u gradu.',
  },
  Trpanj: {
    introHrA1:
      'Trpanj je mali grad na poluotoku Pelješcu. Grad je na sjevernoj obali, okrenut prema rijeci Neretvi. Iz Trpnja vozi trajekt do Ploča na kopnu. Luka je mirna i sigurna. Na brdima oko grada rastu vinogradi. Ljudi dolaze ovamo brodom i uživaju u tišini.',
  },
  Janjina: {
    introHrA1:
      'Janjina je malo selo na poluotoku Pelješcu. Selo je na brdu, visoko iznad mora. Oko sela su vinogradi i stabla maslina. Ovdje raste crno vino plavac mali. S brda se vidi more na dvije strane. Kad je dan vedar, vidi se daleko.',
  },
  'Mali Ston': {
    introHrA1:
      'Mali Ston je vrlo malo mjesto na jugu Dalmacije. Stari kameni zid spaja Mali Ston i Ston. Mjesto je na moru, u uskom kanalu. U kanalu ljudi uzgajaju kamenice i dagnje. Kamenice iz Malog Stona su najbolje u Hrvatskoj. Ljudi ih jedu sirove, s limunom.',
  },
  Vrlika: {
    introHrA1:
      'Vrlika je mali grad u Dalmaciji, ali nije na moru. Grad je blizu izvora rijeke Cetine. Izvor izlazi iz pećine u planini. Blizu grada je veliko Peručko jezero. Ljudi ovdje pjevaju na poseban, star način. Taj način pjevanja zove se ojkanje.',
  },
  Bale: {
    introHrA1:
      'Bale su malo selo na brdu u južnoj Istri. Selo je staro i nije se mijenjalo. Ulice idu u krug oko glavnog trga. U sredini sela je stari dvorac s kulom. U selu živi manje od tisuću ljudi. Ljeti tu ima mnogo kulturnih događaja.',
  },
  Svetvinčenat: {
    introHrA1:
      'Svetvinčenat je malo mjesto u Istri. Ima jedan od najljepših trgova u Hrvatskoj. Na trgu je veliki stari dvorac i crkva. Dvorac je iz 15. stoljeća. Svako ljeto tu je festival književnosti. Mjesto je mirno i lijepo, a ljudi dolaze vidjeti trg.',
  },
  Barban: {
    introHrA1:
      'Barban je mali grad u Istri. Grad je na brdu iznad doline rijeke Raše. Iznad grada je stari dvorac. Barban je poznat po utrci na konjima. Utrka se zove Trka na prstenac. Jahači jašu brzo i kopljem pogađaju mali prsten. Utrka postoji od 1696. godine.',
  },
  Žminj: {
    introHrA1:
      'Žminj je malo selo u sredini Istre. Ljudi ovdje govore starim hrvatskim narječjem. To narječje se zove čakavski. Kuće su od kamena i imaju posebne krovove. Oko sela su vinogradi. Tu raste crno vino teran. Svake godine tu je nagrada za pisce.',
  },
  Kanfanar: {
    introHrA1:
      'Kanfanar je malo selo u sredini Istre. Selo je na brdima, među vinogradima i šumama. Zemlja je ovdje crvena. Kroz Kanfanar prolaze biciklističke staze. Jedna staza ide starom prugom od Trsta do Poreča. Po poljima stoje male kamene kućice bez krova od crijepa.',
  },
  Pičan: {
    introHrA1:
      'Pičan je vrlo malo selo na brdu u sredini Istre. U selu živi manje od sto ljudi. Ali u selu stoji velika katedrala. Pičan je nekad bio sjedište biskupa. Biskupi su tu bili od 4. stoljeća. S brda se vide vinogradi.',
  },
  'Beli Manastir': {
    introHrA1:
      'Beli Manastir je glavni grad Baranje. Baranja je ravna i plodna zemlja između rijeka Drave i Dunava. Blizu je granica s Mađarskom. Ovdje ljudi rade vino i kulen. U gradu žive i Mađari. Natpisi su na hrvatskom i na mađarskom jeziku.',
  },
  Batina: {
    introHrA1:
      'Batina je malo selo u Baranji, na rijeci Dunavu. Preko rijeke je Mađarska. U studenom 1944. tu je bila velika bitka. Vojnici su prelazili Dunav, a mnogi su poginuli. Na visokoj obali stoji veliki brončani spomenik. Spomenik se vidi izdaleka, čak iz Mađarske.',
  },
  'Donji Miholjac': {
    introHrA1:
      'Donji Miholjac je mali grad u Slavoniji. Grad je na rijeci Dravi. Na drugoj strani rijeke je Mađarska. Rijeka je granica između dvije zemlje. Ljudi ovdje love ribu u Dravi. Oko grada su močvare i šume s mnogo ptica. U brdima raste bijelo vino graševina.',
  },
  Slatina: {
    introHrA1:
      'Slatina je grad u zapadnoj Slavoniji. Grad je ispod brda Bilogore. Ime grada dolazi od riječi slana, jer je ovdje slana voda u zemlji. Na brdima rastu vinogradi. Ljudi iz okolnih sela dolaze u Slatinu na tržnicu. Grad je glavni grad svoje županije.',
  },
  Kutina: {
    introHrA1:
      'Kutina je grad u Moslavini, u sredini Hrvatske. Kutina je poznata po prirodnom plinu. Ljudi su ga našli u pedesetim godinama. Plin iz Kutine grije mnoge kuće u Hrvatskoj. Na brdima oko grada rastu vinogradi. U gradu su i ruševine stare tvrđave.',
  },
  Novska: {
    introHrA1:
      'Novska je mali grad blizu rijeke Save. Iz Novske se ide u Park prirode Lonjsko polje. To je veliko močvarno područje. Ovdje živi mnogo bijelih roda. Stare drvene kuće stoje na visokim temeljima. Ljudi dolaze gledati ptice i stara sela.',
  },
  Lipik: {
    introHrA1:
      'Lipik je mali grad u zapadnoj Slavoniji. Grad je poznat po toploj ljekovitoj vodi. U Lipiku žive i posebni bijeli konji, lipicanci. Mali lipicanci su tamni, a bijeli postaju tek kad odrastu. U ratu 1991. grad je bio jako oštećen, ali je obnovljen.',
  },
  Zabok: {
    introHrA1:
      'Zabok je najveći grad u Hrvatskom zagorju. Zagorje je brdovit kraj sjeverno od Zagreba. Ljudi iz sela dolaze u Zabok u trgovine i k liječniku. Svaki tjedan je tu veliki sajam. Kroz Zabok ide autocesta prema Zagrebu. U restoranima se jedu štrukli i kremšnita.',
  },
  'Sveti Ivan Zelina': {
    introHrA1:
      'Sveti Ivan Zelina je mali grad istočno od Zagreba. Grad je među brdima. Na brdima su vinogradi. Ovdje ljudi rade dobro bijelo vino. Jedna sorta grožđa raste samo tu i zove se zelenjak. Do Zagreba se stiže za pola sata.',
  },
  'Dugo Selo': {
    introHrA1:
      'Dugo Selo je grad odmah istočno od Zagreba. Grad je u ravnici uz rijeku Savu. Ime znači dugo selo, jer su kuće stajale duž jedne duge ulice. Ovdje ljudi žive već tri tisuće godina. Odavde počinje biciklistička staza kroz Turopolje.',
  },
  'Sveta Nedjelja': {
    introHrA1:
      'Sveta Nedjelja je mali grad zapadno od Zagreba. Grad je ispod brda Plešivice. Na brdima su vinogradi. Ovdje se rade neka od najboljih bijelih vina u Hrvatskoj. Jedna vinarija radi i pjenušac. Vinska cesta je samo dvadeset kilometara od Zagreba.',
  },
  Grude: {
    introHrA1:
      'Grude su mali grad u zapadnoj Hercegovini. Tu žive gotovo samo Hrvati katolici. Kraj je u dolini koja nosi ime hercega Stjepana Kosače. Kuće su od kamena i vrlo su stare. U kraju su važni franjevci. Oni su ovdje već stotine godina.',
  },
  Posušje: {
    introHrA1:
      'Posušje je mali grad u zapadnoj Hercegovini. Grad je na visokoj kamenitoj zaravni. Zemlja je ovdje siromašna, a ljudi su dugo sadili duhan. Kuće i zidovi su od kamena, bez cementa. Iznad grada je planina Zavelim. Ljudi tamo idu pješačiti.',
  },
  'Prozor-Rama': {
    introHrA1:
      'Prozor-Rama je grad u Hercegovini. Blizu grada je veliko jezero, Ramsko jezero. Jezero je umjetno i vrlo je lijepo. Ima tirkiznu boju, a oko njega su planine. Pod jezerom je staro selo Rama. Ljudi su selo napustili 1968. godine. Tu je i stari franjevački samostan.',
  },
  Jablanica: {
    introHrA1:
      'Jablanica je mali grad u Hercegovini, na rijeci Neretvi. U gradu stoji srušeni stari most. Most je srušen u ratu 1943. godine i nikad nije popravljen. Danas je to spomenik. Jablanica je poznata i po janjetini. Ljudi na putu prema moru stanu tu jesti.',
  },
  Trebinje: {
    introHrA1:
      'Trebinje je grad na jugu Bosne i Hercegovine. Klima je tu blaga, gotovo kao na moru. U starom gradu rastu visoka stabla platana. Blizu grada je stari kameni most preko rijeke. Ovdje raste crno vino vranac. Mnogo turista iz Hrvatske dolazi u Trebinje.',
  },
  Zlarin: {
    introHrA1:
      'Zlarin je mali otok blizu Šibenika. Na otoku nema automobila. Ljudi dolaze brodom iz Šibenika. Otok je poznat po crvenom koralju. Ljudi tu rade nakit od koralja. More oko otoka je čisto i lijepo. Ljeti dolaze turisti.',
  },
  Prvić: {
    introHrA1:
      'Prvić je mali otok blizu Šibenika. Na otoku nema automobila. Odavde je obitelj Fausta Vrančića. On je poznati izumitelj. On je napravio prvi padobran. U mjestu Prvić Luka ima mali muzej. Tamo ljudi gledaju njegove izume. Otok je miran i lijep.',
  },
  Ilovik: {
    introHrA1:
      'Ilovik je mali otok na jugu Kvarnera. Na otoku nema automobila. Tu živi manje od sto ljudi. Otok se zove otok cvijeća. Ima mnogo ruža i mirisnih biljaka. Klima je blaga cijelu godinu. Ljeti dolaze mnoge jedrilice.',
  },
  Susak: {
    introHrA1:
      'Susak je mali otok blizu Lošinja. Otok je od pijeska, a ne od kamena. To je jedini takav otok na Jadranu. Ljudi na Susku govore poseban dijalekt. Žene imaju posebnu narodnu nošnju s kratkom crvenom suknjom. Mnogo ljudi sa Suska živi u Americi.',
  },
  'Zadar Riviera': {
    introHrA1:
      'Zadarska rivijera je obala sjeverno od Zadra. Tu su mjesta Nin, Privlaka i Petrčane. More je toplo i plitko. Plaže su pješčane. To je dobro za djecu i obitelji. Ljeti dolazi mnogo turista iz Njemačke i Austrije. Zalazak sunca u Zadru je vrlo lijep.',
  },
  Perušić: {
    introHrA1:
      'Perušić je malo selo u Lici. Selo je na rijeci Lici. Voda u rijeci je čista i hladna. U rijeci ima puno pastrva. Blizu sela je stara tvrđava. Odavde počinju planinski putovi na Velebit. Ljudi dolaze u prirodu i planine.',
  },
  Brinje: {
    introHrA1:
      'Brinje je mali grad u Lici. Iznad grada je stara tvrđava Sokolac. Tvrđavu su gradili Frankopani. U tvrđavi je stara kapela. Kapela je vrlo lijepa i poznata. Pored grada je duboki klanac s rijekom. Voda u rijeci je zelena i čista.',
  },
  Udbina: {
    introHrA1:
      'Udbina je mali grad u Lici. Grad je na velikom krškom polju. Polje se zove Krbavsko polje. Tu je 1493. godine bila velika bitka. Hrvatska vojska je tu izgubila. To je važan i tužan dan u hrvatskoj povijesti. Danas je u Udbini vojna baza.',
  },
  'Donji Lapac': {
    introHrA1:
      'Donji Lapac je mali grad u Lici. Grad je blizu granice s Bosnom. Tu živi vrlo malo ljudi. Oko grada su velike šume. U šumama žive medvjedi, vukovi i risovi. Blizu je rijeka Una. Ona je vrlo čista. Priroda je divlja i mirna.',
  },
  Gračac: {
    introHrA1:
      'Gračac je mali grad na jugu Like. Grad je blizu planine Velebit. Tu prolazi cesta od Zagreba do Splita. Tu prolazi i stara željeznička pruga. Blizu grada je rijeka Zrmanja. Rijeka ima duboki kanjon. Ljudi tu voze kajak i idu na rafting.',
  },
  Rakovica: {
    introHrA1:
      'Rakovica je malo selo blizu Plitvičkih jezera. Plitvička jezera su nacionalni park. To je jedan od najpoznatijih parkova u Europi. Većina turista ulazi u park kroz Rakovicu. Svake godine dolazi više od dva milijuna ljudi. Blizu sela je i rijeka Korana. Ona ima lijep kanjon.',
  },
  'Hrvatska Kostajnica': {
    introHrA1:
      'Hrvatska Kostajnica je mali grad na rijeci Uni. Grad je na granici s Bosnom. Na drugoj strani rijeke je Bosanska Kostajnica. Na otoku u rijeci je stari dvorac. Granica ide kroz sredinu otoka. Rijeka Una je vrlo čista. U njoj ima puno riba.',
  },
  Glina: {
    introHrA1:
      'Glina je mali grad u Sisačko-moslavačkoj županiji. Kroz grad teče rijeka Glina. Rijeka daje ime gradu i kraju. Grad ima tešku povijest. Tu je bio rat 1941. i 1991. godine. Danas ljudi rade na pomirenju. Grad se polako oporavlja.',
  },
  'Zlatar Bistrica': {
    introHrA1:
      'Zlatar Bistrica je mali grad u Zagorju. Grad je pedeset kilometara sjeverno od Zagreba. Tu su toplice Terme Zlatar. Voda u toplicama je topla, ima 38 stupnjeva. Oko grada su brežuljci i vinogradi. Ljudi iz Zagreba dolaze ovamo na odmor za vikend.',
  },
  Bednja: {
    introHrA1:
      'Bednja je malo selo na sjeveru Hrvatske. Selo je u dolini ispod planine Ivanščice. Kuće su stare i od kamena. Ljudi govore stari kajkavski dijalekt. U selu ljudi rade med i šljivovicu. Uz rijeku Bednju ide lijep put za šetnju. Kraj je miran i tradicionalan.',
  },
  Desinić: {
    introHrA1:
      'Desinić je malo selo u Zagorju. Selo je blizu granice sa Slovenijom. Pored sela je poznati dvorac Trakošćan. Dvorac stoji na jezeru. To je najpoznatiji dvorac u Hrvatskoj. Mnogi ljudi dolaze ga fotografirati. Oko sela su brežuljci s vinogradima.',
  },
  Ozalj: {
    introHrA1:
      'Ozalj je mali grad na rijeci Kupi. Grad je blizu Karlovca. U gradu je veliki stari dvorac. U dvorcu su živjele obitelji Zrinski i Frankopan. Tu je živjela i prva hrvatska pjesnikinja. Rijeka Kupa je lijepa za kajak i ribolov.',
  },
  Pirovac: {
    introHrA1:
      'Pirovac je malo mjesto na moru blizu Šibenika. Mjesto je u mirnom zaljevu. More je čisto i lijepo za plivanje. U starom dijelu grada je barokna crkva. Ispred obale su mnogi mali otoci. Ljudi idu brodom na otoke. Split i zračna luka su blizu.',
  },
  Tribunj: {
    introHrA1:
      'Tribunj je malo ribarsko selo blizu Vodica. Stari dio sela je na malom otoku. Otok i selo spaja most. U luci su ribarske brodice. Ljudi tu još love ribu. Ljeti je ribarska noć s glazbom i ribom s gradela.',
  },
  Murter: {
    introHrA1:
      'Murter je malo mjesto na otoku Murteru. Odavde ljudi idu u Nacionalni park Kornati. Kornati imaju 89 otoka. Na otocima nitko ne živi. Ljudi iz Murtera imaju masline na Kornatima. Oni idu brodom na svoje otoke. Tamo rade u maslinicima.',
  },
  Krka: {
    introHrA1:
      'Krka je nacionalni park u Dalmaciji. Park je na rijeci Krki. Rijeka ima mnogo slapova. Najpoznatiji slap je Skradinski buk. Na otoku u rijeci je stari samostan Visovac. Tamo dugo žive redovnici. Mnogi ljudi dolaze gledati slapove i prirodu.',
  },
  'Punta Križa': {
    introHrA1:
      'Punta Križa je malo selo na jugu otoka Cresa. Selo je daleko od svega. Tu živi manje od sto ljudi. Ljudi dolaze brodom ili dugom cestom preko otoka. More je vrlo čisto i bistro. Ljudi tu imaju masline i rade dobro maslinovo ulje.',
  },
  'Mošćenička Draga': {
    introHrA1:
      'Mošćenička Draga je malo mjesto na Kvarneru. Mjesto je na moru i ima lijepu plažu. More je čisto i bistro. Iznad mjesta, na brdu, je staro selo Mošćenice. Selo ima stare zidine. Ljudi u ovom kraju rade vrlo dobro maslinovo ulje.',
  },
  Lošinj: {
    introHrA1:
      'Lošinj je otok na Kvarneru. Glavni grad otoka je Mali Lošinj. Otok ima blagu klimu i čisti zrak. Ljudi ga zovu otok vitalnosti. Na otoku raste više od tisuću vrsta biljaka. Mnoge biljke su mirisne. U moru oko otoka žive dupini.',
  },
  'Veli Lošinj': {
    introHrA1:
      'Veli Lošinj je malo mjesto na otoku Lošinju. Ime znači Veliki Lošinj, ali je mjesto manje od Malog Lošinja. Ima lijepu luku i stari venecijanski toranj. U mjestu je poseban muzej. U njemu je stari brončani kip iz mora. Kip se zove Apoksiomen.',
  },
  'Dubrovačko primorje': {
    introHrA1:
      'Dubrovačko primorje je obala između Ploča i Dubrovnika. To je jug Dalmacije. Tu su mala sela od kamena i mirne plaže. Oko sela su stari maslinici. Ljudi tu rade dobro vino i maslinovo ulje. Većina turista ide u Dubrovnik, a ovdje je mir.',
  },
  Živogošće: {
    introHrA1:
      'Živogošće je malo selo na Makarskoj rivijeri. Selo ima tri dijela: Blato, Porat i Mala Duba. Selo je dvanaest kilometara od Makarske. Plaže su uz borovu šumu. Borovi daju hlad. Mjesto je mirno i tiho. Ljudi tu rade maslinovo ulje i vino.',
  },
  Zagvozd: {
    introHrA1:
      'Zagvozd je malo selo u unutrašnjosti Dalmacije. Selo je ispod planine Biokovo. Odavde ide put na planinu. Kroz selo prolazi cesta od Splita do Imotskog. Ljudi tu imaju ovce, koze i vinograde. Zimi je hladno i pada snijeg, iako je more blizu.',
  },
  Vinkovci: {
    introHrA1:
      'Vinkovci su grad u Slavoniji. Grad je u ravnici. Ljudi tu žive već osam tisuća godina. To je jedan od najstarijih gradova u Europi. Blizu grada je nađena Vučedolska golubica. To je stara posuda od keramike. Grad je stradao u ratu 1991. godine.',
  },
  Dakovo: {
    introHrA1:
      'Đakovo je grad u Slavoniji. U gradu je velika katedrala. Katedralu je gradio biskup Strossmayer. Katedrala ima dva visoka tornja. Tornjevi su visoki 84 metra. U Đakovu se uzgajaju konji lipicanci. Svake godine je velika folklorna svečanost Đakovački vezovi.',
  },
  Rabac: {
    introHrA1:
      'Rabac je malo mjesto na moru u Istri. Mjesto je ispod starog grada Labina. Labin je na brdu, a Rabac je na moru. Prije je Rabac bio ribarsko selo. Danas je poznato ljetovalište. More je vrlo čisto. Plaže imaju Plavu zastavu. Ljudi tu uče roniti.',
  },
  Buje: {
    introHrA1:
      'Buje su mali grad na sjeverozapadu Istre. Grad je na brdu. Oko grada su vinogradi i maslinici. Ljudi tu rade poznata istarska vina, malvaziju i teran. Gosti iz Italije dolaze kupiti vino, tartufe i maslinovo ulje. S brda je lijep pogled na cijeli kraj.',
  },
  'Imotski region': {
    introHrA1:
      'Imotska krajina je kraj u unutrašnjosti Dalmacije. Ljudi su tu ponosni i vole nogomet. Iz ovoga kraja dolazi mnogo poznatih nogometaša. Tu su dva velika jezera, Modro jezero i Crveno jezero. Jezera su u dubokim rupama u kamenu. Ljeti su na Modrom jezeru koncerti.',
  },
  Karlobag: {
    introHrA1:
      'Karlobag je mali grad na moru pod planinom Velebit. To je najmanji grad na hrvatskoj obali. Tu živi manje od tisuću ljudi. Odavde ide cesta u Liku. Blizu je trajekt za otok Pag. Planina je odmah iza grada. Kad puše jaka bura, trajekt ne vozi.',
  },
  Bakar: {
    introHrA1:
      'Bakar je mali grad na Kvarneru. Grad je na dugom i uskom zaljevu. Zaljev izgleda kao fjord. To je jedini takav zaljev u Hrvatskoj. Iznad zaljeva je stari grad i dvorac. Bakar je nekada bio važna luka. Danas je grad mali i miran.',
  },
  Vukovar: {
    introHrA1:
      'Vukovar je grad u Slavoniji. Godine 1991. tu je bio veliki rat. Hrvatski branitelji su branili grad 87 dana. Grad je bio gotovo potpuno razoren. U gradu stoji stari vodotoranj. On ima mnogo rupa od granata. Vodotoranj je danas spomenik. Mnogi ljudi dolaze ga vidjeti.',
  },
  Daruvar: {
    introHrA1:
      'Daruvar je mali grad na sjeveru Hrvatske. U gradu žive Česi. Oni su došli prije dvjesto pedeset godina. Njihova djeca i danas govore češki. U Daruvaru je češka škola i češke novine. Grad ima i toplice. Topla voda tu teče već dvije tisuće godina.',
  },
  Delnice: {
    introHrA1:
      'Delnice su glavni grad Gorskog kotara. Gorski kotar je planinski kraj sa šumama. Tu je hladno i zimi pada mnogo snijega. U šumama žive medvjedi. Hrvatska ima više od tristo medvjeda. Blizu je Nacionalni park Risnjak. Park je dobio ime po risu.',
  },
  Vrsar: {
    introHrA1:
      'Vrsar je mali grad na moru u Istri. Tu je 1755. godine bio poznati Casanova. U Vrsaru je živio kipar Dušan Džamonja. Na brdu iznad grada je njegov park skulptura. Blizu grada je Limski kanal. U kanalu rastu vrlo dobre kamenice.',
  },
  Osor: {
    introHrA1:
      'Osor je vrlo malo selo na Kvarneru. Selo je na uskom kanalu između otoka Cresa i Lošinja. Danas tu živi samo pedeset ljudi. Nekada je Osor bio veliki rimski grad. U selu su rimske ruševine. Ljeti su u ruševinama koncerti. Dolazi mnogo ljudi.',
  },
  'Kneževi Vinogradi': {
    introHrA1:
      'Kneževi Vinogradi su selo u Baranji, na istoku Hrvatske. Ovdje ljudi prave vino. Vino je poznato i dobro. Tlo je dobro za vinograde. Blizu je park prirode Kopački rit. Tamo živi mnogo ptica. Hrvatska se ovdje sastaje s Mađarskom i Srbijom.',
  },
  Zagreb: {
    introHrA1:
      'Zagreb je glavni grad Hrvatske. To je najveći grad u zemlji. Gornji grad je star, a Donji grad ima široke ulice i muzeje. Na tržnici Dolac ljudi kupuju voće i sir. U centru je Trg bana Jelačića. U Zagrebu živi gotovo milijun ljudi.',
  },
  Split: {
    introHrA1:
      'Split je drugi najveći grad u Hrvatskoj. Grad je u Dalmaciji, na moru. U centru grada je stara rimska palača. U palači i danas žive ljudi. Riva je šetnica uz more. Ljudi u Splitu vole nogomet i klub Hajduk.',
  },
  Zadar: {
    introHrA1:
      'Zadar je grad u Dalmaciji. Stari grad je na poluotoku. Zadar je star tri tisuće godina. Na rivi su Morske orgulje. More svira glazbu kroz cijevi. Zalazak sunca u Zadru je vrlo lijep.',
  },
  Medulin: {
    introHrA1:
      'Medulin je grad na jugu Istre, blizu Pule. Grad je na moru. Ima duge pješčane plaže i plitke uvale. Ljeti dolaze obitelji iz Slovenije, Austrije i Italije. Vjetar maestral je dobar za jedrenje na dasci. Blizu je park prirode Kamenjak.',
  },
  Premantura: {
    introHrA1:
      'Premantura je malo selo na jugu Istre. Selo je na poluotoku Kamenjak. Tamo su stari tragovi dinosaura u kamenu. Ima mnogo rijetkih biljaka i orhideja. More je čisto i lijepo. Ljudi dolaze na kajak i na plažu.',
  },
  Fažana: {
    introHrA1:
      'Fažana je mali ribarski grad u Istri, blizu Pule. Grad je na moru. Odavde ide brod na otoke Brijune. Brijuni su nacionalni park. Ljudi u Fažani love srdele. Svake godine ima festival srdele.',
  },
  Funtana: {
    introHrA1:
      'Funtana je malo selo u Istri, između Poreča i Vrsara. Selo je na moru. Ime dolazi od izvora slatke vode. Brodovi su ovdje stoljećima uzimali vodu. Danas ima marinu i kampove pod borovima. Ljeti dolaze obitelji.',
  },
  Punat: {
    introHrA1:
      'Punat je mali grad na otoku Krku. Grad je u zaljevu, na mirnom moru. Ima veliku marinu za jedrilice. U zaljevu je mali otok Košljun. Na otoku je stari samostan s mnogo knjiga. Ljudi ovdje još grade drvene brodice.',
  },
  Omišalj: {
    introHrA1:
      'Omišalj je staro mjesto na sjeveru otoka Krka. Stoji na visokoj stijeni iznad mora. Blizu je Krčki most. Ima staru crkvu iz 13. stoljeća. U crkvi su stari glagoljski natpisi. Blizu je i zračna luka Rijeka.',
  },
  Njivice: {
    introHrA1:
      'Njivice su malo mjesto na sjeverozapadu otoka Krka. Mjesto je blizu Omišlja. Ima šljunčane plaže i borovu šumu. More je plitko i sigurno za djecu. Ljeti dolaze obitelji iz Slovenije, Austrije i Njemačke. Ljeti ide brod na Cres i Lošinj.',
  },
  Šilo: {
    introHrA1:
      'Šilo je malo ribarsko selo na istoku otoka Krka. Nasuprot je grad Crikvenica na kopnu. Šilo ima pješčane plaže, što je rijetko u Hrvatskoj. Brod vozi ljude u Crikvenicu. Ribari love ribu i danas. More je mirno i čisto.',
  },
  Sali: {
    introHrA1:
      'Sali su glavno mjesto na Dugom otoku, blizu Zadra. Mjesto ima mirnu luku. Ljudi su ovdje stoljećima lovili tunu. Blizu je park prirode Telašćica. Tamo su visoke stijene i slano jezero. Svake godine ima veseli festival s glazbom.',
  },
  Sukošan: {
    introHrA1:
      'Sukošan je malo mjesto na moru, južno od Zadra. Ime dolazi od svetog Kasijana. Ima dugu plažu od šljunka. Ima i veliku marinu za jedrilice. Stare masline ovdje još daju ulje. Ljeti dolaze turisti.',
  },
  Pakoštane: {
    introHrA1:
      'Pakoštane su mjesto na moru, između Zadra i Šibenika. Mjesto je između dva mora: Jadrana i Vranskog jezera. Jezero je slatko i veliko. Tamo živi mnogo ptica. Pakoštane imaju pješčanu plažu. S rive se vide otoci Kornati.',
  },
  'Sveti Filip i Jakov': {
    introHrA1:
      'Sveti Filip i Jakov je mjesto na moru, između Biograda i Sukošana. Ime dolazi od dva apostola, Filipa i Jakova. Nasuprot mjesta je otok Pašman. More je mirno, dobro za jedrenje. Ljeti dolazi mnogo ljudi. Ima festival riblje juhe.',
  },
  'Kaštel Sućurac': {
    introHrA1:
      'Kaštel Sućurac je mjesto na moru, blizu Splita. To je jedan od sedam Kaštela. Kaštela su stara utvrđena sela. Ime dolazi od svetog Jurja. Ima staru jezgru i staru luku. Danas je Sućurac dio velikog Splita.',
  },
  Marina: {
    introHrA1:
      'Marina je malo mjesto na moru, između Trogira i Šibenika. Mjesto je u dubokom zaljevu. Ima staru kulu iz 1495. godine. Ima i veliku marinu za jedrilice. Odavde idu brodovi na otoke Drvenik. More je ovdje mirno.',
  },
  Seget: {
    introHrA1:
      'Seget je selo na moru, odmah do Trogira. Ima šetnicu uz more i šljunčane plaže. S rive se vidi otok Čiovo. Kamen iz Segeta je u velikoj crkvi u Trogiru. Selo ima tri dijela: donji, srednji i gornji. Ljeti dolaze turisti.',
  },
  Stobreč: {
    introHrA1:
      'Stobreč je malo mjesto na moru, odmah do Splita. Ovdje je bio stari grčki i rimski grad Epetion. U selu se vide stari rimski zidovi. Ima popularnu šljunčanu plažu. Ima i veliki kamp. Ljeti dolazi mnogo ljudi.',
  },
  Podstrana: {
    introHrA1:
      'Podstrana je mjesto na moru, južno od Splita. Iznad mjesta su planine Perun i Mosor. Ovdje je stara crkva svetog Martina. U toj crkvi je 925. godine bio veliki crkveni sabor. Kralj Tomislav je bio tamo. Danas ima veliki hotel i plaže.',
  },
  'Dugi Rat': {
    introHrA1:
      'Dugi Rat je mjesto na moru, između Omiša i Splita. Ime znači dugi rt. Iznad mjesta je visoka planina Mosor. Ovdje je bila velika tvornica od 1909. do 2005. godine. Danas je Dugi Rat mjesto za plažu. Ima dvanaest plaža.',
  },
  Trsteno: {
    introHrA1:
      'Trsteno je malo selo na moru, blizu Dubrovnika. Poznato je po starom vrtu iz 15. stoljeća. To je najstariji renesansni vrt u Hrvatskoj. Na ulazu stoje dvije velike stare platane. Stare su više od 500 godina. Ljudi dolaze vidjeti vrt i drveće.',
  },
  Cilipi: {
    introHrA1:
      'Cilipi su selo u Konavlima, južno od Dubrovnika. Selo je poznato po narodnim nošnjama i plesu. Svake nedjelje ljeti ljudi plešu na trgu. To traje od 1967. godine. U Cilipima je i zračna luka Dubrovnik. Nošnje su lijepe i šarene.',
  },
  Sutivan: {
    introHrA1:
      'Sutivan je malo mjesto na sjeveru otoka Brača. Nasuprot, preko mora, je Split. Ime dolazi od svetog Ivana. Ima staru crkvu i stare kuće plemića. Ima i staru kulu iz 16. stoljeća. Oko mjesta rastu masline i ljudi prave ulje.',
  },
  Milna: {
    introHrA1:
      'Milna je mala luka na zapadu otoka Brača. Luka je u dubokom zaljevu i dobro je zaštićena od vjetra. Jedrilice dolaze ovdje već stoljećima. Ima veliku baroknu crkvu iz 1783. godine. U njoj su velike orgulje. Stare kuće su kuće kapetana.',
  },
  Postira: {
    introHrA1:
      'Postira su mjesto na moru, na sjeveru otoka Brača. Ljudi ovdje love srdele. Tvornica Sardina radi od 1907. godine. Ovdje je rođen pjesnik Vladimir Nazor. Njegova kuća je danas muzej. Luka je mirna i stara.',
  },
  Selca: {
    introHrA1:
      'Selca su selo na istoku otoka Brača. Selo nije na moru. Ljudi ovdje stoljećima rade s kamenom. Bijeli kamen s Brača je poznat u cijelom svijetu. Od njega su građeni Dioklecijanova palača i Bijela kuća. Mnogi klesari su otišli u Čile.',
  },
  Škrip: {
    introHrA1:
      'Škrip je staro kameno selo u unutrašnjosti otoka Brača. To je najstarije selo na otoku. Ovdje su živjeli Iliri, pa Rimljani. U selu je stari rimski sarkofag. Ima staru kulu iz 16. stoljeća. U kuli je muzej otoka Brača.',
  },
  Sućuraj: {
    introHrA1:
      'Sućuraj je grad na istočnom kraju otoka Hvara. Kopno je blizu, samo pet kilometara. Trajekt vozi u Drvenik. Ime dolazi od svetog Jurja. Ima staru tvrđavu iz 1613. godine. Oko mjesta su lijepe mirne uvale.',
  },
  Lumbarda: {
    introHrA1:
      'Lumbarda je selo na istoku otoka Korčule. Selo ima pješčane plaže, što je rijetko na otocima. Ovdje raste grožđe Grk. Grk raste samo u Lumbardi i nigdje drugdje na svijetu. Ljudi prave bijelo vino i maslinovo ulje. Ovdje je nađen stari grčki natpis.',
  },
  'Plitvička Jezera': {
    introHrA1:
      'Plitvička jezera su nacionalni park u Lici. To je najpoznatiji park u Hrvatskoj. U parku je šesnaest jezera. Jezera su spojena vodopadima. Voda je zelena i plava. Kroz park idu drvene staze.',
  },
  Korenica: {
    introHrA1:
      'Korenica je glavno mjesto u Lici, blizu Plitvičkih jezera. Oko mjesta su velike šume. U šumama žive medvjedi, vukovi i risovi. U ratu od 1991. do 1995. mjesto je bilo okupirano. Oslobođeno je u kolovozu 1995. Danas ovdje živi malo ljudi.',
  },
  Plaški: {
    introHrA1:
      'Plaški je selo u Lici, između Karlovca i Plitvica. Ovdje je stara pravoslavna katedrala iz 1756. godine. Selo je bilo sjedište pravoslavne eparhije. Oko sela je krš i šuma. Danas ovdje živi malo ljudi. Kroz selo prolazi željeznica.',
  },
  Vrhovine: {
    introHrA1:
      'Vrhovine su malo selo u Lici, ispod planina. Ovdje živi vrlo malo ljudi. Oko sela su velike šume bukve. U šumama žive medvjedi, risovi i vukovi. Kroz selo prolazi željeznica Zagreb–Split. Tu je vrlo tiho i mirno.',
  },
  Skrad: {
    introHrA1:
      'Skrad je selo u Gorskom kotaru, u šumi i planinama. Blizu sela je klanac Vražji prolaz. Tamo je i vodopad Zeleni vir. Kroz selo prolazi stara željeznica Zagreb–Rijeka. Zimi pada mnogo snijega. Ljudi dolaze na planinarenje.',
  },
  Vrbovsko: {
    introHrA1:
      'Vrbovsko je mali grad u Gorskom kotaru, na rijeci Kupi. Oko grada su velike šume. Kroz grad prolazi stara željeznica Zagreb–Rijeka. Rijeka Kupa je vrlo čista. Mnogi ljudi odavde su otišli u Ameriku. Grad je miran i daleko od mora.',
  },
  Čabar: {
    introHrA1:
      'Čabar je grad na zapadu Hrvatske, na granici sa Slovenijom. To je najzapadniji grad u Hrvatskoj. Grad je u dubokim šumama Gorskog kotara. Ovdje je stari dvorac obitelji Zrinski. Kroz kraj teče rijeka Čabranka. Šume imaju vrlo visoke jele.',
  },
  Mrkopalj: {
    introHrA1:
      'Mrkopalj je malo selo u planinama Gorskog kotara. Selo je visoko, na 850 metara. Zimi pada mnogo snijega. Ovdje ljudi skijaju već dugo. Stara skijaška žičara radi od 1965. godine. Oko sela su bukove šume.',
  },
  Privlaka: {
    introHrA1:
      'Privlaka je malo selo na moru, na sjeveru zadarskog kraja, blizu Nina. Selo ima duge pješčane plaže. More je plitko i toplo. Ljudi su ovdje dugo radili sol. Cesta vodi na otok Vir. Ljeti dolaze obitelji s djecom.',
  },
  Vir: {
    introHrA1:
      'Vir je otok na sjeveru Dalmacije. S kopnom ga spaja most iz 1976. godine. Prije je na otoku bilo malo ljudi i mnogo ovaca. Poslije mosta ljudi su sagradili mnogo kuća za odmor. Danas ima više od 30.000 kuća. Plaže su lijepe.',
  },
  'Sveti Lovreč': {
    introHrA1:
      'Sveti Lovreč je malo mjesto na brdu u Istri, između Poreča i Rovinja. Ima stare zidine iz 14. stoljeća. Zidine su još cijele. U sredini je trg i stara crkva. Oko mjesta su vinogradi. Vino malvazija je ovdje vrlo dobro.',
  },
  Bilje: {
    introHrA1:
      'Bilje je selo u Baranji, blizu Osijeka. Selo je ulaz u park prirode Kopački rit. Rit je velika močvara s mnogo ptica. Tu se sastaju rijeke Drava i Dunav. U selu je stari dvorac iz 1707. godine. Ovdje žive Hrvati, Mađari i Srbi.',
  },
  Antunovac: {
    introHrA1:
      'Antunovac je malo selo u Slavoniji, južno od Osijeka. Selo je na ravnom polju. Ljudi ovdje rade na zemlji. Ime dolazi od svetog Antuna. U ratu 1991. selo je bilo blizu fronte. Danas mnogi ljudi rade u Osijeku.',
  },
  Erdut: {
    introHrA1:
      'Erdut je selo na istoku Hrvatske. Selo je na rijeci Dunav. Dunav je ovdje granica sa Srbijom. Na visokoj obali stoji stara kula. Oko sela su veliki vinogradi. Ljudi ovdje rade vino. Erdut je poznat po sporazumu iz 1995. godine.',
  },
  Dalj: {
    introHrA1:
      'Dalj je mjesto na rijeci Dunav. Nalazi se na istoku Hrvatske. Ovdje su nekad živjeli Rimljani. U Dalju živi mnogo Srba. Tu je rođen poznati znanstvenik Milutin Milanković. On je proučavao ledena doba. Dalj je dio općine Erdut.',
  },
  Drenovci: {
    introHrA1:
      'Drenovci su selo u Slavoniji. Selo je blizu rijeke Save. Sava je ovdje granica s Bosnom i Hercegovinom. Blizu sela je velika šuma hrasta. Šuma se zove Spačva. Ovdje žive Šokci. Oni imaju stare nošnje i pjesme. Ljudi rade na zemlji i u šumi.',
  },
  'Babina Greda': {
    introHrA1:
      'Babina Greda je veliko selo u Slavoniji. Nalazi se između Slavonskog Broda i Vinkovaca. Oko sela su ravna polja. Ovdje žive Šokci. Žene imaju lijepe stare nošnje sa zlatnim vezom. U selu se pjevaju stare pjesme. U sredini sela je crkva svetog Marka.',
  },
  Andrijaševci: {
    introHrA1:
      'Andrijaševci su selo u Slavoniji. Selo je blizu grada Vinkovaca. Pored njega je selo Rokovci. Dva sela su tako blizu da izgledaju kao jedno. Oko sela je velika ravnica. Ljudi ovdje rade na zemlji. Uzgajaju žito i kukuruz.',
  },
  Tovarnik: {
    introHrA1:
      'Tovarnik je selo na istoku Hrvatske. Selo je na granici sa Srbijom. Tu je rođen poznati pjesnik Antun Gustav Matoš. Njegova rodna kuća je danas muzej. Kroz selo prolaze stara cesta i pruga. Godine 1991. ovdje je bio rat. Selo je danas mirno.',
  },
  Lovas: {
    introHrA1:
      'Lovas je malo selo na istoku Hrvatske. Nalazi se blizu granice sa Srbijom. Oko sela su brežuljci i vinogradi. Ljudi ovdje rade vino. Godine 1991. u selu je bio rat. Mnogo ljudi je tada ubijeno. Danas u selu stoji spomenik žrtvama.',
  },
  Bogdanovci: {
    introHrA1:
      'Bogdanovci su malo selo blizu Vukovara. Godine 1991. ovdje je bio težak rat. Branitelji su se dugo branili. Selo je tada bilo gotovo potpuno razoreno. Poslije rata ljudi su ga ponovno izgradili. Danas u selu ima više spomenika. Ljudi se sjećaju branitelja.',
  },
  Punitovci: {
    introHrA1:
      'Punitovci su malo mjesto u Slavoniji. Nalaze se blizu grada Đakova. Ovdje živi mnogo Slovaka. Oni su došli u 19. stoljeću. Ljudi u selu govore hrvatski i slovački. Djeca u školi uče i slovački jezik. Svake godine ovdje je slovački festival.',
  },
  Strizivojna: {
    introHrA1:
      'Strizivojna je selo u Slavoniji. Nalazi se između Đakova i Slavonskog Broda. Selo je poznato po starim drvenim vratima. Vrata su lijepo rezbarena. Na njima su loza, sunce i ptice. Svake godine ovdje je festival drvenih portala. Ljudi rade na zemlji i uzgajaju stoku.',
  },
  'Brodski Stupnik': {
    introHrA1:
      'Brodski Stupnik je selo u Slavoniji. Nalazi se zapadno od Slavonskog Broda. S jedne strane je rijeka Sava. S druge strane su brda Dilj. Na brdima su vinogradi. Ljudi ovdje rade vino. U ravnici uzgajaju žito.',
  },
  'Velika Kopanica': {
    introHrA1:
      'Velika Kopanica je selo u Slavoniji. Nalazi se istočno od Slavonskog Broda. Selo je blizu rijeke Save. Ovdje žive Šokci. Oni imaju stare nošnje i pjesme. Nekad je Sava često poplavila polja. Zato su ljudi gradili kuće na malim brežuljcima.',
  },
  Garčin: {
    introHrA1:
      'Garčin je selo u Slavoniji. Nalazi se istočno od Slavonskog Broda. Selo je na cesti prema Vinkovcima. Oko sela je velika ravnica. Ljudi ovdje rade na zemlji. Uzgajaju žito, kukuruz i stoku. Općina ima još nekoliko malih sela.',
  },
  Sibinj: {
    introHrA1:
      'Sibinj je mjesto u Slavoniji. Nalazi se blizu Slavonskog Broda. Ovdje ravnica prelazi u brda. Brda se zovu Dilj. Na brdima su vinogradi i voćnjaci. U ravnici ljudi uzgajaju žito. Općina ima još nekoliko sela.',
  },
  Vrbovec: {
    introHrA1:
      'Vrbovec je grad blizu Zagreba. Nalazi se istočno od Zagreba, na cesti prema Bjelovaru. Grad je poznat po mesu. Ovdje je velika tvornica mesa. Ona radi kobasice i salame. Vrbovec je star grad. Svake godine ima festival stare hrane.',
  },
  Bedekovčina: {
    introHrA1:
      'Bedekovčina je mali grad u Hrvatskom zagorju. Nalazi se između Zaboka i Krapine. Oko grada su brežuljci i mala jezera. Jezera su nastala od starih rupa za glinu. U okolici ima starih dvoraca. Ime grada dolazi od plemićke obitelji Bedeković.',
  },
  Brdovec: {
    introHrA1:
      'Brdovec je mjesto blizu Zagreba. Nalazi se zapadno od Zaprešića. Kroz kraj teče rijeka Sutla. Sutla je granica sa Slovenijom. Ovdje je nekad bila velika seljačka buna. Vodio ju je Matija Gubec. Danas mnogi ljudi iz Brdovca rade u Zagrebu.',
  },
  Jakovlje: {
    introHrA1:
      'Jakovlje je malo mjesto blizu Zagreba. Nalazi se na jugu Hrvatskog zagorja. U selu stoji stari dvorac. Dvorac ima veliki park. Nekad su u njemu živjeli plemići. Ljudi ovdje govore kajkavski. Općina ima još tri mala sela.',
  },
  'Veliko Trgovišće': {
    introHrA1:
      'Veliko Trgovišće je selo u Hrvatskom zagorju. Nalazi se zapadno od Zaboka. Ovdje je rođen Franjo Tuđman. On je bio prvi predsjednik Hrvatske. Njegova rodna kuća je danas spomen dom. Ljudi u selu govore kajkavski. Oko sela su brežuljci.',
  },
  Tuhelj: {
    introHrA1:
      'Tuhelj je mjesto u Hrvatskom zagorju. Nalazi se blizu granice sa Slovenijom. Ovdje iz zemlje izlazi topla voda. Zato su tu velike toplice. Ljudi dolaze na kupanje i odmor. Toplice imaju mnogo bazena. Ljudi u kraju govore kajkavski.',
  },
  'Krapinske Toplice': {
    introHrA1:
      'Krapinske Toplice su mjesto u Hrvatskom zagorju. Nalaze se južno od Krapine. Ovdje iz zemlje izlazi topla voda. Voda je vruća, do 41 stupanj. Već su je koristili stari Rimljani. Danas je tu poznata bolnica za srce. Ljudi dolaze i na kupanje.',
  },
  'Stubičke Toplice': {
    introHrA1:
      'Stubičke Toplice su malo mjesto u Hrvatskom zagorju. Nalaze se pod planinom Medvednicom. Ovdje iz zemlje izlazi topla voda. Voda je vruća, oko 43 stupnja. Ljudi se tu kupaju već stotinama godina. Iz mjesta idu staze na planinu. Mnogi dolaze iz Zagreba za vikend.',
  },
  'Hum na Sutli': {
    introHrA1:
      'Hum na Sutli je mjesto u Hrvatskom zagorju. Nalazi se na rijeci Sutli. Sutla je granica sa Slovenijom. U mjestu je velika tvornica stakla. Ona radi boce i staklenke. Tvornica postoji već od 19. stoljeća. Mnogi ljudi iz kraja rade u njoj.',
  },
  Lobor: {
    introHrA1:
      'Lobor je mjesto u Hrvatskom zagorju. Nalazi se iznad grada Zlatara. Na brežuljku iznad sela stoji stara crkva. Crkva je posvećena Majci Božjoj. Ljudi tamo idu na hodočašće. Veliko hodočašće je 8. rujna. Na tom mjestu crkva postoji već više od tisuću godina.',
  },
  Mače: {
    introHrA1:
      'Mače je malo mjesto u Hrvatskom zagorju. Nalazi se između Zlatara i Krapine. Oko sela su brežuljci i šume. Ljudi ovdje rade na zemlji. U selu je stara barokna crkva. Crkva je posvećena svetom Jeronimu. Ljudi u kraju govore kajkavski.',
  },
  Mihovljan: {
    introHrA1:
      'Mihovljan je malo mjesto u Hrvatskom zagorju. Nalazi se zapadno od Krapine. Selo je dobilo ime po crkvi svetog Mihovila. Oko sela su brežuljci. Na brežuljcima su mali vinogradi. Ljudi rade na zemlji. Ljudi ovdje govore kajkavski.',
  },
  Prelog: {
    introHrA1:
      'Prelog je mali grad u Međimurju. Nalazi se na jugu, blizu rijeke Drave. Poslije Čakovca to je najveći grad u Međimurju. U gradu je lijepa barokna crkva. Crkva je posvećena svetom Jakovu. Oko grada su ravna polja. Prelog je postao grad 1997. godine.',
  },
  'Mursko Središće': {
    introHrA1:
      'Mursko Središće je mali grad u Međimurju. Nalazi se na rijeci Muri. Mura je granica sa Slovenijom. Nekad je ovdje bio rudnik ugljena. Rudnik je zatvoren 1972. godine. Danas ljudi trguju sa Slovenijom. Uz rijeku je i hidroelektrana.',
  },
  Štrigova: {
    introHrA1:
      'Štrigova je malo mjesto u Međimurju. Nalazi se na sjeveru, blizu granice sa Slovenijom. Oko sela su brežuljci s vinogradima. Ovdje se radi dobro bijelo vino. Najpoznatije vino zove se pušipel. U selu je stara barokna crkva svetog Jeronima. U njoj su lijepe freske.',
  },
  'Sveti Martin na Muri': {
    introHrA1:
      'Sveti Martin na Muri je malo mjesto na sjeveru Hrvatske. To je najsjevernija točka Hrvatske. Mjesto je na rijeci Muri. Mura je granica sa Slovenijom. Ovdje su toplice s toplom vodom. Ljudi dolaze na kupanje i vožnju biciklom. U selu je stara crkva svetog Martina.',
  },
  'Donji Kraljevec': {
    introHrA1:
      'Donji Kraljevec je malo mjesto u Međimurju. Nalazi se u ravnici blizu rijeke Drave. Ovdje je rođen Rudolf Steiner. On je bio poznati filozof. Njegov otac je radio na željeznici. Rodna kuća Steinera je danas centar. U kraju ljudi rade na zemlji.',
  },
  Goričan: {
    introHrA1:
      'Goričan je malo mjesto na istoku Međimurja. Nalazi se na granici s Mađarskom. Ovdje je važan granični prijelaz. Autocesta iz Hrvatske ide u Mađarsku. Oko sela je ravnica. Ljudi rade na zemlji. Od 2023. na granici više nema kontrole.',
  },
  Belica: {
    introHrA1:
      'Belica je malo mjesto u Međimurju. Nalazi se južno od Čakovca. Selo je u ravnici između rijeka Mure i Drave. Zemlja je ovdje vrlo dobra. Ljudi uzgajaju žito, kukuruz i povrće. Međimurje je mala županija. Ali ovdje živi mnogo ljudi.',
  },
  Šenkovec: {
    introHrA1:
      'Šenkovec je malo mjesto u Međimurju. Nalazi se odmah zapadno od Čakovca. Ovdje je stara crkva svete Jelene. U njoj su grobovi obitelji Zrinski. Zrinski su bili poznati hrvatski plemići. Oni su dugo vladali Međimurjem. Crkva je pripadala redovnicima pavlinima.',
  },
  Pribislavec: {
    introHrA1:
      'Pribislavec je malo mjesto u Međimurju. Nalazi se odmah pored Čakovca. U selu stoji veliki dvorac. Dvorac je gradila obitelj Festetics u 19. stoljeću. Oko dvorca je park. Danas mnogi ljudi iz sela rade u Čakovcu. Ravnica oko sela je plodna.',
  },
  'Donja Dubrava': {
    introHrA1:
      'Donja Dubrava je malo mjesto na istoku Međimurja. Ovdje se rijeka Mura ulijeva u Dravu. Nekad su ljudi iz sela bili splavari. Oni su vozili drvo niz rijeku Dravu. Putovali su daleko, čak do Crnog mora. Danas je kraj zaštićena priroda. Ravnica je plodna.',
  },
  'Sveti Križ Začretje': {
    introHrA1:
      'Sveti Križ Začretje je mjesto u Hrvatskom zagorju. Nalazi se južno od Krapine, blizu autoceste. Ime je dobilo po crkvi Svetog Križa. Ljudi dolaze u crkvu na hodočašće. U selu stoji i stari dvorac. Dvorac je pripadao obitelji Keglević. Ljudi ovdje govore kajkavski.',
  },
  Krašić: {
    introHrA1:
      'Krašić je malo mjesto u brdima južno od Jastrebarskog. Ovdje je rođen kardinal Alojzije Stepinac. On je bio nadbiskup u Zagrebu. Zadnjih godina života živio je u Krašiću. Umro je 1960. godine. Danas mnogi ljudi dolaze u Krašić na hodočašće.',
  },
  Banjole: {
    introHrA1:
      'Banjole su malo ribarsko selo u Istri. Nalaze se južno od Pule, na moru. Uz selo su male uvale. U jednoj uvali ribari drže svoje drvene brodice. Ljeti dolazi mnogo turista. Oni spavaju u kampovima i apartmanima. Blizu je mali otok Ceja.',
  },
  Pomer: {
    introHrA1:
      'Pomer je malo selo na jugu Istre. Nalazi se na Medulinskom zaljevu, istočno od Pule. More je ovdje mirno i plitko. U selu je velika marina za brodove. Ljudi ovdje jedre i voze dasku na vjetar. U selu je crkva svetog Flora.',
  },
  Štinjan: {
    introHrA1:
      'Štinjan je naselje na moru kod Pule, u Istri. Naselje je na poluotoku kod ulaza u luku. Tu ima mnogo starih tvrđava. Najpoznatija tvrđava je Punta Christo. Ljeti u tvrđavi ima glazbenih festivala. Dolazi mnogo mladih ljudi.',
  },
  Vinkuran: {
    introHrA1:
      'Vinkuran je malo selo kod Pule, u Istri. Selo je na jugu grada. Blizu sela je stari kamenolom. Kamenolom se zove Cave Romane. Rimljani su tu vadili kamen za Arenu u Puli. Danas ljeti u kamenolomu ima koncerata.',
  },
  Galižana: {
    introHrA1:
      'Galižana je selo u južnoj Istri. Selo je između Pule i Vodnjana. U selu žive Hrvati i Talijani. Selo je dvojezično. Ljudi govore hrvatski i talijanski. Oko sela ima mnogo maslina. Maslinovo ulje iz Galižane je poznato i dobro.',
  },
  Marčana: {
    introHrA1:
      'Marčana je selo u Istri. Selo je u unutrašnjosti, blizu Pule. Oko sela su crvena polja i kameni zidovi. Marčana je središte općine. Općina je velika i ima mnogo malih sela. U sredini sela je crkva svetog Lovre.',
  },
  Krnica: {
    introHrA1:
      'Krnica je malo selo na istočnoj obali Istre. Selo je između Pule i Labina. Ispod sela je mala ribarska luka. Luka se zove Krnička Luka. Obala je kamenita i mirna. U selu je crkva svetog Roka. Ljeti ljudi dolaze na plažu i u konobe.',
  },
  Šišan: {
    introHrA1:
      'Šišan je selo u južnoj Istri. Selo je blizu Pule i Medulina. Šišan je na malom brijegu. Oko sela su crvena polja. Tu rastu pšenica, masline i grožđe. U selu žive Hrvati i mala talijanska zajednica. Crkva u selu je crkva svetog Felicijana.',
  },
  Tar: {
    introHrA1:
      'Tar je malo selo na zapadnoj obali Istre. Selo je između Poreča i Novigrada. Blizu sela je rijeka Mirna i more. Ime Tar znači kula. U selu žive Hrvati i Talijani. Blizu Tara je veliki kamp Lanterna. Ljeti tu dolazi mnogo turista.',
  },
  Vabriga: {
    introHrA1:
      'Vabriga je malo selo u Istri. Selo je između Tara i Poreča. Ispod sela je rijeka Mirna. Oko sela su polja, masline i vinogradi. U sredini sela je stara crkva i kamene kuće. Ljudi govore hrvatski i talijanski. Blizu je more i tihe plaže.',
  },
  Brtonigla: {
    introHrA1:
      'Brtonigla je malo mjesto na brijegu u sjevernoj Istri. Mjesto je blizu Buja i rijeke Mirne. Oko Brtonigle su vinogradi. Ovdje je poznato vino muškat. Svako ljeto ima festival muškata. Ljudi u mjestu govore hrvatski i talijanski.',
  },
  Oprtalj: {
    introHrA1:
      'Oprtalj je mali stari grad na brijegu u sjevernoj Istri. Grad je iznad doline rijeke Mirne. Ima stare zidine, ložu i crkvu svetog Jurja. Kuće su kamene i imaju crvene krovove. Preko doline se vidi Motovun. Ljudi govore hrvatski i talijanski.',
  },
  'Sveti Petar u Šumi': {
    introHrA1:
      'Sveti Petar u Šumi je malo selo u srednjoj Istri. Selo je između Pazina i Žminja. Oko sela je hrastova šuma. U selu je stari samostan i crkva. U samostanu žive pavlini. Crkva je velika i lijepa. Ljudi dolaze ovamo na hodočašće.',
  },
  Tinjan: {
    introHrA1:
      'Tinjan je selo na brijegu u srednjoj Istri. Selo je između Pazina i Poreča. Tinjan je poznat po pršutu. Istarski pršut je jako dobar. Tu puše hladan vjetar bura. Bura suši pršut. Svake jeseni u Tinjanu je veliki sajam pršuta.',
  },
  Vižinada: {
    introHrA1:
      'Vižinada je malo selo na brijegu u srednjoj Istri. Selo je zapadno od Motovuna. Oko sela su vinogradi. Tu raste bijelo grožđe malvazija. Vino iz Vižinade je dobro i poznato. Kroz brda ide stara pruga Parenzana. Danas ljudi tamo voze bicikl.',
  },
  Karojba: {
    introHrA1:
      'Karojba je malo selo u srednjoj Istri. Selo je blizu Motovuna, iznad doline rijeke Mirne. Blizu sela je velika šuma. U šumi rastu tartufi. Ljudi s psima traže tartufe. Oko sela su kameni zidovi i mala polja. Karojba je središte općine.',
  },
  Lupoglav: {
    introHrA1:
      'Lupoglav je malo selo u istočnoj Istri. Selo je ispod planine Učke. Kroz selo ide cesta i pruga od Pazina do Rijeke. Iznad sela je stari dvorac. Dvorac je danas ruševina. Ime Lupoglav znači vučja glava. Učka je najviša planina u Istri.',
  },
  Cerovlje: {
    introHrA1:
      'Cerovlje je malo selo u srednjoj Istri. Selo je blizu Pazina. Kroz kraj teče potok Pazinčica. Potok kod Pazina ide pod zemlju. To mjesto se zove Pazinska jama. Oko sela su mala kamena sela i polja. Cerovlje je središte općine.',
  },
  Mošćenice: {
    introHrA1:
      'Mošćenice su staro selo na brijegu iznad mora. Selo je na Kvarneru, na planini Učki. Ima stare zidine, uske ulice i velika vrata. U selu je crkva svetog Andrije. Ljudi tu žive već više od dvije tisuće godina. S brijega se vidi otok Cres.',
  },
  Brseč: {
    introHrA1:
      'Brseč je malo staro selo na visokoj litici iznad mora. Selo je na Kvarneru, na planini Učki. Ima stare zidine i vrata. U selu je crkva svetog Jurja. Tu je rođen pisac Eugen Kumičić. Njegova kuća je danas mali muzej.',
  },
  Ika: {
    introHrA1:
      'Ika je malo mjesto na moru, na Opatijskoj rivijeri. Mjesto je između Opatije i Lovrana, ispod planine Učke. Ika ima lijepu plažu sa šljunkom. Uz more ide duga šetnica. Šetnica se zove lungomare. Ljeti ljudi dolaze na plažu i šeću uz more.',
  },
  Ičići: {
    introHrA1:
      'Ičići su malo mjesto na moru, odmah pored Opatije. Mjesto je na Kvarneru, ispod planine Učke. Ičići imaju veliku marinu za brodove. Imaju i široku plažu sa šljunkom. Plaža ima Plavu zastavu. Uz more ide šetnica lungomare do Opatije i Lovrana.',
  },
  Volosko: {
    introHrA1:
      'Volosko je staro ribarsko mjesto na Kvarneru. Danas je dio Opatije. Ima malu luku, kamene kuće i uske ulice. Kamene stube vode od luke gore u selo. U luci još ima ribarskih brodova. Ovdje je rođen znanstvenik Andrija Mohorovičić.',
  },
  Kraljevica: {
    introHrA1:
      'Kraljevica je mali grad na moru, na Kvarneru. Grad je između Rijeke i Crikvenice. U gradu su dva stara dvorca. Zovu se Stari grad i Novi grad. U Kraljevici je i staro brodogradilište. Tu ljudi grade brodove već skoro tri stotine godina.',
  },
  Selce: {
    introHrA1:
      'Selce je mali grad na moru, na Kvarneru. Selce je odmah pored Crikvenice. Ima plaže sa šljunkom i malu luku. Grad je mirniji od Crikvenice. Ljeti dolazi mnogo turista. U sredini staroga sela je crkva Presvetog Trojstva.',
  },
  Klenovica: {
    introHrA1:
      'Klenovica je malo selo na moru. Selo je između Novoga Vinodolskoga i Senja. Preko mora je planina Velebit. Tu jako puše hladan vjetar bura. Selo ima malu luku. U luci se brodovi skrivaju od vjetra. Ljeti dolaze turisti.',
  },
  Jadranovo: {
    introHrA1:
      'Jadranovo je malo selo na moru, na Kvarneru. Selo je između Crikvenice i Kraljevice. Obala ima mnogo malih uvala. U selu je stara luka i crkva svetog Jakova. Selo se prije zvalo Sveti Jakov. Danas je Jadranovo dio Grada Crikvenice.',
  },
  Dramalj: {
    introHrA1:
      'Dramalj je malo mjesto na moru, na Kvarneru. Mjesto je odmah pored Crikvenice, na sjeveru. Ima plaže sa šljunkom i male uvale. Staro selo je malo dalje od mora. Danas je Dramalj dio Grada Crikvenice. Ljeti tu ljetuje mnogo ljudi.',
  },
  Smrika: {
    introHrA1:
      'Smrika je malo selo na moru, na Kvarneru. Selo je između Kraljevice i Crikvenice. Ime dolazi od biljke smrike. Smrika je vrsta borovice. Staro selo je malo dalje od mora. Danas ovdje ima mnogo novih kuća za ljeto.',
  },
  Hreljin: {
    introHrA1:
      'Hreljin je selo na brijegu iznad Vinodolske doline. Selo je blizu Bakra i Kraljevice. Iznad sela je stari dvorac Frankopana. Dvorac je danas ruševina. Hreljin je vrlo staro mjesto. Ime sela je u starom zakonu iz 1288. godine.',
  },
  Lukovo: {
    introHrA1:
      'Lukovo je malo selo iznad Crikvenice, na Kvarneru. Selo nije na moru, nego na brijegu. Ima kamene kuće i mala polja. Oko sela je krš i kamen. Ime Lukovo dolazi od imena Luka. Danas u selu živi malo ljudi.',
  },
  'Stara Baška': {
    introHrA1:
      'Stara Baška je malo selo na otoku Krku. Selo je na južnoj obali otoka. Oko sela su goli kameni brijegovi. Ispod sela su lijepe uvale sa šljunkom. Preko mora je mali otok Prvić. Tu jako puše bura. Ljeti dolaze turisti.',
  },
  Soline: {
    introHrA1:
      'Soline je malo selo na otoku Krku. Selo je na istočnoj obali, u plitkom zaljevu. More u zaljevu je toplo i plitko. U zaljevu ima crno blato. Blato je zdravo za kožu. Ljeti dolaze obitelji s djecom.',
  },
  Klimno: {
    introHrA1:
      'Klimno je malo selo na otoku Krku. Selo je na istočnoj obali, kod zaljeva Soline. Ima malu, sigurnu luku. U luci se brodovi skrivaju od bure. Crkva u selu je crkva svetog Klementa. Selo je mirno i tiho.',
  },
  Nerezine: {
    introHrA1:
      'Nerezine su malo selo na otoku Lošinju. Selo je na sjeveru otoka, blizu Osora. Iznad sela je planina Osoršćica. To je najviši vrh na otoku. U selu je stari franjevački samostan. Samostan je iz 1473. godine.',
  },
  Belej: {
    introHrA1:
      'Belej je malo selo na otoku Cresu. Selo je na jugu otoka, u unutrašnjosti. Oko sela su pašnjaci i dugi kameni zidovi. Ljudi tu drže ovce. Creska janjetina i creski sir su poznati. Danas u selu živi malo ljudi.',
  },
  Martinšćica: {
    introHrA1:
      'Martinšćica je malo selo na otoku Cresu. Selo je na zapadnoj obali, u maloj mirnoj uvali. Ima ribarsku luku. U selu je stari kaštel obitelji Sforza. Ljeti dolaze turisti. Ribari još love ribu.',
  },
  Valun: {
    introHrA1:
      'Valun je malo ribarsko selo na otoku Cresu. Selo je na zapadnoj obali, u mirnoj uvali. Oko sela su borovi i hrastovi. U crkvi je stara kamena ploča. Ploča je iz 11. stoljeća. Na njoj je staro hrvatsko pismo glagoljica.',
  },
  Lubenice: {
    introHrA1:
      'Lubenice su malo selo na otoku Cresu. Selo je na visokoj litici iznad mora. Litica je visoka 378 metara. Ljudi tu žive već četiri tisuće godina. Danas u selu živi manje od dvadeset ljudi. Ispod sela je lijepa plaža. Do plaže se hoda jedan sat.',
  },
  Beli: {
    introHrA1:
      'Beli je malo selo na otoku Cresu. Selo je na brijegu iznad mora, na sjeveru otoka. U Belom je eko-centar. Ljudi tu čuvaju bjeloglave supove. Sup je velika ptica. Supovi žive na stijenama blizu sela. Centar liječi bolesne ptice.',
  },
  Rogoznica: {
    introHrA1:
      'Rogoznica je mali grad na moru u Dalmaciji. Grad je između Šibenika i Trogira. Rogoznica je bila otok. Danas je spojena s obalom. Ima veliku marinu za brodove. Blizu grada je slano jezero. Jezero se zove Zmajevo oko.',
  },
  Ražanj: {
    introHrA1:
      'Ražanj je malo ribarsko selo u Dalmaciji. Selo je na moru, zapadno od Rogoznice. Ima jednu mirnu luku i kamene kuće. Crkva u selu je crkva svetog Nikole. Ime Ražanj znači dugi štap za pečenje. Poluotok je dug i uzak kao ražanj. Ljeti dolaze gosti.',
  },
  Žirje: {
    introHrA1:
      'Žirje je otok blizu Šibenika. To je najdalji otok šibenskog arhipelaga. Na otoku su dva sela: Muna i Brbinjšćak. Ovdje živi manje od sto ljudi. Otok ima stare tvrđave i lijepe uvale. Ljeti dolaze turisti na kupanje i ronjenje. Ime otoka dolazi od riječi žir.',
  },
  Brodarica: {
    introHrA1:
      'Brodarica je naselje na moru blizu Šibenika. Ono je na obali, a preko puta je mali otok Krapanj. Brod do otoka vozi samo pet minuta. Ime naselja dolazi od riječi brod. Danas ovdje živi mnogo ljudi. Ljeti dolaze turisti. Brodarica je kao predgrađe Šibenika.',
  },
  Krapanj: {
    introHrA1:
      'Krapanj je mali otok blizu Šibenika. To je najmanji naseljeni otok u Hrvatskoj. Otok je vrlo nizak, samo malo iznad mora. Na otoku je stari samostan i crkva. Ljudi su ovdje stoljećima ronili za spužvama. Brod do kopna vozi pet minuta. Ljeti dolaze turisti.',
  },
  Betina: {
    introHrA1:
      'Betina je selo na otoku Murteru. Selo je na istočnoj strani otoka, uz more. Ovdje ljudi već tristo godina grade drvene brodove. Poznati brod iz Betine zove se gajeta. U selu je muzej drvene brodogradnje. To je jedini takav muzej u Hrvatskoj.',
  },
  'Kaštel Kambelovac': {
    introHrA1:
      'Kaštel Kambelovac je naselje na moru između Trogira i Splita. To je jedno od sedam Kaštela. Ime dolazi od obitelji Kambelo iz Splita. Oni su ovdje sagradili kulu oko godine 1500. Stara kula još stoji uz more. Danas je Kambelovac dio grada Kaštela.',
  },
  'Kaštel Novi': {
    introHrA1:
      'Kaštel Novi je naselje na moru između Trogira i Splita. To je jedno od sedam Kaštela. Ime znači novi kaštel. Trogirska obitelj Cipiko sagradila je ovdje kulu 1512. godine. U naselju je crkva svetog Petra. Danas je Kaštel Novi dio grada Kaštela.',
  },
  'Kaštel Štafilić': {
    introHrA1:
      'Kaštel Štafilić je naselje na moru blizu Trogira. To je najzapadnije od sedam Kaštela. Plemić Stjepan Štafilić sagradio je ovdje kulu oko godine 1500. U naselju raste vrlo stara maslina. Ona ima više od 1500 godina. Blizu naselja je zračna luka Split.',
  },
  Vinišće: {
    introHrA1:
      'Vinišće je malo selo na moru između Marine i Trogira. Selo je u dugoj i dubokoj uvali. Ovdje živi oko 350 ljudi. Ime sela dolazi od riječi vino. Ljudi su tu uzgajali vinograde i masline. Ljeti dolaze turisti i brodovi.',
  },
  Mimice: {
    introHrA1:
      'Mimice su malo selo na moru istočno od Omiša. Selo je između planine i mora. Ovdje živi oko 300 ljudi. Kuće stoje u jednom redu uz obalu. U selu je crkva svetog Roka. Plaža ima bijele kamenčiće i vrlo je poznata. Ljeti dolaze turisti.',
  },
  Pisak: {
    introHrA1:
      'Pisak je malo selo na moru istočno od Omiša. To je posljednje selo Omiške rivijere. Ovdje živi oko 200 ljudi. Kuće stoje na strmoj padini iznad mora. U selu je crkva svetog Andrije. Plaže su mirne i imaju kamenčiće. Ljeti dolaze turisti.',
  },
  Promajna: {
    introHrA1:
      'Promajna je malo selo na Makarskoj rivijeri. Selo je južno od Baške Vode, između ceste i mora. Ovdje živi oko 400 ljudi. Plaža je duga i ima kamenčiće. Ime dolazi od riječi promaja. Ljeti dolaze obitelji s djecom.',
  },
  Bratuš: {
    introHrA1:
      'Bratuš je malo selo na Makarskoj rivijeri. Selo je između Promajne i Krvavice, ispod planine Biokovo. Ovdje živi oko 150 ljudi. Ima nekoliko kamenih kuća i malu luku. Plaža je u uvali, a iza nje je borova šuma. Selo je mirno. Ljeti dolaze turisti.',
  },
  Igrane: {
    introHrA1:
      'Igrane su malo selo na Makarskoj rivijeri. Selo je između Drašnica i Živogošća. Ovdje živi oko 400 ljudi. Selo ima zeleni rt s borovima koji ide u more. Na brdu je vrlo stara crkva svetog Mihovila. Blizu luke stoji stara kula. Ljeti dolaze turisti.',
  },
  Drašnice: {
    introHrA1:
      'Drašnice su malo selo na Makarskoj rivijeri. Selo je između Živogošća i Igrana. Ima dva dijela: stari dio gore na brdu i novi dio dolje uz more i cestu. Na padini stoji vrlo stara crkva svetog Jurja. Ljeti dolaze turisti na plažu.',
  },
  Krvavica: {
    introHrA1:
      'Krvavica je malo selo na Makarskoj rivijeri. Selo je između Bratuša i Baške Vode. Ovdje živi manje od 200 ljudi. U selu je velika stara zgrada od betona. To je bilo lječilište za djecu. Zgrada je prazna od 1991. godine.',
  },
  Zaostrog: {
    introHrA1:
      'Zaostrog je selo na Makarskoj rivijeri, južno od Drvenika. U selu je stari franjevački samostan. Samostan je osnovan 1468. godine. Ovdje je živio i pisao pjesnik Andrija Kačić Miošić. On je ovdje i pokopan. Samostan ima veliku knjižnicu i muzej. Ljeti dolaze turisti.',
  },
  Brist: {
    introHrA1:
      'Brist je malo selo na Makarskoj rivijeri. Selo je između Zaostroga i Podaca. Ovdje živi oko 300 ljudi. U Bristu je rođen poznati pjesnik Andrija Kačić Miošić. On je rođen 1704. godine. U selu stoji njegov spomenik. Selo ima stare kamene kuće i more.',
  },
  Podaca: {
    introHrA1:
      'Podaca su selo na Makarskoj rivijeri, između Brista i Gradca. Ovdje živi oko 600 ljudi. Selo ima dva dijela: stari dio na padini planine Rilić i novi dio dolje uz more. U starom dijelu je crkva svetog Stjepana. Ljeti dolaze turisti.',
  },
  Komarna: {
    introHrA1:
      'Komarna je malo naselje na moru u južnoj Dalmaciji. Godine 2022. otvoren je veliki Pelješki most. Most počinje u Komarni i ide na poluotok Pelješac. Most je dug više od dva kilometra. Sada mnogo automobila prolazi kroz Komarnu.',
  },
  Klek: {
    introHrA1:
      'Klek je malo selo na moru u južnoj Dalmaciji. Selo je blizu granice s Bosnom i Hercegovinom, kod Neuma. Ovdje živi oko 200 ljudi. Klek ima dugu plažu s pijeskom. Obitelji s djecom dolaze ljeti. Ime sela dolazi od stare biljke klek.',
  },
  Mlini: {
    introHrA1:
      'Mlini su selo na moru blizu Dubrovnika. Selo je u zaljevu između Dubrovnika i Cavtata. Ovdje živi oko tisuću ljudi. Ime dolazi od riječi mlin. Uz zaljev su veliki hoteli i plaža. Iz male luke brodovi voze u Dubrovnik.',
  },
  Plat: {
    introHrA1:
      'Plat je malo selo na moru blizu Dubrovnika. Selo je između Mlina i Cavtata. Ovdje živi manje od 200 ljudi. Iznad mora stoji vrlo velik hotel. Hotel se zove Croatia i sagrađen je 1973. godine. Ime sela znači ravan komad zemlje. Ljeti dolazi mnogo gostiju.',
  },
  Mokošica: {
    introHrA1:
      'Mokošica je dio grada Dubrovnika. Naselje je na brdu iznad Rijeke dubrovačke, sjeverozapadno od starog grada. Ovdje živi oko 6000 ljudi. Ima stari dio i novi dio s velikim zgradama. Ime dolazi od stare slavenske božice Mokoš. Autobusi često voze u grad.',
  },
  Komolac: {
    introHrA1:
      'Komolac je malo naselje blizu Dubrovnika. Ono je na Rijeci dubrovačkoj, gdje rijeka Ombla izlazi iz stijene. Rijeka je vrlo kratka. Ovdje je velika marina za jahte. To je najveća marina na južnom Jadranu. Blizu stoji stara ljetna vila obitelji Sorkočević.',
  },
  Konavle: {
    introHrA1:
      'Konavle su kraj na krajnjem jugu Hrvatske. To je duga dolina od Dubrovnika do granice s Crnom Gorom. Konavle nisu jedno mjesto, nego mnogo sela. Ljudi tu imaju vinograde i polja. Poznata je lijepa narodna nošnja. Glavno mjesto je Cavtat.',
  },
  Pridvorje: {
    introHrA1:
      'Pridvorje je selo u Konavlima, jugoistočno od Dubrovnika. Ovdje je nekad živio knez koji je vladao Konavlima za Dubrovačku Republiku. Ime sela znači kod dvora. U selu je stari franjevački samostan iz 15. stoljeća. Selo je stradalo u ratu 1991. godine. Danas je obnovljeno.',
  },
  Gruda: {
    introHrA1:
      'Gruda je najveće selo u unutrašnjosti Konavala, jugoistočno od Dubrovnika. Selo je na dnu široke doline. Ovdje živi oko 600 ljudi. Tu se križaju ceste prema Cavtatu, Crnoj Gori i vinogradima. U ratu 1991. selo je spaljeno. Poslije je obnovljeno.',
  },
  Molunat: {
    introHrA1:
      'Molunat je selo na moru na krajnjem jugu Hrvatske. Ono je u Konavlima, blizu granice s Crnom Gorom. Ovdje živi oko 200 ljudi. Selo stoji na malom poluotoku s dvije uvale. Zato brodovi tu imaju zaštitu od svakog vjetra. Ljudi su tu uvijek bili ribari.',
  },
  Kuna: {
    introHrA1:
      'Kuna je selo na poluotoku Pelješcu. Selo je visoko na kršu, iznad mora. Ovdje živi oko 200 ljudi. Oko sela su vinogradi. Tu raste plavac mali, poznata hrvatska crna sorta. Ime sela znači životinja kuna. U selu je franjevački samostan.',
  },
  Putniković: {
    introHrA1:
      'Putniković je malo selo na poluotoku Pelješcu. Selo je u unutrašnjosti, između Janjine i Stona. Ovdje živi oko 150 ljudi. Oko sela su vinogradi s kamenim zidovima. Tu rastu sorte plavac mali i pošip. Male obiteljske vinarije prave dobro crno vino.',
  },
  'Babino Polje': {
    introHrA1:
      'Babino Polje je najveće selo na otoku Mljetu. Selo je u polju u sredini otoka. Ovdje živi oko 300 ljudi. To je glavno mjesto općine Mljet. Blizu sela, na obali, je poznata Odisejeva špilja. Ljudi kažu da je tu živio Odisej. Ljeti dolaze turisti.',
  },
  Goveđari: {
    introHrA1:
      'Goveđari su malo selo na otoku Mljetu. Selo je u Nacionalnom parku Mljet, na zapadu otoka. Ovdje živi oko 150 ljudi. Ispod sela su dva jezera, Veliko i Malo jezero. Na otočiću u jezeru je stari samostan. Ime sela dolazi od riječi govedo.',
  },
  Pomena: {
    introHrA1:
      'Pomena je malo selo na zapadnom kraju otoka Mljeta. Selo je u Nacionalnom parku Mljet. Ovdje živi manje od 50 ljudi. To je jedno od najmanjih sela u Hrvatskoj. Trajekt s Korčule dolazi u Pomenu. U selu je jedan hotel. Turisti odavde idu u park.',
  },
  Saplunara: {
    introHrA1:
      'Saplunara je vrlo malo naselje na jugoistoku otoka Mljeta. Ovdje živi manje od 30 ljudi. Saplunara ima plažu s pravim pijeskom, što je rijetko u Hrvatskoj. Iza plaže je borova šuma. Ime dolazi od stare riječi za pijesak. Ljeti dolaze turisti na plažu.',
  },
  Stomorska: {
    introHrA1:
      'Stomorska je malo selo na otoku Šolti, nasuprot Splitu. Selo je na sjeveroistočnoj obali otoka, u dubokoj uvali. Ovdje živi oko 200 ljudi. Stomorska je glavna ribarska luka otoka. Iz sela su dolazili mnogi kapetani brodova. U luci su lijepi drveni brodovi.',
  },
  Maslinica: {
    introHrA1:
      'Maslinica je malo selo na zapadnom kraju otoka Šolte. To je jedino selo na zapadnoj obali otoka. Selo ima kaštel s pet kula. Kaštel je sagradila obitelj Martinis 1708. godine. U uvali ispred sela je sedam malih otočića. Ime sela dolazi od riječi maslina.',
  },
  Rogač: {
    introHrA1:
      'Rogač je mala luka na sjevernoj obali otoka Šolte, nasuprot Splitu. Ovdje živi manje od 100 ljudi. Rogač je glavna trajektna luka otoka. Trajekt iz Splita dolazi nekoliko puta na dan. Svi ljudi s otoka putuju kroz Rogač. Riječ rogač znači i jedno drvo.',
  },
  'Donje Selo': {
    introHrA1:
      'Donje Selo je staro selo u unutrašnjosti otoka Šolte. Selo je na visoravni u sredini otoka. Ovdje živi manje od 200 ljudi. Ime znači niže selo. U selu su stare kamene kuće i maslinici. Ljudi tu još prave maslinovo ulje.',
  },
};
