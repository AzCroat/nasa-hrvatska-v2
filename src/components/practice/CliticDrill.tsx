import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';
import { CLITICS_DRILL_DATA, CLITICS_MODE_LABELS } from '../../data/drills/b2/cliticsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function CliticDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="clitic"
      title={'🔗 Clitic Drill'}
      subtitle={'Master the hardest rule in Croatian'}
      modeLabels={CLITICS_MODE_LABELS}
      data={CLITICS_DRILL_DATA}
      praise={{
        perfect: 'Perfect! Clitic master! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practicing — clitics take time!',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="clitics" onStart={start} />}
      explainType="case_drill"
    />
  );
}
