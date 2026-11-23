// src/components/practice/drills/A2PlansInvitationsDrill.tsx
//
// Engine-backed drill for the A2 lesson `plans-invitations`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/plansInvitationsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLANS_INVITATIONS_DRILL_DATA,
  PLANS_INVITATIONS_MODE_LABELS,
} from '../../../data/drills/a2/plansInvitationsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2PlansInvitationsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2plansinvitations"
      title={'Making Plans'}
      subtitle="Practice what the lesson taught"
      modeLabels={PLANS_INVITATIONS_MODE_LABELS}
      data={PLANS_INVITATIONS_DRILL_DATA}
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
