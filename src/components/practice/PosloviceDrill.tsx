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

// C2 proverbs drill (C2 tranche 9, 2026-08-15): completing the canonical
// proverbs, reading their meanings, and choosing the right proverb for a
// situation.
const MODE_LABEL: Record<string, string> = {
  dopuna: '🧩 Dopuna',
  znacenje: '💡 Značenje',
  uporaba: '🎯 Uporaba',
};

const DATA = [
  {
    mode: 'dopuna',
    q: '„Tko rano rani, dvije sreće ____ .”',
    opts: ['grabi', 'spava', 'gubi', 'čeka'],
    answer: 'grabi',
    en: 'the early bird catches two lucks',
    tip: 'Najpoznatija poslovica o marljivosti.',
  },
  {
    mode: 'dopuna',
    q: '„Ispeci pa ____ .”',
    opts: ['reci', 'jedi', 'plati', 'baci'],
    answer: 'reci',
    en: 'think before you speak (bake, then say)',
    tip: 'Promisli prije nego što kažeš.',
  },
  {
    mode: 'dopuna',
    q: '„Bez muke nema ____ .”',
    opts: ['nauke', 'ruke', 'struke', 'buke'],
    answer: 'nauke',
    en: 'no pain, no gain (no learning)',
    tip: 'Trud je uvjet znanja.',
  },
  {
    mode: 'dopuna',
    q: '„Željezo se kuje dok je ____ .”',
    opts: ['vruće', 'hladno', 'tvrdo', 'sjajno'],
    answer: 'vruće',
    en: 'strike while the iron is hot',
    tip: 'Prilika se koristi odmah.',
  },
  {
    mode: 'dopuna',
    q: '„Vrana vrani oči ne ____ .”',
    opts: ['vadi', 'pere', 'sklapa', 'boji'],
    answer: 'vadi',
    en: 'crows do not peck each other\u2019s eyes',
    tip: 'Svoji svoje ne odaju.',
  },
  {
    mode: 'dopuna',
    q: '„U laži su kratke ____ .”',
    opts: ['noge', 'ruke', 'riječi', 'sjene'],
    answer: 'noge',
    en: 'lies have short legs',
    tip: 'Laž se brzo otkrije.',
  },
  {
    mode: 'dopuna',
    q: '„Tko drugome jamu kopa, sam u nju ____ .”',
    opts: ['pada', 'gleda', 'skače', 'baca'],
    answer: 'pada',
    en: 'who digs a pit falls into it',
    tip: 'Zloba se obije o glavu.',
  },
  {
    mode: 'dopuna',
    q: '„Čovjek snuje, Bog ____ .”',
    opts: ['određuje', 'kuha', 'putuje', 'spava'],
    answer: 'određuje',
    en: 'man proposes, God disposes',
    tip: 'Planovi su krhki.',
  },
  {
    mode: 'znacenje',
    q: '„Tiha voda brege dere” znači:',
    opts: ['mirni ljudi postižu najviše', 'voda uništava', 'šutnja je zlato', 'planine su opasne'],
    answer: 'mirni ljudi postižu najviše',
    en: 'still waters run deep',
    tip: 'Tiha ustrajnost pobjeđuje.',
  },
  {
    mode: 'znacenje',
    q: '„Nije zlato sve što sja” znači:',
    opts: ['izgled vara', 'zlato je bezvrijedno', 'sjaj je važan', 'kupuj zlato'],
    answer: 'izgled vara',
    en: 'all that glitters is not gold',
    tip: 'Vanjština nije mjerilo.',
  },
  {
    mode: 'znacenje',
    q: '„Papir trpi sve” znači:',
    opts: [
      'napisati se može bilo što — istina je drugo',
      'papir je izdržljiv',
      'pisma su duga',
      'tiskara griješi',
    ],
    answer: 'napisati se može bilo što — istina je drugo',
    en: 'paper endures anything',
    tip: 'Zapisano nije nužno istinito.',
  },
  {
    mode: 'znacenje',
    q: '„Odijelo ne čini čovjeka” znači:',
    opts: ['vrijednost nije u vanjštini', 'odjeća je skupa', 'krojači griješe', 'moda prolazi'],
    answer: 'vrijednost nije u vanjštini',
    en: 'clothes do not make the man',
    tip: 'Karakter iznad izgleda.',
  },
  {
    mode: 'znacenje',
    q: '„Krv nije voda” znači:',
    opts: [
      'obiteljske veze su snažne',
      'krv je gušća tekućina',
      'voda je zdravija',
      'rodbina se svađa',
    ],
    answer: 'obiteljske veze su snažne',
    en: 'blood is thicker than water',
    tip: 'Obitelj se osjeti.',
  },
  {
    mode: 'znacenje',
    q: '„Daleko od očiju, daleko od srca” znači:',
    opts: [
      'odsutni se brzo zaboravljaju',
      'ljubav je slijepa',
      'oči su ogledalo',
      'srce je daleko',
    ],
    answer: 'odsutni se brzo zaboravljaju',
    en: 'out of sight, out of mind',
    tip: 'Udaljenost hladi osjećaje.',
  },
  {
    mode: 'znacenje',
    q: '„Jabuka ne pada daleko od stabla” znači:',
    opts: ['djeca nalikuju roditeljima', 'voće brzo trune', 'stabla su niska', 'berba je blizu'],
    answer: 'djeca nalikuju roditeljima',
    en: 'the apple does not fall far from the tree',
    tip: 'Nasljeđe se vidi.',
  },
  {
    mode: 'znacenje',
    q: '„Prvo skoči pa reci hop” upozorava:',
    opts: ['ne hvali se prije učinka', 'skači više', 'budi brz', 'govori glasno'],
    answer: 'ne hvali se prije učinka',
    en: 'do not say hop before you jump',
    tip: 'Obrnuta pouka: učini pa objavi.',
  },
  {
    mode: 'uporaba',
    q: 'Kolega stalno odgađa posao. Prikladna poslovica:',
    opts: [
      'Što možeš danas, ne ostavljaj za sutra.',
      'Tiha voda brege dere.',
      'Krv nije voda.',
      'Vrana vrani oči ne vadi.',
    ],
    answer: 'Što možeš danas, ne ostavljaj za sutra.',
    en: 'do not put off till tomorrow…',
    tip: 'Poslovica protiv odgađanja.',
  },
  {
    mode: 'uporaba',
    q: 'Netko sudi ljude po odjeći. Prikladna poslovica:',
    opts: [
      'Odijelo ne čini čovjeka.',
      'Ispeci pa reci.',
      'U laži su kratke noge.',
      'Željezo se kuje dok je vruće.',
    ],
    answer: 'Odijelo ne čini čovjeka.',
    en: 'judging by appearance',
    tip: 'Protiv površnosti.',
  },
  {
    mode: 'uporaba',
    q: 'Prijatelj je izlanuo neprovjerenu vijest. Prikladna poslovica:',
    opts: ['Ispeci pa reci.', 'Bez muke nema nauke.', 'Krv nije voda.', 'Tko rano rani…'],
    answer: 'Ispeci pa reci.',
    en: 'think before you speak',
    tip: 'Za brzoplete jezike.',
  },
  {
    mode: 'uporaba',
    q: 'Prilika je savršena — treba djelovati ODMAH:',
    opts: [
      'Željezo se kuje dok je vruće.',
      'Papir trpi sve.',
      'Daleko od očiju…',
      'Odijelo ne čini čovjeka.',
    ],
    answer: 'Željezo se kuje dok je vruće.',
    en: 'strike now',
    tip: 'Poslovica trenutka.',
  },
  {
    mode: 'uporaba',
    q: 'Lijenom studentu pred ispit poručujemo:',
    opts: ['Bez muke nema nauke.', 'Krv nije voda.', 'Nije zlato sve što sja.', 'Vrana vrani…'],
    answer: 'Bez muke nema nauke.',
    en: 'no studying, no knowledge',
    tip: 'Trud prije znanja.',
  },
  {
    mode: 'uporaba',
    q: 'Sin je izrastao u očevu sliku. Kažemo:',
    opts: [
      'Jabuka ne pada daleko od stabla.',
      'U laži su kratke noge.',
      'Tiha voda brege dere.',
      'Papir trpi sve.',
    ],
    answer: 'Jabuka ne pada daleko od stabla.',
    en: 'like father, like son',
    tip: 'Nasljednost osobina.',
  },
  {
    mode: 'uporaba',
    q: 'Spletkar je stradao od vlastite spletke:',
    opts: [
      'Tko drugome jamu kopa, sam u nju pada.',
      'Ispeci pa reci.',
      'Krv nije voda.',
      'Tko rano rani…',
    ],
    answer: 'Tko drugome jamu kopa, sam u nju pada.',
    en: 'hoist by his own petard',
    tip: 'Pravda poetike.',
  },
  {
    mode: 'uporaba',
    q: 'Poslovice u eseju rabimo:',
    opts: [
      'štedljivo, kao začin argumenta',
      'u svakoj rečenici',
      'umjesto dokaza',
      'samo u naslovu',
    ],
    answer: 'štedljivo, kao začin argumenta',
    en: 'proverbs season, not replace, argument',
    tip: 'Mjera je stil.',
  },
];

export { DATA as POSLOVICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PosloviceDrill({ goBack, award }: Props) {
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
          key: 'poslovice',
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
        {H('🌾 Poslovice', 'tko rano rani, ispeci pa reci — the wisdom in the language', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — narodna mudrost je vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro poznavanje poslovica! 💪'
                : 'Poslovice traže još vježbe.'}
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
      {H('🌾 Poslovice', 'tko rano rani, ispeci pa reci — the wisdom in the language', goBack)}
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
