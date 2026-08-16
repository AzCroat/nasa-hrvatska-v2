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

// B2 pronoun-forms drill (B2 tranche 6, 2026-08-15): the clitic/stressed
// pairs (mene/me, njemu/mu, nju/je-ju), where stressed forms are forced
// (after prepositions, contrast, one-word answers, sentence-initially,
// after i/ni) and clitic choice in context (vidio ju je).
const MODE_LABEL: Record<string, string> = {
  oblici: '👥 Parovi oblika',
  naglaseni: '💪 Naglašeni',
  recenica: '✍️ U rečenici',
};

const DATA = [
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „mene” (G/A) glasi:',
    opts: ['me', 'mi', 'ja', 'mnom'],
    answer: 'me',
    en: 'unstressed me (gen/acc)',
    tip: 'Mene → me; meni → mi.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „meni” (D) glasi:',
    opts: ['mi', 'me', 'mnom', 'ja'],
    answer: 'mi',
    en: 'unstressed to-me (dative)',
    tip: 'Meni → mi: Daj mi to.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njega” glasi:',
    opts: ['ga', 'mu', 'on', 'njim'],
    answer: 'ga',
    en: 'unstressed him',
    tip: 'Njega → ga; njemu → mu.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njemu” glasi:',
    opts: ['mu', 'ga', 'on', 'njim'],
    answer: 'mu',
    en: 'unstressed to-him',
    tip: 'Njemu → mu: Reci mu.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „nju” glasi:',
    opts: ['je (ju)', 'joj', 'ona', 'njom'],
    answer: 'je (ju)',
    en: 'unstressed her (acc)',
    tip: 'Nju → je/ju; njoj → joj.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njoj” glasi:',
    opts: ['joj', 'je', 'ju', 'njom'],
    answer: 'joj',
    en: 'unstressed to-her',
    tip: 'Njoj → joj: Kupio joj je cvijeće.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njih” glasi:',
    opts: ['ih', 'im', 'oni', 'njima'],
    answer: 'ih',
    en: 'unstressed them (acc)',
    tip: 'Njih → ih; njima → im.',
  },
  {
    mode: 'oblici',
    q: 'Instrumental „mnom” u rečenici traži:',
    opts: ['prijedlog (sa mnom)', 'enklitički položaj', 'nastavak -om', 'veliko slovo'],
    answer: 'prijedlog (sa mnom)',
    en: 'mnom needs a preposition',
    tip: 'Instrumental zamjenica ide s prijedlogom: sa mnom, s njim.',
  },
  {
    mode: 'naglaseni',
    q: 'Iza prijedloga dolazi ____ oblik: „za ____ ”. (ja)',
    opts: ['mene', 'me', 'mi', 'mnom'],
    answer: 'mene',
    en: 'after prepositions use the stressed form',
    tip: 'Prijedlog + naglašeni oblik: za mene, kod njega.',
  },
  {
    mode: 'naglaseni',
    q: '„Vidim ____ , a ne njega!” (kontrast)',
    opts: ['tebe', 'te', 'ti', 'tobom'],
    answer: 'tebe',
    en: 'I see YOU, not him',
    tip: 'Kontrast/isticanje → naglašeni oblik: tebe.',
  },
  {
    mode: 'naglaseni',
    q: 'Na početku rečenice: „____ je pomogao.” (isticanje: baš meni)',
    opts: ['Meni', 'Mi', 'Ja', 'Mnom'],
    answer: 'Meni',
    en: 'it was ME he helped',
    tip: 'Rečenica ne počinje enklitikom — naglašeno: Meni je pomogao.',
  },
  {
    mode: 'naglaseni',
    q: 'U odgovoru jednom riječju: „Koga su zvali?” — „____ .”',
    opts: ['Mene', 'Me', 'Mi', 'Ja'],
    answer: 'Mene',
    en: 'whom did they call? — Me.',
    tip: 'Samostalni odgovor traži naglašeni oblik.',
  },
  {
    mode: 'naglaseni',
    q: '„Došao je k ____ .” (mi, D)',
    opts: ['nama', 'nam', 'mi', 'nas'],
    answer: 'nama',
    en: 'he came to us',
    tip: 'Prijedlog k + naglašeni dativ: k nama.',
  },
  {
    mode: 'naglaseni',
    q: '„Bez ____ ne idem.” (ti)',
    opts: ['tebe', 'te', 'ti', 'tobom'],
    answer: 'tebe',
    en: 'I am not going without you',
    tip: 'Bez + genitiv, naglašeno: bez tebe.',
  },
  {
    mode: 'naglaseni',
    q: '„Misle samo na ____ .” (oni)',
    opts: ['njih', 'ih', 'im', 'njima'],
    answer: 'njih',
    en: 'they think only of themselves/them',
    tip: 'Na + akuzativ, naglašeno: na njih.',
  },
  {
    mode: 'naglaseni',
    q: 'Uz „i” (također) dolazi naglašeni oblik: „Pozvali su ____ .”',
    opts: ['i mene', 'i me', 'me i', 'mi i'],
    answer: 'i mene',
    en: 'they invited me too',
    tip: 'I/ni + naglašeni oblik: i mene, ni njega.',
  },
  {
    mode: 'recenica',
    q: 'Daj ____ tu knjigu. (ja)',
    opts: ['mi', 'meni', 'me', 'mnom'],
    answer: 'mi',
    en: 'give me that book',
    tip: 'Neutralno mjesto → enklitika: daj mi.',
  },
  {
    mode: 'recenica',
    q: 'Jesi li ____ vidio? (ona)',
    opts: ['je', 'ju je', 'joj', 'nju'],
    answer: 'je',
    en: 'have you seen her?',
    tip: 'A od ona: je (iza „je” pomoćnoga bira se ju: vidio ju je).',
  },
  {
    mode: 'recenica',
    q: 'Vidio ____ je jučer. (ona — izbjegni je + je)',
    opts: ['ju', 'je', 'joj', 'nju'],
    answer: 'ju',
    en: 'he saw her yesterday',
    tip: 'Ispred pomoćnoga JE akuzativ glasi JU: vidio ju je.',
  },
  {
    mode: 'recenica',
    q: 'Poklonili smo ____ knjigu. (on)',
    opts: ['mu', 'ga', 'njega', 'njemu bez mu'],
    answer: 'mu',
    en: 'we gave him a book',
    tip: 'Dativ enklitika: mu.',
  },
  {
    mode: 'recenica',
    q: 'Ne vjerujem ____ . (oni)',
    opts: ['im', 'ih', 'njih', 'njima bez im'],
    answer: 'im',
    en: 'I do not trust them',
    tip: 'Vjerovati + dativ: ne vjerujem im.',
  },
  {
    mode: 'recenica',
    q: 'Čekali smo ____ pola sata. (vi)',
    opts: ['vas', 'vam', 'vi', 'vama'],
    answer: 'vas',
    en: 'we waited for you for half an hour',
    tip: 'Čekati + akuzativ: čekali smo vas.',
  },
  {
    mode: 'recenica',
    q: 'Sviđa ____ se ovaj grad. (mi — množina)',
    opts: ['nam', 'nas', 'mi', 'nama bez nam'],
    answer: 'nam',
    en: 'we like this city',
    tip: 'Sviđati se + dativ: sviđa nam se.',
  },
  {
    mode: 'recenica',
    q: 'Boji ____ se. (ja)',
    opts: ['me', 'mi', 'mene bez me', 'mnom'],
    answer: 'me',
    en: 'he is afraid of me',
    tip: 'Bojati se + genitiv: boji me se.',
  },
];

export { DATA as ZAMJENICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ZamjeniceDrill({ goBack, award }: Props) {
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
          key: 'zamjenice',
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
        {H('🎯 Naglašene i nenaglašene', 'mene/me, njemu/mu — which pronoun form and when', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — zamjenice su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje zamjenicama! 💪'
                : 'Zamjenički oblici traže još vježbe.'}
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
      {H('🎯 Naglašene i nenaglašene', 'mene/me, njemu/mu — which pronoun form and when', goBack)}
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
