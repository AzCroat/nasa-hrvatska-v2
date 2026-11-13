// tieredExplanations.test.tsx — a wrong answer is explained in words the learner has been
// taught (owner, 2026-11-12). The report: asking for a fuller explanation talked about
// singular/plural and padeži to a learner in Unit 1, lessons 1–3, who had met neither.
// The explanation was correct and confusing, because its VOCABULARY had not been introduced.
//
// Pinned here: the vocabulary rule (lesson → words), the letters-that-differ fact, the
// free panel and the AI request both honouring it, and the "even simpler" ladder.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { readFileSync } from 'node:fs';

const aiPost = vi.fn();
vi.mock('../lib/aiPost', () => ({ _aiPost: (...a: unknown[]) => aiPost(...a) }));

import {
  TERMS_INTRODUCED_BY,
  ALL_GRAMMAR_TERMS,
  termsForOpenLessons,
  readTaughtTerms,
  mayNameCase,
} from '../lib/taughtTerms';
import { formDiff, diffSentence, contrastAnswers } from '../lib/answerContrast';
import WrongAnswerHelp from '../components/shared/WrongAnswerHelp';
import { filledSentence } from '../components/shared/AnswerDiff';
import AppContext from '../context/AppContext';
import { buildCourseUnits } from '../lib/courseUnits';
import { markLessonComplete, readCompletedLessons } from '../lib/curriculumProgress';
import { recordUnitTest, recordUnitProduction } from '../lib/courseUnitProgress';
import type { CurriculumEntry } from '../lib/curriculum';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);
const seedSpine = () => localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));
const completeThrough = (lessonId: string) => {
  // complete every lesson up to and including `lessonId`, in COURSE order (`order` is
  // per level, so sorting the spine by it would mix the levels). A unit read through in
  // full is also MASTERED (test + both production halves), as a learner walking the
  // course would have to, so the course serves the next unit's lesson as TODAY's.
  for (const u of UNITS) {
    let stop = false;
    for (const l of u.lessons) {
      markLessonComplete(l.id, '2026-11-01');
      if (l.id === lessonId) {
        stop = true;
        break;
      }
    }
    if (u.lessons.every((l) => readCompletedLessons().has(l.id))) {
      recordUnitTest(u.id, 15, 15, true);
      recordUnitProduction(u.id, 'write', 80);
      recordUnitProduction(u.id, 'speak', 0.8);
    }
    if (stop) return;
  }
};
const COURSE_ORDER = UNITS.flatMap((u) => u.lessons.map((l) => l.id));
/** The lesson immediately before `id` in course order. */
const lessonBefore = (id: string): string => {
  const i = COURSE_ORDER.indexOf(id);
  if (i < 1) throw new Error(`no lesson before ${id}`);
  return COURSE_ORDER[i - 1]!;
};
const GRAMMAR_WORD = new RegExp(`\\b(${ALL_GRAMMAR_TERMS.join('|')})\\b`, 'i');

const setScr = vi.fn();
function renderPanel(chosen: string, answer: string) {
  return render(
    <AppContext.Provider value={{ setScr, currentScreen: 'accdrill' } as never}>
      <WrongAnswerHelp chosen={chosen} answer={answer} context="Vidim ____." type="drill" />
    </AppContext.Provider>,
  );
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  aiPost.mockReset();
  aiPost.mockResolvedValue({
    ok: true,
    json: async () => ({ explanation: 'e', rule: 'r', tip: 't', example: 'x' }),
  });
});

