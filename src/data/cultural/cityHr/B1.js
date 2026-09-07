// cityHr/B1.js — City of the Day's Croatian intro at B1, keyed by the
// city's `name` in CROATIAN_CITIES.
//
// B1 — the baseline register HISTORY established (~100 words). The field keeps its BARE name: gradedHr treats the bare `*Hr` field as the B1 text, and every consumer that never heard of grading reads it.
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
// carrying a `introHr` field rather than to a bare string, because
// `lintCroatianText.mjs` matches Croatian by FIELD NAME
// (`[a-zA-Z]*Hr[ABC]?[12]?`) and a bare `'Zagreb': '…'` would key the text by
// a city name the matcher cannot see — the whole corpus invisible to the lint.
// Every band file must be in that script's TARGETS; `cityOfDayGraded.test.tsx`
// derives the file list from disk and checks it.
//
// 364 cities, 35,586 Croatian words.
export const CITY_INTRO_HR_B1 = {
  Dubrovnik: {
    introHr:
      'Dubrovnik je najpoznatiji hrvatski grad. Nalazi se na jugu Dalmacije, uz samo more. Stari grad okružuju zidine duge gotovo dva kilometra, koje nikada nisu osvojene u borbi. Stoljećima je Dubrovnik bio samostalna republika. Dubrovačka Republika nije imala veliku vojsku, nego je mirom i pametnom diplomacijom čuvala svoju slobodu. Godine 1416. ukinula je trgovinu robovima, mnogo prije većine europskih država. Danas turisti hodaju po Stradunu, glavnoj ulici od bijelog kamena, i penju se na zidine da vide crvene krovove i plavo more.',
  },
  Rijeka: {
    introHr:
      'Rijeka je najveća hrvatska luka i treći grad po veličini. Kroz povijest njome su vladali Venecija, Francuska, Austrija, Mađarska, Italija i Jugoslavija, a grad je ipak ostao svoj. Nakon Prvoga svjetskog rata talijanski pjesnik D’Annunzio zauzeo ju je s privatnom vojskom, a Italija ju je 1924. pripojila. Poslije Drugoga svjetskog rata pripala je Jugoslaviji, a od 1991. Hrvatskoj. Riječki karneval, koji se održava od 1449. godine, najveći je u Hrvatskoj. Iznad grada je svetište na Trsatu, u koje hodočasnici dolaze već sedam stotina godina. Godine 2020. Rijeka je bila Europska prijestolnica kulture.',
  },
  Pula: {
    introHr:
      'Pula je najveći grad Istre i jedan od najstarijih gradova u Hrvatskoj. Njegova rimska arena, sagrađena u prvom stoljeću, jedan je od najbolje očuvanih amfiteatara na svijetu i danas se u njoj održavaju koncerti i filmski festival. U starom gradu stoje Augustov hram i Slavoluk Sergijevaca, koji stoje već više od dvije tisuće godina. Između dva svjetska rata Pula je bila pod Italijom, a nakon rata mnogi su Talijani otišli. Irski pisac James Joyce živio je u Puli 1904. godine i ovdje predavao engleski. Danas Pula ima oko šezdeset tisuća stanovnika i živi od turizma, luke i brodogradnje.',
  },
  Osijek: {
    introHr:
      'Osijek je glavni grad Slavonije, istočne hrvatske regije ravnica, suncokreta i paprike. Grad leži na Dravi, koja je ovdje granica prema Mađarskoj. Njegova barokna tvrđava Tvrđa, koju su Habsburgovci sagradili početkom osamnaestog stoljeća nakon što su protjerali Osmanlije, jedan je od najbolje sačuvanih vojnih kompleksa toga doba u Srednjoj Europi; danas su u njoj fakulteti, kafići i restorani. U ratu 1991. i 1992. Osijek je bio pod opsadom više od četiristo dana. Europska avenija najduža je pješačka ulica u Hrvatskoj, a slavonski kulen, ljuta kobasica s paprikom, zaštićen je u Europskoj uniji.',
  },
  Šibenik: {
    introHr:
      'Šibenik je poseban među dalmatinskim gradovima: nisu ga osnovali Grci ni Rimljani, nego Hrvati. Prvi se put spominje 1066. godine, u vrijeme kralja Petra Krešimira IV. Najveće blago grada jest katedrala svetog Jakova, koja se gradila više od sto godina i cijela je sagrađena od kamena, bez opeke. Kipar Juraj Dalmatinac izradio je oko nje 71 kamenu glavu običnih građana svoga vremena. Katedrala je pod zaštitom UNESCO-a. Iznad grada stoje tvrđave, a samo petnaest kilometara dalje počinje Nacionalni park Krka.',
  },
  Trogir: {
    introHr:
      'Trogir je gradić na malom otoku koji je mostom spojen s kopnom. Cijela njegova povijesna jezgra pod zaštitom je UNESCO-a: na prostoru manjem od jednoga gradskog bloka nalazi se dvije tisuće godina arhitekture. Osnovali su ga Grci u trećem stoljeću prije Krista, zatim je bio rimski Tragurium, pa hrvatski i mletački grad. Katedrala svetog Lovre čuva Radovanov portal iz 1240. godine, najljepše djelo srednjovjekovnoga kiparstva u Hrvatskoj. Na portalu su prikazani lov, ribolov i poljski radovi, svakodnevni život toga vremena. Cijeli se grad može prehodati u deset minuta.',
  },
  Hvar: {
    introHr:
      'Hvar je najsunčaniji otok u Hrvatskoj, s više od 2700 sunčanih sati godišnje. Poznat je po poljima lavande, renesansnim palačama i zidinama iznad grada. U gradu Hvaru nalazi se komunalno kazalište iz 1612. godine, jedno od najstarijih u Europi koje još radi. Stari Grad na drugoj strani otoka osnovali su Grci 384. godine prije Krista, a njihova podjela polja vidi se i danas. Godine 1510. na Hvaru je izbio jedan od prvih velikih seljačkih ustanaka u Europi, koji je vodio Matij Ivanić. Danas je glavni trg ljeti pun kafića i brodova.',
  },
  Varaždin: {
    introHr:
      'Varaždin je bio glavni grad Hrvatske od 1767. do 1776. godine, a njegov barokni centar jedan je od najljepših u Srednjoj Europi. Kad je 1776. veliki požar uništio grad, glavni je grad preseljen u Zagreb, a Varaždin je obnovljen u skladnom baroknom stilu. Danas je grad poznat po festivalu Varaždinske barokne večeri, koji se održava od 1971., i po uličnom festivalu Špancirfest, kad se ulice pune glazbe i kazališta. Varaždinsko groblje, koje je uredio Hermann Bollé, tako je lijepo da ga ljudi posjećuju kao park. U gradu je i srednjovjekovna tvrđava Stari grad.',
  },
  Karlovac: {
    introHr:
      'Karlovac je grad koji je nacrtan prije nego što je sagrađen. Habsburgovci su ga osnovali 1579. godine kao renesansnu tvrđavu u obliku šesterokrake zvijezde, kako bi zaustavili osmansko napredovanje prema Srednjoj Europi. Ime je dobio po nadvojvodi Karlu, a oblik zvijezde još se vidi u planu ulica. Kroz Karlovac teku četiri rijeke: Kupa, Korana, Mrežnica i Dobra, pa se Karlovčani ljeti kupaju u rijeci, a ne u moru. Od 1854. u gradu se proizvodi pivo Karlovačko. U Domovinskom ratu grad je bio na prvoj crti, a spomen-područje Turanj čuva sjećanje na to vrijeme.',
  },
  Rovinj: {
    introHr:
      'Rovinj je istarski ribarski grad izgrađen na poluotoku: uske kamene ulice penju se do crkve svete Eufemije na vrhu brda, a šarene kuće spuštaju se do mora. Do 1763. godine Rovinj je bio otok, a zatim je kanal zatrpan i grad je spojen s kopnom. Više od pet stoljeća bio je pod Venecijom, pa je talijanski karakter grada još vidljiv; stariji ljudi govore i rovinjskim dijalektom talijanskog. Danas je Rovinj grad umjetnika: u ulici Grisia svake se godine od 1967. održava izložba slika na otvorenom. Grad je poznat i po maslinovom ulju i po vinu.',
  },
  Poreč: {
    introHr:
      'Poreč je istarski grad na moru čije se najveće blago nalazi u crkvi. Eufrazijeva bazilika iz šestog stoljeća pod zaštitom je UNESCO-a i čuva jedne od najljepših bizantskih mozaika na svijetu. Biskup Eufrazije dao ih je izraditi između 553. i 559. godine, u isto vrijeme kad su nastajali slavni mozaici u Ravenni. Na zlatnoj pozadini prikazani su Bogorodica s djetetom, anđeli i sam biskup s modelom crkve u rukama. Poreč ima i najbolje sačuvanu rimsku mrežu ulica u Hrvatskoj; glavna ulica Decumanus i danas ide ravno kroz stari grad. Po broju noćenja Poreč je najposjećeniji turistički grad u Hrvatskoj.',
  },
  Opatija: {
    introHr:
      'Opatija je bila najelegantnije ljetovalište Austro-Ugarske. Sve je počelo 1844. godine, kad je riječki trgovac Iginio Scarpa sagradio Vilu Angiolinu i pozvao bečko plemstvo. Kad je 1873. otvorena željeznica od Beča do Rijeke, u Opatiju su počeli dolaziti car Franjo Josip, carica Elizabeta, Čehov, Mahler i mnogi drugi. Godine 1889. Opatija je službeno proglašena lječilištem. Hotel Kvarner iz 1884. prvi je hotel u Hrvatskoj i još radi. Šetnica Lungomare, duga dvanaest kilometara, jedna je od najljepših u Europi. Svake veljače u gradu cvjetaju kamelije.',
  },
  Makarska: {
    introHr:
      'Makarska leži na uskom prostoru između mora i planine Biokovo, čiji se vrhovi dižu do 1762 metra gotovo izravno iz mora. Grad je središte Makarske rivijere, najgušćeg niza plaža i ljetovališta u Hrvatskoj. Franjevački samostan iz 1400. godine čuva jednu od najbogatijih zbirki morskih školjaka u Europi. Iz Makarske je i fra Andrija Kačić Miošić, franjevac čija je knjiga pjesama iz 1756. godine dvjesto godina bila najčitanija knjiga u hrvatskim domovima. Na Biokovu je danas staklena šetnica s koje se vidi cijela obala.',
  },
  Korčula: {
    introHr:
      'Korčula je srednjovjekovni grad na istoimenom otoku, poznat po ulicama koje su raspoređene poput riblje kosti. Takav raspored nije slučajan: ulice puštaju svježi maestral, a zaustavljaju hladnu buru. Otok se s ponosom, iako bez čvrstih dokaza, smatra rodnim mjestom Marka Pola. Korčulani su stoljećima bili poznati brodograditelji, a i danas u gradu plešu Morešku, ples s mačevima koji se izvodi samo ovdje. Otok daje dvije vlastite sorte bijelog vina, grk i pošip, koje se ne uzgajaju nigdje drugdje.',
  },
  Nin: {
    introHr:
      'Nin je možda najmanji grad u Hrvatskoj, ali jedan od najvažnijih za hrvatsku povijest. Smješten je na malom otoku u laguni blizu Zadra. U rimsko doba zvao se Aenona, a u devetom stoljeću postao je sjedište hrvatskih knezova i kraljeva. Ovdje su krunjeni prvi hrvatski vladari. Crkva svetog Križa iz devetog stoljeća najstarija je sačuvana hrvatska crkva; zovu je i najmanjom katedralom na svijetu. Iz Nina je biskup Grgur Ninski branio pravo na hrvatski jezik u crkvi. Grad je poznat i po soli, koja se ovdje proizvodi od rimskih vremena, i po ljekovitom blatu.',
  },
  Sinj: {
    introHr:
      'Sinj je najpoznatiji grad Dalmatinske zagore, kraja iza planina uz obalu. Poznat je po Sinjskoj alki, viteškom natjecanju koje se održava svake godine prve nedjelje u kolovozu od 1715. godine. Te je godine mala posada od manje od 700 branitelja odbila veliku osmansku vojsku, a stanovnici su pobjedu pripisali Gospi Sinjskoj, čiju sliku i danas štuju. Na Alki jahači u starim dalmatinskim odorama galopiraju i kopljem gađaju mali željezni kolut, alku. Natjecanje nije preskočeno nijedne godine, ni za vrijeme ratova, i zaštićeno je kao nematerijalna baština UNESCO-a.',
  },
  Ilok: {
    introHr:
      'Ilok je najistočniji hrvatski grad, smješten na visokoj obali Dunava na granici sa Srbijom. Grad je poznat po vinu: vinski podrumi koje su u četrnaestom stoljeću osnovali franjevci među najstarijima su u Hrvatskoj, a iločki traminac poslužen je 1953. na krunidbi kraljice Elizabete II. U srednjovjekovnom dvorcu Odescalchi nalazi se mauzolej Nikole Iločkoga, jedan od najljepših gotičkih spomenika u zemlji. Pod Osmanlijama, od 1526. do 1688., iločko se vino slalo na sultanov dvor. Od 1991. do 1997. grad je bio pod okupacijom, a hrvatsko je stanovništvo protjerano; 1997. mirno je vraćen Hrvatskoj.',
  },
  Đakovo: {
    introHr:
      'Đakovo je slavonski grad čija se katedrala vidi trideset kilometara daleko preko ravnice. Katedrala svetog Petra, dovršena 1882. godine, ima dva tornja visoka 84 metra i smatra se najljepšom crkvom Slavonije. Sagradio ju je biskup Josip Juraj Strossmayer, najvažniji crkveni čovjek u hrvatskoj povijesti, koji je financirao Hrvatsku akademiju znanosti i umjetnosti, Sveučilište u Zagrebu i mnoge škole. Đakovo je od trinaestog stoljeća sjedište biskupije. U gradu je i državna ergela u kojoj se uzgajaju lipicanci, a svakog ljeta održavaju se Đakovački vezovi, najveći festival folklora u Hrvatskoj s više od dvije tisuće sudionika.',
  },
  'Vukovar Grad': {
    introHr:
      'Vukovar je grad na Dunavu koji je prije rata bio jedan od najljepših baroknih gradova u Hrvatskoj; zvali su ga Bečom istoka. U jesen 1991. izdržao je opsadu od 87 dana, u kojoj je razoreno devedeset posto grada. Vodotoranj, pogođen više od šesto puta, nije pao i postao je simbol otpora; namjerno je ostavljen s ranama kao spomenik. Danas se grad obnavlja, a obnova dvorca Eltz najveći je projekt zaštite baštine u Hrvatskoj. Nedaleko od Vukovara pronađena je vučedolska golubica, stara 4600 godina, jedan od najvažnijih arheoloških nalaza u zemlji.',
  },
  Koprivnica: {
    introHr:
      'Koprivnica je središte hrvatske naivne umjetnosti. U tridesetim godinama dvadesetog stoljeća slikar Krsto Hegedušić otkrio je u obližnjem selu Hlebine seljake koji su slikali bez ikakve škole: Ivana Generalića, Franju Mraza i Mirka Viriusa. Njihove slike seoskoga života, pune boja i snova, oduševile su Europu, a Hlebinska škola postala je najpoznatija naivna umjetnost na svijetu. U Koprivnici je i Podravka, tvrtka koja je 1959. stvorila Vegetu, začin koji se danas koristi u više od četrdeset zemalja. Grad tako spaja umjetnost i kuhinju na način koji je jedinstven u Hrvatskoj.',
  },
  Čakovec: {
    introHr:
      'Čakovec je glavni grad Međimurja, najmanje i najsjevernije hrvatske županije, smještene između rijeka Mure i Drave. Grad je nerazdvojno vezan s obitelji Zrinski, jednom od najvećih hrvatsko-ugarskih plemićkih obitelji. Nikola Šubić Zrinski poginuo je 1566. braneći tvrđavu Siget od vojske sultana Sulejmana; kad više nije bilo nade, s posljednjim je braniteljima izjurio iz tvrđave u smrt. Njegov je podvig postao simbol hrvatskoga junaštva i tema jedne od prvih hrvatskih opera. Dvorac Zrinskih u Čakovcu danas je muzej. Međimurje je poznato po vinu i po pjesmi popevki, koja je pod zaštitom UNESCO-a.',
  },
  Gospić: {
    introHr:
      'Gospić je glavni grad Like, kršnog i surovog kraja između Velebita i unutrašnjosti. Lika je stoljećima bila granica, dio Vojne krajine koja je dijelila Habsburško Carstvo od Osmanskoga, pa je iz nužde odgajala ratnike. Iz Like su dva velika Hrvata: Nikola Tesla, rođen 1856. u selu Smiljanu sedam kilometara od Gospića, gdje je danas muzej, i Ante Starčević, politički mislilac kojeg zovu Ocem domovine. U Domovinskom ratu Gospić je teško stradao. Lika je poznata po janjetini, krumpiru i šumskom voću, a Plitvička jezera udaljena su pedeset kilometara.',
  },
  Pag: {
    introHr:
      'Pag je jedan od najneobičnijih hrvatskih otoka: gol, kamenit krajolik nalik Mjesecu, koji je stvorila bura i stoljeća sječe šuma za mletačke brodove. Otok ima više ovaca nego ljudi. Ovce pasu bilje posoljeno morskim vjetrom, i zato paški sir ima okus koji se ne može ponoviti nigdje drugdje; to je najpoznatiji hrvatski sir u svijetu. Paška čipka, koju žene u gradu Pagu izrađuju iglom stoljećima, pod zaštitom je UNESCO-a; jedan komad nastaje mjesecima. Treće lice otoka posve je drukčije: plaža Zrće kod Novalje od 2000-ih je jedno od najpoznatijih mjesta za zabavu na otvorenom u Europi.',
  },
  Vis: {
    introHr:
      'Vis je najudaljeniji hrvatski naseljeni otok od kopna. Antička Issa, koju su Grci osnovali 397. godine prije Krista, najstarija je grčka naseobina u Hrvatskoj. Otok je stoljećima bio važna vojna baza: držali su ga Napoleon i Britanci, a 1866. ovdje se odigrala velika pomorska bitka između Austrije i Italije. Godine 1944. Tito je iz špilje na Visu vodio partizanski pokret. Poslije rata otok je bio zatvoren za strance sve do 1989. godine. Ta je izolacija sačuvala Vis od masovnog turizma, pa danas ima čiste uvale, živu ribarsku tradiciju i izvrsna vina.',
  },
  Brač: {
    introHr:
      'Brač je treći po veličini hrvatski otok, poznat po plaži Zlatni rat, po maslinovu ulju i prije svega po bijelom kamenu. Brački vapnenac vadi se već dvije tisuće godina; od njega su sagrađeni Dioklecijanova palača u Splitu, Bijela kuća u Washingtonu i parlament u Beču. U Pučišćima radi jedina klesarska škola te vrste na svijetu, u kojoj se mladi uče starom zanatu. Zlatni rat kod Bola jezik je od šljunka koji mijenja oblik ovisno o vjetru i struji. Na otoku raste više od milijun stabala maslina.',
  },
  'Slavonski Brod': {
    introHr:
      'Slavonski Brod drugi je grad Slavonije, smješten na Savi točno nasuprot Bosni. Habsburgovci su ovdje između 1715. i 1780. sagradili golemu tvrđavu Brod kao najjužniju obranu carstva prema osmanskoj Bosni. Tvrđava pokriva šezdeset hektara i veća je od grada koji je trebala braniti. Franjevački samostan djeluje bez prekida od 1721. godine. Grad se do 1934. zvao samo Brod, a zatim je dobio pridjev Slavonski da bi se razlikovao od Bosanskog Broda na drugoj obali. U Domovinskom ratu grad je granatiran iz Bosne, a most na Savi bio je važan put za humanitarnu pomoć. Brodsko kolo najveći je festival narodnog plesa u Hrvatskoj.',
  },
  Samobor: {
    introHr:
      'Samobor je gradić dvadeset kilometara zapadno od Zagreba, omiljeno izletište Zagrepčana. Prava slobodnoga kraljevskog grada dobio je 1242. godine, iste godine kad i Zagreb, ali je ostao miran trgovački gradić. Poznat je po samoborskoj kremšniti, kolaču od vanilije i lisnatog tijesta koji se od 1929. peče po istom receptu, a godišnje se proda oko milijun komada. Samoborski karneval, koji traje od 1827. godine, najstariji je u Hrvatskoj. Iznad grada stoje ruševine dvorca iz trinaestog stoljeća, a iz Samobora počinju planinarske staze u Samoborsko gorje.',
  },
  Požega: {
    introHr:
      'Požega leži u Požeškoj kotlini, rijetkoj zatvorenoj dolini u inače ravnoj Slavoniji, koju okružuju planine Papuk i Psunj. Već od 18. stoljeća zovu je Zlatna dolina, a habsburški su je službenici nazivali Aurea Civitas, Zlatni grad. Za osmanske vladavine franjevci su ovdje održavali škole i knjižnice, pa je hrvatski kulturni život u gradu trajao bez prekida. U 18. stoljeću Požega je bila središte slavonskoga prosvjetiteljstva: Matija Antun Relković objavio je 1762. satiru Satir, prvo veliko djelo moderne slavonske književnosti. Barokna katedrala, isusovački kolegij i franjevački samostan čine jedan od najljepših baroknih sklopova u Hrvatskoj, a kotlina daje odlična vina, posebno graševinu i portugizac.',
  },
  Petrinja: {
    introHr:
      'Petrinja je grad u Baniji, na rijeci Kupi. Habsburgovci su je u 16. stoljeću izgradili kao utvrđeni grad na Vojnoj krajini, a do 1991. u njoj su zajedno živjeli Hrvati i Srbi. U rujnu 1991. grad su zauzele srpske snage, civilno je stanovništvo protjerano, a Petrinja je oslobođena tek u kolovozu 1995. u operaciji Oluja. Dvadeset pet godina kasnije, 29. prosinca 2020., pogodio ju je potres magnitude 6,4, najjači u Hrvatskoj u 140 godina: sedmero je ljudi poginulo, središte grada je razoreno, a dvije tisuće ljudi ostalo je bez doma usred zime. Obnova još traje, a Stari grad i dalje stoji.',
  },
  Bjelovar: {
    introHr:
      'Bjelovar je planirani habsburški grad, osnovan 1756. godine kao vojno upravno središte Varaždinskog generalata na Vojnoj krajini. Poput Karlovca, nacrtan je na papiru prije gradnje: osam ulica širi se iz središnjeg trga kao zvijezda s osam krakova, što se još vidi iz zraka. Na trgu stoje crkva Presvetog Trojstva i katedrala svete Terezije Avilske iz osamnaestog stoljeća. Bjelovar je trgovačko središte Bilogore i Podravine, poljoprivrednog kraja poznatog po mlijeku i siru. U listopadu 1991. hrvatske su snage zauzele vojarnu u Bjelovaru i osvojile velike količine oružja, što je bila jedna od prvih pobjeda u Domovinskom ratu.',
  },
  Virovitica: {
    introHr:
      'Virovitica je miran podravski grad, poznat po baroknom dvorcu obitelji Pejačević iz 17. stoljeća. Pejačevići su stoljećima upravljali ovim krajem, a u dvorcu je danas jedan od najboljih zavičajnih muzeja u Hrvatskoj. U tom je dvorcu rođena i Dora Pejačević (1885.–1923.), jedna od prvih profesionalnih hrvatskih skladateljica, čija se djela i danas izvode u svijetu. Virovitica je i vinogradarski kraj: ovdašnja graševina ubraja se među najbolja slavonska vina, a svake godine 22. siječnja, na dan svetog Vinka, slavi se Vincekovica uz krijesove. U Domovinskom ratu grad je bio na prvoj crti, a okolica je 1991. i 1992. bila dijelom okupirana.',
  },
  Labin: {
    introHr:
      'Labin je srednjovjekovni grad na brdu u istočnoj Istri, naseljen već tri tisuće godina. Pod Venecijom je bio gotovo četiri stoljeća, pa ima renesansne palače, baroknu ložu i mletačkog lava iznad gradskih vrata. Stoljećima se ovdje kopao ugljen. U ožujku 1921. rudari su zauzeli rudnike i 37 dana sami upravljali proizvodnjom; to je bila Labinska republika, prvi antifašistički ustanak u Europi, prije Mussolinijeva dolaska na vlast. Posljednji rudnik zatvoren je 1989. godine. Danas je Labin grad umjetnika i alternativne kulture, a ispod njega leži Rabac, jedna od najljepših uvala na Jadranu.',
  },
  Mostar: {
    introHr:
      'Mostar je kulturno središte Hercegovine, kraja u kojem živi većina Hrvata Bosne i Hercegovine. Ime grada dolazi od mostara, čuvara mosta. Stari most preko Neretve sagradio je 1566. godine osmanski arhitekt Hajrudin; njegov kameni luk od 29 metara bio je tako smion da je graditelj, kaže priča, pripremio vlastiti pokrov prije nego što su skinute skele. Most je stajao 427 godina, srušen je u ratu 1993. i obnovljen 2004. od istoga kamena, po starim tehnikama. Pod zaštitom je UNESCO-a. S mosta se u Neretvu skače od 1664. godine, a franjevački samostan čuva hrvatsku katoličku prisutnost u gradu već četiri stoljeća.',
  },
  Mljet: {
    introHr:
      'Mljet je najšumovitiji hrvatski otok: 72 posto površine pokriva šuma alepskog bora i crnike, najveća neprekinuta šuma na hrvatskim otocima. U nacionalnom parku nalaze se dva slana jezera, Malo i Veliko jezero, izravno povezana s morem. Na otočiću u Velikom jezeru stoji benediktinski samostan osnovan 1151.; djelovao je šest stotina godina, dok ga Napoleon nije ukinuo, a danas je hotel. Stari su Grci otok zvali Melita, a neki misle da je Homer upravo Mljet opisao kao Kalipsin otok, iako to tvrdi i Malta. Godine 1910. na otok su doneseni mungosi da bi istrijebili zmije; uspjeli su, a mungosa je danas posvuda.',
  },
  Omiš: {
    introHr:
      'Omiš se nalazi na mjestu gdje rijeka Cetina utječe u Jadran, stisnut između mora i strmih vapnenačkih stijena. Od dvanaestog do četrnaestog stoljeća iz Omiša su djelovali gusari iz roda Kačića, kojih se bojao cijeli Jadran. Papa je protiv njih proglasio tri križarska rata, ali nijedan nije uspio. Njihove tvrđave na stijenama, poput Mirabelle, nikada nisu osvojene silom. Danas se na istim stijenama nalaze zipline staze, a kanjonom Cetine spušta se rafting. Omiš je poznat i po klapskom pjevanju, a svake godine održava se festival dalmatinskih klapa.',
  },
  'Biograd na Moru': {
    introHr:
      'Biograd na Moru bio je prijestolnica srednjovjekovnoga hrvatskog kraljevstva prije Zadra: u 11. stoljeću kralj Petar Krešimir IV. učinio ga je svojom prijestolnicom i grad je procvao kao sjedište hrvatskih vladara. Ovdje je okrunjeno pet hrvatskih kraljeva, a obližnji Kornati pripadali su kraljevskim posjedima. Godine 1125. Mlečani su grad, zbog hrvatskog otpora, potpuno razorili, pa se obnavljao polako. Ime mu znači bijeli grad: vapnenačke zidine bijelile su se s mora. Danas je Biograd popularno ljetovalište Zadarske rivijere, a njegova marina jedna je od najvećih i najbolje opremljenih na Jadranu. U njegovu zaleđu, u Ravnim kotarima, leži Vransko jezero, najveće prirodno jezero u Hrvatskoj.',
  },
  Skradin: {
    introHr:
      'Skradin je mali srednjovjekovni gradić na ušću rijeke Krke i tradicionalna ulazna vrata u Nacionalni park Krka. Njegova mala luka, okružena strmim brdima, trgovačko je mjesto još od antike: ilirsko i rimsko naselje na prijelazu preko Krke zvalo se Scardona i bilo je važno upravno središte rimske Dalmacije. Pod mletačkom, osmanskom i austrijskom vlašću Skradin je zadržao ulogu trgovačkoga središta. Danas ima manje od četiri tisuće stanovnika, a svake godine kroz njega prolaze stotine tisuća posjetitelja, jer odavde kreću brodovi prema Skradinskom buku, jednom od najvećih sedrenih slapova u Europi. Do 2021. na slapu se smjelo kupati.',
  },
  Cavtat: {
    introHr:
      'Cavtat je elegantan gradić na poluotoku južno od Dubrovnika, okružen čempresima i morem. Ovdje je oko 600. godine prije Krista osnovana grčka kolonija Epidaur, koja je kasnije postala važan rimski grad. Kad su ga u sedmom stoljeću razorili Avari i Slaveni, izbjeglice su nedaleko osnovale Dubrovnik. Ime Cavtat dolazi od latinskog Civitas Vetus, stari grad. U Cavtatu je 1855. rođen Vlaho Bukovac, najveći hrvatski slikar devetnaestog stoljeća, a na brežuljku iznad grada stoji mauzolej obitelji Račić, jedno od najljepših djela Ivana Meštrovića.',
  },
  Primošten: {
    introHr:
      'Primošten leži na malom poluotoku koji je s kopnom povezan nasipom, a njegov stari grad, s kamenim kućama i crkvom na vrhu, jedan je od najfotografiranijih prizora na Jadranu. Primošten je izvorno bio pravi otok; kopneni most izgrađen je u 16. stoljeću, a po njemu je grad i dobio ime, prema riječi primost. Stanovnici su na kamenitim padinama gradili terase omeđene suhozidima, koje zovu gromače, da bi na njima uzgajali lozu babić. Taj rad traje i danas, a suhozidni vinogradi Primoštena upisani su na UNESCO-ov popis nematerijalne kulturne baštine. Babić s ovih terasa među najstarijim je dalmatinskim crnim vinima.',
  },
  Vodice: {
    introHr:
      'Vodice su jedno od najposjećenijih hrvatskih ljetovališta na Šibenskoj rivijeri, između Zadra i Šibenika. Kao odmaralište razvio se u 20. stoljeću. Češki i slovački turisti otkrili su ga u jugoslavensko doba, 1960-ih, i od tada se vjerno vraćaju svake godine; neke češke obitelji dolaze u isti apartman više od četrdeset ljeta zaredom, pa Vodice imaju najveći udio čeških i slovačkih gostiju u Hrvatskoj. Plaže su betonirana kupališta i šljunčane uvale, a ljeti grad živi i noću. Iznad središta uzdiže se crkva svetoga Križa iz 17. stoljeća, a šibenska katedrala pod zaštitom UNESCO-a i Nacionalni park Krka udaljeni su tek petnaestak minuta.',
  },
  Tisno: {
    introHr:
      'Tisno je gradić podijeljen između kopna i otoka Murtera, koje razdvaja uski morski prolaz; po tom tjesnacu grad je i dobio ime, jer tisno znači usko. Položaj na Murterskom kanalu davao mu je stratešku važnost u sukobima Venecije i Osmanlija, a pokretni most koji spaja dvije strane grada i danas se danju otvara za brodove i zatvara za automobile. Od 2000-ih Tisno je poznato po nečemu sasvim drugom. Festival The Garden i njegovi nasljednici, među njima Love International, Dimensions i Dekmantel, pretvorili su ga u svjetsko glazbeno odredište, pa se ljeti gradić od 2700 stanovnika u jednom vikendu poveća za desetke tisuća posjetitelja.',
  },
  Drniš: {
    introHr:
      'Drniš je mali grad u unutrašnjosti Dalmacije, u dolini rijeke Krke, poznat po dvjema stvarima: najboljem pršutu u Dalmaciji i kiparu Ivanu Meštroviću. Drniški pršut, dimljen i sušen na zraku, smatra se najboljim u Hrvatskoj i nosi zaštićenu zemljopisnu oznaku. Ivan Meštrović (1883.–1962.), najslavniji hrvatski kipar, rođen je u obližnjem Vrpolju; njegova djela ispunjavaju muzeje od Splita do Notre Damea u Indiani. U Otavicama kraj Drniša sam je sagradio crkvu Presvetog Otkupitelja, mauzolej svoje obitelji. Drniški je kraj naseljen od prapovijesti, a pod osmanskom vlašću grad je bio pogranična vojna postaja. Nedaleko je i kanjon Čikole, koji turisti često previde.',
  },
  Imotski: {
    introHr:
      'Imotski je grad u dalmatinskom zaleđu, iznad dvaju neobičnih krških jezera. Modro jezero zimi se puni, a ljeti gotovo presuši i otkrije stijene nalik amfiteatru. Crveno jezero duboko je 530 metara i jedan je od najdubljih krških ponora na svijetu: u njega bi stao Eiffelov toranj i još bi ostalo sto metara. Imotski je oduvijek bio utvrđeni grad na granici Dalmacije i Hercegovine. Njegova tvrđava Topana potječe iz doba srednjovjekovnoga hrvatskog kraljevstva, a poslije su je učvršćivali Osmanlije i Mlečani. Imotska krajina poznata je po žilavim i neovisnim ljudima, po nekim od najboljih hrvatskih nogometaša te po slatkom prošeku i domaćoj rakiji.',
  },
  Metković: {
    introHr:
      'Metković je glavni grad delte Neretve, močvarnog kraja kanala i voda bogatih jeguljama, koji ne podsjeća na ostatak Dalmacije. Delta je najveće hrvatsko močvarno područje i najvažnije utočište ptica u zemlji. U ranom srednjem vijeku ovo je bilo srce hrvatske Neretvanske kneževine, čiji su se gusari Neretvani nadmetali i sa samom Venecijom. Metković se razvio kao trgovačko mjesto gdje se susreću rijeka i more. Nedaleko je Narona, jedno od najvažnijih rimskih nalazišta u Dalmaciji: godine 1995. ondje je otkriven hram carskoga kulta s carskim kipovima koji su još stajali u svojim nišama, rijedak nalaz u rimskom svijetu. Poznate su i neretvanske jegulje i žabe.',
  },
  Ploče: {
    introHr:
      'Ploče su moderan lučki grad na ušću Neretve i glavna morska luka Bosne i Hercegovine. Grad je planski izgrađen 1950-ih, kako bi Bosna i Hercegovina željezničkom prugom do Sarajeva dobila izlaz na more; u jugoslavensko vrijeme zvao se Kardeljevo, po komunističkom teoretičaru Edvardu Kardelju. Duboka prirodna luka danas prihvaća željeznu rudu, aluminij i opći teret, a osobito je važna za aluminij iz talionice kod Mostara, pa su Ploče i dalje najvažnija luka za Bosnu bez vlastite obale. Pruga Ploče–Sarajevo prolazi jednim od najdramatičnijih planinskih krajolika u Europi i bila je graditeljsko čudo 1960-ih. U blizini luke leže Baćinska jezera, lijep prirodni kontrast industriji.',
  },
  Solin: {
    introHr:
      'Solin je gradić odmah sjeverno od Splita, no pod njim i oko njega leže ruševine Salone, glavnoga grada rimske Dalmacije i najvećega rimskog grada na istočnom Jadranu, u kojem je živjelo 60.000 ljudi. U blizini je rođen car Dioklecijan, koji je svoju palaču za mirovinu, današnji Split, sagradio samo šest kilometara dalje, a njezin biskup, sveti Duje, danas je zaštitnik Splita. Godine 614. grad su nasilno razorili Avari i Slaveni. Preživjeli su pobjegli u prazne dvorane Dioklecijanove palače, i tako je nastao Split. Ruševine amfiteatra, foruma, kupališta, starokršćanskih bazilika i biskupskoga sklopa protežu se nekoliko kilometara i još se istražuju.',
  },
  Klis: {
    introHr:
      'Klisom vlada njegova tvrđava na strmoj stijeni iznad Kliškog prijevoja, ključnih vrata između obale i zaleđa, za koja se ratovalo tri tisuće godina. Bila je posljednje hrvatsko uporište koje se u Dalmaciji odupiralo osmanskom napredovanju: kapetan Petar Kružić branio ju je dvadeset pet godina, od 1513. do 1537., protiv brojnih osmanskih opsada. Pod osmanskom vlašću postala je središte trgovine robovima, a Venecija ju je ponovno osvojila 1648., nakon 111 godina osmanske vlasti. S Klisa se vidi cijela splitska rivijera s otocima Bračem, Šoltom i Čiovom. Gledatelji Igre prijestolja odmah će je prepoznati: u četvrtoj i petoj sezoni bila je grad Meereen.',
  },
  Supetar: {
    introHr:
      'Supetar je najveće naselje i glavna trajektna luka otoka Brača, sa Splitom povezana trajektom koji plovi oko pedeset minuta. Ugodan je dalmatinski gradić s baroknom arhitekturom i lijepom lukom. Za mletačke vladavine Supetar se razvio u upravno i trgovačko središte otoka. Brač je slavan po kamenolomima bijelog vapnenca, bračkoga kamena, od kojega su sagrađeni Dioklecijanova palača u Splitu, Bijela kuća u Washingtonu i sjedište Ujedinjenih naroda u New Yorku. Na gradskom groblju nalazi se poznati mauzolej Ivana Rendića, jednoga od najvećih hrvatskih kipara. S druge strane otoka, u Bolu, leži Zlatni rat, najfotografiranija prirodna znamenitost Hrvatske.',
  },
  Bol: {
    introHr:
      'Bol je gradić na južnoj obali Brača, slavan po Zlatnom ratu, najfotografiranijoj hrvatskoj plaži, šljunčanom jezičcu koji mijenja oblik ovisno o strujama i vjetrovima. Bol je naseljen od prapovijesti; njegov dominikanski samostan, osnovan 1475., jedan je od najstarijih u Dalmaciji i čuva vrijednu umjetničku zbirku, među ostalim i Tintorettovu sliku. Gradić je stoljećima živio od vina i ribarstva, a u 20. stoljeću turizam, potaknut isključivo Zlatnim ratom, pretvorio ga je u jedno od najposjećenijih odredišta u Hrvatskoj. Zbog pouzdanoga maestrala Bol je i raj za jedrenje na dasci. Iznad grada uzdiže se Vidova gora, sa 778 metara najviši vrh svih jadranskih otoka.',
  },
  'Stari Grad': {
    introHr:
      'Stari Grad na Hvaru jedan je od najstarijih gradova u Hrvatskoj: Grci s otoka Parosa osnovali su ga 384. godine prije Krista kao koloniju Faros, pa je kao neprekinuto naseljeno mjesto stariji od Rima. Oko njega se prostire Starogradsko polje, na kojem je sačuvana izvorna grčka podjela zemlje, hora: pravokutne parcele odijeljene suhozidima obrađuju se i danas, nakon dvadeset četiri stoljeća. Polje je zato na UNESCO-ovu popisu svjetske baštine. U gradu se nalazi Tvrdalj, utvrđeni ljetnikovac renesansnoga pjesnika Petra Hektorovića iz 1520., s ribnjakom u kojem i danas plivaju ribe. Stari Grad bio je glavno mjesto Hvara sve dok ga nije nadmašio grad Hvar.',
  },
  Ston: {
    introHr:
      'Ston je gradić na Pelješcu poznat po dvjema stvarima: srednjovjekovnim zidinama, najdužima u Europi nakon Kineskog zida, te kamenicama i dagnjama, najboljima na Jadranu. Ston je bio drugi po važnosti grad Dubrovačke Republike, a štitilo ga je 5,5 kilometara obrambenih zidina koje povezuju Ston i Mali Ston. Gradile su se od 14. stoljeća nadalje da bi čuvale dubrovačke solane, jer je sol tada bila poput zlata; sol se ovdje proizvodi još od 4. stoljeća prije Krista. U Stonskom kanalu kamenice se uzgajaju od rimskoga doba, već dvije tisuće godina. Hladna voda Pelješkoga kanala idealna je za njih, pa se stonska kamenica smatra najboljom u Hrvatskoj.',
  },
  Orebić: {
    introHr:
      'Orebić leži na Pelješcu, točno nasuprot otoku Korčuli, od koje ga dijeli tjesnac širok samo dva i pol kilometra; trajekt plovi cijeli dan. Bio je dom najbogatijih dalmatinskih kapetana. U 18. i 19. stoljeću orebićki su kapetani plovili svjetskim oceanima i vraćali se s bogatstvom kojim su gradili otmjene kamene vile što i danas stoje uz obalu. Na vrhuncu, 1870-ih, kapetani iz ovoga mjesta od svega nekoliko tisuća stanovnika posjedovali su više od osamdeset jedrenjaka. Iznad grada stoji franjevački samostan iz 1470., pomorsko svetište s poznatom ikonom Gospe od Anđela. Na obroncima iznad Orebića rastu dingač i postup, najbolja hrvatska crna vina.',
  },
  'Baška Voda': {
    introHr:
      'Baška Voda šarmantno je malo ljetovalište na Makarskoj rivijeri, stisnuto između planine Biokovo i mora. Duga šljunčana plaža i čisto more učinili su je omiljenim obiteljskim odredištem, a Makarska rivijera slovi za dio hrvatske obale s najprozirnijim morem. Iz ribarskoga sela razvila se u ljetovalište tijekom 20. stoljeća. Masiv Biokova, visok 1762 metra, uzdiže se gotovo neposredno iz mora, tek nekoliko kilometara od plaže. U Parku prirode Biokovo staklena platforma Skywalk pruža se metar i pol preko ruba iznad provalije od 1200 metara; za vedra dana vide se Apenini, 250 kilometara daleko. Kroz rivijeru prolazi Jadranska magistrala, klasična cesta uz obalu.',
  },
  Brela: {
    introHr:
      'Brela se redovito biraju među najljepše plaže Mediterana: duge šljunčane obale okružene su starim borovima, more je kristalno čisto, a u plićaku stoji Kamen Brela, mala stijena s jednim borom, najromantičniji prizor hrvatskih plaža. Časopis Forbes svrstao je Brela među deset najljepših plaža na svijetu. Do 20. stoljeća Brela su bila malo ribarsko selo; prozirno more i plaže u sjeni borova privukli su rani turizam, no mjesto se razvijalo pažljivo kako bi sačuvalo prirodni izgled. Borovi su stare pinije, zasađene stoljećima prije zbog hlada i drva. Bor na Kamenu Brela raste tako dugo da je postao najpoznatija hrvatska slika za razglednicu.',
  },
  Novigrad: {
    introHr:
      'Novigrad je jedan od najmanjih istarskih obalnih gradova, sagrađen na malom poluotoku koji je gotovo sa svih strana okružen morem. Rimljani su ga zvali Neapolis, a od 6. stoljeća bio je sjedište biskupije i to je ostao sve do 1828., više od 1200 godina. Grad koji se pješice prijeđe u deset minuta dvanaest je stoljeća bio središte crkvene vlasti za cijeli kraj. U katedrali svetoga Pelagija čuvaju se relikvije toga mučenika iz 4. stoljeća, a crkva je zadržala i ranokršćansku i romaničku umjetnost. Mletačke zidine, kule i loža dobro su očuvane, pa je Novigrad jedan od najbolje sačuvanih malih srednjovjekovnih gradova u Istri.',
  },
  Umag: {
    introHr:
      'Umag je mali istarski obalni grad, poznat kao domaćin turnira Croatia Open Umag, uglednoga ATP turnira serije 250 koji se održava svake godine od 1990. Turnir se igra svakoga srpnja na zemljanim terenima smještenima između mora i srednjovjekovnoga istarskog grada, pa se ubraja među najljepša teniska mjesta na svijetu. U Umag su dolazili najveći igrači svijeta: Agassi, Courier, Muster, Ivanišević i mnogi drugi. Goran Ivanišević pobijedio je ovdje četiri puta prije nego što je 2001. osvojio Wimbledon, pa je umaška publika godinama gledala kako sazrijeva budući grand slam pobjednik. Umag ima i dobro očuvanu mletačku jezgru sa zidinama i ložom.',
  },
  Motovun: {
    introHr:
      'Motovun je srednjovjekovni gradić na brdu iznad doline rijeke Mirne, okružen mletačkim zidinama. To je središte istarske tartufarske industrije: u hrastovim šumama oko grada rastu najveći bijeli tartufi na svijetu. Najveći ikad pronađen, težak 1,31 kilograma, iskopan je upravo kod Motovuna 1999. godine i ušao je u Guinnessovu knjigu rekorda. Nekad su tartufe tražile svinje, a danas ih traže posebno uvježbani psi. Svakog ljeta u gradu se održava Motovun Film Festival, jedan od najvažnijih nezavisnih filmskih festivala u Europi.',
  },
  Grožnjan: {
    introHr:
      'Grožnjan je sićušno istarsko selo na brežuljku, 1960-ih gotovo napušteno: nakon Drugoga svjetskog rata većina njegova stanovništva talijanskoga jezika iselila se, pa su kuće ostale prazne. Godine 1965. jugoslavenske su vlasti prazne kuće ponudile umjetnicima za simboličnu najamninu. Slikari, kipari i glazbenici pretvorili su umiruće selo u jednu od najšarmantnijih umjetničkih kolonija u Europi. Danas se u gotovo svakoj zgradi nalazi galerija, radionica ili atelijer, a svakoga ljeta ovdje se održava svjetska glazbena radionica Jeunesses Musicales. Selo koje je 1960. odumiralo danas je jedno od najposjećenijih odredišta u Istri, a njegova preobrazba jedna je od najuspješnijih priča o kulturnoj obnovi u hrvatskoj povijesti.',
  },
  Buzet: {
    introHr:
      'Buzet, gradić na brežuljku u dolini Mirne, sam se proglasio prijestolnicom istarskoga bijelog tartufa, i to s razlogom: dolina daje bijele tartufe izvanredne kvalitete i veličine, koji se mjere sa slavnim tartufima Périgorda i Albe. Sezona bijelog tartufa traje od listopada do prosinca, a obitelji svoja nalazišta čuvaju kao tajnu koja se prenosi s koljena na koljeno. Svake godine Buzetski festival tartufa privlači kuhare i gurmane iz cijele Europe, a njegov je vrhunac pokušaj da se napravi najveći omlet s tartufima na svijetu. Godine 1999. omlet je pripremljen od dvije tisuće jaja s tartufom od 1,31 kilograma, najvećim ikad pronađenim.',
  },
  Pazin: {
    introHr:
      'Pazin je od hrvatske neovisnosti upravno središte Istarske županije, no najpoznatiji je po Pazinskoj jami, krškom ponoru u koji Pazinčica nestaje pod zemljom. Potok teče tridesetak kilometara pod zemljom i izlazi blizu Pule. Jules Verne, koji u Pazinu nikad nije bio, opisao ju je prema putopisu u romanu Mathias Sandorf iz 1885., u kojem junak skokom u ponor pobjegne i preživi. Iznad jame stoji kaštel iz 12. stoljeća, jedna od najvažnijih srednjovjekovnih utvrda Istre, koja je prelazila iz habsburških u francuske i talijanske ruke; danas je u njemu Etnografski muzej Istre. Ujedno je jedini istarski grad koji nikad nije bio mletački, nego uvijek habsburški.',
  },
  Vodnjan: {
    introHr:
      'Vodnjan je istarski gradić okružen maslinicima koji daju jedno od najboljih maslinovih ulja u Istri, no u njegovoj crkvi svetoga Blaža krije se nešto neobično: tri izvanredno dobro očuvana mumificirana tijela svetaca iz 15. stoljeća, izložena u staklenim vitrinama, kojima su nakon šest stotina godina koža, nokti i kosa ostali netaknuti. Tijela su u Vodnjan donesena iz Venecije 1818. i ubrajaju se među najbolje očuvane prirodne mumije u Europi. Znanstvenici su ih više puta pregledavali i ne mogu objasniti očuvanost: nikakvi postupci mumificiranja nisu primijenjeni, tijela su jednostavno položena u crkvu. Osim mumija, crkva čuva više od 380 relikvija, najveću takvu zbirku u Hrvatskoj.',
  },
  Roč: {
    introHr:
      'Roč je sićušno srednjovjekovno selo u podnožju Učke, s manje od dvjesto stanovnika; njegove zidine i kula s vratima među najbolje su očuvanima u unutrašnjosti Istre. Od Roča do Huma, najmanjega grada na svijetu, vodi sedam kilometara duga Aleja glagoljaša, uređena 1977., s jedanaest kamenih spomenika posvećenih hrvatskoj glagoljaškoj kulturi. Glagoljicu su u 9. stoljeću stvorili sveti Ćiril i Metod, a najdulje se održala upravo u Istri: istarski su je svećenici u bogoslužju upotrebljavali sve do 18. stoljeća, dugo nakon što je drugdje napuštena. U ročkoj crkvi sačuvani su izvorni srednjovjekovni glagoljski natpisi, a selo svake godine ugošćuje Međunarodni festival harmonike.',
  },
  Hum: {
    introHr:
      'Hum je službeno priznat kao najmanji grad na svijetu: u njemu živi dvadesetak do tridesetak ljudi, ali ima vijećnicu, crkvu, zidine i sve što gradu pripada, pa ga tako bilježi i Guinnessova knjiga rekorda. Leži u Istri, na kraju Aleje glagoljaša iz Roča. Status grada Hum čuva još od srednjega vijeka, iako se stanovništvo smanjilo na svega nekoliko kućanstava. Gradonačelnik se bira po drevnom običaju: svaki odrasli stanovnik svoj glas ureže glagoljičkim slovima na drveni štap, pa je svaki izbor vrlo osoban. Crkva iz 12. stoljeća čuva rijetke glagoljske freske, a samo se u Humu proizvodi humska biska, jedinstvena rakija od imele.',
  },
  Crikvenica: {
    introHr:
      'Crikvenica je jedno od najstarijih hrvatskih ljetovališta, na Kvarnerskoj rivijeri, omiljeno među srednjoeuropskim obiteljima od 19. stoljeća. Austrijsko i mađarsko plemstvo otkrilo ga je kao lječilište, jer se topla kvarnerska klima preporučivala za bolesti pluća; kad ju je osobni liječnik cara Franje Josipa preporučio za oporavak, Crikvenica je gotovo preko noći postala moderno odmaralište. Hotel Pavillion iz 1895. jedan je od prvih hrvatskih hotela sagrađenih za turiste, a habsburške vile i danas stoje uz obalu. Zaštićeni zaljev drži more najtoplijim u sjevernom Jadranu, pa duge šljunčane plaže privlače goste iz Austrije, Mađarske i Češke. U gradu je i pripremni centar Hrvatskoga olimpijskog odbora.',
  },
  'Novi Vinodolski': {
    introHr:
      'Novi Vinodolski srednjovjekovni je grad na brežuljku iznad kvarnerske obale, poznat kao mjesto na kojem je 1288. potpisan Vinodolski zakonik, najstariji sačuvani pravni spis napisan hrvatskim jezikom. Zakonik je uređivao vlasništvo nad zemljom, zločine, nasljeđivanje i feudalne obveze, i to na narodnom hrvatskom jeziku, a ne na latinskom, što je za ono doba bilo izvanredno. Napisan je glagoljicom, starim slavenskim pismom, jedan od posljednjih velikih pravnih dokumenata na tom pismu prije latinice. Izvornik se danas čuva u Hrvatskom državnom arhivu u Zagrebu. Stari grad Novog Vinodolskog sačuvao je srednjovjekovni raspored ulica, pa se kroz njega hoda kao u doba kad je zakonik nastao.',
  },
  Senj: {
    introHr:
      'Senj je grad na podnožju Velebita, poznat po najjačoj buri na Jadranu, koja može doseći više od 200 kilometara na sat i prevrnuti kamione. Iznad grada stoji tvrđava Nehaj iz 1558. godine. U Senj su 1537. došli uskoci, hrvatski ratnici koji su pobjegli pred Osmanlijama. Više od stotinu godina iz Nehaja su napadali osmanske i mletačke brodove. Njihovi su mali brodovi mogli ploviti po buri koja je potapala velike galije, pa ih je bilo teško uhvatiti. Venecija je vodila ratove protiv njih dok ih nije raselila. Danas je Senj miran grad s čistim i hladnim morem.',
  },
  Krk: {
    introHr:
      'Krk je najveći hrvatski otok, a od 1980. godine spojen je s kopnom mostom, prvim mostom na neki hrvatski otok. Grad Krk sjedište je jedne od najstarijih hrvatskih biskupija, koja postoji od četvrtog stoljeća. Najvažniji spomenik s otoka jest Bašćanska ploča, pronađena 1851. godine u Baški. Na njoj je glagoljicom oko 1100. godine zapisan najstariji poznati tekst na hrvatskom jeziku, u kojem se spominje kralj Zvonimir. Ploča se danas čuva u Zagrebu i smatra se najvažnijim hrvatskim povijesnim dokumentom. Na otoku je i zračna luka koja služi cijelom Kvarneru.',
  },
  Rab: {
    introHr:
      'Rab je srednjovjekovni grad na istoimenom otoku, poznat po četiri romanička zvonika koja se dižu iznad starog grada i stvaraju jednu od najprepoznatljivijih silueta na Jadranu. Zvonici su građeni između dvanaestog i šesnaestog stoljeća. Grad je četiri stotine godina bio pod Venecijom i sačuvao je mletački raspored ulica i palača. Rab ima i neobičnu modernu priču: 1936. godine engleski kralj Edward VIII. dobio je dopuštenje da se ovdje kupa gol, i tako je nastala prva službena nudistička plaža u Europi. Otok je poznat i po pješčanim plažama i po rapskoj torti.',
  },
  'Mali Lošinj': {
    introHr:
      'Mali Lošinj jedan je od najljepših malih gradova u Hrvatskoj. Njegova je luka okružena šarenim kućama kapetana iz osamnaestog stoljeća; lošinjski su kapetani u doba Austro-Ugarske plovili svjetskim morima i zaradu ulagali u kuće na rivi. Zbog blage klime i mirisnog bilja, kadulje, lavande i ružmarina, austrijski su liječnici 1892. godine proglasili Lošinj otokom zdravlja. Na otoku raste više od tisuću sto biljnih vrsta. U moru oko Lošinja živi zajednica dobrih dupina, koju znanstvenici prate od 1987. godine; to je najstariji takav projekt u Europi.',
  },
  Cres: {
    introHr:
      'Cres je jedan od najvećih otoka na Jadranu, divlji i rijetko naseljen, s jednom od najmanjih gustoća stanovništva u Hrvatskoj. Na njemu živi kolonija bjeloglavih supova, jedina u Hrvatskoj u kojoj se te ptice gnijezde. Druga je znamenitost Vransko jezero, geološka zagonetka: slatkovodno jezero koje leži iznad razine mora na otoku okruženom slanom vodom. Slatko ostaje zato što ga hrane podzemni izvori koji se filtriraju kroz vapnenac i tako gube sol, a znanstvenici još proučavaju kako točno taj sustav održava slatku vodu usred mora. Cresom je stoljećima vladala Venecija. Otok nema most prema kopnu, pa se na njega stiže isključivo trajektom.',
  },
  Lovran: {
    introHr:
      'Lovran je malo ljetovalište na Opatijskoj rivijeri, poznato po bujnom mediteranskom zelenilu, habsburškim vilama i voćnjacima trešanja. Ime je dobio po lovoru, mediteranskom stablu koje označava granicu njegove klime. Razvijao se zajedno s Opatijom kao austrougarsko lječilište, a vile iz habsburškoga doba do danas su zadržale ozračje belle époque. Planina Učka zaustavlja hladne sjeverne vjetrove i stvara mediteranski džep u sjevernoj Hrvatskoj: zbog te mikroklime na istoj zemljopisnoj širini kao Beč rastu hortenzije, kamelije i lovor, biljke koje bi inače tražile toplije podneblje. Učka pritom djeluje kao prirodni zid. Svake godine u Lovranu se održava Marunada, festival kojim se slavi berba domaćega slatkog kestena, maruna.',
  },
  'Velika Gorica': {
    introHr:
      'Velika Gorica, najveći grad Zagrebačke županije, leži u turopoljskoj nizini južno od Zagreba, a u njoj je i zagrebačka Zračna luka Franjo Tuđman, najprometnija u Hrvatskoj. Turopolje je povijesno bilo kraj hrvatskoga nižeg plemstva, plemenitih Turopoljaca, koji su plemićki status zadržali kroz stoljeća osmanskih ratova; njihov je sabor zasjedao u obližnjem Lukavcu. Kraj je poznat po turopoljskoj svinji, jednoj od dviju hrvatskih autohtonih pasmina: do 1990-ih gotovo je izumrla, no spašena je, a njezina se mast u Monarhiji smatrala najboljom. Turopoljski lug među najbolje je očuvanim nizinskim hrastovim šumama u Hrvatskoj, a svakoga proljeća na dimnjacima se gnijezdi više roda nego igdje u zagrebačkom kraju.',
  },
  Jastrebarsko: {
    introHr:
      'Jastrebarsko ili Jaska gradić je jugozapadno od Zagreba i središte Plešivice, jedne od najboljih hrvatskih regija za bijela vina: pinot bijeli, rizling i škrlet, autohtonu sortu koja se uzgaja gotovo isključivo ovdje. Grad se razvio kao trgovište obitelji Erdödy, čiji dvorac, jedan od najbolje očuvanih u okolici Zagreba, i danas gleda na grad. Obronci su lozom zasađeni od srednjega vijeka, a Vinska cesta Plešivica vodi kroz obiteljske vinarije otvorene za kušanje. Godine 1593. Hrvati su kod Jaske pobijedili Osmanlije, jedna od rijetkih pobjeda toga doba. Plešivica je tridesetak kilometara od Zagreba, najbliža kvalitetna vinska regija nekom hrvatskom gradu, pa je omiljeno vikend-odredište glavnoga grada.',
  },
  Zaprešić: {
    introHr:
      'Zaprešić je grad sjeverozapadno od Zagreba, na rijeci Savi, poznat kao dom NK Inter Zaprešić, jednoga od najstarijih i kulturno najznačajnijih hrvatskih nogometnih klubova, te kao stambeno predgrađe glavnoga grada. Razvio se u 20. stoljeću, kako se Zagreb širio. U okolici se nalazi Januševec, barokni dvorac koji je u 18. stoljeću sagradila obitelj Oršić, jedan od najljepših baroknih dvoraca u Hrvatskoj; u njemu su snimani hrvatski filmovi i serije, pa je najfotografiranije plemićko imanje u okolici Zagreba. Savska poplavna ravnica kraj Zaprešića zaštićena je kao prirodni rezervat, a mrtvi rukavci Save važno su močvarno stanište ptica. Odavde potječe i nekoliko poznatih glazbenika i sportaša.',
  },
  Krapina: {
    introHr:
      'Krapina je gradić u Hrvatskom zagorju i najvažnije nalazište neandertalaca na svijetu. Godine 1899. geolog Dragutin Gorjanović-Kramberger počeo je iskopavati brijeg Hušnjakovo i pronašao više od devetsto kostiju koje su pripadale oko osamdeset osoba. Neandertalci su ovdje živjeli prije otprilike 130 tisuća godina, davno prije nego što su moderni ljudi stigli u Europu. To je najveća zbirka neandertalskih kostiju s jednog mjesta na svijetu. Godine 2010. u Krapini je otvoren Muzej krapinskih neandertalaca, s rekonstrukcijama u prirodnoj veličini, koji se ubraja među najbolje takve muzeje u Europi.',
  },
  'Marija Bistrica': {
    introHr:
      'Marija Bistrica malo je zagorsko mjesto i najvažnije hodočasničko središte Hrvatske: svetište Majke Božje Bistričke svake godine posjeti više od milijun hodočasnika, pa je jedno od najvećih marijanskih svetišta u srednjoj Europi. Kip Crne Gospe štuje se od 16. stoljeća; da bi ga zaštitili od osmanskih upada, sakrili su ga u zid, a 1684. je, prema predaji, čudesno ponovno pronađen. Papa Ivan Pavao II. posjetio ju je 1998. i ovdje proglasio blaženim kardinala Alojzija Stepinca, najznačajniji vjerski događaj moderne hrvatske povijesti; za posjet je izgrađen amfiteatar na otvorenom za 400 tisuća ljudi. Na pošumljenom brežuljku iznad svetišta križni put izradili su vodeći hrvatski kipari.',
  },
  Kumrovec: {
    introHr:
      'Kumrovec je malo zagorsko selo, rodno mjesto Josipa Broza Tita. Broz je rođen ovdje 7. svibnja 1892.; postao je Tito, vođa partizanskog otpora u Drugom svjetskom ratu i komunistički vođa koji je Jugoslavijom vladao od 1945. do 1980. Selo je danas etnografski muzej na otvorenom, obnovljen u izgledu s početka 20. stoljeća, a u rodnoj kući izloženi su Titovi osobni predmeti i ratni predmeti. Ispred kuće stoji Augustinčićev brončani Titov kip, jedan od najpoznatijih u Hrvatskoj. Od hrvatske neovisnosti kip je više puta oštećen, a ruka mu je više puta slomljena, što odražava složene osjećaje prema čovjeku koji je Hrvatsku istodobno oslobodio i tlačio.',
  },
  Klanjec: {
    introHr:
      'Klanjec je gradić u Zagorju na rijeci Sutli, koja čini granicu između Hrvatske i Slovenije, i rodno mjesto Antuna Augustinčića (1900.–1979.), najvećega hrvatskog kipara 20. stoljeća. Augustinčić je rođen u Klanjcu 1900. Njegovu brončanu skulpturu Mir Jugoslavija je 1954. darovala Ujedinjenim narodima, i ona od tada stoji ispred sjedišta UN-a u New Yorku. Tako je Klanjec rodno mjesto kipa koji pozdravlja svjetske vođe: svaki glavni tajnik, predsjednik i premijer koji je od 1954. došao u UN prošao je pored djela čovjeka iz malog hrvatskog gradića. U Klanjcu se nalazi Galerija Antuna Augustinčića, u kojoj je sabrano njegovo cjelokupno kiparsko djelo.',
  },
  Pregrada: {
    introHr:
      'Pregrada je mali grad u zapadnom Zagorju, petnaest kilometara od slovenske granice, u kraju kulturno smještenom između Zagreba i Ljubljane. Grad leži među brežuljcima Klanječkog vinogorja, jedne od najpodcjenjenijih hrvatskih vinskih regija, gdje se u kontinentalnom stilu proizvode rizling i pinot sivi. U osamnaestom stoljeću šire područje pripadalo je plemićkim posjedima obitelji Erdödy, čije se dvorce još vidi po zagorskim brdima. Najpoznatije su ipak obližnje Terme Tuhelj, jedan od najboljih termalnih kompleksa u blizini Zagreba: voda izvire na 34 stupnja, pa se u njoj može kupati na otvorenom čak i u siječnju, a gosti dolaze iz Zagreba i iz Slovenije.',
  },
  'Donja Stubica': {
    introHr:
      'Donja Stubica je malo zagorsko mjesto koje je u hrvatsku povijest ušlo 1573. godine, kada je Matija Gubec poveo veliku seljačku bunu protiv feudalne gospode u Zagorju i Sloveniji. Bila je to najveća seljačka buna u hrvatskoj povijesti: vojska od oko deset tisuća seljaka poražena je u bitki kod Stubice 9. veljače 1573. Gubec je zarobljen, odveden u Zagreb i pogubljen; prema legendi, na glavu su mu stavili užarenu željeznu krunu, kao „kralju seljaka“. Ostao je hrvatski narodni junak, a njegovo ime danas nose škole, ulice i pjesme. Kraj ima i mirniju stranu: obližnje Stubičke Toplice najveći su termalni kompleks u Hrvatskoj.',
  },
  Đurđevac: {
    introHr:
      'Đurđevac je gradić u Podravini, okružen ravnim poljima pšenice, kukuruza i paprike, a poznat je po jednoj od najduhovitijih hrvatskih legendi. Kad su Osmanlije opsjedali grad, braniteljima je, kaže priča, ostao samo jedan pijetao. Umjesto da ga pojedu, ispalili su ga iz topa prema osmanskom logoru. Napadači su zaključili da ljudi koji hranom pucaju iz topova sigurno imaju zaliha u izobilju, digli su opsadu i otišli. Stanovnici se otada ponosno zovu Picoki, a svake godine na Picokijadi ponovno pucaju iz topa u čast legendarnog pijetla. Đurđevačka utvrda Stari grad jedna je od najbolje očuvanih srednjovjekovnih utvrda u Slavoniji.',
  },
  Ludbreg: {
    introHr:
      'Ludbreg je gradić u Podravini koji se, s puno šarma, proglašava zemljopisnim središtem svijeta. Tvrdnja potječe iz srednjovjekovne zemljopisne procjene, a mještani je s ljubavlju održavaju do danas. Grad je, međutim, poznat i po nečemu daleko ozbiljnijem: godine 1411. ovdje se, prema zapisima, dogodilo euharistijsko čudo, koje je papa Leon X. potvrdio 1513. godine, kada je započela gradnja kapele Predragocjene Krvi Kristove. Papa Ivan Pavao II. dao je crkvi status svetišta, jednoga od samo tri takva na svijetu, pa u Ludbreg svake godine dolaze hodočasnici. U dvorcu Batthyány radi jedina profesionalna radionica za restauraciju povijesnih tapiserija u Hrvatskoj.',
  },
  Lepoglava: {
    introHr:
      'Lepoglava je gradić u zagorskim brdima poznat po dvjema posve suprotnim stvarima. Prva je lepoglavska čipka, izvanredno fino rukotvorstvo koje je upisano na UNESCO-ov popis nematerijalne baštine i koje se tehnikom razlikuje od paške čipke. Druga je najpoznatiji hrvatski zatvor. Godine 1400. u Lepoglavi je osnovan pavlinski samostan, jedan od najvažnijih u Hrvatskoj, u kojem je u osamnaestom stoljeću radila prva hrvatska gimnazija. Samostanske zgrade poslije su pretvorene u zatvor, a u njemu su, pod suprotnim režimima, bili zatočeni i Josip Broz Tito tridesetih godina i Franjo Tuđman sedamdesetih godina dvadesetog stoljeća. Zatvor je i danas hrvatska ustanova najvišeg stupnja sigurnosti.',
  },
  'Nova Gradiška': {
    introHr:
      'Nova Gradiška je slavonski grad koji nije nastao postupno, nego je izgrađen planski, 1748. godine, kao naselje Habsburške Vojne krajine namijenjeno obrani od osmanskih upada. Ime „Nova“ razlikovalo ju je od starije, obližnje Stare Gradiške. Vojna krajina stvorila je desetke takvih naselja u Slavoniji i Lici, a ova je među najpažljivije uređenima: pravilna mreža ulica, središnji trg i vojna arhitektura gotovo su savršeno očuvani, jedan od najboljih hrvatskih primjera planskog grada osamnaestog stoljeća. Odavde su vojnici odlazili prema granici na Savi. Iznad grada diže se Psunj, s 984 metra najviša planina Slavonije, a ovdje počinje i slavonska vinska cesta kroz požeške brežuljke.',
  },
  Županja: {
    introHr:
      'Županja je grad na rijeci Savi u istočnoj Slavoniji, u kraju koji se zove Posavina i koji je poznat po tamburici, tradicijskom vezu i bogatim narodnim nošnjama. Godine 1991. grad se našao na prvoj crti Domovinskog rata: Sava je bila obrambena linija između Hrvatske i teritorija u Bosni pod srpskom kontrolom. Unatoč ratu i industrijalizaciji, posavska tradicija ostala je vrlo živa. Gotovo svako selo ima tamburaški orkestar, a slavonski posavski vez iz okolice Županje upisan je na UNESCO-ov popis nematerijalne kulturne baštine. Nošnja iz ovoga kraja ubraja se među najbogatije u Hrvatskoj, a godišnji festival folklora čuva glazbu i običaje za nove naraštaje.',
  },
  Pakrac: {
    introHr:
      'Pakrac je grad u zapadnoj Slavoniji koji se gotovo uvijek spominje zajedno sa susjednim Lipikom. Oba grada imaju termalne izvore, oba su teško stradala u Domovinskom ratu i oba se polako obnavljaju. Pakrac je u povijest ušao 2. ožujka 1991., kada je u njemu došlo do prvog oružanog sukoba Domovinskog rata; taj se incident navodi kao prvi pucanj rata, iako je bio sukob hrvatske policije i srpske milicije, a ne bitka. Grad je zatim okupiran i teško oštećen, a lipičke toplice uništene su 1991. i poslije obnovljene. Danas je lječilišni turizam zajednička gospodarska strategija obaju gradova. Iznad Pakraca diže se Papuk, UNESCO-ov geopark.',
  },
  Našice: {
    introHr:
      'Našice su gradić u Slavoniji poznat po dvorcu obitelji Pejačević, jednom od najljepših neogotičkih dvoraca u Hrvatskoj, u kojem je danas muzej. Pejačevići su u devetnaestom stoljeću bili kulturno najvažnija slavonska plemićka obitelj, a njihova vina i danas su među najboljima u Slavoniji. Najpoznatiji član obitelji je Dora Pejačević, rođena u Našicama 1885. godine, koja se smatra najvećom hrvatskom skladateljicom. Gotovo bez formalne glazbene izobrazbe skladala je simfonije, komornu glazbu i pjesme danas priznate kao važna djela kasnog romantizma. Simfoniju u fis-molu, remek-djelo koje se izvodi i u inozemstvu, napisala je dok je vodila obiteljska imanja. Umrla je 1923. godine, u trideset sedmoj godini.',
  },
  Otočac: {
    introHr:
      'Otočac je glavno mjesto doline rijeke Gacke u Lici, a razvio se kao vojnokrajiški grad pod Habsburgovcima. Gacka izvire iz krških izvora, s 14 kubnih metara vode u sekundi, i teče kroz zelene livade. Voda joj je tako čista i hladna, stalnih deset stupnjeva cijele godine, da u njoj žive potočne pastrve iznimne veličine; ovdje su ulovljene ribe svjetskih rekorda, pa je Gacka među najboljim pastrvskim rijekama Europe. Godine 1991. grad je bio na prvoj crti rata i teško oštećen, a poslije obnovljen. Otočac je i polazište prema Plitvicama i Velebitu, a ličko janje s krških visoravni smatra se najboljom janjetinom u Hrvatskoj.',
  },
  Ogulin: {
    introHr:
      'Ogulin je gradić u Gorskom kotaru, među planinama i šumama, poznat kao rodno mjesto Ivane Brlić-Mažuranić, najveće hrvatske dječje spisateljice. Rođena je 1874. godine, a njezina knjiga Priče iz davnine iz 1916., nastala na hrvatskoj narodnoj mitologiji, uspoređuje se s bajkama Hansa Christiana Andersena. Dvaput je bila predložena za Nobelovu nagradu za književnost, 1931. i 1938., kao jedini hrvatski pisac ikada. Ogulin svake godine slavi njezin rad festivalom bajki, a grad je i sam kao iz bajke: iznad njega se diže planina Klek, o kojoj se pričaju priče o vješticama, a kroz grad teče rijeka Dobra, koja nestaje u ponoru.',
  },
  Slunj: {
    introHr:
      'Slunj je gradić u središnjoj Hrvatskoj poznat po Rastokama, naselju u kojem rijeka Slunjčica preko sedrenih slapova teče izravno kroz staro mjesto. Ime Rastoke znači mjesto gdje se rijeke razdvajaju. Naselje su u sedamnaestom stoljeću osnovali mlinari, koji su na slapovima sagradili vodenice; neki su mlinovi stari četiri stotine godina i još su građevinski netaknuti. Kamene kuće i mlinovi stoje među šumom vode i smaragdnim jezercima, a neke su vodenice danas kuće za odmor i restorani u kojima se jede uz sam slap, na platformama iznad vode. U blizini je i Una, jedna od najljepših hrvatskih rijeka za rafting.',
  },
  Sisak: {
    introHr:
      'Sisak leži na ušću Kupe i Odre u Savu, na mjestu na kojem je stajala rimska Siscia, jedan od najvažnijih gradova rimske Panonije, s kovnicom novca koji se nalazi po cijeloj Europi. Godine 1593. kod Siska je hrvatsko-habsburška vojska porazila Osmanlije u bitki koja je zaustavila njihovo napredovanje prema Srednjoj Europi; tvrđava od cigle na ušću Kupe i danas stoji. U Drugom svjetskom ratu u Sisku je ustaški režim držao logor za djecu, jedan od najtežih zločina u hrvatskoj povijesti. U Jugoslaviji je Sisak bio grad željezare. Obje te povijesti, pobjeda i zločin, oblikuju grad danas.',
  },
  Popovača: {
    introHr:
      'Popovača je gradić u Moslavini, najravnijem i najpoljoprivrednijem hrvatskom kraju, koji se prostire između Zagreba i Slavonije. Zemlja se ovdje obrađuje još od rimskih vremena, a danas prevladavaju pšenica, suncokret i kukuruz, pa je Moslavina među najproduktivnijim poljoprivrednim područjima Hrvatske. Iz ravnice se neočekivano diže Moslavačka gora, brdo na čijim se padinama proizvode bijela vina, ponajprije graševina i chardonnay. Graševina je najzastupljenija hrvatska sorta grožđa, a u svijetu je gotovo nepoznata, jer se većina popije u zemlji. Popovača se razvila kao željeznički čvor na pruzi Zagreb–Slavonija i od devetnaestog je stoljeća prometno središte. Obližnja Kutina hrvatsko je središte proizvodnje prirodnog plina.',
  },
  Trilj: {
    introHr:
      'Trilj je gradić u dolini rijeke Cetine, u zaleđu Splita, koji je izrastao oko prijelaza preko rijeke, u pograničnom području između obalne Dalmacije i hercegovačkog zaleđa. Kraj je poznat po tradicijskoj konjičkoj kulturi: u obližnjem Sinju održava se Sinjska alka, a okolica Trilja i danas uzgaja konje i njeguje konjičke svečanosti. Stanovnici imaju snažan hrvatski identitet i čuvaju tradicijsku nošnju i glazbu kroz aktivna kulturna društva. Godine 1991. Cetina je postala prirodna obrambena crta: hrvatski branitelji mjesecima su držali njezinu istočnu obalu i tako spriječili daljnje napredovanje prema Splitu. Danas je rijeka kod Trilja omiljeno mjesto za rafting i kajak.',
  },
  Vrgorac: {
    introHr:
      'Vrgorac je gradić u dalmatinskom zaleđu, između imotskog i neretvanskog kraja, smješten u ravnom krškom polju okruženom vapnenačkim grebenima na granici s Hercegovinom. Stoljećima je bio pogranična vojna postaja, a ruševine tvrđave i danas gledaju na polje. Vrgorsko polje plodna je krška zemlja na kojoj rastu grožđe, smokve i masline, ali je kraj najpoznatiji po vinu. Ovdje se gotovo isključivo uzgaja Kujundžuša, autohtona bijela sorta iznimno aromatična, od koje nastaje zlatno vino kakvo se drugdje ne može naći. Ime sorte dolazi od turske riječi za zlatara, zbog zlatne boje i dragocjenosti grožđa. Stanovnici imaju snažne kulturne veze s Hercegovinom preko obližnje granice.',
  },
  'Vela Luka': {
    introHr:
      'Vela Luka je najveće mjesto na otoku Korčuli, smješteno u dugoj i zaštićenoj uvali na zapadnom kraju otoka. Uvala je jedno od najboljih prirodnih sidrišta na Jadranu, pa je mjesto omiljeno među nautičarima. Razvila se kao ribarski i trgovački grad, dopuna utvrđenoj Korčuli na istočnom vrhu otoka. Oko mjesta su maslinici, a proizvodi se bijelo vino pošip, korčulanska sorta. Iznad mjesta je Vela spila, jedno od najstarijih nalazišta ljudskog boravka u Hrvatskoj: nalazi sežu 20 000 godina u prošlost, a keramičke figurice stare 17 500 godina među najstarijom su pečenom keramikom u Europi. Svake se godine ovdje izvodi i kumpanjija, ples s mačevima.',
  },
  Lastovo: {
    introHr:
      'Lastovo je najudaljeniji naseljeni hrvatski otok. Nema izravnog trajekta s kopna, semafora ni mnogo automobila, a stalnih stanovnika ima manje od tisuću. Do 1947. bio je pod talijanskom vlašću, a do 1992. zatvorena jugoslavenska vojna zona, pa je većinu dvadesetog stoljeća bio zatvoren za posjetitelje. Ta je izolacija savršeno očuvala prirodu: ribolovna područja ostala su četrdeset godina netaknuta, pa su vode oko otoka među najbogatijima ribom na Jadranu. Otok je i certificirani park tamnog neba, s jednim od najčistijih pogleda na zvijezde na Mediteranu. Posebnost je Poklad, karneval u kojem se obredno spaljuje lutka staroga neprijatelja, jedna od najdramatičnijih hrvatskih pučkih tradicija.',
  },
  Jelsa: {
    introHr:
      'Jelsa je gradić na sjevernoj obali otoka Hvara, mirniji i autentičniji od poznatoga i skupog grada Hvara, okružen poljima lavande i vinogradima. Stoljećima je bila ribarsko i poljoprivredno mjesto; ima srednjovjekovne zidine i utvrdu podignutu protiv osmanskih gusarskih napada. Hvar je jedan od najvećih proizvođača lavande na svijetu, pa miris lavande doslovno određuje otok: u toplim se danima osjeća već s brodova koji mu se približavaju, a polja, ljubičasta u lipnju, među najfotografiranijim su krajolicima Hrvatske. Proizvodi od hvarske lavande izvoze se u cijeli svijet. Iz Jelse je dostupno i Starogradsko polje, koje je pod zaštitom UNESCO-a.',
  },
  Komiža: {
    introHr:
      'Komiža je ribarsko mjesto na zapadnoj obali otoka Visa, jedno od najudaljenijih i najautentičnijih u Hrvatskoj. Ribarska luka postoji od srednjeg vijeka, specijalizirana za lov srdela; tradicionalne drvene brodice, gajete, stoljećima se grade po istom nacrtu. Otok Vis bio je do 1989. zatvorena jugoslavenska vojna zona, pa je turizam stigao tek devedesetih i masovni ga nije zahvatio. Godine 1944. na Visu je bio Titov partizanski stožer, smješten u špilji, a ovdje su bile i britanske snage. Nedaleko od Komiže, na otoku Biševu, nalazi se Modra špilja, jedno od najposjećenijih hrvatskih prirodnih čuda, koja oko podneva na dva sata zasja električno plavom bojom.',
  },
  Blato: {
    introHr:
      'Blato je najveće mjesto na Korčuli, poljoprivredno naselje u plodnoj dolini u središtu otoka, okruženo maslinicima i vinogradima. Ime na starom hrvatskom označava plodno tlo doline. Dok je grad Korčula vodio trgovinu i obranu, Blato je bilo poljoprivredno srce otoka i danas ima više stanovnika od slavnoga grada. Ovdje se proizvodi više maslinova ulja nego igdje na otoku; neka stabla starija su od 1500 godina, posađena u kasnorimsko ili ranosrednjovjekovno doba, i još daju plod. Središtem mjesta prolazi aleja lipa, jedan od najljepših drvoreda u Hrvatskoj, a u Blatu se pleše i kumpanjija, drevni ratnički ples s mačevima svojstven Korčuli.',
  },
  Stolac: {
    introHr:
      'Stolac je gradić u Hercegovini na rijeci Bregavi i jedno od najstarijih neprekidno naseljenih mjesta na Balkanu; baština mu obuhvaća tri tisuće godina. Na brdu iznad grada nalazi se ilirska utvrda Daorson iz trećeg stoljeća prije Krista, među najbolje očuvanim predrimskim nalazištima regije, čije goleme kiklopske zidine još stoje. Kamenje je tako golemo da su ih, vjerovalo se u srednjem vijeku, gradili divovi. U okolici su stećci, srednjovjekovni nadgrobni spomenici pod zaštitom UNESCO-a, a četvrt Begovina jedan je od najljepših primjera osmanske stambene arhitekture na Balkanu. Godine 1993. povijesna džamija i velik dio staroga grada dignuti su u zrak; obnova je spora i nedovršena.',
  },
  Čapljina: {
    introHr:
      'Čapljina je grad u južnoj Hercegovini na rijeci Neretvi i ulaz u Hutovo blato, jedno od najvažnijih ptičjih utočišta Europe i najveću močvaru zapadnog Balkana. Stvorila ju je krška hidrologija neretvanskog sliva: izvori, podzemni kanali i plitka jezera tvore sustav u kojem je zabilježeno više od 240 vrsta ptica. Zimi ne zamrzne, jer topli krški izvori održavaju temperaturu vode. Podzemlje je toliko složeno da su ga znanstvenici istraživali fluorescentnom bojom, koja je izbila trideset kilometara dalje. Park prirode proglašen je u Jugoslaviji, a poslije proširen. U rimsko doba kraj je bio važno vinogradarsko područje, a delta Neretve daje jegulje, žabe i šarane iznimne kvalitete.',
  },
  Ljubuški: {
    introHr:
      'Ljubuški je grad u zapadnoj Hercegovini koji se razvio oko srednjovjekovne tvrđave nad rijekom Trebižat; njezine ruševine i danas gledaju na grad s vapnenačke stijene. Okolica je vinorodan kraj: bijela Žilavka, suha, kisela i mineralna, i crna Blatina, hercegovački odgovor na plavac mali, autohtone su hercegovačke sorte koje se ovdje uzgajaju od davnina. Snažno je hrvatsko i katoličko mjesto te jedno od središta hrvatskoga kulturnog života u Bosni i Hercegovini. Nedaleko od grada, na Trebižatu, nalaze se slapovi Kravica, među najspektakularnijima u zemlji: slap širok 28 metara izgleda kao Niagara u malom, a kupanje u njegovim jezercima među najljepšim je ljetnim iskustvima Hercegovine.',
  },
  Međugorje: {
    introHr:
      'Međugorje je selo u zapadnoj Hercegovini koje je od 1981. godine postalo jedno od najposjećenijih hodočasničkih mjesta na svijetu. Toga ljeta, 24. lipnja, šestero mladih izjavilo je da je na brdu Podbrdo vidjelo Gospu; prema njihovim riječima, ukazanja traju i danas. Katolička Crkva nije službeno potvrdila ukazanja, ali je papa Franjo 2019. dopustio službena hodočašća. Selo koje je imalo četiristo stanovnika sada prima milijune hodočasnika godišnje, u nekim godinama više nego Lourdes ili Fatima. Okolica je poznata po vinu, a hercegovački vinari dobivaju međunarodne nagrade.',
  },
  Čitluk: {
    introHr:
      'Čitluk je općina u zapadnoj Hercegovini, tik uz Međugorje, poznata ponajprije po vinariji Hercegovina vino, jednoj od najvećih i najnagrađivanijih u Bosni i Hercegovini i na cijelom zapadnom Balkanu. Zadruga, osnovana 1976. godine, prerađuje grožđe stotina lokalnih proizvođača. Vino se ovdje pravi od rimskih vremena: kamenito tlo neretvanskoga sliva i kontinentalna klima daju grožđe velike snage, a vinogradi se obrađuju na stoljetnim terasama od suhozida. Autohtone sorte Žilavka i Blatina mogu rasti samo u ovoj mikroregiji. Žilavka se u Titovo doba posluživala na državnim večerama i darivala stranim uglednicima kao najbolje bijelo vino Jugoslavije, a hercegovačko je vino u svijetu i danas slabo poznato.',
  },
  Livno: {
    introHr:
      'Livno je grad na Livanjskom polju, jednom od najvećih kraških polja na svijetu, dugom 64 kilometra i smještenom na 700 metara visine. Kratka trava puna mirisnog bilja hrani ovce čije mlijeko daje livanjski sir, jedan od najnagrađivanijih sireva od ovčjeg mlijeka u Europi, koji se ovdje proizvodi najmanje četiristo godina. Grad ima mletačko i osmansko naslijeđe i bio je dio srednjovjekovnoga hrvatskog kraljevstva. Godine 1942. u Livnu je održano jedno od prvih velikih zasjedanja partizanskoga vijeća. Svake godine na polju se održavaju konjske utrke, jedna od najstarijih sportskih tradicija u Bosni.',
  },
  Neum: {
    introHr:
      'Neum je jedini grad Bosne i Hercegovine na moru: 24 kilometra jadranske obale bez luke, jedini morski izlaz te kontinentalne zemlje. Leži usred hrvatskoga teritorija, što stvara jedinstvenu geopolitičku anomaliju. Bosanski je posjed od Karlovačkog mira 1699. godine, kojim je Osmansko Carstvo dobilo koridor do mora, razdvajajući dubrovački teritorij od ostatka mletačke Dalmacije. Ulaskom Hrvatske u Europsku uniju 2013. granica je postala vanjska granica Unije, pa je svaki vozač na jadranskoj cesti u nekoliko minuta dvaput pokazivao putovnicu, dok Pelješki most 2022. nije povezao Hrvatsku zaobilazeći Neum. Grad se razvio kao odredište za jeftiniju kupnju cigareta i alkohola nego u Hrvatskoj.',
  },
  Tomislavgrad: {
    introHr:
      'Tomislavgrad, povijesno poznat kao Duvno, grad je u zapadnoj Bosni i Hercegovini, u Duvanjskom polju, jednom od najvećih krških polja Dinarida. Nazvan je po Tomislavu, prvom hrvatskom kralju, koji je, prema predaji, 925. godine na Duvanjskom polju okupio svoju vojsku i bio okrunjen. Točno mjesto krunidbe povjesničari osporavaju, ali je predaja toliko snažna da je grad 1925. godine, o tisućoj obljetnici krunidbe, promijenio ime u Tomislavgrad. Kraj je pretežno hrvatski i katolički te ima jedan od najvećih udjela hrvatskoga stanovništva u Bosni i Hercegovini, a stanovnici njeguju snažan hrvatski nacionalni identitet.',
  },
  Kupres: {
    introHr:
      'Kupres je planinski gradić na visoravni u zapadnoj Bosni i Hercegovini, na 1100 metara, gdje otvorene livade okružene planinama pogoduju stočarstvu. Visinsko govedarstvo daje izvrsne mliječne proizvode, a najpoznatiji je kajmak, koji se pravi polaganim zagrijavanjem svježega mlijeka dok se ne stvori gust sloj vrhnja, postupkom nepromijenjenim od srednjeg vijeka; jede se na kruhu, u pitama i uz janjetinu. Kupreški sajam stoke jedan je od najstarijih tradicijskih sajmova u regiji. Zimi se na visoravni skija, a skijališta su među najpristupačnijima na zapadnom Balkanu. Visoravan je bila i ratno poprište: između 1992. i 1995. za nju se žestoko borilo i tri je puta mijenjala gospodara.',
  },
  Tučepi: {
    introHr:
      'Tučepi su turističko mjesto na Makarskoj rivijeri, gdje se Biokovo strmo spušta do dugih šljunčanih plaža, pa se planina i kristalno more vide u istom pogledu, među najdramatičnijim prizorima na hrvatskoj obali. Kao i većina mjesta na Rivijeri, do dvadesetog stoljeća bili su malo poljoprivredno i ribarsko naselje, a turizam ih je potpuno preobrazio. Izvorno selo, Gornji Tučepi, s dalmatinskim kamenim kućama stoji na padini iznad modernog obalnog pojasa. Plaža nosi Plavu zastavu i ima jednu od najčistijih voda na Rivijeri. Iznad mjesta je botanički vrt Biokova s endemičnim biljkama masiva, a od mora se u jednom danu može popeti na 1700 metara.',
  },
  Gradac: {
    introHr:
      'Gradac je najjužnije mjesto Makarske rivijere, ondje gdje obalna cesta skreće u unutrašnjost prema Hercegovini, a cesta za Dubrovnik napušta more. Povijesno je označavao granicu između mletačke Makarske rivijere i zaleđa pod osmanskom vlašću, pa mu je položaj na kraju Rivijere davao stratešku važnost. Mjesto je raslo polako, sve do turizma dvadesetog stoljeća, a danas je poznato po mirnoj, obiteljskoj atmosferi. Njegova plaža najdulja je na Rivijeri: šest kilometara šljunčane obale u hladu borove šume, što je na hrvatskim plažama rijetka prirodna sjena. Borovi su uglavnom pinije zasađene u devetnaestom stoljeću radi drva i hlada, a u tim se šumama nekoć skupljala i borova smola.',
  },
  Šolta: {
    introHr:
      'Šolta je otok najbliži Splitu, oko 45 minuta trajektom, a ipak manje posjećen od Brača i Hvara: izletnici obično idu dalje, pa je blizina gradu paradoksalno očuvala njegov mir. U rimsko doba zvao se Solenta i već je tada bio odmaralište bogatih Splićana, dakle utočište cijenjeno još u antici. Poznat je po izvrsnom ekstradjevičanskom maslinovu ulju iz starih maslinika, hladno prešanom i međunarodno nagrađenom, te po medovini, piću od meda, nedavno obnovljenoj srednjovjekovnoj tradiciji. Med potječe od pčela koje se hrane ružmarinom, lavandom i kaduljom otočne makije, pa ima jedinstvenu biljnu snagu. Glavne su luke Stomorska i Maslinica, obje slikovite i tihe.',
  },
  Lopud: {
    introHr:
      'Lopud je jedan od triju naseljenih Elafitskih otoka kraj Dubrovnika i potpuno je bez automobila: voze samo električna kolica i hitne službe, a posjetitelji hodaju. Ime Elafiti dolazi od grčke riječi za jelena, koje su stari grčki pomorci viđali na tada šumovitijim otocima. Lopud je bio jedan od najbogatijih otoka Dubrovačke Republike: njegovi su kapetani gradili ljetne palače, franjevački samostan i vrtove, a na malom otoku podigli su više od trideset crkava, jedna od najvećih gustoća crkava u Hrvatskoj. Kapetanske su obitelji odavno nestale, ali naslijeđe ostaje u ruševinama izvanrednih renesansnih vrtova. Plaža Šunj jedna je od rijetkih pješčanih plaža na ovoj kamenitoj obali.',
  },
  Šipan: {
    introHr:
      'Šipan je najveći Elafitski otok kraj Dubrovnika, miran otok maslinika, ljetnikovaca i iznimno prozirnog mora. U antici se zvao Insula Torcola, a u doba Republike bio je omiljeno ljetno utočište dubrovačkog plemstva. U dvama naseljima, Šipanskoj Luci i Suđurđu, stoje renesansni i barokni ljetnikovci, kojih po kvadratnom kilometru ima više nego ijedan hrvatski otok, ljetna palača dubrovačkog biskupa iz petnaestog stoljeća i ruševine benediktinskog samostana. Samostan je osnovan u šestom stoljeću, kao jedan od najranijih kršćanskih na istočnom Jadranu. Šipansko ulje i vino cijenila je Republika, a proizvode se i danas. Trajekt iz Dubrovnika plovi 75 minuta, što otok čuva tišim od bližih susjeda.',
  },
  Koločep: {
    introHr:
      'Koločep, u antici Calamota, najmanji je i Dubrovniku najbliži Elafitski otok, samo trideset minuta trajektom, najbrži bijeg od gradske gužve. Ima dva mala sela i manje od dvjesto stalnih stanovnika, pa je među najrjeđe naseljenim dijelovima Hrvatske. Zbog suptropske klime rastu limuni, smokve, agave i aloje kakvih nema na kopnu, a more oko njega među najprozirnijim je kraj Dubrovnika. U srednjem vijeku otok je bio poznat po vađenju koralja: dubrovački trgovci izvozili su jadranski crveni koralj na Bliski istok i sve do Indije, gdje se koristio u nakitu i medicini. U špilji na Donjem Čelu pronađeni su i pretpovijesni ljudski ostaci.',
  },
  Pelješac: {
    introHr:
      'Pelješac je dug i uzak poluotok sjeverno od Dubrovnika i najbolja hrvatska regija crnih vina. Na strmim padinama Dingača i Postupa, okrenutima moru, uzgaja se plavac mali, koji daje vina iznimne koncentracije: padine peku se na suncu odozgo i na toplini mora odozdo. Nagib je na Dingaču tolik, do 45 stupnjeva, da se grožđe katkad prevozi brodom. Dingač je 1961. postao prvo hrvatsko vino zaštićenog podrijetla. Godine 2001. istraživači sa sveučilišta UC Davis dokazali su da je plavac mali genetski potomak zinfandela, odnosno crljenka kaštelanskoga, povezavši hrvatsku i kalifornijsku vinsku baštinu. Pelješki most 2022. konačno je izravno spojio poluotok s kopnom.',
  },
  Ivanec: {
    introHr:
      'Ivanec je gradić u brdima Varaždinske županije i polazište za Ivanščicu, planinu visoku 1060 metara koja je najviši vrh Zagorja i omiljeno planinarsko odredište Zagrepčana. S njezina se vrha za vedrih dana vide vrhovi austrijskih Alpa na sjeverozapadu, što pokazuje koliko je Hrvatska zemljopisno i kulturno blizu Srednjoj Europi. U osamnaestom stoljeću područje Ivanca pripadalo je plemićkom posjedu obitelji Patačić, a ruševine njihova dvorca iznad grada potječu iz petnaestog stoljeća. Grad čuva tradicijske zagorske obrte i običaje: godišnji festival folklora održava zagorsku glazbu i nošnje, a u kraju se od domaćih šljiva i krušaka peče ivanečka rakija.',
  },
  'Novi Marof': {
    introHr:
      'Novi Marof je gradić u brdima Varaždinske županije, u srcu prigorske vinske podregije, koja daje kontinentalna bijela vina od rizlinga, sauvignona i šipona. Šipon je ista sorta kao mađarski furmint, od kojeg se pravi slavni slatki tokajac, ali ovdje daje posve drugačije, suho vino. Prigorska brda zasađena su lozom od srednjeg vijeka, a tradicija se razlikuje i od slavonske i od dalmatinske: hladnija, aromatičnija, njemačkog stila. Grad leži između Zagreba i Varaždina i povijesno je bio postaja na putu koji ih spaja; danas taj vinski koridor stječe sve više priznanja kritičara. Krajolik obilježavaju podrumi ukopani u padine, a u listopadu se slave berbe.',
  },
  Vinica: {
    introHr:
      'Vinica je gradić u Varaždinskoj županiji poznat po baroknom dvorcu obitelji Erdödy, jednom od najljepših plemićkih posjeda sjeverne Hrvatske. Erdödyji su bili među najmoćnijim plemićkim obiteljima u Hrvatskoj: u osamnaestom stoljeću vladali su golemim posjedima koji su se protezali od Varaždina do Slavonije i dali su nekoliko hrvatskih banova, pa su više od stotinu godina bili zapravo najmoćnija obitelj u zemlji. Njihov vinički posjed čini barokni dvorac s velikim imanjem, koje je danas pretvoreno u muzej i kulturno središte, a u perivoju oko dvorca jedan je od najstarijih hrvatskih pejzažnih parkova engleskog stila. Okolica zadržava tradicionalni zagorski karakter, a nošnje viničkoga kraja odlikuje osebujan vez.',
  },
  Zlatar: {
    introHr:
      'Zlatar je gradić u zagorskim brdima i središte gornjeg toka rijeke Krapine. Ime mu znači zlatar, a zlatarstvo je bilo jedan od najcjenjenijih obrta srednjovjekovne Hrvatske, pa samo ime upućuje na srednjovjekovnu obrtničku tradiciju u mjestu. Grad se razvio kao tržišno središte okolnih poljoprivrednih sela, a crkva svete Marije na brdu stoljećima je mjesno hodočasničko odredište. Zlatar čuva tradicijsku zagorsku pučku glazbu i obrte. Gornja krapinska dolina oko grada ima bogato arheološko naslijeđe iz pretpovijesnog i rimskog doba, a obližnja Zlatar Bistrica poznata je po toplicama i zdravstvenom turizmu, pa kraj privlači i one koji traže odmor.',
  },
  Valpovo: {
    introHr:
      'Valpovo je grad u istočnoj Slavoniji, kraj Drave, nad kojim se ističe veličanstveni dvorac Normann-Prandau, barokni sklop s vodenim opkopom i četirima ugaonim tornjevima, jedan od rijetkih hrvatskih dvoraca okruženih vodom i među najljepšim plemićkim rezidencijama istočne Hrvatske. Obitelj Normann-Prandau stekla je Valpovo nakon što su Habsburgovci u 1680-ima, poslije stotinu i pedeset godina osmanske vlasti, oslobodili kraj, i tijekom osamnaestog stoljeća podigla je dvorac; grad je tada obnovljen u baroknom stilu. Opkop napaja mali potok skrenut iz okolne ravnice, inženjerski pothvat obrambene i ukrasne svrhe. Dvorac je danas muzej, a plodna Podravina oko Valpova daje kukuruz, suncokret i graševinu.',
  },
  Belišće: {
    introHr:
      'Belišće je gradić na Dravi u Slavoniji koji nije nastao postupno, nego je 1884. osnovan kao tvorničko naselje obitelji Gutmann, izgrađeno oko njihove drvne industrije. Slavonske hrastove šume uz Dravu davale su iznimno tvrdo drvo, hrast lužnjak, koji se izvozio po cijeloj Europi; slavonski hrast i danas ide u vinske bačve za francuske dvorce, a neki ga vinari smatraju boljim od francuskoga. Belišćanska tvornica drva i papira bila je više od stoljeća među najvećim industrijskim poduzećima u Hrvatskoj, a pogon papira i celuloze, veliki poslodavac, radio je do nedavno. Model tvorničkog grada ostavio je Belišću neobično planiranu arhitekturu i snažan radnički identitet.',
  },
  Orahovica: {
    introHr:
      'Orahovica je gradić u Slavoniji u podnožju Papuka, ispod dramatičnih ruševina Ružice grada, jednog od najvećih srednjovjekovnih utvrđenih sklopova kontinentalne Hrvatske. Bio je jedna od najvažnijih plemićkih utvrda srednjovjekovne Hrvatske i nadzirao je stratešku cestu kroz Papuk; sklop je obuhvaćao naselje, nekoliko kula i kapelu. Napušten je nakon osmanskog osvajanja u šesnaestom stoljeću, a ruševine su danas planinarsko odredište u Parku prirode Papuk. Papuk je UNESCO-ov geopark, geološki jedinstven u Hrvatskoj: metamorfne i magmatske stijene starije su od 300 milijuna godina, mnogo starije od planina alpskoga postanka koje čine većinu hrvatskog reljefa. Nedaleko je i kanjon Jankovac, jedno od najljepših prirodnih mjesta Slavonije.',
  },
  Knin: {
    introHr:
      'Knin je grad u unutrašnjosti Dalmacije, smješten pod jednom od najvećih srednjovjekovnih tvrđava u Hrvatskoj. Od 10. do 12. stoljeća bio je sjedište hrvatskoga kraljevstva, pa se često naziva kraljevskim gradom. U novijoj povijesti Knin je poznat po ratu: od 1991. do 1995. bio je glavni grad samoproglašene Republike Srpske Krajine. U Operaciji Oluja, od 4. do 7. kolovoza 1995., hrvatske su snage oslobodile grad u samo 84 sata. Peti kolovoza, dan kad je hrvatska zastava podignuta na kninskoj tvrđavi, danas se slavi kao Dan pobjede i domovinske zahvalnosti. Prizor zastave prenosio se uživo na televiziji i ostao je najsnažnija slika hrvatske neovisnosti.',
  },
  Opuzen: {
    introHr:
      'Opuzen je središte doline Neretve, najprepoznatljivijeg poljoprivrednog krajolika u Hrvatskoj. Nekad je ovdje bila močvara, ali je u pedesetim i šezdesetim godinama 20. stoljeća zemljište isušeno i pretvoreno u poldere, polja odvojena kanalima. Na toj plodnoj zemlji i u blagoj klimi počele su se uzgajati mandarine, koje su potpuno promijenile izgled delte: danas se voćnjaci protežu sve do mora. Neretvanske mandarine manje su i mirisnije od onih iz trgovina jer rastu u posebnoj mikroklimi delte. U studenom Opuzen slavi berbu velikim festivalom na koji dolaze posjetitelji iz cijele Hrvatske. Delta Neretve poznata je i kao najvažnije područje za lov na jegulje u zemlji.',
  },
  Vranjic: {
    introHr:
      'Vranjic je maleno naselje na poluotoku između Splita i Solina. Nekada je bio pravi otok, ali je kanal koji ga je dijelio od kopna tijekom stoljeća zatrpan, pa je danas spojen s kopnom. Mjesto je naseljeno još od rimskog doba, kad je služilo kao luka za obližnju antičku Salonu; u kanalu oko Vranjica pronađeni su rimski ostaci, među njima sidra i amfore. U srednjem vijeku Vranjic je bio naselje opasano zidinama, a crkva svetog Martina potječe iz toga razdoblja. Iako je danas dio splitsko-solinske aglomeracije, Vranjic je zadržao vlastiti identitet i ozračje ribarskoga sela, samo nekoliko minuta od drugoga najvećeg hrvatskog grada.',
  },
  'Kaštel Stari': {
    introHr:
      'Kaštel Stari najstarije je od sedam naselja Kaštela, smještenih uz Kaštelanski zaljev između Splita i Trogira. Od 15. do 17. stoljeća venecijanske i domaće plemićke obitelji gradile su uz obalu utvrđena naselja u koja se stanovništvo sklanjalo od osmanskih upada; svako je naselje dobilo ime po svom kaštelu, maloj tvrđavi. Prvi je, u 15. stoljeću, podignut Kaštel Stari, koji je sagradila obitelj Cipiko. Za njim su nastali Kaštel Novi, Lukšić, Sućurac, Gomilica, Kambelovac i Štafilić, pa svih sedam danas čini jedinstvenu cjelinu renesansne i barokne vojne arhitekture. Plodno zaleđe zaljeva poznato je po kaštelanskoj jagodi.',
  },
  'Kaštel Lukšić': {
    introHr:
      'Kaštel Lukšić jedno je od sedam naselja Kaštela, a poznat je po iznimno dobro očuvanom dvorcu Vitturi iz 16. stoljeća. Riječ je o jednom od najcjelovitijih kaštela u cijelom nizu: sačuvane su kule i zidine, a dvorac još okružuje opkop napunjen vodom, što je rijetkost na dalmatinskoj obali. Obližnji Muzej grada Kaštela pripovijeda priču o svih sedam utvrđenih naselja. Mjesto ima i živu vinsku tradiciju; u okolici se uzgajaju sorte crljenak i plavac. Crljenak kaštelanski, predak zinfandela, dobio je ime po ovom zaljevu, gdje su ga 2001. ponovno pronašli istraživači.',
  },
  Pučišća: {
    introHr:
      'Pučišća su naselje na sjevernoj obali Brača i središte otočke kamenarske tradicije. Brački vapnenac vadi se od rimskog doba; kamenolomi oko Pučišća dali su kamen za Dioklecijanovu palaču i za mletačke palače u Splitu, a u novije doba i za Bijelu kuću u Washingtonu. U napuštenim kamenolomima još se vide tragovi alata rimskih klesara. Kamen je poseban i zato što nakon vađenja na zraku postaje tvrđi i bjelji, pa se kaže da je „živ“. Godine 1909. u Pučišćima je osnovana Klesarska škola, jedina takva u Hrvatskoj, koja i danas školuje majstore klesare i čuva tradiciju staru dvije tisuće godina.',
  },
  Vrboska: {
    introHr:
      'Vrbosku na Hvaru zovu Mala Venecija: kroz naselje prolazi uski kanal s kamenim mostovima, pa cjelina podsjeća na Veneciju u malom. Selo je poznato po ribarstvu i po utvrđenoj crkvi svete Marije. Crkva je u 16. stoljeću, u vrijeme najjačih osmanskih pomorskih napada, pretvorena u utvrdu: kad bi zazvonilo zvono, seljani bi se sklonili unutra, jer su zidovi bili dovoljno jaki da izdrže napad. Kule i zupčasti bedemi vide se i danas. O ribarskoj tradiciji, koja je davala usoljenu ribu izvoženu po cijelom Jadranu, pripovijeda Ribarski muzej. Sa strmih vinograda iznad sela dolazi izvrstan plavac mali.',
  },
  Baška: {
    introHr:
      'Baška je mjesto na otoku Krku, poznato po dvjema stvarima. Prva je Bašćanska ploča iz 1102. godine, prvi veliki tekst na hrvatskom jeziku napisan glagoljicom, u kojem se spominje darovnica kralja Zvonimira. Ploča je stoljećima ležala u crkvi kao obična podna ploča i nitko nije znao što je; tek 1851. znanstvenici su je prepoznali kao jedan od najvažnijih hrvatskih povijesnih dokumenata. Izvornik se danas čuva u Hrvatskoj akademiji znanosti i umjetnosti u Zagrebu, a u Baški stoji vjerna kopija. Druga je znamenitost plaža: šljunčana plaža u Baški duga je 1,8 kilometra i smatra se najljepšom na otoku Krku.',
  },
  Malinska: {
    introHr:
      'Malinska je turističko mjesto na zapadnoj obali otoka Krka, smješteno u zaštićenoj uvali okruženoj gustim borovim šumama. Te šume nisu prirodne: mnoge je borove u 19. stoljeću zasadila austrijska uprava u sklopu pošumljavanja cijelog kraja. Mjesto se kao ljetovalište počelo razvijati početkom 20. stoljeća, a danas je jedno od najpopularnijih obiteljskih odredišta na Krku: ima plaže s Plavom zastavom, plitko more pogodno za djecu i dobre uvjete za sportove na vodi. Do Malinske se od Krčkog mosta stiže u dvadesetak minuta. U obližnjem selu Bogovići očuvana je jedna od najljepših cjelina tradicionalnih krčkih kamenih kuća.',
  },
  Vrbnik: {
    introHr:
      'Vrbnik je srednjovjekovno mjesto na istočnoj obali otoka Krka, smješteno na strmoj stijeni koja se uzdiže 48 metara iznad mora. Kraj je naseljen još od prapovijesti, a Vrbnik je gradska prava dobio u srednjem vijeku. Na Krku je bila jaka glagoljaška tradicija i upravo je u Vrbniku nastalo nekoliko važnih glagoljskih rukopisa. Mjesto je najpoznatije po žlahtini, laganom i suhom bijelom vinu koje se uzgaja samo u vrbničkom kraju: sorta je ovdje autohtona i drugdje ne uspijeva razviti svoj karakter. Turisti rado traže i Klančić, ulicu široku svega 43 centimetra na najužem mjestu.',
  },
  Novalja: {
    introHr:
      'Novalja je gradić na otoku Pagu koji je do devedesetih godina 20. stoljeća živio mirno, od ribarstva i poljoprivrede. Tada je obližnja prirodna plaža Zrće počela privlačiti turiste i postala jedno od najpoznatijih europskih odredišta za zabavu na otvorenom: svakoga ljeta u klubovima na plaži nastupaju svjetski poznati DJ-i. Pod gradom je sačuvan rimski vodovodni tunel iz 1. stoljeća, jedno od rijetkih rimskih infrastrukturnih djela u Dalmaciji koje je još dostupno. Cijeli je otok slavan po dvama proizvodima: paškoj čipki, koja je pod zaštitom UNESCO-a, i paškom siru, čiji poseban okus dolazi od ovaca koje pasu bilje posoljeno morskim vjetrom.',
  },
  Podgora: {
    introHr:
      'Podgora je malo ljetovalište na Makarskoj rivijeri, poznato po zaštićenoj plaži pogodnoj za obitelji i po dramatičnim stijenama Biokova koje se uzdižu neposredno iznad naselja. Mjesto je, međutim, upisano i u ratnu povijest. Dana 22. rujna 1942. skupina partizanskih mornara zaplijenila je talijanska plovila i isplovila iz Podgore; od toga je događaja nastala partizanska mornarica. To mjesto danas obilježava betonski spomenik Galeb kipara Vojina Bakića, jedan od najznačajnijih primjera jugoslavenske apstraktne skulpture i jedan od arhitektonski najvažnijih spomenika toga razdoblja u Hrvatskoj. Unatoč raspravama o spomenicima iz jugoslavenskoga doba, Galeb je zaštićen kao kulturno dobro i obnovljen.',
  },
  Drvenik: {
    introHr:
      'Drvenik je malo obalno mjesto južno od Makarske, na južnom kraju Makarske rivijere. Njegova je glavna uloga oduvijek bila prijelaz prema otocima: iz Drvenika plove trajekti za Sućuraj na Hvaru i za Trpanj na poluotoku Pelješcu. Nasuprot obali leže dva otočića, Drvenik Veli i Drvenik Mali. Oni su tihi i uglavnom nenaseljeni, a nautičari ih vole zbog mirnih sidrišta i čistoga mora. Iako se do njih taksi-brodom stiže u nekoliko minuta, među najmanje su posjećenim otocima dalmatinske obale. U tradicionalnim konobama u Drveniku poslužuju se dalmatinski morski specijaliteti i janjetina.',
  },
  Slano: {
    introHr:
      'Slano je malo mjesto na dnu duboke uvale sjeverno od Dubrovnika i označava početak Dubrovačke rivijere: cesta odavde vodi na jug, prema gradu. Zaštićeni zaljev jedno je od najboljih prirodnih sidrišta između Splita i Dubrovnika. Slano je stoljećima pripadalo Dubrovačkoj Republici i bilo jedna od vanjskih obrambenih točaka republike. U ratu 1991. mjesto je teško stradalo, ali je obnovljeno i danas je mirna alternativa prepunom Dubrovniku. U dolini iznad mora i dalje se, kao nekada, uzgajaju smokve i masline. Iz okolice Slanoga potječe i Oliver Dragojević, pjevač čiji je glas postao sinonim za dalmatinsku popularnu pjesmu.',
  },
  Trpanj: {
    introHr:
      'Trpanj je gradić na sjevernoj obali poluotoka Pelješca, okrenut preko Pelješkoga kanala prema delti Neretve. Taj ga je položaj učinio važnom točkom na pomorskim putovima između Dubrovnika, Neretve i jadranskih trgovačkih mreža, a kao mala lučka naselja razvio se pod Dubrovačkom Republikom. Trpanj ima jednu od najzaštićenijih luka na sjevernoj pelješkoj obali. Danas je najpoznatiji po trajektu za Ploče, koji povezuje Pelješac s kopnom i zaobilazi Neum. Nakon otvaranja Pelješkoga mosta 2022. trajekt je izgubio dio važnosti, no i dalje je najbrža veza sjevernog Pelješca s dolinom Neretve i Bosnom. Na okolnim padinama uzgaja se plavac mali.',
  },
  Janjina: {
    introHr:
      'Janjina je maleno selo na uzvisini poluotoka Pelješca, okruženo vinogradima u kojima raste plavac mali. Nalazi se dovoljno visoko da se s nje istodobno vide Pelješki kanal na jednoj i otvoreni Jadran na drugoj strani, a za vedrih dana pogled seže do talijanske obale. Selo se razvilo kao poljoprivredno naselje usmjereno na vino i masline pod Dubrovačkom Republikom, koja je pelješku trgovinu vinom pažljivo nadzirala i oporezivala: vino s poluotoka bilo je jedan od najvrednijih izvoznih proizvoda republike. Nadmorska visina vinogradima daje eleganciju, a stoljećima stari suhozidi koji ih omeđuju svjedoče o generacijama rada u kamenu.',
  },
  'Mali Ston': {
    introHr:
      'Mali Ston sićušno je naselje na poluotoku Pelješcu, s obližnjim Stonom povezano istim srednjovjekovnim obrambenim zidinama koje se protežu između dvaju mjesta. Poznato je prije svega kao hrvatska prijestolnica kamenica. U Malostonskom kanalu školjke se uzgajaju još od rimskih vremena. Dubrovačka Republika nadzirala je tu proizvodnju i visoko je oporezivala. Kanal je danas zaštićen od gradnje kao rezervat za uzgoj školjaka, a posebna mješavina slatke i slane vode stvara idealne uvjete za kamenice. Najtraženije su kamenice u Hrvatskoj, a jedu se sirove, s limunom, u restoranima uz sam kanal.',
  },
  Vrlika: {
    introHr:
      'Vrlika je gradić u unutrašnjosti Dalmacije, u Cetinskoj krajini, nedaleko od izvora rijeke Cetine, koja izbija iz pećine na 390 metara nadmorske visine. Krajolik je dramatičan: visoka krška visoravan iznenada se otvara u duboke kanjone, a brana blizu Vrlike stvorila je Peručko jezero, drugo po veličini u Hrvatskoj. Cetinska krajina bila je važno poprište hrvatsko-osmanskih ratova, a srednjovjekovna tvrđava Nutjak iznad grada bila je ključna točka hrvatske obrane. Kraj dijeli konjaničku baštinu Alke sa širom regijom. Ojkanje, tradicionalni način pjevanja Vrlike i Sinja, uvršteno je na UNESCO-ov popis nematerijalne kulturne baštine.',
  },
  Bale: {
    introHr:
      'Bale, talijanski Valle, izvrsno su očuvano srednjovjekovno mjesto na uzvisini u južnoj Istri, kojim dominira dvorac Soardo-Bembo. Na ovom je mjestu prvo bila ilirska gradina, zatim rimsko naselje i naposljetku srednjovjekovno mletačko selo. Kula dvorca potječe iz 15. stoljeća, a u njoj je danas mali zavičajni muzej. Za razliku od mnogih istarskih gradića, Bale su se vrlo malo mijenjale od 17. stoljeća: kružni raspored ulica oko središnjeg trga, pjace, točno odgovara srednjovjekovnom planu. Mjesto ima manje od tisuću stanovnika, ali cijelo ljeto priređuje kulturne događaje, a stariji mještani još govore istarsko-mletačkim narječjem.',
  },
  Svetvinčenat: {
    introHr:
      'Svetvinčenat u središnjoj Istri ima jedan od najljepših renesansnih trgova u Hrvatskoj: savršeno proporcionalnu pjacu kojom dominira dvorac Grimani-Morosini, najbolje očuvan renesansni dvorac u Istri, a okružuju je crkva i lođa iz 15. i 16. stoljeća. Godine 1632. ovdje je održan jedan od posljednjih procesa protiv vještica u Istri. Optužena je bila žena po imenu Orsa Naldini, kojoj se pripisivalo da je izazvala tuču kako bi uništila urod; nakon mučenja priznala je i bila pogubljena. Dokumenti s tog procesa čuvaju se u Veneciji. Danas Svetvinčenat živi drukčijim ritmom: svake se godine u njemu održava međunarodni književni festival Vilenica.',
  },
  Barban: {
    introHr:
      'Barban je gradić u Istri, smješten iznad doline rijeke Raše, s dvorcem Loredan i crkvom koje gledaju na dolinu; dvorac se smatra najljepšim mletačkim dvorcem u Istri. Mjesto je najpoznatije po Trki na prstenac, viteškom natjecanju na konjima koje se održava od 1696. godine, dakle 328 godina bez prekida. Natjecatelji u punom galopu moraju kopljem pogoditi metalni prsten obješen na užetu. Trka je preživjela ratove, kugu, jugoslavenski komunizam i hrvatsku neovisnost, pa je jedna od najstarijih konjaničkih tradicija u Europi koje se održavaju bez prekida. Dolina Raše ispod Barbana dio je istarskoga kraja poznatog po tartufima i vinu.',
  },
  Žminj: {
    introHr:
      'Žminj je malo mjesto u unutrašnjosti Istre koje se smatra srcem hrvatskoga istarskog identiteta. Dok je obalna Istra pod Venecijom i Austrijom većinom govorila talijanski ili bila dvojezična, sela u unutrašnjosti poput Žminja zadržala su hrvatski jezik, i to njegovo čakavsko narječje. U doba narodnog preporoda u 19. stoljeću Žminj je postao simbol opstanka hrvatske kulture u Istri. Ta se uloga nastavlja i danas: svake se godine dodjeljuje žminjska književna nagrada za djela pisana na čakavskom. Mjesto je sačuvalo tradicionalnu istarsku arhitekturu s kamenim kućama i prepoznatljivim krovovima, a u okolici se uzgaja teran, autohtona istarska crna sorta.',
  },
  Kanfanar: {
    introHr:
      'Kanfanar je malo selo u brežuljkastoj središnjoj Istri koje je posljednjih godina postalo poznato kao biciklističko odredište: nalazi se na križanju glavnih istarskih biciklističkih ruta koje vode kroz vinograde i šume tartufa. Kroz selo prolazi Parenzana, nekadašnja uskotračna pruga od Trsta do Poreča, danas pretvorena u biciklističku stazu. Okolica je tipičan istarski krajolik: crvena zemlja, terra rossa, najprepoznatljivije geološko obilježje Istre, raštrkane hrastove šumice, vinogradi i kamene seoske kuće. Po poljima su razasuti kažuni, suhozidne kućice koje su seljaci gradili kao zaklon samo od kamenja pokupljenog s obradive zemlje, bez ikakva veziva, a ipak stoje stoljećima.',
  },
  Pičan: {
    introHr:
      'Pičan, talijanski Pedena, sićušno je mjesto na uzvisini u središnjoj Istri s manje od stotinu stanovnika, a ipak jedno od najstarijih biskupskih sjedišta u Hrvatskoj. Ovdje je nastala jedna od prvih kršćanskih biskupija na Jadranu: biskupi su se u Pičnu nasljeđivali od 4. stoljeća pa sve do 1828., punih 1400 godina, kad je biskupija ukinuta i pripojena Porečkoj. Zato je katedrala na vrhu brežuljka nerazmjerno velika za tako malo selo. Danas je Pičan jedna od najmanjih još živih zajednica u Hrvatskoj, s pogledom koji se za vedrih dana preko vinorodnih brežuljaka pruža do mora.',
  },
  'Beli Manastir': {
    introHr:
      'Beli Manastir glavno je mjesto Baranje, plodnoga trokuta zemlje između Drave i Dunava sjeverno od Osijeka, uz granicu s Mađarskom. Od 1991. Baranja je bila pod srpskom okupacijom; iako je 1995. međunarodno priznata kao hrvatski teritorij, vraćena je mirnom reintegracijom tek 15. siječnja 1998., kao posljednji dio hrvatskoga teritorija. Baranja je poznata po kulenu, kobasici s paprikom, i po graševini; baranjska vinska cesta prolazi kroz vinograde koji daju neka od najboljih kontinentalnih bijelih vina u Hrvatskoj. Mađarska manjina u Belom Manastiru čuva svoj jezik i kulturu, pa su natpisi dvojezični, na hrvatskom i mađarskom.',
  },
  Batina: {
    introHr:
      'Batina je sićušno baranjsko selo na Dunavu, poznato po jednom od najkrvavijih riječnih prijelaza Drugoga svjetskog rata. Dana 11. i 12. studenoga 1944. jugoslavenske partizanske snage prelazile su ovdje Dunav pod snažnim njemačkim otporom; u prelasku je poginulo više od 2000 partizanskih vojnika. Mjesto bitke danas nadgleda monumentalni spomenik kipara Antuna Augustinčića iz 1947. godine, golemi brončani lik na visokoj obali iznad rijeke. Riječ je o jednom od najsnažnijih Augustinčićevih djela i jednom od najvećih ratnih spomenika u Hrvatskoj. Budući da stoji na najvišoj stijeni iznad Dunava, brončani se lik vidi s udaljenosti od deset kilometara, uključujući i s mađarske strane rijeke.',
  },
  'Donji Miholjac': {
    introHr:
      'Donji Miholjac mali je slavonski grad na rijeci Dravi, neposredno nasuprot Mađarskoj: rijeka ovdje dijeli dvije države. Drava je kroz povijest označavala granicu između Hrvatske i Mađarske, pa je grad rastao kao prijelaz i trgovačko čvorište na toj važnoj granici. Močvare uz rijeku nedaleko od grada zaštićene su kao područje europske mreže Natura 2000 i važne su za ptice i ribe. Dravske močvare uz mađarsku granicu čuvaju neke od posljednjih netaknutih poplavnih šuma srednje Europe, u kojima žive vidre, orlovi štekavci i crne rode. Podravski vinogradi u okolici daju graševinu.',
  },
  Slatina: {
    introHr:
      'Slatina je grad u zapadnoj Slavoniji, na podnožju Bilogore, ondje gdje ravna slavonska nizina prelazi u brežuljke zapadne Podravine. Ime joj dolazi od riječi slana: slani izvori ili slano tlo u okolici dali su gradu ime, a u srednjem vijeku sol je bila dragocjena i mjesta s izvorima soli bila su bogata i strateški važna. Slatina je administrativno središte Virovitičko-podravske županije i tržišno središte za široko poljoprivredno zaleđe. Bilogorski vinogradi iznad grada daju graševinu i pinot sivi. Kraj je poznat i po tradicionalnom slavonskom vezu s prepoznatljivim geometrijskim uzorcima. Rat 1991. pogodio je i ovo područje, koje se od tada obnavlja.',
  },
  Kutina: {
    introHr:
      'Kutina je središte hrvatske proizvodnje prirodnoga plina. U moslavačkom bazenu, u kojem se grad nalazi, otkrivena su pedesetih godina 20. stoljeća najveća plinska polja u zemlji, a to je otkriće Kutinu pretvorilo iz poljoprivrednoga gradića u energetsko središte. INA, hrvatska naftna i plinska tvrtka, ovdje je uspostavila velike pogone, a plin iz Moslavine grije hrvatske domove od šezdesetih godina; ulaganje u ta polja bilo je jedna od gospodarski najuspješnijih odluka socijalističkoga razdoblja. Kutina ipak nije samo industrija. Grad ima i srednjovjekovnu baštinu, ruševine tvrđave iz doba Frankopana, te baroknu arhitekturu iz 18. stoljeća, a na brežuljcima Moslavačke gore uzgaja se graševina.',
  },
  Novska: {
    introHr:
      'Novska je ulazna točka u Park prirode Lonjsko polje, najveći park prirode u Hrvatskoj i jedno od najvažnijih močvarnih područja Europe, zaštićeno kao Ramsarsko područje međunarodnoga značaja. Lonjsko polje je poplavno područje rijeke Save koje voda povremeno prekriva, bogato divljim životinjama; ovdje se uzgajaju i domaće pasmine, posavski konj i turopoljska svinja. Sela Krapje i Čigoč čuvaju tradicionalnu posavsku drvenu arhitekturu: kuće od hrastovine na povišenim temeljima, prilagođene poplavama. Čigoč je poznat kao Europsko selo roda, jer ima najveću gustoću gnijezda bijele rode u Europi. Rode stižu iz Afrike u ožujku i odlaze u kolovozu, a ista gnijezda koriste iz naraštaja u naraštaj.',
  },
  Lipik: {
    introHr:
      'Lipik je gradić u zapadnoj Slavoniji poznat po dvjema stvarima. Prva je toplice: termalni izvori bili su poznati još u rimsko doba, a u 19. stoljeću oko njih se razvilo lječilište, jedno od najstarijih u Hrvatskoj. Druga je ergela lipicanaca, jedna od tek nekoliko u svijetu u kojima se uzgajaju slavni bijeli konji bečke Španjolske škole jahanja; u Lipiku se uzgajaju od početka 20. stoljeća. U ratu 1991. grad je teško stradao, toplice su razorene i poslije obnovljene, a konji su, kao nekad bečki konji u Drugom svjetskom ratu, evakuirani u Austriju i poslije vraćeni.',
  },
  Zabok: {
    introHr:
      'Zabok je najveći grad Hrvatskoga zagorja i trgovačko, uslužno i prometno središte cijeloga kraja: u njega iz okolnih zagorskih sela i brežuljaka ljudi dolaze u trgovinu i k liječniku. Razvio se u 20. stoljeću, kad su ga željeznica i ceste učinile prirodnim središtem Zagorja, a danas ga autocesta A2, koja vodi od Zagreba prema Varaždinu kroz zagorske brežuljke, brzo povezuje s glavnim gradom. Zabok nema dramatične dvorce kakve imaju okolna sela, ali ima jedan od najvećih tradicionalnih tjednih sajmova u sjevernoj Hrvatskoj. U njegovim se restoranima nudi tradicionalna zagorska kuhinja: štrukli, pečena purica i kremšnita.',
  },
  'Sveti Ivan Zelina': {
    introHr:
      'Sveti Ivan Zelina gradić je istočno od Zagreba, u zelinskim brežuljcima, i središte prigorske vinske podregije. Kraj je nekada pripadao posjedima zagrebačkoga biskupa, a vino se na ovim brežuljcima proizvodi još od srednjega vijeka: biskupski su posjedi 700 godina davali vino za biskupiju i zagrebačku katedralu, pa je ovo jedno od najstarije neprekidno obrađivanih vinogorja u Hrvatskoj. Danas zelinski brežuljci daju neke od najboljih hrvatskih sauvignona u svježem stilu hladnije klime te zelenjak, autohtonu sortu koja raste samo u zelinskoj mikroklimi. Sam grad je malen, ali u okolici brojni obiteljski podrumi primaju posjetitelje, a Zagreb je udaljen samo pola sata.',
  },
  'Dugo Selo': {
    introHr:
      'Dugo Selo grad je neposredno istočno od Zagreba, u savskoj ravnici, i jedno od najstarije naseljenih područja blizu glavnoga grada: arheološki nalazi sežu od brončanoga doba do rimskoga razdoblja, a nalazište iz brončanoga doba pokazuje više od 3000 godina neprekidnoga naseljavanja. Ime opisuje oblik naselja, izduženo ulično selo tipično za panonske krajeve, u kojem su kuće nizane uz jednu cestu. Dugo Selo pripadalo je posjedima zagrebačkoga biskupa, poslije je postalo industrijsko predgrađe, a od devedesetih se brzo razvija kao zagrebačko predgrađe. Odavde počinje turopoljska biciklistička ruta, a okolna sela čuvaju posavske drvene kuće s trijemovima.',
  },
  'Sveta Nedjelja': {
    introHr:
      'Sveta Nedjelja gradić je zapadno od Zagreba, na donjim padinama Plešivice, jednog od najboljih hrvatskih područja za bijela vina: ovdje se uzgajaju pinot bijeli, rizling i autohtoni škrlet, sorta koja raste gotovo isključivo u kraju između Jastrebarskog i Svete Nedjelje. Položaj na padinama učinio je mjesto prirodnim vinogradarskim središtem, pa su u njemu neke od najnagrađivanijih hrvatskih malih vinarija: Korak, Tomac i Šember stekli su međunarodno priznanje za svoja plešivička vina. Vinarija Korak proizvodi pjenušac tradicionalnom metodom, što je u Hrvatskoj rijetkost. Plešivička vinska cesta udaljena je svega 20 kilometara od Zagreba.',
  },
  Grude: {
    introHr:
      'Grude su gradić u zapadnoj Hercegovini, u dolini nazvanoj po hercegu Stjepanu Kosači, srednjovjekovnom vladaru Hercegovine, i jedno od najizrazitije hrvatskih mjesta u Bosni i Hercegovini, s jednim od najvećih udjela hrvatskoga stanovništva u zemlji. Svoj hrvatski katolički identitet kraj je sačuvao kroz 400 godina osmanske vlasti ponajprije zahvaljujući franjevcima, koji su pružali vjerske i obrazovne usluge kad to nijedna druga ustanova nije mogla. Hercegovački franjevci dobili su čak poseban osmanski ferman kojim im je dopušteno skrbiti za katolike, jer su ih Osmanlije radije trpjeli od biskupa koje bi imenovao Rim. Tradicionalne hercegovačke kamene kuće u okolici čuvaju stoljećima stare načine gradnje.',
  },
  Posušje: {
    introHr:
      'Posušje je gradić u zapadnoj Hercegovini, na visoravni Posuškoj zagori, u dramatičnom krškom krajoliku Dinarida: suhozidi, rijetko raslinje i ponegdje vrtače. Kraj je stoljećima bio dio hercegovačkoga duhanskog područja Osmanskoga Carstva; duhan je bio jedna od rijetkih kultura koje su se na kršu mogle uzgajati za prodaju. Hercegovački duhan smatrao se jednim od najboljih u carstvu: suha klima i siromašno tlo iscrpljivali su biljku i tako zgušnjavali njezin okus. Posušje ima izrazito hrvatski katolički karakter i tradicionalnu kamenu arhitekturu tipičnu za hercegovačka sela, a suhozidna gradnja dobro je očuvana u okolnim naseljima.',
  },
  'Prozor-Rama': {
    introHr:
      'Prozor-Rama gradić je u Hercegovini poznat po Ramskom jezeru i po franjevačkom samostanu Rama, povijesno jednom od najvažnijih hrvatskih franjevačkih središta u Bosni. Jezero je umjetno: nastalo je 1968. gradnjom brane, a pritom je potopljeno staro selo Rama. Prije potapanja premješteni su crkva i samostan, koji je od 18. stoljeća bio središte hrvatskoga katoličkog života u ovom dijelu Hercegovine. Za vrlo vedrih dana kroz tirkiznu vodu katkad se naziru obrisi potopljenih građevina. Iz ramske su doline u osmansko doba potjecali uskoci, hrvatski borci koji su bili zapažena vojna snaga. Danas je jezero, okruženo planinama, omiljeno izletište.',
  },
  Jablanica: {
    introHr:
      'Jablanica je gradić u Hercegovini na rijeci Neretvi, poznat po ruševinama mosta iz Drugoga svjetskog rata i po najboljoj janjetini u kraju. U bitci na Neretvi, u siječnju i veljači 1943., partizanska vojska, koja je sa sobom vodila oko 4000 ranjenika, bila je okružena njemačkim, talijanskim i četničkim snagama. Partizani su srušili most da bi zavarali neprijatelja, zatim sagradili privremeni prijelaz i izvukli se; bitka se smatra jednim od najvećih partizanskih uspjeha u ratu. Srušeni most nikad nije popravljen i stoji kao spomenik, a u muzeju na otvorenom izloženi su tenkovi i oprema iz bitke.',
  },
  Trebinje: {
    introHr:
      'Trebinje je najjužniji grad Bosne i Hercegovine, u Republici Srpskoj, s iznimno blagom mediteranskom klimom. Stari grad krasi trg pod platanama, jedan od najljepših na zapadnom Balkanu. Trebinje je nekad bilo važan trgovački grad u zaleđu Dubrovačke Republike, a poslije osmansko upravno središte; iz osmanskoga doba potječe Arslanagićev most iz 16. stoljeća, lijep kameni lučni most preko rijeke Trebišnjice. Nakon rata devedesetih grad je postao dio Republike Srpske. Unatoč srpskoj pravoslavnoj većini, Trebinje često posjećuju hrvatski turisti, zbog klime, ljepote i vina: obližnji manastir Tvrdoš proizvodi vranac koji se, otkako su monasi devedesetih obnovili vinarstvo, prodaje po cijelom svijetu.',
  },
  Zlarin: {
    introHr:
      'Zlarin je mali otok bez automobila u blizini Šibenika, do kojeg se dolazi samo putničkim brodom. Otok je stoljećima bio središte vađenja crvenog koralja na Jadranu. Zlarinski majstori vadili su koralj s morskog dna i ručno ga oblikovali u zrna i ukrase, a nakit se prodavao sve do Indije, Kine i Bliskog istoka. Ta je industrija dosegnula vrhunac u 18. i 19. stoljeću, kada je potražnja za mediteranskim crvenim koraljem bila golema. Propala je kad je koralj prekomjerno izlovljen. Danas su koraljna staništa oko otoka zaštićena, a tradicija izrade koraljnog nakita doživljava malo oživljavanje.',
  },
  Prvić: {
    introHr:
      'Prvić je sićušan otok bez automobila u blizini Šibenika, s kojim je povezana obitelj Fausta Vrančića (1551.–1617.), renesansnog učenjaka, biskupa, diplomata i izumitelja. Vrančić je rođen u Šibeniku, ali je njegova obitelj bila s Prvića. U djelu Machinae Novae iz 1595. godine prikazao je 49 strojeva, među njima viseće mostove, vjetrenjače i Homo Volans — prvi upotrebljivi padobran, dvjesto godina prije Montgolfiera. Godine 1617., u dobi od 65 godina, skočio je s jednog venecijanskog tornja i preživio. Nitko taj skok nije ponovio sljedećih 170 godina. U mjestu Prvić Luka danas se nalazi mali muzej posvećen njegovim izumima.',
  },
  Ilovik: {
    introHr:
      'Ilovik je najjužniji kvarnerski otok, sićušan i bez automobila, poznat kao „otok cvijeća“ zbog iznimne gustoće cvijeća i aromatičnih biljaka. Okolni otoci štite ga od bure, pa u njegovoj blagoj klimi cijele godine cvjetaju ruže, oleandri i suptropske biljke; čak i u prosincu, kad su hrvatski gradovi sivi i hladni, ilovičke ruže još cvjetaju. Otok je naseljen od antičkih vremena, a rimsko naselje proizvodilo je amfore pronađene po cijelom Jadranu. Danas ima manje od sto stalnih stanovnika i jedna je od najizoliranijih hrvatskih zajednica, ali je njegovo sidrište jedno od najomiljenijih na kvarnerskoj jedriličarskoj ruti.',
  },
  Susak: {
    introHr:
      'Susak je mali otok kraj Lošinja i prava geološka iznimka: dok su svi drugi jadranski otoci od vapnenca, Susak je u cijelosti od pijeska. Taj je pijesak nataložen na kraju posljednjeg ledenog doba, kad je Jadran bio suho tlo, a Susak pješčana dina. Izoliranost otoka sačuvala je i jezičnu posebnost — suščanski je govor toliko različit od standardnog hrvatskog da lingvisti raspravljaju je li riječ o zasebnom jeziku. Jedinstvena je i ženska narodna nošnja s kratkim crvenim suknjama, kakve nema nigdje drugdje u Hrvatskoj. Brojna suščanska dijaspora živi u New Jerseyju, gdje iseljenici i danas čuvaju govor, nošnju i običaje otoka.',
  },
  'Zadar Riviera': {
    introHr:
      'Zadarska rivijera obuhvaća obalna mjesta sjeverno od Zadra — Nin, Privlaku, Petrčane, Borik i druga — i najpopularnije je odredište za obiteljski odmor na sjevernodalmatinskoj obali. Turizam se ovdje brzo razvio šezdesetih i sedamdesetih godina prošlog stoljeća, ponajprije s njemačkim i austrijskim gostima. Za razliku od ostatka Dalmacije, gdje su plaže šljunčane i kamenite, more je tu najtoplije i najpliće na dalmatinskoj obali, a plaže su pješčane. Ninska laguna ljeti se zagrije do 30 °C i zbog ljekovitog blata zovu je hrvatskim Mrtvim morem. Područje ima najveću gustoću hotela i kampova po kilometru obale u Hrvatskoj.',
  },
  Perušić: {
    introHr:
      'Perušić je malo ličko selo na rijeci Lici, poznato po obližnjim krškim izvorima koji hrane dolinu i kao polazište planinarskih staza na Velebit. Nad dolinom se uzdižu ruševine srednjovjekovne frankopanske utvrde, vidljive s glavne ceste. Rijeka Lika kod Perušića bistar je krški potok bogat pastrvom, a okolni krajolik tipično je lički: otvorena krška polja, vapnenački vrhovi, kristalno čiste rijeke i hladni izvori. Velebitske staze koje počinju u blizini vode u pravi planinski teren. Kraj je u ratu 1991.–1995. gotovo posve ostao bez stanovnika i oporavak još traje, polako. Na Velebitu koji se vidi iz sela žive medvjedi, vukovi i risovi.',
  },
  Brinje: {
    introHr:
      'Brinje je mali lički grad na ulazu u kanjon Brinjske drage, a nad njim se uzdiže utvrda Sokolac, frankopanski dvorac iz 14.–16. stoljeća koji je nadzirao ključni prolaz između obale i unutrašnjosti. Sokolac je bio jedna od najvažnijih utvrda Vojne krajine jer je kontrolirao put iz Senja na obali u ličku unutrašnjost. Glavnu utvrdu podigli su i branili Frankopani, najmoćnija hrvatska srednjovjekovna plemićka obitelj. U utvrdi se nalazi rijetko očuvana gotička kapela iz 15. stoljeća, posvećena Svetoj Mariji Snježnoj, koja se ubraja među najljepše srednjovjekovne kapele u Hrvatskoj. Njezine freske, naslikane oko 1430., prikazuju Djevicu Mariju okruženu hrvatskim plemićima u srednjovjekovnoj odjeći.',
  },
  Udbina: {
    introHr:
      'Udbina je mali lički grad na visoravni Krbavskog polja, jednog od najvećih krških polja u Hrvatskoj — ravnog, vjetrovitog i povijesno važnog. Ovdje se 9. rujna 1493. odigrala Krbavska bitka, najteži vojni poraz u hrvatskoj povijesti: osmanska je vojska gotovo uništila hrvatsko plemstvo, a poginulo je oko 10 000 hrvatskih vojnika i većina plemićkog staleža. Poraz je otvorio Liku i Slavoniju osmanskom osvajanju, pa se to mjesto pamti kao „hrvatsko Kosovo“, a 9. rujna jedan je od najtužnijih datuma hrvatske povijesti. Nakon bitke papa Aleksandar VI. nazvao je Hrvate „predziđem kršćanstva“. Vojna prisutnost stoljećima obilježava visoravan — danas je u Udbini baza Hrvatskog ratnog zrakoplovstva.',
  },
  'Donji Lapac': {
    introHr:
      'Donji Lapac mali je grad u najudaljenijem kutu Like, uz bosansku granicu, i jedno od najrjeđe naseljenih područja Hrvatske. U ratu 1991.–1995. bio je u središtu krajinskog teritorija i gotovo posve ostao bez predratnog hrvatskog stanovništva; nakon Oluje 1995. otišlo je i srpsko stanovništvo. Desetljećima poslije, ratna depopulacija još nije preokrenuta. Krajolik oko grada netaknuta je divljina u kojoj su medvjedi, vukovi i risovi uobičajeni. Obližnja Una, koja teče uglavnom po Bosni, jedna je od najčišćih rijeka u Europi, a granica s Bosnom prolazi gotovo bez cesta kroz gustu šumu bukve i jele — nevidljiva crta kroz jedinstveno stanište vukova i medvjeda u dvjema državama.',
  },
  Gračac: {
    introHr:
      'Gračac je mali grad u južnoj Lici, podno Velebita, i jedno od ključnih mjesta na putu između Zagreba i Splita kroz ličku unutrašnjost. Razvio se kao vojnokrajiško naselje, a kasnije kao postaja na ličkoj pruzi Zagreb–Split, dovršenoj 1925. godine, koja se ubraja među najslikovitije željeznice na Balkanu i pojavila se u nekoliko međunarodnih filmova. Gračac je bio zahvaćen ratom 1991. i doživio je depopulaciju. Ujedno je vrata kanjona rijeke Zrmanje, dramatične vapnenačke klisure omiljene među kajakašima i raftašima, a u velebitskom podgorju sačuvala su se tradicionalna vlaška pastirska naselja iz srednjeg vijeka.',
  },
  Rakovica: {
    introHr:
      'Rakovica je naselje najbliže ulazu u Nacionalni park Plitvička jezera, vrata kroz koja većina posjetitelja ulazi u jedno od najpoznatijih prirodnih područja Hrvatske i Europe. Selo se razvilo ponajprije kako bi služilo plitvičkom turizmu, a administrativno je sjedište parka od njegova osnutka 1949. godine. Park godišnje posjeti više od dva milijuna ljudi, što ga čini jednim od najposjećenijih u Europi. Kanjon rijeke Korane ispod jezera i sam je spektakularna klisura pod zaštitom UNESCO-a, koju posjetitelji usmjereni na jezera često previde. Sedrene barijere koje stvaraju plitvička jezera rastu oko jedan centimetar godišnje.',
  },
  'Hrvatska Kostajnica': {
    introHr:
      'Hrvatska Kostajnica pogranični je gradić na rijeci Uni, točno nasuprot Bosanskoj Kostajnici u Bosni i Hercegovini. Njegov srednjovjekovni dvorac iz 14. stoljeća stoji na otoku u rijeci, a granica prolazi sredinom otoka, pa je jedan kraj u Hrvatskoj, a drugi u Bosni — jedan od najneobičnijih položaja dvorca u Hrvatskoj. Grad je 1991. bio na prvoj crti bojišnice i teško je oštećen, no dvorac je obnovljen. Una je ovdje iznimno bistra i lijepa, jedna od najčišćih hrvatskih rijeka, poznata po pastrvi i lipljenu, a malo uzvodno tvori dramatičan kanjon. Ime joj, prema predaji, dolazi od latinskog: rimski su je doseljenici zvali „Una“, jedina.',
  },
  Glina: {
    introHr:
      'Glina je mali grad u Sisačko-moslavačkoj županiji, kraju duboko obilježenom i Drugim svjetskim ratom i Domovinskim ratom. Grad je dobio ime po rijeci Glini koja kroz njega teče. Godine 1941. u Glini se dogodio jedan od najtežih ratnih zločina Drugoga svjetskog rata u Hrvatskoj: ustaške su snage u mjesnoj pravoslavnoj crkvi ubile stotine srpskih civila. Od 1991. do 1995. glinsko su područje držale srpske snage, a oslobođeno je u Oluji. Ista mjesta i iste zajednice tako su, s razmakom od jedne generacije, dvaput prošle kroz ratne zločine. Desetljećima poslije Glina je mjesto pomirenja i sporog poslijeratnog oporavka.',
  },
  'Zlatar Bistrica': {
    introHr:
      'Zlatar Bistrica gradić je u Hrvatskom zagorju, pedesetak kilometara sjeverno od Zagreba, poznat po toplicama Terme Zlatar i kao ulaz u zagorske vinske brežuljke. Leži u gornjoj dolini rijeke Krapine, okružen blagim brežuljcima, a u okolnim selima sačuvana je tradicionalna zagorska arhitektura. Termalni izvori bili su mještanima poznati stoljećima prije nego što su izgrađene moderne toplice; danas voda u bazenima doseže 38 °C, a kompleks je postao jedno od najpopularnijih wellness odredišta u Hrvatskoj, omiljeno za jednodnevne i vikend izlete iz Zagreba. Na okolnim brežuljcima uzgajaju se rizling i sauvignon.',
  },
  Bednja: {
    introHr:
      'Bednja je malo selo u dolini pod Ivanščicom, u sjevernoj Hrvatskoj, u jednom od najtradicionalnijih i najmanje razvijenih dijelova Zagorja. Dolina je stoljećima bila izolirana poljodjelska zajednica, zaštićena okolnim brežuljcima. Seoska crkva potječe iz 16. stoljeća, a u okolnim zaseocima još se nalaze tradicionalne kuće — niske kamene zgrade s drvenim verandama. U domaćinstvima se i danas prave zagorski med i šljivovica. Posebno je zanimljiv govor doline: bednjanski je jedan od najarhaičnijih kajkavskih govora u Hrvatskoj, toliko različit od standardnog jezika da lingvisti raspravljaju je li zaseban jezik, bliži slovenskom i slovačkom nego hrvatskom koji se uči u školi.',
  },
  Desinić: {
    introHr:
      'Desinić je malo zagorsko selo u brežuljcima zapadnog Zagorja, blizu slovenske granice, poznato po obližnjem dvorcu Trakošćanu — jednom od najfotografiranijih hrvatskih spomenika. Trakošćan je izvorno bio srednjovjekovna utvrda, ali ga je obitelj Drašković u 19. stoljeću, u skladu s tadašnjom modom oživljavanja srednjovjekovnog stila, preuredila u romantičarsku neogotičku rezidenciju. Jezero oko dvorca stvoreno je umjetno i upravo ono daje krajoliku romantični ugođaj: slika tornjeva koji se zrcale u vodi već više od stoljeća pojavljuje se u putopisnim časopisima i na razglednicama. Na brežuljcima oko Desinića uzgajaju se rizling i traminac u njemačkom stilu.',
  },
  Ozalj: {
    introHr:
      'Ozalj je mali grad na rijeci Kupi kraj Karlovca, poznat po dvorcu Ozlju — jednom od najvećih srednjovjekovnih dvorskih sklopova u Hrvatskoj. Dvorac je bio jedno od glavnih sjedišta i Zrinskih i Frankopana, dviju najvećih hrvatskih plemićkih dinastija, koje su ga posjedovale zajednički. Sklop obuhvaća kule od 13. do 17. stoljeća, dakle četiri stotine godina gradnje, a muzej u dvorcu dokumentira izniman doprinos tih obitelji hrvatskoj kulturi. Iz Ozlja je pisala Ana Katarina Frankopan (1625.–1673.), supruga Petra Zrinskog i prva hrvatska pjesnikinja; njezine tužaljke nastale su nakon što je muž pogubljen zbog veleizdaje, dok je ona bila zatočena u vlastitom dvorcu.',
  },
  Pirovac: {
    introHr:
      'Pirovac je malo turističko mjesto na Šibenskoj rivijeri, smješteno u zaštićenom zaljevu između dvaju poluotoka, s izvrsnim plažama za kupanje. Razvio se pod Venecijom kao ribarsko i poljodjelsko naselje, a zaklonjeni zaljev bio je prirodno sidrište. U 20. stoljeću turizam je zamijenio ribarstvo kao glavnu djelatnost. Stari dio mjesta ima baroknu baštinu, a župna crkva potječe iz 18. stoljeća. More u zaljevu kristalno je čisto, među najčišćima na rivijeri, a brodom se iz Pirovca stiže do otoka Šibenskog arhipelaga, koji broji 242 otoka, otočića i hridi, većinom nenaseljenih — jedriličari provode cijela ljeta istražujući ih, a da ih ne vide sve.',
  },
  Tribunj: {
    introHr:
      'Tribunj je malo ribarsko mjesto kraj Vodica koje je, unatoč blizini većeg ljetovališta, sačuvalo tradicionalni karakter. Stari dio mjesta, venecijanskog ugođaja, stoji na malom otoku povezanom s obalom mostom, a u luci su ribarske brodice. Tribunj je jedno od rijetkih dalmatinskih mjesta koja se još pretežno bave komercijalnim ribolovom — miris ribe i mreže koje se suše i danas su dio svakodnevice. Svake godine ribarska noć slavi tu baštinu glazbom i ribom s gradela. S mora su dostupni Logorun i drugi otoci, a obližnji Pirovački zaljev i Šibenski arhipelag nude izvrsno ronjenje.',
  },
  Murter: {
    introHr:
      'Murter je malo otočno mjesto i vrata Nacionalnog parka Kornati — 89 nenaseljenih otoka koji čine najgušći arhipelag na Mediteranu. Većina kornatskih otoka u privatnom je vlasništvu murterskih obitelji, a Murterini brodom odlaze na Kornate obrađivati svoje masline. Taj neobičan sustav, u kojem privatno vlasništvo nad nenaseljenim otocima traje već više od 500 godina, pomogao je očuvati ih, a tradicionalno korištenje dio je onoga što kornatski ekosustav čini jedinstvenim: nacionalni park štiti otoke, ali ga dopušta. Kornati na prvi pogled izgledaju pusto — goli vapnenac i rijetka makija — a ipak svaki otok ima svog vlasnika, svoje masline i kameno sklonište.',
  },
  Krka: {
    introHr:
      'Nacionalni park Krka jedno je od najomiljenijih prirodnih područja Hrvatske — niz sedrenih slapova na rijeci Krki, među kojima je Skradinski buk najspektakularniji i jedan od najvećih sedrenih slapova u Europi; kupanje pod njim nedavno je ograničeno. Park ima sedamnaest slapova, a sustav se proteže pedeset kilometara od Knina do mora. Najdojmljivije je mjesto otočić Visovac, na kojem franjevački samostan djeluje od 1445. godine — već 580 godina, što ga čini jednom od najstarijih neprekinutih redovničkih zajednica u Hrvatskoj. Franjevci su kroz osmansku vlast čuvali pismenost i vjerski život, a knjižnica samostana čuva rijetke iluminirane rukopise.',
  },
  'Punta Križa': {
    introHr:
      'Punta Križa malo je selo na južnom vrhu otoka Cresa, jedna od najudaljenijih i najmirnijih hrvatskih zajednica, do koje se stiže samo brodom ili dugom vožnjom preko otoka. Južna creska naselja razvila su se u srednjem vijeku kao ribarska i maslinarska mjesta, a upravo je krajnja udaljenost sačuvala Puntu Križu od izgradnje. More je oko nje iznimno bistro — dno uvale vidi se na trideset metara dubine. Selo ima manje od sto stalnih stanovnika, ali i predanu jedriličarsku zajednicu, a maslinovo ulje s Cresa ubraja se među najbolja na Kvarneru.',
  },
  'Mošćenička Draga': {
    introHr:
      'Mošćenička Draga malo je ljetovalište na Kvarnerskoj rivijeri, smješteno pod brdskim starim selom Mošćenicama. Mošćenice su jedno od najbolje očuvanih srednjovjekovnih utvrđenih sela na klisuri iznad mora u Hrvatskoj, a njihove obrambene zidine iz 13. stoljeća još su gotovo posve cjelovite. Novija Mošćenička Draga — „draga“ znači mala dolina ili uvala — razvila se ispod za potrebe turizma, a njezina šljunčana plaža poznata je po vrlo čistom i bistrom moru. Kraj je poznat i po maslinovom ulju: zadruga Zora iz Mošćenica više je puta osvojila nagradu Flos Olei, jedno od najvažnijih svjetskih natjecanja maslinovih ulja.',
  },
  Lošinj: {
    introHr:
      'Lošinj, s Malim Lošinjem kao glavnim mjestom, poznat je kao „otok vitalnosti“. Njegovu iznimnu mikroklimu, aromatične biljke i čisto more prepoznali su već u 19. stoljeću austrougarski liječnici, koji su boravak na otoku preporučivali oboljelima od dišnih bolesti; 1892. Austrougarsko liječničko društvo proglasilo je Lošinj lječilišnim otokom. Lošinjski pomorski kapetani plovili su u 18. i 19. stoljeću svjetskim oceanima i donosili biljke iz dalekih krajeva, koje su se u blagoj klimi udomaćile, pa otok danas ima više od 1100 biljnih vrsta — više nego mnoge daleko veće zemlje. Od 1987. Jadranski projekt dupina prati stalnu populaciju dobrih dupina u lošinjskim vodama.',
  },
  'Veli Lošinj': {
    introHr:
      'Veli Lošinj — „Veliki Lošinj“ — starije je i manje od dvaju glavnih naselja otoka Lošinja: mirnije od Malog Lošinja, sa šarmantnom lukom i venecijanskim tornjem iz 14. stoljeća iznad nje. Poznato je i po jednom od najneobičnijih hrvatskih muzeja, Muzeju Apoksiomena. Antički grčki brončani kip Apoksiomena pronašao je 1999. godine austrijski ronilac na rekreativnom zaronu, na dubini od samo 45 metara. Original iz 2. stoljeća prije Krista, izgubljen u moru 2100 godina, pažljivo je restauriran i danas se ubraja među najljepše antičke bronce na svijetu. Muzej u Velom Lošinju posebno je izgrađen kako bi kip bio izložen u najboljim uvjetima čuvanja.',
  },
  'Dubrovačko primorje': {
    introHr:
      'Dubrovačko primorje obalno je područje između Ploča i Dubrovnika — dio južnodalmatinske obale s malim selima, maslinicima i mirnim plažama. Ston, Slano i sela primorja bili su dio Dubrovačke Republike i činili su vanjski obrambeni sustav grada. Kraj je stradao u ratu 1991., ali je obnovljen. Krajolik određuju tradicionalna kamena sela s terasastim maslinicima; za neka se stabla vjeruje da potječu još iz vremena Republike, prije 1808. Obalna cesta kroz primorje jedna je od najljepših vožnji u Hrvatskoj, a na padinama rade neki od najboljih malih hrvatskih vinara, s plavcem malim kao glavnom sortom.',
  },
  Živogošće: {
    introHr:
      'Živogošće je malo selo na Makarskoj rivijeri, poznato po plažama u borovoj šumi i mirnijem karakteru od većih susjeda. Sastoji se od triju dijelova — Blata, Porta i Male Dube — raspoređenih duž obale. Razvilo se kao malo poljodjelsko i ribarsko naselje, a u 20. stoljeću postalo je tiha alternativa Makarskoj, udaljenoj dvanaest kilometara. Borove šume iza plaža daju prirodni hlad, rijedak na jadranskoj obali; pinije mogu živjeti i pet stotina godina, pa su neka stabla koja danas zasjenjuju kupače bila mladice još u 16. stoljeću. U okolici se proizvode tradicionalno dalmatinsko maslinovo ulje i vino.',
  },
  Zagvozd: {
    introHr:
      'Zagvozd je malo selo u unutrašnjosti Dalmacije, na podnožju masiva Biokova, sjeverni ulaz na planinu i tradicionalna stočarska zajednica Imotske krajine. Leži na raskrižju ceste Split–Imotski i puta koji vodi na Biokovo — prijevoja koji je strateški važan još od antike, između obalne Dalmacije i unutrašnjosti. Selo je sačuvalo izrazito tradicionalan karakter dalmatinskog zaleđa: kamenu arhitekturu, stočarstvo i vinogradarstvo na kršu, a kraj daje janjetinu, kozji sir i vino s krških padina. Biokovo ovdje stvara oštru klimatsku granicu — dok obalna strana dobiva toplo mediteransko podneblje, Zagvozd na sjevernoj strani ima jaku buru i snježne zime, iako je od plaže udaljen samo dvadesetak kilometara.',
  },
  Vinkovci: {
    introHr:
      'Vinkovci imaju izniman podatak u svojoj povijesti: arheološki nalazi pokazuju neprekinutu naseljenost od osam tisuća godina, što ih čini jednim od najstarijih neprekidno naseljenih mjesta u Europi. Slojevi na nalazištu sežu od neolitika preko rimskog doba do današnjice. U blizini je cvjetala vučedolska kultura (oko 2800.–1800. pr. Kr.), koja je stvorila Vučedolsku golubicu — keramičku posudu na tri noge iz oko 2800. godine prije Krista, poslije prikazanu na hrvatskoj kovanici od 20 kuna. Tako je artefakt star 4800 godina postao lice moderne hrvatske valute. Grad je teško oštećen u Domovinskom ratu 1991. godine. Danas su Vinkovci središte ravne slavonske poljoprivredne regije.',
  },
  Dakovo: {
    introHr:
      'Đakovo je slavonski grad s dvjema znamenitostima svjetske razine: veličanstvenom neoromaničkom katedralom biskupa Josipa Juraja Strossmayera i ergelom lipicanaca. Strossmayer (1815.–1905.), veliki kulturni mecena 19. stoljeća, gradio je katedralu četrdeset godina, od 1866. do 1882., a iz vlastitog je bogatstva utemeljio Hrvatsku akademiju znanosti i umjetnosti u Zagrebu i zagrebačku galeriju starih majstora. Dva tornja katedrale visoka 84 metra vide se s dvadeset kilometara i nadvisuju ravnu slavonsku nizinu. Đakovačka ergela uzgaja lipicance — istu pasminu kakvu jaše bečka Španjolska škola jahanja — i jedna je od malobrojnih na svijetu. Đakovački vezovi, najveća hrvatska folklorna manifestacija, spajaju nastupe lipicanaca i narodne nošnje.',
  },
  Rabac: {
    introHr:
      'Rabac je ljetovalište pod Labinom, nekadašnje ribarsko selo koje se pretvorilo u jedno od najljepših istarskih obalnih odredišta, s kristalno čistim morem, plažama s Plavom zastavom i opuštenim mediteranskim ugođajem. Iz malog ribarskog naselja razvio se u 20. stoljeću, kad je turizam zamijenio ribarstvo kao glavnu djelatnost. Plaža Girandella desetljećima nosi Plavu zastavu i jedna je od najčišćih u Istri, a more oko Rabca među najbistrijima je na poluotoku. Labin na brdu, srednjovjekovni gradić četiri kilometra dalje, i Rabac na moru čine skladan par — kultura i priroda u jednom danu.',
  },
  Buje: {
    introHr:
      "Buje su glavni grad sjeverozapadne Istre — srednjovjekovni gradić na brdu okružen vinogradima i maslinicima, koji se smatra središtem istarskog vinarstva. Okolica daje malvaziju i teran, dvije istarske sorte po kojima je poluotok najpoznatiji, a kroz brežuljke oko Buja prolazi istarska Vinska cesta s nekim od najcjenjenijih hrvatskih vinarija. Na brdu je utvrda postojala još od rimskih vremena, a zbog širokog pogleda na okolni kraj grad je nekoć nosio nadimak „Stražarica Istre“ (Vedeta dell'Istria). Crkva svetog Servula ima venecijansku ložu i zvonik. Na bujske tržnice redovito dolaze talijanski gastronomski turisti iz Venecije i Trsta kako bi kupili vino, tartufe i maslinovo ulje.",
  },
  'Imotski region': {
    introHr:
      'Imotska krajina kulturna je mikroregija dalmatinskog zaleđa, poznata po snažnoj neovisnosti, iznimnom nogometnom talentu i dvama od najspektakularnijih krških jezera na svijetu. Modro i Crveno jezero kod Imotskog leže u golemim krškim ponorima; ljeti se u ponoru Modrog jezera održavaju koncerti, publika sjedi na rubu, a izvođači nastupaju na obali jezera pedeset metara niže. Imotska krajina dala je hrvatskoj reprezentaciji više nogometaša po glavi stanovnika nego gotovo ijedan drugi kraj, što je izvor golemog mjesnog ponosa. Tradicionalno ojkanje iz imotskoga kraja upisano je na UNESCO-ov popis baštine.',
  },
  Karlobag: {
    introHr:
      'Karlobag je sićušan obalni gradić na podnožju Velebita, najmanji grad na jadranskoj obali s manje od tisuću stanovnika, i morska vrata Like. Zauzima strateški položaj na mjestu gdje cesta iz Like izlazi na more; habsburški je grad podignut nakon 1776. na ruševinama starijeg naselja. Planina se uzdiže gotovo neposredno iza kuća. Trajekt za Pag (linija Prizna–Žigljen) čini Karlobag važnom prometnom točkom i jedna je od najslikovitijih kratkih trajektnih ruta u zemlji, no bura je u Velebitskom kanalu toliko snažna da se plovidba redovito otkazuje: kanal između velebitskih stijena i Paga djeluje kao vjetrovni tunel.',
  },
  Bakar: {
    introHr:
      'Bakar je gradić na jedinom fjordolikom zaljevu u Hrvatskoj — dubokoj i uskoj uvali koja se zove Bakarsko ždrilo. Riječ je o potopljenoj riječnoj dolini, jedinoj pravoj riji na Jadranu i neobičnoj geološkoj pojavi na ovoj obali. Bakar je nekoć bio jedna od najvažnijih luka u kraju — glavna luka Hrvatsko-Ugarskog Kraljevstva prije uspona Rijeke — a njegov kaštel iznad grada, podignut u srednjem vijeku, služio je kao hrvatsko-ugarsko upravno središte. Zbog uskog ulaza i duboke vode zaljev je u Drugom svjetskom ratu služio kao prirodna podmornička luka: u njemu su se plovila jugoslavenske mornarice skrivala od izviđanja iz zraka.',
  },
  Vukovar: {
    introHr:
      'Vukovar je 1991. postao svjetski simbol hrvatskog otpora: 1800 branitelja držalo je grad 87 dana protiv 36 000 pripadnika jugoslavenskih snaga. Bitka za Vukovar, od kolovoza do studenoga 1991., bila je najteže razaranje jednoga grada u Europi od Drugoga svjetskog rata — grad je bio razoren 80 posto. Nakon pada grada na farmi Ovčara pogubljeno je više od 200 hrvatskih zarobljenika. Vodotoranj je za opsade primio više od 600 izravnih pogodaka, a ipak je ostao stajati. Hrvatska je odlučila ostaviti ga neobnovljenim, izrešetanog granatama, kao trajni spomenik; danas je najposjećenije memorijalno mjesto u Hrvatskoj.',
  },
  Daruvar: {
    introHr:
      'Daruvar ima dvije neobične posebnosti. Prva je češka manjina: češke su doseljenike u daruvarski kraj 1780-ih dovele habsburške vlasti, a njihovi potomci i nakon 250 godina govore češki i čuvaju jezik, narodne običaje i novine. Daruvar ima jedinu školu i jedine novine na češkom jeziku izvan Češke — list Jednota izlazi ovdje od 1946. godine. Druga posebnost su toplice: termalne izvore koristili su već Rimljani prije dvije tisuće godina, u lječilištu Aquae Balissae, koje je ovdje postojalo mnogo prije Čeha. Češka zajednica u Daruvaru održava folklorne tradicije jedinstvene u Hrvatskoj, a topla voda koja je privukla Rimljane i danas je razlog za posjet.',
  },
  Delnice: {
    introHr:
      'Delnice su glavni grad Gorskog kotara, hrvatske šumovite planinske regije poznate po obilnim snježnim padalinama, hladnoj klimi, netaknutim bukovim šumama i populaciji smeđeg medvjeda. Gorski kotar bio je povijesna granica između jadranskog i panonskog svijeta. Delnice u prosjeku imaju više od 150 snježnih dana godišnje i jedan su od najsnježnijih hrvatskih gradova. Hrvatska ima više od 300 smeđih medvjeda, jednu od najzdravijih populacija u zapadnoj Europi, i većina ih živi upravo u Gorskom kotaru oko Delnica; Hrvatska čak izvozi medvjede u druge zemlje kako bi obnovila osiromašene europske populacije. U blizini je Nacionalni park Risnjak, nazvan po risu, s netaknutom planinskom šumom.',
  },
  Vrsar: {
    introHr:
      'Vrsar je mali istarski obalni gradić kroz koji je 1755. godine, bježeći iz Venecije, prošao Giacomo Casanova; spominje ga u svojim memoarima pod imenom Orsera. Dva stoljeća poslije Vrsar je za svoj dom izabrao kipar Dušan Džamonja (1928.–2009.), koji je ovdje živio od šezdesetih godina i na brdu iznad grada stvorio park monumentalnih skulptura od čelika i kamena — jednu od najvažnijih zbirki skulptura na otvorenom u Hrvatskoj. U blizini je Limska draga, dvanaest kilometara dug morski zaljev nalik fjordu, jedini takav u Istri. Zaštićena duboka voda i miješanje slatke i slane vode daju kamenice koje mnogi znalci smatraju najboljima u Hrvatskoj.',
  },
  Osor: {
    introHr:
      'Osor je sićušno selo od pedesetak stanovnika na uskom kanalu između otoka Cresa i Lošinja — a nekoć je bio rimski i bizantski grad s 20 000 stanovnika. Rimski Apsorus bio je glavni grad kvarnerskih otoka u rimsko i bizantsko doba, grad koji se mogao mjeriti sa Salonom, a propao je nakon pada Rima. Ruševine su danas razasute po cijelom selu, uz sačuvane srednjovjekovne građevine iznenađujuće za tako malo mjesto. Osorski biskup Gaudencije hrvatski je zaštitnik glazbe. Svakog ljeta festival Osorske glazbene večeri koristi rimske ruševine kao koncertnu pozornicu: orkestri sviraju na otvorenom, okruženi rimskim zidinama, a publika je brojnija od stalnih stanovnika tisuću puta.',
  },
  'Kneževi Vinogradi': {
    introHr:
      'Kneževi Vinogradi središte su vinogradarstva u Baranji, plodnom kraju sjeverno od Drave, gdje se Hrvatska sastaje s Mađarskom i Srbijom. Tlo je ovdje les, sediment koji je vjetar nataložio nakon ledenog doba, i upravo ono daje izvrsne uvjete za sorte graševina i frankovka. Baranjska crna vina ubrajaju se među najbolja u Hrvatskoj. Nedaleko od sela nalazi se Park prirode Kopački rit, jedno od najvećih slatkovodnih močvarnih područja u Europi. Svakog proljeća, kad se Drava i Dunav izliju, rit se potpuno poplavi i pretvori u unutarnje more od oko 230 kvadratnih kilometara. Tada postaje najveće europsko gnjezdilište močvarnih ptica, s više od tristo vrsta.',
  },
  Zagreb: {
    introHr:
      'Zagreb je glavni i najveći grad Hrvatske, srednjoeuropska metropola s gotovo milijun stanovnika. Grad je nastao od dva suparnička srednjovjekovna naselja, Kaptola i Gradeca, koja su se ujedinila tek 1850. godine. Gornji grad čuva crkvu svetog Marka s poznatim šarenim krovom, a Donji grad ima široke ulice, parkove i muzeje iz habsburškog doba. Tržnica Dolac radi svaki dan od 1930. godine, a zagrebačka uspinjača iz 1890. jedna je od najkraćih na svijetu. Zagreb spaja austrijsku urednost i mediteransku toplinu: ozbiljan je u uredima, a živ u kafićima na Tkalčićevoj.',
  },
  Split: {
    introHr:
      'Split je najveći grad u Dalmaciji i drugi po veličini u Hrvatskoj. Njegova povijesna jezgra jedinstvena je u svijetu: ljudi žive unutar rimske palače koju je car Dioklecijan sagradio prije više od 1700 godina. Kad su izbjeglice u sedmom stoljeću ušle u napuštenu palaču, ostale su ondje zauvijek. Danas se unutar rimskih zidova nalaze kafići, stanovi i trgovine, a katedrala svetog Duje smještena je u carevu mauzoleju. Splićani se popodne šetaju Rivom, a vikendom idu na brdo Marjan, koje zovu plućima grada.',
  },
  Zadar: {
    introHr:
      'Zadar je najveći grad sjeverne Dalmacije i jedan od najstarijih gradova na Jadranu. Njegov stari grad leži na malom poluotoku, okružen zidinama i rimskim pločama. Zadar spaja duboku prošlost i modernu umjetnost: crkva svetog Donata iz devetog stoljeća sagrađena je od rimskoga kamena, a na rivi se nalaze Morske orgulje, u kojima valovi sviraju glazbu, i Pozdrav Suncu, koji noću svijetli u bojama. Redatelj Alfred Hitchcock rekao je da Zadar ima najljepši zalazak sunca na svijetu. Zadrani se s time potpuno slažu.',
  },
  Medulin: {
    introHr:
      'Medulin je mirno primorsko mjesto na samom jugu istarskoga poluotoka, odmah južno od Pule. Ima duge pješčane i šljunčane plaže i plitke uvale, pa ga ljeti biraju obitelji iz Slovenije, Austrije i Italije. Na poluotoku Vižula nalaze se ostaci rimske carske vile iz 1. stoljeća, čiji se zidovi pod vodom još vide u plićaku. Kroz bizantsku, franačku, mletačku, habsburšku i talijansku vlast Medulin je ostao ribarsko selo; turizam se počeo razvijati 1960-ih, a ubrzao nakon 2000. Danas općina ima oko 6500 stanovnika, a ljeti deset puta više. Poslijepodnevni maestral čini zaljev idealnim za jedrenje na dasci.',
  },
  Premantura: {
    introHr:
      'Premantura je malo mjesto na samom južnom vrhu Istre, na poluotoku Kamenjak, koji mnogi smatraju najneobičnijim geološkim blagom Hrvatske. U vapnencu obale vidljivi su otisci stopa dinosaura iz donje krede, stari 130 milijuna godina, a do njih vodi pješačka staza. Selo su u 16. stoljeću naselile izbjeglice iz dalmatinskoga zaleđa koje su bježale pred osmanskim upadima, i ono je stoljećima bilo siromašno ribarsko i poljodjelsko mjesto. Kamenjak je 1996. postao zaštićeni rezervat, pa danas Premanturom vlada ekoturizam: kajak, skokovi s klifova i šetnje do tragova dinosaura. Na poluotoku raste više od trideset vrsta orhideja, među njima i endemi kojih nema nigdje drugdje u Hrvatskoj.',
  },
  Fažana: {
    introHr:
      'Fažana je mali ribarski gradić na istarskoj obali sjeverno od Pule, iz kojeg polaze brodovi za Nacionalni park Brijuni, petnaest minuta preko kanala. U rimsko doba bila je važno središte proizvodnje amfora, glinenih posuda za ulje i vino koje su odavde otpremane po cijelom carstvu; peći i skladišta iz 1. stoljeća iskopani su uz rivu. Kroz bizantsku, mletačku i habsburšku vlast ostala je ribarsko selo. Kad je Tito odabrao Brijune za ljetnu rezidenciju (1947.–1980.), Fažana je postala vrata jednoga od najzatvorenijih mjesta Jugoslavije, kroz koja su prolazili strani državnici. Srdela je ovdje glavni ulov već dva tisućljeća, a slavi je godišnja fešta Šurinjana.',
  },
  Funtana: {
    introHr:
      'Funtana je malo primorsko selo na zapadnoj obali Istre, između Poreča i Vrsara, nazvano po prirodnom izvoru slatke vode koji je stoljećima opskrbljivao brodove. Izvor je bio jedini na obali između Poreča i Rovinja, pa su se mletačke galije ovdje zaustavljale da napune bačve, a Republika ga je štitila zakonima. Plemićka obitelj Bembo posjedovala je izvor i u 16. stoljeću uz njega sagradila mali kaštel, koji i danas stoji u središtu sela. Kampovi iz 1960-ih i 1970-ih privukli su turiste, a danas marina dovodi jedriličare. U kolovozu se održava Ribarska fešta, jedna od najstarijih na istarskoj obali.',
  },
  Punat: {
    introHr:
      'Punat je mali grad u unutrašnjem zaljevu otoka Krka, čija je zaštićena luka stoljećima bila najpouzdanije krčko pristanište. Marina Punat, otvorena 1964., najstarija je marina u Hrvatskoj i jedna od najvećih na Jadranu, s više od 850 vezova. Punat je bio ribarsko selo pod knezovima Frankopanima i poslije pod Venecijom. Na otočiću Košljunu franjevci od 15. stoljeća vode samostan koji su osnovali benediktinci; u njemu se čuva više od 30 000 knjiga, uključujući inkunabule i rukopise iz 15. stoljeća, te etnografska zbirka krčkih nošnji i predmeta iz 18. do 20. stoljeća. U Puntu se i danas ručno grade drvene gajete, tradicionalne ribarske brodice.',
  },
  Omišalj: {
    introHr:
      'Omišalj je mjesto na brežuljku na sjevernom vrhu otoka Krka, prvo koje posjetitelj vidi nakon prelaska Krčkoga mosta. Srednjovjekovna jezgra smještena je na klifu visokom 90 metara iznad Kvarnerskoga zaljeva, s pogledom na most. Mjesto su još prije Rimljana naselili Liburni, a pod Frankopanima i Habsburgovcima Omišalj je bio obrambena stražarnica nad Kvarnerom; njegove zidine nikada nisu probijene. U župnoj crkvi Uznesenja Marijina čuvaju se glagoljski kameni natpisi iz 12. stoljeća, među najstarijima u hrvatskom svijetu, pa mjesto svake godine održava Glagoljaški festival. Omišalj je najbliže naselje riječkoj zračnoj luci, a 1922. bio je prvi grad na jadranskim otocima s električnom uličnom rasvjetom.',
  },
  Njivice: {
    introHr:
      'Njivice su malo turističko mjesto na sjeverozapadnoj obali otoka Krka, odmah južno od Omišlja. Ime dolazi od njiva, malih obradivih parcela koje su krčke obitelji stoljećima obrađivale na blažim sjevernim padinama otoka, pa su Njivice dugo bile zaselak Omišlja. Preobrazba u ljetovalište počela je 1960-ih uređenjem zaštićene uvale. Njivički je zaljev neobično plitak za Jadran, pa je osobito siguran za djecu, a borove šume iza plaže zaštićene su i pružaju hlad između uvala. Ljeti postoje izravne brodske veze prema Cresu i Lošinju. Danas hoteli ugošćuju obitelji iz Slovenije, Austrije, Češke i Njemačke, a u starijim se obiteljima još govori krčki čakavski.',
  },
  Šilo: {
    introHr:
      'Šilo je malo ribarsko mjesto na sjeveroistočnoj obali Krka, nasuprot Crikvenici na kopnu. Za razliku od većine Jadrana, Šilo ima pješčane plaže, geološku rijetkost na hrvatskoj obali šljunka i vapnenca; plaža Soline jedna je od rijetkih pješčanih na hrvatskim otocima. Stoljećima je pod krčkim Frankopanima bilo malo ribarsko naselje i istočna veza s kopnom: brodovi su svakodnevno prevozili ljude na crikveničku tržnicu, a linija Šilo–Crikvenica neprekinuto radi od 19. stoljeća. Mala crkva svete Marije čuva mletačke freske iz 17. stoljeća. Uvala je zaštićeno područje morske trave posidonije, ključne za mriještenje jadranske ribe, a ribari još love tradicionalnim mrežama kondi i opskrbljuju crikveničke restorane.',
  },
  Sali: {
    introHr:
      'Sali su glavno mjesto Dugog otoka, uz zadarsku obalu. Zaštićena luka gleda prema Kornatima, a mjesto je stoljećima bilo središte dalmatinskog lova na tunu: svakog proljeća tuna je prolazila uz otok, a saljski su ribari s tornjeva zvanih tunare motrili jata i lovili velikim mrežama. Danas su Sali upravno središte otoka i ulaz u Park prirode Telašćicu, najveću prirodnu luku na Jadranu, dugu 8 kilometara, gdje slano jezero Mir leži četiri metra ispod razine mora, a stijene Stiviva padaju 161 metar u more. Na festivalu Saljske užance svira tovareća mužika, limena glazba koju predvodi magarac.',
  },
  Sukošan: {
    introHr:
      'Sukošan je malo primorsko mjesto južno od Zadra, čije ime čuva uspomenu na svetog Kasijana (Sveti Kasijan, stegnuto u Su-Košan), zaštitnika srednjovjekovne crkve. Sukošan je bio ljetna rezidencija zadarskih nadbiskupa: na obali je sačuvana Vila Pavle iz 15. stoljeća, zvana i Biskupski dvor. Turizam se razvio 1970-ih izgradnjom hotela na Boriku, a Marina Dalmacija, s više od 1200 vezova, danas je među najvećima u sjevernoj Dalmaciji. Duga šljunčana plaža gleda na Ugljan i Pašman, a u maslinicima rastu stabla stara više od pet stotina godina koja još daju ulje.',
  },
  Pakoštane: {
    introHr:
      'Pakoštane su primorsko mjesto između Zadra i Šibenika, između dva mora: na jednoj je strani Jadran, a na drugoj slatkovodno Vransko jezero, a dijeli ih samo 800 metara zemlje. Zato su Pakoštane jedino mjesto u Hrvatskoj gdje se ujutro može plivati u slanoj, a u podne u slatkoj vodi. Vransko jezero, najveće prirodno jezero u Hrvatskoj (30 kvadratnih kilometara), od 1999. je park prirode i dom više od 250 vrsta ptica, među njima rijetke čaplje danguba. Plaža Janice jedina je pješčana plaža između Zadra i Šibenika, a s rive se vide Kornati.',
  },
  'Sveti Filip i Jakov': {
    introHr:
      'Sveti Filip i Jakov primorsko je mjesto između Biograda na Moru i Sukošana, nazvano po apostolima Filipu i Jakovu, kojima je posvećena župna crkva iz 15. stoljeća. Mjesto gleda na otok Pašman preko uskoga kanala, jedne od najmirnijih jedriličarskih voda Dalmacije. Turističko lice dobilo je 1970-ih izgradnjom kompleksa Borik. Od 2000. se brzo širi: stalno ima oko 4500 stanovnika, a ljeti višestruko više. Kapelica svetog Roka iz 15. stoljeća od 16. je stoljeća hodočasničko mjesto za preživjele od kuge. Svake godine održava se Fišijada, festival dalmatinskog fiša, a mjesni govor je čakavski ikavski.',
  },
  'Kaštel Sućurac': {
    introHr:
      'Kaštel Sućurac najistočniji je od sedam Kaštela, utvrđenih mjesta uz zaljev između Trogira i Splita, koja su splitski plemići gradili da obrane posjede od osmanskih upada; po njima se zaljev zove Kaštelanski. Sućurac je najstariji od sedam: splitski ga je nadbiskup utvrdio 1392. kao ljetnu rezidenciju, a ime mu dolazi od svetog Jurja, stegnutog u Sućurac. Sedam sela — Sućurac, Gomilica, Kambelovac, Lukšić, Stari, Novi i Štafilić — činilo je obrambeni lanac, a od 1962. spojena su u jedan grad s oko 38 000 stanovnika. Jezgra i stara luka čuvaju izvorni renesansni plan.',
  },
  Marina: {
    introHr:
      'Marina je malo primorsko mjesto između Trogira i Šibenika, mirna jedriličarska baza u duboko uvučenom zaljevu nad kojim stoji kula Lascaris-Castelli. Kulu su 1495. sagradili trogirski plemići kao obalnu obranu i ona i danas dominira lukom; obitelj Lascaris bili su bizantski potomci koji su nakon 1453. pobjegli iz Konstantinopola i ušli u mletačko dalmatinsko plemstvo. Ime na talijanskom jednostavno znači marina, a vezovi za jahte generacijama određuju život mjesta. Zaljev s uskim ulazom i dubokim sidrištem jedan je od najzaštićenijih na dalmatinskoj obali, a Marina je i polazište za otoke Drvenik Veliki i Drvenik Mali.',
  },
  Seget: {
    introHr:
      'Seget je primorsko mjesto odmah zapadno od Trogira, nastavak grada preko male uvale; s Trogirom ga povezuje obalna šetnica duga dva kilometra. Seget je stoljećima bio trogirsko ribarsko selo, a mnogi kameni blokovi za trogirsku katedralu izvađeni su u segetskim kamenolomima; Lovrinac iznad Segeta Gornjeg radio je od 13. do 19. stoljeća. Slavni Radovanov portal katedrale iz 1240. isklesan je iz segetskoga vapnenca, a majstor Radovan potpisao je svoje djelo. Mjesto danas obuhvaća Seget Donji na obali, Seget Vranjicu i Seget Gornji u zaleđu; u Donjem stoji kula Gospin grad iz 16. stoljeća.',
  },
  Stobreč: {
    introHr:
      'Stobreč je malo primorsko mjesto istočno od Splita, izgrađeno na mjestu antičkog Epetiona. Epetion je u 4. stoljeću prije Krista bio grčka trgovačka postaja, a zatim rimski grad koji je napredovao usporedo sa Salonom. Ostaci su neobično dobro sačuvani: u selu se vide rimski zidovi i temelji kršćanske bazilike iz 5. stoljeća, među najstarijima u Hrvatskoj, a na poluotoku i dijelovi grčkih obrambenih zidina od poligonalnog kamena. Nakon pada Salone oko 614. Stobreč je ostao malo ribarsko selo. Danas je predgrađe Splita, s jednom od najpopularnijih šljunčanih plaža grada i kampom koji ljeti prima tisuće gostiju.',
  },
  Podstrana: {
    introHr:
      'Podstrana je primorsko mjesto južno od Splita, koje se gotovo sedam kilometara pruža uz podnožje Peruna i Mosora. Njezina crkva svetog Martina jedno je od najvažnijih mjesta srednjovjekovne hrvatske povijesti: ovdje je 925. održan Splitski sabor, na kojem su Tomislav, prvi okrunjeni hrvatski kralj, i crkvene vlasti uredili odnose latinskoga i slavenskog svećenstva i potvrdili samostalnost hrvatske Crkve. Planina Perun nosi ime slavenskoga boga groma: većina je poganskih imena pokrštena u 9. i 10. stoljeću, ali Perun je izbjegao preimenovanju. Hotel Le Méridien Lav najveći je s pet zvjezdica između Splita i Makarske.',
  },
  'Dugi Rat': {
    introHr:
      'Dugi Rat, doslovno dugi rt, primorsko je mjesto između Omiša i Podstrane, pojas dug sedam kilometara gdje se Mosor spušta u more. Tvornica karbida i ferolegura, otvorena 1909., desetljećima je bila najveći industrijski poslodavac srednjodalmatinske obale i najveća kemijska tvornica na jadranskoj obali Jugoslavije; njezina luka i željeznički odvojak oblikovali su mjesto. Godine 1944. saveznici su je bombardirali; većina bombi pala je u more, ali dvije su srušile radničke stanove. Plažni turizam razvijao se od 1960-ih, a tvornica je zatvorena 2005. Danas je Dugi Rat plažno mjesto s dvanaest plaža, uglavnom šljunčanih, i crkvom svetog Stjepana iz 15. stoljeća.',
  },
  Trsteno: {
    introHr:
      'Trsteno je malo primorsko selo između Dubrovnika i Stona, poznato po Arboretumu Trsteno, najstarijem renesansnom vrtu u Hrvatskoj i jednom od najstarijih botaničkih vrtova u Europi. Dubrovačka plemićka obitelj Gučetić stekla je posjed 1494. i sljedeće stoljeće uređivala renesansni vrt za užitak. Dvije goleme platane koje su posadili pred ulazom još stoje: stare su više od 500 godina i visoke preko 60 metara. Vila Gučetića sačuvana je, s renesansnim freskama u kapeli iz 16. stoljeća; Neptunova fontana iz 1736. još radi na izvornom vodovodu. Godine 2014. i 2015. vrt je poslužio kao vrt Crvene utvrde u Igri prijestolja.',
  },
  Cilipi: {
    introHr:
      'Cilipi su selo u Konavlima južno od Dubrovnika, najpoznatije folklorno selo južne Dalmacije. Nedjeljne jutarnje priredbe na trgu održavaju se svakoga ljeta bez prekida od 1967. Konavle je Dubrovačka Republika stekla 1426. i one su gotovo četiri stoljeća bile njezin najjužniji kraj. Konavoska ženska nošnja, s vezenom bijelom košuljom, tamnom suknjom i crvenom kapicom, jedna je od najfotografiranijih u Hrvatskoj; glazbu obilježavaju klape i ženski ples lindo uz lijericu, trožičano gudačko glazbalo. U ratu 1991.–1992. Konavle su teško stradale, no Cilipi su obnovljeni, a plesovi nastavljeni. U selu je i Zračna luka Dubrovnik, koju svi zovu Cilipi.',
  },
  Sutivan: {
    introHr:
      'Sutivan je malo mjesto na sjevernoj obali Brača, okrenuto Splitu preko kanala širokog samo osam kilometara, pa je najbliža bračka luka gradu. Ime je stegnuto od Sveti Ivan. Splitske i hvarske plemićke obitelji, među njima Definis i Tudisi, gradile su ovdje ljetne rezidencije; najistaknutija je utvrđena ljetna kuća Kaštel-Cerinić iz 16. stoljeća, među najbolje sačuvanim renesansnim plemićkim rezidencijama na jadranskim otocima. Barokna župna crkva svetog Ivana čuva oltarnu palu Tiepolove škole iz 18. stoljeća. Oko Sutivana prostire se glavno maslinarsko područje otoka: bračko maslinovo ulje nosi zaštićenu oznaku podrijetla, upisanu u EU 2016.',
  },
  Milna: {
    introHr:
      'Milna je mala lučka varošica na zapadnom vrhu Brača, u duboko zaštićenom zaljevu koji je od antike jedno od najpouzdanijih jedriličarskih utočišta na Jadranu. Današnje mjesto raslo je u 17. i 18. stoljeću, kad su hvarske i bračke plemićke obitelji birale zaštićenu luku; tri od šest bračkih renesansnih ljetnikovaca, Cerinić, Marčić i Slokić, nalaze se u Milni ili u blizini. Napoleonova flota sidrila je ovdje 1806. i 1807. Župnu crkvu Navještenja podigla je 1783. obitelj Cerinić; njezine orgulje najveće su otočne crkvene orgulje u Hrvatskoj. U 19. stoljeću Milna je bila matična luka bračke jedrenjačke flote.',
  },
  Postira: {
    introHr:
      'Postira su primorsko mjesto na sjevernoj obali Brača, središte ribolova na srdele. Tvornica Sardina, otvorena 1907., jedna je od najstarijih tvornica ribljih konzervi koje bez prekida rade na Mediteranu; radila je kroz oba rata i preživjela prijelaz na tržišnu ekonomiju nakon 1991. Flota još lovi srdele tradicionalnom noćnom metodom uz svjetlo, a na obali su ostaci rimskih bazena za preradu ribe. Župna crkva svetog Ivana Krstitelja čuva oltarnu palu Pietra Bianchija iz 17. stoljeća. Postira su i rodno mjesto Vladimira Nazora (1876.–1949.), velikog hrvatskog pjesnika i predsjednika ZAVNOH-a u partizansko doba; njegova je kuća danas memorijalni muzej.',
  },
  Selca: {
    introHr:
      'Selca su selo u unutrašnjosti istočnoga Brača, povijesno glavno mjesto otočnoga klesarstva. Brački vapnenac iz kamenoloma oko Selca ugrađen je u Bijelu kuću u Washingtonu, Reichstag u Berlinu i mađarski parlament, a Dioklecijanova palača velikim je dijelom sagrađena od bračkoga kamena. Klesarska tradicija seže u rimsko doba, a građevinski procvat 19. stoljeća u Beču i Budimpešti proslavio je brački kamen po Europi. Klesarska škola u obližnjim Pučišćima jedina je takva škola u Hrvatskoj. Krajem 19. stoljeća mnogi su selački majstori iselili u Čile i osnovali zajednicu u Punta Arenasu i Antofagasti, danas najveću hrvatsku iseljeničku zajednicu u Južnoj Americi.',
  },
  Škrip: {
    introHr:
      'Škrip je kameno selo u unutrašnjosti Brača i najstarije neprekidno naseljeno mjesto na otoku, s više od 2500 godina života. Ilirska gradina stajala je ovdje najkasnije od 4. stoljeća prije Krista, a Rimljani su u 1. stoljeću podigli malo naselje; rimski sarkofazi još stoje u selu, a za jedan se barem od 16. stoljeća vjeruje da je grob Dioklecijanove žene Priske, iako to nijedan natpis ne potvrđuje. Okolni kamenolomi rade bez prekida od rimskoga doba. Kula Cerinić podignuta je u 16. stoljeću protiv osmanskih upada i danas u njoj djeluje Muzej otoka Brača.',
  },
  Sućuraj: {
    introHr:
      'Sućuraj je najistočnije mjesto na otoku Hvaru, samo pet kilometara preko kanala od poluotoka Pelješca. Ime mu je stegnuto od Sveti Juraj, kao i Kaštel Sućurac. U 17. stoljeću, kad su osmanski upadi dosegli jadranske otoke, Sućuraj je bio utvrđena mletačka ispostava; tvrđava podignuta 1613., jedina na istočnoj polovici Hvara, dva je stoljeća nadzirala Neretvanski kanal i još stoji. Trajekt Sućuraj–Drvenik najkraća je otočna trajektna linija u Hrvatskoj i najkorišteniji put na istočni Hvar. Okolna obala čuva netaknute uvale Loznu, Mlasku i Češminovu, a Sućuraj je bliže granici s Bosnom i Hercegovinom nego gradu Hvaru.',
  },
  Lumbarda: {
    introHr:
      'Lumbarda je malo selo na istočnom vrhu Korčule. Pješčane plaže Vela Plaža i Bilin Žal rijetkost su na hrvatskim otocima, a sorta grožđa Grk, koja raste jedino ovdje i nigdje drugdje na svijetu, daje suho bijelo vino. Ovdje je nađena Lumbardska psefizma, kameni natpis na dorskom grčkom iz 4. stoljeća prije Krista o osnivanju ispostave grčke kolonije Isse. Natpis, danas u Arheološkom muzeju u Zagrebu, jedan je od najstarijih pisanih dokumenata s hrvatske obale; Grk je vjerojatno naslijeđe tih kolonista od prije 2400 godina. Uz slavniju korčulansku morešku u Lumbardi živi i kumpanija, ples s mačevima.',
  },
  'Plitvička Jezera': {
    introHr:
      'Plitvička jezera najposjećeniji su hrvatski nacionalni park i jedno od prirodnih čuda Europe. Šesnaest jezera spojenih vodopadima spušta se kroz šumovitu dolinu, a najveći vodopad, Veliki slap, visok je 78 metara. Jezera dijele barijere od sedre, kamena koji stvaraju mahovine, alge i bakterije i koji još raste oko jedan centimetar godišnje. Park je zaštićen 1949. godine, a od 1979. pod zaštitom je UNESCO-a. Na Plitvicama se 31. ožujka 1991. dogodio prvi oružani sukob Domovinskog rata, u kojem je poginuo policajac Josip Jović. U šumama parka žive medvjedi, vukovi i risovi.',
  },
  Korenica: {
    introHr:
      'Korenica je glavno mjesto ličke visoravni, 13 kilometara južno od ulaza u Nacionalni park Plitvička jezera. Lika je stoljećima bila granica između hrvatskoga i osmanskoga, pa habsburškoga i osmanskoga područja. Pravoslavne i katoličke crkve odražavaju miješano srpsko, hrvatsko i bunjevačko stanovništvo. U Domovinskom ratu srpske su snage okupirale Korenicu i preimenovale je u Titovu Korenicu; od 1991. do kolovoza 1995. bila je upravno središte samoproglašene Republike Srpske Krajine. Operacija Oluja oslobodila ju je u četiri dana. Lika je najrjeđe naseljena hrvatska regija, s oko pet stanovnika po kvadratnom kilometru, a u okolnim šumama žive medvjedi, risovi i vukovi.',
  },
  Plaški: {
    introHr:
      'Plaški je ličko selo južno od Karlovca i sjeverno od Plitvica, povijesno sjedište Eparhije gornjokarlovačke, jedne od starijih pravoslavnih eparhija u Hrvatskoj. Naseljavano je od 16. stoljeća u valovima srpske i bunjevačke migracije u habsburšku Vojnu krajinu. Eparhija je utemeljena 1721., a pravoslavna katedrala, sagrađena 1756., jedna je od najstarijih sačuvanih srpskih pravoslavnih katedrala u Hrvatskoj; njezin ikonostas iz 1780-ih oslikao je Teodor Kračun. U Domovinskom ratu selo je bilo okupirano od 1991. do kolovoza 1995. i većina se predratnog stanovništva iselila; danas ima manje od 1500 stanovnika, Srba i Hrvata, a katedrala je pažljivo obnovljena.',
  },
  Vrhovine: {
    introHr:
      'Vrhovine su malo ličko selo u podnožju ličkih planina i jedna od najrjeđe naseljenih općina u Hrvatskoj, s manje od pet stanovnika po kvadratnom kilometru. Okružuju ih krške visoravni i duboke bukove šume, u kojima živi najgušća populacija smeđih medvjeda u Hrvatskoj, a stabilno opstaju i ris i vuk. U Domovinskom ratu selo je bilo okupirano, a crkva svetog Dimitrija iz 19. stoljeća razorena je i djelomično obnovljena. Stanovništvo je s oko tri tisuće prije rata palo na manje od 1500. Kroz Vrhovine prolazi pruga Zagreb–Split iz 1925., jedna od najslikovitijih planinskih pruga u zemlji.',
  },
  Skrad: {
    introHr:
      'Skrad je šumsko selo u Gorskom kotaru, između Karlovca i Rijeke. Odmah izvan sela nalaze se kanjon Vražji prolaz, 800 metara uskoga kamenog klanca, i Zeleni vir, gdje podzemna rijeka izlazi na površinu vodopadom od 70 metara. Skrad je nastao kao šumarsko i željezničko naselje na pruzi Zagreb–Rijeka, otvorenoj 1873.; drvna industrija zapošljavala je većinu mještana. Planinarsku stazu kroz Vražji prolaz otvorili su hrvatski alpinisti 1928. Ime Skrad na starom slavenskom znači skriven ili zaklonjen. Gorski kotar dobiva dva do tri metra snijega na zimu, a s više od 80 posto šumskoga pokrova jedan je od najšumovitijih krajeva Europe.',
  },
  Vrbovsko: {
    introHr:
      'Vrbovsko je mali grad na istočnom rubu Gorskoga kotara, na rijeci Kupi i na pruzi Zagreb–Rijeka, otvorenoj 1873. Grad je izrastao oko te pruge i više od stoljeća bio središte šumarstva; okolne šume sadrže najveće sastojine smreke u Hrvatskoj. Krajem 19. i početkom 20. stoljeća mnogi su Vrbovščani iselili u Pennsylvaniju i Ohio, pa grad ima neobično jake hrvatsko-američke obiteljske veze: ista pruga koja je donosila robu odvozila je tisuće goranskih seljaka u Rijeku i Trst. U Domovinskom ratu Vrbovsko je bilo na prvoj crti i djelomično okupirano 1991.–1995.; obnova je vratila staru gradsku jezgru.',
  },
  Čabar: {
    introHr:
      'Čabar je najzapadniji grad u Hrvatskoj, u najdubljim šumama Gorskoga kotara. Osnovala ga je 1641. obitelj Zrinski kao industrijsko naselje, s talionicama željeza i pilanama na vodenu snagu rijeke Čabranke; dvorac Petrov grad dovršen je 1651. i jedan je od rijetkih sačuvanih dvoraca Zrinskih u Hrvatskoj. Nakon zrinsko-frankopanske urote protiv Habsburgovaca 1670. posjed je prešao u druge ruke. Čabar je kroz habsburško, jugoslavensko i hrvatsko razdoblje ostao šumarski i mali industrijski grad. Čabranka šesnaest kilometara čini hrvatsko-slovensku granicu, u okolnim šumama rastu najviše jele u Hrvatskoj, a mjesni govor miješa slovenske i kajkavske crte.',
  },
  Mrkopalj: {
    introHr:
      'Mrkopalj je malo planinsko selo u Gorskom kotaru, na 850 metara nadmorske visine, najviše hrvatsko selo sa stalnom skijaškom žičarom. Visina i pouzdan snijeg, prosječno 2,5 metra godišnje, učinili su ga regionalnim skijaškim središtem od 1930-ih. Vučnica duga 1,5 kilometra otvorena je 1965. i jedna je od najstarijih skijaških žičara u Hrvatskoj. Kad se zimski turizam preselio u slovenske i austrijske Alpe, skijalište je oslabilo, a stalno stanovništvo palo je s oko 700 na manje od 200. Okolne bukove šume zaštićene su kao rubno područje Nacionalnog parka Risnjak, nazvanog po risu.',
  },
  Privlaka: {
    introHr:
      'Privlaka je malo primorsko selo na samom sjevernom rubu zadarskoga kraja, blizu Nina. Ime znači mjesto privlačenja ili prevlaku, vjerojatno po uskoj prevlaci koja obalu privlači prema Ninu. Solane su kraj sela radile stoljećima i zatvorene su početkom 20. stoljeća. S obližnjim ninskim solanama Privlaka pripada najdulje neprekidno djelatnom području proizvodnje soli na Mediteranu, s više od 1500 godina zabilježenog vađenja soli. Pješčane plaže, rijetke na hrvatskoj obali, učinile su selo mirnim obiteljskim ljetovalištem: Sabunike su jedna od najduljih pješčanih plaža sjeverne Dalmacije. Privlaka je jednom cestom povezana s otokom Virom.',
  },
  Vir: {
    introHr:
      'Vir je otok uz obalu sjeverne Dalmacije, s Privlakom povezan jednim mostom. Stoljećima je bio praktički nenaseljen: služio je kao pašnjak za privlačke ovce, a zadarski plemići sagradili su u 15. stoljeću utvrdu Kaštelinu. Sve se promijenilo 1976., kad je sagrađen most i ublaženi zakoni o vlasništvu zemlje: do 2010. na Viru je sagrađeno više od 30 000 kuća, pa je postao najgušće izgrađeni hrvatski otok, iako stalno ima manje od 3500 stanovnika. Ta se pojava proučava kao primjer neregulirane gradnje i najekstremniji slučaj hrvatske apartmanizacije. Uvale s plitkom vodom ipak ostaju privlačne.',
  },
  'Sveti Lovreč': {
    introHr:
      'Sveti Lovreč je mjesto na brežuljku u središnjoj Istri, na pola puta između Poreča i Rovinja. Mletačke zidine iz 13. i 14. stoljeća još su uvelike netaknute. Mjesto je bilo sjedište mletačkog kapetana Pazenatika, središnjoistarskoga okruga pod izravnom mletačkom upravom, pa je cijeli raspored iz mletačkoga doba, s vratima, trgom, kapetanovom rezidencijom i crkvom, sačuvan gotovo u cijelosti. Romanička župna crkva iz 11. stoljeća čuva freske iz 15. stoljeća u južnoj kapeli. Danas mjesto ima manje od 800 stalnih stanovnika, ali je njegova povijesna cjelina među najfinijima u Istri. Okolna brda daju neke od najcjenjenijih istarskih malvazija.',
  },
  Bilje: {
    introHr:
      'Bilje je baranjsko selo sjeverno od Osijeka, najpoznatije kao ulaz u Park prirode Kopački rit, nastao na sutoku Drave i Dunava; rit je ramsarsko područje s više od 230 vrsta ptica, a zbog poplavnih šuma vrba i topola zovu ga europskom Amazonom. Barokni dvorac Eugena Savojskog u Bilju sagrađen je oko 1707. nakon što je car Leopold I. princu darovao posjed Belje; danas je u njemu posjetiteljski centar parka. Četvrtina stanovnika su Mađari, a mađarski je službeni jezik uz hrvatski. U Domovinskom ratu Baranja je bila okupirana od 1991., a mirno je reintegrirana pod misijom UNTAES-a 1998.',
  },
  Antunovac: {
    introHr:
      'Antunovac je mala slavonska općina južno od Osijeka, poljoprivredno naselje na ravnoj panonskoj nizini. Ime nosi po svetom Antunu Padovanskom, čiji se blagdan slavi 13. lipnja. Naseljen je u 18. stoljeću, nakon protjerivanja Osmanlija, a gospodarstvo je bilo vezano za velika vlastelinstva i uzgoj žita na plodnoj crnici. U Domovinskom ratu Antunovac je ležao tik iza osječke crte obrane i opetovano je granatiran s položaja JNA i srpskih paravojnih snaga prema Tenji i Erdutu. Stanovništvo je početkom 1990-ih naglo palo, a nakon Erdutskog sporazuma 1995. oporavilo se povratkom. Danas općina ima oko 3500 stanovnika.',
  },
  Erdut: {
    introHr:
      'Erdut je selo na samom istoku Hrvatske, u Osječko-baranjskoj županiji, na visokoj obali Dunava koji ovdje čini granicu sa Srbijom. Na strmoj lesnoj obali stoji Erdutska kula, jedna od rijetkih sačuvanih srednjovjekovnih obrambenih kula u Slavoniji. Od 16. do kraja 17. stoljeća selo je bilo pod osmanskom vlašću, a zatim je pripalo Habsburgovcima. Danas je Erdut poznat po Erdutskim vinogradima, jednima od najvećih povezanih vinograda u Hrvatskoj, gdje se proizvode graševina i traminac. U hrvatskoj povijesti selo ima posebno mjesto: 12. studenoga 1995. ovdje je potpisan Erdutski sporazum, koji je otvorio put mirnoj reintegraciji istočne Slavonije, Baranje i zapadnog Srijema u Hrvatsku do siječnja 1998.',
  },
  Dalj: {
    introHr:
      'Dalj je mjesto na obali Dunava u općini Erdut. Stoji na mjestu rimskog naselja i utvrde Teutoburgium, dijela dunavske granice Rimskog Carstva. Od 18. stoljeća srpski pravoslavni patrijarsi iz Karlovaca imali su u Dalju ljetnu rezidenciju, pa je mjesto postalo važno srpsko kulturno središte u Habsburškoj Monarhiji. Godine 1879. ovdje je rođen fizičar i astronom Milutin Milanković, autor teorije o ledenim dobima. Na početku Domovinskog rata, 1. kolovoza 1991., u napadu na policijsku postaju ubijeno je više od dvadeset hrvatskih policajaca i civila. Mjesto je mirno vraćeno u Hrvatsku 1997. i 1998., a većina stanovnika i danas su Srbi.',
  },
  Drenovci: {
    introHr:
      'Drenovci su posavsko selo u Vukovarsko-srijemskoj županiji, u ravnici između rijeke Save i hrastove šume Spačve, najveće povezane šume hrasta lužnjaka u Europi. Sava ovdje čini granicu s Bosnom i Hercegovinom. Selo su naselili Šokci, katolički Hrvati čiji su se govor i narodne nošnje očuvali kroz osmansko i habsburško doba. Slavonski hrast iz Spačve bio je u 19. i početkom 20. stoljeća cijenjen za brodogradnju, bačve i parkete te se izvozio po cijeloj Europi. Općina Drenovci obuhvaća i sela Račinovci, Đurići, Posavski Podgajci i Rajevo Selo, a u kraju je i danas živ bećarac, pjesma upisana na UNESCO-ov popis nematerijalne baštine.',
  },
  'Babina Greda': {
    introHr:
      'Babina Greda je veliko slavonsko selo u Vukovarsko-srijemskoj županiji, između Slavonskog Broda i Vinkovaca. Po površini je jedno od najvećih sela u Hrvatskoj: njegov katastar obuhvaća više od 110 četvornih kilometara. Selo su naselili Šokci i razvijalo se unutar habsburške Vojne krajine, a nakon njezina ukidanja 1881. postalo je dio civilne Slavonije. Babina Greda poznata je po sačuvanim šokačkim nošnjama, osobito ženskoj rubini sa zlatnim vezom, po svadbenim običajima i bećarcu koji je na UNESCO-ovu popisu. Ovdje je 1885. rođena Mara Matočec, seljačka aktivistica i jedna od prvih Hrvatica u političkom organiziranju. Središte sela nadvisuje župna crkva svetog Marka iz 19. stoljeća.',
  },
  Andrijaševci: {
    introHr:
      'Andrijaševci su općina u Vukovarsko-srijemskoj županiji, odmah zapadno od Vinkovaca, koju čine dva susjedna sela, Andrijaševci i Rokovci. Sela su tako blizu da glavna ulica prelazi iz jednoga u drugo bez ikakva praznog prostora između njih, pa zapravo tvore jedno naselje uz glavnu cestu. Kraj leži u nizini rijeke Bosut, pritoke Save, u krajoliku kojim su nekad vladale hrastove šume i polja žitarica. Područje je pripadalo habsburškoj Vojnoj krajini, a nakon njezina ukidanja 1881. razvilo se kao poljoprivredna zajednica. Gospodarstvo je i danas uglavnom poljoprivredno: žito, kukuruz i stočarstvo. U Domovinskom ratu kraj se nalazio blizu bojišnice oko Vinkovaca te je stradao od granatiranja.',
  },
  Tovarnik: {
    introHr:
      'Tovarnik je istočnoslavonsko selo u Vukovarsko-srijemskoj županiji, u zapadnom Srijemu, izravno na granici sa Srbijom, na povijesnoj cesti i pruzi između Beča i Beograda. Ovdje je 1873. rođen Antun Gustav Matoš, pjesnik i esejist koji je oblikovao modernu hrvatsku književnu kritiku i jedan od najutjecajnijih hrvatskih pisaca početka 20. stoljeća. Njegova rodna kuća danas je spomen-muzej. U rujnu 1991. Tovarnik je bio mjesto jedne od prvih velikih bitaka Domovinskog rata: hrvatski branitelji kratko su se držali, a nakon pada sela ubijeni su i preostali hrvatski civili, među njima i starije osobe. Selo je bilo pod okupacijom do mirne reintegracije 1997. i 1998. godine.',
  },
  Lovas: {
    introHr:
      'Lovas je malo hrvatsko selo u zapadnom Srijemu, blizu granice sa Srbijom. Leži na lesnim brežuljcima pogodnim za vinograde, a kraj pripada srijemskoj vinskoj podregiji. Selo je poznato po jednom od najbolje dokumentiranih zločina Domovinskog rata. Nakon što su srpske snage u jesen 1991. preuzele nadzor nad područjem, hrvatski civili bili su pokupljeni i 18. listopada 1991. natjerani na minsko polje; ubijeno je dvadeset dvoje civila, a tijekom 1991. više od pedeset stanovnika Lovasa. Slučaj je postao jedan od temeljnih procesa za ratne zločine, s osudama pripadnika paravojne skupine Dušan Silni. Lovas je mirno vraćen u Hrvatsku 1997. i 1998.',
  },
  Bogdanovci: {
    introHr:
      'Bogdanovci su malo hrvatsko selo u Vukovarsko-srijemskoj županiji, odmah zapadno od Vukovara. Od kolovoza 1991. bili su jedno od rijetkih okolnih sela koja su organizirala oružani otpor zajedno s braniteljima Vukovara i opkoljenom gradu držala mali zapadni prolaz. Oko dvjesto branitelja izdržalo je tri mjeseca pod stalnim topničkim i tenkovskim napadima, dok selo nije palo 10. studenoga 1991., osam dana prije samog Vukovara. Ubijeno je više od trideset branitelja i mnogo civila, a više od 80 posto kuća bilo je uništeno. Nakon mirne reintegracije 1997. i 1998. selo je strpljivo obnovljeno i danas čuva nekoliko spomenika te memorijalno groblje svojih branitelja.',
  },
  Punitovci: {
    introHr:
      'Punitovci su mala općina u Osječko-baranjskoj županiji, jugozapadno od Đakova, poznata po brojnoj slovačkoj manjini. Njezini su preci slovački doseljenici koje su u drugoj polovici 19. stoljeća na svoja imanja doveli slavonski veleposjednici, dijelom i uprava đakovačkog imanja biskupa Josipa Jurja Strossmayera. Punitovci, Josipovac Punitovački, Jurjevac Punitovački i Krndija postali su kompaktna slovačka sela, a zajednica je kroz 20. stoljeće očuvala jezik, vjeru, školstvo i narodne običaje. Slovački se u općini službeno upotrebljava uz hrvatski, i na natpisima i u osnovnoj školi, a u nekim naseljima Slovaci čine više od trećine stanovnika. Općina održava slovački folklorni festival i društva Matice slovačke.',
  },
  Strizivojna: {
    introHr:
      'Strizivojna je slavonska općina u Osječko-baranjskoj županiji, između Đakova i Slavonskog Broda, na povijesnim posjedima Đakovačke biskupije. U 19. i početkom 20. stoljeća imućna seljačka domaćinstva gradila su kuće s bogato rezbarenim drvenim vratima i ukrašenim pročeljima, koja su s vremenom prepoznata kao osebujna regionalna narodna arhitektura. Po tim je drvenim portalima Strizivojna danas poznata u cijeloj Hrvatskoj, a Festival drvenih portala nastoji tu tradiciju sačuvati i proslaviti. Jedan je portal seoskom rezbaru mogao oduzeti i nekoliko mjeseci rada, a motivi loze, sunca, ptice i rozete birani su kako bi blagoslovili dom. Gospodarstvo spaja ratarstvo, stočarstvo i seoski turizam.',
  },
  'Brodski Stupnik': {
    introHr:
      'Brodski Stupnik je slavonska općina u Brodsko-posavskoj županiji, odmah zapadno od Slavonskog Broda, uz povijesnu cestu prema Novoj Gradiški. Naselja su smještena između južnih padina Dilja i savske ravnice, pa se gospodarstvo od davnina dijelilo na dvoje: žitarice u nizini i vinogradi na obroncima. Kraj se razvijao unutar habsburške Vojne krajine, kao dio područja Brodske pukovnije, a nakon ukidanja Krajine 1881. ostao je poljoprivredni. Općina obuhvaća i sela Stupnički Kuti, Lovčić i Krajačići. Vino s Dilja dugo je bilo važno za mjesto, a i danas ovdje radi nekoliko obiteljskih vinarija. Graševina i frankovka s lesno-glinenih padina Dilja imaju izrazito drugačiji karakter od poznatijih iločkih vina.',
  },
  'Velika Kopanica': {
    introHr:
      'Velika Kopanica je slavonska općina u Brodsko-posavskoj županiji, u savskoj ravnici istočno od Slavonskog Broda. Samo ime Kopanica podsjeća na kanale i prokope koji su nekad presijecali ovaj poplavni posavski krajolik. Selo je naseljeno u habsburško doba kao šokačko katoličko naselje unutar Brodske pukovnije Vojne krajine, a nakon ukidanja Krajine 1881. postalo je dio civilne Slavonije. Šokačko je stanovništvo sačuvalo prepoznatljivu narodnu nošnju, pjesme i bećarac te posavske poljoprivredne običaje. Posavska sela poput Velike Kopanice nekad su gradila kuće na niskim zemljanim humcima kako bi izbjegla proljetne poplave Save. Općina danas obuhvaća i sela Mala Kopanica, Beravci, Divoševci i Kupina.',
  },
  Garčin: {
    introHr:
      'Garčin je slavonska općina u Brodsko-posavskoj županiji, u savskoj ravnici istočno od Slavonskog Broda, uz povijesnu cestu prema Vinkovcima. Riječ je o poljoprivrednoj zajednici od nekoliko sela: uz Garčin, općini pripadaju Klokočevik, Sapci, Selna, Trnjani i Zadubravlje. Kraj se razvijao unutar habsburške Vojne krajine kao dio Brodske pukovnije, a njegova su sela izvorno bila krajiške vojne postaje: svako je domaćinstvo moralo dati vojnika pukovniji, sve dok sustav nije ukinut 1881. Nakon toga područje je nastavilo živjeti kao obradiva zemlja. Stanovništvo je povijesno bilo šokačko i katoličko, a gospodarstvo i danas počiva na žitu, kukuruzu i stočarstvu, tipičnim za posavsku poljoprivredu.',
  },
  Sibinj: {
    introHr:
      'Sibinj je općina u Brodsko-posavskoj županiji, odmah sjeverozapadno od Slavonskog Broda, na mjestu gdje ravna savska nizina prelazi u južno podnožje Dilja. Ta dvostruka priroda kraja oblikovala je i gospodarstvo: u nizini se stoljećima uzgajaju žitarice, a na obroncima iznad sela vinogradi i voćnjaci. Dilj se uzdiže na samo oko 460 metara, ali u ravnoj Slavoniji čini pravu klimatsku granicu, pa vinova loza dobro raste na njegovim toplijim južnim padinama. Sibinj se razvijao unutar Brodske pukovnije habsburške Vojne krajine, a nakon njezina ukidanja 1881. nastavio je kao poljoprivredna zajednica. Općina obuhvaća i sela Grgurevići, Slobodnica, Bartolovci, Ravan i Brčino.',
  },
  Vrbovec: {
    introHr:
      'Vrbovec je grad u Zagrebačkoj županiji, oko 30 kilometara istočno od Zagreba, na cesti prema Bjelovaru. Spominje se u dokumentima iz 13. stoljeća, bio je malo trgovište Zagrebačke biskupije, a status grada dobio je 1873. Njegov moderni karakter oblikovan je nakon Drugog svjetskog rata: mesna industrija osnovana 1957. izrasla je u jedno od najvećih prehrambenih poduzeća Jugoslavije, a danas je PIK Vrbovec najveća hrvatska tvornica za preradu mesa, poznata po salamama, sušenom mesu i paštetama. Grad ima i malu srednjovjekovnu jezgru s baroknom župnom crkvom, a svake godine održava festival tradicionalne hrane Kaj su jeli naši stari, nazvan na lokalnom kajkavskom narječju.',
  },
  Bedekovčina: {
    introHr:
      'Bedekovčina je mali grad u Krapinsko-zagorskoj županiji, u središnjem Hrvatskom zagorju između Zaboka i Krapine. Ime je dobila po plemićkoj obitelji Bedeković, zagorskim plemićima čije je imanje ovdje stajalo od 17. stoljeća. Kao i veći dio Zagorja, kraj su pod Habsburgovcima oblikovali sitno plemstvo i seljačko gospodarstvo, a u 19. i 20. stoljeću razvila se industrija gline koja je Zagrebu isporučivala ciglu i crijep. Kad su glinokopi iscrpljeni, napunili su se podzemnom vodom i nastala su Bedekovčanska jezera, niz malih jezera koja su danas mjesto za rekreaciju i promatranje ptica. U okolnim selima sačuvano je nekoliko baroknih dvoraca.',
  },
  Brdovec: {
    introHr:
      'Brdovec je općina u Zagrebačkoj županiji, na desnoj obali rijeke Sutle koja čini granicu sa Slovenijom, odmah zapadno od Zaprešića. Područje je pripadalo srednjovjekovnom susedgradsko-stubičkom vlastelinstvu, koje su u 16. i 17. stoljeću držale grane obitelji Zrinski. Upravo iz sela ovoga kraja Seljačka buna Matije Gupca 1573. godine crpila je velik dio svoje snage. Sutla je postala granica između habsburške Hrvatske i štajerskih, slovenskih zemalja te je i danas državna granica. Općina obuhvaća i Savski Marof, nazvan po habsburškom marofu, gospodarskom dvoru. Nekad središte sitnog seljačkog gospodarstva, Brdovec je danas uglavnom naselje ljudi koji rade u Zagrebu i Zaprešiću.',
  },
  Jakovlje: {
    introHr:
      'Jakovlje je mala općina u Zagrebačkoj županiji, na južnom rubu Hrvatskog zagorja. Selom dominira dvorac Jakovlje, izgrađen u 17. stoljeću kao utvrđeni plemićki dvor i pregrađen u baroknom stilu u 18. stoljeću. Kroz stoljeća je mijenjao vlasnike među hrvatskim plemićkim obiteljima, a u jugoslavensko doba bio je nacionaliziran i s parkom je od tada služio raznim ustanovama. Samo selo raslo je kao mala kajkavska zajednica u podnožju južnih zagorskih obronaka, a općina obuhvaća i sela Igrišće, Kraljev Vrh i Pasansku Goricu. Hrvatsko zagorje ima najveću gustoću sačuvanih plemićkih dvoraca u Hrvatskoj, a Jakovlje je jedan od najjužnijih među njima.',
  },
  'Veliko Trgovišće': {
    introHr:
      'Veliko Trgovišće je zagorska općina u Krapinsko-zagorskoj županiji, zapadno od Zaboka. Poznato je prije svega kao rodno mjesto Franje Tuđmana, koji je ovdje rođen 14. svibnja 1922. Tuđman je u Drugom svjetskom ratu bio partizan, kasnije povjesničar i general, a zbog političkih stavova dvaput je bio zatvaran u Jugoslaviji. Godine 1989. osnovao je Hrvatsku demokratsku zajednicu, poveo Hrvatsku u neovisnost 1991. i tri puta bio izabran za predsjednika; umro je na dužnosti 10. prosinca 1999. Njegova rodna kuća sačuvana je kao Spomen dom Franje Tuđmana, a članovi obitelji počivaju na mjesnom groblju. Općina obuhvaća i sela Družilovec, Jezero Klanječko i Vižovlje.',
  },
  Tuhelj: {
    introHr:
      'Tuhelj je zagorska općina u Krapinsko-zagorskoj županiji, odmah istočno od slovenske granice i gradića Klanjca, blizu rijeke Sutle. Poznata je prije svega po Termama Tuhelj, jednom od najvećih hrvatskih toplica s prostranim unutarnjim i vanjskim bazenima. Termalni izvori ovdje se koriste od 19. stoljeća, kad su oko tople sumporne vode podignute male kupelji; moderno lječilište razvilo se u drugoj polovici 20. stoljeća, a nakon 2000. prošireno je u veliki hotelski i vodeni kompleks. Općina obuhvaća i selo Tuheljske Toplice oko samog lječilišta te nekoliko kajkavskih naselja i dijeli snažan kajkavski identitet klanječkog kraja.',
  },
  'Krapinske Toplice': {
    introHr:
      'Krapinske Toplice su zagorska općina u Krapinsko-zagorskoj županiji, južno od Krapine, izrasla oko termalnih mineralnih izvora koji se koriste još od rimskoga doba, kad su Rimljani naseljavali Panoniju. Izvori su ponovno otkriveni i razvijeni kao lječilište u 19. stoljeću pod Habsburgovcima, a kasnije su izgrađeni Aquae Vivae i druge kupališne građevine koje koriste toplu sumporno-kalcijevu vodu temperature do oko 41 stupnja. U modernoj Hrvatskoj mjesto spaja odmor u toplicama s medicinskom rehabilitacijom: specijalna bolnica Magdalena, osnovana 1996., postala je vodeće hrvatsko središte za kardiovaskularno liječenje i intervencijsku kardiologiju. Općina, u kojoj se govori kajkavski, obuhvaća i sela Klokovec, Lovrečan i Selno.',
  },
  'Stubičke Toplice': {
    introHr:
      'Stubičke Toplice su mala općina u Krapinsko-zagorskoj županiji, na sjevernom podnožju Medvednice, planine koja se uzdiže iznad Zagreba. Mjesto je izraslo oko termalnih izvora koji se u kupanju koriste najmanje od 18. stoljeća, kad ih je kao lječilište razvijala Zagrebačka biskupija; s razvojem kupališta povezuje se biskup Maksimilijan Vrhovac (1752.-1827.). Povijesne Biskupske kupelji dale su ime središnjoj lječilišnoj zgradi. Termalna voda izvire na oko 43 stupnja, bogata je mineralima i koristi se za liječenje reumatskih bolesti i bolesti mišića i kostiju. Danas mjesto spaja toplice s planinarenjem, jer odavde vode staze na Medvednicu, pa je omiljeno izletište Zagrepčana. Općina pripada području Donje Stubice.',
  },
  'Hum na Sutli': {
    introHr:
      'Hum na Sutli je zagorska općina u Krapinsko-zagorskoj županiji, na rijeci Sutli koja ovdje čini granicu sa Slovenijom. Mjestom dominira tvornica stakla Vetropack Straža, jedan od najvećih proizvođača ambalažnog stakla u jugoistočnoj Europi. Proizvodnja stakla u ovom kraju seže u 19. stoljeće, kad su bogate šume i kvarcni pijesak s obje strane Sutle omogućili osnivanje staklana. Tvornica Straža postala je jedan od vodećih proizvođača ambalažnog stakla u Jugoslaviji, a nakon njezina raspada hrvatski dio pogona na strani Huma na Sutli postao je Vetropack Straža, dio švicarske grupe Vetropack. Općina je izrazito industrijska, a tvornica je glavni poslodavac u kraju.',
  },
  Lobor: {
    introHr:
      'Lobor je zagorska općina u Krapinsko-zagorskoj županiji, iznad Zlatara, poznata po hodočasničkoj crkvi Majke Božje Gorske, jednom od najstarijih marijanskih svetišta u Hrvatskom zagorju, smještenoj na malom šumovitom brijegu iznad sela. Arheološka istraživanja pokazala su da se to mjesto u vjerske svrhe neprekidno koristi od ranoga srednjeg vijeka: pronađeni su temelji drvene crkve iz 9. i 10. stoljeća te ranosrednjovjekovno groblje. Današnja je crkva građena stoljećima na istom brijegu i čuva gotičke i barokne elemente. Stoljećima je važno hodočasničko odredište, osobito 8. rujna, na blagdan Rođenja Marijina, s vjernicima iz cijele sjeverne Hrvatske. Općina obuhvaća i sela Petrova Gora i Šipki.',
  },
  Mače: {
    introHr:
      'Mače je mala zagorska općina u Krapinsko-zagorskoj županiji, u šumovitim brežuljcima između Zlatara i Krapine. Riječ je o kajkavskoj zajednici malih sela na brdovitom poljoprivrednom zemljištu, s baroknom župnom crkvom svetog Jeronima i krajolikom tipičnim za središnje Zagorje. Kraj se razvijao kao mala brdska poljoprivredna zajednica na posjedima Zagrebačke biskupije i u habsburškom upravnom sustavu, a kao i veći dio Zagorja bio je obilježen sitnoplemićkim posjedima i seljačkim gospodarstvom na terasastim padinama. Zaštitnik župe, sveti Jeronim, rođen je oko 347. godine blizu današnje hrvatsko-slovenske granice i preveo je Bibliju na latinski. Općina obuhvaća sela Brdo Mačko, Frkuljevec Peršaveški i Pece.',
  },
  Mihovljan: {
    introHr:
      'Mihovljan je mala zagorska općina u Krapinsko-zagorskoj županiji, zapadno od Krapine, na padinama koje se spuštaju prema Sutli i slovenskoj granici. Ime je dobio po župnoj crkvi svetog Mihovila, oko koje se razvio kao mala katolička kajkavska župa na posjedima Zagrebačke biskupije. Kao i veći dio zapadnoga Zagorja, kraj su pod habsburškom vlašću obilježavali seljačko gospodarstvo, mali vinogradi na južnim padinama i skromni plemićki posjedi. Općina danas obuhvaća nekoliko malih sela nanizanih uz cestu koja od Krapine vodi prema zapadu, a poljoprivreda spaja obradu malih parcela s vinogradima na obroncima.',
  },
  Prelog: {
    introHr:
      'Prelog je mali grad u Međimurskoj županiji, drugi po veličini u Međimurju nakon Čakovca, smješten u južnoj nizini uz rijeku Dravu, blizu akumulacijskih jezera dravskih hidroelektrana. Središte je Donjeg Međimurja, poljoprivredno i sajamsko mjesto s prepoznatljivom baroknom župnom crkvom svetog Jakova iz 18. stoljeća. Prelog se spominje u srednjovjekovnim dokumentima i razvijao se kao trgovište uz Dravu. Kao i cijelo Međimurje, stoljećima je pripadao Ugarskom Kraljevstvu, odnosno Zaladskoj županiji, pod Zrinskima, a kasnije pod mađarskom upravom sve do 1918., kad je Međimurje ušlo u novu južnoslavensku državu. Status grada dobio je 1997. i danas je upravno središte Donjeg Međimurja.',
  },
  'Mursko Središće': {
    introHr:
      'Mursko Središće je mali grad u Međimurskoj županiji na rijeci Muri, koja ovdje čini granicu između Hrvatske i Slovenije. Ime mu otprilike znači središnje mjesto na Muri i odražava položaj na riječnom prijelazu u Sloveniju, zbog čega je mjesto povijesno služilo kao carinska i prometna postaja. Sredinom 20. stoljeća u okolnim poljima kopao se lignit; rudnik je radio do 1972., a nakon zatvaranja gospodarstvo se okrenulo maloj industriji, poljoprivredi i prekograničnoj trgovini. Mura je ovdje regulirana rijeka s hidroelektranom u blizini. Status grada Mursko Središće dobilo je 1997., a murska nizina dio je UNESCO-ova prekograničnog rezervata biosfere Mura-Drava-Dunav.',
  },
  Štrigova: {
    introHr:
      'Štrigova je mala općina u Međimurskoj županiji, u vinorodnim brežuljcima Gornjeg Međimurja, blizu slovenske granice, i središte je međimurske vinske regije. Poznata je po bijelim vinima, a osobito po pušipelu, kako se u Međimurju naziva sorta furmint, koja se smatra prepoznatljivom sortom kraja. Štrigova ima dugu rimsku prošlost: pronađeni su znatni ostaci iz rimskoga doba koji upućuju na položaj mjesta na cesti između Poetovija, današnjeg Ptuja, i dravskih prijelaza. Barokna župna crkva svetog Jeronima s oslikanom unutrašnjosti jedan je od najvažnijih baroknih spomenika Međimurja; freske je 1740-ih naslikao pavlin Ivan Krstitelj Ranger, najplodniji barokni slikar fresaka u sjevernoj Hrvatskoj.',
  },
  'Sveti Martin na Muri': {
    introHr:
      'Sveti Martin na Muri je mala općina u Međimurskoj županiji, na krajnjem sjeveru Hrvatske, na rijeci Muri koja čini granicu sa Slovenijom; ovdje se nalazi najsjevernija točka zemlje. Mjesto je dobilo ime po srednjovjekovnoj župnoj crkvi svetog Martina iz Toursa, u blizini prijelaza preko Mure u današnju Sloveniju. Kao i cijelo Međimurje, općina je do 1918. pripadala mađarskoj Zaladskoj županiji. U modernoj Hrvatskoj oko termalnih mineralnih izvora razvijene su Terme Sveti Martin, pa je selo postalo odredište za odmor u toplicama i biciklizam uz Muru. Šire je područje dio UNESCO-ova prekograničnog rezervata biosfere Mura-Drava-Dunav.',
  },
  'Donji Kraljevec': {
    introHr:
      'Donji Kraljevec je općina u Međimurskoj županiji, u nizinskoj, dravskoj istočnoj polovici Međimurja. U svijetu je poznat kao rodno mjesto Rudolfa Steinera, austrijskog filozofa koji je utemeljio antropozofiju, waldorfsku pedagogiju i biodinamičku poljoprivredu. Steiner je rođen 25. veljače 1861. u tadašnjem selu mađarske Zaladske županije, na željezničkoj pruzi kroz Međimurje, gdje je njegov otac radio kao željeznički službenik. Steinerov antropozofski pokret, waldorfske škole, biodinamičko gospodarstvo i Goetheanum u Švicarskoj stekli su u 20. stoljeću svjetski utjecaj. Njegova rodna kuća u Donjem Kraljevcu obnovljena je posljednjih desetljeća kao Centar Rudolf Steiner. Kao i cijelo Međimurje, mjesto je do 1918. pripadalo Zaladskoj županiji.',
  },
  Goričan: {
    introHr:
      'Goričan je mala općina na istočnom rubu Međimurske županije, na mađarskoj granici, u murskoj nizini. Najpoznatija je kao mjesto jednog od glavnih hrvatskih cestovnih prijelaza u Mađarsku, Goričan-Letenye, na kojem se hrvatska autocesta A4 spaja s mađarskom autocestom M7. Do 1918. Goričan je, kao i cijelo Međimurje, pripadao mađarskoj Zaladskoj županiji, a od 1920. mađarska granica prolazi odmah istočno od sela. U samostalnoj Hrvatskoj prijelaz Goričan-Letenye postao je jedna od glavnih cestovnih veza s Mađarskom, dovršetkom autoceste A4 pretvoren je u autocestovni prijelaz, a ulaskom Hrvatske u schengenski prostor 1. siječnja 2023. postao je unutarnja granica Europske unije.',
  },
  Belica: {
    introHr:
      'Belica je mala općina u Međimurskoj županiji, u nizini južno od Čakovca, između rijeka Mure i Drave. Riječ je o poljoprivrednoj zajednici u srcu međimurske ravnice, gdje se na bogatom panonskom tlu intenzivno uzgajaju žito, kukuruz i povrće. Do 1918. Belica je bila selo mađarske Zaladske županije, a otada pripada Hrvatskoj. Općina pripada širem Donjem Međimurju, kojemu je središte Prelog. Međimurje je najmanja, a ujedno jedna od najgušće naseljenih županija u Hrvatskoj, jer je plodna zemlja između Mure i Drave više od tisuću godina hranila gusto naseljena sela.',
  },
  Šenkovec: {
    introHr:
      'Šenkovec je mala općina u Međimurskoj županiji, odmah zapadno od Čakovca, povijesno poznata kao mjesto pokopa obitelji Zrinski, koja je Međimurje držala kao obiteljski posjed gotovo dva stoljeća. Pavlinski samostan i crkva svete Jelene bili su od 16. stoljeća, kad su Zrinski stekli Međimurje, njihova obiteljska crkva i grobnica. S tim su mjestom povezani Nikola IV. Zrinski, koji je 1566. poginuo braneći Siget od Osmanlija, i Nikola VII. Zrinski. Pogubljenje Petra Zrinskog u Bečkom Novom Mjestu 30. travnja 1671. zbog urote protiv Habsburgovaca označilo je kraj dinastije, a Habsburgovci su zaplijenili šenkovečki posjed. Pavlinski red raspustio je 1786. car Josip II.',
  },
  Pribislavec: {
    introHr:
      'Pribislavec je mala općina u Međimurskoj županiji, neposredno uz Čakovec, poznata po dvorcu Festetics iz 19. stoljeća, koji je podigla mađarska plemićka obitelj Festetics. Nakon pogubljenja Petra Zrinskog 1671. Habsburgovci su zaplijenili zrinske posjede u Međimurju, a imanja oko Čakovca s vremenom su došla u ruke Festeticsa, koji su u 19. stoljeću u Pribislavcu sagradili dvorac u romantičarsko-historicističkom stilu. Njihovo je imanje bilo jedno od najvećih poljoprivrednih i šumarskih gospodarstava u kraju. Nakon 1918. imanje je prešlo novoj jugoslavenskoj državi, a dvorac je služio raznim ustanovama. Danas je malo naselje na rubu Čakovca iz kojega ljudi svakodnevno odlaze na posao u grad.',
  },
  'Donja Dubrava': {
    introHr:
      'Donja Dubrava je mala općina na krajnjem istoku Međimurske županije, na mjestu gdje se Mura ulijeva u Dravu, i najistočnija je općina Međimurja. Donja Dubrava bila je stoljećima središte splavarenja: mjesni splavari sastavljali su na Dravi velike splavi od hrastovih i bukovih trupaca i spuštali ih kroz Mađarsku u Dunav, sve do Crnoga mora. Pojedina su putovanja trajala mjesecima, a splavari su se potom kući vraćali pješice. Do 1918. selo je, kao i cijelo Međimurje, pripadalo mađarskoj Zaladskoj županiji. Drava i Mura kod Donje Dubrave danas su dio UNESCO-ova prekograničnog rezervata biosfere Mura-Drava-Dunav, a malena kapelica označava ušće Mure u Dravu.',
  },
  'Sveti Križ Začretje': {
    introHr:
      'Sveti Križ Začretje je zagorska općina u Krapinsko-zagorskoj županiji, južno od Krapine, uz koridor autoceste Zagreb-Macelj. Ime nosi po baroknoj hodočasničkoj crkvi Svetog Križa, važnom zagorskom vjerskom mjestu sa štovanim križem, a u selu stoji i dvorac Keglević, sjedište jedne od najistaknutijih hrvatskih plemićkih obitelji. Keglevići su ovdašnje posjede držali od 16. stoljeća, a svoj su dvorac u Začretju u 18. stoljeću pregradili u baroknom stilu. Keglevići su bili toliko bliski bečkom dvoru da je jedna njihova kći, Babette Keglević, 1790-ih u Beču učila klavir kod Beethovena, koji joj je posvetio svoj Prvi klavirski koncert.',
  },
  Krašić: {
    introHr:
      'Krašić je općina u Zagrebačkoj županiji, u brdovitom žumberačkom kraju južno od Jastrebarskog. Poznat je prije svega kao rodno mjesto Alojzija Stepinca, rođenog ovdje 8. svibnja 1898., koji je 1937. postao zagrebački nadbiskup i vodio Crkvu kroz Drugi svjetski rat i prve jugoslavenske godine. Nakon osude na spornom procesu 1946. bio je zatočen u Lepoglavi, a od prosinca 1951. u kućnom pritvoru u župnom dvoru u rodnom Krašiću, gdje je živio do smrti 10. veljače 1960. Papa Ivan Pavao II. proglasio ga je blaženim 3. listopada 1998. u Mariji Bistrici. Stepinčeva rodna kuća i župni dvor danas su hodočasnička mjesta i spomen-središta.',
  },
  Banjole: {
    introHr:
      'Banjole su malo ribarsko selo na južnom istarskom poluotoku, južno od Pule, okrenuto Medulinskom arhipelagu i otočiću Ceji. Naselje se pruža uz niz malih uvala i zaštićenu uvalu Centineru, koja se stoljećima koristi kao prirodna ribarska luka i još čuva male drvene brodice zvane batane. Banjole su izrasle kao ribarski i seljački zaselak u medulinskoj župi pod mletačkom vlašću, a zatim pod habsburškom Austrijom. Kao i ostatak južne Istre, bile su dvojezične, dok tijekom istarskog egzodusa između 1945. i 1955. mnoga talijanska domaćinstva nisu iselila. Krajem 20. stoljeća razvili su se kampovi i mali obiteljski apartmani za pulski turizam. Selo pripada Općini Medulin.',
  },
  Pomer: {
    introHr:
      'Pomer je malo selo na zapadnoj obali Medulinskog zaljeva, na južnom vrhu Istre, istočno od Pule, i pripada Općini Medulin. Nekada seljačko-ribarski zaselak medulinske župe, pod Venecijom do 1797. i zatim pod Austrijom, Pomer je nakon kratke talijanske vlasti 1947. pripao Jugoslaviji, a većina talijanskih govornika iselila je u istarskom egzodusu. Godine 1983. ACI je u Pomeru otvorio jednu od svojih prvih marina, i od tada se identitet sela veže uz nautički turizam, a ne uz ribarstvo. Plitki, zaštićeni zaljev, širok oko sedam kilometara i zaklonjen od bure, omiljen je među jedriličarima i početnicima u jedrenju na dasci. Župna crkva posvećena je svetom Floru.',
  },
  Štinjan: {
    introHr:
      'Štinjan je obalno naselje na sjeverozapadnom rubu Pule, smješteno na poluotoku koji zatvara zapadnu stranu ulaza u pulsku luku. Njegov izgled određuju austrougarske obalne utvrde s kraja 19. stoljeća. Kad je Beč 1850. izabrao Pulu za glavnu ratnu luku Carstva, oko ulaza u zaljev počele su se graditi tvrđave i baterije koje su štitile carsku mornaricu. Najpoznatija je tvrđava Punta Christo, dovršena 1886. godine. Nakon raspada Carstva 1918. područje je pripalo Italiji, zatim Jugoslaviji, a od 1991. Hrvatskoj. Danas su mnoge utvrde sačuvane i služe kao pozornice kulturnih događanja, a Punta Christo svake godine ugošćuje festivale elektroničke glazbe Outlook i Dimensions.',
  },
  Vinkuran: {
    introHr:
      "Vinkuran je malo selo južno od Pule, na cesti prema Banjolama i Premanturi, i danas je dio Grada Pule. Povijesno je važno zbog obližnjega kamenoloma Cave Romane, u kojem su Rimljani od 1. stoljeća prije Krista vadili bijeli vapnenac. Od toga je kamena u 1. stoljeću sagrađena pulska Arena, jedan od šest najvećih sačuvanih rimskih amfiteatara. Istarski vapnenac, pietra d'Istria, stoljećima se izvozio s ove obale, a Venecija ga je ugrađivala u palače i mostove. Samo je selo pod Venecijom i Habsburgovcima ostalo mala ribarska i seljačka zajednica. Danas kamenolom služi kao ljetna pozornica, a na stijenama se još vide pravilni rimski rezovi.",
  },
  Galižana: {
    introHr:
      'Galižana, talijanski Gallesano, selo je u južnoj Istri između Pule i Vodnjana, poznato po očuvanoj talijanskoj zajednici i službenoj dvojezičnosti. U dokumentima se spominje od 13. stoljeća, a u 16. i 17. stoljeću, nakon velikih pomora, venecijanske su vlasti ovamo naselile obitelji iz Furlanije i s terraferme. Tako je istriotski govor, romanski jezik različit od talijanskoga i venecijanskoga, postao i ostao svakodnevni jezik velikoga dijela sela. Za razliku od mnogih istarskih mjesta, Galižana je i nakon 1945. zadržala većinu talijanskih govornika. Središte čuva zbijeni venecijanski raspored ulica oko župne crkve svetih Justa i Kuzme, a okolna polja daju neka od najnagrađivanijih maslinovih ulja u Istri.',
  },
  Marčana: {
    introHr:
      'Marčana je selo i sjedište općine u jugoistočnoj Istri, u unutrašnjosti između Pule i Krnice, okruženo crvenom zemljom, suhozidima i hrastovim šumama. Općina je jedna od najvećih u južnoj Istri po površini i obuhvaća obalnu Krnicu te kamena sela poput Loborike, Pavičina i Mutvorana. Prvi se put spominje u kasnom srednjem vijeku pod Venecijom. U 17. stoljeću kuga je toliko opustošila kraj da mletački popis iz 1641. bilježi tek nekoliko kućanstava u pojedinim zaselcima, pa je Republika ovamo naselila obitelji iz Dalmacije, Albanije i s terraferme. Pod Habsburgovcima od 1797. Marčana je ostala malo seljačko mjesto. U središtu stoji župna crkva svetog Lovre.',
  },
  Krnica: {
    introHr:
      'Krnica je malo obalno selo na istočnoj strani Istre, između Pule i Labina, i pripada Općini Marčana. Ispod sela, u uskoj uvali, skrivena je ribarska luka Krnička Luka. Selo postoji barem od kasnoga srednjeg vijeka pod Venecijom, koja ga je ponovno naselila nakon kuge. Pod Habsburgovcima od 1797. do 1918. ostalo je ribarski i seljački zaselak, a luka je služila domaćim brodicama i obalnom prometu prema Kvarneru. U središtu sela stoji župna crkva svetog Roka. Istočna obala kod Krnice manje je izgrađena od zapadne i pretežno kamenita, pa je selo poznato po neiskvarenim plažama, konobama uz luku i kajakašima koji odavde kreću prema Labinu.',
  },
  Šišan: {
    introHr:
      'Šišan, talijanski Sissano, selo je nekoliko kilometara istočno od Pule, u zaleđu Medulinskoga zaljeva, na niskom grebenu u kraju crvene zemlje južne Istre. Pripada Općini Ližnjan, a uz većinsko hrvatsko stanovništvo ima i priznatu talijansku manjinu. U mletačkim se izvorima spominje kao seljačko selo pulske okolice; u 16. i 17. stoljeću kuga ga je opustošila, nakon čega su doseljene obitelji s terraferme. Pod Habsburgovcima od 1797. ostalo je poljodjelsko mjesto, 1918. je pripalo Italiji, 1947. Jugoslaviji i 1991. Hrvatskoj. Župna crkva svetog Felicijana potječe iz 18. stoljeća. Manje od dva kilometra od sela iskopana je rimska villa rustica s tragovima uljara.',
  },
  Tar: {
    introHr:
      'Tar, talijanski Torre, malo je selo na zapadnoj istarskoj obali između Poreča i Novigrada, na vapnenačkoj visoravni iznad ušća rijeke Mirne. Sjedište je dvojezične Općine Tar-Vabriga-Torre-Abrega. Ime mu dolazi od talijanske riječi torre, kula, po srednjovjekovnoj obrambenoj kuli koja je nekoć ovdje stajala. U srednjem se vijeku spominje kao utvrđeno naselje Akvilejske patrijaršije, a zatim Mletačke Republike, pod kojom je do 1797. bilo malo seljačko mjesto. Krajem 20. stoljeća općina je postala turističko središte, ponajprije zahvaljujući kampu Lanterna južno od sela, jednom od najvećih u Hrvatskoj s više od 9000 parcela. U sezoni u njemu boravi više ljudi nego u ostatku općine.',
  },
  Vabriga: {
    introHr:
      'Vabriga, talijanski Abrega, malo je selo u zaleđu zapadne istarske obale, između Tara i Poreča, na vapnenačkoj visoravni iznad ušća rijeke Mirne. Zajedno s Tarom čini dvojezičnu Općinu Tar-Vabriga-Torre-Abrega. U mletačkim se zapisima spominje kao seljačko selo na cesti Poreč-Novigrad, u sastavu Porečke biskupije. Opustjelo je za kuge, a Venecija ga je naselila obiteljima iz Dalmacije i s terraferme. Pod Austrijom, Italijom i Jugoslavijom ostalo je poljodjelsko mjesto. Staro središte čuva zbijeni venecijanski raspored ulica oko župne crkve, a okolna polja daju masline, grožđe i povrće. Obala oko Santa Marine nudi mirnija kupališta, a dolina Mirne važno je stanište ptica selica.',
  },
  Brtonigla: {
    introHr:
      'Brtonigla, talijanski Verteneglio, mjesto je na niskom grebenu u sjeverozapadnoj Istri, između doline Mirne i slovenske granice, u bujskom vinorodnom kraju. Sjedište je dvojezične Općine Brtonigla-Verteneglio i jedno od središta istarske vinske ceste. U srednjovjekovnim se izvorima spominje pod Mletačkom Republikom, koja je ovim dijelom Istre vladala od 13. stoljeća do 1797., a brijeg i vinogradi na crvenoj zemlji dali su mjestu trajnu poljodjelsku osobnost. Pod Austrijom, Italijom i Jugoslavijom uz hrvatske je seljake živjela snažna talijanska zajednica, danas jedna od većih u sjevernoj Istri. Brtonigla je najpoznatija po muškatu: svakoga lipnja održava se Festival muškata, a lokalni je muškat zaštićen oznakom zemljopisnoga podrijetla.',
  },
  Oprtalj: {
    introHr:
      'Oprtalj, talijanski Portole, mali je grad na grebenu iznad doline Mirne, između Buzeta i Motovuna. Njegova zidinama opasana jezgra s ložom, crkvom svetog Jurja na najvišoj točki i kamenim kućama crvenih krovova jedna je od najcjelovitijih venecijanskih cjelina u Istri. Bio je utvrda Akvilejske patrijaršije, od 1209. tršćanskih biskupa, a od 1421. do 1797. Mletačke Republike, koja je podigla sačuvane zidine, vrata i ložu. Oprtalj je službeno dvojezičan. Iseljavanje u 20. stoljeću smanjilo je broj stanovnika na nekoliko stotina, no gradić je postao središte galerija i festivala. U crkvici svete Marije izvan zidina sačuvane su freske s kraja 15. stoljeća s rijetkim Mrtvačkim plesom.',
  },
  'Sveti Petar u Šumi': {
    introHr:
      'Sveti Petar u Šumi malo je selo u srednjoj Istri, između Pazina i Žminja, nazvano po samostanu i crkvi svetih Petra i Pavla usred hrastove šume. Samostan je osnovan u 11. ili 12. stoljeću kao benediktinski, a 1459. preuzeli su ga pavlini i držali do 1783., kad je car Josip II. ukinuo red. Današnja crkva i samostan potječu uglavnom iz 17. i 18. stoljeća i ubrajaju se među najvažnije barokne crkvene cjeline u Istri, a drveni barokni oltari smatraju se među najljepšima na poluotoku. Pavlini su se u samostan vratili 1993. godine. Selo je ostalo maleno, ali je crkva i danas središte hodočašća cijeloga kraja.',
  },
  Tinjan: {
    introHr:
      'Tinjan je selo na grebenu u srednjoj Istri, između Pazinske kotline i porečke obale, u cijeloj Hrvatskoj poznato kao središte istarskoga pršuta. Spominje se od kasnoga srednjeg vijeka kao dio Pazinske knežije, habsburškoga posjeda usred mletačke Istre. Hladna i suha bura koja prelazi preko grebena stoljećima je davala idealne uvjete za sušenje šunke, a pršut je dugo bio kućni zanat. Od 1990-ih istarski pršut nosi europsku zaštićenu oznaku izvornosti. Od dalmatinskoga i talijanskoga razlikuje se po tome što se koža skida prije sušenja, a začinjava se paprom, češnjakom i lovorom. Svakoga listopada u Tinjanu se održava međunarodni sajam pršuta ISAP.',
  },
  Vižinada: {
    introHr:
      'Vižinada, talijanski Visinada, malo je selo na grebenu u srednjoj Istri, zapadno od Motovuna i sjeverno od Poreča, u vinorodnom kraju doline Mirne. Sjedište je male dvojezične općine. Od 1394. do 1797. pripadala je Mletačkoj Republici. Kuga 1630. i 1631. teško je opustošila selo, pa je Venecija ovamo naselila obitelji iz drugih dijelova svojih zemalja. Poslije je Vižinada ostala malo poljodjelsko središte. Danas je okolna zemlja jedan od najplodnijih dijelova istarske vinske ceste, poznat po malvaziji. Od 1902. do 1935. selo je imalo postaju na Parenzani, uskotračnoj pruzi od Trsta do Poreča, čija je trasa danas omiljena biciklistička ruta.',
  },
  Karojba: {
    introHr:
      'Karojba je malo selo u srednjoj Istri, jugozapadno od Motovuna, na grebenu iznad južne strane doline Mirne, i sjedište je Općine Karojba. Spominje se od srednjega vijeka kao poljodjelsko selo pod mletačkom Istrom. Okolne šume bile su pod strogim propisima Republike, jer je Motovunska šuma davala hrastovinu za jarbole i rebra brodova u venecijanskom Arsenalu. Ta je šuma danas jedno od najbogatijih staništa bijelih tartufa u Europi; tu je 1999. Giancarlo Zigante sa psom pronašao bijeli tartuf težak 1,31 kilograma, upisan u Guinnessovu knjigu kao najveći na svijetu. Gospodarstvo Karojbe danas spaja poljodjelstvo, lov na tartufe i manji turizam.',
  },
  Lupoglav: {
    introHr:
      'Lupoglav je malo selo u istočnoj Istri, u podnožju Učke, i sjedište je Općine Lupoglav. Ime mu doslovno znači vučja glava, a potječe od srednjovjekovnoga dvorca koji je nadzirao prijevoj između Istre i Kvarnera. Dvorac, danas ruševina iznad sela, pripadao je Goričkim grofovima, Habsburgovcima u sklopu Pazinske knežije i raznim plemićkim obiteljima. Selo u nizini raslo je uz cestu i, od 1873., uz austrougarsku prugu Pazin-Rijeka, i ostalo je malo prometno i seljačko mjesto. Iznad Lupoglava diže se Učka, s 1401 metrom najviši vrh Istre, danas park prirode; s vrha se za vedrih dana vidi do Venecije.',
  },
  Cerovlje: {
    introHr:
      'Cerovlje je malo selo u srednjoj Istri, neposredno istočno od Pazina, u gornjem toku potoka Pazinčice, i sjedište je rijetko naseljene Općine Cerovlje. Pazinčica je jedina istarska ponornica: teče kroz općinu i kod Pazina nestaje pod zemljom u Pazinskoj jami. Taj je ponor nadahnuo Julesa Vernea da u njemu smjesti vrhunac romana Mathias Sandorf iz 1885. godine. Cerovlje je od 15. stoljeća do 1918. pripadalo Pazinskoj knežiji, habsburškom posjedu unutar mletačke Istre, a zatim Italiji, od 1947. Jugoslaviji i od 1991. Hrvatskoj. U općini je i selo Gologorica sa srednjovjekovnom crkvom i ostacima kaštela.',
  },
  Mošćenice: {
    introHr:
      'Mošćenice su malo srednjovjekovno selo na brijegu iznad Mošćeničke Drage, na istočnoj padini Učke, s pogledom na Kvarner i otok Cres. Zidinama opasano kameno selo s uskim ulicama, župnom crkvom svetog Andrije i sačuvanim gradskim vratima, Velim vratima, jedno je od najbolje očuvanih liburnskih naselja na Jadranu. Osnovali su ga Liburni još prije Rimljana, a poslije je pod Rimom, Bizantom, hrvatskim vladarima i Habsburgovcima ostalo utvrđeno selo. Na istom brijegu ljudi žive neprekidno više od 2500 godina. Unutar zidina obnovljen je stari kameni toš, mlin za masline, danas mali muzej. Mošćenice i Mošćenička Draga čine jednu općinu.',
  },
  Brseč: {
    introHr:
      'Brseč je malo selo na vrhu litice na istočnoj padini Učke, na južnom kraju Opatijske rivijere, odakle se strmi vapnenački obronak spušta u Kvarner. Nastalo je kao liburnsko naselje, a od 15. stoljeća do 1918. bilo je malo utvrđeno habsburško selo. Zidine i vrata zaštićene su kao povijesna jezgra, a župna crkva svetog Jurja potječe iz 18. stoljeća. Brseč je najpoznatiji kao rodno mjesto književnika Eugena Kumičića (1850.-1904.), jednoga od glavnih predstavnika hrvatskoga realizma, čiji roman Začuđeni svatovi iz 1883. prikazuje istarska obalna sela. Njegova rodna kuća sačuvana je kao mali muzej. Selo je danas dio Općine Mošćenička Draga.',
  },
  Ika: {
    introHr:
      'Ika je malo obalno mjesto na Opatijskoj rivijeri, između Ičića i Lovrana, na istočnoj obali Kvarnera u podnožju Učke. Poznata je po šljunčanoj plaži Ikici, jednoj od najfotografiranijih na rivijeri, i po staroj ribarskoj jezgri uz more. Razvila se potkraj 19. stoljeća, kad je Austrija Opatijsku rivijeru izgrađivala kao carsko zimsko lječilište. Šetnica lungomare, koja od Voloskoga preko Opatije vodi do Lovrana i prolazi kroz Iku, građena je od 1885. do 1911., dijelom rukama carske mornarice; danas je jedna od najstarijih neprekinutih obalnih šetnica na svijetu. Ika je ostala mirno mjesto, manje od Ičića, i dio je Općine Opatija.',
  },
  Ičići: {
    introHr:
      'Ičići su obalno mjesto neposredno južno od Opatije, u podnožju Učke. Razvili su se potkraj 19. stoljeća, kad je Austrija ovaj dio obale pretvorila u zimsko lječilište. Kroz Ičiće prolazi šetnica lungomare, građena od 1885. do 1911. Mjesto je poznato po širokoj šljunčanoj plaži, jednoj od rijetkih na rivijeri s Plavom zastavom, i po ACI marini, jednoj od glavnih na sjevernom Jadranu. Marina je otvorena 1980-ih i Ičiće je pretvorila u nautičko središte, no za njezinu je gradnju srušen i ponovno sagrađen stotinjak metara izvornoga lungomarea, što stariji Opatijci ni danas ne zaboravljaju. Ičići su dio Općine Opatija.',
  },
  Volosko: {
    introHr:
      'Volosko je najsjevernije naselje Opatije, staro ribarsko mjesto koje je danas fizički sraslo s većim gradom, ali je zadržalo vlastiti identitet. Bilo je ribarsko selo davno prije nego što je Opatija u 19. stoljeću postala habsburško lječilište. Uske stube, Voloskanske stube, strmo se penju od luke prema gornjem selu. Luka je i danas radna ribarska luka, a ujedno i gastronomsko odredište: restoran Plavi podrum jedan je od najdugovječnijih ribljih restorana u Hrvatskoj. U Voloskom je 1857. rođen seizmolog Andrija Mohorovičić, po kojem je nazvana granica između Zemljine kore i plašta; njegova je rodna kuća mali muzej blizu luke.',
  },
  Kraljevica: {
    introHr:
      'Kraljevica je mali obalni grad na istočnoj obali Kvarnera, između Rijeke i Crikvenice. Njezino središte obilježavaju dva dvorca iz 17. stoljeća, Stari grad i Novi grad, koje su podigle plemićke obitelji Zrinski i Frankopan, te brodogradilište, jedno od najstarijih na Jadranu koje još radi. Zrinsko-frankopanska urota protiv Habsburgovaca završila je 1671. pogubljenjem Petra Zrinskoga i Frana Krste Frankopana, a njihovi su posjedi, uključujući Kraljevicu, oduzeti. Godine 1726. dovršena je Karolinska cesta, prva kolna cesta od Karlovca do mora, kojoj je Kraljevica bila jadranski završetak, a 1729. Habsburgovci su ovdje osnovali brodogradilište. Ono otad radi gotovo bez prekida.',
  },
  Selce: {
    introHr:
      'Selce je mali obalni grad na vinodolskoj obali, neposredno južno od Crikvenice, sa šljunčanim plažama i malom lukom. Povijesno je pripadalo vinodolskom posjedu Frankopana, a Vinodolski zakonik iz 1288. jedan je od najstarijih sačuvanih slavenskih pravnih zbornika. Pod Frankopanima i zatim Habsburgovcima Selce je ostalo malo ribarsko i seljačko selo. Potkraj 19. stoljeća, kad je Crikvenica postala austrougarsko ljetovalište, Selce se razvijalo usporedno s njom, s manjim hotelima i kupalištima, i otad je mirnija alternativa većoj susjedi. U središtu staroga sela stoji župna crkva Presvetoga Trojstva, a plaže se pružaju prema jugu, uz vinodolsku obalu. Danas je Selce dio Grada Crikvenice.',
  },
  Klenovica: {
    introHr:
      'Klenovica je malo obalno selo na vinodolskoj obali između Novoga Vinodolskoga i Senja, ondje gdje se Vinodolska dolina otvara prema Velebitskom kanalu. Jedno je od mjesta na istočnom Jadranu najizloženijih buri, koja zimi može dosegnuti orkansku snagu. Povijesno je pripadala vinodolskom posjedu Frankopana, uređenom Vinodolskim zakonikom iz 1288., a pod Frankopanima i od kraja 16. stoljeća pod Habsburgovcima ostala je malo ribarsko selo. Zbog izloženosti vjetru njezina je mala zaštićena luka bila važno pribježište za brodove koje bi bura iznenadila između Senja i Novoga Vinodolskoga. Danas se Klenovica skromno razvija kao ljetovalište i pripada Gradu Novom Vinodolskom.',
  },
  Jadranovo: {
    introHr:
      'Jadranovo je malo obalno selo na vinodolskoj obali između Crikvenice i Kraljevice, s više malih uvala. Pripada Gradu Crikvenici, a središte mu je povijesna luka Sveti Jakov. Upravo je Sveti Jakov bilo staro ime sela, po župnoj crkvi, a promijenjeno je u jugoslavensko doba kako bi se uklonila vjerska referenca: novo ime spaja Jadran, hrvatsko ime za more, i nastavak -ovo. Selo je povijesno bilo dio frankopanskoga Vinodola, uređenoga Vinodolskim zakonikom iz 1288., i dijeli razvojnu priču cijele obale, od ribarskoga sela do ljetovališta. Župna crkva svetog Jakova i danas stoji, a staro se ime još čuje u mjesnom govoru.',
  },
  Dramalj: {
    introHr:
      'Dramalj je malo obalno naselje na vinodolskoj obali neposredno sjeverno od Crikvenice, danas nastavak većega grada. Prostire se uz obalu sa šljunčanim plažama i malim uvalama, dok stara seoska jezgra stoji malo dalje od mora. Povijesno je Dramalj bio malo seljačko i ribarsko selo na frankopanskoj vinodolskoj obali, uređenoj Vinodolskim zakonikom iz 1288. Turizam na ovom potezu počeo je 1888., kad je nadvojvoda Josip Habsburški u Crikvenici sagradio prvi hotel, čime je vinodolska obala postala jedno od prvih turističkih područja u Hrvatskoj. Potkraj 20. stoljeća, s rastom Crikvenice, Dramalj se uz obalu popunio kućama i apartmanima. Danas je dio Grada Crikvenice.',
  },
  Smrika: {
    introHr:
      'Smrika je mali obalni zaselak na istočnoj obali Kvarnera, između Kraljevice i Crikvenice, na blagoj padini iznad mora, koji pripada Gradu Kraljevici. Ime mu dolazi od riječi smrika, čakavskoga oblika za borovicu, koju su seljaci ovoga kraja tradicionalno brali za rakiju od smrike. Povijesno je Smrika bila mali seljački zaselak u frankopanskom Vinodolu, uređenom Vinodolskim zakonikom iz 1288. Stara seoska jezgra stoji malo dalje od mora. Kad su potkraj 20. stoljeća Kraljevica i cijela vinodolska obala rasle kao stambeno i turističko područje, i Smrika se postupno popunila kućama i apartmanima, ali je ostala znatno manja od svojih susjeda.',
  },
  Hreljin: {
    introHr:
      'Hreljin je selo na grebenu iznad Vinodolske doline, u zaleđu Bakra i Kraljevice, nad kojim se diže ruševina frankopanskoga kaštela Hreljingrada. Utvrda je nadzirala gornji Vinodol i put prema Gorskom kotaru, a Hreljin je bio sjedište jednoga od osam kotara imenovanih u Vinodolskom zakoniku iz 1288. Pod Frankopanima i zatim Habsburgovcima kaštel je ostao regionalno središte, a poslije je propao, no kamena ljuska Hreljingrada stoji i zaštićena je kao spomenik kulture. U 20. stoljeću stanovnici su se u velikom broju iselili u obalne Kraljevicu i Bakar, ali Hreljin je ostao sjedište male župe, danas u sastavu Grada Bakra.',
  },
  Lukovo: {
    introHr:
      'Lukovo je malo naselje u zaleđu vinodolske obale, na padinama iznad Crikvenice, u Primorsko-goranskoj županiji. Pripada frankopanskoj vinodolskoj baštini: povijesno je bilo mali seljački zaselak u Vinodolu, uređenom Vinodolskim zakonikom iz 1288. Pod Habsburgovcima i u jugoslavensko doba ostalo je mala zajednica koja je živjela od vlastite zemlje, a tijekom 20. stoljeća stanovništvo se znatno smanjilo jer su se ljudi selili u obalne gradove. Ime Lukovo dolazi od osobnoga imena Luka; naselja s korijenom Luk- ima na hrvatskoj obali više od trideset. Selo i danas čuva tradicionalni seoski izgled kamenih kuća i malih polja usred krškoga terena.',
  },
  'Stara Baška': {
    introHr:
      'Stara Baška malo je selo na jugozapadnoj obali otoka Krka, smješteno u strmom amfiteatru golih krških brda iznad niza šljunčanih uvala. Unatoč imenu, upravno je odvojena od veće Baške istočnije na otoku i pripada Općini Punat. Povijesno je bila mala ribarska i pastirska zajednica glagoljaške tradicije na izloženoj južnoj obali. Poput cijeloga otoka, u srednjem je vijeku pripadala Frankopanima, do 1480., zatim Veneciji do 1797. i potom Habsburgovcima. Uvale gledaju na Krčko-prvićki kanal i nenaseljeni otočić Prvić, na čijim se stijenama gnijezdi kolonija bjeloglavih supova. Danas se Stara Baška skromno razvija kao ljetovalište za one koji traže mirniju alternativu Baški.',
  },
  Soline: {
    introHr:
      'Soline je malo selo na plitkom Solinskom zaljevu na istočnoj strani Krka, između Klimna i Čižića, u sastavu Općine Dobrinj. Ime je dobilo po srednjovjekovnim solanama koje su radile u plitkom zaljevu pod Frankopanima i Venecijom. Isti plitki zaljev danas daje ljekovito crno blato, peloid, koje se od 19. stoljeća koristi za kožne i reumatske bolesti; već su ga tražili posjetitelji iz austrougarskoga doba. Zaljev je jedan od najplićih velikih zaljeva na Krku, ljeti vrlo topao, pa je omiljeno obiteljsko kupalište, a među gostima su povijesno najčešći Česi i Slovaci.',
  },
  Klimno: {
    introHr:
      'Klimno je malo selo i zaštićena luka na istočnoj obali Krka, na sjevernom kraju Solinskoga zaljeva, u sastavu Općine Dobrinj. Njegova je luka jedno od najboljih prirodnih zaklona od bure na izloženoj istočnoj obali otoka, pa su se u njoj stoljećima sklanjali krčki ribari i trgovci kad bi vjetar zapuhao niz Vinodolski kanal. Poput cijeloga otoka, Klimno je do 1480. pripadalo Frankopanima, zatim Veneciji do 1797., pa Austriji. Ime je dobilo po župnoj crkvi svetog Klementa: od Sveti Klement do Klimno vodi isto postupno kraćenje kao od Sveti Petar do Sutpetar.',
  },
  Nerezine: {
    introHr:
      'Nerezine su malo selo na sjevernom dijelu otoka Lošinja, na uskoj prevlaci koja kod Osora spaja Lošinj s Cresom, u sastavu Grada Maloga Lošinja. Selo je izraslo oko franjevačkoga samostana koji je 1473. osnovao fra Martin iz Osora na padinama Osoršćice, s 588 metara najvišega vrha otoka. Pod Venecijom do 1797. i zatim pod Austrijom Nerezine su ostale mala poljodjelska i pomorska zajednica s miješanim hrvatskim i talijanskim stanovništvom, kao i veći dio Lošinja i Cresa. Samostan je kroz cijelu povijest otoka ostao vjersko središte, a njegova je knjižnica čuvala vrijedne crkvene rukopise.',
  },
  Belej: {
    introHr:
      'Belej je malo selo u unutrašnjosti južnoga dijela otoka Cresa, u rijetko naseljenom poljodjelskom kraju između Osora i južnoga vrha otoka. Jedno je od povijesnih središta creskoga ovčarstva, koje je stoljećima glavna gospodarska djelatnost juga otoka i daje cijenjenu cresku janjetinu i creski ovčji sir. Selo se spominje od srednjega vijeka kao poljodjelsko naselje pod osorskom biskupijom i Mletačkom Republikom, koja je Cresom vladala od 1409. do 1797. Pod Austrijom, Italijom i Jugoslavijom Belej je ostao mala samoopskrbna zajednica, a iseljavanje u 20. stoljeću smanjilo ga je na nekoliko desetaka stalnih stanovnika. Okolne krške pašnjake dijele dugi suhozidi.',
  },
  Martinšćica: {
    introHr:
      'Martinšćica je malo selo na zapadnoj obali otoka Cresa, u maloj zaštićenoj uvali okrenutoj otvorenom Kvarneru, i jedno od rijetkih pravih sela na toj strani otoka. Spaja malu ribarsku luku sa skromnim ljetnim turizmom, a njezina je uvala jedna od rijetkih dobrih luka zapadne creske obale. Spominje se od srednjega vijeka kao ribarsko selo pod Venecijom, koja je Cresom vladala od 1409. do 1797., i pod osorskom biskupijom. Pod Austrijom, Italijom od 1918. do 1947. i Jugoslavijom ostala je malo selo, a danas pripada Gradu Cresu. U selu je sačuvan kaštel obitelji Sforza iz 17. stoljeća, danas u privatnom vlasništvu.',
  },
  Valun: {
    introHr:
      'Valun je sićušno ribarsko selo na zapadnoj obali otoka Cresa, u maloj zaštićenoj uvali okruženoj borovima i hrastovima, u sastavu Grada Cresa. Njegovo povijesno značenje nadilazi njegovu veličinu: župna crkva svete Marije čuva Valunsku ploču, nadgrobni natpis iz 11. stoljeća i jedan od najstarijih sačuvanih glagoljskih natpisa na svijetu. Ploča je dvojezična, pisana hrvatskom glagoljicom i latinicom, i spominje tri naraštaja jedne obitelji: baku Tehu, sina Bratohnu i unuka Junu. Time je jedan od najranijih dokaza da su na istočnom Jadranu glagoljaška hrvatska i latinska pismenost postojale usporedno. Pod Venecijom od 1409. do 1797., Austrijom, Italijom i Jugoslavijom Valun je ostao malo ribarsko selo.',
  },
  Lubenice: {
    introHr:
      'Lubenice su selo na vrhu litice na zapadnoj obali otoka Cresa, na vapnenačkoj stijeni 378 metara iznad mora. Mjesto je neprekidno naseljeno od brončanoga doba, četiri tisuće godina, pa se ubraja među najdulje neprekidno naseljena mjesta u Europi. Kroz liburnsko, rimsko, srednjovjekovno hrvatsko i mletačko doba ostalo je utvrđeno selo na brijegu. Iseljavanje u 20. stoljeću smanjilo je selo s nekoliko stotina stanovnika na manje od dvadeset, no kamene kuće i zidine ostale su netaknute i zaštićene su kao kulturni spomenik. Plaža ispod Lubenica jedna je od najfotografiranijih na Jadranu, a do nje vodi samo strma staza kojom se hoda otprilike sat vremena.',
  },
  Beli: {
    introHr:
      'Beli je malo selo na sjeveroistočnoj obali otoka Cresa, na brijegu iznad Kvarnera, u sastavu Grada Cresa. Njegov se položaj poistovjećuje s rimskim Caput Insulae, glavom otoka, a kroz srednjovjekovno hrvatsko, mletačko od 1409. do 1797. i austrijsko doba bilo je mala poljodjelska i pomorska zajednica. Danas je poznato po Eko-centru Caput Insulae, osnovanom 1993. radi praćenja i zaštite ugroženoga bjeloglavog supa, koji se gnijezdi na stijenama sjevernoga Cresa, u jednoj od posljednjih kolonija u Europi. Sup ima raspon krila do 2,8 metra. Bolnica za ozlijeđene ptice u Belom u tri je desetljeća izliječila i vratila u prirodu stotine supova.',
  },
  Rogoznica: {
    introHr:
      'Rogoznica je mali dalmatinski obalni grad između Šibenika i Trogira, izgrađen na nekadašnjem otoku koji je u 18. stoljeću nasipom spojen s kopnom. Prvi se put spominje 1390. kao Rogosnica, ribarsko naselje pod šibenskom komunom u mletačko i poslije habsburško doba; stoljećima je bilo siromašno selo ribara i maslinara, a otok je s kopnom sve do 20. stoljeća povezivao samo drveni most. Sve se promijenilo 1995., kad je u uvali Soline otvorena Marina Frapa, jedna od najvećih i najnagrađivanijih marina na Jadranu. Uz nju Rogoznica je poznata po Zmajevom oku, kraškom slanom jezeru dubokom oko 15 metara, od mora odvojenom tek tankim vapnenačkim zidom.',
  },
  Ražanj: {
    introHr:
      'Ražanj je malo ribarsko selo na obali neposredno zapadno od Rogoznice, u Šibensko-kninskoj županiji, i pripada Općini Rogoznica. Čini ga jedna zaštićena luka, župna crkva svetog Nikole, zaštitnika pomoraca, i niz kamenih kuća iza obale. Ime dolazi od riječi ražanj, dugoga štapa za pečenje, i opisuje dugačak i uzak poluotok na kojem selo leži. Nastalo je u mletačko doba pod šibenskom komunom kao ribarsko i maslinarsko naselje obitelji iz rogozničkoga zaleđa. U Domovinskom ratu izbjeglo je ratna razaranja, ali je izgubilo mlade koji su odlazili u obližnje gradove. Danas ima manje od 400 stalnih stanovnika, a glavni prihod donose apartmani i male konobe.',
  },
  Žirje: {
    introHr:
      'Žirje je najudaljeniji naseljeni otok šibenskog arhipelaga, oko 22 kilometra od Šibenika, na otvorenom Jadranu. U dva sela, Muni i Brbinjšćaku, danas živi manje od sto stalnih stanovnika, a trajekt iz Šibenika plovi otprilike dva sata. Otok je naseljen od prapovijesti, a u ranobizantskom razdoblju, u 6. stoljeću, na njemu su podignute dvije tvrđave, Gradina i Gustijerna, koje su nadzirale pomorski prilaz kopnu. Stoljećima su se ovdje uzgajali vinogradi, masline i smokve. U Drugom svjetskom ratu Žirje je bilo saveznička podmornička baza. Danas je poznato po ronjenju, ribolovu i uvalama Velika i Mala Stupica na južnoj obali.',
  },
  Brodarica: {
    introHr:
      'Brodarica je obalno naselje južno od Šibenika, smješteno točno nasuprot otoku Krapnju, od kojeg ga dijeli kanal širok jedva 300 metara. Brod prelazi kanal za manje od pet minuta. Naselje su osnovali stanovnici Krapnja kojima su na malom otoku nedostajali pašnjaci i izvori pitke vode. Kroz mletačko i habsburško razdoblje dvije su zajednice činile jednu gospodarsku cjelinu: Brodarica je davala poljoprivredne proizvode, a Krapanj se bavio ronjenjem za spužvama. Ime dolazi od riječi brod, jer su se ljudi stalno prevozili između kopna i otoka. U drugoj polovici 20. stoljeća Brodarica je brzo narasla kao predgrađe Šibenika.',
  },
  Krapanj: {
    introHr:
      'Krapanj je najmanji naseljeni hrvatski otok i najniži otok na Jadranu: njegova najviša točka jedva je 1,25 metra iznad mora. Leži samo 300 metara od Brodarice južno od Šibenika i pokriva oko 0,36 četvornih kilometara, a nekad je imao više od 1500 stanovnika. Otok je naseljen 1436. godine, kad je šibenski građanin Juraj Mirojević darovao zemlju franjevcima koji su bježali pred Osmanlijama iz Bosne. Oni su podigli samostan i crkvu Svetog Križa. U 18. stoljeću franjevac Antun s Krete donio je na otok ronjenje za spužvama. Budući da na otoku nema izvora, stanovnici su stoljećima skupljali kišnicu u kamene gustirne.',
  },
  Betina: {
    introHr:
      'Betina je obalno selo na istočnoj strani otoka Murtera u šibenskom arhipelagu, poznato po tristo godina staroj tradiciji gradnje drvenih brodova, osobito gajete i leuta. Selo su 1718. godine osnovale izbjegličke obitelji koje su bježale pred osmanskim ratovima u bosanskom zaleđu. Prvi zabilježeni brodograditelj, Paško Filipi, počeo je graditi drvene brodove 1740. godine, a njegovi su potomci održali zanat više od dvjesto godina. Muzej betinske drvene brodogradnje otvoren je 2015. i jedini je takav muzej u Hrvatskoj; 2019. dobio je posebno priznanje Vijeća Europe. Betinska gajeta upisana je na hrvatsku listu nematerijalne kulturne baštine.',
  },
  'Kaštel Kambelovac': {
    introHr:
      'Kaštel Kambelovac četvrto je od sedam kaštelanskih naselja nanizanih uz obalu između Trogira i Splita. Ime je dobio po splitskoj plemićkoj obitelji Kambelo (Cambi), koja je ovdje oko 1500. godine sagradila utvrđeni dvor kao zaštitu od osmanskih upada i kao središte svog imanja s maslinicima i vinogradima. Oko te utvrde spustili su se seljaci s padina Kozjaka i podigli guste kamene kuće uz uske ulice. Kroz mletačko i habsburško razdoblje Kambelovac je ostao malo poljoprivredno selo sa župnom crkvom svetog Mihovila u središtu. U 20. stoljeću industrijski rast Splita spojio je sedam Kaštela u jedan grad, ali je svako sačuvalo svoju povijesnu jezgru.',
  },
  'Kaštel Novi': {
    introHr:
      'Kaštel Novi drugo je najzapadnije od sedam kaštelanskih naselja između Trogira i Splita. Osnovan je 1512. godine, kad je trogirski plemić Pavao Antunov Cipiko sagradio utvrđenu kuću zapadno od starije kule svoje obitelji u susjednom Kaštel Starom; upravo zato naselje nosi ime novi. Početkom 16. stoljeća, dok su osmanski upadi u dalmatinsko zaleđe bivali sve češći, trogirski su plemići preseljavali svoje seljake s Kozjaka na utvrđene obalne posjede, pa je oko kule izrasla gusta jezgra kamenih kuća. Župna crkva svetog Petra potječe iz vremena osnutka naselja. Danas je Kaštel Novi dio jedinstvenog grada Kaštela.',
  },
  'Kaštel Štafilić': {
    introHr:
      'Kaštel Štafilić najzapadnije je od sedam kaštelanskih naselja i leži na istočnom rubu trogirskog zaljeva. Osnovao ga je oko 1500. godine trogirski plemić Stjepan Štafilić, odnosno Stafileo, koji je sagradio utvrđenu kulu kao sjedište svog imanja i zaštitu od osmanskih upada. Iz iste trogirske obitelji potekao je Giovanni Stafileo, papinski nuncij na dvoru engleskog kralja Henrika VIII. Naselje je najpoznatije po Staroj maslini, stablu kojem je potvrđena starost od više od 1500 godina, najstarijoj dokumentiranoj maslini u Hrvatskoj. U 20. stoljeću na ravnici zapadno od naselja izgrađena je splitska zračna luka Resnik, pa je Kaštel Štafilić postao zračna vrata srednje Dalmacije.',
  },
  Vinišće: {
    introHr:
      'Vinišće je malo ribarsko i turističko selo u duboko uvučenoj uvali između Marine i Trogira. Ima oko 350 stalnih stanovnika i administrativno pripada općini Marina. Selo je naseljeno u kasnom srednjem vijeku kao ribarsko i poljoprivredno naselje trogirske komune; obitelji su na strmim padinama zaleđa uzgajale masline, vinovu lozu i smokve. Ime dolazi od riječi vino i podsjeća na vinogradarsku tradiciju. Uvala Vinišće jedna je od najdubljih prirodnih luka između Trogira i Rogoznice, a župna crkva svetog Petra stoji na njezinoj zapadnoj obali. U 20. stoljeću selo se ispraznilo, ali se u 21. oporavilo kao mirno turističko odredište.',
  },
  Mimice: {
    introHr:
      'Mimice su malo selo na Omiškoj rivijeri između Omiša i Piska, na uskoj obalnoj ravnici gdje se padine Biokova spuštaju k Jadranu. Oko 300 stalnih stanovnika živi u jednom nizu kuća uz more, oko župne crkve svetog Roka, i uz plažu bijelog šljunka koja se često pojavljuje na turističkim fotografijama rivijere. Selo je nastalo kao obalni nastavak starijeg sela Svinišća na padinama Mosora, odakle su se obitelji spustile k moru zbog maslina, smokava i ribolova. Do sela se dugo dolazilo samo uskom obalnom stazom, sve dok 1960-ih nije dovršena Jadranska magistrala. Od tada gospodarstvom vladaju mali apartmani i obiteljski kampovi.',
  },
  Pisak: {
    introHr:
      'Pisak je malo obalno selo na istočnom kraju Omiške rivijere, na granici između općine Omiš i Makarske rivijere. Oko 200 stalnih stanovnika živi na strmoj padini između Jadranske magistrale i mora. Selo je nastalo kao obalno naselje unutrašnjeg sela Mala Ostrvica, iz kojeg su se obitelji spustile iz krškog zaleđa radi ribolova i uzgoja maslina. Selo je ostalo izolirano dok kroz njega 1960-ih nije prošla Jadranska magistrala, nakon čega je ljetni turizam u apartmanima postupno postao glavna djelatnost. Župna crkva svetog Andrije stoji iznad ceste. Pisak je danas poznat po mirnim šljunčanim plažama i položaju na samom kraju omiške obale.',
  },
  Promajna: {
    introHr:
      'Promajna je malo selo na Makarskoj rivijeri, odmah južno od Baške Vode, na uskom obalnom pojasu između Jadranske magistrale i duge šljunčane plaže. Kao i većina obalnih sela ove rivijere, nastala je kao ribarski i maslinarski izdanak matičnog sela u zaleđu, u ovom slučaju Basta na padinama Biokova. Ime dolazi od riječi promaja, hladne struje zraka koja puše između planine i mora. Jadranska magistrala prošla je kroz selo 1960-ih i pretvorila niz ribarskih kuća u turističko mjesto. Danas Promajna i susjedni Bratuš čine gotovo neprekinut obalni pojas između Baške Vode i Krvavice.',
  },
  Bratuš: {
    introHr:
      'Bratuš je malo selo na Makarskoj rivijeri između Promajne i Krvavice, na uskom pojasu između planinskog zida Biokova i Jadrana. S oko 150 stalnih stanovnika jedno je od najmanjih naselja rivijere: nekoliko kamenih kuća, mala luka i šljunčana uvala iza koje raste borova šuma. Selo je nastalo kao obalni dodatak unutrašnjeg sela Basta, iz kojeg su se obitelji spuštale radi maslina, vinograda i ribolova. Bilo je premalo da bi imalo vlastitu župu, pa su mještani na misu odlazili gore u Bast. Do 1960-ih, kad je otvorena Jadranska magistrala, živjelo je u poluizolaciji; otada mu je glavna djelatnost mali apartmanski turizam.',
  },
  Igrane: {
    introHr:
      'Igrane su malo selo na južnom dijelu Makarske rivijere, između Drašnica i Živogošća, izgrađeno oko zelenog, borovima pokrivenog rta Punta koji se pruža u Jadran. Spominje se od 13. stoljeća u bosanskim i hrvatsko-ugarskim izvorima, a naselili su ga Hrvati koji su obrađivali uski pojas zemlje pod Biokovom. Na padinama iznad sela stoji predromanička crkva svetog Mihovila iz otprilike 11. stoljeća, jedna od najstarijih malih crkava na rivijeri. U ranom novom vijeku Igrane su prelazile iz mletačkih u osmanske ruke i natrag, pa je u 17. stoljeću uz luku podignuta utvrđena kula Šimić-Ivanišević.',
  },
  Drašnice: {
    introHr:
      'Drašnice su malo selo na južnom dijelu Makarske rivijere, između Živogošća i Igrana, u općini Podgora. Selo je podijeljeno na stariju unutrašnju jezgru na padinama Biokova i noviji obalni dio uz Jadransku magistralu. Na brdu iznad sela stoji predromanička crkva svetog Jurja iz otprilike 12. stoljeća, jedna od najstarijih sačuvanih malih crkava na makarskoj obali. Selo se spominje od srednjeg vijeka; naselili su ga Hrvati koji su na strmim padinama uzgajali masline i vinovu lozu te pasli ovce. Stari dio sela izgrađen je visoko iznad mora radi zaštite od gusara, a obalni se dio razvio tek u 20. stoljeću.',
  },
  Krvavica: {
    introHr:
      'Krvavica je malo selo na Makarskoj rivijeri između Bratuša i Baške Vode, s manje od 200 stalnih stanovnika, u općini Baška Voda. Široj javnosti selo je gotovo nepoznato, ali je u arhitekturi slavno zbog napuštenog Dječjeg lječilišta koje je projektirao hrvatski arhitekt Boris Magaš, autor splitskog stadiona Poljud. Jugoslavenska narodna armija naručila je lječilište 1960-ih za djecu vojnih osoba oboljelu od bolesti dišnih putova, a Magaš je smjeli kompleks od betona i stakla dovršio 1964. godine. Lječilište je zatvoreno 1991. na početku Domovinskog rata i od tada stoji prazno kao jedna od najpoznatijih ruševina jugoslavenske moderne.',
  },
  Zaostrog: {
    introHr:
      'Zaostrog je selo na Makarskoj rivijeri južno od Drvenika, u općini Gradac, važno u hrvatskoj kulturi zbog franjevačkog samostana u kojem je živio, pisao i pokopan fratar i pjesnik Andrija Kačić Miošić. Samostan je osnovan 1468. godine, u današnjem obliku sagrađen početkom 18. stoljeća. Kačić Miošić (1704–1760), rođen u susjednom Bristu, ovdje je ušao u red i napisao Razgovor ugodni naroda slovinskoga (1756), zbirku koja je hrvatsku povijest ispričala u narodnom stihu i postala najčitanija hrvatska knjiga 18. i 19. stoljeća. Pokopan je u samostanskoj crkvi. Samostan danas čuva bogatu knjižnicu i etnografski muzej s predmetima iz dalmatinskog seoskog života.',
  },
  Brist: {
    introHr:
      'Brist je malo selo na južnom dijelu Makarske rivijere, između Zaostroga i Podaca, u općini Gradac, s oko 300 stalnih stanovnika. U hrvatskoj kulturnoj povijesti poznat je kao rodno mjesto franjevca i pjesnika Andrije Kačića Miošića (1704–1760), jednog od najčitanijih hrvatskih pisaca svih vremena. Kačić Miošić rođen je ovdje 1704., ušao je u franjevački red i kasnije prešao u samostan u susjednom Zaostrogu, gdje je napisao svoj slavni Razgovor ugodni naroda slovinskoga i gdje je pokopan. U selu stoji spomenik pjesniku. Brist danas čuva tradicionalnu kamenu arhitekturu rivijere i živi od skromnog turizma.',
  },
  Podaca: {
    introHr:
      'Podaca su obalno selo na južnom dijelu Makarske rivijere, između Brista i Gradca, u općini Gradac, s oko 600 stalnih stanovnika. Selo se dijeli na stariju unutrašnju jezgru na padinama planine Rilić i dugi moderni obalni dio uz Jadransku magistralu, poznat po jednoj od najdužih šljunčanih plaža na južnom dijelu rivijere. Podaca su naseljena u srednjem vijeku kao hrvatsko poljoprivredno selo: obitelji su na terasama uzgajale masline i vinovu lozu, a na kršu iznad sela pasle ovce. Obalni dio narastao je tek nakon što je 1960-ih otvorena Jadranska magistrala. Župna crkva svetog Stjepana ostala je u starom selu.',
  },
  Komarna: {
    introHr:
      'Komarna je malo obalno naselje u Dubrovačko-neretvanskoj županiji, južno od delte Neretve, nasuprot zapadnom kraju poluotoka Pelješca. Do 2022. godine bila je tiho selo seljaka i ribara s manje od sto stanovnika; danas je kopneno uporište Pelješkog mosta, jednog od najvećih infrastrukturnih projekata u novijoj hrvatskoj povijesti. Most, dug 2404 metra, otvoren je 26. srpnja 2022. i omogućuje da se do Dubrovnika stigne bez prelaska granice kod Neuma, gdje Bosna i Hercegovina ima kratak izlaz na more. Gradnju je oko 85 posto financirala Europska unija, a izveo ju je kineski konzorcij. Komarna sada živi u sjeni mosta koji počinje na njezinoj obali.',
  },
  Klek: {
    introHr:
      'Klek je malo hrvatsko obalno selo zapadno od granice s Bosnom i Hercegovinom kod Neuma, u Dubrovačko-neretvanskoj županiji i općini Slivno. Leži na dugom, plitkom pješčanom zaljevu, rijetkom na inače kamenitoj dalmatinskoj obali, i posljednje je hrvatsko naselje prije kratkog bosanskohercegovačkog izlaza na more koji dijeli Hrvatsku na dva dijela. Ime dolazi od krškog brda iznad sela, nazvanog po hrvatskoj riječi za staro stablo borovice. Susjedni neumski koridor Dubrovačka Republika ustupila je Osmanskom Carstvu 1699. godine kako Venecija ne bi dobila kopnenu granicu s Dubrovnikom. Danas Klek s oko 200 stanovnika živi kao mirno obiteljsko kupališno mjesto.',
  },
  Mlini: {
    introHr:
      'Mlini su obalno mjesto na Dubrovačkoj rivijeri, u zaljevu Župe dubrovačke između Dubrovnika i Cavtata, s oko tisuću stalnih stanovnika. Ime su dobili po mlinovima koje je nekad pokretao potok Zavrelje, zabilježenima u dokumentima Dubrovačke Republike. Pod Republikom su bili malo selo mlinova i voćnjaka s ljetnikovcima dubrovačkih plemića. Turizam je počeo u austrijskom razdoblju u 19. stoljeću, a osobito se razvio u jugoslavensko doba, kad je uz zaljev izgrađeno nekoliko velikih hotela. Ti su hoteli teško oštećeni tijekom opsade Dubrovnika 1991. i 1992. godine, a poslije su obnovljeni. Iz male luke u Mlinima brodovi danas voze do dubrovačke stare gradske jezgre.',
  },
  Plat: {
    introHr:
      'Plat je obalno selo na Dubrovačkoj rivijeri jugoistočno od Dubrovnika, između Mlina i Cavtata, u općini Konavle. Ime dolazi od riječi plat, ravan komad zemlje, jer selo stoji na maloj zaravni iznad mora. Njegovu noviju povijest obilježio je Hotel Croatia, golem hotel s pet zvjezdica usječen u stijenu iznad mora, sagrađen 1973. godine i poznat kao mjesto jugoslavenskih i međunarodnih diplomatskih skupova. Tijekom opsade Dubrovnika 1991. hotel su zaposjele snage Jugoslavenske narodne armije i teško je oštećen. Nakon obnove ponovno je otvoren kao Hotel Croatia Cavtat i danas je jedan od najvećih hotela na hrvatskoj obali.',
  },
  Mokošica: {
    introHr:
      'Mokošica je stambeno predgrađe Dubrovnika, smješteno sjeverozapadno od stare gradske jezgre na padinama iznad Rijeke dubrovačke, ušća rijeke Omble. S oko 6000 stanovnika jedno je od najvećih dubrovačkih naselja, podijeljeno na Staru Mokošicu, staro selo, i Novu Mokošicu, stambenu četvrt planiranu 1970-ih kao novo satelitsko naselje za nekoliko tisuća ljudi. Ime dolazi od slavenske božice Mokoš, što upućuje na naselje starije od kršćanstva. Tijekom opsade Dubrovnika 1991. i 1992. godine naselje se nalazilo na prvoj crti, a snage Jugoslavenske narodne armije držale su visove iznad njega. Danas je Mokošica pretežno stambeno naselje povezano s gradom čestim autobusnim linijama.',
  },
  Komolac: {
    introHr:
      'Komolac je malo naselje na Rijeci dubrovačkoj, slanom ušću krške rijeke Omble, odmah sjeverno od Dubrovnika. Ombla izvire iz stijene kao snažan krški izvor i do mora teče jedva pet kilometara. Komolac je nekad bio malo selo mlinova i brodogradilišta na izvoru, a Dubrovačkoj Republici to je područje bilo strateški izvor pitke vode i snage za mlinove. U blizini su dubrovački plemići gradili ljetnikovce, među kojima je renesansni ljetnikovac Sorkočević jedan od najvažnijih. Krajem 1980-ih ovdje je izgrađena ACI marina Dubrovnik, danas najveća marina za jahte na južnom Jadranu.',
  },
  Konavle: {
    introHr:
      'Konavle su najjužniji kraj Hrvatske, duga krška dolina koja se pruža od dubrovačkih predgrađa do granice s Crnom Gorom. To nije jedno naselje, nego povijesna regija sela, vinograda i pašnjaka s vlastitom nošnjom, govorom i identitetom. Dubrovačka Republika kupila je Konavle u dva navrata, 1419. od bosanskog kralja Stjepana Ostojića i 1426. od obitelji Pavlović, za oko 12 000 dukata i godišnji danak, i one su četiri stoljeća bile njezino najvažnije poljoprivredno zaleđe. Konavoska nošnja s crveno-crnim vezom među najpoznatijima je u Hrvatskoj. U Domovinskom ratu 1991. velik dio Konavala bio je okupiran i spaljen, a oslobođen je do jeseni 1992.',
  },
  Pridvorje: {
    introHr:
      'Pridvorje je konavosko selo jugoistočno od Dubrovnika, u općini Konavle. Nakon što je Dubrovačka Republika 1419. i 1426. stekla Konavle, u Pridvorju je uspostavila sjedište kneza od Konavala, koji je krajem upravljao u ime Senata i stanovao u utvrđenom kneževu dvoru; ime sela doslovno znači kod dvora. Franjevački samostan u Pridvorju osnovan je u 15. stoljeću i jedan je od najstarijih sačuvanih u Konavlima. Selo i njegove renesansne i barokne građevine teško su oštećeni tijekom okupacije 1991. godine u Domovinskom ratu, ali su poslije obnovljeni i povijesna je jezgra sačuvana.',
  },
  Gruda: {
    introHr:
      'Gruda je najveće unutrašnje selo Konavala, smješteno na širokom dnu doline jugoistočno od Dubrovnika, u općini Konavle sa sjedištem u Cavtatu. S oko 600 stalnih stanovnika trgovačko je središte unutrašnjih Konavala, na raskrižju gdje se cesta prema konavoskim vinogradima spaja s glavnim putem od Cavtata prema granici s Crnom Gorom. Selo se razvilo pod Dubrovačkom Republikom nakon 1419., opskrbljujući grad vinom, plodovima i radnom snagom; otvorena ravnica učinila ga je prirodnim sajmištem za okolna brdska sela. U Domovinskom ratu, tijekom okupacije 1991. i 1992., Gruda je spaljena i opljačkana, a nakon oslobođenja u jesen 1992. obnovljena.',
  },
  Molunat: {
    introHr:
      'Molunat je najjužnije obalno selo hrvatskog kopna, u Konavlima blizu granice s Crnom Gorom, s oko 200 stalnih stanovnika. Izgrađen je na malom poluotoku s dvije zaštićene uvale, pa brodovi ovdje nalaze zaklon bez obzira na smjer vjetra. Rimski ostaci i kasnoantička utvrda na poluotoku pokazuju da je mjesto naseljeno bez prekida barem od 4. stoljeća. Pod Dubrovačkom Republikom Molunat je bio ribarsko selo i stražarnica na južnoj granici, odakle se motrilo na galije koje su dolazile iz Boke kotorske. U Domovinskom ratu 1991. selo su okupirale jugoslavenske i srpsko-crnogorske snage, a bilo je najjužnija točka hrvatske obale koja je vraćena.',
  },
  Kuna: {
    introHr:
      'Kuna Pelješka selo je na zapadnoj polovici poluotoka Pelješca, na visokoj krškoj visoravni iznad obale, s oko 200 stalnih stanovnika. Jedno je od glavnih sela pelješkog vinorodnog kraja, okruženo vinogradima plavca malog, autohtone hrvatske crne sorte. Ime dolazi od kune, životinje po kojoj se zvala i hrvatska valuta prije eura. Selo se spominje od srednjeg vijeka kao posjed Dubrovačke Republike, koja je Pelješac stekla 1333. godine. Kroz dubrovačko i habsburško razdoblje identitet Kune bio je vezan uz vinogradarstvo, a krajem 19. i početkom 20. stoljeća ovdje je djelovala jedna od najistaknutijih peljeških vinarskih zadruga. Franjevački samostan u Kuni čuva vrijednu baroknu sakralnu umjetnost.',
  },
  Putniković: {
    introHr:
      'Putniković je malo unutrašnje selo na poluotoku Pelješcu, na krškoj visoravni između Janjine i Stona, s oko 150 stalnih stanovnika. Okruženo je vinogradima plavca malog i pošipa ograđenima suhozidima i jedno je od malih vinogradarskih sela koja daju neka od najcjenjenijih hrvatskih crnih vina. Selo se pojavljuje u dubrovačkim dokumentima kasnog srednjeg vijeka kao dio područja koje je Dubrovačka Republika stekla 1333. godine. Kad je krajem 19. stoljeća filoksera opustošila europske vinograde, Pelješac je, uključujući Putniković, ponovno zasađen cijepljenim lozama i vinarstvo je obnovljeno. Danas male obiteljske vinarije oko sela proizvode vrlo cijenjeni pelješki plavac mali.',
  },
  'Babino Polje': {
    introHr:
      'Babino Polje najveće je selo na otoku Mljetu, smješteno u krškom polju u središtu otoka, s oko 300 stalnih stanovnika. Upravno je sjedište općine Mljet. Selo se spominje od 11. stoljeća, kad je cijeli otok pripadao benediktincima svete Marije. Nakon što je Dubrovačka Republika u 15. stoljeću preuzela Mljet, zemlju oko Babinog Polja obrađivale su obitelji zakupnika. U selu se čuva Biskupska palača, nekadašnje sjedište mljetskog plemićkog vijeća pod dubrovačkom vlašću. Na obali pod selom nalazi se Odisejeva špilja, koju mjesna predaja povezuje s Homerovim Odisejem i nimfom Kalipso, kod koje je junak proveo sedam godina.',
  },
  Goveđari: {
    introHr:
      'Goveđari su malo selo na zapadnoj strani otoka Mljeta, unutar Nacionalnog parka Mljet, s oko 150 stalnih stanovnika. To je glavno naselje zaštićenog područja, smješteno na krškim padinama iznad Velikog i Malog jezera, dvaju slanih jezera koja su glavna prirodna znamenitost parka. Selo je naseljeno u srednjem vijeku kao stočarsko naselje, a ime mu dolazi od riječi govedo. Mljet su držali benediktinci svete Marije, čiji je samostan iz 12. stoljeća na otočiću u Velikom jezeru jedna od najvažnijih predromaničkih građevina u Hrvatskoj. Nacionalni park osnovan je 1960. i obuhvaća zapadnu trećinu otoka; selo od tada živi od turizma, ribolova i poljoprivrede.',
  },
  Pomena: {
    introHr:
      'Pomena je malo lučko selo na zapadnom vrhu otoka Mljeta, unutar Nacionalnog parka Mljet. S manje od 50 stalnih stanovnika jedno je od najmanjih službeno popisanih naselja u Hrvatskoj, ali je glavna trajektna veza između Mljeta i Korčule i polazište za posjetitelje parka. Nekad je Pomena bila sićušni obalni dodatak Goveđara. Nakon što je 1960. osnovan nacionalni park, dobila je važnost kao zapadni ulaz u park, pa su u kasnom jugoslavenskom razdoblju izgrađeni mali hotel i trajektni gat. Katamarani s Korčule i iz Dubrovnika danas povezuju Pomenu s ostatkom južne Dalmacije, a selo u potpunosti živi od turizma.',
  },
  Saplunara: {
    introHr:
      'Saplunara je sićušno naselje na jugoistočnom vrhu otoka Mljeta, u općini Mljet, smješteno uz rijetku pješčanu plažu po kojoj je i nazvano. Manje od 30 stalnih stanovnika živi u nekoliko kuća iza dina, a dugi luk finog pijeska okružen borovom šumom jedna je od vrlo rijetkih pravih pješčanih plaža na inače kamenitoj hrvatskoj obali. Ime dolazi od romanske riječi sablon, pijesak, preko izumrlog dalmatskog jezika koji se nekad govorio na istočnoj obali Jadrana. Krajem 20. stoljeća plažu su otkrili domaći turisti i iza dina je izraslo nekoliko pansiona, ali je nova gradnja strogo ograničena.',
  },
  Stomorska: {
    introHr:
      'Stomorska je malo lučko selo na sjeveroistočnoj obali otoka Šolte, nasuprot Splitu, s oko 200 stalnih stanovnika. Stoljećima je glavna ribarska i pomorska luka otoka, a duboka zaštićena uvala i danas je puna tradicionalnih drvenih brodova. Ime je nastalo iskrivljavanjem imena Santa Maria, po maloj crkvi posvećenoj Djevici Mariji koja je ovdje nekad stajala. Selo se razvilo kao ribarska luka unutrašnjeg sela Gornje Selo na šoltanskoj visoravni. Kroz mletačko i habsburško razdoblje stomorske su obitelji dale naraštaje pomorskih kapetana koji su plovili jadranskim i mediteranskim trgovačkim putovima. U 20. stoljeću selo je prešlo s aktivnog pomorstva na mirniju mješavinu ribolova i turizma.',
  },
  Maslinica: {
    introHr:
      'Maslinica je malo selo na zapadnom vrhu otoka Šolte, jedino naselje na izloženoj zapadnoj obali otoka. Leži u zaštićenoj uvali nasuprot otočićima Sedmero Brata, a njome vlada obalni kaštel obitelji Martinis-Marchi s početka 18. stoljeća. Selo je osnovano 1708. godine, kad je šoltanska plemićka obitelj Martinis dobila dopuštenje mletačkih vlasti da na dotad nenaseljenoj zapadnoj obali sagradi utvrđenu kuću za zaštitu od gusara. Braća su podigla kaštel s pet kula, po jednom za svakog brata, a oko njega je izraslo malo selo koje je živjelo od maslinarstva, po kojem je i nazvano. Kaštel je u 21. stoljeću pažljivo obnovljen kao hotel.',
  },
  Rogač: {
    introHr:
      'Rogač je glavna trajektna luka otoka Šolte, smještena u maloj prirodnoj luci na sjevernoj obali otoka, nasuprot Splitu. Sam Rogač ima manje od 100 stalnih stanovnika, ali je ulaz na otok za svih oko 1700 Šoltana s nekoliko dnevnih polazaka trajekta za automobile iz Splita. Selo se razvilo kao obalni dodatak unutrašnjeg sela Grohote, povijesnog središta otoka. Kao najbliža prirodna luka Splitu, Rogač je bio prirodan izbor kad su krajem 19. i početkom 20. stoljeća parobrodi počeli redovito povezivati Split sa Šoltom. Ime sela istodobno je i hrvatska riječ za drvo rogač, čiji su plodovi nekad služili kao mjera za karat.',
  },
  'Donje Selo': {
    introHr:
      'Donje Selo tradicionalno je unutrašnje selo na otoku Šolti, smješteno na nižim terasama središnje visoravni otoka, s manje od 200 stalnih stanovnika. Ime jednostavno znači niže selo, po uzoru na susjedna Gornje Selo i Srednje Selo. Zajedno s njima i sa središnjim Grohotama Donje Selo činilo je povijesnu jezgru šoltanskog stanovništva; obitelji su na terasastim krškim padinama uzgajale masline, lozu i smokve. Kroz mletačko i habsburško razdoblje gospodarstvom sela vladalo je maslinovo ulje, koje je Šolta u velikim količinama proizvodila za Split i šire. Selo čuva kamenu arhitekturu i maslinike, a uzgoj maslina se nastavlja.',
  },
};
