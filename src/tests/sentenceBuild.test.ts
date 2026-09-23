/**
 * sentenceBuild.test.ts — the rung between imitation and free speech.
 *
 * OWNER DIRECTIVE, 2026-09-23: "In guided speaking we need to begin with
 * sentences, not paragraphs. We need to be building up speaking … How can we
 * make this a more effective solution to help guide users to become more
 * grammatically correct in speaking?"
 *
 * Measured before building: Guided Speaking ran LISTEN → REHEARSE → SPEAK, where
 * REHEARSE repeats a FIXED phrase and SPEAK wants free production at a 15-word
 * floor against a 31-word model at A1 — and `a1-introduce` asks for four things
 * at once. Nothing asked the learner to CONSTRUCT one sentence, and the SPEAK
 * checklist grades by substring presence, which cannot tell a right case ending
 * from a wrong one.
 */
import { describe, it, expect } from 'vitest';
import { gradeBuild } from '../lib/sentenceBuild';
import { decline } from '../lib/croatianMorphology';
import { SPEAKING_CURRICULUM } from '../data/speakingCurriculum';

const COFFEE = {
  cue: 'Say: I would like a coffee.',
  answer: 'Želim kavu.',
  focus: {
    lemma: 'kava',
    requiredCase: 'A' as const,
    why: 'The coffee receives the action.',
  },
};

