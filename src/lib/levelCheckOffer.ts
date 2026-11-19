/**
 * levelCheckOffer — the ONE answer to "which Level Check does the button start?"
 *
 * Read by BOTH the Me-tab card (to name the check) and `EquivalencyTestScreen`
 * (to open it), so the card can never name a level from anything but the check
 * the screen will actually run (CLAUDE.md, CEFR Mastery Gate: "NEVER name a level
 * on this card from anything but the check it will actually start").
 *
 * `target` is the STATUS level a pass would grant; the set that grants it is
 * keyed one level below (`levelBelow(target)`), so `set.levelFrom` is the check's
 * name. While the verification gate is open the rung to climb is
 * `gate.nextCheck`; otherwise it is one above the certified level. A learner
 * holding only provisional (grandfathered) passes is therefore offered the first
 * unverified check, never a "topped out" state.
 */
import { levelBelow, type CefrLevel } from './cefr';
import {
  getCertifiedLevel,
  getVerifiedLevel,
  getVerificationGate,
  type VerificationGate,
} from './cefrCertification';
import { getNextTestFor, type EquivalencyTestSet } from '../data/cefrEquivalencyItems';

/** The status level the next check would grant, from an already-read gate. */
export function defaultCheckTarget(gate: VerificationGate): CefrLevel | null {
  if (gate.required && gate.nextCheck) return gate.nextCheck;
  const next = getNextTestFor(getCertifiedLevel());
  return next ? next.levelTo : null;
}

export interface LevelCheckOffer {
  gate: VerificationGate;
  /** Status level a pass would grant; null when no check remains. */
  target: CefrLevel | null;
  /** The set that grants `target`; null when no check remains. */
  set: EquivalencyTestSet | null;
  /** Highest level held by a REAL (non-provisional) pass; A1 when none. */
  verified: CefrLevel;
}

export function getLevelCheckOffer(): LevelCheckOffer {
  const gate = getVerificationGate();
  const target = defaultCheckTarget(gate);
  const from = target ? levelBelow(target) : null;
  return { gate, target, set: from ? getNextTestFor(from) : null, verified: getVerifiedLevel() };
}
