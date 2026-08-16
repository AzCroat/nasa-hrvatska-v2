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

// B2 n/t-stem-nouns drill (B2 tranche 7, 2026-08-15): the n-stems (ime/
// imena, vrijeme/vremena, rame) and t-stems (tele/teleta, young-animal
// nouns with collective plurals in -ad) through their paradigms and in
// sentences.
const MODE_LABEL: Record<string, string> = {
  sklonidba: '📐 Sklonidba',
  mnozina: '👥 Množina',
  recenica: '✍️ U rečenici',
};

const DATA = [
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „ime” glasi:',
    opts: ['imena', 'ima', 'imeta', 'imenu'],
    answer: 'imena',
    en: 'of the name',
    tip: 'N-proširak: ime → imena, imenu, imenom.',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „vrijeme” glasi:',
    opts: ['vremena', 'vrijemena', 'vremeta', 'vremenu'],
    answer: 'vremena',
    en: 'of the time',
    tip: 'Vrijeme → vremena (i kraćenje ije → e).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „rame” glasi:',
    opts: ['ramena', 'rama', 'rameta', 'ramenu'],
    answer: 'ramena',
    en: 'of the shoulder',
    tip: 'Rame → ramena, ramenu.',
  },
  {
    mode: 'sklonidba',
    q: 'Dativ jednine imenice „ime” glasi:',
    opts: ['imenu', 'imeni', 'imu', 'imenom'],
    answer: 'imenu',
    en: 'to the name',
    tip: 'Ime → imenu (proširena osnova imen-).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „tele” glasi:',
    opts: ['teleta', 'tela', 'telena', 'teletu'],
    answer: 'teleta',
    en: 'of the calf',
    tip: 'T-proširak: tele → teleta (kao dijete → djeteta).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „ždrijebe” glasi:',
    opts: ['ždrebeta', 'ždrijeba', 'ždrebena', 'ždrijebeta bez kraćenja'],
    answer: 'ždrebeta',
    en: 'of the foal',
    tip: 'Ždrijebe → ždrebeta (t-proširak + kraćenje).',
  },
  {
    mode: 'sklonidba',
    q: 'Instrumental jednine imenice „vrijeme” glasi:',
    opts: ['vremenom', 'vrijemenom', 'vremenima', 'vremenu'],
    answer: 'vremenom',
    en: 'with time',
    tip: 'S vremenom sve dolazi na svoje.',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „prezime” glasi:',
    opts: ['prezimena', 'prezima', 'prezimeta', 'prezimenu'],
    answer: 'prezimena',
    en: 'of the surname',
    tip: 'Prezime → prezimena (kao ime).',
  },
  {
    mode: 'mnozina',
    q: 'Nominativ množine imenice „ime” glasi:',
    opts: ['imena', 'imeni', 'imevi', 'imenovi'],
    answer: 'imena',
    en: 'names',
    tip: 'Srednji rod: imena, vremena, ramena.',
  },
  {
    mode: 'mnozina',
    q: 'Genitiv množine imenice „ime” glasi:',
    opts: ['imena', 'imenā bez duljine', 'imenova', 'imeni'],
    answer: 'imena',
    en: 'of the names',
    tip: 'G mn. = N mn. oblikom: imena (s duljinom u izgovoru).',
  },
  {
    mode: 'mnozina',
    q: 'Množina imenice „tele” glasi:',
    opts: ['telad (zbirno)', 'teleta', 'telovi', 'teleti'],
    answer: 'telad (zbirno)',
    en: 'calves (collective)',
    tip: 'T-proširak u množini bira zbirnu: telad.',
  },
  {
    mode: 'mnozina',
    q: 'Množina imenice „dugme” glasi:',
    opts: ['dugmad (zbirno)', 'dugmeta', 'dugmevi', 'dugmi'],
    answer: 'dugmad (zbirno)',
    en: 'buttons (collective)',
    tip: 'Dugme → dugmad (kao telad, momčad).',
  },
  {
    mode: 'mnozina',
    q: '„Vremena se mijenjaju” — oblik „vremena” je:',
    opts: [
      'nominativ množine',
      'genitiv jednine u množinskoj službi',
      'akuzativ jednine',
      'vokativ',
    ],
    answer: 'nominativ množine',
    en: 'times are changing',
    tip: 'N mn.: vremena se mijenjaju.',
  },
  {
    mode: 'mnozina',
    q: 'Dativ množine od „rame” glasi:',
    opts: ['ramenima', 'ramenama', 'ramenu', 'ramama'],
    answer: 'ramenima',
    en: 'to the shoulders',
    tip: 'DLI mn.: ramenima, imenima, vremenima.',
  },
  {
    mode: 'mnozina',
    q: 'Zbirna množina od „momče” (mladić) je:',
    opts: ['momčad', 'momci', 'momčeta', 'momčevi'],
    answer: 'momčad',
    en: 'the lads / the team',
    tip: 'Momče → momčad — otuda i sportska momčad!',
  },
  {
    mode: 'mnozina',
    q: 'Imenice s t-proširkom najčešće znače:',
    opts: ['mladunčad i maleno', 'strojeve', 'apstraktno', 'zanimanja'],
    answer: 'mladunčad i maleno',
    en: 't-stem nouns name the young',
    tip: 'Tele, pile, štene, dijete, janje — mladunčad.',
  },
  {
    mode: 'recenica',
    q: 'Nema ga već dosta ____ . (vrijeme)',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: 'he has been gone quite a while',
    tip: 'Dosta + G: dosta vremena.',
  },
  {
    mode: 'recenica',
    q: 'Zovem te u ____ svih nas. (ime)',
    opts: ['ime', 'imenu', 'imena', 'imenom'],
    answer: 'ime',
    en: 'I call you on behalf of us all',
    tip: 'U ime + G — ustaljeni izraz (A oblika ime).',
  },
  {
    mode: 'recenica',
    q: 'Ptica mi je sletjela na ____ . (rame)',
    opts: ['rame', 'ramenu', 'ramena', 'ramenom'],
    answer: 'rame',
    en: 'a bird landed on my shoulder',
    tip: 'Na + A (smjer): na rame.',
  },
  {
    mode: 'recenica',
    q: 'Nosio je dijete na ____ . (ramena, mn.)',
    opts: ['ramenima', 'ramena', 'ramenama', 'rame'],
    answer: 'ramenima',
    en: 'he carried the child on his shoulders',
    tip: 'Na + L (mjesto): na ramenima.',
  },
  {
    mode: 'recenica',
    q: 'Po ____ suđenja, sve je jasno. (vrijeme)',
    opts: ['vremenu', 'vremena', 'vrijeme', 'vremenom'],
    answer: 'vremenu',
    en: 'judging by the timing',
    tip: 'Po + L: po vremenu.',
  },
  {
    mode: 'recenica',
    q: 'Krava se brine o svojem ____ . (tele)',
    opts: ['teletu', 'teleta', 'tele', 'teletom'],
    answer: 'teletu',
    en: 'the cow looks after its calf',
    tip: 'O + L: o teletu.',
  },
  {
    mode: 'recenica',
    q: 'Oslovili su ga punim ____ . (ime i prezime)',
    opts: ['imenom i prezimenom', 'imena i prezimena', 'ime i prezime', 'imenu i prezimenu'],
    answer: 'imenom i prezimenom',
    en: 'they addressed him by full name',
    tip: 'Instrumental sredstva: imenom i prezimenom.',
  },
  {
    mode: 'recenica',
    q: 'S ____ dolazi i mudrost. (vrijeme)',
    opts: ['vremenom', 'vremena', 'vrijeme', 'vremenu'],
    answer: 'vremenom',
    en: 'with time comes wisdom',
    tip: 'S + I: s vremenom.',
  },
];

export { DATA as IMENICE_ME_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ImeniceMeDrill({ goBack, award }: Props) {
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
          key: 'imenicame',
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
        {H('🐣 Imenice tipa ime', 'ime/imena, tele/teleta — the nouns that grow a stem', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — proširci su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje imenicama tipa ime! 💪'
                : 'Imenice tipa ime traže još vježbe.'}
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
      {H('🐣 Imenice tipa ime', 'ime/imena, tele/teleta — the nouns that grow a stem', goBack)}
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
