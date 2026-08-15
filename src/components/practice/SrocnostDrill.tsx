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

// C1 agreement drill (C1 tranche 4, 2026-08-15): collective nouns (braca
// su dosla, telad je, momcad je), quantifier phrases (vecina je, pet kuca je
// sruseno, 21 igrac JE dosao) and coordinated subjects (mixed genders take
// masculine plural, first person wins).
const MODE_LABEL: Record<string, string> = {
  zbirne: '🌳 Zbirne imenice',
  vecina: '📊 Količina',
  mjesovito: '🤝 Više subjekata',
};

const DATA = [
  {
    mode: 'zbirne',
    q: 'Braća ____ stigla.',
    opts: ['su', 'je', 'smo', 'bi'],
    answer: 'su',
    en: 'the brothers have arrived',
    tip: 'Braća: oblik jednine, sročnost množine — braća su stigla.',
  },
  {
    mode: 'zbirne',
    q: 'Djeca su se ____ u dvorištu. (igrati)',
    opts: ['igrala', 'igrali', 'igralo', 'igrale'],
    answer: 'igrala',
    en: 'the children were playing in the yard',
    tip: 'Djeca su se igrala — pridjev radni na -a.',
  },
  {
    mode: 'zbirne',
    q: 'Telad ____ na paši. (biti)',
    opts: ['je', 'su', 'smo', 'bi'],
    answer: 'je',
    en: 'the calves are at pasture',
    tip: 'Zbirne na -ad: ženski rod jednine — telad je.',
  },
  {
    mode: 'zbirne',
    q: 'Gospoda ____ zadovoljna.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'the gentlemen are satisfied',
    tip: 'Gospoda su zadovoljna — kao braća.',
  },
  {
    mode: 'zbirne',
    q: 'Lišće ____ požutjelo.',
    opts: ['je', 'su', 'smo', 'bi'],
    answer: 'je',
    en: 'the leaves have turned yellow',
    tip: 'Zbirna imenica srednjega roda jednine: lišće je.',
  },
  {
    mode: 'zbirne',
    q: 'Momčad ____ pobijedila.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    en: 'the team has won',
    tip: 'Momčad je ž. r. jednine: momčad je pobijedila.',
  },
  {
    mode: 'zbirne',
    q: 'Uz „braća” pridjev radni završava na:',
    opts: [
      '-a (braća su došla)',
      '-i (braća su došli)',
      '-o (braća je došlo)',
      '-e (braća su došle)',
    ],
    answer: '-a (braća su došla)',
    en: 'the participle after braca ends in -a',
    tip: 'Braća, djeca, gospoda: su + -a.',
  },
  {
    mode: 'zbirne',
    q: 'Dvoja vrata ____ otvorena.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'both doors are open',
    tip: 'Pluralia tantum: vrata su; brojimo dvoja/troja vrata.',
  },
  {
    mode: 'vecina',
    q: 'Većina studenata ____ položila ispit.',
    opts: ['je', 'su', 'ste', 'bi'],
    answer: 'je',
    en: 'most students passed the exam',
    tip: 'Većina + G mn: glagol u jednini (većina je položila).',
  },
  {
    mode: 'vecina',
    q: 'Mnogo ljudi ____ došlo.',
    opts: ['je', 'su', 'smo', 'bi'],
    answer: 'je',
    en: 'many people came',
    tip: 'Mnogo/malo/nekoliko + G: jednina srednjega roda.',
  },
  {
    mode: 'vecina',
    q: 'Pet kuća ____ srušeno.',
    opts: ['je', 'su', 'ste', 'bi'],
    answer: 'je',
    en: 'five houses were demolished',
    tip: 'Brojevi 5+ : predikat u jednini sr. roda.',
  },
  {
    mode: 'vecina',
    q: 'Nekoliko putnika ____ na peronu. (čekati)',
    opts: ['čeka', 'čekaju', 'čekamo', 'čekali'],
    answer: 'čeka',
    en: 'several passengers are waiting on the platform',
    tip: 'Nekoliko + G mn → glagol u jednini.',
  },
  {
    mode: 'vecina',
    q: 'Dio gostiju ____ otišao.',
    opts: ['je', 'su', 'ste', 'bi'],
    answer: 'je',
    en: 'some of the guests have left',
    tip: 'Dio (jednina) upravlja sročnošću: dio je otišao.',
  },
  {
    mode: 'vecina',
    q: 'Tisuću navijača ____ stadion. (napustiti, perfekt)',
    opts: ['je napustilo', 'su napustili', 'je napustio', 'su napustile'],
    answer: 'je napustilo',
    en: 'a thousand fans left the stadium',
    tip: 'Tisuću + G mn: jednina sr. roda — je napustilo.',
  },
  {
    mode: 'vecina',
    q: 'Uz brojeve pet i više predikat stoji u:',
    opts: ['jednini srednjega roda', 'množini muškoga roda', 'množini ženskoga roda', 'dvojini'],
    answer: 'jednini srednjega roda',
    en: 'with numbers 5+ the predicate is neuter singular',
    tip: 'Pet igrača je došlo; dvadeset kuća je prodano.',
  },
  {
    mode: 'vecina',
    q: 'Dvadeset i jedan igrač ____ došao.',
    opts: ['je', 'su', 'ste', 'smo'],
    answer: 'je',
    en: 'twenty-one players came (sg!)',
    tip: 'Složeni brojevi na JEDAN: jednina — 21 igrač je došao.',
  },
  {
    mode: 'mjesovito',
    q: 'Ivan i Ana ____ stigli.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'Ivan and Ana have arrived',
    tip: 'Više subjekata → množina.',
  },
  {
    mode: 'mjesovito',
    q: 'Marija i Petra su ____ . (doći)',
    opts: ['došle', 'došli', 'došla', 'došlo'],
    answer: 'došle',
    en: 'Marija and Petra came',
    tip: 'Dvije ženske osobe → ženski rod množine.',
  },
  {
    mode: 'mjesovito',
    q: 'Selo i grad su ____ . (povezati)',
    opts: ['povezani', 'povezane', 'povezana', 'povezano'],
    answer: 'povezani',
    en: 'the village and the town are connected',
    tip: 'Različiti rodovi (s+m) → muški rod množine.',
  },
  {
    mode: 'mjesovito',
    q: 'More i nebo bila su ____ . (plav)',
    opts: ['plava', 'plavi', 'plave', 'plavo'],
    answer: 'plava',
    en: 'the sea and the sky were blue',
    tip: 'Dva srednja roda → srednji rod množine.',
  },
  {
    mode: 'mjesovito',
    q: 'Kad su subjekti različita roda, pridjev ide u:',
    opts: [
      'muški rod množine',
      'ženski rod množine',
      'srednji rod množine',
      'rod bližega subjekta uvijek',
    ],
    answer: 'muški rod množine',
    en: 'mixed genders take masculine plural',
    tip: 'Ivan i Ana su stigli; knjiga i pismo su stigli.',
  },
  {
    mode: 'mjesovito',
    q: 'Ti i ja ____ dogovorili.',
    opts: ['smo se', 'ste se', 'su se', 'bi se'],
    answer: 'smo se',
    en: 'you and I have agreed',
    tip: 'Prvo lice pobjeđuje: ti i ja = mi.',
  },
  {
    mode: 'mjesovito',
    q: 'Vi i vaše kolege ____ pozvani.',
    opts: ['ste', 'su', 'smo', 'je'],
    answer: 'ste',
    en: 'you and your colleagues are invited',
    tip: 'Drugo lice pobjeđuje treće: vi i oni = vi.',
  },
  {
    mode: 'mjesovito',
    q: 'Ni Ivan ni Marko ____ na sastanak. (doći, niječno)',
    opts: ['nisu došli', 'nije došao', 'nisu došle', 'nije došlo'],
    answer: 'nisu došli',
    en: 'neither Ivan nor Marko came to the meeting',
    tip: 'Ni…ni s množinom: nisu došli.',
  },
];

export { DATA as SROCNOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SrocnostDrill({ goBack, award }: Props) {
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
          key: 'srocnost',
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
          '🤝 Sročnost',
          'braća su došla, pet kuća je srušeno — making the sentence agree',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — sve se slaže! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje sročnošću! 💪'
                : 'Sročnost traži još vježbe.'}
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
      {H('🤝 Sročnost', 'braća su došla, pet kuća je srušeno — making the sentence agree', goBack)}
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
