// src/lib/__tests__/checkpointExam.test.ts
import { describe, it, expect } from 'vitest';
import { buildCheckpointExam } from '../checkpointExam.js';
import { getCertificationState } from '../cefrCertification.js';

function seededRng(seq: number[]) {
  let i = 0;
  return () => seq[i++ % seq.length]!;
}

describe('buildCheckpointExam (B1)', () => {
  // await: the item banks are code-split, so the builder is async. The exam
  // content it produces is unchanged — only how the banks arrive.
  it('produces renderable B1 questions + 2 retention from below + a speaking section', async () => {
    const exam = await buildCheckpointExam(
      'B1',
      getCertificationState(),
      [],
      seededRng([0, 0.3, 0.6, 0.1, 0.5, 0.2]),
    );
    // 3 core (B1) + 2 retention (below B1)
    expect(exam.questions.length).toBe(5);
    expect(exam.questions.every((q) => q.options.length === 4 && q.prompt.length > 0)).toBe(true);
    expect(exam.questions.filter((q) => q.level === 'B1').length).toBe(3);
    expect(exam.questions.filter((q) => q.level !== 'B1').length).toBe(2);
    expect(exam.speaking.tasks.length).toBeGreaterThanOrEqual(1);
    expect(exam.speaking.level).toBe('B1');
  });
});

describe('buildCheckpointExam (C2)', () => {
  // C2 is the cap: no advancement test exists, so the checkpoint pulls from the
  // dedicated C2 mastery bank (getCheckpointSetFor). Before that bank existed,
  // a C2-certified learner's checkpoint had ZERO current-level questions and no
  // speaking section — this pins the fix.
  it('produces C2 core questions + retention + a C2 speaking section', async () => {
    const exam = await buildCheckpointExam(
      'C2',
      getCertificationState(),
      [],
      seededRng([0, 0.3, 0.6, 0.1, 0.5, 0.2]),
    );
    expect(exam.questions.length).toBe(5);
    expect(exam.questions.filter((q) => q.level === 'C2').length).toBe(3);
    expect(exam.questions.filter((q) => q.level !== 'C2').length).toBe(2);
    expect(exam.questions.every((q) => q.options.length === 4 && q.prompt.length > 0)).toBe(true);
    expect(exam.speaking.tasks.length).toBeGreaterThanOrEqual(1);
    expect(exam.speaking.level).toBe('C2');
  });
});
