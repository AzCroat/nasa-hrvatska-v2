// src/components/practice/WordOrderDrill.tsx
//
// A1 word-order practice — the second half of the gap found by the 2026-08-20
// recommender audit. unjumble, sentbuild and sentencetiles are all A2, so an A1
// learner got no word-order practice at all, and A1 cannot inherit downward.
//
// CONTENT DESIGN — this is the part that is easy to get wrong.
// Croatian constituent order is genuinely free: "Ana čita knjigu" and "Knjigu
// čita Ana" are both correct, differing only in emphasis. So an exercise built
// on "pick the right order" is a TRAP unless every item targets a rule that is
// actually fixed. Every item here does:
//
//   * second-position clitics (sam/si/je/smo/ste/su, se) — never first
//   * "li" attaches directly after the verb it questions
//   * "ne" sits immediately in front of its verb, and fuses in nisam / nemam
//   * describing words precede the noun
//
// Each distractor was checked to be ungrammatical, not merely marked. Anything
// that a native could say with contrastive stress ("Hrvatski ne govorim") was
// rejected as a distractor — an exercise that marks real Croatian wrong teaches
// the learner to distrust their ear.

import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import A1ConceptIntro from './A1ConceptIntro';
import DrillExplainCard from './DrillExplainCard';
import { useExplainError } from '../../hooks/useExplainError';
import { getCurrentContentLevel } from '../../lib/cefrCertification';
import { useStats } from '../../context/StatsContext';
import { rnd } from '../../lib/random.js';

function shLocal<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

export interface WordOrderItem {
  /** The English meaning the learner is building. */
  q: string;
  opts: string[];
  answer: string;
  tip: string;
  /**
   * Set only on the two fusion items (nisam, nemam), where the correct answer
   * merges two words into one and the distractors keep them apart. Those items
   * are deliberately NOT word-for-word permutations — the fusion IS the lesson —
   * so they are exempted from the permutation contract in the test suite.
   */
  fusion?: true;
}

