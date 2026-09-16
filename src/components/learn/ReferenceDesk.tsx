/**
 * ReferenceDesk — the always-true half of the Learning Center.
 *
 * Search and the syllabus answer "which lesson"; this answers "what IS this,
 * and what are the forms", which is the question a learner actually has mid-
 * sentence. Every panel is rendered from machinery the app already shipped and
 * barely showed: the concept cards, `decline()`, and the preposition table that
 * nothing rendered at all.
 *
 * ZERO AI, ZERO NETWORK, ZERO CREDIT. Every answer here is computed by rules on
 * the device. Nothing on this screen awards, completes or records — looking a
 * form up must never be worth what practising it is worth.
 *
 * THE HONESTY RULES IT INHERITS FROM THE ENGINE, both load-bearing:
 *
 *   1. A COMPUTED TABLE SAYS IT IS COMPUTED. `decline()` marks the thirteen
 *      attested paradigms and flags everything else; the panel prints "from the
 *      regular pattern" rather than presenting a generated table as recorded
 *      fact.
 *   2. A CONSONANT-FINAL NOUN IS GENUINELY AMBIGUOUS and the UI must not hide
 *      it. `grad` is masculine, `stvar` is feminine i-declension, and the
 *      spelling cannot tell them apart — the engine's own comment says "the
 *      caller knows, the rules do not". Left to guess, `decline('stvar')`
 *      returns `stvara` and `stvarovi`: invented forms for a real word, in
 *      front of a learner. So the gender control APPEARS for exactly those
 *      nouns, and the panel says why.
 */
import React, { useMemo, useState } from 'react';
import {
  decline,
  CASES,
  CASE_NAME,
  CASE_QUESTION,
  PREPOSITION_CASE,
  type Case,
  type Gender,
} from '../../lib/croatianMorphology';
import { CASE_CONCEPTS, WHY_WORDS_CHANGE, caseConceptById } from '../../data/caseConcepts';
import {
  referenceSources,
  PRIMER_ID,
  DECLENSION_ID,
  PREPOSITIONS_ID,
} from '../../lib/referenceDesk';

/** A consonant-final lemma could be masculine or feminine i-declension. */
function isAmbiguousGender(lemma: string): boolean {
  const w = lemma.trim().toLowerCase();
  if (!w) return false;
  return !'aeiou'.includes(w.slice(-1));
}

function Example({ hr, en, note }: { hr: string; en: string; note?: string }) {
  return (
    <div style={{ marginTop: 8 }}>
      <div
        lang="hr"
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--heading)',
          borderLeft: '3px solid #0e7490',
          paddingLeft: 10,
        }}
      >
        {hr}
      </div>
      <div style={{ fontSize: 12, color: 'var(--subtext)', paddingLeft: 13, marginTop: 2 }}>
        {en}
      </div>
      {note && (
        <div style={{ fontSize: 11, color: '#0e7490', paddingLeft: 13, marginTop: 3 }}>{note}</div>
      )}
    </div>
  );
}

