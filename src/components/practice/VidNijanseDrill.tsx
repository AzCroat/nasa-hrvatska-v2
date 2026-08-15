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

// C1 aspectual-nuance drill (C1 tranche, 2026-08-14): beyond the B1 basics —
// phase verbs forcing the imperfective, iterative vs single events, aspect in
// instructions/prohibitions, and near-pair nuances natives feel but courses
// rarely teach.
const MODE_LABEL: Record<string, string> = {
  faze: '⏳ Fazni glagoli',
  ponavljanje: '🔁 Jednom ili obično',
  nijansa: '🎚️ Fina razlika',
};

const DATA = [
  {
    mode: 'faze',
    q: 'Počeo je ____ pismo.',
    opts: ['pisati', 'napisati', 'napisao', 'pisao'],
    answer: 'pisati',
    en: 'he began writing the letter',
    tip: 'Fazni glagoli (početi, nastaviti, prestati) traže NESVRŠENI infinitiv.',
  },
  {
    mode: 'faze',
    q: 'Prestani ____ i poslušaj me!',
    opts: ['pričati', 'ispričati', 'reći', 'kazati'],
    answer: 'pričati',
    en: 'stop talking and listen to me',
    tip: 'Prestati + nesvršeni: prestani pričati.',
  },
  {
    mode: 'faze',
    q: 'Nastavili smo ____ unatoč kiši.',
    opts: ['hodati', 'dohodati', 'doći', 'stići'],
    answer: 'hodati',
    en: 'we kept walking despite the rain',
    tip: 'Nastaviti + nesvršeni: nastaviti hodati.',
  },
  {
    mode: 'faze',
    q: 'Upravo ____ večeru kad si nazvao.',
    opts: ['sam kuhala', 'sam skuhala', 'skuham', 'bih skuhala'],
    answer: 'sam kuhala',
    en: 'I was just cooking dinner when you called',
    tip: 'Radnja u tijeku (pozadina) = nesvršeni: kuhala sam.',
  },
  {
    mode: 'faze',
    q: 'Dok je ____, netko je pokucao.',
    opts: ['čitala', 'pročitala', 'pročita', 'čitati'],
    answer: 'čitala',
    en: 'while she was reading, someone knocked',
    tip: 'Dok + trajanje = nesvršeni; upad u radnju = svršeni (pokucao).',
  },
  {
    mode: 'faze',
    q: 'Konačno je ____ roman — nakon tri godine!',
    opts: ['dovršila', 'dovršavala', 'vršila', 'završavala'],
    answer: 'dovršila',
    en: 'she finally finished the novel — after three years',
    tip: 'Rezultat postignut = svršeni: dovršiti.',
  },
  {
    mode: 'faze',
    q: 'Nemoj ____ vrata — hladno je!',
    opts: ['otvarati', 'otvoriti', 'otvorio', 'otvaraj'],
    answer: 'otvarati',
    en: 'do not keep opening the door — it is cold',
    tip: 'Zabrana radnje uopće → nesvršeni: nemoj otvarati.',
  },
  {
    mode: 'faze',
    q: 'Samo nemoj ____ lozinku — jednom je dovoljno.',
    opts: ['zaboraviti', 'zaboravljati', 'zaboravio', 'zaboravi'],
    answer: 'zaboraviti',
    en: 'just do not forget the password — once would be enough',
    tip: 'Zabrana JEDNOG čina → svršeni: nemoj zaboraviti.',
  },
  {
    mode: 'ponavljanje',
    q: 'Svakog jutra ____ kavu na balkonu.',
    opts: ['pijem', 'popijem', 'popila sam', 'ispijem'],
    answer: 'pijem',
    en: 'every morning I drink coffee on the balcony',
    tip: 'Navika/ponavljanje = nesvršeni: pijem.',
  },
  {
    mode: 'ponavljanje',
    q: 'Jučer sam ____ dvije kave i nisam spavala.',
    opts: ['popila', 'pila', 'ispijala', 'popijala'],
    answer: 'popila',
    en: 'yesterday I drank two coffees and could not sleep',
    tip: 'Dovršen, izbrojiv čin = svršeni: popiti.',
  },
  {
    mode: 'ponavljanje',
    q: 'Kao dijete ____ bakama svako ljeto.',
    opts: ['odlazio sam', 'otišao sam', 'odem', 'otiđem'],
    answer: 'odlazio sam',
    en: 'as a child I used to go to my grandmothers every summer',
    tip: 'Ponavljana prošla radnja = nesvršeni: odlazio sam.',
  },
  {
    mode: 'ponavljanje',
    q: 'Sinoć je ____ i odmah zaspao.',
    opts: ['legao', 'lijegao', 'ležao', 'polegnuo'],
    answer: 'legao',
    en: 'last night he lay down and fell asleep immediately',
    tip: 'Jedan svršen čin: leći → legao (lijegati = ponavljano).',
  },
  {
    mode: 'ponavljanje',
    q: 'Baka bi nam uvijek ____ priče prije spavanja.',
    opts: ['pričala', 'ispričala', 'rekla', 'kazala'],
    answer: 'pričala',
    en: 'grandma would always tell us stories before bed',
    tip: 'Habitualno „bi + pridjev radni” ide s nesvršenim: pričala bi.',
  },
  {
    mode: 'ponavljanje',
    q: '____ li ikad na Velebit? (općenito iskustvo)',
    opts: ['Penjete se', 'Popnete se', 'Popeli ste se', 'Uspnete se'],
    answer: 'Penjete se',
    en: 'do you ever climb Velebit?',
    tip: 'Općenito/ikad = nesvršeni prezent: penjete li se ikad…',
  },
  {
    mode: 'ponavljanje',
    q: 'Kad god dođe, ____ nam nešto slatko.',
    opts: ['donese', 'donosi', 'donio je', 'nosio je'],
    answer: 'donese',
    en: 'whenever he comes, he brings us something sweet',
    tip: 'U pogodbeno-vremenskim „kad god” rečenicama svršeni prezent izriče svaki pojedinačni čin.',
  },
  {
    mode: 'ponavljanje',
    q: 'Cijelo smo poslijepodne ____ stan.',
    opts: ['uređivali', 'uredili', 'sredili', 'dotjerali'],
    answer: 'uređivali',
    en: 'we spent the whole afternoon tidying the flat',
    tip: 'Trajanje („cijelo poslijepodne”) = nesvršeni: uređivali smo.',
  },
  {
    mode: 'nijansa',
    q: 'On godinama ____ taj problem. (bezuspješno)',
    opts: ['rješava', 'riješi', 'riješio je', 'razriješi'],
    answer: 'rješava',
    en: 'he has been (unsuccessfully) solving that problem for years',
    tip: 'Proces bez rezultata = nesvršeni: rješava (riješiti = uspjeti).',
  },
  {
    mode: 'nijansa',
    q: '____ sam ti reći nešto važno. (pokušaj u prošlosti)',
    opts: ['Htio', 'Htjednuo', 'Hoću', 'Ushtio'],
    answer: 'Htio',
    en: 'I meant to tell you something important',
    tip: 'Htio sam (nesvršeno htijenje) — namjera koja se nije ostvarila.',
  },
  {
    mode: 'nijansa',
    q: 'Vlak samo što nije ____.',
    opts: ['stigao', 'stizao', 'dolazio', 'pristizao'],
    answer: 'stigao',
    en: 'the train is just about to arrive',
    tip: '„Samo što nije” + svršeni — neposredna budućnost.',
  },
  {
    mode: 'nijansa',
    q: 'Godinama je ____ pisma, a nikad ih nije poslao.',
    opts: ['pisao', 'napisao', 'ispisao', 'zapisao'],
    answer: 'pisao',
    en: 'for years he wrote letters and never sent them',
    tip: 'Ponavljano/trajno bez naglaska na dovršetku = nesvršeni.',
  },
  {
    mode: 'nijansa',
    q: 'Dođi sutra — dotad ću sve ____.',
    opts: ['pripremiti', 'pripremati', 'spremati', 'pripravljati'],
    answer: 'pripremiti',
    en: 'come tomorrow — by then I will have prepared everything',
    tip: 'Rok („dotad”) traži svršeni: pripremiti do tada.',
  },
  {
    mode: 'nijansa',
    q: 'Ne ____ mi — sve sam vidjela!',
    opts: ['laži', 'slaži', 'lagao', 'izlaži'],
    answer: 'laži',
    en: 'do not lie to me — I saw everything',
    tip: 'Niječni imperativ redovito ide s nesvršenim: ne laži.',
  },
  {
    mode: 'nijansa',
    q: '____ prozor, molim te. (jednokratna zamolba)',
    opts: ['Zatvori', 'Zatvaraj', 'Zatvarati', 'Pozatvaraj'],
    answer: 'Zatvori',
    en: 'close the window, please',
    tip: 'Jedan čin u potvrdnom imperativu = svršeni: zatvori.',
  },
  {
    mode: 'nijansa',
    q: 'Dugo smo se ____, a onda smo se napokon našli.',
    opts: ['dogovarali', 'dogovorili', 'sporazumjeli', 'nagodili'],
    answer: 'dogovarali',
    en: 'we negotiated for a long time and then finally agreed',
    tip: 'Proces = dogovarati se; rezultat = dogovoriti se / naći se.',
  },
];

export { DATA as VIDNIJANSE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VidNijanseDrill({ goBack, award }: Props) {
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
          key: 'vidnijanse',
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
        {H('🔀 Vid — nijanse', 'pisati ili napisati — aspect the native way', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — vid vam je u uhu! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro osjećanje vidskih nijansa! 💪'
                : 'Vidski parovi traže još vježbe.'}
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
      {H('🔀 Vid — nijanse', 'pisati ili napisati — aspect the native way', goBack)}
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
