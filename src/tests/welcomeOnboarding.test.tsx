/**
 * ONBOARDING ENDS ON THE COURSE (owner decision, 2026-09-29).
 *
 * Owner: "Shouldn't we just be having users register and then begin lessons at
 * the most basic level to begin their Croatian fluency journey?" Measured first:
 * the Welcome flow was hero → goal → "How much time each day?" (a learner-chosen
 * floor, removed in #782) → a "say your first Croatian word" mic moment → a
 * 15-question placement test whose `nh_level` no longer decided the COURSE (one
 * path, Unit 1 for everyone) — only the Practice tab's content level, so a B1
 * placement meant Unit 1 in the session and B1 flashcards on the tab. Three
 * minutes of testing before any teaching.
 *
 * Now: name → goal (the app READS nh_goal) → the heritage region for heritage
 * goals only, skippable (Heritage Story reads it) → Home, whose Begin Session IS
 * Unit 1, lesson 1. "I already know some Croatian" is the course's own test-out.
 * The App.tsx effect that pushed a 0-XP learner into `new-placement` after 1.2 s
 * is gone with it — otherwise stripping the test from the flow would have thrown
 * every new learner straight back into it.
 */
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import WelcomeScreen from '../components/home/WelcomeScreen';
import type { Stats } from '../types';

const ST = { xp: 0, lc: 0, gc: 0, badges: [], vs: [] } as unknown as Stats;

function mount() {
  const setScr = vi.fn();
  const setName = vi.fn();
  render(<WelcomeScreen name="Ana" au={null} st={ST} setScr={setScr} setName={setName} />);
  return { setScr };
}

const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

beforeEach(() => {
  localStorage.clear();
});

describe('a new learner goes name → goal → Home, and nothing asks them to test first', () => {
  it('a non-heritage goal finishes onboarding on the next tap and lands on Home', () => {
    const { setScr } = mount();
    fireEvent.click(screen.getByText("Let's begin →"));
    fireEvent.click(screen.getByText('Travel to Croatia'));
    fireEvent.click(screen.getByText('Continue →'));
    expect(setScr).toHaveBeenCalledWith('dashboard');
    expect(setScr).not.toHaveBeenCalledWith('placement');
    expect(setScr).not.toHaveBeenCalledWith('new-placement');
    expect(localStorage.getItem('onboarded')).toBe('true');
    expect(localStorage.getItem('nh_goal')).toBe('travel');
    expect(localStorage.getItem('nh_goal_set')).toBe('1');
    // No time commitment, no placement, no mic moment — ever, on this path.
    expect(screen.queryByText(/How much time/)).toBeNull();
    expect(screen.queryByText(/placement test/i)).toBeNull();
    expect(screen.queryByRole('dialog')).toBeNull();
    // Onboarding never wrote the flags the placement test owns.
    expect(localStorage.getItem('nh_placement_done')).toBeNull();
    expect(localStorage.getItem('nh_level')).toBeNull();
  });

  it('a heritage goal gets ONE more, optional question — the region — then Home', () => {
    const { setScr } = mount();
    fireEvent.click(screen.getByText("Let's begin →"));
    fireEvent.click(screen.getByText('My heritage & roots'));
    fireEvent.click(screen.getByText('Continue →'));
    expect(setScr).not.toHaveBeenCalled();
    // The heritage step: its primary action starts learning, its secondary skips.
    expect(screen.getByText('Skip this step')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Start learning →'));
    expect(setScr).toHaveBeenCalledWith('dashboard');
    expect(localStorage.getItem('nh_goal')).toBe('heritage');
    expect(localStorage.getItem('onboarded')).toBe('true');
  });

  it('skipping the heritage step also lands on Home', () => {
    const { setScr } = mount();
    fireEvent.click(screen.getByText("Let's begin →"));
    fireEvent.click(screen.getByText('Speak with family'));
    fireEvent.click(screen.getByText('Continue →'));
    fireEvent.click(screen.getByText('Skip this step'));
    expect(setScr).toHaveBeenCalledWith('dashboard');
  });

  it('the goal step cannot be passed without a goal', () => {
    const { setScr } = mount();
    fireEvent.click(screen.getByText("Let's begin →"));
    fireEvent.click(screen.getByText('Continue →'));
    expect(setScr).not.toHaveBeenCalled();
    expect(localStorage.getItem('onboarded')).toBeNull();
  });
});

describe('the placement test is out of onboarding everywhere, by source', () => {
  it('WelcomeScreen routes to no test and mounts no mic moment', () => {
    const src = strip(readFileSync('src/components/home/WelcomeScreen.tsx', 'utf8'));
    expect(src).not.toMatch(/setScr\(\s*'placement'\s*\)/);
    expect(src).not.toMatch(/new-placement/);
    expect(src).not.toMatch(/Say your first Croatian word|Skip speaking|Take the placement test/);
    expect(src).not.toMatch(/How much time|daily goal/i);
  });

  it('App.tsx no longer pushes a 0-XP learner into the test on a timer', () => {
    const src = strip(readFileSync('src/App.tsx', 'utf8'));
    expect(src).not.toMatch(/setScr\(\s*'new-placement'\s*\)/);
    expect(src).not.toMatch(/nh_placement_declined/);
  });

  it("the onboarding-only 'placement' route is gone; the Me tab's retake ('new-placement') stays", () => {
    const router = strip(readFileSync('src/components/AppRouter.tsx', 'utf8'));
    expect(router).not.toMatch(/currentScreen === 'placement'/);
    expect(router).toMatch(/currentScreen === 'new-placement'/);
    const me = strip(
      readFileSync('src/components/profile/sections/LearningPreferencesSection.tsx', 'utf8'),
    );
    expect(me).toMatch(/setScr\('new-placement'\)/);
  });
});
