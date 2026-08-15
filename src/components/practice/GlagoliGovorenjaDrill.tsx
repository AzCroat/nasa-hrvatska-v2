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

// C2 verbs-of-speaking drill (C2 tranche 8, 2026-08-15): manner nuances
// (promrmljati, dobaciti, izlanuti, natuknuti), register (izjaviti,
// priopciti, ocitovati se vs reci) and reporting-verb choice in narrative
// (odbrusio, sapnula, zagrmio).
const MODE_LABEL: Record<string, string> = {
  nijanse: '🌗 Nijanse',
  registar: '🏛️ Registar',
  citiranje: '💬 Uz navod',
};

const DATA = [
  {
    mode: 'nijanse',
    q: '„Promrmljati” znači reći:',
    opts: ['tiho i nerazgovijetno', 'glasno', 'veselo', 'službeno'],
    answer: 'tiho i nerazgovijetno',
    en: 'to mutter',
    tip: 'Promrmljao je nešto sebi u bradu.',
  },
  {
    mode: 'nijanse',
    q: '„Dobaciti” znači:',
    opts: ['usput kratko reći', 'baciti predmet daleko', 'dugo objašnjavati', 'šutjeti'],
    answer: 'usput kratko reći',
    en: 'to toss off a remark',
    tip: 'Dobacio je šalu s vrata.',
  },
  {
    mode: 'nijanse',
    q: '„Procijediti kroz zube” znači reći:',
    opts: ['suzdržano i ljutito', 'veselo', 'glasno pjevajući', 'nježno'],
    answer: 'suzdržano i ljutito',
    en: 'to say through gritted teeth',
    tip: 'Bijes pod kontrolom.',
  },
  {
    mode: 'nijanse',
    q: '„Izlanuti” znači:',
    opts: ['reći nepromišljeno što nije trebalo', 'izgovoriti svečano', 'prešutjeti', 'ponoviti'],
    answer: 'reći nepromišljeno što nije trebalo',
    en: 'to blurt out',
    tip: 'Izlanuo je tajnu.',
  },
  {
    mode: 'nijanse',
    q: '„Natuknuti” znači:',
    opts: ['dati naslutiti, spomenuti neizravno', 'izreći izravno', 'narediti', 'otpjevati'],
    answer: 'dati naslutiti, spomenuti neizravno',
    en: 'to hint',
    tip: 'Natuknuo je da odlazi.',
  },
  {
    mode: 'nijanse',
    q: '„Prasnuti” u govoru znači:',
    opts: ['naglo planuti riječima', 'tiho šapnuti', 'svečano objaviti', 'polako čitati'],
    answer: 'naglo planuti riječima',
    en: 'to snap / burst out',
    tip: 'Prasnuo je: Dosta!',
  },
  {
    mode: 'nijanse',
    q: '„Zamucati” znači:',
    opts: ['zapeti u govoru', 'govoriti tečno', 'vikati', 'lagati'],
    answer: 'zapeti u govoru',
    en: 'to stammer',
    tip: 'Zamucao je od treme.',
  },
  {
    mode: 'nijanse',
    q: '„Otpovrnuti” (knjiški) znači:',
    opts: ['odgovoriti, uzvratiti', 'otići', 'otvoriti', 'odbiti pozdrav'],
    answer: 'odgovoriti, uzvratiti',
    en: 'to retort (literary)',
    tip: 'Star glagol iz pripovjedne proze.',
  },
  {
    mode: 'registar',
    q: 'U zapisniku umjesto „rekao je” stoji:',
    opts: ['izjavio je', 'dobacio je', 'promrmljao je', 'lanuo je'],
    answer: 'izjavio je',
    en: 'stated (official register)',
    tip: 'Izjaviti, istaknuti, navesti — službeni glagoli.',
  },
  {
    mode: 'registar',
    q: 'Novinski: „Ministar je ____ da ostavke neće biti.”',
    opts: ['poručio', 'šapnuo', 'promucao', 'zajecao'],
    answer: 'poručio',
    en: 'the minister conveyed',
    tip: 'Poručiti — javna poruka.',
  },
  {
    mode: 'registar',
    q: 'U znanstvenom radu autor:',
    opts: ['ističe, navodi, zaključuje', 'viče, šapće', 'dobacuje', 'mrmlja'],
    answer: 'ističe, navodi, zaključuje',
    en: 'the author notes, states, concludes',
    tip: 'Akademski repertoar glagola govorenja.',
  },
  {
    mode: 'registar',
    q: '„Napomenuti” rabimo za:',
    opts: ['usputnu, ali važnu dodatnu obavijest', 'glavnu tezu', 'svađu', 'pjesmu'],
    answer: 'usputnu, ali važnu dodatnu obavijest',
    en: 'to note in passing',
    tip: 'Valja napomenuti da…',
  },
  {
    mode: 'registar',
    q: '„Priopćiti” pripada:',
    opts: ['službenomu registru', 'žargonu', 'dječjem govoru', 'poeziji'],
    answer: 'službenomu registru',
    en: 'to officially communicate',
    tip: 'Priopćiti javnosti; priopćenje.',
  },
  {
    mode: 'registar',
    q: 'Odvjetnik u sudnici:',
    opts: ['iznosi, osporava, tvrdi', 'dobacuje i mrmlja', 'pjevuši', 'šuti obavezno'],
    answer: 'iznosi, osporava, tvrdi',
    en: 'counsel submits, contests, asserts',
    tip: 'Pravni glagoli govorenja.',
  },
  {
    mode: 'registar',
    q: '„Očitovati se” znači:',
    opts: ['službeno se izjasniti', 'razljutiti se', 'očistiti', 'pojaviti se'],
    answer: 'službeno se izjasniti',
    en: 'to make a formal statement',
    tip: 'Stranka se očitovala o navodima.',
  },
  {
    mode: 'registar',
    q: 'Razgovorna zamjena za „izjaviti”:',
    opts: ['reći', 'priopćiti', 'deklarirati', 'obznaniti'],
    answer: 'reći',
    en: 'the everyday verb is just reci',
    tip: 'Registri se biraju prema prigodi.',
  },
  {
    mode: 'citiranje',
    q: '„Doći ću”, ____ je i spustio slušalicu. (kratko, odlučno)',
    opts: ['odbrusio', 'zapjevao', 'promucao', 'zijevnuo'],
    answer: 'odbrusio',
    en: 'he snapped and hung up',
    tip: 'Odbrusiti = kratko i oštro odgovoriti.',
  },
  {
    mode: 'citiranje',
    q: '„Možda imaš pravo”, ____ je nakon stanke. (tiho priznanje)',
    opts: ['priznao', 'viknuo', 'naredio', 'izlanuo'],
    answer: 'priznao',
    en: 'he admitted after a pause',
    tip: 'Priznati — glagol popuštanja.',
  },
  {
    mode: 'citiranje',
    q: '„Svi van!”, ____ je zapovjednik.',
    opts: ['zagrmio', 'šapnuo', 'natuknuo', 'promrmljao'],
    answer: 'zagrmio',
    en: 'the commander thundered',
    tip: 'Zagrmjeti = viknuti gromko.',
  },
  {
    mode: 'citiranje',
    q: '„Nemoj nikome…”, ____ je urotnički.',
    opts: ['šapnula', 'izjavila', 'objavila', 'deklamirala'],
    answer: 'šapnula',
    en: 'she whispered conspiratorially',
    tip: 'Šapnuti — tiho i povjerljivo.',
  },
  {
    mode: 'citiranje',
    q: '„A što ako odbiju?”, ____ se ona. (pitanje sebi/skupini)',
    opts: ['zapitala', 'odgovorila', 'naredila', 'otpjevala'],
    answer: 'zapitala',
    en: 'she wondered',
    tip: 'Zapitati se — glagol unutarnjeg pitanja.',
  },
  {
    mode: 'citiranje',
    q: '„To je sve vaša krivnja!”, ____ je bijesno.',
    opts: ['optužila', 'pohvalila', 'zamolila', 'čestitala'],
    answer: 'optužila',
    en: 'she accused furiously',
    tip: 'Glagol nosi govorni čin: optužiti.',
  },
  {
    mode: 'citiranje',
    q: '„Bit će sve u redu”, ____ ju je.',
    opts: ['utješio', 'optužio', 'prekorio', 'izazvao'],
    answer: 'utješio',
    en: 'he comforted her',
    tip: 'Tješiti — govorni čin potpore.',
  },
  {
    mode: 'citiranje',
    q: 'Birano izvješćivanje izbjegava:',
    opts: [
      'stalno „rekao je” — bira precizniji glagol',
      'svaku promjenu glagola',
      'navodnike',
      'imena',
    ],
    answer: 'stalno „rekao je” — bira precizniji glagol',
    en: 'vary the reporting verb',
    tip: 'Odbrusio, priznao, natuknuo — nijansa nosi priču.',
  },
];

export { DATA as GLAGOLI_GOVORENJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GlagoliGovorenjaDrill({ goBack, award }: Props) {
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
          key: 'glagoligovorenja',
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
          '🗣️ Glagoli govorenja',
          'promrmljati, odbrusiti, natuknuti — a hundred ways to say said',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — svi glasovi su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje glagolima govorenja! 💪'
                : 'Glagoli govorenja traže još vježbe.'}
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
        '🗣️ Glagoli govorenja',
        'promrmljati, odbrusiti, natuknuti — a hundred ways to say said',
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
