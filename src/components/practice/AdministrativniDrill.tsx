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

// C2 administrative-register drill (C2 tranche 2, 2026-08-15): decoding
// bureaucratic paraphrase verbs (izvršiti uplatu), producing correct official
// phrasing (sukladno + D), and the distinctions that carry legal weight
// (odbaciti vs odbiti, dostava, po službenoj dužnosti).
const MODE_LABEL: Record<string, string> = {
  prevedi: '🔎 Prevedi na običan jezik',
  sroci: '✍️ Službena formulacija',
  dekod: '🧩 Što to znači?',
};

const DATA = [
  {
    mode: 'prevedi',
    q: '„Izvršiti uplatu” jednostavnije znači:',
    opts: ['platiti', 'naplatiti', 'isplatiti se', 'uplaćivati se'],
    answer: 'platiti',
    en: 'to make a payment = to pay',
    tip: 'Birokratski parafrazni glagol: izvršiti uplatu = platiti.',
  },
  {
    mode: 'prevedi',
    q: '„Izvršiti uvid u spis” znači:',
    opts: ['pregledati spis', 'potpisati spis', 'uništiti spis', 'fotokopirati spis'],
    answer: 'pregledati spis',
    en: 'to inspect the file',
    tip: 'Izvršiti uvid = pregledati, pogledati.',
  },
  {
    mode: 'prevedi',
    q: '„Staviti izvan snage” znači:',
    opts: ['ukinuti', 'pojačati', 'odgoditi', 'objaviti'],
    answer: 'ukinuti',
    en: 'to repeal (put out of force)',
    tip: 'Staviti izvan snage = ukinuti propis.',
  },
  {
    mode: 'prevedi',
    q: '„Dati suglasnost” znači:',
    opts: ['pristati', 'potpisati se', 'savjetovati', 'suosjećati'],
    answer: 'pristati',
    en: 'to give consent = to agree',
    tip: 'Dati suglasnost = pristati, odobriti.',
  },
  {
    mode: 'prevedi',
    q: '„U najkraćem mogućem roku” znači:',
    opts: ['što prije', 'u roku od dana', 'vrlo kratko', 'odmah sutra'],
    answer: 'što prije',
    en: 'as soon as possible',
    tip: 'Birokratska fraza za: što prije.',
  },
  {
    mode: 'prevedi',
    q: '„Izvršiti povrat sredstava” znači:',
    opts: ['vratiti novac', 'povući sredstva', 'preusmjeriti novac', 'naplatiti dug'],
    answer: 'vratiti novac',
    en: 'to refund the money',
    tip: 'Povrat sredstava = vraćanje novca.',
  },
  {
    mode: 'prevedi',
    q: '„Pristupiti glasovanju” znači:',
    opts: ['početi glasovati', 'doći na birališta', 'prijaviti se za glas', 'odgoditi glasovanje'],
    answer: 'početi glasovati',
    en: 'to proceed to a vote',
    tip: 'Pristupiti čemu = početi s čim (formalno).',
  },
  {
    mode: 'prevedi',
    q: '„Obustaviti postupak” znači:',
    opts: ['prekinuti postupak', 'ubrzati postupak', 'ponoviti postupak', 'platiti postupak'],
    answer: 'prekinuti postupak',
    en: 'to suspend the proceedings',
    tip: 'Obustaviti = zaustaviti, prekinuti.',
  },
  {
    mode: 'sroci',
    q: 'Zahtjev se podnosi ____ obrascu.',
    opts: ['na propisanom', 'u propisani', 'po propisanu', 'za propisani'],
    answer: 'na propisanom',
    en: 'the request is filed on the prescribed form',
    tip: 'Na + lokativ: na propisanom obrascu.',
  },
  {
    mode: 'sroci',
    q: 'Žalba ____ roku od 15 dana.',
    opts: ['se podnosi u', 'podnosi u', 'se podnese na', 'podnosi se za'],
    answer: 'se podnosi u',
    en: 'the appeal is filed within 15 days',
    tip: 'Podnosi se u roku od + G.',
  },
  {
    mode: 'sroci',
    q: 'Rješenje stupa na snagu danom ____.',
    opts: ['donošenja', 'donošenje', 'donošenju', 'donesenosti'],
    answer: 'donošenja',
    en: 'the decision takes effect on the day of adoption',
    tip: 'Danom + genitiv glagolske imenice.',
  },
  {
    mode: 'sroci',
    q: '____ članku 5. Zakona, naknada se ne plaća.',
    opts: ['Sukladno', 'Suglasno na', 'Prema na', 'Sukladno s'],
    answer: 'Sukladno',
    en: 'pursuant to Article 5 of the Act',
    tip: 'Sukladno + DATIV: sukladno članku.',
  },
  {
    mode: 'sroci',
    q: 'Prilaže se preslika ____.',
    opts: ['osobne iskaznice', 'osobnu iskaznicu', 'od osobne iskaznice', 'osobnoj iskaznici'],
    answer: 'osobne iskaznice',
    en: 'a copy of the identity card is attached',
    tip: 'Preslika + genitiv.',
  },
  {
    mode: 'sroci',
    q: 'Molba se ____ tajništvu fakulteta.',
    opts: ['upućuje', 'šalje na', 'piše za', 'izručuje'],
    answer: 'upućuje',
    en: 'the application is addressed to the faculty secretariat',
    tip: 'Uputiti/upućivati + dativ — formalni glagol slanja.',
  },
  {
    mode: 'sroci',
    q: 'Natječaj je otvoren ____ popune radnog mjesta.',
    opts: ['do', 'za', 'radi', 'od'],
    answer: 'do',
    en: 'the vacancy is open until the position is filled',
    tip: 'Do + G: do popune.',
  },
  {
    mode: 'sroci',
    q: 'Troškove postupka ____ podnositelj zahtjeva.',
    opts: ['snosi', 'nosi', 'trpi', 'ima'],
    answer: 'snosi',
    en: 'the applicant bears the costs of the proceedings',
    tip: 'Snositi troškove — pravna kolokacija.',
  },
  {
    mode: 'dekod',
    q: '„Nalaže se uklanjanje predmetnog objekta.” — objekt se mora:',
    opts: ['ukloniti', 'preurediti', 'ograditi', 'prijaviti'],
    answer: 'ukloniti',
    en: 'the structure must be removed',
    tip: 'Naložiti = narediti; predmetni = ovaj o kojem je riječ.',
  },
  {
    mode: 'dekod',
    q: '„Postupak je obustavljen zbog nenadležnosti.” — tijelo:',
    opts: [
      'nije bilo ovlašteno odlučivati',
      'nije imalo vremena',
      'odbilo je zahtjev kao neosnovan',
      'izgubilo je spis',
    ],
    answer: 'nije bilo ovlašteno odlučivati',
    en: 'the body had no jurisdiction',
    tip: 'Nenadležnost = izvan ovlasti toga tijela.',
  },
  {
    mode: 'dekod',
    q: '„Uvjerenje se izdaje u svrhu ostvarivanja prava.” — služi za:',
    opts: ['ostvarivanje prava', 'plaćanje pristojbe', 'evidenciju kazni', 'produljenje roka'],
    answer: 'ostvarivanje prava',
    en: 'the certificate serves to exercise a right',
    tip: 'U svrhu + G = radi.',
  },
  {
    mode: 'dekod',
    q: '„Protiv ovog rješenja žalba nije dopuštena.” — znači:',
    opts: [
      'odluka je konačna u postupku',
      'žalba se dodatno plaća',
      'žalba ide izravno sudu',
      'rješenje je privremeno',
    ],
    answer: 'odluka je konačna u postupku',
    en: 'no appeal lies against this decision',
    tip: 'Nedopuštena žalba = upravna odluka je konačna.',
  },
  {
    mode: 'dekod',
    q: '„Podnositelj se poziva da uredi podnesak.” — mora:',
    opts: [
      'ispraviti i dopuniti zahtjev',
      'osobno doći u ured',
      'platiti pristojbu',
      'povući zahtjev',
    ],
    answer: 'ispraviti i dopuniti zahtjev',
    en: 'the applicant is invited to put the submission in order',
    tip: 'Urediti podnesak = otkloniti formalne nedostatke.',
  },
  {
    mode: 'dekod',
    q: '„Zahtjev se ODBACUJE” (ne „odbija”) — znači:',
    opts: [
      'nije ni razmatran zbog formalnog nedostatka',
      'razmotren je i ocijenjen neosnovanim',
      'vraća se na doradu',
      'prosljeđuje se drugom tijelu',
    ],
    answer: 'nije ni razmatran zbog formalnog nedostatka',
    en: 'the request is dismissed (not examined on the merits)',
    tip: 'ODBACITI = ne ući u meritum; ODBITI = razmotriti pa reći ne.',
  },
  {
    mode: 'dekod',
    q: '„Rok teče od dana dostave.” — rok počinje:',
    opts: [
      'kad primite pismeno',
      'kad je odluka donesena',
      'prvog dana u mjesecu',
      'kad se žalite',
    ],
    answer: 'kad primite pismeno',
    en: 'the deadline runs from the day of service',
    tip: 'Dostava = uručenje pismena stranci.',
  },
  {
    mode: 'dekod',
    q: '„Izdaje se po službenoj dužnosti.” — znači:',
    opts: [
      'bez zahtjeva stranke',
      'uz plaćanje pristojbe',
      'samo službenim osobama',
      'na zahtjev suda',
    ],
    answer: 'bez zahtjeva stranke',
    en: 'issued ex officio',
    tip: 'Po službenoj dužnosti (ex offo) = tijelo postupa samo.',
  },
];

export { DATA as ADMINISTRATIVNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AdministrativniDrill({ goBack, award }: Props) {
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
          key: 'administrativni',
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
          '🏛️ Administrativni jezik',
          'odbaciti nije odbiti — surviving official Croatian',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — nijedan vas dopis ne može zbuniti! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro snalaženje u upravnom stilu! 💪'
                : 'Upravni stil traži još vježbe.'}
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
      {H('🏛️ Administrativni jezik', 'odbaciti nije odbiti — surviving official Croatian', goBack)}
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
