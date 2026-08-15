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

// C2 calques drill (C2 tranche 8, 2026-08-15): verb calques (adresirati
// problem, praviti smisao, uzeti mjesto), phrase calques (najbolji ikad,
// na kraju dana, biti u mogucnosti) and loan replacement (deadline → rok,
// feedback → povratna informacija).
const MODE_LABEL: Record<string, string> = {
  glagoli: '🏃 Glagolski kalkovi',
  izrazi: '🧱 Izrazi',
  prepoznaj: '🔍 Prepoznavanje',
};

const DATA = [
  {
    mode: 'glagoli',
    q: 'Umjesto kalka „adresirati problem” standard kaže:',
    opts: [
      'pozabaviti se problemom',
      'adresirati pismo problemu',
      'osloviti problem',
      'problemirati',
    ],
    answer: 'pozabaviti se problemom',
    en: 'to address a problem — the calque fix',
    tip: 'Adresirati je za pošiljke; problemom se bavimo.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „to pravi smisao” standard kaže:',
    opts: ['to ima smisla', 'to čini smisao', 'to izrađuje smisao', 'smisleno pravi'],
    answer: 'to ima smisla',
    en: 'that makes sense → ima smisla',
    tip: 'Make sense ≠ praviti smisao.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „napraviti razliku” (biti važan) standard kaže:',
    opts: [
      'promijeniti stvari nabolje / biti presudan',
      'izraditi razliku',
      'učiniti razliku svima',
      'razlikovati se',
    ],
    answer: 'promijeniti stvari nabolje / biti presudan',
    en: 'to make a difference',
    tip: 'Napraviti razliku = doslovno razlikovati dvije stvari.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „uzeti mjesto” (dogoditi se) standard kaže:',
    opts: ['održati se / dogoditi se', 'zauzeti mjesto sjedeći', 'uzeti prostor', 'mjestiti se'],
    answer: 'održati se / dogoditi se',
    en: 'to take place → održati se',
    tip: 'Konferencija se održava, ne uzima mjesto.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „trčati kampanju” standard kaže:',
    opts: ['voditi kampanju', 'trčati izbore', 'juriti kampanju', 'hodati kampanju'],
    answer: 'voditi kampanju',
    en: 'to run a campaign → voditi',
    tip: 'Run ≠ trčati u prenesenu značenju.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „imati poentu” standard kaže:',
    opts: [
      'imati pravo / biti u pravu',
      'posjedovati poentu',
      'nositi poentu',
      'poentirati stalno',
    ],
    answer: 'imati pravo / biti u pravu',
    en: 'to have a point',
    tip: 'Imaš pravo — ne imaš poentu.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „aplicirati za posao” standard kaže:',
    opts: [
      'prijaviti se za posao',
      'aplicirati posao',
      'nanijeti se na posao',
      'poslati aplikaciju kožnu',
    ],
    answer: 'prijaviti se za posao',
    en: 'to apply for a job → prijaviti se',
    tip: 'Aplicirati je nanositi (boju, kremu); za posao se prijavljujemo.',
  },
  {
    mode: 'glagoli',
    q: 'Umjesto „fokusirati se na” u biranom stilu:',
    opts: ['usredotočiti se na', 'fokus staviti', 'žarištiti se', 'centrirati se'],
    answer: 'usredotočiti se na',
    en: 'to focus on → usredotočiti se',
    tip: 'Domaći glagol pokriva isto.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „najbolji ikad” standard kaže:',
    opts: [
      'najbolji dosad / svih vremena',
      'najbolji ikada više',
      'ikad najbolji',
      'najbolji od ikad',
    ],
    answer: 'najbolji dosad / svih vremena',
    en: 'best ever → najbolji dosad',
    tip: 'Ikad je upitno-odnosni prilog, ne pojačivač.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „na kraju dana” (zaključno) standard kaže:',
    opts: ['na koncu / u konačnici', 'kad padne mrak', 'na kraju radnog dana', 'dok dan traje'],
    answer: 'na koncu / u konačnici',
    en: 'at the end of the day → na koncu',
    tip: 'Kalk iz engleske retorike.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „u roku od odmah” razgovorno-kalkiranog „ASAP”:',
    opts: ['što prije / čim prije', 'asapno', 'u asapu', 'brzo-brzo službeno'],
    answer: 'što prije / čim prije',
    en: 'ASAP → sto prije',
    tip: 'Molim odgovor što prije.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „biti u mogućnosti” jednostavnije je:',
    opts: ['moći', 'imati mogućnost moći', 'biti sposoban za moći', 'mogućiti'],
    answer: 'moći',
    en: 'to be in a position to → moci',
    tip: 'Birokratska perifraza → običan glagol.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „vršiti pritisak” jednostavnije je:',
    opts: ['pritiskati', 'pritisak vršiti jače', 'izvršavati tlak', 'tlačiti papire'],
    answer: 'pritiskati',
    en: 'to exert pressure → pritiskati',
    tip: 'Vršiti + imenica često skriva običan glagol.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „dati podršku” jednostavnije je:',
    opts: ['poduprijeti / podržati', 'darovati podršku', 'dati potporni stup', 'podrškovati'],
    answer: 'poduprijeti / podržati',
    en: 'to give support → podrzati',
    tip: 'Analitička perifraza → jedan glagol.',
  },
  {
    mode: 'izrazi',
    q: '„Imati na umu” prema kalku „držati u umu”:',
    opts: [
      'imati na umu je standard',
      'držati u umu je standard',
      'oba jednako',
      'nijedno ne postoji',
    ],
    answer: 'imati na umu je standard',
    en: 'keep in mind → imati na umu',
    tip: 'Domaći frazem već postoji — kalk je suvišan.',
  },
  {
    mode: 'izrazi',
    q: 'Umjesto „praviti novac” standard kaže:',
    opts: ['zarađivati', 'kovati novac doslovno', 'izrađivati novčanice', 'novčiti'],
    answer: 'zarađivati',
    en: 'to make money → zaradjivati',
    tip: 'Novac se zarađuje (kuje ga kovnica).',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je prilog kalkiran iz engleskoga?',
    opts: [
      'definitivno ću doći (svakako)',
      'svakako ću doći',
      'sigurno ću doći',
      'doći ću bez sumnje',
    ],
    answer: 'definitivno ću doći (svakako)',
    en: 'definitely — the anglicism',
    tip: 'Definitivno = konačno; za sigurnost: svakako.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je frazem doslovno preveden?',
    opts: [
      'to nije moja šalica čaja',
      'to nije za mene',
      'to me ne privlači',
      'nisam ljubitelj toga',
    ],
    answer: 'to nije moja šalica čaja',
    en: 'not my cup of tea — calque',
    tip: 'Doslovni prijevod engleskoga frazema.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji izraz kalkira „second thoughts”?',
    opts: [
      'imati druge misli (predomišljanje)',
      'predomisliti se',
      'razmisliti ponovno',
      'dvojiti',
    ],
    answer: 'imati druge misli (predomišljanje)',
    en: 'to have second thoughts — calque',
    tip: 'Standard: predomisliti se, dvojiti.',
  },
  {
    mode: 'prepoznaj',
    q: 'Koji je izraz kalk za tremu?',
    opts: ['leptirići u trbuhu', 'trema', 'uzbuđenje', 'žmarci'],
    answer: 'leptirići u trbuhu',
    en: 'butterflies in the stomach — calque',
    tip: 'Doslovan prijevod; domaće: trema, žmarci.',
  },
  {
    mode: 'prepoznaj',
    q: '„Selfie, lajkati, šerati” u standardu:',
    opts: [
      'prilagođuju se ili zamjenjuju (podijeliti)',
      'zabranjeni su',
      'pišu se izvorno u kurzivu uvijek',
      'nemaju zamjene',
    ],
    answer: 'prilagođuju se ili zamjenjuju (podijeliti)',
    en: 'adapting social-media loans',
    tip: 'Šerati → podijeliti; lajkati → sviđati se/označiti sviđanje.',
  },
  {
    mode: 'prepoznaj',
    q: '„Event” u poslovnom žargonu standard zamjenjuje:',
    opts: ['događanje / priredba', 'ivent malim slovom', 'evenat', 'skup jedino'],
    answer: 'događanje / priredba',
    en: 'event → dogadjanje',
    tip: 'Poslovni anglizmi imaju domaće parnjake.',
  },
  {
    mode: 'prepoznaj',
    q: '„Deadline” standard zamjenjuje:',
    opts: ['rok', 'mrtva linija', 'crta smrti', 'kraj vremena'],
    answer: 'rok',
    en: 'deadline → rok',
    tip: 'Do roka, prije roka, probiti rok.',
  },
  {
    mode: 'prepoznaj',
    q: '„Feedback” standard zamjenjuje:',
    opts: ['povratna informacija', 'hranjenje natrag', 'odjek zvuka', 'odgovor jedino'],
    answer: 'povratna informacija',
    en: 'feedback → povratna informacija',
    tip: 'Dati povratnu informaciju.',
  },
];

export { DATA as KALKOVI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KalkoviDrill({ goBack, award }: Props) {
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
          key: 'kalkovi',
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
          '🧬 Kalkovi i anglizmi',
          'adresirati problem, praviti smisao — spotting borrowed thinking',
          goBack,
        )}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — kalkovi vas ne varaju! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro prepoznavanje kalkova! 💪'
                : 'Kalkovi i anglizmi traže još vježbe.'}
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
        '🧬 Kalkovi i anglizmi',
        'adresirati problem, praviti smisao — spotting borrowed thinking',
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
