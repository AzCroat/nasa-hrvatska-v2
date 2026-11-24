import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';
import {
  ACCUSATIVE_DEEP_DRILL_DATA,
  ACCUSATIVE_DEEP_MODE_LABELS,
} from '../../data/drills/a2/accusativeDeepDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AccusativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="accusative"
      title={'Accusative Case'}
      subtitle={'Direct objects, animate/inanimate, motion prepositions'}
      modeLabels={ACCUSATIVE_DEEP_MODE_LABELS}
      data={ACCUSATIVE_DEEP_DRILL_DATA}
      praise={{
        perfect: 'Perfect! Accusative mastered!',
        good: 'Great work! Accusative is essential for direct objects!',
        more: 'Keep practicing — accusative marks the direct object of most verbs.',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="accusative" onStart={start} />}
      explainType="case_drill"
    />
  );
}