function DeclensionPanel(): React.ReactElement {
  const [word, setWord] = useState('knjiga');
  const [gender, setGender] = useState<Gender | undefined>(undefined);
  const ambiguous = isAmbiguousGender(word);
  const table = useMemo(
    () => decline(word, ambiguous ? (gender ?? 'm') : undefined),
    [word, gender, ambiguous],
  );

  return (
    <div>
      <input
        data-testid="rd-declension-input"
        aria-label="Croatian noun to decline"
        lang="hr"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="knjiga"
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: 10,
          border: '1.5px solid var(--card-b)',
          background: 'var(--bg2, var(--card))',
          color: 'var(--text)',
          fontSize: 15,
          fontFamily: "'Outfit',sans-serif",
          boxSizing: 'border-box',
        }}
      />

      {ambiguous && (
        <div data-testid="rd-gender-choice" style={{ marginTop: 10 }}>
          <div style={{ fontSize: 11, color: 'var(--subtext)', marginBottom: 6, lineHeight: 1.5 }}>
            A noun ending in a consonant can be masculine (<span lang="hr">grad</span>) or feminine
            (<span lang="hr">stvar</span>) — the spelling cannot tell them apart, so pick one.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {(
              [
                ['m', 'masculine · grad'],
                ['f', 'feminine · stvar'],
              ] as const
            ).map(([g, label]) => (
              <button
                key={g}
                data-testid={`rd-gender-${g}`}
                onClick={() => setGender(g)}
                aria-pressed={(gender ?? 'm') === g}
                className="b"
                style={{
                  flex: 1,
                  fontSize: 12,
                  padding: '7px 10px',
                  fontWeight: 700,
                  background: (gender ?? 'm') === g ? 'var(--accent)' : 'transparent',
                  color: (gender ?? 'm') === g ? '#fff' : 'var(--subtext)',
                  border: '1.5px solid var(--card-b)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {!table && word.trim() !== '' && (
        <p data-testid="rd-declension-none" style={{ fontSize: 13, color: 'var(--subtext)' }}>
          That does not look like a single Croatian noun. Try one word, no spaces.
        </p>
      )}

      {table && (
        <div data-testid="rd-declension-table" style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, color: 'var(--subtext)', marginBottom: 6 }}>
            {table.paradigm} ·{' '}
            {table.attested ? (
              <strong>attested paradigm</strong>
            ) : (
              <span data-testid="rd-computed">from the regular pattern</span>
            )}
          </div>
          <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ fontSize: 11, color: 'var(--subtext)', textAlign: 'left' }}>
                <th style={{ padding: '4px 6px 4px 0', fontWeight: 700 }}>case</th>
                <th style={{ padding: '4px 6px 4px 0', fontWeight: 700 }}>singular</th>
                <th style={{ padding: '4px 0', fontWeight: 700 }}>plural</th>
              </tr>
            </thead>
            <tbody>
              {CASES.map((c: Case) => (
                <tr key={c} data-testid="rd-case-row" data-case={c}>
                  <td
                    style={{
                      color: 'var(--subtext)',
                      padding: '3px 6px 3px 0',
                      whiteSpace: 'nowrap',
                    }}
                    title={CASE_QUESTION[c]}
                  >
                    {CASE_NAME[c]}
                  </td>
                  <td lang="hr" style={{ padding: '3px 6px 3px 0', color: 'var(--heading)' }}>
                    {table.forms[`${c}sg`]}
                  </td>
                  <td lang="hr" style={{ padding: '3px 0', color: 'var(--heading)' }}>
                    {table.forms[`${c}pl`]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {table.note && (
            <p style={{ fontSize: 11, color: 'var(--subtext)', lineHeight: 1.6, marginTop: 8 }}>
              {table.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function PrepositionPanel(): React.ReactElement {
  // Grouped by the case each preposition governs. Two-case prepositions appear
  // under both, which is the fact worth learning about them — `u` + accusative
  // is movement into, `u` + locative is being inside.
  const byCase = useMemo(() => {
    const m = new Map<Case, Array<[string, string]>>();
    for (const [prep, info] of Object.entries(PREPOSITION_CASE)) {
      for (const c of info.cases) {
        if (!m.has(c)) m.set(c, []);
        m.get(c)!.push([prep, info.note]);
      }
    }
    for (const list of m.values()) list.sort((a, b) => a[0].localeCompare(b[0], 'hr'));
    return m;
  }, []);

  return (
    <div data-testid="rd-preposition-table">
      {CASES.filter((c) => byCase.has(c)).map((c) => (
        <div key={c} style={{ marginBottom: 14 }} data-testid="rd-prep-group" data-case={c}>
          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--heading)' }}>
            {CASE_NAME[c]}
            <span style={{ fontWeight: 500, color: 'var(--subtext)' }}> — {CASE_QUESTION[c]}</span>
          </div>
          {byCase.get(c)!.map(([prep, note]) => (
            <div
              key={prep}
              data-testid="rd-prep"
              style={{ display: 'flex', gap: 8, fontSize: 12, marginTop: 4 }}
            >
              <span
                lang="hr"
                style={{ fontWeight: 800, color: '#0e7490', minWidth: 58, flexShrink: 0 }}
              >
                {prep}
              </span>
              <span style={{ color: 'var(--subtext)', lineHeight: 1.45 }}>{note}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ConceptPanel({ id }: { id: string }): React.ReactElement {
  if (id === PRIMER_ID) {
    return (
      <div>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text)' }}>
          {WHY_WORDS_CHANGE.body}
        </p>
        <Example {...WHY_WORDS_CHANGE.example} />
      </div>
    );
  }
  const c = caseConceptById(id);
  if (!c) return <p style={{ fontSize: 13, color: 'var(--subtext)' }}>Nothing here yet.</p>;
  return (
    <div>
      <div style={{ fontSize: 12, color: '#0e7490', fontWeight: 700, marginBottom: 6 }} lang="hr">
        {c.question}
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text)', margin: 0 }}>
        {c.whatItDoes}
      </p>
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: 'var(--text)',
          marginTop: 8,
          fontStyle: 'italic',
        }}
      >
        {c.englishBridge}
      </p>
      <Example {...c.example} />
      <Example {...c.counterex} />
    </div>
  );
}

export default function ReferenceDesk({
  initialOpenId,
}: {
  initialOpenId?: string | null;
}): React.ReactElement {
  const panels = useMemo(() => referenceSources(), []);
  const [openId, setOpenId] = useState<string | null>(initialOpenId ?? PRIMER_ID);

  // A refId arriving from search opens that panel, without clobbering a choice
  // the learner has since made on the desk itself.
  React.useEffect(() => {
    if (initialOpenId) setOpenId(initialOpenId);
  }, [initialOpenId]);

  return (
    <div data-testid="reference-desk">
      <div style={{ fontSize: 11, color: 'var(--subtext)', marginBottom: 10, lineHeight: 1.5 }}>
        Worked out on your device from the rules — no connection needed, and nothing here counts
        towards your progress.
      </div>
      {panels.map((p) => {
        const isOpen = openId === p.id;
        return (
          <div key={p.id} style={{ marginBottom: 8 }}>
            <button
              data-testid={`rd-panel-${p.id}`}
              onClick={() => setOpenId(isOpen ? null : p.id)}
              aria-expanded={isOpen}
              className="c"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px',
                cursor: 'pointer',
                textAlign: 'left',
                border: '1px solid var(--card-b)',
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              <span style={{ fontSize: 19, flexShrink: 0 }}>{p.icon}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 800,
                    color: 'var(--heading)',
                  }}
                >
                  {p.title}
                </span>
                {p.subtitle && (
                  <span
                    style={{
                      display: 'block',
                      fontSize: 11,
                      color: 'var(--subtext)',
                      marginTop: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.subtitle}
                  </span>
                )}
              </span>
              <span
                style={{
                  color: 'var(--subtext)',
                  fontSize: 15,
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform .2s',
                }}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <div
                data-testid={`rd-open-${p.id}`}
                style={{
                  padding: '12px 14px',
                  border: '1px solid var(--card-b)',
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  background: 'var(--card)',
                }}
              >
                {p.id === DECLENSION_ID ? (
                  <DeclensionPanel />
                ) : p.id === PREPOSITIONS_ID ? (
                  <PrepositionPanel />
                ) : (
                  <ConceptPanel id={p.id} />
                )}
              </div>
            )}
          </div>
        );
      })}
      <div style={{ fontSize: 11, color: 'var(--subtext)', marginTop: 4 }}>
        {CASE_CONCEPTS.length} concept cards · {Object.keys(PREPOSITION_CASE).length} prepositions
      </div>
    </div>
  );
}
