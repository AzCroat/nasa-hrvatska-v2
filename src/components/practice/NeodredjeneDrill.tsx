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

// B2 indefinite-pronouns drill (B2 tranche 2, 2026-08-15): the ne-/ni-/i-/
// sva- series (netko/nitko/itko/svatko), the preposition SPLITTING of
// ni-forms (ni s kim, ni o čemu), god-forms, and negative concord.
const MODE_LABEL: Record<string, string> = {
  oblici: '🎯 Pravi oblik',
  razdvajanje: '✂️ Razdvajanje s prijedlogom',
  god: '🌀 God-oblici i niječni sklad',
};

const DATA = [
  {
    mode: 'oblici',
    q: '____ te tražio jutros — mislim da je bio poštar.',
    opts: ['Netko', 'Nitko', 'Itko', 'Svatko'],
    answer: 'Netko',
    en: 'someone was looking for you this morning',
    tip: 'Potvrdna rečenica → ne-oblik: netko.',
  },
  {
    mode: 'oblici',
    q: 'Na moje pitanje nije odgovorio ____.',
    opts: ['nitko', 'netko', 'itko', 'svatko'],
    answer: 'nitko',
    en: 'nobody answered my question',
    tip: 'Uz niječni glagol dolazi ni-oblik: nitko nije odgovorio.',
  },
  {
    mode: 'oblici',
    q: 'Sumnjam da ____ to može riješiti sam.',
    opts: ['itko', 'netko', 'nitko', 'svatko'],
    answer: 'itko',
    en: 'I doubt that anyone can solve that alone',
    tip: 'Iza sumnje, pitanja i pogodbe dolazi i-oblik: itko = itko uopće.',
  },
  {
    mode: 'oblici',
    q: '____ od nas ima svoje razloge.',
    opts: ['Svatko', 'Svako', 'Netko', 'Itko'],
    answer: 'Svatko',
    en: 'each of us has our own reasons',
    tip: 'SVATKO samostalno (za osobe); svako uz imenicu (svako dijete).',
  },
  {
    mode: 'oblici',
    q: 'Uzmi ____ za čitanje na put.',
    opts: ['nešto', 'išta', 'ništa', 'svašta'],
    answer: 'nešto',
    en: 'take something to read for the trip',
    tip: 'Potvrdni poticaj → nešto; išta tek uz sumnju/negaciju.',
  },
  {
    mode: 'oblici',
    q: 'Nakon poplave u podrumu nije ostalo ____.',
    opts: ['ništa', 'nešto', 'išta', 'svašta'],
    answer: 'ništa',
    en: 'after the flood nothing was left in the basement',
    tip: 'Niječni glagol traži ni-oblik: nije ostalo ništa.',
  },
  {
    mode: 'oblici',
    q: 'Bez ____ pomoći nećemo uspjeti.',
    opts: ['ičije', 'nečije', 'ničije', 'svačije'],
    answer: 'ičije',
    en: 'without anyone’s help we will not succeed',
    tip: 'Iza prijedloga „bez” dolazi i-oblik: bez ičije pomoći.',
  },
  {
    mode: 'oblici',
    q: 'Na sajmu se moglo kupiti ____ — od meda do namještaja.',
    opts: ['svašta', 'sve što', 'išta', 'nešto'],
    answer: 'svašta',
    en: 'you could buy all sorts of things at the fair',
    tip: 'Svašta = svakojake stvari (sva-serija).',
  },
  {
    mode: 'razdvajanje',
    q: 'Ne želim razgovarati ni ____.',
    opts: ['s kim', 's nikim', 'sa nikime', 'kim'],
    answer: 's kim',
    en: 'I do not want to talk with anyone',
    tip: 'Prijedlog RAZDVAJA ni-: ni s kim (nikad „s nikim”).',
  },
  {
    mode: 'razdvajanje',
    q: 'Cijelu večer nisam mislio ni ____.',
    opts: ['o čemu', 'o ničemu', 'čemu', 'na ništa'],
    answer: 'o čemu',
    en: 'all evening I was not thinking about anything',
    tip: 'Ni + o + čemu: ni o čemu.',
  },
  {
    mode: 'razdvajanje',
    q: 'Konačna odluka ne ovisi ni ____.',
    opts: ['o kome', 'o nikome', 'kome', 'od nikoga'],
    answer: 'o kome',
    en: 'the final decision does not depend on anyone',
    tip: 'Ni o kome — prijedlog ulazi između ni i zamjenice.',
  },
  {
    mode: 'razdvajanje',
    q: 'Nismo se javili ____.',
    opts: ['nikomu', 'ni komu', 'ikomu', 'nekomu'],
    answer: 'nikomu',
    en: 'we did not get in touch with anyone',
    tip: 'BEZ prijedloga nema razdvajanja: nikomu (dativ).',
  },
  {
    mode: 'razdvajanje',
    q: 'Ni ____ ne bih mijenjao ovaj stan.',
    opts: ['za što', 'za ništa', 'što', 'za ničim'],
    answer: 'za što',
    en: 'I would not trade this flat for anything',
    tip: 'Ni za što — razdvojeni oblik uz prijedlog za.',
  },
  {
    mode: 'razdvajanje',
    q: 'Ni ____ slučaju nemoj otvarati ta vrata.',
    opts: ['u kojem', 'u nikojem', 'kojem', 'po kojem'],
    answer: 'u kojem',
    en: 'do not open that door under any circumstances',
    tip: 'Ni u kojem slučaju — ustaljena razdvojena sveza.',
  },
  {
    mode: 'razdvajanje',
    q: 'Nemamo se ____ požaliti.',
    opts: ['komu', 'nikomu', 'ikomu', 's kim'],
    answer: 'komu',
    en: 'we have no one to complain to',
    tip: 'Uz „nemati + infinitiv” dolazi goli upitni oblik: nemamo komu.',
  },
  {
    mode: 'razdvajanje',
    q: 'Smiri se — nema se ____ bojati.',
    opts: ['čega', 'ničega', 'išta', 'što'],
    answer: 'čega',
    en: 'calm down — there is nothing to be afraid of',
    tip: 'Nema se čega bojati — isti obrazac golog upitnog oblika.',
  },
  {
    mode: 'god',
    q: '____ god nazvao, javi se ljubazno.',
    opts: ['Tko', 'Koji', 'Što', 'Čiji'],
    answer: 'Tko',
    en: 'whoever calls, answer politely',
    tip: 'Tko god = bilo tko; god se piše odvojeno.',
  },
  {
    mode: 'god',
    q: 'Uzmi ____ god želiš s police.',
    opts: ['što', 'koje', 'tko', 'čega'],
    answer: 'što',
    en: 'take whatever you want from the shelf',
    tip: 'Što god = bilo što.',
  },
  {
    mode: 'god',
    q: '____ god pitao, nitko ne zna odgovor.',
    opts: ['Koga', 'Tko', 'Kome', 'Čega'],
    answer: 'Koga',
    en: 'whomever I ask, nobody knows the answer',
    tip: 'Pitati KOGA (akuzativ): koga god pitao.',
  },
  {
    mode: 'god',
    q: 'Nikad ____ nikome ništa obećao.',
    opts: ['nisam', 'sam', 'jesam', 'bih'],
    answer: 'nisam',
    en: 'I have never promised anyone anything',
    tip: 'Niječni sklad: hrvatski GOMILA niječnice (nikad-nisam-nikome-ništa).',
  },
  {
    mode: 'god',
    q: 'Dvostruka (višestruka) negacija u hrvatskome je:',
    opts: ['obvezna', 'pogrešna', 'strani utjecaj', 'moguća samo u pjesništvu'],
    answer: 'obvezna',
    en: 'multiple negation is obligatory in Croatian',
    tip: 'Nitko NIJE došao — ni-oblik zahtijeva niječni glagol.',
  },
  {
    mode: 'god',
    q: 'Bilo ____ da nazoveš, bit ću tu.',
    opts: ['kad', 'kada god', 'kad bilo', 'god kad'],
    answer: 'kad',
    en: 'whenever you call, I will be there',
    tip: 'Bilo kad, bilo gdje, bilo tko — serija s „bilo”.',
  },
  {
    mode: 'god',
    q: 'Sjedni bilo ____ — ima mjesta.',
    opts: ['gdje', 'kamo', 'kuda', 'čime'],
    answer: 'gdje',
    en: 'sit anywhere — there is room',
    tip: 'Mjesto (ne smjer) → gdje: bilo gdje.',
  },
  {
    mode: 'god',
    q: 'On je ____ drugo nego lijen — radi po cijele dane.',
    opts: ['sve', 'svašta', 'išta', 'nešto'],
    answer: 'sve',
    en: 'he is anything but lazy — he works all day',
    tip: 'Sve drugo nego… = ustaljeni obrazac isključivanja.',
  },
];

export { DATA as NEODREDJENE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NeodredjeneDrill({ goBack, award }: Props) {
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
          key: 'neodredjene',
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
        {H('❓ Neodređene zamjenice', 'ni s kim, ni o čemu — the split negatives', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — ni-oblici vam se više ne opiru! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro vladanje zamjenicama! 💪'
                : 'Neodređene zamjenice traže još vježbe.'}
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
      {H('❓ Neodređene zamjenice', 'ni s kim, ni o čemu — the split negatives', goBack)}
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
