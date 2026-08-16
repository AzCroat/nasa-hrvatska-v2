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

// C1 i-declension drill (C1 tranche 7, 2026-08-15): the feminine
// consonant-final nouns (noc, stvar, ljubav, -ost abstracts), their
// instrumental jotations (ljubavlju, koscu, rijecju, radoscu) and usage.
const MODE_LABEL: Record<string, string> = {
  padezi: '📐 Padeži',
  rod: '🚺 Rod i vrsta',
  recenice: '✍️ U rečenici',
};

const DATA = [
  {
    mode: 'padezi',
    q: 'Genitiv jednine imenice „noć” glasi:',
    opts: ['noći', 'noća', 'noće', 'noćju'],
    answer: 'noći',
    en: 'of the night',
    tip: 'I-sklonidba: G/D/L/V jd. = -i.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „ljubav” glasi:',
    opts: ['ljubavlju', 'ljubavi samo', 'ljubavom', 'ljubavju'],
    answer: 'ljubavlju',
    en: 'with love',
    tip: 'V + j → vlj: ljubavlju (ili ljubavi).',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „riječ” glasi:',
    opts: ['riječju', 'riječi samo', 'riječom', 'rječju kraćeno'],
    answer: 'riječju',
    en: 'with a word',
    tip: 'Č + ju: riječju.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „kost” glasi:',
    opts: ['košću', 'kosti samo', 'kostom', 'kostju'],
    answer: 'košću',
    en: 'with a bone',
    tip: 'St + j → šć: košću.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „sol” glasi:',
    opts: ['solju', 'soli samo', 'solom', 'soljom'],
    answer: 'solju',
    en: 'with salt',
    tip: 'L + j → lj: solju.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „misao” glasi:',
    opts: ['mišlju', 'misli samo', 'misaom', 'mislijom'],
    answer: 'mišlju',
    en: 'with a thought',
    tip: 'Misao, misli → mišlju (sl + j → šlj).',
  },
  {
    mode: 'padezi',
    q: 'Genitiv množine imenice „stvar” glasi:',
    opts: ['stvari', 'stvara', 'stvariju', 'stvarova'],
    answer: 'stvari',
    en: 'of the things',
    tip: 'G mn. i-sklonidbe: -i (stvari, noći, riječi).',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „smrt” glasi:',
    opts: ['smrću', 'smrti samo', 'smrtom', 'smrtju'],
    answer: 'smrću',
    en: 'with death',
    tip: 'T + j → ć: smrću.',
  },
  {
    mode: 'rod',
    q: 'Imenice i-sklonidbe (noć, stvar, ljubav) su roda:',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'dvorodne'],
    answer: 'ženskoga',
    en: 'i-stem nouns are feminine',
    tip: 'Ž. rod na suglasnik: ta noć, ta ljubav.',
  },
  {
    mode: 'rod',
    q: '„Glad” u standardu je:',
    opts: ['ženskoga roda (velika glad)', 'muškoga roda samo', 'srednjega roda', 'nesklonjiva'],
    answer: 'ženskoga roda (velika glad)',
    en: 'glad (hunger) is feminine',
    tip: 'Velika glad; G: gladi.',
  },
  {
    mode: 'rod',
    q: 'Pridjev uz „noć”: „____ noć”',
    opts: ['duga', 'dugi', 'dugo', 'dug'],
    answer: 'duga',
    en: 'a long night',
    tip: 'Ž. rod: duga noć, tiha noć.',
  },
  {
    mode: 'rod',
    q: '„Bol” (osjećaj) u biranom standardu je:',
    opts: ['ženskoga roda (duševna bol)', 'samo muškoga', 'srednjega', 'množinska'],
    answer: 'ženskoga roda (duševna bol)',
    en: 'emotional bol is feminine',
    tip: 'Tjelesni bol (m) / duševna bol (ž) — tradicionalna podjela.',
  },
  {
    mode: 'rod',
    q: 'Uz „mladost”: „____ mladost”',
    opts: ['bezbrižna', 'bezbrižni', 'bezbrižno', 'bezbrižan'],
    answer: 'bezbrižna',
    en: 'carefree youth',
    tip: 'Apstraktne na -ost: ž. rod, i-sklonidba.',
  },
  {
    mode: 'rod',
    q: 'Imenice na „-ost” (radost, mogućnost) sklanjaju se:',
    opts: ['po i-sklonidbi', 'po a-sklonidbi', 'po e-sklonidbi', 'nepravilno'],
    answer: 'po i-sklonidbi',
    en: '-ost nouns follow the i-declension',
    tip: 'Radosti, radošću; mogućnosti, mogućnošću.',
  },
  {
    mode: 'rod',
    q: 'Instrumental od „radost” glasi:',
    opts: ['radošću', 'radosti samo', 'radostom', 'radostju'],
    answer: 'radošću',
    en: 'with joy',
    tip: 'St + j → šć: radošću.',
  },
  {
    mode: 'rod',
    q: '„Kokoš” je:',
    opts: ['ž. roda, i-sklonidba (kokoši)', 'm. roda', 'sr. roda', 'nesklonjiva'],
    answer: 'ž. roda, i-sklonidba (kokoši)',
    en: 'kokos (hen) is feminine i-stem',
    tip: 'Kokoš, kokoši, s kokošju.',
  },
  {
    mode: 'recenice',
    q: 'Cijelu ____ nisam spavao. (noć)',
    opts: ['noć', 'noći', 'noću', 'noćju'],
    answer: 'noć',
    en: 'I did not sleep all night',
    tip: 'A jd. = N: cijelu noć.',
  },
  {
    mode: 'recenice',
    q: '____ se sve postiže. (ljubav, čime)',
    opts: ['Ljubavlju', 'Ljubavi', 'Ljubav', 'Ljubavom'],
    answer: 'Ljubavlju',
    en: 'with love everything is achieved',
    tip: 'Instrumental sredstva: ljubavlju.',
  },
  {
    mode: 'recenice',
    q: 'Održao je govor punim ____ . (riječ, mn.)',
    opts: ['riječima', 'riječi', 'riječju', 'rječima kraćeno'],
    answer: 'riječima',
    en: 'in full words / at length',
    tip: 'DLI mn.: riječima.',
  },
  {
    mode: 'recenice',
    q: 'Došao je na ____ . (vlast)',
    opts: ['vlast', 'vlasti', 'vlašću', 'vlastu'],
    answer: 'vlast',
    en: 'he came to power',
    tip: 'Na + A: na vlast (i-sklonidba, A = N).',
  },
  {
    mode: 'recenice',
    q: 'Vladao je čvrstom ____ . (vlast)',
    opts: ['vlašću', 'vlasti', 'vlast', 'vlastom'],
    answer: 'vlašću',
    en: 'he ruled with a firm hand (power)',
    tip: 'Instrumental: vlašću.',
  },
  {
    mode: 'recenice',
    q: 'Nema ____ bez slobode. (radost)',
    opts: ['radosti', 'radost', 'radošću', 'radosta'],
    answer: 'radosti',
    en: 'no joy without freedom',
    tip: 'Nema + G: radosti.',
  },
  {
    mode: 'recenice',
    q: 'Suočio se sa ____ . (stvarnost)',
    opts: ['stvarnošću', 'stvarnosti', 'stvarnošćom', 'stvarnost'],
    answer: 'stvarnošću',
    en: 'he faced reality',
    tip: 'Sa + I: sa stvarnošću (sa ispred s-/š-).',
  },
  {
    mode: 'recenice',
    q: 'U ____ smo stigli kući. (ponoć)',
    opts: ['ponoć', 'ponoći', 'ponoćju', 'ponoćom'],
    answer: 'ponoć',
    en: 'we got home at midnight',
    tip: 'U + A za sat: u ponoć, u podne.',
  },
];

export { DATA as I_SKLONIDBA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ISklonidbaDrill({ goBack, award }: Props) {
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
          key: 'isklonidba',
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
        {H('🌙 I-sklonidba', 'noć, ljubav, riječ — feminine nouns in consonant clothing', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — i-sklonidba je vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje i-sklonidbom! 💪'
                : 'I-sklonidba traži još vježbe.'}
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
      {H('🌙 I-sklonidba', 'noć, ljubav, riječ — feminine nouns in consonant clothing', goBack)}
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
