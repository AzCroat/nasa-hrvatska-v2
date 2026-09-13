import React, { useState } from 'react';

/**
 * Learning-goal picker + goal-description tip — extracted from SettingsTab as
 * part of the 1a decomposition. `currentGoal` is SHARED with GoalFocusSection
 * (a sibling that renders the active goal's shortcuts), so it stays lifted in
 * SettingsTab and flows in here as props; this component only owns the
 * open/closed dropdown UI state. The GOALS list lives here as its sole consumer.
 * Behavior-identical to the prior inline block.
 */
/**
 * All seven goals onboarding offers, in onboarding's order.
 *
 * `elders` and `partner` were MISSING, and this is the one screen where a
 * learner changes their mind. A learner who chose either at onboarding opened
 * this picker, saw five options and none of them theirs — and picking any of the
 * five overwrote `nh_goal` with no way back, because the list that could set it
 * again is the one they had already left. `partner` is not decorative:
 * `GoalFocusSection` renders partner-specific shortcuts off `nh_goal ===
 * 'partner'`, and `LEVEL_NARRATIVE` has a six-rung narrative for both.
 *
 * `goalListsAgree.test.ts` pins the ID SET across all three pickers. Copy is
 * deliberately NOT pinned — this list carries no `sub` and the modal words
 * `heritage` differently on purpose — but a goal that exists in one picker and
 * not another is a learner who cannot get back to their own answer.
 */
const GOALS = [
  { id: 'heritage', icon: '🇭🇷', label: 'My heritage & roots' },
  { id: 'family', icon: '👨‍👩‍👧', label: 'Speak with family' },
  { id: 'elders', icon: '👴👵', label: 'Za bake i djedove' },
  { id: 'partner', icon: '💑', label: 'My partner is Croatian' },
  { id: 'travel', icon: '✈️', label: 'Travel to Croatia' },
  { id: 'culture', icon: '📖', label: 'Love the culture' },
  { id: 'fluent', icon: '🗣️', label: 'Become fluent' },
];

export default function GoalSelectorSection({
  currentGoal,
  setCurrentGoal,
}: {
  currentGoal: string;
  setCurrentGoal: (goal: string) => void;
}) {
  const [goalOpen, setGoalOpen] = useState(false);
  return (
    <React.Fragment>
      {/* Goal selector */}
      <div className="tc" style={{ marginBottom: 10, overflow: 'hidden' }}>
        <button
          onClick={() => setGoalOpen((o) => !o)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
            textAlign: 'left',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 13,
              background: 'var(--info-bg)',
              border: '1px solid var(--info-b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-xl)',
              flexShrink: 0,
            }}
          >
            {GOALS.find((g) => g.id === currentGoal)?.icon || '🎯'}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--text-base)', fontWeight: 800, color: 'var(--heading)' }}>
              My Learning Goal
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--subtext)', marginTop: 1 }}>
              {currentGoal
                ? GOALS.find((g) => g.id === currentGoal)?.label
                : 'Not set — tap to choose'}
            </div>
          </div>
          <div
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--subtext)',
              opacity: 0.85,
              transition: 'transform .2s',
              transform: goalOpen ? 'rotate(180deg)' : 'none',
            }}
          >
            ⌄
          </div>
        </button>
        {goalOpen && (
          <div style={{ borderTop: '1px solid var(--card-b)', padding: '10px 12px 12px' }}>
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  localStorage.setItem('nh_goal', g.id);
                  setCurrentGoal(g.id);
                  setGoalOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  background: currentGoal === g.id ? 'var(--info-bg)' : 'transparent',
                  fontFamily: "'Outfit',sans-serif",
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: 'var(--text-xl)' }}>{g.icon}</span>
                <span
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: currentGoal === g.id ? 800 : 600,
                    color: currentGoal === g.id ? 'var(--info)' : 'var(--heading)',
                  }}
                >
                  {g.label}
                </span>
                {currentGoal === g.id && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      color: 'var(--info)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 900,
                    }}
                  >
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {currentGoal && (
        <div
          style={{
            fontSize: 12,
            color: 'var(--subtext)',
            marginTop: 8,
            padding: '8px 12px',
            background: 'var(--bar-bg)',
            borderRadius: 8,
            lineHeight: 1.5,
            marginBottom: 10,
          }}
        >
          {currentGoal === 'heritage'
            ? '🇭🇷 Tailors your AI practice, stories, and shortcuts toward family vocabulary, traditions, and diaspora life'
            : currentGoal === 'family'
              ? '👨‍👩‍👧 Tailors your AI practice and shortcuts toward family conversations and everyday phrases'
              : currentGoal === 'partner'
                ? "💑 Tailors your practice toward your partner's language and cultural context"
                : currentGoal === 'travel'
                  ? '✈️ Tailors your AI practice and shortcuts toward practical phrases, transport, and dining'
                  : currentGoal === 'culture'
                    ? '📖 Tailors your recommendations toward history, art, music, and cultural depth'
                    : currentGoal === 'fluent'
                      ? '🗣️ Balances your practice across all skills — grammar, vocabulary, speaking, and writing'
                      : 'Select a goal to personalize your learning path'}
          {['heritage', 'family', 'partner', 'travel', 'culture'].includes(currentGoal) && (
            <span> The full course stays available with every goal.</span>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
