/**
 * The floating companion stands aside for a persistent bottom bar.
 *
 * Measured in a browser at 393px (2026-09-27): prof. Kovač's 70px circle is fixed above
 * the tab bar at bottom-left, and `elementFromPoint` at the centre of the lesson's
 * "← Prev" returned the avatar — the tap opened the companion, not the previous slide.
 * The AI conversation chat, a full-screen overlay drawn BELOW it, was the other case.
 * A screen with such a bar marks it `data-bottom-bar`; the companion hides while one is
 * on screen and returns when it is gone.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import React from 'react';
import { readFileSync } from 'node:fs';

vi.mock('../context/AppContext', () => ({ useApp: () => ({ currentScreen: 'animlesson' }) }));
vi.mock('../components/family/CharacterPortrait', () => ({
  default: () => React.createElement('img', { alt: 'prof. Kovač' }),
}));

import KnightCompanion from '../components/shared/KnightCompanion';

const shown = () => !!document.querySelector('img[alt="prof. Kovač"]');

afterEach(() => {
  document.querySelectorAll('[data-bottom-bar]').forEach((e) => e.remove());
});

describe('the companion and a persistent bottom bar', () => {
  it('renders on an ordinary screen', () => {
    render(<KnightCompanion />);
    expect(shown()).toBe(true);
  });

  it('hides while a bottom bar is on screen, and returns when it is gone', async () => {
    render(<KnightCompanion />);
    const bar = document.createElement('div');
    bar.setAttribute('data-bottom-bar', '');
    await act(async () => {
      document.body.appendChild(bar);
      await Promise.resolve();
    });
    expect(shown()).toBe(false);
    await act(async () => {
      bar.remove();
      await Promise.resolve();
    });
    expect(shown()).toBe(true);
  });

  it('the lesson nav and the AI conversation chat carry the marker', () => {
    expect(readFileSync('src/components/learn/AnimatedLesson.tsx', 'utf8')).toMatch(
      /data-bottom-bar\s+style=\{\{\s+position: 'fixed',\s+bottom: 'calc\(60px/,
    );
    expect(readFileSync('src/components/croatia/AIConversationChat.tsx', 'utf8')).toMatch(
      /data-bottom-bar\s+style=\{\{\s+position: 'fixed',\s+inset: 0,/,
    );
  });
});
