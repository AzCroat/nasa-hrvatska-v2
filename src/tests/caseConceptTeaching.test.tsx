// src/tests/caseConceptTeaching.test.tsx
//
// Concept-teaching pins (owner directive, 2026-08-18). The audit finding
// these protect: the app's only "what is a case" explanation was ~90 words
// gated at B1 while every case drill unlocked at A1 — English speakers met
// "genitive" as a quiz label, never as an idea. These pins keep the teaching
// in front of the testing.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { CASE_CONCEPTS, caseConceptById, WHY_WORDS_CHANGE } from '../data/caseConcepts';
import CaseConceptIntro, { CASE_PRIMER_SEEN_KEY } from '../components/practice/CaseConceptIntro';

const __dir = dirname(fileURLToPath(import.meta.url));
const lessonsSrc = readFileSync(
  join(__dir, '../../functions/api/content/_data/lessons.js'),
  'utf8',
);
const explainSrc = readFileSync(join(__dir, '../../functions/api/explain-error.js'), 'utf8');

// Which drill teaches which concept — every case drill must open with its card.
const DRILL_TO_CONCEPT = {
  'GenitiveDrill.tsx': 'genitive',
  'AccusativeDrill.tsx': 'accusative',
  'DativeDrill.tsx': 'dative',
  'LocativeDrill.tsx': 'locative',
  'InstrumentalDrill.tsx': 'instrumental',
  'NominativeDrill.tsx': 'nominative',
  'CliticDrill.tsx': 'clitics',
};

describe('caseConcepts — the content contract', () => {
  it('covers all 7 cases plus clitics', () => {
    const ids = CASE_CONCEPTS.map((c) => c.id);
    for (const id of [
      'nominative',
      'genitive',
      'dative',
      'accusative',
      'locative',
      'instrumental',
      'vocative',
      'clitics',
    ]) {
      expect(ids, `missing concept ${id}`).toContain(id);
    }
  });

  it('every concept teaches through an English hook and a real contrast', () => {
    for (const c of CASE_CONCEPTS) {
      expect(c.whatItDoes.length, `${c.id} whatItDoes`).toBeGreaterThan(60);
      expect(c.englishBridge, `${c.id} bridge must anchor to English`).toMatch(/English/);
      expect(c.example.hr.length, `${c.id} example`).toBeGreaterThan(0);
      expect(c.counterex.hr.length, `${c.id} counterexample`).toBeGreaterThan(0);
      expect(c.example.note.length, `${c.id} example note`).toBeGreaterThan(10);
    }
  });

  it('the global primer carries the he/him/his bridge', () => {
    expect(WHY_WORDS_CHANGE.body).toContain('HIM');
    expect(WHY_WORDS_CHANGE.body).toContain('HIS');
    expect(WHY_WORDS_CHANGE.body).toMatch(/who\/whom/);
  });

  it('every case drill mounts its matching concept intro (source pins)', () => {
    for (const [file, conceptId] of Object.entries(DRILL_TO_CONCEPT)) {
      const src = readFileSync(join(__dir, '../components/practice', file), 'utf8');
      expect(src, `${file} missing CaseConceptIntro`).toContain('CaseConceptIntro');
      expect(src, `${file} wrong conceptId`).toContain(`conceptId="${conceptId}"`);
      expect(caseConceptById(conceptId), `concept ${conceptId} must exist`).toBeTruthy();
      // The wrong-answer path requests a plain-English explanation.
      expect(src, `${file} missing explain wiring`).toContain('requestExplain');
    }
    // VocativeScreen has its own rules phase — it embeds the bridge instead.
    const voc = readFileSync(join(__dir, '../components/practice/VocativeScreen.tsx'), 'utf8');
    expect(voc).toContain("caseConceptById('vocative')");
  });
});

describe('CaseConceptIntro — teach first, never trap', () => {
  beforeEach(() => localStorage.clear());

  it('first-ever case drill shows the global primer; Start marks it seen', () => {
    const onStart = vi.fn();
    render(<CaseConceptIntro conceptId="genitive" onStart={onStart} />);
    expect(screen.getByTestId('case-primer')).toBeTruthy();
    expect(screen.getByTestId('case-english-bridge')).toBeTruthy();
    fireEvent.click(screen.getByTestId('case-intro-start'));
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem(CASE_PRIMER_SEEN_KEY)).toBe('1');
  });

  it('returning learners get the concept card but not the primer (one tap through)', () => {
    localStorage.setItem(CASE_PRIMER_SEEN_KEY, '1');
    render(<CaseConceptIntro conceptId="dative" onStart={vi.fn()} />);
    expect(screen.queryByTestId('case-primer')).toBeNull();
    expect(screen.getByTestId('case-primer-toggle')).toBeTruthy(); // remind-me stays available
    expect(screen.getByTestId('case-concept-card')).toBeTruthy();
  });

  it('an unknown concept id never blocks practice', () => {
    const onStart = vi.fn();
    render(<CaseConceptIntro conceptId="not-a-case" onStart={onStart} />);
    expect(onStart).toHaveBeenCalled();
  });
});

describe('the primer lesson and the plain-English explainer (source pins)', () => {
  it("the 'cases' lesson is unlocked at A1 — where the drills are", () => {
    const casesBlock = lessonsSrc.slice(
      lessonsSrc.indexOf("id: 'cases'"),
      lessonsSrc.indexOf("id: 'cases'") + 600,
    );
    expect(casesBlock).toContain("level: 'A1'");
  });

  it('the lesson carries the he/him/his English bridge slide', () => {
    expect(lessonsSrc).toContain('You Already Use Cases');
    expect(lessonsSrc).toContain('he / him / his');
  });

  it('the incoherent dative example is fixed', () => {
    expect(lessonsSrc).not.toContain('I give to the book');
    expect(lessonsSrc).toContain('Dajem knjigu sestri.');
  });

  it('explain-error accepts case_drill and demands plain English', () => {
    expect(explainSrc).toContain("'case_drill'");
    expect(explainSrc).toContain('NO FORMAL GRAMMAR BACKGROUND');
    expect(explainSrc).toContain('never heard terms like');
  });
});
