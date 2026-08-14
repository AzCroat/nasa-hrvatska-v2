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

// C2 precision drill — formal-register collocations, fixed preposition/case
// government, and near-synonym (prefix) discrimination: the "sounds like a
// native wrote it" layer. Distinct from the B1 CollocationsGame (everyday
// pairs like postaviti pitanje / položiti ispit); every item here is register
// or government territory the B1 game does not touch. Prompts are in Croatian
// — at C2 the metalanguage itself is part of the curriculum.
const MODE_LABEL: Record<string, string> = {
  glagolske: '🔗 Glagolske sveze',
  prijedlozi: '📍 Prijedlozi i padeži',
  nijanse: '🎯 Precizan izbor',
};

const DATA = [
  // ── Glagolske sveze (formal verb+noun collocations) ──
  {
    mode: 'glagolske',
    q: '„Sud je ____ zahtjev kao neosnovan.”',
    opts: ['odbacio', 'izbacio', 'prebacio', 'zabacio'],
    answer: 'odbacio',
    en: 'The court dismissed the claim as unfounded.',
    tip: 'Odbaciti zahtjev/tužbu/optužbe — pravni registar. Izbaciti = physically throw out.',
  },
  {
    mode: 'glagolske',
    q: '„Ministar je jučer ____ ostavku.”',
    opts: ['podnio', 'donio', 'postavio', 'učinio'],
    answer: 'podnio',
    en: 'The minister tendered his resignation yesterday.',
    tip: 'Podnijeti ostavku/zahtjev/izvještaj — službeni registar.',
  },
  {
    mode: 'glagolske',
    q: '„Iz ovoga događaja svi bismo trebali ____ pouku.”',
    opts: ['izvući', 'izvaditi', 'uzeti', 'dobiti'],
    answer: 'izvući',
    en: 'We should all draw a lesson from this event.',
    tip: 'Izvući pouku/zaključak/korist. Izvaditi je doslovno (izvaditi novčanik).',
  },
  {
    mode: 'glagolske',
    q: '„Tko će ____ posljedice za ovu pogrešku?”',
    opts: ['snositi', 'nositi', 'trpjeti', 'imati'],
    answer: 'snositi',
    en: 'Who will bear the consequences of this mistake?',
    tip: 'Snositi posljedice/odgovornost/troškove — bez prefiksa s- sveza gubi pravno-formalni ton.',
  },
  {
    mode: 'glagolske',
    q: '„Sudac je ____ presudu u korist tužitelja.”',
    opts: ['izrekao', 'rekao', 'izgovorio', 'iznio'],
    answer: 'izrekao',
    en: 'The judge pronounced a verdict in favour of the plaintiff.',
    tip: 'Izreći presudu/kaznu/opomenu. Izgovoriti se odnosi na artikulaciju riječi.',
  },
  {
    mode: 'glagolske',
    q: '„Nezadovoljni stanari ____ su žalbu na odluku.”',
    opts: ['uložili', 'stavili', 'poslali', 'učinili'],
    answer: 'uložili',
    en: 'The dissatisfied tenants lodged an appeal against the decision.',
    tip: 'Uložiti žalbu/prigovor/napor/novac — službena sveza.',
  },
  {
    mode: 'glagolske',
    q: '„Njegov je govor ____ pozornost cijele javnosti.”',
    opts: ['privukao', 'povukao', 'dovukao', 'navukao'],
    answer: 'privukao',
    en: 'His speech attracted the attention of the entire public.',
    tip: 'Privući pozornost/pažnju/ulagače. Prefiksi mijenjaju smjer: povući potez, navući zavjese.',
  },
  {
    mode: 'glagolske',
    q: '„Pri planiranju moraš ____ računa o rokovima.”',
    opts: ['voditi', 'imati', 'držati', 'uzimati'],
    answer: 'voditi',
    en: 'When planning, you must take the deadlines into account.',
    tip: 'Voditi računa o čemu — ustaljena sveza; „uzeti u obzir” je bliskoznačna alternativa.',
  },
  // ── Prijedlozi i padeži (fixed government) ──
  {
    mode: 'prijedlozi',
    q: '„S obzirom ____ okolnosti, put smo odgodili.”',
    opts: ['na', 'prema', 'o', 'za'],
    answer: 'na',
    en: 'Considering the circumstances, we postponed the trip.',
    tip: 'S obzirom NA + akuzativ. Oblik bez „s” („obzirom na”) ne pripada standardu.',
  },
  {
    mode: 'prijedlozi',
    q: '„U skladu ____ zakonom, ugovor je raskinut.”',
    opts: ['sa', 's', 'po', 'na'],
    answer: 'sa',
    en: 'In accordance with the law, the contract was terminated.',
    tip: 'U skladu s/sa + instrumental — ovdje „sa” jer sljedeća riječ počinje sa z- (sa zakonom).',
  },
  {
    mode: 'prijedlozi',
    q: '„Kad je riječ ____ financijama, oprez je nužan.”',
    opts: ['o', 'za', 'na', 'u'],
    answer: 'o',
    en: 'When it comes to finances, caution is essential.',
    tip: 'Riječ je O čemu + lokativ. „Za” je čest razgovorni otklon od standarda.',
  },
  {
    mode: 'prijedlozi',
    q: '„Unatoč ____ utakmica se ipak igrala.”',
    opts: ['kiši', 'kiše', 'kišom', 'kišu'],
    answer: 'kiši',
    en: 'Despite the rain, the match was played anyway.',
    tip: 'Unatoč/usprkos + DATIV (unatoč kiši), ne genitiv — česta pogreška i kod izvornih govornika.',
  },
  {
    mode: 'prijedlozi',
    q: '„Hvala vam ____ strpljenju i razumijevanju.”',
    opts: ['na', 'za', 'o', 'od'],
    answer: 'na',
    en: 'Thank you for your patience and understanding.',
    tip: 'Hvala/zahvaliti NA + lokativ (hvala na pomoći). „Hvala za” je otklon od standarda.',
  },
  {
    mode: 'prijedlozi',
    q: '„Svi se radujemo ____ .”',
    opts: ['vašem dolasku', 'vaš dolazak', 'vašega dolaska', 's vašim dolaskom'],
    answer: 'vašem dolasku',
    en: 'We are all looking forward to your arrival.',
    tip: 'Radovati se + DATIV (radujemo se dolasku), bez prijedloga.',
  },
  {
    mode: 'prijedlozi',
    q: '„On se odlično razumije ____ vina.”',
    opts: ['u', 'o', 'na', 'za'],
    answer: 'u',
    en: 'He knows a great deal about wines.',
    tip: 'Razumjeti se U što + akuzativ (razumjeti se u glazbu, u politiku).',
  },
  {
    mode: 'prijedlozi',
    q: '„Sve ovisi ____ vremenu.”',
    opts: ['o', 'od', 'na', 'iz'],
    answer: 'o',
    en: 'Everything depends on the weather.',
    tip: 'Ovisiti O čemu + lokativ. „Zavisiti od” nije hrvatski standard.',
  },
  // ── Precizan izbor (near-synonym / prefix discrimination) ──
  {
    mode: 'nijanse',
    q: '„Cijene su znatno ____ u odnosu na prošlu godinu.”',
    opts: ['porasle', 'narasle', 'uzrasle', 'izrasle'],
    answer: 'porasle',
    en: 'Prices have risen considerably compared to last year.',
    tip: 'Cijene/troškovi/kamate porastu; djeca narastu, biljke izrastu.',
  },
  {
    mode: 'nijanse',
    q: '„Novi zakon ____ na snagu prvoga siječnja.”',
    opts: ['stupa', 'ulazi', 'dolazi', 'staje'],
    answer: 'stupa',
    en: 'The new law comes into force on the first of January.',
    tip: 'Stupiti na snagu — pravna formula bez alternativa u standardu.',
  },
  {
    mode: 'nijanse',
    q: '„Ova odluka ____ za sobom ozbiljne posljedice.”',
    opts: ['povlači', 'vuče', 'nosi', 'tegli'],
    answer: 'povlači',
    en: 'This decision entails serious consequences.',
    tip: 'Povlačiti za sobom posljedice — preneseno; vući je doslovno.',
  },
  {
    mode: 'nijanse',
    q: '„Njihovi se stavovi bitno ____ .”',
    opts: ['razlikuju', 'razdvajaju', 'rastavljaju', 'odvajaju'],
    answer: 'razlikuju',
    en: 'Their views differ substantially.',
    tip: 'Stavovi se razlikuju; parovi se rastaju, predmeti se odvajaju.',
  },
  {
    mode: 'nijanse',
    q: '„Predsjednica je ____ dužnost u siječnju.”',
    opts: ['preuzela', 'uzela', 'zauzela', 'poduzela'],
    answer: 'preuzela',
    en: 'The president assumed office in January.',
    tip: 'Preuzeti dužnost/krivnju; poduzeti mjere; zauzeti grad/stav.',
  },
  {
    mode: 'nijanse',
    q: '„Policija je ____ istragu o nesreći.”',
    opts: ['pokrenula', 'potaknula', 'prenula', 'krenula'],
    answer: 'pokrenula',
    en: 'The police launched an investigation into the accident.',
    tip: 'Pokrenuti istragu/postupak/pitanje; potaknuti raspravu (dati poticaj, ne voditi).',
  },
  {
    mode: 'nijanse',
    q: '„Njegova je izjava ____ burne reakcije.”',
    opts: ['izazvala', 'pozvala', 'dozvala', 'sazvala'],
    answer: 'izazvala',
    en: 'His statement provoked heated reactions.',
    tip: 'Izazvati reakciju/bijes/podsmijeh; sazvati sjednicu; pozvati goste.',
  },
  {
    mode: 'nijanse',
    q: '„Rezultati ____ da je metoda učinkovita.”',
    opts: ['pokazuju', 'ukazuju', 'prikazuju', 'iskazuju'],
    answer: 'pokazuju',
    en: 'The results show that the method is effective.',
    tip: 'Pokazati DA + surečenica; ukazivati NA što (ukazuju na problem); prikazati film.',
  },
];

