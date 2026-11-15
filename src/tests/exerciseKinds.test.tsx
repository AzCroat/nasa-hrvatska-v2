// exerciseKinds.test.tsx — every new exercise kind through the dispatcher, against
// the one practice contract: a right answer settles `right` and explains; a first
// miss shows the hint and allows a second try; a second miss settles `shown` and
// displays the answer. Audio-first kinds are locked until the recording has played,
// and a failed play can be skipped (settled `skipped`, neither right nor wrong).
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { PRACTICE_FIXTURE } from '../../e2e/fixtures/exercise-kinds-fixture.js';
import { seededOrder } from '../components/learn/exercises/seeded';

const speakMock = vi.fn();
vi.mock('../lib/audio', () => ({
  speak: (...a: unknown[]) => speakMock(...a),
  speakSlow: vi.fn(),
  stopAudio: vi.fn(),
  getLastTtsFailure: () => ({ cause: 'network' }),
  describeTtsFailure: () => 'The connection dropped.',
}));

import ExerciseItem from '../components/learn/exercises/ExerciseItem';
import type { Exercise } from '../components/learn/exercises/types';

const byType = (t: string) =>
  PRACTICE_FIXTURE.find((x: { type: string }) => x.type === t) as Exercise;

function mount(item: Exercise) {
  const onSettle = vi.fn();
  render(
    <ExerciseItem item={item} onSettle={onSettle} eyebrow="Practice" color="#16a34a" seed={0} />,
  );
  return onSettle;
}
const id = (s: string) => screen.getByTestId(s);

beforeEach(() => {
  speakMock.mockReset();
  speakMock.mockResolvedValue('played');
});

