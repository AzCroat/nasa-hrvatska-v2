import React from 'react';
import ModeDrill from './ModeDrill';

// C1 aspectual-nuance drill (C1 tranche, 2026-08-14): beyond the B1 basics —
// phase verbs forcing the imperfective, iterative vs single events, aspect in
// instructions/prohibitions, and near-pair nuances natives feel but courses
// rarely teach.
const MODE_LABEL: Record<string, string> = {
  faze: '⏳ Fazni glagoli',
  ponavljanje: '🔁 Jednom ili obično',
  nijansa: '🎚️ Fina razlika',
};

const DATA = [
  {
    mode: 'faze',
    q: 'Počeo je ____ pismo.',
    opts: ['pisati', 'napisati', 'napisao', 'pisao'],
    answer: 'pisati',
    en: 'he began writing the letter',
    tip: 'Fazni glagoli (početi, nastaviti, prestati) traže NESVRŠENI infinitiv.',
  },
  {
    mode: 'faze',
    q: 'Prestani ____ i poslušaj me!',
    opts: ['pričati', 'ispričati', 'reći', 'kazati'],
    answer: 'pričati',
    en: 'stop talking and listen to me',
    tip: 'Prestati + nesvršeni: prestani pričati.',
  },
  {
    mode: 'faze',
    q: 'Nastavili smo ____ unatoč kiši.',
    opts: ['hodati', 'dohodati', 'doći', 'stići'],
    answer: 'hodati',
    en: 'we kept walking despite the rain',
    tip: 'Nastaviti + nesvršeni: nastaviti hodati.',
  },
  {
    mode: 'faze',
    q: 'Upravo ____ večeru kad si nazvao.',
    opts: ['sam kuhala', 'sam skuhala', 'skuham', 'bih skuhala'],
    answer: 'sam kuhala',
    en: 'I was just cooking dinner when you called',
    tip: 'Radnja u tijeku (pozadina) = nesvršeni: kuhala sam.',
  },
  {
    mode: 'faze',
    q: 'Dok je ____, netko je pokucao.',
    opts: ['čitala', 'pročitala', 'pročita', 'čitati'],
    answer: 'čitala',
    en: 'while she was reading, someone knocked',
    tip: 'Dok + trajanje = nesvršeni; upad u radnju = svršeni (pokucao).',
  },
  {
    mode: 'faze',
    q: 'Konačno je ____ roman — nakon tri godine!',
    opts: ['dovršila', 'dovršavala', 'vršila', 'završavala'],
    answer: 'dovršila',
    en: 'she finally finished the novel — after three years',
    tip: 'Rezultat postignut = svršeni: dovršiti.',
  },
  {
    mode: 'faze',
    q: 'Nemoj ____ vrata — hladno je!',
    opts: ['otvarati', 'otvoriti', 'otvorio', 'otvaraj'],
    answer: 'otvarati',
    en: 'do not keep opening the door — it is cold',
    tip: 'Zabrana radnje uopće → nesvršeni: nemoj otvarati.',
  },
  {
    mode: 'faze',
    q: 'Samo nemoj ____ lozinku — jednom je dovoljno.',
    opts: ['zaboraviti', 'zaboravljati', 'zaboravio', 'zaboravi'],
    answer: 'zaboraviti',
    en: 'just do not forget the password — once would be enough',
    tip: 'Zabrana JEDNOG čina → svršeni: nemoj zaboraviti.',
  },
  {
    mode: 'ponavljanje',
    q: 'Svakog jutra ____ kavu na balkonu.',
    opts: ['pijem', 'popijem', 'popila sam', 'ispijem'],
    answer: 'pijem',
    en: 'every morning I drink coffee on the balcony',
    tip: 'Navika/ponavljanje = nesvršeni: pijem.',
  },
  {
    mode: 'ponavljanje',
    q: 'Jučer sam ____ dvije kave i nisam spavala.',
    opts: ['popila', 'pila', 'ispijala', 'popijala'],
    answer: 'popila',
    en: 'yesterday I drank two coffees and could not sleep',
    tip: 'Dovršen, izbrojiv čin = svršeni: popiti.',
  },
  {
    mode: 'ponavljanje',
    q: 'Kao dijete ____ bakama svako ljeto.',
    opts: ['odlazio sam', 'otišao sam', 'odem', 'otiđem'],
    answer: 'odlazio sam',
    en: 'as a child I used to go to my grandmothers every summer',
    tip: 'Ponavljana prošla radnja = nesvršeni: odlazio sam.',
  },
  {
    mode: 'ponavljanje',
    q: 'Sinoć je ____ i odmah zaspao.',
    opts: ['legao', 'lijegao', 'ležao', 'polegnuo'],
    answer: 'legao',
    en: 'last night he lay down and fell asleep immediately',
    tip: 'Jedan svršen čin: leći → legao (lijegati = ponavljano).',
  },
  {
    mode: 'ponavljanje',
    q: 'Baka bi nam uvijek ____ priče prije spavanja.',
    opts: ['pričala', 'ispričala', 'rekla', 'kazala'],
    answer: 'pričala',
    en: 'grandma would always tell us stories before bed',
    tip: 'Habitualno „bi + pridjev radni” ide s nesvršenim: pričala bi.',
  },
  {
    mode: 'ponavljanje',
    q: '____ li ikad na Velebit? (općenito iskustvo)',
    opts: ['Penjete se', 'Popnete se', 'Popeli ste se', 'Uspnete se'],
    answer: 'Penjete se',
    en: 'do you ever climb Velebit?',
    tip: 'Općenito/ikad = nesvršeni prezent: penjete li se ikad…',
  },
  {
    mode: 'ponavljanje',
    q: 'Kad god dođe, ____ nam nešto slatko.',
    opts: ['donese', 'donosi', 'donio je', 'nosio je'],
    answer: 'donese',
    en: 'whenever he comes, he brings us something sweet',
    tip: 'U pogodbeno-vremenskim „kad god” rečenicama svršeni prezent izriče svaki pojedinačni čin.',
  },
  {
    mode: 'ponavljanje',
    q: 'Cijelo smo poslijepodne ____ stan.',
    opts: ['uređivali', 'uredili', 'sredili', 'dotjerali'],
    answer: 'uređivali',
    en: 'we spent the whole afternoon tidying the flat',
    tip: 'Trajanje („cijelo poslijepodne”) = nesvršeni: uređivali smo.',
  },
  {
    mode: 'nijansa',
    q: 'On godinama ____ taj problem. (bezuspješno)',
    opts: ['rješava', 'riješi', 'riješio je', 'razriješi'],
    answer: 'rješava',
    en: 'he has been (unsuccessfully) solving that problem for years',
    tip: 'Proces bez rezultata = nesvršeni: rješava (riješiti = uspjeti).',
  },
  {
    mode: 'nijansa',
    q: '____ sam ti reći nešto važno. (pokušaj u prošlosti)',
    opts: ['Htio', 'Htjednuo', 'Hoću', 'Ushtio'],
    answer: 'Htio',
    en: 'I meant to tell you something important',
    tip: 'Htio sam (nesvršeno htijenje) — namjera koja se nije ostvarila.',
  },
  {
    mode: 'nijansa',
    q: 'Vlak samo što nije ____.',
    opts: ['stigao', 'stizao', 'dolazio', 'pristizao'],
    answer: 'stigao',
    en: 'the train is just about to arrive',
    tip: '„Samo što nije” + svršeni — neposredna budućnost.',
  },
  {
    mode: 'nijansa',
    q: 'Godinama je ____ pisma, a nikad ih nije poslao.',
    opts: ['pisao', 'napisao', 'ispisao', 'zapisao'],
    answer: 'pisao',
    en: 'for years he wrote letters and never sent them',
    tip: 'Ponavljano/trajno bez naglaska na dovršetku = nesvršeni.',
  },
  {
    mode: 'nijansa',
    q: 'Dođi sutra — dotad ću sve ____.',
    opts: ['pripremiti', 'pripremati', 'spremati', 'pripravljati'],
    answer: 'pripremiti',
    en: 'come tomorrow — by then I will have prepared everything',
    tip: 'Rok („dotad”) traži svršeni: pripremiti do tada.',
  },
  {
    mode: 'nijansa',
    q: 'Ne ____ mi — sve sam vidjela!',
    opts: ['laži', 'slaži', 'lagao', 'izlaži'],
    answer: 'laži',
    en: 'do not lie to me — I saw everything',
    tip: 'Niječni imperativ redovito ide s nesvršenim: ne laži.',
  },
  {
    mode: 'nijansa',
    q: '____ prozor, molim te. (jednokratna zamolba)',
    opts: ['Zatvori', 'Zatvaraj', 'Zatvarati', 'Pozatvaraj'],
    answer: 'Zatvori',
    en: 'close the window, please',
    tip: 'Jedan čin u potvrdnom imperativu = svršeni: zatvori.',
  },
  {
    mode: 'nijansa',
    q: 'Dugo smo se ____, a onda smo se napokon našli.',
    opts: ['dogovarali', 'dogovorili', 'sporazumjeli', 'nagodili'],
    answer: 'dogovarali',
    en: 'we negotiated for a long time and then finally agreed',
    tip: 'Proces = dogovarati se; rezultat = dogovoriti se / naći se.',
  },
];

export { DATA as VIDNIJANSE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VidNijanseDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vidnijanse"
      title={'🔀 Vid — nijanse'}
      subtitle={'pisati ili napisati — aspect the native way'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — vid vam je u uhu! 🏆',
        good: 'Vrlo dobro osjećanje vidskih nijansa! 💪',
        more: 'Vidski parovi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
