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

// C2 academic-register drill (C2 tranche 4, 2026-08-15): nominalization
// (glagolske imenice, baviti se + I), the passive and se-passive of research
// prose (podatci su prikupljeni, smatra se da), and hedging (mogli bi
// upućivati, u pravilu, nije isključeno).
const MODE_LABEL: Record<string, string> = {
  nominalizacija: '🏗️ Nominalizacija',
  pasiv: '🧪 Pasiv',
  ograda: '🛡️ Ograde',
};

const DATA = [
  {
    mode: 'nominalizacija',
    q: 'Glagol „istražiti” → imenica:',
    opts: ['istraživanje', 'istražitelj', 'istraženo', 'istražljivost'],
    answer: 'istraživanje',
    en: 'to research → research (noun)',
    tip: 'Glagolske imenice na -nje nose akademski stil.',
  },
  {
    mode: 'nominalizacija',
    q: 'Glagol „zaključiti” → imenica:',
    opts: ['zaključak', 'zaključenje svega', 'zaključivač', 'zaključnost'],
    answer: 'zaključak',
    en: 'to conclude → conclusion',
    tip: 'Zaključak rada; donijeti zaključak.',
  },
  {
    mode: 'nominalizacija',
    q: 'Glagol „primijeniti” → imenica:',
    opts: ['primjena', 'primjenjivač', 'primijenjenost', 'primjenba'],
    answer: 'primjena',
    en: 'to apply → application',
    tip: 'Primjena metode, u primjeni.',
  },
  {
    mode: 'nominalizacija',
    q: 'Glagol „objasniti” → imenica:',
    opts: ['objašnjenje', 'objasnidba', 'objasnitelj', 'objašnjivost'],
    answer: 'objašnjenje',
    en: 'to explain → explanation',
    tip: 'Ponuditi objašnjenje; uz objašnjenje.',
  },
  {
    mode: 'nominalizacija',
    q: '„Rad se bavi time što ljudi sele” akademski: „Rad se bavi ____ stanovništva.”',
    opts: ['iseljavanjem', 'iseliti', 'iseljeni', 'iseljenicima'],
    answer: 'iseljavanjem',
    en: 'the paper deals with the emigration of the population',
    tip: 'Nominalizacija: baviti se + instrumental glagolske imenice.',
  },
  {
    mode: 'nominalizacija',
    q: '„Cijene rastu” nominalizirano: „____ cijena”',
    opts: ['rast', 'rastenje', 'rastućost', 'porastlost'],
    answer: 'rast',
    en: 'prices rise → the rise of prices',
    tip: 'Rast cijena, pad potražnje — imenički stil.',
  },
  {
    mode: 'nominalizacija',
    q: '„Uvesti novu metodu” → „____ nove metode”',
    opts: ['uvođenje', 'uvedba', 'uvoz', 'uvedenost'],
    answer: 'uvođenje',
    en: 'introducing the new method',
    tip: 'Uvođenje + genitiv objekta.',
  },
  {
    mode: 'nominalizacija',
    q: 'Nominalizacija u akademskom stilu služi:',
    opts: [
      'sažimanju i neosobnosti',
      'zabavi čitatelja',
      'izražavanju osjećaja',
      'oponašanju govora',
    ],
    answer: 'sažimanju i neosobnosti',
    en: 'why academic prose nominalizes',
    tip: 'Zbija informaciju i skriva vršitelja.',
  },
  {
    mode: 'pasiv',
    q: 'Podatci ____ prikupljeni anketom.',
    opts: ['su', 'se', 'je', 'bi'],
    answer: 'su',
    en: 'the data were collected by survey',
    tip: 'Pasiv perfekta: su + trpni pridjev.',
  },
  {
    mode: 'pasiv',
    q: '„Analizirali smo uzorke” pasivno: „Uzorci ____ .”',
    opts: ['su analizirani', 'se analizirali', 'smo analizirali', 'su analizirali'],
    answer: 'su analizirani',
    en: 'the samples were analysed',
    tip: 'Trpni pridjev: analiziran, -a, -o (uzorci su analizirani).',
  },
  {
    mode: 'pasiv',
    q: 'Rezultati se ____ u tablici 2. (prikazati, se-pasiv)',
    opts: ['prikazuju', 'prikazani', 'prikazale', 'prikaže'],
    answer: 'prikazuju',
    en: 'the results are presented in Table 2',
    tip: 'Se-pasiv prezenta: rezultati se prikazuju.',
  },
  {
    mode: 'pasiv',
    q: 'Smatra se ____ je metoda pouzdana.',
    opts: ['da', 'kako bi', 'jer', 'što'],
    answer: 'da',
    en: 'it is considered that the method is reliable',
    tip: 'Bezlično: smatra se / drži se DA…',
  },
  {
    mode: 'pasiv',
    q: 'Ovdje ____ novi most. (graditi, se-pasiv)',
    opts: ['se gradi', 'gradi', 'je gradio', 'se izgrađen'],
    answer: 'se gradi',
    en: 'a new bridge is being built here',
    tip: 'Se-pasiv: gradi se, planira se, očekuje se.',
  },
  {
    mode: 'pasiv',
    q: 'Ispitanici su ____ u dvije skupine. (podijeliti)',
    opts: ['podijeljeni', 'podijelili', 'podjelu', 'podijelivši'],
    answer: 'podijeljeni',
    en: 'the participants were divided into two groups',
    tip: 'Trpni pridjev muškoga roda množine.',
  },
  {
    mode: 'pasiv',
    q: 'Pasiv u znanstvenom tekstu ističe:',
    opts: [
      'radnju i rezultat, a ne vršitelja',
      'ime autora',
      'osjećaje autora',
      'čitateljevu ulogu',
    ],
    answer: 'radnju i rezultat, a ne vršitelja',
    en: 'the passive foregrounds action and result',
    tip: 'Tko je mjerio, nevažno — važno je ŠTO je izmjereno.',
  },
  {
    mode: 'pasiv',
    q: 'Utvrđeno ____ da postoji povezanost.',
    opts: ['je', 'se', 'su', 'bi'],
    answer: 'je',
    en: 'it has been established that a correlation exists',
    tip: 'Bezlični pasiv: utvrđeno je, pokazano je, dokazano je.',
  },
  {
    mode: 'ograda',
    q: 'Oprezna tvrdnja: „Rezultati ____ upućivati na vezu.”',
    opts: ['mogli bi', 'moraju', 'hoće', 'jesu'],
    answer: 'mogli bi',
    en: 'the results might point to a link',
    tip: 'Kondicional ublažava: mogli bi upućivati.',
  },
  {
    mode: 'ograda',
    q: '„____ se pretpostaviti da je uzorak reprezentativan.”',
    opts: ['Može', 'Mora', 'Hoće', 'Smije'],
    answer: 'Može',
    en: 'it can be assumed that…',
    tip: 'Može se pretpostaviti / čini se — akademske ograde.',
  },
  {
    mode: 'ograda',
    q: '„Čini ____ da postoji obrazac.”',
    opts: ['se', 'mi', 'nam se to', 'je'],
    answer: 'se',
    en: 'it appears that a pattern exists',
    tip: 'Bezlično čini se — ograda bez vršitelja.',
  },
  {
    mode: 'ograda',
    q: 'Koji izraz UBLAŽAVA tvrdnju?',
    opts: ['u pravilu', 'bez sumnje', 'zasigurno', 'nepobitno'],
    answer: 'u pravilu',
    en: 'which expression hedges?',
    tip: 'U pravilu, uglavnom, donekle — ograde; zasigurno pojačava.',
  },
  {
    mode: 'ograda',
    q: 'Glagol „sugerirati” u odnosu na „dokazivati” je:',
    opts: ['oprezniji', 'snažniji', 'jednak', 'netočan'],
    answer: 'oprezniji',
    en: 'suggest is weaker than prove',
    tip: 'Rezultati sugeriraju < pokazuju < dokazuju.',
  },
  {
    mode: 'ograda',
    q: '„Prema dosadašnjim spoznajama…” izriče:',
    opts: [
      'ogradu prema budućim dokazima',
      'apsolutnu sigurnost',
      'osobno mišljenje',
      'sumnju u čitatelja',
    ],
    answer: 'ogradu prema budućim dokazima',
    en: 'to the best of current knowledge',
    tip: 'Ostavlja prostor da nova istraživanja promijene sliku.',
  },
  {
    mode: 'ograda',
    q: 'Umjesto „Ovo dokazuje…” opreznije je:',
    opts: [
      '„Ovo upućuje na…”',
      '„Ovo jamči…”',
      '„Ovo potvrđuje zauvijek…”',
      '„Ovo isključuje sve…”',
    ],
    answer: '„Ovo upućuje na…”',
    en: 'this points to… (hedged)',
    tip: 'Upućivati na, sugerirati, govoriti u prilog.',
  },
  {
    mode: 'ograda',
    q: '„Nije isključeno da…” znači:',
    opts: ['moguće je da', 'sigurno je da', 'nemoguće je da', 'zabranjeno je da'],
    answer: 'moguće je da',
    en: 'it cannot be ruled out that…',
    tip: 'Dvostruka negacija kao blaga mogućnost.',
  },
];

export { DATA as AKADEMSKI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AkademskiDrill({ goBack, award }: Props) {
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
          key: 'akademski',
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
          '🎓 Akademski stil',
          'istraživanje pokazuje, može se pretpostaviti — writing like a scholar',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — spremni za znanstveni rad! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje akademskim stilom! 💪'
                : 'Akademski stil traži još vježbe.'}
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
        '🎓 Akademski stil',
        'istraživanje pokazuje, može se pretpostaviti — writing like a scholar',
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
