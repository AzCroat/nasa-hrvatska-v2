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

// C2 punctuation drill (C2 tranche 4, 2026-08-15): hyphen vs dash
// (polusloženice, relations, ranges), Croatian quotation marks and direct
// speech, and colon/semicolon/ellipsis conventions.
const MODE_LABEL: Record<string, string> = {
  crtica: '➖ Crtica i spojnica',
  navodnici: '🗨️ Navodnici',
  dvotocje: '🔣 Dvotočje i ostalo',
};

const DATA = [
  {
    mode: 'crtica',
    q: 'Spojnica (-) piše se u:',
    opts: ['polusloženicama (spomen-ploča)', 'umetnutim mislima', 'nabrajanju', 'upravnom govoru'],
    answer: 'polusloženicama (spomen-ploča)',
    en: 'the hyphen joins half-compounds',
    tip: 'Spomen-ploča, remek-djelo, hrvatsko-engleski.',
  },
  {
    mode: 'crtica',
    q: 'Crtica (–) služi za:',
    opts: [
      'umetanje i naglašen prekid misli',
      'spajanje polusloženica',
      'kraćenje riječi',
      'označavanje genitiva',
    ],
    answer: 'umetanje i naglašen prekid misli',
    en: 'the dash marks insertion and breaks',
    tip: 'On je – kako svi znamo – uvijek točan.',
  },
  {
    mode: 'crtica',
    q: 'Relacija „Zagreb ____ Split” piše se:',
    opts: [
      'crticom (Zagreb – Split)',
      'spojnicom (Zagreb-Split)',
      'zarezom (Zagreb, Split)',
      'kosom crtom (Zagreb/Split)',
    ],
    answer: 'crticom (Zagreb – Split)',
    en: 'the route dash',
    tip: 'Relacije i rasponi idu crticom, ne spojnicom.',
  },
  {
    mode: 'crtica',
    q: '„Spomen-ploča” sadrži:',
    opts: ['spojnicu', 'crticu', 'trotočje', 'apostrof'],
    answer: 'spojnicu',
    en: 'spomen-ploca contains a hyphen',
    tip: 'Polusloženica: obje sastavnice zadržavaju naglasak.',
  },
  {
    mode: 'crtica',
    q: 'Raspon godina 2010.____2020. piše se:',
    opts: ['crticom bez bjelina (2010.–2020.)', 'spojnicom s bjelinama', 'zarezom', 'dvotočjem'],
    answer: 'crticom bez bjelina (2010.–2020.)',
    en: 'year ranges take a closed dash',
    tip: 'Rasponi brojeva: crtica bez razmaka.',
  },
  {
    mode: 'crtica',
    q: '„hrvatsko____engleski rječnik” piše se:',
    opts: [
      'spojnicom (hrvatsko-engleski)',
      'crticom (hrvatsko – engleski)',
      'odvojeno',
      'sastavljeno',
    ],
    answer: 'spojnicom (hrvatsko-engleski)',
    en: 'Croatian-English takes a hyphen',
    tip: 'Ravnopravne sastavnice pridjeva veže spojnica.',
  },
  {
    mode: 'crtica',
    q: 'Umetnutu misao možemo odvojiti:',
    opts: ['crticama ili zarezima', 'samo točkama', 'dvotočjem', 'uskličnicima'],
    answer: 'crticama ili zarezima',
    en: 'insertions take dashes or commas',
    tip: 'Crtice ističu jače od zareza.',
  },
  {
    mode: 'crtica',
    q: 'U „50-ak ljudi” spojnica veže:',
    opts: ['broj i nastavak', 'dvije riječi', 'rečenice', 'ime i prezime'],
    answer: 'broj i nastavak',
    en: 'the hyphen in 50-ak',
    tip: 'Brojka + nastavak: 50-ak, 90-ih godina.',
  },
  {
    mode: 'navodnici',
    q: 'Hrvatski navodnici izgledaju:',
    opts: ['„ovako”', '"ovako"', '«ovako»', "'ovako'"],
    answer: '„ovako”',
    en: 'Croatian quotation marks',
    tip: 'Donji-gornji: „ … ” (99 dolje, 66 gore).',
  },
  {
    mode: 'navodnici',
    q: '„Doći ću”, ____ . (tko govori)',
    opts: ['rekla je Ana', 'je rekla Ana', 'Ana je bila rekavši', 'rekla Ana je'],
    answer: 'rekla je Ana',
    en: 'said Ana — after the closing quote',
    tip: 'Iza navodnika i zareza: rekla je Ana (inverzija).',
  },
  {
    mode: 'navodnici',
    q: 'Naslove knjiga u tekstu pišemo:',
    opts: ['u navodnicima ili kurzivu', 'velikim slovima', 'podcrtano crvenim', 'u zagradama'],
    answer: 'u navodnicima ili kurzivu',
    en: 'titles go in quotes or italics',
    tip: 'Roman „Zlatarovo zlato” / Zlatarovo zlato (kurziv).',
  },
  {
    mode: 'navodnici',
    q: 'Zarez uz upravni govor stoji:',
    opts: [
      'iza zatvorenoga navodnika („Doći ću”, rekla je.)',
      'ispred navodnika',
      'unutar navodnika uvijek',
      'nigdje',
    ],
    answer: 'iza zatvorenoga navodnika („Doći ću”, rekla je.)',
    en: 'the comma follows the closing quote',
    tip: '„Doći ću”, rekla je. — zarez izvan navodnika.',
  },
  {
    mode: 'navodnici',
    q: 'Navod unutar navoda označavamo:',
    opts: ['polunavodnicima (‚ovako’)', 'dvostrukim navodnicima', 'zagradama', 'crticom'],
    answer: 'polunavodnicima (‚ovako’)',
    en: 'a quote within a quote',
    tip: '„Rekao mi je ‚doći ću’ i nestao.”',
  },
  {
    mode: 'navodnici',
    q: 'Ironiju u tekstu možemo označiti:',
    opts: ['navodnicima („genijalno” rješenje)', 'uskličnikom', 'trotočjem', 'dvotočjem'],
    answer: 'navodnicima („genijalno” rješenje)',
    en: 'scare quotes mark irony',
    tip: 'Navodnici signaliziraju odmak od doslovnoga značenja.',
  },
  {
    mode: 'navodnici',
    q: 'Upitnik u upravnome govoru stoji:',
    opts: [
      'unutar navodnika („Dolaziš li?”)',
      'izvan navodnika',
      'umjesto navodnika',
      'iza autorove rečenice',
    ],
    answer: 'unutar navodnika („Dolaziš li?”)',
    en: 'the question mark stays inside',
    tip: 'Interpunkcija navoda ostaje unutar navodnika.',
  },
  {
    mode: 'navodnici',
    q: 'Iza uvodne rečenice prije upravnoga govora piše se:',
    opts: ['dvotočje (Ana reče: „Doći ću.”)', 'zarez uvijek', 'točka', 'ništa'],
    answer: 'dvotočje (Ana reče: „Doći ću.”)',
    en: 'a colon introduces direct speech',
    tip: 'Najava navoda: dvotočje + navodnici.',
  },
  {
    mode: 'dvotocje',
    q: 'Dvotočje najavljuje:',
    opts: ['nabrajanje ili objašnjenje', 'kraj rečenice', 'novi odlomak', 'upitnu rečenicu'],
    answer: 'nabrajanje ili objašnjenje',
    en: 'the colon announces a list or explanation',
    tip: 'Kupite sljedeće: kruh, mlijeko, sir.',
  },
  {
    mode: 'dvotocje',
    q: 'Točka sa zarezom (;) razdvaja:',
    opts: [
      'duže surečenice srodna sadržaja',
      'riječi u nabrajanju uvijek',
      'naslov i podnaslov',
      'brojke i slova',
    ],
    answer: 'duže surečenice srodna sadržaja',
    en: 'the semicolon separates related clauses',
    tip: 'Jače od zareza, slabije od točke.',
  },
  {
    mode: 'dvotocje',
    q: 'Trotočje (…) označava:',
    opts: [
      'nedovršenu misao ili izostavljen tekst',
      'kraj svakoga odlomka',
      'množinu',
      'posvojnost',
    ],
    answer: 'nedovršenu misao ili izostavljen tekst',
    en: 'the ellipsis marks unfinished thought',
    tip: 'Htio sam reći… ali ne vrijedi.',
  },
  {
    mode: 'dvotocje',
    q: '„Kupite sljedeće ____ kruh, mlijeko, sir.”',
    opts: ['dvotočje (:)', 'zarez (,)', 'crticu (–)', 'točku (.)'],
    answer: 'dvotočje (:)',
    en: 'which mark introduces the list',
    tip: 'Najava nabrajanja: dvotočje.',
  },
  {
    mode: 'dvotocje',
    q: 'Iza dvotočja nabrajanje počinje:',
    opts: ['malim slovom', 'velikim slovom uvijek', 'brojkom', 'novim retkom obavezno'],
    answer: 'malim slovom',
    en: 'lists after a colon start lowercase',
    tip: 'Veliko slovo samo ako slijedi potpuna rečenica-navod.',
  },
  {
    mode: 'dvotocje',
    q: 'Znak „?!” izriče:',
    opts: ['čuđenje spojeno s pitanjem', 'dvije rečenice', 'navod', 'stanku'],
    answer: 'čuđenje spojeno s pitanjem',
    en: '?! marks astonished questioning',
    tip: 'Zar opet?! — pitanje + emocija.',
  },
  {
    mode: 'dvotocje',
    q: 'Zagrade služe za:',
    opts: ['dodatna objašnjenja', 'isticanje glavne misli', 'upravni govor', 'naslove knjiga'],
    answer: 'dodatna objašnjenja',
    en: 'parentheses hold asides',
    tip: 'Rijeka (najveća hrvatska luka) raste.',
  },
  {
    mode: 'dvotocje',
    q: 'Kraticu „itd.” završava:',
    opts: ['točka', 'zarez', 'dvotočje', 'trotočje'],
    answer: 'točka',
    en: 'itd. ends with a period',
    tip: 'Kratice itd., npr., tzv. nose točku.',
  },
];

export { DATA as INTERPUNKCIJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function InterpunkcijaDrill({ goBack, award }: Props) {
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
          key: 'interpunkcija',
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
        {H('✏️ Interpunkcija', 'crtica, navodnici, dvotočje — everything beyond the comma', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — interpunkcija je vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje interpunkcijom! 💪'
                : 'Interpunkcija traži još vježbe.'}
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
      {H('✏️ Interpunkcija', 'crtica, navodnici, dvotočje — everything beyond the comma', goBack)}
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
