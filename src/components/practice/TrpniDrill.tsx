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

// C1 passive-participle drill (C1 tranche 5, 2026-08-15): formation
// (-en/-an/-jen), the jotation table (t→ć, d→đ, s→š, z→ž, c→č, p/b/m→plj/
// blj/mlj) and usage in passives and as plain adjectives.
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  jotacija: '🌀 Jotacija',
  uporaba: '🎯 Uporaba',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „otvoriti” glasi:',
    opts: ['otvoren', 'otvorit', 'otvaran', 'otvorjen'],
    answer: 'otvoren',
    en: 'opened',
    tip: 'I-glagoli: osnova + -en (otvoren, učinjen).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „kupiti” glasi:',
    opts: ['kupljen', 'kupen', 'kupit', 'kupovan'],
    answer: 'kupljen',
    en: 'bought',
    tip: 'P + j → plj: kupljen (epentetsko l).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „donijeti” glasi:',
    opts: ['donesen', 'donijet svuda', 'donešen', 'donosen'],
    answer: 'donesen',
    en: 'brought',
    tip: 'Standard: donesen (donešen je razgovorno).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „napisati” glasi:',
    opts: ['napisan', 'napišen', 'napisat', 'napisani svi'],
    answer: 'napisan',
    en: 'written',
    tip: 'A-glagoli: -an (napisan, pročitan).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „vidjeti” glasi:',
    opts: ['viđen', 'vidjen', 'viden', 'vidjet'],
    answer: 'viđen',
    en: 'seen',
    tip: 'D + j → đ: viđen.',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „pozvati” glasi:',
    opts: ['pozvan', 'pozven', 'pozivan', 'pozvat'],
    answer: 'pozvan',
    en: 'invited',
    tip: 'Pozvati → pozvan; pozivan je od nesvršenoga.',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „prevesti” glasi:',
    opts: ['preveden', 'prevešen', 'prevožen', 'prevedjen'],
    answer: 'preveden',
    en: 'translated',
    tip: 'Prevesti → preveden (kao dovesti → doveden).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „zaposliti” glasi:',
    opts: ['zaposlen', 'zapošljen', 'zaposljen', 'zaposlit'],
    answer: 'zaposlen',
    en: 'employed',
    tip: 'Zaposliti → zaposlen (bez jotacije sl).',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „baciti” glasi:',
    opts: ['bačen', 'bacen', 'bacjen', 'bačan'],
    answer: 'bačen',
    en: 'thrown',
    tip: 'C + j → č: bačen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „platiti” glasi:',
    opts: ['plaćen', 'platjen', 'platen', 'plačen'],
    answer: 'plaćen',
    en: 'paid',
    tip: 'T + j → ć: plaćen (NE plačen!).',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „roditi” glasi:',
    opts: ['rođen', 'rodjen', 'roden', 'rođan'],
    answer: 'rođen',
    en: 'born',
    tip: 'D + j → đ: rođen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „nositi” glasi:',
    opts: ['nošen', 'nosjen', 'nosen', 'nošan'],
    answer: 'nošen',
    en: 'carried, worn',
    tip: 'S + j → š: nošen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „paziti” (čuvan) glasi:',
    opts: ['pažen', 'pazjen', 'pazen', 'pažan'],
    answer: 'pažen',
    en: 'looked after',
    tip: 'Z + j → ž: pažen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „ljubiti” glasi:',
    opts: ['ljubljen', 'ljuben', 'ljubjen', 'ljubit'],
    answer: 'ljubljen',
    en: 'kissed, beloved',
    tip: 'B + j → blj: ljubljen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „slomiti” glasi:',
    opts: ['slomljen', 'slomjen', 'slomen', 'slomit'],
    answer: 'slomljen',
    en: 'broken',
    tip: 'M + j → mlj: slomljen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „uhvatiti” glasi:',
    opts: ['uhvaćen', 'uhvatjen', 'uhvačen', 'uhvaten'],
    answer: 'uhvaćen',
    en: 'caught',
    tip: 'T + j → ć: uhvaćen.',
  },
  {
    mode: 'uporaba',
    q: 'Izvještaj je ____ jučer. (predati)',
    opts: ['predan', 'predat', 'predajen', 'predavan'],
    answer: 'predan',
    en: 'the report was submitted yesterday',
    tip: 'Pasiv perfekta: je + trpni pridjev.',
  },
  {
    mode: 'uporaba',
    q: 'Vrata su bila ____ cijelu noć. (otvoriti)',
    opts: ['otvorena', 'otvorene', 'otvoreni', 'otvoreno'],
    answer: 'otvorena',
    en: 'the door was open all night',
    tip: 'Vrata (sr. mn.): otvorena.',
  },
  {
    mode: 'uporaba',
    q: 'Trpni pridjev može biti i pravi pridjev, npr.:',
    opts: ['poznati glumac (od poznati)', 'trčati brzo', 'pjevajući ptić', 'otišavši gost'],
    answer: 'poznati glumac (od poznati)',
    en: 'participles become plain adjectives',
    tip: 'Poznat, otvoren, umoran — pridjevska služba.',
  },
  {
    mode: 'uporaba',
    q: '„Kava je ____ .” (popiti)',
    opts: ['popijena', 'popita', 'popivena', 'popila'],
    answer: 'popijena',
    en: 'the coffee has been drunk',
    tip: 'Popiti → popijen, -a (piti → pijen).',
  },
  {
    mode: 'uporaba',
    q: 'Pjesma ____ prije sto godina još se pjeva. (napisati)',
    opts: ['napisana', 'napisavši', 'koja je pisala', 'napišena'],
    answer: 'napisana',
    en: 'a song written a hundred years ago',
    tip: 'Trpni pridjev skraćuje odnosnu rečenicu.',
  },
  {
    mode: 'uporaba',
    q: 'Trpni se pridjev tvori u pravilu od:',
    opts: ['prijelaznih glagola', 'neprijelaznih glagola', 'povratnih glagola', 'modalnih glagola'],
    answer: 'prijelaznih glagola',
    en: 'passives come from transitive verbs',
    tip: 'Samo ono što se može „trpjeti”: čitan, viđen, kupljen.',
  },
  {
    mode: 'uporaba',
    q: 'Stan je ____ prošle godine. (prodati)',
    opts: ['prodan', 'prodat', 'prodavan', 'prodajen'],
    answer: 'prodan',
    en: 'the flat was sold last year',
    tip: 'Prodati → prodan (prodavan = nesvršeno, više puta).',
  },
  {
    mode: 'uporaba',
    q: '„____ smo o promjenama.” (obavijestiti)',
    opts: ['Obaviješteni', 'Obavijestili', 'Obavještavani stalno', 'Obavijestivši'],
    answer: 'Obaviješteni',
    en: 'we have been informed of the changes',
    tip: 'St + j → šte: obaviješten.',
  },
];

export { DATA as TRPNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TrpniDrill({ goBack, award }: Props) {
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
          key: 'trpni',
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
          '🛠️ Trpni pridjev',
          'plaćen, rođen, slomljen — the passive participle and its sound changes',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — trpni je vaš! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje trpnim pridjevom! 💪'
                : 'Trpni pridjev traži još vježbe.'}
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
        '🛠️ Trpni pridjev',
        'plaćen, rođen, slomljen — the passive participle and its sound changes',
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
