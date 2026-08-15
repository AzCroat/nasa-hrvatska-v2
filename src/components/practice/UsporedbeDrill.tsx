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

// C1 comparisons drill (C1 tranche 8, 2026-08-15): kao sto (real) vs kao
// da (hypothetical) vs poput + G, the stock similes (spava kao top, lije
// kao iz kabla) and comparison syntax (kao case agreement, za razliku od,
// u usporedbi s, toliko...koliko).
const MODE_LABEL: Record<string, string> = {
  kaosto: '🔀 Kao što / kao da',
  ustaljene: '🐺 Ustaljene poredbe',
  sintaksa: '📐 Sintaksa',
};

const DATA = [
  {
    mode: 'kaosto',
    q: '„Sve je prošlo ____ smo planirali.” (stvarno)',
    opts: ['kao što', 'kao da', 'nego što', 'kao kad bi'],
    answer: 'kao što',
    en: 'everything went as we planned',
    tip: 'Kao što + stvarna radnja.',
  },
  {
    mode: 'kaosto',
    q: '„Ponaša se ____ je sve u redu.” (a nije)',
    opts: ['kao da', 'kao što', 'nego što', 'jer'],
    answer: 'kao da',
    en: 'he acts as if everything were fine',
    tip: 'Kao da + prividna/nestvarna usporedba.',
  },
  {
    mode: 'kaosto',
    q: '„Umoran sam ____ pas.” (ustaljena poredba)',
    opts: ['kao', 'kao da', 'nego', 'poput da'],
    answer: 'kao',
    en: 'dog-tired',
    tip: 'Kao + imenica u ustaljenim poredbama.',
  },
  {
    mode: 'kaosto',
    q: '„Pjeva ____ slavuja.” (formalno, + G)',
    opts: ['poput', 'kao', 'nego', 'kao što'],
    answer: 'poput',
    en: 'she sings like a nightingale',
    tip: 'Poput + GENITIV — birana poredba.',
  },
  {
    mode: 'kaosto',
    q: '„Kao da” najčešće prati:',
    opts: ['prezent ili perfekt (kao da spava)', 'imperativ', 'aorist', 'optativ'],
    answer: 'prezent ili perfekt (kao da spava)',
    en: 'kao da takes present or perfect',
    tip: 'Kao da ništa nije bilo.',
  },
  {
    mode: 'kaosto',
    q: '„Grad je ljepši ____ sam pamtio.”',
    opts: ['nego što', 'kao što', 'kao da', 'poput'],
    answer: 'nego što',
    en: 'the city is lovelier than I remembered',
    tip: 'Komparativ + nego što + rečenica.',
  },
  {
    mode: 'kaosto',
    q: '„Bolje išta ____ ništa.” (poslovica)',
    opts: ['nego', 'kao', 'poput', 'već'],
    answer: 'nego',
    en: 'better something than nothing',
    tip: 'Nego u poslovičnim usporedbama.',
  },
  {
    mode: 'kaosto',
    q: '„Radi ____ mrav.” — poredba ističe:',
    opts: ['marljivost', 'veličinu', 'brzinu', 'umor'],
    answer: 'marljivost',
    en: 'works like an ant = industrious',
    tip: 'Ustaljene poredbe nose kulturno značenje.',
  },
  {
    mode: 'ustaljene',
    q: '„Spava kao ____ .” (čvrsto)',
    opts: ['top', 'ptica', 'miš', 'vjetar'],
    answer: 'top',
    en: 'sleeps like a log (lit. cannon)',
    tip: 'Spavati kao top/klada.',
  },
  {
    mode: 'ustaljene',
    q: '„Zdrav kao ____ .”',
    opts: ['dren', 'snijeg', 'duga', 'magla'],
    answer: 'dren',
    en: 'fit as a fiddle (lit. cornel tree)',
    tip: 'Zdrav kao dren — narodna poredba.',
  },
  {
    mode: 'ustaljene',
    q: '„Gladan kao ____ .”',
    opts: ['vuk', 'zec', 'golub', 'list'],
    answer: 'vuk',
    en: 'hungry as a wolf',
    tip: 'Gladan kao vuk.',
  },
  {
    mode: 'ustaljene',
    q: '„Tvrdoglav kao ____ .”',
    opts: ['magarac', 'labud', 'oblak', 'jastuk'],
    answer: 'magarac',
    en: 'stubborn as a mule (donkey)',
    tip: 'Tvrdoglav kao magarac/mazga.',
  },
  {
    mode: 'ustaljene',
    q: '„Crven kao ____ .” (od srama)',
    opts: ['rak', 'ugljen', 'vuk', 'dren'],
    answer: 'rak',
    en: 'red as a lobster (crab)',
    tip: 'Pocrvenjeti kao rak.',
  },
  {
    mode: 'ustaljene',
    q: '„Šuti kao ____ .”',
    opts: ['zaliven', 'izliven', 'naliven', 'proliven'],
    answer: 'zaliven',
    en: 'silent as the grave (lit. as if sealed)',
    tip: 'Šutjeti kao zaliven.',
  },
  {
    mode: 'ustaljene',
    q: '„Lije kao iz ____ .” (jaka kiša)',
    opts: ['kabla', 'čaše', 'rijeke', 'žlice'],
    answer: 'kabla',
    en: 'it is pouring (from a bucket)',
    tip: 'Lije kao iz kabla.',
  },
  {
    mode: 'ustaljene',
    q: '„Sličan ____ jaje jajetu.” (potpuno)',
    opts: ['kao', 'poput', 'nego', 'što'],
    answer: 'kao',
    en: 'as alike as two eggs',
    tip: 'Sličan kao jaje jajetu.',
  },
  {
    mode: 'sintaksa',
    q: '„Poput” traži:',
    opts: ['genitiv', 'akuzativ', 'dativ', 'nominativ'],
    answer: 'genitiv',
    en: 'poput takes the genitive',
    tip: 'Poput oca, poput ptice, poput sna.',
  },
  {
    mode: 'sintaksa',
    q: '„Kao” u „radi kao učitelj” izriče:',
    opts: ['svojstvo/ulogu, ne poredbu', 'poredbu', 'želju', 'uzrok'],
    answer: 'svojstvo/ulogu, ne poredbu',
    en: 'kao = in the capacity of',
    tip: 'Radi kao učitelj = on JE učitelj.',
  },
  {
    mode: 'sintaksa',
    q: '„Kao učitelj” prema „kao učitelju” u „Njemu kao učitelju vjeruju”:',
    opts: [
      'kao se slaže s padežom imenice uz koju stoji',
      'kao uvijek traži nominativ',
      'kao traži genitiv',
      'razlike nema',
    ],
    answer: 'kao se slaže s padežom imenice uz koju stoji',
    en: 'kao agrees in case',
    tip: 'Njemu (D) kao učitelju (D).',
  },
  {
    mode: 'sintaksa',
    q: '„Što se tiče brzine, nitko mu nije ____ .”',
    opts: ['ravan', 'kao', 'poput', 'sličniji nego'],
    answer: 'ravan',
    en: 'no one is his equal in speed',
    tip: 'Biti komu ravan + D.',
  },
  {
    mode: 'sintaksa',
    q: '„Za razliku ____ brata, on je tih.”',
    opts: ['od', 'prema', 's', 'nego'],
    answer: 'od',
    en: 'unlike his brother, he is quiet',
    tip: 'Za razliku od + G.',
  },
  {
    mode: 'sintaksa',
    q: '„U usporedbi ____ prošlom godinom, rast je velik.”',
    opts: ['s', 'od', 'na', 'za'],
    answer: 's',
    en: 'compared with last year',
    tip: 'U usporedbi s + I.',
  },
  {
    mode: 'sintaksa',
    q: '„Naspram” u „naspram njega” znači:',
    opts: ['u odnosu na njega / nasuprot njemu', 'zajedno s njim', 'zbog njega', 'poslije njega'],
    answer: 'u odnosu na njega / nasuprot njemu',
    en: 'naspram = as against',
    tip: 'Naspram + G/D — usporedni odnos.',
  },
  {
    mode: 'sintaksa',
    q: '„Nije toliko pametan ____ je uporan.”',
    opts: ['koliko', 'kao', 'nego da', 'što'],
    answer: 'koliko',
    en: 'not so much smart as persistent',
    tip: 'Toliko…koliko — razmjerna usporedba.',
  },
];

export { DATA as USPOREDBE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function UsporedbeDrill({ goBack, award }: Props) {
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
          key: 'usporedbe',
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
        {H('🪞 Usporedbe', 'kao da, kao što, poput sna — the art of comparison', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — usporedbe su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje usporedbama! 💪'
                : 'Usporedbe traže još vježbe.'}
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
      {H('🪞 Usporedbe', 'kao da, kao što, poput sna — the art of comparison', goBack)}
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
