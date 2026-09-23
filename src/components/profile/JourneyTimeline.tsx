import React from 'react';
import { getJourneyMilestones } from '../../data';

interface MilestoneDef {
  icon: string;
  label: string;
  msg: string;
}

/**
 * Milestones with a type this card knows by name.
 *
 * `name_day` is DELIBERATELY UNREACHABLE and kept with its reason: nothing in
 * `src` records that type today (`recordJourneyMilestone` is called with
 * `first_lesson`, `first_speaking` and `streak_<n>` and nothing else). It is the
 * harmless direction of the defect below — a label with no event, rather than an
 * event with no label — and `journeyTimeline.test.tsx` holds it honest in both
 * directions, so the day something starts recording it the exemption fails
 * rather than sitting here covering nothing.
 */
const MILESTONE_ICONS: Record<string, MilestoneDef> = {
  first_lesson: { icon: '📚', label: 'First Lesson', msg: 'Your Croatian journey begins!' },
  first_speaking: {
    icon: '🎤',
    label: 'First Speaking',
    msg: 'You spoke Croatian for the first time!',
  },
  name_day: { icon: '🎉', label: 'Name Day', msg: 'Sretan imendan!' },
  default: { icon: '🌟', label: 'Milestone', msg: 'A new achievement!' },
};

/** Bespoke copy for the streak lengths that have earned a line of their own. */
const STREAK_MSGS: Record<number, string> = {
  7: 'One full week of Croatian!',
  14: 'Two weeks straight — the habit is forming!',
  21: 'Three weeks running!',
  30: '30 days of dedication!',
  50: 'Incredible consistency!',
  60: 'Two months without missing a day!',
  100: 'Champion-level commitment!',
  365: 'One full year — Čestitamo!',
};

/**
 * THE STREAK LABEL IS DERIVED FROM THE NUMBER, NOT LOOKED UP (2026-09-23).
 *
 * `MILESTONE_ICONS` used to carry one hand-written row per streak length and had
 * five of `STREAK_MILESTONES`' eight: **14, 21 and 60 were missing**. The store
 * records `streak_14` faithfully, with the count in its own meta, and this card
 * rendered it as "🌟 Milestone — A new achievement!". Three of the eight streak
 * milestones — including the two most learners reach after the first week — were
 * anonymised by a list that had gone stale against the constant it restates.
 *
 * A hand-maintained list decays exactly like one in production, so this is a
 * derivation: any `streak_<n>` names its own n, for every value the constant
 * holds today and any value added to it later. The icon steps by threshold for
 * the same reason — a new milestone at 200 gets 🏆, not a blank.
 */
function streakDef(n: number): MilestoneDef {
  const icon = n >= 365 ? '👑' : n >= 100 ? '🏆' : n >= 50 ? '💎' : n >= 30 ? '🌟' : '🔥';
  return {
    icon,
    label: `${n}-Day Streak`,
    msg: STREAK_MSGS[n] ?? `${n} days in a row — keep going!`,
  };
}

export function milestoneDef(type: string): MilestoneDef {
  const m = /^streak_(\d+)$/.exec(type);
  if (m) return streakDef(Number(m[1]));
  return MILESTONE_ICONS[type] ?? MILESTONE_ICONS.default!;
}

export default function JourneyTimeline() {
  const milestones = getJourneyMilestones().reverse(); // newest first

  if (milestones.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '24px 16px', color: 'var(--subtext)' }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🇭🇷</div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>
          Your journey starts with your first lesson.
        </div>
        <div style={{ fontSize: 11, marginTop: 4 }}>
          Milestones will appear here as you progress.
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', paddingLeft: 24 }}>
      {/* Vertical line */}
      <div
        style={{
          position: 'absolute',
          left: 8,
          top: 0,
          bottom: 0,
          width: 2,
          background: 'var(--bar-bg)',
          borderRadius: 1,
        }}
      />

      {milestones.map((m: { type: string; date: string }, i: number) => {
        const def = milestoneDef(m.type);
        const date = new Date(m.date);
        const dateStr = date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
        return (
          <div key={i} style={{ position: 'relative', marginBottom: 16, paddingLeft: 20 }}>
            {/* Dot */}
            <div
              style={{
                position: 'absolute',
                left: -4,
                top: 4,
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#0e7490,#164e63)',
                border: '2px solid var(--card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 8,
                color: '#fff',
                fontWeight: 900,
              }}
            >
              ✓
            </div>

            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-b)',
                borderRadius: 12,
                padding: '10px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <span style={{ fontSize: 18 }}>{def.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--heading)' }}>
                    {def.label}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--subtext)', fontWeight: 600 }}>
                    {dateStr}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--subtext)', fontStyle: 'italic' }}>
                {def.msg}
              </div>
            </div>
          </div>
        );
      })}

      {/* Journey start */}
      <div style={{ position: 'relative', paddingLeft: 20 }}>
        <div
          style={{
            position: 'absolute',
            left: -4,
            top: 4,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: 'var(--bar-bg)',
            border: '2px solid var(--card)',
          }}
        />
        <div
          style={{ fontSize: 11, color: 'var(--subtext)', fontStyle: 'italic', padding: '8px 0' }}
        >
          Your journey begins here 🇭🇷
        </div>
      </div>
    </div>
  );
}
