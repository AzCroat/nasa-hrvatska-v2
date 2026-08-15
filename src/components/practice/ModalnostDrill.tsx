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

// C2 epistemic-modality drill (C2 tranche 6, 2026-08-15): supposition
// (bit ce da, zacijelo, po svoj prilici; standard alternatives to mora da),
// obligation shades (trebao je, ima se, valja, smjeti) and hedging
// (cini se, koliko znam, navodno, u nacelu).
const MODE_LABEL: Record<string, string> = {
  pretpostavka: '🔮 Pretpostavka',
  obveza: '📜 Obveza',
  ograda: '🛡️ Ograde',
};

const DATA = [
  {
    mode: 'pretpostavka',
    q: '„____ da je već stigao.” (zaključujem po svemu)',
    opts: ['Bit će', 'Hoće', 'Mora biti', 'Trebat će'],
    answer: 'Bit će',
    en: 'he must have arrived by now',
    tip: 'Bit će da + perfekt = zacijelo (epistemički futur).',
  },
  {
    mode: 'pretpostavka',
    q: '„Netko kuca. ____ je poštar.”',
    opts: ['Bit će da', 'Neka', 'Čim', 'Makar'],
    answer: 'Bit će da',
    en: 'that will be the postman',
    tip: 'Pretpostavka o sadašnjem: bit će da je.',
  },
  {
    mode: 'pretpostavka',
    q: 'Birana zamjena za razgovorno „mora da je zaboravio”:',
    opts: [
      'zacijelo je zaboravio',
      'morao je zaboraviti sve',
      'zaboravio je jer mora',
      'mora zaboraviti',
    ],
    answer: 'zacijelo je zaboravio',
    en: 'he must have forgotten (standard)',
    tip: 'Standard: zacijelo/vjerojatno/bit će da (mora da je razgovorno).',
  },
  {
    mode: 'pretpostavka',
    q: '„Zacijelo” znači:',
    opts: ['gotovo sigurno', 'nikako', 'djelomično', 'glasno'],
    answer: 'gotovo sigurno',
    en: 'zacijelo = most certainly',
    tip: 'Visok stupanj uvjerenosti.',
  },
  {
    mode: 'pretpostavka',
    q: '„Po svoj prilici” znači:',
    opts: ['najvjerojatnije', 'u svakom odijelu', 'izvana', 'službeno'],
    answer: 'najvjerojatnije',
    en: 'in all likelihood',
    tip: 'Ustaljena modalna formula.',
  },
  {
    mode: 'pretpostavka',
    q: '„Mogao bi biti u pravu” izriče:',
    opts: ['opreznu mogućnost', 'sigurnost', 'zabranu', 'prošlost'],
    answer: 'opreznu mogućnost',
    en: 'he might be right',
    tip: 'Kondicional od moći = oslabljena tvrdnja.',
  },
  {
    mode: 'pretpostavka',
    q: '„Vjerojatno neće doći” — govornik:',
    opts: ['procjenjuje na temelju znanja', 'zna sigurno', 'zapovijeda', 'pita'],
    answer: 'procjenjuje na temelju znanja',
    en: 'probably will not come',
    tip: 'Vjerojatno = procjena, ne činjenica.',
  },
  {
    mode: 'pretpostavka',
    q: 'Ljestvica sigurnosti od najslabije: „možda < ____ < zacijelo”.',
    opts: ['vjerojatno', 'sigurno', 'nipošto', 'jedva'],
    answer: 'vjerojatno',
    en: 'maybe < probably < surely',
    tip: 'Stupnjevanje epistemičke sigurnosti.',
  },
  {
    mode: 'obveza',
    q: '„Trebao je doći u osam” (a nije) izriče:',
    opts: ['neispunjeno očekivanje', 'sreću', 'uspjeh', 'zabranu'],
    answer: 'neispunjeno očekivanje',
    en: 'he was supposed to come at eight',
    tip: 'Trebati u perfektu = propušteno očekivanje.',
  },
  {
    mode: 'obveza',
    q: '„Imaš se javiti sutra” izriče:',
    opts: ['obvezu (moraš se javiti)', 'mogućnost', 'želju', 'prošlost'],
    answer: 'obvezu (moraš se javiti)',
    en: 'you are to report tomorrow',
    tip: 'Imati se + infinitiv = službena obveza.',
  },
  {
    mode: 'obveza',
    q: '„Valja požuriti” znači:',
    opts: ['treba požuriti', 'zabranjeno je žuriti', 'žurba ne pomaže', 'netko žuri'],
    answer: 'treba požuriti',
    en: 'one ought to hurry',
    tip: 'Valja + infinitiv = bezlična preporuka.',
  },
  {
    mode: 'obveza',
    q: '„Nije trebao to reći” izriče:',
    opts: ['prijekor za učinjeno', 'pohvalu', 'molbu', 'plan'],
    answer: 'prijekor za učinjeno',
    en: 'he should not have said that',
    tip: 'Niječno trebati u perfektu = prijekor.',
  },
  {
    mode: 'obveza',
    q: 'Razlika „morati” i „trebati”:',
    opts: ['morati je jača obveza', 'trebati je jača', 'iste su snage', 'trebati znači htjeti'],
    answer: 'morati je jača obveza',
    en: 'morati is stronger than trebati',
    tip: 'Moram (nema izbora) vs trebam (očekuje se).',
  },
  {
    mode: 'obveza',
    q: '„Smjeti” izriče:',
    opts: ['dopuštenje', 'sposobnost', 'želju', 'naviku'],
    answer: 'dopuštenje',
    en: 'smjeti = to be allowed',
    tip: 'Smijem li? = je li mi dopušteno?',
  },
  {
    mode: 'obveza',
    q: '„Ne smiješ to učiniti” izriče:',
    opts: ['zabranu', 'nemogućnost', 'savjet da požuriš', 'prošlost'],
    answer: 'zabranu',
    en: 'you must not do that',
    tip: 'Niječno smjeti = zabrana.',
  },
  {
    mode: 'obveza',
    q: '„Morao bih krenuti” (kondicional) ublažava:',
    opts: ['obvezu u pristojnu najavu', 'zabranu', 'pitanje', 'prošlost'],
    answer: 'obvezu u pristojnu najavu',
    en: 'I ought to get going',
    tip: 'Kondicional omekšava moranje.',
  },
  {
    mode: 'ograda',
    q: '„Čini se da su u pravu” izriče:',
    opts: ['dojam s ogradom', 'sigurnost', 'njihovu tvrdnju', 'laž'],
    answer: 'dojam s ogradom',
    en: 'it seems they are right',
    tip: 'Čini se da = ograđeni dojam.',
  },
  {
    mode: 'ograda',
    q: '„Koliko znam, trgovina je zatvorena” — govornik:',
    opts: ['ograđuje se dosegom svoga znanja', 'jamči', 'naređuje', 'citira zakon'],
    answer: 'ograđuje se dosegom svoga znanja',
    en: 'as far as I know',
    tip: 'Koliko znam/koliko mi je poznato = ograda.',
  },
  {
    mode: 'ograda',
    q: '„Navodno su se dogovorili” prenosi:',
    opts: ['tuđu nepotvrđenu tvrdnju', 'vlastito jamstvo', 'zapovijed', 'želju'],
    answer: 'tuđu nepotvrđenu tvrdnju',
    en: 'allegedly they agreed',
    tip: 'Navodno = prenosim, ne jamčim.',
  },
  {
    mode: 'ograda',
    q: '„Rekao bih da je tako” u raspravi je:',
    opts: ['uljudno ublažena tvrdnja', 'oštra tvrdnja', 'pitanje', 'isprika'],
    answer: 'uljudno ublažena tvrdnja',
    en: 'I would say so',
    tip: 'Kondicional govorenja = uljudna ograda.',
  },
  {
    mode: 'ograda',
    q: '„Ako se ne varam, sastanak je u tri.”',
    opts: ['ograda vlastite pouzdanosti', 'matematička tvrdnja', 'prijetnja', 'molba'],
    answer: 'ograda vlastite pouzdanosti',
    en: 'if I am not mistaken',
    tip: 'Formulaična ograda.',
  },
  {
    mode: 'ograda',
    q: '„Tobože” znači:',
    opts: ['kao da, navodno (s nevjericom)', 'stvarno', 'odmah', 'tajno'],
    answer: 'kao da, navodno (s nevjericom)',
    en: 'tobože = supposedly (sceptical)',
    tip: 'Tobože uči — a spava.',
  },
  {
    mode: 'ograda',
    q: '„U načelu se slažem” signalizira:',
    opts: ['slaganje s mogućim iznimkama', 'potpuno slaganje', 'odbijanje', 'ravnodušnost'],
    answer: 'slaganje s mogućim iznimkama',
    en: 'I agree in principle',
    tip: 'U načelu = načelno da, ali…',
  },
  {
    mode: 'ograda',
    q: 'Najjača tvrdnja među ponuđenima:',
    opts: [
      'Nedvojbeno je pobijedio.',
      'Navodno je pobijedio.',
      'Čini se da je pobijedio.',
      'Možda je pobijedio.',
    ],
    answer: 'Nedvojbeno je pobijedio.',
    en: 'undoubtedly — the strongest claim',
    tip: 'Nedvojbeno > zacijelo > vjerojatno > možda > navodno.',
  },
];

export { DATA as MODALNOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ModalnostDrill({ goBack, award }: Props) {
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
          key: 'modalnost',
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
          '🎚️ Izricanje sigurnosti',
          'bit će da je, zacijelo, navodno — how sure are you, really?',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — modalnost je vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje modalnošću! 💪'
                : 'Izricanje sigurnosti traži još vježbe.'}
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
        '🎚️ Izricanje sigurnosti',
        'bit će da je, zacijelo, navodno — how sure are you, really?',
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
