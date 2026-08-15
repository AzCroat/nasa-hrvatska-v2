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

// C2 synonymy & paronymy drill (C2 tranche, 2026-08-15): the near-pairs that
// expose non-native usage — paronyms (susjedni/susjedski), register-marked
// synonyms (rabiti/koristiti), and semantic nuance standard Croatian keeps
// apart. Classic lektor material.
const MODE_LABEL: Record<string, string> = {
  paronimi: '👯 Paronimi',
  registar: '🎩 Biraj po registru',
  nijanse: '🔬 Nijansa značenja',
};

const DATA = [
  {
    mode: 'paronimi',
    q: 'S novim stanarima održavamo dobre ____ odnose.',
    opts: ['susjedske', 'susjedne', 'susjednje', 'susjedovske'],
    answer: 'susjedske',
    en: 'we maintain good neighbourly relations',
    tip: 'Susjedski = svojstven susjedima (odnosi); susjedni = koji je pokraj (susjedna zgrada).',
  },
  {
    mode: 'paronimi',
    q: 'Pomogao nam je jedan ____ gospodin sa štapom.',
    opts: ['vremešan', 'vremenski', 'vremenit', 'povremen'],
    answer: 'vremešan',
    en: 'an elderly gentleman with a cane helped us',
    tip: 'Vremešan = star; vremenski = koji se tiče vremena (vremenska prognoza).',
  },
  {
    mode: 'paronimi',
    q: 'Od neugode se počela ____.',
    opts: ['crvenjeti', 'crveniti', 'crvenati', 'zacrvenjivati'],
    answer: 'crvenjeti',
    en: 'she began to blush with embarrassment',
    tip: 'Crvenjeti (se) = postajati crven; crveniti = činiti što crvenim.',
  },
  {
    mode: 'paronimi',
    q: 'Vlada je ____ novu veleposlanicu u Berlinu.',
    opts: ['imenovala', 'nazvala', 'prozvala', 'oslovila'],
    answer: 'imenovala',
    en: 'the government appointed a new ambassador in Berlin',
    tip: 'Imenovati = postaviti na dužnost; nazvati = dati ime.',
  },
  {
    mode: 'paronimi',
    q: 'Ponuđeno mu je mjesto ministra, ali se uljudno ____.',
    opts: ['zahvalio', 'zahvalio njima', 'ispričao se', 'odbio se'],
    answer: 'zahvalio',
    en: 'he was offered the minister post but politely declined',
    tip: 'Zahvaliti SE = uljudno odbiti; zahvaliti (komu na čemu) = izraziti hvalu.',
  },
  {
    mode: 'paronimi',
    q: 'Ušli su na ____ vrata zgrade.',
    opts: ['stražnja', 'zadnja', 'posljednja', 'krajnja'],
    answer: 'stražnja',
    en: 'they entered through the back door',
    tip: 'Standard: stražnji = koji je straga; posljednji = konačni u nizu.',
  },
  {
    mode: 'paronimi',
    q: 'Nakon požara procjenjuje se ____ šteta.',
    opts: ['materijalna', 'materijska', 'materijalistička', 'građevna'],
    answer: 'materijalna',
    en: 'the material damage is being assessed after the fire',
    tip: 'Materijalan = imovinski/tvaran; materijalistički = svjetonazorski.',
  },
  {
    mode: 'paronimi',
    q: 'Radno je mjesto vrlo ____ za mlade inženjere.',
    opts: ['privlačno', 'privlačivo', 'dovlačno', 'navlačno'],
    answer: 'privlačno',
    en: 'the position is very attractive to young engineers',
    tip: 'Privlačan = koji privlači; ostali likovi ne postoje u standardu.',
  },
  {
    mode: 'registar',
    q: 'U znanstvenom radu: „U analizi smo ____ tri metode.”',
    opts: ['rabili', 'koristili', 'trošili', 'uzimali'],
    answer: 'rabili',
    en: 'in the analysis we used three methods',
    tip: 'Standardni jezik u formalnom stilu preferira rabiti/upotrijebiti.',
  },
  {
    mode: 'registar',
    q: 'Pravni pojam: „Ugovor sklapaju fizička i pravna ____.”',
    opts: ['osoba', 'ličnost', 'figura', 'stranka'],
    answer: 'osoba',
    en: 'contracts are concluded by natural and legal persons',
    tip: 'Pravna/fizička OSOBA — čvrst pravni termin.',
  },
  {
    mode: 'registar',
    q: 'U izvješću je primjerenije: „Prihodi su ____ porasli.”',
    opts: ['znatno', 'puno', 'masu', 'gadno'],
    answer: 'znatno',
    en: 'revenues rose considerably',
    tip: 'Znatno/znatan — neutralno-formalno; puno i masu razgovorni.',
  },
  {
    mode: 'registar',
    q: 'Formalno: „____ rezultati bit će objavljeni sutra.”',
    opts: ['Cjeloviti', 'Cijeli', 'Sve skupa', 'Komplet'],
    answer: 'Cjeloviti',
    en: 'the complete results will be published tomorrow',
    tip: 'Cjelovit = potpun, zaokružen (formalno); cijeli = sav.',
  },
  {
    mode: 'registar',
    q: 'U službenom pozivu: „Molimo vas da ____ dolazak do petka.”',
    opts: ['potvrdite', 'javite', 'šapnete', 'signalizirate'],
    answer: 'potvrdite',
    en: 'please confirm your attendance by Friday',
    tip: 'Potvrditi dolazak — ustaljena formalna formulacija pozivnica.',
  },
  {
    mode: 'registar',
    q: 'Neutralno-standardno za razgovorno „frka”:',
    opts: ['gužva', 'strka', 'jurnjava', 'zbrka-frka'],
    answer: 'gužva',
    en: 'the neutral word for commotion/rush',
    tip: 'Frka je žargon; gužva neutralno pokriva većinu značenja.',
  },
  {
    mode: 'registar',
    q: 'U nekrologu: „Napustio nas je naš dragi kolega” — glagol je:',
    opts: ['eufemizam', 'arhaizam', 'žargonizam', 'neologizam'],
    answer: 'eufemizam',
    en: 'a euphemism — softened expression for dying',
    tip: 'Eufemizam ublažava: napustiti nas = umrijeti.',
  },
  {
    mode: 'registar',
    q: 'Publicistički klišej koji lektori križaju: „____ rečeno, projekt kasni.”',
    opts: ['Najblaže', 'Iskreno da ti kažem', 'Da se razumijemo', 'Ono'],
    answer: 'Najblaže',
    en: 'to put it mildly, the project is late',
    tip: 'Najblaže rečeno — prihvatljiv publicizam; ostalo je razgovorni tik.',
  },
  {
    mode: 'nijanse',
    q: 'Standard daje prednost: „Hvala vam na ____.” (dolazak u posjet)',
    opts: ['posjetu', 'posjeti', 'poseti', 'posjedu'],
    answer: 'posjetu',
    en: 'thank you for the visit',
    tip: 'Standard: POSJET (m. roda) — na posjetu; posjed = imanje.',
  },
  {
    mode: 'nijanse',
    q: '„Inflacija je pala na jednoznamenkastu ____.” (napisan broj)',
    opts: ['brojku', 'broj', 'cifru', 'količinu'],
    answer: 'brojku',
    en: 'inflation fell to a single-digit figure',
    tip: 'Brojka = zapisani znak/iznos; broj = matematički pojam.',
  },
  {
    mode: 'nijanse',
    q: '„____ tjedan počinju praznici.” (onaj koji dolazi)',
    opts: ['Sljedeći', 'Slijedeći', 'Sljedujući', 'Naredni-slijed'],
    answer: 'Sljedeći',
    en: 'the holidays start next week',
    tip: 'Sljedeći = pridjev (idući); slijedeći = glagolski prilog (slijedeći trag…).',
  },
  {
    mode: 'nijanse',
    q: 'Uzročno je standardno: „Ostali smo doma ____ je padala kiša.”',
    opts: ['jer', 'pošto', 'budući', 'kako-tako'],
    answer: 'jer',
    en: 'we stayed home because it was raining',
    tip: 'Jer/budući da = uzrok; pošto je u standardu vremenski (nakon što).',
  },
  {
    mode: 'nijanse',
    q: 'Pogodbeno bez zalihosti: „____ stignete, javite se.”',
    opts: ['Ako', 'Ukoliko', 'U slučaju ako', 'Kad ako'],
    answer: 'Ako',
    en: 'if you arrive, let us know',
    tip: 'Ako je osnovni pogodbeni veznik; ukoliko norma dopušta tek uz „utoliko”.',
  },
  {
    mode: 'nijanse',
    q: '„Sud je ____ zastarjelu odredbu.” (učinio nevažećom)',
    opts: ['ukinuo', 'dokinuo', 'otkinuo', 'skinuo'],
    answer: 'ukinuo',
    en: 'the court repealed the outdated provision',
    tip: 'Ukinuti = pravno staviti izvan snage; dokinuti knjiški, otkinuti fizički.',
  },
  {
    mode: 'nijanse',
    q: '„Predstava je ____ sva očekivanja.” (bila bolja od njih)',
    opts: ['nadmašila', 'premašila broj', 'prerasla', 'preskočila'],
    answer: 'nadmašila',
    en: 'the performance surpassed all expectations',
    tip: 'Nadmašiti očekivanja; premašiti ide uz iznose i granice.',
  },
  {
    mode: 'nijanse',
    q: '„Njihova su mišljenja posve ____.” (ne mogu zajedno)',
    opts: ['oprečna', 'okrečna', 'poprečna', 'uzrečna'],
    answer: 'oprečna',
    en: 'their opinions are completely opposed',
    tip: 'Oprečan = suprotan, nespojiv; poprečan = koji ide poprijeko.',
  },
];

export { DATA as SINONIMIJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SinonimijaDrill({ goBack, award }: Props) {
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
          key: 'sinonimija',
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
        {H('⚖️ Sinonimija', 'rabiti ili koristiti — the fine print of meaning', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Savršeno — nijanse su vaše područje! 🏆'
              : score >= total * 0.8
                ? 'Vrlo dobro razlikovanje nijansa! 💪'
                : 'Paronimi i nijanse traže još vježbe.'}
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
      {H('⚖️ Sinonimija', 'rabiti ili koristiti — the fine print of meaning', goBack)}
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
