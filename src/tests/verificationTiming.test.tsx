// src/tests/verificationTiming.test.ts
//
// THE LEVEL CHECK COMES AFTER THE LEVEL (owner directive, 2026-09-29): the Home prompt
// for a Level Check appears only once every unit of the course level it tests has met
// the bar, a week on, and a week after the last attempt. With no curriculum data yet the
// prompt waits.

import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, act } from '@testing-library/react';
import VerificationGateCard from '../components/home/VerificationGateCard';
import { writeCurriculumSpine } from '../lib/curriculumProgress';
import fs from 'node:fs';
import {
  verificationPromptReady,
  levelCompletedAt,
  courseLevelForStatus,
  VERIFICATION_WAIT_DAYS,
} from '../lib/verificationTiming';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const spine = [...CURRICULUM].sort((a, b) => a.order - b.order);
const unitRecord = (at: string) => ({
  passedAt: at,
  production: { wroteAt: at, writeScore: 80, spokeAt: at, speakScore: 0.8 },
  recheck: { stage: 0, dueAt: '2099-01-01' },
});
function seed(levels: Record<string, string>) {
  localStorage.setItem('nh_curriculum_spine', JSON.stringify(spine));
  localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done: {} }));
  const units: Record<string, unknown> = {};
  for (const [lv, at] of Object.entries(levels))
    for (let i = 1; i <= 6; i++) units[`${lv}-${i}`] = unitRecord(at);
  localStorage.setItem('nh_course_units', JSON.stringify({ units }));
}
const ms = (d: string) => new Date(`${d}T12:00:00`).getTime();

beforeEach(() => localStorage.clear());

describe('the prompt waits for the course level it tests', () => {
  it('maps a status to the course level its check tests', () => {
    expect(courseLevelForStatus('A2')).toBe('A1');
    expect(courseLevelForStatus('C2')).toBe('C1');
    expect(courseLevelForStatus('A1')).toBeNull();
  });

  it('with no curriculum data yet the prompt waits (the spine is still a fetch)', () => {
    expect(verificationPromptReady('B1', null, '2026-09-29')).toBe(false);
  });

  it('is hidden while the course level is unfinished', () => {
    seed({ A1: '2026-09-01' }); // A2 not started
    expect(levelCompletedAt('A2')).toBeNull();
    expect(verificationPromptReady('B1', null, '2026-09-29')).toBe(false);
  });

  it('is hidden for a week after the level is finished, then shows', () => {
    seed({ A1: '2026-09-01', A2: '2026-09-20' });
    expect(levelCompletedAt('A2')).toBe('2026-09-20');
    expect(verificationPromptReady('B1', null, '2026-09-26')).toBe(false); // 6 days
    expect(verificationPromptReady('B1', null, '2026-09-27')).toBe(true); // 7 days
    expect(VERIFICATION_WAIT_DAYS).toBe(7);
  });

  it('a finished LOWER level does not prompt a higher check', () => {
    seed({ A1: '2026-09-01' });
    expect(verificationPromptReady('A2', null, '2026-09-29')).toBe(true);
    expect(verificationPromptReady('B1', null, '2026-09-29')).toBe(false);
  });

  it('after an attempt it waits a week again', () => {
    seed({ A1: '2026-09-01', A2: '2026-09-01' });
    expect(verificationPromptReady('B1', ms('2026-09-26'), '2026-09-29')).toBe(false);
    expect(verificationPromptReady('B1', ms('2026-09-20'), '2026-09-29')).toBe(true);
  });

  it('both Home surfaces ask it (card and next-step rung)', () => {
    for (const f of ['src/components/home/VerificationGateCard.tsx', 'src/lib/nextStep.ts']) {
      const src = fs.readFileSync(f, 'utf8').replace(/^\s*\/\/.*$/gm, '');
      expect(src, f).toMatch(/verificationPromptReady\(\s*gate\.nextCheck/);
    }
  });
});

describe('the card re-checks when the spine lands', () => {
  it('hidden before the spine arrives, shown once it is written (no other re-render)', () => {
    // A finished A1, but no spine yet: the course is unknown, so the prompt waits.
    seed({ A1: '2026-01-05' });
    localStorage.removeItem('nh_curriculum_spine');
    const gate = { required: true, target: 'A2', nextCheck: 'A2', verified: 'A1', options: ['A2'] };
    const { container } = render(
      React.createElement(VerificationGateCard, {
        gate: gate as never,
        currentXp: 5000,
        onStartVerification: () => {},
      }),
    );
    expect(container.innerHTML).toBe('');
    act(() => writeCurriculumSpine(spine as never));
    expect(container.querySelector('[data-testid="verification-gate-card"]')).toBeTruthy();
  });
});
