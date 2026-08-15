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

// C1 numeral-declension drill (C1 tranche 4, 2026-08-15): declining
// dva/tri/cetiri (dvaju, dvama, triju, trima), oba/obje and the mixed-group
// numerals dvoje/troje, and the -ica male-group nouns (dvojica su dosla,
// trojica + G pl).
const MODE_LABEL: Record<string, string> = {
  dvatri: '✌️ Dva i tri',
  obadvoje: '👫 Oba i dvoje',
  brojevne: '👥 Dvojica',
};

const DATA = [
  {
    mode: 'dvatri',
    q: 'Genitiv broja „dva” (m. r.) glasi:',
    opts: ['dvaju', 'dva', 'dvama', 'dvoje'],
    answer: 'dvaju',
    en: 'of two (genitive)',
    tip: 'Dva → dvaju: iz dvaju razloga.',
  },
  {
    mode: 'dvatri',
    q: 'Razgovarali smo s ____ studentima. (dva)',
    opts: ['dvama', 'dva', 'dvaju', 'dvojicom'],
    answer: 'dvama',
    en: 'we talked with two students',
    tip: 'DLI broja dva: dvama.',
  },
  {
    mode: 'dvatri',
    q: 'Genitiv broja „tri” glasi:',
    opts: ['triju', 'tri', 'trima', 'trojice'],
    answer: 'triju',
    en: 'of three (genitive)',
    tip: 'Tri → triju: rezultat triju istraživanja.',
  },
  {
    mode: 'dvatri',
    q: 'Dativ broja „tri” glasi:',
    opts: ['trima', 'triju', 'tri', 'trojici'],
    answer: 'trima',
    en: 'to three (dative)',
    tip: 'DLI broja tri: trima.',
  },
  {
    mode: 'dvatri',
    q: 'Iz ____ razloga odustajem. (dva)',
    opts: ['dvaju', 'dva', 'dvama', 'dvojih'],
    answer: 'dvaju',
    en: 'I am withdrawing for two reasons',
    tip: 'Formalni stil sklanja broj: iz dvaju razloga.',
  },
  {
    mode: 'dvatri',
    q: 'Dativ broja „četiri” glasi:',
    opts: ['četirima', 'četiriju', 'četiri', 'četvorici'],
    answer: 'četirima',
    en: 'to four (dative)',
    tip: 'Četiri → G četiriju, DLI četirima.',
  },
  {
    mode: 'dvatri',
    q: 'Između ____ opcija biram prvu. (dvije)',
    opts: ['dviju', 'dvije', 'dvjema', 'dvoje'],
    answer: 'dviju',
    en: 'between the two options I choose the first',
    tip: 'Ženski rod: dvije → G dviju.',
  },
  {
    mode: 'dvatri',
    q: 'Instrumental broja „dvije” glasi:',
    opts: ['dvjema', 'dviju', 'dvije', 'dvama'],
    answer: 'dvjema',
    en: 'with two (feminine)',
    tip: 'Dvije → DLI dvjema: s dvjema sestrama.',
  },
  {
    mode: 'obadvoje',
    q: 'Genitiv od „oba” glasi:',
    opts: ['obaju', 'oba', 'obama', 'oboje'],
    answer: 'obaju',
    en: 'of both (masculine)',
    tip: 'Oba → obaju: s obaju stajališta.',
  },
  {
    mode: 'obadvoje',
    q: 'Genitiv od „obje” glasi:',
    opts: ['obiju', 'obje', 'objema', 'oboju'],
    answer: 'obiju',
    en: 'of both (feminine)',
    tip: 'Obje → obiju: iz obiju zemalja.',
  },
  {
    mode: 'obadvoje',
    q: 'Dativ od „obje” glasi:',
    opts: ['objema', 'obiju', 'obje', 'obama'],
    answer: 'objema',
    en: 'to both (feminine)',
    tip: 'Obje → DLI objema: objema rukama.',
  },
  {
    mode: 'obadvoje',
    q: '„Dvoje” upotrebljavamo za:',
    opts: [
      'skupinu u kojoj su muško i žensko',
      'dvije muške osobe',
      'dvije ženske osobe',
      'dva predmeta',
    ],
    answer: 'skupinu u kojoj su muško i žensko',
    en: 'dvoje = a mixed male-female pair',
    tip: 'Dvoje ljudi, dvoje djece — mješovita skupina.',
  },
  {
    mode: 'obadvoje',
    q: '____ djece došlo je na proslavu. (3)',
    opts: ['Troje', 'Trojica', 'Tri', 'Trima'],
    answer: 'Troje',
    en: 'three children came to the party',
    tip: 'Djeca su mješovita skupina → troje djece.',
  },
  {
    mode: 'obadvoje',
    q: 'Dvoje ljudi ____ u sobi. (sjediti)',
    opts: ['sjedi', 'sjede', 'sjedimo', 'sjedila'],
    answer: 'sjedi',
    en: 'two people are sitting in the room',
    tip: 'Dvoje + jednina: dvoje ljudi sjedi.',
  },
  {
    mode: 'obadvoje',
    q: 'S ____ prijatelja idem na put. (2, mješovito)',
    opts: ['dvoje', 'dvojicom', 'dvama', 'dvjema'],
    answer: 'dvoje',
    en: 'I am travelling with two friends',
    tip: 'Mješovita skupina: s dvoje prijatelja.',
  },
  {
    mode: 'obadvoje',
    q: '„Oboje” znači:',
    opts: ['i on i ona zajedno', 'samo muškarci', 'samo žene', 'dva predmeta'],
    answer: 'i on i ona zajedno',
    en: 'both of them, he and she',
    tip: 'Oboje smo se složili — muško i žensko zajedno.',
  },
  {
    mode: 'brojevne',
    q: '„Dvojica” označava:',
    opts: ['dvije muške osobe', 'muško i žensko', 'dvije ženske osobe', 'dva predmeta'],
    answer: 'dvije muške osobe',
    en: 'dvojica = two men',
    tip: 'Brojevne imenice na -ica samo za muškarce.',
  },
  {
    mode: 'brojevne',
    q: 'Dvojica ____ došla. (pomoćni glagol)',
    opts: ['su', 'je', 'smo', 'bi'],
    answer: 'su',
    en: 'the two men came',
    tip: 'Brojevne imenice na -ica: glagol u množini (dvojica su došla).',
  },
  {
    mode: 'brojevne',
    q: 'Uz „trojica” imenica stoji u:',
    opts: ['genitivu množine', 'nominativu množine', 'dativu jednine', 'akuzativu jednine'],
    answer: 'genitivu množine',
    en: 'trojica + genitive plural',
    tip: 'Trojica prijateljA, petorica igračA.',
  },
  {
    mode: 'brojevne',
    q: 'Petorica igrača ____ nagrađena.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'the five players were rewarded',
    tip: 'Petorica su nagrađena — množina + -a.',
  },
  {
    mode: 'brojevne',
    q: 'Za skupinu od dva muškarca i jedne žene kažemo:',
    opts: ['troje', 'trojica', 'tri', 'trima'],
    answer: 'troje',
    en: 'a mixed group of three = troje',
    tip: 'Čim je u skupini žena, -ica otpada: troje.',
  },
  {
    mode: 'brojevne',
    q: '„Obojica” znači:',
    opts: ['oba muškarca', 'obje žene', 'muško i žensko', 'oba predmeta'],
    answer: 'oba muškarca',
    en: 'obojica = both men',
    tip: 'Obojica su potpisala — samo za muškarce.',
  },
  {
    mode: 'brojevne',
    q: 'Došla su ____ radnika. (4 muškarca)',
    opts: ['četvorica', 'četvero', 'četiri', 'četirima'],
    answer: 'četvorica',
    en: 'four (male) workers arrived',
    tip: 'Muška skupina: četvorica radnika.',
  },
  {
    mode: 'brojevne',
    q: 'Uz brojevne imenice na -ica pridjev radni završava na:',
    opts: [
      '-a (dvojica su došla)',
      '-i (dvojica su došli)',
      '-o (dvojica je došlo)',
      '-e (dvojica su došle)',
    ],
    answer: '-a (dvojica su došla)',
    en: 'the participle ends in -a',
    tip: 'Dvojica su došla, trojica su pobijedila.',
  },
];

export { DATA as SKLONIDBA_BROJEVA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SklonidbaBrojevaDrill({ goBack, award }: Props) {
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
          key: 'sklonidbabrojeva',
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
        {H('🔢 Sklonidba brojeva', 'dvaju, objema, dvojica — numbers that decline', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — brojevi su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje sklonidbom brojeva! 💪'
                : 'Sklonidba brojeva traži još vježbe.'}
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
      {H('🔢 Sklonidba brojeva', 'dvaju, objema, dvojica — numbers that decline', goBack)}
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