describe('tf', () => {
  it('right answer settles right and explains', () => {
    const s = mount(byType('tf'));
    fireEvent.click(id('ex-tf-true'));
    expect(s).toHaveBeenCalledWith('right');
    expect(id('ex-explanation').textContent).toMatch(/Thirty letters/);
  });
  it('a first miss gives the generic hint and a second try, then right on the second try', () => {
    const s = mount(byType('tf'));
    fireEvent.click(id('ex-tf-false'));
    expect(id('ex-hint').textContent).toMatch(/try once more/);
    expect(s).not.toHaveBeenCalled();
    expect((id('ex-tf-false') as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(id('ex-tf-true'));
    expect(s).toHaveBeenCalledWith('right');
    expect(id('ex-explanation').textContent).toMatch(/second try/);
  });
  it('uses the item hint when it has one', () => {
    mount({ type: 'tf', q: 'q', answer: true, hint: 'Think about dž.', explanation: 'e' });
    fireEvent.click(id('ex-tf-false'));
    expect(id('ex-hint').textContent).toMatch(/Think about dž/);
  });
});

describe('match', () => {
  const item = byType('match') as Extract<Exercise, { type: 'match' }>;
  const rightFor = (pair: number) =>
    document.querySelector(`[data-testid^="ex-match-right-"][data-pair="${pair}"]`) as HTMLElement;

  it('is shuffled, never in answer order', () => {
    mount(item);
    const order = [...document.querySelectorAll('[data-testid^="ex-match-right-"]')].map((e) =>
      Number(e.getAttribute('data-pair')),
    );
    expect(order).not.toEqual(item.pairs.map((_, i) => i));
  });
  it('all pairs right settles right', () => {
    const s = mount(item);
    item.pairs.forEach((_, i) => {
      fireEvent.click(id(`ex-match-left-${i}`));
      fireEvent.click(rightFor(i));
    });
    expect(s).toHaveBeenCalledWith('right');
    expect(id('ex-explanation').textContent).toMatch(/polite hello and goodbye/);
  });
  it('a wrong pair is the first miss; a second settles shown with the pairs', () => {
    const s = mount(item);
    fireEvent.click(id('ex-match-left-0'));
    fireEvent.click(rightFor(1));
    expect(id('ex-hint')).toBeTruthy();
    fireEvent.click(id('ex-match-left-0'));
    fireEvent.click(rightFor(2));
    expect(s).toHaveBeenCalledWith('shown');
    expect(id('ex-revealed').textContent).toMatch(/Dobar dan = Good day/);
  });
});

describe('sort', () => {
  const item = byType('sort') as Extract<Exercise, { type: 'sort' }>;
  it('places every item correctly -> right', () => {
    const s = mount(item);
    item.items.forEach((x, i) => {
      fireEvent.click(id(`ex-sort-item-${i}`));
      fireEvent.click(id(`ex-sort-group-${x.group}`));
    });
    expect(s).toHaveBeenCalledWith('right');
  });
  it('two wrong placements settle shown', () => {
    const s = mount(item);
    fireEvent.click(id('ex-sort-item-0')); // č -> group 0 is right; use group 1
    fireEvent.click(id('ex-sort-group-1'));
    expect(id('ex-hint')).toBeTruthy();
    fireEvent.click(id('ex-sort-item-0'));
    fireEvent.click(id('ex-sort-group-1'));
    expect(s).toHaveBeenCalledWith('shown');
    expect(id('ex-sort-placed-0').textContent).toMatch(/č/);
  });
});

describe('order', () => {
  const item = byType('order') as Extract<Exercise, { type: 'order' }>;
  const tileFor = (w: string) =>
    [...document.querySelectorAll('[data-testid^="ex-order-tile-"]')].find(
      (e) => e.textContent === w,
    ) as HTMLElement;
  it('the shuffled tiles are not in answer order', () => {
    expect(seededOrder(item.words.length, 0)).not.toEqual([0, 1, 2]);
  });
  it('correct order settles right; Check waits for all tiles', () => {
    const s = mount(item);
    expect((id('ex-check') as HTMLButtonElement).disabled).toBe(true);
    item.words.forEach((w) => fireEvent.click(tileFor(w)));
    fireEvent.click(id('ex-check'));
    expect(s).toHaveBeenCalledWith('right');
  });
  it('a placed tile can be taken back; two wrong orders settle shown', () => {
    const s = mount(item);
    fireEvent.click(tileFor('sam'));
    fireEvent.click(id('ex-order-placed-0'));
    expect(document.querySelectorAll('[data-testid^="ex-order-placed-"]').length).toBe(0);
    for (let round = 0; round < 2; round++) {
      [...item.words].reverse().forEach((w) => {
        const t = tileFor(w);
        if (!(t as HTMLButtonElement).disabled) fireEvent.click(t);
      });
      fireEvent.click(id('ex-check'));
      if (round === 0) {
        expect(id('ex-hint')).toBeTruthy();
        // take every tile back for the second try
        for (let k = 2; k >= 0; k--) fireEvent.click(id(`ex-order-placed-${k}`));
      }
    }
    expect(s).toHaveBeenCalledWith('shown');
    expect(id('ex-order-line').textContent).toBe('Ja sam Ana.');
  });
  it('accepts an alternative sentence', () => {
    const s = mount({ ...item, accept: ['sam Ja Ana.'] });
    ['sam', 'Ja', 'Ana.'].forEach((w) => fireEvent.click(tileFor(w)));
    fireEvent.click(id('ex-check'));
    expect(s).toHaveBeenCalledWith('right');
  });
});

describe('transform', () => {
  const item = byType('transform');
  const type = (v: string) => {
    fireEvent.change(id('ex-transform-input'), { target: { value: v } });
    fireEvent.click(id('ex-check'));
  };
  it('right answer', () => {
    const s = mount(item);
    type('ja nisam ana');
    expect(s).toHaveBeenCalledWith('right');
  });
  it('miss -> hint -> second miss shows the answer', () => {
    const s = mount(item);
    type('Ja sam Ana');
    expect(id('ex-hint').textContent).toMatch(/one word/);
    type('Ja nijesam Ana');
    expect(s).toHaveBeenCalledWith('shown');
    expect(id('ex-revealed').textContent).toMatch(/Ja nisam Ana/);
  });
});

describe('fix', () => {
  const item = byType('fix');
  it('tapping the wrong word is right and reveals the corrected sentence', () => {
    const s = mount(item);
    fireEvent.click(id('ex-fix-word-1'));
    expect(s).toHaveBeenCalledWith('right');
    expect(id('ex-revealed').textContent).toMatch(/Ja sam Marko\./);
  });
  it('two wrong taps settle shown', () => {
    const s = mount(item);
    fireEvent.click(id('ex-fix-word-0'));
    expect(id('ex-hint').textContent).toMatch(/to be/);
    fireEvent.click(id('ex-fix-word-2'));
    expect(s).toHaveBeenCalledWith('shown');
    expect(id('ex-revealed').textContent).toMatch(/Ja sam Marko\./);
  });
});

describe('listen (audio-first)', () => {
  const item = byType('listen') as Extract<Exercise, { type: 'listen' }>;
  it('options are locked until the audio has played; the audio text is not shown', async () => {
    const s = mount(item);
    expect((id('ex-listen-option-0') as HTMLButtonElement).disabled).toBe(true);
    expect(document.body.textContent).not.toMatch(/Drago mi je/);
    fireEvent.click(id('ex-listen-play'));
    await waitFor(() =>
      expect((id('ex-listen-option-0') as HTMLButtonElement).disabled).toBe(false),
    );
    expect(speakMock).toHaveBeenCalledWith('Drago mi je.', undefined);
    fireEvent.click(id('ex-listen-option-0'));
    expect(s).toHaveBeenCalledWith('right');
    expect(document.body.textContent).toMatch(/Drago mi je/);
  });
  it('two wrong answers settle shown', async () => {
    const s = mount(item);
    fireEvent.click(id('ex-listen-play'));
    await waitFor(() =>
      expect((id('ex-listen-option-1') as HTMLButtonElement).disabled).toBe(false),
    );
    fireEvent.click(id('ex-listen-option-1'));
    expect(id('ex-hint')).toBeTruthy();
    fireEvent.click(id('ex-listen-option-2'));
    expect(s).toHaveBeenCalledWith('shown');
  });
  it('a failed play names its cause and the skip settles skipped', async () => {
    speakMock.mockResolvedValue('failed');
    const s = mount(item);
    fireEvent.click(id('ex-listen-play'));
    await waitFor(() => expect(id('ex-audio')).toBeTruthy());
    expect(id('ex-audio').textContent).toMatch(/connection dropped/);
    expect((id('ex-listen-option-0') as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(id('ex-audio-skip'));
    expect(s).toHaveBeenCalledWith('skipped');
    expect(id('ex-explanation').getAttribute('data-result')).toBe('skipped');
  });
});

describe('dictate (audio-first)', () => {
  const item = byType('dictate');
  const type = (v: string) => {
    fireEvent.change(id('ex-dictate-input'), { target: { value: v } });
    fireEvent.click(id('ex-check'));
  };
  it('the input is locked until heard, then judged', async () => {
    const s = mount(item);
    expect((id('ex-dictate-input') as HTMLInputElement).disabled).toBe(true);
    fireEvent.click(id('ex-dictate-play'));
    await waitFor(() => expect((id('ex-dictate-input') as HTMLInputElement).disabled).toBe(false));
    type('ja sam ana');
    expect(s).toHaveBeenCalledWith('right');
  });
  it('miss -> hint -> second miss shows the answer', async () => {
    const s = mount(item);
    fireEvent.click(id('ex-dictate-play'));
    await waitFor(() => expect((id('ex-dictate-input') as HTMLInputElement).disabled).toBe(false));
    type('Ja si Ana');
    expect(id('ex-hint').textContent).toMatch(/Three words/);
    type('Ja je Ana');
    expect(s).toHaveBeenCalledWith('shown');
    expect(id('ex-revealed').textContent).toMatch(/Ja sam Ana/);
  });
  it('a failed play can be skipped without counting', async () => {
    speakMock.mockResolvedValue('failed');
    const s = mount(item);
    fireEvent.click(id('ex-dictate-play'));
    await waitFor(() => expect(id('ex-audio')).toBeTruthy());
    fireEvent.click(id('ex-audio-skip'));
    expect(s).toHaveBeenCalledWith('skipped');
  });
});

describe('an unknown kind never strands the slide', () => {
  it('settles as skipped', () => {
    const s = mount({ type: 'hologram' } as unknown as Exercise);
    expect(s).toHaveBeenCalledWith('skipped');
  });
});
