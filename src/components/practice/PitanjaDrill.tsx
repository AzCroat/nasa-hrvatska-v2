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

// B2 questions drill (B2 tranche 7, 2026-08-15): interrogative words
// (koji/kakav/ciji, kamo/gdje/kuda/odakle), particles (verb + li, je li,
// zar, tag zar ne) and indirect questions (dolazis li, no question mark).
const MODE_LABEL: Record<string, string> = {
  rijeci: '🔤 Upitne riječi',
  cestice: '✨ Čestice',
  neizravna: '🔁 Neizravna',
};

const DATA = [
  {
    mode: 'rijeci',
    q: '„____ film gledaš?” (izbor između poznatih)',
    opts: ['Koji', 'Kakav', 'Čiji', 'Što'],
    answer: 'Koji',
    en: 'which film are you watching?',
    tip: 'Koji = izbor iz skupa.',
  },
  {
    mode: 'rijeci',
    q: '„____ je bio film?” (kvaliteta, opis)',
    opts: ['Kakav', 'Koji', 'Čiji', 'Koliko'],
    answer: 'Kakav',
    en: 'what was the film like?',
    tip: 'Kakav = svojstvo/opis.',
  },
  {
    mode: 'rijeci',
    q: '„____ je ovo kaput?” (pripadnost)',
    opts: ['Čiji', 'Koji', 'Kakav', 'Kome'],
    answer: 'Čiji',
    en: 'whose coat is this?',
    tip: 'Čiji = posvojnost.',
  },
  {
    mode: 'rijeci',
    q: '„____ ideš?” (cilj kretanja)',
    opts: ['Kamo', 'Gdje', 'Kuda', 'Otkud'],
    answer: 'Kamo',
    en: 'where are you going (to)?',
    tip: 'Kamo = cilj; gdje = mjesto; kuda = put.',
  },
  {
    mode: 'rijeci',
    q: '„____ si tako dugo?” (mjesto)',
    opts: ['Gdje', 'Kamo', 'Kuda', 'Dokle'],
    answer: 'Gdje',
    en: 'where have you been?',
    tip: 'Gdje pita za mjesto bez kretanja.',
  },
  {
    mode: 'rijeci',
    q: '„____ ste putovali — preko Like ili autocestom?” (put)',
    opts: ['Kuda', 'Kamo', 'Gdje', 'Otkad'],
    answer: 'Kuda',
    en: 'which way did you travel?',
    tip: 'Kuda = kojim putem.',
  },
  {
    mode: 'rijeci',
    q: '„____ dolaziš?” (polazište)',
    opts: ['Odakle', 'Kamo', 'Gdje', 'Dokad'],
    answer: 'Odakle',
    en: 'where do you come from?',
    tip: 'Odakle = iz kojeg mjesta.',
  },
  {
    mode: 'rijeci',
    q: '„____ košta kilogram jabuka?”',
    opts: ['Koliko', 'Kako', 'Što', 'Čime'],
    answer: 'Koliko',
    en: 'how much does a kilo of apples cost?',
    tip: 'Koliko = količina/cijena.',
  },
  {
    mode: 'cestice',
    q: 'Neutralno pitanje s glagolom: „____ sutra?” (raditi, ti)',
    opts: ['Radiš li', 'Da li radiš', 'Jel radiš', 'Radiš da li'],
    answer: 'Radiš li',
    en: 'are you working tomorrow?',
    tip: 'Birano: glagol + li.',
  },
  {
    mode: 'cestice',
    q: 'Pitanje s „je”: „____ to istina?”',
    opts: ['Je li', 'Da li je', 'Jel', 'Li je'],
    answer: 'Je li',
    en: 'is that true?',
    tip: 'Je li + rečenica — standardni upitni okvir.',
  },
  {
    mode: 'cestice',
    q: '„____ me nisi nazvao?!” (čuđenje s prijekorom)',
    opts: ['Zar', 'Je li', 'Li', 'Da'],
    answer: 'Zar',
    en: 'you mean you did not call me?!',
    tip: 'Zar unosi čuđenje/nevjericu.',
  },
  {
    mode: 'cestice',
    q: '„Zar ne?” na kraju rečenice traži:',
    opts: ['potvrdu sugovornika', 'odgovor ne', 'šutnju', 'ispriku'],
    answer: 'potvrdu sugovornika',
    en: '…isn\u2019t it? (tag question)',
    tip: 'Lijepo je, zar ne?',
  },
  {
    mode: 'cestice',
    q: 'Čestica „li” stoji:',
    opts: ['odmah iza glagola', 'na početku', 'na kraju', 'iza subjekta'],
    answer: 'odmah iza glagola',
    en: 'li clings to the verb',
    tip: 'Dolaziš li? Znate li? Hoćemo li?',
  },
  {
    mode: 'cestice',
    q: '„Da li” u biranom standardu:',
    opts: ['zamjenjuje se s glagol + li', 'obvezno je', 'stoji na kraju', 'ne postoji'],
    answer: 'zamjenjuje se s glagol + li',
    en: 'da li → verb + li',
    tip: 'Da li dolaziš → Dolaziš li.',
  },
  {
    mode: 'cestice',
    q: 'Niječno pitanje „Nisi li se umorio?” izriče:',
    opts: ['blagu pretpostavku da jest', 'zabranu', 'zapovijed', 'odgovor'],
    answer: 'blagu pretpostavku da jest',
    en: 'have you not grown tired?',
    tip: 'Niječno pitanje očekuje potvrdu.',
  },
  {
    mode: 'cestice',
    q: '„Ma nemoj?!” kao odgovor izriče:',
    opts: ['ironično čuđenje', 'molbu', 'zahvalu', 'pozdrav'],
    answer: 'ironično čuđenje',
    en: 'you don\u2019t say?!',
    tip: 'Razgovorna ironija na očito.',
  },
  {
    mode: 'neizravna',
    q: '„Pitam se ____ će doći.” (vrijeme)',
    opts: ['kada', 'da li kada', 'li kad', 'zar kada'],
    answer: 'kada',
    en: 'I wonder when he will come',
    tip: 'Neizravno pitanje: upitna riječ bez li.',
  },
  {
    mode: 'neizravna',
    q: '„Ne znam ____ je to učinio.” (razlog)',
    opts: ['zašto', 'jer', 'da', 'pa'],
    answer: 'zašto',
    en: 'I do not know why he did it',
    tip: 'Zašto uvodi neizravno pitanje razloga.',
  },
  {
    mode: 'neizravna',
    q: '„Reci mi ____ dolaziš.” (da/ne pitanje)',
    opts: ['dolaziš li', 'da li', 'zar', 'kada li'],
    answer: 'dolaziš li',
    en: 'tell me whether you are coming',
    tip: 'Neizravno da/ne pitanje: glagol + li.',
  },
  {
    mode: 'neizravna',
    q: '„Zanima me ____ o tome misliš.”',
    opts: ['što', 'šta samo', 'koje', 'čiji'],
    answer: 'što',
    en: 'I wonder what you think about it',
    tip: 'Standard: što (šta je razgovorno).',
  },
  {
    mode: 'neizravna',
    q: '„Provjeri ____ su vrata zaključana.”',
    opts: ['jesu li', 'da li', 'zar', 'li jesu'],
    answer: 'jesu li',
    en: 'check whether the door is locked',
    tip: 'Jesu li + subjekt u neizravnom pitanju.',
  },
  {
    mode: 'neizravna',
    q: 'U neizravnom pitanju upitnik:',
    opts: [
      'se ne piše (Pitam se tko je došao.)',
      'ostaje uvijek',
      'postaje uskličnik',
      'ide u zagrade',
    ],
    answer: 'se ne piše (Pitam se tko je došao.)',
    en: 'indirect questions drop the question mark',
    tip: 'Rečenica je izjavna, upitnost je unutra.',
  },
  {
    mode: 'neizravna',
    q: '„Kako se zove i ____ dolazi, nitko ne zna.”',
    opts: ['odakle', 'otkud li zar', 'gdje da', 'kamo li'],
    answer: 'odakle',
    en: 'no one knows his name or where he is from',
    tip: 'Nizanje neizravnih pitanja upitnim riječima.',
  },
  {
    mode: 'neizravna',
    q: '„Pitao me imam li vremena” prenosi pitanje:',
    opts: ['Imaš li vremena?', 'Kada imaš vremena?', 'Zašto imaš vremena?', 'Čije je vrijeme?'],
    answer: 'Imaš li vremena?',
    en: 'he asked me if I had time',
    tip: 'Neizravno li-pitanje ← izravno li-pitanje.',
  },
];

export { DATA as PITANJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PitanjaDrill({ goBack, award }: Props) {
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
          key: 'pitanja',
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
        {H('❓ Umijeće pitanja', 'koji ili kakav, je li ili zar — asking like a native', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — pitanja su vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje pitanjima! 💪'
                : 'Pitanja traže još vježbe.'}
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
      {H('❓ Umijeće pitanja', 'koji ili kakav, je li ili zar — asking like a native', goBack)}
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
