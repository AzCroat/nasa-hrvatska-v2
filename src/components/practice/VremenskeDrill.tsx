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

// B2 temporal-clauses drill (B2 tranche 4, 2026-08-15): choosing the
// conjunction (cim/dok/otkako/nakon sto/prije nego sto), aspect inside
// temporal clauses (cim + perfective present, dok + imperfective, dok ne +
// perfective) and paraphrase (tek sto, samo sto nije, dok god).
const MODE_LABEL: Record<string, string> = {
  veznici: '🔀 Veznici',
  vid: '🎬 Vid',
  prijenos: '🔄 Preoblike',
};

const DATA = [
  {
    mode: 'veznici',
    q: '____ sam došao kući, počela je kiša. (odmah po dolasku)',
    opts: ['Čim', 'Dok', 'Otkako', 'Prije nego što'],
    answer: 'Čim',
    en: 'as soon as I got home, it started to rain',
    tip: 'Čim = odmah nakon (as soon as).',
  },
  {
    mode: 'veznici',
    q: '____ je čitao, slušao je glazbu. (istodobnost)',
    opts: ['Dok', 'Čim', 'Nakon što', 'Otkako'],
    answer: 'Dok',
    en: 'while he read, he listened to music',
    tip: 'Dok = istodobnost dviju radnji.',
  },
  {
    mode: 'veznici',
    q: 'Ostat ću ovdje ____ se ne vratiš.',
    opts: ['dok', 'čim', 'otkako', 'nakon što'],
    answer: 'dok',
    en: 'I will stay here until you come back',
    tip: 'Dok + ne = until: dok se ne vratiš.',
  },
  {
    mode: 'veznici',
    q: '____ god dođeš, bit ćeš dobrodošao.',
    opts: ['Kad', 'Čim', 'Dok', 'Što'],
    answer: 'Kad',
    en: 'whenever you come, you will be welcome',
    tip: 'Kad god = whenever.',
  },
  {
    mode: 'veznici',
    q: 'Nazvao me ____ što je otišao.',
    opts: ['prije nego', 'poslije nego', 'ranije nego', 'čim nego'],
    answer: 'prije nego',
    en: 'he called me before he left',
    tip: 'Prije nego što + rečenica.',
  },
  {
    mode: 'veznici',
    q: '____ smo večerali, gledali smo film.',
    opts: ['Nakon što', 'Prije nego što', 'Dok ne', 'Čim ne'],
    answer: 'Nakon što',
    en: 'after we had dinner, we watched a film',
    tip: 'Nakon što = poslije te radnje.',
  },
  {
    mode: 'veznici',
    q: '____ živim u Zagrebu, naučio sam puno. (od tog trenutka)',
    opts: ['Otkako', 'Dok', 'Čim', 'Nakon što'],
    answer: 'Otkako',
    en: 'since I have lived in Zagreb, I have learned a lot',
    tip: 'Otkako = od trenutka kad.',
  },
  {
    mode: 'veznici',
    q: 'Pričekaj ____ završim!',
    opts: ['da', 'dok da', 'čim', 'što'],
    answer: 'da',
    en: 'wait for me to finish!',
    tip: 'Pričekati/čekati DA + prezent.',
  },
  {
    mode: 'vid',
    q: 'Čim ____ , javit ću ti. (stići)',
    opts: ['stignem', 'stižem', 'stigao', 'stizat ću'],
    answer: 'stignem',
    en: 'as soon as I arrive, I will let you know',
    tip: 'Čim + SVRŠENI prezent (nikad futur I).',
  },
  {
    mode: 'vid',
    q: 'Dok ____ , ne ometaj me. (raditi)',
    opts: ['radim', 'uradim', 'radio', 'uradit ću'],
    answer: 'radim',
    en: 'while I am working, do not disturb me',
    tip: 'Dok (istodobnost) + nesvršeni prezent.',
  },
  {
    mode: 'vid',
    q: 'Dok ne ____ zadaću, ne izlaziš. (napisati)',
    opts: ['napišeš', 'pišeš', 'napisao', 'pisat ćeš'],
    answer: 'napišeš',
    en: 'no going out until you finish your homework',
    tip: 'Dok ne + svršeni prezent.',
  },
  {
    mode: 'vid',
    q: 'Veznik „čim” traži prezent kojega vida?',
    opts: ['svršenoga', 'nesvršenoga', 'obaju podjednako', 'nijednoga'],
    answer: 'svršenoga',
    en: 'cim takes the perfective present',
    tip: 'Čim stignem, čim završim, čim čuješ.',
  },
  {
    mode: 'vid',
    q: 'Kad ____ velik, bit ću pilot. (narasti)',
    opts: ['narastem', 'rastem', 'narastao', 'rast ću'],
    answer: 'narastem',
    en: 'when I grow up, I will be a pilot',
    tip: 'Budućnost u vremenskoj: svršeni prezent.',
  },
  {
    mode: 'vid',
    q: 'Svaki put kad ga ____ , nasmijem se. (vidjeti)',
    opts: ['vidim', 'ugledam jednom', 'vidio', 'vidjet ću'],
    answer: 'vidim',
    en: 'every time I see him, I smile',
    tip: 'Ponavljanje → nesvršeni prezent.',
  },
  {
    mode: 'vid',
    q: '„Dok” za istodobnost traži:',
    opts: ['nesvršeni vid', 'svršeni vid', 'pluskvamperfekt', 'kondicional'],
    answer: 'nesvršeni vid',
    en: 'simultaneous dok takes imperfective',
    tip: 'Dok čitam, dok radiš, dok spavaju.',
  },
  {
    mode: 'vid',
    q: 'Prije nego što ____ , provjeri adresu. (krenuti)',
    opts: ['kreneš', 'krećeš', 'krenuo', 'krenut ćeš'],
    answer: 'kreneš',
    en: 'before you set off, check the address',
    tip: 'Prije nego što + svršeni prezent.',
  },
  {
    mode: 'prijenos',
    q: '„Prvo je večerao, onda je izašao.” = „____ je večerao, izašao je.”',
    opts: ['Nakon što', 'Prije nego što', 'Dok', 'Otkako'],
    answer: 'Nakon što',
    en: 'after he had dinner, he went out',
    tip: 'Redoslijed radnji → nakon što.',
  },
  {
    mode: 'prijenos',
    q: '„Živim ovdje od 2015.” = „____ 2015. živim ovdje.”',
    opts: ['Od', 'Otkako', 'Do', 'Za'],
    answer: 'Od',
    en: 'I have lived here since 2015',
    tip: 'Od + godina; otkako + rečenica.',
  },
  {
    mode: 'prijenos',
    q: '„Izašao je, a prije toga je platio.” = „Platio je ____ je izašao.”',
    opts: ['prije nego što', 'nakon što', 'otkako', 'dok ne'],
    answer: 'prije nego što',
    en: 'he paid before he left',
    tip: 'Obratni redoslijed → prije nego što.',
  },
  {
    mode: 'prijenos',
    q: '„Otkako” znači:',
    opts: ['od trenutka kad', 'do trenutka kad', 'umjesto toga da', 'svaki put kad'],
    answer: 'od trenutka kad',
    en: 'otkako = ever since',
    tip: 'Otkako te znam, sve je ljepše.',
  },
  {
    mode: 'prijenos',
    q: '„Samo što nije stigao” znači:',
    opts: ['stići će svaki čas', 'nikad neće stići', 'odavno je stigao', 'ne želi stići'],
    answer: 'stići će svaki čas',
    en: 'he is about to arrive any moment',
    tip: 'Samo što nije + perfekt = neposredna budućnost.',
  },
  {
    mode: 'prijenos',
    q: '„Tek što je sjeo, zazvonio je telefon.” — „tek što” izriče:',
    opts: [
      'radnju odmah nakon druge',
      'radnju koja traje',
      'radnju koja se ponavlja',
      'buduću želju',
    ],
    answer: 'radnju odmah nakon druge',
    en: 'no sooner had he sat down…',
    tip: 'Tek što / samo što = čim, s nijansom iznenadnosti.',
  },
  {
    mode: 'prijenos',
    q: '„U trenutku kad” možemo kraće reći:',
    opts: ['kad', 'otkako', 'dok ne', 'pošto ne'],
    answer: 'kad',
    en: 'at the moment when = kad',
    tip: 'Kad je ušao, svi su ustali.',
  },
  {
    mode: 'prijenos',
    q: '„Dok god budeš učio, ići će ti dobro.” — „dok god” znači:',
    opts: ['sve vrijeme dok', 'odmah nakon što', 'prije nego što', 'jedanput kad'],
    answer: 'sve vrijeme dok',
    en: 'as long as you keep studying',
    tip: 'Dok god + futur II = trajni uvjet.',
  },
];

export { DATA as VREMENSKE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VremenskeDrill({ goBack, award }: Props) {
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
          key: 'vremenske',
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
          '⏳ Vremenske rečenice',
          'čim stignem, dok ne završiš — putting events in order',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — vrijeme je vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje vremenskim rečenicama! 💪'
                : 'Vremenske rečenice traže još vježbe.'}
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
      {H('⏳ Vremenske rečenice', 'čim stignem, dok ne završiš — putting events in order', goBack)}
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