describe('gradeBuild — it grades the GRAMMAR POINT, not the sentence', () => {
  it('accepts the model answer', () => {
    expect(gradeBuild('Želim kavu.', COFFEE).ok).toBe(true);
  });

  it('accepts the required form in the learner OWN wording, diacritics dropped', () => {
    // This is speech, not dictation. A recogniser drops diacritics constantly and
    // a learner may pad the sentence; neither is a grammar mistake.
    expect(gradeBuild('Zelim kavu molim', COFFEE).ok).toBe(true);
    expect(gradeBuild('Dobar dan, ja bih kavu', COFFEE).ok).toBe(true);
  });

  it('names the case they produced AND the one required, with the reason', () => {
    const v = gradeBuild('Želim kava', COFFEE);
    expect(v.ok).toBe(false);
    if (v.ok) return;
    expect(v.kind).toBe('wrong-form');
    if (v.kind !== 'wrong-form') return;
    expect(v.said).toBe('kava');
    expect(v.required).toBe('kavu');
    expect(v.message).toContain('accusative');
    expect(v.message).toContain('kavu');
  });

  it('a SELF-CORRECTION counts as right — people fix themselves mid-sentence', () => {
    // "kava… kavu" is what a learner actually does aloud. The required form is
    // checked BEFORE the loop that hunts for a wrong one, because a Set iterates
    // in insertion order: without that, the wrong first word wins and the learner
    // is corrected for a mistake they had already fixed.
    // FOUND BY MUTATION — deleting the fast path broke nothing until this test
    // existed, which meant the guard could not tell a redundant line from a
    // load-bearing one.
    expect(gradeBuild('kava… kavu', COFFEE).ok).toBe(true);
    expect(gradeBuild('Želim kava, ne, želim kavu', COFFEE).ok).toBe(true);
  });

  it('reports EVERY reading an ambiguous ending permits, never one', () => {
    // `kave` is genitive singular AND nominative/accusative/vocative plural.
    // Naming a single case would be wrong most of the time — the morphology
    // module's honesty rule, inherited.
    const v = gradeBuild('Pijem kave', COFFEE);
    expect(v.ok).toBe(false);
    if (v.ok || v.kind !== 'wrong-form') return;
    expect(v.message).toContain('genitive singular');
    expect(v.message).toContain('plural');
  });

  it('says NOTHING about case when the word is simply absent', () => {
    // They said an unrelated noun — inventing a case error would be a claim the
    // app cannot support.
    const v = gradeBuild('Želim čaj', COFFEE);
    expect(v.ok).toBe(false);
    if (v.ok) return;
    expect(v.kind).toBe('not-yet');
  });

  it('an empty transcript is its own verdict, not a wrong answer', () => {
    const v = gradeBuild('   ', COFFEE);
    expect(v.ok).toBe(false);
    if (v.ok) return;
    expect(v.kind).toBe('empty');
  });

  it('costs nothing — the module imports no AI surface', async () => {
    // COMMENTS STRIPPED FIRST. The first draft matched the raw file and failed on
    // this module's own docstring, which NAMES /api/speaking-coach while
    // explaining why the grading is rule-based. Prose about a thing is not a call
    // to it — the same strip the Croatian-lint census and the CodeQL-trigger
    // guard both need, and in the dangerous direction: unstripped, an unrelated
    // mention would read as a violation and a real one could hide behind a
    // comment.
    const raw = await import('node:fs').then((fs) =>
      fs.readFileSync('src/lib/sentenceBuild.ts', 'utf8'),
    );
    const code = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    expect(code).not.toMatch(/_aiPost|requestSpeakingCoach|fetch\(/);
    expect(code).not.toMatch(/['\`]\/api\//);
  });
});

describe('the authored build sentences', () => {
  const withBuild = SPEAKING_CURRICULUM.filter((u) => (u.build?.length ?? 0) > 0);

  it('cover every A1 unit', () => {
    const a1 = SPEAKING_CURRICULUM.filter((u) => u.level === 'A1');
    expect(a1.length).toBeGreaterThan(0);
    for (const u of a1) expect(u.build?.length ?? 0).toBeGreaterThanOrEqual(3);
  });

  it('EVERY model answer passes its own grader', () => {
    // The writing and speaking curricula already hold this rule: an exemplar
    // that misses its own bar teaches the learner the bar is decorative. Here it
    // also catches a focus whose required form simply is not in the answer.
    for (const u of withBuild) {
      for (const b of u.build!) {
        const v = gradeBuild(b.answer, b);
        expect(v.ok, `${u.id}: model "${b.answer}" fails its own check`).toBe(true);
      }
    }
  });

  it('every focus lemma actually declines, and the required cell exists', () => {
    // A lemma the engine cannot decline makes the focus branch fall through to
    // phrase matching — a grammar check that silently never runs. That is the
    // exact defect the flat-table bug would have shipped.
    for (const u of withBuild) {
      for (const b of u.build!) {
        if (!b.focus) continue;
        const d = decline(b.focus.lemma, b.focus.gender);
        expect(d, `${u.id}: ${b.focus.lemma} has no paradigm`).toBeTruthy();
        const cell = (d!.forms as unknown as Record<string, string>)[
          `${b.focus.requiredCase}${b.focus.number ?? 'sg'}`
        ];
        expect(cell, `${u.id}: ${b.focus.lemma} has no ${b.focus.requiredCase} cell`).toBeTruthy();
      }
    }
  });

  it('and the required form really appears in the model answer', () => {
    for (const u of withBuild) {
      for (const b of u.build!) {
        if (!b.focus) continue;
        const d = decline(b.focus.lemma, b.focus.gender)!;
        const cell = (d.forms as unknown as Record<string, string>)[
          `${b.focus.requiredCase}${b.focus.number ?? 'sg'}`
        ];
        expect(b.answer.toLowerCase(), `${u.id}: "${b.answer}" does not contain ${cell}`).toContain(
          cell.toLowerCase(),
        );
      }
    }
  });

  it('each one asks for a SENTENCE, not a paragraph', () => {
    // The whole point of the rung: if these grew into paragraphs they would be a
    // second SPEAK stage rather than the step below it.
    for (const u of withBuild) {
      for (const b of u.build!) {
        expect(b.answer.split(/\s+/).length, `${u.id}: "${b.answer}"`).toBeLessThanOrEqual(8);
      }
    }
  });
});
