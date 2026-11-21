// A learner is never asked to write what the course has not yet taught them to write.
//
// The first lesson of the course (the alphabet) used to end with "Write two or three
// sentences in Croatian" and a 12-word floor, for a learner who knew the letters and
// three words. The fix is a per-lesson `produce` on the curriculum spine: `null` means
// "nothing writable yet" (no step, no Today's Session "Write it"), an object carries the
// lesson's own task and a floor the lesson's taught words can reach. This test keeps
// that true for the whole opening unit and for every lesson that sets one.
import { describe, expect, it } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const UNIT_1 = CURRICULUM.filter((e: { level: string }) => e.level === 'A1')
  .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
  .slice(0, 5);

describe('lesson writing tasks (spine `produce`)', () => {
  it('every lesson of Unit 1 states what it asks for: a task, or null for none', () => {
    expect(UNIT_1).toHaveLength(5);
    for (const e of UNIT_1) {
      expect('produce' in e, `${e.id} must declare produce (object or null)`).toBe(true);
    }
  });

  it('the two sound lessons ask for no writing', () => {
    const byId = new Map(UNIT_1.map((e: { id: string }) => [e.id, e]));
    expect(byId.get('alphabet')?.produce).toBeNull();
    expect(byId.get('sounds-palatals')?.produce).toBeNull();
  });

  it('a task has text and a floor a beginner can reach', () => {
    for (const e of CURRICULUM) {
      if (!e.produce) continue;
      expect(typeof e.produce.task === 'string' && e.produce.task.length > 20, e.id).toBe(true);
      expect(e.produce.minWords, e.id).toBeGreaterThanOrEqual(3);
      // The default floor is 12; an A1 opening lesson may only ask for LESS.
      if (UNIT_1.includes(e)) expect(e.produce.minWords, e.id).toBeLessThanOrEqual(10);
    }
  });
});

import { learnerSafeObjective, learnerSafeBrief } from '../lib/produceBrief';

describe('what the learner sees before they produce (never the answer)', () => {
  it('strips the jobs lesson examples that were the answers', () => {
    const line = 'Make the female form of a job: učitelj → učiteljica, liječnik → liječnica';
    expect(learnerSafeObjective(line)).toBe('Make the female form of a job');
    expect(learnerSafeBrief([line])).toBe('Make the female form of a job.');
  });

  it('drops a line that is only an example, and any parenthetical pair', () => {
    expect(learnerSafeObjective('Handle the short nouns that grow grad → gradovi')).toBe('');
    expect(learnerSafeObjective('Make it plural (brat → braća) from its gender')).toBe(
      'Make it plural from its gender',
    );
  });

  it('for EVERY lesson in the course, no shown objective carries an arrow or a colon example', () => {
    for (const e of CURRICULUM) {
      for (const o of e.objectives ?? []) {
        const shown = learnerSafeObjective(o);
        expect(shown.includes('→'), `${e.id}: ${o}`).toBe(false);
        expect(shown.includes(':'), `${e.id}: ${o}`).toBe(false);
      }
      if (e.produce) expect(e.produce.task.includes('→'), `${e.id} task`).toBe(false);
    }
  });
});