export { DATA as PRECISION_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrecisionDrill({ goBack, award }: Props) {
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
          key: 'preciznost',
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
        {H('🎯 Preciznost izraza', 'snositi posljedice · unatoč kiši — native precision', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Izvorna preciznost — svaka sveza na mjestu! 🏆'
              : score >= total * 0.8
                ? 'Vrlo blizu izvornoga izraza! 💪'
                : 'Ustaljene sveze i rekcija traže još vježbe.'}
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
      {H('🎯 Preciznost izraza', 'snositi posljedice · unatoč kiši — native precision', goBack)}
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
            const isChosen = opt === chosen;
            return (
              <button
                key={opt}
                className="ob"
                onClick={() => pick(opt)}
                style={{
                  textAlign: 'left',
                  ...(answered && isCorrect
                    ? { borderColor: '#16a34a', background: 'rgba(22,163,74,.08)' }
                    : answered && isChosen
                      ? { borderColor: '#dc2626', background: 'rgba(220,38,38,.08)' }
                      : {}),
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
              marginTop: 12,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--info-bg, rgba(56,189,248,.08))',
              fontSize: 13.5,
              lineHeight: 1.55,
            }}
          >
            💡 {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 14 }} onClick={next}>
            {idx + 1 >= total ? 'Završi →' : 'Dalje →'}
          </button>
        )}
      </div>
    </div>
  );
}
