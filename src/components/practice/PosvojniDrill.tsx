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

// B2 possessive-adjectives drill (B2 tranche 4, 2026-08-15): formation
// (-ov/-ev/-in with c→č and fleeting a), adjective-vs-genitive choice
// (bratov auto but stan nase bake), and the indefinite declension of
// possessives (u Ivanovu autu, iz bakina vrta).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  uporaba: '⚖️ Pridjev ili genitiv',
  sklonidba: '📐 Sklonidba',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Ivan” glasi:',
    opts: ['Ivanov', 'Ivanev', 'Ivanin', 'Ivanski'],
    answer: 'Ivanov',
    en: 'Ivan\u2019s',
    tip: 'Muška imena na suglasnik: -ov (Ivanov).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Marija” glasi:',
    opts: ['Marijin', 'Marijev', 'Marijov', 'Marijski'],
    answer: 'Marijin',
    en: 'Marija\u2019s',
    tip: 'Imenice na -a: -in (Marijin, mamin).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „prijatelj” glasi:',
    opts: ['prijateljev', 'prijateljov', 'prijateljin', 'prijateljski'],
    answer: 'prijateljev',
    en: 'the friend\u2019s',
    tip: 'Iza nepčanika (lj, nj, č, ž, š, j): -EV.',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „sestra” glasi:',
    opts: ['sestrin', 'sestrov', 'sestrev', 'sestrinski'],
    answer: 'sestrin',
    en: 'the sister\u2019s',
    tip: 'Sestra → sestrin (-a → -in).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Marko” glasi:',
    opts: ['Markov', 'Markev', 'Markin', 'Markovski'],
    answer: 'Markov',
    en: 'Marko\u2019s',
    tip: 'Muška imena na -o: osnova + -ov (Markov).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „učiteljica” glasi:',
    opts: ['učiteljičin', 'učiteljicin', 'učiteljičev', 'učiteljicov'],
    answer: 'učiteljičin',
    en: 'the teacher\u2019s (f)',
    tip: 'Ispred -in c prelazi u č: učiteljičin, kraljičin.',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „stric” glasi:',
    opts: ['stričev', 'stricov', 'stricev', 'stričin'],
    answer: 'stričev',
    en: 'the uncle\u2019s',
    tip: 'C → č + -ev: stričev.',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Petar” glasi:',
    opts: ['Petrov', 'Petarov', 'Petrin', 'Petrev'],
    answer: 'Petrov',
    en: 'Petar\u2019s',
    tip: 'Nepostojano a ispada: Petar → Petrov.',
  },
  {
    mode: 'uporaba',
    q: '„Auto moga brata” uz samo ime kraće kažemo:',
    opts: ['bratov auto', 'brata auto', 'bratski auto', 'auto od brat'],
    answer: 'bratov auto',
    en: 'my brother\u2019s car — possessive adjective',
    tip: 'Jednorječni posjednik → posvojni pridjev.',
  },
  {
    mode: 'uporaba',
    q: 'Posvojni pridjev NE možemo upotrijebiti kad:',
    opts: [
      'je posjednik proširen (moga starijeg brata)',
      'je posjednik osoba',
      'je posjednik jedna riječ',
      'imenica počinje samoglasnikom',
    ],
    answer: 'je posjednik proširen (moga starijeg brata)',
    en: 'possessive adjectives fail with expanded possessors',
    tip: 'Auto moga starijeg brata — mora genitiv.',
  },
  {
    mode: 'uporaba',
    q: 'Birani standard preferira:',
    opts: ['Ivanov auto', 'auto Ivana', 'auto od Ivana', 'Ivana auto'],
    answer: 'Ivanov auto',
    en: 'the possessive adjective beats the genitive',
    tip: 'Uz neprošireno ime: pridjev, ne genitiv.',
  },
  {
    mode: 'uporaba',
    q: '„Kuća ____ ” (djed) s posvojnim pridjevom:',
    opts: ['djedova kuća', 'djeda kuća', 'kuća od djeda', 'djedovska kuća'],
    answer: 'djedova kuća',
    en: 'grandfather\u2019s house',
    tip: 'Djed → djedov, djedova, djedovo.',
  },
  {
    mode: 'uporaba',
    q: '„____ torba” (Ana):',
    opts: ['Anina', 'Anova', 'Anijina', 'Anska'],
    answer: 'Anina',
    en: 'Ana\u2019s bag',
    tip: 'Ana → Anin, Anina, Anino.',
  },
  {
    mode: 'uporaba',
    q: '„Stan ____ ” (naša baka — prošireni posjednik):',
    opts: ['naše bake', 'naš bakin', 'naše bakin', 'našin bake'],
    answer: 'naše bake',
    en: 'our grandmother\u2019s flat — genitive',
    tip: 'Prošireni posjednik → genitiv: stan naše bake.',
  },
  {
    mode: 'uporaba',
    q: '„Shakespeareova drama” pokazuje da strana imena:',
    opts: [
      'normalno tvore posvojni pridjev',
      'ne mogu tvoriti pridjev',
      'traže samo genitiv',
      'gube završni samoglasnik',
    ],
    answer: 'normalno tvore posvojni pridjev',
    en: 'foreign names form possessives too',
    tip: 'Shakespeareov, Goetheov, Camusov.',
  },
  {
    mode: 'uporaba',
    q: 'Od imenica na -a posvojni je nastavak:',
    opts: ['-in (mamin)', '-ov (mamov)', '-ev (mamev)', '-ji (mamji)'],
    answer: '-in (mamin)',
    en: 'a-stem nouns take -in',
    tip: 'Mama → mamin, tata → tatin, Luka → Lukin.',
  },
  {
    mode: 'sklonidba',
    q: 'U ____ autu ima mjesta. (Ivanov, birano)',
    opts: ['Ivanovu', 'Ivanovom', 'Ivanovome', 'Ivanova'],
    answer: 'Ivanovu',
    en: 'in Ivan\u2019s car (formal locative)',
    tip: 'Posvojni na -ov/-in: neodređena sklonidba — u Ivanovu autu.',
  },
  {
    mode: 'sklonidba',
    q: 'Posvojni pridjevi na -ov/-in sklanjaju se po:',
    opts: [
      'neodređenoj (imeničkoj) sklonidbi',
      'određenoj sklonidbi',
      'pridjevsko-zamjeničkoj uvijek',
      'ne sklanjaju se',
    ],
    answer: 'neodređenoj (imeničkoj) sklonidbi',
    en: 'possessives decline like nouns (indefinite)',
    tip: 'Ivanova, Ivanovu, s Ivanovim — bez -oga/-omu.',
  },
  {
    mode: 'sklonidba',
    q: 'Vidio sam ____ brata. (Markov)',
    opts: ['Markova', 'Markovog', 'Markovoga', 'Markovu'],
    answer: 'Markova',
    en: 'I saw Marko\u2019s brother',
    tip: 'A za živo = G neodređene sklonidbe: Markova brata.',
  },
  {
    mode: 'sklonidba',
    q: 'Razgovarao sam s ____ sestrom. (Petrov)',
    opts: ['Petrovom', 'Petrovoj', 'Petrove', 'Petrovim'],
    answer: 'Petrovom',
    en: 'I talked with Petar\u2019s sister',
    tip: 'I jd. ž. r.: s Petrovom sestrom.',
  },
  {
    mode: 'sklonidba',
    q: '„U Ivanovom autu” u biranom stilu glasi:',
    opts: ['u Ivanovu autu', 'u Ivanovome autu', 'u Ivanova auta', 'u Ivanov autu'],
    answer: 'u Ivanovu autu',
    en: 'formal register drops -om',
    tip: 'Neodređeni L jd.: Ivanovu (bez -om/-ome).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv od „Anin stan” glasi:',
    opts: ['Anina stana', 'Aninog stana', 'Aninoga stana', 'Anine stane'],
    answer: 'Anina stana',
    en: 'of Ana\u2019s flat (formal)',
    tip: 'Neodređena sklonidba: Anina stana, Aninu stanu.',
  },
  {
    mode: 'sklonidba',
    q: 'Dali smo ____ psu hranu. (susjedov)',
    opts: ['susjedovu', 'susjedovom', 'susjedovome', 'susjedova'],
    answer: 'susjedovu',
    en: 'we fed the neighbour\u2019s dog',
    tip: 'D jd. neodređeno: susjedovu psu.',
  },
  {
    mode: 'sklonidba',
    q: 'Birano „iz bakina vrta” ima genitivni nastavak:',
    opts: ['-a (bakina)', '-og (bakinog)', '-oga (bakinoga)', '-e (bakine)'],
    answer: '-a (bakina)',
    en: 'from grandma\u2019s garden',
    tip: 'G jd. neodređene sklonidbe: bakina vrta.',
  },
];

export { DATA as POSVOJNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PosvojniDrill({ goBack, award }: Props) {
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
          key: 'posvojni',
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
        {H('🔑 Posvojni pridjevi', 'Ivanov, Marijin, stričev — whose is it, in one word', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — posvojni su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje posvojnim pridjevima! 💪'
                : 'Posvojni pridjevi traže još vježbe.'}
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
      {H('🔑 Posvojni pridjevi', 'Ivanov, Marijin, stričev — whose is it, in one word', goBack)}
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
