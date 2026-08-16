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

// C2 discourse-connectors drill (C2 tranche 3, 2026-08-15): meaning
// (consequence, concession, explanation, amplification), near-synonym nuance
// (naime vs dakle, iako vs zato sto, nego vs no, budući da sentence-initially)
// and register (formal replacements for colloquial linkers).
const MODE_LABEL: Record<string, string> = {
  znacenje: '🎯 Značenje',
  nijanse: '🌓 Nijanse',
  formalno: '🏛️ Formalno',
};

const DATA = [
  {
    mode: 'znacenje',
    q: 'Kasnio je na vlak; ____ je propustio i sastanak.',
    opts: ['stoga', 'premda', 'naime', 'štoviše'],
    answer: 'stoga',
    en: 'he was late for the train; therefore he missed the meeting too',
    tip: 'Stoga = posljedica (therefore).',
  },
  {
    mode: 'znacenje',
    q: 'Nije došao na proslavu, ____ se bio najavio.',
    opts: ['premda', 'stoga', 'dakle', 'naime'],
    answer: 'premda',
    en: 'he did not come to the party, although he had said he would',
    tip: 'Premda/iako = dopusnost (although).',
  },
  {
    mode: 'znacenje',
    q: 'Sve je skuplje; ____, cijene energije naglo rastu.',
    opts: ['naime', 'stoga', 'ipak', 'potom'],
    answer: 'naime',
    en: 'everything is pricier; namely, energy costs are soaring',
    tip: 'Naime uvodi objašnjenje ili pojašnjenje.',
  },
  {
    mode: 'znacenje',
    q: 'Nije samo pametan; ____, izuzetno je marljiv.',
    opts: ['štoviše', 'premda', 'doduše', 'inače'],
    answer: 'štoviše',
    en: 'he is not just smart; moreover, he is extremely hardworking',
    tip: 'Štoviše pojačava prethodnu tvrdnju.',
  },
  {
    mode: 'znacenje',
    q: 'Plan nije uspio; ____ moramo pokušati ponovno.',
    opts: ['unatoč tomu', 'naime', 'potom', 'štoviše'],
    answer: 'unatoč tomu',
    en: 'the plan failed; nevertheless we must try again',
    tip: 'Unatoč tomu = usprkos rečenomu (nevertheless).',
  },
  {
    mode: 'znacenje',
    q: 'Prvo dovršimo izvještaj; ____ možemo na kavu.',
    opts: ['potom', 'naime', 'premda', 'doduše'],
    answer: 'potom',
    en: 'first we finish the report; then we can go for coffee',
    tip: 'Potom/zatim = vremenski slijed.',
  },
  {
    mode: 'znacenje',
    q: 'Posao je, ____, naporan, ali izvrsno plaćen.',
    opts: ['doduše', 'stoga', 'potom', 'dakle'],
    answer: 'doduše',
    en: 'the job is, admittedly, exhausting, but superbly paid',
    tip: 'Doduše priznaje ograničenje prije suprotstavljanja.',
  },
  {
    mode: 'znacenje',
    q: 'Misliš, ____, da nemamo drugog izbora?',
    opts: ['dakle', 'naime', 'premda', 'uoči'],
    answer: 'dakle',
    en: 'so you think we have no other choice?',
    tip: 'Dakle izvodi zaključak iz rečenoga.',
  },
  {
    mode: 'nijanse',
    q: 'Zaključak je jasan: ____, moramo štedjeti.',
    opts: ['dakle', 'naime', 'doduše', 'premda'],
    answer: 'dakle',
    en: 'the conclusion is clear: therefore, we must save',
    tip: 'Dakle = zaključak; naime = objašnjenje. Ovdje zaključujemo.',
  },
  {
    mode: 'nijanse',
    q: 'Nešto ću ti priznati: ____, nikad nisam volio ovaj posao.',
    opts: ['naime', 'dakle', 'stoga', 'potom'],
    answer: 'naime',
    en: 'I will confess something: namely, I never liked this job',
    tip: 'Najava objašnjenja → naime.',
  },
  {
    mode: 'nijanse',
    q: 'Obećao je doći; ____, nije se pojavio.',
    opts: ['međutim', 'stoga', 'naime', 'potom'],
    answer: 'međutim',
    en: 'he promised to come; however, he did not show up',
    tip: 'Suprotnost očekivanju → međutim.',
  },
  {
    mode: 'nijanse',
    q: '____ je padala kiša, izašli smo u šetnju.',
    opts: ['Iako', 'Zato što', 'Budući da', 'Naime'],
    answer: 'Iako',
    en: 'although it was raining, we went for a walk',
    tip: 'Dopusnost (unatoč kiši) → iako.',
  },
  {
    mode: 'nijanse',
    q: 'Nisam došao ____ sam bio bolestan.',
    opts: ['zato što', 'iako', 'međutim', 'štoviše'],
    answer: 'zato što',
    en: 'I did not come because I was ill',
    tip: 'Uzrok → zato što / jer.',
  },
  {
    mode: 'nijanse',
    q: '____ nije bilo struje, nastava je otkazana.',
    opts: ['Budući da', 'Jer', 'Međutim', 'Štoviše'],
    answer: 'Budući da',
    en: 'since there was no electricity, classes were cancelled',
    tip: 'Na početku rečenice uzrok uvodi BUDUĆI DA — ne „jer”.',
  },
  {
    mode: 'nijanse',
    q: 'Automobil nije crn, ____ tamnoplav.',
    opts: ['nego', 'no', 'ali', 'već da'],
    answer: 'nego',
    en: 'the car is not black but dark blue',
    tip: 'Iza niječnice ispravak uvodi NEGO (ili već).',
  },
  {
    mode: 'nijanse',
    q: 'Trudio se svim silama, ____ rezultata nije bilo.',
    opts: ['no', 'nego', 'naime', 'potom'],
    answer: 'no',
    en: 'he tried his hardest, yet there were no results',
    tip: 'No = ali (blaža suprotnost); nego traži niječnicu ispred.',
  },
  {
    mode: 'formalno',
    q: 'Razgovorno „al” u eseju postaje:',
    opts: ['međutim', 'fakat', 'pa', 'ma'],
    answer: 'međutim',
    en: 'colloquial but → formal however',
    tip: 'U formalnom tekstu: no, ali, međutim.',
  },
  {
    mode: 'formalno',
    q: 'Kolokvijalno uzročno „pošto” u standardu glasi:',
    opts: ['budući da', 'nakon što', 'pošto-poto', 'otkad'],
    answer: 'budući da',
    en: 'colloquial causal posto → standard budući da',
    tip: 'U standardu je pošto samo VREMENSKO; uzrok = budući da / jer.',
  },
  {
    mode: 'formalno',
    q: 'U službenom dopisu „isto tako” bolje je zamijeniti s:',
    opts: ['nadalje', 'kužiš', 'e da', 'usput'],
    answer: 'nadalje',
    en: 'furthermore (formal linking)',
    tip: 'Nadalje, također, povrh toga — formalni dodavači.',
  },
  {
    mode: 'formalno',
    q: '„Slijedom navedenoga” u dopisu znači:',
    opts: ['u skladu s onim što je rečeno', 'suprotno rečenomu', 'bez obzira na sve', 'na brzinu'],
    answer: 'u skladu s onim što je rečeno',
    en: 'pursuant to the foregoing',
    tip: 'Administrativni konektor posljedice/nadovezivanja.',
  },
  {
    mode: 'formalno',
    q: 'Za zaključni odlomak eseja prikladan je konektor:',
    opts: ['naposljetku', 'frka je', 'eto', 'aha'],
    answer: 'naposljetku',
    en: 'finally / in conclusion',
    tip: 'Naposljetku, zaključno, na kraju — zaključni signali.',
  },
  {
    mode: 'formalno',
    q: 'Razgovorno potvrdno „nego šta” u standardu glasi:',
    opts: ['dakako', 'ma daj', 'nema frke', 'aha'],
    answer: 'dakako',
    en: 'colloquial sure thing → standard certainly',
    tip: 'Dakako, svakako, naravno — standardne potvrde.',
  },
  {
    mode: 'formalno',
    q: 'Koji je oblik NEPRAVILAN (česta pogreška)?',
    opts: ['obzirom da', 's obzirom na to da', 'budući da', 'zato što'],
    answer: 'obzirom da',
    en: 'the clipped obzirom da is nonstandard',
    tip: 'Pravilno je samo: s obzirom na to da.',
  },
  {
    mode: 'formalno',
    q: 'Razgovorni uvod „što se tiče” u formalnom stilu:',
    opts: ['glede', 'kužiš', 'ono', 'ma'],
    answer: 'glede',
    en: 'regarding (formal)',
    tip: 'Glede / u pogledu / u vezi s — formalne inačice.',
  },
];

export { DATA as KONEKTORI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KonektoriDrill({ goBack, award }: Props) {
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
          key: 'konektori',
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
        {H('🔗 Tekstni konektori', 'stoga, naime, međutim — the glue of connected prose', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — tekst vam teče! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje konektorima! 💪'
                : 'Tekstni konektori traže još vježbe.'}
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
      {H('🔗 Tekstni konektori', 'stoga, naime, međutim — the glue of connected prose', goBack)}
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
