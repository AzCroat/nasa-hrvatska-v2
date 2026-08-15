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

// C1 adjective-definiteness drill (C1 tranche 3, 2026-08-15): the
// indefinite/definite opposition (nov/novi) — where each form is required,
// the definite declension with navesci, and the kakav?/koji? meaning split.
const MODE_LABEL: Record<string, string> = {
  oblik: '🎭 Koji vid?',
  padez: '🧩 Sklonidba i navesci',
  znacenje: '💡 Značenje',
};

const DATA = [
  {
    mode: 'oblik',
    q: 'Uz pokaznu zamjenicu dolazi određeni vid: „ovaj ____ kaput”.',
    opts: ['novi', 'nov', 'novoga', 'novim'],
    answer: 'novi',
    en: 'this new coat',
    tip: 'Uz ovaj/taj/onaj uvijek određeni oblik: ovaj novi.',
  },
  {
    mode: 'oblik',
    q: 'Predikatni pridjev stoji u neodređenom vidu: „Kaput je ____.”',
    opts: ['nov', 'novi', 'novoga', 'novome'],
    answer: 'nov',
    en: 'the coat is new',
    tip: 'U predikatu neodređeni vid: kaput je nov.',
  },
  {
    mode: 'oblik',
    q: 'Prvi spomen, birani standard: „Kupio sam ____ auto.”',
    opts: ['nov', 'novi', 'novoga', 'novome'],
    answer: 'nov',
    en: 'I bought a new car',
    tip: 'Nova, prvi put spomenuta stvar → neodređeni vid: nov auto.',
  },
  {
    mode: 'oblik',
    q: 'Naslov bajke: „____ kraljević”.',
    opts: ['Mali', 'Malen', 'Maloga', 'Malom'],
    answer: 'Mali',
    en: 'The Little Prince',
    tip: 'Stalni epitet i naslovi: određeni vid — Mali kraljević.',
  },
  {
    mode: 'oblik',
    q: 'Samo određeni vid imaju pridjevi na:',
    opts: ['-ski (hrvatski)', '-an (dobar)', '-ov (bratov)', '-in (mamin)'],
    answer: '-ski (hrvatski)',
    en: 'adjectives in -ski have only the definite form',
    tip: 'Odnosni pridjevi na -ski/-nji/-ji: samo određeni vid.',
  },
  {
    mode: 'oblik',
    q: 'Samo NEODREĐENI oblik u N jd. imaju pridjevi:',
    opts: ['posvojni na -ov/-in', 'opisni', 'na -ski', 'redni brojevi'],
    answer: 'posvojni na -ov/-in',
    en: 'possessives in -ov/-in have only the indefinite nominative',
    tip: 'Bratov, mamin, sestrin — bez određenoga N oblika.',
  },
  {
    mode: 'oblik',
    q: 'U rječniku se opisni pridjev navodi u ____ vidu.',
    opts: ['neodređenom', 'određenom', 'srednjem', 'množinskom'],
    answer: 'neodređenom',
    en: 'dictionaries cite adjectives in the indefinite form',
    tip: 'Natuknica: dobar, star, nov (neodređeni vid).',
  },
  {
    mode: 'oblik',
    q: 'Redni brojevi imaju ____ vid: „na trećem katu”.',
    opts: ['samo određeni', 'samo neodređeni', 'oba', 'nijedan'],
    answer: 'samo određeni',
    en: 'ordinals are always definite',
    tip: 'Treći, peti, stoti — uvijek određena sklonidba.',
  },
  {
    mode: 'padez',
    q: 'Akuzativ za NEŽIVO jednak je nominativu: „Gledam ____ film.”',
    opts: ['novi', 'novoga', 'novom', 'nova'],
    answer: 'novi',
    en: 'I am watching the new film',
    tip: 'Neživo: A = N (gledam novi film).',
  },
  {
    mode: 'padez',
    q: 'Akuzativ za ŽIVO jednak je genitivu: „Vidim ____ psa.”',
    opts: ['crnoga', 'crni', 'crnome', 'crnim'],
    answer: 'crnoga',
    en: 'I see the black dog',
    tip: 'Živo: A = G (vidim crnoga psa).',
  },
  {
    mode: 'padez',
    q: 'Instrumental jednine: „ponosim se ____ uspjehom”.',
    opts: ['velikim', 'velikom', 'velikoga', 'veliki'],
    answer: 'velikim',
    en: 'I take pride in the great success',
    tip: 'I jd. m./sr.: -im (velikim).',
  },
  {
    mode: 'padez',
    q: 'Lokativ jednine ž. roda: „u ____ kući”.',
    opts: ['staroj', 'staroji', 'stare', 'starojoj'],
    answer: 'staroj',
    en: 'in the old house',
    tip: 'DL jd. ž.: -oj (staroj).',
  },
  {
    mode: 'padez',
    q: 'Genitiv množine svih rodova: „bez ____ problema”.',
    opts: ['velikih', 'velikima', 'velikoga', 'velika'],
    answer: 'velikih',
    en: 'without big problems',
    tip: 'G mn.: -ih (velikih).',
  },
  {
    mode: 'padez',
    q: 'Genitiv jednine s naveskom: „iz ____ grada”.',
    opts: ['staroga', 'stara', 'staru', 'starome'],
    answer: 'staroga',
    en: 'from the old town',
    tip: 'G jd. odr. vida: starog(a) — navezak -a je biran.',
  },
  {
    mode: 'padez',
    q: 'Dativ jednine s naveskom: „____ prijatelju”.',
    opts: ['dobrome', 'dobroga', 'dobru', 'dobrih'],
    answer: 'dobrome',
    en: 'to the good friend',
    tip: 'D jd.: dobrom(u/e) — navezak -e/-u.',
  },
  {
    mode: 'padez',
    q: 'Komparativ se sklanja ODREĐENO: „od ____ brata”.',
    opts: ['starijega', 'stariji', 'starijemu', 'starije'],
    answer: 'starijega',
    en: 'than the older brother',
    tip: 'Komparativi i superlativi: uvijek određena sklonidba.',
  },
  {
    mode: 'znacenje',
    q: '„Dobri čovjek” (odr. vid u N) najčešće označuje:',
    opts: [
      'točno određenog, poznatog čovjeka',
      'bilo kojeg dobrog čovjeka',
      'vrlo dobrog čovjeka',
      'ironiju bez iznimke',
    ],
    answer: 'točno određenog, poznatog čovjeka',
    en: 'THE good man — a specific, known man',
    tip: 'Određeni vid = poznat, već spomenut, jedini takav.',
  },
  {
    mode: 'znacenje',
    q: 'Neodređeni vid odgovara na pitanje:',
    opts: ['kakav?', 'koji?', 'čiji?', 'koliki?'],
    answer: 'kakav?',
    en: 'the indefinite form answers what kind?',
    tip: 'Kakav je? — nov, star, dobar.',
  },
  {
    mode: 'znacenje',
    q: 'Određeni vid odgovara na pitanje:',
    opts: ['koji?', 'kakav?', 'čiji?', 'što?'],
    answer: 'koji?',
    en: 'the definite form answers which one?',
    tip: 'Koji? — novi, stari, dobri.',
  },
  {
    mode: 'znacenje',
    q: '„Stari grad” kao naziv gradske jezgre nosi ____ vid.',
    opts: ['određeni', 'neodređeni', 'oba ravnopravno', 'nijedan'],
    answer: 'određeni',
    en: 'the Old Town (as a proper name)',
    tip: 'Nazivi i imena: određeni vid (Stari grad, Novi Zagreb).',
  },
  {
    mode: 'znacenje',
    q: '„Željan znanja stigao je na studij.” — „željan” je:',
    opts: [
      'neodređeni vid u predikatnom proširku',
      'određeni vid',
      'prilog',
      'glagolski pridjev trpni',
    ],
    answer: 'neodređeni vid u predikatnom proširku',
    en: 'eager for knowledge, he began his studies',
    tip: 'Predikatni proširak traži neodređeni vid: željan, svjestan, pun.',
  },
  {
    mode: 'znacenje',
    q: '„Zdrav čovjek ima tisuću želja, ____ samo jednu.”',
    opts: ['bolestan', 'bolesni', 'bolesnog', 'boleštan'],
    answer: 'bolestan',
    en: 'a healthy man has a thousand wishes, a sick one only one',
    tip: 'Paralelizam neodređenih vidova: zdrav — bolestan.',
  },
  {
    mode: 'znacenje',
    q: 'Uz broj „jedan” dolazi neodređeni vid: „jedan ____ dan”.',
    opts: ['običan', 'obični', 'običnoga', 'običnome'],
    answer: 'običan',
    en: 'one ordinary day',
    tip: 'Jedan (= neki) + neodređeni vid: jedan običan dan.',
  },
  {
    mode: 'znacenje',
    q: '„Pas lutalica” vs „taj ____ pas” — dopuni određenim vidom.',
    opts: ['lutavi', 'lutav', 'lutalica', 'lutajuć'],
    answer: 'lutavi',
    en: 'that stray dog',
    tip: 'Uz taj: određeni oblik pridjeva.',
  },
];

export { DATA as ODREDJENOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function OdredjenostDrill({ goBack, award }: Props) {
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
          key: 'odredjenost',
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
        {H('🎭 Nov ili novi?', 'kakav vs koji — the two faces of every adjective', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — vid pridjeva vam je jasan! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro razlikovanje vidova! 💪'
                : 'Određenost pridjeva traži još vježbe.'}
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
      {H('🎭 Nov ili novi?', 'kakav vs koji — the two faces of every adjective', goBack)}
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
