// src/components/practice/drills/A2CelebrationsHolidaysDrill.tsx
//
// Engine-backed drill for the A2 lesson `celebrations-holidays`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/celebrationsHolidaysDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CELEBRATIONS_HOLIDAYS_DRILL_DATA,
  CELEBRATIONS_HOLIDAYS_MODE_LABELS,
} from '../../../data/drills/a2/celebrationsHolidaysDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2CelebrationsHolidaysDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2celebrationsholidays"
      title={'🎄 Blagdani i slavlja'}
      subtitle="Practice what the lesson taught"
      modeLabels={CELEBRATIONS_HOLIDAYS_MODE_LABELS}
      data={CELEBRATIONS_HOLIDAYS_DRILL_DATA}
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
