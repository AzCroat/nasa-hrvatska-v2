import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import { useStats } from '../../context/StatsContext';

import { rnd } from '../../lib/random.js';
import { drawDrillRun } from '../../lib/drillRun';
function shLocal<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

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
    en: 'kadsto = sometimes (archaic)',
    tip: 'Živ u starijoj prozi.',
  },
  {
    mode: 'arhaizmi',
    q: 'Arhaizam „jamačno” znači:',
    opts: ['sigurno, zacijelo', 'možda', 'nikako', 'glasno'],
    answer: 'sigurno, zacijelo',
    en: 'jamacno = surely (archaic)',
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
    en: 'uspjesnica = bestseller',
    tip: 'Domaća zamjena za bestseler.',
  },
  {
    mode: 'novotvorenice',
    q: '„Sučelje” je hrvatska riječ za:',
    opts: ['interface', 'sukob', 'lice', 'prozor'],
    answer: 'interface',
    en: 'sucelje = interface',
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
    q: '„Zapozorje” je kazališna novotvorenica za:',
    opts: ['backstage', 'pozornicu', 'gledalište', 'zastor'],
    answer: 'backstage',
    en: 'zapozorje = backstage',
    tip: 'Za + pozornica → zapozorje.',
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
    tip: 'NDH-in purizam; nije zaživio.',
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
    tip: 'Ljubić i lirika 19. st.',
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
    en: 'zitelj = inhabitant (formal)',
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
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    drawDrillRun(DATA).map((item) => ({ ...item, opts: shLocal([...item.opts]) })),
  );
  const total = q.length;
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);

  const cur = q[idx]!;
  const answered = chosen !== null;

  function pick(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === cur.answer) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= total) {
      if (!finishFired.current) {
        finishFired.current = true;
        const res = completeExercise({
          key: 'slojevi',
          score,
          total,
          xp: score * 5,
          stats,
          setStats,
          writeDelta,
          award,
        });
        setPassed(res.passed);
      }
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setChosen(null);
    }
  }

  if (done) {
    return (
      <div className="scr-wrap">
        {H('🏺 Slojevi leksika', 'kadšto, uspješnica, zapozorje — words with a time stamp', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — svi su slojevi vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro snalaženje u slojevima leksika! 💪'
                : 'Slojevi leksika traže još vježbe.'}
          </div>
          {!passed && (
            <button
              className="b bp"
              data-testid="drill-retry"
              style={{ width: '100%', marginBottom: 10 }}
              onClick={() => {
                finishFired.current = false;
                setIdx(0);
                setChosen(null);
                setScore(0);
                setPassed(false);
                setDone(false);
              }}
            >
              🔁 Try again (need 75%)
            </button>
          )}
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scr-wrap">
      {H('🏺 Slojevi leksika', 'kadšto, uspješnica, zapozorje — words with a time stamp', goBack)}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
        <span style={{ fontSize: 13, color: '#64748b', whiteSpace: 'nowrap' }}>
          {idx + 1} / {total}
        </span>
        <Bar v={idx + 1} mx={total} />
      </div>
      <div className="c" style={{ marginTop: 16 }}>
        <div
          style={{
            fontSize: 13,
            color: '#7c3aed',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {MODE_LABEL[cur.mode]}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{cur.q}</div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 14 }}>{cur.en}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {cur.opts.map((opt) => {
            const isCorrect = opt === cur.answer;
            const showState = answered && (isCorrect || opt === chosen);
            return (
              <button
                key={opt}
                onClick={() => pick(opt)}
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: answered ? 'default' : 'pointer',
                  border: showState
                    ? isCorrect
                      ? '2px solid #16a34a'
                      : '2px solid #dc2626'
                    : '1.5px solid var(--card-b)',
                  background: showState ? (isCorrect ? '#f0fdf4' : '#fef2f2') : 'var(--card)',
                  color: 'var(--text)',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div
            style={{
              marginTop: 14,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--bar-bg)',
              fontSize: 13,
              color: 'var(--subtext)',
            }}
          >
            💡 {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 14 }} onClick={next}>
            {idx + 1 >= total ? 'Rezultat →' : 'Dalje →'}
          </button>
        )}
      </div>
    </div>
  );
}
