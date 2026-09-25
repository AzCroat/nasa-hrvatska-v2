/**
 * The uid a learner with no account is keyed under, so their progress blob is
 * `uP_guest`.
 *
 * TWO places must agree on this value — `App.tsx` writes `uP_<uid>` with it for a
 * guest, and `useDaily` reads that blob back — and until 2026-09-25 it existed
 * only inside App.tsx, which is why `loadFromMainDoc` could not find a legacy
 * guest's daily-challenge state.
 *
 * IT DELIBERATELY DOES NOT LIVE IN `lib/constants/storage`. That module is a
 * `.ts`/`.js` PAIR whose two resolvers disagree: TypeScript resolves
 * `'./constants/storage.js'` to `storage.ts` while Vite bundles `storage.js`
 * (see `noUnreachableModules.test.ts`, which records the `.ts` as unreachable at
 * runtime). The pair has already drifted — `PLACEMENT_DECLINED` exists only in
 * the `.js` — so a constant added there is bundled but invisible to the
 * typechecker, or vice versa. A new shared fact needs an unambiguous home.
 */
export const GUEST_UID = 'guest';
