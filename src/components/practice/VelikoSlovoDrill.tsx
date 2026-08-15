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

// C2 capitalization drill (C2 tranche 5, 2026-08-15): peoples vs their
// languages/adjectives (Hrvat/hrvatski), holidays vs their adjectives
// (Bozic/bozicni), days/months/seasons lowercase, and institution, street
// and geographic naming (Sveuciliste u Zagrebu, Trg bana Jelacica).
const MODE_LABEL: Record<string, string> = {
  imena: '🧑 Imena i narodi',
  blagdani: '🎄 Blagdani i vrijeme',
  ustanove: '🏛️ Ustanove i mjesta',
};

const DATA = [
  {
    mode: 'imena',
    q: 'Pripadnik hrvatskoga naroda piše se:',
    opts: ['Hrvat', 'hrvat', 'HRVAT', 'hrVat'],
    answer: 'Hrvat',
    en: 'a Croat — capitalized',
    tip: 'Imena naroda velikim slovom: Hrvat, Slovenka.',
  },
  {
    mode: 'imena',
    q: 'Jezik kojim govorimo piše se:',
    opts: ['hrvatski', 'Hrvatski', 'HRVATSKI', 'hrvatski jezik veliko'],
    answer: 'hrvatski',
    en: 'the Croatian language — lowercase',
    tip: 'Pridjevi na -ski od imena: malim slovom (hrvatski, engleski).',
  },
  {
    mode: 'imena',
    q: 'Stanovnik Zagreba piše se:',
    opts: ['Zagrepčanin', 'zagrepčanin', 'ZAGREPČANIN', 'zagrebčanin'],
    answer: 'Zagrepčanin',
    en: 'a Zagreb resident',
    tip: 'Etnici velikim slovom + b→p: Zagrepčanin.',
  },
  {
    mode: 'imena',
    q: 'Pridjev od „Zagreb” u „____ katedrala” piše se:',
    opts: ['zagrebačka', 'Zagrebačka', 'ZAGREBAČKA', 'zagrebska'],
    answer: 'zagrebačka',
    en: 'the Zagreb cathedral (adj, lowercase)',
    tip: 'Odnosni pridjevi -ski/-čki/-ški malim slovom.',
  },
  {
    mode: 'imena',
    q: 'Posvojni pridjev od osobnog imena „Ivan” piše se:',
    opts: ['Ivanov', 'ivanov', 'IVANOV', 'ivanovljev'],
    answer: 'Ivanov',
    en: 'Ivan\u2019s — capitalized',
    tip: 'Posvojni na -ov/-ev/-in od IMENA: veliko (Ivanov, Marijin).',
  },
  {
    mode: 'imena',
    q: 'Naziv stanovnika kontinenta:',
    opts: ['Europljanin', 'europljanin', 'EUROPljanin', 'europejac'],
    answer: 'Europljanin',
    en: 'a European',
    tip: 'Etnici i od kontinenata velikim slovom.',
  },
  {
    mode: 'imena',
    q: '„bog” u značenju kršćanskoga Boga piše se:',
    opts: ['Bog', 'bog', 'BOG', 'b0g'],
    answer: 'Bog',
    en: 'God — capitalized as a name',
    tip: 'Jednobožačko božanstvo kao ime: Bog, Alah.',
  },
  {
    mode: 'imena',
    q: 'Nadimak „____ ” (slavni Modrić) piše se:',
    opts: ['Luka', 'luka', 'LUKA', 'lúka'],
    answer: 'Luka',
    en: 'Luka — the name, capitalized',
    tip: 'Imena i nadimci velikim slovom; luka = harbour.',
  },
  {
    mode: 'blagdani',
    q: 'Naziv blagdana piše se:',
    opts: ['Božić', 'božić', 'BOŽIĆ', 'Božič'],
    answer: 'Božić',
    en: 'Christmas',
    tip: 'Blagdani velikim slovom: Božić, Uskrs, Nova godina.',
  },
  {
    mode: 'blagdani',
    q: 'Pridjev od blagdana u „____ običaji” piše se:',
    opts: ['božićni', 'Božićni', 'BOŽIĆNI', 'božičniji'],
    answer: 'božićni',
    en: 'Christmas customs (adj, lowercase)',
    tip: 'Pridjevi od blagdana malim: božićni, uskrsni.',
  },
  {
    mode: 'blagdani',
    q: '„____ godina” (blagdan 1. siječnja):',
    opts: ['Nova', 'nova', 'NOVA', 'Novogodišnja'],
    answer: 'Nova',
    en: 'New Year (the holiday)',
    tip: 'Blagdan: Nova godina — prva riječ velikim.',
  },
  {
    mode: 'blagdani',
    q: 'Dan u tjednu piše se:',
    opts: ['ponedjeljak', 'Ponedjeljak', 'PONEDJELJAK', 'po nedjeljak'],
    answer: 'ponedjeljak',
    en: 'Monday — lowercase',
    tip: 'Dani i mjeseci malim slovom: ponedjeljak, siječanj.',
  },
  {
    mode: 'blagdani',
    q: 'Mjesec u godini piše se:',
    opts: ['siječanj', 'Siječanj', 'SIJEČANJ', 'sječanj'],
    answer: 'siječanj',
    en: 'January — lowercase',
    tip: 'Mjeseci malim slovom (za razliku od engleskoga).',
  },
  {
    mode: 'blagdani',
    q: 'Povijesni događaj „____ svjetski rat” piše se:',
    opts: ['Drugi', 'drugi', 'DRUGI', 'II drugi'],
    answer: 'Drugi',
    en: 'the Second World War',
    tip: 'Povijesni događaji: prva riječ velikim (Drugi svjetski rat).',
  },
  {
    mode: 'blagdani',
    q: '„uskrsni ponedjeljak” ili „Uskrsni ponedjeljak” — blagdan se piše:',
    opts: [
      'Uskrsni ponedjeljak',
      'uskrsni ponedjeljak',
      'USKRSNI PONEDJELJAK',
      'uskrsni Ponedjeljak',
    ],
    answer: 'Uskrsni ponedjeljak',
    en: 'Easter Monday — a holiday name',
    tip: 'Kao ime blagdana: prva riječ velikim slovom.',
  },
  {
    mode: 'blagdani',
    q: 'Godišnje doba piše se:',
    opts: ['proljeće', 'Proljeće', 'PROLJEĆE', 'prolieće'],
    answer: 'proljeće',
    en: 'spring — lowercase',
    tip: 'Godišnja doba malim slovom.',
  },
  {
    mode: 'ustanove',
    q: 'Naziv države: „____ Hrvatska”',
    opts: ['Republika', 'republika', 'REPUBLIKA', 'Repubika'],
    answer: 'Republika',
    en: 'the Republic of Croatia',
    tip: 'Službena imena država: sve riječi velikim (osim veznika).',
  },
  {
    mode: 'ustanove',
    q: '„____ u Zagrebu” (najstarije hrvatsko sveučilište):',
    opts: ['Sveučilište', 'sveučilište', 'SVEUČILIŠTE', 'Sve Učilište'],
    answer: 'Sveučilište',
    en: 'the University of Zagreb',
    tip: 'Ime ustanove: prva riječ velikim — Sveučilište u Zagrebu.',
  },
  {
    mode: 'ustanove',
    q: 'Opća imenica u „idem na sveučilište” piše se:',
    opts: ['sveučilište', 'Sveučilište', 'SVEUČILIŠTE', 'sveučilišće'],
    answer: 'sveučilište',
    en: 'going to university (generic)',
    tip: 'Opća uporaba malim slovom; ime ustanove velikim.',
  },
  {
    mode: 'ustanove',
    q: 'Ulica se piše: „____ kralja Tomislava”',
    opts: ['Ulica', 'ulica', 'ULICA', 'Ul.'],
    answer: 'Ulica',
    en: 'King Tomislav Street',
    tip: 'Prva riječ imena ulice velikim: Ulica kralja Tomislava.',
  },
  {
    mode: 'ustanove',
    q: '„Trg ____ Jelačića” (ban):',
    opts: ['bana', 'Bana', 'BANA', 'banova'],
    answer: 'bana',
    en: 'Ban Jelacic Square',
    tip: 'Unutar imena trga opće imenice malim: Trg bana Jelačića.',
  },
  {
    mode: 'ustanove',
    q: 'Naziv mora: „____ more”',
    opts: ['Jadransko', 'jadransko', 'JADRANSKO', 'Jadran more'],
    answer: 'Jadransko',
    en: 'the Adriatic Sea',
    tip: 'Zemljopisna imena: Jadransko more, Plitvička jezera.',
  },
  {
    mode: 'ustanove',
    q: '„osnovna škola” kao opći pojam vs ime „____ škola Ivana Gundulića”:',
    opts: ['Osnovna', 'osnovna', 'OSNOVNA', 'OŠ velika sva'],
    answer: 'Osnovna',
    en: 'a primary school vs THE school\u2019s name',
    tip: 'Ime konkretne škole: prva riječ velikim.',
  },
  {
    mode: 'ustanove',
    q: 'Nebesko tijelo na kojem živimo, u astronomskom kontekstu:',
    opts: ['Zemlja', 'zemlja', 'ZEMLJA', 'zemja'],
    answer: 'Zemlja',
    en: 'planet Earth — capitalized in astronomy',
    tip: 'Planet Zemlja velikim; zemlja (tlo) malim.',
  },
];

export { DATA as VELIKO_SLOVO_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VelikoSlovoDrill({ goBack, award }: Props) {
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
          key: 'velikoslovo',
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
          '🔠 Veliko i malo slovo',
          'Hrvat, hrvatski, Božić, božićni — when the capital matters',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — pravila su vaša! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje velikim slovom! 💪'
                : 'Veliko i malo slovo traže još vježbe.'}
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
      {H(
        '🔠 Veliko i malo slovo',
        'Hrvat, hrvatski, Božić, božićni — when the capital matters',
        goBack,
      )}
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
