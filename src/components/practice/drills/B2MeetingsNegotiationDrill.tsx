// src/components/practice/drills/B2MeetingsNegotiationDrill.tsx
//
// Engine-backed drill for the B2 lesson `meetings-negotiation`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/meetingsNegotiationDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MEETINGS_NEGOTIATION_DRILL_DATA,
  MEETINGS_NEGOTIATION_MODE_LABELS,
} from '../../../data/drills/b2/meetingsNegotiationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2MeetingsNegotiationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2meetingsnegotiation"
      title={'🗣️ Sastanci'}
      subtitle="Practice what the lesson taught"
      modeLabels={MEETINGS_NEGOTIATION_MODE_LABELS}
      data={MEETINGS_NEGOTIATION_DRILL_DATA}
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
