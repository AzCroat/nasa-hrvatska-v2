// A typed-answer box shared by transform and dictate: judged by typedAnswer (no
// fuzzy matching), with the accents note on a near miss.
import React, { useState } from 'react';
import { judgeTyped, type TypedVerdict } from '../../../lib/typedAnswer';
import { inputStyle } from './shared';

export function useTyped(
  answer: string,
  accept: string[] | undefined,
  onVerdict: (v: TypedVerdict) => void,
) {
  const [draft, setDraft] = useState('');
  const [last, setLast] = useState<TypedVerdict | null>(null);
  const submit = () => {
    if (!draft.trim()) return;
    const v = judgeTyped(draft, answer, accept ?? []);
    setLast(v);
    if (v !== 'right') setDraft('');
    onVerdict(v);
  };
  return { draft, setDraft, last, submit };
}

export default function TypedBox({
  inputId,
  draft,
  setDraft,
  submit,
  disabled,
  placeholder,
}: {
  inputId: string;
  draft: string;
  setDraft: (s: string) => void;
  submit: () => void;
  disabled: boolean;
  placeholder?: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled) submit();
      }}
      style={{ display: 'flex', gap: 8, marginBottom: 12 }}
    >
      <input
        lang="hr"
        data-testid={inputId}
        aria-label="Type your answer"
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        disabled={disabled}
        placeholder={placeholder}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        style={inputStyle}
      />
      <button
        type="submit"
        className="b bp"
        data-testid="ex-check"
        disabled={disabled || !draft.trim()}
      >
        Check
      </button>
    </form>
  );
}
