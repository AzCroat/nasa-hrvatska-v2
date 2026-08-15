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

// C1 reflexive-verb drill (C1 tranche 2, 2026-08-15): the se-system —
// true reflexives vs reciprocals vs passive/impersonal se, when se is
// (not) needed, and the meaning shifts se creates (naći/naći se).
const MODE_LABEL: Record<string, string> = {
  vrste: '🏷️ Koja vrsta „se”?',
  oblik: '🔧 Treba li „se”?',
  znacenje: '🔄 Promjena značenja',
};

const DATA = [
  {
    mode: 'vrste',
    q: '„Djeca se umivaju svako jutro.” — „se” je ovdje:',
    opts: ['pravi povratni (sebe)', 'uzajamni', 'pasivni', 'bezlični'],
    answer: 'pravi povratni (sebe)',
    en: 'the children wash (themselves) every morning',
    tip: 'Radnja se vraća na vršitelja: umivaju sebe.',
  },
  {
    mode: 'vrste',
    q: '„Ivan i Ana se vole.” — „se” je:',
    opts: ['uzajamni', 'pravi povratni (sebe)', 'pasivni', 'bezlični'],
    answer: 'uzajamni',
    en: 'Ivan and Ana love each other',
    tip: 'Uzajamnost: vole jedno drugo, ne sebe.',
  },
  {
    mode: 'vrste',
    q: '„Kuća se gradi već dvije godine.” — „se” je:',
    opts: ['pasivni', 'uzajamni', 'pravi povratni (sebe)', 'bezlični'],
    answer: 'pasivni',
    en: 'the house has been being built for two years',
    tip: 'Pasiv sa „se”: kuću netko gradi — subjekt trpi radnju.',
  },
  {
    mode: 'vrste',
    q: '„Ovdje se ne puši.” — „se” je:',
    opts: ['bezlični', 'pasivni', 'uzajamni', 'pravi povratni (sebe)'],
    answer: 'bezlični',
    en: 'no smoking here (one does not smoke here)',
    tip: 'Bezlična konstrukcija: nema subjekta koji trpi — opća zabrana.',
  },
  {
    mode: 'vrste',
    q: '„Marko se boji mraka.” — bojati se je:',
    opts: ['glagol koji postoji samo s „se”', 'pravi povratni', 'uzajamni', 'pasivni'],
    answer: 'glagol koji postoji samo s „se”',
    en: 'Marko is afraid of the dark',
    tip: 'Bojati se, nadati se, smijati se — nemaju neprijelazni par bez „se”.',
  },
  {
    mode: 'vrste',
    q: '„Prijatelji se dopisuju godinama.” — „se” je:',
    opts: ['uzajamni', 'pasivni', 'bezlični', 'pravi povratni (sebe)'],
    answer: 'uzajamni',
    en: 'the friends have corresponded for years',
    tip: 'Dopisivati se = pisati jedno drugomu.',
  },
  {
    mode: 'vrste',
    q: '„Zakon se primjenjuje od siječnja.” — „se” je:',
    opts: ['pasivni', 'bezlični', 'uzajamni', 'pravi povratni (sebe)'],
    answer: 'pasivni',
    en: 'the law has been applied since January',
    tip: 'Zakon je subjekt koji trpi radnju — pasiv sa „se”.',
  },
  {
    mode: 'vrste',
    q: '„Ne zna se tko dolazi.” — „se” je:',
    opts: ['bezlični', 'pasivni', 'pravi povratni (sebe)', 'uzajamni'],
    answer: 'bezlični',
    en: 'it is not known who is coming',
    tip: 'Bezlično: nema subjekta — „ne zna se” = nitko ne zna.',
  },
  {
    mode: 'oblik',
    q: 'Jutros sam ____ tek u devet.',
    opts: ['se probudio', 'probudio', 'probudio sebe', 'budio'],
    answer: 'se probudio',
    en: 'this morning I woke up only at nine',
    tip: 'Probuditi SE (sam od sebe); probuditi koga = prijelazno.',
  },
  {
    mode: 'oblik',
    q: 'Moram ____ dobro za ispit.',
    opts: ['se pripremiti', 'pripremiti', 'pripremiti sebe', 'spremiti'],
    answer: 'se pripremiti',
    en: 'I have to prepare well for the exam',
    tip: 'Pripremiti SE za što; pripremiti što = prijelazno.',
  },
  {
    mode: 'oblik',
    q: 'Veselimo ____ vašem dolasku.',
    opts: ['se', 'sebe', 'si', 'vas'],
    answer: 'se',
    en: 'we look forward to your arrival',
    tip: 'Veseliti se + dativ — zanaglasnica se, nikad puni oblik ovdje.',
  },
  {
    mode: 'oblik',
    q: 'Kupio je poklon — ali ne ženi, nego ____! (naglašeno)',
    opts: ['sebi', 'si', 'se', 'svoj'],
    answer: 'sebi',
    en: 'he bought a present — for HIMSELF',
    tip: 'Naglašeni dativ: sebi (kontrast); si je nenaglašeno.',
  },
  {
    mode: 'oblik',
    q: 'Uzmi ____ još kolača, ima ih dosta!',
    opts: ['si', 'sebi', 'se', 'sebe'],
    answer: 'si',
    en: 'take yourself some more cake',
    tip: 'Nenaglašeno: uzmi si (hrvatski standard dopušta zanaglasnicu si).',
  },
  {
    mode: 'oblik',
    q: 'Njih se dvoje već dugo ____.',
    opts: ['poznaju', 'poznaju se', 'znaju sebe', 'upoznavaju sebe'],
    answer: 'poznaju',
    en: 'the two of them have known each other a long time',
    tip: '„Se” je već u rečenici (njih SE dvoje…) — ne ponavlja se uz glagol.',
  },
  {
    mode: 'oblik',
    q: 'Standardno je: „____ ruke prije jela!”',
    opts: ['Operi', 'Operi si', 'Operi se', 'Operi sebi'],
    answer: 'Operi',
    en: 'wash your hands before eating',
    tip: 'Uz dijelove tijela povratna zamjenica nije potrebna: oprati ruke.',
  },
  {
    mode: 'oblik',
    q: 'Cijelo su se jutro ____ oko rasporeda.',
    opts: ['prepirali', 'prepirali se', 'svađali sebe', 'prepirali sebe'],
    answer: 'prepirali',
    en: 'they argued about the schedule all morning',
    tip: '„Se” već stoji uza su (su se prepirali) — bez ponavljanja.',
  },
  {
    mode: 'znacenje',
    q: 'Sutra ćemo ____ ispred kazališta u osam.',
    opts: ['se naći', 'naći', 'pronaći', 'naći sebe'],
    answer: 'se naći',
    en: 'we will meet in front of the theatre at eight',
    tip: 'Naći se = sastati se; naći (što) = pronaći izgubljeno.',
  },
  {
    mode: 'znacenje',
    q: 'Ne ____ s tim prijedlogom — mislim da je preskup.',
    opts: ['slažem se', 'slažem', 'lažem se', 'slagam'],
    answer: 'slažem se',
    en: 'I do not agree with that proposal',
    tip: 'Slagati se = dijeliti mišljenje; slagati (što) = stavljati u red.',
  },
  {
    mode: 'znacenje',
    q: 'Kako se to ____ na standardnom hrvatskom?',
    opts: ['kaže', 'govori se', 'priča', 'izgovara se'],
    answer: 'kaže',
    en: 'how do you say that in standard Croatian?',
    tip: 'Ustaljeno bezlično: Kako se kaže…? („se” je već u pitanju.)',
  },
  {
    mode: 'znacenje',
    q: 'Sinoć smo se odlično ____ na proslavi.',
    opts: ['zabavili', 'zabavili se', 'zabavljali sebe', 'zabavili druge'],
    answer: 'zabavili',
    en: 'we had a great time at the celebration last night',
    tip: 'Zabaviti se = provesti se; zabaviti koga = zabavljati drugoga.',
  },
  {
    mode: 'znacenje',
    q: 'Vlak ____ s drugog perona u osam.',
    opts: ['polazi', 'se polazi', 'polazi se', 'odlazi se'],
    answer: 'polazi',
    en: 'the train departs from platform two at eight',
    tip: 'Polaziti nije povratan glagol — bez „se”.',
  },
  {
    mode: 'znacenje',
    q: 'Bezlično o potrebi za snom:',
    opts: ['Spava mi se.', 'Spavam se.', 'Spavam si.', 'Sniva me.'],
    answer: 'Spava mi se.',
    en: 'I feel sleepy',
    tip: 'Bezlična konstrukcija s dativom: spava mi se, ide mi se, pije mi se.',
  },
  {
    mode: 'znacenje',
    q: 'Odjednom ____ smračilo i počela je oluja.',
    opts: ['se', 'je se', 'se je', 'si'],
    answer: 'se',
    en: 'it suddenly got dark and the storm began',
    tip: 'U 3. l. jd. perfekta „se + je” stapa se u samo „se”: smračilo se.',
  },
  {
    mode: 'znacenje',
    q: 'Nakon svađe ____ u miru.',
    opts: ['razišli smo se', 'razišli smo', 'smo se razišli', 'razilazili smo'],
    answer: 'razišli smo se',
    en: 'after the argument we parted in peace',
    tip: 'Razići se — samo povratan; na početku rečenice: razišli smo se.',
  },
];

export { DATA as POVRATNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PovratniDrill({ goBack, award }: Props) {
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
          key: 'povratni',
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
          '🪞 Povratni glagoli',
          'naći ili naći se — the little word that changes everything',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — „se” vam više nije tajna! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje povratnošću! 💪'
                : 'Povratni oblici traže još vježbe.'}
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
        '🪞 Povratni glagoli',
        'naći ili naći se — the little word that changes everything',
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
