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

// C1 biaspectual-verbs drill (C1 tranche 7, 2026-08-15): recognizing
// biaspectuals (rucati, cuti, vidjeti, -irati loans), reading aspect from
// context (dok/cim, upravo, odmah, measures of duration) and the nuances
// (prefix reinforcement, futur II, dictionary dv. tag).
const MODE_LABEL: Record<string, string> = {
  prepoznaj: '🔍 Prepoznavanje',
  kontekst: '🎬 Kontekst',
  nijansa: '🌗 Nijanse',
};

const DATA = [
  {
    mode: 'prepoznaj',
    q: 'Koji je glagol dvovidan (i svršen i nesvršen)?',
    opts: ['ručati', 'pisati', 'napisati', 'čitati'],
    answer: 'ručati',
    en: 'rucati is biaspectual',
    tip: 'Ručati, večerati, doručkovati — oba vida u istom obliku.',
  },
  {
    mode: 'prepoznaj',
    q: '„Čuti” je:',
    opts: ['dvovidan', 'samo svršen', 'samo nesvršen', 'bezličan'],
    answer: 'dvovidan',
    en: 'cuti works in both aspects',
    tip: 'Čujem sad (nesvršeno) / čuo sam prasak (svršeno).',
  },
  {
    mode: 'prepoznaj',
    q: '„Vidjeti” je:',
    opts: ['dvovidan', 'samo svršen', 'samo nesvršen', 'pomoćni'],
    answer: 'dvovidan',
    en: 'vidjeti is biaspectual',
    tip: 'Vidim te (sada) / vidio sam ga jučer (jednom).',
  },
  {
    mode: 'prepoznaj',
    q: 'Posuđenice na „-irati” najčešće su:',
    opts: ['dvovidne', 'samo svršene', 'samo nesvršene', 'neprelazne'],
    answer: 'dvovidne',
    en: 'borrowed -irati verbs are biaspectual',
    tip: 'Organizirati, telefonirati, analizirati — oba vida.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji glagol NIJE dvovidan?',
    opts: ['pročitati', 'organizirati', 'ručati', 'čuti'],
    answer: 'pročitati',
    en: 'procitati is purely perfective',
    tip: 'Prefiks pro- fiksira svršenost.',
  },
  {
    mode: 'prepoznaj',
    q: '„Krstiti” (i svršeno i nesvršeno) potvrđuje da su dvovidni:',
    opts: ['i neki domaći glagoli', 'samo posuđenice', 'samo glagoli jela', 'samo povratni'],
    answer: 'i neki domaći glagoli',
    en: 'native verbs can be biaspectual too',
    tip: 'Krstiti, ručati, čuti, vidjeti — domaći dvovidni.',
  },
  {
    mode: 'prepoznaj',
    q: '„Analizirati” u „upravo analiziramo podatke” ima vid:',
    opts: ['nesvršeni', 'svršeni', 'oba istodobno', 'nijedan'],
    answer: 'nesvršeni',
    en: 'right now = imperfective reading',
    tip: 'Kontekst bira vid dvovidnoga glagola.',
  },
  {
    mode: 'prepoznaj',
    q: '„Analizirati” u „sutra ćemo analizirati sve uzorke do kraja” čita se:',
    opts: ['svršeno', 'nesvršeno', 'bezlično', 'pasivno'],
    answer: 'svršeno',
    en: 'to completion = perfective reading',
    tip: 'Do kraja + rok → svršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Dok smo ____ , zazvonio je telefon.” (ručati — u tijeku)',
    opts: ['ručali', 'poručali', 'naručali', 'doručali'],
    answer: 'ručali',
    en: 'while we were having lunch',
    tip: 'Dok + trajanje → nesvršeno čitanje istoga oblika.',
  },
  {
    mode: 'kontekst',
    q: '„Čim ____ , idemo.” (ručati — dovršiti)',
    opts: ['ručamo', 'ručavamo', 'budemo ručavali', 'ručasmo'],
    answer: 'ručamo',
    en: 'as soon as we finish lunch, we go',
    tip: 'Čim + prezent dvovidnoga = svršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Tvrtka ____ izlet svake godine.” (organizirati)',
    opts: ['organizira', 'izorganizira', 'organizirava', 'sorganizira'],
    answer: 'organizira',
    en: 'the firm organizes a trip every year',
    tip: 'Ponavljanje → nesvršeno čitanje; oblik ostaje isti.',
  },
  {
    mode: 'kontekst',
    q: '„Jučer su ____ savršen doček.” (organizirati, jednom)',
    opts: ['organizirali', 'organizirávali', 'organizavali', 'izorganiziravali'],
    answer: 'organizirali',
    en: 'yesterday they organized a perfect welcome',
    tip: 'Jednokratni rezultat → svršeno čitanje istoga oblika.',
  },
  {
    mode: 'kontekst',
    q: '„____ li me? Halo?” (čuti, sada)',
    opts: ['Čuješ', 'Začuješ', 'Očuješ', 'Čuvaš'],
    answer: 'Čuješ',
    en: 'can you hear me?',
    tip: 'Trenutačna percepcija → nesvršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Odjednom sam ____ korake.” (čuti, trenutak)',
    opts: ['čuo', 'čuvao', 'začuvao', 'slušao'],
    answer: 'čuo',
    en: 'suddenly I heard footsteps',
    tip: 'Trenutak → svršeno čitanje: čuo sam.',
  },
  {
    mode: 'kontekst',
    q: '„Svake nedjelje ____ kod bake.” (večerati)',
    opts: ['večeramo', 'povečeramo', 'izvečeramo', 'navečeramo'],
    answer: 'večeramo',
    en: 'we have dinner at grandma\u2019s every Sunday',
    tip: 'Navika → nesvršeno čitanje.',
  },
  {
    mode: 'kontekst',
    q: '„Brzo smo ____ i krenuli.” (večerati, dovršeno)',
    opts: ['večerali', 'povečerávali', 'večeravali', 'izvečeravali'],
    answer: 'večerali',
    en: 'we had a quick dinner and set off',
    tip: 'Slijed radnji → svršeno čitanje.',
  },
  {
    mode: 'nijansa',
    q: 'Kad kontekst mora razlikovati vid, jeziku pomažu:',
    opts: ['prilozi i veznici (upravo, čim, dok)', 'samo intonacija', 'padeži', 'navodnici'],
    answer: 'prilozi i veznici (upravo, čim, dok)',
    en: 'adverbs disambiguate biaspectuals',
    tip: 'Upravo analiziramo (ns) vs čim analiziramo (sv).',
  },
  {
    mode: 'nijansa',
    q: 'Za jasno nesvršeno od „organizirati” govornici katkad rabe:',
    opts: ['organizirati uz priloge trajanja', 'izorganizirati', 'sorganizirati', 'naorganizirati'],
    answer: 'organizirati uz priloge trajanja',
    en: 'duration adverbs mark the imperfective',
    tip: 'Trenutačno organiziramo — prilog nosi vid.',
  },
  {
    mode: 'nijansa',
    q: 'Prefiks uz dvovidni glagol (npr. „isprogramirati”):',
    opts: ['naglašava svršenost', 'čini ga nesvršenim', 'ne mijenja ništa', 'briše značenje'],
    answer: 'naglašava svršenost',
    en: 'prefixes force the perfective',
    tip: 'Isprogramirati, odreagirati — razgovorno pojačana svršenost.',
  },
  {
    mode: 'nijansa',
    q: '„Telefonirati” u „telefonirao je sat vremena”:',
    opts: ['nesvršeno čitanje', 'svršeno čitanje', 'pogrešna rečenica', 'pasiv'],
    answer: 'nesvršeno čitanje',
    en: 'he was on the phone for an hour',
    tip: 'Mjera trajanja → nesvršeni vid.',
  },
  {
    mode: 'nijansa',
    q: '„Jesi li večerao?” pita o:',
    opts: ['dovršenoj radnji (svršeno)', 'navici', 'trajanju', 'budućnosti'],
    answer: 'dovršenoj radnji (svršeno)',
    en: 'have you had dinner? (result)',
    tip: 'Perfekt dvovidnoga: rezultatsko čitanje.',
  },
  {
    mode: 'nijansa',
    q: 'Futur II. od dvovidnoga („budem ručao”) signalizira:',
    opts: ['nesvršenu nijansu u zavisnoj', 'svršenu prošlost', 'zapovijed', 'pasiv'],
    answer: 'nesvršenu nijansu u zavisnoj',
    en: 'budem rucao leans imperfective',
    tip: 'Ako budem ručao kad nazoveš…',
  },
  {
    mode: 'nijansa',
    q: '„Reagirati” u „odmah je reagirao” čita se:',
    opts: ['svršeno', 'nesvršeno', 'bezlično', 'upitno'],
    answer: 'svršeno',
    en: 'he reacted at once',
    tip: 'Odmah + jednokratno → svršeno.',
  },
  {
    mode: 'nijansa',
    q: 'Dvovidnost je u rječnicima označena:',
    opts: ['dv. (dvovidan)', 'ns. samo', 'sv. samo', 'nema oznake'],
    answer: 'dv. (dvovidan)',
    en: 'dictionaries tag dv.',
    tip: 'Oznaka dv. uz ručati, čuti, organizirati.',
  },
];

export { DATA as DVOVIDNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DvovidniDrill({ goBack, award }: Props) {
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
          key: 'dvovidni',
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
        {H('🪞 Dvovidni glagoli', 'ručati, čuti, organizirati — one form, both aspects', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — dvovidnost je vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje dvovidnim glagolima! 💪'
                : 'Dvovidni glagoli traže još vježbe.'}
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
      {H('🪞 Dvovidni glagoli', 'ručati, čuti, organizirati — one form, both aspects', goBack)}
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
