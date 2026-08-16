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

// C2 official-documents drill (C2 tranche 9, 2026-08-15): the job
// application (formulas, enclosures, date format), the appeal/complaint
// (citing the decision, tone, evidence) and the CV (reverse chronology,
// CEFR language levels, cover letter vs CV).
const MODE_LABEL: Record<string, string> = {
  molba: '📨 Molba',
  zalba: '⚖️ Žalba',
  zivotopis: '📋 Životopis',
};

const DATA = [
  {
    mode: 'molba',
    q: 'Molba za posao počinje:',
    opts: ['Poštovani,', 'Bog!', 'Ej, ekipa!', 'Dragi moji,'],
    answer: 'Poštovani,',
    en: 'a job application opens with Postovani',
    tip: 'Uz prezime ako je poznato: Poštovani g. Horvat.',
  },
  {
    mode: 'molba',
    q: 'U molbi se prijavljujemo „na natječaj ____ ” (objavljen)',
    opts: ['objavljen', 'objavljujući', 'koji objavljen', 'objavljenoga'],
    answer: 'objavljen',
    en: 'the advertised vacancy',
    tip: 'Prijavljujem se na natječaj objavljen dana…',
  },
  {
    mode: 'molba',
    q: 'Standardna rečenica molbe:',
    opts: [
      'Ovim se putem prijavljujem na radno mjesto…',
      'Trebam posao, dajte mi ga.',
      'Čuo sam da nešto ima.',
      'Plaća me zanima.',
    ],
    answer: 'Ovim se putem prijavljujem na radno mjesto…',
    en: 'I hereby apply for the position',
    tip: 'Ustaljena formula prijave.',
  },
  {
    mode: 'molba',
    q: 'Kvalifikacije u molbi iznosimo:',
    opts: [
      'sažeto i uz dokaze (u prilogu)',
      'skromno prešućujući sve',
      'pjesnički',
      'velikim slovima',
    ],
    answer: 'sažeto i uz dokaze (u prilogu)',
    en: 'concise, evidence-backed',
    tip: 'Prilozi: životopis, preslike svjedodžbi.',
  },
  {
    mode: 'molba',
    q: '„U prilogu dostavljam ____ .” (životopis)',
    opts: ['životopis', 'život', 'životopisa', 'životopisom'],
    answer: 'životopis',
    en: 'I enclose my CV',
    tip: 'Dostavljam + A: životopis, preslike.',
  },
  {
    mode: 'molba',
    q: 'Molba završava:',
    opts: ['S poštovanjem,', 'Pusa!', 'Vidimo se!', 'Aj bog'],
    answer: 'S poštovanjem,',
    en: 'Yours faithfully',
    tip: 'Završni pozdrav + potpis.',
  },
  {
    mode: 'molba',
    q: 'Datum i mjesto u dopisu pišu se:',
    opts: ['Zagreb, 15. kolovoza 2026.', '15/8/26 Zagreb', 'kolovoz, Zagreb 15', 'Zagreb 15.8.'],
    answer: 'Zagreb, 15. kolovoza 2026.',
    en: 'place, then full date',
    tip: 'Mjesto, zarez, datum s genitivom mjeseca.',
  },
  {
    mode: 'molba',
    q: '„Stojim Vam na raspolaganju za ____ .” (dodatne obavijesti)',
    opts: [
      'dodatne obavijesti',
      'dodatnih obavijesti',
      'dodatnim obavijestima',
      'dodatne obavijestima',
    ],
    answer: 'dodatne obavijesti',
    en: 'at your disposal for further information',
    tip: 'Za + akuzativ.',
  },
  {
    mode: 'zalba',
    q: 'Žalba se podnosi:',
    opts: [
      'u pisanom obliku u zakonskom roku',
      'usmeno bilo kada',
      'anonimno na letku',
      'preko poznanika',
    ],
    answer: 'u pisanom obliku u zakonskom roku',
    en: 'appeals are written and time-bound',
    tip: 'Rok teče od dostave odluke.',
  },
  {
    mode: 'zalba',
    q: 'Žalba počinje pozivanjem na:',
    opts: [
      'odluku protiv koje se podnosi (broj i datum)',
      'vremensku prognozu',
      'osobne dojmove',
      'tuđa iskustva',
    ],
    answer: 'odluku protiv koje se podnosi (broj i datum)',
    en: 'cite the contested decision',
    tip: 'Protiv rješenja KLASA…, URBROJ…, od…',
  },
  {
    mode: 'zalba',
    q: '„Ulažem žalbu ____ rješenje.” (protiv)',
    opts: ['protiv', 'na protiv', 'za', 'o'],
    answer: 'protiv',
    en: 'I lodge an appeal against the decision',
    tip: 'Žalba protiv + G ili žalba na + A.',
  },
  {
    mode: 'zalba',
    q: 'Ton žalbe je:',
    opts: ['odlučan, ali uljudan i činjeničan', 'uvredljiv', 'plačljiv', 'šaljiv'],
    answer: 'odlučan, ali uljudan i činjeničan',
    en: 'firm, courteous, factual',
    tip: 'Argumenti, ne emocije.',
  },
  {
    mode: 'zalba',
    q: '„Predlažem da se rješenje ____ .” (poništiti)',
    opts: ['poništi', 'poništiti', 'poništilo', 'poništivši'],
    answer: 'poništi',
    en: 'I move that the decision be annulled',
    tip: 'Da + prezent u zahtjevu.',
  },
  {
    mode: 'zalba',
    q: 'Dokaze u žalbi:',
    opts: [
      'prilažemo i pobrajamo',
      'spominjemo neodređeno',
      'čuvamo za sebe',
      'šaljemo poslije roka',
    ],
    answer: 'prilažemo i pobrajamo',
    en: 'attach and enumerate evidence',
    tip: 'U prilogu: 1. …, 2. …',
  },
  {
    mode: 'zalba',
    q: '„U protivnome ću biti prisiljen…” u žalbi:',
    opts: [
      'najavljuje daljnje pravne korake',
      'prijeti nasiljem',
      'moli milost',
      'priznaje krivnju',
    ],
    answer: 'najavljuje daljnje pravne korake',
    en: 'failing which, further remedies',
    tip: 'Uljudna najava eskalacije.',
  },
  {
    mode: 'zalba',
    q: 'Reklamacija robe traži:',
    opts: ['račun i opis nedostatka', 'samo ljutnju', 'fotografiju trgovine', 'preporuku susjeda'],
    answer: 'račun i opis nedostatka',
    en: 'receipt plus defect description',
    tip: 'Prava potrošača: dokaz kupnje.',
  },
  {
    mode: 'zivotopis',
    q: 'Suvremeni životopis (CV) je:',
    opts: ['tabličan i sažet (1-2 stranice)', 'esej od deset stranica', 'pjesma', 'popis želja'],
    answer: 'tabličan i sažet (1-2 stranice)',
    en: 'a CV is tabular and short',
    tip: 'Europass ili uredan vlastiti format.',
  },
  {
    mode: 'zivotopis',
    q: 'Radna iskustva nižemo:',
    opts: ['obrnutim kronološkim redom', 'abecedno', 'nasumično', 'od najstarijeg'],
    answer: 'obrnutim kronološkim redom',
    en: 'reverse chronological order',
    tip: 'Najnovije prvo.',
  },
  {
    mode: 'zivotopis',
    q: 'U rubrici vještine navodimo:',
    opts: [
      'provjerljive vještine s razinom',
      'sve što zvuči dobro',
      'tuđe vještine',
      'samo hobije',
    ],
    answer: 'provjerljive vještine s razinom',
    en: 'verifiable skills with level',
    tip: 'Jezici s razinama (B2, C1), alati.',
  },
  {
    mode: 'zivotopis',
    q: 'Znanje jezika u životopisu označavamo:',
    opts: ['ZEROJ razinama (A1-C2)', 'zvjezdicama', 'postotcima', 'opisno „super”'],
    answer: 'ZEROJ razinama (A1-C2)',
    en: 'CEFR levels in a CV',
    tip: 'Hrvatski naziv: ZEROJ (ZEROJ/CEFR A1-C2).',
  },
  {
    mode: 'zivotopis',
    q: 'Fotografija u životopisu:',
    opts: ['nije obvezna; ako ide — poslovna', 'obavezna s plaže', 'selfie', 'iz osobne'],
    answer: 'nije obvezna; ako ide — poslovna',
    en: 'photo optional, professional if any',
    tip: 'Standard struke.',
  },
  {
    mode: 'zivotopis',
    q: '„Vozačka dozvola ____ kategorije” (B)',
    opts: ['B', 'B-ove', 'be', 'bé'],
    answer: 'B',
    en: 'category B driving licence',
    tip: 'Vozačka dozvola B kategorije.',
  },
  {
    mode: 'zivotopis',
    q: 'Motivacijsko pismo prema životopisu:',
    opts: [
      'objašnjava zašto baš vi — CV nabraja činjenice',
      'ponavlja CV doslovno',
      'duže je od 5 stranica',
      'nepotrebno je uvijek',
    ],
    answer: 'objašnjava zašto baš vi — CV nabraja činjenice',
    en: 'cover letter argues, CV lists',
    tip: 'Dva dokumenta, dvije uloge.',
  },
  {
    mode: 'zivotopis',
    q: 'Podatci za kontakt u životopisu:',
    opts: [
      'e-adresa i telefon, uredno na vrhu',
      'samo kućna adresa',
      'ništa',
      'društvene mreže sve',
    ],
    answer: 'e-adresa i telefon, uredno na vrhu',
    en: 'contact details on top',
    tip: 'Provjerite da je e-adresa ozbiljna.',
  },
];

export { DATA as DOPISI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DopisiDrill({ goBack, award }: Props) {
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
          key: 'dopisi',
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
        {H('📄 Službeni dopisi', 'molba, žalba, životopis — paperwork that opens doors', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — dopisi su vaši! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje službenim dopisima! 💪'
                : 'Službeni dopisi traže još vježbe.'}
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
      {H('📄 Službeni dopisi', 'molba, žalba, životopis — paperwork that opens doors', goBack)}
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
