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

// C1 collocations drill (C1 tranche, 2026-08-14): the fixed verb-noun pairings
// and case government that separate "correct" Croatian from NATIVE Croatian.
// Three modes: formal verb-noun collocations, the case each collocation
// governs, and register-appropriate choice between near-synonyms.
const MODE_LABEL: Record<string, string> = {
  glagolske: '🤝 Glagol + imenica',
  padezi: '🎯 Rekcija',
  registar: '🎩 Pravi izbor',
};

const DATA = [
  {
    mode: 'glagolske',
    q: 'Na sastanku smo napokon ____ odluku o proračunu.',
    opts: ['donijeli', 'napravili', 'uzeli', 'dali'],
    answer: 'donijeli',
    en: 'we finally made a decision about the budget',
    tip: 'Odluka se DONOSI: donijeti odluku. „Napraviti odluku” je anglizam.',
  },
  {
    mode: 'glagolske',
    q: 'Ministarstvo je ____ mjere za zaštitu potrošača.',
    opts: ['poduzelo', 'uzelo', 'učinilo', 'izvelo'],
    answer: 'poduzelo',
    en: 'the ministry took measures to protect consumers',
    tip: 'Mjere se PODUZIMAJU: poduzeti mjere.',
  },
  {
    mode: 'glagolske',
    q: 'Molim vas da ____ računa o roku prijave.',
    opts: ['vodite', 'držite', 'imate', 'pazite'],
    answer: 'vodite',
    en: 'please keep the application deadline in mind',
    tip: 'Voditi računa o čemu — ustaljena sveza; „paziti” traži „na”.',
  },
  {
    mode: 'glagolske',
    q: 'Novi zakon ____ na snagu prvoga siječnja.',
    opts: ['stupa', 'ulazi', 'dolazi', 'kreće'],
    answer: 'stupa',
    en: 'the new law comes into force on January 1st',
    tip: 'Zakon STUPA na snagu — pravna kolokacija.',
  },
  {
    mode: 'glagolske',
    q: 'Uprava je ____ ostavku nakon afere.',
    opts: ['podnijela', 'predala', 'dala', 'poslala'],
    answer: 'podnijela',
    en: 'the management submitted its resignation after the scandal',
    tip: 'Ostavka se PODNOSI: podnijeti ostavku (i zahtjev, prijavu, žalbu).',
  },
  {
    mode: 'glagolske',
    q: 'Grad je raspisao natječaj i ____ ugovor s najboljim ponuditeljem.',
    opts: ['sklopio', 'napravio', 'spojio', 'potpisao se'],
    answer: 'sklopio',
    en: 'the city concluded a contract with the best bidder',
    tip: 'Ugovor se SKLAPA: sklopiti ugovor (potpisati je fizički čin).',
  },
  {
    mode: 'glagolske',
    q: 'Istraživanje je ____ svjetlo na uzroke iseljavanja.',
    opts: ['bacilo', 'stavilo', 'donijelo', 'pustilo'],
    answer: 'bacilo',
    en: 'the research shed light on the causes of emigration',
    tip: 'Baciti svjetlo na što — prenesena, ali ustaljena sveza.',
  },
  {
    mode: 'glagolske',
    q: 'Sud je ____ presudu u korist tužitelja.',
    opts: ['izrekao', 'rekao', 'izdao', 'objavio'],
    answer: 'izrekao',
    en: 'the court pronounced a verdict in favour of the plaintiff',
    tip: 'Presuda se IZRIČE: izreći presudu (kaznu također).',
  },
  {
    mode: 'padezi',
    q: 'Zahvaljujemo vam ____ povjerenju.',
    opts: ['na', 'za', 'o', 'u'],
    answer: 'na',
    en: 'we thank you for your trust',
    tip: 'Zahvaliti/hvala NA + lokativ: hvala na povjerenju.',
  },
  {
    mode: 'padezi',
    q: 'Uspjeh projekta ovisi ____ suradnji svih odjela.',
    opts: ['o', 'od', 'na', 'iz'],
    answer: 'o',
    en: 'the success of the project depends on all departments cooperating',
    tip: 'Ovisiti O + lokativ (ne „od” — to je regionalno/razgovorno).',
  },
  {
    mode: 'padezi',
    q: 'Odbor raspolaže ____ za obnovu škole.',
    opts: ['sredstvima', 'sredstva', 'sredstava', 'o sredstvima'],
    answer: 'sredstvima',
    en: 'the committee has funds at its disposal for the school renovation',
    tip: 'Raspolagati + instrumental: raspolagati sredstvima.',
  },
  {
    mode: 'padezi',
    q: 'Radujemo se ____ u rujnu.',
    opts: ['vašem dolasku', 'vaš dolazak', 'vašeg dolaska', 'o vašem dolasku'],
    answer: 'vašem dolasku',
    en: 'we look forward to your arrival in September',
    tip: 'Radovati se + dativ: radovati se dolasku.',
  },
  {
    mode: 'padezi',
    q: 'Unatoč ____, sjednica je održana.',
    opts: ['prosvjedima', 'prosvjeda', 'prosvjede', 's prosvjedima'],
    answer: 'prosvjedima',
    en: 'despite the protests, the session was held',
    tip: 'Unatoč + DATIV: unatoč prosvjedima (ne genitiv).',
  },
  {
    mode: 'padezi',
    q: 'Tvrtka se odrekla ____ na žalbu.',
    opts: ['prava', 'pravo', 'pravu', 'pravom'],
    answer: 'prava',
    en: 'the company waived its right to appeal',
    tip: 'Odreći se + GENITIV: odreći se prava.',
  },
  {
    mode: 'padezi',
    q: 'Ravnateljica upravlja ____ već deset godina.',
    opts: ['ustanovom', 'ustanovu', 'ustanove', 'nad ustanovom'],
    answer: 'ustanovom',
    en: 'the director has been managing the institution for ten years',
    tip: 'Upravljati + instrumental: upravljati ustanovom.',
  },
  {
    mode: 'padezi',
    q: 'Pristupili smo ____ problema vrlo ozbiljno.',
    opts: ['rješavanju', 'rješavanje', 'rješavanja', 'na rješavanje'],
    answer: 'rješavanju',
    en: 'we approached solving the problem very seriously',
    tip: 'Pristupiti + dativ: pristupiti rješavanju.',
  },
  {
    mode: 'registar',
    q: 'U službenom dopisu najprikladnije je: „____ vas da dostavite dokumentaciju.”',
    opts: ['Molimo', 'Trebamo', 'Hoćemo', 'Tražimo od'],
    answer: 'Molimo',
    en: 'formal request wording in an official letter',
    tip: 'Službeni registar: Molimo vas da… (uljudni performativ).',
  },
  {
    mode: 'registar',
    q: 'Formalno se ispričavamo: „Ispričavamo se ____ neugodnosti.”',
    opts: ['zbog', 'za', 'od', 'na'],
    answer: 'zbog',
    en: 'we apologize for the inconvenience',
    tip: 'Ispričati se ZBOG + genitiv (uzrok), standardno u dopisima.',
  },
  {
    mode: 'registar',
    q: 'U molbi zvuči najprofesionalnije: „____ bih se za mjesto lektora.”',
    opts: ['Prijavio', 'Javio', 'Upisao', 'Zapisao'],
    answer: 'Prijavio',
    en: 'I would like to apply for the position of language editor',
    tip: 'Prijaviti se ZA radno mjesto; „javiti se” je manje formalno.',
  },
  {
    mode: 'registar',
    q: 'Neutralno-formalna zamjena za razgovorno „šef”:',
    opts: ['nadređeni', 'gazda', 'glavni', 'poslodavac'],
    answer: 'nadređeni',
    en: 'the neutral-formal word for one’s boss',
    tip: 'Nadređeni (osoba iznad vas); poslodavac je pravni pojam, gazda razgovorno.',
  },
  {
    mode: 'registar',
    q: 'U izvješću: „Rezultati ____ da je potražnja porasla.”',
    opts: ['upućuju na to', 'kažu', 'pričaju', 'govore o tome'],
    answer: 'upućuju na to',
    en: 'the results indicate that demand has grown',
    tip: 'Upućivati na to da… — precizna akademska sveza.',
  },
  {
    mode: 'registar',
    q: 'Formalna isprika za kašnjenje sastanku: „Oprostite ____.”',
    opts: ['na smetnji', 'za smetnju', 'zbog smetnje', 'na smetnju'],
    answer: 'na smetnji',
    en: 'excuse the interruption',
    tip: 'Oprostite na smetnji — ustaljena uljudna formula (na + lokativ).',
  },
  {
    mode: 'registar',
    q: 'U akademskom tekstu: „Autorica ____ tezu trima argumentima.”',
    opts: ['potkrepljuje', 'podupire se', 'pokazuje', 'dokaže'],
    answer: 'potkrepljuje',
    en: 'the author supports her thesis with three arguments',
    tip: 'Potkrijepiti tezu/tvrdnju argumentima — akademska kolokacija.',
  },
  {
    mode: 'registar',
    q: 'Službena obavijest: „Ured ne radi ____ blagdana.”',
    opts: ['zbog', 'radi', 'od', 'preko'],
    answer: 'zbog',
    en: 'the office is closed because of the holiday',
    tip: 'ZBOG = uzrok; RADI = namjera. Blagdan je uzrok zatvaranja.',
  },
];

export { DATA as KOLOKACIJE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KolokacijeDrill({ goBack, award }: Props) {
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
          key: 'kolokacije',
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
        {H('🤝 Kolokacije', 'donijeti odluku — the pairings natives never break', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — govorite kao izvorni govornik! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje ustaljenim svezama! 💪'
                : 'Kolokacije i rekcija traže još vježbe.'}
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
      {H('🤝 Kolokacije', 'donijeti odluku — the pairings natives never break', goBack)}
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
