// src/components/practice/drills/MeetingsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/meetingsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { MEETINGS_DRILL_DATA, MEETINGS_MODE_LABELS } from '../../../data/drills/meetingsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function MeetingsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="sastanci"
      title="🗣️ Sastanci"
      subtitle="Predlažem da + prezent, jer se subjekt mijenja"
      modeLabels={MEETINGS_MODE_LABELS}
      data={MEETINGS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — dogovoreno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Sastanci traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
