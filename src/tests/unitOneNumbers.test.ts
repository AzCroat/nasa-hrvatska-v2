// Numbers 0-10 and the emergency numbers belong to Unit 1 (the book's lesson 0), not Unit 3.
// The lesson teaches 112 plus the numbers dialed today: 192, 193, 194.
import { describe, expect, it } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { CAN_DO_A1 } from '../data/canDo/A1';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';

const A1 = CURRICULUM.filter((e: { level: string }) => e.level === 'A1').sort(
  (a: { order: number }, b: { order: number }) => a.order - b.order,
);

describe('numbers in Unit 1', () => {
  it('numbers-time is one of the first five A1 lessons, after greetings', () => {
    expect(A1.slice(0, 5).map((e: { id: string }) => e.id)).toContain('numbers-time');
  });
  it('A1 orders are unique and contiguous from 1', () => {
    A1.slice(0, 40).forEach((e: { order: number }, i: number) => expect(e.order).toBe(i + 1));
  });
  it('needs no lesson that comes later', () => {
    const e = A1.find((x: { id: string }) => x.id === 'numbers-time');
    const pos = new Map(A1.map((x: { id: string; order: number }) => [x.id, x.order]));
    for (const p of e.prerequisites) expect(pos.get(p)).toBeLessThan(e.order);
  });
  it('teaches 192, 193, 194 and 112', () => {
    const l = (LESSONS as { id: string }[]).find((x) => x.id === 'numbers-time');
    const text = JSON.stringify(l);
    for (const n of ['112', '192', '193', '194']) expect(text).toContain(n);
  });
  it('the Unit 1 can-do list promises only what Unit 1 teaches', () => {
    const text = CAN_DO_A1['A1-1'].join(' ');
    expect(text).toMatch(/nula to deset/);
    expect(text).not.toMatch(/nisam|je li|jesi li/);
  });
});
