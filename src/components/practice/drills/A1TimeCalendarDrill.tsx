// src/components/practice/drills/A1TimeCalendarDrill.tsx
//
// Engine-backed drill for the A1 lesson `time-calendar`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/timeCalendarDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TIME_CALENDAR_DRILL_DATA,
  TIME_CALENDAR_MODE_LABELS,
} from '../../../data/drills/a1/timeCalendarDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1TimeCalendarDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1timecalendar"
      title={'\ud83d\udd50 Vrijeme i kalendar'}
      subtitle="Practice what the lesson taught"
      modeLabels={TIME_CALENDAR_MODE_LABELS}
      data={TIME_CALENDAR_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
