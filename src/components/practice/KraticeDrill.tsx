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

// C2 abbreviations-and-foreign-names drill (C2 tranche 5, 2026-08-15):
// declining initialisms with a hyphen (NATO-a, HNK-u, NATO-ov), declining
// foreign names without one (Shakespearea, Camusa, u New Yorku), phonetized
// relational adjectives (njujorski) and adapted loans (vikend, e-posta).
const MODE_LABEL: Record<string, string> = {
  kratice: '🅰️ Kratice',
  strana: '🌍 Strana imena',
  pisanje: '✍️ Pisanje',
};

const DATA = [
  {
    mode: 'kratice',
    q: 'Genitiv kratice „NATO” glasi:',
    opts: ['NATO-a', 'NATOA', 'NATO-ja', 'NATA'],
    answer: 'NATO-a',
    en: 'of NATO',
    tip: 'Kratice se sklanjaju sa spojnicom: NATO-a, NATO-u.',
  },
  {
    mode: 'kratice',
    q: 'Genitiv kratice „HDZ” glasi:',
    opts: ['HDZ-a', 'HDZA', 'HDZ-ja', 'HDZe'],
    answer: 'HDZ-a',
    en: 'of the HDZ',
    tip: 'Izgovorne kratice: HDZ-a, HNK-a, SAD-a.',
  },
  {
    mode: 'kratice',
    q: '„Radim u ____ .” (HNK)',
    opts: ['HNK-u', 'HNKu', 'HNK', 'HNK-i'],
    answer: 'HNK-u',
    en: 'I work at the Croatian National Theatre',
    tip: 'Lokativ: u HNK-u (spojnica + nastavak).',
  },
  {
    mode: 'kratice',
    q: 'Posvojni pridjev od „NATO” glasi:',
    opts: ['NATO-ov', 'NATOov', 'NATO-in', 'NATO-ski'],
    answer: 'NATO-ov',
    en: 'NATO\u2019s',
    tip: 'Kratica + -ov sa spojnicom: NATO-ov summit.',
  },
  {
    mode: 'kratice',
    q: 'Kratica „dr. sc.” znači:',
    opts: ['doktor znanosti', 'dragi suradnik', 'doktor scene', 'državni savjetnik'],
    answer: 'doktor znanosti',
    en: 'doctor of science (PhD)',
    tip: 'Dr. sc. = doktor znanosti; dr. med. = doktor medicine.',
  },
  {
    mode: 'kratice',
    q: 'Kratice poput „npr.” i „itd.” pišu se:',
    opts: ['malim slovom s točkom', 'velikim slovima', 'bez točke', 'sa spojnicom'],
    answer: 'malim slovom s točkom',
    en: 'npr. and itd. are lowercase with periods',
    tip: 'Opće kratice: npr., itd., tzv., str.',
  },
  {
    mode: 'kratice',
    q: 'Množina od „CD” u rečenici „Kupio sam tri ____ ”:',
    opts: ['CD-a', 'CD-ova', 'CDa', 'CD'],
    answer: 'CD-a',
    en: 'three CDs (gen. sg. after 3)',
    tip: 'Uz brojeve 2-4: genitiv jednine — tri CD-a.',
  },
  {
    mode: 'kratice',
    q: 'Kratica „gđa” (gospođa) piše se:',
    opts: ['bez točke (gđa)', 's točkom (gđa.)', 'velikim (GĐA)', 'sa spojnicom (g-đa)'],
    answer: 'bez točke (gđa)',
    en: 'Mrs — no period (contraction)',
    tip: 'Sažete kratice bez točke: gđa, dr (u dr. je točka jer je odsječena).',
  },
  {
    mode: 'strana',
    q: 'Genitiv imena „Chicago” glasi:',
    opts: ['Chicaga', 'Chicagoa', 'Chicago-a', 'Chicagja'],
    answer: 'Chicaga',
    en: 'of Chicago',
    tip: 'Strana imena na -o: sklanjaju se bez spojnice (Chicaga).',
  },
  {
    mode: 'strana',
    q: 'Genitiv imena „Shakespeare” glasi:',
    opts: ['Shakespearea', 'Shakespeare-a', 'Shakespearja', 'Shakespira'],
    answer: 'Shakespearea',
    en: 'of Shakespeare',
    tip: 'Strana imena: nastavak izravno (Shakespearea, Shakespeareu).',
  },
  {
    mode: 'strana',
    q: 'Posvojni pridjev od „Goethe” glasi:',
    opts: ['Goetheov', 'Goethe-ov', 'Goethin', 'Goethev'],
    answer: 'Goetheov',
    en: 'Goethe\u2019s',
    tip: 'Strana imena + -ov bez spojnice: Goetheov.',
  },
  {
    mode: 'strana',
    q: 'Instrumental imena „George” (izgovor džordž) glasi:',
    opts: ['Georgeom', 'George-om', 'Georgeem', 'Georgom'],
    answer: 'Georgeom',
    en: 'with George',
    tip: 'Nastavci se dodaju na pisani oblik: s Georgeom.',
  },
  {
    mode: 'strana',
    q: 'Genitiv imena „Camus” (izgovor kami) glasi:',
    opts: ['Camusa', 'Camus-a', 'Camuja', 'Camusea'],
    answer: 'Camusa',
    en: 'of Camus',
    tip: 'I nijemi suglasnik dobiva nastavak izravno: Camusa.',
  },
  {
    mode: 'strana',
    q: 'Žensko strano ime „Ines” u genitivu:',
    opts: ['Ines', 'Inese', 'Ines-e', 'Inesi'],
    answer: 'Ines',
    en: 'of Ines — indeclinable',
    tip: 'Ženska imena na suglasnik ne sklanjaju se.',
  },
  {
    mode: 'strana',
    q: 'Ime grada „New York” u lokativu:',
    opts: ['New Yorku', 'New York-u', 'Novom Yorku', 'New Yorkovu'],
    answer: 'New Yorku',
    en: 'in New York',
    tip: 'Sklanja se posljednja sastavnica: u New Yorku.',
  },
  {
    mode: 'strana',
    q: 'Pridjev od „New York” glasi:',
    opts: ['njujorški', 'newyorški', 'new-yorški', 'New Yorški'],
    answer: 'njujorški',
    en: 'New York (adj) — phonetized',
    tip: 'Odnosni pridjevi od stranih imena fonetiziraju se: njujorški, minhenski.',
  },
  {
    mode: 'pisanje',
    q: 'Posuđenica „e-mail” u hrvatskome standardu najbolje:',
    opts: ['e-pošta', 'imejl uvijek', 'E-mail', 'mejl u dopisu'],
    answer: 'e-pošta',
    en: 'e-mail → e-posta (standard)',
    tip: 'Standard voli domaću zamjenu: e-pošta, e-adresa.',
  },
  {
    mode: 'pisanje',
    q: '„weekend” u hrvatskome standardu piše se:',
    opts: ['vikend', 'weekend', 'week-end', 'vikent'],
    answer: 'vikend',
    en: 'weekend → vikend (adapted)',
    tip: 'Prilagođene posuđenice pišu se fonetski: vikend, menadžer.',
  },
  {
    mode: 'pisanje',
    q: 'Strana OSOBNA imena u hrvatskome se pišu:',
    opts: ['izvorno (Shakespeare)', 'fonetski (Šekspir)', 'velikim slovima', 'prevedeno'],
    answer: 'izvorno (Shakespeare)',
    en: 'foreign personal names keep original spelling',
    tip: 'Hrvatski čuva izvorni lik: Shakespeare, New York (za razliku od srpskoga).',
  },
  {
    mode: 'pisanje',
    q: 'Naziv „internet” kao mreža općenito piše se:',
    opts: ['malim slovom', 'velikim slovom uvijek', 'u navodnicima', 'sa spojnicom'],
    answer: 'malim slovom',
    en: 'the internet — lowercase',
    tip: 'Danas opća imenica: internet, na internetu.',
  },
  {
    mode: 'pisanje',
    q: 'Kratica za „takozvani” piše se:',
    opts: ['tzv.', 't.z.v.', 'TZV', 'tzv'],
    answer: 'tzv.',
    en: 'so-called = tzv.',
    tip: 'Tzv. s točkom, malim slovom.',
  },
  {
    mode: 'pisanje',
    q: '„SMS poruka” — bolji je oblik:',
    opts: ['SMS-poruka', 'SMS poruka je jedino', 'esemes', 'S.M.S.'],
    answer: 'SMS-poruka',
    en: 'SMS message with a hyphen',
    tip: 'Kratica + imenica vezuju se spojnicom: SMS-poruka, TV-program.',
  },
  {
    mode: 'pisanje',
    q: 'Genitiv naslova „Romeo i Julija” glasi:',
    opts: ['Romea i Julije', 'Romeo i Julije', 'Romea i Julija', 'Romeo i Julijino'],
    answer: 'Romea i Julije',
    en: 'of Romeo and Juliet',
    tip: 'Sklanjaju se obje sastavnice imena.',
  },
  {
    mode: 'pisanje',
    q: 'Ime „Dubai” u genitivu glasi:',
    opts: ['Dubaija', 'Dubaia', 'Dubai-ja', 'Dubajia'],
    answer: 'Dubaija',
    en: 'of Dubai',
    tip: 'Iza samoglasnika i umeće se j: Dubaija (kao Hawaiija).',
  },
];

export { DATA as KRATICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KraticeDrill({ goBack, award }: Props) {
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
          key: 'kratice',
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
          '🔤 Kratice i strana imena',
          'NATO-a, Shakespearea, njujorški — declining the undeclinable',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — i strano je vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje kraticama i stranim imenima! 💪'
                : 'Kratice i strana imena traže još vježbe.'}
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
        '🔤 Kratice i strana imena',
        'NATO-a, Shakespearea, njujorški — declining the undeclinable',
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
