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

// B2 impersonal-constructions drill (B2 tranche 2, 2026-08-15): subjectless
// sentences — treba/valja/ima + G, dative experiencers (boli me, žao mi je,
// stalo mi je), and the neuter singular agreement impersonal past requires.
const MODE_LABEL: Record<string, string> = {
  izrazi: '🫥 Bez subjekta',
  dozivljaj: '💓 Dativ doživljavača',
  slaganje: '⚙️ Slaganje u prošlosti',
};

const DATA = [
  {
    mode: 'izrazi',
    q: '____ kupiti kruha prije nego što se trgovina zatvori.',
    opts: ['Treba', 'Trebaju', 'Trebamo se', 'Potrebuje'],
    answer: 'Treba',
    en: 'one should buy bread before the shop closes',
    tip: 'Bezlično: treba + infinitiv (bez subjekta).',
  },
  {
    mode: 'izrazi',
    q: 'Ovdje se ____ parkirati bez naplate.',
    opts: ['može', 'možemo se', 'mogu', 'može biti'],
    answer: 'može',
    en: 'one can park here free of charge',
    tip: 'Može se + infinitiv — bezlična mogućnost.',
  },
  {
    mode: 'izrazi',
    q: '____ imati na umu da rok istječe sutra.',
    opts: ['Valja', 'Valjaju', 'Vrijedi se', 'Važi se'],
    answer: 'Valja',
    en: 'one should bear in mind that the deadline expires tomorrow',
    tip: 'Valja + infinitiv — knjiški bezlični savjet.',
  },
  {
    mode: 'izrazi',
    q: 'U dvorani ____ mjesta za sve.',
    opts: ['ima', 'imaju', 'jest', 'su'],
    answer: 'ima',
    en: 'there is room for everyone in the hall',
    tip: 'Bezlično ima + genitiv = postoji: ima mjesta.',
  },
  {
    mode: 'izrazi',
    q: 'Sinoć ____ struje puna dva sata.',
    opts: ['nije bilo', 'nisu bili', 'nije bila', 'nema'],
    answer: 'nije bilo',
    en: 'there was no electricity for two full hours last night',
    tip: 'Niječno bezlično u prošlosti: nije bilo + genitiv.',
  },
  {
    mode: 'izrazi',
    q: 'Do sukoba ____ zbog nesporazuma.',
    opts: ['je došlo', 'su došli', 'došli su', 'je došla'],
    answer: 'je došlo',
    en: 'the conflict arose because of a misunderstanding',
    tip: 'Doći do + G — bezlično, srednji rod: došlo je.',
  },
  {
    mode: 'izrazi',
    q: 'Na sjednici ____ o novom proračunu.',
    opts: ['raspravljalo se', 'raspravljali se', 'se raspravljala', 'raspravljano'],
    answer: 'raspravljalo se',
    en: 'the new budget was discussed at the session',
    tip: 'Bezlični se-oblik u prošlosti: raspravljalo se (sr. rod jd.).',
  },
  {
    mode: 'izrazi',
    q: 'U studenome se rano ____.',
    opts: ['smrkava', 'smrkavaju', 'smrkavamo', 'smrknu'],
    answer: 'smrkava',
    en: 'in November it gets dark early',
    tip: 'Prirodne pojave su bezlične: smrkava se, sviće, grmi.',
  },
  {
    mode: 'dozivljaj',
    q: '____ me grlo već tri dana.',
    opts: ['Boli', 'Bolim', 'Boli se', 'Bole'],
    answer: 'Boli',
    en: 'my throat has hurt for three days',
    tip: 'Boli + koga (akuzativ): boli me, boli ga.',
  },
  {
    mode: 'dozivljaj',
    q: '____ li ti se novi film?',
    opts: ['Sviđa', 'Sviđaš', 'Sviđam', 'Svidi'],
    answer: 'Sviđa',
    en: 'do you like the new film?',
    tip: 'Sviđati se + dativ: sviđa mi se, sviđa li ti se.',
  },
  {
    mode: 'dozivljaj',
    q: 'Djeci ____ hladno na izletu.',
    opts: ['je bilo', 'su bili', 'je bila', 'bilo su'],
    answer: 'je bilo',
    en: 'the children were cold on the trip',
    tip: 'Hladno mi/im JE — doživljavač u dativu, glagol bezličan.',
  },
  {
    mode: 'dozivljaj',
    q: '____ mi se od te vožnje trajektom.',
    opts: ['Vrti', 'Vrtim', 'Zavrtio', 'Vrte'],
    answer: 'Vrti',
    en: 'that ferry ride makes me dizzy',
    tip: 'Vrti mi se — bezlično stanje s dativom.',
  },
  {
    mode: 'dozivljaj',
    q: 'Žao ____ je što ne možete doći.',
    opts: ['nam', 'nas', 'mi smo', 'nama smo'],
    answer: 'nam',
    en: 'we are sorry you cannot come',
    tip: 'Žao mi/nam je + što — dativ doživljavača.',
  },
  {
    mode: 'dozivljaj',
    q: 'Stalo joj ____ do tog posla.',
    opts: ['je', 'se', 'ju je', 'joj'],
    answer: 'je',
    en: 'she cares about that job',
    tip: 'Stalo mi je do + G — ustaljena bezlična sveza.',
  },
  {
    mode: 'dozivljaj',
    q: 'Nedostaje ____ obitelj otkako živi u Berlinu.',
    opts: ['mu', 'ga', 'on', 'njemu je'],
    answer: 'mu',
    en: 'he has missed his family since moving to Berlin',
    tip: 'Nedostajati + dativ: nedostaje mi, nedostaje mu.',
  },
  {
    mode: 'dozivljaj',
    q: 'Dosadilo ____ je čekati u redu.',
    opts: ['im', 'ih', 'oni', 'njima su'],
    answer: 'im',
    en: 'they got tired of waiting in line',
    tip: 'Dosaditi + dativ: dosadilo im je.',
  },
  {
    mode: 'slaganje',
    q: '____ je pet minuta do ponoći.',
    opts: ['Bilo', 'Bili', 'Bila', 'Bile'],
    answer: 'Bilo',
    en: 'it was five minutes to midnight',
    tip: 'Bezlična prošlost uvijek u srednjem rodu jednine: bilo je.',
  },
  {
    mode: 'slaganje',
    q: 'Na trgu ____ mnogo ljudi.',
    opts: ['je bilo', 'su bili', 'je bila', 'jesu bili'],
    answer: 'je bilo',
    en: 'there were many people in the square',
    tip: 'Mnogo/malo/pet + G → bezlično: bilo je mnogo ljudi.',
  },
  {
    mode: 'slaganje',
    q: '____ je hladno cijeli tjedan.',
    opts: ['Bilo', 'Bio', 'Bila', 'Bit'],
    answer: 'Bilo',
    en: 'it was cold all week',
    tip: 'Vremenske i osjetilne rečenice: bilo je hladno/vruće/kasno.',
  },
  {
    mode: 'slaganje',
    q: 'Prošlo ____ deset godina od mature.',
    opts: ['je', 'su', 'ju', 'se'],
    answer: 'je',
    en: 'ten years have passed since graduation',
    tip: 'Broj 5+ + G → jednina sr. roda: prošlo je deset godina.',
  },
  {
    mode: 'slaganje',
    q: 'U izvješću ____ da su prihodi pali.',
    opts: ['stoji', 'stoje', 'stojimo', 'stajalo'],
    answer: 'stoji',
    en: 'the report states that revenues fell',
    tip: 'Bezlično „stoji da…” = piše, navodi se.',
  },
  {
    mode: 'slaganje',
    q: 'Čini se da ____ negdje pogriješili u računu.',
    opts: ['smo', 'se', 'je', 'sam se'],
    answer: 'smo',
    en: 'it seems we made a mistake somewhere in the calculation',
    tip: 'Bezlično „čini se” + da-rečenica s vlastitim subjektom.',
  },
  {
    mode: 'slaganje',
    q: 'Nema ____ za brigu — sve je pod nadzorom.',
    opts: ['razloga', 'razlog', 'razlogom', 'razlozi'],
    answer: 'razloga',
    en: 'there is no cause for concern — everything is under control',
    tip: 'Nema + GENITIV: nema razloga, nema vremena.',
  },
  {
    mode: 'slaganje',
    q: 'Ostalo ____ još sasvim malo vremena.',
    opts: ['je', 'su', 'ju', 'si'],
    answer: 'je',
    en: 'there is very little time left',
    tip: 'Malo + G → bezlično sr. roda: ostalo je malo vremena.',
  },
];

export { DATA as BEZLICNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function BezlicneDrill({ goBack, award }: Props) {
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
          key: 'bezlicne',
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
          '👻 Bezlične konstrukcije',
          'treba, valja, boli me — sentences without a subject',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — bezlične rečenice su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje bezličnim izrazima! 💪'
                : 'Bezlične konstrukcije traže još vježbe.'}
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
      {H('👻 Bezlične konstrukcije', 'treba, valja, boli me — sentences without a subject', goBack)}
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
