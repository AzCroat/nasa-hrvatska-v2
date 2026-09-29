import React, { useState } from 'react';

/**
 * All seven goals, in onboarding's order. This list held FOUR — `family`,
 * `elders` and `partner` were absent — so the three people-shaped goals, the
 * ones this app's diaspora learners actually pick, could not be chosen here at
 * all. The three new entries take onboarding's wording; the four that were
 * already here keep their own, which is why `goalListsAgree.test.ts` pins the ID
 * SET and deliberately not the copy.
 */
const GOALS = [
  {
    id: 'heritage',
    icon: '🇭🇷',
    label: 'Connect with my heritage',
    sub: 'Rediscover my Croatian roots',
  },
  {
    id: 'family',
    icon: '👨‍👩‍👧',
    label: 'Speak with family',
    sub: 'Talk to parents, grandparents, relatives',
  },
  {
    id: 'elders',
    icon: '👴👵',
    label: 'Za bake i djedove',
    sub: 'Connect with elderly relatives before time runs out',
  },
  {
    id: 'partner',
    icon: '💑',
    label: 'My partner is Croatian',
    sub: 'Navigate family gatherings, impress their parents',
  },
  { id: 'fluent', icon: '🗣️', label: 'Become fluent', sub: 'Hold real conversations' },
  { id: 'travel', icon: '✈️', label: 'Travel to Croatia', sub: 'Navigate & explore confidently' },
  {
    id: 'culture',
    icon: '🎵',
    label: 'Explore Croatian culture',
    sub: 'Music, history, traditions',
  },
];

/**
 * THERE WAS A THIRD STEP AND IT ASKED FOR SOMETHING NOBODY USED.
 *
 * "What's your connection to Croatia?", subtitled "Helps us tailor your
 * cultural content", offered diaspora / family / curious and wrote the answer
 * to `nh_connection` — a key read by NOTHING, anywhere in the app, and not in
 * the sync snapshot either. `onComplete` passed it along to a callback
 * (`() => setGoalModalDismissed(true)`) that ignores its argument entirely.
 *
 * That is worse than a dead key: it is a promise made to the learner in the
 * UI copy that the app does not keep — NEVER DO 13 pointed the other way,
 * where the app claims it will USE something it then discards. And it asked
 * a question step 1 had already asked: goal `heritage` ("Connect with my
 * heritage / Rediscover my Croatian roots") against connection `diaspora`
 * ("I have Croatian heritage / Family roots in Croatia"); goal
 * `family`/`partner` against connection `family` ("Partner or family
 * member"). `nh_goal` IS genuinely consumed — by StoryModeScreen and
 * MediaPlayerUtils among others, which is to say by the cultural content the
 * third step claimed to tailor.
 *
 * Owner decision, 2026-09-15: remove the step. Nothing is lost, because the
 * distinction already lives in a key the app actually reads, and onboarding
 * costs one tap less.
 *
 * AND THE SECOND STEP WENT TOO (owner decision, 2026-09-29). "How much time can
 * you commit daily?" — 5 / 15 / 30 minutes, written to `nh_daily_goal_xp` and
 * drawn by DailyGoalCard on Home as a bar that turned green and said "Today's
 * goal — complete!" at or before the moment the core session ended, whatever
 * was chosen. A learner-chosen floor is the thing the Stretch bar (redesign
 * increment 6) exists to replace: "if they are unmotivated they may select what
 * is easy — assume you are using the application to become fluent." The card,
 * the key, its sync and both onboarding surfaces that asked the question are
 * gone; the modal asks ONE question, the goal, which the app reads.
 */
interface GoalSetterModalProps {
  onComplete: (data: { goal: string | null }) => void;
}

export default function GoalSetterModal({ onComplete }: GoalSetterModalProps) {
  const [step] = useState(0); // one step: the goal
  const [goal, setGoal] = useState<string | null>(null);

  const steps: Array<{
    q: string;
    sub: string;
    options: Array<{
      id: string | number;
      icon?: string;
      label?: string;
      emoji?: string;
      sub?: string;
      xp?: number;
    }>;
    selected: string | number | null;
    onSelect: (v: string | number) => void;
  }> = [
    {
      q: "What's your main goal?",
      sub: "We'll personalize your learning path",
      options: GOALS,
      selected: goal,
      onSelect: (v) => setGoal(String(v)),
    },
  ];
  const LAST = steps.length - 1;

  const cur = steps[step]!;
  const canNext = cur.selected !== null;

  const handleNext = () => {
    // Persist the goal so re-visiting HomeTab never re-shows the modal, and close.
    try {
      if (goal) localStorage.setItem('nh_goal', goal);
      localStorage.setItem('nh_goal_set', '1');
    } catch (_) {}
    onComplete({ goal });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        animation: 'fade-in .25s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 480,
          background: 'var(--app-bg)',
          borderRadius: '24px 24px 0 0',
          padding: '28px 20px 40px',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
          animation: 'slide-up .35s cubic-bezier(0.34,1.56,0.64,1) both',
        }}
      >
        {/* Progress dots — one per step, DERIVED. This was the literal
            `[0, 1, 2]`, a third place that had to agree with the step list and
            nothing making it. */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 24 }}>
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === step ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background: i <= step ? 'var(--info)' : 'var(--bar-bg)',
                transition: 'width .25s ease, background .25s ease',
              }}
            />
          ))}
        </div>

        {/* Question */}
        <div
          style={{
            marginBottom: 6,
            fontSize: 20,
            fontWeight: 900,
            color: 'var(--heading)',
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.25,
          }}
        >
          {cur.q}
        </div>
        <div style={{ fontSize: 13, color: 'var(--subtext)', fontWeight: 500, marginBottom: 20 }}>
          {cur.sub}
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {cur.options.map((opt) => {
            const isSelected = cur.selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => cur.onSelect(opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 16px',
                  borderRadius: 14,
                  cursor: 'pointer',
                  textAlign: 'left',
                  background: isSelected ? 'rgba(14,116,144,0.1)' : 'var(--card)',
                  border: isSelected ? '2px solid var(--info)' : '1.5px solid var(--card-b)',
                  transition: 'border-color .15s, background .15s',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <span style={{ fontSize: 26, flexShrink: 0, lineHeight: 1 }}>{opt.icon}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: 'var(--heading)',
                      lineHeight: 1.2,
                    }}
                  >
                    {opt.label}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 2 }}>
                    {opt.sub}
                  </div>
                </div>
                {isSelected && (
                  <span style={{ color: 'var(--info)', fontSize: 18, flexShrink: 0 }}>✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={handleNext}
          disabled={!canNext}
          style={{
            width: '100%',
            height: 52,
            borderRadius: 14,
            border: 'none',
            cursor: canNext ? 'pointer' : 'default',
            background: canNext ? 'var(--fill-info)' : 'var(--bar-bg)',
            color: canNext ? '#fff' : 'var(--subtext)',
            fontSize: 16,
            fontWeight: 800,
            fontFamily: "'Outfit', sans-serif",
            transition: 'background .2s, color .2s',
            letterSpacing: '.01em',
          }}
        >
          {step < LAST ? 'Continue →' : "Let's Start Learning! 🇭🇷"}
        </button>
      </div>
    </div>
  );
}
