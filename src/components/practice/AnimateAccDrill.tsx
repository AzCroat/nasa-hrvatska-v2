import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import { useStats } from '../../context/StatsContext';
import { rnd } from '../../lib/random.js';

function shLocal(a: any[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export const DATA = [
  {
    q: 'Vidim svog ___ na ulici.',
    nom: 'brat (brother)',
    en: 'I see my brother on the street.',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'brata',
    tip: 'brat is ANIMATE (person) → accusative = genitive form: brat → brata',
  },
  {
    q: 'Ona čita ___.',
    nom: 'roman (novel)',
    en: 'She is reading a novel.',
    opts: ['roman', 'romana', 'romanu', 'romanom'],
    answer: 'roman',
    tip: 'roman is INANIMATE → accusative = nominative: roman (no change)',
  },
  {
    q: 'Imam ___.',
    nom: 'pas (dog)',
    en: 'I have a dog.',
    opts: ['psa', 'pas', 'psu', 'psom'],
    answer: 'psa',
    tip: 'pas is ANIMATE (animal) → accusative = genitive: pas → psa',
  },
  {
    q: 'Ona gleda ___.',
    nom: 'film (film)',
    en: 'She is watching a film.',
    opts: ['film', 'filma', 'filmu', 'filmom'],
    answer: 'film',
    tip: 'film is INANIMATE → accusative = nominative: film (no change)',
  },
  {
    q: 'Mama zove ___.',
    nom: 'sin (son)',
    en: 'Mom is calling her son.',
    opts: ['sina', 'sin', 'sinu', 'sinom'],
    answer: 'sina',
    tip: 'sin is ANIMATE (person) → accusative = genitive: sin → sina',
  },
  {
    q: 'Kupio sam novi ___.',
    nom: 'stol (table)',
    en: 'I bought a new table.',
    opts: ['stol', 'stola', 'stolu', 'stolom'],
    answer: 'stol',
    tip: 'stol is INANIMATE → accusative = nominative: stol (no change)',
  },
  {
    q: 'Traži svog ___.',
    nom: 'prijatelj (friend)',
    en: 'She is looking for her friend.',
    opts: ['prijatelja', 'prijatelj', 'prijatelju', 'prijateljem'],
    answer: 'prijatelja',
    tip: 'prijatelj is ANIMATE (person) → accusative = genitive: prijatelj → prijatelja',
  },
  {
    q: 'Kupila sam novi ___.',
    nom: 'telefon (phone)',
    en: 'I bought a new phone.',
    opts: ['telefon', 'telefona', 'telefonu', 'telefonom'],
    answer: 'telefon',
    tip: 'telefon is INANIMATE → accusative = nominative: telefon (no change)',
  },
  {
    q: 'Volim svog ___.',
    nom: 'mačak (cat)',
    en: 'I love my cat.',
    opts: ['mačka', 'mačak', 'mačku', 'mačkom'],
    answer: 'mačka',
    tip: 'mačak is ANIMATE (animal) → accusative = genitive: mačak → mačka',
  },
  {
    q: 'Čujem ___.',
    nom: 'vlak (train)',
    en: 'I hear the train.',
    opts: ['vlak', 'vlaka', 'vlaku', 'vlakom'],
    answer: 'vlak',
    tip: 'vlak is INANIMATE → accusative = nominative: vlak (no change)',
  },
  {
    q: 'Pitam ___.',
    nom: 'profesor (professor)',
    en: 'I am asking the professor.',
    opts: ['profesora', 'profesor', 'profesoru', 'profesorom'],
    answer: 'profesora',
    tip: 'profesor is ANIMATE (person) → accusative = genitive: profesor → profesora',
  },
  {
    q: 'Vozim ___.',
    nom: 'auto (car)',
    en: 'I drive a car.',
    opts: ['auto', 'auta', 'autu', 'autom'],
    answer: 'auto',
    tip: 'auto is INANIMATE → accusative = nominative: auto (no change — indeclinable)',
  },
  {
    q: 'Vidim ___.',
    nom: 'konj (horse)',
    en: 'I see a horse.',
    opts: ['konja', 'konj', 'konju', 'konjem'],
    answer: 'konja',
    tip: 'konj is ANIMATE (animal) → accusative = genitive: konj → konja',
  },
  {
    q: 'Imam ___.',
    nom: 'ključ (key)',
    en: 'I have a key.',
    opts: ['ključ', 'ključa', 'ključu', 'ključem'],
    answer: 'ključ',
    tip: 'ključ is INANIMATE → accusative = nominative: ključ (no change)',
  },
  {
    q: 'Znam ___.',
    nom: 'liječnik (doctor)',
    en: 'I know the doctor.',
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    tip: 'liječnik is ANIMATE (person) → accusative = genitive: liječnik → liječnika',
  },
  {
    q: 'Otvaramo ___.',
    nom: 'prozor (window)',
    en: 'We are opening the window.',
    opts: ['prozor', 'prozora', 'prozoru', 'prozorom'],
    answer: 'prozor',
    tip: 'prozor is INANIMATE → accusative = nominative: prozor (no change)',
  },
  {
    q: 'Volim svog ___.',
    nom: 'muž (husband)',
    en: 'I love my husband.',
    opts: ['muža', 'muž', 'mužu', 'mužem'],
    answer: 'muža',
    tip: 'muž is ANIMATE (person) → accusative = genitive: muž → muža',
  },
  {
    q: 'Vidim ___.',
    nom: 'brod (ship)',
    en: 'I see a ship.',
    opts: ['brod', 'broda', 'brodu', 'brodom'],
    answer: 'brod',
    tip: 'brod is INANIMATE → accusative = nominative: brod (no change)',
  },
  {
    q: 'Čuvam svog ___.',
    nom: 'stranac (stranger)',
    en: 'I am keeping an eye on the stranger.',
    opts: ['stranca', 'stranac', 'strancu', 'strancem'],
    answer: 'stranca',
    tip: 'stranac is ANIMATE (person) → accusative = genitive: stranac → stranca',
  },
  {
    q: 'Čujem ___.',
    nom: 'sat (clock)',
    en: 'I hear the clock.',
    opts: ['sat', 'sata', 'satu', 'satom'],
    answer: 'sat',
    tip: 'sat is INANIMATE → accusative = nominative: sat (no change)',
  },
  // ── 2026-07 depth expansion (+30): animate vs inanimate + PLURAL (no animacy split!) ──
  {
    q: 'Zovem ___ na večeru.',
    nom: 'susjed (neighbour)',
    en: 'I am inviting the neighbour to dinner.',
    opts: ['susjeda', 'susjed', 'susjedu', 'susjedom'],
    answer: 'susjeda',
    tip: 'ANIMATE masculine: accusative = genitive → susjeda.',
  },
  {
    q: 'Čitam ___ svaki dan.',
    nom: 'časopis (magazine)',
    en: 'I read the magazine every day.',
    opts: ['časopis', 'časopisa', 'časopisu', 'časopisom'],
    answer: 'časopis',
    tip: 'INANIMATE masculine: accusative = nominative → časopis.',
  },
  {
    q: 'Slikar crta ___.',
    nom: 'konj (horse)',
    en: 'The painter draws a horse.',
    opts: ['konja', 'konj', 'konju', 'konjem'],
    answer: 'konja',
    tip: 'Animals are ANIMATE: konj → konja.',
  },
  {
    q: 'Parkiram ___ ispred zgrade.',
    nom: 'automobil (car)',
    en: 'I park the car in front of the building.',
    opts: ['automobil', 'automobila', 'automobilu', 'automobilom'],
    answer: 'automobil',
    tip: 'INANIMATE: acc = nom → automobil.',
  },
  {
    q: 'Djeca gledaju ___.',
    nom: 'klaun (clown)',
    en: 'The children watch the clown.',
    opts: ['klauna', 'klaun', 'klaunu', 'klaunom'],
    answer: 'klauna',
    tip: 'ANIMATE: klaun → klauna.',
  },
  {
    q: 'Baka je ispekla ___.',
    nom: 'kolač (cake)',
    en: 'Grandma baked a cake.',
    opts: ['kolač', 'kolača', 'kolaču', 'kolačem'],
    answer: 'kolač',
    tip: 'INANIMATE: acc = nom → kolač.',
  },
  {
    q: 'Policija traži ___.',
    nom: 'lopov (thief)',
    en: 'The police are looking for the thief.',
    opts: ['lopova', 'lopov', 'lopovu', 'lopovom'],
    answer: 'lopova',
    tip: 'ANIMATE: lopov → lopova.',
  },
  {
    q: 'Sutra polažem ___.',
    nom: 'ispit (exam)',
    en: 'Tomorrow I am taking the exam.',
    opts: ['ispit', 'ispita', 'ispitu', 'ispitom'],
    answer: 'ispit',
    tip: 'INANIMATE: acc = nom → ispit.',
  },
  {
    q: 'Fotografiram ___ u zoološkom vrtu.',
    nom: 'medvjed (bear)',
    en: 'I photograph the bear at the zoo.',
    opts: ['medvjeda', 'medvjed', 'medvjedu', 'medvjedom'],
    answer: 'medvjeda',
    tip: 'ANIMATE animal: medvjed → medvjeda.',
  },
  {
    q: 'Prelazimo ___ pješice.',
    nom: 'most (bridge)',
    en: 'We cross the bridge on foot.',
    opts: ['most', 'mosta', 'mostu', 'mostom'],
    answer: 'most',
    tip: 'INANIMATE: acc = nom → most.',
  },
  {
    q: 'Trener hvali ___.',
    nom: 'igrač (player)',
    en: 'The coach praises the player.',
    opts: ['igrača', 'igrač', 'igraču', 'igračem'],
    answer: 'igrača',
    tip: 'ANIMATE: igrač → igrača.',
  },
  {
    q: 'Uključi ___, molim te.',
    nom: 'televizor (TV set)',
    en: 'Turn on the TV, please.',
    opts: ['televizor', 'televizora', 'televizoru', 'televizorom'],
    answer: 'televizor',
    tip: 'INANIMATE (devices are not animate): acc = nom → televizor.',
  },
  {
    q: 'Vidim ___ svaki dan u parku.',
    nom: 'starac (old man)',
    en: 'I see the old man in the park every day.',
    opts: ['starca', 'starac', 'starcu', 'starcem'],
    answer: 'starca',
    tip: 'ANIMATE with fleeting -a-: starac → starca.',
  },
  {
    q: 'Pijem ___ bez šećera.',
    nom: 'čaj (tea)',
    en: 'I drink tea without sugar.',
    opts: ['čaj', 'čaja', 'čaju', 'čajem'],
    answer: 'čaj',
    tip: 'INANIMATE: acc = nom → čaj.',
  },
  {
    q: 'Veterinar pregledava ___.',
    nom: 'mačak (tomcat)',
    en: 'The vet examines the tomcat.',
    opts: ['mačka', 'mačak', 'mačku', 'mačkom'],
    answer: 'mačka',
    tip: 'ANIMATE with fleeting -a-: mačak → mačka.',
  },
  {
    q: 'Gledamo ___ o Jadranu.',
    nom: 'dokumentarac (documentary)',
    en: 'We are watching a documentary about the Adriatic.',
    opts: ['dokumentarac', 'dokumentarca', 'dokumentarcu', 'dokumentarcem'],
    answer: 'dokumentarac',
    tip: 'INANIMATE: acc = nom → dokumentarac (films are things).',
  },
  {
    q: 'Pozdravljam ___ svako jutro.',
    nom: 'poštar (postman)',
    en: 'I greet the postman every morning.',
    opts: ['poštara', 'poštar', 'poštaru', 'poštarom'],
    answer: 'poštara',
    tip: 'ANIMATE: poštar → poštara.',
  },
  {
    q: 'Kupujem ___ za zimu.',
    nom: 'kaput (coat)',
    en: 'I am buying a coat for winter.',
    opts: ['kaput', 'kaputa', 'kaputu', 'kaputom'],
    answer: 'kaput',
    tip: 'INANIMATE: acc = nom → kaput.',
  },
  {
    q: 'Slušamo ___ na radiju.',
    nom: 'pjevač (singer)',
    en: 'We listen to the singer on the radio.',
    opts: ['pjevača', 'pjevač', 'pjevaču', 'pjevačem'],
    answer: 'pjevača',
    tip: 'ANIMATE: pjevač → pjevača.',
  },
  {
    q: 'Vidim ___ kroz prozor.',
    nom: 'vrt (garden)',
    en: 'I see the garden through the window.',
    opts: ['vrt', 'vrta', 'vrtu', 'vrtom'],
    answer: 'vrt',
    tip: 'INANIMATE: acc = nom → vrt.',
  },
  {
    q: 'Pozvali smo ___ na kavu.',
    nom: 'prijatelji (friends, pl.)',
    en: 'We invited our friends for coffee.',
    opts: ['prijatelje', 'prijatelji', 'prijatelja', 'prijateljima'],
    answer: 'prijatelje',
    tip: 'PLURAL has NO animacy split — all masc. pl. accusatives take -e: prijatelje.',
  },
  {
    q: 'Vidim ___ na parkiralištu.',
    nom: 'automobili (cars, pl.)',
    en: 'I see the cars in the car park.',
    opts: ['automobile', 'automobili', 'automobila', 'automobilima'],
    answer: 'automobile',
    tip: 'PLURAL: animate or not, acc. pl. is -e → automobile.',
  },
  {
    q: 'Farmer hrani ___.',
    nom: 'konji (horses, pl.)',
    en: 'The farmer feeds the horses.',
    opts: ['konje', 'konji', 'konja', 'konjima'],
    answer: 'konje',
    tip: 'PLURAL animate — same -e as inanimate: konje. Animacy matters only in the SINGULAR.',
  },
  {
    q: 'Skupljam stare ___.',
    nom: 'novčići (coins, pl.)',
    en: 'I collect old coins.',
    opts: ['novčiće', 'novčići', 'novčića', 'novčićima'],
    answer: 'novčiće',
    tip: 'PLURAL: novčići → novčiće.',
  },
  {
    q: 'Učiteljica poziva ___ pred ploču.',
    nom: 'učenici (pupils, pl.)',
    en: 'The teacher calls the pupils to the board.',
    opts: ['učenike', 'učenici', 'učenika', 'učenicima'],
    answer: 'učenike',
    tip: 'PLURAL acc: učenici → učenike (c reverts to k!).',
  },
  {
    q: 'Molim ___, ponovite pitanje.',
    nom: 'vi (you, formal)',
    en: 'Please (you formal), repeat the question.',
    opts: ['vas', 'vi', 'vama', 'vam'],
    answer: 'vas',
    tip: "Pronoun accusative: vi → vas ('moliti koga').",
  },
  {
    q: 'Nazvat ću ___ sutra.',
    nom: 'ujak (uncle)',
    en: 'I will call my uncle tomorrow.',
    opts: ['ujaka', 'ujak', 'ujaku', 'ujakom'],
    answer: 'ujaka',
    tip: 'ANIMATE: ujak → ujaka.',
  },
  {
    q: 'Stavljam ___ na stol.',
    nom: 'laptop (laptop)',
    en: 'I put the laptop on the table.',
    opts: ['laptop', 'laptopa', 'laptopu', 'laptopom'],
    answer: 'laptop',
    tip: 'INANIMATE loanword: acc = nom → laptop.',
  },
  {
    q: 'Susrećemo ___ u hodniku.',
    nom: 'profesori (professors, pl.)',
    en: 'We meet the professors in the corridor.',
    opts: ['profesore', 'profesori', 'profesora', 'profesorima'],
    answer: 'profesore',
    tip: 'PLURAL: profesori → profesore.',
  },
  {
    q: 'Obitelj gleda ___ zajedno.',
    nom: 'film (film)',
    en: 'The family watches the film together.',
    opts: ['film', 'filma', 'filmu', 'filmom'],
    answer: 'film',
    tip: 'INANIMATE: acc = nom → film.',
  },
];

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AnimateAccDrill({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    shLocal(DATA)
      .slice(0, 20)
      .map((item) => ({ ...item, opts: shLocal([...item.opts]) })),
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
          key: 'animateacc',
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
        {H('🎯 Animate Accusative', 'Inanimate = same as nom; Animate = genitive form', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Perfect! Animate accusative mastered! 🏆'
              : score >= total * 0.8
                ? 'Great work! 💪'
                : 'Keep practising — animate vs inanimate is tricky!'}
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
      {H('🎯 Animate Accusative', 'Inanimate = same as nom; Animate = genitive form', goBack)}
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
            color: '#64748b',
            marginBottom: 6,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          Choose the accusative form
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#0e7490', lineHeight: 1.4 }}>
          {cur.q}
        </div>
        <div style={{ fontSize: 15, color: '#164e63', fontWeight: 600, marginTop: 4 }}>
          {cur.nom}
        </div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>{cur.en}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 16 }}>
          {cur.opts.map((opt: string) => {
            let bg = 'white';
            let bc = 'rgba(14,116,144,.12)';
            if (answered) {
              if (opt === cur.answer) {
                bg = '#dcfce7';
                bc = '#16a34a';
              } else if (opt === chosen) {
                bg = '#fee2e2';
                bc = '#dc2626';
              }
            }
            return (
              <button
                key={opt}
                className="ob"
                style={{ background: bg, borderColor: bc }}
                onClick={() => pick(opt)}
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
              padding: '10px 14px',
              background: '#f0f9ff',
              borderRadius: 10,
              border: '1px solid #bae6fd',
              fontSize: 14,
              color: '#0369a1',
            }}
          >
            <strong>{chosen === cur.answer ? '✅ Correct!' : '❌ Incorrect.'}</strong> {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 16 }} onClick={next}>
            {idx + 1 >= total ? 'See results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}
