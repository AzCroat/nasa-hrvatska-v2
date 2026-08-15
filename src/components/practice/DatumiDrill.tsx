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

// C1 dates-and-time drill (C1 tranche 3, 2026-08-15): ordinal formation and
// declension, dates in the genitive (drugog svibnja, devedeset prve), month
// names, and the clock idioms that trip learners (pola osam = 7:30,
// petnaest do deset, vikendom).
const MODE_LABEL: Record<string, string> = {
  redni: '🥇 Redni brojevi',
  datum: '📆 Nadnevci',
  vrijeme: '⏰ Sat i razdoblja',
};

const DATA = [
  {
    mode: 'redni',
    q: 'Danas je ____ svibnja. (15.)',
    opts: ['petnaesti', 'petnaest', 'petnaestog', 'petnaesto'],
    answer: 'petnaesti',
    en: 'today is the fifteenth of May',
    tip: 'Datum kao subjekt: NOMINATIV rednoga broja — petnaesti svibnja.',
  },
  {
    mode: 'redni',
    q: 'Rođena je ____ svibnja. (2.)',
    opts: ['drugog', 'drugi', 'druga', 'dva'],
    answer: 'drugog',
    en: 'she was born on the second of May',
    tip: 'Nadnevak radnje: GENITIV — drugog(a) svibnja.',
  },
  {
    mode: 'redni',
    q: 'Sastanak je ____ ožujka. (21.)',
    opts: ['dvadeset prvog', 'dvadeset prvi', 'dvadeset jednog', 'dvadeset i jedan'],
    answer: 'dvadeset prvog',
    en: 'the meeting is on the 21st of March',
    tip: 'U složenim rednim brojevima sklanja se samo posljednji član.',
  },
  {
    mode: 'redni',
    q: 'U zaglavlju dopisa: „Zagreb, ____ kolovoza 2026.”',
    opts: ['15.', '15', 'petnaest', '15-og'],
    answer: '15.',
    en: 'Zagreb, 15 August 2026',
    tip: 'Redni broj pisan brojkom dobiva TOČKU: 15. kolovoza.',
  },
  {
    mode: 'redni',
    q: 'Živimo u ____ stoljeću. (21.)',
    opts: ['dvadeset prvom', 'dvadeset prvo', 'dvadesetprvom', 'dvadeset i jedan'],
    answer: 'dvadeset prvom',
    en: 'we live in the 21st century',
    tip: 'Lokativ rednoga broja: u dvadeset prvom stoljeću.',
  },
  {
    mode: 'redni',
    q: '____ godišnjica mature slavi se u lipnju. (10.)',
    opts: ['Deseta', 'Deset', 'Desete', 'Deseti'],
    answer: 'Deseta',
    en: 'the tenth anniversary of graduation',
    tip: 'Godišnjica je ž. roda: deseta.',
  },
  {
    mode: 'redni',
    q: 'Redni broj od 100 glasi:',
    opts: ['stoti', 'stotinjti', 'stotinski', 'stojni'],
    answer: 'stoti',
    en: 'the hundredth',
    tip: 'Sto → stoti (stota, stoto).',
  },
  {
    mode: 'redni',
    q: 'Osvojila je ____ mjesto na natjecanju. (7.)',
    opts: ['sedmo', 'sedam', 'sedmi', 'sedmu'],
    answer: 'sedmo',
    en: 'she took seventh place in the competition',
    tip: 'Mjesto je sr. roda: sedmo mjesto.',
  },
  {
    mode: 'datum',
    q: 'Praznik pada ____ lipnja. (22.)',
    opts: ['dvadeset drugog', 'dvadeset drugi', 'dvadeset dva', 'dvadeset druge'],
    answer: 'dvadeset drugog',
    en: 'the holiday falls on the 22nd of June',
    tip: 'Nadnevak: genitiv — dvadeset drugog lipnja.',
  },
  {
    mode: 'datum',
    q: 'Pismo je datirano ____. (1. rujna)',
    opts: ['prvog rujna', 'prvi rujan', 'jedan rujna', 'prvog rujan'],
    answer: 'prvog rujna',
    en: 'the letter is dated the first of September',
    tip: 'Oba člana u genitivu: prvog(a) rujna.',
  },
  {
    mode: 'datum',
    q: 'Mjesec koji dolazi nakon lipnja jest:',
    opts: ['srpanj', 'kolovoz', 'svibanj', 'rujan'],
    answer: 'srpanj',
    en: 'the month after June is July',
    tip: 'Lipanj (6.) → srpanj (7.) → kolovoz (8.).',
  },
  {
    mode: 'datum',
    q: 'Veljača dolazi ____ siječnja.',
    opts: ['poslije', 'prije', 'umjesto', 'tijekom'],
    answer: 'poslije',
    en: 'February comes after January',
    tip: 'Siječanj (1.) → veljača (2.).',
  },
  {
    mode: 'datum',
    q: 'Krajem ____ počinju adventske pripreme. (studeni)',
    opts: ['studenoga', 'studenija', 'studena', 'studenom'],
    answer: 'studenoga',
    en: 'at the end of November the Advent preparations begin',
    tip: 'Studeni se sklanja kao pridjev: G studenog(a).',
  },
  {
    mode: 'datum',
    q: 'U „tisuću devetsto devedeset prve” godina stoji u:',
    opts: ['genitivu', 'nominativu', 'lokativu', 'akuzativu'],
    answer: 'genitivu',
    en: 'the year is in the genitive (in 1991)',
    tip: 'Godina radnje: genitiv — devedeset prve (godine).',
  },
  {
    mode: 'datum',
    q: 'Radimo od ____ do petka.',
    opts: ['ponedjeljka', 'ponedjeljak', 'ponedjeljku', 'ponedjeljkom'],
    answer: 'ponedjeljka',
    en: 'we work from Monday to Friday',
    tip: 'Od + G: od ponedjeljka.',
  },
  {
    mode: 'datum',
    q: 'Svi sveti slave se ____ studenoga. (1.)',
    opts: ['prvog', 'prvi', 'jednog', 'prve'],
    answer: 'prvog',
    en: 'All Saints is celebrated on the 1st of November',
    tip: 'Nadnevak: genitiv rednoga broja.',
  },
  {
    mode: 'vrijeme',
    q: 'Sastanak počinje u ____ sati. (8)',
    opts: ['osam', 'osmim', 'osmih', 'osme'],
    answer: 'osam',
    en: 'the meeting starts at eight o’clock',
    tip: 'U + glavni broj: u osam sati.',
  },
  {
    mode: 'vrijeme',
    q: '„Pola ____” znači 7:30.',
    opts: ['osam', 'sedam', 'devet', 'sedam i pol'],
    answer: 'osam',
    en: 'half past seven (lit. half eight)',
    tip: 'Pola osam = pola PUTA DO osam = 7:30!',
  },
  {
    mode: 'vrijeme',
    q: '„____ deset” znači 9:45.',
    opts: ['Petnaest do', 'Četvrt na', 'Deset do', 'Petnaest poslije'],
    answer: 'Petnaest do',
    en: 'a quarter to ten',
    tip: 'Petnaest do deset — vrijeme prije punog sata.',
  },
  {
    mode: 'vrijeme',
    q: 'Radim ____ jutra ____ mraka.',
    opts: ['od, do', 'iz, do', 's, na', 'od, prema'],
    answer: 'od, do',
    en: 'I work from morning till dark',
    tip: 'Od + G … do + G: od jutra do mraka.',
  },
  {
    mode: 'vrijeme',
    q: 'Vidimo se ____ dva tjedna.',
    opts: ['za', 'kroz', 'u', 'nakon'],
    answer: 'za',
    en: 'see you in two weeks',
    tip: 'Za + akuzativ = nakon isteka razdoblja.',
  },
  {
    mode: 'vrijeme',
    q: 'Stigli su ____ noći.',
    opts: ['usred', 'u sredini', 'na sred', 'posred dana'],
    answer: 'usred',
    en: 'they arrived in the middle of the night',
    tip: 'Usred + G: usred noći, usred zime.',
  },
  {
    mode: 'vrijeme',
    q: 'Predstava je trajala ____ tri sata. (otprilike)',
    opts: ['oko', 'okolo', 'o', 'pri'],
    answer: 'oko',
    en: 'the show lasted about three hours',
    tip: 'Oko + G izriče približnost: oko tri sata.',
  },
  {
    mode: 'vrijeme',
    q: '„____ spavamo duže.” (svaki vikend)',
    opts: ['Vikendom', 'Na vikendu', 'U vikend', 'Preko vikendom'],
    answer: 'Vikendom',
    en: 'at weekends we sleep longer',
    tip: 'Instrumental vremena: vikendom, nedjeljom, ljeti.',
  },
];

export { DATA as DATUMI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DatumiDrill({ goBack, award }: Props) {
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
          key: 'datumi',
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
        {H('📅 Datumi i vrijeme', 'drugog svibnja, pola osam — telling time like a native', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — kalendar i sat su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro snalaženje s vremenom! 💪'
                : 'Datumi i vrijeme traže još vježbe.'}
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
      {H('📅 Datumi i vrijeme', 'drugog svibnja, pola osam — telling time like a native', goBack)}
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
