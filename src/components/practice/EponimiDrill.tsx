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

// C2 eponymous-idioms drill (C2 tranche 7, 2026-08-15): meaning (Ahilova
// peta, Sizifov posao, Pandorina kutija), origin (Bible, Greek myth, Roman
// and Russian history) and usage in modern prose.
const MODE_LABEL: Record<string, string> = {
  znacenje: '💡 Značenje',
  podrijetlo: '📜 Podrijetlo',
  uporaba: '✍️ Uporaba',
};

const DATA = [
  {
    mode: 'znacenje',
    q: '„Ahilova peta” znači:',
    opts: ['ranjivo mjesto', 'snažnu nogu', 'brzinu', 'oklop'],
    answer: 'ranjivo mjesto',
    en: 'Achilles heel = weak spot',
    tip: 'Jedina Ahilova ranjiva točka.',
  },
  {
    mode: 'znacenje',
    q: '„Sizifov posao” znači:',
    opts: ['uzaludan, beskrajan trud', 'lak posao', 'dobro plaćen rad', 'timski rad'],
    answer: 'uzaludan, beskrajan trud',
    en: 'a Sisyphean task',
    tip: 'Kamen se uvijek otkotrlja natrag.',
  },
  {
    mode: 'znacenje',
    q: '„Tantalove muke” znače:',
    opts: ['patnju zbog nedostižne blizine', 'glad općenito', 'tjelovježbu', 'svađu'],
    answer: 'patnju zbog nedostižne blizine',
    en: 'the torments of Tantalus',
    tip: 'Voće i voda izmiču pred rukom.',
  },
  {
    mode: 'znacenje',
    q: '„Pandorina kutija” znači:',
    opts: ['izvor svih nevolja kad se otvori', 'dragocjen dar', 'tajnu ostavu', 'glazbalo'],
    answer: 'izvor svih nevolja kad se otvori',
    en: 'Pandora\u2019s box',
    tip: 'Otvoriti Pandorinu kutiju = pokrenuti lavinu zla.',
  },
  {
    mode: 'znacenje',
    q: '„Damoklov mač” znači:',
    opts: ['stalnu prijetnju nad glavom', 'počasno oružje', 'pobjedu', 'nasljedstvo'],
    answer: 'stalnu prijetnju nad glavom',
    en: 'the sword of Damocles',
    tip: 'Visi o dlaci nad gozbom.',
  },
  {
    mode: 'znacenje',
    q: '„Pirova pobjeda” znači:',
    opts: ['pobjedu skuplju od poraza', 'laku pobjedu', 'varku', 'remi'],
    answer: 'pobjedu skuplju od poraza',
    en: 'a Pyrrhic victory',
    tip: 'Još jedna ovakva i propali smo.',
  },
  {
    mode: 'znacenje',
    q: '„Prokrustova postelja” znači:',
    opts: ['nasilno kalupljenje po mjeri', 'udoban krevet', 'gostoprimstvo', 'odmor'],
    answer: 'nasilno kalupljenje po mjeri',
    en: 'the bed of Procrustes',
    tip: 'Rastezanje ili skraćivanje na silu.',
  },
  {
    mode: 'znacenje',
    q: '„Prijeći Rubikon” znači:',
    opts: ['donijeti nepovratnu odluku', 'preplivati rijeku', 'odustati', 'vratiti se'],
    answer: 'donijeti nepovratnu odluku',
    en: 'to cross the Rubicon',
    tip: 'Kocka je bačena — nema natrag.',
  },
  {
    mode: 'podrijetlo',
    q: '„Judin poljubac” dolazi iz:',
    opts: ['Biblije', 'grčke mitologije', 'rimske povijesti', 'narodne priče'],
    answer: 'Biblije',
    en: 'the kiss of Judas (biblical)',
    tip: 'Izdaja pod krinkom prisnosti.',
  },
  {
    mode: 'podrijetlo',
    q: '„Salomonsko rješenje” dolazi iz:',
    opts: ['Biblije', 'mitologije', 'prava EU', 'filozofije'],
    answer: 'Biblije',
    en: 'a Solomonic solution',
    tip: 'Mudra presuda koja otkriva istinu.',
  },
  {
    mode: 'podrijetlo',
    q: '„Trojanski konj” dolazi iz:',
    opts: ['grčke predaje o Troji', 'Biblije', 'rimskoga prava', 'srednjega vijeka'],
    answer: 'grčke predaje o Troji',
    en: 'the Trojan horse',
    tip: 'Dar s neprijateljem unutra; danas i virus.',
  },
  {
    mode: 'podrijetlo',
    q: '„Gordijski čvor” presjekao je:',
    opts: ['Aleksandar Veliki', 'Cezar', 'Odisej', 'Herkul'],
    answer: 'Aleksandar Veliki',
    en: 'the Gordian knot',
    tip: 'Presjeći gordijski čvor = riješiti udarcem.',
  },
  {
    mode: 'podrijetlo',
    q: '„Potemkinova sela” dolaze iz:',
    opts: ['ruske povijesti', 'grčke drame', 'Biblije', 'hrvatske predaje'],
    answer: 'ruske povijesti',
    en: 'Potemkin villages',
    tip: 'Lažna pročelja za caricu — privid blagostanja.',
  },
  {
    mode: 'podrijetlo',
    q: '„Kolumbovo jaje” znači:',
    opts: [
      'naizgled nemoguće, a jednostavno rješenje',
      'skup dar',
      'krhku stvar',
      'otkriće Amerike',
    ],
    answer: 'naizgled nemoguće, a jednostavno rješenje',
    en: 'the egg of Columbus',
    tip: 'Lako je — kad ti netko pokaže.',
  },
  {
    mode: 'podrijetlo',
    q: '„Kanosa” u „ići u Kanosu” znači:',
    opts: ['ponižavajuće pokajanje', 'hodočašće', 'odmor', 'pobjedu'],
    answer: 'ponižavajuće pokajanje',
    en: 'the walk to Canossa',
    tip: 'Henrik IV. bos pred papom.',
  },
  {
    mode: 'podrijetlo',
    q: '„Nojeva arka” označava:',
    opts: ['spas od opće propasti', 'trgovački brod', 'zoološki vrt', 'samu poplavu'],
    answer: 'spas od opće propasti',
    en: 'Noah\u2019s ark = refuge',
    tip: 'Utočište kad sve tone.',
  },
  {
    mode: 'uporaba',
    q: '„Reforma je postala ____ posao — svake godine ispočetka.”',
    opts: ['sizifov', 'ahilov', 'damoklov', 'pirov'],
    answer: 'sizifov',
    en: 'the reform became a Sisyphean task',
    tip: 'Mali početni glagol: sizifov posao (opća uporaba).',
  },
  {
    mode: 'uporaba',
    q: '„Novi zakon visi nad tvrtkama kao ____ mač.”',
    opts: ['Damoklov', 'Ahilov', 'Sizifov', 'Kolumbov'],
    answer: 'Damoklov',
    en: 'hangs like the sword of Damocles',
    tip: 'Stalna prijetnja → Damoklov mač.',
  },
  {
    mode: 'uporaba',
    q: '„Obrana im je ____ peta.”',
    opts: ['Ahilova', 'Pirova', 'Judina', 'Tantalova'],
    answer: 'Ahilova',
    en: 'their defence is their Achilles heel',
    tip: 'Slabost sustava → Ahilova peta.',
  },
  {
    mode: 'uporaba',
    q: '„Ta je pobjeda bila ____ — ostali su bez momčadi.”',
    opts: ['Pirova', 'Salomonska', 'Kolumbova', 'Trojanska'],
    answer: 'Pirova',
    en: 'a Pyrrhic victory indeed',
    tip: 'Preskupa pobjeda → Pirova.',
  },
  {
    mode: 'uporaba',
    q: '„Aplikacija je ušla u sustav kao ____ konj.”',
    opts: ['trojanski', 'gordijski', 'gordij konj', 'potemkinski'],
    answer: 'trojanski',
    en: 'entered like a Trojan horse',
    tip: 'Skriveni neprijatelj u daru.',
  },
  {
    mode: 'uporaba',
    q: '„Sud je izrekao pravo ____ rješenje.”',
    opts: ['salomonsko', 'sizifsko', 'pirovsko', 'tantalsko'],
    answer: 'salomonsko',
    en: 'a truly Solomonic ruling',
    tip: 'Mudra presuda → salomonska.',
  },
  {
    mode: 'uporaba',
    q: '„Ministar je presjekao ____ čvor jednim potezom.”',
    opts: ['gordijski', 'trojanski', 'damoklovski', 'judin'],
    answer: 'gordijski',
    en: 'cut the Gordian knot',
    tip: 'Naizgled nerješivo → jedan potez.',
  },
  {
    mode: 'uporaba',
    q: '„Sve su to ____ sela — iza pročelja ničega nema.”',
    opts: ['potemkinova', 'salomonska', 'kolumbova', 'ahilova'],
    answer: 'potemkinova',
    en: 'Potemkin villages — facades only',
    tip: 'Privid bez sadržaja.',
  },
];

export { DATA as EPONIMI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EponimiDrill({ goBack, award }: Props) {
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
          key: 'eponimi',
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
        {H(
          '🏛️ Frazemi s imenom',
          'Ahilova peta, Sizifov posao — the classics inside Croatian',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — klasici su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje kulturnim frazemima! 💪'
                : 'Frazemi s imenom traže još vježbe.'}
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
      {H(
        '🏛️ Frazemi s imenom',
        'Ahilova peta, Sizifov posao — the classics inside Croatian',
        goBack,
      )}
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
