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

// C1 conditional-sentences drill (C1 tranche 3, 2026-08-15): the three-way
// system — real (ako + prezent/futur II), potential (kad bi + kondicional I)
// and irreal (da + prezent/perfekt, kondicional II) — plus the cim/dok-ne
// present-tense rule and the politeness conditional.
const MODE_LABEL: Record<string, string> = {
  realne: '🌤️ Realne',
  potencijalne: '🌫️ Potencijalne',
  irealne: '🌑 Irealne',
};

const DATA = [
  {
    mode: 'realne',
    q: 'Ako ____ vremena, doći ću sutra.',
    opts: ['budem imao', 'imam ću', 'bih imao', 'imao'],
    answer: 'budem imao',
    en: 'if I have time, I will come tomorrow',
    tip: 'Realna pogodba: ako + futur II (ili prezent), u glavnoj futur I.',
  },
  {
    mode: 'realne',
    q: 'Ako sutra ____ kiša, izlet otpada.',
    opts: ['padne', 'bi padala', 'pala bude', 'bude padati'],
    answer: 'padne',
    en: 'if it rains tomorrow, the trip is off',
    tip: 'Ako + svršeni prezent: ako padne kiša.',
  },
  {
    mode: 'realne',
    q: 'Ako ne požurimo, ____ vlak.',
    opts: ['propustit ćemo', 'propustimo bismo', 'bismo propustili', 'propuštamo bili'],
    answer: 'propustit ćemo',
    en: 'if we do not hurry, we will miss the train',
    tip: 'Glavna surečenica realne pogodbe: futur I.',
  },
  {
    mode: 'realne',
    q: 'Nazovi me čim ____.',
    opts: ['stigneš', 'ćeš stići', 'bi stigao', 'budeš stizati ćeš'],
    answer: 'stigneš',
    en: 'call me as soon as you arrive',
    tip: 'Čim + svršeni PREZENT (nikad futur I): čim stigneš.',
  },
  {
    mode: 'realne',
    q: 'Ako ____ pitanja, slobodno ih postavite.',
    opts: ['imate', 'budete imati', 'biste imali', 'imali'],
    answer: 'imate',
    en: 'if you have questions, feel free to ask them',
    tip: 'Ako + prezent za opću/sadašnju pogodbu.',
  },
  {
    mode: 'realne',
    q: 'Dok ne ____ zadaću, nema igre.',
    opts: ['napišeš', 'ćeš napisati', 'bi napisao', 'pišeš ćeš'],
    answer: 'napišeš',
    en: 'no play until you finish your homework',
    tip: 'Dok ne + svršeni prezent.',
  },
  {
    mode: 'realne',
    q: 'Ako se ____ po planu, sve ćemo stići.',
    opts: ['bude radilo', 'radit će', 'bi radilo', 'radilo je'],
    answer: 'bude radilo',
    en: 'if work proceeds according to plan, we will manage everything',
    tip: 'Bezlična realna pogodba: ako se bude radilo (futur II).',
  },
  {
    mode: 'realne',
    q: 'Uzmi kišobran ako ____ van.',
    opts: ['ideš', 'ćeš ići', 'bi išao', 'pođeš li ćeš'],
    answer: 'ideš',
    en: 'take an umbrella if you are going out',
    tip: 'Ako + prezent; futur I ne dolazi iza ako.',
  },
  {
    mode: 'potencijalne',
    q: 'Kad ____ više novca, kupio bih stan.',
    opts: ['bih imao', 'budem imao', 'imam', 'bih imati'],
    answer: 'bih imao',
    en: 'if I had more money, I would buy a flat',
    tip: 'Potencijalna: kad bi + kondicional I u objema surečenicama.',
  },
  {
    mode: 'potencijalne',
    q: 'Kad bi me pitali, ____ im istinu.',
    opts: ['rekao bih', 'reći ću', 'kažem', 'bio bih rekao'],
    answer: 'rekao bih',
    en: 'if they asked me, I would tell them the truth',
    tip: 'Kondicional I u glavnoj: rekao bih.',
  },
  {
    mode: 'potencijalne',
    q: 'Što ____ da osvojiš milijun?',
    opts: ['bi učinio', 'ćeš učiniti', 'učiniš', 'budeš učinio'],
    answer: 'bi učinio',
    en: 'what would you do if you won a million?',
    tip: 'Hipotetsko pitanje: kondicional I.',
  },
  {
    mode: 'potencijalne',
    q: '____ li mi pomogli oko prijevoda? (uljudna zamolba)',
    opts: ['Biste', 'Hoćete', 'Budete', 'Bi'],
    answer: 'Biste',
    en: 'would you help me with the translation?',
    tip: 'Uljudni kondicional: Biste li mi pomogli…',
  },
  {
    mode: 'potencijalne',
    q: 'Kad bi vlakovi ____ na vrijeme, stizali bismo bez brige.',
    opts: ['polazili', 'polaze', 'pošli budu', 'polazit će'],
    answer: 'polazili',
    en: 'if trains left on time, we would arrive without worry',
    tip: 'Kad bi + pridjev radni: kad bi polazili.',
  },
  {
    mode: 'potencijalne',
    q: 'Volio bih da ____ češće viđamo.',
    opts: ['se', 'bismo se', 'ćemo se', 'smo se'],
    answer: 'se',
    en: 'I wish we saw each other more often',
    tip: 'Volio bih DA + prezent: da se viđamo.',
  },
  {
    mode: 'potencijalne',
    q: 'Bilo bi pametnije da ____ ranije.',
    opts: ['počnemo', 'počet ćemo', 'bismo počeli', 'počinjemo bili'],
    answer: 'počnemo',
    en: 'it would be smarter if we started earlier',
    tip: 'Bilo bi + da + prezent.',
  },
  {
    mode: 'potencijalne',
    q: 'Na tvom mjestu ____ to drukčije.',
    opts: ['riješio bih', 'riješit ću', 'riješim', 'bio sam riješio'],
    answer: 'riješio bih',
    en: 'in your place I would solve it differently',
    tip: 'Savjet kondicionalom: na tvom mjestu riješio bih…',
  },
  {
    mode: 'irealne',
    q: 'Da sam znao, ____ ti javio. (ali nisam znao)',
    opts: ['bio bih', 'bit ću', 'budem', 'bio sam'],
    answer: 'bio bih',
    en: 'had I known, I would have let you know',
    tip: 'Irealna prošlost: da + perfekt → kondicional II (bio bih javio).',
  },
  {
    mode: 'irealne',
    q: 'Da ____ vremena, pomogao bih ti sada. (nemam ga)',
    opts: ['imam', 'budem imao', 'bih imao', 'imao budem'],
    answer: 'imam',
    en: 'if I had time, I would help you now',
    tip: 'Irealna sadašnjost: DA + PREZENT (da imam).',
  },
  {
    mode: 'irealne',
    q: 'Da se nisi javio, ____ se zabrinuli.',
    opts: ['bili bismo', 'bit ćemo', 'budemo', 'smo bili'],
    answer: 'bili bismo',
    en: 'had you not called, we would have got worried',
    tip: 'Kondicional II u glavnoj surečenici.',
  },
  {
    mode: 'irealne',
    q: 'Sve bi bilo drukčije da ____ onaj posao.',
    opts: ['sam prihvatio', 'bih prihvatio', 'prihvatim', 'budem prihvatio'],
    answer: 'sam prihvatio',
    en: 'everything would be different had I taken that job',
    tip: 'Irealna prošlost: da + perfekt (da sam prihvatio).',
  },
  {
    mode: 'irealne',
    q: 'Kondicional II. od „doći” (ja, m. rod) glasi:',
    opts: ['bio bih došao', 'bih bio dolazim', 'došao bih bio ću', 'bio sam došao'],
    answer: 'bio bih došao',
    en: 'the past conditional of to come',
    tip: 'Kondicional II. = bio/bila + kondicional I.: bio bih došao.',
  },
  {
    mode: 'irealne',
    q: 'Da nije bilo gužve, ____ na vrijeme.',
    opts: ['stigli bismo', 'stižemo', 'stić ćemo', 'budemo stigli'],
    answer: 'stigli bismo',
    en: 'had there been no traffic, we would have arrived on time',
    tip: 'Bezlična irealna prošlost + kondicional.',
  },
  {
    mode: 'irealne',
    q: '„Ma ja bih to ____ davno riješio!” (pojačano, o prošlosti)',
    opts: ['bio', 'bilo', 'bit', 'budem'],
    answer: 'bio',
    en: 'I would have solved that ages ago!',
    tip: 'Umetnuto „bio” tvori kondicional II.: bih bio riješio.',
  },
  {
    mode: 'irealne',
    q: 'Nesreća se ne bi dogodila da su ____ propisi.',
    opts: ['poštovani', 'poštovali bi', 'se poštuju', 'bili poštivati'],
    answer: 'poštovani',
    en: 'the accident would not have happened had the rules been observed',
    tip: 'Pasivna irealna pogodba: da su poštovani.',
  },
];

export { DATA as POGODBENE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PogodbeneDrill({ goBack, award }: Props) {
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
          key: 'pogodbene',
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
        {H('🔀 Pogodbene rečenice', 'ako budem, kad bih, da sam — three worlds of if', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — sve tri pogodbe su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje pogodbama! 💪'
                : 'Pogodbene rečenice traže još vježbe.'}
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
      {H('🔀 Pogodbene rečenice', 'ako budem, kad bih, da sam — three worlds of if', goBack)}
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
