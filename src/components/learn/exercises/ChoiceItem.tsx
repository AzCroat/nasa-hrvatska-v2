// Multiple choice and typed items — the two kinds guided practice had before the
// exercise player. Extracted verbatim from GuidedPracticeSlide: same behaviour and
// the same test ids (practice-option, practice-hint, practice-explanation,
// practice-typed-*), now reporting through onSettle.
import React, { useState } from 'react';
import { judgeTyped, type TypedVerdict } from '../../../lib/typedAnswer';
import { card, inputStyle, optionStyle, PromptCard } from './shared';
import type { ChoiceExercise, ItemProps, TypedExercise } from './types';

export function ChoiceItem({ item, onSettle, eyebrow, color, settled }: ItemProps<ChoiceExercise>) {
  const [tried, setTried] = useState<number[]>(settled ? [item.correct] : []);
  const [resolved, setResolved] = useState(!!settled);
  const wrongTries = tried.filter((t) => t !== item.correct).length;
  const gotIt = tried.includes(item.correct);

  function choose(i: number) {
    if (resolved || tried.includes(i)) return;
    const next = [...tried, i];
    const wrong = next.filter((t) => t !== item.correct).length;
    setTried(next);
    // Resolved on the right answer, or on the SECOND wrong one (then it is shown).
    if (i === item.correct || wrong >= 2) {
      setResolved(true);
      onSettle(i === item.correct ? 'right' : 'shown');
    }
  }

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      {item.options.map((o, i) => (
        <button
          key={i}
          lang="hr"
          data-testid="practice-option"
          data-verdict={
            i === item.correct && resolved ? 'correct' : tried.includes(i) ? 'wrong' : undefined
          }
          disabled={resolved || tried.includes(i)}
          style={optionStyle(
            i === item.correct && resolved ? 'right' : tried.includes(i) ? 'wrong' : 'idle',
            resolved || tried.includes(i),
          )}
          onClick={() => choose(i)}
        >
          {o}
        </button>
      ))}
      {!resolved && wrongTries === 1 && (
        <div
          data-testid="practice-hint"
          role="status"
          style={{ ...card, background: 'var(--info-bg)' }}
        >
          <strong style={{ color: 'var(--ink-info)' }}>Not quite — here is a hint. </strong>
          <span style={{ color: 'var(--text)' }}>{item.hint}</span>
        </div>
      )}
      {resolved && (
        <div data-testid="practice-explanation" role="status" style={card}>
          <strong style={{ color: gotIt ? 'var(--ink-green)' : 'var(--ink-error)' }}>
            {gotIt
              ? wrongTries === 0
                ? '✅ Correct!'
                : '✅ Got it on the second try.'
              : '❌ The answer is shown above.'}
          </strong>{' '}
          <span style={{ color: 'var(--text)' }}>{item.explanation}</span>
        </div>
      )}
    </>
  );
}

export function TypedItem({ item, onSettle, eyebrow, color, settled }: ItemProps<TypedExercise>) {
  const [verdicts, setVerdicts] = useState<TypedVerdict[]>(settled ? ['right'] : []);
  const [resolved, setResolved] = useState(!!settled);
  const [draft, setDraft] = useState('');
  const wrongTries = verdicts.filter((v) => v !== 'right').length;
  const gotIt = verdicts.includes('right');
  const last = verdicts[verdicts.length - 1];

  function submit() {
    if (resolved || !draft.trim()) return;
    const v = judgeTyped(draft, item.answer, item.accept ?? []);
    const next = [...verdicts, v];
    const misses = next.filter((x) => x !== 'right').length;
    setVerdicts(next);
    if (v === 'right' || misses >= 2) {
      setResolved(true);
      onSettle(v === 'right' ? 'right' : 'shown');
    }
    if (v !== 'right') setDraft('');
  }

  return (
    <>
      <PromptCard eyebrow={eyebrow} color={color} q={item.q} />
      <div style={{ marginBottom: 8 }}>
        {!resolved && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            style={{ display: 'flex', gap: 8 }}
          >
            <input
              lang="hr"
              data-testid="practice-typed-input"
              aria-label="Type your answer"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              style={inputStyle}
            />
            <button
              type="submit"
              className="b bp"
              data-testid="practice-typed-submit"
              disabled={!draft.trim()}
            >
              Check
            </button>
          </form>
        )}
        {resolved && (
          <div
            lang="hr"
            data-testid="practice-typed-answer"
            style={{
              ...card,
              background: gotIt ? 'var(--success-bg)' : 'var(--error-bg)',
              color: gotIt ? 'var(--ink-green)' : 'var(--ink-error)',
              fontWeight: 800,
            }}
          >
            {item.answer}
          </div>
        )}
      </div>
      {!resolved && wrongTries === 1 && (
        <div
          data-testid="practice-hint"
          data-verdict={last}
          role="status"
          style={{ ...card, background: 'var(--info-bg)' }}
        >
          <strong style={{ color: 'var(--ink-info)' }}>
            {last === 'accents'
              ? 'Nearly — the letters with marks (č, ć, đ, š, ž) are part of the word. '
              : 'Not quite — here is a hint. '}
          </strong>
          <span style={{ color: 'var(--text)' }}>{item.hint}</span>
        </div>
      )}
      {resolved && (
        <div data-testid="practice-explanation" role="status" style={card}>
          <strong style={{ color: gotIt ? 'var(--ink-green)' : 'var(--ink-error)' }}>
            {gotIt
              ? wrongTries === 0
                ? '✅ Correct!'
                : '✅ Got it on the second try.'
              : '❌ The answer is shown above.'}
          </strong>{' '}
          <span style={{ color: 'var(--text)' }}>{item.explanation}</span>
        </div>
      )}
    </>
  );
}
