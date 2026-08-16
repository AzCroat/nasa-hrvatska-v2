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

// B2 spatial-prepositions drill (B2 tranche 5, 2026-08-15): direction vs
// location — u/na + A (kamo) vs + L (gdje), pod/nad/pred/za + A vs + I,
// and the paired systems (u/iz, na/s, k/kod).
const MODE_LABEL: Record<string, string> = {
  kamo: '➡️ Kamo?',
  gdje: '📍 Gdje?',
  parovi: '🔁 Parovi',
};

const DATA = [
  {
    mode: 'kamo',
    q: 'Idem ____ školu. (smjer)',
    opts: ['u', 'na', 'k', 'iz'],
    answer: 'u',
    en: 'I am going to school',
    tip: 'Smjer (kamo?) → u + AKUZATIV: u školu.',
  },
  {
    mode: 'kamo',
    q: 'Stavio sam knjigu ____ stol.',
    opts: ['na', 'u', 'o', 'k'],
    answer: 'na',
    en: 'I put the book on the table',
    tip: 'Smjer → na + akuzativ: na stol.',
  },
  {
    mode: 'kamo',
    q: 'Mačka se zavukla ____ krevet. (smjer)',
    opts: ['pod', 'po', 'na', 'pri'],
    answer: 'pod',
    en: 'the cat crawled under the bed',
    tip: 'Smjer → pod + akuzativ: pod krevet.',
  },
  {
    mode: 'kamo',
    q: 'Nadvili su se oblaci ____ grad.',
    opts: ['nad', 'na', 'o', 'u'],
    answer: 'nad',
    en: 'clouds gathered over the city',
    tip: 'Smjer → nad + akuzativ: nad grad.',
  },
  {
    mode: 'kamo',
    q: 'Stao je ____ ploču. (smjer)',
    opts: ['pred', 'prije', 'pored', 'po'],
    answer: 'pred',
    en: 'he stepped in front of the board',
    tip: 'Smjer → pred + akuzativ: pred ploču.',
  },
  {
    mode: 'kamo',
    q: 'Idemo ____ more ovog ljeta.',
    opts: ['na', 'u', 'k', 'o'],
    answer: 'na',
    en: 'we are going to the seaside this summer',
    tip: 'Na more, na Hvar, na fakultet — ustaljeno NA + A.',
  },
  {
    mode: 'kamo',
    q: 'Sakrio se ____ zavjesu. (smjer)',
    opts: ['za', 'iza', 'od', 'po'],
    answer: 'za',
    en: 'he hid behind the curtain (motion)',
    tip: 'Smjer → za + akuzativ (iza bi tražio genitiv).',
  },
  {
    mode: 'kamo',
    q: 'Na pitanje „kamo?” prijedlozi u/na traže:',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'instrumental'],
    answer: 'akuzativ',
    en: 'kamo? takes the accusative',
    tip: 'Kamo ideš? U grad, na trg — akuzativ smjera.',
  },
  {
    mode: 'gdje',
    q: 'Učim ____ školi. (mjesto)',
    opts: ['u', 'na', 'o', 'pri'],
    answer: 'u',
    en: 'I study at school',
    tip: 'Mjesto (gdje?) → u + LOKATIV: u školi.',
  },
  {
    mode: 'gdje',
    q: 'Knjiga je ____ stolu.',
    opts: ['na', 'u', 'o', 'za'],
    answer: 'na',
    en: 'the book is on the table',
    tip: 'Mjesto → na + lokativ: na stolu.',
  },
  {
    mode: 'gdje',
    q: 'Mačka spava ____ krevetom.',
    opts: ['pod', 'po', 'nad', 'u'],
    answer: 'pod',
    en: 'the cat sleeps under the bed',
    tip: 'Mjesto → pod + INSTRUMENTAL: pod krevetom.',
  },
  {
    mode: 'gdje',
    q: 'Zrakoplov kruži ____ gradom.',
    opts: ['nad', 'na', 'po', 'o'],
    answer: 'nad',
    en: 'the plane circles above the city',
    tip: 'Mjesto → nad + instrumental: nad gradom.',
  },
  {
    mode: 'gdje',
    q: 'Stoji ____ pločom.',
    opts: ['pred', 'prije', 'pri', 'po'],
    answer: 'pred',
    en: 'he stands in front of the board',
    tip: 'Mjesto → pred + instrumental: pred pločom.',
  },
  {
    mode: 'gdje',
    q: 'Ljetujemo ____ moru.',
    opts: ['na', 'u', 'o', 'k'],
    answer: 'na',
    en: 'we spend summers at the seaside',
    tip: 'Ljetovati NA moru (u moru = u vodi!).',
  },
  {
    mode: 'gdje',
    q: 'Ključ je ____ vratima. (iza njih, mirovanje)',
    opts: ['za', 'iza', 'kod', 'o'],
    answer: 'za',
    en: 'the key is behind the door',
    tip: 'Mirovanje → za + instrumental (iza bi tražio genitiv).',
  },
  {
    mode: 'gdje',
    q: 'Na pitanje „gdje?” prijedlozi pod/nad/pred/za traže:',
    opts: ['instrumental', 'akuzativ', 'lokativ', 'genitiv'],
    answer: 'instrumental',
    en: 'gdje? takes the instrumental with pod/nad/pred/za',
    tip: 'Pod krevetom, nad gradom, pred kućom, za stolom.',
  },
  {
    mode: 'parovi',
    q: '„Idem u grad” prema „živim u gradu” pokazuje razliku:',
    opts: ['smjer (A) i mjesto (L)', 'vremena i mjesta', 'uzroka i cilja', 'roda i broja'],
    answer: 'smjer (A) i mjesto (L)',
    en: 'direction vs location',
    tip: 'Isti prijedlog, drugi padež — kamo/gdje.',
  },
  {
    mode: 'parovi',
    q: 'Sjedimo ____ stolom i razgovaramo.',
    opts: ['za', 'na', 'u', 'o'],
    answer: 'za',
    en: 'we sit at the table talking',
    tip: 'Za stolom (mjesto, I); sjesti ZA STOL (smjer, A).',
  },
  {
    mode: 'parovi',
    q: 'Sjeo je ____ stol.',
    opts: ['za', 'u', 'o', 'k'],
    answer: 'za',
    en: 'he sat down at the table',
    tip: 'Smjer → za + akuzativ: sjesti za stol.',
  },
  {
    mode: 'parovi',
    q: 'Prolazimo ____ mostom. (ispod njega)',
    opts: ['pod', 'po', 'preko', 'na'],
    answer: 'pod',
    en: 'we pass under the bridge',
    tip: 'Kretanje ispod = pod + instrumental.',
  },
  {
    mode: 'parovi',
    q: 'Izašao je ____ kuće.',
    opts: ['iz', 'od', 's', 'u'],
    answer: 'iz',
    en: 'he came out of the house',
    tip: 'Iz + genitiv — par prijedloga u (u kuću/iz kuće).',
  },
  {
    mode: 'parovi',
    q: 'Vraćam se ____ posla.',
    opts: ['s', 'sa', 'iz', 'od'],
    answer: 's',
    en: 'I am coming back from work',
    tip: 'Na posao → s posla; „sa” samo ispred s/š/z/ž.',
  },
  {
    mode: 'parovi',
    q: 'Idem ____ liječniku.',
    opts: ['k', 'kod', 'u', 'na'],
    answer: 'k',
    en: 'I am going to the doctor',
    tip: 'Smjer prema osobi: k + dativ (k liječniku).',
  },
  {
    mode: 'parovi',
    q: 'Bio sam ____ liječnika.',
    opts: ['kod', 'k', 'u', 'od'],
    answer: 'kod',
    en: 'I was at the doctor',
    tip: 'Mjesto kod osobe: kod + genitiv.',
  },
];

export { DATA as PROSTORNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ProstorniDrill({ goBack, award }: Props) {
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
          key: 'prostorni',
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
          '🧭 Prostorni prijedlozi',
          'u školu / u školi, pod krevet / pod krevetom — direction or location?',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — prostor je vaš! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje prostornim prijedlozima! 💪'
                : 'Prostorni prijedlozi traže još vježbe.'}
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
        '🧭 Prostorni prijedlozi',
        'u školu / u školi, pod krevet / pod krevetom — direction or location?',
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
