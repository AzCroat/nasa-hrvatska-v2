// src/components/practice/drills/TimeCalendarDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/timeCalendarDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TIME_CALENDAR_DRILL_DATA,
  TIME_CALENDAR_MODE_LABELS,
} from '../../../data/drills/timeCalendarDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TimeCalendarDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vrijemea1"
      title="🕐 Vrijeme i kalendar"
      subtitle="pet sati, ponedjeljak, siječanj — the clock and the year"
      modeLabels={TIME_CALENDAR_MODE_LABELS}
      data={TIME_CALENDAR_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sat i kalendar su vaši! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Vrijeme traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
