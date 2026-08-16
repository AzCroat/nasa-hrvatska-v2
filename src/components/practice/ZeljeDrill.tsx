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

// C1 wishes drill (C1 tranche 8, 2026-08-15): da bar / kamo srece /
// samo da wishes (present vs counterfactual perfect), neka + present and
// the optative (Zivio!, Dobro dosli!), and the politeness conditional
// (htio bih, biste li, radije bih).
const MODE_LABEL: Record<string, string> = {
  dabar: '🌠 Da bar',
  neka: '🕊️ Neka i optativ',
  kondicional: '🎩 Uljudne želje',
};

const DATA = [
  {
    mode: 'dabar',
    q: '„____ sutra ne pada kiša!” (želja)',
    opts: ['Da bar', 'Zar', 'Čim', 'Iako'],
    answer: 'Da bar',
    en: 'if only it does not rain tomorrow!',
    tip: 'Da bar + prezent = živa želja.',
  },
  {
    mode: 'dabar',
    q: '„Da bar ____ ovdje!” (on, sada — nestvarno)',
    opts: ['je', 'bude', 'bio bi', 'će biti'],
    answer: 'je',
    en: 'if only he were here!',
    tip: 'Da bar + prezent i za nestvarno sada.',
  },
  {
    mode: 'dabar',
    q: '„Da sam bar ____ !” (znati — žaljenje za prošlim)',
    opts: ['znao', 'znam', 'budem znao', 'znat'],
    answer: 'znao',
    en: 'if only I had known!',
    tip: 'Da (bar) + perfekt = žaljenje.',
  },
  {
    mode: 'dabar',
    q: '„Kamo ____ da je tako!” (ustaljeno)',
    opts: ['sreće', 'sreća', 'srećom', 'sreći'],
    answer: 'sreće',
    en: 'would that it were so!',
    tip: 'Kamo sreće + da = jaka želja.',
  },
  {
    mode: 'dabar',
    q: '„Samo ____ stigne na vrijeme!”',
    opts: ['da', 'ako', 'čim', 'dok'],
    answer: 'da',
    en: 'let him just arrive on time!',
    tip: 'Samo da + prezent = tjeskobna želja.',
  },
  {
    mode: 'dabar',
    q: '„E, ____ mi je znati što smjera…”',
    opts: ['da', 'što', 'kad', 'čim'],
    answer: 'da',
    en: 'oh, how I would like to know…',
    tip: 'Da mi je + infinitiv = čežnja (da mi je znati).',
  },
  {
    mode: 'dabar',
    q: 'Želju o prošlome („da sam bar došao”) NE možemo ostvariti jer:',
    opts: ['prošlost je nepromjenjiva', 'želja je preslaba', 'glagol je pogrešan', 'nedostaje bar'],
    answer: 'prošlost je nepromjenjiva',
    en: 'past wishes are counterfactual',
    tip: 'Zato perfekt u želji uvijek nosi žaljenje.',
  },
  {
    mode: 'dabar',
    q: '„Bar da” i „da bar”:',
    opts: ['oba su pravilna reda', 'samo da bar', 'samo bar da', 'nijedno'],
    answer: 'oba su pravilna reda',
    en: 'both orders are fine',
    tip: 'Da bar dođe / bar da dođe.',
  },
  {
    mode: 'neka',
    q: '„____ uđe!” (dopuštenje trećoj osobi)',
    opts: ['Neka', 'Nek bi', 'Da', 'Čim'],
    answer: 'Neka',
    en: 'let him come in!',
    tip: 'Neka + prezent = 3. lice imperativa.',
  },
  {
    mode: 'neka',
    q: '„Neka ____ sretni!” (oni)',
    opts: ['budu', 'su', 'bili', 'jesu'],
    answer: 'budu',
    en: 'may they be happy!',
    tip: 'Neka + svršeni prezent od biti: neka budu.',
  },
  {
    mode: 'neka',
    q: '„____ nam gosti!” (zdravica)',
    opts: ['Živjeli', 'Živjet će', 'Žive', 'Živi im'],
    answer: 'Živjeli',
    en: 'long live our guests!',
    tip: 'Optativni pridjev radni: Živjeli!',
  },
  {
    mode: 'neka',
    q: '„____ ti je sretan put!” (blagoslov)',
    opts: ['Neka', 'Da li', 'Zar', 'Dok'],
    answer: 'Neka',
    en: 'may your journey be blessed',
    tip: 'Neka + biti u željama-blagoslovima.',
  },
  {
    mode: 'neka',
    q: '„Dobro ____ !” (došao — pozdrav gostu)',
    opts: ['došao', 'dolazio', 'dođi', 'došavši'],
    answer: 'došao',
    en: 'welcome!',
    tip: 'Optativ: dobro došao/došla/došli.',
  },
  {
    mode: 'neka',
    q: '„____ se s pravom slavi!” (formalna želja)',
    opts: ['Neka', 'Kamo', 'Zar', 'Jer'],
    answer: 'Neka',
    en: 'let it rightly be celebrated',
    tip: 'Neka u svečanim željama.',
  },
  {
    mode: 'neka',
    q: '„Pomozi mu, pa ____ i tebi netko pomogne.”',
    opts: ['neka', 'da bar bi', 'čim', 'dok'],
    answer: 'neka',
    en: 'and may someone help you too',
    tip: 'Neka u uzvratnim željama.',
  },
  {
    mode: 'neka',
    q: 'Optativ (Živio! Dobro došli!) izriče se:',
    opts: ['pridjevom radnim bez pomoćnoga glagola', 'aoristom', 'infinitivom', 'trpnim pridjevom'],
    answer: 'pridjevom radnim bez pomoćnoga glagola',
    en: 'the optative uses a bare l-participle',
    tip: 'Živio, živjela, dobro došli — bez je/su.',
  },
  {
    mode: 'kondicional',
    q: '„____ te zamoliti za uslugu.” (uljudno)',
    opts: ['Htio bih', 'Hoću', 'Moram', 'Trebam sad'],
    answer: 'Htio bih',
    en: 'I would like to ask you a favour',
    tip: 'Kondicional želje: htio/htjela bih.',
  },
  {
    mode: 'kondicional',
    q: '„____ li mi dodati sol?” (najuljudnije)',
    opts: ['Biste', 'Hoćete', 'Možete odmah', 'Dajte'],
    answer: 'Biste',
    en: 'would you pass me the salt?',
    tip: 'Biste li — uljudni kondicional pitanja.',
  },
  {
    mode: 'kondicional',
    q: '„Volio bih ____ jednom posjetimo Dubrovnik.”',
    opts: ['da', 'kako', 'što', 'čim'],
    answer: 'da',
    en: 'I wish we would visit Dubrovnik one day',
    tip: 'Volio bih da + prezent (različiti/zajednički subjekt).',
  },
  {
    mode: 'kondicional',
    q: '„Bilo bi lijepo ____ nas posjetili.”',
    opts: ['da', 'kad ne', 'što', 'jer'],
    answer: 'da',
    en: 'it would be nice if you visited us',
    tip: 'Bilo bi + pridjev + da.',
  },
  {
    mode: 'kondicional',
    q: '„Ne bih ____ smetao, ali imam pitanje.” (ograda)',
    opts: ['htio', 'hoću', 'morao bit', 'smio bi'],
    answer: 'htio',
    en: 'I would not want to intrude, but…',
    tip: 'Ne bih htio + infinitiv — uljudna ograda.',
  },
  {
    mode: 'kondicional',
    q: '„Radije ____ ostao kod kuće.” (preferencija)',
    opts: ['bih', 'ću', 'sam htjeti', 'budem'],
    answer: 'bih',
    en: 'I would rather stay home',
    tip: 'Radije bih + pridjev radni.',
  },
  {
    mode: 'kondicional',
    q: '„Može ____ čaša vode?” (razgovorna molba)',
    opts: ['li', 'zar', 'da', 'što'],
    answer: 'li',
    en: 'could I get a glass of water?',
    tip: 'Može li — blaga razgovorna molba.',
  },
  {
    mode: 'kondicional',
    q: 'Najuljudnija je inačica:',
    opts: [
      'Biste li mogli zatvoriti prozor?',
      'Zatvorite prozor!',
      'Možeš zatvoriti prozor?',
      'Zatvaraj!',
    ],
    answer: 'Biste li mogli zatvoriti prozor?',
    en: 'the politest request form',
    tip: 'Kondicional + moći + V-oblik.',
  },
];

export { DATA as ZELJE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ZeljeDrill({ goBack, award }: Props) {
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
          key: 'zelje',
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
        {H('🌠 Izricanje želja', 'da bar, kamo sreće, neka uđe — wishing in Croatian', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — želje su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro izricanje želja! 💪'
                : 'Izricanje želja traži još vježbe.'}
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
      {H('🌠 Izricanje želja', 'da bar, kamo sreće, neka uđe — wishing in Croatian', goBack)}
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
