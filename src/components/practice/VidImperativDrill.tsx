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

// B2 aspect-in-commands drill (B2 tranche 4, 2026-08-15): perfective for
// one-off commands, imperfective for habits and prohibitions (ne diraj,
// nemoj raditi), the warning exception (nemoj pasti), and aspect after
// phasal/modal verbs (poceti + imperfective, zelim procitati).
const MODE_LABEL: Record<string, string> = {
  zapovijed: '📣 Zapovijed',
  zabrana: '🚫 Zabrana',
  infinitiv: '🔗 Uz infinitiv',
};

const DATA = [
  {
    mode: 'zapovijed',
    q: '____ mi tu knjigu! (dodati — jednokratno)',
    opts: ['Dodaj', 'Dodavaj', 'Dodajući', 'Dodat'],
    answer: 'Dodaj',
    en: 'pass me that book!',
    tip: 'Jednokratna zapovijed → svršeni vid: dodaj.',
  },
  {
    mode: 'zapovijed',
    q: '____ pismo do sutra! (napisati)',
    opts: ['Napiši', 'Piši', 'Pisao', 'Napisat'],
    answer: 'Napiši',
    en: 'write the letter by tomorrow!',
    tip: 'Cilj s rokom → svršeno: napiši.',
  },
  {
    mode: 'zapovijed',
    q: 'Jednokratna zapovijed u pravilu traži:',
    opts: ['svršeni vid', 'nesvršeni vid', 'oba vida podjednako', 'infinitiv'],
    answer: 'svršeni vid',
    en: 'a one-off command takes perfective',
    tip: 'Zatvori vrata! Kupi kruh! — jedan dovršen čin.',
  },
  {
    mode: 'zapovijed',
    q: '____ vrata, molim te! (zatvoriti)',
    opts: ['Zatvori', 'Zatvaraj', 'Zatvorivši', 'Zatvarao'],
    answer: 'Zatvori',
    en: 'close the door, please!',
    tip: 'Jednokratno → zatvori; zatvaraj = opetovano.',
  },
  {
    mode: 'zapovijed',
    q: '____ svaki dan pola sata! (vježbati — navika)',
    opts: ['Vježbaj', 'Izvježbaj', 'Uvježbaj', 'Provježbaj'],
    answer: 'Vježbaj',
    en: 'exercise half an hour every day!',
    tip: 'Navika/ponavljanje → NESVRŠENI vid: vježbaj.',
  },
  {
    mode: 'zapovijed',
    q: '____ ovaj obrazac, molim. (ispuniti, Vi)',
    opts: ['Ispunite', 'Ispunjavajte', 'Ispunili', 'Ispunit ćete'],
    answer: 'Ispunite',
    en: 'please fill in this form',
    tip: 'Jednokratni zadatak, V-oblik: ispunite.',
  },
  {
    mode: 'zapovijed',
    q: 'Za trajnu preporuku (npr. o čitanju) rabimo:',
    opts: [
      'nesvršeni vid (čitaj svaki dan)',
      'svršeni vid (pročitaj svaki dan)',
      'samo infinitiv',
      'kondicional',
    ],
    answer: 'nesvršeni vid (čitaj svaki dan)',
    en: 'a standing recommendation takes imperfective',
    tip: 'Čitaj, vježbaj, spavaj dovoljno — navike.',
  },
  {
    mode: 'zapovijed',
    q: '____ me sutra u osam! (probuditi)',
    opts: ['Probudi', 'Budi', 'Buđaše', 'Probudivši'],
    answer: 'Probudi',
    en: 'wake me at eight tomorrow!',
    tip: 'Jedan čin sutra → svršeno: probudi.',
  },
  {
    mode: 'zabrana',
    q: 'Nemoj ____ ! (kasniti — općenito)',
    opts: ['kasniti', 'zakasniti', 'kasnio', 'zakasnivši'],
    answer: 'kasniti',
    en: 'do not be late (in general)',
    tip: 'Opća zabrana: nemoj + NESVRŠENI infinitiv.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ tu knjigu! (dirati)',
    opts: ['diraj', 'dirni', 'dirao', 'dirnuvši'],
    answer: 'diraj',
    en: 'do not touch that book!',
    tip: 'Ne + nesvršeni imperativ: ne diraj.',
  },
  {
    mode: 'zabrana',
    q: 'Zabrana u pravilu traži:',
    opts: ['nesvršeni vid', 'svršeni vid', 'pluskvamperfekt', 'aorist'],
    answer: 'nesvršeni vid',
    en: 'prohibitions take imperfective',
    tip: 'Ne otvaraj, nemoj raditi, ne kasni.',
  },
  {
    mode: 'zabrana',
    q: 'Nemoj to ____ ! (raditi)',
    opts: ['raditi', 'uraditi', 'radio', 'uradivši'],
    answer: 'raditi',
    en: 'do not do that!',
    tip: 'Nemoj + nesvršeni infinitiv: nemoj raditi.',
  },
  {
    mode: 'zabrana',
    q: 'Ne ____ prozor! (otvarati)',
    opts: ['otvaraj', 'otvori', 'otvorivši', 'otvarao'],
    answer: 'otvaraj',
    en: 'do not open the window!',
    tip: 'Ne + nesvršeni: ne otvaraj (ne otvori je pogrešno).',
  },
  {
    mode: 'zabrana',
    q: 'Upozorenje na jedan čin: „Nemoj ____ !” (pasti)',
    opts: ['pasti', 'padati', 'pao', 'padnuvši'],
    answer: 'pasti',
    en: 'mind you do not fall!',
    tip: 'IZNIMKA: upozorenja uzimaju svršeni vid — nemoj pasti.',
  },
  {
    mode: 'zabrana',
    q: '„Ne zaboravi ponijeti ključeve!” pravilno je jer:',
    opts: [
      'upozorenja dopuštaju svršeni vid',
      'zabrane uvijek traže svršeni',
      'zaboraviti nema nesvršenoga para',
      'imperativ nema vida',
    ],
    answer: 'upozorenja dopuštaju svršeni vid',
    en: 'warnings license the perfective',
    tip: 'Ne zaboravi, nemoj pasti, ne izgubi — prevencija jednoga čina.',
  },
  {
    mode: 'zabrana',
    q: 'Nemojte ____ za vrijeme predavanja. (razgovarati)',
    opts: ['razgovarati', 'porazgovarati', 'razgovarali', 'razgovor'],
    answer: 'razgovarati',
    en: 'do not talk during the lecture',
    tip: 'Trajna zabrana → nesvršeno.',
  },
  {
    mode: 'infinitiv',
    q: 'Počeo je ____ hrvatski. (učiti)',
    opts: ['učiti', 'naučiti', 'naučio', 'učivši'],
    answer: 'učiti',
    en: 'he began to learn Croatian',
    tip: 'Fazni glagoli (početi, nastaviti, prestati) + NESVRŠENI.',
  },
  {
    mode: 'infinitiv',
    q: 'Nastavite ____ ! (raditi)',
    opts: ['raditi', 'uraditi', 'radili', 'uradite'],
    answer: 'raditi',
    en: 'carry on working!',
    tip: 'Nastaviti + nesvršeni infinitiv.',
  },
  {
    mode: 'infinitiv',
    q: 'Prestani ____ ! (vikati)',
    opts: ['vikati', 'viknuti', 'vikao', 'viknuvši'],
    answer: 'vikati',
    en: 'stop shouting!',
    tip: 'Prestati + nesvršeni: prestani vikati.',
  },
  {
    mode: 'infinitiv',
    q: 'Fazni glagoli (početi, nastaviti, prestati) traže:',
    opts: ['nesvršeni infinitiv', 'svršeni infinitiv', 'glagolski prilog', 'imperativ'],
    answer: 'nesvršeni infinitiv',
    en: 'phase verbs take imperfective infinitives',
    tip: 'Radnja u tijeku nema svršetka u sebi.',
  },
  {
    mode: 'infinitiv',
    q: 'Želim ____ ovaj roman do petka. (čitati/pročitati)',
    opts: ['pročitati', 'čitati', 'čitao', 'pročitavši'],
    answer: 'pročitati',
    en: 'I want to finish this novel by Friday',
    tip: 'Cilj s rokom → svršeni infinitiv: pročitati.',
  },
  {
    mode: 'infinitiv',
    q: 'Idem ____ . (spavati)',
    opts: ['spavati', 'zaspati', 'spavao', 'zaspavši'],
    answer: 'spavati',
    en: 'I am going to sleep',
    tip: 'Idem spavati — aktivnost, ne trenutak usnivanja.',
  },
  {
    mode: 'infinitiv',
    q: 'Moraš ____ zadaću prije izlaska. (završiti)',
    opts: ['završiti', 'završavati', 'završivši', 'završavao'],
    answer: 'završiti',
    en: 'you must finish your homework before going out',
    tip: 'Dovršetak → svršeni infinitiv.',
  },
  {
    mode: 'infinitiv',
    q: 'Zna ____ otkad je imao pet godina. (plivati)',
    opts: ['plivati', 'otplivati', 'plivao', 'zaplivavši'],
    answer: 'plivati',
    en: 'he has known how to swim since he was five',
    tip: 'Vještina/sposobnost → nesvršeni: zna plivati.',
  },
];

export { DATA as VID_IMPERATIV_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VidImperativDrill({ goBack, award }: Props) {
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
          key: 'vidimperativ',
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
          '🎬 Vid u zapovijedi',
          'zatvori, ne diraj, nemoj pasti — aspect where it stings',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — zapovijedi su vaše! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje vidom u imperativu! 💪'
                : 'Vid u imperativu traži još vježbe.'}
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
      {H('🎬 Vid u zapovijedi', 'zatvori, ne diraj, nemoj pasti — aspect where it stings', goBack)}
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
