// src/components/practice/drills/InvitationsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/invitationsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INVITATIONS_DRILL_DATA,
  INVITATIONS_MODE_LABELS,
} from '../../../data/drills/invitationsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function InvitationsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dogovor"
      title="🗓️ Dogovori i pozivi"
      subtitle="Sutra idem u Zagreb — sadašnje vrijeme za dogovorenu budućnost"
      modeLabels={INVITATIONS_MODE_LABELS}
      data={INVITATIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — dogovoreno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Dogovori traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
