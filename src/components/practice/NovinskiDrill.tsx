import React from 'react';
import ModeDrill from './ModeDrill';

// C2 journalese drill (C2 tranche 6, 2026-08-15): headline grammar
// (dropped auxiliaries, nominal and passive headlines, headline present),
// decoding newsroom metaphors and formulas (zeleno svjetlo, mrtva tocka,
// izvori bliski...), and register conventions (navodno, lead, hedged
// conditional).
const MODE_LABEL: Record<string, string> = {
  naslovi: '🗞️ Naslovi',
  dekod: '🔍 Dekodiranje',
  stil: '🖋️ Stil',
};

const DATA = [
  {
    mode: 'naslovi',
    q: 'Naslov „Vlada povisila mirovine” izostavlja:',
    opts: ['pomoćni glagol (je)', 'subjekt', 'objekt', 'prijedlog'],
    answer: 'pomoćni glagol (je)',
    en: 'headline drops the auxiliary',
    tip: 'Novinski perfekt bez je: Vlada (je) povisila.',
  },
  {
    mode: 'naslovi',
    q: 'Naslov „Dinamo prvak!” izostavlja:',
    opts: ['glagol biti (je postao)', 'subjekt', 'pridjev', 'veznik'],
    answer: 'glagol biti (je postao)',
    en: 'headline drops the copula',
    tip: 'Imenski naslov: Dinamo (je) prvak.',
  },
  {
    mode: 'naslovi',
    q: '„Potres pogodio Zagreb” u punoj rečenici glasi:',
    opts: [
      'Potres je pogodio Zagreb.',
      'Potres pogodit Zagreb.',
      'Potres bi pogodio Zagreb.',
      'Zagreb pogodio potres je.',
    ],
    answer: 'Potres je pogodio Zagreb.',
    en: 'an earthquake hit Zagreb',
    tip: 'Vrati ispušteno je.',
  },
  {
    mode: 'naslovi',
    q: 'Naslov „U tijeku pregovori o plaćama” počiva na:',
    opts: ['imenskom (bezglagolskom) izrazu', 'aoristu', 'imperativu', 'kondicionalu'],
    answer: 'imenskom (bezglagolskom) izrazu',
    en: 'a verbless nominal headline',
    tip: 'Pregovori su u tijeku → U tijeku pregovori.',
  },
  {
    mode: 'naslovi',
    q: '„Cijene ____ nakon blagdana” (tipičan naslovni prezent)',
    opts: ['padaju', 'su pale bile', 'bijahu pale', 'padoše davno'],
    answer: 'padaju',
    en: 'prices fall after the holidays',
    tip: 'Naslovni prezent za svježe vijesti.',
  },
  {
    mode: 'naslovi',
    q: 'Upitni naslov „Kraj krize?” sugerira:',
    opts: ['neizvjesnost i poziv na čitanje', 'potvrdu činjenice', 'zapovijed', 'ispriku'],
    answer: 'neizvjesnost i poziv na čitanje',
    en: 'a question headline hooks the reader',
    tip: 'Upitnik prodaje neizvjesnost.',
  },
  {
    mode: 'naslovi',
    q: '„Uhićen osumnjičeni za prijevaru” — oblik „uhićen” je:',
    opts: ['trpni pridjev bez pomoćnoga glagola', 'aorist', 'prilog', 'imperativ'],
    answer: 'trpni pridjev bez pomoćnoga glagola',
    en: 'arrested: passive with dropped aux',
    tip: '(Je) uhićen — pasivni naslov bez je.',
  },
  {
    mode: 'naslovi',
    q: 'Zašto naslovi vole pasiv („Zakon izglasan”)?',
    opts: ['vršitelj je nevažan ili poznat', 'pasiv je duži', 'zabranjen je aktiv', 'zbog rime'],
    answer: 'vršitelj je nevažan ili poznat',
    en: 'passives foreground the event',
    tip: 'Bitno je ŠTO se dogodilo, ne tko je digao ruku.',
  },
  {
    mode: 'dekod',
    q: '„Sabor dao zeleno svjetlo proračunu” znači:',
    opts: ['odobrio je proračun', 'ugasio je svjetla', 'vratio je proračun', 'odgodio je sjednicu'],
    answer: 'odobrio je proračun',
    en: 'gave the green light = approved',
    tip: 'Novinska metafora odobravanja.',
  },
  {
    mode: 'dekod',
    q: '„Cijene idu u nebo” znači:',
    opts: ['naglo rastu', 'padaju', 'miruju', 'ukinute su'],
    answer: 'naglo rastu',
    en: 'prices are skyrocketing',
    tip: 'Metafora vertikale: u nebo = strmoglav rast.',
  },
  {
    mode: 'dekod',
    q: '„Pregovori na mrtvoj točki” znači:',
    opts: ['zastali su bez pomaka', 'uspješno su završeni', 'tek počinju', 'tajni su'],
    answer: 'zastali su bez pomaka',
    en: 'talks at a standstill',
    tip: 'Mrtva točka = zastoj.',
  },
  {
    mode: 'dekod',
    q: '„Vlada pod povećalom javnosti” znači:',
    opts: [
      'javnost je pomno promatra',
      'vlada kupuje povećala',
      'javnost je ravnodušna',
      'vlada je raspuštena',
    ],
    answer: 'javnost je pomno promatra',
    en: 'under public scrutiny',
    tip: 'Pod povećalom = pod strogim nadzorom.',
  },
  {
    mode: 'dekod',
    q: '„Rekordna berba oborila sve rekorde” je primjer:',
    opts: ['pleonazma (nepotrebna ponavljanja)', 'metafore', 'arhaizma', 'eufemizma'],
    answer: 'pleonazma (nepotrebna ponavljanja)',
    en: 'a tautology in journalism',
    tip: 'Rekordna + oborila rekorde = dvaput isto.',
  },
  {
    mode: 'dekod',
    q: '„Izvori bliski vladi tvrde…” signalizira:',
    opts: ['neslužbenu, neimenovanu informaciju', 'službenu objavu', 'zakon', 'sudsku presudu'],
    answer: 'neslužbenu, neimenovanu informaciju',
    en: 'sources close to the government',
    tip: 'Novinarska formula za neimenovane izvore.',
  },
  {
    mode: 'dekod',
    q: '„U žiži interesa” znači:',
    opts: ['u središtu pozornosti', 'na rubu', 'u tajnosti', 'izvan teme'],
    answer: 'u središtu pozornosti',
    en: 'in the spotlight',
    tip: 'Žiža = fokus.',
  },
  {
    mode: 'dekod',
    q: '„Ministar odbacio optužbe” — „odbacio” ovdje znači:',
    opts: ['zanijekao je', 'bacio je u koš', 'prihvatio je', 'proslijedio je'],
    answer: 'zanijekao je',
    en: 'dismissed the accusations',
    tip: 'Odbaciti optužbe = zanijekati.',
  },
  {
    mode: 'stil',
    q: 'Novinski stil od standarda traži:',
    opts: ['sažetost i provjerljivost', 'žargon', 'osobne uvrede', 'duge rečenice'],
    answer: 'sažetost i provjerljivost',
    en: 'concision and verifiability',
    tip: 'Kratko, točno, provjerljivo.',
  },
  {
    mode: 'stil',
    q: '„Navodno” u vijesti signalizira:',
    opts: ['nepotvrđenu tvrdnju', 'sigurnu činjenicu', 'ironiju', 'zapovijed'],
    answer: 'nepotvrđenu tvrdnju',
    en: 'allegedly = unconfirmed',
    tip: 'Ograda od neprovjerenoga.',
  },
  {
    mode: 'stil',
    q: 'Lead (glava vijesti) odgovara na:',
    opts: ['tko, što, kada, gdje, zašto', 'samo zašto', 'samo tko', 'ništa od toga'],
    answer: 'tko, što, kada, gdje, zašto',
    en: 'the 5W lead',
    tip: 'Pet novinarskih pitanja u prvom odlomku.',
  },
  {
    mode: 'stil',
    q: '„Kako doznajemo” u vijesti je:',
    opts: ['novinarska formula ekskluzivnosti', 'citat čitatelja', 'zakon', 'pravopisno pravilo'],
    answer: 'novinarska formula ekskluzivnosti',
    en: 'as we have learned (exclusive)',
    tip: 'Signal vlastita izvora redakcije.',
  },
  {
    mode: 'stil',
    q: 'Senzacionalistički naslov prepoznajemo po:',
    opts: ['pretjeranim riječima (šok, drama, hit)', 'brojkama', 'navodnicima izvora', 'datumu'],
    answer: 'pretjeranim riječima (šok, drama, hit)',
    en: 'clickbait markers',
    tip: 'Šok! Drama! Nećete vjerovati!',
  },
  {
    mode: 'stil',
    q: '„Priopćenje za javnost” je:',
    opts: ['službena pisana izjava institucije', 'trač', 'anonimno pismo', 'oglas'],
    answer: 'službena pisana izjava institucije',
    en: 'a press release',
    tip: 'Institucionalni izvor vijesti.',
  },
  {
    mode: 'stil',
    q: 'Kondicional u „Porezi bi mogli rasti” izriče:',
    opts: ['oprez prema neprovjerenom', 'sigurnost', 'prošlost', 'zapovijed'],
    answer: 'oprez prema neprovjerenom',
    en: 'taxes might rise — hedged',
    tip: 'Novinarski kondicional ograde.',
  },
  {
    mode: 'stil',
    q: 'Razlika vijesti i komentara:',
    opts: [
      'vijest iznosi činjenice, komentar stav',
      'vijest je dulja',
      'komentar nema autora',
      'nema razlike',
    ],
    answer: 'vijest iznosi činjenice, komentar stav',
    en: 'news reports, commentary opines',
    tip: 'Odvajanje informacije od mišljenja.',
  },
];

export { DATA as NOVINSKI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NovinskiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="novinski"
      title={'📰 Novinski stil'}
      subtitle={'Vlada povisila mirovine — reading between the headlines'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — novine su vaše! 🏆',
        good: 'Vrlo dobro čitanje novinskoga stila! 💪',
        more: 'Novinski stil traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