describe('which grammar words a learner has earned', () => {
  it('a brand-new learner has been taught NONE', () => {
    seedSpine();
    expect(readTaughtTerms()!.size).toBe(0);
  });

  it('plural comes with the pronoun lesson, and the cases not before the cases lesson', () => {
    seedSpine();
    // Positions DERIVED from the spine (A1 grew to 100 lessons; hardcoded positions
    // went stale). Unit 1, before pronouns-biti: neither singular/plural nor gender. The
    // pronoun and biti tables (pronouns-biti) are where A1 first says singular and plural
    // (re-derived 2026-11-13 from the book-aligned lessons).
    completeThrough(lessonBefore(lessonBefore('pronouns-biti')));
    const unit1 = readTaughtTerms()!;
    expect(unit1.has('plural')).toBe(false);
    expect(unit1.has('gender')).toBe(false);
    // Complete everything before `gender`, so TODAY is gender.
    completeThrough(lessonBefore('gender'));
    const learningGender = readTaughtTerms()!;
    expect(learningGender.has('gender')).toBe(true); // being taught today, so allowed
    expect(learningGender.has('plural')).toBe(true); // pronouns-biti is done
    // Complete everything before `cases`: plural is open, cases are not (TODAY is the
    // lesson immediately before cases, which introduces no case word).
    expect(COURSE_ORDER.indexOf('plural-nouns')).toBeLessThan(COURSE_ORDER.indexOf('cases') - 1);
    completeThrough(lessonBefore(lessonBefore('cases')));
    const unit3 = readTaughtTerms()!;
    expect(unit3.has('plural')).toBe(true);
    expect(unit3.has('case')).toBe(false);
    expect(unit3.has('accusative')).toBe(false);
  });

  it('a case is named only once ITS lesson is open — and only with the idea of "case"', () => {
    const open = new Set(['cases', 'accusative-intro']);
    const t = termsForOpenLessons(open);
    expect(mayNameCase('A', t)).toBe(true);
    expect(mayNameCase('G', t)).toBe(false);
    // the accusative lesson alone does not license saying "case"
    expect(mayNameCase('A', termsForOpenLessons(new Set(['accusative-intro'])))).toBe(false);
  });

  it('ABSENCE NEVER BLANKS THE EXPLANATION: no spine means unknown, which names everything', () => {
    expect(readTaughtTerms()).toBeNull();
    expect(mayNameCase('G', null)).toBe(true);
  });

  it('every word the table introduces is a lesson that exists in the spine', () => {
    const ids = new Set(SPINE.map((e) => e.id));
    for (const id of Object.keys(TERMS_INTRODUCED_BY)) expect(ids.has(id), id).toBe(true);
  });
});

describe('the letters that differ — computed, never guessed', () => {
  it('names the ending change in plain words, with no grammar term', () => {
    const d = formDiff('kavu', 'kava')!;
    expect(d.kind).toBe('ending');
    expect([d.common, d.chosenTail, d.answerTail]).toEqual(['kav', 'u', 'a']);
    expect(diffSentence(d)).toBe('Only the ending is different: you wrote -u, it needs -a.');
    expect(diffSentence(d)).not.toMatch(GRAMMAR_WORD);
  });

  it('handles an added or missing ending', () => {
    expect(diffSentence(formDiff('grad', 'grada')!)).toContain('it needs -a added');
    expect(diffSentence(formDiff('grada', 'grad')!)).toContain('does not take the -a');
  });

  it('claims NOTHING for two words that begin differently', () => {
    const d = formDiff('mene', 'njega')!;
    expect(d.kind).toBe('word');
    expect(diffSentence(d)).toBeNull();
    expect(formDiff('idem', 'ići')!.kind).toBe('word'); // an irregular pair
  });

  it('is null for identical words and for multi-word options', () => {
    expect(formDiff('kava', 'Kava')).toBeNull();
    expect(formDiff('mi ju', 'ju mi')).toBeNull();
  });
});

describe('the correct word is shown inside its sentence', () => {
  it('fills the blank and drops a trailing bracketed cue', () => {
    expect(filledSentence('Vidim ____.', 'kavu')).toBe('Vidim kavu.');
    expect(filledSentence('Nemam _____ (novac).', 'novca')).toBe('Nemam novca.');
  });
  it('is null when the prompt has no blank, so nothing is invented', () => {
    expect(filledSentence('Koji padež?', 'kavu')).toBeNull();
    expect(filledSentence(undefined, 'kavu')).toBeNull();
  });
  it('is on the panel, with the correct word underlined in it', () => {
    seedSpine();
    renderPanel('kavi', 'kavu');
    const line = screen.getByTestId('diff-in-sentence');
    expect(line.textContent).toBe('In the sentence: Vidim kavu.');
    expect(line.textContent).not.toMatch(GRAMMAR_WORD);
  });
});

describe('the free contrast honours the learner’s vocabulary', () => {
  it('names the cases when they are taught, and not when they are not', () => {
    const taught = termsForOpenLessons(
      new Set(['cases', 'accusative-intro', 'genitive-intro', 'plural-nouns']),
    );
    const some = contrastAnswers('kuću', 'kuće', taught)!;
    expect(some.chosen.readings.join(' ')).toMatch(/accusative/);
    const none = contrastAnswers('kuću', 'kuće', new Set())!;
    expect(none.chosen.readings).toEqual([]);
    expect(none.answer.readings).toEqual([]);
    expect(none.headline).toBeUndefined();
  });

  it('unknown vocabulary leaves the old behaviour exactly', () => {
    const c = contrastAnswers('gradu', 'gradom', null)!;
    expect(c.headline).toMatch(/never be the same case/);
  });
});