export const DATA: WordOrderItem[] = [
  {
    q: "I don't speak Croatian.",
    opts: [
      'Ne govorim hrvatski.',
      'Govorim ne hrvatski.',
      'Govorim hrvatski ne.',
      'Hrvatski govorim ne.',
    ],
    answer: 'Ne govorim hrvatski.',
    tip: '"ne" goes directly in front of the verb it cancels — nothing may come between them.',
  },
  {
    q: 'I am from America.',
    opts: ['Ja sam iz Amerike.', 'Sam ja iz Amerike.', 'Ja iz Amerike sam.', 'Iz Amerike ja sam.'],
    answer: 'Ja sam iz Amerike.',
    tip: '"sam" takes the second seat. It can never open a sentence — that is why "Sam ja..." is impossible.',
  },
  {
    q: 'What is your name?',
    opts: ['Kako se zoveš?', 'Kako zoveš se?', 'Se kako zoveš?', 'Zoveš se kako?'],
    answer: 'Kako se zoveš?',
    tip: '"se" is a second-seat word too: Kako se zoveš? — right after the first word.',
  },
  {
    q: 'Do you speak Croatian?',
    opts: [
      'Govoriš li hrvatski?',
      'Li govoriš hrvatski?',
      'Govoriš hrvatski li?',
      'Li hrvatski govoriš?',
    ],
    answer: 'Govoriš li hrvatski?',
    tip: '"li" makes a yes/no question and clings to the verb — verb first, then li.',
  },
  {
    q: 'Is this your book?',
    opts: [
      'Je li ovo tvoja knjiga?',
      'Li je ovo tvoja knjiga?',
      'Ovo je li tvoja knjiga?',
      'Je ovo li tvoja knjiga?',
    ],
    answer: 'Je li ovo tvoja knjiga?',
    tip: '"Je li...?" is a fixed opening for yes/no questions — learn the two words as one unit.',
  },
  {
    q: 'This is a big house.',
    opts: [
      'Ovo je velika kuća.',
      'Ovo je kuća velika.',
      'Velika ovo je kuća.',
      'Ovo velika je kuća.',
    ],
    answer: 'Ovo je velika kuća.',
    tip: 'Describing words come before the noun, exactly like English: velika kuća.',
  },
  {
    q: 'Where is Ana?',
    opts: ['Gdje je Ana?', 'Gdje Ana je?', 'Je gdje Ana?', 'Ana gdje je?'],
    answer: 'Gdje je Ana?',
    tip: 'The question word opens, then "je" takes the second seat: Gdje je...?',
  },
  {
    q: 'My name is Marko.',
    opts: ['Zovem se Marko.', 'Se zovem Marko.', 'Zovem Marko se.', 'Se Marko zovem.'],
    answer: 'Zovem se Marko.',
    tip: 'Literally "I call myself Marko". "se" sits in second place, right after the verb.',
  },
  {
    q: 'We are students.',
    opts: ['Mi smo studenti.', 'Smo mi studenti.', 'Mi studenti smo.', 'Studenti mi smo.'],
    answer: 'Mi smo studenti.',
    tip: '"smo" is the we-form of "to be", and like all of them it wants the second seat.',
  },
  {
    q: "He doesn't know.",
    opts: ['On ne zna.', 'On zna ne.', 'Ne on zna.', 'Zna on ne.'],
    answer: 'On ne zna.',
    tip: 'Again "ne" hugs the verb: ne zna. You can drop "on" entirely — Ne zna.',
  },
  {
    q: 'Do you have a sister?',
    opts: ['Imaš li sestru?', 'Li imaš sestru?', 'Imaš sestru li?', 'Li sestru imaš?'],
    answer: 'Imaš li sestru?',
    tip: 'Verb, then li, then the rest: Imaš li...? Same shape as Govoriš li...?',
  },
  {
    q: 'That is my good friend.',
    opts: [
      'To je moj dobar prijatelj.',
      'To je prijatelj moj dobar.',
      'To moj dobar je prijatelj.',
      'To je moj prijatelj dobar.',
    ],
    answer: 'To je moj dobar prijatelj.',
    tip: 'Both describing words stack up in front of the noun: moj dobar prijatelj.',
  },
  {
    q: 'I am not tired.',
    opts: ['Nisam umoran.', 'Ne sam umoran.', 'Sam ne umoran.', 'Umoran ne sam.'],
    answer: 'Nisam umoran.',
    fusion: true,
    tip: '"ne" + "sam" fuse into one word: nisam. Never written apart.',
  },
  {
    q: 'She is in Zagreb.',
    opts: ['Ona je u Zagrebu.', 'Je ona u Zagrebu.', 'Ona u Zagrebu je.', 'U Zagrebu ona je.'],
    answer: 'Ona je u Zagrebu.',
    tip: 'Second seat again. (Drop "ona" and it becomes U Zagrebu je — still second.)',
  },
  {
    q: "I don't have time.",
    opts: ['Nemam vremena.', 'Ne imam vremena.', 'Imam ne vremena.', 'Ne vremena imam.'],
    answer: 'Nemam vremena.',
    fusion: true,
    tip: '"ne" + "imam" fuse into nemam — like nisam. These two fusions are worth memorising.',
  },
  {
    q: 'Are you from Croatia?',
    opts: [
      'Jesi li iz Hrvatske?',
      'Li jesi iz Hrvatske?',
      'Jesi iz Hrvatske li?',
      'Li iz Hrvatske jesi?',
    ],
    answer: 'Jesi li iz Hrvatske?',
    tip: 'Questions use the long form "jesi", not the short "si" — Jesi li...?',
  },
];

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function WordOrderDrill({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    shLocal(DATA)
      .slice(0, 10)
      .map((item) => ({ ...item, opts: shLocal([...item.opts]) })),
  );
  const total = q.length;
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const {
    explain,
    request: requestExplain,
    reset: resetExplain,
  } = useExplainError('case_drill', getCurrentContentLevel());

  const cur = q[idx]!;
  const answered = chosen !== null;

  function pick(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === cur.answer) {
      setScore((s) => s + 1);
    } else {
      void requestExplain(opt, cur.answer, cur.q);
    }
  }

  function next() {
    if (idx + 1 >= total) {
      if (!finishFired.current) {
        finishFired.current = true;
        const res = completeExercise({
          key: 'word-order',
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
      resetExplain();
    }
  }

  if (showIntro && !done) {
    return (
      <div className="scr-wrap">
        {H('🧩 Word Order', 'What can move — and what never moves', goBack)}
        <div style={{ marginTop: 12 }}>
          <A1ConceptIntro conceptId="word-order" onStart={() => setShowIntro(false)} />
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="scr-wrap">
        {H('🧩 Word Order', 'What can move — and what never moves', goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total
              ? 'Perfect! The little words are in their seats. 🏆'
              : score >= total * 0.8
                ? 'Nicely done — second position is starting to feel natural.'
                : 'Keep going — sam, si, je, se and li all want the SECOND seat.'}
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
      {H('🧩 Word Order', 'What can move — and what never moves', goBack)}
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
          How do you say this?
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#0e7490', lineHeight: 1.4 }}>
          {cur.q}
        </div>
        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
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
                style={{ background: bg, borderColor: bc, textAlign: 'left' }}
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
        {answered && chosen !== cur.answer && <DrillExplainCard state={explain} />}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 16 }} onClick={next}>
            {idx + 1 >= total ? 'See results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}
