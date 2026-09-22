# Audit Sync Field Coverage

Verify every persisted field is present in both `buildProgressSnapshot` and `applyRemoteProgress` — the two must stay in exact alignment.

## Steps

1. Read `src/lib/progressSnapshot.ts` and list every field returned by `buildProgressSnapshot()`.

2. Read `src/lib/applyRemoteProgress.ts` — the whole function lives there now, not
   in the sync hook. List every field it reads off the remote document (the
   parameter is `fp`, not `remote`) and applies locally: localStorage sets, state
   dispatches, merges.

   TWO EXTRACTION TRAPS, both of which produced a WRONG answer on 2026-09-22:
   - `buildProgressSnapshot` returns many fields in SHORTHAND (`dc,` `cooldown,`
     `weekXP,` `name,`). A regex keyed on `name:` misses every one of them and
     reports them as "restored but never saved".
   - Several values are IIFEs containing their own braces, so naive
     brace-depth tracking stops early and UNDER-counts the field list.
     Cross-check two extractions, or read the return block.

3. Compare the two lists:
   - **Missing from applyRemoteProgress**: fields saved to Firebase but never restored on login from a new device — data is persisted but silently lost on restore
   - **Missing from progressSnapshot**: fields restored but never saved — will always revert to default after a sync
   - **Present in both**: ✅ correct

4. For each gap found, determine the correct fix:
   - Missing from `applyRemoteProgress`: add a restore line reading from `remote.<field>` and writing to localStorage or dispatching to stats
   - Missing from `progressSnapshot`: add the field to `buildProgressSnapshot()`

5. Apply all fixes, then run `npm test` to confirm nothing breaks.

6. Commit: `Fix sync field coverage — <list of fields added>`