describe('the panel a Unit-1 learner sees', () => {
  it('shows the two words with the differing letters marked, and says no grammar word', () => {
    seedSpine();
    renderPanel('kavu', 'kava');
    expect(screen.getByTestId('answer-diff')).toBeTruthy();
    expect(screen.getByTestId('diff-chosen').textContent).toBe('kavu');
    expect(screen.getByTestId('diff-answer').textContent).toBe('kava');
    const marked = screen.getAllByTestId('diff-letters').map((e) => e.textContent);
    expect(marked).toEqual(['u', 'a']);
    expect(screen.getByTestId('diff-sentence').textContent).toContain('Only the ending');
    // THE REPORTED DEFECT: no case, singular or plural talk in front of a learner who
    // has not been taught it.
    expect(screen.getByTestId('wrong-answer-help').textContent).not.toMatch(GRAMMAR_WORD);
  });

  it('a learner who HAS reached the accusative is told which case', () => {
    seedSpine();
    completeThrough('accusative-intro');
    renderPanel('kavi', 'kavu');
    expect(screen.getByTestId('answer-contrast')).toBeTruthy();
  });

  it('the AI request carries what the learner has been taught, the computed diff, and no more turns', async () => {
    seedSpine();
    renderPanel('kavu', 'kava');
    expect(aiPost).not.toHaveBeenCalled(); // layer 3 is still behind the button
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await waitFor(() => expect(aiPost).toHaveBeenCalledTimes(1));
    const body = aiPost.mock.calls[0]![1] as Record<string, unknown>;
    expect(body.taught).toEqual([]); // a new learner: no grammar words at all
    expect(body.diff).toEqual({ kind: 'ending', chosenTail: 'u', answerTail: 'a' });
    expect(body.simpler).toBeUndefined();
  });

  it('sends NO list when the course has not loaded (the endpoint then glosses)', async () => {
    renderPanel('kavu', 'kava');
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await waitFor(() => expect(aiPost).toHaveBeenCalledTimes(1));
    expect((aiPost.mock.calls[0]![1] as Record<string, unknown>).taught).toBeUndefined();
  });

  it('"Show me even simpler" is a second, explicit press that asks for the simple form', async () => {
    seedSpine();
    renderPanel('kavu', 'kava');
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    const simpler = await screen.findByTestId('drill-explain-simpler');
    expect(aiPost).toHaveBeenCalledTimes(1);
    fireEvent.click(simpler);
    await waitFor(() => expect(aiPost).toHaveBeenCalledTimes(2));
    expect((aiPost.mock.calls[1]![1] as Record<string, unknown>).simpler).toBe(true);
    // and the simple answer does not offer to go simpler again
    await waitFor(() => expect(screen.queryByTestId('drill-explain-simpler')).toBeNull());
  });
});

describe('the endpoint tells the model to use only the taught words', () => {
  const src = readFileSync('functions/api/explain-error.js', 'utf8')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  it('puts the list, the computed fact and the simpler flag in the model request', () => {
    expect(src).toMatch(/taught only these grammar words/);
    expect(src).toMatch(/taught NO grammar words yet/);
    expect(src).toMatch(/Fact computed by the app/);
    expect(src).toMatch(/asked for this SIMPLER/);
  });
  it('no longer tells the model to name the case', () => {
    expect(src).not.toMatch(/Name the grammar rule, case, or pattern/);
    expect(src).not.toMatch(/Be specific about case, tense, or pattern/);
  });
});

describe('the early lessons really are before the cases', () => {
  it('plural-nouns is in Unit 2 and cases comes in a later unit, after the subject-form units', () => {
    const unitOf = (id: string) => UNITS.find((u) => u.lessons.some((l) => l.id === id))!.index;
    // Unit 1 (lessons 1–5) never needs singular/plural or a case word: that is the
    // reported defect's own premise, so plural stays out of Unit 1.
    expect(unitOf('plural-nouns')).toBe(2);
    expect(unitOf('plural-nouns')).toBeLessThan(unitOf('cases'));
    // Every lesson that introduces a case name sits AFTER `cases` itself.
    const caseLessons = Object.entries(TERMS_INTRODUCED_BY)
      .filter(
        ([id, terms]) =>
          id !== 'cases' && COURSE_ORDER.includes(id) && terms.some((t) => /ative$/.test(t)),
      )
      .map(([id]) => id);
    expect(caseLessons.length).toBeGreaterThan(0);
    for (const id of caseLessons)
      expect(COURSE_ORDER.indexOf(id), id).toBeGreaterThan(COURSE_ORDER.indexOf('cases'));
  });
});
