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

// C1 aspect-pairs drill (C1 tranche 5, 2026-08-15): prefix pairs
// (pisati/napisati), suppletive pairs (kupiti/kupovati, reci/govoriti),
// secondary imperfectivization (-avati/-ivati: zapisivati, objasnjavati)
// and meaning nuances (semelfactive -nuti, habituals, prefix semantics).
const MODE_LABEL: Record<string, string> = {
  parovi: '👯 Parovi',
  sekundarna: '🔁 Sekundarna tvorba',
  nijansa: '🌗 Nijansa',
};

const DATA = [
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „pisati” glasi:',
    opts: ['napisati', 'pisnuti', 'popisati', 'upisati'],
    answer: 'napisati',
    en: 'to write → to write down (pf)',
    tip: 'Prefiks na- daje čisti svršeni par: pisati/napisati.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „čitati” glasi:',
    opts: ['pročitati', 'očitati', 'načitati', 'iščitati'],
    answer: 'pročitati',
    en: 'to read (pf)',
    tip: 'Pro- je čisti par: čitati/pročitati.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „kupiti” glasi:',
    opts: ['kupovati', 'kupljivati', 'kupivati', 'skupljati'],
    answer: 'kupovati',
    en: 'to buy (impf)',
    tip: 'Kupiti (pf) / kupovati (impf) — supletivna tvorba.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „dati” glasi:',
    opts: ['davati', 'dadavati', 'dajati', 'dodavati'],
    answer: 'davati',
    en: 'to give (impf)',
    tip: 'Dati/davati.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „piti” glasi:',
    opts: ['popiti', 'napiti', 'ispiti sve', 'zapiti'],
    answer: 'popiti',
    en: 'to drink up',
    tip: 'Piti/popiti (ispiti = do kraja, s nijansom).',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „reći” glasi:',
    opts: ['govoriti', 'rečivati', 'rekati', 'kazivati samo'],
    answer: 'govoriti',
    en: 'to say (impf)',
    tip: 'Supletivni par: reći/govoriti (i kazati/kazivati).',
  },
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „jesti” glasi:',
    opts: ['pojesti', 'najesti', 'izjesti', 'sjesti'],
    answer: 'pojesti',
    en: 'to eat up',
    tip: 'Jesti/pojesti.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „baciti” glasi:',
    opts: ['bacati', 'bacivati', 'izbacati', 'bacnuti'],
    answer: 'bacati',
    en: 'to throw (impf)',
    tip: 'Baciti (jednom) / bacati (više puta).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „zapisati” glasi:',
    opts: ['zapisivati', 'zapisavati', 'pisati', 'zapisovati'],
    answer: 'zapisivati',
    en: 'to note down (impf)',
    tip: 'Sekundarna imperfektivizacija: -ivati (zapisivati).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „potpisati” glasi:',
    opts: ['potpisivati', 'potpisavati', 'pisati', 'potpisovati'],
    answer: 'potpisivati',
    en: 'to sign (impf)',
    tip: 'Potpisati → potpisivati.',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „otvoriti” glasi:',
    opts: ['otvarati', 'otvorivati', 'otvoravati', 'tvoriti'],
    answer: 'otvarati',
    en: 'to open (impf)',
    tip: 'Otvoriti → otvarati (-ati s prijevojem).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „kupiti” (ubrati) — „pokupiti” glasi:',
    opts: ['pokupljati', 'pokupivati', 'kupljati', 'pokupavati'],
    answer: 'pokupljati',
    en: 'to pick up (impf)',
    tip: 'Pokupiti → pokupljati.',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „objasniti” glasi:',
    opts: ['objašnjavati', 'objasnivati', 'objašnjivati', 'jasniti'],
    answer: 'objašnjavati',
    en: 'to explain (impf)',
    tip: 'Objasniti → objašnjavati (sn + j → šnj).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „odgovoriti” glasi:',
    opts: ['odgovarati', 'odgovorivati', 'govoriti', 'odgovoravati'],
    answer: 'odgovarati',
    en: 'to answer (impf)',
    tip: 'Odgovoriti → odgovarati.',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „primiti” glasi:',
    opts: ['primati', 'primivati', 'prijemati', 'primavati'],
    answer: 'primati',
    en: 'to receive (impf)',
    tip: 'Primiti → primati.',
  },
  {
    mode: 'sekundarna',
    q: 'Sekundarni nesvršeni glagoli najčešće se tvore sufiksima:',
    opts: ['-avati i -ivati', '-nuti i -snuti', '-irati i -ovati', '-jeti i -ljeti'],
    answer: '-avati i -ivati',
    en: 'secondary imperfectives use -avati/-ivati',
    tip: 'Zapisivati, objašnjavati, dogovarati.',
  },
  {
    mode: 'nijansa',
    q: '„Pisao sam pismo cijelo jutro” naglašava:',
    opts: ['trajanje radnje', 'dovršenost radnje', 'buduću radnju', 'tuđu radnju'],
    answer: 'trajanje radnje',
    en: 'the writing lasted all morning',
    tip: 'Nesvršeni vid = proces bez svršetka.',
  },
  {
    mode: 'nijansa',
    q: '„Napisao sam pismo” naglašava:',
    opts: ['dovršenost radnje', 'trajanje radnje', 'ponavljanje radnje', 'nemogućnost radnje'],
    answer: 'dovršenost radnje',
    en: 'the letter is finished',
    tip: 'Svršeni vid = rezultat.',
  },
  {
    mode: 'nijansa',
    q: '„Glagol -nuti (viknuti, skoknuti)” izriče:',
    opts: ['jednokratnu trenutnu radnju', 'trajnu radnju', 'ponavljanje', 'stanje'],
    answer: 'jednokratnu trenutnu radnju',
    en: 'semelfactive -nuti = one quick action',
    tip: 'Viknuti = viknuti jednom; vikati = vikati dulje.',
  },
  {
    mode: 'nijansa',
    q: 'Uz „svaki dan” prirodno dolazi:',
    opts: ['nesvršeni vid', 'svršeni vid', 'pluskvamperfekt', 'aorist'],
    answer: 'nesvršeni vid',
    en: 'habituals take the imperfective',
    tip: 'Svaki dan pišem/čitam/vježbam.',
  },
  {
    mode: 'nijansa',
    q: '„Upravo sam ____ zadaću.” (rezultat, maloprije)',
    opts: ['završio', 'završavao', 'završavam', 'završavajući'],
    answer: 'završio',
    en: 'I have just finished my homework',
    tip: 'Rezultat maloprije → svršeni perfekt.',
  },
  {
    mode: 'nijansa',
    q: '„Dok sam ____ , netko je pokucao.” (kuhati)',
    opts: ['kuhao', 'skuhao', 'skuham', 'kuhajući sam'],
    answer: 'kuhao',
    en: 'while I was cooking, someone knocked',
    tip: 'Pozadinska radnja → nesvršeni vid.',
  },
  {
    mode: 'nijansa',
    q: 'Prefiks mijenja i ZNAČENJE: „prepisati” znači:',
    opts: ['pisati ponovno ili tuđe preuzeti', 'početi pisati', 'pisati ispod', 'prestati pisati'],
    answer: 'pisati ponovno ili tuđe preuzeti',
    en: 'prepisati = copy/rewrite',
    tip: 'Prefiksi nose značenje: pre- (ponovno), do- (do kraja), iz- (van).',
  },
  {
    mode: 'nijansa',
    q: '„Čitao sam tu knjigu” (bez „pro-”) može značiti:',
    opts: [
      'čitao sam je, ali možda ne do kraja',
      'sigurno sam je dovršio',
      'nikad je nisam vidio',
      'tek ću je čitati',
    ],
    answer: 'čitao sam je, ali možda ne do kraja',
    en: 'impf past leaves completion open',
    tip: 'Nesvršeni perfekt ne jamči dovršenost.',
  },
];

export { DATA as VIDSKI_PAROVI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VidskiParoviDrill({ goBack, award }: Props) {
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
          key: 'vidskiparovi',
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
          '♻️ Vidski parovi',
          'pisati/napisati, kupiti/kupovati — building the aspect pairs',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — parovi su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje vidskim parovima! 💪'
                : 'Vidski parovi traže još vježbe.'}
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
        '♻️ Vidski parovi',
        'pisati/napisati, kupiti/kupovati — building the aspect pairs',
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
