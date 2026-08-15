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

// B2 comparison drill (B2 tranche 5, 2026-08-15): comparative formation
// (-iji, -ji with jotation, epenthetic l, najj- spelling), suppletives
// (bolji, gori, veci, manji; adverbs vise/manje) and comparison syntax
// (od + G vs nego sto, sto...to, sve + comparative).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  nepravilni: '🃏 Nepravilni',
  usporedba: '⚖️ Usporedba',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „star” glasi:',
    opts: ['stariji', 'starši', 'starejši', 'više star'],
    answer: 'stariji',
    en: 'older',
    tip: 'Većina pridjeva: -iji (stariji, noviji).',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „mlad” glasi:',
    opts: ['mlađi', 'mladiji', 'mladši', 'više mlad'],
    answer: 'mlađi',
    en: 'younger',
    tip: 'Jednosložni s dugim slogom: -ji s jotacijom (d+j → đ).',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „jak” glasi:',
    opts: ['jači', 'jakiji', 'jakši', 'više jak'],
    answer: 'jači',
    en: 'stronger',
    tip: 'K + j → č: jak → jači.',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „drag” glasi:',
    opts: ['draži', 'dragiji', 'dragši', 'više drag'],
    answer: 'draži',
    en: 'dearer',
    tip: 'G + j → ž: drag → draži.',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „tih” glasi:',
    opts: ['tiši', 'tihiji', 'tihši', 'više tih'],
    answer: 'tiši',
    en: 'quieter',
    tip: 'H + j → š: tih → tiši.',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „skup” glasi:',
    opts: ['skuplji', 'skupiji', 'skupši', 'više skup'],
    answer: 'skuplji',
    en: 'more expensive',
    tip: 'P + j → plj (epentetsko l): skuplji.',
  },
  {
    mode: 'tvorba',
    q: 'Superlativ pridjeva „brz” glasi:',
    opts: ['najbrži', 'najbrzniji', 'najviše brz', 'brži naj'],
    answer: 'najbrži',
    en: 'fastest',
    tip: 'Naj- + komparativ: najbrži.',
  },
  {
    mode: 'tvorba',
    q: 'Superlativ od „jednostavan” glasi:',
    opts: ['najjednostavniji', 'najednostavniji', 'naj jednostavniji', 'najjednostavan'],
    answer: 'najjednostavniji',
    en: 'simplest',
    tip: 'Naj + j… piše se s DVA j: najjednostavniji, najjači.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „dobar” glasi:',
    opts: ['bolji', 'dobriji', 'dobrši', 'više dobar'],
    answer: 'bolji',
    en: 'better',
    tip: 'Supletivno: dobar → bolji → najbolji.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „zao/loš” glasi:',
    opts: ['gori', 'zliji', 'lošiji uvijek', 'najzao'],
    answer: 'gori',
    en: 'worse',
    tip: 'Supletivno: zao/loš → gori (lošiji je dopušteno, gori birano).',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „velik” glasi:',
    opts: ['veći', 'velikiji', 'večji', 'više velik'],
    answer: 'veći',
    en: 'bigger',
    tip: 'Supletivno: velik → veći → najveći.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „malen/mali” glasi:',
    opts: ['manji', 'maleniji', 'malji', 'više mali'],
    answer: 'manji',
    en: 'smaller',
    tip: 'Supletivno: malen → manji → najmanji.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ priloga „dobro” glasi:',
    opts: ['bolje', 'dobrije', 'boljije', 'više dobro'],
    answer: 'bolje',
    en: 'better (adverb)',
    tip: 'Dobro → bolje: Danas pjeva bolje.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ priloga „mnogo” glasi:',
    opts: ['više', 'mnogije', 'množe', 'najmnogo'],
    answer: 'više',
    en: 'more',
    tip: 'Mnogo → više → najviše.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ priloga „malo” glasi:',
    opts: ['manje', 'malije', 'majne', 'najmalo'],
    answer: 'manje',
    en: 'less',
    tip: 'Malo → manje → najmanje.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „dug” glasi:',
    opts: ['dulji', 'dugiji', 'dugši', 'duži i dulji nikad'],
    answer: 'dulji',
    en: 'longer',
    tip: 'Dug → dulji (i duži); birani standard voli dulji.',
  },
  {
    mode: 'usporedba',
    q: 'Ivan je viši ____ mene.',
    opts: ['od', 'nego', 'kao', 'za'],
    answer: 'od',
    en: 'Ivan is taller than me',
    tip: 'Od + genitiv: viši od mene.',
  },
  {
    mode: 'usporedba',
    q: 'Ivan je viši ____ što sam mislio.',
    opts: ['nego', 'od', 'kao', 'čim'],
    answer: 'nego',
    en: 'Ivan is taller than I thought',
    tip: 'Ispred rečenice: nego što (ne od).',
  },
  {
    mode: 'usporedba',
    q: 'Ona pjeva ____ kao slavuj.',
    opts: ['lijepo', 'ljepše', 'najljepše', 'više lijepa'],
    answer: 'lijepo',
    en: 'she sings as beautifully as a nightingale',
    tip: 'Jednakost: pozitiv + kao (lijepo kao slavuj).',
  },
  {
    mode: 'usporedba',
    q: 'Što više vježbaš, ____ govoriš.',
    opts: ['to bolje', 'tim bolji', 'to najbolje', 'tako bolje'],
    answer: 'to bolje',
    en: 'the more you practise, the better you speak',
    tip: 'Što + komparativ, TO + komparativ.',
  },
  {
    mode: 'usporedba',
    q: 'Ovaj je film ____ od svih.',
    opts: ['najbolji', 'bolji', 'dobar', 'najbolje'],
    answer: 'najbolji',
    en: 'this film is the best of all',
    tip: 'Superlativ + od svih.',
  },
  {
    mode: 'usporedba',
    q: 'Sve je ____ hladnije. (postupno)',
    opts: ['sve', 'što', 'to', 'naj'],
    answer: 'sve',
    en: 'it is getting colder and colder',
    tip: 'Sve + komparativ = postupno pojačavanje.',
  },
  {
    mode: 'usporedba',
    q: 'Kupio je auto ____ nego što je planirao.',
    opts: ['skuplji', 'skuplje', 'najskuplji', 'skupo'],
    answer: 'skuplji',
    en: 'he bought a more expensive car than planned',
    tip: 'Komparativ pridjeva uz imenicu: auto skuplji nego što…',
  },
  {
    mode: 'usporedba',
    q: '„Ona je najpametnija ____ razredu.”',
    opts: ['u', 'od', 'iz', 'na'],
    answer: 'u',
    en: 'she is the smartest in the class',
    tip: 'Superlativ + u + lokativ (u razredu).',
  },
];

export { DATA as STUPNJEVANJE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function StupnjevanjeDrill({ goBack, award }: Props) {
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
          key: 'stupnjevanje',
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
        {H('📈 Stupnjevanje', 'stariji, bolji, najjači — climbing the comparison ladder', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — usporedbe su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje stupnjevanjem! 💪'
                : 'Stupnjevanje traži još vježbe.'}
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
      {H('📈 Stupnjevanje', 'stariji, bolji, najjači — climbing the comparison ladder', goBack)}
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
