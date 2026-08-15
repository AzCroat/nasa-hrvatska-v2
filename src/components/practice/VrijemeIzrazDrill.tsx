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

// C1 time-expressions drill (C1 tranche 7, 2026-08-15): the case system
// of time (genitive prosle godine, accusative cijelu noc, instrumental
// nedjeljom), time adverbs (zimi, jutros, netom, preksutra) and fixed
// expressions (uoci + G, tijekom, do daljnjega, s vremena na vrijeme).
const MODE_LABEL: Record<string, string> = {
  padezi: '📐 Padeži vremena',
  prilozi: '⏱️ Prilozi',
  izrazi: '🧭 Izrazi',
};

const DATA = [
  {
    mode: 'padezi',
    q: '„____ godine bili smo na moru.” (prošla)',
    opts: ['Prošle', 'Prošlu', 'Prošloj', 'Prošlom'],
    answer: 'Prošle',
    en: 'last year we were at the seaside',
    tip: 'Vremenski GENITIV: prošle godine, ovog tjedna.',
  },
  {
    mode: 'padezi',
    q: '„Radio je ____ noć.” (cijela)',
    opts: ['cijelu', 'cijele', 'cijeloj', 'cijelom'],
    answer: 'cijelu',
    en: 'he worked the whole night',
    tip: 'Trajanje → AKUZATIV: cijelu noć, cijeli dan.',
  },
  {
    mode: 'padezi',
    q: '„____ idemo na plivanje.” (nedjelja, redovito)',
    opts: ['Nedjeljom', 'Nedjelje', 'U nedjelje', 'Nedjelji'],
    answer: 'Nedjeljom',
    en: 'on Sundays we go swimming',
    tip: 'Ponavljanje → INSTRUMENTAL: nedjeljom, jutrom.',
  },
  {
    mode: 'padezi',
    q: '„Vidimo se ____ ponedjeljak.”',
    opts: ['u', 'na', 'za u', 'pri'],
    answer: 'u',
    en: 'see you on Monday',
    tip: 'Dan u tjednu: u + akuzativ.',
  },
  {
    mode: 'padezi',
    q: '„Rođen je ____ svibnju.”',
    opts: ['u', 'na', 'za', 'pri'],
    answer: 'u',
    en: 'he was born in May',
    tip: 'Mjesec: u + lokativ (u svibnju).',
  },
  {
    mode: 'padezi',
    q: '„Vraćamo se ____ dva sata.” (nakon toliko)',
    opts: ['za', 'u', 'na', 'po'],
    answer: 'za',
    en: 'we are back in two hours',
    tip: 'Za + A = nakon isteka: za dva sata.',
  },
  {
    mode: 'padezi',
    q: '„Ostajemo ____ dva tjedna.” (toliko dugo)',
    opts: ['na', 'za', 'u', 'po'],
    answer: 'na',
    en: 'we are staying for two weeks',
    tip: 'Na + A = planirano trajanje boravka.',
  },
  {
    mode: 'padezi',
    q: '„____ ručka ne razgovaramo o poslu.” (dok traje)',
    opts: ['Za vrijeme', 'U vrijeme na', 'Kroz', 'Nakon'],
    answer: 'Za vrijeme',
    en: 'during lunch we do not talk shop',
    tip: 'Za vrijeme + G = tijekom.',
  },
  {
    mode: 'prilozi',
    q: 'Prilog za „svake zime” glasi:',
    opts: ['zimi', 'zimom', 'u zimu', 'zimski'],
    answer: 'zimi',
    en: 'in winter (adverb)',
    tip: 'Stari lokativi: zimi, ljeti.',
  },
  {
    mode: 'prilozi',
    q: 'Prilog za „svakoga jutra” glasi:',
    opts: ['ujutro', 'jutrom samo', 'na jutro', 'jutros'],
    answer: 'ujutro',
    en: 'in the morning',
    tip: 'Ujutro, popodne, navečer.',
  },
  {
    mode: 'prilozi',
    q: '„Jutros” znači:',
    opts: ['ovoga jutra', 'svakog jutra', 'sutra ujutro', 'jučer ujutro'],
    answer: 'ovoga jutra',
    en: 'this morning',
    tip: 'Jutros, večeras, noćas, danas — ovaj + doba.',
  },
  {
    mode: 'prilozi',
    q: '„Preksutra” znači:',
    opts: ['za dva dana', 'jučer', 'prije dva dana', 'sutra navečer'],
    answer: 'za dva dana',
    en: 'the day after tomorrow',
    tip: 'Sutra → preksutra; jučer → prekjučer.',
  },
  {
    mode: 'prilozi',
    q: '„Odavno” znači:',
    opts: ['već dugo vremena', 'nedavno', 'uskoro', 'nikad'],
    answer: 'već dugo vremena',
    en: 'for a long time now',
    tip: 'Odavno te nisam vidio.',
  },
  {
    mode: 'prilozi',
    q: '„Netom” znači:',
    opts: ['upravo, maloprije', 'davno', 'možda', 'kasno'],
    answer: 'upravo, maloprije',
    en: 'just now (formal)',
    tip: 'Netom završeni radovi — birani prilog.',
  },
  {
    mode: 'prilozi',
    q: '„Uoči” u „uoči praznika” znači:',
    opts: ['neposredno prije', 'poslije', 'tijekom', 'umjesto'],
    answer: 'neposredno prije',
    en: 'on the eve of',
    tip: 'Uoči + G: uoči Božića, uoči ispita.',
  },
  {
    mode: 'prilozi',
    q: '„Potkraj” u „potkraj godine” znači:',
    opts: ['pri kraju', 'na početku', 'sredinom', 'poslije'],
    answer: 'pri kraju',
    en: 'towards the end of',
    tip: 'Potkraj + G: potkraj stoljeća.',
  },
  {
    mode: 'izrazi',
    q: '„____ mjeseca stiže isplata.” (tijekom + puni oblik)',
    opts: ['Tijekom', 'U tijeku od', 'Kroz za', 'Preko na'],
    answer: 'Tijekom',
    en: 'during the month the payment arrives',
    tip: 'Tijekom + G — birani izraz protezanja.',
  },
  {
    mode: 'izrazi',
    q: '„Sastanak je odgođen ____ daljnjega.”',
    opts: ['do', 'od', 'za', 'iz'],
    answer: 'do',
    en: 'postponed until further notice',
    tip: 'Do daljnjega — ustaljeni izraz.',
  },
  {
    mode: 'izrazi',
    q: '„____ deset godina grad se udvostručio.” (unatrag)',
    opts: ['U posljednjih', 'Za posljednje u', 'Od posljednjih na', 'Kroz posljednja'],
    answer: 'U posljednjih',
    en: 'in the last ten years',
    tip: 'U posljednjih + G: u posljednjih deset godina.',
  },
  {
    mode: 'izrazi',
    q: '„Svako ____ netko pokuca.” (kratki razmaci)',
    opts: ['malo', 'vrijeme', 'čas na', 'tren u'],
    answer: 'malo',
    en: 'every so often someone knocks',
    tip: 'Svako malo = često.',
  },
  {
    mode: 'izrazi',
    q: '„S ____ na vrijeme” znači povremeno.',
    opts: ['vremena', 'vremenom', 'vrijeme', 'vremenu'],
    answer: 'vremena',
    en: 'from time to time',
    tip: 'S vremena na vrijeme — ustaljena sveza.',
  },
  {
    mode: 'izrazi',
    q: '„U zadnji ____ smo stigli.” (krajnji trenutak)',
    opts: ['čas', 'sat', 'dan', 'put'],
    answer: 'čas',
    en: 'we made it at the last moment',
    tip: 'U zadnji čas = u posljednji trenutak.',
  },
  {
    mode: 'izrazi',
    q: '„Dan ____ dan sve je bolje.”',
    opts: ['za', 'po', 'uz', 'na'],
    answer: 'za',
    en: 'day by day it gets better',
    tip: 'Dan za danom / dan za dan — postupnost.',
  },
  {
    mode: 'izrazi',
    q: '„Nekoć” znači:',
    opts: ['nekada davno', 'uskoro', 'nikada', 'upravo sada'],
    answer: 'nekada davno',
    en: 'once, long ago',
    tip: 'Nekoć davno — pripovjedni početak.',
  },
];

export { DATA as VRIJEME_IZRAZ_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VrijemeIzrazDrill({ goBack, award }: Props) {
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
          key: 'vrijemeizraz',
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
          '🕰️ Izricanje vremena',
          'prošle godine, cijelu noć, nedjeljom — time through the cases',
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
                ? 'Vrlo dobro izricanje vremena! 💪'
                : 'Izricanje vremena traži još vježbe.'}
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
        '🕰️ Izricanje vremena',
        'prošle godine, cijelu noć, nedjeljom — time through the cases',
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
