import React from 'react';
import ModeDrill from './ModeDrill';

// C2 lexical-strata drill (C2 tranche 7, 2026-08-15): archaisms vs
// historicisms (kadsto, jamacno vs kmet, banovina), puristic coinages that
// lived or died (sucelje, poveznica vs brzoglas, munjovoz) and stylistic
// levels (usnuti, zitelj, preminuti, register clash).
const MODE_LABEL: Record<string, string> = {
  arhaizmi: '🏰 Arhaizmi',
  novotvorenice: '🆕 Novotvorenice',
  stilemi: '🎭 Stilemi',
};

const DATA = [
  {
    mode: 'arhaizmi',
    q: 'Arhaizam „kadšto” danas znači:',
    opts: ['katkad, ponekad', 'nikad', 'odmah', 'zauvijek'],
    answer: 'katkad, ponekad',
    en: 'kadšto = sometimes (archaic)',
    tip: 'Živ u starijoj prozi.',
  },
  {
    mode: 'arhaizmi',
    q: 'Arhaizam „jamačno” znači:',
    opts: ['sigurno, zacijelo', 'možda', 'nikako', 'glasno'],
    answer: 'sigurno, zacijelo',
    en: 'jamačno = surely (archaic)',
    tip: 'Od jamčiti — jamačno će doći.',
  },
  {
    mode: 'arhaizmi',
    q: '„Uljudba” je starija riječ za:',
    opts: ['civilizaciju', 'uljudnost samo', 'odjeću', 'vladu'],
    answer: 'civilizaciju',
    en: 'uljudba = civilization',
    tip: 'Purističko 19. stoljeće.',
  },
  {
    mode: 'arhaizmi',
    q: '„Ino” u „i ino” znači:',
    opts: ['drugo, ostalo', 'vino', 'jedno', 'strano'],
    answer: 'drugo, ostalo',
    en: 'ino = other (archaic)',
    tip: 'I ino = i ostalo; otuda inozemstvo!',
  },
  {
    mode: 'arhaizmi',
    q: '„Cesar” je stariji lik riječi:',
    opts: ['car', 'cesta', 'census', 'čast'],
    answer: 'car',
    en: 'cesar = emperor (older form)',
    tip: 'Od latinskoga Caesar; danas car.',
  },
  {
    mode: 'arhaizmi',
    q: 'Historizam „kmet” označava:',
    opts: ['zavisna seljaka u feudalizmu', 'današnjeg farmera', 'vojnika', 'trgovca'],
    answer: 'zavisna seljaka u feudalizmu',
    en: 'kmet = serf (historicism)',
    tip: 'Nestala stvarnost, ne riječ — to je historizam.',
  },
  {
    mode: 'arhaizmi',
    q: 'Historizam „banovina” označava:',
    opts: ['upravnu jedinicu pod banom', 'vrstu kolača', 'planinu', 'valutu'],
    answer: 'upravnu jedinicu pod banom',
    en: 'banovina = banate',
    tip: 'Povijesna hrvatska uprava.',
  },
  {
    mode: 'arhaizmi',
    q: 'Arhaizam od historizma razlikuje se time što:',
    opts: [
      'arhaizam ima suvremenu zamjenu, historizam nema',
      'historizam je noviji',
      'arhaizam je stran',
      'razlike nema',
    ],
    answer: 'arhaizam ima suvremenu zamjenu, historizam nema',
    en: 'archaism vs historicism',
    tip: 'Kadšto→katkad (arh.); kmet→— (hist.).',
  },
  {
    mode: 'novotvorenice',
    q: '„Uspješnica” je novotvorenica za:',
    opts: ['hit, bestseler', 'uspjeh', 'sretnu osobu', 'pjesmu samo'],
    answer: 'hit, bestseler',
    en: 'uspješnica = bestseller',
    tip: 'Domaća zamjena za bestseler.',
  },
  {
    mode: 'novotvorenice',
    q: '„Sučelje” je hrvatska riječ za:',
    opts: ['interface', 'sukob', 'lice', 'prozor'],
    answer: 'interface',
    en: 'a Croatian coinage from computing',
    tip: 'Računalno nazivlje.',
  },
  {
    mode: 'novotvorenice',
    q: '„Poveznica” znači:',
    opts: ['link', 'vezu vlakova', 'kravatu', 'poštu'],
    answer: 'link',
    en: 'poveznica = hyperlink',
    tip: 'Otvori poveznicu u novoj kartici.',
  },
  {
    mode: 'novotvorenice',
    q: '„Sučelje” je novotvorenica za:',
    opts: ['interface', 'surface', 'meeting', 'face'],
    answer: 'interface',
    en: 'a Croatian computing coinage',
    tip: 'Su- + lice → sučelje; zaživjelo je.',
  },
  {
    mode: 'novotvorenice',
    q: '„Osjećajnik” (emotikon) pokazuje da novotvorenice:',
    opts: [
      'prevode strane pojmove domaćim tvorbama',
      'zabranjuju strane riječi',
      'uvijek uspiju',
      'dolaze iz latinskoga',
    ],
    answer: 'prevode strane pojmove domaćim tvorbama',
    en: 'coinages render foreign concepts',
    tip: 'Neke zažive (sučelje), neke ne (osjećajnik).',
  },
  {
    mode: 'novotvorenice',
    q: '„Brzoglas” je bio pokušaj zamjene za:',
    opts: ['telefon', 'radio', 'brzinu', 'glasnoću'],
    answer: 'telefon',
    en: 'brzoglas = telephone (failed coinage)',
    tip: 'Puristička zamjena; nije zaživjela.',
  },
  {
    mode: 'novotvorenice',
    q: '„Zrakoplov” prema „avion” pokazuje:',
    opts: [
      'da domaća i strana riječ mogu supostojati',
      'da je avion zabranjen',
      'da je zrakoplov žargon',
      'da su različita vozila',
    ],
    answer: 'da domaća i strana riječ mogu supostojati',
    en: 'zrakoplov and avion coexist',
    tip: 'Zrakoplov (birano) / avion (općeuporabno).',
  },
  {
    mode: 'novotvorenice',
    q: '„Munjovoz” (tramvaj) svjedoči da purizam:',
    opts: ['katkad rodi neprihvaćene kovanice', 'uvijek pobijedi', 'ne postoji', 'dolazi izvana'],
    answer: 'katkad rodi neprihvaćene kovanice',
    en: 'munjovoz — the coinage that failed',
    tip: 'Munja + voziti; ostao je tramvaj.',
  },
  {
    mode: 'stilemi',
    q: '„Usnuti” prema „zaspati” je:',
    opts: ['pjesnički stilem', 'žargon', 'vulgarizam', 'historizam'],
    answer: 'pjesnički stilem',
    en: 'usnuti = to fall asleep (poetic)',
    tip: 'Poetski leksik: usnuti, cjelov, mnijeti.',
  },
  {
    mode: 'stilemi',
    q: '„Cjelov” je pjesnička riječ za:',
    opts: ['poljubac', 'cijelost', 'pozdrav', 'zagrljaj'],
    answer: 'poljubac',
    en: 'cjelov = kiss (poetic)',
    tip: 'Riječ lirike 19. st.; usp. cjelivati.',
  },
  {
    mode: 'stilemi',
    q: '„Mnijeti” znači:',
    opts: ['misliti, smatrati', 'mijenjati', 'šutjeti', 'pamtiti'],
    answer: 'misliti, smatrati',
    en: 'mnijeti = to opine (archaic/poetic)',
    tip: 'Otuda mnijenje (javno mnijenje).',
  },
  {
    mode: 'stilemi',
    q: '„Žitelj” prema „stanovnik” pripada:',
    opts: ['administrativno-svečanomu sloju', 'žargonu', 'dijalektu', 'dječjem govoru'],
    answer: 'administrativno-svečanomu sloju',
    en: 'žitelj = inhabitant (formal)',
    tip: 'Žitelji općine — svečano-službeno.',
  },
  {
    mode: 'stilemi',
    q: '„Tata” prema „otac” pripada:',
    opts: ['obiteljsko-razgovornomu sloju', 'službenomu', 'pjesničkomu', 'arhaičnomu'],
    answer: 'obiteljsko-razgovornomu sloju',
    en: 'tata vs otac (register)',
    tip: 'Otac (neutralno/službeno), tata (prisno).',
  },
  {
    mode: 'stilemi',
    q: '„Preminuti” prema „umrijeti” je:',
    opts: ['eufemizam višega registra', 'žargon', 'arhaizam bez zamjene', 'pogreška'],
    answer: 'eufemizam višega registra',
    en: 'preminuti = to pass away',
    tip: 'Obavijesti i nekrolozi: preminuo je.',
  },
  {
    mode: 'stilemi',
    q: 'Latinizmi poput „konzekvencija” u eseju:',
    opts: [
      'ustupaju mjesto domaćoj riječi (posljedica)',
      'obvezni su',
      'zabranjeni su zakonom',
      'znače drugo',
    ],
    answer: 'ustupaju mjesto domaćoj riječi (posljedica)',
    en: 'prefer posljedica to konzekvencija',
    tip: 'Standard voli prozirnu domaću riječ.',
  },
  {
    mode: 'stilemi',
    q: 'Miješanje slojeva („dotični frend”) stvara:',
    opts: ['stilski nesklad ili ironiju', 'bolji stil', 'novo značenje', 'pravopisnu pogrešku'],
    answer: 'stilski nesklad ili ironiju',
    en: 'register clash reads as irony',
    tip: 'Administrativno dotični + žargonski frend.',
  },
];

export { DATA as SLOJEVI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SlojeviDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="slojevi"
      title={'🏺 Slojevi leksika'}
      subtitle={'kadšto, uspješnica, sučelje — words with a time stamp'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — svi su slojevi vaši! 🏆',
        good: 'Vrlo dobro snalaženje u slojevima leksika! 💪',
        more: 'Slojevi leksika traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
