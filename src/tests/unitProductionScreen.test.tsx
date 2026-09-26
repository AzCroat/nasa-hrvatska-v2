/**
 * unitProductionScreen — the other half of the bar, driven.
 *
 * THE THREE THINGS ONLY A DRIVEN TEST CAN SAY. That a graded task is RECORDED
 * against the unit (so the gate opens); that a REFUSED evaluator records
 * `unavailable` and tells the learner (so the gate opens anyway, because course
 * progress must not depend on a live AI service they do not control); and that the
 * mic is never required — the typed path counts identically, which is the rule
 * `GuidedSpeakingScreen` already holds.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const aiPost = vi.fn();
vi.mock('../lib/aiPost', () => ({ _aiPost: (...a: unknown[]) => aiPost(...a) }));
const coach = vi.fn();
vi.mock('../lib/speakingCoach', () => ({
  requestSpeakingCoach: (...a: unknown[]) => coach(...a),
}));
const recordMasteryEvent = vi.fn();
vi.mock('../lib/masteryLedger', () => ({
  recordMasteryEvent: (...a: unknown[]) => recordMasteryEvent(...a),
}));
const applyWritingErrorsToAdaptive = vi.fn();
vi.mock('../lib/adaptiveFeedback', () => ({
  applyWritingErrorsToAdaptive: (...a: unknown[]) => applyWritingErrorsToAdaptive(...a),
}));
vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn(), reportBoundaryError: vi.fn() }));
vi.mock('../lib/aiFailure', async (orig) => {
  const real = (await orig()) as Record<string, unknown>;
  return { ...real, reportAiFailure: vi.fn() };
});

import UnitProductionScreen, { UNIT_PRODUCTION_XP } from '../components/learn/UnitProductionScreen';
import { unitRecord, producedUnits, productionBlockedUnits } from '../lib/courseUnitProgress';
import { UNIT_WRITE_FLOOR, UNIT_SPEAK_FLOOR } from '../lib/unitProduction';
import type { CurriculumEntry } from '../lib/curriculum';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];

function seed(kind: 'write' | 'speak', unitId = 'A1-1'): void {
  localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));
  sessionStorage.setItem('nh_unit_production', `${unitId}|${kind}`);
}

function words(n: number): string {
  return Array.from({ length: n }, (_, i) => `rijec${i}`).join(' ');
}

function mount(award = vi.fn()) {
  return { award, ...render(<UnitProductionScreen goBack={vi.fn()} award={award} />) };
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  aiPost.mockReset();
  coach.mockReset();
  recordMasteryEvent.mockReset();
  applyWritingErrorsToAdaptive.mockReset();
});

describe('the written task', () => {
  it('states the brief from the unit’s own lessons and the word floor', async () => {
    seed('write');
    mount();
    expect(await screen.findByTestId('unit-production')).toBeTruthy();
    expect(screen.getByTestId('unit-production-count').textContent).toBe(
      `0 of ${UNIT_WRITE_FLOOR.A1} words`,
    );
    // An objective of the unit's first lesson, verbatim from the spine.
    const objective = SPINE.find((e) => e.id === 'alphabet')!.objectives[0]!;
    expect(screen.getByText(objective)).toBeTruthy();
  });

  it('will not submit below the floor', async () => {
    seed('write');
    mount();
    const input = await screen.findByTestId('unit-production-input');
    fireEvent.change(input, { target: { value: words(5) } });
    expect((screen.getByTestId('unit-production-submit') as HTMLButtonElement).disabled).toBe(true);
    expect(aiPost).not.toHaveBeenCalled();
  });

  it('grades, records against the unit, feeds the ledger and pays once', async () => {
    seed('write');
    aiPost.mockResolvedValue({
      ok: true,
      json: async () => ({ score: 78, changes: [{ errorType: 'case' }] }),
    });
    const { award } = mount();
    const input = await screen.findByTestId('unit-production-input');
    fireEvent.change(input, { target: { value: words(UNIT_WRITE_FLOOR.A1!) } });
    fireEvent.click(screen.getByTestId('unit-production-submit'));

    expect(await screen.findByTestId('unit-production-result')).toBeTruthy();
    expect(screen.getByText('78/100')).toBeTruthy();
    expect(unitRecord('A1-1')!.production!.writeScore).toBe(78);
    expect(unitRecord('A1-1')!.production!.wroteAt).toBeTruthy();
    // Written evidence at the unit's level, on the 0–1 scale the ledger takes.
    expect(recordMasteryEvent).toHaveBeenCalledWith(
      expect.objectContaining({ skill: 'writing', score: 0.78 }),
    );
    expect(applyWritingErrorsToAdaptive).toHaveBeenCalledWith(['case']);
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(UNIT_PRODUCTION_XP, 'writing');
  });

  it('sends the brief as the prompt, on the shared writeeval mode', async () => {
    seed('write');
    aiPost.mockResolvedValue({ ok: true, json: async () => ({ score: 60 }) });
    mount();
    const input = await screen.findByTestId('unit-production-input');
    fireEvent.change(input, { target: { value: words(30) } });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    await screen.findByTestId('unit-production-result');
    const [path, body] = aiPost.mock.calls[0]!;
    expect(path).toBe('/api/correct');
    expect((body as { mode: string }).mode).toBe('writeeval');
    expect((body as { prompt: string }).prompt).toContain('Show that you can:');
  });

  // THE SCORE DOES NOT GATE, and the learner is told so rather than left to guess.
  it('records a low score as done, and says the score is not a bar', async () => {
    seed('write');
    aiPost.mockResolvedValue({ ok: true, json: async () => ({ score: 12 }) });
    mount();
    fireEvent.change(await screen.findByTestId('unit-production-input'), {
      target: { value: words(30) },
    });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    await screen.findByTestId('unit-production-result');
    expect(unitRecord('A1-1')!.production!.wroteAt).toBeTruthy();
    expect(screen.getByText(/feedback, not a bar/i)).toBeTruthy();
  });
});

describe('the spoken task', () => {
  it('counts typed Croatian identically — the mic is never required', async () => {
    seed('speak');
    coach.mockResolvedValue({ ok: true, data: { overall: 0.82, scores: {} } });
    const { award } = mount();
    expect(await screen.findByTestId('unit-production')).toBeTruthy();
    expect(screen.getByTestId('unit-production-count').textContent).toBe(
      `0 of ${UNIT_SPEAK_FLOOR.A1} words`,
    );
    fireEvent.change(screen.getByTestId('unit-production-input'), {
      target: { value: words(UNIT_SPEAK_FLOOR.A1!) },
    });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    expect(await screen.findByTestId('unit-production-result')).toBeTruthy();
    expect(unitRecord('A1-1')!.production!.speakScore).toBe(0.82);
    expect(award).toHaveBeenCalledWith(UNIT_PRODUCTION_XP, 'speaking');
    // The coach records mastery itself; this screen must not double-count it.
    expect(recordMasteryEvent).not.toHaveBeenCalled();
  });

  it('offers the mic but does not depend on it', async () => {
    seed('speak');
    mount();
    const mic = await screen.findByTestId('unit-production-mic');
    expect(mic.textContent).toMatch(/type below, it counts the same/);
    // jsdom has no recogniser: pressing it must not throw or block the screen.
    fireEvent.click(mic);
    expect(screen.getByTestId('unit-production-input')).toBeTruthy();
  });
});

describe('a refused evaluator', () => {
  // COURSE PROGRESS MUST NOT DEPEND ON A LIVE AI SERVICE THE LEARNER DOES NOT
  // CONTROL. The refusal is recorded so the gate lets them on, and the learner is
  // told which refusal it was and that nothing was taken away.
  it('records unavailable, names the cause, and keeps the course moving', async () => {
    seed('write');
    aiPost.mockResolvedValue({ ok: false, status: 503, json: async () => ({ error: 'budget' }) });
    mount();
    fireEvent.change(await screen.findByTestId('unit-production-input'), {
      target: { value: words(30) },
    });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    const notice = await screen.findByTestId('unit-production-failed');
    expect(notice.textContent).toMatch(/Nothing has been taken away/);
    expect([...productionBlockedUnits()]).toEqual(['A1-1']);
    expect([...producedUnits()]).toEqual([]);
    // And it offers the retry rather than a dead end.
    expect(screen.getByTestId('unit-production-submit').textContent).toBe('Try again');
  });

  it('records unavailable when the coach refuses too', async () => {
    seed('speak');
    coach.mockResolvedValue({
      ok: false,
      failure: { kind: 'server', retryable: true, message: 'x' },
    });
    mount();
    fireEvent.change(await screen.findByTestId('unit-production-input'), {
      target: { value: words(20) },
    });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    await screen.findByTestId('unit-production-failed');
    expect([...productionBlockedUnits()]).toEqual(['A1-1']);
  });

  it('records unavailable on an unparseable 200', async () => {
    seed('write');
    aiPost.mockResolvedValue({ ok: true, json: async () => ({ nope: 1 }) });
    mount();
    fireEvent.change(await screen.findByTestId('unit-production-input'), {
      target: { value: words(30) },
    });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    await screen.findByTestId('unit-production-failed');
    expect([...productionBlockedUnits()]).toEqual(['A1-1']);
  });

  // A LATER SUCCESS CLEARS IT: the learner reached the evaluator, so whatever
  // refused them is no longer refusing.
  it('clears the marker once a grade comes back', async () => {
    seed('write');
    aiPost.mockResolvedValueOnce({ ok: false, status: 503, json: async () => ({}) });
    aiPost.mockResolvedValueOnce({ ok: true, json: async () => ({ score: 71 }) });
    mount();
    fireEvent.change(await screen.findByTestId('unit-production-input'), {
      target: { value: words(30) },
    });
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    await screen.findByTestId('unit-production-failed');
    fireEvent.click(screen.getByTestId('unit-production-submit'));
    await screen.findByTestId('unit-production-result');
    expect([...productionBlockedUnits()]).toEqual([]);
    expect(unitRecord('A1-1')!.production!.writeScore).toBe(71);
  });
});

describe('without a unit', () => {
  it('says it needs one rather than rendering an empty page', async () => {
    localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));
    mount();
    expect(await screen.findByTestId('unit-production-missing')).toBeTruthy();
  });

  it('says the same for a unit the spine does not contain', async () => {
    seed('write', 'ZZ-9');
    mount();
    expect(await screen.findByTestId('unit-production-missing')).toBeTruthy();
  });
});

describe('a learner can get here', () => {
  it('is routed and reachable from the course map', async () => {
    const { readFileSync } = await import('node:fs');
    const { resolve } = await import('node:path');
    const strip = (s: string) =>
      s.replace(/^\s*\/\/[^\n]*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    const router = strip(
      readFileSync(resolve(__dirname, '..', 'components/AppRouter.tsx'), 'utf8'),
    );
    expect(router).toMatch(/import\('\.\/learn\/UnitProductionScreen'\)/);
    expect(router).toMatch(/currentScreen === 'unitproduction'/);
    const map = strip(
      readFileSync(resolve(__dirname, '..', 'components/learn/CourseMapScreen.tsx'), 'utf8'),
    );
    expect(map).toMatch(/requestUnitProduction\(row\.unit\.id, kind\)/);
    expect(map).toMatch(/setScr\('unitproduction'\)/);
    const slot = strip(readFileSync(resolve(__dirname, '..', 'lib/curriculumSlot.ts'), 'utf8'));
    expect(slot).toMatch(/screen: 'unitproduction'/);
  });

  it('waits for the learner to press submit — it never grades on its own', async () => {
    seed('write');
    mount();
    await screen.findByTestId('unit-production');
    await waitFor(() => expect(aiPost).not.toHaveBeenCalled());
  });
});
